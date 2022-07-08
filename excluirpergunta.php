<?php 
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
//$id = $mydata['id'];

$pergunta_id = $mydata['pergunta_id'];
$validacao = 1;

if(true){
    $sql = "DELETE from jogador_adiciona  where pergunta_id = '$pergunta_id' ";
    if($conn->query($sql)==TRUE){
        echo "pergunta enviado para um usuario aleatoria votar";
    }else{
        echo "erro";
    }
}else{
    echo "FIll all fields";
}
?>