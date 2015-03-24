/**
 * 功能描述：关注
 * 使用方法：$("el").relation({})
 *					参数参照下方18-29行 
 *                              
 * 注意事件：
 * 调用外部文件 relpy-list.js 原因：在回复时需要刷新列表
 * 引入来源：权限控制 user.login({})
 * 
 * Created by QiaoLiang on 2014.
 */

;(function($){
	$.fn.extend({
		"relation" : function(options){
			var s = $.extend({
				t : this,
				praiseNum : 0,
				replyNum : 0,
				forwardNum : 0,
				collectNum : 0,
				isCollect : false,
				customerId : 0, 
				refId : 0,
				reviewType : 0,
				reviewId : 0,
				reviewStatus : 0,
				parentId : 0,
				userId : 0 //当前人id
				
			},options);
			
			
			var p = {
				praiseNum : s.praiseNum,
				replyNum : s.replyNum,
				forwardNum : s.forwardNum,
				collectNum : s.collectNum,
				isCollect : s.isCollect,
				
				customerId : s.customerId,
				usefulType : s.usefulType, 
				upDownType : s.upDownType,
				refId : s.refId,
				refCustomerId : s.refCustomerId,
				upDown : s.upDown,
				parentId : s.parentId,
				
			    reviewType: s.relationType,
			    reviewId: s.reviewId,
			    reviewStatus : s.reviewStatus, //1为显示
			};
			
			var m = {
					//初始化
					init : function(){
						var t = this;
						
						//判断是否是自己,决定是否显示删除
						var removeStatus;
						if(s.userId == p.customerId){removeStatus = true;}

						//计数集合
						var setNum = {
								replyNum : p.replyNum,
								forwardNum : p.forwardNum,
								praiseNum : p.praiseNum,
								collectNum : p.collectNum,
								parentId : p.parentId
						};
							
						s.t.append(t.common.template.relation(setNum,p.reviewId,removeStatus,p.reviewStatus,"init")).find("li").on("click",function(){
							t.controller.events[$(this).find("div").attr("class").substr(8)](t,this);
						});
						
						s.t.find(".ck_dh").on("click",function(){
							t.controller.events.chat(t,this);
						});
					},
					//控制区
					
					//取消赞不起作用
					//
					controller : {
						events : {
							praise : function(t,_this){ //赞
//								user.login({
//									callback:function(){
									var url = "",params = {};
									if($(_this).find("a").attr("class") != "ok"){
										params.paramJson = $.toJSON({
											  customerId : p.customerId,
											  usefulType : 8,
											  upDownType : 1,
											  refId : $(_this).parent().attr("data-reviewId")
										});
										url = t.common.supportUrl.praise;
										$(_this).find("span:eq(1)").text(parseInt($(_this).find("span:eq(1)").text())+1);
										$(_this).find("a").addClass("ok");
									}else{
										params.paramJson = $.toJSON({
											  customerId : p.customerId,
											  usefulType : 8,
											  upDownType : 1,
											  refId : $(_this).parent().attr("data-reviewId")
										});
										url = t.common.supportUrl.praiseCancel;
										$(_this).find("span:eq(1)").text(parseInt($(_this).find("span:eq(1)").text())-1);
										$(_this).find("a").removeClass("ok");
									}
									
									t.common.ajaxSend(url,params);
//									},
//									operateType:"zhan",
//									_this:_this,
//									t : t,
//				                    p:p
//								});	
							},
							forward : function(t,_this){ //转发
//								user.login({
//									callback:function(){
										var url="",params = {};
										params.paramJson = $.toJSON({
											  customerId : p.customerId,
											  reprintType : 8,
											  refId : $(_this).parent().attr("data-reviewId")//,
											  //citeId : $()
											  
//												customerId : p.customerId,
//												usefulType : 8, 
//												upDownType : p.upDownType,
//												refId : $(_this).parent().attr("data-reviewId"),
//												refCustomerId : p.refCustomerId,
										});
										
										if($(_this).find("a").attr("class") != "ok"){
											$(_this).find("span:eq(1)").text(parseInt($(_this).find("span:eq(1)").text())+1);
											$(_this).find("a").addClass("ok");
											url = t.common.supportUrl.forward;
										}else{
											$(_this).find("span:eq(1)").text(parseInt($(_this).find("span:eq(1)").text())-1);
											$(_this).find("a").removeClass("ok");
											url = t.common.supportUrl.forwardCancel;
										}
										t.common.ajaxSend(url,params);
//									},
//									operateType:"transmit",
//									_this:_this,
//									t : t,
//				                    p:p
//								});	
										
							},
							collect : function(t,_this){ //收藏
//								user.login({
//									callback:function(){
										var url="",params = {};
										params.paramJson = $.toJSON({
												  customerId : p.customerId,
												   collectionType : 8,
												   refId : $(_this).parent().attr("data-reviewId")
//												customerId : p.customerId,
//												usefulType : 8, 
//												upDownType : p.upDownType,
//												refId : $(_this).parent().attr("data-reviewId"),
//												refCustomerId : p.refCustomerId,
										});
										
										if($(_this).find("a").attr("class") != "off"){
											url = t.common.supportUrl.collectCancel;
											$(_this).find("span:eq(1)").text(parseInt($(_this).find("span:eq(1)").text())-1);
											$(_this).find("a").removeClass("on").addClass("off");
										}else{
											url = t.common.supportUrl.collect;
											$(_this).find("span:eq(1)").text(parseInt($(_this).find("span:eq(1)").text())+1);
											$(_this).find("a").removeClass("off").addClass("on");
										}
								
										t.common.ajaxSend(url,params);
//									},
//									operateType:"collect",
//									_this:_this,
//									t : t,
//				                    p:p
//								});
							},
							reply : function(t,_this,source){ //回复
//								user.login({
//									callback:function(){
								                var currEl,currLi,nameHref,name,content,time,logoUrlHref,reviewId;
												//从当前页面取回当前回复的基础信息 与页面元素一一对应
												if($(_this).parents(".children").length>0){ //在外部列表时
													 currEl = $(_this).parents("li");
													 nameHref = currEl.find(".name_text").html();
													 name = currEl.find(".v_all_name").text();
													 content = currEl.find(".v_all_text").html();
													 time = currEl.find(".v_all_list_l").text();
													 logoUrlHref = currEl.find(".v_all_user").html();
													 reviewId = currEl.find(".plugin-relation").attr("data-reviewid");
												}else{ //在查看对话时
													 currLi = $(_this).parents("li");
													 nameHref = currLi.find(".p_l_t_l").text();//没名字链接
													 name = currLi.find(".p_l_t_l").text();
													 content = currLi.find(".list_text").html();
													 time = currLi.find(".p_l_t_r_case").text();
													 logoUrlHref = currLi.find(".t_tc_left").html();
													 reviewId = currLi.find(".plugin-relation").attr("data-reviewId");
												}
												
												//变更reviewId 赋给回复框接值
												$(".video_c_but").attr("data-reviewid",reviewId);
												
												//清除格式
												content = t.common.wordLen(t.common.clearFormatWord(content),176);
												
												
												var kv = {name:name,nameHref:nameHref,content:content,
															   time:time,logoUrlHref:logoUrlHref,reviewId:reviewId};
												
												//是否对话上层点击或是下层点击回复 作交互效果处理
												 if(source  == "chatDown"){ //查看对话时触发回复
													var currLi = $(_this).parents("li");
													currLi.removeAttr("style");//移除当前背景色
													currLi.find(".line_place").removeClass("reply_bottom_line"); //移除下方线条
													currLi.siblings().fadeOut();
													$(_this).parent().hide();
													$("#reply_area").show();
													t.common.textareaAct("expand");
													
													//如果为展开时则触发，不展开则不触发
													if(currLi.find(".expandOrShrink").text() == "收缩"){
														currLi.find(".list_text").find("span:eq(0)").show();
														currLi.find(".list_text").find("span:eq(1)").hide();
														currLi.find(".expandOrShrink").text("展开");
													}
													
													var b=$(currLi).height()+40+178; //40为上下间距各20 回复框定高178px
													$(".t_tc_main").animate({
														height:b+"px",
													});
												}else{ //在外部列表直接点回复
													
													$("body").prepend(t.common.template.reply(kv)).find(".expandOrShrink").on("click",function(){
														if($(this).text()=="展开"){
															if($(".t_tc_title").length === 0){return false} //
															
															$(this).parent().find("span:eq(0)").hide();
															$(this).parent().find("span:eq(1)").show();
															$(this).text("收缩");
															t.common.textareaAct("shrink");
															
															//取出回复高度 回复框73定高
															var sysH = $(window).height()*0.8;
															var windowH = $("#reply_list").height();
															if(windowH>sysH){
																$(".t_tc_main").css({"overflow-x":"hidden","overflow-y":"auto"});
																$(".t_tc_main").animate({height:sysH+"px"},500);
															}else{
																$(".t_tc_main").css("height","auto");
															};
															$("#doc_abstract").css({"line-height":"35px"});
															
														}else{
															if($(".t_tc_title").length === 0){return false}
															
															$(this).parent().find("span:eq(0)").show();
															$(this).parent().find("span:eq(1)").hide();
															$(this).text("展开");
															t.common.textareaAct("expand");
															
															//取出回复高度 回复框178定高
															if($(".t_tc_title").text() != "查看对话"){
																$(".t_tc_main").animate({
																	height:$("#reply_list").height()+178+"px"
																},500);
																$("#doc_abstract").focus()
															};
															
															$("#doc_abstract").css({"line-height":"normal"})
														};
													});
													
													
													///KKKKKKKK提醒谁看的样式有问题
//													 //添加图片
//										            $(".photo_bg").addRemoveablePic({
//										                container: $(".upload_pic"),
//										                limit: 4,
//										                html: "<div>添加图片</div>",
//										                onSizeChange: function (isExist) {
//										                    //picCb(isExist);
//										                }
//										            });
													
										            //提醒谁看
//										            $("#pluginRelation").replyRemind({
//										                callback: function () {
//										                    //remindCb($(".module-replyForm").find(".remind_name span"));
//										                }
//										            });
													
													$("#reply_area").show(); //秀回复区 
													$("#widget").hide();//隐社交区
													t.common.showCenter(); //
													t.common.textareaAct("expand"); //展开回复区
												}
												
												//回复时清掉对话线
												$(".chat_line").remove();
												$("#doc_abstract").attr("placeholder","回复@"+kv.name);
												
												$("#doc_abstract").focus();
												t.common.changeTitle("reply",kv.name);
												t.common.closeWindow();
												
												//事件区*************************
												$("#doc_abstract").on("focus",function(){
													$("#doc_abstract").css({"line-height":"normal"});
													//如果没有找到收缩展开，不执行
													var els = $(this).parents(".t_tc_main");
													if(els.find(".list_text>span:eq(2)").length>0){
														t.common.textareaAct("expand");
														
														//清理结构
														$.each(els.find("#reply_list li"),function(i,el){
															if($(el).attr("style") !== undefined){$(el).remove();}
														});
														
														//假设当前为收缩
														if(els.find(".list_text>span:eq(2)").text() == "收缩"){
															els.find(".list_text>span:eq(0)").show();
															els.find(".list_text>span:eq(1)").hide();
															els.find(".list_text>span:eq(2)").text("展开");
														};
														
														if($(this).css("height") != "97px"){ 
															var a = els.css("height","auto").height();
															els.animate({
																height : a+40+23+"px" // 不进行97px判断会出现白背景   40上下20间距 23为回复框间距
															});
														}
													}	
													
												}).on("input",function(){
													if(t.common.getCount($("#doc_abstract").val())>1){  //回复字数
														$(".fb_but").addClass("publish-ok");
													}else{
														$(".fb_but").removeClass("publish-ok");
													}
												});
												
												//取消
												$("#cancel_reply").on("click",function(){ //是为关闭功能
//													$("#doc_abstract").val('');
//													$(".fb_but").find("img").attr("src","http://img00.allinmd.cn/topic/fb_disable.png");
													comm.LightBox.hide();
													$("#reply_context").remove();
													$("body").removeAttr("style");
												});
												
												//保存
												$("#save_reply").on("click",function(){
													if($(this).attr("class").indexOf("publish-ok") >-1){ //如果是发布
														var content = $("#doc_abstract").val();
														var reviewId = $(this).parent().attr("data-reviewId"); //取回复上方的id
														
														var params = {}; 
														params.paramJson = $.toJSON({
															customerId:$("#sesCustomerId").val(),
															reviewType:p.usefulType,
															refId:p.refId,
															reviewContent:content,
															parentId:reviewId,
															reviewStatus : 1
														});
														
														var dataJson = t.common.ajaxResult(t.common.supportUrl.reply,params);
														if(dataJson.responseObject.responseStatus){
															module.replyList({	
																target : ".detail_replys", //瀑布流加载位置
																hint : ".reply-list-hint", //提示位置
																refId : p.refId,
																reviewType : p.usefulType,
																callback : function(){$("#replyContent").focus();}
															});
														}
														//将外部值＋1
														$(currEl).find(".widget>li:eq(1) span:eq(1)").text(parseInt($(currEl).find(".widget>li:eq(1) span:eq(1)").text())+1); 
														
														//判断外部是否存在查看对话
														if($(currEl).find(".ck_dh").length === 0){
															var html = "<div class=\"ck_dh\">查看对话</div>";
															$(currEl).find(".widget").after(html);
															$(currEl).find(".ck_dh").on("click",function(){
																t.controller.events.chat(t,this);
															});
														}
														
														comm.LightBox.hide();
														$("#reply_context").remove();
														$("body").removeAttr("style");
													}
												});
//									},
//									operateType:"respond",
//									_this:_this,
//									t : t,
//				                    p:p
//								});					
							},
							del_reply : function(t,_this){ //删除回应
								var refId = $(_this).parent().attr("data-reviewid");
								var params = {};
									params.paramJson= $.toJSON({id:refId}); 
								t.common.ajaxSend(t.common.supportUrl.delreply,params);
								
								var place = {left:0,top:window.scrollY-50};
								
								t.controller.events.recover(t,_this,refId,place);
								
								$(_this).parents(".f05_c").animate({height:0},500,function(){
									$(_this).parents(".f05_c").hide();
									$(_this).parents(".f05_c").css("height","auto");
									window.scrollTo(0,0);
									$("#del").show();
									$("#del").animate({top:"50px"},500);
									setTimeout(function(){
										$("#del").animate({top:"-54px"},500);
									},5000);
									
									//判断是否没有一条数据
									var reviewListBox = $("#ReviewList_box").find(".f05_cont");
									var signMark = false;
									for(var i=0;i<reviewListBox.length;i++){
										var currStatus = $($("#ReviewList_box").find(".f05_cont")[i]).find(".f05_c").css("display");
										if(currStatus != "none"){
											signMark = true;
											break;
										}
									}
									
									if(!signMark){ //当无数据时显示与docviewer中一样，并注入事件
										$(".awe_morebt").css({height:"90px",fontSize:"16px",lineHeight:"90px"});
										$('#awe_morebt_span').html('暂时还没有回应哦〜<span id=\"sayReply\" style=\"color:#3d84c4\">你来说几句吧！</span>');
										$("#sayReply").on("click",function(){
											$("#replyContent").focus();
										})
									}
									
								});
							},
							recover : function(t,_this,refId,place){ //恢复回应 
								$("#recover").off("click").on("click",function(){
										var params = {};
										params.paramJson= $.toJSON({id:refId}); 
										t.common.ajaxSend(t.common.supportUrl.recover,params);
										window.scrollTo(0, place.top);
										var h = $("[data-reviewId='"+refId+"']").parents(".f05_c").height();
										$("[data-reviewId='"+refId+"']").parents(".f05_c").css("height",0).show(); 
										$("[data-reviewId='"+refId+"']").parents(".f05_c").animate({
											height: h+"px"
										});
										
										if($('#awe_morebt_span').text() == "暂时还没有回应哦〜你来说几句吧！"){//恢复最后一条时
											$(".awe_morebt").removeAttr("style");
											$('#awe_morebt_span').text("最后一页了"); 
										}
								});
							},
							chat : function(t,_this){ //查看对话
								//从社交中取出当前id
								var reviewId = $(_this).parent().find("ul").attr("data-reviewId");
								var paramJson = {
			                            dataFlag: 3,
			                            useFlag: 1,
			                            reviewType: p.usefulType,
			                            refId: p.refId,
			                            currentReviewId: reviewId,
			                            //pageIndex: 1,
			                            pageSize: 10
			                     };
								
								var result = t.common.ajaxResult(t.common.supportUrl.chat,paramJson);
								var html = "",
									  fitting = "",
									  dataList = result.responseObject.responseData.data_list;
								
								$.each(dataList,function(i,el){
									if(i===0)
											html += t.common.template.reply(t.common.adapter(t,el));
										else
											fitting += t.common.template.addReply(t.common.adapter(t,el));
								});
								
								//计算展开和收缩时对话线的问题
								//KKKKKKKKKKKKK
								$("body").prepend(html);
							
//								.find(".expandOrShrink").on("click",function(){ //区分是回复与查看对话
//									if($(this).text()=="展开" && $(".t_tc_title").text() !=""){
//										$(this).attr("chat-line",parseInt($(".chat_line").css("height"))); //记录下当前对话线长度,供恢复时使用
//										$(this).parent().find("span:eq(0)").hide();
//										$(this).parent().find("span:eq(1)").show();
//										$(this).text("收缩");
//										
//										t.common.textareaAct("shrink");
//										
//										//先判断是否只有一条数据，如果只有一条数据，不变更对话线
//										var lis = $("#reply_list").children(),chatLineChange = false;
//										if($(lis[1]).attr("class") == "reply_space") chatLineChange = false;
//											else chatLineChange = true;  
//										
//										//是否变更对话线 78原高
//										if(chatLineChange){
//											$(".chat_line").css("height",parseInt($(".chat_line").css("height"))+$(this).parent().height()-78+"px");
//										}
//										
//										//取出回复高度 回复框73定高
//										if($(".t_tc_title").text() != "查看对话"){
//											$(".t_tc_main").animate({height:$("#reply_list").height()+73+"px"});
//										}
//										
//									}else{
//										 if($(".t_tc_title").text() ==""){return false;} 
//										 
//										$(this).parent().find("span:eq(0)").show();
//										$(this).parent().find("span:eq(1)").hide();
//										$(this).text("展开");
//										
//										t.common.textareaAct("expand");
//										
//										//恢复对话线
//										$(".chat_line").css("height",parseInt($(this).attr("chat-line"))+"px");
//										
//										//取出回复高度 回复框178定高
//										if($(".t_tc_title").text() != "查看对话"){
//											$(".t_tc_main").animate({
//												height:$("#reply_list").height()+178+"px"
//											});
//											
//											$("#doc_abstract").focus();
//										};
//									}
//								})
								
								$("#reply_list").append(fitting);
								
								//TODO
								//只差多条数据触发时高度控制
								
								$("#reply_list").find(".expandOrShrink").on("click",function(){ //只针对上层
									if($(this).text()=="展开"){
										$(this).attr("chat-line",parseInt($(".chat_line").css("height"))); //记录下当前对话线长度,供恢复时使用
										$(this).parent().find("span:eq(0)").hide();
										$(this).parent().find("span:eq(1)").show();
										$(this).text("收缩");
										
										t.common.textareaAct("shrink");
										
										//先判断是否只有一条数据，如果只有一条数据，不变更对话线
										var lis = $("#reply_list").children(),chatLineChange = false;
										if($(lis[1]).attr("class") == "reply_space") chatLineChange = false;
											else chatLineChange = true;  
										
										var selfLi = $(this).parents("li");
										for(var i=0;i<lis.length;i++){
											if($(lis[i]).text() == selfLi.text()){//如果触发数据等于被遍历的数据
												if($(lis[i+1]).attr("class")== "reply_space") chatLineChange = false; //下一层为下层
													else if(i==(lis.length-1)) chatLineChange = false; //记录尾
											}
										}
										
										//是否变更对话线 78原高
										if(chatLineChange){
											$(".chat_line").css("height",parseInt($(".chat_line").css("height"))+$(this).parent().height()-78+"px");
										}
										
										//重新计算高度
										var sysH = $(window).height()*0.8;
										var windowH = $("#reply_list").height();//$(".t_tc_main").height();
										if(windowH>sysH){
											$(".t_tc_main").css({"overflow-x":"hidden","overflow-y":"auto"});
											$(".t_tc_main").animate({height:sysH+"px"});
										}else{
											$(".t_tc_main").css("height","auto");
										}
										
										//取出回复高度 回复框73定高
//										if($(".t_tc_title").text() != "查看对话"){
//											$(".t_tc_main").animate({height:$("#reply_list").height()+73+"px"});
//										}
										
									}else{
										$(this).parent().find("span:eq(0)").show();
										$(this).parent().find("span:eq(1)").hide();
										$(this).text("展开");
										t.common.textareaAct("expand");
										
										//恢复对话线
										$(".chat_line").css("height",parseInt($(this).attr("chat-line"))+"px");
										
										//重新计算高度
										var sysH = $(window).height()*0.8;
										var windowH = $("#reply_list").height(); //$(".t_tc_main").height();
										if(windowH>sysH){
											$(".t_tc_main").css({"overflow-x":"hidden","overflow-y":"auto"});
											$(".t_tc_main").animate({height:sysH+"px"});
										}else{
											$(".t_tc_main").css("height","auto");
										}
										//取出回复高度 回复框178定高
//										if($(".t_tc_title").text() != "查看对话"){
//											$(".t_tc_main").animate({
//												height:$("#reply_list").height()+178+"px"
//											});
//											
//											$("#doc_abstract").focus();
//										};
									}
								});
								
								//给对话上层绑事件
								$("#reply_list").find(".widget_v2 li").on("click",function(){
									t.controller.events[$(this).find("div").attr("class").substr(8)](t,this,"chatDown");
								})
								
								//计算列表总数及产生对话线长度
								var replyListCount = $("#reply_list").children("li").length;
								var chatLineHeight = 0; //统计对话线长度
								if(replyListCount > 3 ){
									var total = replyListCount-3;
									var showNum = total+"条更多回复";
									var moreHtml = "<div class=\"more_reply_num\"><span id=\"expand_reply\">"+showNum+"</span></div>";
									//循环遍历小于的都隐藏，等于的则在其上追加显示记录注册事件
									var arrList = $("#reply_list").children("li");
									for(var i=0;i<replyListCount;i++){
										if(i<total && i != 0){ 
											$($(arrList)[i]).addClass("hidden_reply_li");	
										}else if(i==total){
											$($(arrList)[i]).addClass("hidden_reply_li");
											
											$($(arrList)[i]).after(moreHtml);
											
											$("#expand_reply").on("click",function(){ //给记录条数绑事件 秀全部记录 并删除自身 计算对话线 
												//查看全部对话线时
												var childs = $("#reply_list").children(), childsHeight = 0;
												for(var i=0,len=childs.length;i<len;i++){
													if($($(childs)[i]).attr("class") == "reply_space"){
														childsHeight += (i-1)*20 ; //计算总条数的边距 
														break;
													}else childsHeight += $($(childs)[i]).height();
												}
												
												$(".hidden_reply_li").removeClass("hidden_reply_li");
												$(this).parent().remove();
												
												$(".chat_line").animate({height:childsHeight+"px"});//24的显示条数高度
												
											});
										}else{
											var currLiH = $($(arrList)[i]).height();
											chatLineHeight += currLiH;
										};
									}
								}else if(replyListCount < 4 && replyListCount >1){
									var arrList = $("#reply_list").children("li");
									for(var i=0;i<replyListCount;i++){
										if(i<replyListCount-1){
											var currLiH = $(arrList[i]).height();
											chatLineHeight += currLiH;
										}else if(i==replyListCount-1){
											chatLineHeight += 65; //40边距＋头像60一半30
										}	
									}
								}
								
								//初始化查看对话时对话线
								$(".chat_line").animate({height:chatLineHeight+"px"});//24的显示条数高度
								
								//t.common.expandOrShrink($(html).find(".expandOrShrink"));
								//t.common.expandOrShrink($(fitting).find(".expandOrShrink"));
								
								$("#reply_area").hide();
								$("#widget").show();
								t.common.closeWindow();
								t.common.changeTitle("chat");
								t.common.showCenter();
								
								//加载瀑布流
								var params = {
										 dataFlag : 3, 
										 useFlag : 1,   
										 reviewType : p.usefulType,
										 refId : p.refId,          
										 sortType : 1,
										 parentId :	reviewId,//         当前评论Id
										 isCurrentRow : 0,
										 pageIndex : 1, //
										 pageSize : 20		
								}
								t.waterfallPage(t,t.common.supportUrl.chat,params);
							}
							
						}
					},
					//公共
					common : {
						template : {//模版
							relation : function(kv,reviewId,isRemove,reviewStatus,src){ //社交
								var html = "";
								if(reviewStatus==1){
									html = "<ul class=\"plugin-relation\" data-reviewId=\""+reviewId+"\">"+
												"<li><div class=\"article_forward\"><span><a href=\"javascript:;\" title=\"转发\"></a></span>(<span>"+kv.forwardNum+"</span>)</div></li>"+
												"<li><div class=\"article_reply\"><span><a href=\"javascript:;\" title=\"回应\"></a></span>(<span>"+kv.replyNum+"</span>)</div></li>"+
												"<li><div class=\"article_collect\"><span><a class=\"off\" href=\"javascript:;\" title=\"收藏\"></a></span>(<span>"+kv.collectNum+"</span>)</div></li>";
									//判断是否满足查看对话条件 缺标识
									if(kv.parentId ===0 && kv.replyNum===0 && isRemove === true && src == "init"){
										html += "<li><div class=\"article_del_reply\"><span><a class=\"off\" href=\"javascript:;\" title=\"删除\"></a></span></div></li></ul>";
									}else if((kv.parentId !==0 || kv.replyNum>0) && isRemove === true && src == "init"){
										html += "<li><div class=\"article_del_reply\"><span><a class=\"off\" href=\"javascript:;\" title=\"删除\"></a></span></div></li></ul>";
										html += "<div class=\"ck_dh\">查看对话</div>";
									}else if((kv.parentId !==0 || kv.replyNum>0) && isRemove === undefined && src == "init"){
										html += "<li><div class=\"article_praise\"><span><a href=\"javascript:;\" title=\"赞\"></a></span>(<span>"+kv.praiseNum+"</span>)</div></li>";
										html += "</ul><div class=\"ck_dh\">查看对话</div>";
									}else{
										html += "<li><div class=\"article_praise\"><span><a href=\"javascript:;\" title=\"赞\"></a></span>(<span>"+kv.praiseNum+"</span>)</div></li></ul>";
									};
								}
								return html;
							},
							addReply : function(kv){ //追加回复
								 var html = "<li>"+
						          "<div class=\"t_tc_left\">"+kv.logoUrlHref+"</div>"+
						          "<div class=\"t_tc_right\">"+
						            "<div class=\"p_list_top\">"+
						              "<div class=\"p_l_t_l font_yahei\">"+kv.name+"</div>"+
						              "<div class=\"p_l_t_r_case\">"+kv.time+"</div>"+
						              "<div class=\"clear\"></div>"+
						            "</div>"+
						            "<div class=\"list_text font_yahei\">"+kv.content+"</div>"+
						            "<div id=\"widget\" class=\"widget_v2\">"+
   						              this.relation(kv,kv.reviewId,undefined,kv.reviewStatus)+ 	//不显示查看对话0 、加入社交模版
   						            "</div>"+
						          "</div>"+
						          "<div class=\"clear\"></div>"+
						          "<div class=\"line_place\"></div>"
						        "</li>";
								 return html;
							},
							//"<form id=\"pluginRelation\" method=\"post\" enctype=\"multipart/form-data\">"+
							reply : function(kv){ //对话与回复
								var html =  
									"<div id=\"reply_context\" class=\"topic_tc\">"+ 
									  "<div class=\"t_tc_top\">"+
									    "<div class=\"t_tc_title\">"+kv.title+"</div>"+
									    "<div id=\"close_reply\" class=\"t_tc_close\"><div class=\"relation-reply-close\"></div></div>"+
									  "</div>"+
									  "<div class=\"t_tc_main\">"+
									    "<div class=\"t_tc_content no_border\" style=\"position: relative;\">"+
									    	  "<div class=\"chat_line\"></div>"+
									      "<ul id=\"reply_list\">"+ 
									        "<li>"+
									          "<div class=\"t_tc_left\">"+kv.logoUrlHref+"</div>"+
									          "<div class=\"t_tc_right\">"+
									            "<div class=\"p_list_top\">"+
									              "<div class=\"p_l_t_l font_yahei\">"+kv.name+"</div>"+
									              "<div class=\"p_l_t_r_case\">"+kv.time+"</div>"+
									              "<div class=\"clear\"></div>"+
									            "</div>"+
									            "<div class=\"list_text font_yahei\">"+kv.content+"</div>"+
									            "<div id=\"widget\" class=\"widget_v2\">"+
		        						              this.relation(kv,kv.reviewId,undefined,kv.reviewStatus)+ 	//不显示查看对话0 、加入社交模版
		        						            "</div>"+
									          "</div>"+
									          "<div class=\"clear\"></div>"+
									        "</li>"+
									      "</ul>"+
									    "</div>"+
									    "<div id=\"reply_area\" class=\"tc_comment_content\">"+
									        "<div class=\"tc_active\"><textarea placeholder=\"回复@\" id=\"doc_abstract\"></textarea></div>"+
									        "<div class=\"video_c_but\" data-reviewId=\""+kv.reviewId+"\">"+
//									        	  "<div class=\"upload_pic\"></div>" +
//									        	  "<div class=\"remind_text\"></div>" + //提醒
//									        	  "<div class=\"btn_place\">" + 
//									        	  	"<div class=\"photo_bg\">添加照片</div>"+
//									        	  "</div>"+
									          "<div class=\"qx_but\" id=\"cancel_reply\">取 消</div>"+
									          "<div class=\"fb_but\" id=\"save_reply\">发 布</div>"+
									          "<div class=\"clear\"></div>"+
									      "</div>"+
									      "<div class=\"clear\"></div>"+
									    "</div>"+
									  "</div>"+
									"</div>";//+
									//"<input id=\"replyFormParam\" type=\"hidden\" name=\"paramJson\" value='' />" +
									//"</form>"  ;
								return html;
							}
						},
						adapter : function(t,kv){
							return {
								name:kv.customer_auth.lastName+kv.customer_auth.firstName,
								time:comm.date.diffDay_one(kv.customer_review.publishTime,comm.date.local_time()),
								content:t.common.wordLen(kv.customer_review.reviewContent,176),  //字数控制
								logoUrlHref:"<img src='"+kv.customer_att.logoUrl+"'/>",
								reviewId : kv.customer_review.id,
								reviewStatus : kv.customer_review.reviewStatus,
								
								parentId : kv.customer_review.parentId,
								
								//计数
								replyNum : kv.customer_review.reviewNum,
								collectNum : kv.customer_review.collectionNum,
								praiseNum : kv.customer_review.upNum,
								forwardNum : kv.customer_review.reprintNum
							}
						},
				        getCount : function(str){ //计数，统计中英转换后一共多少个字符
				            var len = 0;
				            var str = $.trim(str);
				            for(var i = 0;i < str.length; i++){
				                if(str.charCodeAt(i)>128)len+=2;
				                    else len+=1;
				            }
				            return len;
				        },
						closeWindow : function(t){//关闭窗口
							$("#close_reply").on("click",function(){
								comm.LightBox.hide();
								$("#reply_context").remove();
								$("body").removeAttr("style");
								//delete _this.waterfallPage;
							});
						},
						wordLen : function(str,len){//文字长度
							var count = 0; //计数
							var strings = ""; //拼接字符串
							for(var i=0;i<str.length;i++){
								if(str.charCodeAt(i)>128) count+=2;
									else count+=1;
								if(count>len){
									strings += "<span>......</span><span style=\"display:none;\">"+str.substr(i)+"</span><span class=\"expandOrShrink\">展开</span>";
									break;
								}else{
									strings += str.substr(i,1);
								}
							}
							return strings;
						},
						expandOrShrink : function(el){ //展开或收缩  防冲突失效
							$(el).on("click",function(){ //区分是回复与查看对话
								if($(this).text()=="展开"){
									$(this).parent().find("span:eq(0)").hide();
									$(this).parent().find("span:eq(1)").show();
									$(this).text("收缩");
									_this.common.textareaAct("shrink");
									
									//取出回复高度 回复框73定高
									if($(".t_tc_title").text() != "查看对话"){
										$(".t_tc_main").animate({
											height:$("#reply_list").height()+73+"px"
										});
									};
								}else{
									$(this).parent().find("span:eq(0)").show();
									$(this).parent().find("span:eq(1)").hide();
									$(this).text("展开");
									_this.common.textareaAct("expand");
									
									//取出回复高度 回复框178定高
									if($(".t_tc_title").text() != "查看对话"){
										$(".t_tc_main").animate({
											height:$("#reply_list").height()+178+"px"
										});
										$("#doc_abstract").focus();
									};
									
								}
							});
						},
						showCenter : function(){ //居中显示 80%;
							var sysH = $(window).height()*0.8;
							var windowH = $(".t_tc_main").height();
							if(windowH>sysH){
								$(".t_tc_main").css({"height":sysH+"px","overflow-x":"hidden","overflow-y":"auto"});
							}else{
								$(".t_tc_main").css("height","auto");
							}
							
							var horizontal = $(window).width()/2,vertical = $(window).height()/2;
							var popupW = $("#reply_context").width()/2,popupH = $("#reply_context").height()/2;
							$("#reply_context").css("left",horizontal-popupW).css("top",vertical-popupH);
							comm.LightBox.show();
							$("#lightbox").css("background","#000").css("opacity","0.7");
							$("body").css("overflow","hidden");
						},
						clearFormatWord : function(dom){ //处理拷贝DOM结构
							if(dom.indexOf(">......<")>-1){
								dom = dom.replace("<span>......</span>","");
								dom = dom.replace("<span style=\"display:none;\"","");
								dom = dom.replace("<span style=\"display: none;\">......</span><span style=\"display: inline;\">","");
								dom = dom.replace("<span style=\"display: inline;\">......</span><span style=\"display: none;\">","");
								dom = dom.replace("</span><span class=\"expandOrShrink\">展开</span>","");
								dom = dom.replace("</span><span class=\"expandOrShrink\">收缩</span>","");
								//dom = dom.replace("<span class=\"expandOrShrink\">收缩</span>","");
							}
								return dom;
						},
						textareaAct : function(action){ //文本区域
							if(action=="expand"){
								$("#doc_abstract").animate({height: "97px"});
								$(".video_c_but").fadeIn();
							}else{
								$("#doc_abstract").animate({height:"35px"});
								$(".video_c_but").fadeOut();
							}
						},
						changeTitle : function(src,name){ //改变标题
							var word = "";
							if(src=="chat"){
								word = "查看对话";
							}else{
								word = "回复给<span>"+name+"</span>";
							}
							$("#reply_context .t_tc_title").html(word);
						},
						supportUrl  : {
								praise : PC_CALL + "prefer/create/", 	  //赞
								praiseCancel : PC_CALL + "prefer/delete/", //取消赞
								reply : PC_CALL + "review/create/",  //回复
								collect : PC_CALL + "collection/create/", //收藏
								collectCancel : PC_CALL + "collection/delete/",//收藏取消
								forward : PC_CALL + "reprint/create/", //转发
								forwardCancel : PC_CALL + "reprint/delete/",//取消转发
								chat : PC_CALL + "review/json_list/", //对话
								delreply : PC_CALL + "review/delete/", //删除
								recover : PC_CALL + "review/recover/",   //恢复
								baseInfo : PC_CALL+ "web/user/getWebUser/" //获取当前人信息
						},
						ajaxSend : function(url,params){
							$.ajax({
								url : url,
								type : "post",
								data : params
							});
							return false;
						},
						ajaxResult : function(url,params){
							var result = {};
							$.ajax({
								url : url,
								type : "post",
								data : params,
								async : false,
								dataType : "json",
								success : function(data){
									result = data;
								}
							})
							return result;
						},
						isEmptyObject : function(obj){
							for(var i in obj){
								return false;
							}
							return true;
						}
					},
					waterfallPage : function(t,url,paramJson){ //引入瀑布流
						var scrollpage=1;
						paramJson.pageIndex = function(){
							return scrollpage++;
						};
						$("#reply_context").scrollPaginationT({
							'contentPage' : url,
							'contentData' : paramJson, 
							'scrollTarget' : $(window),
							'heightOffset' : 0,
							'beforeLoad' : function() {
							},
							'afterLoad' : function(elementsLoaded) {
							},
							'loader' : function(data) {
								if($(".t_tc_title").text() === ""){ return false; }
								if(!data.responseObject.responseStatus) { //当返回的状态为false
									return false;
								};
								var data = data.responseObject.responseData;
								if (t.common.isEmptyObject(data)) { //当数据为空时
									$("#reply_context").attr('scrollPaginationT', 'disabled');
									return false;
								}else{
									if(data.data_list.length<paramJson.pageSize){//不为空但小于数据请求数
										$("#reply_context").attr('scrollPaginationT', 'disabled');
									}else{//加载中
										//$("#reply_context").siblings("#EQ_Flag").html(common.TITLE_TEXT.LOAD);
									}
								}
								t.dataCtrl(t,data);
							}
						});
					},
					dataCtrl : function(t,kv){ //瀑布流数据处理
						var html = "<div class=\"reply_space\"></div>";
						$.each(kv.data_list,function(i,el){
							html += t.common.template.addReply(t.common.adapter(t,el));
						})
						
						html = $(html).css({"background":"#f8f7fd"});
						$(html).find(".t_tc_left img").css("border","none");
						$(html).find(".line_place").addClass("reply_bottom_line");
						
						t.common.expandOrShrink($(html).find(".expandOrShrink"));
						
						//只对下层社交起作用
						$(html).find(".widget_v2 li").on("click",function(){
							t.controller.events[$(this).find("div").attr("class").substr(8)](t,this,"chatDown");
						});
						
						$("#reply_list").append(html);
						
						$(".reply_space").removeAttr("style");
						
						//重新计算高度
						var sysH = $(window).height()*0.8;
						var windowH = $(".t_tc_main").height();
						if(windowH>sysH){
							$(".t_tc_main").css({"overflow-x":"hidden","overflow-y":"auto"});
							$(".t_tc_main").animate({height:sysH+"px"},500);
						}else{
							$(".t_tc_main").css("height","auto");
						}
						//－－－
						
					}
					
			}
			
			m.init();
			
			return this;
		}
	});
	
})(jQuery);