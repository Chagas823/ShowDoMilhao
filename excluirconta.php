<?php 
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
//$id = $mydata['id'];

$id = $mydata['id'];

if(!empty($id)){
    $sql = "DELETE FROM usuario where id = '{$id}'";
    if($conn->query($sql)==TRUE){
        echo "atualizado";
    }else{
        echo "erro";
    }
}else{
    echo "FIll all fields";
}
?>