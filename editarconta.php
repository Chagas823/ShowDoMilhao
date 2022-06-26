<?php 
include('connect.php');
$conect = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($conect, true);
$id = $mydata['id'];

$sql = "SELECT * FROM usuario where id = '{$id}'";
$result = $conn->query($sql);
if($result->num_rows > 0){
    
    while($row = $result->fetch_assoc()){
        $data = $row;
    }
}
echo json_encode($data);

?>