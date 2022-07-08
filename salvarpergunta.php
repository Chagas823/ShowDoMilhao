<?php 
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
//$id = $mydata['id'];

$pergunta_id = $mydata['pergunta_id'];
$validacao = 1;

if(true){
    $sql = "UPDATE perguntas set validacao = '$validacao' where id = '$pergunta_id' ";
    if($conn->query($sql)==TRUE){
        echo "pergunta enviado para um usuario aleatoria votar";
    }else{
        echo "erro";
    }
}else{
    echo "FIll all fields";
}
?>