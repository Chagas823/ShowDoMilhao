<?php 
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
//$id = $mydata['id'];
$nome = $mydata['nome'];
$id = $mydata['id'];
$nickname = $mydata['nickname'];
$senha = $mydata['senha'];
$avatar = $mydata['avatar'];



if(!empty($nome) && !empty($nickname) && !empty($senha)){
    $sql = "UPDATE usuario set nome = '{$nome}', nickname = '{$nickname}', senha = '{$senha}', avatar = '{$avatar}' where id = '{$id}'";
    if($conn->query($sql)==TRUE){
        echo "atualizado";
    }else{
        echo "erro";
    }
}else{
    echo "FIll all fields";
}
?>