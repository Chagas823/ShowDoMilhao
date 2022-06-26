let cancelar = document.getElementById("cancelar")
cancelar.addEventListener("click", ()=>{
    window.location.href = "menu.html"
})
let excluir = document.getElementById("excluir")
let id = sessionStorage.getItem("id")
console.log(id)
excluir.addEventListener("click", ()=>{
    conta = {id: id}
    $.ajax({
        url: "excluirconta.php",
        method: "POST",
        data: JSON.stringify(conta),
        success: function (data) {
            console.log(data)
            alert("sua conta foi apagada")
            window.location.href = "login.html";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    })
})