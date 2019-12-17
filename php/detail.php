<?php

include"conn.php";
$conn->query('SET NAMES UTF8');//设置字符集
if(isset($_GET['picsid'])){
    $sid=$_GET['picsid'];
    $result=$conn->query("select * from date where sid = $sid");
    echo json_encode($result->fetch_assoc());


}
