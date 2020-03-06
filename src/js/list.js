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



//

getFenlei()

function getFenlei() {
    $.ajax({
        url: '../lib/fenlei.json',
        dataType: 'json',
        cache: false,
        success: function(res) {
            // console.log(res)
            let str = ``

            res.forEach(item => {
                str += `
                <li class="filter_cur">
                    <a href="javascript:void(0)" class="mod_word">${item.title}</a>
                 </li>
                `
            })
            $('.fl').html(str)
        }


    })
}

getJx()

function getJx() {
    $.ajax({
        url: '../lib/jx.json',
        dataType: 'json',
        cache: false,
        success: function(res) {
            // console.log(res)
            let str = ``

            res.forEach(item => {
                str += `
                <li class="filter_cur">
                    <a href="javascript:void(0)" class="mod_word">${item.title}</a>
                 </li>
                `
            })
            $('.jx').html(str)
        }
    })
}

// 页脚
getFooterList()

function getFooterList() {
    $.ajax({
        url: '../lib/footer.json',
        dataType: 'json',
        cache: false,
        success: function(res) {
            let str = ``
            res.forEach(item => {
                str += `
                    <li>
                        <a href="" target="_blank">
                            <h3>${item.title}</h3>
                        </a>
                    </li>
                `
            })
            $('.foot_links').html(str)
        }

    })
}


// 回到顶部
$('.tos').click(() => {
    $(window).scrollTop(0)
})



//商品渲染页面


let flag = true //这个是第一次打开页面的时候渲染分页器的
let list = [] // 准备一个变量接收数组
let list1 = [] //开始渲染没这个 开始不点击下一页,页面没数据

getList()

function getList() {
    $.ajax({
        url: '../lib/page.json',
        dataType: 'json',
        cache: false,
        success: function(res) {
            // 执行渲染分页器的函数
            bindPagi(res) //拿到总共的页数
                // 把数组保存以下
            list = res

        }
    })
}

function bindPagi(totalPage) {
    // 关闭开关
    flag = false
    list1 = totalPage.slice(0, 24)
    bindHtml(list1)
    $('.pagination').pagination({
        pageCount: Math.ceil(totalPage.length / 24), // 总页数
        current: 1, // 当前页
        callback: function(api) { // 当你切换页面的时候会触发

            let curr = api.getCurrent() //拿到当前页

            list1 = totalPage.slice((curr - 1) * 24, curr * 24) //切割从第几道第几 我这个数据总共三段 [0~23][24~..][..71]
                // console.log(list1)
                // 每次使用分页器切换的时候渲染一次
            bindHtml(list1)
        }
    })
}

function bindHtml(list1) {
    let str = ``

    list1.forEach(item => {
        str += `
        <li class="hproduct" data-id="${item.id}">
        <a href="javascript:void(0)" class="category_cover">
            <img src="${item.url}" alt="${item.title}">
        </a>
        <div class="ft_message">
            <div class="price_new">
                <span class="price">
                    ¥<em>${item.price}</em>
                </span>
                <span class="price_pro">
                    ¥<em>${item.price_pro}</em>
                    <i class="tag_pro"></i>
                </span>
            </div>
            <div class="right_tip comment_box">
                <span>
                    评价
                    <em>${item.pingjia}</em>
                </span>
            </div>
        </div>
        <a href="javascript:void(0)" class="fn">
            ${item.title}          
        </a>
        <div class="sell_point">咨询客服有惊喜哦~</div>
        <div class="act_tag">
            <div class="self_tag">自营</div>
            <div class="sku_tag sku_tag_important">38女王节</div>
            <div class="icon_coupon icon_coupon_3">
                <i class="midea-icon icon-coupon_left_3"></i>
                <span class="text">用券5000-200</span>
                <i class="midea-icon icon-coupon_right_3"></i>
            </div>
        </div>
        <div class="item_compare">
            <div class="cart js_add_to_cart">
                <i class="cart_icon common_cart_icon"></i>
                <span>购物车</span>
            </div>
            <div class="compare  js_compare_icon flexs">
                <input type="checkbox" class="inpt"><span>对比</span>
            </div>
        </div>
    </li>
        
        `
    })

    $('.list1').html(str)
}

$('.list1').on('click', 'li', function() {

    // 点击 li 的时候, 拿到自己身上的 id 属性
    const id = $(this).data('id')

    //  去到 list 这个数组里面找到一个 id 对应的数据
    //   这个数据就是渲染这个 li 的数据
    let data = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) { //找到对应id的数据结束循环
            data = list[i] //赋值给data
            console.log(data)
            break
        }
    }

    // 把找到的数据存储到 localStorage 里面
    //   为了详情页面使用
    localStorage.setItem('goodsInfo', JSON.stringify(data))

    // // 4. 跳转页面
    window.location.href = './detail.html'
        // console.log('执行了')
})