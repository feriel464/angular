<?php
include_once("database.php");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST,PATCH, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept,*");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Max-Age: 86400');    // cache for 1 day
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
 

 if(isset($postdata) && !empty($postdata))
{
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$sql = "SELECT * FROM users where email='$email' and password='$password'";
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>