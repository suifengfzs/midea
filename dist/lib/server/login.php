<?php

header('content-type: text/html;charset=utf-8;');
    // 获取前段传来的数据
    $uname = $_POST['uname'];
    $upwd = $_POST['upwd'];
    // 建立连接
    $link=mysqli_connect('localhost','root','root','t1908');
    // sql语句
    $sql = "SELECT * FROM  `user2` WHERE `uname`= '$uname' AND `upwd`='$upwd'";
    // 查询操作
    $res=mysqli_query($link, $sql);
    // 解析
    $row = mysqli_fetch_assoc($res);
    //关闭数据库
    mysqli_close($link);

    // 判断密码用户名是否正确
    if($row){
        echo '登录成功';
        // header('location: ./cart.html');
    }else{
        echo  $uname;
        echo $upwd;
        echo '登录失败';
    }

?>