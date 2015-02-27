var Common = {};
// 弹层遮罩
Common.LightBox = {
    element : null,
    init : function () {
        var a = "100%",
            b = "fixed";
        $.browser.msie && "6.0" == $.browser.version && !$.support.style && (a = document.documentElement.clientHeight + "px", b = "absolute");
        var c;
        $("#lightbox").remove();
        c = $.browser.msie ? '<div id="lightbox" style="left:0;  background:#F5F5F5; top:0; width:100%; height:' + a + ";filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100); filter:alpha(opacity="+ this.opacity +"); -moz-opacity:"+ this.opacity/100 +"; opacity:"+ this.opacity/100 +";zoom:1; position:" + b + '; z-index:9; " ><iframe src="" marginwidth="0" framespacing="0" marginheight="0" frameborder="0" width="100%" height="100%" style="left:0; background:rgb(255,255,255); top:0; width:100%; filter:alpha(opacity=0); -moz-opacity: 0; opacity: 0;zoom:1; position:absolute; z-index: 9"></iframe></div>' : '<div id="lightbox" style="left:0; background:#F5F5F5; top:0; width:100%; height:' + a + "; filter:alpha(opacity="+ this.opacity +"); -moz-opacity: "+ this.opacity/100 +"; opacity: "+ this.opacity/100 +";zoom:1; position:" + b + '; z-index:9; " ></div>',
            this.element = $(c).appendTo(document.body),
            $("#_lightbox").remove(),
            this.count =  0
    },
    getZIndex : function () {
        return parseInt(this.element.css("zIndex")) || -1
    },
    hide : function () {
        var a = this;
        a.element && ($.browser.msie && Number($.browser.version) < 9 ? setTimeout(function () {
            a.count--,
                (a.count <= 0 || a.element.css("zIndex") <= 9) && a.element.hide()
        }, 200) : (a.count--, (a.count <= 0 || a.element.css("zIndex") <= 9) && (a.element.hide(), $.browser.msie || $("div.SecEditCtrl").css("visibility", "visible"))))
    },
    resetZIndex : function () {
        return this.setZIndex("9")
    },
    setZIndex : function (a) {
        return this.element || this.init(),
            this.element.css("zIndex", a || this.element.css("zIndex"))
    },
    show : function (opacity) {
        if(opacity!=undefined){
            this.opacity =opacity
        }else{
            this.opacity=100;
        }
        return  this.init(),       //this.element ||
            $.browser.msie && "6.0" == $.browser.version && !$.support.style && this.element.css("height", CU.getDocumentPracticalHeight() + "px"),
            this.element.show(),
            this.setZIndex("9"),
            this.count < 0 && (this.count = 0),
            this.count++,
            $.browser.msie || $("div.SecEditCtrl").each(function () {
            $(this).parents("div.bu-pop") || $(this).css("visibility", "hidden")
        }),
            this
    },
    zIndexUp : function () {
        this.element.css("zIndex", "+=2");
        this.element.css("display", "block");
    },
    zIndexDown : function () {
        this.element.css("zIndex", "-=2")
    }
};

// 设置居中
Common.setCenter = function(obj){
    var positionFromTop = ($(window).height()-obj.height())/2;
    var positionFromLeft = ($(window).width()-obj.width())/2;
    var top  = $(window).scrollTop() + positionFromTop;
    var left = $(window).scrollLeft() + positionFromLeft;
    obj.css({
        top: top + 'px',
        left: left + 'px'
    });
};

Common.showloading = function(){
    this.loading = (this.loading || $('<div style="position:absolute; top:45%; left:36%;z-index:18; display:none" id="ctrollerLoading"><img src="http://img00.allinmd.cn/xubox_loading0.gif" alt="loading" /></div>').appendTo(document.body)).show();
    Common.setCenter($("#ctrollerLoading"));
    if($("#lightbox").is(":visible")){
        Common.LightBox.zIndexUp();
    }else{
        Common.LightBox.show(40);
    }

};

Common.hideloading = function(){
    this.loading.hide();
    if(Common.LightBox.getZIndex()==9){
        Common.LightBox.hide();
    }else{
        Common.LightBox.zIndexDown() ;
        //Common.LightBox.element.hide();
    }


};

// TODO 设置每页顶部用户状态信息


// 取消冒泡
Common.stopBubble = function (a) {
    a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
};

Common.ajaxDataHandle = function(data){
    if(data.responseObject.responseStatus){
        return data.responseObject;
    }else{
        return false;
    }
};
Common.addHtml=function(html){
	Common.LightBox.show();
	$("#lightbox").css({
		"background-color":"#000",
		"opacity":"0.5"	
	});
	$("<div class='lightbox-container'></div>").appendTo($("body"));
	$(".lightbox-container").css({
		zIndex:10,
		position:"absolute"
	});
	$(".lightbox-container").html(html);	
	Common.setCenter($(".lightbox-container"));
	$(window).bind("scroll",function(){
		Common.setCenter($(".lightbox-container"));	
		$(".tip-yellow").remove();
	});
	$(".close").on("click",function(){
		Common.closeShade();
	});
};
Common.closeShade=function(){
	Common.LightBox.hide();
	$(".tip-yellow").remove();
	$(".lightbox-container").remove();	
}
/*


 jQuery.validator.addMethod("chrnum", function(value, element) {
 var chrnum = /^([a-zA-Z0-9]+)$/;
 return this.optional(element) || (chrnum.test(value));
 }*/
// 姓名，中英文较验
jQuery.validator.addMethod("isChinese", function(value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5]{1,25}|[A-Za-z_]{1,50}$/.test(value);
}, "请输入中文");

// 身份证较验
jQuery.validator.addMethod("zhengjian", function(value, element) {
    /*var zhengjianType = $("#certificatesId").val();
    if(zhengjianType == "1"){	//若为身份证*/
        return this.optional(element) || /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
  /*  }else{
        return this.optional(element) || /^[A-Za-z0-9\u4e00-\u9fa5]{1,50}$/.test(value);
    }*/
}, "你还没填写证件号码。");

