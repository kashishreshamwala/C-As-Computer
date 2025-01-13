// Selecting forms and related elements
const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

// Show/Hide password functionality
pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pwFields = eyeIcon.closest(".input-field").querySelectorAll(".password");
        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});

// Toggle between Login and Signup forms
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    });
});

// Utility function for validation
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Signup form submission
const signupForm = document.querySelector(".signup form");
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailField = signupForm.querySelector('input[type="email"]');
    const passwordFields = signupForm.querySelectorAll('input[type="password"]');
    const email = emailField.value.trim().toLowerCase();
    const password = passwordFields[0].value;
    const confirmPassword = passwordFields[1].value;

    // Validate email and passwords
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Signup successful!");
            forms.classList.remove("show-signup"); // Switch to login form
        } else {
            alert(data.message || "Signup failed!");
        }
    } catch (err) {
        console.error("Error during signup:", err);
        alert("An error occurred. Please try again.");
    }
});

// Login form submission
const loginForm = document.querySelector(".login form");
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailField = loginForm.querySelector('input[type="email"]');
    const passwordField = loginForm.querySelector('input[type="password"]');
    const email = emailField.value.trim().toLowerCase();
    const password = passwordField.value;

    // Validate email and password
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!password) {
        alert("Password cannot be empty.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Login successful!");
            window.location.href = "/dashboard"; // Redirect after successful login
        } else {
            alert(data.message || "Login failed!");
        }
    } catch (err) {
        console.error("Error during login:", err);
        alert("An error occurred. Please try again.");
    }
});
