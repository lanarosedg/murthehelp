const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "email@email.com" && password === "password") {
        alert("You have successfully logged in.");
        window.location = "/home/home.html"; // Redirecting to other page.
        return false;
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})