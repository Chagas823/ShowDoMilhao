
console.log(sessionStorage.getItem("voltar"))
let eliminarResposta = 0;
let data = JSON.parse(sessionStorage.getItem('perguntas'));
//let data = carregar();
console.log(data);
console.log(eliminarResposta);
let btnEliminar = document.createElement("a");
let divEliminar = document.getElementById("eliminar");
divEliminar.innerHTML = "Eliminar duas respostas"
let id = JSON.parse(sessionStorage.getItem('id'))
let body = document.querySelector("body");
body.appendChild(btnEliminar, divEliminar)
let eliminar = 0;
let dinheiro = 0;
let conta = 0;
let parar = document.getElementById("parar");
let i = 0;
let denuncia = 0;
let resultado;

let id_pergunta_denuciada;

let jogador_denuncias = JSON.parse(sessionStorage.getItem("denuncias"))
console.log(jogador_denuncias)
function removerTags(html) {
    const data = new DOMParser().parseFromString(html, 'text/html');
    return data.body.textContent || "";
}

function responde(i, eliminar) {

    console.log("i é igual a " + i);

    if (eliminar == 1) {
        console.log("mudando css")
        document.getElementById("div2").removeAttribute("style");
        document.getElementById("div3").removeAttribute("style");
        document.getElementById("div4").removeAttribute("style");
        document.getElementById("div1").removeAttribute("style");
        document.getElementById("div1").className = "perguntabutton";
        document.getElementById("div2").className = "perguntabutton";
        document.getElementById("div3").className = "perguntabutton";
        document.getElementById("div4").className = "perguntabutton";
    }


    let premio = document.getElementById("premio")
    if (i == 0) {
        premio.innerHTML = "acerto = " + 1000 + " | parar = " + 0 + " | errar = " + 0;
        dinheiro = 1000;
    }
    if (i == 1) {
        premio.innerHTML = "acerto = " + 5000 + " | parar = " + 1000 + " | errar = " + 500;
        dinheiro = 5000;
    }
    if (i == 2) {
        premio.innerHTML = "acerto = " + 50000 + " | parar = " + 5000 + " | errar = " + 2500;
        dinheiro = 50000;
    }
    if (i == 3) {
        premio.innerHTML = "acerto = " + 100000 + " | parar = " + 50000 + " | errar = " + 25000;
        dinheiro = 100000;
    }
    if (i == 4) {
        premio.innerHTML = "acerto = " + 300000 + " | parar = " + 100000 + " | errar = " + 50000;
        dinheiro = 300000;
    }
    if (i == 5) {
        premio.innerHTML = "acerto = " + 500000 + " | parar = " + 300000 + " | errar = " + 150000;
        dinheiro = 500000;
    }
    if (i == 6) {
        premio.innerHTML = "acerto = " + 1000000 + " | parar = " + 500000 + " | errar = " + 0;
        dinheiro = 1000000;
    }



    let divPergunta = [data[i].resposta1, data[i].resposta2, data[i].resposta3, data[i].correta];
    //console.log(divPergunta);
    let aleatorio1 = Math.floor(Math.random() * 4);
    let aleatorio2 = Math.floor(Math.random() * 4);
    while (aleatorio2 == aleatorio1) {
        aleatorio2 = Math.floor(Math.random() * 4);
    }
    let aleatorio3 = Math.floor(Math.random() * 4);
    while (aleatorio3 == aleatorio1 || aleatorio3 == aleatorio2) {
        aleatorio3 = Math.floor(Math.random() * 4);
    }
    let aleatorio4 = Math.floor(Math.random() * 4);
    while (aleatorio4 == aleatorio1 || aleatorio4 == aleatorio2 || aleatorio4 == aleatorio3) {
        aleatorio4 = Math.floor(Math.random() * 4);
    }
    console.log(aleatorio1, aleatorio2, aleatorio3, aleatorio4);
    //pergunta = data[i].pergunta;
    let pergunta = document.getElementById("pergunta");
    pergunta.innerHTML = data[i].pergunta;
    let correta = document.getElementById("div3");
    console.log(divPergunta[aleatorio1])
    correta.innerHTML = divPergunta[aleatorio1];

    let resposta = document.getElementById("div2");
    resposta.innerHTML = divPergunta[aleatorio2];

    let resposta2 = document.getElementById("div1")
    resposta2.innerHTML = divPergunta[aleatorio3];

    let resposta3 = document.getElementById("div4")
    resposta3.innerHTML = divPergunta[aleatorio4];

    conta++;
    if (conta == 3) {
        responde(i, eliminar)
    }

    /**denuncia pergunta */
    document.getElementById("denunciar").addEventListener("click", () => {
        if (data[i].id == jogador_denuncias.denuncia1 || data[i].id == jogador_denuncias.denuncia2 || data[i].id == jogador_denuncias.denuncia3 || data[i].id == jogador_denuncias.denuncia4 ||data[i].id == jogador_denuncias.denuncia5 ||data[i].id == jogador_denuncias.denuncia6 ||data[i].id == jogador_denuncias.denuncia7) {
            alert("você já denunciou essa pergunta")
        }else{
            denuncia++;
            id_pergunta_denuciada = data[i].id
          console.log(denuncia)
          alert("denunciada")
        }

    })

    correta.onclick = (function () {
        if (correta.textContent == data[i].correta) {
            //alert("correta resposta");



            if (i == 6) {
                premiacao(i, id, null);
                vitoria(id)
            }
            i++;
            responde(i, eliminar);
        } else {
            if (eliminar == 1) {
                somaAjuda(id)

            }
            if(denuncia >=0){
                inserirdenuncia(id, id_pergunta_denuciada)
            }
            //alert("errada");
            premiacao(i, id, false);
            derrota(id);
            window.location.href = "vitoriaOuderrota.html"

        }
    })

    resposta.onclick = (function () {
        if (resposta.textContent == data[i].correta) {
            //alert("correta resposta");
            if (i == 6) {
                premiacao(i, id, null);
                vitoria(id)
            }
            i++;

            responde(i, eliminar);

        } else {
            if (eliminar == 1) {
                somaAjuda(id)

            }
            if(denuncia >=0){
                inserirdenuncia(id, id_pergunta_denuciada)
            }
         
            //alert("errada");
            premiacao(i, id, false);
            derrota(id);
            window.location.href = "vitoriaOuderrota.html"

        }
    })

    resposta2.onclick = (function () {
        if (resposta2.textContent == data[i].correta) {
            //alert("correta resposta");
            if (i == 6) {
                premiacao(i, id, null);
                vitoria(id)
            }
            i++;

            responde(i, eliminar);

        } else {
            if (eliminar == 1) {
                somaAjuda(id)
            }
            if(denuncia >=0){
                inserirdenuncia(id, id_pergunta_denuciada)
            }
            //alert("errada");
            premiacao(i, id, false);
            derrota(id);
            window.location.href = "vitoriaOuderrota.html"
        }
    })
    resposta3.onclick = (function () {
        if (resposta3.textContent == data[i].correta) {
            //alert("correta resposta");

            if (i == 6) {
                premiacao(i, id, null);
                vitoria(id)
            }
            i++;

            responde(i, eliminar);

        } else {
            if (eliminar == 1) {
                somaAjuda(id)
            }
            if(denuncia >=0){
                inserirdenuncia(id, id_pergunta_denuciada)
            }
            premiacao(i, id, false);
            derrota(id);
            window.location.href = "vitoriaOuderrota.html"
            //alert("errada");

        }
    })


    divEliminar.addEventListener("click", () => {
        if (eliminar == 0) {


            if (resposta.textContent == data[i].resposta1 || resposta.textContent == data[i].resposta2) {
                document.getElementById("div2").style.background = "red";
                console.log(data[i].resposta1)
            }
            if (correta.textContent == data[i].resposta1 || correta.textContent == data[i].resposta2) {
                document.getElementById("div3").style.background = "red";

            }
            if (resposta2.textContent == data[i].resposta1 || resposta2.textContent == data[i].resposta2) {
                document.getElementById("div1").style.background = "red";

            }
            if (resposta3.textContent == data[i].resposta1 || resposta3.textContent == data[i].resposta2) {
                document.getElementById("div4").style.background = "red";

            }
            eliminar++;
            console.log(eliminar)
        } else {
            alert("você não pode mais eliminar uma resposta")
        }

    })
    parar.onclick = function () {
        if (eliminar == 1) {
            somaAjuda(id)
        }
        if(denuncia >=0){
            inserirdenuncia(id, id_pergunta_denuciada)
        }
        premiacao(i, id, true);
        parar_partida(id);
        window.location.href = "vitoriaOuderrota.html"
    }


}
responde(i, eliminar);

