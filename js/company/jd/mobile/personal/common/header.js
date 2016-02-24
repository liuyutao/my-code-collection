/**
 * ����������
 * ʹ�÷���:
 * ע���¼���
 * ������Դ��  ���ã�
 *
 * Created by LiuYuTao on 2015/9/25.
 */

(function() {
		MCommonHeaderBottom = function(d) {
			var a = "1.02";
			var f = "";
			var e = {
				useDefaultImp: true,
				css: ["http://st.360buyimg.com/common/commonH_B/css/header.css?v=" + a],
				js: ["http://st.360buyimg.com/common/commonH_B/js/m_common.js?v=" + a, "http://st.360buyimg.com/m/js/2014/module/plugIn/downloadAppPlugIn.js?v=jd2015030522", ]
			};
			if (d) {
				if (typeof (d.useDefaultImp) == "boolean") {
					e.useDefaultImp = d.useDefaultImp
				}
				if (d.css) {
					e.css = d.css
				}
				if (d.js) {
					e.js = d.js
				}
			}
			var c = {
				_isIncludedCss: false,
				debug: false,
				getSid: function(i, j) {
					if (this._isNotBlank(j)) {
						return i + "sid=" + j
					}
					return ""
				},
				templeteOutput: function(k) {
					var i = k.templete;
					var m = k.param;
					var j = i;
					for (var l in m) {
						j = j.replace(new RegExp("{" + l + "}","g"), m[l])
					}
					return j
				},
				hasClass: function(j, i) {
					return j.className.match(new RegExp("(\\s|^)" + i + "(\\s|$)"))
				},
				addClass: function(j, i) {
					if (!this.hasClass(j, i)) {
						j.className += " " + i
					}
				},
				removeClass: function(k, i) {
					if (this.hasClass(k, i)) {
						var j = new RegExp("(\\s|^)" + i + "(\\s|$)");
						k.className = k.className.replace(j, " ")
					}
				},
				removeClassBatch: function(k, i) {
					for (var j in k) {
						this.removeClass(this.getElementById(k[j]), i)
					}
				},
				includeCss: function() {
					if (!this._isIncludedCss) {
						for (var j = 0; j < e.css.length; j++) {
							this._includeCss(e.css[j])
						}
						this._isIncludedCss = true
					}
				},
				innerHtml: function(i) {
					var k = i.sid;
					var n = i.htmlStr;
					var l = i.prefix;
					var j = i.divId;
					var m = this.templeteOutput({
						templete: n,
						param: {
							prefix: l,
							sid: k
						}
					});
					this.getElementById(j).innerHTML = m
				},
				getElementById: function(i) {
					return document.getElementById(i)
				},
				addEvent: function(k, j, i) {
					var l = this.getElementById(k);
					if (l) {
						l.addEventListener(j, i, false)
					}
				},
				removeEvent: function(k, j, i) {
					var l = this.getElementById(k);
					if (l) {
						l.removeEventListener(j, i, false)
					}
				},
				divShow: function(i) {
					i.style.display = ""
				},
				divHide: function(i) {
					i.style.display = "none"
				},
				loadJS: function(i, l) {
					var k = document.createElement("script");
					k.type = "text/javascript";
					k.src = i;
					k.onload = k.onreadystatechange = function() {
						if (this.readyState && this.readyState == "loading") {
							return
						}
						l()
					}
					;
					k.onerror = function() {
						j.removeChild(k);
						l()
					}
					;
					var j = document.getElementsByTagName("head")[0];
					j.appendChild(k)
				},
				runFunction: function(i) {
					if (i) {
						i()
					}
				},
				loadDownloadAppPlugIn: function(i) {
					if (e.useDefaultImp) {
						this.loadJS(e.js[1], function() {
								i()
							}
						)
					}
				},
				executeDefaultFunCtion: function(i, j) {
					if (i && e.useDefaultImp) {
						if (j) {
							i(j)
						} else {
							i()
						}
					}
				},
				_includeCss: function(k) {
					var m = function(p, o) {
							for (var n = 0; n < p.length; n++) {
								if (p[n].href && p[n].href.indexOf(o) != -1) {
									return true
								}
							}
							return false
						}
						;
					var i = document.getElementsByTagName("link");
					if (m(i, k)) {
						return true
					}
					var l = document.createElement("link");
					l.setAttribute("rel", "stylesheet");
					l.setAttribute("type", "text/css");
					l.setAttribute("charset", "utf-8");
					l.setAttribute("href", k);
					var j = document.getElementsByTagName("head")[0];
					j.appendChild(l)
				},
				_isNotBlank: function(i) {
					if (i && i != "") {
						return true
					}
					return false
				},
				printDeugInfo: function(i) {
					if (this.debug) {
						console.log(i)
					}
				}
			};
			var h = {
				shortcutIds: [],
				args: {
					hrederId: "m_common_header",
					sid: "",
					isShowShortCut: false,
					selectedShortCut: ""
				},
				create: function(k) {
					this.args = k;
					if (!this._validate()) {
						return false
					}
					var j = c.getSid("?", this.args.sid);
					var n = this.getTempleteHtml();
					var m = this.args.hrederId;
					var i = this.args.hrederId;
					this._initShortcutId(m);
					c.innerHtml({
						divId: i,
						sid: j,
						htmlStr: n,
						prefix: m
					});
					this._setCutrrentSelectedSyle(this.args.selectedShortCut);
					this._initShortCutShow(this.args.isShowShortCut, m);
					var l = this;
					c.addEvent(m + "_goback", "click", function() {
							c.runFunction(l.args.onClickGoback);
							c.executeDefaultFunCtion(pageBack)
						}
					);
					c.addEvent(m + "_jdkey", "click", function() {
							c.runFunction(l.args.onClickJdkey);
							c.executeDefaultFunCtion(l.shortCutShowHide, m)
						}
					);
					c.addEvent(m + "_shortcut_m_index", "click", function() {
							c.runFunction(l.args.onClickIndex)
						}
					);
					c.addEvent(m + "_shortcut_category_search", "click", function() {
							c.runFunction(l.args.onClickSearch)
						}
					);
					c.addEvent(m + "_shortcut_p_cart", "click", function() {
							c.runFunction(l.args.onClickCart)
						}
					);
					c.addEvent(m + "_shortcut_h_home", "click", function() {
							c.runFunction(l.args.onClickHome)
						}
					)
				},
				getShortcutId: function(i) {
					return this.shortcutIds[i - 1]
				},
				getTempleteHtml: function() {
					var j = '<header class="jd-header">    <div class="jd-header-bar">        <div id="{prefix}_goback" class="jd-header-icon-back"><span></span></div>        <div class="jd-header-title">{title}</div>        <div report-eventid="MCommonHead_NavigateButton"  report-eventparam="" page_name="' + f + '" id="{prefix}_jdkey" class="jd-header-icon-shortcut J_ping"><span></span></div>    </div>    <ul id="{prefix}_shortcut" class="jd-header-shortcut" style="display: none">        <li id="{prefix}_shortcut_m_index">            <a class="J_ping" report-eventid="MCommonHead_home"  report-eventparam="" page_name="' + f + '" href="http://m.jd.com/index.html{sid}">                <span class="shortcut-home"></span>                <strong>��ҳ</strong>            </a>        </li>        <li class="J_ping" report-eventid="MCommonHead_CategorySearch"  report-eventparam="" page_name="' + f + '" id="{prefix}_shortcut_category_search">            <a href="http://m.jd.com/category/all.html{sid}">                <span class="shortcut-categories"></span>                <strong>��������</strong>            </a>        </li>        <li class="J_ping" report-eventid="MCommonHead_Cart"  report-eventparam="" page_name="' + f + '"  id="{prefix}_shortcut_p_cart">            <a href="http://p.m.jd.com/cart/cart.action{sid}" id="html5_cart">                <span class="shortcut-cart"></span>                <strong>���ﳵ</strong>            </a>        </li>        <li id="{prefix}_shortcut_h_home">            <a class="J_ping" report-eventid="MCommonHead_MYJD"  report-eventparam="" page_name="' + f + '"  href="http://home.m.jd.com/myJd/home.action{sid}">                <span class="shortcut-my-account"></span>                <strong>�ҵľ���</strong>            </a>        </li>    </ul></header>';
					var i = "";
					if (this.args.title) {
						i = this.args.title
					}
					j = c.templeteOutput({
						templete: j,
						param: {
							title: i
						}
					});
					return j
				},
				shortCutShowHide: function(i) {
					var j = c.getElementById(i + "_shortcut");
					var k = j.style.display;
					if (k == "none") {
						c.divShow(j)
					} else {
						c.divHide(j)
					}
				},
				_initShortcutId: function(j) {
					var i = [j + "_shortcut_m_index", j + "_shortcut_category_search", j + "_shortcut_p_cart", j + "_shortcut_h_home"];
					this.shortcutIds = i
				},
				_initShortCutShow: function(j, i) {
					var k = c.getElementById(i + "_shortcut");
					if (j) {
						c.divShow(k)
					} else {
						c.divHide(k)
					}
				},
				_setCutrrentSelectedSyle: function(i) {
					c.removeClassBatch(this.shortcutIds, "current");
					if (c._isNotBlank(this.getShortcutId(i))) {
						c.addClass(c.getElementById(this.getShortcutId(i)), "current")
					}
				},
				_validate: function() {
					var i = true;
					if (!this._isHasHeaderId()) {
						i = false
					}
					return i
				},
				_isHasHeaderId: function() {
					var i = false;
					if (c.getElementById(this.args.hrederId)) {
						i = true
					} else {
						c.printDeugInfo("����ȷƴд�����ͨ��ͷID.")
					}
					return i
				}
			};
			var b = {
				args: {
					bottomId: "m_common_bottom",
					sid: "",
					isShowBottom: true,
					footerPlatforms: ""
				},
				create: function(k) {
					this.args = k;
					if (!this._validate()) {
						return false
					}
					var j = c.getSid("?", this.args.sid);
					var n = this.getTempleteHtml(this.args);
					var m = this.args.bottomId;
					var i = this.args.bottomId;
					c.innerHtml({
						divId: i,
						htmlStr: n,
						prefix: m
					});
					var l = this;
					this._addFooterPlatformEvent()
				},
				getTempleteHtml: function(i) {
					var j = '<footer id="{prefix}_jd_footer" class="jd-footer">' + this._getLinksHtml(i) + this._getPlatformsHtml(i) + this._getCopyrightHtml(i) + "</footer>";
					return j
				},
				_getLinksHtml: function(i) {
					var k = "";
					if (i.pin && i.pin != "") {
						k = '        <li class=""><a class="J_ping" report-eventid="MCommonHTail_Account"  report-eventparam="" page_name="' + f + '" rel="nofollow"  href="http://home.m.jd.com/myJd/home.action{sid}">{pin}</a></li>        <li><a class="J_ping" report-eventid="MCommonHTail_Exit"  report-eventparam="" page_name="' + f + '" rel="nofollow" href="https://passport.m.jd.com/user/logout.action{sid}">�˳�</a></li>'
					} else {
						k = '        <li class=""><a class="J_ping" report-eventid="MCommonHTail_Login"  report-eventparam="" page_name="' + f + '" rel="nofollow" href="https://passport.m.jd.com/user/login.action{sid}">��¼</a></li>        <li><a class="J_ping" report-eventid="MCommonHTail_Register"  report-eventparam="" page_name="' + f + '" rel="nofollow"  href="http://passport.m.jd.com/register/mobileRegister.action{sid}">ע��</a></li>'
					}
					var m = '	<div class="jd-1px-line-up"></div>    <ul class="jd-footer-links">' + k + '        <li><a class="J_ping" report-eventid="MCommonHTail_Feedback"  report-eventparam="" page_name="' + f + '" rel="nofollow" href="http://m.jd.com/showvote.html{sid}">����</a></li>        <li><a class="J_ping" report-eventid="MCommonHTail_ToTop"  report-eventparam="" page_name="' + f + '" rel="nofollow" href="#top">�ص�����</a></li>    </ul>';
					var j = c.getSid("?", i.sid);
					var l = i.pin;
					m = c.templeteOutput({
						templete: m,
						param: {
							sid: j,
							pin: l
						}
					});
					return m
				},
				_getPlatformsHtml: function(j) {
					var n = this.args.bottomId;
					var q = j.footerPlatforms;
					if (q.length <= 0) {
						return ""
					}
					var p = "";
					var m = "";
					for (var l = 0; l < q.length; l++) {
						m = q[l];
						var k = "";
						if (m.href) {
							k = "href='" + m.href + "'"
						}
						if (m.name == "standard") {
							p += '<li id="{prefix}_standard"  class="jd-footer-icon-standard"><a ' + k + ">��׼��</a></li>"
						} else {
							if (m.name == "touchscreen") {
								p += '<li id="{prefix}_touchscreen" class="jd-footer-icon-touchscreen current"><a ' + k + ' class="J_ping" report-eventid="MCommonHTail_TouchEdition"  report-eventparam="" page_name="' + f + '">������</a></li>'
							} else {
								if (m.name == "pc") {
									p += '<li id="{prefix}_pc" class="jd-footer-icon-pc"><a ' + k + ' class="J_ping" report-eventid="MCommonHTail_PCEdition"  report-eventparam="" page_name="' + f + '">���԰�</a></li>'
								} else {
									if (m.name == "apps") {
										p += '<li id="{prefix}_apps"  class="jd-footer-icon-apps"><a class="badge" "' + k + ' class="J_ping" report-eventid="MCommonHTail_ClientApp"  report-eventparam="" page_name="' + f + '">�ͻ���</a></li>'
									}
								}
							}
						}
					}
					var o = '<div class="jd-1px-line-up"></div>    <ul class="jd-footer-platforms">' + p + "    </ul>";
					return o
				},
				_getCopyrightHtml: function(i) {
					var j = '<div class="jd-1px-line-up"></div><div class="jd-footer-copyright">Copyright ? 2012-2015 ����JD.com ��Ȩ���� </div>';
					return j
				},
				_initDefaultFooterPlatforms: function() {
					this.args.footerPlatforms = this.platformEnum(this.args.sid).enum4
				},
				_addFooterPlatformEvent: function() {
					var j = this;
					var l = this.args.footerPlatforms;
					var k = this.args.bottomId;
					var i = function(n, m) {
							var o = n + "_" + m;
							if (c.getElementById(o)) {
								c.addEvent(o, "click", function() {
										for (var p = 0; p < l.length; p++) {
											if (l[p].name == m) {
												c.runFunction(l[p].onClickX);
												break
											}
										}
									}
								)
							}
						}
						;
					i(k, "standard");
					i(k, "pc");
					i(k, "touchscreen");
					i(k, "apps");
					c.loadDownloadAppPlugIn(function() {
							var n = null ;
							var m = "";
							if (document.getElementById(k + "_apps")) {
								if (j.args.downloadAppPlugIn) {
									if (j.args.downloadAppPlugIn.parameters) {
										n = j.args.downloadAppPlugIn.parameters
									}
									if (j.args.downloadAppPlugIn.otherApp) {
										m = j.args.downloadAppPlugIn.otherApp
									}
									$("#" + k + "_apps").downloadAppPlugIn(n, m)
								} else {
									$("#" + k + "_apps").downloadAppPlugIn()
								}
							}
						}
					)
				},
				_initBottomShow: function(j, i) {
					var k = c.getElementById(i + "_jd_footer");
					if (j) {
						c.divShow(k)
					} else {
						c.divHide(k)
					}
				},
				_validate: function() {
					var i = true;
					if (!this._isHasBottomId()) {
						i = false
					}
					return i
				},
				_isHasBottomId: function() {
					var i = false;
					if (c.getElementById(this.args.bottomId)) {
						i = true
					} else {
						c.printDeugInfo("����ȷƴд�����ͨ��βID.")
					}
					return i
				}
			};
			var g = {
				args: {
					tipId: "m_common_tip",
					sid: "",
					isShowTip: true,
					isfloat: true,
					onClickTrynow: function() {}
				},
				create: function(k) {
					this.args = k;
					if (!this._validate()) {
						return false
					}
					var l = window.localStorage ? true : false;
					if (l && this.args.isAlwayShow) {
						localStorage.removeItem("downCloseDate")
					}
					var j = c.getSid("?", this.args.sid);
					var o = this.getTempleteHtml(k);
					var n = this.args.tipId;
					var i = this.args.tipId;
					c.innerHtml({
						divId: i,
						sid: j,
						htmlStr: o,
						prefix: n
					});
					this._setFloat(this.args.isfloat, n);
					var m = this;
					c.addEvent(n + "_jd_download_tip_x", "click", function() {
							c.runFunction(m.args.onClickTipX)
						}
					);
					c.addEvent(n + "_trynow", "click", function() {
							c.runFunction(m.args.onClickTrynow)
						}
					);
					if (!this.args.isUseCustomDownloadApp) {
						c.loadDownloadAppPlugIn(function() {
								var q = null ;
								var p = "";
								if (document.getElementById(n + "_trynow")) {
									if (m.args.downloadAppPlugIn) {
										if (m.args.downloadAppPlugIn.parameters) {
											q = m.args.downloadAppPlugIn.parameters
										}
										if (m.args.downloadAppPlugIn.otherApp) {
											p = m.args.downloadAppPlugIn.otherApp
										}
										$("#" + n + "_trynow").downloadAppPlugIn(q, p)
									} else {
										$("#" + n + "_trynow").downloadAppPlugIn()
									}
									$("#" + n + "_jd_download_tip_x").downloadAppPlugInClose(n + "_jd_download_tip")
								}
							}
						)
					}
				},
				getTempleteHtml: function(k) {
					var j = "�ͻ����׵�</br>��79Ԫ��79Ԫ";
					var l = "";
					if (k.copyWrite) {
						j = k.copyWrite
					}
					if (k.location) {
						var i = k.location;
						l = ' style = "' + localStyle + '"'
					}
					var m = '<div id="{prefix}_jd_download_tip" ' + l + ' class="tryme onfoot">	    <div>	        <div id="{prefix}_jd_download_tip_x" class="later"></div>	        <a id="{prefix}_trynow" href="#" class="trynow"></a>	        <span>' + j + "</span>	    </div>	</div>";
					return m
				},
				_setFloat: function(j, i) {
					var k = c.getElementById(i + "_jd_download_tip");
					if (j) {
						c.addClass(k, "onfoot")
					} else {
						c.removeClass(k, "onfoot")
					}
				},
				_showTip: function(j, i) {
					var k = c.getElementById(i + "_jd_download_tip");
					if (j) {
						c.divShow(k)
					} else {
						c.divHide(k)
					}
				},
				_validate: function() {
					var i = true;
					if (!this._isHasTipId()) {
						i = false
					}
					return i
				},
				_isHasTipId: function() {
					var i = false;
					if (c.getElementById(this.args.tipId)) {
						i = true
					} else {
						c.printDeugInfo("����ȷƴд�����ͨ����ʾID.")
					}
					return i
				}
			};
			c.loadJS(e.js[0], function() {}
			);
			c.includeCss();
			return {
				header: function(i) {
					h.create(i)
				},
				bottom: function(i) {
					b.create(i)
				},
				jdTip: function(i) {
					g.create(i)
				},
				platformEnum: function(k, i) {
					var j = "";
					if (i) {
						j = c.getSid("&", i)
					}
					return {
						enum0: [],
						enum1: [{
							id: 4,
							name: "apps",
							href: "",
							onClickX: function() {}
						}],
						enum2_1: [{
							id: 2,
							name: "touchscreen",
							href: "",
							onClickX: function() {}
						}, {
							id: 4,
							name: "apps",
							href: "",
							onClickX: function() {}
						}],
						enum3: [{
							id: 1,
							name: "standard",
							href: "http://wap.jd.com/index.html?v=w" + j,
							onClickX: function() {}
						}, {
							id: 2,
							name: "touchscreen",
							href: "",
							onClickX: function() {}
						}, {
							id: 4,
							name: "apps",
							href: "",
							onClickX: function() {}
						}],
						enum3_1: [{
							id: 4,
							name: "apps",
							href: "",
							onClickX: function() {}
						}, {
							id: 2,
							name: "touchscreen",
							href: "",
							onClickX: function() {}
						}, {
							id: 3,
							name: "pc",
							href: "",
							onClickX: function() {
								skip(k)
							}
						}],
						enum3_2: [{
							id: 3,
							name: "pc",
							href: "",
							onClickX: function() {
								skip(k)
							}
						}, {
							id: 2,
							name: "touchscreen",
							href: "",
							onClickX: function() {}
						}, {
							id: 4,
							name: "apps",
							href: "",
							onClickX: function() {}
						}],
						enum4: [{
							id: 1,
							name: "standard",
							href: "http://wap.jd.com/index.html?v=w" + j,
							onClickX: function() {}
						}, {
							id: 2,
							name: "touchscreen",
							href: "",
							onClickX: function() {}
						}, {
							id: 3,
							name: "pc",
							href: "",
							onClickX: function() {
								skip(k)
							}
						}, {
							id: 4,
							name: "apps",
							href: "",
							onClickX: function() {}
						}]
					}
				},
				version: a
			}
		}
	}
)();
