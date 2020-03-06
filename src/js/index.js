// header 移入显示

// .addClass('active') // 添加类名
// .siblings() // 所有兄弟元素(不包含自己)
// .removeClass('active') // 移除类名



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







$('.opt_wx')
    .hover(() => {
        $('.wx_wrap').show()
    }, () => {
        $('.wx_wrap').hide()
    })
$('.wx_wrap').hover(() => {
    $('.wx_wrap').show()
}, () => {
    $('.wx_wrap').hide()
})

$('.opt_cart')
    .hover(() => {
        $('.common_cart_wrap').show()
    }, () => {
        $('.common_cart_wrap').hide()
    })

$('.common_cart_wrap')
    .hover(() => {
        $('.common_cart_wrap').show()
    }, () => {
        $('.common_cart_wrap').hide()
    })
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


/*************title*********/



getList1()

function getList1() {
    $.ajax({
        url: '../lib/title2.json',
        dataType: 'json',
        success: function(res) {

            // 准备一个空字符串
            let str1 = '';
            // let str2 = '';
            // let str3 = '';
            res.forEach((item, index) => {
                // console.log(item.list)
                str1 += ` 
                <ul class="cat_item  cat_item${index+1}">
                        <li class="cat_item_tit  ">
                            <i class="ico_cat ico_bg${index+1}"></i>
                            <a href="" target="_blank">
                                <span class="cat_name">${item.name}</span>
                            </a>
                            <a href="" target="_blank">
                                <span class="cat_des">${item.info}</span>
                            </a>
                            </li>
                    </ul>
                `
            })

            $('.cat_list')
                .html(str1)
                .children('ul')
                .on('mouseover', function() {
                    const index = $(this).index()
                    const list = res[index].list
                        // console.log(list)
                    let str = ''

                    list.forEach(item => {
                        str += `
                            <li class="hotcat_item">
                                <a href="">
                                    <img class="category_img lazy_img" src="${item.list_url}" alt=""> ${item.list_name}
                                </a>
                            </li>
                        `
                    })
                    $('.hotcat_list').html(str)
                })
        }
    })
}

getList2()

function getList2() {
    $.ajax({
        url: '../lib/mid.json',
        dataType: 'json',
        success: function(res) {

            $('.cat_list')
                .children('ul')
                .on('mouseover', function() {
                    const index = $(this).index()
                    const list = res[index].list

                    let str = ''
                    list.forEach(item => {
                        str += `
                        <li class="goods_item">
                                <a class="goods_link" href="">
                                    <img class="goods_img lazy_img" src="${item.list_url2}" alt="">
                                    <span class="goods_name ">
                                        <span class="price_color"> </span> ${item.list_name2}
                                    </span>
                                    <span class="price_wrap ">
                                        <span>${item.list_price}</span>
                                    </span>
                                </a>
                            </li>
                        `
                    })
                    $('.goods_list').html(str)
                })

        }
    })

}
getList3()

function getList3() {
    $.ajax({
        url: '../lib/rig.json',
        dataType: 'json',
        success: function(res) {
            $('.cat_list')
                .children('ul')
                .on('mouseover', function() {
                    const index = $(this).index()
                    const list = res[index].list
                    let str = ''
                    list.forEach(item => {
                        str += `
                        <li>
                                <a href="" target="_blank">
                                    <img class="lazy_img" src="${item.list_url3}" alt="">
                                    <p class="operate_name">${item.list_topname}</p>
                                    <p class="operate_tip">${item.list_name3}</p>
                                </a>
                        </li>
                        `
                    })
                    $('.operate_wrap>ul').html(str)
                })
        }
    })

}




// 轮播图

getLunbo()

function getLunbo() {
    $.ajax({
        url: '../lib/lunbo.json',
        dataType: 'json',
        success: function(res) {
            // console.log(res)
            let str = ``
            res.forEach(item => {
                str += `
                <div class="swiper-slide">
                <img src="${item.urls}" alt="">
                </div>
                `
            })
            $('.swiper-wrapper').html(str)

            // $(document).ready(function() {
            var mySwiper = new Swiper('.swiper-container', {

                loop: true, // 循环模式选项
                autoplay: {
                    delay: 2000
                },
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
            })

        }
    })


}

$('.swiper-container').hover(() => {
    $('.swiper-button-prev').show()
    $('.swiper-button-next').show()
}, () => {
    $('.swiper-button-next').hide()
    $('.swiper-button-prev').hide()

})

//推荐位

getRec()

function getRec() {
    $.ajax({
        url: '../lib/rec_img.json',
        dataType: 'json',
        cache: false,
        success: function(res) {
            // console.log(res)
            let str = ``
            res.forEach(item => {
                str += `
                <li>
                    <a class="url" target="_blank" href="">
                        <img class="photo" src="${item.img_url}" alt="${item.title}">
                    </a>
                </li>
                `
            })
            $('.rec_wrap>ul').html(str)
        }
    })
}


//明星单层楼层渲染

getProduct()

function getProduct() {
    $.ajax({
        url: '../lib/minxing.json',
        dataType: 'json',
        cache: false,
        success: function(res) {
            let str = ``
            res.forEach((item, index) => {
                str += `
                    <div class="product product_${index+1}">
                        <a class="url" target="_blank" href="">
                            <div class="tag_wrap">
                                <i class="tag_pro_jx"></i>
                            </div>
                            <img class="photo" src="${item.urls}" alt="">
                            <span class="title">${item.title}</span>
                            <span class="price_wrap">¥<span class="price">${item.price}</span>
                            <span class="price_pro">¥<em>${item.price_pro}</em><i class="tag_pro"></i></span>
                        </a>
                </div>
                    `
            })
            $('.floor_1').html(str)
                // $('.floor_2').html(str)

        }
    })
}


//vip专区

getVip()

function getVip() {
    $.ajax({
        url: '../lib/vip_img.json',
        dataType: 'json',
        cache: false,
        success: function(res) {
            let str = ``
            res.forEach(item => {
                str += `
                <li>
                    <a href="">
                        <img class="photo" src="${item.url}" alt="${item.name}">
                    </a>
                    <a class="btn" target="_blank" href="">${item.name}</a>
                </li>
                `
            })
            $('.vip_wrap>ul').html(str)
        }
    })
}

//底部

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