function somaAjuda(id) {
    console.log(id);
    data = {
        id: id
    }
    $.ajax({
        url: "somaAjuda.php",
        method: "POST",
        data: JSON.stringify(data),
        success: function (id) {
            sessionStorage.setItem('mensagem', id);
            console.log(id);
        },
    })
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function premiacao(i, id, parar) {

    //errou na primeira pergunta
    if (i == 0) {
        dinheiro = 0;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(0, id);

    }
    //errou na segunda pergunta
    else if (i == 1 && parar == false) {
        dinheiro = 500;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(500, id);
    }
    //parou na segunda pergunta
    else if (i == 1 && parar == true) {
        dinheiro = 1000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(1000, id);
    }

    //errou a terceira pergunta
    else if (i == 2 && parar == false) {
        dinheiro = 2500;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(2500, id);
    }
    //parou na terceira pergunta
    else if (i == 2 && parar == true) {
        dinheiro = 5000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(5000, id);
    }

    //errou na quarta pergunta
    else if (i == 3 && parar == false) {
        dinheiro = 25000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(25000, id);
    }

    //parou na quarta pergunta
    else if (i == 3 && parar == true) {
        dinheiro = 50000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(50000, id);
    }

    //parou na quinta pergunta
    else if (i == 4 && parar == true) {
        dinheiro = 100000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(100000, id);
    }

    //errou na quinta pergunta
    else if (i == 4 && parar == false) {
        dinheiro = 50000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(50000, id);
    }

    //parou na sexta pergunta
    else if (i == 5 && parar == true) {
        dinheiro = 300000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(300000, id);
    }

    //errou na sexta pergunta
    else if (i == 5 && parar == false) {
        dinheiro = 150000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(150000, id);
    }

    //parou na setima pergunta
    else if (i == 6 && parar == true) {
        dinheiro = 500000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(500000, id);
    }

    //errou na setima pergunta
    else if (i == 6 && parar == false) {
        dinheiro = 0;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(0, id);
    }

    //campeão, parabéns
    else if (i == 6 && parar == null) {
        dinheiro = 100000;
        sessionStorage.setItem("dinheiro", dinheiro);
        salvaPontos(1000000, id);
        resultado = "Você foi campeão";
        sessionStorage.setItem("resultado", resultado);
        window.location.href = "vitoriaOuDerrota.html";
    }
    if (parar == false) {
        resultado = "você perdeu";
        sessionStorage.setItem("resultado", resultado);
    }
    if (parar == true) {
        resultado = "você parou";
        sessionStorage.setItem("resultado", resultado);
    }

}

function salvaPontos(dinheiro, id) {
    let mydata = { premiacaototal: dinheiro, id: id }
    $.ajax({
        url: "salvar_pontos.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function (data) {
            console.log(data);
            //alert(data);

        },
    })
}

function derrota(id) {
    let mydata = { id: id }
    $.ajax({
        url: "derrota.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function (data) {
            console.log(data);
            //alert(data);

        },
    })
}




/**insere denuncia na pergunta */
function inserirdenuncia(jogador_id, pergunta_id) {
    data = { jogador_id: jogador_id, pergunta_id: pergunta_id }
    console.log(data)
    $.ajax({
        url: "inserirdenuncia.php",
        method: "POST",

        data: JSON.stringify(data),

        success: function (data) {
            console.log(data);
           
            
        },

    })

}

function parar_partida(id) {
    let mydata = { id: id }
    $.ajax({
        url: "pararpartida.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function (data) {
            console.log(data);
            //alert(data);

        },
    })
}

function vitoria(id) {
    let mydata = { id: id }
    $.ajax({
        url: "vitoria.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function (data) {
            console.log(data);
            //alert(data);

        },
    })
}