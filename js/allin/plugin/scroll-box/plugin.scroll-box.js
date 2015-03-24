/**
 * 功能描述：
 * 使用方法: $("需左右滑动容器").allinScrollBox({
 *                numToMove:2,  // 每次移动几个单元项  非必填
 *                liClickHdl:null    // 点击某一项事件回调  非必填
 *
 *              })
 * 注意事件：1.不循环滚动 到尽头停止
 *         2.在左右控制按钮上  加样式 .next .prev
 *         3.在需滑动元素上 标签应该是ul 加样式 .scroll
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/4.
 */

$.fn.scrollBox = function (Obj) {
    var defConfig = {
        numToMove: 2,  // 每次移动几个单元项
        liClickHdl: null    // 点击某一项事件回调
    };
    var options = $.extend(defConfig, Obj);
    var _DomObj = this;     // 当前元素

    var controller = {
        config: {        },
        left: 0,
        el: {
            container: _DomObj,
            prevBtn: _DomObj.find(".prev"),      // 上一页
            nextBtn: _DomObj.find(".next"),      // 下一页
            scrollObj: _DomObj.find("ul.scroll"),
            scrollParent: _DomObj.find("ul.scroll").parent()
        },
        init: function () {
            var t = this;
            t.render();
            t.bindBtns();
            t.updateBtnStatus();
            if(options.liClickHdl){
                t.bindLiClick();
            }
        },
        /**
         * 点击Li元素时的回调
         */
        bindLiClick: function () {
            var t = this;
            t.el.scrollObj.find("li").on("click", function (e) {
                options.liClickHdl && options.liClickHdl(this);
            });

        },
        bindBtns: function () {
            var t = this;
            t.el.nextBtn.on("click", function () {
                t.next();
            });
            t.el.prevBtn.on("click", function () {
                t.prev();
            });
        },
        /**
         * 渲染样式
         */
        render: function () {
            var t = this;
            var li = t.el.scrollObj.find("li:eq(0)");

            t.liWidth = li.outerWidth(true)   // 一项 li 的宽度
                + parseInt(li.css("borderLeftWidth"))
                + parseInt(li.css("borderRightWidth"));

            var liNum = t.el.scrollObj.children().size();

            t.scrollWidth = t.liWidth * liNum;     // 滚动区域总宽度
            t.scrollParentWidth = t.el.scrollParent.width();
            t.el.scrollObj.css({
                position: "absolute",
                width: t.scrollWidth    // 处理容器宽度
            });

            t.el.scrollParent.css({
                position: "relative",
                height: t.el.scrollObj.height()
            });
        },
        /**
         * 下一页
         */
        next: function () {
            var t = this;
            var hiddenRightWidth = t.scrollWidth - t.left - t.scrollParentWidth;
            if (hiddenRightWidth > 0) {
                if(hiddenRightWidth > t.liWidth * options.numToMove){
                    t.left = t.left + t.liWidth * options.numToMove;
                }else{
                    t.left = t.left + hiddenRightWidth;
                }

                t.el.scrollObj.animate({left: -t.left});
                t.updateBtnStatus();
            }
        },
        /**
         * 上一页
         */
        prev: function () {
            var t = this;
            if ((t.left) > 0) {
                if(t.left > t.liWidth * options.numToMove){
                    t.left = t.left - t.liWidth * options.numToMove;
                }else{
                    t.left = 0;
                }
                t.el.scrollObj.animate({left: -t.left});
                t.updateBtnStatus();
            }
        },
        updateBtnStatus: function () {
            var t = this;
            if ((t.scrollWidth - t.left - t.scrollParentWidth) < 0) {
                t.el.nextBtn.addClass("disable");
            } else {
                t.el.nextBtn.removeClass("disable");
            }
            if (t.left === 0) {
                t.el.prevBtn.addClass("disable");
            } else {
                t.el.prevBtn.removeClass("disable");
            }
        },
        /***
         * 外部调用 激活下一个li
         */
        nextLi: function () {
            var t = this;
            t.el.scrollObj.find(".active").next().size()>0
                && t.el.scrollObj.find(".active").removeClass("active").next().addClass("active");
            if ((t.scrollWidth - t.left - t.scrollParentWidth) > 0) {
                t.left = t.left + t.liWidth;
                t.el.scrollObj.animate({left: -t.left});
            }
        },
        /***
         * 激活上一个li 添加 active 样式
         */
        prevLi: function () {
            var t = this;
            // 判断当前激活元素是否能显示出
            t.el.scrollObj.find(".active").prev().size()>0
                && t.el.scrollObj.find(".active").removeClass("active").prev().addClass("active");
            if ((t.left) > 0) {

                t.left = t.left - t.liWidth;
                t.el.scrollObj.animate({left: -t.left});
            }
        },
        resize: function (width) {
            var t = this;
            t.el.container.css({
                width:width
            });
            t.scrollParentWidth = width;
            options.numToMove = width / t.liWidth ;
        },
        destroy: function () {
            var t = this;
            t.el.nextBtn.off("click");
            t.el.prevBtn.off("click");
            delete t;
        }
    };
    controller.init();
    return $.extend(this, {
        prevLi: function() {
            controller.prevLi();
        },
        nextLi: function () {
            controller.nextLi();
        },
        resize: function (width) {
            controller.resize(width);
        },
        destroy:function(){
            controller.destroy();
        }
    });
};