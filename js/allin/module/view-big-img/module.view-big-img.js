/**
 * 功能描述：   查看大图  在一个图片列表上绑定此模块，当点击其中一幅图时，展开
 * 使用方法:    module.viewBigImg({
 *                  container:".viewBigImg",    // 需要绑定 浏览大图功能 的 图片列表容器
 *                  typeTitle:""                // 图片列表 分类名称 比如 “术前”，“术后”，“新闻” 为空不显示
 *              })
 * 注意事件
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/4.
 */

module.viewBigImg = function(Obj){
    var defaultsOpt = {
            container:".viewBigImg",    // 需要绑定 浏览大图功能 的 图片列表容器
            typeTitle:""                // 图片列表 分类名称 比如 “术前”，“术后”，“新闻” 为空不显示
        };

    var options = $.extend(defaultsOpt,Obj);
    if($(options.container).size()>1){
        $(options.container).each(function () {
            module.viewBigImg({container:$(this),typeTitle:$(this).attr("typeTitle")});
        });
        return;
    }
    var controller  = {
        config:{

        },
        path:{
            getPicList:""       // 获取图片列表
        },
        el:{
            originList:$(options.container)
        },
        picType:"width", // 当前图片大小适应类型
        template:{
            main: function () {
                return '<div class="view_big_img_wrap"><div class="view_big_img">' +
                   // '        <div class="view_big_img_bg"></div>' +
                    '        <div class="view_big_img_content">' +
                    '            <div class="view_big_img_center">' +
                    '                <div class="view_img_top" id="vbi-scrollList">' +
                    '                    <div class="view_top_img_left_mr prev"></div>' +
                    '                    <div class="view_img_top_cont">' +
                    '                        <ul class="scroll">' +
                    '                            <li><div class="small_img_mr"></div><img src="images/mr_small_img.png" /></li>' +
                    '                        </ul>' +
                    '                    </div>' +
                    '                    <div class="view_top_img_right_hover next"></div>' +
                    '                    <div class="clear"></div>' +
                    '                </div>' +
                    '                <div class="view_big_img_cont_bg">' +
                    '                    <div class="view_img_close"><img src="images/close.png" /></div>' +
                    '                    <div class="view_img_cont_top">' +
                    '                        <div class="view_img_sh_zt hide"></div>' +
                    '                        <div class="view_img_title font_yahei" id="vbi-imgTitle"></div>' +
                    '                        <div class="view_img_num" id="vbi-imgIndex"></div>' +
                    '                        <div class="view_img_time font_yahei" originText="上传于2015-04-03 12:23" id="uploadTime">上传于2015-04-03 12:23</div>' +
                    '                        <div class="clear"></div>' +
                    '                    </div>' +
                    '                    <div class="view_img_tp">' +
                    '                        <s class="prev" title="这是第一张图片"></s>' +
                    '                        <s class="next" title="下一张"></s>' +
                    '                        <div class="view_img_but view_img_shck font_yahei" id="vbi-setSizeBtn">适合窗口</div>' +
                    '                        <div class="view_img_but view_img_view_yt font_yahei" id="vbi-viewBigImg">查看原图</div>' +
                    '                        <table width="100%" height="100%" class="" >' +
                    '                           <tr><td align="center" valign="middle"><img src="images/width_img.jpg"  />' +
                    '                           </td></tr>' +
                    '                        </table>' +
                    '                   </div>' +
                    '                </div>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>'+
                    '</div>';
            }
        },
        init: function () {
            var t = this;
            t.el.originList.find("li").on("click", function () {        // 绑定需要展示大图的图片列表
                t.currentIndex = $(this).index();   // 当前点击的图片
                t.openDialog();                     // 打开弹层
                t.dialog.find(".view_img_top_cont ul li:eq("+t.currentIndex+")").click();    // 默认点击第一项
            });
        },
        /**
         *  绑定按钮
         */
        bindBtns: function () {
            var t = this;
            t.dialog.find(".view_img_close").on("click", function () {    // 关闭
                t.close();
            });

            t.dialog.find("#vbi-setSizeBtn").on("click",function(){
                if($(this).text()=="适合窗口"){
                    $(this).text("适合宽度");
                    t.picType = "window";
                    t.setSize(t.picType);    // 适合窗口
                }else{
                    t.picType = "width";
                    $(this).text("适合窗口").show();
                    t.setSize(t.picType);     // 适合宽度
                }

            });
        },
        /**
         * 切换图片
         * imgObj   图片对象
         */
        changeImg: function (imgObj) {
            var t = this;
            t.dialog.find("#vbi-imgTitle").html(imgObj.title);   //  更新标题
            t.dialog.find("#vbi-imgIndex span").html(imgObj.index+1);   //  更新数字
            t.dialog.find(".view_img_tp img").attr("src",imgObj.src);
            t.setSize(t.picType);
        },
        bindWindonResize: function () {
            var t = this;
            $(window).on("resize", function(){
                t.resize();
            });
        },
        unbindWindonResize: function () {
            var t = this;
            $(window).off("resize");
        },
        resize: function () {
            var t = this;
            t.dialog.css({
                width: $(window).width(),
                height: $(window).height()
            });


            // 图片列表宽度
            var topConWidth = $(window).width() > 1080 ? 1000 : $(window).width() -80 ;
            var scrollCtrlConWidth = t.topContainer.find(".prev").outerWidth(true)+   // 图片列表控制按钮宽度
                 t.topContainer.find(".next").outerWidth(true);

            if(t.topContainer.find("ul.scroll").width() > (topConWidth-scrollCtrlConWidth)) {     // 若图片列表宽度 大于 区域最大宽度 需要隐藏时
                t.topContainer.find(".view_img_top_cont").width(topConWidth - scrollCtrlConWidth); // 改变显示区宽度
            }

            t.scrollbox.resize(topConWidth-scrollCtrlConWidth);

            // 顶部列表容器
            t.topContainer.width(topConWidth);

            // 改变图片容器宽度
            var padding = parseInt(t.dialog.find(".view_big_img_cont_bg").css("padding-left")) * 2;
            if($(window).width()<1080){
                t.dialog.find(".view_big_img_center").width($(window).width() - 80);
            }else{
                t.dialog.find(".view_big_img_center").width(1000);
            }



            if(t.dialog.find("#vbi-setSizeBtn").text()=="适合宽度"){// 当前为适合窗口状态 容器及图片大小需随之变化
                t.setSize("window");
            }else{
                t.setSize("width");
            }
        },
        /**
         * 弹出浏览框
         */
        openDialog: function () {
            var t = this;
            t.dialog = $(t.template.main());
            $("body").append(t.dialog);

            t.topContainer = t.dialog.find(".view_img_top");
            t.picContainer = t.dialog.find(".view_img_tp");
            t.img = t.dialog.find(".view_img_tp img");
            comm.LightBox.show(60,"#000");  // 遮罩
            // t.dialog.find(".view_img_top_cont")

            t.initImgList();
            t.resize();
            t.setCss();
            t.bindBtns();

            t.bindWindonResize();
            t.setTypeTitle();
            t.dialog.find("#vbi-imgIndex").html("<span></span> / " + t.pictureSize);
            t.initNextPrevBtns();

        },
        /**
         *  专题标题
         */
        setTypeTitle: function () {
            var t = this;
            if(options.typeTitle!==""){
                t.dialog.find(".view_img_sh_zt").html(options.typeTitle).show();
            }
        },
        setCss: function () {
            var t = this;
            $("body").css({
                position:"relative",
                overflow:"hidden"
            });
            t.dialog.css({
                position:"absolute",
                top:document.body.scrollTop,
                width:$(window).width(),
                zIndex:comm.LightBox.getZIndex()+1,
                overflowY:"scroll",
                height:$(window).height()
            });

            t.setSize("width");
        },
        initImgList: function () {
            var t = this;
            t.copyImgList();



            var maxUlConWidth = t.dialog.find(".view_big_img_cont_bg").outerWidth(true) - t.topContainer.find(".prev").outerWidth(true) -  // 图片列表的父级容器可允许的最大宽度
                                      t.topContainer.find(".next").outerWidth(true);


            if(t.topContainer.find("ul.scroll").width() > maxUlConWidth){     // 图片列表的长度 超出最大长度
                t.topContainer.find(".view_img_top_cont").width(maxUlConWidth);
            }else{                                                            // 未超出
                t.topContainer.find(".view_img_top_cont").width(t.topContainer.find("ul.scroll").width());
                t.topContainer.find(".prev,.next").addClass("disable");
            }

            t.scrollbox = t.dialog.find("#vbi-scrollList").scrollBox({             // 调用滚动插件
                numToMove : Math.floor(maxUlConWidth / 85),  // 每次滑动的个数
                liClickHdl:function(li){
                    var img = $(li).find("img");
                    var imgObj = {
                        index:$(li).index(),
                        src:img.attr("src"),
                        title:img.attr("title")
                    };
                    $(li).addClass("active").siblings(".active").removeClass("active");
                    t.changeImg(imgObj);        // 切换图片
                }
            });

        },
        /**
         * 将图片列表中图片复制到头部容器中 :TODO to be deleted
         */
        copyImgList: function () {
            var t = this;
            var html = "";
            t.pictureSize = t.el.originList.find("li img").size();
            t.el.originList.find("li img").map(function () {
                html += "<li><div class='small_img_mr'></div><img src='"+ $(this).attr("src") +"' title='"+ ($(this).attr("title")||"") +"' /></li>";
            });
            t.dialog.find("ul.scroll").html(html);

            t.liOuterWidth = t.dialog.find("ul.scroll li:eq(0)").outerWidth(true);
            t.dialog.find("ul.scroll").css({
                width:85 * t.pictureSize
            });

        },
        /***
         * 若对象中无图片列表，需从服务端获取的话。
         */
        loadPicList: function () {
            
        },
        /**
         * 关闭对话框
         */
        close: function () {
            var t = this;
            t.dialog.remove();
            comm.LightBox.hide();
            $("body").css({
                position:"static",
                overflow:"scroll"
            });
            t.unbindWindonResize();
        },
        /**
         * 设置图片显示 大小 "window" 按窗口 ，"width" 按高宽 ，"origin" 原图大小
         * @param type
         */
        setSize: function (type) {

            var t = this,
                bg = t.dialog.find(".view_big_img_cont_bg"),
                bg_cont_top = bg.find(".view_img_cont_top"),
                containerHeight = $(window).height() - parseInt(t.dialog.find(".view_big_img_center").css("paddingTop")) * 2 - t.dialog.find(".view_img_top").height() - parseInt(bg.css("paddingTop"))* 2,   // 容器高度
                maxHeight = containerHeight - bg_cont_top.height() - parseInt(bg_cont_top.css("margin-bottom")),

                minHeight = maxHeight,
                maxWidth = bg.width();    // 图片最大宽度

            maxHeight = maxHeight > 100 ? maxHeight : 100;  // 最低不小于100     // 最小值限制
            maxWidth = maxWidth > 200 ? maxWidth : 200;  // 最窄不小于200    // 最小值限制

            if(type=="window"){

                // step1 使滑动条度部容器高度随窗口改变
                bg.animate("height",containerHeight);
                // step2  设置图片高宽
                // 图片最大高度 ，容器最大高度 减去 容器内边距 减去 容器内头部高度
                comm.setImgSize(maxHeight,maxWidth, t.img.get(0));  // 等比缩放图片

                // step3  设置 图片容器高宽
                t.picContainer.height(maxHeight);                  // 设置 图片容器高度，用来处理居中

            }
            if(type=="width"){  // 适应宽度
                //t.dialog.css("overflow-x","scroll");

                // step1 使滑动条度部容器高度自适应
                var bg = t.dialog.find(".view_big_img_cont_bg");
                bg.css("height","auto");

                // step2  设置图片高宽
                comm.setImgSize(8000,maxWidth,t.img.get(0));  // 等比缩放图片

                // step3  设置 图片容器高宽

                minHeight = minHeight > t.img.height() ? minHeight : t.img.height();
                t.picContainer.height(minHeight);                  // 设置 图片容器高度，用来处理居中
            }

        },
        /***
         * 在图片上的上下控制按钮 初始化
         */
        initNextPrevBtns: function () {
            var t = this;
            t.picContainer.find(".prev").on("click", function () {
                t.scrollbox.prevLi();
                t.topContainer.find(".active").click();
            });
            t.picContainer.find(".next").on("click", function () {
                t.scrollbox.nextLi();
                t.topContainer.find(".active").click();
            });
        }
    };
    
    controller.init();
    return {
        
    };
};