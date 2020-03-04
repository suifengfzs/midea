<?php

header('content-type: text/html;charset=utf-8;');
    // 获取前段传来的数据
    $uname = $_POST['sname'];
    $upwd = $_POST['spwd'];

    // 建立连接
    $link=mysqli_connect('localhost','root','root','t1');

    // sql语句
    $sql1 = "SELECT * FROM  `login` WHERE `sname`= '$uname'";
    //执行语句
    $res1=mysqli_query($link, $sql1);
    //解析一条数据
    $row1 = mysqli_fetch_assoc($res1);

    // $arr = array('name' => 'Jack', "age" => 18, 'gender' => '男', 'boo' => true); // => 等价于 { name: 'Jack', age: 18 }
    
    // 判断$row1 是否为真,为真则重复,否则添加一条数据,数据里里面的数据是否重复
    if(!$row1){
        $sql2="INSERT INTO `login` (`sname`, `spwd`) VALUES('$uname', '$upwd')";
        $res2=mysqli_query($link, $sql2);

        // $arr=array('res2'=>$res2);//成功返回true
       var_dump($res2? $res2:$row1) ;
        // 能进来$row1为空
    }else{ 
        print_r(!$row1);
        // echo !$row1;
        //$row1 
        // var_dump(json_encode($arr));
    }
    //关闭数据库
    mysqli_close($link);

    
    // 判断密码用户名是否正确

     
    

?>