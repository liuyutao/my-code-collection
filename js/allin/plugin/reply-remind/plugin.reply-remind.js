/**
 * 功能描述：评论（回复）提醒谁看功能
 * 使用方法: $("XXX").replyRemind({
 *              width:"865",//容器宽度
 *              customerId:"123",     //当前登录人customerId;
 *              callback:function(){}  //回调函数
 *           });
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiChunHui on 2015/2/28.
 */
;(function($){
    $.fn.extend({
        "replyRemind" : function(options){
            var $this=$(this);
            var controller = {
                config : {
                    myFellowSize:100,//我的关注人列表
                    pageSize:10,//默认列出10个搜索人的结果
                    maxNum:10//最大可以添加的提醒人数
                },
                path : {
                    myFellowUrl:"/call/customer/follow_people/json_list/",
                    remindUrl:"/call/customer/unite/json_list/"
                },
                el : {
                    remind:$this.find(".btn_place"),//存放提醒谁看button位置
                    remindText:$this.find(".remind_text")//存放提醒谁看显示位置
                },
                init : function(options){
                    var t=this;
                    this.options={};
                    var o = {width:"865",customerId:"",callback:function(){}};
                    this.options = $.extend(o,options);

                    this.el.remind.append(t.template.remindHtml);
                    this.el.remindText.append(t.template.remindTextHtml);
                    $(".tx_who_look").css({width:t.options.width});
                    this.bindRemindBtn();
                    this.mouse();
                },
                template : {
                    remindHtml:'<div class="at_bg remindBtn">提醒谁看</div>',
                    remindTextHtml:'<div class="tx_who_look">'+
                        '<div class="tx_title">提醒谁看</div>'+
                        '<div class="tx_text remind_name">' +

                        '</div>'+
                        '<input type="text" class="remind_input"/>'+
                        '<div class="tx_num">（<span class="remind_num">0</span>/10）</div>'+
                        '<div class="clear"></div>'+
                        '<div class="at_personal_name">'+
                        '<ul class="remind_list">'+
                            /*'<li>'+
                                '<div class="at_search font_yahei">未找到相关用户</div>'+
                            '</li>'+*/
                         '</ul>'+
                        '</div>'+
                        '</div>'
                },
                getUser:function(data){
                    var html="";
                    $.each(data,function(i,val){
                        userAuth=val.customer_auth;
                        html+='<li customerid="'+val.customer_baseinfo.customerId+'">'+
                            '<div class="at_user_img"><img src="'+val.customer_att.logoUrl+'"></div>'+
                            '<div class="at_user_name font_yahei"><span>'+(userAuth.state>=1?userAuth.lastName+userAuth.firstName:val.customer_baseinfo.nickname)+'</span>'+userAuth.company+'</div>'+
                            '<div class="clear"></div>'+
                            '</li>';
                    });
                    return html;
                },
                //提醒的按钮
                bindRemindBtn : function(){
                    var t=this;
                    var remindInput=$this.find(".remind_input");
                    $(".remindBtn").on("mouseover",function(){
                        $(this).addClass("at_bg_hover");
                    });
                    $(".remindBtn").on("mouseout",function(){
                        $(this).removeClass("at_bg_hover");
                    });
                    $(".remindBtn").on("click",function(){
                        $(this).addClass("at_bg_hover");
                        t.el.remindText.show()
                        //remindInput.focus();
                        t.getInitUser();
                        return false;
                    });
                    t.inputChange(remindInput);
                    t.remove(remindInput);
                    t.docClick();
                },
                getInitUser : function(){
                    var t=this;
                    var data={
                        pageIndex:1,
                        pageSize: t.config.myFellowSize
                    };
                    var param={};
                    param.paramJson= $.toJSON(data);
                    $.ajax({
                        type : "post",
                        url : t.path.myFellowUrl,
                        data : param,
                        dataType : "json",
                        success : function(rep){
                            if(rep&&rep.responseObject.length>0){
                                $this.find(".at_personal_name").show();
                                $this.find(".remind_list").html(t.getUser(rep.responseObject));
                                t.hover();
                                t.userBindclick();
                            }
                        },
                        error:function(){

                        }
                    });
                },
                inputChange : function(obj){
                    var t=this;
                    var val = "",val2 = "",changeInterval;
                    obj.on("focus",function(){

                        changeInterval = setInterval(function(){
                            val2 = obj.val();
                            if(val != val2){
                                changeHandler();
                            }
                        },500);
                    });
                    obj.on("blur",function(){
                        clearInterval(changeInterval);
                    });
                    obj.on("change",function(){
                        if(val != val2){
                            changeHandler();
                        }
                    });
                    function changeHandler(){
                        if(obj.val()!==""){
                            var data={
                                useFlag:1,
                                //sessionCustomerId:t.options.customerId,
                                searchParam:obj.val(),
                                isCUnite:0,
                                isCStatistics:0,
                                isCFPeople:0,
                                pageIndex:1,
                                pageSize: t.config.pageSize
                            };
                            var param={};
                            param.paramJson= $.toJSON(data);
                            $.ajax({
                                type : "post",
                                url : t.path.remindUrl,
                                data : param,
                                dataType : "json",
                                success : function(rep){
                                    val = val2;
                                    if(rep&&rep.responseObject.responseData.data_list&&rep.responseObject.responseData.data_list.length>0) {
                                        $this.find(".at_personal_name").show();
                                        $this.find(".remind_list").html(t.getUser(rep.responseObject.responseData.data_list));
                                        t.hover();
                                        t.userBindclick();
                                    }

                                },
                                error:function(){

                                }
                            });
                        }
                    }

                },
                userBindclick : function(){
                    var t=this;
                    $this.find(".at_personal_name li").each(function(i,em){
                        $(em).on("click",function(){
                            var has=false;
                            var len=$this.find(".remind_name span").length;
                            $this.find(".remind_name span").each(function(j,e){
                                if($(this).attr("customerid")==$(em).attr("customerid")){
                                    $(this).remove();
                                    has=true;
                                    len--;

                                }
                            });
                            if(!has&&len<10){
                                len+=1;
                                $this.find(".remind_name").append('<span customerid="'+$(em).attr("customerid")+'">'+$(em).find("span").text()+'，</span>');
                            }
                            $this.find(".remind_num").text(len);
                            t.options.callback()&&t.options.callback();
                            return false;
                            //$(this).addClass("hover");
                        });
                    });
                },
                hover : function(){
                    $this.find(".at_personal_name li").each(function(i,em){
                        $(em).on("mouseover",function(){
                            $this.find(".at_personal_name li").removeClass("hover");
                            $(this).addClass("hover");
                        });

                    });
                },
                docClick : function(){
                    $(document).bind("click",function(){
                        $this.find(".at_personal_name").hide();
                        $this.find(".remind_list").empty();
                    });
                },
                remove : function(obj) {
                    var t=this;
                    obj.keyup(function (ev) {
                        //alert(ev.keyCode);   //13:enter键,188:逗号
                        if (obj.val() === "") {
                            //删除
                            if (ev.keyCode == "8") {

                                var userList = $this.find(".remind_name span");
                                last = userList.eq(userList.length - 1);
                                if (userList.length > 0) {
                                    last.remove();
                                    $this.find(".remind_num").text(userList.length - 1);
                                    t.options.callback()&&t.options.callback();
                                }

                            }
                        }
                    });
                },
                mouse : function(){
                    $this.find(".tx_who_look").on("mouseover",function(){
                        $(this).addClass("tx_who_look_hover");
                    }).on("mouseout",function(){
                        $(this).removeClass("tx_who_look_hover");
                    });
                }
            };
            controller.init(options);
        }
    });
})(jQuery);
