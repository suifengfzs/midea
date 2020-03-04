<?php

header('content-type: text/html;charset=utf-8;');
    // 获取前段传来的数据
    $uname = $_POST['sname'];
    $upwd = $_POST['spwd'];

    // echo  $uname ;
    // 建立连接
    $link=mysqli_connect('localhost','root','root','t1');
    // sql语句
    $sql = "SELECT * FROM  `login` WHERE `sname`= '$uname' AND `spwd`='$upwd'";
    // 查询操作
    $res=mysqli_query($link, $sql);
    // 解析
    $row = mysqli_fetch_assoc($res);
    //关闭数据库
    mysqli_close($link);

    
    // 判断密码用户名是否正确

     echo $row ?  1:0;
    // if($row){
       
    //     // echo '登录成功';
    //     // http://www.fzs.com:5500/pages/login.html
    //     // header('location: ./cart.html');
    //     // http://www.fzs.com:5500/fzs
    //     echo 1;
    //     // header('location: http://www.fzs.com:5500/pages/index.html');
    // }else{
    //     echo 0;
    //     // echo "$row";
    // }

?>