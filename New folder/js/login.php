<?php
$id = $_POST['uid'];
$pass = $_POST['upass'];

$host = 'localhost';
$user = 'ravinder';
$pass = '12345';
mysql_connect($host, $user, $pass);
mysql_select_db('demo');

$dologin = "select id,pass from user where id = $id and pass = $pass ";
$result = mysql_query( $dologin );

if($result)
{
 echo "Successfully Logged In";
}
else
{
 echo "Wrong Id Or Password";
}
?>