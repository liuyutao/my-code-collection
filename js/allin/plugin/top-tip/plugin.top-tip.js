/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/18.
 */
$.topTip = function (Obj) {
    var defaults = {
        showTime:5,
        content:"顶部提示框，请传入content属性参数"
    };


    var options = $.extend(defaults,Obj);
    var controller = {
        timeout:null,
        el:{},
        template:{
            main: function () {
                return '<div class="popup_tishi_wrap"> <div class="popup_tishi">' +
                    '        <div class="popup_tishi_bg">' +
                    /* '        <div class="popup_tishi_content">' +*/
                    '            <div class="popup_ts_text">'+ options.content +'</div>' +
                    '            <div class="clear"></div>' +
                    /* '        </div>' +*/
                    '    </div></div></div>';
            }
        },
        init: function () {
            var t = this;

            if($(".popup_tishi_wrap").size()===0){
                $("body").append(t.template.main());
            }
            t.el.con = $(".popup_tishi_wrap");
            t.el.con.find(".popup_ts_text").html(options.content);


            if($.topTip.timeout){

                clearTimeout($.topTip.timeout);
                $.topTip.timeout = null;
                t.setTimeoutHide();
            }else{
                t.show();
            }
        },

        setTimeoutHide: function () {
            var t = this;
            t.el.con.animate({top:"0px"});
            $.topTip.timeout = setTimeout(function () {
                t.el.con.animate({top:"-49px"});
                $.topTip.timeout = null;
            },options.showTime * 1000);
        },
        show: function () {
            var t = this;
            t.el.con.animate({  top:0  });
            t.setTimeoutHide();
             /*   .delay(options.showTime * 1000);
                .animate({top:"-49px"}).delay(1000);*/

        }
    };
    controller.init();

};