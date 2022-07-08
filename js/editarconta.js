function insertAfter(newNode, existingNode) { existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling); }

let nome = document.getElementById("nome");
let nick = document.getElementById("nick");
let senha = document.getElementById("senha");

let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")
let btn4 = document.getElementById("4")
let btn5 = document.getElementById("5")

let id = sessionStorage.getItem("id")

let btnAtualizar = document.getElementById("btnAtualizar")

let vitorias = sessionStorage.getItem("vitorias")
let btn7 = document.createElement("img")
console.log(id)
let avatar = 0;
if(vitorias >=1){
    
    
    btn7.src = "img/7.jpg"
    
    btn7.height = 70
    console.log(btn7)
    let pai = btn5.parentNode; 
    insertAfter(btn7, btn5)
    btn7.onclick = function () {
        avatar = 7;
        btn7.className = "maxSize"
        console.log("clicado")
        btn1.className = "form-group"
        btn2.className = "form-group"
        btn5.className = "form-group"
        btn3.className = "form-group"
        btn4.className = "form-group"
    }
}




console.log("Button click");
if (senha == "" || nick == "") {
    alert("campos vazios ")
}



mydata = { id: id };
$.ajax({
    url: "editarconta.php",
    method: "POST",
    data: JSON.stringify(mydata),
    dataType: "json",
    success: function (data) {
        console.log(data);
        nick.value = data.nickname
        nome.value = data.nome
        senha.value = data.senha;
    }
})



btn1.onclick = function () {
    avatar = 1;
    btn1.className = "maxSize"
    console.log("clicado")

    btn2.className = "form-group"
    btn5.className = "form-group"
    btn3.className = "form-group"
    btn4.className = "form-group"

    btn7.className = "form-group"
}
btn2.onclick = function () {
    avatar = 2;
    btn2.className = "maxSize"
    console.log("clicado")

    btn5.className = "form-group"
    btn1.className = "form-group"
    btn3.className = "form-group"
    btn4.className = "form-group"

    btn7.className = "form-group"
}
btn3.onclick = function () {
    avatar = 3;
    btn3.className = "maxSize"
    console.log("clicado")
    btn2.className = "form-group"
    btn1.className = "form-group"
    btn5.className = "form-group"
    btn4.className = "form-group"
    btn7.className = "form-group"
}
btn4.onclick = function () {
    avatar = 4;
    btn4.className = "maxSize"
    console.log("clicado")
    btn2.className = "form-group"
    btn1.className = "form-group"
    btn3.className = "form-group"
    btn5.className = "form-group"
    btn7.className = "form-group"
}
btn5.onclick = function () {
    avatar = 5;
    btn5.className = "maxSize"

    btn2.className = "form-group"
    btn1.className = "form-group"
    btn3.className = "form-group"
    btn4.className = "form-group"
    btn7.className = "form-group"
    console.log("clicado")

}

$(document).ready(function () {
    console.log(btnAtualizar)
    $("#btnAtualizar").click(function (e) {
        e.preventDefault();
        console.log("clicado")
        let nome = $("#nome").val();
        let nickname = $("#nick").val();
        let senha = $("#senha").val();
        conta = { nickname: nickname, nome: nome, senha: senha, avatar: avatar, id: id }
        console.log(conta)
        $.ajax({
            url: "atualizarconta.php",
            method: "POST",
            data: JSON.stringify(conta),
            success: function (data) {
                console.log(data)
                alert("atualizado")
                window.location.href = "login.html";
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus);
            }
        })

    })


});



