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


console.log($('cart_sum_choose .selectAll'))
    // 购物车数据操作
const cartList = JSON.parse(localStorage.getItem('cartList'))

// 判断购物车是否有数据
if (!cartList) {
    alert('您的购物车为空, 快去选购把')
    window.location.href = './list.html'
} else {
    // 渲染页面
    bindHtml()

    // 添加各种事件
    bindEvent()
}


function bindHtml() {

    // 整体渲染页面
    // 全选按钮需要渲染
    //   判断一下, 如果数组里面每一个数据的 isSelect 都是 true, 就渲染成 true
    //   只要有任意一个数组的 isSelect 是 false. 就渲染成 false
    //   有一个数组常用方法叫做 every
    let selectAll = cartList.every(item => {
        // 如果每一条都是 true, 就会返回 true
        // 如果任意一条是 false, 就会返回 false
        return item.isSelect === true
    })

    // 根据上面的判断是否全选
    // console.log($('.item_detail'))
    // console.log($('#check'))
    $('#check').attr('checked', selectAll)

    let str = ``



    cartList.forEach(item => {
            // 每一条数据的渲染, 根据每一条信息来渲染页面
            str += `
        <div class="item_detail">
          <div class="item_sub">
          <div class="cart_choose right">
              <input type="checkbox" class="selectOne" data-id=${item.id} ${item.isSelect ? 'checked':''}>
          </div>
          <div class="item_sub_detail">
              <div class="cart_img">
                  <img src="${item.url}">
              </div>
              <div class="cart_product">
                  <div class="title-box">
                      <a href="javascript:void(0)">
                          ${item.title}</a>
                  </div>
                  <div class="service-opt service-opt__selected js_select_service">
                      <i class="icon_services"></i>
                      <span>选服务</span>
                  </div>
              </div>
              <div class="cart_sku">
                  <span class="sku_color">莫兰迪灰</span>
                  <span class="sku_spec">十字446L</span>
              </div>
              <div class="cart_price">
                  <span class="price_new">${item.price}</span>
              </div>
              <!-- 加减 -->
              <div class="cart_num">
                  <!-- 下架或者删除或者换赠品-->
                  <div class="num_wrap num_wrap_inline  js_num">
                      <span class="minus" data-id=${ item.id }>-</span>
                      <input class="num inp_bl" type="text" value="${item.number}">
                      <span class="plus" data-id=${ item.id }>+</span>
                  </div>
              </div>
              <!-- 小计 -->
              <div class="cart_total">
                  ${item.xiaoji}
              </div>
              <div class="cart_operation">
                  <span class="operation_delete js_item_delete" data-id=${ item.id }>删除</span>
              </div>
          </div>
      </div>
    </div>
      `
        })
        // 页面元素.after(要插入的元素)
    $('.gwbox').html(str)



    // 选中商品数量需要渲染
    //   要把数组中的 isSelect 为 true 的数据的 number 加再一起
    //   数组常用方法叫做 filter 就能筛选数据
    let selectArr = cartList.filter(item => item.isSelect)
        // console.log(selectArr)

    // 选中商品数量计算
    let selectNumber = 0
        // 选中商品总价
    let selectPrice = 0
    selectArr.forEach(item => {
        selectNumber += item.number
        selectPrice += item.xiaoji
    })

    str = `` //清空
    str += `
    <div class="cart_sum_left">
    <div class="cart_sum_choose dis">
        <input type="checkbox" id="check" class="selectAll"><span>全选</span>
    </div>
</div>
<div class="cart_sum_right">
    <div class="cart_sum_num">
        已选商品
        <span class="color_f60 js_total_check">${selectNumber}</span>款
    </div>
    <div class="cart_sum_price top">
        <div class="total_price">
            合计:
            <span class="total_price_inner">¥${ selectPrice.toFixed(2) }</span>
        </div>
        <div class="cut_price">
            (不含运费)
        </div>
    </div>
    <div class="cart_sum_to_order js_to_order" ${ selectArr.length ? '' : 'disabled'}>去结算</div>
</div>
    
    `

    // 添加到页面的盒子里面
    // console.log($('.cart_bottom'))
    $('.cart_bottom').html(str)


}



function bindEvent() {
    // 4-1. 全选按钮的事件
    $('.btnsp')
        .on('change', '.selectAll', function() {
            // 自己的状态就是每一条数据的状态
            // 先获取自己的状态
            // console.log(this.checked)
            // 让数组里面的每一个数据的 isSelect 都变成 自己的状态
            cartList.forEach(item => {
                item.isSelect = this.checked
            })

            // 从新使用这个数据去渲染一遍页面就可以了
            //   因为从新渲染页面了, 页面上的元素就变了, 是一套新的元素了
            //   就没有事件了, 因为页面回改变元素, 我们最好使用事件委托
            bindHtml()

            // 在从新存储一遍 localStorage
            localStorage.setItem('cartList', JSON.stringify(cartList))
        })

    // 4-2. 单选按钮的事件
    $('.btnsp').on('change', '.selectOne', function() {
        // console.log($(this).data('id'))
        // 你要知道你点击的是哪一个数据的单选按钮
        const id = $(this).data('id')

        // 找到数组中 id 一样的那一条数据改变一下 isSelect 属性
        cartList.forEach(item => {
            if (item.id === id) {
                item.isSelect = !item.isSelect
            }
        })

        // 从新渲染页面
        bindHtml()

        // 从新存储到 lcoalStorage 里面
        localStorage.setItem('cartList', JSON.stringify(cartList))
    })

    // 4-3. 减少商品数量的事件
    $('.btnsp').on('click', '.minus', function() {
        // console.log(this)
        // 找到你点击的是哪一个数据的 减少 按钮
        const id = $(this).data('id')

        // 循环数组, 把 id 对应的这个数据的 number 和 小计修改了
        cartList.forEach(item => {
            if (item.id === id) {
                // 当 item.number === 1 的时候, 不需要 --
                item.number > 1 ? item.number-- : ''
                item.xiaoji = item.price * item.number
            }
        })

        // 从新渲染一遍页面
        bindHtml()

        // 在从新存储一遍 localStorage
        localStorage.setItem('cartList', JSON.stringify(cartList))
    })

    // 4-4. 添加商品按钮的事件
    $('.btnsp').on('click', '.plus', function() {
        // 拿到自己身上存储的 id
        const id = $(this).data('id')

        // 循环数组找到一个id 对应的数据
        cartList.forEach(item => {
            if (item.id === id) {
                item.number++
                    item.xiaoji = item.number * item.price
            }
        })

        // 从新渲染页面
        bindHtml()

        // 在从新存储一遍 localStorage
        localStorage.setItem('cartList', JSON.stringify(cartList))
    })

    // 4-5. 点击删除的事件
    $('.btnsp').on('click', '.js_item_delete', function() {
        // 拿到自己身上的 id
        const id = $(this).data('id')

        console.log('把数组中 id 为 : ' + id + ' 的数去去掉, 从新渲染页面, 从新存储到 lcoalStorage')
        var arr = []
        cartList.forEach((item, index) => {
            if (item.id != id) {
                arr.push(item)
            }
        })

        // 从新渲染页面
        // localStorage.setItem('cartList', JSON.stringify(cartList))

        bindHtml()
            // 在从新存储一遍 localStorage
        localStorage.setItem('cartList', JSON.stringify(arr))
    })


    // $('.btnsp').on('click', '.clear', function() {
    //     // console.log('把数组清空')
    //     // console.log('从新渲染页面')
    //     // console.log('把空数组从新存储到 lcoalStorage 里面')
    // })
}