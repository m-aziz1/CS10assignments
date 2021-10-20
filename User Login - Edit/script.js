//User Login

//HTML Variables
let userInEl = document.getElementById("userIn");
let passInEl = document.getElementById("passIn");
let invUserEl = document.getElementById("inv-usr");
let invPassEl = document.getElementById("inv-pass");
let titleEl = document.getElementById("title");

//Event listener
document.getElementById("log-btn").addEventListener("click", infoValidate);

//Event function
function infoValidate() {

    //Get input
    let uName = userInEl.value;
    let pWord = passInEl.value;

    //Check name
    if (uName === "admin" && pWord === "1234") {
        window.open("/welcomepg/welcome.html");
        //titleEl.innerHTML = "<span style='color: green;'>Login Successful</span>";
    } else if (uName !== "admin" && pWord !== "1234") {
        alert("Invalid username and password");
    } else if (uName != "admin") {
        invUserEl.innerHTML = "Invalid Username";
    } else if (pWord != "1234") {
        invPassEl.innerHTML = "Invalid Password";
    }
}