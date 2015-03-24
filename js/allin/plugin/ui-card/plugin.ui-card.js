/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/11.
 */

$.fn.showCard = function (obj) {
    var defaults = {
        content:"",
        width:200,  // 默认高宽
        height:100,

        delayToShow:1000,   //
        delayToHide:1000,
        defaultPostion:"bottom"   // 卡片默认显示方向--居下 还可设置为 "top"
    };
    var _thisObj = this;
    var timeout;
    var options = $.extend(defaults,obj);
    var controller = {
        el:{},
        templates:{
            main:'<div class="plugin-ui-card">' +
                '   <div class="ui-card-wrap">' +
                '       <div class="ui-card-arrow"></div>' +
                '       <div class="ui-card-content">' +
                '           <div class="ui-card-loading">Loading...</div>' +
                '       </div>' +
                '   </div>' +
                '</div>'
        },
        init: function () {
            var t = this;
            t.bindEvent();
        },
        bindEvent: function () {
            var t = this;
            _thisObj.on("mouseover", function () {

                t.showCard();
            });
        },
        setCss: function () {
            var t = this;
            t.popCard.css({
                width:options.width,
              /*  height:options.height*/
            });
            t.popCard.find(".ui-card-wrap").css({
                width:options.width,
               /* height:options.height*/
            });
            t.calculPos();  // 计算位置
            t.popCard.show();
        },
        showCard: function () {
            var t = this;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                var domEl ;
                t.popCard = $(t.templates.main);
                t.popCard.appendTo($("body")) // 弹出层

                domEl = (typeof options.content === "function")? options.content():content;   // 获取内容
                t.popCard.find(".ui-card-content").empty().append(domEl);

                options.height = domEl.outerHeight();
                options.width = domEl.outerWidth();
                t.popCard.find(".ui-card-wrap").css({
                    width: options.width,
                    height:options.height
                });
                t.setCss();
                t.popCard.on("mouseover", function () {
                    clearTimeout(timeout);
                });
                t.popCard.on("mouseout", function () {
                    t.hide()
                });
            },options.delayToShow);

            $(_thisObj).on("mouseout", function () {
                t.hide()
            });



        },

        /***
         * 计算位置 计算应显示在上面，还是下面， 箭头应偏左，还是偏右
         */
        calculPos: function () {
            var t = this;
            var className = "bottom-right",
                beautyMargin = 20, // 为了美观 留空距离
                arrowHeight  = 6,   // 箭头 高度
                pos = $(_thisObj).offset(),
                scrollTop = document.body.scrollTop,
                windowHeight = $(window).height(),
                windowWidth = $(window).width(),
                elementHeight = $(_thisObj).height(),
                elementWidth = $(_thisObj).width(),
                pageWidth = 1000,


                rightLimit = windowWidth/2 + pageWidth/2,
                verticalPos, // 默认位置
                horizontalPos = "left"; // 小箭头水平默认居左，整体卡片在右侧
            if(options.defaultPostion === "bottom" && isBottomSpaceOk(pos)){
                verticalPos = "bottom";
            }else{
                verticalPos = "top";
            }
            if(options.defaultPostion == "top" && isTopSpaceOk(pos)){
                verticalPos = "top";
            }

            if(!isRightSpaceOk(pos)){
                horizontalPos = "right"
            }
            // 下部空间是否OK
            function isBottomSpaceOk(pos){
                if(scrollTop + windowHeight - pos.top - beautyMargin - arrowHeight - options.height > 0){
                    return true
                }
                return false
            }
            // 上部空间是否OK
            function isTopSpaceOk(pos){
                if(pos.top - scrollTop -  beautyMargin - arrowHeight - options.height > 0){
                    return true
                }
                return false
            }
            // 右部空间是否OK
            function isRightSpaceOk(pos){
                var centerPos = $(_thisObj).width()/2 + pos.left;
                if(centerPos + (options.width - 35) < (rightLimit - beautyMargin)){
                    return true
                }
                return false
            }

            if(horizontalPos && verticalPos) {
                className = verticalPos + "-" + horizontalPos;
                t.popCard.find(".ui-card-arrow").addClass(className);
            }

            var popHeight = options.height + arrowHeight;

            var leftArrowPos = pos.left + elementWidth / 2 - 35;   // 箭头居左，卡片主要居右时
            var rightArrowPos = pos.left + elementWidth / 2 + 35 -options.width; //箭头居右，卡片主要居左时
            var bottom = pos.top + 6 + elementHeight;       // 卡片位于下部时
            var top  = pos.top - 6 - options.height;      // 卡片位于上部时
            switch(className){
                case "top-left":
                    t.popCard.css({
                       top:top,
                       left:leftArrowPos
                    });
                    break;
                case "top-right":
                    t.popCard.css({
                        top:top,
                        left:rightArrowPos
                    });
                    break;
                case "bottom-left":
                    t.popCard.css({
                        top:bottom,
                        left:leftArrowPos
                    });
                    break;
                case "bottom-right":
                    t.popCard.css({
                        top:bottom,
                        left:rightArrowPos
                    });
                    break;
            }

        },
        hide: function () {
            var t = this;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                t.popCard.slideDown().remove();
            },options.delayToHide);
        }
    };

    controller.init();

    return this;
};