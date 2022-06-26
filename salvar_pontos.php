<?php
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['id'];
$premiacaototal = $mydata['premiacaototal'];
if(!empty($id)){
    $sql = "update usuario set premiacaototal = premiacaototal + '$premiacaototal' where id = '$id'";
    if($conn->query($sql)==TRUE){
        echo "você escolheu parar";
    }else{
        echo "erro";
    }
}
?>
