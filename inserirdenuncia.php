<?php 
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
//$id = $mydata['id'];
$jogador_id = $mydata['jogador_id'];
$pergunta_id = $mydata['pergunta_id'];


if(!empty($jogador_id)){
    $sql = "INSERT jogador_denuncia(jogador_id,pergunta_id ) values('{$jogador_id}', '{$pergunta_id}');";
    if($conn->query($sql)==TRUE){
        echo "denunciado";
    }else{
        echo "erro";
    }
}else{
    echo "FIll all fields";
}
?>