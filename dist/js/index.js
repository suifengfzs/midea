"use strict";function getList1(){$.ajax({url:"../lib/title2.json",dataType:"json",success:function(c){var t="";c.forEach(function(n,a){t+=' \n                <ul class="cat_item  cat_item'.concat(a+1,'">\n                        <li class="cat_item_tit  ">\n                            <i class="ico_cat ico_bg').concat(a+1,'"></i>\n                            <a href="" target="_blank">\n                                <span class="cat_name">').concat(n.name,'</span>\n                            </a>\n                            <a href="" target="_blank">\n                                <span class="cat_des">').concat(n.info,"</span>\n                            </a>\n                            </li>\n                    </ul>\n                ")}),$(".cat_list").html(t).children("ul").on("mouseover",function(){var n=$(this).index(),a=c[n].list,t="";a.forEach(function(n){t+='\n                            <li class="hotcat_item">\n                                <a href="">\n                                    <img class="category_img lazy_img" src="'.concat(n.list_url,'" alt=""> ').concat(n.list_name,"\n                                </a>\n                            </li>\n                        ")}),$(".hotcat_list").html(t)})}})}function getList2(){$.ajax({url:"../lib/mid.json",dataType:"json",success:function(c){$(".cat_list").children("ul").on("mouseover",function(){var n=$(this).index(),a=c[n].list,t="";a.forEach(function(n){t+='\n                        <li class="goods_item">\n                                <a class="goods_link" href="">\n                                    <img class="goods_img lazy_img" src="'.concat(n.list_url2,'" alt="">\n                                    <span class="goods_name ">\n                                        <span class="price_color"> </span> ').concat(n.list_name2,'\n                                    </span>\n                                    <span class="price_wrap ">\n                                        <span>').concat(n.list_price,"</span>\n                                    </span>\n                                </a>\n                            </li>\n                        ")}),$(".goods_list").html(t)})}})}function getList3(){$.ajax({url:"../lib/rig.json",dataType:"json",success:function(c){$(".cat_list").children("ul").on("mouseover",function(){var n=$(this).index(),a=c[n].list,t="";a.forEach(function(n){t+='\n                        <li>\n                                <a href="" target="_blank">\n                                    <img class="lazy_img" src="'.concat(n.list_url3,'" alt="">\n                                    <p class="operate_name">').concat(n.list_topname,'</p>\n                                    <p class="operate_tip">').concat(n.list_name3,"</p>\n                                </a>\n                        </li>\n                        ")}),$(".operate_wrap>ul").html(t)})}})}function getLunbo(){$.ajax({url:"../lib/lunbo.json",dataType:"json",success:function(n){var a="";n.forEach(function(n){a+='\n                <div class="swiper-slide">\n                <img src="'.concat(n.urls,'" alt="">\n                </div>\n                ')}),$(".swiper-wrapper").html(a);new Swiper(".swiper-container",{loop:!0,autoplay:{delay:2e3},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}})}function getRec(){$.ajax({url:"../lib/rec_img.json",dataType:"json",cache:!1,success:function(n){var a="";n.forEach(function(n){a+='\n                <li>\n                    <a class="url" target="_blank" href="">\n                        <img class="photo" src="'.concat(n.img_url,'" alt="').concat(n.title,'">\n                    </a>\n                </li>\n                ')}),$(".rec_wrap>ul").html(a)}})}function getProduct(){$.ajax({url:"../lib/minxing.json",dataType:"json",cache:!1,success:function(n){var t="";n.forEach(function(n,a){t+='\n                    <div class="product product_'.concat(a+1,'">\n                        <a class="url" target="_blank" href="">\n                            <div class="tag_wrap">\n                                <i class="tag_pro_jx"></i>\n                            </div>\n                            <img class="photo" src="').concat(n.urls,'" alt="">\n                            <span class="title">').concat(n.title,'</span>\n                            <span class="price_wrap">¥<span class="price">').concat(n.price,'</span>\n                            <span class="price_pro">¥<em>').concat(n.price_pro,'</em><i class="tag_pro"></i></span>\n                        </a>\n                </div>\n                    ')}),$(".floor_1").html(t)}})}function getVip(){$.ajax({url:"../lib/vip_img.json",dataType:"json",cache:!1,success:function(n){var a="";n.forEach(function(n){a+='\n                <li>\n                    <a href="">\n                        <img class="photo" src="'.concat(n.url,'" alt="').concat(n.name,'">\n                    </a>\n                    <a class="btn" target="_blank" href="">').concat(n.name,"</a>\n                </li>\n                ")}),$(".vip_wrap>ul").html(a)}})}function getFooterList(){$.ajax({url:"../lib/footer.json",dataType:"json",cache:!1,success:function(n){var a="";n.forEach(function(n){a+='\n                    <li>\n                        <a href="" target="_blank">\n                            <h3>'.concat(n.title,"</h3>\n                        </a>\n                    </li>\n                ")}),$(".foot_links").html(a)}})}$(".opt_wx").hover(function(){$(".wx_wrap").show()},function(){$(".wx_wrap").hide()}),$(".wx_wrap").hover(function(){$(".wx_wrap").show()},function(){$(".wx_wrap").hide()}),$(".opt_cart").hover(function(){$(".common_cart_wrap").show()},function(){$(".common_cart_wrap").hide()}),$(".common_cart_wrap").hover(function(){$(".common_cart_wrap").show()},function(){$(".common_cart_wrap").hide()}),$(".opt_user").hover(function(){$(".user_wrap").show()},function(){$(".user_wrap").hide()}),$(".user_wrap").hover(function(){$(".user_wrap").show()},function(){$(".user_wrap").hide()}),getList1(),getList2(),getList3(),getLunbo(),$(".swiper-container").hover(function(){$(".swiper-button-prev").show(),$(".swiper-button-next").show()},function(){$(".swiper-button-next").hide(),$(".swiper-button-prev").hide()}),getRec(),getProduct(),getVip(),getFooterList();