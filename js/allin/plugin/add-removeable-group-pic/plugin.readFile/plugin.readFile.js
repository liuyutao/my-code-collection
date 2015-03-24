/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/3.
 */
(function($) {
    $.imageFileVisible = function(options) {
        // 默认选项
        var defaults = {
//包裹图片的元素
            wrapSelector: null,
//<input type=file />元素
            fileSelector:  null ,
            errorMessage: "不是图片"
        };
        // Extend our default options with those provided.
        var opts = $.extend(defaults, options);
        //$(opts.fileSelector).on("change",function(){
            var file = $(opts.fileSelector).get(0).files[0];
            var imageType = /image.*/;
            if (file.type.match(imageType)) {
                var reader = new FileReader();
                reader.onload = function(){
                    var img = new Image();
                    img.src = reader.result;
                    $(img).width( opts.width);
                    $(img).height( opts.height);
                    $( opts.wrapSelector ).append(img);
                };
                reader.readAsDataURL(file);
            }else{
                alert(opts.errorMessage);
            }
        //});
    };
})(jQuery);