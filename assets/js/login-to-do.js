function visualizarsenha() {
    var passwordInput = document.getElementById("password");
    var verButton = document.getElementById("versenha");

    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        verButton.innerText = "😉";
    } else {
        passwordInput.type = "password";
        verButton.innerText = "😌";
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
<<<<<<< HEAD

    if ((username == "Professor" ||username == "Fábio_VilasBoas" || username == "Giovana_Basilio" || username == "Gabriel_Caurin" || username == "Nicoly_Val" || username == "Rafael_Cumpri" || username == "Victor_Hugo") && (password == "123"|| password == "prof123")) {
      
        window.location.href = "./to-do list.html";
    } else {
=======
    if ((username == "Professor" || username == "Fábio_VilasBoas" || username == "Giovana_Basilio" || username == "Gabriel_Caurin" || username == "Nicoly_Val" || username == "Rafael_Cumpri" || username == "Victor_Hugo") && (password == "123" || password == "prof123")) {
        window.location.replace("./../../pages/to-do-list.html");
      } else {
>>>>>>> ddbde230ac1f2d7c280d83fa9833ae8207348a8b
        document.getElementById("mensagem").style.display = "block";
      }
      
      
}