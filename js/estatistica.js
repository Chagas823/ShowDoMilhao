let vitorias = document.getElementById("vitorias")
let derrotas = document.getElementById("derrotas")

let eliminacao = document.getElementById("eliminacao")
let total = document.getElementById("total")
let jogadas = document.getElementById("jogadas")
let pontosporpartida = document.getElementById("pontosporpartida")

let porcevitorias = document.getElementById("porcevitorias")
let paradas = document.getElementById("paradas")

let id = sessionStorage.getItem('id')
function estatistica(id) {
    data = {id: id}

    $.ajax({

        url: "estatistica.php",
        method: "POST",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (data) {
            vitorias.innerHTML = data[0].vitorias
            derrotas.innerHTML = data[0].derrotas
            paradas.innerHTML = data[0].partidas_paradas
            eliminacao.innerHTML = data[0].utilizaeliminacao
            total.innerHTML = data[0].premiacaototal
            jogadas.innerHTML = data[0].partidasjogadas

            pontosporpartida.innerHTML = (data[0].premiacaototal/data[0].partidasjogadas).toFixed(2)
            porcevitorias.innerHTML = ((data[0].vitorias/data[0].partidasjogadas)*100).toFixed(2) + "%"
            console.log( data[0].vitorias)
        }
    })
}
estatistica(id);