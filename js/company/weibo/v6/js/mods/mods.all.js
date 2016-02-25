/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/2/25.
 */
define("mod/mods.all", function(require, a, b) {}),
	define("mod/addkeyword", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/filtercreat")
				, e = (require("core/util/wordsCount"),
					require("ux/toast"))
				, f = require("ux/alertPop")
				, g = new f
				, h = $(a).find("#J-key-add")
				, i = $(a).find("input")
				, j = $(a).find('[data-node="inputInfo"]')
				, k = $(a).find('[data-node="clear"]')
				, l = $(a).find(".tips")
				, m = function(a, b) {
					1 == b ? g.init({
						wrapperId: "J-setBlockPop" + b,
						title: "屏蔽失败",
						info: a,
						cancelBtn: {
							id: "J-block-cancel" + b,
							txt: "以后再说"
						},
						confirmBtn: {
							id: "J-block-member" + b,
							txt: "开通年费会员",
							callback: function() {
								g.close(),
									window.location.href = "http://vip.weibo.cn/members/center/vipay"
							}
						}
					}) : g.init({
						wrapperId: "J-setBlockPop" + b,
						title: "屏蔽失败",
						info: a,
						cancelBtn: {
							id: "J-block-cancel" + b,
							txt: "我知道了"
						}
					})
				}
				;
			i.on("focus", function() {
				l.hide(),
					j.show()
			}),
				i.on("input", function() {
					i.val().length > 0 ? (h.removeClass("disabled"),
						k.show()) : (h.addClass("disabled"),
						k.hide())
				}),
				k.on("click", function() {
					i.val(""),
						i.focus(),
						h.addClass("disabled"),
						k.hide()
				}),
				h.on("click", function() {
					$(this).hasClass("disabled") || d.get("addkeyword", {
						data: {
							words: $(".key").val()
						},
						success: function(a) {
							1 == a.ok ? (e.success("屏蔽成功！"),
								setTimeout(function() {
									history.go(-1)
								}, 1e3)) : -102 == a.ok ? m("您最多可以屏蔽3个关键词，成为年费会员可以屏蔽6个关键词", 1) : -103 == a.ok ? m("年费会员最多可以屏蔽6个关键词，您已达到数量上限", 0) : (l.text(a.msg),
								l.show(),
								j.hide())
						},
						error: function(a, b, c) {
							l.text(b.msg),
								l.show(),
								j.hide()
						}
					})
				})
		}
	}),
	define("conf/inter/filtercreat", function(require, a, b) {
		var c = require("core/io/trans")();
		c.set("addkeyword", {
			url: "/members/membersDeal/wordFilterCreate?",
			type: "GET"
		}),
			b.exports = c
	}),
	define("core/io/trans", function(require, a, b) {
		var c = require("core/util/keepParams")
			, d = require("../../ux/alertPop")
			, d = require("../../ux/alertPop");
		b.exports = function() {
			var a = {}
				, b = {};
			return b.set = function(b, c) {
				if ("undefined" != typeof a[b])
					throw b + " 接口已经被定义！";
				a[b] = c
			}
				,
				b.get = function(c, d) {
					if ("undefined" == typeof a[c])
						throw c + " 接口没有定义！";
					var e = $.extend({}, a[c], d);
					b.json(e)
				}
				,
				b.json = function(a) {
					a.url = c(a.url, !0),
						a.type = a.type || "get",
						a.dataType = a.dataType || "json",
						a.timeout = a.timeout || 1e3 * ("get" == a.type ? 30 : 60),
					"post" == a.type.toLowerCase() && (a.data = a.data || {},
					a.data.st || (a.data.st = $render_data.common.st));
					var e = a.success;
					a.success = function(f) {
						var g = ((new Date).getTime(),
						"" + f.ok);
						switch (g) {
							case "-3":
							case "20031":
								$("#J-toast-wrapper").addClass("hid");
								var h = new d;
								return h.init({
									wrapperId: "J-" + (new Date).getTime(),
									html: '<div style="overflow:hidden;"><p style="margin:6px auto 22px;font-size:1.125rem;text-align:center">你发的太疯狂啦，请验证一下</p><img style="display:block;margin:0 0 15px;height:30px;" src="http://weibo.cn/interface/f/ttt/captcha/show.php?c=' + f.captId + '" alt="验证码获取失败" /></div>',
									inputArr: [{
										placeholder: "请输入验证码"
									}],
									cancelBtn: {},
									confirmBtn: {
										callback: function(c) {
											var d = c.find("input")
												, e = String.prototype.trim.call(d.val());
											return "" == e ? (h.showError(d, "验证码不能为空"),
												!1) : (h.close(),
												a.data.captId = f.captId,
												a.data.code = e,
												void b.json(a))
										}
									}
								}),
									!1;
							case "-7":
								window.location.href = "/security?from=0";
								break;
							case "-8":
								window.location.href = "/security";
								break;
							case "-9":
								"post" == a.type.toLowerCase() ? (alert("您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。"),
									location.href = "/security/readonly") : e(f);
								break;
							case "-9+225":
							case "-9+222":
								"post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"),
									(new d).init({
										wrapperId: "J-" + (new Date).getTime(),
										info: "您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。",
										confirmBtn: {
											callback: function() {
												window.location.href = "/security/stolenReadOnly"
											}
										}
									})) : e(f);
								break;
							case "-98":
							case "-100":
								location.href = c(f.url || "/login?backUrl=" + decodeURIComponent(location.href));
								break;
							case "-255":
								alert("您的帐号疑似被盗，已经被系统锁定部分功能，为了保障您的帐号安全，请立即修改密码。"),
									location.href = "/security";
								break;
							case "403":
								$("#J-toast-wrapper").addClass("hid"),
									alert("您输入的网址疑似为不安全链接，无法发表，请谅解。\n如需帮助，请联系客服。");
								break;
							case "2014":
								location.href = data.location;
								break;
							case "20016":
								$("#J-toast-wrapper").addClass("hid"),
									alert("发微博太多啦，休息一会儿吧!");
								break;
							case "20018":
								$("#J-toast-wrapper").addClass("hid"),
									alert("您输入的网址疑似为不安全链接，无法发表，请谅解。");
								break;
							case "20019":
								$("#J-toast-wrapper").addClass("hid"),
									alert("相同内容请隔10分钟再进行发布哦。");
								break;
							case "20020":
								$("#J-toast-wrapper").addClass("hid"),
									alert("由于该内容为广告信息，无法进行发布！");
								break;
							case "20021":
								$("#J-toast-wrapper").addClass("hid"),
									alert("抱歉，此内容违反了《微博社区管理规定(试行)》或相关法规政策，无法进行指定操作。");
								break;
							case "20038":
								$("#J-toast-wrapper").addClass("hid"),
									alert("您刚才已经发过相似的内容啦，建议您第二天再尝试！");
								break;
							case "20046":
								"post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"),
									(new d).init({
										wrapperId: "J-" + (new Date).getTime(),
										info: "您的登录邮箱尚未验证，不能使用完整功能，请验证邮箱。",
										cancelBtn: {},
										confirmBtn: {
											callback: function() {
												window.location.href = "/edmActive?disable_sinaurl=1"
											}
										}
									})) : e(f);
								break;
							case "ag:4_st:3":
								"post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"),
									(new d).init({
										wrapperId: "J-" + (new Date).getTime(),
										info: "你的邮箱未激活！激活邮箱，即可使用邮箱和密码登录微博，安全又方便。",
										cancelBtn: !0,
										confirmBtn: {
											txt: "立即激活",
											callback: function() {
												window.location.href = "https://passport.sina.cn/bindname/mail?entry=mweibo"
											}
										}
									})) : e(f);
								break;
							default:
								e(f)
						}
					}
						,
						$.ajax(a)
				}
				,
				b
		}
	}),
	define("core/util/keepParams", function(require, a, b) {
		b.exports = function(a, b) {
			var c, d = $render_data.common;
			return a && d && (c = b ? d.ajaxPassParams : d.passParams,
			c && (a += -1 != a.indexOf("?") ? "&" + c : "?" + c)),
				a
		}
	}),
	define("ux/alertPop", function(require, a, b) {
		function c() {
			function a(a) {
				return m = a || {},
					m.wrapperId ? $("#" + m.wrapperId).size() ? void alert(m.wrapperId + " ID 已经被占用啦！") : (h = d(m),
						e.append(h),
						$("body").append(e),
						i = $("#" + (m.wrapperId || "J-alertPop")),
						j = i.find(".wrapper"),
						k = i.find("#" + (m.cancelBtn && m.cancelBtn.id || "J-alertPop-cancel")),
						l = i.find("#" + (m.confirmBtn && m.confirmBtn.id || "J-alertPop-confirm")),
						g(),
						i.removeClass("hid"),
						f(),
						void (m.html && m.htmlFunction && m.htmlFunction.call(this, i.find(".custom-wrapper")))) : void alert("alertPop 需要唯一标示 ID，庸人这么多，牵错手了可不是闹着玩儿的！")
			}
			function b(a, b, c) {
				c = "number" == typeof c && c > 3e3 ? c : 3e3;
				var d = a.parent().parent().find(".error-label");
				d.html(b || "请重新输入").removeClass("hid"),
					clearTimeout(n.errorTimer),
					n.errorTimer = setTimeout(function() {
						d.addClass("hid").html("")
					}, c)
			}
			function c() {
				i.addClass("hid"),
					i.remove()
			}
			function f() {
				var a = $("body").outerHeight(!0)
					, b = j.outerHeight()
					, c = j.outerWidth()
					, d = window.scrollY
					, e = window.innerHeight
					, f = window.innerWidth;
				j.css({
					top: (e - b) / 2 + d,
					left: (f - c) / 2
				}),
					i.css({
						height: a > e ? a : e
					})
			}
			function g(a) {
				l.on("click", o.confirm),
					k.on("click", o.cancel)
			}
			var h, i, j, k, l, m, n = {}, o = {
				cancel: function() {
					var a = $(this);
					if (!a.hasClass("isDisabled"))
						return c(),
						m.cancelBtn && m.cancelBtn.callback && m.cancelBtn.callback.call(this, i),
							!1
				},
				confirm: function() {
					var a = $(this);
					if (!a.hasClass("isDisabled"))
						return m.confirmBtn && m.confirmBtn.callback ? m.confirmBtn.callback.call(this, i) : c(),
							!1
				}
			};
			return {
				init: a,
				showError: b,
				close: c
			}
		}
		var d = require("tpl/ux/alertPop")
			, e = $(document.createDocumentFragment());
		b.exports = c
	}),
	define("tpl/ux/alertPop", function(require, a, b) {
		require("core/tplFunc");
		b.exports = function(a) {
			var b = '<div id="' + a.wrapperId + '" class="alert-wrapper hid"><article class="wrapper">';
			if (a.title && (b += '<header class="title">' + a.title + "</header>"),
					b += " ",
				a.info && (b += '<span class="info">' + a.info + "</span>"),
					b += " ",
				a.html && (b += '<div class="custom-wrapper">' + a.html + "</div>"),
					b += " ",
				a.label && (b += '<span class="label">' + a.label + "</span>"),
					b += " ",
				a.inputArr && a.inputArr.length) {
				b += " ";
				var c = a.inputArr;
				if (c)
					for (var d, e = -1, f = c.length - 1; f > e; ) {
						if (d = c[e += 1],
								b += '<div class="input-wrapper"><div class="input-item">',
							"object" == typeof d && d.length) {
							b += " ";
							var g = d;
							if (g)
								for (var h, i = -1, j = g.length - 1; j > i; )
									h = g[i += 1],
										b += '<input id="' + (h.id || "") + '" name="' + (h.name || "") + '" type="text" placeholder="' + (h.placeholder || "") + '" value="' + (h.value || "") + '"/>';
							b += " "
						} else
							b += '<input id="' + (d.id || "") + '" name="' + (d.name || "") + '" type="text" placeholder="' + (d.placeholder || "") + '" value="' + (d.value || "") + '"/>';
						b += '</div><p class="error-label hid"></p></div>'
					}
				b += " "
			}
			return b += '<div class="action">',
			(a.cancelBtn || !a.cancelBtn && !a.confirmBtn) && (b += '<a id="' + (a.cancelBtn && a.cancelBtn.id || "J-alertPop-cancel") + '" href="javascript:void(0);" class="btn cancel-btn',
			a.cancelBtn && a.cancelBtn.isDisabled && (b += " isDisabled"),
				b += '">' + (a.cancelBtn && a.cancelBtn.txt || "取消") + "</a>"),
				b += " ",
			a.confirmBtn && (b += '<a id="' + (a.confirmBtn && a.confirmBtn.id || "J-alertPop-confirm") + '" href="javascript:void(0);" class="btn confirm-btn',
			a.confirmBtn && a.confirmBtn.isDisabled && (b += " isDisabled"),
				b += '">' + (a.confirmBtn && a.confirmBtn.txt || "确定") + "</a>"),
				b += "</div></article></div>"
		}
	}),
	define("core/tplFunc", function(require, a, b) {
		var c = require("core/util/keepParams")
			, d = require("core/util/checkLogin");
		require("core/util/accessLevel");
		a.canAccessLink = function() {
			return !!d
		}(),
			a.href = function(b) {
				var e = b;
				return b && ("object" != typeof b || (e = b.urls && b.urls.h5 || b.scheme)) ? !d && $render_data.common.showPopLogin ? "javascript:require(['brick'],function(brick){brick.notice.trigger('AccessDenied');});" : a.canAccessLink ? 0 === e.indexOf("javascript:") ? e : c(e) : "javascript:require(['brick'],function(brick){brick.notice.trigger('AccessDenied');});" : "javascript:;"
			}
	}),
	define("core/util/checkLogin", function(require, a, b) {
		b.exports = function() {
			return !(1 != $render_data.common.isLogin && 1 != $render_data.common.login)
		}()
	}),
	define("core/util/accessLevel", function(require, a, b) {
		b.exports = $render_data.common.seeLevel || 0
	}),
	define("core/util/wordsCount", function(require, a, b) {
		function c(a) {
			if (!a)
				return 0;
			var b = a.match(/[^\x00-\xff]/g);
			return a.length + (b ? b.length : 0)
		}
		b.exports = function(a) {
			for (var b = 140, d = 41, e = 20, f = a.replace(/(^\s*)|(\s*$)/g, ""), g = a.match(/http:\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+([-A-Z0-9a-z_\$\.\+\!\*\(\)\/,:;@&=\?\~\#\%]*)*/gi) || [], h = 0, i = 0, j = g.length; j > i; i++) {
				var k = c(g[i]);
				/^(http:\/\/t\.cn)/.test(g[i]) || (h += (/^(http:\/\/)+(t\.sina\.com\.cn|t\.sina\.cn)/.test(g[i]) || /^(http:\/\/)+(weibo\.com|weibo\.cn)/.test(g[i])) && d >= k ? k : b >= k ? e : k - b + e,
					f = f.replace(g[i], ""))
			}
			return Math.ceil((h + c(f)) / 2)
		}
	}),
	define("ux/toast", function(require, a, b) {
		var c = require("tpl/ux/toast")
			, d = $(document.createDocumentFragment());
		d.append(c());
		var e = function() {
				var a, b, c, e, f, g = $("body").height(), h = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
					document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight), i = g > h ? g : h, j = ["isLoad", "isSuccess", "isError", "isAlarm"], k = {
						status: 0,
						msg: "加载中"
					}, l = function(a, b) {
						p({
							status: 0,
							msg: a,
							time: b || null
						})
					}
					, m = function(a, b) {
						p({
							status: 1,
							msg: a,
							time: b || null
						})
					}
					, n = function(a, b) {
						p({
							status: 2,
							msg: a,
							time: b || null
						})
					}
					, o = function(a, b) {
						p({
							status: 3,
							msg: a,
							time: b || null
						})
					}
					, p = function(g) {
						f || ($("body").append(d),
							b = $("#J-toast-wrapper"),
							c = $("#J-toast-box"),
							e = $("#J-toast-txt")),
							f = !0,
							a = document.documentElement.scrollTop || document.body.scrollTop,
							g ? k = g : "",
							e.html(k.msg),
							c.removeClass("isLoad").addClass(j[k.status]),
							b.removeClass("hid").css("height", i),
							c.css("margin-top", (h - c.innerHeight()) / 2 + a),
							this.timer = setTimeout(function() {
								q()
							}, k.time || 3e3)
					}
					, q = function() {
						clearTimeout(this.timer),
							b.addClass("hid"),
							c.removeClass(j[k.status]).addClass("isLoad")
					}
					, r = function() {
						b.remove(),
							$(document).off("click", "#J-toast-wrapper", s)
					}
					, s = function(a) {
						var b = a.target || a.srcElement;
						return "J-toast-wrapper" === b.id ? (q(),
							!1) : void 0
					}
					;
				return this.timer = 0,
					$("body").on("touchend", "#J-toast-wrapper", s),
				{
					show: p,
					close: q,
					distroy: r,
					loading: l,
					success: m,
					error: n,
					alarm: o
				}
			}
			;
		b.exports = new e
	}),
	define("tpl/ux/toast", function(require, a, b) {
		require("core/tplFunc");
		b.exports = function(a) {
			var b = '<section id="J-toast-wrapper" class="toast-wrapper hid"><p id="J-toast-box" class="toast-info isLoad"><i class="icon"></i><span id="J-toast-txt">提示文字</span></p></section>';
			return b
		}
	}),
	define("mod/base", function(require, a, b) {
		b.exports = function(a, b) {
			var brick = require("brick")
				, notice = brick.notice
				, quicklyReg = require("ux/quicklyReg")
				, openClient = require("core/device/openClient")
				, actLog = require("core/io/actLog")
				, h = require("core/device/geo")
				, i = require("ux/toast")
				, j = $(a);
			if (top.location != self.location)
				if ("" != document.referrer) {
					var k = /^([\w\d]+):\/\/([\w\d\-_]+(?:\.[\w\d\-_]+)*)/.exec(document.referrer);
					/(\.sina(\.com)?\.cn|\.weibo\.(cn|com)|\.meishitui\.com|open\.mb\.qq\.com)$/.test(k[2]) || (top.location = self.location)
				} else
					top.location = self.location;
			if ("standalone" in window.navigator && window.navigator.standalone) {
				var l, m = !1;
				document.addEventListener("click", function(a) {
					for (l = a.target; "A" !== l.nodeName && "HTML" !== l.nodeName; )
						l = l.parentNode;
					"href" in l && -1 !== l.href.indexOf("http") && (-1 !== l.href.indexOf(document.location.host) || m) && (a.preventDefault(),
						document.location.href = l.href)
				}, !1)
			}
			var n = require("core/lazyload");
			n.init();
			var o = $render_data.common;
			if (o.callClient) {
				var p = o.scheme
					, q = {
					scheme_IOS: p,
					scheme_Adr: p
				};
				if (o.params) {
					var r = o.params.sourceType;
					("sms" == r || "alipay" == r) && (q.downurl_IOS = q.downurl_Adr = null )
				}
				openClient.init(q)
			}
			if (o.showAppTips) {
				var s = $('<div class="mod-app-tips ani-in"><div class="layout-box box-center-v"><span class="weibo-icon"></span><p class="box-col layer-wz">用微博App给你更好的体验</p><a href="javascript:;" class="btn-app-open">立即打开</a><a href="javascript:;" class="btn-close-layer"></a></div></div>');
				s.on("click", ".btn-app-open", function() {
					var a = {}
						, b = o.scheme || "sinaweibo://home"
						, c = o.scheme || "sinaweibo://splash";
					if (o.params.uicode) {
						var d = "luicode=" + o.params.uicode + "&lfid=" + (o.params.wm || o.wm);
						b += (-1 === b.indexOf("?") ? "?" : "&") + d,
							c += (-1 === c.indexOf("?") ? "?" : "&") + d
					}
					a.scheme_IOS = b,
						a.scheme_Adr = c,
						actLog("786"),
						openClient.init(a)
				}),
					s.on("click", ".btn-close-layer", function() {
						s.addClass("ani-out"),
							setTimeout(function() {
								s.remove()
							}, 1e3);
						var a = new Date(Date.now() + 6048e5).toGMTString();
						document.cookie = "APP_TIPS_HIDE=1;expires=" + a
					}),
					j.after(s)
			}
			notice.on("AccessDenied", function() {
				$render_data.common.showPopLogin ? quicklyReg.init() : location.href = $render_data.common.loginUrl || "http://m.weibo.cn/login"
			}),
				notice.on("OpenWeiboApp", function(a) {
					var b = {};
					a && (b.downurl_IOS = b.downurl_Adr = a),
						actLog("433"),
						openClient.init(b)
				}),
				notice.on("addGeo", function(a) {
					i.loading("正在获取经纬度"),
						h({
							callback: function(b, c) {
								b ? i.error(b) : location.href = a + "&lat=" + c.latitude + "&lon=" + c.longitude
							}
						})
				})
		}
	}),
	define("ux/quicklyReg", function(require, a, b) {
		var c, d = require("core/lib/rsaTools"), e = require("conf/inter/quicklyReg"), f = require("core/io/actLog"), g = require("tpl/ux/quicklyReg"), h = $(document.createDocumentFragment()), i = {
			set: function(a, b, c) {
				var d = c || 0;
				if (d > 0) {
					var e = new Date;
					e.setTime(e.getTime() + 60 * d * 1e3),
						document.cookie = a + "=" + escape(b) + ";expires=" + e.toGMTString()
				} else
					document.cookie = a + "=" + escape(b)
			},
			get: function(a) {
				var b = document.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
				return null  != b ? unescape(b[2]) : null
			},
			"delete": function(a) {
				var b = new Date
					, c = this.get(a);
				b.setTime(b.getTime() - 1e4),
				null  != c && (document.cookie = a + "=" + c + ";expires=" + b.toGMTString())
			}
		}, j = {
			_regex: /^[a-zA-Z0-9\.\_\-\?\~\!\@\#\$\%\^\&\*\\\+\`\=\[\]\(\)\{\}\|\;\'\:\"\,\/\<\>]{6,16}$/,
			_orderStr: function(a, b) {
				if (!a || !b)
					throw "orderStr error!";
				"string" != typeof a && (a += ""),
				"string" != typeof b && (b += "");
				var c = a.charCodeAt(0)
					, d = b.charCodeAt(0)
					, e = c > d;
				if (e) {
					var f = c;
					c = d,
						d = f
				}
				for (var g = [], h = c; d >= h; h++)
					g.push(String.fromCharCode(h));
				return e && g.reverse(),
					g.join("")
			},
			_isOrder: function(a, b) {
				return a && a.length && a.length > 1 && function() {
						for (var c = 0; c < b.length; c++)
							if (b[c].indexOf(a) >= 0)
								return !0;
						return !1
					}()
			},
			_bLength: function(a) {
				if (!a)
					return 0;
				var b = a.match(/[^\x00-\xff]/g);
				return a.length + (b ? b.length : 0)
			},
			_lenLimit: function(a, b, c) {
				var d = this._bLength(a);
				return !(b > d || d > c)
			},
			_isWeakPasswd: function(a, b) {
				if (/^(112233|123123|123321|123456|654321|abcdef|abcabc|abc123|a1b2c3|aaa111|123qwe|qwerty|qweasd|admin|password|p@ssword|passwd|iloveyou|5201314)$/.test(a))
					return !0;
				if (/^([a-zA-Z0-9])\1+$/.test(a))
					return !0;
				if (this._isOrder(a, b))
					return !0;
				if (/^([a-zA-Z]+)([0-9]+)$/.test(a) || /^([0-9]+)([a-zA-Z]+)$/.test(a)) {
					var c = RegExp.$1
						, d = RegExp.$2;
					if (this._isOrder(c, b) && this._isOrder(d, b))
						return !0
				}
				return !1
			},
			_isStrongPasswd: function(a) {
				var b = a.match(/[a-z]/gi)
					, c = a.match(/[0-9]/gi)
					, d = a.match(/([^a-z0-9])/gi);
				return b && c && d ? !0 : b && c ? b.length + c.length >= 11 : b && d ? b.length + d.length >= 11 : c && d ? c.length + d.length >= 11 : !1
			},
			_isWeird: function(a) {
				return !/^[a-zA-Z0-9\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\uFF01\u201c\u201d\u2018\u2019\u300e\u300f\u300c\u300d\uFF09\uFF08\.\_\-\?\~\!\@\#\$\%\^\&\*\\\+\`\=\[\]\(\)\{\}\|\;\'\:\"\,\/\<\>]+$/i.test(a)
			},
			check: function(a, b, c) {
				var d = [this._orderStr("a", "z"), this._orderStr("z", "a"), this._orderStr("0", "9"), this._orderStr("9", "0")]
					, b = b || 6
					, c = c || 16;
				return {
					isBase: this._regex.test(a),
					isInLength: this._lenLimit(a, b, c),
					isWeak: this._isWeakPasswd(a, d),
					isWeired: this._isWeird(a),
					isStrong: this._isStrongPasswd(a)
				}
			}
		}, k = {
			init: function(a) {
				var a = a || {};
				if ("weixin" == $render_data.common.sourceType)
					return void (window.location.href = $render_data.common.wx_authorize);
				if (!this._isInit) {
					if ($("body").append(h.append(g(a))),
							h = null ,
							this.wrapper = $("#J-wx-reg"),
						0 == this.wrapper.size())
						return void console.log("quickyreg 模板没有加载~ ");
					this.stepWrapper = this.wrapper.find(".quicklyRegPopup-box"),
						this.phoneWrapper = this.stepWrapper.find("#J-wx-phone"),
						this.phoneInput = this.phoneWrapper.find("input").eq(0),
						this.vCodeInput = this.phoneWrapper.find("input").eq(1),
						this.phoneCancel = this.phoneWrapper.find("#J-phone-cancel"),
						this.phoneConfirm = this.phoneWrapper.find("#J-phone-confirm"),
						this.pwdWrapper = this.stepWrapper.find("#J-wx-pwd"),
						this.pwdPhone = this.pwdWrapper.find("#J-pwd-phone"),
						this.pwdDefault = this.pwdWrapper.find("#J-pwd-default"),
						this.pwdInput = this.pwdWrapper.find("input").eq(0),
						this.pwdChange = this.pwdWrapper.find("#J-pwd-change"),
						this.pwdCancel = this.phoneWrapper.find("#J-pwd-cancel"),
						this.pwdConfirm = this.phoneWrapper.find("#J-pwd-confirm"),
						this.resultWrapper = this.wrapper.find(".quicklyRegPopup-result"),
						this.resultInfo = this.resultWrapper.find(".result-info"),
						this.isPopupAgain = a.isPopupAgain,
						this._bindEvent()
				}
				this.wrapper.removeClass("hid"),
					this.wrapper.css({
						opacity: 1,
						height: $("body").height() > window.innerHeight ? $("body").height() : window.innerHeight
					}),
					this.wrapper[0].style.webkitTransitionDuration = 0,
					this.isPopupAgain ? (this.pwdPhone.html(m.substr(0, 3) + " " + m.substr(3, 4) + " " + m.substr(7)),
						this.pwdDefault.html(n),
						this.phoneWrapper.addClass("hid"),
						this.pwdWrapper.removeClass("hid")) : this._actCode(555, "quickyreg pop"),
					this._posCenter(this.stepWrapper),
					this._rsa = new d,
					this._rsa.setPublic("9EFA113A6C785D5976DDBCFFD7FCED2D2AF4A3A3C0AFB5442CD756754453DD7D6A6C663B51460371A90C50717919D37711F8824269675762AB3AAC0D8535178E58787A3B05A7420F9DBF38F9C55E5F20483574738F8A23C15C820532EA1A24C0CDCF718F6ECABBB95C90C5BF5DAA1DBF0354BA98BD891E948CC38AA432FCC7BB", "10001")
			},
			_close: function() {
				var a = this;
				this.wrapper[0].style.webkitTransitionDuration = "800ms",
					this.wrapper.css("opacity", 0),
					setTimeout(function() {
						a.wrapper.addClass("hid"),
							a.wrapper.find("input").val(""),
							a.pwdWrapper.addClass("hid"),
							a.phoneWrapper.removeClass("hid")
					}, 800)
			},
			_eventsForID: {
				"J-phone-cancel": function(a) {
					this._close(),
						this._actCode("437", "取消验证")
				},
				"J-phone-fetch": function(a) {
					var b = this;
					if (!a.hasClass("isDisabled")) {
						var d = String.prototype.trim.call(this.phoneInput.val());
						this._checkPhone(d) && (a.addClass("isDisabled"),
							e.get("fetchVcode", {
								data: "phone=" + encodeURIComponent(d),
								success: function(d) {
									if (1 != d.ok)
										b._showMsg(b.phoneInput, d.msg),
											a.removeClass("isDisabled");
									else {
										b.phoneWrapper.find("#J-phone-confirm").removeClass("isDisabled"),
										d.data && (b._isUser = !0),
											a.html('<span id="J-fetch-timer">120</span>s后重新获取');
										var e = b.phoneWrapper.find("#J-fetch-timer");
										clearInterval(c),
											c = setInterval(function() {
												var b = e.html();
												return 0 == b ? (clearInterval(c),
													void a.removeClass("isDisabled").html("重新获取")) : void e.html(b - 1)
											}, 1e3)
									}
								}
							}))
					}
				},
				"J-phone-confirm": function(a) {
					var b = this;
					if (!a.hasClass("isDisabled")) {
						var c = String.prototype.trim.call(this.phoneInput.val())
							, d = String.prototype.trim.call(this.vCodeInput.val());
						this._phone = c,
							this._isUser ? e.get("phoneVcodeLogin", {
								data: "phone=" + encodeURIComponent(c) + "&code=" + encodeURIComponent(d),
								success: function(a) {
									1 == a.ok ? (b.stepWrapper.addClass("hid"),
										b.resultInfo.html("登录成功"),
										b.resultWrapper.addClass("result-success").removeClass("hid"),
										b._posCenter(b.resultWrapper),
										setTimeout(function() {
											location.reload()
										}, 500)) : b._showMsg(b.vCodeInput, a.msg)
								}
							}) : e.get("phoneVcodeReg", {
								data: "phone=" + encodeURIComponent(c) + "&code=" + encodeURIComponent(d) + "&" + decodeURIComponent(i.get("M_WEIBOCN_PARAMS")),
								success: function(a) {
									1 == a.ok ? (b.phoneWrapper.addClass("hid"),
									a.data.pwd && (b.pwdPhone.html(c.substr(0, 3) + " " + c.substr(3, 4) + " " + c.substr(7)),
										b.pwdDefault.html(a.data.pwd),
										b._defaultPwd = a.data.pwd),
										b.pwdWrapper.removeClass("hid")) : b._showMsg(b.vCodeInput, a.msg)
								}
							})
					}
				},
				"J-qq": function(a) {
					return this._actCode("440", "qq授权登录"),
						setTimeout(function() {
							location.href = a.attr("data-url")
						}, 50),
						!1
				},
				"J-wx": function(a) {
					return this._actCode("718", "微信帐号登录"),
						setTimeout(function() {
							location.href = a.attr("data-url")
						}, 50),
						!1
				},
				"J-pwd-change": function(a) {
					"password" == this.pwdInput.attr("type") ? (this.pwdInput.attr("type", "text"),
						a.html("隐藏")) : (this.pwdInput.attr("type", "password"),
						a.html("显示"))
				},
				"J-pwd-cancel": function(a) {
					this._actCode("441", "取消设置密码"),
						this._close(),
						this._phone ? (i.set("QUICKLY_REG_TIME", (new Date).getTime(), 60),
							i.set("QUICKLY_REG_PHONE", this._phone, 60),
							i.set("QUICKLY_REG_DEFAULT_PWD", this._defaultPwd, 60),
							setTimeout(function() {
								location.reload()
							}, 1e3)) : (i["delete"]("QUICKLY_REG_TIME"),
							i["delete"]("QUICKLY_REG_PHONE"),
							i["delete"]("QUICKLY_REG_DEFAULT_PWD"))
				},
				"J-pwd-confirm": function(a) {
					var b = this;
					if (!a.hasClass("isDisabled")) {
						a.addClass("isDisabled");
						var c = String.prototype.trim.call(this.pwdInput.val());
						this._checkPwd(c) ? e.get("changePwd", {
							data: "phone=" + encodeURIComponent(m ? m : b._phone) + "&newpwd=" + b._rsa.encrypt(encodeURIComponent(c)),
							success: function(c) {
								-6 == c.ok && c.data.url ? location.href = c.data.url : 1 == c.ok ? (b.stepWrapper.addClass("hid"),
									b.resultInfo.html("密码设置成功"),
									b.resultWrapper.addClass("result-success").removeClass("hid"),
									b._posCenter(b.resultWrapper),
									i["delete"]("QUICKLY_REG_TIME"),
									i["delete"]("QUICKLY_REG_PHONE"),
									i["delete"]("QUICKLY_REG_DEFAULT_PWD"),
									setTimeout(function() {
										location.reload()
									}, 1e3)) : (a.removeClass("isDisabled"),
									b.stepWrapper.addClass("hid"),
									b.resultInfo.html(c.msg),
									b.resultWrapper.addClass("result-fail").removeClass("hid"),
									b._posCenter(b.resultWrapper))
							}
						}) : a.removeClass("isDisabled")
					}
				},
				"J-pwd-reset": function(a) {
					this._actCode("443", "重新设置"),
						this.resultWrapper.addClass("hid").removeClass("result-fail"),
						this.phoneWrapper.addClass("hid"),
						this.pwdWrapper.removeClass("hid"),
						this.stepWrapper.removeClass("hid"),
						this._posCenter(this.stepWrapper)
				},
				"J-pwd-skip": function(a) {
					this._actCode("441", "跳过设置"),
						this._close(),
						location.reload()
				}
			},
			_bindEvent: function() {
				var a = this;
				this.wrapper.on("click", "a", function(b) {
					var c = b.target
						, d = $(c);
					a._eventsForID.hasOwnProperty(c.id) && a._eventsForID[c.id].call(a, d)
				}),
					this._isInit = !0
			},
			_checkPhone: function(a) {
				var b = !1;
				return "" == a ? this._showMsg(this.phoneInput, "手机号不能为空") : /^1[3578][\d]{9}$/.test(a) ? b = !0 : this._showMsg(this.phoneInput, "请输入正确的手机号"),
					b
			},
			_checkPwd: function(a, b) {
				var c = !1
					, b = b || this.pwdInput;
				return "" == a ? this._showMsg(b, "密码不能为空") : j.check(a).isInLength ? c = !0 : this._showMsg(b, "6-16位数字字母组合，区分大小写"),
					c
			},
			_showMsg: function(a, b) {
				if (a) {
					var c = a.parent().parent().next();
					c.html(b).removeClass("hid"),
						setTimeout(function() {
							c.addClass("hid")
						}, 3e3)
				}
			},
			_posCenter: function(a) {
				var b = a.outerHeight()
					, c = a.outerWidth()
					, d = window.scrollY
					, e = window.innerHeight
					, f = window.innerWidth;
				a.css({
					top: (e - b) / 2 + d,
					left: (f - c) / 2
				})
			},
			_actCode: function(a, b) {
				"undefined" != a && f(a)
			}
		}, l = i.get("QUICKLY_REG_TIME"), m = i.get("QUICKLY_REG_PHONE"), n = i.get("QUICKLY_REG_DEFAULT_PWD");
		if (l)
			var o = setInterval(function() {
				(new Date).getTime() - l > 12e4 && (k.init({
					isPopupAgain: !0
				}),
					i["delete"]("QUICKLY_REG_TIME"),
					i["delete"]("QUICKLY_REG_PHONE"),
					i["delete"]("QUICKLY_REG_DEFAULT_PWD"),
					clearInterval(o))
			}, 1e3);
		b.exports = k
	}),
	define("core/lib/rsaTools", function(require, a, b) {
		function c(a, b, c) {
			null  != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null  == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
		}
		function d() {
			return new c(null )
		}
		function e(a, b, c, d, e, f) {
			for (; --f >= 0; ) {
				var g = b * this[a++] + c[d] + e;
				e = Math.floor(g / 67108864),
					c[d++] = 67108863 & g
			}
			return e
		}
		function f(a, b, c, d, e, f) {
			for (var g = 32767 & b, h = b >> 15; --f >= 0; ) {
				var i = 32767 & this[a]
					, j = this[a++] >> 15
					, k = h * i + j * g;
				i = g * i + ((32767 & k) << 15) + c[d] + (1073741823 & e),
					e = (i >>> 30) + (k >>> 15) + h * j + (e >>> 30),
					c[d++] = 1073741823 & i
			}
			return e
		}
		function g(a, b, c, d, e, f) {
			for (var g = 16383 & b, h = b >> 14; --f >= 0; ) {
				var i = 16383 & this[a]
					, j = this[a++] >> 14
					, k = h * i + j * g;
				i = g * i + ((16383 & k) << 14) + c[d] + e,
					e = (i >> 28) + (k >> 14) + h * j,
					c[d++] = 268435455 & i
			}
			return e
		}
		function h(a) {
			return ma.charAt(a)
		}
		function i(a, b) {
			var c = na[a.charCodeAt(b)];
			return null  == c ? -1 : c
		}
		function j(a) {
			for (var b = this.t - 1; b >= 0; --b)
				a[b] = this[b];
			a.t = this.t,
				a.s = this.s
		}
		function k(a) {
			this.t = 1,
				this.s = 0 > a ? -1 : 0,
				a > 0 ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
		}
		function l(a) {
			var b = d();
			return b.fromInt(a),
				b
		}
		function m(a, b) {
			var d;
			if (16 == b)
				d = 4;
			else if (8 == b)
				d = 3;
			else if (256 == b)
				d = 8;
			else if (2 == b)
				d = 1;
			else if (32 == b)
				d = 5;
			else {
				if (4 != b)
					return void this.fromRadix(a, b);
				d = 2
			}
			this.t = 0,
				this.s = 0;
			for (var e = a.length, f = !1, g = 0; --e >= 0; ) {
				var h = 8 == d ? 255 & a[e] : i(a, e);
				0 > h ? "-" == a.charAt(e) && (f = !0) : (f = !1,
					0 == g ? this[this.t++] = h : g + d > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - g) - 1) << g,
						this[this.t++] = h >> this.DB - g) : this[this.t - 1] |= h << g,
					g += d,
				g >= this.DB && (g -= this.DB))
			}
			8 == d && 0 != (128 & a[0]) && (this.s = -1,
			g > 0 && (this[this.t - 1] |= (1 << this.DB - g) - 1 << g)),
				this.clamp(),
			f && c.ZERO.subTo(this, this)
		}
		function n() {
			for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a; )
				--this.t
		}
		function o(a) {
			if (this.s < 0)
				return "-" + this.negate().toString(a);
			var b;
			if (16 == a)
				b = 4;
			else if (8 == a)
				b = 3;
			else if (2 == a)
				b = 1;
			else if (32 == a)
				b = 5;
			else {
				if (4 != a)
					return this.toRadix(a);
				b = 2
			}
			var c, d = (1 << b) - 1, e = !1, f = "", g = this.t, i = this.DB - g * this.DB % b;
			if (g-- > 0)
				for (i < this.DB && (c = this[g] >> i) > 0 && (e = !0,
					f = h(c)); g >= 0; )
					b > i ? (c = (this[g] & (1 << i) - 1) << b - i,
						c |= this[--g] >> (i += this.DB - b)) : (c = this[g] >> (i -= b) & d,
					0 >= i && (i += this.DB,
						--g)),
					c > 0 && (e = !0),
					e && (f += h(c));
			return e ? f : "0"
		}
		function p() {
			var a = d();
			return c.ZERO.subTo(this, a),
				a
		}
		function q() {
			return this.s < 0 ? this.negate() : this
		}
		function r(a) {
			var b = this.s - a.s;
			if (0 != b)
				return b;
			var c = this.t;
			if (b = c - a.t,
				0 != b)
				return this.s < 0 ? -b : b;
			for (; --c >= 0; )
				if (0 != (b = this[c] - a[c]))
					return b;
			return 0
		}
		function s(a) {
			var b, c = 1;
			return 0 != (b = a >>> 16) && (a = b,
				c += 16),
			0 != (b = a >> 8) && (a = b,
				c += 8),
			0 != (b = a >> 4) && (a = b,
				c += 4),
			0 != (b = a >> 2) && (a = b,
				c += 2),
			0 != (b = a >> 1) && (a = b,
				c += 1),
				c
		}
		function t() {
			return this.t <= 0 ? 0 : this.DB * (this.t - 1) + s(this[this.t - 1] ^ this.s & this.DM)
		}
		function u(a, b) {
			var c;
			for (c = this.t - 1; c >= 0; --c)
				b[c + a] = this[c];
			for (c = a - 1; c >= 0; --c)
				b[c] = 0;
			b.t = this.t + a,
				b.s = this.s
		}
		function v(a, b) {
			for (var c = a; c < this.t; ++c)
				b[c - a] = this[c];
			b.t = Math.max(this.t - a, 0),
				b.s = this.s
		}
		function w(a, b) {
			var c, d = a % this.DB, e = this.DB - d, f = (1 << e) - 1, g = Math.floor(a / this.DB), h = this.s << d & this.DM;
			for (c = this.t - 1; c >= 0; --c)
				b[c + g + 1] = this[c] >> e | h,
					h = (this[c] & f) << d;
			for (c = g - 1; c >= 0; --c)
				b[c] = 0;
			b[g] = h,
				b.t = this.t + g + 1,
				b.s = this.s,
				b.clamp()
		}
		function x(a, b) {
			b.s = this.s;
			var c = Math.floor(a / this.DB);
			if (c >= this.t)
				return void (b.t = 0);
			var d = a % this.DB
				, e = this.DB - d
				, f = (1 << d) - 1;
			b[0] = this[c] >> d;
			for (var g = c + 1; g < this.t; ++g)
				b[g - c - 1] |= (this[g] & f) << e,
					b[g - c] = this[g] >> d;
			d > 0 && (b[this.t - c - 1] |= (this.s & f) << e),
				b.t = this.t - c,
				b.clamp()
		}
		function y(a, b) {
			for (var c = 0, d = 0, e = Math.min(a.t, this.t); e > c; )
				d += this[c] - a[c],
					b[c++] = d & this.DM,
					d >>= this.DB;
			if (a.t < this.t) {
				for (d -= a.s; c < this.t; )
					d += this[c],
						b[c++] = d & this.DM,
						d >>= this.DB;
				d += this.s
			} else {
				for (d += this.s; c < a.t; )
					d -= a[c],
						b[c++] = d & this.DM,
						d >>= this.DB;
				d -= a.s
			}
			b.s = 0 > d ? -1 : 0,
				-1 > d ? b[c++] = this.DV + d : d > 0 && (b[c++] = d),
				b.t = c,
				b.clamp()
		}
		function z(a, b) {
			var d = this.abs()
				, e = a.abs()
				, f = d.t;
			for (b.t = f + e.t; --f >= 0; )
				b[f] = 0;
			for (f = 0; f < e.t; ++f)
				b[f + d.t] = d.am(0, e[f], b, f, 0, d.t);
			b.s = 0,
				b.clamp(),
			this.s != a.s && c.ZERO.subTo(b, b)
		}
		function A(a) {
			for (var b = this.abs(), c = a.t = 2 * b.t; --c >= 0; )
				a[c] = 0;
			for (c = 0; c < b.t - 1; ++c) {
				var d = b.am(c, b[c], a, 2 * c, 0, 1);
				(a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV,
					a[c + b.t + 1] = 1)
			}
			a.t > 0 && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)),
				a.s = 0,
				a.clamp()
		}
		function B(a, b, e) {
			var f = a.abs();
			if (!(f.t <= 0)) {
				var g = this.abs();
				if (g.t < f.t)
					return null  != b && b.fromInt(0),
						void (null  != e && this.copyTo(e));
				null  == e && (e = d());
				var h = d()
					, i = this.s
					, j = a.s
					, k = this.DB - s(f[f.t - 1]);
				k > 0 ? (f.lShiftTo(k, h),
					g.lShiftTo(k, e)) : (f.copyTo(h),
					g.copyTo(e));
				var l = h.t
					, m = h[l - 1];
				if (0 != m) {
					var n = m * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2 : 0)
						, o = this.FV / n
						, p = (1 << this.F1) / n
						, q = 1 << this.F2
						, r = e.t
						, t = r - l
						, u = null  == b ? d() : b;
					for (h.dlShiftTo(t, u),
					     e.compareTo(u) >= 0 && (e[e.t++] = 1,
						     e.subTo(u, e)),
						     c.ONE.dlShiftTo(l, u),
						     u.subTo(h, h); h.t < l; )
						h[h.t++] = 0;
					for (; --t >= 0; ) {
						var v = e[--r] == m ? this.DM : Math.floor(e[r] * o + (e[r - 1] + q) * p);
						if ((e[r] += h.am(0, v, e, t, 0, l)) < v)
							for (h.dlShiftTo(t, u),
								     e.subTo(u, e); e[r] < --v; )
								e.subTo(u, e)
					}
					null  != b && (e.drShiftTo(l, b),
					i != j && c.ZERO.subTo(b, b)),
						e.t = l,
						e.clamp(),
					k > 0 && e.rShiftTo(k, e),
					0 > i && c.ZERO.subTo(e, e)
				}
			}
		}
		function C(a) {
			var b = d();
			return this.abs().divRemTo(a, null , b),
			this.s < 0 && b.compareTo(c.ZERO) > 0 && a.subTo(b, b),
				b
		}
		function D(a) {
			this.m = a
		}
		function E(a) {
			return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
		}
		function F(a) {
			return a
		}
		function G(a) {
			a.divRemTo(this.m, null , a)
		}
		function H(a, b, c) {
			a.multiplyTo(b, c),
				this.reduce(c)
		}
		function I(a, b) {
			a.squareTo(b),
				this.reduce(b)
		}
		function J() {
			if (this.t < 1)
				return 0;
			var a = this[0];
			if (0 == (1 & a))
				return 0;
			var b = 3 & a;
			return b = b * (2 - (15 & a) * b) & 15,
				b = b * (2 - (255 & a) * b) & 255,
				b = b * (2 - ((65535 & a) * b & 65535)) & 65535,
				b = b * (2 - a * b % this.DV) % this.DV,
				b > 0 ? this.DV - b : -b
		}
		function K(a) {
			this.m = a,
				this.mp = a.invDigit(),
				this.mpl = 32767 & this.mp,
				this.mph = this.mp >> 15,
				this.um = (1 << a.DB - 15) - 1,
				this.mt2 = 2 * a.t
		}
		function L(a) {
			var b = d();
			return a.abs().dlShiftTo(this.m.t, b),
				b.divRemTo(this.m, null , b),
			a.s < 0 && b.compareTo(c.ZERO) > 0 && this.m.subTo(b, b),
				b
		}
		function M(a) {
			var b = d();
			return a.copyTo(b),
				this.reduce(b),
				b
		}
		function N(a) {
			for (; a.t <= this.mt2; )
				a[a.t++] = 0;
			for (var b = 0; b < this.m.t; ++b) {
				var c = 32767 & a[b]
					, d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
				for (c = b + this.m.t,
					     a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV; )
					a[c] -= a.DV,
						a[++c]++
			}
			a.clamp(),
				a.drShiftTo(this.m.t, a),
			a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
		}
		function O(a, b) {
			a.squareTo(b),
				this.reduce(b)
		}
		function P(a, b, c) {
			a.multiplyTo(b, c),
				this.reduce(c)
		}
		function Q() {
			return 0 == (this.t > 0 ? 1 & this[0] : this.s)
		}
		function R(a, b) {
			if (a > 4294967295 || 1 > a)
				return c.ONE;
			var e = d()
				, f = d()
				, g = b.convert(this)
				, h = s(a) - 1;
			for (g.copyTo(e); --h >= 0; )
				if (b.sqrTo(e, f),
					(a & 1 << h) > 0)
					b.mulTo(f, g, e);
				else {
					var i = e;
					e = f,
						f = i
				}
			return b.revert(e)
		}
		function S(a, b) {
			var c;
			return c = 256 > a || b.isEven() ? new D(b) : new K(b),
				this.exp(a, c)
		}
		function T() {
			this.i = 0,
				this.j = 0,
				this.S = new Array
		}
		function U(a) {
			var b, c, d;
			for (b = 0; 256 > b; ++b)
				this.S[b] = b;
			for (c = 0,
				     b = 0; 256 > b; ++b)
				c = c + this.S[b] + a[b % a.length] & 255,
					d = this.S[b],
					this.S[b] = this.S[c],
					this.S[c] = d;
			this.i = 0,
				this.j = 0
		}
		function V() {
			var a;
			return this.i = this.i + 1 & 255,
				this.j = this.j + this.S[this.i] & 255,
				a = this.S[this.i],
				this.S[this.i] = this.S[this.j],
				this.S[this.j] = a,
				this.S[a + this.S[this.i] & 255]
		}
		function W() {
			return new T
		}
		function X(a) {
			pa[qa++] ^= 255 & a,
				pa[qa++] ^= a >> 8 & 255,
				pa[qa++] ^= a >> 16 & 255,
				pa[qa++] ^= a >> 24 & 255,
			qa >= ra && (qa -= ra)
		}
		function Y() {
			X((new Date).getTime())
		}
		function Z() {
			if (null  == oa) {
				for (Y(),
					     oa = W(),
					     oa.init(pa),
					     qa = 0; qa < pa.length; ++qa)
					pa[qa] = 0;
				qa = 0
			}
			return oa.next()
		}
		function $(a) {
			var b;
			for (b = 0; b < a.length; ++b)
				a[b] = Z()
		}
		function _() {}
		function aa(a, b) {
			return new c(a,b)
		}
		function ba(a, b) {
			if (b < a.length + 11)
				return alert("Message too long for RSA"),
					null ;
			for (var d = new Array, e = a.length - 1; e >= 0 && b > 0; ) {
				var f = a.charCodeAt(e--);
				128 > f ? d[--b] = f : f > 127 && 2048 > f ? (d[--b] = 63 & f | 128,
					d[--b] = f >> 6 | 192) : (d[--b] = 63 & f | 128,
					d[--b] = f >> 6 & 63 | 128,
					d[--b] = f >> 12 | 224)
			}
			d[--b] = 0;
			for (var g = new _, h = new Array; b > 2; ) {
				for (h[0] = 0; 0 == h[0]; )
					g.nextBytes(h);
				d[--b] = h[0]
			}
			return d[--b] = 2,
				d[--b] = 0,
				new c(d)
		}
		function ca() {
			this.n = null ,
				this.e = 0,
				this.d = null ,
				this.p = null ,
				this.q = null ,
				this.dmp1 = null ,
				this.dmq1 = null ,
				this.coeff = null
		}
		function da(a, b) {
			null  != a && null  != b && a.length > 0 && b.length > 0 ? (this.n = aa(a, 16),
				this.e = parseInt(b, 16)) : alert("Invalid RSA public key")
		}
		function ea(a) {
			return a.modPowInt(this.e, this.n)
		}
		function fa(a) {
			var b = ba(a, this.n.bitLength() + 7 >> 3);
			if (null  == b)
				return null ;
			var c = this.doPublic(b);
			if (null  == c)
				return null ;
			var d = c.toString(16);
			return 0 == (1 & d.length) ? d : "0" + d
		}
		var ga, ha = 0xdeadbeefcafe, ia = 15715070 == (16777215 & ha);
		ia && "Microsoft Internet Explorer" == navigator.appName ? (c.prototype.am = f,
			ga = 30) : ia && "Netscape" != navigator.appName ? (c.prototype.am = e,
			ga = 26) : (c.prototype.am = g,
			ga = 28),
			c.prototype.DB = ga,
			c.prototype.DM = (1 << ga) - 1,
			c.prototype.DV = 1 << ga;
		var ja = 52;
		c.prototype.FV = Math.pow(2, ja),
			c.prototype.F1 = ja - ga,
			c.prototype.F2 = 2 * ga - ja;
		var ka, la, ma = "0123456789abcdefghijklmnopqrstuvwxyz", na = new Array;
		for (ka = "0".charCodeAt(0),
			     la = 0; 9 >= la; ++la)
			na[ka++] = la;
		for (ka = "a".charCodeAt(0),
			     la = 10; 36 > la; ++la)
			na[ka++] = la;
		for (ka = "A".charCodeAt(0),
			     la = 10; 36 > la; ++la)
			na[ka++] = la;
		D.prototype.convert = E,
			D.prototype.revert = F,
			D.prototype.reduce = G,
			D.prototype.mulTo = H,
			D.prototype.sqrTo = I,
			K.prototype.convert = L,
			K.prototype.revert = M,
			K.prototype.reduce = N,
			K.prototype.mulTo = P,
			K.prototype.sqrTo = O,
			c.prototype.copyTo = j,
			c.prototype.fromInt = k,
			c.prototype.fromString = m,
			c.prototype.clamp = n,
			c.prototype.dlShiftTo = u,
			c.prototype.drShiftTo = v,
			c.prototype.lShiftTo = w,
			c.prototype.rShiftTo = x,
			c.prototype.subTo = y,
			c.prototype.multiplyTo = z,
			c.prototype.squareTo = A,
			c.prototype.divRemTo = B,
			c.prototype.invDigit = J,
			c.prototype.isEven = Q,
			c.prototype.exp = R,
			c.prototype.toString = o,
			c.prototype.negate = p,
			c.prototype.abs = q,
			c.prototype.compareTo = r,
			c.prototype.bitLength = t,
			c.prototype.mod = C,
			c.prototype.modPowInt = S,
			c.ZERO = l(0),
			c.ONE = l(1),
			T.prototype.init = U,
			T.prototype.next = V;
		var oa, pa, qa, ra = 256;
		if (null  == pa) {
			pa = new Array,
				qa = 0;
			var sa;
			if (window.crypto && window.crypto.getRandomValues) {
				var ta = new Uint8Array(32);
				for (window.crypto.getRandomValues(ta),
					     sa = 0; 32 > sa; ++sa)
					pa[qa++] = ta[sa]
			}
			if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random) {
				var ua = window.crypto.random(32);
				for (sa = 0; sa < ua.length; ++sa)
					pa[qa++] = 255 & ua.charCodeAt(sa)
			}
			for (; ra > qa; )
				sa = Math.floor(65536 * Math.random()),
					pa[qa++] = sa >>> 8,
					pa[qa++] = 255 & sa;
			qa = 0,
				Y()
		}
		_.prototype.nextBytes = $,
			ca.prototype.doPublic = ea,
			ca.prototype.setPublic = da,
			ca.prototype.encrypt = fa;
		b.exports = ca
	}),
	define("conf/inter/quicklyReg", function(require, a, b) {
		var c = require("core/io/trans")();
		c.set("fetchVcode", {
			url: "/reg/sendCodeBySso",
			type: "POST"
		}),
			c.set("phoneVcodeLogin", {
				url: "/reg/checksso",
				type: "POST"
			}),
			c.set("phoneVcodeReg", {
				url: "/reg/thirdReg",
				type: "POST"
			}),
			c.set("weiboUserLogin", {
				url: "/reg/loginWeiboByThird",
				type: "POST"
			}),
			c.set("changePwd", {
				url: "/reg/modifyPass",
				type: "POST"
			}),
			b.exports = c
	}),
	define("core/io/actLog", function(require, a, b) {
		b.exports = function(a, b) {
			if (a) {
				var c = "/h5logs/actionLog?type=pic&act_code=" + a + "&t=" + (new Date).getTime()
					, d = require("core/util/keepParams");
				c = d(c, !0);
				var e = new Image;
				b && (e.onload = b,
					e.onerror = b),
					e.src = c
			}
		}
	}),
	define("tpl/ux/quicklyReg", function(require, a, b) {
		require("core/tplFunc");
		b.exports = function(a) {
			var b = '<!-- 第三方分享落地页登录注册弹出层 最开始是给微信做的 wx --><!-- window.$render_data.common.wx_callback newWeibo.tpl 模板输出变量 --><div id="J-wx-reg" class="quicklyRegPopup-wrapper hid"><div id="J-wx-reg-step" class="quicklyRegPopup-box"><!-- 输入手机号 --><article id="J-wx-phone" class="">';
			return a.unclosed || (b += '<a href="javascript:;" id="J-phone-cancel" class="close">关闭</a>'),
				b += " ",
				b += $render_data.common.quickly_reg_txt ? '<header class="quicklyRegPopup-tit reg-tit">' + $render_data.common.quickly_reg_txt + "</header>" : '<header class="quicklyRegPopup-tit reg-tit">只需手机号，即可玩转微博</header>',
				b += " ",
				b += $render_data.common.quickly_reg_pic ? '<section class="quicklyRegPopup-content phone-content" style="background-image:url(' + $render_data.common.quickly_reg_pic + ')">' : '<section class="quicklyRegPopup-content phone-content">',
				b += '<div class="input-wrapper"><p class="input-item"><input type="tel" class="" name="phone" maxlength="11" placeholder="请输入手机号"></p></div><p class="error-label hid">手机号码格式错误，仅支持大陆号码！</p><div class="input-wrapper quicklyRegPopup-vcode-item"><a href="javascript:;" id="J-phone-fetch" class="fetch-btn">获取验证码</a><p class="input-item"><input type="text" name="SMScode" maxlength="6" placeholder="请输入验证码"></p></div><p class="error-label hid">手机号码格式错误，仅支持大陆号码！</p><a href="javascript:;" id="J-phone-confirm" class="btn btnRed isDisabled">完成</a><aside class="quicklyRegPopup-action layout-box"><a href="' + $render_data.common.passport_login_url + '" class="box-col txt">微博帐号登录</a>',
				"weixin" == $render_data.common.sourceType ? b += '<a href="javascript:;" id="J-wx" class="box-col txt" data-url="' + $render_data.common.wx_authorize + '">微信帐号登录</a>' : $render_data.common.wx_callback && (b += '<a href="javascript:;" id="J-qq" class="box-col txt" data-url="' + $render_data.common.wx_callback + '">QQ号码登录</a>'),
				b += '</aside></section></article><!-- 修改密码 --><article id="J-wx-pwd" class="hid"><a href="javascript:;" id="J-pwd-cancel" class="close">关闭</a><header class="quicklyRegPopup-tit pwd-tit">微博开通成功</header><section class="quicklyRegPopup-content"><p class="pwd-label">帐号<span id="J-pwd-phone">15001088576</span></p><p class="pwd-label">密码<span id="J-pwd-default">1234567</span></p><p class="pwd-tip">为保证安全请修改密码，密码为6~16位数字或字母</p><div class="input-wrapper quicklyRegPopup-pwd-item"><p class="input-item"><input type="text" name="pwd" placeholder="请输入新密码"></p><a href="javascript:;" id="J-pwd-change" class="pwd-change-btn">隐藏</a></div><p class="error-label hid">手机号码格式错误，仅支持大陆号码！</p><a href="javascript:;" id="J-pwd-confirm" class="btn btnRed">完成</a></section></article></div><!-- 结果 --><div id="J-wx-reg-result" class="quicklyRegPopup-result hid"><i class="icon"></i><p class="result-info">密码设置成功</p><p class="result-action"><a href="javascript:;" id="J-pwd-reset" class="reset-btn">重新设置</a><a href="javascript:;" id="J-pwd-skip" class="skip-btn">跳过</a></p></div></div>'
		}
	}),
	define("core/device/openClient", function(require, a, b) {
		function init(a) {
			config = jquery.extend(!0, {
				element: null ,
				scheme_IOS: "sinaweibo://home",
				scheme_Adr: "sinaweibo://splash",
				downurl_IOS: "http://weibo.cn/client/download",
				downurl_Adr: "http://weibo.cn/client/download",
				showConfirm: null ,
				timeout: 600
			}, a);
			var el = config.element;
			el ? (el = "string" == typeof el ? jquery(el) : el,
				el.on("click", clickHandler)) : clickHandler()
		}
		function clickHandler() {
			var timeNow = Date.now()
				, iframe = document.createElement("iframe");
			iframe.src = userAgent.indexOf("os") > 0 ? config.scheme_IOS : config.scheme_Adr,
				iframe.style.display = "none",
				document.body.appendChild(iframe);
			var c = setTimeout(function() {
				var newTime = Date.now();
				(!timeNow || newTime - timeNow < config.timeout + 200) && (userAgent.indexOf("os") > 0 && config.downurl_IOS || userAgent.indexOf("os") < 0 && config.downurl_Adr) && (window.location = userAgent.indexOf("os") > 0 ? config.downurl_IOS : config.downurl_Adr)
			}, config.timeout);
			window.onblur = function() {
				clearTimeout(c)
			}
		}
		var jquery = require("jquery")
			, config = {}
			, userAgent = navigator.userAgent.toLowerCase();
		b.exports.init = init
	}),
	define("core/device/geo", function(require, a, b) {
		b.exports = function(a) {
			var b = $.extend({
				timeout: 5e3,
				enableHighAccuracy: !1,
				callback: function() {}
			}, a);
			if (navigator.geolocation)
				try {
					navigator.geolocation.getCurrentPosition(function(a) {
						b.callback(null , a.coords)
					}, function(a) {
						var c;
						switch (a.code) {
							case a.PERMISSION_DENIED:
								c = "没有权限获取当前位置信息,请打开定位服务！";
								break;
							case a.POSITION_UNAVAILABLE:
								c = "当前位置信息获取失败！";
								break;
							case a.TIMEOUT:
								c = "获取位置信息超时！"
						}
						if (!c) {
							var d = a.code.toString();
							c = "未知错误，获取位置信息失败！",
							d && (c += "错误代码：" + d)
						}
						b.callback(c)
					}, {
						timeout: b.timeout,
						enableHighAccuracy: b.enableHighAccuracy
					})
				} catch (c) {
					b.callback(c.message)
				}
			else
				b.callback("您的浏览器不支持地理位置信息定位！")
		}
	}),
	define("core/lazyload", function(require, a, b) {
		function c() {
			this.timer = (new Date).getTime(),
				this.todo = !0,
				this.setPlaceholder = function() {
					this.aImg = $("img[data-src]:visible"),
						this.aImg.each(function() {
							this.src || (this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC")
						})
				}
				,
				this.load = function() {
					var a = (new Date).getTime()
						, b = document.documentElement.scrollTop || document.body.scrollTop
						, c = 3 * document.documentElement.clientHeight + b
						, d = 0
						, g = 0
						, h = this.loaded(0);
					this.setPlaceholder(),
					this.loaded(1).length != this.aImg.length && $.each(h, function(a, h) {
						d = f.getPageY(this) - 50,
							g = f.getPageY(this) + this.offsetHeight + 50;
						var i = d > b && c > d ? !0 : !1
							, j = g > b && c > g ? !0 : !1;
						if (i || j) {
							var k = $(this).attr("data-src") || this.src;
							e > 1 && (k = k.replace("/wap180/", "/wap360/")),
								this.src = k,
								$(this).removeAttr("data-src"),
							$(this).hasClass("loaded") || ($(this).attr("class") ? $(this).attr("class", "loaded") : $(this).addClass("loaded"))
						}
					}),
						this.todo = !1,
						this.timer = a
				}
				,
				this.loaded = function(a) {
					var b = [];
					return this.aImg.each(function() {
						var c = $(this).hasClass("loaded");
						a || c || b.push(this),
						a && c && b.push(this)
					}),
						b
				}
				,
				this.fnLoad = f.bindToObj(this, this.load),
				this.setPlaceholder(),
				this.load(),
				$(window).bind("scroll", this.fnLoad),
				$(window).bind("resize", this.fnLoad)
		}
		var d = require("brick")
			, e = window.devicePixelRatio
			, f = {
				bindToObj: function(a, b) {
					return function() {
						return b.apply(a, arguments)
					}
				},
				getPageY: function(a) {
					var b = 0;
					do
						b += a.offsetTop;
					while (a.offsetParent && "BODY" != (a = a.offsetParent).nodeName.toUpperCase());return b
				}
			}
			, g = function() {
				new c,
					d.notice.on("LOAD_IMAGE", c)
			}
			;
		b.exports = {
			init: g
		}
	}),
	define("mod/blockbox", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d(a, b) {
				1 == b ? j.init({
					wrapperId: "J-setBlockPop" + b,
					title: "屏蔽失败",
					info: a,
					cancelBtn: {
						id: "J-block-cancel" + b,
						txt: "以后再说"
					},
					confirmBtn: {
						id: "J-block-member" + b,
						txt: "开通会员",
						callback: function() {
							j.close(),
								window.location.href = "http://vip.weibo.cn/members/center/vipay"
						}
					}
				}) : j.init({
					wrapperId: "J-setBlockPop" + b,
					title: "屏蔽失败",
					info: a,
					cancelBtn: {
						id: "J-block-cancel" + b,
						txt: "我知道了"
					}
				})
			}
			function e(a) {
				var b = decodeURIComponent(k.length > 0 ? k.attr("data-act-data") : l.attr("data-act-data"));
				a && a == l.attr("data-state") || h({
					url: b,
					dataType: "json",
					success: function(a) {
						if (1 == a.ok) {
							var b = a.button ? a.button : a.checkbox
								, c = 1 === b.sub_type ? "on" : "off"
								, e = b.params.action;
							a.button && (k.attr("data-state", c).attr("data-act-data", e),
								k.find(".btn-icon img").attr("src", a.button.pic),
								k.find(".btn-txt").html(a.button.name)),
							a.checkbox && l.attr("data-state", c).attr("data-act-data", e)
						} else
							-102 == a.ok ? d("您最多可以屏蔽10人，开通会员能够增加屏蔽人数的上限", 1) : -103 == a.ok ? d("您已达到目前会员等级所允许的屏蔽人数上限", 0) : alert(a.msg)
					}
				})
			}
			var f = require("core/device/touch")
				, g = require("core/io/trans")()
				, h = g.json
				, i = (require("tpl/mod/blockbox"),
				require("ux/alertPop"))
				, j = new i
				, k = $(a).find('[data-name="btnbox"]')
				, l = $(a).find('[data-name="checkbox"]');
			if (l.length > 0) {
				var m = new f({
					el: l[0],
					isPreventDefault: !0
				});
				Events.on(m, "S_left", function() {
					e("off")
				}),
					Events.on(m, "S_right", function() {
						e("on")
					}),
					Events.on(m, "S_tap", function() {
						e()
					})
			}
			k.length > 0 && k.on("click", function() {
				e()
			})
		}
	}),
	define("core/device/touch", function(require, a, b) {
		var c = require("core/device/customEve")
			, d = function(a) {
				var b = {
					el: document,
					enableDrag: !1,
					minDragDistance: 100,
					enableX: !0,
					enableY: !0,
					enableDblTab: !1,
					isPreventDefault: !1,
					preventDefaultException: {
						tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/
					}
				};
				for (var d in a)
					b[d] = a[d];
				var e = "ontouchstart" in window
					, f = e ? "touchstart" : "mousedown"
					, g = e ? "touchmove" : "mousemove"
					, h = e ? "touchend" : "mouseup"
					, i = b.el
					, j = this
					, k = (i.offsetWidth,
							i.offsetHeight,
							function() {
								i.addEventListener(f, m, !1)
							}
					)
					, l = function(a, b) {
						for (var c in b)
							if (b[c].test(a[c]))
								return !0;
						return !1
					}
					, m = function(a) {
						a = a || window.event,
						b.isPreventDefault && !l(a.target, b.preventDefaultException) && a.preventDefault();
						var d;
						"touchstart" == a.type && (d = a.changedTouches[0]),
							j.moved = !1,
							j.startTime = (new Date).getTime(),
							j.startX = d ? d.pageX : a.pageX,
							j.startY = d ? d.pageY : a.pageY,
							j.startClientX = d ? d.clientX : a.clientX,
							j.startClientY = d ? d.clientY : a.clientY,
							i.addEventListener(g, n, !1),
							i.addEventListener(h, o, !1),
							j.event = a,
							c.fireEvent(j, "S_start", j)
					}
					, n = function(a) {
						a = a || window.event,
						b.isPreventDefault && a.preventDefault();
						var d;
						"touchmove" == a.type && (d = a.changedTouches[0]),
							j.moveEndX = d ? d.pageX : a.pageX,
							j.moveEndY = d ? d.pageY : a.pageY,
							j.moveClientX = d ? d.clientX : a.clientX,
							j.moveClientY = d ? d.clientY : a.clientY,
							j.moveX = j.moveClientX - j.startClientX,
							j.moveY = j.moveClientY - j.startClientY,
							j.moveDisX = j.LastMoveX ? j.LastMoveX - j.moveClientX : j.startClientX - j.moveClientX,
							j.moveDisY = j.LastMoveY ? j.LastMoveY - j.moveClientY : j.startClientY - j.moveClientY,
							j.LastMoveY = j.moveClientY,
							j.LastMoveX = j.moveClientX,
							j.event = a,
							c.fireEvent(j, "S_dragMove", j),
							j.moved = !0
					}
					, o = function(a) {
						a = a || window.event,
						b.isPreventDefault && !l(a.target, b.preventDefaultException) && a.preventDefault();
						var d;
						"touchend" == a.type && (d = a.changedTouches[0]),
							j.endX = d ? d.pageX : a.pageX,
							j.endY = d ? d.pageY : a.pageY,
							j.endClientX = d ? d.clientX : a.clientX,
							j.endClientY = d ? d.clientY : a.clientY;
						var e, f;
						overTime = (new Date).getTime() - j.startTime,
							i.removeEventListener(g, n, !1),
							i.removeEventListener(h, o, !1),
							e = d ? d.pageX : a.pageX,
							f = d ? d.pageY : a.pageY,
							j.event = a,
						j.moved || (j.doubleTapTimer ? (clearTimeout(j.doubleTapTimer),
							j.doubleTapTimer = null ,
							c.fireEvent(j, "S_dbTap", j)) : j.doubleTapTimer = setTimeout(function() {
							j.doubleTapTimer = null ,
							overTime < 300 && c.fireEvent(j, "S_tap", j)
						}, b.enableDblTab ? 250 : 0)),
						j.moved && ((b.enableX && b.enableY && Math.abs(j.moveX) > Math.abs(j.moveY) || b.enableX && !b.enableY) && (!b.enableDrag && j.moveX > 1 || b.enableDrag && 1.5 * j.moveX > b.minDragDistance ? c.fireEvent(j, "S_right", j) : !b.enableDrag && j.moveX < -1 || b.enableDrag && 1.5 * j.moveX < -b.minDragDistance ? c.fireEvent(j, "S_left", j) : c.fireEvent(j, "S_dragEnd", j)),
						(b.enableX && b.enableY && Math.abs(j.moveX) < Math.abs(j.moveY) || !b.enableX && b.enableY) && (!b.enableDrag && j.moveY > 1 || b.enableDrag && 1.5 * j.moveY > b.minDragDistance ? c.fireEvent(j, "S_down", j) : !b.enableDrag && j.moveY < -1 || b.enableDrag && 1.5 * j.moveY < -b.minDragDistance ? c.fireEvent(j, "S_up", j) : c.fireEvent(j, "S_dragEnd", j)),
							c.fireEvent(j, "S_end", j)),
							j.startX = j.startY = j.startClientX = j.startClientY = j.moveEndX = j.moveEndY = j.moveX = j.moveY = j.moveClientX = j.moveClientY = j.endX = j.endY = j.endClientX = j.endClientY = 0,
							j.LastMoveX = j.LastMoveY = null
					}
					;
				return k(),
					j
			}
			;
		b.exports = d
	}),
	define("core/device/customEve", function(require, a, b) {
		!function() {
			Events = {
				guid: 1,
				on: function(a, b, c) {
					c.$$guid || (c.$$guid = Events.guid++),
					a.events || (a.events = {});
					var d = a.events[b];
					d || (d = a.events[b] = {},
					a["on" + b] && (d[0] = a["on" + b])),
						d[c.$$guid] = c,
						a["on" + b] = Events.handleEvent
				},
				off: function(a, b, c) {
					a.events && a.events[b] && delete a.events[b][c.$$guid]
				},
				fireEvent: function(a, b, c) {
					if (a && b) {
						var d = a.events && a.events[b];
						for (var e in d)
							d[e].call(a, c)
					}
				},
				handleEvent: function(a) {
					a = a || window.event;
					var b = this.events[a.type];
					for (var c in b)
						this.$$handleEvent = b[c],
							this.$$handleEvent(a)
				}
			},
				b.exports = Events
		}()
	}),
	define("tpl/mod/blockbox", function(require, a, b) {
		require("core/tplFunc");
		b.exports = function(a) {
			var b = '<div class="module blockbox"><div class="layout-box media-graphic"><!--头像 start-->';
			return a.btnbox && a.btnbox.pic && (b += '<div class="mod-media size-s"><div class="media-main"><img src="' + a.btnbox.pic + '" height="50" width="50" data-node="cImg"></div>',
				b += function() {
					var b = require("tpl/common/verified");
					return b(a.btnbox.user)
				}(),
				b += "</div>"),
				b += '<!--头像 end--><div class="box-col item-list">',
				a.btnbox ? (b += " ",
				a.btnbox.desc && (b += '<span class="box-item-txt">' + a.btnbox.desc + "</span>"),
					b += " ",
				a.btnbox.desc2 && (b += '<span class="box-item-txt">' + a.btnbox.desc2 + "</span>"),
					b += " ") : (b += " ",
				a.checkbox.desc && (b += '<span class="box-item-txt">' + a.checkbox.desc + "</span>"),
					b += " "),
				b += "</div><!--按钮 start-->",
				a.btnbox ? (b += '<!--bttons类型--><a href="javascript:;" data-name="btnbox" data-state="',
					b += 1 === a.btnbox.buttons.sub_type ? "on" : "off",
					b += '" data-act-type="hover" data-act-data=\'' + a.btnbox.buttons.params.action + '\'><div class="mod-operate"><div class="operate-inner"><div class="inner"><span class="btn-icon"><img src="' + a.btnbox.buttons.pic + '" /></span><span class="btn-txt">' + a.btnbox.buttons.name + "</span></div></div></div></a>") : (b += '<!--checkbox类型--><a href="javascript:;" data-state="',
					b += 1 === a.checkbox.buttons.sub_type ? "on" : "off",
					b += '" data-name="checkbox" class="mod-operate" data-act-data=\'' + a.checkbox.buttons.params.action + "'></a>"),
				b += "<!--按钮 end--></div></div>"
		}
	}),
	define("mod/clientPopTips", function(require, a, b) {
		b.exports = function(a, b) {
			var c = require("core/device/ua")
				, d = require("core/io/actLog");
			a = $(a);
			var e, f = "H5_ZT_CLIENT_GUIDE_TIP", g = !(c.android && c.v < 4 || c.ios && c.v < 5);
			"single" === $render_data.common.stage;
			try {
				if (window.localStorage && (e = window.localStorage.getItem(f)),
					e && curDate - e < 864e5)
					return void a.remove();
				g && (a.css({
					position: "fixed",
					bottom: 0,
					"z-index": 999
				}),
					$("body").css("padding-bottom", "40px")),
					a.show(),
					a.on("click", function(c) {
						function e() {
							location.href = b.url
						}
						var g = $(c.target);
						return g.hasClass("J-close") || g.parents(".J-close").length ? (a.remove(),
							void (window.localStorage && window.localStorage.setItem(f, Date.now()))) : void (b.actCode ? d(b.actCode, e) : e())
					})
			} catch (h) {}
		}
	}),
	define("core/device/ua", function(require, a, b) {
		var c = {}
			, d = {}
			, e = navigator.userAgent
			, f = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
			, g = e.match(/(Android);?[\s\/]+([\d.]+)?/)
			, h = !!e.match(/\(Macintosh\; Intel /)
			, i = e.match(/(iPad).*OS\s([\d_]+)/)
			, j = e.match(/(iPod)(.*OS\s([\d_]+))?/)
			, k = !i && e.match(/(iPhone\sOS)\s([\d_]+)/)
			, l = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
			, m = e.match(/Windows Phone ([\d.]+)/)
			, n = l && e.match(/TouchPad/)
			, o = e.match(/Kindle\/([\d.]+)/)
			, p = e.match(/Silk\/([\d._]+)/)
			, q = e.match(/(BlackBerry).*Version\/([\d.]+)/)
			, r = e.match(/(BB10).*Version\/([\d.]+)/)
			, s = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
			, t = e.match(/PlayBook/)
			, u = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/)
			, v = e.match(/Firefox\/([\d.]+)/)
			, w = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
			, x = !u && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
			, y = x || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)
			, z = e.match(/MQQBrowser/)
			, A = e.match(/UCBrowser/);
		(d.webkit = !!f) && (d.version = f[1]),
		g && (c.android = !0,
			c.version = g[2]),
		k && !j && (c.ios = c.iphone = !0,
			c.version = k[2].replace(/_/g, ".")),
		i && (c.ios = c.ipad = !0,
			c.version = i[2].replace(/_/g, ".")),
		j && (c.ios = c.ipod = !0,
			c.version = j[3] ? j[3].replace(/_/g, ".") : null ),
		m && (c.wp = !0,
			c.version = m[1]),
		l && (c.webos = !0,
			c.version = l[2]),
		n && (c.touchpad = !0),
		q && (c.blackberry = !0,
			c.version = q[2]),
		r && (c.bb10 = !0,
			c.version = r[2]),
		s && (c.rimtabletos = !0,
			c.version = s[2]),
		t && (d.playbook = !0),
		o && (c.kindle = !0,
			c.version = o[1]),
		p && (d.silk = !0,
			d.version = p[1]),
		!p && c.android && e.match(/Kindle Fire/) && (d.silk = !0),
		u && (d.chrome = !0,
			d.version = u[1]),
		v && (d.firefox = !0,
			d.version = v[1]),
		w && (d.ie = !0,
			d.version = w[1]),
		y && (h || c.ios) && (d.safari = !0,
		h && (d.version = y[1])),
		x && (d.webview = !0),
		z && (d.qq = !0),
		A && (d.uc = !0),
		c.version && (c.v = c.version.split(".")[0]),
			b.exports = {
				os: c,
				browser: d
			}
	}),
	define("mod/cover", function(require, a, b) {
		b.exports = function(a, b, c) {
			a = $(a)
		}
	}),
	define("mod/editinfo", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d(b) {
				for (var c = new Date, d = c.getFullYear(), e = d; e >= b; e--)
					a.find(".schoolyear").append('<option value="' + e + '">' + e + "</option>");
				p && o.attr("school_type", a.find(".schooltypewrap a").html())
			}
			function e(a, b) {
				console.log("ajax------------------------" + a),
					y.get("suggestionSchools", {
						data: {
							q: o.val(),
							type: m.val()
						},
						success: function(a) {
							1 == a.ok && a.data.length > 0 ? g(a.data, b) : (q = o.val(),
								x = null )
						},
						error: function() {
							q = o.val(),
								x = null
						}
					})
			}
			function f(a) {
				for (var b = 1, c = "", d = 0; d < a.length; d++)
					c += '<div class="item-info-page" data-act-type="hover" data-index="' + b++ + '"><p type="' + a[d].type + '" school_id="' + a[d].id + '">' + a[d].school_name + "</p></div>";
				return c
			}
			function g(b, c) {
				var d = "";
				console.log("idx=" + c + "  index=" + t),
					t > c ? console.log("跳过") : (d = f(b),
						console.log(d),
						console.log(n.length),
						n.html(d),
						n.find("p").on("click", function() {
							o.val($(this).html()),
								o.attr("school_type", $(this).attr("type")),
								x = $(this).attr("school_id"),
								q = $(this).html(),
								h(),
								a.find(".schoolname").blur()
						}),
					"" != d && "" != o.val() && n.css("display", ""))
			}
			function h() {
				n.css("display", "none")
			}
			function i() {
				l = o.val(),
					q = o.val(),
				s != l && (clearTimeout(k),
					s = l,
					"" == l ? (h(),
						s = "") : k = setTimeout(function() {
						e(l, t)
					}, 200),
					t++)
			}
			var j = require("ux/quicklyReg");
			c.showPopLogin && j.init({
				unclosed: !0
			});
			var k, l, a = $(a), m = a.find(".schooltype"), n = a.find(".J-result-List"), o = a.find(".schoolname"), p = m.val(), q = o.val(), r = b.infodefault && b.infodefault.school_year ? b.infodefault.school_year : a.find(".schoolyear").val(), s = "", t = 1, u = b.addmblog, v = b.event, w = b.infodefault && b.infodefault.id ? b.infodefault.id : null , x = b.infodefault && b.infodefault.school_id ? b.infodefault.school_id : null , y = require("conf/inter/suggestionSchools"), z = require("ux/toast");
			d(2011),
				a.find(".infolist select").on("change", function() {
					$(this).val() ? ($(this).next("a").removeClass("placeholder").addClass("selected"),
						$(this).next("a").html($(this).find("option:selected").text())) : ($(this).next("a").removeClass("selected").addClass("placeholder"),
						$(this).next("a").html("请选择")),
					$(this).hasClass("schooltype") && (p = $(this).val()),
					$(this).hasClass("schoolyear") && (r = $(this).val())
				}),
			n.length || (n = $("<div node-type='J-result-list' class='J-result-list'></div>"),
				a.append(n)),
				a.find(".schoolname").on("focus", function() {
					interval = setInterval(function() {
						i()
					}, 200)
				}),
				a.find(".schoolname").on("blur", function() {
					clearInterval(interval)
				}),
				a.find(".btnsave").on("click", function() {
					if (p && q && r)
						if (o.attr("school_type") != a.find(".schooltypewrap a").html())
							z.error("学校类型或名称错误");
						else {
							if (w)
								var c = {
									year: r,
									school_id: x,
									id: w,
									addmblog: u,
									event: v
								};
							else
								var c = {
									year: r,
									school_id: x,
									addmblog: u,
									event: v
								};
							y.get("updEduCommit", {
								data: c,
								success: function(a) {
									if (1 == a.ok) {
										z.success(a.msg);
										var c = a.url || b.landdinghref;
										window.location.href = c
									} else
										z.error(a.msg)
								},
								error: function() {
									z.error("接口访问失败")
								}
							})
						}
					else
						z.alarm("信息不完整", 2e3)
				})
		}
	}),
	define("conf/inter/suggestionSchools", function(require, a, b) {
		var c = require("core/io/trans")();
		c.set("suggestionSchools", {
			url: "/users/suggestionSchools",
			type: "GET"
		}),
			c.set("updEduCommit", {
				url: "/users/updEduCommit",
				type: "POST"
			}),
			b.exports = c
	}),
	define("mod/form/area", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("core/store")
				, f = {
				0: "全国",
				11: "北京",
				12: "天津",
				13: "河北",
				14: "山西",
				15: "内蒙古",
				21: "辽宁",
				22: "吉林",
				23: "黑龙江",
				31: "上海",
				32: "江苏",
				33: "浙江",
				34: "安徽",
				35: "福建",
				36: "江西",
				37: "山东",
				41: "河南",
				42: "湖北",
				43: "湖南",
				44: "广东",
				45: "广西",
				46: "海南",
				50: "重庆",
				51: "四川",
				52: "贵州",
				53: "云南",
				54: "西藏",
				61: "陕西",
				62: "甘肃",
				63: "青海",
				64: "宁夏",
				65: "新疆",
				71: "台湾",
				81: "香港",
				82: "澳门",
				100: "其他",
				400: "海外"
			}
				, g = $("#J_province_type")
				, h = $("#J_city_type")
				, i = ""
				, j = b.area
				, k = {
				province: j.province.id,
				city: j.city.id
			};
			e.set("mod_area", k);
			var l = function(a, b) {
					var c = a.target
						, d = c.options[c.selectedIndex].innerHTML
						, f = c.options[c.selectedIndex].value;
					$(c).parent().find(".select-txt");
					$(c).parent().removeClass("isDefault"),
						$(c).parent().find(".select-txt").html(d),
						k[b] = f,
					"province" == b && (k.city = "",
					"0" == k.province && (k.city = "0")),
						e.set("mod_area", k),
						console.log(e.get("mod_area"))
				}
				, m = function(a) {
					var b = '<option value="-1">请选择</option>';
					for (var c in a)
						b += "<option value=" + c + ">" + a[c] + "</option>";
					return b
				}
				, n = function(a) {
					d.get("getCity", {
						data: "pid=" + Number(a),
						success: function(a) {
							1 != a.ok ? alert(a.msg) : (h.html(m(a.data)),
								h.val("-1"))
						}
					})
				}
				, o = function() {
					b.area.province.name && "0" != k.province && "100" != k.province && n(Number(b.area.province.id)),
						i = m(f),
						g.html(i),
						g.val("-1"),
						g.on("change", function(a) {
							var b = a.target
								, c = b.options[b.selectedIndex].innerHTML;
							"请选择" != c && (l(a, "province"),
								"0" == g.val() || "100" == g.val() ? h.parent().addClass("hid") : (h.parent().removeClass("hid"),
									n(Number(g.val())),
									"北京" == c || "上海" == c || "天津" == c || "重庆" == c || "香港" == c || "澳门" == c ? h.next().html("请选择区") : "海外" == c ? h.next().html("请选择国家") : h.next().html("请选择市"),
									h.parent().addClass("isDefault")))
						}),
						h.on("change", function(a) {
							var b = a.target
								, c = b.options[b.selectedIndex].innerHTML;
							"请选择" != c && l(a, "city")
						})
				}
				;
			o()
		}
	}),
	define("conf/inter/pageClaim", function(require, a, b) {
		var c = require("core/io/trans")();
		c.set("getCity", {
			url: "/scriptConfig/getCity",
			type: "POST"
		}),
			c.set("create", {
				url: "/claim/page/createCommit",
				type: "POST"
			}),
			c.set("setinfo", {
				url: "/claim/page/setinfo",
				type: "POST"
			}),
			c.set("customize", {
				url: "/claim/pagemodule/customize",
				type: "POST"
			}),
			c.set("feedConfig", {
				url: "/claim/pageshield/feedConfig",
				type: "POST"
			}),
			c.set("addPic", {
				url: "/mblogDeal/addPic",
				type: "POST"
			}),
			c.set("searchUser", {
				url: "/claim/pageadmin/searchUser",
				type: "POST"
			}),
			c.set("authorize", {
				url: "/claim/pageadmin/authorize",
				type: "POST"
			}),
			c.set("unauthorize", {
				url: "/claim/pageadmin/unauthorize",
				type: "POST"
			}),
			c.set("block", {
				url: "/claim/pageshield/block",
				type: "POST"
			}),
			c.set("unBlock", {
				url: "/claim/pageshield/unBlock",
				type: "POST"
			}),
			b.exports = c
	}),
	define("core/store", function(require, a, b) {
		function c() {
			try {
				return j in h && h[j]
			} catch (a) {
				return !1
			}
		}
		function d(a) {
			return function() {
				var b = Array.prototype.slice.call(arguments, 0);
				b.unshift(f),
					l.appendChild(f),
					f.addBehavior("#default#userData"),
					f.load(j);
				var c = a.apply(g, b);
				return l.removeChild(f),
					c
			}
		}
		function e(a) {
			return a.replace(/^d/, "___$&").replace(o, "___")
		}
		var f, g = {}, h = window, i = h.document, j = "localStorage", k = "script";
		if (g.disabled = !1,
				g.set = function(a, b) {}
				,
				g.get = function(a) {}
				,
				g.remove = function(a) {}
				,
				g.clear = function() {}
				,
				g.transact = function(a, b, c) {
					var d = g.get(a);
					null  == c && (c = b,
						b = null ),
					"undefined" == typeof d && (d = b || {}),
						c(d),
						g.set(a, d)
				}
				,
				g.getAll = function() {}
				,
				g.forEach = function() {}
				,
				g.serialize = function(a) {
					return JSON.stringify(a)
				}
				,
				g.deserialize = function(a) {
					if ("string" != typeof a)
						return void 0;
					try {
						return JSON.parse(a)
					} catch (b) {
						return a || void 0
					}
				}
				,
				c())
			f = h[j],
				g.set = function(a, b) {
					return void 0 === b ? g.remove(a) : (f.setItem(a, g.serialize(b)),
						b)
				}
				,
				g.get = function(a) {
					return g.deserialize(f.getItem(a))
				}
				,
				g.remove = function(a) {
					f.removeItem(a)
				}
				,
				g.clear = function() {
					f.clear()
				}
				,
				g.getAll = function() {
					var a = {};
					return g.forEach(function(b, c) {
						a[b] = c
					}),
						a
				}
				,
				g.forEach = function(a) {
					for (var b = 0; b < f.length; b++) {
						var c = f.key(b);
						a(c, g.get(c))
					}
				}
			;
		else if (i.documentElement.addBehavior) {
			var l, m;
			try {
				m = new ActiveXObject("htmlfile"),
					m.open(),
					m.write("<" + k + ">document.w=window</" + k + '><iframe src="/favicon.ico"></iframe>'),
					m.close(),
					l = m.w.frames[0].document,
					f = l.createElement("div")
			} catch (n) {
				f = i.createElement("div"),
					l = i.body
			}
			var o = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");
			g.set = d(function(a, b, c) {
				return b = e(b),
					void 0 === c ? g.remove(b) : (a.setAttribute(b, g.serialize(c)),
						a.save(j),
						c)
			}),
				g.get = d(function(a, b) {
					return b = e(b),
						g.deserialize(a.getAttribute(b))
				}),
				g.remove = d(function(a, b) {
					b = e(b),
						a.removeAttribute(b),
						a.save(j)
				}),
				g.clear = d(function(a) {
					var b = a.XMLDocument.documentElement.attributes;
					a.load(j);
					for (var c, d = 0; c = b[d]; d++)
						a.removeAttribute(c.name);
					a.save(j)
				}),
				g.getAll = function(a) {
					var b = {};
					return g.forEach(function(a, c) {
						b[a] = c
					}),
						b
				}
				,
				g.forEach = d(function(a, b) {
					for (var c, d = a.XMLDocument.documentElement.attributes, e = 0; c = d[e]; ++e)
						b(c.name, g.deserialize(a.getAttribute(c.name)))
				})
		}
		try {
			var p = "__storejs__";
			g.set(p, p),
			g.get(p) != p && (g.disabled = !0),
				g.remove(p)
		} catch (n) {
			g.disabled = !0
		}
		g.enabled = !g.disabled,
			b.exports = g
	}),
	define("mod/form/avatar", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("ux/toast")
				, f = require("core/store")
				, g = require("brick").notice
				, h = $(a).find("img")
				, i = $(a).find("input");
			f.set("mod_avatar", h.attr("src"));
			var j = function(a, b) {
					d.get("addPic", {
						data: a,
						contentType: !1,
						processData: !1,
						success: function(a) {
							if (1 == a.ok) {
								var b = a.pic_url;
								h.attr({
									src: b
								}),
									f.set("mod_avatar", b);
								var c = {};
								c.image = {
									url: b
								},
									g.trigger("HEADPIC_LOAD_SUCCESS")
							} else
								e.error("图片上传失败！！")
						},
						error: function() {
							e.error("图片上传失败！")
						}
					})
				}
				;
			i.on("change", function(b) {
				if (navigator.userAgent.match(/OS [2-5]_\d_\d like Mac OS X/i))
					e.error("您的系统暂不支持上传");
				else if (navigator.userAgent.match(/OS 8_0_0 like Mac OS X/i))
					e.error("iOS8.0.0 目前无法支持发图，请等待苹果官方修复。");
				else {
					var c = new FormData;
					c.append("type", "json"),
						c.append("pic", this.files[0]),
						j(c, a)
				}
			})
		}
	}),
	define("mod/form/btn", function(require, a, b) {
		b.exports = function(a, b, c) {}
	}),
	define("mod/form/input", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("core/store")
				, f = require("ux/toast")
				, g = $(a).find('[data-node="J_input_node"]')
				, h = $(a).find('[data-node="J_info_label"]')
				, i = $(a).find('[data-node="J_error_label"]')
				, j = $(a).find('[data-node="J_card11_node"]')
				, k = $(a).find('[data-node="J_cardList_node"]')
				, l = $("#J_create_btn");
			l.on("click", function(a) {
				a.preventDefault();
				var b = e.get("mod_catagroy");
				if ("" == b.child || "" == b.grand)
					f.alarm("请选择分类", 1e3);
				else if (g.val()) {
					var c = b.parent + "-" + b.child + "-" + b.grand
						, l = String($(".input-item-wrapper layout-box input").val());
					d.get("create", {
						data: "display_name=" + l + "&category=" + c,
						success: function(a) {
							if (1 != a.ok) {
								h.addClass("hid"),
									i.html("名称已被占用，请修改名称；或直接查看:"),
									i.removeClass("hid");
								var b = "";
								a.data;
								k.html(b),
									j.removeClass("hid")
							} else
								f.alarm(a.msg, 1e3)
						}
					})
				} else
					f.alarm("请输入名称", 1e3)
			}),
				f.alarm("提示文案", 1e3)
		}
	}),
	define("mod/form/item", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("core/store");
			d.remove("mod_item"),
			window.itemData || (window.itemData = []),
				window.itemData.push(b),
				d.set("mod_item", window.itemData)
		}
	}),
	define("mod/form/label", function(require, a, b) {
		b.exports = function(a, b, c) {}
	}),
	define("mod/form/select", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("core/store")
				, f = {
				0: "全国",
				11: "北京",
				12: "天津",
				13: "河北",
				14: "山西",
				15: "内蒙古",
				21: "辽宁",
				22: "吉林",
				23: "黑龙江",
				31: "上海",
				32: "江苏",
				33: "浙江",
				34: "安徽",
				35: "福建",
				36: "江西",
				37: "山东",
				41: "河南",
				42: "湖北",
				43: "湖南",
				44: "广东",
				45: "广西",
				46: "海南",
				50: "重庆",
				51: "四川",
				52: "贵州",
				53: "云南",
				54: "西藏",
				61: "陕西",
				62: "甘肃",
				63: "青海",
				64: "宁夏",
				65: "新疆",
				71: "台湾",
				81: "香港",
				82: "澳门",
				100: "其他",
				400: "海外"
			}
				, g = b.catagroy_create
				, h = $(a).find('[data-node="J_parent_type"]')
				, i = $(a).find('[data-node="J_child_grand_node"]')
				, j = $(a).find('[data-node="J_child_type"]')
				, k = $(a).find('[data-node="J_grand_type"]')
				, l = ""
				, m = ""
				, n = !1
				, o = {
				catagroyPrefix: b.catagroy_prefix,
				parent: {
					name: "",
					id: ""
				},
				child: {
					name: "",
					id: ""
				},
				grand: {
					name: "",
					id: ""
				}
			};
			e.set("mod_catagroy", o);
			var p = function(a, b) {
					var c = a.target
						, d = c.options[c.selectedIndex].innerHTML || ""
						, f = c.options[c.selectedIndex].value || "";
					$(c).parent().find(".select-txt");
					$(c).parent().removeClass("isDefault"),
						$(c).parent().find(".select-txt").html(d),
						o[b].name = d,
						o[b].id = f,
					"parent" == b && (o.child.name = "",
						o.child.id = "",
						o.grand.name = "",
						o.grand.id = ""),
					"child" == b && (o.grand.name = "",
						o.grand.id = "",
					"0" == o.child.id && (o.grand.id = "0")),
						e.set("mod_catagroy", o),
						console.log(e.get("mod_catagroy"))
				}
				, q = function(a, b) {
					var c = '<option value="-1">请选择</option>';
					switch (b) {
						case "CATAGROY":
							for (var d in a)
								c += "<option value=" + a[d].id + ">" + a[d].name + "</option>";
							break;
						case "AREA":
							for (var d in a)
								c += "<option value=" + d + ">" + a[d] + "</option>"
					}
					return c
				}
				, r = function(a) {
					d.get("getCity", {
						data: "pid=" + Number(a),
						success: function(a) {
							1 != a.ok ? alert(a.msg) : (k.html(q(a.data, "AREA")),
								k.val("-1"))
						}
					})
				}
				, s = function(a, b) {
					for (var c in a)
						if (a[c].name == b) {
							var d = a[c].child;
							return d ? d : []
						}
				}
				, t = function() {
					l = q(g, "CATAGROY"),
						h.html(l),
						h.val("-1"),
						h.on("change", function(b) {
							var c = b.target
								, d = c.options[c.selectedIndex].innerHTML;
							"请选择" != d && (p(b, "parent"),
								i.removeClass("hid"),
								j.parent().addClass("isDefault"),
								k.parent().addClass("isDefault"),
								"社会" == d ? (n = !0,
									$(a).find('[data-node="J_child_grand_node"] p').html("地区"),
									k.parent().removeClass("hid"),
									j.html(q(f, "AREA")),
									j.val("-1"),
									j.next().html("请选择省"),
									k.next().html("请选择市")) : (n = !1,
									$(a).find('[data-node="J_child_grand_node"] p').html("选择分类"),
									k.parent().addClass("hid"),
									m = s(g, d),
									j.html(q(m, "CATAGROY")),
									j.next().html("一级子类"),
									j.val("-1")))
						}),
						j.on("change", function(a) {
							var b = a.target
								, c = b.options[b.selectedIndex].innerHTML;
							if ("请选择" != c)
								if (p(a, "child"),
									1 == n)
									"0" == j.val() || "100" == j.val() ? k.parent().addClass("hid") : (k.parent().removeClass("hid"),
										r(Number(j.val())),
										"北京" == c || "上海" == c || "天津" == c || "重庆" == c || "香港" == c || "澳门" == c ? k.next().html("请选择区") : "海外" == c ? k.next().html("请选择国家") : k.next().html("请选择市"),
										k.parent().addClass("isDefault"));
								else {
									var d = q(s(m, c), "CATAGROY");
									'<option value="-1">请选择</option>' != d ? (k.parent().removeClass("hid"),
										k.html(d, "CATAGROY"),
										k.val("-1"),
										k.next().html("二级子类"),
										k.parent().addClass("isDefault")) : k.parent().addClass("hid")
								}
						}),
						k.on("change", function(a) {
							var b = a.target
								, c = b.options[b.selectedIndex].innerHTML;
							"" != c && p(a, "grand")
						})
				}
				;
			t()
		}
	}),
	define("mod/form/select2", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = (require("conf/inter/pageClaim"),
				require("core/store"))
				, e = b.category_set
				, f = b.category_current
				, g = $(a).find('[data-node="J_child_type"]')
				, h = $(a).find('[data-node="J_grand_type"]')
				, i = ""
				, j = {
				parent: "",
				child: b.category_current.child,
				grand: b.category_current.grand
			};
			"版式" != b.desc && d.set("mod_category", j);
			var k = function(a, c) {
					var e = a.target
						, f = e.options[e.selectedIndex].innerHTML
						, g = e.options[e.selectedIndex].value;
					$(e).parent().find(".select-txt");
					$(e).parent().removeClass("isDefault"),
						$(e).parent().find(".select-txt").html(f),
						j[c] = {
							name: f,
							id: g
						},
					"child" == c && (j.grand = {
						name: "",
						id: ""
					}),
					"版式" != b.desc && d.set("mod_category", j)
				}
				, l = function(a) {
					var b = '<option value="-1">请选择</option>';
					for (var c in a)
						b += "<option value=" + a[c].id + ">" + a[c].name + "</option>";
					return b
				}
				, m = function(a, b) {
					for (var c in a)
						if (a[c].name == b) {
							var d = a[c].child;
							return d ? d : []
						}
				}
				, n = function() {
					if (f) {
						var a = f.grand.name;
						a && (h.parent().removeClass("hid"),
							h.next().html(a),
							h.next().parent().removeClass("isDefault")),
							h.html(l(m(e, b.category_current.child.name))),
							h.val(f.grand.id)
					}
					i = l(e),
						g.html(i),
						f && f.child ? g.val(f.child.id) : g.val("-1"),
						g.on("change", function(a) {
							var c = a.target
								, d = c.options[c.selectedIndex].innerHTML;
							if ("请选择" != d) {
								k(a, "child");
								var f = l(m(e, d));
								if ('<option value="-1">请选择</option>' != f ? (h.parent().removeClass("hid"),
										h.html(f),
										h.val("-1"),
										h.next().html("二级子类"),
										h.parent().addClass("isDefault")) : h.parent().addClass("hid"),
									g.val() && "版式" == b.desc) {
									var i = g.parents(".module-select").next(".module-label").find("p.label");
									$.each(e, function(a, b) {
										return b.id == g.val() && b.desc ? (i.text(b.desc),
											!1) : void i.text("")
									})
								}
							}
						}),
						h.on("change", function(a) {
							var c = a.target
								, d = c.options[c.selectedIndex].innerHTML;
							if ("请选择" != d && k(a, "grand"),
								h.val() && "版式" == b.desc) {
								var f = h.parents(".module-select").next(".module-label").find("p.label");
								$.each(e, function(a) {
									a.id == h.val() && null  != a.desc && void 0 != a.desc ? f.text(a.desc) : f.text("")
								})
							}
						})
				}
				;
			n()
		}
	}),
	define("mod/getUnread", function(require, a, b) {
		function c(a) {
			return a = a > 0 ? a > 99 ? "99+" : a : ""
		}
		function d(a) {
			e(),
				$.getJSON("/unread?t=" + (new Date).getTime()).done(function(b) {
					var d = 0
						, e = 0
						, f = 0;
					if (b.qp) {
						var g = b.qp;
						g["new"] && (f = g["new"]),
						g.fs && (e = g.fs),
						g.at && (d += g.at),
						g.pl && (d += g.pl),
						g.atcmt && (d += g.atcmt),
						g.sx && (d += g.sx),
						g.attitude && (d += g.attitude),
						g.group && (d += g.group),
							f = c(f),
							e = c(e),
							d = c(d),
						a && a(d, e, f)
					}
				}),
				f = setTimeout(function() {
					d(a)
				}, 3e4)
		}
		function e() {
			f && clearTimeout(f)
		}
		var f;
		b.exports = {
			getUnread: d,
			clearUnread: e
		}
	}),
	define("mod/goods_publisher", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d() {
				P ? location.href = "sinaweibo://browser/close?" : location.href = "http://m.weibo.cn/"
			}
			function e(a, b) {
				var c = "^[1-9][0-9]{0,8}$|^[0-9]{1,9}[.][0-9]{1,2}$"
					, d = new RegExp(c);
				return !a.validity.valid || b.length ? "0" == b || "0.0" == b || "0.00" == b ? (M.alarm("价格不能为0"),
					$(".toast-info").css("margin-top", "100px"),
					void D.focus()) : d.test(b) && a.validity.valid ? b - 0 > 6e3 ? (M.alarm("价格不能超过6000元哦", 1500),
					$(".toast-info").css("margin-top", "100px"),
					void D.focus()) : void 0 : (M.alarm("价格输入有误"),
					$(".toast-info").css("margin-top", "100px"),
					void D.focus()) : void 0
			}
			function f(a) {
				var b = "^[1-9][0-9]{0,8}$"
					, c = new RegExp(b);
				c.test(a) || !a || 0 == a || (M.alarm("库存输入有误"),
					$(".toast-info").css("margin-top", "100px"),
					E.focus())
			}
			function g(a) {
				var b = /(http|https):\/\//;
				return b.test(a) ? !0 : (M.alarm("淘宝地址格式错误"),
					$(".toast-info").css("margin-top", "100px"),
					F.focus(),
					!1)
			}
			function h(a) {
				var b = parseInt(Q - I(a.val()));
				a.val() && B.removeClass("btn-disable"),
				b == Q && (C.html(""),
					B.addClass("btn-disable")),
				b > 10 && Q > b && C.html(""),
				b >= 0 && 10 >= b && (C.removeClass("FCerror"),
					C.html(b)),
				0 > b && (C.addClass("FCerror"),
					C.html(b))
			}
			function i() {
				clearInterval(u),
					$(".module-topbar").css("position", "absolute"),
				a.find(".J-faceMain").length && (a.find(".J-faceMain").hide(),
					a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon")),
					clearInterval(t),
					t = setInterval(function() {
						h(A)
					}, 300)
			}
			function j() {
				clearInterval(u),
					$(".module-topbar").css("position", "fixed"),
					window.scrollTo(0, 1),
					clearInterval(t)
			}
			function k() {
				var b = []
					, c = [];
				if (a.find(".J-preview img").length)
					for (var d = a.find(".J-preview img").length, e = 0; d > e; e++)
						a.find(".J-preview img").eq(e).attr("picid") && b.push(a.find(".J-preview img").eq(e).attr("picid")),
							c.push(a.find(".J-preview img").eq(e).attr("src"));
				return S = c,
					b
			}
			function l() {
				v = D.val(),
					w = E.val() || 1;
				var a = {
					content: A.val()
				}
					, c = {};
				return R = k(),
					$.extend(c, {
						picId: R.join(),
						appkey: "2807558683"
					}),
				b.params && (delete b.params.content,
					$.extend(c, b.params)),
					$.extend(a, c)
			}
			function m() {
				var b = a.find(".J-preview img").length;
				k(),
					b > S.length ? Z.init({
						wrapperId: "J-send" + (new Date).getTime(),
						info: "有图片上传失败，是否继续发送？",
						cancelBtn: {
							id: "J-send-cancel",
							txt: "取消",
							callback: function() {
								return !1
							}
						},
						confirmBtn: {
							id: "J-send-continue",
							txt: "发送",
							callback: function() {
								o(U)
							}
						}
					}) : o(U)
			}
			function n() {
				var a;
				a = l(),
					a.content = "#微博橱窗#" + a.content + x,
					G.get("addAMblog", {
						data: a,
						success: function(a) {
							z = a.id,
								1 == a.ok ? (M.success(V + "成功", 3e3),
									G.get("uploadMid", {
										data: {
											iid: y,
											mid: z
										},
										success: function(a) {
											console.log(a.rst.msg),
												d.call()
										},
										error: function() {
											console.log(a.rst.msg),
												d.call()
										}
									})) : 228 == a.ok ? (M.success(V + "成功", 1e3),
									G.get("uploadMid", {
										data: {
											iid: y,
											mid: z
										},
										success: function(a) {
											console.log(a.rst.msg)
										},
										error: function() {
											console.log(a.rst.msg)
										}
									}),
									setTimeout(function() {
										Z.init({
											wrapperId: "SetLoginName" + (new Date).getTime(),
											info: "设置微博登录名，以后登录更方便。",
											cancelBtn: {
												id: "SetLoginName-cancle",
												txt: "以后设置",
												callback: d
											},
											confirmBtn: {
												id: "SetLoginName-confirm",
												txt: "马上设置",
												callback: function() {
													window.location.href = "https://passport.sina.cn/bindname/phone?entry=mweibo"
												}
											}
										})
									}, 1e3)) : M.error(V + "失败")
						},
						error: function() {
							M.error(V + "失败")
						}
					})
			}
			function o(a) {
				M.loading("正在提交...", 1e4);
				var c;
				c = l();
				var e = F.val();
				s = {
					price: v,
					description: A.val(),
					stock: w,
					pids: R.join(),
					imgs: S.join(),
					tburl: e
				},
				"updateGoods" == a && $.extend(s, {
					iid: b.goods.iid
				}),
					G.get(a, {
						data: s,
						success: function(b) {
							y = b.data.iid,
								1e3 == b.ok ? (T = 1,
									x = b.data.url,
									"createGoods" == a ? n() : (M.success(V + "成功", 3e3),
										d.call())) : M.error(V + "失败")
						},
						error: function() {
							M.error(V + "失败")
						}
					})
			}
			function p(b) {
				var c = a.find(".J-faceMain");
				c.length ? c.is(":visible") ? (a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon"),
					A.focus(),
					c.hide()) : (a.find(".action-publisher .emotion").removeClass("iconf_compose_emoticon").addClass("iconf_compose_keyboard"),
					c.show(),
					window.scrollTo(0, 15)) : (a.find(".action-publisher").after(K.faceTemp()),
					a.find(".action-publisher .emotion").removeClass("iconf_compose_emoticon").addClass("iconf_compose_keyboard"),
					window.scrollTo(0, 15),
					K.eventInit(a.find(".J-faceMain"), A, h))
			}
			function q(b, c) {
				a.find(".J-faceMain").length && (a.find(".J-faceMain").hide(),
					a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon"));
				var d = $(".J-preview img").length || 0;
				c ? J(b, d, a.find(".add-picture"), c, {
					pic_wm: 5
				}) : J(b, d, a.find(".add-picture"), null , {
					pic_wm: 5
				}),
					setTimeout(function() {
						window.scrollTo(0, document.documentElement.clientHeight)
					}, 0)
			}
			function r(a) {
				for (var b = 0; b < a.length; b++) {
					var c = a.get(b).className;
					a.get(b).className = c.replace(/uploadList_[0-9]/, "uploadList_" + b),
						a.eq(b).find(".pic-reload,.pic-dele").attr("order", b)
				}
			}
			var s, t, u, v, w, x, y, z, a = $(a), A = a.find(".txt-publisher"), B = a.find(".btn-send"), C = a.find(".J-limit"), D = a.find(".price"), E = a.find(".stock"), F = a.find(".tblink"), G = require("conf/inter/publisher"), H = require("core/device/ua"), I = require("core/util/wordsCount"), J = (require("core/util/moveEnd"),
				require("core/util/fileUpload")), K = require("core/util/weiboFace"), L = require("core/util/linkMan"), M = (require("core/device/geo"),
				require("ux/toast")), N = require("brick").notice, O = (require("core/device/touch"),
				require("core/lib/iscroll"),
				require("core/util/insertText")), P = (require("core/device/customEve"),
				$render_data.common.isInClient), Q = 120, R = [], S = [], T = 0, U = b.goods ? "updateGoods" : "createGoods", V = b.goods ? "编辑" : "创建";
			document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
			P && (H.os.android && !H.os.version.match(/4.4/) || (a.find(".action-publisher .picupload").remove(),
				a.find(".J-preview input").remove(),
				function() {
					function b() {
						a.find(".iconf_compose_picture,.J-preview .add-picture").on("click", function() {
							return 9 == $(".J-preview img").length ? void M.alarm("一次最多上传9张图片！") : void WeiboJSBridge.invoke("pickImage", {}, function(a, b, c) {
								b && q(this, a.base64)
							})
						})
					}
					window.WeiboJSBridge ? b() : document.addEventListener("WeiboJSBridgeReady", function() {
						b()
					})
				}()));
			var W;
			D.on("focus", function() {
				W = setInterval(function() {
					D.val().indexOf(".") < 0 && D.val().length > 4 && D.val(D.val().slice(0, 4)),
					D.val().indexOf(".") > 0 && D.val().length > D.val().indexOf(".") + 3 && D.val(D.val().slice(0, D.val().indexOf(".") + 3))
				}, 300)
			}),
				D.on("blur", function() {
					clearInterval(W),
						e(this, D.val())
				});
			var X;
			E.on("focus", function() {
				X = setInterval(function() {
					E.val().length > 9 && (M.alarm("库存超出限制", 1500),
						$(".toast-info").css("margin-top", "100px"),
						E.val(E.val().slice(0, 9)))
				}, 300)
			}),
				E.on("blur", function() {
					clearInterval(X),
						f(E.val())
				}),
				setTimeout(function() {
					if (b.goods && b.goods.imgs.length)
						for (var c = b.goods.imgs, d = 0; d < c.length; d++) {
							html = '<div class="uploadList uploadList_' + d + '"><img width="' + ba + '" height="' + ba + '"><div order="' + d + '" class="pic-reload iconf loading" style="width:' + ba + "px;height:" + (ba - 18) + 'px;"><p class="hid">重新上传</p></div><span order="' + d + '" class="pic-dele iconf iconf_navbar_close hid" style="left:' + (ba - 22) + 'px;"></span></div>',
								a.find(".add-picture").before(html),
								N.trigger("pic-modification");
							var e = $(".J-preview .uploadList_" + d);
							e.find("img").attr({
								src: c[d].img.indexOf("sinaimg.cn") < 0 ? c[d].img : c[d].img.replace("/mw720/", "/thumb180/")
							}),
								e.find(".pic-reload").addClass("hid"),
								e.find(".pic-dele").removeClass("hid"),
								e.find(".pic-dele").on("click", function() {
									N.trigger("del-pic", parseInt(this.getAttribute("order")) + 1)
								})
						}
					b.params && b.params.content && A.val(b.params.content),
						h(A)
				}, 0),
				A.on("focus", i),
				N.on("setfocus", function() {
					u = setInterval(function() {
						h(A)
					}, 300),
						A.on("focus", i)
				}),
				N.on("offfocus", function() {
					A.off("focus", i)
				}),
				A.on("blur", j),
				N.on("setblur", function() {
					A.on("blur", j)
				}),
				N.on("offblur", function() {
					A.off("blur", j)
				});
			var Y = require("ux/alertPop")
				, Z = new Y;
			N.on("topbar:back", function() {
				d()
			}),
				B.on("click", function() {
					if (!$(this).hasClass("btn-disable")) {
						if (parseInt(C.html()) < 0)
							return void M.alarm("不能超过120字");
						if (!D.val())
							return M.alarm("请输入价格"),
								$(".toast-info").css("margin-top", "100px"),
								void D.focus();
						if (0 == parseFloat(D.val()))
							return M.alarm("价格不能为0"),
								$(".toast-info").css("margin-top", "100px"),
								void D.focus();
						if (!F.val() || g(F.val())) {
							if (0 == a.find(".J-preview img").length)
								return void M.alarm("请添加商品图片");
							if (0 == T)
								m();
							else if (s) {
								var b = !(s.price == D.val() && s.stock == (E.val() || 1) && s.description == A.val() && s.pids == k().join() && s.tburl == F.val());
								b ? m() : n()
							}
						}
					}
				});
			var _ = require("core/util/topic");
			a.find(".iconf_compose_trend").on("click", function() {
				_(this, A),
				P && $("#J-topicpop").find(".sub-header").hide()
			}),
				N.on("topic", function(a) {
					O(A[0], a.content),
						h(A)
				}),
				a.find(".action-publisher .emotion").on("click", function() {
					p()
				}),
				a.find(".iconf_compose_picture").on("click", function() {
					navigator.userAgent.match(/OS 8_0 like Mac OS X/i) && !window.navigator.standalone && alert("当前系统不支持发图，请升级系统。")
				});
			var aa = a.find(".J-preview").width()
				, ba = parseInt((aa - 40) / 3);
			a.find(".J-preview").css("max-height", 3 * ba + 30 + "px"),
				a.find(".J-preview .add-picture").css("font-size", ba + "px"),
				a.find(".J-preview input").css({
					width: ba + "px",
					height: ba + "px"
				}),
				a.find(".action-publisher .iconf_compose_picture").on("click", function() {
					a.find(".J-faceMain").length && (a.find(".J-faceMain").hide(),
						a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon")),
						window.scrollTo(0, document.documentElement.clientHeight),
					9 == $(".J-preview img").length && M.alarm("一次最多上传9张图片！")
				}),
				a.find(".action-publisher .picupload, .J-preview input").on("change", function(a) {
					q(this)
				}),
				N.on("pic-modification", function() {
					0 == $(".J-preview img").length && (a.find(".J-preview").addClass("hid"),
						a.find(".action-publisher .picupload").removeClass("hid")),
					$(".J-preview img").length > 0 && $(".J-preview img").length < 9 && (a.find(".action-publisher .picupload").removeClass("hid"),
						a.find(".J-preview").removeClass("hid"),
						a.find(".add-picture").addClass("able-add"),
						a.find(".add-picture input").removeAttr("disabled")),
					9 == $(".J-preview img").length && (a.find(".action-publisher .picupload").addClass("hid"),
						a.find(".add-picture").removeClass("able-add"),
						a.find(".add-picture input").attr("disabled", "true"))
				}),
				N.on("del-pic", function(a) {
					a -= 1,
						$(".J-preview .uploadList_" + a).remove(),
						r($(".J-preview .uploadList")),
						N.trigger("pic-modification")
				}),
				a.find(".iconf_compose_mention").on("click", function() {
					L(1),
					P && $("#J-contactpop").find(".sub-header").hide()
				}),
				N.on("userSmall", function(a) {
					O(A[0], "@" + a.screen_name + " "),
						h(A)
				})
		}
	}),
	define("conf/inter/publisher", function(require, a, b) {
		var c = require("core/io/trans")();
		c.set("addAMblog", {
			url: "/mblogDeal/addAMblog",
			type: "POST"
		}),
			c.set("rtMblog", {
				url: "/mblogDeal/rtMblog",
				type: "POST"
			}),
			c.set("addCmt", {
				url: "/commentDeal/addCmt",
				type: "POST"
			}),
			c.set("replyComment", {
				url: "/commentDeal/replyComment",
				type: "POST"
			}),
			c.set("sendMsg", {
				url: "/msgDeal/sendMsg",
				type: "POST"
			}),
			c.set("addPic", {
				url: "/mblogDeal/addPic",
				type: "POST"
			}),
			c.set("topic", {
				url: "/hot/hotHour",
				type: "GET"
			}),
			c.set("getNearbyPois", {
				url: "/poi/getNearbyPois"
			}),
			c.set("getUserFootprint", {
				url: "/poi/getUserFootprint"
			}),
			c.set("topMblogCheck", {
				url: "/mblogDeal/topMblogCheck",
				type: "GET"
			}),
			c.set("reviewAdd", {
				url: "/object/reviewAdd",
				type: "POST"
			}),
			c.set("createGoods", {
				url: "/pubs/weimai/create/",
				type: "POST"
			}),
			c.set("updateGoods", {
				url: "/pubs/weimai/update/",
				type: "POST"
			}),
			c.set("uploadMid", {
				url: "/pubs/weimai/uploadMid",
				type: "POST"
			}),
			b.exports = c
	}),
	define("core/util/moveEnd", function(require, a, b) {
		b.exports = function(a) {
			var a = "string" == typeof a ? $(a)[0] : a[0];
			a.focus();
			var b = a.value.length;
			if (a.createTextRange) {
				var c = a.createTextRange();
				c.moveStart("character", b),
					c.collapse(!0),
					c.select()
			} else
				"number" == typeof a.selectionStart && "number" == typeof a.selectionEnd && (a.selectionStart = a.selectionEnd = b)
		}
	}),
	define("core/util/fileUpload", function(require, a, b) {
		b.exports = function(a, b, c, d, e) {
			function f(a) {
				var b;
				b = a.split(",")[0].indexOf("base64") >= 0 ? atob(a.split(",")[1]) : unescape(a.split(",")[1]);
				for (var c = a.split(",")[0].split(":")[1].split(";")[0], d = new Uint8Array(b.length), e = 0; e < b.length; e++)
					d[e] = b.charCodeAt(e);
				var f;
				try {
					f = new Blob([d],{
						type: c
					})
				} catch (g) {
					if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
						"TypeError" == g.name && window.BlobBuilder) {
						var h = new BlobBuilder;
						h.append(d.buffer),
							f = h.getBlob(c)
					} else
						"InvalidStateError" == g.name && (f = new Blob([d.buffer],{
							type: c
						}))
				}
				return f
			}
			function g(a, c, d) {
				j.get("addPic", {
					dataType: "json",
					data: c,
					contentType: !1,
					processData: !1,
					success: function(e) {
						1 == e.ok ? (h = e.pic_url,
							h = h.replace("/thumbnail/", "/thumb180/"),
							d.find("img").attr({
								src: h,
								picid: e.pic_id
							}),
							d.find(".pic-reload").addClass("hid"),
							d.find(".pic-dele").removeClass("hid"),
							d.find(".pic-dele").on("click", function() {
								k.trigger("del-pic", parseInt(this.getAttribute("order")) + 1)
							})) : 0 == e.ok && (d.find(".pic-reload").removeClass("loading").addClass("iconf_notice"),
							d.find(".pic-reload p").removeClass("hid"),
							d.find(".pic-dele").removeClass("hid"),
							d.find(".pic-reload").on("click", function() {
								$(this).find("p").addClass("hid"),
									$(this).removeClass("iconf_notice").addClass("loading"),
									g(a, c, d),
									$(this).off("click"),
									d.find(".pic-dele").off("click")
							}),
							d.find(".pic-dele").on("click", function() {
								k.trigger("del-pic", parseInt(this.getAttribute("order")) + 1)
							}),
							l.error(e.msg)),
							b++
					},
					error: function() {
						b++,
							d.find(".pic-reload").removeClass("loading").addClass("iconf_notice"),
							d.find(".pic-reload p").removeClass("hid"),
							d.find(".pic-dele").removeClass("hid"),
							d.find(".pic-reload").on("click", function() {
								$(this).find("p").addClass("hid"),
									$(this).removeClass("iconf_notice").addClass("loading"),
									g(a, c, d),
									$(this).off("click"),
									d.find(".pic-dele").off("click")
							}),
							d.find(".pic-dele").on("click", function() {
								k.trigger("del-pic", parseInt(this.getAttribute("order")) + 1)
							}),
							l.error("图片上传失败！")
					}
				})
			}
			var h, i, j = (require("core/util/moveEnd"),
				require("conf/inter/publisher")), k = require("brick").notice, l = (require("core/device/ua"),
				require("ux/toast")), m = (require("ux/alertPop"),
				b), n = $(".J-preview").width(), o = parseInt((n - 40) / 3);
			if (i = d ? 1 : a.files.length) {
				if (9 == b || b > 9)
					return void l.alarm("一次最多上传9张图片！");
				var p = ""
					, q = 0;
				m + i > 9 && (q = 9 - m);
				for (var r = 0; i > r; r++) {
					if (q && r == q) {
						l.alarm("一次最多上传9张图片！");
						break
					}
					var s;
					0 == m ? (p = '<div class="uploadList uploadList_' + r + '"><img width="' + o + '" height="' + o + '"><div order="' + r + '" class="pic-reload iconf loading" style="width:' + o + "px;height:" + (o - 18) + 'px;"><p class="hid">重新上传</p></div><span order="' + r + '" class="pic-dele iconf iconf_navbar_close hid" style="left:' + (o - 22) + 'px;"></span></div>',
						c.before(p),
						s = $(".J-preview .uploadList_" + r)) : (p = '<div class="uploadList uploadList_' + (m + r) + '"><img width="' + o + '" height="' + o + '"><div order="' + (m + r) + '" class="pic-reload iconf loading" style="width:' + o + "px;height:" + (o - 18) + 'px;"><p class="hid">重新上传</p></div><span order="' + (m + r) + '" class="pic-dele iconf iconf_navbar_close hid" style="left:' + (o - 22) + 'px;"></span></div>',
						c.before(p),
						s = $(".J-preview .uploadList_" + (m + r))),
						k.trigger("pic-modification");
					var t = new FormData;
					t.append("type", "json");
					var u;
					if (d ? (u = f("data:image/jpeg;base64," + d),
							t.append("pic", u)) : t.append("pic", a.files[r]),
							e)
						for (var q in e)
							t.append(q, e[q]);
					g(r, t, s)
				}
			}
		}
	}),
	define("core/util/weiboFace", function(require, a, b) {
		var c = {}
			, d = [[["→_→"], ["微笑"], ["嘻嘻"], ["哈哈"], ["爱你"], ["挖鼻"], ["吃惊"], ["晕"], ["泪"], ["馋嘴"], ["抓狂"], ["哼"], ["可爱"], ["怒"], ["汗"], ["害羞"], ["困"], ["钱"], ["偷笑"], ["笑cry"], ["doge"], ["喵喵"], ["酷"], ["衰"], ["闭嘴"], ["鄙视"], ["色"], ["鼓掌"]], [["悲伤"], ["思考"], ["生病"], ["亲亲"], ["怒骂"], ["太开心"], ["白眼"], ["右哼哼"], ["左哼哼"], ["嘘"], ["委屈"], ["吐"], ["可怜"], ["睡"], ["挤眼"], ["失望"], ["顶"], ["疑问"], ["困"], ["感冒"], ["拜拜"], ["黑线"], ["阴险"], ["互粉"], ["心"], ["伤心"], ["猪头"], ["熊猫"]], [["兔子"], ["握手"], ["作揖"], ["赞"], ["耶"], ["good"], ["弱"], ["NO"], ["ok"], ["haha"], ["来"], ["威武"], ["鲜花"], ["钟"], ["浮云"], ["飞机"], ["月亮"], ["太阳"], ["微风"], ["下雨"], ["给力"], ["神马"], ["围观"], ["话筒"], ["奥特曼"], ["草泥马"], ["萌"], ["囧"]], [["织"], ["礼物"], ["喜"], ["围脖"], ["音乐"], ["绿丝带"], ["蛋糕"], ["蜡烛"], ["干杯"], ["男孩儿"], ["女孩儿"], ["肥皂"], ["照相机"], ["浪"], ["沙尘暴"]]]
			, e = '<aside class="J-faceMain wrapper-face"><div class="facewrapper"><div class="scroller tab-face">';
		d.forEach(function(a, b) {
			e += '<div id="face_' + (b + 1) + '" class="content-tab-face selfclear">',
				a.forEach(function(a, c) {
					e += 0 == b && 0 == c ? '<i data-face="' + a[0] + '" class="face_' + (b + 1) + " face icon_" + c + '"></i>' : '<i data-face="[' + a[0] + ']" class="face_' + (b + 1) + " face icon_" + c + '"></i>'
				}),
				e += "</div>"
		});
		var f = require("core/util/insertText")
			, g = require("core/device/touch")
			, h = require("core/device/ua")
			, i = require("brick").notice
			, j = d.length;
		c.eventInit = function(a, b, c) {
			a.find(".content-tab-face").css("width", $("body").width()),
				a.find(".scroller").css("width", $("body").width() * j);
			var d = a.find(".nav-tab-face li")
				, e = a.find(".scroller")[0]
				, k = 1;
			setTimeout(function() {
				function a(a, b, c, d, e) {
					a.style.MozTransform = "translate3d(" + b + "px, " + c + "px," + d + "px)",
						a.style.webkitTransform = "translate3d(" + b + "px, " + c + "px," + d + "px)",
						a.style.msTransform = "translate3d(" + b + "px, " + c + "px," + d + "px)",
						a.style.OTransform = "translate3d(" + b + "px, " + c + "px," + d + "px)",
						a.style.MozTransition = e,
						a.style.webkitTransition = e,
						a.style.OTransition = e
				}
				myScroll = new g({
					el: e,
					isPreventDefault: !0,
					preventDefaultException: {
						tagName: /^(IMG|I)$/
					}
				}),
					Events.on(myScroll, "S_left", function() {
						if (k >= 1 && j > k) {
							d.removeClass(),
								d.eq(k).addClass("current");
							var b = -k * $("body").width();
							a(e, b, 0, 0, "all 0.4s ease-out"),
								k++
						}
					}),
					Events.on(myScroll, "S_right", function() {
						if (k > 1 && j >= k) {
							d.removeClass(),
								d.eq(k - 2).addClass("current");
							var b = -(k - 2) * $("body").width();
							a(e, b, 0, 0, "all 0.4s ease-out"),
								k--
						}
					}),
					Events.on(myScroll, "S_tap", function(a) {
						var d = a.event.target;
						"i" == d.nodeName.toLowerCase() && (i.trigger("offfocus"),
							setTimeout(function() {
								f(b[0], $(d).data("face")),
									c(b),
									i.trigger("setfocus")
							}, h.os.android ? 200 : 0))
					})
			}, 0)
		}
			,
			e += '</div></div><ul class="nav-tab-face selfclear"><li class="current">1</li>';
		for (var k = 2; j >= k; k++)
			e += "<li>" + k + "</li>";
		e += "</ul></aside></div></div></aside>",
			c.faceTemp = function() {
				return e
			}
			,
			b.exports = c
	}),
	define("core/util/insertText", function(require, a, b) {
		b.exports = function(a, b) {
			var c = a.value;
			if ("number" == typeof a.selectionStart && "number" == typeof a.selectionEnd) {
				var d = a.selectionStart
					, e = a.selectionEnd
					, f = d;
				a.value = c.substring(0, d) + b + c.substring(e, c.length),
					f += b.length,
					a.selectionStart = a.selectionEnd = f
			} else if (document.selection) {
				var g = document.selection.createRange();
				if ("TEXTAREA" == g.parentElement().tagName) {
					if (g.text)
						g.text = b;
					else {
						var h = document.body.createTextRange();
						h.moveToElementText(a),
							g.setEndPoint("StartToStart", h);
						var i = g.text.length;
						a.value = c.substring(0, i) + b + c.substring(i, c.length)
					}
					return
				}
			} else
				a.value += b
		}
	}),
	define("core/util/linkMan", function(require, a, b) {
		function c() {
			var a = "#wbContact"
				, b = location.hash;
			(!b || a.indexOf(b) < 0) && d()
		}
		function d() {
			f.remove(),
			g && "#wbContact" == location.hash && history.go(-1)
		}
		function e() {
			var a = f.find("#J-result")
				, b = f.find("#J-default");
			j.search({
				parent: f.find("#J-poisearch"),
				resultWrap: a,
				clearKeyCallback: function() {
					f.find(".j_searchButton").html("取消"),
						a.find('[data-node-type="userList"]').empty(),
						a.hide(),
						f.find(".j_clearKey").hide()
				},
				submitCallback: function(c) {
					b.hide(),
						a.find('[data-node-type="userList"]').empty(),
						a.show(),
						a.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
						$.getJSON("/attention/getAttentionList?keyword=" + c + "&format=cards").done(function(b) {
							b.ok ? (a.find(".loading").hide(),
								k.render(a.find('[data-node-type="userList"]')[0], b.cards || [])) : a.find('[data-node-type="userList"]').html('<div class="ErrorInfo relativonError">搜索关注人列表为空</div>')
						})
				},
				onfocusCallback: function() {
					b.hide(),
						f.find(".j_searchButton").show()
				},
				inputCallback: function() {
					f.find(".j_searchInput").val() ? f.find(".j_searchButton").html("搜索") : f.find(".j_searchButton").html("取消")
				}
			}),
				b.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
				$.getJSON("/attention/getAtList").done(function(a) {
					a.ok ? (b.find(".loading").hide(),
						k.render(b.find('[data-node-type="userList"]')[0], a.cards || [])) : b.find('[data-node-type="userList"]').html('<div class="ErrorInfo relativonError">最近联系人列表为空</div>')
				}),
				l.on("userSmall", function(a) {
					d()
				}),
				f.find(".J-cancel").click(function() {
					d()
				})
		}
		var f, g, h = '<div id="J-contactpop" class="wrapper-popup"><div id="J-actualct"><header class="sub-header"><a class="J-cancel fl BtnLev4" href="javascript:;" >关闭</a><span>联系人</span><a class="J-update fr BtnLev4" style="visibility:hidden;" href="javascript:;" >更新</a></header><form id="J-poisearch" class="search-pos-pop"><a class="j_searchButton fr hid" href="javascript:;">取消</a><div class="txt-pos-pop"><span class="j_clearKey fr clear hid" node-type="clear"></span><span class="fl type iconf iconf_navbar_search" node-type="type-list"></span><div class="input-box"><input class=" j_searchInput search" type="text" node-type="search" placeholder="搜索联系人"></div></div></form><div id="J-result" style="display:none;"><div class="list-pos-pop" data-node-type="userList"></div></div><div id="J-default"><div class="list-pos-pop" data-node-type="userList"></div></div></div></div>', i = (require("tpl/mod/widget-list"),
			require("core/util/list"),
			require("core/util/insertText"),
			require("core/util/getVip"),
			require("core/util/screenHeight")), j = (require("core/util/scrollTo"),
			require("core/util/uiView")), k = (require("core/util/moveEnd"),
			require("brick")), l = k.notice;
		b.exports = function(a) {
			location.hash = "wbContact",
				g = a,
				window.onhashchange = c,
				$("#J-contactpop").length ? (f = $("#J-contactpop"),
					f.show()) : ($("body").append(h),
					f = $("#J-contactpop"),
					e()),
				f.find("#J-actualct").css({
					"min-height": i().viewHeight
				})
		}
	}),
	define("tpl/mod/widget-list", function(require, a, b) {
		require("core/tplFunc");
		b.exports = function(a) {
			var b = "";
			for (var c in a.data) {
				var d = a.data[c];
				b += '<a data-id="' + c + '" class="item-pos-pop clearfix BCLev8 FCLev18" href="javascript:;"><img class="J-lazyPic" src="http://u1.sinaimg.cn/upload/h5/img/v4/avt_def.png" data-src="' + d.avantar + '"><h2>' + d.nick + " " + a.getVip(d.vip) + "</h2></a>"
			}
			return b
		}
	}),
	define("core/util/list", function(require, a, b) {
		var c = require("../util/uiView");
		b.exports = function(a) {
			function b(a, b) {
				a = a || m.page,
					p.html(m.loadingTpl),
					n.triggerHandler("loading");
				var e = m.url
					, f = m.url;
				-1 != f.indexOf("?") ? "&" != f.slice(f.length - 1) && (f += "&") : f += "?",
					f += "page=" + a,
				b && "undefined" != b && (f += "&maxId=" + b),
					$.ajax({
						url: f,
						data: m.data,
						dataType: "json",
						success: function(b) {
							if (e != m.url)
								return void alert("1");
							if (c.valideState(b))
								return void alert("2");
							if (1 == b.ok) {
								var f = b.data;
								m.beforeRender && (f = m.beforeRender.call(o, b, a)),
									m.page = a,
								f && (d(f),
								m.showPager && g(m.getTotalPage.call(o, b) || b.maxPage, b.previous_cursor, b.next_cursor)),
									m.getTotalPage(b) > 1 ? q.show() : q.hide()
							} else
								p.html('<div class="ErrorInfo' + (m.errorClass ? " " + m.errorClass : "") + '">' + b.msg + "</div>"),
									q.hide();
							p.removeClass(r),
								n.removeClass("loading").triggerHandler("success"),
								m.success.call(o, b, a)
						},
						error: function() {
							q.hide(),
								p.removeClass(r).html('<div class="ErrorInfo">请求数据发生错误，请稍后再试！</div>'),
								n.removeClass("loading").triggerHandler("error"),
								m.error.call(o, a)
						}
					})
			}
			function d(a) {
				p.html(m.tpl(a))
			}
			function e(a) {
				j(a.target.value)
			}
			function f(a, b) {
				if (a = a || q.find("select"),
						b = b || q.data("max"),
					a.size() && 0 == a.children().size() && 1 * b > 0) {
					for (var c = [], d = 1; b >= d; d++) {
						var e = 1 == d ? " selected" : "";
						c.push('<option value="' + d + '"' + e + ">第" + d + "页</option>")
					}
					a.html(c.join(""))
				}
			}
			function g(a, b, c) {
				var d = m.page
					, e = [];
				if (isNaN(a))
					return void q.remove();
				1 >= a ? q.hide() : q.show(),
				a > 500 && (a = 500),
					q.data("max", a);
				var g = q.find("select");
				if (g.size() > 0 && q.data("max") == a) {
					g.val(d),
						q.find(".L-select span").html("第" + d + "页");
					var h = q.find(".prev");
					b && h.data("id", b);
					var i = q.find(".next");
					return c && i.data("id", c),
						1 == d ? h.addClass("disabled") : h.removeClass("disabled"),
						d >= a ? i.addClass("disabled") : i.removeClass("disabled"),
						void f(g, a)
				}
				var j = "prev" + (1 == d ? " disabled" : "")
					, k = "next" + (d == a ? " disabled" : "");
				e.push('<a href="javascript:;" class="' + j + '"' + (b ? 'data-id="' + b + '"' : "") + ">上一页</a>"),
					e.push('<span class="L-select num-pager BtnLev1"><select class="pageSel L-list-select">');
				for (var l = 1; a >= l; l++) {
					var n = l == d ? " selected" : "";
					e.push('<option value="' + l + '"' + n + ">第" + l + "页</option>")
				}
				e.push("</select><span>第" + d + "页</span></span>"),
					e.push('<a href="javascript:;" class="' + k + '"' + (c ? 'data-id="' + b + '"' : "") + ">下一页</a>"),
					q.html(e.join(""))
			}
			function h() {
				var a = $(this).data("id");
				j(m.page - 1, a)
			}
			function i() {
				var a = $(this).data("id");
				j(parseInt(m.page, 10) + 1, a)
			}
			function j(a, c) {
				b(a, c)
			}
			function k() {
				n.delegate(".widget-pager .prev:not(.disabled)", "click", h),
					n.delegate(".widget-pager .next:not(.disabled)", "click", i),
					n.delegate(".widget-pager select", "change", e)
			}
			function l() {
				return k(),
					f(),
				m.ignoreFirstPage || b(),
					this
			}
			var m = $.extend({
				element: null ,
				url: null ,
				data: null ,
				tpl: null ,
				listContainer: ".widget-list",
				pagerContainer: ".widget-pager",
				beforeRender: function(a, b) {
					return a
				},
				getTotalPage: function(a) {
					return a.maxPage
				},
				success: function() {},
				error: function() {},
				page: 1,
				showPager: !0,
				loadingTpl: '<div class="loadingV5" style="background: url(http://u1.sinaimg.cn/upload/h5/img/loading.gif) no-repeat center;height: 100px;"></div>',
				loadingClass: "loadingLarge",
				ignoreFirstPage: !1
			}, a)
				, n = ($.isObject ? $.isObject(m.element) : "object" == $.type(m.element)) ? m.element : $(m.element)
				, o = this
				, p = n.find(m.listContainer);
			0 === p.size() && (n.empty(),
				p = $('<div class="' + m.listContainer.substr(1) + '">').appendTo(n));
			var q = n.find(m.pagerContainer);
			0 === q.size() && m.showPager && (q = $('<div class="' + m.pagerContainer.substr(1) + '">').appendTo(n));
			var r = m.loadingClass;
			l(),
				o.changeUrl = function(a) {
					return m.url = a,
						this
				}
				,
				o.changeTpl = function(a) {
					return m.tpl = a,
						this
				}
				,
				this.getPage = function() {
					return m.page
				}
				,
				this.goTo = function(a) {
					return j(a),
						this
				}
		}
	}),
	define("core/util/uiView", function(require, a, b) {
		function c(a) {
			if (a.is(".J-feed-img img")) {
				var b = /\.gif$/;
				b.test(a.attr("src")) && 30 < a.width() && a.parent().addClass("gif")
			}
		}
		var d = require("core/util/rectifyName")
			, e = require("core/util/imgReady")
			, f = require("core/util/screenHeight")
			, g = {};
		g.formMsg = function(a, b, c) {
			var e = new function(a, b, c) {
				var a = "string" == typeof a ? $(a) : a;
				if (null  == a || null  == b)
					return !1;
				c || (c = 1);
				var b = '<div id="j_formMsg">' + b + "</div>";
				switch (1 * c) {
					case 1:
						a.append(b);
						break;
					case 2:
						a.prepend(b);
						break;
					case 3:
						a.after(b);
						break;
					case 4:
						a.before(b);
						break;
					default:
						return !1
				}
				var d = $("#j_formMsg");
				return d
			}
			(a,b,c);
			return e.close = function(a, b, c) {
				var e = this
					, f = 1500
					, g = ".j_msgText";
				c || (c = f);
				var h = e.find(g);
				h.length > 0 ? h.html(a) : e.children().eq(0).html(a);
				var i = "-webkit-transition: opacity 0.5s ease-in-out;-ms-transition: opacity 0.5s ease-in-out;transition: opacity 0.5s ease-in-out;";
				e.attr("style", i);
				setTimeout(function() {
					e.css({
						opacity: 0
					});
					var a = d("TransitionEnd").event;
					a ? e.on(a, function(a) {
						b && b(),
							e.remove()
					}) : (b && b(),
						e.remove())
				}, c)
			}
				,
				e
		}
			,
			g.search = function(a) {
				function b() {
					g.val() ? h.show() : (h.hide(),
					k && k())
				}
				function c(a) {
					var b = g.val();
					"取消" == i.html() && (g.val(""),
						g.blur(),
						$(f).find(".txt-pos-pop").css("margin-right", "0px"),
						g.parents(".search-pos-pop").siblings().show(),
						j.hide(),
						i.hide()),
					"搜索" == i.html() && (l && l.call(a, b),
						i.html("取消"))
				}
				var d, e = $.extend({
					parent: "#j_search",
					searchInput: ".j_searchInput",
					clearKey: ".j_clearKey",
					searchButton: ".j_searchButton",
					resultWrap: "#J-result",
					clearKeyCallback: function() {},
					submitCallback: function(a) {},
					onfocusCallback: function() {},
					inputCallback: function() {}
				}, a), f = e.parent, g = $(f).find(e.searchInput), h = $(f).find(e.clearKey), i = $(f).find(e.searchButton), j = e.resultWrap, k = e.clearKeyCallback, l = e.submitCallback, m = e.onfocusCallback, n = e.inputCallback, o = $(e.parent);
				g.bind("focus", function() {
					"none" != o.siblings().css("display") && m && m(),
						clearInterval(d),
						d = setInterval(function() {
							b()
						}, 300)
				}),
					g.bind("blur", function() {
						clearInterval(d),
							b()
					}),
					g.bind("input", function() {
						n()
					}),
					g.bind("keyup", function() {
						n()
					}),
					h.bind("click", function() {
						g.val(""),
						k && k(),
							g.focus()
					}),
					o.bind("submit", function(a) {
						a.preventDefault(),
							c(this),
							g.blur()
					}),
					i.bind("click", function() {
						c(o[0])
					})
			}
			,
			g.maskLayer = function(a, b) {
				b = $.extend({
					type: "remove"
				}, b);
				var c = new function(a, b) {
					var c = b.masksty ? "" : "background:rgba(0,0,0,0.4);position:absolute;top:0;width:100%;z-index:500"
						, d = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
						, e = "<div id='cache_mask' " + (b.masksty ? "class=" + b.masksty : "") + " style='height:" + d + "px;" + c + "'>" + a + "</div>";
					$("body").append(e);
					var f = $("#cache_mask")
						, g = f.children()
						, h = Math.max(document.body.scrollTop, document.body.scrollTop + $(window).height() / 2 - g.height() / 2)
						, i = $(document).width() / 2 - g.width() / 2;
					return 0 >= h && (h = 10),
					"top" == b.pos && (h = document.body.scrollTop),
						g.css({
							margin: h + "px 0 0 " + i + "px"
						}),
					b.cancelBind && "[object String]" == toString.call(b.cancelBind) && f.find(b.cancelBind).on("click", function(a) {
						a.stopPropagation()
					}),
					1 != b.cancelBind && f.on("click", function() {
						$(this)[b.type]()
					}),
						f.attr("id", "uiview_mask"),
						f
				}
				(a,b);
				return c.close = function() {
					var a = "remove";
					arguments.length && (a = arguments[0]),
						this[a]()
				}
					,
					c
			}
			,
			g.tipDialog = function(a, b, c) {
				return new function(a, b, c) {
					var c = $.extend({
						top: 0,
						left: 0
					}, c)
						, a = $(a)
						, d = a.offset().left + (c.left ? c.left : "")
						, e = a.height() + a.offset().top + c.top;
					return $(b).css({
						top: e + "px",
						left: d + "px"
					}).appendTo($("body")),
						b
				}
				(a,b,c)
			}
			,
			g.asynLoadPic = function(a, b) {
				a = a || ".asynLoad",
					b = b || "asynSuc",
					setTimeout(function() {
						$.each($(a), function(a, c) {
							if (!(c.className.indexOf(b) > 0) && $(c).data("src")) {
								var d = $(c);
								e(d.data("src"), function() {
									c.src = this.src
								}, function() {
									d.addClass(b),
										c.src = this.src,
										c.removeAttribute("data-src"),
										setTimeout(function() {
											d.removeClass(b)
										}, 200)
								})
							}
						})
					})
			}
			,
			g.lazyLoad = function(a, b) {
				var d = "J-lazyPic"
					, g = "picani"
					, h = $("." + d);
				setTimeout(function() {
					$.each(h, function(h, i) {
						var j = $(i)
							, k = j.data("src");
						if (k && j.is(":visible")) {
							if (j.data("loading"))
								return;
							j.data("loading", "1");
							var l = j.parents(".J-feed-img");
							e(k, function() {
								if (l.size() && "mul" != j.attr("data-type") && (this.width > l.width() ? j.css({
										"max-width": "100%"
									}) : j.css("width", "auto")),
										j.hasClass("J-resize")) {
									var b = j.parent()
										, c = b.width()
										, d = b.height()
										, e = d / c
										, f = this.height / this.width;
									e > f && j.css({
										height: "100%",
										width: "auto",
										"margin-left": -(this.width / this.height * d - c) / 2 + "px"
									}),
									f > e && j.css({
										"max-width": "100%",
										height: "auto",
										"margin-top": -(c / this.width * this.height - d) / 2 + "px"
									})
								}
								a && a.call(this, j)
							}, function() {
								j.attr("src", k),
									j.addClass(g),
									j[0].removeAttribute("data-src"),
									setTimeout(function() {
										j.removeClass(d),
											j.removeClass(g)
									}, 200),
									c(j);
								var a = f().viewHeight;
								if (0 == $(".wrapper-detail-wb").size() && j.height() > a) {
									var e = j.parents(".large-img-wb");
									e.hasClass("gif") || (e.css("max-height", a + "px").append('<i class="full"></i>'),
										e.find(".full").css({
											width: this.width + "px",
											"max-width": "100%"
										}))
								}
								b && b.call(this, j)
							})
						}
					})
				}, 15)
			}
			,
			g.valideState = function(a, b) {
				if ((-100 == a.ok || -98 == a.ok) && a.url) {
					var c = a.url;
					return -1 == c.indexOf("wm=") && window.comParam && (c = c + "&" + window.comParam),
						location.href = c,
						!0
				}
				return -3 == a.ok ? (require.async("common/module/1/dialog", function(c) {
					var d = ajaxPassParams
						, e = new c({
						title: "请输入验证码",
						modal: !1,
						hideClose: !0
					});
					e.init(),
						console.log("false" == a.checkcode),
						e.info('<p class="multi-info-popup"><input placeholder="请输入验证码" class="IptLev1" style="width:100%"/></p><div class="multi-info-popup">' + (0 == a.checkcode ? '<div class="AlarmInfo" style="margin: -5px 0 5px;">' + a.msg + "</div>" : "") + '<img src="http://weibo.cn/interface/f/ttt/captcha/show.php?c=' + a.captId + '"> <a href="javascript:;" node-action="changeCode">看不清换一张</a></div>'),
						e.getDom().find('[node-action="changeCode"]').click(function() {
							$.ajax({
								url: root + "verifycode/captId",
								success: function(b) {
									a.captId = b,
										e.getDom().find("img").attr("src", "http://weibo.cn/interface/f/ttt/captcha/show.php?c=" + b)
								}
							})
						}),
						e.addBtn('<a href="javascript:;" class="canel-popup L-item-tab BtnLev1">取消</a>', function() {
							e.destory()
						}),
						e.addBtn('<a href="javascript:;"" class="confirm-popup L-item-tab BtnLev3"><b></b>确定</a>', function() {
							ajaxPassParams += "&code=" + e.getDom().find("input").val() + "&captId=" + a.captId,
							b && b(),
								ajaxPassParams = d,
								e.destory()
						})
				}),
					!0) : -225 == a.ok ? (require.async("common/module/1/dialog", function(a) {
					var b = new a({
						title: "温馨提示",
						modal: !0
					});
					b.init(),
						b.info("您的帐号疑似被盗，已经被系统锁定部分功能，为了保障您的帐号安全，请立即修改密码。"),
						b.addBtn('<a href="javascript:void(0)" class="canel-popup L-item-tab BtnLev1">取消</a>', function() {
							b.destory()
						}),
						b.addBtn('<a href="javascript:void(0)" class="confirm-popup L-item-tab BtnLev2">修改密码</a>', function() {
							location.href = root + "security"
						})
				}),
					!0) : -9 == a.ok ? (require.async("common/module/1/dialog", function(a) {
					var b = new a({
						title: "操作失败！",
						modal: !0
					});
					b.init(),
						b.info("您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。"),
						b.addBtn('<a href="javascript:void(0)" class="canel-popup L-item-tab BtnLev1">以后再说</a>', function() {
							b.destory()
						}),
						b.addBtn('<a href="javascript:void(0)" class="confirm-popup L-item-tab BtnLev2">进行验证</a>', function() {
							location.href = root + "security"
						})
				}),
					!0) : -7 == a.ok || -8 == a.ok ? (location.href = root + "/security",
					!0) : !1
			}
			,
			g.loginState = function(a) {
				if (!(a || userInfo && userInfo.id)) {
					if (confirm("这个功能需要登录才能使用，立即登录?")) {
						var b = root + "login?backURL=" + encodeURIComponent(location.href);
						comParam && (b = b + "&" + comParam),
							location.href = b
					}
					return !1
				}
				return !0
			}
			,
			g.alert = function(a) {
				alert(a)
			}
			,
			g.inform = function(b) {
				function c(b) {
					var c = "";
					b.find("form").length && (c = b.find("form").serialize());
					var e = a.formMsg(b.find("form"), '<div class="j_msgText">正在提交...</div>');
					$.ajax({
						url: root + d.url + comParam,
						data: c,
						context: a,
						dataType: "json",
						type: "POST",
						success: function(a) {
							this.valideState(a) || e.close(a.msg, function() {
								1 == a.ok ? d.sucCallBack ? d.sucCallBack(a, f) : f.close() : d.eroCallBack && d.eroCallBack(a, f)
							}, d.time)
						}
					})
				}
				var d = $.extend({
					tempId: "",
					renderData: "",
					url: "",
					editSty: "form",
					sucCallBack: "",
					eroCallBack: "",
					time: ""
				}, b)
					, e = doT.template($(d.tempId).text())
					, f = this.maskLayer(e(d.renderData))
					, g = f.children()
					, h = g.find("#j_cancel")
					, i = g.find("#j_submit");
				f.find(d.editSty).on("click", function(a) {
					a.stopPropagation()
				}),
					i.on("click", function() {
						c(g)
					}),
					h.on("click", function() {
						f.close()
					})
			}
			,
			g.fixHeader = function(a, b) {
				var c = navigator.userAgent.toLowerCase()
					, d = c.match(/(android)\s+([\d]+)/)
					, e = c.match(/(iphone\sos)\s([\d]+)/);
				if (!(d && d[2] < 4 || e && e[2] < 5)) {
					var f = a || $("#J-fixedHeader");
					if (f.size()) {
						if (!f.is(":visible"))
							return;
						var g = $("#wrapper-log");
						g.size() && g.prependTo(f),
							f.parent().addClass(b || "fixed").css("padding-top", f.height() + "px")
					} else {
						var h = $(".sub-header");
						h.wrap('<div id="J-fixedHeader" class="wrapper-fixed"></div>'),
							f = h.parent()
					}
				}
			}
			,
			b.exports = g
	}),
	define("core/util/rectifyName", function(require, a, b) {
		b.exports = function(a) {
			var b, c, d = {
				Webkit: "webkit",
				Moz: "",
				O: "o",
				ms: "MS"
			}, e = document.createElement("div");
			return $.each(d, function(a, d) {
				return void 0 !== e.style[a + "TransitionProperty"] ? (c = "-" + a.toLowerCase() + "-",
					b = d,
					!1) : void 0
			}),
			{
				event: a && b ? b + a : "",
				prefix: c
			}
		}
	}),
	define("core/util/imgReady", function(require, a, b) {
		var c = []
			, d = null
			, e = function() {
				for (var a = 0; a < c.length; a++)
					c[a].end ? c.splice(a--, 1) : c[a]();
				!c.length && f()
			}
			, f = function() {
				clearInterval(d),
					d = null
			}
			;
		b.exports = function(a, b, f, g) {
			var h, i, j, k, l, m = new Image;
			return m.src = a,
				m.complete ? (b.call(m),
					void (f && f.call(m))) : (i = m.width,
					j = m.height,
					m.onerror = function() {
						g && g.call(m),
							h.end = !0,
							m = m.onload = m.onerror = null
					}
					,
					h = function() {
						k = m.width,
							l = m.height,
						(k !== i || l !== j || k * l > 1024) && (b.call(m),
							h.end = !0)
					}
					,
					h(),
					m.onload = function() {
						!h.end && h(),
							f ? f.call(m) : b.call(m),
							m = m.onload = m.onerror = null
					}
					,
					void (h.end || (c.push(h),
					null  === d && (d = setInterval(e, 40)))))
		}
	}),
	define("core/util/screenHeight", function(require, a, b) {
		b.exports = function(a) {
			var b = (window.screen.height,
				window.screen.width,
			window.innerHeight || document.documentElement.clientHeight);
			return {
				viewHeight: b
			}
		}
	}),
	define("core/util/getVip", function(require, a, b) {
		b.exports = function(a) {
			var b = "";
			"string" == typeof a && (a = a.split(","));
			for (var c = 0, d = a.length; d > c; c++)
				b = b + '<img src="' + a[c] + '" alt="v" width="15" height="15"/> ';
			return b
		}
	}),
	define("core/util/scrollTo", function(require, a, b) {
		var c, d = 1, e = !1;
		b.exports = function(a, b) {
			e || (c = setTimeout(function() {
				e = !0;
				var b = document.body.scrollTop
					, f = a - b > 0 ? 1 : -1
					, g = g || 1;
				d = d > 0 ? d * f : d,
				0 > a && (a = 0);
				var h = b + f + d;
				f > 0 && h > a ? h = a : 0 > f && a >= h && (h = a),
					h == a ? (d = 1,
						e = !1,
						clearTimeout(c)) : setTimeout(arguments.callee, 10),
					document.body.scrollTop = h,
					d += g * f
			}, 10))
		}
	}),
	define("core/lib/iscroll", function(require, a, b) {
		!function(a, c, d) {
			function e(a, b) {
				this.wrapper = "string" == typeof a ? c.querySelector(a) : a,
					this.scroller = this.wrapper.children[0],
					this.scrollerStyle = this.scroller.style,
					this.options = {
						slider: null ,
						zoomMin: 1,
						zoomMax: 2,
						startZoom: 1,
						resizeScrollbars: !0,
						mouseWheelSpeed: 20,
						snapThreshold: .334,
						startX: 0,
						startY: 0,
						scrollY: !0,
						directionLockThreshold: 5,
						momentum: !0,
						bounce: !0,
						bounceTime: 600,
						bounceEasing: "",
						preventDefault: !0,
						preventDefaultException: {
							tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/
						},
						HWCompositing: !0,
						useTransition: !0,
						useTransform: !0
					};
				for (var e in b)
					this.options[e] = b[e];
				this.translateZ = this.options.HWCompositing && i.hasPerspective ? " translateZ(0)" : "",
					this.options.useTransition = i.hasTransition && this.options.useTransition,
					this.options.useTransform = i.hasTransform && this.options.useTransform,
					this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
					this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
					this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY,
					this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX,
					this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
					this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
					this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? i.ease[this.options.bounceEasing] || i.ease.circular : this.options.bounceEasing,
					this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
				this.options.tap === !0 && (this.options.tap = "tap"),
				"scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
					this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
					this.x = 0,
					this.y = 0,
					this.directionX = 0,
					this.directionY = 0,
					this._events = {},
					this.scale = d.min(d.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax),
					this._init(),
					this.refresh(),
					this.scrollTo(this.options.startX, this.options.startY),
					this.enable()
			}
			function f(a, b, d) {
				var e = c.createElement("div")
					, f = c.createElement("div");
				return d === !0 && (e.style.cssText = "position:absolute;z-index:9999",
					f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
					f.className = "iScrollIndicator",
					"h" == a ? (d === !0 && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
						f.style.height = "100%"),
						e.className = "iScrollHorizontalScrollbar") : (d === !0 && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
						f.style.width = "100%"),
						e.className = "iScrollVerticalScrollbar"),
					e.style.cssText += ";overflow:hidden",
				b || (e.style.pointerEvents = "none"),
					e.appendChild(f),
					e
			}
			function g(b, d) {
				this.wrapper = "string" == typeof d.el ? c.querySelector(d.el) : d.el,
					this.wrapperStyle = this.wrapper.style,
					this.indicator = this.wrapper.children[0],
					this.indicatorStyle = this.indicator.style,
					this.scroller = b,
					this.options = {
						listenX: !0,
						listenY: !0,
						interactive: !1,
						resize: !0,
						defaultScrollbars: !1,
						shrink: !1,
						fade: !1,
						speedRatioX: 0,
						speedRatioY: 0
					};
				for (var e in d)
					this.options[e] = d[e];
				this.sizeRatioX = 1,
					this.sizeRatioY = 1,
					this.maxPosX = 0,
					this.maxPosY = 0,
				this.options.interactive && (this.options.disableTouch || (i.addEvent(this.indicator, "touchstart", this),
					i.addEvent(a, "touchend", this)),
				this.options.disablePointer || (i.addEvent(this.indicator, "MSPointerDown", this),
					i.addEvent(a, "MSPointerUp", this)),
				this.options.disableMouse || (i.addEvent(this.indicator, "mousedown", this),
					i.addEvent(a, "mouseup", this))),
				this.options.fade && (this.wrapperStyle[i.style.transform] = this.scroller.translateZ,
					this.wrapperStyle[i.style.transitionDuration] = i.isBadAndroid ? "0.001s" : "0ms",
					this.wrapperStyle.opacity = "0")
			}
			var h = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(b) {
					a.setTimeout(b, 1e3 / 60)
				}
				, i = function() {
				function b(a) {
					return g === !1 ? !1 : "" === g ? a : g + a.charAt(0).toUpperCase() + a.substr(1)
				}
				var e = {}
					, f = c.createElement("div").style
					, g = function() {
					for (var a, b = ["t", "webkitT", "MozT", "msT", "OT"], c = 0, d = b.length; d > c; c++)
						if (a = b[c] + "ransform",
							a in f)
							return b[c].substr(0, b[c].length - 1);
					return !1
				}();
				e.getTime = Date.now || function() {
						return (new Date).getTime()
					}
					,
					e.extend = function(a, b) {
						for (var c in b)
							a[c] = b[c]
					}
					,
					e.addEvent = function(a, b, c, d) {
						a.addEventListener(b, c, !!d)
					}
					,
					e.removeEvent = function(a, b, c, d) {
						a.removeEventListener(b, c, !!d)
					}
					,
					e.momentum = function(a, b, c, e, f, g) {
						var h, i, j = a - b, k = d.abs(j) / c;
						return g = void 0 === g ? 6e-4 : g,
							h = a + k * k / (2 * g) * (0 > j ? -1 : 1),
							i = k / g,
							e > h ? (h = f ? e - f / 2.5 * (k / 8) : e,
								j = d.abs(h - a),
								i = j / k) : h > 0 && (h = f ? f / 2.5 * (k / 8) : 0,
								j = d.abs(a) + h,
								i = j / k),
						{
							destination: d.round(h),
							duration: i
						}
					}
				;
				var h = b("transform");
				return e.extend(e, {
					hasTransform: h !== !1,
					hasPerspective: b("perspective") in f,
					hasTouch: "ontouchstart" in a,
					hasPointer: navigator.msPointerEnabled,
					hasTransition: b("transition") in f
				}),
					e.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion),
					e.extend(e.style = {}, {
						transform: h,
						transitionTimingFunction: b("transitionTimingFunction"),
						transitionDuration: b("transitionDuration"),
						transitionDelay: b("transitionDelay"),
						transformOrigin: b("transformOrigin")
					}),
					e.hasClass = function(a, b) {
						var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
						return c.test(a.className)
					}
					,
					e.addClass = function(a, b) {
						if (!e.hasClass(a, b)) {
							var c = a.className.split(" ");
							c.push(b),
								a.className = c.join(" ")
						}
					}
					,
					e.removeClass = function(a, b) {
						if (e.hasClass(a, b)) {
							var c = new RegExp("(^|\\s)" + b + "(\\s|$)","g");
							a.className = a.className.replace(c, " ")
						}
					}
					,
					e.offset = function(a) {
						for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
							b -= a.offsetLeft,
								c -= a.offsetTop;
						return {
							left: b,
							top: c
						}
					}
					,
					e.preventDefaultException = function(a, b) {
						for (var c in b)
							if (b[c].test(a[c]))
								return !0;
						return !1
					}
					,
					e.extend(e.eventType = {}, {
						touchstart: 1,
						touchmove: 1,
						touchend: 1,
						mousedown: 2,
						mousemove: 2,
						mouseup: 2,
						MSPointerDown: 3,
						MSPointerMove: 3,
						MSPointerUp: 3
					}),
					e.extend(e.ease = {}, {
						quadratic: {
							style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							fn: function(a) {
								return a * (2 - a)
							}
						},
						circular: {
							style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
							fn: function(a) {
								return d.sqrt(1 - --a * a)
							}
						},
						back: {
							style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
							fn: function(a) {
								var b = 4;
								return (a -= 1) * a * ((b + 1) * a + b) + 1
							}
						},
						bounce: {
							style: "",
							fn: function(a) {
								return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
							}
						},
						elastic: {
							style: "",
							fn: function(a) {
								var b = .22
									, c = .4;
								return 0 === a ? 0 : 1 == a ? 1 : c * d.pow(2, -10 * a) * d.sin((a - b / 4) * (2 * d.PI) / b) + 1
							}
						}
					}),
					e.tap = function(a, b) {
						var d = c.createEvent("Event");
						d.initEvent(b, !0, !0),
							d.pageX = a.pageX,
							d.pageY = a.pageY,
							a.target.dispatchEvent(d)
					}
					,
					e.click = function(a) {
						var b, d = a.target;
						/(SELECT|INPUT|TEXTAREA)/i.test(d.tagName) || (b = c.createEvent("MouseEvents"),
							b.initMouseEvent("click", !0, !0, a.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null ),
							b._constructed = !0,
							d.dispatchEvent(b))
					}
					,
					e
			}();
			e.prototype = {
				version: "5.1.1",
				_init: function() {
					this._initEvents(),
					this.options.zoom && this._initZoom(),
					(this.options.scrollbars || this.options.indicators) && this._initIndicators(),
					this.options.mouseWheel && this._initWheel(),
					this.options.snap && this._initSnap(),
					this.options.keyBindings && this._initKeys()
				},
				destroy: function() {
					this._initEvents(!0),
						this._execEvent("destroy")
				},
				_transitionEnd: function(a) {
					a.target == this.scroller && this.isInTransition && (this._transitionTime(),
					this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
						this._execEvent("scrollEnd")))
				},
				_start: function(a) {
					if ((1 == i.eventType[a.type] || 0 === a.button) && this.enabled && (!this.initiated || i.eventType[a.type] === this.initiated)) {
						!this.options.preventDefault || i.isBadAndroid || i.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
						var b, c = a.touches ? a.touches[0] : a;
						this.initiated = i.eventType[a.type],
							this.moved = !1,
							this.distX = 0,
							this.distY = 0,
							this.directionX = 0,
							this.directionY = 0,
							this.directionLocked = 0,
							this._transitionTime(),
							this.startTime = i.getTime(),
							this.options.useTransition && this.isInTransition ? (this.isInTransition = !1,
								b = this.getComputedPosition(),
								this._translate(d.round(b.x), d.round(b.y)),
								this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
								this._execEvent("scrollEnd")),
							this.startX = this.x,
							this.startY = this.y,
							this.absStartX = this.x,
							this.absStartY = this.y,
							this.pointX = c.pageX,
							this.pointY = c.pageY,
							this._execEvent("beforeScrollStart")
					}
				},
				_move: function(a) {
					if (this.enabled && i.eventType[a.type] === this.initiated) {
						this.options.preventDefault && a.preventDefault();
						var b, c, e, f, g = a.touches ? a.touches[0] : a, h = g.pageX - this.pointX, j = g.pageY - this.pointY, k = i.getTime();
						if (this.pointX = g.pageX,
								this.pointY = g.pageY,
								this.distX += h,
								this.distY += j,
								e = d.abs(this.distX),
								f = d.abs(this.distY),
								!(10 > e && 10 > f)) {
							if (this.directionLocked || this.options.freeScroll || (e > f + this.options.directionLockThreshold ? this.directionLocked = "h" : f >= e + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
								"h" == this.directionLocked) {
								if ("vertical" == this.options.eventPassthrough)
									a.preventDefault();
								else if ("horizontal" == this.options.eventPassthrough)
									return void (this.initiated = !1);
								j = 0
							} else if ("v" == this.directionLocked) {
								if ("horizontal" == this.options.eventPassthrough)
									a.preventDefault();
								else if ("vertical" == this.options.eventPassthrough)
									return void (this.initiated = !1);
								h = 0
							}
							h = this.hasHorizontalScroll ? h : 0,
								j = this.hasVerticalScroll ? j : 0,
								b = this.x + h,
								c = this.y + j,
							(b > 0 || b < this.maxScrollX) && (b = this.options.bounce ? this.x + h / 3 : b > 0 ? 0 : this.maxScrollX),
							(c > 0 || c < this.maxScrollY) && (c = this.options.bounce ? this.y + j / 3 : c > 0 ? 0 : this.maxScrollY),
								this.directionX = h > 0 ? -1 : 0 > h ? 1 : 0,
								this.directionY = j > 0 ? -1 : 0 > j ? 1 : 0,
							this.moved || this._execEvent("scrollStart"),
								this.moved = !0,
								this._translate(b, c),
							k - this.startTime > 300 && (this.startTime = k,
								this.startX = this.x,
								this.startY = this.y)
						}
					}
				},
				_end: function(a) {
					if (this.enabled && i.eventType[a.type] === this.initiated) {
						this.options.preventDefault && !i.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
						var b, c, e = a.changedTouches ? a.changedTouches[0] : a, f = i.getTime() - this.startTime, g = d.round(this.x), h = d.round(this.y), j = d.abs(g - this.startX), k = d.abs(h - this.startY), l = 0, m = "";
						if (this.isInTransition = 0,
								this.initiated = 0,
								this.endTime = i.getTime(),
								!this.resetPosition(this.options.bounceTime)) {
							if (this.scrollTo(g, h),
									!this.moved) {
								if (this.doubleTapTimer && this.options.zoom)
									clearTimeout(this.doubleTapTimer),
										this.doubleTapTimer = null ,
									this.options.doubleTapZoom && this.zoom(this.scale > 1 ? 1 : this.options.doubleTapZoom, e.pageX, e.pageY);
								else {
									var n = this;
									this.doubleTapTimer = setTimeout(function() {
										n.doubleTapTimer = null ,
										n.options.tap && i.tap(a, n.options.tap),
										n.options.click && i.click(a)
									}, this.options.zoom ? 250 : 0)
								}
								return void this._execEvent("scrollCancel")
							}
							if (this._events.flick && 200 > f && 100 > j && 100 > k)
								return void this._execEvent("flick");
							if (this.options.momentum && 300 > f && (b = this.hasHorizontalScroll ? i.momentum(this.x, this.startX, f, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
									destination: g,
									duration: 0
								},
									c = this.hasVerticalScroll ? i.momentum(this.y, this.startY, f, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
										destination: h,
										duration: 0
									},
									g = b.destination,
									h = c.destination,
									l = d.max(b.duration, c.duration),
									this.isInTransition = 1),
									this.options.snap) {
								var o = this._nearestSnap(g, h);
								this.currentPage = o,
									l = this.options.snapSpeed || d.max(d.max(d.min(d.abs(g - o.x), 1e3), d.min(d.abs(h - o.y), 1e3)), 300),
									g = o.x,
									h = o.y,
									this.directionX = 0,
									this.directionY = 0,
									m = this.options.bounceEasing
							}
							return g != this.x || h != this.y ? ((g > 0 || g < this.maxScrollX || h > 0 || h < this.maxScrollY) && (m = i.ease.quadratic),
								void this.scrollTo(g, h, l, m)) : void this._execEvent("scrollEnd")
						}
					}
				},
				_resize: function() {
					var a = this;
					clearTimeout(this.resizeTimeout),
						this.resizeTimeout = setTimeout(function() {
							a.refresh()
						}, this.options.resizePolling)
				},
				resetPosition: function(a) {
					var b = this.x
						, c = this.y;
					return a = a || 0,
						!this.hasHorizontalScroll || this.x > 0 ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX),
						!this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY),
						b == this.x && c == this.y ? !1 : (this.scrollTo(b, c, a, this.options.bounceEasing),
							!0)
				},
				disable: function() {
					this.enabled = !1
				},
				enable: function() {
					this.enabled = !0
				},
				refresh: function() {
					this.wrapper.offsetHeight;
					this.wrapperWidth = this.wrapper.clientWidth,
						this.wrapperHeight = this.wrapper.clientHeight,
						this.scrollerWidth = d.round(this.scroller.offsetWidth * this.scale),
						this.scrollerHeight = d.round(this.scroller.offsetHeight * this.scale),
						this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
						this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
						this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
						this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
					this.hasHorizontalScroll || (this.maxScrollX = 0,
						this.scrollerWidth = this.wrapperWidth),
					this.hasVerticalScroll || (this.maxScrollY = 0,
						this.scrollerHeight = this.wrapperHeight),
						this.endTime = 0,
						this.directionX = 0,
						this.directionY = 0,
						this.wrapperOffset = i.offset(this.wrapper),
					this.options.slider && (this.wrapperOffset = i.offset(this.options.slider)),
						this._execEvent("refresh"),
						this.resetPosition()
				},
				on: function(a, b) {
					this._events[a] || (this._events[a] = []),
						this._events[a].push(b)
				},
				off: function(a, b) {
					if (this._events[a]) {
						var c = this._events[a].indexOf(b);
						c > -1 && this._events[a].splice(c, 1)
					}
				},
				_execEvent: function(a) {
					if (this._events[a]) {
						var b = 0
							, c = this._events[a].length;
						if (c)
							for (; c > b; b++)
								this._events[a][b].apply(this, [].slice.call(arguments, 1))
					}
				},
				scrollBy: function(a, b, c, d) {
					a = this.x + a,
						b = this.y + b,
						c = c || 0,
						this.scrollTo(a, b, c, d)
				},
				scrollTo: function(a, b, c, d) {
					d = d || i.ease.circular,
						this.isInTransition = this.options.useTransition && c > 0,
						!c || this.options.useTransition && d.style ? (this._transitionTimingFunction(d.style),
							this._transitionTime(c),
							this._translate(a, b)) : this._animate(a, b, c, d.fn)
				},
				scrollToElement: function(a, b, c, e, f) {
					if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
						var g = i.offset(a);
						g.left -= this.wrapperOffset.left,
							g.top -= this.wrapperOffset.top,
						c === !0 && (c = d.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
						e === !0 && (e = d.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
							g.left -= c || 0,
							g.top -= e || 0,
							g.left = g.left > 0 ? 0 : g.left < this.maxScrollX ? this.maxScrollX : g.left,
							g.top = g.top > 0 ? 0 : g.top < this.maxScrollY ? this.maxScrollY : g.top,
							b = void 0 === b || null  === b || "auto" === b ? d.max(d.abs(this.x - g.left), d.abs(this.y - g.top)) : b,
							this.scrollTo(g.left, g.top, b, f)
					}
				},
				_transitionTime: function(a) {
					if (a = a || 0,
							this.scrollerStyle[i.style.transitionDuration] = a + "ms",
						!a && i.isBadAndroid && (this.scrollerStyle[i.style.transitionDuration] = "0.001s"),
							this.indicators)
						for (var b = this.indicators.length; b--; )
							this.indicators[b].transitionTime(a)
				},
				_transitionTimingFunction: function(a) {
					if (this.scrollerStyle[i.style.transitionTimingFunction] = a,
							this.indicators)
						for (var b = this.indicators.length; b--; )
							this.indicators[b].transitionTimingFunction(a)
				},
				_translate: function(a, b) {
					if (this.options.useTransform ? this.scrollerStyle[i.style.transform] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ") " + this.translateZ : (a = d.round(a),
							b = d.round(b),
							this.scrollerStyle.left = a + "px",
							this.scrollerStyle.top = b + "px"),
							this.x = a,
							this.y = b,
							this.indicators)
						for (var c = this.indicators.length; c--; )
							this.indicators[c].updatePosition()
				},
				_initEvents: function(b) {
					var c = b ? i.removeEvent : i.addEvent
						, d = this.options.bindToWrapper ? this.wrapper : a;
					c(a, "orientationchange", this),
						c(a, "resize", this),
					this.options.disableMouse || (c(this.wrapper, "mousedown", this),
						c(d, "mousemove", this),
						c(d, "mousecancel", this),
						c(d, "mouseup", this)),
					i.hasPointer && !this.options.disablePointer && (c(this.wrapper, "MSPointerDown", this),
						c(d, "MSPointerMove", this),
						c(d, "MSPointerCancel", this),
						c(d, "MSPointerUp", this)),
					i.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this),
						c(d, "touchmove", this),
						c(d, "touchcancel", this),
						c(d, "touchend", this)),
						c(this.scroller, "transitionend", this),
						c(this.scroller, "webkitTransitionEnd", this),
						c(this.scroller, "oTransitionEnd", this),
						c(this.scroller, "MSTransitionEnd", this)
				},
				getComputedPosition: function() {
					var b, c, d = a.getComputedStyle(this.scroller, null );
					return this.options.useTransform ? (d = d[i.style.transform].split(")")[0].split(", "),
						b = +(d[12] || d[4]),
						c = +(d[13] || d[5])) : (b = +d.left.replace(/[^-\d.]/g, ""),
						c = +d.top.replace(/[^-\d.]/g, "")),
					{
						x: b,
						y: c
					}
				},
				_initIndicators: function() {
					function a(a) {
						for (var b = h.indicators.length; b--; )
							a.call(h.indicators[b])
					}
					var b, c = this.options.interactiveScrollbars, d = "string" != typeof this.options.scrollbars, e = [], h = this;
					this.indicators = [],
					this.options.scrollbars && (this.options.scrollY && (b = {
						el: f("v", c, this.options.scrollbars),
						interactive: c,
						defaultScrollbars: !0,
						customStyle: d,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: !1
					},
						this.wrapper.appendChild(b.el),
						e.push(b)),
					this.options.scrollX && (b = {
						el: f("h", c, this.options.scrollbars),
						interactive: c,
						defaultScrollbars: !0,
						customStyle: d,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: !1
					},
						this.wrapper.appendChild(b.el),
						e.push(b))),
					this.options.indicators && (e = e.concat(this.options.indicators));
					for (var i = e.length; i--; )
						this.indicators.push(new g(this,e[i]));
					this.options.fadeScrollbars && (this.on("scrollEnd", function() {
						a(function() {
							this.fade()
						})
					}),
						this.on("scrollCancel", function() {
							a(function() {
								this.fade()
							})
						}),
						this.on("scrollStart", function() {
							a(function() {
								this.fade(1)
							})
						}),
						this.on("beforeScrollStart", function() {
							a(function() {
								this.fade(1, !0)
							})
						})),
						this.on("refresh", function() {
							a(function() {
								this.refresh()
							})
						}),
						this.on("destroy", function() {
							a(function() {
								this.destroy()
							}),
								delete this.indicators
						})
				},
				_initZoom: function() {
					this.scrollerStyle[i.style.transformOrigin] = "0 0"
				},
				_zoomStart: function(a) {
					var b = d.abs(a.touches[0].pageX - a.touches[1].pageX)
						, c = d.abs(a.touches[0].pageY - a.touches[1].pageY);
					this.touchesDistanceStart = d.sqrt(b * b + c * c),
						this.startScale = this.scale,
						this.originX = d.abs(a.touches[0].pageX + a.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x,
						this.originY = d.abs(a.touches[0].pageY + a.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y,
						this._execEvent("zoomStart")
				},
				_zoom: function(a) {
					if (this.enabled && i.eventType[a.type] === this.initiated) {
						this.options.preventDefault && a.preventDefault();
						var b, c, e, f = d.abs(a.touches[0].pageX - a.touches[1].pageX), g = d.abs(a.touches[0].pageY - a.touches[1].pageY), h = d.sqrt(f * f + g * g), j = 1 / this.touchesDistanceStart * h * this.startScale;
						this.scaled = !0,
							j < this.options.zoomMin ? j = .5 * this.options.zoomMin * d.pow(2, j / this.options.zoomMin) : j > this.options.zoomMax && (j = 2 * this.options.zoomMax * d.pow(.5, this.options.zoomMax / j)),
							b = j / this.startScale,
							c = this.originX - this.originX * b + this.startX,
							e = this.originY - this.originY * b + this.startY,
							this.scale = j,
							this.scrollTo(c, e, 0)
					}
				},
				_zoomEnd: function(a) {
					if (this.enabled && i.eventType[a.type] === this.initiated) {
						this.options.preventDefault && a.preventDefault();
						var b, c, d;
						this.isInTransition = 0,
							this.initiated = 0,
							this.scale > this.options.zoomMax ? this.scale = this.options.zoomMax : this.scale < this.options.zoomMin && (this.scale = this.options.zoomMin),
							this.refresh(),
							d = this.scale / this.startScale,
							b = this.originX - this.originX * d + this.startX,
							c = this.originY - this.originY * d + this.startY,
							b > 0 ? b = 0 : b < this.maxScrollX && (b = this.maxScrollX),
							c > 0 ? c = 0 : c < this.maxScrollY && (c = this.maxScrollY),
						(this.x != b || this.y != c) && this.scrollTo(b, c, this.options.bounceTime),
							this.scaled = !1,
							this._execEvent("zoomEnd")
					}
				},
				zoom: function(a, b, c, d) {
					if (a < this.options.zoomMin ? a = this.options.zoomMin : a > this.options.zoomMax && (a = this.options.zoomMax),
						a != this.scale) {
						var e = a / this.scale;
						b = void 0 === b ? this.wrapperWidth / 2 : b,
							c = void 0 === c ? this.wrapperHeight / 2 : c,
							d = void 0 === d ? 300 : d,
							b = b + this.wrapperOffset.left - this.x,
							c = c + this.wrapperOffset.top - this.y,
							b = b - b * e + this.x,
							c = c - c * e + this.y,
							this.scale = a,
							this.refresh(),
							b > 0 ? b = 0 : b < this.maxScrollX && (b = this.maxScrollX),
							c > 0 ? c = 0 : c < this.maxScrollY && (c = this.maxScrollY),
							this.scrollTo(b, c, d)
					}
				},
				_wheelZoom: function(a) {
					var b, c, e = this;
					if (clearTimeout(this.wheelTimeout),
							this.wheelTimeout = setTimeout(function() {
								e._execEvent("zoomEnd")
							}, 400),
						"deltaX" in a)
						b = -a.deltaY / d.abs(a.deltaY);
					else if ("wheelDeltaX" in a)
						b = a.wheelDeltaY / d.abs(a.wheelDeltaY);
					else if ("wheelDelta" in a)
						b = a.wheelDelta / d.abs(a.wheelDelta);
					else {
						if (!("detail" in a))
							return;
						b = -a.detail / d.abs(a.wheelDelta)
					}
					c = this.scale + b / 5,
						this.zoom(c, a.pageX, a.pageY, 0)
				},
				_initWheel: function() {
					i.addEvent(this.wrapper, "wheel", this),
						i.addEvent(this.wrapper, "mousewheel", this),
						i.addEvent(this.wrapper, "DOMMouseScroll", this),
						this.on("destroy", function() {
							i.removeEvent(this.wrapper, "wheel", this),
								i.removeEvent(this.wrapper, "mousewheel", this),
								i.removeEvent(this.wrapper, "DOMMouseScroll", this)
						})
				},
				_wheel: function(a) {
					if (this.enabled) {
						a.preventDefault(),
							a.stopPropagation();
						var b, c, e, f, g = this;
						if (void 0 === this.wheelTimeout && g._execEvent("scrollStart"),
								clearTimeout(this.wheelTimeout),
								this.wheelTimeout = setTimeout(function() {
									g._execEvent("scrollEnd"),
										g.wheelTimeout = void 0
								}, 400),
							"deltaX" in a)
							b = -a.deltaX,
								c = -a.deltaY;
						else if ("wheelDeltaX" in a)
							b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
								c = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
						else if ("wheelDelta" in a)
							b = c = a.wheelDelta / 120 * this.options.mouseWheelSpeed;
						else {
							if (!("detail" in a))
								return;
							b = c = -a.detail / 3 * this.options.mouseWheelSpeed
						}
						if (b *= this.options.invertWheelDirection,
								c *= this.options.invertWheelDirection,
							this.hasVerticalScroll || (b = c,
								c = 0),
								this.options.snap)
							return e = this.currentPage.pageX,
								f = this.currentPage.pageY,
								b > 0 ? e-- : 0 > b && e++,
								c > 0 ? f-- : 0 > c && f++,
								void this.goToPage(e, f);
						e = this.x + d.round(this.hasHorizontalScroll ? b : 0),
							f = this.y + d.round(this.hasVerticalScroll ? c : 0),
							e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX),
							f > 0 ? f = 0 : f < this.maxScrollY && (f = this.maxScrollY),
							this.scrollTo(e, f, 0)
					}
				},
				_initSnap: function() {
					this.currentPage = {},
					"string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
						this.on("refresh", function() {
							var a, b, c, e, f, g, h = 0, i = 0, j = 0, k = this.options.snapStepX || this.wrapperWidth, l = this.options.snapStepY || this.wrapperHeight;
							if (this.pages = [],
								this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
								if (this.options.snap === !0)
									for (c = d.round(k / 2),
										     e = d.round(l / 2); j > -this.scrollerWidth; ) {
										for (this.pages[h] = [],
											     a = 0,
											     f = 0; f > -this.scrollerHeight; )
											this.pages[h][a] = {
												x: d.max(j, this.maxScrollX),
												y: d.max(f, this.maxScrollY),
												width: k,
												height: l,
												cx: j - c,
												cy: f - e
											},
												f -= l,
												a++;
										j -= k,
											h++
									}
								else
									for (g = this.options.snap,
										     a = g.length,
										     b = -1; a > h; h++)
										(0 === h || g[h].offsetLeft <= g[h - 1].offsetLeft) && (i = 0,
											b++),
										this.pages[i] || (this.pages[i] = []),
											j = d.max(-g[h].offsetLeft, this.maxScrollX),
											f = d.max(-g[h].offsetTop, this.maxScrollY),
											c = j - d.round(g[h].offsetWidth / 2),
											e = f - d.round(g[h].offsetHeight / 2),
											this.pages[i][b] = {
												x: j,
												y: f,
												width: g[h].offsetWidth,
												height: g[h].offsetHeight,
												cx: c,
												cy: e
											},
										j > this.maxScrollX && i++;
								this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
									this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold,
										this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
										this.snapThresholdY = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
							}
						}),
						this.on("flick", function() {
							var a = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.x - this.startX), 1e3), d.min(d.abs(this.y - this.startY), 1e3)), 300);
							this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
						})
				},
				_nearestSnap: function(a, b) {
					if (!this.pages.length)
						return {
							x: 0,
							y: 0,
							pageX: 0,
							pageY: 0
						};
					var c = 0
						, e = this.pages.length
						, f = 0;
					if (d.abs(a - this.absStartX) < this.snapThresholdX && d.abs(b - this.absStartY) < this.snapThresholdY)
						return this.currentPage;
					for (a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX),
						     b > 0 ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY); e > c; c++)
						if (a >= this.pages[c][0].cx) {
							a = this.pages[c][0].x;
							break
						}
					for (e = this.pages[c].length; e > f; f++)
						if (b >= this.pages[0][f].cy) {
							b = this.pages[0][f].y;
							break
						}
					return c == this.currentPage.pageX && (c += this.directionX,
						0 > c ? c = 0 : c >= this.pages.length && (c = this.pages.length - 1),
						a = this.pages[c][0].x),
					f == this.currentPage.pageY && (f += this.directionY,
						0 > f ? f = 0 : f >= this.pages[0].length && (f = this.pages[0].length - 1),
						b = this.pages[0][f].y),
					{
						x: a,
						y: b,
						pageX: c,
						pageY: f
					}
				},
				goToPage: function(a, b, c, e) {
					e = e || this.options.bounceEasing,
						a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0),
						b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);
					var f = this.pages[a][b].x
						, g = this.pages[a][b].y;
					c = void 0 === c ? this.options.snapSpeed || d.max(d.max(d.min(d.abs(f - this.x), 1e3), d.min(d.abs(g - this.y), 1e3)), 300) : c,
						this.currentPage = {
							x: f,
							y: g,
							pageX: a,
							pageY: b
						},
						this.scrollTo(f, g, c, e)
				},
				next: function(a, b) {
					var c = this.currentPage.pageX
						, d = this.currentPage.pageY;
					c++,
					c >= this.pages.length && this.hasVerticalScroll && (c = 0,
						d++),
						this.goToPage(c, d, a, b)
				},
				prev: function(a, b) {
					var c = this.currentPage.pageX
						, d = this.currentPage.pageY;
					c--,
					0 > c && this.hasVerticalScroll && (c = 0,
						d--),
						this.goToPage(c, d, a, b)
				},
				_initKeys: function(b) {
					var c, d = {
						pageUp: 33,
						pageDown: 34,
						end: 35,
						home: 36,
						left: 37,
						up: 38,
						right: 39,
						down: 40
					};
					if ("object" == typeof this.options.keyBindings)
						for (c in this.options.keyBindings)
							"string" == typeof this.options.keyBindings[c] && (this.options.keyBindings[c] = this.options.keyBindings[c].toUpperCase().charCodeAt(0));
					else
						this.options.keyBindings = {};
					for (c in d)
						this.options.keyBindings[c] = this.options.keyBindings[c] || d[c];
					i.addEvent(a, "keydown", this),
						this.on("destroy", function() {
							i.removeEvent(a, "keydown", this)
						})
				},
				_key: function(a) {
					if (this.enabled) {
						var b, c = this.options.snap, e = c ? this.currentPage.pageX : this.x, f = c ? this.currentPage.pageY : this.y, g = i.getTime(), h = this.keyTime || 0, j = .25;
						switch (this.options.useTransition && this.isInTransition && (b = this.getComputedPosition(),
							this._translate(d.round(b.x), d.round(b.y)),
							this.isInTransition = !1),
							this.keyAcceleration = 200 > g - h ? d.min(this.keyAcceleration + j, 50) : 0,
							a.keyCode) {
							case this.options.keyBindings.pageUp:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? e += c ? 1 : this.wrapperWidth : f += c ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.pageDown:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? e -= c ? 1 : this.wrapperWidth : f -= c ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.end:
								e = c ? this.pages.length - 1 : this.maxScrollX,
									f = c ? this.pages[0].length - 1 : this.maxScrollY;
								break;
							case this.options.keyBindings.home:
								e = 0,
									f = 0;
								break;
							case this.options.keyBindings.left:
								e += c ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.up:
								f += c ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.right:
								e -= c ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.down:
								f -= c ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							default:
								return
						}
						if (c)
							return void this.goToPage(e, f);
						e > 0 ? (e = 0,
							this.keyAcceleration = 0) : e < this.maxScrollX && (e = this.maxScrollX,
							this.keyAcceleration = 0),
							f > 0 ? (f = 0,
								this.keyAcceleration = 0) : f < this.maxScrollY && (f = this.maxScrollY,
								this.keyAcceleration = 0),
							this.scrollTo(e, f, 0),
							this.keyTime = g
					}
				},
				_animate: function(a, b, c, d) {
					function e() {
						var m, n, o, p = i.getTime();
						return p >= l ? (f.isAnimating = !1,
							f._translate(a, b),
							void (f.resetPosition(f.options.bounceTime) || f._execEvent("scrollEnd"))) : (p = (p - k) / c,
							o = d(p),
							m = (a - g) * o + g,
							n = (b - j) * o + j,
							f._translate(m, n),
							void (f.isAnimating && h(e)))
					}
					var f = this
						, g = this.x
						, j = this.y
						, k = i.getTime()
						, l = k + c;
					this.isAnimating = !0,
						e()
				},
				handleEvent: function(a) {
					switch (a.type) {
						case "touchstart":
						case "MSPointerDown":
						case "mousedown":
							this._start(a),
							this.options.zoom && a.touches && a.touches.length > 1 && this._zoomStart(a);
							break;
						case "touchmove":
						case "MSPointerMove":
						case "mousemove":
							if (this.options.zoom && a.touches && a.touches[1])
								return void this._zoom(a);
							this._move(a);
							break;
						case "touchend":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "MSPointerCancel":
						case "mousecancel":
							if (this.scaled)
								return void this._zoomEnd(a);
							this._end(a);
							break;
						case "orientationchange":
						case "resize":
							this._resize();
							break;
						case "transitionend":
						case "webkitTransitionEnd":
						case "oTransitionEnd":
						case "MSTransitionEnd":
							this._transitionEnd(a);
							break;
						case "wheel":
						case "DOMMouseScroll":
						case "mousewheel":
							if ("zoom" == this.options.wheelAction)
								return void this._wheelZoom(a);
							this._wheel(a);
							break;
						case "keydown":
							this._key(a)
					}
				}
			},
				g.prototype = {
					handleEvent: function(a) {
						switch (a.type) {
							case "touchstart":
							case "MSPointerDown":
							case "mousedown":
								this._start(a);
								break;
							case "touchmove":
							case "MSPointerMove":
							case "mousemove":
								this._move(a);
								break;
							case "touchend":
							case "MSPointerUp":
							case "mouseup":
							case "touchcancel":
							case "MSPointerCancel":
							case "mousecancel":
								this._end(a)
						}
					},
					destroy: function() {
						this.options.interactive && (i.removeEvent(this.indicator, "touchstart", this),
							i.removeEvent(this.indicator, "MSPointerDown", this),
							i.removeEvent(this.indicator, "mousedown", this),
							i.removeEvent(a, "touchmove", this),
							i.removeEvent(a, "MSPointerMove", this),
							i.removeEvent(a, "mousemove", this),
							i.removeEvent(a, "touchend", this),
							i.removeEvent(a, "MSPointerUp", this),
							i.removeEvent(a, "mouseup", this)),
						this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
					},
					_start: function(b) {
						var c = b.touches ? b.touches[0] : b;
						b.preventDefault(),
							b.stopPropagation(),
							this.transitionTime(),
							this.initiated = !0,
							this.moved = !1,
							this.lastPointX = c.pageX,
							this.lastPointY = c.pageY,
							this.startTime = i.getTime(),
						this.options.disableTouch || i.addEvent(a, "touchmove", this),
						this.options.disablePointer || i.addEvent(a, "MSPointerMove", this),
						this.options.disableMouse || i.addEvent(a, "mousemove", this),
							this.scroller._execEvent("beforeScrollStart")
					},
					_move: function(a) {
						var b, c, d, e, f = a.touches ? a.touches[0] : a;
						i.getTime();
						this.moved || this.scroller._execEvent("scrollStart"),
							this.moved = !0,
							b = f.pageX - this.lastPointX,
							this.lastPointX = f.pageX,
							c = f.pageY - this.lastPointY,
							this.lastPointY = f.pageY,
							d = this.x + b,
							e = this.y + c,
							this._pos(d, e),
							a.preventDefault(),
							a.stopPropagation()
					},
					_end: function(b) {
						if (this.initiated) {
							if (this.initiated = !1,
									b.preventDefault(),
									b.stopPropagation(),
									i.removeEvent(a, "touchmove", this),
									i.removeEvent(a, "MSPointerMove", this),
									i.removeEvent(a, "mousemove", this),
									this.scroller.options.snap) {
								var c = this.scroller._nearestSnap(this.scroller.x, this.scroller.y)
									, e = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.scroller.x - c.x), 1e3), d.min(d.abs(this.scroller.y - c.y), 1e3)), 300);
								(this.scroller.x != c.x || this.scroller.y != c.y) && (this.scroller.directionX = 0,
									this.scroller.directionY = 0,
									this.scroller.currentPage = c,
									this.scroller.scrollTo(c.x, c.y, e, this.scroller.options.bounceEasing))
							}
							this.moved && this.scroller._execEvent("scrollEnd")
						}
					},
					transitionTime: function(a) {
						a = a || 0,
							this.indicatorStyle[i.style.transitionDuration] = a + "ms",
						!a && i.isBadAndroid && (this.indicatorStyle[i.style.transitionDuration] = "0.001s")
					},
					transitionTimingFunction: function(a) {
						this.indicatorStyle[i.style.transitionTimingFunction] = a
					},
					refresh: function() {
						this.transitionTime(),
							this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
							this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (i.addClass(this.wrapper, "iScrollBothScrollbars"),
								i.removeClass(this.wrapper, "iScrollLoneScrollbar"),
							this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (i.removeClass(this.wrapper, "iScrollBothScrollbars"),
								i.addClass(this.wrapper, "iScrollLoneScrollbar"),
							this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
						this.wrapper.offsetHeight;
						this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
							this.options.resize ? (this.indicatorWidth = d.max(d.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
								this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth,
							this.maxPosX = this.wrapperWidth - this.indicatorWidth,
							"clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8,
								this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
								this.maxBoundaryX = this.maxPosX),
							this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
						this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
							this.options.resize ? (this.indicatorHeight = d.max(d.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
								this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight,
							this.maxPosY = this.wrapperHeight - this.indicatorHeight,
							"clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8,
								this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
								this.maxBoundaryY = this.maxPosY),
							this.maxPosY = this.wrapperHeight - this.indicatorHeight,
							this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
							this.updatePosition()
					},
					updatePosition: function() {
						var a = this.options.listenX && d.round(this.sizeRatioX * this.scroller.x) || 0
							, b = this.options.listenY && d.round(this.sizeRatioY * this.scroller.y) || 0;
						this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = d.max(this.indicatorWidth + a, 8),
							this.indicatorStyle.width = this.width + "px"),
							a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = d.max(this.indicatorWidth - (a - this.maxPosX), 8),
							this.indicatorStyle.width = this.width + "px",
							a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
							this.indicatorStyle.width = this.width + "px"),
							b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = d.max(this.indicatorHeight + 3 * b, 8),
								this.indicatorStyle.height = this.height + "px"),
								b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = d.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8),
								this.indicatorStyle.height = this.height + "px",
								b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
								this.indicatorStyle.height = this.height + "px")),
							this.x = a,
							this.y = b,
							this.scroller.options.useTransform ? this.indicatorStyle[i.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px",
								this.indicatorStyle.top = b + "px")
					},
					_pos: function(a, b) {
						0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX),
							0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY),
							a = this.options.listenX ? d.round(a / this.sizeRatioX) : this.scroller.x,
							b = this.options.listenY ? d.round(b / this.sizeRatioY) : this.scroller.y,
							this.scroller.scrollTo(a, b)
					},
					fade: function(a, b) {
						if (!b || this.visible) {
							clearTimeout(this.fadeTimeout),
								this.fadeTimeout = null ;
							var c = a ? 250 : 500
								, d = a ? 0 : 300;
							a = a ? "1" : "0",
								this.wrapperStyle[i.style.transitionDuration] = c + "ms",
								this.fadeTimeout = setTimeout(function(a) {
									this.wrapperStyle.opacity = a,
										this.visible = +a
								}
									.bind(this, a), d)
						}
					}
				},
				e.utils = i,
				"undefined" != typeof b && b.exports ? b.exports = e : a.IScroll = e
		}(window, document, Math)
	}),
	define("core/util/topic", function(require, a, b) {
		function c() {
			f.remove(),
			"#topic" == location.hash && history.go(-1)
		}
		function d() {
			var a = "#topic"
				, b = location.hash;
			(!b || a.indexOf(b) < 0) && c()
		}
		function e() {
			var a = f.find("#J-result")
				, b = f.find("#J-default");
			j.search({
				parent: f.find("#J-poisearch"),
				resultWrap: a,
				clearKeyCallback: function() {
					f.find(".j_searchButton").html("取消"),
						a.find('[data-node-type="userList"]').empty(),
						a.hide(),
						f.find(".j_clearKey").hide()
				},
				submitCallback: function(c) {
					c = c.replace("<", "&#60;").replace(">", "&#62;"),
						b.hide(),
						a.find('[data-node-type="userList"]').empty(),
						a.show(),
						a.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
						$.getJSON("/searchs/searchTopicByKeyword?q=" + c).done(function(b) {
							if (b.ok)
								a.find(".loading").hide(),
									k.render(a.find('[data-node-type="userList"]')[0], b.data || []);
							else {
								a.find(".loading").hide();
								var d = [{
									image: "http://u1.sinaimg.cn/upload/2013/12/10/topic_page_2x.png",
									title: c,
									description: "新话题",
									icon: "http://u1.sinaimg.cn/upload/2014/05/23/topic_icon_default.png",
									mini_icon: "http://u1.sinaimg.cn/upload/2013/10/28/timeline_card_small_topic_default.png",
									content: "#" + c + "#",
									mod_type: "mod/topicsmall"
								}];
								k.render(a.find('[data-node-type="userList"]')[0], d || [])
							}
						})
				},
				onfocusCallback: function() {
					b.hide(),
						f.find(".txt-pos-pop").css("margin-right", "40px"),
						f.find(".j_searchButton").show()
				},
				inputCallback: function() {
					f.find(".j_searchInput").val() ? f.find(".j_searchButton").html("搜索") : f.find(".j_searchButton").html("取消")
				}
			}),
				b.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
				$.getJSON("/searchs/searchTopic").done(function(a) {
					a.ok ? (b.find(".loading").hide(),
						b.find('[data-node-type="userList"]').html('<h1 style="padding:5px 0px 5px 10px;background-color:#f2f2f2;font-size:12px;color:#aaa;">热门</h1>'),
						k.render(b.find('[data-node-type="userList"]')[0], a.data || [])) : b.find('[data-node-type="userList"]').html('<div class="ErrorInfo">获取热门话题列表失败</div>')
				}),
				l.on("topic", function(a) {
					c()
				}),
				f.find(".J-cancel").click(function() {
					c()
				})
		}
		var f, g, h = '<div id="J-topicpop" class="wrapper-popup"><div id="J-actualct"><header class="sub-header"><a class="J-cancel fl BtnLev4" href="javascript:;" >关闭</a><span>话题</span><a class="J-update fr BtnLev4" href="javascript:;" style="visibility:hidden;" >更新</a></header><form id="J-poisearch" class="search-pos-pop"><a class="j_searchButton fr hid" href="javascript:;">取消</a><div class="txt-pos-pop"><span class="j_clearKey fr clear hid" node-type="clear"></span><span class="fl type iconf iconf_navbar_search" node-type="type-list"></span><div class="input-box"><input class=" j_searchInput search" type="text" node-type="search" placeholder="# 话题、电影、书名、歌曲名"></div></div></form><div id="J-result" style="display:none;"><div class="list-pos-pop" data-node-type="userList"></div></div><div id="J-default"><div class="list-pos-pop" data-node-type="userList"></div></div></div></div>', i = (require("tpl/mod/widget-list"),
			require("core/util/list"),
			require("core/util/insertText"),
			require("core/util/getVip"),
			require("core/util/screenHeight")), j = (require("core/util/scrollTo"),
			require("core/util/uiView")), k = (require("core/util/moveEnd"),
			require("brick")), l = k.notice;
		b.exports = function(a, b) {
			location.hash = "topic",
				window.onhashchange = d,
				poiView = a,
				g = b,
				$("#J-topicpop").length ? (f = $("#J-topicpop"),
					f.show()) : ($("body").append(h),
					f = $("#J-topicpop"),
					e()),
				f.find("#J-actualct").css({
					"min-height": i().viewHeight
				})
		}
	}),
	define("mod/guest", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("brick");
			a = $(a),
				a.on("click", ".module-login-ban", function() {
					d.notice.trigger("OpenWeiboApp")
				})
		}
	}),
	define("mod/guideTips", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = navigator.userAgent.toLowerCase()
				, e = d.indexOf("iphone") > 0
				, f = (d.indexOf("ipad") > 0,
					$(a).find("p span"))
				, g = /mqqbrowser|crios|android|ucbrowser|mqbrowser|chrome/.test(d)
				, h = d.indexOf("safari") > 0 && /constructor/i.test(window.HTMLElement)
				, i = {
					"6H": 0,
					"6P": 0,
					"7H": 0,
					"7P": 0
				}
				, j = function(a, b) {
					try {
						window.localStorage && (window.localStorage[a] = b)
					} catch (c) {}
				}
				, k = function(a) {
					try {
						return window.localStorage && window.localStorage[a] ? window.localStorage[a] : null
					} catch (b) {
						return null
					}
				}
				, l = function() {
					if (!k("H5_SAVE_DESK") && e && h && !g) {
						var b, c, j, l = window.innerWidth || document.documentElement.clientWidth, m = window.innerHeight || document.documentElement.clientHeight, n = $(a).width(), o = d.match(/os ([0-9])_\d[_\d]*/)[1];
						b = l > m ? "H" : "P",
							j = parseInt((l - n) / 2) || 0,
							c = o + b,
							o && o > 6 ? f.attr("class", "ios6up") : f.attr("class", "ios6down"),
							$(a).css("left", j - (i[c] || 0) + "px").show()
					}
				}
				;
			l(),
				window.onorientationchange = l,
				$(a).find(".close").on("click", function() {
					$(a).remove(),
						j("H5_SAVE_DESK", "1")
				})
		}
	}),
	define("mod/insterest/edit", function(require, a, b) {
		b.exports = function(a, b, c) {
			var a = $(a)
				, d = function(a) {
					a.remove()
				}
				, e = function(b) {
					var c = $('<li class="item close" data-nodetype="close"><span class="txt">' + b + '</span><span class="plus"><i class="iconf iconf_navbar_close"></i></span></li>');
					a.find('[data-node="editLabel"] [data-node="module-insterest"]').append(c)
				}
				, f = function() {
					a.find('[data-node="editLabel"],[data-node="relateLabel"]').on("click", function(a) {
						var b, c = $(a.target);
						c = "li" == a.target.nodeName.toLowerCase() ? $(a.target) : $(a.target).parents("li"),
							b = c.attr("data-nodetype"),
						"close" == b && ($(a.target).hasClass("plus") || $(a.target).parents(".plus").length > 0) && d(c),
						"text" == b && e(c.find(".txt").html())
					}),
						$('[data-node="btn_add"]').on("click", function() {
							var a = $('[data-node="label_add"]').val();
							a && e(a)
						})
				}
				;
			f()
		}
	}),
	define("mod/insterest/list", function(require, a, b) {
		b.exports = function(a, b, c) {
			var a = $(a)
				, d = function(a) {
					if (!a.hasClass("star")) {
						var b = a.find(".plus")
							, c = parseInt(b.html()) || 0;
						a.removeClass("host").addClass("star"),
							b.html(c + 1)
					}
				}
				, e = function() {
					window.location.href = "http://m.weibo.cn/new?stage=editInsterest"
				}
				, f = function(a) {
					a.remove()
				}
				, g = function() {
					a.on("click", function(a) {
						if (b.scheme)
							window.location.href = b.scheme;
						else {
							var c, g;
							c = "li" == a.target.nodeName.toLowerCase() ? $(a.target) : $(a.target).parents("li"),
								g = c.attr("data-nodetype"),
							"number" == g && d(c),
							"edit" == g && e(),
							"close" == g && f(c)
						}
					})
				}
				;
			g()
		}
	}),
	define("mod/message/detail", function(require, a, b) {
		var c = require("brick")
			, d = (c.notice,
			require("core/tplFunc").canAccessLink)
			, e = require("ux/moreMenu");
		require("ux/topbarPop");
		b.exports = function(a, b) {
			function f(a, b) {
				var c = require("ux/popMenu");
				c.init({
					icons: a,
					items: b,
					clickPopMenu: function(a) {
						e.clickItem(a)
					}
				})
			}
			a = $(a);
			var g = b;
			a.on("click", '[data-node="forward"]', function() {
				return d ? void (location.href = "/repost?id=" + g.mid) : (c.notice.trigger("AccessDenied"),
					!1)
			}),
				a.on("click", '[data-node="comment"]', function() {
					return d ? void ("single" == $config.stage || 0 == g.comments_count ? location.href = "/comment?id=" + g.mid : location.href = "/" + g.user.id + "/" + g.mid) : (c.notice.trigger("AccessDenied"),
						!1)
				}),
				a.on("click", '[data-node="like"]', function() {
					if (!d)
						return c.notice.trigger("AccessDenied"),
							!1;
					var a = $(this)
						, e = a.find("i");
					if (1 != a.data("loading")) {
						a.data("loading", 1);
						var f = g.attitudes_status
							, h = "/attitudesDeal/add"
							, i = "id=" + g.id;
						f ? h = "/attitudesDeal/delete" : i += "&attitude=heart",
							$.ajax({
								url: h,
								dataType: "json",
								type: "POST",
								data: i,
								success: function(c) {
									if (a.data("loading", 0),
										1 == c.ok) {
										var d = a.find("em")
											, h = d.text();
										f ? (isNaN(h) || 1 == b.single || d.text(1 == h ? "赞" : h - 1),
											g.attitudes_status = 0,
											e.removeClass("icon-likedsmall pulse"),
											e.addClass("icon-likesmall")) : (1 != b.single && (isNaN(h) ? d.text(1) : d.text(1 * h + 1)),
											g.attitudes_status = 1,
											e.removeClass("icon-likesmall"),
											e.addClass("icon-likedsmall animated pulse"))
									}
								}
							})
					}
				}),
				a.on("click", '[data-node="replay"]', function() {
					var a = "/comment?id=" + g.card.page_id;
					return d ? (3 == b.type ? a += "&content=回复" + g.user.screen_name + "的赞:" : (b.id && (a += "&reply=" + b.id),
						a += "&content=回复@" + g.user.screen_name + ":"),
						void (location.href = a)) : (c.notice.trigger("AccessDenied"),
						!1)
				}),
				a.on("click", ".head-bar, .operate-box", function() {
					if (!d)
						return c.notice.trigger("AccessDenied"),
							!1;
					var b = e.getMenuList({
						wb: g,
						box: a
					});
					f(null , b)
				}),
				a.on("click", ".item-list, .default-content", function(b) {
					if ("A" != b.target.nodeName && !$(b.target).parents("a").length) {
						var c = e.getMenuList({
							wb: g,
							box: a
						});
						f(null , c)
					}
				})
		}
	}),
	define("ux/moreMenu", function(require, a, b) {
		!function() {
			var a = require("ux/toast")
				, c = window.$config.stageId
				, d = require("core/io/trans")().json
				, e = {}
				, f = function(a, b) {
					var d = [];
					return e = a,
						b ? "single" == $config.stage ? (d = [{
							type: e.wb.favorited ? "delFav" : "addFav",
							text: e.wb.favorited ? "取消收藏" : "收藏"
						}],
							e.wb.user.id == $render_data.common.uid ? d.push({
								type: "deleteWB",
								text: "删除"
							}) : d.push({
								type: "report",
								reporttype: "1",
								text: "举报"
							})) : c && 0 == c.indexOf("100505") && c != "100505" + window.$render_data.common.uid && d.push({
							type: "addBlackList",
							text: "加入黑名单"
						}, {
							type: "report",
							reporttype: "3",
							text: "举报"
						}) : (d = [{
							type: e.wb.favorited ? "delFav" : "addFav",
							text: e.wb.favorited ? "取消收藏" : "收藏"
						}],
							e.wb.user.id == $render_data.common.uid ? d.push({
								type: 2 == e.wb.type ? "deleteCmt" : "deleteWB",
								text: "删除"
							}) : ("home" == $config.stage && d.push({
								type: "shield",
								text: "屏蔽"
							}, {
								type: "report",
								reporttype: "1",
								text: "举报"
							}),
							("page" == $config.stage || "atme" == $config.stage) && d.push({
								type: "report",
								reporttype: "1",
								text: "举报"
							}),
							"cmts" == $config.stage && d.push({
								type: "report",
								reporttype: "2",
								text: "举报"
							}))),
						d
				}
				, g = function(b) {
					var d, f = $(b.target);
					if ("a" != b.target.nodeName.toLowerCase() && f.parents("a").length > 0 && (f = f.parents("a")),
							d = f.attr("node-type"))
						switch (d) {
							case "addFav":
								setTimeout(function() {
									h({
										url: "/mblogDeal/addFavMblog",
										data: "id=" + e.wb.id
									}, function(b) {
										b.ok && 1 == b.ok ? (e.wb.favorited = !0,
											a.success(b.msg, 1e3)) : a.error(b.msg, 1e3)
									})
								}, 250);
								break;
							case "delFav":
								setTimeout(function() {
									h({
										url: "/mblogDeal/delFavMblog",
										data: "id=" + e.wb.id
									}, function(b) {
										b.ok && 1 == b.ok ? (e.wb.favorited = !1,
											a.success(b.msg, 1e3)) : a.error(b.msg, 1e3)
									})
								}, 250);
								break;
							case "shieldWB":
								setTimeout(function() {
									confirm("确定隐藏这条微博吗？") && h({
										url: "/members/membersDeal/wbFilterCreate",
										data: "id=" + e.wb.id
									}, function() {
										e.box && $(e.box).remove()
									})
								}, 250);
								break;
							case "shield":
								setTimeout(function() {
									location.href = "/setting?tab=block&blockType=2&id=" + e.wb.id
								}, 250);
								break;
							case "report":
								setTimeout(function() {
									"1" == f.attr("reporttype") && (location.href = "/report?rid=" + e.wb.id),
									"3" == f.attr("reporttype") && (location.href = "/report/user?rid=" + c.replace(/^100505/, "")),
									"2" == f.attr("reporttype") && (location.href = "/report/comment?rid=" + e.wb.id)
								}, 250);
								break;
							case "deleteWB":
								setTimeout(function() {
									var a = "确定要删除这条微博？";
									e.wb.notation && e.wb.notation.article_delete_text && (a = e.wb.notation.article_delete_text),
									confirm(a) && h({
										url: "/mblogDeal/delMyMblog",
										data: "id=" + e.wb.id
									}, function() {
										e.box && $(e.box).remove()
									})
								}, 250);
								break;
							case "deleteCmt":
								setTimeout(function() {
									confirm("确定要删除这条评论？") && h({
										url: "/commentDeal/cmtDel",
										data: "cmtId=" + e.wb.id
									}, function() {
										e.box && $(e.box).remove()
									})
								}, 250);
								break;
							case "topWB":
								break;
							case "cancelTopWB":
								break;
							case "at":
								setTimeout(function() {
									location.href = "/mblog"
								}, 250);
								break;
							case "addBlackList":
								setTimeout(function() {
									confirm("你们将自动解除关注关系，他不能再关注你或给你发评论、私信、@通知。且你们的私信将被删除。确认要加入黑名单吗？") && h({
										url: "/attentionDeal/addBlockList",
										data: "uid=" + c.replace(/^100505/, "")
									}, function(b) {
										b.ok && 1 == b.ok ? a.success(b.msg, 1e3) : a.error(b.msg, 1e3)
									})
								}, 250)
						}
				}
				, h = function(a, b) {
					d({
						url: a.url,
						type: "POST",
						dataType: "json",
						data: a.data,
						success: function(a) {
							b && b(a)
						},
						error: function() {
							alert("出错啦，请稍后再试！")
						}
					})
				}
				;
			b.exports = {
				getMenuList: f,
				clickItem: g
			}
		}()
	}),
	define("ux/topbarPop", function(require, a, b) {
		function c(a) {
			function b() {
				if (!o.id)
					return void alert("topbarPop 需要唯一标示 ID");
				var a = o.target;
				if (!a)
					return void console.error("没有 $target !");
				if (j = o.box ? o.box : $("body"),
						k = $("#" + o.id),
					k.size() && (n.isInit = !0),
						!n.isInit) {
					if ($("#" + o.id).size())
						return void alert(o.id + " ID 已经被占用啦！");
					f.append(d(o)),
						j.append(f),
						k = $("#" + o.id),
					0 === k.size() && console.log("topbarPop 模板未加载"),
						l = k.find("#J-list");
					for (var b = 0, g = o.item.length; g > b && !o.item[b].active; b++)
						b == g - 1 ? l.find(".item").eq(0).addClass("isActive") : "";
					a.attr("data-TBPtrigger", 1),
						n.isInit = !0,
						c()
				}
				i(a),
					k.toggleClass("hid"),
					$(document).bind(e, p.clickToClose)
			}
			function c() {
				l.on("click", ".item", function(a) {
					var b = $(a.target);
					b.hasClass("item") || (b = b.parent(".item")),
					b.hasClass("isActive") || (l.find(".item").removeClass("isActive"),
						b.addClass("isActive"))
				}),
				o.callback && k.on("click", o.callback)
			}
			function g() {
				$(document).bind(e, p.clickToClose)
			}
			function h() {
				if (m) {
					try {
						m.destory()
					} catch (a) {
						console.log(a)
					}
					m = null
				}
				g()
			}
			function i(a) {
				var b, c = a.offset(), d = k.outerWidth();
				b = "BODY" != j[0].tagName ? a.outerHeight() + 7 : c.top + a.outerHeight() + 7;
				var e = c.left + a.outerWidth() / 2 - d / 2
					, f = window.innerWidth - d - 5
					, g = e > 5 ? e > f ? f : e : 5;
				k.css({
					top: b,
					left: g
				}),
				0 > e && c.left < 30 && k.addClass("isLeftArrow")
			}
			var j, k, l, m, n = {}, o = a || {}, p = {
				clickToClose: function(a) {
					var b = $(a.target);
					if (b.length && b[0] !== o.target[0] && !b.parents("[data-TBPtrigger=1]").size()) {
						var c = "J-topbarPop" === b.attr("id")
							, d = b.parents("#J-list").size() > 0;
						if (!c && !d)
							return k.addClass("hid"),
							j.hasClass("module-topbar") && j.find(".icon-font").removeClass("icon-font-arrow-up").addClass("icon-font-arrow-down"),
								void $(document).unbind(a, p.clickToClose)
					}
				}
			};
			return b(),
			{
				destory: h
			}
		}
		var d = (require("conf/inter/topbarPop"),
			require("tpl/ux/topbarPop"))
			, e = "ontouchstart" in window ? "touchstart" : "click"
			, f = $(document.createDocumentFragment());
		b.exports = c
	}),
	define("conf/inter/topbarPop", function(require, a, b) {
		var c = require("core/io/trans")();
		c.set("getGroupList", {
			url: "attGroups/getAttGroupListByUid"
		}),
			c.set("createGroup", {
				url: "attGroupsDeal/createAndAddGroup",
				type: "post"
			}),
			c.set("addUserToGroup", {
				url: "attGroupsDeal/addUserToGroup",
				type: "post"
			}),
			c.set("removeUserFromGroup", {
				url: "attGroupsDeal/moveUserFromGroup",
				type: "post"
			}),
			c.set("unfollow", {
				url: "attentionDeal/delAttention",
				type: "post"
			}),
			b.exports = c
	}),
	define("tpl/ux/topbarPop", function(require, a, b) {
		require("core/tplFunc");
		b.exports = function(a) {
			var b = '<article id="' + a.id + '" class="topbar-pop hid"><section class="list" id="J-list"><div id="J-scroll">';
			if (a.item) {
				b += " ";
				var c = a.item;
				if (c)
					for (var d, e = -1, f = c.length - 1; f > e; )
						d = c[e += 1],
							b += " ",
							d.split ? b += '<p class="item-split"><span>' + d.txt + "</span></p>" : (b += '<a href="',
								b += d.url ? d.url : "javascript:;",
								b += '" class="item',
							d.active && (b += " isActive"),
								b += '"',
							d.type && (b += ' data-type="' + d.type + '"'),
								b += ' data-act-type="hover">' + (d.txt || "") + " ",
							d.num && (b += '<span class="num">(' + d.num + ")</span>"),
								b += "</a>"),
							b += " ";
				b += " "
			}
			return b += "</div></section>",
			a.btn && (b += '<footer class="action layout-box"><a class="btn box-col" href="',
				b += a.btn.url ? a.btn.url : "javascript:;",
				b += '" title="' + (a.btn.txt || "") + '"',
			a.btn.type && (b += ' data-type="' + a.btn.type + '"'),
				b += ">" + a.btn.txt + "</a></footer>"),
				b += "</article>"
		}
	}),
	define("ux/popMenu", function(require, a, b) {
		function c(a) {
			e(a || {}),
				f(a)
		}
		function d() {
			"#popMenu" == location.hash && history.go(-1),
				j.css({
					bottom: -j.height() + "px"
				}),
				i.css({
					"background-color": "transparent"
				}),
				setTimeout(function() {
					i.remove()
				}, 200),
				k("body").off("touchmove", h)
		}
		function e(a) {
			window.location.hash = "popMenu",
				window.onhashchange = g,
				i = k(l(a)).appendTo(k("body")).show(),
				j = i.find(".content"),
				j.css({
					bottom: -j.height() + "px"
				}).addClass("show").css({
					bottom: 0
				}),
			m.os.ios && m.os.v < 5 || m.os.android && m.os.v < 4 || (i.css({
				position: "fixed"
			}),
				j.css({
					position: "fixed"
				})),
				i.css({
					"background-color": "rgba(0,0,0,.5)"
				})
		}
		function f(a) {
			k("body").on("touchmove", h),
				i.on("click", function(b) {
					a && a.clickPopMenu && a.clickPopMenu.call(this, b),
						d()
				})
		}
		function g() {
			var a = "#popMenu"
				, b = location.hash;
			(!b || a.indexOf(b) < 0) && d()
		}
		function h(a) {
			a.preventDefault()
		}
		var i, j, k = require("jquery"), l = require("tpl/ux/popMenu"), m = require("core/device/ua");
		b.exports = {
			init: c
		}
	}),
	define("tpl/ux/popMenu", function(require, a, b) {
		var c = require("core/tplFunc");
		b.exports = function(a) {
			var b = '<div class="ux-popmenu"><div class="content">';
			if (null  !== a.icons && (b += '<header class="line-bottom"><!--<a href="javascript:;" data-type="1"><span class="faved"></span><em>收藏</em></a>--><a href="' + c.href("/index/router?cookie=0_all") + '"><i class="iconf iconf_tabbar_home" node-type="home"></i><span>首页</span></a><a href="' + c.href("/index/router?cookie=1") + '"><i class="iconf iconf_tabbar_msgcenter" node-type="msg"></i><span>消息</span></a><a href="' + c.href("/index/router?cookie=2") + '"><i class="iconf iconf_tabbar_discover" node-type="discover"></i><span>发现</span></a><a href="' + c.href("/index/router?cookie=3") + '"><i class="iconf iconf_tabbar_profile" node-type="profile"></i><span>我</span></a></header>'),
					b += '<section class="card-combine">',
					a.items) {
				b += " ";
				var d = a.items;
				if (d)
					for (var e, f = -1, g = d.length - 1; g > f; )
						e = d[f += 1],
							b += '<a href="' + c.href(e.url) + '" node-type="' + e.type + '"',
						f + 1 != a.items.length && (b += ' class="line-bottom"'),
							b += ' reporttype="',
						e.reporttype && (b += e.reporttype),
							b += '"><span>' + e.text + "</span></a>";
				b += " "
			}
			return b += '<a class="close line-top" href="javascript:;"><span>取消</span></a></section></div></div>'
		}
	}),
	define("mod/message/item", function(require, a, b) {
		b.exports = function(a, b) {}
	}),
	define("mod/page/appmanager", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("ux/toast")
				, f = $(a).find('[data-node="install_title"]')
				, g = $(a).find('[data-node="uninstall_title"]')
				, h = b.install_list
				, i = b.uninstall_list
				, j = function(a, c) {
					var j = $(a).attr("data-name")
						, k = $(a).attr("data-appid")
						, l = {
						name: j,
						appid: k
					};
					d.get("customize", {
						data: "object_id=" + b.object_id + "&appid=" + k + "&option=" + c,
						success: function(b) {
							if (1 != b.ok)
								e.alarm(b.msg, window.toastTime);
							else {
								if ("remove" == c) {
									var d = "uninstall_app_list"
										, m = "install";
									h.splice($.inArray(l, h), 1),
										i.splice(0, 0, l)
								}
								if ("add" == c) {
									var d = "install_app_list"
										, m = "uninstall";
									i.splice($.inArray(l, i), 1),
										h.splice(0, 0, l)
								}
								$(a).parent().parent().remove(),
									h.length || i.length ? (h.length ? f.html("已添加的应用") : f.html("您还未添加任何应用"),
										i.length ? g.html("未添加的应用") : g.html("目前没有未添加的应用")) : (f.html("目前没有可添加的应用"),
										g.html(""));
								var n = '<div class="card card4 line-around"><a href="javascript:;" class="layout-box" data-act-type="hover"><div class="box-col txt-cut"><div class="mct-a">' + j + '</div></div><p class="btn plus plus-s" data-name=' + j + " data-appid=" + k + 'data-act-type="hover"><span class="pseudo-' + m + '" data-name=' + j + " data-appid=" + k + "></span></p></a></div>";
								$("#" + d).prepend(n)
							}
						},
						error: function() {
							alert("接口404或者Ajax其他返回异常")
						}
					})
				}
				;
			$("#install_app_list").on("click", "p", function(a) {
				a.preventDefault();
				var b = a.target;
				j(b, "remove")
			}),
				$("#uninstall_app_list").on("click", "p", function(a) {
					a.preventDefault();
					var b = a.target;
					j(b, "add")
				})
		}
	}),
	define("mod/page/block", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = (require("core/io/trans")(),
					require("ux/toast"))
				, f = require("ux/alertPop")
				, g = (new f,
					$(a).find('[data-node="search_input"]'))
				, h = require("mod/page/linkman")
				, i = $(a).find('[data-node="J_action_link"]')
				, j = {}
				, k = function(a) {
					d.get("unBlock", {
						type: "post",
						data: a,
						success: function(a) {
							1 == a.ok ? (e.success("解除成功！", window.toastTime),
								setTimeout(function() {
									location.reload()
								}, 1e3)) : e.alarm(a.msg, window.toastTime)
						},
						error: function() {
							e.alarm("接口404或者Ajax其他返回异常", window.toastTime)
						}
					})
				}
				, l = function() {
					g.on("click", function() {
						window.mod_btn_name = "屏蔽",
							window.mod_object_id = b.object_id,
							h($("#J-contactpop"), {
								scopeType: "all"
							})
					}),
						i.on("click", function(a) {
							a.preventDefault();
							var c = a.target;
							"user" == b.blocktype && (j = {
								object_id: b.object_id,
								type: b.blocktype,
								uid: $(c).attr("data-uid")
							}),
							"feed" == b.blocktype && (j = {
								object_id: b.object_id,
								type: b.blocktype,
								mid: $(c).attr("data-mid")
							}),
								k(j)
						})
				}
				, m = function() {
					l()
				}
				;
			m()
		}
	}),
	define("mod/page/linkman", function(require, a, b) {
		function c() {
			var a = "#wbContact"
				, b = location.hash;
			(!b || a.indexOf(b) < 0) && d()
		}
		function d() {
			f.remove(),
			"#wbContact" == location.hash && history.go(-1)
		}
		function e(a) {
			var b = f.find("#J-result")
				, c = f.find("#J-default");
			i.search({
				parent: f.find("#J-poisearch"),
				resultWrap: b,
				clearKeyCallback: function() {
					f.find(".j_searchButton").html("取消"),
						b.find('[data-node-type="userList"]').empty(),
						b.hide(),
						f.find(".j_clearKey").hide()
				},
				submitCallback: function(d) {
					c.hide(),
						b.find('[data-node-type="userList"]').empty(),
						b.show(),
						b.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
						$.getJSON("/claim/pageadmin/searchUser?count=10&product_h5=pagelist&q=" + d + "&scope=" + a.scopeType).done(function(a) {
							a.ok && a.cards[0].card_group.length > 0 ? (b.find(".loading").hide(),
								j.render(b.find('[data-node-type="userList"]')[0], a.cards || [])) : b.find('[data-node-type="userList"]').html('<div class="ErrorInfo relativonError">搜索关注人列表为空</div>')
						})
				},
				onfocusCallback: function() {
					c.hide(),
						f.find(".j_searchButton").show()
				},
				inputCallback: function() {
					f.find(".j_searchInput").val() ? f.find(".j_searchButton").html("搜索") : f.find(".j_searchButton").html("取消")
				}
			}),
				c.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
				$.getJSON("/claim/pageadmin/searchUser?&q=&page=1&count=10&product_h5=pagelist&scope=" + a.scopeType).done(function(a) {
					a.ok ? (c.find(".loading").hide(),
						j.render(c.find('[data-node-type="userList"]')[0], a.cards || [])) : c.find('[data-node-type="userList"]').html('<div class="ErrorInfo relativonError">最近联系人列表为空</div>')
				}),
				k.on("userSmall", function(a) {
					d()
				}),
				f.find(".J-cancel").click(function() {
					d()
				})
		}
		var f, g = '<div id="J-contactpop" class="wrapper-popup"><div id="J-actualct"><header class="sub-header"><a class="J-cancel fl BtnLev4" href="javascript:;" >关闭</a><span>搜索用户</span><a class="J-update fr BtnLev4" style="visibility:hidden;" href="javascript:;" >更新</a></header><form id="J-poisearch" class="search-pos-pop"><a class="j_searchButton fr hid" href="javascript:;">取消</a><div class="txt-pos-pop"><span class="j_clearKey fr clear hid" node-type="clear"></span><span class="fl type iconf iconf_navbar_search" node-type="type-list"></span><div class="input-box"><input class=" j_searchInput search" type="text" node-type="search" placeholder="搜索用户"></div></div></form><div id="J-result" style="display:none;"><div class="list-pos-pop" data-node-type="userList"></div></div><div id="J-default"><div class="list-pos-pop" data-node-type="userList"></div></div></div></div>', h = require("core/util/screenHeight"), i = require("core/util/uiView"), j = require("brick"), k = j.notice;
		b.exports = function(a, b) {
			console.log(b),
				location.hash = "wbContact",
				window.onhashchange = c,
				poiView = a,
				$("#J-contactpop").length ? (f = $("#J-contactpop"),
					f.show(),
					f.find(".j_searchInput").val("")) : ($("body").append(g),
					f = $("#J-contactpop"),
					e(b)),
				f.find("#J-actualct").css({
					"min-height": h().viewHeight
				})
		}
	}),
	define("mod/page/create", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("core/store")
				, f = require("ux/toast")
				, g = $(a).find('[data-node="J_input_node"]')
				, h = $(a).find('[data-node="J_info_label"]')
				, i = $(a).find('[data-node="J_error_label"]')
				, j = $(a).find('[data-node="J_card11_node"]')
				, k = $(a).find('[data-node="J_cardList_node"]')
				, l = $(a).find('[data-node="J_create_btn"]')
				, m = function(a) {
					for (var b = 0, c = 0; c < a.length; c++) {
						var d = a.charCodeAt(c);
						d >= 1 && 126 >= d || d >= 65376 && 65439 >= d ? b++ : b += 2
					}
					return b
				}
				, n = function(a, b) {
					var e = "社会" == b.parent.name ? 1 : 0
						, g = b.catagroyPrefix + "-" + b.child.name + "|" + b.child.id + "-" + b.grand.name + "|" + b.grand.id
						, l = $('[data-node="J_child_type"]').eq(1)
						, m = null ;
					if (l.size()) {
						var n = $('[data-node="J_child_type"]').eq(1).val();
						if (-1 == m)
							return void f.alarm("请选择版式", window.toastTime);
						m = n
					} else
						c.params.page_type && (m = c.params.page_type);
					d.get("create", {
						data: {
							display_name: encodeURIComponent(a),
							category: g,
							isSociety: e,
							page_type: m
						},
						success: function(b) {
							if (1 != b.ok) {
								var c = b.data;
								if (c && c.length > 0) {
									h.addClass("hid"),
										i.html("名称已被占用，请修改名称，或直接查看："),
										i.removeClass("hid");
									var d = "";
									for (var e in c)
										d += '<div class="card card4 line-around"><a href=' + c[e].url + ' class="layout-box" data-act-type="hover"><div class="box-col txt-cut"><span class="mct-a">' + a + '</span></div><span class="plus plus-s"><i class="iconf iconf_compose_trend txt-m"></i></span></a></div>';
									k.html(d),
										j.removeClass("hid")
								} else
									f.alarm(b.msg, window.toastTime)
							} else {
								f.success("创建成功", window.toastTime);
								var c = b.data;
								setTimeout(function() {
									location.href = c.url
								}, window.toastTime)
							}
						},
						error: function() {
							alert("接口404或者Ajax其他返回异常")
						}
					})
				}
				, o = function() {
					l.on("click", function(a) {
						a.preventDefault();
						var b = e.get("mod_catagroy");
						if (b.child.id)
							if (g.val()) {
								var c = String(g.val());
								g.val(c),
									Number(m(c)) > 7 && Number(m(c)) < 65 ? n(c, b) : f.alarm("名称要在4-32个字之间", window.toastTime)
							} else
								f.alarm("请输入名称", window.toastTime);
						else
							f.alarm("请选择分类", window.toastTime)
					})
				}
				, p = function() {
					o()
				}
				;
			p()
		}
	}),
	define("mod/page/editsummary", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("ux/toast")
				, f = require("core/util/wordsCount")
				, g = require("core/util/moveEnd")
				, h = $(a).find('[data-node="J_textarea"]')
				, i = $(a).find('[data-node="J_finish_btn"]')
				, j = $(a).find('[data-node="J_limit_tip"]')
				, k = $(a).find('[data-node="J_remain_number"]')
				, l = require("ux/alertPop")
				, m = new l
				, n = {}
				, o = 140
				, p = ""
				, q = function() {
					var a = parseInt(o - f(h.val()));
					console.log(a),
						0 > a ? (k.attr("class", "num"),
							k.html(a),
							j.removeClass("hid"),
							i.attr("disabled", !0),
							i.addClass("btn-disable")) : 11 > a ? (k.attr("class", "warnnum"),
							k.html(a),
							j.removeClass("hid"),
							i.attr("disabled", !1),
							i.removeClass("btn-disable")) : 140 == a ? (i.attr("disabled", !0),
							i.addClass("btn-disable")) : (j.addClass("hid"),
							i.attr("disabled", !1),
							i.removeClass("btn-disable"))
				}
				, r = function() {
					h.focus(function() {
						g(h),
							clearInterval(p),
							p = setInterval(function() {
								q(h)
							}, 300)
					}),
						i.on("click", function(a) {
							function c(a) {
								d.get("setinfo", {
									data: "object_id=" + b.object_id + "&data=" + JSON.stringify(n) + "&isforce=" + (a || 0),
									success: function(a) {
										1 != a.ok ? "10002" == a.code ? m.init({
											wrapperId: "J-saveSetBtnPop",
											title: "提示",
											info: a.msg,
											cancelBtn: {
												id: "J-save-cancel",
												txt: "取消",
												callback: function() {
													m.close(),
														location.reload()
												}
											},
											confirmBtn: {
												id: "J-save-submit",
												txt: "确定",
												callback: function() {
													m.close(),
														c(1)
												}
											}
										}) : "10003" == a.code ? m.init({
											wrapperId: "J-saveSetBtnPop",
											title: "提示",
											info: a.msg,
											confirmBtn: {
												id: "J-save-submit",
												txt: "确定",
												callback: function() {
													m.close(),
														location.reload()
												}
											}
										}) : e.alarm(a.msg, window.toastTime) : (e.success(a.msg, window.toastTime),
											setTimeout(function() {
												location.href = "/claim/page/getinfo?object_id=" + b.object_id;
											}, window.toastTime))
									},
									error: function() {
										alert("接口404或者Ajax其他返回异常")
									}
								})
							}
							a.preventDefault();
							var f = h.val();
							h.html(f),
								n.summary = encodeURIComponent(f),
								c(0)
						})
				}
				, s = function() {
					r(),
						q(h)
				}
				;
			s()
		}
	}),
	define("mod/page/interestlabel", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d(a) {
				var b = "";
				for (a = "" + a,
					     splitstring = a.split(" "),
					     i = 0; i < splitstring.length; i++)
					b += splitstring[i];
				return b
			}
			var e = require("conf/inter/pageClaim")
				, f = require("ux/toast")
				, g = $(a).find('[data-node="J_input"]')
				, h = $(a).find('[data-node="J_add"]')
				, j = ($(a).find('[data-node="J_error_label"]'),
					$(a).find('[data-node="J_card_list"]'))
				, k = $(a).find('[data-node="J_finish_btn"]')
				, l = $(a).find('[data-node="lable_title"]')
				, m = ""
				, n = b.list || []
				, o = n ? n.length : 0
				, p = function(a) {
					for (var b = 0, c = 0; c < a.length; c++) {
						var d = a.charCodeAt(c);
						d >= 1 && 126 >= d || d >= 65376 && 65439 >= d ? b++ : b += 2
					}
					return b
				}
				;
			h.on("click", function(a) {
				a.preventDefault(),
					m = g.val();
				var b = d(m);
				if (g.val(b),
					10 > o)
					if (b)
						if (-1 == $.inArray(b, n))
							if (Number(p(b)) < 15) {
								var c = '<div class="card card4 line-around"><a href="javascript:;" class="layout-box" data-act-type="hover"><div class="box-col txt-cut"><span class="mct-a">' + b + '</span></div><span class="btn plus plus-s" data-value=' + b + ' data-act-type="hover"><span class="pseudo-close" data-value=' + b + "></span></span></a></div>";
								j.prepend(c),
									n.splice(0, 0, b),
									g.val(""),
									l.html("已添加的标签"),
									o++
							} else
								f.alarm("请不要超过7个字！", window.toastTime);
						else
							f.alarm("该标签已存在！", window.toastTime);
					else
						f.alarm("请输入标签", window.toastTime);
				else
					f.alarm("最多可添加10个标签", window.toastTime)
			}),
				$("#J_card_list").on("click", "span", function(a) {
					a.preventDefault();
					var b = a.target
						, c = $(b).attr("data-value");
					$(b).hasClass("pseudo-close") ? $(b).parent().parent().parent().remove() : $(b).parent().parent().remove(),
						n.splice($.inArray(c, n), 1),
						o--,
					1 > o && l.html("您还未添加任何标签")
				}),
				k.on("click", function(a) {
					a.preventDefault();
					var c = {};
					c.topic_tag = n,
						e.get("setinfo", {
							data: "object_id=" + b.object_id + "&data=" + JSON.stringify(c),
							success: function(a) {
								1 != a.ok ? f.alarm(a.msg, window.toastTime) : (f.success(a.msg, window.toastTime),
									setTimeout(function() {
										location.href = "/claim/page/getinfo?object_id=" + b.object_id
									}, window.toastTime))
							},
							error: function() {
								alert("接口404或者Ajax其他返回异常")
							}
						})
				})
		}
	}),
	define("mod/page/managersetting", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("ux/toast")
				, f = require("ux/alertPop")
				, g = new f
				, h = $(a).find('[data-node="search_input"]')
				, i = require("mod/page/linkman")
				, j = function() {
					var a = b.tips || {};
					g.init({
						wrapperId: "J_confirmExitPop",
						title: a.title || "确认",
						info: a.desc || "确认退出认领吗？",
						cancelBtn: {
							id: "J_confirmExitCancel",
							txt: "以后再说"
						},
						confirmBtn: {
							id: "J_confirmExitCancelConfirm",
							txt: a.button || "确定",
							callback: function() {
								k(),
									g.close()
							}
						}
					})
				}
				, k = function(a) {
					var c = b.object_id;
					d.get("unauthorize", {
						data: "object_id=" + c + "&type=admin",
						success: function(a) {
							if (1 != a.ok)
								e.alarm(a.msg, window.toastTime);
							else {
								c.split(":");
								location.href = a.location
							}
						},
						error: function() {
							e.alarm("接口404或者Ajax其他返回异常", window.toastTime)
						}
					})
				}
				, l = function(a) {
					d.get("unauthorize", {
						data: "object_id=" + b.object_id + "&uid=" + a,
						success: function(a) {
							1 != a.ok ? e.alarm(a.msg, window.toastTime) : location.href = a.location
						},
						error: function() {
							e.alarm("接口404或者Ajax其他返回异常", window.toastTime)
						}
					})
				}
				, m = function() {
					h.on("click", function() {
						window.mod_btn_name = "添加",
							window.mod_object_id = b.object_id,
							i($("#J-contactpop"), {
								scopeType: "bilateral"
							})
					}),
						$("#J_managerslist").on("click", "a", function(a) {
							var b = a.target
								, c = $(b).html().trim();
							switch (c) {
								case "退出认领":
									j();
									break;
								case "取消资格":
								case "退出管理":
									var d = $(b).attr("data-uid");
									l(d)
							}
						})
				}
				, n = function() {
					m(),
						$(".mod-pagelist card-combine").addClass("hid")
				}
				;
			n()
		}
	}),
	define("mod/page/modulemanager", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("ux/toast")
				, f = $(a).find('[data-node="card_list"]')
				, g = function(a, c) {
					var f = $(a).attr("data-appid");
					d.get("customize", {
						data: "object_id=" + b.object_id + "&appid=" + f + "&option=" + c,
						success: function(b) {
							1 != b.ok ? e.alarm(b.msg, window.toastTime) : $(a).toggleClass("isOn")
						},
						error: function() {
							alert("接口404或者Ajax其他返回异常", window.toastTime)
						}
					})
				}
				;
			f.on("click", "span", function(a) {
				var b = a.target;
				$(b).hasClass("btn") && a.preventDefault(),
				$(b).parent().hasClass("layout-box") && ($(b).hasClass("isOn") ? g(b, "hide") : g(b, "show"))
			})
		}
	}),
	define("mod/page/saveSetBtn", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("core/store")
				, f = require("ux/toast")
				, g = require("ux/alertPop")
				, h = new g
				, i = require("brick").notice
				, j = $(a).find('[data-node="J_save_btn"]')
				, k = function(a, b) {
					var c = e.get("mod_item");
					if (c && c.length > 0)
						for (var d in c)
							if (c[d].title == a)
								return c[d][b]
				}
				, l = function() {
					function a(b) {
						d.get("setinfo", {
							data: "object_id=" + window.$render_data.common.params.object_id + "&data=" + JSON.stringify(c) + "&isforce=" + (b || 0),
							success: function(b) {
								1 != b.ok && ("10002" == b.code ? h.init({
									wrapperId: "J-saveSetBtnPop",
									title: "提示",
									info: b.msg,
									cancelBtn: {
										id: "J-save-cancel",
										txt: "取消",
										callback: function() {
											h.close(),
												location.reload()
										}
									},
									confirmBtn: {
										id: "J-save-submit",
										txt: "确定",
										callback: function() {
											h.close(),
												a(1)
										}
									}
								}) : "10003" == b.code ? h.init({
									wrapperId: "J-saveSetBtnPop",
									title: "提示",
									info: b.msg,
									confirmBtn: {
										id: "J-save-submit",
										txt: "确定",
										callback: function() {
											h.close(),
												location.reload()
										}
									}
								}) : f.alarm(b.msg, window.toastTime))
							},
							error: function() {
								alert("接口404或者Ajax其他返回异常")
							}
						})
					}
					var b = e.get("mod_avatar")
						, c = {};
					c.image = {
						url: b
					},
						a()
				}
				, m = function() {
					j.on("click", function(a) {
						function g(a) {
							d.get("setinfo", {
								data: "object_id=" + b.object_id + "&data=" + JSON.stringify(h) + "&isforce" + (a || 0),
								success: function(a) {
									1 != a.ok ? "10002" == a.code ? confirm(a.msg) ? g(1) : location.reload() : "10003" == a.code ? (alert(a.msg),
										location.reload()) : f.alarm(a.msg, window.toastTime) : f.success(a.msg, window.toastTime)
								},
								error: function() {
									alert("接口404或者Ajax其他返回异常", window.toastTime)
								}
							})
						}
						a.preventDefault();
						var h = {}
							, i = e.get("mod_category")
							, j = i.child.name + "|" + i.child.id + "-" + i.grand.name + "|" + i.grand.id;
						if (h.category = j,
								b.onlyCategory) {
							var l = $('[data-node="J_child_type"]').eq(0)
								, m = $('[data-node="J_grand_type"]').eq(0);
							if (l.is(":visible") && -1 == l.val())
								return void f.alarm("请选择分类", window.toastTime);
							if (m.is(":visible") && -1 == m.val())
								return void f.alarm("请选择二级分类", window.toastTime);
							var n = ($('[data-node="J_child_type"]').eq(1),
								$('[data-node="J_child_type"]').eq(1).val());
							if (-1 == n)
								return void f.alarm("请选择版式", window.toastTime);
							var o = c.params.type || "userapply";
							location.href = "/claim/page/general?type=" + o + "&object_id=" + b.object_id + "&uid=" + c.uid + "&category=" + h.category + "&page_type=" + n + "&st=" + b.st
						} else {
							var p = e.get("mod_area")
								, q = p.province + "-" + p.city;
							h.topic_tag = k("标签", "desc"),
								h.location = q,
								g(0)
						}
					})
				}
				, n = function() {
					m(),
						i.on("HEADPIC_LOAD_SUCCESS", l)
				}
				;
			n()
		}
	}),
	define("mod/page/useroperation", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("ux/toast")
				, f = $(a).find('[data-node="add_btn"]')
				, g = function(a) {
					d.get("authorize", {
						data: "object_id=" + window.mod_object_id + "&uid=" + a,
						success: function(a) {
							1 != a.ok ? e.alarm(a.msg, window.toastTime) : location.href = "/claim/pageadmin?object_id=" + window.mod_object_id
						},
						error: function() {
							e.alarm("接口404或者Ajax其他返回异常", window.toastTime)
						}
					})
				}
				, h = function(a) {
					d.get("block", {
						data: "object_id=" + window.mod_object_id + "&uid=" + a + "&type=user",
						success: function(a) {
							1 != a.ok ? e.alarm(a.msg, window.toastTime) : location.href = "/claim/pageshield/blockPage?object_id=" + window.mod_object_id + "&type=user"
						},
						error: function() {
							e.alarm("接口404或者Ajax其他返回异常", window.toastTime)
						}
					})
				}
				, i = function() {
					f.on("click", function(a) {
						a.preventDefault();
						var b = a.target
							, c = $(b).html().trim()
							, d = $(b).attr("data-uid");
						switch (c) {
							case "添加":
								g(d);
								break;
							case "屏蔽":
								h(d)
						}
					})
				}
				, j = function() {
					i()
				}
				;
			j()
		}
	}),
	define("mod/page/wbmanager", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d = require("conf/inter/pageClaim")
				, e = require("ux/toast")
				, f = $(a).find('[data-node="card_list"]')
				, g = $(a).find('[data-node="card_list"] a')
				, h = function(a) {
					var c = $(a).attr("data-value");
					c ? d.get("feedConfig", {
						data: "object_id=" + b.object_id + "&sort=" + c + "&appid=" + b.appid,
						success: function(b) {
							1 != b.ok ? e.alarm(b.msg, window.toastTime) : (g.removeClass("isChecked"),
							"a" == a.tagName.toLowerCase() && $(a).addClass("isChecked"),
							"div" == a.tagName.toLowerCase() && $(a).parent().addClass("isChecked"),
							"span" == a.tagName.toLowerCase() && $(a).parent().parent().addClass("isChecked"))
						},
						error: function() {
							alert("接口404或者Ajax其他返回异常")
						}
					}) : e.alarm("Order值为空", window.toastTime)
				}
				;
			f.on("click", "a", function(a) {
				a.preventDefault();
				var b = a.target;
				h(b)
			})
		}
	}),
	define("mod/pagelist", function(require, a, b) {
		var c = require("core/io/trans")()
			, d = c.json
			, e = $render_data.common
			, f = !e.isLogin && 2 == e.seeLevel && e.showPopLogin
			, g = require("brick");
		b.exports = function(a, b, c) {
			function e(a, c) {
				var e = b.url;
				if (!l) {
					if (l = 1,
						f && 1 == w)
						return g.notice.trigger("AccessDenied"),
							void m.find('[data-node="more"]').remove();
					c && t ? "next" == c ? u && (e += "&next_cursor=" + u) : "prev" == c && j && (e += "&previous_cursor=" + j + "&next_cursor=" + t) : (k = k ? k : b.next_cursor,
					k && (e += "&next_cursor=" + k)),
						a ? "next" == c ? v = Math.abs(w - a) : "prev" == c && (v = a) : v = 1,
						w = a ? a : w + 1,
						e += s.length > 0 && t ? "&page=" + v : "&page=" + w,
						d({
							url: e,
							dataType: "json",
							log: !0,
							success: function(a) {
								l = 0;
								var c, d = {}, e = m.find('[data-node="cardList"]').first();
								if (1 == e.children().length && e.children().first().hasClass("card11") && (e = e.find('[data-node="cardList"]')),
									"[object Array]" === Object.prototype.toString.call(a))
									c = a;
								else {
									if (!a.ok) {
										var f = m.find('[data-node="more"]');
										return $(document).off("scroll", i),
											void f.remove()
									}
									c = a.cards
								}
								if (!c.length || c[0] && "mod/empty" == c[0].mod_type)
									return $(document).off("scroll", i),
										void m.find('[data-node="more"]').remove();
								if (c[0] && "mod/pagelist" == c[0].mod_type && (d = c[0],
										c = c[0].card_group),
										g.render(e[0], c),
										g.notice.trigger("LOAD_IMAGE"),
										g.notice.trigger("DOM_FILTER", a),
									s.length > 0 && Math.ceil(b.maxPage / x) > 1)
									w % x == 0 ? (s.show(),
										r.hide()) : (r.show(),
										s.hide());
								else if (w == b.maxPage) {
									var f = m.find('[data-node="more"]');
									$(document).off("scroll", i),
										f.remove()
								}
								s.length > 0 && x > 1 ? (d.next_cursor && (k = d.next_cursor,
								w % x == 0 && (u = d.next_cursor)),
								d.previous_cursor && w % x == 1 && (j = d.previous_cursor)) : (d.next_cursor && (k = u = d.next_cursor),
								d.previous_cursor && (j = d.previous_cursor)),
								b.maxPage === w && g.notice.trigger("PAGELIST_DONE")
							}
						})
				}
			}
			function h(a) {
				var c, d, f = $(this), g = parseInt(q.attr("data-curpage"));
				if (!f.hasClass("isDisabled")) {
					switch (f.attr("data-node")) {
						case "pageSelect":
							c = p.val(),
								d = c > g ? "next" : "prev";
							break;
						case "nextPage":
							c = g + 1,
								d = "next";
							break;
						case "prevPage":
							c = g - 1,
								d = "prev"
					}
					q.attr("data-curpage", c).html("第" + c + "页"),
						p.val(c),
						m.find('[data-node="cardList"]').html(""),
						1 >= c ? o.addClass("isDisabled") : o.removeClass("isDisabled"),
						c >= Math.ceil(b.maxPage / x) ? n.addClass("isDisabled") : n.removeClass("isDisabled"),
						r.show(),
						s.hide(),
						e((c - 1) * x + 1, d)
				}
			}
			function i() {
				r.is(":visible") && $(window).scrollTop() + window.innerHeight - r.offset().top > -200 && e()
			}
			var j, k, l, m = $(a), n = m.find('[data-node="nextPage"]'), o = m.find('[data-node="prevPage"]'), p = m.find('[data-node="pageSelect"]'), q = m.find('[data-node="curPage"]'), r = m.find('[data-node="more"]'), s = m.find('[data-node="turnPage"]'), t = b.previous_cursor, u = b.next_cursor, v = 1, w = 1, x = s.length > 0 ? 5 : 1;
			return b.maxPage > 1 && ($(document).on("scroll", i),
				i(),
			s.length > 0 && x > 1 && (p.on("change", h),
				n.on("click", h),
				o.on("click", h))),
			{
				destroy: function() {
					$(document).off("scroll", i)
				}
			}
		}
	}),
	define("mod/poi", function(require, a, b) {
		var c = require("brick").notice;
		b.exports = function(a, b, d) {
			var a = $(a);
			a.on("click", function() {
				c.trigger("poi", b)
			})
		}
	}),
	define("mod/publisher", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d() {
				L ? location.href = c.params.callback : history.go(-1)
			}
			function e(a) {
				var b = parseInt(J - B(a.val()));
				(a.val() || 1 == I) && G.trigger("topbar:right:disable", 0),
				1 != I && b == J && (y.html(""),
					G.trigger("topbar:right:disable", 1)),
				b > 10 && J > b && y.html(""),
				b >= 0 && 10 >= b && (y.removeClass("FCerror"),
					y.html(b)),
				0 > b && (y.addClass("FCerror"),
					y.html(b))
			}
			function f() {
				clearInterval(o),
					$(".module-topbar").css("position", "absolute"),
				a.find(".J-faceMain").length && (a.find(".J-faceMain").hide(),
					a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon")),
					clearInterval(n),
					n = setInterval(function() {
						e(w)
					}, 300)
			}
			function g() {
				clearInterval(o),
					$(".module-topbar").css("position", "fixed"),
					window.scrollTo(0, 1),
					clearInterval(n)
			}
			function h(c) {
				var d = {
					content: w.val(),
					visible: q,
					lat: r,
					"long": s,
					poiid: t,
					location: v,
					citycode: u
				}
					, e = {};
				switch (c) {
					case 0:
						if (p = "addAMblog",
								m = "微博发送",
								a.find(".J-preview img").length) {
							K = [];
							for (var f = a.find(".J-preview img").length, g = 0; f > g; g++)
								a.find(".J-preview img").eq(g).attr("picid") && K.push(a.find(".J-preview img").eq(g).attr("picid"));
							$.extend(e, {
								picId: K.join()
							}),
							$.trim(w.val()) || $.extend(e, {
								content: "分享图片"
							})
						}
						b.params && (delete b.params.content,
							$.extend(e, b.params));
						break;
					case 1:
						p = "rtMblog",
							m = "微博转发",
							$.extend(e, {
								id: b.mblogList.id
							}),
						w.val() || $.extend(e, {
							content: "转发微博"
						}),
						x && x[0].checked && $.extend(e, {
							rtcomment: b.mblogList.user.id
						});
						break;
					case 2:
						p = "addCmt",
							m = "微博评论",
							$.extend(e, {
								id: b.mblogList.id
							}),
						x && x[0].checked && $.extend(e, {
							rt: 1
						});
						break;
					case 3:
						p = "sendMsg",
							m = "私信发送",
							$.extend(e, {
								uid: b.uid
							});
						break;
					case 4:
						p = "replyComment",
							m = "回复评论",
							$.extend(e, {
								id: b.mblogList.id,
								cid: b.cid
							}),
						x && x[0].checked && $.extend(e, {
							rt: 1
						})
				}
				return $.extend(d, e)
			}
			function i(b) {
				var c;
				c = b ? $.extend(h(I), {
					settop: b
				}) : h(I);
				var e = a.find(".J-preview img").length;
				e > K.length ? N.init({
					wrapperId: "J-send" + (new Date).getTime(),
					info: "有图片上传失败，是否继续发送？",
					cancelBtn: {
						id: "J-send-cancel",
						txt: "取消",
						callback: function() {
							return !1
						}
					},
					confirmBtn: {
						id: "J-send-continue",
						txt: "发送",
						callback: function() {
							F.loading("正在提交...", 1e4),
								z.get(p, {
									data: c,
									success: function(a) {
										if (1 == a.ok) {
											F.success("发送成功", 2e3);
											try {
												window.localStorage && window.localStorage.setItem("H5_MBLOG_SAVE_CONTENT", "")
											} catch (b) {}
											d.call()
										} else
											228 == a.ok ? (F.success("发送成功", 1e3),
												setTimeout(function() {
													N.init({
														wrapperId: "SetLoginName" + (new Date).getTime(),
														info: "设置微博登录名，以后登录更方便。",
														cancelBtn: {
															id: "SetLoginName-cancle",
															txt: "以后设置",
															callback: d
														},
														confirmBtn: {
															id: "SetLoginName-confirm",
															txt: "马上设置",
															callback: function() {
																window.location.href = "https://passport.sina.cn/bindname/phone?entry=mweibo"
															}
														}
													})
												}, 1e3)) : F.error(a.msg)
									},
									error: function() {
										alert(m + "失败！")
									}
								})
						}
					}
				}) : (F.loading("正在提交...", 1e4),
					z.get(p, {
						data: c,
						success: function(a) {
							if (1 == a.ok) {
								F.success("发送成功", 2e3);
								try {
									window.localStorage && window.localStorage.setItem("H5_MBLOG_SAVE_CONTENT", "")
								} catch (b) {}
								d.call()
							} else
								228 == a.ok ? (F.success("发送成功", 1e3),
									setTimeout(function() {
										N.init({
											wrapperId: "SetLoginName" + (new Date).getTime(),
											info: "设置微博登录名，以后登录更方便。",
											cancelBtn: {
												id: "SetLoginName-cancle",
												txt: "以后设置",
												callback: d
											},
											confirmBtn: {
												id: "SetLoginName-confirm",
												txt: "马上设置",
												callback: function() {
													window.location.href = "https://passport.sina.cn/bindname/phone?entry=mweibo"
												}
											}
										})
									}, 1e3)) : F.error(a.msg)
						},
						error: function() {
							alert(m + "失败！")
						}
					}))
			}
			function j(b) {
				var c = a.find(".J-faceMain");
				c.length ? c.is(":visible") ? (a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon"),
					w.focus(),
					c.hide()) : (a.find(".action-publisher .emotion").removeClass("iconf_compose_emoticon").addClass("iconf_compose_keyboard"),
					c.show(),
					window.scrollTo(0, 15)) : (a.find(".action-publisher").after(D.faceTemp()),
					a.find(".action-publisher .emotion").removeClass("iconf_compose_emoticon").addClass("iconf_compose_keyboard"),
					window.scrollTo(0, 15),
					D.eventInit(a.find(".J-faceMain"), w, e))
			}
			function k(a) {
				for (var b = 0; b < a.length; b++) {
					var c = a.get(b).className;
					a.get(b).className = c.replace(/uploadList_[0-9]/, "uploadList_" + b),
						a.eq(b).find(".pic-reload,.pic-dele").attr("order", b)
				}
			}
			function l(a) {
				var b = a.find(".J-wbtype").html();
				"公开" == b ? (a.find(".iconf").removeClass("iconf_compose_public").addClass("iconf_friendcircle"),
					q = 6,
					a.find(".J-wbtype").html("好友圈").css("color", "#f00")) : "好友圈" == b ? (a.find(".iconf").removeClass("iconf_friendcircle").addClass("iconf_compose_private"),
					q = 1,
					a.find(".J-wbtype").html("仅自己可见").css("color", "#888")) : (a.find(".iconf").removeClass("iconf_compose_private").addClass("iconf_compose_public"),
					q = "",
					a.find(".J-wbtype").html("公开").css("color", "#598abf"))
			}
			var m, n, o, p, q, r, s, t, u, v, a = $(a), w = a.find(".txt-publisher"), x = ($(".J-submit"),
				a.find(".pos-info-publisher"),
				a.find("#settop-publisher")), y = a.find(".J-limit"), z = (a.find(".tips1"),
				require("conf/inter/publisher")), A = require("core/device/ua"), B = require("core/util/wordsCount"), C = (require("core/util/moveEnd"),
				require("core/util/fileUpload")), D = require("core/util/weiboFace"), E = require("core/util/linkMan"), F = (require("core/device/geo"),
				require("ux/toast")), G = require("brick").notice, H = (require("core/device/touch"),
				require("core/lib/iscroll"),
				require("core/util/insertText")), I = (require("core/device/customEve"),
				b.pubType), J = b.limit || 140, K = [], L = (document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
			c.params && c.params.callback);
			L && a.parent().find(".module-topbar").find(".iconf_navbar_back").attr("href", c.params.callback),
				setTimeout(function() {
					if (0 == I && b.params && b.params.pids)
						for (var d = b.params.pids.split(","), f = 0; f < d.length; f++) {
							html = '<div class="uploadList uploadList_' + f + '"><img width="' + Q + '" height="' + Q + '"><div order="' + f + '" class="pic-reload iconf loading" style="width:' + Q + "px;height:" + (Q - 18) + 'px;"><p class="hid">重新上传</p></div><span order="' + f + '" class="pic-dele iconf iconf_navbar_close hid" style="left:' + (Q - 22) + 'px;"></span></div>',
								a.find(".add-picture").before(html),
								G.trigger("pic-modification");
							var g = $(".J-preview .uploadList_" + f);
							g.find("img").attr({
								src: "http://ww3.sinaimg.cn/thumb180/" + d[f],
								picid: d[f]
							}),
								g.find(".pic-reload").addClass("hid"),
								g.find(".pic-dele").removeClass("hid"),
								g.find(".pic-dele").on("click", function() {
									G.trigger("del-pic", parseInt(this.getAttribute("order")) + 1)
								})
						}
					if (0 == I)
						if (c.params && c.params.content)
							w.val(c.params.content);
						else
							try {
								window.localStorage && w.val(window.localStorage.getItem("H5_MBLOG_SAVE_CONTENT"))
							} catch (h) {}
					1 == I && c.params && c.params.content && w.val(c.params.content),
						e(w)
				}, 0),
				w.on("focus", f),
				G.on("setfocus", function() {
					o = setInterval(function() {
						e(w)
					}, 300),
						w.on("focus", f)
				}),
				G.on("offfocus", function() {
					w.off("focus", f)
				}),
				w.on("blur", g),
				G.on("setblur", function() {
					w.on("blur", g)
				}),
				G.on("offblur", function() {
					w.off("blur", g)
				});
			var M = require("ux/alertPop")
				, N = new M;
			G.on("topbar:back", function() {
				setTimeout(function() {
					0 == I && w.val() ? N.init({
						wrapperId: "J-save" + (new Date).getTime(),
						info: "你是否想保存该微博？",
						cancelBtn: {
							id: "J-pub-nosave",
							txt: "不保存",
							callback: function() {
								w.val("");
								try {
									window.localStorage && window.localStorage.setItem("H5_MBLOG_SAVE_CONTENT", "")
								} catch (a) {}
								d.callback()
							}
						},
						confirmBtn: {
							id: "J-pub-save",
							txt: "保存",
							callback: function() {
								try {
									window.localStorage && (window.localStorage.setItem("H5_MBLOG_SAVE_CONTENT", w.val()),
										d.call())
								} catch (a) {}
							}
						}
					}) : d()
				}, A.os.android ? 500 : 0)
			}),
				G.on("topbar:send", function() {
					return parseInt(y.html()) < 0 ? void F.alarm("不能超过140字") : void i()
				}),
				a.find(".icon_pos").on("click", function() {
					var a = require("core/util/weiboLocation");
					a(this)
				}),
				G.on("poi", function(b) {
					r = b.lat,
						s = b.lon,
						t = b.poiid,
						v = b.title,
						u = b.city,
						a.find(".pos-info-publisher").html(b.title)
				}),
				G.on("poi-delete", function() {
					r = "",
						s = "",
						t = "",
						v = "",
						u = "",
						a.find(".pos-info-publisher").html("插入位置")
				});
			var O = require("core/util/topic");
			a.find(".iconf_compose_trend").on("click", function() {
				O(this, w)
			}),
				G.on("topic", function(a) {
					H(w[0], a.content),
						e(w)
				}),
				a.find(".action-publisher .emotion").on("click", function() {
					j()
				}),
				a.find(".iconf_compose_picture").on("click", function() {
					navigator.userAgent.match(/OS 8_0 like Mac OS X/i) && !window.navigator.standalone && alert("当前系统不支持发图，请升级系统。")
				});
			var P = a.find(".J-preview").width()
				, Q = parseInt((P - 40) / 3);
			a.find(".J-preview").css("max-height", 3 * Q + 30 + "px"),
				a.find(".J-preview .add-picture").css("font-size", Q + "px"),
				a.find(".J-preview input").css({
					width: Q + "px",
					height: Q + "px"
				}),
				a.find(".action-publisher .iconf_compose_picture").on("click", function() {
					a.find(".J-faceMain").length && (a.find(".J-faceMain").hide(),
						a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon")),
						window.scrollTo(0, document.documentElement.clientHeight),
					9 == $(".J-preview img").length && F.alarm("一次最多上传9张图片！")
				}),
				a.find(".action-publisher .picupload, .J-preview input").on("change", function(b) {
					a.find(".J-faceMain").length && (a.find(".J-faceMain").hide(),
						a.find(".action-publisher .emotion").removeClass("iconf_compose_keyboard").addClass("iconf_compose_emoticon"));
					var c = $(".J-preview img").length || 0;
					C(this, c, a.find(".add-picture")),
						setTimeout(function() {
							window.scrollTo(0, document.documentElement.clientHeight)
						}, 0)
				}),
				G.on("pic-modification", function() {
					0 == $(".J-preview img").length && (a.find(".J-preview").addClass("hid"),
						a.find(".action-publisher .picupload").removeClass("hid"),
					w.val() || G.trigger("topbar:right:disable", 1)),
					$(".J-preview img").length > 0 && G.trigger("topbar:right:disable", 0),
					$(".J-preview img").length > 0 && $(".J-preview img").length < 9 && (a.find(".action-publisher .picupload").removeClass("hid"),
						a.find(".J-preview").removeClass("hid"),
						a.find(".add-picture").addClass("able-add"),
						a.find(".add-picture input").removeAttr("disabled")),
					9 == $(".J-preview img").length && (a.find(".action-publisher .picupload").addClass("hid"),
						a.find(".add-picture").removeClass("able-add"),
						a.find(".add-picture input").attr("disabled", "true"))
				}),
				G.on("del-pic", function(a) {
					a -= 1,
						$(".J-preview .uploadList_" + a).remove(),
						k($(".J-preview .uploadList")),
						G.trigger("pic-modification")
				}),
				a.find(".iconf_compose_mention").on("click", function() {
					E(1)
				}),
				G.on("userSmall", function(a) {
					H(w[0], "@" + a.screen_name + " "),
						e(w)
				}),
				a.find(".icon_wbtype").on("click", function() {
					l($(this))
				})
		}
	}),
	define("core/util/weiboLocation", function(require, a, b) {
		function c() {
			wrapDom.remove(),
			"#wbPos" == location.hash && history.go(-1),
				m.trigger("toolbarfix")
		}
		function d() {
			var a = "#wbPos"
				, b = location.hash;
			(!b || a.indexOf(b) < 0) && c()
		}
		function e() {
			g = wrapDom.find("#J-result"),
				f = wrapDom.find("#J-default"),
				k.search({
					parent: wrapDom.find("#J-poisearch"),
					resultWrap: g,
					clearKeyCallback: function() {
						wrapDom.find(".j_searchButton").html("取消"),
							g.find('[data-node-type="userList"]').empty(),
							g.hide(),
							wrapDom.find(".j_clearKey").hide()
					},
					submitCallback: function(a) {
						f.hide(),
							g.find('[data-node-type="userList"]').empty(),
							g.show(),
							g.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
							$.getJSON("interestnew/poi/getNearbyPois?q=" + a + "&format=cards").done(function(a) {
								a.ok ? (g.find(".loading").hide(),
									l.render(g.find('[data-node-type="userList"]')[0], a.cards || [])) : g.find('[data-node-type="userList"]').html('<div class="ErrorInfo">搜索附近位置失败</div>')
							})
					},
					onfocusCallback: function() {
						f.hide(),
							wrapDom.find(".txt-pos-pop").css("margin-right", "40px"),
							wrapDom.find(".j_searchButton").show()
					},
					inputCallback: function() {
						wrapDom.find(".j_searchInput").val() ? wrapDom.find(".j_searchButton").html("搜索") : wrapDom.find(".j_searchButton").html("取消")
					}
				}),
				wrapDom.find(".J-cancel").click(function() {
					n && m.trigger("poi", n),
						c()
				}),
				wrapDom.find(".J-delete").on("click", function() {
					m.trigger("poi-delete"),
						c()
				})
		}
		var f, g, g, h = '<div id="J-pospop" class="wrapper-popup"><div class="wrapper-pos-pop"><header class="sub-header"><a class="J-cancel fl BtnLev4" href="javascript:;" >关闭</a><span>我在这里</span><a class="J-delete fr BtnLev4" href="javascript:;" >删除位置</a></header><form id="J-poisearch" class="search-pos-pop"><a class="j_searchButton fr hid" href="javascript:;">取消</a><div class="txt-pos-pop"><span class="j_clearKey fr clear hid" node-type="clear"></span><span class="fl type iconf iconf_navbar_search" node-type="type-list"></span><div class="input-box"><input class=" j_searchInput search" type="text" node-type="search" placeholder="搜索附近位置…"></div></div></form><div id="J-result" style="display:none;"><div class="list-pos-pop" data-node-type="userList"></div></div><div id="J-default"><div class="list-pos-pop" data-node-type="userList"></div></div></div></div>', i = (require("tpl/mod/position-list"),
			require("core/util/list"),
			require("core/util/screenHeight")), j = require("core/device/geo"), k = require("core/util/uiView"), l = require("brick"), m = l.notice, n = null ;
		b.exports = function(a) {
			location.hash = "wbPos",
				window.onhashchange = d,
				$("#J-pospop").length ? (wrapDom = $("#J-pospop"),
					wrapDom.show()) : ($("body").append(h),
					wrapDom = $("#J-pospop"),
					window.curPage = 1,
					e()),
				wrapDom.find("#J-actualct").css({
					"min-height": i().viewHeight
				}),
				f.find('[data-node-type="userList"]').html('<span class="loading"></span>'),
				j({
					timeout: 1e4,
					callback: function(a, b) {
						if (a)
							f.find(".loading").hide(),
								f.find('[data-node-type="userList"]').html('<div class="ErrorInfo">' + a + "</div>");
						else {
							console.log(b.latitude),
								console.log(b.longitude);
							var c = b.latitude
								, d = b.longitude;
							$.getJSON("interestnew/poi/getNearbyPois?offset=0&getLocation=1&lat=" + c + "&long=" + d + "&format=cards").done(function(a) {
								a.ok ? (f.find(".loading").hide(),
									l.render(f.find('[data-node-type="userList"]')[0], a.cards || []),
									f.find(".module-poi").eq(0).find(".default-poi").removeClass("hid"),
									f.find(".module-poi").eq(0).find(".default-poi").addClass("current"),
									n = a.cards[0].card_group[0]) : f.find('[data-node-type="userList"]').html('<div class="ErrorInfo">获取附近位置列表失败</div>')
							})
						}
					}
				}),
				m.on("poi", function(a) {
					c()
				})
		}
	}),
	define("tpl/mod/position-list", function(require, a, b) {
		require("core/tplFunc");
		b.exports = function(a) {
			var b = ""
				, c = "169,19,258,194,115,44,64,51"
				, d = "http://u1.sinaimg.cn/upload/poico/poi_0.png";
			for (var e in a) {
				var f = a[e]
					, g = f.categorys.split(" ")[0];
				c.indexOf(g) >= 0 && (d = "http://u1.sinaimg.cn/upload/poico/poi_" + g + ".png"),
					b += '<a data-id="' + e + '" class="' + (0 != e || 1 != curPage || poiIndex ? "" : "current") + ' item-pos-pop clearfix BCLev8" href="javascript:;"><img src="' + d + '"><h2>' + f.title + '</h2><small class="FCLev2">' + f.address + "</small></a>"
			}
			return b
		}
	}),
	define("mod/report", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d(a) {
				e = a.val(),
					g.find(".active").removeClass("active"),
					a.addClass("active"),
					1 != e && 2 != e && 8 != e ? h.removeClass("hid") : (h.addClass("hid"),
						f = a.parent().find("label").html())
			}
			var e, f, a = $(a), g = a.find(".classlist"), h = a.find(".detailed"), i = a.find(".btn_submit"), j = b.type, k = b.rid, l = require("conf/inter/report"), m = require("ux/toast");
			g.on("click", "label", function() {
				i.removeClass("btn-disable"),
					d($(this).find("input"))
			}),
				i.on("click", function() {
					return h.hasClass("hid") || (f = h.val()),
						$(this).hasClass("btn-disable") ? void 0 : "" == f ? void m.alarm("详细原因不能为空！") : void l.get("reportSpam", {
							data: {
								content: f,
								type: j,
								rid: k,
								uid: !1,
								class_id: e
							},
							success: function(a) {
								1 == a.ok ? (i.html("已举报，受理中"),
									i.addClass("btn-disable"),
									m.success("举报成功"),
									setTimeout(function() {
										history.go(-1)
									}, 2e3)) : m.error(a.msg)
							},
							error: function() {
								m.error("接口访问失败")
							}
						})
				})
		}
	}),
	define("conf/inter/report", function(require, a, b) {
		var c = require("core/io/trans")();
		c.set("reportSpam", {
			url: "/reportDeal/reportSpam",
			type: "POST"
		}),
			b.exports = c
	}),
	define("mod/review", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d(a) {
				var b = parseInt(q - n(a.val()));
				j.val() && t && p.trigger("topbar:right:disable", 0),
					b == q ? (k.html(""),
						p.trigger("topbar:right:disable", 1)) : b > 10 && q > b ? k.html("") : b >= 0 && 10 >= b ? (k.removeClass("FCerror"),
						k.html(b)) : (k.addClass("FCerror"),
						k.html(b))
			}
			function e(a) {
				t = 1,
				j.val() && p.trigger("topbar:right:disable", 0);
				var b = a.attr("order")
					, c = i.find(".tips");
				switch (a.addClass("star-choosed"),
					a.parent().nextUntil(".star-level").children().removeClass("star-choosed"),
					a.parent().siblings().children().removeClass("starblink"),
					setTimeout(function() {
						for (var b = a.parent().prevUntil(".wrapper-tips").length, c = 0; b > c; c++)
							a.parent().prevUntil(".wrapper-tips").eq(c).children().addClass("star-choosed starblink"),
								a.parent().prevUntil(".wrapper-tips").eq(c).children().css("-webkit-animation-delay", 50 * c + "ms")
					}, 0),
					b) {
					case "0":
						c.html("很差"),
							score = 2;
						break;
					case "1":
						c.html("一般"),
							score = 4;
						break;
					case "2":
						c.html("还行"),
							score = 6;
						break;
					case "3":
						c.html("不错"),
							score = 8;
						break;
					case "4":
						c.html("怒赞"),
							score = 10
				}
			}
			function f() {
				var a = {
					content: j.val(),
					object_id: r,
					score: score
				};
				return a
			}
			function g(a) {
				o.loading("正在提交", 1e4);
				var b = f();
				m.get("reviewAdd", {
					data: b,
					success: function(a) {
						a.ok && (o.success("点评成功", 1e3),
							setTimeout(function() {
								history.go(-1)
							}, 1e3))
					},
					error: function() {
						o.error("点评失败")
					}
				})
			}
			function h() {
				s && (score = 2 * s,
					e(a.find(".icon-font-star").eq(s - 1))),
					setTimeout(function() {
						var a = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
						$("body").css("height", a + 1 + "px"),
							window.scrollTo(0, 1)
					}, 2e3)
			}
			var a = $(a)
				, i = a.find(".wrapper-star-level")
				, j = a.find(".txt-publisher")
				, k = a.find(".J-limit")
				, l = a.find(".clone_cont")[0]
				, m = require("conf/inter/publisher")
				, n = require("core/util/wordsCount")
				, o = (require("core/util/moveEnd"),
					require("ux/toast"))
				, p = require("brick").notice
				, q = b.limit || 123
				, r = b.object_id
				, s = parseInt(b.star)
				, t = 0
				, u = function(a, b, c, e, f) {
					e = e || 0;
					var g = !!document.getBoxObjectFor || "mozInnerScreenX" in window
						, h = !!window.opera && !!window.opera.toString().indexOf("Opera")
						, i = function(b, c) {
						a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
					}
						, j = a.currentStyle ? function(b) {
						var c = a.currentStyle[b];
						if ("height" === b && 1 !== c.search(/px/i)) {
							var d = a.getBoundingClientRect();
							return d.bottom - d.top - parseFloat(j("paddingTop")) - parseFloat(j("paddingBottom")) + "px"
						}
						return c
					}
						: function(b) {
						return getComputedStyle(a, null )[b]
					}
						, k = parseFloat(j("height"));
					a.style.resize = "none";
					var l = function() {
							var c, e, i = 0, l = a.style;
							a._value !== a.value && (a._value = a.value,
								b.value = a.value,
								d($(a)),
							g || h || (i = parseInt(j("paddingTop")) + parseInt(j("paddingBottom"))),
							b.scrollHeight > k && b.scrollHeight - i + "px" != l.height && (f && b.scrollHeight > f ? (e = f - i,
								l.overflowY = "auto") : (e = b.scrollHeight - i,
								l.overflowY = "hidden"),
								l.height = e + "px",
								c = document.body.scrollTop || document.documentElement.scrollTop,
								c += parseInt(l.height) - a.currHeight,
								document.body.scrollTop = c,
								document.documentElement.scrollTop = c,
								a.currHeight = parseInt(l.height)))
						}
						;
					i("focus", function() {
						$(".module-topbar").css("position", "absolute"),
							a.interval = setInterval(function() {
								l()
							}, 200)
					}),
						i("blur", function() {
							window.scrollTo(0, 1),
								$(".module-topbar").css("position", "fixed"),
								clearInterval(a.interval)
						}),
						l()
				}
				;
			h(),
				u(j[0], l, q),
				i.on("click", ".icon-font-star", function() {
					e($(this))
				}),
				p.on("topbar:send", function() {
					return parseInt(k.html()) < 0 ? void o.alarm("不能超过140字") : void g()
				}),
				p.on("topbar:back", function() {
					history.go(-1)
				})
		}
	}),
	define("mod/search", function(require, a, b) {
		b.exports = function(a, b, c) {
			var d, e = $(a), f = e.find("[node-type=search-box]"), g = e.find("[name=type]"), h = e.find("[name=queryVal]"), i = e.find("[node-type=clear]"), j = e.find("[node-type=btn]"), k = b.btn_txt || "取消", l = b.btn_txt_1 || "搜索", m = require("core/io/trans")().json, n = require("brick"), o = n.notice, p = $('<section id="J-ajax-result" class="hid"></seciton>'), q = !!$("#J-ajax-result").size();
			if (h.on("click", function() {
					f.addClass("isReady")
				}),
					h.on("input", function() {
						"" != h.val() && (j.removeClass("isCancel").html(l),
							i.removeClass("hid"))
					}),
					h.on("focus", function() {
						"" == h.val() && (f.addClass("isReady"),
							j.addClass("isCancel").html(k),
							i.addClass("hid"),
						d && d.size() && d.hide())
					}),
					i.on("click", function() {
						h.val("").focus()
					}),
					j.on("click", function() {
						var a = String.prototype.trim.call(h.val());
						"" === a ? (f.removeClass("isReady"),
						q && p.addClass("hid").html(""),
							o.trigger("SearchClose", p)) : "ajax" == b.type ? (q || (e.after(p),
							q = !0),
							o.trigger("SearchAjaxResult", [a, p])) : f.submit()
					}),
					f.on("submit", function(a) {
						var b = String.prototype.trim.call(h.val());
						return "" === b ? !1 : !0
					}),
				!b.close_complete || 1 != b.close_complete) {
				var r = require("ux/autoComplete");
				d = $('<div node-type="J-result-list" class="J-result-list" style="display:none;"></div>'),
				$("[node-type=J-result-list]").size() || e.after(d),
					suggest = new r({
						inputEle: h[0],
						resultEle: d[0],
						onHideItemList: function() {
							"" == h.val() ? j.addClass("isCancel").html(k) : j.removeClass("isCancel").html(l)
						},
						formateResult: function(a, b) {
							"" == h.val() ? j.addClass("isCancel").html(k) : j.removeClass("isCancel").html(l);
							for (var c = 1, d = "", e = 0; e < b.length; e++)
								d += '<div class="item-info-page" data-index="' + c++ + '"><p>' + b[e] + "</p></div>";
							return d
						},
						onclickItem: function(a, b) {
							var c = a.target;
							"p" == c.nodeName.toLowerCase() && (c.parentNode.className = "item-info-page cur",
								suggest.setValueStatus(c.innerHTML),
								f.submit())
						}
					})
			}
			if ("nav" == b.type)
				e.on("click", ".nav", function(a) {
					var b = $(a.target);
					b.hasClass("item") && !b.hasClass("isActive") && (b.parent().find(".item").removeClass("isActive"),
						b.addClass("isActive"),
						g.val(b.data("type")))
				}),
					m({
						url: "/page/pagejson?containerid=106003type=1",
						success: function(b) {
							b.ok && n.render(a.nextElementSibling.nextElementSibling, b.cards)
						}
					});
			else {
				var s = require("ux/topbarPop")
					, t = $(a).find('[node-type="type-list"]');
				t.on("click", function() {
					new s({
						target: t,
						id: "J-searchDrop",
						item: [{
							txt: "全部",
							type: "all"
						}, {
							txt: "用户",
							type: "user"
						}, {
							txt: "微博",
							type: "wb"
						}],
						callback: function(a) {
							var b = $(a.target);
							b.hasClass("item") && g.val(b.data("type")),
								$(this).addClass("hid")
						}
					})
				})
			}
			b.ad && ($("body").append('<a href="' + b.ad.url + '" style="-webkit-tap-highlight-clor:transparent;position:fixed;left:0;bottom:0;width:100%;height:50px;border-top:#c2c3c5 solid 1px;background:#ebebeb"><img style="display:block;margin:0 auto;height:50px;" src="' + b.ad.pic + '" alt=""/><span id="J-delad" style="position:absolute;top:0;right:0;width:30px;height:100%;line-height:55px;text-align:center"><img style="display:inline-block;width:15px;height:15px" src="' + b.ad.close + '" alt=""/></span></a>'),
				$("body").on("click", "#J-delad", function() {
					return $(this).parent().remove(),
						!1
				}))
		}
	}),
	define("ux/autoComplete", function(require, a, b) {
		var c = function(a) {
				var b, c, d, e, f = document.body, g = "", h = 1, i = {
						inputEle: null ,
						tarEle: null ,
						resultEle: null ,
						delay: 200,
						sugCount: 1,
						maxResultCount: 5,
						ajaxUrl: "",
						ajaxPara: "",
						formateResult: function(a) {},
						onclickItem: function(a, b) {},
						onHideItemList: function() {}
					}, j = function(a) {
						if (!a)
							return {
								left: 0,
								top: 0
							};
						var b = 0
							, c = 0;
						if ("getBoundingClientRect" in document.documentElement)
							var d = a.getBoundingClientRect()
								, e = a.ownerDocument
								, f = e.body
								, g = e.documentElement
								, h = g.clientTop || f.clientTop || 0
								, i = g.clientLeft || f.clientLeft || 0
								, b = d.top + (self.pageYOffset || g && g.scrollTop || f.scrollTop) - h
								, c = d.left + (self.pageXOffset || g && g.scrollLeft || f.scrollLeft) - i;
						else
							do
								b += a.offsetTop || 0,
									c += a.offsetLeft || 0,
									a = a.offsetParent;
							while (a);return {
							left: c,
							top: b
						}
					}
					, k = function(a, b) {
						console.log("ajax------------------------" + a),
							$.ajax({
								url: "/searchs/suggest",
								type: "POST",
								dataType: "json",
								data: "q=" + a + "&count=10",
								success: function(a) {
									console.log(a),
									a && l(a, b)
								},
								error: function() {}
							})
					}
					, l = function(a, b) {
						var d = "";
						console.log("idx=" + b + "  index=" + h),
							h > b ? console.log("跳过") : (a[0] && a[1] && (d = i.formateResult(a[0], a[1])),
								c.innerHTML = d,
							"" != d && "" != i.inputEle.value && (c.style.display = ""))
					}
					, m = function() {
						c.style.display = "none",
							i.onHideItemList()
					}
					, n = function() {
						b = i.inputEle.value,
						g != b && (clearTimeout(e),
							g = b,
							"" == b ? (m(),
								g = "") : e = setTimeout(function() {
								k(b, h)
							}, i.delay),
							h++)
					}
					, o = function(a) {
						var b = a.tar;
						i.onclickItem(event, b),
							setTimeout(function() {
								m()
							}, 100)
					}
					, p = function(a) {}
					, q = function(a) {
						i.inputEle.value = a,
							g = a
					}
					, r = function() {
						var a = j(i.tarEle);
						c.style.cssText = "display:none;z-index:999;position:absolute;left:" + a.left + "px;top:" + (a.top + i.tarEle.offsetHeight) + "px;width:" + i.tarEle.offsetWidth + "px"
					}
					, s = function() {
						i.inputEle && (i.inputEle.addEventListener("focus", function() {
							d = setInterval(function() {
								n()
							}, 200)
						}, !1),
							i.inputEle.addEventListener("blur", function() {
								clearInterval(d)
							}, !1)),
							i.resultEle ? c = i.resultEle : (c = document.createElement("div"),
								c.id = "J-result-List",
								c.className = "J-result-List",
								f.appendChild(c),
								r()),
							c.addEventListener("click", o, !1),
							c.addEventListener("onkeydown", p, !1)
					}
					;
				for (var t in a)
					i[t] = a[t];
				return s(),
				{
					hideResultList: m,
					setValueStatus: q
				}
			}
			;
		b.exports = c
	}),
	define("mod/shareQrcode", function(require, a, b) {
		b.exports = function(a, b) {
			var c = $(a).find('[data-node-type="btn"]')
				, d = (require("conf/inter/publisher"),
				require("core/io/trans")())
				, e = require("ux/toast");
			c.on("click", function() {
				d.json({
					url: "/qrcodeDeal/share",
					type: "POST",
					data: {
						page_id: b.page_id,
						type: "qrcode",
						picUrl: b.qrcode
					},
					success: function(a) {
						console.log(a),
						a.ok && e.success("分享成功")
					}
				})
			})
		}
	}),
	define("mod/single/camera", function(require, a, b) {
		var c = require("brick")
			, d = (c.notice,
			require("core/tplFunc").canAccessLink)
			, e = require("core/io/trans")()
			, f = e.json;
		b.exports = function(a, b, e) {
			$(".pic-main img").on("click", function(a) {
				$(this).parent().find("a").hide()
			}),
				a = $(a);
			var g = b.mblog;
			a.find('.weibo-detail img[data-src$=".gif"]').parent().addClass("gif"),
				a.on("click", '[data-node="forward"]', function() {
					return d ? void (location.href = "/repost?id=" + b.mblog.mid) : (c.notice.trigger("AccessDenied"),
						!1)
				}),
				a.on("click", '[data-node="comment"]', function() {
					return d ? void (location.href = "/comment?id=" + b.mblog.mid) : (c.notice.trigger("AccessDenied"),
						!1)
				}),
				a.on("click", '[data-node="like"]', function() {
					if (!d)
						return c.notice.trigger("AccessDenied"),
							!1;
					var a = $(this)
						, e = a.find("i");
					if (1 != a.data("loading")) {
						a.data("loading", 1);
						var h = g.attitudes_status
							, i = "/attitudesDeal/add"
							, j = "id=" + g.id;
						h ? i = "/attitudesDeal/delete" : j += "&attitude=heart",
							f({
								url: i,
								dataType: "json",
								type: "POST",
								data: j,
								success: function(c) {
									if (a.data("loading", 0),
										1 == c.ok) {
										var d = a.find("em")
											, f = d.text();
										h ? (isNaN(f) || 1 == b.single || d.text(1 == f ? "赞" : f - 1),
											g.attitudes_status = 0,
											e.removeClass("icon-likedsmall pulse"),
											e.addClass("icon-likesmall")) : (1 != b.single && (isNaN(f) ? d.text(1) : d.text(1 * f + 1)),
											g.attitudes_status = 1,
											e.removeClass("icon-likesmall"),
											e.addClass("icon-likedsmall animated pulse"))
									}
								}
							})
					}
				})
		}
	}),
	define("mod/single/infobar", function(require, a, b) {
		var c = require("brick")
			, d = require("core/io/trans")()
			, e = d.json
			, f = require("core/tplFunc").canAccessLink;
		b.exports = function(a, b) {
			function d(a, d) {
				var f;
				"like" == a ? f = "/single/likeList?id=" + b.mid + "&format=cards" : (a = "repost" == a ? "repost" : "comment",
					f = "/" + b.uid + "/" + b.mid + "/rcMod?format=cards&type=" + a + "&hot=1"),
					e({
						url: f,
						dataType: "json",
						success: function(a) {
							c.replaceRender(d.find("ul")[0], a)
						}
					})
			}
			var a = $(a)
				, g = "current"
				, h = a.find('[data-node="repost"]')
				, i = a.find('[data-node="comment"]')
				, j = a.find('[data-node="like"]')
				, k = a.find('[data-node-type="repost-list"]')
				, l = a.find('[data-node-type="comment-list"]')
				, m = a.find('[data-node-type="like-list"]');
			h.on("click", function() {
				l.hide(),
					m.hide(),
					k.show(),
					h.addClass(g),
					i.removeClass(g),
					j.removeClass(g),
					d("repost", k)
			}),
				a.on("click", '[data-node="comment"]', function() {
					k.hide(),
						m.hide(),
						l.show(),
						i.addClass(g),
						h.removeClass(g),
						j.removeClass(g),
						d("comment", l)
				}),
				a.on("click", '[data-node="like"]', function() {
					return f ? (k.hide(),
						l.hide(),
						m.show(),
						i.removeClass(g),
						h.removeClass(g),
						j.addClass(g),
						void d("like", m)) : (c.notice.trigger("AccessDenied"),
						!1)
				}),
				d("comment", l),
				c.notice.on("userSmall", function(a) {
					j.hasClass(g) && (location.href = "/u/" + a.id)
				})
		}
	}),
	define("mod/single/infobox", function(require, a, b) {
		var c = require("brick")
			, d = require("core/io/trans")()
			, e = d.json
			, f = require("core/tplFunc").canAccessLink
			, g = require("ux/popMenu");
		b.exports = function(a, b) {
			var a = $(a)
				, d = b;
			a.on("click", function(b) {
				var h, i = d.type;
				return $(b.target).closest("a").length ? !0 : "line" == i ? !0 : f && $render_data.common.isLogin ? ("comment" == i && (h = [{
					type: "recommend",
					text: "回复"
				}],
					d.user.id == $render_data.common.uid ? h.push({
						type: "deletePL",
						text: "删除"
					}) : h.push({
						type: "reportPL",
						text: "举报"
					})),
				"repost" == i && (h = [{
					type: "forward",
					text: "转发"
				}],
					d.user.id == $render_data.common.uid ? h.push({
						type: "deleteWB",
						text: "删除"
					}) : h.push({
						type: "reportWB",
						text: "举报"
					})),
					void g.init({
						icons: null ,
						items: h,
						clickPopMenu: function(b) {
							var c, f = $(b.target);
							if ("a" != b.target.nodeName.toLowerCase() && f.parents("a").length > 0 && (f = f.parents("a")),
									c = f.attr("node-type"),
								("recommend" == c || "forward" == c) && setTimeout(function() {
									location.href = d.url
								}, 250),
								("reportPL" == c || "reportWB" == c) && setTimeout(function() {
									location.href = "reportWB" == c ? "/report/mblog?rid=" + d.id : "/report/comment?rid=" + d.id
								}, 250),
								"deletePL" == c || "deleteWB" == c) {
								var g = "deleteWB" == c ? "/mblogDeal/delMyMblog" : "/commentDeal/cmtDel"
									, h = "deleteWB" == c ? "id=" + d.id : "cmtId=" + d.id;
								e({
									url: g,
									dataType: "json",
									type: "POST",
									data: h,
									success: function(b) {
										1 == b.ok && $(a).remove()
									}
								})
							}
						}
					})) : (c.notice.trigger("AccessDenied"),
					!1)
			}),
				a.find('[data-node="zanPL"]').on("click", function(b) {
					if (b.stopPropagation(),
							!f)
						return c.notice.trigger("AccessDenied"),
							!1;
					var g = d.liked || !1
						, h = "/comment/like"
						, i = "id=" + d.id;
					h = g ? "/comment/dislike" : "/comment/like",
						e({
							url: h,
							dataType: "json",
							type: "POST",
							data: i,
							success: function(b) {
								if (1 == b.ok) {
									var c = $(a).find("em")
										, e = parseInt(c.text() || 0)
										, f = $(a).find('[data-node="zanPL"] i');
									g ? (c.text(1 >= e ? "" : e - 1),
										d.liked = !1,
										f.removeClass("icon-likedsmall pulse"),
										f.addClass("icon-likesmall")) : (c.text(1 * e + 1),
										d.liked = !0,
										f.removeClass("icon-likesmall"),
										f.addClass("icon-likedsmall animated pulse"))
								}
							}
						})
				})
		}
	}),
	define("mod/tab", function(require, a, b) {
		var c = require("brick");
		b.exports = function(a, b) {
			function d(a) {
				var b = f.eq(a);
				b.show().siblings().hide(),
				e[a].scheme && $.ajax({
					url: e[a].scheme,
					dataType: "json",
					success: function(a) {
						c.replaceRender(b[0], a)
					}
				})
			}
			a = $(a);
			var e = b.tabs
				, f = a.find('[data-node-type="content"]')
				, g = a.find('[data-node-type="tab"].current').index();
			if (e[g].cards) {
				var h = f.eq(g)[0];
				h.innerHTML = "",
					c.render(h, e[g].cards)
			} else
				d(g);
			a.on("click", '[data-node-type="tab"]', function() {
				var a = $(this)
					, b = a.index();
				a.addClass("current").siblings().removeClass("current"),
					d(b)
			})
		}
	}),
	define("mod/tabbar", function(require, a, b) {
		b.exports = function(a, b, c) {
			function d(a) {
				var b = l.children().eq(a);
				b.html('<div class="loading"></div>').show().siblings().hide(),
					$.ajax({
						url: "/page/pageJson?containerid=" + f[a].containerid,
						dataType: "json",
						success: function(a) {
							a.ok && e.replaceRender(b[0], a.cards)
						}
					})
			}
			a = $(a);
			for (var e = require("brick"), f = b.tabs, g = window.$config.stageId, h = 0, i = "m-cur", j = f.length - 1; j >= 0; j--)
				if (f[j].containerid == g || 0 == j) {
					h = j;
					break
				}
			for (var j = f.length - 1; j >= 0; j--)
				new Image(f[j].icon_selected);
			var k = a.find(".m-diy-btn")
				, l = a.find('[data-node="content"]')
				, m = k.eq(h);
			m.addClass(i),
				m.find("img").attr("src", f[h].icon_selected),
				d(h),
				k.on("click", function() {
					var a = $(this);
					if (a.hasClass(i))
						return !1;
					var b = k.index(a)
						, c = f[b]
						, e = a.siblings("." + i);
					c.containerid ? (e.removeClass(i),
						e.find("img").attr("src", f[k.index(e)].icon),
						d(b),
						a.addClass(i),
						a.find("img").attr("src", f[b].icon_selected)) : c.url && (location.href = c.url)
				})
		}
	}),
	define("mod/topbar", function(require, a, b) {
		var c = (require("brick").notice,
			require("core/io/actLog"));
		b.exports = function(a, b, d) {
			function e(a) {
				var b = $(".ux-popmenu").find("header [node-type='" + a + "']");
				b.find("i.num").remove()
			}
			function f(a, b) {
				var c = $(".ux-popmenu").find("header [node-type='" + a + "']");
				c && c.find(".num").length > 0 ? c.find(".num").html(b) : c.prepend('<em class="num">' + b + "</em>")
			}
			function g() {
				var b = a.find('[data-node="more"]')
					, c = b.attr("data-newMsg")
					, d = b.attr("data-newFs")
					, g = (b.attr("data-newWb"),
				{
					msg: c,
					profile: d
				});
				for (var h in g)
					g[h] ? f(h, g[h]) : e(h, g[h])
			}
			var h = require("ux/popMenu")
				, i = require("brick").notice
				, j = require("mod/getUnread")
				, k = require("ux/moreMenu");
			if (a = $(a),
				0 == b.fixed && (a.css("position", "initial"),
					$("body").css("padding-top", 0)),
				b.reg && ($("#box").css("padding-top", "52px"),
					a.on("click", '[data-node-type="reg"]', function() {
						var a = $(this).data("url");
						c(458, function() {
							location.href = a
						})
					}),
					a.on("click", '[data-node-type="login"]', function() {
						var a = $(this).data("url");
						location.href = a
					}),
					a.on("click", '[data-node-type="app"]', function() {
						var a = $(this).data("url");
						c(459, function() {
							i.trigger("OpenWeiboApp", a)
						})
					})),
				"drop" == b.title.type && b.drop_data) {
				var l = require("ux/topbarPop");
				i.on("topbar:drop", function(c) {
					var d, e = $(c.target);
					(e.hasClass("title") || e.hasClass("icon-font")) && (e = e.parent()),
						d = e.find(".icon-font"),
						d.hasClass("icon-font-arrow-down") ? d.removeClass("icon-font-arrow-down").addClass("icon-font-arrow-up") : d.removeClass("icon-font-arrow-up").addClass("icon-font-arrow-down"),
						new l({
							box: a,
							target: e,
							id: "J-topbarPop",
							item: b.drop_data
						})
				})
			}
			"ontouchstart" in window ? "touchstart" : "click";
			i.on("topbar:more", function(a) {
				if ("single" != $config.stage) {
					var b = k.getMenuList(null , !0);
					h.init({
						icon: !0,
						items: b,
						clickPopMenu: function(a) {
							k.clickItem(a)
						}
					}),
						g()
				} else
					setTimeout(function() {
						g()
					}, 300)
			}),
			a.find('[data-node="more"]').size() && j.getUnread(function(b, c, d) {
				var e = a.find('[data-node="more"]');
				e.length <= 0 || (b || c ? e.addClass("isNew") || e.addClass("isNew") : e.hasClass("isNew") && e.removeClass("isNew"),
					e.attr("data-newMsg", b),
					e.attr("data-newFs", c),
					e.attr("data-newWb", d),
					g())
			}),
				a.on("click", "[data-node]", function(a) {
					a.preventDefault();
					var b = $(a.target);
					if (b.data("node") ? "" : b = b.parents("[data-node]").eq(0),
							b.hasClass("disable"))
						return !1;
					var c = b.data("node");
					return i.trigger("topbar:" + c, a),
						!1
				});
			var m = "disable"
				, n = a.find(".fl")
				, o = a.find(".fr");
			i.on("topbar:left:disable", function(a) {
				a ? n.addClass(m) : n.removeClass(m)
			}),
				i.on("topbar:right:disable", function(a) {
					a ? o.addClass(m) : o.removeClass(m)
				})
		}
	}),
	define("mod/topicsmall", function(require, a, b) {
		var c = require("brick").notice;
		b.exports = function(a, b, d) {
			var a = $(a);
			a.on("click", function() {
				c.trigger("topic", b)
			})
		}
	}),
	define("mod/toprefresh", function(require, a, b) {
		var c = require("core/device/customEve")
			, d = require("core/device/touch")
			, e = new d({
				el: document.body,
				enableX: !1
			})
			, f = function(a, b) {
				var d = {
					c: document,
					fx: 0
				}
					, f = this;
				for (var g in a)
					d[g] = a[g];
				var h = !0
					, i = document.querySelector(".toprefresh_c");
				if (null  == i) {
					var j = document.createElement("div");
					j.setAttribute("class", "toprefresh"),
						j.innerHTML = '<div class="in"><span class="arr"></span><span>下拉可以刷新...</span></div>',
						void 0 == d.c.childNodes[0] ? d.c.appendChild(j) : d.c.insertBefore(j, d.c.childNodes[0]),
						i = j
				}
				var k = i.childNodes[0]
					, l = window.getComputedStyle(i, null ).height
					, m = function() {
						return document.body && document.body.scrollTop ? document.body.scrollTop : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : 0
					}
					, n = function(a) {
						console.log(a.moveY + "  " + m()),
						a.moveY > 10 && 0 == m() && (i.style.display = "block"),
						"block" == i.style.display && a.event.preventDefault(),
							console.log(a.moveDisY),
							a.moveDisY > 0 ? (k.childNodes[0].className = "arr",
								k.childNodes[1].innerHTML = "下拉可以刷新...") : a.moveDisY < 0 && (k.childNodes[0].className = "arr up",
								k.childNodes[1].innerHTML = "松开即可刷新..."),
						1 == d.fx && a.moveY >= 0 && a.moveY <= 200 && (i.style.height = parseInt(l) + a.moveY + "px")
					}
					, o = function(a) {
						"block" == i.style.display && (k.innerHTML = '<img src="http://u1.sinaimg.cn/upload/2014/06/14/loading_.gif" width="16">加载中...',
							c.off(e, "S_dragMove", n),
							c.off(e, "S_end", o),
							h = !1,
							b())
					}
					;
				return this.end = function() {
					i.style.display = "none",
						k.innerHTML = '<span class="arr"></span><span>下拉可以刷新...</span>',
						i.style.height = l,
						h = !0
				}
					,
					c.on(e, "S_start", function() {
						i.style.height = l,
						0 == m() && h && (c.on(e, "S_dragMove", n),
							c.on(e, "S_end", o))
					}),
					f
			}
			;
		b.exports = f
	}),
