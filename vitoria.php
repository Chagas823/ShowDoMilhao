<?php
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['id'];

if(!empty($id)){
    $sql = "update usuario set vitorias = vitorias + 1 where id = '$id'";
    if($conn->query($sql)==TRUE){
        echo "atualizado";
    }else{
        echo "erro";
    }
}
?>
