// function login() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     // Verifica se o nome de usuário e a senha estão corretos
//     if ((username == "Fábio" || username == "Giovana" || username == "Gabriel" || username == "Nicoly" || username == "Rafael" || username === "Victor") && password == "PsiOmega123") {
//         // Redireciona para a página da to-do list
//         window.location.href = "../../pages/to-do list.html";
//     } else {
//         document.getElementById("error-message").style.display = "block";
//     }
// }
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o nome de usuário e a senha estão corretos
    if ((username === "Fábio" || username === "Giovana" || username === "Gabriel" || username === "Nicoly" || username === "Rafael" || username === "Victor") && password === "PsiOmega123") {
        // Redireciona para a página da to-do list
        window.location.href = "../../pages/to-do list.html";
    } else {
        document.getElementById("mensagem").style.display = "block";
    }
}