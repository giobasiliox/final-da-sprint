alert("Valide a sua entrada")
function visualizarsenha() {
    var passwordInput = document.getElementById("password");
    var verButton = document.getElementById("versenha");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        verButton.innerText = "😑";
    } else {
        passwordInput.type = "password";
        verButton.innerText = "😶";
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username == "Fábio Vilas Boas" || username == "Giovana Basilio" || username == "Gabriel Caurin" || username == "Nicoly Val" || username == "Rafael Cumpri" || username == "Victor Hugo") && password == "PsiOmega123") {
      
        window.location.href = "../../pages/to-do list.html";
    } else {
        document.getElementById("mensagem").style.display = "block";
    }
}