document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    // Login Button
    if (loginBtn) {
        loginBtn.onclick = function () {
            window.location.href = "login.html";
        };
    }

    // Register Button
    if (registerBtn) {
        registerBtn.onclick = function () {
            window.location.href = "register.html";
        };
    }

    // Login Status Check
    if (localStorage.getItem("isLoggedIn") === "true") {

        if (loginBtn) loginBtn.style.display = "none";
        if (registerBtn) registerBtn.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "block";

        let user = JSON.parse(localStorage.getItem("user"));

        if (user) {

            let wallet = document.getElementById("wallet");

            if (wallet) {
                wallet.innerHTML = user.wallet + " Points";
            }

        }

    } else {

        if (logoutBtn) logoutBtn.style.display = "none";

    }

});

// Logout
function logoutUser() {

    localStorage.removeItem("isLoggedIn");

    alert("✅ Logout Successful");

    window.location.href = "index.html";

}
