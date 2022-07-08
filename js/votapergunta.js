
let escolhido = JSON.parse(sessionStorage.getItem("escolhido"))
console.log(escolhido)

let id = sessionStorage.getItem("id")





for (let index = 0; index < escolhido.length; index++) {
    
    let data = procura_pergunta_votar(escolhido[index].jogador_id)
let linha = document.createElement("tr")
tabela.appendChild(linha)



let pergunta = document.createElement("td")
pergunta.innerHTML = data[index].pergunta
linha.appendChild(pergunta)
let correta = document.createElement("td")
correta.innerHTML = data[index].correta
linha.appendChild(correta)
correta.onclick = function () {
    console.log(correta)
}
let resposta1 = document.createElement("td")
resposta1.innerHTML = data[index].resposta1
linha.appendChild(resposta1)

let resposta2 = document.createElement("td")
resposta2.innerHTML = data[index].resposta2
linha.appendChild(resposta2)

let resposta3 = document.createElement("td")
resposta3.innerHTML = data[index].resposta3
linha.appendChild(resposta3)




let btn = document.createElement("button")
btn.className = "btn";
btn.innerHTML = "salvar"
linha.appendChild(btn)

btn.onclick = function () {
    console.log("clicado")
    salvar_pergunta(data[index].id)
    snackbar("a pergunta foi adicionada")
}

let excluir = document.createElement("button")
excluir.className = "btn";
excluir.innerHTML = "excluir"
linha.appendChild(excluir)
excluir.onclick = function () {

    snackbar(" a pergunta não será adicionada")
    excluirpergunta(data[index].id)
}


    
}


function procura_pergunta_votar(jogador_id) {
    data1 = { jogador_id: jogador_id }

    let valor;
    $.ajax({
        url: "procura_pergunta_votar.php",
        method: "POST",
        dataType: "json",
        async: false,
        data: JSON.stringify(data1),

        success: function (data) {
            valor = data;
            console.log(data)
            //console.log(data[0].pergunta_id)

        },

    })
    return valor;
}

function snackbar(mensagem) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = mensagem
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function salvar_pergunta(pergunta_id) {
    data2 = { pergunta_id: pergunta_id }
    console.log(data2)
    $.ajax({
        url: "salvarpergunta.php",
        method: "POST",
        dataType: "json",
        async: false,
        data: JSON.stringify(data2),

        success: function (data) {

            console.log(data)

        },

    })
}

function excluirpergunta(pergunta_id) {
    data2 = { pergunta_id: pergunta_id }
    console.log(data2)
    $.ajax({
        url: "excluirpergunta.php",
        method: "POST",
        dataType: "json",
        async: false,
        data: JSON.stringify(data2),

        success: function (data) {

            console.log(data)

        },

    })
}