<?php 
include('connect.php');

//retrieve student information
$sql = "SELECT * FROM perguntas order by RAND() LIMIT 7 ";
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