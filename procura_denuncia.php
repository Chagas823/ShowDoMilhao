<?php
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$jogador_id = $mydata['jogador_id'];
$pergunta_id = $mydata['pergunta_id'];

$sql = "SELECT * from jogador_denuncia where jogador_id = '$jogador_id' and pergunta_id = '$pergunta_id'";
$result = $conn->query($sql);
    if($result->num_rows > 0){
        $data = array();
        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }
    }
    //Returning JSON format data as response to ajax call
    echo json_encode($data);
