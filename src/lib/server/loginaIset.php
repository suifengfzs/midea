<?php

header('content-type: text/html;charset=utf-8;');
    // 获取前段传来的数据
    $uname = $_POST['sname'];
    $upwd = $_POST['spwd'];

    // 建立连接
    $link=mysqli_connect('localhost','root','root','t1');

    // sql语句

    $sql="INSERT INTO `login` (`sname`, `spwd`) VALUES('$uname', '$upwd')";
    // 插入操作
    $res=mysqli_query($link, $sql);

    //关闭数据库
    mysqli_close($link);
     
    var_dump($res) ; //返回
    

?>