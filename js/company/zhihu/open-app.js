/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/2/25.
 */
var isAndroid = /Android/.test(window.navigator.userAgent)
	, Kv = z.lB.lb
	, isWeiXin = /MicroMessenger/.test(window.navigator.userAgent)
	, isWeibo = /Weibo/.test(window.navigator.userAgent)
	, isMobile = /Mobile/.test(window.navigator.userAgent) && /CriOS/.test(window.navigator.userAgent);
var Kl = null;


var bindOpenAppBtn = function () {
		(0,
			window.$)("#js-open-in-app").on("click", function () {
			var a;
			if (a = (a = (0, window.$)('meta[name\x3d"apple-itunes-app"]').attr("content")) && a.replace(/,\s*/, "\x26"))
				a = new z.Uo(a),
					isWeiXin || isWeibo ? (a.add("origin", window.location.href),
						window.location.href = "/openinapp_instruction?" + a.toString()) : Lt(a.get("app-argument"));
			z.Y("app-promotion", "click_zhihu_ios_open_dl_link", "header_not_logged_in")
		});
		var a = Yo();
		"/openinapp_instruction" === a.Pe && (0,
			window.$)(".openinapp-instruction-page").data("open") &&
		(a = a.kd(),
		a.ib() && Lt(a.get("app-argument")))
	}
	;
z.Uo = function (a, b, c) {
	this.Ka = this.Kb = null;
	this.de = a || null;
	this.Ee = !!c
}
;

var Lt = function (a) {
		if (a)
			if (-1 === a.indexOf("zhihu://") && (a = "zhihu://" + a),
					isAndroid)
				Nt(a);

			else if (window.location.href = a,
				Ot && !(0 <= pb(Pt, 9))) {
				var b = !1;
				window.setTimeout(function () {
					b = !0;
					window.location.href = "http://api.zhihu.com/client/download?ct\x3dtop_right_corner\x26utm_source\x3dtop_right_corner\x26utm_medium\x3dmobile_web\x26utm_campaign\x3ddownloadlink"
				}, 200);
				window.setTimeout(function () {
					b && window.location.reload()
				}, 1E3)
			}
	}
	;


z.Y = function (a, b, c, d, f) {
	"feed" === a && z.gb(window.location.href, "topstory") && (a = "topstory");
	var g = (0,
		window.$)("#zh-question-list");
	"feed" === a && g.length && "topstory" === g.attr("data-feedtype") && (a = "topstory");
	mt.track(a, b, c, d, !!f);
	z.Ck(a, b, c, d, !!f);
	Pn && window.console && window.console.log("trackEvent(new)", z.Vb(arguments))
}
;

var Yo = function () {
		var a = window.location;
		return a instanceof z.Oo ? a.clone() : new z.Oo(a, void 0)
	}
	;