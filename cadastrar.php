<?php 
include('connect.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
//$id = $mydata['id'];
$nome = $mydata['nome'];
$nickname = $mydata['nickname'];
$senha = $mydata['senha'];

$perguntasadc = $mydata['perguntasadc'];
$perguntasnaoadc = $mydata['perguntasnaoadc'];
$partidasjogadas = $mydata['partidasjogadas'];
$premiacaototal = $mydata['premiacaototal'];
$utilizaeliminacao = $mydata['utilizaeliminacao'];
$derrotas = 0;
$avatar = $mydata['avatar'];
if(!empty($nome) && !empty($nickname) && !empty($senha)){
    $sql = "INSERT INTO usuario(nome, nickname, senha, perguntasadc, perguntasnaoadc, partidasjogadas,
    premiacaototal, utilizaeliminacao, avatar, derrotas
    ) values 
    ('$nome', '$nickname', '$senha', '$perguntasadc', '$perguntasnaoadc', '$partidasjogadas',
    '$premiacaototal', '$utilizaeliminacao', '$avatar', '$derrotas'
    )";
    if($conn->query($sql)==TRUE){
        echo "cadastrado";
    }else{
        echo "erro";
    }
}else{
    echo "FIll all fields";
}
?>