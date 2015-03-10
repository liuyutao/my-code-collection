/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/9.
 */
var requirejs, require, define;
if (function(a) {
    function b(a, b) {
        return r.call(a, b)
    }
    function c(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = p.map, q = o && o["*"] || {};
        if (a && "." === a.charAt(0))
            if (b) {
                for (n = n.slice(0, n.length - 1), a = a.split("/"), g = a.length - 1, p.nodeIdCompat && t.test(a[g]) && (a[g] = a[g].replace(t, "")), a = n.concat(a), k = 0; k < a.length; k += 1)
                    if (m = a[k], "." === m)
                        a.splice(k, 1), k -= 1;
                    else if (".." === m) {
                        if (1 === k && (".." === a[2] || ".." === a[0]))
                            break;
                        k > 0 && (a.splice(k - 1, 2), k -= 2)
                    }
                a = a.join("/")
            } else
                0 === a.indexOf("./") && (a = a.substring(2));
        if ((n || q) && o) {
            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), n)
                    for (l = n.length; l > 0; l -= 1)
                        if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                            f = e, h = k;
                            break
                        }
                if (f)
                    break;
                !i && q && q[d] && (i = q[d], j = k)
            }
            !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
        }
        return a
    }
    function d(b, c) {
        return function() {
            var d = s.call(arguments, 0);
            return "string" != typeof d[0] && 1 === d.length && d.push(null), k.apply(a, d.concat([b, c]))
        }
    }
    function e(a) {
        return function(b) {
            return c(b, a)
        }
    }
    function f(a) {
        return function(b) {
            n[a] = b
        }
    }
    function g(c) {
        if (b(o, c)) {
            var d = o[c];
            delete o[c], q[c] = !0, j.apply(a, d)
        }
        if (!b(n, c) && !b(q, c))
            throw new Error("No " + c);
        return n[c]
    }
    function h(a) {
        var b, c = a ? a.indexOf("!") : -1;
        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
    }
    function i(a) {
        return function() {
            return p && p.config && p.config[a] || {}
        }
    }
    var j, k, l, m, n = {}, o = {}, p = {}, q = {}, r = Object.prototype.hasOwnProperty, s = [].slice, t = /\.js$/;
    l = function(a, b) {
        var d, f = h(a), i = f[0];
        return a = f[1], i && (i = c(i, b), d = g(i)), i ? a = d && d.normalize ? d.normalize(a, e(b)) : c(a, b) : (a = c(a, b), f = h(a), i = f[0], a = f[1], i && (d = g(i))), {f: i ? i + "!" + a : a,n: a,pr: i,p: d}
    }, m = {require: function(a) {
        return d(a)
    },exports: function(a) {
        var b = n[a];
        return "undefined" != typeof b ? b : n[a] = {}
    },module: function(a) {
        return {id: a,uri: "",exports: n[a],config: i(a)}
    }}, j = function(c, e, h, i) {
        var j, k, p, r, s, t, u = [], v = typeof h;
        if (i = i || c, "undefined" === v || "function" === v) {
            for (e = !e.length && h.length ? ["require", "exports", "module"] : e, s = 0; s < e.length; s += 1)
                if (r = l(e[s], i), k = r.f, "require" === k)
                    u[s] = m.require(c);
                else if ("exports" === k)
                    u[s] = m.exports(c), t = !0;
                else if ("module" === k)
                    j = u[s] = m.module(c);
                else if (b(n, k) || b(o, k) || b(q, k))
                    u[s] = g(k);
                else {
                    if (!r.p)
                        throw new Error(c + " missing " + k);
                    r.p.load(r.n, d(i, !0), f(k), {}), u[s] = n[k]
                }
            p = h ? h.apply(n[c], u) : void 0, c && (j && j.exports !== a && j.exports !== n[c] ? n[c] = j.exports : p === a && t || (n[c] = p))
        } else
            c && (n[c] = h)
    }, requirejs = require = k = function(b, c, d, e, f) {
        if ("string" == typeof b)
            return m[b] ? m[b](c) : g(l(b, c).f);
        if (!b.splice) {
            if (p = b, p.deps && k(p.deps, p.callback), !c)
                return;
            c.splice ? (b = c, c = d, d = null) : b = a
        }
        return c = c || function() {
        }, "function" == typeof d && (d = e, e = f), e ? j(a, b, c, d) : setTimeout(function() {
            j(a, b, c, d)
        }, 4), k
    }, k.config = function(a) {
        return k(a)
    }, requirejs._defined = n, define = function(a, c, d) {
        c.splice || (d = c, c = []), b(n, a) || b(o, a) || (o[a] = [a, c, d])
    }, define.amd = {jQuery: !0}
}(), define("almond", function() {
}), function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b))
            return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return _.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (hb.test(b))
                return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
            return {}
        }}), this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
                } catch (e) {
                }
                sb.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }
    function u(a) {
        var b = Z, c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {get: function() {
            return a() ? void delete this.get : (this.get = b).apply(this, arguments)
        }}
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; )
            if (b = Xb[e] + c, b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += _.css(a, c + wb[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Rb(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0
        }), Yb = _.now()
    }
    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $b.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else
                j = void 0;
        if (_.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m)
                    _.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = _.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a,props: _.extend({}, b),opts: _.extend(!0, {specialEasing: {}}, c),originalProperties: b,originalOptions: c,startTime: Yb || D(),duration: c.duration,tweens: [],createTween: function(b, c) {
            var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
        },stop: function(b) {
            var c = 0, d = b ? j.tweens.length : 0;
            if (e)
                return this;
            for (e = !0; d > c; c++)
                j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }}), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts))
                return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {elem: a,anim: j,queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === tc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {state: "parsererror",error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return {state: "success",data: b}
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b))
            _.each(b, function(b, e) {
                c || yc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== _.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.3", _ = function(a, b) {
        return new _.fn.init(a, b)
    }, ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bb = /^-ms-/, cb = /-([\da-z])/gi, db = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {jquery: $,constructor: _,selector: "",length: 0,toArray: function() {
        return R.call(this)
    },get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
    },pushStack: function(a) {
        var b = _.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
    },each: function(a, b) {
        return _.each(this, a, b)
    },map: function(a) {
        return this.pushStack(_.map(this, function(b, c) {
            return a.call(b, c, b)
        }))
    },slice: function() {
        return this.pushStack(R.apply(this, arguments))
    },first: function() {
        return this.eq(0)
    },last: function() {
        return this.eq(-1)
    },eq: function(a) {
        var b = this.length, c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },end: function() {
        return this.prevObject || this.constructor(null)
    },push: T,sort: Q.sort,splice: Q.splice}, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(a) {
        throw new Error(a)
    },noop: function() {
    },isFunction: function(a) {
        return "function" === _.type(a)
    },isArray: Array.isArray,isWindow: function(a) {
        return null != a && a === a.window
    },isNumeric: function(a) {
        return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
    },isPlainObject: function(a) {
        return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    },isEmptyObject: function(a) {
        var b;
        for (b in a)
            return !1;
        return !0
    },type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
    },globalEval: function(a) {
        var b, c = eval;
        a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    },camelCase: function(a) {
        return a.replace(bb, "ms-").replace(cb, db)
    },nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },each: function(a, b, d) {
        var e, f = 0, g = a.length, h = c(a);
        if (d) {
            if (h)
                for (; g > f && (e = b.apply(a[f], d), e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.apply(a[f], d), e === !1)
                        break
        } else if (h)
            for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++)
                ;
        else
            for (f in a)
                if (e = b.call(a[f], f, a[f]), e === !1)
                    break;
        return a
    },trim: function(a) {
        return null == a ? "" : (a + "").replace(ab, "")
    },makeArray: function(a, b) {
        var d = b || [];
        return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
    },inArray: function(a, b, c) {
        return null == b ? -1 : U.call(b, a, c)
    },merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++)
            a[e++] = b[d];
        return a.length = e, a
    },grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
            d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
    },map: function(a, b, d) {
        var e, f = 0, g = a.length, h = c(a), i = [];
        if (h)
            for (; g > f; f++)
                e = b(a[f], f, d), null != e && i.push(e);
        else
            for (f in a)
                e = b(a[f], f, d), null != e && i.push(e);
        return S.apply([], i)
    },guid: 1,proxy: function(a, b) {
        var c, d, e;
        return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
            return a.apply(b || this, d.concat(R.call(arguments)))
        }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
    },now: Date.now,support: Y}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                return c;
            if (!d && I) {
                if (11 !== h && (e = sb.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f), c
                    } else {
                        if (e[2])
                            return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName)
                            return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p)
                        try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {
                        }finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0, a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            }finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {
        }
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return ab(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, ab = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cb = "[\\x20\\t\\r\\n\\f]", db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", eb = db.replace("w", "w#"), fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]", gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)", hb = new RegExp(cb + "+", "g"), ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"), jb = new RegExp("^" + cb + "*," + cb + "*"), kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"), lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"), mb = new RegExp(gb), nb = new RegExp("^" + eb + "$"), ob = {ID: new RegExp("^#(" + db + ")"),CLASS: new RegExp("^\\.(" + db + ")"),TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),ATTR: new RegExp("^" + fb),PSEUDO: new RegExp("^" + gb),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),bool: new RegExp("^(?:" + bb + ")$", "i"),needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")}, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, xb = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (yb) {
            $ = {apply: X.length ? function(a, b) {
                Z.apply(a, _.call(b))
            } : function(a, b) {
                for (var c = a.length, d = 0; a[c++] = b[d++]; )
                    ;
                a.length = c - 1
            }}
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", gb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (c = a; c = c.parentNode; )
                    i.unshift(c);
                for (c = b; c = c.parentNode; )
                    j.unshift(c);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {
                }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }, w = b.selectors = {cacheLength: 50,createPseudo: d,match: ob,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(a) {
            return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
        },PSEUDO: function(a) {
            var b, c = !a[6] && a[2];
            return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }},filter: {TAG: function(a) {
            var b = a.replace(vb, wb).toLowerCase();
            return "*" === a ? function() {
                return !0
            } : function(a) {
                return a.nodeName && a.nodeName.toLowerCase() === b
            }
        },CLASS: function(a) {
            var b = R[a + " "];
            return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a, function(a) {
                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
            })
        },ATTR: function(a, c, d) {
            return function(e) {
                var f = b.attr(e, a);
                return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
            }
        },CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
                return !!a.parentNode
            } : function(b, c, i) {
                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                if (q) {
                    if (f) {
                        for (; p; ) {
                            for (l = b; l = l[p]; )
                                if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                    return !1;
                            o = p = "only" === a && !o && "nextSibling"
                        }
                        return !0
                    }
                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                        for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                            if (1 === l.nodeType && ++m && l === b) {
                                k[a] = [P, n, m];
                                break
                            }
                    } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                        m = j[1];
                    else
                        for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); )
                            ;
                    return m -= e, m === d || m % d === 0 && m / d >= 0
                }
            }
        },PSEUDO: function(a, c) {
            var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
            return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                for (var d, e = f(a, c), g = e.length; g--; )
                    d = ab(a, e[g]), a[d] = !(b[d] = e[g])
            }) : function(a) {
                return f(a, 0, e)
            }) : f
        }},pseudos: {not: d(function(a) {
            var b = [], c = [], e = A(a.replace(ib, "$1"));
            return e[N] ? d(function(a, b, c, d) {
                for (var f, g = e(a, null, d, []), h = a.length; h--; )
                    (f = g[h]) && (a[h] = !(b[h] = f))
            }) : function(a, d, f) {
                return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
            }
        }),has: d(function(a) {
            return function(c) {
                return b(a, c).length > 0
            }
        }),contains: d(function(a) {
            return a = a.replace(vb, wb), function(b) {
                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
            }
        }),lang: d(function(a) {
            return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), function(b) {
                var c;
                do
                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                        return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1
            }
        }),target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
        },root: function(a) {
            return a === H
        },focus: function(a) {
            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },enabled: function(a) {
            return a.disabled === !1
        },disabled: function(a) {
            return a.disabled === !0
        },checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected
        },selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6)
                    return !1;
            return !0
        },parent: function(a) {
            return !w.pseudos.empty(a)
        },header: function(a) {
            return qb.test(a.nodeName)
        },input: function(a) {
            return pb.test(a.nodeName)
        },button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b
        },text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },first: j(function() {
            return [0]
        }),last: j(function(a, b) {
            return [b - 1]
        }),eq: j(function(a, b, c) {
            return [0 > c ? c + b : c]
        }),even: j(function(a, b) {
            for (var c = 0; b > c; c += 2)
                a.push(c);
            return a
        }),odd: j(function(a, b) {
            for (var c = 1; b > c; c += 2)
                a.push(c);
            return a
        }),lt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0; )
                a.push(d);
            return a
        }),gt: j(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b; )
                a.push(d);
            return a
        })}}, w.pseudos.nth = w.pseudos.eq;
        for (u in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            w.pseudos[u] = h(u);
        for (u in {submit: !0,reset: !0})
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({value: d,type: e[0].replace(ib, " ")}), h = h.slice(d.length));
                for (g in w.filter)
                    !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d,type: g,matches: e}), h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; )
                    f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b)
                        return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a)
                            return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(bb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext, gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({find: function(a) {
        var b, c = this.length, d = [], e = this;
        if ("string" != typeof a)
            return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this))
                        return !0
            }));
        for (b = 0; c > b; b++)
            _.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },filter: function(a) {
        return this.pushStack(d(this, a || [], !1))
    },not: function(a) {
        return this.pushStack(d(this, a || [], !0))
    },is: function(a) {
        return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
    }});
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b)
                return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), gb.test(c[1]) && _.isPlainObject(b))
                    for (c in b)
                        _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/, mb = {children: !0,contents: !0,next: !0,prev: !0};
    _.extend({dir: function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
            if (1 === a.nodeType) {
                if (e && _(a).is(c))
                    break;
                d.push(a)
            }
        return d
    },sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }}), _.fn.extend({has: function(a) {
        var b = _(a, this), c = b.length;
        return this.filter(function() {
            for (var a = 0; c > a; a++)
                if (_.contains(this, b[a]))
                    return !0
        })
    },closest: function(a, b) {
        for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
            for (c = this[d]; c && c !== b; c = c.parentNode)
                if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                    f.push(c);
                    break
                }
        return this.pushStack(f.length > 1 ? _.unique(f) : f)
    },index: function(a) {
        return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },add: function(a, b) {
        return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
    },addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }}), _.each({parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
    },parents: function(a) {
        return _.dir(a, "parentNode")
    },parentsUntil: function(a, b, c) {
        return _.dir(a, "parentNode", c)
    },next: function(a) {
        return e(a, "nextSibling")
    },prev: function(a) {
        return e(a, "previousSibling")
    },nextAll: function(a) {
        return _.dir(a, "nextSibling")
    },prevAll: function(a) {
        return _.dir(a, "previousSibling")
    },nextUntil: function(a, b, c) {
        return _.dir(a, "nextSibling", c)
    },prevUntil: function(a, b, c) {
        return _.dir(a, "previousSibling", c)
    },siblings: function(a) {
        return _.sibling((a.parentNode || {}).firstChild, a)
    },children: function(a) {
        return _.sibling(a.firstChild)
    },contents: function(a) {
        return a.contentDocument || _.merge([], a.childNodes)
    }}, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var nb = /\S+/g, ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {add: function() {
            if (i) {
                var c = i.length;
                !function f(b) {
                    _.each(b, function(b, c) {
                        var d = _.type(c);
                        "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                    })
                }(arguments), d ? g = i.length : b && (e = c, k(b))
            }
            return this
        },remove: function() {
            return i && _.each(arguments, function(a, b) {
                for (var c; (c = _.inArray(b, i, c)) > -1; )
                    i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
            }), this
        },has: function(a) {
            return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
        },empty: function() {
            return i = [], g = 0, this
        },disable: function() {
            return i = j = b = void 0, this
        },disabled: function() {
            return !i
        },lock: function() {
            return j = void 0, b || l.disable(), this
        },locked: function() {
            return !j
        },fireWith: function(a, b) {
            return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
        },fire: function() {
            return l.fireWith(this, arguments), this
        },fired: function() {
            return !!c
        }};
        return l
    }, _.extend({Deferred: function(a) {
        var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]], c = "pending", d = {state: function() {
            return c
        },always: function() {
            return e.done(arguments).fail(arguments), this
        },then: function() {
            var a = arguments;
            return _.Deferred(function(c) {
                _.each(b, function(b, f) {
                    var g = _.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                        var a = g && g.apply(this, arguments);
                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                    })
                }), a = null
            }).promise()
        },promise: function(a) {
            return null != a ? _.extend(a, d) : d
        }}, e = {};
        return d.pipe = d.then, _.each(b, function(a, f) {
            var g = f[2], h = f[3];
            d[f[1]] = g.add, h && g.add(function() {
                c = h
            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                return e[f[0] + "With"](this === e ? d : this, arguments), this
            }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
    },when: function(a) {
        var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
            return function(e) {
                c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
            }
        };
        if (g > 1)
            for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
                f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise()
    }});
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({isReady: !1,readyWait: 1,holdReady: function(a) {
        a ? _.readyWait++ : _.ready(!0)
    },ready: function(a) {
        (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
    }}), _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(b)
    }, _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)
                _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c)
        })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {key: function(a) {
        if (!h.accepts(a))
            return 0;
        var b = {}, c = a[this.expando];
        if (!c) {
            c = h.uid++;
            try {
                b[this.expando] = {value: c}, Object.defineProperties(a, b)
            } catch (d) {
                b[this.expando] = c, _.extend(a, b)
            }
        }
        return this.cache[c] || (this.cache[c] = {}), c
    },set: function(a, b, c) {
        var d, e = this.key(a), f = this.cache[e];
        if ("string" == typeof b)
            f[b] = c;
        else if (_.isEmptyObject(f))
            _.extend(this.cache[e], b);
        else
            for (d in b)
                f[d] = b[d];
        return f
    },get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b]
    },access: function(a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    },remove: function(a, b) {
        var c, d, e, f = this.key(a), g = this.cache[f];
        if (void 0 === b)
            this.cache[f] = {};
        else {
            _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])), c = d.length;
            for (; c--; )
                delete g[d[c]]
        }
    },hasData: function(a) {
        return !_.isEmptyObject(this.cache[a[this.expando]] || {})
    },discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]]
    }};
    var rb = new h, sb = new h, tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ub = /([A-Z])/g;
    _.extend({hasData: function(a) {
        return sb.hasData(a) || rb.hasData(a)
    },data: function(a, b, c) {
        return sb.access(a, b, c)
    },removeData: function(a, b) {
        sb.remove(a, b)
    },_data: function(a, b, c) {
        return rb.access(a, b, c)
    },_removeData: function(a, b) {
        rb.remove(a, b)
    }}), _.fn.extend({data: function(a, b) {
        var c, d, e, f = this[0], g = f && f.attributes;
        if (void 0 === a) {
            if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                for (c = g.length; c--; )
                    g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                rb.set(f, "hasDataAttrs", !0)
            }
            return e
        }
        return "object" == typeof a ? this.each(function() {
            sb.set(this, a)
        }) : qb(this, function(b) {
            var c, d = _.camelCase(a);
            if (f && void 0 === b) {
                if (c = sb.get(f, a), void 0 !== c)
                    return c;
                if (c = sb.get(f, d), void 0 !== c)
                    return c;
                if (c = i(f, d, void 0), void 0 !== c)
                    return c
            } else
                this.each(function() {
                    var c = sb.get(this, d);
                    sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                })
        }, null, b, arguments.length > 1, null, !0)
    },removeData: function(a) {
        return this.each(function() {
            sb.remove(this, a)
        })
    }}), _.extend({queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
    },dequeue: function(a, b) {
        b = b || "fx";
        var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
            _.dequeue(a, b)
        };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },_queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return rb.get(a, c) || rb.access(a, c, {empty: _.Callbacks("once memory").add(function() {
            rb.remove(a, [b + "queue", c])
        })})
    }}), _.fn.extend({queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
            var c = _.queue(this, a, b);
            _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
        })
    },dequeue: function(a) {
        return this.each(function() {
            _.dequeue(this, a)
        })
    },clearQueue: function(a) {
        return this.queue(a || "fx", [])
    },promise: function(a, b) {
        var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
            --d || e.resolveWith(f, [f])
        };
        for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; )
            c = rb.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
    }});
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wb = ["Top", "Right", "Bottom", "Left"], xb = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }, yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/, Bb = /^(?:mouse|pointer|contextmenu)|click/, Cb = /^(?:focusinfocus|focusoutblur)$/, Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {global: {},add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
        if (q)
            for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(nb) || [""], j = b.length; j--; )
                h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({type: n,origType: p,data: d,handler: c,guid: c.guid,selector: e,needsContext: e && _.expr.match.needsContext.test(e),namespace: o.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
    },remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
        if (q && (i = q.events)) {
            for (b = (b || "").match(nb) || [""], j = b.length; j--; )
                if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                        k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                } else
                    for (n in i)
                        _.event.remove(a, n + b[j], c, d, !0);
            _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
        }
    },trigger: function(b, c, d, e) {
        var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
            if (!e && !l.noBubble && !_.isWindow(d)) {
                for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                    m.push(g), h = g;
                h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
            }
            for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                b.type = f > 1 ? i : l.bindType || n, k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
            return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
        }
    },dispatch: function(a) {
        a = _.event.fix(a);
        var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
        if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
            for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                    (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
            return j.postDispatch && j.postDispatch.call(this, a), a.result
        }
    },handlers: function(a, b) {
        var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
            for (; i !== this; i = i.parentNode || this)
                if (i.disabled !== !0 || "click" !== a.type) {
                    for (d = [], c = 0; h > c; c++)
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                    d.length && g.push({elem: i,handlers: d})
                }
        return h < b.length && g.push({elem: this,handlers: b.slice(h)}), g
    },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
    }},mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
    }},fix: function(a) {
        if (a[_.expando])
            return a;
        var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
        for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; )
            c = d[b], a[c] = f[c];
        return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    },special: {load: {noBubble: !0},focus: {trigger: function() {
        return this !== l() && this.focus ? (this.focus(), !1) : void 0
    },delegateType: "focusin"},blur: {trigger: function() {
        return this === l() && this.blur ? (this.blur(), !1) : void 0
    },delegateType: "focusout"},click: {trigger: function() {
        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
    },_default: function(a) {
        return _.nodeName(a.target, "a")
    }},beforeunload: {postDispatch: function(a) {
        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
    }}},simulate: function(a, b, c, d) {
        var e = _.extend(new _.Event, c, {type: a,isSimulated: !0,originalEvent: {}});
        d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {isDefaultPrevented: k,isPropagationStopped: k,isImmediatePropagationStopped: k,preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
    },stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
    },stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }}, _.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(a, b) {
        _.event.special[a] = {delegateType: b,bindType: b,handle: function(a) {
            var c, d = this, e = a.relatedTarget, f = a.handleObj;
            return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }}
    }), Y.focusinBubbles || _.each({focus: "focusin",blur: "focusout"}, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {setup: function() {
            var d = this.ownerDocument || this, e = rb.access(d, b);
            e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1)
        },teardown: function() {
            var d = this.ownerDocument || this, e = rb.access(d, b) - 1;
            e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
        }}
    }), _.fn.extend({on: function(a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
            "string" != typeof b && (c = c || b, b = void 0);
            for (g in a)
                this.on(g, b, c, a[g], e);
            return this
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
            d = k;
        else if (!d)
            return this;
        return 1 === e && (f = d, d = function(a) {
            return _().off(a), f.apply(this, arguments)
        }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
            _.event.add(this, a, d, c, b)
        })
    },one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
    },off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
            return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
            for (e in a)
                this.off(e, b, a[e]);
            return this
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
            _.event.remove(this, a, c, b)
        })
    },trigger: function(a, b) {
        return this.each(function() {
            _.event.trigger(a, b, this)
        })
    },triggerHandler: function(a, b) {
        var c = this[0];
        return c ? _.event.trigger(a, b, c, !0) : void 0
    }});
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fb = /<([\w:]+)/, Gb = /<|&#?\w+;/, Hb = /<(?:script|style|link)/i, Ib = /checked\s*(?:[^=]|=\s*.checked.)/i, Jb = /^$|\/(?:java|ecma)script/i, Kb = /^true\/(.*)/, Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Mb = {option: [1, "<select multiple='multiple'>", "</select>"],thead: [1, "<table>", "</table>"],col: [2, "<table><colgroup>", "</colgroup></table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.extend({clone: function(a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
        if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
            for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
                s(f[d], g[d]);
        if (b)
            if (c)
                for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
                    q(f[d], g[d]);
            else
                q(a, h);
        return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
    },buildFragment: function(a, b, c, d) {
        for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
            if (e = a[m], e || 0 === e)
                if ("object" === _.type(e))
                    _.merge(l, e.nodeType ? [e] : e);
                else if (Gb.test(e)) {
                    for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--; )
                        f = f.lastChild;
                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                } else
                    l.push(b.createTextNode(e));
        for (k.textContent = "", m = 0; e = l[m++]; )
            if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                for (j = 0; e = f[j++]; )
                    Jb.test(e.type || "") && c.push(e);
        return k
    },cleanData: function(a) {
        for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
            if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                if (b.events)
                    for (d in b.events)
                        f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                rb.cache[e] && delete rb.cache[e]
            }
            delete sb.cache[c[sb.expando]]
        }
    }}), _.fn.extend({text: function(a) {
        return qb(this, function(a) {
            return void 0 === a ? _.text(this) : this.empty().each(function() {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
            })
        }, null, a, arguments.length)
    },append: function() {
        return this.domManip(arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = m(this, a);
                b.appendChild(a)
            }
        })
    },prepend: function() {
        return this.domManip(arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = m(this, a);
                b.insertBefore(a, b.firstChild)
            }
        })
    },before: function() {
        return this.domManip(arguments, function(a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
        })
    },after: function() {
        return this.domManip(arguments, function(a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    },remove: function(a, b) {
        for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
            b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
        return this
    },empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
        return this
    },clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
            return _.clone(this, a, b)
        })
    },html: function(a) {
        return qb(this, function(a) {
            var b = this[0] || {}, c = 0, d = this.length;
            if (void 0 === a && 1 === b.nodeType)
                return b.innerHTML;
            if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Eb, "<$1></$2>");
                try {
                    for (; d > c; c++)
                        b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                    b = 0
                } catch (e) {
                }
            }
            b && this.empty().append(a)
        }, null, a, arguments.length)
    },replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
            a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
    },detach: function(a) {
        return this.remove(a, !0)
    },domManip: function(a, b) {
        a = S.apply([], a);
        var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
        if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m))
            return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
        if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
            for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
                g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
            if (f)
                for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++)
                    g = e[i], Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
        }
        return this
    }}), _.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"), Rb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {pixelPosition: function() {
            return b(), c
        },boxSizingReliable: function() {
            return null == d && b(), d
        },reliableMarginRight: function() {
            var b, c = g.appendChild(Z.createElement("div"));
            return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
        }}))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var Sb = /^(none|table(?!-c[ea]).+)/, Tb = new RegExp("^(" + vb + ")(.*)$", "i"), Ub = new RegExp("^([+-])=(" + vb + ")", "i"), Vb = {position: "absolute",visibility: "hidden",display: "block"}, Wb = {letterSpacing: "0",fontWeight: "400"}, Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({cssHooks: {opacity: {get: function(a, b) {
        if (b) {
            var c = v(a, "opacity");
            return "" === c ? "1" : c
        }
    }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": "cssFloat"},style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = _.camelCase(b), i = a.style;
            return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
        }
    },css: function(a, b, c, d) {
        var e, f, g, h = _.camelCase(b);
        return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
    }}), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {get: function(a, c, d) {
            return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                return A(a, b, d)
            }) : A(a, b, d) : void 0
        },set: function(a, c, d) {
            var e = d && Rb(a);
            return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
        }}
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {display: "inline-block"}, v, [a, "marginRight"]) : void 0
    }), _.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        _.cssHooks[a + b] = {expand: function(c) {
            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
            return e
        }}, Pb.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({css: function(a, b) {
        return qb(this, function(a, b, c) {
            var d, e, f = {}, g = 0;
            if (_.isArray(b)) {
                for (d = Rb(a), e = b.length; e > g; g++)
                    f[b[g]] = _.css(a, b[g], !1, d);
                return f
            }
            return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
        }, a, b, arguments.length > 1)
    },show: function() {
        return B(this, !0)
    },hide: function() {
        return B(this)
    },toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
            xb(this) ? _(this).show() : _(this).hide()
        })
    }}), _.Tween = C, C.prototype = {constructor: C,init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
    },cur: function() {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this)
    },run: function(a) {
        var b, c = C.propHooks[this.prop];
        return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
    }}, C.prototype.init.prototype = C.prototype, C.propHooks = {_default: {get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
    },set: function(a) {
        _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }}, _.easing = {linear: function(a) {
        return a
    },swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2
    }}, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"), ac = /queueHooks$/, bc = [G], cc = {"*": [function(a, b) {
        var c = this.createTween(a, b), d = c.cur(), e = _b.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)), h = 1, i = 20;
        if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do
                h = h || ".5", g /= h, _.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
    }]};
    _.Animation = _.extend(I, {tweener: function(a, b) {
        _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++)
            c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b)
    },prefilter: function(a, b) {
        b ? bc.unshift(a) : bc.push(a)
    }}), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {complete: c || !c && b || _.isFunction(a) && a,duration: a,easing: c && b || b && !_.isFunction(b) && b};
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({fadeTo: function(a, b, c, d) {
        return this.filter(xb).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    },animate: function(a, b, c, d) {
        var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
            var b = I(this, _.extend({}, a), f);
            (e || rb.get(this, "finish")) && b.stop(!0)
        };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    },stop: function(a, b, c) {
        var d = function(a) {
            var b = a.stop;
            delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
            var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = rb.get(this);
            if (e)
                g[e] && g[e].stop && d(g[e]);
            else
                for (e in g)
                    g[e] && g[e].stop && ac.test(e) && d(g[e]);
            for (e = f.length; e--; )
                f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
            (b || !c) && _.dequeue(this, a)
        })
    },finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
            var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
            for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
        })
    }}), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({slideDown: E("show"),slideUp: E("hide"),slideToggle: E("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Yb = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Zb), Zb = null
    }, _.fx.speeds = {slow: 600,fast: 200,_default: 400}, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({attr: function(a, b) {
        return qb(this, _.attr, a, b, arguments.length > 1)
    },removeAttr: function(a) {
        return this.each(function() {
            _.removeAttr(this, a)
        })
    }}), _.extend({attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
            return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
    },removeAttr: function(a, b) {
        var c, d, e = 0, f = b && b.match(nb);
        if (f && 1 === a.nodeType)
            for (; c = f[e++]; )
                d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    },attrHooks: {type: {set: function(a, b) {
        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
        }
    }}}}), ec = {set: function(a, b, c) {
        return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
    }}, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({prop: function(a, b) {
        return qb(this, _.prop, a, b, arguments.length > 1)
    },removeProp: function(a) {
        return this.each(function() {
            delete this[_.propFix[a] || a]
        })
    }}), _.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(a, b, c) {
        var d, e, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
            return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },propHooks: {tabIndex: {get: function(a) {
        return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
    }}}}), Y.optSelected || (_.propHooks.selected = {get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null
    }}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({addClass: function(a) {
        var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
        if (_.isFunction(a))
            return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
        if (h)
            for (b = (a || "").match(nb) || []; j > i; i++)
                if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                    for (f = 0; e = b[f++]; )
                        d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    g = _.trim(d), c.className !== g && (c.className = g)
                }
        return this
    },removeClass: function(a) {
        var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
        if (_.isFunction(a))
            return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
        if (h)
            for (b = (a || "").match(nb) || []; j > i; i++)
                if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                    for (f = 0; e = b[f++]; )
                        for (; d.indexOf(" " + e + " ") >= 0; )
                            d = d.replace(" " + e + " ", " ");
                    g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                }
        return this
    },toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
            _(this).toggleClass(a.call(this, c, this.className, b), b)
        } : function() {
            if ("string" === c)
                for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++]; )
                    e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            else
                (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
        })
    },hasClass: function(a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
            if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0)
                return !0;
        return !1
    }});
    var ic = /\r/g;
    _.fn.extend({val: function(a) {
        var b, c, d, e = this[0];
        {
            if (arguments.length)
                return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
            if (e)
                return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
        }
    }}), _.extend({valHooks: {option: {get: function(a) {
        var b = _.find.attr(a, "value");
        return null != b ? b : _.trim(_.text(a))
    }},select: {get: function(a) {
        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                if (b = _(c).val(), f)
                    return b;
                g.push(b)
            }
        return g
    },set: function(a, b) {
        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
            d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
        return c || (a.selectedIndex = -1), f
    }}}}), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {set: function(a, b) {
            return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
        }}, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    },bind: function(a, b, c) {
        return this.on(a, null, b, c)
    },unbind: function(a, b) {
        return this.off(a, null, b)
    },delegate: function(a, b, c, d) {
        return this.on(b, a, c, d)
    },undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }});
    var jc = _.now(), kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lc = /#.*$/, mc = /([?&])_=[^&]*/, nc = /^(.*?):[ \t]*([^\r\n]*)$/gm, oc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pc = /^(?:GET|HEAD)$/, qc = /^\/\//, rc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sc = {}, tc = {}, uc = "*/".concat("*"), vc = a.location.href, wc = rc.exec(vc.toLowerCase()) || [];
    _.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: vc,type: "GET",isLocal: oc.test(wc[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": uc,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": _.parseJSON,"text xml": _.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(a, b) {
        return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
    },ajaxPrefilter: J(sc),ajaxTransport: J(tc),ajax: function(a, b) {
        function c(a, b, c, g) {
            var i, k, r, s, u, w = b;
            2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
        }
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0,getResponseHeader: function(a) {
            var b;
            if (2 === t) {
                if (!g)
                    for (g = {}; b = nc.exec(f); )
                        g[b[1].toLowerCase()] = b[2];
                b = g[a.toLowerCase()]
            }
            return null == b ? null : b
        },getAllResponseHeaders: function() {
            return 2 === t ? f : null
        },setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
        },overrideMimeType: function(a) {
            return t || (l.mimeType = a), this
        },statusCode: function(a) {
            var b;
            if (a)
                if (2 > t)
                    for (b in a)
                        q[b] = [q[b], a[b]];
                else
                    v.always(a[v.status]);
            return this
        },abort: function(a) {
            var b = a || u;
            return d && d.abort(b), c(0, b), this
        }};
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vc) + "").replace(lc, "").replace(qc, wc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = rc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wc[1] && i[2] === wc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wc[3] || ("http:" === wc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sc, l, b, v), 2 === t)
            return v;
        j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mc.test(e) ? e.replace(mc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + uc + "; q=0.01" : "") : l.accepts["*"]);
        for (k in l.headers)
            v.setRequestHeader(k, l.headers[k]);
        if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
            return v.abort();
        u = "abort";
        for (k in {success: 1,error: 1,complete: 1})
            v[k](l[k]);
        if (d = K(tc, l, b, v)) {
            v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                v.abort("timeout")
            }, l.timeout));
            try {
                t = 1, d.send(r, c)
            } catch (w) {
                if (!(2 > t))
                    throw w;
                c(-1, w)
            }
        } else
            c(-1, "No Transport");
        return v
    },getJSON: function(a, b, c) {
        return _.get(a, b, c, "json")
    },getScript: function(a, b) {
        return _.get(a, void 0, b, "script")
    }}), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({url: a,type: b,dataType: e,data: c,success: d})
        }
    }), _._evalUrl = function(a) {
        return _.ajax({url: a,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, _.fn.extend({wrapAll: function(a) {
        var b;
        return _.isFunction(a) ? this.each(function(b) {
            _(this).wrapAll(a.call(this, b))
        }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
            for (var a = this; a.firstElementChild; )
                a = a.firstElementChild;
            return a
        }).append(this)), this)
    },wrapInner: function(a) {
        return this.each(_.isFunction(a) ? function(b) {
            _(this).wrapInner(a.call(this, b))
        } : function() {
            var b = _(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    },wrap: function(a) {
        var b = _.isFunction(a);
        return this.each(function(c) {
            _(this).wrapAll(b ? a.call(this, c) : a)
        })
    },unwrap: function() {
        return this.parent().each(function() {
            _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
        }).end()
    }}), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xc = /%20/g, yc = /\[\]$/, zc = /\r?\n/g, Ac = /^(?:submit|button|image|reset|file)$/i, Bc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a))
            _.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(xc, "+")
    }, _.fn.extend({serialize: function() {
        return _.param(this.serializeArray())
    },serializeArray: function() {
        return this.map(function() {
            var a = _.prop(this, "elements");
            return a ? _.makeArray(a) : this
        }).filter(function() {
            var a = this.type;
            return this.name && !_(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !yb.test(a))
        }).map(function(a, b) {
            var c = _(this).val();
            return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                return {name: b.name,value: a.replace(zc, "\r\n")}
            }) : {name: b.name,value: c.replace(zc, "\r\n")}
        }).get()
    }}), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {0: 200,1223: 204}, Fc = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Dc)
            Dc[a]()
    }), Y.cors = !!Fc && "withCredentials" in Fc, Y.ajax = Fc = !!Fc, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fc && !a.crossDomain ? {send: function(c, d) {
            var e, f = a.xhr(), g = ++Cc;
            if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                for (e in a.xhrFields)
                    f[e] = a.xhrFields[e];
            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
            for (e in c)
                f.setRequestHeader(e, c[e]);
            b = function(a) {
                return function() {
                    b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                }
            }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
            try {
                f.send(a.hasContent && a.data || null)
            } catch (h) {
                if (b)
                    throw h
            }
        },abort: function() {
            b && b()
        }} : void 0
    }), _.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(a) {
        return _.globalEval(a), a
    }}}), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {send: function(d, e) {
                b = _("<script>").prop({async: !0,charset: a.scriptCharset,src: a.url}).on("load error", c = function(a) {
                    b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                }), Z.head.appendChild(b[0])
            },abort: function() {
                c && c()
            }}
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
        var a = Gc.pop() || _.expando + "_" + jc++;
        return this[a] = !0, a
    }}), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = gb.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ic = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({url: a,type: e,dataType: "html",data: b}).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    _.offset = {setOffset: function(a, b, c) {
        var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }}, _.fn.extend({offset: function(a) {
        if (arguments.length)
            return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
        var b, c, d = this[0], e = {top: 0,left: 0}, f = d && d.ownerDocument;
        if (f)
            return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {top: e.top + c.pageYOffset - b.clientTop,left: e.left + c.pageXOffset - b.clientLeft}) : e
    },position: function() {
        if (this[0]) {
            var a, b, c = this[0], d = {top: 0,left: 0};
            return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - _.css(c, "marginTop", !0),left: b.left - d.left - _.css(c, "marginLeft", !0)}
        }
    },offsetParent: function() {
        return this.map(function() {
            for (var a = this.offsetParent || Jc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
                a = a.offsetParent;
            return a || Jc
        })
    }}), _.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({Height: "height",Width: "width"}, function(a, b) {
        _.each({padding: "inner" + a,content: b,"": "outer" + a}, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kc = a.jQuery, Lc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lc), b && a.jQuery === _ && (a.jQuery = Kc), _
    }, typeof b === zb && (a.jQuery = a.$ = _), _
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/core", ["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }
    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {version: "1.11.3",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}}), a.fn.extend({scrollParent: function(b) {
        var c = this.css("position"), d = "absolute" === c, e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/, f = this.parents().filter(function() {
            var b = a(this);
            return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
        }).eq(0);
        return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
    },uniqueId: function() {
        var a = 0;
        return function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        }
    }(),removeUniqueId: function() {
        return this.each(function() {
            /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
        })
    }}), a.extend(a.expr[":"], {data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
        return function(c) {
            return !!a.data(c, b)
        }
    }) : function(b, c, d) {
        return !!a.data(b, d[3])
    },focusable: function(c) {
        return b(c, !isNaN(a.attr(c, "tabindex")))
    },tabbable: function(c) {
        var d = a.attr(c, "tabindex"), e = isNaN(d);
        return (e || d >= 0) && b(c, !e)
    }}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"], f = c.toLowerCase(), g = {innerWidth: a.fn.innerWidth,innerHeight: a.fn.innerHeight,outerWidth: a.fn.outerWidth,outerHeight: a.fn.outerHeight};
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({focus: function(b) {
        return function(c, d) {
            return "number" == typeof c ? this.each(function() {
                var b = this;
                setTimeout(function() {
                    a(b).focus(), d && d.call(b)
                }, c)
            }) : b.apply(this, arguments)
        }
    }(a.fn.focus),disableSelection: function() {
        var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function() {
            return this.bind(a + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        }
    }(),enableSelection: function() {
        return this.unbind(".ui-disableSelection")
    },zIndex: function(b) {
        if (void 0 !== b)
            return this.css("zIndex", b);
        if (this.length)
            for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
                if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d))
                    return d;
                e = e.parent()
            }
        return 0
    }}), a.ui.plugin = {add: function(b, c, d) {
        var e, f = a.ui[b].prototype;
        for (e in d)
            f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
    },call: function(a, b, c, d) {
        var e, f = a.plugins[b];
        if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
            for (e = 0; e < f.length; e++)
                a.options[f[e][0]] && f[e][1].apply(a.element, c)
    }}
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/widget", ["jquery"], a) : a(jQuery)
}(function(a) {
    var b = 0, c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++)
                try {
                    d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {
                }
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {version: d.version,_proto: a.extend({}, d),_childConstructors: []}), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void (i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments)
                }, e = function(a) {
                    return c.prototype[b].apply(this, a)
                };
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void (i[b] = d)
        }), g.prototype = a.widget.extend(h, {widgetEventPrefix: f ? h.widgetEventPrefix || b : b}, i, {constructor: g,namespace: j,widgetName: b,widgetFullName: e}), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; h > g; g++)
            for (d in f[g])
                e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (b[d] = a.isPlainObject(e) ? a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f, h = c.call(arguments, 1), i = this;
            return g ? this.each(function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            })), i
        }
    }, a.Widget = function() {
    }, a.Widget._childConstructors = [], a.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: !1,create: null},_createWidget: function(c, d) {
        d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {remove: function(a) {
            a.target === d && this.destroy()
        }}), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },_getCreateOptions: a.noop,_getCreateEventData: a.noop,_create: a.noop,_init: a.noop,destroy: function() {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },_destroy: a.noop,widget: function() {
        return this.element
    },option: function(b, c) {
        var d, e, f, g = b;
        if (0 === arguments.length)
            return a.widget.extend({}, this.options);
        if ("string" == typeof b)
            if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++)
                    e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                if (b = d.pop(), 1 === arguments.length)
                    return void 0 === e[b] ? null : e[b];
                e[b] = c
            } else {
                if (1 === arguments.length)
                    return void 0 === this.options[b] ? null : this.options[b];
                g[b] = c
            }
        return this._setOptions(g), this
    },_setOptions: function(a) {
        var b;
        for (b in a)
            this._setOption(b, a[b]);
        return this
    },_setOption: function(a, b) {
        return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },enable: function() {
        return this._setOptions({disabled: !1})
    },disable: function() {
        return this._setOptions({disabled: !0})
    },_on: function(b, c, d) {
        var e, f = this;
        "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
            function h() {
                return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
            }
            "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
            var i = d.match(/^([\w:-]*)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
            k ? e.delegate(k, j, h) : c.bind(j, h)
        })
    },_off: function(b, c) {
        c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
    },_delay: function(a, b) {
        function c() {
            return ("string" == typeof a ? d[a] : a).apply(d, arguments)
        }
        var d = this;
        return setTimeout(c, b || 0)
    },_hoverable: function(b) {
        this.hoverable = this.hoverable.add(b), this._on(b, {mouseenter: function(b) {
            a(b.currentTarget).addClass("ui-state-hover")
        },mouseleave: function(b) {
            a(b.currentTarget).removeClass("ui-state-hover")
        }})
    },_focusable: function(b) {
        this.focusable = this.focusable.add(b), this._on(b, {focusin: function(b) {
            a(b.currentTarget).addClass("ui-state-focus")
        },focusout: function(b) {
            a(b.currentTarget).removeClass("ui-state-focus")
        }})
    },_trigger: function(b, c, d) {
        var e, f, g = this.options[b];
        if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
            for (e in f)
                e in c || (c[e] = f[e]);
        return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
    }}, a.each({show: "fadeIn",hide: "fadeOut"}, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {effect: e});
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.widget
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/mouse", ["jquery", "./widget"], a) : a(jQuery)
}(function(a) {
    var b = !1;
    return a(document).mouseup(function() {
        b = !1
    }), a.widget("ui.mouse", {version: "1.11.3",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
        var b = this;
        this.element.bind("mousedown." + this.widgetName, function(a) {
            return b._mouseDown(a)
        }).bind("click." + this.widgetName, function(c) {
            return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
        }), this.started = !1
    },_mouseDestroy: function() {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },_mouseDown: function(c) {
        if (!b) {
            this._mouseMoved = !1, this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
            var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
            return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                d.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                return d._mouseMove(a)
            }, this._mouseUpDelegate = function(a) {
                return d._mouseUp(a)
            }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
        }
    },_mouseMove: function(b) {
        if (this._mouseMoved) {
            if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button)
                return this._mouseUp(b);
            if (!b.which)
                return this._mouseUp(b)
        }
        return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
    },_mouseUp: function(c) {
        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), b = !1, !1
    },_mouseDistanceMet: function(a) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
    },_mouseDelayMet: function() {
        return this.mouseDelayMet
    },_mouseStart: function() {
    },_mouseDrag: function() {
    },_mouseStop: function() {
    },_mouseCapture: function() {
        return !0
    }})
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/draggable", ["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.draggable", a.ui.mouse, {version: "1.11.3",widgetEventPrefix: "drag",options: {addClasses: !0,appendTo: "parent",axis: !1,connectToSortable: !1,containment: !1,cursor: "auto",cursorAt: !1,grid: !1,handle: !1,helper: "original",iframeFix: !1,opacity: !1,refreshPositions: !1,revert: !1,revertDuration: 500,scope: "default",scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,snap: !1,snapMode: "both",snapTolerance: 20,stack: !1,zIndex: !1,drag: null,start: null,stop: null},_create: function() {
        "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
    },_setOption: function(a, b) {
        this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
    },_destroy: function() {
        return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
    },_mouseCapture: function(b) {
        var c = this.options;
        return this._blurActiveElement(b), this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0) : !1)
    },_blockFrames: function(b) {
        this.iframeBlocks = this.document.find(b).map(function() {
            var b = a(this);
            return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
        })
    },_unblockFrames: function() {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },_blurActiveElement: function(b) {
        var c = this.document[0];
        if (this.handleElement.is(b.target))
            try {
                c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
            } catch (d) {
            }
    },_mouseStart: function(b) {
        var c = this.options;
        return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
            return "fixed" === a(this).css("position")
        }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
    },_refreshOffsets: function(a) {
        this.offset = {top: this.positionAbs.top - this.margins.top,left: this.positionAbs.left - this.margins.left,scroll: !1,parent: this._getParentOffset(),relative: this._getRelativeOffset()}, this.offset.click = {left: a.pageX - this.offset.left,top: a.pageY - this.offset.top}
    },_mouseDrag: function(b, c) {
        if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
            var d = this._uiHash();
            if (this._trigger("drag", b, d) === !1)
                return this._mouseUp({}), !1;
            this.position = d.position
        }
        return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
    },_mouseStop: function(b) {
        var c = this, d = !1;
        return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
            c._trigger("stop", b) !== !1 && c._clear()
        }) : this._trigger("stop", b) !== !1 && this._clear(), !1
    },_mouseUp: function(b) {
        return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b)
    },cancel: function() {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },_getHandle: function(b) {
        return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
    },_setHandleClassName: function() {
        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
    },_removeHandleClassName: function() {
        this.handleElement.removeClass("ui-draggable-handle")
    },_createHelper: function(b) {
        var c = this.options, d = a.isFunction(c.helper), e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
        return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
    },_setPositionRelative: function() {
        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
    },_adjustOffsetFromHelper: function(b) {
        "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {left: +b[0],top: +b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
    },_isRootNode: function(a) {
        return /(html|body)/i.test(a.tagName) || a === this.document[0]
    },_getParentOffset: function() {
        var b = this.offsetParent.offset(), c = this.document[0];
        return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {top: 0,left: 0}), {top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    },_getRelativeOffset: function() {
        if ("relative" !== this.cssPosition)
            return {top: 0,left: 0};
        var a = this.element.position(), b = this._isRootNode(this.scrollParent[0]);
        return {top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())}
    },_cacheMargins: function() {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0,top: parseInt(this.element.css("marginTop"), 10) || 0,right: parseInt(this.element.css("marginRight"), 10) || 0,bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    },_cacheHelperProportions: function() {
        this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
    },_setContainment: function() {
        var b, c, d, e = this.options, f = this.document[0];
        return this.relativeContainer = null, e.containment ? "window" === e.containment ? void (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void (this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void (d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void (this.containment = null)
    },_convertPositionTo: function(a, b) {
        b || (b = this.position);
        var c = "absolute" === a ? 1 : -1, d = this._isRootNode(this.scrollParent[0]);
        return {top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c}
    },_generatePosition: function(a, b) {
        var c, d, e, f, g = this.options, h = this._isRootNode(this.scrollParent[0]), i = a.pageX, j = a.pageY;
        return h && this.offset.scroll || (this.offset.scroll = {top: this.scrollParent.scrollTop(),left: this.scrollParent.scrollLeft()}), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)}
    },_clear: function() {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },_normalizeRightBottom: function() {
        "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
    },_trigger: function(b, c, d) {
        return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
    },plugins: {},_uiHash: function() {
        return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs}
    }}), a.ui.plugin.add("draggable", "connectToSortable", {start: function(b, c, d) {
        var e = a.extend({}, c, {item: d.element});
        d.sortables = [], a(d.options.connectToSortable).each(function() {
            var c = a(this).sortable("instance");
            c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
        })
    },stop: function(b, c, d) {
        var e = a.extend({}, c, {item: d.element});
        d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
            var a = this;
            a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {position: a.placeholder.css("position"),top: a.placeholder.css("top"),left: a.placeholder.css("left")}, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
        })
    },drag: function(b, c, d) {
        a.each(d.sortables, function() {
            var e = !1, f = this;
            f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
            })), e ? (f.isOver || (f.isOver = 1, f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                return c.helper[0]
            }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                this.refreshPositions()
            }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
                this.refreshPositions()
            }))
        })
    }}), a.ui.plugin.add("draggable", "cursor", {start: function(b, c, d) {
        var e = a("body"), f = d.options;
        e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
    },stop: function(b, c, d) {
        var e = d.options;
        e._cursor && a("body").css("cursor", e._cursor)
    }}), a.ui.plugin.add("draggable", "opacity", {start: function(b, c, d) {
        var e = a(c.helper), f = d.options;
        e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
    },stop: function(b, c, d) {
        var e = d.options;
        e._opacity && a(c.helper).css("opacity", e._opacity)
    }}), a.ui.plugin.add("draggable", "scroll", {start: function(a, b, c) {
        c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
    },drag: function(b, c, d) {
        var e = d.options, f = !1, g = d.scrollParentNotHidden[0], h = d.document[0];
        g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
    }}), a.ui.plugin.add("draggable", "snap", {start: function(b, c, d) {
        var e = d.options;
        d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
            var b = a(this), c = b.offset();
            this !== d.element[0] && d.snapElements.push({item: this,width: b.outerWidth(),height: b.outerHeight(),top: c.top,left: c.left})
        })
    },drag: function(b, c, d) {
        var e, f, g, h, i, j, k, l, m, n, o = d.options, p = o.snapTolerance, q = c.offset.left, r = q + d.helperProportions.width, s = c.offset.top, t = s + d.helperProportions.height;
        for (m = d.snapElements.length - 1; m >= 0; m--)
            i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[m].item})), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {top: k - d.helperProportions.height,left: 0}).top), f && (c.position.top = d._convertPositionTo("relative", {top: l,left: 0}).top), g && (c.position.left = d._convertPositionTo("relative", {top: 0,left: i - d.helperProportions.width}).left), h && (c.position.left = d._convertPositionTo("relative", {top: 0,left: j}).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {top: k,left: 0}).top), f && (c.position.top = d._convertPositionTo("relative", {top: l - d.helperProportions.height,left: 0}).top), g && (c.position.left = d._convertPositionTo("relative", {top: 0,left: i}).left), h && (c.position.left = d._convertPositionTo("relative", {top: 0,left: j - d.helperProportions.width}).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[m].item})), d.snapElements[m].snapping = e || f || g || h || n)
    }}), a.ui.plugin.add("draggable", "stack", {start: function(b, c, d) {
        var e, f = d.options, g = a.makeArray(a(f.stack)).sort(function(b, c) {
            return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
        });
        g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
            a(this).css("zIndex", e + b)
        }), this.css("zIndex", e + g.length))
    }}), a.ui.plugin.add("draggable", "zIndex", {start: function(b, c, d) {
        var e = a(c.helper), f = d.options;
        e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
    },stop: function(b, c, d) {
        var e = d.options;
        e._zIndex && a(c.helper).css("zIndex", e._zIndex)
    }}), a.ui.draggable
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/droppable", ["jquery", "./core", "./widget", "./mouse", "./draggable"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.droppable", {version: "1.11.3",widgetEventPrefix: "drop",options: {accept: "*",activeClass: !1,addClasses: !0,greedy: !1,hoverClass: !1,scope: "default",tolerance: "intersect",activate: null,deactivate: null,drop: null,out: null,over: null},_create: function() {
        var b, c = this.options, d = c.accept;
        this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) {
            return a.is(d)
        }, this.proportions = function() {
            return arguments.length ? void (b = arguments[0]) : b ? b : b = {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight}
        }, this._addToManager(c.scope), c.addClasses && this.element.addClass("ui-droppable")
    },_addToManager: function(b) {
        a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this)
    },_splice: function(a) {
        for (var b = 0; b < a.length; b++)
            a[b] === this && a.splice(b, 1)
    },_destroy: function() {
        var b = a.ui.ddmanager.droppables[this.options.scope];
        this._splice(b), this.element.removeClass("ui-droppable ui-droppable-disabled")
    },_setOption: function(b, c) {
        if ("accept" === b)
            this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c)
            };
        else if ("scope" === b) {
            var d = a.ui.ddmanager.droppables[this.options.scope];
            this._splice(d), this._addToManager(c)
        }
        this._super(b, c)
    },_activate: function(b) {
        var c = a.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
    },_deactivate: function(b) {
        var c = a.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
    },_over: function(b) {
        var c = a.ui.ddmanager.current;
        c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
    },_out: function(b) {
        var c = a.ui.ddmanager.current;
        c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
    },_drop: function(b, c) {
        var d = c || a.ui.ddmanager.current, e = !1;
        return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
            var c = a(this).droppable("instance");
            return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {offset: c.element.offset()}), c.options.tolerance, b) ? (e = !0, !1) : void 0
        }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1
    },ui: function(a) {
        return {draggable: a.currentItem || a.element,helper: a.helper,position: a.position,offset: a.positionAbs}
    }}), a.ui.intersect = function() {
        function a(a, b, c) {
            return a >= b && b + c > a
        }
        return function(b, c, d, e) {
            if (!c.offset)
                return !1;
            var f = (b.positionAbs || b.position.absolute).left + b.margins.left, g = (b.positionAbs || b.position.absolute).top + b.margins.top, h = f + b.helperProportions.width, i = g + b.helperProportions.height, j = c.offset.left, k = c.offset.top, l = j + c.proportions().width, m = k + c.proportions().height;
            switch (d) {
                case "fit":
                    return f >= j && l >= h && g >= k && m >= i;
                case "intersect":
                    return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;
                case "pointer":
                    return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
                case "touch":
                    return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);
                default:
                    return !1
            }
        }
    }(), a.ui.ddmanager = {current: null,droppables: {"default": []},prepareOffsets: function(b, c) {
        var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
        a: for (d = 0; d < f.length; d++)
            if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                for (e = 0; e < h.length; e++)
                    if (h[e] === f[d].element[0]) {
                        f[d].proportions().height = 0;
                        continue a
                    }
                f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({width: f[d].element[0].offsetWidth,height: f[d].element[0].offsetHeight}))
            }
    },drop: function(b, c) {
        var d = !1;
        return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
            this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
        }), d
    },dragStart: function(b, c) {
        b.element.parentsUntil("body").bind("scroll.droppable", function() {
            b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        })
    },drag: function(b, c) {
        b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance, c), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                    return a(this).droppable("instance").options.scope === e
                }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
            }
        })
    },dragStop: function(b, c) {
        b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
    }}, a.ui.droppable
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/position", ["jquery"], a) : a(jQuery)
}(function(a) {
    return function() {
        function b(a, b, c) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }
        function c(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }
        function d(b) {
            var c = b[0];
            return 9 === c.nodeType ? {width: b.width(),height: b.height(),offset: {top: 0,left: 0}} : a.isWindow(c) ? {width: b.width(),height: b.height(),offset: {top: b.scrollTop(),left: b.scrollLeft()}} : c.preventDefault ? {width: 0,height: 0,offset: {top: c.pageY,left: c.pageX}} : {width: b.outerWidth(),height: b.outerHeight(),offset: b.offset()}
        }
        a.ui = a.ui || {};
        var e, f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
        a.position = {scrollbarWidth: function() {
            if (void 0 !== e)
                return e;
            var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), f = d.children()[0];
            return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
        },getScrollInfo: function(b) {
            var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
            return {width: f ? a.position.scrollbarWidth() : 0,height: e ? a.position.scrollbarWidth() : 0}
        },getWithinInfo: function(b) {
            var c = a(b || window), d = a.isWindow(c[0]), e = !!c[0] && 9 === c[0].nodeType;
            return {element: c,isWindow: d,isDocument: e,offset: c.offset() || {left: 0,top: 0},scrollLeft: c.scrollLeft(),scrollTop: c.scrollTop(),width: d || e ? c.width() : c.outerWidth(),height: d || e ? c.height() : c.outerHeight()}
        }}, a.fn.position = function(e) {
            if (!e || !e.of)
                return o.apply(this, arguments);
            e = a.extend({}, e);
            var n, p, q, r, s, t, u = a(e.of), v = a.position.getWithinInfo(e.within), w = a.position.getScrollInfo(v), x = (e.collision || "flip").split(" "), y = {};
            return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function() {
                var a, b, c = (e[this] || "").split(" ");
                1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function() {
                var d, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = c(this, "marginLeft"), t = c(this, "marginTop"), z = l + o + c(this, "marginRight") + w.width, A = m + t + c(this, "marginBottom") + w.height, B = a.extend({}, s), C = b(y.my, k.outerWidth(), k.outerHeight());
                "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {marginLeft: o,marginTop: t}, a.each(["left", "top"], function(b, c) {
                    a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {targetWidth: p,targetHeight: q,elemWidth: l,elemHeight: m,collisionPosition: d,collisionWidth: z,collisionHeight: A,offset: [n[0] + C[0], n[1] + C[1]],my: e.my,at: e.at,within: v,elem: k})
                }), e.using && (j = function(a) {
                    var b = r.left - B.left, c = b + p - l, d = r.top - B.top, f = d + q - m, i = {target: {element: u,left: r.left,top: r.top,width: p,height: q},element: {element: k,left: B.left,top: B.top,width: l,height: m},horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"};
                    l > p && h(b + c) < p && (i.horizontal = "center"), m > q && h(d + f) < q && (i.vertical = "middle"), i.important = g(h(b), h(c)) > g(h(d), h(f)) ? "horizontal" : "vertical", e.using.call(this, a, i)
                }), k.offset(a.extend(B, {using: j}))
            })
        }, a.ui.position = {fit: {left: function(a, b) {
            var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
            b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
        },top: function(a, b) {
            var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
            b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
        }},flip: {left: function(a, b) {
            var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
            0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o))
        },top: function(a, b) {
            var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
            0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || h(c) < l) && (a.top += n + o + p))
        }},flipfit: {left: function() {
            a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
        },top: function() {
            a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
        }}}, function() {
            var b, c, d, e, g, h = document.getElementsByTagName("body")[0], i = document.createElement("div");
            b = document.createElement(h ? "div" : "body"), d = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"}, h && a.extend(d, {position: "absolute",left: "-1000px",top: "-1000px"});
            for (g in d)
                b.style[g] = d[g];
            b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
        }()
    }(), a.ui.position
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/menu", ["jquery", "./core", "./widget", "./position"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.menu", {version: "1.11.3",defaultElement: "<ul>",delay: 300,options: {icons: {submenu: "ui-icon-carat-1-e"},items: "> *",menus: "ul",position: {my: "left-1 top",at: "right top"},role: "menu",blur: null,focus: null,select: null},_create: function() {
        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role,tabIndex: 0}), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item": function(a) {
            a.preventDefault()
        },"click .ui-menu-item": function(b) {
            var c = a(b.target);
            !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        },"mouseenter .ui-menu-item": function(b) {
            if (!this.previousFilter) {
                var c = a(b.currentTarget);
                c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
            }
        },mouseleave: "collapseAll","mouseleave .ui-menu": "collapseAll",focus: function(a, b) {
            var c = this.active || this.element.find(this.options.items).eq(0);
            b || this.focus(a, c)
        },blur: function(b) {
            this._delay(function() {
                a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
            })
        },keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function(a) {
            this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
        }})
    },_destroy: function() {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
            var b = a(this);
            b.data("ui-menu-submenu-carat") && b.remove()
        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    },_keydown: function(b) {
        var c, d, e, f, g = !0;
        switch (b.keyCode) {
            case a.ui.keyCode.PAGE_UP:
                this.previousPage(b);
                break;
            case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(b);
                break;
            case a.ui.keyCode.HOME:
                this._move("first", "first", b);
                break;
            case a.ui.keyCode.END:
                this._move("last", "last", b);
                break;
            case a.ui.keyCode.UP:
                this.previous(b);
                break;
            case a.ui.keyCode.DOWN:
                this.next(b);
                break;
            case a.ui.keyCode.LEFT:
                this.collapse(b);
                break;
            case a.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                break;
            case a.ui.keyCode.ENTER:
            case a.ui.keyCode.SPACE:
                this._activate(b);
                break;
            case a.ui.keyCode.ESCAPE:
                this.collapse(b);
                break;
            default:
                g = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
        }
        g && b.preventDefault()
    },_activate: function(a) {
        this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
    },refresh: function() {
        var b, c, d = this, e = this.options.icons.submenu, f = this.element.find(this.options.menus);
        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role: this.options.role,"aria-hidden": "true","aria-expanded": "false"}).each(function() {
            var b = a(this), c = b.parent(), d = a("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
            c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
        }), b = f.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
            var b = a(this);
            d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider")
        }), c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex: -1,role: this._itemRole()}), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
    },_itemRole: function() {
        return {menu: "menuitem",listbox: "option"}[this.options.role]
    },_setOption: function(a, b) {
        "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this._super(a, b)
    },focus: function(a, b) {
        var c, d;
        this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
            this._close()
        }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {item: b})
    },_scrollIntoView: function(b) {
        var c, d, e, f, g, h;
        this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
    },blur: function(a, b) {
        b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {item: this.active}))
    },_startOpening: function(a) {
        clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
            this._close(), this._open(a)
        }, this.delay))
    },_open: function(b) {
        var c = a.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
    },collapseAll: function(b, c) {
        clearTimeout(this.timer), this.timer = this._delay(function() {
            var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
            d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
        }, this.delay)
    },_close: function(a) {
        a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
    },_closeOnDocumentClick: function(b) {
        return !a(b.target).closest(".ui-menu").length
    },_isDivider: function(a) {
        return !/[^\-\u2014\u2013\s]/.test(a.text())
    },collapse: function(a) {
        var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        b && b.length && (this._close(), this.focus(a, b))
    },expand: function(a) {
        var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
        b && b.length && (this._open(b.parent()), this._delay(function() {
            this.focus(a, b)
        }))
    },next: function(a) {
        this._move("next", "first", a)
    },previous: function(a) {
        this._move("prev", "last", a)
    },isFirstItem: function() {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    },isLastItem: function() {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    },_move: function(a, b, c) {
        var d;
        this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
    },nextPage: function(b) {
        var c, d, e;
        return this.active ? void (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
            return c = a(this), c.offset().top - d - e < 0
        }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
    },previousPage: function(b) {
        var c, d, e;
        return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
            return c = a(this), c.offset().top - d + e > 0
        }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
    },_hasScroll: function() {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    },select: function(b) {
        this.active = this.active || a(b.target).closest(".ui-menu-item");
        var c = {item: this.active};
        this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
    },_filterMenuItems: function(b) {
        var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), d = new RegExp("^" + c, "i");
        return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
            return d.test(a.trim(a(this).text()))
        })
    }})
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/autocomplete", ["jquery", "./core", "./widget", "./position", "./menu"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.autocomplete", {version: "1.11.3",defaultElement: "<input>",options: {appendTo: null,autoFocus: !1,delay: 300,minLength: 1,position: {my: "left top",at: "left bottom",collision: "none"},source: null,change: null,close: null,focus: null,open: null,response: null,search: null,select: null},requestIndex: 0,pending: 0,_create: function() {
        var b, c, d, e = this.element[0].nodeName.toLowerCase(), f = "textarea" === e, g = "input" === e;
        this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function(e) {
            if (this.element.prop("readOnly"))
                return b = !0, d = !0, void (c = !0);
            b = !1, d = !1, c = !1;
            var f = a.ui.keyCode;
            switch (e.keyCode) {
                case f.PAGE_UP:
                    b = !0, this._move("previousPage", e);
                    break;
                case f.PAGE_DOWN:
                    b = !0, this._move("nextPage", e);
                    break;
                case f.UP:
                    b = !0, this._keyEvent("previous", e);
                    break;
                case f.DOWN:
                    b = !0, this._keyEvent("next", e);
                    break;
                case f.ENTER:
                    this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                    break;
                case f.TAB:
                    this.menu.active && this.menu.select(e);
                    break;
                case f.ESCAPE:
                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                    break;
                default:
                    c = !0, this._searchTimeout(e)
            }
        },keypress: function(d) {
            if (b)
                return b = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
            if (!c) {
                var e = a.ui.keyCode;
                switch (d.keyCode) {
                    case e.PAGE_UP:
                        this._move("previousPage", d);
                        break;
                    case e.PAGE_DOWN:
                        this._move("nextPage", d);
                        break;
                    case e.UP:
                        this._keyEvent("previous", d);
                        break;
                    case e.DOWN:
                        this._keyEvent("next", d)
                }
            }
        },input: function(a) {
            return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
        },focus: function() {
            this.selectedItem = null, this.previous = this._value()
        },blur: function(a) {
            return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
        }}), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._on(this.menu.element, {mousedown: function(b) {
            b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                delete this.cancelBlur
            });
            var c = this.menu.element[0];
            a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                var b = this;
                this.document.one("mousedown", function(d) {
                    d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
                })
            })
        },menufocus: function(b, c) {
            var d, e;
            return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                a(b.target).trigger(b.originalEvent)
            })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {item: e}) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, void (d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
        },menuselect: function(a, b) {
            var c = b.item.data("ui-autocomplete-item"), d = this.previous;
            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                this.previous = d, this.selectedItem = c
            })), !1 !== this._trigger("select", a, {item: c}) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
        }}), this.liveRegion = a("<span>", {role: "status","aria-live": "assertive","aria-relevant": "additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {beforeunload: function() {
            this.element.removeAttr("autocomplete")
        }})
    },_destroy: function() {
        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },_setOption: function(a, b) {
        this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
    },_appendTo: function() {
        var b = this.options.appendTo;
        return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
    },_initSource: function() {
        var b, c, d = this;
        a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
            d(a.ui.autocomplete.filter(b, c.term))
        }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
            d.xhr && d.xhr.abort(), d.xhr = a.ajax({url: c,data: b,dataType: "json",success: function(a) {
                e(a)
            },error: function() {
                e([])
            }})
        }) : this.source = this.options.source
    },_searchTimeout: function(a) {
        clearTimeout(this.searching), this.searching = this._delay(function() {
            var b = this.term === this._value(), c = this.menu.element.is(":visible"), d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
            (!b || b && !c && !d) && (this.selectedItem = null, this.search(null, a))
        }, this.options.delay)
    },search: function(a, b) {
        return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
    },_search: function(a) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: a}, this._response())
    },_response: function() {
        var b = ++this.requestIndex;
        return a.proxy(function(a) {
            b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        }, this)
    },__response: function(a) {
        a && (a = this._normalize(a)), this._trigger("response", null, {content: a}), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
    },close: function(a) {
        this.cancelSearch = !0, this._close(a)
    },_close: function(a) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
    },_change: function(a) {
        this.previous !== this._value() && this._trigger("change", a, {item: this.selectedItem})
    },_normalize: function(b) {
        return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
            return "string" == typeof b ? {label: b,value: b} : a.extend({}, b, {label: b.label || b.value,value: b.value || b.label})
        })
    },_suggest: function(b) {
        var c = this.menu.element.empty();
        this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    },_resizeMenu: function() {
        var a = this.menu.element;
        a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
    },_renderMenu: function(b, c) {
        var d = this;
        a.each(c, function(a, c) {
            d._renderItemData(b, c)
        })
    },_renderItemData: function(a, b) {
        return this._renderItem(a, b).data("ui-autocomplete-item", b)
    },_renderItem: function(b, c) {
        return a("<li>").text(c.label).appendTo(b)
    },_move: function(a, b) {
        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
    },widget: function() {
        return this.menu.element
    },_value: function() {
        return this.valueMethod.apply(this.element, arguments)
    },_keyEvent: function(a, b) {
        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
    }}), a.extend(a.ui.autocomplete, {escapeRegex: function(a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    },filter: function(b, c) {
        var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
        return a.grep(b, function(a) {
            return d.test(a.label || a.value || a)
        })
    }}), a.widget("ui.autocomplete", a.ui.autocomplete, {options: {messages: {noResults: "No search results.",results: function(a) {
        return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }}},__response: function(b) {
        var c;
        this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
    }}), a.ui.autocomplete
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery-ui/sortable", ["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.sortable", a.ui.mouse, {version: "1.11.3",widgetEventPrefix: "sort",ready: !1,options: {appendTo: "parent",axis: !1,connectWith: !1,containment: !1,cursor: "auto",cursorAt: !1,dropOnEmpty: !0,forcePlaceholderSize: !1,forceHelperSize: !1,grid: !1,handle: !1,helper: "original",items: "> *",opacity: !1,placeholder: !1,revert: !1,scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1e3,activate: null,beforeStop: null,change: null,deactivate: null,out: null,over: null,receive: null,remove: null,sort: null,start: null,stop: null,update: null},_isOverAxis: function(a, b, c) {
        return a >= b && b + c > a
    },_isFloating: function(a) {
        return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
    },_create: function() {
        var a = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
    },_setOption: function(a, b) {
        this._super(a, b), "handle" === a && this._setHandleClassName()
    },_setHandleClassName: function() {
        this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), a.each(this.items, function() {
            (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
        })
    },_destroy: function() {
        this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
        for (var a = this.items.length - 1; a >= 0; a--)
            this.items[a].item.removeData(this.widgetName + "-item");
        return this
    },_mouseCapture: function(b, c) {
        var d = null, e = !1, f = this;
        return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function() {
            return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
        }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d && (!this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
            this === b.target && (e = !0)
        }), e)) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1)
    },_mouseStart: function(b, c, d) {
        var e, f, g = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, a.extend(this.offset, {click: {left: b.pageX - this.offset.left,top: b.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
            for (e = this.containers.length - 1; e >= 0; e--)
                this.containers[e]._trigger("activate", b, this._uiHash(this));
        return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
    },_mouseDrag: function(b) {
        var c, d, e, f, g = this.options, h = !1;
        for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - this.document.scrollTop() < g.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - g.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < g.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + g.scrollSpeed)), b.pageX - this.document.scrollLeft() < g.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - g.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < g.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
            if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d))
                    break;
                this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                break
            }
        return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },_mouseStop: function(b, c) {
        if (b) {
            if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
                f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                    d._clear(b)
                })
            } else
                this._clear(b, c);
            return !1
        }
    },cancel: function() {
        if (this.dragging) {
            this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var b = this.containers.length - 1; b >= 0; b--)
                this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {helper: null,dragging: !1,reverting: !1,_noFinalSort: null}), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
    },serialize: function(b) {
        var c = this._getItemsAsjQuery(b && b.connected), d = [];
        return b = b || {}, a(c).each(function() {
            var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
            c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
        }), !d.length && b.key && d.push(b.key + "="), d.join("&")
    },toArray: function(b) {
        var c = this._getItemsAsjQuery(b && b.connected), d = [];
        return b = b || {}, c.each(function() {
            d.push(a(b.item || this).attr(b.attribute || "id") || "")
        }), d
    },_intersectsWith: function(a) {
        var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = "x" === this.options.axis || d + j > h && i > d + j, m = "y" === this.options.axis || b + k > f && g > b + k, n = l && m;
        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
    },_intersectsWithPointer: function(a) {
        var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height), c = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width), d = b && c, e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
        return d ? this.floating ? f && "right" === f || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1) : !1
    },_intersectsWithSides: function(a) {
        var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), d = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection();
        return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b)
    },_getDragVerticalDirection: function() {
        var a = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== a && (a > 0 ? "down" : "up")
    },_getDragHorizontalDirection: function() {
        var a = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== a && (a > 0 ? "right" : "left")
    },refresh: function(a) {
        return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this
    },_connectWith: function() {
        var a = this.options;
        return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
    },_getItemsAsjQuery: function(b) {
        function c() {
            h.push(this)
        }
        var d, e, f, g, h = [], i = [], j = this._connectWith();
        if (j && b)
            for (d = j.length - 1; d >= 0; d--)
                for (f = a(j[d], this.document[0]), e = f.length - 1; e >= 0; e--)
                    g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
        for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--)
            i[d][0].each(c);
        return a(h)
    },_removeCurrentsFromItems: function() {
        var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = a.grep(this.items, function(a) {
            for (var c = 0; c < b.length; c++)
                if (b[c] === a.item[0])
                    return !1;
            return !0
        })
    },_refreshItems: function(b) {
        this.items = [], this.containers = [this];
        var c, d, e, f, g, h, i, j, k = this.items, l = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {item: this.currentItem}) : a(this.options.items, this.element), this]], m = this._connectWith();
        if (m && this.ready)
            for (c = m.length - 1; c >= 0; c--)
                for (e = a(m[c], this.document[0]), d = e.length - 1; d >= 0; d--)
                    f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {item: this.currentItem}) : a(f.options.items, f.element), f]), this.containers.push(f));
        for (c = l.length - 1; c >= 0; c--)
            for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++)
                i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({item: i,instance: g,width: 0,height: 0,left: 0,top: 0})
    },refreshPositions: function(b) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var c, d, e, f;
        for (c = this.items.length - 1; c >= 0; c--)
            d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
        if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
        else
            for (c = this.containers.length - 1; c >= 0; c--)
                f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
        return this
    },_createPlaceholder: function(b) {
        b = b || this;
        var c, d = b.options;
        d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {element: function() {
            var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
            return "tr" === d ? b.currentItem.children().each(function() {
                a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e)
            }) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
        },update: function(a, e) {
            (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
        }}), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
    },_contactContainers: function(b) {
        var c, d, e, f, g, h, i, j, k, l, m = null, n = null;
        for (c = this.containers.length - 1; c >= 0; c--)
            if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                if (this._intersectsWith(this.containers[c].containerCache)) {
                    if (m && a.contains(this.containers[c].element[0], m.element[0]))
                        continue;
                    m = this.containers[c], n = c
                } else
                    this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
        if (m)
            if (1 === this.containers.length)
                this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);
            else {
                for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "clientX" : "clientY", d = this.items.length - 1; d >= 0; d--)
                    a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), Math.abs(b[l] - i) < e && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down"));
                if (!f && !this.options.dropOnEmpty)
                    return;
                if (this.currentContainer === this.containers[n])
                    return void (this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
                f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1
            }
    },_createHelper: function(b) {
        var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
        return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
    },_adjustOffsetFromHelper: function(b) {
        "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {left: +b[0],top: +b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
    },_getParentOffset: function() {
        this.offsetParent = this.helper.offsetParent();
        var b = this.offsetParent.offset();
        return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {top: 0,left: 0}), {top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    },_getRelativeOffset: function() {
        if ("relative" === this.cssPosition) {
            var a = this.currentItem.position();
            return {top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return {top: 0,left: 0}
    },_cacheMargins: function() {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    },_cacheHelperProportions: function() {
        this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
    },_setContainment: function() {
        var b, c, d, e = this.options;
        "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    },_convertPositionTo: function(b, c) {
        c || (c = this.position);
        var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
        return {top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d}
    },_generatePosition: function(b) {
        var c, d, e = this.options, f = b.pageX, g = b.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = /(html|body)/i.test(h[0].tagName);
        return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())}
    },_rearrange: function(a, b, c, d) {
        c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var e = this.counter;
        this._delay(function() {
            e === this.counter && this.refreshPositions(!d)
        })
    },_clear: function(a, b) {
        function c(a, b, c) {
            return function(d) {
                c._trigger(a, d, b._uiHash(b))
            }
        }
        this.reverting = !1;
        var d, e = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
            for (d in this._storedCSS)
                ("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else
            this.currentItem.show();
        for (this.fromOutside && !b && e.push(function(a) {
            this._trigger("receive", a, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
            this._trigger("update", a, this._uiHash())
        }), this !== this.currentContainer && (b || (e.push(function(a) {
            this._trigger("remove", a, this._uiHash())
        }), e.push(function(a) {
            return function(b) {
                a._trigger("receive", b, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), e.push(function(a) {
            return function(b) {
                a._trigger("update", b, this._uiHash(this))
            }
        }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--)
            b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) {
            for (d = 0; d < e.length; d++)
                e[d].call(this, a);
            this._trigger("stop", a, this._uiHash())
        }
        return this.fromOutside = !1, !this.cancelHelperRemoval
    },_trigger: function() {
        a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },_uiHash: function(b) {
        var c = b || this;
        return {helper: c.helper,placeholder: c.placeholder || a([]),position: c.position,originalPosition: c.originalPosition,offset: c.positionAbs,item: c.currentItem,sender: b ? b.element : null}
    }})
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery.cookie", ["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }
    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }
    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {
        }
    }
    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g, h = a.cookie = function(e, g, i) {
        if (void 0 !== g && !a.isFunction(g)) {
            if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                var j = i.expires, k = i.expires = new Date;
                k.setTime(+k + 864e5 * j)
            }
            return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
            var p = m[n].split("="), q = c(p.shift()), r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break
            }
            e || void 0 === (r = f(r)) || (l[q] = r)
        }
        return l
    };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {expires: -1})), !a.cookie(b))
    }
}), function(a, b) {
    "function" == typeof define && define.amd ? define("jquery.transit", ["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    function b(a) {
        if (a in l.style)
            return a;
        for (var b = ["Moz", "Webkit", "O", "ms"], c = a.charAt(0).toUpperCase() + a.substr(1), d = 0; d < b.length; ++d) {
            var e = b[d] + c;
            if (e in l.style)
                return e
        }
    }
    function c() {
        return l.style[m.transform] = "", l.style[m.transform] = "rotateY(90deg)", "" !== l.style[m.transform]
    }
    function d(a) {
        return "string" == typeof a && this.parse(a), this
    }
    function e(a, b, c) {
        b === !0 ? a.queue(c) : b ? a.queue(b, c) : a.each(function() {
            c.call(this)
        })
    }
    function f(b) {
        var c = [];
        return a.each(b, function(b) {
            b = a.camelCase(b), b = a.transit.propertyMap[b] || a.cssProps[b] || b, b = i(b), m[b] && (b = i(m[b])), -1 === a.inArray(b, c) && c.push(b)
        }), c
    }
    function g(b, c, d, e) {
        var g = f(b);
        a.cssEase[d] && (d = a.cssEase[d]);
        var h = "" + k(c) + " " + d;
        parseInt(e, 10) > 0 && (h += " " + k(e));
        var i = [];
        return a.each(g, function(a, b) {
            i.push(b + " " + h)
        }), i.join(", ")
    }
    function h(b, c) {
        c || (a.cssNumber[b] = !0), a.transit.propertyMap[b] = m.transform, a.cssHooks[b] = {get: function(c) {
            var d = a(c).css("transit:transform");
            return d.get(b)
        },set: function(c, d) {
            var e = a(c).css("transit:transform");
            e.setFromString(b, d), a(c).css({"transit:transform": e})
        }}
    }
    function i(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }
    function j(a, b) {
        return "string" != typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + b : a
    }
    function k(b) {
        var c = b;
        return "string" != typeof c || c.match(/^[\-0-9\.]+/) || (c = a.fx.speeds[c] || a.fx.speeds._default), j(c, "ms")
    }
    a.transit = {version: "0.9.12",propertyMap: {marginLeft: "margin",marginRight: "margin",marginBottom: "margin",marginTop: "margin",paddingLeft: "padding",paddingRight: "padding",paddingBottom: "padding",paddingTop: "padding"},enabled: !0,useTransitionEnd: !1};
    var l = document.createElement("div"), m = {}, n = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    m.transition = b("transition"), m.transitionDelay = b("transitionDelay"), m.transform = b("transform"), m.transformOrigin = b("transformOrigin"), m.filter = b("Filter"), m.transform3d = c();
    var o = {transition: "transitionend",MozTransition: "transitionend",OTransition: "oTransitionEnd",WebkitTransition: "webkitTransitionEnd",msTransition: "MSTransitionEnd"}, p = m.transitionEnd = o[m.transition] || null;
    for (var q in m)
        m.hasOwnProperty(q) && "undefined" == typeof a.support[q] && (a.support[q] = m[q]);
    return l = null, a.cssEase = {_default: "ease","in": "ease-in",out: "ease-out","in-out": "ease-in-out",snap: "cubic-bezier(0,1,.5,1)",easeInCubic: "cubic-bezier(.550,.055,.675,.190)",easeOutCubic: "cubic-bezier(.215,.61,.355,1)",easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",easeInCirc: "cubic-bezier(.6,.04,.98,.335)",easeOutCirc: "cubic-bezier(.075,.82,.165,1)",easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",easeInExpo: "cubic-bezier(.95,.05,.795,.035)",easeOutExpo: "cubic-bezier(.19,1,.22,1)",easeInOutExpo: "cubic-bezier(1,0,0,1)",easeInQuad: "cubic-bezier(.55,.085,.68,.53)",easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",easeInQuart: "cubic-bezier(.895,.03,.685,.22)",easeOutQuart: "cubic-bezier(.165,.84,.44,1)",easeInOutQuart: "cubic-bezier(.77,0,.175,1)",easeInQuint: "cubic-bezier(.755,.05,.855,.06)",easeOutQuint: "cubic-bezier(.23,1,.32,1)",easeInOutQuint: "cubic-bezier(.86,0,.07,1)",easeInSine: "cubic-bezier(.47,0,.745,.715)",easeOutSine: "cubic-bezier(.39,.575,.565,1)",easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",easeInBack: "cubic-bezier(.6,-.28,.735,.045)",easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"}, a.cssHooks["transit:transform"] = {get: function(b) {
        return a(b).data("transform") || new d
    },set: function(b, c) {
        var e = c;
        e instanceof d || (e = new d(e)), b.style[m.transform] = "WebkitTransform" !== m.transform || n ? e.toString() : e.toString(!0), a(b).data("transform", e)
    }}, a.cssHooks.transform = {set: a.cssHooks["transit:transform"].set}, a.cssHooks.filter = {get: function(a) {
        return a.style[m.filter]
    },set: function(a, b) {
        a.style[m.filter] = b
    }}, a.fn.jquery < "1.8" && (a.cssHooks.transformOrigin = {get: function(a) {
        return a.style[m.transformOrigin]
    },set: function(a, b) {
        a.style[m.transformOrigin] = b
    }}, a.cssHooks.transition = {get: function(a) {
        return a.style[m.transition]
    },set: function(a, b) {
        a.style[m.transition] = b
    }}), h("scale"), h("scaleX"), h("scaleY"), h("translate"), h("rotate"), h("rotateX"), h("rotateY"), h("rotate3d"), h("perspective"), h("skewX"), h("skewY"), h("x", !0), h("y", !0), d.prototype = {setFromString: function(a, b) {
        var c = "string" == typeof b ? b.split(",") : b.constructor === Array ? b : [b];
        c.unshift(a), d.prototype.set.apply(this, c)
    },set: function(a) {
        var b = Array.prototype.slice.apply(arguments, [1]);
        this.setter[a] ? this.setter[a].apply(this, b) : this[a] = b.join(",")
    },get: function(a) {
        return this.getter[a] ? this.getter[a].apply(this) : this[a] || 0
    },setter: {rotate: function(a) {
        this.rotate = j(a, "deg")
    },rotateX: function(a) {
        this.rotateX = j(a, "deg")
    },rotateY: function(a) {
        this.rotateY = j(a, "deg")
    },scale: function(a, b) {
        void 0 === b && (b = a), this.scale = a + "," + b
    },skewX: function(a) {
        this.skewX = j(a, "deg")
    },skewY: function(a) {
        this.skewY = j(a, "deg")
    },perspective: function(a) {
        this.perspective = j(a, "px")
    },x: function(a) {
        this.set("translate", a, null)
    },y: function(a) {
        this.set("translate", null, a)
    },translate: function(a, b) {
        void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== a && void 0 !== a && (this._translateX = j(a, "px")), null !== b && void 0 !== b && (this._translateY = j(b, "px")), this.translate = this._translateX + "," + this._translateY
    }},getter: {x: function() {
        return this._translateX || 0
    },y: function() {
        return this._translateY || 0
    },scale: function() {
        var a = (this.scale || "1,1").split(",");
        return a[0] && (a[0] = parseFloat(a[0])), a[1] && (a[1] = parseFloat(a[1])), a[0] === a[1] ? a[0] : a
    },rotate3d: function() {
        for (var a = (this.rotate3d || "0,0,0,0deg").split(","), b = 0; 3 >= b; ++b)
            a[b] && (a[b] = parseFloat(a[b]));
        return a[3] && (a[3] = j(a[3], "deg")), a
    }},parse: function(a) {
        var b = this;
        a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(a, c, d) {
            b.setFromString(c, d)
        })
    },toString: function(a) {
        var b = [];
        for (var c in this)
            if (this.hasOwnProperty(c)) {
                if (!m.transform3d && ("rotateX" === c || "rotateY" === c || "perspective" === c || "transformOrigin" === c))
                    continue;
                "_" !== c[0] && b.push(a && "scale" === c ? c + "3d(" + this[c] + ",1)" : a && "translate" === c ? c + "3d(" + this[c] + ",0)" : c + "(" + this[c] + ")")
            }
        return b.join(" ")
    }}, a.fn.transition = a.fn.transit = function(b, c, d, f) {
        var h = this, i = 0, j = !0, l = a.extend(!0, {}, b);
        "function" == typeof c && (f = c, c = void 0), "object" == typeof c && (d = c.easing, i = c.delay || 0, j = "undefined" == typeof c.queue ? !0 : c.queue, f = c.complete, c = c.duration), "function" == typeof d && (f = d, d = void 0), "undefined" != typeof l.easing && (d = l.easing, delete l.easing), "undefined" != typeof l.duration && (c = l.duration, delete l.duration), "undefined" != typeof l.complete && (f = l.complete, delete l.complete), "undefined" != typeof l.queue && (j = l.queue, delete l.queue), "undefined" != typeof l.delay && (i = l.delay, delete l.delay), "undefined" == typeof c && (c = a.fx.speeds._default), "undefined" == typeof d && (d = a.cssEase._default), c = k(c);
        var n = g(l, c, d, i), o = a.transit.enabled && m.transition, q = o ? parseInt(c, 10) + parseInt(i, 10) : 0;
        if (0 === q) {
            var r = function(a) {
                h.css(l), f && f.apply(h), a && a()
            };
            return e(h, j, r), h
        }
        var s = {}, t = function(b) {
            var c = !1, d = function() {
                c && h.unbind(p, d), q > 0 && h.each(function() {
                    this.style[m.transition] = s[this] || null
                }), "function" == typeof f && f.apply(h), "function" == typeof b && b()
            };
            q > 0 && p && a.transit.useTransitionEnd ? (c = !0, h.bind(p, d)) : window.setTimeout(d, q), h.each(function() {
                q > 0 && (this.style[m.transition] = n), a(this).css(l)
            })
        }, u = function(a) {
            this.offsetWidth, t(a)
        };
        return e(h, j, u), this
    }, a.transit.getTransitionValue = g, a
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery.ui.touch", ["jquery", "jquery-ui/mouse"], a) : a(jQuery)
}(function(a) {
    function b(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var c, d = a.ui.mouse.prototype, e = d._mouseInit, f = d._mouseDestroy;
        return d._touchStart = function(a) {
            var d = this;
            !c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
        }, d._touchMove = function(a) {
            c && (this._touchMoved = !0, b(a, "mousemove"))
        }, d._touchEnd = function(a) {
            c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1)
        }, d._mouseInit = function() {
            var b = this;
            b.element.bind({touchstart: a.proxy(b, "_touchStart"),touchmove: a.proxy(b, "_touchMove"),touchend: a.proxy(b, "_touchEnd")}), e.call(b)
        }, d._mouseDestroy = function() {
            var b = this;
            b.element.unbind({touchstart: a.proxy(b, "_touchStart"),touchmove: a.proxy(b, "_touchMove"),touchend: a.proxy(b, "_touchEnd")}), f.call(b)
        }, a.ui.mouse
    }
}), "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    function b() {
        var a = document.createElement("bootstrap"), b = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
        for (var c in b)
            if (void 0 !== a.style[c])
                return {end: b[c]};
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {bindType: a.support.transition.end,delegateType: a.support.transition.end,handle: function(b) {
            return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
        }})
    })
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.2.0", d.prototype.close = function(b) {
        function c() {
            f.detach().trigger("closed.bs.alert").remove()
        }
        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    })
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {interval: 5e3,pause: "hover",wrap: !0}, c.prototype.keydown = function(a) {
        switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        a.preventDefault()
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.to = function(b) {
        var c = this, d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap)
                return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active"))
            return this.sliding = !1;
        var j = e[0], k = a.Event("slide.bs.carousel", {relatedTarget: j,direction: g});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j,direction: g});
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {toggle: !0}, c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning)
                        return;
                    b.call(d, "hide"), e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition)
                    return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    }, c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        var d, e = a(this), f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), g = a(f), h = g.data("bs.collapse"), i = h ? "toggle" : e.data(), j = e.attr("data-parent"), k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
    })
}(jQuery), +function(a) {
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)), e = {relatedTarget: this};
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.2.0", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())
                    return;
                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode)
                    return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery), +function(a) {
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {backdrop: !0,keyboard: !0,show: !0}, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var c = this, d = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0).trigger("showing.bs.modal"), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {relatedTarget: b});
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                c.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var c = this, d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
                return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
        } else
            b && b()
    }, c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1,viewport: {selector: "body",padding: 0}}, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {show: b.delay,hide: b.delay}), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(document.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !c)
                return;
            var d = this, e = this.tip(), f = this.getUID(this.type);
            this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, h = /\s?auto?\s?/i, i = h.test(g);
            i && (g = g.replace(h, "") || "top"), e.detach().css({top: 0,left: 0,display: "block"}).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
            var j = this.getPosition(), k = e[0].offsetWidth, l = e[0].offsetHeight;
            if (i) {
                var m = g, n = this.$element.parent(), o = this.getPosition(n);
                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g)
            }
            var p = this.getCalculatedOffset(g, j, k, l);
            this.applyPlacement(p, g);
            var q = function() {
                d.$element.trigger("shown.bs." + d.type), d.hoverState = null
            };
            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({using: function(a) {
            d.css({top: Math.round(a.top),left: Math.round(a.left)})
        }}, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j, m = k.left ? "left" : "top", n = k.left ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(l, d[0][n], m)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName;
        return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),width: d ? a(window).width() : b.outerWidth(),height: d ? a(window).height() : b.outerHeight()}, d ? {top: 0,left: 0} : b.offset())
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {top: b.top + b.height,left: b.left + b.width / 2 - c / 2} : "top" == a ? {top: b.top - d,left: b.left + b.width / 2 - c / 2} : "left" == a ? {top: b.top + b.height / 2 - d / 2,left: b.left - c} : {top: b.top + b.height / 2 - d / 2,left: b.left + b.width}
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {top: 0,left: 0};
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {placement: "right",trigger: "click",content: "",template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), +function(a) {
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.2.0", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b <= e[0])
            return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.2.0", c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {relatedTarget: e});
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.closest("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({type: "shown.bs.tab",relatedTarget: e})
                })
            }
        }
    }, c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(c) {
        c.preventDefault(), b.call(a(this), "show")
    })
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {offset: 0,target: window}, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(), d = this.$target.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""), k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({top: b - this.$element.height() - h}))
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), define("bootstrap-js", function() {
}), function() {
    var a = this, b = a._, c = Array.prototype, d = Object.prototype, e = Function.prototype, f = c.push, g = c.slice, h = c.concat, i = d.toString, j = d.hasOwnProperty, k = Array.isArray, l = Object.keys, m = e.bind, n = function(a) {
        return a instanceof n ? a : this instanceof n ? void (this._wrapped = a) : new n(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n, n.VERSION = "1.7.0";
    var o = function(a, b, c) {
        if (void 0 === b)
            return a;
        switch (null == c ? 3 : c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                };
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                };
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    n.iteratee = function(a, b, c) {
        return null == a ? n.identity : n.isFunction(a) ? o(a, b, c) : n.isObject(a) ? n.matches(a) : n.property(a)
    }, n.each = n.forEach = function(a, b, c) {
        if (null == a)
            return a;
        b = o(b, c);
        var d, e = a.length;
        if (e === +e)
            for (d = 0; e > d; d++)
                b(a[d], d, a);
        else {
            var f = n.keys(a);
            for (d = 0, e = f.length; e > d; d++)
                b(a[f[d]], f[d], a)
        }
        return a
    }, n.map = n.collect = function(a, b, c) {
        if (null == a)
            return [];
        b = n.iteratee(b, c);
        for (var d, e = a.length !== +a.length && n.keys(a), f = (e || a).length, g = Array(f), h = 0; f > h; h++)
            d = e ? e[h] : h, g[h] = b(a[d], d, a);
        return g
    };
    var p = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(a, b, c, d) {
        null == a && (a = []), b = o(b, d, 4);
        var e, f = a.length !== +a.length && n.keys(a), g = (f || a).length, h = 0;
        if (arguments.length < 3) {
            if (!g)
                throw new TypeError(p);
            c = a[f ? f[h++] : h++]
        }
        for (; g > h; h++)
            e = f ? f[h] : h, c = b(c, a[e], e, a);
        return c
    }, n.reduceRight = n.foldr = function(a, b, c, d) {
        null == a && (a = []), b = o(b, d, 4);
        var e, f = a.length !== +a.length && n.keys(a), g = (f || a).length;
        if (arguments.length < 3) {
            if (!g)
                throw new TypeError(p);
            c = a[f ? f[--g] : --g]
        }
        for (; g--; )
            e = f ? f[g] : g, c = b(c, a[e], e, a);
        return c
    }, n.find = n.detect = function(a, b, c) {
        var d;
        return b = n.iteratee(b, c), n.some(a, function(a, c, e) {
            return b(a, c, e) ? (d = a, !0) : void 0
        }), d
    }, n.filter = n.select = function(a, b, c) {
        var d = [];
        return null == a ? d : (b = n.iteratee(b, c), n.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d)
    }, n.reject = function(a, b, c) {
        return n.filter(a, n.negate(n.iteratee(b)), c)
    }, n.every = n.all = function(a, b, c) {
        if (null == a)
            return !0;
        b = n.iteratee(b, c);
        var d, e, f = a.length !== +a.length && n.keys(a), g = (f || a).length;
        for (d = 0; g > d; d++)
            if (e = f ? f[d] : d, !b(a[e], e, a))
                return !1;
        return !0
    }, n.some = n.any = function(a, b, c) {
        if (null == a)
            return !1;
        b = n.iteratee(b, c);
        var d, e, f = a.length !== +a.length && n.keys(a), g = (f || a).length;
        for (d = 0; g > d; d++)
            if (e = f ? f[d] : d, b(a[e], e, a))
                return !0;
        return !1
    }, n.contains = n.include = function(a, b) {
        return null == a ? !1 : (a.length !== +a.length && (a = n.values(a)), n.indexOf(a, b) >= 0)
    }, n.invoke = function(a, b) {
        var c = g.call(arguments, 2), d = n.isFunction(b);
        return n.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c)
        })
    }, n.pluck = function(a, b) {
        return n.map(a, n.property(b))
    }, n.where = function(a, b) {
        return n.filter(a, n.matches(b))
    }, n.findWhere = function(a, b) {
        return n.find(a, n.matches(b))
    }, n.max = function(a, b, c) {
        var d, e, f = -1 / 0, g = -1 / 0;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; i > h; h++)
                d = a[h], d > f && (f = d)
        } else
            b = n.iteratee(b, c), n.each(a, function(a, c, d) {
                e = b(a, c, d), (e > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e)
            });
        return f
    }, n.min = function(a, b, c) {
        var d, e, f = 1 / 0, g = 1 / 0;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; i > h; h++)
                d = a[h], f > d && (f = d)
        } else
            b = n.iteratee(b, c), n.each(a, function(a, c, d) {
                e = b(a, c, d), (g > e || 1 / 0 === e && 1 / 0 === f) && (f = a, g = e)
            });
        return f
    }, n.shuffle = function(a) {
        for (var b, c = a && a.length === +a.length ? a : n.values(a), d = c.length, e = Array(d), f = 0; d > f; f++)
            b = n.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
        return e
    }, n.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && (a = n.values(a)), a[n.random(a.length - 1)]) : n.shuffle(a).slice(0, Math.max(0, b))
    }, n.sortBy = function(a, b, c) {
        return b = n.iteratee(b, c), n.pluck(n.map(a, function(a, c, d) {
            return {value: a,index: c,criteria: b(a, c, d)}
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c)
                    return 1;
                if (d > c || void 0 === d)
                    return -1
            }
            return a.index - b.index
        }), "value")
    };
    var q = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = n.iteratee(c, d), n.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    n.groupBy = q(function(a, b, c) {
        n.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), n.indexBy = q(function(a, b, c) {
        a[c] = b
    }), n.countBy = q(function(a, b, c) {
        n.has(a, c) ? a[c]++ : a[c] = 1
    }), n.sortedIndex = function(a, b, c, d) {
        c = n.iteratee(c, d, 1);
        for (var e = c(b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, n.toArray = function(a) {
        return a ? n.isArray(a) ? g.call(a) : a.length === +a.length ? n.map(a, n.identity) : n.values(a) : []
    }, n.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : n.keys(a).length
    }, n.partition = function(a, b, c) {
        b = n.iteratee(b, c);
        var d = [], e = [];
        return n.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, n.first = n.head = n.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : 0 > b ? [] : g.call(a, 0, b)
    }, n.initial = function(a, b, c) {
        return g.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, n.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : g.call(a, Math.max(a.length - b, 0))
    }, n.rest = n.tail = n.drop = function(a, b, c) {
        return g.call(a, null == b || c ? 1 : b)
    }, n.compact = function(a) {
        return n.filter(a, n.identity)
    };
    var r = function(a, b, c, d) {
        if (b && n.every(a, n.isArray))
            return h.apply(d, a);
        for (var e = 0, g = a.length; g > e; e++) {
            var i = a[e];
            n.isArray(i) || n.isArguments(i) ? b ? f.apply(d, i) : r(i, b, c, d) : c || d.push(i)
        }
        return d
    };
    n.flatten = function(a, b) {
        return r(a, b, !1, [])
    }, n.without = function(a) {
        return n.difference(a, g.call(arguments, 1))
    }, n.uniq = n.unique = function(a, b, c, d) {
        if (null == a)
            return [];
        n.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = n.iteratee(c, d));
        for (var e = [], f = [], g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (b)
                g && f === i || e.push(i), f = i;
            else if (c) {
                var j = c(i, g, a);
                n.indexOf(f, j) < 0 && (f.push(j), e.push(i))
            } else
                n.indexOf(e, i) < 0 && e.push(i)
        }
        return e
    }, n.union = function() {
        return n.uniq(r(arguments, !0, !0, []))
    }, n.intersection = function(a) {
        if (null == a)
            return [];
        for (var b = [], c = arguments.length, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            if (!n.contains(b, f)) {
                for (var g = 1; c > g && n.contains(arguments[g], f); g++)
                    ;
                g === c && b.push(f)
            }
        }
        return b
    }, n.difference = function(a) {
        var b = r(g.call(arguments, 1), !0, !0, []);
        return n.filter(a, function(a) {
            return !n.contains(b, a)
        })
    }, n.zip = function(a) {
        if (null == a)
            return [];
        for (var b = n.max(arguments, "length").length, c = Array(b), d = 0; b > d; d++)
            c[d] = n.pluck(arguments, d);
        return c
    }, n.object = function(a, b) {
        if (null == a)
            return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++)
            b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, n.indexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c)
                return d = n.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        for (; e > d; d++)
            if (a[d] === b)
                return d;
        return -1
    }, n.lastIndexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = a.length;
        for ("number" == typeof c && (d = 0 > c ? d + c + 1 : Math.min(d, c + 1)); --d >= 0; )
            if (a[d] === b)
                return d;
        return -1
    }, n.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c)
            e[f] = a;
        return e
    };
    var s = function() {
    };
    n.bind = function(a, b) {
        var c, d;
        if (m && a.bind === m)
            return m.apply(a, g.call(arguments, 1));
        if (!n.isFunction(a))
            throw new TypeError("Bind must be called on a function");
        return c = g.call(arguments, 2), d = function() {
            if (!(this instanceof d))
                return a.apply(b, c.concat(g.call(arguments)));
            s.prototype = a.prototype;
            var e = new s;
            s.prototype = null;
            var f = a.apply(e, c.concat(g.call(arguments)));
            return n.isObject(f) ? f : e
        }
    }, n.partial = function(a) {
        var b = g.call(arguments, 1);
        return function() {
            for (var c = 0, d = b.slice(), e = 0, f = d.length; f > e; e++)
                d[e] === n && (d[e] = arguments[c++]);
            for (; c < arguments.length; )
                d.push(arguments[c++]);
            return a.apply(this, d)
        }
    }, n.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (1 >= d)
            throw new Error("bindAll must be passed function names");
        for (b = 1; d > b; b++)
            c = arguments[b], a[c] = n.bind(a[c], a);
        return a
    }, n.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache, f = b ? b.apply(this, arguments) : d;
            return n.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, n.delay = function(a, b) {
        var c = g.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, n.defer = function(a) {
        return n.delay.apply(n, [a, 1].concat(g.call(arguments, 1)))
    }, n.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : n.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function() {
            var j = n.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k || k > b ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, n.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = n.now() - g;
            b > j && j > 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = n.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, n.wrap = function(a, b) {
        return n.partial(b, a)
    }, n.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, n.compose = function() {
        var a = arguments, b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--; )
                d = a[c].call(this, d);
            return d
        }
    }, n.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, n.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 ? c = b.apply(this, arguments) : b = null, c
        }
    }, n.once = n.partial(n.before, 2), n.keys = function(a) {
        if (!n.isObject(a))
            return [];
        if (l)
            return l(a);
        var b = [];
        for (var c in a)
            n.has(a, c) && b.push(c);
        return b
    }, n.values = function(a) {
        for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++)
            d[e] = a[b[e]];
        return d
    }, n.pairs = function(a) {
        for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++)
            d[e] = [b[e], a[b[e]]];
        return d
    }, n.invert = function(a) {
        for (var b = {}, c = n.keys(a), d = 0, e = c.length; e > d; d++)
            b[a[c[d]]] = c[d];
        return b
    }, n.functions = n.methods = function(a) {
        var b = [];
        for (var c in a)
            n.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, n.extend = function(a) {
        if (!n.isObject(a))
            return a;
        for (var b, c, d = 1, e = arguments.length; e > d; d++) {
            b = arguments[d];
            for (c in b)
                j.call(b, c) && (a[c] = b[c])
        }
        return a
    }, n.pick = function(a, b, c) {
        var d, e = {};
        if (null == a)
            return e;
        if (n.isFunction(b)) {
            b = o(b, c);
            for (d in a) {
                var f = a[d];
                b(f, d, a) && (e[d] = f)
            }
        } else {
            var i = h.apply([], g.call(arguments, 1));
            a = new Object(a);
            for (var j = 0, k = i.length; k > j; j++)
                d = i[j], d in a && (e[d] = a[d])
        }
        return e
    }, n.omit = function(a, b, c) {
        if (n.isFunction(b))
            b = n.negate(b);
        else {
            var d = n.map(h.apply([], g.call(arguments, 1)), String);
            b = function(a, b) {
                return !n.contains(d, b)
            }
        }
        return n.pick(a, b, c)
    }, n.defaults = function(a) {
        if (!n.isObject(a))
            return a;
        for (var b = 1, c = arguments.length; c > b; b++) {
            var d = arguments[b];
            for (var e in d)
                void 0 === a[e] && (a[e] = d[e])
        }
        return a
    }, n.clone = function(a) {
        return n.isObject(a) ? n.isArray(a) ? a.slice() : n.extend({}, a) : a
    }, n.tap = function(a, b) {
        return b(a), a
    };
    var t = function(a, b, c, d) {
        if (a === b)
            return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b)
            return a === b;
        a instanceof n && (a = a._wrapped), b instanceof n && (b = b._wrapped);
        var e = i.call(a);
        if (e !== i.call(b))
            return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        if ("object" != typeof a || "object" != typeof b)
            return !1;
        for (var f = c.length; f--; )
            if (c[f] === a)
                return d[f] === b;
        var g = a.constructor, h = b.constructor;
        if (g !== h && "constructor" in a && "constructor" in b && !(n.isFunction(g) && g instanceof g && n.isFunction(h) && h instanceof h))
            return !1;
        c.push(a), d.push(b);
        var j, k;
        if ("[object Array]" === e) {
            if (j = a.length, k = j === b.length)
                for (; j-- && (k = t(a[j], b[j], c, d)); )
                    ;
        } else {
            var l, m = n.keys(a);
            if (j = m.length, k = n.keys(b).length === j)
                for (; j-- && (l = m[j], k = n.has(b, l) && t(a[l], b[l], c, d)); )
                    ;
        }
        return c.pop(), d.pop(), k
    };
    n.isEqual = function(a, b) {
        return t(a, b, [], [])
    }, n.isEmpty = function(a) {
        if (null == a)
            return !0;
        if (n.isArray(a) || n.isString(a) || n.isArguments(a))
            return 0 === a.length;
        for (var b in a)
            if (n.has(a, b))
                return !1;
        return !0
    }, n.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, n.isArray = k || function(a) {
        return "[object Array]" === i.call(a)
    }, n.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        n["is" + a] = function(b) {
            return i.call(b) === "[object " + a + "]"
        }
    }), n.isArguments(arguments) || (n.isArguments = function(a) {
        return n.has(a, "callee")
    }), "function" != typeof /./ && (n.isFunction = function(a) {
        return "function" == typeof a || !1
    }), n.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, n.isNaN = function(a) {
        return n.isNumber(a) && a !== +a
    }, n.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === i.call(a)
    }, n.isNull = function(a) {
        return null === a
    }, n.isUndefined = function(a) {
        return void 0 === a
    }, n.has = function(a, b) {
        return null != a && j.call(a, b)
    }, n.noConflict = function() {
        return a._ = b, this
    }, n.identity = function(a) {
        return a
    }, n.constant = function(a) {
        return function() {
            return a
        }
    }, n.noop = function() {
    }, n.property = function(a) {
        return function(b) {
            return b[a]
        }
    }, n.matches = function(a) {
        var b = n.pairs(a), c = b.length;
        return function(a) {
            if (null == a)
                return !c;
            a = new Object(a);
            for (var d = 0; c > d; d++) {
                var e = b[d], f = e[0];
                if (e[1] !== a[f] || !(f in a))
                    return !1
            }
            return !0
        }
    }, n.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = o(b, c, 1);
        for (var e = 0; a > e; e++)
            d[e] = b(e);
        return d
    }, n.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, n.now = Date.now || function() {
        return (new Date).getTime()
    };
    var u = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#x27;","`": "&#x60;"}, v = n.invert(u), w = function(a) {
        var b = function(b) {
            return a[b]
        }, c = "(?:" + n.keys(a).join("|") + ")", d = RegExp(c), e = RegExp(c, "g");
        return function(a) {
            return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
        }
    };
    n.escape = w(u), n.unescape = w(v), n.result = function(a, b) {
        if (null == a)
            return void 0;
        var c = a[b];
        return n.isFunction(c) ? a[b]() : c
    };
    var x = 0;
    n.uniqueId = function(a) {
        var b = ++x + "";
        return a ? a + b : b
    }, n.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g};
    var y = /(.)^/, z = {"'": "'","\\": "\\","\r": "r","\n": "n","\u2028": "u2028","\u2029": "u2029"}, A = /\\|'|\r|\n|\u2028|\u2029/g, B = function(a) {
        return "\\" + z[a]
    };
    n.template = function(a, b, c) {
        !b && c && (b = c), b = n.defaults({}, b, n.templateSettings);
        var d = RegExp([(b.escape || y).source, (b.interpolate || y).source, (b.evaluate || y).source].join("|") + "|$", "g"), e = 0, f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(A, B), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        var i = function(a) {
            return g.call(this, a, n)
        }, j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i
    }, n.chain = function(a) {
        var b = n(a);
        return b._chain = !0, b
    };
    var C = function(a) {
        return this._chain ? n(a).chain() : a
    };
    n.mixin = function(a) {
        n.each(n.functions(a), function(b) {
            var c = n[b] = a[b];
            n.prototype[b] = function() {
                var a = [this._wrapped];
                return f.apply(a, arguments), C.call(this, c.apply(n, a))
            }
        })
    }, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], C.call(this, c)
        }
    }), n.each(["concat", "join", "slice"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            return C.call(this, b.apply(this._wrapped, arguments))
        }
    }), n.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return n
    })
}.call(this), function(a, b) {
    if ("function" == typeof define && define.amd)
        define("backbone", ["underscore", "jquery", "exports"], function(c, d, e) {
            a.Backbone = b(a, e, c, d)
        });
    else if ("undefined" != typeof exports) {
        var c = require("underscore");
        b(a, exports, c)
    } else
        a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
}(this, function(a, b, c, d) {
    {
        var e = a.Backbone, f = [], g = (f.push, f.slice);
        f.splice
    }
    b.VERSION = "1.1.2", b.$ = d, b.noConflict = function() {
        return a.Backbone = e, this
    }, b.emulateHTTP = !1, b.emulateJSON = !1;
    var h = b.Events = {on: function(a, b, c) {
        if (!j(this, "on", a, [b, c]) || !b)
            return this;
        this._events || (this._events = {});
        var d = this._events[a] || (this._events[a] = []);
        return d.push({callback: b,context: c,ctx: c || this}), this
    },once: function(a, b, d) {
        if (!j(this, "once", a, [b, d]) || !b)
            return this;
        var e = this, f = c.once(function() {
            e.off(a, f), b.apply(this, arguments)
        });
        return f._callback = b, this.on(a, f, d)
    },off: function(a, b, d) {
        var e, f, g, h, i, k, l, m;
        if (!this._events || !j(this, "off", a, [b, d]))
            return this;
        if (!a && !b && !d)
            return this._events = void 0, this;
        for (h = a ? [a] : c.keys(this._events), i = 0, k = h.length; k > i; i++)
            if (a = h[i], g = this._events[a]) {
                if (this._events[a] = e = [], b || d)
                    for (l = 0, m = g.length; m > l; l++)
                        f = g[l], (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && e.push(f);
                e.length || delete this._events[a]
            }
        return this
    },trigger: function(a) {
        if (!this._events)
            return this;
        var b = g.call(arguments, 1);
        if (!j(this, "trigger", a, b))
            return this;
        var c = this._events[a], d = this._events.all;
        return c && k(c, b), d && k(d, arguments), this
    },stopListening: function(a, b, d) {
        var e = this._listeningTo;
        if (!e)
            return this;
        var f = !b && !d;
        d || "object" != typeof b || (d = this), a && ((e = {})[a._listenId] = a);
        for (var g in e)
            a = e[g], a.off(b, d, this), (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
        return this
    }}, i = /\s+/, j = function(a, b, c, d) {
        if (!c)
            return !0;
        if ("object" == typeof c) {
            for (var e in c)
                a[b].apply(a, [e, c[e]].concat(d));
            return !1
        }
        if (i.test(c)) {
            for (var f = c.split(i), g = 0, h = f.length; h > g; g++)
                a[b].apply(a, [f[g]].concat(d));
            return !1
        }
        return !0
    }, k = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
            case 0:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx);
                return;
            case 1:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx, f);
                return;
            case 2:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx, f, g);
                return;
            case 3:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx, f, g, h);
                return;
            default:
                for (; ++d < e; )
                    (c = a[d]).callback.apply(c.ctx, b);
                return
        }
    }, l = {listenTo: "on",listenToOnce: "once"};
    c.each(l, function(a, b) {
        h[b] = function(b, d, e) {
            var f = this._listeningTo || (this._listeningTo = {}), g = b._listenId || (b._listenId = c.uniqueId("l"));
            return f[g] = b, e || "object" != typeof d || (e = this), b[a](d, e, this), this
        }
    }), h.bind = h.on, h.unbind = h.off, c.extend(b, h);
    var m = b.Model = function(a, b) {
        var d = a || {};
        b || (b = {}), this.cid = c.uniqueId("c"), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && (d = this.parse(d, b) || {}), d = c.defaults({}, d, c.result(this, "defaults")), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
    };
    c.extend(m.prototype, h, {changed: null,validationError: null,idAttribute: "id",initialize: function() {
    },toJSON: function() {
        return c.clone(this.attributes)
    },sync: function() {
        return b.sync.apply(this, arguments)
    },get: function(a) {
        return this.attributes[a]
    },escape: function(a) {
        return c.escape(this.get(a))
    },has: function(a) {
        return null != this.get(a)
    },set: function(a, b, d) {
        var e, f, g, h, i, j, k, l;
        if (null == a)
            return this;
        if ("object" == typeof a ? (f = a, d = b) : (f = {})[a] = b, d || (d = {}), !this._validate(f, d))
            return !1;
        g = d.unset, i = d.silent, h = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = c.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
        for (e in f)
            b = f[e], c.isEqual(l[e], b) || h.push(e), c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b, g ? delete l[e] : l[e] = b;
        if (!i) {
            h.length && (this._pending = d);
            for (var m = 0, n = h.length; n > m; m++)
                this.trigger("change:" + h[m], this, l[h[m]], d)
        }
        if (j)
            return this;
        if (!i)
            for (; this._pending; )
                d = this._pending, this._pending = !1, this.trigger("change", this, d);
        return this._pending = !1, this._changing = !1, this
    },unset: function(a, b) {
        return this.set(a, void 0, c.extend({}, b, {unset: !0}))
    },clear: function(a) {
        var b = {};
        for (var d in this.attributes)
            b[d] = void 0;
        return this.set(b, c.extend({}, a, {unset: !0}))
    },hasChanged: function(a) {
        return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
    },changedAttributes: function(a) {
        if (!a)
            return this.hasChanged() ? c.clone(this.changed) : !1;
        var b, d = !1, e = this._changing ? this._previousAttributes : this.attributes;
        for (var f in a)
            c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
        return d
    },previous: function(a) {
        return null != a && this._previousAttributes ? this._previousAttributes[a] : null
    },previousAttributes: function() {
        return c.clone(this._previousAttributes)
    },fetch: function(a) {
        a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
        var b = this, d = a.success;
        return a.success = function(c) {
            return b.set(b.parse(c, a), a) ? (d && d(b, c, a), void b.trigger("sync", b, c, a)) : !1
        }, L(this, a), this.sync("read", this, a)
    },save: function(a, b, d) {
        var e, f, g, h = this.attributes;
        if (null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({validate: !0}, d), e && !d.wait) {
            if (!this.set(e, d))
                return !1
        } else if (!this._validate(e, d))
            return !1;
        e && d.wait && (this.attributes = c.extend({}, h, e)), void 0 === d.parse && (d.parse = !0);
        var i = this, j = d.success;
        return d.success = function(a) {
            i.attributes = h;
            var b = i.parse(a, d);
            return d.wait && (b = c.extend(e || {}, b)), c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d), void i.trigger("sync", i, a, d))
        }, L(this, d), f = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" === f && (d.attrs = e), g = this.sync(f, this, d), e && d.wait && (this.attributes = h), g
    },destroy: function(a) {
        a = a ? c.clone(a) : {};
        var b = this, d = a.success, e = function() {
            b.trigger("destroy", b, b.collection, a)
        };
        if (a.success = function(c) {
            (a.wait || b.isNew()) && e(), d && d(b, c, a), b.isNew() || b.trigger("sync", b, c, a)
        }, this.isNew())
            return a.success(), !1;
        L(this, a);
        var f = this.sync("delete", this, a);
        return a.wait || e(), f
    },url: function() {
        var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || K();
        return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
    },parse: function(a) {
        return a
    },clone: function() {
        return new this.constructor(this.attributes)
    },isNew: function() {
        return !this.has(this.idAttribute)
    },isValid: function(a) {
        return this._validate({}, c.extend(a || {}, {validate: !0}))
    },_validate: function(a, b) {
        if (!b.validate || !this.validate)
            return !0;
        a = c.extend({}, this.attributes, a);
        var d = this.validationError = this.validate(a, b) || null;
        return d ? (this.trigger("invalid", this, d, c.extend(b, {validationError: d})), !1) : !0
    }});
    var n = ["keys", "values", "pairs", "invert", "pick", "omit"];
    c.each(n, function(a) {
        m.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.attributes), c[a].apply(c, b)
        }
    });
    var o = b.Collection = function(a, b) {
        b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({silent: !0}, b))
    }, p = {add: !0,remove: !0,merge: !0}, q = {add: !0,remove: !1};
    c.extend(o.prototype, h, {model: m,initialize: function() {
    },toJSON: function(a) {
        return this.map(function(b) {
            return b.toJSON(a)
        })
    },sync: function() {
        return b.sync.apply(this, arguments)
    },add: function(a, b) {
        return this.set(a, c.extend({merge: !1}, b, q))
    },remove: function(a, b) {
        var d = !c.isArray(a);
        a = d ? [a] : c.clone(a), b || (b = {});
        var e, f, g, h;
        for (e = 0, f = a.length; f > e; e++)
            h = a[e] = this.get(a[e]), h && (delete this._byId[h.id], delete this._byId[h.cid], g = this.indexOf(h), this.models.splice(g, 1), this.length--, b.silent || (b.index = g, h.trigger("remove", h, this, b)), this._removeReference(h, b));
        return d ? a[0] : a
    },set: function(a, b) {
        b = c.defaults({}, b, p), b.parse && (a = this.parse(a, b));
        var d = !c.isArray(a);
        a = d ? a ? [a] : [] : c.clone(a);
        var e, f, g, h, i, j, k, l = b.at, n = this.model, o = this.comparator && null == l && b.sort !== !1, q = c.isString(this.comparator) ? this.comparator : null, r = [], s = [], t = {}, u = b.add, v = b.merge, w = b.remove, x = !o && u && w ? [] : !1;
        for (e = 0, f = a.length; f > e; e++) {
            if (i = a[e] || {}, g = i instanceof m ? h = i : i[n.prototype.idAttribute || "id"], j = this.get(g))
                w && (t[j.cid] = !0), v && (i = i === h ? h.attributes : i, b.parse && (i = j.parse(i, b)), j.set(i, b), o && !k && j.hasChanged(q) && (k = !0)), a[e] = j;
            else if (u) {
                if (h = a[e] = this._prepareModel(i, b), !h)
                    continue;
                r.push(h), this._addReference(h, b)
            }
            h = j || h, !x || !h.isNew() && t[h.id] || x.push(h), t[h.id] = !0
        }
        if (w) {
            for (e = 0, f = this.length; f > e; ++e)
                t[(h = this.models[e]).cid] || s.push(h);
            s.length && this.remove(s, b)
        }
        if (r.length || x && x.length)
            if (o && (k = !0), this.length += r.length, null != l)
                for (e = 0, f = r.length; f > e; e++)
                    this.models.splice(l + e, 0, r[e]);
            else {
                x && (this.models.length = 0);
                var y = x || r;
                for (e = 0, f = y.length; f > e; e++)
                    this.models.push(y[e])
            }
        if (k && this.sort({silent: !0}), !b.silent) {
            for (e = 0, f = r.length; f > e; e++)
                (h = r[e]).trigger("add", h, this, b);
            (k || x && x.length) && this.trigger("sort", this, b)
        }
        return d ? a[0] : a
    },reset: function(a, b) {
        b || (b = {});
        for (var d = 0, e = this.models.length; e > d; d++)
            this._removeReference(this.models[d], b);
        return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({silent: !0}, b)), b.silent || this.trigger("reset", this, b), a
    },push: function(a, b) {
        return this.add(a, c.extend({at: this.length}, b))
    },pop: function(a) {
        var b = this.at(this.length - 1);
        return this.remove(b, a), b
    },unshift: function(a, b) {
        return this.add(a, c.extend({at: 0}, b))
    },shift: function(a) {
        var b = this.at(0);
        return this.remove(b, a), b
    },slice: function() {
        return g.apply(this.models, arguments)
    },get: function(a) {
        return null == a ? void 0 : this._byId[a] || this._byId[a.id] || this._byId[a.cid]
    },at: function(a) {
        return this.models[a]
    },where: function(a, b) {
        return c.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
            for (var c in a)
                if (a[c] !== b.get(c))
                    return !1;
            return !0
        })
    },findWhere: function(a) {
        return this.where(a, !0)
    },sort: function(a) {
        if (!this.comparator)
            throw new Error("Cannot sort a set without a comparator");
        return a || (a = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
    },pluck: function(a) {
        return c.invoke(this.models, "get", a)
    },fetch: function(a) {
        a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
        var b = a.success, d = this;
        return a.success = function(c) {
            var e = a.reset ? "reset" : "set";
            d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a)
        }, L(this, a), this.sync("read", this, a)
    },create: function(a, b) {
        if (b = b ? c.clone(b) : {}, !(a = this._prepareModel(a, b)))
            return !1;
        b.wait || this.add(a, b);
        var d = this, e = b.success;
        return b.success = function(a, c) {
            b.wait && d.add(a, b), e && e(a, c, b)
        }, a.save(null, b), a
    },parse: function(a) {
        return a
    },clone: function() {
        return new this.constructor(this.models)
    },_reset: function() {
        this.length = 0, this.models = [], this._byId = {}
    },_prepareModel: function(a, b) {
        if (a instanceof m)
            return a;
        b = b ? c.clone(b) : {}, b.collection = this;
        var d = new this.model(a, b);
        return d.validationError ? (this.trigger("invalid", this, d.validationError, b), !1) : d
    },_addReference: function(a) {
        this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a), a.collection || (a.collection = this), a.on("all", this._onModelEvent, this)
    },_removeReference: function(a) {
        this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
    },_onModelEvent: function(a, b, c, d) {
        ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
    }});
    var r = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    c.each(r, function(a) {
        o.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.models), c[a].apply(c, b)
        }
    });
    var s = ["groupBy", "countBy", "sortBy", "indexBy"];
    c.each(s, function(a) {
        o.prototype[a] = function(b, d) {
            var e = c.isFunction(b) ? b : function(a) {
                return a.get(b)
            };
            return c[a](this.models, e, d)
        }
    });
    var t = b.View = function(a) {
        this.cid = c.uniqueId("view"), a || (a = {}), c.extend(this, c.pick(a, v)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, u = /^(\S+)\s*(.*)$/, v = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    c.extend(t.prototype, h, {tagName: "div",$: function(a) {
        return this.$el.find(a)
    },initialize: function() {
    },render: function() {
        return this
    },remove: function() {
        return this.$el.remove(), this.stopListening(), this
    },setElement: function(a, c) {
        return this.$el && this.undelegateEvents(), this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0], c !== !1 && this.delegateEvents(), this
    },delegateEvents: function(a) {
        if (!a && !(a = c.result(this, "events")))
            return this;
        this.undelegateEvents();
        for (var b in a) {
            var d = a[b];
            if (c.isFunction(d) || (d = this[a[b]]), d) {
                var e = b.match(u), f = e[1], g = e[2];
                d = c.bind(d, this), f += ".delegateEvents" + this.cid, "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d)
            }
        }
        return this
    },undelegateEvents: function() {
        return this.$el.off(".delegateEvents" + this.cid), this
    },_ensureElement: function() {
        if (this.el)
            this.setElement(c.result(this, "el"), !1);
        else {
            var a = c.extend({}, c.result(this, "attributes"));
            this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className"));
            var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
            this.setElement(d, !1)
        }
    }}), b.sync = function(a, d, e) {
        var f = x[a];
        c.defaults(e || (e = {}), {emulateHTTP: b.emulateHTTP,emulateJSON: b.emulateJSON});
        var g = {type: f,dataType: "json"};
        if (e.url || (g.url = c.result(d, "url") || K()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {model: g.data} : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
            g.type = "POST", e.emulateJSON && (g.data._method = f);
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0
            }
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1), "PATCH" === g.type && w && (g.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var i = e.xhr = b.ajax(c.extend(g, e));
        return d.trigger("request", d, i, e), i
    };
    var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), x = {create: "POST",update: "PUT",patch: "PATCH","delete": "DELETE",read: "GET"};
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments)
    };
    var y = b.Router = function(a) {
        a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, z = /\((.*?)\)/g, A = /(\(\?)?:\w+/g, B = /\*\w+/g, C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(y.prototype, h, {initialize: function() {
    },route: function(a, d, e) {
        c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), e || (e = this[d]);
        var f = this;
        return b.history.route(a, function(c) {
            var g = f._extractParameters(a, c);
            f.execute(e, g), f.trigger.apply(f, ["route:" + d].concat(g)), f.trigger("route", d, g), b.history.trigger("route", f, d, g)
        }), this
    },execute: function(a, b) {
        a && a.apply(this, b)
    },navigate: function(a, c) {
        return b.history.navigate(a, c), this
    },_bindRoutes: function() {
        if (this.routes) {
            this.routes = c.result(this, "routes");
            for (var a, b = c.keys(this.routes); null != (a = b.pop()); )
                this.route(a, this.routes[a])
        }
    },_routeToRegExp: function(a) {
        return a = a.replace(C, "\\$&").replace(z, "(?:$1)?").replace(A, function(a, b) {
            return b ? a : "([^/?]+)"
        }).replace(B, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
    },_extractParameters: function(a, b) {
        var d = a.exec(b).slice(1);
        return c.map(d, function(a, b) {
            return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
        })
    }});
    var D = b.History = function() {
        this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, E = /^[#\/]|\s+$/g, F = /^\/+|\/+$/g, G = /msie [\w.]+/, H = /\/$/, I = /#.*$/;
    D.started = !1, c.extend(D.prototype, h, {interval: 50,atRoot: function() {
        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
    },getHash: function(a) {
        var b = (a || this).location.href.match(/#(.*)$/);
        return b ? b[1] : ""
    },getFragment: function(a, b) {
        if (null == a)
            if (this._hasPushState || !this._wantsHashChange || b) {
                a = decodeURI(this.location.pathname + this.location.search);
                var c = this.root.replace(H, "");
                a.indexOf(c) || (a = a.slice(c.length))
            } else
                a = this.getHash();
        return a.replace(E, "")
    },start: function(a) {
        if (D.started)
            throw new Error("Backbone.history has already been started");
        D.started = !0, this.options = c.extend({root: "/"}, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
        var d = this.getFragment(), e = document.documentMode, f = G.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
        if (this.root = ("/" + this.root + "/").replace(F, "/"), f && this._wantsHashChange) {
            var g = b.$('<iframe src="javascript:0" tabindex="-1">');
            this.iframe = g.hide().appendTo("body")[0].contentWindow, this.navigate(d)
        }
        this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = d;
        var h = this.location;
        if (this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot())
                return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
            this._hasPushState && this.atRoot() && h.hash && (this.fragment = this.getHash().replace(E, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
        }
        return this.options.silent ? void 0 : this.loadUrl()
    },stop: function() {
        b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), D.started = !1
    },route: function(a, b) {
        this.handlers.unshift({route: a,callback: b})
    },checkUrl: function() {
        var a = this.getFragment();
        return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))), a === this.fragment ? !1 : (this.iframe && this.navigate(a), void this.loadUrl())
    },loadUrl: function(a) {
        return a = this.fragment = this.getFragment(a), c.any(this.handlers, function(b) {
            return b.route.test(a) ? (b.callback(a), !0) : void 0
        })
    },navigate: function(a, b) {
        if (!D.started)
            return !1;
        b && b !== !0 || (b = {trigger: !!b});
        var c = this.root + (a = this.getFragment(a || ""));
        if (a = a.replace(I, ""), this.fragment !== a) {
            if (this.fragment = a, "" === a && "/" !== c && (c = c.slice(0, -1)), this._hasPushState)
                this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
            else {
                if (!this._wantsHashChange)
                    return this.location.assign(c);
                this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
            }
            return b.trigger ? this.loadUrl(a) : void 0
        }
    },_updateHash: function(a, b, c) {
        if (c) {
            var d = a.href.replace(/(javascript:|#).*$/, "");
            a.replace(d + "#" + b)
        } else
            a.hash = "#" + b
    }}), b.history = new D;
    var J = function(a, b) {
        var d, e = this;
        d = a && c.has(a, "constructor") ? a.constructor : function() {
            return e.apply(this, arguments)
        }, c.extend(d, e, b);
        var f = function() {
            this.constructor = d
        };
        return f.prototype = e.prototype, d.prototype = new f, a && c.extend(d.prototype, a), d.__super__ = e.prototype, d
    };
    m.extend = o.extend = y.extend = t.extend = D.extend = J;
    var K = function() {
        throw new Error('A "url" property or function must be specified')
    }, L = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b), a.trigger("error", a, d, b)
        }
    };
    return b
}), function(a) {
    "function" == typeof define && define.amd ? define("jquery.mousewheel", ["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {version: "3.1.12",setup: function() {
        if (this.addEventListener)
            for (var c = h.length; c; )
                this.addEventListener(h[--c], b, !1);
        else
            this.onmousewheel = b;
        a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
    },teardown: function() {
        if (this.removeEventListener)
            for (var c = h.length; c; )
                this.removeEventListener(h[--c], b, !1);
        else
            this.onmousewheel = null;
        a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
    },getLineHeight: function(b) {
        var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
        return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
    },getPageHeight: function(b) {
        return a(b).height()
    },settings: {adjustOldDeltas: !0,normalizeOffset: !0}};
    a.fn.extend({mousewheel: function(a) {
        return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    },unmousewheel: function(a) {
        return this.unbind("mousewheel", a)
    }})
}), function(a) {
    function b(b, c) {
        this.$textarea = a(b), this.onchange = "function" == typeof c ? c : function() {
        }, this._init()
    }
    b.prototype = {_init: function() {
        var b = this;
        b.$textarea.wrap('<div class="flex-text-wrap" />').before("<div><span /><br></div>"), b.$span = b.$textarea.prev().find("span"), b.oldValue = "", b.$textarea.on("input propertychange keyup change", function(a) {
            var c = b.$textarea.val();
            c !== b.oldValue && (b.oldValue = c, b._mirror(c), b.onchange(a))
        }), a.valHooks.textarea = {get: function(a) {
            return a.value.replace(/\r?\n/g, "\r\n")
        }}, b.$textarea.trigger("change")
    },_mirror: function(a) {
        this.$span.text(a)
    }}, a.fn.flexText = function(c) {
        return this.each(function() {
            a.data(this, "flexText") || a.data(this, "flexText", new b(this, c))
        })
    }
}(jQuery), define("flexText", function() {
}), function(a, b) {
    function c(a, b, c) {
        return a.addEventListener ? void a.addEventListener(b, c, !1) : void a.attachEvent("on" + b, c)
    }
    function d(a) {
        if ("keypress" == a.type) {
            var b = String.fromCharCode(a.which);
            return a.shiftKey || (b = b.toLowerCase()), b
        }
        return y[a.which] ? y[a.which] : z[a.which] ? z[a.which] : String.fromCharCode(a.which).toLowerCase()
    }
    function e(a, b) {
        return a.sort().join(",") === b.sort().join(",")
    }
    function f(a) {
        a = a || {};
        var b, c = !1;
        for (b in E)
            a[b] ? c = !0 : E[b] = 0;
        c || (H = !1)
    }
    function g(a, b, c, d, f, g) {
        var h, i, j = [], k = c.type;
        if (!C[a])
            return [];
        for ("keyup" == k && n(a) && (b = [a]), h = 0; h < C[a].length; ++h)
            if (i = C[a][h], (d || !i.seq || E[i.seq] == i.level) && k == i.action && ("keypress" == k && !c.metaKey && !c.ctrlKey || e(b, i.modifiers))) {
                var l = !d && i.combo == f, m = d && i.seq == d && i.level == g;
                (l || m) && C[a].splice(h, 1), j.push(i)
            }
        return j
    }
    function h(a) {
        var b = [];
        return a.shiftKey && b.push("shift"), a.altKey && b.push("alt"), a.ctrlKey && b.push("ctrl"), a.metaKey && b.push("meta"), b
    }
    function i(a) {
        return a.preventDefault ? void a.preventDefault() : void (a.returnValue = !1)
    }
    function j(a) {
        return a.stopPropagation ? void a.stopPropagation() : void (a.cancelBubble = !0)
    }
    function k(a, b, c, d) {
        J.stopCallback(b, b.target || b.srcElement, c, d) || a(b, c) === !1 && (i(b), j(b))
    }
    function l(a, b, c) {
        var d, e = g(a, b, c), h = {}, i = 0, j = !1;
        for (d = 0; d < e.length; ++d)
            e[d].seq && (i = Math.max(i, e[d].level));
        for (d = 0; d < e.length; ++d)
            if (e[d].seq) {
                if (e[d].level != i)
                    continue;
                j = !0, h[e[d].seq] = 1, k(e[d].callback, c, e[d].combo, e[d].seq)
            } else
                j || k(e[d].callback, c, e[d].combo);
        var l = "keypress" == c.type && G;
        c.type != H || n(a) || l || f(h), G = j && "keydown" == c.type
    }
    function m(a) {
        "number" != typeof a.which && (a.which = a.keyCode);
        var b = d(a);
        if (b)
            return "keyup" == a.type && F === b ? void (F = !1) : void J.handleKey(b, h(a), a)
    }
    function n(a) {
        return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
    }
    function o() {
        clearTimeout(x), x = setTimeout(f, 1e3)
    }
    function p() {
        if (!w) {
            w = {};
            for (var a in y)
                a > 95 && 112 > a || y.hasOwnProperty(a) && (w[y[a]] = a)
        }
        return w
    }
    function q(a, b, c) {
        return c || (c = p()[a] ? "keydown" : "keypress"), "keypress" == c && b.length && (c = "keydown"), c
    }
    function r(a, b, c, e) {
        function g(b) {
            return function() {
                H = b, ++E[a], o()
            }
        }
        function h(b) {
            k(c, b, a), "keyup" !== e && (F = d(b)), setTimeout(f, 10)
        }
        E[a] = 0;
        for (var i = 0; i < b.length; ++i) {
            var j = i + 1 === b.length, l = j ? h : g(e || t(b[i + 1]).action);
            u(b[i], l, e, a, i)
        }
    }
    function s(a) {
        return "+" === a ? ["+"] : a.split("+")
    }
    function t(a, b) {
        var c, d, e, f = [];
        for (c = s(a), e = 0; e < c.length; ++e)
            d = c[e], B[d] && (d = B[d]), b && "keypress" != b && A[d] && (d = A[d], f.push("shift")), n(d) && f.push(d);
        return b = q(d, f, b), {key: d,modifiers: f,action: b}
    }
    function u(a, b, c, d, e) {
        D[a + ":" + c] = b, a = a.replace(/\s+/g, " ");
        var f, h = a.split(" ");
        return h.length > 1 ? void r(a, h, b, c) : (f = t(a, c), C[f.key] = C[f.key] || [], g(f.key, f.modifiers, {type: f.action}, d, a, e), void C[f.key][d ? "unshift" : "push"]({callback: b,modifiers: f.modifiers,action: f.action,seq: d,level: e,combo: a}))
    }
    function v(a, b, c) {
        for (var d = 0; d < a.length; ++d)
            u(a[d], b, c)
    }
    for (var w, x, y = {8: "backspace",9: "tab",13: "enter",16: "shift",17: "ctrl",18: "alt",20: "capslock",27: "esc",32: "space",33: "pageup",34: "pagedown",35: "end",36: "home",37: "left",38: "up",39: "right",40: "down",45: "ins",46: "del",91: "meta",93: "meta",224: "meta"}, z = {106: "*",107: "+",109: "-",110: ".",111: "/",186: ";",187: "=",188: ",",189: "-",190: ".",191: "/",192: "`",219: "[",220: "\\",221: "]",222: "'"}, A = {"~": "`","!": "1","@": "2","#": "3",$: "4","%": "5","^": "6","&": "7","*": "8","(": "9",")": "0",_: "-","+": "=",":": ";",'"': "'","<": ",",">": ".","?": "/","|": "\\"}, B = {option: "alt",command: "meta","return": "enter",escape: "esc",mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"}, C = {}, D = {}, E = {}, F = !1, G = !1, H = !1, I = 1; 20 > I; ++I)
        y[111 + I] = "f" + I;
    for (I = 0; 9 >= I; ++I)
        y[I + 96] = I;
    c(b, "keypress", m), c(b, "keydown", m), c(b, "keyup", m);
    var J = {bind: function(a, b, c) {
        return a = a instanceof Array ? a : [a], v(a, b, c), this
    },unbind: function(a, b) {
        return J.bind(a, function() {
        }, b)
    },trigger: function(a, b) {
        return D[a + ":" + b] && D[a + ":" + b]({}, a), this
    },reset: function() {
        return C = {}, D = {}, this
    },stopCallback: function(a, b) {
        return (" " + b.className + " ").indexOf(" mousetrap ") > -1 ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable
    },handleKey: l};
    a.Mousetrap = J, "function" == typeof define && define.amd && define("mousetrap", J)
}(window, document), function() {
    function a(a) {
        this.tokens = [], this.tokens.links = {}, this.options = a || h.defaults, this.rules = i.normal, this.options.gfm && (this.rules = this.options.tables ? i.tables : i.gfm)
    }
    function b(a, b) {
        if (this.options = b || h.defaults, this.links = a, this.rules = j.normal, !this.links)
            throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.rules = this.options.breaks ? j.breaks : j.gfm : this.options.pedantic && (this.rules = j.pedantic)
    }
    function c(a) {
        this.tokens = [], this.token = null, this.options = a || h.defaults
    }
    function d(a, b) {
        return a.replace(b ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    function e(a, b) {
        return a = a.source, b = b || "", function c(d, e) {
            return d ? (e = e.source || e, e = e.replace(/(^|[^\[])\^/g, "$1"), a = a.replace(d, e), c) : new RegExp(a, b)
        }
    }
    function f() {
    }
    function g(a) {
        for (var b, c, d = 1; d < arguments.length; d++) {
            b = arguments[d];
            for (c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
        }
        return a
    }
    function h(b, e, f) {
        if (f || "function" == typeof e) {
            f || (f = e, e = null), e && (e = g({}, h.defaults, e));
            var i = a.lex(i, e), j = e.highlight, k = 0, l = i.length, m = 0;
            if (!j || j.length < 3)
                return f(null, c.parse(i, e));
            for (var n = function() {
                delete e.highlight;
                var a = c.parse(i, e);
                return e.highlight = j, f(null, a)
            }; l > m; m++)
                !function(a) {
                    return "code" === a.type ? (k++, j(a.text, a.lang, function(b, c) {
                        return null == c || c === a.text ? --k || n() : (a.text = c, a.escaped = !0, void (--k || n()))
                    })) : void 0
                }(i[m])
        } else
            try {
                return e && (e = g({}, h.defaults, e)), c.parse(a.lex(b, e), e)
            } catch (o) {
                if (o.message += "\nPlease report this to https://github.com/chjj/marked.", (e || h.defaults).silent)
                    return "<p>An error occured:</p><pre>" + d(o.message + "", !0) + "</pre>";
                throw o
            }
    }
    var i = {newline: /^\n+/,code: /^( {4}[^\n]+\n*)+/,fences: f,hr: /^( *[-*_]){3,} *(?:\n+|$)/,heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable: f,lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table: f,paragraph: /^((?:[^\n]+(?=\n?)(?!hr|heading|lheading|blockquote|tag|def))+)/,text: /^[^\n]+/};
    i.bullet = /(?:[*+-]|\d+\.)/, i.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, i.item = e(i.item, "gm")(/bull/g, i.bullet)(), i.list = e(i.list)(/bull/g, i.bullet)("hr", /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(), i._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b", i.html = e(i.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, i._tag)(), i.paragraph = e(i.paragraph)("hr", i.hr)("heading", i.heading)("lheading", i.lheading)("blockquote", i.blockquote)("tag", "<" + i._tag)("def", i.def)(), i.normal = g({}, i), i.gfm = g({}, i.normal, {fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph: /^/}), i.gfm.paragraph = e(i.paragraph)("(?!", "(?!" + i.gfm.fences.source.replace("\\1", "\\2") + "|")(), i.tables = g({}, i.gfm, {nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}), a.rules = i, a.lex = function(b, c) {
        var d = new a(c);
        return d.lex(b)
    }, a.prototype.lex = function(a) {
        return a = a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(a, !0)
    }, a.prototype.token = function(a, b) {
        for (var c, d, e, f, g, h, j, k, l, a = a.replace(/^ +$/gm, ""); a; ) {
            if (e = this.rules.newline.exec(a))
                if (a = a.substring(e[0].length), this.options.keepBreaks)
                    for (var m = Math.floor(e[0].length / 2); m--; )
                        this.tokens.push({type: "paragraph",text: "&nbsp;"});
                else
                    e[0].length > 1 && this.tokens.push({type: "space"});
            if (e = this.rules.code.exec(a))
                a = a.substring(e[0].length), e = e[0].replace(/^ {4}/gm, ""), this.tokens.push({type: "code",text: this.options.pedantic ? e : e.replace(/\n+$/, "")});
            else if (e = this.rules.fences.exec(a))
                a = a.substring(e[0].length), this.tokens.push({type: "code",lang: e[2],text: e[3]});
            else if (e = this.rules.heading.exec(a))
                a = a.substring(e[0].length), this.tokens.push({type: "heading",depth: e[1].length,text: e[2]});
            else if (b && (e = this.rules.nptable.exec(a))) {
                for (a = a.substring(e[0].length), h = {type: "table",header: e[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),cells: e[3].replace(/\n$/, "").split("\n")}, k = 0; k < h.align.length; k++)
                    h.align[k] = /^ *-+: *$/.test(h.align[k]) ? "right" : /^ *:-+: *$/.test(h.align[k]) ? "center" : /^ *:-+ *$/.test(h.align[k]) ? "left" : null;
                for (k = 0; k < h.cells.length; k++)
                    h.cells[k] = h.cells[k].split(/ *\| */);
                this.tokens.push(h)
            } else if (e = this.rules.lheading.exec(a))
                a = a.substring(e[0].length), this.tokens.push({type: "heading",depth: "=" === e[2] ? 1 : 2,text: e[1]});
            else if (e = this.rules.hr.exec(a))
                a = a.substring(e[0].length), this.tokens.push({type: "hr"});
            else if (e = this.rules.blockquote.exec(a))
                a = a.substring(e[0].length), this.tokens.push({type: "blockquote_start"}), e = e[0].replace(/^ *> ?/gm, ""), this.token(e, b), this.tokens.push({type: "blockquote_end"});
            else if (e = this.rules.list.exec(a)) {
                for (a = a.substring(e[0].length), f = e[2], this.tokens.push({type: "list_start",ordered: f.length > 1}), e = e[0].match(this.rules.item), c = !1, l = e.length, k = 0; l > k; k++)
                    h = e[k], j = h.length, h = h.replace(/^ *([*+-]|\d+\.) +/, ""), ~h.indexOf("\n ") && (j -= h.length, h = this.options.pedantic ? h.replace(/^ {1,4}/gm, "") : h.replace(new RegExp("^ {1," + j + "}", "gm"), "")), this.options.smartLists && k !== l - 1 && (g = i.bullet.exec(e[k + 1])[0], f === g || f.length > 1 && g.length > 1 || (a = e.slice(k + 1).join("\n") + a, k = l - 1)), d = c || /\n\n(?!\s*$)/.test(h), k !== l - 1 && (c = "\n" === h[h.length - 1], d || (d = c)), this.tokens.push({type: d ? "loose_item_start" : "list_item_start"}), this.token(h, !1), this.tokens.push({type: "list_item_end"});
                this.tokens.push({type: "list_end"})
            } else if (e = this.rules.html.exec(a))
                a = a.substring(e[0].length), this.tokens.push({type: this.options.sanitize ? "paragraph" : "html",pre: "pre" === e[1] || "script" === e[1],text: e[0]});
            else if (b && (e = this.rules.def.exec(a)))
                a = a.substring(e[0].length), this.tokens.links[e[1].toLowerCase()] = {href: e[2],title: e[3]};
            else if (b && (e = this.rules.table.exec(a))) {
                for (a = a.substring(e[0].length), h = {type: "table",header: e[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),cells: e[3].replace(/(?: *\| *)?\n$/, "").split("\n")}, k = 0; k < h.align.length; k++)
                    h.align[k] = /^ *-+: *$/.test(h.align[k]) ? "right" : /^ *:-+: *$/.test(h.align[k]) ? "center" : /^ *:-+ *$/.test(h.align[k]) ? "left" : null;
                for (k = 0; k < h.cells.length; k++)
                    h.cells[k] = h.cells[k].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                this.tokens.push(h)
            } else if (b && (e = this.rules.paragraph.exec(a)))
                a = a.substring(e[0].length), this.tokens.push({type: "paragraph",text: "\n" === e[1][e[1].length - 1] ? e[1].slice(0, -1) : e[1]});
            else if (e = this.rules.text.exec(a))
                a = a.substring(e[0].length), this.tokens.push({type: "text",text: e[0]});
            else if (a)
                throw new Error("Infinite loop on byte: " + a.charCodeAt(0))
        }
        return this.tokens
    };
    var j = {escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,url: f,tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link: /^!?\[(inside)\]\(href\)/,reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br: /^ {2,}\n(?!\s*$)/,del: f,text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};
    j._inside = /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/, j._href = /\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, j.link = e(j.link)("inside", j._inside)("href", j._href)(), j.reflink = e(j.reflink)("inside", j._inside)(), j.normal = g({}, j), j.pedantic = g({}, j.normal, {strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}), j.gfm = g({}, j.normal, {escape: e(j.escape)("])", "~|])")(),url: /^(https?:\/\/[^\s\uff0c\u3002\uff1a\u201c\u2018<]+[^\s\uff0c\u3002\uff1a\u201c\u2018<.,:;"')\]])/,del: /^~~(?=\S)([\s\S]*?\S)~~/,text: e(j.text)("]|", "~]|")("|", "|https?://|")()}), j.breaks = g({}, j.gfm, {br: e(j.br)("{2,}", "*")(),text: e(j.gfm.text)("{2,}", "*")()}), b.rules = j, b.output = function(a, c, d) {
        var e = new b(c, d);
        return e.output(a)
    }, b.prototype.output = function(a) {
        for (var b, c, e, f, g = ""; a; )
            if (f = this.rules.escape.exec(a))
                a = a.substring(f[0].length), g += f[1];
            else if (f = this.rules.autolink.exec(a))
                a = a.substring(f[0].length), "@" === f[2] ? (c = this.mangle(":" === f[1][6] ? f[1].substring(7) : f[1]), e = this.mangle("mailto:") + c) : (c = d(f[1]), e = c), g += '<a href="' + e + '" target="_blank">' + c + "</a>";
            else if (f = this.rules.url.exec(a))
                a = a.substring(f[0].length), c = d(f[1]), e = c, g += '<a href="' + e + '" target="_blank">' + c + "</a>";
            else if (f = this.rules.tag.exec(a))
                a = a.substring(f[0].length), g += this.options.sanitize ? d(f[0]) : f[0];
            else if (f = this.rules.link.exec(a))
                a = a.substring(f[0].length), g += this.outputLink(f, {href: f[2],title: f[3]});
            else if ((f = this.rules.reflink.exec(a)) || (f = this.rules.nolink.exec(a))) {
                if (a = a.substring(f[0].length), b = (f[2] || f[1]).replace(/\s+/g, " "), b = this.links[b.toLowerCase()], !b || !b.href) {
                    g += f[0][0], a = f[0].substring(1) + a;
                    continue
                }
                g += this.outputLink(f, b)
            } else if (f = this.rules.strong.exec(a))
                a = a.substring(f[0].length), g += "<strong>" + this.output(f[2] || f[1]) + "</strong>";
            else if (f = this.rules.em.exec(a))
                a = a.substring(f[0].length), g += "<em>" + this.output(f[2] || f[1]) + "</em>";
            else if (f = this.rules.code.exec(a))
                a = a.substring(f[0].length), g += "<code>" + d(f[2], !0) + "</code>";
            else if (f = this.rules.br.exec(a))
                a = a.substring(f[0].length), g += "<br>";
            else if (f = this.rules.del.exec(a))
                a = a.substring(f[0].length), g += "<del>" + this.output(f[1]) + "</del>";
            else if (f = this.rules.text.exec(a))
                a = a.substring(f[0].length), g += d(f[0]);
            else if (a)
                throw new Error("Infinite loop on byte: " + a.charCodeAt(0));
        return g
    }, b.prototype.outputLink = function(a, b) {
        return "!" !== a[0][0] ? '<a href="' + d(b.href) + '"' + (b.title ? ' title="' + d(b.title) + '"' : "") + ' target="_blank">' + this.output(a[1]) + "</a>" : '<img src="' + d(b.href) + '" alt="' + d(a[1]) + '"' + (b.title ? ' title="' + d(b.title) + '"' : "") + ">"
    }, b.prototype.smartypants = function(a) {
        return this.options.smartypants ? a.replace(/--/g, "—").replace(/'([^']*)'/g, "‘$1’").replace(/"([^"]*)"/g, "“$1”").replace(/\.{3}/g, "…") : a
    }, b.prototype.mangle = function(a) {
        for (var b, c = "", d = a.length, e = 0; d > e; e++)
            b = a.charCodeAt(e), Math.random() > .5 && (b = "x" + b.toString(16)), c += "&#" + b + ";";
        return c
    }, c.parse = function(a, b) {
        var d = new c(b);
        return d.parse(a)
    }, c.prototype.parse = function(a) {
        this.inline = new b(a.links, this.options), this.tokens = a.reverse();
        for (var c = ""; this.next(); )
            c += this.tok();
        return c
    }, c.prototype.next = function() {
        return this.token = this.tokens.pop()
    }, c.prototype.peek = function() {
        return this.tokens[this.tokens.length - 1] || 0
    }, c.prototype.parseText = function() {
        for (var a = this.token.text; "text" === this.peek().type; )
            a += "\n" + this.next().text;
        return this.inline.output(a)
    }, c.prototype.tok = function() {
        switch (this.token.type) {
            case "space":
                return "";
            case "hr":
                return "<hr>\n";
            case "heading":
                return "<h" + this.token.depth + ">" + this.inline.output(this.token.text) + "</h" + this.token.depth + ">\n";
            case "code":
                if (this.options.highlight) {
                    var a = this.options.highlight(this.token.text, this.token.lang);
                    null != a && a !== this.token.text && (this.token.escaped = !0, this.token.text = a)
                }
                return this.token.escaped || (this.token.text = d(this.token.text, !0)), "<pre><code" + (this.token.lang ? ' class="' + this.options.langPrefix + this.token.lang + '"' : "") + ">" + this.token.text + "</code></pre>\n";
            case "table":
                var b, c, e, f, g, h = "";
                for (h += "<thead>\n<tr>\n", c = 0; c < this.token.header.length; c++)
                    b = this.inline.output(this.token.header[c]), h += this.token.align[c] ? '<th align="' + this.token.align[c] + '">' + b + "</th>\n" : "<th>" + b + "</th>\n";
                for (h += "</tr>\n</thead>\n", h += "<tbody>\n", c = 0; c < this.token.cells.length; c++) {
                    for (e = this.token.cells[c], h += "<tr>\n", g = 0; g < e.length; g++)
                        f = this.inline.output(e[g]), h += this.token.align[g] ? '<td align="' + this.token.align[g] + '">' + f + "</td>\n" : "<td>" + f + "</td>\n";
                    h += "</tr>\n"
                }
                return h += "</tbody>\n", "<table>\n" + h + "</table>\n";
            case "blockquote_start":
                for (var h = ""; "blockquote_end" !== this.next().type; )
                    h += this.tok();
                return "<blockquote>\n" + h + "</blockquote>\n";
            case "list_start":
                for (var i = this.token.ordered ? "ol" : "ul", h = ""; "list_end" !== this.next().type; )
                    h += this.tok();
                return "<" + i + ">\n" + h + "</" + i + ">\n";
            case "list_item_start":
                for (var h = ""; "list_item_end" !== this.next().type; )
                    h += "text" === this.token.type ? this.parseText() : this.tok();
                return "<li>" + h + "</li>\n";
            case "loose_item_start":
                for (var h = ""; "list_item_end" !== this.next().type; )
                    h += this.tok();
                return "<li>" + h + "</li>\n";
            case "html":
                return this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
            case "paragraph":
                return "<p>" + this.inline.output(this.token.text) + "</p>\n";
            case "text":
                return "<p>" + this.parseText() + "</p>\n"
        }
    }, f.exec = f, h.options = h.setOptions = function(a) {
        return g(h.defaults, a), h
    }, h.defaults = {gfm: !0,tables: !0,breaks: !1,keepBreaks: !1,pedantic: !1,sanitize: !1,smartLists: !1,silent: !1,highlight: null,langPrefix: "lang-"}, h.Parser = c, h.parser = c.parse, h.Lexer = a, h.lexer = a.lex, h.InlineLexer = b, h.inlineLexer = b.output, h.parse = h, "object" == typeof exports ? module.exports = h : "function" == typeof define && define.amd ? define("markdown", [], function() {
        return h
    }) : this.marked = h
}.call(function() {
        return this || ("undefined" != typeof window ? window : global)
    }()), ~function(a, b) {
    var c = {is: function(a, b) {
        return Object.prototype.toString.call(a).slice(8, -1) === b
    },copy: function(a, b) {
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                var d = b[c];
                a[c] = this.is(d, "Object") ? this.copy({}, d) : this.is(d, "Array") ? this.copy([], d) : d
            }
        return a
    }}, d = function() {
        var c = this;
        return this.defaults = {placement: "top",status: "normal"}, this.el = b.createElement("div"), this.el.className = "essage", this.close = '<span class="close">&times;</span>', this.error = '<span class="icon icon-circle-error"></span>', this.warning = '<span class="icon icon-circle-warning"></span>', this.success = '<span class="icon icon-circle-check"></span>', this.info = '<span class="icon icon-circle-info"></span>', this.el.onclick = function(b) {
            var b = b || a.event, d = b.target || b.srcElement;
            "close" === d.className && c.hide()
        }, this.placement = "top", b.body.appendChild(this.el), this.el.top = -this._height(), this
    };
    d.prototype._height = function() {
        return this.el.offsetHeight || this.el.clientHeight
    }, d.prototype._width = function() {
        return this.el.offsetWidth || this.el.clientWidth
    }, d.prototype._class = function(a, b) {
        var c = this.el;
        if (c.classList)
            c.classList[b ? "remove" : "add"](a);
        else {
            var d = c.className, e = new RegExp("\\b" + a + "\\b", "g");
            c.className = b ? d.replace(e, "") : d.match(e) ? d : d + " " + a
        }
        return c
    }, d.prototype.set = function(a) {
        return a = "string" == typeof a ? {message: a} : a, this.config = c.copy({}, this.defaults), this.config = c.copy(this.config, a), !this.config.placement.match(/^(?:top|bottom)$/) && (this.config.placement = "top"), this.el.style["top" === this.config.placement ? "bottom" : "top"] = "auto", this.el.className = "essage", this._class("essage-" + this.config.status), this
    }, d.prototype.show = function(a, b) {
        var c, d, e = this.el, f = this.set(a);
        e.innerHTML = this.close + this[this.config.status] + " " + this.config.message;
        var g = -this._height() - 50, h = -this._width() / 2;
        return this.el.style.marginLeft = h + "px", this._timeout && clearTimeout(this._timeout), b && (d = function() {
            return setTimeout(function() {
                f.hide()
            }, b)
        }), c = setInterval(function() {
            return 20 === g ? (f._timeout = d && d(), clearInterval(c)) : void (e.style[f.config.placement] = (g += 1) + "px")
        }, 1), this
    }, d.prototype.hide = function() {
        var a, b = +this.el.style[this.config.placement].slice(0, -2), c = -this._height() - 50, d = this;
        return a = setInterval(function() {
            return b === c ? a && clearInterval(a) : void (d.el.style[d.config.placement] = (b -= 1) + "px")
        }, 1), this
    }, a.Essage = new d
}(window, document), define("essage", function() {
}), function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b() : "function" == typeof define && define.amd ? define("thenjs", [], b) : a.Thenjs = b()
}("object" == typeof window ? window : this, function() {
    function a(a, b) {
        if (b = b || 0, b >= a.length)
            return [];
        for (var c = a.length, d = Array(c - b); c-- > b; )
            d[c - b] = a[c];
        return d
    }
    function b(b, c) {
        try {
            c.apply(null, a(arguments, 2))
        } catch (d) {
            b(d)
        }
    }
    function c() {
        var a = arguments;
        u(function() {
            b.apply(null, a)
        })
    }
    function d(a) {
        return null == a ? a : "function" == typeof a.toThunk ? a.toThunk() : "function" == typeof a.then ? function(b) {
            a.then(function(a) {
                b(null, a)
            }, b)
        } : a
    }
    function e(a, b) {
        var f, g = this;
        return a instanceof e ? a : g instanceof e ? (g._success = g._each = g._eachSeries = g._parallel = g._series = null, g._finally = g._error = g._fail = g._result = g._nextThen = g._chain = null, arguments.length ? (f = i(g, b), a = d(a), void (null == a ? f() : "function" == typeof a ? c(f, a, f) : f(null, a))) : g) : new e(a, b)
    }
    function f(c) {
        var d = this, e = arguments;
        d._result !== !1 && (!d._result && d._chain && d.debug.apply(d, ["\nChain " + d._chain + ": "].concat(a(e))), d._result = !1, b(function(a) {
            h(d, a, c)
        }, g, d, e, c))
    }
    function g(b, c, d) {
        if (b._finally)
            return b._finally.apply(null, c);
        if (null != d)
            throw d;
        var e = b._success || b._each || b._eachSeries || b._parallel || b._series;
        return e ? e.apply(null, a(c, 1)) : void (b._result = c)
    }
    function h(a, b, c) {
        var d = a, f = a._error || a._fail;
        for (a._nextThen && null == c && (f = null, d = a._nextThen); !f && d; )
            f = d._fail, d = d._nextThen;
        return f ? f(b) : e.onerror ? e.onerror(b) : void (d._result = [b])
    }
    function i(a, b) {
        function c() {
            return f.apply(a, arguments)
        }
        return c._isCont = !0, b && (w.debug = "function" == typeof b ? b : q, a._chain = 1), c
    }
    function j(a, b, c) {
        var d = new e, g = i(d, c);
        return a(g, b), b ? (b._nextThen = d, b._chain && (d._chain = b._chain + 1), b._result && u(function() {
            f.apply(b, b._result)
        }), d) : d
    }
    function k(b, c) {
        return c._isCont ? c : function() {
            var d = a(arguments);
            d.unshift(b), c.apply(null, d)
        }
    }
    function l(a, b, c, d) {
        function e(e, f) {
            return c.finished ? void 0 : null != e ? (c.finished = !0, a(e)) : (b[d] = f, --c.i < 0 && a(null, b))
        }
        return e._isCont = !0, e
    }
    function m(a, b, c) {
        var d, e = [], f = {};
        if (!v(b))
            return a(r(b, "each"));
        if (f.i = d = b.length - 1, 0 > d)
            return a(null, e);
        for (var g = 0; d >= g; g++)
            c(l(a, e, f, g), b[g], g, b)
    }
    function n(a, b) {
        var c, d = [], e = {};
        if (!v(b))
            return a(r(b, "parallel"));
        if (e.i = c = b.length - 1, 0 > c)
            return a(null, d);
        for (var f = 0; c >= f; f++)
            b[f](l(a, d, e, f), f, b)
    }
    function o(a, d, e) {
        function f(l, m) {
            return null != l ? a(l) : (j[i] = m, ++i > g ? a(null, j) : (h = --k > 0 ? b : (k = s, c), void h(a, e, f, d[i], i, d)))
        }
        var g, h, i = 0, j = [], k = s;
        return f._isCont = !0, v(d) ? (g = d.length - 1, 0 > g ? a(null, j) : void e(f, d[0], 0, d)) : a(r(d, "eachSeries"))
    }
    function p(a, d) {
        function e(k, l) {
            return null != k ? a(k) : (i[h] = l, ++h > f ? a(null, i) : (g = --j > 0 ? b : (j = s, c), void g(a, d[h], e, h, d)))
        }
        var f, g, h = 0, i = [], j = s;
        return e._isCont = !0, v(d) ? (f = d.length - 1, 0 > f ? a(null, i) : void d[0](e, 0, d)) : a(r(d, "series"))
    }
    function q() {
        console.log.apply(console, arguments)
    }
    function r(a, b) {
        return new Error("The argument " + (a && a.toString()) + ' in "' + b + '" is not Array!')
    }
    var s = 100, t = Object.prototype.toString, u = "function" == typeof setImmediate ? setImmediate : function(a) {
        setTimeout(a, 0)
    }, v = Array.isArray || function(a) {
        return "[object Array]" === t.call(a)
    };
    e.defer = c, e.each = function(a, b, d) {
        return j(function(d) {
            c(d, m, d, a, b)
        }, null, d)
    }, e.eachSeries = function(a, b, d) {
        return j(function(d) {
            c(d, o, d, a, b)
        }, null, d)
    }, e.parallel = function(a, b) {
        return j(function(b) {
            c(b, n, b, a)
        }, null, b)
    }, e.series = function(a, b) {
        return j(function(b) {
            c(b, p, b, a)
        }, null, b)
    }, e.nextTick = function(b) {
        var c = a(arguments, 1);
        u(function() {
            b.apply(null, c)
        })
    }, e.onerror = function(a) {
        throw console.error("Thenjs caught error: ", a), a
    };
    var w = e.prototype;
    return w.fin = w["finally"] = function(a) {
        return j(function(b, c) {
            c._finally = k(b, a)
        }, this)
    }, w.then = function(a, b) {
        return j(function(c, d) {
            d._success = k(c, a), d._error = b && k(c, b)
        }, this)
    }, w.fail = w["catch"] = function(b) {
        return j(function(c, d) {
            d._fail = k(c, b), d._success = function() {
                c.apply(null, [null].concat(a(arguments)))
            }
        }, this)
    }, w.each = function(a, b) {
        return j(function(c, d) {
            d._each = function(d, e) {
                m(c, a || d, b || e)
            }
        }, this)
    }, w.eachSeries = function(a, b) {
        return j(function(c, d) {
            d._eachSeries = function(d, e) {
                o(c, a || d, b || e)
            }
        }, this)
    }, w.parallel = function(a) {
        return j(function(b, c) {
            c._parallel = function(c) {
                n(b, a || c)
            }
        }, this)
    }, w.series = function(a) {
        return j(function(b, c) {
            c._series = function(c) {
                p(b, a || c)
            }
        }, this)
    }, w.toThunk = function() {
        var a = this;
        return function(b) {
            a._result ? (b.apply(null, a._result), a._result = !1) : a._result !== !1 && (a._finally = a._fail = b)
        }
    }, e.NAME = "Thenjs", e.VERSION = "1.5.0", e
});
var PDFObject = function(a) {
    if (!a || !a.url)
        return !1;
    var b, c, d, e, f, g, h, i, j, k, l, m = "1.2", n = a.id || !1, o = a.width || "100%", p = a.height || "100%", q = a.pdfOpenParams;
    return d = function(a) {
        var b;
        try {
            b = new ActiveXObject(a)
        } catch (c) {
            b = null
        }
        return b
    }, e = function() {
        var a = null;
        return window.ActiveXObject && (a = d("AcroPDF.PDF"), a || (a = d("PDF.PdfCtrl")), null !== a) ? !0 : !1
    }, f = function() {
        var a, b = navigator.plugins, c = b.length, d = /Adobe Reader|Adobe PDF|Acrobat/gi;
        for (a = 0; c > a; a++)
            if (d.test(b[a].name))
                return !0;
        return !1
    }, g = function() {
        var a = navigator.mimeTypes["application/pdf"];
        return a && a.enabledPlugin
    }, h = function() {
        var a = null;
        return f() || e() ? a = "Adobe" : g() && (a = "generic"), a
    }, isIE9 = function() {
        return navigator.userAgent.indexOf("Trident/5") > -1
    }, i = function() {
        var a, b, c = document.getElementsByTagName("html");
        return c ? (a = c[0].style, b = document.body.style, a.height = "100%", a.overflow = "hidden", b.margin = "0", b.padding = "0", b.height = "100%", void (b.overflow = "hidden")) : !1
    }, j = function(a) {
        var b, c = "";
        if (!a)
            return c;
        for (b in a)
            a.hasOwnProperty(b) && (c += b + "=", c += "search" === b ? encodeURI(a[b]) : a[b], c += "&");
        return c.slice(0, c.length - 1)
    }, k = function(a) {
        var d = null;
        switch (a) {
            case "url":
                d = b;
                break;
            case "id":
                d = n;
                break;
            case "width":
                d = o;
                break;
            case "height":
                d = p;
                break;
            case "pdfOpenParams":
                d = q;
                break;
            case "pluginTypeFound":
                d = c;
                break;
            case "pdfobjectversion":
                d = m
        }
        return d
    }, l = function(a) {
        if (!c)
            return !1;
        var d = null;
        if (a) {
            if (d = a.nodeType && 1 === a.nodeType ? a : document.getElementById(a), !d)
                return !1
        } else
            d = document.body, i(), o = "100%", p = "100%";
        return isIE9() ? (d.innerHTML = '<iframe    src="' + b + '" width="' + o + '" height="' + p + '"></iframe>', d.getElementsByTagName("iframe")[0]) : (d.innerHTML = '<object    data="' + b + '" type="application/pdf" width="' + o + '" height="' + p + '"></object>', d.getElementsByTagName("object")[0])
    }, b = a.url + "#" + j(q), c = h(), this.get = function(a) {
        return k(a)
    }, this.embed = function(a) {
        return l(a)
    }, this.pdfobjectversion = m, this
};
define("pdf", function() {
}), function(a) {
    function b(a, b, c) {
        switch (arguments.length) {
            case 2:
                return null != a ? a : b;
            case 3:
                return null != a ? a : null != b ? b : c;
            default:
                throw new Error("Implement me")
        }
    }
    function c(a, b) {
        return zb.call(a, b)
    }
    function d() {
        return {empty: !1,unusedTokens: [],unusedInput: [],overflow: -2,charsLeftOver: 0,nullInput: !1,invalidMonth: null,invalidFormat: !1,userInvalidated: !1,iso: !1}
    }
    function e(a) {
        tb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
    }
    function f(a, b) {
        var c = !0;
        return m(function() {
            return c && (e(a), c = !1), b.apply(this, arguments)
        }, b)
    }
    function g(a, b) {
        qc[a] || (e(b), qc[a] = !0)
    }
    function h(a, b) {
        return function(c) {
            return p(a.call(this, c), b)
        }
    }
    function i(a, b) {
        return function(c) {
            return this.localeData().ordinal(a.call(this, c), b)
        }
    }
    function j() {
    }
    function k(a, b) {
        b !== !1 && F(a), n(this, a), this._d = new Date(+a._d)
    }
    function l(a) {
        var b = y(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = tb.localeData(), this._bubble()
    }
    function m(a, b) {
        for (var d in b)
            c(b, d) && (a[d] = b[d]);
        return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
    }
    function n(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Ib.length > 0)
            for (c in Ib)
                d = Ib[c], e = b[d], "undefined" != typeof e && (a[d] = e);
        return a
    }
    function o(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }
    function p(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b; )
            d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d
    }
    function q(a, b) {
        var c = {milliseconds: 0,months: 0};
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }
    function r(a, b) {
        var c;
        return b = K(b, a), a.isBefore(b) ? c = q(a, b) : (c = q(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }
    function s(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = tb.duration(c, d), t(this, e, a), this
        }
    }
    function t(a, b, c, d) {
        var e = b._milliseconds, f = b._days, g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && nb(a, "Date", mb(a, "Date") + f * c), g && lb(a, mb(a, "Month") + g * c), d && tb.updateOffset(a, f || g)
    }
    function u(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function v(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }
    function w(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++)
            (c && a[d] !== b[d] || !c && A(a[d]) !== A(b[d])) && g++;
        return g + f
    }
    function x(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = jc[a] || kc[b] || b
        }
        return a
    }
    function y(a) {
        var b, d, e = {};
        for (d in a)
            c(a, d) && (b = x(d), b && (e[b] = a[d]));
        return e
    }
    function z(b) {
        var c, d;
        if (0 === b.indexOf("week"))
            c = 7, d = "day";
        else {
            if (0 !== b.indexOf("month"))
                return;
            c = 12, d = "month"
        }
        tb[b] = function(e, f) {
            var g, h, i = tb._locale[b], j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                var b = tb().utc().set(d, a);
                return i.call(tb._locale, b, e || "")
            }, null != f)
                return h(f);
            for (g = 0; c > g; g++)
                j.push(h(g));
            return j
        }
    }
    function A(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }
    function B(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }
    function C(a, b, c) {
        return hb(tb([a, 11, 31 + b - c]), b, c).week
    }
    function D(a) {
        return E(a) ? 366 : 365
    }
    function E(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    function F(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[Bb] < 0 || a._a[Bb] > 11 ? Bb : a._a[Cb] < 1 || a._a[Cb] > B(a._a[Ab], a._a[Bb]) ? Cb : a._a[Db] < 0 || a._a[Db] > 24 || 24 === a._a[Db] && (0 !== a._a[Eb] || 0 !== a._a[Fb] || 0 !== a._a[Gb]) ? Db : a._a[Eb] < 0 || a._a[Eb] > 59 ? Eb : a._a[Fb] < 0 || a._a[Fb] > 59 ? Fb : a._a[Gb] < 0 || a._a[Gb] > 999 ? Gb : -1, a._pf._overflowDayOfYear && (Ab > b || b > Cb) && (b = Cb), a._pf.overflow = b)
    }
    function G(b) {
        return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid
    }
    function H(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    function I(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (e = H(a[f]).split("-"), b = e.length, c = H(a[f + 1]), c = c ? c.split("-") : null; b > 0; ) {
                if (d = J(e.slice(0, b).join("-")))
                    return d;
                if (c && c.length >= b && w(e, c, !0) >= b - 1)
                    break;
                b--
            }
            f++
        }
        return null
    }
    function J(a) {
        var b = null;
        if (!Hb[a] && Jb)
            try {
                b = tb.locale(), require("./locale/" + a), tb.locale(b)
            } catch (c) {
            }
        return Hb[a]
    }
    function K(a, b) {
        var c, d;
        return b._isUTC ? (c = b.clone(), d = (tb.isMoment(a) || v(a) ? +a : +tb(a)) - +c, c._d.setTime(+c._d + d), tb.updateOffset(c, !1), c) : tb(a).local()
    }
    function L(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function M(a) {
        var b, c, d = a.match(Nb);
        for (b = 0, c = d.length; c > b; b++)
            d[b] = pc[d[b]] ? pc[d[b]] : L(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++)
                f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }
    function N(a, b) {
        return a.isValid() ? (b = O(b, a.localeData()), lc[b] || (lc[b] = M(b)), lc[b](a)) : a.localeData().invalidDate()
    }
    function O(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Ob.lastIndex = 0; d >= 0 && Ob.test(a); )
            a = a.replace(Ob, c), Ob.lastIndex = 0, d -= 1;
        return a
    }
    function P(a, b) {
        var c, d = b._strict;
        switch (a) {
            case "Q":
                return Zb;
            case "DDDD":
                return _b;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return d ? ac : Rb;
            case "Y":
            case "G":
            case "g":
                return cc;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return d ? bc : Sb;
            case "S":
                if (d)
                    return Zb;
            case "SS":
                if (d)
                    return $b;
            case "SSS":
                if (d)
                    return _b;
            case "DDD":
                return Qb;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Ub;
            case "a":
            case "A":
                return b._locale._meridiemParse;
            case "x":
                return Xb;
            case "X":
                return Yb;
            case "Z":
            case "ZZ":
                return Vb;
            case "T":
                return Wb;
            case "SSSS":
                return Tb;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return d ? $b : Pb;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Pb;
            case "Do":
                return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
            default:
                return c = new RegExp(Y(X(a.replace("\\", "")), "i"))
        }
    }
    function Q(a) {
        a = a || "";
        var b = a.match(Vb) || [], c = b[b.length - 1] || [], d = (c + "").match(hc) || ["-", 0, 0], e = +(60 * d[1]) + A(d[2]);
        return "+" === d[0] ? -e : e
    }
    function R(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case "Q":
                null != b && (e[Bb] = 3 * (A(b) - 1));
                break;
            case "M":
            case "MM":
                null != b && (e[Bb] = A(b) - 1);
                break;
            case "MMM":
            case "MMMM":
                d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Bb] = d : c._pf.invalidMonth = b;
                break;
            case "D":
            case "DD":
                null != b && (e[Cb] = A(b));
                break;
            case "Do":
                null != b && (e[Cb] = A(parseInt(b.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != b && (c._dayOfYear = A(b));
                break;
            case "YY":
                e[Ab] = tb.parseTwoDigitYear(b);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                e[Ab] = A(b);
                break;
            case "a":
            case "A":
                c._isPm = c._locale.isPM(b);
                break;
            case "h":
            case "hh":
                c._pf.bigHour = !0;
            case "H":
            case "HH":
                e[Db] = A(b);
                break;
            case "m":
            case "mm":
                e[Eb] = A(b);
                break;
            case "s":
            case "ss":
                e[Fb] = A(b);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                e[Gb] = A(1e3 * ("0." + b));
                break;
            case "x":
                c._d = new Date(A(b));
                break;
            case "X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case "Z":
            case "ZZ":
                c._useUTC = !0, c._tzm = Q(b);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                a = a.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = A(b));
                break;
            case "gg":
            case "GG":
                c._w = c._w || {}, c._w[a] = tb.parseTwoDigitYear(b)
        }
    }
    function S(a) {
        var c, d, e, f, g, h, i;
        c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Ab], hb(tb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Ab], hb(tb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = ib(d, e, f, h, g), a._a[Ab] = i.year, a._dayOfYear = i.dayOfYear
    }
    function T(a) {
        var c, d, e, f, g = [];
        if (!a._d) {
            for (e = V(a), a._w && null == a._a[Cb] && null == a._a[Bb] && S(a), a._dayOfYear && (f = b(a._a[Ab], e[Ab]), a._dayOfYear > D(f) && (a._pf._overflowDayOfYear = !0), d = db(f, 0, a._dayOfYear), a._a[Bb] = d.getUTCMonth(), a._a[Cb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c)
                a._a[c] = g[c] = e[c];
            for (; 7 > c; c++)
                a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
            24 === a._a[Db] && 0 === a._a[Eb] && 0 === a._a[Fb] && 0 === a._a[Gb] && (a._nextDay = !0, a._a[Db] = 0), a._d = (a._useUTC ? db : cb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm), a._nextDay && (a._a[Db] = 24)
        }
    }
    function U(a) {
        var b;
        a._d || (b = y(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], T(a))
    }
    function V(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }
    function W(b) {
        if (b._f === tb.ISO_8601)
            return void $(b);
        b._a = [], b._pf.empty = !0;
        var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0;
        for (e = O(b._f, b._locale).match(Nb) || [], c = 0; c < e.length; c++)
            f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), pc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), R(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
        b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Db] <= 12 && (b._pf.bigHour = a), b._isPm && b._a[Db] < 12 && (b._a[Db] += 12), b._isPm === !1 && 12 === b._a[Db] && (b._a[Db] = 0), T(b), F(b)
    }
    function X(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        })
    }
    function Y(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function Z(a) {
        var b, c, e, f, g;
        if (0 === a._f.length)
            return a._pf.invalidFormat = !0, void (a._d = new Date(0 / 0));
        for (f = 0; f < a._f.length; f++)
            g = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], W(b), G(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
        m(a, c || b)
    }
    function $(a) {
        var b, c, d = a._i, e = dc.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = fc.length; c > b; b++)
                if (fc[b][1].exec(d)) {
                    a._f = fc[b][0] + (e[6] || " ");
                    break
                }
            for (b = 0, c = gc.length; c > b; b++)
                if (gc[b][1].exec(d)) {
                    a._f += gc[b][0];
                    break
                }
            d.match(Vb) && (a._f += "Z"), W(a)
        } else
            a._isValid = !1
    }
    function _(a) {
        $(a), a._isValid === !1 && (delete a._isValid, tb.createFromInputFallback(a))
    }
    function ab(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c)
            d.push(b(a[c], c));
        return d
    }
    function bb(b) {
        var c, d = b._i;
        d === a ? b._d = new Date : v(d) ? b._d = new Date(+d) : null !== (c = Kb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? _(b) : u(d) ? (b._a = ab(d.slice(0), function(a) {
            return parseInt(a, 10)
        }), T(b)) : "object" == typeof d ? U(b) : "number" == typeof d ? b._d = new Date(d) : tb.createFromInputFallback(b)
    }
    function cb(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }
    function db(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }
    function eb(a, b) {
        if ("string" == typeof a)
            if (isNaN(a)) {
                if (a = b.weekdaysParse(a), "number" != typeof a)
                    return null
            } else
                a = parseInt(a, 10);
        return a
    }
    function fb(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function gb(a, b, c) {
        var d = tb.duration(a).abs(), e = yb(d.as("s")), f = yb(d.as("m")), g = yb(d.as("h")), h = yb(d.as("d")), i = yb(d.as("M")), j = yb(d.as("y")), k = e < mc.s && ["s", e] || 1 === f && ["m"] || f < mc.m && ["mm", f] || 1 === g && ["h"] || g < mc.h && ["hh", g] || 1 === h && ["d"] || h < mc.d && ["dd", h] || 1 === i && ["M"] || i < mc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, fb.apply({}, k)
    }
    function hb(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = tb(a).add(f, "d"), {week: Math.ceil(d.dayOfYear() / 7),year: d.year()}
    }
    function ib(a, b, c, d, e) {
        var f, g, h = db(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {year: g > 0 ? a : a - 1,dayOfYear: g > 0 ? g : D(a - 1) + g}
    }
    function jb(b) {
        var c, d = b._i, e = b._f;
        return b._locale = b._locale || tb.localeData(b._l), null === d || e === a && "" === d ? tb.invalid({nullInput: !0}) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), tb.isMoment(d) ? new k(d, !0) : (e ? u(e) ? Z(b) : W(b) : bb(b), c = new k(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c))
    }
    function kb(a, b) {
        var c, d;
        if (1 === b.length && u(b[0]) && (b = b[0]), !b.length)
            return tb();
        for (c = b[0], d = 1; d < b.length; ++d)
            b[d][a](c) && (c = b[d]);
        return c
    }
    function lb(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), B(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }
    function mb(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }
    function nb(a, b, c) {
        return "Month" === b ? lb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }
    function ob(a, b) {
        return function(c) {
            return null != c ? (nb(this, a, c), tb.updateOffset(this, b), this) : mb(this, a)
        }
    }
    function pb(a) {
        return 400 * a / 146097
    }
    function qb(a) {
        return 146097 * a / 400
    }
    function rb(a) {
        tb.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function sb(a) {
        "undefined" == typeof ender && (ub = xb.moment, xb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", tb) : tb)
    }
    for (var tb, ub, vb, wb = "2.8.4", xb = "undefined" != typeof global ? global : this, yb = Math.round, zb = Object.prototype.hasOwnProperty, Ab = 0, Bb = 1, Cb = 2, Db = 3, Eb = 4, Fb = 5, Gb = 6, Hb = {}, Ib = [], Jb = "undefined" != typeof module && module && module.exports, Kb = /^\/?Date\((\-?\d+)/i, Lb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Mb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Nb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Ob = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Pb = /\d\d?/, Qb = /\d{1,3}/, Rb = /\d{1,4}/, Sb = /[+\-]?\d{1,6}/, Tb = /\d+/, Ub = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Vb = /Z|[\+\-]\d\d:?\d\d/gi, Wb = /T/i, Xb = /[\+\-]?\d+/, Yb = /[\+\-]?\d+(\.\d{1,3})?/, Zb = /\d/, $b = /\d\d/, _b = /\d{3}/, ac = /\d{4}/, bc = /[+-]?\d{6}/, cc = /[+-]?\d+/, dc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ec = "YYYY-MM-DDTHH:mm:ssZ", fc = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], gc = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], hc = /([\+\-]|\d\d)/gi, ic = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {Milliseconds: 1,Seconds: 1e3,Minutes: 6e4,Hours: 36e5,Days: 864e5,Months: 2592e6,Years: 31536e6}), jc = {ms: "millisecond",s: "second",m: "minute",h: "hour",d: "day",D: "date",w: "week",W: "isoWeek",M: "month",Q: "quarter",y: "year",DDD: "dayOfYear",e: "weekday",E: "isoWeekday",gg: "weekYear",GG: "isoWeekYear"}, kc = {dayofyear: "dayOfYear",isoweekday: "isoWeekday",isoweek: "isoWeek",weekyear: "weekYear",isoweekyear: "isoWeekYear"}, lc = {}, mc = {s: 45,m: 45,h: 22,d: 26,M: 11}, nc = "DDD w W M D d".split(" "), oc = "M D H h m s w W".split(" "), pc = {M: function() {
        return this.month() + 1
    },MMM: function(a) {
        return this.localeData().monthsShort(this, a)
    },MMMM: function(a) {
        return this.localeData().months(this, a)
    },D: function() {
        return this.date()
    },DDD: function() {
        return this.dayOfYear()
    },d: function() {
        return this.day()
    },dd: function(a) {
        return this.localeData().weekdaysMin(this, a)
    },ddd: function(a) {
        return this.localeData().weekdaysShort(this, a)
    },dddd: function(a) {
        return this.localeData().weekdays(this, a)
    },w: function() {
        return this.week()
    },W: function() {
        return this.isoWeek()
    },YY: function() {
        return p(this.year() % 100, 2)
    },YYYY: function() {
        return p(this.year(), 4)
    },YYYYY: function() {
        return p(this.year(), 5)
    },YYYYYY: function() {
        var a = this.year(), b = a >= 0 ? "+" : "-";
        return b + p(Math.abs(a), 6)
    },gg: function() {
        return p(this.weekYear() % 100, 2)
    },gggg: function() {
        return p(this.weekYear(), 4)
    },ggggg: function() {
        return p(this.weekYear(), 5)
    },GG: function() {
        return p(this.isoWeekYear() % 100, 2)
    },GGGG: function() {
        return p(this.isoWeekYear(), 4)
    },GGGGG: function() {
        return p(this.isoWeekYear(), 5)
    },e: function() {
        return this.weekday()
    },E: function() {
        return this.isoWeekday()
    },a: function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), !0)
    },A: function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), !1)
    },H: function() {
        return this.hours()
    },h: function() {
        return this.hours() % 12 || 12
    },m: function() {
        return this.minutes()
    },s: function() {
        return this.seconds()
    },S: function() {
        return A(this.milliseconds() / 100)
    },SS: function() {
        return p(A(this.milliseconds() / 10), 2)
    },SSS: function() {
        return p(this.milliseconds(), 3)
    },SSSS: function() {
        return p(this.milliseconds(), 3)
    },Z: function() {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + ":" + p(A(a) % 60, 2)
    },ZZ: function() {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + p(A(a) % 60, 2)
    },z: function() {
        return this.zoneAbbr()
    },zz: function() {
        return this.zoneName()
    },x: function() {
        return this.valueOf()
    },X: function() {
        return this.unix()
    },Q: function() {
        return this.quarter()
    }}, qc = {}, rc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; nc.length; )
        vb = nc.pop(), pc[vb + "o"] = i(pc[vb], vb);
    for (; oc.length; )
        vb = oc.pop(), pc[vb + vb] = h(pc[vb], 2);
    pc.DDDD = h(pc.DDD, 3), m(j.prototype, {set: function(a) {
        var b, c;
        for (c in a)
            b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    },_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months: function(a) {
        return this._months[a.month()]
    },_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort: function(a) {
        return this._monthsShort[a.month()]
    },monthsParse: function(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = tb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a))
                return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a))
                return d;
            if (!c && this._monthsParse[d].test(a))
                return d
        }
    },_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays: function(a) {
        return this._weekdays[a.day()]
    },_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort: function(a) {
        return this._weekdaysShort[a.day()]
    },_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin: function(a) {
        return this._weekdaysMin[a.day()]
    },weekdaysParse: function(a) {
        var b, c, d;
        for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
            if (this._weekdaysParse[b] || (c = tb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))
                return b
    },_longDateFormat: {LTS: "h:mm:ss A",LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D, YYYY",LLL: "MMMM D, YYYY LT",LLLL: "dddd, MMMM D, YYYY LT"},longDateFormat: function(a) {
        var b = this._longDateFormat[a];
        return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a] = b), b
    },isPM: function(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    },_meridiemParse: /[ap]\.?m?\.?/i,meridiem: function(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    },_calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},calendar: function(a, b, c) {
        var d = this._calendar[a];
        return "function" == typeof d ? d.apply(b, [c]) : d
    },_relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},relativeTime: function(a, b, c, d) {
        var e = this._relativeTime[c];
        return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    },pastFuture: function(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
    },ordinal: function(a) {
        return this._ordinal.replace("%d", a)
    },_ordinal: "%d",_ordinalParse: /\d{1,2}/,preparse: function(a) {
        return a
    },postformat: function(a) {
        return a
    },week: function(a) {
        return hb(a, this._week.dow, this._week.doy).week
    },_week: {dow: 0,doy: 6},_invalidDate: "Invalid date",invalidDate: function() {
        return this._invalidDate
    }}), tb = function(b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), jb(g)
    }, tb.suppressDeprecationWarnings = !1, tb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), tb.min = function() {
        var a = [].slice.call(arguments, 0);
        return kb("isBefore", a)
    }, tb.max = function() {
        var a = [].slice.call(arguments, 0);
        return kb("isAfter", a)
    }, tb.utc = function(b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), jb(g).utc()
    }, tb.unix = function(a) {
        return tb(1e3 * a)
    }, tb.duration = function(a, b) {
        var d, e, f, g, h = a, i = null;
        return tb.isDuration(a) ? h = {ms: a._milliseconds,d: a._days,M: a._months} : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Lb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {y: 0,d: A(i[Cb]) * d,h: A(i[Db]) * d,m: A(i[Eb]) * d,s: A(i[Fb]) * d,ms: A(i[Gb]) * d}) : (i = Mb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * d
        }, h = {y: f(i[2]),M: f(i[3]),d: f(i[4]),h: f(i[5]),m: f(i[6]),s: f(i[7]),w: f(i[8])}) : "object" == typeof h && ("from" in h || "to" in h) && (g = r(tb(h.from), tb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new l(h), tb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
    }, tb.version = wb, tb.defaultFormat = ec, tb.ISO_8601 = function() {
    }, tb.momentProperties = Ib, tb.updateOffset = function() {
    }, tb.relativeTimeThreshold = function(b, c) {
        return mc[b] === a ? !1 : c === a ? mc[b] : (mc[b] = c, !0)
    }, tb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function(a, b) {
        return tb.locale(a, b)
    }), tb.locale = function(a, b) {
        var c;
        return a && (c = "undefined" != typeof b ? tb.defineLocale(a, b) : tb.localeData(a), c && (tb.duration._locale = tb._locale = c)), tb._locale._abbr
    }, tb.defineLocale = function(a, b) {
        return null !== b ? (b.abbr = a, Hb[a] || (Hb[a] = new j), Hb[a].set(b), tb.locale(a), Hb[a]) : (delete Hb[a], null)
    }, tb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function(a) {
        return tb.localeData(a)
    }), tb.localeData = function(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)
            return tb._locale;
        if (!u(a)) {
            if (b = J(a))
                return b;
            a = [a]
        }
        return I(a)
    }, tb.isMoment = function(a) {
        return a instanceof k || null != a && c(a, "_isAMomentObject")
    }, tb.isDuration = function(a) {
        return a instanceof l
    };
    for (vb = rc.length - 1; vb >= 0; --vb)
        z(rc[vb]);
    tb.normalizeUnits = function(a) {
        return x(a)
    }, tb.invalid = function(a) {
        var b = tb.utc(0 / 0);
        return null != a ? m(b._pf, a) : b._pf.userInvalidated = !0, b
    }, tb.parseZone = function() {
        return tb.apply(null, arguments).parseZone()
    }, tb.parseTwoDigitYear = function(a) {
        return A(a) + (A(a) > 68 ? 1900 : 2e3)
    }, m(tb.fn = k.prototype, {clone: function() {
        return tb(this)
    },valueOf: function() {
        return +this._d + 6e4 * (this._offset || 0)
    },unix: function() {
        return Math.floor(+this / 1e3)
    },toString: function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    },toDate: function() {
        return this._offset ? new Date(+this) : this._d
    },toISOString: function() {
        var a = tb(this).utc();
        return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : N(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    },toArray: function() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
    },isValid: function() {
        return G(this)
    },isDSTShifted: function() {
        return this._a ? this.isValid() && w(this._a, (this._isUTC ? tb.utc(this._a) : tb(this._a)).toArray()) > 0 : !1
    },parsingFlags: function() {
        return m({}, this._pf)
    },invalidAt: function() {
        return this._pf.overflow
    },utc: function(a) {
        return this.zone(0, a)
    },local: function(a) {
        return this._isUTC && (this.zone(0, a), this._isUTC = !1, a && this.add(this._dateTzOffset(), "m")), this
    },format: function(a) {
        var b = N(this, a || tb.defaultFormat);
        return this.localeData().postformat(b)
    },add: s(1, "add"),subtract: s(-1, "subtract"),diff: function(a, b, c) {
        var d, e, f, g = K(a, this), h = 6e4 * (this.zone() - g.zone());
        return b = x(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + g.daysInMonth()), e = 12 * (this.year() - g.year()) + (this.month() - g.month()), f = this - tb(this).startOf("month") - (g - tb(g).startOf("month")), f -= 6e4 * (this.zone() - tb(this).startOf("month").zone() - (g.zone() - tb(g).startOf("month").zone())), e += f / d, "year" === b && (e /= 12)) : (d = this - g, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - h) / 864e5 : "week" === b ? (d - h) / 6048e5 : d), c ? e : o(e)
    },from: function(a, b) {
        return tb.duration({to: this,from: a}).locale(this.locale()).humanize(!b)
    },fromNow: function(a) {
        return this.from(tb(), a)
    },calendar: function(a) {
        var b = a || tb(), c = K(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
        return this.format(this.localeData().calendar(e, this, tb(b)))
    },isLeapYear: function() {
        return E(this.year())
    },isDST: function() {
        return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
    },day: function(a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = eb(a, this.localeData()), this.add(a - b, "d")) : b
    },month: ob("Month", !0),startOf: function(a) {
        switch (a = x(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    },endOf: function(b) {
        return b = x(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms")
    },isAfter: function(a, b) {
        var c;
        return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this > +a) : (c = tb.isMoment(a) ? +a : +tb(a), c < +this.clone().startOf(b))
    },isBefore: function(a, b) {
        var c;
        return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +a > +this) : (c = tb.isMoment(a) ? +a : +tb(a), +this.clone().endOf(b) < c)
    },isSame: function(a, b) {
        var c;
        return b = x(b || "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this === +a) : (c = +tb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
    },min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(a) {
        return a = tb.apply(null, arguments), this > a ? this : a
    }),max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(a) {
        return a = tb.apply(null, arguments), a > this ? this : a
    }),zone: function(a, b) {
        var c, d = this._offset || 0;
        return null == a ? this._isUTC ? d : this._dateTzOffset() : ("string" == typeof a && (a = Q(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateTzOffset()), this._offset = a, this._isUTC = !0, null != c && this.subtract(c, "m"), d !== a && (!b || this._changeInProgress ? t(this, tb.duration(d - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, tb.updateOffset(this, !0), this._changeInProgress = null)), this)
    },zoneAbbr: function() {
        return this._isUTC ? "UTC" : ""
    },zoneName: function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    },parseZone: function() {
        return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
    },hasAlignedHourOffset: function(a) {
        return a = a ? tb(a).zone() : 0, (this.zone() - a) % 60 === 0
    },daysInMonth: function() {
        return B(this.year(), this.month())
    },dayOfYear: function(a) {
        var b = yb((tb(this).startOf("day") - tb(this).startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    },quarter: function(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    },weekYear: function(a) {
        var b = hb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == a ? b : this.add(a - b, "y")
    },isoWeekYear: function(a) {
        var b = hb(this, 1, 4).year;
        return null == a ? b : this.add(a - b, "y")
    },week: function(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    },isoWeek: function(a) {
        var b = hb(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    },weekday: function(a) {
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    },isoWeekday: function(a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    },isoWeeksInYear: function() {
        return C(this.year(), 1, 4)
    },weeksInYear: function() {
        var a = this.localeData()._week;
        return C(this.year(), a.dow, a.doy)
    },get: function(a) {
        return a = x(a), this[a]()
    },set: function(a, b) {
        return a = x(a), "function" == typeof this[a] && this[a](b), this
    },locale: function(b) {
        var c;
        return b === a ? this._locale._abbr : (c = tb.localeData(b), null != c && (this._locale = c), this)
    },lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(b) {
        return b === a ? this.localeData() : this.locale(b)
    }),localeData: function() {
        return this._locale
    },_dateTzOffset: function() {
        return 15 * Math.round(this._d.getTimezoneOffset() / 15)
    }}), tb.fn.millisecond = tb.fn.milliseconds = ob("Milliseconds", !1), tb.fn.second = tb.fn.seconds = ob("Seconds", !1), tb.fn.minute = tb.fn.minutes = ob("Minutes", !1), tb.fn.hour = tb.fn.hours = ob("Hours", !0), tb.fn.date = ob("Date", !0), tb.fn.dates = f("dates accessor is deprecated. Use date instead.", ob("Date", !0)), tb.fn.year = ob("FullYear", !0), tb.fn.years = f("years accessor is deprecated. Use year instead.", ob("FullYear", !0)), tb.fn.days = tb.fn.day, tb.fn.months = tb.fn.month, tb.fn.weeks = tb.fn.week, tb.fn.isoWeeks = tb.fn.isoWeek, tb.fn.quarters = tb.fn.quarter, tb.fn.toJSON = tb.fn.toISOString, m(tb.duration.fn = l.prototype, {_bubble: function() {
        var a, b, c, d = this._milliseconds, e = this._days, f = this._months, g = this._data, h = 0;
        g.milliseconds = d % 1e3, a = o(d / 1e3), g.seconds = a % 60, b = o(a / 60), g.minutes = b % 60, c = o(b / 60), g.hours = c % 24, e += o(c / 24), h = o(pb(e)), e -= o(qb(h)), f += o(e / 30), e %= 30, h += o(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
    },abs: function() {
        return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
    },weeks: function() {
        return o(this.days() / 7)
    },valueOf: function() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * A(this._months / 12)
    },humanize: function(a) {
        var b = gb(this, !a, this.localeData());
        return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
    },add: function(a, b) {
        var c = tb.duration(a, b);
        return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
    },subtract: function(a, b) {
        var c = tb.duration(a, b);
        return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
    },get: function(a) {
        return a = x(a), this[a.toLowerCase() + "s"]()
    },as: function(a) {
        var b, c;
        if (a = x(a), "month" === a || "year" === a)
            return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * pb(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(qb(this._months / 12)), a) {
            case "week":
                return b / 7 + this._milliseconds / 6048e5;
            case "day":
                return b + this._milliseconds / 864e5;
            case "hour":
                return 24 * b + this._milliseconds / 36e5;
            case "minute":
                return 24 * b * 60 + this._milliseconds / 6e4;
            case "second":
                return 24 * b * 60 * 60 + this._milliseconds / 1e3;
            case "millisecond":
                return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
            default:
                throw new Error("Unknown unit " + a)
        }
    },lang: tb.fn.lang,locale: tb.fn.locale,toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
        return this.toISOString()
    }),toISOString: function() {
        var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
    },localeData: function() {
        return this._locale
    }}), tb.duration.fn.toString = tb.duration.fn.toISOString;
    for (vb in ic)
        c(ic, vb) && rb(vb.toLowerCase());
    tb.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    }, tb.duration.fn.asSeconds = function() {
        return this.as("s")
    }, tb.duration.fn.asMinutes = function() {
        return this.as("m")
    }, tb.duration.fn.asHours = function() {
        return this.as("h")
    }, tb.duration.fn.asDays = function() {
        return this.as("d")
    }, tb.duration.fn.asWeeks = function() {
        return this.as("weeks")
    }, tb.duration.fn.asMonths = function() {
        return this.as("M")
    }, tb.duration.fn.asYears = function() {
        return this.as("y")
    }, tb.locale("en", {ordinalParse: /\d{1,2}(th|st|nd|rd)/,ordinal: function(a) {
        var b = a % 10, c = 1 === A(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
        return a + c
    }}), Jb ? module.exports = tb : "function" == typeof define && define.amd ? (define("moment", ["require", "exports", "module"], function(a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (xb.moment = ub), tb
    }), sb(!0)) : sb()
}.call(this), function(a, b) {
    var c, d = {}, e = function(a, b) {
        var c, d, e;
        if ("string" == typeof a)
            return h(a);
        for (c = [], d = a.length, e = 0; d > e; e++)
            c.push(h(a[e]));
        return b.apply(null, c)
    }, f = function(a, b, c) {
        2 === arguments.length && (c = b, b = null), e(b || [], function() {
            g(a, c, arguments)
        })
    }, g = function(a, b, c) {
        var f, g = {exports: b};
        "function" == typeof b && (c.length || (c = [e, g.exports, g]), f = b.apply(null, c), void 0 !== f && (g.exports = f)), d[a] = g.exports
    }, h = function(b) {
        var c = d[b] || a[b];
        if (!c)
            throw new Error("`" + b + "` is undefined");
        return c
    }, i = function(a) {
        var b, c, e, f, g, h;
        h = function(a) {
            return a && a.charAt(0).toUpperCase() + a.substr(1)
        };
        for (b in d)
            if (c = a, d.hasOwnProperty(b)) {
                for (e = b.split("/"), g = h(e.pop()); f = h(e.shift()); )
                    c[f] = c[f] || {}, c = c[f];
                c[g] = d[b]
            }
        return a
    }, j = function(c) {
        return a.__dollar = c, i(b(a, f, e))
    };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = j() : "function" == typeof define && define.amd ? define("webuploader", ["jquery"], j) : (c = a.WebUploader, a.WebUploader = j(), a.WebUploader.noConflict = function() {
        a.WebUploader = c
    })
}(window, function(a, b, c) {
    return b("dollar-third", [], function() {
        var b = a.__dollar || a.jQuery || a.Zepto;
        if (!b)
            throw new Error("jQuery or Zepto not found!");
        return b
    }), b("dollar", ["dollar-third"], function(a) {
        return a
    }), b("promise-third", ["dollar"], function(a) {
        return {Deferred: a.Deferred,when: a.when,isPromise: function(a) {
            return a && "function" == typeof a.then
        }}
    }), b("promise", ["promise-third"], function(a) {
        return a
    }), b("base", ["dollar", "promise"], function(b, c) {
        function d(a) {
            return function() {
                return h.apply(a, arguments)
            }
        }
        function e(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }
        function f(a) {
            var b;
            return Object.create ? Object.create(a) : (b = function() {
            }, b.prototype = a, new b)
        }
        var g = function() {
        }, h = Function.call;
        return {version: "0.1.5",$: b,Deferred: c.Deferred,isPromise: c.isPromise,when: c.when,browser: function(a) {
            var b = {}, c = a.match(/WebKit\/([\d.]+)/), d = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/), e = a.match(/MSIE\s([\d\.]+)/) || a.match(/(?:trident)(?:.*rv:([\w.]+))?/i), f = a.match(/Firefox\/([\d.]+)/), g = a.match(/Safari\/([\d.]+)/), h = a.match(/OPR\/([\d.]+)/);
            return c && (b.webkit = parseFloat(c[1])), d && (b.chrome = parseFloat(d[1])), e && (b.ie = parseFloat(e[1])), f && (b.firefox = parseFloat(f[1])), g && (b.safari = parseFloat(g[1])), h && (b.opera = parseFloat(h[1])), b
        }(navigator.userAgent),os: function(a) {
            var b = {}, c = a.match(/(?:Android);?[\s\/]+([\d.]+)?/), d = a.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
            return c && (b.android = parseFloat(c[1])), d && (b.ios = parseFloat(d[1].replace(/_/g, "."))), b
        }(navigator.userAgent),inherits: function(a, c, d) {
            var e;
            return "function" == typeof c ? (e = c, c = null) : e = c && c.hasOwnProperty("constructor") ? c.constructor : function() {
                return a.apply(this, arguments)
            }, b.extend(!0, e, a, d || {}), e.__super__ = a.prototype, e.prototype = f(a.prototype), c && b.extend(!0, e.prototype, c), e
        },noop: g,bindFn: e,log: function() {
            return a.console ? e(console.log, console) : g
        }(),nextTick: function() {
            return function(a) {
                setTimeout(a, 1)
            }
        }(),slice: d([].slice),guid: function() {
            var a = 0;
            return function(b) {
                for (var c = (+new Date).toString(32), d = 0; 5 > d; d++)
                    c += Math.floor(65535 * Math.random()).toString(32);
                return (b || "wu_") + c + (a++).toString(32)
            }
        }(),formatSize: function(a, b, c) {
            var d;
            for (c = c || ["B", "K", "M", "G", "TB"]; (d = c.shift()) && a > 1024; )
                a /= 1024;
            return ("B" === d ? a : a.toFixed(b || 2)) + d
        }}
    }), b("mediator", ["base"], function(a) {
        function b(a, b, c, d) {
            return f.grep(a, function(a) {
                return !(!a || b && a.e !== b || c && a.cb !== c && a.cb._cb !== c || d && a.ctx !== d)
            })
        }
        function c(a, b, c) {
            f.each((a || "").split(h), function(a, d) {
                c(d, b)
            })
        }
        function d(a, b) {
            for (var c, d = !1, e = -1, f = a.length; ++e < f; )
                if (c = a[e], c.cb.apply(c.ctx2, b) === !1) {
                    d = !0;
                    break
                }
            return !d
        }
        var e, f = a.$, g = [].slice, h = /\s+/;
        return e = {on: function(a, b, d) {
            var e, f = this;
            return b ? (e = this._events || (this._events = []), c(a, b, function(a, b) {
                var c = {e: a};
                c.cb = b, c.ctx = d, c.ctx2 = d || f, c.id = e.length, e.push(c)
            }), this) : this
        },once: function(a, b, d) {
            var e = this;
            return b ? (c(a, b, function(a, b) {
                var c = function() {
                    return e.off(a, c), b.apply(d || e, arguments)
                };
                c._cb = b, e.on(a, c, d)
            }), e) : e
        },off: function(a, d, e) {
            var g = this._events;
            return g ? a || d || e ? (c(a, d, function(a, c) {
                f.each(b(g, a, c, e), function() {
                    delete g[this.id]
                })
            }), this) : (this._events = [], this) : this
        },trigger: function(a) {
            var c, e, f;
            return this._events && a ? (c = g.call(arguments, 1), e = b(this._events, a), f = b(this._events, "all"), d(e, c) && d(f, arguments)) : this
        }}, f.extend({installTo: function(a) {
            return f.extend(a, e)
        }}, e)
    }), b("uploader", ["base", "mediator"], function(a, b) {
        function c(a) {
            this.options = d.extend(!0, {}, c.options, a), this._init(this.options)
        }
        var d = a.$;
        return c.options = {}, b.installTo(c.prototype), d.each({upload: "start-upload",stop: "stop-upload",getFile: "get-file",getFiles: "get-files",addFile: "add-file",addFiles: "add-file",sort: "sort-files",removeFile: "remove-file",cancelFile: "cancel-file",skipFile: "skip-file",retry: "retry",isInProgress: "is-in-progress",makeThumb: "make-thumb",md5File: "md5-file",getDimension: "get-dimension",addButton: "add-btn",predictRuntimeType: "predict-runtime-type",refresh: "refresh",disable: "disable",enable: "enable",reset: "reset"}, function(a, b) {
            c.prototype[a] = function() {
                return this.request(b, arguments)
            }
        }), d.extend(c.prototype, {state: "pending",_init: function(a) {
            var b = this;
            b.request("init", a, function() {
                b.state = "ready", b.trigger("ready")
            })
        },option: function(a, b) {
            var c = this.options;
            return arguments.length > 1 ? void (d.isPlainObject(b) && d.isPlainObject(c[a]) ? d.extend(c[a], b) : c[a] = b) : a ? c[a] : c
        },getStats: function() {
            var a = this.request("get-stats");
            return a ? {successNum: a.numOfSuccess,progressNum: a.numOfProgress,cancelNum: a.numOfCancel,invalidNum: a.numOfInvalid,uploadFailNum: a.numOfUploadFailed,queueNum: a.numOfQueue,interruptNum: a.numofInterrupt} : {}
        },trigger: function(a) {
            var c = [].slice.call(arguments, 1), e = this.options, f = "on" + a.substring(0, 1).toUpperCase() + a.substring(1);
            return b.trigger.apply(this, arguments) === !1 || d.isFunction(e[f]) && e[f].apply(this, c) === !1 || d.isFunction(this[f]) && this[f].apply(this, c) === !1 || b.trigger.apply(b, [this, a].concat(c)) === !1 ? !1 : !0
        },destroy: function() {
            this.request("destroy", arguments), this.off()
        },request: a.noop}), a.create = c.create = function(a) {
            return new c(a)
        }, a.Uploader = c, c
    }), b("runtime/runtime", ["base", "mediator"], function(a, b) {
        function c(b) {
            this.options = d.extend({container: document.body}, b), this.uid = a.guid("rt_")
        }
        var d = a.$, e = {}, f = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return b;
            return null
        };
        return d.extend(c.prototype, {getContainer: function() {
            var a, b, c = this.options;
            return this._container ? this._container : (a = d(c.container || document.body), b = d(document.createElement("div")), b.attr("id", "rt_" + this.uid), b.css({position: "absolute",top: "0px",left: "0px",width: "100%",height: "100%",overflow: "hidden"}), a.append(b), a.addClass("webuploader-container"), this._container = b, this._parent = a, b)
        },init: a.noop,exec: a.noop,destroy: function() {
            this._container && this._container.remove(), this._parent && this._parent.removeClass("webuploader-container"), this.off()
        }}), c.orders = "html5,flash", c.addRuntime = function(a, b) {
            e[a] = b
        }, c.hasRuntime = function(a) {
            return !!(a ? e[a] : f(e))
        }, c.create = function(a, b) {
            var g, h;
            if (b = b || c.orders, d.each(b.split(/\s*,\s*/g), function() {
                return e[this] ? (g = this, !1) : void 0
            }), g = g || f(e), !g)
                throw new Error("Runtime Error");
            return h = new e[g](a)
        }, b.installTo(c.prototype), c
    }), b("runtime/client", ["base", "mediator", "runtime/runtime"], function(a, b, c) {
        function d(b, d) {
            var f, g = a.Deferred();
            this.uid = a.guid("client_"), this.runtimeReady = function(a) {
                return g.done(a)
            }, this.connectRuntime = function(b, h) {
                if (f)
                    throw new Error("already connected!");
                return g.done(h), "string" == typeof b && e.get(b) && (f = e.get(b)), f = f || e.get(null, d), f ? (a.$.extend(f.options, b), f.__promise.then(g.resolve), f.__client++) : (f = c.create(b, b.runtimeOrder), f.__promise = g.promise(), f.once("ready", g.resolve), f.init(), e.add(f), f.__client = 1), d && (f.__standalone = d), f
            }, this.getRuntime = function() {
                return f
            }, this.disconnectRuntime = function() {
                f && (f.__client--, f.__client <= 0 && (e.remove(f), delete f.__promise, f.destroy()), f = null)
            }, this.exec = function() {
                if (f) {
                    var c = a.slice(arguments);
                    return b && c.unshift(b), f.exec.apply(this, c)
                }
            }, this.getRuid = function() {
                return f && f.uid
            }, this.destroy = function(a) {
                return function() {
                    a && a.apply(this, arguments), this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime()
                }
            }(this.destroy)
        }
        var e;
        return e = function() {
            var a = {};
            return {add: function(b) {
                a[b.uid] = b
            },get: function(b, c) {
                var d;
                if (b)
                    return a[b];
                for (d in a)
                    if (!c || !a[d].__standalone)
                        return a[d];
                return null
            },remove: function(b) {
                delete a[b.uid]
            }}
        }(), b.installTo(d.prototype), d
    }), b("lib/dnd", ["base", "mediator", "runtime/client"], function(a, b, c) {
        function d(a) {
            a = this.options = e.extend({}, d.options, a), a.container = e(a.container), a.container.length && c.call(this, "DragAndDrop")
        }
        var e = a.$;
        return d.options = {accept: null,disableGlobalDnd: !1}, a.inherits(c, {constructor: d,init: function() {
            var a = this;
            a.connectRuntime(a.options, function() {
                a.exec("init"), a.trigger("ready")
            })
        }}), b.installTo(d.prototype), d
    }), b("widgets/widget", ["base", "uploader"], function(a, b) {
        function c(a) {
            if (!a)
                return !1;
            var b = a.length, c = e.type(a);
            return 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && "string" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }
        function d(a) {
            this.owner = a, this.options = a.options
        }
        var e = a.$, f = b.prototype._init, g = b.prototype.destroy, h = {}, i = [];
        return e.extend(d.prototype, {init: a.noop,invoke: function(a, b) {
            var c = this.responseMap;
            return c && a in c && c[a] in this && e.isFunction(this[c[a]]) ? this[c[a]].apply(this, b) : h
        },request: function() {
            return this.owner.request.apply(this.owner, arguments)
        }}), e.extend(b.prototype, {_init: function() {
            var a = this, b = a._widgets = [], c = a.options.disableWidgets || "";
            return e.each(i, function(d, e) {
                (!c || !~c.indexOf(e._name)) && b.push(new e(a))
            }), f.apply(a, arguments)
        },request: function(b, d, e) {
            var f, g, i, j, k = 0, l = this._widgets, m = l && l.length, n = [], o = [];
            for (d = c(d) ? d : [d]; m > k; k++)
                f = l[k], g = f.invoke(b, d), g !== h && (a.isPromise(g) ? o.push(g) : n.push(g));
            return e || o.length ? (i = a.when.apply(a, o), j = i.pipe ? "pipe" : "then", i[j](function() {
                var b = a.Deferred(), c = arguments;
                return 1 === c.length && (c = c[0]), setTimeout(function() {
                    b.resolve(c)
                }, 1), b.promise()
            })[e ? j : "done"](e || a.noop)) : n[0]
        },destroy: function() {
            g.apply(this, arguments), this._widgets = null
        }}), b.register = d.register = function(b, c) {
            var f, g = {init: "init",destroy: "destroy",name: "anonymous"};
            return 1 === arguments.length ? (c = b, e.each(c, function(a) {
                return "_" === a[0] || "name" === a ? void ("name" === a && (g.name = c.name)) : void (g[a.replace(/[A-Z]/g, "-$&").toLowerCase()] = a)
            })) : g = e.extend(g, b), c.responseMap = g, f = a.inherits(d, c), f._name = g.name, i.push(f), f
        }, b.unRegister = d.unRegister = function(a) {
            if (a && "anonymous" !== a)
                for (var b = i.length; b--; )
                    i[b]._name === a && i.splice(b, 1)
        }, d
    }), b("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"], function(a, b, c) {
        var d = a.$;
        return b.options.dnd = "", b.register({name: "dnd",init: function(b) {
            if (b.dnd && "html5" === this.request("predict-runtime-type")) {
                var e, f = this, g = a.Deferred(), h = d.extend({}, {disableGlobalDnd: b.disableGlobalDnd,container: b.dnd,accept: b.accept});
                return this.dnd = e = new c(h), e.once("ready", g.resolve), e.on("drop", function(a) {
                    f.request("add-file", [a])
                }), e.on("accept", function(a) {
                    return f.owner.trigger("dndAccept", a)
                }), e.init(), g.promise()
            }
        },destroy: function() {
            this.dnd && this.dnd.destroy()
        }})
    }), b("lib/filepaste", ["base", "mediator", "runtime/client"], function(a, b, c) {
        function d(a) {
            a = this.options = e.extend({}, a), a.container = e(a.container || document.body), c.call(this, "FilePaste")
        }
        var e = a.$;
        return a.inherits(c, {constructor: d,init: function() {
            var a = this;
            a.connectRuntime(a.options, function() {
                a.exec("init"), a.trigger("ready")
            })
        }}), b.installTo(d.prototype), d
    }), b("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"], function(a, b, c) {
        var d = a.$;
        return b.register({name: "paste",init: function(b) {
            if (b.paste && "html5" === this.request("predict-runtime-type")) {
                var e, f = this, g = a.Deferred(), h = d.extend({}, {container: b.paste,accept: b.accept});
                return this.paste = e = new c(h), e.once("ready", g.resolve), e.on("paste", function(a) {
                    f.owner.request("add-file", [a])
                }), e.init(), g.promise()
            }
        },destroy: function() {
            this.paste && this.paste.destroy()
        }})
    }), b("lib/blob", ["base", "runtime/client"], function(a, b) {
        function c(a, c) {
            var d = this;
            d.source = c, d.ruid = a, this.size = c.size || 0, this.type = !c.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? "image/" + ("jpg" === this.ext ? "jpeg" : this.ext) : c.type || "application/octet-stream", b.call(d, "Blob"), this.uid = c.uid || this.uid, a && d.connectRuntime(a)
        }
        return a.inherits(b, {constructor: c,slice: function(a, b) {
            return this.exec("slice", a, b)
        },getSource: function() {
            return this.source
        }}), c
    }), b("lib/file", ["base", "lib/blob"], function(a, b) {
        function c(a, c) {
            var f;
            this.name = c.name || "untitled" + d++, f = e.exec(c.name) ? RegExp.$1.toLowerCase() : "", !f && c.type && (f = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(c.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + f), this.ext = f, this.lastModifiedDate = c.lastModifiedDate || (new Date).toLocaleString(), b.apply(this, arguments)
        }
        var d = 1, e = /\.([^.]+)$/;
        return a.inherits(b, c)
    }), b("lib/filepicker", ["base", "runtime/client", "lib/file"], function(b, c, d) {
        function e(a) {
            if (a = this.options = f.extend({}, e.options, a), a.container = f(a.id), !a.container.length)
                throw new Error("按钮指定错误");
            a.innerHTML = a.innerHTML || a.label || a.container.html() || "", a.button = f(a.button || document.createElement("div")), a.button.html(a.innerHTML), a.container.html(a.button), c.call(this, "FilePicker", !0)
        }
        var f = b.$;
        return e.options = {button: null,container: null,label: null,innerHTML: null,multiple: !0,accept: null,name: "file"}, b.inherits(c, {constructor: e,init: function() {
            var c = this, e = c.options, g = e.button;
            g.addClass("webuploader-pick"), c.on("all", function(a) {
                var b;
                switch (a) {
                    case "mouseenter":
                        g.addClass("webuploader-pick-hover");
                        break;
                    case "mouseleave":
                        g.removeClass("webuploader-pick-hover");
                        break;
                    case "change":
                        b = c.exec("getFiles"), c.trigger("select", f.map(b, function(a) {
                            return a = new d(c.getRuid(), a), a._refer = e.container, a
                        }), e.container)
                }
            }), c.connectRuntime(e, function() {
                c.refresh(), c.exec("init", e), c.trigger("ready")
            }), this._resizeHandler = b.bindFn(this.refresh, this), f(a).on("resize", this._resizeHandler)
        },refresh: function() {
            var a = this.getRuntime().getContainer(), b = this.options.button, c = b.outerWidth ? b.outerWidth() : b.width(), d = b.outerHeight ? b.outerHeight() : b.height(), e = b.offset();
            c && d && a.css({bottom: "auto",right: "auto",width: c + "px",height: d + "px"}).offset(e)
        },enable: function() {
            var a = this.options.button;
            a.removeClass("webuploader-pick-disable"), this.refresh()
        },disable: function() {
            var a = this.options.button;
            this.getRuntime().getContainer().css({top: "-99999px"}), a.addClass("webuploader-pick-disable")
        },destroy: function() {
            var b = this.options.button;
            f(a).off("resize", this._resizeHandler), b.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")
        }}), e
    }), b("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"], function(a, b, c) {
        var d = a.$;
        return d.extend(b.options, {pick: null,accept: null}), b.register({name: "picker",init: function(a) {
            return this.pickers = [], a.pick && this.addBtn(a.pick)
        },refresh: function() {
            d.each(this.pickers, function() {
                this.refresh()
            })
        },addBtn: function(b) {
            var e = this, f = e.options, g = f.accept, h = [];
            if (b)
                return d.isPlainObject(b) || (b = {id: b}), d(b.id).each(function() {
                    var i, j, k;
                    k = a.Deferred(), i = d.extend({}, b, {accept: d.isPlainObject(g) ? [g] : g,swf: f.swf,runtimeOrder: f.runtimeOrder,id: this}), j = new c(i), j.once("ready", k.resolve), j.on("select", function(a) {
                        e.owner.request("add-file", [a])
                    }), j.init(), e.pickers.push(j), h.push(k.promise())
                }), a.when.apply(a, h)
        },disable: function() {
            d.each(this.pickers, function() {
                this.disable()
            })
        },enable: function() {
            d.each(this.pickers, function() {
                this.enable()
            })
        },destroy: function() {
            d.each(this.pickers, function() {
                this.destroy()
            }), this.pickers = null
        }})
    }), b("lib/image", ["base", "runtime/client", "lib/blob"], function(a, b, c) {
        function d(a) {
            this.options = e.extend({}, d.options, a), b.call(this, "Image"), this.on("load", function() {
                this._info = this.exec("info"), this._meta = this.exec("meta")
            })
        }
        var e = a.$;
        return d.options = {quality: 90,crop: !1,preserveHeaders: !1,allowMagnify: !1}, a.inherits(b, {constructor: d,info: function(a) {
            return a ? (this._info = a, this) : this._info
        },meta: function(a) {
            return a ? (this._meta = a, this) : this._meta
        },loadFromBlob: function(a) {
            var b = this, c = a.getRuid();
            this.connectRuntime(c, function() {
                b.exec("init", b.options), b.exec("loadFromBlob", a)
            })
        },resize: function() {
            var b = a.slice(arguments);
            return this.exec.apply(this, ["resize"].concat(b))
        },crop: function() {
            var b = a.slice(arguments);
            return this.exec.apply(this, ["crop"].concat(b))
        },getAsDataUrl: function(a) {
            return this.exec("getAsDataUrl", a)
        },getAsBlob: function(a) {
            var b = this.exec("getAsBlob", a);
            return new c(this.getRuid(), b)
        }}), d
    }), b("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"], function(a, b, c) {
        var d, e = a.$;
        return d = function(a) {
            var b = 0, c = [], d = function() {
                for (var d; c.length && a > b; )
                    d = c.shift(), b += d[0], d[1]()
            };
            return function(a, e, f) {
                c.push([e, f]), a.once("destroy", function() {
                    b -= e, setTimeout(d, 1)
                }), setTimeout(d, 1)
            }
        }(5242880), e.extend(b.options, {thumb: {width: 110,height: 110,quality: 70,allowMagnify: !0,crop: !0,preserveHeaders: !1,type: "image/jpeg"},compress: {width: 1600,height: 1600,quality: 90,allowMagnify: !1,crop: !1,preserveHeaders: !0}}), b.register({name: "image",makeThumb: function(a, b, f, g) {
            var h, i;
            return a = this.request("get-file", a), a.type.match(/^image/) ? (h = e.extend({}, this.options.thumb), e.isPlainObject(f) && (h = e.extend(h, f), f = null), f = f || h.width, g = g || h.height, i = new c(h), i.once("load", function() {
                a._info = a._info || i.info(), a._meta = a._meta || i.meta(), 1 >= f && f > 0 && (f = a._info.width * f), 1 >= g && g > 0 && (g = a._info.height * g), i.resize(f, g)
            }), i.once("complete", function() {
                b(!1, i.getAsDataUrl(h.type)), i.destroy()
            }), i.once("error", function(a) {
                b(a || !0), i.destroy()
            }), void d(i, a.source.size, function() {
                a._info && i.info(a._info), a._meta && i.meta(a._meta), i.loadFromBlob(a.source)
            })) : void b(!0)
        },beforeSendFile: function(b) {
            var d, f, g = this.options.compress || this.options.resize, h = g && g.compressSize || 0, i = g && g.noCompressIfLarger || !1;
            return b = this.request("get-file", b), !g || !~"image/jpeg,image/jpg".indexOf(b.type) || b.size < h || b._compressed ? void 0 : (g = e.extend({}, g), f = a.Deferred(), d = new c(g), f.always(function() {
                d.destroy(), d = null
            }), d.once("error", f.reject), d.once("load", function() {
                var a = g.width, c = g.height;
                b._info = b._info || d.info(), b._meta = b._meta || d.meta(), 1 >= a && a > 0 && (a = b._info.width * a), 1 >= c && c > 0 && (c = b._info.height * c), d.resize(a, c)
            }), d.once("complete", function() {
                var a, c;
                try {
                    a = d.getAsBlob(g.type), c = b.size, (!i || a.size < c) && (b.source = a, b.size = a.size, b.trigger("resize", a.size, c)), b._compressed = !0, f.resolve()
                } catch (e) {
                    f.resolve()
                }
            }), b._info && d.info(b._info), b._meta && d.meta(b._meta), d.loadFromBlob(b.source), f.promise())
        }})
    }), b("file", ["base", "mediator"], function(a, b) {
        function c() {
            return f + g++
        }
        function d(a) {
            this.name = a.name || "Untitled", this.size = a.size || 0, this.type = a.type || "application/octet-stream", this.lastModifiedDate = a.lastModifiedDate || 1 * new Date, this.id = c(), this.ext = h.exec(this.name) ? RegExp.$1 : "", this.statusText = "", i[this.id] = d.Status.INITED, this.source = a, this.loaded = 0, this.on("error", function(a) {
                this.setStatus(d.Status.ERROR, a)
            })
        }
        var e = a.$, f = "WU_FILE_", g = 0, h = /\.([^.]+)$/, i = {};
        return e.extend(d.prototype, {setStatus: function(a, b) {
            var c = i[this.id];
            "undefined" != typeof b && (this.statusText = b), a !== c && (i[this.id] = a, this.trigger("statuschange", a, c))
        },getStatus: function() {
            return i[this.id]
        },getSource: function() {
            return this.source
        },destroy: function() {
            this.off(), delete i[this.id]
        }}), b.installTo(d.prototype), d.Status = {INITED: "inited",QUEUED: "queued",PROGRESS: "progress",ERROR: "error",COMPLETE: "complete",CANCELLED: "cancelled",INTERRUPT: "interrupt",INVALID: "invalid"}, d
    }), b("queue", ["base", "mediator", "file"], function(a, b, c) {
        function d() {
            this.stats = {numOfQueue: 0,numOfSuccess: 0,numOfCancel: 0,numOfProgress: 0,numOfUploadFailed: 0,numOfInvalid: 0,numofDeleted: 0,numofInterrupt: 0}, this._queue = [], this._map = {}
        }
        var e = a.$, f = c.Status;
        return e.extend(d.prototype, {append: function(a) {
            return this._queue.push(a), this._fileAdded(a), this
        },prepend: function(a) {
            return this._queue.unshift(a), this._fileAdded(a), this
        },getFile: function(a) {
            return "string" != typeof a ? a : this._map[a]
        },fetch: function(a) {
            var b, c, d = this._queue.length;
            for (a = a || f.QUEUED, b = 0; d > b; b++)
                if (c = this._queue[b], a === c.getStatus())
                    return c;
            return null
        },sort: function(a) {
            "function" == typeof a && this._queue.sort(a)
        },getFiles: function() {
            for (var a, b = [].slice.call(arguments, 0), c = [], d = 0, f = this._queue.length; f > d; d++)
                a = this._queue[d], (!b.length || ~e.inArray(a.getStatus(), b)) && c.push(a);
            return c
        },removeFile: function(a) {
            var b = this._map[a.id];
            b && (delete this._map[a.id], a.destroy(), this.stats.numofDeleted++)
        },_fileAdded: function(a) {
            var b = this, c = this._map[a.id];
            c || (this._map[a.id] = a, a.on("statuschange", function(a, c) {
                b._onFileStatusChange(a, c)
            }))
        },_onFileStatusChange: function(a, b) {
            var c = this.stats;
            switch (b) {
                case f.PROGRESS:
                    c.numOfProgress--;
                    break;
                case f.QUEUED:
                    c.numOfQueue--;
                    break;
                case f.ERROR:
                    c.numOfUploadFailed--;
                    break;
                case f.INVALID:
                    c.numOfInvalid--;
                    break;
                case f.INTERRUPT:
                    c.numofInterrupt--
            }
            switch (a) {
                case f.QUEUED:
                    c.numOfQueue++;
                    break;
                case f.PROGRESS:
                    c.numOfProgress++;
                    break;
                case f.ERROR:
                    c.numOfUploadFailed++;
                    break;
                case f.COMPLETE:
                    c.numOfSuccess++;
                    break;
                case f.CANCELLED:
                    c.numOfCancel++;
                    break;
                case f.INVALID:
                    c.numOfInvalid++;
                    break;
                case f.INTERRUPT:
                    c.numofInterrupt++
            }
        }}), b.installTo(d.prototype), d
    }), b("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"], function(a, b, c, d, e, f) {
        var g = a.$, h = /\.\w+$/, i = d.Status;
        return b.register({name: "queue",init: function(b) {
            var d, e, h, i, j, k, l, m = this;
            if (g.isPlainObject(b.accept) && (b.accept = [b.accept]), b.accept) {
                for (j = [], h = 0, e = b.accept.length; e > h; h++)
                    i = b.accept[h].extensions, i && j.push(i);
                j.length && (k = "\\." + j.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"), m.accept = new RegExp(k, "i")
            }
            return m.queue = new c, m.stats = m.queue.stats, "html5" === this.request("predict-runtime-type") ? (d = a.Deferred(), this.placeholder = l = new f("Placeholder"), l.connectRuntime({runtimeOrder: "html5"}, function() {
                m._ruid = l.getRuid(), d.resolve()
            }), d.promise()) : void 0
        },_wrapFile: function(a) {
            if (!(a instanceof d)) {
                if (!(a instanceof e)) {
                    if (!this._ruid)
                        throw new Error("Can't add external files.");
                    a = new e(this._ruid, a)
                }
                a = new d(a)
            }
            return a
        },acceptFile: function(a) {
            var b = !a || !a.size || this.accept && h.exec(a.name) && !this.accept.test(a.name);
            return !b
        },_addFile: function(a) {
            var b = this;
            return a = b._wrapFile(a), b.owner.trigger("beforeFileQueued", a) ? b.acceptFile(a) ? (b.queue.append(a), b.owner.trigger("fileQueued", a), a) : void b.owner.trigger("error", "Q_TYPE_DENIED", a) : void 0
        },getFile: function(a) {
            return this.queue.getFile(a)
        },addFile: function(a) {
            var b = this;
            a.length || (a = [a]), a = g.map(a, function(a) {
                return b._addFile(a)
            }), b.owner.trigger("filesQueued", a), b.options.auto && setTimeout(function() {
                b.request("start-upload")
            }, 20)
        },getStats: function() {
            return this.stats
        },removeFile: function(a, b) {
            var c = this;
            a = a.id ? a : c.queue.getFile(a), this.request("cancel-file", a), b && this.queue.removeFile(a)
        },getFiles: function() {
            return this.queue.getFiles.apply(this.queue, arguments)
        },fetchFile: function() {
            return this.queue.fetch.apply(this.queue, arguments)
        },retry: function(a, b) {
            var c, d, e, f = this;
            if (a)
                return a = a.id ? a : f.queue.getFile(a), a.setStatus(i.QUEUED), void (b || f.request("start-upload"));
            for (c = f.queue.getFiles(i.ERROR), d = 0, e = c.length; e > d; d++)
                a = c[d], a.setStatus(i.QUEUED);
            f.request("start-upload")
        },sortFiles: function() {
            return this.queue.sort.apply(this.queue, arguments)
        },reset: function() {
            this.owner.trigger("reset"), this.queue = new c, this.stats = this.queue.stats
        },destroy: function() {
            this.reset(), this.placeholder && this.placeholder.destroy()
        }})
    }), b("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"], function(a, b) {
        return a.support = function() {
            return b.hasRuntime.apply(b, arguments)
        }, a.register({name: "runtime",init: function() {
            if (!this.predictRuntimeType())
                throw Error("Runtime Error")
        },predictRuntimeType: function() {
            var a, c, d = this.options.runtimeOrder || b.orders, e = this.type;
            if (!e)
                for (d = d.split(/\s*,\s*/g), a = 0, c = d.length; c > a; a++)
                    if (b.hasRuntime(d[a])) {
                        this.type = e = d[a];
                        break
                    }
            return e
        }})
    }), b("lib/transport", ["base", "runtime/client", "mediator"], function(a, b, c) {
        function d(a) {
            var c = this;
            a = c.options = e.extend(!0, {}, d.options, a || {}), b.call(this, "Transport"), this._blob = null, this._formData = a.formData || {}, this._headers = a.headers || {}, this.on("progress", this._timeout), this.on("load error", function() {
                c.trigger("progress", 1), clearTimeout(c._timer)
            })
        }
        var e = a.$;
        return d.options = {server: "",method: "POST",withCredentials: !1,fileVal: "file",timeout: 12e4,formData: {},headers: {},sendAsBinary: !1}, e.extend(d.prototype, {appendBlob: function(a, b, c) {
            var d = this, e = d.options;
            d.getRuid() && d.disconnectRuntime(), d.connectRuntime(b.ruid, function() {
                d.exec("init")
            }), d._blob = b, e.fileVal = a || e.fileVal, e.filename = c || e.filename
        },append: function(a, b) {
            "object" == typeof a ? e.extend(this._formData, a) : this._formData[a] = b
        },setRequestHeader: function(a, b) {
            "object" == typeof a ? e.extend(this._headers, a) : this._headers[a] = b
        },send: function(a) {
            this.exec("send", a), this._timeout()
        },abort: function() {
            return clearTimeout(this._timer), this.exec("abort")
        },destroy: function() {
            this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime()
        },getResponse: function() {
            return this.exec("getResponse")
        },getResponseAsJson: function() {
            return this.exec("getResponseAsJson")
        },getStatus: function() {
            return this.exec("getStatus")
        },_timeout: function() {
            var a = this, b = a.options.timeout;
            b && (clearTimeout(a._timer), a._timer = setTimeout(function() {
                a.abort(), a.trigger("error", "timeout")
            }, b))
        }}), c.installTo(d.prototype), d
    }), b("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"], function(a, b, c, d) {
        function e(a, b) {
            var c, d, e = [], f = a.source, g = f.size, h = b ? Math.ceil(g / b) : 1, i = 0, j = 0;
            for (d = {file: a,has: function() {
                return !!e.length
            },shift: function() {
                return e.shift()
            },unshift: function(a) {
                e.unshift(a)
            }}; h > j; )
                c = Math.min(b, g - i), e.push({file: a,start: i,end: b ? i + c : g,total: g,chunks: h,chunk: j++,cuted: d}), i += c;
            return a.blocks = e.concat(), a.remaning = e.length, d
        }
        var f = a.$, g = a.isPromise, h = c.Status;
        f.extend(b.options, {prepareNextFile: !1,chunked: !1,chunkSize: 5242880,chunkRetry: 2,threads: 3,formData: {}}), b.register({name: "upload",init: function() {
            var b = this.owner, c = this;
            this.runing = !1, this.progress = !1, b.on("startUpload", function() {
                c.progress = !0
            }).on("uploadFinished", function() {
                c.progress = !1
            }), this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this.__tick = a.bindFn(this._tick, this), b.on("uploadComplete", function(a) {
                a.blocks && f.each(a.blocks, function(a, b) {
                    b.transport && (b.transport.abort(), b.transport.destroy()), delete b.transport
                }), delete a.blocks, delete a.remaning
            })
        },reset: function() {
            this.request("stop-upload", !0), this.runing = !1, this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this._trigged = !1, this._promise = null
        },startUpload: function(b) {
            var c = this;
            if (f.each(c.request("get-files", h.INVALID), function() {
                c.request("remove-file", this)
            }), b)
                if (b = b.id ? b : c.request("get-file", b), b.getStatus() === h.INTERRUPT)
                    f.each(c.pool, function(a, c) {
                        c.file === b && c.transport && c.transport.send()
                    }), b.setStatus(h.QUEUED);
                else {
                    if (b.getStatus() === h.PROGRESS)
                        return;
                    b.setStatus(h.QUEUED)
                }
            else
                f.each(c.request("get-files", [h.INITED]), function() {
                    this.setStatus(h.QUEUED)
                });
            if (!c.runing) {
                c.runing = !0;
                var d = [];
                f.each(c.pool, function(a, b) {
                    var e = b.file;
                    e.getStatus() === h.INTERRUPT && (d.push(e), c._trigged = !1, b.transport && b.transport.send())
                });
                for (var b; b = d.shift(); )
                    b.setStatus(h.PROGRESS);
                b || f.each(c.request("get-files", h.INTERRUPT), function() {
                    this.setStatus(h.PROGRESS)
                }), c._trigged = !1, a.nextTick(c.__tick), c.owner.trigger("startUpload")
            }
        },stopUpload: function(b, c) {
            var d = this;
            if (b === !0 && (c = b, b = null), d.runing !== !1) {
                if (b) {
                    if (b = b.id ? b : d.request("get-file", b), b.getStatus() !== h.PROGRESS && b.getStatus() !== h.QUEUED)
                        return;
                    return b.setStatus(h.INTERRUPT), f.each(d.pool, function(a, c) {
                        c.file === b && (c.transport && c.transport.abort(), d._putback(c), d._popBlock(c))
                    }), a.nextTick(d.__tick)
                }
                d.runing = !1, this._promise && this._promise.file && this._promise.file.setStatus(h.INTERRUPT), c && f.each(d.pool, function(a, b) {
                    b.transport && b.transport.abort(), b.file.setStatus(h.INTERRUPT)
                }), d.owner.trigger("stopUpload")
            }
        },cancelFile: function(a) {
            a = a.id ? a : this.request("get-file", a), a.blocks && f.each(a.blocks, function(a, b) {
                var c = b.transport;
                c && (c.abort(), c.destroy(), delete b.transport)
            }), a.setStatus(h.CANCELLED), this.owner.trigger("fileDequeued", a)
        },isInProgress: function() {
            return !!this.progress
        },_getStats: function() {
            return this.request("get-stats")
        },skipFile: function(a, b) {
            a = a.id ? a : this.request("get-file", a), a.setStatus(b || h.COMPLETE), a.skipped = !0, a.blocks && f.each(a.blocks, function(a, b) {
                var c = b.transport;
                c && (c.abort(), c.destroy(), delete b.transport)
            }), this.owner.trigger("uploadSkip", a)
        },_tick: function() {
            var b, c, d = this, e = d.options;
            return d._promise ? d._promise.always(d.__tick) : void (d.pool.length < e.threads && (c = d._nextBlock()) ? (d._trigged = !1, b = function(b) {
                d._promise = null, b && b.file && d._startSend(b), a.nextTick(d.__tick)
            }, d._promise = g(c) ? c.always(b) : b(c)) : d.remaning || d._getStats().numOfQueue || d._getStats().numofInterrupt || (d.runing = !1, d._trigged || a.nextTick(function() {
                d.owner.trigger("uploadFinished")
            }), d._trigged = !0))
        },_putback: function(a) {
            var b;
            a.cuted.unshift(a), b = this.stack.indexOf(a.cuted), ~b || this.stack.unshift(a.cuted)
        },_getStack: function() {
            for (var a, b = 0; a = this.stack[b++]; ) {
                if (a.has() && a.file.getStatus() === h.PROGRESS)
                    return a;
                (!a.has() || a.file.getStatus() !== h.PROGRESS && a.file.getStatus() !== h.INTERRUPT) && this.stack.splice(--b, 1)
            }
            return null
        },_nextBlock: function() {
            var a, b, c, d, f = this, h = f.options;
            return (a = this._getStack()) ? (h.prepareNextFile && !f.pending.length && f._prepareNextFile(), a.shift()) : f.runing ? (!f.pending.length && f._getStats().numOfQueue && f._prepareNextFile(), b = f.pending.shift(), c = function(b) {
                return b ? (a = e(b, h.chunked ? h.chunkSize : 0), f.stack.push(a), a.shift()) : null
            }, g(b) ? (d = b.file, b = b[b.pipe ? "pipe" : "then"](c), b.file = d, b) : c(b)) : void 0
        },_prepareNextFile: function() {
            var a, b = this, c = b.request("fetch-file"), d = b.pending;
            c && (a = b.request("before-send-file", c, function() {
                return c.getStatus() === h.PROGRESS || c.getStatus() === h.INTERRUPT ? c : b._finishFile(c)
            }), b.owner.trigger("uploadStart", c), c.setStatus(h.PROGRESS), a.file = c, a.done(function() {
                var b = f.inArray(a, d);
                ~b && d.splice(b, 1, c)
            }), a.fail(function(a) {
                c.setStatus(h.ERROR, a), b.owner.trigger("uploadError", c, a), b.owner.trigger("uploadComplete", c)
            }), d.push(a))
        },_popBlock: function(a) {
            var b = f.inArray(a, this.pool);
            this.pool.splice(b, 1), a.file.remaning--, this.remaning--
        },_startSend: function(b) {
            var c, d = this, e = b.file;
            return e.getStatus() !== h.PROGRESS ? void (e.getStatus() === h.INTERRUPT && d._putback(b)) : (d.pool.push(b), d.remaning++, b.blob = 1 === b.chunks ? e.source : e.source.slice(b.start, b.end), c = d.request("before-send", b, function() {
                e.getStatus() === h.PROGRESS ? d._doSend(b) : (d._popBlock(b), a.nextTick(d.__tick))
            }), void c.fail(function() {
                1 === e.remaning ? d._finishFile(e).always(function() {
                    b.percentage = 1, d._popBlock(b), d.owner.trigger("uploadComplete", e), a.nextTick(d.__tick)
                }) : (b.percentage = 1, d.updateFileProgress(e), d._popBlock(b), a.nextTick(d.__tick))
            }))
        },_doSend: function(b) {
            var c, e, g = this, i = g.owner, j = g.options, k = b.file, l = new d(j), m = f.extend({}, j.formData), n = f.extend({}, j.headers);
            b.transport = l, l.on("destroy", function() {
                delete b.transport, g._popBlock(b), a.nextTick(g.__tick)
            }), l.on("progress", function(a) {
                b.percentage = a, g.updateFileProgress(k)
            }), c = function(a) {
                var c;
                return e = l.getResponseAsJson() || {}, e._raw = l.getResponse(), c = function(b) {
                    a = b
                }, i.trigger("uploadAccept", b, e, c) || (a = a || "server"), a
            }, l.on("error", function(a, d) {
                b.retried = b.retried || 0, b.chunks > 1 && ~"http,abort".indexOf(a) && b.retried < j.chunkRetry ? (b.retried++, l.send()) : (d || "server" !== a || (a = c(a)), k.setStatus(h.ERROR, a), i.trigger("uploadError", k, a), i.trigger("uploadComplete", k))
            }), l.on("load", function() {
                var a;
                return (a = c()) ? void l.trigger("error", a, !0) : void (1 === k.remaning ? g._finishFile(k, e) : l.destroy())
            }), m = f.extend(m, {id: k.id,name: k.name,type: k.type,lastModifiedDate: k.lastModifiedDate,size: k.size}), b.chunks > 1 && f.extend(m, {chunks: b.chunks,chunk: b.chunk}), i.trigger("uploadBeforeSend", b, m, n), l.appendBlob(j.fileVal, b.blob, k.name), l.append(m), l.setRequestHeader(n), l.send()
        },_finishFile: function(a, b, c) {
            var d = this.owner;
            return d.request("after-send-file", arguments, function() {
                a.setStatus(h.COMPLETE), d.trigger("uploadSuccess", a, b, c)
            }).fail(function(b) {
                a.getStatus() === h.PROGRESS && a.setStatus(h.ERROR, b), d.trigger("uploadError", a, b)
            }).always(function() {
                d.trigger("uploadComplete", a)
            })
        },updateFileProgress: function(a) {
            var b = 0, c = 0;
            a.blocks && (f.each(a.blocks, function(a, b) {
                c += (b.percentage || 0) * (b.end - b.start)
            }), b = c / a.size, this.owner.trigger("uploadProgress", a, b || 0))
        }})
    }), b("widgets/validator", ["base", "uploader", "file", "widgets/widget"], function(a, b, c) {
        var d, e = a.$, f = {};
        return d = {addValidator: function(a, b) {
            f[a] = b
        },removeValidator: function(a) {
            delete f[a]
        }}, b.register({name: "validator",init: function() {
            var b = this;
            a.nextTick(function() {
                e.each(f, function() {
                    this.call(b.owner)
                })
            })
        }}), d.addValidator("fileNumLimit", function() {
            var a = this, b = a.options, c = 0, d = parseInt(b.fileNumLimit, 10), e = !0;
            d && (a.on("beforeFileQueued", function(a) {
                return c >= d && e && (e = !1, this.trigger("error", "Q_EXCEED_NUM_LIMIT", d, a), setTimeout(function() {
                    e = !0
                }, 1)), c >= d ? !1 : !0
            }), a.on("fileQueued", function() {
                c++
            }), a.on("fileDequeued", function() {
                c--
            }), a.on("reset", function() {
                c = 0
            }))
        }), d.addValidator("fileSizeLimit", function() {
            var a = this, b = a.options, c = 0, d = parseInt(b.fileSizeLimit, 10), e = !0;
            d && (a.on("beforeFileQueued", function(a) {
                var b = c + a.size > d;
                return b && e && (e = !1, this.trigger("error", "Q_EXCEED_SIZE_LIMIT", d, a), setTimeout(function() {
                    e = !0
                }, 1)), b ? !1 : !0
            }), a.on("fileQueued", function(a) {
                c += a.size
            }), a.on("fileDequeued", function(a) {
                c -= a.size
            }), a.on("reset", function() {
                c = 0
            }))
        }), d.addValidator("fileSingleSizeLimit", function() {
            var a = this, b = a.options, d = b.fileSingleSizeLimit;
            d && a.on("beforeFileQueued", function(a) {
                return a.size > d ? (a.setStatus(c.Status.INVALID, "exceed_size"), this.trigger("error", "F_EXCEED_SIZE", d, a), !1) : void 0
            })
        }), d.addValidator("duplicate", function() {
            function a(a) {
                for (var b, c = 0, d = 0, e = a.length; e > d; d++)
                    b = a.charCodeAt(d), c = b + (c << 6) + (c << 16) - c;
                return c
            }
            var b = this, c = b.options, d = {};
            c.duplicate || (b.on("beforeFileQueued", function(b) {
                var c = b.__hash || (b.__hash = a(b.name + b.size + b.lastModifiedDate));
                return d[c] ? (this.trigger("error", "F_DUPLICATE", b), !1) : void 0
            }), b.on("fileQueued", function(a) {
                var b = a.__hash;
                b && (d[b] = !0)
            }), b.on("fileDequeued", function(a) {
                var b = a.__hash;
                b && delete d[b]
            }), b.on("reset", function() {
                d = {}
            }))
        }), d
    }), b("runtime/compbase", [], function() {
        function a(a, b) {
            this.owner = a, this.options = a.options, this.getRuntime = function() {
                return b
            }, this.getRuid = function() {
                return b.uid
            }, this.trigger = function() {
                return a.trigger.apply(a, arguments)
            }
        }
        return a
    }), b("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"], function(b, c, d) {
        function e() {
            var a = {}, d = this, e = this.destroy;
            c.apply(d, arguments), d.type = f, d.exec = function(c, e) {
                var f, h = this, i = h.uid, j = b.slice(arguments, 2);
                return g[c] && (f = a[i] = a[i] || new g[c](h, d), f[e]) ? f[e].apply(f, j) : void 0
            }, d.destroy = function() {
                return e && e.apply(this, arguments)
            }
        }
        var f = "html5", g = {};
        return b.inherits(c, {constructor: e,init: function() {
            var a = this;
            setTimeout(function() {
                a.trigger("ready")
            }, 1)
        }}), e.register = function(a, c) {
            var e = g[a] = b.inherits(d, c);
            return e
        }, a.Blob && a.FileReader && a.DataView && c.addRuntime(f, e), e
    }), b("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"], function(a, b) {
        return a.register("Blob", {slice: function(a, c) {
            var d = this.owner.source, e = d.slice || d.webkitSlice || d.mozSlice;
            return d = e.call(d, a, c), new b(this.getRuid(), d)
        }})
    }), b("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"], function(a, b, c) {
        var d = a.$, e = "webuploader-dnd-";
        return b.register("DragAndDrop", {init: function() {
            var b = this.elem = this.options.container;
            this.dragEnterHandler = a.bindFn(this._dragEnterHandler, this), this.dragOverHandler = a.bindFn(this._dragOverHandler, this), this.dragLeaveHandler = a.bindFn(this._dragLeaveHandler, this), this.dropHandler = a.bindFn(this._dropHandler, this), this.dndOver = !1, b.on("dragenter", this.dragEnterHandler), b.on("dragover", this.dragOverHandler), b.on("dragleave", this.dragLeaveHandler), b.on("drop", this.dropHandler), this.options.disableGlobalDnd && (d(document).on("dragover", this.dragOverHandler), d(document).on("drop", this.dropHandler))
        },_dragEnterHandler: function(a) {
            var b, c = this, d = c._denied || !1;
            return a = a.originalEvent || a, c.dndOver || (c.dndOver = !0, b = a.dataTransfer.items, b && b.length && (c._denied = d = !c.trigger("accept", b)), c.elem.addClass(e + "over"), c.elem[d ? "addClass" : "removeClass"](e + "denied")), a.dataTransfer.dropEffect = d ? "none" : "copy", !1
        },_dragOverHandler: function(a) {
            var b = this.elem.parent().get(0);
            return b && !d.contains(b, a.currentTarget) ? !1 : (clearTimeout(this._leaveTimer), this._dragEnterHandler.call(this, a), !1)
        },_dragLeaveHandler: function() {
            var a, b = this;
            return a = function() {
                b.dndOver = !1, b.elem.removeClass(e + "over " + e + "denied")
            }, clearTimeout(b._leaveTimer), b._leaveTimer = setTimeout(a, 100), !1
        },_dropHandler: function(a) {
            var b, f, g = this, h = g.getRuid(), i = g.elem.parent().get(0);
            if (i && !d.contains(i, a.currentTarget))
                return !1;
            a = a.originalEvent || a, b = a.dataTransfer;
            try {
                f = b.getData("text/html")
            } catch (j) {
            }
            return g.dndOver = !1, g.elem.removeClass(e + "over"), !f && b ? (g._getTansferFiles(b, function(a) {
                g.trigger("drop", d.map(a, function(a) {
                    return new c(h, a)
                }))
            }), !1) : void 0
        },_getTansferFiles: function(b, c) {
            var d, e, f, g, h, i, j, k = [], l = [];
            for (d = b.items, e = b.files, j = !(!d || !d[0].webkitGetAsEntry), h = 0, i = e.length; i > h; h++)
                f = e[h], g = d && d[h], j && g.webkitGetAsEntry().isDirectory ? l.push(this._traverseDirectoryTree(g.webkitGetAsEntry(), k)) : k.push(f);
            a.when.apply(a, l).done(function() {
                k.length && c(k)
            })
        },_traverseDirectoryTree: function(b, c) {
            var d = a.Deferred(), e = this;
            return b.isFile ? b.file(function(a) {
                c.push(a), d.resolve()
            }) : b.isDirectory && b.createReader().readEntries(function(b) {
                var f, g = b.length, h = [], i = [];
                for (f = 0; g > f; f++)
                    h.push(e._traverseDirectoryTree(b[f], i));
                a.when.apply(a, h).then(function() {
                    c.push.apply(c, i), d.resolve()
                }, d.reject)
            }), d.promise()
        },destroy: function() {
            var a = this.elem;
            a && (a.off("dragenter", this.dragEnterHandler), a.off("dragover", this.dragOverHandler), a.off("dragleave", this.dragLeaveHandler), a.off("drop", this.dropHandler), this.options.disableGlobalDnd && (d(document).off("dragover", this.dragOverHandler), d(document).off("drop", this.dropHandler)))
        }})
    }), b("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"], function(a, b, c) {
        return b.register("FilePaste", {init: function() {
            var b, c, d, e, f = this.options, g = this.elem = f.container, h = ".*";
            if (f.accept) {
                for (b = [], c = 0, d = f.accept.length; d > c; c++)
                    e = f.accept[c].mimeTypes, e && b.push(e);
                b.length && (h = b.join(","), h = h.replace(/,/g, "|").replace(/\*/g, ".*"))
            }
            this.accept = h = new RegExp(h, "i"), this.hander = a.bindFn(this._pasteHander, this), g.on("paste", this.hander)
        },_pasteHander: function(a) {
            var b, d, e, f, g, h = [], i = this.getRuid();
            for (a = a.originalEvent || a, b = a.clipboardData.items, f = 0, g = b.length; g > f; f++)
                d = b[f], "file" === d.kind && (e = d.getAsFile()) && h.push(new c(i, e));
            h.length && (a.preventDefault(), a.stopPropagation(), this.trigger("paste", h))
        },destroy: function() {
            this.elem.off("paste", this.hander)
        }})
    }), b("runtime/html5/filepicker", ["base", "runtime/html5/runtime"], function(a, b) {
        var c = a.$;
        return b.register("FilePicker", {init: function() {
            var a, b, d, e, f = this.getRuntime().getContainer(), g = this, h = g.owner, i = g.options, j = this.label = c(document.createElement("label")), k = this.input = c(document.createElement("input"));
            if (k.attr("type", "file"), k.attr("name", i.name), k.addClass("webuploader-element-invisible"), j.on("click", function() {
                k.trigger("click")
            }), j.css({opacity: 0,width: "100%",height: "100%",display: "block",cursor: "pointer",background: "#ffffff"}), i.multiple && k.attr("multiple", "multiple"), i.accept && i.accept.length > 0) {
                for (a = [], b = 0, d = i.accept.length; d > b; b++)
                    a.push(i.accept[b].mimeTypes);
                k.attr("accept", a.join(","))
            }
            f.append(k), f.append(j), e = function(a) {
                h.trigger(a.type)
            }, k.on("change", function(a) {
                var b, d = arguments.callee;
                g.files = a.target.files, b = this.cloneNode(!0), b.value = null, this.parentNode.replaceChild(b, this), k.off(), k = c(b).on("change", d).on("mouseenter mouseleave", e), h.trigger("change")
            }), j.on("mouseenter mouseleave", e)
        },getFiles: function() {
            return this.files
        },destroy: function() {
            this.input.off(), this.label.off()
        }})
    }), b("runtime/html5/util", ["base"], function(b) {
        var c = a.createObjectURL && a || a.URL && URL.revokeObjectURL && URL || a.webkitURL, d = b.noop, e = d;
        return c && (d = function() {
            return c.createObjectURL.apply(c, arguments)
        }, e = function() {
            return c.revokeObjectURL.apply(c, arguments)
        }), {createObjectURL: d,revokeObjectURL: e,dataURL2Blob: function(a) {
            var b, c, d, e, f, g;
            for (g = a.split(","), b = ~g[0].indexOf("base64") ? atob(g[1]) : decodeURIComponent(g[1]), d = new ArrayBuffer(b.length), c = new Uint8Array(d), e = 0; e < b.length; e++)
                c[e] = b.charCodeAt(e);
            return f = g[0].split(":")[1].split(";")[0], this.arrayBufferToBlob(d, f)
        },dataURL2ArrayBuffer: function(a) {
            var b, c, d, e;
            for (e = a.split(","), b = ~e[0].indexOf("base64") ? atob(e[1]) : decodeURIComponent(e[1]), c = new Uint8Array(b.length), d = 0; d < b.length; d++)
                c[d] = b.charCodeAt(d);
            return c.buffer
        },arrayBufferToBlob: function(b, c) {
            var d, e = a.BlobBuilder || a.WebKitBlobBuilder;
            return e ? (d = new e, d.append(b), d.getBlob(c)) : new Blob([b], c ? {type: c} : {})
        },canvasToDataUrl: function(a, b, c) {
            return a.toDataURL(b, c / 100)
        },parseMeta: function(a, b) {
            b(!1, {})
        },updateImageHead: function(a) {
            return a
        }}
    }), b("runtime/html5/imagemeta", ["runtime/html5/util"], function(a) {
        var b;
        return b = {parsers: {65505: []},maxMetaDataSize: 262144,parse: function(a, b) {
            var c = this, d = new FileReader;
            d.onload = function() {
                b(!1, c._parse(this.result)), d = d.onload = d.onerror = null
            }, d.onerror = function(a) {
                b(a.message), d = d.onload = d.onerror = null
            }, a = a.slice(0, c.maxMetaDataSize), d.readAsArrayBuffer(a.getSource())
        },_parse: function(a, c) {
            if (!(a.byteLength < 6)) {
                var d, e, f, g, h = new DataView(a), i = 2, j = h.byteLength - 4, k = i, l = {};
                if (65496 === h.getUint16(0)) {
                    for (; j > i && (d = h.getUint16(i), d >= 65504 && 65519 >= d || 65534 === d) && (e = h.getUint16(i + 2) + 2, !(i + e > h.byteLength)); ) {
                        if (f = b.parsers[d], !c && f)
                            for (g = 0; g < f.length; g += 1)
                                f[g].call(b, h, i, e, l);
                        i += e, k = i
                    }
                    k > 6 && (l.imageHead = a.slice ? a.slice(2, k) : new Uint8Array(a).subarray(2, k))
                }
                return l
            }
        },updateImageHead: function(a, b) {
            var c, d, e, f = this._parse(a, !0);
            return e = 2, f.imageHead && (e = 2 + f.imageHead.byteLength), d = a.slice ? a.slice(e) : new Uint8Array(a).subarray(e), c = new Uint8Array(b.byteLength + 2 + d.byteLength), c[0] = 255, c[1] = 216, c.set(new Uint8Array(b), 2), c.set(new Uint8Array(d), b.byteLength + 2), c.buffer
        }}, a.parseMeta = function() {
            return b.parse.apply(b, arguments)
        }, a.updateImageHead = function() {
            return b.updateImageHead.apply(b, arguments)
        }, b
    }), b("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"], function(a, b) {
        var c = {};
        return c.ExifMap = function() {
            return this
        }, c.ExifMap.prototype.map = {Orientation: 274}, c.ExifMap.prototype.get = function(a) {
            return this[a] || this[this.map[a]]
        }, c.exifTagTypes = {1: {getValue: function(a, b) {
            return a.getUint8(b)
        },size: 1},2: {getValue: function(a, b) {
            return String.fromCharCode(a.getUint8(b))
        },size: 1,ascii: !0},3: {getValue: function(a, b, c) {
            return a.getUint16(b, c)
        },size: 2},4: {getValue: function(a, b, c) {
            return a.getUint32(b, c)
        },size: 4},5: {getValue: function(a, b, c) {
            return a.getUint32(b, c) / a.getUint32(b + 4, c)
        },size: 8},9: {getValue: function(a, b, c) {
            return a.getInt32(b, c)
        },size: 4},10: {getValue: function(a, b, c) {
            return a.getInt32(b, c) / a.getInt32(b + 4, c)
        },size: 8}}, c.exifTagTypes[7] = c.exifTagTypes[1], c.getExifValue = function(b, d, e, f, g, h) {
            var i, j, k, l, m, n, o = c.exifTagTypes[f];
            if (!o)
                return void a.log("Invalid Exif data: Invalid tag type.");
            if (i = o.size * g, j = i > 4 ? d + b.getUint32(e + 8, h) : e + 8, j + i > b.byteLength)
                return void a.log("Invalid Exif data: Invalid data offset.");
            if (1 === g)
                return o.getValue(b, j, h);
            for (k = [], l = 0; g > l; l += 1)
                k[l] = o.getValue(b, j + l * o.size, h);
            if (o.ascii) {
                for (m = "", l = 0; l < k.length && (n = k[l], "\x00" !== n); l += 1)
                    m += n;
                return m
            }
            return k
        }, c.parseExifTag = function(a, b, d, e, f) {
            var g = a.getUint16(d, e);
            f.exif[g] = c.getExifValue(a, b, d, a.getUint16(d + 2, e), a.getUint32(d + 4, e), e)
        }, c.parseExifTags = function(b, c, d, e, f) {
            var g, h, i;
            if (d + 6 > b.byteLength)
                return void a.log("Invalid Exif data: Invalid directory offset.");
            if (g = b.getUint16(d, e), h = d + 2 + 12 * g, h + 4 > b.byteLength)
                return void a.log("Invalid Exif data: Invalid directory size.");
            for (i = 0; g > i; i += 1)
                this.parseExifTag(b, c, d + 2 + 12 * i, e, f);
            return b.getUint32(h, e)
        }, c.parseExifData = function(b, d, e, f) {
            var g, h, i = d + 10;
            if (1165519206 === b.getUint32(d + 4)) {
                if (i + 8 > b.byteLength)
                    return void a.log("Invalid Exif data: Invalid segment size.");
                if (0 !== b.getUint16(d + 8))
                    return void a.log("Invalid Exif data: Missing byte alignment offset.");
                switch (b.getUint16(i)) {
                    case 18761:
                        g = !0;
                        break;
                    case 19789:
                        g = !1;
                        break;
                    default:
                        return void a.log("Invalid Exif data: Invalid byte alignment marker.")
                }
                if (42 !== b.getUint16(i + 2, g))
                    return void a.log("Invalid Exif data: Missing TIFF marker.");
                h = b.getUint32(i + 4, g), f.exif = new c.ExifMap, h = c.parseExifTags(b, i, i + h, g, f)
            }
        }, b.parsers[65505].push(c.parseExifData), c
    }), b("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"], function(a, b, c) {
        var d = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        return b.register("Image", {modified: !1,init: function() {
            var a = this, b = new Image;
            b.onload = function() {
                a._info = {type: a.type,width: this.width,height: this.height}, a._metas || "image/jpeg" !== a.type ? a.owner.trigger("load") : c.parseMeta(a._blob, function(b, c) {
                    a._metas = c, a.owner.trigger("load")
                })
            }, b.onerror = function() {
                a.owner.trigger("error")
            }, a._img = b
        },loadFromBlob: function(a) {
            var b = this, d = b._img;
            b._blob = a, b.type = a.type, d.src = c.createObjectURL(a.getSource()), b.owner.once("load", function() {
                c.revokeObjectURL(d.src)
            })
        },resize: function(a, b) {
            var c = this._canvas || (this._canvas = document.createElement("canvas"));
            this._resize(this._img, c, a, b), this._blob = null, this.modified = !0, this.owner.trigger("complete", "resize")
        },crop: function(a, b, c, d, e) {
            var f = this._canvas || (this._canvas = document.createElement("canvas")), g = this.options, h = this._img, i = h.naturalWidth, j = h.naturalHeight, k = this.getOrientation();
            e = e || 1, f.width = c, f.height = d, g.preserveHeaders || this._rotate2Orientaion(f, k), this._renderImageToCanvas(f, h, -a, -b, i * e, j * e), this._blob = null, this.modified = !0, this.owner.trigger("complete", "crop")
        },getAsBlob: function(a) {
            var b, d = this._blob, e = this.options;
            if (a = a || this.type, this.modified || this.type !== a) {
                if (b = this._canvas, "image/jpeg" === a) {
                    if (d = c.canvasToDataUrl(b, a, e.quality), e.preserveHeaders && this._metas && this._metas.imageHead)
                        return d = c.dataURL2ArrayBuffer(d), d = c.updateImageHead(d, this._metas.imageHead), d = c.arrayBufferToBlob(d, a)
                } else
                    d = c.canvasToDataUrl(b, a);
                d = c.dataURL2Blob(d)
            }
            return d
        },getAsDataUrl: function(a) {
            var b = this.options;
            return a = a || this.type, "image/jpeg" === a ? c.canvasToDataUrl(this._canvas, a, b.quality) : this._canvas.toDataURL(a)
        },getOrientation: function() {
            return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
        },info: function(a) {
            return a ? (this._info = a, this) : this._info
        },meta: function(a) {
            return a ? (this._meta = a, this) : this._meta
        },destroy: function() {
            var a = this._canvas;
            this._img.onload = null, a && (a.getContext("2d").clearRect(0, 0, a.width, a.height), a.width = a.height = 0, this._canvas = null), this._img.src = d, this._img = this._blob = null
        },_resize: function(a, b, c, d) {
            var e, f, g, h, i, j = this.options, k = a.width, l = a.height, m = this.getOrientation();
            ~[5, 6, 7, 8].indexOf(m) && (c ^= d, d ^= c, c ^= d), e = Math[j.crop ? "max" : "min"](c / k, d / l), j.allowMagnify || (e = Math.min(1, e)), f = k * e, g = l * e, j.crop ? (b.width = c, b.height = d) : (b.width = f, b.height = g), h = (b.width - f) / 2, i = (b.height - g) / 2, j.preserveHeaders || this._rotate2Orientaion(b, m), this._renderImageToCanvas(b, a, h, i, f, g)
        },_rotate2Orientaion: function(a, b) {
            var c = a.width, d = a.height, e = a.getContext("2d");
            switch (b) {
                case 5:
                case 6:
                case 7:
                case 8:
                    a.width = d, a.height = c
            }
            switch (b) {
                case 2:
                    e.translate(c, 0), e.scale(-1, 1);
                    break;
                case 3:
                    e.translate(c, d), e.rotate(Math.PI);
                    break;
                case 4:
                    e.translate(0, d), e.scale(1, -1);
                    break;
                case 5:
                    e.rotate(.5 * Math.PI), e.scale(1, -1);
                    break;
                case 6:
                    e.rotate(.5 * Math.PI), e.translate(0, -d);
                    break;
                case 7:
                    e.rotate(.5 * Math.PI), e.translate(c, -d), e.scale(-1, 1);
                    break;
                case 8:
                    e.rotate(-.5 * Math.PI), e.translate(-c, 0)
            }
        },_renderImageToCanvas: function() {
            function b(a, b, c) {
                var d, e, f, g = document.createElement("canvas"), h = g.getContext("2d"), i = 0, j = c, k = c;
                for (g.width = 1, g.height = c, h.drawImage(a, 0, 0), d = h.getImageData(0, 0, 1, c).data; k > i; )
                    e = d[4 * (k - 1) + 3], 0 === e ? j = k : i = k, k = j + i >> 1;
                return f = k / c, 0 === f ? 1 : f
            }
            function c(a) {
                var b, c, d = a.naturalWidth, e = a.naturalHeight;
                return d * e > 1048576 ? (b = document.createElement("canvas"), b.width = b.height = 1, c = b.getContext("2d"), c.drawImage(a, -d + 1, 0), 0 === c.getImageData(0, 0, 1, 1).data[3]) : !1
            }
            return a.os.ios ? a.os.ios >= 7 ? function(a, c, d, e, f, g) {
                var h = c.naturalWidth, i = c.naturalHeight, j = b(c, h, i);
                return a.getContext("2d").drawImage(c, 0, 0, h * j, i * j, d, e, f, g)
            } : function(a, d, e, f, g, h) {
                var i, j, k, l, m, n, o, p = d.naturalWidth, q = d.naturalHeight, r = a.getContext("2d"), s = c(d), t = "image/jpeg" === this.type, u = 1024, v = 0, w = 0;
                for (s && (p /= 2, q /= 2), r.save(), i = document.createElement("canvas"), i.width = i.height = u, j = i.getContext("2d"), k = t ? b(d, p, q) : 1, l = Math.ceil(u * g / p), m = Math.ceil(u * h / q / k); q > v; ) {
                    for (n = 0, o = 0; p > n; )
                        j.clearRect(0, 0, u, u), j.drawImage(d, -n, -v), r.drawImage(i, 0, 0, u, u, e + o, f + w, l, m), n += u, o += l;
                    v += u, w += m
                }
                r.restore(), i = j = null
            } : function(b) {
                var c = a.slice(arguments, 1), d = b.getContext("2d");
                d.drawImage.apply(d, c)
            }
        }()})
    }), b("runtime/html5/transport", ["base", "runtime/html5/runtime"], function(a, b) {
        var c = a.noop, d = a.$;
        return b.register("Transport", {init: function() {
            this._status = 0, this._response = null
        },send: function() {
            var b, c, e, f = this.owner, g = this.options, h = this._initAjax(), i = f._blob, j = g.server;
            g.sendAsBinary ? (j += (/\?/.test(j) ? "&" : "?") + d.param(f._formData), c = i.getSource()) : (b = new FormData, d.each(f._formData, function(a, c) {
                b.append(a, c)
            }), b.append(g.fileVal, i.getSource(), g.filename || f._formData.name || "")), g.withCredentials && "withCredentials" in h ? (h.open(g.method, j, !0), h.withCredentials = !0) : h.open(g.method, j), this._setRequestHeader(h, g.headers), c ? (h.overrideMimeType && h.overrideMimeType("application/octet-stream"), a.os.android ? (e = new FileReader, e.onload = function() {
                h.send(this.result), e = e.onload = null
            }, e.readAsArrayBuffer(c)) : h.send(c)) : h.send(b)
        },getResponse: function() {
            return this._response
        },getResponseAsJson: function() {
            return this._parseJson(this._response)
        },getStatus: function() {
            return this._status
        },abort: function() {
            var a = this._xhr;
            a && (a.upload.onprogress = c, a.onreadystatechange = c, a.abort(), this._xhr = a = null)
        },destroy: function() {
            this.abort()
        },_initAjax: function() {
            var a = this, b = new XMLHttpRequest, d = this.options;
            return !d.withCredentials || "withCredentials" in b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest), b.upload.onprogress = function(b) {
                var c = 0;
                return b.lengthComputable && (c = b.loaded / b.total), a.trigger("progress", c)
            }, b.onreadystatechange = function() {
                return 4 === b.readyState ? (b.upload.onprogress = c, b.onreadystatechange = c, a._xhr = null, a._status = b.status, b.status >= 200 && b.status < 300 ? (a._response = b.responseText, a.trigger("load")) : b.status >= 500 && b.status < 600 ? (a._response = b.responseText, a.trigger("error", "server")) : a.trigger("error", a._status ? "http" : "abort")) : void 0
            }, a._xhr = b, b
        },_setRequestHeader: function(a, b) {
            d.each(b, function(b, c) {
                a.setRequestHeader(b, c)
            })
        },_parseJson: function(a) {
            var b;
            try {
                b = JSON.parse(a)
            } catch (c) {
                b = {}
            }
            return b
        }})
    }), b("preset/html5only", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/image", "runtime/html5/transport"], function(a) {
        return a
    }), b("webuploader", ["preset/html5only"], function(a) {
        return a
    }), c("webuploader")
}), function(a, b) {
    function c(a, c, d) {
        var e = " to exec 「" + c + "」 command" + (d ? " with value: " + d : "");
        try {
            b.execCommand(c, !1, d)
        } catch (f) {
            return z.log("fail" + e, !0)
        }
        z.log("success" + e)
    }
    function d(a, b, d) {
        var e = p(a);
        if (e)
            return a._range.selectNode(e), a._range.collapse(!1), "insertimage" === b && a._menu && v(a._menu, !0), c(a, b, d)
    }
    function e(a, b) {
        var d = q(a, p(a), !0);
        return -1 !== d.indexOf(b) && (b = "p"), c(a, "formatblock", b)
    }
    function f(a, b, d) {
        return d = "<" + b + ">" + (d || "") + "</" + b + ">", c(a, "insertHTML", d)
    }
    function g(a) {
        var c = "", d = '<input class="pen-input" placeholder="http://" />';
        if (a._toolbar = a.config.toolbar, a._toolbar)
            (a._toolbar.querySelectorAll("[data-action=createlink]").length || a._toolbar.querySelectorAll("[data-action=insertimage]").length) && (c += d);
        else {
            var e = a.config.list;
            z.forEach(e, function(a) {
                var b = "pen-icon icon-" + a;
                c += '<i class="' + b + '" data-action="' + a + '"></i>'
            }, !0), (e.indexOf("createlink") >= 0 || e.indexOf("createlink") >= 0) && (c += d)
        }
        c && (a._menu = b.createElement("div"), a._menu.setAttribute("class", a.config["class"] + "-menu pen-menu"), a._menu.innerHTML = c, a._inputBar = a._menu.querySelector("input"), v(a._menu, !0), b.body.appendChild(a._menu)), a._toolbar && a._inputBar && v(a._inputBar)
    }
    function h(c) {
        function d(a) {
            c._range = c.getRange(), g(a)
        }
        var e = c._toolbar || c._menu, f = c.config.editor, g = z.delayExec(function() {
            c.highlight().menu()
        }), h = function() {
        };
        if (c._menu) {
            var j = function() {
                "block" === c._menu.style.display && c.menu()
            };
            i(c, a, "resize", j), i(c, a, "scroll", j);
            var l = !1;
            i(c, f, "mousedown", function() {
                l = !0
            }), i(c, f, "mouseleave", function() {
                l && d(800), l = !1
            }), i(c, f, "mouseup", function() {
                l && d(100), l = !1
            }), h = function(a) {
                !c._menu || o(f, a.target) || o(c._menu, a.target) || (k(c, b, "click", h), g(100))
            }
        } else
            i(c, f, "click", function() {
                d(0)
            });
        i(c, f, "keyup", function(a) {
            if (8 === a.which && c.isEmpty())
                return r(c, !0);
            if (13 !== a.which || a.shiftKey)
                return d(400);
            var e = p(c, !0);
            e && e.nextSibling && D.test(e.nodeName) && e.nodeName === e.nextSibling.nodeName && ("BR" !== e.lastChild.nodeName && e.appendChild(b.createElement("br")), z.forEach(e.nextSibling.childNodes, function(a) {
                a && e.appendChild(a)
            }, !0), e.parentNode.removeChild(e.nextSibling), s(c, e.lastChild, c.getRange()))
        }), i(c, f, "keydown", function(a) {
            if (f.classList.remove("pen-placeholder"), 13 === a.which && !a.shiftKey) {
                var d = p(c, !0);
                if (d && D.test(d.nodeName)) {
                    var e = d.lastChild;
                    if (e && e.previousSibling && !e.previousSibling.textContent && !e.textContent) {
                        a.preventDefault();
                        var g = b.createElement("p");
                        g.innerHTML = "<br>", d.removeChild(e), d.nextSibling ? d.parentNode.insertBefore(g, d.nextSibling) : d.parentNode.appendChild(g), s(c, g, c.getRange())
                    }
                }
            }
        });
        var n = function(a, b) {
            c.execCommand(a, b), c._range = c.getRange(), c.highlight().menu()
        };
        i(c, e, "click", function(a) {
            var b = a.target.getAttribute("data-action");
            if (b) {
                if (!/(?:createlink)|(?:insertimage)/.test(b))
                    return n(b);
                if (c._inputBar) {
                    var d = c._inputBar;
                    if (e === c._menu ? v(d) : (c._inputActive = !0, c.menu()), "none" !== c._menu.style.display) {
                        setTimeout(function() {
                            d.focus()
                        }, 400);
                        var f = function() {
                            var a = d.value;
                            a ? a = d.value.replace(F.whiteSpace, "").replace(F.mailTo, "mailto:$1").replace(F.http, "http://$1") : b = "unlink", n(b, a), e === c._menu ? v(d, !1) : v(c._menu, !0)
                        };
                        d.onkeypress = function(a) {
                            return 13 === a.which ? f() : void 0
                        }
                    }
                }
            }
        }), i(c, f, "focus", function() {
            c.isEmpty() && r(c, !0), i(c, b, "click", h)
        }), i(c, f, "blur", function() {
            m(c), c.checkContentChange()
        }), i(c, f, "paste", function() {
            setTimeout(function() {
                c.cleanContent()
            })
        })
    }
    function i(a, b, c, d) {
        if (a._events.hasOwnProperty(c))
            a._events[c].push(d);
        else {
            a._eventTargets = a._eventTargets || [], a._eventsCache = a._eventsCache || [];
            var e = a._eventTargets.indexOf(b);
            0 > e && (e = a._eventTargets.push(b) - 1), a._eventsCache[e] = a._eventsCache[e] || {}, a._eventsCache[e][c] = a._eventsCache[e][c] || [], a._eventsCache[e][c].push(d), b.addEventListener(c, d, !1)
        }
        return a
    }
    function j(a, b) {
        if (a._events.hasOwnProperty(b)) {
            var c = B.call(arguments, 2);
            z.forEach(a._events[b], function(b) {
                b.apply(a, c)
            })
        }
    }
    function k(a, b, c, d) {
        var e = a._events[c];
        if (!e) {
            var f = a._eventTargets.indexOf(b);
            f >= 0 && (e = a._eventsCache[f][c])
        }
        if (!e)
            return a;
        var g = e.indexOf(d);
        return g >= 0 && e.splice(g, 1), b.removeEventListener(c, d, !1), a
    }
    function l(a) {
        return z.forEach(this._events, function(a) {
            a.length = 0
        }, !1), a._eventsCache ? (z.forEach(a._eventsCache, function(b, c) {
            var d = a._eventTargets[c];
            z.forEach(b, function(a, b) {
                z.forEach(a, function(a) {
                    d.removeEventListener(b, a, !1)
                }, !0)
            }, !1)
        }, !0), a._eventTargets = [], a._eventsCache = [], a) : a
    }
    function m(a) {
        a.config.editor.classList[a.isEmpty() ? "add" : "remove"]("pen-placeholder")
    }
    function n(a) {
        return (a || "").replace(/^\s+|\s+$/g, "")
    }
    function o(a, b) {
        if (a === b)
            return !0;
        for (b = b.parentNode; b; ) {
            if (b === a)
                return !0;
            b = b.parentNode
        }
        return !1
    }
    function p(a, b) {
        var c, d = a.config.editor;
        if (a._range = a._range || a.getRange(), c = a._range.commonAncestorContainer, !c || c === d)
            return null;
        for (; c && 1 !== c.nodeType && c.parentNode !== d; )
            c = c.parentNode;
        for (; c && b && c.parentNode !== d; )
            c = c.parentNode;
        return o(d, c) ? c : null
    }
    function q(a, b, c) {
        var d = [];
        for (b = b || a.config.editor; b && b !== a.config.editor; )
            b.nodeName.match(E) && d.push(c ? b.nodeName.toLowerCase() : b), b = b.parentNode;
        return d
    }
    function r(a, c) {
        var d = a._range = a.getRange(), e = b.createElement("p");
        c && (a.config.editor.innerHTML = ""), e.innerHTML = "<br>", d.insertNode(e), s(a, e.childNodes[0], d)
    }
    function s(a, b, c) {
        c.setStartAfter(b), c.setEndBefore(b), c.collapse(!1), a.setRange(c)
    }
    function t(a) {
        if (1 === a.nodeType) {
            if (G.notLink.test(a.tagName))
                return;
            z.forEach(a.childNodes, function(a) {
                t(a)
            }, !0)
        } else if (3 === a.nodeType) {
            var c = u(a.nodeValue || "");
            if (!c.links)
                return;
            var d = b.createDocumentFragment(), e = b.createElement("div");
            for (e.innerHTML = c.text; e.childNodes.length; )
                d.appendChild(e.childNodes[0]);
            a.parentNode.replaceChild(d, a)
        }
    }
    function u(a) {
        var b = 0;
        return a = a.replace(G.url, function(a) {
            var c = a, d = a;
            return b++, a.length > G.maxLength && (d = a.slice(0, G.maxLength) + "..."), G.prefix.test(c) || (c = "http://" + c), '<a href="' + c + '">' + d + "</a>"
        }), {links: b,text: a}
    }
    function v(a, b) {
        a.style.display = b ? "none" : "block"
    }
    var w, x, y, z = {}, A = Object.prototype.toString, B = Array.prototype.slice, C = {block: /^(?:p|h[1-6]|blockquote|pre)$/,inline: /^(?:bold|italic|underline|insertorderedlist|insertunorderedlist|indent|outdent)$/,source: /^(?:createlink|unlink)$/,insert: /^(?:inserthorizontalrule|insertimage|insert)$/,wrap: /^(?:code)$/}, D = /^(?:blockquote|pre|div)$/i, E = /(?:[pubia]|h[1-6]|blockquote|[uo]l|li)/i, F = {whiteSpace: /(^\s+)|(\s+$)/g,mailTo: /^(?!mailto:|.+\/|.+#|.+\?)(.*@.*\..+)$/,http: /^(?!\w+?:\/\/|mailto:|\/|\.\/|\?|#)(.*)$/}, G = {url: /((https?|ftp):\/\/|www\.)[^\s<]{3,}/gi,prefix: /^(?:https?|ftp):\/\//i,notLink: /^(?:img|a|input|audio|video|source|code|pre|script|head|title|style)$/i,maxLength: 100};
    z.is = function(a, b) {
        return A.call(a).slice(8, -1) === b
    }, z.forEach = function(a, b, c) {
        if (a)
            if (null == c && (c = z.is(a, "Array")), c)
                for (var d = 0, e = a.length; e > d; d++)
                    b(a[d], d, a);
            else
                for (var f in a)
                    a.hasOwnProperty(f) && b(a[f], f, a)
    }, z.copy = function(a, b) {
        return z.forEach(b, function(b, c) {
            a[c] = z.is(b, "Object") ? z.copy({}, b) : z.is(b, "Array") ? z.copy([], b) : b
        }), a
    }, z.log = function(a, b) {
        (x || b) && console.log("%cPEN DEBUGGER: %c" + a, "font-family:arial,sans-serif;color:#1abf89;line-height:2em;", "font-family:cursor,monospace;color:#333;")
    }, z.delayExec = function(a) {
        var b = null;
        return function(c) {
            clearTimeout(b), b = setTimeout(function() {
                a()
            }, c || 1)
        }
    }, z.merge = function(a) {
        var c = {"class": "pen",debug: !1,toolbar: null,stay: a.stay || !a.debug,stayMsg: "Are you going to leave here?",textarea: '<textarea name="content"></textarea>',list: ["blockquote", "h2", "h3", "p", "code", "insertorderedlist", "insertunorderedlist", "inserthorizontalrule", "indent", "outdent", "bold", "italic", "underline", "createlink", "insertimage"],cleanAttrs: ["id", "class", "style", "name"],cleanTags: ["script"]};
        return 1 === a.nodeType ? c.editor = a : a.match && a.match(/^#[\S]+$/) ? c.editor = b.getElementById(a.slice(1)) : c = z.copy(c, a), c
    }, w = function(a) {
        if (!a)
            throw new Error("Can't find config");
        x = a.debug;
        var b = z.merge(a), c = b.editor;
        if (!c || 1 !== c.nodeType)
            throw new Error("Can't find editor");
        c.classList.add(b["class"]), c.setAttribute("contenteditable", "true"), this.config = b, b.placeholder && c.setAttribute("data-placeholder", b.placeholder), m(this), this.selection = y, this._events = {change: []}, g(this), h(this), this._prevContent = this.getContent(), this.markdown && this.markdown.init(this), this.config.stay && this.stay(this.config)
    }, w.prototype.on = function(a, b) {
        return i(this, this.config.editor, a, b), this
    }, w.prototype.isEmpty = function(a) {
        return a = a || this.config.editor, !(a.querySelector("img") || a.querySelector("blockquote") || a.querySelector("li") || n(a.textContent))
    }, w.prototype.getContent = function() {
        return this.isEmpty() ? "" : n(this.config.editor.innerHTML)
    }, w.prototype.setContent = function(a) {
        return this.config.editor.innerHTML = a, this.cleanContent(), this
    }, w.prototype.checkContentChange = function() {
        var a = this._prevContent, b = this.getContent();
        a !== b && (this._prevContent = b, j(this, "change", b, a))
    }, w.prototype.getRange = function() {
        var a = this.config.editor, c = y.rangeCount && y.getRangeAt(0);
        return c || (c = b.createRange()), o(a, c.commonAncestorContainer) || (c.selectNodeContents(a), c.collapse(!1)), c
    }, w.prototype.setRange = function(a) {
        a = a || this._range, a || (a = this.getRange(), a.collapse(!1));
        try {
            y.removeAllRanges(), y.addRange(a)
        } catch (b) {
        }
        return this
    }, w.prototype.focus = function(a) {
        return a || this.setRange(), this.config.editor.focus(), this
    }, w.prototype.execCommand = function(a, b) {
        a = a.toLowerCase(), this.setRange(), C.block.test(a) ? e(this, a) : C.inline.test(a) || C.source.test(a) ? c(this, a, b) : C.insert.test(a) ? d(this, a, b) : C.wrap.test(a) ? f(this, a, b) : z.log("can not find command function for name: " + a + (b ? ", value: " + b : ""), !0), "indent" === a ? this.checkContentChange() : this.cleanContent({cleanAttrs: ["style"]})
    }, w.prototype.cleanContent = function(a) {
        var b = this.config.editor;
        return a || (a = this.config), z.forEach(a.cleanAttrs, function(a) {
            z.forEach(b.querySelectorAll("[" + a + "]"), function(b) {
                b.removeAttribute(a)
            }, !0)
        }, !0), z.forEach(a.cleanTags, function(a) {
            z.forEach(b.querySelectorAll(a), function(a) {
                a.parentNode.removeChild(a)
            }, !0)
        }, !0), m(this), this.checkContentChange(), this
    }, w.prototype.autoLink = function() {
        return t(this.config.editor), this.getContent()
    }, w.prototype.highlight = function() {
        var a = this._toolbar || this._menu, b = p(this);
        if (z.forEach(a.querySelectorAll(".active"), function(a) {
            a.classList.remove("active")
        }, !0), !b)
            return this;
        var c, d = q(this, b), e = this._inputBar;
        return e && a === this._menu && (e.style.display = "none"), e.value = "", c = function(b) {
            if (b) {
                var c = a.querySelector("[data-action=" + b + "]");
                return c && c.classList.add("active")
            }
        }, z.forEach(d, function(a) {
            var b = a.nodeName.toLowerCase();
            switch (b) {
                case "a":
                    e && (e.value = a.getAttribute("href")), b = "createlink";
                    break;
                case "img":
                    e && (e.value = a.getAttribute("src")), b = "insertimage";
                    break;
                case "i":
                    b = "italic";
                    break;
                case "u":
                    b = "underline";
                    break;
                case "b":
                    b = "bold";
                    break;
                case "pre":
                case "code":
                    b = "code";
                    break;
                case "ul":
                    b = "insertunorderedlist";
                    break;
                case "ol":
                    b = "insertorderedlist";
                    break;
                case "li":
                    b = "indent"
            }
            c(b)
        }, !0), this
    }, w.prototype.menu = function() {
        if (!this._menu)
            return this;
        if (y.isCollapsed)
            return this._menu.style.display = "none", this._inputActive = !1, this;
        if (this._toolbar && (!this._inputBar || !this._inputActive))
            return this;
        var a = this._range.getBoundingClientRect(), b = 10, c = a.top - b, d = a.left + a.width / 2, e = this._menu, f = {x: 0,y: 0}, g = this._stylesheet;
        if (void 0 === this._stylesheet) {
            var h = document.createElement("style");
            document.head.appendChild(h), this._stylesheet = g = h.sheet
        }
        return e.style.display = "block", f.x = d - e.clientWidth / 2, f.y = c - e.clientHeight, g.cssRules.length > 0 && g.deleteRule(0), f.x < 0 ? (f.x = 0, g.insertRule(".pen-menu:after {left: " + d + "px;}", 0)) : g.insertRule(".pen-menu:after {left: 50%; }", 0), f.y < 0 ? (e.classList.add("pen-menu-below"), f.y = a.top + a.height + b) : e.classList.remove("pen-menu-below"), e.style.top = f.y + "px", e.style.left = f.x + "px", this
    }, w.prototype.stay = function(a) {
        var b = this;
        window.onbeforeunload || (window.onbeforeunload = function() {
            return b._isDestroyed ? void 0 : a.stayMsg
        })
    }, w.prototype.destroy = function(a) {
        var b = a ? !1 : !0, c = a ? "setAttribute" : "removeAttribute";
        if (a)
            g(this), h(this);
        else {
            l(this);
            try {
                y.removeAllRanges(), this._menu && this._menu.parentNode.removeChild(this._menu)
            } catch (d) {
            }
        }
        return this._isDestroyed = b, this.config.editor[c]("contenteditable", ""), this
    }, w.prototype.rebuild = function() {
        return this.destroy("it's a joke")
    }, a.Pen = function(a) {
        if (!a)
            return z.log("can't find config", !0);
        var b = z.merge(a), c = b.editor.getAttribute("class");
        return c = c ? c.replace(/\bpen\b/g, "") + " pen-textarea " + b["class"] : "pen pen-textarea", b.editor.setAttribute("class", c), b.editor.innerHTML = b.textarea, b.editor
    }, b.getSelection && (y = b.getSelection(), a.Pen = w)
}(window, document), define("pen", function(a) {
    return function() {
        var b;
        return b || a.Pen
    }
}(this)), function(a, b) {
    var c = {version: "2.2.0",areas: {},apis: {},inherit: function(a, b) {
        for (var c in a)
            b.hasOwnProperty(c) || (b[c] = a[c]);
        return b
    },stringify: function(a) {
        return void 0 === a || "function" == typeof a ? a + "" : JSON.stringify(a)
    },parse: function(a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return a
        }
    },fn: function(a, b) {
        c.storeAPI[a] = b;
        for (var d in c.apis)
            c.apis[d][a] = b
    },get: function(a, b) {
        return a.getItem(b)
    },set: function(a, b, c) {
        a.setItem(b, c)
    },remove: function(a, b) {
        a.removeItem(b)
    },key: function(a, b) {
        return a.key(b)
    },length: function(a) {
        return a.length
    },clear: function(a) {
        a.clear()
    },Store: function(a, b, d) {
        var e = c.inherit(c.storeAPI, function(a, b, c) {
            return 0 === arguments.length ? e.getAll() : void 0 !== b ? e.set(a, b, c) : "string" == typeof a ? e.get(a) : a ? e.setAll(a, b) : e.clear()
        });
        return e._id = a, e._area = b || c.inherit(c.storageAPI, {items: {},name: "fake"}), e._ns = d || "", c.areas[a] || (c.areas[a] = e._area), c.apis[e._ns + e._id] || (c.apis[e._ns + e._id] = e), e
    },storeAPI: {area: function(a, b) {
        var d = this[a];
        return d && d.area || (d = c.Store(a, b, this._ns), this[a] || (this[a] = d)), d
    },namespace: function(a, b) {
        if (!a)
            return this._ns ? this._ns.substring(0, this._ns.length - 1) : "";
        var d = a, e = this[d];
        return e && e.namespace || (e = c.Store(this._id, this._area, this._ns + d + "."), this[d] || (this[d] = e), b || e.area("session", c.areas.session)), e
    },isFake: function() {
        return "fake" === this._area.name
    },toString: function() {
        return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]"
    },has: function(a) {
        return this._area.has ? this._area.has(this._in(a)) : !!(this._in(a) in this._area)
    },size: function() {
        return this.keys().length
    },each: function(a, b) {
        for (var d = 0, e = c.length(this._area); e > d; d++) {
            var f = this._out(c.key(this._area, d));
            if (void 0 !== f && a.call(this, f, b || this.get(f)) === !1)
                break;
            e > c.length(this._area) && (e--, d--)
        }
        return b || this
    },keys: function() {
        return this.each(function(a, b) {
            b.push(a)
        }, [])
    },get: function(a, b) {
        var d = c.get(this._area, this._in(a));
        return null !== d ? c.parse(d) : b || d
    },getAll: function() {
        return this.each(function(a, b) {
            b[a] = this.get(a)
        }, {})
    },set: function(a, b, d) {
        var e = this.get(a);
        if (null != e && d === !1)
            return b;
        try {
            return c.set(this._area, this._in(a), c.stringify(b), d) || e
        } catch (f) {
            if ("QUOTA_EXCEEDED_ERR" === f.name || "NS_ERROR_DOM_QUOTA_REACHED" === f.name || -1 !== f.toString().indexOf("QUOTA_EXCEEDED_ERR") || -1 !== f.toString().indexOf("QuotaExceededError"))
                return void this.clearAll();
            throw f
        }
    },setAll: function(a, b) {
        var c, d;
        for (var e in a)
            d = a[e], this.set(e, d, b) !== d && (c = !0);
        return c
    },remove: function(a) {
        var b = this.get(a);
        return c.remove(this._area, this._in(a)), b
    },clear: function() {
        return this._ns ? this.each(function(a) {
            c.remove(this._area, this._in(a))
        }, 1) : c.clear(this._area), this
    },clearAll: function() {
        var a = this._area;
        for (var b in c.areas)
            c.areas.hasOwnProperty(b) && (this._area = c.areas[b], this.clear());
        return this._area = a, this
    },_in: function(a) {
        return "string" != typeof a && (a = c.stringify(a)), this._ns ? this._ns + a : a
    },_out: function(a) {
        return this._ns ? a && 0 === a.indexOf(this._ns) ? a.substring(this._ns.length) : void 0 : a
    }},storageAPI: {length: 0,has: function(a) {
        return this.items.hasOwnProperty(a)
    },key: function(a) {
        var b = 0;
        for (var c in this.items)
            if (this.has(c) && a === b++)
                return c
    },setItem: function(a, b) {
        this.has(a) || this.length++, this.items[a] = b
    },removeItem: function(a) {
        this.has(a) && (delete this.items[a], this.length--)
    },getItem: function(a) {
        return this.has(a) ? this.items[a] : null
    },clear: function() {
        for (var a in this.list)
            this.removeItem(a)
    },toString: function() {
        return this.length + " items in " + this.name + "Storage"
    }}};
    a.store && (c.conflict = a.store);
    var d = c.Store("local", function() {
        try {
            return localStorage
        } catch (a) {
        }
    }());
    d.local = d, d._ = c, d.area("session", function() {
        try {
            return sessionStorage
        } catch (a) {
        }
    }()), "function" == typeof b && void 0 !== b.amd ? b("store", [], function() {
        return d
    }) : "undefined" != typeof module && module.exports ? module.exports = d : a.store = d
}(window, window.define), function(a) {
    function b(a, b) {
        var c = (65535 & a) + (65535 & b), d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | 65535 & c
    }
    function c(a, b) {
        return a << b | a >>> 32 - b
    }
    function d(a, d, e, f, g, h) {
        return b(c(b(b(d, a), b(f, h)), g), e)
    }
    function e(a, b, c, e, f, g, h) {
        return d(b & c | ~b & e, a, b, f, g, h)
    }
    function f(a, b, c, e, f, g, h) {
        return d(b & e | c & ~e, a, b, f, g, h)
    }
    function g(a, b, c, e, f, g, h) {
        return d(b ^ c ^ e, a, b, f, g, h)
    }
    function h(a, b, c, e, f, g, h) {
        return d(c ^ (b | ~e), a, b, f, g, h)
    }
    function i(a, c) {
        a[c >> 5] |= 128 << c % 32, a[(c + 64 >>> 9 << 4) + 14] = c;
        var d, i, j, k, l, m = 1732584193, n = -271733879, o = -1732584194, p = 271733878;
        for (d = 0; d < a.length; d += 16)
            i = m, j = n, k = o, l = p, m = e(m, n, o, p, a[d], 7, -680876936), p = e(p, m, n, o, a[d + 1], 12, -389564586), o = e(o, p, m, n, a[d + 2], 17, 606105819), n = e(n, o, p, m, a[d + 3], 22, -1044525330), m = e(m, n, o, p, a[d + 4], 7, -176418897), p = e(p, m, n, o, a[d + 5], 12, 1200080426), o = e(o, p, m, n, a[d + 6], 17, -1473231341), n = e(n, o, p, m, a[d + 7], 22, -45705983), m = e(m, n, o, p, a[d + 8], 7, 1770035416), p = e(p, m, n, o, a[d + 9], 12, -1958414417), o = e(o, p, m, n, a[d + 10], 17, -42063), n = e(n, o, p, m, a[d + 11], 22, -1990404162), m = e(m, n, o, p, a[d + 12], 7, 1804603682), p = e(p, m, n, o, a[d + 13], 12, -40341101), o = e(o, p, m, n, a[d + 14], 17, -1502002290), n = e(n, o, p, m, a[d + 15], 22, 1236535329), m = f(m, n, o, p, a[d + 1], 5, -165796510), p = f(p, m, n, o, a[d + 6], 9, -1069501632), o = f(o, p, m, n, a[d + 11], 14, 643717713), n = f(n, o, p, m, a[d], 20, -373897302), m = f(m, n, o, p, a[d + 5], 5, -701558691), p = f(p, m, n, o, a[d + 10], 9, 38016083), o = f(o, p, m, n, a[d + 15], 14, -660478335), n = f(n, o, p, m, a[d + 4], 20, -405537848), m = f(m, n, o, p, a[d + 9], 5, 568446438), p = f(p, m, n, o, a[d + 14], 9, -1019803690), o = f(o, p, m, n, a[d + 3], 14, -187363961), n = f(n, o, p, m, a[d + 8], 20, 1163531501), m = f(m, n, o, p, a[d + 13], 5, -1444681467), p = f(p, m, n, o, a[d + 2], 9, -51403784), o = f(o, p, m, n, a[d + 7], 14, 1735328473), n = f(n, o, p, m, a[d + 12], 20, -1926607734), m = g(m, n, o, p, a[d + 5], 4, -378558), p = g(p, m, n, o, a[d + 8], 11, -2022574463), o = g(o, p, m, n, a[d + 11], 16, 1839030562), n = g(n, o, p, m, a[d + 14], 23, -35309556), m = g(m, n, o, p, a[d + 1], 4, -1530992060), p = g(p, m, n, o, a[d + 4], 11, 1272893353), o = g(o, p, m, n, a[d + 7], 16, -155497632), n = g(n, o, p, m, a[d + 10], 23, -1094730640), m = g(m, n, o, p, a[d + 13], 4, 681279174), p = g(p, m, n, o, a[d], 11, -358537222), o = g(o, p, m, n, a[d + 3], 16, -722521979), n = g(n, o, p, m, a[d + 6], 23, 76029189), m = g(m, n, o, p, a[d + 9], 4, -640364487), p = g(p, m, n, o, a[d + 12], 11, -421815835), o = g(o, p, m, n, a[d + 15], 16, 530742520), n = g(n, o, p, m, a[d + 2], 23, -995338651), m = h(m, n, o, p, a[d], 6, -198630844), p = h(p, m, n, o, a[d + 7], 10, 1126891415), o = h(o, p, m, n, a[d + 14], 15, -1416354905), n = h(n, o, p, m, a[d + 5], 21, -57434055), m = h(m, n, o, p, a[d + 12], 6, 1700485571), p = h(p, m, n, o, a[d + 3], 10, -1894986606), o = h(o, p, m, n, a[d + 10], 15, -1051523), n = h(n, o, p, m, a[d + 1], 21, -2054922799), m = h(m, n, o, p, a[d + 8], 6, 1873313359), p = h(p, m, n, o, a[d + 15], 10, -30611744), o = h(o, p, m, n, a[d + 6], 15, -1560198380), n = h(n, o, p, m, a[d + 13], 21, 1309151649), m = h(m, n, o, p, a[d + 4], 6, -145523070), p = h(p, m, n, o, a[d + 11], 10, -1120210379), o = h(o, p, m, n, a[d + 2], 15, 718787259), n = h(n, o, p, m, a[d + 9], 21, -343485551), m = b(m, i), n = b(n, j), o = b(o, k), p = b(p, l);
        return [m, n, o, p]
    }
    function j(a) {
        var b, c = "";
        for (b = 0; b < 32 * a.length; b += 8)
            c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return c
    }
    function k(a) {
        var b, c = [];
        for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1)
            c[b] = 0;
        for (b = 0; b < 8 * a.length; b += 8)
            c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
        return c
    }
    function l(a) {
        return j(i(k(a), 8 * a.length))
    }
    function m(a, b) {
        var c, d, e = k(a), f = [], g = [];
        for (f[15] = g[15] = void 0, e.length > 16 && (e = i(e, 8 * a.length)), c = 0; 16 > c; c += 1)
            f[c] = 909522486 ^ e[c], g[c] = 1549556828 ^ e[c];
        return d = i(f.concat(k(b)), 512 + 8 * b.length), j(i(g.concat(d), 640))
    }
    function n(a) {
        var b, c, d = "0123456789abcdef", e = "";
        for (c = 0; c < a.length; c += 1)
            b = a.charCodeAt(c), e += d.charAt(b >>> 4 & 15) + d.charAt(15 & b);
        return e
    }
    function o(a) {
        return unescape(encodeURIComponent(a))
    }
    function p(a) {
        return l(o(a))
    }
    function q(a) {
        return n(p(a))
    }
    function r(a, b) {
        return m(o(a), o(b))
    }
    function s(a, b) {
        return n(r(a, b))
    }
    function t(a, b, c) {
        return b ? c ? r(b, a) : s(b, a) : c ? p(a) : q(a)
    }
    "function" == typeof define && define.amd ? define("md5", [], function() {
        return t
    }) : a.md5 = t
}(this), function() {
    var a = function(a) {
        function b(a) {
            if (a.paused || a.ended || q)
                return !1;
            try {
                k.clearRect(0, 0, i, h), k.drawImage(a, 0, 0, i, h)
            } catch (c) {
            }
            t = setTimeout(b, F.duration, a), E.setIcon(j)
        }
        function c(a) {
            var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            a = a.replace(b, function(a, b, c, d) {
                return b + b + c + c + d + d
            });
            var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return c ? {r: parseInt(c[1], 16),g: parseInt(c[2], 16),b: parseInt(c[3], 16)} : !1
        }
        function d(a, b) {
            var c, d = {};
            for (c in a)
                d[c] = a[c];
            for (c in b)
                d[c] = b[c];
            return d
        }
        function e() {
            return document.hidden || document.msHidden || document.webkitHidden || document.mozHidden
        }
        a = a ? a : {};
        var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = {bgColor: "#d00",textColor: "#fff",fontFamily: "sans-serif",fontStyle: "bold",type: "circle",position: "down",animation: "slide",elementId: !1};
        r = {}, r.ff = "undefined" != typeof InstallTrigger, r.chrome = !!window.chrome, r.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, r.ie = !1, r.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, r.supported = r.chrome || r.ff || r.opera;
        var v = [];
        p = function() {
        }, m = q = !1;
        var w = function() {
            f = d(u, a), f.bgColor = c(f.bgColor), f.textColor = c(f.textColor), f.position = f.position.toLowerCase(), f.animation = F.types["" + f.animation] ? f.animation : u.animation;
            var b = f.position.indexOf("up") > -1, e = f.position.indexOf("left") > -1;
            if (b || e)
                for (var m = 0; m < F.types["" + f.animation].length; m++) {
                    var n = F.types["" + f.animation][m];
                    b && (n.y = n.y < .6 ? n.y - .4 : n.y - 2 * n.y + (1 - n.w)), e && (n.x = n.x < .6 ? n.x - .4 : n.x - 2 * n.x + (1 - n.h)), F.types["" + f.animation][m] = n
                }
            f.type = y["" + f.type] ? f.type : u.type;
            try {
                g = E.getIcon(), j = document.createElement("canvas"), l = document.createElement("img"), g.hasAttribute("href") ? (l.setAttribute("src", g.getAttribute("href")), l.onload = function() {
                    h = l.height > 0 ? l.height : 32, i = l.width > 0 ? l.width : 32, j.height = h, j.width = i, k = j.getContext("2d"), x.ready()
                }) : (l.setAttribute("src", ""), h = 32, i = 32, l.height = h, l.width = i, j.height = h, j.width = i, k = j.getContext("2d"), x.ready())
            } catch (o) {
                throw "Error initializing favico. Message: " + o.message
            }
        }, x = {};
        x.ready = function() {
            m = !0, x.reset(), p()
        }, x.reset = function() {
            m && (v = [], n = !1, o = !1, k.clearRect(0, 0, i, h), k.drawImage(l, 0, 0, i, h), E.setIcon(j), window.clearTimeout(s), window.clearTimeout(t))
        }, x.start = function() {
            if (m && !o) {
                var a = function() {
                    n = v[0], o = !1, v.length > 0 && (v.shift(), x.start())
                };
                if (v.length > 0) {
                    o = !0;
                    var b = function() {
                        ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(a) {
                            a in v[0].options && (f[a] = v[0].options[a])
                        }), F.run(v[0].options, function() {
                            a()
                        }, !1)
                    };
                    n ? F.run(n.options, function() {
                        b()
                    }, !0) : b()
                }
            }
        };
        var y = {}, z = function(a) {
            return a.n = "number" == typeof a.n ? Math.abs(0 | a.n) : a.n, a.x = i * a.x, a.y = h * a.y, a.w = i * a.w, a.h = h * a.h, a.len = ("" + a.n).length, a
        };
        y.circle = function(a) {
            a = z(a);
            var b = !1;
            2 === a.len ? (a.x = a.x - .4 * a.w, a.w = 1.4 * a.w, b = !0) : a.len >= 3 && (a.x = a.x - .65 * a.w, a.w = 1.65 * a.w, b = !0), k.clearRect(0, 0, i, h), k.drawImage(l, 0, 0, i, h), k.beginPath(), k.font = f.fontStyle + " " + Math.floor(a.h * (a.n > 99 ? .85 : 1)) + "px " + f.fontFamily, k.textAlign = "center", b ? (k.moveTo(a.x + a.w / 2, a.y), k.lineTo(a.x + a.w - a.h / 2, a.y), k.quadraticCurveTo(a.x + a.w, a.y, a.x + a.w, a.y + a.h / 2), k.lineTo(a.x + a.w, a.y + a.h - a.h / 2), k.quadraticCurveTo(a.x + a.w, a.y + a.h, a.x + a.w - a.h / 2, a.y + a.h), k.lineTo(a.x + a.h / 2, a.y + a.h), k.quadraticCurveTo(a.x, a.y + a.h, a.x, a.y + a.h - a.h / 2), k.lineTo(a.x, a.y + a.h / 2), k.quadraticCurveTo(a.x, a.y, a.x + a.h / 2, a.y)) : k.arc(a.x + a.w / 2, a.y + a.h / 2, a.h / 2, 0, 2 * Math.PI), k.fillStyle = "rgba(" + f.bgColor.r + "," + f.bgColor.g + "," + f.bgColor.b + "," + a.o + ")", k.fill(), k.closePath(), k.beginPath(), k.stroke(), k.fillStyle = "rgba(" + f.textColor.r + "," + f.textColor.g + "," + f.textColor.b + "," + a.o + ")", "number" == typeof a.n && a.n > 999 ? k.fillText((a.n > 9999 ? 9 : Math.floor(a.n / 1e3)) + "k+", Math.floor(a.x + a.w / 2), Math.floor(a.y + a.h - .2 * a.h)) : k.fillText(a.n, Math.floor(a.x + a.w / 2), Math.floor(a.y + a.h - .15 * a.h)), k.closePath()
        }, y.rectangle = function(a) {
            a = z(a);
            var b = !1;
            2 === a.len ? (a.x = a.x - .4 * a.w, a.w = 1.4 * a.w, b = !0) : a.len >= 3 && (a.x = a.x - .65 * a.w, a.w = 1.65 * a.w, b = !0), k.clearRect(0, 0, i, h), k.drawImage(l, 0, 0, i, h), k.beginPath(), k.font = f.fontStyle + " " + Math.floor(a.h * (a.n > 99 ? .9 : 1)) + "px " + f.fontFamily, k.textAlign = "center", k.fillStyle = "rgba(" + f.bgColor.r + "," + f.bgColor.g + "," + f.bgColor.b + "," + a.o + ")", k.fillRect(a.x, a.y, a.w, a.h), k.fillStyle = "rgba(" + f.textColor.r + "," + f.textColor.g + "," + f.textColor.b + "," + a.o + ")", "number" == typeof a.n && a.n > 999 ? k.fillText((a.n > 9999 ? 9 : Math.floor(a.n / 1e3)) + "k+", Math.floor(a.x + a.w / 2), Math.floor(a.y + a.h - .2 * a.h)) : k.fillText(a.n, Math.floor(a.x + a.w / 2), Math.floor(a.y + a.h - .15 * a.h)), k.closePath()
        };
        var A = function(a, b) {
            b = ("string" == typeof b ? {animation: b} : b) || {}, p = function() {
                try {
                    if ("number" == typeof a ? a > 0 : "" !== a) {
                        var d = {type: "badge",options: {n: a}};
                        if ("animation" in b && F.types["" + b.animation] && (d.options.animation = "" + b.animation), "type" in b && y["" + b.type] && (d.options.type = "" + b.type), ["bgColor", "textColor"].forEach(function(a) {
                            a in b && (d.options[a] = c(b[a]))
                        }), ["fontStyle", "fontFamily"].forEach(function(a) {
                            a in b && (d.options[a] = b[a])
                        }), v.push(d), v.length > 100)
                            throw "Too many badges requests in queue.";
                        x.start()
                    } else
                        x.reset()
                } catch (e) {
                    throw "Error setting badge. Message: " + e.message
                }
            }, m && p()
        }, B = function(a) {
            p = function() {
                try {
                    var b = a.width, c = a.height, d = document.createElement("img"), e = c / h > b / i ? b / i : c / h;
                    d.setAttribute("src", a.getAttribute("src")), d.height = c / e, d.width = b / e, k.clearRect(0, 0, i, h), k.drawImage(d, 0, 0, i, h), E.setIcon(j)
                } catch (f) {
                    throw "Error setting image. Message: " + f.message
                }
            }, m && p()
        }, C = function(a) {
            p = function() {
                try {
                    if ("stop" === a)
                        return q = !0, x.reset(), void (q = !1);
                    a.addEventListener("play", function() {
                        b(this)
                    }, !1)
                } catch (c) {
                    throw "Error setting video. Message: " + c.message
                }
            }, m && p()
        }, D = function(a) {
            if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(a) {
                return a
            }), r.supported) {
                var c = !1;
                navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, p = function() {
                    try {
                        if ("stop" === a)
                            return q = !0, x.reset(), void (q = !1);
                        c = document.createElement("video"), c.width = i, c.height = h, navigator.getUserMedia({video: !0,audio: !1}, function(a) {
                            c.src = URL.createObjectURL(a), c.play(), b(c)
                        }, function() {
                        })
                    } catch (d) {
                        throw "Error setting webcam. Message: " + d.message
                    }
                }, m && p()
            }
        }, E = {};
        E.getIcon = function() {
            var a = !1, b = "", c = function() {
                for (var a = document.getElementsByTagName("head")[0].getElementsByTagName("link"), b = a.length, c = b - 1; c >= 0; c--)
                    if (/(^|\s)icon(\s|$)/i.test(a[c].getAttribute("rel")))
                        return a[c];
                return !1
            };
            if (f.elementId ? (a = document.getElementById(f.elementId), a.setAttribute("href", a.getAttribute("src"))) : (a = c(), a === !1 && (a = document.createElement("link"), a.setAttribute("rel", "icon"), document.getElementsByTagName("head")[0].appendChild(a))), b = f.elementId ? a.src : a.href, "data:" !== b.substr(0, 5) && -1 === b.indexOf(document.location.hostname))
                throw new Error("Error setting favicon. Favicon image is on different domain (Icon: " + b + ", Domain: " + document.location.hostname + ")");
            return a.setAttribute("type", "image/png"), a
        }, E.setIcon = function(a) {
            var b = a.toDataURL("image/png");
            if (f.elementId)
                document.getElementById(f.elementId).setAttribute("src", b);
            else if (r.ff || r.opera) {
                var c = g;
                g = document.createElement("link"), r.opera && g.setAttribute("rel", "icon"), g.setAttribute("rel", "icon"), g.setAttribute("type", "image/png"), document.getElementsByTagName("head")[0].appendChild(g), g.setAttribute("href", b), c.parentNode && c.parentNode.removeChild(c)
            } else
                g.setAttribute("href", b)
        };
        var F = {};
        return F.duration = 40, F.types = {}, F.types.fade = [{x: .4,y: .4,w: .6,h: .6,o: 0}, {x: .4,y: .4,w: .6,h: .6,o: .1}, {x: .4,y: .4,w: .6,h: .6,o: .2}, {x: .4,y: .4,w: .6,h: .6,o: .3}, {x: .4,y: .4,w: .6,h: .6,o: .4}, {x: .4,y: .4,w: .6,h: .6,o: .5}, {x: .4,y: .4,w: .6,h: .6,o: .6}, {x: .4,y: .4,w: .6,h: .6,o: .7}, {x: .4,y: .4,w: .6,h: .6,o: .8}, {x: .4,y: .4,w: .6,h: .6,o: .9}, {x: .4,y: .4,w: .6,h: .6,o: 1}], F.types.none = [{x: .4,y: .4,w: .6,h: .6,o: 1}], F.types.pop = [{x: 1,y: 1,w: 0,h: 0,o: 1}, {x: .9,y: .9,w: .1,h: .1,o: 1}, {x: .8,y: .8,w: .2,h: .2,o: 1}, {x: .7,y: .7,w: .3,h: .3,o: 1}, {x: .6,y: .6,w: .4,h: .4,o: 1}, {x: .5,y: .5,w: .5,h: .5,o: 1}, {x: .4,y: .4,w: .6,h: .6,o: 1}], F.types.popFade = [{x: .75,y: .75,w: 0,h: 0,o: 0}, {x: .65,y: .65,w: .1,h: .1,o: .2}, {x: .6,y: .6,w: .2,h: .2,o: .4}, {x: .55,y: .55,w: .3,h: .3,o: .6}, {x: .5,y: .5,w: .4,h: .4,o: .8}, {x: .45,y: .45,w: .5,h: .5,o: .9}, {x: .4,y: .4,w: .6,h: .6,o: 1}], F.types.slide = [{x: .4,y: 1,w: .6,h: .6,o: 1}, {x: .4,y: .9,w: .6,h: .6,o: 1}, {x: .4,y: .9,w: .6,h: .6,o: 1}, {x: .4,y: .8,w: .6,h: .6,o: 1}, {x: .4,y: .7,w: .6,h: .6,o: 1}, {x: .4,y: .6,w: .6,h: .6,o: 1}, {x: .4,y: .5,w: .6,h: .6,o: 1}, {x: .4,y: .4,w: .6,h: .6,o: 1}], F.run = function(a, b, c, g) {
            var h = F.types[e() ? "none" : f.animation];
            return g = c === !0 ? "undefined" != typeof g ? g : h.length - 1 : "undefined" != typeof g ? g : 0, b = b ? b : function() {
            }, g < h.length && g >= 0 ? (y[f.type](d(a, h[g])), s = setTimeout(function() {
                c ? g -= 1 : g += 1, F.run(a, b, c, g)
            }, F.duration), E.setIcon(j), void 0) : void b()
        }, w(), {badge: A,video: C,image: B,webcam: D,reset: x.reset,browser: {supported: r.supported}}
    };
    "undefined" != typeof define && define.amd ? define("favico", [], function() {
        return a
    }) : "undefined" != typeof module && module.exports ? module.exports = a : this.Favico = a
}(), define("highlight", [], function() {
    var a = new function() {
        function a(a) {
            return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
        }
        function b(a) {
            return a.nodeName.toLowerCase()
        }
        function c(a, b) {
            var c = a && a.exec(b);
            return c && 0 == c.index
        }
        function d(a) {
            var b = (a.className + " " + (a.parentNode ? a.parentNode.className : "")).split(/\s+/);
            return b = b.map(function(a) {
                return a.replace(/^lang(uage)?-/, "")
            }), b.filter(function(a) {
                return r(a) || "no-highlight" == a
            })[0]
        }
        function e(a, b) {
            var c = {};
            for (var d in a)
                c[d] = a[d];
            if (b)
                for (var d in b)
                    c[d] = b[d];
            return c
        }
        function f(a) {
            var c = [];
            return function d(a, e) {
                for (var f = a.firstChild; f; f = f.nextSibling)
                    3 == f.nodeType ? e += f.nodeValue.length : "br" == b(f) ? e += 1 : 1 == f.nodeType && (c.push({event: "start",offset: e,node: f}), e = d(f, e), c.push({event: "stop",offset: e,node: f}));
                return e
            }(a, 0), c
        }
        function g(c, d, e) {
            function f() {
                return c.length && d.length ? c[0].offset != d[0].offset ? c[0].offset < d[0].offset ? c : d : "start" == d[0].event ? c : d : c.length ? c : d
            }
            function g(c) {
                function d(b) {
                    return " " + b.nodeName + '="' + a(b.value) + '"'
                }
                k += "<" + b(c) + Array.prototype.map.call(c.attributes, d).join("") + ">"
            }
            function h(a) {
                k += "</" + b(a) + ">"
            }
            function i(a) {
                ("start" == a.event ? g : h)(a.node)
            }
            for (var j = 0, k = "", l = []; c.length || d.length; ) {
                var m = f();
                if (k += a(e.substr(j, m[0].offset - j)), j = m[0].offset, m == c) {
                    l.reverse().forEach(h);
                    do
                        i(m.splice(0, 1)[0]), m = f();
                    while (m == c && m.length && m[0].offset == j);
                    l.reverse().forEach(g)
                } else
                    "start" == m[0].event ? l.push(m[0].node) : l.pop(), i(m.splice(0, 1)[0])
            }
            return k + a(e.substr(j))
        }
        function h(a) {
            function b(a) {
                return a && a.source || a
            }
            function c(c, d) {
                return RegExp(b(c), "m" + (a.case_insensitive ? "i" : "") + (d ? "g" : ""))
            }
            function d(f, g) {
                function h(b, c) {
                    a.case_insensitive && (c = c.toLowerCase()), c.split(" ").forEach(function(a) {
                        var c = a.split("|");
                        i[c[0]] = [b, c[1] ? Number(c[1]) : 1]
                    })
                }
                if (!f.compiled) {
                    if (f.compiled = !0, f.keywords = f.keywords || f.beginKeywords, f.keywords) {
                        var i = {};
                        "string" == typeof f.keywords ? h("keyword", f.keywords) : Object.keys(f.keywords).forEach(function(a) {
                            h(a, f.keywords[a])
                        }), f.keywords = i
                    }
                    f.lexemesRe = c(f.lexemes || /\b[A-Za-z0-9_]+\b/, !0), g && (f.beginKeywords && (f.begin = "\\b(" + f.beginKeywords.split(" ").join("|") + ")\\b"), f.begin || (f.begin = /\B|\b/), f.beginRe = c(f.begin), f.end || f.endsWithParent || (f.end = /\B|\b/), f.end && (f.endRe = c(f.end)), f.terminator_end = b(f.end) || "", f.endsWithParent && g.terminator_end && (f.terminator_end += (f.end ? "|" : "") + g.terminator_end)), f.illegal && (f.illegalRe = c(f.illegal)), void 0 === f.relevance && (f.relevance = 1), f.contains || (f.contains = []);
                    var j = [];
                    f.contains.forEach(function(a) {
                        a.variants ? a.variants.forEach(function(b) {
                            j.push(e(a, b))
                        }) : j.push("self" == a ? f : a)
                    }), f.contains = j, f.contains.forEach(function(a) {
                        d(a, f)
                    }), f.starts && d(f.starts, g);
                    var k = f.contains.map(function(a) {
                        return a.beginKeywords ? "\\.?(" + a.begin + ")\\.?" : a.begin
                    }).concat([f.terminator_end, f.illegal]).map(b).filter(Boolean);
                    f.terminators = k.length ? c(k.join("|"), !0) : {exec: function() {
                        return null
                    }}, f.continuation = {}
                }
            }
            d(a)
        }
        function i(b, d, e, f) {
            function g(a, b) {
                for (var d = 0; d < b.contains.length; d++)
                    if (c(b.contains[d].beginRe, a))
                        return b.contains[d]
            }
            function k(a, b) {
                return c(a.endRe, b) ? a : a.endsWithParent ? k(a.parent, b) : void 0
            }
            function l(a, b) {
                return !e && c(b.illegalRe, a)
            }
            function m(a, b) {
                var c = w.case_insensitive ? b[0].toLowerCase() : b[0];
                return a.keywords.hasOwnProperty(c) && a.keywords[c]
            }
            function n(a, b, c, d) {
                var e = d ? "" : s.classPrefix, f = '<span class="' + e, g = c ? "" : "</span>";
                return f += a + '">', f + b + g
            }
            function o() {
                if (!x.keywords)
                    return a(A);
                var b = "", c = 0;
                x.lexemesRe.lastIndex = 0;
                for (var d = x.lexemesRe.exec(A); d; ) {
                    b += a(A.substr(c, d.index - c));
                    var e = m(x, d);
                    e ? (B += e[1], b += n(e[0], a(d[0]))) : b += a(d[0]), c = x.lexemesRe.lastIndex, d = x.lexemesRe.exec(A)
                }
                return b + a(A.substr(c))
            }
            function p() {
                if (x.subLanguage && !t[x.subLanguage])
                    return a(A);
                var b = x.subLanguage ? i(x.subLanguage, A, !0, x.continuation.top) : j(A);
                return x.relevance > 0 && (B += b.relevance), "continuous" == x.subLanguageMode && (x.continuation.top = b.top), n(b.language, b.value, !1, !0)
            }
            function q() {
                return void 0 !== x.subLanguage ? p() : o()
            }
            function u(b, c) {
                var d = b.className ? n(b.className, "", !0) : "";
                b.returnBegin ? (y += d, A = "") : b.excludeBegin ? (y += a(c) + d, A = "") : (y += d, A = c), x = Object.create(b, {parent: {value: x}})
            }
            function v(b, c) {
                if (A += b, void 0 === c)
                    return y += q(), 0;
                var d = g(c, x);
                if (d)
                    return y += q(), u(d, c), d.returnBegin ? 0 : c.length;
                var e = k(x, c);
                if (e) {
                    var f = x;
                    f.returnEnd || f.excludeEnd || (A += c), y += q();
                    do
                        x.className && (y += "</span>"), B += x.relevance, x = x.parent;
                    while (x != e.parent);
                    return f.excludeEnd && (y += a(c)), A = "", e.starts && u(e.starts, ""), f.returnEnd ? 0 : c.length
                }
                if (l(c, x))
                    throw new Error('Illegal lexeme "' + c + '" for mode "' + (x.className || "<unnamed>") + '"');
                return A += c, c.length || 1
            }
            var w = r(b);
            if (!w)
                throw new Error('Unknown language: "' + b + '"');
            h(w);
            for (var x = f || w, y = "", z = x; z != w; z = z.parent)
                z.className && (y += n(z.className, y, !0));
            var A = "", B = 0;
            try {
                for (var C, D, E = 0; ; ) {
                    if (x.terminators.lastIndex = E, C = x.terminators.exec(d), !C)
                        break;
                    D = v(d.substr(E, C.index - E), C[0]), E = C.index + D
                }
                v(d.substr(E));
                for (var z = x; z.parent; z = z.parent)
                    z.className && (y += "</span>");
                return {relevance: B,value: y,language: b,top: x}
            } catch (F) {
                if (-1 != F.message.indexOf("Illegal"))
                    return {relevance: 0,value: a(d)};
                throw F
            }
        }
        function j(b, c) {
            c = c || s.languages || Object.keys(t);
            var d = {relevance: 0,value: a(b)}, e = d;
            return c.forEach(function(a) {
                if (r(a)) {
                    var c = i(a, b, !1);
                    c.language = a, c.relevance > e.relevance && (e = c), c.relevance > d.relevance && (e = d, d = c)
                }
            }), e.language && (d.second_best = e), d
        }
        function k(a) {
            return s.tabReplace && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function(a, b) {
                return b.replace(/\t/g, s.tabReplace)
            })), s.useBR && (a = a.replace(/\n/g, "<br>")), a
        }
        function l(a) {
            var b = s.useBR ? a.innerHTML.replace(/\n/g, "").replace(/<br>|<br [^>]*>/g, "\n").replace(/<[^>]*>/g, "") : a.textContent, c = d(a);
            if ("no-highlight" != c) {
                var e = c ? i(c, b, !0) : j(b), h = f(a);
                if (h.length) {
                    var l = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
                    l.innerHTML = e.value, e.value = g(h, f(l), b)
                }
                e.value = k(e.value), a.innerHTML = e.value, a.className += " hljs " + (!c && e.language || ""), a.result = {language: e.language,re: e.relevance}, e.second_best && (a.second_best = {language: e.second_best.language,re: e.second_best.relevance})
            }
        }
        function m(a) {
            s = e(s, a)
        }
        function n() {
            if (!n.called) {
                n.called = !0;
                var a = document.querySelectorAll("pre code");
                Array.prototype.forEach.call(a, l)
            }
        }
        function o() {
            addEventListener("DOMContentLoaded", n, !1), addEventListener("load", n, !1)
        }
        function p(a, b) {
            var c = t[a] = b(this);
            c.aliases && c.aliases.forEach(function(b) {
                u[b] = a
            })
        }
        function q() {
            return Object.keys(t)
        }
        function r(a) {
            return t[a] || t[u[a]]
        }
        var s = {classPrefix: "hljs-",tabReplace: null,useBR: !1,languages: void 0}, t = {}, u = {};
        this.highlight = i, this.highlightAuto = j, this.fixMarkup = k, this.highlightBlock = l, this.configure = m, this.initHighlighting = n, this.initHighlightingOnLoad = o, this.registerLanguage = p, this.listLanguages = q, this.getLanguage = r, this.inherit = e, this.IDENT_RE = "[a-zA-Z][a-zA-Z0-9_]*", this.UNDERSCORE_IDENT_RE = "[a-zA-Z_][a-zA-Z0-9_]*", this.NUMBER_RE = "\\b\\d+(\\.\\d+)?", this.C_NUMBER_RE = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", this.BINARY_NUMBER_RE = "\\b(0b[01]+)", this.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", this.BACKSLASH_ESCAPE = {begin: "\\\\[\\s\\S]",relevance: 0}, this.APOS_STRING_MODE = {className: "string",begin: "'",end: "'",illegal: "\\n",contains: [this.BACKSLASH_ESCAPE]}, this.QUOTE_STRING_MODE = {className: "string",begin: '"',end: '"',illegal: "\\n",contains: [this.BACKSLASH_ESCAPE]}, this.PHRASAL_WORDS_MODE = {begin: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/}, this.C_LINE_COMMENT_MODE = {className: "comment",begin: "//",end: "$",contains: [this.PHRASAL_WORDS_MODE]}, this.C_BLOCK_COMMENT_MODE = {className: "comment",begin: "/\\*",end: "\\*/",contains: [this.PHRASAL_WORDS_MODE]}, this.HASH_COMMENT_MODE = {className: "comment",begin: "#",end: "$",contains: [this.PHRASAL_WORDS_MODE]}, this.NUMBER_MODE = {className: "number",begin: this.NUMBER_RE,relevance: 0}, this.C_NUMBER_MODE = {className: "number",begin: this.C_NUMBER_RE,relevance: 0}, this.BINARY_NUMBER_MODE = {className: "number",begin: this.BINARY_NUMBER_RE,relevance: 0}, this.CSS_NUMBER_MODE = {className: "number",begin: this.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance: 0}, this.REGEXP_MODE = {className: "regexp",begin: /\//,end: /\/[gim]*/,illegal: /\n/,contains: [this.BACKSLASH_ESCAPE, {begin: /\[/,end: /\]/,relevance: 0,contains: [this.BACKSLASH_ESCAPE]}]}, this.TITLE_MODE = {className: "title",begin: this.IDENT_RE,relevance: 0}, this.UNDERSCORE_TITLE_MODE = {className: "title",begin: this.UNDERSCORE_IDENT_RE,relevance: 0}
    };
    return a.registerLanguage("bash", function(a) {
        var b = {className: "variable",variants: [{begin: /\$[\w\d#@][\w\d_]*/}, {begin: /\$\{(.*?)\}/}]}, c = {className: "string",begin: /"/,end: /"/,contains: [a.BACKSLASH_ESCAPE, b, {className: "variable",begin: /\$\(/,end: /\)/,contains: [a.BACKSLASH_ESCAPE]}]}, d = {className: "string",begin: /'/,end: /'/};
        return {aliases: ["sh", "zsh"],lexemes: /-?[a-z\.]+/,keywords: {keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal: "true false",built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator: "-ne -eq -lt -gt -f -d -e -s -l -a"},contains: [{className: "shebang",begin: /^#![^\n]+sh\s*$/,relevance: 10}, {className: "function",begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin: !0,contains: [a.inherit(a.TITLE_MODE, {begin: /\w[\w\d_]*/})],relevance: 0}, a.HASH_COMMENT_MODE, a.NUMBER_MODE, c, d, b]}
    }), a.registerLanguage("clojure", function(a) {
        var b = {built_in: "def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"}, c = "[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+", d = "[\\s:\\(\\{]+\\d+(\\.\\d+)?", e = {className: "number",begin: d,relevance: 0}, f = a.inherit(a.QUOTE_STRING_MODE, {illegal: null}), g = {className: "comment",begin: ";",end: "$",relevance: 0}, h = {className: "collection",begin: "[\\[\\{]",end: "[\\]\\}]"}, i = {className: "comment",begin: "\\^" + c}, j = {className: "comment",begin: "\\^\\{",end: "\\}"}, k = {className: "attribute",begin: "[:]" + c}, l = {className: "list",begin: "\\(",end: "\\)"}, m = {endsWithParent: !0,keywords: {literal: "true false nil"},relevance: 0}, n = {keywords: b,lexemes: c,className: "title",begin: c,starts: m};
        return l.contains = [{className: "comment",begin: "comment"}, n, m], m.contains = [l, f, i, j, g, k, h, e], h.contains = [l, f, i, g, k, h, e], {aliases: ["clj"],illegal: /\S/,contains: [g, l, {className: "prompt",begin: /^=> /,starts: {end: /\n\n|\Z/}}]}
    }), a.registerLanguage("coffeescript", function(a) {
        var b = {keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal: "true false null undefined yes no on off",reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in: "npm require console print module global window document"}, c = "[A-Za-z$_][0-9A-Za-z$_]*", d = a.inherit(a.TITLE_MODE, {begin: c}), e = {className: "subst",begin: /#\{/,end: /}/,keywords: b}, f = [a.BINARY_NUMBER_MODE, a.inherit(a.C_NUMBER_MODE, {starts: {end: "(\\s*/)?",relevance: 0}}), {className: "string",variants: [{begin: /'''/,end: /'''/,contains: [a.BACKSLASH_ESCAPE]}, {begin: /'/,end: /'/,contains: [a.BACKSLASH_ESCAPE]}, {begin: /"""/,end: /"""/,contains: [a.BACKSLASH_ESCAPE, e]}, {begin: /"/,end: /"/,contains: [a.BACKSLASH_ESCAPE, e]}]}, {className: "regexp",variants: [{begin: "///",end: "///",contains: [e, a.HASH_COMMENT_MODE]}, {begin: "//[gim]*",relevance: 0}, {begin: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]}, {className: "property",begin: "@" + c}, {begin: "`",end: "`",excludeBegin: !0,excludeEnd: !0,subLanguage: "javascript"}];
        return e.contains = f, {aliases: ["coffee", "cson", "iced"],keywords: b,contains: f.concat([{className: "comment",begin: "###",end: "###"}, a.HASH_COMMENT_MODE, {className: "function",begin: "(" + c + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",end: "[-=]>",returnBegin: !0,contains: [d, {className: "params",begin: "\\(",returnBegin: !0,contains: [{begin: /\(/,end: /\)/,keywords: b,contains: ["self"].concat(f)}]}]}, {className: "class",beginKeywords: "class",end: "$",illegal: /[:="\[\]]/,contains: [{beginKeywords: "extends",endsWithParent: !0,illegal: /[:="\[\]]/,contains: [d]}, d]}, {className: "attribute",begin: c + ":",end: ":",returnBegin: !0,excludeEnd: !0,relevance: 0}])}
    }), a.registerLanguage("cpp", function(a) {
        var b = {keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};
        return {aliases: ["c", "h", "c++", "h++"],keywords: b,illegal: "</",contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.QUOTE_STRING_MODE, {className: "string",begin: "'\\\\?.",end: "'",illegal: "."}, {className: "number",begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"}, a.C_NUMBER_MODE, {className: "preprocessor",begin: "#",end: "$",keywords: "if else elif endif define undef warning error line pragma",contains: [{begin: 'include\\s*[<"]',end: '[>"]',keywords: "include",illegal: "\\n"}, a.C_LINE_COMMENT_MODE]}, {className: "stl_container",begin: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end: ">",keywords: b,relevance: 10,contains: ["self"]}, {begin: a.IDENT_RE + "::"}]}
    }), a.registerLanguage("cs", function(a) {
        var b = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
        return {keywords: b,illegal: /::/,contains: [{className: "comment",begin: "///",end: "$",returnBegin: !0,contains: [{className: "xmlDocTag",variants: [{begin: "///",relevance: 0}, {begin: "<!--|-->"}, {begin: "</?",end: ">"}]}]}, a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, {className: "preprocessor",begin: "#",end: "$",keywords: "if else elif endif define undef warning error line region endregion pragma checksum"}, {className: "string",begin: '@"',end: '"',contains: [{begin: '""'}]}, a.APOS_STRING_MODE, a.QUOTE_STRING_MODE, a.C_NUMBER_MODE, {beginKeywords: "protected public private internal",end: /[{;=]/,keywords: b,contains: [{beginKeywords: "class namespace interface",starts: {contains: [a.TITLE_MODE]}}, {begin: a.IDENT_RE + "\\s*\\(",returnBegin: !0,contains: [a.TITLE_MODE]}]}]}
    }), a.registerLanguage("css", function(a) {
        var b = "[a-zA-Z-][a-zA-Z0-9_-]*", c = {className: "function",begin: b + "\\(",returnBegin: !0,excludeEnd: !0,end: "\\("};
        return {case_insensitive: !0,illegal: "[=/|']",contains: [a.C_BLOCK_COMMENT_MODE, {className: "id",begin: "\\#[A-Za-z0-9_-]+"}, {className: "class",begin: "\\.[A-Za-z0-9_-]+",relevance: 0}, {className: "attr_selector",begin: "\\[",end: "\\]",illegal: "$"}, {className: "pseudo",begin: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"}, {className: "at_rule",begin: "@(font-face|page)",lexemes: "[a-z-]+",keywords: "font-face page"}, {className: "at_rule",begin: "@",end: "[{;]",contains: [{className: "keyword",begin: /\S+/}, {begin: /\s/,endsWithParent: !0,excludeEnd: !0,relevance: 0,contains: [c, a.APOS_STRING_MODE, a.QUOTE_STRING_MODE, a.CSS_NUMBER_MODE]}]}, {className: "tag",begin: b,relevance: 0}, {className: "rules",begin: "{",end: "}",illegal: "[^\\s]",relevance: 0,contains: [a.C_BLOCK_COMMENT_MODE, {className: "rule",begin: "[^\\s]",returnBegin: !0,end: ";",endsWithParent: !0,contains: [{className: "attribute",begin: "[A-Z\\_\\.\\-]+",end: ":",excludeEnd: !0,illegal: "[^\\s]",starts: {className: "value",endsWithParent: !0,excludeEnd: !0,contains: [c, a.CSS_NUMBER_MODE, a.QUOTE_STRING_MODE, a.APOS_STRING_MODE, a.C_BLOCK_COMMENT_MODE, {className: "hexcolor",begin: "#[0-9A-Fa-f]+"}, {className: "important",begin: "!important"}]}}]}]}]}
    }), a.registerLanguage("go", function(a) {
        var b = {keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",constant: "true false iota nil",typename: "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",built_in: "append cap close complex copy imag len make new panic print println real recover delete"};
        return {aliases: ["golang"],keywords: b,illegal: "</",contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.QUOTE_STRING_MODE, {className: "string",begin: "'",end: "[^\\\\]'"}, {className: "string",begin: "`",end: "`"}, {className: "number",begin: "[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?",relevance: 0}, a.C_NUMBER_MODE]}
    }), a.registerLanguage("http", function() {
        return {illegal: "\\S",contains: [{className: "status",begin: "^HTTP/[0-9\\.]+",end: "$",contains: [{className: "number",begin: "\\b\\d{3}\\b"}]}, {className: "request",begin: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",returnBegin: !0,end: "$",contains: [{className: "string",begin: " ",end: " ",excludeBegin: !0,excludeEnd: !0}]}, {className: "attribute",begin: "^\\w",end: ": ",excludeEnd: !0,illegal: "\\n|\\s|=",starts: {className: "string",end: "$"}}, {begin: "\\n\\n",starts: {subLanguage: "",endsWithParent: !0}}]}
    }), a.registerLanguage("ini", function(a) {
        return {case_insensitive: !0,illegal: /\S/,contains: [{className: "comment",begin: ";",end: "$"}, {className: "title",begin: "^\\[",end: "\\]"}, {className: "setting",begin: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",end: "$",contains: [{className: "value",endsWithParent: !0,keywords: "on off true false yes no",contains: [a.QUOTE_STRING_MODE, a.NUMBER_MODE],relevance: 0}]}]}
    }), a.registerLanguage("java", function(a) {
        var b = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
        return {aliases: ["jsp"],keywords: b,illegal: /<\//,contains: [{className: "javadoc",begin: "/\\*\\*",end: "\\*/",contains: [{className: "javadoctag",begin: "(^|\\s)@[A-Za-z]+"}],relevance: 10}, a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.APOS_STRING_MODE, a.QUOTE_STRING_MODE, {beginKeywords: "protected public private",end: /[{;=]/,keywords: b,contains: [{className: "class",beginKeywords: "class interface",endsWithParent: !0,excludeEnd: !0,illegal: /[:"<>]/,contains: [{beginKeywords: "extends implements",relevance: 10}, a.UNDERSCORE_TITLE_MODE]}, {begin: a.UNDERSCORE_IDENT_RE + "\\s*\\(",returnBegin: !0,contains: [a.UNDERSCORE_TITLE_MODE]}]}, a.C_NUMBER_MODE, {className: "annotation",begin: "@[A-Za-z]+"}]}
    }), a.registerLanguage("javascript", function(a) {
        return {aliases: ["js"],keywords: {keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal: "true false null undefined NaN Infinity",built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},contains: [{className: "pi",begin: /^\s*('|")use strict('|")/,relevance: 10}, a.APOS_STRING_MODE, a.QUOTE_STRING_MODE, a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.C_NUMBER_MODE, {begin: "(" + a.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",keywords: "return throw case",contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.REGEXP_MODE, {begin: /</,end: />;/,relevance: 0,subLanguage: "xml"}],relevance: 0}, {className: "function",beginKeywords: "function",end: /\{/,excludeEnd: !0,contains: [a.inherit(a.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}), {className: "params",begin: /\(/,end: /\)/,contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE],illegal: /["'\(]/}],illegal: /\[|%/}, {begin: /\$[(.]/}, {begin: "\\." + a.IDENT_RE,relevance: 0}]}
    }), a.registerLanguage("json", function(a) {
        var b = {literal: "true false null"}, c = [a.QUOTE_STRING_MODE, a.C_NUMBER_MODE], d = {className: "value",end: ",",endsWithParent: !0,excludeEnd: !0,contains: c,keywords: b}, e = {begin: "{",end: "}",contains: [{className: "attribute",begin: '\\s*"',end: '"\\s*:\\s*',excludeBegin: !0,excludeEnd: !0,contains: [a.BACKSLASH_ESCAPE],illegal: "\\n",starts: d}],illegal: "\\S"}, f = {begin: "\\[",end: "\\]",contains: [a.inherit(d, {className: null})],illegal: "\\S"};
        return c.splice(c.length, 0, e, f), {contains: c,keywords: b,illegal: "\\S"}
    }), a.registerLanguage("lisp", function(a) {
        var b = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*", c = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?", d = {className: "shebang",begin: "^#!",end: "$"}, e = {className: "literal",begin: "\\b(t{1}|nil)\\b"}, f = {className: "number",variants: [{begin: c,relevance: 0}, {begin: "#b[0-1]+(/[0-1]+)?"}, {begin: "#o[0-7]+(/[0-7]+)?"}, {begin: "#x[0-9a-f]+(/[0-9a-f]+)?"}, {begin: "#c\\(" + c + " +" + c,end: "\\)"}]}, g = a.inherit(a.QUOTE_STRING_MODE, {illegal: null}), h = {className: "comment",begin: ";",end: "$"}, i = {className: "variable",begin: "\\*",end: "\\*"}, j = {className: "keyword",begin: "[:&]" + b}, k = {begin: "\\(",end: "\\)",contains: ["self", e, g, f]}, l = {className: "quoted",contains: [f, g, i, j, k],variants: [{begin: "['`]\\(",end: "\\)"}, {begin: "\\(quote ",end: "\\)",keywords: {title: "quote"}}]}, m = {className: "list",begin: "\\(",end: "\\)"}, n = {endsWithParent: !0,relevance: 0};
        return m.contains = [{className: "title",begin: b}, n], n.contains = [l, m, e, f, g, h, i, j], {illegal: /\S/,contains: [f, d, e, g, h, l, m]}
    }), a.registerLanguage("lua", function(a) {
        var b = "\\[=*\\[", c = "\\]=*\\]", d = {begin: b,end: c,contains: ["self"]}, e = [{className: "comment",begin: "--(?!" + b + ")",end: "$"}, {className: "comment",begin: "--" + b,end: c,contains: [d],relevance: 10}];
        return {lexemes: a.UNDERSCORE_IDENT_RE,keywords: {keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},contains: e.concat([{className: "function",beginKeywords: "function",end: "\\)",contains: [a.inherit(a.TITLE_MODE, {begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}), {className: "params",begin: "\\(",endsWithParent: !0,contains: e}].concat(e)}, a.C_NUMBER_MODE, a.APOS_STRING_MODE, a.QUOTE_STRING_MODE, {className: "string",begin: b,end: c,contains: [d],relevance: 10}])}
    }), a.registerLanguage("makefile", function(a) {
        var b = {className: "variable",begin: /\$\(/,end: /\)/,contains: [a.BACKSLASH_ESCAPE]};
        return {aliases: ["mk", "mak"],contains: [a.HASH_COMMENT_MODE, {begin: /^\w+\s*\W*=/,returnBegin: !0,relevance: 0,starts: {className: "constant",end: /\s*\W*=/,excludeEnd: !0,starts: {end: /$/,relevance: 0,contains: [b]}}}, {className: "title",begin: /^[\w]+:\s*$/}, {className: "phony",begin: /^\.PHONY:/,end: /$/,keywords: ".PHONY",lexemes: /[\.\w]+/}, {begin: /^\t+/,end: /$/,contains: [a.QUOTE_STRING_MODE, b]}]}
    }), a.registerLanguage("xml", function() {
        var a = "[A-Za-z0-9\\._:-]+", b = {begin: /<\?(php)?(?!\w)/,end: /\?>/,subLanguage: "php",subLanguageMode: "continuous"}, c = {endsWithParent: !0,illegal: /</,relevance: 0,contains: [b, {className: "attribute",begin: a,relevance: 0}, {begin: "=",relevance: 0,contains: [{className: "value",variants: [{begin: /"/,end: /"/}, {begin: /'/,end: /'/}, {begin: /[^\s\/>]+/}]}]}]};
        return {aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],case_insensitive: !0,contains: [{className: "doctype",begin: "<!DOCTYPE",end: ">",relevance: 10,contains: [{begin: "\\[",end: "\\]"}]}, {className: "comment",begin: "<!--",end: "-->",relevance: 10}, {className: "cdata",begin: "<\\!\\[CDATA\\[",end: "\\]\\]>",relevance: 10}, {className: "tag",begin: "<style(?=\\s|>|$)",end: ">",keywords: {title: "style"},contains: [c],starts: {end: "</style>",returnEnd: !0,subLanguage: "css"}}, {className: "tag",begin: "<script(?=\\s|>|$)",end: ">",keywords: {title: "script"},contains: [c],starts: {end: "</script>",returnEnd: !0,subLanguage: "javascript"}}, {begin: "<%",end: "%>",subLanguage: "vbscript"}, b, {className: "pi",begin: /<\?\w+/,end: /\?>/,relevance: 10}, {className: "tag",begin: "</?",end: "/?>",contains: [{className: "title",begin: "[^ /><]+",relevance: 0}, c]}]}
    }), a.registerLanguage("markdown", function() {
        return {aliases: ["md", "mkdown", "mkd"],contains: [{className: "header",variants: [{begin: "^#{1,6}",end: "$"}, {begin: "^.+?\\n[=-]{2,}$"}]}, {begin: "<",end: ">",subLanguage: "xml",relevance: 0}, {className: "bullet",begin: "^([*+-]|(\\d+\\.))\\s+"}, {className: "strong",begin: "[*_]{2}.+?[*_]{2}"}, {className: "emphasis",variants: [{begin: "\\*.+?\\*"}, {begin: "_.+?_",relevance: 0}]}, {className: "blockquote",begin: "^>\\s+",end: "$"}, {className: "code",variants: [{begin: "`.+?`"}, {begin: "^( {4}|	)",end: "$",relevance: 0}]}, {className: "horizontal_rule",begin: "^[-\\*]{3,}",end: "$"}, {begin: "\\[.+?\\][\\(\\[].+?[\\)\\]]",returnBegin: !0,contains: [{className: "link_label",begin: "\\[",end: "\\]",excludeBegin: !0,returnEnd: !0,relevance: 0}, {className: "link_url",begin: "\\]\\(",end: "\\)",excludeBegin: !0,excludeEnd: !0}, {className: "link_reference",begin: "\\]\\[",end: "\\]",excludeBegin: !0,excludeEnd: !0}],relevance: 10}, {begin: "^\\[.+\\]:",end: "$",returnBegin: !0,contains: [{className: "link_reference",begin: "\\[",end: "\\]",excludeBegin: !0,excludeEnd: !0}, {className: "link_url",begin: "\\s",end: "$"}]}]}
    }), a.registerLanguage("nginx", function(a) {
        var b = {className: "variable",variants: [{begin: /\$\d+/}, {begin: /\$\{/,end: /}/}, {begin: "[\\$\\@]" + a.UNDERSCORE_IDENT_RE}]}, c = {endsWithParent: !0,lexemes: "[a-z/_]+",keywords: {built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance: 0,illegal: "=>",contains: [a.HASH_COMMENT_MODE, {className: "string",contains: [a.BACKSLASH_ESCAPE, b],variants: [{begin: /"/,end: /"/}, {begin: /'/,end: /'/}]}, {className: "url",begin: "([a-z]+):/",end: "\\s",endsWithParent: !0,excludeEnd: !0}, {className: "regexp",contains: [a.BACKSLASH_ESCAPE, b],variants: [{begin: "\\s\\^",end: "\\s|{|;",returnEnd: !0}, {begin: "~\\*?\\s+",end: "\\s|{|;",returnEnd: !0}, {begin: "\\*(\\.[a-z\\-]+)+"}, {begin: "([a-z\\-]+\\.)+\\*"}]}, {className: "number",begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"}, {className: "number",begin: "\\b\\d+[kKmMgGdshdwy]*\\b",relevance: 0}, b]};
        return {aliases: ["nginxconf"],contains: [a.HASH_COMMENT_MODE, {begin: a.UNDERSCORE_IDENT_RE + "\\s",end: ";|{",returnBegin: !0,contains: [{className: "title",begin: a.UNDERSCORE_IDENT_RE,starts: c}],relevance: 0}],illegal: "[^\\s\\}]"}
    }), a.registerLanguage("objectivec", function(a) {
        var b = {keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",literal: "false true FALSE TRUE nil YES NO NULL",built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"}, c = /[a-zA-Z@][a-zA-Z0-9_]*/, d = "@interface @class @protocol @implementation";
        return {aliases: ["m", "mm", "objc", "obj-c"],keywords: b,lexemes: c,illegal: "</",contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.C_NUMBER_MODE, a.QUOTE_STRING_MODE, {className: "string",begin: "'",end: "[^\\\\]'",illegal: "[^\\\\][^']"}, {className: "preprocessor",begin: "#import",end: "$",contains: [{className: "title",begin: '"',end: '"'}, {className: "title",begin: "<",end: ">"}]}, {className: "preprocessor",begin: "#",end: "$"}, {className: "class",begin: "(" + d.split(" ").join("|") + ")\\b",end: "({|$)",excludeEnd: !0,keywords: d,lexemes: c,contains: [a.UNDERSCORE_TITLE_MODE]}, {className: "variable",begin: "\\." + a.UNDERSCORE_IDENT_RE,relevance: 0}]}
    }), a.registerLanguage("perl", function(a) {
        var b = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", c = {className: "subst",begin: "[$@]\\{",end: "\\}",keywords: b}, d = {begin: "->{",end: "}"}, e = {className: "variable",variants: [{begin: /\$\d/}, {begin: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/}, {begin: /[\$\%\@\*][^\s\w{]/,relevance: 0}]}, f = {className: "comment",begin: "^(__END__|__DATA__)",end: "\\n$",relevance: 5}, g = [a.BACKSLASH_ESCAPE, c, e], h = [e, a.HASH_COMMENT_MODE, f, {className: "comment",begin: "^\\=\\w",end: "\\=cut",endsWithParent: !0}, d, {className: "string",contains: g,variants: [{begin: "q[qwxr]?\\s*\\(",end: "\\)",relevance: 5}, {begin: "q[qwxr]?\\s*\\[",end: "\\]",relevance: 5}, {begin: "q[qwxr]?\\s*\\{",end: "\\}",relevance: 5}, {begin: "q[qwxr]?\\s*\\|",end: "\\|",relevance: 5}, {begin: "q[qwxr]?\\s*\\<",end: "\\>",relevance: 5}, {begin: "qw\\s+q",end: "q",relevance: 5}, {begin: "'",end: "'",contains: [a.BACKSLASH_ESCAPE]}, {begin: '"',end: '"'}, {begin: "`",end: "`",contains: [a.BACKSLASH_ESCAPE]}, {begin: "{\\w+}",contains: [],relevance: 0}, {begin: "-?\\w+\\s*\\=\\>",contains: [],relevance: 0}]}, {className: "number",begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance: 0}, {begin: "(\\/\\/|" + a.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords: "split return print reverse grep",relevance: 0,contains: [a.HASH_COMMENT_MODE, f, {className: "regexp",begin: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",relevance: 10}, {className: "regexp",begin: "(m|qr)?/",end: "/[a-z]*",contains: [a.BACKSLASH_ESCAPE],relevance: 0}]}, {className: "sub",beginKeywords: "sub",end: "(\\s*\\(.*?\\))?[;{]",relevance: 5}, {className: "operator",begin: "-\\w\\b",relevance: 0}];
        return c.contains = h, d.contains = h, {aliases: ["pl"],keywords: b,contains: h}
    }), a.registerLanguage("php", function(a) {
        var b = {className: "variable",begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"}, c = {className: "preprocessor",begin: /<\?(php)?|\?>/}, d = {className: "string",contains: [a.BACKSLASH_ESCAPE, c],variants: [{begin: 'b"',end: '"'}, {begin: "b'",end: "'"}, a.inherit(a.APOS_STRING_MODE, {illegal: null}), a.inherit(a.QUOTE_STRING_MODE, {illegal: null})]}, e = {variants: [a.BINARY_NUMBER_MODE, a.C_NUMBER_MODE]};
        return {aliases: ["php3", "php4", "php5", "php6"],case_insensitive: !0,keywords: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",contains: [a.C_LINE_COMMENT_MODE, a.HASH_COMMENT_MODE, {className: "comment",begin: "/\\*",end: "\\*/",contains: [{className: "phpdoc",begin: "\\s@[A-Za-z]+"}, c]}, {className: "comment",begin: "__halt_compiler.+?;",endsWithParent: !0,keywords: "__halt_compiler",lexemes: a.UNDERSCORE_IDENT_RE}, {className: "string",begin: "<<<['\"]?\\w+['\"]?$",end: "^\\w+;",contains: [a.BACKSLASH_ESCAPE]}, c, b, {className: "function",beginKeywords: "function",end: /[;{]/,excludeEnd: !0,illegal: "\\$|\\[|%",contains: [a.UNDERSCORE_TITLE_MODE, {className: "params",begin: "\\(",end: "\\)",contains: ["self", b, a.C_BLOCK_COMMENT_MODE, d, e]}]}, {className: "class",beginKeywords: "class interface",end: "{",excludeEnd: !0,illegal: /[:\(\$"]/,contains: [{beginKeywords: "extends implements",relevance: 10}, a.UNDERSCORE_TITLE_MODE]}, {beginKeywords: "namespace",end: ";",illegal: /[\.']/,contains: [a.UNDERSCORE_TITLE_MODE]}, {beginKeywords: "use",end: ";",contains: [a.UNDERSCORE_TITLE_MODE]}, {begin: "=>"}, d, e]}
    }), a.registerLanguage("python", function(a) {
        var b = {className: "prompt",begin: /^(>>>|\.\.\.) /}, c = {className: "string",contains: [a.BACKSLASH_ESCAPE],variants: [{begin: /(u|b)?r?'''/,end: /'''/,contains: [b],relevance: 10}, {begin: /(u|b)?r?"""/,end: /"""/,contains: [b],relevance: 10}, {begin: /(u|r|ur)'/,end: /'/,relevance: 10}, {begin: /(u|r|ur)"/,end: /"/,relevance: 10}, {begin: /(b|br)'/,end: /'/}, {begin: /(b|br)"/,end: /"/}, a.APOS_STRING_MODE, a.QUOTE_STRING_MODE]}, d = {className: "number",relevance: 0,variants: [{begin: a.BINARY_NUMBER_RE + "[lLjJ]?"}, {begin: "\\b(0o[0-7]+)[lLjJ]?"}, {begin: a.C_NUMBER_RE + "[lLjJ]?"}]}, e = {className: "params",begin: /\(/,end: /\)/,contains: ["self", b, d, c]}, f = {end: /:/,illegal: /[${=;\n]/,contains: [a.UNDERSCORE_TITLE_MODE, e]};
        return {aliases: ["py", "gyp"],keywords: {keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in: "Ellipsis NotImplemented"},illegal: /(<\/|->|\?)/,contains: [b, d, c, a.HASH_COMMENT_MODE, a.inherit(f, {className: "function",beginKeywords: "def",relevance: 10}), a.inherit(f, {className: "class",beginKeywords: "class"}), {className: "decorator",begin: /@/,end: /$/}, {begin: /\b(print|exec)\(/}]}
    }), a.registerLanguage("ruby", function(a) {
        var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", c = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", d = {className: "yardoctag",begin: "@[A-Za-z]+"}, e = {className: "comment",variants: [{begin: "#",end: "$",contains: [d]}, {begin: "^\\=begin",end: "^\\=end",contains: [d],relevance: 10}, {begin: "^__END__",end: "\\n$"}]}, f = {className: "subst",begin: "#\\{",end: "}",keywords: c}, g = {className: "string",contains: [a.BACKSLASH_ESCAPE, f],variants: [{begin: /'/,end: /'/}, {begin: /"/,end: /"/}, {begin: "%[qw]?\\(",end: "\\)"}, {begin: "%[qw]?\\[",end: "\\]"}, {begin: "%[qw]?{",end: "}"}, {begin: "%[qw]?<",end: ">",relevance: 10}, {begin: "%[qw]?/",end: "/",relevance: 10}, {begin: "%[qw]?%",end: "%",relevance: 10}, {begin: "%[qw]?-",end: "-",relevance: 10}, {begin: "%[qw]?\\|",end: "\\|",relevance: 10}, {begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]}, h = {className: "params",begin: "\\(",end: "\\)",keywords: c}, i = [g, e, {className: "class",beginKeywords: "class module",end: "$|;",illegal: /=/,contains: [a.inherit(a.TITLE_MODE, {begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}), {className: "inheritance",begin: "<\\s*",contains: [{className: "parent",begin: "(" + a.IDENT_RE + "::)?" + a.IDENT_RE}]}, e]}, {className: "function",beginKeywords: "def",end: " |$|;",relevance: 0,contains: [a.inherit(a.TITLE_MODE, {begin: b}), h, e]}, {className: "constant",begin: "(::)?(\\b[A-Z]\\w*(::)?)+",relevance: 0}, {className: "symbol",begin: ":",contains: [g, {begin: b}],relevance: 0}, {className: "symbol",begin: a.UNDERSCORE_IDENT_RE + "(\\!|\\?)?:",relevance: 0}, {className: "number",begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance: 0}, {className: "variable",begin: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {begin: "(" + a.RE_STARTERS_RE + ")\\s*",contains: [e, {className: "regexp",contains: [a.BACKSLASH_ESCAPE, f],illegal: /\n/,variants: [{begin: "/",end: "/[a-z]*"}, {begin: "%r{",end: "}[a-z]*"}, {begin: "%r\\(",end: "\\)[a-z]*"}, {begin: "%r!",end: "![a-z]*"}, {begin: "%r\\[",end: "\\][a-z]*"}]}],relevance: 0}];
        return f.contains = i, h.contains = i, {aliases: ["rb", "gemspec", "podspec", "thor"],keywords: c,contains: i}
    }), a.registerLanguage("scala", function(a) {
        var b = {className: "annotation",begin: "@[A-Za-z]+"}, c = {className: "string",begin: 'u?r?"""',end: '"""',relevance: 10}, d = {className: "symbol",begin: "'\\w[\\w\\d_]*(?!')"};
        return {keywords: "type yield lazy override def with val var false true sealed abstract private trait object null if for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws",contains: [{className: "javadoc",begin: "/\\*\\*",end: "\\*/",contains: [{className: "javadoctag",begin: "@[A-Za-z]+"}],relevance: 10}, a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, c, a.QUOTE_STRING_MODE, d, {className: "class",begin: "((case )?class |object |trait )",end: "({|$)",excludeEnd: !0,illegal: ":",keywords: "case class trait object",contains: [{beginKeywords: "extends with",relevance: 10}, a.UNDERSCORE_TITLE_MODE, {className: "params",begin: "\\(",end: "\\)",contains: [a.QUOTE_STRING_MODE, c, b]}]}, a.C_NUMBER_MODE, b]}
    }), a.registerLanguage("scss", function(a) {
        {
            var b = "[a-zA-Z-][a-zA-Z0-9_-]*", c = {className: "variable",begin: "(\\$" + b + ")\\b"}, d = {className: "function",begin: b + "\\(",returnBegin: !0,excludeEnd: !0,end: "\\("}, e = {className: "hexcolor",begin: "#[0-9A-Fa-f]+"};
            ({className: "attribute",begin: "[A-Z\\_\\.\\-]+",end: ":",excludeEnd: !0,illegal: "[^\\s]",starts: {className: "value",endsWithParent: !0,excludeEnd: !0,contains: [d, e, a.CSS_NUMBER_MODE, a.QUOTE_STRING_MODE, a.APOS_STRING_MODE, a.C_BLOCK_COMMENT_MODE, {className: "important",begin: "!important"}]}})
        }
        return {case_insensitive: !0,illegal: "[=/|']",contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, d, {className: "id",begin: "\\#[A-Za-z0-9_-]+",relevance: 0}, {className: "class",begin: "\\.[A-Za-z0-9_-]+",relevance: 0}, {className: "attr_selector",begin: "\\[",end: "\\]",illegal: "$"}, {className: "tag",begin: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance: 0}, {className: "pseudo",begin: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"}, {className: "pseudo",begin: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"}, c, {className: "attribute",begin: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal: "[^\\s]"}, {className: "value",begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"}, {className: "value",begin: ":",end: ";",contains: [d, c, e, a.CSS_NUMBER_MODE, a.QUOTE_STRING_MODE, a.APOS_STRING_MODE, {className: "important",begin: "!important"}]}, {className: "at_rule",begin: "@",end: "[{;]",keywords: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",contains: [d, c, a.QUOTE_STRING_MODE, a.APOS_STRING_MODE, e, a.CSS_NUMBER_MODE, {className: "preprocessor",begin: "\\s[A-Za-z0-9_.-]+",relevance: 0}]}]}
    }), a.registerLanguage("sql", function(a) {
        return {case_insensitive: !0,illegal: /[<>]/,contains: [{className: "operator",beginKeywords: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",end: /;/,endsWithParent: !0,keywords: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binary binlog bit bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char char_length character character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate dec decimal declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract false fast fetch field fields find_in_set first first_value float floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr int integer intersect interval into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now null nullif number numeric nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read real references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts smallint snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim true truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp varchar variables variance varp varying version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",contains: [{className: "string",begin: "'",end: "'",contains: [a.BACKSLASH_ESCAPE, {begin: "''"}]}, {className: "string",begin: '"',end: '"',contains: [a.BACKSLASH_ESCAPE, {begin: '""'}]}, {className: "string",begin: "`",end: "`",contains: [a.BACKSLASH_ESCAPE]}, a.C_BLOCK_COMMENT_MODE, a.C_NUMBER_MODE]}, a.C_BLOCK_COMMENT_MODE, {className: "comment",begin: "--",end: "$"}]}
    }), a.registerLanguage("vim", function(a) {
        return {lexemes: /[!#@\w]+/,keywords: {keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw d|0 delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu g|0 go gr grepa gu gv ha h|0 helpf helpg helpt hi hid his i|0 ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs n|0 new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf q|0 quita qa r|0 rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv s|0 sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync t|0 tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up v|0 ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",built_in: "abs acos add and append argc argidx argv asin atan atan2 browse browsedir bufexists buflisted bufloaded bufname bufnr bufwinnr byte2line byteidx call ceil changenr char2nr cindent clearmatches col complete complete_add complete_check confirm copy cos cosh count cscope_connection cursor deepcopy delete did_filetype diff_filler diff_hlID empty escape eval eventhandler executable exists exp expand extend feedkeys filereadable filewritable filter finddir findfile float2nr floor fmod fnameescape fnamemodify foldclosed foldclosedend foldlevel foldtext foldtextresult foreground function garbagecollect get getbufline getbufvar getchar getcharmod getcmdline getcmdpos getcmdtype getcwd getfontname getfperm getfsize getftime getftype getline getloclist getmatches getpid getpos getqflist getreg getregtype gettabvar gettabwinvar getwinposx getwinposy getwinvar glob globpath has has_key haslocaldir hasmapto histadd histdel histget histnr hlexists hlID hostname iconv indent index input inputdialog inputlist inputrestore inputsave inputsecret insert invert isdirectory islocked items join keys len libcall libcallnr line line2byte lispindent localtime log log10 luaeval map maparg mapcheck match matchadd matcharg matchdelete matchend matchlist matchstr max min mkdir mode mzeval nextnonblank nr2char or pathshorten pow prevnonblank printf pumvisible py3eval pyeval range readfile reltime reltimestr remote_expr remote_foreground remote_peek remote_read remote_send remove rename repeat resolve reverse round screenattr screenchar screencol screenrow search searchdecl searchpair searchpairpos searchpos server2client serverlist setbufvar setcmdpos setline setloclist setmatches setpos setqflist setreg settabvar settabwinvar setwinvar sha256 shellescape shiftwidth simplify sin sinh sort soundfold spellbadword spellsuggest split sqrt str2float str2nr strchars strdisplaywidth strftime stridx string strlen strpart strridx strtrans strwidth submatch substitute synconcealed synID synIDattr synIDtrans synstack system tabpagebuflist tabpagenr tabpagewinnr tagfiles taglist tan tanh tempname tolower toupper tr trunc type undofile undotree values virtcol visualmode wildmenumode winbufnr wincol winheight winline winnr winrestcmd winrestview winsaveview winwidth writefile xor"},illegal: /[{:]/,contains: [a.NUMBER_MODE, a.APOS_STRING_MODE, {className: "string",begin: /"((\\")|[^"\n])*("|\n)/}, {className: "variable",begin: /[bwtglsav]:[\w\d_]*/}, {className: "function",beginKeywords: "function function!",end: "$",relevance: 0,contains: [a.TITLE_MODE, {className: "params",begin: "\\(",end: "\\)"}]}]}
    }), a
}), function(a) {
    function b() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function c(b, c) {
        var d, e = a(b).data(), f = {}, g = new RegExp("^" + c.toLowerCase() + "([A-Z])"), c = new RegExp("^" + c.toLowerCase());
        for (var h in e)
            c.test(h) && (d = h.replace(g, function(a, b) {
                return b.toLowerCase()
            }), f[d] = e[h]);
        return f
    }
    function d(b) {
        var c = {};
        if (k[b] || (b = b.split("-")[0], k[b])) {
            var d = k[b];
            return a.each(j, function(a, b) {
                b in d && (c[b] = d[b])
            }), c
        }
    }
    var e = a(window), f = function(b, c) {
        this._process_options(c), this.element = a(b), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = a(l.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(a, b) {
            return parseInt(b, 10) + 1
        }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    };
    f.prototype = {constructor: f,_process_options: function(b) {
        this._o = a.extend({}, this._o, b);
        var c = this.o = a.extend({}, this._o), d = c.language;
        switch (k[d] || (d = d.split("-")[0], k[d] || (d = i.language)), c.language = d, c.startView) {
            case 2:
            case "decade":
                c.startView = 2;
                break;
            case 1:
            case "year":
                c.startView = 1;
                break;
            default:
                c.startView = 0
        }
        switch (c.minViewMode) {
            case 1:
            case "months":
                c.minViewMode = 1;
                break;
            case 2:
            case "years":
                c.minViewMode = 2;
                break;
            default:
                c.minViewMode = 0
        }
        c.startView = Math.max(c.startView, c.minViewMode), c.weekStart %= 7, c.weekEnd = (c.weekStart + 6) % 7;
        var e = l.parseFormat(c.format);
        c.startDate !== -1 / 0 && (c.startDate = c.startDate ? c.startDate instanceof Date ? this._local_to_utc(this._zero_time(c.startDate)) : l.parseDate(c.startDate, e, c.language) : -1 / 0), 1 / 0 !== c.endDate && (c.endDate = c.endDate ? c.endDate instanceof Date ? this._local_to_utc(this._zero_time(c.endDate)) : l.parseDate(c.endDate, e, c.language) : 1 / 0), c.daysOfWeekDisabled = c.daysOfWeekDisabled || [], a.isArray(c.daysOfWeekDisabled) || (c.daysOfWeekDisabled = c.daysOfWeekDisabled.split(/[,\s]*/)), c.daysOfWeekDisabled = a.map(c.daysOfWeekDisabled, function(a) {
            return parseInt(a, 10)
        });
        var f = String(c.orientation).toLowerCase().split(/\s+/g), g = c.orientation.toLowerCase();
        if (f = a.grep(f, function(a) {
            return /^auto|left|right|top|bottom$/.test(a)
        }), c.orientation = {x: "auto",y: "auto"}, g && "auto" !== g)
            if (1 === f.length)
                switch (f[0]) {
                    case "top":
                    case "bottom":
                        c.orientation.y = f[0];
                        break;
                    case "left":
                    case "right":
                        c.orientation.x = f[0]
                }
            else
                g = a.grep(f, function(a) {
                    return /^left|right$/.test(a)
                }), c.orientation.x = g[0] || "auto", g = a.grep(f, function(a) {
                    return /^top|bottom$/.test(a)
                }), c.orientation.y = g[0] || "auto";
        else
            ;
    },_events: [],_secondaryEvents: [],_applyEvents: function(a) {
        for (var b, c, d = 0; d < a.length; d++)
            b = a[d][0], c = a[d][1], b.on(c)
    },_unapplyEvents: function(a) {
        for (var b, c, d = 0; d < a.length; d++)
            b = a[d][0], c = a[d][1], b.off(c)
    },_buildEvents: function() {
        this.isInput ? this._events = [[this.element, {focus: a.proxy(this.show, this),keyup: a.proxy(this.update, this),keydown: a.proxy(this.keydown, this)}]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), {focus: a.proxy(this.show, this),keyup: a.proxy(this.update, this),keydown: a.proxy(this.keydown, this)}], [this.component, {click: a.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: a.proxy(this.show, this)}]], this._secondaryEvents = [[this.picker, {click: a.proxy(this.click, this)}], [a(window), {resize: a.proxy(this.place, this)}], [a(document), {"mousedown touchstart": a.proxy(function(a) {
            this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.hide()
        }, this)}]]
    },_attachEvents: function() {
        this._detachEvents(), this._applyEvents(this._events)
    },_detachEvents: function() {
        this._unapplyEvents(this._events)
    },_attachSecondaryEvents: function() {
        this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
    },_detachSecondaryEvents: function() {
        this._unapplyEvents(this._secondaryEvents)
    },_trigger: function(b, c) {
        var d = c || this.date, e = this._utc_to_local(d);
        this.element.trigger({type: b,date: e,format: a.proxy(function(a) {
            var b = a || this.o.format;
            return l.formatDate(d, b, this.o.language)
        }, this)})
    },show: function(a) {
        this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), this._attachSecondaryEvents(), a && a.preventDefault(), this._trigger("show")
    },hide: function() {
        this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
    },remove: function() {
        this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
    },_utc_to_local: function(a) {
        return new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
    },_local_to_utc: function(a) {
        return new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
    },_zero_time: function(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate())
    },_zero_utc_time: function(a) {
        return new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
    },getDate: function() {
        return this._utc_to_local(this.getUTCDate())
    },getUTCDate: function() {
        return this.date
    },setDate: function(a) {
        this.setUTCDate(this._local_to_utc(a))
    },setUTCDate: function(a) {
        this.date = a, this.setValue()
    },setValue: function() {
        var a = this.getFormattedDate();
        this.isInput ? this.element.val(a).change() : this.component && this.element.find("input").val(a).change()
    },getFormattedDate: function(a) {
        return void 0 === a && (a = this.o.format), l.formatDate(this.date, a, this.o.language)
    },setStartDate: function(a) {
        this._process_options({startDate: a}), this.update(), this.updateNavArrows()
    },setEndDate: function(a) {
        this._process_options({endDate: a}), this.update(), this.updateNavArrows()
    },setDaysOfWeekDisabled: function(a) {
        this._process_options({daysOfWeekDisabled: a}), this.update(), this.updateNavArrows()
    },place: function() {
        if (!this.isInline) {
            var b = this.picker.outerWidth(), c = this.picker.outerHeight(), d = 10, f = e.width(), g = e.height(), h = e.scrollTop(), i = parseInt(this.element.parents().filter(function() {
                var b = a(this).css("z-index");
                return "auto" != b && "0" != b
            }).first().css("z-index"), 10) + 100, j = this.component ? this.component.parent().offset() : this.element.offset(), k = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1), l = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), m = j.left, n = j.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (m -= b - l)) : (this.picker.addClass("datepicker-orient-left"), j.left < 0 ? m -= j.left - d : j.left + b > f && (m = f - b - d));
            var o, p, q = this.o.orientation.y;
            "auto" === q && (o = -h + j.top - c, p = h + g - (j.top + k + c), q = Math.max(o, p) === p ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? n += k : n -= c + parseInt(this.picker.css("padding-top"), 10), this.picker.css({top: n,left: m,zIndex: i})
        }
    },_allow_update: !0,update: function() {
        if (this._allow_update) {
            var a, b = new Date(this.date), c = !1;
            arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (a = arguments[0], a instanceof Date && (a = this._local_to_utc(a)), c = !0) : (a = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = l.parseDate(a, this.o.format, this.o.language), c ? this.setValue() : a ? b.getTime() !== this.date.getTime() && this._trigger("changeDate") : this._trigger("clearDate"), this.date < this.o.startDate ? (this.viewDate = new Date(this.o.startDate), this.date = new Date(this.o.startDate)) : this.date > this.o.endDate ? (this.viewDate = new Date(this.o.endDate), this.date = new Date(this.o.endDate)) : (this.viewDate = new Date(this.date), this.date = new Date(this.date)), this.fill()
        }
    },fillDow: function() {
        var a = this.o.weekStart, b = "<tr>";
        if (this.o.calendarWeeks) {
            var c = '<th class="cw">&nbsp;</th>';
            b += c, this.picker.find(".datepicker-days thead tr:first-child").prepend(c)
        }
        for (; a < this.o.weekStart + 7; )
            b += '<th class="dow">' + k[this.o.language].daysMin[a++ % 7] + "</th>";
        b += "</tr>", this.picker.find(".datepicker-days thead").append(b)
    },fillMonths: function() {
        for (var a = "", b = 0; 12 > b; )
            a += '<span class="month">' + k[this.o.language].monthsShort[b++] + "</span>";
        this.picker.find(".datepicker-months td").html(a)
    },setRange: function(b) {
        b && b.length ? this.range = a.map(b, function(a) {
            return a.valueOf()
        }) : delete this.range, this.fill()
    },getClassNames: function(b) {
        var c = [], d = this.viewDate.getUTCFullYear(), e = this.viewDate.getUTCMonth(), f = this.date.valueOf(), g = new Date;
        return b.getUTCFullYear() < d || b.getUTCFullYear() == d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() == d && b.getUTCMonth() > e) && c.push("new"), this.o.todayHighlight && b.getUTCFullYear() == g.getFullYear() && b.getUTCMonth() == g.getMonth() && b.getUTCDate() == g.getDate() && c.push("today"), b.valueOf() == f && c.push("active"), (b.valueOf() < this.o.startDate || b.valueOf() > this.o.endDate || -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)) && c.push("disabled"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 != a.inArray(b.valueOf(), this.range) && c.push("selected")), c
    },fill: function() {
        {
            var c, d = new Date(this.viewDate), e = d.getUTCFullYear(), f = d.getUTCMonth(), g = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0, h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0, i = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0, j = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0;
            this.date && this.date.valueOf()
        }
        this.picker.find(".datepicker-days thead th.datepicker-switch").text(k[this.o.language].months[f] + " " + e), this.picker.find("tfoot th.today").text(k[this.o.language].today).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.tomorrow").text(k[this.o.language].tomorrow).toggle(this.o.tomorrowBtn !== !1), this.picker.find("tfoot th.someday").text(k[this.o.language].someday).toggle(this.o.somedayBtn !== !1), this.updateNavArrows(), this.fillMonths();
        var m, n = b(e, f, 1, 0, 0, 0, 0);
        m = 0 === f ? l.getDaysInMonth(e - 1, 11) : l.getDaysInMonth(e, f - 1);
        var o = l.getDaysInMonth(e, f), p = b(e, f, o, 0, 0, 0, 0);
        n.getUTCDay() > 0 && (n = b(e, f - 1, m - n.getUTCDay() + 1, 0, 0, 0, 0)), p.getUTCDay() < 6 && (p = b(e, f + 1, 6 - p.getUTCDay(), 0, 0, 0, 0));
        for (var q, r = n, s = []; r.valueOf() <= p.valueOf(); ) {
            if (r.getUTCDay() == this.o.weekStart && (s.push("<tr>"), this.o.calendarWeeks)) {
                var t = new Date(+r + (this.o.weekStart - r.getUTCDay() - 7) % 7 * 864e5), u = new Date(+t + (11 - t.getUTCDay()) % 7 * 864e5), v = new Date(+(v = b(u.getUTCFullYear(), 0, 1)) + (11 - v.getUTCDay()) % 7 * 864e5), w = (u - v) / 864e5 / 7 + 1;
                s.push('<td class="cw">' + w + "</td>")
            }
            if (q = this.getClassNames(r), q.push("day"), this.o.beforeShowDay !== a.noop) {
                var x = this.o.beforeShowDay(this._utc_to_local(r));
                void 0 === x ? x = {} : "boolean" == typeof x ? x = {enabled: x} : "string" == typeof x && (x = {classes: x}), x.enabled === !1 && q.push("disabled"), x.classes && (q = q.concat(x.classes.split(/\s+/))), x.tooltip && (c = x.tooltip)
            }
            q = a.unique(q), s.push('<td class="' + q.join(" ") + '"' + (c ? ' title="' + c + '"' : "") + ">" + r.getUTCDate() + "</td>"), r.getUTCDay() == this.o.weekEnd && s.push("</tr>"), r.setUTCDate(r.getUTCDate() + 1)
        }
        this.picker.find(".datepicker-days tbody").empty().append(s.join(""));
        var y = this.date && this.date.getUTCFullYear(), z = this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");
        y && y == e && z.eq(this.date.getUTCMonth()).addClass("active"), (g > e || e > i) && z.addClass("disabled"), e == g && z.slice(0, h).addClass("disabled"), e == i && z.slice(j + 1).addClass("disabled"), s = "", e = 10 * parseInt(e / 10, 10);
        var A = this.picker.find(".datepicker-years").find("th:eq(1)").text(e + "-" + (e + 9)).end().find("td");
        e -= 1;
        for (var B = -1; 11 > B; B++)
            s += '<span class="year' + (-1 == B ? " old" : 10 == B ? " new" : "") + (y == e ? " active" : "") + (g > e || e > i ? " disabled" : "") + '">' + e + "</span>", e += 1;
        A.html(s)
    },updateNavArrows: function() {
        if (this._allow_update) {
            var a = new Date(this.viewDate), b = a.getUTCFullYear(), c = a.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? {visibility: "hidden"} : {visibility: "visible"}), this.picker.find(".next").css(1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? {visibility: "hidden"} : {visibility: "visible"});
                    break;
                case 1:
                case 2:
                    this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() ? {visibility: "hidden"} : {visibility: "visible"}), this.picker.find(".next").css(1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() ? {visibility: "hidden"} : {visibility: "visible"})
            }
        }
    },click: function(c) {
        c.preventDefault(), c.stopPropagation();
        var d = a(c.target).closest("span, td, th");
        if (1 == d.length)
            switch (d[0].nodeName.toLowerCase()) {
                case "th":
                    switch (d[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var e = l.modes[this.viewMode].navStep * ("prev" == d[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, e), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, e), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill(), this.place();
                            break;
                        case "today":
                            var f = new Date;
                            f = b(f.getFullYear(), f.getMonth(), f.getDate(), 0, 0, 0), this.showMode(-2);
                            var g = "linked" == this.o.todayBtn ? null : "view";
                            this._setDate(f, g);
                            break;
                        case "tomorrow":
                            var f = new Date(Date.now() + 864e5);
                            f = b(f.getFullYear(), f.getMonth(), f.getDate(), 0, 0, 0), this.showMode(-2), this._setDate(f, "date");
                            break;
                        case "someday":
                            this.showMode(-2), this.element.trigger({type: "changeDate",date: null})
                    }
                    break;
                case "span":
                    if (!d.is(".disabled")) {
                        if (this.viewDate.setUTCDate(1), d.is(".month")) {
                            var h = 1, i = d.parent().find("span").index(d), j = this.viewDate.getUTCFullYear();
                            this.viewDate.setUTCMonth(i), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(b(j, i, h, 0, 0, 0, 0))
                        } else {
                            var j = parseInt(d.text(), 10) || 0, h = 1, i = 0;
                            this.viewDate.setUTCFullYear(j), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(b(j, i, h, 0, 0, 0, 0))
                        }
                        this.showMode(-1), this.fill()
                    }
                    break;
                case "td":
                    if (d.is(".day") && !d.is(".disabled")) {
                        var h = parseInt(d.text(), 10) || 1, j = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth();
                        d.is(".old") ? 0 === i ? (i = 11, j -= 1) : i -= 1 : d.is(".new") && (11 == i ? (i = 0, j += 1) : i += 1), this._setDate(b(j, i, h, 0, 0, 0, 0))
                    }
            }
    },_setDate: function(a, b) {
        b && "date" != b || (this.date = new Date(a)), b && "view" != b || (this.viewDate = new Date(a)), this.fill(), this.setValue(), this._trigger("changeDate");
        var c;
        this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.change(), !this.o.autoclose || b && "date" != b || this.hide()
    },moveMonth: function(a, b) {
        if (!b)
            return a;
        var c, d, e = new Date(a.valueOf()), f = e.getUTCDate(), g = e.getUTCMonth(), h = Math.abs(b);
        if (b = b > 0 ? 1 : -1, 1 == h)
            d = -1 == b ? function() {
                return e.getUTCMonth() == g
            } : function() {
                return e.getUTCMonth() != c
            }, c = g + b, e.setUTCMonth(c), (0 > c || c > 11) && (c = (c + 12) % 12);
        else {
            for (var i = 0; h > i; i++)
                e = this.moveMonth(e, b);
            c = e.getUTCMonth(), e.setUTCDate(f), d = function() {
                return c != e.getUTCMonth()
            }
        }
        for (; d(); )
            e.setUTCDate(--f), e.setUTCMonth(c);
        return e
    },moveYear: function(a, b) {
        return this.moveMonth(a, 12 * b)
    },dateWithinRange: function(a) {
        return a >= this.o.startDate && a <= this.o.endDate
    },keydown: function(a) {
        if (this.picker.is(":not(:visible)"))
            return void (27 == a.keyCode && this.show());
        var b, c, d, e = !1;
        switch (a.keyCode) {
            case 27:
                this.hide(), a.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.o.keyboardNavigation)
                    break;
                b = 37 == a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b), this._trigger("changeMonth", this.viewDate)) : (c = new Date(this.date), c.setUTCDate(this.date.getUTCDate() + b), d = new Date(this.viewDate), d.setUTCDate(this.viewDate.getUTCDate() + b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
                break;
            case 38:
            case 40:
                if (!this.o.keyboardNavigation)
                    break;
                b = 38 == a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b), this._trigger("changeMonth", this.viewDate)) : (c = new Date(this.date), c.setUTCDate(this.date.getUTCDate() + 7 * b), d = new Date(this.viewDate), d.setUTCDate(this.viewDate.getUTCDate() + 7 * b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
                break;
            case 13:
                this.hide(), a.preventDefault();
                break;
            case 9:
                this.hide()
        }
        if (e) {
            this._trigger("changeDate");
            var f;
            this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change()
        }
    },showMode: function(a) {
        a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + a))), this.picker.find(">div").hide().filter(".datepicker-" + l.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
    }};
    var g = function(b, c) {
        this.element = a(b), this.inputs = a.map(c.inputs, function(a) {
            return a.jquery ? a[0] : a
        }), delete c.inputs, a(this.inputs).datepicker(c).bind("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) {
            return a(b).data("datepicker")
        }), this.updateDates()
    };
    g.prototype = {updateDates: function() {
        this.dates = a.map(this.pickers, function(a) {
            return a.date
        }), this.updateRanges()
    },updateRanges: function() {
        var b = a.map(this.dates, function(a) {
            return a.valueOf()
        });
        a.each(this.pickers, function(a, c) {
            c.setRange(b)
        })
    },dateUpdated: function(b) {
        var c = a(b.target).data("datepicker"), d = c.getUTCDate(), e = a.inArray(b.target, this.inputs), f = this.inputs.length;
        if (-1 != e) {
            if (d < this.dates[e])
                for (; e >= 0 && d < this.dates[e]; )
                    this.pickers[e--].setUTCDate(d);
            else if (d > this.dates[e])
                for (; f > e && d > this.dates[e]; )
                    this.pickers[e++].setUTCDate(d);
            this.updateDates()
        }
    },remove: function() {
        a.map(this.pickers, function(a) {
            a.remove()
        }), delete this.element.data().datepicker
    }};
    var h = a.fn.datepicker;
    a.fn.datepicker = function(b) {
        var e = Array.apply(null, arguments);
        e.shift();
        var h;
        return this.each(function() {
            var j = a(this), k = j.data("datepicker"), l = "object" == typeof b && b;
            if (!k) {
                var m = c(this, "date"), n = a.extend({}, i, m, l), o = d(n.language), p = a.extend({}, i, o, m, l);
                if (j.is(".input-daterange") || p.inputs) {
                    var q = {inputs: p.inputs || j.find("input").toArray()};
                    j.data("datepicker", k = new g(this, a.extend(p, q)))
                } else
                    j.data("datepicker", k = new f(this, p))
            }
            return "string" == typeof b && "function" == typeof k[b] && (h = k[b].apply(k, e), void 0 !== h) ? !1 : void 0
        }), void 0 !== h ? h : this
    };
    var i = a.fn.datepicker.defaults = {autoclose: !1,beforeShowDay: a.noop,calendarWeeks: !1,clearBtn: !1,daysOfWeekDisabled: [],endDate: 1 / 0,forceParse: !0,format: "mm/dd/yyyy",keyboardNavigation: !0,language: "en",minViewMode: 0,orientation: "auto",rtl: !1,startDate: -1 / 0,startView: 0,todayBtn: !1,tomorrowBtn: !1,somedayBtn: !1,todayHighlight: !0,weekStart: 0}, j = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = f;
    var k = a.fn.datepicker.dates = {en: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],today: "Today",tomorrow: "Tomorrow",someday: "Clear"},"zh-CN": {days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],today: "今天",tomorrow: "明天",someday: "清除"},ja: {days: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜", "日曜"],daysShort: ["日", "月", "火", "水", "木", "金", "土", "日"],daysMin: ["日", "月", "火", "水", "木", "金", "土", "日"],months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],today: "今日",tomorrow: "明日",someday: "クリア"}}, l = {modes: [{clsName: "days",navFnc: "Month",navStep: 1}, {clsName: "months",navFnc: "FullYear",navStep: 1}, {clsName: "years",navFnc: "FullYear",navStep: 10}],isLeapYear: function(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    },getDaysInMonth: function(a, b) {
        return [31, l.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    },validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat: function(a) {
        var b = a.replace(this.validParts, "\x00").split("\x00"), c = a.match(this.validParts);
        if (!b || !b.length || !c || 0 === c.length)
            throw new Error("Invalid date format.");
        return {separators: b,parts: c}
    },parseDate: function(c, d, e) {
        if (c instanceof Date)
            return c;
        if ("string" == typeof d && (d = l.parseFormat(d)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(c)) {
            var g, h, i = /([\-+]\d+)([dmwy])/, j = c.match(/([\-+]\d+)([dmwy])/g);
            c = new Date;
            for (var m = 0; m < j.length; m++)
                switch (g = i.exec(j[m]), h = parseInt(g[1], 10), g[2]) {
                    case "d":
                        c.setUTCDate(c.getUTCDate() + h);
                        break;
                    case "m":
                        c = f.prototype.moveMonth.call(f.prototype, c, h);
                        break;
                    case "w":
                        c.setUTCDate(c.getUTCDate() + 7 * h);
                        break;
                    case "y":
                        c = f.prototype.moveYear.call(f.prototype, c, h)
                }
            return b(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate(), 0, 0, 0)
        }
        var n, o, g, j = c && c.match(this.nonpunctuation) || [], c = new Date, p = {}, q = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], r = {yyyy: function(a, b) {
            return a.setUTCFullYear(b)
        },yy: function(a, b) {
            return a.setUTCFullYear(2e3 + b)
        },m: function(a, b) {
            if (isNaN(a))
                return a;
            for (b -= 1; 0 > b; )
                b += 12;
            for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() != b; )
                a.setUTCDate(a.getUTCDate() - 1);
            return a
        },d: function(a, b) {
            return a.setUTCDate(b)
        }};
        r.M = r.MM = r.mm = r.m, r.dd = r.d, c = b(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0);
        var s = d.parts.slice();
        if (j.length != s.length && (s = a(s).filter(function(b, c) {
            return -1 !== a.inArray(c, q)
        }).toArray()), j.length == s.length) {
            for (var m = 0, t = s.length; t > m; m++) {
                if (n = parseInt(j[m], 10), g = s[m], isNaN(n))
                    switch (g) {
                        case "MM":
                            o = a(k[e].months).filter(function() {
                                var a = this.slice(0, j[m].length), b = j[m].slice(0, a.length);
                                return a == b
                            }), n = a.inArray(o[0], k[e].months) + 1;
                            break;
                        case "M":
                            o = a(k[e].monthsShort).filter(function() {
                                var a = this.slice(0, j[m].length), b = j[m].slice(0, a.length);
                                return a == b
                            }), n = a.inArray(o[0], k[e].monthsShort) + 1
                    }
                p[g] = n
            }
            for (var u, v, m = 0; m < q.length; m++)
                v = q[m], v in p && !isNaN(p[v]) && (u = new Date(c), r[v](u, p[v]), isNaN(u) || (c = u))
        }
        return c
    },formatDate: function(b, c, d) {
        "string" == typeof c && (c = l.parseFormat(c));
        var e = {d: b.getUTCDate(),D: k[d].daysShort[b.getUTCDay()],DD: k[d].days[b.getUTCDay()],m: b.getUTCMonth() + 1,M: k[d].monthsShort[b.getUTCMonth()],MM: k[d].months[b.getUTCMonth()],yy: b.getUTCFullYear().toString().substring(2),yyyy: b.getUTCFullYear()};
        e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m;
        for (var b = [], f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++)
            f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
        return b.join("")
    },headTemplate: '<thead><tr><th class="prev"><a class="icon icon-chevron-left"></span></a><th colspan="5" class="datepicker-switch"></th><th class="next"><a class="icon icon-chevron-right"></span></a></tr></thead>',contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate: '<tfoot><tr><th colspan="3" class="today"></th><th colspan="2" class="tomorrow"></th><th colspan="2" class="someday"></th></tr></tfoot>'};
    l.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + l.headTemplate + "<tbody></tbody>" + l.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + l.headTemplate + l.contTemplate + l.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + l.headTemplate + l.contTemplate + l.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = l, a.fn.datepicker.noConflict = function() {
        return a.fn.datepicker = h, this
    }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), c.datepicker("show"))
    }), a(function() {
        a('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery), define("bootstrap-datepicker", function() {
}), SockJS = function() {
    var a = document, b = window, c = {}, d = function() {
    };
    d.prototype.addEventListener = function(a, b) {
        this._listeners || (this._listeners = {}), a in this._listeners || (this._listeners[a] = []);
        var d = this._listeners[a];
        -1 === c.arrIndexOf(d, b) && d.push(b)
    }, d.prototype.removeEventListener = function(a, b) {
        if (this._listeners && a in this._listeners) {
            var d = this._listeners[a], e = c.arrIndexOf(d, b);
            return -1 !== e ? void (d.length > 1 ? this._listeners[a] = d.slice(0, e).concat(d.slice(e + 1)) : delete this._listeners[a]) : void 0
        }
    }, d.prototype.dispatchEvent = function(a) {
        var b = a.type, c = Array.prototype.slice.call(arguments, 0);
        if (this["on" + b] && this["on" + b].apply(this, c), this._listeners && b in this._listeners)
            for (var d = 0; d < this._listeners[b].length; d++)
                this._listeners[b][d].apply(this, c)
    };
    var e = function(a, b) {
        if (this.type = a, "undefined" != typeof b)
            for (var c in b)
                b.hasOwnProperty(c) && (this[c] = b[c])
    };
    e.prototype.toString = function() {
        var a = [];
        for (var b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "function" == typeof c && (c = "[function]"), a.push(b + "=" + c)
            }
        return "SimpleEvent(" + a.join(", ") + ")"
    };
    var f = function(a) {
        var b = this;
        b._events = a || [], b._listeners = {}
    };
    f.prototype.emit = function(a) {
        var b = this;
        if (b._verifyType(a), !b._nuked) {
            var c = Array.prototype.slice.call(arguments, 1);
            if (b["on" + a] && b["on" + a].apply(b, c), a in b._listeners)
                for (var d = 0; d < b._listeners[a].length; d++)
                    b._listeners[a][d].apply(b, c)
        }
    }, f.prototype.on = function(a, b) {
        var c = this;
        c._verifyType(a), c._nuked || (a in c._listeners || (c._listeners[a] = []), c._listeners[a].push(b))
    }, f.prototype._verifyType = function(a) {
        var b = this;
        -1 === c.arrIndexOf(b._events, a) && c.log("Event " + JSON.stringify(a) + " not listed " + JSON.stringify(b._events) + " in " + b)
    }, f.prototype.nuke = function() {
        var a = this;
        a._nuked = !0;
        for (var b = 0; b < a._events.length; b++)
            delete a[a._events[b]];
        a._listeners = {}
    };
    var g = "abcdefghijklmnopqrstuvwxyz0123456789_";
    c.random_string = function(a, b) {
        b = b || g.length;
        var c, d = [];
        for (c = 0; a > c; c++)
            d.push(g.substr(Math.floor(Math.random() * b), 1));
        return d.join("")
    }, c.random_number = function(a) {
        return Math.floor(Math.random() * a)
    }, c.random_number_string = function(a) {
        var b = ("" + (a - 1)).length, d = Array(b + 1).join("0");
        return (d + c.random_number(a)).slice(-b)
    }, c.getOrigin = function(a) {
        a += "/";
        var b = a.split("/").slice(0, 3);
        return b.join("/")
    }, c.isSameOriginUrl = function(a, c) {
        return c || (c = b.location.href), a.split("/").slice(0, 3).join("/") === c.split("/").slice(0, 3).join("/")
    }, c.isSameOriginScheme = function(a, c) {
        return c || (c = b.location.href), a.split(":")[0] === c.split(":")[0]
    }, c.getParentDomain = function(a) {
        if (/^[0-9.]*$/.test(a))
            return a;
        if (/^\[/.test(a))
            return a;
        if (!/[.]/.test(a))
            return a;
        var b = a.split(".").slice(1);
        return b.join(".")
    }, c.objectExtend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    var h = "_jp";
    c.polluteGlobalNamespace = function() {
        h in b || (b[h] = {})
    }, c.closeFrame = function(a, b) {
        return "c" + JSON.stringify([a, b])
    }, c.userSetCode = function(a) {
        return 1e3 === a || a >= 3e3 && 4999 >= a
    }, c.countRTO = function(a) {
        var b;
        return b = a > 100 ? 3 * a : a + 200
    }, c.log = function() {
        b.console && console.log && console.log.apply && console.log.apply(console, arguments)
    }, c.bind = function(a, b) {
        return a.bind ? a.bind(b) : function() {
            return a.apply(b, arguments)
        }
    }, c.flatUrl = function(a) {
        return -1 === a.indexOf("?") && -1 === a.indexOf("#")
    }, c.amendUrl = function(b) {
        var d = a.location;
        if (!b)
            throw new Error("Wrong url for SockJS");
        if (!c.flatUrl(b))
            throw new Error("Only basic urls are supported in SockJS");
        0 === b.indexOf("//") && (b = d.protocol + b), 0 === b.indexOf("/") && (b = d.protocol + "//" + d.host + b), b = b.replace(/[/]+$/, "");
        var e = b.split("/");
        return ("http:" === e[0] && /:80$/.test(e[2]) || "https:" === e[0] && /:443$/.test(e[2])) && (e[2] = e[2].replace(/:(80|443)$/, "")), b = e.join("/")
    }, c.arrIndexOf = function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] === b)
                return c;
        return -1
    }, c.arrSkip = function(a, b) {
        var d = c.arrIndexOf(a, b);
        if (-1 === d)
            return a.slice();
        var e = a.slice(0, d);
        return e.concat(a.slice(d + 1))
    }, c.isArray = Array.isArray || function(a) {
        return {}.toString.call(a).indexOf("Array") >= 0
    }, c.delay = function(a, b) {
        return "function" == typeof a && (b = a, a = 0), setTimeout(b, a)
    };
    var i, j = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, k = {"\x00": "\\u0000","": "\\u0001","": "\\u0002","": "\\u0003","": "\\u0004","": "\\u0005","": "\\u0006","": "\\u0007","\b": "\\b","	": "\\t","\n": "\\n","": "\\u000b","\f": "\\f","\r": "\\r","": "\\u000e","": "\\u000f","": "\\u0010","": "\\u0011","": "\\u0012","": "\\u0013","": "\\u0014","": "\\u0015","": "\\u0016","": "\\u0017","": "\\u0018","": "\\u0019","": "\\u001a","": "\\u001b","": "\\u001c","": "\\u001d","": "\\u001e","": "\\u001f",'"': '\\"',"\\": "\\\\","": "\\u007f","": "\\u0080","": "\\u0081","": "\\u0082","": "\\u0083","": "\\u0084","": "\\u0085","": "\\u0086","": "\\u0087","": "\\u0088","": "\\u0089","": "\\u008a","": "\\u008b","": "\\u008c","": "\\u008d","": "\\u008e","": "\\u008f","": "\\u0090","": "\\u0091","": "\\u0092","": "\\u0093","": "\\u0094","": "\\u0095","": "\\u0096","": "\\u0097","": "\\u0098","": "\\u0099","": "\\u009a","": "\\u009b","": "\\u009c","": "\\u009d","": "\\u009e","": "\\u009f","­": "\\u00ad","؀": "\\u0600","؁": "\\u0601","؂": "\\u0602","؃": "\\u0603","؄": "\\u0604","܏": "\\u070f","឴": "\\u17b4","឵": "\\u17b5","‌": "\\u200c","‍": "\\u200d","‎": "\\u200e","‏": "\\u200f","\u2028": "\\u2028","\u2029": "\\u2029","‪": "\\u202a","‫": "\\u202b","‬": "\\u202c","‭": "\\u202d","‮": "\\u202e"," ": "\\u202f","⁠": "\\u2060","⁡": "\\u2061","⁢": "\\u2062","⁣": "\\u2063","⁤": "\\u2064","⁥": "\\u2065","⁦": "\\u2066","⁧": "\\u2067","⁨": "\\u2068","⁩": "\\u2069","⁪": "\\u206a","⁫": "\\u206b","⁬": "\\u206c","⁭": "\\u206d","⁮": "\\u206e","⁯": "\\u206f","﻿": "\\ufeff","￰": "\\ufff0","￱": "\\ufff1","￲": "\\ufff2","￳": "\\ufff3","￴": "\\ufff4","￵": "\\ufff5","￶": "\\ufff6","￷": "\\ufff7","￸": "\\ufff8","￹": "\\ufff9","￺": "\\ufffa","￻": "\\ufffb","￼": "\\ufffc","�": "\\ufffd","�": "\\ufffe","￿": "\\uffff"}, l = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, m = JSON && JSON.stringify || function(a) {
        return j.lastIndex = 0, j.test(a) && (a = a.replace(j, function(a) {
            return k[a]
        })), '"' + a + '"'
    }, n = function(a) {
        var b, c = {}, d = [];
        for (b = 0; 65536 > b; b++)
            d.push(String.fromCharCode(b));
        return a.lastIndex = 0, d.join("").replace(a, function(a) {
            return c[a] = "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4), ""
        }), a.lastIndex = 0, c
    };
    c.quote = function(a) {
        var b = m(a);
        return l.lastIndex = 0, l.test(b) ? (i || (i = n(l)), b.replace(l, function(a) {
            return i[a]
        })) : b
    };
    var o = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
    c.probeProtocols = function() {
        for (var a = {}, b = 0; b < o.length; b++) {
            var c = o[b];
            a[c] = y[c] && y[c].enabled()
        }
        return a
    }, c.detectProtocols = function(a, b, c) {
        var d = {}, e = [];
        b || (b = o);
        for (var f = 0; f < b.length; f++) {
            var g = b[f];
            d[g] = a[g]
        }
        var h = function(a) {
            var b = a.shift();
            d[b] ? e.push(b) : a.length > 0 && h(a)
        };
        return c.websocket !== !1 && h(["websocket"]), d["xhr-streaming"] && !c.null_origin ? e.push("xhr-streaming") : !d["xdr-streaming"] || c.cookie_needed || c.null_origin ? h(["iframe-eventsource", "iframe-htmlfile"]) : e.push("xdr-streaming"), d["xhr-polling"] && !c.null_origin ? e.push("xhr-polling") : !d["xdr-polling"] || c.cookie_needed || c.null_origin ? h(["iframe-xhr-polling", "jsonp-polling"]) : e.push("xdr-polling"), e
    };
    var p = "_sockjs_global";
    c.createHook = function() {
        var a = "a" + c.random_string(8);
        if (!(p in b)) {
            var d = {};
            b[p] = function(a) {
                return a in d || (d[a] = {id: a,del: function() {
                    delete d[a]
                }}), d[a]
            }
        }
        return b[p](a)
    }, c.attachMessage = function(a) {
        c.attachEvent("message", a)
    }, c.attachEvent = function(c, d) {
        "undefined" != typeof b.addEventListener ? b.addEventListener(c, d, !1) : (a.attachEvent("on" + c, d), b.attachEvent("on" + c, d))
    }, c.detachMessage = function(a) {
        c.detachEvent("message", a)
    }, c.detachEvent = function(c, d) {
        "undefined" != typeof b.addEventListener ? b.removeEventListener(c, d, !1) : (a.detachEvent("on" + c, d), b.detachEvent("on" + c, d))
    };
    var q = {}, r = !1, s = function() {
        for (var a in q)
            q[a](), delete q[a]
    }, t = function() {
        r || (r = !0, s())
    };
    c.attachEvent("unload", t), c.unload_add = function(a) {
        var b = c.random_string(8);
        return q[b] = a, r && c.delay(s), b
    }, c.unload_del = function(a) {
        a in q && delete q[a]
    }, c.createIframe = function(b, d) {
        var e, f, g = a.createElement("iframe"), h = function() {
            clearTimeout(e);
            try {
                g.onload = null
            } catch (a) {
            }
            g.onerror = null
        }, i = function() {
            g && (h(), setTimeout(function() {
                g && g.parentNode.removeChild(g), g = null
            }, 0), c.unload_del(f))
        }, j = function(a) {
            g && (i(), d(a))
        }, k = function(a, b) {
            try {
                g && g.contentWindow && g.contentWindow.postMessage(a, b)
            } catch (c) {
            }
        };
        return g.src = b, g.style.display = "none", g.style.position = "absolute", g.onerror = function() {
            j("onerror")
        }, g.onload = function() {
            clearTimeout(e), e = setTimeout(function() {
                j("onload timeout")
            }, 2e3)
        }, a.body.appendChild(g), e = setTimeout(function() {
            j("timeout")
        }, 15e3), f = c.unload_add(i), {post: k,cleanup: i,loaded: h}
    }, c.createHtmlfile = function(a, d) {
        var e, f, g, i = new ActiveXObject("htmlfile"), j = function() {
            clearTimeout(e)
        }, k = function() {
            i && (j(), c.unload_del(f), g.parentNode.removeChild(g), g = i = null, CollectGarbage())
        }, l = function(a) {
            i && (k(), d(a))
        }, m = function(a, b) {
            try {
                g && g.contentWindow && g.contentWindow.postMessage(a, b)
            } catch (c) {
            }
        };
        i.open(), i.write('<html><script>document.domain="' + document.domain + '";</script></html>'), i.close(), i.parentWindow[h] = b[h];
        var n = i.createElement("div");
        return i.body.appendChild(n), g = i.createElement("iframe"), n.appendChild(g), g.src = a, e = setTimeout(function() {
            l("timeout")
        }, 15e3), f = c.unload_add(k), {post: m,cleanup: k,loaded: j}
    };
    var u = function() {
    };
    u.prototype = new f(["chunk", "finish"]), u.prototype._start = function(a, d, e, f) {
        var g = this;
        try {
            g.xhr = new XMLHttpRequest
        } catch (h) {
        }
        if (!g.xhr)
            try {
                g.xhr = new b.ActiveXObject("Microsoft.XMLHTTP")
            } catch (h) {
            }
        (b.ActiveXObject || b.XDomainRequest) && (d += (-1 === d.indexOf("?") ? "?" : "&") + "t=" + +new Date), g.unload_ref = c.unload_add(function() {
            g._cleanup(!0)
        });
        try {
            g.xhr.open(a, d, !0)
        } catch (i) {
            return g.emit("finish", 0, ""), void g._cleanup()
        }
        if (f && f.no_credentials || (g.xhr.withCredentials = "true"), f && f.headers)
            for (var j in f.headers)
                g.xhr.setRequestHeader(j, f.headers[j]);
        g.xhr.onreadystatechange = function() {
            if (g.xhr) {
                var a = g.xhr;
                switch (a.readyState) {
                    case 3:
                        try {
                            var b = a.status, c = a.responseText
                        } catch (d) {
                        }
                        1223 === b && (b = 204), c && c.length > 0 && g.emit("chunk", b, c);
                        break;
                    case 4:
                        var b = a.status;
                        1223 === b && (b = 204), g.emit("finish", b, a.responseText), g._cleanup(!1)
                }
            }
        }, g.xhr.send(e)
    }, u.prototype._cleanup = function(a) {
        var b = this;
        if (b.xhr) {
            if (c.unload_del(b.unload_ref), b.xhr.onreadystatechange = function() {
            }, a)
                try {
                    b.xhr.abort()
                } catch (d) {
                }
            b.unload_ref = b.xhr = null
        }
    }, u.prototype.close = function() {
        var a = this;
        a.nuke(), a._cleanup(!0)
    };
    var v = c.XHRCorsObject = function() {
        var a = this, b = arguments;
        c.delay(function() {
            a._start.apply(a, b)
        })
    };
    v.prototype = new u;
    var w = c.XHRLocalObject = function(a, b, d) {
        var e = this;
        c.delay(function() {
            e._start(a, b, d, {no_credentials: !0})
        })
    };
    w.prototype = new u;
    var x = c.XDRObject = function(a, b, d) {
        var e = this;
        c.delay(function() {
            e._start(a, b, d)
        })
    };
    x.prototype = new f(["chunk", "finish"]), x.prototype._start = function(a, b, d) {
        var e = this, f = new XDomainRequest;
        b += (-1 === b.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        var g = f.ontimeout = f.onerror = function() {
            e.emit("finish", 0, ""), e._cleanup(!1)
        };
        f.onprogress = function() {
            e.emit("chunk", 200, f.responseText)
        }, f.onload = function() {
            e.emit("finish", 200, f.responseText), e._cleanup(!1)
        }, e.xdr = f, e.unload_ref = c.unload_add(function() {
            e._cleanup(!0)
        });
        try {
            e.xdr.open(a, b), e.xdr.send(d)
        } catch (h) {
            g()
        }
    }, x.prototype._cleanup = function(a) {
        var b = this;
        if (b.xdr) {
            if (c.unload_del(b.unload_ref), b.xdr.ontimeout = b.xdr.onerror = b.xdr.onprogress = b.xdr.onload = null, a)
                try {
                    b.xdr.abort()
                } catch (d) {
                }
            b.unload_ref = b.xdr = null
        }
    }, x.prototype.close = function() {
        var a = this;
        a.nuke(), a._cleanup(!0)
    }, c.isXHRCorsCapable = function() {
        return b.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : b.XDomainRequest && a.domain ? 2 : L.enabled() ? 3 : 4
    };
    var y = function(a, b, d) {
        if (!(this instanceof y))
            return new y(a, b, d);
        var e, f = this;
        f._options = {devel: !1,debug: !1,protocols_whitelist: [],info: void 0,rtt: void 0}, d && c.objectExtend(f._options, d), f._base_url = c.amendUrl(a), f._server = f._options.server || c.random_number_string(1e3), f._options.protocols_whitelist && f._options.protocols_whitelist.length ? e = f._options.protocols_whitelist : (e = "string" == typeof b && b.length > 0 ? [b] : c.isArray(b) ? b : null, e && f._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), f._protocols = [], f.protocol = null, f.readyState = y.CONNECTING, f._ir = S(f._base_url), f._ir.onfinish = function(a, b) {
            f._ir = null, a ? (f._options.info && (a = c.objectExtend(a, f._options.info)), f._options.rtt && (b = f._options.rtt), f._applyInfo(a, b, e), f._didClose()) : f._didClose(1002, "Can't connect to server", !0)
        }
    };
    y.prototype = new d, y.version = "0.3.4.34.g3acc.dirty", y.prototype.CONNECTING = y.CONNECTING = 0, y.prototype.OPEN = y.OPEN = 1, y.prototype.CLOSING = y.CLOSING = 2, y.prototype.CLOSED = y.CLOSED = 3, y.prototype._debug = function() {
        this._options.debug && c.log.apply(c, arguments)
    }, y.prototype._dispatchOpen = function() {
        var a = this;
        a.readyState === y.CONNECTING ? (a._transport_tref && (clearTimeout(a._transport_tref), a._transport_tref = null), a.readyState = y.OPEN, a.dispatchEvent(new e("open"))) : a._didClose(1006, "Server lost session")
    }, y.prototype._dispatchMessage = function(a) {
        var b = this;
        b.readyState === y.OPEN && b.dispatchEvent(new e("message", {data: a}))
    }, y.prototype._dispatchHeartbeat = function() {
        var a = this;
        a.readyState === y.OPEN && a.dispatchEvent(new e("heartbeat", {}))
    }, y.prototype._didClose = function(a, b, d) {
        var f = this;
        if (f.readyState !== y.CONNECTING && f.readyState !== y.OPEN && f.readyState !== y.CLOSING)
            throw new Error("INVALID_STATE_ERR");
        f._ir && (f._ir.nuke(), f._ir = null), f._transport && (f._transport.doCleanup(), f._transport = null);
        var g = new e("close", {code: a,reason: b,wasClean: c.userSetCode(a)});
        if (!c.userSetCode(a) && f.readyState === y.CONNECTING && !d) {
            if (f._try_next_protocol(g))
                return;
            g = new e("close", {code: 2e3,reason: "All transports failed",wasClean: !1,last_event: g})
        }
        f.readyState = y.CLOSED, c.delay(function() {
            f.dispatchEvent(g)
        })
    }, y.prototype._didMessage = function(a) {
        var b = this, c = a.slice(0, 1);
        switch (c) {
            case "o":
                b._dispatchOpen();
                break;
            case "a":
                for (var d = JSON.parse(a.slice(1) || "[]"), e = 0; e < d.length; e++)
                    b._dispatchMessage(d[e]);
                break;
            case "m":
                var d = JSON.parse(a.slice(1) || "null");
                b._dispatchMessage(d);
                break;
            case "c":
                var d = JSON.parse(a.slice(1) || "[]");
                b._didClose(d[0], d[1]);
                break;
            case "h":
                b._dispatchHeartbeat()
        }
    }, y.prototype._try_next_protocol = function(b) {
        var d = this;
        for (d.protocol && (d._debug("Closed transport:", d.protocol, "" + b), d.protocol = null), d._transport_tref && (clearTimeout(d._transport_tref), d._transport_tref = null); ; ) {
            var e = d.protocol = d._protocols.shift();
            if (!e)
                return !1;
            if (y[e] && y[e].need_body === !0 && (!a.body || "undefined" != typeof a.readyState && "complete" !== a.readyState))
                return d._protocols.unshift(e), d.protocol = "waiting-for-load", c.attachEvent("load", function() {
                    d._try_next_protocol()
                }), !0;
            if (y[e] && y[e].enabled(d._options)) {
                var f = y[e].roundTrips || 1, g = (d._options.rto || 0) * f || 5e3;
                d._transport_tref = c.delay(g, function() {
                    d.readyState === y.CONNECTING && d._didClose(2007, "Transport timeouted")
                });
                var h = c.random_string(8), i = d._base_url + "/" + d._server + "/" + h;
                return d._debug("Opening transport:", e, " url:" + i, " RTO:" + d._options.rto), d._transport = new y[e](d, i, d._base_url), !0
            }
            d._debug("Skipping transport:", e)
        }
    }, y.prototype.close = function(a, b) {
        var d = this;
        if (a && !c.userSetCode(a))
            throw new Error("INVALID_ACCESS_ERR");
        return d.readyState !== y.CONNECTING && d.readyState !== y.OPEN ? !1 : (d.readyState = y.CLOSING, d._didClose(a || 1e3, b || "Normal closure"), !0)
    }, y.prototype.send = function(a) {
        var b = this;
        if (b.readyState === y.CONNECTING)
            throw new Error("INVALID_STATE_ERR");
        return b.readyState === y.OPEN && b._transport.doSend(c.quote("" + a)), !0
    }, y.prototype._applyInfo = function(b, d, e) {
        var f = this;
        f._options.info = b, f._options.rtt = d, f._options.rto = c.countRTO(d), f._options.info.null_origin = !a.domain, b.base_url && (f._base_url = c.amendUrl(b.base_url));
        var g = c.probeProtocols();
        f._protocols = c.detectProtocols(g, e, b)
    };
    var z = y.websocket = function(a, d) {
        var e = this, f = d + "/websocket";
        f = "https" === f.slice(0, 5) ? "wss" + f.slice(5) : "ws" + f.slice(4), e.ri = a, e.url = f;
        var g = b.WebSocket || b.MozWebSocket;
        e.ws = new g(e.url), e.ws.onmessage = function(a) {
            e.ri._didMessage(a.data)
        }, e.unload_ref = c.unload_add(function() {
            e.ws.close()
        }), e.ws.onclose = function() {
            e.ri._didMessage(c.closeFrame(1006, "WebSocket connection broken"))
        }
    };
    z.prototype.doSend = function(a) {
        this.ws.send("[" + a + "]")
    }, z.prototype.doCleanup = function() {
        var a = this, b = a.ws;
        b && (b.onmessage = b.onclose = null, b.close(), c.unload_del(a.unload_ref), a.unload_ref = a.ri = a.ws = null)
    }, z.enabled = function() {
        return !(!b.WebSocket && !b.MozWebSocket)
    }, z.roundTrips = 2;
    var A = function() {
    };
    A.prototype.send_constructor = function(a) {
        var b = this;
        b.send_buffer = [], b.sender = a
    }, A.prototype.doSend = function(a) {
        var b = this;
        b.send_buffer.push(a), b.send_stop || b.send_schedule()
    }, A.prototype.send_schedule_wait = function() {
        var a, b = this;
        b.send_stop = function() {
            b.send_stop = null, clearTimeout(a)
        }, a = c.delay(25, function() {
            b.send_stop = null, b.send_schedule()
        })
    }, A.prototype.send_schedule = function() {
        var a = this;
        if (a.send_buffer.length > 0) {
            var b = "[" + a.send_buffer.join(",") + "]";
            a.send_stop = a.sender(a.trans_url, b, function(b, c) {
                a.send_stop = null, b === !1 ? a.ri._didClose(1006, "Sending error " + c) : a.send_schedule_wait()
            }), a.send_buffer = []
        }
    }, A.prototype.send_destructor = function() {
        var a = this;
        a._send_stop && a._send_stop(), a._send_stop = null
    };
    var B = function(b, d, e) {
        var f = this;
        if (!("_send_form" in f)) {
            var g = f._send_form = a.createElement("form"), h = f._send_area = a.createElement("textarea");
            h.name = "d", g.style.display = "none", g.style.position = "absolute", g.method = "POST", g.enctype = "application/x-www-form-urlencoded", g.acceptCharset = "UTF-8", g.appendChild(h), a.body.appendChild(g)
        }
        var g = f._send_form, h = f._send_area, i = "a" + c.random_string(8);
        g.target = i, g.action = b + "/jsonp_send?i=" + i;
        var j;
        try {
            j = a.createElement('<iframe name="' + i + '">')
        } catch (k) {
            j = a.createElement("iframe"), j.name = i
        }
        j.id = i, g.appendChild(j), j.style.display = "none";
        try {
            h.value = d
        } catch (l) {
            c.log("Your browser is seriously broken. Go home! " + l.message)
        }
        g.submit();
        var m = function() {
            j.onerror && (j.onreadystatechange = j.onerror = j.onload = null, c.delay(500, function() {
                j.parentNode.removeChild(j), j = null
            }), h.value = "", e(!0))
        };
        return j.onerror = j.onload = m, j.onreadystatechange = function() {
            "complete" == j.readyState && m()
        }, m
    }, C = function(a) {
        return function(b, c, d) {
            var e = new a("POST", b + "/xhr_send", c);
            return e.onfinish = function(a) {
                d(200 === a || 204 === a, "http status " + a)
            }, function(a) {
                d(!1, a)
            }
        }
    }, D = function(b, d) {
        var e, f, g = a.createElement("script"), h = function(a) {
            f && (f.parentNode.removeChild(f), f = null), g && (clearTimeout(e), g.parentNode.removeChild(g), g.onreadystatechange = g.onerror = g.onload = g.onclick = null, g = null, d(a), d = null)
        }, i = !1, j = null;
        if (g.id = "a" + c.random_string(8), g.src = b, g.type = "text/javascript", g.charset = "UTF-8", g.onerror = function() {
            j || (j = setTimeout(function() {
                i || h(c.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
            }, 1e3))
        }, g.onload = function() {
            h(c.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
        }, g.onreadystatechange = function() {
            if (/loaded|closed/.test(g.readyState)) {
                if (g && g.htmlFor && g.onclick) {
                    i = !0;
                    try {
                        g.onclick()
                    } catch (a) {
                    }
                }
                g && h(c.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
            }
        }, "undefined" == typeof g.async && a.attachEvent)
            if (/opera/i.test(navigator.userAgent))
                f = a.createElement("script"), f.text = "try{var a = document.getElementById('" + g.id + "'); if(a)a.onerror();}catch(x){};", g.async = f.async = !1;
            else {
                try {
                    g.htmlFor = g.id, g.event = "onclick"
                } catch (k) {
                }
                g.async = !0
            }
        "undefined" != typeof g.async && (g.async = !0), e = setTimeout(function() {
            h(c.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
        }, 35e3);
        var l = a.getElementsByTagName("head")[0];
        return l.insertBefore(g, l.firstChild), f && l.insertBefore(f, l.firstChild), h
    }, E = y["jsonp-polling"] = function(a, b) {
        c.polluteGlobalNamespace();
        var d = this;
        d.ri = a, d.trans_url = b, d.send_constructor(B), d._schedule_recv()
    };
    E.prototype = new A, E.prototype._schedule_recv = function() {
        var a = this, b = function(b) {
            a._recv_stop = null, b && (a._is_closing || a.ri._didMessage(b)), a._is_closing || a._schedule_recv()
        };
        a._recv_stop = F(a.trans_url + "/jsonp", D, b)
    }, E.enabled = function() {
        return !0
    }, E.need_body = !0, E.prototype.doCleanup = function() {
        var a = this;
        a._is_closing = !0, a._recv_stop && a._recv_stop(), a.ri = a._recv_stop = null, a.send_destructor()
    };
    var F = function(a, d, e) {
        var f = "a" + c.random_string(6), g = a + "?c=" + escape(h + "." + f), i = 0, j = function(a) {
            switch (i) {
                case 0:
                    delete b[h][f], e(a);
                    break;
                case 1:
                    e(a), i = 2;
                    break;
                case 2:
                    delete b[h][f]
            }
        }, k = d(g, j);
        b[h][f] = k;
        var l = function() {
            b[h][f] && (i = 1, b[h][f](c.closeFrame(1e3, "JSONP user aborted read")))
        };
        return l
    }, G = function() {
    };
    G.prototype = new A, G.prototype.run = function(a, b, c, d, e) {
        var f = this;
        f.ri = a, f.trans_url = b, f.send_constructor(C(e)), f.poll = new $(a, d, b + c, e)
    }, G.prototype.doCleanup = function() {
        var a = this;
        a.poll && (a.poll.abort(), a.poll = null)
    };
    var H = y["xhr-streaming"] = function(a, b) {
        this.run(a, b, "/xhr_streaming", db, c.XHRCorsObject)
    };
    H.prototype = new G, H.enabled = function() {
        return b.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
    }, H.roundTrips = 2, H.need_body = !0;
    var I = y["xdr-streaming"] = function(a, b) {
        this.run(a, b, "/xhr_streaming", db, c.XDRObject)
    };
    I.prototype = new G, I.enabled = function() {
        return !!b.XDomainRequest
    }, I.roundTrips = 2;
    var J = y["xhr-polling"] = function(a, b) {
        this.run(a, b, "/xhr", db, c.XHRCorsObject)
    };
    J.prototype = new G, J.enabled = H.enabled, J.roundTrips = 2;
    var K = y["xdr-polling"] = function(a, b) {
        this.run(a, b, "/xhr", db, c.XDRObject)
    };
    K.prototype = new G, K.enabled = I.enabled, K.roundTrips = 2;
    var L = function() {
    };
    L.prototype.i_constructor = function(a, b, d) {
        var e = this;
        e.ri = a, e.origin = c.getOrigin(d), e.base_url = d, e.trans_url = b;
        var f = d + "/iframe.html";
        e.ri._options.devel && (f += "?t=" + +new Date), e.window_id = c.random_string(8), f += "#" + e.window_id, e.iframeObj = c.createIframe(f, function(a) {
            e.ri._didClose(1006, "Unable to load an iframe (" + a + ")")
        }), e.onmessage_cb = c.bind(e.onmessage, e), c.attachMessage(e.onmessage_cb)
    }, L.prototype.doCleanup = function() {
        var a = this;
        if (a.iframeObj) {
            c.detachMessage(a.onmessage_cb);
            try {
                a.postMessage("c")
            } catch (b) {
            }
            a.iframeObj.cleanup(), a.iframeObj = null, a.onmessage_cb = a.iframeObj = null
        }
    }, L.prototype.onmessage = function(a) {
        var b = this;
        if (a.origin === b.origin) {
            var c = a.data.slice(0, 8), d = a.data.slice(8, 9), e = a.data.slice(9);
            if (c === b.window_id)
                switch (d) {
                    case "s":
                        b.iframeObj.loaded(), b.postMessage("s", JSON.stringify([y.version, b.protocol, b.trans_url, b.base_url]));
                        break;
                    case "t":
                        b.ri._didMessage(e)
                }
        }
    }, L.prototype.postMessage = function(a, b) {
        var c = this;
        c.iframeObj.post(c.window_id + a + (b || ""), c.origin)
    }, L.prototype.doSend = function(a) {
        this.postMessage("m", a)
    }, L.enabled = function() {
        var a = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
        return ("function" == typeof b.postMessage || "object" == typeof b.postMessage) && !a
    };
    var M, N = function(a, d) {
        parent !== b ? parent.postMessage(M + a + (d || ""), "*") : c.log("Can't postMessage, no parent window.", a, d)
    }, O = function() {
    };
    O.prototype._didClose = function(a, b) {
        N("t", c.closeFrame(a, b))
    }, O.prototype._didMessage = function(a) {
        N("t", a)
    }, O.prototype._doSend = function(a) {
        this._transport.doSend(a)
    }, O.prototype._doCleanup = function() {
        this._transport.doCleanup()
    }, c.parent_origin = void 0, y.bootstrap_iframe = function() {
        var d;
        M = a.location.hash.slice(1);
        var e = function(a) {
            if (a.source === parent && ("undefined" == typeof c.parent_origin && (c.parent_origin = a.origin), a.origin === c.parent_origin)) {
                var e = a.data.slice(0, 8), f = a.data.slice(8, 9), g = a.data.slice(9);
                if (e === M)
                    switch (f) {
                        case "s":
                            var h = JSON.parse(g), i = h[0], j = h[1], k = h[2], l = h[3];
                            if (i !== y.version && c.log('Incompatibile SockJS! Main site uses: "' + i + '", the iframe: "' + y.version + '".'), !c.flatUrl(k) || !c.flatUrl(l))
                                return void c.log("Only basic urls are supported in SockJS");
                            if (!c.isSameOriginUrl(k) || !c.isSameOriginUrl(l))
                                return void c.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([b.location.href, k, l]) + ")");
                            d = new O, d._transport = new O[j](d, k, l);
                            break;
                        case "m":
                            d._doSend(g);
                            break;
                        case "c":
                            d && d._doCleanup(), d = null
                    }
            }
        };
        c.attachMessage(e), N("s")
    };
    var P = function(a, b) {
        var d = this;
        c.delay(function() {
            d.doXhr(a, b)
        })
    };
    P.prototype = new f(["finish"]), P.prototype.doXhr = function(a, b) {
        var d = this, e = (new Date).getTime(), f = new b("GET", a + "/info"), g = c.delay(8e3, function() {
            f.ontimeout()
        });
        f.onfinish = function(a, b) {
            if (clearTimeout(g), g = null, 200 === a) {
                var c = (new Date).getTime() - e, f = JSON.parse(b);
                "object" != typeof f && (f = {}), d.emit("finish", f, c)
            } else
                d.emit("finish")
        }, f.ontimeout = function() {
            f.close(), d.emit("finish")
        }
    };
    var Q = function(b) {
        var d = this, e = function() {
            var a = new L;
            a.protocol = "w-iframe-info-receiver";
            var c = function(b) {
                if ("string" == typeof b && "m" === b.substr(0, 1)) {
                    var c = JSON.parse(b.substr(1)), e = c[0], f = c[1];
                    d.emit("finish", e, f)
                } else
                    d.emit("finish");
                a.doCleanup(), a = null
            }, e = {_options: {},_didClose: c,_didMessage: c};
            a.i_constructor(e, b, b)
        };
        a.body ? e() : c.attachEvent("load", e)
    };
    Q.prototype = new f(["finish"]);
    var R = function() {
        var a = this;
        c.delay(function() {
            a.emit("finish", {}, 2e3)
        })
    };
    R.prototype = new f(["finish"]);
    var S = function(a) {
        if (c.isSameOriginUrl(a))
            return new P(a, c.XHRLocalObject);
        switch (c.isXHRCorsCapable()) {
            case 1:
                return new P(a, c.XHRLocalObject);
            case 2:
                if (c.isSameOriginScheme(a))
                    return new P(a, c.XDRObject);
                break;
            case 3:
                return new Q(a)
        }
        return new R
    }, T = O["w-iframe-info-receiver"] = function(a, b, d) {
        var e = new P(d, c.XHRLocalObject);
        e.onfinish = function(b, c) {
            a._didMessage("m" + JSON.stringify([b, c])), a._didClose()
        }
    };
    T.prototype.doCleanup = function() {
    };
    var U = y["iframe-eventsource"] = function() {
        var a = this;
        a.protocol = "w-iframe-eventsource", a.i_constructor.apply(a, arguments)
    };
    U.prototype = new L, U.enabled = function() {
        return "EventSource" in b && L.enabled()
    }, U.need_body = !0, U.roundTrips = 3;
    var V = O["w-iframe-eventsource"] = function(a, b) {
        this.run(a, b, "/eventsource", _, c.XHRLocalObject)
    };
    V.prototype = new G;
    var W = y["iframe-xhr-polling"] = function() {
        var a = this;
        a.protocol = "w-iframe-xhr-polling", a.i_constructor.apply(a, arguments)
    };
    W.prototype = new L, W.enabled = function() {
        return b.XMLHttpRequest && L.enabled()
    }, W.need_body = !0, W.roundTrips = 3;
    var X = O["w-iframe-xhr-polling"] = function(a, b) {
        this.run(a, b, "/xhr", db, c.XHRLocalObject)
    };
    X.prototype = new G;
    var Y = y["iframe-htmlfile"] = function() {
        var a = this;
        a.protocol = "w-iframe-htmlfile", a.i_constructor.apply(a, arguments)
    };
    Y.prototype = new L, Y.enabled = function() {
        return L.enabled()
    }, Y.need_body = !0, Y.roundTrips = 3;
    var Z = O["w-iframe-htmlfile"] = function(a, b) {
        this.run(a, b, "/htmlfile", cb, c.XHRLocalObject)
    };
    Z.prototype = new G;
    var $ = function(a, b, c, d) {
        var e = this;
        e.ri = a, e.Receiver = b, e.recv_url = c, e.AjaxObject = d, e._scheduleRecv()
    };
    $.prototype._scheduleRecv = function() {
        var a = this, b = a.poll = new a.Receiver(a.recv_url, a.AjaxObject), c = 0;
        b.onmessage = function(b) {
            c += 1, a.ri._didMessage(b.data)
        }, b.onclose = function(c) {
            a.poll = b = b.onmessage = b.onclose = null, a.poll_is_closing || ("permanent" === c.reason ? a.ri._didClose(1006, "Polling error (" + c.reason + ")") : a._scheduleRecv())
        }
    }, $.prototype.abort = function() {
        var a = this;
        a.poll_is_closing = !0, a.poll && a.poll.abort()
    };
    var _ = function(a) {
        var b = this, d = new EventSource(a);
        d.onmessage = function(a) {
            b.dispatchEvent(new e("message", {data: unescape(a.data)}))
        }, b.es_close = d.onerror = function(a, f) {
            var g = f ? "user" : 2 !== d.readyState ? "network" : "permanent";
            b.es_close = d.onmessage = d.onerror = null, d.close(), d = null, c.delay(200, function() {
                b.dispatchEvent(new e("close", {reason: g}))
            })
        }
    };
    _.prototype = new d, _.prototype.abort = function() {
        var a = this;
        a.es_close && a.es_close({}, !0)
    };
    var ab, bb = function() {
        if (void 0 === ab)
            if ("ActiveXObject" in b)
                try {
                    ab = !!new ActiveXObject("htmlfile")
                } catch (a) {
                }
            else
                ab = !1;
        return ab
    }, cb = function(a) {
        var d = this;
        c.polluteGlobalNamespace(), d.id = "a" + c.random_string(6, 26), a += (-1 === a.indexOf("?") ? "?" : "&") + "c=" + escape(h + "." + d.id);
        var f, g = bb() ? c.createHtmlfile : c.createIframe;
        b[h][d.id] = {start: function() {
            f.loaded()
        },message: function(a) {
            d.dispatchEvent(new e("message", {data: a}))
        },stop: function() {
            d.iframe_close({}, "network")
        }}, d.iframe_close = function(a, c) {
            f.cleanup(), d.iframe_close = f = null, delete b[h][d.id], d.dispatchEvent(new e("close", {reason: c}))
        }, f = g(a, function() {
            d.iframe_close({}, "permanent")
        })
    };
    cb.prototype = new d, cb.prototype.abort = function() {
        var a = this;
        a.iframe_close && a.iframe_close({}, "user")
    };
    var db = function(a, b) {
        var c = this, d = 0;
        c.xo = new b("POST", a, null), c.xo.onchunk = function(a, b) {
            if (200 === a)
                for (; ; ) {
                    var f = b.slice(d), g = f.indexOf("\n");
                    if (-1 === g)
                        break;
                    d += g + 1;
                    var h = f.slice(0, g);
                    c.dispatchEvent(new e("message", {data: h}))
                }
        }, c.xo.onfinish = function(a, b) {
            c.xo.onchunk(a, b), c.xo = null;
            var d = 200 === a ? "network" : "permanent";
            c.dispatchEvent(new e("close", {reason: d}))
        }
    };
    return db.prototype = new d, db.prototype.abort = function() {
        var a = this;
        a.xo && (a.xo.close(), a.dispatchEvent(new e("close", {reason: "user"})), a.xo = null)
    }, y.getUtils = function() {
        return c
    }, y.getIframeTransport = function() {
        return L
    }, y
}(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [], function() {
    return SockJS
}), function(a) {
    var b = "undefined" != typeof module && module.exports, c = function() {
        if (!c._nlp)
            if (b)
                c._nlp = require("./nlp");
            else if (!(c._nlp = a._RRuleNLP))
                throw new Error("You need to include rrule/nlp.js for fromText/toText to work.");
        return c._nlp
    }, d = {MONTH_DAYS: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],ONE_DAY: 864e5,MAXYEAR: 9999,ORDINAL_BASE: new Date(1970, 0, 1),PY_WEEKDAYS: [6, 0, 1, 2, 3, 4, 5],getYearDay: function(a) {
        var b = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        return Math.ceil((b - new Date(a.getFullYear(), 0, 1)) / d.ONE_DAY) + 1
    },isLeapYear: function(a) {
        return a instanceof Date && (a = a.getFullYear()), a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    },tzOffset: function(a) {
        return 60 * a.getTimezoneOffset() * 1e3
    },daysBetween: function(a, b) {
        var c = a.getTime() - d.tzOffset(a), e = b.getTime() - d.tzOffset(b), f = Math.abs(c - e);
        return Math.round(f / d.ONE_DAY)
    },toOrdinal: function(a) {
        return d.daysBetween(a, d.ORDINAL_BASE)
    },fromOrdinal: function(a) {
        var b = a * d.ONE_DAY;
        return new Date(d.ORDINAL_BASE.getTime() - d.tzOffset(d.ORDINAL_BASE) + b + d.tzOffset(new Date(b)))
    },monthRange: function(a, b) {
        var c = new Date(a, b, 1);
        return [d.getWeekday(c), d.getMonthDays(c)]
    },getMonthDays: function(a) {
        var b = a.getMonth();
        return 1 == b && d.isLeapYear(a) ? 29 : d.MONTH_DAYS[b]
    },getWeekday: function(a) {
        return d.PY_WEEKDAYS[a.getDay()]
    },combine: function(a, b) {
        return b = b || a, new Date(a.getFullYear(), a.getMonth(), a.getDate(), b.getHours(), b.getMinutes(), b.getSeconds())
    },clone: function(a) {
        var b = new Date(a.getTime());
        return b.setMilliseconds(0), b
    },cloneDates: function(a) {
        for (var b = [], c = 0; c < a.length; c++)
            b.push(d.clone(a[c]));
        return b
    },sort: function(a) {
        a.sort(function(a, b) {
            return a.getTime() - b.getTime()
        })
    },timeToUntilString: function(a) {
        for (var b, c = new Date(a), d = [c.getUTCFullYear(), c.getUTCMonth() + 1, c.getUTCDate(), "T", c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), "Z"], e = 0; e < d.length; e++)
            b = d[e], !/[TZ]/.test(b) && 10 > b && (d[e] = "0" + String(b));
        return d.join("")
    },untilStringToDate: function(a) {
        var b = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/, c = b.exec(a);
        if (!c)
            throw new Error("Invalid UNTIL value: " + a);
        return new Date(Date.UTC(c[1], c[2] - 1, c[3], c[5] || 0, c[6] || 0, c[7] || 0))
    }};
    d.Time = function(a, b, c) {
        this.hour = a, this.minute = b, this.second = c
    }, d.Time.prototype = {getHours: function() {
        return this.hour
    },getMinutes: function() {
        return this.minute
    },getSeconds: function() {
        return this.second
    },getTime: function() {
        return 1e3 * (60 * this.hour * 60 + 60 * this.minute + this.second)
    }};
    var e = function(a, b) {
        1 === arguments.length && (b = a, a = 0);
        for (var c = [], d = a; b > d; d++)
            c.push(d);
        return c
    }, f = function(a, b) {
        var c = 0, d = [];
        if (a instanceof Array)
            for (; b > c; c++)
                d[c] = [].concat(a);
        else
            for (; b > c; c++)
                d[c] = a;
        return d
    }, g = function(a, b) {
        var c = a % b;
        return 0 > c * b ? c + b : c
    }, h = function(a, b) {
        return {div: Math.floor(a / b),mod: g(a, b)}
    }, i = function(a) {
        return a instanceof Array && 0 == a.length ? !1 : Boolean(a)
    }, j = function(a, b) {
        return -1 != a.indexOf(b)
    }, k = [].concat(f(1, 31), f(2, 28), f(3, 31), f(4, 30), f(5, 31), f(6, 30), f(7, 31), f(8, 31), f(9, 30), f(10, 31), f(11, 30), f(12, 31), f(1, 7)), l = [].concat(f(1, 31), f(2, 29), f(3, 31), f(4, 30), f(5, 31), f(6, 30), f(7, 31), f(8, 31), f(9, 30), f(10, 31), f(11, 30), f(12, 31), f(1, 7)), m = e(1, 29), n = e(1, 30), o = e(1, 31), p = e(1, 32), q = [].concat(p, n, p, o, p, o, p, p, o, p, o, p, p.slice(0, 7)), r = [].concat(p, m, p, o, p, o, p, p, o, p, o, p, p.slice(0, 7));
    m = e(-28, 0), n = e(-29, 0), o = e(-30, 0), p = e(-31, 0);
    var s = [].concat(p, n, p, o, p, o, p, p, o, p, o, p, p.slice(0, 7)), t = [].concat(p, m, p, o, p, o, p, p, o, p, o, p, p.slice(0, 7)), u = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366], v = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], w = function() {
        for (var a = [], b = 0; 55 > b; b++)
            a = a.concat(e(7));
        return a
    }(), x = function(a, b) {
        if (0 === b)
            throw new Error("Can't create weekday with n == 0");
        this.weekday = a, this.n = b
    };
    x.prototype = {nth: function(a) {
        return this.n == a ? this : new x(this.weekday, a)
    },equals: function(a) {
        return this.weekday == a.weekday && this.n == a.n
    },toString: function() {
        var a = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"][this.weekday];
        return this.n && (a = (this.n > 0 ? "+" : "") + String(this.n) + a), a
    },getJsWeekday: function() {
        return 6 == this.weekday ? 0 : this.weekday + 1
    }};
    var y = function(a, b) {
        this._string = null, a = a || {}, this._cache = b ? null : {all: !1,before: [],after: [],between: []}, this.origOptions = {};
        var c = [], e = Object.keys(a), f = Object.keys(y.DEFAULT_OPTIONS);
        if (e.forEach(function(b) {
            this.origOptions[b] = a[b], j(f, b) || c.push(b)
        }, this), c.length)
            throw new Error("Invalid options: " + c.join(", "));
        if (!y.FREQUENCIES[a.freq] && null === a.byeaster)
            throw new Error("Invalid frequency: " + String(a.freq));
        f.forEach(function(b) {
            j(e, b) || (a[b] = y.DEFAULT_OPTIONS[b])
        });
        var g = this.options = a;
        if (null !== g.byeaster && (g.freq = y.YEARLY), g.dtstart || (g.dtstart = new Date, g.dtstart.setMilliseconds(0)), null === g.wkst ? g.wkst = y.MO.weekday : "number" == typeof g.wkst || (g.wkst = g.wkst.weekday), null !== g.bysetpos) {
            "number" == typeof g.bysetpos && (g.bysetpos = [g.bysetpos]);
            for (var h = 0; h < g.bysetpos.length; h++) {
                var k = g.bysetpos[h];
                if (0 == k || !(k >= -366 && 366 >= k))
                    throw new Error("bysetpos must be between 1 and 366, or between -366 and -1")
            }
        }
        if (!(i(g.byweekno) || i(g.byyearday) || i(g.bymonthday) || null !== g.byweekday || null !== g.byeaster))
            switch (g.freq) {
                case y.YEARLY:
                    g.bymonth || (g.bymonth = g.dtstart.getMonth() + 1), g.bymonthday = g.dtstart.getDate();
                    break;
                case y.MONTHLY:
                    g.bymonthday = g.dtstart.getDate();
                    break;
                case y.WEEKLY:
                    g.byweekday = d.getWeekday(g.dtstart)
            }
        if (null === g.bymonth || g.bymonth instanceof Array || (g.bymonth = [g.bymonth]), null === g.byyearday || g.byyearday instanceof Array || (g.byyearday = [g.byyearday]), null === g.bymonthday)
            g.bymonthday = [], g.bynmonthday = [];
        else if (g.bymonthday instanceof Array) {
            var l = [], m = [];
            for (h = 0; h < g.bymonthday.length; h++) {
                var k = g.bymonthday[h];
                k > 0 ? l.push(k) : 0 > k && m.push(k)
            }
            g.bymonthday = l, g.bynmonthday = m
        } else
            g.bymonthday < 0 ? (g.bynmonthday = [g.bymonthday], g.bymonthday = []) : (g.bynmonthday = [], g.bymonthday = [g.bymonthday]);
        if (null === g.byweekno || g.byweekno instanceof Array || (g.byweekno = [g.byweekno]), null === g.byweekday)
            g.bynweekday = null;
        else if ("number" == typeof g.byweekday)
            g.byweekday = [g.byweekday], g.bynweekday = null;
        else if (g.byweekday instanceof x)
            !g.byweekday.n || g.freq > y.MONTHLY ? (g.byweekday = [g.byweekday.weekday], g.bynweekday = null) : (g.bynweekday = [[g.byweekday.weekday, g.byweekday.n]], g.byweekday = null);
        else {
            var n = [], o = [];
            for (h = 0; h < g.byweekday.length; h++) {
                var p = g.byweekday[h];
                "number" == typeof p ? n.push(p) : !p.n || g.freq > y.MONTHLY ? n.push(p.weekday) : o.push([p.weekday, p.n])
            }
            g.byweekday = i(n) ? n : null, g.bynweekday = i(o) ? o : null
        }
        if (null === g.byhour ? g.byhour = g.freq < y.HOURLY ? [g.dtstart.getHours()] : null : "number" == typeof g.byhour && (g.byhour = [g.byhour]), null === g.byminute ? g.byminute = g.freq < y.MINUTELY ? [g.dtstart.getMinutes()] : null : "number" == typeof g.byminute && (g.byminute = [g.byminute]), null === g.bysecond ? g.bysecond = g.freq < y.SECONDLY ? [g.dtstart.getSeconds()] : null : "number" == typeof g.bysecond && (g.bysecond = [g.bysecond]), g.freq >= y.HOURLY)
            this.timeset = null;
        else {
            for (this.timeset = [], h = 0; h < g.byhour.length; h++)
                for (var q = g.byhour[h], r = 0; r < g.byminute.length; r++)
                    for (var s = g.byminute[r], t = 0; t < g.bysecond.length; t++) {
                        var u = g.bysecond[t];
                        this.timeset.push(new d.Time(q, s, u))
                    }
            d.sort(this.timeset)
        }
    };
    y.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"], y.YEARLY = 0, y.MONTHLY = 1, y.WEEKLY = 2, y.DAILY = 3, y.HOURLY = 4, y.MINUTELY = 5, y.SECONDLY = 6, y.MO = new x(0), y.TU = new x(1), y.WE = new x(2), y.TH = new x(3), y.FR = new x(4), y.SA = new x(5), y.SU = new x(6), y.DEFAULT_OPTIONS = {freq: null,dtstart: null,interval: 1,wkst: y.MO,count: null,until: null,bysetpos: null,bymonth: null,bymonthday: null,byyearday: null,byweekno: null,byweekday: null,byhour: null,byminute: null,bysecond: null,byeaster: null}, y.parseText = function(a, b) {
        return c().parseText(a, b)
    }, y.fromText = function(a, b) {
        return c().fromText(a, b)
    }, y.optionsToString = function(a) {
        var b, c, e, f, g, h = [];
        c = Object.keys(a), e = Object.keys(y.DEFAULT_OPTIONS);
        for (var i = 0; i < c.length; i++)
            if (j(e, c[i]) && (b = c[i].toUpperCase(), f = a[c[i]], g = [], !(null === f || f instanceof Array && !f.length))) {
                switch (b) {
                    case "FREQ":
                        f = y.FREQUENCIES[a.freq];
                        break;
                    case "WKST":
                        f = f.toString();
                        break;
                    case "BYWEEKDAY":
                        b = "BYDAY", f instanceof Array || (f = [f]);
                        for (var k, l = 0; l < f.length; l++)
                            k = f[l], k instanceof x || (k = k instanceof Array ? new x(k[0], k[1]) : new x(k)), g[l] = k.toString();
                        f = g;
                        break;
                    case "DTSTART":
                    case "UNTIL":
                        f = d.timeToUntilString(f);
                        break;
                    default:
                        if (f instanceof Array) {
                            for (var l = 0; l < f.length; l++)
                                g[l] = String(f[l]);
                            f = g
                        } else
                            f = String(f)
                }
                h.push([b, f])
            }
        for (var m = [], i = 0; i < h.length; i++) {
            var n = h[i];
            m.push(n[0] + "=" + n[1].toString())
        }
        return m.join(";")
    }, y.prototype = {all: function(a) {
        if (a)
            return this._iter(new B("all", {}, a));
        var b = this._cacheGet("all");
        return b === !1 && (b = this._iter(new A("all", {})), this._cacheAdd("all", b)), b
    },between: function(a, b, c, d) {
        var e = {before: b,after: a,inc: c};
        if (d)
            return this._iter(new B("between", e, d));
        var f = this._cacheGet("between", e);
        return f === !1 && (f = this._iter(new A("between", e)), this._cacheAdd("between", f, e)), f
    },before: function(a, b) {
        var c = {dt: a,inc: b}, d = this._cacheGet("before", c);
        return d === !1 && (d = this._iter(new A("before", c)), this._cacheAdd("before", d, c)), d
    },after: function(a, b) {
        var c = {dt: a,inc: b}, d = this._cacheGet("after", c);
        return d === !1 && (d = this._iter(new A("after", c)), this._cacheAdd("after", d, c)), d
    },count: function() {
        return this.all().length
    },toString: function() {
        return y.optionsToString(this.origOptions)
    },toText: function(a, b) {
        return c().toText(this, a, b)
    },isFullyConvertibleToText: function() {
        return c().isFullyConvertible(this)
    },_cacheAdd: function(a, b, c) {
        this._cache && (b && (b = b instanceof Date ? d.clone(b) : d.cloneDates(b)), "all" == a ? this._cache.all = b : (c._value = b, this._cache[a].push(c)))
    },_cacheGet: function(a, b) {
        if (!this._cache)
            return !1;
        var c = !1;
        if ("all" == a)
            c = this._cache.all;
        else
            a: for (var e, f = 0; f < this._cache[a].length; f++) {
                e = this._cache[a][f];
                for (var g in b)
                    if (b.hasOwnProperty(g) && String(b[g]) != String(e[g]))
                        continue a;
                c = e._value;
                break
            }
        if (!c && this._cache.all) {
            for (var h = new A(a, b), f = 0; f < this._cache.all.length && h.accept(this._cache.all[f]); f++)
                ;
            c = h.getValue(), this._cacheAdd(a, c, b)
        }
        return c instanceof Array ? d.cloneDates(c) : c instanceof Date ? d.clone(c) : c
    },clone: function() {
        return new y(this.origOptions)
    },_iter: function(a) {
        var b = this.options.dtstart, c = b.getFullYear(), e = b.getMonth() + 1, f = b.getDate(), k = b.getHours(), l = b.getMinutes(), m = b.getSeconds(), n = d.getWeekday(b), o = (d.getYearDay(b), this.options.freq), p = this.options.interval, q = this.options.wkst, r = this.options.until, s = this.options.bymonth, t = this.options.byweekno, u = this.options.byyearday, v = this.options.byweekday, w = this.options.byeaster, x = this.options.bymonthday, A = this.options.bynmonthday, B = this.options.bysetpos, C = this.options.byhour, D = this.options.byminute, E = this.options.bysecond, F = new z(this);
        F.rebuild(c, e);
        var G = {};
        G[y.YEARLY] = F.ydayset, G[y.MONTHLY] = F.mdayset, G[y.WEEKLY] = F.wdayset, G[y.DAILY] = F.ddayset, G[y.HOURLY] = F.ddayset, G[y.MINUTELY] = F.ddayset, G[y.SECONDLY] = F.ddayset, G = G[o];
        var H;
        if (o < y.HOURLY)
            H = this.timeset;
        else {
            var I = {};
            I[y.HOURLY] = F.htimeset, I[y.MINUTELY] = F.mtimeset, I[y.SECONDLY] = F.stimeset, I = I[o], H = o >= y.HOURLY && i(C) && !j(C, k) || o >= y.MINUTELY && i(D) && !j(D, l) || o >= y.SECONDLY && i(E) && !j(E, l) ? [] : I.call(F, k, l, m)
        }
        for (var J, K, L, M, N, O, P, Q, R, S, T, U, V, W = 0, X = this.options.count; ; ) {
            for (Q = G.call(F, c, e, f), S = Q[0], T = Q[1], U = Q[2], J = !1, L = T; U > L; L++)
                K = S[L], (i(s) && !j(s, F.mmask[K]) || i(t) && !F.wnomask[K] || i(v) && !j(v, F.wdaymask[K]) || i(F.nwdaymask) && !F.nwdaymask[K] || null !== w && !j(F.eastermask, K) || (i(x) || i(A)) && !j(x, F.mdaymask[K]) && !j(A, F.nmdaymask[K]) || i(u) && (K < F.yearlen && !j(u, K + 1) && !j(u, -F.yearlen + K) || K >= F.yearlen && !j(u, K + 1 - F.yearlen) && !j(u, -F.nextyearlen + K - F.yearlen))) && (S[K] = null, J = !0);
            if (i(B) && i(H)) {
                var Y, Z, $ = [];
                for (L = 0; L < B.length; L++) {
                    var R = B[L];
                    0 > R ? (Y = Math.floor(R / H.length), Z = g(R, H.length)) : (Y = Math.floor((R - 1) / H.length), Z = g(R - 1, H.length));
                    try {
                        for (Q = [], M = T; U > M; M++) {
                            var _ = S[M];
                            null !== _ && Q.push(_)
                        }
                        K = 0 > Y ? Q.slice(Y)[0] : Q[Y];
                        var ab = H[Z], bb = d.fromOrdinal(F.yearordinal + K), cb = d.combine(bb, ab);
                        j($, cb) || $.push(cb)
                    } catch (db) {
                    }
                }
                for (d.sort($), L = 0; L < $.length; L++) {
                    var cb = $[L];
                    if (r && cb > r)
                        return this._len = W, a.getValue();
                    if (cb >= b) {
                        if (++W, !a.accept(cb))
                            return a.getValue();
                        if (X && (--X, !X))
                            return this._len = W, a.getValue()
                    }
                }
            } else
                for (L = T; U > L; L++)
                    if (K = S[L], null !== K) {
                        var bb = d.fromOrdinal(F.yearordinal + K);
                        for (M = 0; M < H.length; M++) {
                            var ab = H[M], cb = d.combine(bb, ab);
                            if (r && cb > r)
                                return this._len = W, a.getValue();
                            if (cb >= b) {
                                if (++W, !a.accept(cb))
                                    return a.getValue();
                                if (X && (--X, !X))
                                    return this._len = W, a.getValue()
                            }
                        }
                    }
            if (V = !1, o == y.YEARLY) {
                if (c += p, c > d.MAXYEAR)
                    return this._len = W, a.getValue();
                F.rebuild(c, e)
            } else if (o == y.MONTHLY) {
                if (e += p, e > 12 && (O = Math.floor(e / 12), P = g(e, 12), e = P, c += O, 0 == e && (e = 12, --c), c > d.MAXYEAR))
                    return this._len = W, a.getValue();
                F.rebuild(c, e)
            } else if (o == y.WEEKLY)
                f += q > n ? -(n + 1 + (6 - q)) + 7 * p : -(n - q) + 7 * p, n = q, V = !0;
            else if (o == y.DAILY)
                f += p, V = !0;
            else if (o == y.HOURLY) {
                for (J && (k += Math.floor((23 - k) / p) * p); ; )
                    if (k += p, N = h(k, 24), O = N.div, P = N.mod, O && (k = P, f += O, V = !0), !i(C) || j(C, k))
                        break;
                H = I.call(F, k, l, m)
            } else if (o == y.MINUTELY) {
                for (J && (l += Math.floor((1439 - (60 * k + l)) / p) * p); ; )
                    if (l += p, N = h(l, 60), O = N.div, P = N.mod, O && (l = P, k += O, N = h(k, 24), O = N.div, P = N.mod, O && (k = P, f += O, V = !0, J = !1)), !(i(C) && !j(C, k) || i(D) && !j(D, l)))
                        break;
                H = I.call(F, k, l, m)
            } else if (o == y.SECONDLY) {
                for (J && (m += Math.floor((86399 - (3600 * k + 60 * l + m)) / p) * p); ; )
                    if (m += p, N = h(m, 60), O = N.div, P = N.mod, O && (m = P, l += O, N = h(l, 60), O = N.div, P = N.mod, O && (l = P, k += O, N = h(k, 24), O = N.div, P = N.mod, O && (k = P, f += O, V = !0))), !(i(C) && !j(C, k) || i(D) && !j(D, l) || i(E) && !j(E, m)))
                        break;
                H = I.call(F, k, l, m)
            }
            if (V && f > 28) {
                var eb = d.monthRange(c, e - 1)[1];
                if (f > eb) {
                    for (; f > eb; ) {
                        if (f -= eb, ++e, 13 == e && (e = 1, ++c, c > d.MAXYEAR))
                            return this._len = W, a.getValue();
                        eb = d.monthRange(c, e - 1)[1]
                    }
                    F.rebuild(c, e)
                }
            }
        }
    }}, y.parseString = function(a) {
        if (a = a.replace(/^\s+|\s+$/, ""), !a.length)
            return null;
        var b, c, e, f, g, h = a.split(";"), i = {};
        for (b = 0; b < h.length; b++)
            switch (g = h[b].split("="), e = g[0], f = g[1], e) {
                case "FREQ":
                    i.freq = y[f];
                    break;
                case "WKST":
                    i.wkst = y[f];
                    break;
                case "COUNT":
                case "INTERVAL":
                case "BYSETPOS":
                case "BYMONTH":
                case "BYMONTHDAY":
                case "BYYEARDAY":
                case "BYWEEKNO":
                case "BYHOUR":
                case "BYMINUTE":
                case "BYSECOND":
                    if (-1 != f.indexOf(","))
                        for (f = f.split(","), c = 0; c < f.length; c++)
                            / /^[+-]?\d+$/ .
                    test(f[c]) && (f[c] = Number(f[c]));
                else /^[+-]?\d+$/ .
                    test(f) && (f = Number(f));
                    e = e.toLowerCase(), i[e] = f;
                    break;
                case "BYDAY":
                    var j, k, l, m = f.split(",");
                    for (i.byweekday = [], c = 0; c < m.length; c++)
                        l = m[c], 2 == l.length ? (k = y[l], i.byweekday.push(k)) : (l = l.match(/^([+-]?\d)([A-Z]{2})$/), j = Number(l[1]), k = l[2], k = y[k].weekday, i.byweekday.push(new x(k, j)));
                    break;
                case "DTSTART":
                    i.dtstart = d.untilStringToDate(f);
                    break;
                case "UNTIL":
                    i.until = d.untilStringToDate(f);
                    break;
                case "BYEASTER":
                    i.byeaster = Number(f);
                    break;
                default:
                    throw new Error("Unknown RRULE property '" + e + "'")
            }
        return i
    }, y.fromString = function(a) {
        return new y(y.parseString(a))
    };
    var z = function(a) {
        this.rrule = a, this.lastyear = null, this.lastmonth = null, this.yearlen = null, this.nextyearlen = null, this.yearordinal = null, this.yearweekday = null, this.mmask = null, this.mrange = null, this.mdaymask = null, this.nmdaymask = null, this.wdaymask = null, this.wnomask = null, this.nwdaymask = null, this.eastermask = null
    };
    z.prototype.easter = function(a, b) {
        b = b || 0;
        var c = a % 19, d = Math.floor(a / 100), e = a % 100, f = Math.floor(d / 4), g = d % 4, h = Math.floor((d + 8) / 25), i = Math.floor((d - h + 1) / 3), j = Math.floor(19 * c + d - f - i + 15) % 30, k = Math.floor(e / 4), l = e % 4, m = Math.floor(32 + 2 * g + 2 * k - j - l) % 7, n = Math.floor((c + 11 * j + 22 * m) / 451), o = Math.floor((j + m - 7 * n + 114) / 31), p = (j + m - 7 * n + 114) % 31 + 1, q = Date.UTC(a, o - 1, p + b), r = Date.UTC(a, 0, 1);
        return [Math.ceil((q - r) / 864e5)]
    }, z.prototype.rebuild = function(a, b) {
        var c = this.rrule;
        if (a != this.lastyear) {
            this.yearlen = d.isLeapYear(a) ? 366 : 365, this.nextyearlen = d.isLeapYear(a + 1) ? 366 : 365;
            var e = new Date(a, 0, 1);
            this.yearordinal = d.toOrdinal(e), this.yearweekday = d.getWeekday(e);
            var h = d.getWeekday(new Date(a, 0, 1));
            if (365 == this.yearlen ? (this.mmask = [].concat(k), this.mdaymask = [].concat(r), this.nmdaymask = [].concat(t), this.wdaymask = w.slice(h), this.mrange = [].concat(v)) : (this.mmask = [].concat(l), this.mdaymask = [].concat(q), this.nmdaymask = [].concat(s), this.wdaymask = w.slice(h), this.mrange = [].concat(u)), i(c.options.byweekno)) {
                this.wnomask = f(0, this.yearlen + 7);
                var m, n, o;
                m = n = g(7 - this.yearweekday + c.options.wkst, 7), m >= 4 ? (m = 0, o = this.yearlen + g(this.yearweekday - c.options.wkst, 7)) : o = this.yearlen - m;
                for (var p, x, z = Math.floor(o / 7), A = g(o, 7), B = Math.floor(z + A / 4), C = 0; C < c.options.byweekno.length; C++)
                    if (p = c.options.byweekno[C], 0 > p && (p += B + 1), p > 0 && B >= p) {
                        p > 1 ? (x = m + 7 * (p - 1), m != n && (x -= 7 - n)) : x = m;
                        for (var D = 0; 7 > D && (this.wnomask[x] = 1, x++, this.wdaymask[x] != c.options.wkst); D++)
                            ;
                    }
                if (j(c.options.byweekno, 1)) {
                    var x = m + 7 * B;
                    if (m != n && (x -= 7 - n), x < this.yearlen)
                        for (var C = 0; 7 > C && (this.wnomask[x] = 1, x += 1, this.wdaymask[x] != c.options.wkst); C++)
                            ;
                }
                if (m) {
                    var E;
                    if (j(c.options.byweekno, -1))
                        E = -1;
                    else {
                        var F = d.getWeekday(new Date(a - 1, 0, 1)), G = g(7 - F + c.options.wkst, 7), H = d.isLeapYear(a - 1) ? 366 : 365;
                        G >= 4 ? (G = 0, E = Math.floor(52 + g(H + g(F - c.options.wkst, 7), 7) / 4)) : E = Math.floor(52 + g(this.yearlen - m, 7) / 4)
                    }
                    if (j(c.options.byweekno, E))
                        for (var x = 0; m > x; x++)
                            this.wnomask[x] = 1
                }
            } else
                this.wnomask = null
        }
        if (i(c.options.bynweekday) && (b != this.lastmonth || a != this.lastyear)) {
            var I = [];
            if (c.options.freq == y.YEARLY)
                if (i(c.options.bymonth))
                    for (C = 0; C < c.options.bymonth.length; C++)
                        b = c.options.bymonth[C], I.push(this.mrange.slice(b - 1, b + 1));
                else
                    I = [[0, this.yearlen]];
            else
                c.options.freq == y.MONTHLY && (I = [this.mrange.slice(b - 1, b + 1)]);
            if (i(I)) {
                this.nwdaymask = f(0, this.yearlen);
                for (var C = 0; C < I.length; C++) {
                    var J = I[C], K = J[0], L = J[1];
                    L -= 1;
                    for (var D = 0; D < c.options.bynweekday.length; D++) {
                        var h = c.options.bynweekday[D][0], p = c.options.bynweekday[D][1];
                        0 > p ? (x = L + 7 * (p + 1), x -= g(this.wdaymask[x] - h, 7)) : (x = K + 7 * (p - 1), x += g(7 - this.wdaymask[x] + h, 7)), x >= K && L >= x && (this.nwdaymask[x] = 1)
                    }
                }
            }
            this.lastyear = a, this.lastmonth = b
        }
        null !== c.options.byeaster && (this.eastermask = this.easter(a, c.options.byeaster))
    }, z.prototype.ydayset = function() {
        return [e(this.yearlen), 0, this.yearlen]
    }, z.prototype.mdayset = function(a, b) {
        for (var c = f(null, this.yearlen), d = this.mrange[b - 1], e = this.mrange[b], g = d; e > g; g++)
            c[g] = g;
        return [c, d, e]
    }, z.prototype.wdayset = function(a, b, c) {
        for (var e = f(null, this.yearlen + 7), g = d.toOrdinal(new Date(a, b - 1, c)) - this.yearordinal, h = g, i = 0; 7 > i && (e[g] = g, ++g, this.wdaymask[g] != this.rrule.options.wkst); i++)
            ;
        return [e, h, g]
    }, z.prototype.ddayset = function(a, b, c) {
        var e = f(null, this.yearlen), g = d.toOrdinal(new Date(a, b - 1, c)) - this.yearordinal;
        return e[g] = g, [e, g, g + 1]
    }, z.prototype.htimeset = function(a, b, c) {
        for (var e = [], f = this.rrule, g = 0; g < f.options.byminute.length; g++) {
            b = f.options.byminute[g];
            for (var h = 0; h < f.options.bysecond.length; h++)
                c = f.options.bysecond[h], e.push(new d.Time(a, b, c))
        }
        return d.sort(e), e
    }, z.prototype.mtimeset = function(a, b, c) {
        for (var e = [], f = this.rrule, g = 0; g < f.options.bysecond.length; g++)
            c = f.options.bysecond[g], e.push(new d.Time(a, b, c));
        return d.sort(e), e
    }, z.prototype.stimeset = function(a, b, c) {
        return [new d.Time(a, b, c)]
    };
    var A = function(a, b) {
        this.init(a, b)
    };
    A.prototype = {init: function(a, b) {
        this.method = a, this.args = b, this._result = [], this.minDate = null, this.maxDate = null, "between" == a ? (this.maxDate = b.inc ? b.before : new Date(b.before.getTime() - 1), this.minDate = b.inc ? b.after : new Date(b.after.getTime() + 1)) : "before" == a ? this.maxDate = b.inc ? b.dt : new Date(b.dt.getTime() - 1) : "after" == a && (this.minDate = b.inc ? b.dt : new Date(b.dt.getTime() + 1))
    },accept: function(a) {
        var b = this.minDate && a < this.minDate, c = this.maxDate && a > this.maxDate;
        if ("between" == this.method) {
            if (b)
                return !0;
            if (c)
                return !1
        } else if ("before" == this.method) {
            if (c)
                return !1
        } else if ("after" == this.method)
            return b ? !0 : (this.add(a), !1);
        return this.add(a)
    },add: function(a) {
        return this._result.push(a), !0
    },getValue: function() {
        switch (this.method) {
            case "all":
            case "between":
                return this._result;
            case "before":
            case "after":
                return this._result.length ? this._result[this._result.length - 1] : null
        }
    }};
    var B = function(a, b, c) {
        var d = ["all", "between"];
        if (!j(d, a))
            throw new Error('Invalid method "' + a + '". Only all and between works with iterator.');
        this.add = function(a) {
            return c(a, this._result.length) ? (this._result.push(a), !0) : !1
        }, this.init(a, b)
    };
    B.prototype = A.prototype, b && (module.exports = {RRule: y}), "undefined" == typeof ender && (a.RRule = y), "function" == typeof define && define.amd && define("rrule", [], function() {
        return y
    })
}(this), function(a) {
    var b = navigator.userAgent.toLowerCase(), c = function(a) {
        return a.test(b)
    }, d = Object.prototype.toString, e = c(/opera/), f = c(/\bchrome\b/), g = c(/webkit/), h = !f && c(/safari/), i = !e && c(/msie/), j = !!document.createElement("canvas").getContext, k = !g && c(/gecko/), l = c(/ipod|ipad|iphone|android/gi), m = {Linear: function(a, b, c, d) {
        return c * a / d + b
    },Cubic: {easeIn: function(a, b, c, d) {
        return c * (a /= d) * a * a + b
    },easeOut: function(a, b, c, d) {
        return c * ((a = a / d - 1) * a * a + 1) + b
    },easeInOut: function(a, b, c, d) {
        return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
    }}}, n = function(a) {
        var b = !1, c = !1, n = [], o = function() {
            return document.addEventListener ? function() {
                document.removeEventListener("DOMContentLoaded", o, !1), q()
            } : document.attachEvent ? function() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", o), q())
            } : void 0
        }(), p = function() {
            if (!b) {
                try {
                    document.documentElement.doScroll("left")
                } catch (a) {
                    return void setTimeout(p, 1)
                }
                q()
            }
        }, q = function() {
            if (!b) {
                b = !0;
                for (var a = 0; a < n.length; a++)
                    n[a].call(document);
                n = []
            }
        }, r = function() {
            if (!c) {
                if (c = !0, "complete" === document.readyState)
                    return setTimeout(q, 1);
                if (document.addEventListener)
                    document.addEventListener("DOMContentLoaded", o, !1), a.addEventListener("load", q, !1);
                else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", o), a.attachEvent("onload", q);
                    var b = !1;
                    try {
                        b = null == a.frameElement
                    } catch (d) {
                    }
                    document.documentElement.doScroll && b && p()
                }
            }
        }, s = function(a) {
            r(), b ? a.call(document, t) : n.push(function() {
                return a.call(this)
            })
        }, t = function(a) {
            return !a || a.nodeType ? a : "string" == typeof a ? (-1 != a.indexOf("#") && (a = a.substring(1)), document.getElementById(a)) : void ("function" == typeof a && s(a))
        };
        t.apply = function(a, b) {
            if (a && b && "object" == typeof b)
                for (var c in b)
                    "undefined" != typeof b[c] && (a[c] = b[c]);
            if (!b && a) {
                var d = {};
                for (var c in a)
                    d[c] = a[c];
                return d
            }
            return a
        }, t.apply(t, {version: "1.2.1",isEmpty: function(a, b) {
            return null === a || void 0 === a || t.isArray(a) && !a.length || (b ? !1 : "" === a)
        },isArray: function(a) {
            return "[object Array]" === d.apply(a)
        },isObject: function(a) {
            return !!a && "[object Object]" === d.apply(a)
        },isFunction: function(a) {
            return "[object Function]" === d.apply(a)
        },isNumber: function(a) {
            return "number" == typeof a && isFinite(a)
        },isString: function(a) {
            return "string" == typeof a
        },isFalse: function(a) {
            return "boolean" == typeof a && !a
        },isDefined: function(a) {
            return "undefined" != typeof a
        },each: function(a, b, c, d) {
            for (var e = a.length, f = 0; e > f; f++)
                if (d && t.isArray(a[f]))
                    t.each(a[f], b, c, d);
                else if (t.isFalse(b.call(c || a, a[f], f)))
                    break
        },eachAll: function(a, b, c) {
            t.each(a, b, c, !0)
        },sor: function(a, b) {
            for (var c, d = a.length - 1, e = 0; d > e; e++)
                for (var f = d; f > e; f--)
                    (b ? !b(a[f], a[f - 1]) : a[f] < a[f - 1]) && (c = a[f], a[f] = a[f - 1], a[f - 1] = c)
        }}), t.applyIf = function(a, b) {
            if (a && t.isObject(b))
                for (var c in b)
                    t.isDefined(b[c]) && !t.isDefined(a[c]) && (a[c] = b[c]);
            return !b && a ? t.apply(a) : a
        }, t.merge = function(a, b, c, d) {
            if (a && t.isObject(b)) {
                for (var e in b)
                    t.isDefined(b[e]) && (t.isObject(b[e]) ? t.isObject(a[e]) ? t.merge(a[e], b[e]) : a[e] = t.clone(b[e], !0) : a[e] = b[e]);
                return t.merge(a, c, d)
            }
            return a
        }, t.clone = function(a, b, c) {
            var d = {};
            if (t.isArray(a) && t.isObject(b))
                for (var e = 0; e < a.length; e++)
                    d[a[e]] = c && t.isObject(b[a[e]]) ? t.clone(b[a[e]], c) : b[a[e]];
            else if (t.isObject(a))
                for (var f in a)
                    d[f] = b && t.isObject(a[f]) && !a[f].ICHARTJS_OBJECT ? t.clone(a[f], b) : a[f];
            return d
        }, t.override = function(a, b) {
            if (a && b) {
                var c = a.prototype;
                t.apply(c, b), t.isIE && b.hasOwnProperty("toString") && (c.toString = b.toString)
            }
        }, t.extend = function() {
            var a = function(a) {
                for (var b in a)
                    this[b] = a[b]
            }, b = Object.prototype.constructor;
            return function(c, d) {
                var e, f = function() {
                    c.apply(this, arguments)
                }, g = function() {
                }, h = c.prototype;
                return g.prototype = h, e = f.prototype = new g, e.constructor = f, f.superclass = h, h.constructor == b && (h.constructor = c), f.override = function(a) {
                    t.override(f, a)
                }, e.superclass = e.supr = function() {
                    return h
                }, e.override = a, t.override(f, d), f.extend = function(a) {
                    return t.extend(f, a)
                }, f.plugin_ = {}, f.plugin = function(a, b) {
                    t.isString(a) && t.isFunction(b) && (f.plugin_[a] = b)
                }, f
            }
        }();
        var u = Math.sin, v = Math.cos, w = Math.atan, x = Math.sqrt, y = Math.abs, z = Math.PI, A = 2 * z, B = Math.ceil, C = Math.round, D = Math.floor, E = Math.max, F = Math.min, G = parseFloat, H = {}, I = {}, J = function(a, b) {
            if (0 == a)
                return a;
            var c = y(a), d = .1;
            if (c > 1) {
                for (; c > 1; )
                    c /= 10, d = 10 * d;
                return D(a / d + b) * d
            }
            for (d = 1; 1 > c; )
                c = 10 * c, d = 10 * d;
            return C(a * d + b) / d
        }, K = function(a) {
            return a = a.replace(/#/g, "").replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3"), (7 == a.length ? "rgba(" : "rgb(") + parseInt(a.substring(0, 2), 16) + "," + parseInt(a.substring(2, 4), 16) + "," + parseInt(a.substring(4, 6), 16) + (7 == a.length ? ",0." + a.substring(6, 7) + ")" : ")")
        }, L = function(a) {
            var b = /rgb\((\w*),(\w*),(\w*)\)/.exec(a);
            if (b)
                return new Array(b[1], b[2], b[3]);
            if (b = /rgba\((\w*),(\w*),(\w*),(.*)\)/.exec(a))
                return new Array(b[1], b[2], b[3], b[4]);
            throw new Error("invalid colors value '" + a + "'")
        }, M = function(a, b, c) {
            t.isArray(a) && (b = a[1], c = a[2], a = a[0]), a /= 255, b /= 255, c /= 255;
            var d = E(E(a, b), c), e = F(F(a, b), c), f = d - e;
            if (0 == f)
                return new Array(0, 0, d);
            var g;
            return a == d ? g = (b - c) / f : b == d ? g = (c - a) / f + 2 : c == d && (g = (a - b) / f + 4), g *= 60, 0 > g && (g += 360), new Array(g, f / d, d)
        }, N = function(a) {
            if (!a)
                return a;
            if (a = a.replace(/\s/g, "").toLowerCase(), /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.exec(a))
                return a;
            if (/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0(\.\d*)?|1(\.0)?)\)$/.exec(a))
                return a;
            if (/^#(([a-fA-F0-9]{6,7})|([a-fA-F0-9]{3}))$/.exec(a))
                return K(a);
            throw new Error("invalid colors value '" + a + "'")
        }, O = function(a, b, c, d) {
            t.isArray(a) && (d = b, b = a[1], c = a[2], a = a[0]);
            var e, f, g, h = D(a / 60) % 6, i = a / 60 - h, j = c * (1 - b), k = c * (1 - b * i), l = c * (1 - b * (1 - i));
            switch (h) {
                case 0:
                    e = c, f = l, g = j;
                    break;
                case 1:
                    e = k, f = c, g = j;
                    break;
                case 2:
                    e = j, f = c, g = l;
                    break;
                case 3:
                    e = j, f = k, g = c;
                    break;
                case 4:
                    e = l, f = j, g = c;
                    break;
                case 5:
                    e = c, f = j, g = k
            }
            return "rgb" + (d ? "a" : "") + "(" + C(255 * e) + "," + C(255 * f) + "," + C(255 * g) + (d ? "," + d + ")" : ")")
        }, P = .05, Q = .14, R = function(a, b) {
            return b = b || Q, a > .5 ? b - (1 - a) / 10 : a > .1 ? b - .16 + a / 5 : a > b ? b : a / 2
        }, S = function(a, b, c, d) {
            if (!b)
                return b;
            b = L(N(b));
            var e = M(b);
            return d = 0 != d ? d || P : d, e[1] -= d, a ? (e[2] -= R(e[2], c), e[1] = t.upTo(e[1], 1), e[2] = t.lowTo(e[2], 0)) : (e[2] += R(1 - e[2], c), e[1] = t.lowTo(e[1], 0), e[2] = t.upTo(e[2], 1)), O(e, b[3])
        };
        return t.apply(t, {getFont: function(a, b, c, d) {
            return a + " " + b + (d || "px") + " " + c
        },getDoc: function() {
            var b = a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document;
            return b
        },_Abstract: function(a, b) {
            if (!b[a])
                throw new Error("You must implements method '" + a + "' in " + b.type)
        },getAA: function(a) {
            return "linear" == a ? m.Linear : "easeInOut" == a || "easeIn" == a || "easeOut" == a ? m.Cubic[a] : m.Linear
        },noConflict: function() {
            return t
        },plugin: function(a, b, c) {
            t.isFunction(a) && a.plugin(b, c)
        },parsePadding: function(a, b) {
            return a = a || 0, t.isNumber(a) ? new Array(a, a, a, a) : t.isArray(a) ? a : (b = b || 0, a = a.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, /\s/).replace(/\s/g, ",").split(","), 1 == a.length ? a[0] = a[1] = a[2] = a[3] = G(a[0]) || b : 2 == a.length ? (a[0] = a[2] = G(a[0]) || b, a[1] = a[3] = G(a[1]) || b) : 3 == a.length ? (a[0] = G(a[0]) || b, a[1] = a[3] = G(a[1]) || b, a[2] = G(a[2]) || b) : (a[0] = G(a[0]) || b, a[1] = G(a[1]) || b, a[2] = G(a[2]) || b, a[3] = G(a[3]) || b), a)
        },distanceP2P: function(a, b, c, d) {
            return x((c - a) * (c - a) + (d - b) * (d - b))
        },atan2Radian: function(a, b, c, d) {
            if (a == c)
                return d > b ? z / 2 : 3 * z / 2;
            if (b == d)
                return c > a ? 0 : z;
            var e = t.quadrant(a, b, c, d), f = w(y((b - d) / (a - c)));
            return e ? (3 == e ? A : z) + (2 == e ? f : -f) : f
        },angle2Radian: function(a) {
            return a * z / 180
        },radian2Angle: function(a) {
            return 180 * a / z
        },quadrant: function(a, b, c, d) {
            return c > a ? d > b ? 0 : 3 : d > b ? 1 : 2
        },toPI2: function(a) {
            for (; 0 > a; )
                a += A;
            return a
        },visible: function(a, b, c) {
            if (a >= b)
                return [];
            var d = t.quadrantd(a), e = t.quadrantd(b);
            if ((2 == d || 3 == d) && (2 == e || 3 == e) && z > b - a)
                return [];
            if (a = t.toPI2(a), b = t.toPI2(b), a >= b && (b += A), a > z)
                a = A;
            else {
                if (b > A)
                    return [{s: a,e: z,f: c}, {s: A,e: b,f: c}];
                b > z && (b = z)
            }
            return {s: a,e: b,f: c}
        },quadrantd: function(a) {
            if (0 == a)
                return 0;
            if (a % A == 0)
                return 3;
            for (; 0 > a; )
                a += A;
            return B(2 * (a % A) / z) - 1
        },upTo: function(a, b) {
            return b > a ? a : b
        },lowTo: function(a, b) {
            return a > b ? a : b
        },between: function(a, b, c) {
            return a > b ? t.between(b, a, c) : c > b ? b : a > c ? a : c
        },inRange: function(a, b, c) {
            return b > c && c > a
        },angleInRange: function(a, b, c) {
            return c -= a, c = 0 > c ? c + A : c, c %= A, b - a > c
        },angleZInRange: function(a, b, c) {
            return a > b ? c > a || b > c : b > c && c > a
        },inRangeClosed: function(a, b, c) {
            return b >= c && c >= a
        },inEllipse: function(a, b, c, d) {
            return 1 >= a * a / c / c + b * b / d / d
        },p2Point: function(a, b, c, d) {
            return {x: a + v(c) * d,y: b + u(c) * d}
        },toRgb: N,toRgba: function(a, b) {
            var c = L(N(a));
            return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + b + ")"
        },vectorP2P: function(a, b, c) {
            return c || (b = t.angle2Radian(b), a = t.angle2Radian(a)), b = u(b), {x: b * u(a),y: b * v(a)}
        },uid: function() {
            var a = function() {
                return D(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return function(b) {
                return (b || "ijs") + "_" + a() + a() + a()
            }
        }(),register: function(a) {
            if (t.isString(a))
                I[a.toLowerCase()] = a;
            else {
                var b = a.get("id");
                if (b && "" != b || (b = a.push("id", t.uid(a.type))), H[b])
                    throw new Error("Exist Reduplicate id :" + b);
                a.id = b, H[b] = a
            }
        },create: function(a) {
            if (!a.type || !I[a.type])
                throw new Error("TypeNotFoundException[" + a.type + "]");
            return new t[I[a.type]](a)
        },remove: function(a) {
            var b = H[a];
            b.destroy(), delete H[a]
        },get: function(a) {
            return H[a]
        },isPercent: function(a) {
            return t.isString(a) && a.match(/(.*)%/)
        },parsePercent: function(a, b) {
            return t.isString(a) && (a = a.match(/(.*)%/), a && (a = b ? D(G(a[1]) * b / 100) : a[1] / 100)), !a || 0 >= a || a > b ? b : a
        },parseFloat: function(a, b) {
            if (!t.isNumber(a) && (a = G(a), !t.isNumber(a)))
                throw new Error("[" + b + "]is not a valid number.");
            return a
        },ceil: function(a) {
            return J(a, 1)
        },floor: function(a) {
            return J(a, -1)
        },_2D: "2d",_3D: "3d",light: function(a, b, c) {
            return S(!1, a, b, c)
        },dark: function(a, b, c) {
            return S(!0, a, b, c)
        },fixPixel: function(a) {
            return t.isNumber(a) ? a : G(a.replace("px", "")) || 0
        },toPixel: function(a) {
            return t.isNumber(a) ? a + "px" : t.fixPixel(a) + "px"
        },emptyFn: function() {
            return !0
        },ratio: a.devicePixelRatio || 1,supportCanvas: j,isOpera: e,isWebKit: g,isChrome: f,isSafari: h,isIE: i,isGecko: k,isMobile: l,touch: "ontouchend" in document,FRAME: l ? 30 : 60}), t.Assert = {isTrue: function(a, b) {
            if (a !== !0)
                throw new Error(b)
        }}, t.requestAnimFrame = function() {
            var b = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(b) {
                a.setTimeout(b, 1e3 / 60)
            };
            return function(a) {
                b(a)
            }
        }(), t.Event = {addEvent: function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
        },fix: function(b) {
            "undefined" == typeof b && (b = a.event);
            var c = {target: b.target,pageX: b.pageX,pageY: b.pageY,offsetX: b.offsetX,offsetY: b.offsetY,stopPropagation: !1,event: b};
            if ("undefined" == typeof b.offsetX) {
                var d = document.documentElement || {}, e = document.body, f = (d.scrollLeft || e.scrollLeft || 0) - (d.clientLeft || e.clientLeft || 0), g = (d.scrollTop || e.scrollTop || 0) - (d.clientTop || e.clientTop || 0), h = b.targetTouches;
                b.target || (c.target = b.srcElement || (h ? h[0].target : d || e)), h && (c.pageX = h[0].pageX, c.pageY = h[0].pageY), null == c.pageX && null != b.clientX && (c.pageX = b.clientX + f, c.pageY = b.clientY + g);
                var i = 0, j = 0, k = c.target;
                if (k.getBoundingClientRect) {
                    var l = k.getBoundingClientRect();
                    i = l.left + (a.pageXOffset || f), j = l.top + (a.pageYOffset || g)
                } else
                    for (; k != document.body && k; )
                        i += k.offsetLeft - (k.scrollLeft || 0), j += k.offsetTop, k = k.offsetParent;
                c.offsetX = c.pageX - i, c.offsetY = c.pageY - j
            }
            return c.x = c.offsetX, c.y = c.offsetY, b.stopPropagation || (b.stopPropagation = function() {
                a.event.cancelBubble = !0
            }), c
        }}, t
    }(a);
    a.iChart = n, a.$ || (a.$ = n)
}(window), function(a) {
    a.Element = function(b) {
        var c = this._();
        c.type = "element", c.ICHARTJS_OBJECT = !0, a._Abstract("configure", c), a._Abstract("afterConfiguration", c), c.options = {}, c.set({border: {enable: !1,color: "#BCBCBC",style: "solid",width: 1,radius: 0},shadow: !1,shadow_color: "#666666",shadow_blur: 4,shadow_offsetx: 0,shadow_offsety: 0}), c.variable = {}, c.events = {mouseup: [],touchstart: [],touchmove: [],touchend: [],mousedown: [],dblclick: []}, c.registerEvent("initialize"), c.configure.apply(c, Array.prototype.slice.call(arguments, 1)), c.default_ = a.clone(c.options, !0), c.set(b), c.afterConfiguration(c)
    }, a.Element.prototype = {W: "width",H: "height",O: "top",B: "bottom",L: "left",R: "right",C: "center",X: "originx",Y: "originy",_: function() {
        return this
    },afterConfiguration: function(b) {
        if (a.isObject(b.get("listeners")))
            for (var c in b.get("listeners"))
                b.on(c, b.get("listeners")[c]);
        b.initialize(), b.fireEvent(b, "initialize", [b])
    },registerEvent: function() {
        for (var a = 0; a < arguments.length; a++)
            this.events[arguments[a]] = []
    },fireString: function(b, c, d, e) {
        var f = this.fireEvent(b, c, d);
        return a.isString(f) ? f : f !== !0 && a.isDefined(f) ? f.toString() : e
    },fireEvent: function(a, b, c) {
        var d = this.events[b].length;
        if (1 == d)
            return this.events[b][0].apply(a, c);
        for (var e = !0, f = 0; d > f; f++)
            this.events[b][f].apply(a, c) || (e = !1);
        return e
    },on: function(b, c) {
        return a.isString(b) && a.isArray(this.events[b]) ? this.events[b].push(c) : a.isArray(b) && a.each(b, function(a) {
            this.on(a, c)
        }, this), this
    },getPlugin: function(a) {
        return this.constructor.plugin_[a]
    },set: function(b) {
        a.isObject(b) && a.merge(this.options, b)
    },pushIf: function(b, c) {
        return a.isDefined(this.get(b)) && null != this.get(b) ? this.get(b) : this.push(b, c)
    },push: function(a, b) {
        for (var c = a.split("."), d = c.length - 1, e = this.options, f = 0; d > f; f++)
            e[c[f]] || (e[c[f]] = {}), e = e[c[f]];
        return e[c[d]] = b, b
    },get: function(a) {
        for (var b = a.split("."), c = this.options[b[0]], d = 1; d < b.length; d++) {
            if (!c)
                return null;
            c = c[b[d]]
        }
        return c
    }}, a.Html = a.extend(a.Element, {configure: function(b) {
        this.type = "html", this.T = b, a._Abstract("beforeshow", this), this.set({animation: !0,default_action: !0,width: 0,height: 0,style: "",index: 999,offset_top: 0,offset_left: 0}), this.transitions = ""
    },initialize: function() {
        var a = this._();
        a.wrap = a.get("wrap"), a.dom = document.createElement("div"), a.get("shadow") && a.css("boxShadow", a.get("shadow_offsetx") + "px " + a.get("shadow_offsety") + "px " + a.get("shadow_blur") + "px " + a.get("shadow_color")), a.get("border.enable") && (a.css("border", a.get("border.width") + "px " + a.get("border.style") + " " + a.get("border.color")), a.css("borderRadius", a.get("border.radius") + "px")), a.css("position", "absolute"), a.css("zIndex", a.get("index")), a.applyStyle(), a.wrap.appendChild(a.dom), a.style = a.dom.style, a.get("default_action") && a.doAction(a)
    },width: function() {
        return this.dom.offsetWidth
    },height: function() {
        return this.dom.offsetHeight
    },onTransitionEnd: function(b, c) {
        var d = "transitionend";
        a.isWebKit ? d = "webkitTransitionEnd" : a.isOpera && (d = "oTransitionEnd"), a.Event.addEvent(this.dom, d, b, c)
    },destroy: function() {
        this.wrap.removeChild(this.dom), this.dom = null
    },transition: function(b) {
        this.transitions = "" == this.transitions ? b : this.transitions + "," + b, a.isWebKit ? this.css("WebkitTransition", this.transitions) : a.isGecko ? this.css("MozTransition", this.transitions) : a.isOpera ? this.css("OTransition", this.transitions) : this.css("transition", this.transitions)
    },beforeshow: function(a, b, c) {
        c.follow(a, b, c)
    },show: function(a, b) {
        this.beforeshow(a, b, this), this.css("visibility", "visible"), this.get("animation") && this.css("opacity", 1)
    },hidden: function() {
        this.css("visibility", "hidden")
    },getDom: function() {
        return this.dom
    },css: function(b, c) {
        if (a.isString(b)) {
            if (!a.isDefined(c))
                return this.dom.style[b];
            this.dom.style[b] = c
        }
    },applyStyle: function() {
        for (var a, b = this.get("style").split(";"), c = 0; c < b.length; c++)
            a = b[c].split(":"), a.length > 1 && this.css(a[0], a[1])
    }}), a.Painter = a.extend(a.Element, {configure: function() {
        this.type = "painter", this.dimension = a._2D, a._Abstract("commonDraw", this), a._Abstract("initialize", this), this.set({strokeStyle: "gray",padding: 10,color: "black",offsetx: 0,offsety: 0,background_color: "#FEFEFE",color_factor: .15,style: "",border: {enable: !0},gradient: !1,gradient_mode: "LinearGradientUpDown",z_index: 0,listeners: null,originx: null,originy: null}), this.variable.event = {mouseover: !1}, this.variable.animation = {}, this.registerEvent("click", "mousemove", "mouseover", "mouseout", "beforedraw", "draw")
    },is3D: function() {
        return this.dimension == a._3D
    },tf: function(b) {
        var c = this._();
        return a.isFunction(c.get(b)) ? c.get(b).apply(c, [c.T, b]) : c.get(b)
    },applyGradient: function(a, b, c, d) {
        var e = this._();
        e.get("gradient") && e.get("f_color") && (e.push("f_color", e.T.gradient(a || e.x || 0, b || e.y || 0, c || e.get(e.W), d || e.get(e.H), [e.get("dark_color"), e.get("light_color")], e.get("gradient_mode"))), e.push("light_color", e.T.gradient(a || e.x || 0, b || e.y || 0, c || e.get(e.W), d || e.get(e.H), [e.get("background_color"), e.get("light_color")], e.get("gradient_mode"))), e.push("f_color_", e.get("f_color")))
    },draw: function(a, b) {
        if (b)
            this.root.draw(a);
        else {
            if (!this.fireEvent(this, "beforedraw", [this, a]))
                return this;
            this.commonDraw(this, a), this.fireEvent(this, "draw", [this, a])
        }
    },inject: function(a) {
        a && (this.root = a, this.target = this.T = a.T)
    },doConfig: function() {
        var b = this._(), c = a.parsePadding(b.get("padding")), d = b.get("border.enable"), d = d ? a.parsePadding(b.get("border.width")) : [0, 0, 0, 0], e = a.toRgb(b.get("background_color")), f = b.get("color_factor"), g = b.get("gradient") ? 0 : null;
        if (b.set({border_top: d[0],border_right: d[1],border_bottom: d[2],border_left: d[3],hborder: d[1] + d[3],vborder: d[0] + d[2],padding_top: c[0] + d[0],padding_right: c[1] + d[1],padding_bottom: c[2] + d[2],padding_left: c[3] + d[3],hpadding: c[1] + c[3] + d[1] + d[3],vpadding: c[0] + c[2] + d[0] + d[2]}), b.push("f_color", e), b.push("f_color_", e), b.push("light_color", a.light(e, f, g)), b.push("dark_color", a.dark(e, .8 * f, g)), b.push("light_color2", a.light(e, 2 * f, g)), b.is3D() && !b.get("xAngle_")) {
            var h = a.vectorP2P(b.get("xAngle"), b.get("yAngle"));
            b.push("xAngle_", h.x), b.push("yAngle_", h.y)
        }
    }}), a.Component = a.extend(a.Painter, {configure: function(b) {
        a.Component.superclass.configure.apply(this, arguments), this.type = "component", this.set({fontsize: 12,font: "Verdana",fontweight: "normal",fontunit: "px",tip: {enable: !1,border: {width: 2}}}), this.atomic = !1, this.proxy = !1, this._chart = !1, this.inject(b)
    },initialize: function() {
        a._Abstract("isEventValid", this), a._Abstract("doDraw", this), this.doConfig()
    },getDimension: function() {
        return {x: this.x,y: this.y,width: this.get("width"),height: this.get("height")}
    },destroy: function() {
        this.tip && this.tip.destroy()
    },doConfig: function() {
        a.Component.superclass.doConfig.call(this);
        var b = this._(), c = b.get(b.W), d = b.get("maxwidth"), e = b.get(b.X);
        if (c && d && (c = b.push(b.W, a.parsePercent(c, d)), c > d && (c = b.push("width", d)), d > c)) {
            var f = b.get("align") || b.C;
            f == b.C ? e += (d - c) / 2 : f == b.R && (e += d - c)
        }
        b.x = b.push(b.X, e + b.get("offsetx")), b.y = b.push(b.Y, b.get(b.Y) + b.get("offsety")), b.push("fontStyle", a.getFont(b.get("fontweight"), b.get("fontsize"), b.get("font"), b.get("fontunit"))), b.data = b.get("data"), b.get("tip.enable") && (b.pushIf("tip.border.color", b.get("f_color")), a.isFunction(b.get("tip.invokeOffset")) || b.push("tip.invokeOffset", b.tipInvoke()))
    },isMouseOver: function(a) {
        return this.isEventValid(a, this)
    },redraw: function(a) {
        this.root.draw(a, this.root.Combination)
    },last: a.emptyFn,commonDraw: function(a) {
        a.proxy || a.doDraw.call(a, a)
    }}), a.Legend = a.extend(a.Component, {configure: function() {
        a.Legend.superclass.configure.apply(this, arguments), this.type = "legend", this.set({data: void 0,width: "auto",column: 1,row: "max",maxwidth: 0,line_height: 16,sign: "square",sign_size: 10,sign_space: 5,legend_space: 5,z_index: 1009,text_with_sign_color: !1,align: "right",valign: "middle"}), this.atomic = !0, this.registerEvent("parse")
    },isEventValid: function(b, c) {
        var d = {valid: !1}, e = c.get("line_height");
        return b.x > this.x && b.x < c.x + c.width && b.y > c.y && b.y < c.y + c.height && a.each(c.data, function(a, f) {
            return b.x > a.x && b.x < a.x + a.width_ + c.get("signwidth") && b.y > a.y - e / 2 && b.y < a.y + e / 2 ? (d = {valid: !0,index: f,target: a}, !1) : void 0
        }, c), d
    },drawCell: function(a, b, c, d, e, f) {
        var g = f.get("sign_size"), h = f.getPlugin("sign");
        h && h.call(f, f.T, e, {x: a + g / 2,y: b}, g, d) || (-1 != e.indexOf("bar") && f.T.box(a, b - g / 12, g, g / 6, 0, d), "round" == e ? f.T.round(a + g / 2, b, g / 2, d) : "round-bar" == e ? f.T.round(a + g / 2, b, g / 4, d) : "square-bar" == e ? f.T.box(a + g / 4, b - g / 4, g / 2, g / 2, 0, d) : "square" == e && f.T.box(a, b - g / 2, g, g, 0, d)), f.T.fillText(c, a + f.get("signwidth"), b, 0, f.get("text_with_sign_color") ? d : f.get("color"), "lr", f.get("line_height"))
    },doDraw: function(b) {
        b.T.box(b.x, b.y, b.width, b.height, b.get("border"), b.get("f_color"), !1, b.get("shadow")), b.T.textStyle(b.L, "middle", a.getFont(b.get("fontweight"), b.get("fontsize"), b.get("font"))), a.each(b.data, function(a) {
            b.drawCell(a.x, a.y, a.text, a.color, a.sign, b)
        })
    },doLayout: function(b, c) {
        var d = b.get("sign_size"), e = 0, f = 0, g = 0, h = b.get("column"), i = b.get("row"), j = b.data.length;
        h = h > j ? j : h, b.T.textFont(b.get("fontStyle")), b.get("line_height") < d && b.push("line_height", d + d / 5), b.push("signwidth", d + b.get("sign_space")), a.each(b.data, function(a) {
            a.width_ = b.T.measureText(a.text)
        }, b);
        for (var k = 0; h > k; k++) {
            g = 0;
            for (var l = k; j > l; l += h)
                g = Math.max(g, b.data[l].width_);
            b.columnwidth[k] = g, e += g
        }
        for (var k = 0; i > k; k++) {
            g = 0;
            for (var l = k * h; j > l; l++)
                g = Math.max(g, b.data[l].text.split("\n").length);
            b.columnheight[k] = g, f += g
        }
        if (e = b.push(b.W, e + b.get("hpadding") + b.get("signwidth") * h + (h - 1) * b.get("legend_space")), e > b.get("maxwidth")) {
            var m = Math.floor(b.get("fontsize") * (b.get("maxwidth") / e));
            if (!(10 > m && 1 == h))
                return m > 9 ? b.push("fontStyle", a.getFont(b.get("fontweight"), b.push("fontsize", m), b.get("font"))) : h > 1 && b.push("row", Math.ceil(j / b.push("column", h - 1))), void b.doLayout(b, c)
        }
        var n, o, p, q;
        b.width = e, b.height = f = b.push(b.H, f * b.get("line_height") + b.get("vpadding")), b.y = b.get("valign") == b.O ? c.get("t_originy") : b.get("valign") == b.B ? c.get("b_originy") - f : c.get("centery") - f / 2, b.x = b.get("align") == b.L ? c.get("l_originx") : b.get("align") == b.C ? c.get("centerx") - e / 2 : c.get("r_originx") - e, b.x = b.push(b.X, (b.x < 0 ? c.get("l_originx") : b.x) + b.get("offsetx")), b.y = b.push(b.Y, (b.y < 0 ? c.get("t_originy") : b.y) + b.get("offsety")), p = b.y + b.get("padding_top"), d = b.get("legend_space") + b.get("signwidth");
        for (var k = 0; i > k; k++) {
            o = b.x + b.get("padding_left"), q = b.columnheight[k] / 2 * b.get("line_height"), p += q;
            for (var l = 0; h > l && j > k * h + l; l++)
                n = b.data[k * h + l], n.y = p, n.x = o, o += b.columnwidth[l] + d;
            p += q
        }
    },doConfig: function() {
        a.Legend.superclass.doConfig.call(this);
        var b = this._(), c = b.root, d = a.isNumber(b.get("column")), e = a.isNumber(b.get("row")), f = b.data.length;
        b.get("align") == b.C && "middle" == b.get("valign") && b.push("valign", b.O), c.get("align") == b.L && "middle" == b.get("valign") && b.push("align", b.R), a.each(b.data, function(c, d) {
            a.merge(c, b.fireEvent(b, "parse", [b, c.name, d])), c.text = c.text || c.name || "", c.sign = c.sign || b.get("sign")
        }, b), d || e || (d = b.push("column", 1)), d && !e && (e = b.push("row", Math.ceil(f / b.get("column")))), !d && e && (d = b.push("column", Math.ceil(f / b.get("row")))), d = b.get("column"), e = b.get("row"), f > e * d && (e += Math.ceil((f - e * d) / d), e = b.push("row", e)), b.columnwidth = [], b.columnheight = [], b.doLayout(b, c)
    }}), a.Label = a.extend(a.Component, {configure: function() {
        a.Label.superclass.configure.apply(this, arguments), this.type = "label", this.set({text: "",line_height: 12,line_thickness: 1,sign: "square",sign_size: 12,padding: "2 5",offsety: 2,sign_space: 5,background_color: "#efefef",text_with_sign_color: !1}), this.atomic = !0, this.registerEvent()
    },isEventValid: function(b, c) {
        return {valid: a.inRange(c.labelx, c.labelx + c.get(c.W), b.x) && a.inRange(c.labely, c.labely + c.get(c.H), b.y)}
    },text: function(a) {
        a && this.push("text", a), this.push(this.W, this.T.measureText(this.get("text")) + this.get("hpadding") + this.get("sign_size") + this.get("sign_space"))
    },localizer: function(a) {
        var b = a.get("quadrantd"), c = a.get("line_points"), d = a.get("smooth"), b = b >= 1 && 2 >= b, e = a.get("labelx"), f = a.get("labely");
        a.labelx = e + (b ? -a.get(a.W) - d : d), a.labely = f - a.get(a.H) / 2, c[2] = {x: e,y: f}, c[3] = {x: c[2].x + (b ? -d : d),y: c[2].y}
    },doLayout: function(b, c, d, e) {
        e.push("labelx", e.get("labelx") + b / d), e.push("labely", e.get("labely") + c / d), a.each(e.get("line_points"), function(a, d) {
            return a.x += b, a.y += c, 1 == d
        }, e), e.localizer(e)
    },doDraw: function(a) {
        var b = a.get("line_points"), c = a.get("sign_size"), d = a.labelx + a.get("padding_left"), e = a.labely + a.get("padding_top");
        a.T.label(b, a.get("line_thickness"), a.get("border.color")), a.T.box(a.labelx, a.labely, a.get(a.W), a.get(a.H), a.get("border"), a.get("f_color"), !1, a.get("shadow")), a.T.textStyle(a.L, a.O, a.get("fontStyle"));
        var f = a.get("color");
        a.get("text_with_sign_color") && (f = a.get("scolor")), "square" == a.get("sign") ? a.T.box(d, e, c, c, 0, a.get("scolor")) : a.get("sign") && a.T.round(d + c / 2, e + c / 2, c / 2, a.get("scolor")), a.T.fillText(a.get("text"), d + c + a.get("sign_space"), e, a.get("textwidth"), f)
    },doConfig: function() {
        a.Label.superclass.doConfig.call(this);
        var b = this._();
        b.T.textFont(b.get("fontStyle")), b.get("fontsize") > b.get("line_height") && b.push("line_height", b.get("fontsize")), b.get("sign") || (b.push("sign_size", 0), b.push("sign_space", 0)), b.push(b.H, b.get("line_height") + b.get("vpadding")), b.text(), b.localizer(b)
    }}), function(a) {
        function b(b) {
            this.canvas = "string" == typeof b ? a(b) : b, this.c = this.canvas.getContext("2d")
        }
        var c = Math.PI, d = c / 90, e = d / 2, f = Math.ceil, g = Math.floor, h = 2 * c, i = Math.max, j = Math.min, k = Math.sin, l = Math.cos, m = function(a, b) {
            return 1 == a ? g(b) + .5 : Math.round(b)
        }, n = function(a, b, c, d) {
            var e, f, g, h, k = b.x, l = b.y, m = a[c - 1], n = a[c + 1];
            if (c < a.length - 1) {
                var o, p = m.y, q = n.y;
                e = (d * k + m.x) / (d + 1), f = (d * l + p) / (d + 1), g = (d * k + n.x) / (d + 1), h = (d * l + q) / (d + 1), o = (h - f) * (g - k) / (g - e) + l - h, f += o, h += o, f > p && f > l ? (f = i(p, l), h = 2 * l - f) : p > f && l > f && (f = j(p, l), h = 2 * l - f), h > q && h > l ? (h = i(q, l), f = 2 * l - h) : q > h && l > h && (h = j(q, l), f = 2 * l - h), b.rcx = g, b.rcy = h
            }
            return [m.rcx || m.x, m.rcy || m.y, e || k, f || l, k, l]
        }, o = function(b) {
            return a.isNumber(b) ? b : a.parseFloat(b, b)
        }, p = function(b, c) {
            var d, e, f = 0, g = 0, h = !1, k = c.get("labels");
            if (c.data = b, "simple" == c.dataType)
                c.total = 0, a.each(b, function(b) {
                    if (b.background_color = b.color, f = b.value || 0, a.isArray(f)) {
                        var k = 0;
                        g = f.length > g ? f.length : g;
                        for (var l = 0; l < f.length; l++)
                            null != f[l] && (f[l] = o(f[l]), k += f[l], h || (d = e = f[l], h = !0), d = i(f[l], d), e = j(f[l], e));
                        b.total = k
                    } else
                        f = o(f), b.value = f, c.total += f, h || (d = e = f, h = !0), d = i(f, d), e = j(f, e)
                }, c), a.isArray(k) && (g = k.length > g ? k.length : g), c.push("maxItemSize", g);
            else if ("stacked" == c.dataType || "complex" == c.dataType) {
                var l, m, n, p = k.length, q = "stacked" == c.dataType;
                if (0 == p) {
                    p = b[0].value.length;
                    for (var r = 0; p > r; r++)
                        k.push("")
                }
                c.columns = [];
                for (var r = 0; p > r; r++)
                    l = [], m = 0, a.each(b, function(c, g) {
                        f = c.value[r], (f || 0 == f) && (c.value[r] = f = o(f), m += f, q ? n = b[g].color : (n = c.color, h || (d = e = f, h = !0), d = i(f, d), e = j(f, e)), l.push(a.applyIf({name: c.name,value: c.value[r],background_color: n,color: n}, a.isArray(c.extra) ? c.extra[r] || {} : c)))
                    }), q && (h || (d = e = f, h = !0), d = i(m, d), e = j(m, e)), c.columns.push({total: m,name: k[r],item: l})
            }
            c.push("minValue", e), c.push("maxValue", d), c.doConfig()
        };
        b.prototype = {getContext: function() {
            return this.c
        },css: function(b, c) {
            return a.isDefined(c) ? void (this.canvas.style[b] = c) : this.canvas.style[b]
        },ellipse: function(a, b, c, e, f, g, h, i, j, m, n, o, p, q) {
            var r = f, p = !!p;
            for (this.save().gCo(q).strokeStyle(i, j, m).shadowOn(n).fillStyle(h).moveTo(a, b).beginPath(), p && this.moveTo(a, b); g >= r; )
                this.lineTo(a + c * l(r), b + e * k(r)), r += d;
            return this.lineTo(a + c * l(g), b + e * k(g)).closePath().stroke(i).fill(h).restore()
        },arc: function(a, b, c, d, e, f, h, i, j, m, n, o, p, q) {
            return i && (c -= g(j / 2)), 0 >= c ? this : (this.save().gCo(q).strokeStyle(i, j, m).fillStyle(h).beginPath(), d ? (this.moveTo(a + l(e) * (c - d), b + k(e) * (c - d)).lineTo(a + l(e) * c, b + k(e) * c), this.c.arc(a, b, c, e, f, o), this.lineTo(a + l(f) * (c - d), b + k(f) * (c - d)), this.c.arc(a, b, c - d, f, e, !o)) : (this.c.arc(a, b, c, e, f, o), p && this.lineTo(a, b)), this.closePath(), i ? this.shadowOn(n).stroke(i).shadowOff().fill(h) : this.shadowOn(n).fill(h), this.restore())
        },sector: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
            return k && this.arc(a, b, c, d, e, f, g, h, i, j, k, l, !m, !n), this.arc(a, b, c, d, e, f, g, h, i, j, !1, l, !m)
        },sector3D: function() {
            var b = function(b, c, e, f, g, h, i, j, m) {
                var n = function(a, d) {
                    this.lineTo(b + e * l(a), c + (d || 0) + f * k(a))
                }, o = g;
                for (this.fillStyle(a.dark(m)).moveTo(b + e * l(g), c + f * k(g)).beginPath(); h >= o; )
                    n.call(this, o), o += d;
                for (n.call(this, h), this.lineTo(b + e * l(h), c + j + f * k(h)), o = h; o >= g; )
                    n.call(this, o, j), o -= d;
                n.call(this, g, j), this.lineTo(b + e * l(g), c + f * k(g)).closePath().fill(!0)
            }, c = function(a, b, c, d, e, f, g, h) {
                var i = a + c * l(g), j = b + f + d * k(g);
                this.moveTo(a, b).beginPath().fillStyle(h).lineTo(a, b + f).lineTo(i, j).lineTo(i, j - f).lineTo(a, b).closePath().fill(!0)
            }, e = function(b, d, e, f, g, h, i, j, k) {
                var l = a.quadrantd(g), m = a.quadrantd(h);
                k = a.dark(k), (1 == l || 2 == l) && c.call(this, b, d, e, f, i, j, g, k), (0 == m || 3 == m) && c.call(this, b, d, e, f, i, j, h, k)
            }, f = function(a, c, d, f, g, h, i, j, k, l, m, n, o) {
                return this.ellipse(a, c + i, d, f, g, h, j, k, l, m, n, o, !0), e.call(this, a, c, d, f, g, h, o, i, j), this.ellipse(a, c, d, f, g, h, j, k, l, m, !1, o, !0), b.call(this, a, c, d, f, g, h, o, i, j), this
            };
            return f.layerPaint = e, f.sPaint = b, f.layerDraw = c, f
        }(),textStyle: function(a, b, c) {
            return this.textAlign(a).textBaseline(b).textFont(c)
        },strokeStyle: function(a, b, c, d) {
            return a && (b && (this.c.lineWidth = b), c && (this.c.strokeStyle = c), d && (this.c.lineJoin = d)), this
        },globalAlpha: function(a) {
            return a && (this.c.globalAlpha = a), this
        },fillStyle: function(a) {
            return a && (this.c.fillStyle = a), this
        },arc2: function(a, b, c, d, e, f) {
            return c && this.c.arc(a, b, c, d, e, f), this
        },textAlign: function(a) {
            return a && (this.c.textAlign = a), this
        },textBaseline: function(a) {
            return a && (this.c.textBaseline = a), this
        },textFont: function(a) {
            return a && (this.c.font = a), this
        },shadowOn: function(a) {
            return a && (this.c.shadowColor = a.color, this.c.shadowBlur = a.blur, this.c.shadowOffsetX = a.offsetx, this.c.shadowOffsetY = a.offsety), this
        },shadowOff: function() {
            return this.c.shadowColor = "rgba(0,0,0,0.0)", this.c.shadowBlur = this.c.shadowOffsetX = this.c.shadowOffsetY = 0, this
        },gradient: function(a, b, c, d, e, f, g) {
            f = f.toLowerCase();
            var h = a, i = b, j = !f.indexOf("linear");
            if (f = f.substring(14), j) {
                switch (f) {
                    case "updown":
                        i += d;
                        break;
                    case "downup":
                        b += d;
                        break;
                    case "leftright":
                        h += c;
                        break;
                    case "rightleft":
                        a += c;
                        break;
                    default:
                        return e[0]
                }
                return this.avgLinearGradient(a, b, h, i, e)
            }
            return a += c / 2, b += d / 2, this.avgRadialGradient(a, b, g || 0, a, b, c > d ? d : c, "outin" == f ? e.reverse() : e)
        },avgLinearGradient: function(a, b, c, d, e) {
            for (var f = this.createLinearGradient(a, b, c, d), g = 0; g < e.length; g++)
                f.addColorStop(g / (e.length - 1), e[g]);
            return f
        },createLinearGradient: function(a, b, c, d) {
            return this.c.createLinearGradient(a, b, c, d)
        },avgRadialGradient: function(a, b, c, d, e, f, g) {
            for (var h = this.createRadialGradient(a, b, c, d, e, f), i = 0; i < g.length; i++)
                h.addColorStop(i / (g.length - 1), g[i]);
            return h
        },createRadialGradient: function(a, b, c, d, e, f) {
            return this.c.createRadialGradient(a, b, c, d, e, f)
        },text: function(a, b, c, d, e, f, g, h, i, j, k, l) {
            return this.save().textStyle(f, g, h).fillText(a, b, c, d, e, i, j, k, l).restore()
        },fillText: function(b, c, d, f, g, h, i, j, k) {
            if (b = b.toString(), !b || !b.length)
                return this;
            f = f || !1, h = h || "lr", i = i || 16, c = m(0, c), d = m(0, d);
            var l = b.split("tb" == h ? "" : "\n");
            l.length > 1 && ("middle" == this.c.textBaseline ? d -= (l.length - 1) * i / 2 : "bottom" == this.c.textBaseline && (d -= (l.length - 1) * i)), this.save().fillStyle(g).translate(c, d).rotate(e * k).shadowOn(j);
            try {
                a.each(l, function(a, b) {
                    f && f > 0 ? this.c.fillText(a, 0, b * i, f) : this.c.fillText(a, 0, b * i)
                }, this)
            } catch (n) {
                console.log(n.message + "[" + b + "," + c + "," + d + "]")
            }
            return this.restore()
        },measureText: function(b) {
            var c = 0;
            return a.each(b.split("\n"), function(a) {
                c = i(this.measureText(a).width, c)
            }, this.c), c
        },moveTo: function(a, b) {
            return a = a || 0, b = b || 0, this.c.moveTo(a, b), this
        },lineTo: function(a, b) {
            return a = a || 0, b = b || 0, this.c.lineTo(a, b), this
        },save: function() {
            return this.c.save(), this
        },restore: function() {
            return this.c.restore(), this
        },beginPath: function() {
            return this.c.beginPath(), this
        },closePath: function() {
            return this.c.closePath(), this
        },stroke: function(a) {
            return a && this.c.stroke(), this
        },fill: function(a) {
            return a && this.c.fill(), this
        },cube: function(b, c, d, e, f, g, h, i, j, k, l, n) {
            b = m(k, b), c = m(k, c), h = h && h > 0 ? h : f;
            var o = b + h * d, p = c - h * e;
            return o = m(k, o), p = m(k, p), n && (this.polygon(i, j, k, l, n, !1, [{x: b,y: c}, {x: o,y: p}, {x: o + f,y: p}, {x: b + f,y: c}]), this.polygon(i, j, k, l, n, !1, [{x: b,y: c}, {x: b,y: c + g}, {x: b + f,y: c + g}, {x: b + f,y: c}]), this.polygon(i, j, k, l, n, !1, [{x: b + f,y: c}, {x: o + f,y: p}, {x: o + f,y: p + g}, {x: b + f,y: c + g}])), this.polygon(a.dark(i), j, k, l, !1, !1, [{x: b,y: c}, {x: o,y: p}, {x: o + f,y: p}, {x: b + f,y: c}]), this.polygon(i, j, k, l, !1, !1, [{x: b,y: c}, {x: b,y: c + g}, {x: b + f,y: c + g}, {x: b + f,y: c}]), this.polygon(a.dark(i), j, k, l, !1, !1, [{x: b + f,y: c}, {x: o + f,y: p}, {x: o + f,y: p + g}, {x: b + f,y: c + g}]), this
        },cube3D: function(b, c, d, e, f, g, h, i, j, k, l, n) {
            if (b = m(k, b), c = m(k, c), i = i && 0 != i ? i : g, f) {
                var o = a.vectorP2P(d, e);
                d = b + i * o.x, e = c - i * o.y
            } else
                d = b + i * d, e = c - i * e;
            for (; n.length < 6; )
                n.push(!1);
            d = m(k, d), e = m(k, e);
            var p = [];
            return 0 > e ? a.isObject(n[4]) && p.push(a.applyIf({points: [{x: b,y: c - h}, {x: d,y: e - h}, {x: d + g,y: e - h}, {x: b + g,y: c - h}]}, n[4])) : a.isObject(n[0]) && p.push(a.applyIf({points: [{x: b,y: c}, {x: d,y: e}, {x: d + g,y: e}, {x: b + g,y: c}]}, n[0])), a.isObject(n[1]) && p.push(a.applyIf({points: [{x: d,y: e}, {x: d,y: e - h}, {x: d + g,y: e - h}, {x: d + g,y: e}]}, n[1])), a.isObject(n[2]) && p.push(a.applyIf({points: [{x: b,y: c}, {x: b,y: c - h}, {x: d,y: e - h}, {x: d,y: e}]}, n[2])), a.isObject(n[3]) && p.push(a.applyIf({points: [{x: b + g,y: c}, {x: b + g,y: c - h}, {x: d + g,y: e - h}, {x: d + g,y: e}]}, n[3])), 0 > e ? a.isObject(n[0]) && p.push(a.applyIf({points: [{x: b,y: c}, {x: d,y: e}, {x: d + g,y: e}, {x: b + g,y: c}]}, n[0])) : a.isObject(n[4]) && p.push(a.applyIf({points: [{x: b,y: c - h}, {x: d,y: e - h}, {x: d + g,y: e - h}, {x: b + g,y: c - h}]}, n[4])), a.isObject(n[5]) && p.push(a.applyIf({points: [{x: b,y: c}, {x: b,y: c - h}, {x: b + g,y: c - h}, {x: b + g,y: c}]}, n[5])), a.each(p, function(a) {
                this.polygon(a.color, j, k, l, a.shadow, a.alpha, a.points)
            }, this), this
        },polygon: function(a, b, c, d, e, f, g, h, i, j) {
            if (this.save().strokeStyle(b, c, d).beginPath().fillStyle(a).globalAlpha(f).shadowOn(e).moveTo(g[0].x, g[0].y), h) {
                this.moveTo(m(c, j[0].x), m(c, j[0].y)).lineTo(m(c, g[0].x), m(c, g[0].y));
                for (var k = 1; k < g.length; k++)
                    this.bezierCurveTo(n(g, g[k], k, i));
                this.lineTo(m(c, j[1].x), m(c, j[1].y))
            } else
                for (var k = 1; k < g.length; k++)
                    this.lineTo(m(c, g[k].x), m(c, g[k].y));
            return this.closePath().stroke(b).fill(a).restore()
        },lines: function(a, b, c, d) {
            if (!b)
                return this;
            this.save().gCo(d).beginPath().strokeStyle(!0, b, c).moveTo(m(b, a[0]), m(b, a[1]));
            for (var e = 2; e < a.length - 1; e += 2)
                this.lineTo(m(b, a[e]), m(b, a[e + 1]));
            return this.stroke(!0).restore()
        },bezierCurveTo: function(a) {
            return this.c.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]), this
        },label: function(a, b, c) {
            return this.save().beginPath().strokeStyle(!0, b, c).moveTo(m(b, a[0].x), m(b, a[0].y)).bezierCurveTo([a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y]).stroke(!0).restore()
        },lineArray: function(a, b, c, d, e) {
            if (!b)
                return this;
            this.save().beginPath().strokeStyle(!0, b, c).moveTo(m(b, a[0].x), m(b, a[0].y));
            for (var f = 1; f < a.length; f++)
                d ? this.bezierCurveTo(n(a, a[f], f, e || 1.5)) : this.lineTo(m(b, a[f].x), m(b, a[f].y));
            return this.stroke(!0).restore()
        },dotted: function(b, c, d, e, f, h, i, j, k) {
            if (!f)
                return this;
            b = m(f, b), c = m(f, c), d = m(f, d), e = m(f, e);
            var l, n = a.distanceP2P(b, c, d, e);
            if (0 >= i || i >= n || b != d && c != e)
                return this.line(b, c, d, e, f, h, k);
            (b > d || c > e) && (l = b, b = d, d = l, l = c, c = e, e = l), this.save().gCo(k).strokeStyle(!0, f, h).beginPath().moveTo(b, c);
            var o = i * (j || 1), p = g(n / (i + o)), q = n - p * (i + o) > i, r = c == e;
            p = q ? p + 1 : p;
            for (var s = 1; p >= s; s++)
                this.lineTo(r ? b + i * s + o * (s - 1) : b, r ? c : c + i * s + o * (s - 1)).moveTo(r ? b + (i + o) * s : b, r ? c : c + (i + o) * s);
            return q || this.lineTo(d, e), this.stroke(!0).restore()
        },line: function(a, b, c, d, e, f, g) {
            return e ? (this.save().gCo(g), this.beginPath().strokeStyle(!0, e, f).moveTo(m(e, a), m(e, b)).lineTo(m(e, c), m(e, d)).stroke(!0).restore()) : this
        },round: function(a, b, c, d, e, f) {
            return this.arc(a, b, c, 0, 0, h, d, !!f, e, f)
        },round0: function(a, b, c, d, e) {
            return this.arc(a.x, a.y, b, 0, 0, h, c, !!e, d, e)
        },fillRect: function(a, b, c, d) {
            return this.c.fillRect(a, b, c, d), this
        },translate: function(a, b) {
            return this.c.translate(a, b), this
        },rotate: function(a) {
            return this.c.rotate(a), this
        },clearRect: function(a, b, c, d) {
            return a = a || 0, b = b || 0, c = c || this.canvas.width, d = d || this.canvas.height, this.c.clearRect(a, b, c, d), this
        },gCo: function(a) {
            return a ? this.gCO(a) : this
        },gCO: function(a) {
            return this.c.globalCompositeOperation = a ? "destination-over" : "source-over", this
        },box: function(b, d, e, i, j, k, l, n, o) {
            if (j = j || {enable: 0}, j.enable) {
                var p = j.width, q = j.color, r = j.radius, s = a.isNumber(p);
                p = a.parsePadding(p), p[0] == p[1] && p[1] == p[2] && p[2] == p[3] && (s = !0), n = n ? 1 : -1, e += n * (p[1] + p[3]) / 2, i += n * (p[0] + p[2]) / 2, b -= n * (p[3] / 2), d -= n * (p[0] / 2), p = s ? p[0] : p, r = s && r && 0 != r && "0" != r ? a.parsePadding(r) : 0
            }
            return this.save().gCo(o).fillStyle(k).strokeStyle(s, p, q), r ? this.beginPath().moveTo(m(p, b + r[0]), m(p, d)).lineTo(m(p, b + e - r[1]), m(p, d)).arc2(m(p, b + e - r[1]), m(p, d + r[1]), r[1], 3 * c / 2, h).lineTo(m(p, b + e), m(p, d + i - r[2])).arc2(m(p, b + e - r[2]), m(p, d + i - r[2]), r[2], 0, c / 2).lineTo(m(p, b + r[3]), m(p, d + i)).arc2(m(p, b + r[3]), m(p, d + i - r[3]), r[3], c / 2, c).lineTo(m(p, b), m(p, d + r[0])).arc2(m(p, b + r[0]), m(p, d + r[0]), r[0], c, 3 * c / 2).closePath().shadowOn(l).stroke(p).shadowOff().fill(k) : !j.enable || s ? (p && j.enable && (this.shadowOn(l).c.strokeRect(b, d, e, i), this.shadowOff()), k && this.fillRect(b, d, e, i)) : (p && (q = a.isArray(q) ? q : [q, q, q, q], this.shadowOn(l).line(b + e, d + p[0] / 2, b + e, d + i - p[0] / 2, p[1], q[1], 0).line(b, d + p[0] / 2, b, d + i - p[0] / 2, p[3], q[3], 0).line(g(b - p[3] / 2), d, b + e + p[1] / 2, d, p[0], q[0], 0).line(g(b - p[3] / 2), d + i, b + e + p[1] / 2, d + i, p[2], q[2], 0).shadowOff()), k && this.beginPath().moveTo(g(b + p[3] / 2), g(d + p[0] / 2)).lineTo(f(b + e - p[1] / 2), d + p[0] / 2).lineTo(f(b + e - p[1] / 2), f(d + i - p[2] / 2)).lineTo(g(b + p[3] / 2), f(d + i - p[2] / 2)).lineTo(g(b + p[3] / 2), g(d + p[0] / 2)).closePath().fill(k)), this.restore()
        },toDataURL: function(a) {
            return this.canvas.toDataURL(a || "image/png")
        },addEvent: function(b, c, d) {
            a.Event.addEvent(this.canvas, b, c, d)
        }}, a.taylor = {light: function(a, b) {
            b.highlight = !1, a.on("mouseover", function() {
                b.highlight = !0, a.redraw("mouseover")
            }).on("mouseout", function() {
                b.highlight = !1, a.redraw("mouseout")
            }).on("beforedraw", function() {
                return a.push("f_color", a.get(b.highlight ? "light_color" : "f_color_")), !0
            })
        }}, a.Chart = a.extend(a.Painter, {configure: function() {
            a.Chart.superclass.configure.apply(this, arguments), this.type = "chart", this.dataType = "simple", this.set({id: "",render: "",data: [],width: void 0,height: void 0,lineJoin: "round",align: "center",default_mouseover_css: !0,turn_off_touchmove: !1,showpercent: !1,decimalsnum: 1,empty: {text: "No data found",fontsize: 16},title: {text: "",fontweight: "bold",fontsize: 20,height: 30},subtitle: {text: "",fontweight: "bold",fontsize: 16,height: 20},footnote: {text: "",color: "#5d7f97",textAlign: "right",height: 20},animation: !1,doAnimation: null,animation_timing_function: "easeInOut",animation_duration: 1e3,z_index: 999,legend: {enable: !1},tip: {enable: !1}}), this.registerEvent("beforeAnimation", "afterAnimation", "resize", "animating"), this.T = null, this.Rendered = !1, this.Combination = !1, this.Animationed = !1, this.show = !1, this.data = [], this.plugins = [], this.components = [], this.oneways = [], this.total = 0, this._chart = !0
        },toDataURL: function(a) {
            return this.T.toDataURL(a)
        },segmentRect: function() {
            this.Combination || this.T.clearRect()
        },resetCanvas: function() {
            this.Combination || this.T.box(this.get("l_originx"), this.get("t_originy"), this.get("client_width"), this.get("client_height"), 0, this.get("f_color"), 0, 0, !0)
        },animation: function(b) {
            b.segmentRect(), b.coo && !b.ILLUSIVE_COO && b.coo.draw(), b.doAnimation(b.variable.animation.time, b.duration, b), a.each(b.plugins, function(a) {
                a.A_draw && (a.variable.animation.animating = !0, a.variable.animation.time = b.variable.animation.time, a.draw(), a.variable.animation.animating = !1)
            }), b.Combination || (a.each(b.oneways, function(a) {
                a.draw()
            }), b.variable.animation.time < b.duration ? (b.variable.animation.time++, a.requestAnimFrame(function() {
                b.animation(b)
            })) : a.requestAnimFrame(function() {
                b.Animationed = !0, a.each(b.plugins, function(a) {
                    a.Animationed = !0
                }), b.processAnimation = !1, b.draw(), a.each(b.plugins, function(a) {
                    a.processAnimation = !1
                }), b.fireEvent(b, "afterAnimation", [b])
            }))
        },runAnimation: function(a) {
            a.fireEvent(a, "beforeAnimation", [a]), a.A_draw || (a.variable.animation = {type: 0,time: 0,queue: []}), a.processAnimation = !0, a.animation(a)
        },doSort: function() {
            var b = function(b, c) {
                return (a.isArray(b) ? b.zIndex || 0 : b.get("z_index")) > (a.isArray(c) ? c.zIndex || 0 : c.get("z_index"))
            };
            a.sor(this.components, b), a.sor(this.oneways, b)
        },commonDraw: function(b, c) {
            if (b.show = !1, b.redraw || (a.Assert.isTrue(b.Rendered, b.type + " has not rendered"), b.doSort()), b.redraw = !0, !b.Animationed && b.get("animation"))
                return void b.runAnimation(b);
            b.segmentRect();
            a.eachAll(b.components, function(a) {
                a.draw(c)
            }), a.eachAll(b.components, function(a) {
                a.last && a.last(a)
            }), a.each(b.oneways, function(a) {
                a.draw()
            }), b.show = !0
        },plugin: function(a) {
            var b = this._();
            a.inject(b), a._chart && (a.Combination = !0, a.setUp()), b.get("animation") || a.push("animation", !1), a.duration = b.duration, a._plugin = !0, b.register(a), b.plugins.push(a)
        },destroy: function(b) {
            a.eachAll(b.components, function(a) {
                a._plugin || a.destroy(a)
            }), a.each(b.oneways, function(a) {
                a.destroy(a)
            })
        },getTitle: function() {
            return this.title
        },getSubTitle: function() {
            return this.subtitle
        },getFootNote: function() {
            return this.footnote
        },getDrawingArea: function() {
            return {x: this.get("l_originx"),x: this.get("t_originy"),width: this.get("client_width"),height: this.get("client_height")}
        },create: function(c, d) {
            if (c.get("fit")) {
                var e = window.innerWidth, f = window.innerHeight, g = a.getDoc().body.style;
                g.padding = "0px", g.margin = "0px", g.overflow = "hidden", c.push(c.W, e), c.push(c.H, f)
            }
            c.canvasid = a.uid(c.type), c.shellid = "shell_" + c.canvasid;
            var h = [];
            h.push("<div id='"), h.push(c.shellid), h.push("' style='padding:0px;margin:0px auto;overflow:hidden;position:relative"), c.get("background_wrap") && (h.push(";background-color:"), h.push(c.get("background_color")), c.push("background_color", null)), h.push(";'>"), h.push("<canvas id= '"), h.push(c.canvasid), h.push("' style='-webkit-text-size-adjust: none;'>"), h.push("<p>Your browser does not support the canvas element</p></canvas>"), h.push("</div>"), d.innerHTML = h.join(""), c.shell = a(c.shellid), c.T = c.target = new b(c.canvasid), c.size(c), c.Rendered = !0
        },setUp: function() {
            var a = this._();
            a.redraw = !1, a.T.clearRect(), a.initialize()
        },load: function(a) {
            var b = this._();
            b.push("data", a || []), b.setUp(), (b.Combination ? b.root : b).draw()
        },resize: function(b, c) {
            b = a.parseFloat(b), c = a.parseFloat(c);
            var d = this._();
            d.Combination || (d.width = d.push(d.W, b), d.height = d.push(d.H, c), d.size(d)), d.fireEvent(d, "resize", [b, c]), d.setUp(), a.eachAll(d.plugins, function(a) {
                a.Combination && a.resize(b, c)
            }), d.Combination || d.draw()
        },size: function(b) {
            var c = a.ratio, d = b.pushIf(b.W, 400), e = b.pushIf(b.H, 300), f = b.T.canvas;
            b.shell.style.width = f.style.width = d + "px", b.shell.style.height = f.style.height = e + "px", f.width = (b.width = d) * c, f.height = (b.height = e) * c, c > 1 && b.T.c.scale(c, c)
        },initialize: function() {
            var b = this._(), c = b.get("data"), d = b.get("render");
            b.push(b.X, null), b.push(b.Y, null), b.Combination ? (a.apply(b.options, a.clone([b.W, b.H, "padding", "border", "client_height", "client_width", "minDistance", "maxDistance", "centerx", "centery", "l_originx", "r_originx", "t_originy", "b_originy"], b.root.options, !0)), b.width = b.get(b.W), b.height = b.get(b.H), b.shell = b.root.shell, b.Rendered = !0) : b.Rendered || d && b.create(b, a(d)), b.Rendered && (a.isString(b.get("url")) && !c ? b.ajax.call(b, b.get("url"), function(a) {
                b.push("data", a), b.initialize(), b.draw()
            }) : p.call(b, c || [], b))
        },eventOff: function() {
            this.stopEvent = !0
        },eventOn: function() {
            this.stopEvent = !1
        },oneWay: function(b) {
            b.T.strokeStyle(!0, 0, b.get("strokeStyle"), b.get("lineJoin")), b.processAnimation = b.get("animation"), a.isFunction(b.get("doAnimation")) && (b.doAnimation = b.get("doAnimation")), b.animationArithmetic = a.getAA(b.get("animation_timing_function"));
            var c, d, e = [b.components, b.oneways], g = b.variable.event, h = b.Combination, i = !b.get("turn_off_touchmove") && !h, j = !a.touch && b.get("default_mouseover_css") && !h, k = a.touch ? ["touchstart", "touchmove"] : ["click", "mousemove"];
            b.stopEvent = !1, b.A_draw = h && b.processAnimation, a.register(b), h || a.each(k, function(c) {
                b.T.addEvent(c, function(d) {
                    b.processAnimation || b.stopEvent || !b.show || d.targetTouches && 1 != d.targetTouches.length || b.fireEvent(b, c, [b, a.Event.fix(d)])
                }, !1)
            }), b.on(k[0], function(b, c) {
                return a.eachAll(e, function(a) {
                    if (a._chart) {
                        if (a.fireEvent(a, k[0], [a, c]))
                            return g.click = !0, !1
                    } else {
                        var b = a.isMouseOver(c);
                        if (b.valid)
                            return g.click = !0, a.fireEvent(a, "click", [a, c, b]), !c.stopPropagation
                    }
                }), g.click ? (i && c.event.preventDefault(), g.click = !1, !0) : void 0
            }), (!a.touch || i) && (b.on(k[1], function(b, f) {
                return c = d = !1, a.eachAll(e, function(a) {
                    if (!a._chart) {
                        var b = a.variable.event, d = a.isMouseOver(f);
                        if (d.valid) {
                            if (c = c || a.atomic, b.mouseover || (b.mouseover = !0, a.fireEvent(a, "mouseover", [a, f, d])), a.fireEvent(a, "mousemove", [a, f, d]), d.stop)
                                return !1
                        } else
                            b.mouseover && (b.mouseover = !1, a.fireEvent(a, "mouseout", [a, f, d]));
                        return !f.stopPropagation
                    }
                    return a.fireEvent(a, k[1], [a, f]) ? (c = !0, !1) : void 0
                }), g.mouseover ? (f.event.preventDefault(), c || (g.mouseover = !1, b.fireEvent(b, "mouseout", [b, f])), g.mouseover) : void (c && (g.mouseover = c, b.fireEvent(b, "mouseover", [b, f])))
            }), j && b.on("mouseover", function() {
                b.T.css("cursor", "pointer")
            }).on("mouseout", function() {
                b.T.css("cursor", "default")
            })), b.Combination || (b.bg = new a.Custom({z_index: -1,drawFn: function() {
                b.T.box(0, 0, b.width, b.height, b.get("border"), b.get("f_color"), 0, 0, !0)
            }}), b.duration = f(b.get("animation_duration") * a.FRAME / 1e3)), b.oneWay = a.emptyFn
        },originXY: function(a, b, c) {
            var d = a.get("align");
            return d == a.L ? a.pushIf(a.X, b[0]) : d == a.R ? a.pushIf(a.X, b[1]) : a.pushIf(a.X, b[2]), a.x = a.push(a.X, a.get(a.X) + a.get("offsetx")), a.y = a.push(a.Y, c[0] + a.get("offsety")), {x: a.x,y: a.y}
        },percent: function(a, b) {
            return this.get("showpercent") ? (a / (b || this.total || 1) * 100).toFixed(this.get("decimalsnum")) + "%" : a
        },doActing: function(b, c, d, e, f) {
            var g = !!b.get("communal_acting"), h = b.percent(c.value, c.total);
            b.push(g ? "sub_option" : "communal_acting", a.clone(b.get(g ? "communal_acting" : "sub_option"), !0)), a.merge(b.get("sub_option"), c, d), b.push("sub_option.value", h), b.push("sub_option.value_", c.value), b.get("sub_option.tip.enable") && (b.push("sub_option.tip.text", f || c.name + " " + h), b.push("sub_option.tip.name", c.name), b.push("sub_option.tip.index", e), b.push("sub_option.tip.value", c.value), b.push("sub_option.tip.total", c.total || b.total))
        },register: function(b) {
            return b.id = a.uid(b.type), this.components.push(b), b
        },isE: function() {
            return !this.data.length
        },remove: function(b, c) {
            c && a.each(b.components, function(a, d) {
                return c.id == a.id ? (b.components.splice(d, 1), !1) : void 0
            })
        },merge: function(b, c) {
            var d = this._();
            a.isString(d.get(b)) && d.push(b, a.applyIf({text: d.get(b)}, d.default_[b])), c && "" != d.get(b).text && c(d)
        },doConfig: function() {
            a.Chart.superclass.doConfig.call(this);
            var b = this._();
            if (b.destroy(b), b.oneways.length = 0, b.oneWay(b), b.get("shadow") !== !1 && b.push("shadow", {color: b.get("shadow_color"),blur: b.get("shadow_blur"),offsetx: b.get("shadow_offsetx"),offsety: b.get("shadow_offsety")}), a.apply(b.get("sub_option"), a.clone(["shadow", "tip"], b.options, !0)), b.push("communal_acting", 0), !b.Combination) {
                b.oneways.push(b.bg), b.push("r_originx", b.width - b.get("padding_right")), b.push("b_originy", b.height - b.get("padding_bottom")), b.applyGradient();
                var c, d = 0, e = b.push("l_originx", b.get("padding_left")), f = b.push("t_originy", b.get("padding_top")), g = b.push("client_width", b.width - b.get("hpadding"));
                b.merge("subtitle"), b.merge("title", function() {
                    var c = "" != b.get("subtitle.text");
                    d = c ? b.get("title.height") + b.get("subtitle.height") : b.get("title.height"), f = b.push("t_originy", f + d), b.push("title.originx", e), b.push("title.originy", b.get("padding_top")), b.push("title.maxwidth", g), b.pushIf("title.width", g), b.title = new a.Text(b.get("title"), b), b.oneways.push(b.title), c && (b.push("subtitle.originx", e), b.push("subtitle.originy", b.get("padding_top") + b.get("title.height")), b.pushIf("subtitle.width", g), b.push("subtitle.maxwidth", g), b.subtitle = new a.Text(b.get("subtitle"), b), b.oneways.push(b.subtitle))
                }), b.merge("footnote", function() {
                    var c = b.get("footnote.height");
                    d += c, b.push("b_originy", b.get("b_originy") - c), b.push("footnote.originx", e), b.push("footnote.originy", b.get("b_originy")), b.push("footnote.maxwidth", g), b.pushIf("footnote.width", g), b.footnote = new a.Text(b.get("footnote"), b), b.oneways.push(b.footnote)
                }), c = b.push("client_height", b.get(b.H) - b.get("vpadding") - b.pushIf("other_height", d)), b.push("minDistance", j(g, c)), b.push("maxDistance", i(g, c)), b.push("centerx", e + g / 2), b.push("centery", f + c / 2)
            }
            b.isE() && b.merge("empty", function() {
                b.push("empty.originx", b.get("centerx")), b.push("empty.originy", b.get("centery")), b.push("empty.textBaseline", "middle"), b.empty = new a.Text(b.get("empty"), b), b.oneways.push(b.empty)
            }), b.get("legend.enable") && (b.legend = new a.Legend(a.apply({maxwidth: b.get("client_width"),data: b.data}, b.get("legend")), b), b.oneways.push(b.legend)), b.push("sub_option.tip.wrap", b.push("tip.wrap", b.shell))
        }})
    }(a), a.Custom = a.extend(a.Component, {configure: function() {
        a.Custom.superclass.configure.apply(this, arguments), this.type = "custom", this.set({drawFn: a.emptyFn,configFn: a.emptyFn,eventValid: void 0,animating_draw: !0})
    },doDraw: function(a) {
        a.get("drawFn").call(a, a)
    },isEventValid: function(b, c) {
        return a.isFunction(this.get("eventValid")) ? this.get("eventValid").call(this, b, c) : {valid: !1}
    },doConfig: function() {
        a.Custom.superclass.doConfig.call(this);
        var b = this._();
        b.A_draw = b.get("animating_draw"), b.variable.animation = {animating: !1,time: 0}, b.duration = 0, b.get("configFn").call(b, b)
    }}), a.Sector = a.extend(a.Component, {configure: function() {
        a.Sector.superclass.configure.apply(this, arguments), this.type = "sector", this.set({value: "",name: "",ignored: !1,counterclockwise: !1,startAngle: 0,middleAngle: 0,endAngle: 0,totalAngle: 0,bound_event: "click",expand: !1,donutwidth: 0,mutex: !1,increment: void 0,label_length: void 0,gradient_mode: "RadialGradientOutIn",mini_label_threshold_angle: 15,mini_label: !1,label: {},rounded: !1}), this.atomic = !0, this.registerEvent("changed", "parseText"), this.label = null, this.tip = null
    },bound: function() {
        this.expanded || this.toggle()
    },rebound: function() {
        this.expanded && this.toggle()
    },toggle: function() {
        this.fireEvent(this, this.get("bound_event"), [this])
    },getDimension: function() {
        var a = this._();
        return {x: a.x,x: a.y,startAngle: a.get("startAngle"),middleAngle: a.get("middleAngle"),endAngle: a.get("endAngle")}
    },doDraw: function(a) {
        a.get("ignored") || (a.label && !a.get("mini_label") && a.label.draw(), a.drawSector(), a.label && a.get("mini_label") && a.label.draw())
    },doText: function(b, c, d) {
        b.push("label.originx", c), b.push("label.originy", d), b.push("label.textBaseline", "middle"), b.label = new a.Text(b.get("label"), b)
    },doLabel: function(b, c, d, e, f, g, h, i) {
        b.push("label.originx", c), b.push("label.originy", d), b.push("label.quadrantd", e), b.push("label.line_points", f), b.push("label.labelx", g), b.push("label.labely", h), b.push("label.smooth", i), b.push("label.angle", b.get("middleAngle") % (2 * Math.PI)), b.label = new a.Label(b.get("label"), b)
    },isLabel: function() {
        return this.get("label") && !this.get("mini_label")
    },doConfig: function() {
        a.Sector.superclass.doConfig.call(this);
        var b, c = this._(), d = c.variable.event, e = c.get("label"), f = c.get("bound_event");
        return c.get("rounded") ? (c.push("startAngle", 0), void c.push("endAngle", 2 * Math.PI)) : (a.taylor.light(c, d), c.push("totalAngle", c.get("endAngle") - c.get("startAngle")), e && (c.get("mini_label") && (c.get("mini_label_threshold_angle") * Math.PI / 180 > c.get("totalAngle") ? c.push("mini_label", !1) : a.apply(c.get("label"), c.get("mini_label"))), c.push("label.text", c.fireString(c, "parseText", [c, c.get("label.text")], c.get("label.text"))), c.pushIf("label.border.color", c.get("border.color")), c.push("label.scolor", c.get("background_color"))), c.variable.event.status = c.expanded = c.get("expand"), c.get("tip.enable") && ("follow" != c.get("tip.showType") && c.push("tip.invokeOffsetDynamic", !1), c.tip = new a.Tip(c.get("tip"), c)), d.poped = !1, c.on(f, function() {
            d.poped = !0, c.expanded = !c.expanded, c.redraw(f), d.poped = !1
        }), void c.on("beforedraw", function(a, g) {
            return g == f && (b = !1, c.x = c.get(c.X), c.y = c.get(c.Y), c.expanded && (c.get("mutex") && !d.poped ? (c.expanded = !1, b = !0) : (c.x += c.get("inc_x"), c.y -= c.get("inc_y"))), d.status != c.expanded && (c.fireEvent(c, "changed", [c, c.expanded]), b = !0, d.status = c.expanded), e && b && c.label.doLayout(c.get("inc_x") * (c.expanded ? 1 : -1), -c.get("inc_y") * (c.expanded ? 1 : -1), 2, c.label)), !0
        }))
    }}), a.Sector2D = a.extend(a.Sector, {configure: function() {
        a.Sector2D.superclass.configure.apply(this, arguments), this.type = "sector2d", this.set({radius: 0})
    },drawSector: function() {
        this.T.sector(this.x, this.y, this.r, this.get("donutwidth"), this.get("startAngle"), this.get("endAngle"), this.get("f_color"), this.get("border.enable"), this.get("border.width"), this.get("border.color"), this.get("shadow"), this.get("counterclockwise"))
    },isEventValid: function(b, c) {
        if (!c.get("ignored")) {
            if (c.isLabel() && c.label.isEventValid(b, c.label).valid)
                return {valid: !0};
            var d = a.distanceP2P(c.x, c.y, b.x, b.y), e = c.get("donutwidth");
            if (c.r < d || e && c.r - e > d)
                return {valid: !1};
            if (a.angleInRange(c.get("startAngle"), c.get("endAngle"), a.atan2Radian(c.x, c.y, b.x, b.y)))
                return {valid: !0}
        }
        return {valid: !1}
    },tipInvoke: function() {
        var b = this, c = b.get("middleAngle"), d = a.quadrantd(c);
        return function(e, f) {
            var g = a.p2Point(b.x, b.y, c, .8 * b.r);
            return {left: d >= 1 && 2 >= d ? g.x - e : g.x,top: d >= 2 ? g.y - f : g.y}
        }
    },doConfig: function() {
        a.Sector2D.superclass.doConfig.call(this);
        var b = this._();
        b.r = b.get("radius"), b.get("donutwidth") > b.r && b.push("donutwidth", 0), b.applyGradient(b.x - b.r, b.y - b.r, 2 * b.r * .9, 2 * b.r * .9);
        var c = b.get("middleAngle"), d = b.pushIf("increment", a.lowTo(5, b.r / 10));
        if (b.push("inc_x", d * Math.cos(2 * Math.PI - c)), b.push("inc_y", d * Math.sin(2 * Math.PI - c)), d *= 2, b.get("label"))
            if (b.get("mini_label"))
                P2 = a.p2Point(b.x, b.y, c, b.get("donutwidth") ? b.r - b.get("donutwidth") / 2 : 5 * b.r / 8), b.doText(b, P2.x, P2.y);
            else {
                var e = a.quadrantd(c), f = a.p2Point(b.x, b.y, c, b.r + d), g = a.p2Point(b.x, b.y, c, b.r + .6 * d);
                P2 = a.p2Point(b.x, b.y, c, b.r), b.doLabel(b, P2.x, P2.y, e, [{x: P2.x,y: P2.y}, {x: g.x,y: g.y}, {x: f.x,y: f.y}], f.x, f.y, .4 * d)
            }
    }}), a.Sector3D = a.extend(a.Sector, {configure: function() {
        a.Sector3D.superclass.configure.apply(this, arguments), this.type = "sector3d", this.dimension = a._3D, this.set({semi_major_axis: 0,semi_minor_axis: 0,cylinder_height: 0}), this.proxy = !0
    },isEventValid: function(b, c) {
        if (!c.get("ignored")) {
            if (c.isLabel() && c.label.isEventValid(b, c.label).valid)
                return {valid: !0};
            if (!a.inEllipse(b.x - c.x, b.y - c.y, c.a, c.b))
                return {valid: !1};
            if (a.angleZInRange(c.sA, c.eA, a.atan2Radian(c.x, c.y, b.x, b.y)))
                return {valid: !0}
        }
        return {valid: !1}
    },p2p: function(a, b, c, d) {
        return {x: a + this.a * Math.cos(c) * d,y: b + this.b * Math.sin(c) * d}
    },tipInvoke: function() {
        var b = this, c = b.get("middleAngle"), d = a.quadrantd(c);
        return function(a, e) {
            var f = b.p2p(b.x, b.y, c, .6);
            return {left: d >= 2 && 3 >= d ? f.x - a : f.x,top: d >= 3 ? f.y - e : f.y}
        }
    },doConfig: function() {
        a.Sector3D.superclass.doConfig.call(this);
        var b = this._(), c = b.get("counterclockwise"), d = b.get("middleAngle");
        b.a = b.get("semi_major_axis"), b.b = b.get("semi_minor_axis"), b.h = b.get("cylinder_height"), a.Assert.isTrue(b.a * b.b >= 0, "major&minor");
        var e = 2 * Math.PI, f = function(d) {
            for (; 0 > d; )
                d += e;
            return Math.abs(a.atan2Radian(0, 0, b.a * Math.cos(d), c ? -b.b * Math.sin(d) : b.b * Math.sin(d)))
        }, g = b.pushIf("increment", a.lowTo(5, b.a / 10));
        if (b.sA = f.call(b, b.get("startAngle")), b.eA = f.call(b, b.get("endAngle")), b.mA = f.call(b, d), b.push("inc_x", g * Math.cos(e - b.mA)), b.push("inc_y", g * Math.sin(e - b.mA)), g *= 2, b.get("label"))
            if (b.get("mini_label")) {
                var h = b.p2p(b.x, b.y, d, .5);
                b.doText(b, h.x, h.y)
            } else {
                var i = a.quadrantd(d), j = b.p2p(b.x, b.y, d, g / b.a + 1), k = b.p2p(b.x, b.y, d, .6 * g / b.a + 1), l = b.p2p(b.x, b.y, d, 1);
                b.doLabel(b, l.x, l.y, i, [{x: l.x,y: l.y}, {x: k.x,y: k.y}, {x: j.x,y: j.y}], j.x, j.y, .4 * g)
            }
    }}), a.Rectangle = a.extend(a.Component, {configure: function() {
        a.Rectangle.superclass.configure.apply(this, arguments), this.type = "rectangle", this.set({width: 0,height: 0,value_space: 4,value: "",label: {},name: "",tipAlign: "top",valueAlign: "top",shadow_blur: 3,shadow_offsety: -1}), this.atomic = !0, this.registerEvent("parseText"), this.label = null
    },last: function(a) {
        a.label && a.label.draw()
    },doDraw: function(a) {
        a.drawRectangle()
    },doConfig: function() {
        a.Rectangle.superclass.doConfig.call(this);
        var b = this._(), c = b.variable.event, d = b.get("valueAlign");
        a.taylor.light(b, c), b.width = b.get(b.W), b.height = b.get(b.H);
        var e = b.push("centerx", b.x + b.width / 2), f = b.push("centery", b.y + b.height / 2), g = b.C, h = "middle", i = b.get("value_space");
        d == b.L ? (g = b.R, e = b.x - i) : d == b.R ? (g = b.L, e = b.x + b.width + i) : d == b.B ? (f = b.y + b.height + i, h = b.O) : d == b.O && (f = b.y - i, h = b.B), b.get("label") && (b.push("label.originx", e), b.push("label.originy", f), b.push("label.text", b.push("value", b.fireString(b, "parseText", [b, b.get("value")], b.get("value")))), a.applyIf(b.get("label"), {textAlign: g,textBaseline: h,color: b.get("color")}), b.label = new a.Text(b.get("label"), b)), b.get("tip.enable") && ("follow" != b.get("tip.showType") && b.push("tip.invokeOffsetDynamic", !1), b.tip = new a.Tip(b.get("tip"), b))
    }}), a.Rectangle2D = a.extend(a.Rectangle, {configure: function() {
        a.Rectangle2D.superclass.configure.apply(this, arguments), this.type = "rectangle2d", this.set({shadow_offsety: -2})
    },drawRectangle: function() {
        var a = this._();
        a.T.box(a.get(a.X), a.get(a.Y), a.get(a.W), a.get(a.H), a.get("border"), a.get("f_color"), a.get("shadow"))
    },isEventValid: function(a, b) {
        return {valid: a.x > b.x && a.x < b.x + b.width && a.y < b.y + b.height && a.y > b.y}
    },tipInvoke: function() {
        var a = this._();
        return function(b, c) {
            return {left: a.tipX(b, c),top: a.tipY(b, c)}
        }
    },doConfig: function() {
        a.Rectangle2D.superclass.doConfig.call(this);
        var b = this._(), c = b.get("tipAlign");
        c == b.L || c == b.R ? b.tipY = function(a, c) {
            return b.get("centery") - c / 2
        } : b.tipX = function(a) {
            return b.get("centerx") - a / 2
        }, c == b.L ? b.tipX = function(a) {
            return b.x - b.get("value_space") - a
        } : c == b.R ? b.tipX = function() {
            return b.x + b.width + b.get("value_space")
        } : b.tipY = c == b.B ? function() {
            return b.y + b.height + 3
        } : function(a, c) {
            return b.y - c - 3
        }, b.applyGradient()
    }}), a.Rectangle3D = a.extend(a.Rectangle, {configure: function() {
        a.Rectangle3D.superclass.configure.apply(this, arguments), this.type = "rectangle3d", this.dimension = a._3D, this.set({zHeight: void 0,xAngle: 60,yAngle: 20,xAngle_: void 0,yAngle_: void 0,shadow_offsetx: 2})
    },drawRectangle: function() {
        var a = this._();
        a.T.cube(a.get(a.X), a.get(a.Y), a.get("xAngle_"), a.get("yAngle_"), a.get(a.W), a.get(a.H), a.get("zHeight"), a.get("f_color"), a.get("border.enable"), a.get("border.width"), a.get("light_color"), a.get("shadow"))
    },isEventValid: function(a, b) {
        return {valid: a.x > b.x && a.x < b.x + b.get(b.W) && a.y < b.y + b.get(b.H) && a.y > b.y}
    },tipInvoke: function() {
        var a = this._();
        return function(b, c) {
            return {left: a.topCenterX - b / 2,top: a.topCenterY - c}
        }
    },doConfig: function() {
        a.Rectangle3D.superclass.doConfig.call(this);
        var b = this._();
        b.pushIf("zHeight", b.get(b.W)), b.topCenterX = b.x + (b.get(b.W) + b.get(b.W) * b.get("xAngle_")) / 2, b.topCenterY = b.y - b.get(b.W) * b.get("yAngle_") / 2 - b.get("value_space"), b.get("valueAlign") == b.O && b.label && (b.label.push("textx", b.topCenterX), b.label.push("texty", b.topCenterY))
    }}), a.Column = a.extend(a.Chart, {configure: function() {
        a.Column.superclass.configure.call(this), this.type = "column", this.set({coordinate: {},column_width: "66%",column_space: void 0,text_space: 6,scaleAlign: "left",sub_option: {},label: {}}), this.registerEvent(), this.rectangles = [], this.labels = [], this.components.push(this.labels), this.components.push(this.rectangles)
    },doAnimation: function(b, c, d) {
        var e;
        a.each(d.labels, function(a) {
            a.draw()
        }), a.each(d.rectangles, function(a) {
            e = Math.ceil(d.animationArithmetic(b, 0, a.height, c)), a.push(d.Y, a.y + (a.height - e)), a.push(d.H, e), a.drawRectangle()
        })
    },getCoordinate: function() {
        return this.coo
    },doLabel: function(b, c, d, e, f) {
        b.labels.push(new a.Text(a.apply(b.get("label"), {id: c,text: d,originx: e,originy: f}), b))
    },doParse: function(a, b, c, d) {
        a.doActing(a, b, d, c)
    },engine: function(a) {
        if (!a.isE()) {
            var b = a.get("column_width_"), c = a.get("column_space"), d = a.coo.getScale(a.get("scaleAlign")), e = a.coo.valid_height, f = b / 2, g = b * (a.get("group_fator") || 0), h = "complex" != a.dataType ? b + c : a.data.length * b + c + (a.is3D() ? (a.data.length - 1) * g : 0), i = a.coo.get("y_end"), j = i - d.basic * e - (a.is3D() ? a.get("zHeight") * (a.get("bottom_scale") - 1) / 2 * a.get("yAngle_") : 0), k = c + a.coo.get("x_start");
            i = i + a.get("text_space") + a.coo.get("axis.width")[2], a.doEngine(a, b, c, d, e, f, g, h, k, j, i)
        }
    },doConfig: function() {
        a.Column.superclass.doConfig.call(this);
        var b = this._(), c = "column_width", d = "z_index";
        b.sub = b.is3D() ? "Rectangle3D" : "Rectangle2D", b.rectangles.length = 0, b.labels.length = 0, b.rectangles.zIndex = b.get(d), b.labels.zIndex = b.get(d) + 1, b.coo = a.Coordinate.coordinate_.call(b, function(d) {
            var e, f = b.data.length;
            "complex" == b.dataType ? (e = b.get("labels").length, f = e * f + (b.is3D() ? (f - 1) * e * b.get("group_fator") : 0), e += 1) : ("stacked" == b.dataType && (f = b.get("labels").length), e = f + 1), b.push("column_space", (d - b.push("sub_option.width", b.push("column_width_", a.parsePercent(b.get(c), Math.floor(d / f)))) * f) / e), b.is3D() && (b.push("sub_option.zHeight", b.push("zHeight", b.get("column_width_") * b.get("zScale"))), b.push("sub_option.xAngle_", b.get("xAngle_")), b.push("sub_option.yAngle_", b.get("yAngle_")))
        })
    }}), a.Column2D = a.extend(a.Column, {configure: function() {
        a.Column2D.superclass.configure.call(this), this.type = "column2d"
    },doEngine: function(b, c, d, e, f, g, h, i, j, k, l) {
        var m;
        a.each(b.data, function(c, d) {
            m = (c.value - e.start) * f / e.distance, b.doParse(b, c, d, {id: d,originx: j + d * i,originy: k - (m > 0 ? m : 0),height: Math.abs(m)}), b.rectangles.push(new a[b.sub](b.get("sub_option"), b)), b.doLabel(b, d, c.name, j + i * d + g, l)
        }, b)
    },doConfig: function() {
        a.Column2D.superclass.doConfig.call(this), this.engine(this)
    }}), a.register("Column2D"), a.Column3D = a.extend(a.Column2D, {configure: function() {
        a.Column3D.superclass.configure.call(this), this.type = "column3d", this.dimension = a._3D, this.set({coordinate: {},xAngle: 60,yAngle: 20,zScale: 1,bottom_scale: 1.4})
    },doConfig: function() {
        a.Column3D.superclass.doConfig.call(this)
    }}), a.register("Column3D"), a.ColumnMulti2D = a.extend(a.Column, {configure: function() {
        a.ColumnMulti2D.superclass.configure.call(this), this.type = "columnmulti2d", this.dataType = "complex", this.set({labels: []})
    },doEngine: function(b, c, d, e, f, g, h, i, j, k, l) {
        var m;
        a.each(b.columns, function(g, n) {
            a.each(g.item, function(d, g) {
                m = (d.value - e.start) * f / e.distance, b.doParse(b, d, n + "_" + g, {id: n + "_" + g,originx: j + g * (c + h) + n * i,originy: k - (m > 0 ? m : 0),height: Math.abs(m)}), b.rectangles.push(new a[b.sub](b.get("sub_option"), b))
            }, b), b.doLabel(b, n, g.name, j - .5 * d + (n + .5) * i, l)
        }, b)
    },doConfig: function() {
        a.ColumnMulti2D.superclass.doConfig.call(this), this.engine(this)
    }}), a.register("ColumnMulti2D"), a.ColumnMulti3D = a.extend(a.ColumnMulti2D, {configure: function() {
        a.ColumnMulti3D.superclass.configure.call(this), this.type = "columnmulti3d", this.dataType = "complex", this.dimension = a._3D, this.set({xAngle: 60,yAngle: 20,zScale: 1,group_fator: .3,bottom_scale: 1.4})
    },doConfig: function() {
        a.ColumnMulti3D.superclass.doConfig.call(this)
    }}), a.register("ColumnMulti3D"), a.ColumnStacked2D = a.extend(a.Column, {configure: function() {
        a.ColumnStacked2D.superclass.configure.call(this), this.type = "columnstacked2d", this.dataType = "stacked", this.set({percent: !1,labels: [],sub_option: {label: {color: "#ffffff"},valueAlign: "middle"}})
    },doEngine: function(b, c, d, e, f, g, h, i, j, k, l) {
        var m, n, o, p = b.get("percent");
        a.each(b.columns, function(c, g) {
            m = 0, o = p ? 100 / c.total : 1, a.each(c.item, function(d, h) {
                n = (d.value * o - e.start) * f / e.distance, d.total = c.total, b.doParse(b, d, g + "_" + h, {id: g + "_" + h,originx: j + g * i,originy: k - (n > 0 ? n : 0) - m,height: Math.abs(n)}), m += n, b.rectangles.push(new a[b.sub](b.get("sub_option"), b))
            }, b), b.doLabel(b, g, c.name, j - .5 * d + (g + .5) * i, l)
        }, b)
    },doConfig: function() {
        a.ColumnStacked2D.superclass.doConfig.call(this), this.engine(this)
    }}), a.register("ColumnStacked2D"), a.ColumnStacked3D = a.extend(a.ColumnStacked2D, {configure: function() {
        a.ColumnStacked3D.superclass.configure.call(this), this.type = "columnstacked3d", this.dataType = "stacked", this.dimension = a._3D, this.set({percent: !1,sub_option: {label: {color: "#ffffff"},valueAlign: "middle"},coordinate: {},xAngle: 60,yAngle: 20,zScale: 1,bottom_scale: 1.4})
    },doConfig: function() {
        a.ColumnStacked3D.superclass.doConfig.call(this)
    }}), a.register("ColumnStacked3D"), a.Bar = a.extend(a.Chart, {configure: function() {
        a.Bar.superclass.configure.call(this), this.type = "bar", this.set({coordinate: {striped_direction: "h"},bar_height: "66%",bar_space: void 0,text_space: 6,scaleAlign: "bottom",sub_option: {},label: {}}), this.rectangles = [], this.labels = [], this.components.push(this.labels), this.components.push(this.rectangles)
    },getCoordinate: function() {
        return this.coo
    },doLabel: function(b, c, d, e, f) {
        b.labels.push(new a.Text(a.apply(b.get("label"), {id: c,text: d,textAlign: "right",textBaseline: "middle",originx: e,originy: f}), b))
    },doParse: function(a, b, c, d) {
        a.doActing(a, b, d, c)
    },engine: function(a) {
        if (!a.isE()) {
            var b = a.get("_bar_height"), c = a.get("bar_space"), d = a.coo.getScale(a.get("scaleAlign")), e = a.coo.valid_width, f = b / 2, g = "complex" != a.dataType ? b + c : a.data.length * b + c, h = a.coo.get("x_start") + d.basic * e, i = a.coo.get(a.X) - a.get("text_space") - a.coo.get("axis.width")[3], j = a.coo.get("y_start") + c;
            a.doEngine(a, b, c, d, e, f, g, h, i, j)
        }
    },doAnimation: function(b, c, d) {
        a.each(d.labels, function(a) {
            a.draw()
        }), a.each(d.rectangles, function(a) {
            a.push(d.W, Math.ceil(d.animationArithmetic(b, 0, a.width, c))), a.drawRectangle()
        })
    },doConfig: function() {
        a.Bar.superclass.doConfig.call(this);
        var b = this._(), c = "z_index";
        b.rectangles.length = 0, b.labels.length = 0, b.rectangles.zIndex = b.get(c), b.labels.zIndex = b.get(c) + 1, b.coo = a.Coordinate.coordinate_.call(b, function(c, d) {
            var e, f = b.data.length;
            "complex" == b.dataType ? (e = b.get("labels").length, f = e * f + (b.is3D() ? (f - 1) * e * b.get("group_fator") : 0), e += 1) : ("stacked" == b.dataType && (f = b.get("labels").length), e = f + 1), b.push("bar_space", (d - b.push("sub_option.height", b.push("_bar_height", a.parsePercent(b.get("bar_height"), Math.floor(d / f)))) * f) / e)
        }), b.push("sub_option.valueAlign", b.R), b.push("sub_option.tipAlign", b.R)
    }}), a.Bar2D = a.extend(a.Bar, {configure: function() {
        a.Bar2D.superclass.configure.call(this), this.type = "bar2d"
    },doEngine: function(b, c, d, e, f, g, h, i, j, k) {
        var l;
        a.each(b.data, function(c, d) {
            l = (c.value - e.start) * f / e.distance, b.doParse(b, c, d, {id: d,originy: k + d * h,width: Math.abs(l),originx: i + (l > 0 ? 0 : -Math.abs(l))}), b.rectangles.push(new a.Rectangle2D(b.get("sub_option"), b)), b.doLabel(b, d, c.name, j, k + d * h + g)
        }, b)
    },doConfig: function() {
        a.Bar2D.superclass.doConfig.call(this), this.engine(this)
    }}), a.register("Bar2D"), a.BarStacked2D = a.extend(a.Bar, {configure: function() {
        a.BarStacked2D.superclass.configure.call(this), this.type = "barstacked2d", this.dataType = "stacked", this.set({percent: !1,labels: [],sub_option: {label: {color: "#ffffff"},valueAlign: "middle"}})
    },doEngine: function(b, c, d, e, f, g, h, i, j, k) {
        var l, m, n, o = b.get("percent");
        a.each(b.columns, function(c, g) {
            l = 0, n = o ? 100 / c.total : 1, a.each(c.item, function(d, j) {
                m = (d.value * n - e.start) * f / e.distance, d.total = c.total, b.doParse(b, d, j, {id: g + "_" + j,originy: k + g * h,originx: i + (m > 0 ? 0 : -Math.abs(m)) + l,width: Math.abs(m)}), l += m, b.rectangles.push(new a.Rectangle2D(b.get("sub_option"), b))
            }, b), b.doLabel(b, g, c.name, j, k - .5 * d + (g + .5) * h)
        }, b)
    },doConfig: function() {
        a.BarStacked2D.superclass.doConfig.call(this), this.push("sub_option.valueAlign", this.C), this.engine(this)
    }}), a.register("BarStacked2D"), a.BarMulti2D = a.extend(a.Bar, {configure: function() {
        a.BarMulti2D.superclass.configure.call(this), this.type = "barmulti2d", this.dataType = "complex", this.set({labels: []})
    },doEngine: function(b, c, d, e, f, g, h, i, j, k) {
        var l;
        a.each(b.columns, function(g, m) {
            a.each(g.item, function(d, g) {
                l = (d.value - e.start) * f / e.distance, b.doParse(b, d, g, {id: m + "_" + g,originy: k + g * c + m * h,width: Math.abs(l),originx: i + (l > 0 ? 0 : -Math.abs(l))}), b.rectangles.push(new a.Rectangle2D(b.get("sub_option"), b))
            }, b), b.doLabel(b, m, g.name, j, k - .5 * d + (m + .5) * h)
        }, b)
    },doConfig: function() {
        a.BarMulti2D.superclass.doConfig.call(this), this.engine(this)
    }}), a.register("BarMulti2D"), a.Tip = a.extend(a.Html, {configure: function() {
        a.Tip.superclass.configure.apply(this, arguments), this.type = "tip", this.set({name: "",index: 0,value: "",text: "",showType: "follow",invokeOffset: null,fade_duration: 300,move_duration: 100,timing_function: "ease-out",invokeOffsetDynamic: !1,style: "textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;",border: {enable: !0,radius: 5},delay: 200}), this.registerEvent("parseText")
    },position: function(a, b, c) {
        c.style.top = (0 > a ? 0 : a) + "px", c.style.left = (0 > b ? 0 : b) + "px"
    },follow: function(b, c, d) {
        if (d.get("invokeOffsetDynamic")) {
            if (c.hit) {
                (a.isString(c.text) || a.isNumber(c.text)) && d.text(c.name, c.value, c.text, c.i, d);
                var e = d.get("invokeOffset")(d.width(), d.height(), c);
                d.position(e.top, e.left, d)
            }
        } else if ("follow" != d.get("showType") && a.isFunction(d.get("invokeOffset"))) {
            var e = d.get("invokeOffset")(d.width(), d.height(), c);
            d.position(e.top, e.left, d)
        } else
            d.position(b.y - 1.1 * d.height() - 2, b.x + 2, d)
    },text: function(a, b, c, d, e) {
        e.dom.innerHTML = e.fireString(e, "parseText", [e, a, b, c, d], c)
    },hidden: function() {
        this.get("animation") ? this.css("opacity", 0) : this.css("visibility", "hidden")
    },doAction: function(a) {
        a.T.on("mouseover", function(b, c, d) {
            a.show(c, d)
        }).on("mouseout", function(b, c) {
            a.hidden(c)
        }), "follow" == a.get("showType") && a.T.on("mousemove", function(b, c, d) {
            a.T.variable.event.mouseover && setTimeout(function() {
                a.T.variable.event.mouseover && a.follow(c, d, a)
            }, a.get("delay"))
        })
    },refresh: function() {
        var a = this._();
        a.text(a.get("name"), a.get("value"), a.get("text"), a.get("index"), a)
    },initialize: function() {
        a.Tip.superclass.initialize.call(this);
        var b = this._();
        if (b.text(b.get("name"), b.get("value"), b.get("text"), b.get("index"), b), b.hidden(), b.get("animation")) {
            var c = b.get("move_duration") / 1e3 + "s " + b.get("timing_function") + " 0s";
            b.transition("opacity " + b.get("fade_duration") / 1e3 + "s " + b.get("timing_function") + " 0s"), b.transition("top " + c), b.transition("left " + c), b.onTransitionEnd(function() {
                0 == b.css("opacity") && b.css("visibility", "hidden")
            }, !1)
        }
    }}), a.Text = a.extend(a.Component, {configure: function() {
        a.Text.superclass.configure.apply(this, arguments), this.type = "text", this.set({text: "",textAlign: "center",align: "center",background_color: 0,textBaseline: "top",border: {enable: !1},width: 0,height: 0,padding: 0,writingmode: "lr",line_height: 16,rotate: 0}), this.registerEvent()
    },doDraw: function(a) {
        a.get("box_feature") && a.T.box(a.x, a.y, a.get(a.W), a.get(a.H), a.get("border"), a.get("f_color")), a.T.text(a.get("text"), a.get("textx"), a.get("texty"), a.get(a.W) - a.get("hpadding"), a.get("color"), a.get("textAlign"), a.get("textBaseline"), a.get("fontStyle"), a.get("writingmode"), a.get("line_height"), a.get("shadow"), a.get("rotate"))
    },isEventValid: function() {
        return {valid: !1}
    },doLayout: function(a, b, c, d) {
        d.x = d.push(d.X, d.x + a), d.y = d.push(d.Y, d.y + b), d.push("textx", d.get("textx") + a), d.push("texty", d.get("texty") + b)
    },doConfig: function() {
        a.Text.superclass.doConfig.call(this);
        var b = this._(), c = b.x, d = b.y + b.get("padding_top"), e = b.get(b.W), f = b.get(b.H), g = b.get("textAlign");
        c += g == b.C ? e / 2 : g == b.R ? e - b.get("padding_right") : b.get("padding_left"), f && (d += f / 2, b.push("textBaseline", "middle")), b.push("textx", c), b.push("texty", d), b.push("box_feature", e && f), b.applyGradient()
    }}), a.Pie = a.extend(a.Chart, {configure: function() {
        a.Pie.superclass.configure.call(this), this.type = "pie", this.set({radius: "100%",offset_angle: 0,separate_angle: 0,bound_event: "click",counterclockwise: !1,intellectLayout: !0,layout_distance: 4,pop_animate: !1,mutex: !1,increment: void 0,sub_option: {label: {}}}), this.registerEvent("bound", "rebound"), this.sectors = [], this.components.push(this.sectors), this.ILLUSIVE_COO = !0
    },toggle: function(a) {
        this.sectors[a || 0].toggle()
    },bound: function(a) {
        this.sectors[a || 0].bound()
    },rebound: function(a) {
        this.sectors[a || 0].rebound()
    },getSectors: function() {
        return this.sectors
    },doAnimation: function(b, c, d) {
        var e = 0, f = d.oA;
        a.each(d.sectors, function(a) {
            e = d.animationArithmetic(b, 0, a.get("totalAngle"), c), a.push("startAngle", f), a.push("endAngle", f += e), d.is3D() || a.drawSector()
        }), d.is3D() && d.proxy.drawSector()
    },parse: function(b) {
        a.each(b.data, function(a, c) {
            b.doParse(b, a, c)
        }, b), b.localizer(b)
    },doParse: function(a, b, c) {
        var d = b.name + " " + a.percent(b.value);
        a.doActing(a, b, null, c, d), a.push("sub_option.id", c), a.get("sub_option.label") && a.push("sub_option.label.text", d), a.push("sub_option.listeners.changed", function(b, c) {
            a.fireEvent(a, c ? "bound" : "rebound", [a, b.get("name")])
        }), a.sectors.push(a.doSector(a, b))
    },doSector: function(b) {
        return new a[b.sub](b.get("sub_option"), b)
    },dolayout: function(b, c, d, e, f, g) {
        (b.is3D() ? a.inEllipse(b.get(b.X) - c, b.topY - d, b.a, b.b) : a.distanceP2P(b.get(b.X), b.topY, c, d) < b.r) && (d = b.topY - d, e.push("labelx", b.get(b.X) + (2 * Math.sqrt(b.r * b.r - d * d) + f) * (0 == g || 3 == g ? 1 : -1)), e.localizer(e))
    },localizer: function(b) {
        if (b.get("intellectLayout")) {
            var c, d, e, f = [], g = [], h = b.get("layout_distance");
            a.each(b.sectors, function(a) {
                a.isLabel() && f.push(a.label)
            }), a.sor(f, function(a, b) {
                return Math.abs(Math.sin(a.get("angle"))) - Math.abs(Math.sin(b.get("angle"))) > 0
            }), a.each(f, function(f) {
                a.each(g, function(a) {
                    d = a.labelx, e = a.labely, (f.labely <= e && e - f.labely - 1 < f.get(b.H) || f.labely > e && f.labely - e - 1 < a.get(b.H)) && (f.labelx <= d && d - f.labelx < f.get(b.W) || f.labelx > d && f.labelx - d < a.get(b.W)) && (c = f.get("quadrantd"), f.push("labely", f.get("labely") + e - f.labely + (f.get(b.H) + h) * (c > 1 ? -1 : 1)), f.localizer(f), b.dolayout(b, f.get("labelx"), f.get("labely") + f.get(b.H) / 2 * (2 > c ? -1 : 1), f, h, c))
                }, b), g.push(f)
            })
        }
    },doConfig: function() {
        a.Pie.superclass.doConfig.call(this);
        var b, c = this._(), d = c.get("radius"), e = c.get("sub_option.label") ? .35 : .44, f = 2 * Math.PI;
        c.sub = c.is3D() ? "Sector3D" : "Sector2D", c.sectors.zIndex = c.get("z_index"), c.sectors.length = 0, c.oA = a.angle2Radian(c.get("offset_angle")) % f, c.is3D() && (e += .06);
        var g = c.data.length, h = a.angle2Radian(a.between(0, 90, c.get("separate_angle"))), i = f - h, h = h / g, j = c.oA + h, k = j;
        0 == c.total && (b = 1 / g), a.each(c.data, function(a, d) {
            j += (b || a.value / c.total) * i, d == g - 1 && (j = f + c.oA - 1e-6), a.startAngle = k, a.endAngle = j, a.totalAngle = j - k, a.middleAngle = (k + j) / 2, k = j + h
        }, c), console.log(c.data), c.r = d = a.parsePercent(d, Math.floor(c.get("minDistance") * e)), c.topY = c.originXY(c, [d + c.get("l_originx"), c.get("r_originx") - d, c.get("centerx")], [c.get("centery")]).y, a.apply(c.get("sub_option"), a.clone([c.X, c.Y, "bound_event", "mutex", "increment"], c.options))
    }}), a.Pie2D = a.extend(a.Pie, {configure: function() {
        a.Pie2D.superclass.configure.call(this), this.type = "pie2d"
    },doConfig: function() {
        a.Pie2D.superclass.doConfig.call(this);
        var b = this._();
        b.push("sub_option.radius", b.r), b.parse(b)
    }}), a.register("Pie2D"), a.Pie3D = a.extend(a.Pie, {configure: function() {
        a.Pie3D.superclass.configure.apply(this, arguments), this.type = "pie3d", this.dimension = a._3D, this.set({zRotate: 45,yHeight: 30}), this.positive = !0
    },doSector: function(b, c) {
        return b.push("sub_option.cylinder_height", c.cylinder_height ? c.cylinder_height * b.get("zRotate_") : b.get("cylinder_height")), new a[b.sub](b.get("sub_option"), b)
    },one: function(b) {
        var c, d, e, f = [], g = b.get("counterclockwise"), h = function(a, b) {
            return 1 + Math.sin(b ? a + Math.PI : a)
        }, i = "startAngle", j = "endAngle";
        lay = function(b, d, f, g) {
            e = a.quadrantd(d), (b && (0 == e || 3 == e) || !b && (2 == e || 1 == e)) && c.push({g: d,z: d == f,x: g.x,y: g.y,a: g.a,b: g.b,color: a.dark(g.get("background_color")),h: g.h,F: g})
        }, b.proxy = new a.Custom({z_index: b.get("z_index") + 1,drawFn: function() {
            this.drawSector(), f = [], a.each(b.sectors, function(a) {
                a.get("label") && (a.expanded ? f.push(a.label) : a.label.draw())
            }), a.each(f, function(a) {
                a.draw()
            })
        }}), b.proxy.drawSector = function() {
            a.each(b.sectors, function(a) {
                b.T.ellipse(a.x, a.y + a.h, a.a, a.b, a.get(i), a.get(j), 0, a.get("border.enable"), a.get("border.width"), a.get("border.color"), a.get("shadow"), g, !0)
            }, b), c = [], d = [], a.each(b.sectors, function(b) {
                lay(g, b.get(i), b.get(j), b), lay(!g, b.get(j), b.get(i), b), d = d.concat(a.visible(b.get(i), b.get(j), b))
            }, b), a.sor(c, function(a, b) {
                var c = h(a.g) - h(b.g);
                return 0 == c ? a.z : c > 0
            }), a.each(c, function(a) {
                b.T.sector3D.layerDraw.call(b.T, a.x, a.y, a.a + .5, a.b + .5, g, a.h, a.g, a.color)
            }, b), b.processAnimation || a.sor(d, function(a, b) {
                return h((a.s + a.e) / 2, 1) - h((b.s + b.e) / 2, 1) < 0
            }), a.each(d, function(a) {
                b.T.sector3D.sPaint.call(b.T, a.f.x, a.f.y, a.f.a, a.f.b, a.s, a.e, g, a.f.h, a.f.get("f_color"))
            }, b), a.each(b.sectors, function(a) {
                b.T.ellipse(a.x, a.y, a.a, a.b, a.get(i), a.get(j), a.get("f_color"), a.get("border.enable"), a.get("border.width"), a.get("border.color"), !1, !1, !0)
            }, b)
        }, b.components.push(b.proxy), b.one = a.emptyFn
    },doConfig: function() {
        a.Pie3D.superclass.doConfig.call(this);
        var b = this._(), c = a.angle2Radian(b.get("zRotate"));
        b.push("cylinder_height", b.get("yHeight") * b.push("zRotate_", Math.abs(Math.cos(c)))), b.a = b.push("sub_option.semi_major_axis", b.r), b.b = b.push("sub_option.semi_minor_axis", b.r * Math.abs(Math.sin(c))), b.topY = b.push("sub_option.originy", b.get(b.Y) - b.get("yHeight") / 2), b.parse(b), b.one(b)
    }}), a.register("Pie3D"), a.Donut2D = a.extend(a.Pie, {configure: function() {
        a.Donut2D.superclass.configure.call(this), this.type = "donut2d", this.set({donutwidth: .3,center: {text: "",line_height: 24,fontweight: "bold",fontsize: 24}})
    },doConfig: function() {
        a.Donut2D.superclass.doConfig.call(this);
        var b = this._(), c = "donutwidth", d = b.get(c), e = b.r;
        b.push("sub_option.radius", e), d >= e ? d = 0 : 1 > d && (d = Math.floor(e * d)), b.push("sub_option.donutwidth", b.push(c, d)), b.merge("center"), "" != b.get("center.text") && (b.push("center.originx", b.get(b.X)), b.push("center.originy", b.get(b.Y)), b.push("center.textBaseline", "middle"), b.center = new a.Text(b.get("center"), b), b.oneways.push(b.center)), b.parse(b)
    }}), a.register("Donut2D"), a.Scale = a.extend(a.Component, {configure: function() {
        a.Scale.superclass.configure.apply(this, arguments), this.type = "scale", this.set({position: "left",which: "h",basic_value: 0,scale2grid: !0,distance: void 0,start_scale: 0,end_scale: void 0,min_scale: void 0,max_scale: void 0,scale_space: void 0,scale_enable: !0,scale_size: 1,scale_width: 4,scale_color: "#333333",scaleAlign: "center",labels: [],label: {},text_space: 6,textAlign: "left",decimalsnum: 0,join_style: "none",join_size: 2}), this.registerEvent("parseText")
    },isEventValid: function() {
        return {valid: !1}
    },getScale: function(b) {
        var c = [b.get("basic_value"), b.get("start_scale"), b.get("end_scale"), b.get("end_scale") - b.get("start_scale"), 0];
        return c[4] = a.inRange(c[1], c[2] + 1, c[0]) || a.inRange(c[2] - 1, c[1], c[0]), {range: c[4],basic: c[4] ? (c[0] - c[1]) / c[3] : 0,start: c[4] ? c[0] : c[1],end: c[2],distance: c[3]}
    },doDraw: function(b) {
        b.get("scale_enable") && a.each(b.items, function(a) {
            b.T.line(a.x0, a.y0, a.x1, a.y1, b.get("scale_size"), b.get("scale_color"), !1)
        }), a.each(b.labels, function(a) {
            a.draw()
        })
    },doLayout: function(b, c, d) {
        d.get("scale_enable") && a.each(d.items, function(a) {
            a.x0 += b, a.y0 += c, a.x1 += b, a.y1 += c
        }), a.each(d.labels, function(a) {
            a.doLayout(b, c, 0, a)
        })
    },doConfig: function() {
        a.Scale.superclass.doConfig.call(this);
        var b = this._(), c = Math.abs, d = b.get("labels").length, e = d - 1, f = b.get("min_scale"), g = b.get("max_scale"), h = b.get("scale_space"), i = b.get("end_scale"), j = b.get("start_scale");
        if (b.items = [], b.labels = [], 0 == d) {
            e = 5, j > f && (j = b.push("start_scale", a.floor(f))), (!a.isNumber(i) || g > i) && (i = a.ceil(g), i = b.push("end_scale", i || j ? i : 1));
            var k = c(i - j);
            if (h && c(h) < c(k))
                e = c(Math.ceil(k / h));
            else {
                for (var l = k.toString(), m = l.indexOf(".") + 1, n = 10, o = (m > 0 ? /^0\.0*([1-9])$/ : /^([1-9])0*$/).exec(l); m > 0; )
                    m--, n *= 10;
                o && o[1] && (e = parseInt(o[1])), e = 1 == e ? 5 : e, e = 8 == e || 2 == e ? 4 : e, e = 9 == e ? 3 : e, h = b.push("scale", Math.ceil(k / e)), k = h * e, i = b.push("end_scale", i > j ? j + k : j - k)
            }
            parseInt(h) != h && 0 == b.get("decimalsnum") && b.push("decimalsnum", (h + "").substring((h + "").indexOf(".") + 1).length)
        }
        b.push("distanceOne", b.get("valid_distance") / (e ? e : 1));
        var p, q, r, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = b.get("scale_width"), z = y / 2, A = b.get("scaleAlign"), B = b.get("position"), C = b.get("text_space"), D = "", E = b.get("coo").get("axis.width");
        b.push("which", b.get("which").toLowerCase()), b.isH = "h" == b.get("which"), b.isH ? (A == b.O ? v = -y : A == b.C ? (v = -z, t = z) : t = y, B == b.O ? (x = -C - E[0], D = b.B) : (x = C + E[2], D = b.O), B = b.C) : (A == b.L ? u = -y : A == b.C ? (u = -z, s = z) : s = y, D = "middle", B == b.R ? (B = b.L, w = C + E[1]) : (B = b.R, w = -C - E[3]));
        for (var F = 0; e >= F; F++)
            p = d ? b.get("labels")[F] : (h * F + j).toFixed(b.get("decimalsnum")), q = b.isH ? b.get("valid_x") + F * b.get("distanceOne") : b.x, r = b.isH ? b.y : b.get("valid_y") + b.get("valid_distance") - F * b.get("distanceOne"), b.items.push({x: q,y: r,x0: q + u,y0: r + v,x1: q + s,y1: r + t}), b.get("label") && b.labels.push(new a.Text(a.applyIf(a.apply(b.get("label"), a.merge({text: p,x: q,y: r,originx: q + w,originy: r + x}, b.fireEvent(b, "parseText", [p, q + w, r + x, F, e == F]))), {textAlign: B,textBaseline: D}), b))
    }}), a.Coordinate = {coordinate_: function(b) {
        var c = this._(), d = c.get("coordinate"), e = c.get("scaleAlign");
        if (d.ICHARTJS_OBJECT)
            return c.x = c.push(c.X, d.x), c.y = c.push(c.Y, d.y), c.ILLUSIVE_COO = !0, d.refresh(c.get("minValue"), c.get("maxValue"), e), b && b(d.get("_valid_width"), d.get("_valid_height")), d;
        var f = "85%", g = a.parsePercent, h = c.get("coordinate.scale"), i = c.push("coordinate._width", g(c.get("coordinate.width") || f, Math.floor(c.get("client_width")))), j = c.push("coordinate._height", g(c.get("coordinate.height") || f, Math.floor(c.get("client_height"))) - (c.is3D() ? (c.get("coordinate.pedestal_height") || 22) + (c.get("coordinate.board_deep") || 20) : 0)), k = c.push("coordinate._valid_height", g(c.get("coordinate.valid_height"), j)), l = c.push("coordinate._valid_width", g(c.get("coordinate.valid_width"), i));
        if (c.originXY(c, [c.get("l_originx"), c.get("r_originx") - i, c.get("centerx") - i / 2], [c.get("centery") - j / 2]), c.set({coordinate: {originx: c.x,originy: c.y,id: "coordinate"}}), b && b(l, k), a.isObject(h) && (h = [h]), a.isArray(h)) {
            var m = "stacked" != c.dataType;
            a.each(h, function(b) {
                c.get("percent") && b.position == e && (b = a.apply(b, {start_scale: 0,end_scale: 100,scale_space: 10,listeners: {parseText: function(a) {
                    return {text: a + "%"}
                }}})), (!b.start_scale || m && !b.assign_scale && b.start_scale > c.get("minValue")) && (b.min_scale = c.get("minValue")), (!b.end_scale || m && !b.assign_scale && b.end_scale < c.get("maxValue")) && (b.max_scale = c.get("maxValue"))
            })
        } else
            c.push("coordinate.scale", {position: e,scaleAlign: e,max_scale: c.get("maxValue"),min_scale: c.get("minValue")});
        return c.is3D() && c.set({coordinate: {xAngle_: c.get("xAngle_"),yAngle_: c.get("yAngle_"),zHeight: c.get("zHeight") * c.get("bottom_scale")}}), c.remove(c, c.coo), c.isE() ? void 0 : c.register(new (a[c.is3D() ? "Coordinate3D" : "Coordinate2D"])(c.get("coordinate"), c))
    }}, a.Coordinate2D = a.extend(a.Component, {configure: function() {
        a.Coordinate2D.superclass.configure.apply(this, arguments), this.type = "coordinate2d", this.set({sign_size: 12,sign_space: 5,scale: [],width: "85%",height: "85%",valid_width: "100%",valid_height: "100%",grid_line_width: 1,grid_color: "#dbe1e1",gridHStyle: {},gridVStyle: {},gridlinesVisible: !0,scale2grid: !0,grids: void 0,ignoreOverlap: !0,ignoreEdge: !1,xlabel: "",ylabel: "",background_color: 0,striped: !0,striped_direction: "v",striped_factor: .01,crosshair: {enable: !1},z_index: -1,axis: {enable: !0,color: "#666666",width: 1}}), this.scale = [], this.gridlines = []
    },refresh: function(b, c, d) {
        a.each(this.scale, function(a) {
            if (a.get("position") == d) {
                var e;
                return (!a.get("assign_scale") || a.get("end_scale") < c) && (a.push("max_scale", a.push("end_scale", c)), e = !0), (!a.get("assign_scale") || a.get("start_scale") > b) && (a.push("min_scale", a.push("start_scale", b)), e = !0), e && a.doConfig(), !1
            }
        })
    },getScaleObj: function(a, b) {
        for (var c = this._(), d = 0; d < c.scale.length; d++)
            if (c.scale[d].get("position") == a)
                return c.scale[d];
        if (!b)
            return a = a == c.L ? c.R : a == c.R ? c.L : a == c.O ? c.B : c.O, c.getScaleObj(a, !0);
        throw new Error("InValidScale")
    },getScale: function(a, b) {
        var c = this.getScaleObj(a, b);
        return c.getScale(c)
    },isEventValid: function(a, b) {
        return {valid: a.x > b.x && a.x < b.x + b.width && a.y < b.y + b.height && a.y > b.y}
    },doDraw: function(b) {
        if (b.T.box(b.x, b.y, b.width, b.height, 0, b.get("f_color")), b.get("striped"))
            var c, d, e = !1, f = (b.get("axis.width"), a.dark(b.get("background_color"), b.get("striped_factor"), 0));
        var g = "v" == b.get("striped_direction");
        a.each(b.gridlines, function(a) {
            b.get("striped") && (e && (g ? b.T.box(a.x1, a.y1 + a.width, a.x2 - a.x1, d - a.y1 - a.width, 0, f) : b.T.box(c + a.width, a.y2, a.x1 - c, a.y1 - a.y2, 0, f)), c = a.x1, d = a.y1, e = !e)
        }), a.each(b.gridlines, function(a) {
            a.overlap || (a.solid ? b.T.line(a.x1, a.y1, a.x2, a.y2, a.width, a.color) : b.T.dotted(a.x1, a.y1, a.x2, a.y2, a.width, a.color, a.size, a.fator))
        }), b.T.box(b.x, b.y, b.width, b.height, b.get("axis"), !1, b.get("shadow"), !0), a.each(b.scale, function(a) {
            a.draw()
        })
    },destroy: function() {
        this.crosshair && this.crosshair.destroy()
    },doCrosshair: function(b) {
        b.get("crosshair.enable") && !b.crosshair && (b.push("crosshair.wrap", b.root.shell), b.push("crosshair.height", b.height), b.push("crosshair.width", b.width), b.push("crosshair.top", b.y), b.push("crosshair.left", b.x), b.crosshair = new a.CrossHair(b.get("crosshair"), b))
    },doConfig: function() {
        a.Coordinate2D.superclass.doConfig.call(this);
        var b = this._();
        if (b.atomic = !1, b.width = b.get("_width"), b.height = b.get("_height"), b.valid_width = b.get("_valid_width"), b.valid_height = b.get("_valid_height"), b.get("gradient") && a.isString(b.get("f_color")) && b.push("f_color", b.T.avgLinearGradient(b.x, b.y, b.x, b.y + b.height, [b.get("dark_color"), b.get("light_color")])), b.get("axis.enable")) {
            var c = b.get("axis.width");
            a.isArray(c) || b.push("axis.width", [c, c, c, c])
        } else
            b.push("axis.width", [0, 0, 0, 0]);
        b.doCrosshair(b);
        var d, e = !(!b.get("gridlinesVisible") || !b.get("grids")), f = e && !!b.get("grids.horizontal"), g = e && !!b.get("grids.vertical"), h = b.height, i = b.width, j = b.valid_width, k = b.valid_height, l = b.get("gridlinesVisible") && b.get("scale2grid") && !(f && g), m = b.push("x_start", b.x + (i - j) / 2), n = b.push("y_start", b.y + (h - k) / 2), o = b.get("axis.width");
        b.push("x_end", b.x + (i + j) / 2), b.push("y_end", b.y + (h + k) / 2), a.isArray(b.get("scale")) || (a.isObject(b.get("scale")) ? b.push("scale", [b.get("scale")]) : b.push("scale", [])), a.each(b.get("scale"), function(c) {
            d = c.position, d = d || b.L, d = d.toLowerCase(), c[b.X] = b.x, c.coo = b, c[b.Y] = b.y, c.valid_x = m, c.valid_y = n, c.position = d, d == b.O ? (c.which = "h", c.distance = i, c.valid_distance = j) : d == b.R ? (c.which = "v", c.distance = h, c.valid_distance = k, c[b.X] += i, c.valid_x += j) : d == b.B ? (c.which = "h", c.distance = i, c.valid_distance = j, c[b.Y] += h, c.valid_y += k) : (c.which = "v", c.distance = h, c.valid_distance = k), c.label = a.applyIf(c.label || {}, b.get("label")), b.scale.push(new a.Scale(c, b.root))
        }, b);
        var p = b.push("ignoreOverlap", b.get("ignoreOverlap") && b.get("axis.enable") || b.get("ignoreEdge"));
        if (p)
            if (b.get("ignoreEdge"))
                var q = function(a, c, d) {
                    return "v" == a ? d == b.y || d == b.y + h : c == b.x || c == b.x + a
                };
            else
                var q = function(a, c, d) {
                    return "v" == a ? d == b.y && o[0] > 0 || d == b.y + h && o[2] > 0 : c == b.x && o[3] > 0 || c == b.x + i && o[1] > 0
                };
        var r = {solid: !0,size: 10,fator: 1,width: b.get("grid_line_width"),color: b.get("grid_color")}, s = a.applyIf(b.get("gridHStyle"), r), t = a.applyIf(b.get("gridVStyle"), r);
        if (l) {
            var u, v, w;
            a.each(b.scale, function(c) {
                w = c.get("position"), a.isFalse(c.get("scale2grid")) || f && "v" == c.get("which") || g && "h" == c.get("which") || (u = v = 0, w == b.O ? v = h : w == b.R ? u = -i : w == b.B ? v = -h : u = i, a.each(c.items, function(d) {
                    p && b.gridlines.push(a.applyIf({overlap: q.call(b, c.get("which"), d.x, d.y),x1: d.x,y1: d.y,x2: d.x + u,y2: d.y + v}, c.isH ? t : s))
                }))
            })
        }
        if (g) {
            var x = b.get("grids.vertical"), y = i / x.value, z = x.value;
            "given_value" == x.way && (z = y, y = x.value, y = y > i ? i : y);
            for (var A = 0; z >= A; A++)
                p && b.gridlines.push(a.applyIf({overlap: q.call(b, "h", b.x + A * y, b.y),x1: b.x + A * y,y1: b.y,x2: b.x + A * y,y2: b.y + h,H: !1,width: t.width,color: t.color}, t))
        }
        if (f) {
            var B = b.get("grids.horizontal"), y = h / B.value, z = B.value;
            "given_value" == B.way && (z = y, y = B.value, y = y > h ? h : y);
            for (var A = 0; z >= A; A++)
                p && b.gridlines.push(a.applyIf({overlap: q.call(b, "v", b.x, b.y + A * y),x1: b.x,y1: b.y + A * y,x2: b.x + i,y2: b.y + A * y,H: !0,width: s.width,color: s.color}, s))
        }
    }}), a.Coordinate3D = a.extend(a.Coordinate2D, {configure: function() {
        a.Coordinate3D.superclass.configure.apply(this, arguments), this.type = "coordinate3d", this.dimension = a._3D, this.set({xAngle: 60,yAngle: 20,xAngle_: void 0,yAngle_: void 0,zHeight: 0,pedestal_height: 22,board_deep: 20,left_board: !0,gradient: !0,color_factor: .18,ignoreEdge: !0,striped: !1,grid_color: "#a4ad96",background_color: "#d6dbd2",shadow_offsetx: 4,shadow_offsety: 2,wall_style: [],axis: {enable: !1}})
    },doDraw: function(b) {
        var c = b.width, d = b.height, e = b.get("xAngle_"), f = b.get("yAngle_"), g = b.get("zHeight"), h = b.get("z_offx"), i = b.get("z_offy");
        b.get("pedestal_height") && b.T.cube3D(b.x, b.y + d + b.get("pedestal_height"), e, f, !1, c, b.get("pedestal_height"), 3 * g / 2, b.get("axis.enable"), b.get("axis.width"), b.get("axis.color"), b.get("bottom_style")), b.get("board_deep") && b.T.cube3D(b.x + h, b.y + d - i, e, f, !1, c, d, b.get("board_deep"), b.get("axis.enable"), b.get("axis.width"), b.get("axis.color"), b.get("board_style")), b.T.cube3D(b.x, b.y + d, e, f, !1, c, d, g, b.get("axis.enable"), b.get("axis.width"), b.get("axis.color"), b.get("wall_style")), a.each(b.gridlines, function(a) {
            a.solid ? (b.get("left_board") && b.T.line(a.x1, a.y1, a.x1 + h, a.y1 - i, a.width, a.color), b.T.line(a.x1 + h, a.y1 - i, a.x2 + h, a.y2 - i, a.width, a.color)) : (b.get("left_board") && b.T.dotted(a.x1, a.y1, a.x1 + h, a.y1 - i, a.width, a.color, a.size, a.fator), b.T.dotted(a.x1 + h, a.y1 - i, a.x2 + h, a.y2 - i, a.width, a.color, a.size, a.fator))
        }), a.each(b.scale, function(a) {
            a.draw()
        })
    },doConfig: function() {
        a.Coordinate3D.superclass.doConfig.call(this);
        for (var b = this._(), c = b.get("wall_style"), d = b.get("background_color") || "#d6dbd2", e = b.height, f = b.width, g = b.get("color_factor"), h = b.push("z_offx", b.get("xAngle_") * b.get("zHeight")), i = b.push("z_offy", b.get("yAngle_") * b.get("zHeight")); c.length < 6; )
            c.push({color: d});
        b.get("left_board") || (c[2] = !1, a.each(b.scale, function(a) {
            a.doLayout(h, -i, a)
        })), b.push("bottom_style", [{color: b.get("shadow_color"),shadow: b.get("shadow")}, !1, !1, {color: c[3].color}, !1, {color: c[3].color}]), b.push("board_style", [!1, !1, !1, {color: c[4].color}, {color: c[5].color}, !1]), b.get("gradient") && (a.isString(c[0].color) && (c[0].color = b.T.avgLinearGradient(b.x, b.y + e, b.x + f, b.y + e, [a.dark(c[0].color, g / 2 + .06), a.dark(c[0].color, g / 2 + .06)])), a.isString(c[1].color) && (c[1].color = b.T.avgLinearGradient(b.x + h, b.y - i, b.x + h, b.y + e - i, [a.dark(c[1].color, g), a.light(c[1].color, g)])), a.isString(c[2].color) && (c[2].color = b.T.avgLinearGradient(b.x, b.y, b.x, b.y + e, [a.light(c[2].color, g / 3), a.dark(c[2].color, g)])), b.get("bottom_style")[5].color = b.T.avgLinearGradient(b.x, b.y + e, b.x, b.y + e + b.get("pedestal_height"), [a.light(c[3].color, g / 2 + .06), a.dark(c[3].color, g / 2, 0)])), b.push("wall_style", [c[0], c[1], c[2]])
    }}), a.CrossHair = a.extend(a.Html, {configure: function() {
        a.CrossHair.superclass.configure.apply(this, arguments), this.type = "crosshair", this.set({top: 0,left: 0,hcross: !0,vcross: !0,point: {enable: !0,color: null,size: 12},invokeOffset: null,line_width: 1,line_color: "#1A1A1A",delay: 200})
    },follow: function(a, b, c) {
        if (c.get("invokeOffset")) {
            var d = c.get("invokeOffset")(a, b);
            d && d.hit ? (c.o_valid = !0, c.position(d.top - c.top, d.left - c.left, c)) : d && c.o_valid || c.position(c.owidth, c.oheight, c)
        } else
            c.position(a.y - c.top - 1, a.x - c.left - 1, c)
    },position: function(a, b, c) {
        c.horizontal.style.top = a - c.size + "px", c.vertical.style.left = b - c.size + "px", c.point && (c.point.style.top = a - c.point.size / 2 + "px", c.point.style.left = b - c.point.size / 2 + "px")
    },doCreate: function(b, c, d, e) {
        var f = document.createElement("div");
        return f.style.width = a.toPixel(c), f.style.height = a.toPixel(d), f.style.backgroundColor = e, f.style.position = "absolute", b.dom.appendChild(f), f
    },doAction: function(a) {
        a.T.on("mouseover", function(b, c, d) {
            a.show(c, d)
        }).on("mouseout", function(b, c, d) {
            a.hidden(c, d)
        }).on("mousemove", function(b, c, d) {
            a.follow(c, d, a)
        })
    },initialize: function() {
        a.CrossHair.superclass.initialize.call(this);
        var b = this._(), c = b.get("line_width"), d = b.get("hcross"), e = b.get("vcross"), f = b.get("line_color"), g = b.get("point.size");
        b.size = c / 2, b.top = a.fixPixel(b.get(b.O)), b.left = a.fixPixel(b.get(b.L)), b.owidth = -b.T.root.width, b.oheight = -b.T.root.height, b.o_valid = !1, b.css("width", "0px"), b.css("height", "0px"), b.css("top", b.top + "px"), b.css("left", b.left + "px"), b.css("visibility", "hidden"), b.horizontal = b.doCreate(b, d ? b.get(b.W) : 0, c, f), b.vertical = b.doCreate(b, c, e ? b.get(b.H) : 0, f), d && e && b.get("point.enable") && (b.point = b.doCreate(b, g, g, b.get("point.color") || f), b.point.style.borderRadius = "100%", b.point.size = g)
    }}), a.LineSegment = a.extend(a.Component, {configure: function() {
        a.LineSegment.superclass.configure.apply(this, arguments), this.type = "linesegment", this.set({brushsize: 1,intersection: !0,label: {},sign: "round",area_color: null,hollow: !0,hollow_inside: !0,hollow_color: "#FEFEFE",smooth: !1,smoothing: 1.5,point_size: 6,points: [],keep_with_coordinate: !1,shadow_blur: 1,shadow_offsety: 1,point_space: 0,coordinate: null,event_range_x: 0,limit_y: !1,tip_offset: 2,event_range_y: 0}), this.registerEvent("parseText"), this.tip = null
    },drawSegment: function() {
        var b = this._();
        a.each(b.polygons, function(a) {
            b.T.polygon.apply(b.T, a)
        }), b.T.shadowOn(b.get("shadow")), a.each(b.lines, function(a) {
            b.T.lineArray.apply(b.T, a)
        }), a.each(b.intersections, function(a) {
            b.sign_plugin ? b.sign_plugin_fn.apply(b, a) : b.T.round0.apply(b.T, a)
        }), b.get("shadow") && b.T.shadowOff()
    },doDraw: function(b) {
        b.drawSegment(), b.get("label") && a.each(b.labels, function(a) {
            a.draw()
        })
    },isEventValid: function() {
    },tipInvoke: function() {
        var a = this.x, b = (this.y, this.get("tip_offset")), c = this.get("point_size") + b, d = this;
        return function(e, f, g) {
            var h = g.left, i = g.top;
            return h = d.tipPosition < 3 && h - e - a - b > 0 || d.tipPosition > 2 && 0 > h - e - a - b ? h - (e + b) : h + b, i = d.tipPosition % 2 == 0 ? i + c : i - f - c, {left: h,top: i}
        }
    },PP: function(a, b, c, d, e, f) {
        a.get("area") && a.polygons.push([a.tf("area_color") || a.get("light_color2"), 0, a.get("brushsize"), 0, 0, a.get("area_opacity"), a.get("smooth") ? b : [{x: c,y: d}].concat(b.concat([{x: e,y: f}])), a.get("smooth"), a.get("smoothing") || 1.5, [{x: c,y: d}, {x: e,y: f}]])
    },parse: function(b) {
        b.polygons = [], b.lines = [], b.intersections = [], b.labels = [];
        var c = b.get("points"), d = b.get("intersection"), e = !!b.get("label"), f = [], g = !1, h = b.get("smooth"), i = b.get("smoothing") || 1.5, j = b.get("f_color"), k = b.get("brushsize"), l = b.get("point_size");
        if (d) {
            var m = b.getPlugin("sign"), n = j, o = b.get("hollow_color");
            b.sign_plugin = a.isFunction(m), b.sign_plugin_fn = m, b.get("hollow_inside") && (n = o, o = j)
        }
        a.each(c, function(c) {
            c.x_ = c.x, c.y_ = c.y, c.ignored || c.direct || !e || (b.push("label.originx", c.x), b.push("label.originy", c.y - l / 2 - 1), b.push("label.text", b.fireString(b, "parseText", [b, c.value], c.value)), a.applyIf(b.get("label"), {textBaseline: "bottom",color: b.get("f_color")}), b.labels.push(new a.Text(b.get("label"), b))), c.ignored && g ? (b.lines.push([f, k, j, h, i]), b.PP(b, f, f[0].x, b.y, f[f.length - 1].x, b.y), f = [], g = !1) : c.ignored || c.direct || (f.push(c), g = !0), !d || c.ignored || c.direct || b.intersections.push(b.sign_plugin ? [b.T, b.get("sign"), c, l, c.color || n, c.hollow_color || o] : b.get("hollow") ? [c, l / 2 - k + 1, c.color || n, k + 1, c.hollow_color || o] : [c, l / 2, c.color || n])
        }), f.length && (b.lines.push([f, k, j, h, i]), b.PP(b, f, f[0].x, b.y, f[f.length - 1].x, b.y))
    },doConfig: function() {
        a.LineSegment.superclass.doConfig.call(this);
        var b = this._(), c = 3 * b.get("point_size") / 2, d = b.get("point_space"), e = b.get("event_range_y"), f = b.get("event_range_x"), g = b.get("tipInvokeHeap"), h = b.get("points"), i = b.get("name");
        a.Assert.isTrue(d > 0, "point_space"), b.parse(b), (0 >= f || f > d / 2) && (f = b.push("event_range_x", d / 2)), 0 == e && (e = b.push("event_range_y", c / 2)), b.get("tip.enable") && (b.on("mouseover", function() {
            g.push(b), b.tipPosition = g.length
        }).on("mouseout", function() {
            g.pop()
        }), b.push("tip.invokeOffsetDynamic", !0), b.tip = new a.Tip(b.get("tip"), b));
        var j = b.get("coordinate"), k = b.get("limit_y"), l = b.get("keep_with_coordinate"), m = function(a, b, c) {
            return !a.ignored && Math.abs(b - a.x) < f && (!k || k && Math.abs(c - a.y) < e) ? !0 : !1
        }, n = function(a) {
            return {valid: !0,name: i,value: h[a].value,text: h[a].text,top: h[a].y,left: h[a].x,i: a,hit: !0}
        };
        b.isEventValid = function(c) {
            if (j && !j.isEventValid(c, j).valid)
                return {valid: !1};
            var e = Math.floor((c.x - b.x) / d);
            if (0 > e || e >= h.length - 1)
                return e = a.between(0, h.length - 1, e), m(h[e], c.x, c.y) ? n(e) : {valid: l};
            for (var f = e; e + 1 >= f; f++)
                if (m(h[f], c.x, c.y))
                    return n(f);
            return {valid: l}
        }
    }}), a.Line = a.extend(a.Chart, {configure: function() {
        a.Line.superclass.configure.call(this), this.type = "line", this.set({nullToDirect: !0,brushsize: 1,coordinate: {axis: {width: [0, 0, 2, 2]}},crosshair: {enable: !1},tipMocker: null,tipMockerOffset: null,scaleAlign: "left",labelAlign: "bottom",labels: [],label_space: 6,proportional_spacing: !0,sub_option: {},legend: {sign: "bar"},label: {}}), this.registerEvent("parsePoint"), this.lines = [], this.components.push(this.lines), this.on("resize", function() {
            this.push("point_space", 0)
        })
    },getCoordinate: function() {
        return this.coo
    },doConfig: function() {
        a.Line.superclass.doConfig.call(this);
        var b = this._(), c = b.data.length <= 1;
        b.lines.length = 0, b.lines.zIndex = b.get("z_index");
        var d = b.pushIf("sub_option.keep_with_coordinate", c);
        if (b.get("crosshair.enable") && (b.pushIf("crosshair.hcross", c), b.pushIf("crosshair.invokeOffset", function(a) {
            var c = b.lines[0].isEventValid(a);
            return c.valid ? c : d
        })), b.Combination || (b.push("coordinate.crosshair", b.get("crosshair")), b.pushIf("coordinate.scale", [{position: b.get("scaleAlign"),max_scale: b.get("maxValue")}, {position: b.get("labelAlign"),start_scale: 1,scale: 1,end_scale: b.get("maxItemSize"),labels: b.get("labels"),label: b.get("label")}])), b.coo = a.Coordinate.coordinate_.call(b), b.Combination && (b.coo.push("crosshair", b.get("crosshair")), b.coo.doCrosshair(b.coo)), !b.isE()) {
            var e = b.coo.valid_width, f = e, g = b.get("maxItemSize") - 1, h = g ? e / g : e, i = b.get("point_space");
            if (b.get("proportional_spacing") && (i && h > i ? f = g * i : b.push("point_space", h)), b.push("sub_option.width", f), b.push("sub_option.height", b.coo.valid_height), b.push("sub_option.originx", b.coo.get("x_start") + (e - f) / 2), b.push("sub_option.originy", b.coo.get("y_end")), b.get("tip.enable") && !b.mocker && a.isFunction(b.get("tipMocker"))) {
                b.push("sub_option.tip.enable", !1), b.push("tip.invokeOffsetDynamic", !0);
                var j, k, l, m, n = b.coo.get(b.X), o = b.coo.get(b.Y), p = b.coo.height, q = b.get("tipMockerOffset");
                q = a.isNumber(q) ? 0 > q ? 0 : q > 1 ? 1 : q : null, b.push("tip.invokeOffset", function(a, b, c) {
                    return null != q ? c.top = o + (p - b) * q : (c.top = c.maxTop - (c.maxTop - c.minTop) / 3 - b, (b > p || o > c.top) && (c.top = o)), {left: c.left - a - n > 5 ? c.left - a - 5 : c.left + 5,top: c.top}
                });
                var r = b.get("tip.listeners.parseText");
                r && delete b.get("tip.listeners").parseText, b.mocker = new a.Custom({eventValid: function(c) {
                    return l = b.lines[0].isEventValid(c), l.hit = k != l.i, l.valid && (k = l.i, j = [], a.each(b.lines, function(a, b) {
                        m = a.isEventValid(c), 0 == b ? l.minTop = l.maxTop = m.top : (l.minTop = Math.min(l.minTop, m.top), l.maxTop = Math.max(l.maxTop, m.top)), j.push(r ? r(a, m.name, m.value, m.text, m.i) : m.name + " " + m.value)
                    }), l.text = b.get("tipMocker").call(b, j, l.i)), l.valid ? l : !1
                }}), new a.Tip(b.get("tip"), b.mocker), b.register(b.mocker)
            }
            b.pushIf("sub_option.area_opacity", b.get("area_opacity"))
        }
    }}), a.LineBasic2D = a.extend(a.Line, {configure: function() {
        a.LineBasic2D.superclass.configure.call(this), this.type = "basicline2d", this.tipInvokeHeap = []
    },doAnimation: function(b, c, d) {
        a.each(d.lines, function(e) {
            a.each(e.get("points"), function(a) {
                a.y = e.y - Math.ceil(d.animationArithmetic(b, 0, e.y - a.y_, c))
            }), e.drawSegment()
        })
    },doConfig: function() {
        a.LineBasic2D.superclass.doConfig.call(this);
        var b = this._();
        if (!b.isE()) {
            var c, d, e, f, g, h, i = b.coo.valid_height, j = b.get("point_space"), k = b.get("sub_option.originx"), l = b.get("nullToDirect");
            b.push("sub_option.tip.showType", "follow"), b.push("sub_option.coordinate", b.coo), b.push("sub_option.tipInvokeHeap", b.tipInvokeHeap), b.push("sub_option.point_space", j), a.each(b.data, function(m) {
                c = b.coo.getScale(m.scaleAlign || b.get("scaleAlign")), g = b.get("sub_option.originy") - c.basic * i, d = [], a.each(m.value, function(n, o) {
                    null != n ? (e = j * o, f = (n - c.start) * i / c.distance, h = {x: k + e,y: g - f,value: n,text: m.name + " " + n}, a.merge(h, b.fireEvent(b, "parsePoint", [m, n, e, f, o, c])), d.push(h)) : d.push({ignored: !l,direct: l})
                }, b), a.merge(b.get("sub_option"), m), b.push("sub_option.points", d), b.push("sub_option.brushsize", m.linewidth || m.line_width), b.lines.push(new a.LineSegment(b.get("sub_option"), b))
            }, this)
        }
    }}), a.register("LineBasic2D"), a.Area2D = a.extend(a.LineBasic2D, {configure: function() {
        a.Area2D.superclass.configure.call(this), this.type = "area2d", this.set({area_opacity: .3})
    },doConfig: function() {
        this.push("sub_option.area", !0), a.Area2D.superclass.doConfig.call(this)
    }}), a.register("Area2D")
}(iChart), define("ichart", function(a) {
    return function() {
        var b;
        return b || a.iChart
    }
}(this)), function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E = [].slice, F = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    };
    return null == (z = window.Dropbox) && (window.Dropbox = {}), null == (A = Dropbox.baseUrl) && (Dropbox.baseUrl = "https://www.dropbox.com"), null == (B = Dropbox.blockBaseUrl) && (Dropbox.blockBaseUrl = "https://dl.dropbox.com"), Dropbox.addListener = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, function(a) {
            return a.preventDefault = function() {
                return this.returnValue = !1
            }, c(a)
        })
    }, Dropbox.removeListener = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
    }, d = function(a) {
        var b, c;
        return c = encodeURIComponent(Dropbox.VERSION), b = -1 === a.indexOf("?") ? "?" : "&", "" + a + b + "version=" + c
    }, f = function(a, b) {
        var c, e, f, g, h, i, j, k, l;
        return i = encodeURIComponent(window.location.protocol + "//" + window.location.host), c = encodeURIComponent(Dropbox.appKey), g = encodeURIComponent(a.linkType || ""), j = encodeURIComponent(a._trigger || "js"), h = Boolean(a.multiselect), e = encodeURIComponent((null != (l = a.extensions) && "function" == typeof l.join ? l.join(" ") : void 0) || ""), f = Boolean(a.folderselect), b = Boolean(b), k = "" + Dropbox.baseUrl + "/chooser?origin=" + i + "&app_key=" + c + "&link_type=" + g, k += "&trigger=" + j + "&multiselect=" + h + "&extensions=" + e + "&folderselect=" + f + "&iframe=" + b, d(k)
    }, x = function() {
        var a, b, c;
        return b = encodeURIComponent(window.location.protocol + "//" + window.location.host), a = encodeURIComponent(Dropbox.appKey), c = "" + Dropbox.baseUrl + "/saver?origin=" + b + "&app_key=" + a, d(c)
    }, s = 1, n = function(a, b) {
        var c, e, f, g;
        if (c = encodeURIComponent(Dropbox.appKey), g = "" + Dropbox.baseUrl + "/dropins/job_status?job=" + b + "&app_key=" + c, g = d(g), f = function(b) {
            var c;
            "COMPLETE" === b.status ? ("function" == typeof a.progress && a.progress(1), "function" == typeof a.success && a.success()) : "PENDING" === (c = b.status) || "DOWNLOADING" === c ? (null != b.progress && "function" == typeof a.progress && a.progress(b.progress / 100), setTimeout(e, 1500)) : "FAILED" === b.status && "function" == typeof a.error && a.error(b.error)
        }, "withCredentials" in new XMLHttpRequest)
            e = function() {
                var b;
                return b = new XMLHttpRequest, b.onload = function() {
                    return f(JSON.parse(b.responseText))
                }, b.onerror = function() {
                    return "function" == typeof a.error ? a.error() : void 0
                }, b.open("GET", g, !0), b.send()
            };
        else if (Dropbox.disableJSONP) {
            if ("undefined" == typeof XDomainRequest || null === XDomainRequest || "https:" !== document.location.protocol)
                throw new Error("Unable to find suitable means of cross domain communication");
            e = function() {
                var b;
                return b = new XDomainRequest, b.onload = function() {
                    return f(JSON.parse(b.responseText))
                }, b.onerror = function() {
                    return "function" == typeof a.error ? a.error() : void 0
                }, b.open("get", g), b.send()
            }
        } else
            e = function() {
                var b, c, d;
                return b = "DropboxJsonpCallback" + s++, c = !1, window[b] = function(a) {
                    return c = !0, f(a)
                }, d = document.createElement("script"), d.src = "" + g + "&callback=" + b, d.onreadystatechange = function() {
                    var b;
                    return "loaded" === d.readyState ? (c || "function" == typeof a.error && a.error(), null != (b = d.parentNode) ? b.removeChild(d) : void 0) : void 0
                }, document.getElementsByTagName("head")[0].appendChild(d)
            };
        return "function" == typeof a.progress && a.progress(0), e()
    }, o = function(a, b, c) {
        var d, e, f;
        switch (d = JSON.parse(a.data), d.method) {
            case "ready":
                null != c.files && (f = JSON.stringify({method: "files",params: c.files}), e = "undefined" != typeof p && null !== p && c._popup ? p.contentWindow : a.source, e.postMessage(f, Dropbox.baseUrl)), "function" == typeof c.ready && c.ready();
                break;
            case "files_selected":
            case "files_saved":
                "function" == typeof b && b(), "function" == typeof c.success && c.success(d.params);
                break;
            case "progress":
                "function" == typeof c.progress && c.progress(d.params);
                break;
            case "close_dialog":
                "function" == typeof b && b(), "function" == typeof c.cancel && c.cancel();
                break;
            case "web_session_error":
                "function" == typeof b && b(), "function" == typeof c.webSessionFailure && c.webSessionFailure();
                break;
            case "web_session_unlinked":
                "function" == typeof b && b(), "function" == typeof c.webSessionUnlinked && c.webSessionUnlinked();
                break;
            case "resize":
                "function" == typeof c.resize && c.resize(d.params);
                break;
            case "error":
                "function" == typeof b && b(), "function" == typeof c.error && c.error(d.params);
                break;
            case "job_id":
                "function" == typeof b && b(), n(c, d.params);
                break;
            case "_debug_log":
                "undefined" != typeof console && null !== console && console.log(d.params.msg)
        }
    }, p = null, h = function() {
        /\bTrident\b/.test(navigator.userAgent) && (p = document.createElement("iframe"), p.setAttribute("id", "dropbox_xcomm"), p.setAttribute("src", Dropbox.baseUrl + "/static/api/1/xcomm.html"), p.style.display = "none", document.getElementsByTagName("body")[0].appendChild(p))
    }, Dropbox.createChooserWidget = function(a) {
        var b;
        return b = i(f(a, !0)), b._handler = function(c) {
            c.source === b.contentWindow && c.origin === Dropbox.baseUrl && o(c, null, a)
        }, Dropbox.addListener(window, "message", b._handler), b
    }, Dropbox.cleanupWidget = function(a) {
        if (!a._handler)
            throw new Error("Invalid widget!");
        Dropbox.removeListener(window, "message", a._handler), delete a._handler
    }, w = function(a, b) {
        var c, d;
        return c = (window.screenX || window.screenLeft) + ((window.outerWidth || document.documentElement.offsetWidth) - a) / 2, d = (window.screenY || window.screenTop) + ((window.outerHeight || document.documentElement.offsetHeight) - b) / 2, "width=" + a + ",height=" + b + ",left=" + c + ",top=" + d
    }, Dropbox._dropinsjs_loaded ? void ("undefined" != typeof console && null !== console && "function" == typeof console.warn && console.warn("dropins.js included more than once")) : (Dropbox._dropinsjs_loaded = !0, null == (C = Dropbox.appKey) && (Dropbox.appKey = null != (D = document.getElementById("dropboxjs")) ? D.getAttribute("data-app-key") : void 0), a = "https://www.dropbox.com/developers/dropins/chooser/js", c = ["text", "documents", "images", "video", "audio"], Dropbox.init = function(a) {
        Dropbox.appKey = a.appKey
    }, i = function(a) {
        var b;
        return b = document.createElement("iframe"), b.src = a, b.style.display = "block", b.style.backgroundColor = "white", b.style.border = "none", b
    }, v = function(a) {
        var b, c, d, e, f, g, h, i;
        if ("string" == typeof a[0])
            e = a.shift(), c = "string" == typeof a[0] ? a.shift() : m(e), d = {files: [{url: e,filename: c}]};
        else {
            if (d = a.shift(), null == d)
                throw new Error("Missing arguments. See documentation.");
            if ((null != (h = d.files) ? !h.length : !0) && "function" != typeof d.files)
                throw new Error("Missing files. See documentation.");
            for (i = d.files, f = 0, g = i.length; g > f; f++)
                b = i[f], b.filename || (b.filename = m(b.url))
        }
        return d
    }, Dropbox.save = function() {
        var a, b, c, d, e, f, g;
        if (a = 1 <= arguments.length ? E.call(arguments, 0) : [], d = v(a), !Dropbox.isBrowserSupported())
            return void alert("Your browser does not support the Dropbox Saver");
        if (d._popup = !0, "object" != typeof d.files || !d.files.length)
            throw new Error("Opening the saver failed. The object passed in must have a 'files' property that contains a list of objects.  See documentation.");
        for (g = d.files, e = 0, f = g.length; f > e; e++)
            if (c = g[e], "string" != typeof c.url)
                throw new Error("File urls to download incorrectly configured.  Each file must have a url. See documentation.");
        return b = w(352, 237), u(x(d), b, d)
    }, u = function(a, b, c) {
        var d, e, f, g, h;
        if (d = function() {
            g.closed || g.close(), Dropbox.removeListener(window, "message", e), clearInterval(h)
        }, e = function(a) {
            (a.source === g || a.source === (null != p ? p.contentWindow : void 0)) && o(a, d, c)
        }, f = function() {
            g.closed && (d(), "function" == typeof c.cancel && c.cancel())
        }, g = window.open(a, "dropbox", "" + b + ",resizable=yes,location=yes"), !g)
            throw new Error("Failed to open a popup window. Dropbox.choose and Dropbox.save should only be called from within a user-triggered event handler such as a tap or click event.");
        return g.focus(), h = setInterval(f, 100), Dropbox.addListener(window, "message", e), g
    }, y = function(b) {
        var d, e, f, g, h;
        if (null == b.success && "undefined" != typeof console && null !== console && "function" == typeof console.warn && console.warn("You must provide a success callback to the Chooser to see the files that the user selects"), e = function() {
            return "undefined" != typeof console && null !== console && "function" == typeof console.warn && console.warn("The provided list of extensions or file types is not valid. See Chooser documentation: " + a), "undefined" != typeof console && null !== console && "function" == typeof console.warn && console.warn("Available file types are: " + c.join(", ")), delete b.extensions
        }, null != b.extensions)
            if ("[object Array]" === Object.prototype.toString.call(b.extensions))
                for (h = b.extensions, f = 0, g = h.length; g > f; f++)
                    d = h[f], !d.match(/^\.[\.\w$#&+@!()\-'`_~]+$/) && F.call(c, d) < 0 && e();
            else
                e();
        return b
    }, e = function(a) {
        var b, c, d, e, g, h, j, k;
        return Dropbox.isBrowserSupported() ? (k = 660, e = 440, void (a.iframe ? (j = i(f(a, !0)), j.style.width = k + "px", j.style.height = e + "px", h = document.createElement("div"), h.style.position = "fixed", h.style.left = h.style.right = h.style.top = h.style.bottom = "0px", h.style.zIndex = "1000", b = document.createElement("div"), b.style.position = "absolute", b.style.left = b.style.right = b.style.top = b.style.bottom = "0px", b.style.backgroundColor = "rgb(160, 160, 160)", b.style.opacity = "0.2", b.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)", g = document.createElement("div"), g.style.position = "relative", g.style.width = k + "px", g.style.margin = "125px auto 0px auto", g.style.border = "1px solid #ACACAC", g.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px", g.appendChild(j), h.appendChild(b), h.appendChild(g), document.body.appendChild(h), d = function(b) {
            b.source === j.contentWindow && o(b, function() {
                document.body.removeChild(h), Dropbox.removeListener(window, "message", d)
            }, a)
        }, Dropbox.addListener(window, "message", d)) : (c = w(k, e), u(f(a), c, a)))) : void alert("Your browser does not support the Dropbox Chooser")
    }, Dropbox.choose = function(a) {
        null == a && (a = {}), a = y(a), e(a)
    }, Dropbox.isBrowserSupported = function() {
        var a;
        return a = r(), Dropbox.isBrowserSupported = function() {
            return a
        }, a
    }, r = function() {
        var a, b, c, d;
        for (d = [/Windows Phone/, /BB10;/, /CriOS/], b = 0, c = d.length; c > b; b++)
            if (a = d[b], a.test(navigator.userAgent))
                return !1;
        return "undefined" == typeof JSON || null === JSON || null == window.postMessage ? !1 : !0
    }, l = function(a) {
        return a.replace(/\/+$/g, "").split("/").pop()
    }, m = function(a) {
        var b;
        return b = document.createElement("a"), b.href = a, l(b.pathname)
    }, g = function(a, b) {
        var c;
        return null != b ? b.innerHTML = "" : (b = document.createElement("a"), b.href = "#"), b.className += " dropbox-dropin-btn", b.className += Dropbox.isBrowserSupported() ? " dropbox-dropin-default" : " dropbox-dropin-disabled", c = document.createElement("span"), c.className = "dropin-btn-status", b.appendChild(c), a = document.createTextNode(a), b.appendChild(a), b
    }, Dropbox.createChooseButton = function(a) {
        var b;
        return null == a && (a = {}), a = y(a), b = g("Choose from Dropbox"), Dropbox.addListener(b, "click", function(c) {
            c.preventDefault(), e({success: function(c) {
                b.className = "dropbox-dropin-btn dropbox-dropin-success", "function" == typeof a.success && a.success(c)
            },cancel: a.cancel,linkType: a.linkType,multiselect: a.multiselect,extensions: a.extensions,iframe: a.iframe,_trigger: "button"})
        }), b
    }, Dropbox.createSaveButton = function() {
        var a, b, c;
        return a = 1 <= arguments.length ? E.call(arguments, 0) : [], c = v(a), b = a.shift(), b = g("Save to Dropbox", b), Dropbox.addListener(b, "click", function(a) {
            var d;
            return a.preventDefault(), b.className.indexOf("dropbox-dropin-error") >= 0 || b.className.indexOf("dropbox-dropin-default") >= 0 || b.className.indexOf("dropbox-dropin-disabled") >= 0 ? (d = ("function" == typeof c.files ? c.files() : void 0) || c.files, (null != d ? d.length : void 0) ? void Dropbox.save({files: d,success: function() {
                b.className = "dropbox-dropin-btn dropbox-dropin-success", "function" == typeof c.success && c.success()
            },progress: function(a) {
                b.className = "dropbox-dropin-btn dropbox-dropin-progress", "function" == typeof c.progress && c.progress(a)
            },cancel: function() {
                "function" == typeof c.cancel && c.cancel()
            },error: function(a) {
                b.className = "dropbox-dropin-btn dropbox-dropin-error", "function" == typeof c.error && c.error(a)
            }}) : (b.className = "dropbox-dropin-btn dropbox-dropin-error", void ("function" == typeof c.error && c.error("Missing files")))) : void 0
        }), b
    }, t = function(a, b) {
        return "background: " + a + ";\nbackground: -moz-linear-gradient(top, " + a + " 0%, " + b + " 100%);\nbackground: -webkit-linear-gradient(top, " + a + " 0%, " + b + " 100%);\nbackground: linear-gradient(to bottom, " + a + " 0%, " + b + " 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr='" + a + "', endColorstr='" + b + "',GradientType=0);"
    }, j = document.createElement("style"), j.type = "text/css", k = '@-webkit-keyframes rotate {\n  from  { -webkit-transform: rotate(0deg); }\n  to   { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes rotate {\n  from  { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n.dropbox-dropin-btn, .dropbox-dropin-btn:link, .dropbox-dropin-btn:hover {\n  display: inline-block;\n  height: 14px;\n  font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #636363;\n  text-decoration: none;\n  padding: 1px 7px 5px 3px;\n  border: 1px solid #ebebeb;\n  border-radius: 2px;\n  border-bottom-color: #d4d4d4;\n  ' + t("#fcfcfc", "#f5f5f5") + "\n}\n\n.dropbox-dropin-default:hover, .dropbox-dropin-error:hover {\n  border-color: #dedede;\n  border-bottom-color: #cacaca;\n  " + t("#fdfdfd", "#f5f5f5") + "\n}\n\n.dropbox-dropin-default:active, .dropbox-dropin-error:active {\n  border-color: #d1d1d1;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n}\n\n.dropbox-dropin-btn .dropin-btn-status {\n  display: inline-block;\n  width: 15px;\n  height: 14px;\n  vertical-align: bottom;\n  margin: 0 5px 0 2px;\n  background: transparent url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-saver-status.png') no-repeat;\n  position: relative;\n  top: 2px;\n}\n\n.dropbox-dropin-default .dropin-btn-status {\n  background-position: 0px 0px;\n}\n\n.dropbox-dropin-progress .dropin-btn-status {\n  width: 18px;\n  margin: 0 4px 0 0;\n  background: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-progress.png') no-repeat center center;\n  -webkit-animation-name: rotate;\n  -webkit-animation-duration: 1.7s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  animation-name: rotate;\n  animation-duration: 1.7s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n.dropbox-dropin-success .dropin-btn-status {\n  background-position: -15px 0px;\n}\n\n.dropbox-dropin-disabled {\n  background: #e0e0e0;\n  border: 1px #dadada solid;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none;\n}\n\n.dropbox-dropin-disabled .dropin-btn-status {\n  background-position: -30px 0px;\n}\n\n.dropbox-dropin-error .dropin-btn-status {\n  background-position: -45px 0px;\n}\n\n@media only screen and (-webkit-min-device-pixel-ratio: 1.4) {\n  .dropbox-dropin-btn .dropin-btn-status {\n    background-image: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-saver-status-2x.png');\n    background-size: 60px 14px;\n    -webkit-background-size: 60px 14px;\n  }\n\n  .dropbox-dropin-progress .dropin-btn-status {\n    background: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-progress-2x.png') no-repeat center center;\n    background-size: 20px 20px;\n    -webkit-background-size: 20px 20px;\n  }\n}\n\n.dropbox-saver:hover, .dropbox-chooser:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.dropbox-chooser, .dropbox-dropin-btn {\n  line-height: 11px !important;\n  text-decoration: none !important;\n  box-sizing: content-box !important;\n  -webkit-box-sizing: content-box !important;\n  -moz-box-sizing: content-box !important;\n}\n", j.styleSheet ? j.styleSheet.cssText = k : j.textContent = k, document.getElementsByTagName("head")[0].appendChild(j), setTimeout(h, 0), b = function() {
        return document.removeEventListener ? document.removeEventListener("DOMContentLoaded", b, !1) : document.detachEvent && document.detachEvent("onreadystatechange", b), q()
    }, "complete" === document.readyState ? setTimeout(b, 0) : document.addEventListener ? document.addEventListener("DOMContentLoaded", b, !1) : document.attachEvent("onreadystatechange", b), Dropbox.VERSION = "2", void (q = function() {
        var a, b, c, d;
        for (d = document.getElementsByTagName("a"), b = 0, c = d.length; c > b; b++)
            a = d[b], F.call((a.getAttribute("class") || "").split(" "), "dropbox-saver") >= 0 && !function(a) {
                Dropbox.createSaveButton({files: function() {
                    return [{url: a.getAttribute("data-url") || a.href,filename: a.getAttribute("data-filename") || l(a.pathname)}]
                }}, a)
            }(a)
    }))
}.call(this), define("dropins", function() {
}), function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b() : "function" == typeof define && define.amd ? define("spider", [], function() {
        return b()
    }) : a.Spiderjs = b()
}(this, function(a) {
    function b(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
        }
        return b
    }
    function c(a) {
        var c, d, e, f, g, i, j, k = "", l = 0;
        for (a = b(a); l < a.length; )
            c = a.charCodeAt(l++), d = a.charCodeAt(l++), e = a.charCodeAt(l++), f = c >> 2, g = (3 & c) << 4 | d >> 4, i = (15 & d) << 2 | e >> 6, j = 63 & e, isNaN(d) ? i = j = 64 : isNaN(e) && (j = 64), k = k + h.charAt(f) + h.charAt(g) + h.charAt(i) + h.charAt(j);
        return k
    }
    function d(a, b, c) {
        for (var d in a)
            g.call(a, d) && b.call(c, a[d], d, a);
        return a
    }
    function e(a, b) {
        var d = "", e = {_userId: i._userId,client: i.client};
        return a && (e.event = a), b && (e.properties = b), i.host && e._userId && e.client && (i.host.indexOf("http") < 0 && (d += document && "https:" === document.location.protocol ? "https://" : "http://"), d += i.host + "?data=" + c(JSON.stringify(e))), d
    }
    function f(a) {
        d(a, function(a, b) {
            i[b] = a
        }), this.init()
    }
    var g = Object.prototype.hasOwnProperty, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = {host: "spider.teambition.com/api/track",_userId: "",client: ""};
    return a = a || function(a) {
        if (a) {
            var b = new Image;
            b.onload = b.onerror = b.abort = function() {
                b = b.onload = b.onerror = b.abort = null
            }, b.src = a
        }
    }, f.prototype.init = function() {
        a(e())
    }, f.prototype.track = function(b, c) {
        try {
            {
                JSON.stringify(c)
            }
        } catch (d) {
            c = null
        }
        b && "string" == typeof b && a(e(b, c))
    }, f.btoa = c, f
}), function(a, b) {
    var c;
    return c = b(), "object" == typeof module && "object" == typeof module.exports ? module.exports = c : "function" == typeof define && define.amd ? define("gta", ["jquery"], function() {
        return c
    }) : a.Gta = c
}("object" == typeof window ? window : this, function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m;
    if (m = Array.prototype.slice, a = null, l = function(a) {
        return a.parentNode.removeChild(a)
    }, e = function(a, b) {
        return a.onerror = function() {
            return window[b] = null, l(a)
        }, a.onload = function() {
            return l(a)
        }
    }, g = function(a) {
        var b, c;
        return b = document.createElement("script"), c = document.getElementsByTagName("script")[0], b.async = 1, b.src = a, c.parentNode.insertBefore(b, c), b
    }, h = {pageview: function() {
        var a, b, c, d;
        try {
            for (c = 0, d = k.length; d > c; c++)
                b = k[c], b.pageview.apply(b, arguments)
        } catch (e) {
            a = e
        }
        return this
    },event: function() {
        var b, c, d, e;
        try {
            for (arguments[0] || (arguments[0] = (null != a ? a.data("category") : void 0) || "gta"), d = 0, e = k.length; e > d; d++)
                c = k[d], c.event.apply(c, arguments)
        } catch (f) {
            b = f
        }
        return this
    },delegateEvents: function() {
        return window.$ ? (a = $("body"), $(document).off(".gta").on("click.gta", '[data-gta="event"]', function(a) {
            return function(b) {
                var c, d, e, f, g, h;
                return c = $(b.currentTarget), e = c.data("category"), e || (e = c.closest("[data-category]").data("category")), d = c.data("action") || b.type, f = c.data("label"), h = parseInt(c.data("value")), g = !!c.data("mixpanel"), a.event(e, d, f, h, g)
            }
        }(this))) : void 0
    }}, c = {google: function(a) {
        var b;
        if (a)
            return window.GoogleAnalyticsObject = "_ga", window._ga = function() {
                return _ga.q.push(arguments)
            }, _ga.q = [], _ga.l = 1 * new Date, _ga("create", a, "auto"), _ga("require", "displayfeatures"), _ga("require", "linkid", "linkid.js"), _ga("send", "pageview"), b = g("//www.google-analytics.com/analytics.js"), e(b, "_ga"), {name: "google",pageview: function() {
                var a, b;
                if (window._ga)
                    return a = m.call(arguments), b = "object" == typeof a[0] ? a[0] : a.join("_"), window._ga("send", "pageview", b)
            },event: function(a, b, c, d) {
                var e;
                if (window._ga)
                    return e = ["send", "event", a, b, c], d > 0 && e.push(+d), window._ga.apply(null, e)
            }}
    },baidu: function(a) {
        var b;
        if (a)
            return window._hmt = [], b = g("//hm.baidu.com/hm.js?" + a), e(b, "_hmt"), {name: "baidu",pageview: function() {
                var a, b, c, d, e;
                if (window._hmt) {
                    if (a = m.call(arguments), "object" == typeof a[0]) {
                        if (b = a[0].page, !b) {
                            b = [], e = a[0];
                            for (c in e)
                                d = e[c], b.push(d);
                            b = b.join("_")
                        }
                    } else
                        b = a.join("_");
                    return window._hmt.push(["_trackPageview", b])
                }
            },event: function(a, b, c, d) {
                var e;
                if (window._hmt)
                    return e = ["_trackEvent", a, b, c], d > 0 && e.push(+d), window._hmt.push(e)
            }}
    },mixpanel: function(a) {
        var b, c;
        if (a)
            return b = "mixpanel", window.mixpanel = [], mixpanel._i = [], mixpanel.init = function(a, c, d) {
                var e, f, g, h, i, j;
                for (g = mixpanel, null != d ? g = mixpanel[d] = [] : d = b, g.people || (g.people = []), g.toString = function(a) {
                    var c;
                    return c = b, d !== b && (c += "." + d), a || (c += " (stub)"), c
                }, g.people.toString = function() {
                    return g.toString(1) + ".people (stub)"
                }, j = function(a, b) {
                    var c;
                    return c = b.split("."), 2 === c.length && (a = a[c[0]], b = c[1]), a[b] = function() {
                        return a.push([b].concat(m.call(arguments)))
                    }
                }, f = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" "), h = 0, i = f.length; i > h; h++)
                    e = f[h], j(g, e);
                return mixpanel._i.push([a, c, d])
            }, mixpanel.__SV = 1.2, mixpanel.init(a), c = g("//cdn.mxpnl.com/libs/mixpanel-2.2.min.js"), e(c, b), {name: "mixpanel",pageview: function() {
            },event: function(a, b, c, d, e) {
                var f;
                return null == e && (e = !1), window.mixpanel && e ? (b && "object" != typeof b ? f = {category: a,label: c,value: d} : (f = b || {}, b = a), window.mixpanel.track(b, f)) : void 0
            }}
    }}, f = document.getElementById("gta-main"), k = h.providers = [], !f)
        return h;
    for (i in c)
        b = c[i], d = f.getAttribute("data-" + i), d && (j = b(d)) && k.push(j);
    return h.delegateEvents(), l(f), h
}), function() {
    !function(a, b) {
        var c;
        return c = b(), "object" == typeof module && "object" == typeof module.exports ? module.exports = c : "function" == typeof define && define.amd ? define("charts", [], function() {
            return c
        }) : a.teambitionCharts = c
    }(window, function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
        return m = Array.prototype.slice, b = [], d = "en", o = /[\u4e00-\u9fa5]/, n = " ・·|,.&@*:", e = "Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif", h = {color: "#808080",fontSize: "14",fontFamily: e}, i = {color: "#a6a6a6",fontSize: "12",fontFamily: e}, g = {x: 130,y: 15,x2: 80,y2: 35,borderWidth: 0}, j = {zh: {donePercent: "已完成占比(%)",undoPercent: "未完成占比(%)",doneTasks: "已完成任务",undoTasks: "未完成任务",projects: "项目数量",members: "成员数量",tasks: "任务数量"},en: {donePercent: "Tasks Finished(%)",undoPercent: "Tasks Unfinished(%)",doneTasks: "Tasks Finished",undoTasks: "Tasks Unfinished",projects: "Projects",members: "Members",tasks: "Tasks"},ja: {donePercent: "完成率(%)",undoPercent: "未完成率(%)",doneTasks: "完成したタスク",undoTasks: "完成してないタスク",projects: "プロジェクト数",members: "メンバー数",tasks: "タスク数"}}, k = function(a) {
            return a.parentNode.removeChild(a)
        }, c = function(a, b) {
            return a.onerror = function() {
                return k(a)
            }, a.onload = function() {
                return k(a), b()
            }
        }, f = function(a) {
            var b, c;
            return b = document.createElement("script"), c = document.getElementsByTagName("script")[0], b.async = 1, b.src = a, c.parentNode.insertBefore(b, c), b
        }, l = function(a, b) {
            var c;
            return b.width && (c = "width: " + b.width + ";"), b.height && (c += "height: " + b.height + ";"), c += "-webkit-overflow-scrolling:touch;-webkit-transform:rotateY(0deg);", a.setAttribute("style", c)
        }, q = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, p;
            if ("string" != typeof a)
                return "";
            for (b || (b = 15), g = 0, c = 0, p = [], m = a.trim().split(""), j = 0, l = m.length; l > j; j++) {
                if (h = m[j], f = 1 + o.test(h), c += f, c > b) {
                    if (g > b)
                        break;
                    for (e = -1, d = k = p.length - 1; k >= 0; d = k += -1)
                        if (i = p[d], n.indexOf(i) > -1) {
                            e = d;
                            break
                        }
                    e > 0 ? (p[e] = " " === p[e] ? "\n " : p[e] + "\n", p.push(h), c = p.length - e) : (p.push("\n" + h), c = 0)
                } else
                    p.push(h);
                g += f
            }
            return p.join("")
        }, a = function() {
            function a(a, c) {
                this.options = a, this.dom = this.options.dom, this.locale = j[this.options.lang || d], this.locale || (this.locale = j.en), this.chart = c.init(this.dom), b.push(this)
            }
            return a.prototype.resize = function(a, b) {
                return (a || b) && l(this.dom, {width: a || this.dom.clientWidth + "px",height: b || this.dom.clientHeight + "px"}), this.chart.resize()
            }, a.prototype.dispose = function() {
                var a, c, d, e, f;
                try {
                    this.chart.dispose()
                } catch (g) {
                    c = g
                }
                for (d = e = 0, f = b.length; f > e; d = ++e)
                    if (a = b[d], a === this)
                        return b.splice(d, 1)
            }, a.prototype.setOption = function(a) {
                return this.chart.setOption(a)
            }, a.prototype.orgMembersEfficiency = function(a) {
                var b, c;
                if (a.length)
                    return c = function(a) {
                        return Math.round(100 * a.doneCount / (a.doneCount + a.undoCount)) || 0
                    }, a.forEach(function(a) {
                        return a.name = q(a.name, 10), a.done = c(a), a.undo = 100 - a.done
                    }), a.sort(function(a, b) {
                        return a.done - b.done
                    }), this.resize(null, 40 * a.length + 50 + "px"), b = {tooltip: {trigger: "item"},legend: {x: "center",y: "bottom",textStyle: i,data: [this.locale.donePercent, this.locale.undoPercent]},grid: {x: 90,y: 15,x2: 80,y2: 35,borderWidth: 0},xAxis: [{type: "value",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !1},splitLine: {show: !1}}],yAxis: [{type: "category",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !0,textStyle: h},splitLine: {show: !1},data: a.map(function(a) {
                        return a.name
                    })}],series: [{name: this.locale.donePercent,type: "bar",stack: "总量",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#cbf2c7",label: {show: !1}}},data: a.map(function(a) {
                        return a.done
                    })}, {name: this.locale.undoPercent,type: "bar",stack: "总量",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#fa9299",label: {show: !0,position: "right",formatter: function(a, b, c) {
                        return "" + (100 - c) + "%"
                    },textStyle: h}}},data: a.map(function(a) {
                        return a.undo
                    })}]}, this.options.isMobile && (b.tooltip = {show: !1}, b.animation = !1), this.chart.setOption(b)
            }, a.prototype.orgMembersTasks = function(a) {
                var b, c;
                if (a.length)
                    return b = 0, a.sort(function(a, b) {
                        return a.undoCount + a.doneCount - b.undoCount - b.doneCount
                    }), this.resize(null, 40 * a.length + 50 + "px"), c = {tooltip: {trigger: "item"},legend: {x: "center",y: "bottom",textStyle: i,data: [this.locale.doneTasks, this.locale.undoTasks]},grid: {x: 90,y: 15,x2: 80,y2: 35,borderWidth: 0},xAxis: [{type: "value",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !1},splitLine: {show: !1}}],yAxis: [{type: "category",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !0,textStyle: h},splitLine: {show: !1},data: a.map(function(a) {
                        return q(a.name, 10)
                    })}],series: [{name: this.locale.doneTasks,type: "bar",stack: "总量",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#cbf2c7",label: {show: !1}}},data: a.map(function(a) {
                        return a.doneCount
                    })}, {name: this.locale.undoTasks,type: "bar",stack: "总量",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#fa9299",label: {show: !0,position: "right",formatter: function(c, d, e) {
                        var f;
                        return f = "" + a[b++].doneCount + "/" + e, b >= a.length && (b = 0), f
                    },textStyle: h}}},data: a.map(function(a) {
                        return a.undoCount
                    })}]}, this.options.isMobile && (c.tooltip = {show: !1}, c.animation = !1), this.chart.setOption(c)
            }, a.prototype.orgTeamMembers = function(a) {
                var b;
                if (a.length)
                    return a.sort(function(a, b) {
                        return a.membersCount - b.membersCount
                    }), this.resize(null, 40 * a.length + 50 + "px"), b = {tooltip: {trigger: "item"},grid: g,xAxis: [{type: "value",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !1},splitLine: {show: !1}}],yAxis: [{type: "category",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !0,textStyle: h},splitLine: {show: !1},data: a.map(function(a) {
                        return q(a.name)
                    })}],series: [{name: this.locale.members,type: "bar",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#cbf2c7",label: {show: !0,position: "right",textStyle: h}}},data: a.map(function(a) {
                        return a.membersCount
                    })}]}, this.options.isMobile && (b.tooltip = {show: !1}, b.animation = !1), this.chart.setOption(b)
            }, a.prototype.orgTeamProjects = function(a) {
                var b;
                if (a.length)
                    return a.sort(function(a, b) {
                        return a.projectsCount - b.projectsCount
                    }), this.resize(null, 40 * a.length + 50 + "px"), b = {tooltip: {trigger: "item"},grid: g,xAxis: [{type: "value",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !1},splitLine: {show: !1}}],yAxis: [{type: "category",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !0,textStyle: h},splitLine: {show: !1},data: a.map(function(a) {
                        return q(a.name)
                    })}],series: [{name: this.locale.projects,type: "bar",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#cbf2c7",label: {show: !0,position: "right",textStyle: h}}},data: a.map(function(a) {
                        return a.projectsCount
                    })}]}, this.options.isMobile && (b.tooltip = {show: !1}, b.animation = !1), this.chart.setOption(b)
            }, a.prototype.orgProjectsMembers = function(a) {
                var b;
                if (a.length)
                    return a.sort(function(a, b) {
                        return a.membersCount - b.membersCount
                    }), this.resize(null, 40 * a.length + 50 + "px"), b = {tooltip: {trigger: "item"},grid: g,xAxis: [{type: "value",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !1},splitLine: {show: !1}}],yAxis: [{type: "category",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !0,textStyle: h},splitLine: {show: !1},data: a.map(function(a) {
                        return q(a.name)
                    })}],series: [{name: this.locale.members,type: "bar",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#cbf2c7",label: {show: !0,position: "right",textStyle: h}}},data: a.map(function(a) {
                        return a.membersCount
                    })}]}, this.options.isMobile && (b.tooltip = {show: !1}, b.animation = !1), this.chart.setOption(b)
            }, a.prototype.orgProjectsTasks = function(a) {
                var b, c;
                if (a.length)
                    return b = 0, a.sort(function(a, b) {
                        return a.doneCount + a.undoCount - b.doneCount - b.undoCount
                    }), this.resize(null, 40 * a.length + 50 + "px"), c = {tooltip: {trigger: "item"},legend: {x: "center",y: "bottom",textStyle: i,data: [this.locale.doneTasks, this.locale.undoTasks]},grid: g,xAxis: [{type: "value",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !1},splitLine: {show: !1}}],yAxis: [{type: "category",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !0,textStyle: h},splitLine: {show: !1},data: a.map(function(a) {
                        return q(a.name)
                    })}],series: [{name: this.locale.doneTasks,type: "bar",stack: "总量",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#cbf2c7",label: {show: !1}}},data: a.map(function(a) {
                        return a.doneCount
                    })}, {name: this.locale.undoTasks,type: "bar",stack: "总量",barCategoryGap: 20,barMinHeight: 30,itemStyle: {normal: {color: "#fa9299",label: {show: !0,position: "right",formatter: function(c, d, e) {
                        var f;
                        return f = "" + a[b++].doneCount + "/" + e, b >= a.length && (b = 0), f
                    },textStyle: h}}},data: a.map(function(a) {
                        return a.undoCount
                    })}]}, this.options.isMobile && (c.tooltip = {show: !1}, c.animation = !1), this.chart.setOption(c)
            }, a.prototype.projectTasksProgress = function(a) {
                var b, c;
                if (a.length)
                    return b = 0, c = {tooltip: {trigger: "item"},legend: {x: "center",y: "bottom",textStyle: i,data: [this.locale.doneTasks]},grid: {x: 20,y: 35,x2: 20,y2: 55,borderWidth: 0},xAxis: [{type: "category",axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !0,textStyle: h},splitLine: {show: !1},data: a.map(function(a) {
                        return a.name
                    })}],yAxis: [{type: "value",scale: !0,axisLine: {show: !1},axisTick: {show: !1},axisLabel: {show: !1},splitLine: {show: !1}}],series: [{name: this.locale.doneTasks,type: "bar",barCategoryGap: 30,barMinHeight: 10,itemStyle: {normal: {color: "#cbf2c7",label: {show: !0,position: "top",textStyle: h}}},data: a.map(function(a) {
                        return a.doneCount
                    })}]}, this.options.isMobile && (c.tooltip = {show: !1}, c.animation = !1), this.chart.setOption(c)
            }, a
        }(), p = function(b, g) {
            var j;
            return b.dom || (b.dom = document.createElement("div"), document.body.appendChild(b.dom)), b.width = b.width || "400px", b.height = b.height || "200px", l(b.dom, b), b.dom, b.lang && (d = b.lang), [].indexOf.call(document.body.classList, "mac") > -1 && (e = "Helvetica Neue, Hiragino Sans GB, Microsoft Yahei, WenQuanYi Micro Hei, sans-serif"), h.fontFamily = e, i.fontFamily = e, window.echarts ? g(new a(b, window.echarts)) : (j = f(b.echartsSrc || "https://dn-st.oss.aliyuncs.com/public/echarts-plain-v2.0.3.js"), c(j, function() {
                return g(new a(b, window.echarts))
            }))
        }, p.clear = function() {
            var a, c;
            for (c = []; a = b.pop(); )
                a.dispose(), c.push(k(a.dom));
            return c
        }, p
    })
}.call(this), function() {
    !function(a) {
        return "function" == typeof define && define.amd ? define("caretjs", ["jquery"], a) : a(window.jQuery)
    }(function(a) {
        var b, c, d, e, f, g, h, i, j, k, l;
        return k = "caret", b = function() {
            function b(a) {
                this.$inputor = a, this.domInputor = this.$inputor[0]
            }
            return b.prototype.setPos = function() {
                return this.domInputor
            }, b.prototype.getIEPosition = function() {
                return this.getPosition()
            }, b.prototype.getPosition = function() {
                var a, b;
                return b = this.getOffset(), a = this.$inputor.offset(), b.left -= a.left, b.top -= a.top, b
            }, b.prototype.getOldIEPos = function() {
                var a, b;
                return b = h.selection.createRange(), a = h.body.createTextRange(), a.moveToElementText(this.domInputor), a.setEndPoint("EndToEnd", b), a.text.length
            }, b.prototype.getPos = function() {
                var a, b, c;
                return (c = this.range()) ? (a = c.cloneRange(), a.selectNodeContents(this.domInputor), a.setEnd(c.endContainer, c.endOffset), b = a.toString().length, a.detach(), b) : h.selection ? this.getOldIEPos() : void 0
            }, b.prototype.getOldIEOffset = function() {
                var a, b;
                return a = h.selection.createRange().duplicate(), a.moveStart("character", -1), b = a.getBoundingClientRect(), {height: b.bottom - b.top,left: b.left,top: b.top}
            }, b.prototype.getOffset = function() {
                var b, c, d, e;
                if (j.getSelection && (d = this.range())) {
                    if (d.endOffset - 1 < 0)
                        return null;
                    b = d.cloneRange(), b.setStart(d.endContainer, d.endOffset - 1), b.setEnd(d.endContainer, d.endOffset), e = b.getBoundingClientRect(), c = {height: e.height,left: e.left + e.width,top: e.top}, b.detach()
                } else
                    h.selection && (c = this.getOldIEOffset());
                return c && (c.top += a(j).scrollTop(), c.left += a(j).scrollLeft()), c
            }, b.prototype.range = function() {
                var a;
                if (j.getSelection)
                    return a = j.getSelection(), a.rangeCount > 0 ? a.getRangeAt(0) : null
            }, b
        }(), c = function() {
            function b(a) {
                this.$inputor = a, this.domInputor = this.$inputor[0]
            }
            return b.prototype.getIEPos = function() {
                var a, b, c, d, e, f, g;
                return b = this.domInputor, f = h.selection.createRange(), e = 0, f && f.parentElement() === b && (d = b.value.replace(/\r\n/g, "\n"), c = d.length, g = b.createTextRange(), g.moveToBookmark(f.getBookmark()), a = b.createTextRange(), a.collapse(!1), e = g.compareEndPoints("StartToEnd", a) > -1 ? c : -g.moveStart("character", -c)), e
            }, b.prototype.getPos = function() {
                return h.selection ? this.getIEPos() : this.domInputor.selectionStart
            }, b.prototype.setPos = function(a) {
                var b, c;
                return b = this.domInputor, h.selection ? (c = b.createTextRange(), c.move("character", a), c.select()) : b.setSelectionRange && b.setSelectionRange(a, a), b
            }, b.prototype.getIEOffset = function(a) {
                var b, c, d, e;
                return c = this.domInputor.createTextRange(), a || (a = this.getPos()), c.move("character", a), d = c.boundingLeft, e = c.boundingTop, b = c.boundingHeight, {left: d,top: e,height: b}
            }, b.prototype.getOffset = function(b) {
                var c, d, e;
                return c = this.$inputor, h.selection ? (d = this.getIEOffset(b), d.top += a(j).scrollTop() + c.scrollTop(), d.left += a(j).scrollLeft() + c.scrollLeft(), d) : (d = c.offset(), e = this.getPosition(b), d = {left: d.left + e.left - c.scrollLeft(),top: d.top + e.top - c.scrollTop(),height: e.height})
            }, b.prototype.getPosition = function(b) {
                var c, e, f, g, h, i, j;
                return c = this.$inputor, g = function(b) {
                    return a("<div></div>").text(b).html()
                }, void 0 === b && (b = this.getPos()), j = c.val().slice(0, b), f = c.val().slice(b), h = "<span style='position: relative; display: inline;'>" + g(j) + "</span>", h += "<span id='caret' style='position: relative; display: inline;'>|</span>", h += "<span style='position: relative; display: inline;'>" + g(f) + "</span>", i = new d(c), e = i.create(h).rect()
            }, b.prototype.getIEPosition = function(a) {
                var b, c, d, e, f;
                return d = this.getIEOffset(a), c = this.$inputor.offset(), e = d.left - c.left, f = d.top - c.top, b = d.height, {left: e,top: f,height: b}
            }, b
        }(), d = function() {
            function b(a) {
                this.$inputor = a
            }
            return b.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"], b.prototype.mirrorCss = function() {
                var b, c = this;
                return b = {position: "absolute",left: -9999,top: 0,zIndex: -2e4}, "TEXTAREA" === this.$inputor.prop("tagName") && this.css_attr.push("width"), a.each(this.css_attr, function(a, d) {
                    return b[d] = c.$inputor.css(d)
                }), b
            }, b.prototype.create = function(b) {
                return this.$mirror = a("<div></div>"), this.$mirror.css(this.mirrorCss()), this.$mirror.html(b), this.$inputor.after(this.$mirror), this
            }, b.prototype.rect = function() {
                var a, b, c;
                return a = this.$mirror.find("#caret"), b = a.position(), c = {left: b.left,top: b.top,height: a.height()}, this.$mirror.remove(), c
            }, b
        }(), e = {contentEditable: function(a) {
            return !(!a[0].contentEditable || "true" !== a[0].contentEditable)
        }}, g = {pos: function(a) {
            return a || 0 === a ? this.setPos(a) : this.getPos()
        },position: function(a) {
            return h.selection ? this.getIEPosition(a) : this.getPosition(a)
        },offset: function(a) {
            var b;
            return b = this.getOffset(a)
        }}, h = null, j = null, i = null, l = function(a) {
            var b;
            return (b = null != a ? a.iframe : void 0) ? (i = b, j = b.contentWindow, h = b.contentDocument || j.document) : (i = void 0, j = window, h = document)
        }, f = function(a) {
            var b;
            h = a[0].ownerDocument, j = h.defaultView || h.parentWindow;
            try {
                return i = j.frameElement
            } catch (c) {
                b = c
            }
        }, a.fn.caret = function(d, f, h) {
            var i;
            return g[d] ? (a.isPlainObject(f) ? (l(f), f = void 0) : l(h), i = e.contentEditable(this) ? new b(this) : new c(this), g[d].apply(i, [f])) : a.error("Method " + d + " does not exist on jQuery.caret")
        }, a.fn.caret.EditableCaret = b, a.fn.caret.InputCaret = c, a.fn.caret.Utils = e, a.fn.caret.apis = g
    })
}.call(this), function(a, b) {
    var c = "0.7.3", d = "", e = "?", f = "function", g = "undefined", h = "object", i = "major", j = "model", k = "name", l = "type", m = "vendor", n = "version", o = "architecture", p = "console", q = "mobile", r = "tablet", s = "smarttv", t = "wearable", u = "embedded", v = {extend: function(a, b) {
        for (var c in b)
            -1 !== "browser cpu device engine os".indexOf(c) && b[c].length % 2 === 0 && (a[c] = b[c].concat(a[c]));
        return a
    },has: function(a, b) {
        return "string" == typeof a ? -1 !== b.toLowerCase().indexOf(a.toLowerCase()) : void 0
    },lowerize: function(a) {
        return a.toLowerCase()
    }}, w = {rgx: function() {
        for (var a, c, d, e, i, j, k, l = 0, m = arguments; l < m.length && !j; ) {
            var n = m[l], o = m[l + 1];
            if (typeof a === g) {
                a = {};
                for (e in o)
                    i = o[e], typeof i === h ? a[i[0]] = b : a[i] = b
            }
            for (c = d = 0; c < n.length && !j; )
                if (j = n[c++].exec(this.getUA()))
                    for (e = 0; e < o.length; e++)
                        k = j[++d], i = o[e], typeof i === h && i.length > 0 ? 2 == i.length ? a[i[0]] = typeof i[1] == f ? i[1].call(this, k) : i[1] : 3 == i.length ? a[i[0]] = typeof i[1] !== f || i[1].exec && i[1].test ? k ? k.replace(i[1], i[2]) : b : k ? i[1].call(this, k, i[2]) : b : 4 == i.length && (a[i[0]] = k ? i[3].call(this, k.replace(i[1], i[2])) : b) : a[i] = k ? k : b;
            l += 2
        }
        return a
    },str: function(a, c) {
        for (var d in c)
            if (typeof c[d] === h && c[d].length > 0) {
                for (var f = 0; f < c[d].length; f++)
                    if (v.has(c[d][f], a))
                        return d === e ? b : d
            } else if (v.has(c[d], a))
                return d === e ? b : d;
        return a
    }}, x = {browser: {oldsafari: {major: {1: ["/8", "/1", "/3"],2: "/4","?": "/"},version: {"1.0": "/8",1.2: "/1",1.3: "/3","2.0": "/412","2.0.2": "/416","2.0.3": "/417","2.0.4": "/419","?": "/"}}},device: {amazon: {model: {"Fire Phone": ["SD", "KF"]}},sprint: {model: {"Evo Shift 4G": "7373KT"},vendor: {HTC: "APA",Sprint: "Sprint"}}},os: {windows: {version: {ME: "4.90","NT 3.11": "NT3.51","NT 4.0": "NT4.0",2000: "NT 5.0",XP: ["NT 5.1", "NT 5.2"],Vista: "NT 6.0",7: "NT 6.1",8: "NT 6.2",8.1: "NT 6.3",10: "NT 6.4",RT: "ARM"}}}}, y = {browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [k, n, i], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[k, "Opera"], n, i], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], [k, n, i], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [[k, "IE"], n, i], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[k, "Yandex"], n, i], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[k, /_/g, " "], n, i], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i], [k, n, i], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[k, "Dolphin"], n, i], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[k, "Chrome"], n, i], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [n, i, [k, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [n, i, k], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [k, [i, w.str, x.browser.oldsafari.major], [n, w.str, x.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [k, n, i], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[k, "Netscape"], n, i], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [k, n, i]],cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[o, "amd64"]], [/(ia32(?=;))/i], [[o, v.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[o, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[o, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[o, /ower/, "", v.lowerize]], [/(sun4\w)[;\)]/i], [[o, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[o, v.lowerize]]],device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [j, m, [l, r]], [/applecoremedia\/[\w\.]+ \((ipad)/], [j, [m, "Apple"], [l, r]], [/(apple\s{0,1}tv)/i], [[j, "Apple TV"], [m, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [m, j, [l, r]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [j, [m, "Amazon"], [l, r]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[j, w.str, x.device.amazon.model], [m, "Amazon"], [l, q]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [j, m, [l, q]], [/\((ip[honed|\s\w*]+);/i], [j, [m, "Apple"], [l, q]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [m, j, [l, q]], [/\(bb10;\s(\w+)/i], [j, [m, "BlackBerry"], [l, q]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [j, [m, "Asus"], [l, r]], [/(sony)\s(tablet\s[ps])/i], [m, j, [l, r]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [m, j, [l, p]], [/android.+;\s(shield)\sbuild/i], [j, [m, "Nvidia"], [l, p]], [/(playstation\s[3portablevi]+)/i], [j, [m, "Sony"], [l, p]], [/(sprint\s(\w+))/i], [[m, w.str, x.device.sprint.vendor], [j, w.str, x.device.sprint.model], [l, q]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [m, j, [l, r]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [m, [j, /_/g, " "], [l, q]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [j, [m, "Microsoft"], [l, p]], [/(kin\.[onetw]{3})/i], [[j, /\./g, " "], [m, "Microsoft"], [l, q]], [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i], [[m, "Motorola"], j, [l, q]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [j, [m, "Motorola"], [l, r]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[m, "Samsung"], j, [l, r]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[m, "Samsung"], j, [l, q]], [/(samsung);smarttv/i], [m, j, [l, s]], [/\(dtv[\);].+(aquos)/i], [j, [m, "Sharp"], [l, s]], [/sie-(\w+)*/i], [j, [m, "Siemens"], [l, q]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[m, "Nokia"], j, [l, q]], [/android\s3\.[\s\w-;]{10}(a\d{3})/i], [j, [m, "Acer"], [l, r]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [[m, "LG"], j, [l, r]], [/(lg) netcast\.tv/i], [m, j, [l, s]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [j, [m, "LG"], [l, q]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [j, [m, "Lenovo"], [l, r]], [/linux;.+((jolla));/i], [m, j, [l, q]], [/((pebble))app\/[\d\.]+\s/i], [m, j, [l, t]], [/android.+;\s(glass)\s\d/i], [j, [m, "Google"], [l, t]], [/(mobile|tablet);.+rv\:.+gecko\//i], [[l, v.lowerize], m, j]],engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [k, n], [/rv\:([\w\.]+).*(gecko)/i], [n, k]],os: [[/microsoft\s(windows)\s(vista|xp)/i], [k, n], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [k, [n, w.str, x.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[k, "Windows"], [n, w.str, x.os.windows.version]], [/\((bb)(10);/i], [[k, "BlackBerry"], n], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [k, n], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[k, "Symbian"], n], [/\((series40);/i], [k], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[k, "Firefox OS"], n], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [k, n], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[k, "Chromium OS"], n], [/(sunos)\s?([\w\.]+\d)*/i], [[k, "Solaris"], n], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [k, n], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[k, "iOS"], [n, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[k, "Mac OS"], [n, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [k, n]]}, z = function(b, c) {
        if (!(this instanceof z))
            return new z(b, c).getResult();
        var e = b || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : d), f = c ? v.extend(y, c) : y;
        this.getBrowser = function() {
            return w.rgx.apply(this, f.browser)
        }, this.getCPU = function() {
            return w.rgx.apply(this, f.cpu)
        }, this.getDevice = function() {
            return w.rgx.apply(this, f.device)
        }, this.getEngine = function() {
            return w.rgx.apply(this, f.engine)
        }, this.getOS = function() {
            return w.rgx.apply(this, f.os)
        }, this.getResult = function() {
            return {ua: this.getUA(),browser: this.getBrowser(),engine: this.getEngine(),os: this.getOS(),device: this.getDevice(),cpu: this.getCPU()}
        }, this.getUA = function() {
            return e
        }, this.setUA = function(a) {
            return e = a, this
        }, this.setUA(e)
    };
    if (z.VERSION = c, z.BROWSER = {NAME: k,MAJOR: i,VERSION: n}, z.CPU = {ARCHITECTURE: o}, z.DEVICE = {MODEL: j,VENDOR: m,TYPE: l,CONSOLE: p,MOBILE: q,SMARTTV: s,TABLET: r,WEARABLE: t,EMBEDDED: u}, z.ENGINE = {NAME: k,VERSION: n}, z.OS = {NAME: k,VERSION: n}, typeof exports !== g)
        typeof module !== g && module.exports && (exports = module.exports = z), exports.UAParser = z;
    else {
        a.UAParser = z, typeof define === f && define.amd && define("uaParser", [], function() {
            return z
        });
        var A = a.jQuery || a.Zepto;
        if (typeof A !== g) {
            var B = new z;
            A.ua = B.getResult(), A.ua.get = function() {
                return B.getUA()
            }, A.ua.set = function(a) {
                B.setUA(a);
                var b = B.getResult();
                for (var c in b)
                    A.ua[c] = b[c]
            }
        }
    }
}(this), function() {
    !function(a, b) {
        return "function" == typeof define && define.amd ? define("warehouse", ["backbone"], b) : a.warehouse = b(a.Backbone)
    }(window, function(a) {
        var b, c, d, e, f, g, h, i;
        return b = {matrix: {},models: {},collections: {}}, h = function(a, c, d) {
            var e;
            return e = f(a, c, d), e || (e = b.models[c] = new a({_id: c}, d)), e
        }, f = function(a, c, d) {
            var e;
            return e = b.models[c], !e && b.matrix[c] && (e = b.models[c] = new a(b.matrix[c].toJSON(), d)), e
        }, d = function(a, c, d) {
            var e;
            return d || (d = {}), (e = f(a, c, d)) ? ("function" == typeof d.success && d.success(e), e) : (e = b.models[c] = new a({_id: c}, d), e.fetch(d), e)
        }, g = function(a, c, d, f) {
            var g, i, j, k;
            return f || (f = {}), c || (c = 0), g = e(a, c), g || (j = a.prototype.name, (k = b.collections)[j] || (k[j] = {}), f._boundToObjectId = c, g = b.collections[j][c] = new a([], f)), d && g ? (i = g.get(d), i || (i = h(g.model, d)), i) : g
        }, e = function(a, c, d) {
            var e, f, g;
            return c || (c = 0), f = a.prototype.name, e = null != (g = b.collections[f]) ? g[c] : void 0, d && e ? e.get(d) : e
        }, c = function(a, c, d, e) {
            var f, h;
            return e || (e = {}), c || (c = 0), f = g(a, c, null, e), d ? (h = f.get(d), !h && b.matrix[d] && (h = f.add(b.matrix[d].toJSON())), h ? "function" == typeof e.success && e.success(h) : f.fetchOne(d, e), h) : (f.synced ? "function" == typeof e.success && e.success(f) : f.fetch(e), f)
        }, i = {getData: function() {
            return b
        },bindToModel: function(a) {
            return a.get = function(a, b) {
                return h(this, a, b)
            }, a.find = function(a) {
                return f(this, a)
            }, a.fetch = function(a, b) {
                return d(this, a, b)
            }, a
        },bindToCollection: function(a) {
            return a.get = function(a, b) {
                return g(this, a, null, b)
            }, a.getOne = function(a, b, c) {
                return g(this, a, b, c)
            }, a.find = function(a) {
                return e(this, a)
            }, a.findOne = function(a, b) {
                return e(this, a, b)
            }, a.fetch = function(a, b) {
                return c(this, a, null, b)
            }, a.fetchOne = function(a, b, d) {
                return c(this, a, b, d)
            }, a
        },bindByMatrix: function(c) {
            var d, e;
            if (d = c.id)
                return b.matrix[d] || (b.matrix[d] = new a.Model), e = b.matrix[d], c.get("updated") && e.get("updated") && new Date(c.get("updated")) < new Date(e.get("updated")) ? c.set(e.toJSON()) : e.set(c.toJSON()), c.on("destroy", function(a, c, f) {
                    return (null != f ? f.triggerByMatrix : void 0) !== e.cid ? (e.trigger("destroy"), delete b.matrix[d]) : void 0
                }), c.listenTo(e, "destroy", function() {
                    return this.trigger("destroy", this, this.collection, {triggerByMatrix: e.cid})
                }), c.on("change", function(a, b) {
                    return (null != b ? b.triggerByMatrix : void 0) !== e.cid ? e.set(a.toJSON()) : void 0
                }), c.listenTo(e, "change", function() {
                    return this.set(e.toJSON(), {triggerByMatrix: e.cid})
                })
        }}
    })
}.call(this), function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b() : "function" == typeof define && define.amd ? define("expireCache", [], b) : a.expireCache = b()
}("object" == typeof window ? window : this, function() {
    function a(a, b) {
        for (var c in a)
            a.hasOwnProperty(c) && b(a[c], c, a)
    }
    function b(c, d) {
        a(c, function(a) {
            a && "object" == typeof a && b(a, d), delete e[d + a]
        })
    }
    function c(a, b, c) {
        return (c = c || e[a._ns + b]) ? Date.now() <= c.e ? c.d : void delete e[a._ns + b] : void 0
    }
    function d(h, i) {
        var j;
        return h = (h || "") + ":", i = i > 0 ? +i : 300, j = f[h] || function(a, b, c) {
            return arguments.length > 1 || a && "object" == typeof a ? j.set(a, b, c) : j.get(a)
        }, j._ns = h, j._ex = i, f[h] ? j : (f[h] = j, j.get = function(b) {
            var d = {};
            return null != b ? c(j, b) : (a(e, function(a, b) {
                0 === b.indexOf(j._ns) && (b = b.slice(j._ns.length), a = c(j, b, a), a && (d[b] = a))
            }), d)
        }, j.set = function(b, c, d) {
            var f = {};
            b && "object" == typeof b ? (f = b, d = c) : f[b] = c;
            var g = d >= 0 ? d : j._ex;
            return g = 1e3 * +g + +new Date, a(f, function(a, b) {
                b = j._ns + b, e[b] = e[b] || {}, e[b].d = a, d === !1 && e[b].e || (e[b].e = g)
            }), j
        }, j.remove = function(c) {
            return "undefined" == typeof c || c + "" == "" ? a(e, function(a, b) {
                0 === b.indexOf(j._ns) && delete e[b]
            }) : b(g.call(arguments), j._ns), j
        }, j.namespace = function(a, b) {
            return null == a ? j : (a = j._ns + a, b = b > 0 ? +b : j._ex, d(a, b))
        }, j)
    }
    var e = {}, f = {}, g = [].slice, h = d();
    return h.NAME = "expireCache", h.VERSION = "v0.2.0", h._getCache = function() {
        return {cache: e,index: f}
    }, h
}), define("dependencies", ["jquery", "jquery-ui/droppable", "jquery-ui/autocomplete", "jquery-ui/sortable", "jquery.cookie", "jquery.transit", "jquery.ui.touch", "bootstrap-js", "underscore", "backbone", "jquery.mousewheel", "flexText", "mousetrap", "markdown", "essage", "thenjs", "pdf", "moment", "webuploader", "pen", "store", "md5", "favico", "highlight", "bootstrap-datepicker", "sockjs", "rrule", "ichart", "dropins", "spider", "gta", "charts", "caretjs", "uaParser", "warehouse", "expireCache"], function() {
}), require(["dependencies"]);
