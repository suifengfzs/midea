// 搜索
$('.search_wrap')
    .on('mouseover', () => {
        $('.opt_search').addClass('opt_search_hover')

        $('.search_wrap>form').css({
            display: 'block'
        })


    })
    .on('mouseout', () => {
        $('.opt_search').removeClass('opt_search_hover')
        $('.search_wrap>form').css({
            display: 'none'
        })
    })


//微信二维码
$('.opt_wx')
    .hover(() => {
        $('.wx_wrap').show()
    }, () => {
        $('.wx_wrap').hide()
    })
    // 显示二维码
$('.wx_wrap').hover(() => {
    $('.wx_wrap').show()
}, () => {
    $('.wx_wrap').hide()
})

//购物车
$('.opt_cart')
    .hover(() => {
        $('.common_cart_wrap').show()
    }, () => {
        $('.common_cart_wrap').hide()
    })
    // 显示登录模块
$('.common_cart_wrap')
    .hover(() => {
        $('.common_cart_wrap').show()
    }, () => {
        $('.common_cart_wrap').hide()
    })
    // 登录
$('.opt_user')
    .hover(() => {
        $('.user_wrap').show()
    }, () => {
        $('.user_wrap').hide()
    })

$('.user_wrap')
    .hover(() => {
        $('.user_wrap').show()
    }, () => {
        $('.user_wrap').hide()
    })