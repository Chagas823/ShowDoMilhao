let tabela = document.getElementById("tabela")
let id = sessionStorage.getItem('id');
function carregar() {

    $(document).ready(function () {
        function showdata() {
            output = "";
            $.ajax({
                url: "listadeperguntas.php",
                method: "GET",
                dataType: "json",
                success: function (data) {
                    console.log(data)
             
                    for (let index = 0; index < data.length; index++) {
                        
                        let linha = document.createElement("tr")
                        tabela.appendChild(linha)

                        

                        let pergunta = document.createElement("td")
                        pergunta.innerHTML = data[index].pergunta
                        linha.appendChild(pergunta)
                        let correta =  document.createElement("td")
                        correta.innerHTML = data[index].correta
                        linha.appendChild(correta)
                        correta.onclick = function(){
                            console.log(correta)
                        }
                        let resposta1 =  document.createElement("td")
                        resposta1.innerHTML = data[index].resposta1
                        linha.appendChild(resposta1)

                        let resposta2 =  document.createElement("td")
                        resposta2.innerHTML = data[index].resposta2
                        linha.appendChild(resposta2)

                        let resposta3 =  document.createElement("td")
                        resposta3.innerHTML = data[index].resposta3
                        linha.appendChild(resposta3)

                        let validacao = document.createElement("td")
                        
                        validacao.innerHTML = data[index].validacao
                        console.log(data[index].validacao)
                        linha.appendChild(validacao)
                        
                        let denuncias =  document.createElement("td")
                        denuncias.innerHTML = data[index].denuncia
                        linha.appendChild(denuncias)
                        

                        

                        

                        let btn = document.createElement("button")
                        btn.className = "btn";
                        btn.innerHTML = "denunciar"
                        linha.appendChild(btn)

                        btn.onclick = function(){
                            let valor = procura_jogadorDenuncia(id, data[index].id)
                           
                            if(valor === undefined){
                                inserirdenuncia(id, data[index].id)
                                snackbar("denunciado")
                                console.log(valor)
                            }else{
                                snackbar("você já denunciou essa pergunta")
                            }
                        }
                        
                    }
                }
            })


        }

        showdata()
        
    })
}
carregar()

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

function snackbar(mensagem) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = mensagem
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

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