/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/2/24.
 */
PLOVR_MODULE_INFO = {
	"page-misc": ["common"],
	"common": [],
	"page-profile": ["common"],
	"richtexteditor": ["common"],
	"page-index": ["common"],
	"page-roundtable": ["common"],
	"page-settings": ["common"],
	"page-main": ["common"]
};
PLOVR_MODULE_URIS = {
	"page-misc": "/static/revved/-/js/closure/page-misc.800bca54.js",
	"common": "/static/revved/-/js/closure/common.05e2ebf2.js",
	"page-profile": "/static/revved/-/js/closure/page-profile.07cdd5d8.js",
	"richtexteditor": "/static/revved/-/js/closure/richtexteditor.03d72e52.js",
	"page-index": "/static/revved/-/js/closure/page-index.100a3277.js",
	"page-roundtable": "/static/revved/-/js/closure/page-roundtable.f3097cf2.js",
	"page-settings": "/static/revved/-/js/closure/page-settings.f11060cd.js",
	"page-main": "/static/revved/-/js/closure/page-main.0e5edbf8.js"
};
PLOVR_MODULE_USE_DEBUG_MODE = false;
var __z_z__ = {};
(function(z) {
		var aa = function(a) {
			return function() {
				return ba[a].apply(this, arguments)
			}
		}
			, ba, ea, ga, hf, ya, Ga;
		z.ca = function(a, b) {
			return ba[a] = b
		}
		;
		var da = function() {
				ea.Symbol || (ea.Symbol = fa);
				da = function() {}
			}
			;
		var fa = function(a) {
				return "jscomp_symbol_" + a + ga++
			}
			;
		var ha = function() {
				da();
				ea.Symbol.iterator || (ea.Symbol.iterator = ea.Symbol("iterator"));
				ha = function() {}
			}
			;
		z.ia = function(a) {
			ha();
			if (a[ea.Symbol.iterator])
				return a[ea.Symbol.iterator]();
			if (!(a instanceof Array || "string" == typeof a || a instanceof String))
				throw new TypeError(a + " is not iterable");
			var b = 0;
			return {
				next: function() {
					return b == a.length ? {
						done: !0
					} : {
						done: !1,
						value: a[b++]
					}
				}
			}
		}
		;
		var ja = function(a) {
				for (var b, c = []; !(b = a.next()).done; )
					c.push(b.value);
				return c
			}
			;
		z.ka = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			for (var d in b)
				if (ea.Object.defineProperties) {
					var f = ea.Object.getOwnPropertyDescriptor(b, d);
					void 0 !== f && ea.Object.defineProperty(a, d, f)
				} else
					a[d] = b[d]
		}
		;
		z.l = function(a) {
			return void 0 !== a
		}
		;
		z.p = function() {}
		;
		var la = function() {
				throw Error("unimplemented abstract method");
			}
			;
		z.ma = function(a) {
			a.Y = function() {
				return a.Hj ? a.Hj : a.Hj = new a
			}
		}
		;
		var na = function(a) {
				var b = typeof a;
				if ("object" == b)
					if (a) {
						if (a instanceof Array)
							return "array";
						if (a instanceof Object)
							return b;
						var c = Object.prototype.toString.call(a);
						if ("[object Window]" == c)
							return "object";
						if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
							return "array";
						if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
							return "function"
					} else
						return "null";
				else if ("function" == b && "undefined" == typeof a.call)
					return "object";
				return b
			}
			;
		z.oa = function(a) {
			return "array" == na(a)
		}
		;
		z.pa = function(a) {
			var b = na(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		}
		;
		z.qa = function(a) {
			return "string" == typeof a
		}
		;
		var sa = function(a) {
				return "number" == typeof a
			}
			;
		z.ta = function(a) {
			return "function" == na(a)
		}
		;
		z.ua = function(a) {
			var b = typeof a;
			return "object" == b && null  != a || "function" == b
		}
		;
		var wa = function(a) {
				return a[z.xa] || (a[z.xa] = ++ya)
			}
			;
		var Aa = function(a, b, c) {
				return a.call.apply(a.bind, arguments)
			}
			;
		var Ba = function(a, b, c) {
				if (!a)
					throw Error();
				if (2 < arguments.length) {
					var d = Array.prototype.slice.call(arguments, 2);
					return function() {
						var c = Array.prototype.slice.call(arguments);
						Array.prototype.unshift.apply(c, d);
						return a.apply(b, c)
					}
				}
				return function() {
					return a.apply(b, arguments)
				}
			}
			;
		z.r = function(a, b, c) {
			z.r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Aa : Ba;
			return z.r.apply(null , arguments)
		}
		;
		z.Ca = function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = c.slice();
				b.push.apply(b, arguments);
				return a.apply(this, b)
			}
		}
		;
		z.Da = function(a, b) {
			for (var c in b)
				a[c] = b[c]
		}
		;
		var Fa = function(a) {
				if (z.t.execScript)
					z.t.execScript(a, "JavaScript");
				else if (z.t.eval) {
					if (null  == Ga)
						if (z.t.eval("var _evalTest_ \x3d 1;"),
							"undefined" != typeof z.t._evalTest_) {
							try {
								delete z.t._evalTest_
							} catch (d) {}
							Ga = !0
						} else
							Ga = !1;
					if (Ga)
						z.t.eval(a);
					else {
						var b = z.t.document
							, c = b.createElement("SCRIPT");
						c.type = "text/javascript";
						c.defer = !1;
						c.appendChild(b.createTextNode(a));
						b.body.appendChild(c);
						b.body.removeChild(c)
					}
				} else
					throw Error("goog.globalEval not available");
			}
			;
		z.u = function(a, b) {
			b && (a = a.replace(/\{\$([^}]+)}/g, function(a, d) {
				return null  != b && d in b ? b[d] : a
			}));
			return a
		}
		;
		z.Ha = function(a, b) {
			var c = a.split(".")
				, d = z.t;
			c[0] in d || !d.execScript || d.execScript("var " + c[0]);
			for (var f; c.length && (f = c.shift()); )
				!c.length && z.l(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
		}
		;
		z.v = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.o = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.MW = function(a, c, g) {
				for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
					h[k - 2] = arguments[k];
				return b.prototype[c].apply(a, h)
			}
		}
		;
		var Ia = function(a) {
				a.prototype.then = a.prototype.then;
				a.prototype.$goog_Thenable = !0
			}
			;
		var Ja = function(a) {
				if (!a)
					return !1;
				try {
					return !!a.$goog_Thenable
				} catch (b) {
					return !1
				}
			}
			;
		var Ka = function(a) {
				if (Error.captureStackTrace)
					Error.captureStackTrace(this, Ka);
				else {
					var b = Error().stack;
					b && (this.stack = b)
				}
				a && (this.message = String(a))
			}
			;
		z.La = function(a, b) {
			return 0 == a.lastIndexOf(b, 0)
		}
		;
		z.Ma = function(a, b) {
			var c = a.length - b.length;
			return 0 <= c && a.indexOf(b, c) == c
		}
		;
		z.Na = function(a, b) {
			for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length; )
				d += c.shift() + f.shift();
			return d + c.join("%s")
		}
		;
		z.Oa = function(a) {
			return /^[\s\xa0]*$/.test(a)
		}
		;
		z.Pa = function(a) {
			return !/[^\t\n\r ]/.test(a)
		}
		;
		z.Qa = function(a) {
			return a.replace(/(\r\n|\r|\n)+/g, " ")
		}
		;
		z.Ra = function(a) {
			return a.replace(/(\r\n|\r|\n)/g, "\n")
		}
		;
		var Sa = function(a) {
				return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
			}
			;
		z.Ta = function(a) {
			return a.replace(/^[\s\xa0]+/, "")
		}
		;
		z.Ua = function(a) {
			return a.replace(/[\s\xa0]+$/, "")
		}
		;
		z.Va = function(a) {
			return a.replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")
		}
		;
		z.Wa = function(a) {
			if (!Ya.test(a))
				return a;
			-1 != a.indexOf("\x26") && (a = a.replace(Za, "\x26amp;"));
			-1 != a.indexOf("\x3c") && (a = a.replace(ab, "\x26lt;"));
			-1 != a.indexOf("\x3e") && (a = a.replace(bb, "\x26gt;"));
			-1 != a.indexOf('"') && (a = a.replace(cb, "\x26quot;"));
			-1 != a.indexOf("'") && (a = a.replace(db, "\x26#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(eb, "\x26#0;"));
			return a
		}
		;
		var fb = function(a) {
				return z.gb(a, "\x26") ? "document" in z.t ? hb(a) : ib(a) : a
			}
			;
		var hb = function(a) {
				var b = {
					"\x26amp;": "\x26",
					"\x26lt;": "\x3c",
					"\x26gt;": "\x3e",
					"\x26quot;": '"'
				}, c;
				c = z.t.document.createElement("div");
				return a.replace(jb, function(a, f) {
					var g = b[a];
					if (g)
						return g;
					if ("#" == f.charAt(0)) {
						var h = Number("0" + f.substr(1));
						(0,
							window.isNaN)(h) || (g = String.fromCharCode(h))
					}
					g || (c.innerHTML = a + " ",
						g = c.firstChild.nodeValue.slice(0, -1));
					return b[a] = g
				})
			}
			;
		var ib = function(a) {
				return a.replace(/&([^;]+);/g, function(a, c) {
					switch (c) {
						case "amp":
							return "\x26";
						case "lt":
							return "\x3c";
						case "gt":
							return "\x3e";
						case "quot":
							return '"';
						default:
							if ("#" == c.charAt(0)) {
								var d = Number("0" + c.substr(1));
								if (!(0,
										window.isNaN)(d))
									return String.fromCharCode(d)
							}
							return a
					}
				})
			}
			;
		var kb = function(a) {
				20 < a.length && (a = a.substring(0, 17) + "...");
				return a
			}
			;
		z.gb = function(a, b) {
			return -1 != a.indexOf(b)
		}
		;
		var lb = function(a) {
				return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
			}
			;
		var mb = function(a, b) {
				var c = z.l(void 0) ? a.toFixed(void 0) : String(a)
					, d = c.indexOf(".");
				-1 == d && (d = c.length);
				return nb("0", Math.max(0, b - d)) + c
			}
			;
		var ob = function() {
				return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0,
							z.w)()).toString(36)
			}
			;
		var pb = function(a, b) {
				for (var c = 0, d = (0,
					z.qb)(String(a)).split("."), f = (0,
					z.qb)(String(b)).split("."), g = Math.max(d.length, f.length), h = 0; 0 == c && h < g; h++) {
					var k = d[h] || ""
						, m = f[h] || ""
						, n = /(\d*)(\D*)/g
						, q = /(\d*)(\D*)/g;
					do {
						var A = n.exec(k) || ["", "", ""]
							, H = q.exec(m) || ["", "", ""];
						if (0 == A[0].length && 0 == H[0].length)
							break;
						c = rb(0 == A[1].length ? 0 : (0,
								window.parseInt)(A[1], 10), 0 == H[1].length ? 0 : (0,
								window.parseInt)(H[1], 10)) || rb(0 == A[2].length, 0 == H[2].length) || rb(A[2], H[2])
					} while (0 == c)
				}
				return c
			}
			;
		var rb = function(a, b) {
				return a < b ? -1 : a > b ? 1 : 0
			}
			;
		z.sb = function() {
			return "goog_" + tb++
		}
		;
		var ub = function(a) {
				return String(a).replace(/\-([a-z])/g, function(a, c) {
					return c.toUpperCase()
				})
			}
			;
		var vb = function(a) {
				var b = z.qa(void 0) ? lb(void 0) : "\\s";
				return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, f) {
					return b + f.toUpperCase()
				})
			}
			;
		var wb = function(a, b, c) {
				this.wQ = c;
				this.UM = a;
				this.sp = b;
				this.yt = 0;
				this.Bs = null
			}
			;
		var xb = function() {
				this.Vu = this.Tm = null
			}
			;
		var yb = function() {
				this.next = this.scope = this.fn = null
			}
			;
		z.zb = function(a) {
			return function() {
				return a
			}
		}
		;
		z.Ab = function(a) {
			return a
		}
		;
		var Bb = function(a) {
				return function() {
					throw Error(a);
				}
			}
			;
		var Cb = function(a) {
				var b;
				b = b || 0;
				return function() {
					return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
				}
			}
			;
		z.Db = function(a, b) {
			var c = arguments
				, d = c.length;
			return function() {
				var a;
				d && (a = c[d - 1].apply(this, arguments));
				for (var b = d - 2; 0 <= b; b--)
					a = c[b].call(this, a);
				return a
			}
		}
		;
		z.Eb = function(a) {
			var b = arguments
				, c = b.length;
			return function() {
				for (var a, f = 0; f < c; f++)
					a = b[f].apply(this, arguments);
				return a
			}
		}
		;
		z.Fb = function(a) {
			var b = arguments
				, c = b.length;
			return function() {
				for (var a = 0; a < c; a++)
					if (!b[a].apply(this, arguments))
						return !1;
				return !0
			}
		}
		;
		z.Gb = function(a) {
			return function() {
				return !a.apply(this, arguments)
			}
		}
		;
		z.Hb = function(a) {
			return a[a.length - 1]
		}
		;
		z.Ib = function(a, b) {
			return Array.prototype.indexOf.call(a, b, void 0)
		}
		;
		z.x = function(a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		}
		;
		z.Jb = function(a, b, c) {
			return Array.prototype.filter.call(a, b, c)
		}
		;
		z.Kb = function(a, b, c) {
			return Array.prototype.map.call(a, b, c)
		}
		;
		z.Lb = function(a, b, c) {
			return Array.prototype.reduce.call(a, b, c)
		}
		;
		z.Mb = function(a, b, c) {
			return Array.prototype.some.call(a, b, c)
		}
		;
		z.Nb = function(a, b, c) {
			return Array.prototype.every.call(a, b, c)
		}
		;
		var Ob = function(a, b) {
				var c = 0;
				z.x(a, function(a, f, g) {
					b.call(void 0, a, f, g) && ++c
				}, void 0);
				return c
			}
			;
		z.Pb = function(a, b) {
			var c = z.Qb(a, b, void 0);
			return 0 > c ? null  : z.qa(a) ? a.charAt(c) : a[c]
		}
		;
		z.Qb = function(a, b, c) {
			for (var d = a.length, f = z.qa(a) ? a.split("") : a, g = 0; g < d; g++)
				if (g in f && b.call(c, f[g], g, a))
					return g;
			return -1
		}
		;
		z.Rb = function(a, b) {
			for (var c = z.qa(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
				if (d in c && b.call(void 0, c[d], d, a))
					return d;
			return -1
		}
		;
		z.y = function(a, b) {
			return 0 <= z.Ib(a, b)
		}
		;
		var Sb = function(a, b) {
				z.y(a, b) || a.push(b)
			}
			;
		var Tb = function(a, b) {
				var c = z.Ib(a, b), d;
				(d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
				return d
			}
			;
		var Ub = function(a) {
				return Array.prototype.concat.apply(Array.prototype, arguments)
			}
			;
		z.Vb = function(a) {
			var b = a.length;
			if (0 < b) {
				for (var c = Array(b), d = 0; d < b; d++)
					c[d] = a[d];
				return c
			}
			return []
		}
		;
		z.Wb = function(a, b) {
			for (var c = 1; c < arguments.length; c++) {
				var d = arguments[c];
				if (z.pa(d)) {
					var f = a.length || 0
						, g = d.length || 0;
					a.length = f + g;
					for (var h = 0; h < g; h++)
						a[f + h] = d[h]
				} else
					a.push(d)
			}
		}
		;
		var Xb = function(a, b, c, d) {
				Array.prototype.splice.apply(a, Yb(arguments, 1))
			}
			;
		var Yb = function(a, b, c) {
				return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
			}
			;
		var Zb = function(a, b) {
				for (var c = b || a, d = {}, f = 0, g = 0; g < a.length; ) {
					var h = a[g++], k;
					k = h;
					k = z.ua(k) ? "o" + wa(k) : (typeof k).charAt(0) + k;
					Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0,
						c[f++] = h)
				}
				c.length = f
			}
			;
		var $b = function(a) {
				for (var b = [], c = 0; c < arguments.length; c++) {
					var d = arguments[c];
					if (z.oa(d))
						for (var f = 0; f < d.length; f += 8192)
							for (var g = Yb(d, f, f + 8192), g = $b.apply(null , g), h = 0; h < g.length; h++)
								b.push(g[h]);
					else
						b.push(d)
				}
				return b
			}
			;
		var ac = function(a) {
				return z.gb(bc, a)
			}
			;
		var cc = function(a) {
				for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
					c.push([d[1], d[2], d[3] || void 0]);
				return c
			}
			;
		z.dc = function(a, b, c) {
			for (var d in a)
				b.call(c, a[d], d, a)
		}
		;
		z.ec = function(a, b) {
			var c = {}, d;
			for (d in a)
				b.call(void 0, a[d], d, a) && (c[d] = a[d]);
			return c
		}
		;
		var fc = function(a, b) {
				var c = {}, d;
				for (d in a)
					c[d] = b.call(void 0, a[d], d, a);
				return c
			}
			;
		z.gc = function(a, b) {
			for (var c in a)
				if (b.call(void 0, a[c], c, a))
					return !0;
			return !1
		}
		;
		z.hc = function(a) {
			var b = 0, c;
			for (c in a)
				b++;
			return b
		}
		;
		z.ic = function(a) {
			var b = [], c = 0, d;
			for (d in a)
				b[c++] = a[d];
			return b
		}
		;
		var jc = function(a) {
				var b = [], c = 0, d;
				for (d in a)
					b[c++] = d;
				return b
			}
			;
		var kc = function(a, b) {
				return null  !== a && b in a
			}
			;
		z.lc = function(a, b) {
			for (var c in a)
				if (a[c] == b)
					return !0;
			return !1
		}
		;
		z.mc = function(a, b) {
			for (var c in a)
				if (b.call(void 0, a[c], c, a))
					return c
		}
		;
		var nc = function(a) {
				for (var b in a)
					return !1;
				return !0
			}
			;
		var oc = function(a, b) {
				b in a && delete a[b]
			}
			;
		var pc = function(a, b, c) {
				if (null  !== a && b in a)
					throw Error('The object already contains the key "' + b + '"');
				a[b] = c
			}
			;
		z.qc = function(a) {
			var b = {}, c;
			for (c in a)
				b[a[c]] = c;
			return b
		}
		;
		z.rc = function(a, b) {
			for (var c, d, f = 1; f < arguments.length; f++) {
				d = arguments[f];
				for (c in d)
					a[c] = d[c];
				for (var g = 0; g < sc.length; g++)
					c = sc[g],
					Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
			}
		}
		;
		var tc = function(a) {
				var b = arguments.length;
				if (1 == b && z.oa(arguments[0]))
					return tc.apply(null , arguments[0]);
				for (var c = {}, d = 0; d < b; d++)
					c[arguments[d]] = !0;
				return c
			}
			;
		var uc = function() {
				return ac("Opera") || ac("OPR")
			}
			;
		var vc = function() {
				return ac("Trident") || ac("MSIE")
			}
			;
		var wc = function() {
				return ac("Firefox")
			}
			;
		var xc = function() {
				return (ac("Chrome") || ac("CriOS")) && !uc() && !ac("Edge")
			}
			;
		var yc = function() {
				function a(a) {
					a = z.Pb(a, d);
					return c[a] || ""
				}
				var b = bc;
				if (vc())
					return zc(b);
				var b = cc(b)
					, c = {};
				z.x(b, function(a) {
					c[a[0]] = a[1]
				});
				var d = z.Ca(kc, c);
				return uc() ? a(["Version", "Opera", "OPR"]) : ac("Edge") ? a(["Edge"]) : xc() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
			}
			;
		var zc = function(a) {
				var b = /rv: *([\d\.]*)/.exec(a);
				if (b && b[1])
					return b[1];
				var b = ""
					, c = /MSIE +([\d\.]+)/.exec(a);
				if (c && c[1])
					if (a = /Trident\/(\d.\d)/.exec(a),
						"7.0" == c[1])
						if (a && a[1])
							switch (a[1]) {
								case "4.0":
									b = "8.0";
									break;
								case "5.0":
									b = "9.0";
									break;
								case "6.0":
									b = "10.0";
									break;
								case "7.0":
									b = "11.0"
							}
						else
							b = "7.0";
					else
						b = c[1];
				return b
			}
			;
		var Ac = function(a) {
				z.t.setTimeout(function() {
					throw a;
				}, 0)
			}
			;
		var Bc = function() {
				var a = z.t.MessageChannel;
				"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !ac("Presto") && (a = function() {
						var a = window.document.createElement("IFRAME");
						a.style.display = "none";
						a.src = "";
						window.document.documentElement.appendChild(a);
						var b = a.contentWindow
							, a = b.document;
						a.open();
						a.write("");
						a.close();
						var c = "callImmediate" + Math.random()
							, d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
							, a = (0,
							z.r)(function(a) {
							if (("*" ==
								d || a.origin == d) && a.data == c)
								this.port1.onmessage()
						}, this);
						b.addEventListener("message", a, !1);
						this.port1 = {};
						this.port2 = {
							postMessage: function() {
								b.postMessage(c, d)
							}
						}
					}
				);
				if ("undefined" !== typeof a && !vc()) {
					var b = new a
						, c = {}
						, d = c;
					b.port1.onmessage = function() {
						if (z.l(c.next)) {
							c = c.next;
							var a = c.tD;
							c.tD = null ;
							a()
						}
					}
					;
					return function(a) {
						d.next = {
							tD: a
						};
						d = d.next;
						b.port2.postMessage(0)
					}
				}
				return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
					var b = window.document.createElement("SCRIPT");
					b.onreadystatechange = function() {
						b.onreadystatechange = null ;
						b.parentNode.removeChild(b);
						b = null ;
						a();
						a = null
					}
					;
					window.document.documentElement.appendChild(b)
				}
					: function(a) {
					z.t.setTimeout(a, 0)
				}
			}
			;
		var Cc = function(a, b) {
				Dc || Ec();
				Fc || (Dc(),
					Fc = !0);
				Gc.add(a, b)
			}
			;
		var Ec = function() {
				if (z.t.Promise && z.t.Promise.resolve) {
					var a = z.t.Promise.resolve(void 0);
					Dc = function() {
						a.then(Hc)
					}
				} else
					Dc = function() {
						var a = Hc;
						!z.ta(z.t.setImmediate) || z.t.Window && z.t.Window.prototype && !ac("Edge") && z.t.Window.prototype.setImmediate == z.t.setImmediate ? (Ic || (Ic = Bc()),
							Ic(a)) : z.t.setImmediate(a)
					}
			}
			;
		var Hc = function() {
				for (var a = null ; a = Gc.remove(); ) {
					try {
						a.fn.call(a.scope)
					} catch (b) {
						Ac(b)
					}
					Jc.put(a)
				}
				Fc = !1
			}
			;
		var Kc = function(a, b) {
				this.O = Lc;
				this.gh = void 0;
				this.Yk = this.Ih = this.Qa = null ;
				this.gs = this.bx = !1;
				if (a != z.p)
					try {
						var c = this;
						a.call(b, function(a) {
							Mc(c, Nc, a)
						}, function(a) {
							Mc(c, Oc, a)
						})
					} catch (d) {
						Mc(this, Oc, d)
					}
			}
			;
		var Pc = function() {
				this.next = this.context = this.hm = this.Xo = this.Vi = null ;
				this.always = !1
			}
			;
		var Qc = function(a, b, c) {
				var d = Rc.get();
				d.Xo = a;
				d.hm = b;
				d.context = c;
				return d
			}
			;
		var Sc = function(a, b) {
				if (a.O == Lc)
					if (a.Qa) {
						var c = a.Qa;
						if (c.Ih) {
							for (var d = 0, f = null , g = null , h = c.Ih; h && (h.always || (d++,
							h.Vi == a && (f = h),
								!(f && 1 < d))); h = h.next)
								f || (g = h);
							f && (c.O == Lc && 1 == d ? Sc(c, b) : (g ? (d = g,
							d.next == c.Yk && (c.Yk = d),
								d.next = d.next.next) : Tc(c),
								Uc(c, f, Oc, b)))
						}
						a.Qa = null
					} else
						Mc(a, Oc, b)
			}
			;
		var Vc = function(a, b) {
				a.Ih || a.O != Nc && a.O != Oc || Wc(a);
				a.Yk ? a.Yk.next = b : a.Ih = b;
				a.Yk = b
			}
			;
		var Xc = function(a, b, c, d) {
				var f = Qc(null , null , null );
				f.Vi = new Kc(function(a, h) {
						f.Xo = b ? function(c) {
							try {
								var f = b.call(d, c);
								a(f)
							} catch (n) {
								h(n)
							}
						}
							: a;
						f.hm = c ? function(b) {
							try {
								var f = c.call(d, b);
								!z.l(f) && b instanceof Yc ? h(b) : a(f)
							} catch (n) {
								h(n)
							}
						}
							: h
					}
				);
				f.Vi.Qa = a;
				Vc(a, f);
				return f.Vi
			}
			;
		var Mc = function(a, b, c) {
				if (a.O == Lc) {
					a == c && (b = Oc,
						c = new TypeError("Promise cannot resolve to itself"));
					a.O = 1;
					var d;
					a: {
						var f = c
							, g = a.eV
							, h = a.fV;
						if (f instanceof Kc)
							Vc(f, Qc(g || z.p, h || null , a)),
								d = !0;
						else if (Ja(f))
							f.then(g, h, a),
								d = !0;
						else {
							if (z.ua(f))
								try {
									var k = f.then;
									if (z.ta(k)) {
										Zc(f, k, g, h, a);
										d = !0;
										break a
									}
								} catch (m) {
									h.call(a, m);
									d = !0;
									break a
								}
							d = !1
						}
					}
					d || (a.gh = c,
						a.O = b,
						a.Qa = null ,
						Wc(a),
					b != Oc || c instanceof Yc || $c(a, c))
				}
			}
			;
		var Zc = function(a, b, c, d, f) {
				function g(a) {
					k || (k = !0,
						d.call(f, a))
				}
				function h(a) {
					k || (k = !0,
						c.call(f, a))
				}
				var k = !1;
				try {
					b.call(a, h, g)
				} catch (m) {
					g(m)
				}
			}
			;
		var Wc = function(a) {
				a.bx || (a.bx = !0,
					Cc(a.Sr, a))
			}
			;
		var Tc = function(a) {
				var b = null ;
				a.Ih && (b = a.Ih,
					a.Ih = b.next,
					b.next = null );
				a.Ih || (a.Yk = null );
				return b
			}
			;
		var Uc = function(a, b, c, d) {
				if (c == Oc && b.hm && !b.always)
					for (; a && a.gs; a = a.Qa)
						a.gs = !1;
				if (b.Vi)
					b.Vi.Qa = null ,
						ad(b, c, d);
				else
					try {
						b.always ? b.Xo.call(b.context) : ad(b, c, d)
					} catch (f) {
						bd.call(null , f)
					}
				Rc.put(b)
			}
			;
		var ad = function(a, b, c) {
				b == Nc ? a.Xo.call(a.context, c) : a.hm && a.hm.call(a.context, c)
			}
			;
		var $c = function(a, b) {
				a.gs = !0;
				Cc(function() {
					a.gs && bd.call(null , b)
				})
			}
			;
		var Yc = function(a) {
				Ka.call(this, a)
			}
			;
		z.cd = function() {
			0 != dd && (ed[wa(this)] = this);
			this.Gd = this.Gd;
			this.bk = this.bk
		}
		;
		z.fd = function(a, b) {
			gd(a, z.Ca(hd, b))
		}
		;
		var gd = function(a, b, c) {
				a.Gd ? b.call(c) : (a.bk || (a.bk = []),
					a.bk.push(z.l(c) ? (0,
						z.r)(b, c) : b))
			}
			;
		var hd = function(a) {
				a && "function" == typeof a.H && a.H()
			}
			;
		var id = function(a) {
				for (var b = 0, c = arguments.length; b < c; ++b) {
					var d = arguments[b];
					z.pa(d) ? id.apply(null , d) : hd(d)
				}
			}
			;
		var jd = function() {
				return ac("iPhone") && !ac("iPod") && !ac("iPad")
			}
			;
		var kd = function() {
				var a = bc;
				if (z.B)
					return /rv\:([^\);]+)(\)|;)/.exec(a);
				if (z.ld)
					return /Edge\/([\d\.]+)/.exec(a);
				if (z.C)
					return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (z.D)
					return /WebKit\/(\S+)/.exec(a)
			}
			;
		var md = function() {
				var a = z.t.document;
				return a ? a.documentMode : void 0
			}
			;
		z.E = function(a) {
			return nd[a] || (nd[a] = 0 <= pb(od, a))
		}
		;
		var pd = function(a) {
				this.id = a
			}
			;
		z.qd = function(a, b) {
			this.type = a instanceof pd ? String(a) : a;
			this.currentTarget = this.target = b;
			this.defaultPrevented = this.jk = !1;
			this.QI = !0
		}
		;
		var rd = function(a) {
				a.preventDefault()
			}
			;
		var sd = function(a) {
				sd[" "](a);
				return a
			}
			;
		var td = function(a, b) {
				try {
					return sd(a[b]),
						!0
				} catch (c) {}
				return !1
			}
			;
		var ud = function(a, b) {
				z.qd.call(this, a ? a.type : "");
				this.relatedTarget = this.currentTarget = this.target = null ;
				this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
				this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
				this.state = null ;
				this.Wz = !1;
				this.hc = null ;
				a && this.init(a, b)
			}
			;
		var vd = function(a, b) {
				return xd ? a.hc.button == b : "click" == a.type ? 0 == b : !!(a.hc.button & yd[b])
			}
			;
		z.zd = function(a) {
			return vd(a, 0) && !(z.D && z.Ad && a.ctrlKey)
		}
		;
		z.Bd = function(a) {
			return !(!a || !a[Cd])
		}
		;
		var Dd = function(a, b, c, d, f) {
				this.listener = a;
				this.proxy = null ;
				this.src = b;
				this.type = c;
				this.$k = !!d;
				this.Yf = f;
				this.key = ++Ed;
				this.rm = this.Zq = !1
			}
			;
		var Fd = function(a) {
				a.rm = !0;
				a.listener = null ;
				a.proxy = null ;
				a.src = null ;
				a.Yf = null
			}
			;
		z.Hd = function(a) {
			this.src = a;
			this.jc = {};
			this.gq = 0
		}
		;
		var Id = function(a, b) {
				var c = b.type;
				if (!(c in a.jc))
					return !1;
				var d = Tb(a.jc[c], b);
				d && (Fd(b),
				0 == a.jc[c].length && (delete a.jc[c],
					a.gq--));
				return d
			}
			;
		var Jd = function(a, b, c, d) {
				for (var f = 0; f < a.length; ++f) {
					var g = a[f];
					if (!g.rm && g.listener == b && g.$k == !!c && g.Yf == d)
						return f
				}
				return -1
			}
			;
		z.F = function(a, b, c, d, f) {
			if (z.oa(b)) {
				for (var g = 0; g < b.length; g++)
					z.F(a, b[g], c, d, f);
				return null
			}
			c = z.Kd(c);
			return z.Bd(a) ? a.g(b, c, d, f) : Ld(a, b, c, !1, d, f)
		}
		;
		var Ld = function(a, b, c, d, f, g) {
				if (!b)
					throw Error("Invalid event type");
				var h = !!f
					, k = z.Md(a);
				k || (a[Nd] = k = new z.Hd(a));
				c = k.add(b, c, d, f, g);
				if (c.proxy)
					return c;
				d = Od();
				c.proxy = d;
				d.src = a;
				d.listener = c;
				if (a.addEventListener)
					a.addEventListener(b.toString(), d, h);
				else if (a.attachEvent)
					a.attachEvent(Pd(b.toString()), d);
				else
					throw Error("addEventListener and attachEvent are unavailable.");
				Qd++;
				return c
			}
			;
		var Od = function() {
				var a = Rd
					, b = Sd ? function(c) {
						return a.call(b.src, b.listener, c)
					}
						: function(c) {
						c = a.call(b.src, b.listener, c);
						if (!c)
							return c
					}
					;
				return b
			}
			;
		z.Td = function(a, b, c, d, f) {
			if (z.oa(b)) {
				for (var g = 0; g < b.length; g++)
					z.Td(a, b[g], c, d, f);
				return null
			}
			c = z.Kd(c);
			return z.Bd(a) ? a.Aa(b, c, d, f) : Ld(a, b, c, !0, d, f)
		}
		;
		z.Ud = function(a, b, c, d, f) {
			if (z.oa(b))
				for (var g = 0; g < b.length; g++)
					z.Ud(a, b[g], c, d, f);
			else
				c = z.Kd(c),
					z.Bd(a) ? a.pa(b, c, d, f) : a && (a = z.Md(a)) && (b = a.$n(b, c, !!d, f)) && z.Vd(b)
		}
		;
		z.Vd = function(a) {
			if (sa(a) || !a || a.rm)
				return !1;
			var b = a.src;
			if (z.Bd(b))
				return Id(b.ee, a);
			var c = a.type
				, d = a.proxy;
			b.removeEventListener ? b.removeEventListener(c, d, a.$k) : b.detachEvent && b.detachEvent(Pd(c), d);
			Qd--;
			(c = z.Md(b)) ? (Id(c, a),
			0 == c.gq && (c.src = null ,
				b[Nd] = null )) : Fd(a);
			return !0
		}
		;
		var Pd = function(a) {
				return a in Wd ? Wd[a] : Wd[a] = "on" + a
			}
			;
		var Xd = function(a, b, c, d) {
				var f = !0;
				if (a = z.Md(a))
					if (b = a.jc[b.toString()])
						for (b = b.concat(),
							     a = 0; a < b.length; a++) {
							var g = b[a];
							g && g.$k == c && !g.rm && (g = Yd(g, d),
								f = f && !1 !== g)
						}
				return f
			}
			;
		var Yd = function(a, b) {
				var c = a.listener
					, d = a.Yf || a.src;
				a.Zq && z.Vd(a);
				return c.call(d, b)
			}
			;
		var Rd = function(a, b) {
				if (a.rm)
					return !0;
				if (!Sd) {
					var c;
					if (!(c = b))
						a: {
							c = ["window", "event"];
							for (var d = z.t, f; f = c.shift(); )
								if (null  != d[f])
									d = d[f];
								else {
									c = null ;
									break a
								}
							c = d
						}
					f = c;
					c = new ud(f,this);
					d = !0;
					if (!(0 > f.keyCode || void 0 != f.returnValue)) {
						a: {
							var g = !1;
							if (0 == f.keyCode)
								try {
									f.keyCode = -1;
									break a
								} catch (m) {
									g = !0
								}
							if (g || void 0 == f.returnValue)
								f.returnValue = !0
						}
						f = [];
						for (g = c.currentTarget; g; g = g.parentNode)
							f.push(g);
						for (var g = a.type, h = f.length - 1; !c.jk && 0 <= h; h--) {
							c.currentTarget = f[h];
							var k = Xd(f[h], g, !0, c)
								, d = d && k
						}
						for (h = 0; !c.jk &&
						h < f.length; h++)
							c.currentTarget = f[h],
								k = Xd(f[h], g, !1, c),
								d = d && k
					}
					return d
				}
				return Yd(a, new ud(b,this))
			}
			;
		z.Md = function(a) {
			a = a[Nd];
			return a instanceof z.Hd ? a : null
		}
		;
		z.Kd = function(a) {
			if (z.ta(a))
				return a;
			a[Zd] || (a[Zd] = function(b) {
					return a.handleEvent(b)
				}
			);
			return a[Zd]
		}
		;
		z.G = function() {
			z.cd.call(this);
			this.ee = new z.Hd(this);
			this.lL = this;
			this.Sz = null
		}
		;
		var $d = function(a, b, c, d) {
				b = a.ee.jc[String(b)];
				if (!b)
					return !0;
				b = b.concat();
				for (var f = !0, g = 0; g < b.length; ++g) {
					var h = b[g];
					if (h && !h.rm && h.$k == c) {
						var k = h.listener
							, m = h.Yf || h.src;
						h.Zq && Id(a.ee, h);
						f = !1 !== k.call(m, d) && f
					}
				}
				return f && 0 != d.QI
			}
			;
		z.ae = function(a, b) {
			z.G.call(this);
			this.Pg = a || 1;
			this.Mm = b || be;
			this.bw = (0,
				z.r)(this.QU, this);
			this.Zy = (0,
				z.w)()
		}
		;
		z.ce = function(a, b, c) {
			if (z.ta(a))
				c && (a = (0,
					z.r)(a, c));
			else if (a && "function" == typeof a.handleEvent)
				a = (0,
					z.r)(a.handleEvent, a);
			else
				throw Error("Invalid listener argument");
			return 2147483647 < b ? -1 : be.setTimeout(a, b || 0)
		}
		;
		var de = function(a) {
				be.clearTimeout(a)
			}
			;
		z.ee = function(a) {
			z.cd.call(this);
			this.ha = a;
			this.Wa = {}
		}
		;
		var fe = function(a, b, c, d, f, g) {
				z.oa(c) || (c && (ge[0] = c.toString()),
					c = ge);
				for (var h = 0; h < c.length; h++) {
					var k = z.F(b, c[h], d || a.handleEvent, f || !1, g || a.ha || a);
					if (!k)
						break;
					a.Wa[k.key] = k
				}
				return a
			}
			;
		var he = function(a, b, c, d, f, g) {
				if (z.oa(c))
					for (var h = 0; h < c.length; h++)
						he(a, b, c[h], d, f, g);
				else {
					b = z.Td(b, c, d || a.handleEvent, f, g || a.ha || a);
					if (!b)
						return a;
					a.Wa[b.key] = b
				}
				return a
			}
			;
		z.ie = function() {
			this.aA = "";
			this.PK = z.je
		}
		;
		z.ke = function() {
			this.ik = "";
			this.OK = le;
			this.oE = null
		}
		;
		z.me = function(a) {
			return a instanceof z.ke && a.constructor === z.ke && a.OK === le ? a.ik : "type_error:SafeHtml"
		}
		;
		z.oe = function(a, b) {
			return (new z.ke).uo(a, b)
		}
		;
		var pe = function(a) {
				return a.ib && "function" == typeof a.ib ? a.ib() : z.pa(a) || z.qa(a) ? a.length : z.hc(a)
			}
			;
		var qe = function(a) {
				if (a.Uc && "function" == typeof a.Uc)
					return a.Uc();
				if (z.qa(a))
					return a.split("");
				if (z.pa(a)) {
					for (var b = [], c = a.length, d = 0; d < c; d++)
						b.push(a[d]);
					return b
				}
				return z.ic(a)
			}
			;
		var re = function(a) {
				if (a.jd && "function" == typeof a.jd)
					return a.jd();
				if (!a.Uc || "function" != typeof a.Uc) {
					if (z.pa(a) || z.qa(a)) {
						var b = [];
						a = a.length;
						for (var c = 0; c < a; c++)
							b.push(c);
						return b
					}
					return jc(a)
				}
			}
			;
		var se = function(a, b, c) {
				if (a.forEach && "function" == typeof a.forEach)
					a.forEach(b, c);
				else if (z.pa(a) || z.qa(a))
					z.x(a, b, c);
				else
					for (var d = re(a), f = qe(a), g = f.length, h = 0; h < g; h++)
						b.call(c, f[h], d && d[h], a)
			}
			;
		var te = function(a, b) {
				if ("function" == typeof a.every)
					return a.every(b, void 0);
				if (z.pa(a) || z.qa(a))
					return z.Nb(a, b, void 0);
				for (var c = re(a), d = qe(a), f = d.length, g = 0; g < f; g++)
					if (!b.call(void 0, d[g], c && c[g], a))
						return !1;
				return !0
			}
			;
		var ue = function(a, b, c) {
				return Math.min(Math.max(a, b), c)
			}
			;
		z.ve = function() {}
		;
		z.we = function(a) {
			if (a instanceof z.ve)
				return a;
			if ("function" == typeof a.ed)
				return a.ed(!1);
			if (z.pa(a)) {
				var b = 0
					, c = new z.ve;
				c.next = function() {
					for (; ; ) {
						if (b >= a.length)
							throw z.xe;
						if (b in a)
							return a[b++];
						b++
					}
				}
				;
				return c
			}
			throw Error("Not implemented");
		}
		;
		z.ye = function(a, b, c) {
			if (z.pa(a))
				try {
					z.x(a, b, c)
				} catch (d) {
					if (d !== z.xe)
						throw d;
				}
			else {
				a = z.we(a);
				try {
					for (; ; )
						b.call(c, a.next(), void 0, a)
				} catch (d) {
					if (d !== z.xe)
						throw d;
				}
			}
		}
		;
		z.ze = function(a, b) {
			var c = z.we(a)
				, d = new z.ve;
			d.next = function() {
				for (; ; ) {
					var a = c.next();
					if (b.call(void 0, a, void 0, c))
						return a
				}
			}
			;
			return d
		}
		;
		z.Ae = function(a) {
			if (z.pa(a))
				return z.Vb(a);
			a = z.we(a);
			var b = [];
			z.ye(a, function(a) {
				b.push(a)
			});
			return b
		}
		;
		var Be = function(a) {
				try {
					return z.we(a).next()
				} catch (b) {
					if (b != z.xe)
						throw b;
					return null
				}
			}
			;
		var Ce = function(a, b) {
				this.Fb = {};
				this.Wa = [];
				this.lq = this.Ka = 0;
				var c = arguments.length;
				if (1 < c) {
					if (c % 2)
						throw Error("Uneven number of arguments");
					for (var d = 0; d < c; d += 2)
						this.set(arguments[d], arguments[d + 1])
				} else
					a && this.addAll(a)
			}
			;
		var De = function(a, b) {
				return a === b
			}
			;
		var Ee = function(a) {
				if (a.Ka != a.Wa.length) {
					for (var b = 0, c = 0; b < a.Wa.length; ) {
						var d = a.Wa[b];
						Fe(a.Fb, d) && (a.Wa[c++] = d);
						b++
					}
					a.Wa.length = c
				}
				if (a.Ka != a.Wa.length) {
					for (var f = {}, c = b = 0; b < a.Wa.length; )
						d = a.Wa[b],
						Fe(f, d) || (a.Wa[c++] = d,
							f[d] = 1),
							b++;
					a.Wa.length = c
				}
			}
			;
		var Ge = function(a) {
				Ee(a);
				for (var b = {}, c = 0; c < a.Wa.length; c++) {
					var d = a.Wa[c];
					b[d] = a.Fb[d]
				}
				return b
			}
			;
		var Fe = function(a, b) {
				return Object.prototype.hasOwnProperty.call(a, b)
			}
			;
		var He = function(a) {
				this.Fb = new Ce;
				a && this.addAll(a)
			}
			;
		var Ie = function(a) {
				var b = typeof a;
				return "object" == b && a || "function" == b ? "o" + wa(a) : b.substr(0, 1) + a
			}
			;
		var Je = function(a, b) {
				var c = pe(b);
				if (a.ib() > c)
					return !1;
				!(b instanceof He) && 5 < c && (b = new He(b));
				return te(a, function(a) {
					var c = b;
					return c.contains && "function" == typeof c.contains ? c.contains(a) : c.zn && "function" == typeof c.zn ? c.zn(a) : z.pa(c) || z.qa(c) ? z.y(c, a) : z.lc(c, a)
				})
			}
			;
		var Ke = function(a) {
				z.cd.call(this);
				this.Bk = a;
				this.hu = []
			}
			;
		var Le = function(a) {
				a = String(a);
				if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
					try {
						return eval("(" + a + ")")
					} catch (b) {}
				throw Error("Invalid JSON string: " + a);
			}
			;
		var Me = function(a) {
				return eval("(" + a + ")")
			}
			;
		var Ne = function(a, b) {
				return (new Oe(b)).serialize(a)
			}
			;
		var Oe = function(a) {
				this.gu = a
			}
			;
		var Pe = function(a, b, c) {
				if (null  == b)
					c.push("null");
				else {
					if ("object" == typeof b) {
						if (z.oa(b)) {
							a.serializeArray(b, c);
							return
						}
						if (b instanceof String || b instanceof Number || b instanceof Boolean)
							b = b.valueOf();
						else {
							c.push("{");
							var d = "", f;
							for (f in b)
								if (Object.prototype.hasOwnProperty.call(b, f)) {
									var g = b[f];
									"function" != typeof g && (c.push(d),
										Qe(f, c),
										c.push(":"),
										Pe(a, a.gu ? a.gu.call(b, f, g) : g, c),
										d = ",")
								}
							c.push("}");
							return
						}
					}
					switch (typeof b) {
						case "string":
							Qe(b, c);
							break;
						case "number":
							c.push((0,
								window.isFinite)(b) && !(0,
								window.isNaN)(b) ?
								String(b) : "null");
							break;
						case "boolean":
							c.push(String(b));
							break;
						case "function":
							c.push("null");
							break;
						default:
							throw Error("Unknown type: " + typeof b);
					}
				}
			}
			;
		var Qe = function(a, b) {
				b.push('"', a.replace(Re, function(a) {
					var b = Se[a];
					b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
						Se[a] = b);
					return b
				}), '"')
			}
			;
		var Te = function() {}
			;
		var Ue = function(a) {
				var b;
				(b = a.pD) || (b = {},
				Ve(a) && (b[0] = !0,
					b[1] = !0),
					b = a.pD = b);
				return b
			}
			;
		var We = function() {}
			;
		var Xe = function(a) {
				return (a = Ve(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
			}
			;
		var Ve = function(a) {
				if (!a.XF && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
					for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
						var d = b[c];
						try {
							return new window.ActiveXObject(d),
								a.XF = d
						} catch (f) {}
					}
					throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
				}
				return a.XF
			}
			;
		var Ye = function(a, b) {
				if (a)
					for (var c = a.split("\x26"), d = 0; d < c.length; d++) {
						var f = c[d].indexOf("\x3d")
							, g = null
							, h = null ;
						0 <= f ? (g = c[d].substring(0, f),
							h = c[d].substring(f + 1)) : g = c[d];
						b(g, h ? (0,
							window.decodeURIComponent)(h.replace(/\+/g, " ")) : "")
					}
			}
			;
		z.Ze = function(a, b, c) {
			a = [a, "\x26", b];
			null  != c && a.push("\x3d", (0,
				window.encodeURIComponent)(String(c)));
			a[1] && (c = a[0],
				b = c.indexOf("#"),
			0 <= b && (a.push(c.substr(b)),
				a[0] = c = c.substr(0, b)),
				b = c.indexOf("?"),
				0 > b ? a[1] = "?" : b == c.length - 1 && (a[1] = void 0));
			return a.join("")
		}
		;
		z.$e = function(a, b) {
			var c = a.search(af), d;
			a: {
				d = 0;
				for (var f = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
					var g = a.charCodeAt(d - 1);
					if (38 == g || 63 == g)
						if (g = a.charCodeAt(d + f),
							!g || 61 == g || 38 == g || 35 == g)
							break a;
					d += f + 1
				}
				d = -1
			}
			if (0 > d)
				return null ;
			f = a.indexOf("\x26", d);
			if (0 > f || f > c)
				f = c;
			d += b.length + 1;
			return (0,
				window.decodeURIComponent)(a.substr(d, f - d).replace(/\+/g, " "))
		}
		;
		var bf = function(a) {
				z.G.call(this);
				this.headers = new Ce;
				this.Xu = a || null ;
				this.Ch = !1;
				this.Wu = this.fa = null ;
				this.Zs = this.Yy = "";
				this.Aj = this.py = this.Is = this.Xw = !1;
				this.Gu = 0;
				this.Fu = null ;
				this.JI = cf;
				this.NB = this.eT = this.BV = !1
			}
			;
		var df = function(a) {
				return z.C && z.E(9) && sa(a.timeout) && z.l(a.ontimeout)
			}
			;
		var ef = function(a) {
				return "content-type" == a.toLowerCase()
			}
			;
		var ff = function(a) {
				a.Xw || (a.Xw = !0,
					a.dispatchEvent("complete"),
					a.dispatchEvent("error"))
			}
			;
		var gf = function(a) {
				if (a.Ch && "undefined" != typeof hf && (!a.Wu[1] || 4 != jf(a) || 2 != kf(a)))
					if (a.Is && 4 == jf(a))
						z.ce(a.NH, 0, a);
					else if (a.dispatchEvent("readystatechange"),
							a.Ie()) {
						a.Ch = !1;
						try {
							if (lf(a))
								a.dispatchEvent("complete"),
									a.dispatchEvent("success");
							else {
								var b;
								try {
									b = 2 < jf(a) ? a.fa.statusText : ""
								} catch (c) {
									b = ""
								}
								a.Zs = b + " [" + kf(a) + "]";
								ff(a)
							}
						} finally {
							mf(a)
						}
					}
			}
			;
		var nf = function(a, b) {
				return {
					type: b,
					lengthComputable: a.lengthComputable,
					loaded: a.loaded,
					total: a.total
				}
			}
			;
		var mf = function(a, b) {
				if (a.fa) {
					of(a);
					var c = a.fa
						, d = a.Wu[0] ? z.p : null ;
					a.fa = null ;
					a.Wu = null ;
					b || a.dispatchEvent("ready");
					try {
						c.onreadystatechange = d
					} catch (f) {}
				}
			}
			;
		var of = function(a) {
				a.fa && a.NB && (a.fa.ontimeout = null );
				sa(a.Fu) && (de(a.Fu),
					a.Fu = null )
			}
			;
		var lf = function(a) {
				var b = kf(a), c;
				a: switch (b) {
					case 200:
					case 201:
					case 202:
					case 204:
					case 206:
					case 304:
					case 1223:
						c = !0;
						break a;
					default:
						c = !1
				}
				if (!c) {
					if (b = 0 === b)
						a = String(a.Yy).match(z.pf)[1] || null ,
						!a && z.t.self && z.t.self.location && (a = z.t.self.location.protocol,
							a = a.substr(0, a.length - 1)),
							b = !qf.test(a ? a.toLowerCase() : "");
					c = b
				}
				return c
			}
			;
		var jf = function(a) {
				return a.fa ? a.fa.readyState : 0
			}
			;
		var kf = function(a) {
				try {
					return 2 < jf(a) ? a.fa.status : -1
				} catch (b) {
					return -1
				}
			}
			;
		z.rf = function(a) {
			try {
				return a.fa ? a.fa.responseText : ""
			} catch (b) {
				return ""
			}
		}
		;
		z.sf = function(a) {
			if (a.fa)
				return Le(a.fa.responseText)
		}
		;
		var tf = function(a) {
				z.G.call(this);
				this.Nl = new Ke(a);
				this.S = new z.ee(this)
			}
			;
		var uf = function(a, b) {
				this.pu = [];
				this.AH = a;
				this.jE = b || null ;
				this.co = this.Th = !1;
				this.gh = void 0;
				this.VA = this.fM = this.Yv = !1;
				this.Ou = 0;
				this.Qa = null ;
				this.cw = 0
			}
			;
		var vf = function(a, b, c) {
				a.Th = !0;
				a.gh = c;
				a.co = !b;
				wf(a)
			}
			;
		var xf = function(a, b) {
				a.Jh();
				vf(a, !1, b)
			}
			;
		var yf = function(a, b, c, d) {
				a.pu.push([b, c, d]);
				a.Th && wf(a)
			}
			;
		var zf = function(a) {
				return z.Mb(a.pu, function(a) {
					return z.ta(a[1])
				})
			}
			;
		var wf = function(a) {
				if (a.Ou && a.Th && zf(a)) {
					var b = a.Ou
						, c = Af[b];
					c && (z.t.clearTimeout(c.ic),
						delete Af[b]);
					a.Ou = 0
				}
				a.Qa && (a.Qa.cw--,
					delete a.Qa);
				for (var b = a.gh, d = c = !1; a.pu.length && !a.Yv; ) {
					var f = a.pu.shift()
						, g = f[0]
						, h = f[1]
						, f = f[2];
					if (g = a.co ? h : g)
						try {
							var k = g.call(f || a.jE, b);
							z.l(k) && (a.co = a.co && (k == b || k instanceof Error),
								a.gh = b = k);
							if (Ja(b) || "function" === typeof z.t.Promise && b instanceof z.t.Promise)
								d = !0,
									a.Yv = !0
						} catch (m) {
							b = m,
								a.co = !0,
							zf(a) || (c = !0)
						}
				}
				a.gh = b;
				d && (k = (0,
					z.r)(a.QD, a, !0),
					d = (0,
						z.r)(a.QD, a, !1),
					b instanceof
					uf ? (yf(b, k, d),
						b.fM = !0) : b.then(k, d));
				c && (b = new Bf(b),
					Af[b.ic] = b,
					a.Ou = b.ic)
			}
			;
		var Cf = function(a) {
				Ka.call(this);
				this.deferred = a
			}
			;
		var Df = function(a) {
				Ka.call(this);
				this.deferred = a
			}
			;
		var Bf = function(a) {
				this.ic = z.t.setTimeout((0,
					z.r)(this.OU, this), 0);
				this.Or = a
			}
			;
		z.Ef = function(a, b) {
			a.innerHTML = z.me(b)
		}
		;
		var Ff = function(a, b) {
				this.x = z.l(a) ? a : 0;
				this.y = z.l(b) ? b : 0
			}
			;
		var Gf = function(a, b) {
				return new Ff(a.x - b.x,a.y - b.y)
			}
			;
		z.Hf = function(a, b) {
			this.width = a;
			this.height = b
		}
		;
		z.If = function(a, b) {
			return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
		}
		;
		z.I = function(a) {
			return a ? new Jf(z.Kf(a)) : Lf || (Lf = new Jf)
		}
		;
		z.J = function(a) {
			return z.qa(a) ? window.document.getElementById(a) : a
		}
		;
		z.Mf = function(a, b, c) {
			return z.Nf(window.document, a, b, c)
		}
		;
		z.Of = function(a, b) {
			var c = b || window.document;
			return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : z.Nf(window.document, "*", a, b)
		}
		;
		z.L = function(a, b) {
			var c = b || window.document
				, d = null ;
			return (d = c.getElementsByClassName ? c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : z.Nf(window.document, "*", a, b)[0]) || null
		}
		;
		z.Nf = function(a, b, c, d) {
			a = d || a;
			b = b && "*" != b ? b.toUpperCase() : "";
			if (a.querySelectorAll && a.querySelector && (b || c))
				return a.querySelectorAll(b + (c ? "." + c : ""));
			if (c && a.getElementsByClassName) {
				a = a.getElementsByClassName(c);
				if (b) {
					d = {};
					for (var f = 0, g = 0, h; h = a[g]; g++)
						b == h.nodeName && (d[f++] = h);
					d.length = f;
					return d
				}
				return a
			}
			a = a.getElementsByTagName(b || "*");
			if (c) {
				d = {};
				for (g = f = 0; h = a[g]; g++)
					b = h.className,
					"function" == typeof b.split && z.y(b.split(/\s+/), c) && (d[f++] = h);
				d.length = f;
				return d
			}
			return a
		}
		;
		var Pf = function(a, b) {
				z.dc(b, function(b, d) {
					"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Qf.hasOwnProperty(d) ? a.setAttribute(Qf[d], b) : z.La(d, "aria-") || z.La(d, "data-") ? a.setAttribute(d, b) : a[d] = b
				})
			}
			;
		z.Rf = function(a) {
			a = (a || window).document;
			a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
			return new z.Hf(a.clientWidth,a.clientHeight)
		}
		;
		z.Sf = function(a) {
			var b = Tf(a);
			a = a.parentWindow || a.defaultView;
			return z.C && z.E("10") && a.pageYOffset != b.scrollTop ? new Ff(b.scrollLeft,b.scrollTop) : new Ff(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
		}
		;
		var Tf = function(a) {
				return a.scrollingElement ? a.scrollingElement : z.D || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
			}
			;
		z.Uf = function(a) {
			return a ? a.parentWindow || a.defaultView : window
		}
		;
		z.M = function(a, b, c) {
			return Vf(window.document, arguments)
		}
		;
		var Vf = function(a, b) {
				var c = b[0]
					, d = b[1];
				if (!Wf && d && (d.name || d.type)) {
					c = ["\x3c", c];
					d.name && c.push(' name\x3d"', z.Wa(d.name), '"');
					if (d.type) {
						c.push(' type\x3d"', z.Wa(d.type), '"');
						var f = {};
						z.rc(f, d);
						delete f.type;
						d = f
					}
					c.push("\x3e");
					c = c.join("")
				}
				c = a.createElement(c);
				d && (z.qa(d) ? c.className = d : z.oa(d) ? c.className = d.join(" ") : Pf(c, d));
				2 < b.length && Xf(a, c, b, 2);
				return c
			}
			;
		var Xf = function(a, b, c, d) {
				function f(c) {
					c && b.appendChild(z.qa(c) ? a.createTextNode(c) : c)
				}
				for (; d < c.length; d++) {
					var g = c[d];
					!z.pa(g) || z.ua(g) && 0 < g.nodeType ? f(g) : z.x(Yf(g) ? z.Vb(g) : g, f)
				}
			}
			;
		z.Zf = function(a) {
			return z.$f(window.document, a)
		}
		;
		z.$f = function(a, b) {
			var c = a.createElement("DIV");
			z.C ? (c.innerHTML = "\x3cbr\x3e" + b,
				c.removeChild(c.firstChild)) : c.innerHTML = b;
			if (1 == c.childNodes.length)
				c = c.removeChild(c.firstChild);
			else {
				for (var d = a.createDocumentFragment(); c.firstChild; )
					d.appendChild(c.firstChild);
				c = d
			}
			return c
		}
		;
		var ag = function(a) {
				if (1 != a.nodeType)
					return !1;
				switch (a.tagName) {
					case "APPLET":
					case "AREA":
					case "BASE":
					case "BR":
					case "COL":
					case "COMMAND":
					case "EMBED":
					case "FRAME":
					case "HR":
					case "IMG":
					case "INPUT":
					case "IFRAME":
					case "ISINDEX":
					case "KEYGEN":
					case "LINK":
					case "NOFRAMES":
					case "NOSCRIPT":
					case "META":
					case "OBJECT":
					case "PARAM":
					case "SCRIPT":
					case "SOURCE":
					case "STYLE":
					case "TRACK":
					case "WBR":
						return !1
				}
				return !0
			}
			;
		z.bg = function(a, b) {
			Xf(z.Kf(a), a, arguments, 1)
		}
		;
		z.cg = function(a) {
			for (var b; b = a.firstChild; )
				a.removeChild(b)
		}
		;
		z.dg = function(a, b) {
			b.parentNode && b.parentNode.insertBefore(a, b)
		}
		;
		z.eg = function(a, b) {
			b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
		}
		;
		z.fg = function(a, b, c) {
			a.insertBefore(b, a.childNodes[c] || null )
		}
		;
		z.N = function(a) {
			return a && a.parentNode ? a.parentNode.removeChild(a) : null
		}
		;
		z.gg = function(a, b) {
			var c = b.parentNode;
			c && c.replaceChild(a, b)
		}
		;
		z.hg = function(a) {
			var b, c = a.parentNode;
			if (c && 11 != c.nodeType) {
				if (a.removeNode)
					return a.removeNode(!1);
				for (; b = a.firstChild; )
					c.insertBefore(b, a);
				return z.N(a)
			}
		}
		;
		z.ig = function(a) {
			return jg && void 0 != a.children ? a.children : z.Jb(a.childNodes, function(a) {
				return 1 == a.nodeType
			})
		}
		;
		z.kg = function(a) {
			return z.l(a.firstElementChild) ? a.firstElementChild : lg(a.firstChild, !0)
		}
		;
		var mg = function(a) {
				return z.l(a.nextElementSibling) ? a.nextElementSibling : lg(a.nextSibling, !0)
			}
			;
		z.ng = function(a) {
			return z.l(a.previousElementSibling) ? a.previousElementSibling : lg(a.previousSibling, !1)
		}
		;
		var lg = function(a, b) {
				for (; a && 1 != a.nodeType; )
					a = b ? a.nextSibling : a.previousSibling;
				return a
			}
			;
		z.og = function(a) {
			return z.ua(a) && 1 == a.nodeType
		}
		;
		var pg = function(a) {
				return z.ua(a) && a.window == a
			}
			;
		z.qg = function(a, b) {
			if (a.contains && 1 == b.nodeType)
				return a == b || a.contains(b);
			if ("undefined" != typeof a.compareDocumentPosition)
				return a == b || Boolean(a.compareDocumentPosition(b) & 16);
			for (; b && a != b; )
				b = b.parentNode;
			return b == a
		}
		;
		var rg = function(a, b) {
				if (a == b)
					return 0;
				if (a.compareDocumentPosition)
					return a.compareDocumentPosition(b) & 2 ? 1 : -1;
				if (z.C && !(9 <= z.sg)) {
					if (9 == a.nodeType)
						return -1;
					if (9 == b.nodeType)
						return 1
				}
				if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
					var c = 1 == a.nodeType
						, d = 1 == b.nodeType;
					if (c && d)
						return a.sourceIndex - b.sourceIndex;
					var f = a.parentNode
						, g = b.parentNode;
					return f == g ? tg(a, b) : !c && z.qg(f, b) ? -1 * ug(a, b) : !d && z.qg(g, a) ? ug(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
				}
				d = z.Kf(a);
				c = d.createRange();
				c.selectNode(a);
				c.collapse(!0);
				d = d.createRange();
				d.selectNode(b);
				d.collapse(!0);
				return c.compareBoundaryPoints(z.t.Range.START_TO_END, d)
			}
			;
		var ug = function(a, b) {
				var c = a.parentNode;
				if (c == b)
					return -1;
				for (var d = b; d.parentNode != c; )
					d = d.parentNode;
				return tg(d, a)
			}
			;
		var tg = function(a, b) {
				for (var c = b; c = c.previousSibling; )
					if (c == a)
						return -1;
				return 1
			}
			;
		z.vg = function(a) {
			var b, c = arguments.length;
			if (!c)
				return null ;
			if (1 == c)
				return arguments[0];
			var d = []
				, f = window.Infinity;
			for (b = 0; b < c; b++) {
				for (var g = [], h = arguments[b]; h; )
					g.unshift(h),
						h = h.parentNode;
				d.push(g);
				f = Math.min(f, g.length)
			}
			g = null ;
			for (b = 0; b < f; b++) {
				for (var h = d[0][b], k = 1; k < c; k++)
					if (h != d[k][b])
						return g;
				g = h
			}
			return g
		}
		;
		z.Kf = function(a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		}
		;
		z.wg = function(a, b) {
			if ("textContent" in a)
				a.textContent = b;
			else if (3 == a.nodeType)
				a.data = b;
			else if (a.firstChild && 3 == a.firstChild.nodeType) {
				for (; a.lastChild != a.firstChild; )
					a.removeChild(a.lastChild);
				a.firstChild.data = b
			} else
				z.cg(a),
					a.appendChild(z.Kf(a).createTextNode(String(b)))
		}
		;
		z.xg = function(a) {
			if ("outerHTML" in a)
				return a.outerHTML;
			var b = z.Kf(a).createElement("DIV");
			b.appendChild(a.cloneNode(!0));
			return b.innerHTML
		}
		;
		z.yg = function(a, b) {
			var c = [];
			zg(a, b, c, !1);
			return c
		}
		;
		var zg = function(a, b, c, d) {
				if (null  != a)
					for (a = a.firstChild; a; ) {
						if (b(a) && (c.push(a),
								d) || zg(a, b, c, d))
							return !0;
						a = a.nextSibling
					}
				return !1
			}
			;
		var Ag = function(a) {
				return Bg(a) && Cg(a)
			}
			;
		var Dg = function(a, b) {
				b ? a.tabIndex = 0 : (a.tabIndex = -1,
					a.removeAttribute("tabIndex"))
			}
			;
		var Bg = function(a) {
				a = a.getAttributeNode("tabindex");
				return null  != a && a.specified
			}
			;
		var Cg = function(a) {
				a = a.tabIndex;
				return sa(a) && 0 <= a && 32768 > a
			}
			;
		z.Eg = function(a) {
			if (Fg && "innerText" in a)
				a = z.Ra(a.innerText);
			else {
				var b = [];
				Gg(a, b, !0);
				a = b.join("")
			}
			a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
			a = a.replace(/\u200B/g, "");
			Fg || (a = a.replace(/ +/g, " "));
			" " != a && (a = a.replace(/^\s*/, ""));
			return a
		}
		;
		z.Hg = function(a) {
			var b = [];
			Gg(a, b, !1);
			return b.join("")
		}
		;
		var Gg = function(a, b, c) {
				if (!(a.nodeName in Ig))
					if (3 == a.nodeType)
						c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
					else if (a.nodeName in Jg)
						b.push(Jg[a.nodeName]);
					else
						for (a = a.firstChild; a; )
							Gg(a, b, c),
								a = a.nextSibling
			}
			;
		var Yf = function(a) {
				if (a && "number" == typeof a.length) {
					if (z.ua(a))
						return "function" == typeof a.item || "string" == typeof a.item;
					if (z.ta(a))
						return "function" == typeof a.item
				}
				return !1
			}
			;
		z.Kg = function(a, b, c, d) {
			if (!b && !c)
				return null ;
			var f = b ? b.toUpperCase() : null ;
			return z.Lg(a, function(a) {
				return (!f || a.nodeName == f) && (!c || z.qa(a.className) && z.y(a.className.split(/\s+/), c))
			}, !0, d)
		}
		;
		z.Mg = function(a, b) {
			return z.Kg(a, null , b, void 0)
		}
		;
		z.Lg = function(a, b, c, d) {
			c || (a = a.parentNode);
			c = null  == d;
			for (var f = 0; a && (c || f <= d); ) {
				if (b(a))
					return a;
				a = a.parentNode;
				f++
			}
			return null
		}
		;
		var Ng = function(a) {
				try {
					return a && a.activeElement
				} catch (b) {}
				return null
			}
			;
		var Jf = function(a) {
				this.La = a || z.t.document || window.document
			}
			;
		var Og = function(a) {
				return "CSS1Compat" == a.La.compatMode
			}
			;
		z.Pg = function(a) {
			return z.Sf(a.La)
		}
		;
		var Qg = function(a) {
				if (a.length) {
					var b = Rg.length;
					z.Wb(Rg, a);
					if (!b) {
						a = Rg;
						var c = function() {
								var b = a.shift()
									, b = Sg(b);
								a.length && yf(b, c, c, void 0);
								return b
							}
							;
						c()
					}
				} else
					(new uf).Hh(null )
			}
			;
		var Sg = function(a) {
				var b = {}
					, c = b.document || window.document
					, d = window.document.createElement("SCRIPT")
					, f = {
					XI: d,
					Yp: void 0
				}
					, g = new uf(Tg,f)
					, h = null
					, k = null  != b.timeout ? b.timeout : 5E3;
				0 < k && (h = window.setTimeout(function() {
					Ug(d, !0);
					xf(g, new Vg(Wg,"Timeout reached for loading script " + a))
				}, k),
					f.Yp = h);
				d.onload = d.onreadystatechange = function() {
					d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (Ug(d, b.OW || !1, h),
						g.Hh(null ))
				}
				;
				d.onerror = function() {
					Ug(d, !0, h);
					xf(g, new Vg(Xg,"Error while loading script " +
						a))
				}
				;
				f = b.attributes || {};
				z.rc(f, {
					type: "text/javascript",
					charset: "UTF-8",
					src: a
				});
				Pf(d, f);
				Yg(c).appendChild(d);
				return g
			}
			;
		var Yg = function(a) {
				var b = a.getElementsByTagName("HEAD");
				return b && 0 != b.length ? b[0] : a.documentElement
			}
			;
		var Tg = function() {
				if (this && this.XI) {
					var a = this.XI;
					a && "SCRIPT" == a.tagName && Ug(a, !0, this.Yp)
				}
			}
			;
		var Ug = function(a, b, c) {
				null  != c && z.t.clearTimeout(c);
				a.onload = z.p;
				a.onerror = z.p;
				a.onreadystatechange = z.p;
				b && window.setTimeout(function() {
					z.N(a)
				}, 0)
			}
			;
		var Vg = function(a, b) {
				var c = "Jsloader error (code #" + a + ")";
				b && (c += ": " + b);
				Ka.call(this, c);
				this.code = a
			}
			;
		var Zg = function() {
				z.G.call(this);
				this.S = new z.ee(this);
				this.Yg = {}
			}
			;
		var $g = function(a, b) {
				a.dispatchEvent(new ah);
				var c = a.Yg[b]
					, d = c.HI
					, f = c.pA
					, g = null ;
				try {
					if (a.lJ || a.Ar && (bh || wc() && 0 <= pb(yc(), "36")))
						for (var h = 0; h < d.length; h++)
							Fa(f[h] + " //@ sourceURL\x3d" + d[h]);
					else
						Fa(f.join("\n"))
				} catch (k) {
					g = k
				}
				a.dispatchEvent(new ch);
				g ? (c = c.Yw,
					a.dispatchEvent(new dh(0,g)),
				c && c(null )) : c.hB && c.hB();
				delete a.Yg[b]
			}
			;
		var ch = function() {
				z.qd.call(this, eh)
			}
			;
		var ah = function() {
				z.qd.call(this, fh)
			}
			;
		var dh = function(a, b) {
				z.qd.call(this, gh);
				this.error = b || null
			}
			;
		var hh = function() {
				this.pA = this.HI = null ;
				this.VG = !1;
				this.Yw = this.hB = null
			}
			;
		var ih = function(a, b) {
				z.cd.call(this);
				this.vE = this.UD = null ;
				this.ZG = b;
				this.mj = [];
				if (a > this.ZG)
					throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
				for (var c = 0; c < a; c++)
					this.mj.push(this.Cn())
			}
			;
		var jh = function(a) {
				return a.mj.length ? a.mj.pop() : a.Cn()
			}
			;
		var kh = function(a, b) {
				a.mj.length < a.ZG ? a.mj.push(b) : a.Mw(b)
			}
			;
		var lh = function() {
				this.Rf = [];
				this.Oz = new Ce;
				this.Mu = this.JJ = this.KJ = this.qJ = 0;
				this.tk = new Ce;
				this.pw = this.IJ = 0;
				this.sz = 1;
				this.Pr = new ih(0,4E3);
				this.Pr.Cn = function() {
					return new mh
				}
				;
				this.bB = new ih(0,50);
				this.bB.Cn = function() {
					return new nh
				}
				;
				var a = this;
				this.gy = new ih(0,2E3);
				this.gy.Cn = function() {
					return String(a.sz++)
				}
				;
				this.gy.Mw = function() {}
			}
			;
		var nh = function() {
				this.OB = this.time = this.count = 0
			}
			;
		var mh = function() {}
			;
		var oh = function(a, b, c, d) {
				var f = [];
				-1 == c ? f.push("    ") : f.push(ph(a.Qr - c));
				f.push(" ", qh(a.Qr - b));
				0 == a.Rr ? f.push(" Start        ") : 1 == a.Rr ? (f.push(" Done "),
					f.push(ph(a.vX - a.startTime), " ms ")) : f.push(" Comment      ");
				f.push(d, a);
				0 < a.HJ && f.push("[VarAlloc ", a.HJ, "] ");
				return f.join("")
			}
			;
		var ph = function(a) {
				a = Math.round(a);
				var b = "";
				1E3 > a && (b = " ");
				100 > a && (b = "  ");
				10 > a && (b = "   ");
				return b + a
			}
			;
		var qh = function(a) {
				a = Math.round(a);
				return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
			}
			;
		var rh = function() {
				z.cd.call(this)
			}
			;
		var sh = function(a, b) {
				this.Zr = a;
				this.ha = b
			}
			;
		var th = function(a, b) {
				z.cd.call(this);
				this.lE = a;
				this.ic = b;
				this.Iz = [];
				this.Bz = [];
				this.BE = []
			}
			;
		var uh = function(a, b) {
				a.au(a.Bz, b, void 0)
			}
			;
		var vh = function(a, b) {
				for (var c = [], d = 0; d < a.length; d++)
					try {
						a[d].LE(b)
					} catch (f) {
						Ac(f),
							c.push(f)
					}
				a.length = 0;
				return c.length ? c : null
			}
			;
		var wh = function() {
				z.cd.call(this);
				this.Wc = {};
				this.hi = [];
				this.fh = [];
				this.pp = [];
				this.sd = [];
				this.Qm = [];
				this.$q = {};
				this.fE = this.Uq = new th([],"");
				this.FG = null ;
				this.xo = new uf;
				this.LM = this.hD = !1;
				this.cz = null ;
				this.lr = 0;
				this.dK = this.DG = !1;
				this.mH = null
			}
			;
		var xh = function(a) {
				var b = a.Rb();
				b != a.DG && (a.Sr(b ? "active" : "idle"),
					a.DG = b);
				b = 0 < a.Qm.length;
				b != a.dK && (a.Sr(b ? "userActive" : "userIdle"),
					a.dK = b)
			}
			;
		var yh = function(a, b, c, d, f) {
				c.ip(f.Hh, f);
				uh(c, function(a) {
					xf(f, Error(a))
				});
				Ah(a, b) ? d && (Bh(a, b),
					xh(a)) : d && Bh(a, b)
			}
			;
		var Ch = function(a, b) {
				if (a.LM) {
					var c = (0,
						z.r)(a.lt, a, b);
					yf(a.xo, c, null , void 0)
				} else
					0 == a.hi.length ? a.lt(b) : (a.sd.push(b),
						xh(a))
			}
			;
		var Dh = function(a, b) {
				for (var c = 0; c < b.length; c++)
					if (a.Wc[b[c]].wc())
						throw Error("Module already loaded: " + b[c]);
				for (var d = [], c = 0; c < b.length; c++)
					d = d.concat(Eh(a, b[c]));
				Zb(d);
				return !a.hD && 1 < d.length ? (c = d.shift(),
					a.sd = z.Kb(d, function(a) {
						return [a]
					}).concat(a.sd),
					[c]) : d
			}
			;
		var Eh = function(a, b) {
				var c = [];
				z.y(a.pp, b) || c.push(b);
				for (var d = z.Vb(a.Wc[b].lE); d.length; ) {
					var f = d.pop();
					a.Wc[f].wc() || z.y(a.pp, f) || (c.unshift(f),
						Array.prototype.unshift.apply(d, a.Wc[f].lE))
				}
				Zb(c);
				return c
			}
			;
		z.Fh = function(a) {
			var b = wh.Y();
			b.Gd || (b.Wc[a].ap((0,
				z.r)(b.kF, b)) && Gh(b, Hh),
				Tb(b.Qm, a),
				Tb(b.hi, a),
			0 == b.hi.length && Ih(b),
			b.FG && a == b.FG && (b.xo.Th || b.xo.Hh()),
				xh(b))
		}
		;
		var Ah = function(a, b) {
				if (z.y(a.hi, b))
					return !0;
				for (var c = 0; c < a.sd.length; c++)
					if (z.y(a.sd[c], b))
						return !0;
				return !1
			}
			;
		var Bh = function(a, b) {
				z.y(a.Qm, b) || a.Qm.push(b)
			}
			;
		var Jh = function(a, b) {
				1 < a.fh.length ? a.sd = z.Kb(a.fh, function(a) {
					return [a]
				}).concat(a.sd) : Gh(a, b)
			}
			;
		var Gh = function(a, b) {
				var c = a.fh;
				a.hi.length = 0;
				for (var d = [], f = 0; f < a.sd.length; f++) {
					var g = z.Jb(a.sd[f], function(a) {
						var b = Eh(this, a);
						return z.Mb(c, function(a) {
							return z.y(b, a)
						})
					}, a);
					z.Wb(d, g)
				}
				for (f = 0; f < c.length; f++)
					Sb(d, c[f]);
				for (f = 0; f < d.length; f++) {
					for (g = 0; g < a.sd.length; g++)
						Tb(a.sd[g], d[f]);
					Tb(a.Qm, d[f])
				}
				var h = a.$q.error;
				if (h)
					for (f = 0; f < h.length; f++)
						for (var k = h[f], g = 0; g < d.length; g++)
							k("error", d[g], b);
				for (f = 0; f < c.length; f++)
					a.Wc[c[f]] && a.Wc[c[f]].Az(b);
				a.fh.length = 0;
				xh(a)
			}
			;
		var Ih = function(a) {
				for (; a.sd.length; ) {
					var b = z.Jb(a.sd.shift(), function(a) {
						return !this.Wc[a].wc()
					}, a);
					if (0 < b.length) {
						a.lt(b);
						return
					}
				}
				xh(a)
			}
			;
		z.Kh = function(a) {
			this.La = a
		}
		;
		var Lh = function(a) {
				a = (a.La.cookie || "").split(Mh);
				for (var b = [], c = [], d, f, g = 0; f = a[g]; g++)
					d = f.indexOf("\x3d"),
						-1 == d ? (b.push(""),
							c.push(f)) : (b.push(f.substring(0, d)),
							c.push(f.substring(d + 1)));
				return {
					keys: b,
					values: c
				}
			}
			;
		var Nh = function(a, b) {
				b ? a.setAttribute("role", b) : a.removeAttribute("role")
			}
			;
		var P = function(a, b, c) {
				z.oa(c) && (c = c.join(" "));
				var d = "aria-" + b;
				"" === c || void 0 == c ? (Oh || (Oh = {
					atomic: !1,
					autocomplete: "none",
					dropeffect: "none",
					haspopup: !1,
					live: "off",
					multiline: !1,
					multiselectable: !1,
					orientation: "vertical",
					readonly: !1,
					relevant: "additions text",
					required: !1,
					sort: "none",
					busy: !1,
					disabled: !1,
					hidden: !1,
					invalid: "false"
				}),
					c = Oh,
					b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
			}
			;
		var Ph = function(a, b) {
				var c = a.getAttribute("aria-" + b);
				return null  == c || void 0 == c ? "" : String(c)
			}
			;
		var Qh = function(a, b) {
				var c = "";
				b && (c = b.id);
				P(a, "activedescendant", c)
			}
			;
		var Rh = function(a) {
				return Ph(a, "label")
			}
			;
		var Sh = function(a) {
				if (a.classList)
					return a.classList;
				a = a.className;
				return z.qa(a) && a.match(/\S+/g) || []
			}
			;
		z.Th = function(a, b) {
			return a.classList ? a.classList.contains(b) : z.y(Sh(a), b)
		}
		;
		z.Uh = function(a, b) {
			a.classList ? a.classList.add(b) : z.Th(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
		}
		;
		var Vh = function(a, b) {
				if (a.classList)
					z.x(b, function(b) {
						z.Uh(a, b)
					});
				else {
					var c = {};
					z.x(Sh(a), function(a) {
						c[a] = !0
					});
					z.x(b, function(a) {
						c[a] = !0
					});
					a.className = "";
					for (var d in c)
						a.className += 0 < a.className.length ? " " + d : d
				}
			}
			;
		z.Wh = function(a, b) {
			a.classList ? a.classList.remove(b) : z.Th(a, b) && (a.className = z.Jb(Sh(a), function(a) {
				return a != b
			}).join(" "))
		}
		;
		var Xh = function(a, b) {
				a.classList ? z.x(b, function(b) {
					z.Wh(a, b)
				}) : a.className = z.Jb(Sh(a), function(a) {
					return !z.y(b, a)
				}).join(" ")
			}
			;
		var Yh = function(a, b, c) {
				c ? z.Uh(a, b) : z.Wh(a, b)
			}
			;
		var $h = function(a) {
				if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
					return !1;
				switch (a.keyCode) {
					case 18:
					case 20:
					case 93:
					case 17:
					case 40:
					case 35:
					case 27:
					case 36:
					case 45:
					case 37:
					case 224:
					case 91:
					case 144:
					case 12:
					case 34:
					case 33:
					case 19:
					case 255:
					case 44:
					case 39:
					case 145:
					case 16:
					case 38:
					case 252:
					case 224:
					case 92:
						return !1;
					case 0:
						return !z.B;
					default:
						return 166 > a.keyCode || 183 < a.keyCode
				}
			}
			;
		var ai = function(a, b, c, d, f) {
				if (!(z.C || z.ld || z.D && z.E("525")))
					return !0;
				if (z.Ad && f)
					return bi(a);
				if (f && !d)
					return !1;
				sa(b) && (b = ci(b));
				if (!c && (17 == b || 18 == b || z.Ad && 91 == b))
					return !1;
				if ((z.D || z.ld) && d && c)
					switch (a) {
						case 220:
						case 219:
						case 221:
						case 192:
						case 186:
						case 189:
						case 187:
						case 188:
						case 190:
						case 191:
						case 192:
						case 222:
							return !1
					}
				if (z.C && d && b == a)
					return !1;
				switch (a) {
					case 13:
						return !0;
					case 27:
						return !(z.D || z.ld)
				}
				return bi(a)
			}
			;
		var bi = function(a) {
				if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (z.D || z.ld) && 0 == a)
					return !0;
				switch (a) {
					case 32:
					case 43:
					case 63:
					case 64:
					case 107:
					case 109:
					case 110:
					case 111:
					case 186:
					case 59:
					case 189:
					case 187:
					case 61:
					case 188:
					case 190:
					case 191:
					case 192:
					case 222:
					case 219:
					case 220:
					case 221:
						return !0;
					default:
						return !1
				}
			}
			;
		var ci = function(a) {
				if (z.B)
					a = di(a);
				else if (z.Ad && z.D)
					a: switch (a) {
						case 93:
							a = 91;
							break a
					}
				return a
			}
			;
		var di = function(a) {
				switch (a) {
					case 61:
						return 187;
					case 59:
						return 186;
					case 173:
						return 189;
					case 224:
						return 91;
					case 0:
						return 224;
					default:
						return a
				}
			}
			;
		z.ei = function(a, b, c, d) {
			this.top = a;
			this.right = b;
			this.bottom = c;
			this.left = d
		}
		;
		var fi = function(a, b) {
				var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0
					, d = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
				return Math.sqrt(c * c + d * d)
			}
			;
		var gi = function(a, b, c, d) {
				this.left = a;
				this.top = b;
				this.width = c;
				this.height = d
			}
			;
		var hi = function(a) {
				return new z.ei(a.top,a.left + a.width,a.top + a.height,a.left)
			}
			;
		z.ii = function(a, b, c) {
			if (z.qa(b))
				(b = ji(a, b)) && (a.style[b] = c);
			else
				for (var d in b) {
					c = a;
					var f = b[d]
						, g = ji(c, d);
					g && (c.style[g] = f)
				}
		}
		;
		var ji = function(a, b) {
				var c = ki[b];
				if (!c) {
					var d = ub(b)
						, c = d;
					void 0 === a.style[d] && (d = (z.D ? "Webkit" : z.B ? "Moz" : z.C ? "ms" : z.li ? "O" : null ) + vb(d),
					void 0 !== a.style[d] && (c = d));
					ki[b] = c
				}
				return c
			}
			;
		var mi = function(a, b) {
				var c = a.style[ub(b)];
				return "undefined" !== typeof c ? c : a.style[ji(a, b)] || ""
			}
			;
		z.ni = function(a, b) {
			var c = z.Kf(a);
			return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null )) ? c[b] || c.getPropertyValue(b) || "" : ""
		}
		;
		z.oi = function(a, b) {
			return a.currentStyle ? a.currentStyle[b] : null
		}
		;
		z.pi = function(a, b) {
			return z.ni(a, b) || z.oi(a, b) || a.style && a.style[b]
		}
		;
		var qi = function(a) {
				return z.pi(a, "position")
			}
			;
		z.ri = function(a, b, c) {
			var d;
			b instanceof Ff ? (d = b.x,
				b = b.y) : (d = b,
				b = c);
			a.style.left = si(d, !1);
			a.style.top = si(b, !1)
		}
		;
		var ti = function(a) {
				a = a ? z.Kf(a) : window.document;
				return !z.C || 9 <= z.sg || Og(z.I(a)) ? a.documentElement : a.body
			}
			;
		var ui = function(a) {
				var b = a.body;
				a = a.documentElement;
				return new Ff(b.scrollLeft || a.scrollLeft,b.scrollTop || a.scrollTop)
			}
			;
		var vi = function(a) {
				var b;
				try {
					b = a.getBoundingClientRect()
				} catch (c) {
					return {
						left: 0,
						top: 0,
						right: 0,
						bottom: 0
					}
				}
				z.C && a.ownerDocument.body && (a = a.ownerDocument,
					b.left -= a.documentElement.clientLeft + a.body.clientLeft,
					b.top -= a.documentElement.clientTop + a.body.clientTop);
				return b
			}
			;
		var wi = function(a) {
				if (z.C && !(8 <= z.sg))
					return a.offsetParent;
				var b = z.Kf(a)
					, c = z.pi(a, "position")
					, d = "fixed" == c || "absolute" == c;
				for (a = a.parentNode; a && a != b; a = a.parentNode)
					if (11 == a.nodeType && a.host && (a = a.host),
							c = z.pi(a, "position"),
							d = d && "static" == c && a != b.documentElement && a != b.body,
						!d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
						return a;
				return null
			}
			;
		var xi = function(a) {
				for (var b = new z.ei(0,window.Infinity,window.Infinity,0), c = z.I(a), d = c.wa().body, f = c.wa().documentElement, g = Tf(c.La); a = wi(a); )
					if (!(z.C && 0 == a.clientWidth || z.D && 0 == a.clientHeight && a == d) && a != d && a != f && "visible" != z.pi(a, "overflow")) {
						var h = z.yi(a)
							, k = new Ff(a.clientLeft,a.clientTop);
						h.x += k.x;
						h.y += k.y;
						b.top = Math.max(b.top, h.y);
						b.right = Math.min(b.right, h.x + a.clientWidth);
						b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
						b.left = Math.max(b.left, h.x)
					}
				d = g.scrollLeft;
				g = g.scrollTop;
				b.left = Math.max(b.left,
					d);
				b.top = Math.max(b.top, g);
				c = z.Rf(c.Ua());
				b.right = Math.min(b.right, d + c.width);
				b.bottom = Math.min(b.bottom, g + c.height);
				return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
			}
			;
		var zi = function(a, b) {
				var c = b || Tf(window.document), d;
				d = c || Tf(window.document);
				var f = z.yi(a)
					, g = z.yi(d)
					, h = Ai(d);
				if (d == Tf(window.document)) {
					var k = f.x - d.scrollLeft
						, f = f.y - d.scrollTop;
					!z.C || 10 <= z.sg || (k += h.left,
						f += h.top)
				} else
					k = f.x - g.x - h.left,
						f = f.y - g.y - h.top;
				var h = d.clientHeight - a.offsetHeight
					, g = d.scrollLeft
					, m = d.scrollTop
					, g = g + Math.min(k, Math.max(k - (d.clientWidth - a.offsetWidth), 0))
					, m = m + Math.min(f, Math.max(f - h, 0));
				d = new Ff(g,m);
				c.scrollLeft = d.x;
				c.scrollTop = d.y
			}
			;
		z.yi = function(a) {
			var b = z.Kf(a)
				, c = new Ff(0,0)
				, d = ti(b);
			if (a == d)
				return c;
			a = vi(a);
			b = z.Pg(z.I(b));
			c.x = a.left + b.x;
			c.y = a.top + b.y;
			return c
		}
		;
		var Bi = function(a, b) {
				var c = Ci(a)
					, d = Ci(b);
				return new Ff(c.x - d.x,c.y - d.y)
			}
			;
		var Di = function(a) {
				a = vi(a);
				return new Ff(a.left,a.top)
			}
			;
		var Ci = function(a) {
				if (1 == a.nodeType)
					return Di(a);
				a = a.changedTouches ? a.changedTouches[0] : a;
				return new Ff(a.clientX,a.clientY)
			}
			;
		var Ei = function(a, b, c) {
				var d = z.yi(a);
				b instanceof Ff && (c = b.y,
					b = b.x);
				z.ri(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
			}
			;
		var Fi = function(a, b, c) {
				if (b instanceof z.Hf)
					c = b.height,
						b = b.width;
				else if (void 0 == c)
					throw Error("missing height argument");
				a.style.width = si(b, !0);
				a.style.height = si(c, !0)
			}
			;
		var si = function(a, b) {
				"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
				return a
			}
			;
		var Gi = function(a) {
				return z.Hi(a)
			}
			;
		z.Hi = function(a) {
			var b = Ii;
			if ("none" != z.pi(a, "display"))
				return b(a);
			var c = a.style
				, d = c.display
				, f = c.visibility
				, g = c.position;
			c.visibility = "hidden";
			c.position = "absolute";
			c.display = "inline";
			a = b(a);
			c.display = d;
			c.position = g;
			c.visibility = f;
			return a
		}
		;
		var Ii = function(a) {
				var b = a.offsetWidth
					, c = a.offsetHeight
					, d = z.D && !b && !c;
				return z.l(b) && !d || !a.getBoundingClientRect ? new z.Hf(b,c) : (a = vi(a),
					new z.Hf(a.right - a.left,a.bottom - a.top))
			}
			;
		var Ji = function(a) {
				var b = z.yi(a);
				a = z.Hi(a);
				return new gi(b.x,b.y,a.width,a.height)
			}
			;
		var Ki = function(a, b) {
				var c = a.style;
				"opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
			}
			;
		z.Q = function(a, b) {
			a.style.display = b ? "" : "none"
		}
		;
		var Li = function(a) {
				return "none" != a.style.display
			}
			;
		var Mi = function(a, b) {
				var c = z.I(b)
					, d = null
					, f = c.wa();
				if (z.C && f.createStyleSheet)
					c = d = f.createStyleSheet(),
						z.C && z.l(c.cssText) ? c.cssText = a : c.innerHTML = a;
				else {
					f = z.Nf(c.La, "HEAD", void 0, void 0)[0];
					f || (d = z.Nf(c.La, "BODY", void 0, void 0)[0],
						f = c.B("HEAD"),
						d.parentNode.insertBefore(f, d));
					var g = d = c.B("STYLE");
					z.C && z.l(g.cssText) ? g.cssText = a : g.innerHTML = a;
					c.appendChild(f, d)
				}
			}
			;
		z.Ni = function(a) {
			return "rtl" == z.pi(a, "direction")
		}
		;
		z.Oi = function(a, b, c) {
			c = c ? null  : a.getElementsByTagName("*");
			if (z.Pi) {
				if (b = b ? "none" : "",
					a.style && (a.style[z.Pi] = b),
						c) {
					a = 0;
					for (var d; d = c[a]; a++)
						d.style && (d.style[z.Pi] = b)
				}
			} else if (z.C || z.li)
				if (b = b ? "on" : "",
						a.setAttribute("unselectable", b),
						c)
					for (a = 0; d = c[a]; a++)
						d.setAttribute("unselectable", b)
		}
		;
		z.Qi = function(a) {
			return new z.Hf(a.offsetWidth,a.offsetHeight)
		}
		;
		var Ri = function(a, b, c, d) {
				if (/^\d+px?$/.test(b))
					return (0,
						window.parseInt)(b, 10);
				var f = a.style[c]
					, g = a.runtimeStyle[c];
				a.runtimeStyle[c] = a.currentStyle[c];
				a.style[c] = b;
				b = a.style[d];
				a.style[c] = f;
				a.runtimeStyle[c] = g;
				return b
			}
			;
		var Si = function(a, b) {
				var c = z.oi(a, b);
				return c ? Ri(a, c, "left", "pixelLeft") : 0
			}
			;
		z.Ti = function(a) {
			if (z.C) {
				var b = Si(a, "paddingLeft")
					, c = Si(a, "paddingRight")
					, d = Si(a, "paddingTop");
				a = Si(a, "paddingBottom");
				return new z.ei(d,c,a,b)
			}
			b = z.ni(a, "paddingLeft");
			c = z.ni(a, "paddingRight");
			d = z.ni(a, "paddingTop");
			a = z.ni(a, "paddingBottom");
			return new z.ei((0,
				window.parseFloat)(d),(0,
				window.parseFloat)(c),(0,
				window.parseFloat)(a),(0,
				window.parseFloat)(b))
		}
		;
		var Ui = function(a, b) {
				if ("none" == z.oi(a, b + "Style"))
					return 0;
				var c = z.oi(a, b + "Width");
				return c in Vi ? Vi[c] : Ri(a, c, "left", "pixelLeft")
			}
			;
		var Ai = function(a) {
				if (z.C && !(9 <= z.sg)) {
					var b = Ui(a, "borderLeft")
						, c = Ui(a, "borderRight")
						, d = Ui(a, "borderTop");
					a = Ui(a, "borderBottom");
					return new z.ei(d,c,a,b)
				}
				b = z.ni(a, "borderLeftWidth");
				c = z.ni(a, "borderRightWidth");
				d = z.ni(a, "borderTopWidth");
				a = z.ni(a, "borderBottomWidth");
				return new z.ei((0,
					window.parseFloat)(d),(0,
					window.parseFloat)(c),(0,
					window.parseFloat)(a),(0,
					window.parseFloat)(b))
			}
			;
		var Wi = function() {
				var a = window.document.createElement("DIV");
				a.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
				var b = window.document.createElement("DIV");
				Fi(b, "200px", "200px");
				a.appendChild(b);
				window.document.body.appendChild(a);
				b = a.offsetWidth - a.clientWidth;
				z.N(a);
				return b
			}
			;
		var Xi = function(a) {
				var b = a.offsetLeft
					, c = a.offsetParent;
				c || "fixed" != qi(a) || (c = z.Kf(a).documentElement);
				if (!c)
					return b;
				if (z.B)
					var d = Ai(c)
						, b = b + d.left;
				else
					8 <= z.sg && !(9 <= z.sg) && (d = Ai(c),
						b -= d.left);
				return z.Ni(c) ? c.clientWidth - (b + a.offsetWidth) : b
			}
			;
		var Yi = function(a, b, c) {
				z.G.call(this);
				this.target = a;
				this.handle = b || a;
				this.gt = c || new gi(window.NaN,window.NaN,window.NaN,window.NaN);
				this.La = z.Kf(a);
				this.S = new z.ee(this);
				z.fd(this, this.S);
				this.deltaY = this.deltaX = this.yu = this.xu = this.screenY = this.screenX = this.clientY = this.clientX = 0;
				this.fc = !0;
				this.bj = !1;
				this.oI = !0;
				this.fy = 0;
				this.Hi = this.zP = !1;
				z.F(this.handle, ["touchstart", "mousedown"], this.Lm, !1, this)
			}
			;
		var Zi = function(a) {
				z.l(a.kg) || (a.kg = z.Ni(a.target));
				return a.kg
			}
			;
		var $i = function(a, b, c) {
				var d = z.Pg(z.I(a.La));
				b += d.x - a.Rz.x;
				c += d.y - a.Rz.y;
				a.Rz = d;
				a.deltaX += b;
				a.deltaY += c;
				return new Ff(aj(a, a.deltaX),bj(a, a.deltaY))
			}
			;
		var cj = function(a, b, c, d) {
				a.Ew(c, d);
				a.dispatchEvent(new dj("drag",a,b.clientX,b.clientY,b,c,d))
			}
			;
		var aj = function(a, b) {
				var c = a.gt
					, d = (0,
					window.isNaN)(c.left) ? null  : c.left
					, c = (0,
					window.isNaN)(c.width) ? 0 : c.width;
				return Math.min(null  != d ? d + c : window.Infinity, Math.max(null  != d ? d : -window.Infinity, b))
			}
			;
		var bj = function(a, b) {
				var c = a.gt
					, d = (0,
					window.isNaN)(c.top) ? null  : c.top
					, c = (0,
					window.isNaN)(c.height) ? 0 : c.height;
				return Math.min(null  != d ? d + c : window.Infinity, Math.max(null  != d ? d : -window.Infinity, b))
			}
			;
		var dj = function(a, b, c, d, f, g, h) {
				z.qd.call(this, a);
				this.clientX = c;
				this.clientY = d;
				this.nD = f;
				this.left = z.l(g) ? g : b.deltaX;
				this.top = z.l(h) ? h : b.deltaY;
				this.Ir = b
			}
			;
		var ej = function(a) {
				z.G.call(this);
				this.h = a;
				a = z.C ? "focusout" : "blur";
				this.AQ = z.F(this.h, z.C ? "focusin" : "focus", this, !z.C);
				this.BQ = z.F(this.h, a, this, !z.C)
			}
			;
		z.fj = function() {}
		;
		z.gj = function(a) {
			return ":" + (a.sz++).toString(36)
		}
		;
		z.R = function(a) {
			z.G.call(this);
			this.da = a || z.I();
			this.kg = hj;
			this.ic = null ;
			this.ya = !1;
			this.h = null ;
			this.ci = void 0;
			this.af = this.Oc = this.Qa = this.nz = null ;
			this.hK = !1
		}
		;
		var ij = function(a, b) {
				switch (a) {
					case 1:
						return b ? "disable" : "enable";
					case 2:
						return b ? "highlight" : "unhighlight";
					case 4:
						return b ? "activate" : "deactivate";
					case 8:
						return b ? "select" : "unselect";
					case 16:
						return b ? "check" : "uncheck";
					case 32:
						return b ? "focus" : "blur";
					case 64:
						return b ? "open" : "close"
				}
				throw Error("Invalid component state");
			}
			;
		var jj = function(a, b) {
				a.Qa && a.Qa.af && (oc(a.Qa.af, a.ic),
					pc(a.Qa.af, b, a));
				a.ic = b
			}
			;
		var kj = function(a, b) {
				if (a == b)
					throw Error("Unable to set parent component");
				if (b && a.Qa && a.ic && z.lj(a.Qa, a.ic) && a.Qa != b)
					throw Error("Unable to set parent component");
				a.Qa = b;
				z.R.o.mb.call(a, b)
			}
			;
		var mj = function(a) {
				return a.Oc ? a.Oc.length : 0
			}
			;
		z.lj = function(a, b) {
			var c;
			a.af && b ? (c = a.af,
				c = (null  !== c && b in c ? c[b] : void 0) || null ) : c = null ;
			return c
		}
		;
		var nj = function(a, b) {
				return a.Oc ? a.Oc[b] || null  : null
			}
			;
		z.oj = function(a, b, c) {
			a.Oc && z.x(a.Oc, b, c)
		}
		;
		var pj = function(a, b) {
				return a.Oc && b ? z.Ib(a.Oc, b) : -1
			}
			;
		var qj = function(a, b) {
				this.h = a;
				this.da = b
			}
			;
		z.rj = function(a, b) {
			z.G.call(this);
			this.ha = new z.ee(this);
			this.kh(a || null );
			b && (this.yd = b)
		}
		;
		var sj = function(a) {
				if (a.Nj)
					throw Error("Can not change this state of the popup while showing.");
			}
			;
		var tj = function(a, b) {
				return z.Mb(a.ZC || [], function(a) {
					return b === a || z.qg(a, b)
				})
			}
			;
		var uj = function(a, b) {
				z.R.call(this, b);
				this.pV = !!a;
				this.Yl = null
			}
			;
		var vj = function(a) {
				a.Ue || (a.Ue = a.L().createElement("SPAN"),
					z.Q(a.Ue, !1),
					Dg(a.Ue, !0),
					a.Ue.style.position = "absolute")
			}
			;
		var wj = function(a, b) {
				a.lH || (a.lH = new qj(a.h,a.da));
				var c = a.lH;
				if (b) {
					c.Ol || (c.Ol = []);
					for (var d = c.da.QN(c.da.wa().body), f = 0; f < d.length; f++) {
						var g = d[f];
						g == c.h || Ph(g, "hidden") || (P(g, "hidden", !0),
							c.Ol.push(g))
					}
				} else if (c.Ol) {
					for (f = 0; f < c.Ol.length; f++)
						c.Ol[f].removeAttribute("aria-hidden");
					c.Ol = null
				}
			}
			;
		var xj = function(a, b) {
				a.zc && z.Q(a.zc, b);
				a.Nc && z.Q(a.Nc, b);
				z.Q(a.m(), b);
				z.Q(a.Ue, b)
			}
			;
		z.yj = function(a, b, c) {
			uj.call(this, b, c);
			this.Pc = a || "modal-dialog";
			this.rc = z.zj()
		}
		;
		z.Aj = function(a) {
			a.m() || a.render()
		}
		;
		var Bj = function(a) {
				z.Aj(a);
				return a.bd
			}
			;
		var Cj = function(a) {
				z.Aj(a);
				return a.wd
			}
			;
		var Dj = function(a, b) {
				a.Rq = b;
				if (a.m()) {
					var c = a.oj();
					c && Ki(c, a.Rq)
				}
			}
			;
		var Ej = function(a, b) {
				a.cm = b;
				if (a.ya) {
					var c = a.L()
						, d = a.oj()
						, f = a.zc;
					b ? (f && c.Ps(f, a.m()),
						c.Ps(d, a.m())) : (c.removeNode(f),
						c.removeNode(d))
				}
				a.U() && wj(a, b)
			}
			;
		var Fj = function(a, b) {
				var c = (0,
					z.qb)(a.Pc + "-title-draggable").split(" ");
				a.m() && (b ? Vh(a.xd, c) : Xh(a.xd, c));
				b && !a.Gb ? (a.Gb = new Yi(a.m(),a.xd),
					Vh(a.xd, c),
					z.F(a.Gb, "start", a.hU, !1, a)) : !b && a.Gb && (a.Gb.H(),
					a.Gb = null )
			}
			;
		var Gj = function(a) {
				if (a.ey) {
					var b = a.rc
						, c = b && b.hw;
					c ? (b = b.get(c),
					a.dispatchEvent(new Hj(c,b)) && a.G(!1)) : a.G(!1)
				}
			}
			;
		z.Ij = function(a, b) {
			a.rc = b;
			if (a.qc) {
				if (a.rc) {
					var c = a.rc;
					c.h = a.qc;
					c.render()
				} else
					z.Ef(a.qc, Jj);
				z.Q(a.qc, !!a.rc)
			}
		}
		;
		var Hj = function(a, b) {
				this.type = z.Kj;
				this.key = a;
				this.caption = b
			}
			;
		z.Lj = function(a) {
			this.da = a || z.I();
			Ce.call(this)
		}
		;
		z.zj = function() {
			return (new z.Lj).Cd(Mj.sg, !0).Cd(Mj.Ye, !1, !0)
		}
		;
		z.Nj = function(a) {
			var b = !1, c;
			return function() {
				if (b)
					return c;
				b = !0;
				return c = a.apply(this, arguments)
			}
		}
		;
		z.S = function(a) {
			z.yj.call(this, a);
			this.rc = null ;
			Oj(this)
		}
		;
		var Oj = function(a) {
				var b = window.document.documentElement;
				a.v().g(a, "beforeshow", function() {
					this.cm && (window.document.body.clientWidth < window.innerWidth && z.T.add(b, "modal-doc-overflow"),
						this.Ow = !1,
						Fj(this, !1),
						z.T.add(b, "modal-open"),
					this.Wj || ((0,
						window.$)(this.m()).wrap('\x3cdiv class\x3d"modal-wrapper"\x3e'),
						this.Wj = this.m().parentNode),
					this.VE && z.T.add(this.m(), "centered"),
						this.Wj.removeAttribute("hidden"))
				}).g(a, "hide", function() {
					this.cm && (1 === (0,
						window.$)(".modal-wrapper:visible").length && (z.T.remove(b,
						"modal-open"),
						z.T.remove(b, "modal-doc-overflow")),
					this.Wj && this.Wj.setAttribute("hidden", ""))
				});
				gd(a, function() {
					this.Wj && (z.N(this.Wj),
						this.Wj = null )
				}, a);
				a.ZP()
			}
			;
		var Pj = function(a) {
				a.Rk && a.v().g(a.Nc || a.zc, "click", function() {
					this.Rk && this.G(!1)
				})
			}
			;
		z.Qj = function(a, b) {
			a.h && a.ya && sa(b) && (!Rj || Sj) && (a.h.style.width = si(b, !0),
				a.kK = b);
			z.qa(b) && (a.h.style.width = b)
		}
		;
		z.U = function(a, b) {
			b = void 0 === b ? z.p : b;
			var c = new z.S
				, d = ["yes", "ok"]
				, f = Object.assign({
				open: !0,
				modal: !1,
				title: "消息",
				content: "",
				className: "",
				disposeOnHide: !0,
				buttons: {
					yes: "确认",
					cancel: "取消"
				}
			}, a);
			(function(a, b) {
				b = void 0 === b ? {} : b;
				for (var c = Object.entries(z.ec(b, Boolean)).sort(function(a, b) {
					var c = z.ia(a).next().value
						, f = z.ia(b).next().value;
					return d.indexOf(c) - d.indexOf(f)
				}), f = new z.Lj, n = z.ia(c), q = n.next(); !q.done; q = n.next()) {
					var A = z.ia(q.value)
						, q = A.next().value
						, A = A.next().value;
					f.set(q, A, -1 !== d.indexOf(q))
				}
				z.Ij(a,
					f);
				z.T.enable(a.Uh(), "with-button", !!c.length)
			})(c, f.buttons);
			c.g(z.Kj, function(a) {
				return b.call(c, -1 !== d.indexOf(a.key))
			});
			z.T.add(c.Uh(), f.className);
			c.Ya(f.title);
			c.Bm(f.modal);
			c.ka(f.content);
			c.G(f.open);
			c.Bf(f.disposeOnHide);
			f.ea && c.ea();
			return c
		}
		;
		var Tj = function(a) {
				var b = null ;
				return function(c) {
					for (var d = [], f = 0; f < arguments.length; ++f)
						d[f - 0] = arguments[f];
					b && !b.Gd && b.H();
					return b = a.apply(null , [].concat(d instanceof Array ? d : ja(z.ia(d))))
				}
			}
			;
		z.V = function(a) {
			bf.call(this);
			this.ZJ = !!a;
			this.headers.set("X-Requested-With", "XMLHttpRequest");
			this.on("complete", this.jO, !1, this)
		}
		;
		z.Uj = function(a, b, c, d) {
			var f = new z.V;
			if (b)
				f.on("complete", b);
			f.ajax(a, d, c)
		}
		;
		var Vj = function(a) {
				var b = a.getResponseHeader("content-type");
				if (b) {
					var c = Wj[b.split(";")[0].toLowerCase()];
					if (c && Xj.length) {
						var d = z.rf(a);
						z.x(Xj, function(a) {
							a.AV === c && a.filter("json" === c ? JSON.parse(d) : d)
						}, a)
					}
				}
			}
			;
		var Yj = function() {
				if (Zj)
					return Zj;
				var a = z.M("div", {
					id: "zh-global-spinner",
					style: "display:none",
					innerHTML: "加载中…"
				});
				window.document.body.appendChild(a);
				return Zj = a
			}
			;
		var ak = function() {
				z.G.call(this)
			}
			;
		z.bk = function(a, b, c) {
			function d() {
				var b = new z.V(!0)
					, d = "/question/" + (a ? "set_anonymous" : "set_public")
					, g = "qid\x3d" + (c || z.ck.qa);
				b.on("success", function() {
					var c = z.sf(b);
					c && !c.r && (z.ck && (z.ck.kb = a),
						f.dispatchEvent(new z.dk(a)))
				});
				b.ajax(d, g)
			}
			var f = z.ek
				, g = {
				title: "确认使用匿名身份？",
				content: '\x3cp\x3e使用匿名身份后\x3c/p\x3e\x3cul style\x3d"margin: 5px 0 0 5px;list-style-position: inside;"\x3e\x3cli\x3e提问、回答、赞同、关注会显示为匿名\x3c/li\x3e\x3cli\x3e除提问者本人，不能匿名编辑问题\x3c/li\x3e\x3cli\x3e不能邀请别人回答问题\x3c/li\x3e\x3c/ul\x3e'
			}
				, h = {
				title: "确认取消匿名身份？",
				content: "取消匿名身份后， 提问、回答、赞同和关注将以实名显示。"
			};
			z.U.confirm(a ? g : h, function(a) {
				a && d();
				b && b(a)
			})
		}
		;
		z.dk = function(a) {
			this.type = "anon_change";
			this.kb = a
		}
		;
		var fk = function() {}
			;
		var gk = function() {}
			;
		var hk = function(a) {
				this.Kc = a
			}
			;
		var ik = function() {
				var a = null ;
				try {
					a = window.localStorage || null
				} catch (b) {}
				this.Kc = a
			}
			;
		var jk = function() {
				var a = null ;
				try {
					a = window.sessionStorage || null
				} catch (b) {}
				this.Kc = a
			}
			;
		var kk = function(a, b) {
				this.uJ = a;
				this.vd = null ;
				if (z.C && !(9 <= z.sg)) {
					lk || (lk = new Ce);
					this.vd = lk.get(a);
					this.vd || (b ? this.vd = window.document.getElementById(b) : (this.vd = window.document.createElement("userdata"),
						this.vd.addBehavior("#default#userData"),
						window.document.body.appendChild(this.vd)),
						lk.set(a, this.vd));
					try {
						this.vd.load(this.uJ)
					} catch (c) {
						this.vd = null
					}
				}
			}
			;
		var mk = function(a) {
				return "_" + (0,
						window.encodeURIComponent)(a).replace(/[.!~*'()%]/g, function(a) {
						return nk[a]
					})
			}
			;
		var ok = function(a) {
				try {
					a.vd.save(a.uJ)
				} catch (b) {
					throw "Storage mechanism: Quota exceeded";
				}
			}
			;
		var pk = function(a) {
				return a.vd.XMLDocument.documentElement
			}
			;
		var qk = function(a, b) {
				this.Mo = a;
				this.nm = b + "::"
			}
			;
		var rk = function(a, b, c) {
				z.cd.call(this);
				this.Rj = null  != c ? (0,
					z.r)(a, c) : a;
				this.Pg = b;
				this.Zk = (0,
					z.r)(this.lS, this);
				this.Rv = []
			}
			;
		var sk = function(a) {
				z.G.call(this);
				this.viewport = a || window;
				this.size = null ;
				this.gM = z.Ti(window.document.body).top;
				this.ha = new z.ee(this);
				this.Xp = null ;
				this.dN = 250;
				this.Eb();
				(0,
					window.setTimeout)((0,
					z.r)(this.update, this))
			}
			;
		z.tk = function(a, b) {
			var c = b.getBoundingClientRect();
			return c.bottom < a.gM || c.bottom > a.size.height ? !1 : !0
		}
		;
		var uk = function(a, b, c) {
				b.v().g(a, "update", function(a) {
					var f;
					z.Bd(b) ? f = b.hasListener("nearbottom", void 0) : (f = z.Md(b),
						f = !!f && f.hasListener("nearbottom", void 0));
					f && c(a.target.size) && b.dispatchEvent("nearbottom")
				})
			}
			;
		z.vk = function(a, b, c) {
			var d = z.wk;
			d.ha.g(d, "update", function g() {
				a.getBoundingClientRect().bottom < this.size.height && (b.call(c),
					this.ha.pa(this, "update", g))
			})
		}
		;
		var xk = function(a, b) {
				this.Qy = "continuation:" + a;
				this.Kc = b || z.yk;
				this.QF = []
			}
			;
		var zk = function(a, b) {
				var c = a.jb();
				c.push(b);
				try {
					a.Kc.set(a.Qy, JSON.stringify(c))
				} catch (d) {}
			}
			;
		z.Ak = function(a) {
			if (window.za.collect && z.ua(a) && a.action) {
				var b = {
					eventAction: a.action,
					eventCategory: a.category,
					eventLabel: a.label,
					eventValue: a.value && (0,
						window.parseInt)(a.value, 10),
					eventAttributes: a.attributes,
					nonInteractionType: !!a.uH
				};
				a.nc ? zk(Bk, b) : window.za.collect("event", b)
			}
		}
		;
		z.Ck = function(a, b, c, d, f) {
			z.Ak({
				category: a,
				action: b,
				label: c,
				value: d,
				uH: f,
				attributes: void 0
			})
		}
		;
		z.Dk = function(a, b, c, d, f) {
			z.Ak({
				nc: !0,
				category: a,
				action: b,
				label: c,
				value: d,
				uH: f,
				attributes: void 0
			})
		}
		;
		var Ek = function() {
				(0,
					window.$)(window.document).on("click", "a[data-za-a]", function(a) {
					var b = (0,
						window.$)(a.target);
					if (a = b.data("za-a")) {
						var c = b.data("za-c")
							, d = b.data("za-l")
							, b = b.data("za-v");
						z.Dk(c, a, d, b)
					}
				})
			}
			;
		var Fk = function(a) {
				z.G.call(this);
				this.J = window.$.extend({
					ak: z.p
				}, a || {});
				this.kr = z.Gk.guiders2 || {};
				this.MP = (0,
					z.w)();
				this.lb = Rj && !Sj;
				this.Eb()
			}
			;
		var Hk = function(a, b, c) {
				function d(g) {
					g || (g = a.shift()) && b.call(c, g, f++, d)
				}
				a = a.slice();
				var f = 0;
				d()
			}
			;
		var Ik = function(a) {
				var b = {
					"home-topstory": {
						path: "/",
						offset: {
							right: -10
						},
						Nt: "righttop",
						cn: "arrow-lefttop",
						Xz: ".zu-main-feed-con",
						mt: ".zu-main-sidebar"
					}
				}
					, c = a.kr.section;
				c && Hk(jc(c), function(a, f, g) {
					(f = b[a]) && f.path === window.location.pathname ? Jk(this, "section", a, c[a], f, !1, g) : g()
				}, a)
			}
			;
		var Kk = function(a) {
				var b = {
					"/": {
						offset: {
							top: 6
						},
						trigger: "1page-down inview",
						Nt: "lefttop",
						cn: "arrow-righttop",
						Xz: ".zm-side-latest-roundtable",
						mt: ".zu-main-content-inner"
					},
					"/explore": {
						Nt: "lefttop",
						cn: "arrow-righttop",
						Xz: ".explore-side-section-roundtable",
						mt: ".zu-main-content-inner"
					}
				}
					, c = a.kr["exclusive-popover"];
				c && Hk(jc(c), function(a, f, g) {
					var h;
					"roundtable" === a && (h = b[window.location.pathname]);
					h && Jk(this, "exclusive-popover", a, c[a], h, h.trigger, g)
				}, a)
			}
			;
		var Jk = function(a, b, c, d, f, g, h) {
				if (b && c && d && f) {
					var k = (0,
						window.$)(f.Xz);
					if (k.length && ("righttop" !== f.Nt || 300 < z.Rf().width - k[0].getBoundingClientRect().right)) {
						var m = (0,
							window.$)(z.Na('\x3cdiv class\x3d"guide2-section-popover"\x3e\x3cdiv class\x3d"title"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"content"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"action"\x3e\x3ca class\x3d"dismiss" href\x3d"%s"\x3e%s\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e', d.title || "", d.content, d.dismissHref || "#", d.dismissText));
						m.addClass(f.Nt).addClass(f.cn).appendTo(k);
						var n = f.offset;
						n && window.$.each(["left", "top", "right", "bottom"], function(a, b) {
							n[b] && m.css("margin-" + b, n[b])
						});
						var q = (0,
							window.$)([]);
						z.Ca(function(a) {
							return (0,
									z.w)() - a
						}, a.MP);
						var A = function() {
								f.mt && (q = (0,
									window.$)('\x3cspan class\x3d"guidev2-mask"/\x3e').appendTo(f.mt));
								(0,
									window.setTimeout)(function() {
									m.add(q).addClass("fx-show");
									K()
								});
								window.$.post("/node/Guide2", {
									method: "dismiss_popover",
									params: {
										category: b,
										key: c
									}
								})
							}
							, H = function(a) {
								if (window.Modernizr.csstransitions)
									m.add(q).removeClass("fx-show").onTransitionEnd(function() {
											(0,
												window.$)(this).remove()
										},
										350);
								else
									m.add(q).remove();
								h && h(a)
							}
							;
						a = function(a) {
							function b(a) {
								var c = !1;
								return function() {
									!0 !== c && (c = a.apply(this, arguments));
									return c
								}
							}
							var c = 0
								, d = b(function() {
								var a = window.pageYOffset;
								if (a >= f.size.height)
									return c = a,
										!0
							})
								, d = {
								"1page-down .5page-up": z.Fb(d, b(function() {
									return c - window.pageYOffset >= f.size.height / 2
								})),
								"1page-down inview": z.Fb(d, function() {
									return z.tk(f, k[0])
								})
							}
								, f = new sk
								, g = d[a] || d["1page-down .5page-up"];
							f.v().g(f, "update", function() {
								g() && (f.H(),
									A())
							})
						}
						;
						var K = function() {
								var a = new sk;
								a.v().g(a,
									"update", function() {
										m.parent().length ? z.tk(a, m[0]) || (H(),
											a.H()) : a.H()
									})
							}
							;
						(0,
							window.$)(".dismiss", m).click(function() {
							H();
							return !1
						});
						(0,
							window.$)(".skip-all", m).click(function() {
							window.$.post("/node/Guide2", {
								method: "skip_popover",
								params: {
									category: b
								}
							});
							H(!0);
							return !1
						});
						g ? a(g) : A()
					}
				}
			}
			;
		var Lk = function() {
				var a = (0,
					window.$)("#guidersv2-page-banner");
				(0,
					window.$)(".js-close", a).click(function() {
					a.remove()
				})
			}
			;
		var Mk = function(a) {
				function b(a) {
					window.$.post("/node/Guide2", {
						method: "dismiss_editor",
						params: {
							key: a
						}
					})
				}
				function c(a) {
					z.Ak(Object.assign({
						category: "popup_guide",
						label: {
							bio: "popup_guide_personal_introduction",
							topic: "popup_guide_topic_recommendation"
						}[k]
					}, a))
				}
				function d(a) {
					m || (m = new z.S,
						m.Bf(!0),
						m.JE = !1,
						z.T.add(m.Uh(), "guidev2-dialog"));
					m.ka(a);
					m.G(!0)
				}
				var f = window.$.Deferred()
					, g = a.lb
					, h = a.kr.editor;
				if (!h || !h.length)
					return f.reject();
				var h = h.slice(), k, m, n = {}, q = {
					bio: function(a) {
						if (g)
							return a();
						var f =
							(0,
								window.$)("#tmpl-guidev2-bio-editor").html();
						if (!f)
							return window.console && window.console.warn("Cannot find template"),
								a();
						var h = z.Eb(a, function() {
							b("bio")
						});
						d(f);
						(function(a) {
							function b() {
								d.prop("disabled", !window.$.trim(f.val()))
							}
							a = (0,
								window.$)(a).off();
							var d = (0,
								window.$)("button.submit", a)
								, f = (0,
								window.$)("input.bio", a);
							d.click(function() {
								var a = n.Vv = window.$.trim(f.val());
								a && (window.$.post("/node/Guide2", {
									method: "add_headline",
									params: {
										headline: a
									}
								}),
									c({
										action: "click_edit_personal_introduction_submit",
										attributes: {
											personal_introduction: a
										}
									}),
									h())
							});
							(0,
								window.$)("button.skip", a).click(function() {
								c({
									action: "click_edit_personal_introduction_skip"
								});
								h()
							});
							f.focus().on("change keyup input", b);
							b()
						})(m.X());
						c({
							action: "popup_edit_personal_introduction_appear"
						})
					},
					topic: function(a) {
						var f = z.Eb(a, function() {
							z.ek.dispatchEvent("guider2:topicselected")
						});
						a = (0,
							window.$)("#tmpl-guidev2-topic-selector").html();
						if (!a)
							return window.console && window.console.warn("Cannot find template"),
								f();
						f = z.Eb(f, function() {
							b("topic")
						});
						d(a);
						(function(a) {
							function b() {
								g.prop("disabled", !d.filter(".checked").length)
							}
							a = (0,
								window.$)(a).off();
							var d = (0,
								window.$)(".topic", a)
								, g = (0,
								window.$)("button.submit", a);
							d.click(function() {
								(0,
									window.$)(this).toggleClass("checked");
								b()
							});
							g.click(function() {
								var a = n.Om = []
									, b = {};
								d.filter(".checked").each(function() {
									var c = (0,
										window.$)(this)
										, d = c.data("id")
										, f = c.index()
										, c = c.find(".name").text();
									a.push(d);
									b[d] = {
										topic: c,
										row: Math.ceil((f + 1) / 3),
										column: f % 3 + 1
									}
								});
								a.length && (window.$.post("/topics/follow", {
									follow_ids: a.join(",")
								}),
									c({
										action: "click_popup_guide_topic_recommendation_submit",
										attributes: {
											selected_topic: b
										}
									}),
									f())
							});
							(0,
								window.$)("button.skip", a).click(function() {
								c({
									action: "click_popup_guide_topic_recommendation_skip"
								});
								f()
							});
							b()
						})(m.X());
						c({
							action: "popup_guide_topic_recommendation_appear"
						})
					}
				};
				(0,
					window.$)(window).on("beforeunload.guide2", function() {
					m && m.U() && c({
						nc: !0,
						action: {
							bio: "click_edit_personal_introduction_close",
							topic: "click_guide_topic_recommendation_close"
						}[k]
					})
				});
				Hk(h, function(a, b, c) {
					if (q[a]) {
						k = a;
						var d =
								b === h.length - 1
							, g = function(a) {
								if (m)
									if (window.Modernizr.cssanimations)
										var b = (0,
											window.$)(m.Uh()).addClass("fx-hide").onAnimationEnd(function() {
											b.removeClass("fx-hide");
											a()
										}, 400);
									else
										a()
							}
							;
						q[a](function() {
							d ? g(function() {
								m.G(!1);
								f.resolve(n);
								(0,
									window.$)(window).off(".guide2")
							}) : g(c)
						})
					}
				});
				return f.promise()
			}
			;
		var Nk = function(a, b) {
				z.G.call(this);
				a && this.attach(a, b)
			}
			;
		var Ok = function(a, b, c, d) {
				ud.call(this, d);
				this.type = "key";
				this.keyCode = a;
				this.charCode = b;
				this.repeat = c
			}
			;
		var Pk = function() {}
			;
		var Qk = function(a, b, c) {
				if (a = c || a.lf())
					c = b.getAttribute("role") || null ,
					a != c && Nh(b, a)
			}
			;
		var Rk = function(a, b, c) {
				var d = b.UC;
				null  != d && a.CA(c, d);
				b.U() || P(c, "hidden", !b.U());
				b.isEnabled() || a.og(c, 1, !b.isEnabled());
				Sk(b, 8) && a.og(c, 8, !!(b.O & 8));
				Sk(b, 16) && a.og(c, 16, b.sf());
				Sk(b, 64) && a.og(c, 64, b.rb())
			}
			;
		var Tk = function(a, b) {
				var c = [];
				b && (a = a.concat([b]));
				z.x([], function(d) {
					!z.Nb(d, z.Ca(z.y, a)) || b && !z.y(d, b) || c.push(d.join("_"))
				});
				return c
			}
			;
		var Uk = function(a) {
				var b = a.T();
				b.replace(/\xa0|\s/g, " ");
				a.dr = {
					1: b + "-disabled",
					2: b + "-hover",
					4: b + "-active",
					8: b + "-selected",
					16: b + "-checked",
					32: b + "-focused",
					64: b + "-open"
				}
			}
			;
		z.Vk = function() {}
		;
		z.Wk = function(a, b) {
			if (!a)
				throw Error("Invalid class name " + a);
			if (!z.ta(b))
				throw Error("Invalid decorator function " + b);
			Xk[a] = b
		}
		;
		var Yk = function(a, b, c) {
				z.R.call(this, c);
				if (!b) {
					b = this.constructor;
					for (var d; b; ) {
						d = wa(b);
						if (d = Zk[d])
							break;
						b = b.o ? b.o.constructor : null
					}
					b = d ? z.ta(d.Y) ? d.Y() : new d : null
				}
				this.N = b;
				this.zm(z.l(a) ? a : null );
				this.UC = null
			}
			;
		var $k = function(a, b) {
				var c = a.v()
					, d = a.m();
				b ? (c.g(d, "mouseover", a.md).g(d, "mousedown", a.ke).g(d, "mouseup", a.rf).g(d, "mouseout", a.Kl),
				a.io != z.p && c.g(d, "contextmenu", a.io),
				z.C && (c.g(d, "dblclick", a.pF),
				a.ro || (a.ro = new al(a),
					z.fd(a, a.ro)))) : (c.pa(d, "mouseover", a.md).pa(d, "mousedown", a.ke).pa(d, "mouseup", a.rf).pa(d, "mouseout", a.Kl),
				a.io != z.p && c.pa(d, "contextmenu", a.io),
				z.C && (c.pa(d, "dblclick", a.pF),
					hd(a.ro),
					a.ro = null ))
			}
			;
		var Sk = function(a, b) {
				return !!(a.Vp & b)
			}
			;
		var bl = function(a, b) {
				return !!(a.Si & b) && Sk(a, b)
			}
			;
		var cl = function(a, b, c) {
				return Sk(a, b) && !!(a.O & b) != c && (!(a.sk & b) || a.dispatchEvent(ij(b, c))) && !a.Gd
			}
			;
		var al = function(a) {
				z.cd.call(this);
				this.or = a;
				this.er = !1;
				this.ha = new z.ee(this);
				z.fd(this, this.ha);
				a = this.or.h;
				this.ha.g(a, "mousedown", this.Il).g(a, "mouseup", this.us).g(a, "click", this.Hl)
			}
			;
		var dl = function() {}
			;
		z.el = function(a, b, c) {
			Yk.call(this, a, b || dl.Y(), c)
		}
		;
		var fl = function() {}
			;
		var gl = function(a, b, c) {
				if (b) {
					var d = hl(a, c);
					z.Th(b, d) || (z.dc(il, function(a) {
						a = hl(this, a);
						Yh(b, a, a == d)
					}, a),
						P(b, "checked", c == jl ? "mixed" : c == kl ? "true" : "false"))
				}
			}
			;
		var hl = function(a, b) {
				var c = a.T();
				if (b == kl)
					return c + "-checked";
				if (b == ll)
					return c + "-unchecked";
				if (b == jl)
					return c + "-undetermined";
				throw Error("Invalid checkbox state: " + b);
			}
			;
		var ml = function(a, b, c) {
				c = c || fl.Y();
				Yk.call(this, null , c, b);
				this.Kh = z.l(a) ? a : ll
			}
			;
		z.nl = function() {}
		;
		var ol = function() {}
			;
		z.pl = function(a, b, c, d, f) {
			function g(a) {
				a && (a.tabIndex = 0,
					Nh(a, h.lf()),
					z.Uh(a, "goog-zippy-header"),
					ql(h, a),
				a && h.BG.g(a, "keydown", h.ER))
			}
			z.G.call(this);
			this.da = f || z.I();
			this.Qf = this.da.m(a) || null ;
			this.gj = this.da.m(d || null );
			this.nl = (this.ct = z.ta(b) ? b : null ) || !b ? null  : this.da.m(b);
			this.Jb = 1 == c;
			z.l(c) || this.ct || (this.gj ? this.Jb = Li(this.gj) : this.Qf && (this.Jb = z.Th(this.Qf, "goog-zippy-expanded")));
			this.BG = new z.ee(this);
			this.pz = new z.ee(this);
			var h = this;
			g(this.Qf);
			g(this.gj);
			this.Ic(this.Jb)
		}
		;
		var rl = function(a) {
				var b = a.gj;
				return b && Li(b) ? b : a.Qf
			}
			;
		var ql = function(a, b) {
				b && a.pz.g(b, "click", a.DR)
			}
			;
		var sl = function(a, b, c) {
				z.qd.call(this, a, b);
				this.Gg = c
			}
			;
		var tl = function() {
				z.ul.remove("actioncontinuationhash", "/")
			}
			;
		z.vl = function(a, b, c, d, f) {
			function g() {
				var a = b - n;
				0 < a ? (h.text(z.Na(c(!0, m), a)),
					n += 1) : (k.stop(),
					m += 1,
					h.text(z.Na(c(!1, m), a)),
					h.removeClass("disabled"),
					n = 0)
			}
			f = void 0 === f ? !1 : f;
			var h = (0,
				window.$)(a)
				, k = new z.ae(1E3)
				, m = 0
				, n = 0;
			h.click(function(a) {
				k.enabled || d && !1 === d.call(this, a) || (k.start(),
					g(),
					h.addClass("disabled"))
			});
			k.addEventListener("tick", g, !1);
			f && (g(),
				h.addClass("disabled"));
			return k
		}
		;
		z.wl = function(a, b) {
			var c = (0,
				window.$)(a);
			return function() {
				if (!c.hasClass("btn-pending")) {
					var a = b.apply(this, arguments)
						, f = function() {
							c.removeClass("btn-pending")
						}
						;
					a && a.then && (c.addClass("btn-pending"),
						a.then(f, f))
				}
				return !1
			}
		}
		;
		var xl = function() {
				z.S.call(this);
				this.Bf(!0)
			}
			;
		var yl = function(a) {
				var b = (0,
					window.$)(".resend-activation-email", a.cC);
				zl(a, b, 10, function() {
					window.$.post("/reactive")
				})
			}
			;
		var Al = function(a) {
				window.$.get("/settings/account/request_unlock");
				var b = (0,
					window.$)("form.send-code", a.WB)
					, c = a.UB = (0,
					window.$)("form.activate", a.WB)
					, d = (0,
					window.$)(".submit", b);
				b.validate(window.$.extend({}, Bl, {
					submitHandler: z.wl(d, window.$.proxy(a.fS, a))
				}));
				b = (0,
					window.$)(".submit", c);
				c.validate(window.$.extend({}, Bl, {
					submitHandler: z.wl(b, window.$.proxy(a.fR, a))
				}));
				b = (0,
					window.$)("button.resend-code", c);
				zl(a, b, 60, function() {
					var a = (0,
						window.$)('input[name\x3d"account"]', c).val();
					if ("" === a)
						return c.data("validator").showErrors({
							account: "请填写手机号或邮箱"
						}),
							!1;
					var b = this.tf(a), d;
					b ? (a = {
						email: a
					},
						d = "/settings/account/send_new_email_digits") : (a = {
						phone_no: a
					},
						d = "/settings/account/send_new_phone_digits");
					var k = this;
					window.$.post(d, a, function(a) {
						a.success ? Cl(k, b) : (a = a.payload.fields,
							b ? k.hb(a, "email", "account") : k.hb(a, "phone_no", "account"),
							c.data("validator").showErrors(a))
					})
				})
			}
			;
		var Cl = function(a, b) {
				a.nv || (a.nv = (0,
					window.$)(".tip", a.Ad));
				b ? a.nv.html("验证码已发送至你的邮箱，请查收。") : a.nv.html("验证码已发送至你的手机，请查收。")
			}
			;
		var zl = function(a, b, c, d) {
				var f = b.text();
				b = z.vl(b, c, function(a) {
					return a ? "%s 秒后即可重发" : f
				}, window.$.proxy(d, a));
				z.fd(a, b)
			}
			;
		z.Dl = function() {
			z.G.call(this)
		}
		;
		var El = function() {
				z.G.call(this);
				this.last = 0
			}
			;
		var Fl = function(a, b) {
				b && b.length && z.x(b, function(a) {
					this.dispatchEvent(new z.Gl(a[0],a[1]))
				}, a)
			}
			;
		z.Hl = function(a) {
			var b = z.W;
			b.oH ? (b.oH.innerHTML = a,
				z.Q(b.h, !0)) : z.U.message(a)
		}
		;
		z.Gl = function(a, b) {
			this.type = a;
			this.yf = b
		}
		;
		z.Il = function(a) {
			z.cd.call(this);
			this.hv = a;
			this.Do = !1
		}
		;
		z.Jl = function(a, b) {
			b && (Kl = b);
			var c = {
				qq: "/oauth/redirect/login/qqconn?next\x3d",
				sina: "/oauth/redirect/login/sina?next\x3d",
				wechat: Ll ? "/oauth/redirect/login/wechat_mp?next\x3d" : "/oauth/redirect/login/wechat?next\x3d"
			}[a];
			Ml || Ll ? window.location.href = c + "/oauth/account_callback\x26from\x3d" + (0,
					window.encodeURIComponent)(z.$e(window.location.href, "next") || window.location.pathname) : window.open(c + "/oauth/account_callback", "_blank", "top\x3d200,left\x3d400,width\x3d600,height\x3d550,directories\x3dno,menubar\x3dno,toolbar\x3dno")
		}
		;
		z.Nl = function(a, b) {
			a.g(z.W, "accountcallback", function() {
				Kl && Kl !== this || b.apply(this, arguments)
			})
		}
		;
		z.Ol = function(a) {
			z.R.call(this);
			this.HB = "antispam" === a ? "/antispam/captcha" : "/captcha.gif"
		}
		;
		z.Pl = function(a) {
			"1" !== z.ul.get("n_c") ? a.Xe.attr("name", "") : (a.Xe.attr("name", "captcha"),
				a.K.show(),
				a.$t())
		}
		;
		var Ql = function(a) {
				var b = Rl;
				return function() {
					var c = this || z.t
						, c = c[Sl] || (c[Sl] = {})
						, d = b(wa(a), arguments);
					return c.hasOwnProperty(d) ? c[d] : c[d] = a.apply(this, arguments)
				}
			}
			;
		var Rl = function(a, b) {
				for (var c = [a], d = b.length - 1; 0 <= d; --d)
					c.push(typeof b[d], b[d]);
				return c.join("\x0B")
			}
			;
		var Tl = function(a, b, c) {
				z.G.call(this);
				this.K = (0,
					window.$)(a);
				this.XU = b;
				this.duration = c
			}
			;
		z.Ul = function(a) {
			z.S.call(this, "mutiview-dialog");
			this.eD = [];
			this.nI = [];
			this.mI = [];
			this.AS = a;
			this.Bf(!0);
			this.ZS = !0
		}
		;
		var Vl = function(a, b) {
				var c = (0,
					window.$)(".title", a.te).addClass("right")
					, d = (0,
					window.$)(".view", a.ub).addClass("right");
				b ? (a.Fk = (0,
					window.$)(".title." + b, a.te),
					a.yh = (0,
						window.$)(".view." + b, a.ub)) : (a.Fk = c.first(),
					a.yh = d.first());
				a.Fk.removeClass("right");
				a.yh.removeClass("right");
				a.v().g(a, Wl, function() {
					this.ub.height(this.yh.outerHeight())
				})
			}
			;
		var Xl = function(a, b) {
				var c = (0,
					window.$)(a.oj())
					, d = (0,
					window.$)(b.oj())
					, f = c.clone();
				f.appendTo("body");
				c.css("visibility", "hidden");
				d.css("visibility", "hidden");
				b.v().g(b, Wl, function() {
					f.remove();
					d.css("visibility", "visible")
				});
				a.ZS && a.Zh() && b.mb(a.Zh());
				a.G(!1);
				a.v().g(a, Yl, function() {
					b.G(!0)
				})
			}
			;
		var Zl = function(a, b) {
				var c = a.oq;
				b !== a.oq.hasClass("show") && (b ? c.css("visibility", "visible").addClass("show") : window.Modernizr.csstransitions ? c.onTransitionEnd(function() {
					c.css("visibility", "hidden")
				}, 300).removeClass("show") : c.css("visibility", "hidden"))
			}
			;
		var $l = function(a) {
				var b = a.ub;
				b.onTransitionEnd(function() {
					b.removeClass("transition")
				}, 300).addClass("transition").height(a.yh.outerHeight(!1))
			}
			;
		z.am = function(a, b) {
			a && (this.input = a,
			"string" === typeof b && (b = {
				text: b
			}),
				z.rc(this.J = {}, this.defaults, b || {}),
				this.Kg = null ,
				bm(this))
		}
		;
		var cm = function(a) {
				z.dm ? z.T.enable(a.input, "placeholder-hilight", !1) : z.T.enable(a.label, "placeholder-label-hilight", !1)
			}
			;
		var bm = function(a) {
				var b = a.input
					, c = a.J;
				c.text || (c.text = b.getAttribute("placeholder"));
				if (z.dm)
					a.pk(c.text);
				else {
					var d = a.label = em(a);
					a.pk(c.text);
					a.offsetParent().appendChild(d);
					var f = a.Kg = new z.ee(a);
					f.g(b, "blur", a.check);
					f.g(b, "focus", a.hide);
					c.bD && f.g(b, "keydown", a.hide);
					f.g(d, "click", function() {
						this.hide();
						Li(b) && b.focus()
					});
					b.kX = (0,
						z.r)(a.check, a);
					fm(a);
					a.position();
					a.check()
				}
			}
			;
		var gm = function(a) {
				if (function(a) {
						return "labels" in a ? a.labels.length : a.id && z.Mb(window.document.getElementsByTagName("label"), function(c) {
							return c.htmlFor === a.id
						})
					}(a) || Ph(a, "label") || Ph(a, "labelledby"))
					return !0
			}
			;
		var hm = function(a, b) {
				return z.ni(a, b) || z.oi(a, b) || a.style[b]
			}
			;
		var em = function(a) {
				var b = a.input
					, c = Ai(b)
					, d = z.M("label")
					, f = Bi(b, a.offsetParent());
				z.ii(d, {
					color: "gray",
					cursor: "text",
					position: "absolute",
					left: f.x + c.left + "px",
					top: f.y + c.top + "px",
					display: a.Qg() ? "block" : "none",
					width: hm(b, "width"),
					fontSize: hm(b, "fontSize"),
					lineHeight: hm(b, "lineHeight"),
					fontFamily: hm(b, "fontFamily")
				});
				return d
			}
			;
		var fm = function(a) {
				var b = a.input;
				a = a.label;
				gm(b) || (b.id ? a.htmlFor = b.id : (a.id = z.gj(z.fj.Y()),
					P(b, "labelledby", a.id)))
			}
			;
		z.im = function(a) {
			z.Ul.call(this, a)
		}
		;
		var jm = function(a, b) {
				var c = (0,
					window.$)("form", a.m());
				(0,
					window.$)(":submit", c).click(function() {
					b(c.Pd())
				});
				(0,
					window.$)("keydown", c).click(function(a) {
					13 === a.keyCode && b(c.Pd())
				})
			}
			;
		var km = function(a) {
				a = (0,
					window.$)(".input-wrapper.toggle-password", a);
				var b = (0,
					window.$)("input", a)
					, c = (0,
					window.$)(".z-ico-show-password", a);
				c.click(function() {
					"password" === b.prop("type") ? (c.addClass("z-ico-hide-password"),
						b.prop("type", "text")) : (c.removeClass("z-ico-hide-password"),
						b.prop("type", "password"))
				})
			}
			;
		z.lm = function(a, b, c) {
			b = z.vl(b, 60, function(a) {
				return a ? "%s 秒后重发" : "重发验证码"
			}, window.$.proxy(c, a), !0);
			z.fd(a, b);
			return b
		}
		;
		z.mm = function(a) {
			z.Ul.call(this, "unable-login");
			this.Qk = a
		}
		;
		var nm = function(a) {
				a.mC = (0,
					window.$)(".view.start", a.ub);
				(0,
					window.$)("button.reset-password", a.mC).click(function() {
					z.Pl(a.nA);
					a.oh(!0, a.kC, a.CK)
				});
				(0,
					window.$)("button.sms-login", a.mC).click(function() {
					z.Pl(a.tv);
					a.oh(!0, a.Zu, a.tK)
				})
			}
			;
		var om = function(a) {
				a.xq = (0,
					window.$)(".view.reset-password", a.ub);
				a.BK = (0,
					window.$)(".title.reset-password", a.te);
				var b = (0,
					window.$)("form", a.xq);
				a.Fe(b, a.XR);
				km(b);
				var c = (0,
					window.$)('input[name\x3d"account"]', b)
					, d = (0,
					window.$)('input[name\x3d"verification_code"]', b)
					, f = (0,
					window.$)(".send-code", b);
				a.CT = z.lm(a, f, function() {
					var a = c.val(), f, k;
					this.tf(a) ? (f = "/send_login_verification_code/email",
						a = {
							email: a
						},
						k = "邮箱收到的 6 位数验证码") : (f = "/send_login_verification_code/sms",
						a = {
							phone_num: a
						},
						k = "手机收到的 6 位数验证码");
					window.$.get(f,
						a, function(a) {
							a.r && b.data("validator").showErrors(a.data)
						});
					d.val("").attr("placeholder", k)
				})
			}
			;
		var pm = function(a) {
				a.$u = (0,
					window.$)(".view.sms-login", a.ub);
				a.sK = (0,
					window.$)(".title.sms-login", a.te);
				var b = (0,
					window.$)("form", a.$u);
				a.Fe(b, a.ZR);
				var c = (0,
					window.$)('input[name\x3d"phone_num"]', b)
					, d = (0,
					window.$)(".send-code", b);
				a.UK = z.lm(a, d, function() {
					var a = this;
					window.$.get("/send_login_verification_code/sms", {
						phone_num: c.val()
					}, function(c) {
						c.r && (c = c.data,
							a.hb(c, "account", "phone_num"),
							b.data("validator").showErrors(c))
					})
				})
			}
			;
		z.qm = function(a) {
			z.Ul.call(this, "oauth-register");
			this.ph = a
		}
		;
		var rm = function(a) {
				a.av = (0,
					window.$)(".view.bind-login", a.ub);
				a.uK = (0,
					window.$)(".title.bind-login", a.te);
				var b = (0,
					window.$)("form", a.av);
				a.Fe(b, a.nR);
				km(b);
				(0,
					window.$)("input.account", b).val(a.ph.account);
				(0,
					window.$)("button.unable-login", a.av).click(function() {
					var b = new z.mm;
					Xl(a, b)
				})
			}
			;
		var sm = function(a) {
				a.bv = (0,
					window.$)(".view.bound", a.ub);
				a.vK = (0,
					window.$)(".title.bound", a.te);
				var b = {
					sina: "微博",
					qqconn: " QQ ",
					wechat: "微信",
					wechat_mp: "微信"
				}[a.ph.type]
					, c = z.Na("该%s曾绑定过以下知乎帐号", b)
					, b = z.Na("不绑定，用%s创建新帐号", b);
				(0,
					window.$)("h2", a.vK).text(c);
				(0,
					window.$)(".name", a.bv).text(a.ph.fullname);
				(0,
					window.$)("img", a.bv).attr("src", a.ph.avatar_path);
				(0,
					window.$)("button.register", a.bv).text(b)
			}
			;
		var tm = function(a) {
				a.jC = (0,
					window.$)(".view.registered", a.ub);
				a.AK = (0,
					window.$)(".title.registered", a.te);
				var b = z.Na("%s 已注册至如下帐号", a.ph.account);
				(0,
					window.$)("h2", a.AK).text(b);
				(0,
					window.$)(".name", a.jC).text(a.ph.fullname);
				(0,
					window.$)("img", a.jC).attr("src", a.ph.avatar_path)
			}
			;
		var um = function(a) {
				return {
					qqconn: "qq",
					wechat: "wechat",
					sina: "weibo",
					wechat_mp: "wechat_mp"
				}[a.ph.type]
			}
			;
		var vm = function() {
				z.Ul.call(this, "register")
			}
			;
		var wm = function(a) {
				a.pC = (0,
					window.$)(".view.verification", a.ub);
				var b = (0,
					window.$)("form", a.pC);
				a.Fe(b, a.RR);
				var c = (0,
					window.$)(".send-code", b)
					, d = (0,
					window.$)('input[name\x3d"phone_num"]', b);
				a.na = z.lm(a, c, function() {
					var a = d.val()
						, c = this;
					window.$.get("/send_register_verification_code/sms", window.$.param({
						phone_num: a
					}), function(a) {
						a.r && (a = a.data,
							c.hb(a, "account", "phone_num"),
							b.data("validator").showErrors(a))
					})
				})
			}
			;
		var xm = function(a) {
				function b() {
					f.onload = f.onerror = f.onreadystatechange = null ;
					window.document.body.removeChild(f)
				}
				function c() {
					b();
					d.resolve()
				}
				var d = window.$.Deferred()
					, f = window.document.createElement("script");
				f.onload = c;
				f.onerror = function() {
					b();
					d.reject()
				}
				;
				f.onreadystatechange = function() {
					"loaded" !== f.readyState && "complete" !== f.readyState || c()
				}
				;
				f.src = a;
				window.document.body.appendChild(f);
				return d.promise()
			}
			;
		var ym = function(a) {
				function b() {
					(0,
						window.clearTimeout)(g);
					g = null ;
					try {
						delete window[d]
					} catch (a) {
						window[d] = null
					}
				}
				"string" === window.$.type(a) && (a = {
					url: a
				});
				a = a || {};
				var c = window.$.Deferred()
					, d = "zh" + (0,
						z.w)() + ob()
					, f = window.$.extend({}, a.data || {}, {
					callback: d
				})
					, g = null ;
				a.timeout && (g = (0,
					window.setTimeout)(function() {
					window[d] && (window[d] = b,
						c.reject("timeout"))
				}, a.timeout));
				window[d] = c.resolve;
				a = a.url + (-1 === a.url.indexOf("?") ? "?" : "\x26") + window.$.param(f);
				xm(a).fail(c.reject).always(b);
				return c.promise()
			}
			;
		var zm = function(a, b) {
				b = void 0 === b ? 0 : b;
				z.G.call(this);
				this.BL = Object.assign({}, Am, a);
				this.SS = b;
				this.ju = 1E3;
				this.bH = 3E4;
				this.DP = 1.5
			}
			;
		z.Bm = function(a, b) {
			a = void 0 === a ? z.p : a;
			b = void 0 === b ? !1 : b;
			z.R.call(this);
			this.UH = a;
			this.pU = b
		}
		;
		var Cm = function(a) {
				window.$.get("/antispam/get_token").then(function(b) {
					a.Ci = b.token;
					a.timeout = b.ttl;
					a.startTime = Date.now();
					(0,
						window.$)(".js-token", a.h).text(a.Ci);
					(0,
						window.$)(".js-timeout", a.h).text((0,
						window.parseInt)(a.timeout / 60))
				})
			}
			;
		var Dm = function(a) {
				var b = (0,
					window.$)(".js-sent", a.h);
				b.click(z.wl(b, function() {
					if (Date.now() > a.startTime + 1E3 * a.timeout)
						return Cm(a),
							Em(a, "短信超时，请重新发送");
					Fm(a);
					a.Hk.show();
					return window.$.get("/antispam/is_send_sms").then(function(b) {
						b.is_send_sms ? Gm(a, "unblock") : Em(a, "没收到正确的短信，请重新发送");
						a.Hk.hide()
					}, function() {
						a.Hk.hide()
					})
				}))
			}
			;
		var Hm = function(a) {
				var b = (0,
					window.$)(".js-verify", a.h);
				b.click(z.wl(b, function() {
					var b = a.ae.Xe.val();
					if (!b)
						return Em(a, "请填写验证码");
					Fm(a);
					a.Hk.show();
					return window.$.post("/antispam/create_appeal", {
						captcha: b
					}).then(function(b) {
						0 === b.errcode ? Gm(a, "appeal") : (a.ae.$t(),
							Em(a, b.msg),
							a.Hk.hide())
					}, function() {
						a.Hk.hide()
					})
				}))
			}
			;
		var Im = function(a) {
				(0,
					window.$)(".js-appeal", a.h).click(function() {
					a.UH("向管理员申诉解封");
					a.qv.hide();
					(0,
						window.$)(".unblock-dialog-appeal", a.h).show();
					a.ae.$t();
					Fm(a)
				});
				(0,
					window.$)(".js-message", a.h).click(function() {
					a.UH("帐号解封");
					a.qv.hide();
					(0,
						window.$)(".unblock-dialog-message", a.h).show();
					Fm(a)
				})
			}
			;
		var Jm = function(a) {
				a.Pt = new zm({
					url: "/antispam/is_send_sms"
				},1E3);
				z.fd(a, a.Pt);
				a.Pt.g("message", function(b) {
					b.data.is_send_sms && Gm(a, "unblock")
				});
				a.Pt.Ot()
			}
			;
		var Gm = function(a, b) {
				a.Pt.H();
				var c;
				"unblock" === b ? c = "成功自助解封" : "appeal" === b && (c = "成功提交申诉\x3cbr\x3e申诉成功后会以邮件或私信方式通知你");
				(0,
					window.$)(".unblock-dialog-success-text", a.h).html(c);
				a.qv.hide();
				(0,
					window.$)(".unblock-dialog-success", a.h).show();
				if (a.pU) {
					var d = (0,
						window.$)(".js-count-down", a.h);
					d.show();
					var f = 5, g;
					"unblock" === b ? g = "刷新" : "appeal" === b && (g = "关闭");
					var h = function() {
							0 >= f ? "unblock" === b ? window.location.reload() : "appeal" === b && a.dispatchEvent("complete") : (d.text(f-- + " 秒后自动" + g),
								(0,
									window.setTimeout)(h, 1E3))
						}
						;
					h()
				}
			}
			;
		var Em = function(a, b) {
				a.ZB.text(b).addClass("is-visible")
			}
			;
		var Fm = function(a) {
				a.ZB.removeClass("is-visible")
			}
			;
		var Km = function(a) {
				z.S.apply(this, arguments)
			}
			;
		z.Lm = function(a, b, c) {
			function d(a) {
				return a && a.preventDefault ? a.preventDefault() : !1
			}
			return function(f) {
				var g = {
					qb: !0,
					Yd: !1,
					vH: !1,
					yI: !1
				};
				z.oa(b) ? (!0 === b[0] && (g = fc(g, function() {
					return !0
				})),
					z.rc(g, b[1])) : !0 === b ? g = fc(g, function() {
					return !0
				}) : (z.ta(b) && (b = b.apply(this, arguments)),
					z.rc(g, b || {}));
				var h = z.ta(c) ? c.apply(this, arguments) : c;
				if (!z.X.qb() && g.qb) {
					var k = new vm;
					k.Bp(h);
					k.show();
					return d(f)
				}
				return !z.X.Yd && g.Yd ? ((new xl).G(!0),
					window.$.post("/continuation/record", {
						url: window.location.pathname + window.location.search +
						(h || "")
					}),
					d(f)) : Mm.GE && g.yI ? (h = Mm.GE,
					"warning" === h ? k = "您的知乎用户名 " + z.X.sx + ' 不符合 \x3ca href\x3d"/question/19791408"\x3e知乎用户名规范\x3c/a\x3e，请您 \x3ca href\x3d"/settings/profile"\x3e修改\x3c/a\x3e。' : "pending" === h && (k = "您提交的用户名修改正在审核中，帐号暂时锁定。"),
				k && z.U.message(k, 4E3),
					d(f)) : Mm.Xv && g.vH ? (Mm.Xv.by_antispam ? (new Km).G(!0) : z.U.message(Mm.Xv.message),
					d(f)) : a.apply(this, arguments)
			}
		}
		;
		var Nm = function() {
				z.G.call(this);
				this.O = Om;
				this.endTime = this.startTime = null
			}
			;
		var Pm = function(a, b, c) {
				z.cd.call(this);
				this.Rj = a;
				this.Pg = b || 0;
				this.ha = c;
				this.Zk = (0,
					z.r)(this.Cg, this)
			}
			;
		var Qm = function(a) {
				a.Rb() && a.fire()
			}
			;
		var Rm = function(a) {
				a = wa(a);
				delete Sm[a];
				nc(Sm) && Tm && Tm.stop()
			}
			;
		var Um = function() {
				Tm || (Tm = new Pm(function() {
						Vm()
					}
					,20));
				var a = Tm;
				a.Rb() || a.start()
			}
			;
		var Vm = function() {
				var a = (0,
					z.w)();
				z.dc(Sm, function(b) {
					Wm(b, a)
				});
				nc(Sm) || Um()
			}
			;
		var Xm = function(a, b, c, d) {
				Nm.call(this);
				if (!z.oa(a) || !z.oa(b))
					throw Error("Start and end parameters must be arrays");
				if (a.length != b.length)
					throw Error("Start and end points must be the same length");
				this.Pp = a;
				this.wN = b;
				this.duration = c;
				this.BC = d;
				this.coords = [];
				this.Hi = !1;
				this.progress = 0
			}
			;
		var Wm = function(a, b) {
				a.progress = (b - a.startTime) / (a.endTime - a.startTime);
				1 <= a.progress && (a.progress = 1);
				Ym(a, a.progress);
				1 == a.progress ? (a.O = Om,
					Rm(a),
					a.gd("finish"),
					a.dg()) : 1 == a.O && a.wz()
			}
			;
		var Ym = function(a, b) {
				z.ta(a.BC) && (b = a.BC(b));
				a.coords = Array(a.Pp.length);
				for (var c = 0; c < a.Pp.length; c++)
					a.coords[c] = (a.wN[c] - a.Pp[c]) * b + a.Pp[c]
			}
			;
		var Zm = function(a, b) {
				z.qd.call(this, a);
				this.coords = b.coords;
				this.x = b.coords[0];
				this.y = b.coords[1];
				this.z = b.coords[2];
				this.duration = b.duration;
				this.progress = b.progress;
				this.state = b.O;
				this.JW = b
			}
			;
		var $m = function(a) {
				var b = {};
				a = String(a);
				var c = "#" == a.charAt(0) ? a : "#" + a;
				if (an.test(c))
					return b.Cs = bn(c),
						b.type = "hex",
						b;
				c = cn(a);
				if (c.length) {
					var d = c[0];
					a = c[1];
					c = c[2];
					d = Number(d);
					a = Number(a);
					c = Number(c);
					if ((0,
							window.isNaN)(d) || 0 > d || 255 < d || (0,
							window.isNaN)(a) || 0 > a || 255 < a || (0,
							window.isNaN)(c) || 0 > c || 255 < c)
						throw Error('"(' + d + "," + a + "," + c + '") is not a valid RGB color');
					d = dn(d.toString(16));
					a = dn(a.toString(16));
					c = dn(c.toString(16));
					b.Cs = "#" + d + a + c;
					b.type = "rgb";
					return b
				}
				if (en && (c = en[a.toLowerCase()]))
					return b.Cs =
						c,
						b.type = "named",
						b;
				throw Error(a + " is not a valid color string");
			}
			;
		var bn = function(a) {
				if (!an.test(a))
					throw Error("'" + a + "' is not a valid hex color");
				4 == a.length && (a = a.replace(fn, "#$1$1$2$2$3$3"));
				return a.toLowerCase()
			}
			;
		var cn = function(a) {
				var b = a.match(gn);
				if (b) {
					a = Number(b[1]);
					var c = Number(b[2])
						, b = Number(b[3]);
					if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b)
						return [a, c, b]
				}
				return []
			}
			;
		var dn = function(a) {
				return 1 == a.length ? "0" + a : a
			}
			;
		var hn = function(a, b, c, d, f) {
				Xm.call(this, b, c, d, f);
				this.element = a
			}
			;
		var jn = function(a, b, c, d, f) {
				if (2 != b.length || 2 != c.length)
					throw Error("Start and end points must be 2D");
				hn.apply(this, arguments)
			}
			;
		var kn = function(a, b, c, d, f) {
				if (2 != b.length || 2 != c.length)
					throw Error("Start and end points must be 2D");
				hn.apply(this, arguments)
			}
			;
		var ln = function(a, b, c, d, f) {
				hn.call(this, a, [b], [c], d, f)
			}
			;
		var mn = function(a, b, c, d, f) {
				hn.call(this, a, [b], [c], d, f)
			}
			;
		var nn = function(a, b, c, d, f) {
				sa(b) && (b = [b]);
				sa(c) && (c = [c]);
				hn.call(this, a, b, c, d, f);
				if (1 != b.length || 1 != c.length)
					throw Error("Start and end points must be 1D");
				this.at = on
			}
			;
		var pn = function(a, b, c) {
				nn.call(this, a, 1, 0, b, c)
			}
			;
		var qn = function(a, b, c) {
				nn.call(this, a, 0, 1, b, c)
			}
			;
		var rn = function(a, b, c, d, f) {
				if (3 != b.length || 3 != c.length)
					throw Error("Start and end points must be 3D");
				hn.apply(this, arguments)
			}
			;
		var sn = function() {
				return window.$.Deferred(function(a) {
					(0,
						window.setTimeout)(a.resolve, 2E3)
				}).promise()
			}
			;
		var tn = function(a, b) {
				var c = z.yg(a, function(a) {
					return 3 === a.nodeType && !z.Oa(a.nodeValue)
				})[0];
				c && (c.nodeValue = b)
			}
			;
		z.un = function(a, b) {
			var c = new pn(a,500);
			b && z.F(c, "finish", (0,
				z.r)(function() {
				z.N(this)
			}, a));
			c.play()
		}
		;
		var vn = function(a) {
				if (0 === a || 1 === a)
					return z.M("span");
				if (z.oa(a)) {
					var b = z.M("a", {
						href: "/people/" + a[1],
						title: a[0],
						"class": "zm-item-link-avatar"
					}, z.M("img", {
						src: a[2],
						"class": "zm-list-avatar"
					}));
					b.setAttribute("data-tip", "p$t$" + a[1]);
					return b
				}
			}
			;
		var wn = function(a) {
				if (0 === a || 1 === a)
					return "匿名用户";
				var b = z.M("a", {
					href: "/people/" + a[1],
					title: a[0]
				}, a[0]);
				b.setAttribute("data-tip", "p$t$" + a[1]);
				return b
			}
			;
		z.xn = function(a, b) {
			return z.oa(a) ? ['\x3ca data-tip\x3d"p$t$', a[1], '" href\x3d"/people/', a[1], '"', b ? ' class\x3d"' + b + '"' : "", ' title\x3d"', a[0], '"\x3e', a[0], "\x3c/a\x3e"].join("") : "匿名用户"
		}
		;
		z.yn = function(a, b, c, d) {
			"bottom" === d && (d = "b");
			var f = "";
			!1 !== c && (f = 'data-tip\x3d"t$' + (d || "t") + "$" + a[1] + '"');
			return ["\x3ca ", f, ' class\x3d"', b || "zm-item-tag", '" href\x3d"/topic/', a[1], '"\x3e', a[0], "\x3c/a\x3e"].join("")
		}
		;
		z.zn = function(a) {
			return a ? a.replace(/^\s+/, "").replace(/\s+$/, "") : ""
		}
		;
		var An = function(a) {
				return a ? a.replace(/<[^>]+>/g, "") : ""
			}
			;
		var Bn = function() {
				return '\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e'
			}
			;
		z.Cn = function(a, b) {
			z.Q(a, !0);
			z.Q(b, !1)
		}
		;
		var Dn = function(a, b, c) {
				var d;
				a && (b = (0,
						window.$)(a).data("animation") || new rn(a,[255, 255, 150],b || [255, 255, 255],c || 2E3),
					(0,
						window.$)(a).data("animation", b),
				1 == b.O && b.stop(!0),
					d = a.style.backgroundColor,
					z.Td(b, "end", function() {
						z.ii(this.element, "background-color", d)
					}, !1, b),
					b.play())
			}
			;
		z.En = function(a, b, c) {
			a && (Fn && window.document[Gn] ? z.F(window.document, Hn, function f() {
				window.document[Gn] || (Dn(a, b, c),
					z.Ud(window.document, Hn, f))
			}) : Dn(a, b, c))
		}
		;
		var In = function(a) {
				var b = 0
					, c = 0;
				do
					c = a.indexOf("?", c),
					-1 !== c && (b++,
						c += 1);
				while (-1 !== c);return b
			}
			;
		var Jn = function(a, b, c) {
				b = Yb(a.data, 1);
				if ("topic" === a.data[0]) {
					a = (b[2] ? '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e' : "") + '\x3cspan class\x3d"zu-autocomplete-row-name' + (b[3] ? "" : " zu-autocomplete-row-name-info") + '" title\x3d"' + b[0] + '"\x3e' + b[0] + "\x3c/span\x3e";
					var d = 5 < b.length && b[5];
					4 <= b.length && (a += '\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e',
						b[4] || d ? (d && (a += "又称 " + b[5]),
						b[4] && d && (a += "，"),
						b[4] && (a += b[4] + " 人关注")) : a += "\x26nbsp;",
						a += "\x3c/span\x3e");
					c.innerHTML =
						a
				} else
					"people" === a.data[0] ? c.innerHTML = '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e\x3cspan class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e' + b[0] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e' + (b[4] || "\x26nbsp;") + "\x3c/span\x3e" : "question" === a.data[0] ? c.innerHTML = b[0] + '\x3cspan class\x3d"zm-ac-gray"\x3e问题\x3c/span\x3e' : "plain_text" === a.data[0] ? (c.innerHTML = a.data[1],
						z.T.add(c, b[1])) : "sina" === a.data[0] && (c.innerHTML = b[0])
			}
			;
		var Kn = function(a, b, c) {
				var d;
				b = Yb(a.data, 1);
				if ("topic" === a.data[0]) {
					a = ["\x3ca ", ' style\x3d"display:block" href\x3d"/topic/' + b[1] + '"\x3e\x3cspan class\x3d"zm-item-tag"\x3e', b[0], "\x3c/span\x3e"].join("");
					d = 6 < b.length && b[6];
					if (b[5] || d) {
						a += '\x3cspan class\x3d"zm-ac-gray"\x3e';
						var f = [];
						d && f.push("又称 " + b[6]);
						(d = (0,
							window.parseInt)(b[5], 10)) && f.push(d + " 个精华问答");
						a += f.join("，");
						a += "\x3c/span\x3e"
					} else
						a += '\x3cspan class\x3d"zm-ac-gray" \x3e\x26nbsp;\x3c/span\x3e';
					c.innerHTML = a + "\x3c/a\x3e"
				} else
					"people" ===
					a.data[0] ? c.innerHTML = '\x3ca href\x3d"/people/' + b[1] + '" title\x3d"' + b[0] + '" class\x3d"zm-ac-link zm-ac-link-people"\x3e\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e\x3cspan class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e' + b[0] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal  zu-autocomplete-row-description"\x3e' + (b[4] || "\x26nbsp;") + "\x3c/span\x3e\x3c/a\x3e" : "question" === a.data[0] ? (d = (0,
						window.parseInt)(b[3], 10),
						c.innerHTML = (b[4] ? '\x3ca class\x3d"zg-star" data-tip\x3d"s$b$优质问答" href\x3d"/question/' +
							b[2] + '"\x3e\x3c/a\x3e' : "") + ['\x3ca class\x3d"zm-ac-link"', 'href\x3d"/question/' + b[2] + '"\x3e', b[0]].join("") + ('\x3cspan class\x3d"zm-ac-gray"\x3e' + (d ? d + " 个回答" : "还没有回答") + "\x3c/span\x3e\x3c/a\x3e")) : "search_link" === a.data[0] ? (c.innerHTML = '\x3ca href\x3d"/search?q\x3d' + b[0] + '\x26type\x3dquestion"\x3e查看全部搜索结果\x3ci class\x3d"zg-icon arrow"\x3e\x3c/i\x3e\x3c/a\x3e',
						z.T.add(c, "zu-autocomplete-row-search-link")) : "plain_text" === a.data[0] ? c.innerHTML = b[0] : "sina" === a.data[0] && (c.innerHTML = ['\x3ca href\x3d"javascript:;" title\x3d"' +
					b[0] + '"\x3e', '\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' + b[2] + '" /\x3e', b[0], "\x3c/a\x3e"].join(""));
				(0,
					window.$)("a", c).click(function(a) {
					a.preventDefault()
				})
			}
			;
		z.Ln = function(a, b, c) {
			for (c = c || "A"; null  != b && b !== a; ) {
				if (b.tagName === c)
					return b;
				b = b.parentNode
			}
			return null
		}
		;
		z.Mn = function(a) {
			this.eQ = a;
			this.data = new Ce
		}
		;
		var Nn = function(a) {
				return (a = z.zn(a)) ? a.length : 0
			}
			;
		var On = function(a, b, c, d) {
				window._gaq || (window._gaq = []);
				c && (c = "" + c);
				d && (d = (0,
					window.parseInt)(d, 10));
				window._gaq.push(["_trackEvent", a, b, c, d]);
				Pn && Qn("trackEvent(deprecated)", z.Vb(arguments))
			}
			;
		var Rn = function(a, b) {
				function c(b) {
					return a.getElementsByTagName(b).length
				}
				var d = ["img", "embed"];
				return b && z.Mb(d, c) ? !1 : !z.Db(z.Sn, z.qb, z.Eg)(a)
			}
			;
		z.Tn = function(a, b) {
			var c = window.$.extend({
				all: !1
			}, z.Tn.defaults, b || {})
				, d = (0,
				window.$)(a).get(0).getBoundingClientRect();
			return !c.all && (d.bottom < c.paddingTop || d.bottom > (0,
				window.$)(window).height()) || c.all && (d.top < c.paddingTop || d.bottom > (0,
				window.$)(window).height()) ? !1 : !0
		}
		;
		z.Un = function(a, b) {
			if (a) {
				"number" === window.$.type(b) && (b = {
					offsetTop: b
				});
				var c = window.$.extend({
					PB: z.Tn
				}, Vn, b || {});
				if (!c.PB(a, c)) {
					var d = (0,
							window.$)(a).offset().top - c.paddingTop - c.offsetTop || 0;
					c.Nv ? (0,
						window.$)(window.document.documentElement).add(window.document.body).animate({
						scrollTop: d
					}) : (0,
						window.$)(window).scrollTop(d)
				}
			}
		}
		;
		var Wn = function(a) {
				(0,
					window.$)(a.target.N.h).off("click.disable-a").on("click.disable-a", "a", function(a) {
					a.preventDefault()
				})
			}
			;
		z.Xn = function(a, b) {
			var c = null ;
			return function() {
				var d = this
					, f = arguments;
				(0,
					window.clearTimeout)(c);
				c = (0,
					window.setTimeout)(function() {
					b.apply(d, f)
				}, a)
			}
		}
		;
		var Yn = function(a, b) {
				var c = a.getBoundingClientRect()
					, d = z.Ti(window.document.body).top;
				if (0 < c.top - d)
					b && b();
				else {
					var f = a.offsetHeight
						, g = ui(window.document).y
						, h = z.Rf().height;
					b && b();
					var k = a.offsetHeight;
					window.scrollTo(0, g + (c.bottom < h ? k - f : c.top - d))
				}
			}
			;
		z.Zn = function(a) {
			z.G.call(this);
			this.JG = null ;
			this.od = a;
			this.v().g(this.od, ["input", "propertychange"], this.UJ);
			$n(this, !0);
			z.T.add(this.od, "zu-seamless-input-origin-element")
		}
		;
		var $n = function(a, b) {
				ao(a);
				if (a.ji) {
					var c = a.od.value;
					if (b || a.JG !== c)
						a.JG = c,
							a.ji.value = c,
							c = Ai(a.od),
							a.od.style.height = si(a.ji.scrollHeight + c.top + c.bottom, !0),
							a.dispatchEvent("change")
				}
			}
			;
		var ao = function(a) {
				if (!a.ji && 0 !== z.Qi(a.od).width) {
					var b = z.M("div", {
						style: "overflow:hiddenposition:relativeheight:0"
					}, a.ji = z.M("textarea", {
						rows: 1,
						className: "zu-seamless-input-mock-element"
					}));
					window.document.body.appendChild(b);
					z.dc("paddingTop paddingBottom fontFamily fontSize fontWeight fontStyle letterSpacing textTransform wordSpacing textIndent lineHeight width white-space".split(" "), function(a) {
						this.ji.style[a] = z.ni(this.od, a)
					}, a)
				}
			}
			;
		var bo = function(a) {
				this.Sv = a
			}
			;
		var co = function(a, b) {
				a && (a.tabIndex = b ? 0 : -1)
			}
			;
		var eo = function(a, b, c) {
				if (c)
					for (var d = c.firstChild, f; d && d.parentNode == c; ) {
						f = d.nextSibling;
						if (1 == d.nodeType) {
							var g = a.Xn(d);
							g && (g.h = d,
							b.isEnabled() || g.Xa(!1),
								b.M(g),
								g.w(d))
						} else
							d.nodeValue && "" != (0,
								z.qb)(d.nodeValue) || c.removeChild(d);
						d = f
					}
			}
			;
		z.fo = function(a, b, c) {
			z.R.call(this, c);
			this.N = b || bo.Y();
			this.Nb = a || this.N.dF()
		}
		;
		var go = function(a, b) {
				var c = a.v()
					, d = a.Yb();
				b ? c.g(d, "focus", a.je).g(d, "blur", a.Vc).g(a.cs(), "key", a.Zb) : c.pa(d, "focus", a.je).pa(d, "blur", a.Vc).pa(a.cs(), "key", a.Zb)
			}
			;
		var ho = function(a, b) {
				var c = b.m()
					, c = c.id || (c.id = b.ie());
				a.xg || (a.xg = {});
				a.xg[c] = b
			}
			;
		var io = function(a) {
				return nj(a, a.Sa)
			}
			;
		z.jo = function(a) {
			ko(a, function(a, c) {
				return (a + 1) % c
			}, mj(a) - 1)
		}
		;
		var lo = function(a) {
				ko(a, function(a, c) {
					a--;
					return 0 > a ? c - 1 : a
				}, 0)
			}
			;
		var mo = function(a) {
				ko(a, function(a, c) {
					return (a + 1) % c
				}, a.Sa)
			}
			;
		var no = function(a) {
				ko(a, function(a, c) {
					a--;
					return 0 > a ? c - 1 : a
				}, a.Sa)
			}
			;
		var ko = function(a, b, c) {
				c = 0 > c ? pj(a, a.kc) : c;
				var d = mj(a);
				c = b.call(a, c, d);
				for (var f = 0; f <= d; ) {
					var g = nj(a, c);
					if (g && a.qD(g)) {
						a.tb(c);
						break
					}
					f++;
					c = b.call(a, c, d)
				}
			}
			;
		var oo = function() {
				z.R.call(this);
				this.Yu = []
			}
			;
		z.po = function(a, b) {
			this.Ra = a || [];
			this.MB = !b
		}
		;
		var qo = function(a, b, c) {
				var d = [];
				if ("" != a) {
					a = lb(a);
					a = new RegExp("(^|\\W+)" + a,"i");
					for (var f = 0; f < c.length && d.length < b; f++) {
						var g = c[f];
						String(g).match(a) && d.push(g)
					}
				}
				return d
			}
			;
		var ro = function(a, b, c) {
				for (var d = [], f = 0; f < c.length; f++) {
					var g = c[f]
						, h = a.toLowerCase()
						, k = String(g).toLowerCase()
						, m = 0;
					if (-1 != k.indexOf(h))
						m = (0,
							window.parseInt)((k.indexOf(h) / 4).toString(), 10);
					else
						for (var n = h.split(""), q = -1, A = 10, H = 0, K; K = n[H]; H++)
							K = k.indexOf(K),
								K > q ? (q = K - q - 1,
								q > A - 5 && (q = A - 5),
									m += q,
									q = K) : (m += A,
									A += 5);
					m < 6 * h.length && d.push({
						BU: g,
						WI: m,
						index: f
					})
				}
				d.sort(function(a, b) {
					var c = a.WI - b.WI;
					return 0 != c ? c : a.index - b.index
				});
				a = [];
				for (H = 0; H < b && H < d.length; H++)
					a.push(d[H].BU);
				return a
			}
			;
		z.so = function(a, b, c) {
			z.G.call(this);
			this.Md = a;
			this.Af = c;
			this.N = b;
			z.F(b, [to, z.uo, vo, z.wo], this.handleEvent, !1, this);
			this.Xb = null ;
			this.Ra = [];
			this.Mg = -1;
			this.Sc = 0;
			this.ce = this.yc = null ;
			this.iG = {}
		}
		;
		z.xo = function(a) {
			for (var b = a.Sc + a.Ra.length - 1, c = a.Mg, d = 0; d < a.Ra.length; d++) {
				if (c >= a.Sc && c < b)
					c++;
				else if (-1 == c)
					c = a.Sc;
				else if (a.MC && c == b) {
					a.Zf(-1);
					break
				} else if (a.nK && c == b)
					c = a.Sc;
				else
					break;
				if (a.Zf(c))
					break
			}
		}
		;
		var yo = function(a) {
				for (var b = a.Sc + a.Ra.length - 1, c = a.Mg, d = 0; d < a.Ra.length; d++) {
					if (c > a.Sc)
						c--;
					else if (a.MC && c == a.Sc) {
						a.Zf(-1);
						break
					} else if (!a.nK || -1 != c && c != a.Sc)
						break;
					else
						c = b;
					if (a.Zf(c))
						break
				}
			}
			;
		z.zo = function(a) {
			a.aG() || window.setTimeout((0,
				z.r)(a.aG, a), 10)
		}
		;
		var Ao = function(a, b) {
				var c = b - a.Sc;
				return 0 > c || c >= a.Ra.length ? -1 : c
			}
			;
		z.Bo = function(a) {
			var b = 0
				, c = 0;
			if (Co(a))
				b = a.selectionStart,
					c = -1;
			else if (z.C) {
				var d = Do(a)
					, f = d[0]
					, d = d[1];
				if (f.inRange(d)) {
					f.setEndPoint("EndToStart", d);
					if ("textarea" == a.type) {
						d.duplicate();
						b = a = f.text;
						for (c = !1; !c; )
							0 == f.compareEndPoints("StartToEnd", f) ? c = !0 : (f.moveEnd("character", -1),
								f.text == a ? b += "\r\n" : c = !0);
						f = [b.length, -1];
						return f
					}
					b = f.text.length;
					c = -1
				}
			}
			return [b, c]
		}
		;
		z.Eo = function(a, b) {
			if (Co(a))
				a.selectionStart = b,
					a.selectionEnd = b;
			else if (z.C) {
				b = Fo(a, b);
				var c = a.createTextRange();
				c.collapse(!0);
				c.move("character", b);
				c.select()
			}
		}
		;
		var Do = function(a) {
				var b = a.ownerDocument || a.document
					, c = b.selection.createRange();
				"textarea" == a.type ? (b = b.body.createTextRange(),
					b.moveToElementText(a)) : b = a.createTextRange();
				return [b, c]
			}
			;
		var Fo = function(a, b) {
				"textarea" == a.type && (b = z.Ra(a.value.substring(0, b)).length);
				return b
			}
			;
		var Co = function(a) {
				try {
					return "number" == typeof a.selectionStart
				} catch (b) {
					return !1
				}
			}
			;
		z.Go = function(a, b, c, d) {
			z.cd.call(this);
			d = d || 150;
			this.dm = null  != c ? c : !0;
			this.wp = a || ",;";
			this.cN = this.wp.substring(0, 1);
			a = this.dm ? "[\\s" + this.wp + "]+" : "[\\s]+";
			this.OJ = new RegExp("^" + a + "|" + a + "$","g");
			this.eU = new RegExp("\\s*[" + this.wp + "]$");
			this.QG = b || "";
			this.aT = !1;
			this.$S = this.dm;
			this.na = 0 < d ? new z.ae(d) : null ;
			this.ec = new z.ee(this);
			this.vv = new z.ee(this);
			this.sb = new Nk;
			this.GG = -1
		}
		;
		var Ho = function(a, b, c) {
				if (z.l(c) ? c : a.dm) {
					c = Io(a, a.W(), z.Bo(a.bb)[0]);
					var d = Jo(a, a.W());
					a.eU.test(b) || (b = z.Ua(b) + a.cN);
					a.yV && (0 == c || z.Oa(d[c - 1]) || (b = " " + b),
					c == d.length - 1 && (b += " "));
					if (b != d[c]) {
						d[c] = b;
						b = a.bb;
						(z.B || z.C && z.E("9")) && b.blur();
						b.value = d.join("");
						for (var f = 0, g = 0; g <= c; g++)
							f += d[g].length;
						b.focus();
						c = f;
						d = a.bb;
						b = c;
						Co(d) ? d.selectionStart = b : z.C && (f = Do(d),
							g = f[0],
						g.inRange(f[1]) && (b = Fo(d, b),
							g.collapse(!0),
							g.move("character", b),
							g.select()));
						d = a.bb;
						Co(d) ? d.selectionEnd = c : z.C && (f = Do(d),
							b = f[1],
						f[0].inRange(b) &&
						(c = Fo(d, c),
							d = Fo(d, z.Bo(d)[0]),
							b.collapse(!0),
							b.moveEnd("character", c - d),
							b.select()))
					}
				} else
					a.Fa(b);
				a.sA = !0
			}
			;
		var Ko = function(a, b) {
				var c = a.dm && b.charCode && -1 != a.wp.indexOf(String.fromCharCode(b.charCode));
				a.gU && c && a.update();
				return a.fU && c && a.aa.ti() ? (b.preventDefault(),
					!0) : !1
			}
			;
		var Lo = function(a) {
				a.sb.attach(a.bb);
				a.ec.g(a.sb, "key", a.$o);
				a.ec.g(a.bb, "mousedown", a.KH);
				z.C && a.ec.g(a.bb, "keypress", a.HH)
			}
			;
		var Mo = function(a, b) {
				a.vv.removeAll();
				a.aa && z.zo(a.aa);
				b != a.bb && (a.bb = b,
				a.na && (a.na.start(),
					a.ec.g(a.na, "tick", a.im)),
					a.Jo = a.W(),
					Lo(a))
			}
			;
		var No = function(a) {
				a.Ii && (a.Ii = !1,
					a.ec.pa(a.bb, "keypress", a.IH),
					a.ec.pa(a.bb, "keyup", a.JH))
			}
			;
		var Io = function(a, b, c) {
				a = Jo(a, b);
				if (c == b.length)
					return a.length - 1;
				for (var d = b = 0, f = 0; d < a.length && f <= c; d++)
					f += a[d].length,
						b = d;
				return b
			}
			;
		var Jo = function(a, b) {
				if (!a.dm)
					return [b];
				for (var c = String(b).split(""), d = [], f = [], g = 0, h = !1; g < c.length; g++)
					a.QG && -1 != a.QG.indexOf(c[g]) ? (a.MN && !h && (d.push(f.join("")),
						f.length = 0),
						f.push(c[g]),
						h = !h) : h || -1 == a.wp.indexOf(c[g]) ? f.push(c[g]) : (f.push(c[g]),
						d.push(f.join("")),
						f.length = 0);
				d.push(f.join(""));
				return d
			}
			;
		z.Oo = function(a, b) {
			this.Dg = this.ne = this.si = "";
			this.mm = null ;
			this.lj = this.Pe = "";
			this.Ee = this.iQ = !1;
			var c;
			if (a instanceof z.Oo)
				this.Ee = z.l(b) ? b : a.Ee,
					Po(this, a.si),
					c = a.ne,
					Qo(this),
					this.ne = c,
					c = a.Dg,
					Qo(this),
					this.Dg = c,
					Ro(this, a.mm),
					c = a.Pe,
					Qo(this),
					this.Pe = c,
					So(this, a.kd().clone()),
					c = a.lj,
					Qo(this),
					this.lj = c;
			else if (a && (c = String(a).match(z.pf))) {
				this.Ee = !!b;
				Po(this, c[1] || "", !0);
				var d = c[2] || "";
				Qo(this);
				this.ne = To(d);
				d = c[3] || "";
				Qo(this);
				this.Dg = To(d, !0);
				Ro(this, c[4]);
				d = c[5] || "";
				Qo(this);
				this.Pe = To(d, !0);
				So(this,
					c[6] || "", !0);
				c = c[7] || "";
				Qo(this);
				this.lj = To(c)
			} else
				this.Ee = !!b,
					this.me = new z.Uo(null ,0,this.Ee)
		}
		;
		var Po = function(a, b, c) {
				Qo(a);
				a.si = c ? To(b, !0) : b;
				a.si && (a.si = a.si.replace(/:$/, ""))
			}
			;
		var Ro = function(a, b) {
				Qo(a);
				if (b) {
					b = Number(b);
					if ((0,
							window.isNaN)(b) || 0 > b)
						throw Error("Bad port number " + b);
					a.mm = b
				} else
					a.mm = null
			}
			;
		var So = function(a, b, c) {
				Qo(a);
				b instanceof z.Uo ? (a.me = b,
					a.me.GA(a.Ee)) : (c || (b = Vo(b, Wo)),
					a.me = new z.Uo(b,0,a.Ee))
			}
			;
		z.Xo = function(a, b) {
			return a.me.get(b)
		}
		;
		var Qo = function(a) {
				if (a.iQ)
					throw Error("Tried to modify a read-only Uri");
			}
			;
		var Yo = function() {
				var a = window.location;
				return a instanceof z.Oo ? a.clone() : new z.Oo(a,void 0)
			}
			;
		var To = function(a, b) {
				return a ? b ? (0,
					window.decodeURI)(a.replace(/%25/g, "%2525")) : (0,
					window.decodeURIComponent)(a) : ""
			}
			;
		var Vo = function(a, b, c) {
				return z.qa(a) ? (a = (0,
					window.encodeURI)(a).replace(b, Zo),
				c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
					a) : null
			}
			;
		var Zo = function(a) {
				a = a.charCodeAt(0);
				return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
			}
			;
		z.Uo = function(a, b, c) {
			this.Ka = this.Kb = null ;
			this.de = a || null ;
			this.Ee = !!c
		}
		;
		var $o = function(a) {
				a.Kb || (a.Kb = new Ce,
					a.Ka = 0,
				a.de && Ye(a.de, function(b, c) {
					a.add((0,
						window.decodeURIComponent)(b.replace(/\+/g, " ")), c)
				}))
			}
			;
		var ap = function(a, b) {
				var c = String(b);
				a.Ee && (c = c.toLowerCase());
				return c
			}
			;
		z.bp = function(a, b, c) {
			z.cd.call(this);
			this.HB = a;
			this.MB = !b;
			this.fa = new bf(c)
		}
		;
		z.cp = function(a, b, c, d, f, g, h, k, m) {
			var n = dp(c)
				, q = Ji(a)
				, A = xi(a);
			A && q.kG(new gi(A.left,A.top,A.right - A.left,A.bottom - A.top));
			var A = z.I(a)
				, H = z.I(c);
			if (A.wa() != H.wa()) {
				var K = A.wa().body;
				var H = H.Ua()
					, O = new Ff(0,0)
					, Z = z.Uf(z.Kf(K));
				if (td(Z, "parent")) {
					var Xa = K;
					do {
						var $a = Z == H ? z.yi(Xa) : Di(Xa);
						O.x += $a.x;
						O.y += $a.y
					} while (Z && Z != H && Z != Z.parent && (Xa = Z.frameElement) && (Z = Z.parent))
				}
				K = Gf(O, z.yi(K));
				!z.C || 9 <= z.sg || Og(A) || (K = Gf(K, z.Pg(A)));
				q.left += K.x;
				q.top += K.y
			}
			a = ep(a, b);
			q = new Ff(a & 2 ? q.left + q.width : q.left,a & 1 ? q.top + q.height :
				q.top);
			q = Gf(q, n);
			f && (q.x += (a & 2 ? -1 : 1) * f.x,
				q.y += (a & 1 ? -1 : 1) * f.y);
			var Ea;
			if (h)
				if (m)
					Ea = m;
				else if (Ea = xi(c))
					Ea.top -= n.y,
						Ea.right -= n.x,
						Ea.bottom -= n.y,
						Ea.left -= n.x;
			return fp(q, c, d, g, Ea, h, k)
		}
		;
		var dp = function(a) {
				var b;
				if (a = a.offsetParent) {
					var c = "HTML" == a.tagName || "BODY" == a.tagName;
					c && "static" == qi(a) || (b = z.yi(a),
					c || (c = (c = z.Ni(a)) && z.B ? -a.scrollLeft : !c || z.gp && z.E("8") || "visible" == z.pi(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft,
						b = Gf(b, new Ff(c,a.scrollTop))))
				}
				return b || new Ff
			}
			;
		var fp = function(a, b, c, d, f, g, h) {
				a = a.clone();
				var k = ep(b, c);
				c = z.Hi(b);
				h = h ? h.clone() : c.clone();
				a = a.clone();
				h = h.clone();
				var m = 0;
				if (d || 0 != k)
					k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left),
						k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
				if (g) {
					if (f) {
						d = a;
						k = h;
						m = 0;
						65 == (g & 65) && (d.x < f.left || d.x >= f.right) && (g &= -2);
						132 == (g & 132) && (d.y < f.top || d.y >= f.bottom) && (g &= -5);
						d.x < f.left && g & 1 && (d.x = f.left,
							m |= 1);
						if (g & 16) {
							var n = d.x;
							d.x < f.left && (d.x = f.left,
								m |= 4);
							d.x + k.width > f.right && (k.width = Math.min(f.right - d.x, n + k.width - f.left),
								k.width = Math.max(k.width, 0),
								m |= 4)
						}
						d.x + k.width > f.right && g & 1 && (d.x = Math.max(f.right - k.width, f.left),
							m |= 1);
						g & 2 && (m = m | (d.x < f.left ? 16 : 0) | (d.x + k.width > f.right ? 32 : 0));
						d.y < f.top && g & 4 && (d.y = f.top,
							m |= 2);
						g & 32 && (n = d.y,
						d.y < f.top && (d.y = f.top,
							m |= 8),
						d.y + k.height > f.bottom && (k.height = Math.min(f.bottom - d.y, n + k.height - f.top),
							k.height = Math.max(k.height, 0),
							m |= 8));
						d.y + k.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - k.height, f.top),
							m |= 2);
						g & 8 && (m = m | (d.y < f.top ? 64 : 0) | (d.y + k.height > f.bottom ? 128 : 0));
						f = m
					} else
						f = 256;
					m = f
				}
				g = new gi(0,
					0,0,0);
				g.left = a.x;
				g.top = a.y;
				g.width = h.width;
				g.height = h.height;
				f = m;
				if (f & 496)
					return f;
				z.ri(b, new Ff(g.left,g.top));
				h = g.ai();
				z.If(c, h) || (c = h,
					a = Og(z.I(z.Kf(b))),
					!z.C || z.E("10") || a && z.E("8") ? (b = b.style,
						z.B ? b.MozBoxSizing = "border-box" : z.D ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box",
						b.width = Math.max(c.width, 0) + "px",
						b.height = Math.max(c.height, 0) + "px") : (h = b.style,
						a ? (a = z.Ti(b),
							b = Ai(b),
							h.pixelWidth = c.width - b.left - a.left - a.right - b.right,
							h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth =
							c.width,
							h.pixelHeight = c.height)));
				return f
			}
			;
		var ep = function(a, b) {
				return (b & 4 && z.Ni(a) ? b ^ 2 : b) & -5
			}
			;
		z.hp = function(a, b, c, d) {
			z.G.call(this);
			this.Qa = a || window.document.body;
			this.da = z.I(this.Qa);
			this.mp = !a;
			this.h = null ;
			this.Xb = "";
			this.Ra = [];
			this.zf = [];
			this.pJ = this.Sl = -1;
			this.ob = !1;
			this.className = "ac-renderer";
			this.hh = "ac-row";
			this.LG = "active";
			this.wv = "ac-active";
			this.uP = "ac-highlighted";
			this.hl = b || null ;
			this.$J = null  != d ? d : !0;
			this.LQ = !0;
			this.po = !1;
			this.KT = !!c;
			this.Lu = !1;
			this.No = 0;
			this.kJ = !1
		}
		;
		var ip = function(a, b) {
				a.yc && (P(a.yc, "haspopup", b),
					P(a.h, "expanded", b),
					b ? P(a.yc, "owns", a.h.id) : (a.yc.removeAttribute("aria-owns"),
						Qh(a.yc, null )))
			}
			;
		var jp = function(a, b) {
				var c = 0 <= b && b < a.Ra.length ? a.Ra[b] : void 0
					, d = 0 <= b && b < a.zf.length ? a.zf[b] : void 0;
				a.dispatchEvent({
					type: "rowhilite",
					sX: d,
					ri: c ? c.data : null
				}) && (0 <= a.Sl && Xh(a.zf[a.Sl], [a.wv, a.LG]),
					a.Sl = b,
				d && (Vh(d, [a.wv, a.LG]),
				a.yc && Qh(a.yc, d),
					zi(d, a.h)))
			}
			;
		var kp = function(a) {
				if (!a.h) {
					var b = a.da.B("DIV", {
						style: "display:none"
					});
					a.kJ && (b.style.overflowY = "auto");
					a.h = b;
					Vh(b, (0,
						z.qb)(a.className).split(" "));
					Nh(b, "listbox");
					b.id = z.gj(z.fj.Y());
					a.da.appendChild(a.Qa, b);
					z.F(b, "click", a.Hl, !1, a);
					z.F(b, "mousedown", a.Il, !1, a);
					z.F(b, "mouseover", a.xF, !1, a)
				}
			}
			;
		var lp = function(a) {
				kp(a);
				a.Lu && (a.h.style.visibility = "hidden");
				a.zV && (a.h.style.minWidth = a.zV.clientWidth + "px");
				a.zf.length = 0;
				a.da.du(a.h);
				if (a.hl && a.hl.render)
					a.hl.render(a, a.h, a.Ra, a.Xb);
				else {
					var b = null ;
					z.x(a.Ra, function(a) {
						a = mp(this, a, this.Xb);
						this.Lu ? this.h.insertBefore(a, b) : this.da.appendChild(this.h, a);
						b = a
					}, a)
				}
				0 == a.Ra.length ? a.Ac() : (a.show(),
					a.ea(),
					z.Oi(a.h, !0))
			}
			;
		var np = function(a, b, c) {
				if (a.po || !a.jK)
					if (3 == b.nodeType) {
						var d = null ;
						z.oa(c) && 1 < c.length && !a.po && (d = Yb(c, 1));
						c = op(a, c);
						if (0 != c.length) {
							var f = b.nodeValue
								, g = a.LQ ? new RegExp("\\b(?:" + c + ")","gi") : new RegExp(c,"gi");
							c = [];
							for (var h = 0, k = g.exec(f), m = 0; k; )
								m++,
									c.push(f.substring(h, k.index)),
									c.push(f.substring(k.index, g.lastIndex)),
									h = g.lastIndex,
									k = g.exec(f);
							c.push(f.substring(h));
							if (1 < c.length) {
								d = a.po ? m : 1;
								for (f = 0; f < d; f++)
									g = 2 * f,
										b.nodeValue = c[g],
										h = a.da.createElement("B"),
										h.className = a.uP,
										a.da.appendChild(h, a.da.createTextNode(c[g +
										1])),
										h = b.parentNode.insertBefore(h, b.nextSibling),
										b.parentNode.insertBefore(a.da.createTextNode(""), h.nextSibling),
										b = h.nextSibling;
								c = Yb(c, 2 * d);
								b.nodeValue = c.join("");
								a.jK = !0
							} else
								d && np(a, b, d)
						}
					} else
						for (b = b.firstChild; b; )
							d = b.nextSibling,
								np(a, b, c),
								b = d
			}
			;
		var op = function(a, b) {
				var c = "";
				if (!b)
					return c;
				z.oa(b) && (b = z.Jb(b, function(a) {
					return !z.Oa(null  == a ? "" : String(a))
				}));
				a.po ? z.oa(b) ? c = z.Kb(b, lb).join("|") : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""),
					c = lb(c),
					c = c.replace(/ /g, "|")) : z.oa(b) ? c = 0 < b.length ? lb(b[0]) : "" : /^\W/.test(b) || (c = lb(b));
				return c
			}
			;
		var mp = function(a, b, c) {
				var d = a.da.B("DIV", {
					className: a.hh,
					id: z.gj(z.fj.Y())
				});
				Nh(d, "option");
				a.hl && a.hl.rd ? a.hl.rd(b, c, d) : a.FI(b, c, d);
				c && a.$J && (a.jK = !1,
					np(a, d, c));
				z.Uh(d, a.hh);
				a.zf.push(d);
				return d
			}
			;
		var pp = function(a, b) {
				for (; b && b != a.h && !z.Th(b, a.hh); )
					b = b.parentNode;
				return b ? z.Ib(a.zf, b) : -1
			}
			;
		z.qp = function(a, b, c, d) {
			this.Md = a = new z.bp(a,!d);
			d = new z.hp;
			c = new z.Go(null ,null ,!!c,300);
			z.so.call(this, a, d, c);
			c.aa = this;
			c.Pk(b)
		}
		;
		z.rp = function(a, b) {
			var c = this
				, d = {};
			z.rc(d, this.defaults, b || {});
			this.J = d;
			var f = d.rd ? {
				rd: (0,
					z.r)(d.rd, c)
			} : null ;
			f && (f.render = d.render ? (0,
				z.r)(d.render, c) : null );
			this.N = f = new z.hp(d.mk,f);
			var g = "string" === typeof d.source ? z.bp : z.po
				, h = new g(d.source,!d.rV);
			this.Md = h;
			var k = d.Cy;
			k || (k = new z.Go(d.separator,d.eN,!!d.multiple,d.delay),
					k.vi = function(a, b) {
						var f;
						z.ta(d.select) && (f = d.select.call(c, a, c.N.zf[c.N.Sl]));
						Ho(this, z.l(f) ? f : a.label || a.toString(), b);
						return !1
					}
			);
			z.so.call(this, h, f, k);
			k.aa = this;
			k.Pk(a);
			a.setAttribute("autocomplete",
				"off");
			h.pi = function(a, b, f) {
				var h = f;
				z.ta(d.format) && (h = function(a, b) {
						var g = d.format.call(c, b, a);
						z.ta(d.filter) && (g = d.filter.call(c, g, a));
						f(a, g)
					}
				);
				return g.prototype.pi.call(this, a, b, h)
			}
			;
			f.FI = function(a, b, c) {
				a = a.data;
				c.innerHTML = a.TU ? a.TU() : a.label || a.toString()
			}
			;
			this.yc = a;
			d.Ne && (this.$l = d.Ne);
			d.placeholder && (this.lc = new z.am(a,d.placeholder));
			this.addEventListener("suggestionsupdate", function() {
				this.dispatchEvent(this.rb() ? "show" : "hide")
			})
		}
		;
		var sp = function(a, b, c, d) {
				z.Go.call(this, a, b, c, d)
			}
			;
		z.tp = function() {
			z.G.call(this);
			this.WF = 0;
			this.Qc = [];
			this.kl = [];
			this.Nw = {};
			this.S = new z.ee(this);
			this.cQ = this.qG = !1;
			this.EB = !0
		}
		;
		z.up = function(a, b, c) {
			b.xE = c;
			b.aj = void 0;
			a.Qc.push(b)
		}
		;
		var vp = function(a, b) {
				for (var c = 0, d = a.Qc.length; c < d; c++) {
					var f = a.Qc[c];
					f.jl = Ji(f)
				}
				c = 0;
				for (d = a.kl.length; c < d; c++)
					f = a.kl[c],
					f != b && (f.jl = Ji(f))
			}
			;
		var wp = function(a) {
				hd(a.Gb);
				a.Bc && z.N(a.Bc);
				a.$a && "none" == a.$a.style.display && (a.Ft.insertBefore(a.$a, a.Mz),
					a.$a.style.display = "");
				a.zw && a.$a ? Xh(a.$a, a.zw || []) : a.$a && (a.$a.style.visibility = "");
				for (var b = 0, c = a.Qc.length; b < c; b++) {
					var d = a.Qc[b];
					d.aj && z.Wh(d, d.aj)
				}
			}
			;
		var xp = function(a, b) {
				return a.x > b.left && a.x < b.left + b.width && a.y > b.top && a.y < b.top + b.height
			}
			;
		var yp = function(a, b) {
				var c = a.jl;
				return Math.abs(b.y - (c.top + (c.height - 1) / 2))
			}
			;
		var zp = function(a) {
				return a.top + a.height - 1
			}
			;
		var Ap = function(a) {
				return a.left + a.width - 1
			}
			;
		var Bp = function(a) {
				return a.left || 0
			}
			;
		var Cp = function(a, b) {
				return a < b
			}
			;
		var Dp = function(a, b) {
				return a > b
			}
			;
		var Ep = function(a, b, c, d, f, g) {
				z.qd.call(this, a);
				this.event = c;
				this.Ir = g
			}
			;
		z.Fp = function(a, b) {
			z.R.call(this, b);
			this.Lb = a || ""
		}
		;
		var Gp = function() {
				null  != Hp || (Hp = "placeholder" in window.document.createElement("INPUT"));
				return Hp
			}
			;
		var Ip = function(a) {
				!a.KN && a.S && a.m().form && (a.S.g(a.m().form, "submit", a.DO),
					a.KN = !0)
			}
			;
		var Jp = function(a) {
				return !!a.m() && "" != a.m().value && a.m().value != a.Lb
			}
			;
		var Kp = function(a, b) {
				return window.$.post("/node/MemberFollowBaseV2", {
					method: b ? "follow_member" : "unfollow_member",
					params: {
						hash_id: a
					}
				})
			}
			;
		var Lp = function(a, b) {
				return window.$.post("/node/QuestionFollowBaseV2", {
					method: b ? "follow_question" : "unfollow_question",
					params: {
						question_id: a
					}
				})
			}
			;
		var Mp = function(a, b) {
				return window.$.post(b ? "/collection/follow" : "/collection/unfollow", {
					favlist_id: a
				})
			}
			;
		var Np = function(a, b) {
				return window.$.post("/node/TopicFollowBaseV2", {
					method: b ? "follow_topic" : "unfollow_topic",
					params: {
						topic_id: a
					}
				})
			}
			;
		z.Op = function(a, b) {
			return window.$.get("/" + a + "/" + b + "/sharetext")
		}
		;
		var Pp = function(a, b, c, d) {
				z.Go.call(this, a, b, c, d)
			}
			;
		var Qp = function(a, b) {
				z.bp.call(this, a, b);
				this.rA = null ;
				this.PE = !0
			}
			;
		var Rp = function(a, b, c, d) {
				this.kH = 0;
				z.Go.call(this, a, b, !!c, d || 300)
			}
			;
		var Sp = function(a, b, c, d) {
				Rp.call(this, a, b, !!c, d)
			}
			;
		z.Tp = function(a, b, c, d, f, g, h, k, m) {
			var n = {};
			"question_suggest" === g ? (n.render = (0,
				z.r)(this.vT, this),
				n.rd = Kn) : "topic_question" === g ? (n.render = (0,
				z.r)(this.xT, this),
				n.rd = Jn) : n.rd = g ? Jn : Kn;
			g = new z.hp(f,n);
			f && (g.mp = !1);
			g.po = !0;
			this.N = g;
			this.Md = new Qp(a,!d);
			a = m ? m : new Rp(null ,null ,c);
			h && h.length && new z.am(b,h[0]);
			a.TJ = !1;
			z.so.call(this, this.Md, g, a);
			a.aa = this;
			a.Nq(b);
			k && (a.kH = k)
		}
		;
		z.Up = function(a, b, c) {
			z.G.call(this);
			this.He = c || "搜索话题";
			this.qa = b;
			this.data = a || [];
			this.status = Vp;
			this.sT = "/topic/unbind";
			this.mL = "/topic/bind";
			this.isEnabled = !0;
			this.Ks = '\x3ca class\x3d"zm-tag-editor-tip-link" href\x3d"#" name\x3d"edit"\x3e帮忙给这个问题选个话题吧，好让别人来回答\x3c/a\x3e\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e添加\x3c/a\x3e';
			this.Ne = 10;
			this.wt = !1;
			this.nt = window.Infinity;
			this.qt = 0;
			this.GC = !1
		}
		;
		var Wp = function(a) {
				a = z.Of("zm-item-tag", a.lg);
				return z.Kb(a, function(a) {
					var c = [(0,
						z.qb)(a.innerHTML), a.getAttribute("data-token"), null , a.getAttribute("data-topicid")];
					c.gV = !!a.getAttribute("data-uneditable");
					return c
				})
			}
			;
		var Xp = function(a) {
				if (a.data.length) {
					var b = z.Kb(a.data, function(a) {
						return z.yn(a, "", null , "b")
					}, a);
					a.isEnabled && b.push(Bn());
					a.lg.innerHTML = b.join("")
				} else
					a.isEnabled && (a.lg.innerHTML = a.Ks)
			}
			;
		var Yp = function(a, b) {
				return z.Jb(b, function(a) {
					return "topic" !== a[0] ? !1 : !this.cx(a)
				}, a)
			}
			;
		var Zp = function(a, b, c) {
				function d() {
					return z.Pb(b, function(a) {
						return "topic" === a[0] && a[4] && a[1] === c
					})
				}
				function f() {
					return z.Pb(b, function(a) {
						return 3 >= a.length && a[1] === z.Na("创建 %s 话题", a[2])
					})
				}
				var g = (0,
					z.r)(function() {
					return z.Pb(this.data, function(a) {
						return a[0] === c
					})
				}, a);
				z.X.As ? !a.GC || b.length && (f() || d()) || g() || b.push(["topic", z.Na("创建 %s 话题", c), c]) : (a = f()) && (1 < b.length ? Tb(b, a) : b = [["plain_text", '\x3cspan class\x3d"zu-autocomplete-row-name zu-autocomplete-row-name-info"\x3e没有找到话题：' + a[2] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e请使用已经创建的话题\x3c/span\x3e']]);
				return b
			}
			;
		var $p = function(a) {
				var b = a.data.length >= a.nt;
				a.gf && z.Q(a.gf, !b);
				a.ot && z.Q(a.ot, b)
			}
			;
		var aq = function(a) {
				var b = [];
				a.data = z.Jb(a.data, function(a) {
					if (z.y(b, a[1]))
						return !1;
					b.push(a[1]);
					return !0
				})
			}
			;
		z.bq = function(a, b, c) {
			z.Up.call(this, a, 0, c ? "添加父话题" : "添加子话题");
			this.My = c;
			this.Ff = b;
			this.Ks = "";
			this.EI = "/topic/parent/remove"
		}
		;
		var cq = function(a) {
				z.Up.call(this);
				this.Ks = "";
				this.He = a || "";
				this.nt = this.Ne = 5;
				this.wq = (0,
					window.$)("#zh-question-suggest-title-content")
			}
			;
		var dq = function(a) {
				var b;
				b = a.Sp ? z.Jb(a.Sp, function(a) {
					return !this.cx(a)
				}, a) : [];
				a.yq.show();
				b && 0 !== b.length || a.yq.hide();
				var c = "";
				b = z.Kb(b, function(a) {
					return "\x3ca href\x3d'javascript:;' name\x3d'add' data-id\x3d'" + a[4] + "' data-text\x3d'" + a[1] + "' class\x3d'zg-r3px zm-item-tag'\x3e\x3cspan\x3e" + a[1] + "\x3c/span\x3e\x3c/a\x3e"
				});
				c += b.join("");
				a.EK.html(c);
				a.lv.hide()
			}
			;
		var eq = function(a) {
				if (a.Sp) {
					var b = 0
						, c = a.data.length;
					z.x(a.data, function(a) {
						z.x(this.Sp, function(c) {
							a[1] === c[1] && b++
						}, this)
					}, a);
					z.W.Ha({
						type: "ga_click_add_question",
						data: {
							Bu: b,
							total: c
						}
					})
				}
			}
			;
		z.fq = function(a) {
			z.Up.call(this, a, 0);
			this.Ks = "";
			this.kD = "/topic/ignore"
		}
		;
		z.gq = function() {
			z.cd.call(this)
		}
		;
		z.hq = function(a, b, c, d, f) {
			this.Gc = !!b;
			this.node = null ;
			this.Vb = 0;
			this.rk = !1;
			this.mr = !c;
			a && this.setPosition(a, d);
			this.depth = void 0 != f ? f : this.Vb || 0;
			this.Gc && (this.depth *= -1)
		}
		;
		z.iq = function() {}
		;
		var jq = function(a) {
				if (a.getSelection)
					return a.getSelection();
				a = a.document;
				var b = a.selection;
				if (b) {
					try {
						var c = b.createRange();
						if (c.parentElement) {
							if (c.parentElement().document != a)
								return null
						} else if (!c.length || c.item(0).document != a)
							return null
					} catch (d) {
						return null
					}
					return b
				}
				return null
			}
			;
		z.kq = function(a) {
			for (var b = [], c = 0, d = a.rj(); c < d; c++)
				b.push(a.De(c));
			return b
		}
		;
		z.lq = function(a) {
			return a.Sg() ? a.la() : a.Z()
		}
		;
		z.mq = function(a) {
			return a.Sg() ? a.Ma() : a.xa()
		}
		;
		z.nq = function(a) {
			return a.Sg() ? a.Z() : a.la()
		}
		;
		z.oq = function(a) {
			return a.Sg() ? a.xa() : a.Ma()
		}
		;
		var pq = function(a, b) {
				z.hq.call(this, a, b, !0)
			}
			;
		z.qq = function() {}
		;
		z.rq = function(a, b, c, d, f) {
			this.ua = this.Ba = null ;
			this.Ea = this.Ga = 0;
			var g;
			a && (this.Ba = a,
				this.Ga = b,
				this.ua = c,
				this.Ea = d,
			1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes,
				(b = a[b]) ? (this.Ba = b,
					this.Ga = 0) : (a.length && (this.Ba = z.Hb(a)),
					g = !0)),
			1 == c.nodeType && ((this.ua = c.childNodes[d]) ? this.Ea = 0 : this.ua = c));
			z.hq.call(this, f ? this.ua : this.Ba, f, !0);
			if (g)
				try {
					this.next()
				} catch (h) {
					if (h != z.xe)
						throw h;
				}
		}
		;
		var sq = function(a, b) {
				null  != a && this.append.apply(this, arguments)
			}
			;
		var tq = function() {}
			;
		var uq = function(a, b) {
				var c = a.R.getClientRects();
				return c.length ? (c = b ? c[0] : z.Hb(c),
					new Ff(b ? c.left : c.right,b ? c.top : c.bottom)) : null
			}
			;
		z.vq = function(a) {
			this.R = a
		}
		;
		var wq = function(a) {
				var b = z.Kf(a).createRange();
				if (3 == a.nodeType)
					b.setStart(a, 0),
						b.setEnd(a, a.length);
				else if (xq(a)) {
					for (var c, d = a; (c = d.firstChild) && xq(c); )
						d = c;
					b.setStart(d, 0);
					for (d = a; (c = d.lastChild) && xq(c); )
						d = c;
					b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
				} else
					c = a.parentNode,
						a = z.Ib(c.childNodes, a),
						b.setStart(c, a),
						b.setEnd(c, a + 1);
				return b
			}
			;
		var yq = function(a, b, c, d) {
				var f = z.Kf(a).createRange();
				f.setStart(a, b);
				f.setEnd(c, d);
				return f
			}
			;
		var zq = function(a) {
				this.R = a
			}
			;
		z.Aq = function(a, b) {
			this.ua = this.Ba = this.gg = null ;
			this.Ea = this.Ga = -1;
			this.R = a;
			this.Gr = b
		}
		;
		z.Bq = function(a) {
			var b = z.Kf(a).body.createTextRange();
			if (1 == a.nodeType)
				b.moveToElementText(a),
				xq(a) && !a.childNodes.length && b.collapse(!1);
			else {
				for (var c = 0, d = a; d = d.previousSibling; ) {
					var f = d.nodeType;
					if (3 == f)
						c += d.length;
					else if (1 == f) {
						b.moveToElementText(d);
						break
					}
				}
				d || b.moveToElementText(a.parentNode);
				b.collapse(!d);
				c && b.move("character", c);
				b.moveEnd("character", a.length)
			}
			return b
		}
		;
		var Cq = function(a, b) {
				for (var c = b.childNodes, d = 0, f = c.length; d < f; d++) {
					var g = c[d];
					if (xq(g)) {
						var h = z.Bq(g)
							, k = h.htmlText != g.outerHTML;
						if (a.isCollapsed() && k ? 0 <= a.Ae(h, 1, 1) && 0 >= a.Ae(h, 1, 0) : a.R.inRange(h))
							return Cq(a, g)
					}
				}
				return b
			}
			;
		var Dq = function(a, b, c) {
				c = c || a.uc();
				if (!c || !c.firstChild)
					return c;
				for (var d = 1 == b, f = 0, g = c.childNodes.length; f < g; f++) {
					var h = d ? f : g - f - 1, k = c.childNodes[h], m;
					try {
						m = Eq(k)
					} catch (q) {
						continue
					}
					var n = m.R;
					if (a.isCollapsed())
						if (!xq(k)) {
							if (0 == a.Ae(n, 1, 1)) {
								a.Ga = a.Ea = h;
								break
							}
						} else {
							if (m.yg(a))
								return Dq(a, b, k)
						}
					else {
						if (a.yg(m)) {
							if (!xq(k)) {
								d ? a.Ga = h : a.Ea = h + 1;
								break
							}
							return Dq(a, b, k)
						}
						if (0 > a.Ae(n, 1, 0) && 0 < a.Ae(n, 0, 1))
							return Dq(a, b, k)
					}
				}
				return c
			}
			;
		var Fq = function(a, b) {
				var c = 1 == b
					, d = c ? a.Z() : a.la();
				if (1 == d.nodeType) {
					for (var d = d.childNodes, f = d.length, g = c ? 1 : -1, h = c ? 0 : f - 1; 0 <= h && h < f; h += g) {
						var k = d[h];
						if (!xq(k) && 0 == a.R.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Eq(k).R))
							return c ? h : h + 1
					}
					return -1 == h ? 0 : h
				}
				f = a.R.duplicate();
				g = z.Bq(d);
				f.setEndPoint(c ? "EndToEnd" : "StartToStart", g);
				f = f.text.length;
				return c ? d.length - f : f
			}
			;
		var Gq = function(a) {
				return 3 == a.nodeType ? a.nodeValue : a.innerText
			}
			;
		var Hq = function(a, b, c) {
				c = c || z.I(a.parentElement());
				var d, f = d = b.id;
				d || (d = b.id = z.sb());
				a.pasteHTML(b.outerHTML);
				(b = c.m(d)) && (f || b.removeAttribute("id"));
				return b
			}
			;
		z.Iq = function(a, b, c) {
			var d;
			d = d || z.I(a.parentElement());
			var f;
			1 != b.nodeType && (f = !0,
				b = d.B("DIV", null , b));
			a.collapse(c);
			b = Hq(a, b, d);
			f && (a = b.firstChild,
				d.DN(b),
				b = a);
			return b
		}
		;
		var Jq = function(a) {
				this.R = a
			}
			;
		var Kq = function(a) {
				this.R = a
			}
			;
		var Lq = function(a) {
				return Mq ? new z.Aq(a,z.Kf(a.parentElement())) : z.D ? new Kq(a) : z.B ? new zq(a) : z.li ? new Jq(a) : new z.vq(a)
			}
			;
		var Eq = function(a) {
				if (!z.C || 9 <= z.sg)
					a = z.D ? new Kq(wq(a)) : z.B ? new zq(wq(a)) : z.li ? new Jq(wq(a)) : new z.vq(wq(a));
				else {
					var b = new z.Aq(z.Bq(a),z.Kf(a));
					if (xq(a)) {
						for (var c, d = a; (c = d.firstChild) && xq(c); )
							d = c;
						b.Ba = d;
						b.Ga = 0;
						for (d = a; (c = d.lastChild) && xq(c); )
							d = c;
						b.ua = d;
						b.Ea = 1 == d.nodeType ? d.childNodes.length : d.length;
						b.gg = a
					} else
						b.Ba = b.ua = b.gg = a.parentNode,
							b.Ga = z.Ib(b.gg.childNodes, a),
							b.Ea = b.Ga + 1;
					a = b
				}
				return a
			}
			;
		var xq = function(a) {
				return ag(a) || 3 == a.nodeType
			}
			;
		z.Nq = function() {
			this.Ea = this.ua = this.Ga = this.Ba = this.Fh = null ;
			this.uf = !1
		}
		;
		var Oq = function(a, b) {
				var c = new z.Nq;
				c.Fh = a;
				c.uf = !!b;
				return c
			}
			;
		z.Pq = function(a, b, c, d) {
			var f = new z.Nq;
			f.uf = Qq(a, b, c, d);
			if (z.og(a) && !ag(a)) {
				var g = a.parentNode;
				b = z.Ib(g.childNodes, a);
				a = g
			}
			z.og(c) && !ag(c) && (g = c.parentNode,
				d = z.Ib(g.childNodes, c),
				c = g);
			f.uf ? (f.Ba = c,
				f.Ga = d,
				f.ua = a,
				f.Ea = b) : (f.Ba = a,
				f.Ga = b,
				f.ua = c,
				f.Ea = d);
			return f
		}
		;
		z.Rq = function(a) {
			var b;
			if (!(b = a.Fh)) {
				b = a.Z();
				var c = a.xa()
					, d = a.la()
					, f = a.Ma();
				if (!z.C || 9 <= z.sg)
					b = z.D ? new Kq(yq(b, c, d, f)) : z.B ? new zq(yq(b, c, d, f)) : z.li ? new Jq(yq(b, c, d, f)) : new z.vq(yq(b, c, d, f));
				else {
					var g = b
						, h = c
						, k = d
						, m = f
						, n = !1;
					1 == g.nodeType && (h = g.childNodes[h],
						n = !h,
						g = h || g.lastChild || g,
						h = 0);
					var q = z.Bq(g);
					h && q.move("character", h);
					g == k && h == m ? q.collapse(!0) : (n && q.collapse(!1),
						n = !1,
					1 == k.nodeType && (k = (h = k.childNodes[m]) || k.lastChild || k,
						m = 0,
						n = !h),
						g = z.Bq(k),
						g.collapse(!n),
					m && g.moveEnd("character", m),
						q.setEndPoint("EndToEnd",
							g));
					m = new z.Aq(q,z.Kf(b));
					m.Ba = b;
					m.Ga = c;
					m.ua = d;
					m.Ea = f;
					b = m
				}
				b = a.Fh = b
			}
			return b
		}
		;
		var Sq = function(a) {
				z.cd.call(this);
				this.PC = z.lq(a);
				this.IL = z.mq(a);
				this.TE = z.nq(a);
				this.GN = z.oq(a)
			}
			;
		z.Tq = function() {
			this.Mp = this.cb = this.R = null
		}
		;
		var Uq = function(a) {
				var b = new z.Tq;
				b.R = a;
				return b
			}
			;
		var Vq = function(a) {
				for (var b = z.Kf(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++)
					b.addElement(arguments[c]);
				return Uq(b)
			}
			;
		var Wq = function(a) {
				a.Mp || (a.Mp = a.Wh().concat(),
					a.Mp.sort(function(a, c) {
						return a.sourceIndex - c.sourceIndex
					}));
				return a.Mp
			}
			;
		var Xq = function(a) {
				this.cb = a.Wh()
			}
			;
		var Yq = function(a) {
				this.cb = this.ua = this.Ba = null ;
				a && (this.cb = Wq(a),
					this.Ba = this.cb.shift(),
					this.ua = z.Hb(this.cb) || this.Ba);
				z.hq.call(this, this.Ba, !1, !0)
			}
			;
		z.Zq = function() {
			this.Kf = [];
			this.qm = [];
			this.nr = this.Jm = null
		}
		;
		var $q = function(a) {
				var b = new z.Zq;
				b.qm = a;
				b.Kf = z.Kb(a, function(a) {
					return a.he()
				});
				return b
			}
			;
		var ar = function(a) {
				a.Jm || (a.Jm = z.kq(a),
					a.Jm.sort(function(a, c) {
						var d = a.Z()
							, f = a.xa()
							, g = c.Z()
							, h = c.xa();
						return d == g && f == h ? 0 : Qq(d, f, g, h) ? 1 : -1
					}));
				return a.Jm
			}
			;
		var br = function(a) {
				this.uA = z.Kb(z.kq(a), function(a) {
					return a.tA()
				})
			}
			;
		var cr = function(a) {
				this.ag = null ;
				this.fl = 0;
				a && (this.ag = z.Kb(ar(a), function(a) {
					return z.we(a)
				}));
				pq.call(this, a ? this.Z() : null , !1)
			}
			;
		z.dr = function(a) {
			return (a = jq(a || window)) && er(a)
		}
		;
		var er = function(a) {
				var b, c = !1;
				if (a.createRange)
					try {
						b = a.createRange()
					} catch (f) {
						return null
					}
				else if (a.rangeCount) {
					if (1 < a.rangeCount) {
						b = new z.Zq;
						for (var c = 0, d = a.rangeCount; c < d; c++)
							b.Kf.push(a.getRangeAt(c));
						return b
					}
					b = a.getRangeAt(0);
					c = Qq(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
				} else
					return null ;
				return z.fr(b, c)
			}
			;
		z.fr = function(a, b) {
			return a && a.addElement ? Uq(a) : Oq(Lq(a), b)
		}
		;
		z.gr = function(a) {
			return Oq(Eq(a), void 0)
		}
		;
		z.hr = function(a, b) {
			return z.Pq(a, b, a, b)
		}
		;
		z.ir = function(a) {
			if (a = jq(a || window))
				if (a.empty)
					try {
						a.empty()
					} catch (b) {}
				else
					try {
						a.removeAllRanges()
					} catch (b) {}
		}
		;
		var Qq = function(a, b, c, d) {
				if (a == c)
					return d < b;
				var f;
				if (1 == a.nodeType && b)
					if (f = a.childNodes[b])
						a = f,
							b = 0;
					else if (z.qg(a, c))
						return !0;
				if (1 == c.nodeType && d)
					if (f = c.childNodes[d])
						c = f,
							d = 0;
					else if (z.qg(c, a))
						return !1;
				return 0 < (rg(a, c) || b - d)
			}
			;
		z.jr = function(a, b, c) {
			this.sH = a;
			this.IT = !!c;
			a && !b && this.next()
		}
		;
		var kr = function(a, b, c) {
				z.l(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
				z.jr.call(this, a.childNodes[c], !0, b)
			}
			;
		z.lr = function(a) {
			for (var b; b = a && 1 == a.nodeType ? z.mr(z.ze(new kr(a,!1), z.nr)) : null ; )
				a = b;
			return a
		}
		;
		z.mr = function(a) {
			try {
				return a.next()
			} catch (b) {
				return null
			}
		}
		;
		z.nr = function(a) {
			return 1 == a.nodeType || 3 == a.nodeType && !z.Pa(a.nodeValue)
		}
		;
		z.or = function(a, b) {
			var c = z.Hg(a);
			if (a.getElementsByTagName)
				for (var d in pr)
					if (a.tagName == d || 0 < a.getElementsByTagName(d).length)
						return !1;
			return !b && " " == c || z.Pa(c)
		}
		;
		z.qr = function(a) {
			return a.length || a.childNodes.length
		}
		;
		z.rr = function(a, b) {
			z.C && z.cg(a);
			a.innerHTML = b
		}
		;
		var sr = function(a) {
				return (a = a.exec(bc)) ? a[1] : ""
			}
			;
		z.tr = function(a) {
			z.hr(z.lr(a), 0).select()
		}
		;
		z.ur = function(a, b) {
			var c = a.parentNode
				, d = z.Ib(c.childNodes, a) + (b ? 0 : 1)
				, c = z.vr(c, d, b, !0);
			z.hr(c.node, c.offset).select()
		}
		;
		z.wr = function(a, b) {
			this.node = a;
			this.offset = b
		}
		;
		z.vr = function(a, b, c, d) {
			for (; 1 == a.nodeType; ) {
				var f = a.childNodes[b];
				if (f || a.lastChild)
					if (f) {
						var g = f.previousSibling;
						if (c && g) {
							if (d && xr(g))
								break;
							a = g;
							b = z.qr(a)
						} else {
							if (d && xr(f))
								break;
							a = f;
							b = 0
						}
					} else {
						if (d && xr(a.lastChild))
							break;
						a = a.lastChild;
						b = z.qr(a)
					}
				else
					break
			}
			return new z.wr(a,b)
		}
		;
		var xr = function(a) {
				return 1 == a.nodeType && !ag(a)
			}
			;
		z.yr = function(a, b) {
			var c = a ? z.I(a) : b;
			z.R.call(this, c);
			this.NS = a || this.L().wa().body;
			this.Nz = {};
			z.zr.push(this);
			this.nu = !0
		}
		;
		z.Ar = function(a, b) {
			(a.nu = b) ? a.iq() : z.Br(a)
		}
		;
		var Cr = function(a) {
				if (!a.ul) {
					var b = a.m()
						, c = z.yi(b).x
						, d = z.Qi(b).width;
					a.Nz = {};
					z.dc(Dr, function(a) {
						this.Nz[a] = b.style[a]
					}, a);
					z.dc(Er, function(a) {
						this.lc.style[a] = b.style[a] || z.oi(b, a) || z.ni(b, a)
					}, a);
					Fi(a.lc, b.offsetWidth, b.offsetHeight);
					z.ii(b, {
						left: c + "px",
						width: d + "px",
						cssFloat: "none"
					});
					b.parentNode.replaceChild(a.lc, b);
					a.NS.appendChild(b);
					b.style.position = "fixed";
					a.mp();
					z.T.add(b, "goog-scrollfloater-floating");
					a.ul = !0
				}
			}
			;
		z.Br = function(a) {
			if (a.ul) {
				var b = a.m();
				z.dc(a.Nz, function(a, d) {
					b.style[d] = a
				});
				a.lc.parentNode.replaceChild(b, a.lc);
				z.T.remove(b, "goog-scrollfloater-floating");
				a.ul = !1
			}
		}
		;
		var Fr = function(a, b, c) {
				z.yr.call(this, a, c);
				this.lT = b;
				this.tag = "";
				this.Qz = 100
			}
			;
		var Gr = function(a) {
				return a && z.Pb(z.zr, function(b) {
						return a === b.tag && b.ul
					})
			}
			;
		var Hr = function(a, b) {
				var c = wh.Y()
					, d = c.Wc[a];
				d.wc() ? (0,
					window.setTimeout)(b) : (0,
					window.$)('script[src*\x3d"' + d.Bk.replace(/^\/static\//, "") + '"]').length ? d.ip(b) : (d = c.Wc[a],
					d.wc() ? (c = new sh(b,void 0),
						window.setTimeout((0,
							z.r)(c.LE, c), 0)) : Ah(c, a) ? d.ip(b, void 0) : (d.ip(b, void 0),
						Ch(c, [a])))
			}
			;
		var Ir = function() {}
			;
		var Jr = function(a, b) {
				this.K = (0,
					window.$)(a);
				this.J = window.$.extend({}, this.defaults, b || {});
				this.ug()
			}
			;
		var Kr = function(a, b) {
				window.$.each(Lr, function(c, d) {
					var f = b && (null  !== b && d in b ? b[d] : void 0);
					f ? f(a, d) : a.removeAttribute(d)
				})
			}
			;
		var Mr = function(a, b) {
				(0,
					window.$)("*", a).each(function() {
					Kr(this, b)
				})
			}
			;
		var Nr = function(a) {
				a = a.J;
				var b = a.BT
					, c = a.mA;
				return {
					id: function(a, c) {
						a.id && !z.y(b, a.id) && a.removeAttribute(c)
					},
					"class": function(a, b) {
						if (a.className)
							if (c.length) {
								var g = z.T.get(a)
									, g = z.Jb(g, z.Gb(z.Ca(z.y, c)));
								g.length && z.T.remove.apply(null , [a].concat(g))
							} else
								a.removeAttribute(b)
					}
				}
			}
			;
		z.Or = function(a) {
			z.G.call(this);
			this.J = window.$.extend(!0, {}, this.defaults, a || {});
			this.ew();
			this.Og()
		}
		;
		var Pr = function(a, b) {
				a.close();
				a.dispatchEvent({
					type: "cancel",
					data: {
						originalEvent: b
					}
				})
			}
			;
		var Qr = function(a, b) {
				z.G.call(this);
				this.input = a;
				z.rc(this.J = {}, this.defaults, b || {});
				this.ig = new z.Or({
					Xm: this.J.Xm,
					fk: this.J.fk
				});
				z.fd(this, this.ig);
				this.ug()
			}
			;
		var Rr = function(a) {
				a = z.L(a.J.Ds, a.input);
				var b;
				if (a)
					return b = window.document.createTextNode("@"),
						z.gg(b, a),
						b
			}
			;
		var Sr = function(a, b) {
				var c;
				z.B && (c = z.Sf(window.document),
					a.input.focus(),
					window.scrollTo(c.x, c.y));
				var d;
				Tr ? (c = window.getSelection(),
					d = window.document.createRange(),
					d.setStartAfter(b),
					c.removeAllRanges(),
					c.addRange(d)) : 3 === b.nodeType && z.hr(b, b.length).select()
			}
			;
		var Ur = function(a) {
				return a && "A" === a.nodeName
			}
			;
		var Vr = function(a, b, c) {
				var d = window.getSelection();
				if (b(d.anchorNode.parentNode)) {
					b = d.getRangeAt(0);
					var f = Wr(a);
					b.insertNode(f);
					b.selectNode(f);
					d.removeAllRanges();
					d.addRange(b);
					d = window.getSelection().getRangeAt(0);
					a = Xr(a, d);
					c(a)
				}
			}
			;
		var Yr = function(a, b, c) {
				var d = window.document.selection.createRange()
					, f = d.parentElement();
				b(f) && (d.pasteHTML(Wr(a).outerHTML),
					d.moveToElementText(z.L(a.J.Ds, a.input)),
					d.select(),
					a = Xr(a, d),
				"7.0" === od && (a.x -= 2),
					c(a))
			}
			;
		var Xr = function(a, b) {
				var c;
				c = b.getBoundingClientRect();
				var d;
				z.C && (d = {
					width: b.boundingWidth,
					height: b.boundingHeight
				},
					z.Da(d, c),
					c = d);
				d = z.Sf(window.document);
				var f = z.yi(a.ig.uc());
				f.x = c.left - f.x + d.x;
				f.y = c.top - f.y + d.y;
				a.J.position.call(a, f, c);
				return f
			}
			;
		var Zr = function(a) {
				return a && 1 === a.nodeType && "A" === a.tagName && z.y($r, a.className)
			}
			;
		var Wr = function(a) {
				return z.M("a", {
					className: a.J.Ds,
					innerHTML: "@"
				})
			}
			;
		z.as = function(a, b, c) {
			z.R.call(this);
			this.status = this.Wb = null ;
			this.sG = a;
			this.UI = b;
			this.xr = c;
			this.isEnabled = !0;
			this.WE = !1;
			this.params = [];
			this.content = null ;
			this.JB = !1;
			this.gE = window.$.Deferred()
		}
		;
		z.bs = function(a, b) {
			a.params = b
		}
		;
		var cs = function(a) {
				return a.Id ? a.Na : a.Na.m()
			}
			;
		var ds = function(a) {
				var b = a.Na;
				if (b.m)
					b.on("load", function() {
						new Jr(b.m(),{
							mA: this.Ru ? $r : []
						})
					}, !1, a)
			}
			;
		var es = function(a) {
				var b = a.Na;
				b.m && (a = (0,
					z.r)(function() {
					new Qr(b.m(),{
						fk: this.ej
					})
				}, a),
					b.wc() ? a() : b.addEventListener("load", a))
			}
			;
		var fs = function(a) {
				if (a.dispatchEvent("shouldUpdateContent")) {
					var b = a.content
						, c = a.fd
						, d = a.gF();
					a.JB ? (z.wg(c, b),
						c.appendChild(z.Zf(d))) : c.innerHTML = b + d;
					(0,
						window.$)("img.lazy", c).lazyload({
						data_attribute: "actualsrc",
						threshold: 400
					})
				}
			}
			;
		z.gs = function(a, b, c) {
			z.as.call(this, a, b, c);
			this.UQ = "mock" + this.ie();
			this.Qw = !1;
			this.ar = !0;
			this.Id = !hs || is;
			this.Ru = !1;
			this.YJ = this.qV = !0;
			this.dz = ""
		}
		;
		var js = function(a) {
				a.ready(function() {
					var a = this.Na;
					this.Id ? z.Eo(a, a.value.length) : a.Ia.lastChild ? z.ur(a.Ia.lastChild) : a.Vf();
					this.ml && (this.ml.scrollTop = this.ml.scrollHeight)
				})
			}
			;
		var ks = function(a, b, c) {
				var d = b.Sb.FullScreenPlugin;
				if (d) {
					var f = z.lj(c, "toggleFullScreen");
					d.on("save", a.vs, !1, a).on("willEnterFullScreen", function() {
						ls(this, !1)
					}, !1, a).on("enterFullScreen", function() {
						f.ud("退出写作模式")
					}).on("exitFullScreen", function() {
						f.ud("写作模式")
					}).on("shouldExitFullScreenOnEscape", function() {
						return !b.Ng
					})
				}
			}
			;
		var ls = function(a, b) {
				if (a.ng)
					if (b) {
						z.T.add(a.ml, "zm-editable-editor-field-wrap-active");
						var c = a.ng;
						c.Gt = z.yi(c.m()).y;
						z.Ar(a.ng, !0)
					} else
						z.T.remove(a.ml, "zm-editable-editor-field-wrap-active"),
							z.Ar(a.ng, !1)
			}
			;
		var ms = function(a) {
				a.oC.toggle();
				a.sq.toggleClass("no-toolbar")
			}
			;
		z.ns = function() {
			z.S.call(this);
			this.qE = !0;
			this.rz = z.X.rz;
			this.kU = -1 === window.location.href.indexOf("psq")
		}
		;
		z.os = function(a, b) {
			a.Dc && (a.Dc.value = b,
				a.VH(),
				a.vI.UJ(),
			a.Ja && a.Ja.Pu())
		}
		;
		var ps = function(a) {
				var b = qs.get("add_question_form_title");
				b && z.os(a, b);
				(b = qs.get("add_question_form_des")) && rs(a, b);
				b = a.J.Om;
				b || (b = qs.get("add_question_form_topics")) && (b = JSON.parse(b));
				b && z.x(b, function(b) {
					a.Ja.qk(b)
				})
			}
			;
		var ss = function(a) {
				function b() {
					var a = (0,
						window.$)('\x3cdiv\x3e\x3cdiv style\x3d"text-align:center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e')
						, b = (0,
						window.$)(rl(this))
						, c = b.data("answer_count")
						, f = b.data("url_token");
					window.$.get("/question/" + f + "/answers/summary").done(function(b) {
						if (b && !b.r) {
							b = d({
								forEach: z.x,
								answers: b.msg,
								question_url_token: f
							});
							var g = z.Na('\x3cdiv class\x3d"zippy-row"\x3e\x3ca class\x3d"zg-link-litblue" href\x3d"/question/%s"\x3e查看该问题%s\x3c/a\x3e\x3c/div\x3e',
								f, 0 < c ? "的全部 " + c + " 个回答" : "");
							a.html(b + g)
						} else
							z.U.message(b.msg)
					});
					b.after(a);
					return a.get(0)
				}
				var c = (0,
					z.ts)(a.cq.uI)
					, d = (0,
					z.ts)(a.cq.NL)
					, f = a.Dc
					, g = new sp;
				a.AC = new z.rp(f,{
					source: "/question/autocomplete",
					mk: z.J("zh-question-suggest-ac-wrap"),
					rd: window.$.noop,
					render: function(d, f, g) {
						a.CC && a.CC.H();
						f = (0,
							window.$)(d.m());
						var n = a.CC = new oo;
						f.html(c({
							forEach: z.x,
							questions: g,
							token: (0,
								window.encodeURIComponent)(this.Xb)
						}));
						f.prepend('\x3cdiv class\x3d"ac-head zg-gray"\x3e你的问题可能已经有答案\x3c/div\x3e');
						(0,
							window.$)(".ac-row",
							f).each(function() {
							n.Ca(new z.pl((0,
								window.$)(this).get(0),b,!1))
						});
						n.w(d.m())
					},
					Cy: g
				})
			}
			;
		var us = function(a, b) {
				(0,
					window.$)(a.xU).toggle(!!b);
				(0,
					window.$)(a.HQ).toggle(!b);
				b ? a.iD.focus() : (a.eG(),
					a.Dc.focus());
				a.ea()
			}
			;
		var vs = function(a) {
				if (!Rj || Sj) {
					var b = ol.Y()
						, c = new z.el("",b);
					c.Ub(32, !1);
					a.v().g(c, "action", a.yR);
					c.w(a.UU);
					c.ud("切换工具栏");
					c = new z.el("",b);
					c.Ub(32, !1);
					a.v().g(c, "action", function() {
						this.Pb.Na.execCommand("image")
					});
					c.w(a.nL);
					c.ud("添加图片");
					b = new z.el("",b);
					b.Ub(32, !1);
					a.v().g(b, "action", function() {
						this.Pb.Na.execCommand("video")
					});
					b.w(a.oL);
					b.ud("添加视频")
				}
			}
			;
		var ws = function(a) {
				a.Ja = new cq;
				a.Ja.w(a.ZU);
				a.v().g(a.Ja, ["add_tag", "remove_tag"], a.RH);
				new z.am(a.Dc,"写下你的问题");
				var b = a.gN;
				a.Pb = new z.gs;
				a.Pb.dz = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e问题背景、条件等详细信息\x3c/span\x3e';
				a.Pb.w(b);
				a.Pb.init();
				a.Pb.Df();
				Rj && !Sj || ms(a.Pb);
				(0,
					window.setTimeout)(function() {
					a.ea()
				});
				vs(a);
				ss(a)
			}
			;
		var xs = function(a, b, c) {
				"title" === c ? a.kQ = b : "detail" === c ? a.dQ = b : a.mQ = b;
				a.qE = a.kQ || a.dQ || a.mQ
			}
			;
		var ys = function(a) {
				(0,
					window.$)(window).on("beforeunload.AddQuestionForm", (0,
					z.r)(function() {
					zs(this)
				}, a))
			}
			;
		var zs = function(a) {
				a.Dc.value && qs.set("add_question_form_title", a.Dc.value);
				var b = a.Pb.nf();
				b && qs.set("add_question_form_des", b);
				(a = a.Ja.data) && qs.set("add_question_form_topics", JSON.stringify(a))
			}
			;
		var As = function(a, b, c) {
				a.tt.innerHTML = b.Be;
				0 === b.level ? z.Q(a.Yj, !1) : (3 !== b.level && (z.Q(a.Xq, !0),
					z.Q(a.nn, !1)),
					z.Q(a.Yj, c),
				c && a.Dc.focus())
			}
			;
		var Bs = function(a) {
				var b = z.zn(a.Dc.value).replace(/？/g, "?")
					, c = Cs(a);
				1 < c.level || (1 > In(z.zn(a.Dc.value).replace("？", "?")) ? (c.Be = "您还没有给问题添加问号",
					c.level = 3,
					c.name = "noquestionmark") : 1 < In(b) && (c.Be = "如果有多个问题，最好拆分一下",
					c.level = 1,
					c.name = "multiquestionmark"));
				return c
			}
			;
		var Cs = function(a) {
				var b = "#"
					, c = a.Io || new Ds
					, d = !1;
				if (!a.AC || !a.kU)
					return c;
				var f = a.AC.Ra;
				f && f.length ? (z.x(f, function(a) {
					4 < a.raw.length && 1 === +a.raw[4] && (d = !0,
						b = "/question/" + a.url_token + "?q\x3d" + (0,
								window.encodeURIComponent)(this.Dc.value) + "\x26psq\x3d0")
				}, a),
					d ? (c.Be = '我们找到了一个也许是你想问的问题，\x3ca href\x3d"' + b + '"\x3e查看问题\x3c/a\x3e',
						c.level = 3,
						c.name = "duplicatedquestion",
						c.dX = !0,
						a.nn.href = b,
						z.Q(a.Xq, !1),
						z.Q(a.nn, !0)) : (c = new Ds,
						z.Q(a.Xq, !0),
						z.Q(a.nn, !1)),
					a.Io = c) : (c = new Ds,
					a.Io = c,
					z.Q(a.Xq, !0),
					z.Q(a.nn, !1));
				a.Io ||
				(a.Io = c);
				return a.Io
			}
			;
		var Es = function(a) {
				a = z.zn(a.Dc.value).replace(/？/g, "?");
				a = Nn(a);
				var b = new Ds;
				3 > a ? (b.level = 3,
					b.Be = "问题字数太少了吧",
					b.name = "tooshort") : 40 < a && 51 >= a ? (b.level = 1,
					b.Be = '还可以输入 \x3cspan class\x3d"warning"\x3e' + (51 - a) + "\x3c/span\x3e 字",
					b.name = "buffer") : 51 < a && (b.level = 3,
					b.Be = '已超出 \x3cspan class\x3d"error"\x3e' + (a - 51) + "\x3c/span\x3e 字",
					b.name = "toolong");
				return b
			}
			;
		var Fs = function(a) {
				a = a.Pb;
				var b = (0,
					z.qb)(a.nf());
				return a.isContentEditable() ? b : z.Va(b)
			}
			;
		var rs = function(a, b) {
				var c = a.Pb;
				(0,
					window.setTimeout)(function() {
					c.ka(b);
					c.Cp()
				})
			}
			;
		var Gs = function(a) {
				var b = new z.Mn
					, c = []
					, d = [];
				b.add("question_title", a.Dc.value);
				b.add("question_detail", Fs(a));
				a.uD && b.add("anon", a.uD.checked ? "1" : "0");
				z.x(a.Ja.data, function(a) {
					a[3] ? c.push(a[3]) : d.push(a[1])
				});
				b.add("topic_ids", c.join(","));
				b.add("new_topics", d.join("$"));
				z.Hs && b.add("uid", z.Hs[3]);
				return b
			}
			;
		var Ds = function() {
				this.level = (0,
					window.isNaN)(void 0) ? 0 : void 0;
				this.Be = ""
			}
			;
		var Is = function(a, b, c, d, f, g) {
				z.qa(a) ? (this.Wd = a == Js ? b : 0,
					this.Nd = a == Ks ? b : 0,
					this.Fd = a == Ls ? b : 0,
					this.nd = a == Ms ? b : 0,
					this.pd = a == Ns ? b : 0,
					this.td = a == Os ? b : 0) : (this.Wd = a || 0,
					this.Nd = b || 0,
					this.Fd = c || 0,
					this.nd = d || 0,
					this.pd = f || 0,
					this.td = g || 0)
			}
			;
		var Ps = function(a, b, c) {
				sa(a) ? (this.ga = Qs(a, b || 0, c || 1),
					Rs(this, c || 1)) : z.ua(a) ? (this.ga = Qs(a.getFullYear(), a.getMonth(), a.getDate()),
					Rs(this, a.getDate())) : (this.ga = new Date((0,
					z.w)()),
					a = this.ga.getDate(),
					this.ga.setHours(0),
					this.ga.setMinutes(0),
					this.ga.setSeconds(0),
					this.ga.setMilliseconds(0),
					Rs(this, a))
			}
			;
		var Qs = function(a, b, c) {
				b = new Date(a,b,c);
				0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
				return b
			}
			;
		var Ss = function(a) {
				a = a.getTimezoneOffset();
				if (0 == a)
					a = "Z";
				else {
					var b = Math.abs(a) / 60
						, c = Math.floor(b)
						, b = 60 * (b - c);
					a = (0 < a ? "-" : "+") + mb(c, 2) + ":" + mb(b, 2)
				}
				return a
			}
			;
		var Rs = function(a, b) {
				a.getDate() != b && a.ga.setUTCHours(a.ga.getUTCHours() + (a.getDate() < b ? 1 : -1))
			}
			;
		var Ts = function(a, b, c, d, f, g, h) {
				this.ga = sa(a) ? new Date(a,b || 0,c || 1,d || 0,f || 0,g || 0,h || 0) : new Date(a ? a.getTime() : (0,
					z.w)())
			}
			;
		var Us = function() {}
			;
		var Vs = function(a) {
				if ("number" == typeof a) {
					var b = new Us;
					b.wu = a;
					var c;
					c = a;
					if (0 == c)
						c = "Etc/GMT";
					else {
						var d = ["Etc/GMT", 0 > c ? "-" : "+"];
						c = Math.abs(c);
						d.push(Math.floor(c / 60) % 100);
						c %= 60;
						0 != c && d.push(":", mb(c, 2));
						c = d.join("")
					}
					b.pB = c;
					c = a;
					0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"],
						c = Math.abs(c),
						d.push(Math.floor(c / 60) % 100),
						c %= 60,
					0 != c && d.push(":", c),
						c = d.join(""));
					a = Ws(a);
					b.AB = [c, c];
					b.Ak = {
						vW: a,
						xC: a
					};
					b.Nu = [];
					return b
				}
				b = new Us;
				b.pB = a.id;
				b.wu = -a.std_offset;
				b.AB = a.names;
				b.Ak = a.names_ext;
				b.Nu = a.transitions;
				return b
			}
			;
		var Ws = function(a) {
				var b = ["GMT"];
				b.push(0 >= a ? "+" : "-");
				a = Math.abs(a);
				b.push(mb(Math.floor(a / 60) % 100, 2), ":", mb(a % 60, 2));
				return b.join("")
			}
			;
		var Xs = function(a, b) {
				for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.Nu.length && c >= a.Nu[d]; )
					d += 2;
				return 0 == d ? 0 : a.Nu[d - 1]
			}
			;
		var Ys = function(a, b) {
				this.Jt = [];
				this.xb = b || Zs;
				"number" == typeof a ? $s(this, a) : at(this, a)
			}
			;
		var at = function(a, b) {
				for (bt && (b = b.replace(/\u200f/g, "")); b; )
					for (var c = 0; c < ct.length; ++c) {
						var d = b.match(ct[c]);
						if (d) {
							d = d[0];
							b = b.substring(d.length);
							0 == c && ("''" == d ? d = "'" : (d = d.substring(1, d.length - 1),
								d = d.replace(/\'\'/, "'")));
							a.Jt.push({
								text: d,
								type: c
							});
							break
						}
					}
			}
			;
		var $s = function(a, b) {
				var c;
				if (4 > b)
					c = a.xb.rC[b];
				else if (8 > b)
					c = a.xb.yC[b - 4];
				else if (12 > b)
					c = a.xb.GK[b - 8],
						c = c.replace("{1}", a.xb.rC[b - 8]),
						c = c.replace("{0}", a.xb.yC[b - 8]);
				else {
					$s(a, 10);
					return
				}
				at(a, c)
			}
			;
		var dt = function(a, b) {
				var c;
				c = String(b);
				var d = a.xb || Zs;
				if (void 0 !== d.hL) {
					for (var f = [], g = 0; g < c.length; g++) {
						var h = c.charCodeAt(g);
						f.push(48 <= h && 57 >= h ? String.fromCharCode(d.hL + h - 48) : c.charAt(g))
					}
					c = f.join("")
				}
				return c
			}
			;
		var et = function(a) {
				if (!(a.getHours && a.getSeconds && a.getMinutes))
					throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
			}
			;
		var ft = function(a, b, c, d, f, g) {
				var h = b.length;
				switch (b.charAt(0)) {
					case "G":
						return c = 0 < d.getFullYear() ? 1 : 0,
							4 <= h ? a.xb.IK[c] : a.xb.JK[c];
					case "y":
						return c = d.getFullYear(),
						0 > c && (c = -c),
						2 == h && (c %= 100),
							dt(a, mb(c, h));
					case "M":
						a: switch (c = d.getMonth(),
							h) {
							case 5:
								h = a.xb.MK[c];
								break a;
							case 4:
								h = a.xb.KK[c];
								break a;
							case 3:
								h = a.xb.RK[c];
								break a;
							default:
								h = dt(a, mb(c + 1, h))
						}
						return h;
					case "k":
						return et(f),
							dt(a, mb(f.getHours() || 24, h));
					case "S":
						return dt(a, (f.getTime() % 1E3 / 1E3).toFixed(Math.min(3, h)).substr(2) + (3 < h ? mb(0, h - 3) :
								""));
					case "E":
						return c = d.getDay(),
							4 <= h ? a.xb.gL[c] : a.xb.TK[c];
					case "a":
						return et(f),
							h = f.getHours(),
							a.xb.FK[12 <= h && 24 > h ? 1 : 0];
					case "h":
						return et(f),
							dt(a, mb(f.getHours() % 12 || 12, h));
					case "K":
						return et(f),
							dt(a, mb(f.getHours() % 12, h));
					case "H":
						return et(f),
							dt(a, mb(f.getHours(), h));
					case "c":
						a: switch (c = d.getDay(),
							h) {
							case 5:
								h = a.xb.XK[c];
								break a;
							case 4:
								h = a.xb.$K[c];
								break a;
							case 3:
								h = a.xb.ZK[c];
								break a;
							default:
								h = dt(a, mb(c, 1))
						}
						return h;
					case "L":
						a: switch (c = d.getMonth(),
							h) {
							case 5:
								h = a.xb.WK[c];
								break a;
							case 4:
								h = a.xb.VK[c];
								break a;
							case 3:
								h = a.xb.YK[c];
								break a;
							default:
								h = dt(a, mb(c + 1, h))
						}
						return h;
					case "Q":
						return c = Math.floor(d.getMonth() / 3),
							4 > h ? a.xb.SK[c] : a.xb.NK[c];
					case "d":
						return dt(a, mb(d.getDate(), h));
					case "m":
						return et(f),
							dt(a, mb(f.getMinutes(), h));
					case "s":
						return et(f),
							dt(a, mb(f.getSeconds(), h));
					case "v":
						return h = g || Vs(c.getTimezoneOffset()),
							h.pB;
					case "V":
						return a = g || Vs(c.getTimezoneOffset()),
							2 >= h ? a.pB : 0 < Xs(a, c) ? z.l(a.Ak.HK) ? a.Ak.HK : a.Ak.DST_GENERIC_LOCATION : z.l(a.Ak.xC) ? a.Ak.xC : a.Ak.STD_GENERIC_LOCATION;
					case "w":
						return c =
							a.xb.tC,
							f = new Date(f.getFullYear(),f.getMonth(),f.getDate()),
							b = a.xb.sC || 0,
							c = f.valueOf() + 864E5 * (((z.l(c) ? c : 3) - b + 7) % 7 - ((f.getDay() + 6) % 7 - b + 7) % 7),
							dt(a, mb(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(),0,1)).valueOf()) / 864E5) / 7) + 1, h));
					case "z":
						return a = g || Vs(c.getTimezoneOffset()),
							4 > h ? a.AB[0 < Xs(a, c) ? 2 : 0] : a.AB[0 < Xs(a, c) ? 3 : 1];
					case "Z":
						return f = g || Vs(c.getTimezoneOffset()),
							4 > h ? (h = -(f.wu - Xs(f, c)),
								a = [0 > h ? "-" : "+"],
								h = Math.abs(h),
								a.push(mb(Math.floor(h / 60) % 100, 2), mb(h % 60, 2)),
								h = a.join("")) : h = dt(a,
								Ws(f.wu - Xs(f, c))),
							h;
					default:
						return ""
				}
			}
			;
		var gt = function(a) {
				var b;
				if ("string" === typeof a) {
					b = new Ts(2E3);
					a = (0,
						z.qb)(a);
					a = a.split(-1 == a.indexOf("T") ? " " : "T");
					var c;
					var d = a[0].match(ht);
					if (d) {
						var f = Number(d[2])
							, g = Number(d[3])
							, h = Number(d[4]);
						c = Number(d[5]);
						var k = Number(d[6]) || 1;
						b.setFullYear(Number(d[1]));
						h ? (b.setDate(1),
							b.setMonth(0),
							b.add(new Is(Ls,h - 1))) : c ? (b.setMonth(0),
							b.setDate(1),
							d = b.getDay() || 7,
							b.add(new Is(Ls,(4 >= d ? 1 - d : 8 - d) + (Number(k) + 7 * (Number(c) - 1)) - 1))) : (f && (b.setDate(1),
							b.setMonth(f - 1)),
						g && b.setDate(g));
						c = !0
					} else
						c = !1;
					c && !(c = 2 >
						a.length) && (a = a[1],
						c = a.match(it),
						k = 0,
					c && ("Z" != c[0] && (k = 60 * c[2] + Number(c[3]),
						k *= "-" == c[1] ? 1 : -1),
						k -= b.getTimezoneOffset(),
						a = a.substr(0, a.length - c[0].length)),
						(c = a.match(jt)) ? (b.setHours(Number(c[1])),
							b.setMinutes(Number(c[2]) || 0),
							b.setSeconds(Number(c[3]) || 0),
							b.setMilliseconds(c[4] ? 1E3 * c[4] : 0),
						0 != k && b.setTime(b.getTime() + 6E4 * k),
							c = !0) : c = !1);
					b = (c ? b : null ).ga
				} else
					b = new Date(a);
				return b
			}
			;
		z.kt = function(a, b) {
			a = void 0 === a ? new Date : a;
			b = void 0 === b ? new Date : b;
			a = gt(a);
			b = gt(b);
			var c = (b - a) / 1E3;
			if (60 > c)
				return "刚刚";
			c = (0,
				window.parseInt)(c / 60);
			if (60 > c)
				return c + " 分钟前";
			c = (0,
				window.parseInt)(c / 60);
			if (24 > c)
				return c + " 小时前";
			var c = b.getFullYear() - a.getFullYear()
				, d = b.getMonth() - a.getMonth()
				, f = b.getDate() - a.getDate();
			return 0 === c && 0 === d ? f + " 天前" : 0 === c && 1 === d || 1 === c && -11 === d ? 0 > f ? (new Date(a.getFullYear(),a.getMonth() + 1,0)).getDate() + f + " 天前" : "1 月前" : 2 > c ? 1 === c && 0 <= d ? "1 年前" : 12 * c + d + " 月前" : c + " 年前"
		}
		;
		var lt = function(a, b) {
				return (new Ys(void 0 === b ? "yyyy-MM-dd HH:mm:ss" : b)).format(new Date(a))
			}
			;
		z.Y = function(a, b, c, d, f) {
			"feed" === a && z.gb(window.location.href, "topstory") && (a = "topstory");
			var g = (0,
				window.$)("#zh-question-list");
			"feed" === a && g.length && "topstory" === g.attr("data-feedtype") && (a = "topstory");
			mt.track(a, b, c, d, !!f);
			z.Ck(a, b, c, d, !!f);
			Pn && window.console && window.console.log("trackEvent(new)", z.Vb(arguments))
		}
		;
		var nt = function() {}
			;
		var ot = function() {}
			;
		var pt = function() {
				var a = (0,
					window.$)("#rq3-sidenav-link")
					, b = (0,
					window.$)(".tour", a);
				b.length && (0,
					window.$)(".close-button", b).click(function() {
					var a = (0,
						window.$)(this).data("feature");
					window.$.get("/notifeature", {
						feature: a
					});
					b.fadeOut(100, function() {
						b.remove()
					})
				})
			}
			;
		var qt = function(a) {
				z.R.apply(this, arguments)
			}
			;
		var rt = function(a) {
				(new window.Image).src = a
			}
			;
		var st = function() {
				(0,
					window.$)(".shameimaru-placeholder").each(function() {
					var a = (0,
						window.$)(this)
						, b = Object.assign({}, {
						loc: a.data("loc")
					}, a.data("params"));
					window.$.get("/node/Banner", b, function(b) {
						b ? (b = (0,
							window.$)(b),
							a.replaceWith(b),
							(new qt).w(b[0])) : a.remove()
					})
				})
			}
			;
		var tt = function() {
				z.R.call(this)
			}
			;
		var ut = function() {
				function a(a, b) {
					a = z.qa(a) ? new RegExp(a) : a;
					return a.test(b)
				}
				var b;
				z.gc({
						home: "^/$",
						collection: "^/collection/\\d+$",
						roundtable: "^/roundtable/[\\w\\.-]+$",
						answer: "^/question/\\d+/answer/\\d+$",
						question: "^/question/\\d+$",
						search: "^/search$",
						people: "^/people/[\\w\\.-]+$",
						people_answers: "^/people/[\\w\\.-]+/answers$",
						explore_recommendations: "^/explore/recommendations$",
						explore_daily_hot: {
							path: "^/explore$",
							hash: "^(?!monthly-hot$)"
						},
						explore_monthly_hot: {
							path: "^/explore$",
							hash: "^monthly-hot$"
						}
					},
					function(c, d) {
						c.path && c.hash ? a(c.path, window.location.pathname) && a(c.hash, window.location.hash.slice(1)) && (b = d) : a(c, window.location.pathname) && (b = d);
						return !!b
					});
				return b
			}
			;
		z.vt = function(a) {
			return "/qrcode?" + window.$.param({
					url: a + "#showWechatShareTip"
				})
		}
		;
		var wt = function() {
				xt = (0,
					window.$)(".wechat-share-tip");
				xt.on("touchstart click", function(a) {
					a.preventDefault();
					yt()
				});
				"#showWechatShareTip" === window.location.hash && (zt(),
					window.location.hash = "")
			}
			;
		var At = function() {
				xt.length && (xt.show(),
					(0,
						window.$)(window.document.documentElement).addClass("show-wechat-share-tip"))
			}
			;
		var yt = function() {
				xt.onTransitionEnd(function() {
					xt.hide()
				}, 150);
				(0,
					window.$)(window.document.documentElement).removeClass("show-wechat-share-tip")
			}
			;
		var zt = function() {
				var a = ut();
				z.Ak({
					category: "share",
					action: "scan_share_" + a + "_to_wechat_start"
				})
			}
			;
		var Bt = function() {
				Ll && xm(window.location.protocol + "//res.wx.qq.com/open/js/jweixin-1.0.0.js").then(function() {
					window.wx && (Ct(),
						Dt())
				})
			}
			;
		var Ct = function() {
				window.$.get("/wechat/jssdkconfig", {
					url: window.location.href
				}).then(function(a) {
					window.wx.config(Object.assign({}, a, {
						jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
					}))
				})
			}
			;
		var Dt = function() {
				window.wx.ready(function() {
					Et().then(function(a) {
						var b = Object.assign({}, Ft, a.timeline);
						window.wx.onMenuShareTimeline(b);
						a = Object.assign({}, Ft, a.appMessage);
						window.wx.onMenuShareAppMessage(a)
					})
				})
			}
			;
		var Et = function() {
				var a = ""
					, b = "";
				Gt ? (a = "answer",
					b = Gt.urlToken) : z.ck ? (a = "question",
					b = z.ck.Za) : z.Ht ? (a = "collection",
					b = z.Ht.Za) : z.Hs ? (a = "people",
					b = z.Hs.Za) : z.It && (a = "roundtable",
					b = z.It.slug);
				return a && b ? window.$.get("/" + a + "/" + b + "/wechat_share_info") : window.Promise.resolve(Ft)
			}
			;
		var Jt = function() {
				(0,
					window.$)("#js-open-in-app").on("click", function() {
					var a;
					if (a = (a = (0,
								window.$)('meta[name\x3d"apple-itunes-app"]').attr("content")) && a.replace(/,\s*/, "\x26"))
						a = new z.Uo(a),
							Ll || Kt ? (a.add("origin", window.location.href),
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
		var Lt = function(a) {
				if (a)
					if (-1 === a.indexOf("zhihu://") && (a = "zhihu://" + a),
							Mt)
						Nt(a);
					else if (window.location.href = a,
						Ot && !(0 <= pb(Pt, 9))) {
						var b = !1;
						window.setTimeout(function() {
							b = !0;
							window.location.href = "http://api.zhihu.com/client/download?ct\x3dtop_right_corner\x26utm_source\x3dtop_right_corner\x26utm_medium\x3dmobile_web\x26utm_campaign\x3ddownloadlink"
						}, 200);
						window.setTimeout(function() {
							b && window.location.reload()
						}, 1E3)
					}
			}
			;
		var Nt = function(a) {
				var b = a.replace(/^zhihu/, "intent") + "/#Intent;scheme\x3dzhihu;package\x3dcom.zhihu.android;end"
					, c = window.navigator.userAgent.match(/Chrome\/(\d+)/);
				25 <= (c && c[1]) ? window.location = b : Qt(a)
			}
			;
		var Qt = function(a) {
				var b = window.document.createElement("iframe");
				b.hidden = !0;
				b.src = a;
				window.document.body.appendChild(b);
				var c = (0,
					z.w)();
				window.setTimeout(function() {
					600 > (0,
						z.w)() - c && (window.location = Rt.LW)
				}, 400)
			}
			;
		var St = function() {}
			;
		var Tt = function(a) {
				var b = (0,
					window.$)("#zh-feedback-form")
					, c = (0,
					window.$)(".zg-report-msg", b)
					, d = (0,
					window.$)("textarea", b)
					, b = (0,
					window.$)("select", b);
				a = a.type || b.val();
				b = window.$.trim(d.val());
				if (!b)
					return c.html("请填写反馈内容").show(),
						d.focus(),
						!1;
				c.hide();
				c = new z.V(!0);
				d = new z.Uo;
				c.on("success", function() {
					z.U.message("建议发送成功，我们会尽快处理，感谢您的帮助");
					Ut.remove("content")
				});
				d.add("type", a).add("content", b);
				c.ajax("/feedback/report", d.toString())
			}
			;
		var Vt = function(a, b) {
				return window.$.post("/node/ColumnFollowBaseV2", {
					method: b ? "follow_column" : "unfollow_column",
					params: {
						column_id: a
					}
				})
			}
			;
		var Wt = function(a, b) {
				return window.$.post("/roundtable/" + a, {
					action: b ? "follow" : "unfollow"
				})
			}
			;
		var Xt = function(a) {
				z.G.call(this);
				this.url = a + "/apilive";
				this.jT = 5E3;
				this.HT = 1E3;
				this.Bw = 0;
				Yt(this)
			}
			;
		var Yt = function(a) {
				a.client = new window.WebSocket(a.url);
				a.client.onmessage = function(b) {
					try {
						a.dispatchEvent({
							type: "message",
							data: b.data
						})
					} catch (c) {}
				}
				;
				a.client.onclose = function() {
					(0,
						window.setTimeout)(function() {
						a.Bw < a.HT && (Yt(a),
							a.Bw += 1)
					}, a.jT)
				}
				;
				a.client.onerror = function() {
					a.client.close()
				}
			}
			;
		var Zt = function(a) {
				z.G.call(this);
				this.Jn = this.Dm = {};
				this.bt = 0;
				this.WN = tc($t);
				this.LU = tc(au);
				this.NC = !0;
				this.CL = this.HL = !1;
				this.VQ = !0;
				this.GL = !1;
				this.xv = null ;
				this.Ug = a;
				z.F(this.Ug, "keydown", this.pf, !1, this);
				z.B && z.F(this.Ug, "keyup", this.vF, !1, this);
				bu && !z.B && (z.F(this.Ug, "keypress", this.NF, !1, this),
					z.F(this.Ug, "keyup", this.OF, !1, this))
			}
			;
		var cu = function(a) {
				this.Rd = a || null ;
				this.next = a ? null  : {}
			}
			;
		var du = function(a, b) {
				var c;
				if (z.qa(b[a]))
					c = z.Kb(eu(b[a]), function(a) {
						return a.keyCode & 255 | a.WQ << 8
					});
				else {
					var d = b
						, f = a;
					z.oa(b[a]) && (d = b[a],
						f = 0);
					for (c = []; f < d.length; f += 2)
						c.push(d[f] & 255 | d[f + 1] << 8)
				}
				return c
			}
			;
		var eu = function(a) {
				a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
				a = a.split(" ");
				for (var b = [], c, d = 0; c = a[d]; d++) {
					var f = c.split("+")
						, g = null ;
					c = 0;
					for (var h, k = 0; h = f[k]; k++) {
						switch (h) {
							case "shift":
								c |= 1;
								continue;
							case "ctrl":
								c |= 2;
								continue;
							case "alt":
								c |= 4;
								continue;
							case "meta":
								c |= 8;
								continue
						}
						f = h;
						if (!fu) {
							g = {};
							h = void 0;
							for (h in gu)
								g[gu[h]] = ci((0,
									window.parseInt)(h, 10));
							fu = g
						}
						g = fu[f];
						break
					}
					b.push({
						keyCode: g,
						WQ: c
					})
				}
				return b
			}
			;
		var hu = function(a) {
				return bu && !z.B && a.ctrlKey && a.altKey && !a.shiftKey
			}
			;
		var iu = function(a, b, c) {
				var d = b.shift()
					, f = a[d];
				if (f && (0 == b.length || f.Rd))
					throw Error("Keyboard shortcut conflicts with existing shortcut");
				b.length ? (d = d.toString(),
					f = new cu,
					f = d in a ? a[d] : a[d] = f,
					iu(f.next, b, c)) : a[d] = new cu(c)
			}
			;
		var ju = function(a, b) {
				var c = b.shift()
					, d = a[c];
				d && (0 == b.length ? d.Rd && delete a[c] : d.next && (ju(d.next, b),
				nc(d.next) && delete a[c]))
			}
			;
		var ku = function(a, b, c) {
				z.qd.call(this, a, c);
				this.identifier = b
			}
			;
		var lu = function(a) {
				z.cd.call(this);
				this.Eb(a)
			}
			;
		var mu = function(a, b) {
				a.ln.Wb = b;
				return a
			}
			;
		var nu = function(a) {
				z.rc(this.J = {}, this.defaults, a || {});
				this.Eb()
			}
			;
		var ou = function(a) {
				return pu.every(function(b) {
					return a[b]
				})
			}
			;
		var qu = function(a, b) {
				return pu.every(function(c) {
					return a[c] === b[c]
				})
			}
			;
		var ru = function(a) {
				return window.$.extend({}, {
					key: a.key
				}, a.Wb)
			}
			;
		var su = function(a, b) {
				a.every(function(a) {
					return !qu(a, b)
				}) && a.push(b);
				return a
			}
			;
		var tu = function(a, b) {
				var c = a[b.group];
				c ? c.push(b) : a[b.group] = [b];
				return a
			}
			;
		var uu = function() {
				var a = $b(vu.map(function(a) {
					return z.ic(Ge(a.Wk))
				})).map(ru).filter(ou).reduce(su, []).reduce(tu, {})
					, b = ['\x3cdiv class\x3d"shortcut-tips"\x3e']
					, c = {
					MT: /([^\s+])+|([\s+])/g,
					LN: function(a) {
						return a.replace(this.MT, function(a, b) {
							return b ? "\x3ckbd\x3e" + a + "\x3c/kbd\x3e" : " " + a + " "
						})
					}
				};
				z.dc(a, function(a, f) {
					b.push('\x3cdiv class\x3d"group"\x3e\x3ch2\x3e', f, "\x3c/h2\x3e\x3cdl\x3e");
					z.x(a, function(a) {
						b.push("\x3cdt\x3e", c.LN(a.key), "\x3c/dt\x3e");
						b.push("\x3cdd\x3e", a.name, "\x3c/dd\x3e")
					});
					b.push("\x3c/dl\x3e\x3c/div\x3e")
				});
				b.push("\x3c/div\x3e");
				return b.join("")
			}
			;
		var wu = function(a) {
				z.R.call(this);
				this.Bj = -1;
				z.rc(this.J = {}, this.defaults, a || {})
			}
			;
		var xu = function(a, b) {
				if (b !== a.index()) {
					var c = a.size()
						, d = c - 1;
					a.J.vM && (b > d ? b = 0 : 0 > b && (b = d));
					a.dispatchEvent({
						data: {
							index: b,
							size: c
						},
						type: "action"
					});
					0 > b || b > d || (a.Bj = b,
						a.Wo(yu(a)))
				}
			}
			;
		var yu = function(a) {
				return a.items()[a.index()]
			}
			;
		var zu = function(a) {
				wu.call(this, a);
				this.DK = (0,
					window.$)("html, body")
			}
			;
		var Au = function(a) {
				return {
					k: {
						action: a.prev,
						Wb: {
							group: "导航",
							name: "上一条目"
						}
					},
					j: {
						action: a.next,
						Wb: {
							group: "导航",
							name: "下一条目"
						}
					},
					"g g": {
						action: a.first,
						Wb: {
							group: "导航",
							name: "第一个条目"
						}
					},
					"shift+g": {
						action: a.last,
						Wb: {
							group: "导航",
							name: "最后一个条目"
						}
					},
					"shift+k": {
						action: a.WT,
						Wb: {
							group: "导航",
							name: "屏幕上移"
						}
					},
					"shift+j": {
						action: a.ST,
						Wb: {
							group: "导航",
							name: "屏幕下移"
						}
					}
				}
			}
			;
		var Bu = function() {
				var a = z.X;
				return {
					signedIn: a.qb(),
					currentUser: {
						email: a.Nn,
						activated: a.Yd
					},
					authRequired: z.Lm
				}
			}
			;
		var Cu = function(a, b) {
				Du.push([a, sa(b) ? b : 2]);
				Du.sort(function(a, b) {
					return a[1] - b[1]
				})
			}
			;
		var Eu = function() {
				Nm.call(this);
				this.queue = []
			}
			;
		var Fu = function() {
				Eu.call(this);
				this.jx = 0
			}
			;
		var Gu = function(a) {
				return Math.pow(a, 3)
			}
			;
		var Hu = function(a) {
				return 1 - Math.pow(1 - a, 3)
			}
			;
		var Iu = function(a) {
				return 3 * a * a - 2 * a * a * a
			}
			;
		var Ju = function() {
				z.G.call(this);
				this.h = null ;
				this.TQ = 768;
				this.gx = this.TT = 300;
				this.no = !0;
				this.Ov = !1;
				this.NU = 150
			}
			;
		var Ku = function() {}
			;
		var Lu = function() {
				z.G.call(this)
			}
			;
		z.Mu = function(a) {
			a.$j = new z.V(!1);
			a.v().Aa(a.$j, "success", a.QR);
			a.$j.ajax("/noti7/new?r\x3d" + +new Date, null , "GET")
		}
		;
		var Nu = function() {
				if (window.localStorage && !z.yk.Vl())
					(0,
						window.$)(window.document).on("click.tabless", "a", function(a) {
						this.host === window.location.host && (a.preventDefault(),
							window.location.href = this.href)
					})
			}
			;
		var Ou = function() {}
			;
		z.Pu = function(a, b, c) {
			this.element = a;
			this.cf = b;
			this.HS = c
		}
		;
		var Qu = function(a, b) {
				this.Mh = a instanceof Ff ? a : new Ff(a,b)
			}
			;
		var Ru = function(a, b) {
				this.Zz = 4;
				this.Rt = b || void 0;
				z.rj.call(this, a)
			}
			;
		z.Su = function(a, b) {
			a.gz = null  == b || b instanceof z.ei ? b : new z.ei(b,void 0,void 0,void 0);
			a.U() && a.ea()
		}
		;
		z.Tu = function(a, b, c) {
			this.da = c || (a ? z.I(z.J(a)) : z.I());
			Ru.call(this, this.da.B("DIV", {
				style: "position:absolute;display:none;"
			}));
			this.Zi = new Ff(1,1);
			this.cb = new He;
			this.xk = null ;
			a && this.attach(a);
			null  != b && z.wg(this.m(), b)
		}
		;
		var Uu = function(a, b) {
				z.Ud(b, "mouseover", a.md, !1, a);
				z.Ud(b, "mouseout", a.Ll, !1, a);
				z.Ud(b, "mousemove", a.Jl, !1, a);
				z.Ud(b, "focus", a.je, !1, a);
				z.Ud(b, "blur", a.Ll, !1, a)
			}
			;
		var Vu = function(a, b) {
				var c = z.Pg(a.da);
				a.Zi.x = b.clientX + c.x;
				a.Zi.y = b.clientY + c.y
			}
			;
		var Wu = function(a, b) {
				try {
					for (; b && !a.cb.contains(b); )
						b = b.parentNode;
					return b
				} catch (c) {
					return null
				}
			}
			;
		var Xu = function(a, b) {
				if (0 == b) {
					var c = a.Zi.clone();
					return new Yu(c)
				}
				return new Zu(a.cc)
			}
			;
		var $u = function(a) {
				if (a.anchor)
					for (var b, c = 0; b = av[c]; c++)
						z.qg(b.m(), a.anchor) && (b.bl = a,
							a.gI = b)
			}
			;
		var bv = function(a, b, c) {
				a.Hm || (a.Hm = z.ce((0,
					z.r)(a.iz, a, b, c), a.Jp))
			}
			;
		var cv = function(a) {
				a.Hm && (de(a.Hm),
					a.Hm = void 0)
			}
			;
		var Yu = function(a, b) {
				Qu.call(this, a, b)
			}
			;
		var Zu = function(a) {
				z.Pu.call(this, a, 3)
			}
			;
		var dv = function(a, b, c) {
				z.Tu.call(this, a, b, c)
			}
			;
		z.ev = function(a, b) {
			a.qo = b || null
		}
		;
		var fv = function(a, b) {
				if (a.Mv && a.Mv.contains(b) || a.Rs(b))
					return !0;
				var c = a.bl;
				return !!c && c.Rs(b)
			}
			;
		z.gv = function(a, b, c, d) {
			z.Tu.call(this, null , null , c);
			z.ta(a) ? this.Gy = a : this.QC = a;
			this.qM = 0 != b;
			this.lB = [];
			this.La = d || (c ? c.wa() : window.document);
			z.F(this.La, "mouseover", this.LF, !1, this)
		}
		;
		var hv = function(a, b, c) {
				if (b == a.Of)
					a.Wi();
				else if (b != a.anchor) {
					if (1 == a.getState() || 4 == a.getState())
						cv(a),
							iv(a);
					var d = new jv("trigger",a,b,void 0);
					a.Wh().contains(b) || (a.attach(b),
						a.lB.push(b));
					a.anchor = b;
					a.Hz(d) ? bv(a, b, c || a.Rt) : iv(a)
				}
			}
			;
		var kv = function(a, b) {
				var c = z.Ib(a.lB, b);
				-1 != c && (a.detach(b),
					a.lB.splice(c, 1))
			}
			;
		var iv = function(a) {
				a.dispatchEvent(new jv("canceltrigger",a,a.anchor || null ));
				kv(a, a.anchor);
				delete a.anchor
			}
			;
		var jv = function(a, b, c, d) {
				z.qd.call(this, a, b);
				this.anchor = c;
				this.data = d
			}
			;
		var lv = function(a, b, c) {
				z.Pu.call(this, a, b);
				this.JC = c
			}
			;
		var mv = function(a, b) {
				a & 48 && (b ^= 2);
				a & 192 && (b ^= 1);
				return b
			}
			;
		z.nv = function(a) {
			z.G.call(this);
			this.jq = !0;
			this.Nm = this.Wp = -1;
			this.EJ = "";
			this.yb = null ;
			z.rc(this.J = {}, this.defaults, a || {})
		}
		;
		z.ov = function(a, b) {
			a.wh.innerHTML += '\x3ca class\x3d"zm-profile-email-history-link" href\x3d"' + b + '"\x3e私信记录  »\x3c/a\x3e'
		}
		;
		z.pv = function(a, b, c, d) {
			-1 === b ? z.Cn(a.Zc, a.wh) : b !== z.X.bg && (a.Nm = b,
				a.EJ = c,
			a.wh && a.Zc && (a.wh.innerHTML = a.EJ + (d ? Bn() : ""),
				z.Cn(a.wh, a.Zc),
				a.Zc.value = ""))
		}
		;
		var qv = function(a, b) {
				a.tt.innerHTML = b;
				z.Q(a.tt, !0)
			}
			;
		z.rv = function() {
			z.G.call(this);
			this.sU = this.tP = 250;
			this.Gh = {};
			this.init()
		}
		;
		var sv = function(a, b) {
				return '\x3cdiv class\x3d"popover-content no-hovercard"\x3e' + a + "\x3c/div\x3e" + ('\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"arrow2' + (b ? " loading" : "") + '"\x3e\x3c/div\x3e')
			}
			;
		var tv = function(a) {
				var b;
				switch (a.gl) {
					case "t":
						b = 5;
						break;
					case "r":
						b = 4;
						break;
					case "b":
						b = 4;
						break;
					case "l":
						b = 6
				}
				a = a.V;
				a.Zz = b;
				a.U() && a.ea()
			}
			;
		var uv = function(a, b, c, d) {
				var f = a.Gh[b] && a.Gh[b][c];
				if (f)
					vv(a, sv(f));
				else if (f = wv[b])
					window.$.get("/node/" + f, {
						params: {
							url_token: c
						}
					}, (0,
						z.r)(function(a) {
						xv(this, a, b, c)
					}, a)),
						vv(a, a.dw(d))
			}
			;
		var xv = function(a, b, c, d) {
				a.Nh === c && a.Hn === d && xv(a, b);
				a.Gh[c] = a.Gh[c] || {};
				a.Gh[c][d] = b;
				tv(a);
				vv(a, sv(b));
				hv(a.V, a.eE, a.gl)
			}
			;
		var vv = function(a, b) {
				a.V.Qd(b);
				a.V.setPosition(a.VM)
			}
			;
		var yv = function(a) {
				z.R.call(this);
				this.options = window.$.extend({
					stopPropagation: !0,
					bM: "#000",
					Uv: .5,
					KM: "#666",
					JD: .2,
					top: 2,
					width: 6,
					right: 2,
					Oq: !0
				}, a);
				this.qz = 0;
				this.Kr = !1
			}
			;
		var zv = function(a) {
				a.Fm && (a.qe.stop().css({
					opacity: a.options.Uv
				}).show(),
				a.hn && ((0,
					window.clearTimeout)(a.hn),
					a.hn = !1))
			}
			;
		var Av = function(a, b) {
				b = b || 0;
				a.hn = (0,
					window.setTimeout)((0,
					z.r)(function() {
					this.qe.stop().fadeOut();
					this.hn = !1
				}, a), b)
			}
			;
		var Bv = function(a, b) {
				var c = a.dd.height() - 2 * a.options.top - a.qe.height()
					, d = a.We.height() - a.dd.height();
				return b / c * d
			}
			;
		var Cv = function(a, b) {
				z.qd.call(this, "scroll", a);
				this.scrollTop = b
			}
			;
		z.Dv = function(a) {
			z.R.call(this);
			this.J = window.$.extend({}, this.defaults, a || {})
		}
		;
		var Ev = function() {
				z.G.call(this);
				this.Nf = [0, 0, 0];
				this.xH = [0, 0, 0];
				this.types = ["default", "follow", "vote_thank"];
				this.Rw = !0;
				this.cache = [!1, !1, !1];
				this.Fl = [0, 0, 0];
				this.Gm = [!1, !1, !1]
			}
			;
		var Fv = function(a) {
				a.tab = new z.Dv({
					pH: ".zm-noti7-popup-tab-item",
					fI: ".zm-noti7-content",
					vg: "current"
				});
				a.v().g(a.tab, "action", function(a) {
					this.cE = a = a.data.index;
					Gv(this, a);
					var c = this.vm && this.vm[a];
					c && ((0,
						window.setTimeout)(function() {
						c.update()
					}),
					this.tab.index() === a && c.scrollTop())
				}).g(a.tab, "select", function(a) {
					this.cE = a = a.data.index;
					Hv(this, a);
					z.W.Ha({
						type: "ga_click_top_nav_noti_tab",
						data: {
							tab: +a
						}
					});
					this.zd || z.yk.set("noti7-tab", a)
				});
				a.tab.w(a.dh)
			}
			;
		var Hv = function(a, b) {
				a.vm && z.x(a.vm, function(a, d) {
					b === d ? a.enter() : a.Vw && (a.v().removeAll(),
					a.Sd && a.Sd.stop(),
						a.Vw = !1)
				})
			}
			;
		var Iv = function(a) {
				return 99 < a ? "99+" : a
			}
			;
		var Jv = function(a) {
				if (!Kv) {
					var b = Iv(a.zd);
					a = Iv(a.bG);
					var c = "";
					b && a ? c = "(" + a + " 封私信 / " + b + " 条消息) " : b ? c = "(" + b + " 条消息) " : a && (c = "(" + a + " 封私信) ");
					window.document.title = c + window.document.title.replace(/^(\(|\uff08)(\d)*(\+)?( )?(\u5c01\u79c1\u4fe1)?( \/ )?(\d)*(\+)?( )?(\u6761\u6d88\u606f)?(\)|\uff09)( )?/g, "")
				}
			}
			;
		var Lv = function(a, b) {
				a.zd -= a.Nf[b];
				a.jv.eq(b).removeClass("withdot");
				0 > a.zd && (a.zd = 0);
				z.Q(a.An, !!a.zd);
				a.An.innerHTML = a.zd
			}
			;
		var Gv = function(a, b) {
				var c;
				a.Rw ? a.visible && (a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.ND[b].innerHTML = a.cache[b],
					a.cache[b] = "$$used$$"),
				a.Nf[b] && (c = new z.V(!1),
					c.ajax("/noti7/readall", "tab\x3d" + a.types[b], "POST")),
					Lv(a, b),
				a.vm && a.vm[b].update().scrollTop(),
				a.zd || z.yk.set("noti7-tab", b)) : (a.Gm[b] = !0,
					a.El(b))) : a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.ND[b].innerHTML = a.cache[b],
					a.cache[b] = "$$used$$"),
				a.Nf[b] && (c = new z.V(!1),
					c.ajax("/noti7/readall", "tab\x3d" + a.types[b], "POST")),
					Lv(a, b)) : (a.Gm[b] = !0,
					a.El(b),
					c = new z.V(!1),
					c.ajax("/noti7/readall", "tab\x3d" + a.types[b], "POST"))
			}
			;
		var Mv = function(a, b) {
				b ? a.gC.fadeIn(50) : a.gC.fadeOut(50);
				a.visible = b;
				z.T.enable(a.dh, "open", a.visible);
				z.T.enable(a.$p, "open", a.visible);
				b ? (a.dh.focus(),
					z.x(a.cache, function(a, b) {
						a || this.El(b)
					}, a),
					a.v().g(window.document, "click", a.ns)) : a.v().pa(window.document, "click", a.ns);
				Hv(a, -1)
			}
			;
		var Nv = function(a) {
				z.R.call(this);
				window.$.extend(this.J = {}, this.defaults, a || {})
			}
			;
		var Ov = function(a) {
				var b = a.rg
					, c = a.cd
					, d = c.attr("id");
				d || (d = z.gj(z.fj.Y()),
					c.attr("id", d),
					b.attr("aria-labelledby", d));
				c.attr("role") || c.attr("role", "button");
				a.cd.attr("aria-haspopup", "true").attr("aria-activedescendant", "");
				a.rg.children().find("a").attr("tabindex", -1).attr("id", (0,
					z.r)(function(a, b) {
					return b || z.gj(z.fj.Y())
				}, a))
			}
			;
		var Pv = function(a, b) {
				var c = a.rg.children().find("a")
					, d = c.size();
				b >= d ? b = 0 : -1 >= b && (b = d - 1);
				c = c.eq(b);
				a.cd.attr("aria-activedescendant", c.attr("id"));
				c.focus();
				a.index = b
			}
			;
		z.Qv = function(a) {
			z.Ul.call(this, "login");
			this.Qk = a
		}
		;
		var Rv = function(a) {
				z.R.apply(this, arguments)
			}
			;
		var Sv = function(a, b) {
				if (!a.metaKey)
					try {
						z.yk.set("query", a.ca.Xb)
					} catch (c) {
						b += "?q\x3d" + (0,
								window.encodeURIComponent)(a.ca.Xb)
					}
				return b
			}
			;
		var Tv = function() {
				z.G.call(this)
			}
			;
		var Uv = function(a, b) {
				if (Rj && b.length && b.children("ul").length) {
					var c = function(c) {
							c = c.target;
							b[0].contains(c) || c.contains(a[0]) || d()
						}
						, d = function() {
							a.parent().removeClass("open");
							b.hide();
							(0,
								window.$)(window.document.body).off("mousedown", c)
						}
						;
					a.click(function(f) {
						f.preventDefault();
						b.is(":visible") ? d() : (a.parent().addClass("open"),
							b.show(),
							(0,
								window.$)(window.document.body).mousedown(c))
					}).attr("href", "javascript:;");
					b.find(".slide-up").click(d)
				}
			}
			;
		var Vv = function() {
				var a = (0,
					window.$)("#top-nav-dd-topic")
					, b = (0,
					window.$)("#mobile-top-nav-topic-popup");
				Uv(a, b);
				Wv && (0,
					window.$)("img", b).each(function() {
					var a = (0,
						window.$)(this).data("2x");
					a && (this.src = a)
				})
			}
			;
		var Xv = function() {
				z.R.call(this)
			}
			;
		var Yv = function() {
				z.yj.call(this, null , !1);
				this.lD = "zh-lightbox-showing";
				this.PU = "zh-lightbox-thumb";
				this.Eb()
			}
			;
		var Qn = function() {
				if (window.console) {
					var a = Array.from(arguments);
					a.unshift("[" + (new Date).toLocaleTimeString() + "]:\t");
					window.console.log.apply ? window.console.log.apply(window.console, a) : window.console.log(a[0], a.slice(1).join(","))
				}
			}
			;
		var Zv = function(a) {
				z.G.call(this);
				this.view = this.name = null ;
				z.rc(this.options = {}, this.defaults, a || {})
			}
			;
		var $v = function(a, b) {
				function c(b) {
					Zv.call(this, b);
					this.name = a
				}
				z.v(c, Zv);
				z.Da(c.prototype, b);
				aw[a] = c
			}
			;
		var bw = function(a, b) {
				var c = aw[a];
				if (!c)
					throw Error("Cannot find constructor");
				return new c(b)
			}
			;
		z.cw = function(a) {
			z.R.call(this);
			z.rc(this.J = {}, this.defaults, a || {});
			this.source = this.J.source;
			this.promise = window.$.Deferred().resolve();
			this.Sb = {}
		}
		;
		z.dw = function(a, b, c) {
			a.ya && z.x(a.jb(), b, c);
			a.v().g(a, "itemcreated", function(a) {
				b.call(c, a.item)
			})
		}
		;
		var ew = function(a) {
				a.$d && (z.N(a.$d),
					a.$d = null );
				a.dispatchEvent("complete")
			}
			;
		z.fw = function(a, b) {
			var c = Array.prototype.slice.call(arguments)
				, d = c.shift();
			if ("undefined" == typeof d)
				throw Error("[goog.string.format] Template required");
			return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, m, n, q, A) {
				if ("%" == n)
					return "%";
				var H = c.shift();
				if ("undefined" == typeof H)
					throw Error("[goog.string.format] Not enough arguments");
				arguments[0] = H;
				return gw[n].apply(null , arguments)
			})
		}
		;
		z.hw = function(a) {
			z.cw.call(this, a)
		}
		;
		var iw = function() {}
			;
		var jw = function(a, b, c) {
				Yk.call(this, a, c || iw.Y(), b);
				this.Ub(1, !1);
				this.Ub(2, !1);
				this.Ub(4, !1);
				this.Ub(32, !1);
				this.O = 1
			}
			;
		var kw = function() {
				this.kw = []
			}
			;
		var lw = function(a, b) {
				var c = a.kw[b];
				if (!c) {
					switch (b) {
						case 0:
							c = a.T() + "-highlight";
							break;
						case 1:
							c = a.T() + "-checkbox";
							break;
						case 2:
							c = a.T() + "-content"
					}
					a.kw[b] = c
				}
				return c
			}
			;
		var mw = function(a, b, c) {
				a = lw(a, 2);
				return c.B("DIV", a, b)
			}
			;
		var nw = function(a, b) {
				var c = a.X(b);
				if (c) {
					var c = c.firstChild
						, d = lw(a, 1);
					return !!c && z.og(c) && z.Th(c, d)
				}
				return !1
			}
			;
		var ow = function(a, b, c, d) {
				Qk(a, c, b.$h());
				Rk(a, b, c);
				d != nw(a, c) && (Yh(c, "goog-option", d),
					c = a.X(c),
					d ? (a = lw(a, 1),
						c.insertBefore(b.L().B("DIV", a), c.firstChild || null )) : c.removeChild(c.firstChild))
			}
			;
		z.pw = function(a, b, c, d) {
			Yk.call(this, a, d || kw.Y(), c);
			this.Fa(b)
		}
		;
		var qw = function() {}
			;
		z.rw = function(a, b) {
			Yk.call(this, null , a || qw.Y(), b);
			this.Ub(1, !1);
			this.Ub(2, !1);
			this.Ub(4, !1);
			this.Ub(32, !1);
			this.O = 1
		}
		;
		var sw = function(a) {
				this.Sv = a || "menu"
			}
			;
		z.tw = function(a) {
			z.rw.call(this, qw.Y(), a)
		}
		;
		z.uw = function(a, b) {
			z.fo.call(this, vw, b || sw.Y(), a);
			this.Te(!1)
		}
		;
		z.ww = function(a, b, c, d) {
			z.Pu.call(this, a, b);
			this.Ho = c ? 5 : 0;
			this.Pz = d || void 0
		}
		;
		var xw = function(a, b) {
				a & 48 && (b ^= 2);
				a & 192 && (b ^= 1);
				return b
			}
			;
		var yw = function(a, b, c, d) {
				z.ww.call(this, a, b, c || d);
				(c || d) && this.Am(65 | (d ? 32 : 132))
			}
			;
		var zw = function() {}
			;
		var Aw = function(a, b) {
				if (a)
					for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
						d = b ? c.nextSibling : c.previousSibling;
						if (3 == c.nodeType) {
							var f = c.nodeValue;
							if ("" == (0,
									z.qb)(f))
								a.removeChild(c);
							else {
								c.nodeValue = b ? z.Ta(f) : z.Ua(f);
								break
							}
						} else
							break;
						c = d
					}
			}
			;
		var Bw = function() {}
			;
		var Cw = function(a, b, c) {
				return c.B("DIV", "goog-inline-block " + (b + "-caption"), a)
			}
			;
		z.Dw = function(a, b, c, d, f) {
			z.el.call(this, a, c || Bw.Y(), d);
			this.Ub(64, !0);
			this.Vj = new yw(null ,5);
			b && this.lh(b);
			this.fH = null ;
			this.na = new z.ae(500);
			!Ot && !Sj || z.E("533.17.9") || (this.Ts = !0);
			this.PQ = f || sw.Y()
		}
		;
		var Ew = function(a) {
				a.fH = new z.ei(7,0,7,0)
			}
			;
		z.Fw = function(a) {
			a.Vj.Am && a.Vj.Am(33)
		}
		;
		var Gw = function(a) {
				if (a.ma.ya) {
					var b = a.Vj;
					a.Vj.element = a.US || a.m();
					var c = a.ma.m();
					a.ma.U() || (c.style.visibility = "hidden",
						z.Q(c, !0));
					!a.Ht && a.Vj.Zn && a.Vj.Zn() & 32 && (a.Ht = z.Hi(c));
					b.ea(c, b.cf ^ 1, a.fH, a.Ht);
					a.ma.U() || (z.Q(c, !1),
						c.style.visibility = "visible")
				}
			}
			;
		var Hw = function(a, b, c) {
				var d = a.v();
				c = c ? d.g : d.pa;
				c.call(d, b, "action", a.jo);
				c.call(d, b, "close", a.Qx);
				c.call(d, b, "highlight", a.Wx);
				c.call(d, b, "unhighlight", a.cy)
			}
			;
		var Iw = function(a, b) {
				var c = a.v();
				(b ? c.g : c.pa).call(c, a.m(), "keydown", a.HO)
			}
			;
		var Jw = function(a, b) {
				var c = a.m()
					, d = Ph(b, "activedescendant")
					, d = z.Kf(b).getElementById(d) || b;
				if (!d.id) {
					var f = z.fj.Y();
					d.id = z.gj(f)
				}
				Qh(c, d);
				P(c, "owns", d.id)
			}
			;
		var Kw = function() {
				z.G.call(this)
			}
			;
		z.Lw = function(a, b, c) {
			z.R.call(this);
			this.type = a;
			this.id = b;
			this.VL = c || Mw[a] || "other_report"
		}
		;
		var Nw = function(a, b, c) {
				b = window.$.extend({
					type: a,
					id: b
				}, c);
				z.W.Ha({
					type: "ga_click_report",
					data: {
						type: a
					}
				});
				window.$.post("/report", b).done(function(a) {
					if (a.r)
						"duplicate_report" === a.errtype ? z.U.message(a.msg, 3E3, "重复举报") : z.U.message(a.msg);
					else if (a.noti) {
						var b = z.U({
							title: "举报成功！",
							modal: !0,
							content: '\x3cp\x3e您的举报正在等待人工审核，我们会在 24 小时内审核完成\x3c/p\x3e\x3cp\x3e处理完成后会「私信」通知您\x3c/p\x3e\x3cp\x3e您也可以进入 \x3ca href\x3d"/community/report"\x3e社区服务中心\x3c/a\x3e 查看实时处理进度\x3c/p\x3e\x3clabel class\x3d"modal-dialog-cancelNoti"\x3e\x3cinput type\x3d"checkbox" name\x3d"cancelNoti" /\x3e不再提醒\x3c/label\x3e',
							className: "report-success-dialog",
							ea: !0,
							buttons: {
								yes: "知道啦"
							}
						});
						b.g(Yl, function() {
							(0,
								window.$)(b.Uh()).find("input[name\x3dcancelNoti]").prop("checked") && window.$.post("/community/report/noti", {
								cancel: !0
							})
						})
					} else
						z.U.message("您的举报正在等待人工审核，我们会在 24 小时内审核完成", 2E3, "举报成功！")
				})
			}
			;
		z.Ow = function(a, b, c) {
			c = void 0 === c ? !1 : c;
			if (a.type && a.id && !(0,
					window.$)(b).hasClass("goog-menu-button")) {
				var d = new z.Dw("report",new z.uw);
				d.oi = !0;
				d.Ob = z.Pw;
				d.w(b);
				z.fd(d, a);
				a.eH = d;
				b = z.Nj(a.HP.bind(a));
				a.v().Aa(d.m(), ["mouseover", "focus"], b);
				c && b().then(function() {
					return d.NA()
				})
			}
		}
		;
		var Qw = function(a, b) {
				window.$.get("/report/reported", {
					type: "question",
					id: a.id
				}, window.$.proxy(function(a) {
					if (a.r)
						z.U.message(a.msg);
					else if (a.reported)
						z.U.message(a.msg, null , "重复举报");
					else {
						a = new Rw(this.type,this.id);
						var d = (0,
							z.ts)(a.XE, {
							each: z.x,
							options: b,
							headnote: '\x3ca href\x3d"/question/19806261" class\x3d"zg-link-gray"\x3e知乎提问规范\x3c/a\x3e'
						});
						a.Xk("需要进一步修改", d);
						a.Vk(b)
					}
				}, a))
			}
			;
		var Rw = function(a, b) {
				z.G.call(this);
				this.type = a;
				this.id = b
			}
			;
		z.Sw = function(a, b, c) {
			z.R.call(this);
			this.offset = this.Ai = 0;
			this.mU = c;
			this.Lr = a;
			this.url = b || window.location.href;
			this.Tg = "zm-item";
			this.params = {}
		}
		;
		z.Tw = function(a, b) {
			b ? a.Ik.html('\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e正在加载').prop("disabled", !0) : a.Ik.html("更多").prop("disabled", !1)
		}
		;
		var Uw = function(a) {
				var b = a.jb();
				a.offset = a.tz ? a.tz(b) : b.length;
				a.ys ? (b = a.ys(),
					z.Q(a.$b, b)) : a.$b && ("-1" === a.Ik.attr("data-next") || !b || 10 > b.length ? a.Ik.hide() : a.Ik.removeClass("hidden").show())
			}
			;
		z.Vw = function(a, b, c, d) {
			c = c || z.p;
			if (!a.Ki || "pending" !== a.Ki.state()) {
				var f = a.lI(window.$.extend(a.params, {
					offset: a.offset,
					start: a.Ai
				}));
				"live" !== f.start && z.W.Ha({
					type: "topstory_feed_more"
				});
				a.Ki = window.$.post(a.url, f).done(c).done(window.$.proxy(function(a) {
					if (d)
						return d.call(this, a);
					this.KB && !b ? this.OA ? this.$g(a) : (this.St = a,
						z.Tw(this, !1)) : this.$g(a)
				}, a));
				1 !== a.gn && z.Tw(a, !0)
			}
		}
		;
		z.Ww = function(a) {
			a.dispatchEvent({
				data: {
					Qs: a.Qs,
					IB: a.IB
				},
				type: "afterload"
			})
		}
		;
		var Xw = function(a) {
				var b = a.jb(), c;
				if (a.mU)
					if (a.$b && (c = a.$b.getAttribute("data-next")),
							c)
						a.Ai = c;
					else if (b = z.Hb(b))
						a.Ai = a.iI(b)
			}
			;
		var Yw = function(a, b) {
				z.x(b, function(a) {
					var b = this.Yo(a);
					this.dispatchEvent({
						data: {
							item: a,
							oQ: b
						},
						type: "itemcreated"
					})
				}, a)
			}
			;
		var Zw = function(a) {
				var b = null ;
				try {
					b = a.cssRules || a.rules
				} catch (c) {
					if (15 == c.code)
						throw c.styleSheet = a,
							c;
				}
				return b
			}
			;
		var $w = function(a) {
				var b = [];
				a = a || window.document.styleSheets;
				var c = z.l(void 0) ? void 0 : !1;
				if (a.imports && a.imports.length)
					for (var d = 0, f = a.imports.length; d < f; d++)
						z.Wb(b, $w(a.imports[d]));
				else if (a.length)
					for (d = 0,
						     f = a.length; d < f; d++)
						z.Wb(b, $w(a[d]));
				else {
					var g = Zw(a);
					if (g && g.length)
						for (var d = 0, f = g.length, h; d < f; d++)
							h = g[d],
							h.styleSheet && z.Wb(b, $w(h.styleSheet))
				}
				!(a.type || a.rules || a.cssRules) || a.disabled && !c || b.push(a);
				return b
			}
			;
		var ax = function() {
				this.Kn = "";
				this.jh = []
			}
			;
		var bx = function(a, b, c) {
				var d = [], f;
				for (f in b) {
					var g = b[f];
					g && d.push(f, ":", g, c ? " !important" : "", ";")
				}
				a.Kn = d.join("")
			}
			;
		var cx = function(a) {
				this.Lv = {};
				if (a) {
					var b = [];
					a = a.split(/\s+/gm);
					for (var c = 0; c < a.length; c++)
						if (a[c]) {
							var d = new dx(a[c]);
							b.push(d)
						}
					this.ni = b
				}
			}
			;
		var dx = function(a) {
				var b = ex[a];
				if (b)
					return b;
				for (var b = a.match(/[#\.]/) ? a.split(/(?=[#\.])/) : [a], c = {}, d = 0; d < b.length; d++) {
					var f = b[d];
					"." == f.charAt(0) ? c.className = f.substring(1, f.length) : "#" == f.charAt(0) ? c.id = f.substring(1, f.length) : c.tagName = f.toUpperCase()
				}
				this.hG = a;
				this.KQ = c;
				this.zJ = {};
				ex[a] = this
			}
			;
		var fx = function(a, b) {
				var c = b.uid
					, d = a.zJ[c];
				if ("undefined" != typeof d)
					return d;
				var f = a.KQ
					, d = f.tagName
					, g = f.className
					, f = f.id
					, h = !0;
				d && "*" != d && d != b.nodeName ? h = !1 : f && f != b.id ? h = !1 : g && !b.wM[g] && (h = !1);
				return a.zJ[c] = h
			}
			;
		var gx = function(a) {
				var b = wa(a)
					, c = hx[b];
				if (c)
					return c;
				c = [];
				do {
					var d = {
						id: a.id,
						nodeName: a.nodeName
					};
					d.uid = wa(d);
					var f = {};
					if (a.className)
						for (var g = Sh(a), h = 0; h < g.length; h++)
							f[g[h]] = 1;
					d.wM = f;
					c.unshift(d)
				} while (a = a.parentNode);this.tH = c;
				this.uid = wa(this);
				hx[b] = this
			}
			;
		z.ix = function() {
			z.G.call(this);
			this.fc = this.Bq()
		}
		;
		var jx = function(a, b, c, d, f) {
				this.OE = a;
				this.ZA = b;
				this.Vq = c;
				this.RE = d;
				this.ex = f || {}
			}
			;
		var kx = function(a, b) {
				this.CV = a;
				this.XD = b
			}
			;
		var lx = function(a, b, c, d) {
				var f = [];
				a.Vq && a.ZA && f.push("\x3c!DOCTYPE HTML\x3e");
				f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
				a.Vq && f.push("height:", a.RE ? "100%" : "auto");
				f.push('"\x3e');
				f.push("\x3chead\x3e\x3cstyle\x3e");
				c && c.XD && f.push(c.XD);
				z.B && a.ZA && f.push(" img {-moz-force-broken-image-icon: 1;}");
				f.push("\x3c/style\x3e\x3c/head\x3e");
				f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
				z.mx && f.push("contentEditable ");
				f.push('class\x3d"editable ');
				f.push('" id\x3d"',
					a.OE, '" style\x3d"min-width:0;');
				z.B && a.Vq && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", a.ZA ? "100%" : "auto"),
					a.RE ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
				z.li && f.push(";outline:hidden");
				for (var g in a.ex)
					f.push(";" + g + ":" + a.ex[g]);
				f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
				a = f.join("");
				d = d.contentDocument || d.contentWindow.document;
				d.open();
				d.write(a);
				d.close()
			}
			;
		var nx = function(a, b) {
				z.G.call(this);
				this.Lg = this.id = a;
				this.eb = null ;
				this.Sb = {};
				this.Cj = {};
				for (var c in z.ox)
					this.Cj[c] = [];
				this.dl = "";
				this.vk = {};
				this.vk[px] = 1;
				this.vk[z.qx] = 1;
				this.Cr = new Pm(this.tE,rx,this);
				this.zr = {};
				for (var d in sx)
					this.zr[sx[d]] = 0;
				z.B && (this.ye = new Pm(this.ho,tx,this));
				this.gc = new z.ee(this);
				this.DV = [];
				this.Sj = z.ux;
				this.km = z.I(b || window.document);
				this.Fc = this.km.m(this.id);
				this.JN = vx;
				this.Ok = this.km.Ua()
			}
			;
		var xx = function(a) {
				var b = !(a.ctrlKey || a.metaKey) && a.keyCode in yx;
				return (a.ctrlKey || a.metaKey) && a.keyCode in zx || b
			}
			;
		var Ax = function(a, b) {
				a.Sj = 2;
				a.Ia = b;
				a.eb = z.I(b);
				b.setAttribute("g_editable", "true");
				Nh(b, "textbox")
			}
			;
		var Bx = function(a, b) {
				if (9 == b.keyCode && !a.dispatchEvent({
						type: "beforetab",
						shiftKey: b.shiftKey,
						altKey: b.altKey,
						ctrlKey: b.ctrlKey
					}) || z.B && b.metaKey && !z.E(29) && (37 == b.keyCode || 39 == b.keyCode))
					return b.preventDefault(),
						!1;
				var c;
				(c = b.charCode) || (c = xx(b) ? !0 : !(!z.B || b.ctrlKey || b.metaKey || z.B && !b.charCode));
				a.Lx = c;
				a.Lx && a.Qh();
				return !0
			}
			;
		var Cx = function(a, b, c) {
				var d = {};
				a = a.Zt(8, b || "", d);
				z.ii(c, d);
				z.rr(c, a)
			}
			;
		var Dx = function(a, b) {
				!Ex(a, "selectionchange") && (Fx[b.keyCode] || (b.ctrlKey || b.metaKey) && Gx[b.keyCode]) && (a.dispatchEvent("beforeselectionchange"),
					a.aJ.start())
			}
			;
		var Hx = function(a, b) {
				if (!b.altKey) {
					var c = z.Ad ? b.metaKey : b.ctrlKey;
					if (c || Ix[b.keyCode]) {
						var d = b.charCode || b.keyCode;
						17 != d && (d = String.fromCharCode(d).toLowerCase(),
						z.Ad && z.B && "`" == d && " " == b.hc.key && (d = " "),
						a.yo(5, b, d, c) && b.preventDefault())
					}
				}
			}
			;
		var Jx = function(a) {
				var b;
				return a.pc() && (b = a.eb) ? (a = b.Ua()) && a.frameElement : null
			}
			;
		z.Kx = function(a) {
			return (a = a.eb && a.eb.Ua()) && z.dr(a)
		}
		;
		z.Lx = function(a, b, c) {
			if (!Ex(a, "selectionchange")) {
				var d = z.Kx(a)
					, d = d && d.Qb();
				a.vf = !!d && z.qg(a.m(), d);
				a.dispatchEvent("cvc");
				a.dispatchEvent({
					type: "selectionchange",
					mX: b && b.type
				});
				a.yo(4, b, c)
			}
		}
		;
		z.Mx = function(a, b, c) {
			b && (a.ye && Qm(a.ye),
				a.vk[px] = 1);
			c && (z.Nx(a),
				a.vk[z.qx] = 1)
		}
		;
		var Ox = function(a, b, c) {
				!b && a.ye && Qm(a.ye);
				a.vk[px] = 0;
				a.vk[z.qx] = 0;
				b && a.ho();
				c && a.tE()
			}
			;
		var Ex = function(a, b) {
				return !!a.vk[b] || a.zr[b] && 500 >= (0,
						z.w)() - a.zr[b]
			}
			;
		z.Nx = function(a) {
			a.ye && Qm(a.ye);
			Qm(a.Cr)
		}
		;
		var Px = function(a) {
				z.Kg(a.target, "A") && a.preventDefault()
			}
			;
		z.Qx = function(a) {
			var b = a.m();
			if (b) {
				var c = z.lr(b);
				b == c ? z.hr(b, 0).select() : z.ur(c, !0);
				z.Lx(a)
			}
		}
		;
		var Rx = function(a) {
				if (!z.l(a.Jy) && (a.Jy = !1,
					z.C && a.pc())) {
					for (var b = a.km.Ua(); b != b.parent; )
						try {
							b = b.parent
						} catch (c) {
							break
						}
					b = b.location;
					a.Jy = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
				}
				return a.Jy
			}
			;
		z.Sx = function(a, b) {
			nx.call(this, a, b)
		}
		;
		var Tx = function(a) {
				if (a.Kp ? 0 : a.Kp = !0) {
					var b = Jx(a)
						, c = a.m()
						, d = !1;
					if (b && c) {
						var f, g = b.parentNode, h = g.offsetWidth;
						(0,
							window.parseInt)(mi(b, "width"), 10) != h && (f = z.Ti(c),
							b.style.width = h + "px",
							c.style.width = h - f.left - f.right + "px",
							d = !0);
						g = g.offsetHeight;
						a.Bo() && (0,
							window.parseInt)(mi(b, "height"), 10) != g && (f || (f = z.Ti(c)),
							b.style.height = g + "px",
							c.style.height = g - f.top - f.bottom + "px",
							d = !0)
					}
					a.Kp = !1;
					d && a.dispatchEvent("ifrsz")
				}
			}
			;
		var Ux = function(a) {
				a.m() && (Tx(a),
				a.Bo() || a.WA())
			}
			;
		z.Vx = function(a, b) {
			var c = a.split("!");
			this.type = c[0] + "!";
			this.namespace = c[1];
			this.Lc = new Wx(b)
		}
		;
		var Wx = function(a) {
				this.category = a.category;
				this.action = a.action;
				this.label = a.label;
				this.value = a.value
			}
			;
		z.Xx = function() {
			z.G.call(this)
		}
		;
		var Yx = function(a, b, c) {
				window.$.post(a, b).done(function(a) {
					if (a.r)
						z.U.message(a.msg);
					else {
						var b = a.msg;
						(b = b && b.redirect) ? window.location.href = b : (z.U.message("操作成功！"),
						c && c(a))
					}
				})
			}
			;
		var Zx = function(a, b) {
				var c = window.$.extend({
					action: "get_member_info",
					reason: b.value
				}, a.xN);
				return window.$.post("/manage", c).then(function(a) {
					return z.Na("用户已被警告 %s 次，禁言 %s 次", a.warn_num, a.ban_num)
				})
			}
			;
		var $x = function(a) {
				z.R.call(this);
				z.rc(this.J = {}, this.defaults, a || {});
				this.Zm = new Ce;
				this.ve = null
			}
			;
		var ay = function(a, b) {
				var c = a.J
					, d = new z.gv(c.trigger,!1,null ,b);
				d.Jp = c.rU;
				d.oo = c.sP;
				d.kh(a.Ti);
				z.F(d, "trigger", function(a) {
					d.setPosition(new z.Pu(a.anchor,1))
				});
				z.F(d, "beforeshow", function(a) {
					this.ve = a.target.anchor;
					this.render()
				}, !1, a);
				d.className = c.kL;
				a.xP = d
			}
			;
		var by = function(a, b) {
				var c = a.J.nQ
					, d = z.ig(a.Ti)
					, f = z.Pb(d, function(a) {
					return a.getAttribute("data-action") === b
				});
				if (!f || z.T.has(f, c))
					return !1;
				z.x(d, function(a) {
					z.T.remove(a, c)
				});
				z.T.add(f, c);
				return !0
			}
			;
		var cy = function(a, b, c, d) {
				a.Zm.set(b, {
					name: b,
					V: c,
					Hh: d || z.p
				})
			}
			;
		z.dy = function(a) {
			z.R.call(this);
			z.rc(this.J = {}, this.defaults, a || {})
		}
		;
		var ey = function(a) {
				var b = a.J
					, c = a.h;
				fy(c);
				b = gy(c, b.PF);
				b.length && (a.dispatchEvent("willScrape"),
					window.$.when.apply(window.$, b).always(function() {
						a.dispatchEvent("didScrape")
					}))
			}
			;
		var hy = function(a, b, c) {
				for (; a && a !== b; ) {
					if (c(a))
						return a;
					a = a.parentNode
				}
			}
			;
		var iy = function(a, b) {
				return hy(a, b, function(a) {
					return jy(a) || "CODE" === a.nodeName || "PRE" === a.nodeName
				})
			}
			;
		var jy = function(a) {
				return "A" === a.nodeName
			}
			;
		var fy = function(a) {
				var b = z.yg(a, function(b) {
					return 3 === b.nodeType && !iy(b, a)
				}), c, d = z.dr(), f = d && z.lq(d);
				z.x(b, function(a) {
					var b = a.nodeValue
						, d = ky(b);
					d !== b && (b = z.Zf(d),
					f === a && (c = b.lastChild),
						z.gg(b, a))
				});
				c && z.ur(c)
			}
			;
		var gy = function(a, b) {
				var c = z.Jb(a.getElementsByTagName("A"), function(a) {
					var b = a.getAttribute("href");
					if (b = !(!b || "#" === b) && !a.getAttribute("data-editable") && z.y(ly, a.protocol))
						b = z.Eg(a),
							z.La(a.href, b) ? a = void 0 : (a.setAttribute("data-editable", !0),
								a.setAttribute("data-title", b),
								a = !0),
							b = !a;
					return b
				});
				return z.Kb(c, function(c) {
					return my(c.href).done(function(f) {
						ny(a, c, f, b)
					})
				})
			}
			;
		var ny = function(a, b, c, d) {
				if (c && a.contains(b)) {
					d = d || {};
					var f = function(a, b, c) {
							var d = z.dr();
							if (d) {
								var f = d.Z()
									, q = d.xa()
									, A = d.la()
									, H = d.Ma();
								z.qg(b, f) && (f = a,
									q = 0);
								z.qg(b, A) && (A = a,
									H = 0);
								c(function() {
									f === a && A === a ? z.ur(a) : z.Pq(f, q, A, H).select()
								})
							} else
								c(z.p)
						}
						;
					a = {
						link: function(a, b) {
							a.setAttribute("data-editable", !0);
							b.title === a.href ? a.setAttribute("data-title", oy(a.hostname)) : (a.setAttribute("data-title", b.title),
								f(a, a, function(c) {
									z.wg(a, b.title);
									c()
								}))
						},
						image: function(a, b) {
							var c = window.document.createElement("img");
							c.src = b.src;
							c.setAttribute("data-rawwidth", b.width);
							c.setAttribute("data-rawheight", b.height);
							f(c, a, function(b) {
								z.gg(c, a);
								b()
							})
						}
					};
					(d = d[c.type] || a[c.type]) && d(b, c)
				}
			}
			;
		var oy = function(a) {
				return a.split(".").slice(/(.com|.edu|.gov|.net|.org)$/.test(a) ? -2 : -3).join(".").replace(/^www\./, "") + " 的页面"
			}
			;
		var ky = function(a) {
				return a.replace(py, function(a) {
					z.La(a, "http") || (a = "http://" + a);
					return a.link(a)
				})
			}
			;
		var qy = function(a) {
				var b = new $x({});
				cy(b, "link", "链接", function(a) {
					z.wg(a, a.href)
				});
				cy(b, "text", "文本", function(a) {
					z.wg(a, a.getAttribute("data-title"))
				});
				b.w(a);
				var c = b.Cx();
				z.Su(c, new z.ei(2,0,0,0));
				z.ev(c, new z.ei(2,0,0,0));
				var d = b.v();
				d.g(c, "beforeshow", function(a) {
					a = a.target.anchor;
					var c = z.Eg(a);
					c === a.href ? by(b, "link") : (c !== a.getAttribute("data-title") && a.setAttribute("data-title", c),
						by(b, "text"))
				}).g(c, "beforehide", function(b) {
					if ((b = b.target) && a.contains(b) && jy(b))
						return !1
				});
				var f;
				d.g(c, "show", function(a) {
					f =
						a.target.anchor;
					z.T.add(f, "hover")
				}).g(c, "hide", function() {
					f && (z.T.remove(f, "hover"),
						f = null )
				});
				return b
			}
			;
		z.ry = function(a, b, c) {
			z.R.call(this);
			this.id = a;
			this.type = b;
			this.Ia = null ;
			this.Gg = this.Lt = !1;
			this.lc = "写下你的评论…";
			this.placeholder = '\x3cp style\x3d"color:#999"\x3e' + this.lc + "\x3c/p\x3e";
			this.Oj = "";
			this.Ka = -1;
			this.UG = window.$.Deferred().resolve();
			this.$z = this.kt = null ;
			this.AD = "zm-comment-box";
			this.Td = null ;
			a = sy[b];
			if (!a)
				throw Error("API not found");
			this.wg = window.$.extend({}, sy._default_, a);
			this.Xi = "";
			z.rc(this.J = {}, this.defaults, c || {})
		}
		;
		var ty = function(a) {
				return z.Lm(a, !0, function() {
					return this.Xi
				})
			}
			;
		var uy = function(a, b, c) {
				if (!z.og(a) || "TEXTAREA" === a.nodeName)
					return function() {}
						;
				var d = new z.dy({
					PF: {
						image: z.p
					}
				});
				d.w(a);
				b = (new z.Uo).add("type", b + "_comment").add("resource_id", c);
				var f = new Qr(a,{
					Xm: {
						source: "/people/autocomplete?" + b.toString()
					},
					fk: z.L("zu-main") || window.document.body
				});
				new Jr(a,{
					mA: $r
				});
				return function() {
					d.H();
					f.H()
				}
			}
			;
		z.vy = function(a, b, c) {
			var d = z.L(a.AD, b);
			c && (a.Td = c);
			d ? a.w(d) : (a.Lt = !0,
				a.render(b))
		}
		;
		var wy = function(a) {
				z.dc({
					LC: ".load-more",
					xn: ".zm-comment-list",
					ID: ".zm-comment-form",
					Ia: ".zm-comment-editable"
				}, function(a, c) {
					this[c] = (0,
						window.$)(a, this.h)[0]
				}, a)
			}
			;
		var xy = function(a) {
				a.Ia && a.Ia.setAttribute("aria-label", a.lc);
				if (hs) {
					var b = a.Ia;
					b.setAttribute("contentEditable", !0);
					var c = a.dj = {
						m: function() {
							return b
						},
						xl: function() {
							return Rn(b) ? "" : b.innerHTML
						},
						Qd: function(a, c) {
							b.innerHTML = c
						},
						Vf: function() {
							z.tr(b)
						}
					};
					gd(a, uy(c.m(), a.type, a.id))
				} else
					yy(a);
				a.v().g(a.Ia, ["change", "keyup"], function(a) {
					27 !== a.keyCode && (z.or(this.Ia) ? this.Oj = "" : this.Oj = this.Va())
				}).g(a.dj.m(), "focus", function() {
					this.ba({
						action: "click_add_[type]_comment_box"
					})
				});
				zy(a)
			}
			;
		var yy = function(a) {
				var b = z.M("textarea", {
					placeholder: a.lc,
					"class": "zm-comment-textarea"
				});
				z.gg(b, a.Ia);
				new z.Zn(b);
				a.Ia = b;
				a.dj = {
					m: function() {
						return b
					},
					xl: function() {
						return b.value
					},
					Qd: function() {
						b.value = "";
						b.style.height = si(22, !0)
					},
					Vf: function() {
						b.focus()
					}
				}
			}
			;
		var Ay = function(a) {
				var b = a.dj
					, c = b.m();
				if (b.xl() !== a.placeholder) {
					b.Qd(!1, a.placeholder);
					var d = ["click", "focus", "keydown"]
						, f = function() {
							b.Qd(!1, this.Oj || "");
							this.Ia.lastChild ? z.ur(this.Ia.lastChild) : b.Vf();
							z.Ud(c, d, f, !1, this)
						}
						;
					z.F(c, d, f, !1, a);
					var g;
					window.getSelection ? (g = window.getSelection(),
					g.anchorNode && z.qg(a.Ia, g.anchorNode) && g.removeAllRanges()) : window.document.selection && a.Ia.blur()
				}
			}
			;
		var By = function(a) {
				a.focus();
				a = z.gr(a);
				a.collapse();
				a.select()
			}
			;
		var Cy = function(a) {
				var b;
				(b = z.L("zm-comment-reply-hack")) ? (b = z.Zf(z.xg(b)),
					z.T.Dv(b, "zm-comment-reply-hack", "zm-comment-reply-hacked"),
					z.eg(b, a)) : (b = "",
				z.X.qb() && (b = '\x3cimg class\x3d"avatar" src\x3d"' + z.X.Jd("is") + '"\x3e'),
					b = z.Zf('\x3cdiv class\x3d"zm-comment-form expanded"\x3e\x3cdiv class\x3d"zm-comment-editable-wrap"\x3e' + b + '\x3cdiv class\x3d"zm-comment-editable" aria-label\x3d"写下你的回复"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-submit zg-right zg-btn-blue"\x3e评论\x3c/a\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-close zm-command-cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'),
					a.appendChild(b));
				return b
			}
			;
		var Dy = function(a, b) {
				return z.Pb(Ey(a), function(a) {
					return a.getAttribute("data-id") === b
				})
			}
			;
		var Ey = function(a) {
				return (0,
					window.$)(a.xn).children(".zm-item-comment").get()
			}
			;
		var Fy = function(a) {
				a.v().g(a.h, "click", a.Oa).g(a.Ia, "keydown", a.FR).g(z.ek, "anon_change", a.sj).g(a.dj.m(), ["click", "focus"], z.Ca(a.uu, !0)).g(a.dj.m(), "focus", z.Ca(a.Di, "add_comment_start"));
				a.Ka = Number(a.h.getAttribute("data-count"));
				(0,
					window.$)(a.h).on("focusin focusout", "." + a.J.wf, function(a) {
					(0,
						window.$)(this).toggleClass("focusin", "focusin" === a.type)
				});
				!Rj && a.LC && (a.$z = sn().then(window.$.proxy(a.TG, a)))
			}
			;
		var Gy = function(a) {
				0 < a.ib() ? (a.Oj = a.Va(),
					a.uu(!1),
					Ay(a)) : a.Td ? a.collapse() : a.uu();
				a.Ph()
			}
			;
		var Hy = function(a) {
				if (a.Td) {
					var b = (0,
						window.$)(a.Td);
					a.$(a.VC).show().css("left", b.position().left + b.width() / 2)
				}
			}
			;
		var Iy = function(a) {
				if ("pending" !== a.UG.state()) {
					a.Db();
					a.h.innerHTML = a.Bn();
					a.expand();
					var b = a.wg.yl(a.id, a.J.CQ).done((0,
						z.r)(a.tT, a));
					return a.UG = b
				}
			}
			;
		var zy = function(a) {
				z.X.qb() ? z.X.Yd || Jy(a, '\x3cdiv class\x3d"activate-mask-tip-comment"\x3e' + (z.X.Nn ? "为了正常使用知乎的提问、回答、评论和编辑功能，请验证你的邮箱。" : "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机或邮箱。") + "\x3c/div\x3e", '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:;"\x3e我要激活\x3c/a\x3e\x3c/div\x3e') : Jy(a, '\x3cdiv class\x3d"signin-mask-tip-comment"\x3e\x3c/div\x3e', null )
			}
			;
		var Jy = function(a, b, c) {
				b = (0,
					window.$)(b);
				var d = (0,
					window.$)(c);
				c ? ((0,
					window.$)(".zm-command, .zm-comment-info", a.h).hide(),
					(0,
						window.$)(a.Ia).hide().after(d).after(b)) : b.insertAfter(a.Ia);
				a = (0,
					z.r)(ty(z.p), a);
				b.on("click", a);
				d.on("click", a)
			}
			;
		var Ky = function(a) {
				wy(a);
				xy(a);
				Ay(a);
				Fy(a);
				Ly(a);
				Hy(a)
			}
			;
		var Ly = function(a) {
				var b = a.J
					, c = !a.ib();
				z.T.enable(a.h, b.Pw, c);
				c && a.Ia && b.autofocus && a.vl();
				a.dispatchEvent("change")
			}
			;
		var My = function(a, b, c) {
				if (!a.om || "pending" !== a.om.state()) {
					var d;
					z.ua(b) && (d = b.zT,
						b = b.content);
					b = z.Va(b);
					var f = new Ce;
					f.set(a.type + "_id", a.id);
					f.set("content", b);
					d && f.set("reply", d);
					b = a.wg.add(Ge(f));
					b.done(window.$.proxy(a.$N, a)).done(c);
					a.om = b;
					a.Oj = a.Va();
					a.Di("add_comment_submit")
				}
			}
			;
		var Ny = function(a, b) {
				var c = z.Mg(b, a.J.wf);
				(new z.Xx).open(b, {
					id: c.getAttribute("data-id"),
					type: "comment"
				}, (0,
					z.r)(function() {
					z.N(c);
					--this.Ka;
					Ly(this)
				}, a))
			}
			;
		var Oy = function(a, b) {
				var c = z.Mg(b, a.J.wf)
					, d = c.getAttribute("data-id")
					, f = "你确定要删除这条评论吗？"
					, g = (0,
					window.$)(".zm-item-link-avatar", c).prop("href");
				g && (f += '\x3cp class\x3d"js-block" style\x3d"margin-top:.2em;color:#999;visibility:hidden"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox"\x3e同时将此人屏蔽\x3c/label\x3e\x3c/p\x3e',
					window.$.get(g + "/block", function(a) {
						a.r || a.msg || (0,
							window.$)(".js-block", h.m()).css("visibility", "visible")
					}));
				var h = z.U.confirm("删除评论", f, function(a) {
					a && (a = (0,
						window.$)(":checkbox", h.m()).prop("checked"),
						Py(this, d, Number(a), z.Ca(z.N, c)))
				}, a)
			}
			;
		var Qy = function(a, b, c) {
				a.wg.remove(b).done((0,
					z.r)(function() {
					z.ta(c) && c();
					--this.Ka;
					Ly(this)
				}, a))
			}
			;
		var Py = function(a, b, c, d) {
				a.wg.YL(b, c).done((0,
					z.r)(function() {
					z.ta(d) && d();
					--this.Ka;
					Ly(this)
				}, a))
			}
			;
		var Ry = function(a, b) {
				return a && (b.length ? Ry(a[b.shift()], b) : a)
			}
			;
		var Sy = function(a, b) {
				z.R.call(this);
				this.Ib = a;
				this.entryType = b;
				this.Kj = !1;
				this.cD = !0
			}
			;
		var Ty = function(a) {
				z.X.qb() && 0 === Uy(a) && (0,
					window.setTimeout)(function() {
					return a.vl()
				})
			}
			;
		var Vy = function(a) {
				if (!a.tl && !Kv) {
					var b = z.Mg(a.h, "zm-item-meta");
					if (b) {
						var c = z.L("zm-meta-panel", b);
						c && (a.tl = new Fr(null ,b),
							a.tl.tag = "comment",
							a.tl.w(c))
					}
				}
			}
			;
		var Wy = function(a, b) {
				a.Td = b;
				a.ov = (0,
					window.$)(b);
				a.FS = z.Eg(a.Td);
				a.ov.on("click", function() {
					Ty(a)
				})
			}
			;
		var Xy = function(a) {
				a.Kj && (0,
					window.$)(".icon-spike", a.h).css("left", a.ov.position().left + a.ov.width() / 2).removeClass("hidden")
			}
			;
		var Yy = function(a) {
				if (a.Td)
					if (a.Kj)
						tn(a.Td, "收起评论");
					else {
						var b = Uy(a)
							, c = void 0
							, c = sa(b) ? 0 < b ? b + " 条评论" : "添加评论" : a.FS;
						tn(a.Td, c)
					}
			}
			;
		var Uy = function(a) {
				var b;
				if (b = a.Lq)
					a = a.Lq.store.getState(),
						b = Ry(a, ["commentBox", "paging", "totalCount"]);
				return b
			}
			;
		var Zy = function(a, b, c) {
				var d = a.Lq;
				a = d.store;
				var f = d.actions
					, d = d.ActionTypes;
				/[A-Z]/.test(b[0]) ? a.dispatch({
					type: d[b],
					payload: c
				}) : a.dispatch(f[b](c))
			}
			;
		var $y = function(a, b) {
				z.R.call(this);
				window.$.extend(this.options = {}, az, b || {});
				this.state = {
					Xl: !1,
					Ss: !1,
					Us: !0,
					zo: !1,
					Vz: !1
				};
				var c = new rk(this.update,17,this);
				z.fd(this, c);
				this.DJ = (0,
					z.r)(c.fire, c)
			}
			;
		var bz = function(a) {
				var b = (0,
					window.$)(a.h)
					, c = (0,
					window.$)("\x3cdiv\x3e");
				window.$.each("display position top right bottom left float margin".split(" "), function(a, f) {
					c.css(f, b.css(f))
				});
				c.css({
					visibility: "hidden",
					width: b.outerWidth(),
					height: b.outerHeight()
				}).insertBefore(b);
				a.lc = c.get(0);
				b.addClass(a.options.vg);
				a.ea();
				a.options.QH.call(a)
			}
			;
		var cz = function(a) {
				if (!window.Modernizr.csstransitions)
					return bz(a);
				var b = (0,
					window.$)(a.h);
				a.state.zo = !0;
				bz(a);
				b.css({
					transition: "none",
					transform: "translateY(" + dz(a) + "px)"
				});
				(0,
					window.setTimeout)(function() {
					b.css({
						transition: "",
						transform: ""
					}).onTransitionEnd(function() {
						a.onAnimationEnd()
					}, 200)
				})
			}
			;
		var ez = function(a) {
				if (!window.Modernizr.csstransitions)
					return a.restore();
				var b = (0,
					window.$)(a.h);
				a.state.zo = !0;
				b.css("transform", "translateY(" + dz(a) + "px)").onTransitionEnd(function() {
					b.css({
						transition: "none",
						transform: ""
					});
					a.restore();
					a.onAnimationEnd()
				}, 200)
			}
			;
		var dz = function(a) {
				var b = (0,
					window.$)(a.h).outerHeight();
				return null  === a.options.bottom ? -(b + a.options.top) : b + a.options.bottom
			}
			;
		z.fz = function(a) {
			z.R.call(this);
			this.entryType = a
		}
		;
		var gz = function(a, b) {
				return z.Lm(a, b, function() {
					return this.Wn()
				})
			}
			;
		var hz = function(a) {
				a.g("trackRequested", function(b) {
					b.label = a.Kx();
					b.value = (0,
							window.$)(a.h).index() + 1;
					z.Ak(b)
				})
			}
			;
		var iz = function(a) {
				a = (0,
					window.$)(a);
				var b = {};
				(0,
					window.$)("meta[itemprop]", a).each(function() {
					var a = (0,
						window.$)(this);
					b[a.attr("itemprop")] = a.attr("content")
				});
				return b
			}
			;
		var jz = function(a) {
				if (a.YA)
					return a.YA;
				var b = (0,
					window.$)('meta[itemprop\x3d"ZReactor"]', a.h).data("meta");
				a.YA = b && b.source_type ? b.source_type : "";
				return a.YA
			}
			;
		var kz = function(a) {
				if (a.Ty)
					return a.Ty;
				var b = ut();
				a.Ty = ({
						home: "feed",
						search: "search_result_question_answer_tab",
						explore_daily_hot: "daily_trending",
						explore_monthly_hot: "monthly_trending",
						people: "people_profile_activities",
						people_answers: "people_profile_answers",
						explore_recommendations: "editor_recommendations"
					}[b] || b) + ({
						collection: "_feed",
						roundtable: "_feed",
						answer: "_more"
					}[b] || "");
				return a.Ty
			}
			;
		var lz = function(a) {
				return {
					promotion_answer: "promote",
					member_voteup_answer: "someone_vote_up",
					topic_acknowledged_answer: "from_topic",
					roundtable_add_answer: "from_roundtable",
					member_answer_question: "someone_add",
					member_create_article: "someone_add",
					member_voteup_article: "someone_vote_up"
				}[jz(a)]
			}
			;
		var mz = function(a) {
				var b = (0,
					window.$)('.js-report, a[name\x3d"report"]', a.m())
					, c = a.entryType
					, d = a.Ib;
				b.each(function(b, g) {
					var h = (0,
						window.$)(g)
						, k = new z.Lw(c,d);
					h.hasClass("goog-menuitem") ? h.click(function() {
						k.Em()
					}) : (z.Ow(k, g),
						z.fd(k, this));
					k.mb(a)
				})
			}
			;
		var nz = function(a, b) {
				z.G.call(this);
				this.h = a;
				var c = z.og(this.h) ? this.h : this.h ? this.h.body : null ;
				this.jQ = !!c && z.Ni(c);
				this.PG = z.F(this.h, z.B ? "DOMMouseScroll" : "mousewheel", this, b)
			}
			;
		var oz = function(a, b) {
				return z.D && (z.Ad || pz) && 0 != a % b ? a : a / b
			}
			;
		var qz = function(a, b, c, d) {
				ud.call(this, b);
				this.type = "mousewheel";
				this.detail = a;
				this.deltaX = c;
				this.deltaY = d
			}
			;
		var rz = function() {
				z.G.call(this)
			}
			;
		var sz = function(a, b) {
				return null  == a.uk ? b : a.Po + Math.round((b - a.Po) / a.uk) * a.uk
			}
			;
		var tz = function(a, b) {
				z.R.call(this, a);
				this.IC = null ;
				this.zb = new rz;
				this.qQ = b || z.uz;
				z.F(this.zb, "change", this.DF, !1, this)
			}
			;
		var vz = function(a, b) {
				b ? (a.v().g(a.oe, "beforedrag", a.js).g(a.Tf, "beforedrag", a.js).g(a.oe, ["start", "end"], a.xs).g(a.Tf, ["start", "end"], a.xs).g(a.sb, "key", a.pf).g(a.m(), "click", a.ts).g(a.m(), "mousedown", a.ts),
				a.pG && wz(a, !0)) : (a.v().pa(a.oe, "beforedrag", a.js).pa(a.Tf, "beforedrag", a.js).pa(a.oe, ["start", "end"], a.xs).pa(a.Tf, ["start", "end"], a.xs).pa(a.sb, "key", a.pf).pa(a.m(), "click", a.ts).pa(a.m(), "mousedown", a.ts),
				a.pG && wz(a, !1))
			}
			;
		var xz = function(a, b) {
				var c = Bi(b, a.m());
				return "vertical" == a.Nb ? c.y : a.ge && a.Ld() ? a.m().clientWidth - c.x : c.x
			}
			;
		var yz = function(a, b) {
				var c = a.Cc()
					, d = a.Tc();
				if ("vertical" == a.Nb) {
					var f = a.ab.offsetHeight
						, g = a.m().clientHeight - f
						, f = xz(a, b) - f / 2;
					return (d - c) * (g - f) / g + c
				}
				f = a.ab.offsetWidth;
				g = a.m().clientWidth - f;
				f = xz(a, b) - f / 2;
				return (d - c) * f / g + c
			}
			;
		var zz = function(a, b) {
				if (b == a.ab)
					return a.zb.W();
				if (b == a.Hd)
					return a.zb.W() + a.zb.Xh();
				throw Error("Illegal thumb element. Neither minThumb nor maxThumb");
			}
			;
		var Az = function(a, b) {
				Math.abs(b) < a.ao() && (b = Bz(b) * a.ao());
				var c = zz(a, a.ab) + b
					, d = zz(a, a.Hd) + b
					, c = ue(c, a.Cc(), a.Tc() - a.rt)
					, d = ue(d, a.Cc() + a.rt, a.Tc());
				Cz(a, c, d - c)
			}
			;
		var Dz = function(a, b, c) {
				var d = sz(a.zb, c);
				c = b == a.ab ? d : a.zb.W();
				b = b == a.Hd ? d : a.zb.W() + a.zb.Xh();
				c >= a.Cc() && b >= c + a.rt && a.Tc() >= b && Cz(a, c, b - c)
			}
			;
		var Cz = function(a, b, c) {
				a.Cc() <= b && b <= a.Tc() - c && a.rt <= c && c <= a.Tc() - b && (b != a.W() || c != a.Xh()) && (a.zb.ut = !0,
					a.zb.ru(0),
					a.zb.Fa(b),
					a.zb.ru(c),
					a.zb.ut = !1,
					a.DF())
			}
			;
		var Ez = function(a, b) {
				return b <= a.zb.W() + a.zb.Xh() / 2 ? a.ab : a.Hd
			}
			;
		var Fz = function(a) {
				if (a.ab && !a.Ao) {
					var b = Gz(a, zz(a, a.ab))
						, c = Gz(a, zz(a, a.Hd));
					if ("vertical" == a.Nb)
						a.ab.style.top = b.y + "px",
							a.Hd.style.top = c.y + "px",
						a.Tb && (b = Hz(c.y, b.y, a.ab.offsetHeight),
							a.Tb.style.top = b.offset + "px",
							a.Tb.style.height = b.size + "px");
					else {
						var d = a.ge && a.Ld() ? "right" : "left";
						a.ab.style[d] = b.x + "px";
						a.Hd.style[d] = c.x + "px";
						a.Tb && (b = Hz(b.x, c.x, a.ab.offsetWidth),
							a.Tb.style[d] = b.offset + "px",
							a.Tb.style.width = b.size + "px")
					}
				}
			}
			;
		var Hz = function(a, b, c) {
				var d = Math.ceil(c / 2);
				return {
					offset: a + d,
					size: Math.max(b - a + c - 2 * d, 0)
				}
			}
			;
		var Gz = function(a, b) {
				var c = new Ff;
				if (a.ab) {
					var d = a.Cc()
						, f = a.Tc()
						, f = b == d && d == f ? 0 : (b - d) / (f - d);
					"vertical" == a.Nb ? (d = a.m().clientHeight - a.ab.offsetHeight,
						f = Math.round(f * d),
						c.x = Iz(a, a.ab),
						c.y = d - f) : (c.x = Math.round(f * (a.m().clientWidth - a.ab.offsetWidth)),
						c.y = a.ab.offsetTop)
				}
				return c
			}
			;
		var Jz = function(a, b) {
				b = ue(b, a.Cc(), a.Tc());
				a.Ao && (a.Fn.stop(!0),
					a.Fn.H());
				var c = new Fu, d, f = Ez(a, b), g = a.W(), h = a.Xh(), k = zz(a, f), m = Gz(a, k);
				d = a.ao();
				Math.abs(b - k) < d && (b = ue(k + (b > k ? d : -d), a.Cc(), a.Tc()));
				Dz(a, f, b);
				k = Gz(a, zz(a, f));
				d = "vertical" == a.Nb ? [Iz(a, f), k.y] : [k.x, f.offsetTop];
				m = new jn(f,[m.x, m.y],d,100);
				m.Sh(a.ge);
				c.add(m);
				a.Tb && Kz(a, f, g, h, k, c);
				a.IC && (f = a.IC.QW(g, b, 100),
					z.x(f, function(a) {
						c.add(a)
					}));
				a.Fn = c;
				a.v().g(c, "end", a.vN);
				a.Ao = !0;
				c.play(!1)
			}
			;
		var Kz = function(a, b, c, d, f, g) {
				var h = Gz(a, c)
					, k = Gz(a, c + d);
				c = h;
				d = k;
				b == a.ab ? c = f : d = f;
				"vertical" == a.Nb ? (b = Hz(k.y, h.y, a.ab.offsetHeight),
					h = Hz(d.y, c.y, a.ab.offsetHeight),
					f = new jn(a.Tb,[Iz(a, a.Tb), b.offset],[Iz(a, a.Tb), h.offset],100),
					b = new mn(a.Tb,b.size,h.size,100)) : (b = Hz(h.x, k.x, a.ab.offsetWidth),
					h = Hz(c.x, d.x, a.ab.offsetWidth),
					f = new jn(a.Tb,[b.offset, a.Tb.offsetTop],[h.offset, a.Tb.offsetTop],100),
					b = new ln(a.Tb,b.size,h.size,100));
				f.Sh(a.ge);
				b.Sh(a.ge);
				g.add(f);
				g.add(b)
			}
			;
		var Lz = function(a) {
				var b = a.m();
				b && (P(b, "valuemin", a.Cc()),
					P(b, "valuemax", a.Tc()),
					P(b, "valuenow", a.W()),
					P(b, "valuetext", a.qQ(a.W()) || ""))
			}
			;
		var wz = function(a, b) {
				b ? (a.Xj || (a.Xj = new nz(a.m())),
					a.v().g(a.Xj, "mousewheel", a.yF)) : a.v().pa(a.Xj, "mousewheel", a.yF)
			}
			;
		var Iz = function(a, b) {
				return a.ge ? Xi(b) : b.offsetLeft
			}
			;
		var Mz = function(a, b) {
				tz.call(this, a, b);
				this.zb.ru(0)
			}
			;
		var Nz = function(a) {
				z.R.call(this);
				this.options = window.$.extend({}, this.defaults, a)
			}
			;
		var Oz = function(a, b) {
				a.zoom = b;
				Pz(a, a.Le.nq / 2 + a.Le.x, a.Le.bo / 2 + a.Le.y)
			}
			;
		var Pz = function(a, b, c) {
				var d = a.zoom;
				a.Le = {
					nq: a.options.qg / d,
					bo: a.options.pg / d,
					x: b - a.options.qg / d / 2,
					y: c - a.options.pg / d / 2
				};
				Qz(a)
			}
			;
		var Qz = function(a) {
				var b = a.zoom
					, c = ue(a.options.Rm - a.Le.x * b, a.options.qg + a.options.Rm - a.Fs * b, a.options.Rm)
					, d = ue(a.options.Sm - a.Le.y * b, a.options.pg + a.options.Sm - a.Es * b, a.options.Sm)
					, f = {
					width: b * a.Fs,
					height: b * a.Es,
					left: c,
					top: d
				};
				a.uq.css(f);
				a.iv.css(f);
				a.Le.x = (a.options.Rm - c) / b;
				a.Le.y = (a.options.Sm - d) / b
			}
			;
		z.Rz = function(a, b, c) {
			z.R.call(this);
			this.Qq = a || z.Sz;
			this.IE = b;
			this.OI = c || "l"
		}
		;
		var Tz = function() {
				return !!window.FileReader
			}
			;
		var Uz = function(a) {
				a.Tl = a.my = a.yj = "";
				if (a.dialog)
					a.dialog.ea();
				else {
					a.dialog = new z.S(null );
					a.dialog.Ya("修改图片");
					var b = Vz.Ye
						, c = Vz.tg
						, d = new z.Lj;
					d.set(b, "取消", !1, !0).set(c, "确定", !0);
					z.Ij(a.dialog, d);
					a.v().g(a.dialog, z.Kj, function(a) {
						if (a.key === c) {
							if (Tz()) {
								var b = this.xw;
								a = (0,
									window.$)("\x3ccanvas\x3e\x3c/canvas\x3e");
								a.attr("width", b.options.qg);
								a.attr("height", b.options.pg);
								var d = a[0];
								(0,
									window.$)(window.document.body).append(d);
								var k = a[0].getContext("2d")
									, m = b.Le;
								k.drawImage(b.Gs, m.x, m.y, m.nq, m.bo, 0, 0,
									b.options.qg, b.options.pg);
								b = d.toDataURL("image/png");
								a.remove();
								a = b
							} else
								a = this.xw.Le;
							this.yj = a;
							Wz(this);
							this.dialog.G(!1);
							return !1
						}
					})
				}
				Xz(a.dialog.X());
				a.dialog.G(!0);
				z.T.add(a.dialog.h, "avatar-edit-dialog")
			}
			;
		var Yz = function(a) {
				var b = a.input.cloneNode();
				z.gg(b, a.input);
				a.input = b;
				a.v().g(a.input, "change", a.Ec)
			}
			;
		var Wz = function(a) {
				if (a.yj && (Tz() || a.my)) {
					a.dispatchEvent("beforepost");
					var b = {
						type: a.Qq,
						dest_id: a.Qq === z.Sz ? z.X[3] : a.IE,
						return_size: a.OI
					};
					if (Tz()) {
						var c = new window.FormData;
						c.append("handle_mode", "upload");
						c.append("picture", Zz(a.yj.replace(/data\:image\/\w{3,4};base64,/, "")), a.file.name);
						window.$.each(b, function(a, b) {
							c.append(a, b)
						});
						window.$.ajax({
							url: a.FB,
							data: c,
							method: "post",
							processData: !1,
							contentType: !1,
							success: window.$.proxy(a.WD, a),
							dataType: "json",
							xhrFields: {
								withCredentials: !0
							},
							crossDomain: !0
						})
					} else {
						var b =
							window.$.extend(b, {
								handle_mode: "resize",
								x: Math.round(a.yj.x),
								y: Math.round(a.yj.y),
								height: Math.round(a.yj.bo),
								width: Math.round(a.yj.nq),
								hashval: a.my
							})
							, d = '\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" action\x3d"' + a.FB + '"\x3e';
						window.$.each(b, function(a, b) {
							d += '\x3cinput type\x3d"hidden" name\x3d"' + a + '" value\x3d"' + b + '" /\x3e'
						});
						d += "\x3c/form\x3e";
						b = (0,
							window.$)(d);
						b.appendTo(a.h);
						b[0].submit()
					}
				}
			}
			;
		var Xz = function(a) {
				var b = (0,
					window.$)("\x3cdiv class\x3d'new-avatar-editor-loading'\x3e\x3cdiv\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv\x3e正在上传...\x3c/div\x3e\x3c/div\x3e");
				a = (0,
					window.$)(a);
				a.html("");
				a.append(b)
			}
			;
		var Zz = function(a) {
				var b, c;
				c = "image/png";
				b = b || 512;
				a = (0,
					window.atob)(a);
				for (var d = [], f = 0; f < a.length; f += b) {
					for (var g = a.slice(f, f + b), h = Array(g.length), k = 0; k < g.length; k++)
						h[k] = g.charCodeAt(k);
					g = new window.Uint8Array(h);
					d.push(g)
				}
				return new window.Blob(d,{
					type: c
				})
			}
			;
		z.$z = function(a, b) {
			this.am = this.be = 1;
			this.hg = b || 4;
			this.items = a || [];
			this.vD = [];
			this.am = Math.ceil(this.items.length / this.hg)
		}
		;
		z.aA = function(a, b, c) {
			b = (b - 1) * a.hg;
			return a.items.slice(b, b + c)
		}
		;
		var bA = function(a, b) {
				var c = z.aA(a, a.be + 1, 1)[0];
				if (a.mo() && c) {
					var d = a.remove(b);
					a.remove(c);
					a.items.splice(d, 0, c);
					return c
				}
			}
			;
		var cA = function(a) {
				z.fz.apply(this, arguments)
			}
			;
		var dA = function(a) {
				a = (0,
					window.$)(a.m());
				var b = (0,
					window.$)(".js-list", a);
				(0,
					window.$)(".js-hidden-list", a);
				var c = (0,
					window.$)(".pager", a)
					, d = window.$.makeArray((0,
					window.$)("\x3cdiv\x3e").html((0,
					window.$)(".js-hidden-list").html()).children().add(b.children()))
					, f = new z.$z(d,4);
				f.Ec(function(a) {
					c.find(".next").toggleClass("disabled", !a.mo);
					c.find(".prev").toggleClass("disabled", !a.zs)
				});
				(0,
					window.$)(".pager", a).on("click", ".next:not(.disabled)", function() {
					f.next();
					b.html(z.aA(f, f.be, f.hg))
				}).on("click",
					".prev:not(.disabled)", function() {
						f.prev();
						b.html(z.aA(f, f.be, f.hg))
					});
				a.on("click", "[data-follow]", function(a) {
					var b = (0,
						window.$)(a.target).closest(".item")
						, c = bA(f, b[0]);
					c && b.fadeOut(function() {
						b.replaceWith(c)
					})
				})
			}
			;
		var eA = function(a) {
				(0,
					window.$)(".js-validate", a.h).click(function() {
					(new xl).G(!0)
				})
			}
			;
		var fA = function(a) {
				var b = (0,
					window.$)(".js-headline-input", a.h)
					, c = (0,
					window.$)(".js-instruction", a.h);
				b.on("focus", function() {
					return c.slideDown(200)
				});
				b.on("blur", function() {
					return c.slideUp(200)
				});
				b.is(":focus") && b.trigger("focus");
				(0,
					window.$)(".js-form", a.h).on("submit", function(c) {
					c.preventDefault();
					var f = b.val();
					f && z.wl((0,
						window.$)(".js-submit-button", a.h), function() {
						return window.$.post("/people/edit", {
							data: JSON.stringify({
								headline: f
							})
						}, function(b) {
							if (b && !b.r)
								z.X.SF = f,
									(0,
										window.$)(".avatar-reminder .js-headline").text(f),
									gA(a);
							else {
								var c = b && b.msg;
								z.U.message(c ? Array.isArray(c) ? c[0][1] : b.msg : "更新失败")
							}
						})
					})()
				})
			}
			;
		var hA = function(a) {
				var b = (0,
					window.$)(".js-choose-image", a.h)[0]
					, c = (0,
					window.$)(".segment-avatar-wrapper .avatar", a.h)
					, d = new z.Rz(z.Sz)
					, f = void 0;
				d.w(b);
				d.g("beforepost", function() {
					f = (0,
						window.$)('\x3cspan class\x3d"spinner"\x3e\x3c/span\x3e').appendTo(c.parent())
				});
				d.g("success", function() {
					window.$.post("/node/ProfileHeaderV2", {
						method: "save",
						params: {
							data: {
								avatar_path: d.getData().url
							}
						}
					}, function(b) {
						f.remove();
						b && b.r ? z.U.message("更新失败") : (z.X.dD = d.Jd("s"),
							(0,
								window.$)(".zu-top .avatar").attr({
								src: d.Jd("s"),
								srcset: d.Jd("xs") + " 2x"
							}),
							(0,
								window.$)(".headline-reminder .js-avatar-wrapper .avatar").attr({
								src: d.Jd("xs"),
								srcset: d.Jd("l") + " 2x"
							}),
							gA(a))
					})
				})
			}
			;
		var gA = function(a) {
				var b = (0,
					window.$)(".profile-reminder-template", a.h).html()
					, b = (0,
					window.$)(b)
					, c = z.X.SF;
				c && b.find(".js-headline").text(c);
				b.find(".js-avatar-wrapper .avatar").attr({
					src: z.X.Jd("xs"),
					srcset: z.X.Jd("l") + " 2x"
				});
				(0,
					window.$)(".js-inner", a.h).replaceWith(b)
			}
			;
		var iA = function(a) {
				z.fz.apply(this, arguments)
			}
			;
		var jA = function(a) {
				for (var b = a.m(), c = [{
					value: "close",
					label: "不感兴趣",
					Yf: a.ms.bind(a)
				}], d = new z.uw, c = z.ia(c), f = c.next(); !f.done; f = c.next())
					f = f.value,
						f = new z.pw(f.label,f),
						d.Ca(f);
				b = (0,
					window.$)(".AdFeed-menuBtn", b)[0];
				c = new z.Dw("ad",d);
				c.Vj.cf = 7;
				c.Ob = z.Pw;
				c.w(b);
				z.fd(c, a);
				a.v().g(d, "action", function(a) {
					a.target.W().Yf()
				})
			}
			;
		z.kA = function(a, b, c) {
			z.pw.call(this, a, b, c);
			this.Ap(!0)
		}
		;
		var lA = function(a, b) {
				this.Mh = a instanceof Ff ? a : new Ff(a,b)
			}
			;
		var mA = function(a, b) {
				lA.call(this, a, b)
			}
			;
		z.nA = function(a, b) {
			z.uw.call(this, a, b);
			this.bn = !0;
			this.Te(!0);
			this.G(!1, !0);
			this.Ef = new Ce
		}
		;
		z.oA = function(a, b, c, d, f) {
			var g = a.U();
			a.tG() && a.VU ? a.hide() : (a.Of = f || null ,
			a.dispatchEvent("beforeshow") && (c = "undefined" != typeof c ? c : 4,
			g || (a.m().style.visibility = "hidden"),
				z.Q(a.m(), !0),
				b.ea(a.m(), c, d),
			g || (a.m().style.visibility = "visible"),
				a.tb(-1),
				a.G(!0)))
		}
		;
		var pA = function(a, b) {
				for (var c = a.Ef.jd(), d = 0; d < c.length; d++) {
					var f = a.Ef.get(c[d]);
					if (f.h == b.currentTarget) {
						a.NA(f, b.clientX, b.clientY);
						b.preventDefault();
						b.stopPropagation();
						break
					}
				}
			}
			;
		var qA = function(a, b) {
				z.R.call(this);
				this.Qp = null ;
				this.$H = b;
				this.content = a;
				this.type = b.type;
				this.Ci = b.Ci;
				this.title = this.type === rA ? "一句话介绍" : "在 " + b.yk + " 话题下的话题经验"
			}
			;
		var sA = function(a) {
				a.Xe.focus();
				z.Eo(a.Xe.get()[0], a.Xe.val().length)
			}
			;
		var tA = function(a, b) {
				a.Qp = b;
				(0,
					window.$)(a.h).attr("class", "zm-bio-item " + a.Qp)
			}
			;
		var uA = function(a, b) {
				z.G.call(this);
				this.NP = b;
				this.hE = a;
				this.items = [];
				this.KG = !1;
				this.$T = vA.selected_bio
			}
			;
		var wA = function() {
				xA || (xA = new uA(yA,!1));
				return xA
			}
			;
		var zA = function(a) {
				var b = z.ck.Za;
				a.KG = !0;
				a.CI = b
			}
			;
		var AA = function(a) {
				window.$.get("/question/" + a.CI + "/bios").then(function(b) {
					a.RQ = !0;
					a.hE = b.msg;
					a.Em()
				})
			}
			;
		var BA = function(a, b, c) {
				b = new qA(b,c);
				b.render(a.QP);
				c.Ci === a.$T && b.Hc(!0);
				b.mb(a);
				a.items.push(b)
			}
			;
		var CA = function(a) {
				var b = a.getSelection();
				b && window.$.post("/question/" + a.CI + "/bio", {
					bio: b.getToken()
				}).then(function() {
					a.ba({
						action: "edit_topic_experience_success",
						attributes: {
							topic_experience_topic_id: b.getToken(),
							topic_experience_topic_content: b.Va()
						}
					})
				})
			}
			;
		z.DA = function() {
			z.G.call(this);
			this.ta = null ;
			this.sa = 0;
			this.az = [];
			this.ht = [];
			this.rB = "最多输入 20 字";
			this.Iw = "最多输入 256 字"
		}
		;
		var EA = function(a, b, c) {
				a.ta || (a.ta = new z.S(null ),
					z.Ij(a.ta, null ),
					a.ta.Ya(b || ""),
				c && (a.ta.X().innerHTML = c),
					a.v().g(a.ta, "afterhide", a.Ph))
			}
			;
		var FA = function(a, b, c) {
				var d = z.J("zh-fav-list-item-place-holder");
				d && z.Q(d, !1);
				a.bA = b[5] ? "" : z.M("span", "zm-fav-list-item-lock", [z.M("i", "icon icon-lock")]);
				d = z.M("span", "zm-favo-list-item-title");
				z.wg(d, b[1]);
				d = z.M("a", {
					"class": "zg-r5px zm-favo-list-item-link",
					href: "javascript:;"
				}, [a.bA, d, z.M("span", {
					className: "meta zg-gray",
					innerHTML: '\x3cspan class\x3d"num"\x3e' + b[3] + '\x3c/span\x3e 条答案 \x3cspan class\x3d"zg-bull"\x3e•\x3c/span\x3e ' + b[4] + " 人关注"
				})]);
				a.bA && a.bA.setAttribute("data-tip", "s$t$私密收藏夹");
				d.setAttribute("data-lid", b[0]);
				z.y(a.ht, b[0]) && z.T.add(d, "zm-favo-list-item-link-active");
				b = z.L("zm-favo-list-item-link", a.Vg);
				c && b ? z.dg(d, b) : a.Vg.appendChild(d)
			}
			;
		var GA = function(a, b) {
				if (a.sa !== b && a.Vg) {
					var c = z.Of("zm-favo-list-item-link", a.Vg);
					z.x(c, function(a) {
						z.T.remove(a, "zm-favo-list-item-link-active")
					}, a)
				}
				a.sa = b
			}
			;
		z.HA = function(a, b, c, d) {
			var f = z.J("zh-fav-head-title")
				, g = z.J("zh-fav-head-description-source");
			b = b || (f ? z.Eg(f) : "");
			c = c || (g ? z.Eg(g) : "");
			a.aE = d || z.Ht;
			IA(a);
			a.dc();
			JA(a, 1);
			z.Q(a.dB, !1);
			a.fr.innerHTML = "取消";
			a.zv.innerHTML = "保存";
			a.ta.Ya("编辑收藏夹");
			a.gi.value = fb(b);
			a.Qj.value = fb(c);
			a.aE[1] ? (z.Q(a.sI, !1),
				z.Q(a.qI, !1),
				z.Q(a.CG, !1)) : (z.Q(a.sI, !0),
				z.Q(a.qI, !0),
				z.Q(a.CG, !0),
				a.vG.setAttribute("checked", !0));
			a.LP = KA(a);
			a.ta.G(!0);
			a.Wl = !0
		}
		;
		var LA = function(a) {
				var b = z.Of("zm-favo-list-item-link", a.Vg);
				z.x(b, function(a) {
					var b = a.getAttribute("data-lid");
					z.T.remove(a, "zm-favo-list-item-link-active");
					z.y(this.ht, +b) && z.T.add(a, "zm-favo-list-item-link-active")
				}, a)
			}
			;
		var IA = function(a) {
				a.mN ? LA(a) : a.B()
			}
			;
		var JA = function(a, b) {
				var c = !!b;
				a.ta.Ya(0 === b ? "添加到收藏夹" : "创建新收藏夹");
				z.Q(a.yQ, !c);
				z.Q(a.rx, c);
				(0,
					window.$)(a.Ww).text("").hide();
				new z.am(a.gi,a.rB);
				new z.am(a.Qj,a.Iw);
				if (1 === b)
					(0,
						window.$)(a.rx).on("change.FavoDiag", "input, textarea, select", function() {
						a.Eg()
					});
				else
					(0,
						window.$)(a.rx).off("change.FavoDiag"),
						a.Ph()
			}
			;
		var KA = function(a) {
				var b = new z.Mn
					, c = z.zn(a.gi.value)
					, d = z.Wa(a.Qj.value === a.Iw ? "" : a.Qj.value);
				d || (d = -1);
				b.add("title", c);
				b.add("description", d);
				b.add("is_public", a.wG.checked ? 1 : 0);
				return b
			}
			;
		var MA = function(a) {
				a.ta.G(!1);
				a.dispatchEvent(NA);
				z.W.Ha({
					type: "ga_click_collect_answer",
					data: {
						count: (0,
							window.$)(".zm-favo-list-item-link-active", a.Vg).length
					}
				})
			}
			;
		var OA = function(a, b, c, d) {
				(0,
					window.$)(c).addClass("btn-pending").text(d ? "保存中" : "创建中");
				a.v().Aa(b, "complete", function() {
					(0,
						window.$)(c).removeClass("btn-pending").text(d ? "保存" : "确认创建")
				})
			}
			;
		var PA = function(a, b, c) {
				c = c || (b ? "保存失败，请重试" : "创建失败，请重试");
				(0,
					window.$)(a).text(c).show()
			}
			;
		var QA = function(a, b) {
				z.Ak({
					category: "collect",
					action: a,
					label: -1 < window.location.pathname.indexOf("collection") ? "collections_sidebar_create_collection" : "collect_answer_box",
					attributes: b
				})
			}
			;
		var RA = function(a, b, c) {
				z.R.call(this);
				this.Ib = a;
				this.entryType = b || "answer";
				this.Oh = null ;
				this.J = window.$.extend({}, this.defaults, c || {})
			}
			;
		var SA = function(a, b, c) {
				var d = +a.YB.text()
					, f = 0;
				(0,
					window.isNaN)(d) || (c === TA.If ? f = 1 : b === TA.If && (f = -1),
					a.YB.text(d + f))
			}
			;
		var UA = function(a) {
				var b = a.O
					, c = a.J
					, d = b === TA.If
					, b = b === TA.Ni
					, f = d ? "取消赞同" : "赞同"
					, g = b ? "取消反对" : "反对，不会显示你的姓名";
				a.pv.toggleClass(c.Tt, d).find(".label").text(f).end().attr("aria-pressed", d).attr("title", f);
				a.gv.toggleClass(c.Tt, b).find(".label").text(g).end().attr("aria-pressed", b).attr("title", g)
			}
			;
		var VA = function(a, b) {
				z.R.call(this);
				this.Ib = a;
				this.entryType = b;
				this.om = null ;
				this.wg = "post" === b ? WA : XA
			}
			;
		var YA = function(a) {
				a.om && "pending" === a.om.state() || (a.om = a.wg.oF(a.Ib).done((0,
					z.r)(a.lp, a)))
			}
			;
		var ZA = function(a, b, c) {
				z.gs.call(this, a, b, c)
			}
			;
		var $A = function(a, b) {
				z.R.call(this);
				this.vb = a;
				this.Vr = cs(this.vb);
				this.isContentEditable = this.vb.isContentEditable();
				this.RU = 30;
				this.Sd = new z.ae(1E3 * this.RU);
				this.qa = z.ck ? z.ck.qa : 0;
				this.nG = b || !1
			}
			;
		var aB = function(a) {
				bB(a, "保存中…");
				a.Sw();
				a.RP()
			}
			;
		z.cB = function(a) {
			a.Sd.stop()
		}
		;
		var dB = function(a) {
				a.oB && ((0,
					window.clearInterval)(a.oB),
					a.oB = null )
			}
			;
		var eB = function(a, b) {
				var c = z.kt(b || (0,
						z.w)());
				/^\d/.test(c) && (c = " " + c);
				bB(a, "已存于" + c)
			}
			;
		var bB = function(a, b, c) {
				var d = (0,
					window.$)(a.dG);
				c ? d.addClass("warning") : d.removeClass("warning");
				z.Q(a.Js, !0);
				z.wg(a.dG, b)
			}
			;
		z.fB = function(a) {
			gB(a);
			var b = {
				qid: a.qa,
				timestamp: (0,
					z.w)()
			};
			(0,
				window.setTimeout)(function() {
				window.$.post("/draft/delete", b)
			}, 500)
		}
		;
		var gB = function(a) {
				a.IG && (a.IG.abort(),
					a.Dr());
				dB(a);
				z.Q(a.Js, !1);
				a.dispatchEvent(hB)
			}
			;
		var iB = function(a) {
				return (0,
					window.$)('\x3cdiv class\x3d"copyright-notification"\x3e\x3cdiv class\x3d"user-image-container"\x3e\x3cimg class\x3d"user-image" src\x3d"' + (a || "") + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"tooltip right noty-tooltip"\x3e\x3cdiv class\x3d"tooltip-arrow arrow"\x3e \x3c/div\x3e\x3cdiv class\x3d"tooltip-inner inner"\x3e 如需转载，请通过私信或评论联系我 \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')
			}
			;
		var jB = function(a, b) {
				var c = -1
					, d = -1
					, f = kB();
				a.on("mousedown", function(a) {
					3 === a.which && (c = a.pageX,
						d = a.pageY)
				});
				a.on("copy", function(g) {
					var h = z.dr()
						, k = Math.floor(22 * Math.random() + 44);
					if (h && h.Kd() && (0,
							z.qb)(h.Kd()).length > k) {
						g.preventDefault();
						(0,
							window.$)(".user-image", f).attr("src", b);
						g = h.Ix();
						var h = h.yx()
							, k = z.yi(window).y
							, m = z.Rf(window).height
							, n = ue(k + 45 + 15, Math.min(g.y, h.y) + k, k + m - 15)
							, q = ue(k + 45 + 15, Math.max(g.y, h.y) + k, k + m - 15);
						z.lB.lb ? (m = (z.Rf(window).width - 265) / 2,
							g = mB ? h.y > g.y ? h.y + k + 10 : g.y + k - 10 : -1 !== d ?
							d + 3 : n + (q - n) / 2 - 15) : (m = -1 !== c ? c + 3 : a.offset().left + a.width() / 2 - 15,
							g = -1 !== d ? d + 3 : n + (q - n) / 2 - 15);
						f.css({
							position: "absolute",
							left: m,
							top: g
						}).finish().fadeIn(300).delay(2E3).fadeOut(300)
					}
					d = c = -1
				})
			}
			;
		var nB = function(a, b, c) {
				function d(a, b) {
					return ["著作权归作者所有。", "商业转载请联系作者获得授权，非商业转载请注明出处。", "作者：" + b, "链接：" + a, "来源：知乎", "", ""]
				}
				function f(a, b, c) {
					return "\x3cdiv\x3e" + d(b, c).join("\x3cbr /\x3e") + a + "\x3c/div\x3e"
				}
				function g(a) {
					var g = z.dr()
						, m = g && (0,
							z.qb)(g.Kd());
					if (m && !(42 > m.length)) {
						if ("object" === typeof a.originalEvent.clipboardData && (a.originalEvent.clipboardData.setData("text/html", f(g.Xf(), b, c)),
								a.originalEvent.clipboardData.setData("text/plain", d(b, c).join("\n") + m),
							0 < a.originalEvent.clipboardData.getData("text/plain").length)) {
							a.preventDefault();
							return
						}
						if (window.getSelection) {
							a = g.Xf();
							var n = (0,
								window.$)(f(a, b, c)).css({
								position: "fixed",
								left: "-9999px"
							}).appendTo("body");
							window.getSelection().selectAllChildren(n.get(0));
							(0,
								window.setTimeout)(function() {
								g.select();
								n.remove()
							}, 200)
						}
					}
				}
				a && b && c && (z.La(b, "http") || (b = window.location.protocol + "//" + window.location.host + b),
					a.on("copy", g))
			}
			;
		var oB = function(a, b) {
				z.R.call(this);
				this.XT = (0,
					window.$)(a).children();
				this.contents = [];
				this.Ag = 0;
				this.Hr = [];
				this.className = b || "";
				this.aD = !1;
				this.delay = 0;
				this.Pq = null ;
				z.x(this.XT, function(a) {
					a = (0,
						window.$)(a).addClass("carousel-inner-content");
					this.contents.push(a);
					this.Hr.push((0,
						window.$)("\x3cdiv\x3e\x3c/div\x3e").addClass("carousel-dot"))
				}, this)
			}
			;
		var pB = function(a, b) {
				if (0 > b || b >= a.contents.length)
					return !1;
				a.Pq && ((0,
					window.clearTimeout)(a.Pq),
					a.Pq = null );
				a.Hr[a.Ag].removeClass("carousel-dot-selected");
				a.contents[a.Ag].hide();
				a.Hr[b].addClass("carousel-dot-selected");
				a.contents[b].show();
				a.Ag = b;
				qB(a);
				return !0
			}
			;
		var qB = function(a) {
				var b = a.Ag;
				a.aD && (a.Pq = (0,
					window.setTimeout)(function() {
					b === a.Ag && (b === a.contents.length - 1 ? pB(a, 0) : a.next())
				}, a.delay))
			}
			;
		var rB = function() {
				function a() {
					function a() {
						return new window.Promise(function(a) {
								k.onAnimationEnd(function() {
									a()
								}, 400)
							}
						)
					}
					function b(a) {
						return z.Lb(a, function(a, b) {
							return a.then(b)
						}, window.Promise.resolve())
					}
					if (!d) {
						d = !0;
						var c = (0,
							window.$)("#copyright-demo-region1")
							, f = (0,
							window.$)("#copyright-demo-region2")
							, g = (0,
							window.$)("#copyright-demo-region3")
							, h = (0,
							window.$)("#copyright-demo-region4")
							, k = (0,
							window.$)("#copyright-demo-indicator");
						(0,
							window.$)(".frame2-region").removeClass("copyright-demo-region-selected");
						b([function() {
							k.show().addClass("indicator-move1");
							c.addClass("copyright-demo-region1-select-animation");
							return a()
						}
							, function() {
								c.removeClass("copyright-demo-region1-select-animation").addClass("copyright-demo-region-selected");
								k.removeClass("indicator-move1").addClass("indicator-move2");
								return a()
							}
							, function() {
								f.addClass("copyright-demo-region-selected");
								k.removeClass("indicator-move2").addClass("indicator-move3");
								return a()
							}
							, function() {
								g.addClass("copyright-demo-region-selected");
								k.removeClass("indicator-move3").addClass("indicator-move4");
								return a()
							}
						]).then(function() {
							h.addClass("copyright-demo-region-selected");
							k.removeClass("indicator-move4");
							d = !1
						})
					}
				}
				function b() {
					var a = (0,
						window.$)(".copyright-demo-pointer")
						, b = (0,
						window.$)(".copyright-demo-noty");
					a.css("opacity", "0");
					b.css("opacity", "0");
					a.addClass("copyright-demo-pointer-show-animation");
					b.addClass("copyright-demo-noty-show-animation");
					(0,
						window.setTimeout)(function() {
						a.removeClass("copyright-demo-pointer-show-animation");
						b.removeClass("copyright-demo-noty-show-animation");
						a.css("opacity",
							"1");
						b.css("opacity", "1")
					}, 1100)
				}
				var c = iB(z.X[2]).addClass("copyright-demo-noty")
					, d = !1
					, f = (0,
					window.$)((0,
					window.$)("#copyright-demo-template").html());
				(0,
					window.$)("#copyright-demo-frame3", f).append(c);
				var g = new oB(f,"copyright-demo");
				g.g("rightShow", function(c) {
					1 === c.offset ? a() : 2 === c.offset && b()
				});
				var c = (0,
						window.$)('\x3cdiv id\x3d"copyright-demo-helper" style\x3d"display: none; position: absolute;"\x3e\x3cp class\x3d"copyright-demo-helper-intro"\x3e 勾选后，我们将限制其他用户的复制操作，并给予提醒 \x3c/p\x3e\x3cp class\x3d"copyright-demo-helper-btn"\x3e 查看演示 \x3c/p\x3e\x3c/div\x3e')
					,
					h = new z.gv({
						I: "data-copyright-demo"
					});
				h.Jp = 250;
				h.oo = 750;
				h.kh(c[0]);
				h.g("trigger", function(a) {
					h.setPosition(new z.Pu(a.anchor,4))
				});
				var k = new z.S;
				g.render(k.X());
				k.Ya("禁止转载演示");
				z.Qj(k, 462);
				(0,
					window.$)(".copyright-demo-helper-btn").click(function() {
					h.G(!1);
					pB(g, 0);
					g.aD = !0;
					g.delay = 3E3;
					qB(g);
					k.G(!0)
				})
			}
			;
		z.sB = function(a, b) {
			z.gs.call(this, !1);
			this.kb = !!a;
			this.pr = !0;
			this.bK = b;
			this.Wb = "\x26nbsp";
			this.Vv = vA || z.X[4];
			this.Ru = this.Qw = this.WE = this.enabled = !0;
			if (z.X.Yd || !z.X.qb())
				this.dz = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e写回答…\x3c/span\x3e'
		}
		;
		var tB = function(a, b) {
				b ? uB(a, b, "添加话题经验，提升回答可信度") : uB(a, b, "填写话题经验，提升回答可信度")
			}
			;
		var vB = function(a, b) {
				b ? uB(a, b, "修改话题经验") : uB(a, b, "填写话题经验，提升回答可信度")
			}
			;
		var uB = function(a, b, c) {
				if (a.Os) {
					if (b = b.trim())
						b = "，" + kb(b),
							b = z.Wa(b);
					a.jD.innerHTML = b + '\x3ca name\x3d"edit_bio" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e' + c + "\x3c/a\x3e"
				}
			}
			;
		var wB = function(a, b, c) {
				b = (0,
					window.$)(b);
				(0,
					window.$)(a.sc).hide();
				c = (0,
					window.$)(c);
				(0,
					window.$)(a.ej).append(b).after(c);
				(Rj || a.Id) && b.addClass("activate-mask-tip-answer-simple");
				a = z.Lm(z.p, !0, "#draft");
				b.on("click", a);
				c.on("click", a)
			}
			;
		var xB = function(a) {
				a.Ek ? a.Ek.show() : (a.Ek = (0,
					window.$)('\x3cdiv class\x3d"question-tip-box-bottom"\x3e确定想要回答你自己提出的问题吗？\x3cbr\x3e如果需要对问题做出更多的解释和说明，请编辑问题描述。 如果需要对其他回答做出回应，请在相应回答下通过评论发布。\x3cbr\x3e\x3cdiv class\x3d"zg-clear"\x3e\x3ca href\x3d"javascript:" class\x3d"zg-right zg-btn zg-btn-blue" name\x3d"confirm"\x3e确定\x3c/a\x3e\x3ca href\x3d"javascript:" class\x3d"zg-right zg-link-gray " name\x3d"cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'),
					a.Ek.on("click", '[name\x3d"cancel"]', function() {
						a.Ek.hide()
					}).on("click",
						'[name\x3d"confirm"]', function() {
							a.Ek.hide();
							(0,
								window.$)(a.bc).hide();
							a.Xa(!0);
							a.Df()
						}),
					(0,
						window.$)(a.bc).after(a.Ek))
			}
			;
		var yB = function(a) {
				var b = (0,
					window.$)("input[name\x3danno-checkbox]", a.sc)[0]
					, c = (0,
					window.$)("label", a.sc)[0];
				a.Hq = b;
				z.ck.kb && (a.Hq.checked = !0);
				z.Oi(c, !0)
			}
			;
		var zB = function(a) {
				var b = wA();
				a.Wv || (zA(b),
					a.v().g(b, "change", a.yz).g(b, "trackRequested", function(a) {
						a.label = "add_answer_box_edit_topic_experience";
						z.Ak(a)
					}));
				a.Wv = !0;
				b.Em()
			}
			;
		var AB = function(a) {
				this.K = (0,
					window.$)(a);
				this.Eb()
			}
			;
		z.BB = function(a) {
			var b = {
				appkey: "3063806388"
			};
			a && (b.title = a);
			window.open("http://service.weibo.com/share/share.php?" + window.$.param(b), "_blank", "width\x3d615,height\x3d505") || (window.location.href = "http://service.weibo.com/share/share.php?" + window.$.param(b))
		}
		;
		z.CB = function(a, b, c, d) {
			b = new DB(b,c,d);
			b.w(a);
			return b
		}
		;
		var EB = function(a) {
				z.Op("answer", a).done(function(a) {
					z.BB(a.msg.sina)
				})
			}
			;
		var DB = function(a, b, c) {
				z.R.call(this);
				this.yd = a;
				this.XJ = b;
				this.iJ = c
			}
			;
		var FB = function(a) {
				var b = a.dH = new z.uw
					, c = [{
					label: z.Zf('\x3cspan class\x3d"ico z-ico-weibo-share"\x3e\x3c/span\x3e新浪微博'),
					value: 0
				}, {
					label: z.Zf('\x3cspan class\x3d"ico z-ico-wechat-share"\x3e\x3c/span\x3e微信扫一扫\x3cimg class\x3d"qrcode-image js-qrcode-image"\x3e'),
					value: 1
				}];
				"answer" !== a.yd && "post" !== a.yd || c.push({
					label: z.Zf('\x3cspan class\x3d"ico z-ico-daily-share"\x3e\x3c/span\x3e读读日报'),
					value: 2
				});
				window.$.each(c, function(a, c) {
					var g = new z.pw(c.label,c.value);
					b.Ca(g)
				});
				nj(b, 1).Xa(!1);
				c = new z.Dw("share",
					b);
				c.oi = !0;
				c.Ob = z.Pw;
				c.w(a.m());
				z.fd(c, a);
				b.g("action", a.ZN.bind(a));
				(0,
					window.$)(b.m()).addClass("share-menu")
			}
			;
		var GB = function() {
				this.kw = []
			}
			;
		var HB = function(a, b, c) {
				var d = b.L().B("SPAN");
				d.className = "goog-submenu-arrow";
				IB(b, d);
				a.X(c).appendChild(d)
			}
			;
		var IB = function(a, b) {
				a.Ld() ? (z.Uh(b, "goog-submenu-arrow-rtl"),
					z.wg(b, a.Fq ? "◄" : "►")) : (z.Wh(b, "goog-submenu-arrow-rtl"),
					z.wg(b, a.Fq ? "►" : "◄"))
			}
			;
		var JB = function(a, b, c, d) {
				z.pw.call(this, a, b, c, d || GB.Y())
			}
			;
		var KB = function(a) {
				a.ce && de(a.ce);
				a.SA && de(a.SA)
			}
			;
		var LB = function(a) {
				z.oj(a.getParent(), function(a) {
					a != this && "function" == typeof a.Bg && (a.Bg(),
						KB(a))
				}, a)
			}
			;
		var MB = function(a, b) {
				!b && a.Ta() && a.Ta().tb(-1);
				a.dispatchEvent(ij(64, b));
				var c = a.Ta();
				b != a.jz && Yh(a.m(), "goog-submenu-open", b);
				if (b != c.U() && (b && (c.ya || c.render(),
						c.tb(-1)),
						c.G(b),
						b)) {
					var c = new z.ww(a.m(),a.Fq ? 6 : 4,a.hQ)
						, d = a.Ta()
						, f = d.m();
					d.U() || (f.style.visibility = "hidden",
						z.Q(f, !0));
					c.ea(f, a.Fq ? 4 : 6);
					d.U() || (z.Q(f, !1),
						f.style.visibility = "visible")
				}
				a.jz = b
			}
			;
		var NB = function(a, b, c) {
				var d = a.v();
				(c ? d.g : d.pa).call(d, b, "enter", a.sR)
			}
			;
		var OB = function(a, b, c, d) {
				JB.call(this, a, b, c, d)
			}
			;
		z.PB = function(a) {
			z.R.call(this);
			z.rc(this.options = {}, QB, a || {});
			this.content = "";
			this.cd = this.We = this.Kk = null
		}
		;
		var RB = function(a) {
				a.getParent() ? a.dispatchEvent("expandRequest") : a.expand()
			}
			;
		var SB = function(a) {
				z.R.call(this);
				this.mq = "votebar-mobile";
				this.Kw = "votebar-mobile-dialog";
				this.TB = a;
				this.gK = z.M("span", "_votebar-holder")
			}
			;
		var TB = function(a) {
				var b = a.TB;
				z.gg(a.gK, b.m());
				z.T.add(b.m(), a.mq);
				a.v().g(b, "action", function() {
					this.yb && (0,
						window.setTimeout)((0,
						z.r)(function() {
						this.yb.G(!1)
					}, this), 150)
				})
			}
			;
		z.UB = function(a) {
			z.R.call(this);
			z.rc(this.options = {}, VB, a || {});
			this.qa = this.options.qa;
			this.sa = this.options.sa;
			this.ur = this.options.ur;
			this.qw = null ;
			this.options.Mj || (this.Jb = !0)
		}
		;
		var WB = function(a, b) {
				return z.Lm(a, b, function() {
					return this.Wn()
				})
			}
			;
		var XB = function(a) {
				var b = z.L("zm-item-answer", a.h) || a.h;
				a.sa = b.getAttribute("data-aid");
				a.Oe = "1" === b.getAttribute("data-isowner");
				a.Za = b.getAttribute("data-atoken");
				a.ei = "1" === b.getAttribute("data-deleted");
				a.ww = +b.getAttribute("data-created");
				a.rP = +b.getAttribute("data-helpful");
				a.gQ = "1" === b.getAttribute("data-good");
				a.pr = "1" === b.getAttribute("data-copyable");
				a.Jj = "1" === b.getAttribute("data-collapsed");
				a.kb = null
			}
			;
		var YB = function(a) {
				var b = new z.PB;
				a.M(b);
				b.w(a.h);
				a.options.Mj || a.g("expandRequest", (0,
					z.r)(a.expand, a));
				a.g("expand", function(a) {
					a.target === a.currentTarget && b.expand()
				});
				a.g("collapse", function(a) {
					a.target === a.currentTarget && b.collapse()
				});
				a.options.Mj && (b.xG && a.Aa("expand", (0,
					z.r)(function(a) {
					a.target === a.currentTarget && this.hz()
				}, a)),
					z.vk(a.h, a.Uj, a))
			}
			;
		var ZB = function(a) {
				if (Kv || a.options.Mj || a.options.pE)
					return !1;
				a = (0,
					window.$)(".js-collapse-body", a.h)[0];
				return !!a && 1 < a.offsetHeight / z.wk.size.height
			}
			;
		var $B = function(a, b) {
				a.Mb = b
			}
			;
		var aC = function(a) {
				var b = z.L("zm-item-vote-info", a.h);
				if (b) {
					a.Ck = new VA(a.sa);
					a.M(a.Ck);
					a.Ck.w(b);
					b = (0,
						window.$)(".zm-item-vote-count", a.h);
					b[0] || (b = (0,
						window.$)(".zm-item-vote-count", a.Mb));
					var c = [b[0], (0,
						window.$)(".zm-votebar .count", a.h)[0]];
					if (c.length) {
						var d = a.Ck;
						a.Ck.on("change", function() {
							z.x(c, function(a) {
								tn(a, d.ib())
							})
						})
					}
				}
			}
			;
		var bC = function(a) {
				var b = z.L("more-actions", a.Mb);
				if (b) {
					var c = {
							share: {
								label: "分享",
								action: a.bP
							},
							fav: {
								label: "收藏",
								action: a.tj
							},
							report: {
								label: "举报",
								action: a.ZO
							},
							nohelp: {
								label: a.rP ? "没有帮助" : "撤销没有帮助",
								action: a.zF
							}
						}
						, d = new z.uw
						, f = function(a) {
							mj(d) && d.Ca(new z.tw);
							var b = new z.pw(c[a].label);
							b.Fa(a);
							d.Ca(b)
						}
						;
					f("share");
					f("fav");
					a.Oe || (f("nohelp"),
					z.X.qb() && f("report"));
					f = new z.Dw("operation",d);
					f.oi = !0;
					z.Fw(f);
					Ew(f);
					f.im = function() {}
					;
					f.Ob = z.Pw;
					f.w(b);
					z.T.add(d.m(), "zh-answer-more-actions");
					a.v().g(d, "action", function(a) {
						var b =
							a.target.W();
						(b = c[b]) && b.action && b.action.call(this, a)
					})
				}
			}
			;
		var cC = function(a) {
				if (!a.we && a.Oe && z.ck && a.sa) {
					a.we = new ZA(!1,"/answer/content","content");
					z.fd(a, a.we);
					a.we.Ru = !0;
					a.we.Qw = !0;
					a.we.iF = z.sB.prototype.iF;
					var b = z.L("zm-item-rich-text", a.h);
					z.bs(a.we, ["id\x3d" + a.qa]);
					a.we.w(b);
					a.v().g(a.we, "shouldUpdateContent", function(a) {
						if (z.oa(a.data))
							return !1
					});
					a.v().g(a.h, "click", function(a) {
						"suggest_edit" === a.target.name && (this.we.Df(),
							(0,
								window.$)(".zh-question-censor-tip", this.h).hide());
						return !0
					})
				}
			}
			;
		var dC = function(a) {
				if (a.Dq)
					a.Dq.G(!0);
				else {
					var b = eC(a);
					b && (z.oA(b, new z.ww(a.qL,1,!0), 0, new z.ei(5,0,5,0)),
						fC(a, b),
						gC(a, b),
						a.Dq = b)
				}
			}
			;
		var eC = function(a) {
				var b = (0,
					window.$)("a[name\x3dadmin]", a.ii)[0];
				if (b) {
					a.qL = b;
					hC = 0;
					var c = new z.nA;
					a.M(c);
					c.attach(b, 5);
					var d = a.Jj ? new z.pw("取消折叠") : new OB("折叠");
					d.Fa("collapse");
					var f = function(a, b) {
							var c = new z.pw(b + 1 + " " + a.label);
							c.Fa(a.value);
							d.Ca(c)
						}
						;
					a.Jj || iC("answer", "collapse").then(function(a) {
						z.x(a, f);
						z.T.add(d.Ta().m(), "manage-menu")
					});
					b = new z.pw("删除");
					b.Fa("delete");
					c.Ca(d);
					c.Ca(b);
					c.render(a.h);
					z.T.add(c.m(), "manage-menu");
					return c
				}
			}
			;
		var fC = function(a, b) {
				a.v().g(b, "action", function(a) {
					var b = a.target;
					a = b.W();
					var b = b.m()
						, f = new z.Uo;
					"collapse" === a ? (f.add("answer_id", this.sa).add("action", "collapse2").add("collapse", this.Jj ? "cancel" : "done"),
						b.setAttribute("data-op", this.Jj ? "uncollapse-answer" : "collapse-answer"),
						b.setAttribute("data-action", "/manage?" + f.toString()),
						jC(this, b)) : "delete" === a ? (f.add("answer_id", this.sa).add("action", "remove_answer2"),
						b.setAttribute("data-op", "remove-answer"),
						b.setAttribute("data-action", "/manage?" + f.toString()),
						jC(this, b)) : sa(a) && (b = new z.Uo,
						b.add("answer_id", this.sa).add("action", "collapse2").add("collapse", this.Jj ? "cancel" : "done").add("reason", a),
						Yx("/manage", b.toString(), (0,
							z.r)(this.PH, this)))
				})
			}
			;
		var jC = function(a, b) {
				(new z.Xx).open(b, {
					id: a.sa,
					type: "answer"
				}, (0,
					z.r)(a.PH, a))
			}
			;
		var kC = function(a) {
				function b() {
					c();
					var b = a.Dq.Yh(0);
					b.Ta && b.Ta() && (b.vu(),
						b.Ta().tb(0))
				}
				function c() {
					dC(a);
					a.Dq.tb(0)
				}
				var d = new AB(a.h)
					, d = lC.mK(d.getItem() || a.h);
				mu(mu(mu(mu(mu(mu(d.register("v", function() {
					this.pb && this.pb.Ku()
				}, a), {
					group: "操作",
					name: "赞同"
				}).register("d", function() {
					this.pb && this.pb.Ju()
				}, a), {
					group: "操作",
					name: "反对"
				}).register("s c", a.tj, a), {
					group: "操作",
					name: "收藏"
				}).register("t", a.ws, a), {
					group: "操作",
					name: "感谢"
				}).register("c", a.mg, a), {
					group: "操作",
					name: "打开评论"
				}).register("shift+c", a.hs, a), {
					group: "操作",
					name: "定位到评论框"
				});
				var f = z.Ad ? "⌘" : "ctrl";
				z.lB.Fy && (0,
					window.$)("a[name\x3dadmin]", a.ii)[0] && mu(mu(d.register("meta+.", c), {
					group: "管理",
					name: "展开菜单",
					key: f + "+."
				}).register("meta+k", b), {
					group: "管理",
					name: "展开折叠子菜单 (Kill)",
					key: f + "+k"
				})
			}
			;
		var gC = function(a, b) {
				a.v().g(b, "show", function() {
					z.T.add(this.Mb, "zm-item-meta-has-menu")
				}).g(b, "hide", function(a) {
					a.currentTarget === a.target && z.T.remove(this.Mb, "zm-item-meta-has-menu")
				})
			}
			;
		var mC = function(a) {
				var b = (0,
					window.$)('[name\x3d"comment_opt"]', a.Mb);
				if (b.length) {
					var c = b.data()
						, d = new z.uw
						, f = new z.kA("禁止转载");
					f.Hc(!c.copyable);
					d.Ca(f);
					d.Ca(new z.tw);
					nC(a, d);
					d.Ca(new z.tw);
					d.Ca(new z.pw("删除"));
					a.v().g(d, "action", a.iO);
					gC(a, d);
					z.T.add(d.m(), "zg-gray-normal");
					(0,
						window.$)(d.m()).addClass("setting-menu");
					a = new z.Dw("comment",d);
					a.oi = !0;
					z.Fw(a);
					Ew(a);
					a.Ob = z.Pw;
					a.w(b[0])
				}
			}
			;
		var oC = function(a) {
				if (!a.ED || !a.ED.Rb()) {
					var b = new z.V(!0);
					a.v().Aa(b, "success", function(a) {
						if ((a = z.sf(a.target)) && !a.r) {
							var b = a.msg;
							z.x(this.rw, function(a) {
								a.W() === b && a.Hc(!0)
							});
							this.qw = b
						} else
							z.U.message(a.msg)
					});
					b.ajax("/answer/comment_permission?answer_id\x3d" + a.sa, null , "GET");
					a.ED = b
				}
			}
			;
		var nC = function(a, b) {
				a.rw = [];
				z.dc(pC, function(a, d) {
					var f = new z.kA(a);
					f.Fa(d);
					f.Hc(d === this.qw);
					this.rw.push(f);
					b.Ca(f)
				}, a)
			}
			;
		z.qC = function(a) {
			var b = new z.V(!0);
			a.v().Aa(b, "success", function() {
				z.Q(this.h, !this.ei);
				this.ei ? this.uv = "set_delete" : (cC(this),
					this.uv = "cancel_delete");
				this.dispatchEvent("change");
				(0,
					window.$)(this.h).parent(".zm-item").hide()
			});
			b.ajax("/answer/" + (a.ei ? "remove" : "unremove"), "aid\x3d" + a.sa)
		}
		;
		var rC = function(a) {
				z.fz.call(this, a)
			}
			;
		var sC = function() {
				z.fz.call(this, "question")
			}
			;
		var tC = function(a) {
				z.vk(a.h, function() {
					(0,
						z.uC)("question", this.Fg, "touch")
				}, a)
			}
			;
		z.vC = function() {
			z.fz.call(this, "answer")
		}
		;
		var wC = function(a) {
				return z.L("zm-item-answer", a) || z.L("entry-body", a)
			}
			;
		var xC = function(a, b) {
				(0,
					window.$)(".feed-question-detail-item", a.h).toggleClass("question-detail-expanded", b)
			}
			;
		var yC = function() {
				z.fz.call(this, "column")
			}
			;
		var zC = function() {
				z.fz.call(this, "post")
			}
			;
		var AC = function(a) {
				var b = new z.PB;
				a.M(b);
				b.w(a.h);
				a.g("expandRequest", (0,
					z.r)(a.expand, a));
				a.g("expand", function(a) {
					a.target === a.currentTarget && b.expand()
				});
				a.g("collapse", function(a) {
					a.target === a.currentTarget && b.collapse()
				});
				b.xG && a.Aa("expand", (0,
					z.r)(function(a) {
					a.target === a.currentTarget && this.hz()
				}, a));
				z.vk(a.h, a.Uj, a)
			}
			;
		var BC = function(a) {
				var b = z.L("zm-item-vote-info", a.h);
				if (b) {
					var c = new VA(a.Ib,a.entryType);
					z.fd(a, c);
					c.w(b);
					a.pb && a.v().g(a.pb, "change", function() {
						YA(c)
					}).g(c, "change", function() {
						var a = z.L("zm-item-vote-count", this.h)
							, b = (0,
							window.$)(".zm-votebar .count", this.h)[0];
						a && tn(a, c.ib());
						b && tn(b, c.ib())
					})
				}
			}
			;
		var CC = function() {
				z.fz.call(this, "roundtable")
			}
			;
		z.DC = function(a) {
			var b = a.getAttribute("data-type");
			return (b = {
				ac: cA,
				ad: iA,
				p: zC,
				a: z.vC,
				q: sC,
				r: CC,
				c: yC,
				ANSWER: z.vC,
				ARTICLE: zC
			}[b]) ? new b : wC(a) ? new z.vC : new z.R
		}
		;
		z.EC = function() {
			this.ox = ["zg-btn-follow", "zg-btn-unfollow"];
			this.px = "people"
		}
		;
		z.FC = function(a) {
			z.G.call(this);
			this.na = null ;
			this.h = a;
			a = z.C || z.ld || z.D && !z.E("531") && "TEXTAREA" == a.tagName;
			this.S = new z.ee(this);
			this.S.g(this.h, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
		}
		;
		var GC = function(a) {
				null  != a.na && (de(a.na),
					a.na = null )
			}
			;
		var HC = function(a) {
				a = new ud(a.hc);
				a.type = "input";
				return a
			}
			;
		var IC = function(a, b, c, d) {
				z.G.call(this);
				this.Rh = a;
				this.CE = b;
				this.pt = c;
				this.kN = d || JC;
				a.removeAttribute("maxlength");
				this.By = new z.FC(a);
				z.F(this.By, "input", this.zz, !1, this);
				this.al()
			}
			;
		z.KC = function(a) {
			z.G.call(this);
			this.ta = null ;
			this.qa = a;
			this.ku = 0;
			this.tI = ""
		}
		;
		var LC = function(a, b) {
				var c = z.Of("zm-menu-item-link", a.aI);
				z.x(c, function(a, c) {
					var g = !z.y(b, c);
					z.Q(a, g)
				}, a)
			}
			;
		var MC = function() {
				z.G.call(this)
			}
			;
		z.NC = function(a) {
			function b() {
				var b;
				OC || (OC = new MC,
					OC.init());
				b = OC;
				b.Pi = a;
				b.jL = a.id.split("-")[1];
				b.show()
			}
			function c(b) {
				if (!a.getAttribute("data-disabled")) {
					var c;
					PC || (PC = new z.KC,
						PC.init());
					c = PC;
					c.Pi = a;
					c.qa = a.id.split("-")[1];
					"redirect" === b ? c.show() : (z.Uj("/question/unredirect", null , "POST", "qid\x3d" + c.qa + "\x26rqid\x3d" + c.ku),
						c.Pi.innerHTML = "重定向已撤销",
						c.Pi.setAttribute("data-disabled", 1))
				}
			}
			function d() {
				function b() {
					var f = d.value
						, g = a.getAttribute("id").split("-")[1]
						, f = (new z.Uo).add("revision", g).add("reason",
						f)
						, q = new z.V(!0);
					q.on("success", function() {
						var a = z.sf(q);
						if (!a)
							return z.U.message("网络异常");
						if (a.r)
							return qv(this, a.msg);
						c.G(!1);
						a.msg ? window.location.href = a.msg : window.location.reload()
					});
					q.ajax("/revert", f.toString())
				}
				var c = z.U.confirm("撤销", '\x3cdiv class\x3d"zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input content" title\x3d"请输入撤销原因" placeholder\x3d"请输入撤销原因"\x3e\x3c/textarea\x3e\x3c/div\x3e', function(a) {
					if (a)
						return b(),
							!1
				})
					, d = z.L("content", c.X());
				new z.am(d);
				new z.Zn(d);
				new IC(d,null ,
					200)
			}
			var f = a && a.name;
			if (f)
				switch (f) {
					case "adminflag":
						b();
						break;
					case "redirect":
					case "cancel_redirect":
						c(f);
						break;
					case "revert":
						d()
				}
		}
		;
		z.QC = function(a) {
			(0,
				window.$)(a).on("click", 'a[name\x3d"revert"]', function() {
				z.NC(this)
			})
		}
		;
		z.RC = function(a) {
			var b = {
				bq: !1,
				pX: !1
			};
			return function(c) {
				if (!1 === c)
					return !1;
				c = {};
				z.rc(c, b, a || {});
				if (c.bq && !z.X.As)
					return z.U.alert('\x3ca href\x3d"/question/23261456" target\x3d"_blank"\x3e如何参与知乎话题的公共编辑？\x3c/a\x3e'),
						!1;
				if (c.pm && !z.ck.qN)
					return z.U.alert('\x3cp\x3e创建较久或已有较多讨论的问题限制公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与问题公共编辑？\x3c/a\x3e\x3c/p\x3e'),
						!1
			}
		}
		;
		z.SC = function(a, b, c) {
			z.pw.call(this, a, b, c);
			this.zi(!0)
		}
		;
		z.TC = function() {}
		;
		z.UC = function() {
			this.Sv = "toolbar"
		}
		;
		var VC = function() {}
			;
		z.WC = function(a, b, c) {
			z.el.call(this, a, b || VC.Y(), c)
		}
		;
		var XC = function() {}
			;
		var YC = function(a, b) {
				return b.B("DIV", "goog-color-menu-button-indicator", a)
			}
			;
		var ZC = function(a, b) {
				if (a && a.firstChild) {
					var c;
					if (c = b)
						c = !!(an.test("#" == b.charAt(0) ? b : "#" + b) || cn(b).length || en && en[b.toLowerCase()]);
					c = c ? $m(b).Cs : null ;
					a.firstChild.style.borderBottomColor = c || (z.C ? "" : "transparent")
				}
			}
			;
		var $C = function(a, b, c, d) {
				z.hq.call(this, a, b, c, null , d)
			}
			;
		z.aD = function() {}
		;
		var bD = function(a, b, c, d) {
				for (var f = [], g = 0, h = 0; g < c.height; g++) {
					for (var k = [], m = 0; m < c.width; m++) {
						var n = b && b[h++];
						k.push(cD(a, n, d))
					}
					f.push(dD(a, k, d))
				}
				return a.VD(f, d)
			}
			;
		var dD = function(a, b, c) {
				a = c.B("TR", a.T() + "-row", b);
				Nh(a, "row");
				return a
			}
			;
		var cD = function(a, b, c) {
				a = c.B("TD", {
					"class": a.T() + "-cell",
					id: a.T() + "-cell-" + eD++
				}, b);
				Nh(a, "gridcell");
				P(a, "selected", !1);
				if (!z.Eg(a) && !Rh(a)) {
					var d;
					b = new $C(a);
					for (c = ""; !c && (d = Be(b)); )
						1 == d.nodeType && (c = Rh(d) || d.title);
					(d = c) && P(a, "label", d)
				}
				return a
			}
			;
		var fD = function(a, b, c) {
				for (b = b.m(); c && 1 == c.nodeType && c != b; ) {
					if ("TD" == c.tagName && z.Th(c, a.T() + "-cell"))
						return c.firstChild;
					c = c.parentNode
				}
				return null
			}
			;
		var gD = function(a) {
				z.G.call(this);
				this.Ke = [];
				hD(this, a)
			}
			;
		var hD = function(a, b) {
				b && (z.x(b, function(a) {
					this.ym(a, !1)
				}, a),
					z.Wb(a.Ke, b))
			}
			;
		z.iD = function(a, b, c) {
			Yk.call(this, a, b || z.aD.Y(), c);
			this.Si &= -89;
			this.Gn = new jD;
			this.Gn.mb(this);
			this.Vy = -1
		}
		;
		z.kD = function(a, b) {
			if (a.m())
				throw Error("Component already rendered");
			a.xc = sa(b) ? new z.Hf(b,void 0) : b;
			lD(a)
		}
		;
		var mD = function(a) {
				var b = a.Va();
				return b && b[a.Sa]
			}
			;
		var nD = function(a, b, c) {
				if (a.m()) {
					var d = a.Va();
					if (d && 0 <= b && b < d.length) {
						var f;
						f = (f = mD(a)) ? f.parentNode : null ;
						a.Gn.m() != f && (a.Gn.h = f);
						f = a.Gn;
						f.Jc(c);
						!!(f.O & 2) == c && (b = d[b]) && (b = b ? b.parentNode : null ,
							Yh(b, a.N.T() + "-cell-hover", c),
							c ? P(a.h, "activedescendant", b.id) : b.id == Ph(a.h, "activedescendant") && a.h.removeAttribute("aria-activedescendant"))
					}
				}
			}
			;
		var lD = function(a) {
				var b = a.Va();
				if (b)
					if (a.xc && a.xc.width) {
						if (b = Math.ceil(b.length / a.xc.width),
							!sa(a.xc.height) || a.xc.height < b)
							a.xc.height = b
					} else
						b = Math.ceil(Math.sqrt(b.length)),
							a.xc = new z.Hf(b,b);
				else
					a.xc = new z.Hf(0,0)
			}
			;
		var jD = function() {
				Yk.call(this, null );
				this.sk |= 2
			}
			;
		var oD = function(a, b, c) {
				this.jr = a || [];
				z.iD.call(this, null , b || z.aD.Y(), c);
				this.jr = this.jr;
				this.xt = this.Ys = null ;
				this.ka(pD(this))
			}
			;
		var pD = function(a) {
				return z.Kb(a.jr, function(a, c) {
					var d = this.L().B("DIV", {
						"class": this.N.T() + "-colorswatch",
						style: "background-color:" + a
					}), f;
					this.Ys && this.Ys[c] ? f = this.Ys[c] : "#" == a.charAt(0) ? (f = bn(a),
						f = "RGB (" + [(0,
								window.parseInt)(f.substr(1, 2), 16), (0,
								window.parseInt)(f.substr(3, 2), 16), (0,
								window.parseInt)(f.substr(5, 2), 16)].join(", ") + ")") : f = a;
					d.title = f;
					return d
				}, a)
			}
			;
		var qD = function(a) {
				if (a)
					try {
						return $m(a).Cs
					} catch (b) {}
				return null
			}
			;
		var rD = function(a, b, c, d) {
				z.Dw.call(this, a, b, c || XC.Y(), d)
			}
			;
		var sD = function(a) {
				var b = new z.uw(a);
				z.dc(tD, function(c) {
					c = new oD(c,null ,a);
					z.kD(c, 8);
					b.M(c, !0)
				});
				return b
			}
			;
		var uD = function() {}
			;
		var vD = function() {}
			;
		var wD = function(a, b, c, d) {
				rD.call(this, a, b, c || vD.Y(), d)
			}
			;
		var xD = function(a, b, c, d) {
				z.Dw.call(this, a, b, c || uD.Y(), d)
			}
			;
		var yD = function(a, b, c, d, f) {
				z.Dw.call(this, a, b, c, d, f || new sw("listbox"));
				this.Gw = this.Va();
				this.Ay = null ;
				this.IA("listbox")
			}
			;
		var zD = function(a, b) {
				a.Gw = b;
				AD(a)
			}
			;
		var BD = function(a, b) {
				a.oa = new gD;
				b && z.oj(b, function(a) {
					CD(a);
					this.oa.Ca(a)
				}, a);
				DD(a)
			}
			;
		var DD = function(a) {
				a.oa && a.v().g(a.oa, "select", a.wj)
			}
			;
		var AD = function(a) {
				var b = a.of();
				a.ka(b ? b.Ig() : a.Gw);
				var c = a.N.X(a.m());
				c && a.L().isElement(c) && (null  == a.Ay && (a.Ay = Rh(c)),
					b = (b = b ? b.m() : null ) ? Rh(b) : a.Ay,
					P(c, "label", b),
					ED(a))
			}
			;
		var ED = function(a) {
				var b = a.N;
				if (b && (b = b.X(a.m()))) {
					var c = a.h;
					b.id || (b.id = z.gj(z.fj.Y()));
					Nh(b, "option");
					P(c, "activedescendant", b.id);
					a.oa && (c = a.oa.jb(),
						P(b, "setsize", FD(c)),
						a = a.oa.pj(),
						P(b, "posinset", 0 <= a ? FD(Yb(c, 0, a + 1)) : 0))
				}
			}
			;
		var FD = function(a) {
				return Ob(a, function(a) {
					return a instanceof z.pw
				})
			}
			;
		var CD = function(a) {
				a.IA(a instanceof z.pw ? "option" : "separator")
			}
			;
		var GD = function(a, b, c, d) {
				yD.call(this, a, b, c || uD.Y(), d)
			}
			;
		var HD = function(a) {
				var b = a.indexOf(",");
				a: for (a = (-1 != b ? a.substring(0, b) : a).toLowerCase(),
					        b = 0; 2 > b; b++) {
					var c = "\"'".charAt(b);
					if (a.charAt(0) == c && a.charAt(a.length - 1) == c) {
						a = a.substring(1, a.length - 1);
						break a
					}
				}
				return a
			}
			;
		var ID = function(a, b) {
				z.x(b, function(b) {
					var d = b.value
						, f = HD(d);
					b = new z.SC(b.caption,d,a.L());
					jj(b, f);
					a.Ca(b);
					b.X().style.fontFamily = d
				})
			}
			;
		var JD = function(a) {
				z.x(KD, function(b) {
					var c = b.value;
					b = new z.SC(b.caption,c,a.L());
					a.Ca(b);
					b = b.X();
					b.style.fontSize = (LD[c] || 10) + "px";
					b.firstChild.style.height = "1.1em"
				})
			}
			;
		var MD = function(a) {
				z.x(ND, function(b) {
					var c = b.caption;
					b = b.Da;
					var d = a.L()
						, c = new z.SC(d.B("DIV", null , c),b,d);
					jj(c, b);
					a.Ca(c)
				})
			}
			;
		z.OD = function(a, b, c, d, f, g) {
			c = new z.WC(PD(c, d, g),f,g);
			jj(c, a);
			c.ud(b);
			return c
		}
		;
		z.QD = function(a, b, c, d, f, g) {
			a = z.OD(a, b, c, d, f, g);
			a.Ub(16, !0);
			return a
		}
		;
		var RD = function(a, b, c, d, f, g) {
				f = new GD(null ,null ,f,g);
				d && z.x(d.split(/\s+/), f.Dh, f);
				f.Dh("goog-toolbar-select");
				zD(f, c);
				jj(f, a);
				f.ud(b);
				return f
			}
			;
		var SD = function(a, b, c, d, f, g) {
				c = new wD(PD(c, d, g),null ,f,g);
				jj(c, a);
				c.ud(b);
				return c
			}
			;
		var PD = function(a, b, c) {
				a && "" != a || !z.B || z.E("1.9a") || (a = " ");
				return (c || z.I()).B("DIV", b ? {
					"class": b
				} : null , a)
			}
			;
		var TD = function(a) {
				var b = "en-us".replace(/_/, "-").toLowerCase()
					, c = [];
				b in UD && (c = UD[b]);
				c.length && ID(a, c);
				ID(a, VD)
			}
			;
		var WD = function(a, b, c, d, f, g) {
				var h = z.OD(a, b, c, d, f, g);
				h.Gi = function(a) {
					h.Xa(a)
				}
				;
				return h
			}
			;
		var XD = function(a, b) {
				var c = b;
				try {
					if (z.C)
						var d = "000000" + c.toString(16)
							, f = d.substr(d.length - 6, 6)
							, c = "#" + f.substring(4, 6) + f.substring(2, 4) + f.substring(0, 2);
					c != a.W() && a.Fa(c)
				} catch (g) {}
			}
			;
		z.YD = function(a) {
			z.ix.call(this);
			this.ha = new z.ee(this);
			this.VF = z.M("div", {
				style: "display:none"
			});
			this.h = this.tc = null ;
			this.J = {};
			z.rc(this.J, this.defaults, a || {})
		}
		;
		var ZD = function(a) {
				if (a.aq) {
					var b = (0,
						window.$)(a.aq);
					b.stop().text("草稿已经保存").fadeTo(600, .5).delay(3E3).fadeOut(600, function() {
						b.text("")
					})
				}
			}
			;
		var $D = function(a) {
				a.dispatchEvent("willEnterFullScreen") && (a.HE || (a.vP = window.history.length),
					a.HE = !0,
					aE(a, "writing"),
					a.lK = z.Pg(z.I((z.t || window).document)),
					z.gg(a.VF, a.J.zk),
					a.tc.appendChild(a.J.zk),
					z.T.add(window.document.body, a.J.Tn),
					a.Bb = z.L(a.J.YU, a.h),
					a.Bb.appendChild(a.aq),
					bE(a),
				(0,
					z.qb)(z.Eg(a.F.Ia)) || a.F.Vf(),
					a.dispatchEvent("enterFullScreen"))
			}
			;
		var cE = function(a) {
				!Sj && a.HE && a.vP !== window.history.length ? window.history.back() : aE(a, "");
				a.Bb.removeChild(a.aq);
				a.eJ(!1);
				a.h.onscroll = null ;
				a.ha.pa(window.document, "keydown", a.Zo);
				z.gg(a.J.zk, a.VF);
				z.T.remove(window.document.body, a.J.Tn);
				window.scrollTo(a.lK.x, a.lK.y);
				a.dispatchEvent("exitFullScreen")
			}
			;
		var aE = function(a, b) {
				a.ha.pa(window, "hashchange", a.FH);
				window.location.hash = b || "";
				(0,
					window.setTimeout)((0,
					z.r)(function() {
					this.ha.g(window, "hashchange", this.FH)
				}, a))
			}
			;
		var bE = function(a) {
				var b = a.h;
				b.scrollTop = 0;
				var c = a.Bb.getBoundingClientRect().top;
				b.onscroll = z.Db((0,
					z.r)(a.eJ, a), function() {
					return b.scrollTop > c
				});
				a.ha.g(window.document, "keydown", a.Zo)
			}
			;
		var dE = function() {
				z.cw.call(this, {
					use: ["autoload", "dataPagingSource"]
				})
			}
			;
		z.eE = function() {
			z.R.call(this);
			this.bh = "roundtable";
			this.up = z.It
		}
		;
		var fE = function(a) {
				var b = new z.PB({
					sw: "content",
					yJ: "script.content"
				});
				a.M(b);
				b.w(a.h);
				a.g("expandRequest", (0,
					z.r)(a.expand, a));
				a.g("expand", function(a) {
					a.target === a.currentTarget && b.expand()
				});
				a.g("collapse", function(a) {
					a.target === a.currentTarget && b.collapse()
				})
			}
			;
		z.gE = function() {
			var a = (0,
				window.$)(".roundtable-profile")
				, b = (0,
				window.$)(".share", a)
				, c = b.data("token");
			if (b.length) {
				var d = window.location.protocol + "//" + window.location.host + "/roundtable/" + c;
				z.CB(b.get(0), "roundtable", c, d).g("trackRequested", function(a) {
					a.label = "roundtable";
					z.Ak(a)
				})
			}
			(0,
				window.$)(".follow", a).click(z.Lm(function() {
				var b = this;
				(0,
					z.hE)(b, "roundtable", function(c) {
					(0,
						window.$)(".label", b).text(c ? "取消关注" : "关注");
					var d = (0,
						window.$)(".followers .count", a);
					c = Number(d.data("count")) + (c ? 1 : -1);
					d.length && (c = Math.max(c, 0),
						d.text(c).data("count", c))
				}, ["button-success", "button-cancel"])
			}))
		}
		;
		var iE = function(a) {
				return window.$.post("/settings/account/unlock_with_digits", a)
			}
			;
		var jE = function(a) {
				return window.$.post("/settings/account/unlock_with_password", a)
			}
			;
		z.kE = function() {
			function a(a, b) {
				return !!z.Pb(a, function(a) {
					return a.challenge_type === b
				})
			}
			function b(a) {
				var b = {
					value: a.challenge_type
				};
				switch (b.value) {
					case "password":
						b.label = "使用知乎密码验证";
						break;
					case "phone_digits":
						b.label = z.Na("使用手机 %s 验证", a.hint);
						break;
					case "email_digits":
						b.label = z.Na("使用邮箱 %s 验证", a.hint)
				}
				return b
			}
			var c = window.$.Deferred();
			if (z.ul.get("unlock_ticket"))
				return c.resolve().promise();
			var d = z.U.async({
				title: "验证身份",
				modal: !0,
				mJ: "正在进行安全验证，请稍等",
				className: "settings-account-unlock-dialog",
				onload: function(a,
				                 b) {
					function d(a) {
						var b = (0,
							window.$)(".panel", k)
							, c = a ? b.filter(function() {
							return (0,
									window.$)(this).data("match") === a
						}) : b.first();
						b.not(c.show()).hide()
					}
					var k = (0,
						window.$)("form", a)
						, m = (0,
						window.$)(".submit", k)
						, n = (0,
						window.$)(".error-label-container", k)
						, q = (0,
						window.$)(".hint-label-container", k)
						, A = (0,
						window.$)("select", k).change(function() {
						d(this.value);
						n.text("");
						q.text("")
					});
					(0,
						window.$)(".js-send-digits", k).each(function() {
						var a = (0,
							window.$)(this)
							, c = a.closest(".panel");
						(0,
							window.$)("input", c);
						var d =
							c.data("match")
							, a = z.vl(a, "email_digits" === d ? 10 : 60, function(a) {
							return a ? "%s 秒后即可重发" : "重发验证码"
						}, function() {
							q.text("");
							window.$.post("/settings/account/send_unlock_digits", {
								type: d
							}).then(function() {
								q.text("验证码已发送至你的" + ("email_digits" === d ? "邮箱" : "手机"))
							})
						});
						z.fd(b, a)
					});
					var H = k.validate({
						messages: z.lE,
						ignore: "input.text:hidden",
						errorLabelContainer: n,
						submitHandler: z.wl(m, function() {
							var a = "password" === A.val();
							return (a ? jE : iE)((0,
								window.$)(":input:visible", k).serialize()).then(function(d) {
								if (d.success)
									b.G(!1),
										c.resolve();
								else if (d = d.payload,
										d.fields)
									H.showErrors(d.fields);
								else if (d.message) {
									var f = {};
									f[a ? "password" : "digits"] = d.message;
									H.showErrors(f)
								}
							})
						})
					});
					A.change();
					(0,
						window.$)("input.text:visible", k).focus()
				},
				tw: window.$.get("/settings/account/request_unlock").then(function(f) {
					if (f.success)
						return (0,
							window.setTimeout)(function() {
							d.G(!1);
							c.resolve()
						}, 3E3),
							'\x3cp class\x3d"z-text-muted"\x3e验证成功\x3c/p\x3e';
					var g = f.payload;
					return window.$.get("/node/SettingsRequestUnlockTemplate").then(function(c) {
						return (0,
							z.ts)(c,
							{
								canUsePanel: z.Ca(a, g),
								each: z.x,
								options: z.Kb(g, b)
							})
					})
				})
			});
			return c.promise()
		}
		;
		ba = [];
		ea = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global ? window.global : this;
		ga = 0;
		hf = hf || {};
		z.t = this;
		z.xa = "closure_uid_" + (1E9 * Math.random() >>> 0);
		ya = 0;
		z.w = Date.now || function() {
				return +new Date
			}
		;
		Ga = null ;
		var Oh;
		z.v(Ka, Error);
		Ka.prototype.name = "CustomError";
		var Lf;
		var Za, ab, bb, cb, db, eb, Ya, jb, nb, tb;
		z.qb = String.prototype.trim ? function(a) {
			return a.trim()
		}
			: function(a) {
			return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
		}
		;
		Za = /&/g;
		ab = /</g;
		bb = />/g;
		cb = /"/g;
		db = /'/g;
		eb = /\x00/g;
		Ya = /[\x00&<>"']/;
		jb = /&([^;\s<&]+);?/g;
		nb = String.prototype.repeat ? function(a, b) {
			return a.repeat(b)
		}
			: function(a, b) {
			return Array(b + 1).join(a)
		}
		;
		tb = 2147483648 * Math.random() | 0;
		wb.prototype.get = function() {
			var a;
			0 < this.yt ? (this.yt--,
				a = this.Bs,
				this.Bs = a.next,
				a.next = null ) : a = this.UM();
			return a
		}
		;
		wb.prototype.put = function(a) {
			this.sp(a);
			this.yt < this.wQ && (this.yt++,
				a.next = this.Bs,
				this.Bs = a)
		}
		;
		var Jc = new wb(function() {
				return new yb
			}
			,function(a) {
				a.reset()
			}
			,100);
		xb.prototype.add = function(a, b) {
			var c = Jc.get();
			c.set(a, b);
			this.Vu ? this.Vu.next = c : this.Tm = c;
			this.Vu = c
		}
		;
		xb.prototype.remove = function() {
			var a = null ;
			this.Tm && (a = this.Tm,
				this.Tm = this.Tm.next,
			this.Tm || (this.Vu = null ),
				a.next = null );
			return a
		}
		;
		yb.prototype.set = function(a, b) {
			this.fn = a;
			this.scope = b;
			this.next = null
		}
		;
		yb.prototype.reset = function() {
			this.next = this.scope = this.fn = null
		}
		;
		z.mE = z.zb(!1);
		z.Pw = z.zb(!0);
		z.uz = z.zb(null );
		var bc;
		a: {
			var nE = z.t.navigator;
			if (nE) {
				var oE = nE.userAgent;
				if (oE) {
					bc = oE;
					break a
				}
			}
			bc = ""
		}
		;var sc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
		var Ic;
		var Dc, Fc = !1, Gc = new xb;
		var Lc = 0
			, Nc = 2
			, Oc = 3;
		Pc.prototype.reset = function() {
			this.context = this.hm = this.Xo = this.Vi = null ;
			this.always = !1
		}
		;
		var Rc = new wb(function() {
				return new Pc
			}
			,function(a) {
				a.reset()
			}
			,100);
		Kc.prototype.then = function(a, b, c) {
			return Xc(this, z.ta(a) ? a : null , z.ta(b) ? b : null , c)
		}
		;
		Ia(Kc);
		Kc.prototype.cancel = function(a) {
			this.O == Lc && Cc(function() {
				var b = new Yc(a);
				Sc(this, b)
			}, this)
		}
		;
		Kc.prototype.eV = function(a) {
			this.O = Lc;
			Mc(this, Nc, a)
		}
		;
		Kc.prototype.fV = function(a) {
			this.O = Lc;
			Mc(this, Oc, a)
		}
		;
		Kc.prototype.Sr = function() {
			for (var a = null ; a = Tc(this); )
				Uc(this, a, this.O, this.gh);
			this.bx = !1
		}
		;
		var bd = Ac;
		z.v(Yc, Ka);
		Yc.prototype.name = "cancel";
		var dd = 0
			, ed = {};
		z.cd.prototype.Gd = !1;
		z.cd.prototype.H = function() {
			if (!this.Gd && (this.Gd = !0,
					this.C(),
				0 != dd)) {
				var a = wa(this);
				delete ed[a]
			}
		}
		;
		z.cd.prototype.C = function() {
			if (this.bk)
				for (; this.bk.length; )
					this.bk.shift()()
		}
		;
		var Rj, bu, pz, mB, od, nd, pE;
		z.li = uc();
		z.C = vc();
		z.ld = ac("Edge");
		z.gp = z.ld || z.C;
		z.B = ac("Gecko") && !(z.gb(bc.toLowerCase(), "webkit") && !ac("Edge")) && !(ac("Trident") || ac("MSIE")) && !ac("Edge");
		z.D = z.gb(bc.toLowerCase(), "webkit") && !ac("Edge");
		Rj = z.D && ac("Mobile");
		z.Ad = ac("Macintosh");
		bu = ac("Windows");
		pz = ac("Linux") || ac("CrOS");
		mB = jd();
		od = function() {
			if (z.li && z.t.opera) {
				var a;
				var b = z.t.opera.version;
				try {
					a = b()
				} catch (c) {
					a = b
				}
				return a
			}
			a = "";
			(b = kd()) && (a = b ? b[1] : "");
			return z.C && (b = md(),
			b > (0,
				window.parseFloat)(a)) ? String(b) : a
		}();
		nd = {};
		pE = z.t.document;
		z.sg = pE && z.C ? md() || ("CSS1Compat" == pE.compatMode ? (0,
			window.parseInt)(od, 10) : 5) : void 0;
		var xd = !z.C || 9 <= z.sg
			, Sd = !z.C || 9 <= z.sg
			, qE = z.C && !z.E("9");
		!z.D || z.E("528");
		z.B && z.E("1.9b") || z.C && z.E("8") || z.li && z.E("9.5") || z.D && z.E("528");
		z.B && !z.E("8") || z.C && z.E("9");
		pd.prototype.toString = function() {
			return this.id
		}
		;
		z.qd.prototype.stopPropagation = function() {
			this.jk = !0
		}
		;
		z.qd.prototype.preventDefault = function() {
			this.defaultPrevented = !0;
			this.QI = !1
		}
		;
		var rE = z.C ? "focusin" : "DOMFocusIn";
		sd[" "] = z.p;
		z.v(ud, z.qd);
		var yd = [1, 4, 2];
		ud.prototype.init = function(a, b) {
			var c = this.type = a.type
				, d = a.changedTouches ? a.changedTouches[0] : null ;
			this.target = a.target || a.srcElement;
			this.currentTarget = b;
			var f = a.relatedTarget;
			f ? z.B && (td(f, "nodeName") || (f = null )) : "mouseover" == c ? f = a.fromElement : "mouseout" == c && (f = a.toElement);
			this.relatedTarget = f;
			null  === d ? (this.offsetX = z.D || void 0 !== a.offsetX ? a.offsetX : a.layerX,
				this.offsetY = z.D || void 0 !== a.offsetY ? a.offsetY : a.layerY,
				this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
				this.clientY = void 0 !== a.clientY ? a.clientY :
					a.pageY,
				this.screenX = a.screenX || 0,
				this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
				this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
				this.screenX = d.screenX || 0,
				this.screenY = d.screenY || 0);
			this.button = a.button;
			this.keyCode = a.keyCode || 0;
			this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
			this.ctrlKey = a.ctrlKey;
			this.altKey = a.altKey;
			this.shiftKey = a.shiftKey;
			this.metaKey = a.metaKey;
			this.Wz = z.Ad ? a.metaKey : a.ctrlKey;
			this.state = a.state;
			this.hc = a;
			a.defaultPrevented && this.preventDefault()
		}
		;
		ud.prototype.stopPropagation = function() {
			ud.o.stopPropagation.call(this);
			this.hc.stopPropagation ? this.hc.stopPropagation() : this.hc.cancelBubble = !0
		}
		;
		ud.prototype.preventDefault = function() {
			ud.o.preventDefault.call(this);
			var a = this.hc;
			if (a.preventDefault)
				a.preventDefault();
			else if (a.returnValue = !1,
					qE)
				try {
					if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
						a.keyCode = -1
				} catch (b) {}
		}
		;
		ud.prototype.PN = function() {
			return this.hc
		}
		;
		var Cd = "closure_listenable_" + (1E6 * Math.random() | 0)
			, Ed = 0;
		z.e = z.Hd.prototype;
		z.e.add = function(a, b, c, d, f) {
			var g = a.toString();
			a = this.jc[g];
			a || (a = this.jc[g] = [],
				this.gq++);
			var h = Jd(a, b, d, f);
			-1 < h ? (b = a[h],
			c || (b.Zq = !1)) : (b = new Dd(b,this.src,g,!!d,f),
				b.Zq = c,
				a.push(b));
			return b
		}
		;
		z.e.remove = function(a, b, c, d) {
			a = a.toString();
			if (!(a in this.jc))
				return !1;
			var f = this.jc[a];
			b = Jd(f, b, c, d);
			return -1 < b ? (Fd(f[b]),
				Array.prototype.splice.call(f, b, 1),
			0 == f.length && (delete this.jc[a],
				this.gq--),
				!0) : !1
		}
		;
		z.e.removeAll = function(a) {
			a = a && a.toString();
			var b = 0, c;
			for (c in this.jc)
				if (!a || c == a) {
					for (var d = this.jc[c], f = 0; f < d.length; f++)
						++b,
							Fd(d[f]);
					delete this.jc[c];
					this.gq--
				}
			return b
		}
		;
		z.e.Dl = aa(1);
		z.e.$n = function(a, b, c, d) {
			a = this.jc[a.toString()];
			var f = -1;
			a && (f = Jd(a, b, c, d));
			return -1 < f ? a[f] : null
		}
		;
		z.e.hasListener = function(a, b) {
			var c = z.l(a)
				, d = c ? a.toString() : ""
				, f = z.l(b);
			return z.gc(this.jc, function(a) {
				for (var h = 0; h < a.length; ++h)
					if (!(c && a[h].type != d || f && a[h].$k != b))
						return !0;
				return !1
			})
		}
		;
		var Nd = "closure_lm_" + (1E6 * Math.random() | 0)
			, Wd = {}
			, Qd = 0
			, Zd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
		z.v(z.G, z.cd);
		z.G.prototype[Cd] = !0;
		z.e = z.G.prototype;
		z.e.Zh = function() {
			return this.Sz
		}
		;
		z.e.mb = function(a) {
			this.Sz = a
		}
		;
		z.e.addEventListener = function(a, b, c, d) {
			z.F(this, a, b, c, d)
		}
		;
		z.e.removeEventListener = function(a, b, c, d) {
			z.Ud(this, a, b, c, d)
		}
		;
		z.e.dispatchEvent = function(a) {
			var b, c = this.Zh();
			if (c)
				for (b = []; c; c = c.Zh())
					b.push(c);
			var c = this.lL
				, d = a.type || a;
			if (z.qa(a))
				a = new z.qd(a,c);
			else if (a instanceof z.qd)
				a.target = a.target || c;
			else {
				var f = a;
				a = new z.qd(d,c);
				z.rc(a, f)
			}
			var f = !0, g;
			if (b)
				for (var h = b.length - 1; !a.jk && 0 <= h; h--)
					g = a.currentTarget = b[h],
						f = $d(g, d, !0, a) && f;
			a.jk || (g = a.currentTarget = c,
				f = $d(g, d, !0, a) && f,
			a.jk || (f = $d(g, d, !1, a) && f));
			if (b)
				for (h = 0; !a.jk && h < b.length; h++)
					g = a.currentTarget = b[h],
						f = $d(g, d, !1, a) && f;
			return f
		}
		;
		z.e.C = function() {
			z.G.o.C.call(this);
			this.ee && this.ee.removeAll(void 0);
			this.Sz = null
		}
		;
		z.e.g = function(a, b, c, d) {
			return this.ee.add(String(a), b, !1, c, d)
		}
		;
		z.e.Aa = function(a, b, c, d) {
			return this.ee.add(String(a), b, !0, c, d)
		}
		;
		z.e.pa = function(a, b, c, d) {
			return this.ee.remove(String(a), b, c, d)
		}
		;
		z.e.Dl = aa(0);
		z.e.$n = function(a, b, c, d) {
			return this.ee.$n(String(a), b, c, d)
		}
		;
		z.e.hasListener = function(a, b) {
			return this.ee.hasListener(z.l(a) ? String(a) : void 0, b)
		}
		;
		z.v(z.ae, z.G);
		z.ae.prototype.enabled = !1;
		var be = z.t;
		z.e = z.ae.prototype;
		z.e.na = null ;
		z.e.setInterval = function(a) {
			this.Pg = a;
			this.na && this.enabled ? (this.stop(),
				this.start()) : this.na && this.stop()
		}
		;
		z.e.QU = function() {
			if (this.enabled) {
				var a = (0,
						z.w)() - this.Zy;
				0 < a && a < .8 * this.Pg ? this.na = this.Mm.setTimeout(this.bw, this.Pg - a) : (this.na && (this.Mm.clearTimeout(this.na),
					this.na = null ),
					this.dispatchEvent("tick"),
				this.enabled && (this.na = this.Mm.setTimeout(this.bw, this.Pg),
					this.Zy = (0,
						z.w)()))
			}
		}
		;
		z.e.start = function() {
			this.enabled = !0;
			this.na || (this.na = this.Mm.setTimeout(this.bw, this.Pg),
				this.Zy = (0,
					z.w)())
		}
		;
		z.e.stop = function() {
			this.enabled = !1;
			this.na && (this.Mm.clearTimeout(this.na),
				this.na = null )
		}
		;
		z.e.C = function() {
			z.ae.o.C.call(this);
			this.stop();
			delete this.Mm
		}
		;
		z.v(z.ee, z.cd);
		var ge = [];
		z.e = z.ee.prototype;
		z.e.g = function(a, b, c, d) {
			return fe(this, a, b, c, d)
		}
		;
		z.e.Aa = function(a, b, c, d) {
			return he(this, a, b, c, d)
		}
		;
		z.e.pa = function(a, b, c, d, f) {
			if (z.oa(b))
				for (var g = 0; g < b.length; g++)
					this.pa(a, b[g], c, d, f);
			else
				c = c || this.handleEvent,
					f = f || this.ha || this,
					c = z.Kd(c),
					d = !!d,
					b = z.Bd(a) ? a.$n(b, c, d, f) : a ? (a = z.Md(a)) ? a.$n(b, c, d, f) : null  : null ,
				b && (z.Vd(b),
					delete this.Wa[b.key]);
			return this
		}
		;
		z.e.removeAll = function() {
			z.dc(this.Wa, function(a, b) {
				this.Wa.hasOwnProperty(b) && z.Vd(a)
			}, this);
			this.Wa = {}
		}
		;
		z.e.C = function() {
			z.ee.o.C.call(this);
			this.removeAll()
		}
		;
		z.e.handleEvent = function() {
			throw Error("EventHandler.handleEvent not implemented");
		}
		;
		z.ie.prototype.zj = !0;
		z.je = {};
		z.ie.prototype.Jg = function() {
			return this.aA
		}
		;
		z.ie.prototype.uo = function(a) {
			this.aA = a;
			return this
		}
		;
		z.sE = (new z.ie).uo("");
		z.ke.prototype.oy = !0;
		z.ke.prototype.Al = aa(2);
		z.ke.prototype.zj = !0;
		z.ke.prototype.Jg = function() {
			return this.ik
		}
		;
		var le = {};
		z.ke.prototype.uo = function(a, b) {
			this.ik = a;
			this.oE = b;
			return this
		}
		;
		z.oe("\x3c!DOCTYPE html\x3e", 0);
		var Jj = z.oe("", 0);
		var Bz = Math.sign || function(a) {
					return 0 < a ? 1 : 0 > a ? -1 : a
				}
			;
		z.xe = "StopIteration" in z.t ? z.t.StopIteration : {
			message: "StopIteration",
			stack: ""
		};
		z.ve.prototype.next = function() {
			throw z.xe;
		}
		;
		z.ve.prototype.ed = function() {
			return this
		}
		;
		z.e = Ce.prototype;
		z.e.ib = function() {
			return this.Ka
		}
		;
		z.e.Uc = function() {
			Ee(this);
			for (var a = [], b = 0; b < this.Wa.length; b++)
				a.push(this.Fb[this.Wa[b]]);
			return a
		}
		;
		z.e.jd = function() {
			Ee(this);
			return this.Wa.concat()
		}
		;
		z.e.Mf = function(a) {
			return Fe(this.Fb, a)
		}
		;
		z.e.zn = function(a) {
			for (var b = 0; b < this.Wa.length; b++) {
				var c = this.Wa[b];
				if (Fe(this.Fb, c) && this.Fb[c] == a)
					return !0
			}
			return !1
		}
		;
		z.e.equals = function(a, b) {
			if (this === a)
				return !0;
			if (this.Ka != a.ib())
				return !1;
			var c = b || De;
			Ee(this);
			for (var d, f = 0; d = this.Wa[f]; f++)
				if (!c(this.get(d), a.get(d)))
					return !1;
			return !0
		}
		;
		z.e.Qg = function() {
			return 0 == this.Ka
		}
		;
		z.e.clear = function() {
			this.Fb = {};
			this.lq = this.Ka = this.Wa.length = 0
		}
		;
		z.e.remove = function(a) {
			return Fe(this.Fb, a) ? (delete this.Fb[a],
				this.Ka--,
				this.lq++,
			this.Wa.length > 2 * this.Ka && Ee(this),
				!0) : !1
		}
		;
		z.e.get = function(a, b) {
			return Fe(this.Fb, a) ? this.Fb[a] : b
		}
		;
		z.e.set = function(a, b) {
			Fe(this.Fb, a) || (this.Ka++,
				this.Wa.push(a),
				this.lq++);
			this.Fb[a] = b
		}
		;
		z.e.addAll = function(a) {
			var b;
			a instanceof Ce ? (b = a.jd(),
				a = a.Uc()) : (b = jc(a),
				a = z.ic(a));
			for (var c = 0; c < b.length; c++)
				this.set(b[c], a[c])
		}
		;
		z.e.forEach = function(a, b) {
			for (var c = this.jd(), d = 0; d < c.length; d++) {
				var f = c[d]
					, g = this.get(f);
				a.call(b, g, f, this)
			}
		}
		;
		z.e.clone = function() {
			return new Ce(this)
		}
		;
		z.e.ed = function(a) {
			Ee(this);
			var b = 0
				, c = this.lq
				, d = this
				, f = new z.ve;
			f.next = function() {
				if (c != d.lq)
					throw Error("The map has changed since the iterator was created");
				if (b >= d.Wa.length)
					throw z.xe;
				var f = d.Wa[b++];
				return a ? f : d.Fb[f]
			}
			;
			return f
		}
		;
		z.e = He.prototype;
		z.e.ib = function() {
			return this.Fb.ib()
		}
		;
		z.e.add = function(a) {
			this.Fb.set(Ie(a), a)
		}
		;
		z.e.addAll = function(a) {
			a = qe(a);
			for (var b = a.length, c = 0; c < b; c++)
				this.add(a[c])
		}
		;
		z.e.removeAll = function(a) {
			a = qe(a);
			for (var b = a.length, c = 0; c < b; c++)
				this.remove(a[c])
		}
		;
		z.e.remove = function(a) {
			return this.Fb.remove(Ie(a))
		}
		;
		z.e.clear = function() {
			this.Fb.clear()
		}
		;
		z.e.Qg = function() {
			return this.Fb.Qg()
		}
		;
		z.e.contains = function(a) {
			return this.Fb.Mf(Ie(a))
		}
		;
		z.e.kG = function(a) {
			var b = new He;
			a = qe(a);
			for (var c = 0; c < a.length; c++) {
				var d = a[c];
				this.contains(d) && b.add(d)
			}
			return b
		}
		;
		z.e.Uc = function() {
			return this.Fb.Uc()
		}
		;
		z.e.clone = function() {
			return new He(this)
		}
		;
		z.e.equals = function(a) {
			return this.ib() == pe(a) && Je(this, a)
		}
		;
		z.e.ed = function() {
			return this.Fb.ed(!1)
		}
		;
		z.v(Ke, z.cd);
		Ke.prototype.Gx = function() {
			return this.hu
		}
		;
		Ke.prototype.C = function() {
			Ke.o.C.call(this);
			this.hu = this.Bk = null
		}
		;
		Oe.prototype.serialize = function(a) {
			var b = [];
			Pe(this, a, b);
			return b.join("")
		}
		;
		var Se = {
			'"': '\\"',
			"\\": "\\\\",
			"/": "\\/",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\x0B": "\\u000b"
		}
			, Re = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
		Oe.prototype.serializeArray = function(a, b) {
			var c = a.length;
			b.push("[");
			for (var d = "", f = 0; f < c; f++)
				b.push(d),
					d = a[f],
					Pe(this, this.gu ? this.gu.call(a, String(f), d) : d, b),
					d = ",";
			b.push("]")
		}
		;
		Te.prototype.pD = null ;
		var tE;
		z.v(We, Te);
		tE = new We;
		var af;
		z.pf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
		af = /#|$/;
		z.v(bf, z.G);
		var cf = ""
			, qf = /^https?$/i
			, uE = ["POST", "PUT"];
		z.e = bf.prototype;
		z.e.send = function(a, b, c, d) {
			if (this.fa)
				throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.Yy + "; newUri\x3d" + a);
			b = b ? b.toUpperCase() : "GET";
			this.Yy = a;
			this.Zs = "";
			this.Xw = !1;
			this.Ch = !0;
			this.fa = this.Xu ? Xe(this.Xu) : Xe(tE);
			this.Wu = this.Xu ? Ue(this.Xu) : Ue(tE);
			this.fa.onreadystatechange = (0,
				z.r)(this.NH, this);
			this.eT && "onprogress" in this.fa && (this.fa.onprogress = (0,
				z.r)(function(a) {
				this.MH(a, !0)
			}, this),
			this.fa.upload && (this.fa.upload.onprogress = (0,
				z.r)(this.MH, this)));
			try {
				this.py = !0,
					this.fa.open(b, String(a), !0),
					this.py = !1
			} catch (g) {
				this.Or(5, g);
				return
			}
			a = c || "";
			var f = this.headers.clone();
			d && se(d, function(a, b) {
				f.set(b, a)
			});
			d = z.Pb(f.jd(), ef);
			c = z.t.FormData && a instanceof z.t.FormData;
			!z.y(uE, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
			f.forEach(function(a, b) {
				this.fa.setRequestHeader(b, a)
			}, this);
			this.JI && (this.fa.responseType = this.JI);
			kc(this.fa, "withCredentials") && (this.fa.withCredentials = this.BV);
			try {
				of(this),
				0 < this.Gu && ((this.NB = df(this.fa)) ?
					(this.fa.timeout = this.Gu,
						this.fa.ontimeout = (0,
							z.r)(this.Yp, this)) : this.Fu = z.ce(this.Yp, this.Gu, this)),
					this.Is = !0,
					this.fa.send(a),
					this.Is = !1
			} catch (g) {
				this.Or(5, g)
			}
		}
		;
		z.e.Yp = function() {
			"undefined" != typeof hf && this.fa && (this.Zs = "Timed out after " + this.Gu + "ms, aborting",
				this.dispatchEvent("timeout"),
				this.abort(8))
		}
		;
		z.e.Or = function(a, b) {
			this.Ch = !1;
			this.fa && (this.Aj = !0,
				this.fa.abort(),
				this.Aj = !1);
			this.Zs = b;
			ff(this);
			mf(this)
		}
		;
		z.e.abort = function() {
			this.fa && this.Ch && (this.Ch = !1,
				this.Aj = !0,
				this.fa.abort(),
				this.Aj = !1,
				this.dispatchEvent("complete"),
				this.dispatchEvent("abort"),
				mf(this))
		}
		;
		z.e.C = function() {
			this.fa && (this.Ch && (this.Ch = !1,
				this.Aj = !0,
				this.fa.abort(),
				this.Aj = !1),
				mf(this, !0));
			bf.o.C.call(this)
		}
		;
		z.e.NH = function() {
			this.Gd || (this.py || this.Is || this.Aj ? gf(this) : this.SR())
		}
		;
		z.e.SR = function() {
			gf(this)
		}
		;
		z.e.MH = function(a, b) {
			this.dispatchEvent(nf(a, "progress"));
			this.dispatchEvent(nf(a, b ? "downloadprogress" : "uploadprogress"))
		}
		;
		z.e.Rb = function() {
			return !!this.fa
		}
		;
		z.e.Ie = function() {
			return 4 == jf(this)
		}
		;
		z.e.getResponseHeader = function(a) {
			return this.fa && this.Ie() ? this.fa.getResponseHeader(a) : void 0
		}
		;
		z.e.getAllResponseHeaders = function() {
			return this.fa && this.Ie() ? this.fa.getAllResponseHeaders() : ""
		}
		;
		z.v(tf, z.G);
		z.e = tf.prototype;
		z.e.Gx = function() {
			return this.Nl.Gx()
		}
		;
		z.e.load = function() {
			for (var a = this.S, b = this.Nl.Bk, c = 0; c < b.length; c++) {
				var d = new bf;
				a.g(d, "complete", (0,
					z.r)(this.CO, this, c));
				d.send(b[c])
			}
		}
		;
		z.e.CO = function(a, b) {
			var c = b.target;
			lf(c) ? this.ay(a, c) : this.Ux(a, c)
		}
		;
		z.e.ay = function(a, b) {
			var c = z.rf(b);
			this.Nl.hu[a] = c;
			a: {
				var d = this.Nl
					, c = d.hu;
				if (c.length == d.Bk.length) {
					for (d = 0; d < c.length; d++)
						if (null  == c[d]) {
							c = !1;
							break a
						}
					c = !0
				} else
					c = !1
			}
			c && this.dispatchEvent("success");
			b.H()
		}
		;
		z.e.Ux = function(a, b) {
			this.dispatchEvent("error");
			b.H()
		}
		;
		z.e.C = function() {
			tf.o.C.call(this);
			this.S.H();
			this.S = null ;
			this.Nl.H();
			this.Nl = null
		}
		;
		/*
		 Portions of this code are from MochiKit, received by
		 The Closure Authors under the MIT license. All other code is Copyright
		 2005-2009 The Closure Authors. All Rights Reserved.
		 */
		z.e = uf.prototype;
		z.e.cancel = function(a) {
			if (this.Th)
				this.gh instanceof uf && this.gh.cancel();
			else {
				if (this.Qa) {
					var b = this.Qa;
					delete this.Qa;
					a ? b.cancel(a) : (b.cw--,
					0 >= b.cw && b.cancel())
				}
				this.AH ? this.AH.call(this.jE, this) : this.VA = !0;
				this.Th || xf(this, new Df(this))
			}
		}
		;
		z.e.QD = function(a, b) {
			this.Yv = !1;
			vf(this, a, b)
		}
		;
		z.e.Jh = function() {
			if (this.Th) {
				if (!this.VA)
					throw new Cf(this);
				this.VA = !1
			}
		}
		;
		z.e.Hh = function(a) {
			this.Jh();
			vf(this, !0, a)
		}
		;
		z.e.then = function(a, b, c) {
			var d, f, g = new Kc(function(a, b) {
					d = a;
					f = b
				}
			);
			yf(this, d, function(a) {
				a instanceof Df ? g.cancel() : f(a)
			});
			return g.then(a, b, c)
		}
		;
		Ia(uf);
		z.v(Cf, Ka);
		Cf.prototype.message = "Deferred has already fired";
		Cf.prototype.name = "AlreadyCalledError";
		z.v(Df, Ka);
		Df.prototype.message = "Deferred was canceled";
		Df.prototype.name = "CanceledError";
		Bf.prototype.OU = function() {
			delete Af[this.ic];
			throw this.Or;
		}
		;
		var Af = {};
		var Wf = !z.C || 9 <= z.sg
			, jg = !z.B && !z.C || z.C && 9 <= z.sg || z.B && z.E("1.9.1")
			, Fg = z.C && !z.E("9")
			, Mq = z.C && !(9 <= z.sg);
		z.e = Ff.prototype;
		z.e.clone = function() {
			return new Ff(this.x,this.y)
		}
		;
		z.e.ceil = function() {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			return this
		}
		;
		z.e.floor = function() {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this
		}
		;
		z.e.round = function() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this
		}
		;
		z.e.translate = function(a, b) {
			a instanceof Ff ? (this.x += a.x,
				this.y += a.y) : (this.x += a,
			sa(b) && (this.y += b));
			return this
		}
		;
		z.e.scale = function(a, b) {
			var c = sa(b) ? b : a;
			this.x *= a;
			this.y *= c;
			return this
		}
		;
		z.e = z.Hf.prototype;
		z.e.clone = function() {
			return new z.Hf(this.width,this.height)
		}
		;
		z.e.QL = function() {
			return this.width * this.height
		}
		;
		z.e.Qg = function() {
			return !this.QL()
		}
		;
		z.e.ceil = function() {
			this.width = Math.ceil(this.width);
			this.height = Math.ceil(this.height);
			return this
		}
		;
		z.e.floor = function() {
			this.width = Math.floor(this.width);
			this.height = Math.floor(this.height);
			return this
		}
		;
		z.e.round = function() {
			this.width = Math.round(this.width);
			this.height = Math.round(this.height);
			return this
		}
		;
		z.e.scale = function(a, b) {
			var c = sa(b) ? b : a;
			this.width *= a;
			this.height *= c;
			return this
		}
		;
		var Qf = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			frameborder: "frameBorder",
			height: "height",
			maxlength: "maxLength",
			role: "role",
			rowspan: "rowSpan",
			type: "type",
			usemap: "useMap",
			valign: "vAlign",
			width: "width"
		}
			, Ig = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1
		}
			, Jg = {
			IMG: " ",
			BR: "\n"
		};
		z.e = Jf.prototype;
		z.e.L = z.I;
		z.e.wa = function() {
			return this.La
		}
		;
		z.e.m = function(a) {
			return z.qa(a) ? this.La.getElementById(a) : a
		}
		;
		z.e.$ = Jf.prototype.m;
		z.e.Vh = function(a, b) {
			return z.L(a, b || this.La)
		}
		;
		z.e.B = function(a, b, c) {
			return Vf(this.La, arguments)
		}
		;
		z.e.createElement = function(a) {
			return this.La.createElement(a)
		}
		;
		z.e.createTextNode = function(a) {
			return this.La.createTextNode(String(a))
		}
		;
		z.e.VD = function(a, b, c) {
			var d = this.La;
			c = !!c;
			for (var f = d.createElement("TABLE"), g = f.appendChild(d.createElement("TBODY")), h = 0; h < a; h++) {
				for (var k = d.createElement("TR"), m = 0; m < b; m++) {
					var n = d.createElement("TD");
					c && z.wg(n, " ");
					k.appendChild(n)
				}
				g.appendChild(k)
			}
			return f
		}
		;
		z.e.Ua = function() {
			var a = this.La;
			return a.parentWindow || a.defaultView
		}
		;
		z.e.Un = function(a) {
			return Ng(a || this.La)
		}
		;
		z.e.appendChild = function(a, b) {
			a.appendChild(b)
		}
		;
		z.e.append = z.bg;
		z.e.canHaveChildren = ag;
		z.e.du = z.cg;
		z.e.Ps = z.dg;
		z.e.Dy = z.eg;
		z.e.removeNode = z.N;
		z.e.DN = z.hg;
		z.e.QN = z.ig;
		z.e.hF = z.kg;
		z.e.isElement = z.og;
		z.e.isWindow = pg;
		z.e.contains = z.qg;
		z.e.Rg = function(a) {
			var b;
			(b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Bg(a) || Cg(a)) : Ag(a)) && z.C ? (a = z.ta(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
				height: a.offsetHeight,
				width: a.offsetWidth
			},
				a = null  != a && 0 < a.height && 0 < a.width) : a = b;
			return a
		}
		;
		z.e.NN = z.Kg;
		var Rg = []
			, Xg = 0
			, Wg = 1;
		z.v(Vg, Ka);
		var vE = wc()
			, Ot = jd() || ac("iPod")
			, Sj = ac("iPad")
			, is = ac("Android") && !(xc() || wc() || uc() || ac("Silk"))
			, bh = xc()
			, wE = ac("Safari") && !(xc() || ac("Coast") || uc() || ac("Edge") || ac("Silk") || ac("Android")) && !(jd() || ac("iPad") || ac("iPod"));
		z.v(Zg, z.G);
		z.e = Zg.prototype;
		z.e.Ar = !1;
		z.e.lJ = !1;
		z.e.DQ = function(a, b, c, d) {
			var f = this.Yg[a] || new hh;
			f.VG = !0;
			f.hB = c || null ;
			f.Yw = d || null ;
			if (this.Yg[a])
				null  != f.pA && $g(this, a);
			else {
				this.Yg[a] = f;
				c = [];
				for (d = 0; d < a.length; d++)
					z.Wb(c, b[a[d]].Bk);
				!this.Ar || this.lJ || this.Ar && (bh || wc() && 0 <= pb(yc(), "36")) ? (this.Yg[a].HI = c,
					b = new tf(c),
					c = this.S,
					c.g(b, "success", (0,
						z.r)(this.ay, this, b, a)),
					c.g(b, "error", (0,
						z.r)(this.Ux, this, b, a)),
					b.load()) : Qg(c)
			}
		}
		;
		z.e.ay = function(a, b) {
			var c = this.Yg[b];
			c.pA = a.Gx();
			c.VG && $g(this, b);
			z.ce(a.H, 5, a)
		}
		;
		z.e.Ux = function(a, b, c) {
			var d = this.Yg[b];
			d && (delete this.Yg[b],
				b = d.Yw,
				this.dispatchEvent(new dh(0,void 0)),
			b && b(c));
			z.ce(a.H, 5, a)
		}
		;
		z.e.C = function() {
			Zg.o.C.call(this);
			this.S.H();
			this.S = null
		}
		;
		var eh = new pd("a")
			, fh = new pd("b")
			, gh = new pd("c");
		z.v(ch, z.qd);
		z.v(ah, z.qd);
		z.v(dh, z.qd);
		z.v(ih, z.cd);
		ih.prototype.Cn = function() {
			return this.UD ? this.UD() : {}
		}
		;
		ih.prototype.Mw = function(a) {
			if (this.vE)
				this.vE(a);
			else if (z.ua(a))
				if (z.ta(a.H))
					a.H();
				else
					for (var b in a)
						delete a[b]
		}
		;
		ih.prototype.C = function() {
			ih.o.C.call(this);
			for (var a = this.mj; a.length; )
				this.Mw(a.pop());
			delete this.mj
		}
		;
		nh.prototype.toString = function() {
			var a = [];
			a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
			this.OB && a.push(" [VarAlloc \x3d ", this.OB, "]");
			return a.join("")
		}
		;
		mh.prototype.toString = function() {
			return null  == this.type ? this.HD : "[" + this.type + "] " + this.HD
		}
		;
		lh.prototype.reset = function() {
			for (var a = 0; a < this.Rf.length; a++) {
				var b = this.Pr.id;
				b && kh(this.gy, b);
				kh(this.Pr, this.Rf[a])
			}
			this.Rf.length = 0;
			this.Oz.clear();
			this.qJ = (0,
				z.w)();
			this.pw = this.IJ = this.Mu = this.JJ = this.KJ = 0;
			b = this.tk.jd();
			for (a = 0; a < b.length; a++) {
				var c = this.tk.get(b[a]);
				c.count = 0;
				c.time = 0;
				c.OB = 0;
				kh(this.bB, c)
			}
			this.tk.clear()
		}
		;
		lh.prototype.Av = function(a, b, c) {
			var d = (0,
				z.w)()
				, f = c ? c : d
				, g = jh(this.Pr);
			g.Rr = 2;
			g.Qr = f;
			g.type = b;
			g.HD = a;
			a = (a = this.WW) && a.isTracing() ? a.totalVarAlloc : -1;
			g.HJ = a;
			this.pw++;
			if (c) {
				c = this.Rf.length;
				for (a = 0; a < c; a++)
					if (this.Rf[a].Qr > f) {
						Xb(this.Rf, a, 0, g);
						break
					}
				a == c && this.Rf.push(g)
			} else
				this.Rf.push(g);
			if (f = g.type)
				g = this.tk.get(f),
				g || (g = jh(this.bB),
					g.type = f,
					this.tk.set(f, g)),
					g.count++;
			this.Mu += (0,
					z.w)() - d
		}
		;
		lh.prototype.toString = function() {
			for (var a = [], b = -1, c = [], d = 0; d < this.Rf.length; d++) {
				var f = this.Rf[d];
				1 == f.Rr && c.pop();
				a.push(" ", oh(f, this.qJ, b, c.join("")));
				b = f.Qr;
				a.push("\n");
				0 == f.Rr && c.push("|  ")
			}
			if (0 != this.Oz.ib()) {
				var g = (0,
					z.w)();
				a.push(" Unstopped timers:\n");
				z.ye(this.Oz, function(b) {
					a.push("  ", b, " (", g - b.startTime, " ms, started at ", qh(b.startTime), ")\n")
				})
			}
			b = this.tk.jd();
			for (d = 0; d < b.length; d++)
				c = this.tk.get(b[d]),
				1 < c.count && a.push(" TOTAL ", c, "\n");
			a.push("Total tracers created ", this.IJ,
				"\n", "Total comments created ", this.pw, "\n", "Overhead start: ", this.KJ, " ms\n", "Overhead end: ", this.JJ, " ms\n", "Overhead comment: ", this.Mu, " ms\n");
			return a.join("")
		}
		;
		new lh;
		z.v(rh, z.cd);
		sh.prototype.LE = function(a) {
			this.Zr && (this.Zr.call(this.ha || null , a),
				this.Zr = this.ha = null )
		}
		;
		sh.prototype.abort = function() {
			this.ha = this.Zr = null
		}
		;
		z.v(th, z.cd);
		z.e = th.prototype;
		z.e.Bk = null ;
		z.e.XQ = rh;
		z.e.oz = null ;
		z.e.ie = function() {
			return this.ic
		}
		;
		z.e.ip = function(a, b) {
			return this.au(this.Iz, a, b)
		}
		;
		z.e.au = function(a, b, c) {
			b = new sh(b,c);
			a.push(b);
			return b
		}
		;
		z.e.wc = function() {
			return !!this.oz
		}
		;
		z.e.ap = function(a) {
			var b = new this.XQ;
			a();
			this.oz = b;
			b = (b = !!vh(this.BE, a())) || !!vh(this.Iz, a());
			b || (this.Bz.length = 0);
			return b
		}
		;
		z.e.Az = function(a) {
			(a = vh(this.Bz, a)) && window.setTimeout(Bb("Module errback failures: " + a), 0);
			this.BE.length = 0;
			this.Iz.length = 0
		}
		;
		z.e.C = function() {
			th.o.C.call(this);
			hd(this.oz)
		}
		;
		z.v(wh, z.cd);
		z.ma(wh);
		wh.prototype.kF = function() {
			return this.mH
		}
		;
		wh.prototype.Rb = function() {
			return 0 < this.hi.length
		}
		;
		wh.prototype.lt = function(a, b, c) {
			b || (this.lr = 0);
			this.hi = b = Dh(this, a);
			this.fh = this.hD ? a : z.Vb(b);
			xh(this);
			0 != b.length && (this.pp.push.apply(this.pp, b),
				a = (0,
					z.r)(this.cz.DQ, this.cz, z.Vb(b), this.Wc, null , (0,
					z.r)(this.NO, this, this.fh, b), (0,
					z.r)(this.OO, this), !!c),
				(c = 5E3 * Math.pow(this.lr, 2)) ? window.setTimeout(a, c) : a())
		}
		;
		wh.prototype.load = function(a, b) {
			var c = [];
			Zb([a], c);
			for (var d = [], f = {}, g = 0; g < c.length; g++) {
				var h = c[g]
					, k = this.Wc[h];
				if (!k)
					throw Error("Unknown module: " + h);
				var m = new uf;
				f[h] = m;
				k.wc() ? m.Hh(this.mH) : (yh(this, h, k, !!b, m),
				Ah(this, h) || d.push(h))
			}
			0 < d.length && Ch(this, d);
			return f[a]
		}
		;
		var Hh = 4;
		z.e = wh.prototype;
		z.e.NO = function(a, b, c) {
			this.lr++;
			this.fh = a;
			z.x(b, z.Ca(Tb, this.pp), this);
			401 == c ? (Gh(this, 0),
				this.sd.length = 0) : 410 == c ? (Jh(this, 3),
				Ih(this)) : 3 <= this.lr ? (Jh(this, 1),
				Ih(this)) : this.lt(this.fh, !0, 8001 == c)
		}
		;
		z.e.OO = function() {
			Jh(this, 2);
			Ih(this)
		}
		;
		z.e.ip = function(a, b) {
			z.oa(a) || (a = [a]);
			for (var c = 0; c < a.length; c++)
				this.au(a[c], b)
		}
		;
		z.e.au = function(a, b) {
			var c = this.$q;
			c[a] || (c[a] = []);
			c[a].push(b)
		}
		;
		z.e.Sr = function(a) {
			for (var b = this.$q[a], c = 0; b && c < b.length; c++)
				b[c](a)
		}
		;
		z.e.C = function() {
			wh.o.C.call(this);
			id(z.ic(this.Wc), this.Uq);
			this.$q = this.sd = this.Qm = this.fh = this.hi = this.Wc = null
		}
		;
		var Mh = /\s*;\s*/;
		z.e = z.Kh.prototype;
		z.e.isEnabled = function() {
			return window.navigator.cookieEnabled
		}
		;
		z.e.set = function(a, b, c, d, f, g) {
			if (/[;=\s]/.test(a))
				throw Error('Invalid cookie name "' + a + '"');
			if (/[;\r\n]/.test(b))
				throw Error('Invalid cookie value "' + b + '"');
			z.l(c) || (c = -1);
			f = f ? ";domain\x3d" + f : "";
			d = d ? ";path\x3d" + d : "";
			g = g ? ";secure" : "";
			c = 0 > c ? "" : 0 == c ? ";expires\x3d" + (new Date(1970,1,1)).toUTCString() : ";expires\x3d" + (new Date((0,
					z.w)() + 1E3 * c)).toUTCString();
			this.La.cookie = a + "\x3d" + b + f + d + c + g
		}
		;
		z.e.get = function(a, b) {
			for (var c = a + "\x3d", d = (this.La.cookie || "").split(Mh), f = 0, g; g = d[f]; f++) {
				if (0 == g.lastIndexOf(c, 0))
					return g.substr(c.length);
				if (g == a)
					return ""
			}
			return b
		}
		;
		z.e.remove = function(a, b, c) {
			var d = this.Mf(a);
			this.set(a, "", 0, b, c);
			return d
		}
		;
		z.e.jd = function() {
			return Lh(this).keys
		}
		;
		z.e.Uc = function() {
			return Lh(this).values
		}
		;
		z.e.Qg = function() {
			return !this.La.cookie
		}
		;
		z.e.ib = function() {
			return this.La.cookie ? (this.La.cookie || "").split(Mh).length : 0
		}
		;
		z.e.Mf = function(a) {
			return z.l(this.get(a))
		}
		;
		z.e.zn = function(a) {
			for (var b = Lh(this).values, c = 0; c < b.length; c++)
				if (b[c] == a)
					return !0;
			return !1
		}
		;
		z.e.clear = function() {
			for (var a = Lh(this).keys, b = a.length - 1; 0 <= b; b--)
				this.remove(a[b])
		}
		;
		z.ul = new z.Kh(window.document);
		z.ul.kW = 3950;
		var xE = "/update"
			, Pn = !1;
		var Mm, vA, Gt, yA, DE, EE, FE;
		z.yE = {};
		z.lB = {};
		z.Gk = z.Lb((0,
			window.$)("script.json-inline"), function(a, b) {
			var c = (0,
				window.$)(b).data("name");
			a[c] = JSON.parse(b.text);
			return a
		}, {});
		(function(a) {
			z.dc(a, function(a, c) {
				switch (c) {
					case "redirect_to":
						z.zE = a;
						break;
					case "current_user":
						z.X = a;
						z.X.sx = a[0];
						z.X.qb = function() {
							return "-1" !== z.X.bg
						}
						;
						z.X.dD = a[2];
						z.X.bg = a[3];
						z.X.SF = a[4];
						z.X.Yd = a[7];
						z.X.Nn = a[8];
						z.X.eX = a[9];
						z.X.bX = a[10];
						z.X.rz = a[11];
						z.X.As = a[12];
						z.X.aX = a[13];
						z.X.Jd = function(a) {
							var b = z.X.dD;
							return a ? b.replace("_s", "_" + a) : b
						}
						;
						z.X.$Q = a[14];
						break;
					case "user_status":
						Mm = a;
						Mm.GE = a[0];
						Mm.Xv = a[1];
						break;
					case "env":
						z.rc(z.lB, {
							SI: a[0],
							vn: ("https:" === window.document.location.protocol ? "https://" :
								"http://") + a[1],
							lb: a[2],
							Fy: a[3],
							cB: ("https:" === window.document.location.protocol ? "https://static." : "http://static.") + a[0] + "/static",
							Qu: ("https:" === window.document.location.protocol ? "https://upload." : "http://upload.") + a[0] + ":" + window.location.port,
							zG: !1
						});
						break;
					case "current_question":
						z.ck = {
							qa: a.qid,
							Za: a.urlToken,
							status: a.status,
							Ky: a.isLocked,
							dn: a.askAboutMember,
							qN: a.editPermission,
							kb: a.isAnon,
							tU: a.showInvitePanel,
							SW: a.detailEditReasonRequired,
							xe: 0,
							gr: 0,
							Om: null ,
							PW: 0,
							cX: !1,
							xX: !0,
							EU: !1,
							eh: [],
							KW: []
						};
						break;
					case "current_question_bio":
						vA = a;
						break;
					case "my_answer":
						z.AE = a;
						break;
					case "current_question_owner":
						z.X.eh = a;
						break;
					case "current_answer":
						Gt = a;
						break;
					case "bio":
						yA = a;
						break;
					case "current_topic":
						z.BE = a;
						break;
					case "current_people":
						z.Hs = a;
						z.Hs.sx = a[0];
						z.Hs.Za = a[1];
						z.Hs.id = a[3];
						break;
					case "current_roundtable":
						z.It = a;
						break;
					case "current_list":
						z.Ht = a;
						z.Ht.Za = a[2];
						break;
					case "block_topic":
						z.CE = a;
						break;
					case "draft":
						z.yE.Zd = a.length ? a : null ;
						break;
					case "disabled_components":
						DE = a;
						break;
					case "comet_path":
						xE =
							a;
						break;
					case "permissions":
						EE = a,
							FE = function(a) {
								return z.y(EE, a)
							}
				}
			});
			z.ck && (z.ck.rG = !1);
			z.GE = function(a) {
				return !!DE && z.y(DE, a)
			}
			;
			window.navigator.userAgent.match(/iPad/i) && (z.lB.zG = !0,
				z.lB.lb = !0);
			if (z.lB.SI)
				try {
					window.document.domain = z.lB.SI
				} catch (b) {
					window.console && window.console.warn(b)
				}
			z.lB.vn && (xE = z.lB.vn + xE)
		})(z.Gk);
		z.T = {
			set: function(a, b) {
				a.className = b
			},
			get: function(a) {
				a = a.className;
				return z.qa(a) && a.match(/\S+/g) || []
			},
			add: function(a, b) {
				var c = z.T.get(a)
					, d = Yb(arguments, 1)
					, f = c.length + d.length;
				z.T.Cq(c, d);
				z.T.set(a, c.join(" "));
				return c.length == f
			},
			remove: function(a, b) {
				var c = z.T.get(a)
					, d = Yb(arguments, 1)
					, f = z.T.fF(c, d);
				z.T.set(a, f.join(" "));
				return f.length == c.length - d.length
			},
			Cq: function(a, b) {
				for (var c = 0; c < b.length; c++)
					z.y(a, b[c]) || a.push(b[c])
			},
			fF: function(a, b) {
				return z.Jb(a, function(a) {
					return !z.y(b, a)
				})
			},
			wX: function(a,
			             b, c) {
				for (var d = z.T.get(a), f = !1, g = 0; g < d.length; g++)
					d[g] == b && (Xb(d, g--, 1),
						f = !0);
				f && (d.push(c),
					z.T.set(a, d.join(" ")));
				return f
			},
			Dv: function(a, b, c) {
				var d = z.T.get(a);
				z.qa(b) ? Tb(d, b) : z.oa(b) && (d = z.T.fF(d, b));
				z.qa(c) && !z.y(d, c) ? d.push(c) : z.oa(c) && z.T.Cq(d, c);
				z.T.set(a, d.join(" "))
			},
			has: function(a, b) {
				return z.y(z.T.get(a), b)
			},
			enable: function(a, b, c) {
				c ? z.T.add(a, b) : z.T.remove(a, b)
			},
			toggle: function(a, b) {
				var c = !z.T.has(a, b);
				z.T.enable(a, b, c);
				return c
			}
		};
		z.e = z.ei.prototype;
		z.e.clone = function() {
			return new z.ei(this.top,this.right,this.bottom,this.left)
		}
		;
		z.e.contains = function(a) {
			return this && a ? a instanceof z.ei ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
		}
		;
		z.e.expand = function(a, b, c, d) {
			z.ua(a) ? (this.top -= a.top,
				this.right += a.right,
				this.bottom += a.bottom,
				this.left -= a.left) : (this.top -= a,
				this.right += b,
				this.bottom += c,
				this.left -= d);
			return this
		}
		;
		z.e.ceil = function() {
			this.top = Math.ceil(this.top);
			this.right = Math.ceil(this.right);
			this.bottom = Math.ceil(this.bottom);
			this.left = Math.ceil(this.left);
			return this
		}
		;
		z.e.floor = function() {
			this.top = Math.floor(this.top);
			this.right = Math.floor(this.right);
			this.bottom = Math.floor(this.bottom);
			this.left = Math.floor(this.left);
			return this
		}
		;
		z.e.round = function() {
			this.top = Math.round(this.top);
			this.right = Math.round(this.right);
			this.bottom = Math.round(this.bottom);
			this.left = Math.round(this.left);
			return this
		}
		;
		z.e.translate = function(a, b) {
			a instanceof Ff ? (this.left += a.x,
				this.right += a.x,
				this.top += a.y,
				this.bottom += a.y) : (this.left += a,
				this.right += a,
			sa(b) && (this.top += b,
				this.bottom += b));
			return this
		}
		;
		z.e.scale = function(a, b) {
			var c = sa(b) ? b : a;
			this.left *= a;
			this.right *= a;
			this.top *= c;
			this.bottom *= c;
			return this
		}
		;
		z.e = gi.prototype;
		z.e.clone = function() {
			return new gi(this.left,this.top,this.width,this.height)
		}
		;
		z.e.kG = function(a) {
			var b = Math.max(this.left, a.left)
				, c = Math.min(this.left + this.width, a.left + a.width);
			if (b <= c) {
				var d = Math.max(this.top, a.top);
				a = Math.min(this.top + this.height, a.top + a.height);
				if (d <= a)
					return this.left = b,
						this.top = d,
						this.width = c - b,
						this.height = a - d,
						!0
			}
			return !1
		}
		;
		z.e.contains = function(a) {
			return a instanceof gi ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
		}
		;
		z.e.ai = function() {
			return new z.Hf(this.width,this.height)
		}
		;
		z.e.ceil = function() {
			this.left = Math.ceil(this.left);
			this.top = Math.ceil(this.top);
			this.width = Math.ceil(this.width);
			this.height = Math.ceil(this.height);
			return this
		}
		;
		z.e.floor = function() {
			this.left = Math.floor(this.left);
			this.top = Math.floor(this.top);
			this.width = Math.floor(this.width);
			this.height = Math.floor(this.height);
			return this
		}
		;
		z.e.round = function() {
			this.left = Math.round(this.left);
			this.top = Math.round(this.top);
			this.width = Math.round(this.width);
			this.height = Math.round(this.height);
			return this
		}
		;
		z.e.translate = function(a, b) {
			a instanceof Ff ? (this.left += a.x,
				this.top += a.y) : (this.left += a,
			sa(b) && (this.top += b));
			return this
		}
		;
		z.e.scale = function(a, b) {
			var c = sa(b) ? b : a;
			this.left *= a;
			this.width *= a;
			this.top *= c;
			this.height *= c;
			return this
		}
		;
		var ki, Vi, HE;
		ki = {};
		z.Pi = z.B ? "MozUserSelect" : z.D || z.ld ? "WebkitUserSelect" : null ;
		Vi = {
			thin: 2,
			medium: 4,
			thick: 6
		};
		HE = /[^\d]+$/;
		z.v(Yi, z.G);
		var IE = z.t.document && z.t.document.documentElement && !!z.t.document.documentElement.setCapture;
		z.e = Yi.prototype;
		z.e.Sh = function(a) {
			this.Hi = a
		}
		;
		z.e.v = function() {
			return this.S
		}
		;
		z.e.dJ = function(a) {
			this.fy = Math.pow(a, 2)
		}
		;
		z.e.Xa = function(a) {
			this.fc = a
		}
		;
		z.e.C = function() {
			Yi.o.C.call(this);
			z.Ud(this.handle, ["touchstart", "mousedown"], this.Lm, !1, this);
			this.S.removeAll();
			IE && this.La.releaseCapture();
			this.handle = this.target = null
		}
		;
		z.e.Lm = function(a) {
			var b = "mousedown" == a.type;
			if (!this.fc || this.bj || b && !z.zd(a))
				this.dispatchEvent("earlycancel");
			else {
				if (0 == this.fy)
					if (this.dispatchEvent(new dj("start",this,a.clientX,a.clientY,a)))
						this.bj = !0,
						this.oI && a.preventDefault();
					else
						return;
				else
					this.oI && a.preventDefault();
				var b = this.La
					, c = b.documentElement
					, d = !IE;
				this.S.g(b, ["touchmove", "mousemove"], this.QO, d);
				this.S.g(b, ["touchend", "mouseup"], this.Mr, d);
				IE ? (c.setCapture(!1),
					this.S.g(c, "losecapture", this.Mr)) : this.S.g(z.Uf(b), "blur", this.Mr);
				z.C && this.zP && this.S.g(b, "dragstart", rd);
				this.VT && this.S.g(this.VT, "scroll", this.Ct, d);
				this.clientX = this.xu = a.clientX;
				this.clientY = this.yu = a.clientY;
				this.screenX = a.screenX;
				this.screenY = a.screenY;
				this.deltaX = this.Hi ? Xi(this.target) : this.target.offsetLeft;
				this.deltaY = this.target.offsetTop;
				this.Rz = z.Pg(z.I(this.La))
			}
		}
		;
		z.e.Mr = function(a) {
			this.S.removeAll();
			IE && this.La.releaseCapture();
			this.bj ? (this.bj = !1,
				this.dispatchEvent(new dj("end",this,a.clientX,a.clientY,a,aj(this, this.deltaX),bj(this, this.deltaY)))) : this.dispatchEvent("earlycancel")
		}
		;
		z.e.QO = function(a) {
			if (this.fc) {
				var b = (this.Hi && Zi(this) ? -1 : 1) * (a.clientX - this.clientX)
					, c = a.clientY - this.clientY;
				this.clientX = a.clientX;
				this.clientY = a.clientY;
				this.screenX = a.screenX;
				this.screenY = a.screenY;
				if (!this.bj) {
					var d = this.xu - this.clientX
						, f = this.yu - this.clientY;
					if (d * d + f * f > this.fy)
						if (this.dispatchEvent(new dj("start",this,a.clientX,a.clientY,a)))
							this.bj = !0;
						else {
							this.Gd || this.Mr(a);
							return
						}
				}
				c = $i(this, b, c);
				b = c.x;
				c = c.y;
				this.bj && this.dispatchEvent(new dj("beforedrag",this,a.clientX,a.clientY,a,b,c)) &&
				(cj(this, a, b, c),
					a.preventDefault())
			}
		}
		;
		z.e.Ct = function(a) {
			var b = $i(this, 0, 0);
			a.clientX = this.clientX;
			a.clientY = this.clientY;
			cj(this, a, b.x, b.y)
		}
		;
		z.e.Ew = function(a, b) {
			this.Hi && Zi(this) ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
			this.target.style.top = b + "px"
		}
		;
		z.v(dj, z.qd);
		var JE = z.C ? 'javascript:""' : "about:blank";
		z.v(ej, z.G);
		ej.prototype.handleEvent = function(a) {
			var b = new ud(a.hc);
			b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
			this.dispatchEvent(b)
		}
		;
		ej.prototype.C = function() {
			ej.o.C.call(this);
			z.Vd(this.AQ);
			z.Vd(this.BQ);
			delete this.h
		}
		;
		z.ma(z.fj);
		z.fj.prototype.sz = 0;
		z.v(z.R, z.G);
		z.R.prototype.yP = z.fj.Y();
		var hj = null ;
		z.e = z.R.prototype;
		z.e.ie = function() {
			return this.ic || (this.ic = z.gj(this.yP))
		}
		;
		z.e.m = function() {
			return this.h
		}
		;
		z.e.Vh = function(a) {
			return this.h ? this.da.Vh(a, this.h) : null
		}
		;
		z.e.v = function() {
			this.ci || (this.ci = new z.ee(this));
			return this.ci
		}
		;
		z.e.getParent = function() {
			return this.Qa
		}
		;
		z.e.mb = function(a) {
			if (this.Qa && this.Qa != a)
				throw Error("Method not supported");
			z.R.o.mb.call(this, a)
		}
		;
		z.e.L = function() {
			return this.da
		}
		;
		z.e.B = function() {
			this.h = this.da.createElement("DIV")
		}
		;
		z.e.render = function(a) {
			this.lp(a)
		}
		;
		z.e.lp = function(a, b) {
			if (this.ya)
				throw Error("Component already rendered");
			this.h || this.B();
			a ? a.insertBefore(this.h, b || null ) : this.da.wa().body.appendChild(this.h);
			this.Qa && !this.Qa.ya || this.D()
		}
		;
		z.e.w = function(a) {
			if (this.ya)
				throw Error("Component already rendered");
			if (a && this.Ob(a)) {
				this.hK = !0;
				var b = z.Kf(a);
				this.da && this.da.wa() == b || (this.da = z.I(a));
				this.ia(a);
				this.D()
			} else
				throw Error("Invalid element to decorate");
		}
		;
		z.e.Ob = function() {
			return !0
		}
		;
		z.e.ia = function(a) {
			this.h = a
		}
		;
		z.e.D = function() {
			this.ya = !0;
			z.oj(this, function(a) {
				!a.ya && a.m() && a.D()
			})
		}
		;
		z.e.Db = function() {
			z.oj(this, function(a) {
				a.ya && a.Db()
			});
			this.ci && this.ci.removeAll();
			this.ya = !1
		}
		;
		z.e.C = function() {
			this.ya && this.Db();
			this.ci && (this.ci.H(),
				delete this.ci);
			z.oj(this, function(a) {
				a.H()
			});
			!this.hK && this.h && z.N(this.h);
			this.Qa = this.nz = this.h = this.af = this.Oc = null ;
			z.R.o.C.call(this)
		}
		;
		z.e.M = function(a, b) {
			this.Mk(a, mj(this), b)
		}
		;
		z.e.Mk = function(a, b, c) {
			if (a.ya && (c || !this.ya))
				throw Error("Component already rendered");
			if (0 > b || b > mj(this))
				throw Error("Child component index out of bounds");
			this.af && this.Oc || (this.af = {},
				this.Oc = []);
			if (a.getParent() == this) {
				var d = a.ie();
				this.af[d] = a;
				Tb(this.Oc, a)
			} else
				pc(this.af, a.ie(), a);
			kj(a, this);
			Xb(this.Oc, b, 0, a);
			a.ya && this.ya && a.getParent() == this ? (c = this.X(),
				b = c.childNodes[b] || null ,
			b != a.m() && c.insertBefore(a.m(), b)) : c ? (this.h || this.B(),
				b = nj(this, b + 1),
				a.lp(this.X(), b ? b.h : null )) : this.ya && !a.ya &&
			a.h && a.h.parentNode && 1 == a.h.parentNode.nodeType && a.D()
		}
		;
		z.e.X = function() {
			return this.h
		}
		;
		z.e.Ld = function() {
			null  == this.kg && (this.kg = z.Ni(this.ya ? this.h : this.da.wa().body));
			return this.kg
		}
		;
		z.e.yi = function(a) {
			if (this.ya)
				throw Error("Component already rendered");
			this.kg = a
		}
		;
		z.e.removeChild = function(a, b) {
			if (a) {
				var c = z.qa(a) ? a : a.ie();
				a = z.lj(this, c);
				c && a && (oc(this.af, c),
					Tb(this.Oc, a),
				b && (a.Db(),
				a.h && z.N(a.h)),
					kj(a, null ))
			}
			if (!a)
				throw Error("Child is not in parent component");
			return a
		}
		;
		z.e.du = function(a) {
			for (var b = []; this.Oc && 0 != this.Oc.length; )
				b.push(this.removeChild(nj(this, 0), a));
			return b
		}
		;
		z.v(z.rj, z.G);
		z.e = z.rj.prototype;
		z.e.h = null ;
		z.e.Rk = !0;
		z.e.ZC = null ;
		z.e.$C = null ;
		z.e.Nj = !1;
		z.e.lU = !1;
		z.e.Xy = -1;
		z.e.Uy = -1;
		z.e.TF = !1;
		z.e.uN = !0;
		z.e.yd = "toggle_display";
		z.e.bi = function() {
			return this.yd
		}
		;
		z.e.m = function() {
			return this.h
		}
		;
		z.e.kh = function(a) {
			sj(this);
			this.h = a
		}
		;
		z.e.yp = function(a) {
			sj(this);
			this.Rk = a
		}
		;
		z.e.fJ = function(a, b) {
			this.Im = a;
			this.Ql = b
		}
		;
		z.e.v = function() {
			return this.ha
		}
		;
		z.e.U = function() {
			return this.Nj
		}
		;
		z.e.tG = function() {
			return this.Nj || 150 > (0,
					z.w)() - this.Uy
		}
		;
		z.e.G = function(a) {
			this.Im && this.Im.stop();
			this.Ql && this.Ql.stop();
			a ? this.TA() : this.Rl()
		}
		;
		z.e.ea = z.p;
		z.e.TA = function() {
			if (!this.Nj && this.To()) {
				if (!this.h)
					throw Error("Caller must call setElement before trying to show the popup");
				this.ea();
				var a = z.Kf(this.h);
				this.TF && this.ha.g(a, "keydown", this.xR, !0);
				if (this.Rk)
					if (this.ha.g(a, "mousedown", this.EH, !0),
							z.C) {
						var b;
						try {
							b = a.activeElement
						} catch (d) {}
						for (; b && "IFRAME" == b.nodeName; ) {
							try {
								var c = b.contentDocument || b.contentWindow.document
							} catch (d) {
								break
							}
							a = c;
							b = a.activeElement
						}
						this.ha.g(a, "mousedown", this.EH, !0);
						this.ha.g(a, "deactivate", this.CH)
					} else
						this.ha.g(a,
							"blur", this.CH);
				"toggle_display" == this.yd ? (this.h.style.visibility = "visible",
					z.Q(this.h, !0)) : "move_offscreen" == this.yd && this.ea();
				this.Nj = !0;
				this.Xy = (0,
					z.w)();
				this.Uy = -1;
				this.Im ? (z.Td(this.Im, "end", this.ek, !1, this),
					this.Im.play()) : this.ek()
			}
		}
		;
		z.e.Rl = function(a) {
			if (!this.Nj || !this.dispatchEvent({
					type: "beforehide",
					target: a
				}))
				return !1;
			this.ha && this.ha.removeAll();
			this.Nj = !1;
			this.Uy = (0,
				z.w)();
			this.Ql ? (z.Td(this.Ql, "end", z.Ca(this.PD, a), !1, this),
				this.Ql.play()) : this.PD(a);
			return !0
		}
		;
		z.e.PD = function(a) {
			"toggle_display" == this.yd ? this.lU ? z.ce(this.UF, 0, this) : this.UF() : "move_offscreen" == this.yd && (this.h.style.top = "-10000px");
			this.ck(a)
		}
		;
		z.e.UF = function() {
			this.h.style.visibility = "hidden";
			z.Q(this.h, !1)
		}
		;
		z.e.To = function() {
			return this.dispatchEvent("beforeshow")
		}
		;
		z.e.ek = function() {
			this.dispatchEvent("show")
		}
		;
		z.e.ck = function(a) {
			this.dispatchEvent({
				type: "hide",
				target: a
			})
		}
		;
		z.e.EH = function(a) {
			a = a.target;
			z.qg(this.h, a) || tj(this, a) || this.$C && !z.qg(this.$C, a) || 150 > (0,
				z.w)() - this.Xy || this.Rl(a)
		}
		;
		z.e.xR = function(a) {
			27 == a.keyCode && this.Rl(a.target) && (a.preventDefault(),
				a.stopPropagation())
		}
		;
		z.e.CH = function(a) {
			if (this.uN) {
				var b = z.Kf(this.h);
				if ("undefined" != typeof window.document.activeElement) {
					if (a = b.activeElement,
						!a || z.qg(this.h, a) || "BODY" == a.tagName)
						return
				} else if (a.target != b)
					return;
				150 > (0,
					z.w)() - this.Xy || this.Rl()
			}
		}
		;
		z.e.C = function() {
			z.rj.o.C.call(this);
			this.ha.H();
			hd(this.Im);
			hd(this.Ql);
			delete this.h;
			delete this.ha;
			delete this.ZC
		}
		;
		z.v(uj, z.R);
		z.e = uj.prototype;
		z.e.lx = null ;
		z.e.ob = !1;
		z.e.Nc = null ;
		z.e.zc = null ;
		z.e.Ue = null ;
		z.e.Tv = !1;
		z.e.T = function() {
			return "goog-modalpopup"
		}
		;
		z.e.oj = function() {
			return this.Nc
		}
		;
		z.e.B = function() {
			uj.o.B.call(this);
			var a = this.m()
				, b = (0,
				z.qb)(this.T()).split(" ");
			Vh(a, b);
			Dg(a, !0);
			z.Q(a, !1);
			this.fz();
			vj(this)
		}
		;
		z.e.fz = function() {
			this.pV && !this.zc && (this.zc = this.L().B("iframe", {
				frameborder: 0,
				style: "border:0;vertical-align:bottom;" + (z.qa(void 0) ? (new z.ie).uo(void 0).Jg() : ""),
				src: JE
			}),
				this.zc.className = this.T() + "-bg",
				z.Q(this.zc, !1),
				Ki(this.zc, 0));
			this.Nc || (this.Nc = this.L().B("DIV", this.T() + "-bg"),
				z.Q(this.Nc, !1))
		}
		;
		z.e.II = function() {
			this.Tv = !1
		}
		;
		z.e.Ob = function(a) {
			return !!a && "DIV" == a.tagName
		}
		;
		z.e.ia = function(a) {
			uj.o.ia.call(this, a);
			a = (0,
				z.qb)(this.T()).split(" ");
			Vh(this.m(), a);
			this.fz();
			vj(this);
			Dg(this.m(), !0);
			z.Q(this.m(), !1)
		}
		;
		z.e.D = function() {
			this.zc && z.dg(this.zc, this.m());
			z.dg(this.Nc, this.m());
			uj.o.D.call(this);
			z.eg(this.Ue, this.m());
			this.lx = new ej(this.L().wa());
			this.v().g(this.lx, "focusin", this.Wo);
			wj(this, !1)
		}
		;
		z.e.Db = function() {
			this.U() && this.G(!1);
			hd(this.lx);
			uj.o.Db.call(this);
			z.N(this.zc);
			z.N(this.Nc);
			z.N(this.Ue)
		}
		;
		z.e.G = function(a) {
			a != this.ob && (this.hk && this.hk.stop(),
			this.Tk && this.Tk.stop(),
			this.gk && this.gk.stop(),
			this.Sk && this.Sk.stop(),
			this.ya && wj(this, a),
				a ? this.TA() : this.Rl())
		}
		;
		z.e.fJ = function(a, b, c, d) {
			this.hk = a;
			this.gk = b;
			this.Tk = c;
			this.Sk = d
		}
		;
		z.e.TA = function() {
			if (this.dispatchEvent("beforeshow")) {
				try {
					this.Yl = this.L().wa().activeElement
				} catch (a) {}
				this.oA();
				this.ea();
				this.v().g(this.L().Ua(), "resize", this.oA);
				xj(this, !0);
				this.focus();
				this.ob = !0;
				this.hk && this.Tk ? (z.Td(this.hk, "end", this.li, !1, this),
					this.Tk.play(),
					this.hk.play()) : this.li()
			}
		}
		;
		z.e.Rl = function() {
			this.dispatchEvent("beforehide") && (this.v().pa(this.L().Ua(), "resize", this.oA),
				this.ob = !1,
				this.gk && this.Sk ? (z.Td(this.gk, "end", this.gm, !1, this),
					this.Sk.play(),
					this.gk.play()) : this.gm(),
				this.NI())
		}
		;
		z.e.NI = function() {
			try {
				var a = this.L()
					, b = a.wa().body
					, c = a.wa().activeElement || b;
				if (!this.Yl || this.Yl == b) {
					this.Yl = null ;
					return
				}
				(c == b || a.contains(this.m(), c)) && this.Yl.focus()
			} catch (d) {}
			this.Yl = null
		}
		;
		z.e.li = function() {
			this.dispatchEvent("show")
		}
		;
		z.e.gm = function() {
			xj(this, !1);
			this.dispatchEvent("hide")
		}
		;
		z.e.U = function() {
			return this.ob
		}
		;
		z.e.focus = function() {
			this.SE()
		}
		;
		z.e.oA = function() {
			this.zc && z.Q(this.zc, !1);
			this.Nc && z.Q(this.Nc, !1);
			var a = this.L().wa()
				, b = z.Rf(z.Uf(a) || window)
				, c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth))
				, a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
			this.zc && (z.Q(this.zc, !0),
				Fi(this.zc, c, a));
			this.Nc && (z.Q(this.Nc, !0),
				Fi(this.Nc, c, a))
		}
		;
		z.e.ea = function() {
			var a = this.L().wa()
				, b = z.Uf(a) || window;
			if ("fixed" == qi(this.m()))
				var c = a = 0;
			else
				c = z.Pg(this.L()),
					a = c.x,
					c = c.y;
			var d = z.Hi(this.m())
				, b = z.Rf(b)
				, a = Math.max(a + b.width / 2 - d.width / 2, 0)
				, c = Math.max(c + b.height / 2 - d.height / 2, 0);
			z.ri(this.m(), a, c);
			z.ri(this.Ue, a, c)
		}
		;
		z.e.Wo = function(a) {
			this.Tv ? this.II() : a.target == this.Ue && z.ce(this.SE, 0, this)
		}
		;
		z.e.SE = function() {
			try {
				z.C && this.L().wa().body.focus(),
					this.m().focus()
			} catch (a) {}
		}
		;
		z.e.C = function() {
			hd(this.hk);
			this.hk = null ;
			hd(this.gk);
			this.gk = null ;
			hd(this.Tk);
			this.Tk = null ;
			hd(this.Sk);
			this.Sk = null ;
			uj.o.C.call(this)
		}
		;
		var Yl, Wl, Vz, ME, NE, OE, PE, QE, RE, KE, SE, Mj;
		z.v(z.yj, uj);
		z.e = z.yj.prototype;
		z.e.JE = !0;
		z.e.ey = !0;
		z.e.cm = !0;
		z.e.Ow = !0;
		z.e.Rq = .5;
		z.e.sB = "";
		z.e.tc = null ;
		z.e.Gb = null ;
		z.e.wE = !1;
		z.e.xd = null ;
		z.e.bd = null ;
		z.e.Iu = null ;
		z.e.wd = null ;
		z.e.bf = null ;
		z.e.qc = null ;
		z.e.ep = "dialog";
		z.e.T = function() {
			return this.Pc
		}
		;
		z.e.Ya = function(a) {
			this.sB = a;
			this.bd && z.wg(this.bd, a)
		}
		;
		z.e.ka = function(a) {
			this.tc = a = z.oe(a, null );
			this.bf && z.Ef(this.bf, a)
		}
		;
		z.e.Va = function() {
			return null  != this.tc ? z.me(this.tc) : ""
		}
		;
		z.e.$h = function() {
			return this.ep
		}
		;
		z.e.IA = function(a) {
			this.ep = a
		}
		;
		z.e.X = function() {
			z.Aj(this);
			return this.bf
		}
		;
		z.e.vx = aa(3);
		z.e.Uh = function() {
			z.Aj(this);
			return this.m()
		}
		;
		z.e.oj = function() {
			z.Aj(this);
			return z.yj.o.oj.call(this)
		}
		;
		z.e.Bm = function(a) {
			a != this.cm && Ej(this, a)
		}
		;
		z.e.B = function() {
			z.yj.o.B.call(this);
			var a = this.m()
				, b = this.L();
			this.xd = b.B("DIV", this.Pc + "-title", this.bd = b.B("SPAN", {
				className: this.Pc + "-title-text",
				id: this.ie()
			}, this.sB), this.wd = b.B("SPAN", this.Pc + "-title-close"));
			z.bg(a, this.xd, this.bf = b.B("DIV", this.Pc + "-content"), this.qc = b.B("DIV", this.Pc + "-buttons"));
			Nh(this.bd, "heading");
			Nh(this.wd, "button");
			Dg(this.wd, !0);
			P(this.wd, "label", KE);
			this.Iu = this.bd.id;
			Nh(a, this.$h());
			P(a, "labelledby", this.Iu || "");
			this.tc && z.Ef(this.bf, this.tc);
			z.Q(this.wd, this.ey);
			this.rc && (a = this.rc,
				a.h = this.qc,
				a.render());
			z.Q(this.qc, !!this.rc);
			Dj(this, this.Rq)
		}
		;
		z.e.ia = function(a) {
			z.yj.o.ia.call(this, a);
			a = this.m();
			var b = this.Pc + "-content";
			this.bf = z.Mf(null , b, a)[0];
			this.bf || (this.bf = this.L().B("DIV", b),
			this.tc && z.Ef(this.bf, this.tc),
				a.appendChild(this.bf));
			var b = this.Pc + "-title"
				, c = this.Pc + "-title-text"
				, d = this.Pc + "-title-close";
			(this.xd = z.Mf(null , b, a)[0]) ? (this.bd = z.Mf(null , c, this.xd)[0],
				this.wd = z.Mf(null , d, this.xd)[0]) : (this.xd = this.L().B("DIV", b),
				a.insertBefore(this.xd, this.bf));
			this.bd ? (this.sB = z.Eg(this.bd),
			this.bd.id || (this.bd.id = this.ie())) : (this.bd =
				z.M("SPAN", {
					className: c,
					id: this.ie()
				}),
				this.xd.appendChild(this.bd));
			this.Iu = this.bd.id;
			P(a, "labelledby", this.Iu || "");
			this.wd || (this.wd = this.L().B("SPAN", d),
				this.xd.appendChild(this.wd));
			z.Q(this.wd, this.ey);
			b = this.Pc + "-buttons";
			(this.qc = z.Mf(null , b, a)[0]) ? (this.rc = new z.Lj(this.L()),
				this.rc.w(this.qc)) : (this.qc = this.L().B("DIV", b),
				a.appendChild(this.qc),
			this.rc && (a = this.rc,
				a.h = this.qc,
				a.render()),
				z.Q(this.qc, !!this.rc));
			Dj(this, this.Rq)
		}
		;
		z.e.D = function() {
			z.yj.o.D.call(this);
			this.v().g(this.m(), "keydown", this.$o).g(this.m(), "keypress", this.$o);
			this.v().g(this.qc, "click", this.pR);
			Fj(this, this.Ow);
			this.v().g(this.wd, "click", this.mS);
			var a = this.m();
			Nh(a, this.$h());
			"" !== this.bd.id && P(a, "labelledby", this.bd.id);
			this.cm || Ej(this, !1)
		}
		;
		z.e.Db = function() {
			this.U() && this.G(!1);
			Fj(this, !1);
			z.yj.o.Db.call(this)
		}
		;
		z.e.G = function(a) {
			a != this.U() && (this.ya || this.render(),
				z.yj.o.G.call(this, a))
		}
		;
		z.e.li = function() {
			z.yj.o.li.call(this);
			this.dispatchEvent(Wl)
		}
		;
		z.e.gm = function() {
			z.yj.o.gm.call(this);
			this.dispatchEvent(Yl);
			this.wE && this.H()
		}
		;
		z.e.hU = function() {
			var a = this.L().wa()
				, b = z.Rf(z.Uf(a) || window)
				, c = Math.max(a.body.scrollWidth, b.width)
				, a = Math.max(a.body.scrollHeight, b.height)
				, d = z.Hi(this.m());
			"fixed" == qi(this.m()) ? this.Gb.gt = new gi(0,0,Math.max(0, b.width - d.width),Math.max(0, b.height - d.height)) || new gi(window.NaN,window.NaN,window.NaN,window.NaN) : this.Gb.gt = new gi(0,0,c - d.width,a - d.height) || new gi(window.NaN,window.NaN,window.NaN,window.NaN)
		}
		;
		z.e.mS = function() {
			Gj(this)
		}
		;
		z.e.Bf = function(a) {
			this.wE = a
		}
		;
		z.e.C = function() {
			this.qc = this.wd = null ;
			z.yj.o.C.call(this)
		}
		;
		z.e.pR = function(a) {
			a: {
				for (a = a.target; null  != a && a != this.qc; ) {
					if ("BUTTON" == a.tagName)
						break a;
					a = a.parentNode
				}
				a = null
			}
			if (a && !a.disabled) {
				a = a.name;
				var b = this.rc.get(a);
				this.dispatchEvent(new Hj(a,b)) && this.G(!1)
			}
		}
		;
		z.e.$o = function(a) {
			var b = !1
				, c = !1
				, d = this.rc
				, f = a.target;
			if ("keydown" == a.type)
				if (this.JE && 27 == a.keyCode) {
					var g = d && d.hw
						, f = "SELECT" == f.tagName && !f.disabled;
					g && !f ? (c = !0,
						b = d.get(g),
						b = this.dispatchEvent(new Hj(g,b))) : f || (b = !0)
				} else {
					if (9 == a.keyCode && a.shiftKey && f == this.m()) {
						this.Tv = !0;
						try {
							this.Ue.focus()
						} catch (m) {}
						z.ce(this.II, 0, this)
					}
				}
			else if (13 == a.keyCode) {
				if ("BUTTON" == f.tagName && !f.disabled)
					g = f.name;
				else if (f == this.wd)
					Gj(this);
				else if (d) {
					var h = d.Fw
						, k = h && d.mf(h)
						, f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName ||
						"A" == f.tagName) && !f.disabled;
					!k || k.disabled || f || (g = h)
				}
				g && d && (c = !0,
					b = this.dispatchEvent(new Hj(g,String(d.get(g)))))
			} else
				f == this.wd && 32 == a.keyCode && Gj(this);
			if (b || c)
				a.stopPropagation(),
					a.preventDefault();
			b && this.G(!1)
		}
		;
		z.v(Hj, z.qd);
		z.Kj = "dialogselect";
		Yl = "afterhide";
		Wl = "aftershow";
		z.v(z.Lj, Ce);
		z.e = z.Lj.prototype;
		z.e.Pc = "goog-buttonset";
		z.e.Fw = null ;
		z.e.h = null ;
		z.e.hw = null ;
		z.e.set = function(a, b, c, d) {
			Ce.prototype.set.call(this, a, b);
			c && (this.Fw = a);
			d && (this.hw = a);
			return this
		}
		;
		z.e.Cd = function(a, b, c) {
			return this.set(a.key, a.caption, b, c)
		}
		;
		z.e.render = function() {
			if (this.h) {
				z.Ef(this.h, Jj);
				var a = z.I(this.h);
				this.forEach(function(b, c) {
					var d = a.B("BUTTON", {
						name: c
					}, b);
					c == this.Fw && (d.className = this.Pc + "-default");
					this.h.appendChild(d)
				}, this)
			}
		}
		;
		z.e.w = function(a) {
			if (a && 1 == a.nodeType) {
				this.h = a;
				a = this.h.getElementsByTagName("BUTTON");
				for (var b = 0, c, d, f; c = a[b]; b++)
					if (d = c.name || c.id,
							f = z.Eg(c) || c.value,
							d) {
						var g = 0 == b;
						this.set(d, f, g, c.name == z.LE);
						g && z.Uh(c, this.Pc + "-default")
					}
			}
		}
		;
		z.e.m = function() {
			return this.h
		}
		;
		z.e.L = function() {
			return this.da
		}
		;
		z.e.mf = function(a) {
			for (var b = this.h.getElementsByTagName("BUTTON"), c = 0, d; d = b[c]; c++)
				if (d.name == a || d.id == a)
					return d;
			return null
		}
		;
		z.LE = "cancel";
		Vz = {
			sg: "ok",
			Ye: z.LE,
			tg: "yes",
			Bh: "no",
			Oi: "save",
			Mi: "continue"
		};
		ME = z.u("OK");
		NE = z.u("Cancel");
		OE = z.u("Yes");
		PE = z.u("No");
		QE = z.u("Save");
		RE = z.u("Continue");
		KE = z.u("Close");
		SE = {
			sg: ME,
			Ye: NE,
			tg: OE,
			Bh: PE,
			Oi: QE,
			Mi: RE
		};
		Mj = {
			sg: {
				key: "ok",
				caption: SE.sg
			},
			Ye: {
				key: z.LE,
				caption: SE.Ye
			},
			tg: {
				key: "yes",
				caption: SE.tg
			},
			Bh: {
				key: "no",
				caption: SE.Bh
			},
			Oi: {
				key: "save",
				caption: SE.Oi
			},
			Mi: {
				key: "continue",
				caption: SE.Mi
			}
		};
		"undefined" != typeof window.document && ((new z.Lj).Cd(Mj.sg, !0, !0),
			z.zj(),
			(new z.Lj).Cd(Mj.tg, !0).Cd(Mj.Bh, !1, !0),
			(new z.Lj).Cd(Mj.tg).Cd(Mj.Bh, !0).Cd(Mj.Ye, !1, !0),
			(new z.Lj).Cd(Mj.Mi).Cd(Mj.Oi).Cd(Mj.Ye, !0, !0));
		var hs, Wv;
		(function() {
			var a = Ot || Sj
				, b = a && window.navigator.userAgent.match(/OS\s(\w+)/)[1].slice(0, 3).replace(/_/g, ".");
			hs = "contentEditable" in window.document.documentElement && !(a && 5 > b) && !(is && 3 > window.navigator.userAgent.match(/Android (\d)/)[1]);
			var c = (0,
				window.$)(window.document.documentElement);
			z.TE = "ontouchstart" in window;
			c.addClass(Rj ? "mobile" : "no-mobile");
			z.UE = a && 6 <= b || !Rj;
			Wv = 1.5 <= window.devicePixelRatio;
			"orientation" in window && (a = function() {
				var a = {
						0: "portrait",
						90: "landscape landscape-left",
						"-90": "landscape landscape-right"
					}
					,
					b = a[window.orientation] || "";
				c.removeClass(z.ic(a).join(" ")).addClass(b)
			}
				,
				(0,
					window.$)(window).on("orientationchange", a),
				a())
		})();
		SE = {
			sg: "确定",
			Ye: "取消",
			tg: "是",
			Bh: "否",
			Oi: "保存",
			Mi: "继续"
		};
		Mj = {
			sg: {
				key: "ok",
				caption: SE.sg
			},
			Ye: {
				key: z.LE,
				caption: SE.Ye
			},
			tg: {
				key: "yes",
				caption: SE.tg
			},
			Bh: {
				key: "no",
				caption: SE.Bh
			},
			Oi: {
				key: "save",
				caption: SE.Oi
			},
			Mi: {
				key: "continue",
				caption: SE.Mi
			}
		};
		z.zj = function() {
			return (new z.Lj).Cd(Mj.Ye, !1, !0).Cd(Mj.sg, !0)
		}
		;
		z.v(z.S, z.yj);
		z.Ha("ZH.ui.Dialog", z.S);
		z.e = z.S.prototype;
		z.e.kK = null ;
		z.e.D = function() {
			var a = !z.TE;
			this.Ow = a;
			Fj(this, a && this.ya);
			z.S.o.D.call(this);
			this.Rk && Pj(this);
			z.Qj(this, this.kK)
		}
		;
		z.e.ZP = z.Nj(function() {
			var a = Wi()
				, b = a / 2
				, a = z.Na("html.modal-open {overflow:hidden}html.modal-doc-overflow {margin-right:%spx}html.modal-doc-overflow .modal-translate-shifting.sticky {transition-property:none; transform:translateX(-%spx)}html.modal-doc-overflow .modal-shifting {position:relative; right:%spx}", a, b, b);
			Mi(a)
		});
		z.e.yp = function(a) {
			this.Rk = a;
			this.ya && Pj(this)
		}
		;
		z.e.ea = function() {
			if (!this.cm || !window.Modernizr.flexbox)
				if (z.S.o.ea.call(this),
						!this.VE) {
					var a = (0,
						window.$)(this.m())
						, b = (0,
						window.$)(window).scrollTop();
					if (!Rj || Sj)
						var c = (0,
							window.parseInt)(a.css("top").slice(0, -2))
							, b = "-\x3d" + Math.min(c - b, 60) + "px";
					a.add(this.Ue).css("top", b)
				}
		}
		;
		z.e.focus = function() {
			Rj && !Sj || z.S.o.focus.call(this)
		}
		;
		z.S.prototype.setTitle = z.S.prototype.Ya;
		z.S.prototype.setModal = z.S.prototype.Bm;
		z.S.prototype.setDisposeOnHide = z.S.prototype.Bf;
		z.S.prototype.setVisible = z.S.prototype.G;
		z.S.prototype.getContentElement = z.S.prototype.X;
		z.S.prototype.getDialogElement = z.S.prototype.Uh;
		z.S.prototype.listen = z.S.prototype.g;
		z.Ha("ZH.dialog", z.U);
		z.U.confirm = Tj(function(a, b, c, d) {
			var f = {
				buttons: {
					yes: "确认",
					cancel: "取消"
				}
			}
				, g = void 0;
			z.ua(a) ? (g = a,
				c = b) : g = {
				title: a,
				content: b
			};
			window.$.extend(!0, f, g);
			return z.U(f, (c || z.p).bind(d))
		});
		z.U.confirm = z.U.confirm;
		z.U.alert = Tj(function(a, b) {
			var c = {
				title: "提示信息",
				buttons: {
					yes: "确定"
				}
			};
			z.ua(a) ? Object.assign(c, a) : c.content = a;
			return z.U(c, b)
		});
		z.U.alert = z.U.alert;
		z.U.message = Tj(function(a, b, c) {
			if (a) {
				var d = z.U({
					title: c || "提示信息",
					content: z.Va(a),
					buttons: {}
				});
				(0,
					window.setTimeout)(function() {
					d.G(!1)
				}, b || 2E3);
				return d
			}
		});
		z.U.async = function(a) {
			var b = window.$.extend({}, {
				title: "信息",
				mJ: "加载中",
				buttons: {},
				onload: z.p
			}, a)
				, c = z.M("div", {
				className: "modal-dialog-async-loading",
				innerHTML: (b.mJ || "加载中") + '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e'
			})
				, d = z.U(b);
			d.X().appendChild(c);
			b.tw && b.tw.then(function(a) {
				z.N(c);
				d.Gd || (a && d.ka(a),
					d.ea(),
					b.onload(d.X(), d))
			});
			return d
		}
		;
		var Zj;
		z.v(z.V, bf);
		var VE = /#.*$/
			, Wj = {
			"text/html": "html",
			"text/plain": "text",
			"application/json": "json",
			"application/javascript": "script",
			"application/x-javascript": "script"
		}
			, Xj = [];
		z.V.prototype.jO = function() {
			if (this.ZJ) {
				var a = Yj();
				z.Q(a, !1)
			}
			Vj(this)
		}
		;
		z.V.prototype.ajax = function(a, b, c) {
			a = (0,
				window.encodeURI)((0,
				window.decodeURI)(a));
			a = a.replace(VE, "");
			if (!this.fa) {
				if (this.ZJ) {
					var d = Yj();
					z.Q(d, !0)
				}
				c = c || "POST";
				"POST" === c.toUpperCase() && (d = z.ul.get("_xsrf")) && (b = (b ? b + "\x26_xsrf\x3d" : "_xsrf\x3d") + d);
				return this.send(a, c, b, this.headers)
			}
		}
		;
		z.v(ak, z.G);
		ak.prototype.v = function() {
			return this.Yf || (this.Yf = new z.ee(this))
		}
		;
		z.v(z.dk, z.qd);
		z.ek = new ak;
		z.G.prototype.on = function() {
			z.G.prototype.addEventListener.apply(this, arguments);
			return this
		}
		;
		z.G.prototype.off = function() {
			z.G.prototype.removeEventListener.apply(this, arguments);
			return this
		}
		;
		z.G.prototype.Ha = z.G.prototype.dispatchEvent;
		z.v(gk, fk);
		gk.prototype.ib = function() {
			var a = 0;
			z.ye(this.ed(!0), function() {
				a++
			});
			return a
		}
		;
		gk.prototype.clear = function() {
			var a = z.Ae(this.ed(!0))
				, b = this;
			z.x(a, function(a) {
				b.remove(a)
			})
		}
		;
		z.v(hk, gk);
		z.e = hk.prototype;
		z.e.Vl = function() {
			if (!this.Kc)
				return !1;
			try {
				return this.Kc.setItem("__sak", "1"),
					this.Kc.removeItem("__sak"),
					!0
			} catch (a) {
				return !1
			}
		}
		;
		z.e.set = function(a, b) {
			try {
				this.Kc.setItem(a, b)
			} catch (c) {
				if (0 == this.Kc.length)
					throw "Storage mechanism: Storage disabled";
				throw "Storage mechanism: Quota exceeded";
			}
		}
		;
		z.e.get = function(a) {
			a = this.Kc.getItem(a);
			if (!z.qa(a) && null  !== a)
				throw "Storage mechanism: Invalid value was encountered";
			return a
		}
		;
		z.e.remove = function(a) {
			this.Kc.removeItem(a)
		}
		;
		z.e.ib = function() {
			return this.Kc.length
		}
		;
		z.e.ed = function(a) {
			var b = 0
				, c = this.Kc
				, d = new z.ve;
			d.next = function() {
				if (b >= c.length)
					throw z.xe;
				var d = c.key(b++);
				if (a)
					return d;
				d = c.getItem(d);
				if (!z.qa(d))
					throw "Storage mechanism: Invalid value was encountered";
				return d
			}
			;
			return d
		}
		;
		z.e.clear = function() {
			this.Kc.clear()
		}
		;
		z.e.key = function(a) {
			return this.Kc.key(a)
		}
		;
		z.v(ik, hk);
		z.v(jk, hk);
		z.v(kk, gk);
		var nk = {
			".": ".2E",
			"!": ".21",
			"~": ".7E",
			"*": ".2A",
			"'": ".27",
			"(": ".28",
			")": ".29",
			"%": "."
		}
			, lk = null ;
		z.e = kk.prototype;
		z.e.Vl = function() {
			return !!this.vd
		}
		;
		z.e.set = function(a, b) {
			this.vd.setAttribute(mk(a), b);
			ok(this)
		}
		;
		z.e.get = function(a) {
			a = this.vd.getAttribute(mk(a));
			if (!z.qa(a) && null  !== a)
				throw "Storage mechanism: Invalid value was encountered";
			return a
		}
		;
		z.e.remove = function(a) {
			this.vd.removeAttribute(mk(a));
			ok(this)
		}
		;
		z.e.ib = function() {
			return pk(this).attributes.length
		}
		;
		z.e.ed = function(a) {
			var b = 0
				, c = pk(this).attributes
				, d = new z.ve;
			d.next = function() {
				if (b >= c.length)
					throw z.xe;
				var d = c[b++];
				if (a)
					return (0,
						window.decodeURIComponent)(d.nodeName.replace(/\./g, "%")).substr(1);
				d = d.nodeValue;
				if (!z.qa(d))
					throw "Storage mechanism: Invalid value was encountered";
				return d
			}
			;
			return d
		}
		;
		z.e.clear = function() {
			for (var a = pk(this), b = a.attributes.length; 0 < b; b--)
				a.removeAttribute(a.attributes[b - 1].nodeName);
			ok(this)
		}
		;
		z.v(qk, gk);
		qk.prototype.set = function(a, b) {
			this.Mo.set(this.nm + a, b)
		}
		;
		qk.prototype.get = function(a) {
			return this.Mo.get(this.nm + a)
		}
		;
		qk.prototype.remove = function(a) {
			this.Mo.remove(this.nm + a)
		}
		;
		qk.prototype.ed = function(a) {
			var b = this.Mo.ed(!0)
				, c = this
				, d = new z.ve;
			d.next = function() {
				for (var d = b.next(); d.substr(0, c.nm.length) != c.nm; )
					d = b.next();
				return a ? d.substr(c.nm.length) : c.Mo.get(d)
			}
			;
			return d
		}
		;
		var WE = {
			eL: "UserDataSharedStore",
			create: function(a) {
				return WE.SM(a) || WE.TM(a)
			},
			SM: function(a) {
				var b = new ik;
				return b.Vl() ? a ? new qk(b,a) : b : null
			},
			RW: function(a) {
				var b = new jk;
				return b.Vl() ? a ? new qk(b,a) : b : null
			},
			TM: function(a) {
				a = new kk(a || WE.eL);
				return a.Vl() ? a : null
			}
		};
		var XE = {};
		z.Da(XE, WE);
		XE.create = function(a) {
			(a = WE.create(a)) || (a = {
				Vl: z.mE,
				get: z.uz,
				set: z.p,
				remove: z.p
			});
			return a
		}
		;
		z.yk = XE.create();
		z.v(rk, z.cd);
		z.e = rk.prototype;
		z.e.tu = !1;
		z.e.Uz = 0;
		z.e.na = null ;
		z.e.fire = function(a) {
			this.Rv = arguments;
			this.na || this.Uz ? this.tu = !0 : this.Cg()
		}
		;
		z.e.stop = function() {
			this.na && (de(this.na),
				this.na = null ,
				this.tu = !1,
				this.Rv = [])
		}
		;
		z.e.pause = function() {
			this.Uz++
		}
		;
		z.e.C = function() {
			rk.o.C.call(this);
			this.stop()
		}
		;
		z.e.lS = function() {
			this.na = null ;
			this.tu && !this.Uz && (this.tu = !1,
				this.Cg())
		}
		;
		z.e.Cg = function() {
			this.na = z.ce(this.Zk, this.Pg);
			this.Rj.apply(null , this.Rv)
		}
		;
		window.$.easing.easeOutCubic = function(a, b, c, d, f) {
			return d * ((b = b / f - 1) * b * b + 1) + c
		}
		;
		(function(a) {
			window.$.fn.onTransitionEnd = function(b, c) {
				(0,
					window.$)(this).one(a, b).emulateTransitionEnd(c);
				return this
			}
			;
			window.$.fn.emulateTransitionEnd = function(b) {
				var c = !1
					, d = this;
				(0,
					window.$)(this).one(a, function() {
					c = !0
				});
				(0,
					window.setTimeout)(function() {
					c || (0,
						window.$)(d).trigger(a)
				}, b);
				return this
			}
		})({
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd",
			msTransition: "MSTransitionEnd",
			transition: "transitionend"
		}[window.Modernizr.prefixed("transition") ||
		"transition"]);
		(function(a) {
			window.$.fn.onAnimationEnd = function(b, c) {
				(0,
					window.$)(this).one(a, b).emulateAnimationEnd(c);
				return this
			}
			;
			window.$.fn.emulateAnimationEnd = function(b) {
				var c = !1
					, d = this;
				(0,
					window.$)(this).one(a, function() {
					c = !0
				});
				(0,
					window.setTimeout)(function() {
					c || (0,
						window.$)(d).trigger(a)
				}, b);
				return this
			}
		})({
			WebkitAnimation: "webkitAnimationEnd",
			MozAnimation: "mozAnimationEnd",
			OAnimation: "oanimationend",
			msAnimation: "MSAnimationEnd",
			animation: "animationend"
		}[window.Modernizr.prefixed("animation") || "animation"]);
		window.$.fn.Pd = function() {
			var a = {}
				, b = this.serializeArray();
			window.$.each(b, function() {
				a[this.name] ? (a[this.name].push || (a[this.name] = [a[this.name]]),
					a[this.name].push(this.value || "")) : a[this.name] = this.value || ""
			});
			return a
		}
		;
		z.v(sk, z.G);
		sk.prototype.Eb = function() {
			var a = this.Xp = new rk(this.update,this.dN,this);
			this.ha.g(this.viewport, ["scroll", "resize"], function() {
				a.fire()
			})
		}
		;
		sk.prototype.v = function() {
			return this.ha
		}
		;
		sk.prototype.C = function() {
			sk.o.C.call(this);
			this.ha.H();
			this.ha = null ;
			this.Xp.H();
			this.Xp = null
		}
		;
		sk.prototype.update = function() {
			this.size = (pg(this.viewport) ? z.Rf : Gi)(this.viewport);
			this.dispatchEvent("update")
		}
		;
		z.wk = new sk;
		(0,
			window.$)(function() {
			z.wk.update()
		});
		xk.prototype.jb = function() {
			var a = this.Kc.get(this.Qy);
			return a ? JSON.parse(a) : []
		}
		;
		xk.prototype.g = function(a) {
			this.QF.push(a)
		}
		;
		xk.prototype.Bt = function(a) {
			this.QF.forEach(function(b) {
				return b(a)
			})
		}
		;
		xk.prototype.restore = function() {
			var a = this.jb();
			a.length && (this.Bt(a),
				this.Kc.remove(this.Qy))
		}
		;
		var YE;
		window.za = window.za || [];
		var Bk = new xk("za");
		Bk.g(function(a) {
			z.x(a, function(a) {
				window.za.collect("event", a)
			})
		});
		YE = function() {
			var a = window.za = window.za || [];
			if (a.bQ)
				return void (window.console && window.console.error && window.console.error("Zhihu Analytics snippet included twice."));
			a.bQ = !0;
			a.methods = ["init", "collect", "set", "get"];
			a.factory = function(b) {
				return function() {
					var c = Array.prototype.slice.call(arguments);
					return c.unshift(b),
						a.push(c),
						a
				}
			}
			;
			for (var b = 0; b < a.methods.length; b++) {
				var c = a.methods[b];
				a[c] = a.factory(c)
			}
			a.load = function() {
				var a = window.document.createElement("script");
				a.type = "text/javascript";
				a.async =
					!0;
				a.src = ("https:" === window.document.location.protocol ? "https://" : "http://") + "zhstatic.zhihu.com/za/za-0.1.1.min.js";
				var b = window.document.getElementsByTagName("script")[0];
				b.parentNode.insertBefore(a, b)
			}
			;
			a.tW = "0.0.9";
			a.init("ZA-11427260206", "https://zhihu-web-analytics.zhihu.com");
			a.set({
				userID: z.X.$Q || null
			});
			a.collect("pageview");
			return a.load
		}();
		z.v(Fk, z.G);
		Fk.prototype.Eb = function() {
			var a = (0,
				z.r)(function(a) {
				var c = this.kr.section;
				(c = c && c["home-topstory"]) && (c.content = a)
			}, this);
			Mk(this).always((0,
				z.r)(function(b) {
				this.lb || (b && b.Om && b.Om.length && a("这里是根据你关注的话题和人定制的内容精选"),
					this.J.ak(),
					Ik(this),
					Kk(this))
			}, this));
			this.lb || Lk()
		}
		;
		z.v(Nk, z.G);
		z.e = Nk.prototype;
		z.e.h = null ;
		z.e.Ws = null ;
		z.e.Oy = null ;
		z.e.Xs = null ;
		z.e.le = -1;
		z.e.fi = -1;
		z.e.Kv = !1;
		var ZE = {
			3: 13,
			12: 144,
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63236: 112,
			63237: 113,
			63238: 114,
			63239: 115,
			63240: 116,
			63241: 117,
			63242: 118,
			63243: 119,
			63244: 120,
			63245: 121,
			63246: 122,
			63247: 123,
			63248: 44,
			63272: 46,
			63273: 36,
			63275: 35,
			63276: 33,
			63277: 34,
			63289: 144,
			63302: 45
		}
			, $E = {
			Up: 38,
			Down: 40,
			Left: 37,
			Right: 39,
			Enter: 13,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			"U+007F": 46,
			Home: 36,
			End: 35,
			PageUp: 33,
			PageDown: 34,
			Insert: 45
		}
			, aF = z.C || z.ld || z.D && z.E("525")
			, bF = z.Ad && z.B;
		z.e = Nk.prototype;
		z.e.pf = function(a) {
			if (z.D || z.ld)
				if (17 == this.le && !a.ctrlKey || 18 == this.le && !a.altKey || z.Ad && 91 == this.le && !a.metaKey)
					this.fi = this.le = -1;
			-1 == this.le && (a.ctrlKey && 17 != a.keyCode ? this.le = 17 : a.altKey && 18 != a.keyCode ? this.le = 18 : a.metaKey && 91 != a.keyCode && (this.le = 91));
			aF && !ai(a.keyCode, this.le, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.fi = ci(a.keyCode),
			bF && (this.Kv = a.altKey))
		}
		;
		z.e.LO = function(a) {
			this.fi = this.le = -1;
			this.Kv = a.altKey
		}
		;
		z.e.handleEvent = function(a) {
			var b = a.hc, c, d, f = b.altKey;
			z.C && "keypress" == a.type ? (c = this.fi,
				d = 13 != c && 27 != c ? b.keyCode : 0) : (z.D || z.ld) && "keypress" == a.type ? (c = this.fi,
				d = 0 <= b.charCode && 63232 > b.charCode && bi(c) ? b.charCode : 0) : z.li && !z.D ? (c = this.fi,
				d = bi(c) ? b.keyCode : 0) : (c = b.keyCode || this.fi,
				d = b.charCode || 0,
			bF && (f = this.Kv),
			z.Ad && 63 == d && 224 == c && (c = 191));
			var g = c = ci(c)
				, h = b.keyIdentifier;
			c ? 63232 <= c && c in ZE ? g = ZE[c] : 25 == c && a.shiftKey && (g = 9) : h && h in $E && (g = $E[h]);
			a = g == this.le;
			this.le = g;
			b = new Ok(g,d,a,b);
			b.altKey = f;
			this.dispatchEvent(b)
		}
		;
		z.e.m = function() {
			return this.h
		}
		;
		z.e.attach = function(a, b) {
			this.Xs && this.detach();
			this.h = a;
			this.Ws = z.F(this.h, "keypress", this, b);
			this.Oy = z.F(this.h, "keydown", this.pf, b, this);
			this.Xs = z.F(this.h, "keyup", this.LO, b, this)
		}
		;
		z.e.detach = function() {
			this.Ws && (z.Vd(this.Ws),
				z.Vd(this.Oy),
				z.Vd(this.Xs),
				this.Xs = this.Oy = this.Ws = null );
			this.h = null ;
			this.fi = this.le = -1
		}
		;
		z.e.C = function() {
			Nk.o.C.call(this);
			this.detach()
		}
		;
		z.v(Ok, ud);
		var cF;
		z.ma(Pk);
		var dF = {
			button: "pressed",
			checkbox: "checked",
			menuitem: "selected",
			menuitemcheckbox: "checked",
			menuitemradio: "checked",
			radio: "checked",
			tab: "selected",
			treeitem: "selected"
		};
		z.e = Pk.prototype;
		z.e.lf = function() {}
		;
		z.e.B = function(a) {
			return a.L().B("DIV", this.Wf(a).join(" "), a.Va())
		}
		;
		z.e.X = function(a) {
			return a
		}
		;
		z.e.hj = function(a, b, c) {
			if (a = a.m ? a.m() : a) {
				var d = [b];
				z.C && !z.E("7") && (d = Tk(Sh(a), b),
					d.push(b));
				(c ? Vh : Xh)(a, d)
			}
		}
		;
		z.e.Ob = function() {
			return !0
		}
		;
		z.e.w = function(a, b) {
			b.id && jj(a, b.id);
			var c = this.X(b);
			c && c.firstChild ? a.zm(c.firstChild.nextSibling ? z.Vb(c.childNodes) : c.firstChild) : a.zm(null );
			var d = 0
				, f = this.T()
				, g = this.T()
				, h = !1
				, k = !1
				, m = !1
				, n = z.Vb(Sh(b));
			z.x(n, function(a) {
				h || a != f ? k || a != g ? d |= this.fs(a) : k = !0 : (h = !0,
				g == f && (k = !0));
				1 == this.fs(a) && Ag(c) && Dg(c, !1)
			}, this);
			a.O = d;
			h || (n.push(f),
			g == f && (k = !0));
			k || n.push(g);
			var q = a.kf;
			q && n.push.apply(n, q);
			if (z.C && !z.E("7")) {
				var A = Tk(n);
				0 < A.length && (n.push.apply(n, A),
					m = !0)
			}
			if (!h || !k || q || m)
				b.className = n.join(" ");
			return b
		}
		;
		z.e.Ge = function(a) {
			a.Ld() && this.yi(a.m(), !0);
			a.isEnabled() && this.Te(a, a.U())
		}
		;
		z.e.CA = function(a, b) {
			P(a, "label", b)
		}
		;
		z.e.xp = function(a, b) {
			z.Oi(a, !b, !z.C && !z.li)
		}
		;
		z.e.yi = function(a, b) {
			this.hj(a, this.T() + "-rtl", b)
		}
		;
		z.e.Rg = function(a) {
			var b;
			return Sk(a, 32) && (b = a.Yb()) ? Ag(b) : !1
		}
		;
		z.e.Te = function(a, b) {
			var c;
			if (Sk(a, 32) && (c = a.Yb())) {
				if (!b && a.O & 32) {
					try {
						c.blur()
					} catch (d) {}
					a.O & 32 && a.Vc(null )
				}
				Ag(c) != b && Dg(c, b)
			}
		}
		;
		z.e.G = function(a, b) {
			z.Q(a, b);
			a && P(a, "hidden", !b)
		}
		;
		z.e.mc = function(a, b, c) {
			var d = a.m();
			if (d) {
				var f = this.Vn(b);
				f && this.hj(a, f, c);
				this.og(d, b, c)
			}
		}
		;
		z.e.og = function(a, b, c) {
			cF || (cF = {
				1: "disabled",
				8: "selected",
				16: "checked",
				64: "expanded"
			});
			b = cF[b];
			var d = a.getAttribute("role") || null ;
			d && (d = dF[d] || b,
				b = "checked" == b || "selected" == b ? d : b);
			b && P(a, b, c)
		}
		;
		z.e.ka = function(a, b) {
			var c = this.X(a);
			if (c && (z.cg(c),
					b))
				if (z.qa(b))
					z.wg(c, b);
				else {
					var d = function(a) {
							if (a) {
								var b = z.Kf(c);
								c.appendChild(z.qa(a) ? b.createTextNode(a) : a)
							}
						}
						;
					z.oa(b) ? z.x(b, d) : !z.pa(b) || "nodeType" in b ? d(b) : z.x(z.Vb(b), d)
				}
		}
		;
		z.e.Yb = function(a) {
			return a.m()
		}
		;
		z.e.T = function() {
			return "goog-control"
		}
		;
		z.e.Wf = function(a) {
			var b = this.T()
				, c = [b]
				, d = this.T();
			d != b && c.push(d);
			b = a.getState();
			for (d = []; b; ) {
				var f = b & -b;
				d.push(this.Vn(f));
				b &= ~f
			}
			c.push.apply(c, d);
			(a = a.kf) && c.push.apply(c, a);
			z.C && !z.E("7") && c.push.apply(c, Tk(c));
			return c
		}
		;
		z.e.Vn = function(a) {
			this.dr || Uk(this);
			return this.dr[a]
		}
		;
		z.e.fs = function(a) {
			this.sJ || (this.dr || Uk(this),
				this.sJ = z.qc(this.dr));
			a = (0,
				window.parseInt)(this.sJ[a], 10);
			return (0,
				window.isNaN)(a) ? 0 : a
		}
		;
		z.v(z.Vk, Pk);
		z.ma(z.Vk);
		z.e = z.Vk.prototype;
		z.e.lf = function() {
			return "button"
		}
		;
		z.e.og = function(a, b, c) {
			switch (b) {
				case 8:
				case 16:
					P(a, "pressed", c);
					break;
				default:
				case 64:
				case 1:
					z.Vk.o.og.call(this, a, b, c)
			}
		}
		;
		z.e.B = function(a) {
			var b = z.Vk.o.B.call(this, a);
			this.ud(b, a.Gl());
			var c = a.W();
			c && this.Fa(b, c);
			Sk(a, 16) && this.og(b, 16, a.sf());
			return b
		}
		;
		z.e.w = function(a, b) {
			b = z.Vk.o.w.call(this, a, b);
			var c = this.W(b);
			a.pe = c;
			a.uB = this.Gl(b);
			Sk(a, 16) && this.og(b, 16, a.sf());
			return b
		}
		;
		z.e.W = z.p;
		z.e.Fa = z.p;
		z.e.Gl = function(a) {
			return a.title
		}
		;
		z.e.ud = function(a, b) {
			a && (b ? a.title = b : a.removeAttribute("title"))
		}
		;
		z.e.wi = aa(5);
		z.e.T = function() {
			return "goog-button"
		}
		;
		var Zk = {}
			, Xk = {};
		z.v(Yk, z.R);
		z.e = Yk.prototype;
		z.e.tc = null ;
		z.e.O = 0;
		z.e.Vp = 39;
		z.e.Si = 255;
		z.e.sk = 0;
		z.e.ob = !0;
		z.e.kf = null ;
		z.e.uj = !0;
		z.e.Gq = !1;
		z.e.ep = null ;
		z.e.Dp = function(a) {
			this.ya && a != this.uj && $k(this, a);
			this.uj = a
		}
		;
		z.e.Yb = function() {
			return this.N.Yb(this)
		}
		;
		z.e.cs = function() {
			return this.sb || (this.sb = new Nk)
		}
		;
		z.e.Dh = function(a) {
			a && (this.kf ? z.y(this.kf, a) || this.kf.push(a) : this.kf = [a],
				this.N.hj(this, a, !0))
		}
		;
		z.e.hj = function(a, b) {
			b ? this.Dh(a) : a && this.kf && Tb(this.kf, a) && (0 == this.kf.length && (this.kf = null ),
				this.N.hj(this, a, !1))
		}
		;
		z.e.B = function() {
			var a = this.N.B(this);
			this.h = a;
			Qk(this.N, a, this.$h());
			this.Gq || this.N.xp(a, !1);
			this.U() || this.N.G(a, !1)
		}
		;
		z.e.$h = function() {
			return this.ep
		}
		;
		z.e.IA = function(a) {
			this.ep = a
		}
		;
		z.e.CA = function(a) {
			this.UC = a;
			var b = this.m();
			b && this.N.CA(b, a)
		}
		;
		z.e.X = function() {
			return this.N.X(this.m())
		}
		;
		z.e.Ob = function(a) {
			return this.N.Ob(a)
		}
		;
		z.e.ia = function(a) {
			this.h = a = this.N.w(this, a);
			Qk(this.N, a, this.$h());
			this.Gq || this.N.xp(a, !1);
			this.ob = "none" != a.style.display
		}
		;
		z.e.D = function() {
			Yk.o.D.call(this);
			Rk(this.N, this, this.h);
			this.N.Ge(this);
			if (this.Vp & -2 && (this.uj && $k(this, !0),
					Sk(this, 32))) {
				var a = this.Yb();
				if (a) {
					var b = this.cs();
					b.attach(a);
					this.v().g(b, "key", this.Zb).g(a, "focus", this.je).g(a, "blur", this.Vc)
				}
			}
		}
		;
		z.e.Db = function() {
			Yk.o.Db.call(this);
			this.sb && this.sb.detach();
			this.U() && this.isEnabled() && this.N.Te(this, !1)
		}
		;
		z.e.C = function() {
			Yk.o.C.call(this);
			this.sb && (this.sb.H(),
				delete this.sb);
			delete this.N;
			this.ro = this.kf = this.tc = null
		}
		;
		z.e.Va = function() {
			return this.tc
		}
		;
		z.e.ka = function(a) {
			this.N.ka(this.m(), a);
			this.zm(a)
		}
		;
		z.e.zm = function(a) {
			this.tc = a
		}
		;
		z.e.Ig = function() {
			var a = this.Va();
			if (!a)
				return "";
			a = z.qa(a) ? a : z.oa(a) ? z.Kb(a, z.Hg).join("") : z.Eg(a);
			return Sa(a)
		}
		;
		z.e.zp = function(a) {
			this.ka(a)
		}
		;
		z.e.yi = function(a) {
			Yk.o.yi.call(this, a);
			var b = this.m();
			b && this.N.yi(b, a)
		}
		;
		z.e.xp = function(a) {
			this.Gq = a;
			var b = this.m();
			b && this.N.xp(b, a)
		}
		;
		z.e.U = function() {
			return this.ob
		}
		;
		z.e.G = function(a, b) {
			if (b || this.ob != a && this.dispatchEvent(a ? "show" : "hide")) {
				var c = this.m();
				c && this.N.G(c, a);
				this.isEnabled() && this.N.Te(this, a);
				this.ob = a;
				return !0
			}
			return !1
		}
		;
		z.e.isEnabled = function() {
			return !(this.O & 1)
		}
		;
		z.e.Xa = function(a) {
			var b = this.getParent();
			b && "function" == typeof b.isEnabled && !b.isEnabled() || !cl(this, 1, !a) || (a || (this.setActive(!1),
				this.Jc(!1)),
			this.U() && this.N.Te(this, a),
				this.mc(1, !a, !0))
		}
		;
		z.e.Jc = function(a) {
			cl(this, 2, a) && this.mc(2, a)
		}
		;
		z.e.Rb = function() {
			return !!(this.O & 4)
		}
		;
		z.e.setActive = function(a) {
			cl(this, 4, a) && this.mc(4, a)
		}
		;
		z.e.JA = function(a) {
			cl(this, 8, a) && this.mc(8, a)
		}
		;
		z.e.sf = function() {
			return !!(this.O & 16)
		}
		;
		z.e.Hc = function(a) {
			cl(this, 16, a) && this.mc(16, a)
		}
		;
		z.e.rb = function() {
			return !!(this.O & 64)
		}
		;
		z.e.Ab = function(a) {
			cl(this, 64, a) && this.mc(64, a)
		}
		;
		z.e.getState = function() {
			return this.O
		}
		;
		z.e.mc = function(a, b, c) {
			c || 1 != a ? Sk(this, a) && b != !!(this.O & a) && (this.N.mc(this, a, b),
				this.O = b ? this.O | a : this.O & ~a) : this.Xa(!b)
		}
		;
		z.e.Ub = function(a, b) {
			if (this.ya && this.O & a && !b)
				throw Error("Component already rendered");
			!b && this.O & a && this.mc(a, !1);
			this.Vp = b ? this.Vp | a : this.Vp & ~a
		}
		;
		z.e.md = function(a) {
			(!a.relatedTarget || !z.qg(this.m(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && bl(this, 2) && this.Jc(!0)
		}
		;
		z.e.Kl = function(a) {
			a.relatedTarget && z.qg(this.m(), a.relatedTarget) || !this.dispatchEvent("leave") || (bl(this, 4) && this.setActive(!1),
			bl(this, 2) && this.Jc(!1))
		}
		;
		z.e.io = z.p;
		z.e.ke = function(a) {
			this.isEnabled() && (bl(this, 2) && this.Jc(!0),
			z.zd(a) && (bl(this, 4) && this.setActive(!0),
			this.N && this.N.Rg(this) && this.Yb().focus()));
			!this.Gq && z.zd(a) && a.preventDefault()
		}
		;
		z.e.rf = function(a) {
			this.isEnabled() && (bl(this, 2) && this.Jc(!0),
			this.Rb() && this.Od(a) && bl(this, 4) && this.setActive(!1))
		}
		;
		z.e.pF = function(a) {
			this.isEnabled() && this.Od(a)
		}
		;
		z.e.Od = function(a) {
			bl(this, 16) && this.Hc(!this.sf());
			bl(this, 8) && this.JA(!0);
			bl(this, 64) && this.Ab(!this.rb());
			var b = new z.qd("action",this);
			a && (b.altKey = a.altKey,
				b.ctrlKey = a.ctrlKey,
				b.metaKey = a.metaKey,
				b.shiftKey = a.shiftKey,
				b.Wz = a.Wz);
			return this.dispatchEvent(b)
		}
		;
		z.e.je = function() {
			bl(this, 32) && cl(this, 32, !0) && this.mc(32, !0)
		}
		;
		z.e.Vc = function() {
			bl(this, 4) && this.setActive(!1);
			bl(this, 32) && cl(this, 32, !1) && this.mc(32, !1)
		}
		;
		z.e.Zb = function(a) {
			return this.U() && this.isEnabled() && this.qf(a) ? (a.preventDefault(),
				a.stopPropagation(),
				!0) : !1
		}
		;
		z.e.qf = function(a) {
			return 13 == a.keyCode && this.Od(a)
		}
		;
		if (!z.ta(Yk))
			throw Error("Invalid component class " + Yk);
		if (!z.ta(Pk))
			throw Error("Invalid renderer class " + Pk);
		var eF = wa(Yk);
		Zk[eF] = Pk;
		z.Wk("goog-control", function() {
			return new Yk(null )
		});
		z.v(al, z.cd);
		al.prototype.Il = function() {
			this.er = !1
		}
		;
		al.prototype.us = function() {
			this.er = !0
		}
		;
		al.prototype.Hl = function(a) {
			if (this.er)
				this.er = !1;
			else {
				var b = a.hc
					, c = b.button
					, d = b.type;
				b.button = 0;
				b.type = "mousedown";
				this.or.ke(new ud(b,a.currentTarget));
				b.type = "mouseup";
				this.or.rf(new ud(b,a.currentTarget));
				b.button = c;
				b.type = d
			}
		}
		;
		al.prototype.C = function() {
			this.or = null ;
			al.o.C.call(this)
		}
		;
		z.v(dl, z.Vk);
		z.ma(dl);
		z.e = dl.prototype;
		z.e.lf = function() {}
		;
		z.e.B = function(a) {
			a.Dp(!1);
			a.Si &= -256;
			a.Ub(32, !1);
			return a.L().B("BUTTON", {
				"class": this.Wf(a).join(" "),
				disabled: !a.isEnabled(),
				title: a.Gl() || "",
				value: a.W() || ""
			}, a.Ig() || "")
		}
		;
		z.e.Ob = function(a) {
			return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
		}
		;
		z.e.w = function(a, b) {
			a.Dp(!1);
			a.Si &= -256;
			a.Ub(32, !1);
			if (b.disabled) {
				var c = this.Vn(1);
				z.Uh(b, c)
			}
			return dl.o.w.call(this, a, b)
		}
		;
		z.e.Ge = function(a) {
			a.v().g(a.m(), "click", a.Od)
		}
		;
		z.e.xp = z.p;
		z.e.yi = z.p;
		z.e.Rg = function(a) {
			return a.isEnabled()
		}
		;
		z.e.Te = z.p;
		z.e.mc = function(a, b, c) {
			dl.o.mc.call(this, a, b, c);
			(a = a.m()) && 1 == b && (a.disabled = c)
		}
		;
		z.e.W = function(a) {
			return a.value
		}
		;
		z.e.Fa = function(a, b) {
			a && (a.value = b)
		}
		;
		z.e.og = z.p;
		z.v(z.el, Yk);
		z.e = z.el.prototype;
		z.e.W = function() {
			return this.pe
		}
		;
		z.e.Fa = function(a) {
			this.pe = a;
			this.N.Fa(this.m(), a)
		}
		;
		z.e.Gl = function() {
			return this.uB
		}
		;
		z.e.ud = function(a) {
			this.uB = a;
			this.N.ud(this.m(), a)
		}
		;
		z.e.wi = aa(4);
		z.e.C = function() {
			z.el.o.C.call(this);
			delete this.pe;
			delete this.uB
		}
		;
		z.e.D = function() {
			z.el.o.D.call(this);
			if (Sk(this, 32)) {
				var a = this.Yb();
				a && this.v().g(a, "keyup", this.qf)
			}
		}
		;
		z.e.qf = function(a) {
			return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Od(a) : 32 == a.keyCode
		}
		;
		z.Wk("goog-button", function() {
			return new z.el(null )
		});
		z.v(fl, Pk);
		z.ma(fl);
		fl.prototype.B = function(a) {
			var b = a.L().B("SPAN", this.Wf(a).join(" "));
			gl(this, b, a.Kh);
			return b
		}
		;
		fl.prototype.w = function(a, b) {
			b = fl.o.w.call(this, a, b);
			var c = Sh(b)
				, d = ll;
			z.y(c, hl(this, jl)) ? d = jl : z.y(c, hl(this, kl)) ? d = kl : z.y(c, hl(this, ll)) && (d = ll);
			a.Kh = d;
			P(b, "checked", d == jl ? "mixed" : d == kl ? "true" : "false");
			return b
		}
		;
		fl.prototype.lf = function() {
			return "checkbox"
		}
		;
		fl.prototype.T = function() {
			return "goog-checkbox"
		}
		;
		z.v(ml, Yk);
		var kl = !0
			, ll = !1
			, jl = null
			, il = {
			PV: kl,
			AW: ll,
			DW: jl
		};
		z.e = ml.prototype;
		z.e.Lb = null ;
		z.e.sf = function() {
			return this.Kh == kl
		}
		;
		z.e.Hc = function(a) {
			a != this.Kh && (this.Kh = a,
				gl(this.N, this.m(), this.Kh))
		}
		;
		z.e.toggle = function() {
			this.Hc(this.Kh ? ll : kl)
		}
		;
		z.e.D = function() {
			ml.o.D.call(this);
			if (this.uj) {
				var a = this.v();
				this.Lb && a.g(this.Lb, "click", this.Px).g(this.Lb, "mouseover", this.md).g(this.Lb, "mouseout", this.Kl).g(this.Lb, "mousedown", this.ke).g(this.Lb, "mouseup", this.rf);
				a.g(this.m(), "click", this.Px)
			}
			a = this.h;
			if (this.Lb && a != this.Lb && z.Oa(Rh(a))) {
				if (!this.Lb.id) {
					var b = this.Lb, c;
					c = this.ie() + ".lbl";
					b.id = c
				}
				P(a, "labelledby", this.Lb.id)
			}
		}
		;
		z.e.Xa = function(a) {
			ml.o.Xa.call(this, a);
			if (a = this.m())
				a.tabIndex = this.isEnabled() ? 0 : -1
		}
		;
		z.e.Px = function(a) {
			a.stopPropagation();
			var b = this.Kh ? "uncheck" : "check";
			this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(),
				this.toggle(),
				this.dispatchEvent("change"))
		}
		;
		z.e.qf = function(a) {
			32 == a.keyCode && (this.Od(a),
				this.Px(a));
			return !1
		}
		;
		z.Wk("goog-checkbox", function() {
			return new ml
		});
		z.v(z.nl, z.Vk);
		z.ma(z.nl);
		z.e = z.nl.prototype;
		z.e.B = function(a) {
			var b = {
				"class": "goog-inline-block " + this.Wf(a).join(" ")
			}
				, b = a.L().B("DIV", b, a.Va());
			this.ud(b, a.Gl());
			return b
		}
		;
		z.e.lf = function() {
			return "button"
		}
		;
		z.e.Ob = function(a) {
			return "DIV" == a.tagName
		}
		;
		z.e.w = function(a, b) {
			z.Uh(b, "goog-inline-block");
			return z.nl.o.w.call(this, a, b)
		}
		;
		z.e.W = function() {
			return ""
		}
		;
		z.e.T = function() {
			return "goog-flat-button"
		}
		;
		z.Wk("goog-flat-button", function() {
			return new z.el(null ,z.nl.Y())
		});
		z.v(ol, z.nl);
		z.ma(ol);
		ol.prototype.T = function() {
			return "goog-link-button"
		}
		;
		z.Wk("goog-link-button", function() {
			return new z.el(null ,ol.Y())
		});
		z.v(z.pl, z.G);
		z.e = z.pl.prototype;
		z.e.uj = !0;
		z.e.C = function() {
			z.pl.o.C.call(this);
			hd(this.BG);
			hd(this.pz)
		}
		;
		z.e.lf = function() {
			return "tab"
		}
		;
		z.e.X = function() {
			return this.nl
		}
		;
		z.e.expand = function() {
			this.Ic(!0)
		}
		;
		z.e.collapse = function() {
			this.Ic(!1)
		}
		;
		z.e.toggle = function() {
			this.Ic(!this.Jb)
		}
		;
		z.e.Ic = function(a) {
			this.nl ? z.Q(this.nl, a) : a && this.ct && (this.nl = this.ct());
			this.nl && z.Uh(this.nl, "goog-zippy-content");
			this.gj ? (z.Q(this.Qf, !a),
				z.Q(this.gj, a)) : this.Qf && (Yh(this.Qf, "goog-zippy-expanded", a),
				Yh(this.Qf, "goog-zippy-collapsed", !a),
				P(this.Qf, "expanded", a));
			this.Jb = a;
			this.dispatchEvent(new sl("toggle",this,this.Jb))
		}
		;
		z.e.vc = function() {
			return this.Jb
		}
		;
		z.e.Dp = function(a) {
			this.uj != a && ((this.uj = a) ? (ql(this, this.Qf),
				ql(this, this.gj)) : this.pz.removeAll())
		}
		;
		z.e.ER = function(a) {
			if (13 == a.keyCode || 32 == a.keyCode)
				this.toggle(),
					this.dispatchEvent(new z.qd("action",this)),
					a.preventDefault(),
					a.stopPropagation()
		}
		;
		z.e.DR = function() {
			this.toggle();
			this.dispatchEvent(new z.qd("action",this))
		}
		;
		z.v(sl, z.qd);
		tl();
		z.v(xl, z.S);
		z.e = xl.prototype;
		z.e.B = function() {
			xl.o.B.call(this);
			var a = (0,
				window.$)(".activate-dialog-template").html();
			this.ka(a)
		}
		;
		z.e.D = function() {
			xl.o.D.call(this);
			z.Qj(this, 420);
			this.Ya("激活帐号");
			this.Ad = (0,
				window.$)(this.Uh()).addClass("activate-dialog");
			this.Eb()
		}
		;
		z.e.Eb = function() {
			this.cC = (0,
				window.$)(".link-activate-view", this.Ad);
			this.WB = (0,
				window.$)(".code-activate-view", this.Ad);
			this.cC.length ? yl(this) : Al(this)
		}
		;
		z.e.fS = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			a = c.Pd();
			var d = a.account
				, f = this.tf(d)
				, g = f ? "/settings/account/send_new_email_digits" : "/settings/account/send_new_phone_digits";
			f ? this.hb(a, "account", "email") : this.hb(a, "account", "phone_no");
			return window.$.post(g, a, function(a) {
				a.success ? (c.hide(),
					(0,
						window.$)('input[name\x3d"account"]', b.UB).val(d),
					b.UB.show(),
					Cl(b, f)) : (a = a.payload.fields,
					f ? b.hb(a, "email", "account") : b.hb(a, "phone_no", "account"),
					c.data("validator").showErrors(a))
			})
		}
		;
		z.e.fR = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			a = c.Pd();
			var d = this.tf(a.account)
				, f = d ? "/settings/account/update_email" : "/settings/account/update_phone";
			d ? this.hb(a, "account", "email") : this.hb(a, "account", "phone_no");
			return window.$.post(f, a, function(a) {
				a.success ? (b.ka("激活成功。你可以正常使用提问、回答、评论等功能啦！"),
					(0,
						window.setTimeout)(function() {
						window.location.reload()
					}, 1E3)) : (a = a.payload.fields,
					d ? b.hb(a, "email", "account") : b.hb(a, "phone_no", "account"),
					c.data("validator").showErrors(a))
			})
		}
		;
		z.e.hb = function(a, b, c) {
			a[b] && (a[c] = a[b],
				delete a[b])
		}
		;
		z.e.tf = function(a) {
			return !/^\+?[0-9]+$/.test(a)
		}
		;
		var Bl = {
			onkeyup: !1,
			onfocusout: !1,
			validClass: "",
			focusInvalid: !1,
			highlight: z.p,
			messages: {
				account: {
					required: "请填写手机号或邮箱"
				},
				digits: {
					required: "请填写验证码"
				}
			},
			errorPlacement: function(a, b) {
				var c = b.parent(".input-wrapper");
				a.appendTo(c).click(function() {
					b.focus()
				});
				b.focus(function() {
					a.remove()
				})
			}
		};
		z.v(z.Dl, z.G);
		z.Dl.prototype.v = function() {
			return this.Yf || (this.Yf = new z.ee(this))
		}
		;
		z.Dl.prototype.Hg = function(a, b) {
			if (!this.h)
				return null ;
			for (var c = b || "A", d = a; null  != d && d !== this.h; ) {
				if (d.tagName === c)
					return d;
				d = d.parentNode
			}
			return null
		}
		;
		z.v(El, z.Dl);
		El.prototype.init = function() {
			if (this.h = z.J("zh-global-message"))
				this.oH = z.L("zu-global-notify-msg", this.h),
					this.v().g(this.h, "click", this.Oa)
		}
		;
		El.prototype.Oa = function(a) {
			a.target && a.target.name && z.Q(this.h, !1)
		}
		;
		El.prototype.fireEvent = function(a) {
			this.dispatchEvent(a)
		}
		;
		z.v(z.Gl, z.qd);
		z.W = new El;
		z.W.init();
		z.Ha("ZH.i", function(a) {
			z.W.dispatchEvent(new z.Gl("iframe_data",a))
		});
		z.Ha("ZH.cm", function(a, b) {
			z.W.dispatchEvent(new z.Gl(a,b))
		});
		z.v(z.Il, z.cd);
		z.Il.prototype.start = function() {
			if (!this.Do) {
				this.Do = !0;
				this.ne = {};
				var a = z.Rf();
				this.ne.viewport = [a.width, a.height, (0,
					z.w)()];
				var b = []
					, c = 0
					, d = 0;
				(0,
					window.$)(window.document).on("mousemove.recording", function(a) {
					c = a.clientX;
					d = a.clientY
				});
				var f = this
					, g = function() {
						(0,
							window.setTimeout)(function() {
							150 <= b.length && b.shift();
							b.push([c, d, (0,
								z.w)()]);
							f.Do && g()
						}, 500)
					}
					;
				g();
				this.ne.trace = b;
				var h = {};
				this.hv.on("keydown.recording keyup.recording mouseenter.recording mouseleave.recording click.recording", "input",
					function(a) {
						var b = a.target.name
							, c = h[b];
						c || (c = h[b] = {
							mouse: [],
							keyborad: []
						});
						"mouseenter" === a.type || "mouseleave" === a.type || "click" === a.type ? c.mouse.push([a.type, a.offsetX, a.offsetY, (0,
							z.w)()]) : "password" === b ? c.keyborad.push([a.type, (0,
							z.w)()]) : c.keyborad.push([a.type, a.keyCode, (0,
							z.w)()])
					});
				h.submit = [];
				this.hv.on("mousedown.recording mouseenter.recording mouseleave.recording", ":submit", function(a) {
					h.submit.push([a.type, a.offsetX, a.offsetY, (0,
						z.w)()])
				});
				this.ne.register = h
			}
		}
		;
		z.Il.prototype.stop = function() {
			this.Do && (this.Do = !1,
				(0,
					window.$)(window.document).off(".recording"),
				this.hv.off(".recording"));
			return this.ne
		}
		;
		z.Il.prototype.C = function() {
			z.Il.o.C.call(this);
			this.stop();
			this.ne = null
		}
		;
		var Mt = /Android/.test(window.navigator.userAgent)
			, Kv = z.lB.lb
			, Ll = /MicroMessenger/.test(window.navigator.userAgent)
			, Kt = /Weibo/.test(window.navigator.userAgent)
			, Ml = /Mobile/.test(window.navigator.userAgent) && /CriOS/.test(window.navigator.userAgent);
		var Kl = null ;
		z.v(z.Ol, z.R);
		z.Ol.prototype.D = function() {
			z.Ol.o.D.call(this);
			this.K = (0,
				window.$)(this.m());
			this.yK = (0,
				window.$)("img", this.K);
			this.Xe = (0,
				window.$)("input", this.K);
			this.K.on("click", ".js-refresh-captcha", window.$.proxy(this.$t, this))
		}
		;
		z.Ol.prototype.$t = function() {
			this.yK.attr("src", this.HB + "?r\x3d" + (0,
					z.w)())
		}
		;
		var Sl = "closure_memoize_cache_";
		var fF = (0,
			z.r)(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
				return window.setTimeout(a, 1E3 / 60)
			}
			, window);
		z.v(Tl, z.G);
		Tl.prototype.play = function() {
			var a = this;
			fF(function() {
				a.K.toggleClass(a.XU)
			});
			if (window.Modernizr.csstransitions)
				a.K.onTransitionEnd(function() {
					a.dispatchEvent("end")
				}, a.duration);
			else
				a.dispatchEvent("end")
		}
		;
		Tl.prototype.stop = z.p;
		z.v(z.Ul, z.S);
		z.e = z.Ul.prototype;
		z.e.B = function() {
			z.Ul.o.B.call(this);
			z.Aj(this);
			this.te = (0,
				window.$)(this.xd);
			this.ub = (0,
				window.$)(this.X());
			(0,
				window.$)(Cj(this)).addClass("z-ico-close");
			this.oq = (0,
				window.$)('\x3cspan class\x3d"mutiview-dialog-title-back z-ico-left"\x3e\x3c/span\x3e').appendTo(this.te)
		}
		;
		z.e.D = function() {
			z.Ul.o.D.call(this);
			this.oq.click(window.$.proxy(this.QA, this));
			var a = this.m()
				, b = this.oj();
			(0,
				window.$)(a).addClass(this.AS);
			this.fJ(new Tl(a,"show",300), new Tl(a,"show",300), new Tl(b,"show",300), new Tl(b,"show",300))
		}
		;
		z.e.ka = function(a, b) {
			z.Ul.o.ka.call(this, a);
			(0,
				window.$)(".title", this.ub).replaceAll(Bj(this));
			Vl(this, b)
		}
		;
		z.e.oh = function(a, b, c) {
			var d = this.yh
				, f = this.Fk;
			b = b || d.next(".view");
			c = c || f.next(".title");
			b.length && c.length && (b.css("visibility", "visible").removeClass("right"),
				c.css("visibility", "visible").removeClass("right"),
				d.addClass("left").onTransitionEnd(function() {
					d.css("visibility", "hidden")
				}, 300),
				f.addClass("left").onTransitionEnd(function() {
					f.css("visibility", "hidden")
				}, 300),
				this.yh = b,
				this.Fk = c,
				$l(this),
				this.nI.push(d),
				this.mI.push(f),
				this.eD.push(this.oq.hasClass("show")),
				Zl(this, a))
		}
		;
		z.e.QA = function() {
			var a = this.yh
				, b = this.Fk
				, c = this.nI.pop()
				, d = this.mI.pop();
			c.length && d.length && (c.css("visibility", "visible").removeClass(" left"),
				d.css("visibility", "visible").removeClass("left"),
				a.addClass("right").onTransitionEnd(function() {
					a.css("visibility", "hidden")
				}, 300),
				b.addClass("right").onTransitionEnd(function() {
					b.css("visibility", "hidden")
				}, 300),
				this.yh = c,
				this.Fk = d,
				$l(this),
				Zl(this, this.eD.pop()))
		}
		;
		window.$.fn.placeholder = function(a) {
			return this.each(function() {
				var b = (0,
					window.$)(this)
					, c = b.data("placeholder");
				c || b.data("placeholder", c = new z.am(this,a));
				c.check()
			})
		}
		;
		z.dm = "placeholder" in window.document.createElement("input");
		z.e = z.am.prototype;
		z.e.defaults = {
			text: "",
			offsetParent: null ,
			bD: !1
		};
		z.e.jM = ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"];
		z.e.pk = function(a) {
			var b = this.input
				, c = this.J;
			c.text = a || "";
			z.dm ? (gm(b) || P(b, "label", c.text),
				b.setAttribute("placeholder", c.text)) : z.wg(this.label, c.text)
		}
		;
		z.e.H = function() {
			this.Kg && (this.Kg.removeAll(),
				this.Kg.H());
			z.N(this.label);
			this.label = null
		}
		;
		z.e.offsetParent = function() {
			return this.J.offsetParent || this.input.offsetParent
		}
		;
		z.e.check = function() {
			if (!z.dm)
				if (this.Qg() && Li(this.input)) {
					this.show();
					var a = this.input
						, b = Ai(a)
						, c = this.label
						, d = Bi(a, this.offsetParent());
					z.ii(c, {
						left: d.x + b.left + "px",
						top: d.y + b.top + "px",
						width: hm(a, "width"),
						fontSize: hm(a, "fontSize"),
						lineHeight: hm(a, "lineHeight"),
						fontFamily: hm(a, "fontFamily")
					});
					this.offsetParent().appendChild(c)
				} else
					this.hide()
		}
		;
		z.e.show = function() {
			this.label && z.Q(this.label, !0)
		}
		;
		z.e.hide = function() {
			this.label && z.Q(this.label, !1)
		}
		;
		z.e.Qg = function() {
			return !this.input.value
		}
		;
		z.e.position = function() {
			z.x(this.jM, function(a) {
				this.label.style[a] = hm(this.input, a)
			}, this)
		}
		;
		var gF;
		z.v(z.im, z.Ul);
		z.e = z.im.prototype;
		z.e.D = function() {
			z.im.o.D.call(this);
			this.ij();
			var a = (0,
				window.$)(".js-show-sns-buttons");
			a.click(function() {
				a.onTransitionEnd(function() {
					a.css("visibility", "hidden")
				}, 250).removeClass("is-visible").next(".sns-buttons").addClass("is-visible")
			})
		}
		;
		z.e.show = function() {
			var a = this;
			gF().then(function() {
				a.G(!0)
			})
		}
		;
		z.e.ba = function(a) {
			this.Ud && !a.label && (a.label = this.Ud);
			this.dispatchEvent(window.$.extend({
				type: "trackRequested"
			}, a)) && z.Ak(a)
		}
		;
		z.e.oh = function(a, b, c) {
			z.im.o.oh.call(this, a, b, c);
			this.ij()
		}
		;
		z.e.QA = function() {
			z.im.o.QA.call(this);
			this.ij()
		}
		;
		z.e.Fe = function(a, b) {
			var c = (0,
				window.$)(".submit", a);
			a.validate(window.$.extend({}, z.hF, {
				submitHandler: z.wl(c, window.$.proxy(b, this))
			}))
		}
		;
		z.e.ij = function() {
			var a = this;
			z.dm || (0,
				window.setTimeout)(function() {
				(0,
					window.$)("input[placeholder]:visible", a.ub).placeholder()
			}, 10)
		}
		;
		z.e.Xc = function() {
			var a = (new z.Oo(window.location.href)).kd().get("next");
			a ? window.location.href = a : window.location.reload()
		}
		;
		z.e.tf = function(a) {
			return !/^\+?[0-9]+$/.test(a)
		}
		;
		z.e.hb = function(a, b, c) {
			a[b] && (a[c] = a[b],
				delete a[b])
		}
		;
		gF = Ql(function() {
			if (z.X.qb())
				throw Error("Logged in user should not call ZH.ui.SignDialog.prefetchTemplate");
			return window.$.get("/node/Register")
		});
		z.hF = {
			onkeyup: !1,
			onfocusout: !1,
			validClass: "",
			focusInvalid: !1,
			highlight: z.p,
			messages: {
				fullname: {
					required: "请填写姓名"
				},
				account: {
					required: "请填写手机号或邮箱"
				},
				phone_num: {
					required: "请填写手机号"
				},
				email: {
					required: "请填写邮箱"
				},
				password: {
					required: "请填写密码"
				},
				captcha: {
					required: "请填写验证码"
				},
				verification_code: {
					required: "请填写验证码"
				}
			},
			errorPlacement: function(a, b) {
				if (!b.next(".error").length && (a.insertAfter(b).click(function() {
						a.prev("input").focus()
					}),
						fF(function() {
							a.addClass("show")
						}),
						b.one("focus", function() {
							a.onTransitionEnd(function() {
									a.remove()
								},
								300).removeClass("show")
						}),
					"password" === b.prop("name")))
					b.one("focus", function() {
						"password" === b.prop("type") && (b.select(),
							b.off("mousedown mouseup").one("mouseup", function(a) {
								a.preventDefault()
							}).one("mousedown", function() {
								b.off("mouseup")
							}))
					})
			},
			showErrors: function(a, b) {
				var c = (0,
					window.$)("label.error", this.currentForm);
				c.addClass("highlighted");
				(0,
					window.setTimeout)(function() {
					c.removeClass("highlighted")
				}, 30);
				var d = this;
				b.length && window.$.each(b, function(a, b) {
					var c = (0,
						window.$)(b.element)
						, k = (0,
						window.$)('\x3clabel class\x3d"error"\x3e' +
						b.message + "\x3c/label\x3e")
						, m = (0,
						window.$)('\x3cspan class\x3d"switch-to-login"\x3e · 直接登录\x3c/span\x3e');
					"该邮箱已注册" !== b.message && "该手机号已注册" !== b.message || m.appendTo(k);
					fF(function() {
						d.settings.errorPlacement(k, c)
					})
				})
			}
		};
		(0,
			window.$)(function() {
			z.X.qb() || gF().then(function(a) {
				(0,
					window.$)(a).appendTo("body")
			})
		});
		z.v(z.mm, z.im);
		z.e = z.mm.prototype;
		z.e.B = function() {
			z.mm.o.B.call(this);
			this.ka((0,
				window.$)(".unable-login-template").html())
		}
		;
		z.e.D = function() {
			z.mm.o.D.call(this);
			nm(this);
			this.kC = (0,
				window.$)(".view.reset-password-verification", this.ub);
			this.CK = (0,
				window.$)(".title.reset-password-verification", this.te);
			var a = (0,
				window.$)("form", this.kC);
			this.Fe(a, this.WR);
			this.Qk && (0,
				window.$)('input[name\x3d"account"]', a).val(this.Qk);
			a = (0,
				window.$)(".captcha-module", a).get(0);
			this.nA = new z.Ol;
			this.nA.w(a);
			om(this);
			this.Zu = (0,
				window.$)(".view.sms-login-verification", this.ub);
			this.tK = (0,
				window.$)(".title.sms-login-verification", this.te);
			a = (0,
				window.$)("form", this.Zu);
			this.Fe(a, this.YR);
			(0,
				window.$)('input[name\x3d"phone_num"]', a).val(this.Qk);
			a = (0,
				window.$)(".captcha-module", this.Zu).get(0);
			this.tv = new z.Ol;
			this.tv.w(a);
			pm(this)
		}
		;
		z.e.WR = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			a = c.Pd();
			(0,
				window.$)('input[name\x3d"account"]', this.xq).val(a.account);
			var d = this.tf(a.account)
				, f = d ? "/send_login_verification_code/email" : "/send_login_verification_code/sms";
			d ? this.hb(a, "account", "email") : this.hb(a, "account", "phone_num");
			(0,
				window.$)('input[name\x3d"verification_code"]', this.xq).attr("placeholder", d ? "邮箱收到的 6 位数验证码" : "手机收到的 6 位数验证码");
			return window.$.get(f, a, function(a) {
				a.r ? (z.Pl(b.nA),
					$l(b),
					c.data("validator").showErrors(a.data)) : (b.oh(!0,
					this.xq, this.BK),
					b.CT.start())
			})
		}
		;
		z.e.XR = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			a = c.Pd();
			var d = this.tf(a.account)
				, f = d ? "/reset_password/email" : "/reset_password/phone_num";
			d ? this.hb(a, "account", "email") : this.hb(a, "account", "phone_num");
			return window.$.post(f, a, function(a) {
				a.r ? c.data("validator").showErrors(a.data) : b.Xc()
			})
		}
		;
		z.e.YR = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			return window.$.get("/send_login_verification_code/sms", c.serialize(), function(a) {
				a.r ? (z.Pl(b.tv),
					$l(b),
					a = a.data,
					b.hb(a, "account", "phone_num"),
					c.data("validator").showErrors(a)) : (a = (0,
					window.$)('input[name\x3d"phone_num"]', c).val(),
					(0,
						window.$)('input[name\x3d"phone_num"]', this.$u).val(a),
					b.oh(!0, this.$u, this.sK),
					b.UK.start())
			})
		}
		;
		z.e.ZR = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			return window.$.post("/login/sms_code", c.serialize(), function(a) {
				a.r ? (a = a.data,
					b.hb(a, "account", "phone_num"),
					c.data("validator").showErrors(a)) : b.Xc()
			})
		}
		;
		z.v(z.qm, z.im);
		z.e = z.qm.prototype;
		z.e.B = function() {
			z.qm.o.B.call(this);
			var a = (0,
				window.$)(".oauth-register-template").html()
				, b = this.ph.status;
			"bound" === b ? this.ka(a, "bound") : "registered" === b ? this.ka(a, "registered") : this.ka(a, "register")
		}
		;
		z.e.D = function() {
			z.qm.o.D.call(this);
			this.xy();
			rm(this);
			sm(this);
			tm(this);
			var a = this;
			this.ub.on("click", "button.bind-login", function() {
				a.oh(!0, a.av, a.uK)
			}).on("click", "button.register", function() {
				a.oh(!0, a.Mc, a.iC)
			})
		}
		;
		z.e.xy = function() {
			this.Mc = (0,
				window.$)(".view.register", this.ub);
			this.iC = (0,
				window.$)(".title.register", this.te);
			var a = (0,
				window.$)("form", this.Mc);
			this.Fe(a, this.dk);
			a = (0,
				window.$)(".captcha-module", this.Mc).get(0);
			this.ae = new z.Ol;
			this.ae.w(a);
			z.Pl(this.ae)
		}
		;
		z.e.dk = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			b.ba({
				nc: !0,
				category: "sign_up",
				action: "sign_up_front_end_pass_" + um(b)
			});
			return window.$.post("/register/sns", c.serialize(), function(a) {
				a.r ? (z.Pl(b.ae),
					$l(b),
					c.data("validator").showErrors(a.data)) : (b.ba({
					nc: !0,
					category: "sign_up",
					action: "sign_up_success_" + um(b)
				}),
					b.Xc())
			})
		}
		;
		z.e.nR = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			b.ba({
				nc: !0,
				category: "sign_in",
				action: "sign_in_front_end_pass_" + um(b)
			});
			return window.$.post("/login/bind", c.serialize(), function(a) {
				a.r ? c.data("validator").showErrors(a.data) : (b.ba({
					nc: !0,
					category: "sign_in",
					action: "sign_in_success_" + um(b)
				}),
					b.Xc())
			})
		}
		;
		z.v(vm, z.im);
		z.e = vm.prototype;
		z.e.B = function() {
			vm.o.B.call(this);
			this.ka((0,
				window.$)(".register-template").html())
		}
		;
		z.e.D = function() {
			vm.o.D.call(this);
			this.xy();
			wm(this);
			this.to();
			this.v().g(this, "hide", this.BM);
			this.ba({
				category: "sign_up",
				action: "popup_sign_up_box_appear"
			})
		}
		;
		z.e.xy = function() {
			this.Mc = (0,
				window.$)(".view.register", this.ub);
			this.iC = (0,
				window.$)(".view.register", this.te);
			var a = (0,
				window.$)("form", this.Mc);
			this.qh = !(0,
				window.$)('input[name\x3d"phone_num"]', a).length;
			this.Fe(a, this.dk);
			km(a);
			var b = (0,
				window.$)(".captcha-module", this.Mc).get(0);
			this.ae = new z.Ol;
			this.ae.w(b);
			z.Pl(this.ae);
			var c = this
				, d = (0,
				window.$)('input[name\x3d"account"]', a);
			this.Mc.on("click", ".switch-to-login", function() {
				var a = new z.Qv(d.val());
				a.Ud = c.Ud;
				c.ba({
					category: "sign_in",
					action: "switch_to_sign_in_box_appear"
				});
				a.mb(c);
				Xl(c, a)
			});
			(0,
				window.$)("button.weibo", this.Mc).click(function() {
				c.ba({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_weibo_start"
				});
				z.Jl("sina", c);
				z.W.Ha({
					type: "ga_click_sign_in_weibo",
					label: "sign_in_box_weibo"
				})
			});
			(0,
				window.$)("button.wechat", this.Mc).click(function() {
				c.ba({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_wechat_start"
				});
				z.Jl("wechat", c);
				z.W.Ha({
					type: "ga_click_sign_in_wechat",
					label: "sign_in_box_wechat"
				})
			});
			(0,
				window.$)("button.qq", this.Mc).click(function() {
				c.ba({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_qq_start"
				});
				z.Jl("qq", c);
				z.W.Ha({
					type: "ga_click_sign_in_qq",
					label: "sign_in_box_qq"
				})
			});
			this.Pm = new z.Il(a);
			this.Pm.start();
			z.fd(this, this.Pm);
			jm(this, function(a) {
				a = a.phone_num || a.account;
				var b = c.qh ? c.tf(a) : !1;
				c.ba({
					category: "sign_up",
					action: a || !c.qh ? "click_sign_up_submit_" + (b ? "email" : "phone") : "click_sign_up_submit_no_channel"
				})
			})
		}
		;
		z.e.dk = function(a) {
			var b = this;
			a = (0,
				window.$)(a);
			var c = a.data("validator")
				, d = a.Pd();
			a = b.qh ? this.tf(d.account) : !1;
			b.ba({
				nc: !0,
				category: "sign_up",
				action: "sign_up_front_end_pass_" + (a ? "email" : "phone")
			});
			var f = a ? "/register/email" : "/register/phone_num/validation";
			a ? this.hb(d, "account", "email") : this.hb(d, "account", "phone_num");
			var g = this.Pm.stop();
			d.userInfo = JSON.stringify(g);
			this.cu = d;
			return a ? window.$.post(f, d, function(a) {
				a.r ? (z.Pl(b.ae),
					$l(b),
					c.showErrors(a.data)) : (b.ba({
					nc: !0,
					category: "sign_up",
					action: "sign_up_success_email"
				}),
					b.Xc())
			}) : window.$.post(f, d, function(a) {
				a.r ? (z.Pl(b.ae),
					$l(b),
				b.qh || b.hb(a.data, "account", "phone_num"),
					c.showErrors(a.data)) : (b.oh(!0),
					b.na.start(),
					(0,
						window.$)('input[name\x3d"phone_num"]', b.pC).val(d.phone_num),
					window.$.get("/send_register_verification_code/sms", {
						phone_num: d.phone_num
					}))
			})
		}
		;
		z.e.RR = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			a = window.$.extend({}, this.cu, c.Pd());
			return window.$.post("/register/phone_num", a, function(a) {
				a.r ? (a = a.data,
					b.hb(a, "account", "phone_num"),
					c.data("validator").showErrors(a)) : (b.ba({
					nc: !0,
					category: "sign_up",
					action: "sign_up_success_phone"
				}),
					b.Xc())
			})
		}
		;
		z.e.to = function() {
			z.Nl(this.v(), this.uz)
		}
		;
		z.e.uz = function(a) {
			a = a.yf;
			var b = {
				qqconn: "qq",
				wechat: "wechat",
				sina: "weibo"
			}[a.type];
			1 === a.login ? (this.ba({
				nc: !0,
				category: "sign_in",
				action: "sign_in_success_" + b
			}),
				this.Xc()) : (a = new z.qm(a),
				a.mb(this),
				a.Ud = this.Ud,
				Xl(this, a))
		}
		;
		z.e.Bp = function(a) {
			this.Xi = a
		}
		;
		z.e.BM = function() {
			this.Xi = "";
			tl()
		}
		;
		z.e.Xc = function() {
			var a = this.Xi;
			a ? z.ul.set("actioncontinuationhash", (0,
				window.encodeURIComponent)(a), 60, "/") : tl();
			vm.o.Xc.call(this)
		}
		;
		(0,
			window.$)(function() {
			function a(a) {
				var c = new vm;
				c.Ud = a;
				c.show()
			}
			(0,
				window.$)("#js-reg-with-mail-in-top").click(function() {
				a("right_email_sign_up");
				return !1
			});
			(0,
				window.$)("#js-reg-with-sina-in-top").click(function() {
				z.W.Ha({
					type: "ga_click_sign_in_weibo",
					label: "header_sign_up"
				});
				z.Jl("sina");
				a("right_sina_sign_up");
				return !1
			});
			(0,
				window.$)("#js-reg-with-wechat-in-top").click(function() {
				z.W.Ha({
					type: "ga_click_sign_in_wechat",
					label: "header_sign_up"
				});
				z.Jl("wechat");
				a("right_wechat_sign_up");
				return !1
			});
			(0,
				window.$)("#js-reg-with-qq-in-top").click(function() {
				z.W.Ha({
					type: "ga_click_sign_in_qq",
					label: "header_sign_up"
				});
				z.Jl("qq");
				a("right_qq_sign_up");
				return !1
			})
		});
		z.ka(zm, z.G);
		zm.prototype.C = function() {
			z.G.prototype.C.call(this);
			this.Eu && ((0,
				window.clearTimeout)(this.Eu),
				this.Eu = null )
		}
		;
		zm.prototype.Ot = function() {
			if (!this.promise || "pending" !== this.promise.state()) {
				var a = this.BL;
				this.promise = (window.$.support.cors ? window.$.ajax(a) : ym(a)).done(this.onMessage.bind(this)).fail(this.Az.bind(this))
			}
		}
		;
		zm.prototype.onMessage = function(a) {
			try {
				this.dispatchEvent({
					type: "message",
					data: a
				})
			} catch (b) {}
			this.Eu = (0,
				window.setTimeout)(this.Ot.bind(this), this.SS)
		}
		;
		zm.prototype.Az = function() {
			this.dispatchEvent("error");
			this.ju < this.bH && (this.ju = Math.min(this.ju * this.DP, this.bH));
			this.Eu = (0,
				window.setTimeout)(this.Ot.bind(this), this.ju)
		}
		;
		var Am = {
			type: "GET",
			url: "",
			data: {},
			timeout: 6E4,
			xhrFields: {
				withCredentials: !0
			}
		};
		z.ka(z.Bm, z.R);
		z.Bm.prototype.B = function() {
			this.h = z.M("div", {
				innerHTML: (0,
					window.$)(".unblock-dialog-template").html()
			})
		}
		;
		z.Bm.prototype.D = function() {
			z.R.prototype.D.call(this);
			this.Hk = (0,
				window.$)(".unblock-dialog-loading", this.h);
			this.ZB = (0,
				window.$)(".unblock-dialog-error", this.h);
			this.qv = (0,
				window.$)(".unblock-dialog-view", this.h);
			Cm(this);
			this.ae = new z.Ol("antispam");
			this.ae.w((0,
				window.$)(".unblock-dialog-captcha", this.h).get(0));
			this.jn();
			Jm(this)
		}
		;
		z.Bm.prototype.jn = function() {
			Dm(this);
			Hm(this);
			Im(this)
		}
		;
		z.ka(Km, z.S);
		Km.prototype.B = function() {
			z.S.prototype.B.call(this);
			this.Ya("帐号解封");
			z.Ij(this, null );
			this.Bf(!0)
		}
		;
		Km.prototype.D = function() {
			var a = this;
			z.S.prototype.D.call(this);
			this.BB = new z.Bm(function(b) {
					return a.Ya(b)
				}
				,!0);
			z.fd(this, this.BB);
			this.BB.render(this.X());
			this.BB.g("complete", function() {
				return a.G(!1)
			})
		}
		;
		z.v(Nm, z.G);
		var Om = 0;
		Nm.prototype.cg = function() {
			this.gd("begin")
		}
		;
		Nm.prototype.dg = function() {
			this.gd("end")
		}
		;
		Nm.prototype.gd = function(a) {
			this.dispatchEvent(a)
		}
		;
		z.v(Pm, z.cd);
		z.e = Pm.prototype;
		z.e.ic = 0;
		z.e.C = function() {
			Pm.o.C.call(this);
			this.stop();
			delete this.Rj;
			delete this.ha
		}
		;
		z.e.start = function(a) {
			this.stop();
			this.ic = z.ce(this.Zk, z.l(a) ? a : this.Pg)
		}
		;
		z.e.stop = function() {
			this.Rb() && de(this.ic);
			this.ic = 0
		}
		;
		z.e.fire = function() {
			this.stop();
			this.Cg()
		}
		;
		z.e.Rb = function() {
			return 0 != this.ic
		}
		;
		z.e.Cg = function() {
			this.ic = 0;
			this.Rj && this.Rj.call(this.ha)
		}
		;
		var Sm = {}
			, Tm = null ;
		z.v(Xm, Nm);
		z.e = Xm.prototype;
		z.e.Sh = function(a) {
			this.Hi = a
		}
		;
		z.e.play = function(a) {
			if (a || this.O == Om)
				this.progress = 0,
					this.coords = this.Pp;
			else if (1 == this.O)
				return !1;
			Rm(this);
			this.startTime = a = (0,
				z.w)();
			-1 == this.O && (this.startTime -= this.duration * this.progress);
			this.endTime = this.startTime + this.duration;
			this.progress || this.cg();
			this.gd("play");
			-1 == this.O && this.gd("resume");
			this.O = 1;
			var b = wa(this);
			b in Sm || (Sm[b] = this);
			Um();
			Wm(this, a);
			return !0
		}
		;
		z.e.stop = function(a) {
			Rm(this);
			this.O = Om;
			a && (this.progress = 1);
			Ym(this, this.progress);
			this.gd("stop");
			this.dg()
		}
		;
		z.e.pause = function() {
			1 == this.O && (Rm(this),
				this.O = -1,
				this.gd("pause"))
		}
		;
		z.e.C = function() {
			this.O == Om || this.stop(!1);
			this.gd("destroy");
			Xm.o.C.call(this)
		}
		;
		z.e.destroy = function() {
			this.H()
		}
		;
		z.e.wz = function() {
			this.gd("animate")
		}
		;
		z.e.gd = function(a) {
			this.dispatchEvent(new Zm(a,this))
		}
		;
		z.v(Zm, z.qd);
		var en = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkgrey: "#a9a9a9",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			grey: "#808080",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightgrey: "#d3d3d3",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370db",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#db7093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		};
		var fn = /#(.)(.)(.)/
			, an = /^#(?:[0-9a-f]{3}){1,2}$/i
			, gn = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
		z.v(hn, Xm);
		z.e = hn.prototype;
		z.e.vh = z.p;
		z.e.Ld = function() {
			z.l(this.kg) || (this.kg = z.Ni(this.element));
			return this.kg
		}
		;
		z.e.wz = function() {
			this.vh();
			hn.o.wz.call(this)
		}
		;
		z.e.dg = function() {
			this.vh();
			hn.o.dg.call(this)
		}
		;
		z.e.cg = function() {
			this.vh();
			hn.o.cg.call(this)
		}
		;
		z.v(jn, hn);
		jn.prototype.vh = function() {
			var a = this.Hi && this.Ld() ? "right" : "left";
			this.element.style[a] = Math.round(this.coords[0]) + "px";
			this.element.style.top = Math.round(this.coords[1]) + "px"
		}
		;
		z.v(kn, hn);
		kn.prototype.vh = function() {
			if (this.Hi) {
				var a = this.element
					, b = Math.round(this.coords[0])
					, b = Math.max(b, 0);
				z.Ni(a) ? z.B ? a.scrollLeft = -b : z.gp && z.E("8") ? a.scrollLeft = b : a.scrollLeft = a.scrollWidth - b - a.clientWidth : a.scrollLeft = b
			} else
				this.element.scrollLeft = Math.round(this.coords[0]);
			this.element.scrollTop = Math.round(this.coords[1])
		}
		;
		z.v(ln, hn);
		ln.prototype.vh = function() {
			this.element.style.width = Math.round(this.coords[0]) + "px"
		}
		;
		z.v(mn, hn);
		mn.prototype.vh = function() {
			this.element.style.height = Math.round(this.coords[0]) + "px"
		}
		;
		z.v(nn, hn);
		var iF = 1 / 1024
			, on = -1;
		z.e = nn.prototype;
		z.e.vh = function() {
			var a = this.coords[0];
			Math.abs(a - this.at) >= iF && (Ki(this.element, a),
				this.at = a)
		}
		;
		z.e.cg = function() {
			this.at = on;
			nn.o.cg.call(this)
		}
		;
		z.e.dg = function() {
			this.at = on;
			nn.o.dg.call(this)
		}
		;
		z.e.show = function() {
			this.element.style.display = ""
		}
		;
		z.e.hide = function() {
			this.element.style.display = "none"
		}
		;
		z.v(pn, nn);
		pn.prototype.cg = function() {
			this.show();
			pn.o.cg.call(this)
		}
		;
		pn.prototype.dg = function() {
			this.hide();
			pn.o.dg.call(this)
		}
		;
		z.v(qn, nn);
		qn.prototype.cg = function() {
			this.show();
			qn.o.cg.call(this)
		}
		;
		z.v(rn, hn);
		rn.prototype.vh = function() {
			for (var a = [], b = 0; b < this.coords.length; b++)
				a[b] = Math.round(this.coords[b]);
			this.element.style.backgroundColor = "rgb(" + a.join(",") + ")"
		}
		;
		var jF = {
			hidden: "visibilitychange",
			msHidden: "msvisibilitychange",
			mozHidden: "mozvisibilitychange",
			webkitHidden: "webkitvisibilitychange"
		}
			, Gn = z.mc(jF, function(a, b) {
			return b in window.document
		})
			, Hn = jF[Gn]
			, Fn = z.l(Gn);
		z.Sn = function(a) {
			return function(b) {
				return b.replace(a, "")
			}
		}(/^⁠+|⁠+$/);
		z.Mn.prototype.add = function(a, b) {
			!1 === this.eQ ? this.data.set(a, b) : this.data.set((0,
				window.encodeURIComponent)(a), (0,
				window.encodeURIComponent)(b))
		}
		;
		z.Mn.prototype.kd = function() {
			var a = [];
			z.x(this.data.jd(), function(b) {
				a.push(b + "\x3d" + this.data.get(b))
			}, this);
			return a.join("\x26")
		}
		;
		z.ts = function() {
			function a(a) {
				return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
			}
			var b = {
				JU: {
					evaluate: /<%([\s\S]+?)%>/g,
					$P: /<%=([\s\S]+?)%>/g,
					escape: /<%-([\s\S]+?)%>/g
				},
				escape: function(a) {
					return ("" + a).replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#x27;").replace(/\//g, "\x26#x2F;")
				}
			}
				, c = /.^/;
			return function(d, f) {
				var g = b.JU
					, g = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(data||{}){__p.push('" + d.replace(/\\/g,
						"\\\\").replace(/'/g, "\\'").replace(g.escape || c, function(b, c) {
						return "',_.escape(" + a(c) + "),'"
					}).replace(g.$P || c, function(b, c) {
						return "'," + a(c) + ",'"
					}).replace(g.evaluate || c, function(b, c) {
						return "');" + a(c).replace(/[\r\n\t]/g, " ") + ";__p.push('"
					}).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');"
					, h = new Function("data","_",g);
				return f ? h(f, b) : function(a) {
					return h.call(this, a, b)
				}
			}
		}();
		z.Tn.defaults = {
			paddingTop: 0
		};
		var Vn = {
			offsetTop: 0,
			paddingTop: 0,
			Nv: !1
		};
		(0,
			window.$)(function() {
			Vn.paddingTop = z.Ti(window.document.body).top
		});
		z.kF = z.Nj(function() {
			return (+new Date).toString(32).slice(-5) + Math.random().toString(32).slice(-3)
		});
		z.v(z.Zn, z.Dl);
		z.Zn.prototype.UJ = function() {
			return $n(this)
		}
		;
		z.ma(bo);
		z.e = bo.prototype;
		z.e.lf = function() {
			return this.Sv
		}
		;
		z.e.B = function(a) {
			return a.L().B("DIV", this.Wf(a).join(" "))
		}
		;
		z.e.X = function(a) {
			return a
		}
		;
		z.e.Ob = function(a) {
			return "DIV" == a.tagName
		}
		;
		z.e.w = function(a, b) {
			b.id && jj(a, b.id);
			var c = this.T()
				, d = !1
				, f = Sh(b);
			f && z.x(f, function(b) {
				b == c ? d = !0 : b && (b == c + "-disabled" ? a.Xa(!1) : b == c + "-horizontal" ? a.setOrientation(z.lF) : b == c + "-vertical" && a.setOrientation(vw))
			}, this);
			d || z.Uh(b, c);
			eo(this, a, this.X(b));
			return b
		}
		;
		z.e.Xn = function(a) {
			a: {
				var b;
				a = Sh(a);
				for (var c = 0, d = a.length; c < d; c++)
					if (b = a[c],
							b = b in Xk ? Xk[b]() : null ) {
						a = b;
						break a
					}
				a = null
			}
			return a
		}
		;
		z.e.Ge = function(a) {
			a = a.m();
			z.Oi(a, !0, z.B);
			z.C && (a.hideFocus = !0);
			var b = this.lf();
			b && Nh(a, b)
		}
		;
		z.e.Yb = function(a) {
			return a.m()
		}
		;
		z.e.T = function() {
			return "goog-container"
		}
		;
		z.e.Wf = function(a) {
			var b = this.T()
				, c = [b, a.Nb == z.lF ? b + "-horizontal" : b + "-vertical"];
			a.isEnabled() || c.push(b + "-disabled");
			return c
		}
		;
		z.e.dF = function() {
			return vw
		}
		;
		var vw;
		z.v(z.fo, z.R);
		z.lF = "horizontal";
		vw = "vertical";
		z.e = z.fo.prototype;
		z.e.Py = null ;
		z.e.sb = null ;
		z.e.N = null ;
		z.e.Nb = null ;
		z.e.ob = !0;
		z.e.fc = !0;
		z.e.nx = !0;
		z.e.Sa = -1;
		z.e.kc = null ;
		z.e.xf = !1;
		z.e.EL = !1;
		z.e.xS = !0;
		z.e.xg = null ;
		z.e.Yb = function() {
			return this.Py || this.N.Yb(this)
		}
		;
		z.e.cs = function() {
			return this.sb || (this.sb = new Nk(this.Yb()))
		}
		;
		z.e.B = function() {
			this.h = this.N.B(this)
		}
		;
		z.e.X = function() {
			return this.N.X(this.m())
		}
		;
		z.e.Ob = function(a) {
			return this.N.Ob(a)
		}
		;
		z.e.ia = function(a) {
			this.h = this.N.w(this, a);
			"none" == a.style.display && (this.ob = !1)
		}
		;
		z.e.D = function() {
			z.fo.o.D.call(this);
			z.oj(this, function(a) {
				a.ya && ho(this, a)
			}, this);
			var a = this.m();
			this.N.Ge(this);
			this.G(this.ob, !0);
			this.v().g(this, "enter", this.Sx).g(this, "highlight", this.Wx).g(this, "unhighlight", this.cy).g(this, "open", this.UO).g(this, "close", this.Qx).g(a, "mousedown", this.ke).g(z.Kf(a), "mouseup", this.nO).g(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.gO);
			this.Rg() && go(this, !0)
		}
		;
		z.e.Db = function() {
			this.tb(-1);
			this.kc && this.kc.Ab(!1);
			this.xf = !1;
			z.fo.o.Db.call(this)
		}
		;
		z.e.C = function() {
			z.fo.o.C.call(this);
			this.sb && (this.sb.H(),
				this.sb = null );
			this.N = this.kc = this.xg = this.Py = null
		}
		;
		z.e.Sx = function() {
			return !0
		}
		;
		z.e.Wx = function(a) {
			var b = pj(this, a.target);
			if (-1 < b && b != this.Sa) {
				var c = io(this);
				c && c.Jc(!1);
				this.Sa = b;
				c = io(this);
				this.xf && c.setActive(!0);
				this.xS && this.kc && c != this.kc && (Sk(c, 64) ? c.Ab(!0) : this.kc.Ab(!1))
			}
			b = this.m();
			null  != a.target.m() && P(b, "activedescendant", a.target.m().id)
		}
		;
		z.e.cy = function(a) {
			a.target == io(this) && (this.Sa = -1);
			this.m().removeAttribute("aria-activedescendant")
		}
		;
		z.e.UO = function(a) {
			(a = a.target) && a != this.kc && a.getParent() == this && (this.kc && this.kc.Ab(!1),
				this.kc = a)
		}
		;
		z.e.Qx = function(a) {
			a.target == this.kc && (this.kc = null );
			var b = this.m()
				, c = a.target.m();
			b && a.target.O & 2 && c && Qh(b, c)
		}
		;
		z.e.ke = function(a) {
			this.fc && (this.xf = !0);
			var b = this.Yb();
			b && Ag(b) ? b.focus() : a.preventDefault()
		}
		;
		z.e.nO = function() {
			this.xf = !1
		}
		;
		z.e.gO = function(a) {
			var b;
			a: {
				b = a.target;
				if (this.xg)
					for (var c = this.m(); b && b !== c; ) {
						var d = b.id;
						if (d in this.xg) {
							b = this.xg[d];
							break a
						}
						b = b.parentNode
					}
				b = null
			}
			if (b)
				switch (a.type) {
					case "mousedown":
						b.ke(a);
						break;
					case "mouseup":
						b.rf(a);
						break;
					case "mouseover":
						b.md(a);
						break;
					case "mouseout":
						b.Kl(a);
						break;
					case "contextmenu":
						b.io(a)
				}
		}
		;
		z.e.je = function() {}
		;
		z.e.Vc = function() {
			this.tb(-1);
			this.xf = !1;
			this.kc && this.kc.Ab(!1)
		}
		;
		z.e.Zb = function(a) {
			return this.isEnabled() && this.U() && (0 != mj(this) || this.Py) && this.qf(a) ? (a.preventDefault(),
				a.stopPropagation(),
				!0) : !1
		}
		;
		z.e.qf = function(a) {
			var b = io(this);
			if (b && "function" == typeof b.Zb && b.Zb(a) || this.kc && this.kc != b && "function" == typeof this.kc.Zb && this.kc.Zb(a))
				return !0;
			if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
				return !1;
			switch (a.keyCode) {
				case 27:
					if (this.Rg())
						this.Yb().blur();
					else
						return !1;
					break;
				case 36:
					z.jo(this);
					break;
				case 35:
					lo(this);
					break;
				case 38:
					if (this.Nb == vw)
						no(this);
					else
						return !1;
					break;
				case 37:
					if (this.Nb == z.lF)
						this.Ld() ? mo(this) : no(this);
					else
						return !1;
					break;
				case 40:
					if (this.Nb == vw)
						mo(this);
					else
						return !1;
					break;
				case 39:
					if (this.Nb == z.lF)
						this.Ld() ? no(this) : mo(this);
					else
						return !1;
					break;
				default:
					return !1
			}
			return !0
		}
		;
		z.e.M = function(a, b) {
			z.fo.o.M.call(this, a, b)
		}
		;
		z.e.Mk = function(a, b, c) {
			a.sk |= 2;
			a.sk |= 64;
			!this.Rg() && this.EL || a.Ub(32, !1);
			a.Dp(!1);
			var d = a.getParent() == this ? pj(this, a) : -1;
			z.fo.o.Mk.call(this, a, b, c);
			a.ya && this.ya && ho(this, a);
			a = d;
			-1 == a && (a = mj(this));
			a == this.Sa ? this.Sa = Math.min(mj(this) - 1, b) : a > this.Sa && b <= this.Sa ? this.Sa++ : a < this.Sa && b > this.Sa && this.Sa--
		}
		;
		z.e.removeChild = function(a, b) {
			if (a = z.qa(a) ? z.lj(this, a) : a) {
				var c = pj(this, a);
				-1 != c && (c == this.Sa ? (a.Jc(!1),
					this.Sa = -1) : c < this.Sa && this.Sa--);
				(c = a.m()) && c.id && this.xg && oc(this.xg, c.id)
			}
			a = z.fo.o.removeChild.call(this, a, b);
			a.Dp(!0);
			return a
		}
		;
		z.e.setOrientation = function(a) {
			if (this.m())
				throw Error("Component already rendered");
			this.Nb = a
		}
		;
		z.e.U = function() {
			return this.ob
		}
		;
		z.e.G = function(a, b) {
			if (b || this.ob != a && this.dispatchEvent(a ? "show" : "hide")) {
				this.ob = a;
				var c = this.m();
				c && (z.Q(c, a),
				this.Rg() && co(this.Yb(), this.fc && this.ob),
				b || this.dispatchEvent(this.ob ? "aftershow" : "afterhide"));
				return !0
			}
			return !1
		}
		;
		z.e.isEnabled = function() {
			return this.fc
		}
		;
		z.e.Xa = function(a) {
			this.fc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.fc = !0,
				z.oj(this, function(a) {
					a.iK ? delete a.iK : a.Xa(!0)
				})) : (z.oj(this, function(a) {
				a.isEnabled() ? a.Xa(!1) : a.iK = !0
			}),
				this.xf = this.fc = !1),
			this.Rg() && co(this.Yb(), a && this.ob))
		}
		;
		z.e.Rg = function() {
			return this.nx
		}
		;
		z.e.Te = function(a) {
			a != this.nx && this.ya && go(this, a);
			this.nx = a;
			this.fc && this.ob && co(this.Yb(), a)
		}
		;
		z.e.tb = function(a) {
			(a = nj(this, a)) ? a.Jc(!0) : -1 < this.Sa && io(this).Jc(!1)
		}
		;
		z.e.Jc = function(a) {
			this.tb(pj(this, a))
		}
		;
		z.e.qD = function(a) {
			return a.U() && a.isEnabled() && Sk(a, 2)
		}
		;
		z.v(oo, z.R);
		oo.prototype.Ca = function(a) {
			this.Yu.push(a);
			a.mb(this)
		}
		;
		oo.prototype.D = function() {
			oo.o.D.call(this);
			this.v().g(this, "toggle", this.hP)
		}
		;
		oo.prototype.hP = function(a) {
			z.x(this.Yu, function(b) {
				a.target !== b && b.vc() && b.Ic(!1, !0)
			}, this)
		}
		;
		oo.prototype.C = function() {
			oo.o.C.call(this);
			z.x(this.Yu, function(a) {
				a.H()
			}, this);
			this.Yu = []
		}
		;
		z.po.prototype.pi = function(a, b, c) {
			if (this.MB) {
				var d = this.Ra
					, f = qo(a, b, d);
				0 == f.length && (f = ro(a, b, d));
				b = f
			} else
				b = qo(a, b, this.Ra);
			c(a, b)
		}
		;
		var to, vo;
		z.v(z.so, z.G);
		z.e = z.so.prototype;
		z.e.$l = 10;
		z.e.en = !0;
		z.e.MC = !1;
		z.e.nK = !1;
		z.e.NJ = !1;
		to = "hilite";
		z.uo = "select";
		z.wo = "dismiss";
		vo = "canceldismiss";
		z.e = z.so.prototype;
		z.e.getToken = function() {
			return this.Xb
		}
		;
		z.e.handleEvent = function(a) {
			var b = this.Md;
			if (a.target == this.N)
				switch (a.type) {
					case to:
						this.Zf(a.ri);
						break;
					case z.uo:
						var c = !1;
						if (sa(a.ri)) {
							a = a.ri;
							var d = this.Ra[Ao(this, a)]
								, c = !!d && b.Ny && b.Ny(d);
							d && !c && this.Mg != a && this.Zf(a)
						}
						c || this.ti();
						break;
					case vo:
						z.zo(this);
						break;
					case z.wo:
						this.$i()
				}
		}
		;
		z.e.Hp = function(a, b) {
			this.Xb != a && (this.Xb = a,
				this.Md.pi(this.Xb, this.$l, (0,
					z.r)(this.JQ, this), b),
				z.zo(this))
		}
		;
		z.e.Jx = function() {
			return this.yc
		}
		;
		z.e.rb = function() {
			return this.N.U()
		}
		;
		z.e.Zf = function(a) {
			var b = Ao(this, a)
				, c = this.Ra[b];
			return c && this.Md.Ny && this.Md.Ny(c) ? !1 : (this.Mg = a,
				this.N.Zf(a),
			-1 != b)
		}
		;
		z.e.ti = function() {
			var a = Ao(this, this.Mg);
			if (-1 != a) {
				var b = this.Ra[a]
					, c = this.Af.vi(b);
				this.NJ ? (this.Xb = null ,
					this.$i()) : this.Ac();
				c || (this.dispatchEvent({
					type: "update",
					ri: b,
					index: a
				}),
				this.NJ && this.Af.update(!0));
				return !0
			}
			this.Ac();
			this.dispatchEvent({
				type: "update",
				ri: null ,
				index: null
			});
			return !1
		}
		;
		z.e.Ac = function() {
			this.Mg = -1;
			this.Xb = null ;
			this.Sc += this.Ra.length;
			this.Ra = [];
			window.clearTimeout(this.ce);
			this.ce = null ;
			this.N.Ac();
			this.dispatchEvent("suggestionsupdate");
			this.dispatchEvent(z.wo)
		}
		;
		z.e.$i = function() {
			this.ce || (this.ce = window.setTimeout((0,
				z.r)(this.Ac, this), 100))
		}
		;
		z.e.aG = function() {
			return this.ce ? (window.clearTimeout(this.ce),
				this.ce = null ,
				!0) : !1
		}
		;
		z.e.C = function() {
			z.so.o.C.call(this);
			delete this.iG;
			this.N.H();
			this.Af.H();
			this.Md = null
		}
		;
		z.e.JQ = function(a, b, c) {
			this.Xb == a && this.sm(b, c)
		}
		;
		z.e.sm = function(a, b) {
			var c = "object" == na(b) && b
				, d = (c ? c.ZW() : b) ? Ao(this, this.Mg) : -1;
			this.Sc += this.Ra.length;
			this.Ra = a;
			for (var f = [], g = 0; g < a.length; ++g)
				f.push({
					id: this.Sc + g,
					data: a[g]
				});
			g = null ;
			this.yc && (g = this.iG[wa(this.yc)] || this.yc);
			this.N.OC = g;
			this.N.sm(f, this.Xb, this.yc);
			g = this.en;
			c && void 0 !== c.ON() && (g = c.ON());
			this.Mg = -1;
			(g || 0 <= d) && 0 != f.length && this.Xb && (0 <= d ? this.Zf(this.Sc + d) : z.xo(this));
			this.dispatchEvent("suggestionsupdate")
		}
		;
		z.e.Pk = function(a) {
			var b = this.Af;
			b.Pk.apply(b, arguments)
		}
		;
		z.e.update = function(a) {
			this.Af.update(a)
		}
		;
		z.v(z.Go, z.cd);
		var mF = (Ot || Sj) && !z.E("533.17.9");
		z.e = z.Go.prototype;
		z.e.yV = !0;
		z.e.MN = !0;
		z.e.WJ = !1;
		z.e.gU = !0;
		z.e.fU = !0;
		z.e.yv = null ;
		z.e.bb = null ;
		z.e.Jo = "";
		z.e.Ii = !1;
		z.e.sA = !1;
		z.e.TJ = !0;
		z.e.as = function() {
			return this.aa
		}
		;
		z.e.Un = function() {
			return this.bb
		}
		;
		z.e.W = function() {
			return this.bb.value
		}
		;
		z.e.Fa = function(a) {
			this.bb.value = a
		}
		;
		z.e.Nq = function(a) {
			z.og(a) && (Nh(a, "combobox"),
				P(a, "autocomplete", "list"));
			this.ec.g(a, "focus", this.je);
			this.ec.g(a, "blur", this.Vc);
			this.bb || (this.vv.g(a, "keydown", this.GR),
			z.og(a) && Ng(z.Kf(a)) == a && Mo(this, a))
		}
		;
		z.e.Pk = function(a) {
			for (var b = 0; b < arguments.length; b++)
				this.Nq(arguments[b])
		}
		;
		z.e.vi = function(a, b) {
			this.bb && Ho(this, a.toString(), b);
			return !1
		}
		;
		z.e.C = function() {
			z.Go.o.C.call(this);
			null  != this.yv && window.clearTimeout(this.yv);
			this.ec.H();
			delete this.ec;
			this.vv.H();
			this.sb.H();
			hd(this.na)
		}
		;
		z.e.Zb = function(a) {
			switch (a.keyCode) {
				case 40:
					if (this.aa.rb())
						return this.WJ ? yo(this.aa) : z.xo(this.aa),
							a.preventDefault(),
							!0;
					if (!this.dm)
						return this.update(!0),
							a.preventDefault(),
							!0;
					break;
				case 38:
					if (this.aa.rb())
						return this.WJ ? z.xo(this.aa) : yo(this.aa),
							a.preventDefault(),
							!0;
					break;
				case 9:
					if (!this.aa.rb() || a.shiftKey || this.aT)
						this.aa.Ac();
					else if (this.update(),
						this.aa.ti() && this.$S)
						return a.preventDefault(),
							!0;
					break;
				case 13:
					if (this.aa.rb()) {
						if (this.update(),
								this.aa.ti())
							return a.preventDefault(),
								a.stopPropagation(),
								!0
					} else
						this.aa.Ac();
					break;
				case 27:
					if (this.aa.rb())
						return this.aa.Ac(),
							a.preventDefault(),
							a.stopPropagation(),
							!0;
					break;
				case 229:
					if (!this.Ii)
						return this.Ii || (this.ec.g(this.bb, "keyup", this.JH),
							this.ec.g(this.bb, "keypress", this.IH),
							this.Ii = !0),
							!0;
					break;
				default:
					this.na && !this.TJ && (this.na.stop(),
						this.na.start())
			}
			return Ko(this, a)
		}
		;
		z.e.rs = function() {
			return !1
		}
		;
		z.e.je = function(a) {
			Mo(this, a.target || null )
		}
		;
		z.e.Vc = function() {
			mF ? this.yv = window.setTimeout((0,
				z.r)(this.rI, this), 0) : this.rI()
		}
		;
		z.e.rI = function() {
			this.bb && (this.ec.pa(this.sb, "key", this.$o),
				this.sb.detach(),
				this.ec.pa(this.bb, "keyup", this.rs),
				this.ec.pa(this.bb, "mousedown", this.KH),
			z.C && this.ec.pa(this.bb, "keypress", this.HH),
			this.Ii && No(this),
				this.bb = null ,
			this.na && (this.na.stop(),
				this.ec.pa(this.na, "tick", this.im)),
			this.aa && this.aa.$i())
		}
		;
		z.e.im = function() {
			this.update()
		}
		;
		z.e.GR = function(a) {
			this.je(a)
		}
		;
		z.e.$o = function(a) {
			this.GG = a.keyCode;
			this.aa && this.Zb(a)
		}
		;
		z.e.IH = function() {
			this.Ii && 229 != this.GG && No(this)
		}
		;
		z.e.JH = function(a) {
			this.Ii && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && No(this)
		}
		;
		z.e.KH = function(a) {
			this.aa && this.ke(a)
		}
		;
		z.e.ke = function() {}
		;
		z.e.HH = function(a) {
			Ko(this, a)
		}
		;
		z.e.update = function(a) {
			if (this.bb && (a || this.W() != this.Jo)) {
				if (a || !this.sA) {
					a = z.Bo(this.bb)[0];
					var b = this.W();
					a = Jo(this, b)[Io(this, b, a)];
					a = this.OJ ? String(a).replace(this.OJ, "") : a;
					this.aa && (this.aa.yc = this.bb,
						this.aa.Hp(a, this.W()))
				}
				this.Jo = this.W()
			}
			this.sA = !1
		}
		;
		z.e = z.Oo.prototype;
		z.e.toString = function() {
			var a = []
				, b = this.si;
			b && a.push(Vo(b, nF, !0), ":");
			var c = this.Dg;
			if (c || "file" == b)
				a.push("//"),
				(b = this.ne) && a.push(Vo(b, nF, !0), "@"),
					a.push((0,
						window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
					c = this.mm,
				null  != c && a.push(":", String(c));
			if (c = this.Pe)
				this.Dg && "/" != c.charAt(0) && a.push("/"),
					a.push(Vo(c, "/" == c.charAt(0) ? oF : pF, !0));
			(c = this.me.toString()) && a.push("?", c);
			(c = this.lj) && a.push("#", Vo(c, qF));
			return a.join("")
		}
		;
		z.e.resolve = function(a) {
			var b = this.clone()
				, c = !!a.si;
			c ? Po(b, a.si) : c = !!a.ne;
			if (c) {
				var d = a.ne;
				Qo(b);
				b.ne = d
			} else
				c = !!a.Dg;
			c ? (d = a.Dg,
				Qo(b),
				b.Dg = d) : c = null  != a.mm;
			d = a.Pe;
			if (c)
				Ro(b, a.mm);
			else if (c = !!a.Pe) {
				if ("/" != d.charAt(0))
					if (this.Dg && !this.Pe)
						d = "/" + d;
					else {
						var f = b.Pe.lastIndexOf("/");
						-1 != f && (d = b.Pe.substr(0, f + 1) + d)
					}
				f = d;
				if (".." == f || "." == f)
					d = "";
				else if (z.gb(f, "./") || z.gb(f, "/.")) {
					for (var d = z.La(f, "/"), f = f.split("/"), g = [], h = 0; h < f.length; ) {
						var k = f[h++];
						"." == k ? d && h == f.length && g.push("") : ".." == k ? ((1 < g.length ||
						1 == g.length && "" != g[0]) && g.pop(),
						d && h == f.length && g.push("")) : (g.push(k),
							d = !0)
					}
					d = g.join("/")
				} else
					d = f
			}
			c ? (Qo(b),
				b.Pe = d) : c = "" !== a.me.toString();
			c ? So(b, To(a.me.toString())) : c = !!a.lj;
			c && (a = a.lj,
				Qo(b),
				b.lj = a);
			return b
		}
		;
		z.e.clone = function() {
			return new z.Oo(this)
		}
		;
		z.e.kd = function() {
			return this.me
		}
		;
		z.e.GA = function(a) {
			this.Ee = a;
			this.me && this.me.GA(a);
			return this
		}
		;
		var nF = /[#\/\?@]/g
			, pF = /[\#\?:]/g
			, oF = /[\#\?]/g
			, Wo = /[\#\?@]/g
			, qF = /#/g;
		z.e = z.Uo.prototype;
		z.e.ib = function() {
			$o(this);
			return this.Ka
		}
		;
		z.e.add = function(a, b) {
			$o(this);
			this.de = null ;
			a = ap(this, a);
			var c = this.Kb.get(a);
			c || this.Kb.set(a, c = []);
			c.push(b);
			this.Ka++;
			return this
		}
		;
		z.e.remove = function(a) {
			$o(this);
			a = ap(this, a);
			return this.Kb.Mf(a) ? (this.de = null ,
				this.Ka -= this.Kb.get(a).length,
				this.Kb.remove(a)) : !1
		}
		;
		z.e.clear = function() {
			this.Kb = this.de = null ;
			this.Ka = 0
		}
		;
		z.e.Qg = function() {
			$o(this);
			return 0 == this.Ka
		}
		;
		z.e.Mf = function(a) {
			$o(this);
			a = ap(this, a);
			return this.Kb.Mf(a)
		}
		;
		z.e.zn = function(a) {
			var b = this.Uc();
			return z.y(b, a)
		}
		;
		z.e.jd = function() {
			$o(this);
			for (var a = this.Kb.Uc(), b = this.Kb.jd(), c = [], d = 0; d < b.length; d++)
				for (var f = a[d], g = 0; g < f.length; g++)
					c.push(b[d]);
			return c
		}
		;
		z.e.Uc = function(a) {
			$o(this);
			var b = [];
			if (z.qa(a))
				this.Mf(a) && (b = Ub(b, this.Kb.get(ap(this, a))));
			else {
				a = this.Kb.Uc();
				for (var c = 0; c < a.length; c++)
					b = Ub(b, a[c])
			}
			return b
		}
		;
		z.e.set = function(a, b) {
			$o(this);
			this.de = null ;
			a = ap(this, a);
			this.Mf(a) && (this.Ka -= this.Kb.get(a).length);
			this.Kb.set(a, [b]);
			this.Ka++;
			return this
		}
		;
		z.e.get = function(a, b) {
			var c = a ? this.Uc(a) : [];
			return 0 < c.length ? String(c[0]) : b
		}
		;
		z.e.toString = function() {
			if (this.de)
				return this.de;
			if (!this.Kb)
				return "";
			for (var a = [], b = this.Kb.jd(), c = 0; c < b.length; c++)
				for (var d = b[c], f = (0,
					window.encodeURIComponent)(String(d)), d = this.Uc(d), g = 0; g < d.length; g++) {
					var h = f;
					"" !== d[g] && (h += "\x3d" + (0,
							window.encodeURIComponent)(String(d[g])));
					a.push(h)
				}
			return this.de = a.join("\x26")
		}
		;
		z.e.clone = function() {
			var a = new z.Uo;
			a.de = this.de;
			this.Kb && (a.Kb = this.Kb.clone(),
				a.Ka = this.Ka);
			return a
		}
		;
		z.e.GA = function(a) {
			a && !this.Ee && ($o(this),
				this.de = null ,
				this.Kb.forEach(function(a, c) {
					var d = c.toLowerCase();
					c != d && (this.remove(c),
						this.remove(d),
					0 < a.length && (this.de = null ,
						this.Kb.set(ap(this, d), z.Vb(a)),
						this.Ka += a.length))
				}, this));
			this.Ee = a
		}
		;
		z.e.extend = function(a) {
			for (var b = 0; b < arguments.length; b++)
				se(arguments[b], function(a, b) {
					this.add(b, a)
				}, this)
		}
		;
		z.v(z.bp, z.cd);
		z.e = z.bp.prototype;
		z.e.jH = "GET";
		z.e.tc = void 0;
		z.e.qP = null ;
		z.e.Wy = null ;
		z.e.HA = function(a) {
			this.jH = a
		}
		;
		z.e.ka = function(a) {
			this.tc = a
		}
		;
		z.e.EV = function(a, b, c) {
			c = z.rf(c.target);
			var d = [];
			if (c)
				try {
					d = Me(c)
				} catch (f) {}
			b(a, d)
		}
		;
		z.e.pi = function(a, b, c) {
			var d, f = this.MB;
			d = new z.Oo(this.HB);
			Qo(d);
			d.me.set("token", a);
			b = String(b);
			Qo(d);
			d.me.set("max_matches", b);
			f = String(Number(f));
			Qo(d);
			d.me.set("use_similar", f);
			if (d = d.toString())
				a = (0,
					z.r)(this.EV, this, a, c),
				this.fa.Rb() && this.fa.abort(),
				this.Wy && z.Vd(this.Wy),
					this.Wy = z.Td(this.fa, "success", a),
					this.fa.send(d, this.jH, this.tc, this.qP)
		}
		;
		z.e.C = function() {
			this.fa.H();
			z.bp.o.C.call(this)
		}
		;
		z.v(z.hp, z.G);
		z.e = z.hp.prototype;
		z.e.m = function() {
			return this.h
		}
		;
		z.e.mh = function(a) {
			this.$J = a
		}
		;
		z.e.$r = function() {
			return this.OC
		}
		;
		z.e.sm = function(a, b, c) {
			this.Xb = b;
			this.Ra = a;
			this.Sl = -1;
			this.pJ = (0,
				z.w)();
			this.yc = c;
			this.zf = [];
			lp(this)
		}
		;
		z.e.Ac = function() {
			this.ob && (this.ob = !1,
				ip(this, !1),
				0 < this.No ? (hd(this.Nk),
					this.Nk = new pn(this.h,this.No),
					this.Nk.play()) : z.Q(this.h, !1))
		}
		;
		z.e.show = function() {
			this.ob || (this.ob = !0,
				ip(this, !0),
				0 < this.No ? (hd(this.Nk),
					this.Nk = new qn(this.h,this.No),
					this.Nk.play()) : z.Q(this.h, !0))
		}
		;
		z.e.U = function() {
			return this.ob
		}
		;
		z.e.Zf = function(a) {
			if (-1 == a)
				jp(this, -1);
			else
				for (var b = 0; b < this.Ra.length; b++)
					if (this.Ra[b].id == a) {
						jp(this, b);
						break
					}
		}
		;
		z.e.ea = function() {
			if (this.yc && this.mp) {
				var a = this.OC || this.yc, b;
				b = this.KT ? 3 : 1;
				this.Lu && (b ^= 1);
				var c = 65;
				this.kJ && (this.h.style.height = "",
					c |= 32);
				z.cp(a, b, this.h, b ^ 1, null , null , c);
				this.Lu && (this.h.style.visibility = "visible")
			}
		}
		;
		z.e.Jx = function() {
			return this.yc || null
		}
		;
		z.e.C = function() {
			this.h && (z.Ud(this.h, "click", this.Hl, !1, this),
				z.Ud(this.h, "mousedown", this.Il, !1, this),
				z.Ud(this.h, "mouseover", this.xF, !1, this),
				this.da.removeNode(this.h),
				this.h = null ,
				this.ob = !1);
			hd(this.Nk);
			this.Qa = null ;
			z.hp.o.C.call(this)
		}
		;
		z.e.FI = function(a, b, c) {
			z.wg(c, a.data.toString())
		}
		;
		z.e.Hl = function(a) {
			var b = pp(this, a.target);
			0 <= b && this.dispatchEvent({
				type: z.uo,
				ri: this.Ra[b].id
			});
			a.stopPropagation()
		}
		;
		z.e.Il = function(a) {
			a.stopPropagation();
			a.preventDefault()
		}
		;
		z.e.xF = function(a) {
			a = pp(this, a.target);
			0 <= a && !(300 > (0,
				z.w)() - this.pJ) && this.dispatchEvent({
				type: to,
				ri: this.Ra[a].id
			})
		}
		;
		z.v(z.qp, z.so);
		z.qp.prototype.mh = function(a) {
			this.N.mh(a)
		}
		;
		z.qp.prototype.HA = function(a) {
			this.Md.HA(a)
		}
		;
		z.qp.prototype.ka = function(a) {
			this.Md.ka(a)
		}
		;
		z.v(z.rp, z.qp);
		z.rp.prototype.defaults = {
			source: "",
			Ne: 10,
			rV: !1,
			filter: null ,
			format: null ,
			Cy: null ,
			delay: 300,
			separator: null ,
			eN: null ,
			multiple: !1,
			mk: null ,
			qX: null ,
			placeholder: "",
			rd: null ,
			render: null
		};
		z.rp.prototype.defaults.format = function(a) {
			return function(b, c) {
				return (0,
					z.qb)(c) && z.oa(b) ? z.oa(b[0]) ? z.Kb(b[0].slice(1), a, this) : b : []
			}
		}(function(a) {
			var b;
			return (b = rF[this.J.source]) || (b = rF[sF][a[0]]) ? b(a) : a
		});
		var sF = "/autocomplete"
			, rF = {};
		rF[sF] = {
			topic: function(a) {
				return {
					type: a[0],
					name: a[1],
					url_token: a[2],
					avatar: a[3],
					id: a[4],
					answers: a[6],
					alias: a[7],
					raw: a,
					value: a[4],
					label: a[1]
				}
			},
			question: function(a) {
				return {
					type: a[0],
					title: a[1],
					id: a[2],
					url_token: a[3],
					answers: a[4],
					is_star: !!a[5],
					raw: a,
					label: a[1],
					value: a[2]
				}
			},
			people: function(a) {
				return {
					type: a[0],
					fullname: a[1],
					url_token: a[2],
					avatar: a[3],
					id: a[4],
					headline: a[5],
					raw: a,
					label: a[1],
					value: a[4]
				}
			},
			search_link: function(a) {
				return {
					type: a[0],
					raw: a,
					label: a[1],
					value: a[1]
				}
			}
		};
		rF["/topic/autocomplete"] = function(a) {
			return {
				type: a[0],
				name: a[1],
				url_token: a[2],
				avatar: a[3],
				id: a[4],
				followers: a[5],
				alias: a[6],
				label: a[1]
			}
		}
		;
		rF["/question/autocomplete"] = function(a) {
			return {
				type: a[0],
				title: a[1],
				id: a[2],
				url_token: a[3],
				is_duplicated: Boolean(+a[4]),
				answer_count: a[5],
				raw: a,
				label: a[1],
				value: a[2]
			}
		}
		;
		z.v(sp, z.Go);
		sp.prototype.Vc = z.p;
		sp.prototype.Zb = z.p;
		sp.prototype.vi = function() {
			return !1
		}
		;
		z.v(z.tp, z.G);
		z.e = z.tp.prototype;
		z.e.dJ = function(a) {
			this.WF = a
		}
		;
		z.e.init = function() {
			if (!this.qG) {
				for (var a = 0, b = this.Qc.length; a < b; a++)
					for (var c = z.ig(this.Qc[a]), d = 0, f = c.length; d < f; ++d) {
						var g = c[d]
							, h = g
							, k = wa(h);
						this.Nw[k] = g;
						this.AE && (this.S.g(g, "mouseover", this.uO),
							this.S.g(g, "mouseout", this.tO));
						this.zE && (this.S.g(h, "mouseover", this.sO),
							this.S.g(h, "mouseout", this.rO));
						this.kl.push(g);
						this.S.g(h, ["mousedown", "touchstart"], this.XO)
					}
				this.qG = !0
			}
		}
		;
		z.e.C = function() {
			this.S.H();
			for (var a = 0, b = this.Qc.length; a < b; a++) {
				var c = this.Qc[a];
				c.xE = void 0;
				c.aj = void 0
			}
			this.Qc.length = 0;
			this.kl.length = 0;
			this.Nw = null ;
			wp(this);
			z.tp.o.C.call(this)
		}
		;
		z.e.XO = function(a) {
			var b = wa(a.currentTarget);
			this.$a = this.Nw[b];
			a: {
				for (var b = this.$a, c = b.cloneNode(!0), d = b.getElementsByTagName("TEXTAREA"), f = c.getElementsByTagName("TEXTAREA"), g = 0; g < d.length; g++)
					f[g].value = d[g].value;
				switch (b.tagName) {
					case "TR":
						b = z.M("TABLE", null , z.M("TBODY", null , c));
						break a;
					case "TD":
					case "TH":
						b = z.M("TABLE", null , z.M("TBODY", null , z.M("TR", null , c)));
						break a;
					case "TEXTAREA":
						c.value = b.value;
					default:
						b = c
				}
			}
			this.Bc = b;
			this.Jr && Vh(this.Bc, this.Jr || []);
			this.Bc.style.margin = "0";
			this.Bc.style.position =
				"absolute";
			this.Bc.style.visibility = "hidden";
			z.Kf(this.$a).body.appendChild(this.Bc);
			b = z.yi(this.$a);
			Ei(this.Bc, b);
			this.Gb = new Yi(this.Bc);
			this.Gb.dJ(this.WF);
			z.F(this.Gb, "start", this.Rx, !1, this);
			z.F(this.Gb, "end", this.pO, !1, this);
			z.F(this.Gb, "earlycancel", this.lw, !1, this);
			this.Gb.Lm(a)
		}
		;
		z.e.Rx = function(a) {
			if (this.dispatchEvent(new Ep("beforedragstart",0,a.nD,0,0,null ))) {
				this.Ft = this.$a.parentNode;
				this.YD = this.Mz = mg(this.$a);
				this.Aw = this.Ft;
				this.zw ? Vh(this.$a, this.zw || []) : this.$a.style.visibility = "hidden";
				var b = z.Hi(this.Bc);
				this.Bc.YN = b.width / 2;
				this.Bc.XN = b.height / 2;
				this.Bc.style.visibility = "";
				this.EB && (this.$a.style.display = "none");
				vp(this, this.$a);
				this.$a.style.display = "";
				z.F(this.Gb, "drag", this.vO, !1, this);
				this.dispatchEvent(new Ep("dragstart",0,a.nD,0,0,this.Gb))
			} else
				a.preventDefault(),
					this.lw()
		}
		;
		z.e.vO = function(a) {
			var b = z.yi(this.Bc), b = new Ff(b.x + this.Bc.YN,b.y + this.Bc.XN), c;
			a: {
				c = null ;
				if ("none" != this.$a.style.display) {
					c = this.$a.parentNode;
					var d = Ji(c);
					if (xp(b, d))
						break a
				}
				for (var d = 0, f = this.Qc.length; d < f; d++) {
					var g = this.Qc[d];
					if (g != c && xp(b, g.jl)) {
						c = g;
						break a
					}
				}
				c = null
			}
			var h;
			if (c) {
				if (null  == c)
					throw Error("getHoverNextItem_ called with null hoverList.");
				var k, m, d = !1, f = void 0;
				switch (c.xE) {
					case 0:
						h = b.y;
						k = zp;
						m = Cp;
						break;
					case 4:
						d = !0;
					case 2:
						h = b.x;
						k = Ap;
						m = Cp;
						break;
					case 5:
						d = !0;
					case 3:
						h = b.x,
							k = Bp,
							m = Dp
				}
				for (var g =
					null , n, q = z.ig(c), A = 0, H = q.length; A < H; A++) {
					var K = q[A];
					if (K != this.$a) {
						var O = k(K.jl);
						if (d) {
							var Z = yp(K, b);
							z.l(f) || (f = Z);
							m(h, O) && (void 0 == n || Z < f || Z == f && (m(O, n) || O == n)) && (g = K,
								n = O);
							Z < f && (f = Z)
						} else
							m(h, O) && (void 0 == n || m(O, n)) && (g = K,
								n = O)
					}
				}
				h = null  !== g && yp(g, b) > f ? null  : g
			} else
				h = null ;
			if (!this.dispatchEvent(new Ep("beforedragmove",0,a,0,0,this.Gb)))
				return !1;
			if (c)
				this.EB ? this.$a.parentNode == c && mg(this.$a) == h || c.insertBefore(this.$a, h) : h && (this.YD = h),
					this.$a.style.display = "",
				c.aj && z.Uh(c, c.aj);
			else
				for (this.cQ || (this.$a.style.display =
					"none"),
					     h = 0,
					     k = this.Qc.length; h < k; h++)
					m = this.Qc[h],
					m.aj && z.Wh(m, m.aj);
			c != this.Aw && (this.Aw = c,
				vp(this, this.$a));
			this.dispatchEvent(new Ep("dragmove",0,a,0,0,this.Gb));
			return !1
		}
		;
		z.e.lw = function() {
			wp(this);
			this.Gb = this.Bc = this.Mz = this.Ft = this.Aw = this.$a = null ;
			for (var a = 0, b = this.Qc.length; a < b; a++)
				this.Qc[a].jl = null ;
			a = 0;
			for (b = this.kl.length; a < b; a++)
				this.kl[a].jl = null
		}
		;
		z.e.pO = function(a) {
			if (!this.dispatchEvent(new Ep("beforedragend",0,a,0,0,this.Gb)))
				return !1;
			this.EB || this.Ft.insertBefore(this.$a, this.YD);
			wp(this);
			this.dispatchEvent(new Ep("dragend",0,a,0,0,this.Gb));
			this.lw();
			return !0
		}
		;
		z.e.uO = function(a) {
			Vh(a.currentTarget, this.AE || [])
		}
		;
		z.e.tO = function(a) {
			Xh(a.currentTarget, this.AE || [])
		}
		;
		z.e.sO = function(a) {
			Vh(a.currentTarget, this.zE || [])
		}
		;
		z.e.rO = function(a) {
			Xh(a.currentTarget, this.zE || [])
		}
		;
		z.v(Ep, z.qd);
		var Hp;
		z.v(z.Fp, z.R);
		z.e = z.Fp.prototype;
		z.e.Uf = null ;
		z.e.sQ = 10;
		z.e.Ml = !1;
		z.e.B = function() {
			this.h = this.L().B("INPUT", {
				type: "text"
			})
		}
		;
		z.e.ia = function(a) {
			z.Fp.o.ia.call(this, a);
			this.Lb || (this.Lb = a.getAttribute("label") || "");
			Ng(z.Kf(a)) == a && (this.Ml = !0,
				z.Wh(this.m(), this.Go));
			Gp() && (this.m().placeholder = this.Lb);
			P(this.m(), "label", this.Lb)
		}
		;
		z.e.D = function() {
			z.Fp.o.D.call(this);
			var a = new z.ee(this);
			a.g(this.m(), "focus", this.uF);
			a.g(this.m(), "blur", this.Nx);
			Gp() ? this.S = a : (z.B && a.g(this.m(), ["keypress", "keydown", "keyup"], this.BO),
				a.g(z.Uf(z.Kf(this.m())), "load", this.kP),
				this.S = a,
				Ip(this));
			this.Jh();
			this.m().rQ = this
		}
		;
		z.e.Db = function() {
			z.Fp.o.Db.call(this);
			this.S && (this.S.H(),
				this.S = null );
			this.m().rQ = null
		}
		;
		z.e.C = function() {
			z.Fp.o.C.call(this);
			this.S && (this.S.H(),
				this.S = null )
		}
		;
		z.e.Go = "label-input-label";
		z.e.uF = function() {
			this.Ml = !0;
			z.Wh(this.m(), this.Go);
			if (!Gp() && !Jp(this) && !this.CP) {
				var a = this
					, b = function() {
						a.m() && (a.m().value = "")
					}
					;
				z.C ? z.ce(b, 10) : b()
			}
		}
		;
		z.e.Nx = function() {
			Gp() || (this.S.pa(this.m(), "click", this.uF),
				this.Uf = null );
			this.Ml = !1;
			this.Jh()
		}
		;
		z.e.BO = function(a) {
			27 == a.keyCode && ("keydown" == a.type ? this.Uf = this.m().value : "keypress" == a.type ? this.m().value = this.Uf : "keyup" == a.type && (this.Uf = null ),
				a.preventDefault())
		}
		;
		z.e.DO = function() {
			Jp(this) || (this.m().value = "",
				z.ce(this.bO, 10, this))
		}
		;
		z.e.bO = function() {
			Jp(this) || (this.m().value = this.Lb)
		}
		;
		z.e.kP = function() {
			this.Jh()
		}
		;
		z.e.hasFocus = function() {
			return this.Ml
		}
		;
		z.e.clear = function() {
			this.m().value = "";
			null  != this.Uf && (this.Uf = "")
		}
		;
		z.e.reset = function() {
			Jp(this) && (this.clear(),
				this.Jh())
		}
		;
		z.e.Fa = function(a) {
			null  != this.Uf && (this.Uf = a);
			this.m().value = a;
			this.Jh()
		}
		;
		z.e.W = function() {
			return null  != this.Uf ? this.Uf : Jp(this) ? this.m().value : ""
		}
		;
		z.e.Jh = function() {
			var a = this.m();
			Gp() ? this.m().placeholder != this.Lb && (this.m().placeholder = this.Lb) : Ip(this);
			P(a, "label", this.Lb);
			Jp(this) ? (a = this.m(),
				z.Wh(a, this.Go)) : (this.CP || this.isMobile || (a = this.m(),
				z.Uh(a, this.Go)),
			Gp() || z.ce(this.FT, this.sQ, this))
		}
		;
		z.e.Xa = function(a) {
			this.m().disabled = !a;
			Yh(this.m(), this.Go + "-disabled", !a)
		}
		;
		z.e.isEnabled = function() {
			return !this.m().disabled
		}
		;
		z.e.FT = function() {
			!this.m() || Jp(this) || this.isMobile || (this.m().value = this.Lb)
		}
		;
		var XA = {}
			, tF = /^\/node\//;
		window.$.ajaxPrefilter(function(a, b) {
			var c = b.data, d;
			c && (d = c.params) && "object" === window.$.type(d) && tF.test(b.url) && (c.params = Ne(d),
				a.data = window.$.param(c))
		});
		XA.oF = function(a, b) {
			return window.$.get(b ? "/node/AnswerFullVoteInfoV2" : "/node/AnswerVoteInfoV2", {
				params: {
					answer_id: a
				}
			})
		}
		;
		XA.SB = function(a, b) {
			return window.$.post("/node/AnswerVoteBarV2", {
				method: b,
				params: {
					answer_id: a
				}
			}, function(a) {
				a && a.r && z.U.alert("\x3cp\x3e" + a.msg + '\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24752645" target\x3d"_blank"\x3e为什么回答会被建议修改？\x3c/a\x3e\x3c/p\x3e')
			})
		}
		;
		XA.EA = function(a, b) {
			return window.$.post("/node/AnswerMetaV2", {
				method: "set_copyright",
				params: {
					answer_id: a,
					is_copyable: Number(b)
				}
			})
		}
		;
		z.v(Pp, z.Go);
		Pp.prototype.vi = function(a) {
			var b = Pp.o.vi.call(this, a);
			a.select(this.aa.Jx());
			return b
		}
		;
		z.v(Qp, z.bp);
		Qp.prototype.cT = ["根话题", "未归类话题"];
		Qp.prototype.Ep = function(a) {
			this.rA = a
		}
		;
		Qp.prototype.pi = function(a, b, c) {
			var d = (0,
				z.r)(function(a, b) {
				for (var d = [], k, m = 0; m < b.length; m++)
					for (var n = 1; n < b[m].length; n++) {
						k = b[m][n];
						var q = !0;
						this.PE && z.x(this.cT, function(a) {
							k[2] === a && (q = !1)
						});
						q && d.push(k)
					}
				this.rA && (d = this.rA(d, a));
				c(a, d)
			}, this);
			Qp.o.pi.call(this, a, b, d)
		}
		;
		z.v(Rp, z.Go);
		z.e = Rp.prototype;
		z.e.vi = function(a) {
			var b = Pp.o.vi.call(this, a)
				, c = this.aa.Jx()
				, d = this.as();
			d.YI = a;
			d.dispatchEvent("select");
			c.value = "";
			return b
		}
		;
		z.e.Fa = function() {}
		;
		z.e.update = function(a) {
			var b = z.zn(this.W());
			!b || "搜索用户" === b || "搜索话题" === b || "在这里输入问题" === b || z.y(this.aa.$w || [], b) || (b ? (0,
				window.unescape)((0,
				window.encodeURIComponent)(b)).length : 0) < this.kH || b === this.XG ? (this.aa.$i(),
				this.Jo = b) : (this.XG = null ,
				this.aa.dispatchEvent({
					type: uF
				}),
				Rp.o.update.call(this, a))
		}
		;
		z.e.je = function(a) {
			this.aa && z.zo(this.aa);
			a.target !== this.bb && (this.bb = a.target || null ,
			this.na && (this.na.start(),
				this.ec.g(this.na, "tick", this.im)),
				this.Jo = this.W(),
				Lo(this));
			this.na && this.na.start();
			this.update(!0)
		}
		;
		z.e.Vc = function() {
			this.na && this.na.stop();
			this.aa && this.aa.$i()
		}
		;
		z.e.Zb = function(a) {
			if (13 === a.keyCode) {
				if (this.aa.rb()) {
					if (this.aa.ti())
						return a.preventDefault(),
							a.stopPropagation(),
							!0;
					a.preventDefault();
					a.stopPropagation();
					this.aa.Xb = "";
					this.aa.Ac();
					this.update(!0);
					return !1
				}
				a.stopPropagation();
				a.preventDefault();
				return !1
			}
			Rp.o.Zb.call(this, a)
		}
		;
		z.e.Nq = function(a) {
			Rp.o.Nq.call(this, a);
			this.ec.g(a, "mousedown", function(a) {
				a.stopPropagation();
				return !0
			})
		}
		;
		z.v(Sp, Rp);
		Sp.prototype.vi = function(a) {
			var b = this.as();
			b.YI = a;
			b.dispatchEvent("select");
			return !1
		}
		;
		z.v(z.Tp, z.qp);
		var uF = "before_update";
		z.e = z.Tp.prototype;
		z.e.rE = !0;
		z.e.vT = function(a, b, c) {
			z.ye(c, function(a) {
				a = mp(this, a, this.Xb);
				this.da.appendChild(this.h, a)
			}, a);
			z.fg(a.h, a.da.B("div", "zh-question-suggest-info", [a = a.da.B("a", {
				href: "javascript:;",
				title: "关闭",
				name: "close",
				id: "zh-question-suggest-info-close"
			}, [a.da.B("span", "x-m"), "不是"]), "您想问的是不是下面的问题？"]), 0);
			z.F(a, "click", function() {
				var a = this.Af;
				a.Vc();
				this.Ac();
				a.XG = a.W()
			}, !1, this)
		}
		;
		z.e.xT = function(a, b, c) {
			0 === c.length ? this.Ac() : (z.ye(c, function(a) {
				a = mp(this, a, this.Xb);
				this.da.appendChild(this.h, a)
			}, a),
				b = a.da.B("div", "zh-question-topic-autocomplete-plaintext", ["建议添加的话题", a.da.B("span", "x-m")]),
				z.fg(a.h, b, 0),
			z.lB.lb && z.F(b, "click", function() {
				this.Af.Vc();
				this.Ac()
			}, !1, this))
		}
		;
		z.e.qj = function() {
			return this.YI
		}
		;
		z.e.Ep = function(a) {
			this.Md.Ep(a)
		}
		;
		z.e.Ac = function() {
			if (this.rE)
				return z.Tp.o.Ac.call(this)
		}
		;
		z.e.ti = function() {
			return -1 === Ao(this, this.Mg) ? !1 : z.Tp.o.ti.call(this)
		}
		;
		z.e.$i = function() {
			z.lB.lb ? z.Td(window.document, "click", (0,
				z.r)(this.Ac, this)) : z.Tp.o.$i.call(this)
		}
		;
		z.v(z.Up, z.Dl);
		var Vp = "view"
			, vF = "零一二三四五六七八九十".split("");
		z.e = z.Up.prototype;
		z.e.w = function(a) {
			this.h = a;
			this.lg = z.L("zm-tag-editor-labels", this.h);
			this.wt && (this.data = Wp(this));
			Xp(this);
			this.ze();
			this.dc()
		}
		;
		z.e.On = function() {
			this.Rc || (this.Rc = z.M("div", "zm-tag-editor-editor", [this.Mn = z.M("div", "zg-section zg-clear"), this.gf = z.M("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.nb = z.M("input", {
				"class": "zg-form-text-input zg-mr15",
				type: "text"
			}), z.M("a", {
				"class": "zg-mr15 zg-btn-blue",
				href: "#",
				name: "add",
				style: "display:none;"
			}, "添加"), this.QE = z.M("a", {
				href: "#",
				name: "close"
			}, "完成")]), this.ot = z.M("div", {
				className: "zm-tag-editor-maxcount zg-section",
				style: "display:none;"
			}, [z.M("span", {}, "最多只能为一个问题绑定 " +
				this.nt + " 个话题"), z.M("a", {
				href: "#",
				name: "close"
			}, "完成")])]),
				z.eg(this.Rc, this.lg),
			this.He && (this.Sy = new z.Fp(this.He),
				this.Sy.w(this.nb),
				this.nb.title = this.He),
				this.Og(this.gf))
		}
		;
		z.e.Og = function(a, b) {
			this.ca = new z.Tp(b || "/topic/autocomplete",this.nb,null ,null ,a,!0);
			this.ca.mh(!0);
			this.ca.$l = this.Ne;
			this.ca.Ep(this.um());
			this.ca.$w = [this.He];
			this.v().g(this.ca, "select", this.So);
			this.v().g(this.ca, "suggestionsupdate", this.Ev)
		}
		;
		z.e.cx = function(a) {
			return z.Mb(this.data, function(b) {
				return b[0] === a[1]
			})
		}
		;
		z.e.um = function() {
			return (0,
				z.r)(function(a, b) {
				return Zp(this, Yp(this, a), b)
			}, this)
		}
		;
		z.e.Ev = function() {
			1 < this.ca.Ra.length && !this.ca.Ra[0][4] && z.xo(this.ca)
		}
		;
		z.e.dc = function() {
			this.v().g(this.h, "click", this.Oa);
			z.ek && this.v().g(z.ek, "anon_change", this.sj)
		}
		;
		z.e.sj = function(a) {
			a.kb ? z.T.add(this.h, "zm-tag-editor-disabled") : z.T.remove(this.h, "zm-tag-editor-disabled")
		}
		;
		z.e.Oa = function(a) {
			var b = this.Hg(a.target);
			if (b && b.name)
				switch (a.preventDefault(),
					b.name) {
					case "edit":
						this.Me(!0);
						break;
					case "add":
						(a = z.zn(An(this.nb.value))) && a !== this.nb.title && this.Ze("", a);
						break;
					case "close":
						this.Me(!1);
						break;
					case "remove":
						this.OH(b)
				}
		}
		;
		z.e.Me = z.Lm(function(a) {
			if (a && (this.dispatchEvent("start_editing"),
				!1 === this.dispatchEvent("beforeedit")))
				return;
			this.status = a ? "edit" : Vp;
			this.On();
			this.Re();
			this.ze();
			$p(this)
		}, !0);
		z.e.OH = function(a) {
			var b = a.id.split("-")[1]
				, c = z.ng(a).innerHTML;
			this.qt && this.data.length <= this.qt ? z.U.message("请至少绑定" + vF[this.qt] + "个话题") : (this.data = z.Jb(this.data, function(a) {
				return b ? String(a[3]) !== b : a[1] !== c
			}),
				this.cp(b))
		}
		;
		z.e.cp = function(a) {
			if (!this.eu || !this.eu.Rb()) {
				this.eu = new z.V(!0);
				var b = new z.Uo;
				b.add("qid", this.qa).add("question_id", this.qa).add("topic_id", a);
				this.v().Aa(this.eu, "complete", this.YO);
				this.eu.ajax(this.sT, b.toString())
			}
		}
		;
		z.e.YO = function(a) {
			a = z.sf(a.target);
			a.r ? z.U.message(a.msg) : (this.dispatchEvent("remove_tag"),
				Xp(this),
				this.Re(),
				$p(this))
		}
		;
		z.e.ze = function() {
			this.status === Vp ? (z.Q(this.lg, !0),
			this.Rc && z.Q(this.Rc, !1)) : (z.Q(this.lg, !1),
			this.Rc && this.isEnabled && z.Q(this.Rc, !0),
			this.ot && z.Q(this.ot, !1))
		}
		;
		z.e.Ze = function(a, b) {
			this.Wg || (this.dispatchEvent("add_tag"),
				this.Wg = !0,
				this.xhr = new z.V(!0),
				this.v().Aa(this.xhr, "complete", this.Fv),
				this.xhr.ajax(this.mL, "qid\x3d" + this.qa + "\x26question_id\x3d" + this.qa + "\x26topic_id\x3d" + a + "\x26topic_text\x3d" + (0,
						window.encodeURIComponent)(b)))
		}
		;
		z.e.So = function() {
			var a = ""
				, b = ""
				, c = this.ca.qj().slice(1);
			3 < c.length ? (a = c[3],
				b = c[0]) : b = c[1];
			z.Mb(this.data, function(c) {
				return c[3] && String(c[3]) === a || c[0] === b
			}) || (a || b) && this.Ze(a, b)
		}
		;
		z.e.Fv = function() {
			this.Wg = !1;
			var a = z.sf(this.xhr);
			this.qk(a);
			$p(this)
		}
		;
		z.e.qk = function(a) {
			var b = null ;
			a && a.r ? a.notify ? z.Hl(a.notify) : z.U.message(a.msg) : (4 < a.length && z.Hl(a[4]),
				this.ZI = b = a,
				this.data.push(b),
				aq(this),
				Xp(this),
				this.Re(),
				this.nb.value = "",
				this.dispatchEvent("select"))
		}
		;
		z.e.ZE = function(a) {
			return z.yn(a, "nor", !1)
		}
		;
		z.e.Re = function() {
			var a = z.Kb(this.data, function(a) {
				return ['\x3cspan class\x3d"zm-tag-editor-edit-item"\x3e', this.ZE(a), a.gV ? "" : '\x3ca id\x3d"rmid-' + a[3] + '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e', "\x3c/span\x3e"].join("")
			}, this);
			this.Mn.innerHTML = a.join("")
		}
		;
		z.e.qj = function() {
			return this.ZI
		}
		;
		z.e.Xa = function(a) {
			this.isEnabled = a;
			this.status = Vp;
			this.ze()
		}
		;
		z.v(z.bq, z.Up);
		z.e = z.bq.prototype;
		z.e.w = function(a) {
			if (this.isEnabled = !a.getAttribute("data-disabled"))
				z.bq.o.w.call(this, a),
					this.Me(!0),
					z.Q(this.QE, !1)
		}
		;
		z.e.Og = function(a) {
			var b;
			this.My && (b = "/topic/autocomplete?no_create\x3dtrue");
			z.bq.o.Og.call(this, a, b);
			this.ca.Md.PE = !1
		}
		;
		z.e.um = function() {
			return (0,
				z.r)(function(a, b) {
				return z.Jb(a, function(a) {
					return 3 >= a.length ? !1 : z.Nb(this.data, function(d) {
						return d[1] === a[2] ? b === a[1] ? (a[0] = "plain_text",
							a[1] = '"' + b + '"已在现有列表中',
							!0) : !1 : !0
					})
				}, this)
			}, this)
		}
		;
		z.e.Ze = function(a, b) {
			this.Wg || (this.Wg = !0,
				this.xhr = new z.V(!0),
				this.v().Aa(this.xhr, "complete", this.Fv),
			a || (a = -1),
				this.My ? this.xhr.ajax("/topic/add", "tid\x3d" + this.Ff + "\x26pid\x3d" + a + "\x26topic_text\x3d" + (0,
						window.encodeURIComponent)(b)) : this.xhr.ajax("/topic/add", "tid\x3d" + this.Ff + "\x26cid\x3d" + a + "\x26topic_text\x3d" + (0,
						window.encodeURIComponent)(b)))
		}
		;
		z.e.ZE = function(a) {
			return '\x3ca class\x3d"nor" href\x3d"/topic/' + a[1] + '/organize"\x3e' + a[0] + "\x3c/a\x3e"
		}
		;
		z.e.cp = function(a) {
			if (!this.fa || !this.fa.Rb()) {
				var b = new z.V(!0);
				this.v().g(b, "success", function() {
					var c = z.sf(b);
					c.r ? z.U.message(c.msg) : (Xp(this),
						this.Re(),
						this.dispatchEvent({
							type: "remove_tag",
							data: {
								id: a
							}
						}))
				});
				this.My ? b.ajax(this.EI, "cid\x3d" + this.Ff + "\x26pid\x3d" + a) : b.ajax(this.EI, "pid\x3d" + this.Ff + "\x26cid\x3d" + a);
				this.fa = b
			}
		}
		;
		z.v(cq, z.Up);
		z.e = cq.prototype;
		z.e.w = function(a) {
			cq.o.w.call(this, a);
			this.Me(!0);
			z.x(z.Mf("a", null , a), function(a) {
				z.Q(a, !1)
			});
			this.v().g(this.nb, "focus", function() {
				this.wq.val() && !this.EE && (this.EE = !0,
					this.Pu());
				this.placeholder && (this.placeholder.pk("搜索话题"),
					cm(this.placeholder))
			});
			this.AG = new Nk;
			this.AG.attach(this.nb);
			this.v().g(this.AG, "key", function(a) {
				8 === a.keyCode && (1 === this.nb.value.length && (this.gD = !0,
					this.aM = (0,
						window.setTimeout)((0,
						z.r)(function() {
						this.gD = !1;
						(0,
							window.clearTimeout)(this.aM)
					}, this))),
				this.nb.value.length ||
				this.gD || (this.data.pop(),
					this.Re(),
					this.dispatchEvent("remove_tag")))
			});
			this.CU = new rk(this.Pu,2E3,this);
			this.v().g(this.wq[0], "keyup", function() {
				var a = this.wq.val();
				this.Au !== a && (this.CU.fire(),
					this.Au = a)
			});
			this.v().g(this, ["remove_tag", "add_tag"], function() {
				dq(this);
				0 < this.data.length && this.placeholder && (this.placeholder.pk("搜索话题"),
					cm(this.placeholder));
				5 <= this.data.length ? (this.Xa(!1),
					this.tq.show(),
				this.placeholder && this.placeholder.hide(),
					this.kv.hide()) : (this.Xa(!0),
					this.tq.hide(),
				this.placeholder &&
				this.placeholder.show(),
					this.kv.show(),
					this.tq.removeClass("light"))
			})
		}
		;
		z.e.cx = function(a) {
			return z.Mb(this.data, function(b) {
				return b[1] === a[1]
			})
		}
		;
		z.e.cp = function() {
			this.dispatchEvent("remove_tag");
			Xp(this);
			this.Re()
		}
		;
		z.e.On = function() {
			this.Rc || (cq.o.On.call(this),
				z.T.add(this.Rc, "zg-clear"),
				z.T.set(this.Mn, "zg-inline"),
				z.T.add(this.gf, "zg-left"),
				z.T.remove(this.gf, "zg-section"),
				z.T.set(this.nb, "zu-question-suggest-topic-input"),
				z.T.add(this.nb, "label-input-label"),
				this.yq = (0,
					window.$)("\x3cdiv class\x3d'sug-con zg-clear' style\x3d'display:none;'\x3e\x3c/div\x3e").append("\x3cspan class\x3d'zg-gray-normal zg-left tip'\x3e推荐添加\x3c/span\x3e").append(this.EK = (0,
					window.$)("\x3cspan class\x3d'sugs zg-clear zg-inline'\x3e\x3c/span\x3e")).append(this.lv =
					(0,
						window.$)('\x3cimg data-src\x3d"' + z.lB.cB + '/img/spinner2.gif"\x3e')),
				this.yq.insertAfter(this.h),
				this.yq.on("click", "a[name\x3d'add']", (0,
					z.r)(function(a) {
					a = a.currentTarget;
					5 > this.data.length ? this.Ze((0,
						window.$)(a).attr("data-id"), (0,
						window.$)(a).attr("data-text")) : this.tq.addClass("light")
				}, this)),
				this.kv = (0,
					window.$)('\x3clabel for\x3d"topic" class\x3d"zg-icon icon-magnify"\x3e\x3c/label\x3e'),
				(0,
					window.$)(this.gf).prepend(this.kv),
				this.placeholder = new z.am(this.nb,{
					text: "搜索话题",
					bD: !0
				}),
				(0,
					window.$)(this.gf).append(this.tq =
					(0,
						window.$)("\x3clabel class\x3d'err-tip' style\x3d'display:none;'\x3e最多添加五个话题\x3c/label\x3e")),
				this.v().g(this.Rc, "click", this.bV))
		}
		;
		z.e.bV = function(a) {
			z.Ln(this.h, a.target) || (a = z.L("zu-question-suggest-topic-input", this.Rc),
			Li(a) && a.focus())
		}
		;
		z.e.Pu = function() {
			this.EE && (this.Au = this.wq.val(),
				8 > this.Au.length ? (this.Sp = [],
					dq(this)) : (this.Tp && this.Tp.abort(),
					this.Tp = new z.V(!1),
					this.v().g(this.Tp, "success", this.jS),
					this.Tp.ajax("/topic-question/autocomplete?token\x3d" + this.Au + "\x26max_matches\x3d5\x26use_similar\x3d0", "GET"),
					this.lv.attr("src", this.lv.attr("data-src")).show()))
		}
		;
		z.e.jS = function() {
			this.Sp = z.sf(this.Tp)[0].slice(1);
			dq(this)
		}
		;
		z.e.Re = function() {
			var a = [];
			z.x(this.data, function(b) {
				a.push(['\x3cdiv class\x3d"zm-tag-editor-edit-item"\x3e\x3cspan\x3e', b[0], '\x3c/span\x3e\x3ca id\x3d"rmid-', b[3], '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e\x3c/div\x3e'].join(""))
			}, this);
			this.Mn.innerHTML = a.join("")
		}
		;
		z.e.reset = function() {
			this.data = [];
			Xp(this);
			this.Re()
		}
		;
		z.e.OH = function(a) {
			var b = a.id.split("-")[1]
				, c = z.ng(a).innerHTML;
			this.data = z.Jb(this.data, function(a) {
				return b ? String(a[3]) !== b : a[1] !== c
			});
			this.cp(b)
		}
		;
		z.e.Ze = function(a, b) {
			var c = [b, b, "", a];
			this.ZI = c;
			this.data.push(c);
			Xp(this);
			this.Re();
			this.nb.value = "";
			this.dispatchEvent("select");
			this.dispatchEvent("add_tag")
		}
		;
		z.e.Xa = function(a) {
			this.nb && z.Q(this.nb, a)
		}
		;
		z.v(z.fq, z.bq);
		z.fq.prototype.Ze = function(a) {
			this.Wg || (this.Wg = !0,
				this.xhr = new z.V(!0),
				this.v().Aa(this.xhr, "complete", this.Fv),
				this.xhr.ajax(this.kD, "tid\x3d" + a + "\x26method\x3dadd"))
		}
		;
		z.fq.prototype.cp = function(a) {
			this.Wg || (this.Wg = !0,
				this.xhr = new z.V(!0),
				this.v().g(this.xhr, "complete", function() {
					Xp(this);
					this.Re();
					this.Wg = !1
				}),
				this.xhr.ajax(this.kD, "tid\x3d" + a + "\x26method\x3ddel"))
		}
		;
		z.v(z.gq, z.cd);
		z.gq.prototype.restore = function(a) {
			var b = this.iu();
			a || this.H();
			return b
		}
		;
		z.v(z.hq, z.ve);
		z.e = z.hq.prototype;
		z.e.setPosition = function(a, b, c) {
			if (this.node = a)
				this.Vb = sa(b) ? b : 1 != this.node.nodeType ? 0 : this.Gc ? -1 : 1;
			sa(c) && (this.depth = c)
		}
		;
		z.e.zg = function(a) {
			this.node = a.node;
			this.Vb = a.Vb;
			this.depth = a.depth;
			this.Gc = a.Gc;
			this.mr = a.mr
		}
		;
		z.e.clone = function() {
			return new z.hq(this.node,this.Gc,!this.mr,this.Vb,this.depth)
		}
		;
		z.e.Lp = aa(7);
		z.e.next = function() {
			var a;
			if (this.rk) {
				if (!this.node || this.mr && 0 == this.depth)
					throw z.xe;
				a = this.node;
				var b = this.Gc ? -1 : 1;
				if (this.Vb == b) {
					var c = this.Gc ? a.lastChild : a.firstChild;
					c ? this.setPosition(c) : this.setPosition(a, -1 * b)
				} else
					(c = this.Gc ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
				this.depth += this.Vb * (this.Gc ? -1 : 1)
			} else
				this.rk = !0;
			a = this.node;
			if (!this.node)
				throw z.xe;
			return a
		}
		;
		z.e.Xl = function() {
			return this.rk
		}
		;
		z.e.equals = function(a) {
			return a.node == this.node && (!this.node || a.Vb == this.Vb)
		}
		;
		z.e.splice = function(a) {
			var b = this.node
				, c = this.Gc ? 1 : -1;
			this.Vb == c && (this.Vb = -1 * c,
				this.depth += this.Vb * (this.Gc ? -1 : 1));
			this.Gc = !this.Gc;
			z.hq.prototype.next.call(this);
			this.Gc = !this.Gc;
			for (var c = z.pa(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--)
				z.eg(c[d], b);
			z.N(b)
		}
		;
		z.e = z.iq.prototype;
		z.e.Qb = function() {
			var a = this.uc();
			return 1 == a.nodeType ? a : a.parentNode
		}
		;
		z.e.Sg = function() {
			return !1
		}
		;
		z.e.wa = function() {
			return z.Kf(z.C ? this.uc() : this.Z())
		}
		;
		z.e.Ua = function() {
			return z.Uf(this.wa())
		}
		;
		z.e.containsNode = function(a, b) {
			return this.yg(z.gr(a), b)
		}
		;
		z.e.jg = aa(9);
		z.v(pq, z.hq);
		z.v(z.qq, z.iq);
		z.qq.prototype.yg = function(a, b) {
			var c = z.kq(this)
				, d = z.kq(a);
			return (b ? z.Mb : z.Nb)(d, function(a) {
				return z.Mb(c, function(c) {
					return c.yg(a, b)
				})
			})
		}
		;
		z.qq.prototype.insertNode = function(a, b) {
			b ? z.dg(a, this.Z()) : z.eg(a, this.la());
			return a
		}
		;
		z.qq.prototype.rh = aa(26);
		z.v(z.rq, pq);
		z.e = z.rq.prototype;
		z.e.es = function() {
			return 3 != this.node.nodeType ? -1 : this.node == this.Ba ? this.Ga : 0
		}
		;
		z.e.bs = function() {
			return 3 != this.node.nodeType ? -1 : this.node == this.ua ? this.Ea : this.node.nodeValue.length
		}
		;
		z.e.Z = function() {
			return this.Ba
		}
		;
		z.e.la = function() {
			return this.ua
		}
		;
		z.e.Co = function() {
			return this.Xl() && this.node == this.ua && (!this.Ea || 1 != this.Vb)
		}
		;
		z.e.next = function() {
			if (this.Co())
				throw z.xe;
			return z.rq.o.next.call(this)
		}
		;
		z.e.Lp = aa(6);
		z.e.zg = function(a) {
			this.Ba = a.Ba;
			this.ua = a.ua;
			this.Ga = a.Ga;
			this.Ea = a.Ea;
			this.uf = a.uf;
			z.rq.o.zg.call(this, a)
		}
		;
		z.e.clone = function() {
			var a = new z.rq(this.Ba,this.Ga,this.ua,this.Ea,this.uf);
			a.zg(this);
			return a
		}
		;
		z.e = sq.prototype;
		z.e.Ui = "";
		z.e.set = function(a) {
			this.Ui = "" + a
		}
		;
		z.e.append = function(a, b, c) {
			this.Ui += a;
			if (null  != b)
				for (var d = 1; d < arguments.length; d++)
					this.Ui += arguments[d];
			return this
		}
		;
		z.e.clear = function() {
			this.Ui = ""
		}
		;
		z.e.toString = function() {
			return this.Ui
		}
		;
		z.e = tq.prototype;
		z.e.Ix = function() {
			return uq(this, !0)
		}
		;
		z.e.yx = function() {
			return uq(this, !1)
		}
		;
		z.e.yg = function(a, b) {
			var c = b && !a.isCollapsed()
				, d = a.R;
			try {
				return c ? 0 <= this.Ae(d, 0, 1) && 0 >= this.Ae(d, 1, 0) : 0 <= this.Ae(d, 0, 0) && 0 >= this.Ae(d, 1, 1)
			} catch (f) {
				if (!z.C)
					throw f;
				return !1
			}
		}
		;
		z.e.containsNode = function(a, b) {
			return this.yg(Eq(a), b)
		}
		;
		z.e.Yn = function() {
			var a = new sq;
			z.ye(this, function(b, c, d) {
				3 == b.nodeType ? a.append(z.Wa(b.nodeValue.substring(d.es(), d.bs()))) : 1 == b.nodeType && (-1 == d.Vb ? ag(b) && a.append("\x3c/" + b.tagName + "\x3e") : (c = b.cloneNode(!1),
					c = z.xg(c),
					z.C && "LI" == b.tagName ? a.append(c) : (b = c.lastIndexOf("\x3c"),
						a.append(b ? c.substr(0, b) : c))))
			}, this);
			return a.toString()
		}
		;
		z.e.ed = function() {
			return new z.rq(this.Z(),this.xa(),this.la(),this.Ma())
		}
		;
		z.v(z.vq, tq);
		z.e = z.vq.prototype;
		z.e.clone = function() {
			return new this.constructor(this.R.cloneRange())
		}
		;
		z.e.uc = function() {
			return this.R.commonAncestorContainer
		}
		;
		z.e.Z = function() {
			return this.R.startContainer
		}
		;
		z.e.xa = function() {
			return this.R.startOffset
		}
		;
		z.e.la = function() {
			return this.R.endContainer
		}
		;
		z.e.Ma = function() {
			return this.R.endOffset
		}
		;
		z.e.Ae = function(a, b, c) {
			return this.R.compareBoundaryPoints(1 == c ? 1 == b ? z.t.Range.START_TO_START : z.t.Range.START_TO_END : 1 == b ? z.t.Range.END_TO_START : z.t.Range.END_TO_END, a)
		}
		;
		z.e.isCollapsed = function() {
			return this.R.collapsed
		}
		;
		z.e.Kd = function() {
			return this.R.toString()
		}
		;
		z.e.Xf = function() {
			var a = z.I(this.R.startContainer).B("DIV");
			a.appendChild(this.R.cloneContents());
			a = a.innerHTML;
			if (z.La(a, "\x3c") || !this.isCollapsed() && !z.gb(a, "\x3c"))
				return a;
			var b = this.uc()
				, b = 1 == b.nodeType ? b : b.parentNode;
			return z.xg(b.cloneNode(!1)).replace("\x3e", "\x3e" + a)
		}
		;
		z.e.select = function(a) {
			var b = z.Uf(z.Kf(this.Z()));
			this.vp(b.getSelection(), a)
		}
		;
		z.e.vp = function(a) {
			a.removeAllRanges();
			a.addRange(this.R)
		}
		;
		z.e.Yc = aa(14);
		z.e.surroundContents = function(a) {
			this.R.surroundContents(a);
			return a
		}
		;
		z.e.insertNode = function(a, b) {
			var c = this.R.cloneRange();
			c.collapse(b);
			c.insertNode(a);
			c.detach();
			return a
		}
		;
		z.e.rh = aa(25);
		z.e.collapse = function(a) {
			this.R.collapse(a)
		}
		;
		z.v(zq, z.vq);
		zq.prototype.vp = function(a, b) {
			!b || this.isCollapsed() ? zq.o.vp.call(this, a, b) : (a.collapse(this.la(), this.Ma()),
				a.extend(this.Z(), this.xa()))
		}
		;
		z.v(z.Aq, tq);
		z.e = z.Aq.prototype;
		z.e.clone = function() {
			var a = new z.Aq(this.R.duplicate(),this.Gr);
			a.gg = this.gg;
			a.Ba = this.Ba;
			a.ua = this.ua;
			return a
		}
		;
		z.e.Ed = function() {
			this.gg = this.Ba = this.ua = null ;
			this.Ga = this.Ea = -1
		}
		;
		z.e.uc = function() {
			if (!this.gg) {
				var a = this.R.text
					, b = this.R.duplicate()
					, c = a.replace(/ +$/, "");
				(c = a.length - c.length) && b.moveEnd("character", -c);
				c = b.parentElement();
				b = z.Qa(b.htmlText).length;
				if (this.isCollapsed() && 0 < b)
					return this.gg = c;
				for (; b > z.Qa(c.outerHTML).length; )
					c = c.parentNode;
				for (; 1 == c.childNodes.length && c.innerText == Gq(c.firstChild) && xq(c.firstChild); )
					c = c.firstChild;
				0 == a.length && (c = Cq(this, c));
				this.gg = c
			}
			return this.gg
		}
		;
		z.e.Z = function() {
			this.Ba || (this.Ba = Dq(this, 1),
			this.isCollapsed() && (this.ua = this.Ba));
			return this.Ba
		}
		;
		z.e.xa = function() {
			0 > this.Ga && (this.Ga = Fq(this, 1),
			this.isCollapsed() && (this.Ea = this.Ga));
			return this.Ga
		}
		;
		z.e.la = function() {
			if (this.isCollapsed())
				return this.Z();
			this.ua || (this.ua = Dq(this, 0));
			return this.ua
		}
		;
		z.e.Ma = function() {
			if (this.isCollapsed())
				return this.xa();
			0 > this.Ea && (this.Ea = Fq(this, 0),
			this.isCollapsed() && (this.Ga = this.Ea));
			return this.Ea
		}
		;
		z.e.Ae = function(a, b, c) {
			return this.R.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
		}
		;
		z.e.$f = aa(18);
		z.e.isCollapsed = function() {
			return 0 == this.R.compareEndPoints("StartToEnd", this.R)
		}
		;
		z.e.Kd = function() {
			return this.R.text
		}
		;
		z.e.Xf = function() {
			return this.R.htmlText
		}
		;
		z.e.select = function() {
			this.R.select()
		}
		;
		z.e.Yc = aa(13);
		z.e.surroundContents = function(a) {
			z.N(a);
			a.innerHTML = this.R.htmlText;
			(a = Hq(this.R, a)) && this.R.moveToElementText(a);
			this.Ed();
			return a
		}
		;
		z.e.insertNode = function(a, b) {
			var c = z.Iq(this.R.duplicate(), a, b);
			this.Ed();
			return c
		}
		;
		z.e.rh = aa(24);
		z.e.collapse = function(a) {
			this.R.collapse(a);
			a ? (this.ua = this.Ba,
				this.Ea = this.Ga) : (this.Ba = this.ua,
				this.Ga = this.Ea)
		}
		;
		z.v(Jq, z.vq);
		Jq.prototype.vp = function(a) {
			a.collapse(this.Z(), this.xa());
			this.la() == this.Z() && this.Ma() == this.xa() || a.extend(this.la(), this.Ma());
			0 == a.rangeCount && a.addRange(this.R)
		}
		;
		z.v(Kq, z.vq);
		Kq.prototype.Ae = function(a, b, c) {
			return z.E("528") ? Kq.o.Ae.call(this, a, b, c) : this.R.compareBoundaryPoints(1 == c ? 1 == b ? z.t.Range.START_TO_START : z.t.Range.END_TO_START : 1 == b ? z.t.Range.START_TO_END : z.t.Range.END_TO_END, a)
		}
		;
		Kq.prototype.vp = function(a, b) {
			b ? a.setBaseAndExtent(this.la(), this.Ma(), this.Z(), this.xa()) : a.setBaseAndExtent(this.Z(), this.xa(), this.la(), this.Ma())
		}
		;
		z.v(z.Nq, z.iq);
		z.e = z.Nq.prototype;
		z.e.clone = function() {
			var a = new z.Nq;
			a.Fh = this.Fh && this.Fh.clone();
			a.Ba = this.Ba;
			a.Ga = this.Ga;
			a.ua = this.ua;
			a.Ea = this.Ea;
			a.uf = this.uf;
			return a
		}
		;
		z.e.bi = function() {
			return "text"
		}
		;
		z.e.he = function() {
			return z.Rq(this).R
		}
		;
		z.e.Ed = function() {
			this.Ba = this.Ga = this.ua = this.Ea = null
		}
		;
		z.e.rj = function() {
			return 1
		}
		;
		z.e.De = function() {
			return this
		}
		;
		z.e.uc = function() {
			return z.Rq(this).uc()
		}
		;
		z.e.Z = function() {
			return this.Ba || (this.Ba = z.Rq(this).Z())
		}
		;
		z.e.xa = function() {
			return null  != this.Ga ? this.Ga : this.Ga = z.Rq(this).xa()
		}
		;
		z.e.Ix = function() {
			return z.Rq(this).Ix()
		}
		;
		z.e.la = function() {
			return this.ua || (this.ua = z.Rq(this).la())
		}
		;
		z.e.Ma = function() {
			return null  != this.Ea ? this.Ea : this.Ea = z.Rq(this).Ma()
		}
		;
		z.e.yx = function() {
			return z.Rq(this).yx()
		}
		;
		z.e.Sg = function() {
			return this.uf
		}
		;
		z.e.yg = function(a, b) {
			var c = a.bi();
			return "text" == c ? z.Rq(this).yg(z.Rq(a), b) : "control" == c ? (c = a.Wh(),
				(b ? z.Mb : z.Nb)(c, function(a) {
					return this.containsNode(a, b)
				}, this)) : !1
		}
		;
		z.e.$f = aa(17);
		z.e.isCollapsed = function() {
			return z.Rq(this).isCollapsed()
		}
		;
		z.e.Kd = function() {
			return z.Rq(this).Kd()
		}
		;
		z.e.Yn = function() {
			return z.Rq(this).Yn()
		}
		;
		z.e.Xf = function() {
			return z.Rq(this).Xf()
		}
		;
		z.e.ed = function() {
			return new z.rq(this.Z(),this.xa(),this.la(),this.Ma())
		}
		;
		z.e.select = function() {
			z.Rq(this).select(this.uf)
		}
		;
		z.e.Yc = aa(12);
		z.e.surroundContents = function(a) {
			a = z.Rq(this).surroundContents(a);
			this.Ed();
			return a
		}
		;
		z.e.insertNode = function(a, b) {
			var c = z.Rq(this).insertNode(a, b);
			this.Ed();
			return c
		}
		;
		z.e.rh = aa(23);
		z.e.tA = function() {
			return new Sq(this)
		}
		;
		z.e.collapse = function(a) {
			a = this.Sg() ? !a : a;
			this.Fh && this.Fh.collapse(a);
			a ? (this.ua = this.Ba,
				this.Ea = this.Ga) : (this.Ba = this.ua,
				this.Ga = this.Ea);
			this.uf = !1
		}
		;
		z.v(Sq, z.gq);
		Sq.prototype.iu = function() {
			return z.Pq(this.PC, this.IL, this.TE, this.GN)
		}
		;
		Sq.prototype.C = function() {
			Sq.o.C.call(this);
			this.TE = this.PC = null
		}
		;
		z.v(z.Tq, z.qq);
		z.e = z.Tq.prototype;
		z.e.Ed = function() {
			this.Mp = this.cb = null
		}
		;
		z.e.clone = function() {
			return Vq.apply(this, this.Wh())
		}
		;
		z.e.bi = function() {
			return "control"
		}
		;
		z.e.he = function() {
			return this.R || window.document.body.createControlRange()
		}
		;
		z.e.rj = function() {
			return this.R ? this.R.length : 0
		}
		;
		z.e.De = function(a) {
			a = this.R.item(a);
			return Oq(Eq(a), void 0)
		}
		;
		z.e.uc = function() {
			return z.vg.apply(null , this.Wh())
		}
		;
		z.e.Z = function() {
			return Wq(this)[0]
		}
		;
		z.e.xa = function() {
			return 0
		}
		;
		z.e.la = function() {
			var a = Wq(this)
				, b = z.Hb(a);
			return z.Pb(a, function(a) {
				return z.qg(a, b)
			})
		}
		;
		z.e.Ma = function() {
			return this.la().childNodes.length
		}
		;
		z.e.Wh = function() {
			if (!this.cb && (this.cb = [],
					this.R))
				for (var a = 0; a < this.R.length; a++)
					this.cb.push(this.R.item(a));
			return this.cb
		}
		;
		z.e.$f = aa(16);
		z.e.isCollapsed = function() {
			return !this.R || !this.R.length
		}
		;
		z.e.Kd = function() {
			return ""
		}
		;
		z.e.Yn = function() {
			return z.Kb(Wq(this), z.xg).join("")
		}
		;
		z.e.Xf = function() {
			return this.Yn()
		}
		;
		z.e.ed = function() {
			return new Yq(this)
		}
		;
		z.e.select = function() {
			this.R && this.R.select()
		}
		;
		z.e.Yc = aa(11);
		z.e.jg = aa(8);
		z.e.tA = function() {
			return new Xq(this)
		}
		;
		z.e.collapse = function() {
			this.R = null ;
			this.Ed()
		}
		;
		z.v(Xq, z.gq);
		Xq.prototype.iu = function() {
			for (var a = (this.cb.length ? z.Kf(this.cb[0]) : window.document).body.createControlRange(), b = 0, c = this.cb.length; b < c; b++)
				a.addElement(this.cb[b]);
			return Uq(a)
		}
		;
		Xq.prototype.C = function() {
			Xq.o.C.call(this);
			delete this.cb
		}
		;
		z.v(Yq, pq);
		z.e = Yq.prototype;
		z.e.es = function() {
			return 0
		}
		;
		z.e.bs = function() {
			return 0
		}
		;
		z.e.Z = function() {
			return this.Ba
		}
		;
		z.e.la = function() {
			return this.ua
		}
		;
		z.e.Co = function() {
			return !this.depth && !this.cb.length
		}
		;
		z.e.next = function() {
			if (this.Co())
				throw z.xe;
			if (!this.depth) {
				var a = this.cb.shift();
				this.setPosition(a, 1, 1);
				return a
			}
			return Yq.o.next.call(this)
		}
		;
		z.e.zg = function(a) {
			this.cb = a.cb;
			this.Ba = a.Ba;
			this.ua = a.ua;
			Yq.o.zg.call(this, a)
		}
		;
		z.e.clone = function() {
			var a = new Yq(null );
			a.zg(this);
			return a
		}
		;
		z.v(z.Zq, z.qq);
		z.e = z.Zq.prototype;
		z.e.Ed = function() {
			this.qm = [];
			this.nr = this.Jm = null
		}
		;
		z.e.clone = function() {
			var a = this.Kf
				, b = new z.Zq;
			b.Kf = z.Vb(a);
			return b
		}
		;
		z.e.bi = function() {
			return "mutli"
		}
		;
		z.e.he = function() {
			return this.Kf[0]
		}
		;
		z.e.rj = function() {
			return this.Kf.length
		}
		;
		z.e.De = function(a) {
			this.qm[a] || (this.qm[a] = Oq(Lq(this.Kf[a]), void 0));
			return this.qm[a]
		}
		;
		z.e.uc = function() {
			if (!this.nr) {
				for (var a = [], b = 0, c = this.rj(); b < c; b++)
					a.push(this.De(b).uc());
				this.nr = z.vg.apply(null , a)
			}
			return this.nr
		}
		;
		z.e.Z = function() {
			return ar(this)[0].Z()
		}
		;
		z.e.xa = function() {
			return ar(this)[0].xa()
		}
		;
		z.e.la = function() {
			return z.Hb(ar(this)).la()
		}
		;
		z.e.Ma = function() {
			return z.Hb(ar(this)).Ma()
		}
		;
		z.e.$f = aa(15);
		z.e.isCollapsed = function() {
			return 0 == this.Kf.length || 1 == this.Kf.length && this.De(0).isCollapsed()
		}
		;
		z.e.Kd = function() {
			return z.Kb(z.kq(this), function(a) {
				return a.Kd()
			}).join("")
		}
		;
		z.e.Yn = function() {
			return this.Xf()
		}
		;
		z.e.Xf = function() {
			return z.Kb(z.kq(this), function(a) {
				return a.Xf()
			}).join("")
		}
		;
		z.e.ed = function() {
			return new cr(this)
		}
		;
		z.e.select = function() {
			var a = jq(this.Ua());
			a.removeAllRanges();
			for (var b = 0, c = this.rj(); b < c; b++)
				a.addRange(this.De(b).he())
		}
		;
		z.e.Yc = aa(10);
		z.e.tA = function() {
			return new br(this)
		}
		;
		z.e.collapse = function(a) {
			if (!this.isCollapsed()) {
				var b = a ? this.De(0) : this.De(this.rj() - 1);
				this.Ed();
				b.collapse(a);
				this.qm = [b];
				this.Jm = [b];
				this.Kf = [b.he()]
			}
		}
		;
		z.v(br, z.gq);
		br.prototype.iu = function() {
			var a = z.Kb(this.uA, function(a) {
				return a.restore()
			});
			return $q(a)
		}
		;
		br.prototype.C = function() {
			br.o.C.call(this);
			z.x(this.uA, function(a) {
				a.H()
			});
			delete this.uA
		}
		;
		z.v(cr, pq);
		z.e = cr.prototype;
		z.e.es = function() {
			return this.ag[this.fl].es()
		}
		;
		z.e.bs = function() {
			return this.ag[this.fl].bs()
		}
		;
		z.e.Z = function() {
			return this.ag[0].Z()
		}
		;
		z.e.la = function() {
			return z.Hb(this.ag).la()
		}
		;
		z.e.Co = function() {
			return this.ag[this.fl].Co()
		}
		;
		z.e.next = function() {
			try {
				var a = this.ag[this.fl]
					, b = a.next();
				this.setPosition(a.node, a.Vb, a.depth);
				return b
			} catch (c) {
				if (c !== z.xe || this.ag.length - 1 == this.fl)
					throw c;
				this.fl++;
				return this.next()
			}
		}
		;
		z.e.zg = function(a) {
			this.ag = z.Vb(a.ag);
			cr.o.zg.call(this, a)
		}
		;
		z.e.clone = function() {
			var a = new cr(null );
			a.zg(this);
			return a
		}
		;
		z.v(z.jr, z.ve);
		z.jr.prototype.next = function() {
			var a = this.sH;
			if (!a)
				throw z.xe;
			this.sH = this.IT ? a.previousSibling : a.nextSibling;
			return a
		}
		;
		z.v(kr, z.jr);
		var pr = {
			IMG: !0,
			IFRAME: !0,
			EMBED: !0
		};
		var Pt = function() {
			if (vE)
				return sr(/Firefox\/([0-9.]+)/);
			if (z.C || z.ld || z.li)
				return od;
			if (bh)
				return sr(/Chrome\/([0-9.]+)/);
			if (wE && !(jd() || ac("iPad") || ac("iPod")))
				return sr(/Version\/([0-9.]+)/);
			if (Ot || Sj) {
				var a;
				if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(bc))
					return a[1] + "." + a[2]
			} else if (is)
				return (a = sr(/Android\s+([0-9.]+)/)) ? a : sr(/Version\/([0-9.]+)/);
			return ""
		}();
		var yF, zF, BF, vx, GF, HF;
		z.wF = z.C && !(9 <= z.sg);
		z.xF = z.B || z.D || z.li || z.ld || z.C && 9 <= z.sg;
		z.mx = z.C || z.D || z.li || z.ld || !1;
		yF = z.D || !1;
		zF = z.C || z.D || z.li;
		z.AF = z.B || z.D;
		z.D && z.E("534.16");
		BF = z.B && !0;
		z.CF = z.B || z.D || z.li;
		z.DF = z.B || z.li;
		z.C && z.E("7.0");
		z.EF = z.B && z.E("1.8") || z.D || z.li;
		vx = z.D || z.C && z.E("9");
		z.C || z.ld || z.li || z.B && z.E("1.9");
		z.FF = z.B || z.D && !z.E("527");
		GF = z.C || z.li;
		HF = z.C || z.ld || z.D && z.E("525");
		z.IF = z.D && !z.E("531");
		z.JF = z.D && !z.E("528");
		z.B && z.E("1.9") || z.C || z.ld || z.li || z.D && z.E("531");
		z.KF = z.C || z.ld || z.B || z.li;
		z.LF = z.B || z.D && !z.E("526");
		z.MF = z.C || z.li;
		z.NF = !z.C && !z.li;
		z.OF = !z.D && !z.ld;
		bh && 0 <= pb(Pt, "4") || wE && z.E("533") || z.B && z.E("2.0") || z.C && z.E("10");
		z.PF = z.li && z.E("11.10");
		bh && pb(Pt, "12");
		z.v(z.yr, z.R);
		z.QF = 0;
		z.zr = [];
		z.yr.prototype.lc = null ;
		z.yr.prototype.ul = !1;
		z.yr.prototype.Gt = 0;
		var RF = z.C ? "styleFloat" : "cssFloat"
			, Dr = ["position", "top", "left", "width", RF]
			, Er = ["position", "top", "left", "display", RF, "marginTop", "marginLeft", "marginRight", "marginBottom"];
		z.e = z.yr.prototype;
		z.e.B = function() {
			z.yr.o.B.call(this);
			this.ia(this.m())
		}
		;
		z.e.ia = function(a) {
			z.yr.o.ia.call(this, a);
			z.T.add(a, "goog-scrollfloater")
		}
		;
		z.e.D = function() {
			z.yr.o.D.call(this);
			this.Zv = z.Ti(window.document.body).top - 2;
			this.lc || (this.lc = this.L().B("div", {
				style: "visibility:hidden"
			}));
			this.Gt = z.yi(this.m()).y;
			z.Ar(this, this.nu);
			var a = this.Xp = new rk(this.iq,150,this);
			this.v().g(window, "scroll", (0,
				z.r)(a.fire, a));
			this.v().g(window, "resize", z.Xn(150, this.$x))
		}
		;
		z.e.C = function() {
			z.yr.o.C.call(this);
			Tb(z.zr, this);
			this.Xp.H();
			this.Iy && (z.QF -= this.$D);
			delete this.lc
		}
		;
		z.e.iq = function() {
			this.nu && (z.Pg(this.L()).y + this.Zv > this.Gt ? Cr(this) : z.Br(this))
		}
		;
		z.e.mp = function() {
			var a = this.m()
				, b = this.Zv;
			!this.Iy && 0 < z.QF && (b += z.QF);
			a.style.top = b + "px"
		}
		;
		z.e.$x = function() {
			z.Br(this);
			this.Gt = z.yi(this.m()).y;
			this.iq()
		}
		;
		z.v(Fr, z.yr);
		Fr.prototype.iq = function() {
			var a = Gr(this.tag);
			if (this.nu && (!a || a === this)) {
				var a = this.lT.getBoundingClientRect()
					, b = this.Zv + z.QF
					, c = b + this.Qz;
				a.top < b && a.bottom > c ? Cr(this) : z.Br(this)
			}
		}
		;
		z.ma(Ir);
		Ir.prototype.df = function(a, b, c) {
			Hr("richtexteditor", function() {
				var d = window.ZH.createRichTextEditor(a, b)
					, f = d[0]
					, d = d[1];
				c && c(f, d)
			})
		}
		;
		Jr.prototype.defaults = {
			BT: [],
			mA: [],
			AM: !0
		};
		var Lr = "data-tip class style id bgcolor color size width height".split(" ");
		Jr.prototype.ug = function() {
			var a = this;
			if (this.J.AM)
				this.K.on("paste", function() {
					(0,
						window.setTimeout)(function() {
						Mr(a.K, Nr(a))
					})
				})
		}
		;
		z.v(z.Or, z.G);
		z.e = z.Or.prototype;
		z.e.defaults = {
			Xm: {
				Ne: 6,
				content: "",
				method: "GET",
				source: "/people/autocomplete"
			},
			TS: "mention-popup",
			fk: window.document.body,
			FC: "activated"
		};
		z.e.C = function() {
			this.yr();
			z.N(this.h);
			this.h = null ;
			z.Or.o.C.call(this)
		}
		;
		z.e.ew = function() {
			var a = this.h = z.Zf(this.cV);
			this.gp = a.getElementsByTagName("input")[0];
			a.className = this.J.TS;
			a.style.display = "none";
			this.J.fk.appendChild(a)
		}
		;
		z.e.uc = function() {
			return this.J.fk
		}
		;
		z.e.cV = '\x3cdiv\x3e\x3cdiv class\x3d"writing-bg"\x3e\x3cinput\x3e\x3c/div\x3e\x3cdiv class\x3d"tip"\x3e想用 @ 提到谁？\x3c/div\x3e\x3c/div\x3e';
		z.e.template = (0,
			z.ts)('\x3c% if (data.id) { %\x3e\x3cimg class\x3d"avatar" src\x3d"\x3c%\x3davatar%\x3e"\x3e\x3cdiv class\x3d"body"\x3e\x3cspan class\x3d"name"\x3e\x3c%\x3dlabel%\x3e\x3c/span\x3e\x3cspan class\x3d"bio"\x3e\x3c%\x3dheadline%\x3e\x3c/span\x3e\x3c/div\x3e\x3c% } %\x3e');
		z.e.rb = function() {
			return Li(this.h)
		}
		;
		z.e.open = function() {
			this.rb() || (z.Q(this.h, !0),
				this.gp.focus(),
				this.ug(),
				this.dispatchEvent("open"))
		}
		;
		z.e.close = function() {
			this.rb() && (z.Q(this.h, !1),
				z.T.remove(this.h, this.J.FC),
				this.gp.value = "",
				this.gp.blur(),
				this.yr(),
				this.dispatchEvent("close"))
		}
		;
		z.e.DH = function(a) {
			this.rb() && !z.qg(this.h, a.target) && Pr(this, a)
		}
		;
		z.e.Zo = function(a) {
			var b = a.keyCode
				, c = this.gp;
			if (27 === b || c === a.target && "" === c.value && (8 === b || 32 === b))
				Pr(this, a),
					a.preventDefault(),
					a.stopPropagation()
		}
		;
		z.e.ug = function() {
			z.F(window.document, "click", this.DH, !1, this);
			z.F(this.h, "keydown", this.Zo, !1, this)
		}
		;
		z.e.yr = function() {
			z.Ud(window.document, "click", this.DH, !1, this);
			z.Ud(this.h, "keydown", this.Zo, !1, this)
		}
		;
		z.e.Og = function() {
			var a = this
				, b = this.J.Xm
				, c = new z.rp(this.gp,{
				mk: this.h,
				Ne: b.Ne,
				source: b.source,
				select: function(b) {
					(0,
						window.setTimeout)(function() {
						a.close();
						a.dispatchEvent({
							type: "select",
							data: {
								RS: b
							}
						})
					});
					return ""
				},
				rd: function(b, c, g) {
					g.innerHTML = a.template(b.data)
				}
			});
			c.HA(b.method);
			c.ka(b.content);
			c.addEventListener("suggestionsupdate", function() {
				z.T.enable(this.h, this.J.FC, c.rb())
			}, !1, this);
			this.aa = c
		}
		;
		z.e.position = function(a) {
			z.ri(this.h, a)
		}
		;
		z.e.Qe = aa(19);
		z.v(Qr, z.G);
		var Tr = !!window.getSelection;
		Qr.prototype.defaults = {
			Xm: {},
			fk: window.document.body,
			Pj: "member_mention",
			Ds: "mention-holder",
			position: function(a, b) {
				a.x += b.width + 7;
				a.y -= 5;
				z.C && 7 < od && (a.y += b.height / 2 - 9)
			}
		};
		var $r = z.ic({
			lW: "member_mention"
		});
		Qr.prototype.m = function() {
			return this.input
		}
		;
		Qr.prototype.ug = function() {
			var a = this.ig;
			z.F(a, "cancel", function(a) {
				var c = Rr(this);
				a = a.data.originalEvent;
				c && "click" !== a.type && ("keydown" === a.type && 32 === a.keyCode && (c = c.parentNode.insertBefore(window.document.createTextNode(" "), c.nextSibling)),
					Sr(this, c))
			}, !1, this);
			z.F(a, "select", function(a) {
				var c = a.data.RS;
				a = z.L(this.J.Ds, this.input);
				var c = this.sr(c)
					, d = a.previousSibling
					, f = window.document.createTextNode(" ");
				z.gg(c, a);
				z.eg(f, c);
				d && 3 === d.nodeType && !z.Ma(z.Eg(d), " ") && z.dg(window.document.createTextNode(" "),
					c);
				Sr(this, f)
			}, !1, this);
			z.F(this.input, "click", function() {
				a.rb() && Rr(this)
			}, !1, this);
			z.F(this.input, "keydown", function(a) {
				var c;
				if (8 === a.keyCode && (c = z.dr())) {
					a = c.Z();
					var d = c.la()
						, f = c.xa();
					c = c.Ma();
					var g = !1;
					Zr(a.parentNode) && (f = 0,
						g = !0);
					Zr(d.parentNode) && (c = d.length,
						g = !0);
					g && z.Pq(a, f, d, c).select()
				}
			}, !1, this);
			z.F(this.input, z.Ad || Ot || Sj ? "keypress" : "keyup", function(a) {
				function c(a, b) {
					if (3 !== a.nodeType || "@" === a.nodeValue && Ur(a.previousSibling) || Ur(a.parentNode))
						return !1;
					var c = a.nodeValue
						, d = b - 1;
					if ("@" !==
						c.slice(d, d + 1))
						return !1;
					var f = c;
					0 <= d && d < c.length && (f = c.substr(0, d) + c.substr(d + 1, c.length - d - 1));
					a.nodeValue = f;
					return !0
				}
				if ("keypress" !== a.type || "@" === String.fromCharCode(a.charCode)) {
					var d, f, g, h;
					if ("keyup" === a.type) {
						if (50 !== a.keyCode)
							return;
						if (Tr) {
							d = window.getSelection();
							g = d.anchorNode;
							h = d.anchorOffset;
							if (!c(g, h))
								return;
							z.D && !g.nextSibling && (g.nodeValue += " ");
							f = window.document.createRange();
							d.removeAllRanges();
							f.setStart(g, h - 1);
							f.setEnd(g, h - 1);
							d.addRange(f)
						} else {
							f = z.fr(window.document.selection.createRange());
							g = z.lq(f);
							h = f.xa();
							if (!c(g, h))
								return;
							z.hr(g, h - 1).select()
						}
					}
					this.Bu(a)
				}
			}, !1, this)
		}
		;
		Qr.prototype.Bu = function(a) {
			var b = this
				, c = this.ig;
			if (!c.rb()) {
				var d = function(c) {
						return Ur(c) || c.className === b.J.Pj ? !1 : (a && a.preventDefault(),
							!0)
					}
					, f = function(a) {
						c.position(a);
						c.open()
					}
					;
				Tr ? Vr(b, d, f) : Yr(b, d, f)
			}
		}
		;
		Qr.prototype.sr = function(a, b) {
			return z.M("a", {
				"data-hash": a.id,
				href: "/people/" + a.url_token,
				className: b || this.J.Pj,
				innerHTML: "@" + a.label
			})
		}
		;
		z.v(z.as, z.R);
		z.e = z.as.prototype;
		z.e.C = function() {
			this.Na = null ;
			z.as.o.C.call(this)
		}
		;
		z.e.ia = function(a) {
			z.as.o.ia.call(this, a);
			var b = a.getAttribute("data-resourceid");
			b && (this.ET = a.getAttribute("data-action"),
				this.tp = b);
			this.status || (this.status = "normal");
			a = this.L();
			this.fd || (this.fd = a.Vh("zm-editable-content", this.h)) && "1" === this.fd.getAttribute("data-disabled") && (this.disabled = !0);
			this.bc ? this.Wb && (this.bc.innerHTML = this.Wb) : (this.bc = a.Vh("zm-editable-tip", this.h),
			this.Wb && !this.bc && (this.bc = a.B("div", "zm-editable-tip"),
				this.bc.innerHTML = this.Wb,
				a.Ps(this.bc, this.fd)));
			this.Hb =
				a.Vh("zm-editable-editor-wrap", this.h);
			this.content = (0,
				z.qb)(this.content || this.JB ? z.Eg(this.fd) : this.fd.innerHTML);
			this.ze();
			fs(this)
		}
		;
		z.e.B = function() {
			var a = this.L()
				, a = a.B("div", "zm-editable-item-wrap", [this.bc = a.B("div", "zm-editable-tip"), this.fd = a.B("div", "zm-editable-content", this.content)]);
			this.ia(a)
		}
		;
		z.e.D = function() {
			z.as.o.D.call(this);
			this.v().g(this.fd, "click", this.Oa);
			this.bc && this.v().g(this.bc, "click", this.Oa)
		}
		;
		z.e.ka = function(a) {
			this.content = a;
			fs(this)
		}
		;
		z.e.Oa = function(a) {
			var b = z.Ln(this.h, a.target)
				, c = this.L();
			if (!b || !b.name)
				return a = c.NN(a.target, "div", "zm-editable-tip-label"),
				this.isEnabled && a && this.Df(),
					!0;
			a = b.name;
			switch (a) {
				case "expand":
					fs(this);
					break;
				case "collapse":
					fs(this);
					break;
				case "edit":
					z.X.Yd ? !1 !== this.dispatchEvent("beforeedit") && (this.init(),
						this.Df()) : (new xl).G(!0);
					this.dispatchEvent("click_edit");
					break;
				case "save":
					this.vs();
					break;
				case "cancel":
					this.dispatchEvent("cancel_edit");
					this.Bi();
					break;
				default:
					return this.ks(a)
			}
			return !0
		}
		;
		z.e.vs = function() {
			var a = z.zn(this.nf())
				, b = /<embed/i.test(a);
			if (/<img/i.test(a) || b || this.sG || a && An(a).length)
				a !== this.content || this.WE ? (this.dispatchEvent("save_changed"),
					this.ah(a)) : (this.dispatchEvent("save_unchanged"),
					this.Bi())
		}
		;
		z.e.ah = function(a) {
			if (!this.fa || !this.fa.Rb())
				if (this.xr && this.UI) {
					this.fa = new z.V(!0);
					this.v().Aa(this.fa, "success", this.KC);
					var b = new z.Uo(this.params.join("\x26"));
					b.add(this.xr, a).add("field_name", this.xr);
					this.fa.ajax(this.UI, b.toString())
				} else
					this.dispatchEvent("change")
		}
		;
		z.e.Bi = function() {
			this.status = "normal";
			this.ze()
		}
		;
		z.e.KC = function() {
			var a = z.sf(this.fa);
			if (!a)
				return z.U.message("网络异常");
			if (a.r)
				return z.U.message(a.msg);
			this.ka(a.msg);
			this.Bi();
			this.dispatchEvent("saveSuccess");
			this.dispatchEvent("change")
		}
		;
		z.e.Va = function() {
			return this.content
		}
		;
		z.e.zx = aa(20);
		z.e.isContentEditable = function() {
			return !this.Id
		}
		;
		z.e.nf = function() {
			return (0,
				z.Sn)(z.Va(this.Na.value))
		}
		;
		z.e.ks = function(a) {
			this.dispatchEvent(a);
			return !0
		}
		;
		z.e.init = function() {
			this.oP || (this.oP = !0,
				this.df())
		}
		;
		z.e.df = function() {
			var a = this.L();
			this.Hb ? (this.sc = a.Vh("zm-command", this.Hb),
				this.Na = a.Vh("zm-editable-editor-input", this.Hb)) : (this.Hb = a.B("div", "zm-editable-editor-wrap clearfix", this.ej = a.B("div", "zm-editable-editor-outer", a.B("div", "zm-editable-editor-inner zg-form-text-input", this.Na = a.B("textarea", "zm-editable-editor-input")))),
				a.Dy(this.Hb, this.fd),
				this.cl());
			this.Na && this.Na.tagName && "TEXTAREA" === this.Na.tagName && !this.nE && new z.Zn(this.Na);
			this.Vo()
		}
		;
		z.e.ready = function(a) {
			this.gE.done(a)
		}
		;
		z.e.Vo = function() {
			this.v().g(this.sc, "click", this.Oa);
			this.Ru && es(this);
			ds(this);
			this.gE.resolveWith(this)
		}
		;
		z.e.cl = function() {
			this.sc = z.M("div", "zm-command", [this.cr = z.M("a", {
				"class": "zm-command-cancel",
				name: "cancel",
				href: "javascript:;"
			}, "取消"), this.yn = z.M("a", {
				"class": "zg-r3px zg-btn-blue",
				name: "save",
				href: "javascript:;"
			}, "保存")]);
			this.Hb.appendChild(this.sc)
		}
		;
		z.e.ze = function() {
			this.wr && z.T.remove(this.h, this.wr);
			"editing" === this.status ? (this.bc && z.Q(this.bc, !1),
			this.Hb && z.Q(this.Hb, !0),
				z.Q(this.fd, !1),
				this.wr = "zm-editable-status-editing") : (this.bc && (!this.sG || this.content || this.disabled ? z.Q(this.bc, !1) : z.Q(this.bc, !0)),
			this.Hb && z.Q(this.Hb, !1),
				this.content ? z.Q(this.fd, !0) : z.Q(this.fd, !1),
				this.wr = "zm-editable-status-normal");
			z.T.add(this.h, this.wr)
		}
		;
		z.e.Df = function() {
			this.Ur || (this.init(),
				this.ready(function() {
					this.status = "editing";
					this.ze();
					this.Cp()
				}))
		}
		;
		z.e.Cp = function() {
			if (this.tp)
				this.Ur = !0,
					this.ix();
			else {
				var a = this.Na, b;
				b = fb(this.content.replace(/<br \/>/g, "\n").replace(/<br>/g, "\n")).replace(/<a.*?href="(.*?)".*?<\/a>/g, "$1");
				a.value = b
			}
		}
		;
		z.e.gF = function() {
			var a = [];
			this.disabled || a.push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e');
			return a.join("")
		}
		;
		z.e.ix = function() {
			this.Ur || (this.Ur = !0,
				z.Uj(this.ET + "?id\x3d" + this.tp, (0,
					z.r)(function(a) {
					this.Ur = !1;
					a = z.sf(a.target);
					a.r ? z.U.message(a.msg) : this.su(a.msg)
				}, this), "GET"))
		}
		;
		z.e.su = function(a) {
			this.Na.value = a
		}
		;
		z.v(z.gs, z.as);
		z.e = z.gs.prototype;
		z.e.su = function(a) {
			this.Id ? z.gs.o.su.call(this, a) : (a || (a = z.B ? "" : "\x3cdiv\x3e\x3c/div\x3e"),
				this.Na.Qd(!1, a, !0))
		}
		;
		z.e.Cp = function() {
			this.ready(function() {
				this.tp ? this.ix() : this.Id ? z.gs.o.Cp.call(this) : this.content ? this.Na.Qd(!1, this.content, !1, !0) : this.Na.Qd(!1, z.D ? "\x3cdiv\x3e\x3cbr\x3e\x3c/div\x3e" : "\x3cdiv\x3e\x3c/div\x3e", !1, !0)
			})
		}
		;
		z.e.C = function() {
			hd(this.Na);
			z.N(this.Hb);
			this.sq = this.oC = this.ji = this.ml = this.tB = this.ej = this.Hb = null ;
			z.gs.o.C.call(this)
		}
		;
		z.e.df = function() {
			if (this.Id)
				z.gs.o.df.call(this);
			else {
				var a = this.L();
				this.Hb = a.B("div", "zm-editable-editor-wrap", this.ej = a.B("div", "zm-editable-editor-outer", [this.tB = a.B("div", "zm-editable-toolbar-container"), this.ml = a.B("div", "zm-editable-editor-field-wrap", this.ji = a.B("div", {
					id: this.UQ,
					className: "zm-editable-editor-field-element"
				}))]));
				this.oC = (0,
					window.$)(this.tB);
				this.sq = (0,
					window.$)(this.Hb);
				this.sq.hide();
				a.Dy(this.Hb, this.fd);
				this.tp || (this.ji.innerHTML = this.content);
				a = {
					loremIpsum_: this.dz,
					enableFullScreen: this.Qw,
					content: this.content,
					useScraper_: this.qV,
					canUploadMedia_: this.ar,
					useRemoveFormat_: this.YJ
				};
				this.cl();
				Ir.Y().df(this.Hb, a, (0,
					z.r)(this.Vo, this));
				Rj || (this.ng = new Fr(null ,this.ej),
					this.ng.w(this.tB),
					z.Ar(this.ng, !1),
					z.Br(this.ng),
					z.fd(this, this.ng))
			}
		}
		;
		z.e.Vo = function(a, b) {
			if (this.Id)
				z.gs.o.Vo.call(this);
			else {
				this.Na = a;
				this.sq.show();
				z.gs.o.Vo.call(this);
				ks(this, a, b);
				var c = a.Sb.CodePlugin;
				c && (c.iU(b),
					c.ug())
			}
		}
		;
		z.e.Df = function() {
			z.gs.o.Df.call(this);
			this.ready(function() {
				this.Id || this.tN || (this.tN = !0,
					z.Td(this.Na, "load", function() {
						var a = this.Na
							, b = a.Sb.FullScreenPlugin;
						z.B && (a = a.Ia);
						z.F(a, ["focus", "blur"], function(a) {
							b && z.T.has(window.document.body, b.J.Tn) || ls(this, "focus" === a.type)
						}, !1, this)
					}, !1, this),
					this.Na.Me())
			})
		}
		;
		z.e.nf = function() {
			if (this.Id)
				return z.gs.o.nf.call(this);
			var a = this.Na;
			return Rn(a.m(), !0) ? "" : a.xl()
		}
		;
		z.e.ze = function() {
			z.gs.o.ze.call(this);
			this.ng && z.Ar(this.ng, "editing" === this.status)
		}
		;
		z.v(z.ns, z.S);
		z.ma(z.ns);
		var qs = XE.create("AddQuestionForm" + z.X.bg);
		z.e = z.ns.prototype;
		z.e.D = function() {
			z.ns.o.D.call(this);
			var a = z.Zf((0,
				z.qb)('\x3cdiv class\x3d"zh-add-question-form"\x3e\x3cdiv class\x3d"js-add-question-splash add-question-splash-page" \x3e\x3cp\x3e知乎是一个真诚、友善、认真、互助的社区\x3cbr\x3e我们希望每一个疑惑都有解答，好的问题更容易得到好答案 \x3ca href\x3d"//www.zhihu.com/question/19555761"\x3e如何提一个好问题？\x3c/a\x3e\x3c/p\x3e\x3cp\x3e\x3cb\x3e提问应遵循真实、客观、简洁、明确、规范的原则\x3c/b\x3e\x3cbr\x3e1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。\x3cbr\x3e2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。\x3cbr\x3e3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由\x3cbr\x3e4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。\x3cbr\x3e\x3c/p\x3e\x3cp\x3e\x3cb\x3e知乎禁止这些提问\x3c/b\x3e\x3cbr\x3e1、和已有问题完全重复的问题，\x3cb\x3e为避免重复，提问前可以先进行搜索\x3c/b\x3e\x3cbr\x3e2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容\x3cbr\x3e3、投票类问题。例如：你支持方舟子还是韩寒？\x3cbr\x3e4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题\x3cbr\x3e完整的提问建议可查看 \x3ca href\x3d"//www.zhihu.com/question/19806261"\x3e知乎的提问规范有哪些？\x3c/a\x3e\x3cbr\x3e\x3c/p\x3e\x3cdiv class\x3d"before-ask-form"\x3e\x3cb\x3e提问前请先搜索\x3c/b\x3e\x3cdiv style\x3d"position:relative;margin-top:18px;"\x3e\x3cinput type\x3d"text" class\x3d"zg-form-text-input" id\x3d"js-before-ask" placeholder\x3d"请输入你的问题"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cform class\x3d"js-add-question-form"\x3e\x3cdiv class\x3d"zg-section-big clearfix"\x3e\x3cdiv id\x3d"zm-modal-dialog-info-wrapper"\x3e\x3c/div\x3e\x3cdiv style\x3d"display: none;position: relative;" id\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close"  style\x3d"display:none"\x3ex\x3c/a\x3e\x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"zg-form-text-input add-question-title-form" style\x3d"position: relative;"\x3e\x3ctextarea rows\x3d"1" class\x3d"zg-editor-input" title\x3d"在这里输入问题" id\x3d"zh-question-suggest-title-content"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3cspan id\x3d"js-title-length-err-msg" class\x3d"title-length-err-msg zg-right"\x3e\x3c/span\x3e\x3cdiv id\x3d"zh-question-suggest-ac-wrap" class\x3d"question-suggest-ac-wrap"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zg-section-big"\x3e\x3cdiv style\x3d"display: none;position: relative;" class\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close" style\x3d"display:none"\x3ex\x3c/a\x3e\x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"add-question-section-title"\x3e\x3cspan class\x3d"zg-right extra-editor-toolbar hidden-phone"\x3e\x3cdiv class\x3d"js-toggle-editor-toolbar"\x3e\x3ci class\x3d"tr-inline-icon z-ico-textedit"\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"js-editor-add-pic"\x3e\x3ci class\x3d"tr-inline-icon tr-image"\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"js-editor-add-video"\x3e\x3ci class\x3d"tr-inline-icon tr-video"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/span\x3e问题说明（可选）：\x3cspan id\x3d"zh-question-form-detail-err"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv id\x3d"zh-question-suggest-detail-container"\x3e\x3cdiv class\x3d"zm-editable-content" data-disabled\x3d"1"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-add-question-form-topic-wrap"\x3e\x3cdiv class\x3d"add-question-section-title"\x3e\x3cspan class\x3d"zg-gray zg-right hidden-phone"\x3e话题越精准，越容易让相关领域专业人士看到你的问题\x3c/span\x3e选择话题：\x3cspan id\x3d"zh-question-form-tag-err"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv id\x3d"zh-question-suggest-topic-container" class\x3d"zm-tag-editor zg-section"\x3e\x3cdiv class\x3d"zm-tag-editor-labels"\x3e\x3c/div\x3e\x3cdiv id\x3d"zh-question-suggest-autocomplete-container"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command"\x3e\x3clabel class\x3d"zm-question-form-hide-in-about-question-el zg-left"\x3e\x3cinput type\x3d"checkbox" value\x3d"1" class\x3d"zg-addq-isanon"\x3e匿名\x3c/label\x3e\x3ca href\x3d"javascript:;" name\x3d"cancel" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\x3ca href\x3d"javascript:;" name\x3d"addq" class\x3d"zg-r5px zu-question-form-add zg-btn-blue"\x3e发布\x3c/a\x3e\x3ca name\x3d"jumpq" class\x3d"zg-r5px zg-btn-blue zu-question-form-jump" style\x3d"display:none;"\x3e查看问题\x3c/a\x3e\x3c/div\x3e\x3c/form\x3e\x3c/div\x3e'));
			this.X().appendChild(a);
			this.Dc = z.Of("zg-editor-input", this.h)[0];
			this.Xq = z.L("zu-question-form-add", this.h);
			this.nn = z.L("zu-question-form-jump", this.h);
			this.Yj = z.J("zm-modal-dialog-warnmsg-wrapper");
			this.dt = z.J("js-title-length-err-msg");
			this.dA = z.L("zm-modal-dialog-warnmsg-wrapper", this.h);
			this.mE = z.J("zh-question-form-detail-err");
			this.jB = z.J("zh-question-form-tag-err");
			this.FM = z.L("zu-global-notify-close", this.Yj);
			this.$U = z.L("zu-global-notify-close", this.dA);
			this.EP = z.J("zm-modal-dialog-info-wrapper");
			this.tt = z.L("zm-modal-dialog-warnmsg",
				this.Yj);
			z.L("zm-modal-dialog-warnmsg", this.dA);
			this.uD = z.L("zg-addq-isanon", this.h);
			this.UU = z.L("js-toggle-editor-toolbar", this.h);
			this.nL = z.L("js-editor-add-pic", this.h);
			this.oL = z.L("js-editor-add-video", this.h);
			this.xU = z.L("js-add-question-splash", this.h);
			this.HQ = z.L("js-add-question-form", this.h);
			this.iD = z.J("js-before-ask");
			this.gN = z.J("zh-question-suggest-detail-container");
			this.ZU = z.J("zh-question-suggest-topic-container");
			this.ty();
			this.rz ? (us(this, !0),
				this.ry()) : (this.eG(),
				us(this, !1))
		}
		;
		z.e.show = z.Lm(function(a) {
			this.J = window.$.extend({
				Om: null ,
				ak: null
			}, a || {});
			this.G(!0)
		}, !0, "#ask");
		z.e.gm = function() {
			z.ns.o.gm.call(this);
			this.J = {}
		}
		;
		z.e.ty = function() {
			this.Ya("提问");
			z.Qj(this, 550);
			z.Ij(this, null );
			this.K = (0,
				window.$)(this.h);
			this.K.addClass("absolute-position");
			this.G(!0);
			this.ea()
		}
		;
		z.e.eG = z.Nj(function() {
			ws(this);
			this.dc();
			ps(this)
		});
		z.e.cq = {};
		z.e.cq.uI = '\x3c% forEach(questions, function(q, i) { q \x3d q.data; %\x3e\x3cdiv class\x3d"ac-row" data-url_token\x3d"\x3c%\x3dq.url_token%\x3e" data-answer_count\x3d"\x3c%\x3dq.answer_count%\x3e"\x3e\x3c% if (q.is_star) { %\x3e\x3ca class\x3d"zg-star" data-tip\x3d"s$b$优质问答" href\x3d"/question/\x3c%\x3dq.url_token%\x3e"\x3e\x3c/a\x3e\x3c% } %\x3e\x3ca class\x3d"zippy-indicator"\x3e\x3ci\x3e\x3c/i\x3e\x3c/a\x3e\x3ca style\x3d"color:#222" href\x3d"/question/\x3c%\x3dq.url_token%\x3e?q\x3d\x3c%\x3d token %\x3e"\x3e\x3c%\x3dq.title%\x3e\x3c/a\x3e \x3cspan class\x3d"zm-ac-gray"\x3e\x3c%\x3d parseInt(q.answer_count) \x3e 0 ? q.answer_count + " 个回答" : "还没有回答" %\x3e \x3c/span\x3e\x3c/div\x3e\x3c% }) %\x3e';
		z.e.cq.NL = '\x3c% forEach(answers, function(a, i) { %\x3e\x3cdiv class\x3d"zippy-row"\x3e\x3cdiv class\x3d"summary-item"\x3e\x3ca class\x3d"inline-block zm-item-vote-count" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e\x3c%\x3da.vote_count%\x3e\x3c/a\x3e\x3c% if (a.author.url_token) { %\x3e\x3ca class\x3d"inline-block" href\x3d"/people/\x3c%\x3da.author.url_token%\x3e"\x3e\x3cspan class\x3d"author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c/a\x3e\x3c% } else { %\x3e\x3cspan class\x3d"inline-block anon-author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c% } %\x3e\x3cspan class\x3d"inline-block summary ellipsis"\x3e\x3c%\x3da.summary_text%\x3e\x3c/span\x3e\x3ca class\x3d"inline-block" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e阅读全部 »\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c% }) %\x3e';
		z.e.ry = function() {
			function a() {
				us(b, !1);
				b.Dc.value = d.value
			}
			var b = this
				, c = (0,
				z.ts)(this.cq.uI)
				, d = this.iD
				, f = new sp;
			this.iL = new z.rp(d,{
				source: "/question/autocomplete",
				mk: d.offsetParent,
				rd: function() {},
				render: function(b, f, k) {
					b = (0,
						window.$)(b.m());
					b.html(c({
						forEach: z.x,
						questions: k,
						token: (0,
							window.encodeURIComponent)(this.Xb)
					}));
					0 < k.length && b.prepend('\x3cdiv class\x3d"ac-row ac-first"\x3e\x3cb\x3e你想问的是不是：\x3c/b\x3e\x3c/div\x3e').append((0,
						window.$)('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e不是，我要提一个新问题 »\x3c/a\x3e\x3c/div\x3e'));
					0 === k.length && d.value && (b.html('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e没有找到相关问题，马上提问 »\x3c/a\x3e\x3c/div\x3e').show(),
						k.push("fake row"));
					b.off("click").on("click", ".iwanttoask", a)
				},
				Cy: f
			});
			this.iL.en = !1
		}
		;
		z.e.resetForm = function() {
			this.Dc.value = "";
			this.Ja && this.Ja.Pu();
			this.Yj && z.Q(this.Yj, !1);
			this.Ja.reset()
		}
		;
		z.e.dc = function() {
			this.v().g(this.h, "click", this.hO);
			this.uQ && this.uQ.w(this.Dc);
			this.vI = new z.Zn(this.Dc);
			this.v().g(this.vI, "change", this.VH);
			this.v().g(this.FM, "click", function() {
				z.Q(this.Yj, !1);
				z.Q(this.EP, !0)
			});
			this.v().g(this.$U, "click", function() {
				z.Q(this.dA, !1)
			});
			this.v().g(this, "afterhide", function() {
				zs(this)
			});
			ys(this)
		}
		;
		z.e.hO = function(a) {
			if (a = z.Ln(this.h, a.target))
				switch (a = a.name,
					a) {
					case "expand":
						z.T.add(this.h, "zg-qform-expanded");
						break;
					default:
						this.ks(a)
				}
		}
		;
		z.e.ak = function() {
			var a = z.sf(this.xhr);
			if (!a)
				return z.U.message("网络异常");
			if (a.r)
				if (281 === a.errcode) {
					var b = new Ds;
					b.Be = a.msg;
					b.level = 3;
					As(this, b, !0)
				} else
					z.U.message(a.msg);
			else
				z.yk.set("__Q_ISNEWLYCREATED__", "yep"),
					qs.clear(),
					(0,
						window.$)(window).off("beforeunload.AddQuestionForm"),
					a = a.msg,
					b = a.match(/\/question\/(\d+)/)[1],
					this.J.ak ? this.J.ak({
						url: a,
						Za: b
					}) : window.location.href = a
		}
		;
		z.e.ks = function(a) {
			if ("cancel" === a)
				this.G(!1);
			else if ("addq" === a) {
				a = Es(this);
				var b = Bs(this);
				if (!(1 < b.level || 1 < a.level)) {
					var c = Fs(this)
						, d = new Ds;
					3E3 < Nn(c) ? (d.level = 3,
						d.Be = "请控制在 3000 字以下") : d.level = 0;
					c = 1 < d.level;
					this.mE.innerHTML = d.Be;
					z.Q(this.mE, c);
					xs(this, c, "detail");
					this.RH()
				}
				xs(this, 1 < b.level || 1 < a.level, "title");
				this.qE ? As(this, 1 < a.level ? a : b, !0) : this.xhr && this.xhr.Rb() || (this.xhr = new z.V(!0),
					this.v().Aa(this.xhr, "success", this.ak),
					this.xhr.ajax("/question/add", Gs(this).kd()),
					eq(this.Ja))
			}
		}
		;
		z.e.VH = function() {
			var a = Es(this)
				, b = Bs(this);
			"toolong" === a.name || "buffer" === a.name ? (this.dt.innerHTML = a.Be,
				z.Q(this.dt, !0)) : (this.dt.innerHTML = a.Be,
				z.Q(this.dt, !1));
			"multiquestionmark" === b.name || "duplicatedquestion" === b.name ? As(this, b, !0) : As(this, b, !1);
			xs(this, 1 < b.level, "title")
		}
		;
		z.e.RH = function() {
			var a = !1;
			1 > this.Ja.data.length ? (a = !0,
				this.jB.innerHTML = "至少添加一个话题") : 5 < this.Ja.data.length && (a = !0,
				this.jB.innerHTML = "最多添加五个话题");
			z.Q(this.jB, a);
			xs(this, a, "topic")
		}
		;
		z.e.yR = function() {
			this.Pb && ms(this.Pb)
		}
		;
		var Zs;
		Zs = {
			JK: ["BC", "AD"],
			IK: ["Before Christ", "Anno Domini"],
			MK: "JFMAMJJASOND".split(""),
			WK: "JFMAMJJASOND".split(""),
			KK: "January February March April May June July August September October November December".split(" "),
			VK: "January February March April May June July August September October November December".split(" "),
			RK: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
			YK: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
			gL: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
			$K: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
			TK: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
			ZK: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
			nW: "SMTWTFS".split(""),
			XK: "SMTWTFS".split(""),
			SK: ["Q1", "Q2", "Q3", "Q4"],
			NK: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
			FK: ["AM", "PM"],
			rC: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
			yC: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
			GK: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
			sC: 6,
			HW: [5, 6],
			tC: 5
		};
		var ht = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/
			, jt = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/
			, it = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
		Is.prototype.Zp = function(a) {
			var b = Math.min(this.Wd, this.Nd, this.Fd, this.nd, this.pd, this.td)
				, c = Math.max(this.Wd, this.Nd, this.Fd, this.nd, this.pd, this.td);
			if (0 > b && 0 < c)
				return null ;
			if (!a && 0 == b && 0 == c)
				return "PT0S";
			c = [];
			0 > b && c.push("-");
			c.push("P");
			(this.Wd || a) && c.push(Math.abs(this.Wd) + "Y");
			(this.Nd || a) && c.push(Math.abs(this.Nd) + "M");
			(this.Fd || a) && c.push(Math.abs(this.Fd) + "D");
			if (this.nd || this.pd || this.td || a)
				c.push("T"),
				(this.nd || a) && c.push(Math.abs(this.nd) + "H"),
				(this.pd || a) && c.push(Math.abs(this.pd) + "M"),
				(this.td || a) && c.push(Math.abs(this.td) + "S");
			return c.join("")
		}
		;
		Is.prototype.equals = function(a) {
			return a.Wd == this.Wd && a.Nd == this.Nd && a.Fd == this.Fd && a.nd == this.nd && a.pd == this.pd && a.td == this.td
		}
		;
		Is.prototype.clone = function() {
			return new Is(this.Wd,this.Nd,this.Fd,this.nd,this.pd,this.td)
		}
		;
		var Js = "y"
			, Ks = "m"
			, Ls = "d"
			, Ms = "h"
			, Ns = "n"
			, Os = "s";
		Is.prototype.SU = function(a) {
			return new Is(this.Wd * a,this.Nd * a,this.Fd * a,this.nd * a,this.pd * a,this.td * a)
		}
		;
		Is.prototype.add = function(a) {
			this.Wd += a.Wd;
			this.Nd += a.Nd;
			this.Fd += a.Fd;
			this.nd += a.nd;
			this.pd += a.pd;
			this.td += a.td
		}
		;
		z.e = Ps.prototype;
		z.e.Xr = Zs.sC;
		z.e.Yr = Zs.tC;
		z.e.clone = function() {
			var a = new Ps(this.ga);
			a.Xr = this.Xr;
			a.Yr = this.Yr;
			return a
		}
		;
		z.e.getFullYear = function() {
			return this.ga.getFullYear()
		}
		;
		z.e.getYear = function() {
			return this.getFullYear()
		}
		;
		z.e.getMonth = function() {
			return this.ga.getMonth()
		}
		;
		z.e.getDate = function() {
			return this.ga.getDate()
		}
		;
		z.e.getTime = function() {
			return this.ga.getTime()
		}
		;
		z.e.getDay = function() {
			return this.ga.getDay()
		}
		;
		z.e.getUTCFullYear = function() {
			return this.ga.getUTCFullYear()
		}
		;
		z.e.getUTCMonth = function() {
			return this.ga.getUTCMonth()
		}
		;
		z.e.getUTCDate = function() {
			return this.ga.getUTCDate()
		}
		;
		z.e.getUTCDay = function() {
			return this.ga.getDay()
		}
		;
		z.e.getUTCHours = function() {
			return this.ga.getUTCHours()
		}
		;
		z.e.getUTCMinutes = function() {
			return this.ga.getUTCMinutes()
		}
		;
		z.e.getTimezoneOffset = function() {
			return this.ga.getTimezoneOffset()
		}
		;
		z.e.set = function(a) {
			this.ga = new Date(a.getFullYear(),a.getMonth(),a.getDate())
		}
		;
		z.e.setFullYear = function(a) {
			this.ga.setFullYear(a)
		}
		;
		z.e.setYear = function(a) {
			this.setFullYear(a)
		}
		;
		z.e.setMonth = function(a) {
			this.ga.setMonth(a)
		}
		;
		z.e.setDate = function(a) {
			this.ga.setDate(a)
		}
		;
		z.e.setTime = function(a) {
			this.ga.setTime(a)
		}
		;
		z.e.setUTCFullYear = function(a) {
			this.ga.setUTCFullYear(a)
		}
		;
		z.e.setUTCMonth = function(a) {
			this.ga.setUTCMonth(a)
		}
		;
		z.e.setUTCDate = function(a) {
			this.ga.setUTCDate(a)
		}
		;
		z.e.add = function(a) {
			if (a.Wd || a.Nd) {
				var b = this.getMonth() + a.Nd + 12 * a.Wd
					, c = this.getYear() + Math.floor(b / 12)
					, b = b % 12;
				0 > b && (b += 12);
				var d;
				a: {
					switch (b) {
						case 1:
							d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
							break a;
						case 5:
						case 8:
						case 10:
						case 3:
							d = 30;
							break a
					}
					d = 31
				}
				d = Math.min(d, this.getDate());
				this.setDate(1);
				this.setFullYear(c);
				this.setMonth(b);
				this.setDate(d)
			}
			a.Fd && (a = new Date((new Date(this.getYear(),this.getMonth(),this.getDate(),12)).getTime() + 864E5 * a.Fd),
				this.setDate(1),
				this.setFullYear(a.getFullYear()),
				this.setMonth(a.getMonth()),
				this.setDate(a.getDate()),
				Rs(this, a.getDate()))
		}
		;
		z.e.Zp = function(a, b) {
			return [this.getFullYear(), mb(this.getMonth() + 1, 2), mb(this.getDate(), 2)].join(a ? "-" : "") + (b ? Ss(this) : "")
		}
		;
		z.e.equals = function(a) {
			return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
		}
		;
		z.e.toString = function() {
			return this.Zp()
		}
		;
		z.e.valueOf = function() {
			return this.ga.valueOf()
		}
		;
		z.v(Ts, Ps);
		z.e = Ts.prototype;
		z.e.getHours = function() {
			return this.ga.getHours()
		}
		;
		z.e.getMinutes = function() {
			return this.ga.getMinutes()
		}
		;
		z.e.getSeconds = function() {
			return this.ga.getSeconds()
		}
		;
		z.e.getMilliseconds = function() {
			return this.ga.getMilliseconds()
		}
		;
		z.e.getUTCDay = function() {
			return this.ga.getUTCDay()
		}
		;
		z.e.getUTCHours = function() {
			return this.ga.getUTCHours()
		}
		;
		z.e.getUTCMinutes = function() {
			return this.ga.getUTCMinutes()
		}
		;
		z.e.getUTCSeconds = function() {
			return this.ga.getUTCSeconds()
		}
		;
		z.e.getUTCMilliseconds = function() {
			return this.ga.getUTCMilliseconds()
		}
		;
		z.e.setHours = function(a) {
			this.ga.setHours(a)
		}
		;
		z.e.setMinutes = function(a) {
			this.ga.setMinutes(a)
		}
		;
		z.e.setSeconds = function(a) {
			this.ga.setSeconds(a)
		}
		;
		z.e.setMilliseconds = function(a) {
			this.ga.setMilliseconds(a)
		}
		;
		z.e.setUTCHours = function(a) {
			this.ga.setUTCHours(a)
		}
		;
		z.e.setUTCMinutes = function(a) {
			this.ga.setUTCMinutes(a)
		}
		;
		z.e.setUTCSeconds = function(a) {
			this.ga.setUTCSeconds(a)
		}
		;
		z.e.setUTCMilliseconds = function(a) {
			this.ga.setUTCMilliseconds(a)
		}
		;
		z.e.add = function(a) {
			Ps.prototype.add.call(this, a);
			a.nd && this.setUTCHours(this.ga.getUTCHours() + a.nd);
			a.pd && this.setUTCMinutes(this.ga.getUTCMinutes() + a.pd);
			a.td && this.setUTCSeconds(this.ga.getUTCSeconds() + a.td)
		}
		;
		z.e.Zp = function(a, b) {
			var c = Ps.prototype.Zp.call(this, a);
			return a ? c + " " + mb(this.getHours(), 2) + ":" + mb(this.getMinutes(), 2) + ":" + mb(this.getSeconds(), 2) + (b ? Ss(this) : "") : c + "T" + mb(this.getHours(), 2) + mb(this.getMinutes(), 2) + mb(this.getSeconds(), 2) + (b ? Ss(this) : "")
		}
		;
		z.e.equals = function(a) {
			return this.getTime() == a.getTime()
		}
		;
		z.e.toString = function() {
			return this.Zp()
		}
		;
		z.e.clone = function() {
			var a = new Ts(this.ga);
			a.Xr = this.Xr;
			a.Yr = this.Yr;
			return a
		}
		;
		var ct = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/];
		Ys.prototype.format = function(a, b) {
			if (!a)
				throw Error("The date to format must be non-null.");
			var c = b ? 6E4 * (a.getTimezoneOffset() - (b.wu - Xs(b, a))) : 0
				, d = c ? new Date(a.getTime() + c) : a
				, f = d;
			b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())),
				f = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
			for (var c = [], g = 0; g < this.Jt.length; ++g) {
				var h = this.Jt[g].text;
				1 == this.Jt[g].type ? c.push(ft(this, h, a, d, f, b)) : c.push(h)
			}
			return c.join("")
		}
		;
		var bt = !1;
		z.Ha("ZH.date.parse", gt);
		z.Ha("ZH.date.fromNow", z.kt);
		z.Ha("ZH.date.format", lt);
		var mt = {};
		window._gaq = window._gaq || [];
		var SF = new xk("ga");
		SF.g(function(a) {
			z.x(a, function(a) {
				mt.track.apply(mt, a)
			})
		});
		mt.track = function(a, b, c, d, f) {
			c && (c = "" + c);
			d && (d = (0,
				window.parseInt)(d, 10));
			window._gaq.push(["_trackEvent", a, b, c, d, !!f])
		}
		;
		mt.aV = function() {
			window._gaq.push(["_trackPageview"])
		}
		;
		mt.rJ = function(a, b, c, d, f) {
			zk(SF, [a, b, c, d, f])
		}
		;
		mt.cU = function() {
			SF.restore()
		}
		;
		mt.jU = function() {
			var a = window._gaq;
			a.push(["_setAccount", "UA-20961733-1"]);
			a.push(["_setDomainName", ".zhihu.com"]);
			a.push(["_addOrganic", "baidu", "word"]);
			a.push(["_addOrganic", "baidu", "wd"]);
			a.push(["_addOrganic", "sogou", "query"]);
			a.push(["_addOrganic", "so.360.cn", "q"]);
			a.push(["_addOrganic", "so.com", "q"]);
			a.push(["_addOrganic", "soso", "w"]);
			a.push(["_addOrganic", "google", "q"]);
			a.push(["_addOrganic", "sm", "q"]);
			a.push(["_addIgnoredOrganic", "知乎"]);
			a.push(["_addIgnoredOrganic", "知乎网"]);
			a.push(["_addIgnoredOrganic",
				"zhihu"]);
			a.push(["_addIgnoredOrganic", "zhihu.com"]);
			a.push(["_addIgnoredOrganic", "www.zhihu.com"]);
			var b = z.Gk.ga_vars
				, c = b.user_attr.join("");
			a.push(["_setVar", c]);
			a.push(["_setCustomVar", 1, "user_attr", c, 3]);
			var d = c = 9E12;
			b.user_created && (d = b.user_created,
				a.push(["_setCustomVar", 2, "registration_date", lt(d, "yyyyMMdd"), 1]));
			var f = window.document.cookie.match(/q_c1=(\w+)\|(\w+)\|(\d+)/);
			f && (c = +f[3]);
			a.push(["_setCustomVar", 3, "entry_date", lt(Math.min(c, d, b.now), "yyyyMMdd"), 1]);
			a.push(["_setCustomVar",
				4, "abtest_group", b.abtest_mask, 3])
		}
		;
		mt.Cq = function() {
			var a = window.document.createElement("script");
			a.async = !0;
			a.src = ("https:" === window.document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
			var b = window.document.getElementsByTagName("script")[0];
			b.parentNode.insertBefore(a, b)
		}
		;
		mt.init = function() {
			mt.jU();
			mt.cU();
			mt.aV();
			mt.Cq()
		}
		;
		z.Y.rJ = function(a, b, c, d, f) {
			mt.rJ(a, b, c, d, f);
			z.Dk(a, b, c, d, f)
		}
		;
		z.Y.init = function() {
			z.Y.jn();
			(0,
				window.setTimeout)(function() {
				mt.init();
				window.$.support.cors && (YE(),
					Bk.restore(),
					Ek())
			})
		}
		;
		z.Y.jn = function() {
			function a(a) {
				return {
						member: "people",
						favlist: "collection"
					}[a] || a
			}
			(0,
				window.$)(window.document).on("click", "a.video-box", function() {
				z.Y("video", "click_videobox_open")
			});
			(0,
				window.$)("#zh-top-link-logo").click(function() {
				z.Y("navigation", "visit_home", "top_logo")
			});
			(0,
				window.$)("#zh-top-link-home").click(function() {
				z.Y("navigation", "visit_home", "top_nav_home")
			});
			(0,
				window.$)("#top-nav-dd-topic").click(function() {
				z.Y("navigation", "visit_topics_activities", "top_nav_topic")
			});
			(0,
				window.$)("#ga_sidebar_topic_all").click(function() {
				z.Y("navigation",
					"visit_topics_activities", "sidebar_topic_all")
			});
			var b = (0,
				window.$)("#zh-trendings");
			b.on("click", 'li a[href^\x3d"/topic/"]', function(a) {
				a = (0,
						window.$)(a.target).closest("li").index() + 1;
				z.Y("navigation", "visit_topic", "sidebar_intresting_people_" + a + "_topic")
			});
			b.on("click", 'li a[href^\x3d"/people"]', function(a) {
				a = (0,
						window.$)(a.target).closest("li").index() + 1;
				z.Y("navigation", "visit_people_profile", "sidebar_interesting_people_" + a)
			});
			(0,
				window.$)("#zh-single-question-page .zm-tag-editor-labels a.zm-item-tag").click(function() {
				z.Y("question_answer",
					"visit_topic", "question_topic")
			});
			z.F(z.W, "ga_serach_select", function(a) {
				"topic" === a.data.type && z.Y("search", "visit_topic", "top_search_list_" + (a.data.index + 1))
			});
			var c = (0,
				window.$)(".zm-topic-list-container").on("click", '.subtopic a[href^\x3d"/topic/"]', function() {
				z.Y("topic", "visit_topic", "topic_activity_children_topic")
			});
			(0,
				window.$)(".zm-side-section-inner.child-topic").on("click", 'a.zm-item-tag[href^\x3d"/topic/"]', function() {
				z.Y("topic", "visit_topic", "topic_sidebar_children_topic")
			});
			(0,
				window.$)(".zm-topic-cat-hot").on("click",
				'a[href^\x3d"/topic/"]', function() {
					z.Y("topic", "visit_topic", "topic_square_sidebar")
				});
			(0,
				window.$)(".zm-topic-cat-sub").on("click", 'a[href^\x3d"/topic/"]', function() {
				z.Y("topic", "visit_topic", "topic_square_list_item")
			});
			(0,
				window.$)('a.zm-side-nav-link[href\x3d"/topics"]').click(function() {
				z.Y("navigation", "visit_topic_square", "sidebar_topic_square")
			});
			(0,
				window.$)("#zh-tooltip").on("click", ".zh-profile-card.member .avatar-link", function() {
				z.Y("navigation", "visit_people_profile", "hovercard_people_name")
			});
			var d = (0,
				window.$)("#zh-top-nav-live-new").on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-list-content-medium a[href^\x3d"/people"]', function() {
				z.Y("notification", "visit_people_profile", "top_nav_noti_follower_people_name")
			}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-item-link-avatar', function() {
				z.Y("notification", "visit_people_profile", "top_nav_noti_follower_people_avatar")
			});
			d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/people"]',
				function() {
					z.Y("notification", "visit_people_profile", "top_nav_noti_vote_thank_people_name")
				});
			d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/people"]', function() {
				z.Y("notification", "visit_people_profile", "top_nav_noti_message_invitation_people_name")
			}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/people"]', function() {
				z.Y("notification", "visit_people_profile", "top_nav_noti_message_qcomment_people_name")
			}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/people"]',
				function() {
					z.Y("notification", "visit_people_profile", "top_nav_noti_message_acomment_people_name")
				}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/people"]', function() {
				z.Y("notification", "visit_people_profile", "top_nav_noti_message_new_answer_people_name")
			}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/people"]', function() {
				z.Y("notification", "visit_people_profile", "top_nav_noti_message_edit_people_name")
			});
			var f = (0,
				window.$)("#js-home-feed-list");
			f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .source a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_answer_vote_source_people_name")
			});
			f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] \x3e.avatar a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_answer_vote_source_people_avatar")
			});
			f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .zm-item-answer-author-info a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_answer_vote_author_name")
			});
			f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] .source a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_answer_answer_source_people_name")
			});
			f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] \x3e.avatar a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_answer_answer_source_people_avatar")
			});
			f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] .source a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_question_follow_source_people_name")
			});
			f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] \x3e.avatar a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_question_follow_source_people_avatar")
			});
			f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] .source a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_question_ask_source_people_name")
			});
			f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] \x3e.avatar a[href^\x3d"/people"]', function() {
				z.Y("feed", "visit_people_profile", "feed_question_ask_source_people_avatar")
			});
			var g = (0,
				window.$)("#zh-question-answer-wrap").on("click", '.zm-item-answer-author-info \x3ea[href^\x3d"/people"]', function() {
				z.Y("question_answer", "visit_people_profile", "question_answer_author_name")
			}).on("click", ".zm-item-answer-author-info img.zm-list-avatar", function() {
				z.Y("question_answer", "visit_people_profile", "question_answer_author_avatar")
			});
			g.on("click", ".voters a", function() {
				var a = (0,
						window.$)(this).parents(".voters").find("a").index(this) + 1;
				z.Y("question_answer", "visit_people_profile",
					"question_answer_voters_" + a)
			});
			g.on("click", '.zm-comment-hd a[href^\x3d"/people"]', function() {
				z.Y("question_answer", "visit_people_profile", "question_answer_comment_author_name")
			}).on("click", ".zm-comment-list img.zm-item-img-avatar", function() {
				z.Y("question_answer", "visit_people_profile", "question_answer_comment_author_avatar")
			});
			(0,
				window.$)(".zh-question-followers-sidebar", 'a[href^\x3d"/people"]', function() {
				z.Y("question_answer", "visit_people_profile", "question_sidebar_followers_avatar")
			});
			z.F(z.W,
				"ga_serach_select", function(a) {
					"people" === a.data.type && z.Y("search", "visit_people_profile", "top_search_list_" + (a.data.index + 1))
				});
			(0,
				window.$)("#zh-topic-top-answerer").on("click", '.zm-topic-side-person-item-content a[href^\x3d"/people/"]', function() {
				z.Y("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_name")
			}).on("click", "img.zm-list-avatar", function() {
				z.Y("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_avatar")
			});
			d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/question"]',
				function() {
					z.Y("notification", "visit_question", "top_nav_noti_vote_thank_question")
				});
			d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/question"]', function() {
				z.Y("notification", "visit_question", "top_nav_noti_message_invitation_question")
			}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/question"]', function() {
				z.Y("notification", "visit_question", "top_nav_noti_message_qcomment_question")
			}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/question"]',
				function() {
					z.Y("notification", "visit_question", "top_nav_noti_message_acomment_question")
				}).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/question"]', function() {
				z.Y("notification", "visit_question", "top_nav_noti_message_new_answser_question")
			});
			f.on("click", 'div[data-feedtype\x3d"ROUNDTABLE_ADD_RELATED"] h2 a[href^\x3d"/question"]', function() {
				var a = "q" === (0,
						window.$)(this).closest("div[data-feedtype]").data("type");
				z.Y("feed", "visit_question", a ? "roundtable_question_add" :
					"roundtable_answer_add")
			}).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] h2 a[href^\x3d"/question"]', function() {
				z.Y("feed", "visit_question", "feed_answer_vote_question")
			}).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] h2 a[href^\x3d"/question"]', function() {
				z.Y("feed", "visit_question", "feed_answer_answer_question")
			}).on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] h2 a[href^\x3d"/question"]', function() {
				z.Y("feed", "visit_question", "feed_question_follow_question")
			}).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] a.meta-item[href^\x3d"/question"]',
				function() {
					var a = (0,
						window.parseInt)((0,
						window.$)(this).text(), 10);
					a ? z.Y("feed", "visit_question", "feed_question_follow_has_answers", a) : z.Y("feed", "visit_question", "feed_question_follow_has_no_answer")
				}).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] h2 a[href^\x3d"/question"]', function() {
				z.Y("feed", "visit_question", "feed_question_ask_question")
			});
			z.F(z.W, "ga_serach_select", function(a) {
				"question" === a.data.type && z.Y("search", "visit_question", "top_search_list_" + (a.data.index + 1))
			});
			(0,
				window.$)("#zh-question-related-questions").on("click",
				"a", function(a) {
					a = (0,
							window.$)(a.delegateTarget).find("a").index(this) + 1;
					z.Y("question_answer", "visit_question", "question_answer_sidebar_related_questions_" + a)
				});
			(0,
				window.$)('#zh-question-followers-sidebar a[href^\x3d"/question"][href$\x3d"/followers"]').click(function() {
				z.Y("question_answer", "visit_question_followers", "question_followers_count")
			});
			d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/question"]', function() {
				z.Y("notification", "visit_question_log", "top_nav_noti_message_edit_question")
			});
			(0,
				window.$)('.zu-main-sidebar a[href^\x3d"/question"][href$\x3d"/log"]').click(function() {
				z.Y("question_answer", "visit_question_log", "question_log")
			});
			(0,
				window.$)('div[data-feedtype\x3d"ANSWER_CREATE"] .answer-date-link').click(function() {
				z.Y("feed", "visit_answer", "feed_answer_answer_date")
			});
			(0,
				window.$)('div[data-feedtype\x3d"ANSWER_VOTE_UP"] .answer-date-link').click(function() {
				z.Y("feed", "visit_answer", "feed_answer_vote_date")
			});
			(0,
				window.$)("zh-single-question-page .answer-date-link").click(function() {
				z.Y("question_answer",
					"visit_answer", "question_answer_date")
			});
			(0,
				window.$)('a.zm-side-nav-link[href\x3d"/draft"]').click(function() {
				var a = (0,
					window.parseInt)((0,
						window.$)(this).find(".zg-num").text() || 0, 10);
				z.Y("navigation", "visit_draft", "sidebar_my_draft", a)
			});
			(0,
				window.$)('a.zm-side-nav-link[href\x3d"/collections"]').click(function() {
				var a = (0,
					window.parseInt)((0,
						window.$)(this).find(".zg-num").text() || 0, 10);
				z.Y("navigation", "visit_collections", "sidebar_my_collections", a)
			});
			(0,
				window.$)('a.zm-side-nav-link[href\x3d"/question/invited"]').click(function() {
				var a =
					(0,
						window.parseInt)((0,
							window.$)(this).find(".zg-num").text() || 0, 10);
				z.Y("navigation", "visit_question_invited", "sidebar_question_invited", a)
			});
			(0,
				window.$)('a[href\x3d"http://creativecommons.org"]').click(function() {
				z.Y("navigation", "visit_cc_license")
			});
			z.F(z.W, "ga_click_back_to_top", function() {
				z.Y("navigation", "click_back_to_top")
			});
			z.F(z.W, "ga_click_collapse_answer", function() {
				z.Y("navigation", "click_collapse_answer")
			});
			z.F(z.W, "ga_click_follow", function(a) {
				if ("people" === a.data.type && a.data.Lj) {
					var c =
						(0,
							window.$)(a.target);
					0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) + 1,
						z.Y("notification", "click_follow_people", "top_nav_noti_follower_follow", a)) : 0 < c.parents("#zh-tooltip").length ? z.Y("navigation", "click_follow_people", "hovercard_follow") : 0 < c.parents("#zh-trendings").length ? (a = b.find("a.follow").index(a.target) + 1,
						z.Y("navigation", "click_follow_people", "sidebar_intresting_people_" + a + "_follow")) : 0 < c.parents("#zh-topic-top-answerer").length ? z.Y("topic", "click_follow_people",
						"topic_sidebar_top_answerer_follow") : z.Y("navigation", "click_follow_people", "other_follow")
				}
			});
			z.F(z.W, "ga_click_follow", function(a) {
				if ("people" === a.data.type && !a.data.Lj) {
					var c = (0,
						window.$)(a.target);
					0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) + 1,
						z.Y("notification", "click_unfollow_people", "top_nav_noti_follower_unfollow", a)) : 0 < c.parents("#zh-tooltip").length ? z.Y("navigation", "click_unfollow_people", "hovercard_unfollow") : 0 < c.parents("#zh-trendings").length ?
						(a = b.find("a.follow").index(a.target) + 1,
							z.Y("navigation", "click_unfollow_people", "sidebar_intresting_people_" + a + "_unfollow")) : 0 < c.parents("#zh-topic-top-answerer").length && z.Y("topic", "click_unfollow_people", "topic_sidebar_top_answerer_unfollow")
				}
			});
			z.F(z.W, "ga_click_follow", function(a) {
				"question" === a.data.type && a.data.Lj && (a = (0,
					window.$)(a.target),
					0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.Y("feed", "click_follow_question", "feed_answer_vote_follow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ?
						z.Y("feed", "click_follow_question", "feed_answer_answer_follow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? z.Y("feed", "click_follow_question", "feed_question_follow_follow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.Y("feed", "click_follow_question", "feed_question_ask_follow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.Y("question_answer", "click_follow_question", "question_follow_question") : 0 < a.parents(".zm-topic-list-container").length &&
					z.Y("topic", "click_follow_question", "topic_activity_follow_question"))
			});
			z.F(z.W, "ga_click_follow", function(a) {
				"question" !== a.data.type || a.data.Lj || (a = (0,
					window.$)(a.target),
					0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.Y("feed", "click_unfollow_question", "feed_answer_vote_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? z.Y("feed", "click_unfollow_question", "feed_answer_answer_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_unFOLLOW"]').length ?
						z.Y("feed", "click_unfollow_question", "feed_question_follow_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.Y("feed", "click_unfollow_question", "feed_question_ask_unfollow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.Y("question_answer", "click_unfollow_question", "question_unfollow_question") : 0 < a.parents(".zm-topic-list-container").length && z.Y("topic", "click_unfollow_question", "topic_activity_unfollow_question"))
			});
			z.F(z.W, "ga_click_follow", function(a) {
				"topic" ===
				a.data.type && a.data.Lj && (a = (0,
					window.$)(a.target),
					0 < a.parents(".zm-search-result-topic-wrap").length ? z.Y("search", "click_follow_topic", "search_result_card_topic_follow") : a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.Y("topstory", "click_follow_topic", "topstory_answer_promote"))
			});
			z.F(z.W, "ga_click_follow", function(a) {
				"topic" !== a.data.type || a.data.Lj || (a = (0,
					window.$)(a.target),
					0 < a.parents(".zm-search-result-topic-wrap").length ? z.Y("search", "click_unfollow_topic", "search_result_card_topic_unfollow") :
					a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.Y("topstory", "click_unfollow_topic", "topstory_answer_promote"))
			});
			z.F(z.W, "ga_click_follow", function(a) {
				"favlist" === a.data.type && (a.data.Lj ? z.Y("collection", "click_follow_collection", "collection_follow") : z.Y("collection", "click_unfollow_collection", "collection_follow"))
			});
			z.F(z.W, "ga_click_top_nav_noti", function(a) {
				0 < a.data.RJ ? z.Y("notification", "click_top_nav_noti", "top_nav_noti_alert", a.data.RJ) : z.Y("notification", "click_top_nav_noti",
					"top_nav_noti_no_alert")
			});
			z.F(z.W, "ga_click_top_nav_noti_tab", function(a) {
				z.Y("notification", "click_top_nav_noti_tab", ["top_nav_noti_tab_message", "top_nav_noti_tab_follower", "top_nav_noti_tab_vote"][a.data.tab])
			});
			z.F(z.W, "ga_click_enlarge_image", function(a) {
				a = (0,
					window.$)(a.target).parents("div[data-feedtype]").attr("data-feedtype");
				"ANSWER_CREATE" === a ? z.Y("navigation", "click_enlarge_image", "feed_answer_answer_image") : "ANSWER_VOTE_UP" === a && z.Y("navigation", "click_enlarge_image", "feed_answer_vote_image")
			});
			z.F(z.W, "ga_click_topic_more", function(a) {
				var b = "activity";
				-1 < window.location.href.indexOf("questions") && (b = "questions");
				a.data && a.data.Qs ? z.Y("feed", "click_topic_more", "topic_" + b + "_more_button") : z.Y("feed", "click_topic_more", "topic_" + b + "_more_auto_load")
			});
			f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.inline-block[name\x3d"toggleExpanded"]', function() {
				z.Y("feed", "click_expand", "feed_answer_vote_expand")
			}).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.zm-item-vote-count[name\x3d"toggleExpanded"]',
				function() {
					z.Y("feed", "click_expand", "feed_answer_vote_vote_count")
				}).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.inline-block[name\x3d"toggleExpanded"]', function() {
				z.Y("feed", "click_expand", "feed_answer_answer_expand")
			}).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.zm-item-vote-count[name\x3d"toggleExpanded"]', function() {
				z.Y("feed", "click_expand", "feed_answer_answer_vote_count")
			});
			g = (0,
				window.$)("zh-single-question-page").on("click", '#zh-question-detail a.inline-block[name\x3d"expand"]',
				function() {
					z.Y("question_answer", "click_expand", "question_supplement_expand")
				});
			g.on("click", '.zm-item-answer a[name\x3d"more"]', function() {
				z.Y("question_answer", "click_expand", "question_answer_voters_more")
			});
			g.on("click", "#zh-question-collapsed-switcher", function() {
				z.Y("question_answer", "click_expand", "question_answer_folded_expand")
			});
			c.on("click", 'a.inline-block[name\x3d"expand"]', function() {
				z.Y("topic", "click_expand", "topic_activity_expand")
			}).on("click", 'a.zm-item-vote-count[name\x3d"expand"]',
				function() {
					z.Y("topic", "click_expand", "topic_activity_vote_count")
				});
			z.F(z.W, "ga_click_sorter_item", function(a) {
				(a = {
					added_time: "time",
					vote: "vote"
				}[a.data.key]) && z.Y("question_answer", "click_sort_answer", "question_answer_sorting_" + a)
			});
			z.F(z.W, "ga_click_vote_up", function(a) {
				a = (0,
					window.$)(a.target.m());
				if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length)
					a = "feed_answer_vote_up";
				else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length)
					a = "feed_answer_answer_up";
				else if (0 < a.parents("#zh-single-question-page").length)
					a =
						"question_answer_vote_up";
				else
					return;
				z.Y("vote", "click_vote_up_answer", a)
			});
			z.F(z.W, "ga_click_vote_down", function(a) {
				a = (0,
					window.$)(a.target.m());
				if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length)
					a = "feed_answer_vote_down";
				else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length)
					a = "feed_answer_answer_down";
				else if (0 < a.parents("#zh-single-question-page").length)
					a = "question_answer_vote_down";
				else
					return;
				z.Y("vote", "click_vote_down_answer", a)
			});
			z.F(z.W, "ga_click_thank_answer",
				function(a) {
					a = (0,
						window.$)(a.target);
					if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length)
						a = "feed_answer_vote_thank";
					else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length)
						a = "feed_answer_answer_thank";
					else if (0 < a.parents("#zh-question-answer-wrap").length)
						a = "question_answer_thank";
					else if (0 < a.parents(".zm-topic-list-container").length)
						a = "topic_activity_thank";
					else
						return;
					z.Y("vote", "click_thank_answer", a)
				});
			z.F(z.W, "ga_click_report_box", function(b) {
				z.Y("report", "click_report_" +
					a(b.data.type) + "_box")
			});
			z.F(z.W, "ga_click_report", function(b) {
				z.Y("report", "click_report_" + a(b.data.type))
			});
			z.F(z.W, "ga_click_collect_answer_box", function(a) {
				a = (0,
					window.$)(a.target);
				if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length)
					a = "feed_answer_vote_collect";
				else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length)
					a = "feed_answer_answer_collect";
				else if (0 < a.parents("#zh-single-question-page").length)
					a = "question_answer_collect";
				else if (0 < a.parents(".zm-topic-list-container").length)
					a =
						"topic_activity_collect";
				else
					return;
				z.Y("collection", "click_collect_answer_box", a)
			});
			z.F(z.W, "ga_click_collect_answer", function(a) {
				z.Y("collection", "click_collect_answer", "collection_count", a.data.count)
			});
			z.F(z.W, "ga_click_add_collection", function() {
				z.Y("collection", "click_add_collection", "collect_answer_window_add_collection")
			});
			z.F(z.W, "ga_click_answer_not_helpful", function(a) {
				a = (0,
					window.$)(a.target);
				if (0 < a.closest('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length)
					a = "feed_answer_vote_not_helpful";
				else if (0 < a.closest('div[data-feedtype\x3d"ANSWER_CREATE"]').length)
					a = "feed_answer_answer_not_helpful";
				else if (0 < a.closest("#zh-question-answer-wrap").length)
					a = "question_answer_not_helpful";
				else if (0 < a.closest(".zm-topic-list-container").length)
					a = "topic_activity_not_helpful";
				else
					return;
				z.Y("vote", "click_answer_not_helpful", a)
			});
			f.on("click");
			z.F(z.W, "ga_click_question_ignore", function(a) {
				a = (0,
					window.$)(a.target);
				if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length)
					a = "feed_answer_vote_ignore_question";
				else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length)
					a = "feed_answer_answer_ignore_question";
				else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length)
					a = "feed_question_follow_ignore_question";
				else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length)
					a = "feed_question_ask_ignore_question";
				else
					return;
				z.Y("feed", "click_question_ignore", a)
			});
			z.F(z.W, "ga_question_topic_edit_start", function() {
				z.Y("edit", "click_edit_question_topic", "question_topic_edit_start")
			});
			z.F(z.W,
				"ga_question_topic_edit_finish_changed", function() {
					z.Y("edit", "click_edit_question_topic", "question_topic_edit_finish_changed")
				});
			z.F(z.W, "ga_question_title_edit_start", function() {
				z.Y("edit", "click_edit_question_titile", "question_title_edit_start")
			});
			z.F(z.W, "ga_question_title_edit_cancel", function() {
				z.Y("edit", "click_edit_question_titile", "question_title_edit_cancel")
			});
			z.F(z.W, "ga_question_title_edit_save_changed", function() {
				z.Y("edit", "click_edit_question_titile", "question_title_edit_save_changed")
			});
			z.F(z.W, "ga_question_title_edit_save_unchanged", function() {
				z.Y("edit", "click_edit_question_titile", "question_title_edit_save_unchanged")
			});
			z.F(z.W, "ga_question_supplement_edit_start", function() {
				z.Y("edit", "click_edit_question_supplement", "question_supplement_edit_start")
			});
			z.F(z.W, "ga_question_supplement_edit_cancel", function() {
				z.Y("edit", "click_edit_question_supplement", "question_supplement_edit_cancel")
			});
			z.F(z.W, "ga_question_supplement_edit_save_changed", function() {
				z.Y("edit", "click_edit_question_supplement",
					"question_supplement_edit_save_changed")
			});
			z.F(z.W, "ga_question_supplement_edit_save_unchanged", function() {
				z.Y("edit", "click_edit_question_supplement", "question_supplement_edit_save_unchanged")
			});
			(0,
				window.$)("#zu-top-add-question").click(function() {
				z.Y("question_answer", "click_add_question", "top_nav_question_add_start")
			});
			(0,
				window.$)(".zm-topic-ask-in-topic").click(function() {
				z.Y("question_answer", "click_add_question", "topic_question_add_start")
			});
			z.F(z.W, "ga_click_add_question", function(a) {
				z.Y("question_answer",
					"click_add_question", "question_add_submit_with_topics", a.data.total);
				z.Y("question_answer", "click_add_question", "question_add_submit_with_suggested_topics", a.data.Bu);
				z.Y("question_answer", "click_add_question", "question_add_submit_with_suggested_topics_percent", Math.round(a.data.Bu / a.data.total * 100))
			});
			(0,
				window.$)("#zh-question-answer-form-wrap .editable").focus(function() {
				z.Y("question_answer", "click_add_answer", "question_answer_add_start")
			});
			(0,
				window.$)("#zh-question-answer-form-wrap .submit-button").click(function() {
				z.Y("question_answer",
					"click_add_answer", "question_answer_add_publish")
			});
			z.F(z.W, "ga_hover_hovercard", function(a) {
				a = (0,
					window.$)(a.target);
				var c, d, f;
				a.is('[data-tip^\x3d"p$"]') ? (d = "hover_people_hovercard",
					0 < a.parents("div[data-feedtype]").length ? (c = "feed",
						0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? 0 < a.parents(".zm-item-answer-author-info").length ? f = "feed_answer_vote_author_name" : 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_vote_source_people_avatar" : "feed_answer_vote_author_name") :
							0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_answer_source_people_avatar" : "feed_answer_answer_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_question_follow_source_people_avatar" : "feed_question_follow_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length && 0 < a.parents("div.source").length &&
							(f = 0 < a.find("img").length ? "feed_question_ask_source_people_avatar" : "feed_question_ask_source_people_name")) : 0 < a.parents("#zh-trendings").length ? (c = "navigation",
						window.$.contains(b.find("li:nth-child(1)").get(0), a.get(0)) ? f = "sidebar_intresting_people_1" : window.$.contains(b.find("li:nth-child(2)").get(0), a.get(0)) ? f = "sidebar_intresting_people_2" : window.$.contains(b.find("li:nth-child(3)").get(0), a.get(0)) && (f = "sidebar_intresting_people_3")) : 0 < a.parents("#zh-single-question-page").length ? (c = "question_answer",
						0 < a.parents(".zm-item-answer-author-info").length ? f = 0 < a.find("img").length ? "question_answer_author_avatar" : "question_answer_author_name" : 0 < a.parents(".voters").length ? (f = a.parents(".voters").find('a[href^\x3d"/people"]').index(a.get(0)) + 1,
							f = "question_answer_voters_" + f) : 0 < a.parents(".zm-comment-list").length && (f = 0 < a.find("img").length ? "question_answer_comment_author_avatar" : "question_answer_comment_author_name")) : 0 < a.parents("#zh-topic-top-answerer").length && (c = "topic",
						f = 0 < a.find("img").length ? "topic_sidebar_top_answerer_people_avatar" :
							"topic_sidebar_top_answerer_people_name")) : a.is('[data-tip^\x3d"t$"]') ? (d = "hover_topic_hovercard",
				0 < a.parents("#zh-single-question-page").length && (c = "question_answer",
					f = "question_topic")) : a.is('[data-tip^\x3d"c$"]') ? (d = "hover_column_hovercard",
				0 < a.parents("div[data-feedtype]").length && (c = "feed",
					0 < a.parents('div[data-feedtype\x3d"ARTICLE_VOTE_UP"]').length ? f = "feed_article_vote" : 0 < a.parents('div[data-feedtype\x3d"ARTICLE_CREATE"]').length && (f = "feed_article_create"))) : a.is('[data-tip^\x3d"r$"]') && (d =
					"hover_roundtable_hovercard",
					c = "feed",
					0 < a.parents('div[data-feedtype\x3d"MEMBER_FOLLOW_ROUNDTABLE"]').length ? f = "feed_follow_roundtable" : 0 < a.parents('div[data-feedtype^\x3d"ROUNDTABLE"]').length && (f = "feed_roundtable_others"));
				c && d && f && z.Y(c, d, f, void 0, !0)
			});
			z.F(z.W, "ga_click_sign_in", function(a) {
				a.data && a.data.label ? z.Y("sign_in", "click_sign_in", a.data.label) : z.Y("sign_in", "click_sign_in")
			});
			z.F(z.W, "ga_click_sign_in_close", function() {
				z.Y("sign_in", "click_sign_in_close", "sign_in_box_main")
			});
			z.F(z.W,
				"ga_click_sign_in_weibo", function(a) {
					z.Y("sign_in", "click_sign_in_weibo", a.label)
				});
			z.F(z.W, "ga_click_sign_in_qq", function(a) {
				z.Y("sign_in", "click_sign_in_qq", a.label)
			});
			z.F(z.W, "ga_click_sign_in_switch", function(a) {
				"signin" === a.data ? z.Y("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_in") : "signup" === a.data && z.Y("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_up")
			});
			z.F(z.W, "ga_click_sign_in_link_account", function(a) {
				a.target ? (a = (0,
					window.$)(a.target),
					z.gb(a.parent().text(),
						"该邮箱已注册") ? z.Y("sign_in", "click_sign_in_link_account", "sign_up_error_user_exists_link_account") : z.gb(a.parent().text(), "如果你已有知乎帐号") ? (0,
						window.$)(".view-warmup").is(":visible") ? z.Y("sign_in", "click_sign_in_link_account", "sign_in_box_splash_link_account") : (0,
						window.$)(".view-info").is(":visible") && z.Y("sign_in", "click_sign_in_link_account", "sign_in_box_sign_up_link_account") : z.gb(a.text(), "返回注册") && z.Y("sign_in", "click_sign_in_link_account", "sign_in_box_link_account_back")) : a.label && z.Y("sign_in", "click_sign_in_link_account",
					a.label)
			});
			z.F(z.W, "ga_click_sign_in_connect", function(a) {
				z.Y("sign_in", "click_sign_in_weibo", a.label)
			});
			z.F(z.W, "ga_click_sign_in_avatar", function() {
				z.Y("sign_in", "click_sign_in_avatar", "sign_in_avatar_upload")
			});
			z.F(z.W, "ga_click_sign_in_previous_step", function() {
				z.Y("sign_in", "click_sign_in_previous_step", "sign_in_box_follow_user_previous")
			});
			z.F(z.W, "ga_click_follow_topic", function(a) {
				0 < a.data ? z.Y("sign_in", "click_follow_topic", "sign_in_box_follow_topic_next", a.data) : 0 === a.data && z.Y("sign_in",
					"click_follow_topic", "sign_in_box_follow_topic_skip")
			});
			z.F(z.W, "ga_click_follow_people", function(a) {
				0 < a.data ? z.Y("sign_in", "click_follow_people", "sign_in_box_follow_people_next", a.data) : 0 === a.data && z.Y("sign_in", "click_follow_people", "sign_in_box_follow_people_skip")
			});
			z.F(z.W, "ga_click_play_video", function(a) {
				z.Y("video", "click_play_video", a.label)
			});
			z.F(z.W, "ga_visit_home_video", function() {
				z.Y("video", "visit_home_video", "home_play_video_auto")
			});
			z.F(z.W, "ga_click_close_video", function(a) {
				z.Y("video",
					"click_close_video", a.label)
			});
			z.F(z.W, "ga_click_share_video", function(a) {
				z.Y("video", "click_share_video", a.label)
			})
		}
		;
		nt.prototype.init = function() {
			var a = (0,
				window.$)("#zh-question-related-questions");
			if (a.length) {
				var b = (0,
					window.$)("li", a)
					, c = function(a, b, c) {
					var h = 1
						, k = Math.ceil(a.length / b);
					return {
						next: function() {
							1 !== k && (h = h === k ? 1 : h + 1,
								c(h))
						},
						XM: function() {
							var c = (h - 1) * b;
							return a.slice(c, c + b)
						}
					}
				}(b, 5, function() {
					b.hide();
					c.XM().show()
				});
				(0,
					window.$)(".next", a).click(function() {
					c.next();
					z.Y("question_answer", "click_sidebarrelatedquestions_pager")
				})
			}
		}
		;
		ot.prototype.init = function() {
			pt()
		}
		;
		z.ka(qt, z.R);
		qt.prototype.D = function() {
			var a = this;
			z.R.prototype.D.call(this);
			var b = this.m()
				, c = (0,
				window.$)(b)
				, d = c.find(".shameimaru-link")
				, f = c.find(".shameimaru-close")
				, g = c.data("track")
				, h = z.Ze(g, "at", "view")
				, k = z.Ze(g, "at", "close");
			z.vk(b, function() {
				rt(h)
			});
			d.one("click", function() {
				var a = d.attr("href");
				d.attr("href", z.Ze(a, "click", 1))
			});
			f.one("click", function(b) {
				b.preventDefault();
				rt(k);
				c.fadeOut(500, function() {
					return c.remove()
				});
				a.H()
			})
		}
		;
		z.v(tt, z.R);
		tt.prototype.init = function() {
			var a = (0,
				window.$)(".app-promotion-bar");
			this.K = a;
			var b = this;
			if (a.length && (0,
					window.$)("html").hasClass("show-app-promotion-bar"))
				a.on("click", ".close, .download-btn", function() {
					(0,
						window.$)(this).hasClass("download-btn") ? z.Y("app-promotion", "click_mobileweb_app_dl_bar_download_btn") : z.Y("app-promotion", "click_mobileweb_app_dl_bar_close_btn");
					z.yk.set("hideAppPromotionBar", "true");
					b.remove()
				})
		}
		;
		tt.prototype.remove = function() {
			var a = this.K;
			a.addClass("hide");
			(0,
				window.setTimeout)(function() {
				a.remove()
			}, 200)
		}
		;
		var xt;
		var Ft = {
			title: window.document.title,
			desc: "与世界分享你的知识、经验和见解",
			link: window.location.href,
			imgUrl: window.location.protocol + "//" + window.location.hostname + "/static/revved/img/wechat-share-image.14df79e0.png",
			type: "link"
		};
		var Rt = {};
		z.ma(St);
		var Ut = XE.create("Report" + z.X.bg);
		St.prototype.cL = '\x3cdiv id\x3d"zh-feedback-form"\x3e\x3cselect name\x3d"type" class\x3d"zg-editor-type zg-right"\x3e\x3coption value\x3d"help"\x3e使用帮助 \x3c/option\x3e\x3coption value\x3d"bug"\x3e问题反馈\x3c/option\x3e\x3coption value\x3d"search_suggest"\x3e搜索反馈\x3c/option\x3e\x3coption value\x3d"suggest"\x3e功能建议\x3c/option\x3e\x3c/select\x3e\x3cdiv class\x3d"zg-report-title"\x3e\x3cspan class\x3d"zg-gray-darker"\x3e请填写你的反馈内容\x3c/span\x3e\x3cspan class\x3d"zg-report-msg" style\x3d"display:none;"\x3e请选择反馈种类：\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input zg-report-content"\x3e\x3ctextarea class\x3d"zg-editor-input" name\x3d"content"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/div\x3e';
		St.prototype.defaults = {
			title: "建议和反馈"
		};
		St.prototype.Vk = function(a) {
			var b = (0,
				window.$)("#zh-feedback-form")
				, c = (0,
				window.$)("select", b)
				, b = (0,
				window.$)("textarea", b);
			new z.Zn(b[0]);
			c.toggle(!a.type);
			b.html(Ut.get("content") || "");
			b.on("input change", function() {
				Ut.set("content", this.value)
			})
		}
		;
		St.prototype.create = function(a) {
			var b = window.$.extend(this.defaults, a || {});
			z.U.confirm(b.title, this.cL, function(a) {
				if (a)
					return Tt(b)
			}, this);
			this.Vk(b)
		}
		;
		var TF, UF;
		UF = {
			"rt:button": function() {
				(0,
					z.hE)(this, "roundtable", null , ["zg-btn-follow", "zg-btn-unfollow"])
			},
			"rt:link": function() {
				(0,
					z.hE)(this, "roundtable", null , null , {
					follow_text: "关注圆桌"
				})
			},
			"c:link": function() {
				(0,
					z.hE)(this, "column", null , null , {
					follow_text: "关注专栏"
				})
			},
			"c:button": function() {
				(0,
					z.hE)(this, "column", null , ["zg-btn-follow", "zg-btn-unfollow"])
			},
			"q:link": function() {
				(0,
					z.hE)(this, "question", null , null , {
					follow_text: "关注问题"
				})
			},
			"m:link": function() {
				var a = this.getAttribute("data-follow_text");
				(0,
					z.hE)(this, "people",
					null , null , a ? {
						follow_text: a
					} : {})
			},
			"t:link": function() {
				(0,
					z.hE)(this, "topic", null , null , {
					follow_text: "关注话题"
				})
			},
			"t:link:simple": function() {
				(0,
					z.hE)(this, "topic")
			},
			"m:button": function() {
				var a = this;
				(0,
					z.hE)(a, "people", function() {
					a.getAttribute("data-followme") && (z.T.has(a, "zg-btn-follow") ? a.setAttribute("data-tip", "s$b$对方已关注你") : a.setAttribute("data-tip", "s$b$已互相关注"))
				}, ["zg-btn-follow", "zg-btn-unfollow"])
			},
			"q:fi:button": function() {
				var a = this;
				(0,
					z.hE)(a, "question", function(b) {
					(0,
						window.$)(".label", a).text(b ?
						"取消关注" : "关注");
					var c = (0,
						window.$)(".count", a);
					b = Number(c.data("count")) + (b ? 1 : -1);
					c.length && (b = Math.max(b, 0),
						c.text("（" + b + "）").data("count", b))
				}, ["unfollowing", "following"])
			},
			"q:m:button": function() {
				(0,
					z.hE)(this, "question", null , ["zg-btn-green", "zg-btn-white"], {
					follow_text: "关注问题"
				})
			},
			"f:button": function() {
				(0,
					z.hE)(this, "favlist", null , ["zg-btn-follow", "zg-btn-unfollow"])
			},
			"t:button": function() {
				(0,
					z.hE)(this, "topic", null , ["zg-btn-follow", "zg-btn-unfollow"])
			}
		};
		z.hE = z.Lm(function(a, b, c, d, f) {
			function g(a) {
				a.r ? z.U.message(a.msg) : h(n)
			}
			function h(b) {
				b ? (z.T.Dv(a, k, m),
					tn(a, f.unfollow_text || "取消关注")) : (z.T.Dv(a, m, k),
					tn(a, f.follow_text || "关注"));
				z.ta(c) && c(b)
			}
			TF && "pending" === TF.state() && TF.abort();
			f = f || {};
			b = b || a.getAttribute("data-focustype");
			d = d || ["zg-follow", "zg-unfollow"];
			var k = d[0]
				, m = d[1]
				, n = z.T.has(a, k);
			z.W.Ha({
				type: "ga_click_follow",
				target: a,
				data: {
					type: b,
					Lj: n
				}
			});
			d = {
				roundtable: Wt,
				column: Vt,
				people: Kp,
				question: Lp,
				topic: Np,
				favlist: Mp
			}[b];
			var q = a.getAttribute("data-id") ||
				a.id.match(/-(.*)/)[1];
			d && (d = d(q, n),
				"people" === b && n ? d.done(g) : h(n),
				TF = d)
		});
		var VF;
		(function(a) {
			VF = "div[contenteditable];.ac-row;.ac-row *;.goog-menu *;.goog-menu-button *;.goog-toolbar-button *;.goog-link-button *;.ee-menu-palette-cell *;.ee-palette-cell *".split(";");
			if (a) {
				var b = a.prototype.needsClick, c;
				if (window.HTMLElement) {
					var d = z.Pb(["matchesSelector", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector"], function(a) {
						return window.HTMLElement.prototype[a]
					});
					c = d && window.HTMLElement.prototype[d]
				}
				var f = c ? function(a, b) {
						return c.call(a, b)
					}
						: function(a, b) {
						return (0,
							window.$)(a).is(b)
					}
					;
				a.prototype.needsClick =
					function(a) {
						return z.Mb(VF, function(b) {
							return f(a, b)
						}) ? !0 : b.call(this, a)
					}
			}
		})(window.FastClick);
		z.v(Xt, z.G);
		var gu = {
			8: "backspace",
			9: "tab",
			13: "enter",
			16: "shift",
			17: "ctrl",
			18: "alt",
			19: "pause",
			20: "caps-lock",
			27: "esc",
			32: "space",
			33: "pg-up",
			34: "pg-down",
			35: "end",
			36: "home",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			45: "insert",
			46: "delete",
			48: "0",
			49: "1",
			50: "2",
			51: "3",
			52: "4",
			53: "5",
			54: "6",
			55: "7",
			56: "8",
			57: "9",
			59: "semicolon",
			61: "equals",
			65: "a",
			66: "b",
			67: "c",
			68: "d",
			69: "e",
			70: "f",
			71: "g",
			72: "h",
			73: "i",
			74: "j",
			75: "k",
			76: "l",
			77: "m",
			78: "n",
			79: "o",
			80: "p",
			81: "q",
			82: "r",
			83: "s",
			84: "t",
			85: "u",
			86: "v",
			87: "w",
			88: "x",
			89: "y",
			90: "z",
			93: "context",
			96: "num-0",
			97: "num-1",
			98: "num-2",
			99: "num-3",
			100: "num-4",
			101: "num-5",
			102: "num-6",
			103: "num-7",
			104: "num-8",
			105: "num-9",
			106: "num-multiply",
			107: "num-plus",
			109: "num-minus",
			110: "num-period",
			111: "num-division",
			112: "f1",
			113: "f2",
			114: "f3",
			115: "f4",
			116: "f5",
			117: "f6",
			118: "f7",
			119: "f8",
			120: "f9",
			121: "f10",
			122: "f11",
			123: "f12",
			186: "semicolon",
			187: "equals",
			189: "dash",
			188: ",",
			190: ".",
			191: "/",
			192: "`",
			219: "open-square-bracket",
			220: "\\",
			221: "close-square-bracket",
			222: "single-quote",
			224: "win"
		};
		var fu;
		z.v(Zt, z.G);
		var $t = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19]
			, au = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
		z.e = Zt.prototype;
		z.e.nT = function(a, b) {
			iu(this.Dm, du(1, arguments), a)
		}
		;
		z.e.hV = function(a) {
			ju(this.Dm, du(0, arguments))
		}
		;
		z.e.DB = function() {
			this.Dm = {}
		}
		;
		z.e.C = function() {
			Zt.o.C.call(this);
			this.DB();
			z.Ud(this.Ug, "keydown", this.pf, !1, this);
			z.B && z.Ud(this.Ug, "keyup", this.vF, !1, this);
			bu && !z.B && (z.Ud(this.Ug, "keypress", this.NF, !1, this),
				z.Ud(this.Ug, "keyup", this.OF, !1, this));
			this.Ug = null
		}
		;
		z.e.vF = function(a) {
			if (z.Ad) {
				if (224 == a.keyCode) {
					this.iH = !0;
					z.ce(function() {
						this.iH = !1
					}, 400, this);
					return
				}
				var b = a.metaKey || this.iH;
				67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b,
					this.pf(a))
			}
			32 == this.xv && 32 == a.keyCode && a.preventDefault();
			this.xv = null
		}
		;
		z.e.NF = function(a) {
			32 < a.keyCode && hu(a) && (this.uG = !0)
		}
		;
		z.e.OF = function(a) {
			!this.uG && hu(a) && this.pf(a)
		}
		;
		z.e.pf = function(a) {
			var b;
			b = a.keyCode;
			if (16 == b || 17 == b || 18 == b)
				b = !1;
			else {
				var c = a.target
					, d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName
					, f = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
				b = !d && !f || this.WN[b] || this.CL ? !0 : f ? !1 : this.VQ && (a.altKey || a.ctrlKey || a.metaKey) ? !0 : "INPUT" == c.tagName && this.LU[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? this.GL ? !0 : 32 != b : !1
			}
			if (b)
				if ("keydown" == a.type && hu(a))
					this.uG = !1;
				else {
					b = ci(a.keyCode);
					c =
						b & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
					if (!this.Jn[c] || 1500 <= (0,
							z.w)() - this.bt)
						this.Jn = this.Dm,
							this.bt = (0,
								z.w)();
					if (c = this.Jn[c])
						c.next ? (this.Jn = c.next,
							this.bt = (0,
								z.w)(),
							a.preventDefault()) : (this.Jn = this.Dm,
							this.bt = (0,
								z.w)(),
						this.NC && a.preventDefault(),
						this.HL && a.stopPropagation(),
							c = c.Rd,
							d = a.target,
							f = this.dispatchEvent(new ku("shortcut",c,d)),
						(f &= this.dispatchEvent(new ku("shortcut_" + c,c,d))) || a.preventDefault(),
						z.B && (this.xv = b))
				}
		}
		;
		z.v(ku, z.qd);
		z.v(lu, z.cd);
		var vu = [];
		z.e = lu.prototype;
		z.e.Eb = function(a) {
			vu.push(this);
			this.Wk = new Ce;
			this.ha = new Zt(a);
			this.ha.NC = !1;
			this.ha.addEventListener("shortcut", this.oS, !1, this)
		}
		;
		z.e.register = function(a, b, c) {
			this.ln = {
				key: a,
				action: b,
				context: c
			};
			this.ha.nT(a, a);
			this.Wk.set(a, this.ln);
			return this
		}
		;
		z.e.iV = function(a) {
			this.ln = null ;
			this.ha.hV(a, a);
			this.Wk.remove(a);
			return this
		}
		;
		z.e.unregister = function(a) {
			z.x(z.oa(a) ? a : [a], this.iV, this)
		}
		;
		z.e.DB = function() {
			this.ln = null ;
			this.ha.DB();
			this.Wk.clear();
			return this
		}
		;
		z.e.oS = function(a) {
			var b = this.Wk.get(a.identifier);
			b && b.action.call(b.context, a)
		}
		;
		z.e.C = function() {
			lu.o.C.call(this);
			Tb(vu, this);
			this.ha.H();
			this.Wk = this.ln = this.ha = null
		}
		;
		var lC = new lu(window.document);
		lC.mK = function(a) {
			return new lu(a)
		}
		;
		var pu = ["group", "key", "name"];
		nu.prototype.defaults = {
			hN: "帮助信息",
			Kw: "shortcut-tips-dialog"
		};
		nu.prototype.Eb = function() {
			mu(lC.register("shift+/", this.show, this), {
				group: "导航",
				name: "帮助",
				key: "?"
			})
		}
		;
		nu.prototype.show = function() {
			var a = this.J;
			z.U.alert({
				title: a.hN,
				content: uu(),
				className: a.Kw
			})
		}
		;
		z.v(wu, z.R);
		z.e = wu.prototype;
		z.e.defaults = {
			items: "\x3eli",
			vM: !1,
			IN: !0,
			className: "navigable",
			UE: "navigable-focusin"
		};
		z.e.D = function() {
			wu.o.D.call(this);
			var a = this.J;
			this.K = (0,
				window.$)(this.h).addClass(a.className).data("navigable", this).on("focusin.navigable focusout.navigable", a.items, window.$.proxy(this.CR, this));
			this.ue()
		}
		;
		z.e.C = function() {
			wu.o.C.call(this);
			this.K.removeClass(this.J.className).data("navigable", null ).off(".navigable");
			this.K = null
		}
		;
		z.e.ue = z.p;
		z.e.index = function() {
			return this.Bj
		}
		;
		z.e.size = function() {
			return this.items().length
		}
		;
		z.e.prev = function() {
			xu(this, this.index() - 1)
		}
		;
		z.e.next = function() {
			xu(this, this.index() + 1)
		}
		;
		z.e.first = function() {
			xu(this, 0)
		}
		;
		z.e.last = function() {
			xu(this, this.size() - 1)
		}
		;
		z.e.CR = function(a) {
			var b = this.J
				, c = a.currentTarget
				, d = (0,
				window.$)(c);
			"focusin" === a.type ? (d.addClass(b.UE),
				this.Bj = window.$.inArray(c, this.items())) : d.removeClass(b.UE)
		}
		;
		z.e.Wo = function(a) {
			this.J.IN && (a.tabIndex = -1,
				a.focus());
			this.dispatchEvent({
				data: {
					item: a
				},
				type: "focus"
			})
		}
		;
		z.e.items = function() {
			var a = this.J.items;
			return a ? (0,
				window.$)(a, this.K).get() : this.K.children().get()
		}
		;
		z.v(zu, wu);
		z.rc(zu.prototype.defaults = {
			UT: 200,
			offsetTop: 0
		}, wu.prototype.defaults);
		z.e = zu.prototype;
		z.e.ue = function() {
			z.dc(Au(this), function(a, b) {
				mu(lC.register(b, a.action, this), a.Wb)
			}, this)
		}
		;
		z.e.C = function() {
			zu.o.C.call(this);
			lC.unregister(jc(Au(this)))
		}
		;
		z.e.Wo = function(a) {
			zu.o.Wo.call(this, a);
			var b = this.J;
			this.scrollTo((0,
					window.$)(a).offset().top + b.offsetTop, b.UT, "easeOutCubic")
		}
		;
		z.e.scrollTo = function(a, b, c) {
			this.DK.stop().animate({
				scrollTop: a
			}, b, c)
		}
		;
		z.e.ST = function() {
			this.scrollTo("+\x3d60", 100)
		}
		;
		z.e.WT = function() {
			this.scrollTo("-\x3d60", 100)
		}
		;
		var WF = Ql(function(a) {
			var b = z.Gk["ra-urls"]
				, c = b && b[a];
			return c ? new window.Promise(function(b) {
					window.$.ajax({
						url: c,
						dataType: "script",
						cache: !0
					}).then(function() {
						b(window.ra[a])
					})
				}
			) : window.Promise.reject("Missing app name: ", a)
		});
		var Du = [];
		z.ek.on("init", function() {
			function a() {
				var b = Du.shift();
				b && (b = b[0],
					b.length ? b(a) : (b(),
						a()))
			}
			a()
		});
		z.ek.on("init", function() {
			(0,
				window.$)("img.lazy").lazyload({
				load: function() {
					(0,
						window.$)(this).trigger("contentchange")
				},
				data_attribute: "actualsrc",
				event: "scroll updatelazy",
				threshold: 400
			})
		});
		z.ek.on("init", function() {
			z.X.Nn && z.yk.set("lastuser:email", z.X.Nn)
		});
		Cu(function(a) {
			new Fk({
				ak: a
			})
		}, 0);
		Cu(function() {
			"#ask" === window.location.hash && (z.ns.Y().show(),
				window.history.replaceState ? window.history.replaceState(null , window.document.title, window.location.pathname + window.location.search) : window.location.hash = "")
		}, window.Infinity);
		z.ek.on("init", function() {
			(new nt).init()
		});
		z.ek.on("init", function() {
			(new ot).init()
		});
		z.ek.on("init", function() {
			st()
		});
		z.ek.on("init", function() {
			(new tt).init()
		});
		z.ek.on("init", function() {
			wt()
		});
		z.ek.on("init", function() {
			Bt()
		});
		z.ek.on("init", function() {
			Jt()
		});
		z.ek.on("postinit", function() {
			(0,
				window.$)("#js-feedback-button").click(function() {
				St.Y().create()
			})
		});
		z.ek.on("init", function() {
			(0,
				window.$)(window.document.body).on("click.follow", "[data-follow]", function() {
				if (this.name)
					return Qn("未清除的 name 属性:", this);
				var a = this.getAttribute("data-follow");
				(a = a && UF[a]) && a.call(this)
			})
		});
		z.ek.on("postinit", function() {
			window.FastClick && window.FastClick.attach(window.document.body)
		});
		z.ek.on("postinit", function() {
			if (z.X.qb())
				if (window.WebSocket) {
					var a;
					a = -1 !== z.lB.vn.indexOf("https") ? z.lB.vn.replace("https", "wss") : z.lB.vn.replace("http", "ws");
					(new Xt(a)).addEventListener("message", function(a) {
						Fl(z.W, JSON.parse(a.data.replace(/^\+;/, "")))
					})
				} else
					a = new zm({
						url: xE,
						data: {
							loc: window.location.href,
							channel: (0,
								z.w)() + ob()
						},
						dataType: "polling",
						converters: {
							"text polling": function(a) {
								return JSON.parse(a.replace(/^\+;/, ""))
							}
						}
					}),
						a.addEventListener("message", function(a) {
							Fl(z.W, a.data)
						}),
						a.Ot()
		});
		z.ek.on("init", function() {
			new nu;
			zu.prototype.defaults.offsetTop = -60;
			var a = (0,
				window.$)('div[data-widget\x3d"navigable"], ul[data-widget\x3d"navigable"]');
			if (1 === a.length) {
				var b = a.data("navigable-options")
					, b = new zu(b);
				b.w(a.get(0));
				var c = (0,
					window.$)("#zh-load-more");
				b.on("action", function(a) {
					a.data.index >= a.data.size && c.is(":visible") && c[0].click()
				})
			}
		});
		z.ek.on("init", function() {
			(0,
				window.$)(window.document).on("click", 'a[href\x3d"#"]', function(a) {
				a.preventDefault()
			})
		});
		z.ek.on("postinit", function() {
			var a = window.location.pathname;
			(z.X.qb() && "/" === a || /^\/(question|explore|collection|topic|people|search|roundtable\/)/.test(a)) && WF("CommentApp")
		});
		z.ek.on("postinit", function() {
			(0,
				window.$)(".js-openProfilePage").on("click", function() {
				var a = (0,
					window.$)(this).attr("data-url")
					, a = (0,
					window.$)("\x3cform target\x3d'_blank' method\x3d'POST' style\x3d'display:none;'\x3e\x3c/form\x3e").attr({
					action: a
				}).appendTo(window.document.body);
				(0,
					window.$)('\x3cinput type\x3d"hidden" /\x3e').attr({
					name: "content",
					value: (0,
						window.$)("#performance-profile-data").text()
				}).appendTo(a);
				a.submit();
				a.remove()
			})
		});
		z.v(Eu, Nm);
		Eu.prototype.add = function(a) {
			z.y(this.queue, a) || (this.queue.push(a),
				z.F(a, "finish", this.yH, !1, this))
		}
		;
		Eu.prototype.remove = function(a) {
			Tb(this.queue, a) && z.Ud(a, "finish", this.yH, !1, this)
		}
		;
		Eu.prototype.C = function() {
			z.x(this.queue, function(a) {
				a.H()
			});
			this.queue.length = 0;
			Eu.o.C.call(this)
		}
		;
		z.v(Fu, Eu);
		Fu.prototype.play = function(a) {
			if (0 == this.queue.length)
				return !1;
			if (a || this.O == Om)
				this.jx = 0,
					this.cg();
			else if (1 == this.O)
				return !1;
			this.gd("play");
			-1 == this.O && this.gd("resume");
			var b = -1 == this.O && !a;
			this.startTime = (0,
				z.w)();
			this.endTime = null ;
			this.O = 1;
			z.x(this.queue, function(c) {
				b && -1 != c.O || c.play(a)
			});
			return !0
		}
		;
		Fu.prototype.pause = function() {
			1 == this.O && (z.x(this.queue, function(a) {
				1 == a.O && a.pause()
			}),
				this.O = -1,
				this.gd("pause"))
		}
		;
		Fu.prototype.stop = function(a) {
			z.x(this.queue, function(b) {
				b.O == Om || b.stop(a)
			});
			this.O = Om;
			this.endTime = (0,
				z.w)();
			this.gd("stop");
			this.dg()
		}
		;
		Fu.prototype.yH = function() {
			this.jx++;
			this.jx == this.queue.length && (this.endTime = (0,
				z.w)(),
				this.O = Om,
				this.gd("finish"),
				this.dg())
		}
		;
		z.v(Ju, z.Dl);
		z.e = Ju.prototype;
		z.e.init = function() {
			if (!z.GE("back_to_top")) {
				this.h = z.Zf(this.KU);
				window.document.body.appendChild(this.h);
				var a = new rk(this.Ct,this.NU,this);
				this.CJ = (0,
					z.r)(a.fire, a);
				this.v().g(window, "resize", this.WH);
				this.WH()
			}
		}
		;
		z.e.start = function() {
			this.rk || (this.rk = !0,
				this.v().g(window, "scroll", this.CJ).g(this.h, "click", this.fD),
				this.Ct())
		}
		;
		z.e.stop = function() {
			this.rk && (this.rk = !1,
				this.v().pa(window, "scroll", this.CJ).pa(this.h, "click", this.fD),
				this.hide())
		}
		;
		z.e.WH = function() {
			z.Rf().width >= this.TQ ? this.start() : this.stop()
		}
		;
		z.e.KU = '\x3cdiv class\x3d"zh-backtotop" style\x3d"display:none"\x3e\x3ca data-action\x3d"backtotop" data-tip\x3d"s$r$回到顶部" href\x3d"javascript:;" class\x3d"btn-backtotop btn-action"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"stick"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e';
		z.e.fD = function() {
			var a = Tf(window.document)
				, b = z.Sf(window.document)
				, c = b.x
				, b = b.y
				, d = new Fu
				, f = this.v();
			d.add(new kn(a,[c, b],[0, 0],this.TT,Iu));
			d.add(new pn(this.h,this.gx,Hu));
			f.g(d, "finish", this.zR);
			f.g(d, "begin", this.mR);
			d.play();
			z.W.Ha("ga_click_back_to_top")
		}
		;
		z.e.mR = function() {
			this.Ov = this.no = !0
		}
		;
		z.e.zR = function() {
			this.Ov = !1
		}
		;
		z.e.show = function() {
			(new qn(this.h,this.gx,Gu)).play();
			this.no = !1
		}
		;
		z.e.hide = function() {
			(new pn(this.h,this.gx,Hu)).play();
			this.no = !0
		}
		;
		z.e.Ct = function() {
			this.Ov || (1200 <= z.Sf(window.document).y ? this.no && this.show() : this.no || this.hide())
		}
		;
		Ku.prototype.link = "想来知乎工作？请发送邮件到 jobs@zhihu.com";
		Ku.prototype.RL = "          _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\____\\                /::\\    \\                /::\\    \\                /::\\    \\        \n       /:::/    /                \\:::\\    \\              /::::\\    \\              /::::\\    \\       \n      /:::/    /                  \\:::\\    \\            /::::::\\    \\            /::::::\\    \\      \n     /:::/    /                    \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\     \n    /:::/____/                      \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    \n   /::::\\    \\                      /::::\\    \\      /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\   \n  /::::::\\    \\   _____    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\  \n /:::/\\:::\\    \\ /\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\   \\:::\\    \\ \n/:::/  \\:::\\    /::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::|    |/:::/__\\:::\\   \\:::\\____\\\n\\::/    \\:::\\  /:::/    /\\:::\\  /:::/    \\::/    /\\::/   |::::\\  /:::|____|\\:::\\   \\:::\\   \\::/    /\n \\/____/ \\:::\\/:::/    /  \\:::\\/:::/    / \\/____/  \\/____|:::::\\/:::/    /  \\:::\\   \\:::\\   \\/____/ \n          \\::::::/    /    \\::::::/    /                 |:::::::::/    /    \\:::\\   \\:::\\    \\     \n           \\::::/    /      \\::::/____/                  |::|\\::::/    /      \\:::\\   \\:::\\____\\    \n           /:::/    /        \\:::\\    \\                  |::| \\::/____/        \\:::\\   \\::/    /    \n          /:::/    /          \\:::\\    \\                 |::|  ~|               \\:::\\   \\/____/     \n         /:::/    /            \\:::\\    \\                |::|   |                \\:::\\    \\         \n        /:::/    /              \\:::\\____\\               \\::|   |                 \\:::\\____\\        \n        \\::/    /                \\::/    /                \\:|   |                  \\::/    /        \n         \\/____/                  \\/____/                  \\|___|                   \\/____/         \n";
		z.v(Lu, z.Dl);
		z.XF = null ;
		Lu.prototype.init = function() {
			z.XF = this;
			z.Mu(this)
		}
		;
		Lu.prototype.QR = function() {
			var a = z.sf(this.$j);
			a && !a.r && Fl(z.W, [a])
		}
		;
		Ou.prototype.ea = function() {}
		;
		z.v(z.Pu, Ou);
		z.Pu.prototype.ea = function(a, b, c) {
			z.cp(this.element, this.cf, a, b, void 0, c, this.HS)
		}
		;
		z.v(Qu, Ou);
		Qu.prototype.ea = function(a, b, c, d) {
			z.cp(ti(a), 0, a, b, this.Mh, c, null , d)
		}
		;
		z.v(Ru, z.rj);
		Ru.prototype.setPosition = function(a) {
			this.Rt = a || void 0;
			this.U() && this.ea()
		}
		;
		Ru.prototype.ea = function() {
			if (this.Rt) {
				var a = !this.U() && "move_offscreen" != this.bi()
					, b = this.m();
				a && (b.style.visibility = "hidden",
					z.Q(b, !0));
				this.Rt.ea(b, this.Zz, this.gz);
				a && z.Q(b, !1)
			}
		}
		;
		z.v(z.Tu, Ru);
		var av = [];
		z.e = z.Tu.prototype;
		z.e.cc = null ;
		z.e.className = "goog-tooltip";
		z.e.Jp = 500;
		z.e.oo = 0;
		z.e.L = function() {
			return this.da
		}
		;
		z.e.attach = function(a) {
			a = z.J(a);
			this.cb.add(a);
			z.F(a, "mouseover", this.md, !1, this);
			z.F(a, "mouseout", this.Ll, !1, this);
			z.F(a, "mousemove", this.Jl, !1, this);
			z.F(a, "focus", this.je, !1, this);
			z.F(a, "blur", this.Ll, !1, this)
		}
		;
		z.e.detach = function(a) {
			if (a)
				a = z.J(a),
					Uu(this, a),
					this.cb.remove(a);
			else {
				for (var b = this.cb.Uc(), c = 0; a = b[c]; c++)
					Uu(this, a);
				this.cb.clear()
			}
		}
		;
		z.e.Bx = function() {
			return this.oo
		}
		;
		z.e.Qd = function(a) {
			a = z.oe(a, null );
			var b = this.m();
			b && z.Ef(b, a)
		}
		;
		z.e.kh = function(a) {
			var b = this.m();
			b && z.N(b);
			z.Tu.o.kh.call(this, a);
			a ? (b = this.da.wa().body,
				b.insertBefore(a, b.lastChild),
				hd(this.xk),
				this.xk = new ej(this.m()),
				z.fd(this, this.xk),
				z.F(this.xk, "focusin", this.Wi, void 0, this),
				z.F(this.xk, "focusout", this.Op, void 0, this)) : (hd(this.xk),
				this.xk = null )
		}
		;
		z.e.Kd = function() {
			return z.Eg(this.m())
		}
		;
		z.e.Dx = aa(21);
		z.e.getState = function() {
			return this.Hm ? this.U() ? 4 : 1 : this.Pl ? 3 : this.U() ? 2 : 0
		}
		;
		z.e.Rs = function(a) {
			if (!this.U())
				return !1;
			var b = z.yi(this.m())
				, c = z.Hi(this.m());
			return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
		}
		;
		z.e.To = function() {
			if (!z.rj.prototype.To.call(this))
				return !1;
			if (this.anchor)
				for (var a, b = 0; a = av[b]; b++)
					z.qg(a.m(), this.anchor) || a.G(!1);
			Sb(av, this);
			a = this.m();
			a.className = this.className;
			this.Wi();
			z.F(a, "mouseover", this.by, !1, this);
			z.F(a, "mouseout", this.KF, !1, this);
			cv(this);
			return !0
		}
		;
		z.e.ck = function() {
			Tb(av, this);
			for (var a = this.m(), b, c = 0; b = av[c]; c++)
				b.anchor && z.qg(a, b.anchor) && b.G(!1);
			this.gI && this.gI.Op();
			z.Ud(a, "mouseover", this.by, !1, this);
			z.Ud(a, "mouseout", this.KF, !1, this);
			this.anchor = void 0;
			0 == this.getState() && (this.ou = !1);
			z.rj.prototype.ck.call(this)
		}
		;
		z.e.iz = function(a, b) {
			this.anchor == a && this.cb.contains(this.anchor) && (this.ou || !this.rX ? (this.G(!1),
			this.U() || (this.anchor = a,
				this.setPosition(b || Xu(this, 0)),
				this.G(!0))) : this.anchor = void 0);
			this.Hm = void 0
		}
		;
		z.e.Wh = function() {
			return this.cb
		}
		;
		z.e.Un = function() {
			return this.cc
		}
		;
		z.e.cH = function(a) {
			this.Pl = void 0;
			if (a == this.anchor) {
				a = this.L();
				var b = a.Un();
				a = b && this.m() && a.contains(this.m(), b);
				null  != this.cc && (this.cc == this.m() || this.cb.contains(this.cc)) || a || this.bl && this.bl.cc || this.G(!1)
			}
		}
		;
		z.e.md = function(a) {
			var b = Wu(this, a.target);
			this.cc = b;
			this.Wi();
			b != this.anchor && (this.anchor = b,
				bv(this, b),
				$u(this),
				Vu(this, a))
		}
		;
		z.e.Jl = function(a) {
			Vu(this, a);
			this.ou = !0
		}
		;
		z.e.je = function(a) {
			this.cc = a = Wu(this, a.target);
			this.ou = !0;
			if (this.anchor != a) {
				this.anchor = a;
				var b = Xu(this, 1);
				this.Wi();
				bv(this, a, b);
				$u(this)
			}
		}
		;
		z.e.Ll = function(a) {
			var b = Wu(this, a.target)
				, c = Wu(this, a.relatedTarget);
			b != c && (b == this.cc && (this.cc = null ),
				cv(this),
				this.ou = !1,
				!this.U() || a.relatedTarget && z.qg(this.m(), a.relatedTarget) ? this.anchor = void 0 : this.Op())
		}
		;
		z.e.by = function() {
			var a = this.m();
			this.cc != a && (this.Wi(),
				this.cc = a)
		}
		;
		z.e.KF = function(a) {
			var b = this.m();
			this.cc != b || a.relatedTarget && z.qg(b, a.relatedTarget) || (this.cc = null ,
				this.Op())
		}
		;
		z.e.Op = function() {
			2 == this.getState() && (this.Pl = z.ce((0,
				z.r)(this.cH, this, this.anchor), this.Bx()))
		}
		;
		z.e.Wi = function() {
			this.Pl && (de(this.Pl),
				this.Pl = void 0)
		}
		;
		z.e.C = function() {
			this.G(!1);
			cv(this);
			this.detach();
			this.m() && z.N(this.m());
			this.cc = null ;
			delete this.da;
			z.Tu.o.C.call(this)
		}
		;
		z.v(Yu, Qu);
		Yu.prototype.ea = function(a, b, c) {
			b = ti(a);
			b = xi(b);
			c = c ? new z.ei(c.top + 10,c.right,c.bottom,c.left + 10) : new z.ei(10,0,0,10);
			fp(this.Mh, a, 4, c, b, 9) & 496 && fp(this.Mh, a, 4, c, b, 5)
		}
		;
		z.v(Zu, z.Pu);
		Zu.prototype.ea = function(a, b, c) {
			var d = new Ff(10,0);
			z.cp(this.element, this.cf, a, b, d, c, 9) & 496 && z.cp(this.element, 2, a, 1, d, c, 5)
		}
		;
		z.v(dv, z.Tu);
		z.e = dv.prototype;
		z.e.ZM = !1;
		z.e.YM = 100;
		z.e.fq = !1;
		z.e.ek = function() {
			dv.o.ek.call(this);
			this.Wq = hi(Ji(this.m()));
			this.anchor && (this.Mv = hi(Ji(this.anchor)));
			this.fq = this.ZM;
			z.F(this.L().wa(), "mousemove", this.Jl, !1, this)
		}
		;
		z.e.ck = function() {
			z.Ud(this.L().wa(), "mousemove", this.Jl, !1, this);
			this.Mv = this.Wq = null ;
			this.fq = !1;
			dv.o.ck.call(this)
		}
		;
		z.e.Rs = function(a) {
			if (this.qo) {
				var b = z.yi(this.m())
					, c = z.Hi(this.m());
				return b.x - this.qo.left <= a.x && a.x <= b.x + c.width + this.qo.right && b.y - this.qo.top <= a.y && a.y <= b.y + c.height + this.qo.bottom
			}
			return dv.o.Rs.call(this, a)
		}
		;
		z.e.cH = function(a) {
			this.Pl = void 0;
			a != this.anchor || fv(this, this.Zi) || this.Un() || this.bl && this.bl.cc || z.B && 0 == this.Zi.x && 0 == this.Zi.y || this.G(!1)
		}
		;
		z.e.Jl = function(a) {
			var b = this.U();
			if (this.Wq) {
				var c = z.Pg(this.L())
					, c = new Ff(a.clientX + c.x,a.clientY + c.y);
				fv(this, c) ? b = !1 : this.fq && (b = fi(this.Wq, c) >= fi(this.Wq, this.Zi))
			}
			if (b) {
				if (this.Op(),
						this.cc = null ,
						b = this.bl)
					b.cc = null
			} else
				3 == this.getState() && this.Wi();
			dv.o.Jl.call(this, a)
		}
		;
		z.e.by = function() {
			this.Un() != this.m() && (this.fq = !1,
				this.cc = this.m())
		}
		;
		z.e.Bx = function() {
			return this.fq ? this.YM : dv.o.Bx.call(this)
		}
		;
		z.v(z.gv, dv);
		z.e = z.gv.prototype;
		z.e.C = function() {
			z.gv.o.C.call(this);
			z.Ud(this.La, "mouseover", this.LF, !1, this)
		}
		;
		z.e.Gy = function(a) {
			return a.tagName in this.QC && !!a.getAttribute(this.QC[a.tagName])
		}
		;
		z.e.LF = function(a) {
			if (a = a.target)
				this.Gy(a) ? (this.setPosition(null ),
					hv(this, a)) : this.qM && (a = z.Lg(a, (0,
					z.r)(this.Gy, this), !1, this.fX)) && (this.setPosition(null ),
					hv(this, a))
		}
		;
		z.e.Hz = function(a) {
			return this.dispatchEvent(a)
		}
		;
		z.e.$r = function() {
			return this.Of || this.anchor
		}
		;
		z.e.ck = function() {
			z.gv.o.ck.call(this);
			null  != this.Of && kv(this, this.Of);
			this.Of = null
		}
		;
		z.e.md = function(a) {
			var b = Wu(this, a.target);
			b && b != this.anchor ? hv(this, b) : z.gv.o.md.call(this, a)
		}
		;
		z.e.Ll = function(a) {
			var b = this.anchor
				, c = this.getState();
			z.gv.o.Ll.call(this, a);
			c == this.getState() || 1 != c && 4 != c || (this.anchor = b,
				iv(this))
		}
		;
		z.e.iz = function(a, b) {
			z.gv.o.iz.call(this, a, b);
			this.U() ? (a != this.Of && kv(this, this.Of),
				this.Of = a) : (cv(this),
				iv(this))
		}
		;
		z.v(jv, z.qd);
		z.v(lv, z.Pu);
		lv.prototype.Zn = function() {
			return 5
		}
		;
		lv.prototype.ea = function(a, b, c, d) {
			var f = {
				"1-4": "bottom",
				"0-4": "top",
				"0-5": "top",
				"1-5": "bottom",
				"2-5": "top",
				"3-5": "bottom",
				"3-4": "bottom",
				"2-6": "left",
				"2-4": "right"
			}, g;
			if (this.JC) {
				g = z.cp(this.element, this.cf, a, b, null , c, 10, d);
				var h = mv(g, this.cf)
					, k = mv(g, b);
				g & 496 && (g = z.cp(this.element, h, a, k, null , c, 10, d),
				g & 496 && (h = mv(g, h),
					k = mv(g, k),
					this.JC ? z.cp(this.element, h, a, k, null , c, this.Zn(), d) : z.cp(this.element, h, a, k, null , c, 0, d)));
				this.Qt && (a = (z.l(h) ? h : this.cf) + "-" + (z.l(b) ? b : k),
					this.Qt(f[a], a))
			} else
				z.cp(this.element,
					this.cf, a, b, void 0, c),
				this.Qt && (a = this.cf + "-" + b,
					this.Qt(f[a], a))
		}
		;
		z.v(z.nv, z.Dl);
		z.e = z.nv.prototype;
		z.e.defaults = {
			PS: "pm",
			jp: !1
		};
		z.e.kh = function(a) {
			this.h = a
		}
		;
		z.e.m = function() {
			return this.h
		}
		;
		z.e.ty = function() {
			this.yb = new z.S(null );
			this.yb.Ya("发送私信");
			z.Ij(this.yb, null );
			this.yb.Bf(!0);
			this.yb.G(!0);
			this.h = this.yb.X()
		}
		;
		z.e.focus = function() {
			this.init();
			this.od.focus()
		}
		;
		z.e.init = function() {
			this.nP || (this.nP = !0,
			this.jq && (this.yb || this.ty(),
				this.h.innerHTML = '\x3cdiv class\x3d"zm-pm-wrap"\x3e\x3cdl class\x3d"zm-form-table zm-form-table-medium"\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e发给：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field"\x3e\x3cdiv class\x3d"zm-pm-selector-wrap"\x3e\x3cdiv class\x3d"zg-user-name" style\x3d"display:none;padding:4px 0 0 0"\x3e\x3c/div\x3e\x3cinput class\x3d"zg-form-text-input zm-pm-user-selector" type\x3d"text" /\x3e\x3c/div\x3e\x3c/dd\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e内容：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field zm-form-table-field-last"\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input" style\x3d"font-weight:normal"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/dd\x3e\x3c/dl\x3e\x3cdiv class\x3d"zh-pm-warnmsg" style\x3d"display:none;text-align:right;color:#C3412F;"\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3cdiv class\x3d"zm-item-meta zg-left" style\x3d"margin: 0 0 0 57px;"\x3e\x3cspan class\x3d"zg-text-counter" style\x3d"display:none"\x3e还可以输入 500 字\x3c/span\x3e\x3cspan class\x3d"additional-info" \x3e\x3c/span\x3e\x3c/div\x3e\x3ca name\x3d"cancel" href\x3d"javascript:;" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\x3ca name\x3d"send" href\x3d"javascript:;" class\x3d"zg-btn-blue zg-r3px" id\x3d"zh-question-pm-send-button"\x3e发送\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'),
				this.wh =
					z.L("zg-user-name", this.h),
				this.od = z.L("zg-editor-input", this.h),
				this.Zc = z.L("zm-pm-user-selector", this.h),
				this.wn = z.L("zm-command", this.h),
				z.L("zg-text-counter", this.h),
				this.tt = z.L("zh-pm-warnmsg", this.h),
				(0,
					window.$)(".additional-info", (0,
					window.$)(this.h)),
				new z.Zn(this.od),
				this.v().g(this.wn, "click", this.Oa).g(this.wh, "click", this.Oa).g(this.od, "keydown", this.GO),
			this.Zc && ((new z.Fp("搜索用户")).w(this.Zc),
				this.v().g(this.Zc, "blur", this.rM),
				this.ca = new z.Tp("/people/autocomplete?type\x3d" + this.J.PS,
					this.Zc,null ,null ,z.L("zm-pm-wrap", this.h),!0),
				this.ca.mh(!0),
				this.v().g(this.ca, "select", this.cS)),
			z.X.Yd || qv(this, "未激活用户，不能发送私信。请先激活邮箱。"))
		}
		;
		z.e.GO = function(a) {
			13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.GF(),
				a.preventDefault())
		}
		;
		z.e.rM = function() {
			this.xD && (0,
				window.clearTimeout)(this.xD);
			this.xD = (0,
				window.setTimeout)((0,
				z.r)(this.sM, this), 200)
		}
		;
		z.e.sM = function() {
			var a = z.zn(this.Zc.value);
			-1 === this.Nm && a && "搜索用户" !== a && qv(this, "请输入对方姓名，从下拉菜单里选择收件人")
		}
		;
		z.e.Hp = function(a) {
			this.dU = a
		}
		;
		z.e.show = function() {
			this.init();
			this.jq && (this.yb.G(!0),
				this.yb.ea())
		}
		;
		z.e.cS = function() {
			var a = Yb(this.ca.qj(), 1);
			z.pv(this, a[3], a[0], !0)
		}
		;
		z.e.GF = z.Lm(function() {
			if (!this.Oh || "pending" !== this.Oh.state())
				if (-1 === this.Nm)
					qv(this, "请填写收信人。");
				else {
					var a = this.od.value;
					(0,
						z.qb)(a) ? (a = -1 !== this.Wp ? window.$.post("/inbox/reply", {
						message_id: this.Wp,
						content: a,
						type: this.mB
					}) : window.$.post("/inbox/post", {
						member_id: this.Nm,
						content: a,
						token: this.dU
					}),
						a.done((0,
							z.r)(this.eS, this)),
						this.Oh = a) : qv(this, "请填写私信内容。")
				}
		}, !0);
		z.e.Oa = function(a) {
			if (a = (a = this.Hg(a.target)) && a.name)
				switch (a) {
					case "edit":
						this.Nm = -1;
						z.Cn(this.Zc, this.wh);
						break;
					case "cancel":
						this.jq && this.yb.G(!1);
						break;
					case "send":
						this.GF()
				}
		}
		;
		z.e.eS = function(a) {
			On("message", "send_message");
			if (!a)
				return z.U.message("网络异常");
			if (a.r)
				return qv(this, a.msg);
			this.jq && this.yb.G(!1);
			this.J.jp ? window.location.reload() : z.U.message("发送成功")
		}
		;
		z.v(z.rv, z.Dl);
		z.ma(z.rv);
		var wv = {
			p: "MemberProfileCardV2",
			t: "TopicProfileCardV2",
			c: "ColumnProfileCardV2",
			r: "RoundtableProfileCardV2"
		};
		z.e = z.rv.prototype;
		z.e.wP = {
			t: 0,
			r: 2,
			b: 1,
			l: 2
		};
		z.e.init = function() {
			if (!z.lB.lb && !z.GE("tooltiop")) {
				var a = this.V = new z.gv({
					A: "data-tip",
					SPAN: "data-tip",
					BUTTON: "data-tip",
					I: "data-tip",
					DIV: "data-tip",
					INPUT: "data-tip",
					IMG: "data-tip"
				})
					, b = z.M("div", {
					id: "zh-tooltip"
				});
				window.document.body.appendChild(b);
				this.V.kh(b);
				this.V.Jp = this.sU;
				this.V.oo = this.tP;
				this.v().g(this.V, "trigger", this.Hz);
				var c = (0,
					window.$)(b)
					, d = null ;
				a.on("show", function(a) {
					(0,
						window.clearTimeout)(d);
					c.addClass("in");
					z.W.Ha({
						type: "ga_hover_hovercard",
						target: a.target.$r()
					})
				}).on("hide",
					function() {
						c.css({
							display: "block",
							visibility: "visible"
						}).removeClass("in").addClass("out");
						d = (0,
							window.setTimeout)(function() {
							c.removeClass("out").css({
								display: "none",
								visibility: "hidden"
							})
						}, 1E3)
					});
				this.v().g(this.V, "beforeshow", this.To);
				this.v().g(this.V, "beforehide", this.lR);
				(0,
					window.$)(a.m()).on("click", ".member-profile-card-pm", function(b) {
					b.preventDefault();
					var c = (0,
						window.$)(this);
					a.G(!1);
					z.Lm(function() {
						var a = new z.nv;
						a.show();
						z.pv(a, c.data("pmHash"), c.data("pmName"));
						z.ov(a, c.attr("href"));
						a.od.focus()
					}, !0)()
				})
			}
		}
		;
		z.e.lR = function() {
			"s" !== this.Nh && this.Gh[this.Nh] && this.Gh[this.Nh][this.Hn] && (this.Gh[this.Nh][this.Hn] = (0,
				window.$)(this.V.m()).find(".popover-content").html())
		}
		;
		z.e.To = function() {
			var a = this.V.$r()
				, b = a.getAttribute("data-tip");
			this.eE = a;
			b = b.split("$");
			this.Nh = b[0];
			this.Hn = b[2];
			this.gl = b[1];
			this.V.m().setAttribute("data-theme", a.getAttribute("data-theme") || "");
			"s" === this.Nh ? (a = this.Hn,
				b = [],
				b.push('\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e'),
				b.push('\x3cdiv class\x3d"tooltip-inner content-prewrap"\x3e'),
				b.push(fb(a)),
				b.push("\x3c/div\x3e"),
				vv(this, b.join(""))) : uv(this, this.Nh, this.Hn, this.gl);
			tv(this)
		}
		;
		z.e.dw = function() {
			return sv('\x3cdiv class\x3d"zh-hovercard-spinner"\x3e\x3c/div\x3e', !0)
		}
		;
		z.e.Hz = function(a) {
			var b = a.anchor
				, c = b && b.getAttribute("data-tip");
			a = c.split("$");
			var d = null ;
			z.Mg(b, "no-hovercard") ? (a = this.V,
				cv(a),
				iv(a)) : c && 1 < a.length ? (b.title && (b.setAttribute("data-original_title", b.title),
				b.removeAttribute("title")),
				d = a[1],
			"s" !== a[0] && (210 > Ci(b).y ? "t" === d && (d = "b",
				b.setAttribute("data-tip", c.replace("$t$", "$b$"))) : (d = "t",
				b.setAttribute("data-tip", c.replace("$b$", "$t$")))),
				this.VM = d = new lv(b,this.wP[d],"b" === d || "t" === d),
				b = (0,
					z.r)(this.gS, this),
				d.Qt = b,
				this.V.className = "s" !== a[0] ?
					"goog-hovercard popover" : "tooltip") : (a = this.V,
				cv(a),
				iv(a))
		}
		;
		z.e.gS = function(a, b) {
			var c = this.V.m();
			z.T.remove(c, "top", "bottom", "left", "right");
			z.T.add(c, a);
			var d = z.Qi(c)
				, f = z.Qi(this.eE)
				, g = new Ff(c.offsetLeft,c.offsetTop);
			if ("t" === this.gl || "b" === this.gl) {
				var d = (d.width - f.width) / 2
					, h = g.x - d;
				if ("s" === this.Nh)
					z.ii(c, "left", h + "px");
				else {
					var h = z.y(["2-5", "3-5", "3-4", "2-4"], b)
						, k = (0,
						window.$)(".zh-hovercard-spinner", c)[0]
						, m = z.L("arrow", c)
						, n = z.L("arrow2", c);
					k ? z.ii(c, "left", g.x - d + "px") : h ? z.ii(c, "left", g.x + 83 + "px") : z.ii(c, "left", g.x - 70 + "px");
					var q = f.width / 2;
					m && n && (k || (h ?
						z.x([m, n], function(a) {
							z.ii(a, "left", "auto");
							z.ii(a, "right", q + 70 + "px")
						}) : z.x([m, n], function(a) {
						z.ii(a, "left", q + 70 + "px")
					})))
				}
			} else
				z.ii(c, "top", g.y - (d.height - f.height) / 2 + "px"),
				"l" === this.gl && z.ri(c, g.x - f.width)
		}
		;
		z.v(yv, z.R);
		z.e = yv.prototype;
		z.e.ia = function(a) {
			this.h = a;
			this.K = (0,
				window.$)(this.h);
			this.K.addClass("zh-scroller").css({
				position: "relative",
				overflow: "hidden"
			}).wrapInner('\x3cdiv class\x3d"zh-scroller-content"\x3e\x3c/div\x3e');
			this.K.wrapInner('\x3cdiv class\x3d"zh-scroller-inner"\x3e\x3c/div\x3e');
			this.K.append("\x3cdiv class\x3d'zh-scroller-bar-container'\x3e\x3cdiv\x3e");
			this.K.append('\x3cdiv class\x3d"zh-scroller-bar"\x3e\x3c/div\x3e');
			this.dd = this.K.children(".zh-scroller-inner");
			this.Dk = this.K.children(".zh-scroller-bar-container");
			this.qe = this.K.children(".zh-scroller-bar");
			this.We = this.dd.children(".zh-scroller-content");
			this.Sq = this.qe[0];
			this.OP = this.dd[0];
			this.content = this.We[0];
			this.Tq = this.Dk[0];
			this.dd.css({
				height: "100%",
				width: "150%",
				overflow: "auto"
			});
			this.qe.css({
				position: "absolute",
				right: this.options.right,
				top: this.options.top,
				opacity: this.options.Uv,
				background: this.options.bM,
				width: this.options.width,
				"border-radius": 3,
				cursor: "default"
			});
			this.Dk.css({
				position: "absolute",
				right: this.options.right - 1,
				top: 0,
				height: "100%",
				width: this.options.width,
				background: this.options.KM,
				border: "1px solid #444",
				opacity: 0,
				cursor: "default",
				"border-radius": "2px"
			});
			this.zi(this.Sq, !1);
			this.zi(this.Tq, !1);
			this.update()
		}
		;
		z.e.D = function() {
			yv.o.D.call(this);
			this.nB = new rk(this.Ez,50,this);
			this.options.stopPropagation && this.dd.bind("mousewheel DOMMouseScroll", function(a) {
				var b = null ;
				"mousewheel" === a.type ? b = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" === a.type && (b = 40 * a.originalEvent.detail);
				b && (a.preventDefault(),
					(0,
						window.$)(this).scrollTop(b + (0,
							window.$)(this).scrollTop()))
			})
		}
		;
		z.e.enter = function() {
			this.Vw || (this.v().g(this.OP, "scroll", function() {
				this.nB.fire()
			}),
			z.C || (this.v().g(this.Tq, "click", this.kR),
				this.v().g(window.document, "mousedown", this.NR),
				this.v().g(window.document, "mouseup", this.PR),
				this.v().g(window.document, "mousemove", this.OR)),
				this.options.Oq ? (this.Sd = new z.ae(200),
					this.v().g(this.Sd, "tick", function() {
						2 === this.qz || 1 === this.qz ? (zv(this),
						this.Fm && this.Dk.css({
							opacity: this.options.JD
						})) : this.Kr || this.hn || (Av(this, 1E3),
							this.Dk.css({
								opacity: 0
							}))
					})) : (this.qe.css({
					opacity: this.options.Uv
				}),
					this.Dk.css({
						opacity: this.options.JD
					})),
			this.Sd && this.Sd.start(),
				Av(this),
				this.Vw = !0)
		}
		;
		z.e.NR = function(a) {
			a.target === this.Sq && (this.Kr = !0,
				this.cM = a.clientY,
				this.dM = (0,
					window.parseInt)(this.qe.css("top"), 10));
			a.target !== this.Sq && a.target !== this.Tq || this.zi(window.document.body, !1)
		}
		;
		z.e.PR = function() {
			this.Kr = !1;
			this.zi(window.document.body, !0)
		}
		;
		z.e.OR = function(a) {
			if (this.Kr) {
				var b = Bv(this, this.dM + (a.clientY - this.cM));
				this.dd.scrollTop(b)
			}
			this.qz = a.target === this.Sq ? 2 : a.target === this.Tq ? 1 : 0
		}
		;
		z.e.Ez = function() {
			var a = this.dd.scrollTop()
				, b = this.We.height()
				, c = this.dd.height()
				, b = a / b * (c - 2 * this.options.top);
			zv(this);
			this.qe.css({
				top: b + this.options.top
			});
			this.dispatchEvent(new Cv(this,a))
		}
		;
		z.e.update = function() {
			var a = this.ai(this.dd).height
				, b = this.ai(this.We).height;
			a >= b ? (this.Fm = !1,
				this.qe.hide()) : (this.Fm = !0,
				this.qe.show());
			this.qe.css({
				height: a / b * (a - 2 * this.options.top)
			});
			this.Dk.css({
				height: a - 2
			});
			this.We.css({
				overflow: "hidden",
				width: this.K.width(),
				"min-height": "100%"
			});
			return this
		}
		;
		z.e.ai = function(a) {
			var b = {
				height: a.height(),
				width: a.width()
			};
			if (!b.height) {
				var c = a.css("display")
					, d = a.css("position")
					, f = a.css("visibility");
				a.css({
					position: "absolute",
					display: "block",
					visibility: "hidden"
				});
				b = {
					height: a.height(),
					width: a.width()
				};
				a.css({
					position: d,
					display: c,
					visibility: f
				})
			}
			return b
		}
		;
		z.e.kR = function(a) {
			this.scrollTo(Bv(this, a.offsetY - this.qe.height() / 2))
		}
		;
		z.e.scrollTop = function(a) {
			this.Fm && (a = a || 200,
				zv(this),
				this.dd.stop().animate({
					scrollTop: 0
				}, a));
			return this
		}
		;
		z.e.zi = function(a, b) {
			z.Oi(a, !b)
		}
		;
		z.e.scrollBy = function(a, b) {
			if (this.Fm) {
				zv(this);
				var c = b || this.ai(this.dd).height
					, c = Math.abs(c)
					, c = this.dd.scrollTop() + (a ? -1 : 1) * c;
				this.dd.stop().animate({
					scrollTop: c
				}, 200)
			}
		}
		;
		z.e.scrollTo = function(a) {
			this.Fm && (zv(this),
				this.dd.stop().animate({
					scrollTop: a
				}, 200));
			return this
		}
		;
		z.v(Cv, z.qd);
		z.v(z.Dv, z.R);
		z.Dv.prototype.defaults = {
			pH: ".tab-nav",
			fI: ".tab-panel",
			vg: "active"
		};
		z.Dv.prototype.ia = function(a) {
			if (a) {
				this.h = a;
				var b = this
					, c = this.J;
				this.Jk = (0,
					window.$)(c.pH, a);
				this.fC = (0,
					window.$)(c.fI, a);
				this.Bj = this.Jk.index("." + c.vg);
				this.Jk.on("click", function() {
					b.select(b.Jk.index(this))
				});
				this.Jk.attr("role", "tab").parent().attr("role", "tablist")
			}
		}
		;
		z.Dv.prototype.select = function(a) {
			if (!(0 > a || a > this.Jk.size()) && (this.dispatchEvent({
					type: "action",
					data: {
						index: a
					}
				}),
				a !== this.Bj)) {
				this.Bj = a;
				var b = this.J;
				this.Jk.eq(a).addClass(b.vg).attr("aria-selected", "true").siblings().removeClass(b.vg).attr("aria-selected", "false");
				b = this.fC.eq(a);
				this.fC.not(b.show()).hide();
				this.dispatchEvent({
					type: "select",
					data: {
						index: a
					}
				})
			}
		}
		;
		z.Dv.prototype.index = function() {
			return this.Bj
		}
		;
		z.ka(Ev, z.Dl);
		z.e = Ev.prototype;
		z.e.init = function() {
			this.dh = z.J("zh-top-nav-live-new");
			this.gC = (0,
				window.$)(this.dh);
			this.$p = z.J("zh-top-nav-count-wrap");
			this.An = z.M("span", {
				id: "zh-top-nav-count",
				className: "zu-top-nav-count zg-noti-number",
				style: "display:none"
			});
			this.contents = z.Of("zm-noti7-content", this.dh);
			this.ND = z.Of("zm-noti7-content-body", this.dh);
			this.$p.appendChild(this.An);
			this.v().g(this.$p, "click", this.FJ).g(this.$p, "keypress", function(a) {
				32 === a.keyCode && (a.preventDefault(),
					this.FJ())
			});
			this.v().g(z.W, "notification",
				this.SO);
			this.v().g(this.dh, "click", this.Oa);
			this.v().g(this.dh, "click", function(a) {
				a = a.target;
				a.href && /group_id=/.test(a.href + "") && (0,
					window.$)(a).parent(".unread").removeClass("unread")
			});
			this.jv = (0,
				window.$)(".zm-noti7-popup-tab-container .icon");
			Fv(this);
			z.lB.lb || null  != window.navigator.userAgent.match(/iPad/i) || (this.vm = z.Kb(this.contents, function(a) {
				var b = new yv;
				b.w(a);
				return b
			}));
			z.lB.lb && (this.Rw = !1);
			this.lm = z.J("zh-top-nav-pm-count");
			this.lm || (this.lm = z.M("span"));
			this.fm = z.J("zh-top-nav-new-pm");
			this.fm || (this.fm = z.M("span"));
			this.bG = (0,
					window.parseInt)((0,
						window.$)(this.fm).attr("data-count") || (0,
						window.$)(this.lm).attr("data-count"), 10) || 0;
			this.RG = z.J("zh-top-nav-count-wrap");
			this.RG.innerHTML && (this.count = +this.RG.innerHTML);
			this.v().g(z.W, "inbox", this.FO)
		}
		;
		z.e.ns = function(a) {
			z.qg(this.dh, a.target) || z.qg(this.$p, a.target) || Mv(this, !1)
		}
		;
		z.e.Oa = function(a) {
			var b = a.target;
			b && b.name && "set" === b.name && this.jX(a)
		}
		;
		z.e.SO = function(a) {
			this.xH = this.Nf;
			this.Nf = a.yf;
			this.zd = this.Nf[0] + this.Nf[1] + this.Nf[2];
			z.Q(this.An, !!this.zd);
			this.An.innerHTML = Iv(this.zd);
			z.x(this.Nf, function(a, c) {
				a ? (this.jv.eq(c).addClass("withdot"),
					this.cache[c] = !1) : this.jv.eq(c).removeClass("withdot");
				this.Rw && 0 < a - this.xH[c] && this.El(c)
			}, this);
			Jv(this)
		}
		;
		z.e.FJ = function() {
			if (z.lB.lb && this.visible)
				Mv(this, !1);
			else if (this.visible && !this.zd)
				Mv(this, !1);
			else {
				Mv(this, !0);
				var a;
				this.ww || this.zd ? this.zd && (a = z.Rb(this.Nf, z.Ab),
					a = -1 === a ? 0 : a,
					this.tab.select(a),
					this.Gm[a] = !0) : (a = (a = z.yk.get("noti7-tab")) ? Number(a) : 0,
					this.tab.select(a),
					this.Gm[a] = !0);
				z.W.Ha({
					type: "ga_click_top_nav_noti",
					data: {
						tab: this.cE,
						RJ: +(this.zd || 0)
					}
				})
			}
			Jv(this)
		}
		;
		z.e.El = function(a) {
			this.Fl[a] && this.Fl[a].Rb() || (this.Fl[a] = new z.V(!1),
				this.v().g(this.Fl[a], "success", function(b) {
					this.Dz(b, a)
				}),
				this.Fl[a].ajax("/noti7/stack/" + this.types[a] + "?r\x3d" + (0,
						z.w)(), "", "GET"))
		}
		;
		z.e.Dz = function(a, b) {
			var c = z.sf(this.Fl[b]);
			if (c)
				if (c.r)
					z.U.message(c.msg);
				else {
					this.ww = !0;
					if (c = c.msg)
						1 === b && (c = '\x3cdiv class\x3d"zm-noti7-content-head-item"\x3e\x3cspan class\x3d"zg-gray-normal"\x3e这些人最近关注了你\x3c/span\x3e\x3c/div\x3e' + c);
					else
						switch (b) {
							case 0:
								c = '\x3cdiv class\x3d"zm-noti7-popup-empty"\x3e暂无新消息\x3c/div\x3e';
								break;
							case 1:
								c = '\x3cdiv class\x3d"zm-noti7-popup-empty"\x3e有人关注你时会显示在这里\x3c/div\x3e';
								break;
							case 2:
								c = '\x3cdiv class\x3d"zm-noti7-popup-empty"\x3e你的答案收到赞同、感谢时会显示在这里\x3c/div\x3e'
						}
					this.cache[b] =
						c;
					this.Gm[b] && (Gv(this, b),
						this.Gm[b] = !1)
				}
		}
		;
		z.e.FO = function(a) {
			this.bG = a = window.$.isNumeric(a) ? a : a.yf;
			0 !== a ? (this.fm.innerHTML = this.lm.innerHTML = a,
				this.fm.style.visibility = this.lm.style.visibility = "visible") : this.fm.style.visibility = this.lm.style.visibility = "hidden";
			Jv(this)
		}
		;
		z.v(Nv, z.R);
		z.e = Nv.prototype;
		z.e.defaults = {
			trigger: "hover",
			XH: "open",
			hideFocus: !1
		};
		z.e.Ob = function() {
			return this.rg.length && this.cd.length
		}
		;
		z.e.w = function(a) {
			if (a) {
				var b = (0,
					window.$)(a)
					, c = b.prev();
				this.rg = b;
				this.cd = c;
				this.$parent = b.parent();
				Nv.o.w.call(this, a);
				return this
			}
		}
		;
		z.e.toggle = function() {
			this.rb() ? this.close() : this.open()
		}
		;
		z.e.rb = function() {
			return this.rg.is(":visible")
		}
		;
		z.e.open = function() {
			this.rg.attr("aria-hidden", "false").parent().addClass(this.J.XH);
			this.cd.attr("aria-expanded", "true")
		}
		;
		z.e.close = function() {
			this.rg.attr("aria-hidden", "true").parent().removeClass(this.J.XH);
			this.cd.attr("aria-expanded", "false")
		}
		;
		z.e.qR = function(a) {
			var b = a.keyCode;
			switch (b) {
				case 32:
					a.preventDefault();
					this.toggle();
					break;
				case 27:
				case 9:
					this.close();
					break;
				case 38:
				case 40:
					Pv(this, 38 === b ? -1 : 0)
			}
		}
		;
		z.e.JR = function(a) {
			var b = a.keyCode;
			switch (b) {
				case 27:
				case 9:
					this.close();
					this.cd.focus();
					break;
				case 38:
				case 40:
					a.preventDefault(),
						Pv(this, this.index + (38 === b ? -1 : 1))
			}
		}
		;
		z.e.D = function() {
			var a = this
				, b = this.J;
			Ov(this);
			this.rg.on("keydown", (0,
				z.r)(this.JR, this));
			this.cd.on("keydown", (0,
				z.r)(this.qR, this));
			var c = z.TE ? "click" : b.trigger;
			if ("hover" === c)
				this.$parent.on("hover", (0,
					z.r)(function(a) {
					"mouseenter" === a.type ? this.open() : this.close()
				}, this));
			else if ("click" === c)
				this.cd.on("click", (0,
					z.r)(function(a) {
					a.preventDefault();
					this.toggle();
					this.cd.focus()
				}, this));
			this.$parent.on("focusout", function() {
				(0,
					window.setTimeout)(function() {
					a.$parent.get(0).contains(window.document.activeElement) ||
					a.close()
				})
			});
			if (b.hideFocus)
				this.rg.children().find("a").on("click", function() {
					this.blur()
				})
		}
		;
		z.v(z.Qv, z.im);
		z.e = z.Qv.prototype;
		z.e.B = function() {
			z.Qv.o.B.call(this);
			this.ka((0,
				window.$)(".login-template").html())
		}
		;
		z.e.D = function() {
			z.Qv.o.D.call(this);
			this.Eb();
			this.to();
			this.ba({
				category: "sign_in",
				action: "popup_sign_in_box_appear"
			})
		}
		;
		z.e.Eb = function() {
			var a = (0,
				window.$)("form", this.ub);
			this.Fe(a, this.Cz);
			km(a);
			var b = this
				, c = (0,
				window.$)("input.account", a);
			(0,
				window.$)("button.unable-login", this.ub).click(function() {
				var a = new z.mm(c.val());
				Xl(b, a)
			});
			this.Qk && c.val(this.Qk);
			(0,
				window.$)("button.weibo", this.ub).click(function() {
				b.ba({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_weibo_start"
				});
				z.Jl("sina", b)
			});
			(0,
				window.$)("button.qq", this.ub).click(function() {
				b.ba({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_qq_start"
				});
				z.Jl("qq", b)
			});
			(0,
				window.$)("button.wechat", this.ub).click(function() {
				b.ba({
					category: "sign_in_or_sign_up",
					action: "click_sign_with_wechat_start"
				});
				z.Jl("wechat", b)
			});
			jm(this, function(a) {
				a = a.account;
				var c = b.tf(a);
				b.ba({
					category: "sign_in",
					action: a ? "click_sign_in_submit_" + (c ? "email" : "phone") : "click_sign_in_submit_no_channel"
				})
			})
		}
		;
		z.e.Cz = function(a) {
			var b = this
				, c = (0,
				window.$)(a);
			a = c.Pd();
			var d = this.tf(a.account);
			b.ba({
				nc: !0,
				category: "sign_in",
				action: "sign_in_front_end_pass_" + (d ? "email" : "phone")
			});
			var f = d ? "/login/email" : "/login/phone_num";
			d ? this.hb(a, "account", "email") : this.hb(a, "account", "phone_num");
			return window.$.post(f, a, function(a) {
				a.r ? c.data("validator").showErrors(a.data) : (b.ba({
					nc: !0,
					category: "sign_in",
					action: "sign_in_success_" + (d ? "email" : "phone")
				}),
					b.Xc())
			})
		}
		;
		z.e.to = function() {
			z.Nl(this.v(), this.uz)
		}
		;
		z.e.uz = function(a) {
			a = a.yf;
			1 === a.login ? this.Xc() : (a = new z.qm(a),
				a.Ud = this.Ud,
				Xl(this, a))
		}
		;
		z.ka(Rv, z.R);
		z.e = Rv.prototype;
		z.e.D = function() {
			z.R.prototype.D.call(this);
			this.qy()
		}
		;
		z.e.as = function() {
			return this.ca
		}
		;
		z.e.xB = function(a, b, c) {
			if (a) {
				var d = {
					query: (0,
						z.qb)(this.m().value)
				};
				z.Ak({
					nc: !0,
					category: "search",
					action: a,
					label: b,
					value: c,
					attributes: d
				})
			}
		}
		;
		z.e.qy = function() {
			var a = this
				, b = this.m();
			mu(lC.register("/", function() {
				(0,
					window.setTimeout)(function() {
					b.focus()
				});
				z.En(b, null , 500)
			}), {
				group: "导航",
				name: "搜索"
			});
			var c = new Sp
				, d = b.getAttribute("placeholder") || "搜索问题、话题或人";
			this.ca = new z.Tp("/autocomplete",b,null ,null ,b.offsetParent,null ,[d],null ,c);
			this.ca.en = !1;
			this.ca.mh(!0);
			this.v().g(this.ca, "select", this.$O);
			var f = b.form;
			if (f) {
				var g = function(a) {
						(0,
							z.qb)(b.value) ? f.submit() : a.preventDefault()
					}
					;
				this.v().g(b, "keydown", function(b) {
					13 === b.keyCode && (a.xB("visit_search_result",
						"enter"),
						g(b))
				});
				this.v().g(f, "submit", g);
				(0,
					window.$)(":submit", f).click(function() {
					a.xB("visit_search_result", "search_box_submit")
				})
			}
			this.v().g(this.ca, "suggestionsupdate", this.Bv);
			var h = (0,
				z.r)(function() {
				this.ca.rE = !(this.metaKey || this.lz)
			}, this);
			this.v().g(window.document, "keydown", function(a) {
				a.metaKey && (this.metaKey = !0,
					h())
			});
			this.v().g(window.document, "keyup", function(a) {
				if (91 === a.keyCode || 224 === a.keyCode)
					this.metaKey = !1,
						h()
			});
			this.v().g(window.document, "mouseup", function(a) {
				vd(a, 1) && (this.lz =
					!0,
					h(),
					(0,
						window.setTimeout)((0,
						z.r)(function() {
						this.lz = !1;
						h()
					}, this), 0))
			});
			this.v().g(b, "mousedown", function(a) {
				a.stopPropagation();
				return !0
			})
		}
		;
		z.e.Bv = function() {
			var a = this.ca.Ra
				, b = this.ca.N.zf;
			if (a && 0 !== a.length) {
				if (1 === a.length) {
					var c = z.M("div", {
						className: "zu-autocomplete-empty"
					}, "没有找到相关的结果");
					z.dg(c, b[0]);
					z.N(b[0])
				}
				z.x(a, function(c, f) {
					if (0 === f || c[0] !== a[f - 1][0]) {
						var g = b[f]
							, h = {
							people: "用户",
							topic: "话题",
							question: "问题"
						}[c[0]];
						h && (h = z.M("div", {
							className: "zu-autocomplete-row-label ac-row"
						}, h),
							z.dg(h, g),
							this.v().g(this.ca, "suggestionsupdate", Wn))
					}
				}, this)
			}
		}
		;
		z.e.$O = function(a) {
			var b = this.ca.qj()
				, c = this.ca.N.Sl
				, d = Yb(b, 1)
				, f = null
				, b = b[0];
			"topic" === b ? (f = "/topic/" + d[1],
				f = Sv(this, f)) : "people" === b ? (f = "/people/" + d[1],
				f = Sv(this, f)) : "question" === b ? (f = "/question/" + d[2],
				f = Sv(this, f)) : "search_link" === b && (f = "/search?q\x3d" + (0,
					window.encodeURI)(d[0]) + "\x26type\x3dquestion");
			f && (z.W.Ha({
				type: "ga_serach_select",
				data: {
					type: b,
					index: c
				}
			}),
				d = c + 1,
			(d = {
				topic: ["visit_topic", "instant_search_result_topic", d],
				question: ["visit_question", "instant_search_result_question", d],
				people: ["visit_people_profile",
					"instant_search_result_people", d],
				search_link: ["visit_search_result"]
			}[b]) && this.xB.apply(this, d),
				z.ul.set("s-q", (0,
					window.encodeURI)(this.ca.Xb), -1, "/"),
				z.ul.set("s-i", c + 1, -1, "/"),
				z.ul.set("sid", (0,
					z.kF)(), -1, "/"),
				z.ul.set("s-t", "autocomplete", -1, "/"),
				this.metaKey || this.lz ? window.open(f) : window.location.href = f);
			a.stopPropagation();
			a.preventDefault()
		}
		;
		z.v(Tv, z.Dl);
		Tv.prototype.init = function() {
			if ((0,
					window.$)(".zu-top").length) {
				z.yk.get("__Q_ISNEWLYCREATED__") && (z.yk.remove("__Q_ISNEWLYCREATED__"),
				z.ck && (z.ck.rG = !0));
				if (z.X.qb())
					(new Ev).init();
				else
					(0,
						window.$)("#zh-top-inner").on("click", 'a[href\x3d"/topic"]', function() {
						var a = new z.Qv;
						a.Ud = "top_navigation_topics";
						a.show();
						return !1
					}).on("click", ".js-signin-noauth", function() {
						var a = new z.Qv;
						a.Ud = "top_navigation_sign_in";
						a.show();
						return !1
					}).on("click", ".js-signin-noauth-mobile", fjs-open-in-appunction() {
						z.Y("app-promotion", "click_mobileweb_signin_btn");
						var a = new z.Qv;
						a.Ud = "top_navigation_sign_in_mobile";
						a.show();
						return !1
					}).on("click", ".js-signup-noauth", function() {
						var a = new vm;
						a.Ud = "top_navigation_sign_up";
						a.show();
						return !1
					}).on("click", ".js-signup-noauth-mobile", function() {
						z.Y("app-promotion", "click_mobileweb_signup_btn");
						var a = new vm;
						a.Ud = "top_navigation_sign_up_mobile";
						a.show();
						return !1
					});
				if (this.fj = z.J("zh-top-search")) {
					this.UP = z.L("zu-top-search-input", this.fj);
					var a = z.J("zu-top-add-question");
					this.v().g(a, "click", this.MA);
					Sj || !Rj ? (new Nv({
						hideFocus: !0
					})).w((0,
						window.$)("#top-nav-profile-dropdown").get(0)) :
						(Vv(),
							Uv((0,
								window.$)("#js-top-nav-link-profile"), (0,
								window.$)("#mobile-top-nav-profile-popup")));
					this.qy()
				}
			}
		}
		;
		Tv.prototype.qy = function() {
			var a = (new z.Oo(window.location)).kd().get("q");
			a ? a = (0,
				window.decodeURIComponent)(a) : (a = z.yk.get("query"),
				z.yk.remove("query"));
			var b = this.UP;
			a && (b.value = a);
			Rj && this.v().g(b, ["focus", "blur"], function(a) {
				(0,
					window.$)(".zu-top").toggleClass("is-searching", "focus" === a.type)
			});
			(new Rv).w(b)
		}
		;
		Tv.prototype.MA = z.Lm(function() {
			z.ns.Y().show()
		}, !0, "#ask");
		window.JSON || (window.JSON = {
			parse: Le,
			stringify: Ne
		});
		z.C && (Object.getPrototypeOf = function(a) {
			return function(b) {
				return b.__proto__ || a.apply(this, arguments)
			}
		}(Object.getPrototypeOf));
		z.v(Xv, z.R);
		z.YF = new Xv;
		z.YF.w(window.document);
		z.v(Yv, z.yj);
		z.ma(Yv);
		z.e = Yv.prototype;
		z.e.Eb = function() {
			z.Ij(this, null );
			this.v().g(window.document, "click", this.ns)
		}
		;
		z.e.ns = function(a) {
			a = a.target;
			if ("IMG" === a.tagName && z.T.has(a, this.PU)) {
				var b = a.getAttribute("data-original");
				if (b)
					if (Rj)
						window.open(b);
					else if (!z.Mg(a, "editable")) {
						this.ka('\x3cdiv class\x3d"zm-light-box-x1" id\x3d"zm-light-box-x1"\x3e\x3cdiv class\x3d"zm-light-box-x2" id\x3d"zm-light-box-x2"\x3e\x3cimg src\x3d"' + b + '" class\x3d"zm-light-box-img-el" /\x3e\x3cdiv class\x3d"zm-light-box-footer"\x3e\x3ca class\x3d"zm-light-box-show-origin" href\x3d"' + b + '" target\x3d"_blank"\x3e查看原图\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
						this.G(!0);
						z.T.add(this.m(), "zm-light-box-fullscreen-image");
						var b = z.Rf()
							, c = z.J("zm-light-box-x1")
							, d = z.J("zm-light-box-x2")
							, f = a.getAttribute("data-rawheight")
							, g = a.getAttribute("data-rawwidth")
							, g = g ? +g : 0;
						(f ? +f : 0) > b.height - 80 ? d.style.marginTop = "40px" : c.style.lineHeight = b.height + "px";
						d.style.width = g > b.width - 80 ? b.width - 80 + "px" : g + "px";
						z.W.Ha({
							type: "ga_click_enlarge_image",
							target: a
						})
					}
			}
		}
		;
		z.e.ea = z.p;
		z.e.focus = z.p;
		z.e.NI = z.uz;
		z.e.EO = function() {
			this.G(!1);
			z.T.remove(window.document.body, this.lD)
		}
		;
		z.e.li = function() {
			Yv.o.li.call(this);
			z.T.add(window.document.body, this.lD);
			this.v().Aa(window.document, "click", this.EO)
		}
		;
		z.e.B = function() {
			Yv.o.B.call(this);
			z.T.add(this.m(), "zm-light-box")
		}
		;
		z.e.fz = function() {
			this.Nc = this.L().B("div", this.Pc + "-bg zm-light-box-background");
			z.Q(this.Nc, !1)
		}
		;
		Yv.Y();
		var ZF = wh.Y()
			, $F = new Zg;
		$F.Ar = !1;
		ZF.cz = $F;
		var aG = z.t.PLOVR_MODULE_INFO, bG;
		for (bG in aG)
			ZF.Wc[bG] = new th(aG[bG],bG);
		ZF.xo.Th || ZF.xo.Hh();
		ZF.fE == ZF.Uq && (ZF.fE = null ,
		ZF.Uq.ap((0,
			z.r)(ZF.kF, ZF)) && Gh(ZF, Hh),
			xh(ZF));
		var cG = z.t.PLOVR_MODULE_URIS, dG;
		for (dG in cG)
			ZF.Wc[dG].Bk = cG[dG];
		z.Fh("common");
		window.console || (window.console = {
			info: z.p,
			log: z.p,
			warning: z.p,
			error: z.p
		});
		z.YF.on(["click!", "show!", "visit!"], function(a) {
			var b = a.Lc;
			b.category && b.action && z.Y(b.category, a.type.replace("!", "") + "_" + b.action, b.label, b.value)
		});
		be = window;
		Rj = z.lB.lb;
		window.$.ajaxPrefilter(function(a, b) {
			var c, d;
			!1 !== b.processData && "get" !== a.type.toLowerCase() && (d = z.ul.get("_xsrf")) && (c = b.data || {},
				"string" === window.$.type(c) ? z.gb(c, "_xsrf\x3d") || (c += "\x26_xsrf\x3d" + d) : (c._xsrf = d,
					c = window.$.param(c)),
				a.data = c)
		});
		(new Tv).init();
		z.ek.dispatchEvent("init");
		(0,
			window.$)(function() {
			z.ek.dispatchEvent("postinit")
		});
		z.X.qb() ? (Xj.push({
			AV: "json",
			filter: function(a) {
				(a = a.profile_result) && (0,
					window.$)(a).css("border-top", "1px solid #eee").appendTo(window.document.body)
			}
		}),
		z.lB.lb && (window.$.fx.off = !0),
			(0,
				window.$)(function() {
				(new Lu).init()
			})) : (0,
			window.$)("body").addClass("no-auth");
		z.gb(window.location.host, "zhihu.com") || (Pn = !0);
		(0,
			window.$)(window.document.body).children("div.zu-main").attr("role", "main");
		window.document.addEventListener && window.document.addEventListener("touchstart", z.p, !1);
		Sj && (0,
			window.$)('meta[name\x3d"viewport"]').attr("content", "width\x3ddevice-width, initial-scale\x3d1.0");
		(function() {
			function a(b, c) {
				return c.length ? a(b[c.shift()], c) : b
			}
			(0,
				window.$)(function() {
				var b = (0,
					window.$)('meta[name\x3d"entry"]')
					, c = b.attr("content");
				if (c) {
					var d = b.data("moduleId");
					if (d) {
						var f = b.data("params");
						Hr(d, function() {
							var b = c && a(window, c.split("."));
							b && b(f)
						})
					} else
						window.console.warn("Module id not found!")
				} else
					window.console.warn("Entry \x3cmeta\x3e not found!")
			})
		})();
		(0,
			window.$)(function() {
			window.znonce && window.znonce.evalScripts();
			(new Ju).init();
			z.rv.Y();
			var a = new Ku;
			window.console && window.console.info && window.console.info(a.RL + "\n\n" + a.link);
			Nu();
			z.Y.init()
		});
		z.v(Zv, z.G);
		var aw = {};
		Zv.prototype.defaults = {};
		Zv.prototype.v = function() {
			return this.Kg || (this.Kg = new z.ee(this))
		}
		;
		Zv.prototype.init = function() {}
		;
		Zv.prototype.C = function() {
			Zv.o.C.call(this);
			this.view && (oc(this.view.Sb, this.name),
				this.view = null );
			this.Kg && (this.Kg.H(),
				this.Kg = null )
		}
		;
		z.v(z.cw, z.R);
		z.e = z.cw.prototype;
		z.e.defaults = {
			source: null ,
			use: ["autoload", "shortcut"],
			nh: !0,
			qn: "zg-btn-white zu-button-more"
		};
		z.e.use = function(a, b) {
			var c = bw(a, b);
			c.view = this;
			this.ya ? c.init(this) : this.v().g(this, "initialized", function() {
				c.init(this)
			});
			this.Sb[a] = c;
			return this
		}
		;
		z.e.Yi = function() {
			!this.$d && this.J.nh && (this.$d = this.Yq(),
				z.eg(this.$d, this.h),
				this.v().g(this.$d, "click", this.Zl))
		}
		;
		z.e.D = function() {
			z.cw.o.D.call(this);
			this.Yi();
			z.x(this.jb(), this.rr, this);
			z.x(this.J.use, this.use, this);
			this.dispatchEvent("initialized")
		}
		;
		z.e.C = function() {
			z.dc(this.Sb, function(a) {
				a.H()
			});
			this.Sb = null ;
			z.cw.o.C.call(this)
		}
		;
		z.e.jb = function() {
			return z.ig(this.h)
		}
		;
		z.e.rr = function(a, b) {
			this.Yo(a, b);
			this.dispatchEvent({
				type: "itemcreated",
				item: a,
				index: b
			})
		}
		;
		z.e.Yo = z.p;
		z.e.IR = function(a) {
			if (a) {
				var b = a.results
					, c = !b || !b.length;
				c || this.render(b);
				this.dispatchEvent("next");
				(c || !1 === a.next) && ew(this)
			}
		}
		;
		z.e.render = function(a, b) {
			a = window.$.isArray(a) ? a.join("") : a;
			var c = z.Zf(a + " ");
			z.x(window.$.makeArray(z.ig(c)), this.rr, this);
			z.fg(this.h, c, b)
		}
		;
		z.e.Zl = function() {
			if (!1 !== this.dispatchEvent("beforeloadnext") && "pending" !== this.promise.state())
				return this.RA(!0),
					this.promise = this.source().done((0,
						z.r)(this.IR, this)).always((0,
						z.r)(z.Ca(this.RA, !1), this))
		}
		;
		z.e.mf = function() {
			return this.$d
		}
		;
		z.e.Yq = function() {
			return z.M("a", {
				"aria-role": "button",
				"class": this.J.qn
			}, "更多")
		}
		;
		z.e.RA = function(a) {
			this.$d && (this.$d.innerHTML = a ? '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e 加载中' : "更多",
				z.T.enable(this.$d, "loading", a))
		}
		;
		var gw = {
			s: function(a, b, c) {
				return (0,
					window.isNaN)(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + nb(" ", c - a.length) : nb(" ", c - a.length) + a
			},
			f: function(a, b, c, d, f) {
				d = a.toString();
				(0,
					window.isNaN)(f) || "" == f || (d = (0,
					window.parseFloat)(a).toFixed(f));
				var g;
				g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
				0 <= a && (d = g + d);
				if ((0,
						window.isNaN)(c) || d.length >= c)
					return d;
				d = (0,
					window.isNaN)(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
				a = c - d.length - g.length;
				return d = 0 <= b.indexOf("-", 0) ? g + d + nb(" ", a) : g +
				nb(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
			},
			d: function(a, b, c, d, f, g, h, k) {
				return gw.f((0,
					window.parseInt)(a, 10), b, c, d, 0, g, h, k)
			}
		};
		gw.i = gw.d;
		gw.u = gw.d;
		$v("activeSource", {
			defaults: {
				oM: "%d 条新动态",
				qn: "zu-main-feed-fresh-button",
				uX: z.p
			},
			init: function(a) {
				this.data = [];
				this.button = this.Yq();
				z.dg(this.button, a.m());
				this.v().g(this.button, "click", function() {
					a.render(this.data, 0);
					this.setData([])
				});
				var b = this
					, c = this.options.source(function(a) {
					a && a.length && b.setData(a.concat(b.data))
				}, function() {
					return b.data
				});
				if (!c || !z.ta(c.H))
					throw Error("Source must return a disposable object.");
				this.lN = c
			},
			setData: function(a) {
				this.data = a;
				this.vR()
			},
			vR: function() {
				var a =
					this.data.length;
				z.wg(this.button, z.fw(this.options.oM, a));
				z.Q(this.button, !!a)
			},
			Yq: function() {
				return z.M("a", {
					href: "javascript:;",
					style: "display:none",
					"class": this.options.qn
				})
			},
			H: function() {
				Zv.prototype.H.call(this);
				hd(this.lN);
				this.options = null ;
				this.button && (z.N(this.button),
					this.button = null )
			}
		});
		$v("autoload", {
			defaults: {
				YC: !0,
				viewport: window,
				tX: function() {
					return !0
				}
			},
			init: function(a) {
				if (a.mf() && (!this.options.YC || z.X.qb())) {
					var b = this.options.viewport
						, c = new sk(b);
					z.fd(this, c);
					uk(c, this, function(c) {
						return Li(a.mf()) ? 400 >= (pg(b) ? a.mf().getBoundingClientRect().top - c.height : b.scrollHeight - b.scrollTop - c.height) : !1
					});
					this.v().g(a, "complete", this.H).g(a, "next", function() {
						this.enable()
					});
					this.enable()
				}
			},
			enable: function() {
				this.v().Aa(this, "nearbottom", function() {
					this.view.Zl()
				})
			}
		});
		$v("childConstructor", {
			defaults: {
				el: null ,
				factory: null
			},
			init: function(a) {
				z.ta(this.options.el) && z.dw(a, this.NM, this);
				z.ta(this.options.factory) && z.dw(a, this.dT, this)
			},
			NM: function(a) {
				var b = new this.options.el;
				this.view.M(b);
				b.w(a)
			},
			dT: function(a) {
				var b = this.options.factory(a);
				this.view.M(b);
				b.w(a)
			}
		});
		$v("dataPagingSource", {
			defaults: {
				wD: !0
			},
			init: function(a) {
				var b = (0,
					window.$)(a.m()).data("paging").next;
				b || ew(a);
				a.source = function() {
					return window.$.get(b).then(function(a) {
						b = a.paging.next;
						return {
							results: a.htmls,
							next: !!b
						}
					})
				}
			}
		});
		$v("expandLimit", {
			defaults: {
				SU: 3
			},
			init: function(a) {
				z.X.qb() || this.v().g(a, "beforeloadnext", function() {
					var a = new vm;
					a.Ud = "expand";
					a.show();
					return !1
				})
			}
		});
		$v("locationSource", {
			defaults: {
				ft: 20,
				param: null ,
				It: !1,
				offset: function(a) {
					return a.length
				}
			},
			init: function(a) {
				function b(a) {
					return {
						start: c.It ? z.Hb(a).id.split("-")[1] : 0,
						offset: c.offset(a)
					}
				}
				var c = this.options
					, d = c.url || window.location.href
					, f = a.jb().length;
				(!f || f < c.ft) && ew(a);
				a.source = function() {
					return window.$.post(d, (c.param || b)(a.jb())).then(function(b) {
						if (!b.r) {
							b = b.msg;
							var d = b[0];
							sa(d) && d < c.ft && ew(a);
							return {
								results: b[1]
							}
						}
					})
				}
			}
		});
		$v("nodeSource", {
			defaults: {
				wD: !0
			},
			init: function(a) {
				var b = (0,
					window.$)(a.m()).data("init");
				if (b) {
					var c = "/node/" + b.nodename
						, d = b.params
						, f = d.offset || 0
						, b = d.limit
						, g = d.pagesize;
					this.options.wD && b && a.jb().length < b && ew(a);
					a.source = function() {
						return window.$.post(c, {
							method: "next",
							params: window.$.extend(d, {
								offset: f + a.jb().length
							})
						}).then(function(a) {
							var b = !0;
							g && !a.r && a.msg.length < g && (b = !1);
							return !a.r && {
									results: a.msg,
									next: b
								}
						})
					}
				}
			}
		});
		$v("shortcut", {
			defaults: {
				items: "\x3ediv"
			},
			init: function(a) {
				a.jb().length && (this.Qo = new zu(this.options),
					this.Qo.w(a.m()),
					this.v().g(this.Qo, "action", function(b) {
						b.data.index >= b.data.size && a.mf() && Li(a.mf()) && a.mf().click()
					}))
			},
			H: function() {
				Zv.prototype.H.call(this);
				this.Qo && (this.Qo.H(),
					this.Qo = null )
			}
		});
		z.v(z.hw, z.cw);
		z.v(iw, Pk);
		z.ma(iw);
		iw.prototype.T = function() {
			return "goog-menuheader"
		}
		;
		z.v(jw, Yk);
		z.Wk("goog-menuheader", function() {
			return new jw(null )
		});
		z.v(kw, Pk);
		z.ma(kw);
		z.e = kw.prototype;
		z.e.lf = function() {
			return "menuitem"
		}
		;
		z.e.B = function(a) {
			var b = a.L().B("DIV", this.Wf(a).join(" "), mw(this, a.Va(), a.L()));
			ow(this, a, b, Sk(a, 8) || Sk(a, 16));
			return b
		}
		;
		z.e.X = function(a) {
			return a && a.firstChild
		}
		;
		z.e.w = function(a, b) {
			var c = z.kg(b)
				, d = lw(this, 2);
			c && z.Th(c, d) || b.appendChild(mw(this, b.childNodes, a.L()));
			z.Th(b, "goog-option") && (a.Ap(!0),
				this.Ap(a, b, !0));
			return kw.o.w.call(this, a, b)
		}
		;
		z.e.ka = function(a, b) {
			var c = this.X(a)
				, d = nw(this, a) ? c.firstChild : null ;
			kw.o.ka.call(this, a, b);
			d && !nw(this, a) && c.insertBefore(d, c.firstChild || null )
		}
		;
		z.e.zi = function(a, b, c) {
			a && b && ow(this, a, b, c)
		}
		;
		z.e.Ap = function(a, b, c) {
			a && b && ow(this, a, b, c)
		}
		;
		z.e.Vn = function(a) {
			switch (a) {
				case 2:
					return lw(this, 0);
				case 16:
				case 8:
					return "goog-option-selected";
				default:
					return kw.o.Vn.call(this, a)
			}
		}
		;
		z.e.fs = function(a) {
			var b = lw(this, 0);
			switch (a) {
				case "goog-option-selected":
					return 16;
				case b:
					return 2;
				default:
					return kw.o.fs.call(this, a)
			}
		}
		;
		z.e.T = function() {
			return "goog-menuitem"
		}
		;
		z.v(z.pw, Yk);
		z.e = z.pw.prototype;
		z.e.W = function() {
			var a = this.nz;
			return null  != a ? a : this.Ig()
		}
		;
		z.e.Fa = function(a) {
			this.nz = a
		}
		;
		z.e.Ub = function(a, b) {
			z.pw.o.Ub.call(this, a, b);
			switch (a) {
				case 8:
					this.sf() && !b && this.Hc(!1);
					var c = this.m();
					c && this.N.zi(this, c, b);
					break;
				case 16:
					(c = this.m()) && this.N.Ap(this, c, b)
			}
		}
		;
		z.e.zi = function(a) {
			this.Ub(8, a)
		}
		;
		z.e.Ap = function(a) {
			this.Ub(16, a)
		}
		;
		z.e.Ig = function() {
			var a = this.Va();
			return z.oa(a) ? (a = z.Kb(a, function(a) {
				return z.og(a) && (z.Th(a, "goog-menuitem-accel") || z.Th(a, "goog-menuitem-mnemonic-separator")) ? "" : z.Hg(a)
			}).join(""),
				Sa(a)) : z.pw.o.Ig.call(this)
		}
		;
		z.e.rf = function(a) {
			var b = this.getParent();
			if (b) {
				var c = b.YH;
				b.YH = null ;
				if (b = c && sa(a.clientX))
					b = new Ff(a.clientX,a.clientY),
						b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
				if (b)
					return
			}
			z.pw.o.rf.call(this, a)
		}
		;
		z.e.qf = function(a) {
			return a.keyCode == this.mz && this.Od(a) ? !0 : z.pw.o.qf.call(this, a)
		}
		;
		z.e.RN = function() {
			return this.mz
		}
		;
		z.Wk("goog-menuitem", function() {
			return new z.pw(null )
		});
		z.pw.prototype.$h = function() {
			return Sk(this, 16) ? "menuitemcheckbox" : Sk(this, 8) ? "menuitemradio" : z.pw.o.$h.call(this)
		}
		;
		z.pw.prototype.getParent = function() {
			return Yk.prototype.getParent.call(this)
		}
		;
		z.pw.prototype.Zh = function() {
			return Yk.prototype.Zh.call(this)
		}
		;
		z.v(qw, Pk);
		z.ma(qw);
		qw.prototype.B = function(a) {
			return a.L().B("DIV", this.T())
		}
		;
		qw.prototype.w = function(a, b) {
			b.id && jj(a, b.id);
			if ("HR" == b.tagName) {
				var c = b;
				b = this.B(a);
				z.dg(b, c);
				z.N(c)
			} else
				z.Uh(b, this.T());
			return b
		}
		;
		qw.prototype.ka = function() {}
		;
		qw.prototype.T = function() {
			return "goog-menuseparator"
		}
		;
		z.v(z.rw, Yk);
		z.rw.prototype.D = function() {
			z.rw.o.D.call(this);
			Nh(this.m(), "separator")
		}
		;
		z.Wk("goog-menuseparator", function() {
			return new z.rw
		});
		z.v(sw, bo);
		z.ma(sw);
		z.e = sw.prototype;
		z.e.Ob = function(a) {
			return "UL" == a.tagName || sw.o.Ob.call(this, a)
		}
		;
		z.e.Xn = function(a) {
			return "HR" == a.tagName ? new z.rw : sw.o.Xn.call(this, a)
		}
		;
		z.e.Lf = function(a, b) {
			return z.qg(a.m(), b)
		}
		;
		z.e.T = function() {
			return "goog-menu"
		}
		;
		z.e.Ge = function(a) {
			sw.o.Ge.call(this, a);
			P(a.m(), "haspopup", "true")
		}
		;
		z.v(z.tw, z.rw);
		z.Wk("goog-menuseparator", function() {
			return new z.rw
		});
		z.v(z.uw, z.fo);
		z.e = z.uw.prototype;
		z.e.bn = !0;
		z.e.FL = !1;
		z.e.T = function() {
			return this.N.T()
		}
		;
		z.e.Lf = function(a) {
			if (this.N.Lf(this, a))
				return !0;
			for (var b = 0, c = mj(this); b < c; b++) {
				var d = nj(this, b);
				if ("function" == typeof d.Lf && d.Lf(a))
					return !0
			}
			return !1
		}
		;
		z.e.Ca = function(a) {
			this.M(a, !0)
		}
		;
		z.e.Qi = function(a, b) {
			this.Mk(a, b, !0)
		}
		;
		z.e.removeItem = function(a) {
			(a = this.removeChild(a, !0)) && a.H()
		}
		;
		z.e.Yh = function(a) {
			return nj(this, a)
		}
		;
		z.e.Cl = function() {
			return mj(this)
		}
		;
		z.e.jb = function() {
			var a = [];
			z.oj(this, function(b) {
				a.push(b)
			});
			return a
		}
		;
		z.e.setPosition = function(a, b) {
			var c = this.U();
			c || z.Q(this.m(), !0);
			Ei(this.m(), a, b);
			c || z.Q(this.m(), !1)
		}
		;
		z.e.G = function(a, b, c) {
			(b = z.uw.o.G.call(this, a, b)) && a && this.ya && this.bn && this.Yb().focus();
			this.YH = a && c && sa(c.clientX) ? new Ff(c.clientX,c.clientY) : null ;
			return b
		}
		;
		z.e.Sx = function(a) {
			this.bn && this.Yb().focus();
			return z.uw.o.Sx.call(this, a)
		}
		;
		z.e.qD = function(a) {
			return (this.FL || a.isEnabled()) && a.U() && Sk(a, 2)
		}
		;
		z.e.ia = function(a) {
			var b = this.N, c;
			c = this.L();
			c = z.Nf(c.La, "DIV", b.T() + "-content", a);
			for (var d = c.length, f = 0; f < d; f++)
				eo(b, this, c[f]);
			z.uw.o.ia.call(this, a)
		}
		;
		z.e.qf = function(a) {
			var b = z.uw.o.qf.call(this, a);
			b || z.oj(this, function(c) {
				!b && c.RN && c.mz == a.keyCode && (this.isEnabled() && this.Jc(c),
					b = c.Zb(a))
			}, this);
			return b
		}
		;
		z.e.tb = function(a) {
			z.uw.o.tb.call(this, a);
			(a = nj(this, a)) && zi(a.m(), this.m())
		}
		;
		z.v(z.ww, z.Pu);
		z.ww.prototype.Zn = function() {
			return this.Ho
		}
		;
		z.ww.prototype.Am = function(a) {
			this.Ho = a
		}
		;
		z.ww.prototype.ea = function(a, b, c, d) {
			var f = z.cp(this.element, this.cf, a, b, null , c, 10, d, this.Pz);
			if (f & 496) {
				var g = xw(f, this.cf);
				b = xw(f, b);
				f = z.cp(this.element, g, a, b, null , c, 10, d, this.Pz);
				f & 496 && (g = xw(f, g),
					b = xw(f, b),
					z.cp(this.element, g, a, b, null , c, this.Zn(), d, this.Pz))
			}
		}
		;
		z.v(yw, z.ww);
		z.v(zw, z.Vk);
		z.ma(zw);
		z.e = zw.prototype;
		z.e.B = function(a) {
			var b = {
				"class": "goog-inline-block " + this.Wf(a).join(" ")
			}
				, b = a.L().B("DIV", b, this.Yi(a.Va(), a.L()));
			this.ud(b, a.Gl());
			return b
		}
		;
		z.e.lf = function() {
			return "button"
		}
		;
		z.e.X = function(a) {
			return a && a.firstChild && a.firstChild.firstChild
		}
		;
		z.e.Yi = function(a, b) {
			return b.B("DIV", "goog-inline-block " + (this.T() + "-outer-box"), b.B("DIV", "goog-inline-block " + (this.T() + "-inner-box"), a))
		}
		;
		z.e.Ob = function(a) {
			return "DIV" == a.tagName
		}
		;
		z.e.w = function(a, b) {
			Aw(b, !0);
			Aw(b, !1);
			var c;
			a: {
				c = a.L().hF(b);
				var d = this.T() + "-outer-box";
				if (c && z.Th(c, d) && (c = a.L().hF(c),
						d = this.T() + "-inner-box",
					c && z.Th(c, d))) {
					c = !0;
					break a
				}
				c = !1
			}
			c || b.appendChild(this.Yi(b.childNodes, a.L()));
			Vh(b, ["goog-inline-block", this.T()]);
			return zw.o.w.call(this, a, b)
		}
		;
		z.e.T = function() {
			return "goog-custom-button"
		}
		;
		z.v(Bw, zw);
		z.ma(Bw);
		z.e = Bw.prototype;
		z.e.X = function(a) {
			return Bw.o.X.call(this, a && a.firstChild)
		}
		;
		z.e.w = function(a, b) {
			var c = z.Mf("*", "goog-menu", b)[0];
			if (c) {
				z.Q(c, !1);
				z.Kf(c).body.appendChild(c);
				var d = new z.uw;
				d.w(c);
				a.lh(d)
			}
			return Bw.o.w.call(this, a, b)
		}
		;
		z.e.Yi = function(a, b) {
			return Bw.o.Yi.call(this, [this.createCaption(a, b), b.B("DIV", "goog-inline-block " + (this.T() + "-dropdown"), " ")], b)
		}
		;
		z.e.createCaption = function(a, b) {
			return Cw(a, this.T(), b)
		}
		;
		z.e.T = function() {
			return "goog-menu-button"
		}
		;
		z.v(z.Dw, z.el);
		z.e = z.Dw.prototype;
		z.e.Ts = !1;
		z.e.oi = !1;
		z.e.ZT = !1;
		z.e.D = function() {
			z.Dw.o.D.call(this);
			Iw(this, !0);
			this.ma && Hw(this, this.ma, !0);
			P(this.h, "haspopup", !!this.ma)
		}
		;
		z.e.Db = function() {
			z.Dw.o.Db.call(this);
			Iw(this, !1);
			if (this.ma) {
				this.Ab(!1);
				this.ma.Db();
				Hw(this, this.ma, !1);
				var a = this.ma.m();
				a && z.N(a)
			}
		}
		;
		z.e.C = function() {
			z.Dw.o.C.call(this);
			this.ma && (this.ma.H(),
				delete this.ma);
			delete this.US;
			this.na.H()
		}
		;
		z.e.ke = function(a) {
			z.Dw.o.ke.call(this, a);
			this.Rb() && (this.Ab(!this.rb(), a),
			this.ma && (a = this.rb(),
				this.ma.xf = a))
		}
		;
		z.e.rf = function(a) {
			z.Dw.o.rf.call(this, a);
			this.ma && !this.Rb() && (this.ma.xf = !1)
		}
		;
		z.e.Od = function() {
			this.setActive(!1);
			return !0
		}
		;
		z.e.mO = function(a) {
			this.ma && this.ma.U() && !this.Lf(a.target) && this.Ab(!1)
		}
		;
		z.e.Lf = function(a) {
			return a && z.qg(this.m(), a) || this.ma && this.ma.Lf(a) || !1
		}
		;
		z.e.qf = function(a) {
			if (32 == a.keyCode) {
				if (a.preventDefault(),
					"keyup" != a.type)
					return !0
			} else if ("key" != a.type)
				return !1;
			if (this.ma && this.ma.U()) {
				var b = 13 == a.keyCode || 32 == a.keyCode
					, c = this.ma.Zb(a);
				return 27 == a.keyCode || b ? (this.Ab(!1),
					!0) : c
			}
			return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Ab(!0, a),
				!0) : !1
		}
		;
		z.e.jo = function() {
			this.Ab(!1)
		}
		;
		z.e.PO = function() {
			this.Rb() || this.Ab(!1)
		}
		;
		z.e.Vc = function(a) {
			this.Ts || this.Ab(!1);
			z.Dw.o.Vc.call(this, a)
		}
		;
		z.e.Ta = function() {
			this.ma || this.lh(new z.uw(this.L(),this.PQ));
			return this.ma || null
		}
		;
		z.e.lh = function(a) {
			var b = this.ma;
			if (a != b && (b && (this.Ab(!1),
				this.ya && Hw(this, b, !1),
					delete this.ma),
				this.ya && P(this.h, "haspopup", !!a),
					a)) {
				this.ma = a;
				kj(a, this);
				a.G(!1);
				var c = this.Ts;
				(a.bn = c) && a.Te(!0);
				this.ya && Hw(this, a, !0)
			}
			return b
		}
		;
		z.e.Ca = function(a) {
			this.Ta().M(a, !0)
		}
		;
		z.e.Qi = function(a, b) {
			this.Ta().Mk(a, b, !0)
		}
		;
		z.e.removeItem = function(a) {
			(a = this.Ta().removeChild(a, !0)) && a.H()
		}
		;
		z.e.Yh = function(a) {
			return this.ma ? nj(this.ma, a) : null
		}
		;
		z.e.Cl = function() {
			return this.ma ? mj(this.ma) : 0
		}
		;
		z.e.G = function(a, b) {
			var c = z.Dw.o.G.call(this, a, b);
			c && !this.U() && this.Ab(!1);
			return c
		}
		;
		z.e.Xa = function(a) {
			z.Dw.o.Xa.call(this, a);
			this.isEnabled() || this.Ab(!1)
		}
		;
		z.e.NA = function() {
			this.Ab(!0)
		}
		;
		z.e.Ab = function(a, b) {
			z.Dw.o.Ab.call(this, a);
			if (this.ma && !!(this.O & 64) == a) {
				if (a) {
					if (!this.ma.ya)
						if (this.oi) {
							var c = mg(this.m());
							c ? this.ma.lp(c.parentNode, c) : this.ma.render(this.m().parentNode)
						} else
							this.ma.render();
					this.fK = xi(this.m());
					this.oD = Ji(this.m());
					Gw(this);
					c = !!b && (13 == b.keyCode || 32 == b.keyCode);
					b && (40 == b.keyCode || 38 == b.keyCode) || c && this.ZT ? z.jo(this.ma) : this.ma.tb(-1)
				} else {
					this.setActive(!1);
					this.ma.xf = !1;
					if (c = this.m())
						P(c, "activedescendant", ""),
							P(c, "owns", "");
					null  != this.Ht && (this.Ht = void 0,
					(c = this.ma.m()) && Fi(c, "", ""))
				}
				this.ma.G(a, !1, b);
				if (!this.Gd) {
					var c = this.v()
						, d = a ? c.g : c.pa;
					d.call(c, this.L().wa(), "mousedown", this.mO, !0);
					this.Ts && d.call(c, this.ma, "blur", this.PO);
					d.call(c, this.na, "tick", this.im);
					a ? this.na.start() : this.na.stop()
				}
			}
			this.ma && this.ma.m() && this.ma.h.removeAttribute("aria-hidden")
		}
		;
		z.e.im = function() {
			var a = Ji(this.m()), b = xi(this.m()), c;
			c = this.oD;
			(c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.fK,
				c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
			c && (this.oD = a,
				this.fK = b,
				Gw(this))
		}
		;
		z.e.Wx = function(a) {
			(a = a.target.m()) && Jw(this, a)
		}
		;
		z.e.HO = function(a) {
			Sk(this, 32) && this.Yb() && this.ma && this.ma.U() && a.stopPropagation()
		}
		;
		z.e.cy = function() {
			if (!io(this.ma)) {
				var a = this.m();
				P(a, "activedescendant", "");
				P(a, "owns", "")
			}
		}
		;
		z.e.Qx = function(a) {
			if (this.rb() && a.target instanceof z.pw) {
				a = a.target;
				var b = a.m();
				a.U() && a.O & 2 && null  != b && Jw(this, b)
			}
		}
		;
		z.Wk("goog-menu-button", function() {
			return new z.Dw(null )
		});
		z.v(Kw, z.G);
		z.e = Kw.prototype;
		z.e.zC = {
			question: "问题",
			comment: "评论",
			answer: "回答",
			favlist: "收藏",
			member: "用户",
			message: "私信",
			image: "图片",
			video: "视频",
			post: "文章"
		};
		z.e.yw = "report-dialog";
		z.e.WG = "loading";
		z.e.XE = '\x3cform\x3e\x3cdiv class\x3d"header"\x3e\x3c% if (headnote) { %\x3e\x3cspan class\x3d"headnote"\x3e\x3c%\x3dheadnote%\x3e\x3c/span\x3e\x3c% } %\x3e\x3cspan class\x3d"error-container"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"options clearfix"\x3e\x3c% each(options, function(option) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput value\x3d"\x3c%\x3doption.value%\x3e" name\x3d"reason" type\x3d"radio"\x3e\x3c%\x3doption.label%\x3e\x3c/label\x3e\x3c% if (option.description) { %\x3e\x3cdiv class\x3d"description visible-if-checked"\x3e\x3c%\x3doption.description%\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.options) { %\x3e\x3cul class\x3d"group-options clearfix visible-if-checked"\x3e\x3c% each(option.options, function(opt) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput required data-description\x3d"\x3c%\x3dopt.description%\x3e" value\x3d"\x3c%\x3dopt.value%\x3e" name\x3d"reason-\x3c%\x3doption.value%\x3e" type\x3d"radio"\x3e\x3c%\x3dopt.label%\x3e\x3c/label\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cdiv class\x3d"group-description visible-if-checked"\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.value \x3d\x3d 0) { %\x3e\x3cp class\x3d"input-container visible-if-checked"\x3e\x3cinput placeholder\x3d"请填写原因" type\x3d"text" name\x3d"detail" class\x3d"reason-text zg-form-text-input"\x3e\x3c/p\x3e\x3cp class\x3d"error-container visible-if-checked"\x3e\x3c/p\x3e\x3c% } %\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cp class\x3d"footnote"\x3e\x3c/p\x3e\x3c/form\x3e';
		z.e.xx = function() {
			return this.Ln
		}
		;
		z.e.Xk = function(a, b) {
			var c = new z.S;
			c.Bm(!0);
			c.Bf(!0);
			z.Ij(c, z.zj());
			c.addEventListener(z.Kj, this.lO, !1, this);
			z.fd(c, this);
			a && c.Ya(a);
			b && c.ka(b);
			c.G(!0);
			c.ea();
			z.T.add(c.m(), this.yw);
			return this.Ln = c
		}
		;
		z.e.lO = function(a) {
			if ("ok" === a.key)
				return (a = (0,
					window.$)("form", this.Ln.m()).valid()) && this.submit(),
					a
		}
		;
		z.e.open = function(a, b, c) {
			var d = this.Xk(this.eF(a), this.dw());
			z.T.add(d.m(), this.WG);
			this.lF(a).then((0,
				z.r)(function(f) {
				d.ka((0,
					z.ts)(this.XE, {
					each: z.x,
					options: f,
					headnote: c
				}));
				z.T.remove(d.m(), this.WG);
				d.ea();
				z.Qj(d, 450);
				this.xN = {
					type: a,
					id: b
				};
				this.Vk(f)
			}, this))
		}
		;
		z.e.AF = function() {}
		;
		z.e.Vk = function(a) {
			var b = this
				, c = (0,
				window.$)(this.Ln.m())
				, d = (0,
				window.$)("form", c)
				, f = (0,
				window.$)(".reason-text", c);
			c.on("change", ":radio", function(g) {
				g = (0,
					window.$)(g.target);
				c.find("li").removeClass("checked");
				g.parentsUntil(d, "li").addClass("checked");
				var h = this.value
					, k = z.Pb(a, function(a) {
					return h === String(a.value)
				});
				b.AF(k);
				k = "0" === h;
				f.toggle(k);
				k && f.placeholder();
				g.closest("li").find("ul, :text").length || d.valid()
			});
			c.find("ul ul").on("change", ":radio", function(a) {
				(0,
					window.$)(a.delegateTarget).parent().find(".group-description").text((0,
					window.$)(this).data("description"))
			});
			d.validate({
				rules: {
					reason: "required",
					detail: {
						rangelength: [2, 100],
						required: function() {
							return !!(0,
								window.$)("input[name\x3dreason]:checked", c).length
						}
					}
				},
				messages: {
					reason: "请选择理由",
					detail: "理由为 2-100 字"
				},
				errorLabelContainer: (0,
					window.$)(".error-container", d)
			})
		}
		;
		z.e.dw = function() {
			return '\x3cdiv class\x3d"loading"\x3e理由加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'
		}
		;
		z.v(z.Lw, z.R);
		var Mw = {
			question: "question_report",
			answer: "question_answer_report",
			post: "article_report",
			member: "member_report",
			comment: "comment_report",
			favlist: "favlist_report",
			message: "message_report"
		}
			, eG = (0,
			z.r)(Ql(function(a) {
			return window.$.getJSON(z.Na("/report/%s/options", a))
		}), z.t);
		z.Lw.prototype.submit = z.Lm(function(a) {
			Nw(this.type, this.id, a)
		}, !0);
		z.Lw.prototype.Em = z.Lm(function() {
			(new Rw(this.type,this.id)).open(this.type, this.id);
			z.W.Ha({
				type: "ga_click_report_box",
				data: {
					type: this.type
				}
			})
		}, !0);
		z.Lw.prototype.HP = function() {
			var a = this.eH
				, b = this.eH.Ta();
			this.v().g(b, "show", z.Lm(function() {
				z.W.Ha({
					type: "ga_click_report_box",
					data: {
						type: this.type
					}
				});
				this.ba({
					action: "click_report_[type]_start"
				})
			}, !0)).g(b, "action", this.Mx);
			return eG(this.type).then(function(c) {
				window.$.each(c, function(a, c) {
					var g = new z.pw(c.label,{
						value: c.value,
						options: c.options
					});
					b.Ca(g)
				});
				Gw(a);
				(0,
					window.$)(b.m()).addClass("report-menu")
			})
		}
		;
		var fG = {
			10001: "click_report_[type]advertisement",
			10002: "click_report_[type]unfriendly",
			10003: "click_report_[type]_illegal",
			10004: "click_report_[type]_politics",
			10020: "click_report_[type]_expire",
			10021: "click_report_[type]_advise_rewrite",
			0: "click_report_[type]_other"
		};
		z.Lw.prototype.Mx = function(a) {
			var b = a.target.W().value;
			a = a.target.W().options;
			var c = this.type;
			0 === b ? (a = new Rw(this.type,this.id),
				a.mb(this),
				a.Xk("请填写你的举报理由", '\x3cform\x3e\x3cp class\x3d"input-container"\x3e\x3ctextarea class\x3d"textarea" name\x3d"detail"\x3e\x3c/textarea\x3e\x3c/p\x3e\x3cp class\x3d"error-container"\x3e\x3c/p\x3e\x3cinput value\x3d"0" name\x3d"reason" type\x3d"hidden"\x3e\x3c/form\x3e'),
				a = (0,
					window.$)(a.xx().m()),
				a = (0,
					window.$)("form", a),
				a.validate({
					rules: {
						detail: {
							rangelength: [2,
								100],
							required: !0
						}
					},
					messages: {
						detail: "理由为 2-100 字"
					},
					errorLabelContainer: (0,
						window.$)(".error-container", a)
				})) : "member" === c && 10018 !== b ? (a = '\x3cform\x3e\x3cp class\x3d"input-container"\x3e\x3cinput placeholder\x3d"填写违规内容链接会更快被管理员处理" type\x3d"text" name\x3d"link" class\x3d"reason-text zg-form-text-input"\x3e\x3c/p\x3e\x3cp class\x3d"error-container"\x3e\x3c/p\x3e\x3cinput value\x3d"' + b + '" name\x3d"reason" type\x3d"hidden"\x3e\x3c/form\x3e',
				(new Rw(this.type,this.id)).Xk("请填写你的举报理由", a)) : "question" === c &&
			a ? Qw(this, a) : Nw(c, this.id, {
				reason: b
			});
			this.ba({
				action: fG[b]
			})
		}
		;
		z.Lw.prototype.ba = function(a) {
			var b;
			if ("comment" === this.type) {
				if (b = a.action.replace("[type]", {
						question_answer_comment_report: "answer_comment",
						question_comment_report: "question_comment"
					}[this.VL]),
						!b)
					return
			} else
				"favlist" === this.type && (b = a.action.replace("[type]", "collection"));
			this.dispatchEvent({
				type: "trackRequested",
				category: "report",
				action: b
			})
		}
		;
		z.v(Rw, Kw);
		Rw.prototype.lF = eG;
		Rw.prototype.submit = function() {
			var a = (0,
				window.$)((0,
				window.$)("form", this.Ln.m())[0]).serializeArray()
				, a = z.Lb(a, function(a, c) {
				c.value && (a[c.name] = c.value);
				return a
			}, {});
			Nw(this.type, this.id, a);
			this.dispatchEvent({
				type: "trackRequested",
				category: "report",
				action: "click_report_[type]_other_submit"
			})
		}
		;
		Rw.prototype.eF = function(a) {
			return z.Na("为什么举报这个%s？", this.zC[a] || "条目")
		}
		;
		z.v(z.Sw, z.R);
		z.e = z.Sw.prototype;
		z.e.KB = !Rj;
		z.e.IB = !Rj;
		z.e.xi = function(a) {
			this.Tg = a
		}
		;
		z.e.init = function() {
			this.$b = z.J("zh-load-more");
			this.w(this.Lr)
		}
		;
		z.e.D = function() {
			z.Sw.o.D.call(this);
			this.gn = 1;
			Xw(this);
			this.Ik = (0,
				window.$)(this.$b);
			this.$b && (Uw(this),
				this.v().g(this.$b, "click", function() {
					this.Qs = !0;
					this.Ki && "pending" === this.Ki.state() && 1 === this.gn ? (this.Ki.done((0,
						z.r)(this.$g, this)),
						this.OA = !0,
						z.Tw(this, !0)) : this.Gz()
				}),
			this.KB && (this.nB = new rk(this.Ez,100,this),
				this.v().g(window, "scroll", function() {
					this.nB.fire()
				})));
			Yw(this, this.jb())
		}
		;
		z.e.Zl = function() {
			z.Vw(this, !0)
		}
		;
		z.e.Ez = function() {
			var a = this.$b;
			a && Li(a) && 1E3 >= a.getBoundingClientRect().top - z.Rf().height && !(this.St || this.Ki && "pending" === this.Ki.state()) && (this.IB && (3 === this.gn ? (this.gn = 1,
				this.OA = !1) : (this.Qs = !1,
				this.gn++,
				this.OA = !0)),
				z.Vw(this))
		}
		;
		z.e.Gz = function() {
			this.KB && this.St ? (this.$g(this.St),
				this.St = null ) : (z.Tw(this, !0),
				z.Vw(this))
		}
		;
		z.e.lI = function(a) {
			return a
		}
		;
		z.e.$g = function(a) {
			if (a && !a.r) {
				var b = a.msg, c = b[0], d = b[1], f;
				2 < b.length && (f = b[2],
					this.$b.setAttribute("data-next", f));
				0 < c && (this.Mq(d),
					this.offset = this.tz ? this.tz(this.jb()) : this.offset + c);
				b = !0;
				b = this.ys ? this.ys(a) : !(-1 === f || 10 > c);
				z.Q(this.$b, b);
				z.Tw(this, !1);
				z.Ww(this)
			}
		}
		;
		z.e.jb = function() {
			return z.Of(this.Tg, this.h)
		}
		;
		z.e.iI = function(a) {
			return a.id.split("-")[1]
		}
		;
		z.e.Mq = function(a, b) {
			var c = z.oa(a) ? a.join("") : a
				, c = z.Zf(c + " ")
				, d = z.Of(this.Tg, c);
			Yw(this, d);
			"prepend" === b ? z.dg(c, this.h.firstChild) : this.h.appendChild(c);
			Xw(this)
		}
		;
		z.e.Yo = z.p;
		z.uC = function(a, b) {
			var c = []
				, d = [].slice
				, f = z.Xn(a, function() {
				c.length && (b(c),
					c = [])
			});
			return function() {
				c.push(d.call(arguments));
				f()
			}
		}(550, function(a) {
			z.X.qb() && (a = {
				items: JSON.stringify(a)
			},
				window.$.post("/lastread/touch", a))
		});
		var gG = /a(:(link|visited|active|hover))?/;
		ax.prototype.clone = function() {
			var a = new ax;
			a.jh = this.jh.concat();
			a.Kn = this.Kn;
			return a
		}
		;
		var hG = /(^|;|{)\s*color:([^;]+);/g
			, ex = {}
			, hx = {}
			, iG = {}
			, jG = "color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" ")
			, kG = "font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
		var lG;
		z.v(z.ix, z.G);
		z.e = z.ix.prototype;
		z.e.F = null ;
		z.e.ZL = !0;
		z.e.SJ = function() {
			this.F && (this.disable(this.F),
				this.F = null )
		}
		;
		z.e.enable = function(a) {
			this.F == a && (this.fc = !0)
		}
		;
		z.e.disable = function(a) {
			this.F == a && (this.fc = !1)
		}
		;
		z.e.isEnabled = function(a) {
			return this.F == a ? this.fc : !1
		}
		;
		z.e.Bq = z.mE;
		z.e.yG = z.mE;
		z.e.C = function() {
			this.F && this.SJ(this.F);
			z.ix.o.C.call(this)
		}
		;
		z.ox = z.qc({
			Xx: 1,
			IO: 2,
			rs: 3,
			wj: 4,
			ss: 5,
			execCommand: 6,
			queryCommandValue: 7,
			kI: 8,
			yM: 10,
			xM: 11
		});
		lG = {
			8: !0,
			10: !0,
			11: !0
		};
		z.ix.prototype.execCommand = function(a, b) {
			var c = this.yG(a);
			c || (z.B && z.Mx(this.F, !0, !0),
				this.F.Qh());
			try {
				var d = this.jf.apply(this, arguments)
			} finally {
				c || (this.F.ff(),
					z.Lx(this.F))
			}
			return d
		}
		;
		z.ix.prototype.Je = function() {
			return !1
		}
		;
		var px, sx;
		z.v(nx, z.G);
		nx.prototype.Ia = null ;
		nx.prototype.Fc = null ;
		px = "change";
		z.qx = "delayedchange";
		sx = {
			QV: "cvc",
			jW: "load",
			FW: "unload",
			IV: "beforechange",
			OV: px,
			SV: z.qx,
			JV: "beforefocus",
			VV: "focus",
			MV: "blur",
			LV: "beforetab",
			bW: "ifrsz",
			KV: "beforeselectionchange",
			sW: "selectionchange"
		};
		z.ux = 0;
		z.mG = null ;
		z.e = nx.prototype;
		z.e.Ng = !1;
		z.e.aK = !1;
		z.e.Tu = !1;
		z.e.m = function() {
			return this.Ia
		}
		;
		z.e.addListener = function(a, b, c, d) {
			var f = this.m();
			BF && f && this.pc() && (f = f.ownerDocument);
			d ? fe(this.gc, f, a, b, c, d) : this.gc.g(f, a, b, c)
		}
		;
		var tx = 15
			, rx = 250;
		nx.prototype.pc = z.Pw;
		nx.prototype.Bo = z.Pw;
		nx.prototype.jJ = z.mE;
		var yx = {
			46: !0,
			8: !0
		};
		z.C || (yx[9] = !0);
		var zx = {
			86: !0,
			88: !0
		};
		bu && !z.B && (yx[229] = !0);
		nx.prototype.mw = function() {
			this.gc && this.gc.removeAll();
			if ((Ot || Sj) && this.pc() && this.jJ()) {
				try {
					var a = this.eb.Ua();
					a.removeEventListener("keydown", this.mn, !1);
					a.removeEventListener("touchend", this.mn, !1)
				} catch (b) {}
				delete this.mn
			}
			if (z.li && this.pc()) {
				try {
					a = this.eb.Ua(),
						a.removeEventListener("focus", this.aw, !1),
						a.removeEventListener("blur", this.$v, !1)
				} catch (b) {}
				delete this.aw;
				delete this.$v
			}
			this.ye && this.ye.stop();
			this.Cr.stop()
		}
		;
		nx.prototype.C = function() {
			1 == this.Sj || this.wc();
			this.Fc && this.execCommand("clearlorem");
			this.Sj = z.ux;
			for (var a in this.Sb) {
				var b = this.Sb[a];
				b.Bq() || b.disable(this)
			}
			this.eb = this.Ia = null ;
			this.mw();
			this.ql && (z.Vd(this.ql),
				this.ql = null );
			this.km = null ;
			this.gc && (this.gc.H(),
				this.gc = null );
			for (; a = this.DV.pop(); )
				a.H();
			z.mG == this.id && (z.mG = null );
			for (var c in this.Sb)
				a = this.Sb[c],
				a.ZL && a.H();
			delete this.Sb;
			nx.o.C.call(this)
		}
		;
		var nG = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
		nx.prototype.KA = function() {
			if (yF || !this.pc())
				this.gc.g(this.m(), "DOMSubtreeModified", this.Yx);
			else {
				var a = this.eb.wa();
				this.gc.g(a, nG, this.Yx, !0);
				this.gc.g(a, "DOMAttrModified", (0,
					z.r)(this.rF, this, this.Yx), !0)
			}
		}
		;
		var Fx = {
			8: 1,
			9: 1,
			13: 1,
			33: 1,
			34: 1,
			35: 1,
			36: 1,
			37: 1,
			38: 1,
			39: 1,
			40: 1,
			46: 1
		}
			, Gx = {
			65: !0,
			86: !0,
			88: !0
		}
			, Ix = {
			8: 1,
			9: 1,
			13: 1,
			27: 1,
			33: 1,
			34: 1,
			37: 1,
			38: 1,
			39: 1,
			40: 1
		};
		z.e = nx.prototype;
		z.e.yo = function(a, b) {
			for (var c = this.Cj[a], d = Yb(arguments, 1), f = 0; f < c.length; ++f) {
				var g = c[f];
				if ((g.isEnabled(this) || lG[a]) && g[z.ox[a]].apply(g, d))
					return !0
			}
			return !1
		}
		;
		z.e.aQ = function(a, b) {
			for (var c = this.Cj[a], d = Yb(arguments, 1), f = 0; f < c.length; ++f) {
				var g = c[f];
				(g.isEnabled(this) || lG[a]) && g[z.ox[a]].apply(g, d)
			}
		}
		;
		z.e.Zt = function(a, b, c) {
			for (var d = this.Cj[a], f = Yb(arguments, 1), g = 0; g < d.length; ++g) {
				var h = d[g];
				if (h.isEnabled(this) || lG[a])
					f[0] = h[z.ox[a]].apply(h, f)
			}
			return f[0]
		}
		;
		z.e.pf = function(a) {
			z.Ad && 65 == a.keyCode && Dx(this, a);
			(z.B || Bx(this, a)) && !this.yo(1, a) && HF && Hx(this, a)
		}
		;
		z.e.JO = function(a) {
			if (z.B) {
				if (!Bx(this, a))
					return
			} else
				this.Lx = !0,
					this.Qh();
			this.yo(2, a) || HF || Hx(this, a)
		}
		;
		z.e.KO = function(a) {
			z.B || !this.Lx && !xx(a) || this.ho();
			this.yo(3, a);
			Dx(this, a)
		}
		;
		z.e.execCommand = function(a, b) {
			for (var c = arguments, d, f = this.Cj[6], g = 0; g < f.length; ++g) {
				var h = f[g];
				if (h.isEnabled(this) && h.Je(a)) {
					d = h.execCommand.apply(h, c);
					break
				}
			}
			return d
		}
		;
		z.e.queryCommandValue = function(a) {
			var b = this.wc() && this.vf;
			if (z.qa(a))
				return this.Ut(a, b);
			for (var c = {}, d = 0; d < a.length; d++)
				c[a[d]] = this.Ut(a[d], b);
			return c
		}
		;
		z.e.Ut = function(a, b) {
			for (var c = this.Cj[7], d = 0; d < c.length; ++d) {
				var f = c[d];
				if (f.isEnabled(this) && f.Je(a) && (b || f.Bq()))
					return f.queryCommandValue(a)
			}
			return b ? null  : !1
		}
		;
		z.e.rF = function(a, b) {
			if (!Ex(this, px)) {
				var c = b.hc;
				try {
					if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName)
						return
				} catch (d) {
					return
				}
				c.prevValue != c.newValue && a.call(this, c)
			}
		}
		;
		z.e.Yx = function(a) {
			Ex(this, px) || (a = a.PN ? a.hc : a,
			a.target.firebugIgnore || this.ye.start())
		}
		;
		z.e.os = function() {
			z.C && this.execCommand("clearlorem", !0);
			z.B && this.Lw();
			this.ff()
		}
		;
		z.e.aP = function() {
			var a = this.$I;
			this.$I = null ;
			z.Lx(this, void 0, a)
		}
		;
		z.e.Qh = function() {
			Ex(this, "beforechange") || this.dispatchEvent("beforechange")
		}
		;
		z.e.ff = function(a) {
			Ox(this, !0, a)
		}
		;
		z.e.ho = function() {
			Ex(this, px) || (this.ye && this.ye.stop(),
			Ex(this, z.qx) || this.Cr.start())
		}
		;
		z.e.tE = function() {
			Ex(this, z.qx) || (this.Cr.stop(),
				this.dispatchEvent(z.qx))
		}
		;
		z.e.Lw = function() {
			this.sE();
			this.uE()
		}
		;
		z.e.sE = function() {
			Ex(this, "beforefocus") || (this.execCommand("clearlorem", !0),
				this.dispatchEvent("beforefocus"))
		}
		;
		z.e.uE = function() {
			if (!Ex(this, "focus")) {
				z.mG = this.id;
				this.vf = !0;
				this.dispatchEvent("focus");
				if (z.B) {
					var a = this.m()
						, b = z.Kx(this);
					if (b) {
						var c = z.nq(b);
						0 != z.oq(b) || c && c != a && "BODY" != c.tagName || z.tr(a)
					}
				}
				!zF && this.pc() && this.eb.Ua().parent.getSelection().removeAllRanges()
			}
		}
		;
		z.e.Fr = function() {
			Ex(this, "blur") || (z.mG == this.id && (z.mG = null ),
				this.vf = !1,
				this.dispatchEvent("blur"))
		}
		;
		z.e.Il = function(a) {
			z.mG = this.id;
			if (z.C) {
				var b = a.target;
				b && "A" == b.tagName && a.ctrlKey && this.km.Ua().open(b.href)
			}
			this.Tu = !0
		}
		;
		z.e.Rx = function() {
			this.Tu = !1
		}
		;
		z.e.us = function(a) {
			if (!this.aK || this.Tu)
				this.Tu = !1,
					this.dispatchEvent("beforeselectionchange"),
					z.Lx(this, a),
				z.C && (this.$I = a.target,
					this.aJ.start())
		}
		;
		z.e.xl = function() {
			if (this.queryCommandValue("usinglorem"))
				return " ";
			if (!this.wc())
				return this.Fc.innerHTML;
			var a = this.m()
				, b = a.cloneNode(!1)
				, a = a.innerHTML;
			z.C && a.match(/^\s*<script/i) && (a = " " + a);
			b.innerHTML = a;
			this.aQ(11, b);
			return this.Zt(10, b.innerHTML)
		}
		;
		z.e.Qd = function(a, b, c, d) {
			if (1 != this.Sj) {
				d && this.execCommand("clearlorem");
				b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
				c && z.Mx(this, !1, !0);
				a = b;
				if (b = this.m()) {
					if (this.pc() && z.D)
						for (var f = b.ownerDocument.getElementsByTagName("HEAD"), g = f.length - 1; 1 <= g; --g)
							f[g].parentNode.removeChild(f[g])
				} else
					b = this.Fc;
				b && Cx(this, a, b);
				d && this.execCommand("updatelorem");
				this.wc() && (c ? (z.B && Qm(this.ye),
					Ox(this)) : this.ff())
			}
		}
		;
		z.e.zB = function() {
			var a = this.eb.wa();
			a.designMode = "on";
			z.EF && a.execCommand("styleWithCSS", !1, !1)
		}
		;
		z.e.jG = function() {
			this.dl && Rx(this) && Mi(this.dl, this.m())
		}
		;
		z.e.wc = function() {
			return 2 == this.Sj
		}
		;
		z.e.focus = function() {
			if (!z.mx && this.pc())
				this.eb.Ua().focus();
			else {
				if (z.li)
					var a = this.Ok.pageXOffset
						, b = this.Ok.pageYOffset;
				this.m().focus();
				z.li && this.Ok.scrollTo(a, b)
			}
		}
		;
		z.e.Vf = function() {
			!z.wF && z.B || z.Qx(this);
			this.focus()
		}
		;
		z.e.Me = function(a) {
			this.Sj = 1;
			var b = this.Fc;
			this.nodeName = b.nodeName;
			this.cssText = b.style.cssText;
			z.Uh(b, "editable");
			this.ez(a)
		}
		;
		z.e.ez = function(a) {
			var b = this.Fc;
			if (b) {
				var b = b.innerHTML
					, c = {}
					, b = this.Zt(8, b, c)
					, d = this.km.B("IFRAME", this.jF());
				if (Rx(this)) {
					var f = (0,
						z.r)(this.YF, this, d, b, c);
					this.ql = z.F(d, "load", f, !0);
					a && (d.src = a)
				}
				this.XC(d);
				Rx(this) || this.YF(d, b, c)
			}
		}
		;
		z.e.ps = function() {
			z.C && z.ir(this.eb.Ua());
			z.mG != this.id && this.execCommand("updatelorem");
			if ((Ot || Sj) && this.pc() && this.jJ()) {
				var a = this.eb.Ua();
				this.mn = (0,
					z.r)(a.focus, a);
				a.addEventListener("keydown", this.mn, !1);
				a.addEventListener("touchend", this.mn, !1)
			}
			z.li && this.pc() ? (this.aw = (0,
				z.r)(this.Lw, this),
				this.$v = (0,
					z.r)(this.Fr, this),
				a = this.eb.Ua(),
				a.addEventListener("focus", this.aw, !1),
				a.addEventListener("blur", this.$v, !1)) : (GF ? (this.addListener("focus", this.uE),
				this.addListener(rE, this.sE)) : this.addListener("focus",
				this.Lw),
				this.addListener("blur", this.Fr, z.B));
			z.B ? this.KA() : (this.addListener(["beforecut", "beforepaste", "drop", "dragend"], this.Qh),
				this.addListener(["cut", "paste"], Cb(this.ff)),
				this.addListener("drop", this.os));
			this.addListener(z.D ? "dragend" : "dragdrop", this.os);
			this.addListener("keydown", this.pf);
			this.addListener("keypress", this.JO);
			this.addListener("keyup", this.KO);
			this.aJ = new Pm(this.aP,250,this);
			this.JN && this.addListener("click", Px);
			this.addListener("mousedown", this.Il);
			this.aK ? (this.gc.g(this.eb.wa(),
				"mouseup", this.us),
				this.addListener("dragstart", this.Rx)) : this.addListener("mouseup", this.us);
			this.jG();
			Ox(this);
			this.dispatchEvent("load");
			for (var b in this.Sb)
				this.Sb[b].enable(this)
		}
		;
		z.e.XC = function(a) {
			var b = this.Fc;
			a.className = b.className;
			a.id = b.id;
			z.gg(a, b)
		}
		;
		z.e.Ax = function(a) {
			var b = Og(z.I(this.Fc));
			return new jx(this.id,b,!1,!1,a)
		}
		;
		z.e.oK = function(a, b, c) {
			c = this.Ax(c);
			Rx(this) ? (a = (a.contentDocument || a.contentWindow.document).body,
			z.mx && (a.contentEditable = !0),
				a.className = "editable",
				a.setAttribute("g_editable", !0),
				a.hideFocus = !0,
				a.id = c.OE,
				z.ii(a, c.ex),
				a.innerHTML = b) : lx(c, b, new kx(this.m(),this.dl), a)
		}
		;
		z.e.YF = function(a, b, c) {
			this.ql && (z.Vd(this.ql),
				this.ql = null );
			a.allowTransparency = "true";
			this.oK(a, b, c);
			Ax(this, (a.contentDocument || a.contentWindow.document).body);
			!z.mx && this.pc() && this.zB();
			this.ps()
		}
		;
		z.e.jF = function() {
			var a = "padding:0;" + this.Fc.style.cssText;
			z.Ma(a, ";") || (a += ";");
			a += "background-color:white;";
			z.C && (a += "overflow:visible;");
			return {
				frameBorder: 0,
				style: a
			}
		}
		;
		var oG;
		z.v(z.Sx, nx);
		z.e = z.Sx.prototype;
		z.e.oG = !1;
		z.e.fQ = !1;
		z.e.Bo = function() {
			return this.oG
		}
		;
		z.e.BF = function() {
			Ex(this, px) || Tx(this)
		}
		;
		z.e.WA = function() {
			if (this.Kp ? 0 : this.Kp = !0) {
				var a = !1
					, b = Jx(this);
				if (b) {
					var c, d = Jx(this), f = d.contentDocument.body;
					c = f.parentNode;
					0 === (0,
						window.parseInt)(mi(d, "height"), 10) && z.ii(d, "height", "1px");
					Og(z.I(f)) ? d = c.offsetHeight : (d = c.scrollHeight,
					c.clientHeight != c.offsetHeight && (d += oG || (oG = Wi())));
					c = d;
					this.SQ && (c = Math.max(c, this.SQ));
					(0,
						window.parseInt)(mi(b, "height"), 10) != c && (b.style.height = c + "px",
						a = !0)
				}
				this.Kp = !1;
				a && this.dispatchEvent("ifrsz")
			}
		}
		;
		z.e.iy = "";
		var pG = !1;
		z.e = z.Sx.prototype;
		z.e.pc = function() {
			return !z.mx
		}
		;
		z.e.KA = function() {
			z.Sx.o.KA.call(this);
			if (this.pc()) {
				var a = Jx(this).ownerDocument;
				this.gc.g(a, nG, this.BF, !0);
				this.zQ = z.Td(this.eb.Ua(), "load", this.WA, !0, this);
				this.gc.g(a, "DOMAttrModified", (0,
					z.r)(this.rF, this, this.BF), !0)
			}
		}
		;
		z.e.ho = function() {
			Ex(this, px) || (z.Sx.o.ho.call(this),
			this.pc() && this.WA())
		}
		;
		z.e.Fr = function() {
			if (!Ex(this, "blur") && (z.Sx.o.Fr.call(this),
				!z.mx && !zF)) {
				var a = this.eb.Ua()
					, b = !1;
				z.Vd(this.OG);
				this.OG = z.Td(a.document.body, "dragover", function() {
					b = !0
				});
				z.t.setTimeout((0,
					z.r)(function() {
					if (!b && this.eb) {
						var a = z.Kx(this)
							, d = this.eb.Ua();
						z.ir(d);
						a && (a.collapse(!0),
							a.select())
					}
				}, this), 0)
			}
		}
		;
		z.e.zB = function() {
			z.Sx.o.zB.call(this);
			var a = this.eb.wa();
			a.execCommand("enableInlineTableEditing", !1, "false");
			a.execCommand("enableObjectResizing", !1, "false")
		}
		;
		z.e.jG = function() {
			this.pc() || pG || (this.dl && Mi(this.dl, this.m()),
				pG = !0)
		}
		;
		z.e.ez = function(a) {
			if (this.pc())
				z.Sx.o.ez.call(this, a);
			else if (a = this.Fc)
				Ax(this, a),
					a.contentEditable = !0,
					Cx(this, a.innerHTML, a),
					this.ps()
		}
		;
		z.e.ps = function() {
			if (this.pc()) {
				var a = this;
				z.t.setTimeout(function() {
					Ux(a)
				}, 0)
			}
			z.Sx.o.ps.call(this)
		}
		;
		z.e.jF = function() {
			return {
				frameBorder: 0,
				style: "padding:0;"
			}
		}
		;
		z.e.XC = function(a) {
			if (!this.fQ) {
				var b = this.Fc;
				b && (this.oG = "auto" == z.pi(b, "overflowY"))
			}
			var b = this.Fc
				, c = z.I(b)
				, d = b.style.width
				, f = b.style.height;
			z.ii(b, "visibility", "hidden");
			var c = c.B("DIV", {
				style: "height:0;clear:both",
				innerHTML: "\x26nbsp;"
			})
				, g = c.cloneNode(!0);
			b.insertBefore(c, b.firstChild);
			b.appendChild(g);
			g = z.Kf(b);
			if ((c = z.C && b.currentStyle) && Og(z.I(g)) && "auto" != c.width && "auto" != c.height && !c.boxSizing)
				g = Ri(b, c.width, "width", "pixelWidth"),
					c = Ri(b, c.height, "height", "pixelHeight"),
					g = new z.Hf(g,c);
			else
				var c =
					z.Qi(b)
					, g = z.Ti(b)
					, h = Ai(b)
					, g = new z.Hf(c.width - h.left - g.left - g.right - h.right,c.height - h.top - g.top - g.bottom - h.bottom);
			c = g.width;
			g = g.height;
			h = "";
			this.Bo() && (h = "\x26nbsp;",
				z.ii(b, "position", "relative"),
				z.ii(b, "overflow", "visible"),
				z.ii(a, "position", "absolute"),
				z.ii(a, "top", "0"),
				z.ii(a, "left", "0"));
			Fi(b, c, g);
			Og(z.I(b)) && z.ii(b, "lineHeight", "0");
			z.rr(b, h);
			Fi(a, c, g);
			Fi(b, d, f);
			z.ii(b, "visibility", "");
			b.appendChild(a);
			Rx(this) || (b = a.contentWindow.document,
			Og(z.I(a.ownerDocument)) && (b.open(),
				a = z.oe("\x3c!DOCTYPE HTML\x3e\x3chtml\x3e\x3c/html\x3e",
					null ),
				b.write(z.me(a)),
				b.close()))
		}
		;
		z.e.Ax = function(a) {
			var b = this.Fc;
			if (b)
				return new jx(this.id,Og(z.I(b)),!0,this.Bo(),a);
			throw Error("no field");
		}
		;
		z.e.oK = function(a, b, c) {
			z.ii(a, "visibility", "hidden");
			c = this.Ax(c);
			var d = this.Fc
				, f = this.dl;
			if (!this.iy) {
				var g = this.Fc;
				if (g) {
					var h = g.ownerDocument
						, k = wa(h);
					if (!iG[k]) {
						for (var m = wa(h), n = [], h = $w(h.styleSheets), q = 0, A; A = h[q]; q++)
							if ((A = Zw(A)) && A.length)
								for (var H = 0, K = A.length; H < K; H++) {
									var O = new ax, Z;
									Z = O;
									var Xa = A[H]
										, $a = Xa.style;
									if ($a) {
										var Ea = void 0
											, va = "";
										$a && (Ea = Xa.selectorText) && (va = $a.cssText) ? z.C && (va += "/* */") : Xa.cssText && (va = /([^\{]+)\{/,
											Ea = va.exec(Xa.cssText)[1],
											va = Xa.cssText.replace(va, "").replace(/\}[^\}]*$/g,
												""));
										if (Ea) {
											Xa = Z;
											Xa.jh = [];
											Ea = Ea.split(/,\s*/gm);
											for ($a = 0; $a < Ea.length; $a++) {
												var wd = Ea[$a];
												0 < wd.length && Xa.jh.push(new cx(wd))
											}
											Z.Kn = va;
											Z = !0
										} else
											Z = !1
									} else
										Z = !1;
									Z && n.push(O)
								}
						iG[m] = n
					}
					m = iG[k];
					k = [];
					for (n = 0; n < m.length; n++)
						k.push(m[n].clone());
					h = new gx(g);
					q = new dx("body");
					for (m = 0; m < k.length; m++)
						for (A = k[m].jh,
							     n = A.length,
							     H = 0; H < n; H++) {
							K = A[H];
							O = K;
							Z = h.uid;
							if (O.Lv[Z])
								Z = O.Lv[Z];
							else {
								for (var va = 0, $a = Ea = Xa = null , wd = h.tH, Zh = wd.length, ne = 0; ne <= O.ni.length; ne++) {
									for (Ea = O.ni[ne]; va < Zh; ) {
										var Gd = wd[va];
										if (Ea && fx(Ea, Gd)) {
											Xa =
											{
												DE: va,
												bJ: ne
											};
											va++;
											break
										} else
											$a && fx($a, Gd) && (Xa = {
												DE: va,
												bJ: ne - 1
											});
										va++
									}
									$a = Ea
								}
								Z = O.Lv[Z] = Xa
							}
							Z && (O = Z.bJ,
								K = K.ni,
								va = K.length - 1,
								Z.DE == h.tH.length - 1 || O < va ? (K = K.concat(),
									K.splice(0, O + 1, q),
									O = new cx,
									O.ni = K,
									A.push(O)) : 0 < O && O == va && (O = new cx,
									O.ni = [q, K[va]],
									A.push(O)))
						}
					h = new ax;
					g = g.currentStyle || z.Kf(g).defaultView.getComputedStyle(g, "") || {};
					m = new cx;
					m.ni = [new dx("html")];
					h.jh = [m];
					q = {};
					for (m = 0; n = jG[m]; m++)
						q[n] = g[ub(n)];
					bx(h, q);
					k.push(h);
					h = new ax;
					q = new cx;
					q.ni = [new dx("body")];
					A = {
						position: "relative",
						top: "0",
						left: "0",
						right: "auto",
						display: "block",
						visibility: "visible"
					};
					for (m = 0; n = kG[m]; m++)
						A[n] = g[ub(n)];
					bx(h, A, !0);
					h.jh = [q];
					k.push(h);
					g = [];
					n = k.length;
					for (m = 0; m < n; m++) {
						A = k[m];
						h = g;
						H = A.jh.length;
						q = !1;
						for (K = 0; K < H; K++) {
							O = A.jh[K].ni;
							Z = O.length;
							for (va = 0; va < Z; va++)
								h.push(O[va].hG, " ");
							K < H - 1 && h.push(",");
							z.B && !z.E("1.9a") && (q = q || gG.test(O[Z - 1].hG))
						}
						A = A.Kn;
						q && (A = A.replace(hG, "$1 color: $2 ! important; "));
						h.push("{", A, "}\n")
					}
					this.iy = g.join("")
				}
			}
			d = new kx(d,f + this.iy);
			c.Vq && (f = z.Ti(d.CV),
			(f.top || f.left || f.right || f.bottom) && z.ii(a,
				"margin", -f.top + "px " + -f.right + "px " + -f.bottom + "px " + -f.left + "px"));
			lx(c, b, d, a);
			Ux(this);
			z.ii(a, "visibility", "visible")
		}
		;
		z.e.mw = function() {
			z.Vd(this.OG);
			z.Vd(this.zQ);
			z.Sx.o.mw.call(this)
		}
		;
		var sy = {};
		sy._default_ = {
			Ex: function(a) {
				return window.$.get("/node/CommentV2", {
					params: {
						comment_id: a
					}
				})
			},
			yl: la,
			zl: la,
			add: function(a) {
				return window.$.post("/node/AnswerCommentAddV2", {
					method: "add_comment",
					params: a
				})
			},
			remove: function(a) {
				return window.$.post("/node/CommentV2", {
					method: "remove_comment",
					params: {
						comment_id: a
					}
				})
			},
			$y: function(a, b) {
				return window.$.post("/node/CommentV2", {
					method: b ? "like_comment" : "undo_like_comment",
					params: {
						comment_id: a
					}
				})
			}
		};
		sy.answer = {
			yl: function(a, b) {
				return window.$.get("/node/AnswerCommentBoxV2", {
					params: {
						answer_id: a,
						load_all: b
					}
				})
			},
			zl: function(a) {
				return window.$.get("/node/AnswerCommentListV2", {
					params: {
						answer_id: a
					}
				})
			},
			add: function(a) {
				return window.$.post("/node/AnswerCommentAddV2", {
					method: "add_comment",
					params: a
				})
			},
			YL: function(a, b) {
				return window.$.post("/node/AnswerCommentV2", {
					method: "author_remove_comment",
					params: {
						comment_id: a,
						is_block: b
					}
				})
			}
		};
		sy.question = {
			yl: function(a) {
				return window.$.get("/node/QuestionCommentBoxV2", {
					params: {
						question_id: a
					}
				})
			},
			zl: function(a) {
				return window.$.get("/node/QuestionCommentListV2", {
					params: {
						question_id: a
					}
				})
			},
			add: function(a) {
				return window.$.post("/node/QuestionCommentAddV2", {
					method: "add_comment",
					params: a
				})
			}
		};
		sy.favlist = {
			yl: function(a) {
				return window.$.get("/node/FavlistCommentBoxV2", {
					params: {
						favlist_id: a
					}
				})
			},
			zl: function(a) {
				return window.$.get("/node/FavlistCommentListV2", {
					params: {
						favlist_id: a
					}
				})
			},
			add: function(a) {
				return window.$.post("/node/FavlistCommentAddV2", {
					method: "add_comment",
					params: a
				})
			}
		};
		sy.post = {
			Ex: function(a) {
				return window.$.get("/node/PostCommentV2", {
					params: {
						comment_id: a
					}
				})
			},
			yl: function(a, b) {
				return window.$.get("/node/PostCommentBoxV2", {
					params: {
						post_id: a,
						load_all: b
					}
				})
			},
			zl: function(a) {
				return window.$.get("/node/PostCommentListV2", {
					params: {
						post_id: a
					}
				})
			},
			add: function(a) {
				return window.$.post("/node/PostCommentV2", {
					method: "add_comment",
					params: a
				})
			},
			$y: function(a, b) {
				return window.$.post("/node/PostCommentV2", {
					method: b ? "like_comment" : "undo_like_comment",
					params: {
						comment_id: a
					}
				})
			},
			remove: function(a) {
				return window.$.post("/node/PostCommentV2",
					{
						method: "remove_comment",
						params: {
							comment_id: a
						}
					})
			}
		};
		sy.roundtable = {
			Ex: function(a) {
				return window.$.get("/roundtable/comments/" + a)
			},
			yl: function(a, b) {
				return window.$.get("/node/RoundtableCommentBoxV2", {
					params: {
						roundtable_id: a,
						load_all: b
					}
				})
			},
			zl: function(a) {
				return window.$.get("/roundtable/comments", {
					roundtable_id: a
				})
			},
			add: function(a) {
				return window.$.post("/node/RoundtableCommentV2", {
					method: "add_comment",
					params: a
				})
			},
			$y: function(a, b) {
				return window.$.post("/node/RoundtableCommentV2", {
					method: b ? "like_comment" : "undo_like_comment",
					params: {
						comment_id: a
					}
				})
			},
			remove: function(a) {
				return window.$.post("/node/RoundtableCommentV2",
					{
						method: "remove_comment",
						params: {
							comment_id: a
						}
					})
			}
		};
		z.v(z.Vx, z.qd);
		Wx.prototype.fill = function(a, b) {
			this[a] = this[a].replace("?", b);
			return this
		}
		;
		z.v(z.Xx, Kw);
		var iC = function(a) {
			return function(b, c) {
				return a(z.Na("/manage/%s/options?action\x3d%s", b, c))
			}
		}(Ql(window.$.getJSON));
		z.e = z.Xx.prototype;
		z.e.qC = {
			remove: "删除",
			lock: "锁定",
			unlock: "解除锁定",
			collapse: "折叠",
			uncollapse: "解除折叠",
			mute: "隔离",
			unmute: "解除隔离"
		};
		z.e.lF = function(a) {
			return iC(a, this.wl())
		}
		;
		z.e.Xk = function(a, b) {
			var c = z.Xx.o.Xk.call(this, a, b);
			c.rc.set("ok", this.qC[this.wl()]);
			return c
		}
		;
		z.e.wl = function() {
			return this.Vt.op.split("-")[0]
		}
		;
		z.e.eF = function(a) {
			return z.Na("确定要%s该%s？", this.qC[this.wl()], this.zC[a] || "条目")
		}
		;
		z.e.cJ = function(a) {
			(0,
				window.$)(".footnote", this.xx().m()).text(a)
		}
		;
		z.e.AF = function(a) {
			a && (a.trackable ? Zx(this, a).then((0,
				z.r)(this.cJ, this)) : this.cJ(""))
		}
		;
		z.e.submit = function() {
			var a = this.Vt.action
				, b = this.Vt.content
				, c = (0,
				window.$)((0,
				window.$)("form", this.Ln.m())[0]).serialize();
			b && (c += "\x26" + b);
			Yx(a, c, this.Zk)
		}
		;
		z.e.C = function() {
			this.Zk = this.Vt = null ;
			z.Xx.o.C.call(this)
		}
		;
		z.e.open = function(a, b, c) {
			this.Vt = z.og(a) ? (0,
				window.$)(a).data() : a;
			this.Zk = c || hf.gX;
			z.Xx.o.open.call(this, b.type, b.id, "")
		}
		;
		z.v($x, z.R);
		z.e = $x.prototype;
		z.e.defaults = {
			trigger: {
				A: "data-editable"
			},
			kL: "hc-actionbar",
			nQ: "checked",
			rU: 100,
			sP: 100
		};
		z.e.D = function() {
			$x.o.D.call(this);
			this.Ti = z.M("div");
			window.document.body.appendChild(this.Ti);
			ay(this, this.h)
		}
		;
		z.e.C = function() {
			z.N(this.Ti);
			this.Ti = null ;
			$x.o.C.call(this)
		}
		;
		z.e.Cx = function() {
			return this.xP
		}
		;
		z.e.mM = function(a, b, c) {
			b = z.M("div", {
				title: a.V,
				"data-action": a.name,
				className: "button " + a.name + (0 === b ? " first" : b === c.length - 1 ? " last" : "")
			}, [z.M("i", "icon icon-actionbar-" + a.name)]);
			z.Oi(b, !0);
			this.v().g(b, "click", function() {
				by(this, a.name) && a.Hh(this.ve)
			});
			return b
		}
		;
		z.e.render = function() {
			this.Ti.innerHTML = "";
			z.bg(this.Ti, z.Kb(z.ic(Ge(this.Zm)), this.mM, this))
		}
		;
		z.v(z.dy, z.R);
		z.dy.prototype.defaults = {
			PF: {},
			TL: !0
		};
		z.dy.prototype.D = function() {
			z.dy.o.D.call(this);
			var a = this
				, b = this.h;
			this.J.TL && (this.Ym = qy(b),
				z.fd(this, this.Ym));
			this.v().g(b, "paste", function() {
				(0,
					window.setTimeout)(function() {
					ey(a)
				})
			}).g(b, "keydown", this.mP)
		}
		;
		z.dy.prototype.mP = function(a) {
			var b = bi(a.keyCode)
				, c = 8 === a.keyCode;
			if (!(a.ctrlKey || a.altKey || a.metaKey || !b && !c)) {
				var b = z.dr(), d = b.Z(), f = b.la(), g = this.h, h, k = hy(d, g, jy) || f !== d && (h || (h = hy(f, g, jy)));
				if (k) {
					var m = z.Eg(k)
						, n = b.xa()
						, q = b.Ma();
					if (k.getAttribute("data-editable") && m === k.href || "video-link" === k.className) {
						var A = !1;
						h = h || hy(f, g, jy) || k;
						var g = k.contains(d)
							, H = h.contains(f);
						if (c)
							g && (d = k,
								n = 0,
								A = !0),
							H && (f = h,
								q = z.qr(h),
								A = !0),
							A && z.Pq(d, n, f, q).select();
						else if (g && H && h === k) {
							if (!b.isCollapsed() || 0 !== n && m.length !==
								n)
								a.preventDefault(),
									z.ur(k)
						} else
							g && (d = k.nextSibling,
								n = 0,
								A = !0),
							H && (f = h.previousSibling,
								q = z.qr(f),
								A = !0),
							A && z.Pq(d, n, f, q).select()
					}
				}
			}
		}
		;
		var py = /\b(?:(?:https?):\/\/|www\.)(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[\-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig
			, ly = ["http:", "https:"]
			, my = Ql(function(a) {
			return window.$.post("/scraper", {
				url: a
			})
		});
		z.v(z.ry, z.R);
		z.e = z.ry.prototype;
		z.e.defaults = {
			CQ: !1,
			autofocus: !0,
			Pw: "empty",
			wf: "zm-item-comment"
		};
		z.e.ia = function(a) {
			z.ry.o.ia.call(this, a);
			Ky(this);
			a = window.location.hash.slice(1).split("-");
			if (a = "comment" === a[0] && a[1])
				a = Dy(this, a),
					z.En(a),
					z.Un(a),
					a.focus();
			this.Gg = !0;
			z.x(Ey(this), this.At, this)
		}
		;
		z.e.cn = "zm-comment-bubble";
		z.e.VC = "." + z.ry.prototype.cn;
		z.e.$ = function(a) {
			return (0,
				window.$)(a, this.h)
		}
		;
		z.e.B = function() {
			this.h = z.M("div", {
				"class": this.AD,
				style: "display:none"
			});
			this.Eg()
		}
		;
		z.e.Bn = function() {
			return '\x3ci class\x3d"icon icon-spike zm-comment-bubble"\x3e\x3c/i\x3e\x3cdiv class\x3d"zm-comment-spinner"\x3e正在加载，请稍等 \x3ci class\x3d"spinner-lightgray"\x3e\x3c/i\x3e\x3c/div\x3e'
		}
		;
		z.e.C = function() {
			z.ry.o.C.call(this);
			this.Ia = this.ID = this.xn = this.LC = this.Td = this.$z = this.SG = null
		}
		;
		z.e.uU = ty(function(a) {
			var b = z.L("zm-comment-content-wrap", a), c = z.L("zm-comment-form", a), d = a.getAttribute("data-id"), f = this, g;
			if (c) {
				g = z.L("zm-comment-editable", c);
				if (Li(c)) {
					if (z.Tn(c)) {
						z.Q(c, !1);
						return
					}
				} else
					z.Q(c, !0);
				By(g)
			} else {
				c = Cy(b);
				g = z.L("zm-comment-editable", c);
				var h = new z.Sx(g);
				h.Qd(!1, "");
				h.Me();
				gd(this, uy(h.m(), this.type, this.id));
				By(g);
				a = z.L("zm-comment-close", c);
				b = z.L("zm-comment-submit", c);
				b.name = "";
				var k = function() {
						f.ba({
							action: "click_reply_[type]_comment_submit"
						});
						var a = (0,
								z.qb)(h.xl())
							,
							b = (0,
								z.qb)(z.Eg(g));
						a && b ? My(f, {
							content: a,
							zT: d
						}, function(a) {
							a.r || (z.Q(c, !1),
								h.Qd(!1, ""),
							(a = z.Hb(Ey(f))) && z.Un(a, {
								offsetTop: 100,
								Nv: !0
							}))
						}) : (z.U.message("请填写内容"),
							g.focus())
					}
					;
				z.F(a, "click", function() {
					z.Q(c, !1)
				});
				z.F(b, "click", k);
				z.F(g, "keydown", function(a) {
					13 === a.keyCode && (a.ctrlKey || a.metaKey) && (k(),
						a.preventDefault())
				})
			}
			z.Un(c, 100)
		});
		z.e.uu = function(a) {
			z.T.enable(this.ID, "expanded", a)
		}
		;
		z.e.Di = function(a, b) {
			this.dispatchEvent(new z.Vx("click!comment",{
				category: "?",
				action: this.type + "_comments",
				label: "?_" + a,
				value: sa(b) ? b : this.ib()
			}))
		}
		;
		z.e.sj = function() {
			this.Gg ? Iy(this) : this.Lt = !0
		}
		;
		z.e.FR = function(a) {
			13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.Av(),
				(0,
					window.$)(this.Ia).blur(),
				a.preventDefault());
			27 === a.keyCode && Gy(this)
		}
		;
		z.e.Oa = function(a) {
			var b = z.Ln(this.h, a.target, "BUTTON") || z.Ln(this.h, a.target);
			if (b && b.name) {
				var c = z.Mg(b, this.J.wf);
				a.preventDefault();
				switch (b.name) {
					case "reply_comment":
						this.ba({
							action: "click_reply_[type]_comment_start"
						});
						this.uU(c);
						break;
					case "cancelanon":
						a = (0,
							window.$)(this.h).parents(".feed-item-hook").data("qid");
						z.bk(0, null , a);
						break;
					case "delcomment":
						this.ls(b);
						break;
					case "like_comment":
						this.MO(b);
						break;
					case "author_delcomment":
						Oy(this, b);
						break;
					case "admin_delcomment":
						Ny(this, b);
						break;
					case "closeform":
						this.ba({
							action: "click_add_[type]_comment_cancel"
						});
						Gy(this);
						break;
					case "addnew":
						this.ba({
							action: "click_add_[type]_comment_submit"
						});
						this.Av();
						break;
					case "load-more":
						this.Di("comments_all"),
							this.ba({
								action: "click_view_all_comment"
							}),
							this.SG(b)
				}
			}
		}
		;
		z.e.SG = function(a) {
			this.kt && "pending" === this.kt.state() || (a && z.T.add(a, "loading"),
				this.kt = this.$z || this.TG(),
				this.kt.done((0,
					z.r)(function(b) {
					b = (0,
						window.$)(b).filter(".zm-item-comment").get();
					if (b.length) {
						var c = Ey(this);
						c.length && (b = z.Jb(b, function(a) {
							return !z.Pb(c, function(b) {
								return b.getAttribute("data-id") === a.getAttribute("data-id")
							})
						}),
							b = Ub(c, b).sort(function(a, b) {
								return a.getAttribute("data-id") - b.getAttribute("data-id")
							}),
							z.x(b, this.At, this),
						a && z.N(a));
						z.bg(this.xn, b)
					}
				}, this)))
		}
		;
		z.e.MO = ty(function(a) {
			var b = (0,
				window.$)(a)
				, c = z.Mg(a, this.J.wf);
			a = (0,
				window.$)(".like-num", c);
			var d = c.getAttribute("data-id");
			if (c = !b.hasClass("liked"))
				this.Di("like_comment"),
					this.ba({
						action: "click_like_[type]_comment"
					});
			this.wg.$y(d, c);
			var d = (0,
				window.$)("em", a)
				, f = +d.text() + (c ? 1 : -1);
			a.toggleClass("liked", c).toggleClass("nil", 0 >= f).attr("data-tip", "s$r$" + f + " 人觉得这个很赞");
			d.text(f);
			b.toggleClass("liked", c);
			tn(b[0], c ? "取消赞" : "赞")
		});
		z.e.expand = function() {
			this.Ic(!0)
		}
		;
		z.e.collapse = function() {
			this.Ic(!1)
		}
		;
		z.e.vc = function() {
			return this.Gg
		}
		;
		z.e.Ic = function(a) {
			if (a !== this.Gg) {
				a && (this.$(this.VC).hide(),
					this.Eg());
				this.Gg = a;
				this.dispatchEvent(a ? "beforeexpand" : "beforecollapse");
				z.Q(this.h, this.Gg);
				var b = (0,
					z.r)(function() {
					a && Hy(this);
					this.dispatchEvent(a ? "expand" : "collapse");
					this.sl && !a && (z.Br(this.sl),
						z.Un(this.sl.h))
				}, this), c;
				a && this.Lt ? (c = Iy(this)) && c.done(b) : (0,
					window.setTimeout)(b);
				this.Td && (a ? (this.GS = z.Eg(this.Td),
					tn(this.Td, "收起评论")) : tn(this.Td, 0 > this.Ka ? this.GS : this.Ka ? this.Ka + " 条评论" : "添加评论"))
			}
		}
		;
		z.e.Gf = function() {
			this.Ic(!this.Gg)
		}
		;
		z.e.TG = function() {
			return this.wg.zl(this.id)
		}
		;
		z.e.Bp = function(a) {
			this.Xi = a
		}
		;
		z.e.tT = function(a) {
			a = z.Zf((0,
				z.qb)(a));
			z.Q(a, this.Gg);
			z.x((0,
				window.$)("." + this.J.wf, a).get(), this.At, this);
			this.Lt = !1;
			this.Db();
			z.gg(a, this.h);
			this.h = a;
			Ky(this)
		}
		;
		z.e.vl = function() {
			this.Ia.focus()
		}
		;
		z.e.Va = function() {
			var a = (0,
				z.qb)(this.dj.xl());
			return a === this.placeholder ? "" : a
		}
		;
		z.e.Av = ty(function() {
			var a = this.Va()
				, b = (0,
				z.qb)(z.Eg(this.Ia));
			a && "TEXTAREA" === this.Ia.tagName && b || a ? My(this, a) : (z.U.message("请填写内容"),
				this.vl())
		});
		z.e.ib = function() {
			return this.Ka
		}
		;
		z.e.$N = function(a) {
			if (!a)
				return z.U.message("网络异常");
			if (a.r)
				return z.U.alert(a.msg);
			this.wg.Ex(a.msg).done(window.$.proxy(this.uT, this));
			this.dj.Qd("");
			Ay(this);
			this.uu(!1)
		}
		;
		z.e.At = function(a) {
			if (FE("auth_f_manage") && "favlist" !== this.type && !(0,
					window.$)(".del, .op.remove", a).length) {
				var b = a.getAttribute("data-id");
				(0,
					window.$)("\x3ca\x3e", {
					href: "#",
					name: "admin_delcomment",
					"class": "del zm-comment-op-link op needsfocus",
					html: '\x3ci class\x3d"zg-icon zg-icon-comment-del"\x3e\x3c/i\x3e删除',
					"data-op": "remove-comment",
					"data-action": "/manage?" + window.$.param({
						comment_id: b,
						action: "remove_comment2"
					})
				}).appendTo((0,
					window.$)(".zm-comment-ft, .actions", a))
			}
			this.Ej(a)
		}
		;
		z.e.Ej = function(a) {
			var b = (0,
				window.$)("a[name\x3dreport], button.report", a);
			b.length && (a = a.getAttribute("data-id"),
				a = new z.Lw("comment",a,{
					post: "article_comment_report",
					question: "question_comment_report",
					answer: "question_answer_comment_report"
				}[this.type]),
				z.Ow(a, b[0]),
				z.fd(a, this),
				a.mb(this))
		}
		;
		z.e.uT = function(a) {
			this.Oj = "";
			a = z.Zf(a);
			this.xn.appendChild(a);
			this.At(a);
			this.Ka += 1;
			Ly(this)
		}
		;
		z.e.ls = function(a) {
			var b = z.Mg(a, this.J.wf)
				, c = b.getAttribute("data-id");
			z.U.confirm("删除评论", "你确定要删除这条评论吗？", function(a) {
				a && Qy(this, c, z.Ca(z.N, b))
			}, this)
		}
		;
		z.e.Eg = function() {
			(0,
				window.$)(window).on("beforeunload.CommentForm", (0,
				z.r)(function() {
				if (this.Oj)
					return "你的评论还未保存，确认离开该页面吗？"
			}, this))
		}
		;
		z.e.Ph = function() {
			(0,
				window.$)(window).off("beforeunload.CommentForm")
		}
		;
		z.e.ba = function(a) {
			this.dispatchEvent({
				type: "trackRequested",
				category: "comment",
				action: a.action.replace("[type]", this.type)
			})
		}
		;
		z.ka(Sy, z.R);
		z.e = Sy.prototype;
		z.e.vc = function() {
			return this.Kj
		}
		;
		z.e.Ic = function(a) {
			a !== this.Kj && (this.dispatchEvent(a ? "beforeexpand" : "beforecollapse"),
				this.Kj = a,
				z.Q(this.h, a),
				Xy(this),
				Yy(this),
				this.dispatchEvent(a ? "expand" : "collapse"),
			this.tl && !a && (z.Br(this.tl),
				z.Un(this.tl.m())))
		}
		;
		z.e.Gf = function() {
			this.Ic(!this.Kj)
		}
		;
		z.e.Di = function() {}
		;
		z.e.vl = function() {
			(0,
				window.$)("[data-input-box]", this.m()).focus()
		}
		;
		z.e.reload = function() {
			Zy(this, "reloadComments")
		}
		;
		z.e.Bp = function(a) {
			this.Xi = a
		}
		;
		z.e.Vk = function() {
			var a = this;
			Xy(this);
			Yy(this);
			Vy(this);
			this.v().g(z.ek, "anon_change", function() {
				a.Kj && a.reload()
			});
			(0,
				window.$)(this.m()).on("click", 'button[data-key\x3d"cancel"]', function(b) {
				0 === Uy(a) && (b.preventDefault(),
					a.Ic(!1))
			})
		}
		;
		z.e.B = function() {
			this.h = z.M("div", "comment-app-holder");
			z.Q(this.h, !1)
		}
		;
		z.e.render = function(a, b) {
			b = void 0 === b ? {} : b;
			var c = this;
			z.R.prototype.render.call(this, a);
			var d = this.entryType
				, f = this.Ib
				, g = {}
				, h = Object.assign((g.entry = {
				id: f,
				type: d
			},
				g.useContentEditable = hs,
				g.createItemActions = function(a) {
					var b = []
						, f = a.id
						, g = a.own;
					!g && z.lB.Fy && b.push({
						key: "adminremove",
						label: "删除",
						icon: "zg-icon zg-icon-comment-del",
						onClick: function() {
							var a = {
								op: "remove-comment",
								action: "/manage?comment_id\x3d" + f + "\x26action\x3dremove_comment2"
							}
								, b = {
								id: f,
								type: "comment"
							};
							(new z.Xx).open(a, b, function() {
								Zy(c,
									"RemoveComment", {
										id: f
									})
							})
						}
					});
					g || b.push({
						key: "report",
						label: "举报",
						icon: "zg-icon zg-icon-comment-report",
						onClick: function(b) {
							b = (0,
								window.$)(b.target).closest("button");
							if (b.length && !b.data("report")) {
								var f = new z.Lw("comment",a.id,{
									post: "article_comment_report",
									question: "question_comment_report",
									answer: "question_answer_comment_report"
								}[d]);
								z.Ow(f, b[0], !0);
								z.fd(f, c);
								f.mb(c);
								b.data("report", f)
							}
						}
					});
					return b
				}
				,
				g.onEditorCreated = function(a) {
					return uy(a, d, f)
				}
				,
				g.onRequestHighlight = function(a) {
					z.En(a);
					z.Un(a,
						{
							offsetTop: 45
						});
					a.focus()
				}
				,
				g), b)
				, g = z.ia(window.location.hash.match(/#comment-(\d+)/) || []);
			g.next();
			(g = g.next().value) && (h.query = {
				bycomment: g
			});
			var k = Object.assign({}, Bu(), {
				authRequired: function(a) {
					return z.Lm(a, !0, function() {
						return c.Xi
					})
				}
			})
				, m = z.Nj(function() {
				return c.cD && Ty(c)
			});
			WF("CommentApp").then(function(b) {
				a.appendChild(c.h);
				c.Lq = b.render(c.h, h, k);
				c.Vk();
				c.Lq.store.subscribe(function() {
					(0,
						window.setTimeout)(function() {
						Xy(c);
						Yy(c);
						m()
					})
				})
			})
		}
		;
		z.v($y, z.R);
		var az = {
			vg: "is-sticky",
			top: null ,
			bottom: null ,
			wb: null ,
			RC: !1,
			QH: z.p,
			Bt: z.p
		};
		z.e = $y.prototype;
		z.e.C = function() {
			this.stop();
			$y.o.C.call(this)
		}
		;
		z.e.start = function() {
			this.state.Xl || (this.state.Xl = !0,
				(0,
					window.$)(window).on("scroll resize", this.DJ).trigger("scroll"))
		}
		;
		z.e.stop = function() {
			this.state.Xl && (this.state.Xl = !1,
				(0,
					window.$)(window).off("scroll resize", this.DJ),
				this.restore(),
				this.state.Ss = !1,
				this.state.Us = !0,
				(0,
					window.setTimeout)(function() {
					(0,
						window.$)(window).trigger("scroll")
				}))
		}
		;
		z.e.update = function() {
			if (this.state.zo)
				this.state.Vz = !0;
			else {
				var a = this.options.top, b = this.options.bottom, c = this.state.Ss, d = this.state.Us, f, g, h = (this.lc || this.h).getBoundingClientRect(), k = this.options.wb.getBoundingClientRect(), m = (0,
					window.$)(window).height();
				h.height || (h.height = h.bottom - h.top);
				null  !== a ? (f = h.top > a,
					g = k.bottom > a + h.height) : null  !== b && (f = h.bottom > m - b,
					g = k.top > m - h.height - b);
				this.state.Ss = f;
				this.state.Us = g;
				if ((c && !d) === (f && !g))
					f && !g && this.ea();
				else {
					if (d && !g)
						return cz(this);
					if (!d && g)
						return ez(this);
					this.options.RC ? f ? cz(this) : ez(this) : f ? bz(this) : this.restore()
				}
			}
		}
		;
		z.e.ea = function() {
			var a = (this.lc || this.h).getBoundingClientRect().left
				, b = this.options.top
				, c = this.options.bottom;
			(0,
				window.$)(this.h).css({
				left: a + "px",
				top: b ? b + "px" : "auto",
				bottom: c ? c + "px" : "auto"
			})
		}
		;
		z.e.restore = function() {
			this.lc && ((0,
				window.$)(this.h).removeClass(this.options.vg).css({
				left: "",
				top: "",
				bottom: ""
			}),
				(0,
					window.$)(this.lc).remove(),
				this.lc = null ,
				this.options.Bt.call(this))
		}
		;
		z.e.onAnimationEnd = function() {
			this.state.zo = !1;
			this.state.Vz && (this.state.Vz = !1,
				this.update())
		}
		;
		z.v(z.fz, z.R);
		z.e = z.fz.prototype;
		z.e.ol = "zm-item-expanded";
		z.e.Oo = "zm-item-meta";
		z.e.Pj = null ;
		z.e.Br = "z-icon-fold";
		z.e.zu = "sprite-global-icon-fold-white";
		z.e.D = function() {
			z.fz.o.D.call(this);
			var a = iz(this.h);
			this.Ib = a[this.entryType + "-id"];
			this.Fg = a[this.entryType + "-url-token"];
			this.Nr = a;
			this.kn();
			this.ue();
			mz(this);
			hz(this)
		}
		;
		z.e.Kx = function() {
			return kz(this)
		}
		;
		z.e.Wn = function() {
			var a = this.entryType + "-" + this.Ib;
			return (0,
					window.$)('a[name\x3d"' + a + '"]', this.h).length && "#" + a
		}
		;
		z.e.kn = function(a) {
			var b = {
				".js-expand": this.expand,
				".js-collapse": this.collapse,
				'a[name\x3d"ignore"]': this.qs,
				".js-close": this.FF,
				".js-collect": this.tj,
				".js-hiderelated": this.EF,
				".js-toggle-commentbox": this.JF,
				".js-unhide": this.MF,
				'a[name\x3d"dislike"]': this.ms
			};
			z.rc(b, a || {});
			z.dc(b, function(a, b) {
				if (z.ta(a))
					(0,
						window.$)(this.h).on("click", b, window.$.proxy(a, this))
			}, this);
			var c = (0,
				window.$)(".zm-meta-panel", this.h);
			z.dc({
				'a[name\x3d"toggle-comment"]': function(a) {
					this.JF(a);
					c.toggleClass("focusin",
						this.va.vc())
				}
			}, function(a, b) {
				c.on("click", b, window.$.proxy(a, this))
			}, this)
		}
		;
		z.e.JF = function(a) {
			this.mg();
			this.va.vc() && (a = (0,
					window.parseInt)(z.Eg(a.currentTarget), 10) || 0,
				this.va.Di("view_comments", a))
		}
		;
		z.e.hz = function() {
			(0,
				z.uC)(this.entryType, this.Fg, "read")
		}
		;
		z.e.Uj = function() {
			(0,
				z.uC)(this.entryType, this.Fg, "touch")
		}
		;
		z.e.expand = function(a) {
			this.Jb || (this.Jb = !0,
				z.T.add(this.h, this.ol),
			Kv || (0,
				window.setTimeout)((0,
				z.r)(this.sy, this)),
				this.dispatchEvent("expand"),
				a = a && z.og(a.target) && z.Th(a.target, "js-vote-count"),
				this.wB(a))
		}
		;
		z.e.collapse = function() {
			this.Jb && (this.Jb = !1,
				this.vB(),
				Yn(this.h, (0,
					z.r)(function() {
					z.T.remove(this.h, this.ol);
					this.dispatchEvent("collapse")
				}, this)))
		}
		;
		z.e.vc = function() {
			return this.Jb
		}
		;
		z.e.Gf = function() {
			this.Jb ? this.collapse() : this.expand()
		}
		;
		z.e.sy = function() {
			if (!this.iN) {
				this.iN = !0;
				var a = this
					, b = (0,
					window.$)(".js-collapse", this.h)[0];
				if (!b) {
					if ("answer" !== this.entryType)
						return;
					b = (0,
						window.$)(".zm-meta-panel", this.h);
					if (!b.length)
						return;
					b = (0,
						window.$)('\x3cbutton class\x3d"item-collapse js-collapse"\x3e\x3ci class\x3d"sprite-global-icon-fold-white"\x3e\x3c/i\x3e收起\x3c/button\x3e').appendTo(b).on("click", (0,
						z.r)(this.collapse, this)).get(0)
				}
				var c = this.tJ = new $y(0,{
					bottom: 12,
					wb: (0,
						window.$)(".js-collapse-body", this.h)[0],
					QH: function() {
						(0,
							window.$)("i",
							this.h).removeClass(a.Br).addClass(a.zu)
					},
					Bt: function() {
						(0,
							window.$)("i", this.h).removeClass(a.zu).addClass(a.Br)
					}
				});
				z.fd(this, c);
				c.w(b);
				this.g("expand", function(a) {
					a.target === a.currentTarget && c.start()
				});
				this.g("collapse", function(a) {
					a.target === a.currentTarget && c.stop()
				});
				c.start()
			}
		}
		;
		z.e.wB = function(a) {
			var b = "view_answer"
				, c = kz(this);
			a = a ? "vote_up_count" : "expand_answer";
			var d = (0,
					window.$)(this.h).index() + 1;
			if ("feed" !== c)
				z.Ck(b, "click_expand_answer", c + "_" + a, d);
			else {
				var c = jz(this)
					, f = lz(this);
				-1 < c.indexOf("article") ? (b = "view_article",
					c = "feed_article",
					a = "expand_article") : c = "feed_answer";
				z.Ck(b, "click_expand_answer", c + "_" + f + "_" + a, d)
			}
		}
		;
		z.e.vB = function() {
			var a = "view_answer", b = kz(this), c;
			if (c = this.tJ)
				c = this.tJ,
					c = c.state.Ss && !c.state.Us;
			c = c ? "blue" : "grey";
			var d = "collapse_answer_" + c
				, f = (0,
					window.$)(this.h).index() + 1;
			if ("feed" !== b)
				z.Ck(a, "click_collapse_answer", b + "_" + d, f);
			else {
				var b = jz(this)
					, g = lz(this);
				-1 < b.indexOf("article") ? (a = "view_article",
					b = "feed_article",
					d = "collapse_article_" + c) : b = "feed_answer";
				z.Ck(a, "click_collapse_answer", b + "_" + g + "_" + d, f)
			}
		}
		;
		z.e.wS = function() {
			window.open(z.L(this.Pj, this.h).href)
		}
		;
		z.e.FF = function() {
			(0,
				window.$)(this.h).fadeOut(150, function() {
				(0,
					window.$)(this).remove()
			})
		}
		;
		z.e.tj = z.p;
		z.e.qs = z.p;
		z.e.MF = z.p;
		z.e.EF = z.p;
		z.e.ms = function() {
			var a = (0,
				window.$)(this.h)
				, b = (0,
				window.$)(".feed-item-inner", a)
				, c = (0,
				window.$)(".undo-dislike-options", a)
				, d = c.data();
			c.off().one("click", ".revert", function() {
				b.slideDown();
				c.slideUp();
				window.$.post("/topstory/item/uninterest/revert", d)
			}).one("click", ".close", function() {
				a.slideUp(function() {
					a.remove()
				})
			});
			window.$.post("/topstory/item/uninterest", d).done(function() {
				b.slideUp();
				c.slideDown()
			})
		}
		;
		z.e.mg = function() {
			if (!this.va) {
				var a = (0,
					window.$)(".toggle-comment, .js-toggle-commentbox", this.h)[0];
				if ("answer" === this.entryType)
					this.va = new Sy(this.Ib,this.entryType),
						this.M(this.va),
						this.va.render(z.L(this.Oo, this.h), {
							embedded: /^\/roundtable/.test(window.location.pathname)
						}),
						Wy(this.va, a);
				else if (this.va = new z.ry(this.Ib,this.entryType),
						this.M(this.va),
						z.vy(this.va, z.L(this.Oo, this.h), a),
						a = this.va,
					!a.sl && !z.lB.lb) {
					var b = z.Mg(a.h, "zm-item-meta");
					if (b) {
						var c = z.L("zm-meta-panel", b);
						c && (a.sl = new Fr(null ,
							b),
							a.sl.tag = "comment",
							a.sl.w(c))
					}
				}
				this.va.Bp(this.Wn())
			}
			this.va.Gf()
		}
		;
		z.e.Vx = function() {
			this.va ? this.va.vl() : this.mg()
		}
		;
		z.e.ue = function() {
			this.Rd = lC.mK(this.h);
			mu(this.Rd.register("shift+o", this.wS, this), {
				group: "操作",
				name: "新窗口打开条目"
			});
			var a = (0,
				window.$)('a[name\x3d"dislike"], a[name\x3d"ignore"]', this.h);
			a.length && mu(this.Rd.register("i g", function() {
				a.click()
			}), {
				group: "操作",
				name: "不感兴趣"
			})
		}
		;
		z.v(nz, z.G);
		nz.prototype.handleEvent = function(a) {
			var b = 0
				, c = 0
				, d = 0;
			a = a.hc;
			if ("mousewheel" == a.type) {
				c = 1;
				if (z.C || z.D && (bu || z.E("532.0")))
					c = 40;
				d = oz(-a.wheelDelta, c);
				z.l(a.wheelDeltaX) ? (b = oz(-a.wheelDeltaX, c),
					c = oz(-a.wheelDeltaY, c)) : c = d
			} else
				d = a.detail,
					100 < d ? d = 3 : -100 > d && (d = -3),
					z.l(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
			sa(this.$G) && (b = ue(b, -this.$G, this.$G));
			sa(this.aH) && (c = ue(c, -this.aH, this.aH));
			this.jQ && (b = -b);
			b = new qz(d,a,b,c);
			this.dispatchEvent(b)
		}
		;
		nz.prototype.C = function() {
			nz.o.C.call(this);
			z.Vd(this.PG);
			this.PG = null
		}
		;
		z.v(qz, ud);
		z.v(rz, z.G);
		z.e = rz.prototype;
		z.e.pe = 0;
		z.e.Po = 0;
		z.e.Lo = 100;
		z.e.Pn = 0;
		z.e.uk = 1;
		z.e.mG = !1;
		z.e.ut = !1;
		z.e.Fa = function(a) {
			a = sz(this, a);
			this.pe != a && (this.pe = a + this.Pn > this.Lo ? this.Lo - this.Pn : a < this.Po ? this.Po : a,
			this.mG || this.ut || this.dispatchEvent("change"))
		}
		;
		z.e.W = function() {
			return sz(this, this.pe)
		}
		;
		z.e.ru = function(a) {
			a = sz(this, a);
			this.Pn != a && (this.Pn = 0 > a ? 0 : this.pe + a > this.Lo ? this.Lo - this.pe : a,
			this.mG || this.ut || this.dispatchEvent("change"))
		}
		;
		z.e.Xh = function() {
			var a = this.Pn;
			return null  == this.uk ? a : Math.round(a / this.uk) * this.uk
		}
		;
		z.e.Cc = function() {
			return sz(this, this.Po)
		}
		;
		z.e.Tc = function() {
			return sz(this, this.Lo)
		}
		;
		z.e.ao = function() {
			return this.uk
		}
		;
		z.v(tz, z.R);
		z.e = tz.prototype;
		z.e.Nb = "horizontal";
		z.e.Ao = !1;
		z.e.YQ = !1;
		z.e.Jf = 10;
		z.e.rt = 0;
		z.e.pG = !0;
		z.e.nH = 0;
		z.e.LK = 1E3;
		z.e.fc = !0;
		z.e.ge = !1;
		z.e.B = function() {
			tz.o.B.call(this);
			var a = this.L().B("DIV", this.T(this.Nb));
			this.ia(a)
		}
		;
		z.e.ia = function(a) {
			tz.o.ia.call(this, a);
			z.Uh(a, this.T(this.Nb));
			a = this.m();
			var b = z.Mf(null , "goog-slider-thumb", a)[0];
			b || (b = this.L().B("DIV", "goog-slider-thumb"),
				Nh(b, "button"),
				a.appendChild(b));
			this.ab = this.Hd = b;
			Nh(this.m(), "slider");
			Lz(this)
		}
		;
		z.e.D = function() {
			tz.o.D.call(this);
			this.oe = new Yi(this.ab);
			this.Tf = new Yi(this.Hd);
			this.oe.Sh(this.ge);
			this.Tf.Sh(this.ge);
			this.oe.Ew = this.Tf.Ew = z.p;
			this.sb = new Nk(this.m());
			vz(this, !0);
			this.m().tabIndex = 0;
			Fz(this)
		}
		;
		z.e.Db = function() {
			tz.o.Db.call(this);
			id(this.oe, this.Tf, this.sb, this.Xj)
		}
		;
		z.e.js = function(a) {
			var b = a.Ir == this.oe ? this.ab : this.Hd, c;
			"vertical" == this.Nb ? (c = this.m().clientHeight - b.offsetHeight,
				c = (c - a.top) / c * (this.Tc() - this.Cc()) + this.Cc()) : c = a.left / (this.m().clientWidth - b.offsetWidth) * (this.Tc() - this.Cc()) + this.Cc();
			c = a.Ir == this.oe ? Math.min(Math.max(c, this.Cc()), this.W() + this.Xh()) : Math.min(Math.max(c, this.W()), this.Tc());
			Dz(this, b, c)
		}
		;
		z.e.xs = function(a) {
			var b = "start" == a.type;
			Yh(this.m(), "goog-slider-dragging", b);
			Yh(a.target.handle, "goog-slider-thumb-dragging", b);
			a = a.Ir == this.oe;
			b ? (this.dispatchEvent("h"),
				this.dispatchEvent(a ? "d" : "f")) : (this.dispatchEvent("i"),
				this.dispatchEvent(a ? "e" : "g"))
		}
		;
		z.e.pf = function(a) {
			var b = !0;
			switch (a.keyCode) {
				case 36:
					Jz(this, this.Cc());
					break;
				case 35:
					Jz(this, this.Tc());
					break;
				case 33:
					Az(this, this.Jf);
					break;
				case 34:
					Az(this, -this.Jf);
					break;
				case 37:
					var c = this.ge && this.Ld() ? 1 : -1;
					Az(this, a.shiftKey ? c * this.Jf : c * this.hq);
					break;
				case 40:
					Az(this, a.shiftKey ? -this.Jf : -this.hq);
					break;
				case 39:
					c = this.ge && this.Ld() ? -1 : 1;
					Az(this, a.shiftKey ? c * this.Jf : c * this.hq);
					break;
				case 38:
					Az(this, a.shiftKey ? this.Jf : this.hq);
					break;
				default:
					b = !1
			}
			b && a.preventDefault()
		}
		;
		z.e.ts = function(a) {
			this.m().focus && this.m().focus();
			var b = a.target;
			z.qg(this.ab, b) || z.qg(this.Hd, b) || (b = "click" == a.type,
			b && (0,
				z.w)() < this.nH + this.LK || (b || (this.nH = (0,
				z.w)()),
				this.YQ ? Jz(this, yz(this, a)) : (this.fB(a),
					this.Ve = Ez(this, yz(this, a)),
					this.cG = "vertical" == this.Nb ? this.$s < this.Ve.offsetTop : this.$s > Iz(this, this.Ve) + this.Ve.offsetWidth,
					a = z.Kf(this.m()),
					this.v().g(a, "mouseup", this.eB, !0).g(this.m(), "mousemove", this.fB),
				this.di || (this.di = new z.ae(200),
					this.v().g(this.di, "tick", this.IF)),
					this.IF(),
					this.di.start())))
		}
		;
		z.e.yF = function(a) {
			Az(this, (0 < a.detail ? -1 : 1) * this.hq);
			a.preventDefault()
		}
		;
		z.e.IF = function() {
			var a;
			if ("vertical" == this.Nb) {
				var b = this.$s
					, c = this.Ve.offsetTop;
				this.cG ? b < c && (a = zz(this, this.Ve) + this.Jf) : b > c + this.Ve.offsetHeight && (a = zz(this, this.Ve) - this.Jf)
			} else
				b = this.$s,
					c = Iz(this, this.Ve),
					this.cG ? b > c + this.Ve.offsetWidth && (a = zz(this, this.Ve) + this.Jf) : b < c && (a = zz(this, this.Ve) - this.Jf);
			z.l(a) && Dz(this, this.Ve, a)
		}
		;
		z.e.eB = function() {
			this.di && this.di.stop();
			var a = z.Kf(this.m());
			this.v().pa(a, "mouseup", this.eB, !0).pa(this.m(), "mousemove", this.fB)
		}
		;
		z.e.fB = function(a) {
			this.$s = xz(this, a)
		}
		;
		z.e.Cc = function() {
			return this.zb.Cc()
		}
		;
		z.e.Tc = function() {
			return this.zb.Tc()
		}
		;
		z.e.DF = function() {
			Fz(this);
			Lz(this);
			this.dispatchEvent("change")
		}
		;
		z.e.zo = function() {
			return this.Ao
		}
		;
		z.e.vN = function() {
			this.Ao = !1
		}
		;
		z.e.setOrientation = function(a) {
			if (this.Nb != a) {
				var b = this.T(this.Nb)
					, c = this.T(a);
				this.Nb = a;
				this.m() && (a = this.m(),
				z.Th(a, b) && (z.Wh(a, b),
					z.Uh(a, c)),
					b = this.ge && this.Ld() ? "right" : "left",
					this.ab.style[b] = this.ab.style.top = "",
					this.Hd.style[b] = this.Hd.style.top = "",
				this.Tb && (this.Tb.style[b] = this.Tb.style.top = "",
					this.Tb.style.width = this.Tb.style.height = ""),
					Fz(this))
			}
		}
		;
		z.e.C = function() {
			tz.o.C.call(this);
			this.di && this.di.H();
			delete this.di;
			this.Fn && this.Fn.H();
			delete this.Fn;
			delete this.ab;
			delete this.Hd;
			this.Tb && delete this.Tb;
			this.zb.H();
			delete this.zb;
			this.sb && (this.sb.H(),
				delete this.sb);
			this.Xj && (this.Xj.H(),
				delete this.Xj);
			this.oe && (this.oe.H(),
				delete this.oe);
			this.Tf && (this.Tf.H(),
				delete this.Tf)
		}
		;
		z.e.hq = 1;
		z.e.ao = function() {
			return this.zb.ao()
		}
		;
		z.e.W = function() {
			return this.zb.W()
		}
		;
		z.e.Fa = function(a) {
			Dz(this, this.ab, a)
		}
		;
		z.e.Xh = function() {
			return this.zb.Xh()
		}
		;
		z.e.ru = function(a) {
			Dz(this, this.Hd, this.zb.W() + a)
		}
		;
		z.e.G = function(a) {
			z.Q(this.m(), a);
			a && Fz(this)
		}
		;
		z.e.Xa = function(a) {
			this.fc != a && this.dispatchEvent(a ? "enable" : "disable") && (this.fc = a,
				vz(this, a),
			a || this.eB(),
				Yh(this.m(), "goog-slider-disabled", !a))
		}
		;
		z.e.isEnabled = function() {
			return this.fc
		}
		;
		z.v(Mz, tz);
		Mz.prototype.T = function(a) {
			return "vertical" == a ? "goog-slider-vertical" : "goog-slider-horizontal"
		}
		;
		z.v(Nz, z.R);
		z.e = Nz.prototype;
		z.e.defaults = {
			KD: 310,
			LD: 310,
			pg: 250,
			qg: 250,
			NQ: 2,
			opacity: .25,
			yX: "#eee"
		};
		z.e.ia = function(a) {
			Nz.o.ia.call(this, a);
			this.src = this.h.src;
			this.options.src = this.src;
			this.options.Sm = (this.options.KD - this.options.pg) / 2;
			this.options.Rm = (this.options.LD - this.options.qg) / 2;
			this.qr()
		}
		;
		z.e.qr = function() {
			var a = this.options;
			this.XB = (0,
				window.$)((0,
				z.ts)('\x3cdiv class\x3d"avatar-editor-container" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx"\x3e\x3cdiv class\x3d"avatar-editor-container-inner" style\x3d"height:\x3c%\x3dcontainerHeight%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;margin:\x3c%\x3dwindowMarginTop%\x3epx \x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window-shadow" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;"\x3e\x3c/div\x3e\x3cdiv class\x3d"avatar-editor-window-inner" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx; height:\x3c%\x3dcontainerHeight%\x3epx;margin:-\x3c%\x3dwindowMarginTop%\x3epx 0 0 -\x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cimg class\x3d"inner" title\x3d"拖动相片"/\x3e\x3c/div\x3e\x3c/div\x3e\x3cimg class\x3d"outer" style\x3d"opacity:\x3c%\x3dopacity%\x3e;"/\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-wrap"\x3e\x3ci class\x3d"zg-icon image-minus"\x3e\x3c/i\x3e\x3ci class\x3d"zg-icon image-plus"\x3e\x3c/i\x3e\x3cdiv class\x3d"goog-slider"\x3e\x3cdiv class\x3d"line"\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-thumb"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e', {
				containerWidth: a.LD,
				containerHeight: a.KD,
				windowHeight: a.pg,
				windowWidth: a.qg,
				windowMarginTop: a.Sm,
				windowMarginLeft: a.Rm,
				src: a.src,
				opacity: a.opacity
			}));
			this.wb = this.XB[0];
			this.XB.insertBefore(this.h);
			z.Q(this.h, !1);
			this.OM = z.L("avatar-editor-container-inner", this.wb);
			this.Gs = z.L("outer", this.wb);
			this.ny = z.L("inner", this.wb);
			this.uq = (0,
				window.$)(this.Gs);
			this.iv = (0,
				window.$)(this.ny);
			this.$F = 0;
			this.uq.load((0,
				z.r)(this.PJ, this));
			this.iv.load((0,
				z.r)(this.PJ, this));
			this.ny.src = this.Gs.src = this.options.src;
			this.vU = z.L("goog-slider",
				this.wb)
		}
		;
		z.e.D = function() {
			this.XA = new Mz;
			this.XA.w(this.vU);
			this.v().g(this.OM, ["mousedown", "touchstart"], function(a) {
				var b = new Yi(this.wb);
				b.addEventListener("drag", (0,
					z.r)(function(a) {
					var b = this.zoom;
					this.Le = {
						nq: this.options.qg / b,
						bo: this.options.pg / b,
						x: (this.options.Rm - (this.gG.left + (a.clientX - this.xu))) / b,
						y: (this.options.Sm - (this.gG.top + (a.clientY - this.yu))) / b
					};
					Qz(this)
				}, this));
				b.addEventListener("end", (0,
					z.r)(function() {
					b.H()
				}, this));
				b.Lm(a);
				this.Lm(a)
			});
			this.v().g(this.wb, ["touchmove"], function(a) {
				a.stopPropagation();
				a.preventDefault()
			});
			this.v().g(this.XA, "change", function() {
				var a = this.XA.W()
					, b = this.rK;
				Oz(this, (this.FV - b) * a / 100 + b)
			})
		}
		;
		z.e.PJ = function() {
			this.KP || (this.ny.complete && this.Gs.complete ? this.init() : (this.$F++,
			2 <= this.$F && this.init()))
		}
		;
		z.e.init = function() {
			var a, b;
			b = this.uq[0];
			if (b.naturalWidth)
				a = b.naturalWidth,
					b = b.naturalHeight;
			else {
				var c = new window.Image;
				c.src = b.src;
				a = c.width;
				b = c.height
			}
			this.Fs = a;
			this.Es = b;
			a = this.options.qg / this.Fs;
			b = this.options.pg / this.Es;
			this.rK = a = b > a ? b : a;
			this.FV = this.rK * this.options.NQ;
			this.Le = {
				bo: this.options.qg / a,
				nq: this.options.pg / a,
				x: 0,
				y: 0
			};
			Oz(this, a);
			Pz(this, this.Fs / 2, this.Es / 2);
			this.KP = !0
		}
		;
		z.e.Lm = function(a) {
			this.xu = a.clientX;
			this.yu = a.clientY;
			this.gG = this.iv.position();
			this.uq.position()
		}
		;
		z.e.support = function() {
			return "getContext" in window.document.createElement("canvas")
		}
		;
		z.v(z.Rz, z.R);
		z.Sz = 1;
		z.e = z.Rz.prototype;
		z.e.ia = function(a) {
			this.h = a;
			this.B()
		}
		;
		z.e.B = function() {
			this.FB = z.lB.Qu + "/upload_avatar";
			this.Gk = (0,
				window.$)((0,
				z.ts)('\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3duploadAction%\x3e"\x3e\x3clabel for\x3d"avt_file"\x3e\x3c/label\x3e\x3cinput type\x3d"file" accept\x3d"image/*" name\x3d"picture" id\x3d"avt_file" /\x3e\x3cinput type\x3d"hidden" name\x3d"handle_mode" value\x3d"upload" /\x3e\x3cinput type\x3d"hidden" name\x3d"type" value\x3d"\x3c%\x3dtype%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"dest_id" value\x3d"\x3c%\x3ddest_id%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"return_size" value\x3d"\x3c%\x3dreturn_size%\x3e" /\x3e\x3c/form\x3e', {
				uploadAction: this.FB,
				type: this.Qq,
				dest_id: this.Qq === z.Sz ? z.X[3] : this.IE,
				return_size: this.OI
			}));
			this.xK = (0,
				window.$)('\x3ciframe id\x3d"av_up_frame" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0px; width: 0px; left: -9000px;"\x3e\x3c/iframe\x3e');
			this.xK.appendTo(window.document.body);
			this.input = this.Gk.find("input[type\x3dfile]")[0];
			z.C ? (this.Gk.find("label").html((0,
				window.$)(this.h).html()),
				this.h.innerHTML = "",
				(0,
					window.$)(this.h).append(this.Gk),
				this.Gk.addClass("avatar-editor-form-ie")) : (this.Gk.insertAfter(this.h),
				(0,
					window.$)(this.h).click(window.$.proxy(function() {
					this.input.click()
				}, this)));
			this.v().g(this.input, "change", this.Ec).g(this.input, "click", function(a) {
				!1 === this.dispatchEvent("beforeopen") && a.preventDefault()
			});
			this.v().g(z.W, "iframe_data", function(a) {
				(a = a.yf) && !a.r ? "upload" === a.handle_mode ? (this.Tl = a.url,
					this.my = a.id,
				Tz() || this.ap()) : "resize" === a.handle_mode && ((0,
					window.$)(this.h).find("form").remove(),
					this.WD(a)) : z.U.message(a.msg)
			})
		}
		;
		z.e.Ec = function(a) {
			Uz(this);
			a = this.input = a.target;
			if (Tz()) {
				if (a.files && a.files[0]) {
					this.file = a = a.files[0];
					var b = new window.FileReader;
					b.onload = (0,
						z.r)(function(a) {
						this.Tl = a.target.result;
						this.ap()
					}, this);
					b.readAsDataURL(a)
				}
			} else
				this.Gk[0].submit();
			Yz(this)
		}
		;
		z.e.ap = function() {
			var a = this.dialog.X();
			this.ly = new window.Image;
			this.ly.src = this.Tl;
			a = (0,
				window.$)(a);
			a.html("");
			a.append(this.ly);
			this.xw = new Nz;
			this.xw.w(this.ly)
		}
		;
		z.e.WD = function(a) {
			a && !a.r ? this.data = a : z.U.message(a.msg);
			this.dispatchEvent({
				type: "success",
				src: this.data
			});
			this.dialog.G(!1)
		}
		;
		z.e.getData = function() {
			return this.data || null
		}
		;
		z.e.Jd = function(a) {
			return this.data ? this.data.url.replace(/(\.\w+)$/, "_" + a + "$1") : ""
		}
		;
		z.$z.prototype = {
			Ec: function(a) {
				if (a)
					this.vD.push(a);
				else {
					var b = {
						current: this.be,
						mo: this.mo(),
						zs: this.zs()
					};
					z.x(this.vD, function(a) {
						(0,
							window.setTimeout)(function() {
							a.call(null , b)
						})
					})
				}
			},
			remove: function(a) {
				a = this.items.indexOf(a);
				-1 !== a && (this.items.splice(a, 1),
					this.am = Math.ceil(this.items.length / this.hg),
					this.Ec());
				return a
			},
			mo: function() {
				return this.be < this.am
			},
			zs: function() {
				return 1 !== this.be
			},
			next: function() {
				this.mo() && (this.be += 1,
					this.Ec())
			},
			prev: function() {
				this.zs() && (--this.be,
					this.Ec())
			},
			random: function(a) {
				if (this.am >=
					2 * this.hg) {
					for (var b = [], c = 1; c < this.am + 1; c++)
						b.push(c);
					0 !== a && Tb(b, this.be);
					0 !== this.items.length % this.hg && Tb(b, this.am);
					this.be = b[Math.floor(Math.random() * b.length)]
				} else
					a === this.hg && this.items.reverse(),
						this.be = 1;
				this.Ec();
				return this.items.length > this.hg
			}
		};
		z.ka(cA, z.fz);
		cA.prototype.D = function() {
			z.fz.prototype.D.call(this);
			this.EC = (0,
				window.$)(this.h).data("ac-type");
			switch (this.EC) {
				case "popular_topics":
					dA(this);
					break;
				case "validation_reminder":
					eA(this);
					break;
				case "headline_reminder":
					fA(this);
					break;
				case "avatar_reminder":
					hA(this)
			}
		}
		;
		cA.prototype.C = function() {
			this.h.parentNode.removeChild(this.h);
			z.fz.prototype.C.call(this)
		}
		;
		cA.prototype.ms = function() {
			var a = this;
			window.$.post("/actioncard/uninterest", {
				type: this.EC
			}, function() {
				(0,
					window.$)(a.h).slideUp(function() {
					return a.H()
				})
			})
		}
		;
		z.ka(iA, z.fz);
		iA.prototype.ia = function(a) {
			z.fz.prototype.ia.call(this, a);
			jA(this)
		}
		;
		iA.prototype.D = function() {
			z.fz.prototype.D.call(this);
			var a = this.m();
			(0,
				window.$)(".js-adView", a).each(function() {
				var a = (0,
					window.$)(this);
				z.vk(a[0], function() {
					rt(a.data("view-track"))
				})
			});
			(0,
				window.$)("a.js-adLink", a).one("click", function() {
				var a = (0,
					window.$)(this)
					, c = a.attr("href");
				a.attr("href", z.Ze(c, "click", 1))
			})
		}
		;
		iA.prototype.ms = function() {
			var a = this
				, b = (0,
				window.$)(this.m());
			rt(b.data("close-track"));
			b.slideUp(function() {
				return a.H()
			})
		}
		;
		z.v(z.kA, z.pw);
		z.Wk("goog-checkbox-menuitem", function() {
			return new z.kA(null )
		});
		z.v(lA, Ou);
		lA.prototype.ea = function(a, b, c, d) {
			var f = ui(z.Kf(a))
				, g = this.Mh.x + f.x
				, f = this.Mh.y + f.y
				, h = dp(a)
				, g = g - h.x
				, f = f - h.y;
			fp(new Ff(g,f), a, b, c, null , null , d)
		}
		;
		z.v(mA, lA);
		mA.prototype.Ho = 0;
		mA.prototype.Am = function(a) {
			this.Ho = a
		}
		;
		mA.prototype.ea = function(a, b, c, d) {
			var f = ti(a), f = xi(f), g;
			g = z.I(a);
			g = Tf(g.La);
			g = new Ff(this.Mh.x + g.scrollLeft,this.Mh.y + g.scrollTop);
			var h = b
				, k = fp(g, a, h, c, f, 10, d);
			if (0 != (k & 496)) {
				if (k & 16 || k & 32)
					h ^= 2;
				if (k & 64 || k & 128)
					h ^= 1;
				k = fp(g, a, h, c, f, 10, d);
				0 != (k & 496) && fp(g, a, b, c, f, this.Ho, d)
			}
		}
		;
		z.v(z.nA, z.uw);
		z.e = z.nA.prototype;
		z.e.VU = !1;
		z.e.EG = 0;
		z.e.Of = null ;
		z.e.ia = function(a) {
			z.nA.o.ia.call(this, a);
			(a = a.getAttribute("for") || a.htmlFor) && this.attach(this.L().m(a), 1)
		}
		;
		z.e.D = function() {
			z.nA.o.D.call(this);
			this.Ef.forEach(this.WC, this);
			var a = this.v();
			a.g(this, "action", this.eR);
			a.g(this.L().wa(), "mousedown", this.BH, !0);
			z.D && a.g(this.L().wa(), "contextmenu", this.BH, !0)
		}
		;
		z.e.attach = function(a, b, c, d, f) {
			a && this.Ef.Mf(wa(a)) || (a ? (b = {
				h: a,
				wJ: b,
				OQ: c,
				Zw: d ? "contextmenu" : "mousedown",
				gz: f
			},
				this.Ef.set(wa(a), b)) : b = null ,
			this.ya && this.WC(b),
				a = z.Ca(this.KR, a),
			this.m() && this.v().g(this.m(), "keydown", a))
		}
		;
		z.e.KR = function(a, b) {
			if (27 == b.keyCode)
				a.focus();
			else {
				var c = nj(this, this.Sa);
				if (c) {
					var c = c.m()
						, d = new ud(b.hc,c);
					d.target = c;
					if (32 == b.keyCode || 13 == b.keyCode)
						z.Bd(c) ? $d(c, "keydown", !1, d) : Xd(c, "keydown", !1, d);
					32 == b.keyCode && this.hide()
				}
			}
		}
		;
		z.e.WC = function(a) {
			this.v().g(a.h, a.Zw, this.SH);
			"contextmenu" != a.Zw && this.v().g(a.h, "keydown", this.kS)
		}
		;
		z.e.detach = function(a) {
			if (!a || !this.Ef.Mf(wa(a)))
				throw Error("Menu not attached to provided element, unable to detach.");
			a = wa(a);
			if (this.ya) {
				var b = this.Ef.get(a);
				this.v().pa(b.h, b.Zw, this.SH)
			}
			this.Ef.remove(a)
		}
		;
		z.e.NA = function(a, b, c) {
			b = z.l(a.wJ) ? new z.ww(a.h,a.wJ,!0) : new mA(b,c);
			b.Am && b.Am(5);
			z.oA(this, b, a.OQ, a.gz, a.h)
		}
		;
		z.e.hide = function() {
			this.U() && (this.G(!1),
			this.U() || (this.EG = (0,
				z.w)(),
				this.Of = null ))
		}
		;
		z.e.tG = function() {
			return this.U() || 150 > (0,
					z.w)() - this.EG
		}
		;
		z.e.eR = function() {
			this.hide()
		}
		;
		z.e.SH = function(a) {
			pA(this, a)
		}
		;
		z.e.kS = function(a) {
			32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || pA(this, a);
			40 == a.keyCode && z.jo(this)
		}
		;
		z.e.BH = function(a) {
			this.U() && !this.Lf(a.target) && this.hide()
		}
		;
		z.e.Vc = function(a) {
			z.nA.o.Vc.call(this, a);
			this.hide()
		}
		;
		z.e.C = function() {
			z.nA.o.C.call(this);
			this.Ef && (this.Ef.clear(),
				delete this.Ef)
		}
		;
		z.v(qA, z.R);
		var rA = "headline"
			, qG = {
			experience: "/topic/bio/update",
			headline: "/people/edit"
		}
			, rG = "例：游戏开发者，科幻游戏爱好者;例：交互设计师，专注 iOS 平台产品设计;例：从医五年，口腔医学领域;例：金融硕士，三年从业经验;例：SNS 深度用户，社交产品设计师;例：十年互联网人，做过产品，写过代码;例：摄影爱好者，专注人像摄影;例：旅行爱好者，脚步遍及 32 个国家;例：读中外历史，研究各国文化;例：三次创业，两次失败，一次成功;例：坚持健身四年，专注有氧抗阻训练;例：做过动画，画过漫画".split(";");
		z.e = qA.prototype;
		z.e.B = function() {
			this.L();
			var a, b;
			"experience" === this.type ? (b = "添加我在 " + this.$H.yk + " 话题下的话题经验",
				a = "在 " + this.$H.yk + " 话题下的话题经验") : (b = "添加一句话介绍",
				a = "一句话介绍");
			a = '\n    \x3cdiv class\x3d"zm-bio-item ' + (this.content.length ? "normal" : "empty") + '"\x3e\n      \x3cp class\x3d"zm-bio-item-title"\x3e' + z.Wa(a) + '\x3c/p\x3e\n      \x3cinput class\x3d"zm-bio-item-checkbox" type\x3d"checkbox"/\x3e\n      \x3cimg class\x3d"avatar" src\x3d"' + z.Wa(z.X.Jd()) + '"\x3e\n      \x3cdiv class\x3d"zm-bio-item-empty-tip"\x3e\n        \x3cspan class\x3d"sprite-topic-exprience-icon-add"\x3e\x3c/span\x3e\n        \x3ca href\x3d"javascript:;" name\x3d"edit"\x3e' +
				z.Wa(b) + '\x3c/a\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zm-bio-item-content"\x3e\n        \x3cspan class\x3d"username"\x3e' + z.Wa(z.X[0]) + '\x3c/span\x3e\n        \x3cspan class\x3d"content"\x3e\n          ' + ("，" + z.Wa(this.content)) + '\n        \x3c/span\x3e\n        \x3ca href\x3d"javascript:;" name\x3d"edit" class\x3d"zu-edit-button"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  ';
			a = (0,
				window.$)(a);
			this.h = a.get(0);
			this.df();
			this.VB =
				a.find(".zm-bio-item-checkbox");
			this.rq = a.find(".content");
			this.ia(this.h)
		}
		;
		z.e.df = function() {
			var a = this.L()
				, b = (0,
				window.$)('\n    \x3cdiv class\x3d"zm-command"\x3e\n      \x3cspan class\x3d"limitTip"\x3e' + (40 - this.content.length) + ' / 40\x3c/span\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"cancel"\x3e取消\x3c/a\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"save" class\x3d"zg-r3px zg-btn-blue"\x3e保存\x3c/a\x3e\n    \x3c/div\x3e\n  ').get(0)
				, c = a.B("textarea", {
				className: "zm-bio-item-editor-input",
				value: this.content
			});
			this.sN = a.B("div", "zm-bio-item-editor", [a.B("div", "zg-form-text-input",
				c), b]);
			new z.Zn(c);
			a.appendChild(this.h, this.sN);
			this.Xe = (0,
				window.$)(c);
			this.MG = a.Vh("limitTip", b);
			this.type !== rA && this.Xe.prop("placeholder", rG[Math.floor(Math.random() * rG.length)])
		}
		;
		z.e.ia = function(a) {
			qA.o.ia.call(this, a);
			this.Qp = this.content.length ? "normal" : "empty"
		}
		;
		z.e.D = function() {
			var a = this;
			qA.o.D.call(this);
			this.v().g(this.h, "click", function() {
				"normal" === this.Qp ? this.Hc(!0) : "empty" === this.Qp && (tA(this, "editing"),
					sA(this))
			});
			(0,
				window.$)(this.h).find("a").click(function(b) {
				switch ((0,
					window.$)(b.target).prop("name")) {
					case "edit":
						tA(a, "editing");
						sA(a);
						break;
					case "cancel":
						a.fo();
						break;
					case "save":
						a.vs()
				}
				b.stopPropagation()
			});
			this.Xe.on("keyup", function(b) {
				b = 40 - (0,
						window.$)(b.target).val().length;
				Yh(a.MG, "exceed", 0 > b);
				z.wg(a.MG, b + " / 40")
			})
		}
		;
		z.e.vs = function() {
			var a = this.Xe.val();
			if (40 > a.length) {
				var b = this
					, c = qG[this.type];
				("experience" === this.type ? window.$.post(c, {
					bio: a,
					tid: this.Ci
				}) : window.$.post(c, {
					data: JSON.stringify({
						headline: a
					})
				})).then(function() {
					a.length ? (b.rq.text("，" + a),
						b.Hc(!0),
						tA(b, "normal")) : (b.rq.text(""),
						b.Hc(!1),
						tA(b, "empty"));
					b.ka(a)
				})
			}
		}
		;
		z.e.fo = function() {
			this.content.length ? tA(this, "normal") : tA(this, "empty")
		}
		;
		z.e.ka = function(a) {
			this.content = a;
			this.content.length ? this.rq.text("，" + a) : this.rq.text("")
		}
		;
		z.e.Hc = function(a) {
			this.VB.prop("checked", a);
			a && this.dispatchEvent("bio_item_checked")
		}
		;
		z.e.Va = function() {
			return this.content
		}
		;
		z.e.getToken = function() {
			return this.Ci
		}
		;
		z.e.sf = function() {
			return this.VB.prop("checked")
		}
		;
		z.v(uA, z.Dl);
		var xA = null ;
		z.e = uA.prototype;
		z.e.Em = function() {
			if (!this.RQ && this.KG)
				AA(this);
			else {
				if (!this.ta) {
					this.ta = new z.S;
					this.ta.Ya("编辑话题经验");
					z.Ij(this.ta, null );
					this.ta.Bm(!0);
					var a = this.ta.X();
					z.T.add(this.ta.m(), "bio-editor-modal");
					a.innerHTML = '\x3cdiv class\x3d"bio-editor-modal-title"\x3e可以填写你从事的职业、取得的资格或过往的经历，让你在这个问题下的回答更具说服力。\x3c/div\x3e';
					this.render(a)
				}
				this.ta.G(!0)
			}
		}
		;
		z.e.render = function(a) {
			var b = this;
			this.h = z.M("div", "zu-bio-editor-wrap", [this.QP = z.M("div", "zu-bio-editor-inner-wrap"), this.sc = z.M("div", "zm-command", [this.yn = z.M("a", {
				name: "save",
				href: "#",
				className: "zg-r3px zg-btn-blue"
			}, "完成")])]);
			var c = z.X[4];
			c.length && BA(this, c, {
				type: rA,
				Ci: "headline"
			});
			z.x(this.hE, function(a) {
				BA(this, a[1], {
					type: "experience",
					yk: a[0][0],
					Ci: a[0][3]
				})
			}, this);
			this.NP && z.Q(this.sc, !1);
			a.appendChild(this.h);
			this.v().g(this.sc, "click", this.Oa);
			this.g("bio_item_checked", function(a) {
				z.x(this.items,
					function(b) {
						b !== a.target && b.Hc(!1)
					})
			});
			(0,
				window.$)(Cj(this.ta)).click(function() {
				b.ba({
					action: "click_edit_topic_experience_close"
				})
			})
		}
		;
		z.e.getSelection = function() {
			return this.items.find(function(a) {
				return a.sf()
			})
		}
		;
		z.e.tx = function() {
			var a = this.getSelection();
			return a && a.Va()
		}
		;
		z.e.Oa = function(a) {
			(a = this.Hg(a.target)) && "save" === a.name && (this.ta && (CA(this),
				this.ta.G(!1)),
				this.dispatchEvent("change"),
				this.ba({
					action: "click_edit_topic_experience_submit"
				}))
		}
		;
		z.e.ba = function(a) {
			this.dispatchEvent(Object.assign({
				type: "trackRequested",
				category: "edit_profile"
			}, a))
		}
		;
		z.v(z.DA, z.Dl);
		z.ma(z.DA);
		z.e = z.DA.prototype;
		z.e.B = function() {
			this.mN = !0;
			this.h = z.M("div", null , [this.yQ = z.M("div", null , [this.Vg = z.M("div", "zm-favo-list-content"), this.HC = z.M("div", "zh-favo-add-new-wrap zm-command", this.yU = z.M("a", {
				"class": "zm-favo-dialog-create zg-left",
				href: "javascript:;"
			}, "+ 创建收藏夹"), this.nw = z.M("a", {
				href: "javascript:;",
				"class": "zg-btn-blue"
			}, "关闭")), this.Cv = z.M("div", "zh-favo-add-new-wrap zm-command", this.EM = z.M("a", {
				href: "javascript:;",
				"class": ""
			}, "取消"), this.zU = z.M("a", {
					"class": "zm-favo-dialog-create zg-btn-blue",
					href: "javascript:;"
				},
				"创建收藏夹"))]), this.rx = z.M("div", {
				"class": "zh-favo-add-form",
				style: "display:none"
			}, [z.M("div", null , ["标题", this.qB = z.M("span", {
				"class": "zh-favo-add-title-error"
			}, "请填写标题")]), z.M("div", "zg-section", this.gi = z.M("input", {
				"class": "zg-form-text-input"
			})), z.M("div", null , "描述（可选）"), z.M("div", {
				"class": "zg-section zg-form-text-input"
			}, this.Qj = z.M("textarea", {
				"class": "zg-editor-input",
				style: "height:66px"
			})), this.sI = z.M("label", null , [this.wG = z.M("input", {
				type: "radio",
				checked: "checked",
				value: "public",
				name: "mode"
			}),
				z.M("strong", null , " 公开 "), z.M("span", "zg-gray-normal", "公开后不能设置为私密")]), this.CG = z.M("br"), this.qI = z.M("label", null , [this.vG = z.M("input", {
				type: "radio",
				value: "private",
				name: "mode"
			}), z.M("strong", null , " 私密 "), z.M("span", "zg-gray-normal", "只有你可以查看这个收藏夹")]), z.M("div", "zm-command", [this.Ww = z.M("label", {
				href: "javascript:;",
				"class": "zh-favo-error-message-label zg-left"
			}, ""), this.dB = z.M("a", {
				href: "javascript:;",
				"class": "zg-mr10"
			}, "取消"), this.fr = z.M("a", {
				href: "javascript:;",
				"class": "zg-mr10"
			}, "完成"), this.zv = z.M("a",
				{
					"class": "zg-btn-blue"
				}, "确认创建")])])]);
			z.Q(this.qB, !1);
			z.Q(this.Cv, !1);
			(new z.Fp(this.rB)).w(this.gi);
			(new z.Fp(this.Iw)).w(this.Qj);
			z.x(this.az, function(a) {
				FA(this, a)
			}, this);
			this.az.length || (this.Vg.innerHTML = '\x3cdiv id\x3d"zh-fav-list-item-place-holder" class\x3d"zg-r5px zm-fav-list-item-place-holder"\x3e你可以创建多个收藏夹，将答案分类收藏\x3c/div\x3e ',
				z.Q(this.Cv, !0),
				z.Q(this.HC, !1));
			EA(this);
			this.ta.X().innerHTML = "";
			this.ta.X().appendChild(this.h);
			this.ta.ea()
		}
		;
		z.e.dc = function() {
			this.iM || (this.iM = !0,
				this.v().g(this.dB, "click", function() {
					this.sa ? JA(this, 0) : MA(this);
					QA("click_add_collection_cancel")
				}).g(this.yU, "click", function() {
					z.W.Ha({
						type: "ga_click_add_collection"
					});
					JA(this, 1);
					z.Ck("collect", "click_add_collection_start", "collect_answer_box")
				}).g(this.nw, "click", function() {
					QA("click_add_collection_close");
					MA(this)
				}).g(this.zU, "click", function() {
					z.W.Ha({
						type: "ga_click_add_collection"
					});
					JA(this, 1)
				}).g(this.EM, "click", function() {
					MA(this)
				}).g(this.fr, "click",
					function() {
						MA(this)
					}).g(this.zv, "click", function() {
					var a = this.Qj.value
						, b = this.gi.value;
					a && QA("click_add_collection_discription", a);
					b && QA("click_add_collection_title", b);
					this.ah()
				}).g(this.Vg, "click", this.bS).g(this.gi, "change", function() {
					z.Q(this.qB, !1)
				}).g(this.wG, "click", function() {
					QA("click_add_collection_public")
				}).g(this.vG, "click", function() {
					QA("click_add_collection_private")
				}))
		}
		;
		z.e.bS = function(a) {
			var b = z.Kg(a.target, "A");
			if (b && !this.locked) {
				a = b.getAttribute("data-lid");
				var c = !1;
				z.T.has(b, "zm-favo-list-item-link-active") ? (c = !0,
					this.bE = a) : this.ZD = a;
				b = new z.Mn;
				b.add("answer_id", this.sa);
				b.add("favlist_id", a);
				this.yA = new z.V(!0);
				this.locked = !0;
				this.v().Aa(this.yA, "complete", this.zL);
				this.yA.ajax(c ? "/collection/remove" : "/collection/add", b.kd())
			}
		}
		;
		z.e.zL = function() {
			this.locked = !1;
			this.nw.innerHTML = "关闭";
			var a = z.sf(this.yA);
			a && !a.r ? (a = z.Of("zm-favo-list-item-link", this.Vg),
				z.x(a, function(a) {
					var c = a.getAttribute("data-lid")
						, d = z.L("num", a)
						, f = (0,
						window.parseInt)(d.innerHTML, 10);
					c === this.bE ? (d.innerHTML = f - 1 + "",
						z.T.remove(a, "zm-favo-list-item-link-active")) : c === this.ZD && (d.innerHTML = f + 1 + "",
						z.T.add(a, "zm-favo-list-item-link-active"))
				}, this),
				this.ZD = this.bE = null ,
				On("Favorite", "add_favorite")) : z.U.message("添加失败: " + a.msg)
		}
		;
		z.e.ek = function() {
			this.dc();
			this.nw.innerHTML = "关闭";
			this.sa ? (z.Q(this.fr, !1),
				JA(this, 0)) : (JA(this, 1),
				z.Q(this.dB, !1),
				this.fr.innerHTML = "取消")
		}
		;
		z.e.show = function(a) {
			a ? (IA(this),
				this.ta.G(!0),
				this.ek()) : (EA(this, "添加到收藏夹", '\x3cdiv style\x3d"text-align: center; color: #999;"\x3e收藏夹加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'),
				this.ta.G(!0),
				this.ds())
		}
		;
		z.e.ds = function() {
			this.sa && window.$.get("/collections/json", {
				answer_id: this.sa
			}).done((0,
				z.r)(this.MR, this))
		}
		;
		z.e.MR = function(a) {
			a && !a.r && (this.az = a.msg[0],
				this.ht = a.msg[1],
				IA(this),
				this.ek())
		}
		;
		z.e.ah = function() {
			if (!this.xhr || !this.xhr.Rb()) {
				(0,
					window.$)(this.Ww).text("").hide();
				var a = z.zn(this.gi.value);
				if (a && a !== this.rB) {
					a = KA(this);
					this.sa && a.add("answer_id", this.sa);
					if (this.Wl) {
						if (this.LP.kd() === a.kd()) {
							MA(this);
							return
						}
						a.add("favlist_id", this.aE[0])
					}
					this.xhr = new z.V(!0);
					OA(this, this.xhr, this.zv, this.Wl);
					this.v().Aa(this.xhr, "complete", this.rL);
					this.xhr.ajax(this.Wl ? "/collection/update" : "/collection/create", a.kd())
				} else
					z.Q(this.qB, !0)
			}
		}
		;
		z.e.rL = function() {
			var a = z.sf(this.xhr);
			a && !a.r ? this.Wl ? (MA(this),
				z.U.message("编辑成功"),
				(0,
					window.setTimeout)(function() {
					window.location.reload()
				}, 1E3),
				this.Wl = !1) : this.sa ? (z.Q(this.Cv, !1),
				z.Q(this.HC, !0),
				JA(this, 0),
				this.ht.push(a.msg[0]),
				FA(this, a.msg, !0),
				this.gi.value = "",
				this.Qj.value = "") : (MA(this),
				z.U.message("创建成功"),
				(0,
					window.setTimeout)(function() {
					window.location.href = "/collections/mine"
				}, 1E3)) : PA(this.Ww, this.Wl, a.msg)
		}
		;
		z.e.U = function() {
			return this.ta.U()
		}
		;
		var NA = "close";
		z.DA.prototype.Eg = function() {
			(0,
				window.$)(window).on("beforeunload.FavoDiag", (0,
				z.r)(function() {
				return "你对收藏夹的修改还未保存，确认离开该页面吗？"
			}, this))
		}
		;
		z.DA.prototype.Ph = function() {
			(0,
				window.$)(window).off("beforeunload.FavoDiag")
		}
		;
		var WA = {
			SB: function(a, b) {
				return window.$.post("/node/ColumnPostVoteBarV2", {
					method: b,
					params: {
						post_id: a
					}
				})
			},
			oF: function(a) {
				return window.$.get("/node/ColumnPostVoteInfoV2", {
					params: {
						post_id: a
					}
				})
			}
		};
		z.v(RA, z.R);
		var TA = {
			If: 1,
			Ni: -1,
			uC: 0
		};
		RA.prototype.defaults = {
			jV: "up",
			oN: "down",
			QM: "count",
			Tt: "pressed"
		};
		z.rc(RA.prototype, TA);
		z.e = RA.prototype;
		z.e.O = TA.uC;
		z.e.w = function(a) {
			RA.o.w.call(this, a);
			var b = this.J;
			a = this.K = (0,
				window.$)(a);
			this.pv = (0,
				window.$)("." + b.jV, a);
			this.gv = (0,
				window.$)("." + b.oN, a);
			this.YB = (0,
				window.$)("." + b.QM, a);
			b = this.pv.hasClass(this.J.Tt);
			a = this.gv.hasClass(this.J.Tt);
			b ? this.O = TA.If : a && (this.O = TA.Ni);
			UA(this);
			this.pv.click(window.$.proxy(this.Ku, this));
			this.gv.click(window.$.proxy(this.Ju, this));
			return this
		}
		;
		z.e.getState = function() {
			return this.O
		}
		;
		z.e.mc = z.Lm(function(a) {
			a !== this.O && z.lc(TA, a) && (this.dispatchEvent({
				type: "action",
				data: {
					state: a
				}
			}),
			this.Oh && "pending" === this.Oh.state() && this.Oh.abort(),
				SA(this, this.O, a),
				this.O = a,
				UA(this),
				this.HU().done((0,
					z.r)(function(a) {
					a.r || this.Ec()
				}, this)))
		}, !0);
		z.e.HU = function() {
			var a = {};
			a[TA.If] = "vote_up";
			a[TA.Ni] = "vote_down";
			a[TA.uC] = "vote_neutral";
			return this.Oh = ("post" === this.entryType ? WA.SB : XA.SB)(this.Ib, a[this.O])
		}
		;
		z.e.Ku = function() {
			this.mc(this.O === TA.Ni ? TA.If : this.O ^ TA.If)
		}
		;
		z.e.Ju = function() {
			this.mc(this.O === TA.If ? TA.Ni : this.O ^ TA.Ni)
		}
		;
		z.e.Ec = function() {
			this.dispatchEvent("change")
		}
		;
		z.v(VA, z.R);
		z.e = VA.prototype;
		z.e.ib = function() {
			return this.Um.data("votecount")
		}
		;
		z.e.Ec = function() {
			this.dispatchEvent("change")
		}
		;
		z.e.lp = function(a) {
			if (a = (0,
					z.qb)(a))
				a = (0,
					window.$)(a),
					this.Um.replaceWith(a),
					this.Um = a,
					this.dc(),
					this.Ec()
		}
		;
		z.e.dc = function() {
			function a(a, d) {
				var f = z.M("div", "zm-voters");
				a.appendChild(f);
				var g = z.M("div", "listview");
				f.appendChild(g);
				var h = ("post" === b.entryType ? "/post/" : "/answer/") + b.Ib + "/voters_profile"
					, k = new z.hw({
					use: [],
					source: function() {
						return window.$.get(h).then(function(a) {
							var c = a.paging;
							c && (c.total && (b.Um.data("votecount", c.total),
								b.Ec()),
								h = c.next);
							return {
								results: a.payload,
								next: !!h
							}
						})
					}
				});
				k.w(g);
				k.mf().setAttribute("hidden", "true");
				z.fd(d, k);
				k.v().Aa(k, "next", function() {
					k.jb().length ? (k.mf().removeAttribute("hidden"),
						k.use("autoload", {
							YC: !1,
							viewport: f
						})) : (k.H(),
						f.innerHTML = '\x3cdiv class\x3d"empty-results"\x3e还没有人赞同\x3c/div\x3e')
				});
				return k.Zl()
			}
			var b = this;
			(0,
				window.$)("a.more", this.Um).click(function() {
				var c = z.U.async({
					modal: !0,
					title: b.ib() + " 人赞同",
					className: "zm-voters-dialog",
					tw: window.$.Deferred(function(b) {
						(0,
							window.setTimeout)(function() {
							a(c.X(), c).then(function() {
								b.resolve(null )
							})
						})
					}).promise()
				});
				c.v().g(b, "change", function() {
					c.Ya(b.ib() + " 人赞同")
				})
			})
		}
		;
		z.e.D = function() {
			this.Um = (0,
				window.$)(this.h);
			this.dc()
		}
		;
		z.v(ZA, z.gs);
		z.e = ZA.prototype;
		z.e.D = function() {
			ZA.o.D.call(this);
			this.ready(function() {
				if (this.Na && this.Na.on)
					this.Na.on("load", this.uy, !1, this)
			})
		}
		;
		z.e.uy = function() {
			var a = new $A(this,!0);
			z.fd(this, a);
			this.v().g(a, sG, function() {
				var a = !this.Id && this.Na.Sb.FullScreenPlugin;
				a && ZD(a);
				(0,
					window.$)(this.cr).text("保存草稿并离开");
				(0,
					window.$)(this.h).find(".zu-edit-button span").text("修改（有未发布的编辑草稿）")
			}).g(a, hB, function() {
				(0,
					window.$)(this.cr).text("取消");
				(0,
					window.$)(this.h).find(".zu-edit-button span").text("修改")
			});
			var b = cs(this);
			this.v().g(b, "focus", function() {
				a.Sd.start()
			}).g(b, "blur", function() {
				z.cB(a);
				this.PM !== this.nf() && a.lu()
			}).g(this, "saveSuccess",
				function() {
					delete z.yE.Zd;
					z.cB(a);
					z.fB(a)
				}).g(this, "save_unchanged", function() {
				delete z.yE.Zd;
				z.cB(a);
				z.fB(a)
			});
			a.w(this.sc);
			z.yE.Zd && z.yE.Zd[0] && (0,
				window.$)(this.cr).text("保存草稿并离开")
		}
		;
		z.e.cl = function() {
			this.sc = z.M("div", "zm-command", [(0,
				window.$)('\x3cdiv class\x3d"draft-controls zg-left"\x3e\x3cspan class\x3d"draft-saved-info"\x3e\x3ca class\x3d"draft-clear-button goog-inline-block" href\x3d"#" data-tip\x3d"s$b$取消编辑并删除草稿"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e\x3cspan class\x3d"hide-text"\x3e清除草稿\x3c/span\x3e\x3c/a\x3e\x3cspan class\x3d"draft-saved-time"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e')[0], this.cr = z.M("a", {
					"class": "zm-command-cancel",
					name: "cancel",
					href: "#"
				},
				"取消"), this.yn = z.M("a", {
				"class": "zg-r3px zg-btn-blue",
				name: "save",
				href: "#"
			}, "发布")]);
			this.Hb.appendChild(this.sc)
		}
		;
		z.e.ix = function() {
			var a = this;
			window.$.get("/draft/get", {
				qid: this.tp
			}, function(b) {
				b.r || (a.su(b.msg),
					a.PM = b.msg)
			})
		}
		;
		z.e.gF = function() {
			var a = [];
			if (!this.disabled) {
				var b = "修改";
				z.yE.Zd && z.yE.Zd[0] && (b = "修改（有未发布的编辑草稿）");
				a.push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e\x3cspan\x3e' + b + "\x3c/span\x3e\x3c/a\x3e")
			}
			return a.join("")
		}
		;
		z.v($A, z.R);
		var sG = "saveContent"
			, hB = "clearContent";
		z.e = $A.prototype;
		z.e.C = function() {
			dB(this);
			this.Sd.H();
			$A.o.C.call(this)
		}
		;
		z.e.w = function(a) {
			this.h = a;
			this.Js = z.L("draft-saved-info", a);
			z.Q(this.Js, !1);
			this.dG = z.L("draft-saved-time", a);
			this.CM = z.L("draft-clear-button", a);
			a = this.v().g(this.Sd, "tick", this.lu).g(this.CM, "click", this.DM).g(this.Vr, "keydown", this.pQ);
			"oninput" in this.Vr && !z.C ? a.g(this.Vr, "input", this.SP) : a.g(this.Vr, "keydown", this.TP);
			var b = z.yE.Zd && 1E3 * z.yE.Zd[1];
			b && (eB(this, b),
				this.oB = (0,
					window.setInterval)((0,
					z.r)(function() {
					eB(this, b)
				}, this), 22E3))
		}
		;
		z.e.pQ = function(a) {
			(a.metaKey || a.ctrlKey) && "s" === gu[a.keyCode] && (this.FQ(),
			this.isContentEditable || a.preventDefault())
		}
		;
		z.e.Sw = function() {
			(0,
				window.$)(window).on("beforeunload.DraftSaver", (0,
				z.r)(function() {
				return "你的修改还未成功保存，确认离开该页面吗？"
			}, this))
		}
		;
		z.e.Dr = function() {
			(0,
				window.$)(window).off("beforeunload.DraftSaver")
		}
		;
		z.e.SP = function() {
			z.cB(this);
			aB(this)
		}
		;
		z.e.TP = function(a) {
			bi(a.keyCode) && (z.cB(this),
				aB(this))
		}
		;
		z.e.ka = function(a) {
			this.vb.ka(a);
			this.vb.Cp()
		}
		;
		z.e.Va = function() {
			return this.vb.nf()
		}
		;
		z.e.TI = function() {
			if (!this.Gd) {
				var a = this.Va();
				if (a) {
					bB(this, "保存中…");
					var a = (new z.Uo).add("qid", this.qa).add("content", a).add("timestamp", (0,
						z.w)())
						, b = new z.V;
					b.ajax("/answer/draft/save", a.toString(), "POST");
					this.v().g(b, "success", (0,
						z.r)(this.ah, this));
					this.IG = b
				}
			}
		}
		;
		z.e.xV = 150;
		z.e.lu = z.Xn($A.prototype.xV, $A.prototype.TI);
		z.e.GQ = 350;
		z.e.FQ = z.Xn($A.prototype.GQ, $A.prototype.TI);
		z.e.VP = 3E3;
		z.e.RP = z.Xn($A.prototype.VP, function() {
			this.Gd || (this.Va() ? this.lu() : z.fB(this))
		});
		z.e.ah = function(a) {
			a = z.sf(a.target);
			var b = ""
				, c = !1;
			0 === a.r ? b = "已保存" : (b = a.msg || "保存失败！请稍后再试。",
				c = !0);
			dB(this);
			z.Q(this.Js, !0);
			bB(this, b, c);
			this.Dr();
			"保存成功" === a.msg && this.dispatchEvent(sG);
			this.Sd.start()
		}
		;
		z.e.DM = function(a) {
			a.preventDefault();
			z.U.confirm("清除草稿", this.nG ? "你确定要清除保存的草稿并取消编辑吗？" : "你确定要清除保存的草稿吗？", function(a) {
				a && (this.nG ? (z.fB(this),
					this.vb.dispatchEvent("cancel_edit"),
					this.vb.Bi()) : (this.ka(""),
					z.fB(this),
					js(this.vb)))
			}, this)
		}
		;
		var kB = z.Nj(function() {
			var a = iB();
			(0,
				window.$)("body").append(a);
			return a
		});
		z.v(oB, z.R);
		oB.prototype.B = function() {
			oB.o.B.call(this);
			var a = (0,
				window.$)('\x3cdiv class\x3d"carousel"\x3e\x3cdiv class\x3d"carousel-navigation-btn"\x3e\x3cdiv class\x3d"carousel-left-btn copyright-ico-prev"\x3e \x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"carousel-content"\x3e\x3c/div\x3e\x3cdiv class\x3d"carousel-navigation-btn"\x3e\x3cdiv class\x3d"carousel-right-btn copyright-ico-next"\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
			this.vQ = (0,
				window.$)(".carousel-left-btn", a);
			this.LT = (0,
				window.$)(".carousel-right-btn", a);
			this.rD = (0,
				window.$)(".carousel-content", a);
			this.sD = (0,
				window.$)("\x3cdiv\x3e\x3c/div\x3e").addClass("carousel-navigation-dot-group");
			z.x(this.contents, function(a, c) {
				this.rD.append(a);
				this.sD.append(this.Hr[c])
			}, this);
			this.rD.append(this.sD);
			pB(this, 0);
			this.ia(a[0]);
			this.K = (0,
				window.$)(this.h).addClass(this.className)
		}
		;
		oB.prototype.D = function() {
			oB.o.D.call(this);
			this.vQ.click(window.$.proxy(this.prev, this));
			this.LT.click(window.$.proxy(this.next, this))
		}
		;
		oB.prototype.next = function() {
			pB(this, this.Ag + 1) && this.dispatchEvent({
				type: "rightShow",
				offset: this.Ag
			})
		}
		;
		oB.prototype.prev = function() {
			pB(this, this.Ag - 1) && this.dispatchEvent({
				type: "leftShow",
				offset: this.Ag
			})
		}
		;
		z.v(z.sB, z.gs);
		z.e = z.sB.prototype;
		z.e.iF = function() {
			var a = z.Mf("h2", "zm-editable-content", z.J("zh-question-title"))[0];
			return {
				title: a && (/answer\/\d+$/.test(window.location.pathname) ? z.Eg(a) : a.firstChild.nodeValue) || "",
				zk: this.ej
			}
		}
		;
		z.e.tx = function() {
			return this.Vv
		}
		;
		z.e.qu = function(a) {
			this.kb = a
		}
		;
		z.e.Xa = function(a, b) {
			this.enabled = a;
			this.Os ? (this.Bi(),
				this.Wb = b,
				this.bc.innerHTML = this.Wb) : b && (this.Wb = b)
		}
		;
		z.e.ia = function(a) {
			z.sB.o.ia.call(this, a);
			this.Os = !0;
			z.T.add(this.bc, "zu-answer-form-disabled-wrap")
		}
		;
		z.e.C = function() {
			this.Ls && (z.N(this.Ls),
				this.cK = this.Ls = null );
			z.sB.o.C.call(this)
		}
		;
		z.e.sj = function(a) {
			this.qu(a.kb);
			this.Hq && (this.Hq.checked = a.kb)
		}
		;
		z.e.D = function() {
			z.sB.o.D.call(this);
			this.v().g(z.ek, "anon_change", this.sj)
		}
		;
		z.e.df = function() {
			z.sB.o.df.call(this);
			var a = this.L()
				, b = z.X.qb();
			this.Ls = a.B("div", "zh-answer-form clearfix", [b ? vn(this.bK) : "", this.cK = a.B("div", null , [a.B("div", "zu-answer-form-title", [b ? wn(this.bK) : "我来回答这个问题", this.jD = a.B("span")])])]);
			b && (b = vA.value,
				"TOPIC" === vA.type ? vB(this, b) : tB(this, b),
				(0,
					window.$)(this.jD).on("click", "a.zu-edit-button", function(a) {
					z.Ak({
						category: "edit_profile",
						action: "click_edit_topic_experience_start",
						label: "add_answer_box_edit_topic_experience",
						attributes: {
							text: (0,
								window.$)(a.target).text()
						}
					})
				}));
			a.Ps(this.Ls, this.ej);
			this.v().g(this.cK, "click", this.Oa);
			z.X.qb() ? z.X.Yd || wB(this, '\x3cdiv class\x3d"activate-mask-tip-answer"\x3e' + (z.X.Nn ? "为了正常使用知乎的提问、回答、评论和编辑功能，请验证你的邮箱。" : "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机或邮箱。") + "\x3c/div\x3e", '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:"\x3e我要激活\x3c/a\x3e\x3c/div\x3e') : wB(this, '\x3cdiv class\x3d"signin-mask-tip-answer"\x3e\x3c/div\x3e', '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:"\x3e我要回答\x3c/a\x3e\x3c/div\x3e')
		}
		;
		z.e.ks = function(a) {
			switch (a) {
				case "edit_bio":
					zB(this);
					break;
				case "cancel_delete":
					this.dispatchEvent("cancel_delete_answer");
					break;
				case "answer_my_question":
					xB(this)
			}
			return !0
		}
		;
		z.e.ze = function() {
			"editing" === this.status ? this.Hb && z.Q(this.Hb, !0) : this.Hb && z.Q(this.Hb, !1);
			z.Q(this.fd, !1);
			this.bc && z.Q(this.bc, !this.enabled)
		}
		;
		z.e.HM = '\x3cdiv class\x3d"zm-command clearfix"\x3e\x3clabel class\x3d"zg-left anno-box"\x3e\x3cinput name\x3d"anno-checkbox" type\x3d"checkbox"\x3e 匿名 \x3cspan\x3e\x26nbsp\x3c/span\x3e\x3c/label\x3e \x3clabel class\x3d"zg-left copyright-box"\x3e\x3cinput name\x3d"copyright-checkbox" type\x3d"checkbox"\x3e未经许可，禁止转载' + (z.lB.lb ? "" : '\x3ca href\x3d"/terms#sec-licence-6" target\x3d"_blank"\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark" style\x3d"margin-left: 5px;" id\x3d"copyright_question_mark" data-copyright-demo\x3d"true"\x3e\x3c/i\x3e\x3c/a\x3e') +
			'\x3c/label\x3e \x3c% if (questionStatus !\x3d\x3d "normal") { %\x3e\x3cspan class\x3d"zg-gray-normal" style\x3d"margin-right:5px;"\x3e被\x3c%\x3d statusText %\x3e的问题不允许添加新的回答\x3c/span\x3e\x3ca class\x3d"zg-right" data-tip\x3d"s$b$为什么部分问题会被「关闭」「建议修改」？" href\x3d"/question/21290061 "\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark"\x3e\x3c/i\x3e\x3c/a\x3e\x3c% } %\x3e\x3cspan class\x3d"\x3c%\x3d (questionStatus !\x3d\x3d "normal" ? "hidden" : "") %\x3e zg-right"\x3e\x3ca class\x3d"submit-button zg-btn-blue" name\x3d"save" href\x3d"javascript:"\x3e发布回答\x3c/a\x3e\x3c/span\x3e\x3cdiv class\x3d"draft-controls zg-right ' +
			(z.lB.lb ? "draft-controls-mobile" : "") + '"\x3e\x3cspan class\x3d"draft-saved-info"\x3e\x3ca class\x3d"draft-clear-button goog-inline-block" href\x3d"#" data-tip\x3d"s$b$删除草稿"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e\x3cspan class\x3d"hide-text"\x3e清除草稿\x3c/span\x3e\x3c/a\x3e\x3cspan class\x3d"draft-saved-time"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
		z.e.cl = function() {
			var a = (0,
				z.ts)(this.HM);
			this.sc = z.Zf(a({
				questionStatus: z.ck.status,
				statusText: {
					suggest: "建议修改",
					evaluate: "建议修改",
					close: "关闭"
				}[z.ck.status]
			}));
			this.yn = (0,
				window.$)(".submit-button", this.sc)[0];
			yB(this);
			this.RD = (0,
				window.$)("input[name\x3dcopyright-checkbox]", this.sc)[0];
			this.RD.checked = !this.pr;
			this.Hb.appendChild(this.sc);
			this.ready(function() {
				if (this.Na && this.Na.on)
					this.Na.on("load", this.uy, !1, this)
			});
			z.lB.lb || rB()
		}
		;
		z.e.uy = function() {
			var a = new $A(this);
			z.fd(this, a);
			this.v().g(a, sG, function() {
				var a = !this.Id && this.Na.Sb.FullScreenPlugin;
				a && ZD(a)
			}, !1, this);
			var b = cs(this);
			this.v().g(b, "focus", function() {
				a.Sd.start()
			}).g(b, "blur", function() {
				z.cB(a);
				a.lu()
			}).g(this, "saveSuccess", function() {
				z.cB(a);
				z.fB(a)
			});
			a.w(this.sc);
			this.yE = a
		}
		;
		z.e.yz = function() {
			var a = wA()
				, b = a.tx()
				, a = (a = a.getSelection()) && a.type;
			a === rA ? tB(this, b) : "experience" === a ? vB(this, b) : uB(this, "", "填写话题经验，提升回答可信度")
		}
		;
		AB.prototype.Eb = function() {
			var a = [this.K.get(0)].concat(this.K.parents().get())
				, b = window.$.map(a, function(a) {
				return (0,
					window.$)(a).data("navigable")
			})[0];
			this.ZQ = b && window.$.grep(b.items(), function(b) {
					return ~window.$.inArray(b, a)
				})[0]
		}
		;
		AB.prototype.getItem = function() {
			return this.ZQ
		}
		;
		z.v(DB, z.R);
		z.e = DB.prototype;
		z.e.ba = function(a) {
			this.dispatchEvent({
				type: "trackRequested",
				category: "share",
				action: a.action.replace("[type]", "post" !== this.yd ? this.yd : "article"),
				attributes: a.attributes
			})
		}
		;
		z.e.ia = function(a) {
			DB.o.ia.call(this, a);
			a = this.Ad = (0,
				window.$)(a);
			Ll ? a.click(At) : Kv ? a.click(this.hJ.bind(this)) : this.Eb();
			a.click((0,
				z.r)(function() {
				this.ba({
					action: "click_share_[type]_start"
				})
			}, this))
		}
		;
		z.e.Eb = function() {
			FB(this);
			this.Ad.one("mouseover focus", window.$.proxy(z.Nj(this.XS), this))
		}
		;
		z.e.XS = function() {
			this.Cm || (this.Cm = z.Op(this.yd, this.XJ));
			if (this.dH) {
				var a = z.vt(this.iJ);
				(0,
					window.$)(".js-qrcode-image", this.dH.m()).attr("src", a)
			}
		}
		;
		z.e.ZN = function(a) {
			a = a.target.W();
			0 === a ? this.hJ() : 2 === a && (window.open("https://dudu.zhihu.com/post?" + window.$.param({
					url: this.iJ,
					utm_source: "zhihu-web_share",
					utm_medium: "button",
					utm_campaign: "post"
				}), "_blank"),
				this.ba({
					action: "click_share_[type]_to_dudu_start"
				}))
		}
		;
		z.e.hJ = function() {
			this.Cm || (this.Cm = z.Op(this.yd, this.XJ));
			this.Cm.then(function(a) {
				z.BB(a.msg.sina)
			});
			this.ba({
				action: "click_share_[type]_to_weibo_start"
			})
		}
		;
		z.v(GB, kw);
		z.ma(GB);
		GB.prototype.B = function(a) {
			var b = GB.o.B.call(this, a);
			z.Uh(b, "goog-submenu");
			HB(this, a, b);
			return b
		}
		;
		GB.prototype.w = function(a, b) {
			b = GB.o.w.call(this, a, b);
			z.Uh(b, "goog-submenu");
			HB(this, a, b);
			var c = z.Mf("DIV", "goog-menu", b);
			if (c.length) {
				var d = new z.uw(a.L())
					, c = c[0];
				z.Q(c, !1);
				a.L().wa().body.appendChild(c);
				d.w(c);
				a.lh(d, !0)
			}
			return b
		}
		;
		GB.prototype.ka = function(a, b) {
			var c = this.X(a)
				, d = c && c.lastChild;
			GB.o.ka.call(this, a, b);
			d && c.lastChild != d && z.Th(d, "goog-submenu-arrow") && c.appendChild(d)
		}
		;
		GB.prototype.Ge = function(a) {
			GB.o.Ge.call(this, a);
			var b = a.X()
				, c = a.L()
				, c = z.Nf(c.La, "SPAN", "goog-submenu-arrow", b)[0];
			IB(a, c);
			c != b.lastChild && b.appendChild(c);
			P(a.m(), "haspopup", "true")
		}
		;
		z.v(JB, z.pw);
		var hC = 218;
		z.e = JB.prototype;
		z.e.ce = null ;
		z.e.SA = null ;
		z.e.jz = !1;
		z.e.oc = null ;
		z.e.Tr = !1;
		z.e.Fq = !0;
		z.e.hQ = !1;
		z.e.D = function() {
			JB.o.D.call(this);
			this.v().g(this.getParent(), "hide", this.LH);
			this.oc && NB(this, this.oc, !0)
		}
		;
		z.e.Db = function() {
			this.v().pa(this.getParent(), "hide", this.LH);
			this.oc && (NB(this, this.oc, !1),
			this.Tr || (this.oc.Db(),
				z.N(this.oc.m())));
			JB.o.Db.call(this)
		}
		;
		z.e.C = function() {
			this.oc && !this.Tr && this.oc.H();
			this.oc = null ;
			JB.o.C.call(this)
		}
		;
		z.e.Jc = function(a, b) {
			JB.o.Jc.call(this, a);
			b && (this.Ta().xf = !0);
			a || (this.ce && de(this.ce),
				this.ce = z.ce(this.Bg, hC, this))
		}
		;
		z.e.vu = function() {
			var a = this.getParent();
			a && io(a) == this && (MB(this, !0),
				LB(this))
		}
		;
		z.e.Bg = function() {
			var a = this.oc;
			a && a.getParent() == this && (MB(this, !1),
				z.oj(a, function(a) {
					"function" == typeof a.Bg && a.Bg()
				}))
		}
		;
		z.e.G = function(a, b) {
			var c = JB.o.G.call(this, a, b);
			c && !this.U() && this.Bg();
			return c
		}
		;
		z.e.Zb = function(a) {
			var b = a.keyCode
				, c = this.Ld() ? 37 : 39
				, d = this.Ld() ? 39 : 37;
			if (!this.jz) {
				if (!this.isEnabled() || b != c && b != this.mz)
					return !1;
				this.vu();
				z.jo(this.Ta());
				KB(this)
			} else if (!this.Ta().Zb(a))
				if (b == d)
					this.Bg();
				else
					return !1;
			a.preventDefault();
			return !0
		}
		;
		z.e.sR = function() {
			this.oc.getParent() == this && (KB(this),
				this.Zh().Jc(this),
				LB(this))
		}
		;
		z.e.LH = function(a) {
			a.target == this.Zh() && (this.Bg(),
				KB(this))
		}
		;
		z.e.md = function(a) {
			this.isEnabled() && (KB(this),
				this.SA = z.ce(this.vu, hC, this));
			JB.o.md.call(this, a)
		}
		;
		z.e.Od = function(a) {
			KB(this);
			if (Sk(this, 8) || Sk(this, 16))
				return JB.o.Od.call(this, a);
			this.vu();
			return !0
		}
		;
		z.e.Ca = function(a) {
			this.Ta().M(a, !0)
		}
		;
		z.e.Qi = function(a, b) {
			this.Ta().Mk(a, b, !0)
		}
		;
		z.e.removeItem = function(a) {
			(a = this.Ta().removeChild(a, !0)) && a.H()
		}
		;
		z.e.Yh = function(a) {
			return nj(this.Ta(), a)
		}
		;
		z.e.Cl = function() {
			return mj(this.Ta())
		}
		;
		z.e.jb = function() {
			return this.Ta().jb()
		}
		;
		z.e.Ta = function() {
			this.oc ? this.Tr && this.oc.getParent() != this && kj(this.oc, this) : this.lh(new z.uw(this.L()), !0);
			this.oc.m() || this.oc.B();
			return this.oc
		}
		;
		z.e.lh = function(a, b) {
			var c = this.oc;
			a != c && (c && (this.Bg(),
			this.ya && NB(this, c, !1)),
				this.oc = a,
				this.Tr = !b,
			a && (kj(a, this),
				a.G(!1, !0),
				a.bn = !1,
				a.Te(!1),
			this.ya && NB(this, a, !0)))
		}
		;
		z.e.Lf = function(a) {
			return this.Ta().Lf(a)
		}
		;
		z.Wk("goog-submenu", function() {
			return new JB(null )
		});
		z.v(OB, JB);
		OB.prototype.Zb = function(a) {
			var b = OB.o.Zb.call(this, a);
			a = (0,
				window.parseInt)(gu[a.keyCode], 10);
			(0,
				window.isNaN)(a) || this.Ta().tb(a - 1);
			return b
		}
		;
		z.v(z.PB, z.R);
		var QB = {
			yJ: "textarea.content",
			nM: ".toggle-expand",
			FU: ".summary",
			sw: "zm-editable-content"
		};
		z.e = z.PB.prototype;
		z.e.D = function() {
			z.PB.o.D.call(this);
			var a = this.h;
			this.zq = (0,
				window.$)(this.options.yJ, a);
			this.content = this.zq.is(":input") ? this.zq.val() : this.zq.html();
			this.Kk = (0,
				window.$)(this.options.FU, a);
			this.We = (0,
				window.$)("." + this.options.sw + ":not(script)", a);
			this.cd = (0,
				window.$)(this.options.nM, this.Kk);
			if (!this.Kk.length)
				return this.dispatchEvent("invalid");
			this.xG = !!this.cd.length;
			this.cd.on("click", (0,
				z.r)(this.dO, this));
			this.Kk.on("click", (0,
				z.r)(this.dP, this))
		}
		;
		z.e.dO = function(a) {
			a.preventDefault();
			RB(this)
		}
		;
		z.e.dP = function(a) {
			var b = z.dr();
			b && b.Kd() || a.target === this.cd[0] || (b = (0,
				window.$)(a.target).closest("a").get(0),
			b && "javascript:" !== b.protocol || (a.preventDefault(),
				RB(this)))
		}
		;
		z.e.expand = function() {
			this.We.length || (this.We = (0,
				window.$)("\x3cdiv\x3e").html(this.content).addClass(this.options.sw).insertBefore(this.zq));
			this.Kk.hide();
			this.We.show();
			this.dispatchEvent("expand")
		}
		;
		z.e.collapse = function() {
			this.Kk.show();
			this.We.hide();
			this.dispatchEvent("collapse")
		}
		;
		z.v(SB, z.R);
		SB.prototype.ia = function(a) {
			SB.o.ia.call(this, a);
			this.v().g(a, "click", this.zS)
		}
		;
		SB.prototype.fN = function() {
			var a = this.TB;
			z.gg(a.m(), this.gK);
			z.T.remove(a.m(), this.mq)
		}
		;
		SB.prototype.tQ = '\x3cdiv class\x3d"text zg-clear"\x3e\x3clabel class\x3d"zg-left"\x3e赞同\x3c/label\x3e\x3clabel class\x3d"zg-right"\x3e反对\x3c/label\x3e\x3c/div\x3e';
		SB.prototype.zS = z.Lm(function() {
			this.yb && this.yb.H();
			var a = new z.S(null );
			a.Bf(!0);
			a.yp(!0);
			a.VE = !0;
			TB(this);
			this.v().Aa(a, "hide", this.fN);
			var b = a.X();
			b.appendChild(this.TB.m());
			b.appendChild(z.Zf(this.tQ));
			z.T.add(a.m(), this.Kw);
			a.G(!0);
			this.yb = a;
			z.fd(this, a)
		}, !0);
		z.v(z.UB, z.R);
		var VB = {
			qa: null ,
			sa: null ,
			pE: !1,
			ur: z.ck,
			Mj: !1,
			ol: "zm-item-expanded",
			iX: z.p,
			hX: z.p
		}
			, pC = {
			all_can_comment: "允许任何人评论",
			followee_can_comment: "允许我关注的人评论",
			nobody_can_comment: "关闭评论"
		};
		z.e = z.UB.prototype;
		z.e.Wn = function() {
			return "#answer-" + this.sa
		}
		;
		z.e.Ej = function() {
			var a = (0,
				window.$)("a[name\x3dreport]", this.Mb);
			if (a.length) {
				var b = new z.Lw("answer",this.sa);
				z.Ow(b, a[0]);
				z.fd(b, this);
				b.mb(this)
			}
		}
		;
		z.e.Fj = function() {
			var a = (0,
				window.$)("a[name\x3dshare]", this.Mb).get(0)
				, b = (0,
					window.$)(".answer-date-link", this.Mb).get(0) || (0,
					window.$)(this.Mb).closest(".feed-item, .zm-item").find(".question_link").get(0);
			a && b && (b = b.href,
			/\/answer\//.test(b) || (b = b.replace(/#answer-\d+/, "") + "/answer/" + this.Za),
				z.CB(a, "answer", this.Za, b).mb(this))
		}
		;
		z.e.expand = function() {
			this.Jb || (this.Jb = !0,
			this.options.Mj || (z.T.add(this.h, this.options.ol),
				this.wB()),
				this.dispatchEvent("expand"))
		}
		;
		z.e.collapse = function() {
			if (this.Jb) {
				this.Jb = !1;
				if (this.options.Mj)
					return this.dispatchEvent("collapse");
				this.vB();
				Yn(this.h, (0,
					z.r)(function() {
					z.T.remove(this.h, this.options.ol);
					this.dispatchEvent("collapse")
				}, this))
			}
		}
		;
		z.e.sy = function() {
			if (ZB(this)) {
				var a = (0,
					window.$)('\x3cbutton class\x3d"item-collapse js-collapse"\x3e\x3ci class\x3d"sprite-global-icon-fold-white"\x3e\x3c/i\x3e收起\x3c/button\x3e').appendTo((0,
					window.$)(".zm-meta-panel", this.Mb)).on("click", (0,
					z.r)(this.collapse, this)).get(0)
					, b = new $y(0,{
					bottom: 12,
					RC: !0,
					wb: (0,
						window.$)(".js-collapse-body", this.h)[0]
				});
				z.fd(this, b);
				b.w(a);
				this.g("expand", function(a) {
					a.target === a.currentTarget && b.start()
				});
				this.g("collapse", function(a) {
					a.target === a.currentTarget &&
					b.stop()
				});
				b.start()
			}
		}
		;
		z.e.wB = function() {
			z.Ck("view_answer", "click_expand_answer", "answer_box_expand_answer")
		}
		;
		z.e.vB = function() {
			z.Ck("view_answer", "click_collapse_answer", "answer_box_collapse_answer")
		}
		;
		z.e.hz = function() {
			(0,
				z.uC)("answer", this.Za, "read")
		}
		;
		z.e.Uj = function() {
			(0,
				z.uC)("answer", this.Za, /^\/question\//.test(window.location.pathname) ? "read" : "touch")
		}
		;
		z.e.D = function() {
			z.UB.o.D.call(this);
			XB(this);
			this.$e = z.L("zm-item-answer-author-info", this.h);
			YB(this);
			this.Mb = this.Mb || z.L("zm-item-meta", this.h);
			(this.ii = z.L("zm-meta-panel", this.Mb)) && this.v().g(this.ii, "click", this.bp);
			if (this.Oe)
				mC(this),
				this.$e && (this.bI = (this.kb = z.gb(this.$e.innerHTML, "匿名用户")) ? null  : this.$e.innerHTML.replace(/src=".+?"/g, 'src\x3d"' + z.X[2] + '"'),
					this.v().g(this.$e, "click", function(a) {
						"cancel-anon" === a.target.name && z.bk(!1)
					}));
			else {
				this.zy();
				var a = (0,
					window.$)(".zm-item-rich-text",
					this.h);
				if (this.pr) {
					var b = a.data("entryUrl")
						, c = a.data("authorName");
					nB(a, b, c)
				} else
					(b = (0,
						window.$)(".copyright", this.Mb).data("author-avatar")) && a.length && jB(a, b)
			}
			aC(this);
			this.Gj();
			(0,
				window.$)(this.h).on("contentchange", window.$.proxy(this.Gj, this));
			this.dc();
			kC(this);
			this.Ej();
			this.Fj();
			Rj && !Sj && bC(this);
			(0,
				window.setTimeout)((0,
				z.r)(this.sy, this))
		}
		;
		z.e.Ip = function(a) {
			var b = this.Gj();
			b && z.Ar(b, a)
		}
		;
		z.e.zy = function() {
			var a = z.L("zm-votebar", this.h) || z.L("zm-votebar", this.ii);
			if (a) {
				var b = new RA(this.sa);
				b.w(a);
				b.mb(this);
				this.pb = b;
				this.v().g(b, "change", this.pT).g(b, "action", function(a) {
					a.data.state === TA.If ? z.W.Ha({
						type: "ga_click_vote_up",
						target: this
					}) : a.data.state === TA.Ni && z.W.Ha({
						type: "ga_click_vote_down",
						target: this
					})
				});
				(a = z.L("votenum-mobile", this.ii)) && (new SB(b)).w(a)
			}
		}
		;
		z.e.Gj = function() {
			if (this.xh)
				return this.xh;
			var a = z.L("zm-editable-content", this.h)
				, b = this.pb && this.pb.m();
			!this.Oe && !Rj && b && (0,
				window.$)(b).is(":visible") && a && 230 < (0,
				window.$)(a).height() && (a = this.xh = new Fr(null ,a),
				this.M(a),
				a.tag = "votebar",
				a.Qz = 50,
				a.w(b))
		}
		;
		z.e.pT = function() {
			this.Ck && YA(this.Ck)
		}
		;
		z.e.dc = function() {
			this.$e && this.v().g(this.$e, "click", this.Oa);
			this.Oe && (this.WL = z.X);
			this.v().g(z.ek, "anon_change", function(a) {
				this.Oe ? this.qu(a.kb) : this.pb.getState() === TA.If && YA(this.Ck)
			});
			cC(this);
			(0,
				window.$)(this.h).on("focusin focusout", function(a) {
				(0,
					window.$)(this).toggleClass("focusin", "focusin" === a.type)
			})
		}
		;
		z.e.Hg = function(a) {
			return z.Ln(this.h, a)
		}
		;
		z.e.Oa = function(a) {
			var b = this.Hg(a.target);
			if (b = b && b.name)
				"edit" === b ? (b = wA(),
				this.Wv || (zA(b),
					this.v().g(b, "change", this.yz).g(b, "trackRequested", function(a) {
						a.label = "answer_box_edit_topic_experience";
						z.Ak(a)
					})),
					this.Wv = !0,
					b.Em(),
					z.Ak({
						category: "edit_profile",
						action: "click_edit_topic_experience_start",
						label: "answer_box_edit_topic_experience",
						attributes: {
							text: (0,
								window.$)(a.target).text()
						}
					})) : "complex" === b && (a = z.L("zm-item-answer-summary", this.h),
					b = z.L("zm-item-rich-text", this.h),
					z.Q(a, !1),
					z.Q(b, !0))
		}
		;
		z.e.yz = function() {
			var a = wA().tx() || ""
				, b = z.L("bio", this.$e);
			if (!b) {
				var c = z.L("author-link", this.$e)
					, b = z.M("span", "bio");
				z.eg(b, c)
			}
			a && (a = "，" + kb(a),
				a = z.Wa(a));
			b.title = a;
			b.innerHTML = a
		}
		;
		z.e.qu = function(a) {
			if (a)
				this.$e.innerHTML = '匿名用户\x3ca class\x3d"zg-link-gray cancel-anon" href\x3d"javascript:void(0);" name\x3d"cancel-anon"\x3e取消匿名\x3c/a\x3e';
			else if (this.Oe)
				if (this.bI)
					this.$e.innerHTML = this.bI + '\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改话题经验\x3c/a\x3e';
				else {
					a = [];
					var b = z.X;
					a.push(1 === b || 0 === b ? "匿名用户" : ['\x3ca data-tip\x3d"p$t$', b[1], '" href\x3d"/people/', b[1], '" title\x3d"' + b[0] + '" class\x3d"', 'zm-item-link-avatar"\x3e',
						'\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' + b[2] + '" /\x3e', "\x3c/a\x3e"].join(""));
					a.push(z.xn(z.X, "zm-item-answer-creator"));
					this.$e.innerHTML = a.join("")
				}
		}
		;
		z.e.PH = function() {
			var a = (0,
				window.$)(this.h);
			a.hide("fast", function() {
				a.remove()
			});
			this.H()
		}
		;
		z.e.bp = function(a) {
			var b = this.Hg(a.target)
				, c = b && b.name;
			if (c)
				switch (c) {
					case "addcomment":
						"添加评论" === (0,
							window.$)(b).text().trim() ? this.ba({
							category: "comment",
							action: "click_add_answer_comment_start"
						}) : this.ba({
							category: "comment",
							action: "click_view_answer_comments"
						});
						this.mg();
						break;
					case "remove":
						this.ls();
						break;
					case "thanks":
						z.W.Ha({
							type: "ga_click_thank_answer",
							target: b
						});
						this.ws();
						break;
					case "comment_opt":
						this.qw || oC(this);
						break;
					case "admin":
						dC(this);
						break;
					case "nohelp":
						this.zF(a);
						break;
					case "favo":
						z.W.Ha({
							type: "ga_click_collect_answer_box",
							target: b
						}),
							this.tj()
				}
		}
		;
		z.e.ZO = function() {
			(new z.Lw("answer",this.sa)).Em()
		}
		;
		z.e.zF = WB(function(a) {
			a = a.target;
			var b = !!a.m;
			z.W.Ha({
				type: "ga_click_answer_not_helpful",
				target: b ? a.m() : a
			});
			this.ba({
				category: "not_helpful",
				action: "click_answer_not_helpful"
			});
			this.Jw && "pending" === this.Jw.state() && this.Jw.abort();
			var c, d;
			d = b ? a.Ig() : a.innerHTML;
			d = (c = -1 < d.indexOf("撤销")) ? "没有帮助" : "撤销没有帮助";
			b ? a.zp(d) : a.innerHTML = d;
			c = c ? "/answer/helpful" : "/answer/not_helpful";
			b || z.En(a);
			this.Jw = window.$.post(c, {
				aid: this.sa
			})
		}, !0);
		z.e.bP = function() {
			Ll ? At() : EB(this.Za);
			this.dispatchEvent({
				type: "trackRequested",
				category: "share",
				action: "click_share_answer_start"
			})
		}
		;
		z.e.tj = WB(function() {
			var a = z.DA.Y();
			GA(a, this.sa);
			a.show();
			this.ba({
				category: "collect",
				action: "click_collect_answer_start"
			})
		}, !0);
		z.e.mg = function() {
			if (!this.va) {
				var a = (0,
					window.$)(".toggle-comment", this.Mb)[0];
				this.va = new Sy(this.sa,"answer");
				this.va.render(this.Mb);
				Wy(this.va, a);
				this.va.Bp(this.Wn())
			}
			this.va.Gf();
			(0,
				window.$)(this.ii).toggleClass("focusin", this.va.vc())
		}
		;
		z.e.hs = WB(function(a) {
			this.va && this.va.vc() ? this.va.vl() : this.mg();
			a.preventDefault()
		});
		z.e.ws = WB(function() {
			var a = (0,
				window.$)("a[name\x3dthanks]", this.ii)[0];
			a && !z.T.has(a, "disabled") && (!0 === window.$.parseJSON(a.getAttribute("data-thanked")) ? (tn(a, "感谢"),
				a.setAttribute("data-thanked", !1),
				window.$.post("/answer/cancel_thanks", {
					aid: this.sa
				}),
				this.ba({
					category: "thank",
					action: "click_thank_answer"
				})) : (tn(a, "取消感谢"),
				a.setAttribute("data-thanked", !0),
				window.$.post("/answer/thanks", {
					aid: this.sa
				}),
				this.ba({
					category: "thank",
					action: "click_recall_thank_answer"
				})),
				z.En(a))
		});
		z.e.EA = function(a) {
			XA.EA(this.sa, a);
			(0,
				window.$)(".copyright", this.Mb).text(a ? "作者保留权利" : "禁止转载").attr("href", a ? "/terms#sec-licence-1" : "/terms#sec-licence-6")
		}
		;
		z.e.iO = function(a) {
			var b = a.target;
			a = b.W();
			"禁止转载" === a ? this.EA(!b.sf()) : "删除" === a ? this.ls() : a in pC && window.$.post("/answer/comment_permission", {
				answer_id: this.sa,
				permission: a
			}).done((0,
				z.r)(function(a) {
				a && !a.r && z.x(this.rw, function(a) {
					a.Hc(a === b)
				})
			}, this))
		}
		;
		z.e.ls = function() {
			z.U.confirm("你确定要删除自己的答案吗？", "答案内容不会被永久删除，你还可以撤消本次删除操作。", function(a) {
				a && (this.ei = !0,
					this.status = -1,
					z.qC(this))
			}, this)
		}
		;
		z.e.m = function() {
			return this.h
		}
		;
		z.e.ba = function(a) {
			this.dispatchEvent(Object.assign({
				type: "trackRequested"
			}, a))
		}
		;
		z.v(rC, z.fz);
		rC.prototype.Pj = "question_link";
		rC.prototype.qs = function() {
			var a = this.Nr["question-id"];
			this.dispatchEvent({
				type: "ignore",
				key: "question-id",
				value: a
			});
			window.$.post("/question/uninterest", {
				qid: a
			})
		}
		;
		z.v(sC, rC);
		sC.prototype.D = function() {
			sC.o.D.call(this);
			tC(this)
		}
		;
		sC.prototype.ue = function() {
			sC.o.ue.call(this);
			mu(mu(this.Rd.register("c", this.mg, this), {
				group: "操作",
				name: "打开评论"
			}).register("shift+c", this.Vx, this), {
				group: "操作",
				name: "定位到评论框"
			})
		}
		;
		z.v(z.vC, rC);
		z.e = z.vC.prototype;
		z.e.D = function() {
			z.vC.o.D.call(this);
			this.Pv = wC(this.h);
			this.Ly = "1" === this.Pv.getAttribute("data-isowner");
			this.pr = "1" === this.Pv.getAttribute("data-copyable");
			this.Ms();
			this.g("collapse", (0,
				z.r)(function(a) {
				a.target === a.currentTarget && xC(this, !1)
			}, this))
		}
		;
		z.e.Kx = function() {
			var a = kz(this), b;
			switch (a) {
				case "feed":
					b = lz(this);
					a += "_answer" + (b ? "_" + b : "");
					break;
				case "people_profile_activities":
					b = {
						member_voteup_answer: "_vote_up_answer",
						member_answer_question: "_answer_question"
					}[this.h.getAttribute("data-type-detail")],
						a += b || ""
			}
			return a + (this.vc() ? "_expand" : "")
		}
		;
		z.e.Ms = function() {
			var a = new z.UB({
				qa: this.Nr["question-id"],
				sa: this.Ib,
				ur: {
					Za: this.Nr["question-url-token"]
				},
				Mj: !0
			});
			$B(a, z.L("zm-item-meta", this.h));
			this.M(a);
			a.w(this.Pv);
			this.g("expandRequest", (0,
				z.r)(this.expand, this));
			this.g("expand", function(b) {
				b.target === b.currentTarget && (a.expand(),
					a.Ip(!0))
			});
			this.g("collapse", function(b) {
				b.target === b.currentTarget && (a.collapse(),
					a.Ip(!1))
			})
		}
		;
		z.e.ue = function() {
			z.vC.o.ue.call(this);
			mu(this.Rd.register("o", this.Gf, this), {
				group: "操作",
				name: "显示全部/收起"
			})
		}
		;
		z.e.kn = function() {
			z.vC.o.kn.call(this, {
				"a[name\x3dexpandQuestionDetail]": function() {
					xC(this, !0)
				}
			})
		}
		;
		z.v(yC, z.fz);
		yC.prototype.D = function() {
			yC.o.D.call(this);
			var a = z.L("column", this.h);
			z.vk(a, this.Uj, this)
		}
		;
		yC.prototype.Uj = function() {
			(0,
				z.uC)("column", this.Fg, "touch")
		}
		;
		z.v(zC, z.fz);
		z.e = zC.prototype;
		z.e.Pj = "post-link";
		z.e.D = function() {
			zC.o.D.call(this);
			AC(this);
			var a = z.L("zm-votebar", this.h);
			a && (this.pb = new RA(this.Ib,this.entryType),
				z.fd(this, this.pb),
				this.pb.w(a),
			(a = z.L("votenum-mobile", this.h)) && (new SB(this.pb)).w(a));
			BC(this);
			this.Fj();
			var a = (0,
				window.$)(".post-content", this.h)
				, b = a.data("entryUrl")
				, c = a.data("authorName");
			nB(a, b, c);
			this.g("expand", (0,
				z.r)(this.Ip, this, !0));
			this.g("collapse", (0,
				z.r)(this.Ip, this, !1))
		}
		;
		z.e.Kx = function() {
			return "feed_article_" + lz(this) + (this.vc() ? "_expand" : "")
		}
		;
		z.e.Ip = function(a) {
			var b = this.Gj();
			b && z.Ar(b, a)
		}
		;
		z.e.Gj = function() {
			if (this.xh)
				return this.xh;
			var a = !Rj
				, b = z.L("zm-editable-content", this.h)
				, c = this.pb && this.pb.m();
			a && c && (0,
				window.$)(c).is(":visible") && b && 230 < (0,
				window.$)(b).height() && (a = this.xh = new Fr(null ,b),
				this.M(a),
				a.tag = "votebar",
				a.Qz = 50,
				a.w(c))
		}
		;
		z.e.Fj = function() {
			var a = (0,
				window.$)("a[name\x3dshare]", this.h).get(0)
				, b = (0,
				window.$)(".post-link", this.h).get(0);
			a && b && z.CB(a, "post", this.Fg, b.href).mb(this)
		}
		;
		z.e.qs = function() {
			(0,
				window.$)(".feed-hide-options", this.h).show().siblings().hide();
			window.$.post(z.fw("/post/uninterest"), {
				id: this.Ib
			})
		}
		;
		z.e.MF = function() {
			(0,
				window.$)(".feed-hide-options", this.h).hide().siblings().show();
			window.$.post(z.fw("/post/undo_uninterest"), {
				id: this.Ib
			})
		}
		;
		z.e.EF = function(a) {
			a = (0,
				window.$)(a.currentTarget);
			var b = a.data();
			z.U.confirm(a.attr("title"), z.fw("确定%s吗？", a.text()), function(a) {
				a && (this.FF(),
					window.$.post(z.fw("/%s/uninterest", b.type), {
						id: b.id
					}))
			}, this)
		}
		;
		z.e.ue = function() {
			zC.o.ue.call(this);
			mu(this.Rd.register("v", function() {
				this.pb && this.pb.Ku()
			}, this), {
				group: "操作",
				name: "赞同"
			});
			mu(this.Rd.register("d", function() {
				this.pb && this.pb.Ju()
			}, this), {
				group: "操作",
				name: "反对"
			});
			mu(mu(mu(this.Rd.register("o", this.Gf, this), {
				group: "操作",
				name: "显示全部/收起"
			}).register("c", this.mg, this), {
				group: "操作",
				name: "打开评论"
			}).register("shift+c", this.Vx, this), {
				group: "操作",
				name: "定位到评论框"
			})
		}
		;
		z.v(CC, z.fz);
		z.e = CC.prototype;
		z.e.D = function() {
			CC.o.D.call(this);
			this.yy()
		}
		;
		z.e.Pj = "roundtable_link";
		z.e.qs = function() {
			window.$.post("/roundtable/" + this.Fg, {
				action: "mute"
			});
			this.dispatchEvent({
				type: "ignore",
				key: "roundtable-id",
				value: this.Ib
			})
		}
		;
		z.e.yy = function() {
			z.vk(this.h, this.Uj, this)
		}
		;
		z.e.Uj = function() {
			(0,
				z.uC)("roundtable", this.Fg, "touch")
		}
		;
		z.v(z.EC, z.R);
		z.EC.prototype.D = function() {
			this.v().g(this.h, "click", this.Oa)
		}
		;
		z.EC.prototype.Oa = function(a) {
			var b = z.Ln(this.h, a.target);
			this.tn && this.tn(b);
			b && b.name && "focus" === b.name && (0,
				z.hE)(b, this.px, function() {
				b.getAttribute("data-followme") && (z.T.has(b, "zg-btn-follow") ? b.setAttribute("data-tip", "s$b$对方已关注你") : b.setAttribute("data-tip", "s$b$已互相关注"))
			}, this.ox, {
				VW: "question" === this.px ? "关注问题" : null
			})
		}
		;
		z.EC.prototype.DA = aa(22);
		z.v(z.FC, z.G);
		z.FC.prototype.handleEvent = function(a) {
			if ("input" == a.type)
				z.C && z.E(10) && 0 == a.keyCode && 0 == a.charCode || (GC(this),
					this.dispatchEvent(HC(a)));
			else if ("keydown" != a.type || $h(a)) {
				var b = "keydown" == a.type ? this.h.value : null ;
				z.C && 229 == a.keyCode && (b = null );
				var c = HC(a);
				GC(this);
				this.na = z.ce(function() {
					this.na = null ;
					this.h.value != b && this.dispatchEvent(c)
				}, 0, this)
			}
		}
		;
		z.FC.prototype.C = function() {
			z.FC.o.C.call(this);
			this.S.H();
			GC(this);
			delete this.h
		}
		;
		z.v(IC, z.G);
		var JC = 0;
		IC.prototype.zz = function() {
			this.al()
		}
		;
		IC.prototype.al = function() {
			var a = this.Rh.value.length;
			if (a > this.pt) {
				var b = this.Rh.scrollTop
					, c = this.Rh.scrollLeft;
				this.Rh.value = this.Rh.value.substring(0, this.pt);
				a = this.pt;
				this.Rh.scrollTop = b;
				this.Rh.scrollLeft = c
			}
			this.CE && z.wg(this.CE, String(1 == this.kN ? a : this.pt - a))
		}
		;
		IC.prototype.C = function() {
			IC.o.C.call(this);
			delete this.Rh;
			this.By.H();
			this.By = null
		}
		;
		var PC;
		z.v(z.KC, z.Dl);
		z.e = z.KC.prototype;
		z.e.init = function() {
			this.Os || (this.Os = !0,
				this.B(),
				this.dc())
		}
		;
		z.e.dc = function() {
			z.C || (new z.Fp("搜索问题")).w(this.Zc);
			this.ca = new z.Tp("/redirect-question/autocomplete",this.Zc,null ,null ,z.J("zh-question-redirect-diag-content"),!1);
			this.ca.en = !1;
			this.ca.mh(!0);
			this.v().g(this.ca, "suggestionsupdate", Wn);
			this.v().g(this.ca, "select", this.dS).g(this.kM, "click", function() {
				this.ta.G(!1)
			})
		}
		;
		z.e.dS = function() {
			var a = this.ca.qj();
			if ("search_link" === a[0])
				window.open("/search?q\x3d" + (0,
						window.encodeURIComponent)(a[1]) + "\x26type\x3dquestion");
			else {
				this.Zc.value = "";
				var b = a[3]
					, a = a[1];
				this.ta.G(!1);
				this.Zc.value = "";
				this.xhr = new z.V(!0);
				this.v().Aa(this.xhr, "complete", this.AL);
				this.xhr.ajax("/question/redirect", "qid\x3d" + this.qa + "\x26rqid\x3d" + b);
				this.ku = b;
				this.tI = a
			}
		}
		;
		z.e.AL = function() {
			var a = z.sf(this.xhr);
			a && (a.r ? z.U.message(a.msg) : this.Pi ? (this.Pi.innerHTML = "已经重定向",
				this.Pi.setAttribute("data-disabled", 1)) : this.dispatchEvent("change"))
		}
		;
		z.e.B = function() {
			this.h = z.M("div", {
				id: "zh-question-redirect-diag"
			}, ["将问题跳转至", z.M("div", {
				id: "zh-question-redirect-diag-content"
			}, this.Zc = z.M("input", {
				type: "text",
				"class": "zg-form-text-input"
			})), z.M("div", "zm-command", this.kM = z.M("a", {
				href: "javascript:;",
				"class": "zm-command-cancel",
				name: "cancel"
			}, "放弃操作"))]);
			this.ta = new z.S(null );
			this.ta.Ya("问题重定向");
			z.Ij(this.ta, null );
			this.ta.X().appendChild(this.h)
		}
		;
		z.e.show = function() {
			this.init();
			this.ta.G(!0)
		}
		;
		var tG = {}
			, tG = function() {
				z.G.call(this)
			}
			;
		z.v(tG, z.Dl);
		tG.sv = [["需要详细阐述", "答案过于简短或表述不清晰，请完善答案。"], ["答非所问", "没有正面或直接回答问题，请修改答案。"], ["应作为问题的评论", "该内容是对问题本身的评论而不是回答，请改为发布到评论。"], ["应作为答案的评论", "该内容是对另外一个答案的评论或回应，而不是回答问题，请改为发布到评论。"], ["内容重复", "与已有答案重复，请修改答案。"], ["内容已过期", "答案的时效性已过，请更新答案。"], ["需要注明关联利益", "有广告、推销嫌疑，请注明作者与利益方的关系。"]];
		tG.Hj = null ;
		tG.Y = function() {
			tG.Hj || (tG.Hj = new tG,
				tG.Hj.init());
			return tG.Hj
		}
		;
		z.e = tG.prototype;
		z.e.init = function() {
			if (!this.h) {
				this.B();
				this.dc();
				var a = new Ru(this.h);
				sj(a);
				a.TF = !0;
				a.yp(!0);
				a.G(!1);
				a.Zz = 0;
				a.U() && a.ea();
				z.Su(a, new z.ei(13,0,0,-22));
				this.Yz = a
			}
		}
		;
		z.e.dc = function() {
			this.v().g(this.h, "click", this.aS)
		}
		;
		z.e.aS = function(a) {
			"A" === a.target.tagName && (a = a.target.getAttribute("data-index"),
				this.WM.UW(a),
				this.Yz.G(!1))
		}
		;
		z.e.B = function() {
			var a = z.M("div", {
				id: "zh-answer-flag-popup",
				"class": "zg-r5px zu-hovercard-wrap"
			}, [z.M("div", "zg-r5px zu-hovercard-inner", [z.M("div", {
				id: "zh-answer-flag-popup-header"
			}, [z.M("a", {
				"class": "zg-right",
				href: "/question/19867017",
				target: "_blank"
			}, "这是什么？"), "选择一个理由："]), this.aI = z.M("div", {
				id: "zh-answer-flog-options-wrap"
			})]), z.M("div", "zu-hovercard-spin-top")]);
			z.x(tG.sv, function(a, c) {
					var d = z.M("a", {
						href: "javascript:;",
						"class": "zm-menu-item-link"
					}, a[0]);
					d.setAttribute("data-index", c);
					this.aI.appendChild(d)
				},
				this);
			window.document.body.appendChild(a);
			this.h = a
		}
		;
		z.e.show = function(a, b) {
			this.Yz.setPosition(new z.Pu(a,1));
			LC(this, b.XW());
			this.Yz.G(!0);
			this.WM = b
		}
		;
		var OC;
		z.v(MC, z.Dl);
		MC.prototype.init = function() {
			this.B();
			this.jn()
		}
		;
		MC.prototype.B = function() {
			this.h = z.M("div", null , [z.M("div", "zg-section", [z.M("div", null , "标记："), this.rl = z.M("select")]), z.M("div", null , [z.M("div", null , "原因"), this.fA = z.M("textarea", {
				style: "width:96%;border:solid 1px #666;height:66px;padding:5px"
			})]), this.wn = z.M("div", "zm-command", [z.M("a", {
				"class": "zg-mr10",
				href: "javascript:void(0);",
				name: "cancel"
			}, "取消"), z.M("a", {
				"class": "zg-btn-blue",
				href: "javascript:void(0);",
				name: "confirm"
			}, "确定")])]);
			this.rl.appendChild(z.M("option", {
				value: "no"
			}, "选择标记原因"));
			z.x(tG.sv,
				function(a, b) {
					this.rl.appendChild(z.M("option", {
						value: b
					}, a[0]))
				}, this);
			this.ta = new z.S(null );
			this.ta.Ya("标记答案");
			z.Ij(this.ta, null );
			this.ta.X().appendChild(this.h)
		}
		;
		MC.prototype.jn = function() {
			this.v().g(this.rl, "change", function() {
				var a = this.rl.value;
				this.fA.value = "no" === a ? "" : tG.sv[+a][1]
			}).g(this.wn, "click", function(a) {
				"cancel" === a.target.name ? this.ta.G(!1) : this.fA.value && "no" !== this.rl.value && (this.kx = new z.V(!0),
					this.v().g(this.kx, "complete", function() {
						var a = z.sf(this.kx);
						a && !a.r ? (this.Pi.innerHTML = "已经标记",
							this.ta.G(!1)) : z.U.message(a.msg)
					}),
					a = z.zn(this.fA.value),
					this.kx.ajax("/answer/flag", "answer_id\x3d" + this.jL + "\x26flag\x3d" + this.rl.value + "\x26reason\x3d" +
						(0,
							window.encodeURIComponent)(a)))
			})
		}
		;
		MC.prototype.show = function() {
			this.ta.G(!0)
		}
		;
		z.v(z.SC, z.pw);
		z.SC.prototype.Od = function() {
			return this.dispatchEvent("action")
		}
		;
		z.Wk("goog-option", function() {
			return new z.SC(null )
		});
		z.v(z.TC, qw);
		z.ma(z.TC);
		z.TC.prototype.B = function(a) {
			return a.L().B("DIV", this.Wf(a).join(" ") + " goog-inline-block", " ")
		}
		;
		z.TC.prototype.w = function(a, b) {
			b = z.TC.o.w.call(this, a, b);
			z.Uh(b, "goog-inline-block");
			return b
		}
		;
		z.TC.prototype.T = function() {
			return "goog-toolbar-separator"
		}
		;
		z.v(z.UC, bo);
		z.ma(z.UC);
		z.UC.prototype.Xn = function(a) {
			return "HR" == a.tagName ? new z.rw(z.TC.Y()) : z.UC.o.Xn.call(this, a)
		}
		;
		z.UC.prototype.T = function() {
			return "goog-toolbar"
		}
		;
		z.UC.prototype.dF = function() {
			return z.lF
		}
		;
		z.v(VC, zw);
		z.ma(VC);
		VC.prototype.T = function() {
			return "goog-toolbar-button"
		}
		;
		z.v(z.WC, z.el);
		z.Wk("goog-toolbar-button", function() {
			return new z.WC(null )
		});
		z.v(XC, Bw);
		z.ma(XC);
		XC.prototype.createCaption = function(a, b) {
			return XC.o.createCaption.call(this, YC(a, b), b)
		}
		;
		XC.prototype.Fa = function(a, b) {
			a && ZC(this.X(a), b)
		}
		;
		XC.prototype.Ge = function(a) {
			var b = a.m();
			this.Fa(b, a.W());
			z.Uh(b, "goog-color-menu-button");
			XC.o.Ge.call(this, a)
		}
		;
		z.v($C, z.hq);
		$C.prototype.next = function() {
			do
				$C.o.next.call(this);
			while (-1 == this.Vb);return this.node
		}
		;
		z.v(z.aD, Pk);
		z.ma(z.aD);
		var eD = 0;
		z.e = z.aD.prototype;
		z.e.B = function(a) {
			var b = this.Wf(a);
			a = a.L().B("DIV", b ? b.join(" ") : null , bD(this, a.Va(), a.ai(), a.L()));
			Nh(a, "grid");
			return a
		}
		;
		z.e.VD = function(a, b) {
			var c = b.B("TABLE", this.T() + "-table", b.B("TBODY", this.T() + "-body", a));
			c.cellSpacing = 0;
			c.cellPadding = 0;
			return c
		}
		;
		z.e.Ob = function() {
			return !1
		}
		;
		z.e.w = function() {
			return null
		}
		;
		z.e.ka = function(a, b) {
			if (a) {
				var c = z.Mf("TBODY", this.T() + "-body", a)[0];
				if (c) {
					var d = 0;
					z.x(c.rows, function(a) {
						z.x(a.cells, function(a) {
							z.cg(a);
							if (b) {
								var c = b[d++];
								c && a.appendChild(c)
							}
						})
					});
					if (d < b.length) {
						for (var f = [], g = z.I(a), h = c.rows[0].cells.length; d < b.length; ) {
							var k = b[d++];
							f.push(cD(this, k, g));
							f.length == h && (k = dD(this, f, g),
								c.appendChild(k),
								f.length = 0)
						}
						if (0 < f.length) {
							for (; f.length < h; )
								f.push(cD(this, "", g));
							k = dD(this, f, g);
							c.appendChild(k)
						}
					}
				}
				z.Oi(a, !0, z.B)
			}
		}
		;
		z.e.T = function() {
			return "goog-palette"
		}
		;
		z.v(gD, z.G);
		z.e = gD.prototype;
		z.e.ih = null ;
		z.e.Af = null ;
		z.e.Cl = function() {
			return this.Ke.length
		}
		;
		z.e.Yh = function(a) {
			return this.Ke[a] || null
		}
		;
		z.e.Ca = function(a) {
			this.Qi(a, this.Cl())
		}
		;
		z.e.Qi = function(a, b) {
			a && (this.ym(a, !1),
				Xb(this.Ke, b, 0, a))
		}
		;
		z.e.removeItem = function(a) {
			a && Tb(this.Ke, a) && a == this.ih && (this.ih = null ,
				this.dispatchEvent("select"))
		}
		;
		z.e.of = function() {
			return this.ih
		}
		;
		z.e.jb = function() {
			return z.Vb(this.Ke)
		}
		;
		z.e.Cf = function(a) {
			a != this.ih && (this.ym(this.ih, !1),
				this.ih = a,
				this.ym(a, !0));
			this.dispatchEvent("select")
		}
		;
		z.e.pj = function() {
			var a = this.ih;
			return a ? z.Ib(this.Ke, a) : -1
		}
		;
		z.e.Gp = function(a) {
			this.Cf(this.Yh(a))
		}
		;
		z.e.clear = function() {
			var a = this.Ke;
			if (!z.oa(a))
				for (var b = a.length - 1; 0 <= b; b--)
					delete a[b];
			a.length = 0;
			this.ih = null
		}
		;
		z.e.C = function() {
			gD.o.C.call(this);
			delete this.Ke;
			this.ih = null
		}
		;
		z.e.ym = function(a, b) {
			a && ("function" == typeof this.Af ? this.Af(a, b) : "function" == typeof a.JA && a.JA(b))
		}
		;
		z.v(z.iD, Yk);
		z.e = z.iD.prototype;
		z.e.xc = null ;
		z.e.Sa = -1;
		z.e.oa = null ;
		z.e.C = function() {
			z.iD.o.C.call(this);
			this.oa && (this.oa.H(),
				this.oa = null );
			this.xc = null ;
			this.Gn.H()
		}
		;
		z.e.zm = function(a) {
			z.iD.o.zm.call(this, a);
			lD(this);
			this.oa ? (this.oa.clear(),
				hD(this.oa, a)) : (this.oa = new gD(a),
				a = (0,
					z.r)(this.ym, this),
				this.oa.Af = a,
				this.v().g(this.oa, "select", this.wj));
			this.Sa = -1
		}
		;
		z.e.Ig = function() {
			return ""
		}
		;
		z.e.zp = function() {}
		;
		z.e.md = function(a) {
			z.iD.o.md.call(this, a);
			var b = fD(this.N, this, a.target);
			b && a.relatedTarget && z.qg(b, a.relatedTarget) || b == mD(this) || (a = this.Va(),
				this.tb(a ? z.Ib(a, b) : -1))
		}
		;
		z.e.ke = function(a) {
			z.iD.o.ke.call(this, a);
			if (this.Rb() && (a = fD(this.N, this, a.target),
				a != mD(this))) {
				var b = this.Va();
				this.tb(b ? z.Ib(b, a) : -1)
			}
		}
		;
		z.e.Od = function(a) {
			var b = mD(this);
			return b ? (this.Cf(b),
				z.iD.o.Od.call(this, a)) : !1
		}
		;
		z.e.Zb = function(a) {
			var b = this.Va()
				, b = b ? b.length : 0
				, c = this.xc.width;
			if (0 == b || !this.isEnabled())
				return !1;
			if (13 == a.keyCode || 32 == a.keyCode)
				return this.Od(a);
			if (36 == a.keyCode)
				return this.tb(0),
					!0;
			if (35 == a.keyCode)
				return this.tb(b - 1),
					!0;
			var d = 0 > this.Sa ? this.pj() : this.Sa;
			switch (a.keyCode) {
				case 37:
					if (-1 == d || 0 == d)
						d = b;
					this.tb(d - 1);
					a.preventDefault();
					return !0;
				case 39:
					return d == b - 1 && (d = -1),
						this.tb(d + 1),
						a.preventDefault(),
						!0;
				case 38:
					-1 == d && (d = b + c - 1);
					if (d >= c)
						return this.tb(d - c),
							a.preventDefault(),
							!0;
					break;
				case 40:
					if (-1 ==
						d && (d = -c),
						d < b - c)
						return this.tb(d + c),
							a.preventDefault(),
							!0
			}
			return !1
		}
		;
		z.e.wj = function() {}
		;
		z.e.ai = function() {
			return this.xc
		}
		;
		z.e.tb = function(a) {
			a != this.Sa && (nD(this, this.Sa, !1),
				this.Vy = this.Sa,
				this.Sa = a,
				nD(this, a, !0),
				this.dispatchEvent("j"))
		}
		;
		z.e.pj = function() {
			return this.oa ? this.oa.pj() : -1
		}
		;
		z.e.of = function() {
			return this.oa ? this.oa.of() : null
		}
		;
		z.e.Gp = function(a) {
			this.oa && this.oa.Gp(a)
		}
		;
		z.e.Cf = function(a) {
			this.oa && this.oa.Cf(a)
		}
		;
		z.e.Jc = function(a) {
			a && -1 == this.Sa ? this.tb(-1 < this.Vy ? this.Vy : 0) : a || this.tb(-1);
			z.iD.o.Jc.call(this, a)
		}
		;
		z.e.ym = function(a, b) {
			if (this.m() && a) {
				var c = a.parentNode;
				Yh(c, this.N.T() + "-cell-selected", b);
				P(c, "selected", b)
			}
		}
		;
		z.v(jD, Yk);
		z.v(oD, z.iD);
		oD.prototype.xt = null ;
		oD.prototype.Ys = null ;
		oD.prototype.Hx = function() {
			var a = this.of();
			return a ? (a = mi(a, "background-color"),
				qD(a)) : null
		}
		;
		oD.prototype.Fp = function(a) {
			a = qD(a);
			this.xt || (this.xt = z.Kb(this.jr, function(a) {
				return qD(a)
			}));
			this.Gp(a ? z.Ib(this.xt, a) : -1)
		}
		;
		z.v(rD, z.Dw);
		var tD = {
			$V: "#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),
			uW: "#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),
			qW: "#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
		};
		z.e = rD.prototype;
		z.e.Hx = function() {
			return this.W()
		}
		;
		z.e.Fp = function(a) {
			this.Fa(a)
		}
		;
		z.e.Fa = function(a) {
			for (var b = 0, c; c = this.Yh(b); b++)
				"function" == typeof c.Fp && c.Fp(a);
			rD.o.Fa.call(this, a)
		}
		;
		z.e.jo = function(a) {
			"function" == typeof a.target.Hx ? this.Fa(a.target.Hx()) : "none" == a.target.W() && this.Fa(null );
			rD.o.jo.call(this, a);
			a.stopPropagation();
			this.dispatchEvent("action")
		}
		;
		z.e.Ab = function(a, b) {
			a && 0 == this.Cl() && (this.lh(sD(this.L())),
				this.Fa(this.W()));
			rD.o.Ab.call(this, a, b)
		}
		;
		z.Wk("goog-color-menu-button", function() {
			return new rD(null )
		});
		z.v(uD, Bw);
		z.ma(uD);
		uD.prototype.T = function() {
			return "goog-toolbar-menu-button"
		}
		;
		z.v(vD, uD);
		z.ma(vD);
		vD.prototype.createCaption = function(a, b) {
			return Cw(YC(a, b), this.T(), b)
		}
		;
		vD.prototype.Fa = function(a, b) {
			a && ZC(this.X(a), b)
		}
		;
		vD.prototype.Ge = function(a) {
			this.Fa(a.m(), a.W());
			z.Uh(a.m(), "goog-toolbar-color-menu-button");
			vD.o.Ge.call(this, a)
		}
		;
		z.v(wD, rD);
		z.Wk("goog-toolbar-color-menu-button", function() {
			return new wD(null )
		});
		z.v(xD, z.Dw);
		z.Wk("goog-toolbar-menu-button", function() {
			return new xD(null )
		});
		z.v(yD, z.Dw);
		z.e = yD.prototype;
		z.e.oa = null ;
		z.e.D = function() {
			yD.o.D.call(this);
			AD(this);
			DD(this)
		}
		;
		z.e.ia = function(a) {
			yD.o.ia.call(this, a);
			(a = this.Ig()) ? zD(this, a) : this.of() || this.Gp(0)
		}
		;
		z.e.C = function() {
			yD.o.C.call(this);
			this.oa && (this.oa.H(),
				this.oa = null );
			this.Gw = null
		}
		;
		z.e.jo = function(a) {
			this.Cf(a.target);
			yD.o.jo.call(this, a);
			a.stopPropagation();
			this.dispatchEvent("action")
		}
		;
		z.e.wj = function() {
			var a = this.of();
			yD.o.Fa.call(this, a && a.W());
			AD(this)
		}
		;
		z.e.lh = function(a) {
			var b = yD.o.lh.call(this, a);
			a != b && (this.oa && this.oa.clear(),
			a && (this.oa ? z.oj(a, function(a) {
				CD(a);
				this.oa.Ca(a)
			}, this) : BD(this, a)));
			return b
		}
		;
		z.e.Ca = function(a) {
			CD(a);
			yD.o.Ca.call(this, a);
			this.oa ? this.oa.Ca(a) : BD(this, this.Ta());
			ED(this)
		}
		;
		z.e.Qi = function(a, b) {
			CD(a);
			yD.o.Qi.call(this, a, b);
			this.oa ? this.oa.Qi(a, b) : BD(this, this.Ta())
		}
		;
		z.e.removeItem = function(a) {
			yD.o.removeItem.call(this, a);
			this.oa && this.oa.removeItem(a)
		}
		;
		z.e.Cf = function(a) {
			if (this.oa) {
				var b = this.of();
				this.oa.Cf(a);
				a != b && this.dispatchEvent("change")
			}
		}
		;
		z.e.Gp = function(a) {
			this.oa && this.Cf(this.oa.Yh(a))
		}
		;
		z.e.Fa = function(a) {
			if (null  != a && this.oa)
				for (var b = 0, c; c = this.oa.Yh(b); b++)
					if (c && "function" == typeof c.W && c.W() == a) {
						this.Cf(c);
						return
					}
			this.Cf(null )
		}
		;
		z.e.W = function() {
			var a = this.of();
			return a ? a.W() : null
		}
		;
		z.e.of = function() {
			return this.oa ? this.oa.of() : null
		}
		;
		z.e.pj = function() {
			return this.oa ? this.oa.pj() : -1
		}
		;
		z.e.Ab = function(a, b) {
			yD.o.Ab.call(this, a, b);
			this.rb() ? this.Ta().tb(this.pj()) : ED(this)
		}
		;
		z.Wk("goog-select", function() {
			return new yD(null )
		});
		z.v(GD, yD);
		z.Wk("goog-toolbar-select", function() {
			return new GD(null )
		});
		var LD = [10, 10, 13, 16, 18, 24, 32, 48];
		var uG = z.u("Link");
		z.u("Edit Link");
		z.u("Text to display:");
		z.vG = z.u("Link to:");
		z.u("Web address");
		z.u("Link to a page or file somewhere else on the web");
		z.u("Test this link");
		z.u("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {
			startBold: "\x3cb\x3e",
			endBold: "\x3c/b\x3e",
			searchEngineLink: "\x3ca href\x3d'http://www.google.com/' target\x3d'_new'\x3e",
			endLink: "\x3c/a\x3e"
		});
		z.u("To what URL should this link go?");
		z.u("Email address");
		z.u("Link to an email address");
		z.u("Invalid email address");
		z.u("To what email address should this link?");
		z.u("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {
			preb: "\x3cb\x3e",
			postb: "\x3c/b\x3e"
		});
		z.u("Open this link in a new window");
		z.u("Image");
		var wG, xG, VD, UD, yG, zG, AG, BG, KD, CG, DG, EG, FG, ND, GG, HG, IG, JG, KG, LG, MG, NG, OG, PG, QG, RG, SG, TG, UG, VG, WG, XG, YG, ZG, $G, aH, bH, cH, dH, eH, fH, gH, hH, iH, kH, lH, mH;
		for (wG = z.u("Normal"),
			     xG = z.u("Normal / serif"),
			     VD = [{
				     caption: wG,
				     value: "arial,sans-serif"
			     }, {
				     caption: xG,
				     value: "times new roman,serif"
			     }, {
				     caption: "Courier New",
				     value: "courier new,monospace"
			     }, {
				     caption: "Georgia",
				     value: "georgia,serif"
			     }, {
				     caption: "Trebuchet",
				     value: "trebuchet ms,sans-serif"
			     }, {
				     caption: "Verdana",
				     value: "verdana,sans-serif"
			     }],
			     UD = {
				     ja: [{
					     caption: "ＭＳ Ｐゴシック",
					     value: "ms pgothic,sans-serif"
				     }, {
					     caption: "ＭＳ Ｐ明朝",
					     value: "ms pmincho,serif"
				     }, {
					     caption: "ＭＳ ゴシック",
					     value: "ms gothic,monospace"
				     }],
				     ko: [{
					     caption: "굴림",
					     value: "gulim,sans-serif"
				     },
					     {
						     caption: "바탕",
						     value: "batang,serif"
					     }, {
						     caption: "굴림체",
						     value: "gulimche,monospace"
					     }],
				     "zh-tw": [{
					     caption: "新細明體",
					     value: "pmingliu,serif"
				     }, {
					     caption: "細明體",
					     value: "mingliu,serif"
				     }],
				     "zh-cn": [{
					     caption: "宋体",
					     value: "simsun,serif"
				     }, {
					     caption: "黑体",
					     value: "simhei,sans-serif"
				     }, {
					     caption: "MS Song",
					     value: "ms song,monospace"
				     }]
			     },
			     yG = z.u("Small"),
			     zG = z.u("Normal"),
			     AG = z.u("Large"),
			     BG = z.u("Huge"),
			     KD = [{
				     caption: yG,
				     value: 1
			     }, {
				     caption: zG,
				     value: 2
			     }, {
				     caption: AG,
				     value: 4
			     }, {
				     caption: BG,
				     value: 6
			     }],
			     CG = z.u("Heading"),
			     DG = z.u("Subheading"),
			     EG = z.u("Minor heading"),
			     FG = z.u("Normal"),
			     ND = [{
				     caption: CG,
				     Da: "H2"
			     }, {
				     caption: DG,
				     Da: "H3"
			     }, {
				     caption: EG,
				     Da: "H4"
			     }, {
				     caption: FG,
				     Da: "P"
			     }],
			     GG = z.u("Format"),
			     HG = z.u("Format"),
			     IG = z.u("Undo"),
			     JG = z.u("Redo"),
			     KG = z.u("Font"),
			     LG = z.u("Font size"),
			     MG = z.u("Text color"),
			     NG = z.u("Bold"),
			     OG = z.u("Italic"),
			     PG = z.u("Underline"),
			     QG = z.u("Text background color"),
			     RG = z.u("Add or remove link"),
			     SG = z.u("Numbered list"),
			     TG = z.u("Bullet list"),
			     UG = z.u("Decrease indent"),
			     VG = z.u("Increase indent"),
			     WG = z.u("Align left"),
			     XG = z.u("Align center"),
			     YG = z.u("Align right"),
			     ZG = z.u("Justify"),
			     $G = z.u("Remove formatting"),
			     aH = z.u("Insert image"),
			     bH = z.u("Strikethrough"),
			     cH = z.u("Left-to-right"),
			     dH = z.u("Right-to-left"),
			     eH = z.u("Quote"),
			     fH = z.u("Edit HTML source"),
			     gH = z.u("Subscript"),
			     hH = z.u("Superscript"),
			     iH = z.u("Edit HTML"),
			     z.jH = {},
			     kH = [{
				     Da: "+undo",
				     V: IG,
				     Pa: "tr-icon tr-undo",
				     factory: WD,
				     gb: !0
			     }, {
				     Da: "+redo",
				     V: JG,
				     Pa: "tr-icon tr-redo",
				     factory: WD,
				     gb: !0
			     }, {
				     Da: "+fontName",
				     V: KG,
				     Pa: "tr-fontName",
				     factory: function(a, b, c, d, f, g) {
					     var h = RD(a, b, c, d, f, g);
					     TD(h);
					     zD(h, wG);
					     z.Uh(h.Ta().X(), "goog-menu-noaccel");
					     h.Gi = function(a) {
						     var b = null ;
						     a && 0 < a.length && (b = z.lj(h.Ta(), HD(a)));
						     b != h.of() && h.Cf(b)
					     }
					     ;
					     return h
				     },
				     gb: !0
			     }, {
				     Da: "+fontSize",
				     V: LG,
				     Pa: "tr-fontSize",
				     factory: function(a, b, c, d, f, g) {
					     var h = RD(a, b, c, d, f, g);
					     JD(h);
					     zD(h, zG);
					     z.Uh(h.Ta().X(), "goog-menu-noaccel");
					     h.Gi = function(a) {
						     var b;
						     if (b = z.qa(a))
							     b = a.match(HE),
								     b = "px" == (b && b[0] || null );
						     b && (b = LD,
							     a = Array.prototype.lastIndexOf.call(b, (0,
								     window.parseInt)(a, 10), b.length - 1));
						     a = 0 < a ? a : null ;
						     a != h.W() && h.Fa(a)
					     }
					     ;
					     return h
				     },
				     gb: !0
			     }, {
				     Da: "+bold",
				     V: NG,
				     Pa: "tr-icon tr-bold",
				     gb: !0
			     }, {
				     Da: "+italic",
				     V: OG,
				     Pa: "tr-icon tr-italic",
				     gb: !0
			     }, {
				     Da: "+underline",
				     V: PG,
				     Pa: "tr-icon tr-underline",
				     gb: !0
			     }, {
				     Da: "+foreColor",
				     V: MG,
				     Pa: "tr-icon tr-foreColor",
				     factory: function(a, b, c, d, f, g) {
					     a = SD(a, b, c, d, f, g);
					     a.Fp("#000");
					     a.Gi = z.Ca(XD, a);
					     return a
				     },
				     gb: !0
			     }, {
				     Da: "+backColor",
				     V: QG,
				     Pa: "tr-icon tr-backColor",
				     factory: function(a, b, c, d, f, g) {
					     a = SD(a, b, c, d, f, g);
					     a.Fp("#FFF");
					     a.Gi = z.Ca(XD, a);
					     return a
				     },
				     gb: !0
			     }, {
				     Da: "+link",
				     V: RG,
				     caption: uG,
				     Pa: "tr-link",
				     gb: !0
			     }, {
				     Da: "+insertOrderedList",
				     V: SG,
				     Pa: "tr-icon tr-insertOrderedList",
				     gb: !0
			     }, {
				     Da: "+insertUnorderedList",
				     V: TG,
				     Pa: "tr-icon tr-insertUnorderedList",
				     gb: !0
			     }, {
				     Da: "+outdent",
				     V: UG,
				     Pa: "tr-icon tr-outdent",
				     factory: z.OD
			     }, {
				     Da: "+indent",
				     V: VG,
				     Pa: "tr-icon tr-indent",
				     factory: z.OD
			     }, {
				     Da: "+justifyLeft",
				     V: WG,
				     Pa: "tr-icon tr-justifyLeft",
				     gb: !0
			     }, {
				     Da: "+justifyCenter",
				     V: XG,
				     Pa: "tr-icon tr-justifyCenter",
				     gb: !0
			     }, {
				     Da: "+justifyRight",
				     V: YG,
				     Pa: "tr-icon tr-justifyRight",
				     gb: !0
			     }, {
				     Da: "+justifyFull",
				     V: ZG,
				     Pa: "tr-icon tr-justifyFull",
				     gb: !0
			     }, {
				     Da: "+removeFormat",
				     V: $G,
				     Pa: "tr-icon tr-removeFormat",
				     factory: z.OD
			     }, {
				     Da: "image",
				     V: aH,
				     Pa: "tr-icon tr-image",
				     factory: z.OD
			     }, {
				     Da: "+strikeThrough",
				     V: bH,
				     Pa: "tr-icon tr-strikeThrough",
				     gb: !0
			     }, {
				     Da: "+subscript",
				     V: gH,
				     Pa: "tr-icon tr-subscript",
				     gb: !0
			     }, {
				     Da: "+superscript",
				     V: hH,
				     Pa: "tr-icon tr-superscript",
				     gb: !0
			     }, {
				     Da: "ltr",
				     V: cH,
				     Pa: "tr-icon tr-ltr",
				     gb: !0
			     }, {
				     Da: "rtl",
				     V: dH,
				     Pa: "tr-icon tr-rtl",
				     factory: function(a, b, c, d, f, g) {
					     var h = z.QD(a, b, c, d, f, g);
					     h.Gi = function(a) {
						     a = !!a;
						     Yh(h.getParent().m(), "tr-rtl-mode", a);
						     h.Hc(a)
					     }
					     ;
					     return h
				     },
				     gb: !0
			     }, {
				     Da: "+BLOCKQUOTE",
				     V: eH,
				     Pa: "tr-icon tr-BLOCKQUOTE",
				     gb: !0
			     }, {
				     Da: "+formatBlock",
				     V: GG,
				     caption: HG,
				     Pa: "tr-formatBlock",
				     factory: function(a, b, c, d, f, g) {
					     var h = RD(a, b, c, d, f, g);
					     MD(h);
					     zD(h, FG);
					     z.Uh(h.Ta().X(), "goog-menu-noaccel");
					     h.Gi = function(a) {
						     a = a && 0 < a.length ? a : null ;
						     a != h.W() && h.Fa(a)
					     }
					     ;
					     return h
				     },
				     gb: !0
			     }, {
				     Da: "editHtml",
				     V: fH,
				     caption: iH,
				     Pa: "tr-editHtml",
				     factory: z.OD
			     }],
			     lH = 0,
			     mH; mH = kH[lH]; lH++)
			z.jH[mH.Da] = mH;
		kH = null ;
		var nH = {};
		nH.track = On;
		z.v(z.YD, z.ix);
		z.Da(z.YD.prototype, nH);
		z.YD.prototype.defaults = {
			zk: null ,
			title: "Distraction Free Mode",
			$L: "back",
			OT: "publish",
			Tn: "zu-editing-distraction-free",
			AU: "sticky-goog-scrollfloater",
			YU: "zm-editable-toolbar-container"
		};
		z.YD.prototype.ld = z.zb("FullScreenPlugin");
		z.jH.toggleFullScreen = {
			Da: "toggleFullScreen",
			V: "写作模式",
			Pa: "tr-icon tr-max",
			factory: z.OD
		};
		z.e = z.YD.prototype;
		z.e.Je = z.Ca(z.lc, {
			zW: "toggleFullScreen",
			TV: "enterFullScreen",
			UV: "exitFullScreen"
		});
		z.e.C = function() {
			this.ha.H();
			z.N(this.h);
			this.J = this.aq = this.tc = this.Bb = this.h = null ;
			z.YD.o.C.call(this)
		}
		;
		z.e.ew = function() {
			var a = this.J
				, b = window.document.createElement("div");
			b.id = "zu-distraction-free-editor";
			b.innerHTML = '\x3cdiv class\x3d"header"\x3e\x3cdiv class\x3d"wrapper"\x3e\x3ch1 class\x3d"title"\x3e' + a.title + '\x3c/h1\x3e\x3ca href\x3d"#" class\x3d"' + a.$L + '" name\x3d"return"\x3e返回\x3c/a\x3e\x3ca href\x3d"#" class\x3d"' + a.OT + '" name\x3d"save"\x3e发布\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"toolbar"\x3e\x3cdiv class\x3d"tools"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"content" class\x3d"grid"\x3e\x3c/div\x3e';
			window.document.body.appendChild(b);
			this.ha.g(z.L("back", b), "click", function(a) {
				a.preventDefault();
				cE(this)
			});
			this.ha.g(z.L("publish", b), "click", function(a) {
				a.preventDefault();
				this.dispatchEvent("save") && cE(this)
			});
			this.h = b;
			this.tc = z.L("content", b);
			this.aq = z.M("div", {
				className: "toolbar-info"
			});
			this.J.zk || (this.J.zk = this.F.Ia)
		}
		;
		z.e.jf = function(a) {
			this.h || this.ew();
			switch (a) {
				case "enterFullScreen":
					$D(this);
					break;
				case "exitFullScreen":
					cE(this);
					break;
				case "toggleFullScreen":
					z.T.has(window.document.body, this.J.Tn) ? cE(this) : $D(this)
			}
		}
		;
		z.e.FH = function() {
			z.T.has(window.document.body, this.J.Tn) ? cE(this) : "writing" === window.location.hash.slice(1) && $D(this)
		}
		;
		z.e.Zo = function(a) {
			27 === a.keyCode && this.dispatchEvent("shouldExitFullScreenOnEscape") && cE(this)
		}
		;
		z.e.eJ = function(a) {
			z.T[a ? "add" : "remove"](this.Bb, this.J.AU)
		}
		;
		z.v(dE, z.hw);
		dE.prototype.Yq = function() {
			return z.Zf('\x3cbutton class\x3d"feeds-loading"\x3e\x3cspan\x3e更多\x3c/span\x3e\x3c/button\x3e')
		}
		;
		dE.prototype.RA = function(a) {
			this.$d && (z.wg(this.$d.firstChild, a ? "努力加载中..." : "更多"),
				z.T.enable(this.$d, "loading", a))
		}
		;
		z.v(z.eE, z.R);
		z.eE.prototype.Lk = function() {
			z.fz.call(this, "answer");
			this.ol = "entry-expaneded";
			this.Oo = "item-footer";
			this.mq = "votebar";
			this.Br = "sprite-global-icon-fold-round-default";
			this.zu = "sprite-global-icon-fold-round-white"
		}
		;
		z.v(z.eE.prototype.Lk, z.fz);
		z.e = z.eE.prototype.Lk.prototype;
		z.e.kn = function() {
			z.eE.prototype.Lk.o.kn.call(this, {
				".js-thank": this.ws
			});
			this.zy();
			var a = (0,
				window.$)(".phone-actions", this.m());
			if (a.length) {
				var b = new z.uw;
				b.w((0,
					window.$)(".menu", a)[0]);
				b = new z.Dw("operation",b);
				b.oi = !0;
				z.Fw(b);
				Ew(b);
				b.Ob = z.Pw;
				b.w((0,
					window.$)(".menubutton", a)[0])
			}
			fE(this);
			this.Gj();
			b = (0,
				window.$)(".js-copyright-enable", this.h);
			a = (0,
				window.$)(".entry-content", this.h);
			if (b.length)
				b = b.data("author-avatar"),
					jB(a, b);
			else {
				var b = a.data("entryUrl")
					, c = a.data("authorName");
				nB(a, b, c)
			}
			this.Fj()
		}
		;
		z.e.Fj = function() {
			var a = (0,
				window.$)(".js-share", this.m()).get(0)
				, b = (0,
				window.$)(this.m()).closest(".item").find(".question-link, .item-title .link").get(0);
			a && b && z.CB(a, "answer", this.Fg, b.href + "/answer/" + this.Fg).mb(this)
		}
		;
		z.e.Gj = function() {
			var a = (0,
				z.r)(function() {
				if (!this.xh) {
					var a = z.L("entry-content", this.h)
						, c = this.pb && this.pb.m();
					!Rj && c && (0,
						window.$)(c).is(":visible") && a && 230 < (0,
						window.$)(a).height() && (a = this.xh = new Fr(null ,a),
						this.M(a),
						a.tag = "votebar",
						a.w(c))
				}
			}, this);
			this.v().g(this, ["expand", "collapse"], function(b) {
				(b = "expand" === b.type) && a();
				this.xh && z.Ar(this.xh, b)
			})
		}
		;
		z.e.zy = function() {
			var a, b, c = (0,
				window.$)("." + this.mq, this.m())[0];
			c && (a = this.pb = new RA(this.Ib,this.entryType),
				this.M(a),
				z.fd(this, a),
				a.w(c),
			(c = (0,
				window.$)(".js-mobi-vote", this.m())[0]) && (new SB(a)).w(c));
			if (c = (0,
					window.$)(".zm-item-vote-info", this.m())[0])
				b = new VA(this.Ib,this.entryType),
					this.M(b),
					z.fd(this, b),
					b.w(c);
			a && b && this.v().g(a, "change", function() {
				YA(b)
			}).g(b, "change", function() {
				(0,
					window.$)("[data-bind-votecount]", this.m()).text(b.ib())
			})
		}
		;
		z.e.ws = gz(function(a) {
			(a = a.target) && !z.T.has(a, "thanked") && (!0 === window.$.parseJSON(a.getAttribute("data-thanked")) ? (tn(a, "感谢"),
				a.setAttribute("data-thanked", !1),
				window.$.post("/answer/cancel_thanks", {
					aid: this.Ib
				})) : (tn(a, "取消感谢"),
				a.setAttribute("data-thanked", !0),
				window.$.post("/answer/thanks", {
					aid: this.Ib
				})))
		}, {
			qb: "question_answer_thank"
		});
		z.e.tj = gz(function() {
			var a = z.DA.Y();
			GA(a, this.Ib);
			a.show()
		}, {
			qb: "question_answer_collect",
			Yd: !0
		});
		z.e.ue = function() {
			z.eE.prototype.Lk.o.ue.call(this);
			mu(this.Rd.register("v", function() {
				this.pb && this.pb.Ku()
			}, this), {
				group: "操作",
				name: "赞同"
			});
			mu(this.Rd.register("d", function() {
				this.pb && this.pb.Ju()
			}, this), {
				group: "操作",
				name: "反对"
			});
			mu(mu(mu(mu(this.Rd.register("o", this.Gf, this), {
				group: "操作",
				name: "显示全部/收起"
			}).register("c", this.mg, this), {
				group: "操作",
				name: "打开评论"
			}).register("s c", this.tj, this), {
				group: "操作",
				name: "收藏"
			}).register("shift+c", this.Vx, this), {
				group: "操作",
				name: "定位到评论框"
			})
		}
		;
		z.eE.prototype.wC = function() {
			z.fz.call(this, "question");
			this.Oo = "item-footer"
		}
		;
		z.v(z.eE.prototype.wC, z.fz);
		z.eE.prototype.init = function() {
			z.YF.M(this);
			this.w(window.document.body);
			this.yy();
			this.Ns();
			z.gE();
			var a = (0,
				window.$)(".rt-comment-box")[0];
			if (a) {
				var b = new z.ry(this.up.id,"roundtable");
				this.M(b);
				b.w(a)
			}
		}
		;
		z.eE.prototype.yy = function() {
			this.v().g(this, "click!", function(a) {
				"comment" === a.namespace && a.Lc.fill("label", "roundtable").fill("category", this.bh)
			})
		}
		;
		z.eE.prototype.Ns = function() {
			function a(a) {
				a = a.getAttribute("data-type");
				return (a = {
					answer: z.eE.prototype.Lk,
					question: z.eE.prototype.wC
				}[a]) ? new a : new z.R
			}
			var b = this;
			(0,
				window.$)("[data-paging]").each(function() {
				var c = new dE;
				c.use("childConstructor", {
					factory: a
				});
				null  !== this.getAttribute("data-navigable") && c.use("shortcut", {
					items: "\x3e.item"
				});
				b.M(c);
				c.w(this)
			})
		}
		;
		z.lE = {
			digits: {
				required: "请填写数字验证码"
			},
			password: {
				required: "请填写密码"
			},
			password_repeat: {
				required: "请填写密码"
			},
			email: {
				required: "请填写邮箱"
			},
			phone_no: {
				required: "请填写手机号"
			}
		};
	}
).call(this, __z_z__);
