$.fn.picShow = function (options) {
    var el = $(this);
    var defaultOptions = {
        repeat:false        // 是否可循环滚动
    };
    var opts = $.extend(defaultOptions,options);
    var obj = {
        init: function () {
            var t = this;
            t.imgsArr = [];
            t.textArr = [];
            t.currentIndex = 0;
            t.setImgSize();
            t.bindOpenClick();
            t.opts = opts;
        },
        bindOpenClick:function(){
            var t = this;
            el.find("img:eq(0)").on("vclick",function(){
                $("body").css("overflow","hidden");
                if(!$("#picShowContainer").length){
                    $("body").append('<div id="picShowContainer" class="picshow-container"><div class="return-btn"></div>' +
                        '<div id="picshow-pic-con" class="picshow-pic-con">' +
                        '   <div class="inner-box-1 inner-box"></div>' +
                        '   <div class="inner-box-2 inner-box"></div>' +
                        '   <div class="inner-box-3 inner-box"></div>' +
                        '</div>' +
                        '<div class="num-con"></div>' +
                        '<div id="desc-con" class="desc-con"></div>' +
                        '</div>');

                    $("#picShowContainer .return-btn").on("vclick", function () {
                        t.currentIndex = 0 ;
                        $("#picShowContainer").remove();
                        $("body").css("overflow","scroll");
                        return false;
                    });


                    t.container = $("#picShowContainer");
                    t.initWidthHeight();
                    t.initSlide();
                }
            });
        },
        initWidthHeight: function () {
            var t = this;
            var descHeight = $("#picShowContainer .desc-con").height();
            var screenH =  $("#picShowContainer").height();
            t.conHeight = screenH-descHeight;

            $(".picshow-pic-con").height(t.conHeight);
            $(".picshow-pic-con .inner-box").height(t.conHeight);
        },
        initSlide: function () {
            var t = this;
            t.leftBox =   $("#picshow-pic-con .inner-box-1");
            t.centerBox = $("#picshow-pic-con .inner-box-2");
            t.rightBox =  $("#picshow-pic-con .inner-box-3");
            t.setImg();
            t.bindSlide();
            t.container.find(".desc-con").html(t.textArr[0]);
        },
        bindSlide: function () {
            var t = this;
            $("#picshow-pic-con").on("swipeleft",function(){
                if(t.opts.repeat){
                    t.slide(1);
                }else{
                    if(t.currentIndex != (t.imgsArr.length-1)){
                        t.slide(1);
                    }
                }
            });
            $("#picshow-pic-con").on("swiperight",function(){
                if(t.opts.repeat){
                    t.slide(-1);
                }else{
                    if(t.currentIndex != 0){
                        t.slide(-1);
                    }
                }
            });
        },
        setImg: function () {
            var t = this,leftIndex,rightIndex;
            if(t.currentIndex>=t.imgsArr.length){
                t.currentIndex = 0;
            }
            if(t.currentIndex<0){
                t.currentIndex = t.imgsArr.length-1;
            }
            leftIndex = t.currentIndex-1;
            rightIndex = t.currentIndex + 1 ;

            if(leftIndex<0){
                leftIndex = t.imgsArr.length-1;
            }
            if(rightIndex>=t.imgsArr.length){
                rightIndex = 0;
            }

            t.leftBox.html(createImg(t.imgsArr[leftIndex]));
            if(t.currentIndex==0){
                t.centerBox.html(createImg(t.imgsArr[t.currentIndex]));
            }
            t.rightBox.html(createImg(t.imgsArr[rightIndex]));

            t.leftBox.css("left",-$(window).width());
            t.centerBox.css("left",0);
            t.rightBox.css("left",$(window).width());

            t.setNum(t.currentIndex+1);
            function createImg(src){
                var rst = new Image();
                rst.src = src;
                rst.onload=function(){
                    this.width = $(window).width()-10;
                    if(this.height<t.conHeight){
                        $(this).css("marginTop",(t.conHeight - this.height)/2);
                    }
                };
                return rst;
            }
        },
        slide: function (direction) {
            var t = this;
            if(direction<0){ // right
                t.centerBox.animate({"left":$(window).width()});
                t.leftBox.animate({"left":0},function(){
                    var temp = t.leftBox;
                    t.leftBox = t.rightBox;
                    t.rightBox = t.centerBox;
                    t.centerBox = temp;
                    t.currentIndex--;
                    t.setImg();
                    t.container.find(".desc-con").html(t.textArr[t.currentIndex]);
                });
            }else{      // left
                t.centerBox.animate({"left":-$(window).width()});
                t.rightBox.animate({"left":0}, function () {
                    var temp = t.leftBox;
                    t.leftBox = t.centerBox;
                    t.centerBox = t.rightBox;
                    t.rightBox = temp;
                    t.currentIndex++;
                    t.setImg();
                    t.container.find(".desc-con").html(t.textArr[t.currentIndex]);
                });
            }
        },
        setNum: function (num) {
            var t = this;
            t.container.find(".num-con").html("<span>" + num + "</span>/" + t.count);
        },
        setImgSize: function () {
            var t = this;
            t.images = el.find("img");

            t.count  = t.images.length;
            var $width = $(".imgs").width();
            var $height =  $width*0.639;     // 371 /   580
            if(t.count>0){
                //DrawImage(t.images.eq(0).get(0),$width,$height);
              /*  t.images.eq(0).get(0).css({
                    width:$width,height:$height
                });*/
                t.images.each(function (index,obj) {
                    var url = obj.src.match(/(http:\/\/\S+\_c)/);
                    var format =  obj.src.match(/(jpg|jpeg|gif|png|bmp)/ig);
                    t.imgsArr.push(url[0]+"."+format[0]);
                    t.textArr.push(obj.title);
                });
            }
        }
    };
    obj.init();
}