/**
 * 功能描述：关注
 * 使用方法：$("el").follow({fId:"关注人ID",fStatus:"关系状态"});
 * 				  必要参数：obj.fid //关注人id
 * 								obj.fStatus //与关注人的关注关系
 * 
 * 				   可选参数 : obj.el 存放需要计数的元素
 * 								 obj.picStyle 图片样式显示风格
 * 
 *                              
 * 注意事件：
 * 引入来源：权限控制 user.login({})
 * 
 * Created by QiaoLiang on 2014.
 */

;(function($){
	$.fn.extend({
		"follow" :  function(options){
			var _this = this;
			f = $.extend({
				//个人首页 fn 
				fn : null,
				//存放关注计数元素
				el : null,
				//组件存放位置
				followPlace : null,
				//执行某个事件 例个人首页，用于点击关注同时刷新关注时，调用外部刷新事件 outEvElName 为元素事件名称
				outEvElName : null,
					//及需要触发的事件
					outEv : null,
				//关注状态 
				fStatus : 1,		//relationship 1 未关注，2 已关注 3 粉丝 4 相互关注
				//样式
				classStyle : "",
				//是否认证
				isValid : true,
				//关注地址
				createURL : PC_CALL+"follow/createFollow/",
				//取消关注地址
				cancelURL : PC_CALL+"follow/cancelFollow/",
				//发送方式
				type : "post",
				//被关注人id
				fId : 0, 
				//图片样式
				picStyle : 1
				
			},options);
			
			//
			var p = {};
			p = {
				el : f.el,
				fId : f.fId,
				cId : f.cId,
				fStatus : f.fStatus,
				fn : f.fn,
				evEl : f.outEvElName,
				ev : f.outEv,
				isValid : f.isValid,
				
				//状态
				add : "add",
				reAdd : "reAdd",
				remove : "remove",
				rtsp : "rtsp",
			};

			var m = {};
			m = {
				init : function(){
					var t = this;
					var arrPicSrc = t.picStyle();
					//choose template
					switch(p.fStatus){
						case 1:
							template = t.template(arrPicSrc.addPic,p.add);
							break;
						case 2:
							template = t.template(arrPicSrc.reAddPic,p.reAdd);
							break;
						case 3:
							template = t.template(arrPicSrc.addPic,p.add);
							break;
						case 4:
							template = t.template(arrPicSrc.rtspPic,p.rtsp);
							break;
						default:
							template = t.template(arrPicSrc.addPic,p.add);
					};
					
					var fp = null;
					if(f.followPlace==null){
						fp = _this;
					}else{
						fp = _this.find(f.followPlace);
					}
					
					fp.append(template).find("div:last").on("click",function(){
						var iThis = $(this);
						user.login({
							callback:function(){
								if(p.el == null){
									t.elNull(iThis ,t,arrPicSrc,p.fStatus);
								}else{
									t.elNotNull(iThis ,t,arrPicSrc,p.el,p.fStatus);
									particularPage.customer();
								}
							},operateType : "follow"
						});
					}).hover(function(){
						t.hoverPic($(this),p.reAdd,p.remove,arrPicSrc.removePic,p.rtsp,p.remove,arrPicSrc.removePic);
					},function(){
						t.hoverPic($(this),p.remove,p.reAdd,arrPicSrc.reAddPic,p.remove,p.rtsp,arrPicSrc.rtspPic);
					});
				},
				template : function(picSrc,status){
					return "<div class='"+f.classStyle+"' style='cursor:pointer;' data-stat='"+status+"' data-refid='"+
					p.fId+"'><img src='"+picSrc+"'></div>";
				},
				ajaxSend : function(url,fId){
					$.ajax({
						url : url,
						type : f.type,
						data : {
							refId : fId
						}
					});
				},
				togglePic : function(el,stat,picSrc){
					el.attr("data-stat",stat);
					el.find("img").attr("src",picSrc);
				},
				hoverPic : function(_this,rA,rm,picSrc,rtsp,rm2,otherPicsrc){
					var dataStat = _this.attr("data-stat");
					if(dataStat==rA && p.fStatus!=4){
						_this.attr("data-stat",rm);
						_this.find("img").attr("src",picSrc);
					}
					if((dataStat==rtsp && p.fStatus==4) || (dataStat==rA && p.fStatus==4) || (dataStat==rtsp && p.fStatus==3)){
						_this.attr("data-stat",rm2);
						_this.find("img").attr("src",otherPicsrc);
					}
				},
				elNull : function(_this,t,arrPicSrc,fStatus){
					var dataStat = _this.attr("data-stat");
					if(dataStat==p.remove || dataStat==p.reAdd){
						t.ajaxSend(f.cancelURL,p.fId);
						t.togglePic(_this,p.add,arrPicSrc.addPic);
					}else if(dataStat==p.add){
						if(fStatus==3 || fStatus==4){
							t.ajaxSend(f.createURL,p.fId);
							t.togglePic(_this,p.rtsp,arrPicSrc.rtspPic);
						}else{
							t.ajaxSend(f.createURL,p.fId);
							t.togglePic(_this,p.reAdd,arrPicSrc.reAddPic);
						}
					}
				},
				elNotNull : function(_this,t,arrPicSrc,numEl,fStatus){
					var dataStat = _this.attr("data-stat");
					if(dataStat==p.remove || dataStat==p.reAdd){
						if(parseInt(numEl.text())>0){
							numEl.html(parseInt(numEl.text())-1);
							t.ajaxSend(f.cancelURL,p.fId);
							t.togglePic(_this,p.add,arrPicSrc.addPic);
						}
					}else if(dataStat==p.add){
						if(fStatus==3 || fStatus==4){
							numEl.html(parseInt(numEl.text())+1);
							t.ajaxSend(f.createURL,p.fId);
							t.togglePic(_this,p.reAdd,arrPicSrc.rtspPic);
						}else{
							numEl.html(parseInt(numEl.text())+1);
							t.ajaxSend(f.createURL,p.fId);
							t.togglePic(_this,p.reAdd,arrPicSrc.reAddPic);
						}
					}
				},
				picStyle : function(){
					switch(f.picStyle){
					case 2 :
						picSrc = {
							addPic : "http://img00.allinmd.cn/button/bt_follow.png",
							reAddPic : "http://img00.allinmd.cn/button/bt_follow_ok.png",
							removePic : "http://img00.allinmd.cn/button/bt_cancel_follow.png",
							rtspPic : "http://img00.allinmd.cn/button/bt_interactive_small.png"
						};
						break;
					case 3:
						picSrc = {
							addPic : "http://img00.allinmd.cn/organization/add_gz.png",
							reAddPic : "http://img00.allinmd.cn/organization/ygz.png",
							removePic : "http://img00.allinmd.cn/organization/cancel.png"
							//rtspPic : "http://img00.allinmd.cn/button/bt_interactive_small.png"
							};
						break;	
					default :
						picSrc = {
							addPic : "http://img00.allinmd.cn/fs_member/tj_gz.png",
							reAddPic : "http://img00.allinmd.cn/fs_member/gzing.png",
							removePic : "http://img00.allinmd.cn/button/qx_gz_big.png",
							rtspPic : "http://img00.allinmd.cn/button/bt_interactive_big.png"
						};
					}
					return picSrc;
				}
			};
			
			//特殊页面调用
			var particularPage = {};
			particularPage = {
					customer : function(){
						//调用进度条
						if(p.fn != null){
							p.fn();
						}
						//调用局部刷新关注
//						if(p.evEl != null && p.ev != null){
//							$(p.evEl).trigger(p.ev);
//						};
					}
			};

			m.init();
			
			return _this;
		}
	});
})(jQuery);