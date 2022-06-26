<?php 
include('connect.php');

//retrieve student information
$sql = "SELECT * FROM usuario order by premiacaototal DESC ";
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