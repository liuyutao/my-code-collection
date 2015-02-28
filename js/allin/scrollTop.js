$(function(){
	var b=1;
	var timer=null;
	var url=document.URL;//获取网站地址
	//网站首页和个人首页不显示首页图标
	if(url=="http://www.allinmd.cn/"||url.lastIndexOf("/call/customer/index/input/")>0){
		$(".fh_home").css({opacity:0});	
		$(".fh_home").hide();
	}else{
		$(".fh_home").css({opacity:1});
		$(".fh_home").show();	
	};
	//回到顶部
	$(".fh_top").on("click",function(){
		MoveTop(0);	
	});
	//二维码显示隐藏
	$(".sm_erweima").toggle(
		function(){
			$(".weixin_e").animate({width:176},500);
		},
		function(){
			$(".weixin_e").animate({width:0},500);	
		}
	);
	//文档点击关闭二维码
	$(document).bind("click",function(){
		$(".weixin_e").animate({width:0},500);
		$(".sm_erweima").off("click");
		$(".sm_erweima").toggle(
			function(){
				$(".weixin_e").animate({width:176},500);
			},
			function(){
				$(".weixin_e").animate({width:0},500);	
			}
		);
	});
	//底部导航的显示和隐藏
	$(window).bind("scroll",function(){
	    if(b==2){
			clearInterval(timer);	
		}
		b=2;
		if($(document).scrollTop()>$(".header").height()){
			$(".fh_top").css({opacity:1});	
			$(".fh_top").show();
		}else{
			$(".fh_top").css({opacity:0});	
			$(".fh_top").hide();
		}	
	});
	//var currentSelectedMenu;
    if(typeof window.currentSelectedMenu=="undefined"){window.currentSelectedMenu=1}
    $(".nav_list_v2 li").removeClass("on");
    if(window.currentSelectedMenu>0){
        $(".nav_list_v2 li").eq(window.currentSelectedMenu-1).addClass("on");
    }

	function MoveTop(target){
		clearInterval(timer);
		var iSpeed=iCur=0;
		timer=setInterval(function(){
			iCur=document.documentElement.scrollTop||document.body.scrollTop;
			iSpeed=(target-iCur)/8;	
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(iCur==target){
				clearInterval(timer);	
			}else{
				document.documentElement.scrollTop=document.body.scrollTop=iCur+iSpeed;	
			}
			
			b=1;
		},30);	
	};	
})