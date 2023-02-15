//Login validatation

function validateForm() {
    var user = document.loginForm.usr.value;
    var pass = document.loginForm.pwd.value;
    var username = "username";
    var password = "password";
    if ((user == username) && (pass == password)) {
        return true;
    }
    else {
        alert ("Login was unsuccessful, check your username and password please!");
        return false;
    }
}
//registerValidation

var email = document.forms['regForm']['email'];
var username = document.forms['regForm']['username'];
var password = document.forms['regForm']['password'];
var password_confirm = document.forms['regForm']['confirmPass'];

var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

function Validate() {
    // validate email
    if (email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById('Email').style.color = "red";
        email_error.textContent = "Email is required";
        email.focus();
        return false;
    }
    // validate username
    if (username.value == "") {
        username.style.border = "1px solid red";
        document.getElementById('RegUser').style.color = "red";
        name_error.textContent = "Username is required";
        username.focus();
        return false;
    }
    if (username.value.length < 3) {
        username.style.border = "1px solid red";
        document.getElementById('RegUser').style.color = "red";
        name_error.textContent = "Username must be at least 3 characters";
        username.focus();
        return false;
    }
    // validate password
    if (password.value == "") {
        password.style.border = "1px solid red";
        document.getElementById('RegPass').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.textContent = "Password is required";
        password.focus();
        return false;
    }
    // check if the two passwords match
    if (password.value != confirmPass.value) {
        password.style.border = "1px solid red";
        document.getElementById('pass_confirm_div').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.innerHTML = "The two passwords do not match";
        return false;
    }
}
// event handler functions
function nameVerify() {
    if (username.value != "") {
        username.style.border = "1px solid #5e6e66";
        document.getElementById('RegUser').style.color = "#5e6e66";
        name_error.innerHTML = "";
        return true;
    }
}
function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        document.getElementById('Email').style.color = "#5e6e66";
        email_error.innerHTML = "";
        return true;
    }
}
function passwordVerify() {
    if (password.value != "") {
        password.style.border = "1px solid #5e6e66";
        document.getElementById('RegPass').style.color = "#5e6e66";
        document.getElementById('confirmPass').style.color = "#5e6e66";
        password_error.innerHTML = "";
        return true;
    }
    if (password.value === password_confirm.value) {
        password.style.border = "1px solid #5e6e66";
        document.getElementById('confirmPass').style.color = "#5e6e66";
        password_error.innerHTML = "";
        return true;
    }
}

