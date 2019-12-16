<?php
header('content-type:text/html;charset=utf-8');
//1.连接数据库
define('HOST','localhost');//固定的参数 wempsever(主机)的域名
define('USERNAME','root');//固定的参数 表单的根目录
define('PASSWORD','');//密码 设置的密码 
define('DBNAME','nubia');//数据库的名字
$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
//@符号：容错上面的错误，下面自定义了报错信息
if($conn->connect_error){
    die('数据库连接失败:'.$conn->connect_error);//die函数：输出括号里面的内容，并退出。
}
