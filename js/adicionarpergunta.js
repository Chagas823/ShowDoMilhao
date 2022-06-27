$(document).ready(function () {
$("#btnPergunta").click(function (e) {
    e.preventDefault();
    console.log("Button click");

    let pergunta = $("#pergunta").val();
    let correta = $("#correta").val();
    let resposta1 = $("#resposta1").val();
    let resposta2 = $("#resposta2").val();
    let resposta3 = $("#resposta3").val();
    
    mydata = {
        pergunta: pergunta, resposta1: resposta1,
        resposta2: resposta2, resposta3: resposta3,
        correta: correta
    }

    console.log(mydata);
    $.ajax({
        url: "inserirpergunta.php",
        method: "POST",
        
        data: JSON.stringify(mydata),
        success: function (data) {
            console.log(mydata);
            alert(data);
           
        },
        
    })
})
});