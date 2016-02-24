/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/10/22.
 */
if (!STK)var STK = function () {
	var a = {}, b = "theia";
	a[b] = {
		IE: /msie/i.test(navigator.userAgent), E: function (a) {
			return typeof a == "string" ? document.getElementById(a) : a
		}, C: function (a) {
			var b;
			a = a.toUpperCase();
			a == "TEXT" ? b = document.createTextNode("") : a == "BUFFER" ? b = document.createDocumentFragment() : b = document.createElement(a);
			return b
		}, log: function (a) {
		}
	};
	var c = a[b];
	c.register = function (c, d, e) {
		if (!e || typeof e != "string")e = b;
		a[e] || (a[e] = {});
		var f = a[e], g = c.split("."), h = f, i = null;
		while (i = g.shift())if (g.length) {
			h[i] === undefined && (h[i] = {});
			h = h[i]
		} else if (h[i] === undefined)try {
			if (e && e !== b) {
				if (c === "core.util.listener") {
					h[i] = a[b].core.util.listener;
					return !0
				}
				if (c === "core.util.connect") {
					h[i] = a[b].core.util.connect;
					return !0
				}
			}
			h[i] = d(f);
			return !0
		} catch (j) {
			setTimeout(function () {
			}, 0)
		}
		return !1
	};
	c.unRegister = function (c, d) {
		if (!d || typeof d != "string")d = b;
		var e = a[d], f = c.split("."), g = e, h = null;
		while (h = f.shift())if (f.length) {
			if (g[h] === undefined)return !1;
			g = g[h]
		} else if (g[h] !== undefined) {
			delete g[h];
			return !0
		}
		return !1
	};
	c.regShort = function (a, b) {
		if (c[a] !== undefined)throw"[" + a + "] : short : has been register";
		c[a] = b
	};
	c.shortRegister = function (c, d, e) {
		if (!e || typeof e != "string")e = b;
		var f = a[e], g = c.split(".");
		if (!d)return !1;
		if (f[d])return !1;
		var h = f, i = null;
		while (i = g.shift())if (g.length) {
			if (h[i] === undefined)return !1;
			h = h[i]
		} else if (h[i] !== undefined) {
			if (f[d])return !1;
			f[d] = h[i];
			return !0
		}
		return !1
	};
	c.getPKG = function (c) {
		if (!c || typeof c != "string")c = b;
		return a[c]
	};
	return c
}();
STK.register("core.ani.algorithm", function (a) {
	var b = {
		linear: function (a, b, c, d, e) {
			return c * a / d + b
		}, easeincubic: function (a, b, c, d, e) {
			return c * (a /= d) * a * a + b
		}, easeoutcubic: function (a, b, c, d, e) {
			return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
		}, easeinoutcubic: function (a, b, c, d, e) {
			e == undefined && (e = 1.70158);
			return c * (a /= d) * a * ((e + 1) * a - e) + b
		}, easeinback: function (a, b, c, d, e) {
			e == undefined && (e = 1.70158);
			return c * (a /= d) * a * ((e + 1) * a - e) + b
		}, easeoutback: function (a, b, c, d, e) {
			e == undefined && (e = 1.70158);
			return c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
		}, easeinoutback: function (a, b, c, d, e) {
			e == undefined && (e = 1.70158);
			return (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
		}
	};
	return {
		addAlgorithm: function (a, c) {
			if (b[a])throw"[core.ani.tweenValue] this algorithm :" + a + "already exist";
			b[a] = c
		}, compute: function (a, c, d, e, f, g, h) {
			if (typeof b[a] != "function")throw"[core.ani.tweenValue] this algorithm :" + a + "do not exist";
			return b[a](e, c, d, f, g, h)
		}
	}
});
STK.register("core.func.empty", function () {
	return function () {
	}
});
STK.register("core.obj.parseParam", function (a) {
	return function (a, b, c) {
		var d, e = {};
		b = b || {};
		for (d in a) {
			e[d] = a[d];
			b[d] != null && (c ? a.hasOwnProperty[d] && (e[d] = b[d]) : e[d] = b[d])
		}
		return e
	}
});
STK.register("core.ani.tweenArche", function (a) {
	return function (b, c) {
		var d, e, f, g, h, i, j, k;
		e = {};
		d = a.core.obj.parseParam({
			animationType: "linear",
			distance: 1,
			duration: 500,
			callback: a.core.func.empty,
			algorithmParams: {},
			extra: 5,
			delay: 25
		}, c);
		var l = function () {
			f = +(new Date) - g;
			if (f < d.duration) {
				h = a.core.ani.algorithm.compute(d.animationType, 0, d.distance, f, d.duration, d.extra, d.algorithmParams);
				b(h);
				i = setTimeout(l, d.delay)
			} else {
				k = "stop";
				d.callback()
			}
		};
		k = "stop";
		e.getStatus = function () {
			return k
		};
		e.play = function () {
			g = +(new Date);
			h = null;
			l();
			k = "play";
			return e
		};
		e.stop = function () {
			clearTimeout(i);
			k = "stop";
			return e
		};
		e.resume = function () {
			if (j) {
				g += +(new Date) - j;
				l()
			}
			return e
		};
		e.pause = function () {
			clearTimeout(i);
			j = +(new Date);
			k = "pause";
			return e
		};
		e.destroy = function () {
			clearTimeout(i);
			j = 0;
			k = "stop"
		};
		return e
	}
});
STK.register("core.dom.getStyle", function (a) {
	function b() {
		return "y"in b ? b.y : b.y = "filters"in a.C("div")
	}

	return function (a, c) {
		if (!b()) {
			c == "float" && (c = "cssFloat");
			try {
				var d = document.defaultView.getComputedStyle(a, "")
			} catch (e) {
			}
			return a.style[c] || d ? d[c] : null
		}
		switch (c) {
			case"opacity":
				var f = 100;
				try {
					f = a.filters["DXImageTransform.Microsoft.Alpha"].opacity
				} catch (e) {
					try {
						f = a.filters("alpha").opacity
					} catch (e) {
					}
				}
				return f / 100;
			case"float":
				c = "styleFloat";
			default:
				var g = a.currentStyle ? a.currentStyle[c] : null;
				return a.style[c] || g
		}
	}
});
STK.register("core.util.browser", function (a) {
	var b = navigator.userAgent.toLowerCase(), c = window.external || "", d, e, f, g, h, i = function (a) {
		var b = 0;
		return parseFloat(a.replace(/\./g, function () {
			return b++ == 1 ? "" : "."
		}))
	};
	try {
		/windows|win32/i.test(b) ? h = "windows" : /macintosh/i.test(b) ? h = "macintosh" : /rhino/i.test(b) && (h = "rhino");
		if ((e = b.match(/applewebkit\/([^\s]*)/)) && e[1]) {
			d = "webkit";
			g = i(e[1])
		} else if ((e = b.match(/presto\/([\d.]*)/)) && e[1]) {
			d = "presto";
			g = i(e[1])
		} else if (e = b.match(/msie\s([^;]*)/)) {
			d = "trident";
			g = 1;
			(e = b.match(/trident\/([\d.]*)/)) && e[1] && (g = i(e[1]))
		} else if (/gecko/.test(b)) {
			d = "gecko";
			g = 1;
			(e = b.match(/rv:([\d.]*)/)) && e[1] && (g = i(e[1]))
		}
		/world/.test(b) ? f = "world" : /360se/.test(b) ? f = "360" : /maxthon/.test(b) || typeof c.max_version == "number" ? f = "maxthon" : /tencenttraveler\s([\d.]*)/.test(b) ? f = "tt" : /se\s([\d.]*)/.test(b) && (f = "sogou")
	} catch (j) {
	}
	var k = {
		OS: h,
		CORE: d,
		Version: g,
		EXTRA: f ? f : !1,
		IE: /msie/.test(b),
		OPERA: /opera/.test(b),
		MOZ: /gecko/.test(b) && !/(compatible|webkit)/.test(b),
		IE5: /msie 5 /.test(b),
		IE55: /msie 5.5/.test(b),
		IE6: /msie 6/.test(b),
		IE7: /msie 7/.test(b),
		IE8: /msie 8/.test(b),
		IE9: /msie 9/.test(b),
		SAFARI: !/chrome\/([\d.]*)/.test(b) && /\/([\da-f.]*) safari/.test(b),
		CHROME: /chrome\/([\d.]*)/.test(b),
		IPAD: /\(ipad/i.test(b),
		IPHONE: /\(iphone/i.test(b),
		ITOUCH: /\(itouch/i.test(b),
		MOBILE: /mobile/i.test(b)
	};
	return k
});
STK.register("core.dom.cssText", function (a) {
	var b = function (a) {
		var b = 0, c = [], d = "close", e = !1, f = null, g = function (d) {
			c.push({type: "info", content: a.slice(0, b)});
			c.push({type: "sign", content: a.slice(b, b + 1)});
			a = a.slice(b + 1);
			b = 0
		};
		while (a) {
			var h = a.charAt(b);
			switch (h) {
				case":":
					if (!e && d === "close") {
						c.push({type: "attr", content: a.slice(0, b)});
						c.push({type: "sign", content: a.slice(b, b + 1)});
						a = a.slice(b + 1);
						b = 0;
						d = "open";
						break
					}
					b += 1;
					break;
				case";":
					if (!e) {
						if (d === "open") {
							c.push({type: "info", content: a.slice(0, b)});
							c.push({type: "sign", content: a.slice(b, b + 1)})
						}
						a = a.slice(b + 1);
						b = 0;
						d = "close";
						break
					}
					b += 1;
					break;
				case'"':
				case"'":
					if (e) {
						if (h === f) {
							e = !e;
							f = null
						}
					} else {
						e = !e;
						f = h
					}
					b += 1;
					break;
				case" ":
				case"!":
				case",":
				case"(":
				case")":
					g(h);
					break;
				case"":
					c.push({type: "info", content: a.slice(0, b)});
					a = "";
					b = 0;
					break;
				default:
					b += 1
			}
		}
		return c
	}, c = function (a) {
		var b = {}, c;
		for (var d = 0, e = a.length; d < e; d += 1)if (a[d].type === "attr") {
			c = a[d].content;
			b[c] = ""
		} else {
			if (a[d].type === "sign" && a[d].content === ";") {
				c = null;
				continue
			}
			if (a[d].type === "sign" && a[d].content === ":")continue;
			c !== null;
			b[c] += a[d].content
		}
		return b
	}, d = {
		webkit: "-webkit-",
		presto: "-o-",
		trident: "-ms-",
		gecko: "-moz-"
	}[a.core.util.browser.CORE], e = ["transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function"], f = function (a) {
		for (var b = 0, c = e.length; b < c; b += 1)if (a === e[b])return !0;
		return !1
	};
	return function (a) {
		var e = c(b(a || "")), g = function (a, b) {
			a = a.toLowerCase();
			e[a] = b;
			f(a) && (e[d + a] = b);
			return h
		}, h = {
			push: g, remove: function (a) {
				a = a.toLowerCase();
				e[a] && delete e[a];
				f(a) && e[d + a] && delete e[d + a];
				return h
			}, merge: function (a) {
				var d = c(b(a || ""));
				for (var e in d)g(e, d[e])
			}, getCss: function () {
				var a = [];
				for (var b in e)a.push(b + ":" + e[b]);
				return a.join(";")
			}
		};
		return h
	}
});
STK.register("core.func.getType", function (a) {
	return function (a) {
		var b;
		return ((b = typeof a) == "object" ? a == null && "null" || Object.prototype.toString.call(a).slice(8, -1) : b).toLowerCase()
	}
});
STK.register("core.arr.isArray", function (a) {
	return function (a) {
		return Object.prototype.toString.call(a) === "[object Array]"
	}
});
STK.register("core.arr.foreach", function (a) {
	var b = function (a, b) {
		var c = [];
		for (var d = 0, e = a.length; d < e; d += 1) {
			var f = b(a[d], d);
			if (f === !1)break;
			f !== null && (c[d] = f)
		}
		return c
	}, c = function (a, b) {
		var c = {};
		for (var d in a) {
			var e = b(a[d], d);
			if (e === !1)break;
			e !== null && (c[d] = e)
		}
		return c
	};
	return function (d, e) {
		return a.core.arr.isArray(d) || d.length && d[0] !== undefined ? b(d, e) : typeof d == "object" ? c(d, e) : null
	}
});
STK.register("core.arr.indexOf", function (a) {
	return function (a, b) {
		if (b.indexOf)return b.indexOf(a);
		for (var c = 0, d = b.length; c < d; c++)if (b[c] === a)return c;
		return -1
	}
});
STK.register("core.arr.inArray", function (a) {
	return function (b, c) {
		return a.core.arr.indexOf(b, c) > -1
	}
});
STK.register("core.dom.isNode", function (a) {
	return function (a) {
		return a != undefined && Boolean(a.nodeName) && Boolean(a.nodeType)
	}
});
STK.register("core.json.merge", function (a) {
	var b = function (b) {
		return b === undefined ? !0 : b === null ? !0 : a.core.arr.inArray(typeof b, ["number", "string", "function", "boolean"]) ? !0 : a.core.dom.isNode(b) ? !0 : !1
	}, c = function (d, e, f) {
		if (b(f))d[e] = f; else {
			if (a.core.arr.isArray(f)) {
				a.core.arr.isArray(d[e]) || (d[e] = []);
				for (var g = 0, h = f.length; g < h; g += 1)c(d[e], g, f[g]);
				return
			}
			if (typeof f == "object") {
				if (b(d[e]) || a.core.arr.isArray(d[e]))d[e] = {};
				for (var i in f)c(d[e], i, f[i]);
				return
			}
		}
	}, d = function (a, b, d) {
		var e = {};
		if (d) {
			for (var f in a)c(e, f, a[f]);
			for (var f in b)c(e, f, b[f])
		} else {
			for (var f in a)e[f] = a[f];
			for (var f in b)e[f] = b[f]
		}
		return e
	};
	return function (b, c, e) {
		var f = a.core.obj.parseParam({isDeep: !1}, e);
		return d(b, c, f.isDeep)
	}
});
STK.register("core.util.color", function (a) {
	var b = /^#([a-fA-F0-9]{3,8})$/, c = /^rgb[a]?\s*\((\s*([0-9]{1,3})\s*,){2,3}(\s*([0-9]{1,3})\s*)\)$/, d = /([0-9]{1,3})/ig, e = /([a-fA-F0-9]{2})/ig, f = a.core.arr.foreach, g = function (a) {
		var g = [], h = [];
		if (b.test(a)) {
			h = a.match(b);
			h[1].length <= 4 ? g = f(h[1].split(""), function (a, b) {
				return parseInt(a + a, 16)
			}) : h[1].length <= 8 && (g = f(h[1].match(e), function (a, b) {
				return parseInt(a, 16)
			}));
			return g
		}
		if (c.test(a)) {
			h = a.match(d);
			g = f(h, function (a, b) {
				return parseInt(a, 10)
			});
			return g
		}
		return !1
	};
	return function (a, b) {
		var c = g(a);
		if (!c)return !1;
		var d = {};
		d.getR = function () {
			return c[0]
		};
		d.getG = function () {
			return c[1]
		};
		d.getB = function () {
			return c[2]
		};
		d.getA = function () {
			return c[3]
		};
		return d
	}
});
STK.register("core.ani.tween", function (a) {
	var b = a.core.ani.tweenArche, c = a.core.arr.foreach, d = a.core.dom.getStyle, e = a.core.func.getType, f = a.core.obj.parseParam, g = a.core.json.merge, h = a.core.util.color, i = function (a) {
		var b = /(-?\d\.?\d*)([a-z%]*)/i.exec(a), c = [0, "px"];
		if (b) {
			b[1] && (c[0] = b[1] - 0);
			b[2] && (c[1] = b[2])
		}
		return c
	}, j = function (a) {
		for (var b = 0, c = a.length; b < c; b += 1) {
			var d = a.charCodeAt(b);
			if (d > 64 && d < 90) {
				var e = a.substr(0, b), f = a.substr(b, 1), g = a.slice(b + 1);
				return e + "-" + f.toLowerCase() + g
			}
		}
		return a
	}, k = function (a, b, c) {
		var f = d(a, c);
		if (e(f) === "undefined" || f === "auto") {
			c === "height" && (f = a.offsetHeight);
			c === "width" && (f = a.offsetWidth)
		}
		var g = {start: f, end: b, unit: "", key: c, defaultColor: !1};
		if (e(b) === "number") {
			var j = [0, "px"];
			e(f) === "number" ? j[0] = f : j = i(f);
			g.start = j[0];
			g.unit = j[1]
		}
		if (e(b) === "string") {
			var k, l;
			k = h(b);
			if (k) {
				l = h(f);
				l || (l = h("#fff"));
				g.start = l;
				g.end = k;
				g.defaultColor = !0
			}
		}
		a = null;
		return g
	}, l = {
		opacity: function (a, b, c, d) {
			var e = a * (c - b) + b;
			return {filter: "alpha(opacity=" + e * 100 + ")", opacity: Math.max(Math.min(1, e), 0), zoom: "1"}
		}, defaultColor: function (a, b, c, d, e) {
			var f = Math.max(0, Math.min(255, Math.ceil(a * (c.getR() - b.getR()) + b.getR()))), g = Math.max(0, Math.min(255, Math.ceil(a * (c.getG() - b.getG()) + b.getG()))), h = Math.max(0, Math.min(255, Math.ceil(a * (c.getB() - b.getB()) + b.getB()))), i = {};
			i[j(e)] = "#" + (f < 16 ? "0" : "") + f.toString(16) + (g < 16 ? "0" : "") + g.toString(16) + (h < 16 ? "0" : "") + h.toString(16);
			return i
		}, "default": function (a, b, c, d, e) {
			var f = a * (c - b) + b, g = {};
			g[j(e)] = f + d;
			return g
		}
	};
	return function (d, e) {
		var h, i, j, m, n, o, p, q, r, s;
		e = e || {};
		i = f({animationType: "linear", duration: 500, algorithmParams: {}, extra: 5, delay: 25}, e);
		i.distance = 1;
		var t, u;
		i.callback = function () {
			u = e.end || a.core.func.empty;
			t = e.tween || a.core.func.empty;
			return function () {
				m(1);
				p();
				u(d)
			}
		}();
		j = g(l, e.propertys || {});
		o = null;
		n = {};
		r = [];
		m = function (a) {
			var b = [], e = c(n, function (b, c) {
				var d;
				j[c] ? d = j[c] : b.defaultColor ? d = j.defaultColor : d = j["default"];
				var e = d(a, b.start, b.end, b.unit, b.key);
				for (var f in e)o.push(f, e[f]);
				try {
					t(a)
				} catch (g) {
				}
			});
			d.style.cssText = o.getCss()
		};
		p = function () {
			var a;
			while (a = r.shift())try {
				a.fn();
				if (a.type === "play")break;
				if (a.type === "destroy")break
			} catch (b) {
			}
		};
		s = b(m, i);
		var v = function (a) {
			s.getStatus() !== "play" ? d = a : r.push({fn: v, type: "setNode"})
		}, w = function (b) {
			if (s.getStatus() !== "play") {
				n = c(b, function (a, b) {
					return k(d, a, b)
				});
				o = a.core.dom.cssText(d.style.cssText + (e.staticStyle || ""));
				s.play()
			} else r.push({
				fn: function () {
					w(b)
				}, type: "play"
			})
		}, x = function () {
			if (s.getStatus() !== "play") {
				s.destroy();
				d = null;
				h = null;
				i = null;
				j = null;
				m = null;
				n = null;
				o = null;
				p = null;
				q = null;
				r = null
			} else r.push({fn: x, type: "destroy"})
		};
		h = {};
		h.play = function (a) {
			w(a);
			return h
		};
		h.stop = function () {
			s.stop();
			return h
		};
		h.pause = function () {
			s.pause();
			return h
		};
		h.resume = function () {
			s.resume();
			return h
		};
		h.finish = function (a) {
			w(a);
			x();
			return h
		};
		h.setNode = function (a) {
			v(a);
			return h
		};
		h.destroy = function () {
			x();
			return h
		};
		return h
	}
});
STK.register("core.dom.hasClassName", function (a) {
	return function (a, b) {
		return (new RegExp("(^|\\s)" + b + "($|\\s)")).test(a.className)
	}
});
STK.register("core.str.trim", function (a) {
	return function (a) {
		if (typeof a != "string")throw"trim need a string as parameter";
		var b = a.length, c = 0, d = /(\u3000|\s|\t|\u00A0)/;
		while (c < b) {
			if (!d.test(a.charAt(c)))break;
			c += 1
		}
		while (b > c) {
			if (!d.test(a.charAt(b - 1)))break;
			b -= 1
		}
		return a.slice(c, b)
	}
});
STK.register("core.dom.addClassName", function (a) {
	return function (b, c) {
		b.nodeType === 1 && (a.core.dom.hasClassName(b, c) || (b.className = a.core.str.trim(b.className) + " " + c))
	}
});
STK.register("core.dom.removeClassName", function (a) {
	return function (b, c) {
		b.nodeType === 1 && a.core.dom.hasClassName(b, c) && (b.className = b.className.replace(new RegExp("(^|\\s)" + c + "($|\\s)"), " "))
	}
});
STK.register("core.evt.addEvent", function (a) {
	return function (b, c, d) {
		b = a.E(b);
		if (b == null)return !1;
		if (typeof d != "function")return !1;
		b.addEventListener ? b.addEventListener(c, d, !1) : b.attachEvent ? b.attachEvent("on" + c, d) : b["on" + c] = d;
		return !0
	}
});
STK.register("core.evt.removeEvent", function (a) {
	return function (b, c, d) {
		b = a.E(b);
		if (b == null)return !1;
		if (typeof d != "function")return !1;
		b.removeEventListener ? b.removeEventListener(c, d, !1) : b.detachEvent && b.detachEvent("on" + c, d);
		b["on" + c] = null;
		return !0
	}
});
STK.register("core.ani.transition", function (a) {
	var b = function () {
		var a = document.createElement("style"), b = "STK_transition_" + +(new Date), c = null, d = {};
		a.setAttribute("type", "text/css");
		a.setAttribute("id", b);
		document.head.appendChild(a);
		for (var e = 0, f = document.styleSheets.length; e < f; e += 1)if (document.styleSheets[e].ownerNode.id === b) {
			c = document.styleSheets[e];
			break
		}
		d.getCssSheet = function () {
			return c
		};
		d.addRule = function (a, b) {
			var d = c.rules || c.cssRules;
			c.addRule ? c.addRule(a, b, d.length) : c.insertRule && c.insertRule(a + " {" + b + "}", d.length)
		};
		d.destory = function () {
			document.head.removeChild(a);
			a = null;
			c = null;
			b = null
		};
		return d
	};
	return function (c, d) {
		var e = a.core.obj.parseParam({
			target: "", duration: 500, timingFn: [0, 0, 1, 1], callback: function () {
			}
		}, d), f = "all " + e.duration + "ms cubic-bezier(" + e.timingFn.join(",") + ")", g = a.core.dom.cssText(c.style.cssText), h = "test", i = b();
		g.merge(e.target);
		g.push("transition", f);
		i.addRule("." + h, g.getCss());
		a.core.evt.addEvent(c, "transitionend", function () {
			a.core.evt.removeEvent(c, "transitionend", arguments.callee);
			c.style.cssText = g.remove("transition").getCss();
			a.core.dom.removeClassName(c, h);
			i.destory();
			f = null;
			g = null;
			h = null;
			i = null;
			e.callback(c);
			e = null
		});
		a.core.dom.addClassName(c, h);
		c.style.cssText = ""
	}
});
STK.register("core.arr.findout", function (a) {
	return function (b, c) {
		if (!a.core.arr.isArray(b))throw"the findout function needs an array as first parameter";
		var d = [];
		for (var e = 0, f = b.length; e < f; e += 1)b[e] === c && d.push(e);
		return d
	}
});
STK.register("core.arr.clear", function (a) {
	return function (b) {
		if (!a.core.arr.isArray(b))throw"the clear function needs an array as first parameter";
		var c = [];
		for (var d = 0, e = b.length; d < e; d += 1)a.core.arr.findout([undefined, null, ""], b[d]).length || c.push(b[d]);
		return c
	}
});
STK.register("core.arr.copy", function (a) {
	return function (b) {
		if (!a.core.arr.isArray(b))throw"the copy function needs an array as first parameter";
		return b.slice(0)
	}
});
STK.register("core.arr.hasby", function (a) {
	return function (b, c) {
		if (!a.core.arr.isArray(b))throw"the hasBy function needs an array as first parameter";
		var d = [];
		for (var e = 0, f = b.length; e < f; e += 1)c(b[e], e) && d.push(e);
		return d
	}
});
STK.register("core.arr.unique", function (a) {
	return function (b) {
		if (!a.core.arr.isArray(b))throw"the unique function needs an array as first parameter";
		var c = [];
		for (var d = 0, e = b.length; d < e; d += 1)a.core.arr.indexOf(b[d], c) === -1 && c.push(b[d]);
		return c
	}
});
STK.register("core.dom.addHTML", function (a) {
	return function (a, b) {
		if (a.insertAdjacentHTML)a.insertAdjacentHTML("BeforeEnd", b); else {
			var c = a.ownerDocument.createRange();
			c.setStartBefore(a);
			var d = c.createContextualFragment(b);
			a.appendChild(d)
		}
	}
});
STK.register("core.dom.sizzle", function (a) {
	function c(a, b, c, d, e, f) {
		for (var g = 0, h = d.length; g < h; g++) {
			var i = d[g];
			if (i) {
				i = i[a];
				var j = !1;
				while (i) {
					if (i.sizcache === c) {
						j = d[i.sizset];
						break
					}
					if (i.nodeType === 1 && !f) {
						i.sizcache = c;
						i.sizset = g
					}
					if (i.nodeName.toLowerCase() === b) {
						j = i;
						break
					}
					i = i[a]
				}
				d[g] = j
			}
		}
	}

	function b(a, b, c, d, e, f) {
		for (var g = 0, h = d.length; g < h; g++) {
			var j = d[g];
			if (j) {
				j = j[a];
				var k = !1;
				while (j) {
					if (j.sizcache === c) {
						k = d[j.sizset];
						break
					}
					if (j.nodeType === 1) {
						if (!f) {
							j.sizcache = c;
							j.sizset = g
						}
						if (typeof b != "string") {
							if (j === b) {
								k = !0;
								break
							}
						} else if (i.filter(b, [j]).length > 0) {
							k = j;
							break
						}
					}
					j = j[a]
				}
				d[g] = k
			}
		}
	}

	var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = 0, f = Object.prototype.toString, g = !1, h = !0;
	[0, 0].sort(function () {
		h = !1;
		return 0
	});
	var i = function (a, b, c, e) {
		c = c || [];
		b = b || document;
		var g = b;
		if (b.nodeType !== 1 && b.nodeType !== 9)return [];
		if (!a || typeof a != "string")return c;
		var h = [], l, m, o, p, r = !0, s = i.isXML(b), t = a, u, v, w, x;
		do {
			d.exec("");
			l = d.exec(t);
			if (l) {
				t = l[3];
				h.push(l[1]);
				if (l[2]) {
					p = l[3];
					break
				}
			}
		} while (l);
		if (h.length > 1 && k.exec(a))if (h.length === 2 && j.relative[h[0]])m = q(h[0] + h[1], b); else {
			m = j.relative[h[0]] ? [b] : i(h.shift(), b);
			while (h.length) {
				a = h.shift();
				j.relative[a] && (a += h.shift());
				m = q(a, m)
			}
		} else {
			if (!e && h.length > 1 && b.nodeType === 9 && !s && j.match.ID.test(h[0]) && !j.match.ID.test(h[h.length - 1])) {
				u = i.find(h.shift(), b, s);
				b = u.expr ? i.filter(u.expr, u.set)[0] : u.set[0]
			}
			if (b) {
				u = e ? {
					expr: h.pop(),
					set: n(e)
				} : i.find(h.pop(), h.length === 1 && (h[0] === "~" || h[0] === "+") && b.parentNode ? b.parentNode : b, s);
				m = u.expr ? i.filter(u.expr, u.set) : u.set;
				h.length > 0 ? o = n(m) : r = !1;
				while (h.length) {
					v = h.pop();
					w = v;
					j.relative[v] ? w = h.pop() : v = "";
					w == null && (w = b);
					j.relative[v](o, w, s)
				}
			} else o = h = []
		}
		o || (o = m);
		o || i.error(v || a);
		if (f.call(o) === "[object Array]")if (!r)c.push.apply(c, o); else if (b && b.nodeType === 1)for (x = 0; o[x] != null; x++)o[x] && (o[x] === !0 || o[x].nodeType === 1 && i.contains(b, o[x])) && c.push(m[x]); else for (x = 0; o[x] != null; x++)o[x] && o[x].nodeType === 1 && c.push(m[x]); else n(o, c);
		if (p) {
			i(p, g, c, e);
			i.uniqueSort(c)
		}
		return c
	};
	i.uniqueSort = function (a) {
		if (p) {
			g = h;
			a.sort(p);
			if (g)for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1)
		}
		return a
	};
	i.matches = function (a, b) {
		return i(a, null, null, b)
	};
	i.find = function (a, b, c) {
		var d;
		if (!a)return [];
		for (var e = 0, f = j.order.length; e < f; e++) {
			var g = j.order[e], h;
			if (h = j.leftMatch[g].exec(a)) {
				var i = h[1];
				h.splice(1, 1);
				if (i.substr(i.length - 1) !== "\\") {
					h[1] = (h[1] || "").replace(/\\/g, "");
					d = j.find[g](h, b, c);
					if (d != null) {
						a = a.replace(j.match[g], "");
						break
					}
				}
			}
		}
		d || (d = b.getElementsByTagName("*"));
		return {set: d, expr: a}
	};
	i.filter = function (a, b, c, d) {
		var e = a, f = [], g = b, h, k, l = b && b[0] && i.isXML(b[0]);
		while (a && b.length) {
			for (var m in j.filter)if ((h = j.leftMatch[m].exec(a)) != null && h[2]) {
				var n = j.filter[m], o, p, q = h[1];
				k = !1;
				h.splice(1, 1);
				if (q.substr(q.length - 1) === "\\")continue;
				g === f && (f = []);
				if (j.preFilter[m]) {
					h = j.preFilter[m](h, g, c, f, d, l);
					if (!h)k = o = !0; else if (h === !0)continue
				}
				if (h)for (var r = 0; (p = g[r]) != null; r++)if (p) {
					o = n(p, h, r, g);
					var s = d ^ !!o;
					if (c && o != null)s ? k = !0 : g[r] = !1; else if (s) {
						f.push(p);
						k = !0
					}
				}
				if (o !== undefined) {
					c || (g = f);
					a = a.replace(j.match[m], "");
					if (!k)return [];
					break
				}
			}
			if (a === e)if (k == null)i.error(a); else break;
			e = a
		}
		return g
	};
	i.error = function (a) {
		throw"Syntax error, unrecognized expression: " + a
	};
	var j = {
		order: ["ID", "NAME", "TAG"],
		match: {
			ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
			CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
			NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
			ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
			TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
			CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
			POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
			PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
		},
		leftMatch: {},
		attrMap: {"class": "className", "for": "htmlFor"},
		attrHandle: {
			href: function (a) {
				return a.getAttribute("href")
			}
		},
		relative: {
			"+": function (a, b) {
				var c = typeof b == "string", d = c && !/\W/.test(b), e = c && !d;
				d && (b = b.toLowerCase());
				for (var f = 0, g = a.length, h; f < g; f++)if (h = a[f]) {
					while ((h = h.previousSibling) && h.nodeType !== 1);
					a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
				}
				e && i.filter(b, a, !0)
			}, ">": function (a, b) {
				var c = typeof b == "string", d, e = 0, f = a.length;
				if (c && !/\W/.test(b)) {
					b = b.toLowerCase();
					for (; e < f; e++) {
						d = a[e];
						if (d) {
							var g = d.parentNode;
							a[e] = g.nodeName.toLowerCase() === b ? g : !1
						}
					}
				} else {
					for (; e < f; e++) {
						d = a[e];
						d && (a[e] = c ? d.parentNode : d.parentNode === b)
					}
					c && i.filter(b, a, !0)
				}
			}, "": function (a, d, f) {
				var g = e++, h = b, i;
				if (typeof d == "string" && !/\W/.test(d)) {
					d = d.toLowerCase();
					i = d;
					h = c
				}
				h("parentNode", d, g, a, i, f)
			}, "~": function (a, d, f) {
				var g = e++, h = b, i;
				if (typeof d == "string" && !/\W/.test(d)) {
					d = d.toLowerCase();
					i = d;
					h = c
				}
				h("previousSibling", d, g, a, i, f)
			}
		},
		find: {
			ID: function (a, b, c) {
				if (typeof b.getElementById != "undefined" && !c) {
					var d = b.getElementById(a[1]);
					return d ? [d] : []
				}
			}, NAME: function (a, b) {
				if (typeof b.getElementsByName != "undefined") {
					var c = [], d = b.getElementsByName(a[1]);
					for (var e = 0, f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
					return c.length === 0 ? null : c
				}
			}, TAG: function (a, b) {
				return b.getElementsByTagName(a[1])
			}
		},
		preFilter: {
			CLASS: function (a, b, c, d, e, f) {
				a = " " + a[1].replace(/\\/g, "") + " ";
				if (f)return a;
				for (var g = 0, h; (h = b[g]) != null; g++)h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
				return !1
			}, ID: function (a) {
				return a[1].replace(/\\/g, "")
			}, TAG: function (a, b) {
				return a[1].toLowerCase()
			}, CHILD: function (a) {
				if (a[1] === "nth") {
					var b = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
					a[2] = b[1] + (b[2] || 1) - 0;
					a[3] = b[3] - 0
				}
				a[0] = e++;
				return a
			}, ATTR: function (a, b, c, d, e, f) {
				var g = a[1].replace(/\\/g, "");
				!f && j.attrMap[g] && (a[1] = j.attrMap[g]);
				a[2] === "~=" && (a[4] = " " + a[4] + " ");
				return a
			}, PSEUDO: function (a, b, c, e, f) {
				if (a[1] === "not")if ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))a[3] = i(a[3], null, null, b); else {
					var g = i.filter(a[3], b, c, !0 ^ f);
					c || e.push.apply(e, g);
					return !1
				} else if (j.match.POS.test(a[0]) || j.match.CHILD.test(a[0]))return !0;
				return a
			}, POS: function (a) {
				a.unshift(!0);
				return a
			}
		},
		filters: {
			enabled: function (a) {
				return a.disabled === !1 && a.type !== "hidden"
			}, disabled: function (a) {
				return a.disabled === !0
			}, checked: function (a) {
				return a.checked === !0
			}, selected: function (a) {
				a.parentNode.selectedIndex;
				return a.selected === !0
			}, parent: function (a) {
				return !!a.firstChild
			}, empty: function (a) {
				return !a.firstChild
			}, has: function (a, b, c) {
				return !!i(c[3], a).length
			}, header: function (a) {
				return /h\d/i.test(a.nodeName)
			}, text: function (a) {
				return "text" === a.type
			}, radio: function (a) {
				return "radio" === a.type
			}, checkbox: function (a) {
				return "checkbox" === a.type
			}, file: function (a) {
				return "file" === a.type
			}, password: function (a) {
				return "password" === a.type
			}, submit: function (a) {
				return "submit" === a.type
			}, image: function (a) {
				return "image" === a.type
			}, reset: function (a) {
				return "reset" === a.type
			}, button: function (a) {
				return "button" === a.type || a.nodeName.toLowerCase() === "button"
			}, input: function (a) {
				return /input|select|textarea|button/i.test(a.nodeName)
			}
		},
		setFilters: {
			first: function (a, b) {
				return b === 0
			}, last: function (a, b, c, d) {
				return b === d.length - 1
			}, even: function (a, b) {
				return b % 2 === 0
			}, odd: function (a, b) {
				return b % 2 === 1
			}, lt: function (a, b, c) {
				return b < c[3] - 0
			}, gt: function (a, b, c) {
				return b > c[3] - 0
			}, nth: function (a, b, c) {
				return c[3] - 0 === b
			}, eq: function (a, b, c) {
				return c[3] - 0 === b
			}
		},
		filter: {
			PSEUDO: function (a, b, c, d) {
				var e = b[1], f = j.filters[e];
				if (f)return f(a, c, b, d);
				if (e === "contains")return (a.textContent || a.innerText || i.getText([a]) || "").indexOf(b[3]) >= 0;
				if (e === "not") {
					var g = b[3];
					for (var h = 0, k = g.length; h < k; h++)if (g[h] === a)return !1;
					return !0
				}
				i.error("Syntax error, unrecognized expression: " + e)
			}, CHILD: function (a, b) {
				var c = b[1], d = a;
				switch (c) {
					case"only":
					case"first":
						while (d = d.previousSibling)if (d.nodeType === 1)return !1;
						if (c === "first")return !0;
						d = a;
					case"last":
						while (d = d.nextSibling)if (d.nodeType === 1)return !1;
						return !0;
					case"nth":
						var e = b[2], f = b[3];
						if (e === 1 && f === 0)return !0;
						var g = b[0], h = a.parentNode;
						if (h && (h.sizcache !== g || !a.nodeIndex)) {
							var i = 0;
							for (d = h.firstChild; d; d = d.nextSibling)d.nodeType === 1 && (d.nodeIndex = ++i);
							h.sizcache = g
						}
						var j = a.nodeIndex - f;
						return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
				}
			}, ID: function (a, b) {
				return a.nodeType === 1 && a.getAttribute("id") === b
			}, TAG: function (a, b) {
				return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
			}, CLASS: function (a, b) {
				return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
			}, ATTR: function (a, b) {
				var c = b[1], d = j.attrHandle[c] ? j.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
				return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
			}, POS: function (a, b, c, d) {
				var e = b[2], f = j.setFilters[e];
				if (f)return f(a, c, b, d)
			}
		}
	};
	i.selectors = j;
	var k = j.match.POS, l = function (a, b) {
		return "\\" + (b - 0 + 1)
	};
	for (var m in j.match) {
		j.match[m] = new RegExp(j.match[m].source + /(?![^\[]*\])(?![^\(]*\))/.source);
		j.leftMatch[m] = new RegExp(/(^(?:.|\r|\n)*?)/.source + j.match[m].source.replace(/\\(\d+)/g, l))
	}
	var n = function (a, b) {
		a = Array.prototype.slice.call(a, 0);
		if (b) {
			b.push.apply(b, a);
			return b
		}
		return a
	};
	try {
		Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
	} catch (o) {
		n = function (a, b) {
			var c = b || [], d = 0;
			if (f.call(a) === "[object Array]")Array.prototype.push.apply(c, a); else if (typeof a.length == "number")for (var e = a.length; d < e; d++)c.push(a[d]); else for (; a[d]; d++)c.push(a[d]);
			return c
		}
	}
	var p;
	document.documentElement.compareDocumentPosition ? p = function (a, b) {
		if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
			a == b && (g = !0);
			return a.compareDocumentPosition ? -1 : 1
		}
		var c = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		c === 0 && (g = !0);
		return c
	} : "sourceIndex"in document.documentElement ? p = function (a, b) {
		if (!a.sourceIndex || !b.sourceIndex) {
			a == b && (g = !0);
			return a.sourceIndex ? -1 : 1
		}
		var c = a.sourceIndex - b.sourceIndex;
		c === 0 && (g = !0);
		return c
	} : document.createRange && (p = function (a, b) {
		if (!a.ownerDocument || !b.ownerDocument) {
			a == b && (g = !0);
			return a.ownerDocument ? -1 : 1
		}
		var c = a.ownerDocument.createRange(), d = b.ownerDocument.createRange();
		c.setStart(a, 0);
		c.setEnd(a, 0);
		d.setStart(b, 0);
		d.setEnd(b, 0);
		var e = c.compareBoundaryPoints(Range.START_TO_END, d);
		e === 0 && (g = !0);
		return e
	});
	i.getText = function (a) {
		var b = "", c;
		for (var d = 0; a[d]; d++) {
			c = a[d];
			c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += i.getText(c.childNodes))
		}
		return b
	};
	(function () {
		var a = document.createElement("div"), b = "script" + (new Date).getTime();
		a.innerHTML = "<a name='" + b + "'/>";
		var c = document.documentElement;
		c.insertBefore(a, c.firstChild);
		if (document.getElementById(b)) {
			j.find.ID = function (a, b, c) {
				if (typeof b.getElementById != "undefined" && !c) {
					var d = b.getElementById(a[1]);
					return d ? d.id === a[1] || typeof d.getAttributeNode != "undefined" && d.getAttributeNode("id").nodeValue === a[1] ? [d] : undefined : []
				}
			};
			j.filter.ID = function (a, b) {
				var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
				return a.nodeType === 1 && c && c.nodeValue === b
			}
		}
		c.removeChild(a);
		c = a = null
	})();
	(function () {
		var a = document.createElement("div");
		a.appendChild(document.createComment(""));
		a.getElementsByTagName("*").length > 0 && (j.find.TAG = function (a, b) {
			var c = b.getElementsByTagName(a[1]);
			if (a[1] === "*") {
				var d = [];
				for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]);
				c = d
			}
			return c
		});
		a.innerHTML = "<a href='#'></a>";
		a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (j.attrHandle.href = function (a) {
			return a.getAttribute("href", 2)
		});
		a = null
	})();
	document.querySelectorAll && function () {
		var a = i, b = document.createElement("div");
		b.innerHTML = "<p class='TEST'></p>";
		if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
			i = function (b, c, d, e) {
				c = c || document;
				if (!e && c.nodeType === 9 && !i.isXML(c))try {
					return n(c.querySelectorAll(b), d)
				} catch (f) {
				}
				return a(b, c, d, e)
			};
			for (var c in a)i[c] = a[c];
			b = null
		}
	}();
	(function () {
		var a = document.createElement("div");
		a.innerHTML = "<div class='test e'></div><div class='test'></div>";
		if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
			a.lastChild.className = "e";
			if (a.getElementsByClassName("e").length === 1)return;
			j.order.splice(1, 0, "CLASS");
			j.find.CLASS = function (a, b, c) {
				if (typeof b.getElementsByClassName != "undefined" && !c)return b.getElementsByClassName(a[1])
			};
			a = null
		}
	})();
	i.contains = document.compareDocumentPosition ? function (a, b) {
		return !!(a.compareDocumentPosition(b) & 16)
	} : function (a, b) {
		return a !== b && (a.contains ? a.contains(b) : !0)
	};
	i.isXML = function (a) {
		var b = (a ? a.ownerDocument || a : 0).documentElement;
		return b ? b.nodeName !== "HTML" : !1
	};
	var q = function (a, b) {
		var c = [], d = "", e, f = b.nodeType ? [b] : b;
		while (e = j.match.PSEUDO.exec(a)) {
			d += e[0];
			a = a.replace(j.match.PSEUDO, "")
		}
		a = j.relative[a] ? a + "*" : a;
		for (var g = 0, h = f.length; g < h; g++)i(a, f[g], c);
		return i.filter(d, c)
	};
	return i
});
STK.register("core.dom.builder", function (a) {
	return function (b, c) {
		var d = typeof b == "string", e = b;
		if (d) {
			e = a.C("div");
			e.innerHTML = b
		}
		var f, g;
		g = a.core.dom.sizzle("[node-type]", e);
		f = {};
		for (var h = 0, i = g.length; h < i; h += 1) {
			var j = g[h].getAttribute("node-type");
			f[j] || (f[j] = []);
			f[j].push(g[h])
		}
		var k = b;
		if (d) {
			k = a.C("buffer");
			while (e.childNodes[0])k.appendChild(e.childNodes[0])
		}
		return {box: k, list: f}
	}
});
STK.register("core.dom.setStyle", function (a) {
	function b() {
		return "y"in b ? b.y : b.y = "filters"in a.C("div")
	}

	return function (a, c, d) {
		if (b())switch (c) {
			case"opacity":
				a.style.filter = "alpha(opacity=" + d * 100 + ")";
				if (!a.currentStyle || !a.currentStyle.hasLayout)a.style.zoom = 1;
				break;
			case"float":
				c = "styleFloat";
			default:
				a.style[c] = d
		} else {
			c == "float" && (c = "cssFloat");
			a.style[c] = d
		}
	}
});
STK.register("core.dom.insertAfter", function (a) {
	return function (a, b) {
		var c = b.parentNode;
		c.lastChild == b ? c.appendChild(a) : c.insertBefore(a, b.nextSibling)
	}
});
STK.register("core.dom.insertBefore", function (a) {
	return function (a, b) {
		var c = b.parentNode;
		c.insertBefore(a, b)
	}
});
STK.register("core.dom.trimNode", function (a) {
	return function (a) {
		var b = a.childNodes;
		for (var c = b.length - 1; c >= 0; c -= 1)b[c] && (b[c].nodeType == 3 || b[c].nodeType == 8) && a.removeChild(b[c])
	}
});
STK.register("core.dom.removeNode", function (a) {
	return function (b) {
		b = a.E(b) || b;
		try {
			b.parentNode.removeChild(b)
		} catch (c) {
		}
	}
});
STK.register("core.evt.fireEvent", function (a) {
	return function (b, c) {
		var d = a.E(b);
		if (d.addEventListener) {
			var e = document.createEvent("HTMLEvents");
			e.initEvent(c, !0, !0);
			d.dispatchEvent(e)
		} else d.fireEvent("on" + c)
	}
});
STK.register("core.util.scrollPos", function (a) {
	return function (a) {
		a = a || document;
		var b = a.documentElement, c = a.body;
		return {
			top: Math.max(window.pageYOffset || 0, b.scrollTop, c.scrollTop),
			left: Math.max(window.pageXOffset || 0, b.scrollLeft, c.scrollLeft)
		}
	}
});
STK.register("core.dom.position", function (a) {
	var b = function (b) {
		var c, d, e, f, g, h;
		c = b.getBoundingClientRect();
		d = a.core.util.scrollPos();
		e = b.ownerDocument.body;
		f = b.ownerDocument.documentElement;
		g = f.clientTop || e.clientTop || 0;
		h = f.clientLeft || e.clientLeft || 0;
		return {l: parseInt(c.left + d.left - h, 10) || 0, t: parseInt(c.top + d.top - g, 10) || 0}
	}, c = function (b, c) {
		var d, e;
		d = [b.offsetLeft, b.offsetTop];
		e = b.offsetParent;
		if (e !== b && e !== c)while (e) {
			d[0] += e.offsetLeft;
			d[1] += e.offsetTop;
			e = e.offsetParent
		}
		if (a.core.util.browser.OPERA != -1 || a.core.util.browser.SAFARI != -1 && b.style.position == "absolute") {
			d[0] -= document.body.offsetLeft;
			d[1] -= document.body.offsetTop
		}
		b.parentNode ? e = b.parentNode : e = null;
		while (e && !/^body|html$/i.test(e.tagName) && e !== c) {
			if (e.style.display.search(/^inline|table-row.*$/i)) {
				d[0] -= e.scrollLeft;
				d[1] -= e.scrollTop
			}
			e = e.parentNode
		}
		return {l: parseInt(d[0], 10), t: parseInt(d[1], 10)}
	};
	return function (d, e) {
		if (d == document.body)return !1;
		if (d.parentNode == null)return !1;
		if (d.style.display == "none")return !1;
		var f = a.core.obj.parseParam({parent: null}, e);
		if (d.getBoundingClientRect) {
			if (f.parent) {
				var g = b(d), h = b(f.parent);
				return {l: g.l - h.l, t: g.t - h.t}
			}
			return b(d)
		}
		return c(d, f.parent || document.body)
	}
});
STK.register("core.dom.setXY", function (a) {
	return function (b, c) {
		var d = a.core.dom.getStyle(b, "position");
		if (d == "static") {
			a.core.dom.setStyle(b, "position", "relative");
			d = "relative"
		}
		var e = a.core.dom.position(b);
		if (e != !1) {
			var f = {l: parseInt(a.core.dom.getStyle(b, "left"), 10), t: parseInt(a.core.dom.getStyle(b, "top"), 10)};
			isNaN(f.l) && (f.l = d == "relative" ? 0 : b.offsetLeft);
			isNaN(f.t) && (f.t = d == "relative" ? 0 : b.offsetTop);
			c.l != null && (b.style.left = c.l - e.l + f.l + "px");
			c.t != null && (b.style.top = c.t - e.t + f.t + "px")
		}
	}
});
STK.register("core.str.encodeHTML", function (a) {
	return function (a) {
		if (typeof a != "string")throw"encodeHTML need a string as parameter";
		return a.replace(/\&/g, "&amp;").replace(/"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\u00A0/g, "&nbsp;").replace(/(\u0020|\u000B|\u2028|\u2029|\f)/g, "&#32;")
	}
});
STK.register("core.str.decodeHTML", function (a) {
	return function (a) {
		if (typeof a != "string")throw"decodeHTML need a string as parameter";
		return a.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&nbsp;/g, "聽").replace(/&#32;/g, " ").replace(/&amp;/g, "&")
	}
});
STK.register("core.dom.cascadeNode", function (a) {
	return function (b) {
		var c = {}, d = b.style.display || "";
		d = d === "none" ? "" : d;
		var e = [];
		c.setStyle = function (e, f) {
			a.core.dom.setStyle(b, e, f);
			e === "display" && (d = f === "none" ? "" : f);
			return c
		};
		c.insertAfter = function (d) {
			a.core.dom.insertAfter(d, b);
			return c
		};
		c.insertBefore = function (d) {
			a.core.dom.insertBefore(d, b);
			return c
		};
		c.addClassName = function (d) {
			a.core.dom.addClassName(b, d);
			return c
		};
		c.removeClassName = function (d) {
			a.core.dom.removeClassName(b, d);
			return c
		};
		c.trimNode = function () {
			a.core.dom.trimNode(b);
			return c
		};
		c.removeNode = function () {
			a.core.dom.removeNode(b);
			return c
		};
		c.on = function (d, f) {
			for (var g = 0, h = e.length; g < h; g += 1)if (e[g].fn === f && e[g].type === d)return c;
			e.push({fn: f, type: d});
			a.core.evt.addEvent(b, d, f);
			return c
		};
		c.unon = function (d, f) {
			for (var g = 0, h = e.length; g < h; g += 1)if (e[g].fn === f && e[g].type === d) {
				a.core.evt.removeEvent(b, f, d);
				e.splice(g, 1);
				break
			}
			return c
		};
		c.fire = function (d) {
			a.core.evt.fireEvent(d, b);
			return c
		};
		c.appendChild = function (a) {
			b.appendChild(a);
			return c
		};
		c.removeChild = function (a) {
			b.removeChild(a);
			return c
		};
		c.toggle = function () {
			b.style.display === "none" ? b.style.display = d : b.style.display = "none";
			return c
		};
		c.show = function () {
			b.style.display === "none" && (d === "none" ? b.style.display = "" : b.style.display = d);
			return c
		};
		c.hidd = function () {
			b.style.display !== "none" && (b.style.display = "none");
			return c
		};
		c.hide = c.hidd;
		c.scrollTo = function (a, d) {
			a === "left" && (b.scrollLeft = d);
			a === "top" && (b.scrollTop = d);
			return c
		};
		c.replaceChild = function (a, d) {
			b.replaceChild(a, d);
			return c
		};
		c.position = function (c) {
			c !== undefined && a.core.dom.setXY(b, c);
			return a.core.dom.position(b)
		};
		c.setPosition = function (d) {
			d !== undefined && a.core.dom.setXY(b, d);
			return c
		};
		c.getPosition = function (c) {
			return a.core.dom.position(b)
		};
		c.html = function (a) {
			a !== undefined && (b.innerHTML = a);
			return b.innerHTML
		};
		c.setHTML = function (a) {
			a !== undefined && (b.innerHTML = a);
			return c
		};
		c.getHTML = function () {
			return b.innerHTML
		};
		c.text = function (c) {
			c !== undefined && (b.innerHTML = a.core.str.encodeHTML(c));
			return a.core.str.decodeHTML(b.innerHTML)
		};
		c.ttext = c.text;
		c.setText = function (d) {
			d !== undefined && (b.innerHTML = a.core.str.encodeHTML(d));
			return c
		};
		c.getText = function () {
			return a.core.str.decodeHTML(b.innerHTML)
		};
		c.get = function (c) {
			return c === "node" ? b : a.core.dom.getStyle(b, c)
		};
		c.getStyle = function (c) {
			return a.core.dom.getStyle(b, c)
		};
		c.getOriginNode = function () {
			return b
		};
		c.destroy = function () {
			for (var c = 0, f = e; c < f; c += 1)a.core.evt.removeEvent(b, e[c].fn, e[c].type);
			d = null;
			e = null;
			b = null
		};
		return c
	}
});
STK.register("core.dom.contains", function (a) {
	return function (a, b) {
		if (a === b)return !1;
		if (a.compareDocumentPosition)return (a.compareDocumentPosition(b) & 16) === 16;
		if (a.contains && b.nodeType === 1)return a.contains(b);
		while (b = b.parentNode)if (a === b)return !0;
		return !1
	}
});
STK.register("core.dom.dir", function (a) {
	var b = {parent: "parentNode", next: "nextSibling", prev: "previousSibling"}, c = function (c, d) {
		d = a.core.obj.parseParam({dir: "parent", expr: undefined, endpoint: document, matchAll: !1}, d);
		var e = b[d.dir], f = d.expr, g = d.endpoint, h = !!d.matchAll;
		if (!c)throw"core.dom.dir: el is undefined.";
		if (!e)throw"core.dom.dir: spec.dir is undefined.";
		var i = [], j = c[e];
		while (j) {
			if (j.nodeType == 1)if (!f || a.core.dom.sizzle.matches(f, [j]).length > 0) {
				i.push(j);
				if (!h)break
			}
			if (j == g)break;
			j = j[e]
		}
		return i
	};
	c.parent = function (a, b) {
		b = b || {};
		b.dir = "parent";
		return c(a, b)
	};
	c.prev = function (a, b) {
		b = b || {};
		b.dir = "prev";
		return c(a, b)
	};
	c.next = function (a, b) {
		b = b || {};
		b.dir = "next";
		return c(a, b)
	};
	return c
});
STK.register("core.dom.firstChild", function (a) {
	var b = a.core.dom.dir;
	return function (a) {
		if (a.firstElementChild)return a.firstElementChild;
		var c = a.firstChild;
		c && c.nodeType != 1 && (c = b.next(c)[0]);
		return c
	}
});
STK.register("core.util.hideContainer", function (a) {
	var b, c = function () {
		if (!b) {
			b = a.C("div");
			b.style.cssText = "position:absolute;top:-9999px;left:-9999px;";
			document.getElementsByTagName("head")[0].appendChild(b)
		}
	}, d = {
		appendChild: function (d) {
			if (a.core.dom.isNode(d)) {
				c();
				b.appendChild(d)
			}
		}, removeChild: function (c) {
			a.core.dom.isNode(c) && b && b.removeChild(c)
		}
	};
	return d
});
STK.register("core.dom.getSize", function (a) {
	var b = function (b) {
		if (!a.core.dom.isNode(b))throw"core.dom.getSize need Element as first parameter";
		return {width: b.offsetWidth, height: b.offsetHeight}
	}, c = function (a) {
		var c = null;
		if (a.style.display === "none") {
			a.style.visibility = "hidden";
			a.style.display = "";
			c = b(a);
			a.style.display = "none";
			a.style.visibility = "visible"
		} else c = b(a);
		return c
	};
	return function (b) {
		var d = {};
		if (!b.parentNode) {
			a.core.util.hideContainer.appendChild(b);
			d = c(b);
			a.core.util.hideContainer.removeChild(b)
		} else d = c(b);
		return d
	}
});
STK.register("core.dom.insertHTML", function (a) {
	return function (b, c, d) {
		b = a.E(b) || document.body;
		d = d ? d.toLowerCase() : "beforeend";
		if (b.insertAdjacentHTML) {
			switch (d) {
				case"beforebegin":
					b.insertAdjacentHTML("BeforeBegin", c);
					return b.previousSibling;
				case"afterbegin":
					b.insertAdjacentHTML("AfterBegin", c);
					return b.firstChild;
				case"beforeend":
					b.insertAdjacentHTML("BeforeEnd", c);
					return b.lastChild;
				case"afterend":
					b.insertAdjacentHTML("AfterEnd", c);
					return b.nextSibling
			}
			throw'Illegal insertion point -> "' + d + '"'
		}
		var e = b.ownerDocument.createRange(), f;
		switch (d) {
			case"beforebegin":
				e.setStartBefore(b);
				f = e.createContextualFragment(c);
				b.parentNode.insertBefore(f, b);
				return b.previousSibling;
			case"afterbegin":
				if (b.firstChild) {
					e.setStartBefore(b.firstChild);
					f = e.createContextualFragment(c);
					b.insertBefore(f, b.firstChild);
					return b.firstChild
				}
				b.innerHTML = c;
				return b.firstChild;
			case"beforeend":
				if (b.lastChild) {
					e.setStartAfter(b.lastChild);
					f = e.createContextualFragment(c);
					b.appendChild(f);
					return b.lastChild
				}
				b.innerHTML = c;
				return b.lastChild;
			case"afterend":
				e.setStartAfter(b);
				f = e.createContextualFragment(c);
				b.parentNode.insertBefore(f, b.nextSibling);
				return b.nextSibling
		}
		throw'Illegal insertion point -> "' + d + '"'
	}
});
STK.register("core.dom.insertElement", function (a) {
	return function (b, c, d) {
		b = a.E(b) || document.body;
		d = d ? d.toLowerCase() : "beforeend";
		switch (d) {
			case"beforebegin":
				b.parentNode.insertBefore(c, b);
				break;
			case"afterbegin":
				b.insertBefore(c, b.firstChild);
				break;
			case"beforeend":
				b.appendChild(c);
				break;
			case"afterend":
				b.nextSibling ? b.parentNode.insertBefore(c, b.nextSibling) : b.parentNode.appendChild(c)
		}
	}
});
STK.register("core.dom.ready", function (a) {
	var b = [], c = !1, d = a.core.func.getType, e = a.core.util.browser, f = a.core.evt.addEvent, g = function () {
		return !c && document.readyState === "complete" ? !0 : c
	}, h = function () {
		if (c != !0) {
			c = !0;
			for (var a = 0, e = b.length; a < e; a++)if (d(b[a]) === "function")try {
				b[a].call()
			} catch (f) {
			}
			b = []
		}
	}, i = function () {
		if (g())h(); else {
			try {
				document.documentElement.doScroll("left")
			} catch (a) {
				setTimeout(arguments.callee, 25);
				return
			}
			h()
		}
	}, j = function () {
		g() ? h() : setTimeout(arguments.callee, 25)
	}, k = function () {
		f(document, "DOMContentLoaded", h)
	}, l = function () {
		f(window, "load", h)
	};
	if (!g()) {
		a.IE && window === window.top && i();
		k();
		j();
		l()
	}
	return function (a) {
		g() ? d(a) === "function" && a.call() : b.push(a)
	}
});
STK.register("core.dom.isDomReady", function (a) {
	var b = !1;
	a.core.dom.ready(function () {
		b = !0
	});
	return function () {
		return b
	}
});
STK.register("core.dom.lastChild", function (a) {
	var b = a.core.dom.dir;
	return function (a) {
		if (a.lastElementChild)return a.lastElementChild;
		var c = a.lastChild;
		c && c.nodeType != 1 && (c = b.prev(c)[0]);
		return c
	}
});
STK.register("core.dom.neighbor", function (a) {
	var b = function (b, c, d) {
		return a.core.dom.dir(b, {dir: c, expr: d})[0]
	}, c = function (c) {
		var d = c, e = {
			getCurrent: function () {
				return d
			}, setCurrent: function (a) {
				a && (d = a);
				return e
			}, finish: function () {
				var a = d;
				d = null;
				return a
			}, parent: function (a) {
				d = b(d, "parent", a) || d;
				return e
			}, child: function (b) {
				d = (b ? a.core.dom.sizzle(b, d)[0] : a.core.dom.firstChild(d)) || d;
				return e
			}, firstChild: function (b) {
				d = a.core.dom.firstChild(d) || d;
				return e
			}, lastChild: function (b) {
				d = a.core.dom.lastChild(d) || d;
				return e
			}, prev: function (a) {
				d = b(d, "prev", a) || d;
				return e
			}, next: function (a) {
				d = b(d, "next", a) || d;
				return e
			}, destroy: function () {
				d = null
			}
		};
		return e
	};
	return c
});
STK.register("core.dom.next", function (a) {
	return function (a) {
		var b = a.nextSibling;
		while (b && b.nodeType !== 1)b = b.nextSibling;
		return b
	}
});
STK.register("core.dom.prev", function (a) {
	return function (a) {
		var b = a.previousSibling;
		while (b && b.nodeType !== 1)b = b.previousSibling;
		return b
	}
});
STK.register("core.dom.replaceNode", function (a) {
	return function (a, b) {
		if (a == null || b == null)throw"replaceNode need node as paramster";
		b.parentNode.replaceChild(a, b)
	}
});
STK.register("core.dom.selector", function (a) {
	var b = function (b, c, d, e) {
		var f = [];
		if (typeof b == "string") {
			var g = a.core.dom.sizzle(b, c, d, e);
			for (var h = 0, i = g.length; h < i; h += 1)f[h] = g[h]
		} else if (a.core.dom.isNode(b))c ? a.core.dom.contains(c, b) && (f = [b]) : f = [b]; else if (a.core.arr.isArray(b))if (c)for (var h = 0, i = b.length; h < i; h += 1)a.core.dom.contains(c, b[h]) && f.push(b[h]); else f = b;
		return f
	};
	return function (c, d, e, f) {
		var g = b.apply(window, arguments);
		g.on = function (b, c) {
			for (var d = 0, e = g.length; d < e; d += 1)a.core.evt.addEvent(g[d], b, c);
			return g
		};
		g.css = function (b, c) {
			for (var d = 0, e = g.length; d < e; d += 1)a.core.dom.setStyle(g[d], b, c);
			return g
		};
		g.show = function () {
			for (var a = 0, b = g.length; a < b; a += 1)g[a].style.display = "";
			return g
		};
		g.hidd = function () {
			for (var a = 0, b = g.length; a < b; a += 1)g[a].style.display = "none";
			return g
		};
		g.hide = g.hidd;
		return g
	}
});
STK.register("core.dom.selectText", function (a) {
	return function (a, b) {
		var c = b.start, d = b.len || 0;
		a.focus();
		if (a.setSelectionRange)a.setSelectionRange(c, c + d); else if (a.createTextRange) {
			var e = a.createTextRange();
			e.collapse(1);
			e.moveStart("character", c);
			e.moveEnd("character", d);
			e.select()
		}
	}
});
STK.register("core.dom.setStyles", function (a) {
	return function (b, c, d) {
		if (!a.core.arr.isArray(b))var b = [b];
		for (var e = 0, f = b.length; e < f; e++)a.core.dom.setStyle(b[e], c, d);
		return b
	}
});
STK.register("core.dom.textSelectArea", function (a) {
	return function (a) {
		var b = {start: 0, len: 0};
		if (typeof a.selectionStart == "number") {
			b.start = a.selectionStart;
			b.len = a.selectionEnd - a.selectionStart
		} else if (typeof document.selection != "undefined") {
			var c = document.selection.createRange();
			if (a.tagName === "INPUT")var d = a.createTextRange(); else if (a.tagName === "TEXTAREA") {
				var d = c.duplicate();
				d.moveToElementText(a)
			}
			d.setEndPoint("EndToStart", c);
			b.start = d.text.length;
			b.len = c.text.length;
			var e = 0;
			d.moveEnd("character", a.value.length - b.start);
			d.moveStart("character", b.start);
			for (var f = b.start; f < a.value.length; f += 1) {
				if (!(d.compareEndPoints("StartToStart", c) < 0))break;
				d.moveStart("character", 1);
				e += 2
			}
			b.start += e;
			c = null;
			d = null
		}
		return b
	}
});
STK.register("core.dom.toggleClassName", function (a) {
	return function (b, c) {
		a.core.dom.hasClassName(b, c) ? a.core.dom.removeClassName(b, c) : a.core.dom.addClassName(b, c)
	}
});
STK.register("core.util.getUniqueKey", function (a) {
	var b = (new Date).getTime().toString(), c = 1;
	return function () {
		return b + c++
	}
});
STK.register("core.dom.uniqueID", function (a) {
	return function (b) {
		return b && (b.uniqueID || (b.uniqueID = a.core.util.getUniqueKey()))
	}
});
STK.register("core.evt.custEvent", function (a) {
	var b = "__custEventKey__", c = 1, d = {}, e = function (a, c) {
		var e = typeof a == "number" ? a : a[b];
		return e && d[e] && {obj: typeof c == "string" ? d[e][c] : d[e], key: e}
	}, f = {}, g = function (a, b, c, d, f) {
		if (a && typeof b == "string" && c) {
			var g = e(a, b);
			if (!g || !g.obj)throw"custEvent (" + b + ") is undefined !";
			g.obj.push({fn: c, data: d, once: f});
			return g.key
		}
	}, h = function (b, c, d, f) {
		var g = !0, h = function () {
			g = !1
		};
		if (b && typeof c == "string") {
			var i = e(b, c), j;
			if (i && (j = i.obj)) {
				d = typeof d != "undefined" && [].concat(d) || [];
				for (var k = j.length - 1; k > -1 && j[k]; k--) {
					var l = j[k].fn, m = j[k].once;
					if (l && l.apply)try {
						l.apply(b, [{obj: b, type: c, data: j[k].data, preventDefault: h}].concat(d));
						m && j.splice(k, 1)
					} catch (n) {
						a.log("[error][custEvent]" + n.message, n, n.stack)
					}
				}
				g && a.core.func.getType(f) === "function" && f();
				return i.key
			}
		}
	}, i = {
		define: function (a, e) {
			if (a && e) {
				var f = typeof a == "number" ? a : a[b] || (a[b] = c++), g = d[f] || (d[f] = {});
				e = [].concat(e);
				for (var h = 0; h < e.length; h++)g[e[h]] || (g[e[h]] = []);
				return f
			}
		}, undefine: function (a, c) {
			if (a) {
				var e = typeof a == "number" ? a : a[b];
				if (e && d[e])if (c) {
					c = [].concat(c);
					for (var f = 0; f < c.length; f++)c[f]in d[e] && delete d[e][c[f]]
				} else delete d[e]
			}
		}, add: function (a, b, c, d) {
			return g(a, b, c, d, !1)
		}, once: function (a, b, c, d) {
			return g(a, b, c, d, !0)
		}, remove: function (b, c, d) {
			if (b) {
				var f = e(b, c), g, h;
				if (f && (g = f.obj)) {
					if (a.core.arr.isArray(g))if (d) {
						var i = 0;
						while (g[i]) {
							if (g[i].fn === d)break;
							i++
						}
						g.splice(i, 1)
					} else g.splice(0, g.length); else for (var i in g)g[i] = [];
					return f.key
				}
			}
		}, fire: function (a, b, c, d) {
			return h(a, b, c, d)
		}, hook: function (a, e, g) {
			if (!(!a || !e || !g)) {
				var j = [], k = a[b], l = k && d[k], m, n = e[b] || (e[b] = c++), o;
				if (l) {
					o = f[k + "_" + n] || (f[k + "_" + n] = {});
					var p = function (a) {
						var b = !0;
						h(e, o[a.type].type, Array.prototype.slice.apply(arguments, [1, arguments.length]), function () {
							b = !1
						});
						b && a.preventDefault()
					};
					for (var q in g) {
						var r = g[q];
						if (!o[q])if (m = l[q]) {
							m.push({fn: p, data: undefined});
							o[q] = {fn: p, type: r};
							j.push(r)
						}
					}
					i.define(e, j)
				}
			}
		}, unhook: function (a, c, d) {
			if (!(!a || !c || !d)) {
				var e = a[b], g = c[b], h = f[e + "_" + g];
				if (h)for (var j in d) {
					var k = d[j];
					h[j] && i.remove(a, j, h[j].fn)
				}
			}
		}, destroy: function () {
			d = {};
			c = 1;
			f = {}
		}
	};
	return i
});
STK.register("core.json.queryToJson", function (a) {
	return function (b, c) {
		var d = a.core.str.trim(b).split("&"), e = {}, f = function (a) {
			return c ? decodeURIComponent(a) : a
		};
		for (var g = 0, h = d.length; g < h; g++)if (d[g]) {
			var i = d[g].split("="), j = i[0], k = i[1];
			if (i.length < 2) {
				k = j;
				j = "$nullName"
			}
			if (!e[j])e[j] = f(k); else {
				a.core.arr.isArray(e[j]) != !0 && (e[j] = [e[j]]);
				e[j].push(f(k))
			}
		}
		return e
	}
});
STK.register("core.evt.getEvent", function (a) {
	return function () {
		return document.addEventListener ? function () {
			var a = arguments.callee, b;
			do {
				b = a.arguments[0];
				if (b && (b.constructor == Event || b.constructor == MouseEvent || b.constructor == KeyboardEvent))return b
			} while (a = a.caller);
			return b
		} : function (a, b, c) {
			return window.event
		}
	}()
});
STK.register("core.evt.fixEvent", function (a) {
	var b = "clientX clientY pageX pageY screenX screenY".split(" ");
	return function (b) {
		b = b || a.core.evt.getEvent();
		b.target || (b.target = b.srcElement || document);
		if (b.pageX == null && b.clientX != null) {
			var c = document.documentElement, d = document.body;
			b.pageX = b.clientX + (c.scrollLeft || d && d.scrollLeft || 0) - (c.clientLeft || d && d.clientLeft || 0);
			b.pageY = b.clientY + (c.scrollTop || d && d.scrollTop || 0) - (c.clientTop || d && d.clientTop || 0)
		}
		!b.which && b.button && (b.button & 1 ? b.which = 1 : b.button & 4 ? b.which = 2 : b.button & 2 && (b.which = 3));
		b.relatedTarget === undefined && (b.relatedTarget = b.fromElement || b.toElement);
		if (b.layerX == null && b.offsetX != null) {
			b.layerX = b.offsetX;
			b.layerY = b.offsetY
		}
		return b
	}
});
STK.register("core.obj.isEmpty", function (a) {
	return function (a, b) {
		for (var c in a)if (b || a.hasOwnProperty(c))return !1;
		return !0
	}
});
STK.register("core.evt.delegatedEvent", function (a) {
	var b = function (b, c) {
		for (var d = 0, e = b.length; d < e; d += 1)if (a.core.dom.contains(b[d], c))return !0;
		return !1
	};
	return function (c, d) {
		if (!a.core.dom.isNode(c))throw"core.evt.delegatedEvent need an Element as first Parameter";
		d || (d = []);
		a.core.arr.isArray(d) && (d = [d]);
		var e = {}, f = function (b) {
			var c = a.core.evt.fixEvent(b), d = c.target, e = b.type;
			g(d, e, c)
		}, g = function (f, g, h) {
			var i = null, j = function () {
				var b, d, e;
				b = f.getAttribute("action-target");
				if (b) {
					d = a.core.dom.sizzle(b, c);
					d.length && (e = h.target = d[0])
				}
				j = a.core.func.empty;
				return e
			}, k = function () {
				var b = j() || f;
				return e[g] && e[g][i] ? e[g][i]({
					evt: h,
					el: b,
					box: c,
					data: a.core.json.queryToJson(b.getAttribute("action-data") || "")
				}) : !0
			};
			if (b(d, f))return !1;
			if (!a.core.dom.contains(c, f))return !1;
			while (f && f !== c) {
				if (f.nodeType === 1) {
					i = f.getAttribute("action-type");
					if (i && k() === !1)break
				}
				f = f.parentNode
			}
		}, h = {};
		h.add = function (b, d, g) {
			if (!e[d]) {
				e[d] = {};
				a.core.evt.addEvent(c, d, f)
			}
			var h = e[d];
			h[b] = g
		};
		h.remove = function (b, d) {
			if (e[d]) {
				delete e[d][b];
				if (a.core.obj.isEmpty(e[d])) {
					delete e[d];
					a.core.evt.removeEvent(c, d, f)
				}
			}
		};
		h.pushExcept = function (a) {
			d.push(a)
		};
		h.removeExcept = function (a) {
			if (!a)d = []; else for (var b = 0, c = d.length; b < c; b += 1)d[b] === a && d.splice(b, 1)
		};
		h.clearExcept = function (a) {
			d = []
		};
		h.fireAction = function (b, d, f, g) {
			var h = "";
			g && g.actionData && (h = g.actionData);
			e[d] && e[d][b] && e[d][b]({
				evt: f,
				el: null,
				box: c,
				data: a.core.json.queryToJson(h),
				fireFrom: "fireAction"
			})
		};
		h.fireInject = function (b, d, f) {
			var g = b.getAttribute("action-type"), h = b.getAttribute("action-data");
			g && e[d] && e[d][g] && e[d][g]({
				evt: f,
				el: b,
				box: c,
				data: a.core.json.queryToJson(h || ""),
				fireFrom: "fireInject"
			})
		};
		h.fireDom = function (a, b, c) {
			g(a, b, c || {})
		};
		h.destroy = function () {
			for (var b in e) {
				for (var d in e[b])delete e[b][d];
				delete e[b];
				a.core.evt.removeEvent(c, b, f)
			}
		};
		return h
	}
});
STK.register("core.evt.getActiveElement", function (a) {
	return function () {
		try {
			var b = a.core.evt.getEvent();
			return document.activeElement ? document.activeElement : b.explicitOriginalTarget
		} catch (c) {
			return document.body
		}
	}
});
STK.register("core.evt.hasEvent", function (a) {
	var b = {};
	return function (c, d) {
		if (typeof d != "string")throw new Error("[STK.core.evt.hasEvent] tagName is not a String!");
		d = d.toLowerCase();
		c = "on" + c;
		if (b[d] && b[d][c] !== undefined)return b[d][c];
		var e = a.C(d), f = c in e;
		if (!f) {
			e.setAttribute(c, "return;");
			f = typeof e[c] == "function"
		}
		b[d] || (b[d] = {});
		b[d][c] = f;
		e = null;
		return f
	}
});
STK.register("core.evt.hitTest", function (a) {
	function b(b) {
		var c = STK.E(b), d = a.core.dom.position(c), e = {
			left: d.l,
			top: d.t,
			right: d.l + c.offsetWidth,
			bottom: d.t + c.offsetHeight
		};
		return e
	}

	return function (c, d) {
		var e = b(c);
		if (d == null)d = a.core.evt.getEvent(); else {
			if (d.nodeType == 1) {
				var f = b(d);
				return e.right > f.left && e.left < f.right && e.bottom > f.top && e.top < f.bottom ? !0 : !1
			}
			if (d.clientX == null)throw"core.evt.hitTest: [" + d + ":oEvent] is not a valid value"
		}
		var g = a.core.util.scrollPos(), h = d.clientX + g.left, i = d.clientY + g.top;
		return h >= e.left && h <= e.right && i >= e.top && i <= e.bottom
	}
});
STK.register("core.evt.stopEvent", function (a) {
	return function (b) {
		b = b || a.core.evt.getEvent();
		if (b.preventDefault) {
			b.preventDefault();
			b.stopPropagation()
		} else {
			b.cancelBubble = !0;
			b.returnValue = !1
		}
		return !1
	}
});
STK.register("core.evt.preventDefault", function (a) {
	return function (b) {
		b = b || a.core.evt.getEvent();
		b.preventDefault ? b.preventDefault() : b.returnValue = !1
	}
});
STK.register("core.evt.hotKey", function (a) {
	var b = a.core.dom.uniqueID, c = {
		reg1: /^keypress|keydown|keyup$/,
		keyMap: {
			27: "esc",
			9: "tab",
			32: "space",
			10: "enter",
			13: "enter",
			8: "backspace",
			145: "scrollclock",
			20: "capslock",
			144: "numlock",
			19: "pause",
			45: "insert",
			36: "home",
			46: "delete",
			35: "end",
			33: "pageup",
			34: "pagedown",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
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
			191: "/",
			17: "ctrl",
			16: "shift",
			109: "-",
			107: "=",
			219: "[",
			221: "]",
			220: "\\",
			222: "'",
			187: "=",
			188: ",",
			189: "-",
			190: ".",
			191: "/",
			96: "0",
			97: "1",
			98: "2",
			99: "3",
			100: "4",
			101: "5",
			102: "6",
			103: "7",
			104: "8",
			105: "9",
			106: "*",
			110: ".",
			111: "/"
		},
		keyEvents: {}
	};
	c.preventDefault = function () {
		this.returnValue = !1
	};
	c.handler = function (a) {
		a = a || window.event;
		a.target || (a.target = a.srcElement || document);
		!a.which && (a.charCode || a.charCode === 0 ? a.charCode : a.keyCode) && (a.which = a.charCode || a.keyCode);
		a.preventDefault || (a.preventDefault = c.preventDefault);
		var d = b(this), e, f;
		if (d && (e = c.keyEvents[d]) && (f = e[a.type])) {
			var g;
			switch (a.type) {
				case"keypress":
					if (a.ctrlKey || a.altKey)return;
					a.which == 13 && (g = c.keyMap[13]);
					a.which == 32 && (g = c.keyMap[32]);
					a.which >= 33 && a.which <= 126 && (g = String.fromCharCode(a.which));
					break;
				case"keyup":
				case"keydown":
					c.keyMap[a.which] && (g = c.keyMap[a.which]);
					g || (a.which >= 48 && a.which <= 57 ? g = String.fromCharCode(a.which) : a.which >= 65 && a.which <= 90 && (g = String.fromCharCode(a.which + 32)));
					if (g && a.type == "keydown") {
						e.linkedKey += e.linkedKey ? ">" + g : g;
						a.altKey && (g = "alt+" + g);
						a.shiftKey && (g = "shift+" + g);
						a.ctrlKey && (g = "ctrl+" + g)
					}
			}
			var h = /^select|textarea|input$/.test(a.target.nodeName.toLowerCase());
			if (g) {
				var i = [], j = !1;
				if (e.linkedKey && e.linkKeyStr)if (e.linkKeyStr.indexOf(" " + e.linkedKey) != -1) {
					if (e.linkKeyStr.indexOf(" " + e.linkedKey + " ") != -1) {
						i = i.concat(f[e.linkedKey]);
						e.linkedKey = ""
					}
					j = !0
				} else e.linkedKey = "";
				j || (i = i.concat(f[g]));
				for (var k = 0; k < i.length; k++)i[k] && (!i[k].disableInInput || !h) && i[k].fn.apply(this, [a, i[k].key])
			}
		}
	};
	var d = function (b, d, e, f) {
		var g = {};
		if (!a.core.dom.isNode(b) || a.core.func.getType(e) !== "function")return g;
		if (typeof d != "string" || !(d = d.replace(/\s*/g, "")))return g;
		f || (f = {});
		f.disableInInput || (f.disableInInput = !1);
		f.type || (f.type = "keypress");
		f.type = f.type.replace(/\s*/g, "");
		if (!c.reg1.test(f.type) || f.disableInInput && /^select|textarea|input$/.test(b.nodeName.toLowerCase()))return g;
		if (d.length > 1 || f.type != "keypress")d = d.toLowerCase();
		if (!/(^(\+|>)$)|(^([^\+>]+)$)/.test(d)) {
			var h = "";
			if (/((ctrl)|(shift)|(alt))\+(\+|([^\+]+))$/.test(d)) {
				d.indexOf("ctrl+") != -1 && (h += "ctr+");
				d.indexOf("shift+") != -1 && (h += "shift+");
				d.indexOf("alt+") != -1 && (h += "alt+");
				h += d.match(/\+(([^\+]+)|(\+))$/)[1]
			} else if (!/(^>)|(>$)|>>/.test(d) && d.length > 2)g.linkFlag = !0; else return g;
			f.type = "keydown"
		}
		g.keys = d;
		g.fn = e;
		g.opt = f;
		return g
	}, e = {
		add: function (f, g, h, i) {
			if (a.core.arr.isArray(g))for (var j = 0; j < g.length; j++)e.add(f, g[j], h, i); else {
				var k = d(f, g, h, i);
				if (!k.keys)return;
				g = k.keys;
				h = k.fn;
				i = k.opt;
				var l = k.linkFlag, m = b(f);
				c.keyEvents[m] || (c.keyEvents[m] = {linkKeyStr: "", linkedKey: ""});
				c.keyEvents[m].handler || (c.keyEvents[m].handler = function () {
					c.handler.apply(f, arguments)
				});
				l && c.keyEvents[m].linkKeyStr.indexOf(" " + g + " ") == -1 && (c.keyEvents[m].linkKeyStr += " " + g + " ");
				var n = i.type;
				if (!c.keyEvents[m][n]) {
					c.keyEvents[m][n] = {};
					a.core.evt.addEvent(f, n, c.keyEvents[m].handler)
				}
				c.keyEvents[m][n][g] || (c.keyEvents[m][n][g] = []);
				c.keyEvents[m][n][g].push({fn: h, disableInInput: i.disableInInput, key: g})
			}
		}, remove: function (f, g, h, i) {
			if (a.core.arr.isArray(g))for (var j = 0; j < g.length; j++)e.remove(f, g[j], h, i); else {
				var k = d(f, g, h, i);
				if (!k.keys)return;
				g = k.keys;
				h = k.fn;
				i = k.opt;
				var l = k.linkFlag, m = b(f), n, o, p, q = i.type;
				if (m && (n = c.keyEvents[m]) && (o = n[q]) && n.handler && (p = o[g])) {
					for (var j = 0; j < p.length;)p[j].fn === h ? p.splice(j, 1) : j++;
					p.length < 1 && delete o[g];
					var r = !1;
					for (var s in o) {
						r = !0;
						break
					}
					if (!r) {
						a.core.evt.removeEvent(f, q, n.handler);
						delete n[q]
					}
					l && n.linkKeyStr && (n.linkKeyStr = n.linkKeyStr.replace(" " + g + " ", ""))
				}
			}
		}
	};
	return e
});
STK.register("core.evt.eventName", function (a) {
	var b = {
		WebkitTransition: "webkitTransitionEnd",
		MozTransition: "transitionend",
		OTransition: "oTransitionEnd",
		msTransition: "MSTransitionEnd",
		transition: "transitionend"
	};
	return function (c) {
		if (c === "mousewheel")return "onmousewheel"in document ? "mousewheel" : "DOMMouseScroll";
		if (c === "transitionend") {
			var d = a.C("div");
			for (var e in b)if (e in d.style)return b[e]
		}
		return c
	}
});
STK.register("core.func.bind", function (a) {
	return function (b, c, d) {
		d = a.core.arr.isArray(d) ? d : [d];
		return function () {
			return c.apply(b, d)
		}
	}
});
STK.register("core.func.memorize", function (a) {
	return function (a, b) {
		if (typeof a != "function")throw"core.func.memorize need a function as first parameter";
		b = b || {};
		var c = {};
		b.timeout && setInterval(function () {
			c = {}
		}, b.timeout);
		return function () {
			var d = Array.prototype.join.call(arguments, "_");
			d in c || (c[d] = a.apply(b.context || {}, arguments));
			return c[d]
		}
	}
});
STK.register("core.func.methodBefore", function (a) {
	return function () {
		var b = !1, c = [], d = {};
		d.add = function (d, e) {
			var f = a.core.obj.parseParam({args: [], pointer: window, top: !1}, e);
			f.top == !0 ? c.unshift([d, f.args, f.pointer]) : c.push([d, f.args, f.pointer]);
			return !b
		};
		d.start = function () {
			var a, d, e, f, g;
			if (b != !0) {
				b = !0;
				for (a = 0, d = c.length; a < d; a++) {
					e = c[a][0];
					f = c[a][1];
					g = c[a][2];
					e.apply(g, f)
				}
			}
		};
		d.reset = function () {
			c = [];
			b = !1
		};
		d.getList = function () {
			return c
		};
		return d
	}
});
STK.register("core.func.timedChunk", function (a) {
	var b = {
		process: function (a) {
			typeof a == "function" && a()
		}, context: {}, callback: null, delay: 25, execTime: 50
	};
	return function (c, d) {
		if (!a.core.arr.isArray(c))throw"core.func.timedChunk need an array as first parameter";
		var e = c.concat(), f = a.core.obj.parseParam(b, d), g = null, h = function () {
			var a = +(new Date);
			do f.process.call(f.context, e.shift()); while (e.length > 0 && +(new Date) - a < f.execTime);
			e.length <= 0 ? f.callback && f.callback(c) : setTimeout(arguments.callee, f.delay)
		};
		g = setTimeout(h, f.delay)
	}
});
STK.register("core.io.getXHR", function (a) {
	return function () {
		var a = !1;
		try {
			a = new XMLHttpRequest
		} catch (b) {
			try {
				a = new ActiveXObject("Msxml2.XMLHTTP")
			} catch (c) {
				try {
					a = new ActiveXObject("Microsoft.XMLHTTP")
				} catch (d) {
					a = !1
				}
			}
		}
		return a
	}
});
STK.register("core.str.parseURL", function (a) {
	return function (a) {
		var b = /^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, c = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"], d = b.exec(a), e = {};
		for (var f = 0, g = c.length; f < g; f += 1)e[c[f]] = d[f] || "";
		return e
	}
});
STK.register("core.json.jsonToQuery", function (a) {
	var b = function (b, c) {
		b = b == null ? "" : b;
		b = a.core.str.trim(b.toString());
		return c ? encodeURIComponent(b) : b
	};
	return function (a, c) {
		var d = [];
		if (typeof a == "object")for (var e in a) {
			if (e === "$nullName") {
				d = d.concat(a[e]);
				continue
			}
			if (a[e]instanceof Array)for (var f = 0, g = a[e].length; f < g; f++)d.push(e + "=" + b(a[e][f], c)); else typeof a[e] != "function" && d.push(e + "=" + b(a[e], c))
		}
		return d.length ? d.join("&") : ""
	}
});
STK.register("core.util.URL", function (a) {
	return function (b, c) {
		var d = a.core.obj.parseParam({
			isEncodeQuery: !1,
			isEncodeHash: !1
		}, c || {}), e = {}, f = a.core.str.parseURL(b), g = a.core.json.queryToJson(f.query), h = a.core.json.queryToJson(f.hash);
		e.setParam = function (a, b) {
			g[a] = b;
			return this
		};
		e.getParam = function (a) {
			return g[a]
		};
		e.setParams = function (a) {
			for (var b in a)e.setParam(b, a[b]);
			return this
		};
		e.setHash = function (a, b) {
			h[a] = b;
			return this
		};
		e.getHash = function (a) {
			return h[a]
		};
		e.valueOf = e.toString = function () {
			var b = [], c = a.core.json.jsonToQuery(g, d.isEncodeQuery), e = a.core.json.jsonToQuery(h, d.isEncodeQuery);
			if (f.scheme != "") {
				b.push(f.scheme + ":");
				b.push(f.slash)
			}
			if (f.host != "") {
				b.push(f.host);
				if (f.port != "") {
					b.push(":");
					b.push(f.port)
				}
			}
			b.push("/");
			b.push(f.path);
			c != "" && b.push("?" + c);
			e != "" && b.push("#" + e);
			return b.join("")
		};
		return e
	}
});
STK.register("core.json.strToJson", function (a) {
	var b, c, d = {'"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t"}, e, f = function (a) {
		throw{name: "SyntaxError", message: a, at: b, text: e}
	}, g = function (a) {
		a && a !== c && f("Expected '" + a + "' instead of '" + c + "'");
		c = e.charAt(b);
		b += 1;
		return c
	}, h = function () {
		var a, b = "";
		if (c === "-") {
			b = "-";
			g("-")
		}
		while (c >= "0" && c <= "9") {
			b += c;
			g()
		}
		if (c === ".") {
			b += ".";
			while (g() && c >= "0" && c <= "9")b += c
		}
		if (c === "e" || c === "E") {
			b += c;
			g();
			if (c === "-" || c === "+") {
				b += c;
				g()
			}
			while (c >= "0" && c <= "9") {
				b += c;
				g()
			}
		}
		a = +b;
		if (isNaN(a))f("Bad number"); else return a
	}, i = function () {
		var a, b, e = "", h;
		if (c === '"')while (g()) {
			if (c === '"') {
				g();
				return e
			}
			if (c === "\\") {
				g();
				if (c === "u") {
					h = 0;
					for (b = 0; b < 4; b += 1) {
						a = parseInt(g(), 16);
						if (!isFinite(a))break;
						h = h * 16 + a
					}
					e += String.fromCharCode(h)
				} else if (typeof d[c] == "string")e += d[c]; else break
			} else e += c
		}
		f("Bad string")
	}, j = function () {
		while (c && c <= " ")g()
	}, k = function () {
		switch (c) {
			case"t":
				g("t");
				g("r");
				g("u");
				g("e");
				return !0;
			case"f":
				g("f");
				g("a");
				g("l");
				g("s");
				g("e");
				return !1;
			case"n":
				g("n");
				g("u");
				g("l");
				g("l");
				return null
		}
		f("Unexpected '" + c + "'")
	}, l, m = function () {
		var a = [];
		if (c === "[") {
			g("[");
			j();
			if (c === "]") {
				g("]");
				return a
			}
			while (c) {
				a.push(l());
				j();
				if (c === "]") {
					g("]");
					return a
				}
				g(",");
				j()
			}
		}
		f("Bad array")
	}, n = function () {
		var a, b = {};
		if (c === "{") {
			g("{");
			j();
			if (c === "}") {
				g("}");
				return b
			}
			while (c) {
				a = i();
				j();
				g(":");
				Object.hasOwnProperty.call(b, a) && f('Duplicate key "' + a + '"');
				b[a] = l();
				j();
				if (c === "}") {
					g("}");
					return b
				}
				g(",");
				j()
			}
		}
		f("Bad object")
	};
	l = function () {
		j();
		switch (c) {
			case"{":
				return n();
			case"[":
				return m();
			case'"':
				return i();
			case"-":
				return h();
			default:
				return c >= "0" && c <= "9" ? h() : k()
		}
	};
	return function (a, d) {
		if (window.JSON && window.JSON.parse)return window.JSON.parse(a, d);
		var g;
		e = a;
		b = 0;
		c = " ";
		g = l();
		j();
		c && f("Syntax error");
		return typeof d == "function" ? function h(a, b) {
			var c, e, f = a[b];
			if (f && typeof f == "object")for (c in f)if (Object.hasOwnProperty.call(f, c)) {
				e = h(f, c);
				e !== undefined ? f[c] = e : delete f[c]
			}
			return d.call(a, b, f)
		}({"": g}, "") : g
	}
});
STK.register("core.io.ajax", function ($) {
	return function (oOpts) {
		var opts = $.core.obj.parseParam({
			url: "",
			charset: "UTF-8",
			timeout: 3e4,
			args: {},
			onComplete: null,
			onTimeout: $.core.func.empty,
			uniqueID: null,
			onFail: $.core.func.empty,
			method: "get",
			asynchronous: !0,
			header: {},
			isEncode: !1,
			responseType: "json"
		}, oOpts);
		if (opts.url == "")throw"ajax need url in parameters object";
		var tm, trans = $.core.io.getXHR(), cback = function () {
			if (trans.readyState == 4) {
				clearTimeout(tm);
				var data = "";
				if (opts.responseType === "xml")data = trans.responseXML; else if (opts.responseType === "text")data = trans.responseText; else try {
					trans.responseText && typeof trans.responseText == "string" ? data = eval("(" + trans.responseText + ")") : data = {}
				} catch (exp) {
					data = opts.url + "return error : data error"
				}
				trans.status == 200 ? opts.onComplete != null && opts.onComplete(data) : trans.status != 0 && opts.onFail != null && opts.onFail(data, trans)
			} else opts.onTraning != null && opts.onTraning(trans)
		};
		trans.onreadystatechange = cback;
		opts.header["Content-Type"] || (opts.header["Content-Type"] = "application/x-www-form-urlencoded");
		opts.header["X-Requested-With"] || (opts.header["X-Requested-With"] = "XMLHttpRequest");
		if (opts.method.toLocaleLowerCase() == "get") {
			var url = $.core.util.URL(opts.url, {isEncodeQuery: opts.isEncode});
			url.setParams(opts.args);
			url.setParam("__rnd", (new Date).valueOf());
			trans.open(opts.method, url.toString(), opts.asynchronous);
			try {
				for (var k in opts.header)trans.setRequestHeader(k, opts.header[k])
			} catch (exp) {
			}
			trans.send("")
		} else {
			trans.open(opts.method, opts.url, opts.asynchronous);
			try {
				for (var k in opts.header)trans.setRequestHeader(k, opts.header[k])
			} catch (exp) {
			}
			trans.send($.core.json.jsonToQuery(opts.args, opts.isEncode))
		}
		opts.timeout && (tm = setTimeout(function () {
			try {
				trans.abort();
				opts.onTimeout({}, trans);
				opts.onFail({}, trans)
			} catch (a) {
			}
		}, opts.timeout));
		return trans
	}
});
STK.register("core.io.scriptLoader", function (a) {
	var b = {}, c = {
		url: "",
		charset: "UTF-8",
		timeout: 3e4,
		args: {},
		onComplete: a.core.func.empty,
		onTimeout: a.core.func.empty,
		isEncode: !1,
		uniqueID: null
	};
	return function (d) {
		var e, f, g = a.core.obj.parseParam(c, d);
		if (g.url == "")throw"scriptLoader: url is null";
		var h = g.uniqueID || a.core.util.getUniqueKey();
		e = b[h];
		if (e != null && a.IE != !0) {
			a.core.dom.removeNode(e);
			e = null
		}
		e == null && (e = b[h] = a.C("script"));
		e.charset = g.charset;
		e.id = "scriptRequest_script_" + h;
		e.type = "text/javascript";
		g.onComplete != null && (a.IE ? e.onreadystatechange = function () {
			if (e.readyState.toLowerCase() == "loaded" || e.readyState.toLowerCase() == "complete") {
				try {
					clearTimeout(f);
					document.getElementsByTagName("head")[0].removeChild(e);
					e.onreadystatechange = null
				} catch (a) {
				}
				g.onComplete()
			}
		} : e.onload = function () {
			try {
				clearTimeout(f);
				a.core.dom.removeNode(e)
			} catch (b) {
			}
			g.onComplete()
		});
		e.src = a.core.util.URL(g.url, {isEncodeQuery: g.isEncode}).setParams(g.args).toString();
		document.getElementsByTagName("head")[0].appendChild(e);
		g.timeout > 0 && (f = setTimeout(function () {
			try {
				document.getElementsByTagName("head")[0].removeChild(e)
			} catch (a) {
			}
			g.onTimeout()
		}, g.timeout));
		return e
	}
});
STK.register("core.io.jsonp", function (a) {
	return function (b) {
		var c = a.core.obj.parseParam({
			url: "",
			charset: "UTF-8",
			timeout: 3e4,
			args: {},
			onComplete: null,
			onTimeout: null,
			responseName: null,
			isEncode: !1,
			varkey: "callback"
		}, b), d = -1, e = c.responseName || "STK_" + a.core.util.getUniqueKey();
		c.args[c.varkey] = e;
		var f = c.onComplete, g = c.onTimeout;
		window[e] = function (a) {
			if (d != 2 && f != null) {
				d = 1;
				f(a)
			}
		};
		c.onComplete = null;
		c.onTimeout = function () {
			if (d != 1 && g != null) {
				d = 2;
				g()
			}
		};
		return a.core.io.scriptLoader(c)
	}
});
STK.register("core.util.templet", function (a) {
	return function (a, b) {
		return a.replace(/#\{(.+?)\}/ig, function () {
			var a = arguments[1].replace(/\s/ig, ""), c = arguments[0], d = a.split("||");
			for (var e = 0, f = d.length; e < f; e += 1) {
				if (/^default:.*$/.test(d[e])) {
					c = d[e].replace(/^default:/, "");
					break
				}
				if (b[d[e]] !== undefined) {
					c = b[d[e]];
					break
				}
			}
			return c
		})
	}
});
STK.register("core.io.getIframeTrans", function (a) {
	var b = '<iframe id="#{id}" name="#{id}" height="0" width="0" frameborder="no"></iframe>';
	return function (c) {
		var d, e, f;
		e = a.core.obj.parseParam({id: "STK_iframe_" + a.core.util.getUniqueKey()}, c);
		f = {};
		d = a.C("DIV");
		d.innerHTML = a.core.util.templet(b, e);
		a.core.util.hideContainer.appendChild(d);
		f.getId = function () {
			return e.id
		};
		f.destroy = function () {
			d.innerHTML = "";
			try {
				d.getElementsByTagName("iframe")[0].src = "about:blank"
			} catch (b) {
			}
			a.core.util.hideContainer.removeChild(d);
			d = null
		};
		return f
	}
});
STK.register("core.io.require", function (a) {
	var b = "http://js.t.sinajs.cn/STK/js/", c = function (a, b) {
		var c = b.split("."), d = a, e = null;
		while (e = c.shift()) {
			d = d[e];
			if (d === undefined)return !1
		}
		return !0
	}, d = [], e = function (b) {
		if (a.core.arr.indexOf(b, d) !== -1)return !1;
		d.push(b);
		a.core.io.scriptLoader({
			url: b, callback: function () {
				a.core.arr.foreach(d, function (a, c) {
					if (a === b) {
						d.splice(c, 1);
						return !1
					}
				})
			}
		});
		return !1
	}, f = function (d, f, g) {
		var h = null;
		for (var i = 0, j = d.length; i < j; i += 1) {
			var k = d[i];
			typeof k == "string" ? c(a, k) || e(b + k.replace(/\./ig, "/") + ".js") : c(window, k.NS) || e(k.url)
		}
		var l = function () {
			for (var b = 0, e = d.length; b < e; b += 1) {
				var i = d[b];
				if (typeof i == "string") {
					if (!c(a, i)) {
						h = setTimeout(l, 25);
						return !1
					}
				} else if (!c(window, i.NS)) {
					h = setTimeout(l, 25);
					return !1
				}
			}
			clearTimeout(h);
			f.apply({}, [].concat(g))
		};
		h = setTimeout(l, 25)
	};
	f.setBaseURL = function (a) {
		if (typeof a != "string")throw"[STK.kit.extra.require.setBaseURL] need string as frist parameter";
		b = a
	};
	return f
});
STK.register("core.io.ijax", function (a) {
	return function (b) {
		var c, d, e, f, g, h, i;
		c = a.core.obj.parseParam({
			url: "",
			form: null,
			args: {},
			uniqueID: null,
			timeout: 3e4,
			onComplete: a.core.func.empty,
			onTimeout: a.core.func.empty,
			onFail: a.core.func.empty,
			asynchronous: !0,
			isEncode: !0,
			abaurl: null,
			responseName: null,
			varkey: "callback",
			abakey: "callback"
		}, b);
		i = {};
		if (c.url == "")throw"ijax need url in parameters object";
		if (!c.form)throw"ijax need form in parameters object";
		d = a.core.io.getIframeTrans();
		e = c.responseName || "STK_ijax_" + a.core.util.getUniqueKey();
		h = {};
		h[c.varkey] = e;
		if (c.abaurl) {
			c.abaurl = a.core.util.URL(c.abaurl).setParams(h);
			h = {};
			h[c.abakey] = c.abaurl.toString()
		}
		c.url = a.core.util.URL(c.url, {isEncodeQuery: c.isEncode}).setParams(h).setParams(c.args);
		g = function () {
			window[e] = null;
			d.destroy();
			d = null;
			clearTimeout(f)
		};
		f = setTimeout(function () {
			try {
				c.onTimeout();
				c.onFail()
			} catch (a) {
			} finally {
				g()
			}
		}, c.timeout);
		window[e] = function (a, b) {
			try {
				c.onComplete(a, b)
			} catch (d) {
			} finally {
				g()
			}
		};
		c.form.action = c.url.toString();
		c.form.target = d.getId();
		c.form.submit();
		i.abort = g;
		return i
	}
});
STK.register("core.json.clone", function (a) {
	function b(a) {
		var c;
		if (a instanceof Array) {
			c = [];
			var d = a.length;
			while (d--)c[d] = b(a[d]);
			return c
		}
		if (a instanceof Object) {
			c = {};
			for (var e in a)c[e] = b(a[e]);
			return c
		}
		return a
	}

	return b
});
STK.register("core.json.include", function (a) {
	return function (a, b) {
		for (var c in b)if (typeof b[c] == "object")if (b[c]instanceof Array) {
			if (!(a[c]instanceof Array))return !1;
			if (b[c].length !== a[c].length)return !1;
			for (var d = 0, e = b[c].length; d < e; d += 1)if (!arguments.callee(b[c][d], a[c][d]))return !1
		} else {
			if (typeof a[c] != "object")return !1;
			if (!arguments.callee(b[c], a[c]))return !1
		} else if (typeof b[c] == "number" || typeof b[c] == "string") {
			if (b[c] !== a[c])return !1
		} else if (b[c] !== undefined && b[c] !== null) {
			if (a[c] === undefined || a[c] === null)return !1;
			if (!b[c].toString || !a[c].toString)throw"json1[k] or json2[k] do not have toString method";
			if (b[c].toString() !== a[c].toString())return !1
		}
		return !0
	}
});
STK.register("core.json.compare", function (a) {
	return function (b, c) {
		return a.core.json.include(b, c) && a.core.json.include(c, b) ? !0 : !1
	}
});
STK.register("core.json.jsonToStr", function (a) {
	function d(a) {
		return a < 10 ? "0" + a : a
	}

	function c(a) {
		f.lastIndex = 0;
		return f.test(a) ? '"' + a.replace(f, function (a) {
			var b = i[a];
			return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + a + '"'
	}

	function b(a, d) {
		var e, f, i, k, l = g, m, n = d[a];
		n && typeof n == "object" && typeof n.toJSON == "function" && (n = n.toJSON(a));
		typeof j == "function" && (n = j.call(d, a, n));
		switch (typeof n) {
			case"string":
				return c(n);
			case"number":
				return isFinite(n) ? String(n) : "null";
			case"boolean":
			case"null":
				return String(n);
			case"object":
				if (!n)return "null";
				g += h;
				m = [];
				if (Object.prototype.toString.apply(n) === "[object Array]") {
					k = n.length;
					for (e = 0; e < k; e += 1)m[e] = b(e, n) || "null";
					i = m.length === 0 ? "[]" : g ? "[\n" + g + m.join(",\n" + g) + "\n" + l + "]" : "[" + m.join(",") + "]";
					g = l;
					return i
				}
				if (j && typeof j == "object") {
					k = j.length;
					for (e = 0; e < k; e += 1) {
						f = j[e];
						if (typeof f == "string") {
							i = b(f, n);
							i && m.push(c(f) + (g ? ": " : ":") + i)
						}
					}
				} else for (f in n)if (Object.hasOwnProperty.call(n, f)) {
					i = b(f, n);
					i && m.push(c(f) + (g ? ": " : ":") + i)
				}
				i = m.length === 0 ? "{}" : g ? "{\n" + g + m.join(",\n" + g) + "\n" + l + "}" : "{" + m.join(",") + "}";
				g = l;
				return i
		}
	}

	if (typeof Date.prototype.toJSON != "function") {
		Date.prototype.toJSON = function (a) {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + d(this.getUTCMonth() + 1) + "-" + d(this.getUTCDate()) + "T" + d(this.getUTCHours()) + ":" + d(this.getUTCMinutes()) + ":" + d(this.getUTCSeconds()) + "Z" : null
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
			return this.valueOf()
		}
	}
	var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, g, h, i = {
		"\b": "\\b",
		"\t": "\\t",
		"\n": "\\n",
		"\f": "\\f",
		"\r": "\\r",
		'"': '\\"',
		"\\": "\\\\"
	}, j;
	return function (a, c, d) {
		if (window.JSON && window.JSON.stringify)return window.JSON.stringify(a, c, d);
		var e;
		g = "";
		h = "";
		if (typeof d == "number")for (e = 0; e < d; e += 1)h += " "; else typeof d == "string" && (h = d);
		j = c;
		if (!c || typeof c == "function" || typeof c == "object" && typeof c.length == "number")return b("", {"": a});
		throw new Error("JSON.stringify")
	}
});
STK.register("core.obj.beget", function (a) {
	var b = function () {
	};
	return function (a) {
		b.prototype = a;
		return new b
	}
});
STK.register("core.obj.cascade", function (a) {
	return function (a, b) {
		for (var c = 0, d = b.length; c < d; c += 1) {
			if (typeof a[b[c]] != "function")throw"cascade need function list as the second paramsters";
			a[b[c]] = function (b) {
				return function () {
					b.apply(a, arguments);
					return a
				}
			}(a[b[c]])
		}
	}
});
STK.register("core.obj.clear", function (a) {
	return function (a) {
		var b, c = {};
		for (b in a)a[b] != null && (c[b] = a[b]);
		return c
	}
});
STK.register("core.obj.cut", function (a) {
	return function (b, c) {
		var d = {};
		if (!a.core.arr.isArray(c))throw"core.obj.cut need array as second parameter";
		for (var e in b)a.core.arr.inArray(e, c) || (d[e] = b[e]);
		return d
	}
});
STK.register("core.obj.sup", function (a) {
	return function (a, b) {
		var c = {};
		for (var d = 0, e = b.length; d < e; d += 1) {
			if (typeof a[b[d]] != "function")throw"super need function list as the second paramsters";
			c[b[d]] = function (b) {
				return function () {
					return b.apply(a, arguments)
				}
			}(a[b[d]])
		}
		return c
	}
});
STK.register("core.str.bLength", function (a) {
	return function (a) {
		if (!a)return 0;
		var b = a.match(/[^\x00-\xff]/g);
		return a.length + (b ? b.length : 0)
	}
});
STK.register("core.str.dbcToSbc", function (a) {
	return function (a) {
		return a.replace(/[\uff01-\uff5e]/g, function (a) {
			return String.fromCharCode(a.charCodeAt(0) - 65248)
		}).replace(/\u3000/g, " ")
	}
});
STK.register("core.str.parseHTML", function (a) {
	return function (a) {
		var b = /[^<>]+|<(\/?)([A-Za-z0-9]+)([^<>]*)>/g, c, d, e = [];
		while (c = b.exec(a)) {
			var f = [];
			for (d = 0; d < c.length; d += 1)f.push(c[d]);
			e.push(f)
		}
		return e
	}
});
STK.register("core.str.leftB", function (a) {
	return function (b, c) {
		var d = b.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**");
		b = b.slice(0, d.slice(0, c).replace(/\*\*/g, " ").replace(/\*/g, "").length);
		a.core.str.bLength(b) > c && c > 0 && (b = b.slice(0, b.length - 1));
		return b
	}
});
STK.register("core.str.queryString", function (a) {
	return function (b, c) {
		var d = a.core.obj.parseParam({
			source: window.location.href.toString(),
			split: "&"
		}, c), e = (new RegExp("(^|)" + b + "=([^\\" + d.split + "]*)(\\" + d.split + "|$)", "gi")).exec(d.source), f;
		return (f = e) ? f[2] : null
	}
});
STK.register("core.util.cookie", function (a) {
	var b = {
		set: function (b, c, d) {
			var e = [], f, g, h = a.core.obj.parseParam({
				expire: null,
				path: "/",
				domain: null,
				secure: null,
				encode: !0
			}, d);
			h.encode == !0 && (c = escape(c));
			e.push(b + "=" + c);
			h.path != null && e.push("path=" + h.path);
			h.domain != null && e.push("domain=" + h.domain);
			h.secure != null && e.push(h.secure);
			if (h.expire != null) {
				f = new Date;
				g = f.getTime() + h.expire * 36e5;
				f.setTime(g);
				e.push("expires=" + f.toGMTString())
			}
			document.cookie = e.join(";")
		}, get: function (a) {
			a = a.replace(/([\.\[\]\$])/g, "\\$1");
			var b = new RegExp(a + "=([^;]*)?;", "i"), c = document.cookie + ";", d = c.match(b);
			return d ? d[1] || "" : ""
		}, remove: function (a, c) {
			c = c || {};
			c.expire = -10;
			b.set(a, "", c)
		}
	};
	return b
});
STK.register("core.util.connect", function (a) {
	var b = {}, c = {}, d = 0, e = function (a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}, f = function () {
		return ++d + "" + (new Date).getTime()
	}, g = function (b, d, f, g) {
		if (!e(c, b))return !1;
		var h = c[b];
		if (!e(h.callback, d))return !1;
		var i = h.callback[d].onSuccess, j = h.callback[d].onError, k = a.core.json.jsonToStr(g || {});
		setTimeout(function () {
			var b = a.core.json.strToJson(k);
			if (f) {
				b.type = "error";
				j(b, d)
			} else i(b, d)
		}, 0);
		delete h.callback[d];
		return !0
	};
	b.request = function (b) {
		var d = b.sid;
		if (!d || typeof d != "string")return -1;
		if (!e(c, d))return -1;
		var h = c[d], i = f(), j = a.core.json.jsonToStr(b.data || {});
		h.callback[i] = {onSuccess: b.onSuccess || a.core.func.empty, onError: b.onError || a.core.func.empty};
		var k = function (a) {
			g(d, i, a.error, a.data)
		};
		setTimeout(function () {
			h.handle(k, a.core.json.strToJson(j), i)
		}, 0);
		return i
	};
	b.create = function (b) {
		if (!b)return !1;
		var d = b.sid;
		if (!d || typeof d != "string")return !1;
		if (e(c, d))return !1;
		var f = b.handle;
		if (typeof f != "function")return !1;
		c[d] = {handle: f, onAbort: b.onAbort || a.core.func.empty, callback: {}};
		return !0
	};
	b.abort = function (a) {
		if (!a)return !1;
		for (var b in c) {
			var d = c[b];
			if (e(d.callback, a)) {
				setTimeout(function () {
					d.onAbort(a)
				}, 0);
				delete d.callback[a];
				return !0
			}
		}
		return !1
	};
	b.destory = function (a) {
		if (!a || typeof a != "string")return !1;
		if (!e(c, a))return !1;
		for (var b in c[a].callback)try {
			c[a].callback[b].onError({type: "destroy"}, b)
		} catch (d) {
		}
		delete c[a];
		return !0
	};
	return b
});
STK.register("core.util.drag", function (a) {
	var b = function (a) {
		a.cancelBubble = !0;
		return !1
	}, c = function (b, c) {
		b.clientX = c.clientX;
		b.clientY = c.clientY;
		b.pageX = c.clientX + a.core.util.scrollPos().left;
		b.pageY = c.clientY + a.core.util.scrollPos().top;
		return b
	};
	return function (d, e) {
		if (!a.core.dom.isNode(d))throw"core.util.drag need Element as first parameter";
		var f = a.core.obj.parseParam({
			actRect: [],
			actObj: {}
		}, e), g = {}, h = a.core.evt.custEvent.define(f.actObj, "dragStart"), i = a.core.evt.custEvent.define(f.actObj, "dragEnd"), j = a.core.evt.custEvent.define(f.actObj, "draging"), k = function (d) {
			var e = c({}, d);
			document.body.onselectstart = function () {
				return !1
			};
			a.core.evt.addEvent(document, "mousemove", l);
			a.core.evt.addEvent(document, "mouseup", m);
			a.core.evt.addEvent(document, "click", b, !0);
			if (d.preventDefault) {
				d.preventDefault();
				d.stopPropagation()
			}
			a.core.evt.custEvent.fire(h, "dragStart", e);
			return !1
		}, l = function (b) {
			var d = c({}, b);
			b.cancelBubble = !0;
			a.core.evt.custEvent.fire(h, "draging", d)
		}, m = function (d) {
			var e = c({}, d);
			document.body.onselectstart = function () {
				return !0
			};
			a.core.evt.removeEvent(document, "mousemove", l);
			a.core.evt.removeEvent(document, "mouseup", m);
			a.core.evt.removeEvent(document, "click", b, !0);
			a.core.evt.custEvent.fire(h, "dragEnd", e)
		};
		a.core.evt.addEvent(d, "mousedown", k);
		g.destroy = function () {
			a.core.evt.removeEvent(d, "mousedown", k);
			f = null
		};
		g.getActObj = function () {
			return f.actObj
		};
		return g
	}
});
STK.register("core.util.easyTemplate", function (a) {
	var b = function (a, c) {
		if (!a)return "";
		if (a !== b.template) {
			b.template = a;
			b.aStatement = b.parsing(b.separate(a))
		}
		var d = b.aStatement, e = function (a) {
			a && (c = a);
			return arguments.callee
		};
		e.toString = function () {
			return (new Function(d[0], d[1]))(c)
		};
		return e
	};
	b.separate = function (a) {
		var b = /\\'/g, c = a.replace(/(<(\/?)#(.*?(?:\(.*?\))*)>)|(')|([\r\n\t])|(\$\{([^\}]*?)\})/g, function (a, c, d, e, f, g, h, i) {
			if (c)return "{|}" + (d ? "-" : "+") + e + "{|}";
			if (f)return "\\'";
			if (g)return "";
			if (h)return "'+(" + i.replace(b, "'") + ")+'"
		});
		return c
	};
	b.parsing = function (a) {
		var b, c, d, e, f, g, h, i = ["var aRet = [];"];
		h = a.split(/\{\|\}/);
		var j = /\s/;
		while (h.length) {
			d = h.shift();
			if (!d)continue;
			f = d.charAt(0);
			if (f !== "+" && f !== "-") {
				d = "'" + d + "'";
				i.push("aRet.push(" + d + ");");
				continue
			}
			e = d.split(j);
			switch (e[0]) {
				case"+et":
					b = e[1];
					c = e[2];
					i.push('aRet.push("<!--' + b + ' start-->");');
					break;
				case"-et":
					i.push('aRet.push("<!--' + b + ' end-->");');
					break;
				case"+if":
					e.splice(0, 1);
					i.push("if" + e.join(" ") + "{");
					break;
				case"+elseif":
					e.splice(0, 1);
					i.push("}else if" + e.join(" ") + "{");
					break;
				case"-if":
					i.push("}");
					break;
				case"+else":
					i.push("}else{");
					break;
				case"+list":
					i.push("if(" + e[1] + ".constructor === Array){with({i:0,l:" + e[1] + ".length," + e[3] + "_index:0," + e[3] + ":null}){for(i=l;i--;){" + e[3] + "_index=(l-i-1);" + e[3] + "=" + e[1] + "[" + e[3] + "_index];");
					break;
				case"-list":
					i.push("}}}");
					break;
				default:
			}
		}
		i.push('return aRet.join("");');
		return [c, i.join("")]
	};
	return b
});
STK.register("core.util.htmlParser", function (a) {
	var b = function (a) {
		var b = {}, c = a.split(",");
		for (var d = 0; d < c.length; d++)b[c[d]] = !0;
		return b
	}, c = /^<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, d = /^<\/(\w+)[^>]*>/, e = /([\w|\-]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, f = b("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"), g = b("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul"), h = b("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), i = b("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), j = b("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), k = b("script,style"), l = function (a, b) {
		var l, m, n, o = [], p = a, q = function (c, d, k, l) {
			if (g[d])while (o.last() && h[o.last()])r("", o.last());
			i[d] && o.last() == d && r("", d);
			l = f[d] || !!l;
			l || o.push(d);
			var m = [];
			if (c === "textarea") {
				var n = a.match(/^(.*)<\/textarea[^>]*>/);
				m.push({name: "text", value: a.slice(0, n[0].length)});
				a = a.substring(n[0].length)
			}
			if (b.start && typeof b.start == "function") {
				k.replace(e, function (a, b) {
					var c = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : j[b] ? b : "";
					m.push({name: b, value: c, escaped: c.replace(/(^|[^\\])"/g, '$1\\"')})
				});
				b.start(d, m, l)
			}
		}, r = function (a, c) {
			if (!c)var d = 0; else for (var d = o.length - 1; d >= 0; d--)if (o[d] == c)break;
			if (d >= 0) {
				for (var e = o.length - 1; e >= d; e--)b.end && typeof b.end == "function" && b.end(o[e]);
				o.length = d
			}
		};
		o.last = function () {
			return this[this.length - 1]
		};
		while (a) {
			m = !0;
			if (!o.last() || !k[o.last()]) {
				if (a.indexOf("<!--") === 0) {
					l = a.indexOf("-->");
					if (l >= 0) {
						b.comment && typeof b.comment == "function" && b.comment(a.substring(4, l));
						a = a.substring(l + 3);
						m = !1
					}
				} else if (a.indexOf("</") === 0) {
					n = a.match(d);
					if (n) {
						a = a.substring(n[0].length);
						n[0].replace(d, r);
						m = !1
					}
				} else if (a.indexOf("<") === 0) {
					n = a.match(c);
					if (n) {
						a = a.substring(n[0].length);
						n[0].replace(c, q);
						m = !1
					}
				}
				if (m) {
					l = a.indexOf("<");
					var s = l < 0 ? a : a.substring(0, l);
					a = l < 0 ? "" : a.substring(l);
					b.chars && typeof b.chars == "function" && b.chars(s)
				}
			} else {
				a = a.replace(new RegExp("(.*)</" + o.last() + "[^>]*>"), function (a, c) {
					c = c.replace(/<!--(.*?)-->/g, "$1").replace(/<!\[CDATA\[(.*?)]]>/g, "$1");
					b.chars && typeof b.chars == "function" && b.chars(c);
					return ""
				});
				r("", o.last())
			}
			if (a == p)throw"Parse Error: " + a;
			p = a
		}
		r()
	};
	return l
});
STK.register("core.util.nameValue", function (a) {
	return function (b) {
		var c = b.getAttribute("name"), d = b.getAttribute("type"), e = b.tagName, f = {
			name: c,
			value: ""
		}, g = function (b) {
			b === !1 ? f = !1 : f.value ? f.value = [a.core.str.trim(b || "")].concat(f.value) : f.value = a.core.str.trim(b || "")
		};
		if (!!b.disabled || !c)return !1;
		switch (e) {
			case"INPUT":
				d == "radio" || d == "checkbox" ? b.checked ? g(b.value) : g(!1) : d == "reset" || d == "submit" || d == "image" ? g(!1) : g(b.value);
				break;
			case"SELECT":
				if (b.multiple) {
					var h = b.options;
					for (var i = 0, j = h.length; i < j; i++)h[i].selected && g(h[i].value)
				} else g(b.value);
				break;
			case"TEXTAREA":
				g(b.value || b.getAttribute("value") || !1);
				break;
			case"BUTTON":
			default:
				g(b.value || b.getAttribute("value") || b.innerHTML || !1)
		}
		return f
	}
});
STK.register("core.util.htmlToJson", function (a) {
	return function (b, c, d) {
		var e = {};
		c = c || ["INPUT", "TEXTAREA", "BUTTON", "SELECT"];
		if (!b || !c)return !1;
		var f = a.core.util.nameValue;
		for (var g = 0, h = c.length; g < h; g++) {
			var i = b.getElementsByTagName(c[g]);
			for (var j = 0, k = i.length; j < k; j++) {
				var l = f(i[j]);
				if (!l || d && l.value === "")continue;
				e[l.name] ? e[l.name]instanceof Array ? e[l.name] = e[l.name].concat(l.value) : e[l.name] = [e[l.name]].concat(l.value) : e[l.name] = l.value
			}
		}
		return e
	}
});
STK.register("core.util.jobsM", function (a) {
	return function () {
		var b = [], c = {}, d = !1, e = {}, f = function (b) {
			var d = b.name, e = b.func, f = +(new Date);
			if (!c[d])try {
				e(a);
				e[d] = !0
			} catch (g) {
				a.log("[error][jobs]" + d)
			}
		}, g = function (b) {
			if (b.length) {
				a.core.func.timedChunk(b, {process: f, callback: arguments.callee});
				b.splice(0, b.length)
			} else d = !1
		};
		e.register = function (a, c) {
			b.push({name: a, func: c})
		};
		e.start = function () {
			if (d)return !0;
			d = !0;
			g(b)
		};
		e.load = function () {
		};
		a.core.dom.ready(e.start);
		return e
	}()
});
STK.register("core.util.language", function (a) {
	return function (a, b) {
		var c = [];
		for (var d = 2, e = arguments.length; d < e; d += 1)c.push(arguments[d]);
		return a.replace(/#L\{((.*?)(?:[^\\]))\}/ig, function () {
			var a = arguments[1], d;
			b && b[a] !== undefined ? d = b[a] : d = a;
			c.length && (d = d.replace(/(\%s)/ig, function () {
				var a = c.shift();
				return a !== undefined ? a : arguments[0]
			}));
			return d
		})
	}
});
STK.register("core.util.listener", function (a) {
	return function () {
		var a = {}, b = [], c, d = function () {
			if (b.length != 0) {
				clearTimeout(c);
				var a = b.splice(0, 1)[0];
				try {
					a.func.apply(a.func, [].concat(a.data))
				} catch (e) {
				}
				c = setTimeout(d, 25)
			}
		};
		return {
			register: function (b, c, d) {
				a[b] = a[b] || {};
				a[b][c] = a[b][c] || [];
				a[b][c].push(d)
			}, fire: function (c, e, f) {
				var g, h, i;
				if (a[c] && a[c][e] && a[c][e].length > 0) {
					g = a[c][e];
					g.data_cache = f;
					for (h = 0, i = g.length; h < i; h++)b.push({channel: c, evt: e, func: g[h], data: f});
					d()
				}
			}, remove: function (b, c, d) {
				if (a[b] && a[b][c])for (var e = 0, f = a[b][c].length; e < f; e++)if (a[b][c][e] === d) {
					a[b][c].splice(e, 1);
					break
				}
			}, list: function () {
				return a
			}, cache: function (b, c) {
				if (a[b] && a[b][c])return a[b][c].data_cache
			}
		}
	}()
});
STK.register("core.util.pageletM", function (a) {
	var b = "", c = "";
	if (typeof $CONFIG != "undefined") {
		b = $CONFIG.jsPath || b;
		c = $CONFIG.cssPath || c
	}
	var d = a.core.arr.indexOf, e = {}, f, g = {}, h = {}, i = {}, j = {}, k, l;
	if (a.IE) {
		k = {};
		l = function () {
			var b, c, d;
			for (b in k)if (k[b].length < 31) {
				d = a.E(b);
				break
			}
			if (!d) {
				b = "style_" + a.core.util.getUniqueKey(), d = document.createElement("style");
				d.setAttribute("type", "text/css");
				d.setAttribute("id", b);
				document.getElementsByTagName("head")[0].appendChild(d);
				k[b] = []
			}
			return {styleID: b, styleSheet: d.styleSheet || d.sheet}
		}
	}
	var m = function (b, c) {
		i[b] = {cssURL: c};
		if (a.IE) {
			var d = l();
			d.styleSheet.addImport(c);
			k[d.styleID].push(b);
			i[b].styleID = d.styleID
		} else {
			var e = a.C("link");
			e.setAttribute("rel", "Stylesheet");
			e.setAttribute("type", "text/css");
			e.setAttribute("charset", "utf-8");
			e.setAttribute("href", c);
			e.setAttribute("id", b);
			document.getElementsByTagName("head")[0].appendChild(e)
		}
	}, n = {}, o = function (b, c) {
		var d = a.E(b);
		if (d) {
			c(d);
			n[b] && delete n[b];
			for (var e in n)o(e, n[e])
		} else n[b] = c
	}, p = function (b) {
		if (a.IE) {
			var c = i[b].styleID, f = k[c], g = a.E(c), h;
			if ((h = d(b, f)) > -1) {
				(g.styleSheet || g.sheet).removeImport(h);
				f.splice(h, 1)
			}
		} else a.core.dom.removeNode(a.E(b));
		delete e[i[b].cssURL];
		delete i[b]
	}, q = function (b, d, e) {
		for (var f in j)a.E(f) || delete j[f];
		j[b] = {js: {}, css: {}};
		if (e)for (var f = 0, g = e.length; f < g; ++f)j[b].css[c + e[f]] = 1
	}, r = function () {
		for (var a in i) {
			var b = !1, c = i[a].cssURL;
			for (var d in j)if (j[d].css[c]) {
				b = !0;
				break
			}
			b || p(a)
		}
	}, s = function (a, b) {
		var c = e[a] || (e[a] = {loaded: !1, list: []});
		if (c.loaded) {
			b(a);
			return !1
		}
		c.list.push(b);
		return c.list.length > 1 ? !1 : !0
	}, t = function (a) {
		var b = e[a].list;
		if (b) {
			for (var c = 0; c < b.length; c++)b[c](a);
			e[a].loaded = !0;
			delete e[a].list
		}
	}, u = function (b) {
		var d = b.url, e = b.load_ID, f = b.complete, g = b.pid, h = c + d, i = "css_" + a.core.util.getUniqueKey();
		if (!!s(h, f)) {
			m(i, h);
			var j = a.C("div");
			j.id = e;
			a.core.util.hideContainer.appendChild(j);
			var k = 3e3, l = function () {
				if (parseInt(a.core.dom.getStyle(j, "height")) == 42) {
					a.core.util.hideContainer.removeChild(j);
					t(h)
				} else if (--k > 0)setTimeout(l, 10); else {
					a.log(h + "timeout!");
					a.core.util.hideContainer.removeChild(j);
					t(h);
					p(i);
					m(i, h)
				}
			};
			setTimeout(l, 50)
		}
	}, v = function (c, d) {
		var f = b + c;
		!s(f, d) || a.core.io.scriptLoader({
			url: f, onComplete: function () {
				t(f)
			}, onTimeout: function () {
				a.log(f + "timeout!");
				delete e[f]
			}
		})
	}, w = function (a, b) {
		g[a] || (g[a] = b)
	}, x = function (b) {
		if (b)if (g[b])try {
			h[b] || (h[b] = g[b](a))
		} catch (c) {
			a.log(b, c, c.stack)
		} else a.log("start:ns=" + b + " ,have not been registed"); else {
			var d = [];
			for (b in g)d.push(b);
			a.core.func.timedChunk(d, {
				process: function (b) {
					try {
						h[b] || (h[b] = g[b](a))
					} catch (c) {
						a.log(b, c, c.stack)
					}
				}
			})
		}
	}, y = function (b) {
		var c = 1, d, e, f, g, h, i, j;
		b = b || {};
		e = b.pid;
		f = b.html;
		h = b.js ? [].concat(b.js) : [];
		g = b.css ? [].concat(b.css) : [];
		if (e == undefined)a.log("node pid[" + e + "] is undefined"); else {
			q(e, h, g);
			i = function () {
				--c > 0 || o(e, function (a) {
					f != undefined && (a.innerHTML = f);
					h.length > 0 && j();
					r()
				})
			};
			j = function (a) {
				h.length > 0 && v(h.shift(), j);
				if (a && a.indexOf("/pl/") != -1) {
					var b = a.replace(/^.*?\/(pl\/.*)\.js\??.*$/, "$1").replace(/\//g, ".");
					z(b);
					x(b)
				}
			};
			if (g.length > 0) {
				c += g.length;
				for (var k = 0, l; l = g[k]; k++)u({
					url: l,
					load_ID: "js_" + l.replace(/^\/?(.*)\.css\??.*$/i, "$1").replace(/\//g, "_"),
					complete: i,
					pid: e
				})
			}
			i()
		}
	}, z = function (b) {
		if (b) {
			if (h[b]) {
				a.log("destroy:" + b);
				try {
					h[b].destroy()
				} catch (c) {
					a.log(c, c.stack)
				}
				delete h[b]
			}
		} else {
			for (b in h) {
				a.log("destroy:" + b);
				try {
					h[b] && h[b].destroy && h[b].destroy()
				} catch (c) {
					a.log(b, c, c.stack)
				}
			}
			h = {}
		}
	}, A = {
		register: w, start: x, view: y, clear: z, destroy: function () {
			A.clear();
			e = {};
			h = {};
			g = {};
			f = undefined
		}
	};
	a.core.dom.ready(function () {
		a.core.evt.addEvent(window, "unload", function () {
			a.core.evt.removeEvent(window, "unload", arguments.callee);
			A.destroy()
		})
	});
	return A
});
STK.register("core.util.winSize", function (a) {
	return function (a) {
		var b, c, d;
		a ? d = a.document : d = document;
		if (d.compatMode === "CSS1Compat") {
			b = d.documentElement.clientWidth;
			c = d.documentElement.clientHeight
		} else if (self.innerHeight) {
			a ? d = a.self : d = self;
			b = d.innerWidth;
			c = d.innerHeight
		} else if (d.documentElement && d.documentElement.clientHeight) {
			b = d.documentElement.clientWidth;
			c = d.documentElement.clientHeight
		} else if (d.body) {
			b = d.body.clientWidth;
			c = d.body.clientHeight
		}
		return {width: b, height: c}
	}
});
STK.register("core.util.pageSize", function (a) {
	return function (b) {
		var c;
		b ? c = b.document : c = document;
		var d = c.compatMode == "CSS1Compat" ? c.documentElement : c.body, e, f, g, h;
		if (window.innerHeight && window.scrollMaxY) {
			e = d.scrollWidth;
			f = window.innerHeight + window.scrollMaxY
		} else if (d.scrollHeight > d.offsetHeight) {
			e = d.scrollWidth;
			f = d.scrollHeight
		} else {
			e = d.offsetWidth;
			f = d.offsetHeight
		}
		var i = a.core.util.winSize(b);
		f < i.height ? g = i.height : g = f;
		e < i.width ? h = i.width : h = e;
		return {page: {width: h, height: g}, win: {width: i.width, height: i.height}}
	}
});
STK.register("core.util.queue", function (a) {
	return function () {
		var a = {}, b = [];
		a.add = function (c) {
			b.push(c);
			return a
		};
		a.get = function () {
			return b.length > 0 ? b.shift() : !1
		};
		return a
	}
});
STK.register("core.util.timer", function (a) {
	return function () {
		var a = {}, b = {}, c = 0, d = null, e = !1, f = 25, g = function () {
			for (var c in b)b[c].pause || b[c].fun();
			return a
		};
		a.add = function (d) {
			if (typeof d != "function")throw"The timer needs add a function as a parameters";
			var e = "" + (new Date).getTime() + Math.random() * Math.pow(10, 17);
			b[e] = {fun: d, pause: !1};
			c <= 0 && a.start();
			c++;
			return e
		};
		a.remove = function (d) {
			if (b[d]) {
				delete b[d];
				c--
			}
			c <= 0 && a.stop();
			return a
		};
		a.pause = function (c) {
			b[c] && (b[c].pause = !0);
			return a
		};
		a.play = function (c) {
			b[c] && (b[c].pause = !1);
			return a
		};
		a.stop = function () {
			clearInterval(d);
			d = null;
			return a
		};
		a.start = function () {
			d = setInterval(g, f);
			return a
		};
		a.loop = g;
		a.get = function (a) {
			if (a === "delay")return f;
			if (a === "functionList")return b
		};
		a.set = function (a, b) {
			a === "delay" && typeof b == "number" && (f = Math.max(25, Math.min(b, 200)))
		};
		return a
	}()
});
STK.register("core.util.scrollTo", function (a) {
	return function (b, c) {
		if (!a.core.dom.isNode(b))throw"core.dom.isNode need element as the first parameter";
		var d = a.core.obj.parseParam({box: document.documentElement, top: 0, step: 2, onMoveStop: null}, c);
		d.step = Math.max(2, Math.min(10, d.step));
		var e = [], f = a.core.dom.position(b), g;
		d.box == document.documentElement ? g = {t: 0} : g = a.core.dom.position(d.box);
		var h = Math.max(0, (f ? f.t : 0) - (g ? g.t : 0) - d.top), i = d.box === document.documentElement ? d.box.scrollTop || document.body.scrollTop || window.pageYOffset : d.box.scrollTop;
		while (Math.abs(i - h) > d.step && i !== 0) {
			e.push(Math.round(i + (h - i) * d.step / 10));
			i = e[e.length - 1]
		}
		e.length || e.push(h);
		var j = a.core.util.timer.add(function () {
			if (e.length)d.box === document.documentElement ? window.scrollTo(0, e.shift()) : d.box.scrollTop = e.shift(); else {
				d.box === document.documentElement ? window.scrollTo(0, h) : d.box.scrollTop = h;
				a.core.util.timer.remove(j);
				typeof d.onMoveStop == "function" && d.onMoveStop()
			}
		})
	}
});
STK.register("core.util.stack", function (a) {
	return function () {
		var a = {}, b = [];
		a.add = function (c) {
			b.push(c);
			return a
		};
		a.get = function () {
			return b.length > 0 ? b.pop() : !1
		};
		return a
	}
});
STK.register("core.util.swf", function (a) {
	function b(b, c) {
		var d = a.core.obj.parseParam({
			id: "swf_" + parseInt(Math.random() * 1e4, 10),
			width: 1,
			height: 1,
			attrs: {},
			paras: {},
			flashvars: {},
			html: ""
		}, c);
		if (b == null)throw"swf: [sURL] 鏈畾涔�";
		var e, f = [], g = [];
		for (e in d.attrs)g.push(e + '="' + d.attrs[e] + '" ');
		var h = [];
		for (e in d.flashvars)h.push(e + "=" + d.flashvars[e]);
		d.paras.flashvars = h.join("&");
		if (a.IE) {
			f.push('<object width="' + d.width + '" height="' + d.height + '" id="' + d.id + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
			f.push(g.join(""));
			f.push('><param name="movie" value="' + b + '" />');
			for (e in d.paras)f.push('<param name="' + e + '" value="' + d.paras[e] + '" />');
			f.push("</object>")
		} else {
			f.push('<embed width="' + d.width + '" height="' + d.height + '" id="' + d.id + '" src="' + b + '" type="application/x-shockwave-flash" ');
			f.push(g.join(""));
			for (e in d.paras)f.push(e + '="' + d.paras[e] + '" ');
			f.push(" />")
		}
		d.html = f.join("");
		return d
	}

	var c = {};
	c.create = function (c, d, e) {
		var f = a.E(c);
		if (f == null)throw"swf: [" + c + "] 鏈壘鍒�";
		var g = b(d, e);
		f.innerHTML = g.html;
		return a.E(g.id)
	};
	c.html = function (a, c) {
		var d = b(a, c);
		return d.html
	};
	c.check = function () {
		var b = -1;
		if (a.IE)try {
			var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			b = c.GetVariable("$version")
		} catch (d) {
		} else navigator.plugins["Shockwave Flash"] && (b = navigator.plugins["Shockwave Flash"].description);
		return b
	};
	return c
});
STK.register("core.util.storage", function (a) {
	var b = window.localStorage;
	if (b)return {
		get: function (a) {
			return unescape(b.getItem(a))
		}, set: function (a, c, d) {
			b.setItem(a, escape(c))
		}, del: function (a) {
			b.removeItem(a)
		}, clear: function () {
			b.clear()
		}, getAll: function () {
			var a = b.length, c = null, d = [];
			for (var e = 0; e < a; e++) {
				c = b.key(e);
				d.push(c + "=" + this.getKey(c))
			}
			return d.join("; ")
		}
	};
	if (window.ActiveXObject) {
		var c = document.documentElement, d = "localstorage";
		try {
			c.addBehavior("#default#userdata");
			c.save("localstorage")
		} catch (e) {
		}
		return {
			set: function (a, b) {
				c.setAttribute(a, b);
				c.save(d)
			}, get: function (a) {
				c.load(d);
				return c.getAttribute(a)
			}, del: function (a) {
				c.removeAttribute(a);
				c.save(d)
			}
		}
	}
	return {
		get: function (a) {
			var b = document.cookie.split("; "), c = b.length, d = [];
			for (var e = 0; e < c; e++) {
				d = b[e].split("=");
				if (a === d[0])return unescape(d[1])
			}
			return null
		}, set: function (a, b, c) {
			if (!(c && c instanceof Date)) {
				c = new Date;
				c.setDate(c.getDate() + 1)
			}
			document.cookie = a + "=" + escape(b) + "; expires=" + c.toGMTString()
		}, del: function (a) {
			document.cookie = a + "=''; expires=Fri, 31 Dec 1999 23:59:59 GMT;"
		}, clear: function () {
			var a = document.cookie.split("; "), b = a.length, c = [];
			for (var d = 0; d < b; d++) {
				c = a[d].split("=");
				this.deleteKey(c[0])
			}
		}, getAll: function () {
			return unescape(document.cookie.toString())
		}
	}
});
(function () {
	var a = STK.core, b = {
		tween: "core.ani.tween",
		tweenArche: "core.ani.tweenArche",
		arrCopy: "core.arr.copy",
		arrClear: "core.arr.clear",
		hasby: "core.arr.hasby",
		unique: "core.arr.unique",
		foreach: "core.arr.foreach",
		isArray: "core.arr.isArray",
		inArray: "core.arr.inArray",
		arrIndexOf: "core.arr.indexOf",
		findout: "core.arr.findout",
		domNext: "core.dom.next",
		domPrev: "core.dom.prev",
		isNode: "core.dom.isNode",
		addHTML: "core.dom.addHTML",
		insertHTML: "core.dom.insertHTML",
		setXY: "core.dom.setXY",
		contains: "core.dom.contains",
		position: "core.dom.position",
		trimNode: "core.dom.trimNode",
		insertAfter: "core.dom.insertAfter",
		insertBefore: "core.dom.insertBefore",
		removeNode: "core.dom.removeNode",
		replaceNode: "core.dom.replaceNode",
		Ready: "core.dom.ready",
		setStyle: "core.dom.setStyle",
		setStyles: "core.dom.setStyles",
		getStyle: "core.dom.getStyle",
		addClassName: "core.dom.addClassName",
		hasClassName: "core.dom.hasClassName",
		removeClassName: "core.dom.removeClassName",
		builder: "core.dom.builder",
		cascadeNode: "core.dom.cascadeNode",
		selector: "core.dom.selector",
		sizzle: "core.dom.sizzle",
		addEvent: "core.evt.addEvent",
		custEvent: "core.evt.custEvent",
		removeEvent: "core.evt.removeEvent",
		fireEvent: "core.evt.fireEvent",
		fixEvent: "core.evt.fixEvent",
		getEvent: "core.evt.getEvent",
		stopEvent: "core.evt.stopEvent",
		delegatedEvent: "core.evt.delegatedEvent",
		preventDefault: "core.evt.preventDefault",
		hotKey: "core.evt.hotKey",
		memorize: "core.func.memorize",
		bind: "core.func.bind",
		getType: "core.func.getType",
		methodBefore: "core.func.methodBefore",
		timedChunk: "core.func.timedChunk",
		funcEmpty: "core.func.empty",
		ajax: "core.io.ajax",
		jsonp: "core.io.jsonp",
		ijax: "core.io.ijax",
		scriptLoader: "core.io.scriptLoader",
		require: "core.io.require",
		jsonInclude: "core.json.include",
		jsonCompare: "core.json.compare",
		jsonClone: "core.json.clone",
		jsonToQuery: "core.json.jsonToQuery",
		queryToJson: "core.json.queryToJson",
		jsonToStr: "core.json.jsonToStr",
		strToJson: "core.json.strToJson",
		objIsEmpty: "core.obj.isEmpty",
		beget: "core.obj.beget",
		cascade: "core.obj.cascade",
		objSup: "core.obj.sup",
		parseParam: "core.obj.parseParam",
		bLength: "core.str.bLength",
		dbcToSbc: "core.str.dbcToSbc",
		leftB: "core.str.leftB",
		trim: "core.str.trim",
		encodeHTML: "core.str.encodeHTML",
		decodeHTML: "core.str.decodeHTML",
		parseURL: "core.str.parseURL",
		parseHTML: "core.str.parseHTML",
		queryString: "core.str.queryString",
		htmlToJson: "core.util.htmlToJson",
		cookie: "core.util.cookie",
		drag: "core.util.drag",
		timer: "core.util.timer",
		jobsM: "core.util.jobsM",
		listener: "core.util.listener",
		winSize: "core.util.winSize",
		pageSize: "core.util.pageSize",
		templet: "core.util.templet",
		queue: "core.util.queue",
		stack: "core.util.stack",
		swf: "core.util.swf",
		URL: "core.util.URL",
		scrollPos: "core.util.scrollPos",
		scrollTo: "core.util.scrollTo",
		getUniqueKey: "core.util.getUniqueKey",
		storage: "core.util.storage",
		pageletM: "core.util.pageletM"
	};
	for (var c in b)STK.shortRegister(b[c], c, "theia");
	var d = "theia_1_1"
})();
STK.register("kit.extra.language", function (a) {
	window.$LANG || (window.$LANG = {});
	return function (b) {
		var c = [].splice.call(arguments, 1, arguments.length), d = [b, $LANG].concat(c), e = a.core.util.language.apply(this, d);
		return e
	}
});
STK.register("kit.extra.reuse", function (a) {
	return function (b, c) {
		var d, e, f;
		d = a.parseParam({}, c);
		f = [];
		var g = function () {
			var a = b();
			f.push({store: a, used: !0});
			return a
		}, h = function (b) {
			a.foreach(f, function (a, c) {
				if (b === a.store) {
					a.used = !0;
					return !1
				}
			})
		}, i = function (b) {
			a.foreach(f, function (a, c) {
				if (b === a.store) {
					a.used = !1;
					return !1
				}
			})
		}, j = function () {
			for (var a = 0, b = f.length; a < b; a += 1)if (f[a].used === !1) {
				f[a].used = !0;
				return f[a].store
			}
			return g()
		};
		e = {};
		e.setUsed = h;
		e.setUnused = i;
		e.getOne = j;
		e.getLength = function () {
			return f.length
		};
		return e
	}
});
STK.register("ui.mod.layer", function (a) {
	var b = function (a) {
		var b = {};
		if (a.style.display == "none") {
			a.style.visibility = "hidden";
			a.style.display = "";
			b.w = a.offsetWidth;
			b.h = a.offsetHeight;
			a.style.display = "none";
			a.style.visibility = "visible"
		} else {
			b.w = a.offsetWidth;
			b.h = a.offsetHeight
		}
		return b
	}, c = function (c, d) {
		d = d || "topleft";
		var e = null;
		if (c.style.display == "none") {
			c.style.visibility = "hidden";
			c.style.display = "";
			e = a.core.dom.position(c);
			c.style.display = "none";
			c.style.visibility = "visible"
		} else e = a.core.dom.position(c);
		if (d !== "topleft") {
			var f = b(c);
			if (d === "topright")e.l = e.l + f.w; else if (d === "bottomleft")e.t = e.t + f.h; else if (d === "bottomright") {
				e.l = e.l + f.w;
				e.t = e.t + f.h
			}
		}
		return e
	};
	return function (d) {
		var e = a.core.dom.builder(d), f = e.list.outer[0], g = e.list.inner[0], h = a.core.dom.uniqueID(f), i = {}, j = a.core.evt.custEvent.define(i, "show");
		a.core.evt.custEvent.define(j, "hide");
		var k = null;
		i.show = function () {
			f.style.display = "";
			a.core.evt.custEvent.fire(j, "show");
			return i
		};
		i.hide = function () {
			f.style.display = "none";
			a.custEvent.fire(j, "hide");
			return i
		};
		i.getPosition = function (a) {
			return c(f, a)
		};
		i.getSize = function (a) {
			if (a || !k)k = b.apply(i, [f]);
			return k
		};
		i.html = function (a) {
			a !== undefined && (g.innerHTML = a);
			return g.innerHTML
		};
		i.text = function (b) {
			b !== undefined && (g.innerHTML = a.core.str.encodeHTML(b));
			return a.core.str.decodeHTML(g.innerHTML)
		};
		i.appendChild = function (a) {
			g.appendChild(a);
			return i
		};
		i.getUniqueID = function () {
			return h
		};
		i.getOuter = function () {
			return f
		};
		i.getInner = function () {
			return g
		};
		i.getParentNode = function () {
			return f.parentNode
		};
		i.getDomList = function () {
			return e.list
		};
		i.getDomListByKey = function (a) {
			return e.list[a]
		};
		i.getDom = function (a, b) {
			return e.list[a] ? e.list[a][b || 0] : !1
		};
		i.getCascadeDom = function (b, c) {
			return e.list[b] ? a.core.dom.cascadeNode(e.list[b][c || 0]) : !1
		};
		return i
	}
});
STK.register("ui.mod.dialog", function (a) {
	return function (b, c) {
		if (!b)throw"ui.mod.dialog need template as first parameter";
		var d, e, f, g, h, i, j, k, l, m, n, o;
		l = !0;
		var p = function () {
			l !== !1 && e.hide()
		}, q = function () {
			d = a.parseParam({t: null, l: null, width: null, height: null}, c);
			e = a.ui.mod.layer(b, d);
			g = e.getOuter();
			h = e.getDom("title");
			k = e.getDom("title_content");
			i = e.getDom("inner");
			j = e.getDom("close");
			a.addEvent(j, "click", function (b) {
				a.preventDefault(b);
				n();
				return !1
			});
			a.custEvent.add(e, "show", function () {
				a.hotKey.add(document.documentElement, ["esc"], p, {type: "keyup", disableInInput: !0})
			});
			a.custEvent.add(e, "hide", function () {
				a.hotKey.remove(document.documentElement, ["esc"], p, {type: "keyup"});
				l = !0
			})
		};
		q();
		o = a.objSup(e, ["show", "hide"]);
		n = function (b) {
			if (typeof m == "function" && !b && m() === !1)return !1;
			o.hide();
			a.contains(document.body, e.getOuter()) && document.body.removeChild(e.getOuter());
			return f
		};
		f = e;
		f.show = function () {
			a.contains(document.body, e.getOuter()) || document.body.appendChild(e.getOuter());
			o.show();
			return f
		};
		f.hide = n;
		f.setPosition = function (a) {
			g.style.top = a.t + "px";
			g.style.left = a.l + "px";
			return f
		};
		f.setMiddle = function () {
			var b = a.core.util.winSize(), c = e.getSize(!0), d = a.core.util.scrollPos().top + (b.height - c.h) / 2;
			g.style.top = (d > 0 ? d : 0) + "px";
			g.style.left = (b.width - c.w) / 2 + "px";
			return f
		};
		f.setTitle = function (a) {
			k.innerHTML = a;
			return f
		};
		f.setContent = function (a) {
			typeof a == "string" ? i.innerHTML = a : i.appendChild(a);
			return f
		};
		f.clearContent = function () {
			while (i.children.length)a.removeNode(i.children[0]);
			return f
		};
		f.setAlign = function () {
		};
		f.setBeforeHideFn = function (a) {
			m = a
		};
		f.clearBeforeHideFn = function () {
			m = null
		};
		f.unsupportEsc = function () {
			l = !1
		};
		f.supportEsc = function () {
			l = !0
		};
		return f
	}
});
STK.register("kit.dom.fix", function (a) {
	function f(c, e, f) {
		if (!!d(c)) {
			var g = "fixed", h, i, j, k, l = c.offsetWidth, m = c.offsetHeight, n = a.core.util.winSize(), o = 0, p = 0, q = a.core.dom.cssText(c.style.cssText);
			if (!b) {
				g = "absolute";
				var r = a.core.util.scrollPos();
				o = h = r.top;
				p = i = r.left;
				switch (e) {
					case"lt":
						h += f[1];
						i += f[0];
						break;
					case"lb":
						h += n.height - m - f[1];
						i += f[0];
						break;
					case"rt":
						h += f[1];
						i += n.width - l - f[0];
						break;
					case"rb":
						h += n.height - m - f[1];
						i += n.width - l - f[0];
						break;
					case"c":
					default:
						h += (n.height - m) / 2 + f[1];
						i += (n.width - l) / 2 + f[0]
				}
				j = k = ""
			} else {
				h = k = f[1];
				i = j = f[0];
				switch (e) {
					case"lt":
						k = j = "";
						break;
					case"lb":
						h = j = "";
						break;
					case"rt":
						i = k = "";
						break;
					case"rb":
						h = i = "";
						break;
					case"c":
					default:
						h = (n.height - m) / 2 + f[1];
						i = (n.width - l) / 2 + f[0];
						k = j = ""
				}
			}
			if (e == "c") {
				h < o && (h = o);
				i < p && (i = p)
			}
			q.push("position", g).push("top", h + "px").push("left", i + "px").push("right", j + "px").push("bottom", k + "px");
			c.style.cssText = q.getCss()
		}
	}

	function e(b) {
		b = a.core.arr.isArray(b) ? b : [0, 0];
		for (var c = 0; c < 2; c++)typeof b[c] != "number" && (b[c] = 0);
		return b
	}

	function d(b) {
		return a.core.dom.getStyle(b, "display") != "none"
	}

	var b = !(a.core.util.browser.IE6 || document.compatMode !== "CSS1Compat" && STK.IE), c = /^(c)|(lt)|(lb)|(rt)|(rb)$/;
	return function (d, g, h) {
		var i, j, k = !0, l;
		if (a.core.dom.isNode(d) && c.test(g)) {
			var m = {
				getNode: function () {
					return d
				}, isFixed: function () {
					return k
				}, setFixed: function (a) {
					(k = !!a) && f(d, i, j);
					return this
				}, setAlign: function (a, b) {
					if (c.test(a)) {
						i = a;
						j = e(b);
						k && f(d, i, j)
					}
					return this
				}, destroy: function () {
					b || b && a.core.evt.removeEvent(window, "scroll", n);
					a.core.evt.removeEvent(window, "resize", n);
					a.core.evt.custEvent.undefine(l)
				}
			};
			l = a.core.evt.custEvent.define(m, "beforeFix");
			m.setAlign(g, h);
			function n(c) {
				c = c || window.event;
				a.core.evt.custEvent.fire(l, "beforeFix", c.type);
				k && (!b || i == "c") && f(d, i, j)
			}

			b || a.core.evt.addEvent(window, "scroll", n);
			a.core.evt.addEvent(window, "resize", n);
			return m
		}
	}
});
STK.register("ui.mask", function (a) {
	function k(b) {
		var c;
		(c = b.getAttribute(f)) || b.setAttribute(f, c = a.getUniqueKey());
		return ">" + b.tagName.toLowerCase() + "[" + f + '="' + c + '"]'
	}

	function j() {
		b = a.C("div");
		var c = '<div node-type="outer">';
		a.core.util.browser.IE6 && (c += '<div style="position:absolute;width:100%;height:100%;"></div>');
		c += "</div>";
		b = a.builder(c).list.outer[0];
		document.body.appendChild(b);
		e = !0;
		d = a.kit.dom.fix(b, "lt");
		var f = function () {
			var c = a.core.util.winSize();
			b.style.cssText = a.core.dom.cssText(b.style.cssText).push("width", c.width + "px").push("height", c.height + "px").getCss()
		};
		i.add(d, "beforeFix", f);
		f()
	}

	var b, c = [], d, e = !1, f = "STK-Mask-Key", g = a.core.dom.setStyle, h = a.core.dom.getStyle, i = a.core.evt.custEvent, l = {
		getNode: function () {
			return b
		}, show: function (c, f) {
			if (e) {
				c = a.core.obj.parseParam({opacity: .3, background: "#000000"}, c);
				b.style.background = c.background;
				g(b, "opacity", c.opacity);
				b.style.display = "";
				d.setAlign("lt");
				f && f()
			} else {
				j();
				l.show(c, f)
			}
			return l
		}, hide: function () {
			b.style.display = "none";
			c = [];
			return l
		}, showUnderNode: function (d, e) {
			a.isNode(d) && l.show(e, function () {
				g(b, "zIndex", h(d, "zIndex"));
				var e = k(d), f = a.core.arr.indexOf(c, e);
				f != -1 && c.splice(f, 1);
				c.push(e);
				a.core.dom.insertElement(d, b, "beforebegin")
			});
			return l
		}, back: function () {
			if (c.length < 1)return l;
			var d, e;
			c.pop();
			if (c.length < 1)l.hide(); else if ((e = c[c.length - 1]) && (d = a.sizzle(e, document.body)[0])) {
				g(b, "zIndex", h(d, "zIndex"));
				a.core.dom.insertElement(d, b, "beforebegin")
			} else l.back();
			return l
		}, destroy: function () {
			i.remove(d);
			b.style.display = "none"
		}
	};
	return l
});
STK.register("kit.dom.drag", function (a) {
	return function (b, c) {
		var d, e, f, g, h, i, j, k, l = function () {
			m();
			n()
		}, m = function () {
			d = a.parseParam({
				moveDom: b,
				perchStyle: "border:solid #999999 2px;",
				dragtype: "perch",
				actObj: {},
				pagePadding: 5
			}, c);
			f = d.moveDom;
			e = {};
			g = {};
			h = a.drag(b, {actObj: d.actObj});
			if (d.dragtype === "perch") {
				i = a.C("div");
				j = !1;
				k = !1;
				f = i
			}
			b.style.cursor = "move"
		}, n = function () {
			a.custEvent.add(d.actObj, "dragStart", o);
			a.custEvent.add(d.actObj, "dragEnd", p);
			a.custEvent.add(d.actObj, "draging", q)
		}, o = function (c, e) {
			document.body.style.cursor = "move";
			var f = a.core.util.pageSize().page;
			g = a.core.dom.position(d.moveDom);
			g.pageX = e.pageX;
			g.pageY = e.pageY;
			g.height = d.moveDom.offsetHeight;
			g.width = d.moveDom.offsetWidth;
			g.pageHeight = f.height;
			g.pageWidth = f.width;
			if (d.dragtype === "perch") {
				var h = [];
				h.push(d.perchStyle);
				h.push("position:absolute");
				h.push("z-index:" + (d.moveDom.style.zIndex + 10));
				h.push("width:" + d.moveDom.offsetWidth + "px");
				h.push("height:" + d.moveDom.offsetHeight + "px");
				h.push("left:" + g.l + "px");
				h.push("top:" + g.t + "px");
				i.style.cssText = h.join(";");
				k = !0;
				setTimeout(function () {
					if (k) {
						document.body.appendChild(i);
						j = !0
					}
				}, 100)
			}
			b.setCapture !== undefined && b.setCapture()
		}, p = function (a, c) {
			document.body.style.cursor = "auto";
			b.setCapture !== undefined && b.releaseCapture();
			if (d.dragtype === "perch") {
				k = !1;
				d.moveDom.style.top = i.style.top;
				d.moveDom.style.left = i.style.left;
				if (j) {
					document.body.removeChild(i);
					j = !1
				}
			}
		}, q = function (a, b) {
			var c = g.t + (b.pageY - g.pageY), e = g.l + (b.pageX - g.pageX), h = c + g.height, i = e + g.width, j = g.pageHeight - d.pagePadding, k = g.pageWidth - d.pagePadding;
			if (h < j && c > 0)f.style.top = c + "px"; else {
				var l;
				h >= j && (l = j - g.height);
				if (c < 0 || l < 0)l = 0;
				f.style.top = l + "px"
			}
			if (i < k && e > 0)f.style.left = e + "px"; else {
				e < 0 && (f.style.left = "0px");
				i >= k && (f.style.left = k - g.width + "px")
			}
		};
		l();
		e.destroy = function () {
			document.body.style.cursor = "auto";
			typeof f.setCapture == "function" && f.releaseCapture();
			if (d.dragtype === "perch") {
				k = !1;
				if (j) {
					document.body.removeChild(i);
					j = !1
				}
			}
			a.custEvent.remove(d.actObj, "dragStart", o);
			a.custEvent.remove(d.actObj, "dragEnd", p);
			a.custEvent.remove(d.actObj, "draging", q);
			h.destroy && h.destroy();
			d = null;
			f = null;
			g = null;
			h = null;
			i = null;
			j = null;
			k = null
		};
		e.getActObj = function () {
			return d.actObj
		};
		return e
	}
});
STK.register("ui.dialog", function (a) {
	var b = '<div class="W_layer" node-type="outer" style="display:none;position:absolute;z-index:10001"><div class="bg"><table border="0" cellspacing="0" cellpadding="0"><tr><td><div class="content" node-type="layoutContent"><div class="title" node-type="title"><span node-type="title_content"></span></div><a href="javascript:void(0);" class="W_close" title="#L{关闭}" node-type="close"></a><div node-type="inner"></div></div></td></tr></table></div></div>', c = a.kit.extra.language, d = null, e, f = function () {
		var b = a.ui.mod.dialog(c(e.template));
		a.custEvent.add(b, "show", function () {
			a.ui.mask.showUnderNode(b.getOuter())
		});
		a.custEvent.add(b, "hide", function () {
			a.ui.mask.back();
			b.setMiddle()
		});
		a.kit.dom.drag(b.getDom("title"), {actObj: b, moveDom: b.getOuter()});
		b.destroy = function () {
			g(b);
			try {
				b.hide(!0)
			} catch (a) {
			}
		};
		return b
	}, g = function (a) {
		a.setTitle("").clearContent();
		d.setUnused(a)
	};
	return function (c) {
		e = a.parseParam({template: b, isHold: !1}, c);
		var h = e.isHold;
		e = a.core.obj.cut(e, ["isHold"]);
		d || (d = a.kit.extra.reuse(f));
		var i = d.getOne();
		h || a.custEvent.add(i, "hide", function () {
			a.custEvent.remove(i, "hide", arguments.callee);
			g(i)
		});
		return i
	}
});
STK.register("ui.alert", function (a) {
	var b = '<div node-type="outer" class="layer_point"><dl class="point clearfix"><dt><span class="" node-type="icon"></span></dt><dd node-type="inner"><p class="S_txt1" node-type="textLarge"></p><p class="S_txt2" node-type="textSmall"></p></dd></dl><div class="btn"><a href="javascript:void(0)" class="W_btn_d" node-type="OK"></a></div></div>', c = {
		success: "icon_succM",
		error: "icon_errorM",
		warn: "icon_warnM",
		"delete": "icon_delM",
		question: "icon_questionM"
	}, d = a.kit.extra.language, e = null, f = function (a, b) {
		a.getDom("icon").className = b.icon;
		a.getDom("textLarge").innerHTML = b.textLarge;
		a.getDom("textSmall").innerHTML = b.textSmall;
		a.getDom("OK").innerHTML = "<span>" + b.OKText + "</span>"
	};
	return function (g, h) {
		var i, j, k, l, m;
		i = a.parseParam({
			title: d("#L{提示}"),
			icon: "warn",
			textLarge: g,
			textSmall: "",
			OK: a.funcEmpty,
			OKText: d("#L{确定}"),
			timeout: 0
		}, h);
		i.icon = c[i.icon];
		j = {};
		e || (e = a.kit.extra.reuse(function () {
			var c = a.ui.mod.layer(d(b));
			return c
		}));
		k = e.getOne();
		l = a.ui.dialog();
		l.setContent(k.getOuter());
		l.setTitle(i.title);
		f(k, i);
		var n = function (b) {
			a.preventDefault(b);
			l.hide()
		};
		a.addEvent(k.getDom("OK"), "click", n);
		a.custEvent.add(l, "hide", function () {
			a.custEvent.remove(l, "hide", arguments.callee);
			a.removeEvent(k.getDom("OK"), "click", n);
			e.setUnused(k);
			clearTimeout(m);
			i.OK()
		});
		i.timeout && (m = setTimeout(l.hide, i.timeout));
		l.show().setMiddle();
		k.getDom("OK").focus();
		j.alt = k;
		j.dia = l;
		return j
	}
});
STK.register("ui.confirm", function (a) {
	var b = '<div node-type="outer" class="layer_point"><dl class="point clearfix"><dt><span class="" node-type="icon"></span></dt><dd node-type="inner"><p class="S_txt1" node-type="textLarge"></p><p class="S_txt2" node-type="textComplex"></p><p class="S_txt2" node-type="textSmall"></p></dd></dl><div class="btn"><a href="javascript:void(0)" class="W_btn_d" node-type="OK"></a><a href="javascript:void(0)" class="W_btn_b" node-type="cancel"></a></div></div>', c = {
		success: "icon_succM",
		error: "icon_errorM",
		warn: "icon_warnM",
		"delete": "icon_delM",
		question: "icon_questionM"
	}, d = a.kit.extra.language, e = null;
	return function (f, g) {
		var h, i, j, k, l, m;
		h = a.parseParam({
			title: d("#L{提示}"),
			icon: "question",
			textLarge: f,
			textComplex: "",
			textSmall: "",
			OK: a.funcEmpty,
			OKText: d("#L{确定}"),
			cancel: a.funcEmpty,
			cancelText: d("#L{取消}")
		}, g);
		h.icon = c[h.icon];
		i = {};
		e || (e = a.kit.extra.reuse(function () {
			var c = a.ui.mod.layer(b);
			return c
		}));
		j = e.getOne();
		k = a.ui.dialog();
		k.setContent(j.getOuter());
		j.getDom("icon").className = h.icon;
		j.getDom("textLarge").innerHTML = h.textLarge;
		j.getDom("textComplex").innerHTML = h.textComplex;
		j.getDom("textSmall").innerHTML = h.textSmall;
		j.getDom("OK").innerHTML = "<span>" + h.OKText + "</span>";
		j.getDom("cancel").innerHTML = "<span>" + h.cancelText + "</span>";
		k.setTitle(h.title);
		var n = function () {
			l = !0;
			m = a.htmlToJson(j.getDom("textComplex"));
			k.hide()
		};
		a.addEvent(j.getDom("OK"), "click", n);
		a.addEvent(j.getDom("cancel"), "click", k.hide);
		a.custEvent.add(k, "hide", function () {
			a.custEvent.remove(k, "hide", arguments.callee);
			a.removeEvent(j.getDom("OK"), "click", n);
			a.removeEvent(j.getDom("cancel"), "click", k.hide);
			e.setUnused(j);
			l ? h.OK(m) : h.cancel(m)
		});
		k.show().setMiddle();
		j.getDom("OK").focus();
		i.cfm = j;
		i.dia = k;
		return i
	}
});
STK.register("kit.io.ajax", function (a) {
	var b = function (b, c, d) {
		c = c | 0 || 1;
		d = d || "fail";
		var e = b.args;
		e.__rnd && delete e.__rnd;
		(new Image).src = "http://weibolog.sinaapp.com/?t=" + c + "&u=" + encodeURIComponent(b.url) + "&p=" + encodeURIComponent(a.core.json.jsonToQuery(e)) + "&m=" + d
	};
	return function (c) {
		var d = {}, e = [], f = null, g = !1, h = a.parseParam({
			url: "",
			method: "get",
			responseType: "json",
			timeout: 3e4,
			onTraning: a.funcEmpty,
			isEncode: !0
		}, c);
		h.onComplete = function (a) {
			g = !1;
			c.onComplete(a, h.args);
			setTimeout(i, 0)
		};
		h.onFail = function (a) {
			g = !1;
			if (typeof c.onFail == "function")try {
				c.onFail(a, h.args)
			} catch (d) {
			}
			setTimeout(i, 0);
			try {
				b(h)
			} catch (d) {
			}
		};
		h.onTimeout = function (a) {
			try {
				b(h);
				c.onTimeout(a)
			} catch (d) {
			}
		};
		var i = function () {
			if (!!e.length) {
				if (g === !0)return;
				g = !0;
				h.args = e.shift();
				if (h.method.toLowerCase() == "post") {
					var b = a.core.util.URL(h.url);
					b.setParam("__rnd", +(new Date));
					h.url = b.toString()
				}
				f = a.ajax(h)
			}
		}, j = function (a) {
			while (e.length)e.shift();
			g = !1;
			if (f)try {
				f.abort()
			} catch (b) {
			}
			f = null
		};
		d.request = function (a) {
			a || (a = {});
			c.noQueue && j();
			if (!c.uniqueRequest || !f) {
				e.push(a);
				a._t = 0;
				i()
			}
		};
		d.abort = j;
		return d
	}
});
STK.register("kit.io.jsonp", function (a) {
	return function (b) {
		var c = a.parseParam({
			url: "",
			method: "get",
			responseType: "json",
			varkey: "_v",
			timeout: 3e4,
			onComplete: a.funcEmpty,
			onTraning: a.funcEmpty,
			onFail: a.funcEmpty,
			isEncode: !0
		}, b), d = [], e = {}, f = !1, g = function () {
			if (!!d.length) {
				if (f === !0)return;
				f = !0;
				e.args = d.shift();
				e.onComplete = function (a) {
					f = !1;
					c.onComplete(a, e.args);
					setTimeout(g, 0)
				};
				e.onFail = function (a) {
					f = !1;
					c.onFail(a);
					setTimeout(g, 0)
				};
				a.jsonp(a.core.json.merge(c, {
					args: e.args, onComplete: function (a) {
						e.onComplete(a)
					}, onFail: function (a) {
						try {
							e.onFail(a)
						} catch (b) {
						}
					}
				}))
			}
		}, h = {};
		h.request = function (a) {
			a || (a = {});
			d.push(a);
			a._t = 1;
			g()
		};
		h.abort = function (a) {
			while (d.length)d.shift();
			f = !1;
			e = null
		};
		return h
	}
});
STK.register("kit.io.ijax", function (a) {
	return function (b) {
		var c = a.parseParam({
			url: "",
			timeout: 3e4,
			isEncode: !0,
			abaurl: null,
			responseName: null,
			varkey: "callback",
			abakey: "callback"
		}, b), d = [], e = null, f = !1;
		c.onComplete = function (a, d) {
			f = !1;
			b.onComplete(a, c.form, d);
			c.form = null;
			c.args = null;
			setTimeout(g, 0)
		};
		c.onFail = function (a, d) {
			f = !1;
			b.onFail(a, c.form, d);
			c.form = null;
			c.args = null;
			setTimeout(g, 0)
		};
		var g = function () {
			var b;
			if (!!d.length) {
				if (f === !0)return;
				f = !0;
				b = d.shift();
				c.args = b.args;
				c.form = b.form;
				e = a.ijax(c)
			}
		}, h = function (a) {
			while (d.length)d.shift();
			f = !1;
			if (e)try {
				e.abort()
			} catch (b) {
			}
			e = null
		}, i = {};
		i.request = function (c, e) {
			if (!a.isNode(c))throw"[kit.io.ijax.request] need a form as first parameter";
			e || (e = {});
			b.noQueue && h();
			d.push({form: c, args: e});
			g()
		};
		i.abort = h;
		return i
	}
});
STK.register("kit.io.inter", function (a) {
	var b = a.core.json.merge;
	return function () {
		var c = {}, d = {}, e = {}, f = function (a, b) {
			return function (c, d) {
				try {
					b.onComplete(c, d)
				} catch (f) {
				}
				try {
					if (c.code === "100000")b.onSuccess(c, d); else {
						if (c.code === "100002") {
							location.href = c.data;
							return
						}
						b.onError(c, d)
					}
				} catch (f) {
				}
				for (var g in e[a])try {
					e[a][g](c, d)
				} catch (f) {
				}
			}
		};
		c.register = function (a, b) {
			if (typeof d[a] != "undefined")throw a + " registered";
			d[a] = b;
			e[a] = {}
		};
		c.addHook = function (b, c) {
			var d = a.core.util.getUniqueKey();
			e[b][d] = c;
			return d
		};
		c.rmHook = function (a, b) {
			e[a] && e[a][b] && delete e[a][b]
		};
		c.getTrans = function (c, e) {
			var g = b(d[c], e);
			g.onComplete = f(c, e);
			var h = d[c].requestMode, i = "ajax";
			if (h === "jsonp" || h === "ijax")i = h;
			return a.kit.io[i](g)
		};
		c.request = function (c, e, g) {
			var h = b(d[c], e);
			h.onComplete = f(c, e);
			h = a.core.obj.cut(h, ["noqueue"]);
			h.args = g;
			var i = d[c].requestMode;
			return i === "jsonp" ? a.jsonp(h) : i === "ijax" ? a.ijax(h) : a.ajax(h)
		};
		return c
	}
});
STK.register("common.trans.global", function (a) {
	var b = a.kit.io.inter(), c = b.register;
	c("language", {url: "/aj/user/lang?_wv=5", method: "post"});
	c("followList", {url: "/aj/mblog/attention?_wv=5"});
	c("topicList", {url: "/aj/mblog/topic?_wv=5"});
	c("myFollowList", {url: "/aj/relation/attention?_wv=5"});
	c("closetipsbar", {url: "/aj/tipsbar/closetipsbar?_wv=5", method: "post"});
	c("weiqunnew", {url: "/ajm/weiqun?action=aj_remindunread"});
	c("quiet_suggest", {url: "/aj/f/lenovo?ct=10&_wv=5", method: "get"});
	return b
});
STK.register("pl.base.lang.source.main", function (a) {
	var b = a.kit.extra.language, c;
	return function (d) {
		if (!c) {
			var e, f = {
				init: function () {
					f.pars();
					f.bind()
				}, pars: function () {
					c = {};
					e = a.parseParam({login: 1}, a.queryToJson(d.getAttribute("action-data") || ""));
					e.login = parseInt(e.login)
				}, bind: function () {
					a.addEvent(d, "change", h.change)
				}, destroy: function () {
					a.removeEvent(d, "change", h.change)
				}
			}, g = function () {
				var b = function (a) {
					window.location.reload()
				}, c = function (b) {
					a.ui.alert(b.msg)
				}, d = a.common.trans.global.getTrans("language", {onSuccess: b, onError: c});
				return function (a) {
					d.request({lang: a})
				}
			}(), h = {
				change: function () {
					var c = d.value, f = d.options[d.selectedIndex];
					a.ui.confirm(b("#L{确认切换到}") + f.innerHTML + b("#L{版吗？}"), {
						OK: function () {
							a.preventDefault();
							if (e.login)g(c); else {
								var b = window.location.href;
								/\?/.test(b) ? /(\?|\&)lang=([^&]+)/.test(b) ? b = b.replace(/(\?|\&)lang=([^&]+)/, "$1lang=" + c) : b = b + "&lang=" + c : b = b + "?lang=" + c;
								window.location.href = b
							}
						}, cancel: function () {
							a.preventDefault();
							d.value = $CONFIG.lang
						}
					})
				}
			};
			f.init();
			c.destroy = a.core.func.empty;
			return c
		}
		return c
	}
});
STK.pageletM.register("pl.base.lang.index", function (a) {
	return a.pl.base.lang.source.main(a.E("pl_content_changeLanguage"))
});
function SSOController() {
	var undefined, me = this, updateCookieTimer = null, updateCookieTimeHardLimit = 1800, cookieExpireTimeLength = 86400, crossDomainForward = null, crossDomainTimer = null, crossDomainTime = 3, autoLoginCallBack2 = null, ssoCrosssDomainUrl = "http://login.sina.com.cn/sso/crossdomain.php", ssoLoginUrl = "http://login.sina.com.cn/sso/login.php", ssoLogoutUrl = "http://login.sina.com.cn/sso/logout.php", ssoUpdateCookieUrl = "http://login.sina.com.cn/sso/updatetgt.php", ssoPreLoginUrl = "http://login.sina.com.cn/sso/prelogin.php", pincodeUrl = "http://login.sina.com.cn/cgi/pin.php", vfValidUrl = "http://weibo.com/sguide/vdun.php", generateVisitorUrl = "http://passport.weibo.com/visitor/visitor", crossDomainUrlList = null, loginMethod = "", ssoServerTimeTimer = null, ssoLoginTimer = null, loginByConfig = null, loginMethodCheck = null, https = 1, rsa = 2, wsse = 4, pcid = "", tmpData = {}, preloginTimeStart = 0, preloginTime = 0, callbackLogoutStatus;
	this.https = 1;
	this.rsa = 2;
	this.wsse = 4;
	this.name = "sinaSSOController";
	this.loginFormId = "ssoLoginForm";
	this.scriptId = "ssoLoginScript";
	this.ssoCrossDomainScriptId = "ssoCrossDomainScriptId";
	this.loginFrameName = "ssoLoginFrame";
	this.appLoginURL = {"weibo.com": "https://passport.weibo.com/wbsso/login"};
	this.appDomainService = {"weibo.com": "miniblog"};
	this.loginExtraQuery = {};
	this.setDomain = !1;
	this.feedBackUrl = "";
	this.service = "sso";
	this.domain = "sina.com.cn";
	this.from = "";
	this.pageCharset = "GB2312";
	this.useTicket = !1;
	this.isCheckLoginState = !1;
	this.isUpdateCookieOnLoad = !0;
	this.useIframe = !0;
	this.noActiveTime = 7200;
	this.autoUpdateCookieTime = 1800;
	this.loginType = rsa;
	this.timeoutEnable = !1;
	this.loginTimeout = 5e3;
	this.crossDomain = !0;
	this.scriptLoginHttps = !1;
	this.allowAutoFoundServerTime = !1;
	this.allowAutoFoundServerTimeError = !0;
	this.calcServerTimeInterval = 2e3;
	this.servertime = null;
	this.nonce = null;
	this.rsaPubkey = null;
	this.rsakv = null;
	this.loginExtraFlag = {};
	this.cdult = !1;
	this.crossDomainTime = 5;
	this.failRedirect = !1;
	this.isGenerateVisitor = !0;
	this.generateVisitorProbability = 1;
	this.generateVisitorDelay = 6;
	this.generateVisitorDomain = ["^.*sina.com.cn$"];
	this.getVersion = function () {
		return "ssologin.js(v1.4.18) 2014-06-12"
	};
	this.getEntry = function () {
		return me.entry
	};
	this.getClientType = function () {
		return me.getVersion().split(" ")[0]
	};
	this.init = function () {
		if (getType(arguments[0]) === "object")return customPrepare(arguments[0]);
		me.setLoginType(me.loginType);
		var a = window.sinaSSOConfig;
		typeof a != "object" && (a = {});
		var b;
		for (b in a)me[b] = a[b];
		me.entry || (me.entry = me.service);
		me.isUpdateCookieOnLoad && setTimeout(me.name + ".updateCookie()", 1e4);
		me.isGenerateVisitor && self === top && Math.random() < me.generateVisitorProbability && location.protocol !== "https:" && setTimeout(me.name + ".generateVisitor()", me.generateVisitorDelay * 1e3);
		me.isCheckLoginState && addEventListener(window, "load", function () {
			me.checkLoginState()
		});
		me.allowAutoFoundServerTime && ssoLoginServerTime && me.setServerTime(ssoLoginServerTime);
		me.customInit()
	};
	this.getLoginInfo = function () {
		var a = getCookie("sso_info");
		if (!a)return {};
		try {
			return parse_str(sinaSSOEncoder.Cookie.decode(a))
		} catch (b) {
			return {}
		}
	};
	this.customInit = function () {
	};
	this.customUpdateCookieCallBack = function (a) {
	};
	this.customLoginCallBack = function (a) {
	};
	this.customLogoutCallBack = function (a) {
		me.customLoginCallBack({result: !1})
	};
	var customLogin, customPrepare, customLogout;
	(function () {
		var a = function () {
		}, b = {
			username: "",
			password: "",
			savestate: 0,
			vsnf: 0,
			vsnval: "",
			door: "",
			setCookie: 1,
			ssoSimpleLogin: 0,
			onComplete: a,
			onSuccess: a,
			onFailure: a
		}, c = {onComplete: a, onSuccess: a, onFailure: a}, d = {
			vsnf: "vsnf",
			vsnval: "vsnval",
			door: "door",
			setCookie: "s",
			ssoSimpleLogin: "ssosimplelogin"
		}, e = {}, f = {}, g = function (a, b) {
			var c, d = {};
			a = a || {};
			b = b || {};
			objMerge(d, a);
			for (c in b)a.hasOwnProperty(c) && (d[c] = b[c]);
			return d
		}, h = function (a, b, c) {
			typeof a[b] == "function" && a[b](c)
		};
		this.callbackLoginStatus = function (a) {
			me.customLoginCallBack(a);
			h(e, "onComplete", a);
			a && a.result === !0 ? h(e, "onSuccess", a) : h(e, "onFailure", a)
		};
		callbackLogoutStatus = function (a) {
			me.customLogoutCallBack(a);
			h(f, "onComplete", a);
			a && a.result === !0 ? h(f, "onSuccess", a) : h(f, "onFailure", a)
		};
		customPrepare = function (a) {
			var c;
			a = a || {};
			e = objMerge({
				entry: "sso",
				useTicket: !1,
				service: "sso",
				domain: "sina.com.cn",
				feedBackUrl: "",
				setDomain: !1,
				crossDomain: !0,
				name: "sinaSSOController"
			}, b);
			e = g(e, a);
			window[e.name] = window[e.name] || me;
			for (c in e)b.hasOwnProperty(c) || (me[c] = e[c]);
			me.loginExtraQuery = {};
			objMerge(me.loginExtraQuery, e.loginExtraQuery);
			for (c in d)e.hasOwnProperty(c) && (me.loginExtraQuery[d[c]] = e[c])
		};
		customLogin = function (a) {
			a = a || {};
			customPrepare(a);
			me.login(e.username, e.password, e.savestate)
		};
		customLogout = function (a) {
			a = a || {};
			f = objMerge({}, c);
			f = g(f, a);
			me.logout()
		}
	}).apply(this);
	this.login = function (a, b, c) {
		if (getType(arguments[0]) === "object")return customLogin(arguments[0]);
		ssoLoginTimer ? ssoLoginTimer.clear() : ssoLoginTimer = new prototypeTimer(me.timeoutEnable);
		ssoLoginTimer.start(me.loginTimeout, function () {
			ssoLoginTimer.clear();
			me.callbackLoginStatus({
				result: !1,
				errno: -1,
				reason: unescape("%u767B%u5F55%u8D85%u65F6%uFF0C%u8BF7%u91CD%u8BD5")
			})
		});
		c = c == undefined ? 0 : c;
		tmpData.savestate = c;
		loginByConfig = function () {
			if (!me.feedBackUrl && loginByXMLHttpRequest(a, b, c))return !0;
			if (me.useIframe && (me.setDomain || me.feedBackUrl)) {
				if (me.setDomain) {
					document.domain = me.domain;
					!me.feedBackUrl && me.domain != "sina.com.cn" && (me.feedBackUrl = makeURL(me.appLoginURL[me.domain], {domain: 1}))
				}
				loginMethod = "post";
				var d = loginByIframe(a, b, c);
				if (!d) {
					loginMethod = "get";
					me.scriptLoginHttps ? me.setLoginType(me.loginType | https) : me.setLoginType(me.loginType | rsa);
					loginByScript(a, b, c)
				}
			} else {
				loginMethod = "get";
				loginByScript(a, b, c)
			}
			me.nonce = null
		};
		loginMethodCheck = function () {
			if (me.loginType & wsse || me.loginType & rsa) {
				if (me.servertime) {
					me.nonce || (me.nonce = makeNonce(6));
					loginByConfig();
					return !0
				}
				me.getServerTime(a, loginByConfig)
			} else loginByConfig()
		};
		loginMethodCheck();
		return !0
	};
	this.prelogin = function (a, b) {
		var c = location.protocol == "https:" ? ssoPreLoginUrl.replace(/^http:/, "https:") : ssoPreLoginUrl, d = a.username || "";
		d = sinaSSOEncoder.base64.encode(urlencode(d));
		delete a.username;
		var e = {entry: me.entry, callback: me.name + ".preloginCallBack", su: d, rsakt: "mod"};
		c = makeURL(c, objMerge(e, a));
		me.preloginCallBack = function (a) {
			if (a && a.retcode == 0) {
				me.setServerTime(a.servertime);
				me.nonce = a.nonce;
				me.rsaPubkey = a.pubkey;
				me.rsakv = a.rsakv;
				pcid = a.pcid;
				preloginTime = (new Date).getTime() - preloginTimeStart - (parseInt(a.exectime, 10) || 0)
			}
			typeof b == "function" && b(a)
		};
		preloginTimeStart = (new Date).getTime();
		excuteScript(me.scriptId, c)
	};
	this.getServerTime = function (a, b) {
		if (me.servertime) {
			typeof b == "function" && b({retcode: 0, servertime: me.servertime});
			return !0
		}
		me.prelogin({username: a}, b)
	};
	this.logout = function () {
		try {
			if (getType(arguments[0]) === "object")return customLogout(arguments[0]);
			var a = {entry: me.getEntry(), callback: me.name + ".ssoLogoutCallBack"};
			try {
				a.sr = window.screen.width + "*" + window.screen.height
			} catch (b) {
			}
			var c = location.protocol == "https:" ? ssoLogoutUrl.replace(/^http:/, "https:") : ssoLogoutUrl;
			c = makeURL(c, a);
			excuteScript(me.scriptId, c)
		} catch (b) {
		}
		return !0
	};
	this.ssoLogoutCallBack = function (a) {
		a.arrURL && me.setCrossDomainUrlList(a);
		me.crossDomainAction("logout", function () {
			callbackLogoutStatus({result: !0})
		})
	};
	this.updateCookie = function () {
		try {
			if (me.autoUpdateCookieTime > 5) {
				updateCookieTimer != null && clearTimeout(updateCookieTimer);
				updateCookieTimer = setTimeout(me.name + ".updateCookie()", me.autoUpdateCookieTime * 1e3)
			}
			var a = me.getCookieExpireTime(), b = (new Date).getTime() / 1e3, c = {};
			a == null ? c = {retcode: 6102} : a < b ? c = {retcode: 6203} : a - cookieExpireTimeLength + updateCookieTimeHardLimit > b ? c = {retcode: 6110} : a - b > me.noActiveTime && (c = {retcode: 6111});
			if (c.retcode !== undefined) {
				me.customUpdateCookieCallBack(c);
				return !1
			}
			var d = location.protocol == "https:" ? ssoUpdateCookieUrl.replace(/^http:/, "https:") : ssoUpdateCookieUrl;
			d = makeURL(d, {entry: me.getEntry(), callback: me.name + ".updateCookieCallBack"});
			excuteScript(me.scriptId, d)
		} catch (e) {
		}
		return !0
	};
	this.setCrossDomainUrlList = function (a) {
		crossDomainUrlList = a
	};
	this.checkAltLoginName = function () {
		return !0
	};
	this.callFeedBackUrl = function (a) {
		try {
			var b = {callback: me.name + ".feedBackUrlCallBack"};
			a.ticket && (b.ticket = a.ticket);
			a.retcode !== undefined && (b.retcode = a.retcode);
			var c = makeURL(me.feedBackUrl, b);
			excuteScript(me.scriptId, c)
		} catch (d) {
		}
		return !0
	};
	this.loginCallBack = function (a) {
		try {
			if (me.timeoutEnable && !ssoLoginTimer.isset())return;
			ssoLoginTimer.clear();
			me.loginExtraFlag = {};
			var b = {}, c = a.ticket, d = a.uid;
			if (d) {
				b.result = !0;
				b.retcode = 0;
				b.userinfo = {uniqueid: a.uid};
				c && (b.ticket = c);
				a.cookie && (b.cookie = a.cookie);
				if (me.feedBackUrl)me.crossDomain ? me.crossDomainAction("login", function () {
					me.callFeedBackUrl(b)
				}) : me.callFeedBackUrl(b); else if (me.crossDomain) {
					a.crossDomainUrlList && me.setCrossDomainUrlList({retcode: 0, arrURL: a.crossDomainUrlList});
					me.crossDomainAction("login", function () {
						if (c && me.appLoginURL[me.domain])me.appLogin(c, me.domain, me.name + ".callbackLoginStatus"); else {
							b.userinfo = objMerge(b.userinfo, me.getSinaCookie());
							me.callbackLoginStatus(b)
						}
					})
				} else me.callbackLoginStatus(b)
			} else {
				if (loginMethodCheck && a.retcode == "2092" && me.allowAutoFoundServerTimeError) {
					me.setServerTime(0);
					me.loginExtraFlag = objMerge(me.loginExtraFlag, {wsseretry: "servertime_error"});
					loginMethodCheck();
					loginMethodCheck = null;
					return !1
				}
				b.result = !1;
				b.errno = a.retcode;
				if (b.errno == "4069") {
					var e = a.reason.split("|");
					b.reason = e[0];
					e.length == 2 && (b.rurl = e[1]);
					if (b.rurl)try {
						top.location.href = b.rurl;
						return
					} catch (f) {
					}
				} else b.reason = a.reason;
				me.callbackLoginStatus(b)
			}
		} catch (f) {
		}
		return !0
	};
	this.updateCookieCallBack = function (a) {
		a.retcode == 0 ? me.crossDomainAction("update", function () {
			me.customUpdateCookieCallBack(a)
		}) : me.customUpdateCookieCallBack(a)
	};
	this.feedBackUrlCallBack = function (a) {
		if (loginMethod != "post" || !me.timeoutEnable || !!ssoLoginTimer.isset()) {
			a.errno == "2092" && me.setServerTime(0);
			if (loginMethodCheck && a.errno == "2092" && me.allowAutoFoundServerTimeError) {
				me.loginExtraFlag = objMerge(me.loginExtraFlag, {wsseretry: "servertime_error"});
				loginMethodCheck();
				loginMethodCheck = null;
				return !1
			}
			ssoLoginTimer && ssoLoginTimer.clear();
			if (a.errno == "4069") {
				var b = a.reason.split("|");
				a.reason = b[0];
				if (b.length == 2) {
					a.rurl = b[1];
					try {
						top.location.href = a.rurl;
						return
					} catch (c) {
					}
				}
			}
			me.callbackLoginStatus(a);
			removeNode(me.loginFrameName)
		}
	};
	this.doCrossDomainCallBack = function (a) {
		me.crossDomainCounter++;
		a && removeNode(a.scriptId);
		if (me.crossDomainCounter == me.crossDomainCount) {
			clearTimeout(crossDomainTimer);
			me.crossDomainResult()
		}
	};
	this.crossDomainCallBack = function (a) {
		removeNode(me.ssoCrossDomainScriptId);
		if (!a || a.retcode != 0)return !1;
		var b = a.arrURL, c, d, e = {callback: me.name + ".doCrossDomainCallBack"};
		me.crossDomainCount = b.length;
		me.crossDomainCounter = 0;
		if (b.length == 0) {
			clearTimeout(crossDomainTimer);
			me.crossDomainResult();
			return !0
		}
		for (var f = 0; f < b.length; f++) {
			c = b[f];
			d = "ssoscript" + f;
			e.scriptId = d;
			c = makeURL(c, e);
			isSafari() ? excuteIframe(d, c) : excuteScript(d, c)
		}
	};
	this.crossDomainResult = function () {
		crossDomainUrlList = null;
		typeof crossDomainForward == "function" && crossDomainForward()
	};
	this.crossDomainAction = function (a, b) {
		crossDomainTimer = setTimeout(me.name + ".crossDomainResult()", crossDomainTime * 1e3);
		typeof b == "function" ? crossDomainForward = b : crossDomainForward = null;
		if (crossDomainUrlList) {
			me.crossDomainCallBack(crossDomainUrlList);
			return !1
		}
		var c = me.domain;
		if (a == "update") {
			a = "login";
			c = "sina.com.cn"
		}
		var d = {
			scriptId: me.ssoCrossDomainScriptId,
			callback: me.name + ".crossDomainCallBack",
			action: a,
			domain: c,
			sr: window.screen.width + "*" + window.screen.height
		}, e = makeURL(ssoCrosssDomainUrl, d);
		excuteScript(me.ssoCrossDomainScriptId, e)
	};
	this.checkLoginState = function (a) {
		a ? me.autoLogin(a) : me.autoLogin(function (a) {
			var b = {};
			if (a !== null) {
				var c = {displayname: a.nick, uniqueid: a.uid, userid: a.user};
				b.result = !0;
				b.userinfo = c
			} else {
				b.result = !1;
				b.reason = ""
			}
			me.callbackLoginStatus(b)
		})
	};
	this.getCookieExpireTime = function () {
		return getCookieExpireTimeByDomain(me.domain)
	};
	this.getSinaCookie = function (a) {
		var b = urldecode(getCookie("SUP"));
		if (!b && !urldecode(getCookie("ALF")))return null;
		b || (b = urldecode(getCookie("SUR")));
		if (!b)return null;
		var c = parse_str(b);
		return a && c.et && c.et * 1e3 < (new Date).getTime() ? null : c
	};
	this.get51UCCookie = function () {
		return me.getSinaCookie()
	};
	this.isPreLoginState = function () {
		var a = getCookie("SUBP");
		if (!a)return !1;
		var b = sinaSSOEncoder.getSUBPCookie.decode(a);
		return b && b.status == "40" ? !0 : !1
	};
	this.isVisitor = function () {
		var a = getCookie("SUBP");
		if (!a)return !1;
		var b = sinaSSOEncoder.getSUBPCookie.decode(a);
		return b && b.status == "20" ? !0 : !1
	};
	this.autoLogin = function (a, b) {
		if (me.domain == "sina.com.cn") {
			if (getCookie("SUP") === null && getCookie("ALF") !== null) {
				sinaAutoLogin(a);
				return !0
			}
		} else if (getCookie("SUP") === null && (b || getCookie("SSOLoginState") !== null || getCookie("ALF") !== null)) {
			sinaAutoLogin(a);
			return !0
		}
		a(me.getSinaCookie());
		return !0
	};
	this.autoLoginCallBack2 = function (a) {
		try {
			autoLoginCallBack2(me.getSinaCookie())
		} catch (b) {
		}
		return !0
	};
	this.appLogin = function (a, b, c) {
		var d = tmpData.savestate ? parseInt((new Date).getTime() / 1e3 + tmpData.savestate * 86400) : 0, e = getCookie("ALF") ? getCookie("ALF") : 0, f = {
			callback: c,
			ticket: a,
			ssosavestate: d || e
		}, g = me.appLoginURL[b], h = makeURL(g, f);
		excuteScript(me.scriptId, h, "gb2312");
		return !0
	};
	this.autoLoginCallBack3 = function (a) {
		if (a.retcode != 0) {
			me.autoLoginCallBack2(a);
			return !1
		}
		var b = me.domain == "sina.com.cn" ? "weibo.com" : me.domain;
		me.appLogin(a.ticket, b, me.name + ".autoLoginCallBack2");
		return !0
	};
	this.setLoginType = function (a) {
		var b = location.protocol == "https:" ? me.https : 0;
		b && (me.crossDomain = !1);
		me.loginType = a | b;
		return !0
	};
	this.setServerTime = function (a) {
		ssoServerTimeTimer || (ssoServerTimeTimer = new prototypeTimer(!0));
		if (a == 0) {
			ssoServerTimeTimer.clear();
			me.servertime = a;
			return !0
		}
		if (a < 1294935546)return !1;
		var b = function () {
			if (me.servertime) {
				me.servertime += me.calcServerTimeInterval / 1e3;
				ssoServerTimeTimer.start(me.calcServerTimeInterval, b)
			}
		};
		me.servertime = a;
		ssoServerTimeTimer.start(me.calcServerTimeInterval, b)
	};
	this.getPinCodeUrl = function (a) {
		a == undefined && (a = 0);
		pcid && (me.loginExtraQuery.pcid = pcid);
		var b = location.protocol == "https:" ? pincodeUrl.replace(/^http:/, "https:") : pincodeUrl;
		return b + "?r=" + Math.floor(Math.random() * 1e8) + "&s=" + a + (pcid.length > 0 ? "&p=" + pcid : "")
	};
	this.showPinCode = function (a) {
		me.$(a).src = me.getPinCodeUrl()
	};
	this.isVfValid = function () {
		return me.getSinaCookie(!0).vf != 1
	};
	this.getVfValidUrl = function () {
		return vfValidUrl
	};
	this.enableFailRedirect = function () {
		me.failRedirect = !0
	};
	var makeNonce = function (a) {
		var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
		for (var d = 0; d < a; d++)c += b.charAt(Math.ceil(Math.random() * 1e6) % b.length);
		return c
	}, sinaAutoLogin = function (a) {
		autoLoginCallBack2 = a;
		var b = {
			entry: me.getEntry(),
			service: me.service,
			encoding: "UTF-8",
			gateway: 1,
			returntype: "TEXT",
			from: me.from
		};
		if (me.domain == "sina.com.cn") {
			b.callback = me.name + ".autoLoginCallBack3";
			b.service = "miniblog";
			b.useticket = 1
		} else {
			b.callback = me.name + ".autoLoginCallBack3";
			b.useticket = 1
		}
		var c = location.protocol == "https:" ? ssoLoginUrl.replace(/^http:/, "https:") : ssoLoginUrl;
		c = makeURL(c, b);
		excuteScript(me.scriptId, c, "gb2312");
		return !0
	}, getCookieExpireTimeByDomain = function (a) {
		var b = null, c = null;
		c = me.getSinaCookie();
		c && (b = c.et);
		return b
	}, addEventListener = function (a, b, c) {
		a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
	}, prototypeTimer = function (a) {
		var b = !1;
		this.start = function (c, d) {
			a && (b = setTimeout(d, c))
		};
		this.clear = function (c) {
			if (a) {
				clearTimeout(b);
				b = !1
			}
		};
		this.isset = function () {
			return b !== !1
		}
	}, excuteScript = function (a, b, c) {
		removeNode(a);
		var d = document.getElementsByTagName("head")[0], e = document.createElement("script");
		e.charset = c || "gb2312";
		e.id = a;
		e.type = "text/javascript";
		e.src = makeURL(b, {client: me.getClientType(), _: (new Date).getTime()});
		d.appendChild(e)
	}, excuteIframe = function (a, b) {
		removeNode(a);
		var c = document.getElementsByTagName("body")[0], d = document.createElement("iframe");
		d.style.display = "none";
		d.src = makeURL(b, {client: me.getClientType(), _: (new Date).getTime()});
		d.isReady = !1;
		addEventListener(d, "load", function () {
			if (!d.isReady) {
				d.isReady = !0;
				me.doCrossDomainCallBack({scriptId: a})
			}
		});
		c.appendChild(d)
	}, makeRequest = function (a, b, c) {
		var d = {entry: me.getEntry(), gateway: 1, from: me.from, savestate: c, useticket: me.useTicket ? 1 : 0};
		me.failRedirect && (me.loginExtraQuery.frd = 1);
		d = objMerge(d, {pagerefer: document.referrer || ""});
		d = objMerge(d, me.loginExtraFlag);
		d = objMerge(d, me.loginExtraQuery);
		d.su = sinaSSOEncoder.base64.encode(urlencode(a));
		me.service && (d.service = me.service);
		if (me.loginType & rsa && me.servertime && sinaSSOEncoder && sinaSSOEncoder.RSAKey) {
			d.servertime = me.servertime;
			d.nonce = me.nonce;
			d.pwencode = "rsa2";
			d.rsakv = me.rsakv;
			var e = new sinaSSOEncoder.RSAKey;
			e.setPublic(me.rsaPubkey, "10001");
			b = e.encrypt([me.servertime, me.nonce].join("\t") + "\n" + b)
		} else if (me.loginType & wsse && me.servertime && sinaSSOEncoder && sinaSSOEncoder.hex_sha1) {
			d.servertime = me.servertime;
			d.nonce = me.nonce;
			d.pwencode = "wsse";
			b = sinaSSOEncoder.hex_sha1("" + sinaSSOEncoder.hex_sha1(sinaSSOEncoder.hex_sha1(b)) + me.servertime + me.nonce)
		}
		d.sp = b;
		try {
			d.sr = window.screen.width + "*" + window.screen.height
		} catch (f) {
		}
		return d
	}, loginByXMLHttpRequest = function (a, b, c) {
		if (typeof XMLHttpRequest == "undefined")return !1;
		var d = new XMLHttpRequest;
		if (!1 in d)return !1;
		var e = makeXMLRequestQuery(a, b, c), f = me.loginType & https ? ssoLoginUrl.replace(/^http:/, "https:") : ssoLoginUrl;
		f = makeURL(f, {client: me.getClientType(), _: (new Date).getTime()});
		try {
			d.open("POST", f, !0);
			d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			d.withCredentials = !0;
			d.onreadystatechange = function () {
				d.readyState == 4 && d.status == 200 && me.loginCallBack(parseJSON(d.responseText))
			};
			d.send(httpBuildQuery(e))
		} catch (g) {
			return !1
		}
		return !0
	}, makeXMLRequestQuery = function (a, b, c) {
		if (me.appLoginURL[me.domain]) {
			me.useTicket = 1;
			me.service = me.appDomainService[me.domain] || me.service
		}
		var d = 0;
		me.domain && (d = 2);
		me.appLoginURL[me.domain] || (d = 3);
		me.cdult !== !1 && (d = me.cdult);
		if (d == 3) {
			crossDomainTime = me.crossDomainTime;
			delete me.appLoginURL[me.domain]
		}
		var e = makeRequest(a, b, c);
		return objMerge(e, {
			encoding: "UTF-8",
			cdult: d,
			domain: me.domain,
			useticket: me.appLoginURL[me.domain] ? 1 : 0,
			prelt: preloginTime,
			returntype: "TEXT"
		})
	}, loginByScript = function (a, b, c) {
		var d = makeXMLRequestQuery(a, b, c);
		d = objMerge(d, {callback: me.name + ".loginCallBack"});
		var e = me.loginType & https ? ssoLoginUrl.replace(/^http:/, "https:") : ssoLoginUrl;
		e = makeURL(e, d);
		excuteScript(me.scriptId, e, "gb2312")
	}, loginByIframe = function (a, b, c) {
		createIFrame(me.loginFrameName);
		var d = createForm(me.loginFormId), e = makeRequest(a, b, c);
		e.encoding = "UTF-8";
		me.crossDomain == !1 && (e.crossdomain = 0);
		e.prelt = preloginTime;
		if (me.feedBackUrl) {
			e.url = makeURL(me.feedBackUrl, {framelogin: 1, callback: "parent." + me.name + ".feedBackUrlCallBack"});
			e.returntype = "META"
		} else {
			e.callback = "parent." + me.name + ".loginCallBack";
			e.returntype = "IFRAME";
			e.setdomain = me.setDomain ? 1 : 0
		}
		for (var f in me.loginExtraQuery) {
			if (typeof me.loginExtraQuery[f] == "function")continue;
			e[f] = me.loginExtraQuery[f]
		}
		for (var g in e)d.addInput(g, e[g]);
		var h = me.loginType & https ? ssoLoginUrl.replace(/^http:/, "https:") : ssoLoginUrl;
		h = makeURL(h, objMerge({client: me.getClientType()}, me.loginExtraFlag));
		d.method = "post";
		d.action = h;
		d.target = me.loginFrameName;
		var i = !0;
		try {
			d.submit()
		} catch (j) {
			removeNode(me.loginFrameName);
			i = !1
		}
		setTimeout(function () {
			removeNode(d)
		}, 10);
		return i
	}, createIFrame = function (a, b) {
		b == null && (b = "javascript:false;");
		removeNode(a);
		var c = document.createElement("iframe");
		c.height = 0;
		c.width = 0;
		c.style.display = "none";
		c.name = a;
		c.id = a;
		c.src = b;
		appendChild(document.body, c);
		window.frames[a].name = a;
		return c
	}, createForm = function (a, b) {
		b == null && (b = "none");
		removeNode(a);
		var c = document.createElement("form");
		c.height = 0;
		c.width = 0;
		c.style.display = b;
		c.name = a;
		c.id = a;
		appendChild(document.body, c);
		document.forms[a].name = a;
		c.addInput = function (a, b, c) {
			c == null && (c = "text");
			var d = this.getElementsByTagName("input")[a];
			d && this.removeChild(d);
			d = document.createElement("input");
			this.appendChild(d);
			d.id = a;
			d.name = a;
			d.type = c;
			d.value = b
		};
		return c
	}, removeNode = function (a) {
		try {
			typeof a == "string" && (a = me.$(a));
			a.parentNode.removeChild(a)
		} catch (b) {
		}
	}, getType = function (a) {
		return typeof a == "undefined" ? "undefined" : a === null ? "null" : Object.prototype.toString.call(a).replace(/^\[object\s|\]$/gi, "").toLowerCase()
	}, isSafari = function () {
		var a = navigator.userAgent.toLowerCase();
		return /webkit/i.test(a) && !/chrome/i.test(a)
	}, appendChild = function (a, b) {
		a.appendChild(b)
	}, getCookie = function (a) {
		var b = (new RegExp(a + "=([^;]+)")).exec(document.cookie);
		return b == null ? null : b[1]
	}, makeURL = function (a, b) {
		return a + urlAndChar(a) + httpBuildQuery(b)
	}, urlAndChar = function (a) {
		return /\?/.test(a) ? "&" : "?"
	}, urlencode = function (a) {
		return encodeURIComponent(a)
	}, urldecode = function (a) {
		if (a == null)return "";
		try {
			return decodeURIComponent(a)
		} catch (b) {
			return ""
		}
	}, httpBuildQuery = function (a) {
		if (typeof a != "object")return "";
		var b = [];
		for (var c in a) {
			if (typeof a[c] == "function")continue;
			b.push(c + "=" + urlencode(a[c]))
		}
		return b.join("&")
	}, parse_str = function (a) {
		var b = a.split("&"), c, d = {};
		for (var e = 0; e < b.length; e++) {
			c = b[e].split("=");
			d[c[0]] = urldecode(c[1])
		}
		return d
	}, parseJSON = function (str) {
		return typeof str == "object" ? str : window.JSON ? JSON.parse(str) : eval("(" + str + ")")
	}, objMerge = function (a, b) {
		for (var c in b)a[c] = b[c];
		return a
	};
	this.$ = function (a) {
		return document.getElementById(a)
	};
	this.generateVisitor = function () {
		var a, b = !1;
		for (var c = 0; c < this.generateVisitorDomain.length; c++) {
			a = new RegExp(this.generateVisitorDomain[c]);
			if (a.test(document.domain)) {
				b = !0;
				break
			}
		}
		if (!b)return !1;
		try {
			if (me.shouldGenerateVisitor() && !me.$("visitorfrm84747h4784")) {
				document.body.insertAdjacentHTML("beforeEnd", "<iframe id='visitorfrm84747h4784' style='position:absolute;left:0;top:0;border:none;width:1px;height:1px' src='" + generateVisitorUrl + "'/>");
				setTimeout(function () {
					try {
						var a = me.$("visitorfrm84747h4784");
						a && a.parentNode.removeChild(a)
					} catch (b) {
					}
				}, 3e4)
			}
		} catch (d) {
			return !1
		}
		return !0
	};
	this.shouldGenerateVisitor = function () {
		var a = !1, b = !1, c = getCookie("SUBP");
		c && (a = !0);
		var d = getCookie("SUP");
		d && (b = !0);
		return !a && !b ? !0 : !1
	}
}
var sinaSSOEncoder = sinaSSOEncoder || {};
(function () {
	var a = 0, b = 8;
	this.hex_sha1 = function (a) {
		return i(c(h(a), a.length * b))
	};
	var c = function (a, b) {
		a[b >> 5] |= 128 << 24 - b % 32;
		a[(b + 64 >> 9 << 4) + 15] = b;
		var c = Array(80), h = 1732584193, i = -271733879, j = -1732584194, k = 271733878, l = -1009589776;
		for (var m = 0; m < a.length; m += 16) {
			var n = h, o = i, p = j, q = k, r = l;
			for (var s = 0; s < 80; s++) {
				s < 16 ? c[s] = a[m + s] : c[s] = g(c[s - 3] ^ c[s - 8] ^ c[s - 14] ^ c[s - 16], 1);
				var t = f(f(g(h, 5), d(s, i, j, k)), f(f(l, c[s]), e(s)));
				l = k;
				k = j;
				j = g(i, 30);
				i = h;
				h = t
			}
			h = f(h, n);
			i = f(i, o);
			j = f(j, p);
			k = f(k, q);
			l = f(l, r)
		}
		return [h, i, j, k, l]
	}, d = function (a, b, c, d) {
		return a < 20 ? b & c | ~b & d : a < 40 ? b ^ c ^ d : a < 60 ? b & c | b & d | c & d : b ^ c ^ d
	}, e = function (a) {
		return a < 20 ? 1518500249 : a < 40 ? 1859775393 : a < 60 ? -1894007588 : -899497514
	}, f = function (a, b) {
		var c = (a & 65535) + (b & 65535), d = (a >> 16) + (b >> 16) + (c >> 16);
		return d << 16 | c & 65535
	}, g = function (a, b) {
		return a << b | a >>> 32 - b
	}, h = function (a) {
		var c = [], d = (1 << b) - 1;
		for (var e = 0; e < a.length * b; e += b)c[e >> 5] |= (a.charCodeAt(e / b) & d) << 24 - e % 32;
		return c
	}, i = function (b) {
		var c = a ? "0123456789ABCDEF" : "0123456789abcdef", d = "";
		for (var e = 0; e < b.length * 4; e++)d += c.charAt(b[e >> 2] >> (3 - e % 4) * 8 + 4 & 15) + c.charAt(b[e >> 2] >> (3 - e % 4) * 8 & 15);
		return d
	}, j = function (a) {
		var b = "", c = 0;
		for (; c < a.length; c++)b += "%" + k(a[c]);
		return decodeURIComponent(b)
	}, k = function (a) {
		var b = "0" + a.toString(16);
		return b.length <= 2 ? b : b.substr(1)
	};
	this.base64 = {
		encode: function (a) {
			a = "" + a;
			if (a == "")return "";
			var b = "", c, d, e = "", f, g, h, i = "", j = 0;
			do {
				c = a.charCodeAt(j++);
				d = a.charCodeAt(j++);
				e = a.charCodeAt(j++);
				f = c >> 2;
				g = (c & 3) << 4 | d >> 4;
				h = (d & 15) << 2 | e >> 6;
				i = e & 63;
				isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64);
				b = b + this._keys.charAt(f) + this._keys.charAt(g) + this._keys.charAt(h) + this._keys.charAt(i);
				c = d = e = "";
				f = g = h = i = ""
			} while (j < a.length);
			return b
		},
		decode: function (a, b, c) {
			var d = function (a, b) {
				for (var c = 0; c < a.length; c++)if (a[c] === b)return c;
				return -1
			};
			typeof a == "string" && (a = a.split(""));
			var e = [], f, g, h = "", i, j, k, l = "";
			a.length % 4 == 0;
			var m = /[^A-Za-z0-9+\/=]/, n = this._keys.split("");
			if (b == "urlsafe") {
				m = /[^A-Za-z0-9-_=]/;
				n = this._keys_urlsafe.split("")
			}
			if (b == "subp_v2") {
				m = /[^A-Za-z0-9_=-]/;
				n = this._subp_v2_keys.split("")
			}
			if (b == "subp_v3_3") {
				m = /[^A-Za-z0-9-_.-]/;
				n = this._subp_v3_keys_3.split("")
			}
			var o = 0;
			if (b == "binnary") {
				n = [];
				for (o = 0; o <= 64; o++)n[o] = o + 128
			}
			if (b != "binnary" && m.test(a.join("")))return c == "array" ? [] : "";
			o = 0;
			do {
				i = d(n, a[o++]);
				j = d(n, a[o++]);
				k = d(n, a[o++]);
				l = d(n, a[o++]);
				f = i << 2 | j >> 4;
				g = (j & 15) << 4 | k >> 2;
				h = (k & 3) << 6 | l;
				e.push(f);
				k != 64 && k != -1 && e.push(g);
				l != 64 && l != -1 && e.push(h);
				f = g = h = "";
				i = j = k = l = ""
			} while (o < a.length);
			if (c == "array")return e;
			var p = "", q = 0;
			for (; q < e.lenth; q++)p += String.fromCharCode(e[q]);
			return p
		},
		_keys: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		_keys_urlsafe: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
		_subp_v2_keys: "uAL715W8e3jJCcNU0lT_FSXVgxpbEDdQ4vKaIOH2GBPtfzqsmYZo-wRM9i6hynrk=",
		_subp_v3_keys_3: "5WFh28sGziZTeS1lBxCK-HgPq9IdMUwknybo.LJrQD3uj_Va7pE0XfcNR4AOYvm6t"
	};
	this.Cookie = {
		decode: function (a) {
			var b = [], c = a.substr(0, 3), d = a.substr(3);
			switch (c) {
				case"v01":
					for (var e = 0; e < d.length; e += 2)b.push(parseInt(d.substr(e, 2), 16));
					return decodeURIComponent(j(sinaSSOEncoder.base64.decode(b, "binnary", "array")));
				case"v02":
					d = d.replace(/\./g, "=");
					b = sinaSSOEncoder.base64.decode(d, "urlsafe", "array");
					return j(sinaSSOEncoder.base64.decode(b, "binnary", "array"));
				default:
					return decodeURIComponent(a)
			}
		}
	};
	this.getSUBPCookie = {
		__parse: function (a) {
			var b, c, d, e, f, g = 0, h, i = {}, k = "", l = "";
			if (!a)return i;
			do {
				c = a[g];
				b = ++g;
				for (h = g; h < c + b; h++, g++)k += String.fromCharCode(a[h]);
				e = a[g];
				b = ++g;
				if (k == "status" || k == "flag")for (h = g; h < e + b; h++, g++)l += a[h]; else {
					l = a.slice(h, e + b);
					try {
						l = j(l)
					} catch (m) {
						l = ""
					}
					g += e
				}
				i[k] = l;
				k = "";
				l = ""
			} while (g < a.length);
			return i
		}, decode: function (a) {
			var b = [], c, d = a.substr(0, 3), e = decodeURIComponent(a.substr(3));
			switch (d) {
				case"002":
					b = sinaSSOEncoder.base64.decode(e, "subp_v2", "array");
					return sinaSSOEncoder.getSUBPCookie.__parse(b);
				case"003":
					c = e.substr(0, 1);
					b = sinaSSOEncoder.base64.decode(e, "subp_v3_" + c, "array");
					return sinaSSOEncoder.getSUBPCookie.__parse(b);
				default:
					return decodeURIComponent(a)
			}
		}
	}
}).call(sinaSSOEncoder);
(function () {
	function bt(a) {
		var b = bp(a, this.n.bitLength() + 7 >> 3);
		if (b == null)return null;
		var c = this.doPublic(b);
		if (c == null)return null;
		var d = c.toString(16);
		return (d.length & 1) == 0 ? d : "0" + d
	}

	function bs(a) {
		return a.modPowInt(this.e, this.n)
	}

	function br(a, b) {
		if (a != null && b != null && a.length > 0 && b.length > 0) {
			this.n = bm(a, 16);
			this.e = parseInt(b, 16)
		} else alert("Invalid RSA public key")
	}

	function bq() {
		this.n = null;
		this.e = 0;
		this.d = null;
		this.p = null;
		this.q = null;
		this.dmp1 = null;
		this.dmq1 = null;
		this.coeff = null
	}

	function bp(a, b) {
		if (b < a.length + 11) {
			alert("Message too long for RSA");
			return null
		}
		var c = [], e = a.length - 1;
		while (e >= 0 && b > 0) {
			var f = a.charCodeAt(e--);
			if (f < 128)c[--b] = f; else if (f > 127 && f < 2048) {
				c[--b] = f & 63 | 128;
				c[--b] = f >> 6 | 192
			} else {
				c[--b] = f & 63 | 128;
				c[--b] = f >> 6 & 63 | 128;
				c[--b] = f >> 12 | 224
			}
		}
		c[--b] = 0;
		var g = new bl, h = [];
		while (b > 2) {
			h[0] = 0;
			while (h[0] == 0)g.nextBytes(h);
			c[--b] = h[0]
		}
		c[--b] = 2;
		c[--b] = 0;
		return new d(c)
	}

	function bo(a) {
		return a < 16 ? "0" + a.toString(16) : a.toString(16)
	}

	function bn(a, b) {
		var c = "", d = 0;
		while (d + b < a.length) {
			c += a.substring(d, d + b) + "\n";
			d += b
		}
		return c + a.substring(d, a.length)
	}

	function bm(a, b) {
		return new d(a, b)
	}

	function bl() {
	}

	function bk(a) {
		var b;
		for (b = 0; b < a.length; ++b)a[b] = bj()
	}

	function bj() {
		if (bc == null) {
			bg();
			bc = ba();
			bc.init(bd);
			for (be = 0; be < bd.length; ++be)bd[be] = 0;
			be = 0
		}
		return bc.next()
	}

	function bg() {
		bf((new Date).getTime())
	}

	function bf(a) {
		bd[be++] ^= a & 255;
		bd[be++] ^= a >> 8 & 255;
		bd[be++] ^= a >> 16 & 255;
		bd[be++] ^= a >> 24 & 255;
		be >= bb && (be -= bb)
	}

	function ba() {
		return new Z
	}

	function _() {
		var a;
		this.i = this.i + 1 & 255;
		this.j = this.j + this.S[this.i] & 255;
		a = this.S[this.i];
		this.S[this.i] = this.S[this.j];
		this.S[this.j] = a;
		return this.S[a + this.S[this.i] & 255]
	}

	function $(a) {
		var b, c, d;
		for (b = 0; b < 256; ++b)this.S[b] = b;
		c = 0;
		for (b = 0; b < 256; ++b) {
			c = c + this.S[b] + a[b % a.length] & 255;
			d = this.S[b];
			this.S[b] = this.S[c];
			this.S[c] = d
		}
		this.i = 0;
		this.j = 0
	}

	function Z() {
		this.i = 0;
		this.j = 0;
		this.S = []
	}

	function Y(a, b) {
		var c;
		a < 256 || b.isEven() ? c = new J(b) : c = new Q(b);
		return this.exp(a, c)
	}

	function X(a, b) {
		if (a > 4294967295 || a < 1)return d.ONE;
		var c = e(), f = e(), g = b.convert(this), h = y(a) - 1;
		g.copyTo(c);
		while (--h >= 0) {
			b.sqrTo(c, f);
			if ((a & 1 << h) > 0)b.mulTo(f, g, c); else {
				var i = c;
				c = f;
				f = i
			}
		}
		return b.revert(c)
	}

	function W() {
		return (this.t > 0 ? this[0] & 1 : this.s) == 0
	}

	function V(a, b, c) {
		a.multiplyTo(b, c);
		this.reduce(c)
	}

	function U(a, b) {
		a.squareTo(b);
		this.reduce(b)
	}

	function T(a) {
		while (a.t <= this.mt2)a[a.t++] = 0;
		for (var b = 0; b < this.m.t; ++b) {
			var c = a[b] & 32767, d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
			c = b + this.m.t;
			a[c] += this.m.am(0, d, a, b, 0, this.m.t);
			while (a[c] >= a.DV) {
				a[c] -= a.DV;
				a[++c]++
			}
		}
		a.clamp();
		a.drShiftTo(this.m.t, a);
		a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
	}

	function S(a) {
		var b = e();
		a.copyTo(b);
		this.reduce(b);
		return b
	}

	function R(a) {
		var b = e();
		a.abs().dlShiftTo(this.m.t, b);
		b.divRemTo(this.m, null, b);
		a.s < 0 && b.compareTo(d.ZERO) > 0 && this.m.subTo(b, b);
		return b
	}

	function Q(a) {
		this.m = a;
		this.mp = a.invDigit();
		this.mpl = this.mp & 32767;
		this.mph = this.mp >> 15;
		this.um = (1 << a.DB - 15) - 1;
		this.mt2 = 2 * a.t
	}

	function P() {
		if (this.t < 1)return 0;
		var a = this[0];
		if ((a & 1) == 0)return 0;
		var b = a & 3;
		b = b * (2 - (a & 15) * b) & 15;
		b = b * (2 - (a & 255) * b) & 255;
		b = b * (2 - ((a & 65535) * b & 65535)) & 65535;
		b = b * (2 - a * b % this.DV) % this.DV;
		return b > 0 ? this.DV - b : -b
	}

	function O(a, b) {
		a.squareTo(b);
		this.reduce(b)
	}

	function N(a, b, c) {
		a.multiplyTo(b, c);
		this.reduce(c)
	}

	function M(a) {
		a.divRemTo(this.m, null, a)
	}

	function L(a) {
		return a
	}

	function K(a) {
		return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
	}

	function J(a) {
		this.m = a
	}

	function I(a) {
		var b = e();
		this.abs().divRemTo(a, null, b);
		this.s < 0 && b.compareTo(d.ZERO) > 0 && a.subTo(b, b);
		return b
	}

	function H(a, b, c) {
		var f = a.abs();
		if (!(f.t <= 0)) {
			var g = this.abs();
			if (g.t < f.t) {
				b != null && b.fromInt(0);
				c != null && this.copyTo(c);
				return
			}
			c == null && (c = e());
			var h = e(), i = this.s, j = a.s, k = this.DB - y(f[f.t - 1]);
			if (k > 0) {
				f.lShiftTo(k, h);
				g.lShiftTo(k, c)
			} else {
				f.copyTo(h);
				g.copyTo(c)
			}
			var l = h.t, m = h[l - 1];
			if (m == 0)return;
			var n = m * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2 : 0), o = this.FV / n, p = (1 << this.F1) / n, q = 1 << this.F2, r = c.t, s = r - l, t = b == null ? e() : b;
			h.dlShiftTo(s, t);
			if (c.compareTo(t) >= 0) {
				c[c.t++] = 1;
				c.subTo(t, c)
			}
			d.ONE.dlShiftTo(l, t);
			t.subTo(h, h);
			while (h.t < l)h[h.t++] = 0;
			while (--s >= 0) {
				var u = c[--r] == m ? this.DM : Math.floor(c[r] * o + (c[r - 1] + q) * p);
				if ((c[r] += h.am(0, u, c, s, 0, l)) < u) {
					h.dlShiftTo(s, t);
					c.subTo(t, c);
					while (c[r] < --u)c.subTo(t, c)
				}
			}
			if (b != null) {
				c.drShiftTo(l, b);
				i != j && d.ZERO.subTo(b, b)
			}
			c.t = l;
			c.clamp();
			k > 0 && c.rShiftTo(k, c);
			i < 0 && d.ZERO.subTo(c, c)
		}
	}

	function G(a) {
		var b = this.abs(), c = a.t = 2 * b.t;
		while (--c >= 0)a[c] = 0;
		for (c = 0; c < b.t - 1; ++c) {
			var d = b.am(c, b[c], a, 2 * c, 0, 1);
			if ((a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV) {
				a[c + b.t] -= b.DV;
				a[c + b.t + 1] = 1
			}
		}
		a.t > 0 && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1));
		a.s = 0;
		a.clamp()
	}

	function F(a, b) {
		var c = this.abs(), e = a.abs(), f = c.t;
		b.t = f + e.t;
		while (--f >= 0)b[f] = 0;
		for (f = 0; f < e.t; ++f)b[f + c.t] = c.am(0, e[f], b, f, 0, c.t);
		b.s = 0;
		b.clamp();
		this.s != a.s && d.ZERO.subTo(b, b)
	}

	function E(a, b) {
		var c = 0, d = 0, e = Math.min(a.t, this.t);
		while (c < e) {
			d += this[c] - a[c];
			b[c++] = d & this.DM;
			d >>= this.DB
		}
		if (a.t < this.t) {
			d -= a.s;
			while (c < this.t) {
				d += this[c];
				b[c++] = d & this.DM;
				d >>= this.DB
			}
			d += this.s
		} else {
			d += this.s;
			while (c < a.t) {
				d -= a[c];
				b[c++] = d & this.DM;
				d >>= this.DB
			}
			d -= a.s
		}
		b.s = d < 0 ? -1 : 0;
		d < -1 ? b[c++] = this.DV + d : d > 0 && (b[c++] = d);
		b.t = c;
		b.clamp()
	}

	function D(a, b) {
		b.s = this.s;
		var c = Math.floor(a / this.DB);
		if (c >= this.t)b.t = 0; else {
			var d = a % this.DB, e = this.DB - d, f = (1 << d) - 1;
			b[0] = this[c] >> d;
			for (var g = c + 1; g < this.t; ++g) {
				b[g - c - 1] |= (this[g] & f) << e;
				b[g - c] = this[g] >> d
			}
			d > 0 && (b[this.t - c - 1] |= (this.s & f) << e);
			b.t = this.t - c;
			b.clamp()
		}
	}

	function C(a, b) {
		var c = a % this.DB, d = this.DB - c, e = (1 << d) - 1, f = Math.floor(a / this.DB), g = this.s << c & this.DM, h;
		for (h = this.t - 1; h >= 0; --h) {
			b[h + f + 1] = this[h] >> d | g;
			g = (this[h] & e) << c
		}
		for (h = f - 1; h >= 0; --h)b[h] = 0;
		b[f] = g;
		b.t = this.t + f + 1;
		b.s = this.s;
		b.clamp()
	}

	function B(a, b) {
		for (var c = a; c < this.t; ++c)b[c - a] = this[c];
		b.t = Math.max(this.t - a, 0);
		b.s = this.s
	}

	function A(a, b) {
		var c;
		for (c = this.t - 1; c >= 0; --c)b[c + a] = this[c];
		for (c = a - 1; c >= 0; --c)b[c] = 0;
		b.t = this.t + a;
		b.s = this.s
	}

	function z() {
		return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
	}

	function y(a) {
		var b = 1, c;
		if ((c = a >>> 16) != 0) {
			a = c;
			b += 16
		}
		if ((c = a >> 8) != 0) {
			a = c;
			b += 8
		}
		if ((c = a >> 4) != 0) {
			a = c;
			b += 4
		}
		if ((c = a >> 2) != 0) {
			a = c;
			b += 2
		}
		if ((c = a >> 1) != 0) {
			a = c;
			b += 1
		}
		return b
	}

	function x(a) {
		var b = this.s - a.s;
		if (b != 0)return b;
		var c = this.t;
		b = c - a.t;
		if (b != 0)return b;
		while (--c >= 0)if ((b = this[c] - a[c]) != 0)return b;
		return 0
	}

	function w() {
		return this.s < 0 ? this.negate() : this
	}

	function v() {
		var a = e();
		d.ZERO.subTo(this, a);
		return a
	}

	function u(a) {
		if (this.s < 0)return "-" + this.negate().toString(a);
		var b;
		if (a == 16)b = 4; else if (a == 8)b = 3; else if (a == 2)b = 1; else if (a == 32)b = 5; else if (a == 4)b = 2; else return this.toRadix(a);
		var c = (1 << b) - 1, d, e = !1, f = "", g = this.t, h = this.DB - g * this.DB % b;
		if (g-- > 0) {
			if (h < this.DB && (d = this[g] >> h) > 0) {
				e = !0;
				f = n(d)
			}
			while (g >= 0) {
				if (h < b) {
					d = (this[g] & (1 << h) - 1) << b - h;
					d |= this[--g] >> (h += this.DB - b)
				} else {
					d = this[g] >> (h -= b) & c;
					if (h <= 0) {
						h += this.DB;
						--g
					}
				}
				d > 0 && (e = !0);
				e && (f += n(d))
			}
		}
		return e ? f : "0"
	}

	function t() {
		var a = this.s & this.DM;
		while (this.t > 0 && this[this.t - 1] == a)--this.t
	}

	function s(a, b) {
		var c;
		if (b == 16)c = 4; else if (b == 8)c = 3; else if (b == 256)c = 8; else if (b == 2)c = 1; else if (b == 32)c = 5; else if (b == 4)c = 2; else {
			this.fromRadix(a, b);
			return
		}
		this.t = 0;
		this.s = 0;
		var e = a.length, f = !1, g = 0;
		while (--e >= 0) {
			var h = c == 8 ? a[e] & 255 : o(a, e);
			if (h < 0) {
				a.charAt(e) == "-" && (f = !0);
				continue
			}
			f = !1;
			if (g == 0)this[this.t++] = h; else if (g + c > this.DB) {
				this[this.t - 1] |= (h & (1 << this.DB - g) - 1) << g;
				this[this.t++] = h >> this.DB - g
			} else this[this.t - 1] |= h << g;
			g += c;
			g >= this.DB && (g -= this.DB)
		}
		if (c == 8 && (a[0] & 128) != 0) {
			this.s = -1;
			g > 0 && (this[this.t - 1] |= (1 << this.DB - g) - 1 << g)
		}
		this.clamp();
		f && d.ZERO.subTo(this, this)
	}

	function r(a) {
		var b = e();
		b.fromInt(a);
		return b
	}

	function q(a) {
		this.t = 1;
		this.s = a < 0 ? -1 : 0;
		a > 0 ? this[0] = a : a < -1 ? this[0] = a + DV : this.t = 0
	}

	function p(a) {
		for (var b = this.t - 1; b >= 0; --b)a[b] = this[b];
		a.t = this.t;
		a.s = this.s
	}

	function o(a, b) {
		var c = k[a.charCodeAt(b)];
		return c == null ? -1 : c
	}

	function n(a) {
		return j.charAt(a)
	}

	function h(a, b, c, d, e, f) {
		var g = b & 16383, h = b >> 14;
		while (--f >= 0) {
			var i = this[a] & 16383, j = this[a++] >> 14, k = h * i + j * g;
			i = g * i + ((k & 16383) << 14) + c[d] + e;
			e = (i >> 28) + (k >> 14) + h * j;
			c[d++] = i & 268435455
		}
		return e
	}

	function g(a, b, c, d, e, f) {
		var g = b & 32767, h = b >> 15;
		while (--f >= 0) {
			var i = this[a] & 32767, j = this[a++] >> 15, k = h * i + j * g;
			i = g * i + ((k & 32767) << 15) + c[d] + (e & 1073741823);
			e = (i >>> 30) + (k >>> 15) + h * j + (e >>> 30);
			c[d++] = i & 1073741823
		}
		return e
	}

	function f(a, b, c, d, e, f) {
		while (--f >= 0) {
			var g = b * this[a++] + c[d] + e;
			e = Math.floor(g / 67108864);
			c[d++] = g & 67108863
		}
		return e
	}

	function e() {
		return new d(null)
	}

	function d(a, b, c) {
		a != null && ("number" == typeof a ? this.fromNumber(a, b, c) : b == null && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
	}

	var a, b = 0xdeadbeefcafe, c = (b & 16777215) == 15715070;
	if (c && navigator.appName == "Microsoft Internet Explorer") {
		d.prototype.am = g;
		a = 30
	} else if (c && navigator.appName != "Netscape") {
		d.prototype.am = f;
		a = 26
	} else {
		d.prototype.am = h;
		a = 28
	}
	d.prototype.DB = a;
	d.prototype.DM = (1 << a) - 1;
	d.prototype.DV = 1 << a;
	var i = 52;
	d.prototype.FV = Math.pow(2, i);
	d.prototype.F1 = i - a;
	d.prototype.F2 = 2 * a - i;
	var j = "0123456789abcdefghijklmnopqrstuvwxyz", k = [], l, m;
	l = "0".charCodeAt(0);
	for (m = 0; m <= 9; ++m)k[l++] = m;
	l = "a".charCodeAt(0);
	for (m = 10; m < 36; ++m)k[l++] = m;
	l = "A".charCodeAt(0);
	for (m = 10; m < 36; ++m)k[l++] = m;
	J.prototype.convert = K;
	J.prototype.revert = L;
	J.prototype.reduce = M;
	J.prototype.mulTo = N;
	J.prototype.sqrTo = O;
	Q.prototype.convert = R;
	Q.prototype.revert = S;
	Q.prototype.reduce = T;
	Q.prototype.mulTo = V;
	Q.prototype.sqrTo = U;
	d.prototype.copyTo = p;
	d.prototype.fromInt = q;
	d.prototype.fromString = s;
	d.prototype.clamp = t;
	d.prototype.dlShiftTo = A;
	d.prototype.drShiftTo = B;
	d.prototype.lShiftTo = C;
	d.prototype.rShiftTo = D;
	d.prototype.subTo = E;
	d.prototype.multiplyTo = F;
	d.prototype.squareTo = G;
	d.prototype.divRemTo = H;
	d.prototype.invDigit = P;
	d.prototype.isEven = W;
	d.prototype.exp = X;
	d.prototype.toString = u;
	d.prototype.negate = v;
	d.prototype.abs = w;
	d.prototype.compareTo = x;
	d.prototype.bitLength = z;
	d.prototype.mod = I;
	d.prototype.modPowInt = Y;
	d.ZERO = r(0);
	d.ONE = r(1);
	Z.prototype.init = $;
	Z.prototype.next = _;
	var bb = 256, bc, bd, be;
	if (bd == null) {
		bd = [];
		be = 0;
		var bh;
		if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto && typeof window.crypto.random == "function") {
			var bi = window.crypto.random(32);
			for (bh = 0; bh < bi.length; ++bh)bd[be++] = bi.charCodeAt(bh) & 255
		}
		while (be < bb) {
			bh = Math.floor(65536 * Math.random());
			bd[be++] = bh >>> 8;
			bd[be++] = bh & 255
		}
		be = 0;
		bg()
	}
	bl.prototype.nextBytes = bk;
	bq.prototype.doPublic = bs;
	bq.prototype.setPublic = br;
	bq.prototype.encrypt = bt;
	this.RSAKey = bq
}).call(sinaSSOEncoder);
sinaSSOController = new SSOController;
sinaSSOController.init();
STK.register("common.listener", function (a) {
	var b = {}, c = {};
	c.define = function (c, d) {
		if (b[c] != null)throw"common.listener.define: 频道已被占用";
		b[c] = d;
		var e = {};
		e.register = function (d, e) {
			if (b[c] == null)throw"common.listener.define: 频道未定义";
			a.listener.register(c, d, e)
		};
		e.fire = function (d, e) {
			if (b[c] == null)throw"commonlistener.define: 频道未定义";
			a.listener.fire(c, d, e)
		};
		e.remove = function (b, d) {
			a.listener.remove(c, b, d)
		};
		e.cache = function (b) {
			return a.listener.cache(c, b)
		};
		return e
	};
	return c
});
STK.register("common.channel.sso.login", function (a) {
	var b = ["login", "logout", "verify.extra", "verify.username", "pincode", "pincode.create", "login.complete", "login.success", "login.failure", "logout.complete", "logout.success", "logout.failure", "verify.update", "verify.failure", "verify.complete", "pincode.update", "yalogin.verify", "yalogin.active", "yalogin.deny"];
	return a.common.listener.define("common.channel.sso.login", b)
});
STK.register("common.login.sso.loginbridge", function (a) {
	var b = window.sinaSSOController, c = a.common.channel.sso.login, d = {
		savestate: 0,
		vsnf: 0,
		hold_login_state: !1,
		cookie_timeout: 0,
		extraTypes: ["verifycode", "vsncode"],
		extraConf: {verifycode: [1, 4049, 2070], vsncode: [2, 5024, 5025], password: [80]}
	}, e = {
		entry: "sinaoauth",
		domain: "sina.com.cn",
		service: "sinaoauth",
		useTicket: !0,
		crossDomain: !1,
		feedBackUrl: ""
	}, f = !1;
	return function (g) {
		var h = {param: {}, extra: !1}, i = {
			init: function () {
				if (!f) {
					i.setOptions(g);
					i.bind();
					i.getUniqueKey();
					f = !0
				}
			}, setOptions: function (b) {
				b = b || {};
				d = a.core.json.merge(d, b);
				e = a.core.obj.parseParam(e, b);
				i.setSSO(b)
			}, setSSO: function (c) {
				var d = a.core.json.merge(e, c || {});
				for (var f in d)d[f] !== undefined && (b[f] = d[f])
			}, cleanExtra: function () {
				b.loginExtraQuery || (b.loginExtraQuery = {});
				var a = b.loginExtraQuery.pcid;
				b.loginExtraQuery = {};
				a && (b.loginExtraQuery.pcid = a)
			}, setExtra: function (c) {
				c = c || {};
				i.cleanExtra();
				if (c.door)delete b.loginExtraQuery.vsnval; else if (c.vsnval) {
					delete b.loginExtraQuery.door;
					delete b.loginExtraQuery.pcid
				} else {
					delete b.loginExtraQuery.door;
					delete b.loginExtraQuery.pcid;
					delete b.loginExtraQuery.vsnval
				}
				d.cookie_timeout && (c.ct = conf.cookie_timeout);
				d.hold_login_state && (c.s = 1);
				c.vsnf = d.vsnf;
				c.hasOwnProperty("username") && delete c.username;
				c.hasOwnProperty("password") && delete c.password;
				c.hasOwnProperty("savestate") && delete c.savestate;
				b.loginExtraQuery = a.core.json.merge(b.loginExtraQuery, c)
			}, login: function (a, c, e, f) {
				e = e || {};
				if (f.verifycode) {
					f.door = "" + f.verifycode;
					h.extra = "verifycode";
					delete f.verifycode
				} else if (f.vsncode) {
					f.vsnval = f.vsncode;
					h.extra = "vsncode";
					delete f.vsncode
				} else h.extra = !1;
				i.setSSO(e);
				h.param.userid = a;
				h.param.password = c;
				var g = e.savestate || d.savestate;
				g && (h.param.savestate = g);
				i.setExtra(f);
				b.login(h.param.userid, h.param.password, h.param.savestate)
			}, logout: function () {
				b.logout()
			}, verify: {
				extra: function (a, c, d) {
					switch (a) {
						case"vsn":
							i.setExtra({vsnval: c});
							break;
						case"code":
							i.setExtra({door: c})
					}
					i.setSSO(d || {});
					d.savestate > -1 && (h.param.savestate = d.savestate);
					b.login(h.param.userid, h.param.password, h.param.savestate)
				}, username: function (a) {
					b.prelogin({username: a, checkpin: 1}, i.callback.verify.username)
				}, yalogin: function () {
					b.prelogin({}, i.callback.verify.yalogin)
				}
			}, callback: {
				login: function (b) {
					c.fire("login.complete", b);
					if (b.result) {
						typeof d.loginSuccessUrl != "undefined" && d.loginSuccessUrl != "" && (b.redirect = d.loginSuccessUrl);
						c.fire("login.success", b)
					} else {
						var e = i.extraType(b.errno);
						a.inArray(e, d.extraTypes) ? c.fire("verify.failure", e) : h.extra && c.fire("verify.update", h.extra);
						var f = {code: b.errno, reason: b.reason, type: e || "username"};
						c.fire("login.failure", f)
					}
				}, logout: function (a) {
					c.fire("logout.complete", a);
					a.result ? c.fire("logout.success", a) : c.fire("logout.failure", a)
				}, verify: {
					username: function (a) {
						if (a.nopwd && a.nopwd == 1) {
							a.code = 4098;
							a.type = i.extraType(4098) || "username"
						}
						c.fire("verify.complete", a);
						if (a && a.showpin > 0) {
							var b = i.extraType(a.showpin);
							b && c.fire("verify.update", b)
						}
					}, yalogin: function (a) {
						a.hasOwnProperty("uid") ? c.fire("yalogin.active", a.uid) : c.fire("yalogin.deny")
					}
				}
			}, bind: function () {
				b.customLoginCallBack = i.callback.login;
				b.customLogoutCallBack = i.callback.logout;
				c.register("login", i.login);
				c.register("logout", i.logout);
				c.register("verify.username", i.verify.username);
				c.register("pincode.create", i.getUniqueKey);
				c.register("pincode", i.getPincodeUrl);
				c.register("yalogin.verify", i.verify.yalogin)
			}, getUniqueKey: function () {
				b.getServerTime()
			}, getPincodeUrl: function () {
				var a = b.getPinCodeUrl();
				c.fire("pincode.update", a)
			}, extraType: function (a) {
				if (!d.extraRule) {
					d.extraRule = {};
					var b, c;
					for (b in d.extraConf)for (c in d.extraConf[b])d.extraRule["" + d.extraConf[b][c]] = b
				}
				return d.extraRule["" + a] || !1
			}
		};
		i.init();
		var j = {};
		return j
	}
});
STK.pageletM.register("pl.plugin.sso.login.index", function (a) {
	return a.common.login.sso.loginbridge({
		vsnf: 1,
		hold_login_state: !1,
		cookie_timeout: 0,
		entry: "weibo",
		domain: "weibo.com",
		service: "miniblog",
		useTicket: !0,
		crossDomain: !0,
		feedBackUrl: $CONFIG && $CONFIG.loginFeedBackUrl ? $CONFIG.loginFeedBackUrl : "http://" + window.location.hostname + "/ajaxlogin.php"
	})
});
STK.register("kit.dom.parseDOM", function (a) {
	return function (a) {
		for (var b in a)a[b] && a[b].length == 1 && (a[b] = a[b][0]);
		return a
	}
});
STK.register("common.trans.form", function (a) {
	var b = a.kit.io.inter(), c = b.register;
	c("checkform", {url: "/signup/v5/formcheck", method: "get"});
	c("sendsmsjsonp", {
		url: "http://weibo.com/signup/v5/formcheck" + ($CONFIG.page ? "?page=" + $CONFIG.page : ""),
		requestMode: "jsonp",
		method: "get"
	});
	c("get_pin_code", {url: "/signup/v5/getpincode", method: "get"});
	c("check_pin_code", {url: "/signup/v5/checkpincode", method: "post"});
	return b
});
STK.register("common.trans.account", function (a) {
	var b = a.kit.io.inter(), c = b.register;
	c("btn_quick_opening", {url: "/signup/v5/fullinfo", method: "post"});
	c("register", {url: "/signup/v5/reg", method: "post"});
	c("fullinfo", {url: "/signup/v5/fullinfo", method: "post"});
	c("bindfacebook", {url: "/bindsns/aj/bindfacebook", method: "post"});
	c("updatebindfacebook", {url: "/bindsns/aj/sendtofacebook", method: "post"});
	c("unbindfacebook", {url: "/bindsns/aj/unbindfacebook", method: "post"});
	c("sendemail", {url: "/signup/v5/sendmail", method: "get"});
	return b
});
STK.register("common.setting.form", function (a) {
	var b = ["input", "textarea", "select", "a", "div", "ul", "li", "em"];
	return function (c, d) {
		var e = {}, f, g = "form", h = {ctls: {}, states: {}}, i = {
			reset: function (a) {
				for (var b in a)h.states[b] = a[b]
			}
		}, j = {
			init: function () {
				j.pars();
				j.build();
				j.bind()
			}, pars: function () {
				if (!c)throw"from is undefined";
				f = a.parseParam({proxy: null}, d)
			}, build: function () {
				e.domList = a.builder(c).list
			}, bind: function () {
				a.custEvent.define(e, ["reset"]);
				a.custEvent.add(e, "reset", i.reset)
			}, add: function (a, b) {
				h.ctls[a] = b
			}, getData: function () {
				var d = {};
				for (var e in h.ctls) {
					var f = h.ctls[e];
					d[f.name()] = f.value()
				}
				return a.parseParam(a.htmlToJson(c, b), d)
			}, check: function (a) {
				if (a) {
					var b = h.ctls[a];
					h.states[a] = b.check();
					return h.states[a].type
				}
				var c = !0;
				for (var d in h.ctls) {
					var b = h.ctls[d];
					b.pars.iorecords ? h.states[d] = b.msg : h.states[d] = b.check();
					c = c && h.states[d].state
				}
				return c
			}, reset: function () {
				for (var a in h.ctls)h.states[a].reset()
			}, states: function () {
				for (var a in h.ctls)h.states[a] = h.ctls[a].msg;
				return h.states
			}, destroy: function () {
				for (var a in h.ctls)h.ctls[a].destroy()
			}
		};
		j.init();
		e.ctls = function () {
			return h.ctls
		}();
		e.states = j.states;
		e.add = j.add;
		e.getData = j.getData;
		e.check = j.check;
		e.reset = j.reset;
		e.destroy = j.destroy;
		return e
	}
});
STK.register("kit.extra.orderStr", function (a) {
	return function (a, b) {
		if (!a || !b)throw"orderStr error!";
		typeof a != "string" && (a = a + "");
		typeof b != "string" && (b = b + "");
		var c = a.charCodeAt(0), d = b.charCodeAt(0), e = c > d;
		if (e) {
			var f = c;
			c = d;
			d = f
		}
		var g = [];
		for (var h = c; h <= d; h++)g.push(String.fromCharCode(h));
		e && g.reverse();
		return g.join("")
	}
});
STK.register("common.setting.rule", function (a) {
	var b = a.kit.extra.orderStr, c = {};
	c.isEmpty = function (a) {
		return /^\s*$/g.test(a.replace(/^\s+|\s+$/g, ""))
	};
	c.isNumber = function (a) {
		return /^[+\-]?\d+(\.\d+)?$/.test(a)
	};
	c.isName = function (a) {
		return /^[0-9a-zA-Z\u4e00-\u9fa5_-]+$/.test(a)
	};
	c.isRealName = function (a) {
		return /^[\u4e00-\u9fa5]{2,6}$/.test(a) ? !0 : /^[a-zA-Z]{2,20}$/.test(a) ? !0 : /[a-zA-Z0-9\u3000|\s|\t|\uff00-\uffff～！@#￥%……&×（）——『』【】、。‘“《》\?\~\!\@\#\$\%\^\&\*\\\+\`\=\[\]\(\)\{\}\|\;\'\:\"\,\/\<\>]+/.test(a) ? !1 : !0
	};
	c.isCompany = function (a) {
		return /^[^"'<>]+$/.test(a)
	};
	c.isChinese = function (a) {
		return /[\u4e00-\u9fa5]+$/.test(a)
	};
	c.isCName = function (a) {
		return /^[\u4e00-\u9fa5]+[\u00b7\.]?[\u4e00-\u9fa5]+$/.test(a)
	};
	c.isEmail = function (a) {
		if (!/^[0-9a-z_][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/.test(a))return !1;
		if (a && a != "" && a.indexOf("@") != -1) {
			var b = a.indexOf("@"), c = a.substring(0, b);
			return c.length > 64 || a.length > 256 ? !1 : !0
		}
		return !1
	};
	c.isYahoo = function (a) {
		return /^.*@((yahoo\.com\.cn)||(yahoo\.cn))$/.test(a)
	};
	c.isEmailName = function (a) {
		return /^[0-9a-z_][_.0-9a-z-]{0,31}$/.test(a)
	};
	c.isIDNumber = function (a) {
		return /^[\d]{15}$/.test(a) || /^[\d]{17}([Xx\d]{1}$)$/.test(a)
	};
	c.isMobile = function (a) {
		return /^1[3|4|5|7|8][0-9]{9}$/.test(a)
	};
	c.isWeird = function (a) {
		return !/^[0-9a-zA-Z~!@#$%^&*()_+`\-={}|\[\]\\\:\";'<\>?,.\/]+$/i.test(a)
	};
	c.isPassportID = function (a) {
		return /^[a-zA-Z0-9]{8,20}$/.test(a)
	};
	c.isAbroadName = function (a) {
		return /^[a-zA-Z\u4e00-\u9fa5]+([\u00b7\.\- ]?[a-zA-Z\u4e00-\u9fa5]+)*$/.test(a)
	};
	c.lenLimit = function (b, c, d) {
		var e = a.bLength(b);
		return !(e < c || e > d)
	};
	c.isUrl = function (a) {
		return /^http:\/\/([\w-]+(\.[\w-]+)+(\/[\w-   .\/\?%@&+=\u4e00-\u9fa5]*)?)?$/i.test(a)
	};
	c.turnBoolean = function (a) {
		switch (typeof a) {
			case"boolean":
				return a;
			case"number":
				return !!a;
			case"string":
				return a == "true" || a == "1"
		}
	};
	c.reNullChar = function (a) {
		return a.replace(/^\s+|\s+$/g, "")
	};
	var d = [b("a", "z"), b("z", "a"), b("0", "9"), b("9", "0")];
	c.isOrder = function (a) {
		return a && a.length && a.length > 1 && function () {
				for (var b = 0; b < d.length; b++)if (d[b].indexOf(a) >= 0)return !0;
				return !1
			}()
	};
	c.isWeakPasswd = function (b) {
		var d = ["000000", "111111", "11111111", "112233", "123123", "123321", "123456", "12345678", "654321", "666666", "888888", "abcdef", "abcabc", "abc123", "a1b2c3", "aaa111", "123qwe", "qwerty", "qweasd", "admin", "password", "p@ssword", "passwd", "iloveyou", "5201314"];
		if (a.inArray(b, d))return !0;
		if (/^([a-zA-Z0-9])\1+$/.test(b))return !0;
		if (c.isOrder(b))return !0;
		if (/^([a-zA-Z]+)([0-9]+)$/.test(b) || /^([0-9]+)([a-zA-Z]+)$/.test(b)) {
			var e = RegExp.$1, f = RegExp.$2;
			if (c.isOrder(e) && c.isOrder(f))return !0
		}
		return !1
	};
	c.isStrongPasswd = function (a) {
		var b = a.match(/[a-z]/ig), c = a.match(/[0-9]/ig), d = a.match(/([^a-z0-9])/ig);
		if (b && c && d)return !0;
		if (b && c)return b.length + c.length >= 11;
		if (b && d)return b.length + d.length >= 11;
		if (c && d)return c.length + d.length >= 11
	};
	c.isMobileSea = function (a, b) {
		switch (b) {
			case"0086":
				return c.isMobile(a);
			case"00852":
				return /^[569]\d{7}$/.test(a);
			case"00853":
				return /^6\d{7}$/.test(a);
			case"00886":
				return /^9\d{8}$/.test(a);
			case"001":
				return /^\d{10}$/.test(a);
			case"0060":
				return /^1\d{8}$/.test(a);
			case"0061":
				return /^4\d{8}$/.test(a);
			case"0081":
				return /^[789]0\d{8}$/.test(a);
			case"0082":
				return /^1[016789]\d{8}$/.test(a);
			case"0065":
				return /^[89]\d{7}$/.test(a);
			case"0044":
				return /^(7[45789]\d{8})|7624\d{6}$/.test(a);
			case"0033":
				return /^((6\d{8})|(7[345678]\d{7}))$/.test(a);
			case"007":
				return /^((90[12345689]\d{7})|(9[1236]\d{8})|(95[0123]\d{7}))$/.test(a);
			case"0091":
				return /^[987]\d{9}$/.test(a);
			case"0066":
				return /^[98]\d{8}$/.test(a);
			case"0049":
				return /^(15[12579]\d{7}|16[023]\d{7}|160\d{8}|17[012345789]\d{7}|176\d{8}|700\d{8})$/.test(a);
			default:
				return !0
		}
	};
	return c
});
STK.register("common.setting.textCopy", function (a) {
	var b = a.common.setting.rule, c = a.core.dom.uniqueID, d = {text: "text"}, e = function (a) {
		var b = [];
		for (var c in a)b.push(a[c]);
		return b
	};
	return function (e, f) {
		var g, h = {
			blur: function (b) {
				var c = a.fixEvent(b).target;
				i.text.reset(c);
				a.custEvent.fire(o, "blur", {type: options.actionType, el: c});
				var d = c.getAttribute("no_cls");
				d != "true" && a.removeClassName(c, options.focusCS)
			}, focus: function (b) {
				var c = a.fixEvent(b).target;
				i.text.place(c);
				a.custEvent.fire(o, "focus", {type: options.actionType, el: c});
				var d = c.getAttribute("no_cls");
				d != "true" && a.addClassName(c, options.focusCS)
			}, keyup: function (b) {
				var c = a.fixEvent(b).target;
				a.custEvent.fire(o, "keyup", {type: options.actionType, el: c})
			}
		}, i = {
			text: {
				place: function (a) {
					a.value.replace(/^\s+|\s+$/g, "") == k[c(a)].data[d.text] && (a.value = "")
				}, reset: function (a) {
					b.isEmpty(a.value) && (a.value = k[c(a)].data[d.text] || "")
				}
			}
		}, j = function (a) {
			m.buildItem(a);
			m.active(a.el)
		}, k = {}, l = {click: j, focusin: j}, m = {
			init: function () {
				m.parseParam();
				m.bind()
			}, parseParam: function () {
				options = a.parseParam({actionType: "text_copy", focusCS: "W_input_focus"}, f);
				d = a.parseParam(d, f)
			}, bind: function () {
				g = a.core.evt.delegatedEvent(e);
				for (var b in l)g.add(options.actionType, b, l[b])
			}, destroy: function () {
				g.destroy();
				for (var b in k)for (var c in h)a.removeEvent(b.el, c, h[c])
			}, buildItem: function (b) {
				var e = c(b.el);
				if (!k[e]) {
					k[e] = {el: b.el || "", data: {}};
					for (var f in d)k[e].data[d[f]] = b.data[d[f]] || "";
					for (var g in h)a.addEvent(b.el, g, h[g])
				}
			}, active: function (b) {
				i.text.place(b);
				var c = b.getAttribute("no_cls");
				c != "true" && a.addClassName(b, options.focusCS)
			}
		}, n = {
			isCopyText: function (b) {
				var c = b.getAttribute("action-type"), d = a.queryToJson(b.getAttribute("action-data"));
				return b.value.replace(/^\s+|\s+$/g, "") == (d[c].replace(/^\s+|\s+$/g, "") || "")
			}, build: m.buildItem
		};
		m.init();
		var o = {};
		o.API = n;
		o.destroy = m.destroy;
		return o
	}
});
STK.register("common.setting.base", function (a) {
	return function () {
		var b = {};
		b.frame = ["id", "preInit", "init", "initPars", "build", "bind", "errText", "setMust", "setMsg", "disabled", "check", "name", "value", "reset", "fire", "destroy"];
		for (var c in b.frame)b[b.frame[c]] = a.core.func.empty;
		return b
	}
});
STK.register("common.setting.dataType", function (a) {
	var b = a.kit.extra.language, c = {
		msg: {
			id: "",
			state: !0,
			type: "empty",
			code: "",
			action: "",
			msg: "",
			iodata: null,
			iorecords: !1
		},
		initPars: {
			text: "",
			hook: null,
			type: "",
			proxy: null,
			iokey: null,
			disabled: !1,
			iodelay: 0,
			must: !0,
			auto: !0
		},
		errText: {E00: b("#L{系统繁忙}")}
	}, d = {};
	d.get = function (b) {
		return a.core.json.clone(c[b]) || {}
	};
	return d
});
STK.register("common.setting.control", function (a) {
	return function (b, c, d) {
		var e = a.common.setting.base();
		e.preInit = function () {
			e.id = a.core.dom.uniqueID(b);
			e.dataType = a.common.setting.dataType;
			e.rule = a.common.setting.rule;
			e.pars = a.parseParam(e.dataType.get("initPars"), c)
		};
		e.init = function () {
			e.initPars();
			e.build();
			e.bind()
		};
		e.initPars = function () {
			e.check();
			e.msg.msg = e.errText[e.msg.code] || "";
			e.msg.action = "init";
			e.cache_value = null;
			e.old_value = e.value();
			var a = ["must", "disabled"];
			for (var b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				e.pars[d] = e.rule.turnBoolean(e.pars[d])
			}
		};
		e.build = function () {
			e.rule.isEmpty(b.defaultValue) && (e.pars.text ? b.value = e.pars.text : b.value = "");
			e.pars.disabled && e.disabled(e.pars.disabled);
			e.node = b
		};
		e.bind = function () {
			for (var c in d.evtAct)a.addEvent(b, c, d.evtAct[c]);
			if (e.pars.iokey) {
				var f = function () {
					e.pars.iorecords = !1
				};
				a.addEvent(b, "change", f)
			}
		};
		e.check = function () {
			e.msg = e.dataType.get("msg");
			e.msg.id = e.id;
			e.msg.action = "check";
			if (e.pars.disabled) {
				e.msg.state = !0;
				e.msg.type = "empty";
				e.msg.code = "E01"
			} else d.check && d.check();
			e.msg.msg = e.errText[e.msg.code];
			return e.msg
		};
		e.setMust = function (a) {
			a = e.rule.turnBoolean(a);
			a != undefined && (e.pars.disabled = a)
		};
		e.setMsg = function (b) {
			e.pars.iokey && (e.pars.iorecords = !1);
			e.msg = a.parseParam(e.dataType.get("msg"), b)
		};
		e.fire = function () {
			e.errText[e.msg.code] && (e.msg.msg = e.errText[e.msg.code]);
			var b = {};
			b[e.type] = e.msg;
			e.pars.hook && a.custEvent.fire(e.pars.hook, "check", b)
		};
		e.disabled = function (a) {
			a = e.rule.turnBoolean(a);
			if (a != undefined) {
				e.pars.disabled = a;
				a ? b.disabled = !0 : b.disabled = !1
			}
		};
		e.name = function () {
			return b.getAttribute("name") || e.id
		};
		e.value = function (a) {
			if (typeof a != "undefined")b.value = a; else return b.value === e.pars.text ? "" : b.value.replace(/^\s+|\s+$/g, "")
		};
		e.reset = function (b) {
			e.value(e.old_value);
			e.pars = a.parseParam(e.dataType.get("initPars"), c);
			e.check();
			e.msg.action = "reset";
			!b && e.fire()
		};
		e.destroy = function () {
			for (var c in d.evtAct)a.removeEvent(b, c, d.evtAct[c])
		};
		e.preInit();
		return e
	}
});
STK.register("common.extra.parseLanguage", function (a) {
	var b, c = function (d) {
		if (typeof d == "string")return a.core.util.language(d, b);
		for (var e in d)d[e] = c(d[e]);
		return d
	};
	return function (a, d) {
		b = d || window.$LANG || {};
		return c(a)
	}
});
STK.register("common.setting.email", function (a) {
	var b = {E01: "", E02: "#L{您填写的邮箱将作为微博登录名}", E03: "#L{请输入正确的邮箱地址}", E04: "#L{微博已停止雅虎邮箱注册}"};
	return function (c, d) {
		var e, f = function () {
			var a = i.value(), b = !1;
			if (!i.pars.must && i.rule.isEmpty(a)) {
				i.msg.state = !0;
				i.msg.type = "empty";
				i.msg.code = "E01"
			} else {
				if (!b && i.rule.isEmpty(a)) {
					b = !0;
					i.msg.type = "err";
					i.msg.code = "E03"
				}
				if (!b && i.rule.isEmail(a) && i.rule.isYahoo(a)) {
					b = !0;
					i.msg.type = "err";
					i.msg.code = "E04"
				}
				if (!b && !i.rule.isEmail(a)) {
					b = !0;
					i.msg.type = "err";
					i.msg.code = "E03"
				}
				if (!b && !i.rule.lenLimit(a, 5, 64)) {
					b = !0;
					i.msg.type = "err";
					i.msg.code = "E03"
				}
				if (!b) {
					i.msg.state = !0;
					i.msg.type = "ok";
					i.msg.code = "E01"
				} else i.msg.state = !1
			}
		}, g = {
			verify: function () {
				i.pars.iorecords = !0;
				var b = {type: i.type, value: encodeURIComponent(i.value())}, d = c.getAttribute("from");
				d && (b = a.core.json.merge(b, {from: d}));
				i.pars.proxy.request(i.pars.iokey, {
					onSuccess: function (b) {
						i.msg = a.parseParam(i.msg, b.data || {});
						i.msg.state = !0;
						i.fire()
					}, onError: function (b) {
						i.msg = a.parseParam(i.msg, b.data || {});
						i.msg.state = !1;
						i.fire()
					}
				}, b)
			}
		}, h = {
			focus: function () {
				i.cache_value = i.value();
				if (i.rule.isEmpty(i.cache_value)) {
					i.msg.state = !1;
					i.msg.action = "focus";
					i.msg.type = "tip";
					i.msg.code = "E02";
					i.fire()
				}
			}, blur: function () {
				c.value = i.rule.reNullChar(c.value);
				c.value = i.rule.reNullChar(c.value);
				i.msg.action = "blur";
				var a = i.value();
				if (!(a && i.cache_value == a && i.pars.proxy && i.pars.iokey)) {
					i.cache_value = null;
					if (i.pars.iodelay === 0 && !i.pars.proxy && !i.pars.iokey) {
						f();
						i.fire()
					} else e = setTimeout(function () {
						f();
						if (i.msg.state && i.pars.proxy && i.pars.iokey && !i.rule.isEmpty(a)) {
							i.msg.type = "loading";
							g.verify()
						}
						i.fire();
						clearTimeout(e);
						e = null
					}, i.pars.iodelay)
				}
			}
		}, i = a.common.setting.control(c, d, {evtAct: h, check: f}), j = a.core.obj.sup(i, ["initPars"]);
		i.initPars = function () {
			j.initPars();
			i.errText = a.common.extra.parseLanguage(b);
			i.type = "email"
		};
		i.pars.auto && i.init();
		i.value() && setTimeout(function () {
			a.fireEvent(c, "blur")
		}, 100);
		return i
	}
});
STK.register("common.setting.password", function (a) {
	var b = {
		E01: "",
		E02: "#L{请输入6-16位数字、字母或常用符号，字母区分大小写}",
		E03: "#L{请输入密码}",
		E04: "#L{请输入6-16位数字、字母或常用符号，字母区分大小写}",
		E05: "#L{请输入6-16位数字、字母或常用符号，字母区分大小写}",
		E06: "#L{您的密码很安全}",
		E07: "#L{您的密码还可以更复杂些}",
		E08: "#L{弱：您输入的密码强度过弱，请重新输入，试试字母、数字、常用符号的组合}"
	};
	return function (c, d) {
		var e = function (a) {
			return k.rule.isWeakPasswd(a) ? 0 : k.rule.isStrongPasswd(a) ? 2 : 1
		}, f = function () {
			var a = k.value().replace(/^\s+|\s+$/g, ""), b = !1;
			if (!k.pars.must && k.rule.isEmpty(a)) {
				k.msg.state = !0;
				k.msg.type = "empty";
				k.msg.code = "E01"
			} else {
				if (!b && k.rule.isEmpty(a)) {
					b = !0;
					k.msg.type = "err";
					k.msg.code = "E03"
				}
				if (!b && !k.rule.lenLimit(a, 6, 16)) {
					b = !0;
					k.msg.type = "err";
					k.msg.code = "E04"
				}
				if (!b && k.rule.isWeird(a)) {
					b = !0;
					k.msg.type = "err";
					k.msg.code = "E05"
				}
				if (!b) {
					var c = e(a);
					k.msg.type = "power" + c;
					if (c == 0) {
						k.msg.type = "err";
						k.msg.code = "E08";
						k.msg.state = !1
					} else {
						k.msg.state = !0;
						k.msg.code = c == 1 ? "E07" : "E06"
					}
				} else k.msg.state = !1
			}
		}, g = a.core.dom.next(c), h = {
			init: function () {
				h.auto()
			}, auto: function () {
				k.rule.isEmpty(k.value()) ? h.show() : h.hide()
			}, show: function () {
				if (g) {
					g.style.display = "";
					a.addEvent(g, "click", function () {
						c.focus();
						a.removeEvent(g, "click", arguments.callee)
					})
				}
			}, hide: function () {
				g && (g.style.display = "none")
			}
		}, i = !1, j = {
			focus: function () {
				i = !0;
				setTimeout(function () {
					i = !1
				}, 100);
				k.cache_value = k.value();
				if (k.rule.isEmpty(k.cache_value)) {
					k.msg.state = !1;
					k.msg.action = "focus";
					k.msg.type = "tip";
					k.msg.code = "E02";
					k.fire()
				}
				h.hide()
			}, keydown: function (b) {
				var c, d;
				!!(c = b) && !!(d = c.keyCode) && d == 32 && a.stopEvent()
			}, keyup: function (a) {
				var b, c;
				if (!!(b = a) && !!(c = b.keyCode)) {
					if (c == 32)return;
					if (i)return;
					k.msg.action = "keyup";
					f();
					k.fire()
				}
			}, blur: function () {
				c.value = k.rule.reNullChar(c.value);
				k.msg.action = "blur";
				f();
				k.fire();
				h.auto()
			}
		}, k = a.common.setting.control(c, d, {evtAct: j, check: f}), l = a.core.obj.sup(k, ["initPars"]);
		k.initPars = function () {
			l.initPars();
			k.errText = a.common.extra.parseLanguage(b);
			k.type = "password"
		};
		k.pars.auto && k.init();
		h.init();
		return k
	}
});
STK.register("common.setting.verifycodereg", function (a) {
	var b = {E01: "", E02: "#L{请输入验证码}", E03: "#L{验证码输入有误}"};
	return function (c, d) {
		var e = function () {
			var a = g.value().replace(/^\s+|\s+$/g, ""), b = !1;
			if (!g.pars.must && g.rule.isEmpty(a)) {
				g.msg.state = !0;
				g.msg.type = "empty";
				g.msg.code = "E01"
			} else {
				if (!b && g.rule.isEmpty(a)) {
					b = !0;
					g.msg.type = "err";
					g.msg.code = "E02"
				}
				if (!b && !g.rule.lenLimit(a, 4, 6)) {
					b = !0;
					g.msg.type = "err";
					g.msg.code = "E03"
				}
				if (!b) {
					g.msg.state = !0;
					g.msg.type = "empty";
					g.msg.code = "E01"
				} else g.msg.state = !1
			}
		}, f = {
			focus: function () {
				g.cache_value = g.value();
				if (g.rule.isEmpty(g.cache_value)) {
					g.msg.state = !1;
					g.msg.action = "focus";
					g.msg.type = "tip";
					g.msg.code = "E02";
					g.fire()
				}
			}, blur: function () {
				c.value = g.rule.reNullChar(c.value);
				g.msg.action = "blur";
				e();
				g.fire()
			}
		}, g = a.common.setting.control(c, d, {evtAct: f, check: e}), h = a.core.obj.sup(g, ["initPars"]);
		g.initPars = function () {
			h.initPars();
			g.errText = a.common.extra.parseLanguage(b);
			g.type = "verifycodereg"
		};
		g.pars.auto && g.init();
		return g
	}
});
STK.register("common.setting.jumpStatics", function (a) {
	var b = function (a) {
		return (a.tagName || "").toUpperCase() === "A" && !/^javascript:/.test(a.href)
	};
	return function (c) {
		var d = {};
		c = a.parseParam({listenTarget: document.documentElement, analyticsLink: "", judge: b}, c);
		var e = c.listenTarget, f = c.analyticsLink;
		if (a.isNode(e) && f) {
			var g = function (b) {
				b = a.fixEvent(b);
				var d = b.target;
				while (d && !c.judge(d))d = d.parentNode;
				var e = d && c.judge(d);
				!e || ((new Image).src = c.analyticsLink)
			};
			a.addEvent(e, "click", g);
			d.destroy = function () {
				a.removeEvent(e, "click", g)
			}
		} else d.destroy = a.funcEmpty;
		return d
	}
});
STK.register("common.extra.keyboardCapture", function (a) {
	var b = {13: "enter", 27: "esc", 32: "space", 38: "up", 40: "down", 9: "tab"};
	return function (c, d) {
		d = d || {};
		var e = {}, f, g = {
			keydown: function (c) {
				d.stopScroll && a.stopEvent();
				var f, g;
				!!(f = c) && !!(g = f.keyCode) && b[g] && a.custEvent.fire(e, b[g])
			}
		}, h = {
			init: function () {
				h.pars();
				h.bind()
			}, pars: function () {
			}, bind: function () {
				for (var b in g)a.addEvent(c, b, g[b])
			}, getKey: function (a) {
				return b[a]
			}, destroy: function () {
				for (var b in g)a.removeEvent(c, b, g[b])
			}
		};
		h.init();
		e.getKey = h.getKey;
		e.destroy = h.destroy;
		return e
	}
});
STK.register("kit.extra.textareaUtils", function (a) {
	var b = {}, c = document.selection;
	b.selectionStart = function (a) {
		if (!c)try {
			return a.selectionStart
		} catch (b) {
			return 0
		}
		var d = c.createRange(), e, f, g = 0, h = document.body.createTextRange();
		try {
			h.moveToElementText(a)
		} catch (b) {
		}
		for (g; h.compareEndPoints("StartToStart", d) < 0; g++)h.moveStart("character", 1);
		return g
	};
	b.selectionBefore = function (a) {
		return a.value.slice(0, b.selectionStart(a))
	};
	b.selectText = function (a, b, d) {
		a.focus();
		if (!c)a.setSelectionRange(b, d); else {
			var e = a.createTextRange();
			e.collapse(1);
			e.moveStart("character", b);
			e.moveEnd("character", d - b);
			e.select()
		}
	};
	b.insertText = function (a, d, e, f) {
		a.focus();
		f = f || 0;
		if (!c) {
			var g = a.value, h = e - f, i = h + d.length;
			a.value = g.slice(0, h) + d + g.slice(e, g.length);
			b.selectText(a, i, i)
		} else {
			var j = c.createRange();
			j.moveStart("character", -f);
			j.text = d
		}
	};
	b.replaceText = function (a, d) {
		a.focus();
		var e = a.value, f = b.getSelectedText(a), g = f.length;
		if (f.length == 0)b.insertText(a, d, b.getCursorPos(a)); else {
			var h = b.getCursorPos(a);
			if (!c) {
				var j = h + f.length;
				a.value = e.slice(0, h) + d + e.slice(h + g, e.length);
				b.setCursor(a, h + d.length);
				return
			}
			var i = c.createRange();
			i.text = d;
			b.setCursor(a, h + d.length)
		}
	};
	b.getCursorPos = function (a) {
		var b = 0;
		if (STK.core.util.browser.IE) {
			a.focus();
			var d = null;
			d = c.createRange();
			var e = d.duplicate();
			e.moveToElementText(a);
			e.setEndPoint("EndToEnd", d);
			a.selectionStartIE = e.text.length - d.text.length;
			a.selectionEndIE = a.selectionStartIE + d.text.length;
			b = a.selectionStartIE
		} else if (a.selectionStart || a.selectionStart == "0")b = a.selectionStart;
		return b
	};
	b.getSelectedText = function (a) {
		var b = "", d = function (a) {
			return a.selectionStart != undefined && a.selectionEnd != undefined ? a.value.substring(a.selectionStart, a.selectionEnd) : ""
		};
		window.getSelection ? b = d(a) : b = c.createRange().text;
		return b
	};
	b.setCursor = function (a, b, c) {
		b = b == null ? a.value.length : b;
		c = c == null ? 0 : c;
		a.focus();
		if (a.createTextRange) {
			var d = a.createTextRange();
			d.move("character", b);
			d.moveEnd("character", c);
			d.select()
		} else a.setSelectionRange(b, b + c)
	};
	b.unCoverInsertText = function (a, b, c) {
		c = c == null ? {} : c;
		c.rcs = c.rcs == null ? a.value.length : c.rcs * 1;
		c.rccl = c.rccl == null ? 0 : c.rccl * 1;
		var d = a.value, e = d.slice(0, c.rcs), f = d.slice(c.rcs + c.rccl, d == "" ? 0 : d.length);
		a.value = e + b + f;
		this.setCursor(a, c.rcs + (b == null ? 0 : b.length))
	};
	return b
});
STK.register("common.layer.emailAutocomplete", function (a) {
	var b = a.kit.extra.textareaUtils, c = a.kit.extra.language, d = ["sina.com", "163.com", "qq.com", "126.com", "vip.sina.com", "sina.cn", "hotmail.com", "gmail.com", "sohu.com", "139.com", "wo.com.cn", "189.cn", "21cn.com"], e = {
		panel: ['<div node-type="layer" class="layer_menu_list" style="display:none;">', '<ul><li class="note">#L{请选择邮箱类型}</li></ul>', '<ul node-type="panel"></ul>', "</div>"].join(""),
		item: ["<#et userlist data>", "<#list data.data as item>", '<li action-type="item" action-data="value=${data.key}@${item}" ><a href="#">${data.key}@${item}</a></li>', "</#list>", "</#et>"].join("")
	}, f = ["enter", "esc", "up", "down"], g = [/^[0-9a-z_][_.0-9a-z-]{0,31}$/, /^[0-9a-zA-Z_][_.0-9a-zA-Z-]{0,31}$/], h = {};
	return function (b, i) {
		var j, k, l, m, n, o, p, q = !1, r = {
			get: function (a) {
				var b = a.split("@"), c = b.length;
				if (c == 2) {
					var e = b[1].toLowerCase();
					if (!!e && !/^[0-9a-z]+[0-9a-z-.]*$/.test(e))return null;
					if (e) {
						!h[e] && r.run(e);
						return h[e]
					}
					return d
				}
				return null
			}, run: function (a) {
				var b = new RegExp("^" + a + "");
				h[a] = [];
				for (var c in d) {
					c = d[c];
					!!b.exec(c) && h[a].push(c)
				}
			}, checkFormat: function (a, b) {
				b = !b ? 0 : 1;
				return g[b].test(a)
			}
		}, s, t = {
			build: function () {
				var b = a.builder(c(j.template.panel));
				k = b.list.layer[0];
				l = b.list.panel[0];
				document.body.appendChild(b.box)
			}, show: function () {
				var c = a.core.dom.position(b), d = a.core.dom.getSize(b), e = ["position:absolute", "display:inline-block", "z-index:10010", "left:" + (c.l + j.offsetX) + "px", "top:" + (c.t + d.height + j.offsetY) + "px"];
				if (j.width > 0) {
					e.push("width:" + j.width + "px");
					e.push("overflow:hidden")
				}
				k.style.cssText = e.join(";");
				q = !0
			}, hide: function () {
				setTimeout(function () {
					k.style.display = "none";
					q = !1
				}, 300)
			}, refresh: function (b, c, d) {
				l.innerHTML = a.core.util.easyTemplate(j.template.item, {
					key: encodeURIComponent(b),
					domain: c,
					data: d
				}).toString();
				s = null
			}, indexChange: function (b) {
				var c = p.length;
				if (!(c < 1)) {
					var d = a.sizzle("li.cur", l)[0];
					if (d) {
						var e = a.core.dom[b > 0 ? "next" : "prev"](d);
						e ? s = e : s = a.core.dom[(b > 0 ? "first" : "last") + "Child"](l);
						s && a.removeClassName(d, "cur")
					} else {
						var f = a.sizzle("li", l);
						s = a.sizzle("li", l)[0]
					}
					a.addClassName(s, "cur")
				}
			}, onShown: function () {
				return q
			}, hasCurrent: function () {
				var b = a.sizzle("li.cur", l)[0];
				return b ? !0 : !1
			}
		}, u = {
			enter: function () {
				var c = b.value;
				j.autoTrim && (c = c.replace(/^\s+/g, ""));
				var d = a.queryToJson(s.getAttribute("action-data"));
				if (d.value.indexOf(c) === 0 && c !== "") {
					b.value = d.value;
					b.blur()
				}
			}, esc: function () {
				x.hide()
			}, up: function () {
				t.indexChange(-1);
				a.preventDefault()
			}, down: function () {
				t.indexChange(1);
				a.preventDefault()
			}
		}, v = {
			focus: function () {
				x.show()
			}, blur: function () {
				x.hide()
			}, keyup: function (a) {
				var b = a.keyCode;
				!u[n.getKey(b)] && !m && (m = setTimeout(function () {
					x.show();
					clearTimeout(m);
					m = null
				}, 500))
			}
		}, w = {
			mousedown: {
				item: function (a) {
					b.value = a.data.value
				}
			}, click: {
				item: function (b) {
					a.preventDefault();
					x.hide()
				}
			}
		}, x = {
			init: function () {
				if (!a.isNode(b))throw"input is undefined";
				x.pars();
				x.build();
				x.bind()
			}, pars: function () {
				j = a.parseParam({template: e, autoTrim: !1, autoCase: !1, width: -1, offsetX: 0, offsetY: 0}, i || {});
				d = $CONFIG.emailDomains || i && i.domains || d
			}, build: function () {
				t.build();
				n = a.common.extra.keyboardCapture(b)
			}, bind: function () {
				a.custEvent.define(n, f);
				for (var c = 0, d = f.length; c < d; c++)a.custEvent.add(n, f[c], u[f[c]]);
				for (var e in v)a.addEvent(b, e, v[e]);
				o = a.delegatedEvent(l);
				for (var e in w) {
					var g = w[e];
					for (var h in g)o.add(h, e, g[h])
				}
			}, show: function () {
				p = r.get(b.value);
				var a = b.value.split("@"), c = a[0], d = a[1];
				j.autoTrim && (c = c.replace(/^\s+/g, ""));
				if (p && p[0] && r.checkFormat(c, j.autoCase)) {
					if (p.length == 1 && d == p[0])return;
					t.refresh(c, d, p);
					t.show()
				} else t.hide()
			}, hide: function () {
				t.hide()
			}, destroy: function () {
				for (var c in v)a.removeEvent(b, c, v[c]);
				a.custEvent.undefine(n, f);
				o.destroy();
				n.destroy()
			}, onShown: t.onShown, onActive: function () {
				return t.onShown() && t.hasCurrent()
			}
		};
		x.init();
		var y = {};
		y.show = x.show;
		y.hide = x.hide;
		y.onShown = x.onShown;
		y.onActive = x.onActive;
		y.destroy = x.destroy;
		return y
	}
});
STK.register("ui.vipConfirm", function (a) {
	var b = '<div node-type="outer" class="layer_point"><dl class="point clearfix"><dt><span class="" node-type="icon"></span></dt><dd node-type="inner"><p class="S_txt1" node-type="textLarge"></p><p class="S_txt2" node-type="textComplex"></p><p class="S_txt2" node-type="textSmall"></p></dd></dl><div class="btn"><a href="javascript:void(0)" class="W_btn_b" node-type="OK"></a><a href="javascript:void(0)" class="W_btn_a" node-type="toBeVip"></a></div></div>', c = {
		success: "icon_succM",
		error: "icon_errorM",
		warn: "icon_warnM",
		"delete": "icon_delM",
		question: "icon_questionM"
	}, d = a.kit.extra.language, e = null;
	return function (f, g) {
		var h, i, j, k, l, m, n;
		h = a.parseParam({
			title: d("#L{提示}"),
			icon: "question",
			textLarge: f,
			textComplex: "",
			textSmall: "",
			OK: a.funcEmpty,
			OKText: d("#L{确定}"),
			cancel: a.funcEmpty,
			cancelText: d("#L{取消}"),
			toBeVip: a.funcEmpty,
			toBeVipText: ""
		}, g);
		h.icon = c[h.icon];
		i = {};
		e || (e = a.kit.extra.reuse(function () {
			var c = a.ui.mod.layer(b);
			return c
		}));
		j = e.getOne();
		k = a.ui.dialog();
		k.setContent(j.getOuter());
		j.getDom("icon").className = h.icon;
		j.getDom("textLarge").innerHTML = h.textLarge;
		j.getDom("textComplex").innerHTML = h.textComplex;
		j.getDom("textSmall").innerHTML = h.textSmall;
		j.getDom("OK").innerHTML = "<span>" + h.OKText + "</span>";
		j.getDom("toBeVip").innerHTML = '<span><em class="W_ico16 ico_member"></em>' + h.toBeVipText + "</span>";
		k.setTitle(h.title);
		var o = function () {
			l = !0;
			m = a.htmlToJson(j.getDom("textComplex"));
			k.hide()
		}, p = function () {
			n = !0;
			k.hide()
		};
		a.addEvent(j.getDom("OK"), "click", o);
		a.addEvent(j.getDom("toBeVip"), "click", p);
		a.custEvent.add(k, "hide", function () {
			a.custEvent.remove(k, "hide", arguments.callee);
			a.removeEvent(j.getDom("OK"), "click", o);
			a.removeEvent(j.getDom("toBeVip"), "click", p);
			e.setUnused(j);
			l ? h.OK(m) : h.cancel(m);
			n && h.toBeVip()
		});
		k.show().setMiddle();
		i.cfm = j;
		i.dia = k;
		return i
	}
});
STK.register("kit.io.cssLoader", function (a) {
	var b = "", c = "http://img.t.sinajs.cn/t4/", d = "http://timg.sjs.sinajs.cn/t4/";
	if (typeof $CONFIG != "undefined") {
		c = $CONFIG.cssPath || c;
		b = $CONFIG.version || ""
	}
	var e = {};
	return function (f, g, h, i, j) {
		i = i || b;
		h = h || function () {
			};
		var k = function (a, b) {
			var c = e[a] || (e[a] = {loaded: !1, list: []});
			if (c.loaded) {
				b(a);
				return !1
			}
			c.list.push(b);
			return c.list.length > 1 ? !1 : !0
		}, l = function (a) {
			var b = e[a].list;
			for (var c = 0; c < b.length; c++)b[c](a);
			e[a].loaded = !0;
			delete e[a].list
		};
		if (!!k(f, h)) {
			var m;
			/^http:\/\//i.test(f) ? m = f : j ? m = d + f : m = c + f + "?version=" + i;
			var n = a.C("link");
			n.setAttribute("rel", "Stylesheet");
			n.setAttribute("type", "text/css");
			n.setAttribute("charset", "utf-8");
			n.setAttribute("href", m);
			document.getElementsByTagName("head")[0].appendChild(n);
			var o = a.C("div");
			o.id = g;
			a.core.util.hideContainer.appendChild(o);
			var p = 3e3, q = function () {
				if (parseInt(a.core.dom.getStyle(o, "height")) == 42) {
					a.core.util.hideContainer.removeChild(o);
					l(f)
				} else if (--p > 0)setTimeout(q, 10); else {
					a.log(f + "timeout!");
					a.core.util.hideContainer.removeChild(o);
					delete e[f]
				}
			};
			setTimeout(q, 50)
		}
	}
});
STK.register("common.dialog.authentication", function (a) {
	return function (b) {
		var c = a.kit.extra.language, d = a.core.util.browser;
		b = a.parseParam({
			src: "http://weibo.com/a/verify/realname?stage=home_verification",
			icon: "warn",
			isHold: !0,
			width: "380px",
			height: "240px",
			title: c("#L{帐号验证}")
		}, b || {});
		var e = {}, f, g, h = !1, i = "tblog_checkfailed_reform", j = {
			init: function () {
				f = a.ui.dialog(b);
				var c = [];
				c.push('<iframe id="account_authenticationRegister" name="account_authenticationRegister" node-type="frame" width="' + b.width + '" height="' + b.height + '" allowtransparency="true" scrolling="no" frameborder="0" src=""></iframe>');
				var d = a.builder(c.join(""));
				f.setTitle(b.title);
				f.setContent(d.box);
				var e = f.getDomList()
			}, show: function () {
				try {
					SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_box")
				} catch (c) {
				}
				h || a.kit.io.cssLoader("style/css/module/layer/layer_check_identity.css", "js_style_css_module_layer_check_identity", function () {
					h = !0
				});
				f.show().setMiddle();
				g = a.E("account_authenticationRegister");
				var d = decodeURIComponent(b.src) + "&rnd=";
				g.attachEvent ? g.attachEvent("onload", function () {
					g.height = b.height;
					f.setMiddle()
				}) : g.onload = function () {
					g.height = b.height;
					f.setMiddle()
				};
				g.src = d + a.core.util.getUniqueKey()
			}, destroy: function () {
			}, hook: function (a, b) {
				try {
					a == "100000" ? j.verifySucc() : j.verifyFail()
				} catch (c) {
				}
			}, verifySucc: function () {
				SUDA && SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_success");
				f.hide();
				var b = {
					title: c("#L{提示}"), icon: "success", OK: function () {
						SUDA && SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_play");
						history.go(0)
					}, OKText: c("#L{进入首页}"), msg: c("#L{恭喜，您的身份已验证成功，马上进入微博。}")
				}, d = a.ui.alert(b.msg, b);
				a.custEvent.add(d, "hide", function () {
					history.go(0)
				})
			}, verifyFail: function () {
				SUDA && SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_twotimes");
				f.hide();
				var b = {
					title: c("#L{提示}"),
					icon: "warn",
					OK: function () {
						SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_triple");
						j.show()
					},
					OKText: c("#L{再次验证}"),
					msg: c("#L{抱歉，您的身份信息不准确，请再次验证。<br/>}") + '<a class="S_spetxt" suda-data="key=tblog_checkfailed_reform&value=checkfailed_havealook" href="http://weibo.com">' + c("#L{您也可以先体验微博，随后再验证身份信息>>}") + "</a>"
				}, d = a.ui.alert(b.msg, b);
				a.custEvent.add(d, "hide", function () {
					history.go(0)
				})
			}
		};
		j.init();
		e.destroy = j.destory;
		e.show = j.show;
		window.App = window.App || {};
		window.App.checkRealName = j.hook;
		return e
	}
});
STK.register("common.dialog.memberDialog", function (a) {
	var b = '<div node-type="outer" class="layer_point"><dl class="point clearfix"><dt><span class="" node-type="icon"></span></dt><dd node-type="inner"><p class="S_txt1" node-type="textLarge"></p><p class="S_txt1" node-type="textComplex"></p><p class="S_txt2" node-type="textSmall"></p></dd></dl><div class="btn"><a class="W_btn_b" node-type="OK"></a><a class="W_btn_d" node-type="cancel"></a><a href="http://vip.weibo.com/paycenter?pageid=byebank" class="W_btn_i" node-type="member"><span><img class="ico_member" alt="" src="' + $CONFIG.imgPath + '/style/images/common/transparent.gif">#L{立即开通会员}</span></a>' + "</div>" + "</div>", c = {
		success: "icon_succM",
		error: "icon_errorM",
		warn: "icon_warnM",
		"delete": "icon_delM",
		question: "icon_questionM"
	}, d = a.kit.extra.language, e = function (e, f) {
		var g, h, i, j, k, l;
		g = a.parseParam({
			title: d("#L{提示}"),
			icon: "warn",
			textLarge: e,
			textComplex: "",
			textSmall: "",
			OK: a.funcEmpty,
			OKText: d("#L{确定}"),
			cancel: a.funcEmpty,
			cancelText: d("#L{确认}")
		}, f);
		g.icon = c[g.icon];
		h = {};
		var i = a.ui.mod.layer(d(b));
		j = a.ui.dialog();
		j.setContent(i.getOuter());
		i.getDom("icon").className = g.icon;
		i.getDom("textLarge").innerHTML = g.textLarge;
		i.getDom("textComplex").innerHTML = g.textComplex;
		i.getDom("textSmall").innerHTML = g.textSmall;
		i.getDom("OK").innerHTML = "<span>" + g.OKText + "</span>";
		i.getDom("cancel").innerHTML = "<span>" + g.cancelText + "</span>";
		j.setTitle(g.title);
		var m = function () {
			k = !0;
			l = a.htmlToJson(i.getDom("textComplex"));
			j.hide()
		};
		a.addEvent(i.getDom("OK"), "click", m);
		a.addEvent(i.getDom("cancel"), "click", j.hide);
		a.custEvent.add(j, "hide", function () {
			a.custEvent.remove(j, "hide", arguments.callee);
			a.removeEvent(i.getDom("OK"), "click", m);
			a.removeEvent(i.getDom("cancel"), "click", j.hide);
			k ? g.OK(l) : g.cancel(l)
		});
		j.show().setMiddle();
		h.cfm = i;
		h.dia = j;
		return h
	};
	return function (b) {
		b = a.parseParam({type: "follow", errortype: "1"}, b);
		var c, f, g = {
			textLarge: d("#L{您已达到悄悄关注上限！}"),
			textComplex: d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{悄悄关注上限立即提高}'),
			textSmall: d('#L{可}<a href="http://vip.weibo.com/paycenter?pageid=byebank" class="S_link2">#L{开通会员}</a>#L{或先将悄悄关注减少至10人以下，再添加}'),
			OKText: d("#L{管理我的悄悄关注}"),
			OK: function () {
				a.preventDefault();
				window.location.href = "/" + $CONFIG.uid + "/whisper"
			}
		}, h = {
			textLarge: d("#L{您已达到关注上限！}"),
			textComplex: d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{关注上限立即提高}'),
			textSmall: d('#L{可}<a href="http://vip.weibo.com/paycenter?pageid=byebank" class="S_link2">#L{开通会员}</a>#L{或先将关注减少至2000人以下，再添加}'),
			OKText: d("#L{管理我的关注}"),
			OK: function () {
				a.preventDefault();
				window.location.href = "/" + $CONFIG.uid + "/follow"
			}
		};
		if (b.type == "quiet") {
			switch (b.errortype) {
				case"2":
					g.textLarge = d("#L{您当前已达会员等级悄悄关注上限啦！}");
					g.textComplex = "";
					g.textSmall = d('<a href="http://vip.weibo.com/privilege" class="S_link2">#L{了解更多会员特权信息»}</a>');
					break;
				case"1":
					g.textSmall = ""
			}
			c = g
		} else {
			switch (b.errortype) {
				case"2":
					h.textLarge = d("#L{您当前已达会员等级关注上限啦！}");
					h.textComplex = "";
					h.textSmall = d('<a href="http://vip.weibo.com/privilege" class="S_link2">#L{了解更多会员特权信息»}</a>');
					break;
				case"1":
					h.textSmall = ""
			}
			c = h
		}
		f = e("", c);
		b.errortype == "2" ? f.cfm.getDom("member").style.display = "none" : f.cfm.getDom("cancel").style.display = "none"
	}
});
STK.register("common.layer.ioError", function (a) {
	var b = a.kit.extra.language, c;
	return function (d, e, f) {
		var g = {}, h, i, j = function () {
		}, k = {
			title: b("#L{发布失败}"),
			warnMsg: b("#L{该组成员已达上限，不能对该组发布定向微博。}"),
			OKText: b("#L{知道了}"),
			textComplex: b('#L{微博会员可以提高分组上限} <a href="http://vip.weibo.com/prividesc?priv=1110">#L{了解更多}»</a>'),
			vip: b("#L{开通会员}")
		}, l = {
			init: function () {
				l.data()
			}, data: function () {
				i = a.parseParam({auto: !0, call: j, ok: j, cancel: j}, f);
				h = a.parseParam({
					location: "",
					icon: "warn",
					title: b("#L{提示}"),
					OKText: b("#L{确 定}"),
					cancelText: b("#L{取 消}"),
					suda: ""
				}, e.data);
				h.msg = e.msg || b("#L{系统繁忙}");
				h.OK = function () {
					a.preventDefault();
					var b = a.queryToJson(h.suda || "");
					b = b.ok || {};
					SUDA.uaTrack && b.key && SUDA.uaTrack(b.key, b.value);
					i.ok();
					h.location && (window.location.href = h.location)
				};
				h.cancel = function () {
					a.preventDefault();
					var b = a.queryToJson(h.suda || "");
					b = b.cancel || {};
					SUDA.uaTrack && b.key && SUDA.uaTrack(b.key, b.value);
					i.cancel()
				}
			}, run: function () {
				var a = m[e.code] || m[100001];
				return a() || i.call(h, e)
			}, destroy: function () {
				c && c.destroy()
			}
		}, m = {
			100001: function () {
				a.ui.alert(h.msg, h)
			}, 100002: function () {
				window.location.reload()
			}, 100003: function () {
				a.ui.confirm(h.msg, h)
			}, 100004: function () {
				c || (c = a.common.dialog.authentication());
				c.show()
			}, 100005: function () {
				h.type = e.data && (e.data.type ? e.data.type : "follow");
				h.errortype = e.data && (e.data.errortype || "1");
				return a.common.dialog.memberDialog(h || {})
			}, 100006: function () {
				a.ui.alert(k.warnMsg, {title: k.title, OKText: k.OKText})
			}, 100007: function () {
				a.ui.vipConfirm(k.warnMsg, {
					icon: "warn",
					title: k.title,
					toBeVipText: k.vip,
					textComplex: k.textComplex,
					OKText: k.OKText,
					toBeVip: function () {
						a.preventDefault();
						window.location.href = "http://vip.weibo.com/paycenter?refer=publish"
					}
				})
			}
		};
		l.init();
		g.getdata = function () {
			return h
		};
		g.getAction = function (a) {
			return a ? m[a] : m
		};
		g.getCode = function () {
			return e.code || ""
		};
		g.run = l.run;
		i.auto && l.run();
		return g
	}
});
STK.register("common.dialog.loginLayer", function (a) {
	var b, c = "http://tjs.sjs.sinajs.cn/t5/register/js/page/remote/loginLayer.js";
	return function (d) {
		d = a.core.obj.parseParam({lang: "zh-cn", loginSuccessUrl: encodeURIComponent(window.location.href)}, d || {});
		if (window.WBtopGlobal_loginLayer)WBtopGlobal_loginLayer(d); else {
			if (b)return;
			b = !0;
			a.core.io.scriptLoader({
				url: c, onComplete: function () {
					b = !1;
					window.WBtopGlobal_loginLayer(d)
				}, timeout: 1e4, onTimeout: function () {
					b = !1
				}
			})
		}
	}
});
STK.register("common.form.rejectFake", function (a) {
	return function (b) {
		var c = {}, d, e = {
			evt: {clickCount: 0, subBtnClick: 0, keyPress: 0, menuClick: 0, mouseMove: 0},
			buttonClick: {checkcode: 0, subBtnPosx: 0, subBtnPosy: 0, subBtnDelay: 0},
			app: {keycode: ""},
			navigator: {winWidth: 0, winHeight: 0, userAgent: 0}
		}, f = {keycode: []}, g = {checkcode: "checkcode", submit: "submit"}, h = {
			isBubble: function (b, c) {
				return b === c ? !0 : a.core.dom.contains(b, c)
			}, findTarDom: function (a) {
				return !a || a == document.body ? !1 : a.getAttribute("refake-type") ? a.getAttribute("refake-type") : arguments.callee(a.parentNode)
			}
		}, i = {
			click: function (b) {
				e.evt.clickCount++;
				a.core.evt.fixEvent();
				var c = b.target || b.srcElement;
				d = h.findTarDom(c);
				d && d == g.checkcode && e.buttonClick.checkcode++;
				if (d && d == g.submit) {
					e.evt.subBtnClick++;
					e.buttonClick.subBtnPosx = b.clientX;
					e.buttonClick.subBtnPosy = b.clientY
				}
			}, contextmenu: function (a) {
				e.evt.menuClick++
			}, mouseDown: function (b) {
				a.core.evt.fixEvent();
				var c = b.target || b.srcElement;
				d = h.findTarDom(c);
				if (d && d == g.submit) {
					e.buttonClick.subBtnDelay = (new Date).getTime();
					e.buttonClick.subBtnPosx = b.clientX;
					e.buttonClick.subBtnPosy = b.clientY
				}
			}, mouseMove: function () {
				e.evt.mouseMove++
			}, mouseUp: function (a) {
				d && d == g.submit && (e.buttonClick.subBtnDelay = (new Date).getTime() - e.buttonClick.subBtnDelay)
			}, keyPress: function (a) {
				e.evt.keyPress++;
				f.keycode.push(a.keyCode)
			}
		}, j = function () {
			a.core.evt.addEvent(document.body, "mousedown", i.mouseDown);
			a.core.evt.addEvent(document.body, "mousemove", i.mouseMove);
			a.core.evt.addEvent(document.body, "mouseup", i.mouseUp);
			a.core.evt.addEvent(document.body, "click", i.click);
			a.core.evt.addEvent(document.body, "keypress", i.keyPress);
			a.core.evt.addEvent(document.body, "contextmenu", i.contextmenu)
		}, k = function () {
			e.navigator.userAgent = window.navigator.userAgent;
			e.navigator.winWidth = window.innerWidth || document.body.clientWidth;
			e.navigator.winHeight = window.innerHeight || document.body.clientHeight
		}, l = function () {
			e.app.keycode = f.keycode.join(",");
			var b = [];
			for (var c in e)b.push(a.core.json.jsonToQuery(e[c]));
			return encodeURIComponent(b.join("&"))
		}, m = function () {
			j();
			k()
		};
		m();
		var n = function () {
			a.core.evt.removeEvent(document.body, "mousedown", i.mouseDown);
			a.core.evt.removeEvent(document.body, "mousemove", i.mouseMove);
			a.core.evt.removeEvent(document.body, "mouseup", i.mouseUp);
			a.core.evt.removeEvent(document.body, "click", i.click);
			a.core.evt.removeEvent(document.body, "keypress", i.keyPress);
			a.core.evt.removeEvent(document.body, "contextmenu", i.contextmenu)
		};
		c.getData = l;
		c.destroy = n;
		return c
	}
});
STK.register("common.form.template", function (a) {
	var b = a.kit.extra.language, c = {
		formTips: ["<#et createGuide data>", '<#if (data.type=="empty")></#if>', '<#if (data.type=="tip")>', '<p class="notice"><span class="icon_warnS"></span>${data.msg}</p>', "</#if>", '<#if (data.type=="err")>', '<p class="error"><span class="icon_rederrorS"></span>${data.msg}</p>', "</#if>", '<#if (data.type=="loading")>', '<p class="notice"><span class="loading"></span></p>', "</#if>", '<#if (data.type=="warn")>', '<p class="notice"><span class="icon_warnS"></span>${data.msg}</p>', "</#if>", '<#if (data.type=="ok")>', '<span class="icon_succ"></span>', "</#if>", '<#if (data.type=="power0")>', '<p class="notice"><span class="color_week">#L{弱}：</span>${data.msg}</p>', "</#if>", '<#if (data.type=="power1")>', '<p class="notice"><span class="color_middle">#L{中}：</span>${data.msg}</p>', "</#if>", '<#if (data.type=="power2")>', '<p class="notice"><span class="color_strong">#L{强}：</span>${data.msg}</p>', "</#if>", "</#et>"].join(""),
		newFormTips: ["<#et createGuide data>", '<#if (data.type=="empty")></#if>', '<#if (data.type=="tip")>', '<div class="W_tips empty clearfix">', '<p class="icon">', '<span class="icon_warnS"></span>', "</p>", '<p class="txt S_txt2">${data.msg}</p>', "</div>", "</#if>", '<#if (data.type=="err")>', '<div class="W_tips empty clearfix">', '<p class="icon">', '<span class="icon_rederrorS"></span>', "</p>", '<p class="txt S_txt2">${data.msg}</p>', "</div>", "</#if>", '<#if (data.type=="loading")>', '<div class="W_tips empty clearfix">', '<p class="icon">', '<span class="loading"></span>', "</p>", '<p class="txt S_txt2"></p>', "</div>", "</#if>", '<#if (data.type=="warn")>', '<div class="W_tips empty clearfix">', '<p class="icon">', '<span class="icon_rederrorS"></span>', "</p>", '<p class="txt S_txt2">${data.msg}</p>', "</div>", "</#if>", '<#if (data.type=="ok")>', "</#if>", '<#if (data.type=="power0")>', '<p class="notice"><span class="color_week">#L{弱}：</span>${data.msg}</p>', "</#if>", '<#if (data.type=="power1")>', '<p class="notice"><span class="color_middle">#L{中}：</span>${data.msg}</p>', "</#if>", '<#if (data.type=="power2")>', '<p class="notice"><span class="color_strong">#L{强}：</span>${data.msg}</p>', "</#if>", "</#et>"].join(""),
		nickRecommend: ["<#et userlist data>", "<#list data as item>", '<label for="${item.id}" action-type="selected_nickname" action-data="name=${item.name}"><input type="radio" class="W_radio" value="" name="nickRecommend" id="${item.id}">${item.name}</label>', "</#list>", "</#et>"].join("")
	};
	return function (d, e) {
		var f = a.parseParam({isEasy: !0, data: {}}, e);
		return f.isEasy ? b(a.core.util.easyTemplate(c[d], f.data || {}).toString()) : b(c[d])
	}
});
STK.register("pl.register.email.source.submitBtn", function (a) {
	var b = a.kit.extra.language;
	return function (c, d) {
		d = a.parseParam({loadHtml: '<b class="loading"></b>#L{立即注册}', normalHtml: "#L{立即注册}"}, d);
		if (!a.isNode(c))throw"submitBtn need node !";
		var e = {}, f = a.sizzle("span", c)[0];
		e.setLoading = function () {
			f && (f.innerHTML = b(d.loadHtml))
		};
		e.setNormal = function () {
			f && (f.innerHTML = b(d.normalHtml))
		};
		return e
	}
});
STK.register("pl.register.email.source.main", function (a) {
	var b = a.common.form.template, c = a.common.trans.form, d = a.common.trans.account, e = a.common.dialog.loginLayer, f = a.common.layer.ioError, g = a.kit.extra.language, h = a.pl.register.email.source.submitBtn;
	return function (d) {
		var f = window.location.host == "www.weibo.com" ? "www.weibo.com" : "weibo.com", g = {}, i, j, k, l, m, n = ["email", "password", "verifycodereg"], o = a.common.form.rejectFake(), p, q = {
			formCheck: function (a, b) {
				s(b)
			}
		}, r = {
			btn_submit: function (b) {
				a.preventDefault();
				var c = i.check(), d = i.getData(), e = i.states();
				if (c) {
					d.rejectFake = o.getData();
					var f = a.core.json.merge(b.data, d);
					p.setLoading();
					weiboRegController.setPostData(f);
					f.entry && weiboRegController.setEntry(f.entry);
					weiboRegController.register()
				} else {
					s(e, !0);
					t.handleVerifyCode()
				}
			}, btn_change_verifycode: function () {
				a.preventDefault();
				t.changeVerifycode()
			}, btn_login: function (b) {
				a.preventDefault();
				e()
			}
		}, s = function (a, c) {
			c = c || !1;
			for (var d in a) {
				var e = a[d];
				if (c && e.state)continue;
				var f = j[d + "_tip"];
				f && (f.innerHTML = b("formTips", {data: e}))
			}
		}, t = {
			init: function () {
				t.pars();
				t.build();
				t.bind();
				t.initPlugin()
			}, pars: function () {
			}, build: function () {
				i = a.common.setting.form(d);
				j = a.kit.dom.parseDOM(i.domList);
				for (var b = 0, e, g, k, o = n.length; b < o; b++) {
					e = n[b];
					g = j[e];
					if (j[e] && a.common.setting[e]) {
						k = a.queryToJson(g.getAttribute("action-data") || "");
						k.hook = i;
						k.proxy = c;
						k.iokey = "checkform";
						var q = a.common.setting[e](g, k);
						i.add(e, q)
					}
				}
				l = a.common.setting.textCopy(d);
				a.common.layer.emailAutocomplete(j.email);
				m = a.common.setting.jumpStatics({analyticsLink: "http://" + f + "/signup/v5/jumplog?from=email"});
				p = h(j.btn_submit)
			}, bind: function () {
				a.custEvent.define(i, ["check"]);
				a.custEvent.add(i, "check", q.formCheck);
				k = a.delegatedEvent(d);
				for (var b in r)k.add(b, "click", r[b]);
				weiboRegController.init({
					entry: "",
					lang: window.$CONFIG && window.$CONFIG.lang || "zh-cn",
					feedBackUrl: "http://" + f + "/signup/v5/ajaxreg",
					beforeDialogShow: function () {
						p.setNormal()
					},
					callback: function (b) {
						p.setNormal();
						if (b.code == "100000")window.location.href = b.href; else {
							b.msg && a.ui.alert(b.msg);
							var c = b.formresult || {};
							for (var d in c)i.ctls[d] && i.ctls[d].setMsg(c[d]);
							c && s(c);
							t.handleVerifyCode()
						}
					}
				})
			}, initPlugin: function () {
			}, changeVerifycode: function () {
				var b = j.btn_change_verifycode;
				b.src = b.src.replace(/(\?|\&)r=([^&]+)/, "$1r=" + a.getUniqueKey())
			}, handleVerifyCode: function () {
				var a = i.ctls.verifycodereg;
				if (a) {
					a.node.value = "";
					t.changeVerifycode()
				}
			}, destroy: function () {
				a.custEvent.remove(i, "check", q.formCheck);
				a.removeEvent(j.sex_male, "click", evts.changeSex);
				a.removeEvent(j.sex_female, "click", evts.changeSex);
				k.destroy();
				l.destroy();
				m.destroy()
			}
		};
		t.init();
		g.destroy = t.destroy;
		return g
	}
});
STK.pageletM.register("pl.register.email.index", function (a) {
	return a.pl.register.email.source.main(a.E("pl_account_regmail"))
});
STK.register("pl.register.sidebar.source.main", function (a) {
	return function (b) {
		var c, d = {
			init: function () {
				d.bind()
			}, bind: function () {
				c = a.core.evt.delegatedEvent(b);
				c.add("btn_login", "click", d.showLogin)
			}, showLogin: function () {
				a.common.dialog.loginLayer()
			}, destroy: function () {
				c.destroy();
				c = loginLayer = null
			}
		};
		d.init();
		var e = {destroy: d.destroy};
		return e
	}
});
STK.pageletM.register("pl.register.sidebar.index", function (a) {
	return a.pl.register.sidebar.source.main(a.E("pl_register_sidebar"))
});
STK.pageletM.start();
