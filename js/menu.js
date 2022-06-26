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