let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")
let btn4 = document.getElementById("4")
let btn5 = document.getElementById("5")

let login = document.getElementById("login")
console.log(login)
login.addEventListener("click", ()=>{
    window.location.href = "login.html"
})


let avatar = 0;

btn1.onclick = function () {
    avatar = 1;
    btn1.className = "maxSize"
    console.log("clicado")

    btn2.className = "form-group"
    btn5.className = "form-group"
    btn3.className = "form-group"
    btn4.className = "form-group"
}
btn2.onclick = function () {
    avatar = 2;
    btn2.className = "maxSize"
    console.log("clicado")

    btn5.className = "form-group"
    btn1.className = "form-group"
    btn3.className = "form-group"
    btn4.className = "form-group"
}
btn3.onclick = function () {
    avatar = 3;
    btn3.className = "maxSize"
    console.log("clicado")
    btn2.className = "form-group"
    btn1.className = "form-group"
    btn5.className = "form-group"
    btn4.className = "form-group"
}
btn4.onclick = function () {
    avatar = 4;
    btn4.className = "maxSize"
    console.log("clicado")
    btn2.className = "form-group"
    btn1.className = "form-group"
    btn3.className = "form-group"
    btn5.className = "form-group"
}
btn5.onclick = function () {
    avatar = 5;
    btn5.className = "maxSize"

    btn2.className = "form-group"
    btn1.className = "form-group"
    btn3.className = "form-group"
    btn4.className = "form-group"
    console.log("clicado")

}

$(document).ready(function () {

    $("#btnCadastrar").click(function (e) {
        e.preventDefault();
        console.log("Button click");
        let nome = $("#nome").val();
        let nickname = $("#nick").val();
        let senha = $("#senha").val();

        mydata = {
            nome: nome, nickname: nickname, senha: senha, avatar: avatar,
            perguntasadc: 0, perguntasnaoadc: 0, partidasjogadas: 0,
            premiacaototal: 0.0, utilizaeliminacao: 0, derrotas: 0
        }
        console.log(mydata);
        $.ajax({
            url: "cadastrar.php",
            method: "POST",
            data: JSON.stringify(mydata),
            success: function (data) {
                console.log(mydata);
                alert(data);
                window.location.href = "login.html";
            },
            
        })
    })


});
