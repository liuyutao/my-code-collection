/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/2/25.
 */
try {
	!function(n, e) {
		function t() {
			var n = e.querySelector("." + l)
				, t = e.createElement("section");
			if (n)
				n = e.querySelector("." + l),
					n.style.display = "block";
			else {
				var i = new Array
					, o = "http://u1.sinaimg.cn/upload/2014/12/19/102181.png"
					, s = 100
					, r = a._system();
				d && (r == c.android && (o = d.android),
				r == c.ios && (o = d.ios),
					s = "100%"),
					i.push('<a class="j_share_wx" href="javascript:;">'),
					i.push("<span></span>"),
					i.push("</a>"),
					i.push('<a class="goback" href="javascript:;">'),
					i.push("</a>"),
					i.push('<div class="share_bg ' + l + '" style="position:fixed;display:block;left:0;top:0;width:100%;height:100%;z-index:1009; background:rgba(0,0,0,.6);-webkit-animation:opacityIn 1s .2s ease both;">'),
					i.push('<p class="share_icon" style="clear:both; padding:10px; text-align:right;height:100%;background-position: right top; -webkit-animation:rotateUp 1s .8s ease both;z-index:9999;"><img src="' + o + '" alt="" width="' + s + '" /></p>'),
					i.push("</div>"),
					t.innerHTML = i.join(""),
					e.body.appendChild(t),
					n = e.querySelector("." + l),
					n.onclick = function() {
						"block" == n.style.display && (n.style.display = "none")
					}
			}
		}
		function i() {
			_sinaCallEvent.on("sina_direct_open", sinaOpenNative)
		}
		var o = "";
		n.getFromUrl = !1,
			n._callEventCom = {},
			n._callReadyEvent = {},
			n._sinaCallEvent = {
				on: function(e, t) {
					var i = n._callEventCom.hasOwnProperty(e)
						, o = n._callReadyEvent.hasOwnProperty(e);
					i || (n._callEventCom[e] = t),
					o && (_sinaCallEvent.trigger(e, n._callReadyEvent[e]),
						delete n._callReadyEvent[e])
				},
				trigger: function(e, t) {
					var i = n._callEventCom.hasOwnProperty(e);
					i ? n._callEventCom[e](t) : n._callReadyEvent[e] = t
				}
			};
		var a = {
			_UA: navigator.userAgent.toLowerCase(),
			UAIdentify: {
				weibo: "weibo",
				qq: "qq",
				weixin: "micromessenger",
				chrome: "chrome",
				ios9: "os 9_"
			},
			isInclude: function(n, e) {
				return n.indexOf(e) > -1
			},
			isWeibo: function() {
				var n = this.UAIdentify
					, e = this.isInclude(this._UA, n.weibo);
				return e ? !0 : !1
			},
			isQQ: function() {
				var n = this.UAIdentify
					, e = this.isInclude(this._UA, n.qq);
				return e ? !0 : !1
			},
			isWeixin: function() {
				var n = this.UAIdentify
					, e = this.isInclude(this._UA, n.weixin);
				return e ? !0 : !1
			},
			isChrome: function() {
				var n = this.UAIdentify
					, e = this.isInclude(this._UA, n.isChrome);
				return e ? !0 : !1
			},
			isIOS9: function() {
				var n = this.UAIdentify
					, e = this.isInclude(this._UA, n.ios9);
				return e ? !0 : !1
			},
			_system: function() {
				var n = this._UA;
				return n.match(/iphone|ipod/gi) ? "ios" : n.match(/Android/i) ? "android" : ""
			}
		}
			, s = {
			openTimer: null ,
			init: function(e) {
				var i = this
					, s = a.isWeixin()
					, r = a.isChrome()
					, l = a.isIOS9()
					, c = a.isQQ()
					, d = a.isWeibo()
					, p = e || {};
				i.isGoLink(p);
				if (i.platform = a._system,
						i.openByWeixin = p.openByWeixin || o,
						c = c && i.openByWeixin || o,
						i.platform) {
					if ("ios" == i.platform) {
						var u = i.installUrl.match(/(\S*)(d\.php\?k\=)(\S*)/);
						i.installUrl = p.iosInstallUrl || o,
							i.nativeUrl = p.iosNativeUrl || o,
							i.openTime = p.iosOpenTime || 800,
						d && i.installUrl && u && (i.installUrl += "&sinainternalbrowser=external")
					} else
						i.installUrl = p.androidInstallUrl || o,
							i.nativeUrl = p.androidNativeUrl || o,
							i.openTime = p.androidOpenTime || 3e3;
					if (s && i.openByWeixin)
						return void t();
					c && i.openByWeixin && (n.location.href = i.openByWeixin),
					"ios" != i.platform && r && !d && (i.nativeUrl = i._hackChrome()),
						i._gotoNative(l)
				}
			},
			isGoLink: function(n) {
				var e = "sina.cn/j/d.php"
					, t = n.iosNativeUrl && n.iosNativeUrl.indexOf(e) <= -1 || n.androidNativeUrl && n.androidNativeUrl.indexOf(e) <= -1;
				return t ? !0 : !1
			},
			_hackChrome: function() {
				var n = this;
				Date.now();
				if (n.nativeUrl == o || !n.nativeUrl)
					return o;
				var e = n.nativeUrl.split("://")
					, t = e[0]
					, i = e[1]
					, a = new Image;
				return a.src = n.schemejc,
				"intent://" + i + "#Intent;scheme=" + t + ";end"
			},
			_gotoNative: function(e) {
				var t = this
					, i = e ? "script" : "iframe"
					, o = e ? 3 * t.openTime : t.openTime
					, a = Date.now()
					, s = document
					, r = s.body
					, l = s.createElement(i);
				l.id = "J_redirectNativeFrame",
				e || (l.style.display = "none"),
				t.nativeUrl && (l.src = t.nativeUrl),
					r ? r.appendChild(l) : setTimeout(function() {
						r.appendChild(l)
					}, 0),
				e && t.nativeUrl && (n.location.href = t.nativeUrl),
				t.openTimer && clearTimeout(t.openTimer),
					t.openTimer = setTimeout(function() {
						s.body.removeChild(l),
							t._gotoDownload(a)
					}, o)
			},
			_gotoDownload: function(e) {
				var t = this
					, i = Date.now()
					, o = a._system()
					, s = "android" == o && i - e < t.openTime + 500
					, l = "ios" == o;
				(s || l) && t.installUrl && (r.sendDownloadTrack(),
					n.location.href = t.installUrl)
			}
		}
			, r = {
			click: "http://open.api.sina.cn/count/appview",
			download: "",
			trackUrl: {},
			setClickTrackUrl: function(n) {
				this.trackUrl.click = n
			},
			setDownloadTrackUrl: function(n) {
				this.trackUrl.download = n
			},
			goTrack: function(n) {
				var e = document.getElementsByTagName("head")[0]
					, t = document.createElement("script")
					, i = n
					, o = a.isInclude("?");
				return i ? (i += o ? "&" : "?",
					t.src = i + "t=" + (new Date).getTime(),
					t.onload = function() {
						t.onload = null ,
							t.parentNode.removeChild(t)
					}
					,
					void e.appendChild(t)) : !1
			},
			sendClickTrack: function() {
				this.goTrack(this.trackUrl.click)
			},
			sendDownloadTrack: function() {
				this.goTrack(this.trackUrl.download)
			}
		}
			, l = "j_callupTips_bg"
			, c = {
			ios: "ios",
			android: "android"
		}
			, d = n.callupTips || {
				android: "http://n.sinaimg.cn/dae7ff0c/20151013/popup_android.png",
				ios: "http://n.sinaimg.cn/dae7ff0c/20151013/popup_ios.png"
			};
		n.sinaOpenNative = function(n) {
			var e = n || {};
			s.init(e),
			"undefined" != e.setOpenTrackUrl && r.setClickTrackUrl(e.setOpenTrackUrl),
			"undefined" != e.setDownloadTrackUrl && r.setDownloadTrackUrl(e.setDownloadTrackUrl),
				r.sendClickTrack()
		}
			,
			i()
	}(window, document)
} catch (e) {
	throw new Error(e + " ./CallNativeCom_2.0.js")
}
try {
	!function(n, e) {
		function t() {
			_sinaCallEvent.on("sina_bind_target", bindTarget),
				_sinaCallEvent.trigger("sina_bind_target"),
				_sinaCallEvent.on("sina_open_native", goOpenNative)
		}
		var i = "sinanews"
			, o = "undefined" != typeof _SACONFIG && _SACONFIG || {};
		n.getFromUrl = !1;
		var a = {
			domClass: "j_call_native",
			getDomInfo: function(n) {
				function e(n, e) {
					var t = n.toString().length;
					return 3 > t && (n = ("000" + n).substr(-3, 3)),
					e + n
				}
				var t = n.className
					, i = {};
				return i.isCallNative = t.indexOf(this.domClass) > -1,
				i.isCallNative && (i.docid = n.getAttribute("data-docid"),
					i.media = n.getAttribute("data-media") || "sinawap",
					i.calluptype = n.getAttribute("data-calluptype") || "",
					i.app = n.getAttribute("data-app"),
					i.domain = n.getAttribute("data-domain"),
					i.channel = n.getAttribute("data-channel"),
					i.type = n.getAttribute("data-type"),
					i.position = n.getAttribute("data-position"),
					i.url = n.getAttribute("data-url"),
					i.downloadk = n.getAttribute("data-downloadk"),
					i.golink = n.getAttribute("data-golink") || "",
					i.position = e(i.position, i.calluptype)),
					i
			},
			findTargetInfo: function(n) {
				for (var e = 10, t = {}, i = 0; e > i && (t = this.getDomInfo(n),
					!t.isCallNative); i++)
					n = n.parentElement;
				return t
			},
			bindEventForApp: function(n, e, t) {
				document.addEventListener ? n.addEventListener(e, t, !0) : n.attachEvent(e, t)
			},
			stopDefault: function(n) {
				n = n || window.event,
					n.preventDefault ? n.preventDefault() : n.returnValue = !1
			},
			bindTarget: function(n) {
				var e = this;
				this.bindEventForApp(n, "click", function(n) {
					var t = n.target
						, i = e.findTargetInfo(t);
					i.isCallNative && e.open_or_download_app(i),
						e.stopDefault(n)
				})
			},
			open_or_download_app: function(n) {
				var e, t = {}, a = n || o, s = {}, r = "", l = ("undefined" != typeof __docConfig && void 0 != __docConfig.__docId && __docConfig.__docId.length > 0,
				"undefined" != typeof n && void 0 != n.docid && n.docid.length > 0), c = "undefined" != typeof n && void 0 != a.url && a.url.length > 0, d = "undefined" != typeof n && void 0 != n.downloadk && n.downloadk, p = "undefined" != typeof n && void 0 != n.golink && n.golink.length > 0, u = "", f = "";
				c && (u = "sinanews://url=" + a.url),
				l && (f = n.docid + "-comos-news-cms",
					u = "sinanews://newsid=" + f),
				u || (u = "sinanews://sina.cn"),
					t = {
						iosNativeUrl: u,
						androidNativeUrl: u,
						weixn: "http://a.app.qq.com/o/simple.jsp?pkgname=com.sina.news"
					},
					e = "82",
					p ? (r = n.golink,
						t.weixn = n.golink) : (t.weixn = "",
					d && (e = n.downloadk,
						r = "http://sina.cn/j/d.php?k=" + e)),
					s = {
						iosInstallUrl: r,
						androidInstallUrl: r,
						iosNativeUrl: t.iosNativeUrl,
						androidNativeUrl: t.androidNativeUrl,
						openByWeixin: t.weixn,
						isType: "DOM",
						paramsK: a
					},
					window._sinaCallEvent.trigger("sina_open_native", s),
					_sinaCallEvent.trigger("sina_suda_action", i + "_open")
			},
			init: function() {
				for (var n = e.body.querySelectorAll("." + this.domClass), t = 0, i = this; n && t < n.length; ) {
					var o = n.item(t)
						, a = o.getAttribute("bind-target")
						, s = o.getAttribute("href");
					a || (s && (o.setAttribute("data-golink", s),
						o.setAttribute("href", "javascript:void(0);")),
						i.bindTarget(o),
						o.setAttribute("bind-target", "binded")),
						t++
				}
			}
		};
		window.bindTarget = function() {
			a.init()
		}
		;
		var s = {
			config: {},
			TYPE: {
				dom: "DOM",
				push: "PUSH",
				other: "OTHER"
			},
			keyListOrder: ["media", "domain", "channel", "type", "position", "timeStamp", "url"],
			getURLParams: function() {
				function n(n) {
					var e = new RegExp("(^|&)" + n + "=([^&]*)(&|$)","i")
						, t = window.location.search.substr(1).match(e)
						, i = "";
					return null  != t && (i = t[2]),
						e = null ,
						t = null ,
						null  == i || "" == i || "undefined" == i ? "" : i
				}
				var e = document.location.search
					, t = (e.indexOf("cu_domain") > -1,
				e.indexOf("cu_type") > -1,
				e.indexOf("cu_pos") > -1);
				return t ? {
					domain: n("cu_domain"),
					type: n("cu_type"),
					channel: n("cu_channel") || n("cu_domain"),
					position: n("cu_pos")
				} : !1
			},
			getAutoParams: function() {
				var n = "undefined" != typeof _SACONFIG && _SACONFIG || ""
					, e = this.getURLParams()
					, t = {
					media: n && n.media || "sinawap",
					domain: n && n.domain || document.domain.split(".")[0],
					channel: n && n.channel || "news",
					type: n && n.type || "index",
					position: n && n.position || "0000",
					timeStamp: (new Date).getTime(),
					url: n && n.url || window.location.href
				};
				return "undefined" != typeof __docConfig && (t.domain = __docConfig.__tj_sch || t.domain,
					t.channel = __docConfig.__tj_ch || t.domain,
					t.type = "article"),
				!window.getFromUrl && e && (_params.domain = e.domain || t.domain,
					_params.channel = e.channel || t.channel,
					_params.type = e.type || t.type,
					_params.position = e.position || t.pos,
					window.getFromUrl = !0),
					t
			},
			getKInfo: function() {
				var n = {}
					, e = this.config
					, t = e.isType
					, i = this.getAutoParams()
					, o = "undefined" != typeof e.paramsK && e.paramsK || "";
				switch (t) {
					case this.TYPE.dom:
					case this.TYPE.other:
						n = {
							media: o && o.media || i.media,
							domain: o && o.domain || i.domain,
							channel: o && o.channel || i.channel,
							type: o && o.type || i.type,
							position: o && o.position || i.position,
							timeStamp: (new Date).getTime(),
							url: o && o.url || i.url
						};
						break;
					default:
						n = i
				}
				return n
			},
			getNativeUrl: function(n) {
				var e = this
					, t = "sinanews://"
					, i = n || ""
					, o = i.indexOf(t) > -1
					, a = !i.match(/(sinanews:\/\/)(\S*)(k\=)(\S*)/)
					, s = i.length > t.length
					, r = e.keyListOrder
					, l = e.getKInfo()
					, c = []
					, d = "";
				if (o && a) {
					for (var p in r) {
						var u = r[p];
						"url" == u && (l[u] = encodeURIComponent(l[u])),
							c.push(l[u])
					}
					s && (d = "::"),
						i += d + "k=" + c.join("*")
				}
				return i
			},
			getInstallUrl: function(n) {
				var e = this.getAutoParams()
					, t = n || "";
				return t.indexOf("?") <= -1 && (t += "?"),
					t += "&cu_pos=" + e.position + "&cu_domain=" + e.domain + "&cu_type=" + e.type
			},
			toAddNewsStaticParams: function() {
				var n = this.config || {}
					, e = ("undefined" != typeof n.isPush && n.isPush,
				n.installUrl || n.installUrl || "")
					, t = (e.match(/(\S*)(d\.php\?k\=)(\S*)/),
					this);
				return n.iosNativeUrl === n.androidNativeUrl ? n.iosNativeUrl = n.androidNativeUrl = t.getNativeUrl(n.iosNativeUrl) : (n.iosNativeUrl = t.getNativeUrl(n.iosNativeUrl),
					n.androidNativeUrl = t.getNativeUrl(n.androidNativeUrl)),
				n.isType == this.TYPE.push && (n.iosInstallUrl === n.androidInstallUrl ? n.iosInstallUrl = n.androidInstallUrl = t.getInstallUrl(n.iosInstallUrl) : (n.iosInstallUrl = t.getInstallUrl(n.iosInstallUrl),
					n.androidInstallUrl = t.getInstallUrl(n.androidInstallUrl))),
					n
			},
			init: function(n) {
				var e = n || {}
					, t = "sinanews://"
					, i = e.androidNativeUrl || e.iosNativeUrl || ""
					, o = i.indexOf(t) > -1;
				return this.config = e,
				o && (e = this.toAddNewsStaticParams(e)),
					e
			}
		};
		n.goOpenNative = function(n) {
			var e = s.init(n) || {};
			_sinaCallEvent.trigger("sina_direct_open", e)
		}
			,
			t()
	}(window, document)
} catch (e) {
	throw new Error(e + " ./OpenApp.js")
}
try {
	!function(n, e) {
		function t(e) {
			var t = {
				name: e,
				type: "",
				title: "",
				index: "",
				href: ""
			};
			("function" == typeof n.suds_count || n.suds_count) && n.suds_count && n.suds_count(t)
		}
		function i() {
			n._sinaCallEvent.on("sina_open_push", openPush),
				n._sinaCallEvent.on("sina_close_push", closePush)
		}
		var o = !1
			, a = ("undefined" != typeof _SACONFIG && _SACONFIG || {},
		{
			id: "_" + (new Date).getTime(),
			isGetPushInfo: !1,
			isPushOpen: !1,
			pushInfo: {},
			pushUrl: "http://so.sina.cn/push.d.json?jsoncallback=updateInfo",
			isEmpty: function(n) {
				var e = 0
					, t = n || {};
				for (var i in t)
					e++;
				return e > 0 ? !1 : !0
			},
			createElement: function(n, t, i) {
				var o = e.createElement(n)
					, a = t;
				if (!this.isEmpty(a))
					for (var s in a)
						o.setAttribute(s, a[s]);
				return i && (o.innerHTML = i),
					o
			},
			ajaxJsonp: function(n) {
				var t = e.getElementsByTagName("body")[0]
					, i = e.createElement("script");
				return i.src = n,
					i.className = "j_addscript",
					i.charset = "utf-8",
					t.appendChild(i),
					!1
			},
			insertPush: function(n) {
				var i = this.createElement("section");
				self = this,
					close = null ,
					open = null ,
					_t = runTemplate.tinyTemplateParser(Template.Push.Bottom, {
						info: n
					}),
					i.innerHTML = _t,
					e.body.appendChild(i),
					close = i.querySelector(".close"),
					open = i.querySelector(".open"),
				close && (close.onclick = function() {
						self.closePush(),
							t("sinanews_close")
					}
				),
				open && (open.onclick = function() {
						self.openApp(),
							t("sinanews_open"),
							self.closePush(),
							t("sinanews_close"),
							self.set_disable_record()
					}
				)
			},
			changePushShow: function(n) {
				var t = e.querySelector("#" + this.id)
					, i = n ? 1 : -1;
				t && (i > 0 ? t.style.display = "block" : setTimeout(function() {
					t.style.display = "none"
				}, 600),
					t.style["-webkit-transform"] = "translate3d(" + 100 * i + "%,0,0)")
			},
			openPush: function() {
				this.isGetPushInfo && !this.isPushOpen && o && this.isAbleDisplay && (this.changePushShow(!0),
					this.isPushOpen = !0)
			},
			uid: "push_open",
			isAbleDisplay: !0,
			enable_disp: function() {
				var n = this;
				try {
					var e = null ;
					if (localStorage.sina_push && (e = JSON.parse(localStorage.sina_push)),
						e && e[n.uid]) {
						if (e[n.uid] == n.pushInfo.artid)
							return !1;
						delete e[n.uid]
					}
					localStorage.sina_push = JSON.stringify(e)
				} catch (t) {
					console.log(t)
				}
				return !0
			},
			set_disable_record: function() {
				var n = this;
				try {
					var e = localStorage.sina_push;
					"null" == e && (e = "{}"),
						e = JSON.parse(e),
						e[n.uid] = n.pushInfo.artid,
						localStorage.sina_push = JSON.stringify(e)
				} catch (t) {
					console.log(t)
				}
			},
			closePush: function(n) {
				this.isAbleDisplay = !n,
				this.isPushOpen && (this.changePushShow(!1),
					this.isPushOpen = !1)
			},
			openApp: function() {
				var e = {}
					, t = this.pushInfo
					, i = t.artid || ""
					, o = "sinanews://"
					, a = t.url;
				i && (o += "newsid=" + i),
					e = {
						iosInstallUrl: a,
						androidInstallUrl: a,
						iosNativeUrl: o,
						androidNativeUrl: o,
						openByWeixin: "",
						isType: "PUSH"
					},
					n._sinaCallEvent.trigger("sina_open_native", e)
			},
			setPushInfo: function(n) {
				var e = this;
				try {
					n.id = this.id,
						e.isGetPushInfo = !0,
						e.pushInfo = n,
						e.insertPush(n),
						e.isAbleDisplay = e.enable_disp()
				} catch (t) {
					console.log(t)
				}
			},
			startPush: function(n) {
				var e = this
					, t = "undefined" != typeof n.waitTime && parseInt(n.waitTime) || 15;
				this.setPushInfo(n),
					setTimeout(function() {
						o = !0,
							e.openPush()
					}, 1e3 * t)
			},
			init: function(n) {
				this.setPushInfo(n)
			}
		});
		n.openPush = a.startPush.bind(a),
			n.closePush = a.closePush.bind(a),
			i()
	}(window, document)
} catch (e) {
	throw new Error(e + " ./Push.js")
}
try {
	!function(n, e) {
		function t(n) {
			try {
				var section = e.createElement("section")
					, o = null
					, a = null
					, r = ""
					, l = d()
					, c = l.isBlog
					, u = l.name
					, f = i(n)
					, h = {};
				h = f,
					h.id = w,
					n === b.top ? (r = Template.Banner.Top,
						e.body.insertBefore(section, e.body.firstChild)) : (r = Template.Banner.Bottom,
						e.body.appendChild(section)),
					section.innerHTML = runTemplate.tinyTemplateParser(r, {
						info: h
					}),
					a = section.querySelector(".close"),
					o = section.querySelector(".open"),
				a && (a.onclick = function() {
						c || s(k),
						section.parentNode && (section.parentNode.removeChild(section),
							_(u + "_close"))
					}
				),
				o && (o.onclick = function() {
						var n = (new Date).getTime();
						n - S > T && (S = n,
							p())
					}
				)
			} catch (g) {
				console.log(g)
			}
		}
		function i(n) {
			var e = {}
				, t = d()
				, i = t.isFinance
				, o = (t.isNews,
				t.isSports)
				, a = t.isBlog;
			return i ? e = {
				logo: "http://www.sinaimg.cn/cj/2015/0824/U10832P31DT20150824180645.png",
				title: "新浪财经",
				content: "新浪财经客户端，让赚钱更轻松",
				background: "http://www.sinaimg.cn/cj/2015/0824/U10832P31DT20150824180612.jpg",
				color: "#fdaf38"
			} : o ? (e = {
				logo: "http://n.sinaimg.cn/dae7ff0c/20151010/sport_logo.png",
				title: "新浪体育",
				content: "赛事直播 体坛资讯 尽在新浪体育",
				background: "http://n.sinaimg.cn/dae7ff0c/20151010/bg_1.jpg"
			},
				n == b.top ? e.color = "#b23636" : e.color = "#f84c4b") : a ? (e = {
				logo: "http://n.sinaimg.cn/dae7ff0c/20151021/blog.png",
				title: "新浪博客",
				content: "博客全新版本，手机同步写博文",
				background: "http://n.sinaimg.cn/dae7ff0c/20151010/bg_1.jpg"
			},
				e.color = "#E87B55") : (e = {
				logo: "http://n.sinaimg.cn/dae7ff0c/20151010/logo.jpg",
				title: "新浪新闻",
				content: "安装新浪新闻，随时知晓天下事",
				background: "http://n.sinaimg.cn/dae7ff0c/20151010/bg_1.jpg"
			},
				n == b.top ? e.color = "#b23636" : e.color = "#f84c4b"),
				e
		}
		function o() {
			var n = new Date;
			return n.toDateString()
		}
		function a(n) {
			try {
				var e = null ;
				if (e = JSON.parse(localStorage.sina_pro_cover),
					e && e[n]) {
					if (e[n] == o())
						return !1;
					delete e[n]
				}
				localStorage.sina_pro_cover = JSON.stringify(e)
			} catch (t) {}
			return !0
		}
		function s(n) {
			try {
				var e = localStorage.sina_pro_cover;
				e = JSON.parse(e),
				"[object Object]" != Object.prototype.toString.call(e) && (e = {}),
					e[n] = o(),
					localStorage.sina_pro_cover = JSON.stringify(e)
			} catch (t) {}
		}
		function r() {
			return -1 != window.location.href.indexOf(".d.html") ? !0 : !1
		}
		function l(n) {
			for (var e = window.location.href, t = n.split("|"), i = 0, o = t.length; o > i; i++)
				if (e.indexOf(t[i]) > -1)
					return !0;
			return !1
		}
		function c() {
			return "undefined" != typeof C.app && C.app || ""
		}
		function d(n) {
			var e = c()
				, t = n || {}
				, i = t.app == x.finance
				, o = t.app == x.news
				, a = t.app == x.sports
				, s = t.app == x.blog
				, r = t.app == x.top;
			return i || o || a || s || (r = l(y.top) || e == x.top,
				i = l(y.finance) || e == x.finance,
				o = l(y.news) || e == x.news,
				a = l(y.sports) || e == x.sports || r && l("/" + x.sports),
				s = l(y.blog) || e == x.blog),
			{
				name: i && x.finance || o && x.news || a && x.sports || s && x.blog,
				isFinance: i,
				isNews: o,
				isSports: a,
				isBlog: s
			}
		}
		function p(n) {
			var e, t = {}, i = d(n), o = i.isFinance, a = (i.isNews,
				i.isSports), s = i.isBlog, c = n || C, p = i.name, u = {}, f = "", h = "undefined" != typeof __docConfig && void 0 != __docConfig.__docId && __docConfig.__docId.length > 0, g = "undefined" != typeof n && void 0 != n.docid && n.docid.length > 0, m = "undefined" != typeof n && void 0 != c.url && c.url.length > 0, v = "undefined" != typeof n && void 0 != n.downloadk && n.downloadk, w = "undefined" != typeof n && void 0 != n.golink && n.golink.length > 0;
			if (o)
				t = {
					iosNativeUrl: "sinafinance://com.sina.stock.url.identifier?parameter=",
					androidNativeUrl: "sinafinance://type=1&",
					weixn: "http://a.app.qq.com/o/simple.jsp?pkgname=cn.com.sina.finance"
				},
					e = r() ? "144" : "145";
			else if (a) {
				var y = l("from=qudao")
					, b = r() && !y
					, x = "undefined" != typeof __docConfig && __docConfig.__sportsShortURL || "";
				t = b ? {
					iosNativeUrl: "sinasports://type=2&hash=" + x,
					androidNativeUrl: "sinasports://type=2&hash=" + x
				} : {
					iosNativeUrl: "sinasports://newsid=",
					androidNativeUrl: "sinasports://newsid="
				},
					e = r() ? "51" : "233",
					t.weixn = "http://a.app.qq.com/o/simple.jsp?pkgname=cn.com.sina.sports"
			} else if (s) {
				var U = "undefined" != typeof scope && "udetail" || "app"
					, k = ""
					, S = "undefined" != typeof scope && scope.bloguid || ""
					, T = "sinablog://blog.sina.com.cn?from=sinacn&jumptype=" + U + "&articleid=" + k + "&bloguid=" + S;
				t = {
					iosNativeUrl: T,
					androidNativeUrl: T,
					weixn: "http://a.app.qq.com/o/simple.jsp?pkgname=com.sina.sinablog"
				},
					e = "236"
			} else {
				var N = ""
					, I = "";
				h && (I = __docConfig.__docId + "-comos-news-cms",
					N = "newsid=" + I + "::"),
				m && (N = "url=" + c.url + "::"),
				g && (I = n.docid + "-comos-news-cms",
					N = "newsid=" + I + "::"),
					t = {
						iosNativeUrl: "sinanews://" + N,
						androidNativeUrl: "sinanews://" + N,
						weixn: "http://a.app.qq.com/o/simple.jsp?pkgname=com.sina.news"
					},
					e = "82"
			}
			v && (e = n.downloadk),
				f = "http://sina.cn/j/d.php?k=" + e,
			w && (f = n.golink,
				t.weixn = n.golink),
				u = {
					iosInstallUrl: f,
					androidInstallUrl: f,
					iosNativeUrl: t.iosNativeUrl,
					androidNativeUrl: t.androidNativeUrl,
					openByWeixin: t.weixn
				},
				window._sinaCallEvent.trigger("sina_open_native", u),
				_(p + "_open")
		}
		function u() {
			var n = window.location.href
				, e = l("from=qudao")
				, t = r() && !e
				, i = l("?")
				, o = i && n.match(/(http\:\/\/=?)(\S*)(?=\?)/)[2] || !i && n.match(/(http\:\/\/=?)(\S*)/)[2];
			return t && "undefined" != typeof __docConfig && __docConfig && __docConfig.__docId ? o = __docConfig.__docId : e && (o = n.replace("http://", "")),
				o
		}
		function f() {
			var n = location.href
				, e = !0;
			for (var t in U)
				if (e = -1 == n.indexOf(U[t]),
						!e)
					return !1;
			return e
		}
		function h() {
			var n = f()
				, e = "undefined" != typeof _FORBIDEN_APP_FLOAT && _FORBIDEN_APP_FLOAT
				, t = u()
				, i = a(t);
			return k = t,
			!e && i && n
		}
		function g() {
			var n = location.href
				, e = l("?")
				, t = e && n.match(/(=?)(\S*)(?=\?)/)[2] || !e && n.match(/(=?)(\S*)/)[2];
			return t
		}
		function _(e) {
			var t = {
				name: e,
				type: "",
				title: "",
				index: "",
				href: ""
			};
			("function" == typeof n.suds_count || n.suds_count) && n.suds_count && n.suds_count(t)
		}
		function m() {
			var n = (location.href,
			"undefined" != typeof __docConfig || "undefined" != typeof CMNT || document.querySelector(".foot_comment"))
				, e = h();
			C.url = C.docUrl || g();
			try {
				e && (n ? (C.position = N.TOP,
					t(b.top)) : (C.position = N.BOTTOM,
					t(b.bottom)))
			} catch (i) {
				console.log(i)
			}
		}
		function v() {
			try {
				_sinaCallEvent.on("sina_clear_native", clearFloat),
					_sinaCallEvent.on("sina_build_native", m)
			} catch (n) {
				console.log(n)
			}
		}
		var w = "_" + (new Date).getTime();
		window.clearFloat = function() {
			var n = document.querySelector("#" + w);
			n && n.parentNode.removeChild(n)
		}
		;
		var y = {
			finance: "finance.sina.cn",
			news: "news.sina.cn",
			sports: "sports.sina.cn",
			blog: "blog.sina.cn",
			top: "top.sina.cn"
		}
			, b = {
			top: "top",
			bottom: "bottom"
		}
			, x = {
			finance: "finance",
			news: "news",
			sports: "sports",
			blog: "blog",
			top: "top"
		}
			, U = ["wm=3206"]
			, k = null
			, S = 0
			, T = 1e4
			, N = {
			TOP: "0",
			BOTTOM: "1",
			OTHER: "2"
		}
			, C = "undefined" != typeof _SACONFIG && _SACONFIG || {};
		v()
	}(window, document)
} catch (e) {
	throw new Error(e + " ./FloatCom.js")
}
try {
	var Template = {
		Push: {
			Bottom: '<aside id="<% info.id %>" style="position:fixed;font-size:12px;left:-100%;width:100%;bottom:0;z-index:300; -webkit-transition: -webkit-transform .5s ease;transition:transform .5s ease;"><div style="clear: both;position: relative;background: rgba(0,144,247,.9);padding: 7px 10px;color: #fff;-webkit-animation: fadeIn 1s .2s ease both;line-height: 18px;"><div style="position: absolute;right: 10px;top: 50%;transform: translateY(-50%);-webkit-transform: translateY(-50%);z-index: 400;cursor: pointer;" class="close"><img src="http://n.sinaimg.cn/default/dae7ff0c/20151201/close_in.svg" width="20"></div><div style="overflow: hidden;background: url(http://n.sinaimg.cn/default/dae7ff0c/20151201/push_msg.svg) no-repeat left center;background-size: 25px;padding: 0 0 0 35px;height: 36px;margin-right:32px;" class="open"><h4 style="font-size: 14px;font-weight: normal;height: 36px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;-webkit-box-pack: center;"><% info.title %></h4></div></div></aside>'
		},
		Banner: {
			Bottom: '<div id="<% info.id %>" style="position: fixed; bottom: 0px; left: 0px; right: 0px; z-index: 9999; width: 100%; -webkit-user-select: none; background-color: rgba(0, 0, 0, 0.4);"><aside style="position: relative; padding: 0px 5px 0px 62px; height: 50px; text-decoration: none; color: rgb(255, 255, 255);"><img src="<% info.logo %>" style="position: absolute; top: 7px; left: 20px; width: 36px; border-radius: 5px;"><p style="margin: 0px; font-size: 16px; line-height: 16px; padding: 6px 0px 0px;"><% info.title %></p><p style="margin: 0px; font-size: 10px; line-height: 10px; opacity: 0.6; padding: 7px 0px 0px;"><% info.content %></p><a href="javascript:void(0)" style="right: 51px; position: absolute; top: 11px; width: 55px; height: 28px; color: rgb(255, 255, 255); font-weight: bold; font-size: 15px; line-height: 28px; text-align: center; background-color: <% info.color %>" class="open">打开</a></aside><div style="position: absolute; right: 0px; top: 0px; height: 50px; width: 45px; z-index: 10;" class="close"><i style="position:absolute; left:20px; top:15px; width:2px; height:17px; background-color:#fff; display:inline-block;-webkit-transform: rotate(-45deg);"></i><i style="position:absolute;left:20px;top:15px;width:2px;height:17px;background-color:#fff;display:inline-block;-webkit-transform: rotate(45deg);"></i></div></div>',
			Top: '<section id="<% info.id %>" style="padding: 5px 0px; width: 100%; background-image: url(<% info.background %>);"><aside style="position: relative; padding: 0px 5px 0px 62px; height: 50px; text-decoration: none; color: rgb(255, 255, 255);"><img src="<% info.logo %>" style="position: absolute; top: 7px; left: 20px; width: 36px; border-radius: 5px;"><p style="margin: 0px; font-size: 16px; line-height: 16px; padding: 6px 0px 0px;"><% info.title %></p><p style="margin: 0px; font-size: 10px; line-height: 10px; opacity: 0.6; padding: 7px 0px 0px;"><% info.content %></p><a href="javascript:void(0)" style="right: 12px; position: absolute; top: 11px; width: 55px; height: 28px; color: rgb(255, 255, 255); font-weight: bold; font-size: 15px; line-height: 28px; text-align: center; background-color: <% info.color %>" class="open">打开</a></aside></section>'
		}
	}
} catch (e) {
	throw new Error(e + " ./Template.js")
}
try {
	!function(n, e) {
		var t = {
			getType: function(n) {
				var e = typeof n;
				return "object" === e ? Object.prototype.toString.call(n).match(/\[object (.*)\]/) ? RegExp.$1.toLowerCase() : "other" : e
			},
			tinyTemplateParser: function(n, e) {
				var t = this.getType;
				return "string" === t(n) ? n.replace(/<%\s?([\[\]\.A-Za-z0-9_]+)\s?%>/g, function(n, i) {
					var o = e
						, a = !1;
					return i && o && i.split(".").forEach(function(n) {
						var e;
						n && !a && (e = n.match(/(\w+)(\[(\d)+\])?/),
						e && (o[e[1]] ? (o = o[e[1]],
						e[2] && e[3] && (o[e[3]] ? o = o[e[3]] : a = !0)) : a = !0))
					}),
						a || o === e ? "" : "string" !== t(o) ? JSON.stringify(o) : o
				}) : ""
			}
		};
		window.runTemplate = t
	}(window, document)
} catch (e) {
	throw new Error(e + " ./Render.js")
}
try {
	!function(n, e) {
		function t(n) {
			var t = e.getElementsByTagName("body")[0]
				, i = e.createElement("script");
			return i.src = n,
				i.className = "j_addscript",
				i.charset = "utf-8",
				t.appendChild(i),
				!1
		}
		function i(n) {
			var e = 0
				, t = n || {};
			if (n instanceof Object)
				for (var i in t)
					e++;
			return e > 0 ? !1 : !0
		}
		function o() {
			var n = "";
			return n = w.sports || w.t_sports ? p.sports : w.finance || w.t_finance ? p.finance : w.blog || w.t_blog ? p.blog : p.news,
			"news" == typeof h.app && (n = p.news),
				n
		}
		function a(n, e) {
			var t = p
				, i = {};
			switch (n) {
				case t.news:
					try {
						if (e && "success" == e.message) {
							var o = JSON.parse(e.data)
								, a = o && o.data;
							"undefined" != typeof a.title && "undefined" != typeof a.artid && "undefined" != typeof a.url && (i.title = a.title,
								i.artid = a.artid,
								i.url = a.url,
								i.waitTime = _.__waitTime)
						} else
							console.log(e.message)
					} catch (s) {
						console.log(s)
					}
					break;
				case t.finance:
				case t.sports:
				case t.blog:
			}
			return i
		}
		function s(e) {
			_.__isPush && n._sinaCallEvent.trigger("sina_open_push", e)
		}
		function r() {
			_.__isBanner && n._sinaCallEvent.trigger("sina_build_native")
		}
		function l() {
			var n = ""
				, e = u;
			return y = o(),
				_.__isPush && y.indexOf(f) > -1 ? n = e.push : w.share || (n = e.banner),
				n
		}
		function c() {
			var n = _.__showType || l()
				, e = u;
			switch (n) {
				case e.push:
					t(v.news);
					break;
				case e.banner:
					r()
			}
		}
		function d() {
			n._sinaCallEvent.on("sina_init_show", initShow),
				n._sinaCallEvent.on("sina_clear_all_show", clearAllShow),
				n._sinaCallEvent.on("sina_reset_push_show", resetPush),
			_.__isAllNotShow || n._sinaCallEvent.trigger("sina_init_show")
		}
		var p = {
			news: "news",
			sports: "sports",
			finance: "finance",
			top: "top"
		}
			, u = {
			push: "push",
			banner: "banner"
		}
			, f = [p.news]
			, h = "undefined" != typeof _SACONFIG && _SACONFIG || {}
			, g = "undefined" != typeof __pushConfig && __pushConfig || {}
			, _ = {
			__showType: "undefined" != typeof g.__showType && g.__showType,
			__isAllNotShow: "undefined" != typeof g.__isAllNotShow && !!g.__isAllNotShow,
			__isPush: "undefined" != typeof g.__isPush || !!g.__isPush || g.__showType == u.push,
			__isBanner: "undefined" == typeof g.__isBanner || !!g.__isBanner || g.__showType == u.banner,
			__waitTime: "undefined" != typeof g.__pushWaitTime && parseInt(g.__pushWaitTime) || 5
		}
			, m = document.location.href
			, v = {
			news: "http://so.sina.cn/push.d.json?jsoncallback=updateInfo"
		}
			, w = {
			home: "home" == typeof h.domain,
			index: "undefined" != typeof scope && "undefined" != typeof scope.channel_id,
			index_2: "undefined" != typeof scope && "undefined" == typeof scope.channel_id,
			article: "undefined" != typeof __docConfig && "undefined" != typeof __docConfig.__docId,
			qudao: m.match(/(\S*)(&from=qudao)(\S*)/),
			share: m.match(/(\S*)(share.d.html)(\S*)(&from=qudao)(\S*)/),
			top: m.match(/(\S*)(:\/\/top.sina.cn)(\S*)/),
			news: m.match(/(\S*)(:\/\/news.sina.cn)(\S*)/),
			sports: m.match(/(\S*)(:\/\/sports.sina.cn)(\S*)/),
			finance: m.match(/(\S*)(:\/\/finance.sina.cn)(\S*)/),
			blog: m.match(/(\S*)(:\/\/blog.sina.cn)(\S*)/),
			t_news: m.match(/(\S*)(:\/\/top.sina.cn\/news)(\S*)/),
			t_sports: m.match(/(\S*)(:\/\/top.sina.cn\/sports)(\S*)/),
			t_finance: m.match(/(\S*)(:\/\/top.sina.cn\/finance)(\S*)/),
			t_blog: m.match(/(\S*)(:\/\/top.sina.cn\/blog)(\S*)/)
		}
			, y = p.news;
		window.updateInfo = function(n) {
			var e = a(y, n)
				, t = i(n)
				, o = i(e);
			t || o ? r() : s(e)
		}
			,
			window.initShow = function() {
				c()
			}
			,
			window.clearAllShow = function() {
				n._sinaCallEvent.trigger("sina_close_push", !0),
					n._sinaCallEvent.trigger("sina_clear_native")
			}
			,
			window.resetPush = function() {
				n._sinaCallEvent.trigger("sina_close_push", !1)
			}
			,
			d()
	}(window, document)
} catch (e) {
	throw new Error(e + " ./switchProxy.js")
}
//# sourceMappingURL=index.js.map
