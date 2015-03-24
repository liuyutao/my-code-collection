/**
 * 功能描述：点击添加图片，添加至某容器中，
 * 使用方法:  $("#xxx").addRemoveablePic({
 *             container:$("#yyy"),
 *             limit:4
 *          })
 * 注意事件： 依赖上传插件  js/plugin/uploadReplace.js
 * 引入来源：
 *
 * Created by LiuYuTao on 2015/2/28.
 */
$.fn.addRemoveablePic = function(obj){
    var defaultOpts = {
        container:null,
        limit:4,
        maxFileSize:10485760,
        html:"xxx"
    };
    var _DomObj = this;     // 当前元素
    var controller = {
        path:{
            upload:"/call/customer/fellowship/attachment/create/"   // 插入评论图片 上传地址      url:"/call/customer/fellowship/attachment/create/", //文件处理的URL
                        //data:{customerId:t.customerId,fellowshipId:fellowshipid,useFlag:'2'},
        },
        el:{

        },
        uploadData:null,    // 上传参数,
        opts:null,
        listContainer:null,
        limitNum:0,
        /**
         *
         */
        init: function () {
            var t = this;
            t.opts = $.extend(defaultOpts,obj);
            if(t.opts.container === null){
                console.error("图片列表容器不能为空");
                return false;
            }
            t.bindDomObj();
            t.insertContainer();
            t.uploadData = {         // 上传图片时 参数

            };

            t.limitNum = t.opts.limit;
        },
        template:{
            container: function (kv) {
                return '<div class="add_photo hide">' +
                    '<div class="hn_add">还能添加'+ kv.limit+'张</div>' +
                    '                <ul>' +
                    // '                <li><div class="add_photo_img"><img src="http://img00.allinmd.cn/detail/sc_photo.png"><div class="c_close"><img src="http://img00.allinmd.cn/detail/c_close.png"></div></div></li>' +
                    '                   <div class="clear"></div>' +
                    '                 </ul>' +
                    '   </div>';
            }
        },
        /**
         * 在规定的父容器中插入 要放置图片列表的 子级容器
          */
        insertContainer: function () {
            var t = this;
            $(defaultOpts.container).append(t.template.container({limit:defaultOpts.limit}));
            t.listContainer = $(defaultOpts.container).find(".add_photo");
            t.listContainer.bind(".c_close","click", function () {   // 关闭按钮
                t.removePic(this);
            });
        },
        /**
         * 绑定上传按钮 点击上传
         */
        bindDomObj: function () {
            var t = this;
            _DomObj.html("<input type='file' name='file' /> ");

            var input = _DomObj.find("input");
            input.replaceInput({
                html: t.opts.html,      // 替换后的DOM代码

                onChangeHdl: function () {       // 选中文件后
                    if(t.limitNum>0){   //图片数量不超过限制
                        //预览
                        var html =  $('<li><div class="add_photo_img"><div class="c_close"><img src="http://img00.allinmd.cn/detail/c_close.png"></div></div></li>');
                        var imgWrap = html.find(".add_photo_img");
                       
                        html.insertBefore(t.listContainer.find(".clear"));

                        var close = html.find(".c_close");
                        close.on("click", function () {     // 移除 此图片
                            $(this).parents("li").remove();
                            t.limitNum++;
                            t.updateNum();
                            input.val("");
                        });
                    	

                        $.imageFileVisible({           // 显示预览
                            wrapSelector: imgWrap,
                            fileSelector: input
                        });

                        // 将 当前浏览图片按钮 移入刚刚上传的图片中。
                        var d = input.clone().hide();
                        d.appendTo(imgWrap);

                        t.limitNum--;
                        t.listContainer.show();
                        t.updateNum();

                    }
                }
            });

        },
        /**
         * 返回本上传控件已上传图片地址
         * @returns {[]}
         */
        getPics: function () {
            return this.Pics;
        },
        removePic: function (obj) {
            var t = this;
            $(obj).parent().remove();
            t.limitNum++;
            t.updateNum();
        },
        updateNum: function () {
            var t = this;
            t.listContainer.find(".hn_add").text('还能添加'+ t.limitNum+'张').show();
            if(t.limitNum === t.opts.limit){
            	 t.listContainer.hide();
            }
        }

    };

    controller.init();
    return {getPics:controller.getPics};


};
