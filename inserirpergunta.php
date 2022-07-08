<?php 
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
//$id = $mydata['id'];


$pergunta = $mydata['pergunta'];
$correta = $mydata['correta'];
$resposta1 = $mydata['resposta1'];
$resposta2 = $mydata['resposta2'];
$resposta3 = $mydata['resposta3'];
$validacao = 0;

if(!empty($pergunta) && !empty($correta) && !empty($resposta2)){
    $sql = "INSERT INTO perguntas(pergunta, resposta1, resposta2,
    resposta3, correta, validacao) values('{$pergunta}','{$resposta1}','{$resposta2}','{$resposta3}','{$correta}', '$validacao')";
    if($conn->query($sql)==TRUE){
        echo "cadastrado";
    }else{
        echo "erro";
    }
}else{
    echo "FIll all fields";
}
?>