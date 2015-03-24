/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/19.
 */
module.user = function(Obj){
    var defaults = {

    };


    var controller = {

        config : {},


        path : {

        },
        template : {
            login: function () {
                return '<div class="pop-up">' +
                    '                    <div class="reg_detail">' +
                    '                    <div class="login">' +
                    '                        <div class="login_content">' +
                    '                                               <div class="login_logo"><img src="http://img00.allinmd.cn/login_v2/logo.png"/></div>' +
                    '                            <form action="" id="popLoginForm">' +
                    '                                <div class="error_bg"><img src="http://img00.allinmd.cn/login_v2/false.jpg" alt=""/>' +
                    '                                    <div class="error_biao">不正确的账号或密码,请重新输入！</div>                </div>' +
                    '                                <div class="inputParent">' +
                    '                                    <div class="login_input kuang">' +
                    '                                        <input type="text" name="email" placeholder="邮箱或已验证手机" maxlength="50"/>' +
                    '                                    </div>' +
                    '                                    <div class="l_warning"></div>' +
                    '                                </div>' +
                    '                                <div class="inputParent">' +
                    '                                    <div class="password_input kuang">' +
                    '                                        <input type="password" name="passwd" placeholder="你的密码" maxlength="20"/>' +
                    '                                    </div>' +
                    '                                    <div class="l_warning"></div>' +
                    '                </div>' +
                    '                    <div class="login_but"><img src="http://img00.allinmd.cn/login_v2/login_but.png"/></div>' +
                    '                                <div class="forget_password font_song" style="text-align: right">' +
                    '                                       <a         href="http://www.allinmd.cn/html/passport/reset_password_account.html">忘记密码？</a>' +
                    '                                </div>' +
                    '                                <div class="clear"></div>' +
                    '                                <div class="or"><img src="http://img00.allinmd.cn/login_v2/or.jpg"/></div>' +
                    '                                <div class="three_login font_song">第三方帐户登录</div>' +
                    '            <div class="caos_login"><img src="http://img00.allinmd.cn/login_v2/caos_login.jpg"/></div>' +
                    '                            </form>' +
                    '                        </div>' +
                    '                    </div> ' +
                    '                    </div>' +
                    '                </div>';
            },
            regist: function () {
                return ' <div class="pop-up">'+
                    '    <div class="reg_detail">'+
                    '    	<form action="" id="registForm">'+
                    '            <!--新版-->'+
                    '            <div class="login">'+
                    '                <div class="login_content">'+
                    '                    <div class="login_logo"><img src="http://img00.allinmd.cn/login_v2/logo.png"/></div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="login_input kuang ">'+
                    '                            <div class="jinggao"><img src="http://img00.allinmd.cn/login_v2/jinggao.jpg"/></div>'+
                    '                            <div class="ok"><img src="http://img00.allinmd.cn/login_v2/true.jpg"/></div>'+
                    '                            <input type="text" maxlength="50" name="email" id="popEmail" placeholder="电子邮箱或手机号码"/>'+
                    '                        </div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="jg_text font_song" style="display:none;">'+
                    '                <span>'+
                    '                    此邮件地址已被注册。</span>'+
                    '                        想要 <a href="/call/customer/unite/login/">登录</a>'+
                    '                        或 <a'+
                    '                            href="/html/passport/reset_password_account.html">恢复密码</a> 吗？'+
                    '                    </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="password_input kuang">'+
                    '                            <div class="jinggao"><img src="http://img00.allinmd.cn/login_v2/jinggao.jpg"/></div>'+
                    '                            <div class="ok"><img src="http://img00.allinmd.cn/login_v2/true.jpg"/></div>'+
                    '                            <input type="password" name="customer.passwd"'+
                    '                                   maxlength="20"  id="popCustomerPassword" placeholder="设置密码"/>'+
                    '                        </div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="password_input kuang">'+
                    '                            <div class="jinggao"><img src="http://img00.allinmd.cn/login_v2/jinggao.jpg"/></div>'+
                    '                            <div class="ok"><img src="http://img00.allinmd.cn/login_v2/true.jpg"/></div>'+
                    '                            <input type="password" name="passwordRepeat" id="passwordRepeat"'+
                    '                                   maxlength="20"  placeholder="确认密码"/>'+
                    '                        </div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="yzm inputParent" id="emailYZM"  >'+
                    '                        <div class="jinggao"><img src="http://img00.allinmd.cn/login_v2/jinggao.jpg"/></div>'+
                    '                        <div class="ok"><img src="http://img00.allinmd.cn/login_v2/true.jpg"/></div>'+
                    '                        <div class="yzm_input kuang">'+
                    '                            <input type="text" maxlength="6" name="validCode1" id="validCode1" placeholder="验证码"/>'+
                    '                        </div>'+
                    '                        <div class="yzm_img">'+
                    '                            <img src="http://www.allinmd.cn/call/randomValidCode/create/" width="101" height="50" id="validCodeImg" />'+
                    '                        </div>'+
                    '                        <div class="yzm_text font_song">'+
                    '                            <a alt="再换一张" id="changeValidCode" href="javascript:void(0)">换一换</a>'+
                    '                        </div>'+
                    '                        <div class="clear">'+
                    '                        </div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="yzm inputParent" id="phoneYZM" style="display: none">'+
                    '                        <div class="jinggao"><img src="http://img00.allinmd.cn/login_v2/jinggao.jpg"/></div>'+
                    '                        <div class="ok"><img src="http://img00.allinmd.cn/login_v2/true.jpg"/></div>'+
                    '                        <div class="yzm_input kuang">'+
                    '                            <input type="text"  maxlength="6" id="validCode2" name="validCode2" placeholder="短信验证码"/>'+
                    '                        </div>'+
                    '                        <div class="phone_img">'+
                    '                            <div id="getmesg">'+
                    '                                <div class="btn">获取短信验证码</div>'+
                    '                            </div>'+
                    '                        </div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="clear"></div>'+
                    '                    <div class="login_but" id="popImageSubmit"><img src="http://img00.allinmd.cn/login_v2/reg_but.jpg"/></div>'+
                    '                    <div class="tk_text font_song">我已阅读并同意'+
                    '                        <a href="http://www.allinmd.cn/html/help/service.html" target="_blank">服务条款</a>'+
                    '                        和'+
                    '                        <a href="http://www.allinmd.cn/html/help/statement.html" target="_blank">隐私声明</a></div>'+
                    '                </div>'+
                    '            </div>'+
                    '          '+
                    '    	</form>'+
                    '    </div>   '+
                    '       '+
                    '</div>       ' ;
            },
            renzheng: function () {
                return ' <div class="pop-up">'+
                    ' 	<div class="login_detail_ty">'+
                    '            <div class="login" style="">'+
                    '                <div class="login_content">'+
                    '                    <div class="login_lh">医师认证</div>'+
                    '                    <div class="tishi">欢迎加入唯医。请认证你的医师身份。<a href="#" class="poshytip" title="唯医是一个专业的医生社区，为保障你的权益。<br/>我们需要认证你的医师身份。谢谢配合。">为什么？</a></div>'+
                    '                    <form id="renzhengForm">'+
                    '                    <div class="name_input">'+
                    '                        <div class="inputParent">'+
                    '                            <div class="xing_input"><input type="text"  maxlength="50"   placeholder="姓氏" name="lastName" tipCfg="{alignX:\'top\'}" /></div>'+
                    '                            <div class="l_warning"></div>'+
                    '                        </div>'+
                    '                        <div class="inputParent">'+
                    '                            <div class="ming_input"><input type="text" maxlength="50"  placeholder="名字" name="firstName" /></div>'+
                    '                            <div class="l_warning"></div>'+
                    '                        </div>'+
                    '                        <div class="clear"></div>'+
                    '                    </div>'+
                    '                    <div class="radio_input">'+
                    '		                <div class="rz-num-type" style="margin-left:10px;">'+
                    '					        '+
                    '				        </div>'+
                    '				        <div class="clear"></div>'+
                    '		            </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="rz_input"><input type="text" maxlength="50" placeholder="证件号码"   name="attCode" /></div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '              '+
                    '                    <div class="sc_img_photo">'+
                    '				            <div class="sc_img01" id="uploadPic1" style="float:left ">'+
                    '                                <input type="file" data-role=\'none\'   id="file1" name="file" />'+
                    '                            </div>'+
                    '				    </div>'+
                    '                    <div class="l_warning photo_error">'+
                    '                        <span><label class="error" style="display:none">请上传证件照</label></span>'+
                    '                    </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="rz_input"><input type="text" placeholder="医院"   name="company" id="company"/></div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="rz_input">'+
                    '                          <div class="lk_input" id="medical_title" >'+
                    '                            <div class="input_name">职称</div>'+
                    '                            <ul class="medicalShow"></ul>'+
                    '                          </div>'+
                    '                        </div>'+
                    '                        <div class="l_warning medical_error">'+
                    '                        	<span><label class="error" style="display:none">请选择职称</label></span>'+
                    '                        </div>'+
                    '                    </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="rz_input">'+
                    '                           <div class="lk_input" id="areasExpertise">'+
                    '                               <div class="input_name">专业</div>'+
                    '                               <ul id="proFieldshow"></ul>'+
                    '                           </div>'+
                    '                          </div>'+
                    '                        <div class="l_warning area_error">'+
                    '                        	<span><label class="error" style="display:none">请选择专业</label></span>'+
                    '                        </div>'+
                    '                    </div>'+
                    '                    '+
                    '                    <div class="login_but submit_but"><img src="http://img00.allinmd.cn/login_v2/submit_rz.jpg" /></div>'+
                    '                    <input type="hidden" value="" name="certificatesPath" id="certificatesPath" />'+
                    '                    <input type="hidden" value="" name="qualificationPath" id="qualificationPath" />'+
                    '                    '+
                    '                    <!-- 弹出工作职称下拉框 -->'+
                    '                     <div id="medicalMenu" class="xmenu" style="display: none; left:0">'+
                    '                        <div class="select-info">	'+
                    '                            <label class="top-label">已选职称：</label>'+
                    '                            <ul>					'+
                    '                            </ul>'+
                    '                            <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">'+
                    '                                <span class="a-btn-text">确定</span>'+
                    '                            </a> '+
                    '                        </div>			'+
                    '                        <dl>'+
                    '                        </dl>			'+
                    '                    </div>'+
                    '                    <!--end-->'+
                    '                    '+
                    '                    <!-- 专业弹层 -->'+
                    '                    <div id="areasMenu" class="xmenu" style="display: none; left:0">'+
                    '                        <div class="select-info">	'+
                    '                            <label class="top-label">已选专业：</label>'+
                    '                            <ul>					'+
                    '                            </ul>'+
                    '                            <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">'+
                    '                                <span class="a-btn-text">确定</span>'+
                    '                            </a> '+
                    '                        </div>			'+
                    '                        <dl>'+
                    '                        </dl>			'+
                    '                    </div>'+
                    '                    '+
                    '                    </form>'+
                    '                </div>'+
                    '            </div>'+
                    '    </div>'+
                    '</div>';
            },
            wsrenzheng: function () {
                return ' <div class="pop-up">'+
                    ' 	<div class="login_detail_ty">'+
                    '            <div class="login" style="">'+
                    '                <div class="login_content">'+
                    '                    <div class="login_lh">完善资料</div>'+
                    '                    <div class="tishi">亲爱的医师你好，完善以下资料才可以继续浏览资源哦</div>'+
                    '                    '+
                    '                    <div class="inputParent">'+
                    '                        <div class="rz_input"><input type="text" placeholder="医院"   name="company" id="company"/></div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="rz_input">'+
                    '                          <div class="lk_input" id="medical_title" >'+
                    '                            <div class="input_name">职称</div>'+
                    '                            <ul class="medicalShow"></ul>'+
                    '                          </div>'+
                    '                        </div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    <div class="inputParent">'+
                    '                        <div class="rz_input">'+
                    '                           <div class="lk_input" id="areasExpertise">'+
                    '                               <div class="input_name">专业</div>'+
                    '                               <ul id="proFieldshow"></ul>'+
                    '                           </div>'+
                    '                          </div>'+
                    '                        <div class="l_warning"></div>'+
                    '                    </div>'+
                    '                    '+
                    '                    <div class="login_but submit_but"><img src="http://img00.allinmd.cn/login_v2/tj_zl.png" /></div>'+
                    '                  '+
                    '                    <!-- 弹出工作职称下拉框 -->'+
                    '                     <div id="medicalMenu" class="xmenu" style="display: none; left:0">'+
                    '                        <div class="select-info">	'+
                    '                            <label class="top-label">已选职称：</label>'+
                    '                            <ul>					'+
                    '                            </ul>'+
                    '                            <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">'+
                    '                                <span class="a-btn-text">确定</span>'+
                    '                            </a> '+
                    '                        </div>			'+
                    '                        <dl>'+
                    '                        </dl>			'+
                    '                    </div>'+
                    '                    <!--end-->'+
                    '                    '+
                    '                    <!-- 专业弹层 -->'+
                    '                    <div id="areasMenu" class="xmenu" style="display: none; left:0">'+
                    '                        <div class="select-info">	'+
                    '                            <label class="top-label">已选专业：</label>'+
                    '                            <ul>					'+
                    '                            </ul>'+
                    '                            <a  name="menu-confirm" href="javascript:void(0);" class="a-btn">'+
                    '                                <span class="a-btn-text">确定</span>'+
                    '                            </a> '+
                    '                        </div>			'+
                    '                        <dl>'+
                    '                        </dl>			'+
                    '                    </div>'+
                    '                    '+
                    '                </div>'+
                    '            </div>'+
                    '    </div>'+
                    '</div>';
            },
            resetPwd: function () {
                return '<div class="pop-up">'+
                    '	<div class="login_detail_ty">'+
                    '       <div class="bd_name">重置密码</div>'+
                    '       <div class="ts_div">'+
                    '           <div class="ts_t_bg"></div>'+
                    '           <div class="ts_c_bg">忘记了密码？别着急。简单几步帮你找回密码。</div>'+
                    '           <div class="ts_b_bg"></div>'+
                    '       </div>'+
                    '       <form id="resetForm">'+
                    '       <div class="wanshan"><input type="text" placeholder="你的邮箱" /></div>'+
                    '       <div class="submit_but"><img src="http://img00.allinmd.cn/reg/cz_but.png"></div>'+
                    '       </form>'+
                    '   </div>'+
                    '</div>';
            },
            afterReset: function () {
                return '<div class="pop-up">'+
                    '	<div class="login_detail_ty">'+
                    '		<div class="bd_name">重置密码</div>'+
                    '		<div class="ts_div">'+
                    '			<div class="ts_t_bg"></div>'+
                    '			<div class="ts_c_bg">一封重置密码的邮件已发送至你的注册邮箱，'+
                    '你可以点击邮件中的链接重新设置你的密码。</div>'+
                    '			<div class="ts_b_bg"></div>'+
                    '		</div>'+
                    '		<div class="cfyj_but"><img src="http://img00.allinmd.cn/reg/cfyj_but.png" /></div>'+
                    '		<div class="cfyj_but"><img src="http://img00.allinmd.cn/reg/cf_miao_but.png" /></div>'+
                    '	</div>'+
                    '</div>';
            },
            lianhe: function () {
                return '<div class="pop-up">'+
                    '    <div class="login">'+
                    '        <div class="login_content">'+
                    '            <div class="login_lh">联合登录</div>'+
                    '            <div class="tishi">你正在使用CAOS账号登录唯医</div>'+
                    '            <form>'+
                    '                <div class="inputParent">'+
                    '                    <div class="login_input kuang"><input type="text" name="email" placeholder="你在CAOS的用户名" maxlength="50" /></div>'+
                    '                    <div class="l_warning"></div>'+
                    '                </div>'+
                    '                <div class="inputParent kuang">'+
                    '                    <div class="password_input"><input type="password" name="passwd"  placeholder="你在CAOS的密码" maxlength="20" /></div>'+
                    '                    <div class="l_warning"></div>'+
                    '                </div>'+
                    '            </form>'+
                    '            <div class="login_but"><img src="http://img00.allinmd.cn/login_v2/sq.jpg" /></div>'+
                    '	    </div>'+
                    '	</div>'+
                    '</div>';
            },
            wanshan: function () {
                return '<div class="pop-up">'+
                    '	<div class="login_detail_ty">'+
                    '        <div class="login_content">'+
                    '            <div class="login_lh">你好，柴伟</div>'+
                    '            <div class="tishi">你已使用<span></span>注册过唯医，请输入当时设置的密码</div>'+
                    '            <form id="wanShanForm">'+
                    '                <div class="error_bg" style="display: none">'+
                    '                    <img src="http://img00.allinmd.cn/login_v2/false.jpg" alt=""/>'+
                    '                    <div class="error_biao">密码不正确。想要 <a href=\'/html/passport/reset_password_account.html\' >恢复密码</a> 吗？</div>'+
                    '                </div>'+
                    '                <div class="inputParent">'+
                    '                    <div class="password_input">'+
                    '                        <input type="password" name="wanshanPasswd" id="wanshanPasswd" maxlength="20" placeholder="你在唯医的登录密码" />'+
                    '                    </div>'+
                    '                    <div class="l_warning"></div>'+
                    '                </div>'+
                    '                <div class="login_but submit_but"><img src="http://img00.allinmd.cn/login_v2/login_but.png" /></div>'+
                    '                <div class="forget_password font_song" style="text-align: right; padding-top: 20px;"><a href="/html/passport/reset_password_account.html">忘记密码？</a></div>'+
                    '            </form>'+
                    '        </div>'+
                    '	</div>'+
                    '</div>';
            }


        },

        init : function(Obj){
            var t = this;
            t.getLoginStatus();
            t.getRenZhengStatus();
        },

        //获取当前登录用户信息
        getCustomerUnite:function(){
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
        },

//获取系统上传的图片
        getLogoUrlList:function (logoType,logoSpec,customerId){

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
        },

        getCustomerStatistics:function (customerId){
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
        },

    //引导弹层
        guideLayer:function(status){
            var btn='login_mask';
            var img='login.png';
            var text='text.png';
            if(status==='renzheng'){
                btn='renzheng_mask';
                img='ysrz.png';
            }else if(status==='ws'){
                btn='ws_mask';
                img='ws_btn.png';
                text='ws_text_02.png';
            }
            var html='<div class="mask_body">'+
                '<div class="mask_top"></div>'+
                '<div class="mask_bottom"></div>'+
                '<div class="mask_content">'+
                '<div class="mask_text"><img src="http://img00.allinmd.cn/mask/'+text+'" /></div>'+
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
            "wsrenzheng":"passport/wsrenzheng.html",//完善认证
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
            wsRenzhengSubmit:"customer/auth/save/",		//	认证修改
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
            // comm.LightBox.showloading();
            $.ajax({
                url:t.getUrl("dynamic","checkUserStatus"),
                dataType:"json",
                type:"post",
                success:function(result){
                    // comm.LightBox.hideloading();
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
            if($(".LightBox-popup-modal").length===0)
            {
                $("<div class='LightBox-right-top'>" +
                        "<div class='LightBox-close'></div>" +
                        "<div class='LightBox-btns'></div>" +
                        "</div>" +
                        "<div class='LightBox-container'></div>"
                ).appendTo($("body"));

                t.$container = $(".LightBox-container").css({
                    zIndex:10006,
                    position:"absolute"
                });
                t.$window = $(window);
            }
            t.$rightTop = $(".LightBox-right-top");
            t.$rightTop.find(".LightBox-close").on('click', function() {
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
            t.loadHtml("login",function(){
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
            t.loadHtml("regist",function(){
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
                if(type==="email"){
                    $("#phoneYZM").hide();
                    $("#emailYZM").show();
                    validateReg.rules.validCode1.required=true;
                    validateReg.rules.validCode2.required=false;
                }
                if(type==="mobile"){
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
                            return "此" + (type=== "email" ? "邮箱" : "手机") + "已被注册。<span>想要 <a href='/call/customer/unite/login/' >登录</a> 或 " +
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
                    comm.LightBox.showloading();
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
                                 setTimeout(function(){comm.LightBox.hideloading();},6000);
                                 //window.location.href = 'http://www.allinmd.cn/call/'+rep.responseObject.responseMessage;
                                 window.location.href = 'http://www.allinmd.cn/'+pageurl.urlList.toRegistRecommendTag.url;
                                 },2000);

                                 }else{
                                 //alert(rep.responseObject.responseMessage);
                                 alert("注册失败，请稍后重试");
                                 comm.LightBox.hideloading();
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

                                comm.LightBox.hideloading();
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
                                comm.LightBox.hideloading();
                            }


                        },
                        error:function (XMLHttpRequest, textStatus, errorThrown) {
                            comm.LightBox.hideloading();
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
             comm.LightBox.showloading();
             $.ajax({
             url: t.getUrl("dynamic","registSubmit"),
             cache: false,
             data:data,
             type:"POST",

             dataType:'json',
             success: function(data){  // 注册信息返回
             comm.LightBox.hideloading();
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
            t.loadHtml("renzheng",function(){
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
            t.loadHtml("regist",function(){
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
            t.loadHtml("renzheng", function(){
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
        // 跳转到完善认证
        changeWsRenZheng:function(){
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("wsrenzheng",function(){
                t.bindWsRenZheng();
                $(".LightBox-btns").empty();
            });
        },
        //完善认证资料
        showWsRenzhengPop:function(options){
            var t = this;
            if(options){
                t.options = options;
            }
            t.showContiner();
            t.loadHtml("wsrenzheng", function(){
                t.$container.find(".login_detail_ty").addClass("normal");
                t.bindWsRenZheng();

                //回显认证信息
                t.bindActiveInput();
            });
        },
        //完善认证资料
        bindWsRenZheng:function(){
            var t = this;
            t.setTopRight();
            $("#company").val(t.customerAuth.company);
            var html="";
            var oldArea=t.customerAuth.areasExpertise.split(",");
            var newArea=[];
            for(var i=0; i<oldArea.length; i++){
                if(oldArea[i]){
                    newArea.push(oldArea[i].split("_"));
                }
            };

            for(var i=0; i<newArea.length; i++){
                if(newArea[i][0]){
                    html+='<li rel='+newArea[i][0]+' class="current"><div class="link_l_bg"></div><div class="link_c_bg"><b>'+newArea[i][1]+'</b><p>×</p></div><div class="link_r_bg"></div></li>';
                }
            };

            $("#proFieldshow").html(html);

            //医院的自动搜索
            $("#company").lenovo({
                url:"http://www.allinmd.cn/call/commdata/getHospitalList/",
                width:340,
                showName:"hospitalName", //显示出的值
                //id:"hospitalAddress",   //自定义属性值
                //hiddenId:"address",    //自定义属性
            });
            left=$(".LightBox-container").offset().left;
            top1=$(".LightBox-container").offset().top+200+57;
            top2=$(".LightBox-container").offset().top+290+57;
            //专业多选设置
            $("#areasExpertise").xMenu({
                width :400,
                left:-left,
                top:-top1,
                eventType: "click", //事件类型 支持focus click hover
                dropmenu:"#areasMenu",//弹出层
                dataUrl:"http://www.allinmd.cn/call/commdata/getAreaExpertise/"//数据存放
            });
            //职称
            $("#medical_title").xMenunew({
                width :400,
                left:-left,
                top:-top2,
                eventType: "click", //事件类型 支持focus click hover
                dropmenu:"#medicalMenu",//弹出层
                dataUrl:"http://www.allinmd.cn/call/commdata/getMedicalTitleList/",//数据存放,
                showList:".medicalShow"
            });

            var oldArr=t.customerAuth.medicalTitle.split(",");
            var medicalArr=[];
            for(var i=0; i<oldArr.length; i++){
                if(oldArr[i]){
                    medicalArr.push(oldArr[i].split("_"));
                }
            };
            var html="";
            var arr=[];
            for(var i=0; i<medicalArr.length; i++){
                html+='<li rel='+medicalArr[i][0]+' class="current"><div class="link_l_bg"></div><div class="link_c_bg"><b>'+medicalArr[i][1]+'</b><p>×</p></div><div class="link_r_bg"></div></li>';
                arr.push(medicalArr[i][0]);
            };
            setTimeout(function(){
                for(var i=0; i<arr.length; i++){
                    if(arr&&arr!=""){
                        $("#medicalMenu dd li").removeClass("current");
                        $("#medicalMenu .select-info ul").empty();
                        for(var i=0;i<arr.length;i++){
                            var $cli = $("#medicalMenu dd li").filter("li[rel='"+arr[i]+"']");
                            $cli.addClass("current");
                            $("<li rel='"+arr[i]+"' class='current'>"+$cli.text()+"</li>").appendTo($("#medicalMenu .select-info ul"));
                        }
                    }else{
                        $("#medicalMenu .select-info").hide();
                    }
                }
            },500)

            $(".medicalShow").html(html);

            $(".submit_but").bind("click",function(){
                var company=$("#company").val();
                var medical=$(".medicalShow li");
                var area=$("#proFieldshow li");


                var medicalTitle="";
                $.each(medical,function(i,em){
                    medicalTitle+=$(em).attr("rel")+'_'+$(em).find("b").text()+',';
                });
                var areasExpertise="";
                $.each(area,function(i,em){
                    areasExpertise+=$(em).attr("rel")+'_'+$(em).find("b").text()+',';
                });
                if(!company){
                    t.showError("请填写医院")
                    return false;
                }else if(!medicalTitle){
                    t.showError("请选择职称")
                    return false;
                }else if(!areasExpertise){
                    t.showError("请选择专业")
                    return false;
                }else{
                    param = {
                        company:company,
                        medicalTitle:medicalTitle.substring(0,medicalTitle.length-1),
                        areasExpertise:areasExpertise.substring(0,areasExpertise.length-1),
                    };
                }

                var data = {paramJson:$.toJSON(param)};
                comm.LightBox.showloading();
                $.ajax({
                    url: t.getUrl("dynamic","wsRenzhengSubmit"),
                    cache: false,
                    data:data,
                    dataType:'json',
                    type:"POST",
                    success: function(data){
                        // TODO: 认证成功后应当作何处理
                        comm.LightBox.hideloading();
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

                });
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

            //医院的自动搜索
            $("#company").lenovo({
                url:"http://www.allinmd.cn/call/commdata/getHospitalList/",
                width:340,
                showName:"hospitalName", //显示出的值
                //id:"hospitalAddress",   //自定义属性值
                //hiddenId:"address",    //自定义属性
            });
            left=$(".LightBox-container").offset().left;
            top1=$(".LightBox-container").offset().top+200+57;
            top2=$(".LightBox-container").offset().top+290+57;
            //专业多选设置
            $("#areasExpertise").xMenu({
                width :400,
                left:-left,
                top:-top1,
                eventType: "click", //事件类型 支持focus click hover
                dropmenu:"#areasMenu",//弹出层
                dataUrl:"http://www.allinmd.cn/call/commdata/getAreaExpertise/"//数据存放
            });
            //职称
            $("#medical_title").xMenunew({
                width :400,
                left:-left,
                top:-top2,
                eventType: "click", //事件类型 支持focus click hover
                dropmenu:"#medicalMenu",//弹出层
                dataUrl:"http://www.allinmd.cn/call/commdata/getMedicalTitleList/",//数据存放,
                showList:".medicalShow"
            });


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
                    var company=$("#company").val();
                    var medical=$(".medicalShow li");
                    var area=$("#proFieldshow li");
                    for(var i=0;i<attTypes.length;i++){
                        var at=attTypes[i];
                        if(at.checked || at.checked===1){
                            attType=at.value;
                            break;
                        }
                    }

                    var medicalTitle="";
                    $.each(medical,function(i,em){
                        medicalTitle+=$(em).attr("rel")+'_'+$(em).find("b").text()+',';
                    });
                    var areasExpertise="";
                    $.each(area,function(i,em){
                        areasExpertise+=$(em).attr("rel")+'_'+$(em).find("b").text()+',';
                    });

                    if(certificatesPath.val()|| qualificationPath.val()){
                        //$(".error_bg").remove();
                        $(".photo_error .error").hide();
                    }
                    if(medicalTitle){
                        $(".medical_error .error").hide();
                    }
                    if(areasExpertise){
                        $(".area_error .error").hide();
                    }
                    if(certificatesPath.val()==="" && qualificationPath.val()===""){
                        //t.showError("请上传证件照")	// 上传图片错误提示
                        $(".photo_error .error").show();
                        return false;
                    }else if(!medicalTitle){
                        $(".medical_error .error").show();
                        return false;
                    }else if(!areasExpertise){
                        $(".area_error .error").show();
                        return false;
                    }else{

                        param = {
                            lastName:t.$container.find("input[name=lastName]").val(),
                            firstName:t.$container.find("input[name=firstName]").val(),
                            attType:attType,
                            attPath:t.$container.find("input[name=certificatesPath]").val(),
                            attCode:t.$container.find("input[name=attCode]").val(),

                            company:company,
                            medicalTitle:medicalTitle.substring(0,medicalTitle.length-1),
                            areasExpertise:areasExpertise.substring(0,areasExpertise.length-1),
                        };


                        var data = {paramJson:$.toJSON(param)};
                        comm.LightBox.showloading();
                        $.ajax({
                            url: t.getUrl("dynamic","renzhengSubmit"),
                            cache: false,
                            data:data,
                            dataType:'json',
                            type:"POST",
                            success: function(data){
                                // TODO: 认证成功后应当作何处理
                                comm.LightBox.hideloading();
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
                    }
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
                    },
                    "company":{
                        "required" : true,
                        "rangelength":[1,200],
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
                    },
                    "company":{
                        "required" : "请填写医院名称。",
                        "rangelength":"医院最大长度200个字符",
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
                                    if(i.refId==="6"){
                                        html+='<div ><input type="radio" checked="checked" name="certificate" value="'+i.refId+'"/>'+i.refValue+'</div>';
                                    }else{
                                        html+='<div ><input type="radio" name="certificate" value="'+i.refId+'"/>'+i.refValue+'</div>';
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
            t.loadHtml("lianhe", function(){

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

            var data={};
            var rememberMe=$("#rememberMe")!=null?$("#rememberMe").attr("checked"):1;
            var password=t.$container.find("[name=passwd]").val();
            var email=t.$container.find("[name=email]").val();
            var type = checkAccountType(email);
            data.j_username="caos;"+email+";"+password+";"+type;
            data.j_password=password;
            data.rememberMe=(rememberMe==='checked' || rememberMe==='1' || rememberMe==='true')?true:false;
            comm.LightBox.showloading();
            $.ajax({
                url:t.getUrl("dynamic","caosLoginSubmit"),
                type:"POST",
                data:data,
                dataType:"json",
                success:function(data){
                    comm.LightBox.hideloading();
                    var result = data.responseObject;
                    var resStatus=result.responseStatus;
                    var resCode=result.responseCode;
                    var resMessage=result.responseMessage;
                    if(!resStatus && resCode==="0A1004"){ //完善资料
                        t.responseMessage = resMessage;
                        t.caosCustomerId = result.responsePk;
                        t.changeWanShanPop(email);
                    }else if(!resStatus){         // 登录失败
                        t.showError("不正确的账号或密码,请重新输入！");  //resMessage
                    }else{
                        //登录成功

                        if(t.isNeedRenZheng){	// 需要认证
                            t.checkRenZheng();
                        }else{	//	不需认证
                            t.privCheckSuccess();
                            t.end();
                        }
                        if(resMessage!=null && resMessage!="" && resCode==="0B0004"){
                            //window.top.location.href = sufix;
                        }else{
                            //window.top.location.href = 'http://www.allinmd.cn/call/customer/index/input/?_=' + Math.random();
                        }

                    }


                }
            });
        },
        //
        showWanShanPop:function(){
            var t = this;
            t.showContiner();
            t.loadHtml("wanshan", function(){
                // TODO 设置用户名称
                t.bindWanShan();
                t.bindActiveInput();
            });
        },
        changeWanShanPop:function(username){
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("wanshan", function(){
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
            comm.LightBox.showloading();
            $.ajax({
                url:t.getUrl("dynamic","userValidAndBind"),
                type:"POST",
                data:data,
                dataType:"json",
                success:function(data){
                    comm.LightBox.hideloading();
                    var result = data.responseObject;
                    if(result){
                        if(result.responseStatus){
                            if(t.isNeedRenZheng){	// 需要认证
                                t.checkRenZheng();
                            }else{	//	不需认证
                                t.privCheckSuccess();
                                t.end();
                            }
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
            //t.$LightBox.fadeOut();
            t.$overlay.fadeOut();
            $('select, object, embed').css({
                visibility: "visible"
            });
            $("body").css("overflow","normal");
        },
        //禁用键盘事件
        disableKeyboard:function(){
            $(document).off('.keyboard');
        },
        end:function(){
            var t = this;
            comm.LightBox.hide();
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
            t.disableKeyboard();
            t.isRunning = false;
            document.body.style.overflow="auto";
        },

        // 载入页面
        loadHtml:function(htmlUrl,callback){
            var t = this;

            document.body.style.overflow="hidden";

            setTimeout(function(){
                comm.LightBox.show(90,"#333");
            },300);
            t.$container.html(t.template[htmlUrl]());
            t.form = t.$container.find("form");
            if(t.form.length===0){
                t.form = null;
            }else{
                t.enableKeyboard();
            }

            var pop = t.$container.find(".pop-up").css({
                "margin":"0 auto",
                "width":t.$container.find(".pop-up>div").width()
            });
            pop.on("click",function(e){
                comm.stopBubble(e);
            });
            pop.on("click",".caos_login",function(){	// 绑定联合登录
                t.changeCAOS();
            });

            comm.setCenter(t.$container);
            callback && callback();
            t.$container.find("input[placeholder], textarea[placeholder]")
                .placeholder();	// 表单默认值 插件

            $("body").css("overflow","hidden");

        },

        setTopRight:function(){ // TODO
            var t = this;
            var top  = t.$window.scrollTop() ;
            t.$rightTop.css({
                top: top + 'px',
                right: '0px',
                zIndex:10008
            });
        },

        // 向顶部右侧添加注册按钮
        appendRegistBtn:function(){
            var t = this;
            t.$rightTop.find(".LightBox-btns").empty().append("<div class='LightBox-regist'></div>");
            t.$rightTop.find(".LightBox-regist").on("click",function(e){
                t.changeRegist();
                e.stopPropagation();
            });
            t.setTopRight();
        },
        // 向顶部右侧添加跳过按钮
        appendSkipBtn:function(){
            var t = this;
            t.$rightTop.find(".LightBox-btns").empty().append("<div class='LightBox-skip'></div>");
            t.$rightTop.find(".LightBox-skip").on("click",function(e){
                t.changeRegist();
                e.stopPropagation();
            });
            t.setTopRight();
        },
        // 向顶部右侧添加登录按钮
        appendLoginBtn:function(){
            var t = this;
            t.$rightTop.find(".LightBox-btns").empty().append("<div class='LightBox-login'></div>");
            t.$rightTop.find(".LightBox-login").on("click",function(e){
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
            t.loadHtml("regist",function(){
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
            t.loadHtml("lianhe",function(){
                t.bindCAOS();
            });
        },
        changeLogin:function(){
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("login",function(){
                t.bindLogin();
            });
        },
        loginSubmit:function(){
            var t = this;

            var password=t.$container.find("[name=passwd]").val(),data={};
            var email = t.$container.find("[name=email]").val();
            var type = comm.checkAccountType(email);
            data.j_username="website;"+email+";"+password+";"+type;
            data.j_password=password;
            data.rememberMe=1;
            comm.LightBox.showloading();
            $.ajax({
                url: t.getUrl("dynamic","loginSubmit"),
                cache: false,
                data:data,
                dataType:'json',
                type:"POST",
                success: function(data){
                    comm.LightBox.hideloading();
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
        // 跳转到重置密码
        changeResetPwd:function(){
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("resetPwd",function(){
                t.bindResetPwd();
            });
        },
        // 跳转到医师认证
        changeRenZheng:function(){
            var t = this;
            t.$container.empty();
            t.clearError();
            t.loadHtml("renzheng",function(){
                t.bindRenZheng();
                $(".LightBox-btns").empty();
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
            t.loadHtml("afterReset", function(){

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
            if(t.options.operateType===""){
                return;
            }
            for(var i = 0,l =t.privJson.length;i<l;i++){
                operateItem = t.privJson[i];
                if(operateItem.opName===t.options.operateType){
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
            if(typeof t.userInfo === "undefined"  || $.isEmptyObject( t.userInfo)){
                var userInfo = t.getCustomerUnite();
                t.userInfo = userInfo;

                if(userInfo!=null && userInfo!=undefined){     // 更新头部用户状态 修改样式，加载头像 设置隐藏域
                    //$(".header .search").removeClass("search").addClass("search_login");
                    loadLoginUserBaseInfo();
                    loadCustomerPic();
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
            //comm.LightBox.showloading();
            $.ajax({
                url:t.getUrl("dynamic", "getRenZheng"),
                dataType:"json",
                type:"post",

                success:function(data){
                    //comm.LightBox.hideloading();
                    if(data===null || data=="" || data.responseObject===undefined || $.isEmptyObject(data.responseObject)){	//未认证
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
                        t.customerAuth=data.responseObject;
                        var customerId=data.responseObject.customerId;
                        var state=data.responseObject.state;
                        var firstName=data.responseObject.firstName;
                        var lastName=data.responseObject.lastName;

                        var company=data.responseObject.company;
                        var areasExpertise=data.responseObject.areasExpertise;
                        var medicalTitle=data.responseObject.medicalTitle;

                        if(customerId<=0|| state===3 || state===-1){
                            // 未申请  || 被拒绝
                            //alert("您的认证申请正在审枋中。无法进行相关操作");
                            if(t.$container && t.$container.is(":visible")){
                                // 之前在登录界面的话
                                t.changeRenZheng();	//跳转到认证界面
                            }else{
                                t.options = $.extend(t.options,{firstName:firstName,lastName:lastName});
                                t.showRenZhengPop();
                            }
                        }else if(state===1||state===2){
                            //认证已经通过，此时不允许再次认证
                            if(!company|| !areasExpertise || !medicalTitle){
                                //认证已经通过，但资料未完善。
                                if(t.$container && t.$container.is(":visible")){// 之前在登录界面的话
                                    t.changeWsRenZheng();
                                    if(t.options.isGuide){//需要弹出引导层
                                        $(document).scrollTop(0);
                                        $(".mask_body").remove();
                                        $(t.guideLayer('ws')).appendTo($("body"));
                                        $("body").css("overflow","hidden");
                                        $(".ws_mask").live("click",function(){
                                            t.showWsRenzhengPop();
                                        });
                                    }
                                }else{
                                    if(t.options.isGuide){//需要弹出引导层
                                        $(document).scrollTop(0);
                                        $(".mask_body").remove();
                                        $(t.guideLayer('ws')).appendTo($("body"));
                                        $("body").css("overflow","hidden");
                                        $(".ws_mask").live("click",function(){
                                            t.showWsRenzhengPop();
                                        });
                                    }else{//不需要
                                        t.showWsRenzhengPop();
                                    }
                                }
                            }else{
                                //认证已经通过，且资料都完善。
                                t.isRenZhengStatus=true;
                                t.end();
                                t.privCheckSuccess();
                            }

                        }else if(state===0){
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

            if(typeof t.userInfo === "undefined"  || isEmptyObj( t.userInfo)){
                var userInfo = getCustomerUnite();
                t.userInfo = userInfo;

                if(userInfo!=null){     // 更新头部用户状态 修改样式，加载头像 设置隐藏域
                    $(".header .search").removeClass("search").addClass("search_login");

                    $(".header .login").removeClass("login").addClass("login_user").html('<div class="tuichu"><a href="javascript:logout();">退出</a></div><div class="user_name"><a href="http://www.allinmd.cn/call/customer/home/input/?customerId='+ userInfo.customerId +'">'+  userInfo.nickname +' </div>');
                    $("#sesCustomerId").val(userInfo.customerId);
                    $("#sesNickname").val(userInfo.nickname);
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
            if(errorMsg.length===0){
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
                    // comm.LightBox.hideloading();
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
                    if(!$.isEmptyObject(result) && (result.responseObject.state===1 || result.responseObject.state===2)){//已登录
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

	controller.init();

	return controller;
};

var user = module.user();