jQuery.validator.addMethod("chrnum", function(value, element) {
    var chrnum = /^([\@A-Za-z0-9\!\#\$\%\^\&\*\.\~\,\.\/\?\>\<\:\;\+\-\_\|\'\"\\\=\`\(\)\{\}\[\]]+)$/;
    return this.optional(element) || (chrnum.test(value));
}, "6-20位，字母、数字或符号的组合。");

jQuery.validator.addMethod("allinEmail", function(value, element) {
    var allinEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(element) || (allinEmail.test(value));
}, "不像是有效的电子邮箱");
//手机验证
jQuery.validator.addMethod("mobile", function(value, element) {
    var mobile = /^1[3|4|5|8][0-9]\d{8}$/;
    return this.optional(element) || (mobile.test(value));
}, "手机号输入不正确");
// 邮政编码
jQuery.validator.addMethod("zip", function(value, element) {
    var zip = /^[0-9]{6}$/;
    return this.optional(element) || (zip.test(value));
}, "输入正确的邮政编码");



jQuery.validator.addMethod("emailOrPhone", function(value, element) {
    var phone = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
    var email = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    return this.optional(element) || (phone.test(value)) || (email.test(value));
}, "手机或者邮箱");


jQuery.validator.addMethod("requiredcertificate", function(value, element) {

    return $("input[name=certificate]").val()=="选择证件类型";
}, "请选择证件类型");


document.domain = "allinmd.cn";

//TODO:
var user = {
	//引导弹层
	guideLayer:function(status){
		var btn='login_mask';
		var img='login.png';
		if(status=='renzheng'){
			btn='renzheng_mask';
			img='ysrz.png';	
		}
		var html='<div class="mask_body">'+
		'<div class="mask_top"></div>'+
		'<div class="mask_bottom"></div>'+
		'<div class="mask_content">'+
			'<div class="mask_text"><img src="http://img00.allinmd.cn/mask/text.png" /></div>'+
			'<div class="mask_text_but"><a href="javascript:;"><img class="'+btn+'" src="http://img00.allinmd.cn/mask/'+img+'" /></a>'+
			'<div class="mask_text_hand"><img src="http://img00.allinmd.cn/mask/hand.png" /></div></div>'+
		'</div>'+
		'</div>';
		return html;	
	},
    domain:{
        static:"http://www.allinmd.cn/html/",
        dynamic:"http://www.allinmd.cn/call/"
    },
    isLoginStatus:false,
    isRenZhengStatus:false,
    privJson:null,
    isRunning:false,
    static:{
        "checkExist":"",
        "getLoginStatus":"",
        "login":"passport/login.html",	//登录
        "regist":"passport/regist.html",//登录
        "renzheng":"passport/renzheng.html",
        "resetPwd":"passport/resetPwd.html",
        "afterReset":"passport/afterReset.html",
        "tongyi":"passport/tongyi.html",	 // 统一登录
        "lianhe":"passport/lianhe.html",
        "wanshan":"passport/wanshan.html",
        "bangding":"passport/bangding.html"
    },
    dynamic:{
        checkUserStatus:"customer/unite/checkSession/",	// 获取用户状态
        loginSubmit:"passport/securitycheck",	// 登录提交
        registSubmit:"customer/unite/userRegist/",	//	注册提交
        caosLoginSubmit:"passport/securitycheck",	//	联合登录提交
        checkEmail:"customer/unite/validateEmail/",		//	检测邮箱是否存在
        renzhengSubmit:"customer/auth/createAuth/",		//	认证提交
        fileUpload:"customer/auth/uploadImg/",		//	文件上传
        userHeadUpload:"customer/index/uploadImg/",		//	文件上传
        getRenZheng:"customer/auth/getAuthBycustomerId/",
        getUserInfo:"customer/unite/getCustomerUnite/",
        updateUserBaseInfo:"customer/baseinfo/updateBaseInfo/",
        randomCode:"randomValidCode/create/",
        caosRegist:"customer/unite/userCaosRegist/",
        userValidAndBind:"web/user/userValidAndBind/"	 //唯医与caos用户绑定
    },
    getUrl:function(type,url){
        var t = this;
        return t.domain[type] + t[type][url];
    },
    callback:null,
    $container:null, // 容器
    //
    isNeedRenZheng:false,
    // 检测登录状态
    /**
     * callback
     * type
     * */
    checkStatus : function(){
        var t = this;
        // Common.showloading();
        $.ajax({
            url:t.getUrl("dynamic","checkUserStatus"),
            dataType:"json",
            type:"post",
            success:function(result){
                // Common.hideloading();
                if(result.responseObject.responseStatus){//已登录
                    t.loginSuccess();
                }else{
					if(t.options.isGuide){//需要弹出引导层
						$(document).scrollTop(0);
						$(".mask_body").remove();
						$(t.guideLayer('login')).appendTo($("body"));
						$("body").css("overflow","hidden");
						$(".login_mask").live("click",function(){
							t.showLoginPop();
						});
					}else{//不需要
                  	  t.showLoginPop();
					}
                }
            }
        });
    },
    //创建弹层所需DOM结构
    showContiner:function(){
        var t = this;
        if($(".lightbox-popup-modal").length==0)
        {
            $("<div class='lightbox-right-top'>" +
                    "<div class='lightbox-close'></div>" +
                    "<div class='lightbox-btns'></div>" +
                    "</div>" +
                    "<div class='lightbox-container'></div>"
            ).appendTo($("body"));

            t.$container = $(".lightbox-container").css({
                zIndex:10,
                position:"absolute"
            });
            t.$window = $(window);
        }
        t.$rightTop = $(".lightbox-right-top");
        t.$rightTop.find(".lightbox-close").on('click', function() {
            t.end();
			if(t.options.isGuide){
				$("body").css("overflow","hidden");	
			}
            return false;
        });
        //t.$window.on('resize', $.proxy(t.sizeOverlay, t));
        $('select, object, embed').css({
            visibility: "hidden"
        });

    },
    setCookie:function(){

    },
    getCookie:function(){

    },
    //登录弹窗
    showLoginPop:function(){
        var t = this;
        t.showContiner();
        t.loadHtml(t.getUrl("static","login"),function(){
            t.bindLogin();
            t.bindActiveInput();
        });

    },
    //登录事件
    bindLogin:function(){
        var t = this;
        t.appendRegistBtn();
        t.validateLogin();
        t.$container.find(".login_but").on("click",function(){
            $("#popLoginForm").submit();
        });
        // 忘记密码
        t.$container.find(".forgot").on("click",function(){
            t.changeResetPwd();
        });
    },
    //登录较验
    validateLogin:function(){
        var t = this;
        $("#popLoginForm").validate({
            submitHandler : function() {
                t.loginSubmit();
            },
            rules : {
                "email" : {
                    "required" : true,
                    "emailOrPhone" : true,
                    "rangelength" : [ 1, 50 ]
                },
                "passwd" : {
                    "required" : true,
                    "rangelength" : [ 6, 20 ]
                    //"chrnum":true
                    /*",remote": {
                     "url":t.getUrl("dynamic","loginSubmit"),
                     "type":"POST",
                     "data":{ paramJson: function(){
                     return "{ email:'"+  t.$container.find("[name=email]").val()+"',passwd:'" +t.$container.find("[name=passwd]").val() + "'}"
                     }
                     }
                     } */
                }
            },
            messages : {
                "email" : {
                    "required" : "请填写邮箱或已验证手机。",
                    "emailOrPhone" : "请输入正确的手机号或邮箱。",
                    "rangelength":"最多可输入50个字符。"
                },
                "passwd" : {
                    "required" : "请填写密码。",
                    "rangelength" : "密码长度在{0}-{1}位！",
                    "remote" : "不正确的账号或密码,请重新输入！"
                }
            },
            errorPlacement:function(error,element){
                var p = $(element).parents(".inputParent");
                var con = p.find(".l_warning");
                con.append("<span></span>");
                con.find("span").html(error);
                p.find(".ok").hide();
                p.find(".jinggao").hide();
                p.find(".kuang").addClass("input_error");
                p.find(".jinggao").show();
                $(element).parent().parent().addClass("input_error");

            },
            success:function(element){
                var p = $(element).parents(".inputParent");
                p.find(".jinggao").hide();
                p.find(".ok").show();
                p.find(".kuang").removeClass("input_error");
                $(element).parents(".input_error").removeClass("input_error");
                $(element).parent().parent().empty();

            },
            onkeyup:false

        });
    },
    //注册弹窗
    showRegistPop:function(){
        var t = this;
        t.showContiner();
        t.loadHtml(t.getUrl("static", "regist"),function(){
            t.$container.find(".reg_detail").addClass("normal");
            t.bindRegist();
            t.bindActiveInput();
        });

    },
    // 注册绑定
    bindRegist:function(){
        var t = this;
        t.appendLoginBtn();

        // new


        $('input, textarea').placeholder();


        // 换一个验证码
        $("#changeValidCode").click(
            function() {
                $("#validCodeImg").attr("src",
                        "http://www.allinmd.cn/call/randomValidCode/create/?_=" + Math.random());
                $("#validCode").val("");
            });

        var counting = false;
        $("#getmesg").on("click",getmsgHandle);
        // 邮箱失焦，判断显示哪个验证码
        $("#popEmail").on("blur",function(){
            var type =  checkAccountType($(this).val());
            if(type=="email"){
                $("#phoneYZM").hide();
                $("#emailYZM").show();
                validateReg.rules.validCode1.required=true;
                validateReg.rules.validCode2.required=false;
            }
            if(type=="mobile"){
                $("#emailYZM").hide();
                $("#phoneYZM").show();
                $("#validCode2").val("");
                if(!counting){
                    $("#getmesg .btn").removeClass("disabled");
                    $("#getmesg").off("click");
                    $("#getmesg").on("click",getmsgHandle);
                }


                validateReg.rules.validCode1.required=false;
                validateReg.rules.validCode2.required=true;
            }

            $("#registForm").validate(validateReg);
        });




        //获取短信按钮点击事件处理方法
        function getmsgHandle() {

            $("#getmesg").off("click");
            $("#getmesg .btn").addClass("disabled");
            sendSms(1);
            countdownGetMsg();
        }

        //倒计时
        function countdownGetMsg(){
            counting = true;
            var t= 60;
            $("#getmesg .btn").text(t-- + "秒后重新获取");
            var a = setInterval(function(){
                if(t>0){
                    $("#getmesg .btn").text(--t + "秒后重新获取");
                }else{
                    clearInterval(a);
                    $("#getmesg .btn").removeClass("disabled");
                    $("#getmesg .btn").text("获取短信验证码");
                    $("#getmesg").on("click",getmsgHandle);
                    counting = false;
                }
            },1000)
        }

        //发送短信
        function sendSms(){
            var account=$("#popEmail").val();
            customer.execute("sendSms", {siteId:'1',typeId:2,account:account});
            $("#validCode").val("");
        }

        //初始随机验证码
        $("#validCodeImg").attr("src","http://www.allinmd.cn/call/randomValidCode/create/?_=" + Math.random());


        $("#caosLogin").click(function(){
            user.showLianHePop({callback:function(){
                window.location.href = 'http://www.allinmd.cn/call/customer/index/input/';
            },"operateType":"share"});
        });

        // 提交
        $("#popImageSubmit").on("click",function(){
            $("#registForm").submit();
        });

        var validateReg={
            submitHandler : function() {
                Register.submit();
            },
            rules : {
                "email" : {
                    "required" : true,
                    "emailOrPhone" : true,
                    "rangelength": [ 1, 50 ],
                    "remote" : {
                        "url" : "http://www.allinmd.cn/call/customer/unite/isValidateAccount/",
                        "type" : "POST",
                        "data" : { "account" : function() { return $("#popEmail").val();} }
                    }
                },
                "customer.passwd" : {
                    "required" : true,
                    "rangelength":[6,20],
                    "chrnum":true
                },
                "passwordRepeat" : {
                    "required" : true,
                    "equalTo" : "#popCustomerPassword"
                },
                /*	"customer.nickname":{
                 "required" : true,
                 "rangelength":[2,15]
                 },*/
                "validCode1" : {
                    "required" : true,
                    "remote":{
                        "url": "http://www.allinmd.cn/call/randomValidCode/validCode/",
                        "type" : "POST",
                        "xhrFields": {withCredentials: true},
                        "data": { "validCode" : function() {
                                    return $("#validCode1").val();
                                    },
                                  "type":"customer_verification"
                        }
                    }
                },
                "validCode2" : {
                    "required" : true,
                    "remote":{
                        "url": "http://www.allinmd.cn/call/customer/verification/validSmsValue/",
                        "type" : "POST",
                        "xhrFields": {withCredentials: true},
                        "data": { "validCode" : function() {
                            return $("#validCode2").val();
                        },"type":"customer_verification"
                        ,"mobile" : function() {
                            return $("#popEmail").val();
                        }
                    }
                    }
                }
                /*"agree" : {
                 "required" : true
                 }*/
            },
            messages : {
                "email" : {
                    "required" : "请填写手机号或邮箱。",
                    "emailOrPhone" : "请填写正确的手机号或邮箱。",
                    "rangelength":"最多可输入50个字符。",
                    "remote":function() {
                        var type =  checkAccountType($.trim($("#popEmail").val()));
                        if(type!="email"){
                            $("#getmesg").off("click");
                        }
                        return "此" + (type== "email" ? "邮箱" : "手机") + "已被注册。<span>想要 <a href='/call/customer/unite/login/' >登录</a> 或 " +
                            "<a href='/html/passport/reset_password_account.html' >恢复密码</a> 吗？</span>";
                    }
                },
                "customer.passwd" : {
                    "required" : "请填写密码。",
                    "rangelength":"密码长度请保持在{0}-{1}位！"
                },
                "passwordRepeat" : {
                    "required":"请再次填写密码。",
                    "equalTo":"两次输入密码不一致！"
                },
                "customer.nickname":{
                    "required":"我们该如何称呼你!",
                    "rangelength":"昵称请在{0}-{1}个字符之间！"
                },
                "validCode1" : {
                    "required" : "请填写验证码。",
                    "remote": "错误的验证码！"
                },
                "validCode2" : {
                    "required" : "请填写短信验证码。",
                    "remote": "错误的验证码！"
                },
                "agree" : "您没有同意使用协议！"
            },
            errorPlacement:function(error,element){
                var p = $(element).parents(".inputParent");
                var con = p.find(".l_warning");
                con.empty();
                con.append("<span></span>");
                con.find("span").html(error);
                p.find(".ok").hide();
                p.find(".jinggao").hide();
                p.find(".kuang").addClass("input_error");
                p.find(".jinggao").show();
                $(element).parent().parent().addClass("input_error");

            },
            success:function(element){
                var p = $(element).parents(".inputParent");
                p.find(".jinggao").hide();
                p.find(".ok").show();
                p.find(".kuang").removeClass("input_error");
                $(element).parents(".input_error").removeClass("input_error");
                $(element).parent().parent().empty();

            },
             onkeyup:false

        };
        // 较验
        $("#registForm").validate(validateReg);

        var Register = {
            form:'',
            submit:function(){
                //var params = form.serialize();
                var params={};
                var data={};
                var account=$("#popEmail").val();
                data.account= $.trim(account);
                var type =  checkAccountType(account);
                data.type=type;
                data.passwd=$.trim($("#popCustomerPassword").val());
                data.ref=$.trim($("#ref").val());
                params.paramJson= $.toJSON(data);
                Common.showloading();
                $.ajax({
                    type:'POST',
                    url: "http://www.allinmd.cn/call/web/user/userRegist/",
                    cache: false,
                    data:params,
                    dataType:'json',
                    success: function(rep){
                        if(rep){
                            /*if(rep.responseObject.responseStatus){
                                var customerId=rep.responseObject.responsePk;
                                generatePersonPage(customerId);
                                setTimeout(function(){
                                    setTimeout(function(){Common.hideloading();},6000);
                                    //window.location.href = 'http://www.allinmd.cn/call/'+rep.responseObject.responseMessage;
                                    window.location.href = 'http://www.allinmd.cn/'+pageurl.urlList.toRegistRecommendTag.url;
                                },2000);

                            }else{
                                //alert(rep.responseObject.responseMessage);
                                alert("注册失败，请稍后重试");
                                Common.hideloading();
                            }*/
                                var customerId = rep.responseObject.responsePk;

                                if(customerId && customerId!=""){
                                    $.ajax({
                                        type:'GET',
                                        url: "http://www.allinmd.cn/call/customer/baseinfo/generatePersonPage/?customerId="+customerId,
                                        cache: false,
                                        dataType:'json',
                                        async:false,
                                        success: function(rep){

                                        }
                                    });
                                }

                            loadLoginUserBaseInfo();
                            loadCustomerPic();

                            Common.hideloading();
                            var result = data.responseObject;
                                /*if(result.responseStatus){
                                window.location.href = 'http://www.allinmd.cn/call/'+data.responseMessage;
                            } */
                            if(t.isNeedRenZheng){
                                t.changeRenZheng();
                            }else{
                                t.end();
                            }
                        }else{
                            alert("注册失败，请稍后重试");
                            Common.hideloading();
                        }


                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                        Common.hideloading();
                        // 通常 textStatus 和 errorThrown 之中
                        // 只有一个会包含信息
                        //this; // 调用本次AJAX请求时传递的options参数
                        // alert(textStatus + "   " +errorThrown);
                        alert("注册失败！");
                    }
                });
            }

        }




        // new END
        /*
        var form = $("#registForm");
        // 校验
        t.$container.find("#validCodeImg").attr("src",t.getUrl("dynamic","randomCode") + "?_=" + Math.random());
        t.$container.find(".shuaxin").on("click",function(){
            t.$container.find("#validCodeImg").attr("src",t.getUrl("dynamic","randomCode") + "?_=" + Math.random());
        }) ;
        $("#registForm").validate({
            submitHandler : function() {
                var param = {
                    email:form.find("[name=email]").val(),
                    passwd:form.find("[name=passwd]").val()*//* ,
                    nickname:form.find("[name=nickname]").val()*//*
                };
                var data = {
                    "paramJson":$.toJSON(param)
                };
                Common.showloading();
                $.ajax({
                    url: t.getUrl("dynamic","registSubmit"),
                    cache: false,
                    data:data,
                    type:"POST",

                    dataType:'json',
                    success: function(data){  // 注册信息返回
                        Common.hideloading();
                        var result = data.responseObject;
                        *//*if(result.responseStatus){
                         window.location.href = 'http://www.allinmd.cn/call/'+data.responseMessage;
                         } *//*
                        if(t.isNeedRenZheng){
                            t.changeRenZheng();
                        }else{
                            t.end();
                        }
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                        // 通常 textStatus 和 errorThrown 之中
                        // 只有一个会包含信息
                        //this; // 调用本次AJAX请求时传递的options参数
                        alert(textStatus + "   " +errorThrown);
                    }
                });
                return false;
            },
            rules : {
                "email" : {
                    "required" : true,
                    "email" : true,
                    "rangelength":[1,50],
                    "remote": {
                        "url":t.getUrl("dynamic", "checkEmail"),
                        "type":"POST",
                        "data":{paramJson: function(){
                            return  '{"email" :"' + t.$container.find("[name=email]").val() + '"}';
                        }
                        }
                    }
                },
                "passwd" : {
                    "required" : true,
                    "rangelength":[6,20],
                    "chrnum":true
                },
                "passwordRepeat" : {
                    "required" : true,
                    "equalTo" : "#customerPassword"
                },
                *//*"nickname":{
                    "required" : true,
                    "rangelength":[2,15]
                },*//*
                "validCode" : {
                    "required" : true,
                    "remote":{
                        "url": "http://www.allinmd.cn/call/randomValidCodeAction!validCode",
                        "type" : "POST",
                        "data": { "validCode" : function() { return $("#validCode").val(); } }
                    }
                },
                "agree" : {
                    "required" : true
                }
            },
            messages : {
                "email" : {
                    "required" : "你的邮件地址是什么？",
                    "email" : "不像是有效的电子邮箱。",
                    "rangelength":"太长了！我们最多能记住50个字。",
                    "remote" : "此邮件地址已被注册。"
                },
                "passwd" : {
                    "required" : "你还没填写密码。",
                    "rangelength":"密码长度请保持在{0}-{1}位！"
                },
                "passwordRepeat" : {
                    "required":"确认密码必须输入！",
                    "equalTo":"两次输入密码不一致！"
                },
                "nickname":{
                    "required":"我们该如何称呼你!",
                    "rangelength":"昵称请在{0}-{1}个字符之间！"
                },
                "validCode" : {
                    "required" : "验证码必须输入！",
                    "remote": "验证码错误！"
                },
                "agree" : "您没有同意使用协议！"
            },
            showErrors : poshyTipShowErrors,
            hideErrors : poshyTipHideErrors,
            errorClass : "tip-yellow"
        });

        t.$container.find(".W_checkbox").on("click",function(e){
            Common.stopBubble(e);
        })
*/
    },
    showRenZhengType2Pop:function(){
        var t = this;
        t.showContiner();
        t.loadHtml(t.getUrl("static", "renzheng"),function(){
            t.$container.find(".login_detail_ty").addClass("type2");
            t.bindRenZheng();
            t.bindActiveInput();
        });
    },
    //两步式注册弹窗
    showRegistType2Pop:function(){
        var t = this;
        t.isNeedRenZheng = true;
        t.showContiner();
        t.loadHtml(t.getUrl("static", "regist"),function(){
            t.$container.find(".reg_detail").addClass("type2");
            t.bindRegist();
            t.bindActiveInput();
        });

    },
    //认证弹窗
    showRenZhengPop:function(options){
        var t = this;
        if(options){
            t.options = options;
        }
        t.showContiner();
        t.loadHtml(t.getUrl("static", "renzheng"), function(){
            t.$container.find(".login_detail_ty").addClass("normal");
            t.bindRenZheng();
            
            
          //回显认证信息
            if(t.options.firstName && t.options.firstName!=""){
         	   $("input[name=firstName]").val(t.options.firstName) ;
            }
            if(t.options.lastName && t.options.lastName!=""){
         	   $("input[name=lastName]").val(t.options.lastName) ;
            }
            t.bindActiveInput();
        });
    },
    // 绑定认证
    bindRenZheng:function(){
        var t = this;
        t.setTopRight();
        $(".poshytip").poshytip();       
        bind1('http://img00.allinmd.cn/login_v2/sc_zp.jpg');
        bind2('http://img00.allinmd.cn/login_v2/shangchuan2.jpg');
        loadCertificate();
        /*

        t.$container.find("#certificatesCodeUpload").on("click",function(e){
            PicUploader.start({callback:function(img){
                var el = $("#certificatesCodeUpload");
                $("#certificatesCodeUpload").attr({"src":img,"onload":"changeSize(this,165,100)"});
                $("#certificatesPath").val(img);
                $("#qualificationPath").val(img);
                Common.LightBox.zIndexDown();
            },
                url:"fileUpload"    //  弹窗中的上传路径，在user对象中定义

            });
            Common.LightBox.zIndexUp();
        });
        t.$container.find("#qualificationPathUpload").on("click",function(e){
            PicUploader.start({callback:function(img){
                var el = $("#qualificationPathUpload");
                $("#qualificationPathUpload").attr({"src":img,"onload":"changeSize(this,165,100)"});

                Common.LightBox.zIndexDown();
            },
                url:"fileUpload"    //  弹窗中的上传路径，在user对象中定义
            });
            Common.LightBox.zIndexUp();
        });*/




        var form = t.$container.find("form");
        // 较验
        form.validate({
            submitHandler : function() {
                var param;
                // 判断图片是否保存成功
                var qualificationPath = t.$container.find("#qualificationPath");
                var certificatesPath = t.$container.find("#certificatesPath");
                var attTypes=$("input[name=certificate]");
            	var attType=1;
            	for(var i=0;i<attTypes.length;i++){
            		var at=attTypes[i];
            		if(at.checked || at.checked==1){
            			attType=at.title;
            			break;
            		}
            	}
                if(certificatesPath.val()=="" && qualificationPath.val()==""){
                    t.showError("请上传证件照");	// 上传图片错误提示
                    return false;
                }else{
                    param = {
                        lastName:t.$container.find("input[name=lastName]").val(),
                        firstName:t.$container.find("input[name=firstName]").val(),
                        attType:attType,
                        attPath:t.$container.find("input[name=certificatesPath]").val(),
                        attCode:t.$container.find("input[name=attCode]").val()
                    };
                }

                var data = {paramJson:$.toJSON(param)};
                Common.showloading();
                $.ajax({
                    url: t.getUrl("dynamic","renzhengSubmit"),
                    cache: false,
                    data:data,
                    dataType:'json',
                    type:"POST",
                    success: function(data){
                        // TODO: 认证成功后应当作何处理
                        Common.hideloading();
                        if(data.responseObject.responseStatus){
                            t.end();
                            t.isRenZhengStatus = true;
                            t.privCheckSuccess();
                        }else{
                        	if(data.responseObject.responseMessage){
                        		alert(rst.responseMessage);
                        	}else{
                        		alert("提交认证失败，请稍后重试");
                        	}
                        }
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                        // 通常 textStatus 和 errorThrown 之中
                        // 只有一个会包含信息
                        //this; // 调用本次AJAX请求时传递的options参数
                        alert(textStatus + "   " +errorThrown);
                    }
                });
            },
            rules : {
                "lastName" : {
                    "required" : true,
                    "rangelength":[1,50],
                    "isChinese":true
                },
                "firstName" : {
                    "required" : true,
                    "rangelength":[1,50],
                    "isChinese":true
                },
//                "certificatesCode":{
//                    //"required" : true,
//                    "zhengjian":true
//                },
                "attCode":{
                    "required" : true,
                    "rangelength":[1,50],
                    "chrnum":true
                }

            },
            messages : {
                "lastName" : {
                    "required" : "您贵姓？",
                    "rangelength" : "您贵姓？",
                    "isChinese":"您贵姓？"
                },
                "firstName" : {
                    "required" : "你的大名是？",
                    "rangelength":"你的大名是？",
                    "isChinese":"你的大名是？"
                },
                "certificatesCode":{
                    //"required" : "请填写正确的身份证件号。",
                    "zhengjian":"请填写正确的身份证件号。"
                },
                "attCode":{
                    "required" : "请填写正确的证件号码。",
                    "rangelength":"请填写正确的证件号码。",
                    "chrnum":"请填写正确的证件号码。"
                }
            },
            errorPlacement:function(error,element){
                var p = $(element).parents(".inputParent");
                var con = p.find(".l_warning");
                con.append("<span></span>");
                con.find("span").html(error);
                p.find(".ok").hide();
                p.find(".jinggao").hide();
                p.find(".kuang").addClass("input_error");
                p.find(".jinggao").show();
                $(element).parent().parent().addClass("input_error");

            },
            success:function(element){
                var p = $(element).parents(".inputParent");
                p.find(".jinggao").hide();
                p.find(".ok").show();
                p.find(".kuang").removeClass("input_error");
                $(element).parents(".input_error").removeClass("input_error");
                $(element).parent().parent().empty();

            },
            onkeyup:false
        });

        // 提交
        t.$container.find(".submit_but").on("click",function(){
            $("#certificate").attr("disabled",false);
            form.submit();
            $("#certificate").attr("disabled",true);
        });

        // 下拉框效果
        $(".select_box").click(function (event) {
            event.stopPropagation();
            $(this).find(".option").toggle();
            $(this).parent().siblings().find(".option").hide();
        });
        $(document).click(function (event) {
            var eo = $(event.target);
            if ($(".select_box").is(":visible") && eo.attr("class") != "option" &&
                !eo.parent(".option").length)
                $('.option').hide();
        });
        /*赋值给文本框*/
        $(".option a").each(function(index,obj){
            $(this).click(function () {
                var value = $(this).text();

                $(this).parent().siblings(".select_txt").val(value)
                    .siblings(".select_value").val(index+1);
            });
        });
        // 下拉框效果 end
        
      //加载医师证件选项
        function loadCertificate(){
        	var param={roleId:6,typeId:1}
            $.ajax({
                type: 'POST',
                url: commdata.urlList.getDataRoleConfigs.url,
                data:{paramJson:$.toJSON(param)},
                async: false,
                dataType: "json",
                timeout: 10000,
                success: function callback(rep) {
                	var html="";
                    if (rep && rep.responseObject && rep.responseObject.responseStatus) {
                    	var data=rep.responseObject.responseMessage;
                    	if(data && data.length>1){
                    		$.each(data,function(index,i){
                    			if(i.refValue=="身份证"){
                    				html+='<div ><input type="radio" checked="checked" name="certificate" title="'+i.refId+'"/>'+i.refValue+'</div>';
                    			}else{
                    				html+='<div ><input type="radio" name="certificate" title="'+i.refId+'"/>'+i.refValue+'</div>';
                    			}
                    			
                    		});
                    	}           	
                    }
                    html+='<div class="clear"></div>';
                    $(".radio_input .rz-num-type").html(html);

                }
            });
        }
    },
    // 联合登录
    showLianHePop:function(options){
        var t = this;
        if(options){
            t.options = options;
        }
        t.showContiner();
        t.loadHtml(t.getUrl("static", "lianhe"), function(){

            t.bindCAOS();
            t.bindActiveInput();
        });
    },
    // CAOS登录绑定
    bindCAOS:function(){
        var t = this;
        t.setTopRight();
        t.$container.find("form").validate({
            submitHandler : function() {
                t.caosLoginSubmit();
            },
            rules : {
                "email" : {
                    "required" : true,
                    "emailOrPhone" : true,
                    "rangelength" : [ 1, 50 ]
                },
                "passwd" : {
                    "required" : true,
                    "rangelength" : [ 6, 20 ]
                }
            },
            messages : {
                "email" : {
                    "required" : "请填写你在CAOS的用户名",
                    "emailOrPhone" : "请输入正确的手机号或邮箱。",
                    "rangelength":"邮件地址不长于50位！"
                },
                "passwd" : {
                    "required" : "请填写你在CAOS的密码。",
                    "rangelength" : "密码长度在{0}-{1}位！"
                }
            },
            errorPlacement:function(error,element){
                var p = $(element).parents(".inputParent");
                var con = p.find(".l_warning");
                con.append("<span></span>");
                con.find("span").html(error);
                p.find(".ok").hide();
                p.find(".jinggao").hide();
                p.find(".kuang").addClass("input_error");
                p.find(".jinggao").show();
                $(element).parent().parent().addClass("input_error");

            },
            success:function(element){
                var p = $(element).parents(".inputParent");
                p.find(".jinggao").hide();
                p.find(".ok").show();
                p.find(".kuang").removeClass("input_error");
                $(element).parents(".input_error").removeClass("input_error");
                $(element).parent().parent().empty();

            },
            onkeyup:false
        });

        t.$container.find(".login_but").on("click",function(){
            t.$container.find("form").submit();
        });
    },
    // 联合登录提交
    caosLoginSubmit:function(){
        var t = this;
//        var param = {
//            email:t.$container.find("[name=email]").val(),
//            passwd:t.$container.find("[name=passwd]").val()
//        };
//        var data = { "paramJson": $.toJSON(param)};
        var data={};
        var rememberMe=$("#rememberMe")!=null?$("#rememberMe").attr("checked"):1;
		var password=t.$container.find("[name=passwd]").val();
		var email=t.$container.find("[name=email]").val();
		var type = checkAccountType(email);
		data.j_username="caos;"+email+";"+password+";"+type;
		data.j_password=password;
		data.rememberMe=(rememberMe=='checked' || rememberMe=='1' || rememberMe=='true')?true:false;
        Common.showloading();
        $.ajax({
            url:t.getUrl("dynamic","caosLoginSubmit"),
            type:"POST",
            data:data,
            dataType:"json",
            success:function(data){
                Common.hideloading();
                var result = data.responseObject;
                var resStatus=result.responseStatus;
                var resCode=result.responseCode;
                var resMessage=result.responseMessage;
                if(!resStatus && resCode=="0A1004"){ //完善资料
                	t.responseMessage = resMessage;
                	t.caosCustomerId = result.responsePk;
                	t.changeWanShanPop(email);                	
                }else if(!resStatus){         // 登录失败
                	t.showError("不正确的账号或密码,请重新输入！");  //resMessage
                }else{	
                	//登录成功

                    t.end();
                	t.privCheckSuccess();
                	if(resMessage!=null && resMessage!="" && resCode=="0B0004"){
						//window.top.location.href = sufix; 
					}else{
						//window.top.location.href = 'http://www.allinmd.cn/call/customer/index/input/?_=' + Math.random();
					}
                    
                }
                
//                if(result){
//                    if(result.responseStatus){
//                        if(result.responseMessage && result.responseMessage.refCustomerId && result.responseMessage.refCustomerId!=""){	// 若无相关用户ID，则弹出完善资料界面
//                            t.privCheckSuccess();
//                        }else{
//                            t.responseMessage = result.responseMessage;
//                            t.responseMessage.responsePk = result.responsePk;
//                            t.changeWanShanPop();
//
//                        }
//                        t.end();
//                    }else{
//                        t.showError(result.responseMessage);
//                    }
//                }


            }
        });
    },
    //
    showWanShanPop:function(){
        var t = this;
        t.showContiner();
        t.loadHtml(t.getUrl("static", "wanshan"), function(){
            // TODO 设置用户名称
            t.bindWanShan();
            t.bindActiveInput();
        });
    },
    changeWanShanPop:function(username){
        var t = this;
        t.$container.empty();
        t.clearError();
        t.loadHtml(t.getUrl("static", "wanshan"), function(){
            // TODO 设置用户名称
            t.bindWanShan(username);
            t.bindActiveInput();
        });
    },
    bindWanShan:function(username){
        var t = this;
        t.setTopRight();
        t.$container.find(".login_lh").html("你好,"+t.responseMessage.name);
        t.$container.find(".tishi span").text(username);
        var a = t.$container.find("#wanShanForm").validate({
            submitHandler : function() {
                t.wanShanSubmit(username);
            },
            rules : {
                /*"wanshanEmail" : {
                    "required" : true,
                    "email" : true,
                    "rangelength" : [ 1, 50 ]
                },*/
                "wanshanPasswd" : {
                    "required" : true,
                    "rangelength" : [ 6, 20 ]
                }/*,
                "wanshanNickname":{
                    "required" : true,
                    "rangelength":[2,15]
                }*/
            },
            messages : {
                "wanshanEmail" : {
                    "required" : "你还没填写邮箱。",
                    "email" : "不像是有效的电子邮箱。",
                    "rangelength":"邮件地址不长于50位！"
                },
                "wanshanPasswd" : {
                    "required" : "请填写密码。",
                    "rangelength" : "密码长度在{0}-{1}位！"
                }/*,
                "wanshanNickname":{
                    "required":"我们该如何称呼你!",
                    "rangelength":"昵称请在{0}-{1}个字符之间！"
                }*/
            },
            errorPlacement:function(error,element){
                var p = $(element).parents(".inputParent");
                var con = p.find(".l_warning");
                con.append("<span></span>");
                con.find("span").html(error);
                p.find(".ok").hide();
                p.find(".jinggao").hide();
                p.find(".kuang").addClass("input_error");
                p.find(".jinggao").show();
                $(element).parent().parent().addClass("input_error");

            },
            success:function(element){
                var p = $(element).parents(".inputParent");
                p.find(".jinggao").hide();
                p.find(".ok").show();
                p.find(".kuang").removeClass("input_error");
                $(element).parents(".input_error").removeClass("input_error");
                $(element).parent().parent().empty();

            },
            onkeyup:false
        });

        t.$container.find(".submit_but").on("click",function(){
            t.$container.find("form").submit();
        });
    },
    wanShanSubmit:function(userName){
        var t = this;
        var email=userName;
        var type = checkAccountType(email);
        var param = {
        	type:type,	
            email:email,
            account:email,
            passwd:t.$container.find("[name=wanshanPasswd]").val(),
            nickname:t.$container.find("[name=wanshanNickname]").val(),
            caosCustomerId:t.caosCustomerId
            //caosId:t.responseMessage.responsePk
        };
        var data = { "paramJson": $.toJSON(param)};
        Common.showloading();
        $.ajax({
            url:t.getUrl("dynamic","userValidAndBind"),
            type:"POST",
            data:data,
            dataType:"json",
            success:function(data){
                Common.hideloading();
                var result = data.responseObject;
                if(result){
                    if(result.responseStatus){
                        t.end();
                        t.privCheckSuccess();
                    }else{
                        t.showError("密码不正确。想要 <a href='/html/passport/reset_password_account.html'>恢复密码</a> 吗？"); //result.responseMessage
                    }
                }


            }
        });
    },
    //键盘操作
    keyboardAction:function(){
        var t = this;
        var KEYCODE_ESC = 27;
        var KEYCODE_ENTER = 13;
        var keycode = event.keyCode;
        var key     = String.fromCharCode(keycode).toLowerCase();
        if (keycode === KEYCODE_ESC ) {              //  || key.match(/x|o|c/
            t.end();
        }
        if (keycode === KEYCODE_ENTER) {
            if(t.form!=null){
                t.form.submit();
            }
        }
    },
    enableKeyboard:function() {
        $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
    },
    //关闭弹层
    closeLightBox:function(){
        var t = this;
        t.disableKeyboard();
        $(window).off("resize", t.sizeOverlay);
        //t.$lightbox.fadeOut();
        t.$overlay.fadeOut();
        $('select, object, embed').css({
            visibility: "visible"
        });
    },
    //禁用键盘事件
    disableKeyboard:function(){
        $(document).off('.keyboard');
    },
    end:function(){
        var t = this;
        Common.LightBox.hide();
        $('select, object, embed').css({
            visibility: "visible"
        });
        if(t.$container!=null){
            t.$container.remove();
        }
        if(t.$rightTop!=null){
            t.$rightTop.remove();
        }
        t.clearError();
        $(window).off("scroll",user.windowScroll);
        t.disableKeyboard();
        t.isRunning = false;
        document.body.style.overflow="auto";
    },

    // 载入页面
    loadHtml:function(htmlUrl,callback){
        var t = this;
        //Common.LightBox.show();
        Common.showloading();
        document.body.style.overflow="hidden";
        $.ajax({
            url:htmlUrl+"?_="+Math.random(),
            dataType:"html",

            success:function(data){
                Common.hideloading();
                setTimeout(function(){
                    Common.LightBox.show();
                },300);
                t.$container.html(data);
                t.form = t.$container.find("form");
                if(t.form.length==0){
                    t.form = null;
                }else{
                    t.enableKeyboard();
                }

                var pop = t.$container.find(".pop-up").css({
                    "margin":"0 auto",
                    "width":t.$container.find(".pop-up>div").width()
                });
                pop.on("click",function(e){
                    Common.stopBubble(e);
                });
                pop.on("click",".caos_login",function(){	// 绑定联合登录
                    t.changeCAOS();
                });

                Common.setCenter(t.$container);
                callback && callback();
                t.$container.find("input[placeholder], textarea[placeholder]")
                    .placeholder();	// 表单默认值 插件

                $(window).on("scroll",user.windowScroll);
            },
            error:function(){
                alert("网络错误，请重试");
                t.end();
            }
        });
    },
    windowScroll:function(){
       
        user.clearError();
        clearTimeout(user.reValidate);
        user.reValidate = setTimeout(function(){
            user.$container.find("form").submit();
        },500);

        Common.setCenter($(".lightbox-container"));
        user.setTopRight();
    },
    setTopRight:function(){
        var t = this;
        var top  = t.$window.scrollTop() ;
        t.$rightTop.css({
            top: top + 'px',
            right: '0px',
            zIndex:10
        });
    },
    // 设置头像
    setLoginHeader:function(){

    },
    // 向顶部右侧添加注册按钮
    appendRegistBtn:function(){
        var t = this;
        t.$rightTop.find(".lightbox-btns").empty().append("<div class='lightbox-regist'></div>");
        t.$rightTop.find(".lightbox-regist").on("click",function(e){
            t.changeRegist();
            e.stopPropagation();
        });
        t.setTopRight();
    },


    // 向顶部右侧添加跳过按钮
    appendSkipBtn:function(){
        var t = this;
        t.$rightTop.find(".lightbox-btns").empty().append("<div class='lightbox-skip'></div>");
        t.$rightTop.find(".lightbox-skip").on("click",function(e){
            t.changeRegist();
            e.stopPropagation();
        });
        t.setTopRight();
    },
    // 向顶部右侧添加登录按钮
    appendLoginBtn:function(){
        var t = this;
        t.$rightTop.find(".lightbox-btns").empty().append("<div class='lightbox-login'></div>");
        t.$rightTop.find(".lightbox-login").on("click",function(e){
            t.changeLogin();
            if ( e && e.stopPropagation ){
                // 因此它支持W3C的stopPropagation()方法
                e.stopPropagation();
            }else{
                //否则，我们需要使用IE的方式来取消事件冒泡
                window.event.cancelBubble = true;
            }
        });
        t.setTopRight();
    },
    changeRegist:function(){
        var t = this;
        t.$container.empty();
        t.clearError();
        t.loadHtml(t.getUrl("static","regist"),function(){
            if(t.isNeedRenZheng){
                t.$container.find(".reg_detail").addClass("type2");
            }else{
                t.$container.find(".reg_detail").addClass("normal");
            }
            t.bindRegist();
        });
    },
    changeCAOS:function(){
        var t = this;
        t.$container.empty();
        t.clearError();
        t.loadHtml(t.getUrl("static", "lianhe"),function(){
            t.bindCAOS();
        });
    },
    changeLogin:function(){
        var t = this;
        t.$container.empty();
        t.clearError();
        t.loadHtml(t.getUrl("static", "login"),function(){
            t.bindLogin();
        });
    },
    loginSubmit:function(){
        var t = this;
//        var param = {
//            email:t.$container.find("[name=email]").val(),
//            passwd:t.$container.find("[name=passwd]").val()
//        };
//        var data = { "paramJson": $.toJSON(param)};
        var password=t.$container.find("[name=passwd]").val(),data={};
        var email = t.$container.find("[name=email]").val();
        var type = checkAccountType(email);
		data.j_username="website;"+email+";"+password+";"+type;
        data.j_password=password;
        data.rememberMe=1;
        Common.showloading();
        $.ajax({
            url: t.getUrl("dynamic","loginSubmit"),
            cache: false,
            data:data,
            dataType:'json',
            type:"POST",
            success: function(data){
                Common.hideloading();
                // 不正确的邮箱或密码,请重新输入！
                var result = data.responseObject;
                if(!result.responseStatus){
                    //   t.$container.find(".error_bg").show();
                    t.showError(result.responseMessage);
                }else{
                    t.loginSuccess(result);
                   
                }
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                // 通常 textStatus 和 errorThrown 之中
                // 只有一个会包含信息
                //this; // 调用本次AJAX请求时传递的options参数
                alert(textStatus + "   " +errorThrown);
            }
        });
    },
    // 注册提交
    registSubmit:function(){
        var t = this;
    },
    // 跳转到重置密码
    changeResetPwd:function(){
        var t = this;
        t.$container.empty();
        t.clearError();
        t.loadHtml(t.getUrl("static", "resetPwd"),function(){
            t.bindResetPwd();
        });
    },
    // 跳转到医师认证
    changeRenZheng:function(){
        var t = this;
        t.$container.empty();
        t.clearError();
        t.loadHtml(t.getUrl("static", "renzheng"),function(){
            t.bindRenZheng();
            $(".lightbox-btns").empty();
        });
    },
    // 绑定重置密码界面
    bindResetPwd:function(){
        var t = this;
        $("#resetForm").validate({
            submitHandler : function() {
                t.doResetPost();
            },
            onkeyup:false,
            rules : {
                "email" : {
                    "required" : true,
                    "email" : true
                }
            },
            messages : {
                "email" : {
                    "required" : "登录邮箱必须输入！",
                    "email" : "请输入正确的邮箱！"
                }
            },
            showErrors : poshyTipShowErrors,
            hideErrors : poshyTipHideErrors,
            errorClass : "tip-yellow"
        });
        t.$container.find(".submit_but").on("click",function(){
            $("#resetForm").submit();
        });
    },
    // 点击重置提交
    doResetPost:function(){
        var t = this;
        t.sendReset();
        t.loadHtml(t.getUrl("static", "afterReset"), function(){

        });
    },
    // 发送重置密码请求
    sendReset:function(){
        //$.get("")
    },
    // 隐藏错误提示框
    clearError:function(){
        $("div.tip-yellow").remove();
    },
    //	检查
    ensurePrivJson:function(){
        var t = this;
        t.privJson = operate_auth_json.privJson;
        t.checkPriv();
    },
    //	比较权限
    checkPriv:function(){
        var t = this,operateItem;
        if(t.options.operateType==""){
            return;
        }
        for(var i = 0,l =t.privJson.length;i<l;i++){
            operateItem = t.privJson[i];
            if(operateItem.opName==t.options.operateType){
                break;
            }
        }
        t.isNeedLogin = operateItem.opAuth[0];
        t.isNeedRenZheng = operateItem.opAuth[1];
        if(!t.isNeedLogin){	// 无需登录
            t.privCheckSuccess();
        }else{				// 需要登录
            t.checkStatus();	// 检查登录状态
        }
    },
    // 登录成功后
    loginSuccess:function(result){
        var t = this;
        t.isLoginStatus=true;
        $(".nav_list a:eq(0)").attr("href","/call/customer/index/input/");
        if(typeof t.userInfo == "undefined"  || isEmptyObject( t.userInfo)){
            var userInfo = getCustomerUnite();
            t.userInfo = userInfo;

            if(userInfo!=null && userInfo!=undefined){     // 更新头部用户状态 修改样式，加载头像 设置隐藏域
                //$(".header .search").removeClass("search").addClass("search_login");
                loadLoginUserBaseInfo();
                loadCustomerPic();
                //$(".header .login").removeClass("login").addClass("login_user").html('<div class="tuichu"><a href="javascript:logout();">退出</a></div><div class="user_name"><a href="http://www.allinmd.cn/call/customer/home/input/?customerId='+ userInfo.customerId +'">'+  userInfo.nickname +' </div>');

                //<div class="user_img"><img src="http://img00.allinmd.cn/default/customer/35X35.jpg"></div>


                //$("#sesCustomerId").val(userInfo.customerId);
                //$("#sesNickname").val(userInfo.nickname);

                /*var urlData=getLogoUrlList(4,4,userInfo.customerId);
                if(urlData && urlData.length>0){
                 var portraitUrl1=urlData[0].logoUrl;
                 var imgUrl="http://img01.allinmd.cn/"+portraitUrl1;
                 $(".user_img img").attr("src",imgUrl);
                 }*/
            }
        }
        if(t.isNeedRenZheng){	// 需要认证
            t.checkRenZheng();
        }else{	//	不需认证
            t.privCheckSuccess();
            t.end();
        }
    },
    checkRenZheng:function(){
        var t = this;
        //Common.showloading();
        $.ajax({
            url:t.getUrl("dynamic", "getRenZheng"),
            dataType:"json",
            type:"post",

            success:function(data){
                //Common.hideloading();
                if(data==null || data=="" || data.responseObject==undefined){	//未认证
                    if(t.$container && t.$container.is(":visible")){
                        // 之前在登录界面的话
						if(t.options.isGuide){//需要弹出引导层
							$(document).scrollTop(0);
							$(".mask_body").remove();
							$(t.guideLayer('renzheng')).appendTo($("body"));
							$("body").css("overflow","hidden");
							$(".renzheng_mask").live("click",function(){
								t.showRenZhengPop();
								$("body").css("overflow","auto");	
							});	
						}
                        t.changeRenZheng();	//跳转到认证界面
						
                    }else{
						if(t.options.isGuide){//需要弹出引导层
							$(document).scrollTop(0);
							$(t.guideLayer('renzheng')).appendTo($("body"));
							$("body").css("overflow","hidden");
							$(".renzheng_mask").live("click",function(){
								t.showRenZhengPop();
								$("body").css("overflow","auto");	
							});	
						}else{
							 t.showRenZhengPop();	
						}
                    }
                }else{
                    var customerId=data.responseObject.customerId;
                    var state=data.responseObject.state;
                    var firstName=data.responseObject.firstName;
                    var lastName=data.responseObject.lastName;
                    
                    if(customerId<=0|| state==3 || state==-1){
                        // 未申请  || 被拒绝 
                        //alert("您的认证申请正在审枋中。无法进行相关操作");
                        if(t.$container && t.$container.is(":visible")){
                            // 之前在登录界面的话
                            t.changeRenZheng();	//跳转到认证界面
                        }else{
                        	t.options = $.extend(t.options,{firstName:firstName,lastName:lastName});
                            t.showRenZhengPop();
                        }
                    }else if(state==1||state==2){
                        //认证已经通过，此时不允许再次认证
                    		t.isRenZhengStatus=true;
                        t.end();
                        t.privCheckSuccess();
                    }else if(state==0){
                        //已经提交申请 未审核 ，此时不允许再次认证
                        //alert("你已经提交过认证，不能重复认证")
                        t.end();
                    }
                    
                  
                }
            }
        });
    },
    //	权限较验成功后处理
    privCheckSuccess:function(){
        var t = this;

        loadLoginUserBaseInfo();
        loadCustomerPic();

        function isEmptyObj(obj) {
            for (var key in obj) {
                return false;
            }
            return true;
        }

        if(typeof t.userInfo == "undefined"  || isEmptyObj( t.userInfo)){
            var userInfo = getCustomerUnite();
            t.userInfo = userInfo;

            if(userInfo!=null){     // 更新头部用户状态 修改样式，加载头像 设置隐藏域
                $(".header .search").removeClass("search").addClass("search_login");

                $(".header .login").removeClass("login").addClass("login_user").html('<div class="tuichu"><a href="javascript:logout();">退出</a></div><div class="user_name"><a href="http://www.allinmd.cn/call/customer/home/input/?customerId='+ userInfo.customerId +'">'+  userInfo.nickname +' </div>');

                //<div class="user_img"><img src="http://img00.allinmd.cn/default/customer/35X35.jpg"></div>


                $("#sesCustomerId").val(userInfo.customerId);
                $("#sesNickname").val(userInfo.nickname);
                /*var urlData=getLogoUrlList(4,4,userInfo.customerId);
                if(urlData && urlData.length>0){
                    var portraitUrl1=urlData[0].logoUrl;
                    var imgUrl="http://img01.allinmd.cn/"+portraitUrl1;
                    $(".user_img img").attr("src",imgUrl);
                }*/
            }
        }
        if(typeof t.options != "undefined" && typeof t.options.callback!="undefined"){
            t.options.callback();
        }else{
            window.location.href="/";
        }
        t.isRunning=false;
    },
    //主方法
    login:function(options){

        var t = this;
        if(t.isRunning){
            return;
        }else{
            t.isRunning = true;
            if(!options){
                return;
            }else{
                t.options = options;
                if(options.operateType!="" && options.callback!=null){
                    t.ensurePrivJson();
                }
            }
        }
    },
	
    showError:function(msg){
        var t = this;
        var errorMsg = t.$container.find(".errorMsg");
        if(errorMsg.length==0){
            errorMsg = $('<div class="error_bg errorMsg"><img src="http://img00.allinmd.cn/login_v2/false.jpg" alt=""/><div class="error_biao"></div></div>');
            t.$container.find("form").prepend(errorMsg);
        }
        errorMsg.find(".error_biao").html(msg);
        errorMsg.show();
        t.errorMsg = errorMsg;
    },
    hideError:function(){
        var t = this;
        t.errorMsg.hide();
    },
    getLoginStatus:function(){
    	var t = this;
	    	$.ajax({
	            url:t.getUrl("dynamic","checkUserStatus"),
	            dataType:"json",
	            type:"post",
	            success:function(result){
	                // Common.hideloading();
	                if(result.responseObject.responseStatus){//已登录
	                    t.isLoginStatus=true;
	                }else{
	                		t.isLoginStatus=false;
	                }
	            }
	    	});
    },
    
    getRenZhengStatus:function(){
    	    	var t = this;
    		    	$.ajax({
    		            url:t.getUrl("dynamic","getRenZheng"),
    		            dataType:"json",
    		            type:"post",
    		            success:function(result){
    		                if(!$.isEmptyObject(result) && (result.responseObject.state==1 || result.responseObject.state==2)){//已登录
    		                    t.isRenZhengStatus=true;
    		                }
    		            }
    		    	});
    	    },
    bindActiveInput:function(){
    		var t = this;
        t.$container.find('input').on("focus",function(){
            $(this).parent().addClass("hover");
        });
        t.$container.find('input').on("blur",function(){
            $(this).parent().removeClass("hover");
        });
    }
};
user.getLoginStatus();
user.getRenZhengStatus();
var PicUploader = {
    el:null,
    start:function(options){
        var t = this;
        if(options!=null)
        {
            t.options = options;	//	上传插件的配置参数, {callback://保存时执行操作}
        }
        /*
         if(Common.LightBox.getZIndex()>0){
         Common.LightBox.zIndexUp();
         }else{
         Common.LightBox.show();
         }
         */

        if(!$("#uploadForm").length){
            $("body").append("<div id='uploadForm'></div>");
        }
        t.el = $("#uploadForm");
        t.el.load("http://www.allinmd.cn/html/picUploader/upload.html?_" + Math.random(),function(){
            Common.setCenter(t.el);
            t.bind();
        });
        t.el.css({
            "zIndex":12,
            "position":"absolute"
        });
        t.img = null;

    },
    bind:function(){
        var t = this;
        czyx.uploadReplace('#file',{
            url:user.getUrl("dynamic",t.options.url)+"?_="+Math.random(), //文件处理的URL
            uploadReplaceCss:{
                //设置上传按钮图片
                background:'url(http://img00.allinmd.cn/popup/up_img.jpg) center no-repeat',
                width:325,             //上传按钮的宽度
                height:325              //上传按钮的高度
            },
            uploadInputCss:{
                width:325,             //上传按钮的宽度
                height:325              //上传按钮的高度
            },
            uploadBefore:function(){
                if(!/\.((jpg)|(gif)|(png))$/i.test(this.value)){
                    alert('只允许上传.jpg .gif .png类型的图片文件');
                    return false ;
                }
                var fileSize =Common.getFileSize(document.getElementById("file"));
                if(fileSize>5242880){
                	alert('图片不能大于'+5242880/1048576+"M");
                	return false;
                }
                $(".click_up").html(
                        "<div class=loading>" +
                        "<img src='http://img00.allinmd.cn/loading/5-121204193R0.gif'" +
                        " class='center' /></div>");
            },
            uploadEnd:function(serverJson){//上传完毕后调用
                //this.style.display = 'block';
                try{
                    serverJson = $.parseJSON(serverJson);
                    //t.preview(serverJson);
                }catch(e){
                    alert('上传失败');
                    t.img = null;
                    return ;
                }
                $(".click_up").html('<img src="' + serverJson['url'] + '" onload="changeSize(this,325,325);clearImgs();" />');
                t.img = serverJson['url'];
            }
        });
        // 放弃
        t.el.find(".giveup_but").on("click",function(e){
            t.close();
        });

        // 保存
        t.el.find(".save_but").on("click",function(e){
            if(!t.img){
                alert("请先选择图片");
                return;
            }
            if(t.options && t.options.callback){
                t.options.callback(t.img);
            }
            t.close();
            /*
             if(Common.LightBox.getZIndex()==9){
             Common.LightBox.hide();
             }else{
             Common.LightBox.zIndexDown();
             }
             */
        });
    },
    preview:function(data){
        var t = this;
        var img = document.createElement("img");
        t.el.find(".click_up").html("<img src='"+ data.picPath +"'/>");
    },
    // 放弃
    close:function(){
        var t = this;
        Common.LightBox.zIndexDown();
        t.el.remove();
        //czyx._uploadEnd(czyx,czyx.getNextTempId(),czyx.getNextTempId());
        $("[id^=czyx]").remove();
    }
}


//等比率缩放图片大小
function changeSize(nodeImg,width,height){
    var oWH = fgetRealWH(width,height, nodeImg.width, nodeImg.height);
    $(nodeImg).animate({
        width :oWH.width,
        height:oWH.height
    });
}



//获取等比率缩放后的宽度和高度值
function fgetRealWH(baseWidth, baseHeight, realWidth, realHeight){
    if(!realWidth || !realHeight){
        return {width:baseWidth,height:baseHeight}
    }
    var rate1 = baseWidth/realWidth ;
    var rate2 = baseHeight/realHeight ;
    var width,height;
    rate1 = (rate1 < rate2 ? rate1 : rate2) ;
    width = Math.ceil(realWidth*rate1);
    height = Math.ceil(realHeight*rate1);
    return {width:width,height:height};
};


//获取当前登录用户信息
function getCustomerUnite(){
    var unite={};
    $.ajax({
        type:'POST',
        url: "http://www.allinmd.cn/call/customer/unite/getCustomerUnite/",
        cache: false,
        dataType:'json',
        async: false,
        success: function(rep){
            if(rep && rep.responseObject){
                unite=rep.responseObject;
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
    return unite;
};

//获取系统上传的图片
function getLogoUrlList(logoType,logoSpec,customerId){

    var params={};
    var data={};
    var urlData={};
    if(logoType && logoType!="")data.logoType=logoType;
    if(logoSpec && logoSpec!="")data.logoSpec=logoSpec;
    if(customerId && customerId!=""){
        data.refId=customerId;
        params.paramJson= $.toJSON(data);
        $.ajax({
            type:'POST',
            url: "http://www.allinmd.cn/call/commdata/getLogoUrlList/",
            data:params,
            cache: false,
            async: false,
            dataType:'json',
            success: function(rep){
                if(rep && rep.responseObject){
                    urlData=rep.responseObject;
                }
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    }
    return urlData;
};

function getCustomerStatistics(customerId){
    var statistics={};
    $.ajax({
        type : 'get',
        url : "http://www.allinmd.cn/call/customer/statistics/getCustomerStatistics/?customerId="+customerId,
        cache: false,
        async: false,
        timeout:20000,
        success : function callback(rep) {
            if(rep.responseObject){
                statistics=rep.responseObject;
                followpeopleNum=rep.responseObject.followpeopleNum;
            }
        },
        error:function (){}
    });
    return statistics;
}



function bind1(picpath){
    if($("#uploadPic1 [id^=czyx]").length>0){
        $("#uploadPic1").html('<input type="file"    id="file1" name="file" />');
        //$("#uploadPic1 input").textinput();
    }
    czyx.uploadReplace('#file1',{
        url:"/call/customer/auth/uploadImg/?_="+Math.random(), //文件处理的URL,
        data:{imageType:"2"},
        uploadReplaceCss:{
            //设置上传按钮图片
            background:'url('+ picpath +') center no-repeat',
            backgroundSize:'100%',
            width:"100%",             //上传按钮的宽度
            height:"10em",              //上传按钮的高度
            marginLeft:"0.8em",
            marginTop:"0.5em"
        },
        uploadInputCss:{
            width:"90%",             //上传按钮的宽度
            height:"5.5em"             //上传按钮的高度
        },
        uploadBefore:function(){
        	var fileSize =Common.getFileSize(document.getElementById("file1"));
            if(fileSize>5242880){
            	alert('图片不能大于'+5242880/1048576+"M");
            	return false;
            }
            if(!/\.((jpg)|(gif)|(png))$/i.test(this.value)){
                alert('只允许上传.jpg .gif .png类型的图片文件');
                return false ;
            }
        },
        uploadEnd:function(serverJson){//上传完毕后调用
            //this.style.display = 'block';

            try{
                serverJson = $.parseJSON(serverJson);
                if(serverJson.certificatesPath!="") {

                    $("#certificatesPath").val(serverJson.certificatesPath);
                    $(".error_bg").hide();
                    //$("#uploadPic1").html("<img src='"+ serverJson.responseObject.responseMessage.url +"' />");
                    bind1(serverJson.url);
                }else{
                	if(serverJson.message){
                		alert(serverJson.message);
                	}else{
                		alert("上传失败");
                	}
                }
            }catch(e){
                alert("上传失败")
                //t.img = null;
                return ;
            }
        }
    });
}

function bind2(picpath){
    if($("#uploadPic2 [id^=czyx]").length>0){
        $("#uploadPic2").html('<input type="file"    id="file2" name="file" />');
       // $("#uploadPic2 input").textinput();
    }
    czyx.uploadReplace('#file2',{
        url:"/call/customer/auth/uploadImg/?_="+Math.random(), //文件处理的URL,
        data:{imageType:"2"},
        uploadReplaceCss:{
            //设置上传按钮图片
            background:'url('+ picpath +') center no-repeat',
            backgroundSize:'100%',
            width:"100%",             //上传按钮的宽度
            height:"10em",              //上传按钮的高度
            marginTop:"0.5em"
        },
        uploadInputCss:{
            width:"100%",             //上传按钮的宽度
            height:"9em"             //上传按钮的高度
        },
        uploadBefore:function(){
            if(!/\.((jpg)|(gif)|(png))$/i.test(this.value)){
                alert('只允许上传.jpg .gif .png类型的图片文件');
                return false ;
            }

        },
        uploadEnd:function(serverJson){//上传完毕后调用
            //this.style.display = 'block';
            try{
                serverJson = $.parseJSON(serverJson);
                if(serverJson.certificatesPath!="") {
                    alert("证件上传成功");
                    $("#qualificationPath").val(serverJson.certificatesPath);
                    //$("#uploadPic2").html("<img src='"+ serverJson.responseObject.responseMessage.url +"' />");
                    bind2(serverJson.url);
                }
            }catch(e){
                alert('上传失败');
                t.img = null;
                return ;
            }
        }
    });
}