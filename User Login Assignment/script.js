//User Login

//HTML Variables
let userInEl = document.getElementById("userIn");
let passInEl = document.getElementById("passIn");

//Event listener
document.getElementById("log-btn").addEventListener("click", infoValidate);

//Event function
function infoValidate() {

    //Get input
    let uName = userInEl.value;
    let pWord = passInEl.value;

    //info Validation
    if (uName === "admin" && pWord === "1234") {
        alert("Login Successful");
    } else if (uName != "admin") {
        alert("Invalid Username");
    } else if (pWord != "1234") {
        alert("Invalid Password");
    }
}