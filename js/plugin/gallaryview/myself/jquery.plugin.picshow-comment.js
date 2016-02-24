/**评论图片展示 */
$.fn.picShowComment = function (options) {
    var el = $(this);
    var defaultOptions = {
        repeat:false,        // 是否可循环滚动
        open:-1
    };

   /* var ticking = false;
    var transform;
    var initScale = 1;
    var screen = document.querySelector("body");
    //var el = document.querySelector("#hitarea");

    var START_X =0;
    var START_Y =0;
    var centerEl;

    function updateElementTransform() {
        //alert(8)
        var value = [
                'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
                'scale(' + transform.scale + ', ' + transform.scale + ')',
                'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
        ];

        value = value.join(" ");
        centerEl.style.webkitTransform = value;
        centerEl.style.mozTransform = value;
        centerEl.style.transform = value;
        ticking = false;
    }


    function onPan(ev) {
        el.className = '';
        transform.translate = {
            x: START_X + ev.deltaX,
            y: START_Y + ev.deltaY
        };

        logEvent(ev);
        requestElementUpdate();
    }
    function requestElementUpdate() {
        if(!ticking) {
            reqAnimationFrame(updateElementTransform);
            ticking = true;
        }
    }


    var reqAnimationFrame = (function () {
        return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
*/

    function DrawImage(ImgD,iwidth,iheight){
        //参数(图片,允许的宽度,允许的高度)
        var image=new Image();
        image.src=ImgD.src;
        if(image.width>0 && image.height>0){
            if(image.width/image.height>= iwidth/iheight){
                if(image.width>iwidth){
                    ImgD.width=iwidth;
                    ImgD.height=(image.height*iwidth)/image.width;
                }else{
                    ImgD.width=image.width;
                    ImgD.height=image.height;
                }
            }else{
                if(image.height>iheight){
                    ImgD.height=iheight;
                    ImgD.width=(image.width*iheight)/image.height;
                }else{
                    ImgD.width=image.width;
                    ImgD.height=image.height;
                }
            }
        }
    }

    var opts = $.extend(defaultOptions,options);
    var obj = {
        init: function () {
            var t = this;
            t.imgsArr = [];
            t.textArr = [];
            t.currentIndex = 0;
            t.setImgSize();
            //t.bindOpenClick();

            if(opts.open>-1){
                t.currentIndex = opts.open;
                t.showPic();
            }
            t.opts = opts;
        },
        bindOpenClick:function(){
            var t = this;
            el.off("vclick tap").on("vclick tap",function(){
                t.setImgSize();
                t.currentIndex = $(this).index();
                t.showPic();
            });

        },
        showPic: function () {
            $("body").css("overflow","hidden");
            var t = this;
            if(!$(".pswp").length){
                $("body").append('<!-- Root element of PhotoSwipe. Must have class pswp. -->' +
                    '           <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">' +
                    '                    <!-- Background of PhotoSwipe. ' +
                    '                         It,s a separate element as animating opacity is faster than rgba(). -->' +
                    '                <div class="pswp__bg"></div>' +
                    '                    <!-- Slides wrapper with overflow:hidden. -->' +
                    '                <div class="pswp__scroll-wrap">' +
                    '                    <!--   Container that holds slides.' +
                    '                           PhotoSwipe keeps only 3 of them in the DOM to save memory.' +
                    '                           Don t modify these 3 pswp__item elements, data is added later on. -->' +
                    '                    <div class="pswp__container">' +
                    '                            <div class="pswp__item"></div>' +
                    '                            <div class="pswp__item"></div>' +
                    '                            <div class="pswp__item"></div>' +
                    '                    </div>' +
                    '                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->' +
                    '                    <div class="pswp__ui pswp__ui--hidden">' +
                    '                        <div class="pswp__top-bar">' +
                    '                                            <!--  Controls are self-explanatory. Order can be changed. -->' +
                    '                            <div class="pswp__counter"></div>' +
                    '                            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>' +
                    '                            <button class="pswp__button pswp__button--share" title="Share"></button>' +
                    '                            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>' +
                    '                            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>' +
                    '                            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->' +
                    '                            <!-- element will get class pswp__preloader--active when preloader is running -->' +
                    '                            <div class="pswp__preloader">' +
                    '                                <div class="pswp__preloader__icn">' +
                    '                                    <div class="pswp__preloader__cut">' +
                    '                                        <div class="pswp__preloader__donut"></div>' +
                    '                                    </div>' +
                    '                                </div>' +
                    '                            </div>' +
                    '                        </div>' +
                    '                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' +
                    '                           <div class="pswp__share-tooltip"></div>' +
                    '                        </div> ' +
                    '                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">' +
                    '                           </button>' +
                    '                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">' +
                    '                           </button>' +
                    '                        <div class="pswp__caption">' +
                    '                            <div class="pswp__caption__center"></div>' +
                    '                        </div>' +
                    '                    </div>' +
                    '                </div>' +
                    '            </div>');


                var pswpElement = document.querySelectorAll('.pswp')[0];

                var items = [
                    {
                        src: 'https://placekitten.com/600/400',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://placekitten.com/1200/900',
                        w: 1200,
                        h: 900
                    }
                ];

                // define options (if needed)
                var options = {
                    // optionName: 'option value'
                    // for example:
                    index: 0 // start at first slide
                };

                // Initializes and opens PhotoSwipe
                var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();

               /* $("#picShowContainer .return-btn-comment").on("vclick tap", function () {
                    t.currentIndex = 0 ;
                    $("#picShowContainer").remove();
                    $("body").css("overflow","auto");
                    return false;
                });


                t.container = $("#picShowContainer");


                t.initWidthHeight();
                t.initSlide();*/
            }
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
            var left = "swipeLeft";
            var right = "swipeRight";
            if($("html").attr("ng-app")==undefined){
                left = left.toLowerCase();
                right = right.toLowerCase();
            }
            $("#picShowContainer").on(left,function(){
                if(t.opts.repeat){
                    t.slide(1);
                }else{
                    if(t.currentIndex != (t.imgsArr.length-1)){
                        t.slide(1);
                    }
                }
            });
            $("#picShowContainer").on(right,function(){
                if(t.opts.repeat){
                    t.slide(-1);
                }else{
                    if(t.currentIndex != 0){
                        t.slide(-1);
                    }
                }
            });
        },
        unbindSlide: function () {
            $("#picShowContainer").off("swipe");
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
            //if(t.currentIndex==0){
                t.centerBox.html(createImg(t.imgsArr[t.currentIndex]));
            //}

            t.rightBox.html(createImg(t.imgsArr[rightIndex]));

            t.leftBox.css("left",-$(window).width());
            t.centerBox.css("left",0);
            t.rightBox.css("left",$(window).width());

            t.setNum(t.currentIndex+1);
            function createImg(src){
                if(src==""){
                    src = "/image/225_150.jpg";
                }
                var rst = new Image();
                rst.src = src;
                rst.onerror = function(){
                    this.src = "/image/225_150.jpg";
                };
               // $(rst).attr("data-elem","pinchzoomer");
                rst.onload=function(){
                    this.width = $(window).width()-10;
                    if(this.height<t.conHeight){
                        $(this).css("marginTop",(t.conHeight - this.height)/2);
                    }
                };

                var START_X = 0 ;//Math.round((screen.offsetWidth - rst.offsetWidth) / 2);
                var START_Y = Math.round((screen.offsetHeight - rst.offsetHeight) / 2);
                return rst;
            }
            centerEl = t.centerBox.get(0);
            t.resetImgBind();
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
        resetElement:function() {
            el.className = 'animate';
            transform = {
                translate: { x: START_X, y: START_Y },
                scale: 1,
                angle: 0,
                rx: 0,
                ry: 0,
                rz: 0
            };

        },
        resetImgBind: function () {
            var t = this;
            t.resetElement();
            /*touch.on(t.container,"pinch", function (e) {
                //console.log(e.scale);
                var img = t.centerBox.find("img");
                if((img.width() * e.scale + 20)>=$(window).width()){
                    img.css({
                        width:img.width() * e.scale*0.8,
                        height:img.height() * e.scale*0.8,
                        marginTop:($(window).height()-img.height()*0.8* e.scale)/2
                    });
                    console.log(($(window).height()-img.height()* e.scale)/2)
                }

                if(img.width()>$(window).width()){    // 超出后不可滑动
                    t.unbindSlide();
                }else{
                    t.bindSlide();
                }

                console.log("postion" + e.position);
                *//*
                if(parseInt($('.scroll_box2').css("marginTop"))<0&&e.scale<1) return ;
                //t.centerBox.find("img").css("-webkit-transform","scale("+e.scale+")");
                t.centerBox.find("img").css("marginTop",Math.ceil(parseInt(img.height())*parseFloat(e.scale-1))/2);*//*
                return false;
            });*/

            var mc = new Hammer.Manager(t.container.get(0),{enable:true});

            mc.add(new Hammer.Pinch({ threshold: 0 }));

            //mc.on("pinchstart pinchmove", onPinch);
            mc.on("pinch", function(ev) {
                if(ev.type == 'pinchstart') {
                    initScale = transform.scale || 1;
                }
              /*  alert(2)*/
                //t.container.className = '';
                transform.scale = initScale * ev.scale;
               // alert(ev.scale) ;
                requestElementUpdate();
            });
           /* debugger;

            var obj = new RTP.PinchZoom(t.centerBox, {});
            debugger;*/

        },
        setNum: function (num) {
            var t = this;
            t.container.find(".num-con-comment").html("<span>" + num + "</span>/" + t.count);
        },
        setImgSize: function () {
            var t = this;
            t.images = el.parents("ul.commentImgs").find("img");

            t.count  = t.images.length;
            var $width = el.width();
            var $height =  $width*0.639;     // 371 /   580
            if(t.count>0){

                t.images.each(function (index,obj) {
                    DrawImage(t.images.eq(index),$width,$height);
                    var url = obj.src.match(/(http:\/\/\S+\_c)/);
                    var format =  obj.src.toLowerCase().match(/(jpg|jpeg|gif|png|bmp)/);
                    if(url!=null && format!=null){
                        t.imgsArr.push(url[0]+"."+format[0]);
                        t.textArr.push(obj.title);
                    }else{
                        t.imgsArr.push("");
                        t.textArr.push("");
                    }

                });
            }
        }
    };
    obj.init();
}