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



// 渲染页面js
//  获取 localStorage 里面的数据
const info = JSON.parse(localStorage.getItem('goodsInfo'))
    //  判断数据是否存在
if (!info) {
    alert('您要查看的数据不存在')
        // 跳转回列表页面
    window.location.href = './list.html'
}
// 渲染页面
bindHtml()

function bindHtml() {
    $('#zoomPic').attr('src', info.url) //超大图
    $('#showcase').attr('src', info.url) //中图(页面正常展示的图)
    $('#lis_img').attr('src', info.url) //详情选择图
    $('#titles').text(info.title) //大标题
    $('.price').text(info.price) //价格
    $('.pro_price>price').text(info.price_pro)
}

// 点击添加购物车

$('.cart_btn').click(() => {
    //    如果有数据, 就用我们的数据
    const cartList = JSON.parse(localStorage.getItem('cartList')) || []
    let exits = cartList.some(item => {
        // 数组里面每一个的 id === 本页面的这条数据的 id
        return item.id === info.id
    })

    if (exits) {
        let data = null
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id === info.id) {
                data = cartList[i] //id唯一找到就以为着后面没有了所以结束整个循环
                break
            }
        }
        // data 就是我找到的这个信息
        data.number++
            // 数量添加的时候, 小计价格要改变
            data.xiaoji = data.number * data.price // 数量 * 单价
    } else {
        // push 之前, 象里面添加一个 number 信息为 1
        info.number = 1
            // 计算商品价钱
        info.xiaoji = info.price
        info.isSelect = false // 默认不选中
        cartList.push(info)

    }
    // 在存储到 localStorage 里面
    localStorage.setItem('cartList', JSON.stringify(cartList)) //放入购物车的数据里
})

$('.opt_cart').click(() => {
    window.location.href = './cart.html'
})