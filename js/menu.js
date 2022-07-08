let data = sessionStorage.getItem('data');
let user = document.getElementById("user");
let avatar = sessionStorage.getItem("avatar");
console.log(avatar)
let imagem = document.getElementById("img");
imagem.style.backgroundImage = "url('img/" + avatar + ".jpg')"
console.log(imagem.style)
let id = sessionStorage.getItem('id');

if (data == null) {
    window.location.href = "login.html";
}
user.textContent = "Nick " + data;
console.log('a')
let jogar = document.getElementById("jogar");
console.log(jogar);
jogar.addEventListener("click", () => {
    carregar()
})

let partidas = sessionStorage.getItem('partidas')
console.log(partidas)
if (partidas == 0) {
    modal()
}
function carregar() {

    $(document).ready(function () {
        function showdata() {
            output = "";
            $.ajax({
                url: "carregarPergunta.php",
                method: "GET",
                dataType: "json",
                success: function (data) {

                    console.log(data)
                    sessionStorage.setItem('perguntas', JSON.stringify(data));
                    let denuncias_do_jogador = {
                        denuncia1: procura_jogadorDenuncia(id, data[0].id),
                        denuncia2: procura_jogadorDenuncia(id, data[1].id),
                        denuncia3: procura_jogadorDenuncia(id, data[2].id),
                        denuncia4: procura_jogadorDenuncia(id, data[3].id),
                        denuncia5: procura_jogadorDenuncia(id, data[4].id),
                        denuncia6: procura_jogadorDenuncia(id, data[5].id),
                        denuncia7: procura_jogadorDenuncia(id, data[6].id),
                    }
                    console.log(denuncias_do_jogador)
                    sessionStorage.setItem("denuncias", JSON.stringify(denuncias_do_jogador));
                    return data;
                }
            })


        }

        showdata()
        somaPartidasJogadas()
        window.location.href = "perguntas.html";
    })
}

function somaPartidasJogadas() {
    console.log(id);
    data = {
        id: id
    }
    $.ajax({
        url: "somaPartidasJogadas.php",
        method: "POST",
        data: JSON.stringify(data),
        success: function (id) {
            sessionStorage.setItem('mensagem', id);
            console.log(id);
        },
    })
}
document.getElementById("sair").onclick = function () {
    window.location.href = "login.html";
}


function procura_jogadorDenuncia(jogador_id, pergunta_id) {
    data = { jogador_id: jogador_id, pergunta_id: pergunta_id }

    let valor;
    $.ajax({
        url: "procura_denuncia.php",
        method: "POST",
        dataType: "json",
        async: false,
        data: JSON.stringify(data),

        success: function (data) {
            valor = data[0].pergunta_id;
            //console.log(data[0].pergunta_id)

        },

    })
    return valor;
}


function jogador_foi_escolhido_para_votar(jogador_id) {
    data = { jogador_id: jogador_id }

    let valor;
    $.ajax({
        url: "jogador_foi_escolhido_para_votar.php",
        method: "POST",
        dataType: "json",
        async: false,
        data: JSON.stringify(data),

        success: function (data) {
            console.log(data[0].pergunta_id)
            if (data[0].pergunta_id !== undefined) {
                valor = data
            } else {
                valor = undefined;
            }
            //console.log(data[0].pergunta_id)

        },

    })
    return valor;
}
let escolhido = jogador_foi_escolhido_para_votar(id)
console.log(escolhido)
if (escolhido !== undefined) {
    alert("voê foi escolhido para decidir se uma pergunta será adicionada")
    let btnVotarAdiciona = document.createElement("a")
    btnVotarAdiciona.className = "homebutton"
    btnVotarAdiciona.innerHTML = "vota pergunta"

    document.getElementById("selecao").appendChild(btnVotarAdiciona)

    document.getElementById("selecao").appendChild(document.createElement("br"))
    document.getElementById("selecao").appendChild(document.createElement("br"))
    sessionStorage.setItem("escolhido", JSON.stringify(escolhido));
    btnVotarAdiciona.href = "votapergunta.html"
}


function modal() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    
        modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}