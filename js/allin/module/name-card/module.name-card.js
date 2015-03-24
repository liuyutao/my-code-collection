/**
 * 功能描述：名片
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/12.
 */
module.nameCard = function (Obj) {

    var defaults = {
        selector : ".name-card"
    };

    var options = $.extend(defaults,Obj);
    var timeout;

    function template(kv) {
        var dom = $('<div class="name-card-box">' +

            '            <div class="info_left"><a href=""><img src="'+ kv.img +'" /></a></div>' +
            '            <div class="info_right">' +
            '                <div class="info_name"><a href="">' + kv.name+ '</a></div>' +
            '                <div class="info_zhiwei"><span>'+kv.medicalTitle+'</span>'+comm.getStrLen(kv.company,16) +'</div>' +
            '                <div class="info_jh">' +
            '                    <div class="info_gz " style="padding-left:0;">关注<span class="follow">'+ kv.followNum +'</span></div>' +
            '                    <div class="info_gz ">粉丝<span class="info_num followed">'+ kv.followedNum+'</span></div>' +
            '                    <div class="info_gz " style="border:none;">动态<span class="info_num activity">'+  kv.activityNum+'</span></div>' +
            '                    <div class="clear"></div>' +
            '                </div>' +
            '            </div>' +
            '            <div class="clear"></div>' +
            '</div>');

        if(kv.followNum > 0){
            dom.find(".follow").addClass("info_num").wrap("<a href='#'></a>");
        }
        if(kv.followedNum > 0){
            dom.find(".followed").addClass("info_num").wrap("<a href='#'></a>");
        }
        if(kv.activityNum > 0){
            dom.find(".activity").addClass("info_num").wrap("<a href='#'></a>");
        }

        return dom;
    }

    $(options.selector).each(function(){
        if($(this).attr("customerId")){

            var customerId = $(this).attr("customerId");
            $(this).showCard({
                content: function () {
                    var s = "";
                    $.ajax({
                       url:"/call/customer/unite/json_info/",
                        data:{customerId:customerId},
                        async:false,
                        success: function (data) {
                            s = data.responseObject.responseData;
                        }
                    });
                        return template({
                            name: s.customer_auth.lastName + s.customer_auth.firstName,
                            medicalTitle:s.customer_auth.medicalTitle,
                            company:s.customer_auth.company,
                            img:s.customer_logo.logoUrl,
                            followNum:s.customer_statistic.followpeopleNum,
                            followedNum:s.customer_statistic.fansNum,
                            activityNum:s.customer_statistic.trendsNum
                        });
                }
            });
        }else{
            console.warn("存在某名片未添加 customerId 属性，无法获取名片信息");
        }
    });
};