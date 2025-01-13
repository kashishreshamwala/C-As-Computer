class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
    <header class="header">
        <div class="logoContent">
            <a href="index.html" class="logo">
                <div class="logo"><img src="images/clogo.png"></a>
            </div>
            <h1 class="logoName">C as Computer </h1>
        </div>
        <div class="menu_bar">
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="#">Tutorials<i class="fas fa-caret-down"></i></a>
                    <div class="dropdown_menu">
                        <ul>
                            <li><a href="html_css.html">HTML and CSS <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_html_css">
                                    <ul>
                                        <li><a href="html_css.html">Learn HTML</a></li>
                                        <li><a href="css.html">Learn CSS</a></li>
                                        <li><a href="rew.html">Learn RWD</a></li>
                                        <li><a href="boot.html">Learn Bootstrap</a></li>
                                        <li><a href="colors.html">Learn Colors</a></li>
                                        <li><a href="icons.html">Learn Icons</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li><a href="#">Data Analytics <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_dataanalytics">
                                    <ul>
                                        <li><a href="ai.html">Learn AI</a></li>
                                        <li><a href="g_ai.html">Learn Generative AI</a></li>
                                        <li><a href="chatgpt-3.html">Learn ChatGPT-3.5</a></li>
                                        <li><a href="chatgpt-4.html">Learn ChatGPT-4</a></li>
                                        <li><a href="google_bard.html">Learn Google Bard</a></li>
                                        <li><a href="dsa.html">Learn DSA</a></li>
                                        <li><a href="numpy.html">Learn NumPy</a></li>
                                        <li><a href="matplotlib.html">Learn Matplotlib</a></li>
                                        <li><a href="excel.html">Learn Excel</a></li>
                                        <li><a href="google_sheets.html">Learn Google Sheets</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="java.html">JavaScript <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_javascript">
                                    <ul>
                                        <li><a href="java.html">Learn JavaScript</a></li>
                                        <li><a href="react.html">Learn React</a></li>
                                        <li><a href="jquery.html">Learn JQuery</a></li>
                                        <li><a href="json.html">Learn JSON</a></li>
                                        <li><a href="ajax.html">Learn AJAX</a></li>
                                    </ul>

                                </div>
                            </li>
                            <li><a href="#">Backend <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_backend">
                                    <ul>
                                        <li><a href="python.html">Learn Python</a></li>
                                        <li><a href="sql.html">Learn SQL</a></li>
                                        <li><a href="mysql.html">Learn MySQL</a></li>
                                        <li><a href="php.html">Learn PHP</a></li>
                                        <li><a href="java.html">Learn Java</a></li>
                                        <li><a href="c.html">Learn C</a></li>
                                        <li><a href="c++.html">Learn C++</a></li>
                                        <li><a href="c#.html">Learn C#</a></li>
                                        <li><a href="R.html">Learn R</a></li>
                                        <li><a href="mongodb.html">Learn MongoDB</a></li>
                                        <li><a href="xml.html">Learn XMl</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="web_building.html">Web Building <i class="fas fa-caret-right"></i></a></li>

                        </ul>
                    </div>
                </li>
                <li><a href="#">Exercises<i class="fas fa-caret-down"></i></a>
                    <div class="dropdown_menu">
                        <ul>
                            <li><a href="#">HTML and CSS <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_html_css">
                                    <ul>
                                        <li><a href="html_css_ex.html">HTML Exercise</a></li>
                                        <li><a href="css_ex.html"> CSS Exercise</a></li>
                                        <li><a href="boot3_ex.html"> Bootstrap 3 Exercise</a></li>
                                        <li><a href="boot4_ex.html"> Bootstrap 4 Exercise</a></li>
                                        <li><a href="boot5_ex.html"> Bootstrap 5 Exercise</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li><a href="#">Data Analytics <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_dataanalytics">
                                    <ul>
                                        <li><a href="dsa_ex.html"> DSA Exercise</a></li>
                                        <li><a href="numpy_ex.html"> NumPy Exercise</a></li>
                                        <li><a href="panda_ex.html"> Panda Exercise</a></li>
                                        <li><a href="excel_ex.html"> Excel Exercise</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">JavaScript <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_javascript">
                                    <ul>
                                        <li><a href="javascript_ex.html"> JavaScript Exercise</a></li>
                                        <li><a href="react_ex.html"> React Exercise</a></li>
                                        <li><a href="jquery_ex.html"> JQuery Exercise</a></li>
                                    </ul>

                                </div>
                            </li>
                            <li><a href="#">Backend <i class="fas fa-caret-right"></i></a>
                                <div class="dropdown_menu_backend">
                                    <ul>
                                        <li><a href="python_ex.html"> Python Exercise</a></li>
                                        <li><a href="sql_ex.html"> SQL Exercise</a></li>
                                        <li><a href="mysql_ex.html"> MySQL Exercise</a></li>
                                        <li><a href="php_ex.html"> PHP Exercise</a></li>
                                        <li><a href="java_ex.html"> Java Exercise</a></li>
                                        <li><a href="c_ex.html"> C Exercise</a></li>
                                        <li><a href="c++_ex.html"> C++ Exercise</a></li>
                                        <li><a href="c#_ex.html"> C# Exercise</a></li>
                                        <li><a href="r_ex.html"> R Exercise</a></li>
                                        <li><a href="mongodb_ex.html"> MongoDB Exercise</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="web_building.html">Web Building <i class="fas fa-caret-right"></i></a></li>

                        </ul>
                    </div>
                </li>
                <li><a href="software.html">Software<i class="fas fa-caret-down"></i></a>
                    <div class="dropdown_menu">
                        <ul>
                            <li><a href="accounting.html">accounting</a></li>
                            <li><a href="antivirus.html">Antivirus</a></li>
                            <li><a href="crm.html">CRM</a></li>
                            <li><a href="gambling.html">Gambling </a></li>
                            <li><a href="hosting.html">Hosting</a></li>
                            <li><a href="hr.html">HR</a></li>
                            <li><a href="investing.html">Investing</a></li>
                            <li><a href="pass.html">Password Manager</a></li>
                            <li><a href="project.html">Project Manager</a></li>
                            <li><a href="robots.html">Trading Robots</a></li>
                            <li><a href="spy.html">Spy</a></li>
                            <li><a href="voip.html">VoIP</a></li>
                            <li><a href="vpn.html">VPN</a></li>
                        </ul>
                    </div>
                </li>
                 <button class="btnNotes-popup" onclick="openPopup()">My Notes</button>
            </ul>
        </div>
        <div class="icon">
            <i class="fas fa-bars" id="menu-bar"></i>
        </div>
        <div class="search">
            <span class="search-icon material-symbols-outlined">search</span>
            <input class="search-input" type="search" placeholder="Search">
        </div>
        <button class="btnAI-popup" onclick="openAIPopup()">My AI</button>                      
        <img src="images/moon.png" id="iconn">         
          <a href="login.html"><button class="btnLogin-popup">Login</button></a>
    </header>
            <div id="notesPopup" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closePopup()">&times;</span>
                <iframe src="notes.html" frameborder="0" style="width: 100%; height: 80vh;"></iframe>
            </div>
            </div>
            <div id="AIPopup" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeAIPopup()">&times;</span>
                <iframe src="AItool.html" frameborder="0" style="width: 100%; height: 80vh;"></iframe>
            </div>
        </div>`
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  
           <footer class="footer" id="contact">
            <div class="box-container">
                <div class="mainBox">
                    <div class="content">
                        <a href="#"><img src="images/clogo.png" width="100px"></a>
                        <h1 class="logoName"> C As Computer </h1>
                    </div>
                </div>
                <div class="box">
                    <h3>Quick link</h3>
                    <a href="#"> <i class="fas fa-arrow-right"></i>Home</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>product</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>blogs</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>review</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>contact</a>

                </div>
                <div class="box">
                    <h3>Extra link</h3>
                    <a href="#"> <i class="fas fa-arrow-right"></i>Account info</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>order item</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>privacy policy</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>payment method</a>
                    <a href="#"> <i class="fas fa-arrow-right"></i>our services</a>
                </div>
                <div class="box">
                    <h3>Contact Info</h3>
                    <a href="#"> <i class="fas fa-phone"></i>+91 12222 34444</a>
                    <a href="#"> <i class="fas fa-envelope"></i>kashish1@gmail.com</a>

                </div>

            </div>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
                <a href="#" class="fab fa-pinterest"></a>
            </div>
            <div class="credit">
                created by <span>Ms.Kashish Reshamwala </span> |all rights reserved !
            </div>
        </footer>`
    }
}
customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
function openPopup() {
    document.getElementById('notesPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('notesPopup').style.display = 'none';
}
function openAIPopup() {
    document.getElementById('AIPopup').style.display = 'block';
}

function closeAIPopup() {
    document.getElementById('AIPopup').style.display = 'none';
}