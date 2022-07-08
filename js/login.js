let cadastrar = document.getElementById("cadastrar");
console.log(cadastrar)
cadastrar.addEventListener("click", ()=>{
    window.location.href = "cadastrar.html"
})
$(document).ready(function () {

    $("#login").click(function (e) {
        e.preventDefault();
        console.log("Button click");
        let nick = $("#nick").val();
        let senha = $("#senha").val();
        if(senha == "" || nick == ""){
            alert("campos vazios ")
        }
        mydata = {nickname: nick, senha: senha};
        $.ajax({
            url: "login.php",
            method: "POST",
            data: JSON.stringify(mydata),
            dataType: "json",
            success: function (data){
                console.log(data);
                console.log(data.nome);
                sessionStorage.setItem('data', data.nickname)
                sessionStorage.setItem('id', data.id)
                sessionStorage.setItem('partidas', data.partidasjogadas)
                sessionStorage.setItem("vitorias", data.vitorias)
                sessionStorage.setItem('avatar', data.avatar)
                let user = $("#user");
                //user = "<h2>"+data.nome+ "</h2>";
                window.location.href = "menu.html";
            }
        })
    })


});