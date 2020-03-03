//切换登录注册
$('.reg').click(() => {

    $('.login')
        .addClass('hide')
        .removeClass('show')

    $('.register')
        .addClass('show')
        .removeClass('hide')
})


$('.other_login').click(() => {

    $('.login')
        .addClass('show')
        .removeClass('hide')

    $('.register')
        .addClass('hide')
        .removeClass('show')
})



//提交验证

$('.login_btn').click(() => {
    $('form')[0].submit()
})