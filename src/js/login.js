//切换到注册
$('.reg').click(() => {

    $('.login') //隐藏登录界面
        .addClass('hide')
        .removeClass('show')

    $('.register') //显示注册界面
        .addClass('show')
        .removeClass('hide')

    // 切换登录隐藏提示文本
    $('.js_password_confirm_tips')
        .removeClass('show')
        .addClass('hide')
})

//切换到登录
$('.other_login').click(() => {

    $('.login')
        .addClass('show')
        .removeClass('hide')

    $('.register')
        .addClass('hide')
        .removeClass('show')

    // 切换登录隐藏提示文本
    $('.js_password_tips')
        .removeClass('show')
        .addClass('hide')
})



//登录提交验证
$('.btns1').click(() => {
    // console.log('提交了')
    // $('form')[0].submit()
    var telephone = $.trim($('.js_telephone').val())
    var password = $.trim($('.js_password').val())

    //判断是否为空
    if (telephone != '' && password != '') {
        $.ajax({
            url: '/login',
            type: 'post',
            data: {
                sname: telephone,
                spwd: password,
            },
            // dataType: 'json',
            success: function(res) {
                if (res == 1) {
                    window.location.href = '../pages/index.html'
                } else {
                    $('.js_password_tips')
                        .removeClass('hide')
                        .addClass('show')
                        .html('账号或密码错误')
                }
            },
            error: function() {
                console.log('请求失败')
            }
        })
    } else {
        $('.js_password_tips')
            .removeClass('hide')
            .addClass('show')
            .html('账号和密码都不能为空')
    }

})

$(".js_telephone").focus(function() {
    $('.js_password_tips')
        .removeClass('show')
        .addClass('hide')

});

// 注册

$('.btns2').click(() => {
        // 拿到输入的数据
        var number = $.trim($('#number').val())
        var pwd = $.trim($('#pwd').val())
        var spwd = $.trim($('#spwd').val())
        console.log(number.length)
        console.log(pwd.length)

        // 请求前判断数据
        if (number == '' || pwd == '' || spwd == '') {
            $('.js_password_confirm_tips')
                .removeClass('hide')
                .addClass('show')
                .html('<span>账号密码不能为空</span>')

            return
        } else if (number.length < 8 && pwd.length < 8) {
            $('.js_password_confirm_tips')
                .removeClass('hide')
                .addClass('show')
                .html('<span>账号密码不能小于8位</span>')

            return
        }
        //判断两次密码是否一致
        if (pwd != spwd) {
            $('.js_password_confirm_tips')
                .removeClass('hide')
                .addClass('show')
                .html('<span>两次密码不一致</span>')
        } else {
            $.ajax({
                url: '/loginpd',
                type: 'post',
                data: {
                    sname: number,
                    spwd: pwd,
                },
                success: function(res) {
                    console.log(res)
                    if (res) {
                        if (confirm('注册成功!是否要登录?')) {
                            $('.login')
                                .addClass('show')
                                .removeClass('hide')
                            $('.register')
                                .addClass('hide')
                                .removeClass('show')
                        }

                        //注册完成密码清空
                        $('#number').val('')
                        $('#pwd').val('')
                        $('#spwd').val('')
                    } else {
                        $('.js_password_confirm_tips')
                            .removeClass('hide')
                            .addClass('show')
                            .html('<span>该账号已存在,请重新注册!</span>')
                    }
                },
                error: function() {
                    console.log('请求失败')
                }
            })
        }


    })
    //焦距隐藏错误提示文本
$('.focus').focus(() => {
    $('.js_password_confirm_tips')
        .removeClass('show')
        .addClass('hide')
})