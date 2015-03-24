/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/3.
 */
$.fn.replaceInput = function (param) {
    param = param||{};
    param = $.extend(true,{}, {uploadReplaceCss:{//上传控件默认样式
                                    width:80,
                                        height:20,
                                        overflow:'hidden',
                                        position:'relative'

                                },
                                uploadInputCss:{
                                    fontSize:72,
                                    cursor:'pointer',
                                    position:'absolute',
                                    right:0,
                                    //bottom:0,
                                    filter:'alpha(opacity=0)',
                                    opacity:0,
                                    outline:'none',
                                    width:80,
                                    height:20,
                                    hideFocus:'expression(this.hideFocus=true)'
                                },
                                cssClass:{}
                        },param);
    param.url = param.url||window.location.href||'';
    param.MAX_FILE_SIZE = !-[1,] && param.MAX_FILE_SIZE ;
    return $(this).each(function() {
        //绑定click只是让效果看上去更好，与上传功能无关
        var jThis = $(this).click(function () {
            $(this).parent().css({
                opacity: 1,
                filter: 'alpha(opacity=100)'
            });
        });

        if (jThis.is('input[type="file"]')) {

            var html = param.html || "<div />";
            var div = $(html)
                .insertBefore(jThis.css(param.uploadInputCss))
                .css(param.uploadReplaceCss)
                .addClass(param.cssClass)
                .hover(function () {
                    $(this).css({
                        opacity: 0.7,
                        filter: 'alpha(opacity=70)'
                    });
                }, function () {
                    $(this).css({
                        opacity: 1,
                        filter: 'alpha(opacity=100)'
                    });
                });

            //有一篇文章说，IE浏览器可以设置最大字节数，那么我就加上这句的
            //<input type="hidden" name="MAX_FILE_SIZE" value="30000" />
            //MAX_FILE_SIZE 隐藏字段（单位为字节）必须先于文件输入字段，其值为接收文件的最大尺寸。
            //这是对浏览器的一个建议，PHP 也会检查此项。
            //在浏览器端可以简单绕过此设置，因此不要指望用此特性来阻挡大文件。
            //实际上，PHP 设置中的上传文件最大值是不会失效的。
            //但是最好还是在表单中加上此项目，
            //因为它可以避免用户在花时间等待上传大文件之后才发现文件过大上传失败的麻烦。
            //详见：http://www.ugia.cn/?p=73
            if(param.MAX_FILE_SIZE){
                this.MAX_FILE_SIZE = param.MAX_FILE_SIZE ;
            }

            jThis.appendTo(div).change(function(){  // 选中文件
                if(this.value!==""){
                    if(param.onChangeHdl.call(this) === false){
                        return false ;
                    }
                }
            });
        }
    });
};

