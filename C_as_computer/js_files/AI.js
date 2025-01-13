const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
const suggestions= document.querySelectorAll(".suggestion-list .suggestion");
const toggleThemeButton = document.querySelector("#toggle-theme-button");
const deletChatButton = document.querySelector("#delete-chat-button");

let userMessage = null;
let isResponseGenerating = false;

//API configuration
const GEMINI_API_KEY = "AIzaSyD9FAPV1Yf2ymgUgqlnvU9ErmBNccAwgOA";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const loadLocalstorageData = () => {
    const savedChats = localStorage.getItem("savedChats");
    const isLightMode = (localStorage.getItem("themeColor") === "light_mode");

    //apply the stored theme
    document.body.classList.toggle("light_mode",isLightMode);
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";

    //Restore saved chats
    chatList.innerHTML = savedChats || "";
    document.body.classList.toggle("hide-header",savedChats);
    chatList.scrollTo(0, chatList.scrollHeight)// scroll to the bottom
}

loadLocalstorageData();
//Craete a new message elemnt and return it
const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}
//show typing effect by displaying words one by one
const showTypingEffect = (text, textElement, incomingMessageDiv) => {
    const words = text.split(' ');
    let currentWordIndex = 0;

    const typingInterval = setInterval(() =>{
        //append each word to text element with a space
        textElement.innerText +=(currentWordIndex === 0 ? ' ' : ' ') + words[currentWordIndex++];
        incomingMessageDiv.querySelector(".icon").classList.add("hide");

        //if all words are displayed
        if(currentWordIndex === words.length){
            clearInterval(typingInterval);
            isResponseGenerating = false;
            incomingMessageDiv.querySelector(".icon").classList.remove("hide");
            localStorage.setItem("savedChats", chatList.innerHTML); //save chats to local storage
           
        }
        chatList.scrollTo(0, chatList.scrollHeight)// scroll to the bottom
    }, 75);
}
//fetch response from the API based on user message
const generateAPIResponse = async(incomingMessageDiv) => {
    const textElement = incomingMessageDiv.querySelector(".text");//get text element
    //send a POST request to the API with the user's message
    try{
        const response = await fetch(API_URL,{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({
                contents:[{
                    role:"user",
                    parts:[{ text : userMessage}]
                }]
            })
        });
        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);

        //get the API respnose text and remove asterisks from it
       const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
       showTypingEffect(apiResponse, textElement, incomingMessageDiv);
       console.log(apiResponse)
    }catch (error){
        isResponseGenerating = false;
        textElement.innerText = error.message;
        textElement.classList.add("error");
    }finally{
        incomingMessageDiv.classList.remove("loading");
    }
}

//show a loading animation while waiting for the API response
const showLoadingAnimation = () => {
    const html = ` <div class="message-content">
                <img src="images/cai.png" alt="C AI Image" class="avatar">
                <p class="text"></p>
                <div class="loading-indicator">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                </div>
            </div>
            <span onClick="copyMessage(this)" class="icon material-symbols-rounded">content_copy</span>`;

const incomingMessageDiv = createMessageElement(html,"incoming" , "loading");
chatList.appendChild(incomingMessageDiv);

chatList.scrollTo(0, chatList.scrollHeight)// scroll to the bottom
generateAPIResponse(incomingMessageDiv);
}

//copy message text to the clipboard
const copyMessage = (copyIcon) => {
    const messageText = copyIcon.parentElement.querySelector(".text").innerText;

    navigator.clipboard.writeText(messageText);
    copyIcon.innerText = "done";//show tick icon
    setTimeout(() => copyIcon.innerText = "content_copy", 1000);//Revert icon after 1 second
}
//handle sending outgoing chat message
const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(".typing-input").value.trim() || userMessage;
    if(!userMessage || isResponseGenerating) return;//exit if there is no message

    isResponseGenerating = true;

    const html = `<div class="message-content">
                <img src="images/person3.jpeg" alt="User Image" class="avatar">
                <p class="text"></p>
            </div>`;

    
    const outgoingMessagrDiv = createMessageElement(html,"outgoing");
    outgoingMessagrDiv.querySelector(".text").innerText = userMessage;
    chatList.appendChild(outgoingMessagrDiv);

    typingForm.reset(); //clear inout fild
    chatList.scrollTo(0, chatList.scrollHeight)// scroll to the bottom
    document.body.classList.add("hide-header");//hide the header once the chat start
    setTimeout(showLoadingAnimation, 500)//show loading animation after a delay
}

//set message and handle outgoing chat when a suggestion is clicked
suggestions.forEach(suggestion => {
    suggestion.addEventListener("click", () => {
        userMessage = suggestion.querySelector(".text").innerText;
        handleOutgoingChat();
    });
});

//toggle between light and dark themes
toggleThemeButton.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light_mode");
    localStorage.setItem("themeColor",isLightMode ? "light_mode" : "dark_mode");
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
});

//delete all chats from local storage when button is clicked
deletChatButton.addEventListener("click", () => {
    if(confirm("Are you sure you want to delete all messages?")){
        localStorage.removeItem("savedChats");
        loadLocalstorageData();
    }
});

//prevent default form submition
typingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    handleOutgoingChat();
});