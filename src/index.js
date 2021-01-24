function checkPswd() {
    var confirmPassword = "Sino711";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         window.location = "templates/home.html";
    }
    else{
        alert("Access Denied!");
    }
}
