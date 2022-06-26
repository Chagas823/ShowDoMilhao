let resultado = sessionStorage.getItem("resultado");
let texto = document.getElementById("resultado");
let dinheiro = sessionStorage.getItem("dinheiro")
let textDinheirp = document.getElementById("dinheiro");
textDinheirp.innerHTML = "dinheiro ganhado = "+dinheiro;
console.log(sessionStorage.getItem("resultado"))
texto.innerHTML = resultado;
let voltar = true;
sessionStorage.setItem("voltar", voltar)
document.getElementById("menu").onclick = function(){
    window.location.href = "menu.html"
}

let mensagem = sessionStorage.getItem("mensagem")
console.log(mensagem)