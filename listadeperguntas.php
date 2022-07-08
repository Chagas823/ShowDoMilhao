<?php 
include('connect.php');

//retrieve student information
$sql = "select p.validacao, p.id, p.pergunta, p.correta, p.resposta1, p.resposta2, p.resposta3, count(d.pergunta_id) as denuncia
from perguntas p left  join jogador_denuncia d on
d.pergunta_id = p.id group by p.id";
$result = $conn->query($sql);
if($result->num_rows > 0){
    $data = array();
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
}
//Returning JSON format data as response to ajax call
echo json_encode($data);
?>