/**
 * 功能描述：
 * 使用方法:  开放两个方法 user.login() user.logout();
 *                   user.login({
 *                          callback:function(){},  // 登录后的回调
 *                          operateType:""   操作类型 在此文件中设置 相关权限 如 collect respond// v2/js/module/user/operator_auth.js
 *                      });
 *                   user.logout(
 *                   function(){}    // 退出后的回调
 *                   );
 * 注意事件：

 * 引入来源：
 * 依赖
 *  1.jquery.validate.js 较验
 *  2.jquery.placeholder.zhihu.js
 *  3.jquery.validate.rules.collection.js  规则集
 *  4.lenovo.js 自动补全插件
 *  5.autocomplete.js
 *  6.v2/js/thrid-party/xMenu/jquery-xmenu.js 下拉
 *  7.上传按钮替换插件
 *  8.uploadReplace.js
 *  9.comm.file.jsv2/js/comm/comm.file.js
 *  10. 在“为什么”上显示卡片 v2/js/plugins/ui-card/plugin.ui-card.js
 * 作用：
 *
 * Created by LiuYuTao on 2015/3/19.
 */
module.user = function (Obj) {
    var defaults = {

    };
    document.domain = "allinmd.cn";
    function validateShowErr(element, error) {
        var p = $(element).parents(".inputParent");
        var con = p.find(".l_warning");
        con.empty();
        con.append("<span></span>");
        con.find("span").html(error);
        con.show();
        p.find(".ok").hide();
        p.find(".input-border").addClass("input-error");
        p.find(".jinggao").show();
        $(element).parent().parent().addClass("input-error");
    }

    function validateHideErr(element) {
        var p = $(element).parents(".inputParent");
        var con = p.find(".l_warning");
        p.find(".jinggao").hide();
        p.find(".ok").show();
        p.find(".input-border").removeClass("input-error");
        con.hide();
        $(element).parents(".input-error").removeClass("input-error");
        $(element).parents(".l_warning").empty();
    }

    /**
     * 上传按钮替换
     * @param picpath
     */
    function bind1(picpath) {
        if ($("#uploadPic1 [id^=czyx]").length > 0) {
            $("#uploadPic1").html('<input type="file"    id="file1" name="file" />');
            //$("#uploadPic1 input").textinput();
        }
        czyx.uploadReplace('#file1', {
            url: "/call/comm/upload_attachment/upload/?_=" + Math.random(), //文件处理的URL,
            data: {paramJson: $.toJSON({imageType: "2", domain: "www.allinmd.cn"})},
            uploadReplaceCss: {
                //设置上传按钮图片
                background: 'url(' + picpath + ') center no-repeat',
                backgroundSize: '100%',
                width: "30",             //上传按钮的宽度
                height: "30",              //上传按钮的高度
                marginRight: "10px",
                marginTop: "10px"
            },
            uploadInputCss: {
                width: "30",             //上传按钮的宽度
                height: "30",             //上传按钮的高度
                padding: "0"
            },
            uploadBefore: function () {
                var fileSize = comm.file.getFileSize(document.getElementById("file1"));
                if (fileSize > 5242880) {
                    alert('图片不能大于' + 5242880 / 1048576 + "M");
                    return false;
                }
                if (!/\.((jpg)|(gif)|(png))$/i.test(this.value)) {
                    alert('只允许上传.jpg .gif .png类型的图片文件');
                    return false;
                }
            },
            uploadEnd: function (serverJson) {//上传完毕后调用
                //this.style.display = 'block';

                try {
                    debugger;

                    serverJson = $.parseJSON(serverJson);
                    if (serverJson && serverJson.responseObject && serverJson.responseObject.responseMessage.path != "") {

                        $("#certificatesPath").val(serverJson.responseObject.responseMessage.path);
                        $(".photo_error").hide().parents(".inputParent").find(".input-border").removeClass("input-error");

                        bind1(serverJson.responseObject.responseMessage.url);
                    } else {
                        if (serverJson.message) {
                            alert(serverJson.message);
                        } else {
                            alert("上传失败");
                        }
                    }
                } catch (e) {
                    alert("上传失败")
                    //t.img = null;
                    return;
                }
            }
        });
    }

    var controller = {
        isLoginStatus: false,     // 是否已登录
        isRenZhengStatus: false,  // 是否已认证
        isNeedRenZheng: false,    // 是否需认证
        $container: null,
        privJson: null,
        isRunning: false,        // 是否已弹出
        callback: null,
        historyChanged: false,
        config: {},
        path: {
            "getCustomerUnite": "/call/customer/unite/getCustomerUnite/",     //获取当前登录用户信息
            "getLogoUrlList": "/call/commdata/getLogoUrlList/",               //获取系统上传的图片
            "getCustomerStatistics": "/call/customer/statistics/getCustomerStatistics/",     //获取用户统计信息
            "checkUserStatus": "/call//customer/unite/checkSession/",	// 获取用户状态
            "loginSubmit": "/call//passport/securitycheck",	            // 登录提交
            "registSubmit": "/call//customer/unite/userRegist/",	        //	注册提交
            "caosLoginSubmit": "/call//passport/securitycheck",	        //	联合登录提交
            "checkEmail": "/call//customer/unite/validateEmail/",		//	检测邮箱是否存在
            "renzhengSubmit": "/call//customer/auth/createAuth/",		//	认证提交
            "wsRenzhengSubmit": "/call//customer/auth/save/",		    //	认证修改
            "fileUpload": "/call//customer/auth/uploadImg/",		        //	文件上传
            "userHeadUpload": "/call//customer/index/uploadImg/",		//	文件上传
            "getRenZheng": "/call//customer/auth/getAuthBycustomerId/",
            "getUserInfo": "/call//customer/unite/getCustomerUnite/",
            "updateUserBaseInfo": "/call//customer/baseinfo/updateBaseInfo/",
            "randomCode": "/call//randomValidCode/create/",
            "caosRegist": "/call//customer/unite/userCaosRegist/",
            "userValidAndBind": "/call//web/user/userValidAndBind/"	 //唯医与caos用户绑定
        },
        template: {
            login: function () {
                return '<div class="pop-up">' +
                    '       <div class="reg_detail">' +
                    '           <div class="login">' +
                    '               <div class="login_content">' +
                    '                   <div class="login_logo"><img src="/v2/js/module/user/images/logo.png"/></div>' +
                    '                   <form action="" id="popLoginForm">' +
                    '                       <div class="error_bg"><img src="/v2/js/module/user/images/jinggao2.png" alt=""/>' +
                    '                           <div class="error_biao">不正确的账号或密码,请重新输入！</div>' +
                    '                       </div>' +
                    '                       <div class="inputParent login_input">' +
                    '                           <div class=" input-wrap input-border ">' +
                    '                               <div class="jinggao"></div>' +
                    '                               <div class="ok"></div>' +
                    '                               <input type="text" name="email" placeholder="邮箱或已验证手机" maxlength="50"/>' +
                    '                           </div>' +
                    '                           <div class="l_warning"></div>' +
                    '                       </div>' +
                    '                       <div class="inputParent password_input">' +
                    '                           <div class=" input-wrap input-border ">' +
                    '                               <div class="jinggao"></div>' +
                    '                               <div class="ok"></div>' +
                    '                               <input type="password" name="passwd" placeholder="你的密码" maxlength="20"/>' +
                    '                           </div>' +
                    '                           <div class="l_warning"></div>' +
                    '                       </div>' +
                    '                       <div class="login_but"><div class="v2-blue-btn v2-login">登录</div></div>' +
                    '                       <div class="forget_password font_song" style="text-align: right">' +
                    '                           <a href="/html/passport/reset_password_account.html">忘记密码？</a>' +
                    '                       </div>' +
                    '                       <div class="clear"></div>' +
                    '                       <div class="or"><img src="/v2/js/module/user/images/or-v2.png"/></div>' +
                    '                       <div class="three_login font_song">第三方帐户登录</div>' +
                    '                       <div class="caos_login">' +
                    '                          <div class="v2-white-btn">CAOS会员登录</div>' +
                    '                       </div>' +
                    '                   </form>' +
                    '               </div>' +
                    '           </div> ' +
                    '       </div>' +
                    '   </div>';
            },
            regist: function () {
                return ' <div class="pop-up">' +
                    '    <div class="reg_detail">' +
                    '    	<form action="" id="registForm">' +
                    '            <!--新版-->' +
                    '            <div class="login">' +
                    '                <div class="login_content">' +
                    '                    <div class="login_logo"><img src="/v2/js/module/user/images/logo.png"/></div>' +
                    '                    <div class="inputParent login_input">' +
                    '                        <div class=" input-wrap input-border ">' +
                    '                            <div class="jinggao"></div>' +
                    '                            <div class="ok"></div>' +
                    '                            <input type="text" maxlength="50" name="email" id="popEmail" placeholder="电子邮箱或手机号码"/>' +
                    '                        </div>' +
                    '                        <div class="l_warning"></div>' +
                    '                    </div>' +
                    '                    <div class="jg_text font_song" style="display:none;">' +
                    '                        <span> 此邮件地址已被注册。</span>' +
                    '                        想要 <a href="/call/customer/unite/login/">登录</a>' +
                    '                        或   <a href="/html/passport/reset_password_account.html">恢复密码</a> 吗？' +
                    '                    </div>' +
                    '                    <div class="inputParent password_input">' +
                    '                        <div class=" input-wrap input-border">' +
                    '                            <div class="jinggao"></div>' +
                    '                            <div class="ok"></div>' +
                    '                            <input type="password" name="customer.passwd"' +
                    '                                   maxlength="20"  id="popCustomerPassword" placeholder="设置密码"/>' +
                    '                        </div>' +
                    '                        <div class="l_warning"></div>' +
                    '                    </div>' +
                    '                    <div class="inputParent password_input">' +
                    '                        <div class=" input-wrap input-border">' +
                    '                            <div class="jinggao"></div>' +
                    '                            <div class="ok"></div>' +
                    '                            <input type="password" name="passwordRepeat" id="passwordRepeat"' +
                    '                                   maxlength="20"  placeholder="确认密码"/>' +
                    '                        </div>' +
                    '                        <div class="l_warning"></div>' +
                    '                    </div>' +
                    '                    <div class="yzm inputParent yzm_input" id="emailYZM"  >' +
                    '                        <div class="jinggao"></div>' +
                    '                        <div class="ok"></div>' +
                    '                        <div class=" input-wrap input-border">' +
                    '                            <input type="text" maxlength="6" name="validCode1" id="validCode1" placeholder="验证码"/>' +
                    '                        </div>' +
                    '                        <div class="yzm_img">' +
                    '                            <img src="/call/randomValidCode/create/" width="101" height="50" id="validCodeImg" />' +
                    '                        </div>' +
                    '                        <div class="yzm_text font_song">' +
                    '                            <a alt="再换一张" id="changeValidCode" href="javascript:void(0)">换一换</a>' +
                    '                        </div>' +
                    '                        <div class="clear">' +
                    '                        </div>' +
                    '                        <div class="l_warning"></div>' +
                    '                    </div>' +
                    '                    <div class="yzm inputParent" id="phoneYZM" style="display: none">' +
                    '                        <div class="jinggao"></div>' +
                    '                        <div class="ok"></div>' +
                    '                        <div class="yzm_input input-wrap input-border">' +
                    '                            <input type="text"  maxlength="6" id="validCode2" name="validCode2" placeholder="短信验证码"/>' +
                    '                        </div>' +
                    '                        <div class="phone_img">' +
                    '                            <div id="getmesg">' +
                    '                                <div class="btn">获取短信验证码</div>' +
                    '                            </div>' +
                    '                        </div>' +
                    '                        <div class="l_warning"></div>' +
                    '                    </div>' +
                    '                    <div class="clear"></div>' +
                    '                    <div class="login_but" id="popImageSubmit">' +
                    '                       <div class="v2-blue-btn v2-regist">注册</div>' +
                    '                    </div>' +
                    '                    <div class="tk_text font_song">我已阅读并同意' +
                    '                        <a href="/html/help/service.html" target="_blank">服务条款</a>' +
                    '                        和' +
                    '                        <a href="/html/help/statement.html" target="_blank">隐私声明</a></div>' +
                    '                </div>' +
                    '            </div>' +
                    '          ' +
                    '    	</form>' +
                    '    </div>   ' +
                    '</div>';
            },
            renzheng: function () {
                return ' <div class="pop-up">' +
                    ' 	<div class="login_detail_ty">' +
                    '        <div class="login" style="">' +
                    '           <div class="login_content">' +
                    '               <div class="login_lh">医师认证</div>' +
                    '               <div class="tishi">欢迎加入唯医。请认证你的医师身份。<a href="#" id="whyCard">为什么？</a></div>' +
                    '               <form id="renzhengForm">' +
                    '               <div class="name_input">' +
                    '                   <div class="inputParent ming_input">' +
                    '                       <div class=" input-wrap input-border">' +
                    '                          <input type="text" maxlength="50" placeholder="名字" name="firstName" />' +
                    '                       </div>' +
                    '                       <div class="l_warning"></div>' +
                    '                   </div>' +
                    '                   <div class="inputParent xing_input">' +
                    '                       <div class=" input-wrap input-border">' +
                    '                          <input type="text" maxlength="50" placeholder="姓氏" name="lastName" />' +
                    '                       </div>' +
                    '                       <div class="l_warning"></div>' +
                    '                   </div>' +
                    '                   <div class="clear"></div>' +
                    '               </div>' +
                    '               <div class="radio_input rz-num-type"></div>' +
                    '               <input type="hidden" name="certificate" id="certificate" />' +
                    '               <div class="inputParent rz_input">' +
                    '                   <div class="input-border input-wrap">' +
                    '                       <div class="jinggao"></div>' +
                    '                       <div class="ok"></div>' +
                    '                       <input type="text" maxlength="50" placeholder="证件号码"   name="attCode" />' +
                    '                   </div>' +
                    '                   <div class="l_warning"></div>' +
                    '               </div>' +
                    '               <div class="inputParent rz_input">' +
                    '                   <div class=" input-wrap input-border">' +
                    '                      <div class="jinggao"></div>' +
                    '                      <div class="ok"></div>' +
                    '                      <div class="v2-uploadImg" id="uploadPic1" style="float:right ">' +
                    '                           <input type="file" data-role=\'none\'   id="file1" name="file" />' +
                    '                      </div>' +
                    '                      <div class="input_name v2-uploadText">上传证件照片</div>' +
                    '                   </div>' +
                    '                   <div class="l_warning photo_error"></div>' +
                    '               </div>' +
                    '               <div class="inputParent rz_input">' +
                    '                   <div class=" input-wrap input-border">' +
                    '                       <div class="jinggao"></div>' +
                    '                       <div class="ok"></div>' +
                    '                       <input type="text" placeholder="医院"   name="company" id="company"/>' +
                    '                   </div>' +
                    '                   <div class="l_warning"></div>' +
                    '               </div>' +
                    '               <div class="inputParent rz_input">' +
                    '                     <div class="lk_input input-wrap input-border" id="medical_title" >' +
                    '                       <div class="jinggao"></div>' +
                    '                       <div class="ok"></div>' +
                    '                       <div class="input_name">职称</div>' +
                    '                       <ul class="medicalShow"></ul>' +
                    '                     </div>' +
                    '                   <div class="l_warning medical_error"></div>' +
                    '               </div>' +
                    '               <div class="inputParent rz_input">' +
                    '                      <div class="lk_input input-wrap input-border" id="areasExpertise">' +
                    '                          <div class="jinggao"></div>' +
                    '                          <div class="ok"></div>' +
                    '                          <div class="input_name">专业</div>' +
                    '                          <ul id="proFieldshow"></ul>' +
                    '                      </div>' +
                    '                   <div class="l_warning area_error"></div>' +
                    '               </div>' +
                    '               <div class="login_but submit_but">' +
                    '                   <div class="v2-blue-btn v2-letterspace-2 "> 提交认证 </div>' +
                    '               </div>' +
                    '               <div class="pass">跳过</div>' +
                    '               <input type="hidden" value="" name="certificatesPath" id="certificatesPath" />' +
                    '               <input type="hidden" value="" name="qualificationPath" id="qualificationPath" />' +
                    '               <!-- 弹出工作职称下拉框 -->' +
                    '                <div id="medicalMenu" class="xmenu" style="display: none; left:0">' +
                    '                   <div class="select-info">	' +
                    '                       <label class="top-label">已选职称：</label>' +
                    '                       <ul></ul>' +
                    '                       <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">' +
                    '                           <span class="a-btn-text">确定</span>' +
                    '                       </a> ' +
                    '                   </div>' +
                    '                   <dl></dl>' +
                    '               </div>' +
                    '               <!--end-->' +
                    '               <!-- 专业弹层 -->' +
                    '               <div id="areasMenu" class="xmenu" style="display: none; left:0">' +
                    '                   <div class="select-info">	' +
                    '                       <label class="top-label">已选专业：</label>' +
                    '                       <ul></ul>' +
                    '                       <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">' +
                    '                           <span class="a-btn-text">确定</span>' +
                    '                       </a> ' +
                    '                   </div>' +
                    '                   <dl></dl>' +
                    '               </div>' +
                    '               </form>' +
                    '           </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>';
            },
            wsrenzheng: function () {
                return ' <div class="pop-up">' +
                    ' 	<div class="login_detail_ty">' +
                    '        <div class="login" style="">' +
                    '            <div class="login_content">' +
                    '                <div class="login_lh">完善资料</div>' +
                    '                <div class="tishi">亲爱的医师你好，完善以下资料才可以继续浏览资源哦</div>' +
                    '                ' +
                    '                <div class="inputParent rz_input">' +
                    '                    <div class=" input-wrap input-border">' +
                    '                       <div class="jinggao"></div>' +
                    '                       <div class="ok"></div>' +
                    '                       <input type="text" placeholder="医院"   name="company" id="company"/>' +
                    '                    </div>' +
                    '                    <div class="l_warning"></div>' +
                    '                </div>' +
                    '                <div class="inputParent">' +
                    '                    <div class="rz_input">' +
                    '                      <div class="lk_input input-border  input-wrap" id="medical_title" >' +
                    '                        <div class="input_name">职称</div>' +
                    '                        <ul class="medicalShow"></ul>' +
                    '                      </div>' +
                    '                    </div>' +
                    '                    <div class="l_warning"></div>' +
                    '                </div>' +
                    '                <div class="inputParent">' +
                    '                    <div class="rz_input">' +
                    '                       <div class="lk_input input-border input-wrap" id="areasExpertise">' +
                    '                           <div class="input_name">专业</div>' +
                    '                           <ul id="proFieldshow"></ul>' +
                    '                       </div>' +
                    '                      </div>' +
                    '                    <div class="l_warning"></div>' +
                    '                </div>' +
                    '                <div class="login_but submit_but"><img src="/v2/js/module/user/images/tj_zl.png" /></div>' +
                    '                <!-- 弹出工作职称下拉框 -->' +
                    '                 <div id="medicalMenu" class="xmenu" style="display: none; left:0">' +
                    '                    <div class="select-info">	' +
                    '                        <label class="top-label">已选职称：</label>' +
                    '                        <ul>					' +
                    '                        </ul>' +
                    '                        <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">' +
                    '                            <span class="a-btn-text">确定</span>' +
                    '                        </a> ' +
                    '                    </div>			' +
                    '                    <dl></dl>			' +
                    '                </div>' +
                    '                <!--end-->' +
                    '                <!-- 专业弹层 -->' +
                    '                <div id="areasMenu" class="xmenu" style="display: none; left:0">' +
                    '                    <div class="select-info">	' +
                    '                        <label class="top-label">已选专业：</label>' +
                    '                        <ul></ul>' +
                    '                        <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">' +
                    '                            <span class="a-btn-text">确定</span>' +
                    '                        </a> ' +
                    '                    </div>			' +
                    '                    <dl></dl>			' +
                    '                </div>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>';
            },
            resetPwd: function () {
                return '<div class="pop-up">' +
                    '	<div class="login_detail_ty">' +
                    '       <div class="bd_name">重置密码</div>' +
                    '       <div class="ts_div">' +
                    '           <div class="ts_t_bg"></div>' +
                    '           <div class="ts_c_bg">忘记了密码？别着急。简单几步帮你找回密码。</div>' +
                    '           <div class="ts_b_bg"></div>' +
                    '       </div>' +
                    '       <form id="resetForm">' +
                    '       <div class="wanshan"><input type="text" placeholder="你的邮箱" /></div>' +
                    '       <div class="submit_but"><img src="http://img00.allinmd.cn/reg/cz_but.png"></div>' +
                    '       </form>' +
                    '   </div>' +
                    '</div>';
            },
            afterReset: function () {
                return '<div class="pop-up">' +
                    '	<div class="login_detail_ty">' +
                    '		<div class="bd_name">重置密码</div>' +
                    '		<div class="ts_div">' +
                    '			<div class="ts_t_bg"></div>' +
                    '			<div class="ts_c_bg">一封重置密码的邮件已发送至你的注册邮箱，' +
                    '你可以点击邮件中的链接重新设置你的密码。</div>' +
                    '			<div class="ts_b_bg"></div>' +
                    '		</div>' +
                    '		<div class="cfyj_but"><img src="http://img00.allinmd.cn/reg/cfyj_but.png" /></div>' +
                    '		<div class="cfyj_but"><img src="http://img00.allinmd.cn/reg/cf_miao_but.png" /></div>' +
                    '	</div>' +
                    '</div>';
            },
            lianhe: function () {
                return '<div class="pop-up">' +
                    '    <div class="login">' +
                    '        <div class="login_content">' +
                    '            <div class="login_lh">联合登录</div>' +
                    '            <div class="tishi">你正在使用CAOS账号登录唯医</div>' +
                    '            <form>' +
                    '                <div class="inputParent login_input">' +
                    '                    <div class="input-wrap input-border">' +
                    '                       <div class="jinggao"></div>' +
                    '                       <div class="ok"></div>' +
                    '                       <input type="text" name="email" placeholder="你在CAOS的用户名" maxlength="50" /></div>' +
                    '                    <div class="l_warning"></div>' +
                    '                </div>' +
                    '                <div class="inputParent password_input">' +
                    '                    <div class=" input-wrap input-border">' +
                    '                       <div class="jinggao"></div>' +
                    '                       <div class="ok"></div>' +
                    '                       <input type="password" name="passwd"  placeholder="你在CAOS的密码" maxlength="20" /></div>' +
                    '                    <div class="l_warning"></div>' +
                    '                </div>' +
                    '            </form>' +
                    '            <div class="login_but">' +
                    '               <div class="v2-blue-btn v2-letterspace-2 "> 授权并登录 </div>' +
                    '            </div>' +
                    '	    </div>' +
                    '	</div>' +
                    '</div>';
            },
            wanshan: function () {
                return '<div class="pop-up">' +
                    '	<div class="login_detail_ty">' +
                    '        <div class="login_content">' +
                    '            <div class="login_lh">你好，柴伟</div>' +
                    '            <div class="tishi">你已使用<span></span>注册过唯医，请输入当时设置的密码</div>' +
                    '            <form id="wanShanForm">' +
                    '                <div class="error_bg" style="display: none">' +
                    '                    <img src="/v2/js/module/user/images/jinggao2.png" alt=""/>' +
                    '                    <div class="error_biao">密码不正确。想要 <a href=\'/html/passport/reset_password_account.html\' >恢复密码</a> 吗？</div>' +
                    '                </div>' +
                    '                <div class="inputParent password_input">' +
                    '                    <div class=" input-wrap input-border">' +
                    '                       <div class="jinggao"></div>' +
                    '                       <div class="ok"></div>' +
                    '                       <input type="password" name="wanshanPasswd" id="wanshanPasswd" maxlength="20" placeholder="你在唯医的登录密码" />' +
                    '                    </div>' +
                    '                    <div class="l_warning"></div>' +
                    '                </div>' +
                    '                <div class="login_but submit_but">' +
                    '                    <div class="v2-blue-btn v2-letterspace-2 "> 登录 </div>' +
                    '                </div>' +
                    '                <div class="forget_password font_song" style="text-align: right; padding-top: 20px;">' +
                    '                   <a href="/html/passport/reset_password_account.html">忘记密码？</a>' +
                    '                </div>' +
                    '            </form>' +
                    '        </div>' +
                    '	</div>' +
                    '</div>';
            }
        },

        init: function (Obj) {
            var t = this;
            t.getLoginStatus();
            t.getRenZhengStatus();
        },

        //获取当前登录用户信息
        getCustomerUnite: function () {
            var t = this;
            var unite = {};
            $.ajax({
                type: 'POST',
                url: t.path.getCustomerUnite,
                cache: false,
                dataType: 'json',
                async: false,
                success: function (rep) {
                    if (rep && rep.responseObject) {
                        unite = rep.responseObject;
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
            return unite;
        },

        //获取系统上传的图片
        getLogoUrlList: function (logoType, logoSpec, customerId) {
            var t = this;
            var params = {};
            var data = {};
            var urlData = {};
            if (logoType && logoType != "") {
                data.logoType = logoType;
            }
            if (logoSpec && logoSpec != "") {
                data.logoSpec = logoSpec;
            }
            if (customerId && customerId != "") {
                data.refId = customerId;
                params.paramJson = $.toJSON(data);
                $.ajax({
                    type: 'POST',
                    url: t.path.getLogoUrlList,
                    data: params,
                    cache: false,
                    async: false,
                    dataType: 'json',
                    success: function (rep) {
                        if (rep && rep.responseObject) {
                            urlData = rep.responseObject;
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                    }
                });
            }
            return urlData;
        },
        /**
         * 获取用户统计信息
         * @param customerId
         */
        getCustomerStatistics: function (customerId) {
            var t = this;
            var statistics = {};
            $.ajax({
                type: 'get',
                url: t.path.getCustomerStatistics + "?customerId=" + customerId,
                cache: false,
                async: false,
                timeout: 20000,
                success: function callback(rep) {
                    if (rep.responseObject) {
                        statistics = rep.responseObject;
                    }
                },
                error: function () {
                }
            });
            return statistics;
        },

        //引导弹层
        guideLayer: function (status) {
            var btn = 'login_mask';
            var img = 'login.png';
            var text = 'text.png';
            if (status === 'renzheng') {
                btn = 'renzheng_mask';
                img = 'ysrz.png';
            } else if (status === 'ws') {
                btn = 'ws_mask';
                img = 'ws_btn.png';
                text = 'ws_text_02.png';
            }
            var html = '<div class="mask_body">' +
                '<div class="mask_top"></div>' +
                '<div class="mask_bottom"></div>' +
                '<div class="mask_content">' +
                '<div class="mask_text"><img src="http://img00.allinmd.cn/mask/' + text + '" /></div>' +
                '<div class="mask_text_but"><a href="javascript:;"><img class="' + btn + '" src="http://img00.allinmd.cn/mask/' + img + '" /></a>' +
                '<div class="mask_text_hand"><img src="http://img00.allinmd.cn/mask/hand.png" /></div></div>' +
                '</div>' +
                '</div>';
            return html;
        },
        // 检测登录状态
        checkStatus: function () {
            var t = this;
            // comm.LightBox.showloading();
            $.ajax({
                url: t.path.checkUserStatus,
                dataType: "json",
                type: "post",
                success: function (result) {
                    // comm.LightBox.hideloading();
                    if (result.responseObject.responseStatus) {//已登录
                        t.loginSuccess();
                    } else {
                        if (t.options.isGuide) {//需要弹出引导层
                            $(document).scrollTop(0);
                            $(".mask_body").remove();
                            $(t.guideLayer('login')).appendTo(t.$body);
                            t.$body.css("overflow", "hidden");
                            $(".login_mask").live("click", function () {
                                t.showLoginPop();
                            });
                        } else {//不需要
                            t.showLoginPop();
                        }
                    }
                }
            });
        },
        //创建弹层所需DOM结构
        showContiner: function () {
            var t = this;
            if ($(".LightBox-popup-modal").length === 0) {
                $("<div class='LightBox-right-top'>" +
                        "<div class='LightBox-close'></div>" +
                        "<div class='LightBox-btns'></div>" +
                        "</div>" +
                        "<div class='LightBox-container'></div>"
                ).appendTo(t.$body);

                t.$container = $(".LightBox-container").css({
                    zIndex: 10006,
                    position: "absolute"
                });
                t.$window = $(window);
            }
            t.$rightTop = $(".LightBox-right-top");
            t.$rightTop.find(".LightBox-close").on('click', function () {
                t.end();
                if (t.options.isGuide) {
                    t.$body.css("overflow", "hidden");
                }
            });
            $('select, object, embed').css({
                visibility: "hidden"
            });
        },
        //登录弹窗
        showLoginPop: function () {
            var t = this;
            t.showContiner();
            if ('pushState' in history) {
                t.changeHistory("login");
            }
            t.loadHtml("login", function () {
                t.bindLogin();
            });
        },
        changeHistory: function (type) {
            var t = this, state;
            if (type == "login") {
                state = {
                    title: "登录网站",
                    url: "/v2/pages/singlePage/user/login.html",
                    otherkey: null
                };
            } else {
                state = {
                    title: "登录网站",
                    url: "/v2/pages/singlePage/user/renzheng.html",
                    otherkey: null
                };
            }

            window.history.pushState(state, state.title, state.url);
            t.historyChanged = true;

            $(window).on("popstate", function () {
                // 获得存储在该历史记录点的json对象
                t.historyChanged = false;
                t.end();
            })
        },
        //登录事件
        bindLogin: function () {
            var t = this;
            t.appendRegistBtn();
            t.validateLogin();
            t.$container.find(".login_but").on("click", function () {
                $("#popLoginForm").submit();
            });
            // 忘记密码
            t.$container.find(".forgot").on("click", function () {
                t.changeResetPwd();
            });
            t.bindActiveInput();
        },
        //登录较验
        validateLogin: function () {
            var t = this;
            $("#popLoginForm").validate({
                submitHandler: function () {
                    t.loginSubmit();
                },
                rules: {
                    "email": {
                        "required": true,
                        "emailOrPhone": true,
                        "rangelength": [ 1, 50 ]
                    },
                    "passwd": {
                        "required": true,
                        "rangelength": [ 6, 20 ]
                    }
                },
                messages: {
                    "email": {
                        "required": "请填写邮箱或已验证手机。",
                        "emailOrPhone": "请输入正确的手机号或邮箱。",
                        "rangelength": "最多可输入50个字符。"
                    },
                    "passwd": {
                        "required": "请填写密码。",
                        "rangelength": "密码长度在{0}-{1}位！",
                        "remote": "不正确的账号或密码,请重新输入！"
                    }
                },
                errorPlacement: function (error, element) {
                    validateShowErr(element, error);
                },
                success: function (element) {
                    validateHideErr(element);
                },
                onkeyup: false

            });
        },
        //注册弹窗
        showRegistPop: function () {
            var t = this;
            t.showContiner();
            t.loadHtml("regist", function () {
                t.$container.find(".reg_detail").addClass("normal");
                t.bindRegist();
            });
        },
        // 注册绑定
        bindRegist: function () {
            var t = this;
            t.appendLoginBtn();
            $('input, textarea').placeholder();
            t.bindActiveInput();
            // 绑定帐号下面的错误提示中的登录链接
            t.$container.find(".login_content").on("click", ".login-btn", function () {
                t.changeLogin();
            });

            // 换一个验证码
            $("#changeValidCode").click(function () {
                $("#validCodeImg").attr("src",
                        "/call/randomValidCode/create/?_=" + Math.random());
                $("#validCode").val("");
            });
            var counting = false;
            $("#getmesg").on("click", getmsgHandle);
            // 邮箱失焦，判断显示哪个验证码
            $("#popEmail").on("blur", function () {
                var type = comm.checkAccountType($(this).val());
                if (type === "email") {
                    $("#phoneYZM").hide();
                    $("#emailYZM").show();
                    validateReg.rules.validCode1.required = true;
                    validateReg.rules.validCode2.required = false;
                }
                if (type === "mobile") {
                    $("#emailYZM").hide();
                    $("#phoneYZM").show();
                    $("#validCode2").val("");
                    if (!counting) {
                        $("#getmesg .btn").removeClass("disabled");
                        $("#getmesg").off("click");
                        $("#getmesg").on("click", getmsgHandle);
                    }
                    validateReg.rules.validCode1.required = false;
                    validateReg.rules.validCode2.required = true;
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
            function countdownGetMsg() {
                counting = true;
                var t = 60;
                $("#getmesg .btn").text(t-- + "秒后重新获取");
                var a = setInterval(function () {
                    if (t > 0) {
                        $("#getmesg .btn").text(--t + "秒后重新获取");
                    } else {
                        clearInterval(a);
                        $("#getmesg .btn").removeClass("disabled");
                        $("#getmesg .btn").text("获取短信验证码");
                        $("#getmesg").on("click", getmsgHandle);
                        counting = false;
                    }
                }, 1000)
            }

            //发送短信
            function sendSms() {
                var account = $("#popEmail").val();
                comm.customer.execute("sendSms", {siteId: '1', typeId: 2, account: account});
                $("#validCode").val("");
            }

            //初始随机验证码
            $("#validCodeImg").attr("src", "/call/randomValidCode/create/?_=" + Math.random());
            $("#caosLogin").click(function () {
                user.showLianHePop({callback: function () {
                    window.location.href = '/call/customer/index/input/';
                }, "operateType": "share"});
            });
            // 提交
            $("#popImageSubmit").on("click", function () {
                $("#registForm").submit();
            });
            var validateReg = {
                submitHandler: function () {
                    Register.submit();
                },
                rules: {
                    "email": {
                        "required": true,
                        "emailOrPhone": true,
                        "rangelength": [ 1, 50 ],
                        "remote": {
                            "url": "/call/customer/unite/isValidateAccount/",
                            "type": "POST",
                            "data": { "account": function () {
                                return $("#popEmail").val();
                            } }
                        }
                    },
                    "customer.passwd": {
                        "required": true,
                        "rangelength": [6, 20],
                        "chrnum": true
                    },
                    "passwordRepeat": {
                        "required": true,
                        "equalTo": "#popCustomerPassword"
                    },
                    "validCode1": {
                        "required": true,
                        "remote": {
                            "url": "/call/randomValidCode/validCode/",
                            "type": "POST",
                            "xhrFields": {withCredentials: true},
                            "data": {   "validCode": function () {
                                            return $("#validCode1").val();
                                        },
                                        "type": "customer_verification"
                                    }
                        }
                    },
                    "validCode2": {
                        "required": true,
                        "remote": {
                            "url": "/call/customer/verification/validSmsValue/",
                            "type": "POST",
                            "xhrFields": {withCredentials: true},
                            "data": { "validCode": function () {
                                return $("#validCode2").val();
                            }, "type": "customer_verification", "mobile": function () {
                                return $("#popEmail").val();
                            }
                            }
                        }
                    }
                },
                messages: {
                    "email": {
                        "required": "请填写手机号或邮箱。",
                        "emailOrPhone": "请填写正确的手机号或邮箱。",
                        "rangelength": "最多可输入50个字符。",
                        "remote": function () {
                            var type = comm.checkAccountType($.trim($("#popEmail").val()));
                            if (type != "email") {
                                $("#getmesg").off("click");
                            }
                            return "此" + (type === "email" ? "邮箱" : "手机") + "已被注册。<span>想要 " +
                                "<a href='javascript:void(0)' class='login-btn'>登录</a> 或 " +
                                "<a href='/html/passport/reset_password_account.html' >恢复密码</a> 吗？</span>";
                        }
                    },
                    "customer.passwd": {
                        "required": "请填写密码。",
                        "rangelength": "密码长度请保持在{0}-{1}位！"
                    },
                    "passwordRepeat": {
                        "required": "请再次填写密码。",
                        "equalTo": "两次输入密码不一致！"
                    },
                    "customer.nickname": {
                        "required": "我们该如何称呼你!",
                        "rangelength": "昵称请在{0}-{1}个字符之间！"
                    },
                    "validCode1": {
                        "required": "请填写验证码。",
                        "remote": "错误的验证码！"
                    },
                    "validCode2": {
                        "required": "请填写短信验证码。",
                        "remote": "错误的验证码！"
                    },
                    "agree": "您没有同意使用协议！"
                },
                errorPlacement: function (error, element) {
                    validateShowErr(element, error);
                },
                success: function (element) {
                    validateHideErr(element);
                },
                onkeyup: false
            };
            // 较验
            $("#registForm").validate(validateReg);

            var Register = {
                form: '',
                submit: function () {
                    var params = {};

                    var account = $("#popEmail").val();
                    var data = {
                        account: $.trim(account),
                        type: comm.checkAccountType(account),
                        passwd: $.trim($("#popCustomerPassword").val()),
                        ref: $.trim($("#ref").val())};
                    params.paramJson = $.toJSON(data);
                    //comm.LightBox.showloading();
                    $.ajax({
                        type: 'POST',
                        url: "/call/web/user/userRegist/",
                        cache: false,
                        data: params,
                        dataType: 'json',
                        success: function (rep) {
                            if (rep) {

                                var customerId = rep.responseObject.responsePk;

                                if (customerId && customerId != "") {
                                    $.ajax({
                                        type: 'GET',
                                        url: "/call/customer/baseinfo/generatePersonPage/?customerId=" + customerId,
                                        cache: false,
                                        dataType: 'json',
                                        async: false,
                                        success: function (rep) {

                                        }
                                    });
                                }
                                //loadLoginUserBaseInfo();
                                //loadCustomerPic();
                                //comm.LightBox.hideloading();
                                var result = data.responseObject;
                                /*if(result.responseStatus){
                                 window.location.href = '/call/'+data.responseMessage;
                                 } */
                                if (t.isNeedRenZheng) {
                                    t.changeRenZheng();
                                } else {
                                    t.end();
                                }
                            } else {
                                alert("注册失败，请稍后重试");
                                //comm.LightBox.hideloading();
                            }
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            //comm.LightBox.hideloading();
                            // 通常 textStatus 和 errorThrown 之中
                            // 只有一个会包含信息
                            //this; // 调用本次AJAX请求时传递的options参数
                            // alert(textStatus + "   " +errorThrown);
                            alert("注册失败！");
                        }
                    });
                }
            }
        },
        showRenZhengType2Pop: function () {
            var t = this;
            t.showContiner();
            t.loadHtml("renzheng", function () {
                t.$container.find(".login_detail_ty").addClass("type2");
                t.bindRenZheng();
            });
        },
        //两步式注册弹窗
        showRegistType2Pop: function () {
            var t = this;
            t.isNeedRenZheng = true;
            t.showContiner();
            t.loadHtml("regist", function () {
                t.$container.find(".reg_detail").addClass("type2");
                t.bindRegist();
            });
        },
        //认证弹窗
        showRenZhengPop: function (options) {
            var t = this;
            if (options) {
                t.options = options;
            }
            t.showContiner();
            t.loadHtml("renzheng", function () {
                t.$container.find(".login_detail_ty").addClass("normal");
                t.bindRenZheng();
                //回显认证信息
                if (t.options.firstName && t.options.firstName != "") {
                    $("input[name=firstName]").val(t.options.firstName);
                }
                if (t.options.lastName && t.options.lastName != "") {
                    $("input[name=lastName]").val(t.options.lastName);
                }
                t.bindActiveInput();
            });
            if ('pushState' in history) {
                t.changeHistory("renzheng");
            }

        },
        // 跳转到完善认证
        changeWsRenZheng: function () {
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("wsrenzheng", function () {
                t.bindWsRenZheng();
                $(".LightBox-btns").empty();
            });
        },
        //完善认证资料
        showWsRenzhengPop: function (options) {
            var t = this;
            if (options) {
                t.options = options;
            }
            t.showContiner();
            t.loadHtml("wsrenzheng", function () {
                t.$container.find(".login_detail_ty").addClass("normal");
                t.bindWsRenZheng();
                //回显认证信息
                t.bindActiveInput();
            });
        },
        renderHospitalAreasMedicalTitle: function () {
            var t = this;
            //医院的自动搜索
            $("#company").lenovo({
                url: "/call/commdata/getHospitalList/",
                width: 340,
                showName: "hospitalName", //显示出的值
                //id:"hospitalAddress",   //自定义属性值
                //hiddenId:"address",    //自定义属性
            });
            left = $(".LightBox-container").offset().left;
            top1 = $(".LightBox-container").offset().top + 200 + 57;
            top2 = $(".LightBox-container").offset().top + 290 + 57;
            //专业多选设置
            $("#areasExpertise").xMenu({
                width: 400,
                left: -left,
                top: -top1,
                eventType: "click", //事件类型 支持focus click hover
                dropmenu: "#areasMenu",//弹出层
                dataUrl: "/call/commdata/getAreaExpertise/"//数据存放
            });
            //职称
            $("#medical_title").xMenunew({
                width: 400,
                left: -left,
                top: -top2,
                eventType: "click", //事件类型 支持focus click hover
                dropmenu: "#medicalMenu",//弹出层
                dataUrl: "/call/commdata/getMedicalTitleList/",//数据存放,
                showList: ".medicalShow"
            });
            if(t.customerAuth){
                var oldArr = t.customerAuth.medicalTitle.split(",");
                var medicalArr = [];
                for (var i = 0; i < oldArr.length; i++) {
                    if (oldArr[i]) {
                        medicalArr.push(oldArr[i].split("_"));
                    }
                }
                var html = "";
                var arr = [];
                for (var i = 0; i < medicalArr.length; i++) {
                    html += '<li rel=' + medicalArr[i][0] + ' class="current"><div class="link_l_bg"></div><div class="link_c_bg"><b>' + medicalArr[i][1] + '</b><p>×</p></div><div class="link_r_bg"></div></li>';
                    arr.push(medicalArr[i][0]);
                }
                setTimeout(function () {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr && arr != "") {
                            $("#medicalMenu dd li").removeClass("current");
                            $("#medicalMenu .select-info ul").empty();
                            for (var j = 0; j < arr.length; j++) {
                                var $cli = $("#medicalMenu dd li").filter("li[rel='" + arr[j] + "']");
                                $cli.addClass("current");
                                $("<li rel='" + arr[j] + "' class='current'>" + $cli.text() + "</li>").appendTo($("#medicalMenu .select-info ul"));
                            }
                        } else {
                            $("#medicalMenu .select-info").hide();
                        }
                    }
                }, 500);
                $(".medicalShow").html(html);
                }
        },
        //完善认证资料
        bindWsRenZheng: function () {
            var t = this;
            t.setTopRight();
            $("#company").val(t.customerAuth.company);
            var html = "";
            var oldArea = t.customerAuth.areasExpertise.split(",");
            var newArea = [];
            for (var i = 0, l = oldArea.length; i < l; i++) {
                if (oldArea[i]) {
                    newArea.push(oldArea[i].split("_"));
                }
            }
            for (var j = 0, nl = newArea.length; j < nl; j++) {
                if (newArea[j][0]) {
                    html += '<li rel=' + newArea[j][0] + ' class="current">' +
                        '<div class="link_l_bg"></div>' +
                        '<div class="link_c_bg">' +
                        '<b>' + newArea[j][1] + '</b>' +
                        '<p>×</p>' +
                        '</div><div class="link_r_bg"></div></li>';
                }
            }
            $("#proFieldshow").html(html);

            t.renderHospitalAreasMedicalTitle();

            $(".submit_but").bind("click", function () {
                var company = $("#company").val();
                var medical = $(".medicalShow li");
                var area = $("#proFieldshow li");
                var medicalTitle = "";
                $.each(medical, function (i, em) {
                    medicalTitle += $(em).attr("rel") + '_' + $(em).find("b").text() + ',';
                });
                var areasExpertise = "";
                $.each(area, function (i, em) {
                    areasExpertise += $(em).attr("rel") + '_' + $(em).find("b").text() + ',';
                });
                if (!company) {
                    t.showError("请填写医院")
                    return false;
                } else if (!medicalTitle) {
                    t.showError("请选择职称")
                    return false;
                } else if (!areasExpertise) {
                    t.showError("请选择专业")
                    return false;
                } else {
                    param = {
                        company: company,
                        medicalTitle: medicalTitle.substring(0, medicalTitle.length - 1),
                        areasExpertise: areasExpertise.substring(0, areasExpertise.length - 1),
                    };
                }
                var data = {paramJson: $.toJSON(param)};
                //comm.LightBox.showloading();
                $.ajax({
                    url: t.path.wsRenzhengSubmit,
                    cache: false,
                    data: data,
                    dataType: 'json',
                    type: "POST",
                    success: function (data) {
                        //comm.LightBox.hideloading();
                        if (data && data.responseObject) {
                            var rst = data.responseObject;
                            if (rst.responseStatus) {
                                t.end();
                                t.isRenZhengStatus = true;
                                t.privCheckSuccess();
                            } else {
                                if (rst.responseMessage) {
                                    alert(rst.responseMessage);
                                } else {
                                    alert("提交认证失败，请稍后重试");
                                }
                            }
                        }
                    },

                });
            });
        },
        // 绑定认证
        bindRenZheng: function () {
            var t = this;
            t.setTopRight();
            //$(".poshytip").poshytip();
            bind1('/v2/js/module/user/images/add-pic.png');       // 上传证件照片
            //bind2('/v2/js/module/user/images/shangchuan2.jpg');
            loadCertificate();  // 医师认证选项
            $("#whyCard").showCard({  // 为什么提示框
                content: $("<div class='why-card-pop'>唯医是一个专业的医生社区，为保障你的权益。<br/>我们需要认证你的医师身份。谢谢配合。</div>"),
                defaultPostion: "top"
            });
            t.bindActiveInput();
            t.renderHospitalAreasMedicalTitle();

            t.$container.find(".pass").on("click", function () {    // 跳过
                window.location.href = "/";          // TODO
            })
            
            var form = t.$container.find("form");
            // 较验
            form.validate({
                submitHandler: function () {
                    var param;
                    // 判断图片是否保存成功
                    var qualificationPath = t.$container.find("#qualificationPath");
                    var certificatesPath = t.$container.find("#certificatesPath");
                    var attTypes = $("input[name=certificate]");
                    var attType = 1;
                    var company = $("#company").val();
                    var medical = $(".medicalShow li");
                    var area = $("#proFieldshow li");
                    var flag = true;
                    for (var i = 0; i < attTypes.length; i++) {
                        var at = attTypes[i];
                        if (at.checked || at.checked === 1) {
                            attType = at.value;
                            break;
                        }
                    }
                    var medicalTitle = "";
                    $.each(medical, function (i, em) {
                        medicalTitle += $(em).attr("rel") + '_' + $(em).find("b").text() + ',';
                    });
                    var areasExpertise = "";
                    $.each(area, function (i, em) {
                        areasExpertise += $(em).attr("rel") + '_' + $(em).find("b").text() + ',';
                    });
                    if (certificatesPath.val()!=="" ) {           //       || qualificationPath.val()
                        validateHideErr(t.$container.find(".photo_error"));
                    }
                    if (medicalTitle) {
                        validateHideErr(t.$container.find(".medical_error"));
                    }
                    if (areasExpertise) {
                        validateHideErr(t.$container.find(".area_error"));
                    }
                    if (certificatesPath.val() === "" ) {           //&& qualificationPath.val() === ""
                        validateShowErr(t.$container.find(".photo_error"),"<label>请上传证件照</label>");
                        flag = false;
                    }
                    if (!medicalTitle) {
                        validateShowErr(t.$container.find(".medical_error"),"<label>请选择职称</label>");
                        flag = false;
                    }
                    if (!areasExpertise) {
                        validateShowErr(t.$container.find(".area_error"),"<label>请选择专业</label>");
                        flag = false;
                    }
                    if(flag){
                        param = {
                            lastName: t.$container.find("input[name=lastName]").val(),
                            firstName: t.$container.find("input[name=firstName]").val(),
                            attType: attType,
                            attPath: t.$container.find("input[name=certificatesPath]").val(),
                            attCode: t.$container.find("input[name=attCode]").val(),

                            company: company,
                            medicalTitle: medicalTitle.substring(0, medicalTitle.length - 1),
                            areasExpertise: areasExpertise.substring(0, areasExpertise.length - 1),
                        };
                        var data = {paramJson: $.toJSON(param)};
                        //comm.LightBox.showloading();
                        $.ajax({
                            url: t.path.renzhengSubmit,
                            cache: false,
                            data: data,
                            dataType: 'json',
                            type: "POST",
                            success: function (data) {
                                // TODO: 认证成功后应当作何处理
                                //comm.LightBox.hideloading();
                                if (data.responseObject.responseStatus) {
                                    t.end();
                                    t.isRenZhengStatus = true;
                                    t.privCheckSuccess();
                                } else {
                                    if (data.responseObject.responseMessage) {
                                        alert(rst.responseMessage);
                                    } else {
                                        alert("提交认证失败，请稍后重试");
                                    }
                                }
                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                // 通常 textStatus 和 errorThrown 之中
                                // 只有一个会包含信息
                                //this; // 调用本次AJAX请求时传递的options参数
                                alert(textStatus + "   " + errorThrown);
                            }
                        });
                    }
                },
                rules: {
                    "lastName": {
                        "required": true,
                        "rangelength": [1, 50],
                        "isChinese": true
                    },
                    "firstName": {
                        "required": true,
                        "rangelength": [1, 50],
                        "isChinese": true
                    },
                    "attCode": {
                        "required": true,
                        "rangelength": [1, 50],
                        "chrnum": true
                    },
                    "company": {
                        "required": true,
                        "rangelength": [1, 200]
                    }
                },
                messages: {
                    "lastName": {
                        "required": "您贵姓？",
                        "rangelength": "您贵姓？",
                        "isChinese": "您贵姓？"
                    },
                    "firstName": {
                        "required": "你的大名是？",
                        "rangelength": "你的大名是？",
                        "isChinese": "你的大名是？"
                    },
                    "certificatesCode": {
                        //"required" : "请填写正确的身份证件号。",
                        "zhengjian": "请填写正确的身份证件号。"
                    },
                    "attCode": {
                        "required": "请填写正确的证件号码。",
                        "rangelength": "请填写正确的证件号码。",
                        "chrnum": "请填写正确的证件号码。"
                    },
                    "company": {
                        "required": "请填写医院名称。",
                        "rangelength": "医院最大长度200个字符",
                    }
                },
                errorPlacement: function (error, element) {
                    validateShowErr(element, error);
                },
                success: function (element) {
                    validateHideErr(element);
                },
                onkeyup: false
            });
            // 提交
            t.$container.find(".submit_but").on("click", function () {
                $("#certificate").attr("disabled", false);
                form.submit();
                $("#certificate").attr("disabled", true);
            });
            // 下拉框效果
            $(".select_box").click(function (event) {
                event.stopPropagation();
                $(this).find(".option").toggle();
                $(this).parent().siblings().find(".option").hide();
            });
            $(document).click(function (event) {
                var eo = $(event.target);
                if ($(".select_box").is(":visible") && eo.attr("class") != "option" && !eo.parent(".option").length)
                    $('.option').hide();
            });
            /*赋值给文本框*/
            $(".option a").each(function (index, obj) {
                $(this).click(function () {
                    var value = $(this).text();
                    $(this).parent().siblings(".select_txt").val(value)
                        .siblings(".select_value").val(index + 1);
                });
            });
            // 下拉框效果 end
            //加载医师证件选项
            function loadCertificate() {
                var param = {roleId: 6, typeId: 1}
                $.ajax({
                    type: 'POST',
                    url: "/call/comm/data/roleconfig/getDataRoleConfigs/",
                    data: {paramJson: $.toJSON(param)},
                    async: false,
                    dataType: "json",
                    timeout: 10000,
                    success: function callback(rep) {
                        var html = "";
                        if (rep && rep.responseObject && rep.responseObject.responseStatus) {
                            var data = rep.responseObject.responseMessage;
                            if (data && data.length > 1) {
                                $.each(data, function (index, i) {
                                    html += '<div value="' + i.refId + '">' + i.refValue + '</div>';
                                });
                            }
                        }
                        html += '<p class="clear"></p>';
                        var rzNumType = t.$container.find(".rz-num-type");
                        rzNumType.html(html);
                        rzNumType.find("[value=6]").addClass("on");
                        rzNumType.find(":last").addClass("last");
                        rzNumType.find("div").on("click", function () {
                            $(this).addClass("on").siblings().removeClass("on");
                            t.$container.find("#certificate").val($(this).attr("value"));
                        });
                    }
                });
            }
        },
        // 联合登录
        showLianHePop: function (options) {
            var t = this;
            if (options) {
                t.options = options;
            }
            t.loadHtml("lianhe", function () {
                t.bindCAOS();
            });
        },
        // CAOS登录绑定
        bindCAOS: function () {
            var t = this;
            t.setTopRight();
            t.bindActiveInput();
            t.$container.find("form").validate({
                submitHandler: function () {
                    t.caosLoginSubmit();
                },
                rules: {
                    "email": {
                        "required": true,
                        "emailOrPhone": true,
                        "rangelength": [ 1, 50 ]
                    },
                    "passwd": {
                        "required": true,
                        "rangelength": [ 6, 20 ]
                    }
                },
                messages: {
                    "email": {
                        "required": "请填写你在CAOS的用户名",
                        "emailOrPhone": "请输入正确的手机号或邮箱。",
                        "rangelength": "邮件地址不长于50位！"
                    },
                    "passwd": {
                        "required": "请填写你在CAOS的密码。",
                        "rangelength": "密码长度在{0}-{1}位！"
                    }
                },
                errorPlacement: function (error, element) {
                    validateShowErr(element, error);
                },
                success: function (element) {
                    validateHideErr(element);
                },
                onkeyup: false
            });

            t.$container.find(".login_but").on("click", function () {
                t.$container.find("form").submit();
            });
        },
        // 联合登录提交
        caosLoginSubmit: function () {
            var t = this;
            var data = {};
            var rememberMe = $("#rememberMe") != null ? $("#rememberMe").attr("checked") : 1;
            var password = t.$container.find("[name=passwd]").val();
            var email = t.$container.find("[name=email]").val();
            var type = comm.checkAccountType(email);
            data.j_username = "caos;" + email + ";" + password + ";" + type;
            data.j_password = password;
            data.rememberMe = (rememberMe === 'checked' || rememberMe === '1' || rememberMe === 'true') ? true : false;
            //comm.LightBox.showloading();
            $.ajax({
                url: t.path.caosLoginSubmit,
                type: "POST",
                data: data,
                dataType: "json",
                success: function (data) {
                    //comm.LightBox.hideloading();
                    var result = data.responseObject;
                    var resStatus = result.responseStatus;
                    var resCode = result.responseCode;
                    var resMessage = result.responseMessage;
                    if (!resStatus && resCode === "0A1004") { //完善资料
                        t.responseMessage = resMessage;
                        t.caosCustomerId = result.responsePk;
                        t.changeWanShanPop(email);
                    } else if (!resStatus) {         // 登录失败
                        t.showError("不正确的账号或密码,请重新输入！");  //resMessage
                    } else {
                        //登录成功

                        if (t.isNeedRenZheng) {	// 需要认证
                            t.checkRenZheng();
                        } else {	//	不需认证
                            t.privCheckSuccess();
                            t.end();
                        }
                        if (resMessage != null && resMessage != "" && resCode === "0B0004") {
                            //window.top.location.href = sufix;
                        } else {
                            //window.top.location.href = '/call/customer/index/input/?_=' + Math.random();
                        }
                    }
                }
            });
        },
        //
        showWanShanPop: function () {
            var t = this;
            t.showContiner();
            t.loadHtml("wanshan", function () {
                t.bindWanShan();
            });
        },
        changeWanShanPop: function (username) {
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("wanshan", function () {
                t.bindWanShan(username);
            });
        },
        bindWanShan: function (username) {
            var t = this;
            t.setTopRight();
            t.$container.find(".login_lh").html("你好," + t.responseMessage.name);
            t.$container.find(".tishi span").text(username);
            t.bindActiveInput();
            var a = t.$container.find("#wanShanForm").validate({
                submitHandler: function () {
                    t.wanShanSubmit(username);
                },
                rules: {
                    "wanshanPasswd": {
                        "required": true,
                        "rangelength": [ 6, 20 ]
                    }
                },
                messages: {
                    "wanshanEmail": {
                        "required": "你还没填写邮箱。",
                        "email": "不像是有效的电子邮箱。",
                        "rangelength": "邮件地址不长于50位！"
                    },
                    "wanshanPasswd": {
                        "required": "请填写密码。",
                        "rangelength": "密码长度在{0}-{1}位！"
                    }
                },
                errorPlacement: function (error, element) {
                    validateShowErr(element, error);
                },
                success: function (element) {
                    validateHideErr(element);
                },
                onkeyup: false
            });
            t.$container.find(".submit_but").on("click", function () {
                t.$container.find("form").submit();
            });
        },
        wanShanSubmit: function (userName) {
            var t = this;
            var email = userName;
            var type = comm.checkAccountType(email);
            var param = {
                type: type,
                email: email,
                account: email,
                passwd: t.$container.find("[name=wanshanPasswd]").val(),
                nickname: t.$container.find("[name=wanshanNickname]").val(),
                caosCustomerId: t.caosCustomerId
                //caosId:t.responseMessage.responsePk
            };
            var data = { "paramJson": $.toJSON(param)};
            //comm.LightBox.showloading();
            $.ajax({
                url: t.path.userValidAndBind,
                type: "POST",
                data: data,
                dataType: "json",
                success: function (data) {
                    //comm.LightBox.hideloading();
                    var result = data.responseObject;
                    if (result) {
                        if (result.responseStatus) {
                            if (t.isNeedRenZheng) {	// 需要认证
                                t.checkRenZheng();
                            } else {	//	不需认证
                                t.privCheckSuccess();
                                t.end();
                            }
                        } else {
                            t.showError("密码不正确。想要 <a href='/html/passport/reset_password_account.html'>恢复密码</a> 吗？");
                        }
                    }
                }
            });
        },
        //键盘操作
        keyboardAction: function () {
            var t = this;
            var KEYCODE_ESC = 27;
            var KEYCODE_ENTER = 13;
            var keycode = event.keyCode;
            var key = String.fromCharCode(keycode).toLowerCase();
            if (keycode === KEYCODE_ESC) {              //  || key.match(/x|o|c/   // 关闭
                t.end();
            }
            if (keycode === KEYCODE_ENTER) {             // 提交
                if (t.form != null) {
                    t.form.submit();
                }
            }
        },
        enableKeyboard: function () {
            $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
        },
        //禁用键盘事件
        disableKeyboard: function () {
            $(document).off('.keyboard');
        },
        end: function () {
            var t = this;
            comm.LightBox.hide();
            $('select, object, embed').css({
                visibility: "visible"
            });
            if (t.$container != null) {
                t.$container.remove();
            }
            if (t.$rightTop != null) {
                t.$rightTop.remove();
            }
            t.clearError();
            t.disableKeyboard();
            t.isRunning = false;
            document.body.style.overflow = "auto";
            if ('pushState' in history) {
                t.historyChanged && history.back();
            }
        },
        // 载入页面
        loadHtml: function (htmlUrl, callback) {
            var t = this;
            document.body.style.overflow = "hidden";
            comm.LightBox.show(90, "#EFEFF4");
            t.$container.html(t.template[htmlUrl]());
            t.form = t.$container.find("form");
            if (t.form.length === 0) {
                t.form = null;
            } else {
                t.enableKeyboard();
            }
            var pop = t.$container.find(".pop-up").css({
                "margin": "0 auto",
                "width": t.$container.find(".pop-up>div").width()
            });
            pop.on("click", function (e) {
                comm.stopBubble(e);
            });
            pop.on("click", ".caos_login", function () {	// 绑定联合登录
                t.changeCAOS();
            });
            comm.setCenter(t.$container);
            callback && callback();
            t.$container.find("input[placeholder], textarea[placeholder]")
                .placeholder();	// 表单默认值 插件
            t.$body.css("overflow", "hidden");
        },
        setTopRight: function () {
            var t = this;
            t.$rightTop.css({
                top: '0px',
                right: '0px',
                zIndex: 10008
            });
        },
        // 向顶部右侧添加注册按钮
        appendRegistBtn: function () {
            var t = this;
            t.$rightTop.find(".LightBox-btns").empty().append("<div class='LightBox-regist'>注册</div>");
            t.$rightTop.find(".LightBox-regist").on("click", function (e) {
                t.changeRegist();
                e.stopPropagation();
            });
            t.setTopRight();
        },
        // 向顶部右侧添加跳过按钮
        appendSkipBtn: function () {
            var t = this;
            t.$rightTop.find(".LightBox-btns").empty().append("<div class='LightBox-skip'></div>");
            t.$rightTop.find(".LightBox-skip").on("click", function (e) {
                t.changeRegist();
                e.stopPropagation();
            });
            t.setTopRight();
        },
        // 向顶部右侧添加登录按钮
        appendLoginBtn: function () {
            var t = this;
            t.$rightTop.find(".LightBox-btns").empty().append("<div class='LightBox-login'>登录</div>");
            t.$rightTop.find(".LightBox-login").on("click", function (e) {
                t.changeLogin();
                if (e && e.stopPropagation) {
                    // 因此它支持W3C的stopPropagation()方法
                    e.stopPropagation();
                } else {
                    //否则，我们需要使用IE的方式来取消事件冒泡
                    window.event.cancelBubble = true;
                }
            });
            t.setTopRight();
        },
        changeRegist: function () {
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("regist", function () {
                if (t.isNeedRenZheng) {
                    t.$container.find(".reg_detail").addClass("type2");
                } else {
                    t.$container.find(".reg_detail").addClass("normal");
                }
                t.bindRegist();
            });
        },
        changeCAOS: function () {
            var t = this;
            t.$container.empty();
            t.clearError();

            t.loadHtml("lianhe", function () {
                t.bindCAOS();
            });
        },
        changeLogin: function () {
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("login", function () {
                t.bindLogin();
            });
        },
        loginSubmit: function () {
            var t = this;
            var password = t.$container.find("[name=passwd]").val(), data = {};
            var email = t.$container.find("[name=email]").val();
            var type = comm.checkAccountType(email);
            data.j_username = "website;" + email + ";" + password + ";" + type;
            data.j_password = password;
            data.rememberMe = 1;
            comm.LightBox.showloading();
            $.ajax({
                url: t.path.loginSubmit,
                cache: false,
                data: data,
                dataType: 'json',
                type: "POST",
                success: function (data) {
                    comm.LightBox.hideloading();
                    // 不正确的邮箱或密码,请重新输入！
                    var result = data.responseObject;
                    if (!result.responseStatus) {
                        t.showError(result.responseMessage);
                    } else {
                        t.loginSuccess(result);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 通常 textStatus 和 errorThrown 之中
                    // 只有一个会包含信息
                    //this; // 调用本次AJAX请求时传递的options参数
                    alert(textStatus + "   " + errorThrown);
                }
            });
        },
        // 跳转到重置密码
        changeResetPwd: function () {
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("resetPwd", function () {
                t.bindResetPwd();
            });
        },
        // 跳转到医师认证
        changeRenZheng: function () {
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("renzheng", function () {
                t.bindRenZheng();
                $(".LightBox-btns").empty();
            });
        },
        // 绑定重置密码界面
        bindResetPwd: function () {
            var t = this;
            $("#resetForm").validate({
                submitHandler: function () {
                    t.doResetPost();
                },
                onkeyup: false,
                rules: {
                    "email": {
                        "required": true,
                        "email": true
                    }
                },
                messages: {
                    "email": {
                        "required": "登录邮箱必须输入！",
                        "email": "请输入正确的邮箱！"
                    }
                },
                showErrors: poshyTipShowErrors,
                hideErrors: poshyTipHideErrors,
                errorClass: "tip-yellow"
            });
            t.$container.find(".submit_but").on("click", function () {
                $("#resetForm").submit();
            });
        },
        // 点击重置提交
        doResetPost: function () {
            var t = this;
            t.sendReset();
            t.loadHtml("afterReset", function () {
            });
        },
        // 发送重置密码请求
        sendReset: function () {
            //$.get("")
        },
        // 隐藏错误提示框
        clearError: function () {
            $("div.tip-yellow").remove();
        },
        //	检查
        ensurePrivJson: function () {
            var t = this;
            t.privJson = operate_auth_json.privJson;
            t.checkPriv();
        },
        //	比较权限
        checkPriv: function () {
            var t = this, operateItem;
            if (t.options.operateType === "") {
                return;
            }
            for (var i = 0, l = t.privJson.length; i < l; i++) {
                operateItem = t.privJson[i];
                if (operateItem.opName === t.options.operateType) {
                    break;
                }
            }
            t.isNeedLogin = operateItem.opAuth[0];
            t.isNeedRenZheng = operateItem.opAuth[1];
            if (!t.isNeedLogin) {	// 无需登录
                t.privCheckSuccess();
            } else {				// 需要登录
                t.checkStatus();	// 检查登录状态
            }
        },
        // 登录成功后
        loginSuccess: function (result) {
            var t = this;
            t.isLoginStatus = true;
            $(".nav_list a:eq(0)").attr("href", "/call/customer/index/input/");
            if (typeof t.userInfo === "undefined" || $.isEmptyObject(t.userInfo)) {
                var userInfo = t.getCustomerUnite();
                t.userInfo = userInfo;

                if (userInfo != null && userInfo != undefined) {     // 更新头部用户状态 修改样式，加载头像 设置隐藏域
                    //$(".header .search").removeClass("search").addClass("search_login");
                    //loadLoginUserBaseInfo();    //TODO:
                    //loadCustomerPic();
                }
            }
            if (t.isNeedRenZheng) {	// 需要认证
                t.checkRenZheng();
            } else {	//	不需认证
                t.privCheckSuccess();
                t.end();
            }
        },
        checkRenZheng: function () {
            var t = this;
            //comm.LightBox.showloading();
            $.ajax({
                url: t.path.getRenZheng,
                dataType: "json",
                type: "post",
                success: function (data) {
                    //comm.LightBox.hideloading();
                    if (data === null || data == "" || data.responseObject === undefined || $.isEmptyObject(data.responseObject)) {	//未认证
                        if (t.$container && t.$container.is(":visible")) {
                            // 之前在登录界面的话
                            if (t.options.isGuide) {//需要弹出引导层
                                $(document).scrollTop(0);
                                $(".mask_body").remove();
                                $(t.guideLayer('renzheng')).appendTo(t.$body);
                                t.$body.css("overflow", "hidden");
                                $(".renzheng_mask").live("click", function () {
                                    t.showRenZhengPop();
                                    t.$body.css("overflow", "auto");
                                });
                            }
                            t.changeRenZheng();	//跳转到认证界面

                        } else {
                            if (t.options.isGuide) {//需要弹出引导层
                                $(document).scrollTop(0);
                                $(t.guideLayer('renzheng')).appendTo(t.$body);
                                t.$body.css("overflow", "hidden");
                                $(".renzheng_mask").live("click", function () {
                                    t.showRenZhengPop();
                                    t.$body.css("overflow", "auto");
                                });
                            } else {
                                t.showRenZhengPop();
                            }
                        }
                    } else {
                        var rspObj = data.responseObject;
                        t.customerAuth = rspObj;
                        var customerId = rspObj.customerId,
                            state = rspObj.state,
                            firstName = rspObj.firstName,
                            lastName = rspObj.lastName,
                            company = rspObj.company,
                            areasExpertise = rspObj.areasExpertise,
                            medicalTitle = rspObj.medicalTitle;

                        if (customerId <= 0 || state === 3 || state === -1) {
                            // 未申请  || 被拒绝
                            //alert("您的认证申请正在审枋中。无法进行相关操作");
                            if (t.$container && t.$container.is(":visible")) {
                                // 之前在登录界面的话
                                t.changeRenZheng();	//跳转到认证界面
                            } else {
                                t.options = $.extend(t.options, {firstName: firstName, lastName: lastName});
                                t.showRenZhengPop();
                            }
                        } else if (state === 1 || state === 2) {
                            //认证已经通过，此时不允许再次认证
                            if (!company || !areasExpertise || !medicalTitle) {
                                //认证已经通过，但资料未完善。
                                if (t.$container && t.$container.is(":visible")) {// 之前在登录界面的话
                                    t.changeWsRenZheng();
                                    if (t.options.isGuide) {//需要弹出引导层
                                        $(document).scrollTop(0);
                                        $(".mask_body").remove();
                                        $(t.guideLayer('ws')).appendTo(t.$body);
                                        t.$body.css("overflow", "hidden");
                                        $(".ws_mask").live("click", function () {
                                            t.showWsRenzhengPop();
                                        });
                                    }
                                } else {
                                    if (t.options.isGuide) {//需要弹出引导层
                                        $(document).scrollTop(0);
                                        $(".mask_body").remove();
                                        $(t.guideLayer('ws')).appendTo(t.$body);
                                        t.$body.css("overflow", "hidden");
                                        $(".ws_mask").live("click", function () {
                                            t.showWsRenzhengPop();
                                        });
                                    } else {//不需要
                                        t.showWsRenzhengPop();
                                    }
                                }
                            } else {
                                //认证已经通过，且资料都完善。
                                t.isRenZhengStatus = true;
                                t.end();
                                t.privCheckSuccess();
                            }

                        } else if (state === 0) {
                            //已经提交申请 未审核 ，此时不允许再次认证
                            //alert("你已经提交过认证，不能重复认证")
                            t.end();
                        }
                    }
                }
            });
        },
        //	权限较验成功后处理
        privCheckSuccess: function () {
            var t = this;
            //loadLoginUserBaseInfo();
            //loadCustomerPic();
            if (typeof t.userInfo === "undefined" || $.isEmptyObject(t.userInfo)) {
                var userInfo = t.getCustomerUnite();
                t.userInfo = userInfo;

                if (userInfo != null) {     // 更新头部用户状态 修改样式，加载头像 设置隐藏域
                    $(".header .search").removeClass("search").addClass("search_login");

                    $(".header .login").removeClass("login").addClass("login_user").html('<div class="tuichu"><a href="javascript:logout();">退出</a></div><div class="user_name"><a href="/call/customer/home/input/?customerId=' + userInfo.customerId + '">' + userInfo.nickname + ' </div>');
                    $("#sesCustomerId").val(userInfo.customerId);
                    $("#sesNickname").val(userInfo.nickname);
                }
            }
            if (typeof t.options != "undefined" && typeof t.options.callback != "undefined") {
                t.options.callback();
            } else {
                window.location.href = "/";
            }
            t.isRunning = false;
        },
        //主方法
        login: function (options) {
            var t = this;
            t.$body = $("body");
            if (t.isRunning) {
                return;
            } else {
                t.isRunning = true;
                if (!options) {
                    return;
                } else {
                    t.options = options;
                    if (options.operateType != "" && options.callback != null) {
                        t.ensurePrivJson();
                    }
                }
            }
        },
        showError: function (msg) {
            var t = this;
            var errorMsg = t.$container.find(".errorMsg");
            if (errorMsg.length === 0) {
                errorMsg = $('<div class="error_bg errorMsg"><img src="/v2/js/module/user/images/jinggao2.png" alt=""/><div class="error_biao"></div></div>');
                t.$container.find("form").prepend(errorMsg);
            }
            errorMsg.find(".error_biao").html(msg);
            errorMsg.show();
            t.errorMsg = errorMsg;
        },
        hideError: function () {
            var t = this;
            t.errorMsg.hide();
        },
        getLoginStatus: function () {
            var t = this;
            $.ajax({
                url: t.path.checkUserStatus,
                dataType: "json",
                type: "post",
                success: function (result) {
                    // comm.LightBox.hideloading();
                    if (result.responseObject.responseStatus) {//已登录
                        t.isLoginStatus = true;
                    } else {
                        t.isLoginStatus = false;
                    }
                }
            });
        },

        getRenZhengStatus: function () {
            var t = this;
            $.ajax({
                url: t.path.getRenZheng,
                dataType: "json",
                type: "post",
                success: function (result) {
                    if (!$.isEmptyObject(result) && (result.responseObject.state === 1 || result.responseObject.state === 2)) {//已登录
                        t.isRenZhengStatus = true;
                    }
                }
            });
        },
        bindActiveInput: function () {
            var t = this;
            t.$container.find('input').on("focus", function () {
                $(this).parent().addClass("hover");
            });
            t.$container.find('input').on("blur", function () {
                $(this).parent().removeClass("hover");
            });
        },
        logout: function (obj) {
            $.get("/call/web/user/logout/", function () {
                obj && obj();
            });
        }
    };
    controller.init();
    return {
        login: function (obj) {
            controller.login(obj);
        },
        logout: function (obj) {
            controller.logout(obj);
        }
    };
};
var user = module.user();