define("mod/userSmall", function(require, a, b) {
	var c = require("brick").notice;
	b.exports = function(a, b, d) {
		var a = $(a);
		a.on("click", function() {
			c.trigger("userSmall", b.user)
		})
	}
}),
define("mod/vcard", function(require, a, b) {
	var c = (require("conf/inter/publisher"),
		require("core/io/trans")())
		, d = c.json
		, e = require("conf/inter/publisher")
		, f = require("ux/toast");
	b.exports = function(a, b, c) {
		function g() {
			l.src = "",
				i = document.getElementById("J_erroc"),
				null  == i ? (_div = document.createElement("div"),
					_div.setAttribute("id", "J_erroc"),
					_div.innerHTML = '<div class="icon_erro"></div><p>本次二维码没有生成成功<br>换一换再试一次</p>',
					i = _div,
					k.appendChild(_div)) : i.style.display = "block"
		}
		function h(a) {
			var b = new Image;
			b.src = a,
				b.onload = function() {
					p.style.display = "none",
						l.src = a
				}
				,
				b.onerror = function() {
					p.style.display = "none",
						g()
				}
		}
		var i, j = document.querySelector(".module-vcard"), k = document.querySelector(".qr"), l = document.querySelector(".qr img"), m = !1, n = b.picurl, o = "", p = document.querySelector(".icon_loading");
		document.querySelector(".t_name").innerHTML = b.screen_name,
			d({
				url: "/myVcard/getMyVcard?",
				dataType: "json",
				success: function(a) {
					m = !0,
						1 == a.ok ? (h(a.picurl),
							n = a.picurl,
							o = a.picId) : (p.style.display = "none",
							g())
				}
			}),
			j.addEventListener("touchstart", function(a) {
				var b = a.target;
				"btn_g" == b.className && (b.className = "btn_g active"),
				"J_share" == b.id && (b.className = "active")
			}, !1),
			j.addEventListener("touchend", function(a) {
				var b = a.target;
				if ("btn_g active" == b.className) {
					if (b.className = "btn_g",
							!m)
						return;
					m = !1,
					void 0 != i && (i.style.display = "none"),
						p.style.display = "block",
						d({
							url: "/myVcard/getMyVcard?showid=rand",
							dataType: "json",
							success: function(a) {
								m = !0,
									1 == a.ok ? (h(a.picurl),
										n = a.picurl,
										o = a.picId) : (p.style.display = "none",
										g())
							}
						})
				} else if ("J_share" == b.id) {
					b.className = "";
					var c = "分享了#我的名片#，微博扫一扫关注我吧 http://m.weibo.cn/home/vCard?sinainternalbrowser=topnav";
					e.get("addAMblog", {
						data: {
							content: c,
							picId: o
						},
						success: function(a) {
							a.ok && f.success("分享成功")
						}
					})
				}
			}, !1)
	}
}),
define("mod/ztBtns", function(require, a, b) {
	b.exports = function(a, b, c) {
		var d = require("core/io/trans")()
			, e = d.json
			, f = (require("tpl/mod/ztBtns"),
				$(a).find(".btn"))
			, g = $(a).find(".summary em")
			, h = $(a).find(".add")
			, i = function(a) {
				var b = decodeURIComponent(f.attr("data-act-data"));
				f.hasClass("disabled") || e({
					url: b,
					type: "POST",
					dataType: "json",
					success: function(a) {
						if (a.btn) {
							var b = g.position();
							h.css({
								left: b.left + g.width() + "px",
								top: b.top - 15 + "px"
							}),
								h.show(),
								setTimeout(function() {
									h.addClass("zooms animated")
								}, 200),
								g.html(parseInt(g.html()) + 1),
							0 == a.btn.enable && f.addClass("disabled"),
								f.html(a.btn.txt)
						} else
							alert(a.msg)
					}
				})
			}
			;
		f.on("click", function() {
			i()
		})
	}
}),
define("tpl/mod/ztBtns", function(require, a, b) {
	require("core/tplFunc");
	b.exports = function(a) {
		var b = "<div class=\"ux-ztBtns\"><div class='summary'>" + a.summary.txt + "</div><div class='btnwrap'><a class=\"";
		return b += "1" == a.btn.enable ? "btn" : "btn disabled",
			b += '" href="javascript:;" data-act-data=\'' + a.btn.scheme + "'>" + a.btn.txt + '</a><span class="add" style="display:none">+1</span></div>',
		a.summary.txt_sub && (b += "<div class='subsummary'>" + a.summary.txt_sub + "</div>"),
			b += "</div>"
	}
});
