!function(e, t) {
    function n(e) {
        var t, n, r = O[e] = {};
        for (e = e.split(/\s+/), t = 0, n = e.length; n > t; t++)
            r[e[t]] = !0;
        return r
    }
    function r(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(q, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : H.isNumeric(r) ? +r : P.test(r) ? H.parseJSON(r) : r
                } catch (o) {
                }
                H.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function i(e) {
        for (var t in e)
            if (("data" !== t || !H.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function o(e, t, n) {
        var r = t + "defer", i = t + "queue", o = t + "mark", a = H._data(e, r);
        !a || "queue" !== n && H._data(e, i) || "mark" !== n && H._data(e, o) || setTimeout(function() {
            H._data(e, i) || H._data(e, o) || (H.removeData(e, r, !0), a.fire())
        }, 0)
    }
    function a() {
        return !1
    }
    function s() {
        return !0
    }
    function l(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function u(e, t, n) {
        if (t = t || 0, H.isFunction(t))
            return H.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
        if (t.nodeType)
            return H.grep(e, function(e) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var r = H.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ct.test(t))
                return H.filter(t, r, !n);
            t = H.filter(t, r)
        }
        return H.grep(e, function(e) {
            return H.inArray(e, t) >= 0 === n
        })
    }
    function c(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function f(e) {
        return H.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function d(e, t) {
        if (1 === t.nodeType && H.hasData(e)) {
            var n, r, i, o = H._data(e), a = H._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++)
                        H.event.add(t, n, s[n][r])
            }
            a.data && (a.data = H.extend({}, a.data))
        }
    }
    function p(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(H.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }
    function h(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function m(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }
    function g(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? m(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && H.grep(e.getElementsByTagName("input"), m)
    }
    function y(e) {
        var t = F.createElement("div");
        return At.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }
    function v(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight, i = "width" === t ? 1 : 0, o = 4;
        if (r > 0) {
            if ("border" !== n)
                for (; o > i; i += 2)
                    n || (r -= parseFloat(H.css(e, "padding" + Wt[i])) || 0), "margin" === n ? r += parseFloat(H.css(e, n + Wt[i])) || 0 : r -= parseFloat(H.css(e, "border" + Wt[i] + "Width")) || 0;
            return r + "px"
        }
        if (r = Lt(e, t), (0 > r || null == r) && (r = e.style[t]), Ot.test(r))
            return r;
        if (r = parseFloat(r) || 0, n)
            for (; o > i; i += 2)
                r += parseFloat(H.css(e, "padding" + Wt[i])) || 0, "padding" !== n && (r += parseFloat(H.css(e, "border" + Wt[i] + "Width")) || 0), "margin" === n && (r += parseFloat(H.css(e, n + Wt[i])) || 0);
        return r + "px"
    }
    function b(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t, t = "*"), H.isFunction(n))
                for (var r, i, o, a = t.toLowerCase().split(tn), s = 0, l = a.length; l > s; s++)
                    r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
        }
    }
    function x(e, n, r, i, o, a) {
        o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
        for (var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === an; c > u && (f || !s); u++)
            s = l[u](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = x(e, n, r, i, s, a)));
        return !f && s || a["*"] || (s = x(e, n, r, i, "*", a)), s
    }
    function T(e, n) {
        var r, i, o = H.ajaxSettings.flatOptions || {};
        for (r in n)
            n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && H.extend(!0, e, i)
    }
    function w(e, t, n, r) {
        if (H.isArray(t))
            H.each(t, function(t, i) {
                n || Xt.test(e) ? r(e, i) : w(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== H.type(t))
            r(e, t);
        else
            for (var i in t)
                w(e + "[" + i + "]", t[i], n, r)
    }
    function N(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes, c = e.responseFields;
        for (o in c)
            o in r && (n[c[o]] = r[o]);
        for (; "*" === u[0]; )
            u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (o in l)
                if (l[o] && l[o].test(i)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in r)
            a = u[0];
        else {
            for (o in r) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0
    }
    function C(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r, i, o, a, s, l, u, c, f = e.dataTypes, d = {}, p = f.length, h = f[0];
        for (r = 1; p > r; r++) {
            if (1 === r)
                for (i in e.converters)
                    "string" == typeof i && (d[i.toLowerCase()] = e.converters[i]);
            if (a = h, h = f[r], "*" === h)
                h = a;
            else if ("*" !== a && a !== h) {
                if (s = a + " " + h, l = d[s] || d["* " + h], !l) {
                    c = t;
                    for (u in d)
                        if (o = u.split(" "), (o[0] === a || "*" === o[0]) && (c = d[o[1] + " " + h])) {
                            u = d[u], u === !0 ? l = c : c === !0 && (l = u);
                            break
                        }
                }
                l || c || H.error("No conversion from " + s.replace(" ", " to ")), l !== !0 && (n = l ? l(n) : c(u(n)))
            }
        }
        return n
    }
    function E() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }
    function k() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }
    function S() {
        return setTimeout(A, 0), vn = H.now()
    }
    function A() {
        vn = t
    }
    function L(e, t) {
        var n = {};
        return H.each(wn.concat.apply([], wn.slice(0, t)), function() {
            n[this] = e
        }), n
    }
    function D(e) {
        if (!bn[e]) {
            var t = F.body, n = H("<" + e + ">").appendTo(t), r = n.css("display");
            n.remove(), ("none" === r || "" === r) && (mn || (mn = F.createElement("iframe"), mn.frameBorder = mn.width = mn.height = 0), t.appendChild(mn), gn && mn.createElement || (gn = (mn.contentWindow || mn.contentDocument).document, gn.write((H.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), gn.close()), n = gn.createElement(e), gn.body.appendChild(n), r = H.css(n, "display"), t.removeChild(mn)), bn[e] = r
        }
        return bn[e]
    }
    function j(e) {
        return H.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var F = e.document, M = e.navigator, _ = e.location, H = function() {
        function n() {
            if (!s.isReady) {
                try {
                    F.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(n, 1)
                }
                s.ready()
            }
        }
        var r, i, o, a, s = function(e, t) {
            return new s.fn.init(e, t, r)
        }, l = e.jQuery, u = e.$, c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, f = /\S/, d = /^\s+/, p = /\s+$/, h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, m = /^[\],:{}\s]*$/, g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, v = /(?:^|:|,)(?:\s*\[)+/g, b = /(webkit)[ \/]([\w.]+)/, x = /(opera)(?:.*version)?[ \/]([\w.]+)/, T = /(msie) ([\w.]+)/, w = /(mozilla)(?:.*? rv:([\w.]+))?/, N = /-([a-z]|[0-9])/gi, C = /^-ms-/, E = function(e, t) {
            return (t + "").toUpperCase()
        }, k = M.userAgent, S = Object.prototype.toString, A = Object.prototype.hasOwnProperty, L = Array.prototype.push, D = Array.prototype.slice, j = String.prototype.trim, _ = Array.prototype.indexOf, H = {};
        return s.fn = s.prototype = {constructor: s,init: function(e, n, r) {
            var i, o, a, l;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e, this.length = 1, this;
            if ("body" === e && !n && F.body)
                return this.context = F, this[0] = F.body, this.selector = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : c.exec(e), !i || !i[1] && n)
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1])
                    return n = n instanceof s ? n[0] : n, l = n ? n.ownerDocument || n : F, a = h.exec(e), a ? s.isPlainObject(n) ? (e = [F.createElement(a[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(a[1])] : (a = s.buildFragment([i[1]], [l]), e = (a.cacheable ? s.clone(a.fragment) : a.fragment).childNodes), s.merge(this, e);
                if (o = F.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])
                        return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = F, this.selector = e, this
            }
            return s.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
        },selector: "",jquery: "1.7.2",length: 0,size: function() {
            return this.length
        },toArray: function() {
            return D.call(this, 0)
        },get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },pushStack: function(e, t, n) {
            var r = this.constructor();
            return s.isArray(e) ? L.apply(r, e) : s.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },each: function(e, t) {
            return s.each(this, e, t)
        },ready: function(e) {
            return s.bindReady(), o.add(e), this
        },eq: function(e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },slice: function() {
            return this.pushStack(D.apply(this, arguments), "slice", D.call(arguments).join(","))
        },map: function(e) {
            return this.pushStack(s.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: L,sort: [].sort,splice: [].splice}, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function() {
            var e, n, r, i, o, a, l = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
            for ("boolean" == typeof l && (f = l, l = arguments[1] || {}, u = 2), "object" == typeof l || s.isFunction(l) || (l = {}), c === u && (l = this, --u); c > u; u++)
                if (null != (e = arguments[u]))
                    for (n in e)
                        r = l[n], i = e[n], l !== i && (f && i && (s.isPlainObject(i) || (o = s.isArray(i))) ? (o ? (o = !1, a = r && s.isArray(r) ? r : []) : a = r && s.isPlainObject(r) ? r : {}, l[n] = s.extend(f, a, i)) : i !== t && (l[n] = i));
            return l
        }, s.extend({noConflict: function(t) {
            return e.$ === s && (e.$ = u), t && e.jQuery === s && (e.jQuery = l), s
        },isReady: !1,readyWait: 1,holdReady: function(e) {
            e ? s.readyWait++ : s.ready(!0)
        },ready: function(e) {
            if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                if (!F.body)
                    return setTimeout(s.ready, 1);
                if (s.isReady = !0, e !== !0 && --s.readyWait > 0)
                    return;
                o.fireWith(F, [s]), s.fn.trigger && s(F).trigger("ready").off("ready")
            }
        },bindReady: function() {
            if (!o) {
                if (o = s.Callbacks("once memory"), "complete" === F.readyState)
                    return setTimeout(s.ready, 1);
                if (F.addEventListener)
                    F.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", s.ready, !1);
                else if (F.attachEvent) {
                    F.attachEvent("onreadystatechange", a), e.attachEvent("onload", s.ready);
                    var t = !1;
                    try {
                        t = null == e.frameElement
                    } catch (r) {
                    }
                    F.documentElement.doScroll && t && n()
                }
            }
        },isFunction: function(e) {
            return "function" === s.type(e)
        },isArray: Array.isArray || function(e) {
            return "array" === s.type(e)
        },isWindow: function(e) {
            return null != e && e == e.window
        },isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },type: function(e) {
            return null == e ? String(e) : H[S.call(e)] || "object"
        },isPlainObject: function(e) {
            if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e))
                return !1;
            try {
                if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e)
                ;
            return r === t || A.call(e, r)
        },isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },error: function(e) {
            throw new Error(e)
        },parseJSON: function(t) {
            return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : m.test(t.replace(g, "@").replace(y, "]").replace(v, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
        },parseXML: function(n) {
            if ("string" != typeof n || !n)
                return null;
            var r, i;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || s.error("Invalid XML: " + n), r
        },noop: function() {
        },globalEval: function(t) {
            t && f.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },camelCase: function(e) {
            return e.replace(C, "ms-").replace(N, E)
        },nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
        },each: function(e, n, r) {
            var i, o = 0, a = e.length, l = a === t || s.isFunction(e);
            if (r)
                if (l) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1)
                            break
                } else
                    for (; a > o && n.apply(e[o++], r) !== !1; )
                        ;
            else if (l) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1)
                        break
            } else
                for (; a > o && n.call(e[o], o, e[o++]) !== !1; )
                    ;
            return e
        },trim: j ? function(e) {
            return null == e ? "" : j.call(e)
        } : function(e) {
            return null == e ? "" : e.toString().replace(d, "").replace(p, "")
        },makeArray: function(e, t) {
            var n = t || [];
            if (null != e) {
                var r = s.type(e);
                null == e.length || "string" === r || "function" === r || "regexp" === r || s.isWindow(e) ? L.call(n, e) : s.merge(n, e)
            }
            return n
        },inArray: function(e, t, n) {
            var r;
            if (t) {
                if (_)
                    return _.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },merge: function(e, n) {
            var r = e.length, i = 0;
            if ("number" == typeof n.length)
                for (var o = n.length; o > i; i++)
                    e[r++] = n[i];
            else
                for (; n[i] !== t; )
                    e[r++] = n[i++];
            return e.length = r, e
        },grep: function(e, t, n) {
            var r, i = [];
            n = !!n;
            for (var o = 0, a = e.length; a > o; o++)
                r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },map: function(e, n, r) {
            var i, o, a = [], l = 0, u = e.length, c = e instanceof s || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || s.isArray(e));
            if (c)
                for (; u > l; l++)
                    i = n(e[l], l, r), null != i && (a[a.length] = i);
            else
                for (o in e)
                    i = n(e[o], o, r), null != i && (a[a.length] = i);
            return a.concat.apply([], a)
        },guid: 1,proxy: function(e, n) {
            if ("string" == typeof n) {
                var r = e[n];
                n = e, e = r
            }
            if (!s.isFunction(e))
                return t;
            var i = D.call(arguments, 2), o = function() {
                return e.apply(n, i.concat(D.call(arguments)))
            };
            return o.guid = e.guid = e.guid || o.guid || s.guid++, o
        },access: function(e, n, r, i, o, a, l) {
            var u, c = null == r, f = 0, d = e.length;
            if (r && "object" == typeof r) {
                for (f in r)
                    s.access(e, n, f, r[f], 1, a, i);
                o = 1
            } else if (i !== t) {
                if (u = l === t && s.isFunction(i), c && (u ? (u = n, n = function(e, t, n) {
                    return u.call(s(e), n)
                }) : (n.call(e, i), n = null)), n)
                    for (; d > f; f++)
                        n(e[f], r, u ? i.call(e[f], f, n(e[f], r)) : i, l);
                o = 1
            }
            return o ? e : c ? n.call(e) : d ? n(e[0], r) : a
        },now: function() {
            return (new Date).getTime()
        },uaMatch: function(e) {
            e = e.toLowerCase();
            var t = b.exec(e) || x.exec(e) || T.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
            return {browser: t[1] || "",version: t[2] || "0"}
        },sub: function() {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
                return r && r instanceof s && !(r instanceof e) && (r = e(r)), s.fn.init.call(this, n, r, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(F);
            return e
        },browser: {}}), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            H["[object " + t + "]"] = t.toLowerCase()
        }), i = s.uaMatch(k), i.browser && (s.browser[i.browser] = !0, s.browser.version = i.version), s.browser.webkit && (s.browser.safari = !0), f.test("聽") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), r = s(F), F.addEventListener ? a = function() {
            F.removeEventListener("DOMContentLoaded", a, !1), s.ready()
        } : F.attachEvent && (a = function() {
            "complete" === F.readyState && (F.detachEvent("onreadystatechange", a), s.ready())
        }), s
    }(), O = {};
    H.Callbacks = function(e) {
        e = e ? O[e] || n(e) : {};
        var r, i, o, a, s, l, u = [], c = [], f = function(t) {
            var n, r, i, o;
            for (n = 0, r = t.length; r > n; n++)
                i = t[n], o = H.type(i), "array" === o ? f(i) : "function" === o && (e.unique && p.has(i) || u.push(i))
        }, d = function(t, n) {
            for (n = n || [], r = !e.memory || [t, n], i = !0, o = !0, l = a || 0, a = 0, s = u.length; u && s > l; l++)
                if (u[l].apply(t, n) === !1 && e.stopOnFalse) {
                    r = !0;
                    break
                }
            o = !1, u && (e.once ? r === !0 ? p.disable() : u = [] : c && c.length && (r = c.shift(), p.fireWith(r[0], r[1])))
        }, p = {add: function() {
            if (u) {
                var e = u.length;
                f(arguments), o ? s = u.length : r && r !== !0 && (a = e, d(r[0], r[1]))
            }
            return this
        },remove: function() {
            if (u)
                for (var t = arguments, n = 0, r = t.length; r > n; n++)
                    for (var i = 0; i < u.length && (t[n] !== u[i] || (o && s >= i && (s--, l >= i && l--), u.splice(i--, 1), !e.unique)); i++)
                        ;
            return this
        },has: function(e) {
            if (u)
                for (var t = 0, n = u.length; n > t; t++)
                    if (e === u[t])
                        return !0;
            return !1
        },empty: function() {
            return u = [], this
        },disable: function() {
            return u = c = r = t, this
        },disabled: function() {
            return !u
        },lock: function() {
            return c = t, r && r !== !0 || p.disable(), this
        },locked: function() {
            return !c
        },fireWith: function(t, n) {
            return c && (o ? e.once || c.push([t, n]) : e.once && r || d(t, n)), this
        },fire: function() {
            return p.fireWith(this, arguments), this
        },fired: function() {
            return !!i
        }};
        return p
    };
    var B = [].slice;
    H.extend({Deferred: function(e) {
        var t, n = H.Callbacks("once memory"), r = H.Callbacks("once memory"), i = H.Callbacks("memory"), o = "pending", a = {resolve: n,reject: r,notify: i}, s = {done: n.add,fail: r.add,progress: i.add,state: function() {
            return o
        },isResolved: n.fired,isRejected: r.fired,then: function(e, t, n) {
            return l.done(e).fail(t).progress(n), this
        },always: function() {
            return l.done.apply(l, arguments).fail.apply(l, arguments), this
        },pipe: function(e, t, n) {
            return H.Deferred(function(r) {
                H.each({done: [e, "resolve"],fail: [t, "reject"],progress: [n, "notify"]}, function(e, t) {
                    var n, i = t[0], o = t[1];
                    l[e](H.isFunction(i) ? function() {
                        n = i.apply(this, arguments), n && H.isFunction(n.promise) ? n.promise().then(r.resolve, r.reject, r.notify) : r[o + "With"](this === l ? r : this, [n])
                    } : r[o])
                })
            }).promise()
        },promise: function(e) {
            if (null == e)
                e = s;
            else
                for (var t in s)
                    e[t] = s[t];
            return e
        }}, l = s.promise({});
        for (t in a)
            l[t] = a[t].fire, l[t + "With"] = a[t].fireWith;
        return l.done(function() {
            o = "resolved"
        }, r.disable, i.lock).fail(function() {
            o = "rejected"
        }, n.disable, i.lock), e && e.call(l, l), l
    },when: function(e) {
        function t(e) {
            return function(t) {
                r[e] = arguments.length > 1 ? B.call(arguments, 0) : t, --s || l.resolveWith(l, r)
            }
        }
        function n(e) {
            return function(t) {
                a[e] = arguments.length > 1 ? B.call(arguments, 0) : t, l.notifyWith(u, a)
            }
        }
        var r = B.call(arguments, 0), i = 0, o = r.length, a = new Array(o), s = o, l = 1 >= o && e && H.isFunction(e.promise) ? e : H.Deferred(), u = l.promise();
        if (o > 1) {
            for (; o > i; i++)
                r[i] && r[i].promise && H.isFunction(r[i].promise) ? r[i].promise().then(t(i), l.reject, n(i)) : --s;
            s || l.resolveWith(l, r)
        } else
            l !== e && l.resolveWith(l, o ? [e] : []);
        return u
    }}), H.support = function() {
        {
            var t, n, r, i, o, a, s, l, u, c, f, d = F.createElement("div");
            F.documentElement
        }
        if (d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !n.length || !r)
            return {};
        i = F.createElement("select"), o = i.appendChild(F.createElement("option")), a = d.getElementsByTagName("input")[0], t = {leadingWhitespace: 3 === d.firstChild.nodeType,tbody: !d.getElementsByTagName("tbody").length,htmlSerialize: !!d.getElementsByTagName("link").length,style: /top/.test(r.getAttribute("style")),hrefNormalized: "/a" === r.getAttribute("href"),opacity: /^0.55/.test(r.style.opacity),cssFloat: !!r.style.cssFloat,checkOn: "on" === a.value,optSelected: o.selected,getSetAttribute: "t" !== d.className,enctype: !!F.createElement("form").enctype,html5Clone: "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML,submitBubbles: !0,changeBubbles: !0,focusinBubbles: !1,deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0,pixelMargin: !0}, H.boxModel = t.boxModel = "CSS1Compat" === F.compatMode, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete d.test
        } catch (p) {
            t.deleteExpando = !1
        }
        if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).fireEvent("onclick")), a = F.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), s = F.createDocumentFragment(), s.appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent)
            for (c in {submit: 1,change: 1,focusin: 1})
                u = "on" + c, f = u in d, f || (d.setAttribute(u, "return;"), f = "function" == typeof d[u]), t[c + "Bubbles"] = f;
        return s.removeChild(d), s = i = o = d = a = null, H(function() {
            var n, r, i, o, a, s, u, c, p, h, m, g, y = F.getElementsByTagName("body")[0];
            y && (u = 1, g = "padding:0;margin:0;border:", h = "position:absolute;top:0;left:0;width:1px;height:1px;", m = g + "0;visibility:hidden;", c = "style='" + h + g + "5px solid #000;", p = "<div " + c + "display:block;'><div style='" + g + "0;display:block;overflow:hidden;'></div></div><table " + c + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", n = F.createElement("div"), n.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + u + "px", y.insertBefore(n, y.firstChild), d = F.createElement("div"), n.appendChild(d), d.innerHTML = "<table><tr><td style='" + g + "0;display:none'></td><td>t</td></tr></table>", l = d.getElementsByTagName("td"), f = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", t.reliableHiddenOffsets = f && 0 === l[0].offsetHeight, e.getComputedStyle && (d.innerHTML = "", s = F.createElement("div"), s.style.width = "0", s.style.marginRight = "0", d.style.width = "2px", d.appendChild(s), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(s, null) || {marginRight: 0}).marginRight, 10) || 0)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.width = d.style.padding = "1px", d.style.border = 0, d.style.overflow = "hidden", d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = 3 !== d.offsetWidth), d.style.cssText = h + m, d.innerHTML = p, r = d.firstChild, i = r.firstChild, o = r.nextSibling.firstChild.firstChild, a = {doesNotAddBorder: 5 !== i.offsetTop,doesAddBorderForTableAndCells: 5 === o.offsetTop}, i.style.position = "fixed", i.style.top = "20px", a.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop, i.style.position = i.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", a.subtractsBorderForOverflowNotVisible = -5 === i.offsetTop, a.doesNotIncludeMarginInBodyOffset = y.offsetTop !== u, e.getComputedStyle && (d.style.marginTop = "1%", t.pixelMargin = "1%" !== (e.getComputedStyle(d, null) || {marginTop: 0}).marginTop), "undefined" != typeof n.style.zoom && (n.style.zoom = 1), y.removeChild(n), s = d = n = null, H.extend(t, a))
        }), t
    }();
    var P = /^(?:\{.*\}|\[.*\])$/, q = /([A-Z])/g;
    H.extend({cache: {},uuid: 0,expando: "jQuery" + (H.fn.jquery + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(e) {
        return e = e.nodeType ? H.cache[e[H.expando]] : e[H.expando], !!e && !i(e)
    },data: function(e, n, r, i) {
        if (H.acceptData(e)) {
            var o, a, s, l = H.expando, u = "string" == typeof n, c = e.nodeType, f = c ? H.cache : e, d = c ? e[l] : e[l] && l, p = "events" === n;
            if (d && f[d] && (p || i || f[d].data) || !u || r !== t)
                return d || (c ? e[l] = d = ++H.uuid : d = l), f[d] || (f[d] = {}, c || (f[d].toJSON = H.noop)), ("object" == typeof n || "function" == typeof n) && (i ? f[d] = H.extend(f[d], n) : f[d].data = H.extend(f[d].data, n)), o = a = f[d], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[H.camelCase(n)] = r), p && !a[n] ? o.events : (u ? (s = a[n], null == s && (s = a[H.camelCase(n)])) : s = a, s)
        }
    },removeData: function(e, t, n) {
        if (H.acceptData(e)) {
            var r, o, a, s = H.expando, l = e.nodeType, u = l ? H.cache : e, c = l ? e[s] : s;
            if (u[c]) {
                if (t && (r = n ? u[c] : u[c].data)) {
                    H.isArray(t) || (t in r ? t = [t] : (t = H.camelCase(t), t = t in r ? [t] : t.split(" ")));
                    for (o = 0, a = t.length; a > o; o++)
                        delete r[t[o]];
                    if (!(n ? i : H.isEmptyObject)(r))
                        return
                }
                (n || (delete u[c].data, i(u[c]))) && (H.support.deleteExpando || !u.setInterval ? delete u[c] : u[c] = null, l && (H.support.deleteExpando ? delete e[s] : e.removeAttribute ? e.removeAttribute(s) : e[s] = null))
            }
        }
    },_data: function(e, t, n) {
        return H.data(e, t, n, !0)
    },acceptData: function(e) {
        if (e.nodeName) {
            var t = H.noData[e.nodeName.toLowerCase()];
            if (t)
                return !(t === !0 || e.getAttribute("classid") !== t)
        }
        return !0
    }}), H.fn.extend({data: function(e, n) {
        var i, o, a, s, l, u = this[0], c = 0, f = null;
        if (e === t) {
            if (this.length && (f = H.data(u), 1 === u.nodeType && !H._data(u, "parsedAttrs"))) {
                for (a = u.attributes, l = a.length; l > c; c++)
                    s = a[c].name, 0 === s.indexOf("data-") && (s = H.camelCase(s.substring(5)), r(u, s, f[s]));
                H._data(u, "parsedAttrs", !0)
            }
            return f
        }
        return "object" == typeof e ? this.each(function() {
            H.data(this, e)
        }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", H.access(this, function(n) {
            return n === t ? (f = this.triggerHandler("getData" + o, [i[0]]), f === t && u && (f = H.data(u, e), f = r(u, e, f)), f === t && i[1] ? this.data(i[0]) : f) : (i[1] = n, void this.each(function() {
                var t = H(this);
                t.triggerHandler("setData" + o, i), H.data(this, e, n), t.triggerHandler("changeData" + o, i)
            }))
        }, null, n, arguments.length > 1, null, !1))
    },removeData: function(e) {
        return this.each(function() {
            H.removeData(this, e)
        })
    }}), H.extend({_mark: function(e, t) {
        e && (t = (t || "fx") + "mark", H._data(e, t, (H._data(e, t) || 0) + 1))
    },_unmark: function(e, t, n) {
        if (e !== !0 && (n = t, t = e, e = !1), t) {
            n = n || "fx";
            var r = n + "mark", i = e ? 0 : (H._data(t, r) || 1) - 1;
            i ? H._data(t, r, i) : (H.removeData(t, r, !0), o(t, n, "mark"))
        }
    },queue: function(e, t, n) {
        var r;
        return e ? (t = (t || "fx") + "queue", r = H._data(e, t), n && (!r || H.isArray(n) ? r = H._data(e, t, H.makeArray(n)) : r.push(n)), r || []) : void 0
    },dequeue: function(e, t) {
        t = t || "fx";
        var n = H.queue(e, t), r = n.shift(), i = {};
        "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), H._data(e, t + ".run", i), r.call(e, function() {
            H.dequeue(e, t)
        }, i)), n.length || (H.removeData(e, t + "queue " + t + ".run", !0), o(e, t, "queue"))
    }}), H.fn.extend({queue: function(e, n) {
        var r = 2;
        return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? H.queue(this[0], e) : n === t ? this : this.each(function() {
            var t = H.queue(this, e, n);
            "fx" === e && "inprogress" !== t[0] && H.dequeue(this, e)
        })
    },dequeue: function(e) {
        return this.each(function() {
            H.dequeue(this, e)
        })
    },delay: function(e, t) {
        return e = H.fx ? H.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    },clearQueue: function(e) {
        return this.queue(e || "fx", [])
    },promise: function(e, n) {
        function r() {
            --l || o.resolveWith(a, [a])
        }
        "string" != typeof e && (n = e, e = t), e = e || "fx";
        for (var i, o = H.Deferred(), a = this, s = a.length, l = 1, u = e + "defer", c = e + "queue", f = e + "mark"; s--; )
            (i = H.data(a[s], u, t, !0) || (H.data(a[s], c, t, !0) || H.data(a[s], f, t, !0)) && H.data(a[s], u, H.Callbacks("once memory"), !0)) && (l++, i.add(r));
        return r(), o.promise(n)
    }});
    var W, I, $, R = /[\n\t\r]/g, X = /\s+/, z = /\r/g, V = /^(?:button|input)$/i, U = /^(?:button|input|object|select|textarea)$/i, G = /^a(?:rea)?$/i, Y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, J = H.support.getSetAttribute;
    H.fn.extend({attr: function(e, t) {
        return H.access(this, H.attr, e, t, arguments.length > 1)
    },removeAttr: function(e) {
        return this.each(function() {
            H.removeAttr(this, e)
        })
    },prop: function(e, t) {
        return H.access(this, H.prop, e, t, arguments.length > 1)
    },removeProp: function(e) {
        return e = H.propFix[e] || e, this.each(function() {
            try {
                this[e] = t, delete this[e]
            } catch (n) {
            }
        })
    },addClass: function(e) {
        var t, n, r, i, o, a, s;
        if (H.isFunction(e))
            return this.each(function(t) {
                H(this).addClass(e.call(this, t, this.className))
            });
        if (e && "string" == typeof e)
            for (t = e.split(X), n = 0, r = this.length; r > n; n++)
                if (i = this[n], 1 === i.nodeType)
                    if (i.className || 1 !== t.length) {
                        for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++)
                            ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                        i.className = H.trim(o)
                    } else
                        i.className = e;
        return this
    },removeClass: function(e) {
        var n, r, i, o, a, s, l;
        if (H.isFunction(e))
            return this.each(function(t) {
                H(this).removeClass(e.call(this, t, this.className))
            });
        if (e && "string" == typeof e || e === t)
            for (n = (e || "").split(X), r = 0, i = this.length; i > r; r++)
                if (o = this[r], 1 === o.nodeType && o.className)
                    if (e) {
                        for (a = (" " + o.className + " ").replace(R, " "), s = 0, l = n.length; l > s; s++)
                            a = a.replace(" " + n[s] + " ", " ");
                        o.className = H.trim(a)
                    } else
                        o.className = "";
        return this
    },toggleClass: function(e, t) {
        var n = typeof e, r = "boolean" == typeof t;
        return this.each(H.isFunction(e) ? function(n) {
            H(this).toggleClass(e.call(this, n, this.className, t), t)
        } : function() {
            if ("string" === n)
                for (var i, o = 0, a = H(this), s = t, l = e.split(X); i = l[o++]; )
                    s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
            else
                ("undefined" === n || "boolean" === n) && (this.className && H._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : H._data(this, "__className__") || "")
        })
    },hasClass: function(e) {
        for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
            if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1)
                return !0;
        return !1
    },val: function(e) {
        var n, r, i, o = this[0];
        {
            if (arguments.length)
                return i = H.isFunction(e), this.each(function(r) {
                    var o, a = H(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : H.isArray(o) && (o = H.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), n = H.valHooks[this.type] || H.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
            if (o)
                return n = H.valHooks[o.type] || H.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(z, "") : null == r ? "" : r)
        }
    }}), H.extend({valHooks: {option: {get: function(e) {
        var t = e.attributes.value;
        return !t || t.specified ? e.value : e.text
    }},select: {get: function(e) {
        var t, n, r, i, o = e.selectedIndex, a = [], s = e.options, l = "select-one" === e.type;
        if (0 > o)
            return null;
        for (n = l ? o : 0, r = l ? o + 1 : s.length; r > n; n++)
            if (i = s[n], !(!i.selected || (H.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && H.nodeName(i.parentNode, "optgroup"))) {
                if (t = H(i).val(), l)
                    return t;
                a.push(t)
            }
        return l && !a.length && s.length ? H(s[o]).val() : a
    },set: function(e, t) {
        var n = H.makeArray(t);
        return H(e).find("option").each(function() {
            this.selected = H.inArray(H(this).val(), n) >= 0
        }), n.length || (e.selectedIndex = -1), n
    }}},attrFn: {val: !0,css: !0,html: !0,text: !0,data: !0,width: !0,height: !0,offset: !0},attr: function(e, n, r, i) {
        var o, a, s, l = e.nodeType;
        if (e && 3 !== l && 8 !== l && 2 !== l)
            return i && n in H.attrFn ? H(e)[n](r) : "undefined" == typeof e.getAttribute ? H.prop(e, n, r) : (s = 1 !== l || !H.isXMLDoc(e), s && (n = n.toLowerCase(), a = H.attrHooks[n] || (Y.test(n) ? I : W)), r !== t ? null === r ? void H.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
    },removeAttr: function(e, t) {
        var n, r, i, o, a, s = 0;
        if (t && 1 === e.nodeType)
            for (r = t.toLowerCase().split(X), o = r.length; o > s; s++)
                i = r[s], i && (n = H.propFix[i] || i, a = Y.test(i), a || H.attr(e, i, ""), e.removeAttribute(J ? i : n), a && n in e && (e[n] = !1))
    },attrHooks: {type: {set: function(e, t) {
        if (V.test(e.nodeName) && e.parentNode)
            H.error("type property can't be changed");
        else if (!H.support.radioValue && "radio" === t && H.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
        }
    }},value: {get: function(e, t) {
        return W && H.nodeName(e, "button") ? W.get(e, t) : t in e ? e.value : null
    },set: function(e, t, n) {
        return W && H.nodeName(e, "button") ? W.set(e, t, n) : void (e.value = t)
    }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(e, n, r) {
        var i, o, a, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
            return a = 1 !== s || !H.isXMLDoc(e), a && (n = H.propFix[n] || n, o = H.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
    },propHooks: {tabIndex: {get: function(e) {
        var n = e.getAttributeNode("tabindex");
        return n && n.specified ? parseInt(n.value, 10) : U.test(e.nodeName) || G.test(e.nodeName) && e.href ? 0 : t
    }}}}), H.attrHooks.tabindex = H.propHooks.tabIndex, I = {get: function(e, n) {
        var r, i = H.prop(e, n);
        return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
    },set: function(e, t, n) {
        var r;
        return t === !1 ? H.removeAttr(e, n) : (r = H.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
    }}, J || ($ = {name: !0,id: !0,coords: !0}, W = H.valHooks.button = {get: function(e, n) {
        var r;
        return r = e.getAttributeNode(n), r && ($[n] ? "" !== r.nodeValue : r.specified) ? r.nodeValue : t
    },set: function(e, t, n) {
        var r = e.getAttributeNode(n);
        return r || (r = F.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
    }}, H.attrHooks.tabindex.set = W.set, H.each(["width", "height"], function(e, t) {
        H.attrHooks[t] = H.extend(H.attrHooks[t], {set: function(e, n) {
            return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
        }})
    }), H.attrHooks.contenteditable = {get: W.get,set: function(e, t, n) {
        "" === t && (t = "false"), W.set(e, t, n)
    }}), H.support.hrefNormalized || H.each(["href", "src", "width", "height"], function(e, n) {
        H.attrHooks[n] = H.extend(H.attrHooks[n], {get: function(e) {
            var r = e.getAttribute(n, 2);
            return null === r ? t : r
        }})
    }), H.support.style || (H.attrHooks.style = {get: function(e) {
        return e.style.cssText.toLowerCase() || t
    },set: function(e, t) {
        return e.style.cssText = "" + t
    }}), H.support.optSelected || (H.propHooks.selected = H.extend(H.propHooks.selected, {get: function(e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }})), H.support.enctype || (H.propFix.enctype = "encoding"), H.support.checkOn || H.each(["radio", "checkbox"], function() {
        H.valHooks[this] = {get: function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }}
    }), H.each(["radio", "checkbox"], function() {
        H.valHooks[this] = H.extend(H.valHooks[this], {set: function(e, t) {
            return H.isArray(t) ? e.checked = H.inArray(H(e).val(), t) >= 0 : void 0
        }})
    });
    var Q = /^(?:textarea|input|select)$/i, K = /^([^\.]*)?(?:\.(.+))?$/, Z = /(?:^|\s)hover(\.\S+)?\b/, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, it = function(e) {
        var t = rt.exec(e);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
    }, ot = function(e, t) {
        var n = e.attributes || {};
        return !(t[1] && e.nodeName.toLowerCase() !== t[1] || t[2] && (n.id || {}).value !== t[2] || t[3] && !t[3].test((n["class"] || {}).value))
    }, at = function(e) {
        return H.event.special.hover ? e : e.replace(Z, "mouseenter$1 mouseleave$1")
    };
    H.event = {add: function(e, n, r, i, o) {
        var a, s, l, u, c, f, d, p, h, m, g;
        if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = H._data(e))) {
            for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = H.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function(e) {
                return "undefined" == typeof H || e && H.event.triggered === e.type ? t : H.event.dispatch.apply(s.elem, arguments)
            }, s.elem = e), n = H.trim(at(n)).split(" "), u = 0; u < n.length; u++)
                c = K.exec(n[u]) || [], f = c[1], d = (c[2] || "").split(".").sort(), g = H.event.special[f] || {}, f = (o ? g.delegateType : g.bindType) || f, g = H.event.special[f] || {}, p = H.extend({type: f,origType: c[1],data: i,handler: r,guid: r.guid,selector: o,quick: o && it(o),namespace: d.join(".")}, h), m = l[f], m || (m = l[f] = [], m.delegateCount = 0, g.setup && g.setup.call(e, i, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), H.event.global[f] = !0;
            e = null
        }
    },global: {},remove: function(e, t, n, r, i) {
        var o, a, s, l, u, c, f, d, p, h, m, g, y = H.hasData(e) && H._data(e);
        if (y && (d = y.events)) {
            for (t = H.trim(at(t || "")).split(" "), o = 0; o < t.length; o++)
                if (a = K.exec(t[o]) || [], s = l = a[1], u = a[2], s) {
                    for (p = H.event.special[s] || {}, s = (r ? p.delegateType : p.bindType) || s, m = d[s] || [], c = m.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = 0; f < m.length; f++)
                        g = m[f], !i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (m.splice(f--, 1), g.selector && m.delegateCount--, p.remove && p.remove.call(e, g));
                    0 === m.length && c !== m.length && (p.teardown && p.teardown.call(e, u) !== !1 || H.removeEvent(e, s, y.handle), delete d[s])
                } else
                    for (s in d)
                        H.event.remove(e, s + t[o], n, r, !0);
            H.isEmptyObject(d) && (h = y.handle, h && (h.elem = null), H.removeData(e, ["events", "handle"], !0))
        }
    },customEvent: {getData: !0,setData: !0,changeData: !0},trigger: function(n, r, i, o) {
        if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
            var a, s, l, u, c, f, d, p, h, m, g = n.type || n, y = [];
            if (!nt.test(g + H.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (y = g.split("."), g = y.shift(), y.sort()), i && !H.event.customEvent[g] || H.event.global[g]))
                if (n = "object" == typeof n ? n[H.expando] ? n : new H.Event(g, n) : new H.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = g.indexOf(":") < 0 ? "on" + g : "", i) {
                    if (n.result = t, n.target || (n.target = i), r = null != r ? H.makeArray(r) : [], r.unshift(n), d = H.event.special[g] || {}, !d.trigger || d.trigger.apply(i, r) !== !1) {
                        if (h = [[i, d.bindType || g]], !o && !d.noBubble && !H.isWindow(i)) {
                            for (m = d.delegateType || g, u = nt.test(m + g) ? i : i.parentNode, c = null; u; u = u.parentNode)
                                h.push([u, m]), c = u;
                            c && c === i.ownerDocument && h.push([c.defaultView || c.parentWindow || e, m])
                        }
                        for (l = 0; l < h.length && !n.isPropagationStopped(); l++)
                            u = h[l][0], n.type = h[l][1], p = (H._data(u, "events") || {})[n.type] && H._data(u, "handle"), p && p.apply(u, r), p = f && u[f], p && H.acceptData(u) && p.apply(u, r) === !1 && n.preventDefault();
                        return n.type = g, o || n.isDefaultPrevented() || d._default && d._default.apply(i.ownerDocument, r) !== !1 || "click" === g && H.nodeName(i, "a") || !H.acceptData(i) || f && i[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !H.isWindow(i) && (c = i[f], c && (i[f] = null), H.event.triggered = g, i[g](), H.event.triggered = t, c && (i[f] = c)), n.result
                    }
                } else {
                    a = H.cache;
                    for (l in a)
                        a[l].events && a[l].events[g] && H.event.trigger(n, r, a[l].handle.elem, !0)
                }
        }
    },dispatch: function(n) {
        n = H.event.fix(n || e.event);
        var r, i, o, a, s, l, u, c, f, d, p = (H._data(this, "events") || {})[n.type] || [], h = p.delegateCount, m = [].slice.call(arguments, 0), g = !n.exclusive && !n.namespace, y = H.event.special[n.type] || {}, v = [];
        if (m[0] = n, n.delegateTarget = this, !y.preDispatch || y.preDispatch.call(this, n) !== !1) {
            if (h && (!n.button || "click" !== n.type))
                for (a = H(this), a.context = this.ownerDocument || this, o = n.target; o != this; o = o.parentNode || this)
                    if (o.disabled !== !0) {
                        for (l = {}, c = [], a[0] = o, r = 0; h > r; r++)
                            f = p[r], d = f.selector, l[d] === t && (l[d] = f.quick ? ot(o, f.quick) : a.is(d)), l[d] && c.push(f);
                        c.length && v.push({elem: o,matches: c})
                    }
            for (p.length > h && v.push({elem: this,matches: p.slice(h)}), r = 0; r < v.length && !n.isPropagationStopped(); r++)
                for (u = v[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++)
                    f = u.matches[i], (g || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace)) && (n.data = f.data, n.handleObj = f, s = ((H.event.special[f.origType] || {}).handle || f.handler).apply(u.elem, m), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
            return y.postDispatch && y.postDispatch.call(this, n), n.result
        }
    },props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
        var r, i, o, a = n.button, s = n.fromElement;
        return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || F, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
    }},fix: function(e) {
        if (e[H.expando])
            return e;
        var n, r, i = e, o = H.event.fixHooks[e.type] || {}, a = o.props ? this.props.concat(o.props) : this.props;
        for (e = H.Event(i), n = a.length; n; )
            r = a[--n], e[r] = i[r];
        return e.target || (e.target = i.srcElement || F), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, i) : e
    },special: {ready: {setup: H.bindReady},load: {noBubble: !0},focus: {delegateType: "focusin"},blur: {delegateType: "focusout"},beforeunload: {setup: function(e, t, n) {
        H.isWindow(this) && (this.onbeforeunload = n)
    },teardown: function(e, t) {
        this.onbeforeunload === t && (this.onbeforeunload = null)
    }}},simulate: function(e, t, n, r) {
        var i = H.extend(new H.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
        r ? H.event.trigger(i, null, t) : H.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }}, H.event.handle = H.event.dispatch, H.removeEvent = F.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, H.Event = function(e, t) {
        return this instanceof H.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : a) : this.type = e, t && H.extend(this, t), this.timeStamp = e && e.timeStamp || H.now(), void (this[H.expando] = !0)) : new H.Event(e, t)
    }, H.Event.prototype = {preventDefault: function() {
        this.isDefaultPrevented = s;
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },stopPropagation: function() {
        this.isPropagationStopped = s;
        var e = this.originalEvent;
        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = s, this.stopPropagation()
    },isDefaultPrevented: a,isPropagationStopped: a,isImmediatePropagationStopped: a}, H.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(e, t) {
        H.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
            {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                o.selector
            }
            return (!i || i !== r && !H.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }}
    }), H.support.submitBubbles || (H.event.special.submit = {setup: function() {
        return H.nodeName(this, "form") ? !1 : void H.event.add(this, "click._submit keypress._submit", function(e) {
            var n = e.target, r = H.nodeName(n, "input") || H.nodeName(n, "button") ? n.form : t;
            r && !r._submit_attached && (H.event.add(r, "submit._submit", function(e) {
                e._submit_bubble = !0
            }), r._submit_attached = !0)
        })
    },postDispatch: function(e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && H.event.simulate("submit", this.parentNode, e, !0))
    },teardown: function() {
        return H.nodeName(this, "form") ? !1 : void H.event.remove(this, "._submit")
    }}), H.support.changeBubbles || (H.event.special.change = {setup: function() {
        return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (H.event.add(this, "propertychange._change", function(e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), H.event.add(this, "click._change", function(e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1, H.event.simulate("change", this, e, !0))
        })), !1) : void H.event.add(this, "beforeactivate._change", function(e) {
            var t = e.target;
            Q.test(t.nodeName) && !t._change_attached && (H.event.add(t, "change._change", function(e) {
                !this.parentNode || e.isSimulated || e.isTrigger || H.event.simulate("change", this.parentNode, e, !0)
            }), t._change_attached = !0)
        })
    },handle: function(e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    },teardown: function() {
        return H.event.remove(this, "._change"), Q.test(this.nodeName)
    }}), H.support.focusinBubbles || H.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = 0, r = function(e) {
            H.event.simulate(t, e.target, H.event.fix(e), !0)
        };
        H.event.special[t] = {setup: function() {
            0 === n++ && F.addEventListener(e, r, !0)
        },teardown: function() {
            0 === --n && F.removeEventListener(e, r, !0)
        }}
    }), H.fn.extend({on: function(e, n, r, i, o) {
        var s, l;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = t);
            for (l in e)
                this.on(l, n, r, e[l], o);
            return this
        }
        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)
            i = a;
        else if (!i)
            return this;
        return 1 === o && (s = i, i = function(e) {
            return H().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = H.guid++)), this.each(function() {
            H.event.add(this, e, i, r, n)
        })
    },one: function(e, t, n, r) {
        return this.on(e, t, n, r, 1)
    },off: function(e, n, r) {
        if (e && e.preventDefault && e.handleObj) {
            var i = e.handleObj;
            return H(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
        }
        if ("object" == typeof e) {
            for (var o in e)
                this.off(o, n, e[o]);
            return this
        }
        return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = a), this.each(function() {
            H.event.remove(this, e, r, n)
        })
    },bind: function(e, t, n) {
        return this.on(e, null, t, n)
    },unbind: function(e, t) {
        return this.off(e, null, t)
    },live: function(e, t, n) {
        return H(this.context).on(e, this.selector, t, n), this
    },die: function(e, t) {
        return H(this.context).off(e, this.selector || "**", t), this
    },delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
    },undelegate: function(e, t, n) {
        return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
    },trigger: function(e, t) {
        return this.each(function() {
            H.event.trigger(e, t, this)
        })
    },triggerHandler: function(e, t) {
        return this[0] ? H.event.trigger(e, t, this[0], !0) : void 0
    },toggle: function(e) {
        var t = arguments, n = e.guid || H.guid++, r = 0, i = function(n) {
            var i = (H._data(this, "lastToggle" + e.guid) || 0) % r;
            return H._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
        };
        for (i.guid = n; r < t.length; )
            t[r++].guid = n;
        return this.click(i)
    },hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }}), H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        H.fn[t] = function(e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, H.attrFn && (H.attrFn[t] = !0), et.test(t) && (H.event.fixHooks[t] = H.event.keyHooks), tt.test(t) && (H.event.fixHooks[t] = H.event.mouseHooks)
    }), function() {
        function e(e, t, n, r, o, a) {
            for (var s = 0, l = r.length; l > s; s++) {
                var u = r[s];
                if (u) {
                    var c = !1;
                    for (u = u[e]; u; ) {
                        if (u[i] === n) {
                            c = r[u.sizset];
                            break
                        }
                        if (1 !== u.nodeType || a || (u[i] = n, u.sizset = s), u.nodeName.toLowerCase() === t) {
                            c = u;
                            break
                        }
                        u = u[e]
                    }
                    r[s] = c
                }
            }
        }
        function n(e, t, n, r, o, a) {
            for (var s = 0, l = r.length; l > s; s++) {
                var u = r[s];
                if (u) {
                    var c = !1;
                    for (u = u[e]; u; ) {
                        if (u[i] === n) {
                            c = r[u.sizset];
                            break
                        }
                        if (1 === u.nodeType)
                            if (a || (u[i] = n, u.sizset = s), "string" != typeof t) {
                                if (u === t) {
                                    c = !0;
                                    break
                                }
                            } else if (d.filter(t, [u]).length > 0) {
                                c = u;
                                break
                            }
                        u = u[e]
                    }
                    r[s] = c
                }
            }
        }
        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = "sizcache" + (Math.random() + "").replace(".", ""), o = 0, a = Object.prototype.toString, s = !1, l = !0, u = /\\/g, c = /\r\n/g, f = /\W/;
        [0, 0].sort(function() {
            return l = !1, 0
        });
        var d = function(e, t, n, i) {
            n = n || [], t = t || F;
            var o = t;
            if (1 !== t.nodeType && 9 !== t.nodeType)
                return [];
            if (!e || "string" != typeof e)
                return n;
            var s, l, u, c, f, p, g, y, b = !0, x = d.isXML(t), T = [], N = e;
            do
                if (r.exec(""), s = r.exec(N), s && (N = s[3], T.push(s[1]), s[2])) {
                    c = s[3];
                    break
                }
            while (s);
            if (T.length > 1 && m.exec(e))
                if (2 === T.length && h.relative[T[0]])
                    l = w(T[0] + T[1], t, i);
                else
                    for (l = h.relative[T[0]] ? [t] : d(T.shift(), t); T.length; )
                        e = T.shift(), h.relative[e] && (e += T.shift()), l = w(e, l, i);
            else if (!i && T.length > 1 && 9 === t.nodeType && !x && h.match.ID.test(T[0]) && !h.match.ID.test(T[T.length - 1]) && (f = d.find(T.shift(), t, x), t = f.expr ? d.filter(f.expr, f.set)[0] : f.set[0]), t)
                for (f = i ? {expr: T.pop(),set: v(i)} : d.find(T.pop(), 1 !== T.length || "~" !== T[0] && "+" !== T[0] || !t.parentNode ? t : t.parentNode, x), l = f.expr ? d.filter(f.expr, f.set) : f.set, T.length > 0 ? u = v(l) : b = !1; T.length; )
                    p = T.pop(), g = p, h.relative[p] ? g = T.pop() : p = "", null == g && (g = t), h.relative[p](u, g, x);
            else
                u = T = [];
            if (u || (u = l), u || d.error(p || e), "[object Array]" === a.call(u))
                if (b)
                    if (t && 1 === t.nodeType)
                        for (y = 0; null != u[y]; y++)
                            u[y] && (u[y] === !0 || 1 === u[y].nodeType && d.contains(t, u[y])) && n.push(l[y]);
                    else
                        for (y = 0; null != u[y]; y++)
                            u[y] && 1 === u[y].nodeType && n.push(l[y]);
                else
                    n.push.apply(n, u);
            else
                v(u, n);
            return c && (d(c, o, n, i), d.uniqueSort(n)), n
        };
        d.uniqueSort = function(e) {
            if (x && (s = l, e.sort(x), s))
                for (var t = 1; t < e.length; t++)
                    e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }, d.matches = function(e, t) {
            return d(e, null, null, t)
        }, d.matchesSelector = function(e, t) {
            return d(t, null, null, [e]).length > 0
        }, d.find = function(e, t, n) {
            var r, i, o, a, s, l;
            if (!e)
                return [];
            for (i = 0, o = h.order.length; o > i; i++)
                if (s = h.order[i], (a = h.leftMatch[s].exec(e)) && (l = a[1], a.splice(1, 1), "\\" !== l.substr(l.length - 1) && (a[1] = (a[1] || "").replace(u, ""), r = h.find[s](a, t, n), null != r))) {
                    e = e.replace(h.match[s], "");
                    break
                }
            return r || (r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {set: r,expr: e}
        }, d.filter = function(e, n, r, i) {
            for (var o, a, s, l, u, c, f, p, m, g = e, y = [], v = n, b = n && n[0] && d.isXML(n[0]); e && n.length; ) {
                for (s in h.filter)
                    if (null != (o = h.leftMatch[s].exec(e)) && o[2]) {
                        if (c = h.filter[s], f = o[1], a = !1, o.splice(1, 1), "\\" === f.substr(f.length - 1))
                            continue;
                        if (v === y && (y = []), h.preFilter[s])
                            if (o = h.preFilter[s](o, v, r, y, i, b)) {
                                if (o === !0)
                                    continue
                            } else
                                a = l = !0;
                        if (o)
                            for (p = 0; null != (u = v[p]); p++)
                                u && (l = c(u, o, p, v), m = i ^ l, r && null != l ? m ? a = !0 : v[p] = !1 : m && (y.push(u), a = !0));
                        if (l !== t) {
                            if (r || (v = y), e = e.replace(h.match[s], ""), !a)
                                return [];
                            break
                        }
                    }
                if (e === g) {
                    if (null != a)
                        break;
                    d.error(e)
                }
                g = e
            }
            return v
        }, d.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = d.getText = function(e) {
            var t, n, r = e.nodeType, i = "";
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    if ("string" == typeof e.innerText)
                        return e.innerText.replace(c, "");
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += p(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (t = 0; n = e[t]; t++)
                    8 !== n.nodeType && (i += p(n));
            return i
        }, h = d.selectors = {order: ["ID", "NAME", "TAG"],match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch: {},attrMap: {"class": "className","for": "htmlFor"},attrHandle: {href: function(e) {
            return e.getAttribute("href")
        },type: function(e) {
            return e.getAttribute("type")
        }},relative: {"+": function(e, t) {
            var n = "string" == typeof t, r = n && !f.test(t), i = n && !r;
            r && (t = t.toLowerCase());
            for (var o, a = 0, s = e.length; s > a; a++)
                if (o = e[a]) {
                    for (; (o = o.previousSibling) && 1 !== o.nodeType; )
                        ;
                    e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                }
            i && d.filter(t, e, !0)
        },">": function(e, t) {
            var n, r = "string" == typeof t, i = 0, o = e.length;
            if (r && !f.test(t)) {
                for (t = t.toLowerCase(); o > i; i++)
                    if (n = e[i]) {
                        var a = n.parentNode;
                        e[i] = a.nodeName.toLowerCase() === t ? a : !1
                    }
            } else {
                for (; o > i; i++)
                    n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                r && d.filter(t, e, !0)
            }
        },"": function(t, r, i) {
            var a, s = o++, l = n;
            "string" != typeof r || f.test(r) || (r = r.toLowerCase(), a = r, l = e), l("parentNode", r, s, t, a, i)
        },"~": function(t, r, i) {
            var a, s = o++, l = n;
            "string" != typeof r || f.test(r) || (r = r.toLowerCase(), a = r, l = e), l("previousSibling", r, s, t, a, i)
        }},find: {ID: function(e, t, n) {
            if ("undefined" != typeof t.getElementById && !n) {
                var r = t.getElementById(e[1]);
                return r && r.parentNode ? [r] : []
            }
        },NAME: function(e, t) {
            if ("undefined" != typeof t.getElementsByName) {
                for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; o > i; i++)
                    r[i].getAttribute("name") === e[1] && n.push(r[i]);
                return 0 === n.length ? null : n
            }
        },TAG: function(e, t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
        }},preFilter: {CLASS: function(e, t, n, r, i, o) {
            if (e = " " + e[1].replace(u, "") + " ", o)
                return e;
            for (var a, s = 0; null != (a = t[s]); s++)
                a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
            return !1
        },ID: function(e) {
            return e[1].replace(u, "")
        },TAG: function(e) {
            return e[1].replace(u, "").toLowerCase()
        },CHILD: function(e) {
            if ("nth" === e[1]) {
                e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
            } else
                e[2] && d.error(e[0]);
            return e[0] = o++, e
        },ATTR: function(e, t, n, r, i, o) {
            var a = e[1] = e[1].replace(u, "");
            return !o && h.attrMap[a] && (e[1] = h.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(u, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
        },PSEUDO: function(e, t, n, i, o) {
            if ("not" === e[1]) {
                if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                    var a = d.filter(e[3], t, n, !0 ^ o);
                    return n || i.push.apply(i, a), !1
                }
                e[3] = d(e[3], null, null, t)
            } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0]))
                return !0;
            return e
        },POS: function(e) {
            return e.unshift(!0), e
        }},filters: {enabled: function(e) {
            return e.disabled === !1 && "hidden" !== e.type
        },disabled: function(e) {
            return e.disabled === !0
        },checked: function(e) {
            return e.checked === !0
        },selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },parent: function(e) {
            return !!e.firstChild
        },empty: function(e) {
            return !e.firstChild
        },has: function(e, t, n) {
            return !!d(n[3], e).length
        },header: function(e) {
            return /h\d/i.test(e.nodeName)
        },text: function(e) {
            var t = e.getAttribute("type"), n = e.type;
            return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
        },radio: function(e) {
            return "input" === e.nodeName.toLowerCase() && "radio" === e.type
        },checkbox: function(e) {
            return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
        },file: function(e) {
            return "input" === e.nodeName.toLowerCase() && "file" === e.type
        },password: function(e) {
            return "input" === e.nodeName.toLowerCase() && "password" === e.type
        },submit: function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && "submit" === e.type
        },image: function(e) {
            return "input" === e.nodeName.toLowerCase() && "image" === e.type
        },reset: function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && "reset" === e.type
        },button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
        },input: function(e) {
            return /input|select|textarea|button/i.test(e.nodeName)
        },focus: function(e) {
            return e === e.ownerDocument.activeElement
        }},setFilters: {first: function(e, t) {
            return 0 === t
        },last: function(e, t, n, r) {
            return t === r.length - 1
        },even: function(e, t) {
            return t % 2 === 0
        },odd: function(e, t) {
            return t % 2 === 1
        },lt: function(e, t, n) {
            return t < n[3] - 0
        },gt: function(e, t, n) {
            return t > n[3] - 0
        },nth: function(e, t, n) {
            return n[3] - 0 === t
        },eq: function(e, t, n) {
            return n[3] - 0 === t
        }},filter: {PSEUDO: function(e, t, n, r) {
            var i = t[1], o = h.filters[i];
            if (o)
                return o(e, n, t, r);
            if ("contains" === i)
                return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
            if ("not" === i) {
                for (var a = t[3], s = 0, l = a.length; l > s; s++)
                    if (a[s] === e)
                        return !1;
                return !0
            }
            d.error(i)
        },CHILD: function(e, t) {
            var n, r, o, a, s, l, u = t[1], c = e;
            switch (u) {
                case "only":
                case "first":
                    for (; c = c.previousSibling; )
                        if (1 === c.nodeType)
                            return !1;
                    if ("first" === u)
                        return !0;
                    c = e;
                case "last":
                    for (; c = c.nextSibling; )
                        if (1 === c.nodeType)
                            return !1;
                    return !0;
                case "nth":
                    if (n = t[2], r = t[3], 1 === n && 0 === r)
                        return !0;
                    if (o = t[0], a = e.parentNode, a && (a[i] !== o || !e.nodeIndex)) {
                        for (s = 0, c = a.firstChild; c; c = c.nextSibling)
                            1 === c.nodeType && (c.nodeIndex = ++s);
                        a[i] = o
                    }
                    return l = e.nodeIndex - r, 0 === n ? 0 === l : l % n === 0 && l / n >= 0
            }
        },ID: function(e, t) {
            return 1 === e.nodeType && e.getAttribute("id") === t
        },TAG: function(e, t) {
            return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
        },CLASS: function(e, t) {
            return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
        },ATTR: function(e, t) {
            var n = t[1], r = d.attr ? d.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n), i = r + "", o = t[2], a = t[4];
            return null == r ? "!=" === o : !o && d.attr ? null != r : "=" === o ? i === a : "*=" === o ? i.indexOf(a) >= 0 : "~=" === o ? (" " + i + " ").indexOf(a) >= 0 : a ? "!=" === o ? i !== a : "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a : "|=" === o ? i === a || i.substr(0, a.length + 1) === a + "-" : !1 : i && r !== !1
        },POS: function(e, t, n, r) {
            var i = t[2], o = h.setFilters[i];
            return o ? o(e, n, t, r) : void 0
        }}}, m = h.match.POS, g = function(e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var y in h.match)
            h.match[y] = new RegExp(h.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source), h.leftMatch[y] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[y].source.replace(/\\(\d+)/g, g));
        h.match.globalPOS = m;
        var v = function(e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(F.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            v = function(e, t) {
                var n = 0, r = t || [];
                if ("[object Array]" === a.call(e))
                    Array.prototype.push.apply(r, e);
                else if ("number" == typeof e.length)
                    for (var i = e.length; i > n; n++)
                        r.push(e[n]);
                else
                    for (; e[n]; n++)
                        r.push(e[n]);
                return r
            }
        }
        var x, T;
        F.documentElement.compareDocumentPosition ? x = function(e, t) {
            return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : (x = function(e, t) {
            if (e === t)
                return s = !0, 0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], o = [], a = e.parentNode, l = t.parentNode, u = a;
            if (a === l)
                return T(e, t);
            if (!a)
                return -1;
            if (!l)
                return 1;
            for (; u; )
                i.unshift(u), u = u.parentNode;
            for (u = l; u; )
                o.unshift(u), u = u.parentNode;
            n = i.length, r = o.length;
            for (var c = 0; n > c && r > c; c++)
                if (i[c] !== o[c])
                    return T(i[c], o[c]);
            return c === n ? T(e, o[c], -1) : T(i[c], t, 1)
        }, T = function(e, t, n) {
            if (e === t)
                return n;
            for (var r = e.nextSibling; r; ) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }), function() {
            var e = F.createElement("div"), n = "script" + (new Date).getTime(), r = F.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), F.getElementById(n) && (h.find.ID = function(e, n, r) {
                if ("undefined" != typeof n.getElementById && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || "undefined" != typeof i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, h.filter.ID = function(e, t) {
                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return 1 === e.nodeType && n && n.nodeValue === t
            }), r.removeChild(e), r = e = null
        }(), function() {
            var e = F.createElement("div");
            e.appendChild(F.createComment("")), e.getElementsByTagName("*").length > 0 && (h.find.TAG = function(e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var r = [], i = 0; n[i]; i++)
                        1 === n[i].nodeType && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (h.attrHandle.href = function(e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), F.querySelectorAll && !function() {
            var e = d, t = F.createElement("div"), n = "__sizzle__";
            if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                d = function(t, r, i, o) {
                    if (r = r || F, !o && !d.isXML(r)) {
                        var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (a && (1 === r.nodeType || 9 === r.nodeType)) {
                            if (a[1])
                                return v(r.getElementsByTagName(t), i);
                            if (a[2] && h.find.CLASS && r.getElementsByClassName)
                                return v(r.getElementsByClassName(a[2]), i)
                        }
                        if (9 === r.nodeType) {
                            if ("body" === t && r.body)
                                return v([r.body], i);
                            if (a && a[3]) {
                                var s = r.getElementById(a[3]);
                                if (!s || !s.parentNode)
                                    return v([], i);
                                if (s.id === a[3])
                                    return v([s], i)
                            }
                            try {
                                return v(r.querySelectorAll(t), i)
                            } catch (l) {
                            }
                        } else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) {
                            var u = r, c = r.getAttribute("id"), f = c || n, p = r.parentNode, m = /^\s*[+~]/.test(t);
                            c ? f = f.replace(/'/g, "\\$&") : r.setAttribute("id", f), m && p && (r = r.parentNode);
                            try {
                                if (!m || p)
                                    return v(r.querySelectorAll("[id='" + f + "'] " + t), i)
                            } catch (g) {
                            }finally {
                                c || u.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, r, i, o)
                };
                for (var r in e)
                    d[r] = e[r];
                t = null
            }
        }(), function() {
            var e = F.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(F.createElement("div"), "div"), r = !1;
                try {
                    t.call(F.documentElement, "[test!='']:sizzle")
                } catch (i) {
                    r = !0
                }
                d.matchesSelector = function(e, i) {
                    if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e))
                        try {
                            if (r || !h.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                var o = t.call(e, i);
                                if (o || !n || e.document && 11 !== e.document.nodeType)
                                    return o
                            }
                        } catch (a) {
                        }
                    return d(i, null, null, [e]).length > 0
                }
            }
        }(), function() {
            var e = F.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (h.order.splice(1, 0, "CLASS"), h.find.CLASS = function(e, t, n) {
                return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
            }, e = null))
        }(), d.contains = F.documentElement.contains ? function(e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : F.documentElement.compareDocumentPosition ? function(e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        } : function() {
            return !1
        }, d.isXML = function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        var w = function(e, t, n) {
            for (var r, i = [], o = "", a = t.nodeType ? [t] : t; r = h.match.PSEUDO.exec(e); )
                o += r[0], e = e.replace(h.match.PSEUDO, "");
            e = h.relative[e] ? e + "*" : e;
            for (var s = 0, l = a.length; l > s; s++)
                d(e, a[s], i, n);
            return d.filter(o, i)
        };
        d.attr = H.attr, d.selectors.attrMap = {}, H.find = d, H.expr = d.selectors, H.expr[":"] = H.expr.filters, H.unique = d.uniqueSort, H.text = d.getText, H.isXMLDoc = d.isXML, H.contains = d.contains
    }();
    var st = /Until$/, lt = /^(?:parents|prevUntil|prevAll)/, ut = /,/, ct = /^.[^:#\[\.,]*$/, ft = Array.prototype.slice, dt = H.expr.match.globalPOS, pt = {children: !0,contents: !0,next: !0,prev: !0};
    H.fn.extend({find: function(e) {
        var t, n, r = this;
        if ("string" != typeof e)
            return H(e).filter(function() {
                for (t = 0, n = r.length; n > t; t++)
                    if (H.contains(r[t], this))
                        return !0
            });
        var i, o, a, s = this.pushStack("", "find", e);
        for (t = 0, n = this.length; n > t; t++)
            if (i = s.length, H.find(e, this[t], s), t > 0)
                for (o = i; o < s.length; o++)
                    for (a = 0; i > a; a++)
                        if (s[a] === s[o]) {
                            s.splice(o--, 1);
                            break
                        }
        return s
    },has: function(e) {
        var t = H(e);
        return this.filter(function() {
            for (var e = 0, n = t.length; n > e; e++)
                if (H.contains(this, t[e]))
                    return !0
        })
    },not: function(e) {
        return this.pushStack(u(this, e, !1), "not", e)
    },filter: function(e) {
        return this.pushStack(u(this, e, !0), "filter", e)
    },is: function(e) {
        return !!e && ("string" == typeof e ? dt.test(e) ? H(e, this.context).index(this[0]) >= 0 : H.filter(e, this).length > 0 : this.filter(e).length > 0)
    },closest: function(e, t) {
        var n, r, i = [], o = this[0];
        if (H.isArray(e)) {
            for (var a = 1; o && o.ownerDocument && o !== t; ) {
                for (n = 0; n < e.length; n++)
                    H(o).is(e[n]) && i.push({selector: e[n],elem: o,level: a});
                o = o.parentNode, a++
            }
            return i
        }
        var s = dt.test(e) || "string" != typeof e ? H(e, t || this.context) : 0;
        for (n = 0, r = this.length; r > n; n++)
            for (o = this[n]; o; ) {
                if (s ? s.index(o) > -1 : H.find.matchesSelector(o, e)) {
                    i.push(o);
                    break
                }
                if (o = o.parentNode, !o || !o.ownerDocument || o === t || 11 === o.nodeType)
                    break
            }
        return i = i.length > 1 ? H.unique(i) : i, this.pushStack(i, "closest", e)
    },index: function(e) {
        return e ? "string" == typeof e ? H.inArray(this[0], H(e)) : H.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    },add: function(e, t) {
        var n = "string" == typeof e ? H(e, t) : H.makeArray(e && e.nodeType ? [e] : e), r = H.merge(this.get(), n);
        return this.pushStack(l(n[0]) || l(r[0]) ? r : H.unique(r))
    },andSelf: function() {
        return this.add(this.prevObject)
    }}), H.each({parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    },parents: function(e) {
        return H.dir(e, "parentNode")
    },parentsUntil: function(e, t, n) {
        return H.dir(e, "parentNode", n)
    },next: function(e) {
        return H.nth(e, 2, "nextSibling")
    },prev: function(e) {
        return H.nth(e, 2, "previousSibling")
    },nextAll: function(e) {
        return H.dir(e, "nextSibling")
    },prevAll: function(e) {
        return H.dir(e, "previousSibling")
    },nextUntil: function(e, t, n) {
        return H.dir(e, "nextSibling", n)
    },prevUntil: function(e, t, n) {
        return H.dir(e, "previousSibling", n)
    },siblings: function(e) {
        return H.sibling((e.parentNode || {}).firstChild, e)
    },children: function(e) {
        return H.sibling(e.firstChild)
    },contents: function(e) {
        return H.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : H.makeArray(e.childNodes)
    }}, function(e, t) {
        H.fn[e] = function(n, r) {
            var i = H.map(this, t, n);
            return st.test(e) || (r = n), r && "string" == typeof r && (i = H.filter(r, i)), i = this.length > 1 && !pt[e] ? H.unique(i) : i, (this.length > 1 || ut.test(r)) && lt.test(e) && (i = i.reverse()), this.pushStack(i, e, ft.call(arguments).join(","))
        }
    }), H.extend({filter: function(e, t, n) {
        return n && (e = ":not(" + e + ")"), 1 === t.length ? H.find.matchesSelector(t[0], e) ? [t[0]] : [] : H.find.matches(e, t)
    },dir: function(e, n, r) {
        for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !H(o).is(r)); )
            1 === o.nodeType && i.push(o), o = o[n];
        return i
    },nth: function(e, t, n) {
        t = t || 1;
        for (var r = 0; e && (1 !== e.nodeType || ++r !== t); e = e[n])
            ;
        return e
    },sibling: function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }});
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", mt = / jQuery\d+="(?:\d+|null)"/g, gt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, vt = /<([\w:]+)/, bt = /<tbody/i, xt = /<|&#?\w+;/, Tt = /<(?:script|style)/i, wt = /<(?:script|object|embed|option|style)/i, Nt = new RegExp("<(?:" + ht + ")[\\s/>]", "i"), Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, Et = /\/(java|ecma)script/i, kt = /^\s*<!(?:\[CDATA\[|\-\-)/, St = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],area: [1, "<map>", "</map>"],_default: [0, "", ""]}, At = c(F);
    St.optgroup = St.option, St.tbody = St.tfoot = St.colgroup = St.caption = St.thead, St.th = St.td, H.support.htmlSerialize || (St._default = [1, "div<div>", "</div>"]), H.fn.extend({text: function(e) {
        return H.access(this, function(e) {
            return e === t ? H.text(this) : this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(e))
        }, null, e, arguments.length)
    },wrapAll: function(e) {
        if (H.isFunction(e))
            return this.each(function(t) {
                H(this).wrapAll(e.call(this, t))
            });
        if (this[0]) {
            var t = H(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                    e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    },wrapInner: function(e) {
        return this.each(H.isFunction(e) ? function(t) {
            H(this).wrapInner(e.call(this, t))
        } : function() {
            var t = H(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    },wrap: function(e) {
        var t = H.isFunction(e);
        return this.each(function(n) {
            H(this).wrapAll(t ? e.call(this, n) : e)
        })
    },unwrap: function() {
        return this.parent().each(function() {
            H.nodeName(this, "body") || H(this).replaceWith(this.childNodes)
        }).end()
    },append: function() {
        return this.domManip(arguments, !0, function(e) {
            1 === this.nodeType && this.appendChild(e)
        })
    },prepend: function() {
        return this.domManip(arguments, !0, function(e) {
            1 === this.nodeType && this.insertBefore(e, this.firstChild)
        })
    },before: function() {
        if (this[0] && this[0].parentNode)
            return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
        if (arguments.length) {
            var e = H.clean(arguments);
            return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
        }
    },after: function() {
        if (this[0] && this[0].parentNode)
            return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
        if (arguments.length) {
            var e = this.pushStack(this, "after", arguments);
            return e.push.apply(e, H.clean(arguments)), e
        }
    },remove: function(e, t) {
        for (var n, r = 0; null != (n = this[r]); r++)
            (!e || H.filter(e, [n]).length) && (t || 1 !== n.nodeType || (H.cleanData(n.getElementsByTagName("*")), H.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
        return this
    },empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
            for (1 === e.nodeType && H.cleanData(e.getElementsByTagName("*")); e.firstChild; )
                e.removeChild(e.firstChild);
        return this
    },clone: function(e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
            return H.clone(this, e, t)
        })
    },html: function(e) {
        return H.access(this, function(e) {
            var n = this[0] || {}, r = 0, i = this.length;
            if (e === t)
                return 1 === n.nodeType ? n.innerHTML.replace(mt, "") : null;
            if (!("string" != typeof e || Tt.test(e) || !H.support.leadingWhitespace && gt.test(e) || St[(vt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(yt, "<$1></$2>");
                try {
                    for (; i > r; r++)
                        n = this[r] || {}, 1 === n.nodeType && (H.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                    n = 0
                } catch (o) {
                }
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    },replaceWith: function(e) {
        return this[0] && this[0].parentNode ? H.isFunction(e) ? this.each(function(t) {
            var n = H(this), r = n.html();
            n.replaceWith(e.call(this, t, r))
        }) : ("string" != typeof e && (e = H(e).detach()), this.each(function() {
            var t = this.nextSibling, n = this.parentNode;
            H(this).remove(), t ? H(t).before(e) : H(n).append(e)
        })) : this.length ? this.pushStack(H(H.isFunction(e) ? e() : e), "replaceWith", e) : this
    },detach: function(e) {
        return this.remove(e, !0)
    },domManip: function(e, n, r) {
        var i, o, a, s, l = e[0], u = [];
        if (!H.support.checkClone && 3 === arguments.length && "string" == typeof l && Ct.test(l))
            return this.each(function() {
                H(this).domManip(e, n, r, !0)
            });
        if (H.isFunction(l))
            return this.each(function(i) {
                var o = H(this);
                e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
            });
        if (this[0]) {
            if (s = l && l.parentNode, i = H.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {fragment: s} : H.buildFragment(e, this, u), a = i.fragment, o = 1 === a.childNodes.length ? a = a.firstChild : a.firstChild) {
                n = n && H.nodeName(o, "tr");
                for (var c = 0, d = this.length, p = d - 1; d > c; c++)
                    r.call(n ? f(this[c], o) : this[c], i.cacheable || d > 1 && p > c ? H.clone(a, !0, !0) : a)
            }
            u.length && H.each(u, function(e, t) {
                t.src ? H.ajax({type: "GET",global: !1,url: t.src,async: !1,dataType: "script"}) : H.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
            })
        }
        return this
    }}), H.buildFragment = function(e, t, n) {
        var r, i, o, a, s = e[0];
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = F), !(1 === e.length && "string" == typeof s && s.length < 512 && a === F && "<" === s.charAt(0)) || wt.test(s) || !H.support.checkClone && Ct.test(s) || !H.support.html5Clone && Nt.test(s) || (i = !0, o = H.fragments[s], o && 1 !== o && (r = o)), r || (r = a.createDocumentFragment(), H.clean(e, a, r, n)), i && (H.fragments[s] = o ? r : 1), {fragment: r,cacheable: i}
    }, H.fragments = {}, H.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        H.fn[e] = function(n) {
            var r = [], i = H(n), o = 1 === this.length && this[0].parentNode;
            if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === i.length)
                return i[t](this[0]), this;
            for (var a = 0, s = i.length; s > a; a++) {
                var l = (a > 0 ? this.clone(!0) : this).get();
                H(i[a])[t](l), r = r.concat(l)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), H.extend({clone: function(e, t, n) {
        var r, i, o, a = H.support.html5Clone || H.isXMLDoc(e) || !Nt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : y(e);
        if (!(H.support.noCloneEvent && H.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || H.isXMLDoc(e)))
            for (p(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o)
                i[o] && p(r[o], i[o]);
        if (t && (d(e, a), n))
            for (r = h(e), i = h(a), o = 0; r[o]; ++o)
                d(r[o], i[o]);
        return r = i = null, a
    },clean: function(e, t, n, r) {
        var i, o, a, s = [];
        t = t || F, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || F);
        for (var l, u = 0; null != (l = e[u]); u++)
            if ("number" == typeof l && (l += ""), l) {
                if ("string" == typeof l)
                    if (xt.test(l)) {
                        l = l.replace(yt, "<$1></$2>");
                        var f, d = (vt.exec(l) || ["", ""])[1].toLowerCase(), p = St[d] || St._default, h = p[0], m = t.createElement("div"), y = At.childNodes;
                        for (t === F ? At.appendChild(m) : c(t).appendChild(m), m.innerHTML = p[1] + l + p[2]; h--; )
                            m = m.lastChild;
                        if (!H.support.tbody) {
                            var v = bt.test(l), b = "table" !== d || v ? "<table>" !== p[1] || v ? [] : m.childNodes : m.firstChild && m.firstChild.childNodes;
                            for (a = b.length - 1; a >= 0; --a)
                                H.nodeName(b[a], "tbody") && !b[a].childNodes.length && b[a].parentNode.removeChild(b[a])
                        }
                        !H.support.leadingWhitespace && gt.test(l) && m.insertBefore(t.createTextNode(gt.exec(l)[0]), m.firstChild), l = m.childNodes, m && (m.parentNode.removeChild(m), y.length > 0 && (f = y[y.length - 1], f && f.parentNode && f.parentNode.removeChild(f)))
                    } else
                        l = t.createTextNode(l);
                var x;
                if (!H.support.appendChecked)
                    if (l[0] && "number" == typeof (x = l.length))
                        for (a = 0; x > a; a++)
                            g(l[a]);
                    else
                        g(l);
                l.nodeType ? s.push(l) : s = H.merge(s, l)
            }
        if (n)
            for (i = function(e) {
                return !e.type || Et.test(e.type)
            }, u = 0; s[u]; u++)
                if (o = s[u], r && H.nodeName(o, "script") && (!o.type || Et.test(o.type)))
                    r.push(o.parentNode ? o.parentNode.removeChild(o) : o);
                else {
                    if (1 === o.nodeType) {
                        var T = H.grep(o.getElementsByTagName("script"), i);
                        s.splice.apply(s, [u + 1, 0].concat(T))
                    }
                    n.appendChild(o)
                }
        return s
    },cleanData: function(e) {
        for (var t, n, r, i = H.cache, o = H.event.special, a = H.support.deleteExpando, s = 0; null != (r = e[s]); s++)
            if ((!r.nodeName || !H.noData[r.nodeName.toLowerCase()]) && (n = r[H.expando])) {
                if (t = i[n], t && t.events) {
                    for (var l in t.events)
                        o[l] ? H.event.remove(r, l) : H.removeEvent(r, l, t.handle);
                    t.handle && (t.handle.elem = null)
                }
                a ? delete r[H.expando] : r.removeAttribute && r.removeAttribute(H.expando), delete i[n]
            }
    }});
    var Lt, Dt, jt, Ft = /alpha\([^)]*\)/i, Mt = /opacity=([^)]*)/, _t = /([A-Z]|^ms)/g, Ht = /^[\-+]?(?:\d*\.)?\d+$/i, Ot = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Bt = /^([\-+])=([\-+.\de]+)/, Pt = /^margin/, qt = {position: "absolute",visibility: "hidden",display: "block"}, Wt = ["Top", "Right", "Bottom", "Left"];
    H.fn.css = function(e, n) {
        return H.access(this, function(e, n, r) {
            return r !== t ? H.style(e, n, r) : H.css(e, n)
        }, e, n, arguments.length > 1)
    }, H.extend({cssHooks: {opacity: {get: function(e, t) {
        if (t) {
            var n = Lt(e, "opacity");
            return "" === n ? "1" : n
        }
        return e.style.opacity
    }}},cssNumber: {fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": H.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o, a, s = H.camelCase(n), l = e.style, u = H.cssHooks[s];
            if (n = H.cssProps[s] || s, r === t)
                return u && "get" in u && (o = u.get(e, !1, i)) !== t ? o : l[n];
            if (a = typeof r, "string" === a && (o = Bt.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(H.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || H.cssNumber[s] || (r += "px"), u && "set" in u && (r = u.set(e, r)) === t)))
                try {
                    l[n] = r
                } catch (c) {
                }
        }
    },css: function(e, n, r) {
        var i, o;
        return n = H.camelCase(n), o = H.cssHooks[n], n = H.cssProps[n] || n, "cssFloat" === n && (n = "float"), o && "get" in o && (i = o.get(e, !0, r)) !== t ? i : Lt ? Lt(e, n) : void 0
    },swap: function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i], e.style[i] = t[i];
        r = n.call(e);
        for (i in t)
            e.style[i] = o[i];
        return r
    }}), H.curCSS = H.css, F.defaultView && F.defaultView.getComputedStyle && (Dt = function(e, t) {
        var n, r, i, o, a = e.style;
        return t = t.replace(_t, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), "" !== n || H.contains(e.ownerDocument.documentElement, e) || (n = H.style(e, t))), !H.support.pixelMargin && i && Pt.test(t) && Ot.test(n) && (o = a.width, a.width = n, n = i.width, a.width = o), n
    }), F.documentElement.currentStyle && (jt = function(e, t) {
        var n, r, i, o = e.currentStyle && e.currentStyle[t], a = e.style;
        return null == o && a && (i = a[t]) && (o = i), Ot.test(o) && (n = a.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r)), "" === o ? "auto" : o
    }), Lt = Dt || jt, H.each(["height", "width"], function(e, t) {
        H.cssHooks[t] = {get: function(e, n, r) {
            return n ? 0 !== e.offsetWidth ? v(e, t, r) : H.swap(e, qt, function() {
                return v(e, t, r)
            }) : void 0
        },set: function(e, t) {
            return Ht.test(t) ? t + "px" : t
        }}
    }), H.support.opacity || (H.cssHooks.opacity = {get: function(e, t) {
        return Mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
    },set: function(e, t) {
        var n = e.style, r = e.currentStyle, i = H.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
        n.zoom = 1, t >= 1 && "" === H.trim(o.replace(Ft, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = Ft.test(o) ? o.replace(Ft, i) : o + " " + i)
    }}), H(function() {
        H.support.reliableMarginRight || (H.cssHooks.marginRight = {get: function(e, t) {
            return H.swap(e, {display: "inline-block"}, function() {
                return t ? Lt(e, "margin-right") : e.style.marginRight
            })
        }})
    }), H.expr && H.expr.filters && (H.expr.filters.hidden = function(e) {
        var t = e.offsetWidth, n = e.offsetHeight;
        return 0 === t && 0 === n || !H.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || H.css(e, "display"))
    }, H.expr.filters.visible = function(e) {
        return !H.expr.filters.hidden(e)
    }), H.each({margin: "",padding: "",border: "Width"}, function(e, t) {
        H.cssHooks[e + t] = {expand: function(n) {
            var r, i = "string" == typeof n ? n.split(" ") : [n], o = {};
            for (r = 0; 4 > r; r++)
                o[e + Wt[r] + t] = i[r] || i[r - 2] || i[0];
            return o
        }}
    });
    var It, $t, Rt = /%20/g, Xt = /\[\]$/, zt = /\r?\n/g, Vt = /#.*$/, Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Gt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Yt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Jt = /^(?:GET|HEAD)$/, Qt = /^\/\//, Kt = /\?/, Zt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, en = /^(?:select|textarea)/i, tn = /\s+/, nn = /([?&])_=[^&]*/, rn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, on = H.fn.load, an = {}, sn = {}, ln = ["*/"] + ["*"];
    try {
        It = _.href
    } catch (un) {
        It = F.createElement("a"), It.href = "", It = It.href
    }
    $t = rn.exec(It.toLowerCase()) || [], H.fn.extend({load: function(e, n, r) {
        if ("string" != typeof e && on)
            return on.apply(this, arguments);
        if (!this.length)
            return this;
        var i = e.indexOf(" ");
        if (i >= 0) {
            var o = e.slice(i, e.length);
            e = e.slice(0, i)
        }
        var a = "GET";
        n && (H.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (n = H.param(n, H.ajaxSettings.traditional), a = "POST"));
        var s = this;
        return H.ajax({url: e,type: a,dataType: "html",data: n,complete: function(e, t, n) {
            n = e.responseText, e.isResolved() && (e.done(function(e) {
                n = e
            }), s.html(o ? H("<div>").append(n.replace(Zt, "")).find(o) : n)), r && s.each(r, [n, t, e])
        }}), this
    },serialize: function() {
        return H.param(this.serializeArray())
    },serializeArray: function() {
        return this.map(function() {
            return this.elements ? H.makeArray(this.elements) : this
        }).filter(function() {
            return this.name && !this.disabled && (this.checked || en.test(this.nodeName) || Gt.test(this.type))
        }).map(function(e, t) {
            var n = H(this).val();
            return null == n ? null : H.isArray(n) ? H.map(n, function(e) {
                return {name: t.name,value: e.replace(zt, "\r\n")}
            }) : {name: t.name,value: n.replace(zt, "\r\n")}
        }).get()
    }}), H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        H.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), H.each(["get", "post"], function(e, n) {
        H[n] = function(e, r, i, o) {
            return H.isFunction(r) && (o = o || i, i = r, r = t), H.ajax({type: n,url: e,data: r,success: i,dataType: o})
        }
    }), H.extend({getScript: function(e, n) {
        return H.get(e, t, n, "script")
    },getJSON: function(e, t, n) {
        return H.get(e, t, n, "json")
    },ajaxSetup: function(e, t) {
        return t ? T(e, H.ajaxSettings) : (t = e, e = H.ajaxSettings), T(e, t), e
    },ajaxSettings: {url: It,isLocal: Yt.test($t[1]),global: !0,type: "GET",contentType: "application/x-www-form-urlencoded; charset=UTF-8",processData: !0,async: !0,accepts: {xml: "application/xml, text/xml",html: "text/html",text: "text/plain",json: "application/json, text/javascript","*": ln},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": e.String,"text html": !0,"text json": H.parseJSON,"text xml": H.parseXML},flatOptions: {context: !0,url: !0}},ajaxPrefilter: b(an),ajaxTransport: b(sn),ajax: function(e, n) {
        function r(e, n, r, a) {
            if (2 !== T) {
                T = 2, l && clearTimeout(l), s = t, o = a || "", w.readyState = e > 0 ? 4 : 0;
                var u, f, v, b, x, E = n, k = r ? N(d, w, r) : t;
                if (e >= 200 && 300 > e || 304 === e)
                    if (d.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (H.lastModified[i] = b), (x = w.getResponseHeader("Etag")) && (H.etag[i] = x)), 304 === e)
                        E = "notmodified", u = !0;
                    else
                        try {
                            f = C(d, k), E = "success", u = !0
                        } catch (S) {
                            E = "parsererror", v = S
                        }
                else
                    v = E, (!E || e) && (E = "error", 0 > e && (e = 0));
                w.status = e, w.statusText = "" + (n || E), u ? m.resolveWith(p, [f, E, w]) : m.rejectWith(p, [w, E, v]), w.statusCode(y), y = t, c && h.trigger("ajax" + (u ? "Success" : "Error"), [w, d, u ? f : v]), g.fireWith(p, [w, E]), c && (h.trigger("ajaxComplete", [w, d]), --H.active || H.event.trigger("ajaxStop"))
            }
        }
        "object" == typeof e && (n = e, e = t), n = n || {};
        var i, o, a, s, l, u, c, f, d = H.ajaxSetup({}, n), p = d.context || d, h = p !== d && (p.nodeType || p instanceof H) ? H(p) : H.event, m = H.Deferred(), g = H.Callbacks("once memory"), y = d.statusCode || {}, v = {}, b = {}, T = 0, w = {readyState: 0,setRequestHeader: function(e, t) {
            if (!T) {
                var n = e.toLowerCase();
                e = b[n] = b[n] || e, v[e] = t
            }
            return this
        },getAllResponseHeaders: function() {
            return 2 === T ? o : null
        },getResponseHeader: function(e) {
            var n;
            if (2 === T) {
                if (!a)
                    for (a = {}; n = Ut.exec(o); )
                        a[n[1].toLowerCase()] = n[2];
                n = a[e.toLowerCase()]
            }
            return n === t ? null : n
        },overrideMimeType: function(e) {
            return T || (d.mimeType = e), this
        },abort: function(e) {
            return e = e || "abort", s && s.abort(e), r(0, e), this
        }};
        if (m.promise(w), w.success = w.done, w.error = w.fail, w.complete = g.add, w.statusCode = function(e) {
            if (e) {
                var t;
                if (2 > T)
                    for (t in e)
                        y[t] = [y[t], e[t]];
                else
                    t = e[w.status], w.then(t, t)
            }
            return this
        }, d.url = ((e || d.url) + "").replace(Vt, "").replace(Qt, $t[1] + "//"), d.dataTypes = H.trim(d.dataType || "*").toLowerCase().split(tn), null == d.crossDomain && (u = rn.exec(d.url.toLowerCase()), d.crossDomain = !(!u || u[1] == $t[1] && u[2] == $t[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == ($t[3] || ("http:" === $t[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = H.param(d.data, d.traditional)), x(an, d, n, w), 2 === T)
            return !1;
        if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Jt.test(d.type), c && 0 === H.active++ && H.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Kt.test(d.url) ? "&" : "?") + d.data, delete d.data), i = d.url, d.cache === !1)) {
            var E = H.now(), k = d.url.replace(nn, "$1_=" + E);
            d.url = k + (k === d.url ? (Kt.test(d.url) ? "&" : "?") + "_=" + E : "")
        }
        (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", d.contentType), d.ifModified && (i = i || d.url, H.lastModified[i] && w.setRequestHeader("If-Modified-Since", H.lastModified[i]), H.etag[i] && w.setRequestHeader("If-None-Match", H.etag[i])), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ln + "; q=0.01" : "") : d.accepts["*"]);
        for (f in d.headers)
            w.setRequestHeader(f, d.headers[f]);
        if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === T))
            return w.abort(), !1;
        for (f in {success: 1,error: 1,complete: 1})
            w[f](d[f]);
        if (s = x(sn, d, n, w)) {
            w.readyState = 1, c && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                w.abort("timeout")
            }, d.timeout));
            try {
                T = 1, s.send(v, r)
            } catch (S) {
                if (!(2 > T))
                    throw S;
                r(-1, S)
            }
        } else
            r(-1, "No Transport");
        return w
    },param: function(e, n) {
        var r = [], i = function(e, t) {
            t = H.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = H.ajaxSettings.traditional), H.isArray(e) || e.jquery && !H.isPlainObject(e))
            H.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (var o in e)
                w(o, e[o], n, i);
        return r.join("&").replace(Rt, "+")
    }}), H.extend({active: 0,lastModified: {},etag: {}});
    var cn = H.now(), fn = /(\=)\?(&|$)|\?\?/i;
    H.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
        return H.expando + "_" + cn++
    }}), H.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i = "string" == typeof t.data && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (fn.test(t.url) || i && fn.test(t.data))) {
            var o, a = t.jsonpCallback = H.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s = e[a], l = t.url, u = t.data, c = "$1" + a + "$2";
            return t.jsonp !== !1 && (l = l.replace(fn, c), t.url === l && (i && (u = u.replace(fn, c)), t.data === u && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))), t.url = l, t.data = u, e[a] = function(e) {
                o = [e]
            }, r.always(function() {
                e[a] = s, o && H.isFunction(s) && e[a](o[0])
            }), t.converters["script json"] = function() {
                return o || H.error(a + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), H.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /javascript|ecmascript/},converters: {"text script": function(e) {
        return H.globalEval(e), e
    }}}), H.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), H.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
            return {send: function(i, o) {
                n = F.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                    (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                }, r.insertBefore(n, r.firstChild)
            },abort: function() {
                n && n.onload(0, 1)
            }}
        }
    });
    var dn, pn = e.ActiveXObject ? function() {
        for (var e in dn)
            dn[e](0, 1)
    } : !1, hn = 0;
    H.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && E() || k()
    } : E, function(e) {
        H.extend(H.support, {ajax: !!e,cors: !!e && "withCredentials" in e})
    }(H.ajaxSettings.xhr()), H.support.ajax && H.ajaxTransport(function(n) {
        if (!n.crossDomain || H.support.cors) {
            var r;
            return {send: function(i, o) {
                var a, s, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                    for (s in n.xhrFields)
                        l[s] = n.xhrFields[s];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in i)
                        l.setRequestHeader(s, i[s])
                } catch (u) {
                }
                l.send(n.hasContent && n.data || null), r = function(e, i) {
                    var s, u, c, f, d;
                    try {
                        if (r && (i || 4 === l.readyState))
                            if (r = t, a && (l.onreadystatechange = H.noop, pn && delete dn[a]), i)
                                4 !== l.readyState && l.abort();
                            else {
                                s = l.status, c = l.getAllResponseHeaders(), f = {}, d = l.responseXML, d && d.documentElement && (f.xml = d);
                                try {
                                    f.text = l.responseText
                                } catch (e) {
                                }
                                try {
                                    u = l.statusText
                                } catch (p) {
                                    u = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                    } catch (h) {
                        i || o(-1, h)
                    }
                    f && o(s, u, f, c)
                }, n.async && 4 !== l.readyState ? (a = ++hn, pn && (dn || (dn = {}, H(e).unload(pn)), dn[a] = r), l.onreadystatechange = r) : r()
            },abort: function() {
                r && r(0, 1)
            }}
        }
    });
    var mn, gn, yn, vn, bn = {}, xn = /^(?:toggle|show|hide)$/, Tn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, wn = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    H.fn.extend({show: function(e, t, n) {
        var r, i;
        if (e || 0 === e)
            return this.animate(L("show", 3), e, t, n);
        for (var o = 0, a = this.length; a > o; o++)
            r = this[o], r.style && (i = r.style.display, H._data(r, "olddisplay") || "none" !== i || (i = r.style.display = ""), ("" === i && "none" === H.css(r, "display") || !H.contains(r.ownerDocument.documentElement, r)) && H._data(r, "olddisplay", D(r.nodeName)));
        for (o = 0; a > o; o++)
            r = this[o], r.style && (i = r.style.display, ("" === i || "none" === i) && (r.style.display = H._data(r, "olddisplay") || ""));
        return this
    },hide: function(e, t, n) {
        if (e || 0 === e)
            return this.animate(L("hide", 3), e, t, n);
        for (var r, i, o = 0, a = this.length; a > o; o++)
            r = this[o], r.style && (i = H.css(r, "display"), "none" === i || H._data(r, "olddisplay") || H._data(r, "olddisplay", i));
        for (o = 0; a > o; o++)
            this[o].style && (this[o].style.display = "none");
        return this
    },_toggle: H.fn.toggle,toggle: function(e, t, n) {
        var r = "boolean" == typeof e;
        return H.isFunction(e) && H.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each(function() {
            var t = r ? e : H(this).is(":hidden");
            H(this)[t ? "show" : "hide"]()
        }) : this.animate(L("toggle", 3), e, t, n), this
    },fadeTo: function(e, t, n, r) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    },animate: function(e, t, n, r) {
        function i() {
            o.queue === !1 && H._mark(this);
            var t, n, r, i, a, s, l, u, c, f, d, p = H.extend({}, o), h = 1 === this.nodeType, m = h && H(this).is(":hidden");
            p.animatedProperties = {};
            for (r in e)
                if (t = H.camelCase(r), r !== t && (e[t] = e[r], delete e[r]), (a = H.cssHooks[t]) && "expand" in a) {
                    s = a.expand(e[t]), delete e[t];
                    for (r in s)
                        r in e || (e[r] = s[r])
                }
            for (t in e) {
                if (n = e[t], H.isArray(n) ? (p.animatedProperties[t] = n[1], n = e[t] = n[0]) : p.animatedProperties[t] = p.specialEasing && p.specialEasing[t] || p.easing || "swing", "hide" === n && m || "show" === n && !m)
                    return p.complete.call(this);
                !h || "height" !== t && "width" !== t || (p.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === H.css(this, "display") && "none" === H.css(this, "float") && (H.support.inlineBlockNeedsLayout && "inline" !== D(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
            }
            null != p.overflow && (this.style.overflow = "hidden");
            for (r in e)
                i = new H.fx(this, p, r), n = e[r], xn.test(n) ? (d = H._data(this, "toggle" + r) || ("toggle" === n ? m ? "show" : "hide" : 0), d ? (H._data(this, "toggle" + r, "show" === d ? "hide" : "show"), i[d]()) : i[n]()) : (l = Tn.exec(n), u = i.cur(), l ? (c = parseFloat(l[2]), f = l[3] || (H.cssNumber[r] ? "" : "px"), "px" !== f && (H.style(this, r, (c || 1) + f), u = (c || 1) / i.cur() * u, H.style(this, r, u + f)), l[1] && (c = ("-=" === l[1] ? -1 : 1) * c + u), i.custom(u, c, f)) : i.custom(u, n, ""));
            return !0
        }
        var o = H.speed(t, n, r);
        return H.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = H.extend({}, e), o.queue === !1 ? this.each(i) : this.queue(o.queue, i))
    },stop: function(e, n, r) {
        return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
            function t(e, t, n) {
                var i = t[n];
                H.removeData(e, n, !0), i.stop(r)
            }
            var n, i = !1, o = H.timers, a = H._data(this);
            if (r || H._unmark(!0, this), null == e)
                for (n in a)
                    a[n] && a[n].stop && n.indexOf(".run") === n.length - 4 && t(this, a, n);
            else
                a[n = e + ".run"] && a[n].stop && t(this, a, n);
            for (n = o.length; n--; )
                o[n].elem !== this || null != e && o[n].queue !== e || (r ? o[n](!0) : o[n].saveState(), i = !0, o.splice(n, 1));
            r && i || H.dequeue(this, e)
        })
    }}), H.each({slideDown: L("show", 1),slideUp: L("hide", 1),slideToggle: L("toggle", 1),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        H.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), H.extend({speed: function(e, t, n) {
        var r = e && "object" == typeof e ? H.extend({}, e) : {complete: n || !n && t || H.isFunction(e) && e,duration: e,easing: n && t || t && !H.isFunction(t) && t};
        return r.duration = H.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in H.fx.speeds ? H.fx.speeds[r.duration] : H.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function(e) {
            H.isFunction(r.old) && r.old.call(this), r.queue ? H.dequeue(this, r.queue) : e !== !1 && H._unmark(this)
        }, r
    },easing: {linear: function(e) {
        return e
    },swing: function(e) {
        return -Math.cos(e * Math.PI) / 2 + .5
    }},timers: [],fx: function(e, t, n) {
        this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
    }}), H.fx.prototype = {update: function() {
        this.options.step && this.options.step.call(this.elem, this.now, this), (H.fx.step[this.prop] || H.fx.step._default)(this)
    },cur: function() {
        if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
            return this.elem[this.prop];
        var e, t = H.css(this.elem, this.prop);
        return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
    },custom: function(e, n, r) {
        function i(e) {
            return o.step(e)
        }
        var o = this, a = H.fx;
        this.startTime = vn || S(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (H.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function() {
            H._data(o.elem, "fxshow" + o.prop) === t && (o.options.hide ? H._data(o.elem, "fxshow" + o.prop, o.start) : o.options.show && H._data(o.elem, "fxshow" + o.prop, o.end))
        }, i() && H.timers.push(i) && !yn && (yn = setInterval(a.tick, a.interval))
    },show: function() {
        var e = H._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = e || H.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), H(this.elem).show()
    },hide: function() {
        this.options.orig[this.prop] = H._data(this.elem, "fxshow" + this.prop) || H.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    },step: function(e) {
        var t, n, r, i = vn || S(), o = !0, a = this.elem, s = this.options;
        if (e || i >= s.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), s.animatedProperties[this.prop] = !0;
            for (t in s.animatedProperties)
                s.animatedProperties[t] !== !0 && (o = !1);
            if (o) {
                if (null == s.overflow || H.support.shrinkWrapBlocks || H.each(["", "X", "Y"], function(e, t) {
                    a.style["overflow" + t] = s.overflow[e]
                }), s.hide && H(a).hide(), s.hide || s.show)
                    for (t in s.animatedProperties)
                        H.style(a, t, s.orig[t]), H.removeData(a, "fxshow" + t, !0), H.removeData(a, "toggle" + t, !0);
                r = s.complete, r && (s.complete = !1, r.call(a))
            }
            return !1
        }
        return 1 / 0 == s.duration ? this.now = i : (n = i - this.startTime, this.state = n / s.duration, this.pos = H.easing[s.animatedProperties[this.prop]](this.state, n, 0, 1, s.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
    }}, H.extend(H.fx, {tick: function() {
        for (var e, t = H.timers, n = 0; n < t.length; n++)
            e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || H.fx.stop()
    },interval: 13,stop: function() {
        clearInterval(yn), yn = null
    },speeds: {slow: 600,fast: 200,_default: 400},step: {opacity: function(e) {
        H.style(e.elem, "opacity", e.now)
    },_default: function(e) {
        e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
    }}}), H.each(wn.concat.apply([], wn), function(e, t) {
        t.indexOf("margin") && (H.fx.step[t] = function(e) {
            H.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }), H.expr && H.expr.filters && (H.expr.filters.animated = function(e) {
        return H.grep(H.timers, function(t) {
            return e === t.elem
        }).length
    });
    var Nn, Cn = /^t(?:able|d|h)$/i, En = /^(?:body|html)$/i;
    Nn = "getBoundingClientRect" in F.documentElement ? function(e, t, n, r) {
        try {
            r = e.getBoundingClientRect()
        } catch (i) {
        }
        if (!r || !H.contains(n, e))
            return r ? {top: r.top,left: r.left} : {top: 0,left: 0};
        var o = t.body, a = j(t), s = n.clientTop || o.clientTop || 0, l = n.clientLeft || o.clientLeft || 0, u = a.pageYOffset || H.support.boxModel && n.scrollTop || o.scrollTop, c = a.pageXOffset || H.support.boxModel && n.scrollLeft || o.scrollLeft, f = r.top + u - s, d = r.left + c - l;
        return {top: f,left: d}
    } : function(e, t, n) {
        for (var r, i = e.offsetParent, o = e, a = t.body, s = t.defaultView, l = s ? s.getComputedStyle(e, null) : e.currentStyle, u = e.offsetTop, c = e.offsetLeft; (e = e.parentNode) && e !== a && e !== n && (!H.support.fixedPosition || "fixed" !== l.position); )
            r = s ? s.getComputedStyle(e, null) : e.currentStyle, u -= e.scrollTop, c -= e.scrollLeft, e === i && (u += e.offsetTop, c += e.offsetLeft, !H.support.doesNotAddBorder || H.support.doesAddBorderForTableAndCells && Cn.test(e.nodeName) || (u += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), o = i, i = e.offsetParent), H.support.subtractsBorderForOverflowNotVisible && "visible" !== r.overflow && (u += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), l = r;
        return ("relative" === l.position || "static" === l.position) && (u += a.offsetTop, c += a.offsetLeft), H.support.fixedPosition && "fixed" === l.position && (u += Math.max(n.scrollTop, a.scrollTop), c += Math.max(n.scrollLeft, a.scrollLeft)), {top: u,left: c}
    }, H.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                H.offset.setOffset(this, e, t)
            });
        var n = this[0], r = n && n.ownerDocument;
        return r ? n === r.body ? H.offset.bodyOffset(n) : Nn(n, r, r.documentElement) : null
    }, H.offset = {bodyOffset: function(e) {
        var t = e.offsetTop, n = e.offsetLeft;
        return H.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(H.css(e, "marginTop")) || 0, n += parseFloat(H.css(e, "marginLeft")) || 0), {top: t,left: n}
    },setOffset: function(e, t, n) {
        var r = H.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i, o, a = H(e), s = a.offset(), l = H.css(e, "top"), u = H.css(e, "left"), c = ("absolute" === r || "fixed" === r) && H.inArray("auto", [l, u]) > -1, f = {}, d = {};
        c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), H.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
    }}, H.fn.extend({position: function() {
        if (!this[0])
            return null;
        var e = this[0], t = this.offsetParent(), n = this.offset(), r = En.test(t[0].nodeName) ? {top: 0,left: 0} : t.offset();
        return n.top -= parseFloat(H.css(e, "marginTop")) || 0, n.left -= parseFloat(H.css(e, "marginLeft")) || 0, r.top += parseFloat(H.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(H.css(t[0], "borderLeftWidth")) || 0, {top: n.top - r.top,left: n.left - r.left}
    },offsetParent: function() {
        return this.map(function() {
            for (var e = this.offsetParent || F.body; e && !En.test(e.nodeName) && "static" === H.css(e, "position"); )
                e = e.offsetParent;
            return e
        })
    }}), H.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(e, n) {
        var r = /Y/.test(n);
        H.fn[e] = function(i) {
            return H.access(this, function(e, i, o) {
                var a = j(e);
                return o === t ? a ? n in a ? a[n] : H.support.boxModel && a.document.documentElement[i] || a.document.body[i] : e[i] : void (a ? a.scrollTo(r ? H(a).scrollLeft() : o, r ? o : H(a).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), H.each({Height: "height",Width: "width"}, function(e, n) {
        var r = "client" + e, i = "scroll" + e, o = "offset" + e;
        H.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(H.css(e, n, "padding")) : this[n]() : null
        }, H.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(H.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }, H.fn[n] = function(e) {
            return H.access(this, function(e, n, a) {
                var s, l, u, c;
                return H.isWindow(e) ? (s = e.document, l = s.documentElement[r], H.support.boxModel && l || s.body && s.body[r] || l) : 9 === e.nodeType ? (s = e.documentElement, s[r] >= s[i] ? s[r] : Math.max(e.body[i], s[i], e.body[o], s[o])) : a === t ? (u = H.css(e, n), c = parseFloat(u), H.isNumeric(c) ? c : u) : void H(e).css(n, a)
            }, n, e, arguments.length, null)
        }
    }), e.jQuery = e.$ = H, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return H
    })
}(window);
;
!function(t, e) {
    function i(e, i) {
        var o, n, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (o = e.parentNode, n = o.name, e.href && n && "map" === o.nodeName.toLowerCase() ? (r = t("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && s(e)
    }
    function s(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var o = 0, n = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {version: "1.10.3",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,NUMPAD_ADD: 107,NUMPAD_DECIMAL: 110,NUMPAD_DIVIDE: 111,NUMPAD_ENTER: 108,NUMPAD_MULTIPLY: 106,NUMPAD_SUBTRACT: 109,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}}), t.fn.extend({focus: function(e) {
        return function(i, s) {
            return "number" == typeof i ? this.each(function() {
                var e = this;
                setTimeout(function() {
                    t(e).focus(), s && s.call(e)
                }, i)
            }) : e.apply(this, arguments)
        }
    }(t.fn.focus),scrollParent: function() {
        var e;
        return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
            return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
        }).eq(0) : this.parents().filter(function() {
            return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
    },zIndex: function(i) {
        if (i !== e)
            return this.css("zIndex", i);
        if (this.length)
            for (var s, o, n = t(this[0]); n.length && n[0] !== document; ) {
                if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (o = parseInt(n.css("zIndex"), 10), !isNaN(o) && 0 !== o))
                    return o;
                n = n.parent()
            }
        return 0
    },uniqueId: function() {
        return this.each(function() {
            this.id || (this.id = "ui-id-" + ++o)
        })
    },removeUniqueId: function() {
        return this.each(function() {
            n.test(this.id) && t(this).removeAttr("id")
        })
    }}), t.extend(t.expr[":"], {data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
        return function(i) {
            return !!t.data(i, e)
        }
    }) : function(e, i, s) {
        return !!t.data(e, s[3])
    },focusable: function(e) {
        return i(e, !isNaN(t.attr(e, "tabindex")))
    },tabbable: function(e) {
        var s = t.attr(e, "tabindex"), o = isNaN(s);
        return (o || s >= 0) && i(e, !o)
    }}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
        function o(e, i, s, o) {
            return t.each(n, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], r = s.toLowerCase(), a = {innerWidth: t.fn.innerWidth,innerHeight: t.fn.innerHeight,outerWidth: t.fn.outerWidth,outerHeight: t.fn.outerHeight};
        t.fn["inner" + s] = function(i) {
            return i === e ? a["inner" + s].call(this) : this.each(function() {
                t(this).css(r, o(this, i) + "px")
            })
        }, t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? a["outer" + s].call(this, e) : this.each(function() {
                t(this).css(r, o(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({disableSelection: function() {
        return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
            t.preventDefault()
        })
    },enableSelection: function() {
        return this.unbind(".ui-disableSelection")
    }}), t.extend(t.ui, {plugin: {add: function(e, i, s) {
        var o, n = t.ui[e].prototype;
        for (o in s)
            n.plugins[o] = n.plugins[o] || [], n.plugins[o].push([i, s[o]])
    },call: function(t, e, i) {
        var s, o = t.plugins[e];
        if (o && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
            for (s = 0; s < o.length; s++)
                t.options[o[s][0]] && o[s][1].apply(t.element, i)
    }},hasScroll: function(e, i) {
        if ("hidden" === t(e).css("overflow"))
            return !1;
        var s = i && "left" === i ? "scrollLeft" : "scrollTop", o = !1;
        return e[s] > 0 ? !0 : (e[s] = 1, o = e[s] > 0, e[s] = 0, o)
    }})
}(jQuery), function(t, e) {
    var i = 0, s = Array.prototype.slice, o = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++)
            try {
                t(i).triggerHandler("remove")
            } catch (n) {
            }
        o(e)
    }, t.widget = function(e, i, s) {
        var o, n, r, a, h = {}, l = e.split(".")[0];
        e = e.split(".")[1], o = l + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[l] = t[l] || {}, n = t[l][e], r = t[l][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new r(t, e)
        }, t.extend(r, n, {version: s.version,_proto: t.extend({}, s),_childConstructors: []}), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? void (h[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments)
                }, o = function(t) {
                    return i.prototype[e].apply(this, t)
                };
                return function() {
                    var e, i = this._super, n = this._superApply;
                    return this._super = t, this._superApply = o, e = s.apply(this, arguments), this._super = i, this._superApply = n, e
                }
            }()) : void (h[e] = s)
        }), r.prototype = t.widget.extend(a, {widgetEventPrefix: n ? a.widgetEventPrefix : e}, h, {constructor: r,namespace: l,widgetName: e,widgetFullName: o}), n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete n._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r)
    }, t.widget.extend = function(i) {
        for (var o, n, r = s.call(arguments, 1), a = 0, h = r.length; h > a; a++)
            for (o in r[a])
                n = r[a][o], r[a].hasOwnProperty(o) && n !== e && (i[o] = t.isPlainObject(n) ? t.isPlainObject(i[o]) ? t.widget.extend({}, i[o], n) : t.widget.extend({}, n) : n);
        return i
    }, t.widget.bridge = function(i, o) {
        var n = o.prototype.widgetFullName || i;
        t.fn[i] = function(r) {
            var a = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !a && h.length ? t.widget.extend.apply(null, [r].concat(h)) : r, this.each(a ? function() {
                var s, o = t.data(this, n);
                return o ? t.isFunction(o[r]) && "_" !== r.charAt(0) ? (s = o[r].apply(o, h), s !== o && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : void 0) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
            } : function() {
                var e = t.data(this, n);
                e ? e.option(r || {})._init() : t.data(this, n, new o(r, this))
            }), l
        }
    }, t.Widget = function() {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: !1,create: null},_createWidget: function(e, s) {
        s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function(t) {
            t.target === s && this.destroy()
        }}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },_getCreateOptions: t.noop,_getCreateEventData: t.noop,_create: t.noop,_init: t.noop,destroy: function() {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },_destroy: t.noop,widget: function() {
        return this.element
    },option: function(i, s) {
        var o, n, r, a = i;
        if (0 === arguments.length)
            return t.widget.extend({}, this.options);
        if ("string" == typeof i)
            if (a = {}, o = i.split("."), i = o.shift(), o.length) {
                for (n = a[i] = t.widget.extend({}, this.options[i]), r = 0; r < o.length - 1; r++)
                    n[o[r]] = n[o[r]] || {}, n = n[o[r]];
                if (i = o.pop(), s === e)
                    return n[i] === e ? null : n[i];
                n[i] = s
            } else {
                if (s === e)
                    return this.options[i] === e ? null : this.options[i];
                a[i] = s
            }
        return this._setOptions(a), this
    },_setOptions: function(t) {
        var e;
        for (e in t)
            this._setOption(e, t[e]);
        return this
    },_setOption: function(t, e) {
        return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    },enable: function() {
        return this._setOption("disabled", !1)
    },disable: function() {
        return this._setOption("disabled", !0)
    },_on: function(e, i, s) {
        var o, n = this;
        "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, o = this.widget()), t.each(s, function(s, r) {
            function a() {
                return e || n.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? n[r] : r).apply(n, arguments) : void 0
            }
            "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
            var h = s.match(/^(\w+)\s*(.*)$/), l = h[1] + n.eventNamespace, c = h[2];
            c ? o.delegate(c, l, a) : i.bind(l, a)
        })
    },_off: function(t, e) {
        e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
    },_delay: function(t, e) {
        function i() {
            return ("string" == typeof t ? s[t] : t).apply(s, arguments)
        }
        var s = this;
        return setTimeout(i, e || 0)
    },_hoverable: function(e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function(e) {
            t(e.currentTarget).addClass("ui-state-hover")
        },mouseleave: function(e) {
            t(e.currentTarget).removeClass("ui-state-hover")
        }})
    },_focusable: function(e) {
        this.focusable = this.focusable.add(e), this._on(e, {focusin: function(e) {
            t(e.currentTarget).addClass("ui-state-focus")
        },focusout: function(e) {
            t(e.currentTarget).removeClass("ui-state-focus")
        }})
    },_trigger: function(e, i, s) {
        var o, n, r = this.options[e];
        if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], n = i.originalEvent)
            for (o in n)
                o in i || (i[o] = n[o]);
        return this.element.trigger(i, s), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }}, t.each({show: "fadeIn",hide: "fadeOut"}, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, o, n) {
            "string" == typeof o && (o = {effect: o});
            var r, a = o ? o === !0 || "number" == typeof o ? i : o.effect || i : e;
            o = o || {}, "number" == typeof o && (o = {duration: o}), r = !t.isEmptyObject(o), o.complete = n, o.delay && s.delay(o.delay), r && t.effects && t.effects.effect[a] ? s[e](o) : a !== e && s[a] ? s[a](o.duration, o.easing, n) : s.queue(function(i) {
                t(this)[e](), n && n.call(s[0]), i()
            })
        }
    })
}(jQuery), function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {version: "1.10.3",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
        var e = this;
        this.element.bind("mousedown." + this.widgetName, function(t) {
            return e._mouseDown(t)
        }).bind("click." + this.widgetName, function(i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
        }), this.started = !1
    },_mouseDestroy: function() {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },_mouseDown: function(i) {
        if (!e) {
            this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
            var s = this, o = 1 === i.which, n = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
            return o && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                s.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                return s._mouseMove(t)
            }, this._mouseUpDelegate = function(t) {
                return s._mouseUp(t)
            }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
        }
    },_mouseMove: function(e) {
        return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
    },_mouseUp: function(e) {
        return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
    },_mouseDistanceMet: function(t) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
    },_mouseDelayMet: function() {
        return this.mouseDelayMet
    },_mouseStart: function() {
    },_mouseDrag: function() {
    },_mouseStop: function() {
    },_mouseCapture: function() {
        return !0
    }})
}(jQuery), function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
    }
    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }
    function o(e) {
        var i = e[0];
        return 9 === i.nodeType ? {width: e.width(),height: e.height(),offset: {top: 0,left: 0}} : t.isWindow(i) ? {width: e.width(),height: e.height(),offset: {top: e.scrollTop(),left: e.scrollLeft()}} : i.preventDefault ? {width: 0,height: 0,offset: {top: i.pageY,left: i.pageX}} : {width: e.outerWidth(),height: e.outerHeight(),offset: e.offset()}
    }
    t.ui = t.ui || {};
    var n, r = Math.max, a = Math.abs, h = Math.round, l = /left|center|right/, c = /top|center|bottom/, p = /[\+\-]\d+(\.[\d]+)?%?/, f = /^\w+/, u = /%$/, d = t.fn.position;
    t.position = {scrollbarWidth: function() {
        if (n !== e)
            return n;
        var i, s, o = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = o.children()[0];
        return t("body").append(o), i = r.offsetWidth, o.css("overflow", "scroll"), s = r.offsetWidth, i === s && (s = o[0].clientWidth), o.remove(), n = i - s
    },getScrollInfo: function(e) {
        var i = e.isWindow ? "" : e.element.css("overflow-x"), s = e.isWindow ? "" : e.element.css("overflow-y"), o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, n = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return {width: n ? t.position.scrollbarWidth() : 0,height: o ? t.position.scrollbarWidth() : 0}
    },getWithinInfo: function(e) {
        var i = t(e || window), s = t.isWindow(i[0]);
        return {element: i,isWindow: s,offset: i.offset() || {left: 0,top: 0},scrollLeft: i.scrollLeft(),scrollTop: i.scrollTop(),width: s ? i.width() : i.outerWidth(),height: s ? i.height() : i.outerHeight()}
    }}, t.fn.position = function(e) {
        if (!e || !e.of)
            return d.apply(this, arguments);
        e = t.extend({}, e);
        var n, u, g, m, v, _, b = t(e.of), P = t.position.getWithinInfo(e.within), w = t.position.getScrollInfo(P), y = (e.collision || "flip").split(" "), I = {};
        return _ = o(b), b[0].preventDefault && (e.at = "left top"), u = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = p.exec(s[0]), i = p.exec(s[1]), I[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [f.exec(s[0])[0], f.exec(s[1])[0]]
        }), 1 === y.length && (y[1] = y[0]), "right" === e.at[0] ? v.left += u : "center" === e.at[0] && (v.left += u / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), n = i(I.at, u, g), v.left += n[0], v.top += n[1], this.each(function() {
            var o, l, c = t(this), p = c.outerWidth(), f = c.outerHeight(), d = s(this, "marginLeft"), _ = s(this, "marginTop"), x = p + d + s(this, "marginRight") + w.width, C = f + _ + s(this, "marginBottom") + w.height, T = t.extend({}, v), S = i(I.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? T.left -= p : "center" === e.my[0] && (T.left -= p / 2), "bottom" === e.my[1] ? T.top -= f : "center" === e.my[1] && (T.top -= f / 2), T.left += S[0], T.top += S[1], t.support.offsetFractions || (T.left = h(T.left), T.top = h(T.top)), o = {marginLeft: d,marginTop: _}, t.each(["left", "top"], function(i, s) {
                t.ui.position[y[i]] && t.ui.position[y[i]][s](T, {targetWidth: u,targetHeight: g,elemWidth: p,elemHeight: f,collisionPosition: o,collisionWidth: x,collisionHeight: C,offset: [n[0] + S[0], n[1] + S[1]],my: e.my,at: e.at,within: P,elem: c})
            }), e.using && (l = function(t) {
                var i = m.left - T.left, s = i + u - p, o = m.top - T.top, n = o + g - f, h = {target: {element: b,left: m.left,top: m.top,width: u,height: g},element: {element: c,left: T.left,top: T.top,width: p,height: f},horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",vertical: 0 > n ? "top" : o > 0 ? "bottom" : "middle"};
                p > u && a(i + s) < u && (h.horizontal = "center"), f > g && a(o + n) < g && (h.vertical = "middle"), h.important = r(a(i), a(s)) > r(a(o), a(n)) ? "horizontal" : "vertical", e.using.call(this, t, h)
            }), c.offset(t.extend(T, {using: l}))
        })
    }, t.ui.position = {fit: {left: function(t, e) {
        var i, s = e.within, o = s.isWindow ? s.scrollLeft : s.offset.left, n = s.width, a = t.left - e.collisionPosition.marginLeft, h = o - a, l = a + e.collisionWidth - n - o;
        e.collisionWidth > n ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - n - o, t.left += h - i) : t.left = l > 0 && 0 >= h ? o : h > l ? o + n - e.collisionWidth : o : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = r(t.left - a, t.left)
    },top: function(t, e) {
        var i, s = e.within, o = s.isWindow ? s.scrollTop : s.offset.top, n = e.within.height, a = t.top - e.collisionPosition.marginTop, h = o - a, l = a + e.collisionHeight - n - o;
        e.collisionHeight > n ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - n - o, t.top += h - i) : t.top = l > 0 && 0 >= h ? o : h > l ? o + n - e.collisionHeight : o : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = r(t.top - a, t.top)
    }},flip: {left: function(t, e) {
        var i, s, o = e.within, n = o.offset.left + o.scrollLeft, r = o.width, h = o.isWindow ? o.scrollLeft : o.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, p = l + e.collisionWidth - r - h, f = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, u = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, d = -2 * e.offset[0];
        0 > c ? (i = t.left + f + u + d + e.collisionWidth - r - n, (0 > i || i < a(c)) && (t.left += f + u + d)) : p > 0 && (s = t.left - e.collisionPosition.marginLeft + f + u + d - h, (s > 0 || a(s) < p) && (t.left += f + u + d))
    },top: function(t, e) {
        var i, s, o = e.within, n = o.offset.top + o.scrollTop, r = o.height, h = o.isWindow ? o.scrollTop : o.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, p = l + e.collisionHeight - r - h, f = "top" === e.my[1], u = f ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
        0 > c ? (s = t.top + u + d + g + e.collisionHeight - r - n, t.top + u + d + g > c && (0 > s || s < a(c)) && (t.top += u + d + g)) : p > 0 && (i = t.top - e.collisionPosition.marginTop + u + d + g - h, t.top + u + d + g > p && (i > 0 || a(i) < p) && (t.top += u + d + g))
    }},flipfit: {left: function() {
        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
    },top: function() {
        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
    }}}, function() {
        var e, i, s, o, n, r = document.getElementsByTagName("body")[0], a = document.createElement("div");
        e = document.createElement(r ? "div" : "body"), s = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"}, r && t.extend(s, {position: "absolute",left: "-1000px",top: "-1000px"});
        for (n in s)
            e.style[n] = s[n];
        e.appendChild(a), i = r || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", o = t(a).offset().left, t.support.offsetFractions = o > 10 && 11 > o, e.innerHTML = "", i.removeChild(e)
    }()
}(jQuery), function(t) {
    t.widget("ui.draggable", t.ui.mouse, {version: "1.10.3",widgetEventPrefix: "drag",options: {addClasses: !0,appendTo: "parent",axis: !1,connectToSortable: !1,containment: !1,cursor: "auto",cursorAt: !1,grid: !1,handle: !1,helper: "original",iframeFix: !1,opacity: !1,refreshPositions: !1,revert: !1,revertDuration: 500,scope: "default",scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,snap: !1,snapMode: "both",snapTolerance: 20,stack: !1,zIndex: !1,drag: null,start: null,stop: null},_create: function() {
        "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    },_destroy: function() {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
    },_mouseCapture: function(e) {
        var i = this.options;
        return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
            t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px",height: this.offsetHeight + "px",position: "absolute",opacity: "0.001",zIndex: 1e3}).css(t(this).offset()).appendTo("body")
        }), !0) : !1)
    },_mouseStart: function(e) {
        var i = this.options;
        return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, this.offset.scroll = !1, t.extend(this.offset, {click: {left: e.pageX - this.offset.left,top: e.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
    },_mouseDrag: function(e, i) {
        if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
            var s = this._uiHash();
            if (this._trigger("drag", e, s) === !1)
                return this._mouseUp({}), !1;
            this.position = s.position
        }
        return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
    },_mouseStop: function(e) {
        var i = this, s = !1;
        return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
            i._trigger("stop", e) !== !1 && i._clear()
        }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
    },_mouseUp: function(e) {
        return t("div.ui-draggable-iframeFix").each(function() {
            this.parentNode.removeChild(this)
        }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
    },cancel: function() {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },_getHandle: function(e) {
        return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
    },_createHelper: function(e) {
        var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
        return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
    },_adjustOffsetFromHelper: function(e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0],top: +e[1] || 0}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },_getParentOffset: function() {
        var e = this.offsetParent.offset();
        return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0,left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    },_getRelativeOffset: function() {
        if ("relative" === this.cssPosition) {
            var t = this.element.position();
            return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return {top: 0,left: 0}
    },_cacheMargins: function() {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0,top: parseInt(this.element.css("marginTop"), 10) || 0,right: parseInt(this.element.css("marginRight"), 10) || 0,bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    },_cacheHelperProportions: function() {
        this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
    },_setContainment: function() {
        var e, i, s, o = this.options;
        return o.containment ? "window" === o.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void (this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), i = t(o.containment), s = i[0], void (s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void (this.containment = null)
    },_convertPositionTo: function(e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
        return this.offset.scroll || (this.offset.scroll = {top: o.scrollTop(),left: o.scrollLeft()}), {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s}
    },_generatePosition: function(e) {
        var i, s, o, n, r = this.options, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = e.pageX, l = e.pageY;
        return this.offset.scroll || (this.offset.scroll = {top: a.scrollTop(),left: a.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), r.grid && (o = r.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, l = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - r.grid[1] : o + r.grid[1] : o, n = r.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, h = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - r.grid[0] : n + r.grid[0] : n)), {top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)}
    },_clear: function() {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    },_trigger: function(e, i, s) {
        return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
    },plugins: {},_uiHash: function() {
        return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs}
    }}), t.ui.plugin.add("draggable", "connectToSortable", {start: function(e, i) {
        var s = t(this).data("ui-draggable"), o = s.options, n = t.extend({}, i, {item: s.element});
        s.sortables = [], t(o.connectToSortable).each(function() {
            var i = t.data(this, "ui-sortable");
            i && !i.options.disabled && (s.sortables.push({instance: i,shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", e, n))
        })
    },stop: function(e, i) {
        var s = t(this).data("ui-draggable"), o = t.extend({}, i, {item: s.element});
        t.each(s.sortables, function() {
            this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({top: "auto",left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, o))
        })
    },drag: function(e, i) {
        var s = t(this).data("ui-draggable"), o = this;
        t.each(s.sortables, function() {
            var n = !1, r = this;
            this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (n = !0, t.each(s.sortables, function() {
                return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && t.contains(r.instance.element[0], this.instance.element[0]) && (n = !1), n
            })), n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                return i.helper[0]
            }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
        })
    }}), t.ui.plugin.add("draggable", "cursor", {start: function() {
        var e = t("body"), i = t(this).data("ui-draggable").options;
        e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
    },stop: function() {
        var e = t(this).data("ui-draggable").options;
        e._cursor && t("body").css("cursor", e._cursor)
    }}), t.ui.plugin.add("draggable", "opacity", {start: function(e, i) {
        var s = t(i.helper), o = t(this).data("ui-draggable").options;
        s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
    },stop: function(e, i) {
        var s = t(this).data("ui-draggable").options;
        s._opacity && t(i.helper).css("opacity", s._opacity)
    }}), t.ui.plugin.add("draggable", "scroll", {start: function() {
        var e = t(this).data("ui-draggable");
        e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
    },drag: function(e) {
        var i = t(this).data("ui-draggable"), s = i.options, o = !1;
        i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? o = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (o = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? o = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (o = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
    }}), t.ui.plugin.add("draggable", "snap", {start: function() {
        var e = t(this).data("ui-draggable"), i = e.options;
        e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
            var i = t(this), s = i.offset();
            this !== e.element[0] && e.snapElements.push({item: this,width: i.outerWidth(),height: i.outerHeight(),top: s.top,left: s.left})
        })
    },drag: function(e, i) {
        var s, o, n, r, a, h, l, c, p, f, u = t(this).data("ui-draggable"), d = u.options, g = d.snapTolerance, m = i.offset.left, v = m + u.helperProportions.width, _ = i.offset.top, b = _ + u.helperProportions.height;
        for (p = u.snapElements.length - 1; p >= 0; p--)
            a = u.snapElements[p].left, h = a + u.snapElements[p].width, l = u.snapElements[p].top, c = l + u.snapElements[p].height, a - g > v || m > h + g || l - g > b || _ > c + g || !t.contains(u.snapElements[p].item.ownerDocument, u.snapElements[p].item) ? (u.snapElements[p].snapping && u.options.snap.release && u.options.snap.release.call(u.element, e, t.extend(u._uiHash(), {snapItem: u.snapElements[p].item})), u.snapElements[p].snapping = !1) : ("inner" !== d.snapMode && (s = Math.abs(l - b) <= g, o = Math.abs(c - _) <= g, n = Math.abs(a - v) <= g, r = Math.abs(h - m) <= g, s && (i.position.top = u._convertPositionTo("relative", {top: l - u.helperProportions.height,left: 0}).top - u.margins.top), o && (i.position.top = u._convertPositionTo("relative", {top: c,left: 0}).top - u.margins.top), n && (i.position.left = u._convertPositionTo("relative", {top: 0,left: a - u.helperProportions.width}).left - u.margins.left), r && (i.position.left = u._convertPositionTo("relative", {top: 0,left: h}).left - u.margins.left)), f = s || o || n || r, "outer" !== d.snapMode && (s = Math.abs(l - _) <= g, o = Math.abs(c - b) <= g, n = Math.abs(a - m) <= g, r = Math.abs(h - v) <= g, s && (i.position.top = u._convertPositionTo("relative", {top: l,left: 0}).top - u.margins.top), o && (i.position.top = u._convertPositionTo("relative", {top: c - u.helperProportions.height,left: 0}).top - u.margins.top), n && (i.position.left = u._convertPositionTo("relative", {top: 0,left: a}).left - u.margins.left), r && (i.position.left = u._convertPositionTo("relative", {top: 0,left: h - u.helperProportions.width}).left - u.margins.left)), !u.snapElements[p].snapping && (s || o || n || r || f) && u.options.snap.snap && u.options.snap.snap.call(u.element, e, t.extend(u._uiHash(), {snapItem: u.snapElements[p].item})), u.snapElements[p].snapping = s || o || n || r || f)
    }}), t.ui.plugin.add("draggable", "stack", {start: function() {
        var e, i = this.data("ui-draggable").options, s = t.makeArray(t(i.stack)).sort(function(e, i) {
            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
        });
        s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
            t(this).css("zIndex", e + i)
        }), this.css("zIndex", e + s.length))
    }}), t.ui.plugin.add("draggable", "zIndex", {start: function(e, i) {
        var s = t(i.helper), o = t(this).data("ui-draggable").options;
        s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
    },stop: function(e, i) {
        var s = t(this).data("ui-draggable").options;
        s._zIndex && t(i.helper).css("zIndex", s._zIndex)
    }})
}(jQuery), function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {version: "1.10.3",widgetEventPrefix: "sort",ready: !1,options: {appendTo: "parent",axis: !1,connectWith: !1,containment: !1,cursor: "auto",cursorAt: !1,dropOnEmpty: !0,forcePlaceholderSize: !1,forceHelperSize: !1,grid: !1,handle: !1,helper: "original",items: "> *",opacity: !1,placeholder: !1,revert: !1,scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1e3,activate: null,beforeStop: null,change: null,deactivate: null,out: null,over: null,receive: null,remove: null,sort: null,start: null,stop: null,update: null},_create: function() {
        var t = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    },_destroy: function() {
        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--)
            this.items[t].item.removeData(this.widgetName + "-item");
        return this
    },_setOption: function(e, i) {
        "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
    },_mouseCapture: function(e, i) {
        var s = null, o = !1, n = this;
        return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
            return t.data(this, n.widgetName + "-item") === n ? (s = t(this), !1) : void 0
        }), t.data(e.target, n.widgetName + "-item") === n && (s = t(e.target)), s && (!this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
            this === e.target && (o = !0)
        }), o)) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1)
    },_mouseStart: function(e, i, s) {
        var o, n, r = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, t.extend(this.offset, {click: {left: e.pageX - this.offset.left,top: e.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(n)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
            for (o = this.containers.length - 1; o >= 0; o--)
                this.containers[o]._trigger("activate", e, this._uiHash(this));
        return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
    },_mouseDrag: function(e) {
        var i, s, o, n, r = this.options, a = !1;
        for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)), e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))), a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
            if (s = this.items[i], o = s.item[0], n = this._intersectsWithPointer(s), n && s.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], o) : !0)) {
                if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                    break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break
            }
        return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },_mouseStop: function(e, i) {
        if (e) {
            if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                var s = this, o = this.placeholder.offset(), n = this.options.axis, r = {};
                n && "x" !== n || (r.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (r.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                    s._clear(e)
                })
            } else
                this._clear(e, i);
            return !1
        }
    },cancel: function() {
        if (this.dragging) {
            this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var e = this.containers.length - 1; e >= 0; e--)
                this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {helper: null,dragging: !1,reverting: !1,_noFinalSort: null}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
    },serialize: function(e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, t(i).each(function() {
            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
            i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
        }), !s.length && e.key && s.push(e.key + "="), s.join("&")
    },toArray: function(e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, i.each(function() {
            s.push(t(e.item || this).attr(e.attribute || "id") || "")
        }), s
    },_intersectsWith: function(t) {
        var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, o = s + this.helperProportions.height, n = t.left, r = n + t.width, a = t.top, h = a + t.height, l = this.offset.click.top, c = this.offset.click.left, p = "x" === this.options.axis || s + l > a && h > s + l, f = "y" === this.options.axis || e + c > n && r > e + c, u = p && f;
        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : n < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < s + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < h
    },_intersectsWithPointer: function(t) {
        var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = i && s, n = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
        return o ? this.floating ? r && "right" === r || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
    },_intersectsWithSides: function(t) {
        var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), o = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
        return this.floating && n ? "right" === n && s || "left" === n && !s : o && ("down" === o && i || "up" === o && !i)
    },_getDragVerticalDirection: function() {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? "down" : "up")
    },_getDragHorizontalDirection: function() {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? "right" : "left")
    },refresh: function(t) {
        return this._refreshItems(t), this.refreshPositions(), this
    },_connectWith: function() {
        var t = this.options;
        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
    },_getItemsAsjQuery: function(e) {
        var i, s, o, n, r = [], a = [], h = this._connectWith();
        if (h && e)
            for (i = h.length - 1; i >= 0; i--)
                for (o = t(h[i]), s = o.length - 1; s >= 0; s--)
                    n = t.data(o[s], this.widgetFullName), n && n !== this && !n.options.disabled && a.push([t.isFunction(n.options.items) ? n.options.items.call(n.element) : t(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n]);
        for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--)
            a[i][0].each(function() {
                r.push(this)
            });
        return t(r)
    },_removeCurrentsFromItems: function() {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = t.grep(this.items, function(t) {
            for (var i = 0; i < e.length; i++)
                if (e[i] === t.item[0])
                    return !1;
            return !0
        })
    },_refreshItems: function(e) {
        this.items = [], this.containers = [this];
        var i, s, o, n, r, a, h, l, c = this.items, p = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], f = this._connectWith();
        if (f && this.ready)
            for (i = f.length - 1; i >= 0; i--)
                for (o = t(f[i]), s = o.length - 1; s >= 0; s--)
                    n = t.data(o[s], this.widgetFullName), n && n !== this && !n.options.disabled && (p.push([t.isFunction(n.options.items) ? n.options.items.call(n.element[0], e, {item: this.currentItem}) : t(n.options.items, n.element), n]), this.containers.push(n));
        for (i = p.length - 1; i >= 0; i--)
            for (r = p[i][1], a = p[i][0], s = 0, l = a.length; l > s; s++)
                h = t(a[s]), h.data(this.widgetName + "-item", r), c.push({item: h,instance: r,width: 0,height: 0,left: 0,top: 0})
    },refreshPositions: function(e) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var i, s, o, n;
        for (i = this.items.length - 1; i >= 0; i--)
            s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = o.outerWidth(), s.height = o.outerHeight()), n = o.offset(), s.left = n.left, s.top = n.top);
        if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
        else
            for (i = this.containers.length - 1; i >= 0; i--)
                n = this.containers[i].element.offset(), this.containers[i].containerCache.left = n.left, this.containers[i].containerCache.top = n.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
        return this
    },_createPlaceholder: function(e) {
        e = e || this;
        var i, s = e.options;
        s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {element: function() {
            var s = e.currentItem[0].nodeName.toLowerCase(), o = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
            return "tr" === s ? e.currentItem.children().each(function() {
                t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(o)
            }) : "img" === s && o.attr("src", e.currentItem.attr("src")), i || o.css("visibility", "hidden"), o
        },update: function(t, o) {
            (!i || s.forcePlaceholderSize) && (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
        }}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
    },_contactContainers: function(s) {
        var o, n, r, a, h, l, c, p, f, u, d = null, g = null;
        for (o = this.containers.length - 1; o >= 0; o--)
            if (!t.contains(this.currentItem[0], this.containers[o].element[0]))
                if (this._intersectsWith(this.containers[o].containerCache)) {
                    if (d && t.contains(this.containers[o].element[0], d.element[0]))
                        continue;
                    d = this.containers[o], g = o
                } else
                    this.containers[o].containerCache.over && (this.containers[o]._trigger("out", s, this._uiHash(this)), this.containers[o].containerCache.over = 0);
        if (d)
            if (1 === this.containers.length)
                this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
            else {
                for (r = 1e4, a = null, u = d.floating || i(this.currentItem), h = u ? "left" : "top", l = u ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], n = this.items.length - 1; n >= 0; n--)
                    t.contains(this.containers[g].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (!u || e(this.positionAbs.top + this.offset.click.top, this.items[n].top, this.items[n].height)) && (p = this.items[n].item.offset()[h], f = !1, Math.abs(p - c) > Math.abs(p + this.items[n][l] - c) && (f = !0, p += this.items[n][l]), Math.abs(p - c) < r && (r = Math.abs(p - c), a = this.items[n], this.direction = f ? "up" : "down"));
                if (!a && !this.options.dropOnEmpty)
                    return;
                if (this.currentContainer === this.containers[g])
                    return;
                a ? this._rearrange(s, a, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
            }
    },_createHelper: function(e) {
        var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
        return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
    },_adjustOffsetFromHelper: function(e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0],top: +e[1] || 0}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },_getParentOffset: function() {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0,left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    },_getRelativeOffset: function() {
        if ("relative" === this.cssPosition) {
            var t = this.currentItem.position();
            return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return {top: 0,left: 0}
    },_cacheMargins: function() {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    },_cacheHelperProportions: function() {
        this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
    },_setContainment: function() {
        var e, i, s, o = this.options;
        "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === o.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === o.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], i = t(o.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    },_convertPositionTo: function(e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, n = /(html|body)/i.test(o[0].tagName);
        return {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : o.scrollTop()) * s,left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : o.scrollLeft()) * s}
    },_generatePosition: function(e) {
        var i, s, o = this.options, n = e.pageX, r = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(a[0].tagName);
        return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), o.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / o.grid[1]) * o.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, s = this.originalPageX + Math.round((n - this.originalPageX) / o.grid[0]) * o.grid[0], n = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - o.grid[0] : s + o.grid[0] : s)), {top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : a.scrollTop()),left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : a.scrollLeft())}
    },_rearrange: function(t, e, i, s) {
        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var o = this.counter;
        this._delay(function() {
            o === this.counter && this.refreshPositions(!s)
        })
    },_clear: function(t, e) {
        this.reverting = !1;
        var i, s = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
            for (i in this._storedCSS)
                ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else
            this.currentItem.show();
        for (this.fromOutside && !e && s.push(function(t) {
            this._trigger("receive", t, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
            this._trigger("update", t, this._uiHash())
        }), this !== this.currentContainer && (e || (s.push(function(t) {
            this._trigger("remove", t, this._uiHash())
        }), s.push(function(t) {
            return function(e) {
                t._trigger("receive", e, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), s.push(function(t) {
            return function(e) {
                t._trigger("update", e, this._uiHash(this))
            }
        }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)
            e || s.push(function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
            if (!e) {
                for (this._trigger("beforeStop", t, this._uiHash()), i = 0; i < s.length; i++)
                    s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !1
        }
        if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
            for (i = 0; i < s.length; i++)
                s[i].call(this, t);
            this._trigger("stop", t, this._uiHash())
        }
        return this.fromOutside = !1, !0
    },_trigger: function() {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },_uiHash: function(e) {
        var i = e || this;
        return {helper: i.helper,placeholder: i.placeholder || t([]),position: i.position,originalPosition: i.originalPosition,offset: i.positionAbs,item: i.currentItem,sender: e ? e.element : null}
    }})
}(jQuery);
;
!function() {
    var _after = 1, _afterThrow = 2, _afterFinally = 3, _before = 4, _around = 5, _intro = 6, _regexEnabled = !0, _arguments = "arguments", _undef = "undefined", getType = function() {
        for (var e = Object.prototype.toString, t = {}, r = {1: "element",3: "textnode",9: "document",11: "fragment"}, n = "Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" "), a = n.length; a--; ) {
            var o = n[a], u = window[o];
            if (u)
                try {
                    t[e.call(new u)] = o.toLowerCase()
                } catch (c) {
                }
        }
        return function(n) {
            return null == n && (void 0 === n ? _undef : "null") || n.nodeType && r[n.nodeType] || "number" == typeof n.length && (n.callee && _arguments || n.alert && "window" || n.item && "nodelist") || t[e.call(n)]
        }
    }(), isFunc = function(e) {
        return "function" == getType(e)
    }, weaveOne = function(source, method, advice) {
        var old = source[method];
        if (advice.type != _intro && !isFunc(old)) {
            var oldObject = old;
            old = function() {
                for (var code = arguments.length > 0 ? _arguments + "[0]" : "", i = 1; i < arguments.length; i++)
                    code += "," + _arguments + "[" + i + "]";
                return eval("oldObject(" + code + ");")
            }
        }
        var aspect;
        return advice.type == _after || advice.type == _afterThrow || advice.type == _afterFinally ? aspect = function() {
            var e, t = null;
            try {
                e = old.apply(this, arguments)
            } catch (r) {
                t = r
            }
            if (advice.type == _after) {
                if (null != t)
                    throw t;
                e = advice.value.apply(this, [e, method])
            } else
                advice.type == _afterThrow && null != t ? e = advice.value.apply(this, [t, method]) : advice.type == _afterFinally && (e = advice.value.apply(this, [e, t, method]));
            return e
        } : advice.type == _before ? aspect = function() {
            return advice.value.apply(this, [arguments, method]), old.apply(this, arguments)
        } : advice.type == _intro ? aspect = function() {
            return advice.value.apply(this, arguments)
        } : advice.type == _around && (aspect = function() {
            var e = {object: this,args: Array.prototype.slice.call(arguments)};
            return advice.value.apply(e.object, [{arguments: e.args,method: method,proceed: function() {
                return old.apply(e.object, e.args)
            }}])
        }), aspect.unweave = function() {
            source[method] = old, pointcut = source = aspect = old = null
        }, source[method] = aspect, aspect
    }, search = function(e, t, r) {
        var n = [];
        for (var a in e) {
            var o = null;
            try {
                o = e[a]
            } catch (u) {
            }
            null != o && a.match(t.method) && isFunc(o) && (n[n.length] = {source: e,method: a,advice: r})
        }
        return n
    }, weave = function(e, t) {
        var r = typeof e.target.prototype != _undef ? e.target.prototype : e.target, n = [];
        if (t.type != _intro && typeof r[e.method] == _undef) {
            var a = search(e.target, e, t);
            0 == a.length && (a = search(r, e, t));
            for (var o in a)
                n[n.length] = weaveOne(a[o].source, a[o].method, a[o].advice)
        } else
            n[0] = weaveOne(r, e.method, t);
        return _regexEnabled ? n : n[0]
    };
    jQuery.aop = {after: function(e, t) {
        return weave(e, {type: _after,value: t})
    },afterThrow: function(e, t) {
        return weave(e, {type: _afterThrow,value: t})
    },afterFinally: function(e, t) {
        return weave(e, {type: _afterFinally,value: t})
    },before: function(e, t) {
        return weave(e, {type: _before,value: t})
    },around: function(e, t) {
        return weave(e, {type: _around,value: t})
    },introduction: function(e, t) {
        return weave(e, {type: _intro,value: t})
    },setup: function(e) {
        _regexEnabled = e.regexMatch
    }}
}();
;
!function(e) {
    e.tb = e.tb || {}, e.console = function() {
        var e = function() {
        };
        return {log: e,debug: e,error: e,info: e,warn: e}
    }(), e.log = function() {
    }, e.tb.ajax = function(t) {
        var n = jQuery.extend({}, {cache: !1}, t), i = t && t.context || n;
        if ("jsonp" === n.dataType || "json" === n.dataType)
            return void e.ajax(t);
        var r = /^(\w+:)?\/\/([^\/?#]+)/.exec(n.url), o = r && (r[1] && r[1] !== location.protocol || r[2] !== location.host);
        if (o)
            return void e.log("Sorry, but cross domain request is not allowed, maybe you need to check you url replacment! ^-^<br/>the remote url is: " + r[1] + "//" + r[2]);
        var a = n.success || e.noop;
        n.success = function(t) {
            var n = "string" == typeof t ? e.parseJSON(t) : t;
            if (!n || void 0 === n.no || void 0 === n.data || void 0 === n.error)
                return void a.call(i, {no: -1,data: t,msg: "not json data format"});
            var r = {4: "\u7528\u6237\u672A\u767B\u5F55!",5: "\u63D0\u4EA4\u53C2\u6570\u6821\u9A8C\u5931\u8D25\uFF01",6: "\u5BF9\u4E0D\u8D77\uFF0C\u60A8\u65E0\u6743\u9650\u8FDB\u884C\u6B64\u64CD\u4F5C!",7: "\u8BF7\u4F7F\u7528post\u65B9\u5F0F\u63D0\u4EA4\u6570\u636E!",8: "\u60A8\u7684ID\u88AB\u5C01\u7981!",10: "\u60A8\u8BF4\u7684\u592A\u5FEB\u4E86\uFF0C\u8BF7\u505C\u4E0B\u6765\u5148\u559D\u676F\u8336\u5427!",9000: "\u9700\u8981\u8BBE\u7F6E\u7528\u6237\u540D\u3002"};
            r[n.no] ? 4 == n.no ? TbUtil.login ? TbUtil.login() : e.log("TbUtil.login function is not exists", "warning") : 9e3 === n.no ? TbCom.process("User", "buildUnameFrame") : e.dialog.open('<div style="font-size:12px;color:red;text-align:center;padding:10px;">' + r[n.no] + "</div>", {title: "\u9519\u8BEF\u63D0\u793A",width: 310}) : a.call(i, n)
        }, e.ajax(n)
    }, e.tb.get = function(t, n, i, r) {
        return jQuery.isFunction(n) && (r = r || i, i = n, n = null), e.tb.ajax({type: "GET",url: t,data: n,success: i,dataType: r})
    }, e.tb.post = function(t, n, i, r) {
        jQuery.isFunction(n) && (r = r || i, i = n, n = {});
        var o = "utf-8";
        return "string" == typeof n ? n.indexOf("ie") < 0 && (n += "&ie=" + o) : e.isPlainObject(n) ? n = e.extend({ie: o}, n) : e.isArray(n) && n.push({name: "ie",value: o}), e.tb.ajax({type: "POST",url: t,data: n,success: i,dataType: r})
    }
}(jQuery), function(e) {
    function t(t) {
        var n = t || window.event, i = [].slice.call(arguments, 1), r = 0, o = 0, a = 0;
        return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (r = n.wheelDelta / 120), n.detail && (r = -n.detail / 3), a = r, void 0 !== n.axis && n.axis === n.HORIZONTAL_AXIS && (a = 0, o = -1 * r), void 0 !== n.wheelDeltaY && (a = n.wheelDeltaY / 120), void 0 !== n.wheelDeltaX && (o = -1 * n.wheelDeltaX / 120), i.unshift(t, r, o, a), (e.event.dispatch || e.event.handle).apply(this, i)
    }
    var n = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var i = n.length; i; )
            e.event.fixHooks[n[--i]] = e.event.mouseHooks;
    e.event.special.mousewheel = {setup: function() {
        if (this.addEventListener)
            for (var e = n.length; e; )
                this.addEventListener(n[--e], t, !1);
        else
            this.onmousewheel = t
    },teardown: function() {
        if (this.removeEventListener)
            for (var e = n.length; e; )
                this.removeEventListener(n[--e], t, !1);
        else
            this.onmousewheel = null
    }}, e.fn.extend({mousewheel: function(e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
    },unmousewheel: function(e) {
        return this.unbind("mousewheel", e)
    }})
}(jQuery), function(e) {
    var t = function(t) {
        var n = this;
        this.cfg = e.extend({}, {className: "dialogJmodal",resizeable: !0}, t), this.element = e('<div class="' + this.cfg.className + '"/>').appendTo(document.body).css({display: "none",zIndex: e.getzIndex(),width: this.width(),height: this.height()}), this.cfg.show && this.show(), this.resizeFunc = function() {
            n.css("width", n.width()), n.css("height", n.height()), n.triggerHandler("resize")
        }, this.cfg.resizeable && e(window).bind("resize", this.resizeFunc)
    };
    t.prototype = {constructor: t,show: function() {
        this.element.show.apply(this.element, arguments), this._processTages(1)
    },hide: function() {
        this.element.hide.apply(this.element, arguments), this._processTages(0)
    },width: function() {
        return e(window).width()
    },height: function() {
        return Math.max(e("body").height(), e("html").height())
    },css: function() {
        this.element.css.apply(this.element, arguments)
    },triggerHandler: function() {
        this.element.triggerHandler.apply(this.element, arguments)
    },bind: function() {
        this.element.bind.apply(this.element, arguments)
    },remove: function() {
        this._processTages(0), this.element && this.element.remove(), e(window).unbind("resize", this.resizeFunc);
        for (var t in this)
            delete this[t]
    },_processTages: function(t) {
        var n = this;
        if (e.browser.msie)
            if (n.special = n.special || [], t) {
                if (n.special.length > 0)
                    return;
                var i = e("SELECT,OBJECT,EMBED");
                this.cfg.safety && (i = i.filter(function() {
                    return 0 == n.cfg.safety.find(this).length
                })), i.each(function() {
                    var t = e(this);
                    n.special.push({dom: this,css: t.css("visibility")}), t.css("visibility", "hidden")
                })
            } else
                for (var r = 0, o = n.special.length; o > r; r++)
                    e(n.special[r].dom).css("visibility", n.special[r].css || ""), n.special[r].dom = null
    }}, e.modal = t, e.getzIndex = function() {
        return e.zIndex = e.zIndex || 5e4, e.zIndex++
    }
}(jQuery), function(e) {
    e.getcurzIndex = function() {
        return e.curzIndex = e.curzIndex || 10005, e.curzIndex++
    }
}(jQuery), function(e) {
    var t = e.browser.msie && e.browser.version < 7, n = function(r) {
        function o() {
            s.dragged || (s.element.triggerHandler("onresize"), s.sizeTimer && clearTimeout(s.sizeTimer), s.sizeTimer = setTimeout(function() {
                s.setPosition()
            }, 5))
        }
        n.INST.push(this), this.cfg = e.extend({}, n.setting, r), this.cfg.showTitle || (this.cfg.draggable = !1), (null != this.cfg.top || null != this.cfg.left) && (this.cfg.autoCenter = !1);
        var a = "dialogJ";
        this.cfg.holderClassName && (a += " " + this.cfg.holderClassName), !t && this.cfg.fixed && (a += " dialogJfix"), this.cfg.showShadow && (a += " dialogJshadow");
        var s = this;
        if (this.cfg.modal) {
            var l = {};
            this.cfg.modalClassName && (l.className = this.cfg.modalClassName), this.modal = new e.modal(l)
        }
        this.element = e('<div class="' + a + '"></div>').css({zIndex: e.getzIndex(),display: "none"}).appendTo(document.body), this.elementWrapper = e('<div class="uiDialogWrapper"></div>').appendTo(this.element), this._setupTitleBar(), this.setTitle(this.cfg.title), this._setupNoTitle(), "iframe" === this.cfg.contentType && (this.cfg.html = e("<iframe></iframe>").css({width: "100%",height: "100%",border: "none"}).attr({src: this.cfg.html,frameBorder: 0})), this._setupContent(), this.setContent(this.cfg.html), this.width(this.cfg.width), this.height(this.cfg.height), this.setPosition(this.cfg.left, this.cfg.top), this.cfg.show && this.show(), this.cfg.autoCenter && e(window).bind("resize", o), this._setScroll(), e.each(i, function(e, t) {
            s.cfg[t] && s.bind(t, s.cfg[t])
        }), this.cfg.escable && this._setupEscKey(), this.close = function() {
            if (s.element.triggerHandler("onclose") === !1)
                return !1;
            e(window).unbind("resize", o), s.modal && s.modal.remove(), s._setScroll(!0), s.element.remove();
            for (var t = 0, i = n.INST.length; i > t; t++)
                if (n.INST[t] == s) {
                    n.INST.splice(t, 1);
                    break
                }
        }
    }, i = ["onaccept", "oncancel", "onclose", "onresize", "onhide"];
    e.extend(n, {open: function(t, i) {
        return new n(e.extend({}, i, {html: t}))
    },ask: function(t, i, r, o) {
        var a = new n(e.extend({modal: !0}, o || {}, {html: t || "",show: !1}));
        if (e.isArray(i) && i.length > 0) {
            var s = e('<div class="dialogJanswers"></div>').appendTo(a.elementWrapper).html(e.map(i, function(e) {
                return '<input type="button" class="dialogJbtn" value="' + e + '" />'
            }).join(" "));
            a.buttons = e("input[type=button]", s).each(function(t) {
                e(this).bind("click", function() {
                    r.call(this, t, a) !== !1 && a.close()
                })
            })
        }
        return a.setPosition(), o && o.show || a.show(), a
    },alert: function(t, r) {
        var o = e.extend({}, r || {});
        return n.ask(t, [o.acceptValue || "\u786E\u5B9A"], function(e, t) {
            return t.element.triggerHandler(i[e], this)
        }, o)
    },confirm: function(t, r) {
        var o = e.extend({}, r || {});
        return n.ask(t, [o.acceptValue || "\u786E\u5B9A", o.cancelValue || "\u53D6\u6D88"], function(e, t) {
            return t.element.triggerHandler(i[e], this)
        }, o)
    },assert: function(t, r, o) {
        var a = e.extend({button: !0}, o || {});
        2 == arguments.length && (a = r, r = e.noop);
        var s = n.ask(t, a.button ? [a.acceptValue || "\u786E\u5B9A"] : [], function(e, t) {
            return t.element.triggerHandler(i[e], this)
        }, a);
        return setTimeout(function() {
            s && s.close && s.close(), r && r()
        }, parseInt(a.time) || 2e3), s
    },load: function(t, i) {
        i = i || {};
        var r = {url: t,type: "GET",dataType: "html",cache: !1,success: function(t) {
            i.filter && (t = e(i.filter, t)), o.setContent(t)
        }};
        e.each(["type", "cache"], function() {
            this in i && (r[this] = i[this], delete i[this])
        }), e.ajax(r);
        var o = new n(i || {});
        return o
    },close: function() {
        for (var e = 0; e < this.INST.length; e++) {
            var t = this.INST[e].close();
            t !== !1 && e--
        }
    },setting: {modal: !0,showShadow: !0,showTitle: !0,noTitle: !1,width: 300,height: null,fixed: !0,left: null,top: null,show: !0,closeable: !0,hideOnclose: !1,draggable: !0,contentType: null,resizeable: !1,closeTips: null,escable: !0,scrollable: !0,modalClassName: null,autoCenter: !0,html: null,minWidth: 200,minHeight: 100,maxWidth: null,maxHeight: null}}), n.prototype = {constructor: n,setTitle: function(e) {
        this.element.find(".dialogJtitle>span.dialogJtxt").html(e || "")
    },setContent: function(e) {
        e && this.element.find(".dialogJbody").html(e)
    },width: function(e) {
        return this.element.css("width", e)
    },height: function(t) {
        return e(".dialogJbody", this.element).css("height", t)
    },setPosition: function(n, i) {
        if (0 !== n & !n && 0 !== i && !i) {
            var r = e(document), o = e(window), a = this.cfg.fixed && !t ? [0, 0] : [r.scrollLeft(), r.scrollTop()];
            n = a[0] + (o.width() - this.element.outerWidth()) / 2, i = a[1] + (o.height() - this.element.outerHeight()) / 2, i = i >= 0 ? i : 0
        }
        this.element.css({left: n,top: i}), this.triggerHandler("resize")
    },getTitle: function() {
        return this.element.find(".dialogJtitle>span").html()
    },getContent: function() {
        return e(".dialogJbody", this.element).html()
    },show: function() {
        this.element.show.apply(this.element, arguments), this.modal && (this.modal.cfg.safety = this.element, this.modal.show.apply(this.modal, arguments))
    },hide: function() {
        return this.element.triggerHandler("onhide") === !1 ? !1 : (this.element.hide.apply(this.element, arguments), void (this.modal && this.modal.hide.apply(this.modal, arguments)))
    },getElement: function() {
        return this.element[0]
    },bind: function() {
        return this.element.bind.apply(this.element, arguments), this
    },triggerHandler: function() {
        this.element.triggerHandler.apply(this.element, arguments)
    },getButtons: function() {
        return this.buttons
    },_setupNoTitle: function() {
        if (this.cfg.noTitle) {
            var t = e(".dialogJtitle");
            t.css({"border-bottom": 0,"background-color": "#fff"})
        }
    },_setupTitleBar: function() {
        if (this.cfg.showTitle) {
            var t = this, n = t.titleBar = e('<div class="dialogJtitle"><span class="dialogJtxt"></span></div>').appendTo(this.elementWrapper);
            if (this.cfg.closeable && e('<a href="#" class="dialogJclose" title="' + (this.cfg.closeTips || "\u5173\u95ED\u672C\u7A97\u53E3") + '">&nbsp;</a>').appendTo(n).bind("mousedown", function(e) {
                e.stopPropagation()
            }).click(function() {
                return t.cfg.hideOnclose ? t.hide() : t.close(), !1
            }), this.cfg.draggable) {
                n[0].style.cssText = "-moz-user-select: none;cursor:move";
                e(t.element).draggable({handle: e(n),start: function() {
                    t._setupHackDiv(1)
                },stop: function() {
                    t.dragged = !0, t._setupHackDiv(0)
                }})
            }
        }
    },_setupHackDiv: function(t) {
        var n = this;
        if (t) {
            if (e("IFRAME", n.element).length > 0) {
                var i = e(".dialogJcontent", n.element);
                n.hack_div = (n.hack_div || e("<div></div>").appendTo(i).css({position: "absolute",left: 0,top: 0,cursor: "move"})).css({display: "block",width: n.element.outerWidth(),height: n.element.outerHeight()})
            }
        } else
            n.hack_div && n.hack_div.css("display", "none")
    },_setupEscKey: function() {
        var t = this, n = function(n) {
            27 == n.which && (t.showTitle ? e(".dialogJclose", t.titleBar).triggerHandler("click") : t.close())
        };
        e(document).bind("keydown", n), e(t.element).bind("onclose", function() {
            e(document).unbind("keydown", n)
        })
    },_setupContent: function() {
        var t = e('<div class="dialogJcontent"><div class="dialogJbody"id="dialogJbody"></div></div>');
        this.elementWrapper.append(t)
    },_setScroll: function(t) {
        if (this.cfg.modal && !this.cfg.scrollable) {
            var n = e("html");
            if (n.length) {
                var i = n[0].scrollTop;
                t ? n.css({overflow: this.element.data("htmlof") || "","padding-right": "0px"}) : (n[0].style.overFlow && this.element.data("htmlof", n[0].style.overFlow), n.css({overflow: "hidden","padding-right": "17px"})), n[0].scrollTop = i
            }
        }
    }}, e.each(i, function(e, t) {
        n.prototype[t] = function(e) {
            this.bind(t, e)
        }
    }), n.INST = [], e.dialog = n
}(jQuery), $.disableInput = function(e, t, n) {
    var i, r, o, a = [8, 9, 16, 17, 18, 20, 13, 27, 37, 38, 39, 40, 33, 34, 35, 36, 45, 46, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145], s = function() {
        i = e, t && "function" == typeof t && (r = t || null), n && "function" == typeof n && (o = n || null), l()
    }, l = function() {
        i.bind("keydown", function(e) {
            return c(e)
        })
    }, c = function(e) {
        var t = e;
        return $.inArray(t.keyCode, a) >= 0 ? !0 : t.ctrlKey || t.altKey ? !0 : o && !o(t.keyCode) ? (t.preventDefault(), !1) : r && !r(i.val().toString().trim()) ? (t.preventDefault(), !1) : void 0
    };
    s()
}, $.subInput = function(e, t) {
    $.disableInput(e, function(e) {
        return e.toString().getByteLength() >= t ? !1 : !0
    });
    var n = function() {
        var n = e.val().toString();
        n.getByteLength() > t && e.val(n.subByte(t, ""))
    };
    e.bind("propertychange", n);
    try {
        e.bind("input", n)
    } catch (i) {
    }
    e.bind("keyup", n)
}, function(e, t, n) {
    e.json = e.json || {}, e.json.encode = function() {
        function t(e) {
            return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
                var t = o[e];
                return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
            })), '"' + e + '"'
        }
        function n(t) {
            var n, i, r, o = ["["], a = t.length;
            for (i = 0; a > i; i++)
                switch (r = t[i], typeof r) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        n && o.push(","), o.push(e.json.encode(r)), n = 1
                }
            return o.push("]"), o.join("")
        }
        function i(e) {
            return 10 > e ? "0" + e : e
        }
        function r(e) {
            return '"' + e.getFullYear() + "-" + i(e.getMonth() + 1) + "-" + i(e.getDate()) + "T" + i(e.getHours()) + ":" + i(e.getMinutes()) + ":" + i(e.getSeconds()) + '"'
        }
        var o = {"\b": "\\b","	": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"};
        return function(i) {
            switch (typeof i) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "string":
                    return t(i);
                case "boolean":
                    return String(i);
                default:
                    if (null === i)
                        return "null";
                    if (i instanceof Array)
                        return n(i);
                    if (i instanceof Date)
                        return r(i);
                    var o, a, s = ["{"], l = e.json.encode;
                    for (key in i)
                        if (i.hasOwnProperty(key))
                            switch (a = i[key], typeof a) {
                                case "undefined":
                                case "unknown":
                                case "function":
                                    break;
                                default:
                                    o && s.push(","), o = 1, s.push(l(key) + ":" + l(a))
                            }
                    return s.push("}"), s.join("")
            }
        }
    }(), e.json.parseJSON = function() {
        var e, t, i, r, o = {'"': '"',"\\": "\\","/": "/",b: "\b",f: "\f",n: "\n",r: "\r",t: "	"}, a = function(t) {
            throw {name: "SyntaxError",message: t,at: e,text: i}
        }, s = function(n) {
            return n && n !== t && a("Expected '" + n + "' instead of '" + t + "'"), t = i.charAt(e), e += 1, t
        }, l = function() {
            var e, n = "";
            for ("-" === t && (n = "-", s("-")); t >= "0" && "9" >= t; )
                n += t, s();
            if ("." === t)
                for (n += "."; s() && t >= "0" && "9" >= t; )
                    n += t;
            if ("e" === t || "E" === t)
                for (n += t, s(), ("-" === t || "+" === t) && (n += t, s()); t >= "0" && "9" >= t; )
                    n += t, s();
            return e = +n, isFinite(e) ? e : void a("Bad number")
        }, c = function() {
            var e, n, i, r, l = "";
            if ('"' === t || "'" === t)
                for (r = t; s(); ) {
                    if (t === r)
                        return s(), l;
                    if ("\\" === t)
                        if (s(), "u" === t) {
                            for (i = 0, n = 0; 4 > n && (e = parseInt(s(), 16), isFinite(e)); n += 1)
                                i = 16 * i + e;
                            l += String.fromCharCode(i)
                        } else {
                            if ("string" != typeof o[t])
                                break;
                            l += o[t]
                        }
                    else
                        l += t
                }
            a("Bad string")
        }, u = function() {
            for (; t && " " >= t; )
                s()
        }, h = function() {
            switch (t) {
                case "t":
                    return s("t"), s("r"), s("u"), s("e"), !0;
                case "f":
                    return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
                case "n":
                    return s("n"), s("u"), s("l"), s("l"), null
            }
            a("Unexpected '" + t + "'")
        }, f = function() {
            var e = [];
            if ("[" === t) {
                if (s("["), u(), "]" === t)
                    return s("]"), e;
                for (; t; ) {
                    if (e.push(r()), u(), "]" === t)
                        return s("]"), e;
                    s(","), u()
                }
            }
            a("Bad array")
        }, d = function() {
            if ('"' === t || "'" === t)
                return c();
            for (var e = ""; t && !(":" === t || " " >= t); )
                e += t, s();
            return "" === e && a("Bad key"), e
        }, g = function() {
            var e, n = {};
            if ("{" === t) {
                if (s("{"), u(), "}" === t)
                    return s("}"), n;
                for (; t; ) {
                    if (e = d(), u(), s(":"), Object.hasOwnProperty.call(n, e) && a('Duplicate key "' + e + '"'), n[e] = r(), u(), "}" === t)
                        return s("}"), n;
                    s(","), u()
                }
            }
            a("Bad object")
        };
        return r = function() {
            switch (u(), t) {
                case "{":
                    return g();
                case "[":
                    return f();
                case '"':
                case "'":
                    return c();
                case "-":
                    return l();
                default:
                    return t >= "0" && "9" >= t ? l() : h()
            }
        }, function(o, s) {
            var l;
            return i = o, e = 0, t = " ", l = r(), u(), t && a("Syntax error"), "function" == typeof s ? function c(e, t) {
                var i, r, o = e[t];
                if (o && "object" == typeof o)
                    for (i in o)
                        Object.prototype.hasOwnProperty.call(o, i) && (r = c(o, i), r !== n ? o[i] = r : delete o[i]);
                return s.call(e, t, o)
            }({"": l}, "") : l
        }
    }(), e.json.decode = function(t, n) {
        if ("string" != typeof t || !t.length)
            return null;
        if (n && !/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(t.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"/g, "")))
            return null;
        try {
            return e.json.parseJSON(t)
        } catch (i) {
            return {}
        }
    }
}(jQuery, window), $.getBrowser = function() {
    var e = navigator.userAgent, t = "", n = "";
    return e.indexOf("AppleWebKit") >= 0 ? t = "webkit" : e.indexOf("Gecko") >= 0 ? t = "gecko" : e.indexOf("MSIE") >= 0 && (t = "ie"), e.indexOf("Firefox") >= 0 ? n = "firefox" : e.indexOf("360SE") >= 0 ? n = "360se" : e.indexOf("SE") >= 0 ? n = "sougou" : e.indexOf("Maxthon") >= 0 ? n = "maxthon" : e.indexOf("MSIE") >= 0 ? n = "ie" : e.indexOf("Chrome") >= 0 ? n = "chrome" : e.indexOf("Safari") >= 0 && (n = "safari"), {core: t,name: n}
}, $.resizePic = function(e, t, n, i) {
    function r(e, t, n, i) {
        var r = 0, o = e, a = t;
        switch (e > n && (r += 1), t > i && (r += 2), r) {
            case 1:
                o = n, o = t * n / e;
            case 2:
                a = i, o = e * i / t;
            case 3:
                a = t / i > e / n ? i : t * n / e, o = t / i > e / n ? e * i / t : n
        }
        return 0 != r && (s = !0), [o, a]
    }
    var o = t || 120, a = n || 120, s = !1, l = e;
    if (0 == l.width()) {
        var c, u = this, h = arguments;
        return c = setTimeout(function() {
            clearTimeout(c), c = null, h.callee.apply(u, h)
        }, 100), !1
    }
    var f = r(l.width(), l.height(), o, a);
    return e.css("width", f[0]), e.css("height", f[1]), e.css("visibility", "visible"), 1 == i && e.css("margin-top", (n - parseInt(f[1])) / 2), s
}, $.dateFormat = function(e, t) {
    function n(e, n) {
        t = t.replace(e, n)
    }
    if ("string" != typeof t)
        return e.toString();
    var i = function(e) {
        return String(e).length > 1 ? String(e) : "0" + e
    }, r = e.getFullYear(), o = e.getMonth() + 1, a = e.getDate(), s = e.getHours(), l = e.getMinutes(), c = e.getSeconds();
    return n(/yyyy/g, String(r)), n(/yy/g, i(r.toString().slice(2), 2)), n(/MM/g, i(o, 2)), n(/M/g, o), n(/dd/g, i(a, 2)), n(/d/g, a), n(/HH/g, i(s, 2)), n(/H/g, s), n(/hh/g, i(s % 12, 2)), n(/h/g, s % 12), n(/mm/g, i(l, 2)), n(/m/g, l), n(/ss/g, i(c, 2)), n(/s/g, c), t
}, function(e) {
    e.extend(String.prototype, {escapeHTML: function() {
        return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;").replace(/"/g, "&quot;")
    },unescapeHTML: function() {
        return this.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    },format: function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return t.unshift(this), e.tb.format.apply(e.tb, t)
    },tempFormat: function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return t.unshift(this), e.tb.format.apply(e.tb, t)
    },getByteLength: function() {
        return this.replace(/[^\x00-\xff]/g, "mm").length
    },subByte: function(t, n) {
        e.tb.subByte(this, t, n)
    },escapeUTF8: function() {
        return escape(this).replace(/%u(\w{4})/g, function(e, t) {
            return encodeURIComponent(String.fromCharCode("0x" + t)).replace(/%/g, "%25")
        })
    }})
}(jQuery), function(e) {
    function t(t, n) {
        this.$el = e(t), this.config = e.extend({}, this.defaultConfig, n), this.init()
    }
    t.prototype = {defaultConfig: {enterDelay: 1e3,leaveDelay: 1e3,mouseenter: null,mouseleave: null},config: null,type: null,timer: null,entered: !1,init: function() {
        var e = this.$el, t = this;
        e.bind("mouseenter.delayhover", function(e) {
            var n = this;
            t.hoverMouseenter(e, n)
        }), e.bind("mouseleave.delayhover", function(e) {
            var n = this;
            t.hoverMouseleave(e, n)
        })
    },hoverMouseenter: function(e, t) {
        var n = this, i = this.config;
        clearTimeout(this.timer), this.timer = setTimeout(function() {
            "function" == typeof i.mouseenter && i.mouseenter.call(t, e), n.entered = !0
        }, i.enterDelay)
    },hoverMouseleave: function(e, t) {
        var n = this, i = this.config;
        clearTimeout(this.timer), this.entered && (this.timer = setTimeout(function() {
            "function" == typeof i.mouseleave && i.mouseleave.call(t, e), n.entered = !1
        }, i.leaveDelay))
    },clearHoverTimer: function() {
        clearTimeout(this.timer), this.entered = !1
    },destroy: function() {
        this.$el.unbind(".delayhover"), clearTimeout(this.timer), this.entered && "function" == typeof this.config.mouseleave && this.config.mouseleave.call(this)
    }}, e.fn.delayhover = function(e) {
        if (this.data("tb-delayhover"))
            throw new Error("$.delayhover: \u4E0D\u80FD\u7ED1\u5B9A\u4E24\u6B21");
        return this.data("tb-delayhover", new t(this, e)), this
    }, e.fn.removeDelayhover = function() {
        return this.data("tb-delayhover") && (this.data("tb-delayhover").destroy(), this.removeData("tb-delayhover")), this
    }, e.fn.clearDelayHoverTimer = function() {
        return this.data("tb-delayhover") && this.data("tb-delayhover").clearHoverTimer(), this
    }, e.tb.Delayhover = t
}(jQuery), function($, undefined) {
    $.tb.escapeHTML = function(e) {
        return "string" != typeof e ? "" : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;")
    }, $.tb.unescapeHTML = function(e) {
        return "string" != typeof e ? "" : e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    }, $.tb.format = function(e, t) {
        if ("undefined" == typeof t)
            return e;
        var n = /([.*+?^=!:${}()|[\]\/\\])/g, i = "{".replace(n, "\\$1"), r = "}".replace(n, "\\$1"), o = new RegExp("#" + i + "([^" + i + r + "]+)" + r, "g"), a = new RegExp("#" + i + "(\\d+)" + r, "g");
        if ("object" == typeof t)
            return e.replace(o, function(e, n) {
                var i = t[n];
                return "function" == typeof i && (i = i(n)), "undefined" == typeof i ? "" : i
            });
        if ("undefined" != typeof t) {
            var s = Array.prototype.slice.call(arguments, 1), l = s.length;
            return e.replace(a, function(e, t) {
                return t = parseInt(t, 10), t >= l ? e : s[t]
            })
        }
    }, $.tb.getByteLength = function(e) {
        return (e + "").replace(/[^\x00-\xff]/g, "mm").length
    }, $.tb.subByte = function(e, t, n) {
        if ($.tb.getByteLength(e) <= t)
            return e;
        n = n === undefined ? "..." : String(n), t -= $.tb.getByteLength(n);
        for (var i = Math.floor(t / 2), r = $.tb.getByteLength(e); r > i; i++) {
            var o = e.substring(0, i), a = $.tb.getByteLength(o);
            if (a == t)
                return o + n;
            if (a > t)
                return e.substring(0, i - 1) + n
        }
        return e
    }, $.tb.escapeUTF8 = function(e) {
        return escape(e).replace(/%u(\w{4})/g, function(e, t) {
            return encodeURIComponent(String.fromCharCode("0x" + t)).replace(/%/g, "%25")
        })
    }, $.tb.resizePic = function(e, t, n, i, r) {
        var o = e.width, a = e.height, s = o, l = a;
        0 !== o && 0 !== a && ("string" == typeof i && (r = i, i = !1), "width" === r || "height" !== r && o / a >= t / n ? o > t && (s = t, l = Math.round(t * a / o)) : a > n && (l = n, s = Math.round(n * o / a)), i && (t > s && (e.style.marginLeft = Math.floor((t - s) / 2) + "px"), n > l && (e.style.marginTop = Math.floor((n - l) / 2) + "px")), e.width = s, e.height = l)
    }, $.tb.Storage = function() {
        function e(e) {
            return e.replace(/[_\s]/g, function(e) {
                return "_" == e ? "__" : "_s"
            })
        }
        function t() {
            return document.getElementById(a + "-storage")
        }
        function n(e) {
            return "[object Date]" === {}.toString.call(e) && "Invalid Date" !== e.toString() && !isNaN(e)
        }
        function i() {
            var e;
            return window.localStorage ? e = o() : window.ActiveXObject && (e = r()), e
        }
        function r() {
            var i = document.createElement("div");
            return i.style.display = "none", i.id = a + "-storage", document.body.appendChild(i), t().addBehavior("#default#userData"), {set: function(i, r, o) {
                var a = s.SUCCESS, l = t(), c = e(i), u = o ? o : (new Date).getTime() + 31536e6;
                n(u) && (u = u.getTime()), l.expires = new Date(u).toUTCString();
                try {
                    l.setAttribute(c, r), l.save(c)
                } catch (h) {
                    a = s.OVERFLOW
                }
                return l = null, a
            },get: function(n) {
                var i = t(), r = e(n), o = null;
                try {
                    return i.load(r), o = i.getAttribute(r)
                } catch (a) {
                    throw a.message
                }
            },del: function(n) {
                var i, r = t(), o = e(n);
                try {
                    return r.load(o), i = r.getAttribute(o), i ? (r.removeAttribute(o), r.expires = new Date(315532799e3).toUTCString(), r.save(o), !0) : !1
                } catch (a) {
                    return !1
                }
            }}
        }
        function o() {
            return {set: function(t, i, r) {
                var o = s.SUCCESS, a = window.localStorage, l = e(t), c = r ? r : (new Date).getTime() + 31536e6;
                n(c) && (c = c.getTime());
                try {
                    a.setItem(l, c + "|" + i)
                } catch (u) {
                    o = s.OVERFLOW
                }
                return o
            },get: function(t) {
                var n, i, r = window.localStorage, o = e(t), a = null;
                try {
                    a = r.getItem(o)
                } catch (s) {
                    return null
                }
                return a ? (n = a.indexOf("|"), i = parseInt(a.substring(0, n), 10), new Date(i).getTime() > (new Date).getTime() || 0 == i ? a = a.substring(n + 1, a.length) : (a = null, this.del(t), null)) : null
            },del: function(t) {
                var n = window.localStorage, i = e(t), r = null;
                try {
                    r = n.getItem(i)
                } catch (o) {
                    return !1
                }
                return r ? (r = r.substring(r.indexOf("|") + 1, r.length), r && n.removeItem(i), !0) : !1
            }}
        }
        var a = "tieba", s = {SUCCESS: 0,FAILURE: 1,OVERFLOW: 2};
        return {set: function() {
            var e = this;
            return !e._storage && (e._storage = i()), e._storage.set.apply(e._storage, arguments)
        },get: function() {
            var e = this;
            return !e._storage && (e._storage = i()), e._storage.get.apply(e._storage, arguments)
        },remove: function() {
            var e = this;
            return !e._storage && (e._storage = i()), e._storage.del.apply(e._storage, arguments)
        },isSupport: function() {
            return !(!window.localStorage && !window.ActiveXObject)
        }}
    }(), $.cookie = function(e, t, n) {
        if ("undefined" == typeof t) {
            var i = null;
            if (document.cookie && "" != document.cookie)
                for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
                    var a = jQuery.trim(r[o]);
                    if (a.substring(0, e.length + 1) == e + "=") {
                        i = decodeURIComponent(a.substring(e.length + 1));
                        break
                    }
                }
            return i
        }
        n = n || {}, null === t && (t = "", n.expires = -1);
        var s = "";
        if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
            var l;
            "number" == typeof n.expires ? (l = new Date, l.setTime(l.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : l = n.expires, s = "; expires=" + l.toUTCString()
        }
        var c = n.path ? "; path=" + n.path : "", u = n.domain ? "; domain=" + n.domain : "", h = n.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), s, c, u, h].join("")
    };
    var $$ = function(e, t) {
        this.instance = "jswf_" + (new Date).getTime();
        var n = this.options = $.extend({}, $$.options, t), i = this.id = n.id || this.instance, r = $(n.container || "<div></div>");
        $$.CallBacks[this.instance] = {};
        var o = n.params, a = n.vars, s = n.callBacks, l = $.extend({}, {height: n.height,width: n.width}, n.properties), c = this;
        for (var u in s)
            $$.CallBacks[this.instance][u] = function(e) {
                return function() {
                    return e.apply(c.object, arguments)
                }
            }(s[u]), a[u] = "$.swf.CallBacks." + this.instance + "." + u;
        o.flashVars = $.param(a), $.browser.msie ? (l.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", l.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", o.movie = e) : (l.type = "application/x-shockwave-flash", l.data = e);
        var h = ['<object id="', i, '"'];
        for (var f in l)
            h.push(" ", f, '="', l[f], '"');
        h.push(">");
        for (var d in o)
            o[d] !== undefined && h.push('<param name="', d, '" value="', o[d], '" />');
        h.push("</object>"), $.each(r, function(e, t) {
            t.innerHTML = h.join("")
        }), this.getObject()
    };
    $.extend($$, {options: {id: null,height: 1,width: 1,container: null,properties: {align: "middle"},params: {quality: "high",allowScriptAccess: "always",wMode: "transparent",swLiveConnect: !0,menu: !1},callBacks: {},vars: {}},CallBacks: {},remote: function(obj, fn) {
        var rs = obj.CallFunction('<invoke name="' + fn + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + "</invoke>");
        return eval(rs)
    }}), $.extend($$.prototype, {toElement: function() {
        return this.object
    },getObject: function() {
        var e = this;
        this.object = document[this.id] || window[this.id], this.object || setTimeout(function() {
            e.getObject()
        }, 1)
    },remote: function() {
        for (var e = [this.toElement()], t = 0, n = arguments.length; n > t; t++)
            e.push(arguments[t]);
        return $$.remote.apply($$, e)
    }}), $$.getVersion = function() {
        var e = navigator;
        if (e.plugins && e.mimeTypes.length) {
            var t = e.plugins["Shockwave Flash"];
            if (t && t.description)
                return t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
        } else if (window.ActiveXObject && !window.opera)
            for (var n = 10; n >= 2; n--)
                try {
                    var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
                    if (i) {
                        var r = i.GetVariable("$version");
                        return r.replace(/WIN/g, "").replace(/,/g, ".")
                    }
                } catch (o) {
                }
    }, $$.getFlash = function(e) {
        return -1 != navigator.appName.indexOf("Microsoft") ? window[e] : document[e]
    }, $.swf = $$, $.JsLoadManager = $.JLM = {use: function(e, t, n, i) {
        if ("string" == typeof e)
            return "function" != typeof t ? (i = t, t = undefined) : i = n, void this.loadUrl(e, t, i);
        if (!this.isArray(e))
            throw new Error("JsLoadManager.use: Arguments Illegal!");
        n ? this.loadSerial(e, t, i) : this.loadParallel(e, t, i)
    },loaded: {},loading: {},loadSerial: function(e, t, n) {
        function i() {
            e[++r] ? o.loadUrl(e[r], i, n) : "function" == typeof t && t()
        }
        var r = 0, o = this;
        this.loadUrl(e[r], i, n)
    },loadParallel: function(e, t, n) {
        for (var i = this, r = !1, o = 0, a = e.length; a > o && (this.loadUrl(e[o], function() {
            i.checkLoaded(e) && ("function" == typeof t && t(), r = !0)
        }, n), !r); o++)
            ;
    },checkLoaded: function(e) {
        if ("string" == typeof e)
            return !!this.loaded[e];
        for (var t = 0, n = e.length; n > t; t++)
            if (!this.loaded[e[t]])
                return !1;
        return !0
    },isArray: function(e) {
        return "object" == typeof e && e.constructor === Array
    },loadUrl: function(e, t, n) {
        var i = this;
        this.loaded[e] !== undefined ? "function" == typeof t && t(e, this.loaded[e]) : this.loading[e] !== undefined ? "function" == typeof t && this.loading[e].push(t) : (this.loading[e] = [], "function" == typeof t && this.loading[e].push(t), this.createScriptTag(e, function(e, t) {
            i.loaded[e] = t;
            for (var n = 0, r = i.loading[e].length; r > n; n++)
                i.loading[e][n](e, t);
            delete i.loading[e]
        }, n))
    },createScriptTag: function(e, t, n) {
        var i = document.createElement("script");
        i.setAttribute("type", "text/javascript"), i.setAttribute("src", e), n && i.setAttribute("charset", n), i.onload = i.onreadystatechange = function() {
            this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (i.onload = i.onreadystatechange = null, "function" == typeof t && t(e, !0))
        }, i.onerror = function() {
            "function" == typeof t && t(e, !1)
        }, document.getElementsByTagName("head")[0].appendChild(i)
    }}, $.fn.tb_html = function(e) {
        if ("string" == typeof e) {
            for (var t = 0, n = this.length; n > t; t++)
                1 === this[t].nodeType && (jQuery.cleanData(this[t].getElementsByTagName("*")), this[t].innerHTML = e);
            return this
        }
        return this.html(e)
    }, $.tb.location = {getHref: function() {
        return this._escape(location.href)
    },setHref: function(e) {
        location.href = e
    },getSearch: function() {
        return this._escape(location.search)
    },getHash: function() {
        return this._escape(location.hash)
    },setHash: function(e) {
        location.hash = e
    },getHost: function() {
        return location.host
    },getHostname: function() {
        return location.hostname
    },getPort: function() {
        return location.port
    },getProtocol: function() {
        return location.protocol
    },getPathname: function() {
        return this._escape(location.pathname)
    },reload: function() {
        location.reload()
    },getOrigin: function() {
        return this._escape(location.origin)
    },_escape: function(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
    },_getSearchValue: function(e) {
        var t = location.search.replace(/^\?/, ""), n = {};
        if (!t)
            return e === undefined ? n : undefined;
        t = t.split("&");
        for (var i, r = 0, o = t.length; o > r; r++)
            i = t[r].indexOf("="), i > 0 ? n[t[r].substring(0, i)] = t[r].substring(i + 1) : n[t[r]] = "";
        return e === undefined ? n : n[e]
    },getSearchValue: function(e) {
        function t(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        if (e) {
            var n = $.tb.getSearch(e);
            return null != n ? $.tb.escapeHTML(t(n)) : null
        }
        var i = $.tb.getSearch();
        for (var r in i)
            i[r] = $.tb.escapeHTML(t(i[r]));
        return i
    }}, $.tb.getSearch = function(e) {
        return $.tb.location._getSearchValue(e)
    }, $.tb.getDecodedSearch = function(e) {
        return $.tb.location.getSearchValue(e)
    }, $.tb.throttle = function(e, t) {
        return function() {
            t = t || 100;
            var n = this, i = arguments;
            clearTimeout(e.tId), e.tId = setTimeout(function() {
                e.apply(n, i)
            }, t)
        }
    }, $.tb.alert = function(e) {
        e = $.extend({show: !1,width: 410}, e || {});
        var t = ['<div class="tb_alert_wrapper">', e.iconSrc || e.heading ? '<p class="tb_alert_title">' : "", e.iconSrc ? '<img src="#{iconSrc}" class="tb_alert_title_icon#{iconClass}" />' : "", e.heading ? "<strong>#{heading}</strong>" : "", e.iconSrc || e.heading ? "</p>" : "", '<p class="tb_alert_message">#{message}</p>', '<div class="tb_alert_btn_group"></div>', "</div>"].join(""), n = '<a href="#" class="ui_btn ui_btn_m j_btn #{class}" data-value="#{text}"><span><em>#{text}</em></span></a>';
        $root = $($.tb.format(t, e)), e.html = $root;
        var i = new $.dialog(e);
        return e.buttons = e.buttons ? $.isArray(e.buttons) ? e.buttons : [e.buttons] : [], $btn_group = $root.find(".tb_alert_btn_group"), $.each(e.buttons, function(e, t) {
            var r = $($.tb.format(n, t));
            r.bind("click", function(n) {
                n.preventDefault(), (!t.callback || t.callback && t.callback.call(this, e, i) !== !1) && i.close()
            }), $btn_group.append(r)
        }), i.setPosition(), e && e.show || i.show(), i.buttons = $.find(".j_btn"), i
    }
}(jQuery), function(e) {
    e.fn.extend({bindData: function(t, n) {
        null == n && (n = "data-field");
        var i = e.json.encode(t);
        return this.attr(n, i), this
    },getData: function(t) {
        null == t && (t = "data-field");
        var n = this.attr(t);
        return null == n ? null : e.json.parseJSON(n)
    }}), e.tb.dataField = function(t, n) {
        null == n && (n = "data-field");
        var i = e.json.encode(t);
        return i = e.tb.escapeHTML(i), " " + n + '="' + i + '" '
    }
}(jQuery), window.tbFormat = function(e, t) {
    if ("none" == t || null == t)
        return tempalte;
    for (var n in t)
        t[n] = $.tb.escapeHTML(String(t[n]));
    return $.tb.format(e, t)
}, function(e) {
    var t = {tbattr: e.fn.attr,tbprop: e.fn.prop}, n = {};
    for (var i in t)
        !function(i) {
            var r = t[i];
            n[i] = function() {
                var t = r.apply(this, arguments);
                return "string" == typeof t && (t = e.tb.escapeHTML(t)), t
            }
        }(i);
    e.fn.extend(n)
}(jQuery), function(e) {
    e.sendAjaxError = function(t) {
        if (!t)
            return !1;
        t = {ll: t.ll || "warning",tbfeerrormsg: t.msg || "",locator: t.locator || "",linenum: t.linenum || "",modulename: t.modulename || "",alarminfo: t.alarminfo || "",browser: e.getBrowser().name || "",tbfewarning: 1,logtype: "js",appname: "pc",_t: 1e3 * new Date};
        try {
            var n = "/ems/page?" + e.param(t);
            e.get(n)
        } catch (i) {
        }
    }, e.se = e.sendAjaxError
}(jQuery);
;
$.stats = {sendRequest: function(e) {
    if (document.images) {
        var t = new Image;
        window["bd_pv_" + (new Date).getTime()] = t, t.src = "http://static.tieba.baidu.com/tb/img/pv.gif?" + e + "&t=" + (new Date).getTime(), t = null
    }
},hive: function(e, t) {
    for (var a = /^\w*$/, n = 0, o = arguments.length; o > n; n++)
        if (!a.test(arguments[n]))
            return !1;
    if (document.images) {
        var r = new Image;
        window["bd_pv_" + (new Date).getTime()] = r;
        var s = "http://static.tieba.baidu.com/tb/img/hive.gif?", u = window.ALog && ALog.sid || (+new Date).toString(36) + (+Math.random().toFixed(8).substr(2)).toString(36), i = ["location=" + (e || ""), "cmd=" + (t || "click"), "url=" + encodeURIComponent(document.location.href), "refer=" + encodeURIComponent(document.referrer), "sid=" + u];
        PageData && (i.push("tb_mid=" + (PageData.product || "")), PageData.forum && (i.push("tb_fid=" + (PageData.forum.forum_id || "")), i.push("tb_fname=" + encodeURIComponent(PageData.forum.forum_name || ""))), PageData.user && (i.push("uname=" + encodeURIComponent(PageData.user.user_name || "")), i.push("tb_is_new_user=" + (PageData.user.is_new_user || ""))), PageData.thread && i.push("tb_tid=" + (PageData.thread && PageData.thread.thread_id || ""))), arguments[2] && i.push("tb_trump=" + arguments[2]), s += "&" + i.join("&"), r.src = s, r = null
    }
},track: function(e, t, a, n, o) {
    if (a && "object" == typeof a && (o = a, a = ""), n && "object" == typeof n && (o = n, n = ""), document.images) {
        var r = new Image;
        window["bd_pv_" + (new Date).getTime()] = r;
        var s = "http://static.tieba.baidu.com/tb/img/track.gif?", u = ["client_type=pc_web", "task=" + (t && encodeURIComponent(t) || ""), "locate=" + (e && encodeURIComponent(e) || ""), "type=" + (n && encodeURIComponent(n) || "click"), "url=" + encodeURIComponent(document.location.href), "refer=" + encodeURIComponent(document.referrer)];
        PageData && (u.push("page=" + (a || PageData.product || "")), PageData.forum && (u.push("fid=" + (PageData.forum.forum_id || "")), u.push("fname=" + encodeURIComponent(PageData.forum.forum_name || ""))), PageData.user && (u.push("uid=" + (PageData.user.user_id || PageData.user.user_id || "")), u.push("uname=" + encodeURIComponent(PageData.user.user_name || "")), u.push("is_new_user=" + (PageData.user.is_new_user || ""))), PageData.thread && u.push("tid=" + (PageData.thread && PageData.thread.thread_id || "")));
        for (var i in o)
            o.hasOwnProperty(i) && u.push(i + "=" + encodeURIComponent(o[i]));
        s += u.join("&"), r.src = s + "&t=" + (new Date).getTime(), r = null
    }
},redirect: function(e) {
    var t = e.url || "", a = ["client_type=pc_web", "tbjump=" + (e.tbjump && encodeURIComponent(e.tbjump) || ""), "task=" + (e.task && encodeURIComponent(e.task) || ""), "locate=" + (e.locate && encodeURIComponent(e.locate) || ""), "type=click", "url=" + encodeURIComponent(document.location.href), "refer=" + encodeURIComponent(document.referrer), "t=" + (new Date).getTime()];
    PageData && (a.push("page=" + (e.page || PageData.product || "")), PageData.forum && (a.push("fid=" + (PageData.forum.forum_id || "")), a.push("fname=" + encodeURIComponent(PageData.forum.forum_name || ""))), PageData.user && (a.push("uid=" + (PageData.user.user_id || PageData.user.user_id || "")), a.push("uname=" + encodeURIComponent(PageData.user.user_name || "")), a.push("is_new_user=" + (PageData.user.is_new_user || ""))), PageData.thread && a.push("tid=" + (PageData.thread && PageData.thread.thread_id || "")));
    for (var n in e.extra)
        e.extra.hasOwnProperty(n) && a.push(n + "=" + encodeURIComponent(e.extra[n]));
    return t + "?" + a.join("&")
},scanPage: function(e) {
    var t = e ? e : $("body"), a = "stats-data", n = t.find("*[" + a + "]");
    n.length && $.each(n, function(e, t) {
        $.stats.processTag($(t))
    })
},processTag: function(e) {
    var t = "stats-event", a = "stats-data", n = "stats-datatype", o = e.tbattr(a), r = e.tbattr(t), s = e.tbattr(n);
    o && "" != o && (s && "" != s || (s = "query"), "json" == s && (o = $.param($.json.decode(o))), r = r && "" != r ? r : "click", e.tbattr(a, o), e.bind(r, function() {
        $.stats.sendRequest($(this).tbattr(a))
    }))
}};
var Stats = $.stats, Statistics = $.stats;
$.tb.Stats = {defaultConfig: {elms: ["A", "INPUT", "BUTTON"],url: "http://tb1.bdstatic.com/tb/img/pv.gif",need_st_type: !1,path_body: !0,path: "tagName",event_type: "click"},defaultParams: {fr: "tb0_itieba",st_mod: "frs",st_type: "tb-stats"},bind: function(e, t, a) {
    var a = $.extend({}, this.defaultConfig, a), t = $.extend({}, this.defaultParams, t), n = $(e), e = n[0], o = this;
    n.bind(a.event_type + ".tb-stats", function(n) {
        var r = n.target;
        if (!($.inArray(r.tagName, a.elms) < 0)) {
            for (var s; r !== e; ) {
                if (s = r.getAttribute("st_type"), null !== s) {
                    t.st_type = s;
                    break
                }
                r = r.parentNode
            }
            t.st_value = o.getPath(n.target, a.path, a.path_body ? document.body : e), (!a.need_st_type || s) && o.sendRequest(a.url, t)
        }
    })
},unbind: function(e) {
    $(e).unbind(".tb-stats")
},sendRequest: function(e, t) {
    var e = e + "?";
    if ("object" == typeof t)
        for (var a in t)
            "function" == typeof t[a] && (t[a] = t[a]()), e += a + "=" + t[a] + "&";
    window["tb-stats-img"] = new Image, window["tb-stats-img"].src = e + "t=" + (new Date).getTime()
},getPath: function(e, t, a) {
    for (var n = e[t] ? [e[t]] : []; e !== a; )
        e = e.parentNode, e[t] && n.push(e[t]);
    return n.reverse().join("-")
}}, function(e) {
    e("body").bind("mousedown", function(t) {
        for (var a, n = t.target; "BODY" != n.tagName; ) {
            if (a = e(n).tbattr("location")) {
                e.stats.hive(a);
                break
            }
            if (a = e(n).tbattr("locate")) {
                var o = a.split("#") || [];
                e.stats.track(o[0] || "", o[1] || "", o[2] || "");
                break
            }
            n = n.parentNode
        }
    })
}(jQuery);
;
!function(e, n) {
    e.getPageData = function(e, t, r) {
        if ("undefined" == typeof t && (t = null), r = r || n || {}, e) {
            if ("string" != typeof e)
                return t;
            for (var f = e.split("."), i = f.length, u = 0; i > u; u++) {
                if (e = f[u], !r)
                    return t;
                if ("undefined" == typeof r[e])
                    return Object.hasOwnProperty.call(r, e) && u == i - 1 ? void 0 : t;
                r = r[e]
            }
            return r
        }
        return t
    }
}(jQuery, window.PageData);
;
!function() {
    function e(e, n, r) {
        for (var i = 0, o = n.length; o > i; ++i) {
            var a = n[i], u = a.indexOf(r), l = a.slice(0, u), f = a.slice(u + 1), s = t[l];
            "function" == typeof s && (e = s(e, f))
        }
        return e
    }
    var t = {subByte: function(e, t) {
        return $.tb.subByte(e + "", t)
    },htmlLenLimit: function(e, t) {
        return e += "", $.tb.getByteLength(e) <= t ? e : ['<span title="' + e + '">', $.tb.subByte(e, t), "</span>"].join("")
    },date: function(e, t) {
        var n = e instanceof Date ? e : new Date(e), r = t, i = {"M+": n.getMonth() + 1,"d+": n.getDate(),"h+": n.getHours(),"m+": n.getMinutes(),"s+": n.getSeconds(),"q+": Math.floor((n.getMonth() + 3) / 3),S: n.getMilliseconds()};
        /(y+)/.test(r) && (r = r.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var o in i)
            new RegExp("(" + o + ")").test(r) && (r = r.replace(RegExp.$1, 1 == RegExp.$1.length ? i[o] : ("00" + i[o]).substr(("" + i[o]).length)));
        return r
    }};
    $.tb.filterFormat = function(t, n) {
        if ("undefined" == typeof n)
            return t;
        var r = /([.*+?^=!:${}()|[\]\/\\])/g, i = "{".replace(r, "\\$1"), o = "}".replace(r, "\\$1");
        "object" != typeof n && (n = Array.prototype.slice.call(arguments, 1));
        var a = "|", u = ":", l = new RegExp("#" + i + "([^" + i + o + "]+)" + o, "g");
        return t.replace(l, function(t, r) {
            r = r.split(a);
            var i = r[0], o = n[i], l = r.slice(1);
            return "function" == typeof o && (o = o(i)), "undefined" == typeof o ? t : e(o, l, u)
        })
    }, $.tb.filterFormat.filters = t
}();
;
(function() {
    function n(t, r, e) {
        if (t === r)
            return 0 !== t || 1 / t == 1 / r;
        if (null == t || null == r)
            return t === r;
        if (t._chain && (t = t._wrapped), r._chain && (r = r._wrapped), t.isEqual && A.isFunction(t.isEqual))
            return t.isEqual(r);
        if (r.isEqual && A.isFunction(r.isEqual))
            return r.isEqual(t);
        var u = l.call(t);
        if (u != l.call(r))
            return !1;
        switch (u) {
            case "[object String]":
                return t == String(r);
            case "[object Number]":
                return t != +t ? r != +r : 0 == t ? 1 / t == 1 / r : t == +r;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +r;
            case "[object RegExp]":
                return t.source == r.source && t.global == r.global && t.multiline == r.multiline && t.ignoreCase == r.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof r)
            return !1;
        for (var i = e.length; i--; )
            if (e[i] == t)
                return !0;
        e.push(t);
        var a = 0, c = !0;
        if ("[object Array]" == u) {
            if (a = t.length, c = a == r.length)
                for (; a-- && (c = a in t == a in r && n(t[a], r[a], e)); )
                    ;
        } else {
            if ("constructor" in t != "constructor" in r || t.constructor != r.constructor)
                return !1;
            for (var o in t)
                if (A.has(t, o) && (a++, !(c = A.has(r, o) && n(t[o], r[o], e))))
                    break;
            if (c) {
                for (o in r)
                    if (A.has(r, o) && !a--)
                        break;
                c = !a
            }
        }
        return e.pop(), c
    }
    var t = this, r = t._, e = {}, u = Array.prototype, i = Object.prototype, a = Function.prototype, c = u.slice, o = u.unshift, l = i.toString, f = i.hasOwnProperty, s = u.forEach, p = u.map, h = u.reduce, v = u.reduceRight, g = u.filter, d = u.every, m = u.some, y = u.indexOf, b = u.lastIndexOf, x = Array.isArray, j = Object.keys, _ = a.bind, A = function(n) {
        return new N(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = A), exports._ = A) : t._ = A, A.VERSION = "1.3.3";
    var w = A.each = A.forEach = function(n, t, r) {
        if (null != n)
            if (s && n.forEach === s)
                n.forEach(t, r);
            else if (n.length === +n.length) {
                for (var u = 0, i = n.length; i > u; u++)
                    if (u in n && t.call(r, n[u], u, n) === e)
                        return
            } else
                for (var a in n)
                    if (A.has(n, a) && t.call(r, n[a], a, n) === e)
                        return
    };
    A.map = A.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (w(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), n.length === +n.length && (e.length = n.length), e)
    }, A.reduce = A.foldl = A.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h)
            return e && (t = A.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (w(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u)
            throw new TypeError("Reduce of empty array with no initial value");
        return r
    }, A.reduceRight = A.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v)
            return e && (t = A.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = A.toArray(n).reverse();
        return e && !u && (t = A.bind(t, e)), u ? A.reduce(i, t, r, e) : A.reduce(i, t)
    }, A.find = A.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, A.filter = A.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (w(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, A.reject = function(n, t, r) {
        var e = [];
        return null == n ? e : (w(n, function(n, u, i) {
            t.call(r, n, u, i) || (e[e.length] = n)
        }), e)
    }, A.every = A.all = function(n, t, r) {
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, r) : (w(n, function(n, i, a) {
            return (u = u && t.call(r, n, i, a)) ? void 0 : e
        }), !!u)
    };
    var E = A.some = A.any = function(n, t, r) {
        t || (t = A.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, r) : (w(n, function(n, i, a) {
            return u || (u = t.call(r, n, i, a)) ? e : void 0
        }), !!u)
    };
    A.include = A.contains = function(n, t) {
        var r = !1;
        return null == n ? r : y && n.indexOf === y ? -1 != n.indexOf(t) : r = E(n, function(n) {
            return n === t
        })
    }, A.invoke = function(n, t) {
        var r = c.call(arguments, 2);
        return A.map(n, function(n) {
            return (A.isFunction(t) ? t || n : n[t]).apply(n, r)
        })
    }, A.pluck = function(n, t) {
        return A.map(n, function(n) {
            return n[t]
        })
    }, A.max = function(n, t, r) {
        if (!t && A.isArray(n) && n[0] === +n[0])
            return Math.max.apply(Math, n);
        if (!t && A.isEmpty(n))
            return -1 / 0;
        var e = {computed: -1 / 0};
        return w(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {value: n,computed: a})
        }), e.value
    }, A.min = function(n, t, r) {
        if (!t && A.isArray(n) && n[0] === +n[0])
            return Math.min.apply(Math, n);
        if (!t && A.isEmpty(n))
            return 1 / 0;
        var e = {computed: 1 / 0};
        return w(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {value: n,computed: a})
        }), e.value
    }, A.shuffle = function(n) {
        var t, r = [];
        return w(n, function(n, e) {
            t = Math.floor(Math.random() * (e + 1)), r[e] = r[t], r[t] = n
        }), r
    }, A.sortBy = function(n, t, r) {
        var e = A.isFunction(t) ? t : function(n) {
            return n[t]
        };
        return A.pluck(A.map(n, function(n, t, u) {
            return {value: n,criteria: e.call(r, n, t, u)}
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            return void 0 === r ? 1 : void 0 === e ? -1 : e > r ? -1 : r > e ? 1 : 0
        }), "value")
    }, A.groupBy = function(n, t) {
        var r = {}, e = A.isFunction(t) ? t : function(n) {
            return n[t]
        };
        return w(n, function(n, t) {
            var u = e(n, t);
            (r[u] || (r[u] = [])).push(n)
        }), r
    }, A.sortedIndex = function(n, t, r) {
        r || (r = A.identity);
        for (var e = 0, u = n.length; u > e; ) {
            var i = e + u >> 1;
            r(n[i]) < r(t) ? e = i + 1 : u = i
        }
        return e
    }, A.toArray = function(n) {
        return n ? A.isArray(n) ? c.call(n) : A.isArguments(n) ? c.call(n) : n.toArray && A.isFunction(n.toArray) ? n.toArray() : A.values(n) : []
    }, A.size = function(n) {
        return A.isArray(n) ? n.length : A.keys(n).length
    }, A.first = A.head = A.take = function(n, t, r) {
        return null == t || r ? n[0] : c.call(n, 0, t)
    }, A.initial = function(n, t, r) {
        return c.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, A.last = function(n, t, r) {
        return null == t || r ? n[n.length - 1] : c.call(n, Math.max(n.length - t, 0))
    }, A.rest = A.tail = function(n, t, r) {
        return c.call(n, null == t || r ? 1 : t)
    }, A.compact = function(n) {
        return A.filter(n, function(n) {
            return !!n
        })
    }, A.flatten = function(n, t) {
        return A.reduce(n, function(n, r) {
            return A.isArray(r) ? n.concat(t ? r : A.flatten(r)) : (n[n.length] = r, n)
        }, [])
    }, A.without = function(n) {
        return A.difference(n, c.call(arguments, 1))
    }, A.uniq = A.unique = function(n, t, r) {
        var e = r ? A.map(n, r) : n, u = [];
        return n.length < 3 && (t = !0), A.reduce(e, function(r, e, i) {
            return (t ? A.last(r) === e && r.length : A.include(r, e)) || (r.push(e), u.push(n[i])), r
        }, []), u
    }, A.union = function() {
        return A.uniq(A.flatten(arguments, !0))
    }, A.intersection = A.intersect = function(n) {
        var t = c.call(arguments, 1);
        return A.filter(A.uniq(n), function(n) {
            return A.every(t, function(t) {
                return A.indexOf(t, n) >= 0
            })
        })
    }, A.difference = function(n) {
        var t = A.flatten(c.call(arguments, 1), !0);
        return A.filter(n, function(n) {
            return !A.include(t, n)
        })
    }, A.zip = function() {
        for (var n = c.call(arguments), t = A.max(A.pluck(n, "length")), r = new Array(t), e = 0; t > e; e++)
            r[e] = A.pluck(n, "" + e);
        return r
    }, A.indexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e, u;
        if (r)
            return e = A.sortedIndex(n, t), n[e] === t ? e : -1;
        if (y && n.indexOf === y)
            return n.indexOf(t);
        for (e = 0, u = n.length; u > e; e++)
            if (e in n && n[e] === t)
                return e;
        return -1
    }, A.lastIndexOf = function(n, t) {
        if (null == n)
            return -1;
        if (b && n.lastIndexOf === b)
            return n.lastIndexOf(t);
        for (var r = n.length; r--; )
            if (r in n && n[r] === t)
                return r;
        return -1
    }, A.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u; )
            i[u++] = n, n += r;
        return i
    };
    var O = function() {
    };
    A.bind = function(n, t) {
        var r, e;
        if (n.bind === _ && _)
            return _.apply(n, c.call(arguments, 1));
        if (!A.isFunction(n))
            throw new TypeError;
        return e = c.call(arguments, 2), r = function() {
            if (!(this instanceof r))
                return n.apply(t, e.concat(c.call(arguments)));
            O.prototype = n.prototype;
            var u = new O, i = n.apply(u, e.concat(c.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, A.bindAll = function(n) {
        var t = c.call(arguments, 1);
        return 0 == t.length && (t = A.functions(n)), w(t, function(t) {
            n[t] = A.bind(n[t], n)
        }), n
    }, A.memoize = function(n, t) {
        var r = {};
        return t || (t = A.identity), function() {
            var e = t.apply(this, arguments);
            return A.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, A.delay = function(n, t) {
        var r = c.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, A.defer = function(n) {
        return A.delay.apply(A, [n, 1].concat(c.call(arguments, 1)))
    }, A.throttle = function(n, t) {
        var r, e, u, i, a, c, o = A.debounce(function() {
            a = i = !1
        }, t);
        return function() {
            r = this, e = arguments;
            var l = function() {
                u = null, a && n.apply(r, e), o()
            };
            return u || (u = setTimeout(l, t)), i ? a = !0 : c = n.apply(r, e), o(), i = !0, c
        }
    }, A.debounce = function(n, t, r) {
        var e;
        return function() {
            var u = this, i = arguments, a = function() {
                e = null, r || n.apply(u, i)
            };
            r && !e && n.apply(u, i), clearTimeout(e), e = setTimeout(a, t)
        }
    }, A.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments))
        }
    }, A.wrap = function(n, t) {
        return function() {
            var r = [n].concat(c.call(arguments, 0));
            return t.apply(this, r)
        }
    }, A.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--)
                t = [n[r].apply(this, t)];
            return t[0]
        }
    }, A.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, A.keys = j || function(n) {
        if (n !== Object(n))
            throw new TypeError("Invalid object");
        var t = [];
        for (var r in n)
            A.has(n, r) && (t[t.length] = r);
        return t
    }, A.values = function(n) {
        return A.map(n, A.identity)
    }, A.functions = A.methods = function(n) {
        var t = [];
        for (var r in n)
            A.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, A.extend = function(n) {
        return w(c.call(arguments, 1), function(t) {
            for (var r in t)
                n[r] = t[r]
        }), n
    }, A.pick = function(n) {
        var t = {};
        return w(A.flatten(c.call(arguments, 1)), function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, A.defaults = function(n) {
        return w(c.call(arguments, 1), function(t) {
            for (var r in t)
                null == n[r] && (n[r] = t[r])
        }), n
    }, A.clone = function(n) {
        return A.isObject(n) ? A.isArray(n) ? n.slice() : A.extend({}, n) : n
    }, A.tap = function(n, t) {
        return t(n), n
    }, A.isEqual = function(t, r) {
        return n(t, r, [])
    }, A.isEmpty = function(n) {
        if (null == n)
            return !0;
        if (A.isArray(n) || A.isString(n))
            return 0 === n.length;
        for (var t in n)
            if (A.has(n, t))
                return !1;
        return !0
    }, A.isElement = function(n) {
        return !(!n || 1 != n.nodeType)
    }, A.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, A.isObject = function(n) {
        return n === Object(n)
    }, A.isArguments = function(n) {
        return "[object Arguments]" == l.call(n)
    }, A.isArguments(arguments) || (A.isArguments = function(n) {
        return !(!n || !A.has(n, "callee"))
    }), A.isFunction = function(n) {
        return "[object Function]" == l.call(n)
    }, A.isString = function(n) {
        return "[object String]" == l.call(n)
    }, A.isNumber = function(n) {
        return "[object Number]" == l.call(n)
    }, A.isFinite = function(n) {
        return A.isNumber(n) && isFinite(n)
    }, A.isNaN = function(n) {
        return n !== n
    }, A.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, A.isDate = function(n) {
        return "[object Date]" == l.call(n)
    }, A.isRegExp = function(n) {
        return "[object RegExp]" == l.call(n)
    }, A.isNull = function(n) {
        return null === n
    }, A.isUndefined = function(n) {
        return void 0 === n
    }, A.has = function(n, t) {
        return f.call(n, t)
    }, A.noConflict = function() {
        return t._ = r, this
    }, A.identity = function(n) {
        return n
    }, A.times = function(n, t, r) {
        for (var e = 0; n > e; e++)
            t.call(r, e)
    }, A.escape = function(n) {
        return ("" + n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, A.result = function(n, t) {
        if (null == n)
            return null;
        var r = n[t];
        return A.isFunction(r) ? r.call(n) : r
    }, A.mixin = function(n) {
        w(A.functions(n), function(t) {
            B(t, A[t] = n[t])
        })
    };
    var F = 0;
    A.uniqueId = function(n) {
        var t = F++;
        return n ? n + t : t
    }, A.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g};
    var q = /.^/, k = {"\\": "\\","'": "'",r: "\r",n: "\n",t: "	",u2028: "\u2028",u2029: "\u2029"};
    for (var S in k)
        k[k[S]] = S;
    var R = /\\|'|\r|\n|\t|\u2028|\u2029/g, I = /\\(\\|'|r|n|t|u2028|u2029)/g, M = function(n) {
        return n.replace(I, function(n, t) {
            return k[t]
        })
    };
    A.template = function(n, t, r) {
        r = A.defaults(r || {}, A.templateSettings);
        var e = "__p+='" + n.replace(R, function(n) {
            return "\\" + k[n]
        }).replace(r.escape || q, function(n, t) {
            return "'+\n_.escape(" + M(t) + ")+\n'"
        }).replace(r.interpolate || q, function(n, t) {
            return "'+\n(" + M(t) + ")+\n'"
        }).replace(r.evaluate || q, function(n, t) {
            return "';\n" + M(t) + "\n;__p+='"
        }) + "';\n";
        r.variable || (e = "with(obj||{}){\n" + e + "}\n"), e = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + e + "return __p;\n";
        var u = new Function(r.variable || "obj", "_", e);
        if (t)
            return u(t, A);
        var i = function(n) {
            return u.call(this, n, A)
        };
        return i.source = "function(" + (r.variable || "obj") + "){\n" + e + "}", i
    }, A.chain = function(n) {
        return A(n).chain()
    };
    var N = function(n) {
        this._wrapped = n
    };
    A.prototype = N.prototype;
    var T = function(n, t) {
        return t ? A(n).chain() : n
    }, B = function(n, t) {
        N.prototype[n] = function() {
            var n = c.call(arguments);
            return o.call(n, this._wrapped), T(t.apply(A, n), this._chain)
        }
    };
    A.mixin(A), w(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = u[n];
        N.prototype[n] = function() {
            var r = this._wrapped;
            t.apply(r, arguments);
            var e = r.length;
            return "shift" != n && "splice" != n || 0 !== e || delete r[0], T(r, this._chain)
        }
    }), w(["concat", "join", "slice"], function(n) {
        var t = u[n];
        N.prototype[n] = function() {
            return T(t.apply(this._wrapped, arguments), this._chain)
        }
    }), N.prototype.chain = function() {
        return this._chain = !0, this
    }, N.prototype.value = function() {
        return this._wrapped
    }
}).call(this);
;
!function() {
    function t(t, e) {
        if (t instanceof Array) {
            for (var n = 0, i = t.length; i > n; n++)
                if (e.call(t[n], t[n], n) === !1)
                    return
        } else
            for (var n in t)
                if (t.hasOwnProperty(n) && e.call(t[n], t[n], n) === !1)
                    return
    }
    function e(t, e) {
        if (Array.prototype.indexOf)
            return t.indexOf(e);
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e)
                return n;
        return -1
    }
    function n(e, n) {
        if (Array.prototype.filter)
            return e.filter(n);
        var i = [];
        return t(e, function(t, e, a) {
            n(t, e, a) && i.push(t)
        }), i
    }
    function i(t, e) {
        return n(e, function(e) {
            return !r.loadingPaths[e] || !a(r.cache[e], t, [])
        })
    }
    function a(t, n, i) {
        if (!t || t._loaded)
            return !1;
        i.push(t.name);
        var s = t.deps || [];
        if (s.length) {
            if (e(s, n) > -1)
                return !0;
            for (var o = 0; o < s.length; o++)
                if (e(i, s[o]) < 0 && a(r.cache[s[o]], n, i))
                    return !0;
            return !1
        }
        return !1
    }
    function r(t, e) {
        this.name = e, this.path = t, this.fn = null, this.exports = {}, this._loaded = !1, this._requiredStack = [], this._readyStack = [], r.cache[this.name] = this
    }
    function s(t) {
        var e = d(t);
        return r.initingPaths[t] || e.init(), e.exports
    }
    function o(e) {
        var n = !0;
        return t(e, function(t) {
            return t in r.loadedPaths ? void 0 : n = !1
        }), n
    }
    function h(t) {
        return u.baseUrl ? u.baseUrl + t : t
    }
    function d(t) {
        var e = t.indexOf(":") > -1 ? t : h(t);
        return r.cache[t] ? r.cache[t] : new r(e, t)
    }
    var c = {version: "2.0.0",debug: !1}, u = {baseUrl: void 0};
    r.loadedPaths = {}, r.loadingPaths = {}, r.initingPaths = {}, r.cache = {}, r.paths = {}, r.moduleFileMap = {}, r.requiredPaths = {}, r.lazyLoadPaths = {}, r.prototype = {init: function() {
        if (!this._inited) {
            if (this._inited = !0, !this.fn)
                throw new Error('Module "' + this.name + '" not found!');
            var t;
            r.initingPaths[this.name] = !0, (t = this.fn.call(null, s, this.exports)) && (this.exports = t), r.initingPaths[this.name] = !1
        }
    },load: function() {
        r.loadingPaths[this.path] = !0;
        var t = r.moduleFileMap[this.name] || this.path;
        f.create({src: t})
    },lazyLoad: function() {
        var t = this.name, e = this.path;
        r.lazyLoadPaths[t] ? (this.define(), delete r.lazyLoadPaths[t]) : r.loadedPaths[e] ? this.triggerStack() : r.loadingPaths[e] || (r.requiredPaths[this.name] = !0, this.load())
    },ready: function(t, e) {
        var n = e ? this._requiredStack : this._readyStack;
        t ? this._loaded ? (this.init(), t()) : n.push(t) : (this._loaded = !0, r.loadedPaths[this.path] = !0, delete r.loadingPaths[this.path], this.triggerStack())
    },triggerStack: function() {
        this._readyStack.length > 0 && (this.init(), t(this._readyStack, function(t) {
            t.doing || (t.doing = !0, t())
        }), this._readyStack = []), this._requiredStack.length > 0 && (t(this._requiredStack, function(t) {
            t.doing || (t.doing = !0, t())
        }), this._requiredStack = [])
    },define: function() {
        var e = this, n = this.deps, a = [];
        !n && c.debug && (this.deps = getDependents(e.fn)), n = i(e.path, this.deps), n.length ? (r.loadingPaths[this.path] = !0, t(n, function(t) {
            var e = d(t);
            a.push(e.path)
        }), t(n, function(t) {
            var n = d(t);
            n.ready(function() {
                o(a) && e.ready()
            }, !0), n.lazyLoad()
        })) : this.ready()
    }};
    var l = {_paths: [],_domain: [],create: function(t) {
        if (!(t.src in this._paths)) {
            this._paths[t.src] = !0;
            var e = document.getElementsByTagName("head")[0], n = document.createElement("link");
            t.charset && (n.charset = t.charset), n.href = this._domain + "/" + t.src, n.rel = "stylesheet", e.insertBefore(n, e.firstChild)
        }
    },setDomain: function(t) {
        this._domain = t
    }}, f = {create: function(e) {
        if (!(e.src in this._paths)) {
            this._paths[e.src] = !0, t(this._rules, function(t) {
                t.call(null, e)
            });
            var n = document.getElementsByTagName("head")[0], i = document.createElement("script");
            i.type = e.type || "text/javascript", e.charset && (i.charset = e.charset), i.src = e.src, i.onload = i.onerror = i.onreadystatechange = function() {
                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i.onload = i.onerror = i.onreadystatechange = null, i.parentNode && !c.debug && n.removeChild(i), i = void 0, e.loaded && e.loaded())
            }, n.insertBefore(i, n.firstChild)
        }
    },_paths: {},_rules: [],addPathRule: function(t) {
        this._rules.push(t)
    }};
    c.use = function(e, n) {
        "string" == typeof e && (e = [e]);
        var i = [], a = [];
        t(e, function(t, e) {
            a[e] = !1
        }), t(e, function(e, r) {
            var s = d(e);
            s.ready(function() {
                i[r] = s.exports, a[r] = !0;
                var e = !0;
                t(a, function(t) {
                    return t === !1 ? e = !1 : void 0
                }), n && e && n.apply(null, i)
            }), s.lazyLoad()
        })
    }, c.loadCss = function(t) {
        l.create({src: t})
    }, s.async = c.use, c.require = s, c.module = function(t, e, n) {
        var i = d(t);
        i.fn = e, i.deps = n || [], r.requiredPaths[t] ? i.define() : r.lazyLoadPaths[t] = !0
    }, c.pathRule = function(t) {
        f.addPathRule(t)
    }, c.setDomain = function(t) {
        l.setDomain(t)
    }, c._fileMap = function(e, n) {
        "object" == typeof e ? t(e, function(t, e) {
            c._fileMap(e, t)
        }) : ("string" == typeof n && (n = [n]), t(n, function(t) {
            r.moduleFileMap[t] = e
        }))
    }, c.config = function(t) {
        var e = t.baseUrl;
        "string" == typeof e && (e && "/" == e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), u.baseUrl = e)
    }, "F" in window || (window.F = c)
}();
;
var _ = _ || {};
$.extend(_, function() {
    var t = {debug: !1,eventPool: $({}),observe: function() {
        this.eventPool.bind.apply(this.eventPool, arguments)
    },fire: function() {
        this.eventPool.trigger.apply(this.eventPool, arguments)
    },stopObserving: function() {
        this.eventPool.unbind.apply(this.eventPool, arguments)
    }}, e = {pointCuts: {},addAdvice: function(t, e, n, r) {
        void 0 === this.pointCuts[t] && (this.pointCuts[t] = {}), void 0 === this.pointCuts[t][e] && (this.pointCuts[t][e] = []), this.pointCuts[t][e].push({type: n,advice: r})
    },inject: function(t, e) {
        var n = this.pointCuts[t];
        if (n) {
            for (var r in n)
                for (var i, o = n[r]; i = o.shift(); )
                    $.aop[i.type]({target: e,method: r}, i.advice);
            this.clear(t)
        }
    },clear: function(t) {
        delete this.pointCuts[t]
    }}, n = function(t) {
        t.hasOwnProperty("initial") && $.isFunction(t.initial) || (t.initial = new Function);
        var e = function(t) {
            var e = {noMethod: {},method: {}};
            for (var n in t)
                "prototype" != n && ($.isFunction(t[n]) ? e.method[n] = t[n] : e.noMethod[n] = $.isArray(t[n]) ? Array.prototype.slice.call(t[n], 0) : $.isPlainObject(t[n]) ? $.extend({}, t[n]) : t[n]);
            return e
        }, r = function() {
            var n = e(t);
            $.extend(this, n.noMethod), r.prototype.initial && $.isFunction(r.prototype.initial) && r.prototype.initial.apply(this, arguments)
        };
        return r.extend = function(t) {
            var e = r.prototype, i = {};
            $.extend(i, e, t);
            var o = n(i);
            return $.extend(o.prototype, {__parent__: function(t) {
                var n = this;
                if (e.hasOwnProperty(t))
                    return $.isFunction(e[t]) ? function() {
                        e[t].apply(n, arguments)
                    } : e[t]
            },__super__: function() {
                return this.__parent__("initial").apply(this, arguments)
            }}), o
        }, $.extend(r.prototype, t, {prototype: r.prototype}), r
    }, r = n({type: "",target: null,initial: function(t, e) {
        this.type = t, this.target = e
    }}), i = n({_eventStack: {},initial: function() {
    },bind: function(t, e, n) {
        this._eventStack.hasOwnProperty(t) || (this._eventStack[t] = []), this._eventStack[t].push({handler: e,context: n})
    },unbind: function(t, e) {
        if (this._eventStack.hasOwnProperty(t)) {
            if (!e || !$.isFunction(e))
                return void delete this._eventStack[t];
            for (var n = this._eventStack[t], r = 0, i = n.length; i > r; r++)
                if (n[r].handler == e) {
                    n.splice(r, 1);
                    break
                }
        }
    },trigger: function(t) {
        if (this._eventStack.hasOwnProperty(t) && this._eventStack[t].length) {
            var e = new r(t, this), n = Array.prototype.slice.call(arguments, 0), i = [];
            n.shift(), n = [e].concat(n), this._eventStack[t] && (i = Array.prototype.slice.call(this._eventStack[t]));
            for (var o = 0, a = i, s = i.length; s > o; o++)
                if (a && a[o]) {
                    var u = a[o], c = u.handler, l = u.context || null;
                    c && $.isFunction(c) && c.apply(l, n)
                }
        }
    },observe: function() {
        t.observe.apply(t, arguments)
    },stopObserving: function() {
        t.stopObserving.apply(t, arguments)
    },fire: function() {
        t.fire.apply(t, arguments)
    }}), o = {component: ["component"],widget: ["widget"],controller: []}, a = {component: ["component", "widget"],widget: ["component", "widget"],controller: ["component", "widget"],template: ["component", "widget"]}, s = {}, u = /[^\/]*$/, c = function(t) {
        var e = function(e) {
            return t.apply(this, e)
        };
        return e.prototype = t.prototype, function() {
            return new e(arguments)
        }
    }, l = {define: function(t) {
        if (t && t.hasOwnProperty("path") && t.hasOwnProperty("sub")) {
            var e = t.path, n = [], r = [], i = null, o = p.getModuleAttr(e);
            if (p.checkAndInitAlias(t), t.requires = p.convertPaths(t.requires, o), t.extend = p.convertAlias(t.extend, o), i = t.extend, r = t.requires, l._checkDeps(e, t), r && $.isArray(r) && r.length > 0)
                for (var a = 0, s = r.length; s > a; a++)
                    n.push(p.getJsPath(r[a], o));
            i && "" != i && (i = p.getJsPath(i), n.push(i));
            var u = p.getJsPath(e);
            F.module(u, function(e, n) {
                var r = $.extend({}, t.sub);
                if (r.require = e, r.__attr = o, i) {
                    var a = e(i);
                    if (!a || !a.hasOwnProperty("cls"))
                        throw new Error("@ModuleFactroy : Superclass is not defined!");
                    n.cls = a.cls.extend(r)
                } else
                    n.cls = p.extend(r)
            }, n)
        }
    },use: function(t, n, r, i) {
        var o = p.getModuleAttr(t);
        F.use(o.path, function(a) {
            var s, u, l, h;
            if (e.inject(t, a.cls), u = a.cls && c(a.cls) || null, l = $.isArray(n) ? n : [n], !u)
                throw new Error("class is undefined! - " + o.path);
            l[0] && l[0].loadCss === !0 && (h = p.getCssPath(t), F.loadCss(h)), s = u.apply(null, l), "widget" != o.type || "undefined" != typeof i && i === !1 || (window[o.scope] = window[o.scope] || {}, window[o.scope][o.module] = s), r && $.isFunction(r) && r.call(null, s)
        })
    },getInstance: function(t, e) {
        var n = p.getModuleAttr(t), r = (n.modulePath, l._checkGlobalInstance(t));
        r && "object" == typeof r ? e && $.isFunction(e) && e.call(null, r) : l.use(t, null, function(n) {
            n && "object" == typeof n && (l._addGlobalInstance(t, n), e && $.isFunction(e) && e.call(null, n))
        })
    },_checkGlobalInstance: function(t) {
        var e = p.getModuleAttr(t), n = e.modulePath;
        window.__moduleInstances__ || (window.__moduleInstances__ = {});
        var r = window.__moduleInstances__[n];
        return r ? r : null
    },_addGlobalInstance: function(t, e) {
        var n = l._checkGlobalInstance(t);
        if (n)
            return !1;
        var r = p.getModuleAttr(t), i = r.modulePath;
        return window.__moduleInstances__[i] = e, !0
    },_checkDeps: function(t, e) {
        var n = p.getModuleAttr(t);
        if (void 0 !== n.type) {
            if ($.isArray(o[n.type]) && e.extend && "" != e.extend && $.inArray(p.getModuleAttr(e.extend).type, o[n.type]) < 0)
                throw new Error("@ModuleFactroy._checkDeps : Can not extends module! - " + t);
            if ($.isArray(a[n.type]) && e.hasOwnProperty("requires") && $.isArray(e.requires))
                for (var r = 0, i = e.requires.length; i > r; r++) {
                    var s = p.getModuleAttr(e.requires[r], n);
                    if (s.module != n.module && $.inArray(s.type, a[n.type]) < 0)
                        throw new Error("@ModuleFactroy._checkDeps : can not require module!")
                }
        }
    }}, p = i.extend({__attr: {},initial: function() {
    },requireInstance: function(t, e) {
        if (t = p.convertAlias(t, this.__attr), this.__checkUse(t), !this.require || !$.isFunction(this.require))
            throw new Error("@Module : this._require is not defined!");
        var n = p.getModuleAttr(t, this.__attr), r = n.path, i = this.require(r), o = c(i.cls), a = $.isArray(e) ? e : [e], s = o.apply(null, a);
        return s
    },use: function() {
        var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
        return this.requireInstance.apply(this, [t, e])
    },getInstance: function(t) {
        if (t = p.convertAlias(t, this.__attr), this.__checkUse(t), !this.require || !$.isFunction(this.require))
            throw new Error("@Module : this._require is not defined!");
        var e = (p.getModuleAttr(t, this.__attr), l._checkGlobalInstance(t));
        return e && "object" == typeof e ? e : (e = this.requireInstance(t), l._addGlobalInstance(t, e), e)
    },requireInstanceAsync: function(t) {
        this.__checkUse(t), l.use.apply(null, arguments)
    },__checkUse: function(t) {
        if (t.indexOf("/") > 0) {
            var e = p.getModuleAttr(t);
            if ((e.scope != this.__attr.scope || e.type != this.__attr.type || e.module != this.__attr.module) && $.inArray(e.type, a[this.__attr.type]) < 0)
                throw new Error("@Module : Can not use this Module!")
        }
    }});
    return p.checkAndInitAlias = function(t) {
        var e, n, r = t.path, i = r.match(u)[0];
        if (i !== r && "__alias" === i) {
            if (n = $.trim(r).split("/"), e = n[2], !t.sub.alias)
                throw new Error("@Module : __alias can not be used !");
            s[e] = t.sub.alias
        }
    }, p.convertPaths = function(t, e) {
        var n = [];
        if ($.isArray(t))
            return $.each(t, function(t, r) {
                n.push(p.convertAlias(r, e))
            }), n
    }, p.convertAlias = function(t, e) {
        var n, r;
        return e && t ? (n = e.module, r = s[n] || {}, r[t] && (t = r[t]), t) : t
    }, p.getModuleAttr = function(t, e) {
        var n, r, i, o, a, s, u, c, l = "", h = "/";
        if (n = t.replace(/\/$/, "").split("/"), u = n.length, 1 == u && e)
            o = t, a = e.module, r = e.type, i = e.scope;
        else if (3 === u || 4 === u)
            r = n[1].toLowerCase(), a = n[2], i = n[0], o = u > 3 ? n[3] : n[2];
        else {
            if (!(u > 4))
                return !1;
            r = n[1].toLowerCase(), a = n[2], i = n[0];
            for (var d = 3; u - 1 > d; d++)
                l += n[d] + h;
            o = n[u - 1]
        }
        return o = p.nameToFile(o), s = (i + h + r + h + p.nameToFile(a) + h + l + o + ".js?class").toString(), c = (i + h + r + h + a + h + l + o).toString(), {scope: i,module: a,file: o,type: r,path: s,modulePath: c}
    }, p.nameToFile = function(t) {
        return t.replace(/([a-z])([A-Z])/g, function() {
            return arguments[1] + "_" + arguments[2]
        }).toLowerCase()
    }, p.getJsPath = function(t, e) {
        var n = p.getModuleAttr(t, e);
        return n.path
    }, p.getCssPath = function(t) {
        return "/tb/static-" + t.replace(/^(\w+\/\w+\/)(\w+).*/g, function() {
            if (arguments[1] && arguments[2]) {
                var t = p.nameToFile(arguments[2]);
                return arguments[1] + t + "/" + t + ".css"
            }
            return arguments[0]
        })
    }, {Module: {use: l.use,define: l.define,getInstance: l.getInstance},Class: n,Dispatcher: i,MessageManager: t,AopManager: e}
}());
;
!function(t) {
    void 0 === t && new Error("F is not defined, map config aborted.");
    var c = {};
    t.pathRule(function(t) {
        if (t.src.match(/^([\w-]+\/)*[\w-]+$/i)) {
            var c = t.src.split("/"), s = c.length;
            3 === s && (c.push(c[2]), t.src = c.join("/"))
        }
    }), t.pathRule(function(t) {
        var c = t.src.match(/([\w-]+\/[\w-]+\/[\w-]+\/[\w-]+)(\.js)?(\?class)?$/i);
        c && (t.src = c[1] + c[2])
    }), t.pathRule(function(t) {
        t.src.match(/\.js/i) || (t.src += ".js");
        var s;
        return "object" == typeof c && (s = c[t.src]) ? (t.src = s, void (t.src = "http://tb1.bdstatic.com" + t.src)) : void (t.src = "http://tb1.bdstatic.com/tb/static-" + t.src)
    }), t.tbConfig = function(t) {
        $.extend(c, t)
    }, t.setDomain("http://tb1.bdstatic.com")
}(F);
;
!function(e) {
    e.baidu = e.baidu || {}, baidu.template = function(t, a) {
        var r = function() {
            if (!e.document)
                return n._compile(t);
            var a = document.getElementById(t);
            if (a) {
                if (n.cache[t])
                    return n.cache[t];
                var r = /^(textarea|input)$/i.test(a.nodeName) ? a.value : a.innerHTML;
                return n._compile(r)
            }
            return n._compile(t)
        }(), p = n._isObject(a) ? r(a) : r;
        return r = null, p
    };
    var n = baidu.template;
    n.versions = n.versions || [], n.versions.push("1.0.6"), n.cache = {}, n.LEFT_DELIMITER = n.LEFT_DELIMITER || "<%", n.RIGHT_DELIMITER = n.RIGHT_DELIMITER || "%>", n.ESCAPE = !0, n._encodeHTML = function(e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }, n._encodeReg = function(e) {
        return String(e).replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
    }, n._encodeEventHTML = function(e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
    }, n._compile = function(e) {
        var t = "var _template_fun_array=[];\nvar fn=(function(data){\nvar _template_varName='';\nfor(name in data){\n_template_varName+=('var '+name+'=data[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('" + n._analysisStr(e) + "');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object", t)
    }, n._isObject = function(e) {
        return "function" == typeof e || !(!e || "object" != typeof e)
    }, n._analysisStr = function(e) {
        var t = n.LEFT_DELIMITER, a = n.RIGHT_DELIMITER, r = n._encodeReg(t), p = n._encodeReg(a);
        return e = String(e).replace(new RegExp("(" + r + "[^" + p + "]*)//.*\n", "g"), "$1").replace(new RegExp("<!--.*?-->", "g"), "").replace(new RegExp(r + "\\*.*?\\*" + p, "g"), "").replace(new RegExp("[\\r\\t\\n]", "g"), "").replace(new RegExp(r + "(?:(?!" + p + ")[\\s\\S])*" + p + "|((?:(?!" + r + ")[\\s\\S])+)", "g"), function(e, n) {
            var t = "";
            if (n)
                for (t = n.replace(/\\/g, "&#92;").replace(/'/g, "&#39;"); /<[^<]*?&#39;[^<]*?>/g.test(t); )
                    t = t.replace(/(<[^<]*?)&#39;([^<]*?>)/g, "$1\r$2");
            else
                t = e;
            return t
        }), e = e.replace(new RegExp("(" + r + "[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?" + p, "g"), "$1;" + a).replace(new RegExp("(" + r + ":?[hvu]?[\\s]*?=[\\s]*?[^;|" + p + "]*?);[\\s]*?" + p, "g"), "$1" + a).split(t).join("	"), e = n.ESCAPE ? e.replace(new RegExp("\\t=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'") : e.replace(new RegExp("\\t=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':$1,'"), e = e.replace(new RegExp("\\t:h=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'").split("	").join("');").split(a).join("_template_fun_array.push('").split("\r").join("\\'")
    }
}(window);
;
function showInfo(n) {
    $("#output").html(n)
}
!function() {
    var n = {type: "swipe",distance: {x: 0,y: 0},direction: {x: "",y: ""}}, t = {}, i = {}, e = !1;
    $(window).bind("touchstart", function(n) {
        var i = n.originalEvent;
        if (i.changedTouches.length > 0) {
            var o = i.changedTouches[0];
            i.stopPropagation(), t.x = o.clientX, t.y = o.clientY, t.instance = o, e = !0
        }
    }), $(window).bind("touchend touchcanel", function(o) {
        var c = o.originalEvent;
        if (e && c.changedTouches.length > 0) {
            var a = c.changedTouches[0];
            i.x = a.clientX, i.y = a.clientY;
            var d = {x: i.x - t.x,y: i.y - t.y};
            n.direction.x = d.x > 0 ? "left" : d.x < 0 ? "right" : "none", n.distance.x = Math.abs(d.x), n.direction.y = d.y > 0 ? "down" : d.y < 0 ? "up" : "none", n.distance.y = Math.abs(d.y), $(t.instance.target).trigger(n), e = !1
        }
    }), innerTools = {hasEvent: function(n, t) {
        var i = !1, e = $._data(n, "events");
        return e && e[t] && (i = !0), i
    }}
}(), $("#touchable").bind("swipe", function(n) {
    var t = ["X dist:", n.distance.x, ",dire:", n.direction.x, "|Y dist:", n.distance.y, ",dire:", n.direction.y];
    showInfo(t.join(""))
});
;
var PageLink = {_debug: -1,init: function(e, t, n, a, o) {
    var i = this, d = a || document.body;
    if ($(d).mousedown(function(n) {
        "A" === n.target.nodeName && i._onclick(n, e, t, o)
    }), $(d).click(function(n) {
        "A" !== n.target.nodeName && i._onclick(n, e, t, o)
    }), n && n.length)
        for (var m = 0; m < n.length; m++)
            i.bindCustomElem(n[m]);
    window.location.href.indexOf("page_link_debug=true") > 0 && (i._debug = 0, $(d).mouseover(function(n) {
        "A" === n.target.nodeName && i._onclick(n, e, t, o)
    }))
},bindCustomElem: function(e) {
    $(e).attr("page_link_custom_elem_flag", "true")
},_onclick: function(e, t, n, a) {
    var o = this, i = e.target;
    if (!i || "BODY" != i.nodeName) {
        var d = "";
        if ((!a || !i || (d = a(i), "exit" != d)) && o._is_need_send_msg(i)) {
            for (var m = "fr=" + t + "&st_type=page_link&st_mod=" + n, _ = $.trim(i.className), r = i.id, c = i.nodeName, l = $.trim(i.className), s = 0; i && i.parentNode && i != document.body && i.parentNode != document.body; )
                i = i.parentNode, c = i.nodeName + c, i.className && 4 > s && (s++, l = l ? $.trim(i.className) + "-" + l : $.trim(i.className));
            m += "&st_value=" + c;
            var g = $(e.target).prevAll().length;
            m += g > 0 ? "&dom_i=" + g : "&dom_i=0", _ && (m += "&class_name=" + _), r && (m += "&id_name=" + r), l && (m += "&class_path=" + l), m = m.replace(/\ /g, "-"), "" != d && (m += "&" + d), o._debug > -1 && (o._debug++, $(document.body).append("<div>[" + o._debug + "] " + m + "<div>"), $(e.target).attr("title", "[" + o._debug + "] " + m), console && console.log("[" + o._debug + "] " + m));
            var u = new Image;
            window["bd_pv_" + (new Date).getTime()] = u, u.src = "http://tb1.bdstatic.com/tb/img/pv.gif?" + m + "&t=" + (new Date).getTime(), u = null
        }
    }
},_is_need_send_msg: function(e) {
    var t = e.nodeName, n = $(e).attr("type");
    return "A" == t || "INPUT" == t && ("submit" == n || "button" == n) || "BUTTON" == t ? !0 : $(e).attr("page_link_custom_elem_flag") ? !0 : !1
}};
;
F.module("datalazyload", function() {
    function t(t) {
        t.style.display = g, t.className = "", $(t.value).appendTo(t.parentNode)
    }
    function e(t) {
        v._getHtmlById($(t).tbattr("id"))
    }
    function n(t, e) {
        var n, i;
        return (n = t.id) || (n = t.id = v.guid("tb-lazyload")), (i = e.tbLazyloadId) || (i = e.tbLazyloadId = v.guid("tb-lazyload")), n + i
    }
    function i(t) {
        return t._tb_lazy_width ? t._tb_lazy_width : t._tb_lazy_width = $(t).outerWidth()
    }
    function a(t) {
        return t._tb_lazy_height ? t._tb_lazy_height : t._tb_lazy_height = $(t).outerHeight()
    }
    function o(t, e, n) {
        if (!t.offsetWidth)
            return !1;
        var o, r = $(t).offset(), c = !0, u = r.left, l = r.top, f = {left: u,top: l,right: u + i(t),bottom: l + a(t)};
        return o = s(e, f), o && n && (c = s(n, f)), c && o
    }
    function r(t, e) {
        var n = this;
        if (!(n instanceof r))
            return new r(t, e);
        "undefined" == typeof t && (t = L.container);
        var i = t;
        $.isPlainObject(i) || (i = e || {}, t && (i.container = t)), $.isArray(i.container) ? 0 == i.container.length && (i.container = L.container) : i.container = $(i.container), i = $.extend(L, i), n.userConfig = i, l = n.userConfig.imgFlag || l, n._callbacks = i.callbacks || {}, n._containerIsNotDocument = $.isArray(n.userConfig.container) ? 9 != n.userConfig.container[0].get(0).nodeType : 9 != n.userConfig.container.get(0).nodeType, n._filterItems(), n._initLoadEvent()
    }
    function s(t, e) {
        var n = {};
        return n.top = Math.max(t.top, e.top), n.bottom = Math.min(t.bottom, e.bottom), n.left = Math.max(t.left, e.left), n.right = Math.min(t.right, e.right), n.bottom >= n.top && n.right >= n.left
    }
    function c(e, n, i) {
        "img-src" === n && (n = "img"), $.isArray(e) || (e = $(e));
        var a = i || l + d, o = i || f + d;
        $.each(e, function(e) {
            "img" == n ? "img" == e.nodeName.toLowerCase() ? y(e, a) : $(e).find("img").each(function(t) {
                y(t, a)
            }) : "textarea" == e.nodeName.toLowerCase() && $(e).hasClass(o) ? t(e, !0) : $(e).find("textarea." + o).each(function(e) {
                t(e, !0)
            })
        })
    }
    var u = window, l = (u.document, "data-tb-lazyload"), f = "tb-datalazyload", d = "-custom", _ = {top: 200}, g = "none", h = "scroll", m = "touchmove", b = "resize", p = 50, v = {_guid: 0,EMPTY: "",guid: function(t) {
        return (t || v.EMPTY) + v.guid++
    },later: function(t, e, n, i, a) {
        e = e || 0;
        var o, r, s = t, c = $.makeArray(a);
        return "string" == typeof t && (s = i[t]), s || S.error("method undefined"), o = function() {
            s.apply(i, c)
        }, r = n ? setInterval(o, e) : setTimeout(o, e), {id: r,interval: n,cancel: function() {
            this.interval ? clearInterval(r) : clearTimeout(r)
        }}
    },buffer: function(t, e, n) {
        function i() {
            i.stop(), a = v.later(t, e, 0, n || this, arguments)
        }
        if (e = e || 150, -1 === e)
            return function() {
                t.apply(n || this, arguments)
            };
        var a = null;
        return i.stop = function() {
            a && (a.cancel(), a = 0)
        }, i
    },unescapeHTML: function() {
        var t = document.createElement("div");
        return function(e) {
            var n;
            return t.innerHTML = e, n = t.textContent
        }
    }(),_getHtmlById: function(t) {
        var e = document.getElementById(t), n = "";
        if (e.firstChild && 8 === e.firstChild.nodeType) {
            if (n = e.firstChild.nodeValue, "" == $.trim(n))
                return n;
            $(n).insertBefore($(e)), e.parentNode.removeChild(e)
        }
        return n
    },filter: function(t, e, n) {
        var i = [];
        return $.each(t, function(a, o) {
            e.call(n || this, o, a, t) && i.push(o)
        }), i
    }}, y = function(t, e, n) {
        e = e || l;
        var i = t.getAttribute(e);
        if (i && t.src != i) {
            var a = t.getAttribute("onloadfun");
            a && n && $.isFunction(n[a]) ? n[a].apply({img: t}) : t.src = i, t.removeAttribute(e)
        }
    }, C = function(t, e) {
        setTimeout(function() {
            e(t), $(t).removeClass("hideLzl")
        }, 100)
    }, L = {diff: _,imgOnloadCallback: {},subListLoadCallback: {},placeholder: "http://tb1.bdstatic.com/tb/static-frs/img/v2/video_background.jpg?v=1",execScript: !0,container: $(document.body),autoDestroy: !0};
    return $.extend(r.prototype, {_filterItems: function() {
        var t = this, e = t.userConfig, n = t.userConfig.container, i = [], a = [], o = [], r = [], s = [n];
        $.isArray(e.container) && (t._backCompact = 1, s = e.container), $.each(s, function(e, n) {
            n = n.get(0), i = i.concat(v.filter($(n).find("img"), t._filterImg, t)), a = a.concat(v.filter($(n).find(".hideLzl"), t._filterSubList, t)), o = $.merge(o, $(n).find("textarea[data-type=" + f + "]")), r = $.merge(r, $(n).find("code[data-type=" + f + "]"))
        }), t._images = i, t._subList = a, t._textareas = o, t._codes = r
    },_filterImg: function(t) {
        {
            var e = this;
            e.userConfig.placeholder
        }
        return t.getAttribute(l) ? !0 : void 0
    },_filterSubList: function(t) {
        return $(t).hasClass("hideLzl") ? !0 : void 0
    },_initLoadEvent: function() {
        function t() {
            e._isLoadAllLazyElements() || $(document).ready(o)
        }
        var e = this, n = new Image, i = e.userConfig.placeholder, a = e.userConfig.autoDestroy, o = function() {
            e._loadItems(), a && e._isLoadAllLazyElements() && e.destroy()
        };
        e._loadFn = v.buffer(o, p, e), e.resume(), n.src = i, n.complete ? t() : n.onload = t
    },refresh: function() {
        this._loadFn()
    },_loadItems: function() {
        var t, e, n = this, i = n.userConfig.container;
        (n._backCompact || !n._containerIsNotDocument || i.get(0).offsetWidth) && (e = n._getBoundingRect(), !n._backCompact && n._containerIsNotDocument && (t = n._getBoundingRect(n.userConfig.container)), n._loadImgs(e, t, n.userConfig.imgOnloadCallback), n._loadCodeAreas(e, t), n._loadSublist(e, t, n.userConfig.subListOnloadCallback), n._loadTextAreas(e, t), n._fireCallbacks(e, t))
    },_loadImgs: function(t, e, n) {
        var i = this;
        i._images = v.filter(i._images, function(a) {
            return o(a, t, e) ? y(a, i.userConfig.imgFlag || null, n) : !0
        }, i)
    },_loadSublist: function(t, e, n) {
        var i = this;
        i._subList = v.filter(i._subList, function(i) {
            return o(i, t, e) ? void C(i, n) : !0
        }, i)
    },_loadCodeAreas: function(t, n) {
        var i = this, a = i.userConfig.execScript;
        i._codes = v.filter(i._codes, function(r) {
            return o(r, t, n) ? (e(r, a), void (i._subList = i._subList.concat(v.filter($(i.userConfig.container).find(".hideLzl"), i._filterSubList, i)))) : !0
        }, i)
    },_loadTextAreas: function(e, n) {
        var i = this, a = i.userConfig.execScript;
        i._textareas = v.filter(i._textareas, function(i) {
            return o(i, e, n) ? t(i, a) : !0
        }, i)
    },_fireCallbacks: function(t, e) {
        var n = this, i = n._callbacks;
        $.each(i, function(n, a) {
            var r = a.el, s = !1, c = a.fn;
            o(r, t, e) && (s = c.call(r)), s !== !1 && delete i[key]
        })
    },addCallback: function(t, e) {
        var i = this, a = i._callbacks;
        t = $(t).get(0), a[n(t, e)] = {el: t,fn: e}, i._loadFn()
    },loadSpecialCodeArea: function(t) {
        e(t)
    },loadAllTextArea: function() {
        var e = this, n = e.userConfig.execScript;
        e._codes = v.filter(e._textareas, function(e) {
            return t(e, n)
        }, e)
    },loadAllCodeArea: function() {
        var t = this, n = t.userConfig.execScript;
        t._codes = v.filter(t._codes, function(t) {
            return e(t, n)
        }, t)
    },removeCallback: function(t, e) {
        var i = this._callbacks;
        t = $(t).get(0), delete i[n(t, e)]
    },getElements: function() {
        return {images: this._images,subList: this._subList,textareas: this._textareas,codes: this._codes}
    },addElements: function(t) {
        var e = this, n = e._images || [], i = e._subList || [], a = e._textareas || [], o = e._codes || [];
        $.each(t, function(t, e) {
            var r = e.nodeName.toLowerCase();
            "img" == r ? n.push(e) : "ul" == r ? i.push(e) : "textarea" == r ? $.inArray(e, a) || a.push(e) : "code" == r && ($.inArray(e, o) || o.push(e))
        }), e._images = n, e._subList = i, e._textareas = a, e._codes = o
    },removeElements: function(t) {
        "string" == typeof t ? t = $(t) : $.isArray(t) || (t = [t]);
        var e = this, n = [], i = [], a = [], o = [];
        $.each(e._images, function(e) {
            $.inArray(e, t) || n.push(e)
        }), $.each(e._subList, function(e) {
            $.inArray(e, t) || e.push(e)
        }), $.each(e._textareas, function(e) {
            $.inArray(e, t) || a.push(e)
        }), $.each(e._codes, function(e) {
            $.inArray(e, t) || a.push(e)
        }), e._images = n, e._subList = i, e._textareas = a, e._codes = o
    },_getBoundingRect: function(t) {
        var e, n, i, a;
        if (void 0 !== t) {
            e = $(t).outerHeight(), n = $(t).outerWidth();
            var o = $(t).offset();
            i = o.left, a = o.top
        } else {
            var r = $(window), s = $(document);
            e = r.height(), n = r.width(), i = s.scrollLeft(), a = s.scrollTop()
        }
        var c = this.userConfig.diff, u = c === _ ? n : c, l = 0, f = u, d = c === _ ? e : c, g = 0, h = d, m = i + n, b = a + e;
        return $.isPlainObject(c) && (l = c.left || 0, f = c.right || 0, g = c.top || 0, h = c.bottom || 0), i -= l, m += f, a -= g, b += h, {left: i,top: a,right: m,bottom: b}
    },_isLoadAllLazyElements: function() {
        var t = this;
        return t._images.length + t._subList.length + t._textareas.length + t._codes.length + ($.isEmptyObject(t._callbacks) ? 0 : 1) == 0
    },pause: function() {
        var t = this, e = t._loadFn;
        if (!t._destroyed && ($(u).off(h + " " + m + " " + b, e), e.stop(), t._containerIsNotDocument && 1 != t._backCompact)) {
            var n = t.userConfig.container;
            n.off(h + " " + m, e)
        }
    },resume: function() {
        var t = this, e = t._loadFn;
        if (!t._destroyed && ($(u).on(h + " " + m + " " + b, e), t._containerIsNotDocument && 1 != t._backCompact)) {
            var n = t.userConfig.container;
            n.on(h + " " + m, e)
        }
    },destroy: function() {
        var t = this;
        t.pause(), t._callbacks = {}, t._images = [], t._subList = [], t._textareas = [], t._codes = [], t._destroyed = 1
    }}), r.loadCustomLazyData = c, r
}, []);
;
window.PageUnit = window.PageUnit || {load: function(t, a) {
    var n = "";
    return "object" == typeof PageUnitData && null != PageUnitData[t] && (n = PageUnitData[t], null != a && 0 == n.indexOf("<") && (n = $(n).attr(a).get(0).outerHTML)), n
}};
;
!function(e) {
    function t(t, l) {
        return parseInt(e.css(t[0], l)) || 0
    }
    function l(e) {
        return e[0].offsetWidth + t(e, "marginLeft") + t(e, "marginRight")
    }
    function r(e) {
        return e[0].offsetHeight + t(e, "marginTop") + t(e, "marginBottom")
    }
    e.fn.jCarouselLite = function(t) {
        return t = e.extend({btnPrev: null,btnNext: null,btnGo: null,mouseWheel: !1,auto: null,speed: 200,easing: null,vertical: !1,circular: !0,visible: 3,start: 0,scroll: 1,hoverScroll: !1,beforeStart: null,afterEnd: null,lazyLoadImg: !1}, t || {}), this.each(function() {
            function i() {
                o(x - t.scroll), x - t.scroll >= 0 && (z = setTimeout(arguments.callee, t.hoverScroll + t.speed))
            }
            function n() {
                o(x + t.scroll), x + t.scroll <= g - b && (C = setTimeout(arguments.callee, t.hoverScroll + t.speed))
            }
            function s() {
                return p.slice(x).slice(0, b)
            }
            function c() {
                v.find("div[data-src]").each(function() {
                    var t = e(this).tbattr("data-title") ? e(this).tbattr("data-title") : "";
                    e(this).replaceWith('<img src="' + e(this).tbattr("data-src") + '" alt="' + t + '" title="' + t + '" />')
                })
            }
            function o(l) {
                return a || (t.beforeStart && t.beforeStart.call(this, s()), t.lazyLoadImg && c(), t.circular ? l <= t.start - b - 1 ? (v.css(u, -((g - 2 * b) * T) + "px"), x = l == t.start - b - 1 ? g - 2 * b - 1 : g - 2 * b - t.scroll) : l >= g - b + 1 ? (v.css(u, -(b * T) + "px"), x = l == g - b + 1 ? b + 1 : b + t.scroll) : x = l : x = Math.min(Math.max(0, l), g - b), a = !0, v.animate("left" == u ? {left: -(x * T)} : {top: -(x * T)}, t.speed, t.easing, function() {
                    t.afterEnd && t.afterEnd.call(this, s()), a = !1
                }), t.circular || (e(t.btnPrev).removeClass("prev_disabled"), e(t.btnNext).removeClass("next_disabled"), e(x - t.scroll < 0 && t.btnPrev || []).addClass("prev_disabled"), e(x + t.scroll > g - b && t.btnNext || []).addClass("next_disabled"))), !1
            }
            var a = !1, u = t.vertical ? "top" : "left", f = t.vertical ? "height" : "width", d = e(this), v = e("ul", d), h = e("li", v), m = h.size(), b = t.visible;
            t.circular && (v.prepend(h.slice(m - b - 1 + 1).clone()).append(h.slice(0, b).clone()), t.start += b);
            var p = e("li", v), g = p.size(), x = t.start;
            d.css("visibility", "visible"), p.css({overflow: "hidden","float": t.vertical ? "none" : "left"}), v.css({margin: "0",padding: "0",position: "relative","list-style-type": "none","z-index": "1"}), d.css({overflow: "hidden",position: "relative","z-index": "2",left: "0px"});
            var T = t.vertical ? r(p) : l(p), S = T * g, w = T * b;
            if (p.css({width: p.width(),height: p.height()}), v.css(f, S + "px").css(u, -(x * T)), d.css(f, w + "px"), t.btnPrev) {
                var y = e(t.btnPrev);
                if (t.hoverScroll) {
                    var z;
                    y.hover(function() {
                        z = setTimeout(i, 500)
                    }, function() {
                        clearTimeout(z)
                    }).click(function() {
                        return clearTimeout(z), z = setTimeout(i, t.hoverScroll + t.speed), o(x - t.scroll)
                    })
                } else
                    y.click(function() {
                        return o(x - t.scroll)
                    })
            }
            if (t.btnNext) {
                var k = e(t.btnNext);
                if (t.hoverScroll) {
                    var C;
                    k.hover(function() {
                        C = setTimeout(n, 500)
                    }, function() {
                        clearTimeout(C)
                    }).click(function() {
                        return clearTimeout(C), C = setTimeout(n, t.hoverScroll + t.speed), o(x + t.scroll)
                    })
                } else
                    k.click(function() {
                        return o(x + t.scroll)
                    })
            }
            t.btnGo && e.each(t.btnGo, function(l, r) {
                e(r).click(function() {
                    return o(t.circular ? t.visible + l : l)
                })
            }), t.mouseWheel && d.mousewheel && d.mousewheel(function(e, l) {
                return o(l > 0 ? x - t.scroll : x + t.scroll)
            }), t.auto && setInterval(function() {
                o(x + t.scroll)
            }, t.auto + t.speed)
        })
    }
}(jQuery);
;
$.tb.discardinglog = {_modDiscardJs: {},_hasLogAll: !1,discarding: function(i) {
    this._modDiscardJs[i] = 1, this._hasLogAll && this._sendLog(i)
},_addLog: function(i, o, d) {
    i.push(d[o] instanceof Array && d[o].length > 0 ? o + ":" + d[o].join() : o)
},_sendLog: function(i) {
    var o = 1;
    !window.PageData || "frs" != PageData.product && "pb" != PageData.product || (o = Math.floor(100 * Math.random())), 1 === o && $.stats.track(i, "component_discard")
},logAll: function() {
    var i, o = this, d = window.modDiscardTemplate || {}, n = [];
    for (i in this._modDiscardJs)
        this._addLog(n, i, d);
    for (i in d)
        this._modDiscardJs[i] || this._addLog(n, i, d);
    this._hasLogAll = !0;
    for (var t = 0, a = n.length; a > t; t++)
        !function(i) {
            setTimeout(function() {
                o._sendLog(i)
            }, 10)
        }(n[t])
}}, window.__discarding = $.tb.discarding = function(i) {
    $.tb.discardinglog.discarding(i)
}, $(function() {
    setTimeout(function() {
        $.tb.discardinglog.logAll()
    }, 1e3)
});
;
!function(e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }
    e.widget("ui.droppable", {version: "1.10.4",widgetEventPrefix: "drop",options: {accept: "*",activeClass: !1,addClasses: !0,greedy: !1,hoverClass: !1,scope: "default",tolerance: "intersect",activate: null,deactivate: null,drop: null,out: null,over: null},_create: function() {
        var t, i = this.options, s = i.accept;
        this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function(e) {
            return e.is(s)
        }, this.proportions = function() {
            return arguments.length ? void (t = arguments[0]) : t ? t : t = {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight}
        }, e.ui.ddmanager.droppables[i.scope] = e.ui.ddmanager.droppables[i.scope] || [], e.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
    },_destroy: function() {
        for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; t < i.length; t++)
            i[t] === this && i.splice(t, 1);
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    },_setOption: function(t, i) {
        "accept" === t && (this.accept = e.isFunction(i) ? i : function(e) {
            return e.is(i)
        }), e.Widget.prototype._setOption.apply(this, arguments)
    },_activate: function(t) {
        var i = e.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
    },_deactivate: function(t) {
        var i = e.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
    },_over: function(t) {
        var i = e.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
    },_out: function(t) {
        var i = e.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
    },_drop: function(t, i) {
        var s = i || e.ui.ddmanager.current, o = !1;
        return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
            var t = e.data(this, "ui-droppable");
            return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {offset: t.element.offset()}), t.options.tolerance) ? (o = !0, !1) : void 0
        }), o ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
    },ui: function(e) {
        return {draggable: e.currentItem || e.element,helper: e.helper,position: e.position,offset: e.positionAbs}
    }}), e.ui.intersect = function(e, i, s) {
        if (!i.offset)
            return !1;
        var o, n, r = (e.positionAbs || e.position.absolute).left, a = (e.positionAbs || e.position.absolute).top, l = r + e.helperProportions.width, p = a + e.helperProportions.height, h = i.offset.left, c = i.offset.top, u = h + i.proportions().width, d = c + i.proportions().height;
        switch (s) {
            case "fit":
                return r >= h && u >= l && a >= c && d >= p;
            case "intersect":
                return h < r + e.helperProportions.width / 2 && l - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && p - e.helperProportions.height / 2 < d;
            case "pointer":
                return o = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, n = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(n, c, i.proportions().height) && t(o, h, i.proportions().width);
            case "touch":
                return (a >= c && d >= a || p >= c && d >= p || c > a && p > d) && (r >= h && u >= r || l >= h && u >= l || h > r && l > u);
            default:
                return !1
        }
    }, e.ui.ddmanager = {current: null,droppables: {"default": []},prepareOffsets: function(t, i) {
        var s, o, n = e.ui.ddmanager.droppables[t.options.scope] || [], r = i ? i.type : null, a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
        e: for (s = 0; s < n.length; s++)
            if (!(n[s].options.disabled || t && !n[s].accept.call(n[s].element[0], t.currentItem || t.element))) {
                for (o = 0; o < a.length; o++)
                    if (a[o] === n[s].element[0]) {
                        n[s].proportions().height = 0;
                        continue e
                    }
                n[s].visible = "none" !== n[s].element.css("display"), n[s].visible && ("mousedown" === r && n[s]._activate.call(n[s], i), n[s].offset = n[s].element.offset(), n[s].proportions({width: n[s].element[0].offsetWidth,height: n[s].element[0].offsetHeight}))
            }
    },drop: function(t, i) {
        var s = !1;
        return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
            this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
        }), s
    },dragStart: function(t, i) {
        t.element.parentsUntil("body").bind("scroll.droppable", function() {
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        })
    },drag: function(t, i) {
        t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var s, o, n, r = e.ui.intersect(t, this, this.options.tolerance), a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                a && (this.options.greedy && (o = this.options.scope, n = this.element.parents(":data(ui-droppable)").filter(function() {
                    return e.data(this, "ui-droppable").options.scope === o
                }), n.length && (s = e.data(n[0], "ui-droppable"), s.greedyChild = "isover" === a)), s && "isover" === a && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), s && "isout" === a && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
            }
        })
    },dragStop: function(t, i) {
        t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
    }}
}(jQuery);
window.CommonUiDecorator = function() {
    this._priorityConfig = {"default": 0,hover: 1,active: 1,focus: 2,error: 10}
}, window.CommonUiDecorator.prototype = {processEffect: function(e, t, c, f) {
    var o = new RegExp("(^|\\s)" + t + "\\S+", "g");
    e.getAttribute("effect_pri") <= this._priorityConfig[c] && (e.className = e.className.replace(o, "") + " " + t + f, e.setAttribute("effect_pri", this._priorityConfig[f]))
},clearEffect: function(e, t) {
    this.forceEffect(e, t, "default")
},forceEffect: function(e, t, c) {
    var f = new RegExp("(^|\\s)" + t + "\\S+", "g");
    e.className = e.className.replace(f, "") + " " + t + c, e.setAttribute("effect_pri", this._priorityConfig[c])
},addEffects: function(e, t, c) {
    var f = this;
    if (e.size() > 0) {
        null == c && (c = []);
        for (var o = 0, i = c.length; i > o; o++)
            switch (c[o]) {
                case "hover":
                    e.hover(function() {
                        f.processEffect(this, t, "hover", "hover")
                    }, function() {
                        f.processEffect(this, t, "hover", "default")
                    });
                    break;
                case "active":
                    e.mousedown(function() {
                        f.processEffect(this, t, "active", "active")
                    }).mouseup(function() {
                        f.processEffect(this, t, "active", "default")
                    });
                    break;
                case "focus":
                    e.focus(function() {
                        f.processEffect(this, t, "focus", "focus")
                    }).blur(function() {
                        f.processEffect(this, t, "focus", "default")
                    })
            }
    }
}};
;
var TbMsgSys;
!function() {
    var e = {};
    e.Type = function(e, t) {
        var r = this;
        this.name = {}, this.body = {};
        var n = function() {
            r.name = e;
            for (var n in t)
                r.body[n] = !0
        };
        n()
    }, e.TypeManager = new function() {
        var t = {};
        this.addType = function(r, n) {
            return t[r] ? !1 : (t[r] = new e.Type(r, n), !0)
        }, this.removeType = function(e) {
            t.hasOwnProperty(e) && (t[e] = null, delete t[e])
        }, this.getType = function(e) {
            return t[e] ? t[e] : null
        }
    }, e.CheckBox = function() {
        var t = e.TypeManager;
        this.checkMsg = function(e) {
            var r = !0;
            if (!(e && e.hasOwnProperty("head") && e.hasOwnProperty("body") && e.head.type))
                return alert("\u6D88\u606F\u4E0D\u5B8C\u6574"), !1;
            var n = t.getType(e.head.type);
            if (!n)
                return alert("\u6D88\u606F\u7C7B\u578B\u4E0D\u5B58\u5728\uFF01"), !1;
            for (var s in n.body)
                if (!e.body.hasOwnProperty(s)) {
                    alert("\u6D88\u606F\u4F53\u7ED3\u6784\u4E0D\u5B8C\u6574\uFF01"), r = !1;
                    break
                }
            return r
        }
    }, e.Setup = function() {
        var t = this, r = new e.CheckBox;
        this.setType = function(e, t) {
            return e.head.type = t, e
        }, this.setTo = function(e, t) {
            var r = $.extend({}, e);
            return r.head.to = t, r
        }, this.setFrom = function(e, t) {
            var r = $.extend({}, e);
            return r.head.from = t, r
        }, this.setBody = function(e, t) {
            var n = $.extend({}, e);
            return n.body = t, r.checkMsg(n) ? n : !1
        }, this.set = function(e, r, n, s, i) {
            var o = t.setType(e, r);
            return o = t.setFrom(e, n), o = t.setTo(e, s), o = t.setBody(e, i)
        }
    }, e.Assembly = new function() {
        var t = e.TypeManager, r = new e.CheckBox, n = new e.Setup;
        this.typeManager = function() {
            return t
        }, this.checkBox = function() {
            return r
        }, this.setup = function() {
            return n
        }
    }, e.Message = function() {
        var e = this;
        this.head = {type: "default",from: "",to: ""}, this.body = {}, this.getType = function() {
            return e.head.type
        }, this.getFrom = function() {
            return e.head.from
        }, this.getTo = function() {
            return e.head.to
        }
    }, e.Generator = function() {
        var t = e.Assembly;
        this.getNewMessage = function(r, n, s, i) {
            var o = new e.Message;
            return t.setup().set(o, r, n, s, i)
        }
    }, e.MsgQue = function(e, t) {
        var r, n, s = 0, i = this, o = function() {
            n = new Array, s = t, r = e
        };
        this.add = function(e) {
            i.isFull() || n.push(e)
        }, this.get = function() {
            return i.isEmpty() ? null : n.shift()
        }, this.isEmpty = function() {
            return !(n.length > 0)
        }, this.isFull = function() {
            return !!(s > 0 && n.length >= s)
        }, this.getSize = function() {
            return n.length
        }, this.pop = function() {
            n.pop()
        }, this.getId = function() {
            return r
        }, this.clear = function() {
            n = new Array
        }, o()
    }, e.processor = function() {
        var e = !1, t = null, r = {};
        this.process = function(n) {
            t = n, e = !0;
            var s = n.getType(), i = n.getTo(), o = n.getFrom();
            if (r.hasOwnProperty(s) && "function" == typeof r[s]) {
                var u = r[s].call(n, s, i, o, n.body);
                return t = null, e = !1, u
            }
            return t = null, e = !1, !1
        }, this.setProcess = function(e, t) {
            r[e] = t
        }, this.getCurrentMsg = function() {
            return t
        }
    }, e.Server = function(t) {
        var r = (e.Assembly, {}), n = new e.processor;
        this.recieve = function(e) {
            return n.process(e)
        }, this.sendToQueue = function(t) {
            var n = t.getTo();
            r.hasOwnProperty(n) && r[n] || (r[n] = new e.MsgQue(n)), r[n].add(t)
        }, this.getMsgQueues = function() {
            return r
        }, this.setProcessor = function(e, t) {
            n.setProcess(e, t)
        }
    }, e.Servers = new function() {
        {
            var t = {};
            e.Assembly
        }
        this.addServer = function(r) {
            t.hasOwnProperty(r) && t[r] || (t[r] = new e.Server(r))
        }, this.getServer = function(e) {
            return t[e] || null
        }, this.getAllServer = function() {
            return t
        }, this.removeServer = function(e) {
            delete t[e]
        }
    }, e.Distributor = new function() {
        var t = e.Servers, r = e.Assembly;
        this.distribute = function(e) {
            if (!r.checkBox().checkMsg(e))
                return !1;
            var n = t.getServer(e.getTo()), s = t.getServer(e.getFrom());
            return n ? this.recieve(e) : (s.sendToQueue(e), !1)
        }, this.recieve = function(e) {
            var r = t.getServer(e.getTo());
            return r ? r.recieve(e) : !1
        }
    }, e.MsgManager = new function() {
        var t = e.Assembly, r = new e.Generator, n = e.Servers, s = e.Distributor, i = this, o = {system: {state: !0,msg: !0}}, u = function() {
            for (var e in o)
                i.addMsgType(e, o[e])
        }, a = function(e, t, r, s) {
            if ("system" == e && "init" == s.state) {
                var i = n.getServer(t), o = i.getMsgQueues();
                for (var u in o) {
                    var a = o[u];
                    a && !a.isEmpty() && c(a)
                }
            }
        }, c = function(e) {
            if (!e.isEmpty()) {
                var t = e.get();
                s.distribute(t), setTimeout(function() {
                    c(e)
                }, 50)
            }
        };
        this.addMsgType = function(e, r) {
            t.typeManager().addType(e, r)
        }, this.removeMsgType = function(e) {
            t.typeManager().removeType(e)
        }, this.checkMsg = function(e) {
            return t.checkBox().checkMsg(e)
        }, this.sendMsg = function(e, t, n, i) {
            var o = r.getNewMessage(e, t, n, i);
            return o ? s.distribute(o) : !1
        }, this.sendMsgToAll = function(e, t, i) {
            var o = n.getAllServer();
            for (var u in o)
                if (u != t) {
                    var a = r.getNewMessage(e, t, u, i);
                    a && s.distribute(a)
                }
        }, this.setProcessor = function(e, t, r) {
            var s = n.getServer(e);
            return s ? (s.setProcessor(t, r), !0) : !1
        }, this.registerServer = function(e) {
            n.addServer(e), this.setProcessor(e, "system", a)
        }, this.initedServer = function(e) {
            this.sendMsgToAll("system", e, {state: "init",msg: !0})
        }, u()
    }, TbMsgSys = e.MsgManager
}();
;
var TbCom, TbComMsName = "ComManager", MsgSystem = MsgSystem || {need_start: !0}, Events = {on: function(o, e, t) {
    var s;
    o = o.split(/\s+/);
    for (var n = this._callbacks || (this._callbacks = {}); s = o.shift(); ) {
        var r = n[s] || (n[s] = {}), i = r.tail || (r.tail = r.next = {});
        i.callback = e, i.context = t, r.tail = i.next = {}
    }
    return this
},off: function(o, e, t) {
    var s, n, r;
    if (o) {
        if (n = this._callbacks)
            for (o = o.split(/\s+/); s = o.shift(); )
                if (r = n[s], delete n[s], e && r)
                    for (; (r = r.next) && r.next; )
                        (r.callback !== e || t && r.context !== t) && this.on(s, r.callback, r.context)
    } else
        delete this._callbacks;
    return this
},trigger: function(o) {
    var e, t, s, n, r, i, c;
    if (!(s = this._callbacks))
        return this;
    for (i = s.all, (o = o.split(/\s+/)).push(null); e = o.shift(); )
        i && o.push({next: i.next,tail: i.tail,event: e}), (t = s[e]) && o.push({next: t.next,tail: t.tail});
    for (c = Array.prototype.slice.call(arguments, 1); t = o.pop(); )
        for (n = t.tail, r = t.event ? [t.event].concat(c) : c; (t = t.next) !== n; )
            t.callback.apply(t.context || this, r);
    return this
}};
!function() {
    var o = "undefined" == typeof _VERSION ? {} : _VERSION, e = {staticVersion: 18.58,comlist: {PassportFillName: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/passport/PassportFillName.js"] || "component/commonLogic/common/passport/PassportFillName.js")},PassportSign: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/passport/PassportLogin.js"] || "component/commonLogic/common/passport/PassportLogin.js")},PassportRegister: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/passport/PassportRegister.js"] || "component/commonLogic/common/passport/PassportRegister.js")},User: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/user/User.js"] || "component/commonLogic/common/user/User.js")},UserBar: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/user/UserBar.js"] || "component/commonLogic/common/user/UserBar.js")},Suggestion: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/suggestion/Suggestion.js"] || "component/commonLogic/common/suggestion/Suggestion.js")},Poptip: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/poptip/Poptip.js"] || "component/commonLogic/common/poptip/Poptip.js")},WealthSystem: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/wealth/WealthSystem.js"] || "component/commonLogic/common/wealth/WealthSystem.js")},Search: {inited: !1,loaded: !0,url: "/tb/static-common/" + (o["component/commonLogic/common/search/Search.js"] || "component/commonLogic/common/search/Search.js")},MsgSystem: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/crosspage_msg_system/MsgSystem.js"] || "component/commonLogic/common/crosspage_msg_system/MsgSystem.js")},UserMessage: {inited: !1,loaded: !1,url: "/tb/static-common/" + (o["component/commonLogic/common/user_message/UserMessage.js"] || "component/commonLogic/common/user_message/UserMessage.js")}},defualtMerger: ["User", "UserBar", "Suggestion", "Poptip", "WealthSystem"],defaultMergerURL: "/tb/static-common/" + (o["component/commonLogic/common/common_default_merger.js"] || "component/commonLogic/common/common_default_merger.js"),error: {SUCCESS: 0,COM_NOT_FOUND: 1,METHOD_NOT_FOUND: 2,PROCESS_ERROR: 3}}, t = function(o, e) {
        var t = o, s = e;
        this.error = function() {
            return t
        }, this.result = function() {
            return s
        }
    }, s = function() {
        var o = arguments[0];
        this.createPars = function(e) {
            for (var t = [], s = e; s < o.length; s++)
                t.push(o[s]);
            return t
        }
    }, n = new function() {
        this.process = function() {
            if (arguments.length < 2)
                return new t(e.error.PROCESS_ERROR);
            var o = arguments[0], n = arguments[1];
            if (!o || !e.comlist[o].inited)
                return new t(e.error.COM_NOT_FOUND);
            if (!o.hasOwnProperty(n) || "function" != typeof o[n])
                return new t(e.error.METHOD_NOT_FOUND);
            var r = new s(arguments).createPars(2), i = TbMsgSys.sendMsg("process", TbComMsName, o, {method: arguments[1],params: r});
            return new t(e.error.SUCCESS, i)
        }
    }, r = new function() {
        var o = e, t = {}, r = {User: !0,UserBar: !0,Suggestion: !0,Poptip: !0,MsgSystem: !0,UserMessage: !0}, i = function() {
            var o = {process: {method: !0,params: !0},loadCom: {com: !0},needCom: {coms: !0}};
            TbMsgSys.registerServer(TbComMsName);
            for (var e in o)
                TbMsgSys.addMsgType(e, o[e]);
            TbMsgSys.setProcessor(TbComMsName, "loadCom", g), TbMsgSys.setProcessor(TbComMsName, "needCom", m), TbMsgSys.initedServer(TbComMsName), $.console.debug("\u6A21\u5757\uFF1A" + TbComMsName + " \u6FC0\u6D3B\uFF01"), $.console.debug("\u6A21\u5757\uFF1A" + TbComMsName + " \u6FC0\u6D3B\uFF01\u51C6\u5907\u5F00\u59CB\u52A0\u8F7D\u9ED8\u8BA4\u5408\u5E76\u9759\u6001\u6587\u4EF6!"), $(c)
        }, c = function() {
            var t = o.comlist, s = o.defualtMerger, n = o.defaultMergerURL;
            $.JsLoadManager.use(n + "?v=" + e.staticVersion);
            for (var r = 0; r < s.length; r++)
                t[s[r]].loaded = !0
        }, m = function(o, e, s, n) {
            var r = n.coms;
            if (r && (r.length > 0 || !p(r))) {
                t[s] = r;
                for (var i = 0; i < r.length; i++)
                    d(r[i])
            } else
                a(s)
        }, a = function(e) {
            o.comlist[e].inited = !0, TbMsgSys.initedServer(e), $.console.debug("\u6A21\u5757\uFF1A" + e + " \u6FC0\u6D3B\uFF01"), n.process(e, "init"), delete t[e]
        }, g = function(o, e, t, s, n) {
            d(n.com)
        }, l = function(o) {
            u(o)
        }, u = function(o) {
            for (var e in t)
                $.inArray(o, t[e]) >= 0 && p(t[e]) && (a(e), arguments.callee(e))
        }, p = function(e) {
            for (var t = !0, s = 0; s < e.length; s++) {
                if (!o.comlist.hasOwnProperty(e[s]))
                    return !1;
                if (!o.comlist[e[s]].inited) {
                    t = !1;
                    break
                }
            }
            return t
        }, d = function(t) {
            return o.comlist.hasOwnProperty(t) && o.comlist[t].url ? $.inArray(t, o.defualtMerger) >= 0 ? ($.console.log("\u8BE5\u6A21\u5757\u5728\u9ED8\u8BA4\u5408\u5E76\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u505A\u5355\u72EC\u52A0\u8F7D : " + t), void 0) : (o.comlist[t].loaded || ($.JsLoadManager.use(o.comlist[t].url + "?v=" + e.staticVersion, function() {
                l(t)
            }), o.comlist[t].loaded = !0), void 0) : ($.console.error("\u914D\u7F6E\u4E2D\u627E\u4E0D\u5230\u6A21\u5757 : " + t), void 0)
        };
        this.process = function(o, e) {
            d(o);
            var t = new s(arguments).createPars(2);
            return TbMsgSys.sendMsg("process", TbComMsName, o, {method: e,params: t})
        }, this.addEvent = function(o, e, t) {
            return this.process(o, "addEvent", e, t)
        }, this.removeEvent = function(o, e, t) {
            return this.process(o, "removeEvent", e, t)
        }, this.setNeedStartConfig = function(o) {
            o && "object" == typeof o && $.extend(r, o)
        }, this.defaultLogicInit = function(o, t, s, n, i) {
            var c = n || null;
            "undefined" != typeof i && (e.staticVersion = i), this.setNeedStartConfig(s), r.User && (this.process("User", "init", o, t), r.UserBar && this.process("UserBar", "init", c)), r.Suggestion && this.process("Suggestion", "createMainSearchSuggestion"), !o.is_login || o.no_un || !r.MsgSystem || MsgSystem && MsgSystem.hasOwnProperty("need_start") && MsgSystem.need_start !== !0 || (this.process("MsgSystem", "init"), r.UserMessage && this.process("UserMessage", "init", t, c))
        }, i()
    };
    TbCom = r, $.extend(TbCom, Events)
}();
var TbICom = function() {
    var o, e, t = !1, s = this, n = [];
    this.processMsgHandler = function(o, t, n, r) {
        var i = r.params, c = r.method;
        return e[c] && "function" == typeof e[c] ? e[c].apply(s, i) : ($.console.error("\u627E\u4E0D\u5230\u65B9\u6CD5: " + c), !1)
    }, this.initSys = function(s, r, i) {
        t || (o = s, $.extend(e, i), n = r, TbMsgSys.registerServer(o), TbMsgSys.setProcessor(o, "process", this.processMsgHandler), TbMsgSys.sendMsg("needCom", o, "ComManager", {coms: n}), t = !0, $.console.debug("\u6A21\u5757: " + s + " initSys\uFF01\u4F9D\u8D56\uFF1A" + r))
    }, this.init = function() {
    }, this.getRelationship = function() {
        return n
    }, this.getId = function() {
        return o
    }, this.getInited = function() {
        return t
    }, this.addEvent = function(o, e) {
        $(s).bind(o, e)
    }, this.removeEvent = function(o, e) {
        $(s).unbind(o, e)
    }, this.dispatchEvent = function() {
        $(s).trigger.apply($(s), arguments)
    }, e = {init: this.init,addEvent: this.addEvent,removeEvent: this.removeEvent,dispatchEvent: this.dispatchEvent,getId: this.getId,getRelationship: this.getRelationship,getInited: this.getInited}
};
;
var TbUtil = {addStamp: function(e) {
    return e + (-1 == e.indexOf("?") ? "?" : "&t=") + (new Date).getTime().toString(32)
},toQueryString: function(e) {
    var t = [];
    for (var n in e)
        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.join("&")
},selectAll: function(e, t, n) {
    var r = document.getElementById(e);
    if (r) {
        for (var i = r.getElementsByTagName("input"), o = 0, a = i.length; a > o; o++)
            i[o].getAttribute("name") == t && (i[o].checked = n.checked);
        i = null
    }
},getCheckedValue: function(e, t, n) {
    var r = [];
    n = n || ",";
    var i, o = document.getElementById(e);
    if (o) {
        for (var a = o.getElementsByTagName("input"), u = 0, s = a.length; s > u; u++)
            i = a[u], i.checked && r.push(i.value);
        a = null
    }
    return r.join(n)
},G: function(e) {
    return document.getElementById(e)
}};
TbUtil.trim = function(e) {
    return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
}, TbUtil.DBC2SBC = function(e) {
    var t, n = "";
    for (t = 0; t < e.length; t++)
        str1 = e.charCodeAt(t), n += 65296 > str1 ? String.fromCharCode(e.charCodeAt(t)) : 125 > str1 && !flag ? String.fromCharCode(e.charCodeAt(t)) : String.fromCharCode(e.charCodeAt(t) - 65248);
    return n
}, TbUtil.getByteLength = function(e) {
    return e.replace(/[^\x00-\xff]/g, "mm").length
}, TbUtil.escapeHTML = function(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}, TbUtil.escapeUTF8 = function(e) {
    return escape(String(e)).replace(/%u(\w{4})/g, function(e, t) {
        return encodeURIComponent(String.fromCharCode("0x" + t)).replace(/%/g, "%25")
    })
}, TbUtil.resizePic = function(e, t, n, r) {
    function i(e, t, n, r) {
        var i = 0, o = e, a = t;
        switch (e > n && (i += 1), t > r && (i += 2), i) {
            case 1:
                o = n, o = t * n / e;
            case 2:
                a = r, o = e * r / t;
            case 3:
                a = t / r > e / n ? r : t * n / e, o = t / r > e / n ? e * r / t : n
        }
        return 0 != i && (u = !0), [o, a]
    }
    var o = t || 120, a = n || 120, u = !1, s = e;
    if (0 == s.width) {
        var l = this, f = arguments;
        return setTimeout(function() {
            f.callee.apply(l, f)
        }, 100), !1
    }
    var c = i(s.width, s.height, o, a);
    return e.style.width = c[0] + "px", e.style.height = c[1] + "px", e.style.visibility = "visible", 1 == r && (e.style.marginTop = (n - parseInt(c[1])) / 2 + "px"), u
}, TbUtil.json = {}, TbUtil.json.encode = function() {
    function e(e) {
        return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
            var t = i[e];
            return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        })), '"' + e + '"'
    }
    function t(e) {
        var t, n, r, i = ["["], o = e.length;
        for (n = 0; o > n; n++)
            switch (r = e[n], typeof r) {
                case "undefined":
                case "function":
                case "unknown":
                    break;
                default:
                    t && i.push(","), i.push(TbUtil.json.encode(r)), t = 1
            }
        return i.push("]"), i.join("")
    }
    function n(e) {
        return 10 > e ? "0" + e : e
    }
    function r(e) {
        return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
    }
    var i = {"\b": "\\b","	": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"};
    return function(n) {
        switch (typeof n) {
            case "undefined":
                return "undefined";
            case "number":
                return isFinite(n) ? String(n) : "null";
            case "string":
                return e(n);
            case "boolean":
                return String(n);
            default:
                if (null === n)
                    return "null";
                if (n instanceof Array)
                    return t(n);
                if (n instanceof Date)
                    return r(n);
                var i, o, a = ["{"], u = TbUtil.json.encode;
                for (key in n)
                    if (n.hasOwnProperty(key))
                        switch (o = n[key], typeof o) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                i && a.push(","), i = 1, a.push(u(key) + ":" + u(o))
                        }
                return a.push("}"), a.join("")
        }
    }
}(), TbUtil.json.decode = function(string, secure) {
    if ("string" != typeof string || !string.length)
        return null;
    if (secure && !/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(string.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"/g, "")))
        return null;
    try {
        return eval("(" + string + ")")
    } catch (e) {
        return {}
    }
}, TbUtil.showErrorTip = function(e, t, n, r) {
    var i = '<div style="padding:20px 20px; text-align:' + n + '; line-height:20px;font-size:13px;">' + t.replace(/\r?\n/gi, "<br>") + "</div>", o = r || !1;
    o ? (Fe.Dialog.open(i, {title: "",width: 200}), setTimeout(function() {
        Fe.Dialog.close()
    }, 500)) : Fe.Dialog.alert(i, {title: e,width: 380})
}, TbUtil.hiPopHandler = function(e) {
    0 == e ? TbUtil.login() : (1 == e || 3 == e) && Fe.Dialog.alertMessageFace("\u8BE5\u7528\u6237\u4E0D\u5B58\u5728", json._info.replace(/\r?\n/gi, "<br>"), {title: "\u9519\u8BEF\u63D0\u793A",width: 350})
}, TbUtil.browser = function() {
    var e = navigator.userAgent, t = "", n = "";
    return e.indexOf("AppleWebKit") >= 0 ? t = "webkit" : e.indexOf("Gecko") >= 0 ? t = "gecko" : e.indexOf("MSIE") >= 0 && (t = "ie"), e.indexOf("Firefox") >= 0 ? n = "firefox" : e.indexOf("360SE") >= 0 ? n = "360se" : e.indexOf("SE") >= 0 ? n = "sougou" : e.indexOf("Maxthon") >= 0 ? n = "maxthon" : e.indexOf("MSIE") >= 0 ? n = "ie" : e.indexOf("Chrome") >= 0 ? n = "chrome" : e.indexOf("Safari") >= 0 && (n = "safari"), {core: t,name: n}
}, TbUtil.handleError = function(e, t, n, r, i) {
    if (e.no = e.no || e.error_no, _autoHide = i || !1, 4 == e.no)
        Fe.showLoginLayer(!0);
    else {
        var o = t || "\u64CD\u4F5C\u5931\u8D25", n = n || "left", r = r || e.error || FORUM_ERROR_INFO[e.no] || "\u64CD\u4F5C\u5931\u8D25";
        TbUtil.showErrorTip(o, r, n, _autoHide)
    }
};
var PageData = PageData || {};
PageData.tbs_loaded = !0, TbUtil.requestTbs = function(asyn) {
    if ("undefined" == typeof asyn && (asyn = !0), !PageData.tbs_loaded) {
        var url = FORUM_POST_URL.get_tbs + "?t=" + Math.random(), parmas = "";
        Fe.Ajax.request(url, function(xml) {
            var json = eval("(" + xml.responseText + ")");
            json.tbs ? (PageData.tbs = json.tbs, PageData.tbs_loaded = !0) : PageData.tbs = ""
        }, {async: asyn})
    }
}, String.prototype.trim = function() {
    var e = this, t = e.replace(/^\s*|\s*$/g, "");
    return t
}, String.prototype.clear = function() {
    var e = this, t = e.replace(/\<br[^\>^\<]*\/?\>/gi, "");
    return t = t.replace(/\<p[^\>^\<]*\>(\&nbsp\;)?\<\/p\>|\<p\/?\>/gi, ""), t.trim()
}, String.prototype.wordLen = function() {
    var e = this.replace(/[^\x00-\xff]/g, "**");
    return e.length
}, String.prototype.wordCut = function(e, t) {
    if (!("number" != typeof e || 0 > e)) {
        var n = e, r = t || "", i = this, o = new Array, a = i.replace(/[^\x00-\xff]/g, function(e) {
            return o.push(e), "*)"
        });
        if (a[n - 1] && "*" == a[n - 1] && ")" == a[n] && n++, n >= a.length)
            return i;
        a = a.substr(0, n);
        var u = 0;
        return a = a.replace(/(\*\))/g, function() {
            var e = o[u];
            return u++, e
        }), a + r
    }
}, String.prototype.subByte = function(e) {
    if (this.wordLen() <= e)
        return this;
    for (var t = Math.floor((e -= 2) / 2), n = this.length; n > t; t++)
        if (this.substr(0, t).wordLen() >= e)
            return this.substr(0, t) + "\u2026";
    return this
}, String.prototype.subByte2 = function(e) {
    if (this.wordLen() <= e)
        return this;
    for (var t = Math.floor((e -= 2) / 2), n = this.length; n > t; t++)
        if (this.substr(0, t).wordLen() > e)
            return this.substr(0, t);
    return this
}, String.prototype.subByteFix = function(e, t) {
    if (this.wordLen() <= e)
        return this;
    for (var n = Math.floor((e - 2) / 2), r = this.length; r > n; n++)
        if (this.substr(0, n).wordLen() >= e)
            return this.substr(0, n) + (t ? t : "");
    return this
};
;
!new function() {
    TbICom.call(this);
    var e = this, t = {_keyValues: [["\u8D34\u5427\u6295\u8BC9", "http://tieba.baidu.com/tousu/new"], ["\u5E16\u5427\u6295\u8BC9", "http://tieba.baidu.com/tousu/new"], ["tiebatousu", "http://tieba.baidu.com/tousu/new"], ["\u8D34\u5427\u6295\u8BC9\u5427", "http://tieba.baidu.com/tousu/new"], ["\u8D34\u5427\u6295\u8BC9\u4E2D\u5FC3", "http://tieba.baidu.com/tousu/new"], ["\u6295\u8BC9\u4E2D\u5FC3", "http://tieba.baidu.com/tousu/new"], ["\u6295\u8BC9", "http://tieba.baidu.com/tousu/new"], ["\u8D34\u5427\u4E3E\u62A5", "http://tieba.baidu.com/tousu/new"], ["\u77E5\u9053\u6295\u8BC9", "http://tousu.baidu.com/zhidao"], ["\u7A7A\u95F4\u6295\u8BC9", "http://tousu.baidu.com/hi"], ["\u767E\u79D1\u6295\u8BC9", "http://tousu.baidu.com/baike"], ["zhidaotousu", "http://tousu.baidu.com/zhidao"], ["kongjiantousu", "http://tousu.baidu.com/hi"], ["baiketousu", "http://tousu.baidu.com/baike"]],go: function(e) {
        for (var t = this._keyValues, a = e.toLowerCase(), o = 0; o < t.length; o++)
            if (a == t[o][0])
                return window.location.href = t[o][1], !0;
        var i = TbUtil.DBC2SBC(e);
        return /^\d{7,10}$/.test(i) ? (window.location.href = "/club/" + i, !0) : !1
    }}, a = function(e) {
        var t = document.getElementById(e);
        return t && t.checked
    }, o = function(e) {
        return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    }, i = {escapeUTF8: function(e) {
        return escape(String(e)).replace(/%u(\w{4})/g, function(e, t) {
            return encodeURIComponent(String.fromCharCode("0x" + t)).replace(/%/g, "%25")
        })
    },countPV: function(e) {
        var t = new Image;
        window["bd_pv_" + (new Date).getTime()] = t, t.src = "http://tb1.bdstatic.com/tb/img/pv.gif?t=" + (new Date).getTime() + "&" + e
    },setWord: function(t, a) {
        var n = o(document.f1.kw.value);
        if ("" == n || i.isIndexPage()) {
            var r = t.href.toString().match(/^(\w+:\/\/[^\/]+)/i);
            t.href = r && r[1] + ("" == n ? "" : "/?t=50&q=" + encodeURIComponent(n))
        } else if ("" != a) {
            if (t.href.indexOf("www.baidu.com") >= 0) {
                var u = "fr=tb01000&";
                window.location.href.match("ftype=guide") && (u = "fr=tb01se0&");
                var c = t.href.indexOf("fr=");
                t.href = c > -1 ? t.href.substring(0, c) + u : t.href + u
            }
            n = n.replace(/\%/gi, "%25").replace(/&/gi, "%26").replace(/\+/gi, "%2B").replace(/[\ \u3000]/gi, "%20").replace(/\//gi, "%2F").replace(/\#/gi, "%23").replace(/\=/gi, "%3D");
            var c = t.href.indexOf(a + "=");
            t.href = c > -1 ? t.href.substring(0, c) + a + "=" + n : t.href + a + "=" + n
        }
        e.dispatchEvent("setWord", a)
    },isIndexPage: function() {
        return /^\w+:\/\/[^\/]+\/(index\.html?)|(i\/\d+)/.test(window.location.href)
    },setVal: function(e, t) {
        e.kw.value = t.kw
    },DBC2SBC: function(e) {
        return TbUtil.DBC2SBC(e)
    },search: function(t, n) {
        if (e.dispatchEvent("search", t), n || (n = ""), "" == o(t.kw.value))
            return window.location.href = "http://tieba.baidu.com", !1;
        var r = "/f";
        if (a("jointb" + n)) {
            var u = i.searchTieba(t.kw.value);
            if (u === !1)
                return u
        }
        return a("authortb" + n) ? i.searchItieba(t.kw.value) : a("searchtb" + n) ? i.searchWord(t.kw.value) : a("nametb" + n) ? (window.location.href = "/f?ct=536870912&tn=searchPostListByName&rn=30&cm=1104rs2=3&ie=utf-8&kw=" + encodeURIComponent(t.kw.value), !1) : a("nowtb" + n) ? (window.location.href = "/f/search/res?ie=utf-8&kw=" + encodeURIComponent(PageData.present_forum.unescapeHTML()) + "&qw=" + encodeURIComponent(t.kw.value), !1) : (t.action = r, !0)
    },searchItieba: function(e) {
        return window.location.href = "/i/sys/enter?ie=utf-8&kw=" + encodeURIComponent(e), !1
    },searchTieba: function(e) {
        var a = o(e);
        return t.go(a) ? !1 : void 0
    },searchWord: function(e) {
        return $.tb.post("/data/searchhistory?method=add_word&ie=UTF-8", {word: e}, function() {
        }), setTimeout(function() {
            window.location.href = "/f/search/res?ie=utf-8&qw=" + encodeURIComponent(e)
        }, 100), !1
    }};
    this.initSys("Search", [], {headSetWord: i.setWord,headSetVal: i.setVal,headSearch: i.search,headSearchTieba: i.searchTieba,headSearchITieba: i.searchItieba,headSearchWord: i.searchWord})
};
;
var NsLogLinker = {_pid: 0,stat: function(e, n) {
    var t = "nslog__" + (new Date).getTime(), o = window[t] = new Image, i = n || this._pid;
    o.onload = o.onerror = function() {
        window[t] = null
    }, o.src = "http://nsclick.baidu.com/v.gif?pid=" + i + "&url=" + encodeURIComponent(e) + "&t=" + (new Date).getTime() + "&type=0", o = null
},_checkEvent: function(e) {
    e = e || event;
    var n = e.srcElement || e.target;
    for (1 != n.nodeType && (n = n.parentNode); n && n.tagName && "A" != n.tagName.toUpperCase(); )
        n = n.parentNode;
    if (n && n.tagName && "A" == n.tagName.toUpperCase() && !/^([\w-]+\.)*?baidu\.com/i.test(n.host)) {
        var t = n.href;
        setTimeout(function() {
            NsLogLinker.stat(t)
        }, 1)
    }
    n = null
},isOutLink: function(e) {
    return !/([\w-]+\.)*?baidu\.com/i.test(e)
},bind: function(e) {
    this._pid = e, document.attachEvent ? (document.attachEvent("onmousedown", this._checkEvent), window.attachEvent("onunload", function() {
        document.detachEvent("onmousedown", NsLogLinker._checkEvent)
    })) : (document.addEventListener("mousedown", this._checkEvent, !1), window.addEventListener("unload", function() {
        document.removeEventListener("mousedown", NsLogLinker._checkEvent, !1)
    }, !1))
}};
;
window.baidu = window.baidu || {version: "1-0-0",emptyFn: function() {
}}, baidu.swf = baidu.swf || {}, baidu.isString = function(e) {
    return "object" == typeof e && e && e.constructor == String || "string" == typeof e
}, baidu.swf.getVersion = function() {
    var e = navigator;
    if (e.plugins && e.mimeTypes.length) {
        var a = e.plugins["Shockwave Flash"];
        if (a && a.description)
            return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
    } else if (window.ActiveXObject && !window.opera)
        for (var i = 10; i >= 2; i--)
            try {
                var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                if (s)
                    return i + ".0.0"
            } catch (n) {
            }
}, baidu.swf.createHTML = function(e) {
    e = e || {};
    var a, i, s = baidu.swf.getVersion(), n = 1, r = e.ver || "6.0.0";
    if (s) {
        s = s.split("."), r = r.split(".");
        for (var t = 0; 3 > t && (a = parseInt(s[t], 10), i = parseInt(r[t], 10), !(a > i)); t++)
            if (i > a) {
                n = 0;
                break
            }
    } else
        n = 0;
    if (!n)
        return "";
    var t, o, l, c, d = e.vars, u = ["classid", "codebase", "id", "width", "height", "align"];
    if (e.align = e.align || "middle", e.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", e.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", e.movie = e.url || "", delete e.vars, delete e.url, baidu.isString(d))
        e.flashvars = d;
    else {
        var f = [];
        for (o in d)
            c = d[o], c && f.push(o + "=" + encodeURIComponent(c));
        e.flashvars = f.join("&")
    }
    var p = ["<object "];
    for (t = 0, l = u.length; l > t; t++)
        c = u[t], p.push(" ", c, '="', e[c], '"');
    p.push(">");
    var w = {wmode: 1,scale: 1,quality: 1,play: 1,loop: 1,menu: 1,salign: 1,bgcolor: 1,base: 1,allowscriptaccess: 1,allownetworking: 1,allowfullscreen: 1,seamlesstabbing: 1,devicefont: 1,swliveconnect: 1,flashvars: 1,movie: 1};
    for (o in e)
        c = e[o], w[o] && c && p.push('<param name="' + o + '" value="' + c + '" />');
    e.src = e.movie, e.name = e.id, delete e.id, delete e.movie, delete e.classid, delete e.codebase, e.type = "application/x-shockwave-flash", e.pluginspage = "http://www.macromedia.com/go/getflashplayer", p.push("<embed");
    var v;
    for (o in e)
        if (c = e[o]) {
            if (new RegExp("^salign$", "i").test(o)) {
                v = c;
                continue
            }
            p.push(" ", o, '="', c, '"')
        }
    return v && p.push(' salign="', v, '"'), p.push("></embed></object>"), p.join("")
}, baidu.swf.create = function(e, a) {
    e = e || {};
    var i = baidu.swf.createHTML(e), s = !0;
    return a && baidu.isString(a) && (a = document.getElementById(a)), i.length <= 0 && (i = e.errorMessage || "", s = !1), a && (a.innerHTML = i), s
}, baidu.swf.getMovie = function(e) {
    return document[e] || window[e]
};
;
var CaptchaCom = function(t, i) {
    this.init(t, i)
};
CaptchaCom.DEFAULT_OPTIONS = {imgUrl: "/cgi-bin/genimg?",audioUrl: "/cgi-bin/genaudio?",inputFocusClass: "c_captcha_focus",onInputFocus: null,onInputBlur: null,beforeImgInit: null,afterImgInit: null,template: '<div class="clearfix"><div class="c_captcha_input_con j_input_con"><input style="ime-mode:disabled " autocomplete="off" size="10" maxlength="10" class="c_captcha_input_normal j_captcha_input" ></div><div class="c_captcha_sub_wrap j_captcha_content clearfix" style="display:none;"><div class="c_captcha_img j_captcha_img_wrapper"></div><div class="c_captcha_a"><a class="j_captcha_img_change"  >\u770B\u4E0D\u6E05?</a>&nbsp;<a class="c_captcha_a_audio j_captcha_audio_switch" >\u6536\u542C\u9A8C\u8BC1\u7801</a></div><div class="c_captcha_audio"><img class="j_captcha_audio_icon c_captcha_audio_img" src="http://tieba.baidu.com/tb/img/audio.gif" /><span class="j_captcha_audio_wrapper"></span></div></div></div><div class="c_captcha_tip j_captcha_tip">\u8BF7\u70B9\u51FB\u540E\u8F93\u5165\u9A8C\u8BC1\u7801</div><div class="c_captcha_error j_captcha_err"></div>'}, CaptchaCom.prototype = {init: function(t, i) {
    this.captchaReq = t, this.options = $.extend({}, CaptchaCom.DEFAULT_OPTIONS, i), this.initialized = !1, this.needUpdate = !0, this.j_container = $(i.container);
    var a = $(this.options.template);
    this.j_container.html(a), this.j_content = this.j_container.find(".j_captcha_content"), this.j_input = this.j_container.find(".j_captcha_input"), this.j_tip = this.j_container.find(".j_captcha_tip"), this.j_error = this.j_container.find(".j_captcha_err"), this.j_imgWrapper = this.j_container.find(".j_captcha_img_wrapper"), this.j_imgChangeBtn = this.j_container.find(".j_captcha_img_change"), this.j_switchAudioBtn = this.j_container.find(".j_captcha_audio_switch"), this.j_audioIcon = this.j_container.find(".j_captcha_audio_icon"), this.j_audioWrapper = this.j_container.find(".j_captcha_audio_wrapper"), this._initEvents()
},_initEvents: function() {
    var t = this;
    this.j_imgChangeBtn.click(function() {
        return t.reload(), !1
    }), this.j_switchAudioBtn.click(function() {
        return t.getAudio(), !1
    }), this.j_input.blur(function(i) {
        $(this).removeClass(t.options.inputFocusClass), t.options.onInputBlur && t.options.onInputBlur.call(this, i, t), t.reset()
    }), this.j_input.focus(function(i) {
        $(this).addClass(t.options.inputFocusClass), t.options.onInputFocus && t.options.onInputFocus.call(this, i, t), t.initialized === !1 && (t.options.beforeImgInit && t.options.beforeImgInit.call(t), t.updateCaptchaImg(), t.initialized = !0, t.options.afterImgInit && t.options.afterImgInit.call(t))
    })
},changeContent: function(t) {
    "loginUser" == t ? 1 == this.captchaReq.answer.showShenshou && 1 != this.captchaReq.answer.open_by_spam ? this.j_tip.text("\u4E3A\u62B5\u5FA1\u7206\u5427\u6316\u575F\uFF0C\u5427\u4E3B\u8BBE\u7F6E\u672C\u5427" + this.captchaReq.answer.shenshou_lv + "\u7EA7\u4EE5\u4E0B\u7528\u6237\u6682\u65F6\u9700\u8981\u8F93\u5165\u4E2D\u6587\u9A8C\u8BC1\u7801") : this.j_tip.text("\u8BF7\u70B9\u51FB\u540E\u8F93\u5165\u9A8C\u8BC1\u7801") : 1 == this.captchaReq.answer.showShenshou && 1 != this.captchaReq.answer.open_by_spam ? this.j_tip.text("\u4E3A\u62B5\u5FA1\u7206\u5427\u6316\u575F\uFF0C\u5427\u4E3B\u8BBE\u7F6E\u672C\u5427" + this.captchaReq.answer.shenshou_lv + "\u7EA7\u4EE5\u4E0B\u7528\u6237\u6682\u65F6\u9700\u8981\u8F93\u5165\u4E2D\u6587\u9A8C\u8BC1\u7801") : this.j_tip.text("\u8BF7\u70B9\u51FB\u540E\u8F93\u5165\u9A8C\u8BC1\u7801\uFF0C\u533F\u540D\u53D1\u8D34\u9700\u8981\u8F93\u5165\u9A8C\u8BC1\u7801")
},getAudio: function() {
    this.needUpdate = !1, this.j_audioIcon.show();
    var t = this.options.audioUrl + this.signStr + "&t=" + Math.random();
    document.all ? this.j_audioWrapper.html('<object height=0 width=0 classid=CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6><param name="AutoStart" value="1"><param NAME="url" value="' + t + '"><param name="PlayCount" value="1">') : this.j_audioWrapper.html('<embed src="' + t + '" name="MediaPlayer" type="video/x-ms-wmv" autostart="1" showcontrols="1" allowscan="1" playcount="1" enablecontextmenu="0" height="0" width="0"></object>'), this.j_input.focus()
},_getData: function() {
    this.captchaReq.antiProcess();
    var t = this.captchaReq.getVcodeUrl() + "&t=" + Math.random(), i = this;
    $.ajax({url: t,dataType: "json",success: function(t) {
        var a = t.data;
        i.signStr = a.vcodestr
    },async: !1})
},validCaptcha: function() {
    var t = this.j_input.val();
    return this.captchaReq.antiProcess(), !this.captchaReq.needCaptcha || null != t && 0 != t.length ? !0 : (this.j_error.text("\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801").show(), this.j_input.focus(), !1)
},getInputValue: function() {
    return this.j_input.val().replace(/\s/g, "")
},changeYImg: function(t) {
    t.src = "http://tb1.bdstatic.com/tb/img/errorYimg.jpg"
},updateCaptchaImg: function() {
    if (this.needUpdate) {
        var t = this;
        this.needUpdate = !1, this._getData();
        var i = this.j_img, a = this.options.imgUrl + this.signStr + "&t=" + Math.random();
        i ? i.attr("src", a) : (this.j_imgWrapper.html('<img src="' + a + '" style="cursor: pointer;">'), this.j_img = this.j_imgWrapper.find("img").click(function() {
            t.reload()
        })), this.j_content.show()
    }
},reload: function() {
    this.reset(), this.updateCaptchaImg()
},updateImage: function() {
    this.needUpdate = !1, this.j_input.val("").focus();
    var t = this.imgUrl + this.signStr + "&t=" + Math.random();
    this.j_img.attr("src", t)
},show: function() {
    1 == this.captchaReq.answer.showShenshou && (1 == this.captchaReq.answer.open_by_spam ? this.j_tip.text("\u8BF7\u70B9\u51FB\u540E\u8F93\u5165\u9A8C\u8BC1\u7801") : this.j_tip.text("\u4E3A\u62B5\u5FA1\u7206\u5427\u6316\u575F\uFF0C\u5427\u4E3B\u8BBE\u7F6E\u672C\u5427" + this.captchaReq.answer.shenshou_lv + "\u7EA7\u4EE5\u4E0B\u7528\u6237\u6682\u65F6\u9700\u8981\u8F93\u5165\u4E2D\u6587\u9A8C\u8BC1\u7801"), this.j_input.css("imeMode", "active"), this.j_switchAudioBtn.hide()), this.j_container.show()
},hide: function() {
    this.j_container.hide(), this.j_input.val(""), this.j_error.html("")
},focus: function() {
    this.j_input.focus()
},clear: function() {
    this.j_input.val("")
},reset: function() {
    this.needUpdate = !0
},showErrorTip: function(t) {
    this.j_error.text(t).show()
},hideErrorTip: function() {
    this.j_error.hide().html("")
}};
;
var CaptchaReqCom = function(s, e) {
    this.needCaptcha = !1, this.isPosting = !1, this.isAnonymous = !1, this.answer = {antiNeedVerify: null,antiNeedVerifyAnonymous: null}, this.postType = "thread", this.url = e || "/f/user/json_needvcode", this.forumName = s.forumName, this.forumId = s.forumId, "reply" == s.postType && (this.postType = "reply", s.tid && (this.tid = s.tid)), this.async = !0, s.async === !1 && (this.async = !1), delete s.forumName, delete s.forumId, delete s.postType, delete s.tid, delete s.async, this.params = s
};
CaptchaReqCom.prototype = {_ifHasKnowAnti: function() {
    return this.isAnonymous ? !(null == this.answer.antiNeedVerifyAnonymous) : !(null == this.answer.antiNeedVerify)
},setVcodeUrl: function(s) {
    this.isAnonymous ? this.answer.vcodeUrlAnonymous = s : this.answer.vcodeUrl = s
},getVcodeUrl: function() {
    return this.isAnonymous ? this.answer.vcodeUrlAnonymous : this.answer.vcodeUrl
},_getAntiAnswer: function(s) {
    var e = this, n = {rs1: this.isAnonymous ? "1" : "0",rs10: "thread" == this.postType ? "1" : "0",lm: this.forumId,word: this.forumName,t: Math.random()};
    this.tid && (n.tid = this.tid), this.isPosting = !0, $.ajax({url: e.url,data: n,async: e.async,dataType: "json",success: function(n) {
        e.handleAnswer(n.data), s(), e.isPosting = !1
    }})
},handleAnswer: function(s) {
    this.isAnonymous ? this.answer.antiNeedVerifyAnonymous = s.need : this.answer.antiNeedVerify = s.need, this.answer.showShenshou = s.open_shenshou, 1 == s.open_shenshou && (this.answer.shenshou_lv = s.shenshou_lv, this.answer.open_by_spam = s.open_by_spam), this.tid && (s.vcodeUrl += "&tid=" + this.tid), this.setVcodeUrl(s.vcodeUrl)
},setData: function(s, e) {
    this.params[s] = e
},antiProcess: function(s) {
    if (!this.isPosting) {
        var e = this, n = "", t = function() {
            n = e.isAnonymous ? e.answer.antiNeedVerifyAnonymous : e.answer.antiNeedVerify, e.needCaptcha = "1" == n, s && s(e.needCaptcha)
        };
        this._ifHasKnowAnti() ? t() : this._getAntiAnswer(t)
    }
},reload: function() {
    this.answer.antiNeedVerifyAnonymous = null, this.answer.antiNeedVerify = null
},getCaptchaInstance: function(s) {
    return new CaptchaCom(this, s)
}};
var UiBubbleTipBase = function(e) {
    var i = {content: "",arrow_dir: "up",bubble_css: {width: 170},arrow_pos: {},attr: "",wrap: $("body"),closeBtn: !1,level: 1,arrowReq: !0};
    this._option = $.extend(!0, i, e), this._event = {}, this.init()
};
UiBubbleTipBase.bubbles = {}, UiBubbleTipBase.count = 0, UiBubbleTipBase.prototype = {constructor: UiBubbleTipBase,init: function() {
    this.buildBubble()
},buildBubble: function() {
    var e = this._option;
    _html = this.genericTpl(), wrap = e.wrap, this.j_bubble = $(_html), wrap.append(this.j_bubble), this.j_bubble.css(e.bubble_css), this.j_bubble.find(".j_ui_triangle").css(e.arrow_pos), this.setContent(e.content), "up" == e.arrow_dir || "down" == e.arrow_dir ? this.j_bubble.find(".j_content").css({width: e.bubble_css.width}) : this.j_bubble.find(".j_content").css({width: e.bubble_css.width - 7}), e.closeBtn && this.j_bubble.find(".j_close").show(), e.arrowReq || this.hideArrow(), this._bindEvent(), this.cid = "bubble_" + UiBubbleTipBase.count, UiBubbleTipBase.count++
},_bindEvent: function() {
    var e = this._option, i = this;
    e.closeBtn && this.j_bubble.find(".j_close").click(function() {
        var e = i.triggerEvent("onclose");
        e && i.closeBubble()
    })
},bind: function(e, i, b) {
    var t = {stat: b ? !0 : !1,fun: i};
    this._event[e] ? this._event[e].push(t) : (this._event[e] = [], this._event[e].push(t))
},triggerEvent: function(e) {
    var i = !0;
    if (this._event[e])
        for (var b = this._event[e], t = 0; t < b.length; t++)
            b[t].fun && b[t].fun(), b[t].stat || (i = !1);
    return i
},genericTpl: function() {
    var e = this._option.attr, i = this._option.arrow_dir;
    return _html = '<div class="ui_bubble_wrap j_wrap" ' + e + ' style="display:none;"><div class="j_content ui_bubble_content ui_bubble_' + i + '"><div class="ui_bubble_body j_body"></div><div class="ui_bubble_closed j_close"></div></div><div class="j_ui_triangle ui_triangle ui_triangle_' + i + '"><div class="ui_triangle_outter ui_arrow_o_' + i + '" ><em>\u25C6</em></div><div class="ui_triangle_inner ui_arrow_i_' + i + '" ><em>\u25C6</em></div></div></div>'
},closeBubble: function() {
    this.j_bubble.remove(), delete UiBubbleTipBase.bubbles[this.cid]
},hideArrow: function() {
    this.j_bubble.find(".ui_triangle").hide()
},hideBubble: function() {
    this.j_bubble.hide()
},showBubble: function(e) {
    if (e)
        if (e.zIndex)
            this._getBubbleInfo(e.zIndex), this.j_bubble.css({"z-index": e.zIndex}), this.showByTime(e.type, e.time);
        else {
            this._getBubbleInfo();
            var i = this._handleCover();
            i || this.showByTime(e.type, e.time)
        }
    else {
        this._getBubbleInfo();
        var i = this._handleCover();
        i || this.j_bubble.show()
    }
},showByTime: function(e, i) {
    var b = this;
    "delayShow" == e ? setTimeout(function() {
        b.j_bubble.show()
    }, i) : "delayClose" == e ? (b.j_bubble.show(), setTimeout(function() {
        b.closeBubble()
    }, i)) : b.j_bubble.show()
},_getBubbleInfo: function(e) {
    var i = this, b = i.j_bubble, t = b.width();
    b.width(0), b.show();
    var s = b.offset(), n = s.top, o = s.left, l = b.find(".j_body").height() + 12;
    b.hide(), b.width(t), i.minL = o, i.maxL = o + t + 7, i.minT = n, i.maxT = n + l, e && (i.bubbleType = "inter"), UiBubbleTipBase.bubbles[i.cid] = i
},_isCover: function() {
    var e = this, i = e.cid, b = UiBubbleTipBase.bubbles, t = e;
    for (var s in b)
        if (s == i || "inter" == e.bubbleType || "none" == b[s].j_bubble.get(0).style.display)
            ;
        else {
            var n = b[s];
            if (t.minL < n.maxL && t.maxL > n.minL && t.minT < n.maxT && t.maxT > n.minT)
                return n
        }
    return !1
},_handleCover: function() {
    var e = this._isCover(), i = this;
    if (e) {
        var b = e._option.level, t = i._option.level;
        return t > b ? (e.j_bubble.fadeOut("slow"), !1) : !0
    }
    return !1
},setBubblePosition: function(e) {
    e && (e.top || e.left) && this.j_bubble.css(e)
},setBubbleFixed: function() {
    $.browser.msie && "6.0" == $.browser.version ? this.j_bubble.addClass("ui_bubble_fixed_hack") : this.j_bubble.addClass("ui_bubble_wrap_fixed")
},setBubbleNormal: function() {
    $.browser.msie && "6.0" == $.browser.version ? this.j_bubble.removeClass("ui_bubble_fixed_hack") : this.j_bubble.removeClass("ui_bubble_wrap_fixed")
},setFixedForMessage: function() {
    var e, i = this, b = null;
    e && clearTimeout(e), $(window).bind("scroll", function() {
        e && clearTimeout(e), null == b && (b = {top: parseInt(i.j_bubble.css("top")) || i.j_bubble.position().top}), e = setTimeout(function() {
            i._bubleFixedSet(b)
        }, 10)
    })
},setContent: function(e) {
    this.j_bubble.find(".j_body").html(e)
},_bubleFixedSet: function(e) {
    {
        var i = this, b = $(window).scrollTop();
        this._option
    }
    b > e.top ? (i.setBubbleFixed(), $.browser.msie && "6.0" == $.browser.version || i.j_bubble.css({top: -5}), i.j_bubble.find(".ui_triangle").hide()) : (i.setBubbleNormal(), i.j_bubble.css({top: e.top}), i.j_bubble.find(".ui_triangle").show())
}};
;
var PopWindow = function(t) {
    var e = {styleId: 1,templateObj: {title: "\u65E0",content: "\u65E0",button: "\u65E0",note: "\u65E0",link: "#"}};
    this._option = $.extend(!0, e, t), this._event = {}
};
PopWindow.prototype = {constructor: PopWindow,bind: function(t, e, n) {
    var i = {stat: n ? !0 : !1,fun: e};
    this._event[t] ? this._event[t].push(i) : (this._event[t] = [], this._event[t].push(i))
},trigger: function(t) {
    if (this._event[t])
        for (var e = this._event[t], n = 0; n < e.length; n++)
            if (e[n].fun && e[n].fun(), !e[n].stat)
                return !1;
    return !0
},_buildHtml: function() {
    var t = this;
    if ($("#pop_frame").length > 0)
        return !1;
    var e = this._option, n = $("#j_popWindow_tpl_" + e.styleId).html(), i = e.templateObj.title;
    e.templateObj.title = i + t._sayHi();
    var o = $.tb.format(n, e.templateObj);
    this.PopupContainer = document.createElement("div"), this.PopupContainer.id = "pop_frame", this.PopupContainer.innerHTML = o, document.body.appendChild(this.PopupContainer), setTimeout(function() {
        t._setAnimation(), t._eventInit()
    }, 200)
},_setAnimation: function() {
    var t = $("#pop_animate"), e = t.outerHeight();
    $("#pop_frame").css({height: e + 2 + "px"}), t.css({height: e + "px",top: e + "px"}).animate({top: "0px"}, "slow")
},_sayHi: function() {
    var t = "", e = (new Date).getHours();
    return e >= 0 && 5 > e ? t = "\uFF1A" : e >= 5 && 9 > e ? t = "\uFF0C\u65E9\u4E0A\u597D\uFF1A" : e >= 9 && 12 > e ? t = "\uFF0C\u4E0A\u5348\u597D\uFF1A" : e >= 12 && 14 > e ? t = "\uFF0C\u4E2D\u5348\u597D\uFF1A" : e >= 14 && 18 > e ? t = "\uFF0C\u4E0B\u5348\u597D\uFF1A" : e >= 18 && 24 > e && (t = "\uFF0C\u665A\u4E0A\u597D\uFF1A"), t
},_eventInit: function() {
    var t = this, e = $("#pop_frame");
    e.find(".pop_close").click(function() {
        var e = t.trigger("closeSuccess");
        if (e)
            return $("#pop_frame").remove(), !1
    });
    var n = e.find(".pop_button");
    n.click(function() {
        var e = t.trigger("clickBtn");
        e && $("#pop_frame").remove()
    })
},showPop: function() {
    var t = this;
    t._buildHtml()
}};
;
var Enum = {FileStatus: {NONE: 0,RUNNING: 1,ERROR: 2,COMPLETE: 3},ProcessorStatus: {NOTSTART: 0,RUNNING: 1,PAUSE: 2,COMPLETE: 4,ERROR: 5},ProcessorCommand: {PAUSE: 0,STOP: 1,NONE: 2},Error: {NONE: {no: 0,msg: ""},FILE_SIZE_OVERFLOW: {no: 1,msg: "\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236"},NETWORK_ERROR: {no: 2,msg: "\u7F51\u7EDC\u9519\u8BEF"},JSON_PARSE_ERROR: {no: 3,msg: "\u6570\u636E\u8F6C\u6362\u5931\u8D25"}}}, Compressor = function() {
    var n = null, e = null, t = function() {
        n = document.createElement("canvas"), e = n.getContext("2d")
    };
    this.compress = function(t) {
        var o = t.quality ? t.quality : 1, a = t.imageType ? t.imageType : "image/jpeg", s = 1, u = t.image.width, i = t.image.height;
        if (t.maxWidth && t.maxHeight) {
            var l = u / t.maxWidth, m = i / t.maxHeight;
            s = l > m ? 1 / l : 1 / m
        }
        s = t.rate ? t.rate : s;
        var c = t.isIos ? r(t.image, u, i) : 1;
        n.width = u * s, n.height = i * s, e.clearRect(0, 0, u, i), e.scale(s, s / c), e.drawImage(t.image, 0, 0);
        var h = n.toDataURL(a, o), d = (h.length - 814) / 1.37;
        return t.maxSize && t.maxSize < d && (o = t.maxSize / d, h = n.toDataURL(a, o)), h
    };
    var r = function(t, r, o) {
        n.width = 1, n.height = o, e.drawImage(t, 0, 0);
        for (var a = e.getImageData(0, 0, 1, o).data, s = 0, u = o, i = o; i > s; ) {
            var l = a[4 * (i - 1) + 3];
            0 === l ? u = i : s = i, i = u + s >> 1
        }
        var m = i / o;
        return 0 === m ? 1 : m
    };
    t()
}, MImage = {};
MImage._createImage = function(n) {
    var e = new Image;
    return e.size = n.file.size || 0, e.name = n.file.name || "", e.type = n.file.type || "", e.percent = 0, e.status = Enum.FileStatus.NONE, e.response = "", e.errorCode = 0, e.errorMessage = "", e.onLoaded = n.onLoaded, e.id = "img_" + (new Date).getTime() + "_" + e.type, e.getData = function() {
        return MImage._getImageData(e.src)
    }, e.getPostData = function() {
        return MImage._getPostData(e)
    }, e
}, MImage._getPostData = function(n) {
    return {file: {filename: n.name,type: n.type,content: n.getData()}}
}, MImage._getImageData = function(n) {
    return n.split(",")[1]
}, MImage._calImageSize = function(n) {
    return (n.length - 814) / 1.37
}, MImage._readImage = function(n, e) {
    var t = new FileReader;
    t.onload = function(n) {
        e && e(n.target.result)
    }, t.readAsDataURL(n)
}, MImage._compressImage = function(n, e, t, r, o) {
    var a = new Compressor;
    return n.width > t || n.height > r ? a.compress({image: n,maxWidth: t,maxHeight: r,maxSize: o}) : n.src
}, MImage.create = function(n) {
    var e = (new Compressor, !1), t = null;
    return t = MImage._createImage(n), t.onload = function() {
        !e && n.maxWidth && n.maxHeight && (t.width > n.maxWidth || t.height > n.maxHeight) ? (t.src = MImage._compressImage(t, t.type, n.maxWidth, n.maxHeight, n.maxSize), t.size = MImage._calImageSize(t.src), e = !0) : (t.onLoaded && (t.onLoaded(t), t.onLoaded = null), e = !1)
    }, MImage._readImage(n.file, function(n) {
        t.src = n
    }), t
};
var Queue = function() {
    this._queue = [], this._index = 0, this.push = function(n) {
        "Array" != typeof n ? this._queue.push(n) : this._queue.concat(n)
    }, this.pop = function() {
        return this._queue[this._index++]
    }, this.remove = function(n) {
        this._queue.splice(n, 1)
    }, this.insert = function(n, e) {
        this._queue.splice(n, e, 0)
    }, this.clear = function() {
        this._queue = [], this._index = 0
    }, this.length = function() {
        return this._queue.length
    }, this.remainLength = function() {
        return this._queue.length - this._index
    }, this.get = function(n) {
        return this._queue[n]
    }, this.toArray = function() {
        return this._queue
    }
}, ImageQueue = function(n) {
    Queue.call(this);
    var e = 0, t = n.maxLength || 10, r = n.maxWidth || 0, o = n.maxSize || 5242880, a = n.maxHeight || 0, s = this, u = n.onLoaded || null, i = n.onItemLoaded || null, l = function(n) {
        n.status = Enum.FileStatus.NONE, s.push(n), i && i(n), e == s.length() && u && u(s.toArray())
    }, m = function(n) {
        return s.length() < t ? (MImage.create({file: n,maxWidth: r,maxHeight: a,maxSize: o,onLoaded: l}), !0) : (alert("The queue is exceeded!"), !1)
    };
    this.pop = function() {
        for (var n = null; this._index < this._queue.length; )
            if (n = this._queue[this._index++], n.status == Enum.FileStatus.NONE)
                return n;
        return null
    }, this.concat = function(n) {
        e += n.length;
        for (var t = 0; t < n.length && m(n[t]); t++)
            ;
    }, this.isComplete = function() {
        for (var n = 0, e = 0; e < this.length(); e++)
            this.get(e).status != Enum.FileStatus.NONE && this.get(e).status != Enum.FileStatus.RUNNING && n++;
        return n == this.length()
    }, this.getCompleteItems = function() {
        for (var n = [], e = 0; e < this.length(); e++)
            this.get(e).status != Enum.FileStatus.NONE && this.get(e).status != Enum.FileStatus.RUNNING && n.push(this.get(e));
        return n
    }, this.remove = function(n) {
        this._queue.splice(n, 1), e--
    }, this.reset = function() {
        this.clear(), e = 0
    }
}, FilePoster = function(n, e) {
    var t = null, r = this, o = function() {
        t = new XMLHttpRequest, a()
    }, a = function() {
        t.sendAsBinary || (t.sendAsBinary = function(n) {
            var e = Array.prototype.map.call(n, function(n) {
                return 255 & n.charCodeAt(0)
            });
            t.send(new Uint8Array(e).buffer)
        })
    }, s = function(n) {
        var e = new FormData;
        for (var t in n)
            e.append(t, n[t]);
        return e
    }, u = function(n) {
        var e = "----WebKitFormBoundary" + Math.random(), t = "--" + e, r = [];
        for (var o in n)
            r.push(t), "object" == typeof n[o] ? (r.push('Content-Disposition: form-data; name="' + o + '"; filename="' + n[o].filename + '"'), r.push("Content-Type: " + n[o].type), r.push(""), r.push(atob(n[o].content))) : (r.push('Content-Disposition: form-data; name="' + o + '"'), r.push(""), r.push(n[o]));
        return r.push(t + "--"), {boundary: e,payload: r.join("\r\n")}
    }, i = function(n) {
        if (n)
            for (var e in n)
                r.bind(e, n[e])
    };
    this.bind = function(n, e) {
        t[n] = e, "onprogress" == n && (t.upload[n] = e)
    }, this.sendAsBinary = function(n, e, r) {
        var o = u(e);
        i(r), t.open("POST", n, !0), t.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + o.boundary), t.sendAsBinary(o.payload)
    }, this.sendAsForm = function(n, e, r) {
        var o = s(e);
        i(r), t.open("POST", n, !0), t.send(o)
    }, o(), i(e)
}, Processor = function() {
    this.conf = {}, this.handler = {onPause: null,onContinue: null,onStop: null,onProcessing: null,onComplete: null,onError: null}, this._command = Enum.ProcessorCommand.NONE, this._status = Enum.ProcessorStatus.NOTSTART, this.bind = function(n, e) {
        this.handler[n] = e
    }, this.runHandler = function(n, e) {
        n && n(e)
    }, this.process = function() {
        this._status = Enum.ProcessorStatus.RUNNING, this._command = Enum.ProcessorCommand.NONE
    }, this.pause = function() {
        this._command = Enum.ProcessorCommand.PAUSE
    }, this.goOn = function() {
        this._status = Enum.ProcessorStatus.RUNNING, this._command = Enum.ProcessorCommand.NONE
    }, this.stop = function() {
        this._command = Enum.ProcessorCommand.STOP
    }, this.extend = function(n, e) {
        for (var t in e)
            n[t] = e[t]
    }
}, Uploador = function(n, e) {
    Processor.call(this);
    var t = null, r = this, o = null;
    $.extend(this.conf, {timeout: 300,url: ""}), r.extend(this.conf, {timeout: n.timeout || 300,url: n.url || ""}), r.extend(this.handler, e);
    var a = function() {
        o = new FilePoster({timeout: r.timeout}, {onprogress: u,onload: i,ontimeout: l,onabort: m,onerror: m})
    }, s = function(n, e) {
        r.runHandler(n, e)
    }, u = function(n) {
        var e = n.lengthComputable ? n.loaded / n.total : 1;
        t.percent = e, s(r.handler.onProcessing, t)
    }, i = function(n) {
        t.response = null;
        try {
            t.response = JSON.parse(n.target.responseText), t.status = Enum.FileStatus.COMPLETE, r._status = Enum.ProcessorStatus.COMPLETE, r.handler.onComplete && s(r.handler.onComplete, t)
        } catch (n) {
            r._status = Enum.ProcessorStatus.ERROR, t.status = Enum.FileStatus.ERROR, t.errorCode = Enum.Error.JSON_PARSE_ERROR.no, t.errorMessage = Enum.Error.JSON_PARSE_ERROR.msg, r.runHandler(r.handler.onError, t)
        }
    }, l = function() {
        r._status = Enum.ProcessorStatus.ERROR, t.status = Enum.FileStatus.ERROR, t.errorCode = Enum.Error.NETWORK_ERROR.no, t.errorMessage = Enum.Error.NETWORK_ERROR.msg, r.runHandler(r.handler.onError, t)
    }, m = function() {
        r._status = Enum.ProcessorStatus.ERROR, t.status = Enum.FileStatus.ERROR, t.errorCode = Enum.Error.NETWORK_ERROR.no, t.errorMessage = Enum.Error.NETWORK_ERROR.msg, r.runHandler(r.handler.onError, t)
    };
    this.process = function(e) {
        var r = e.url ? e.url : n.url;
        r = r + "&r=" + Math.random();
        e.file.getData();
        t = e.file, t.status = Enum.FileStatus.RUNNING, this._status = Enum.ProcessorStatus.RUNNING, o.sendAsBinary(r, t.getPostData())
    }, a()
}, UploadorPool = function(n, e) {
    Processor.call(this);
    var t = null, r = [], o = this, a = 0;
    o.extend(o.conf, {maxLength: n.maxLength || 2,url: n.url || ""}), o.extend(o.handler, {onItemComplete: null,onItemStart: null,onItemError: null,onItemProcessing: null,onComplete: null,onStart: null,onError: null,onPause: null,onProcessing: null}), e && o.extend(o.handler, e);
    var s = function(n) {
        o.runHandler(o.handler.onItemComplete, n), g(), d(), f()
    }, u = function(n) {
        o.runHandler(o.handler.onItemError, n), o.runHandler(o.handler.onError, n), g(), d(), f()
    }, i = function(n) {
        o.runHandler(o.handler.onItemProcessing, n), a = l(), o.runHandler(o.handler.onProcessing, {percent: a,imageList: t.toArray()})
    }, l = function() {
        for (var n = t.toArray(), e = 0, r = 0; r < n.length; r++)
            e += n[r].percent;
        return n.length <= 0 ? 1 : e / n.length
    }, m = function() {
        return new Uploador({url: o.conf.url,id: r.length}, {onComplete: s,onProcessing: i,onError: u})
    }, c = function() {
        for (var n = null, e = 0; e < r.length; e++)
            if (r[e]._status != Enum.ProcessorStatus.RUNNING) {
                n = r[e];
                break
            }
        return null == n && r.length < o.conf.maxLength && (n = m(), r.push(n)), n
    }, h = function() {
        for (var n = 0, e = 0; e < r.length; e++)
            r._status != Enum.ProcessorStatus.RUNNING && n++;
        return n == r.length
    }, d = function() {
        o._status != Enum.ProcessorStatus.COMPLETE && o._command == Enum.ProcessorCommand.NONE && o.process({queue: t})
    }, f = function() {
        o._command == Enum.ProcessorCommand.PAUSE && o._status == Enum.ProcessorStatus.RUNNING && h() && (o._status = Enum.ProcessorStatus.PAUSE, o.runHandler(o.handler.onPause, {percent: a,imageList: t.toArray()}))
    }, g = function() {
        return t.isComplete() && o._status != Enum.ProcessorStatus.COMPLETE ? (o._status = Enum.ProcessorStatus.COMPLETE, o.runHandler(o.handler.onComplete, {percent: 100,imageList: t.toArray()}), !0) : !1
    }, E = function() {
        if (t && (o._command = Enum.ProcessorCommand.NONE, o._status = Enum.ProcessorStatus.RUNNING, !g()))
            for (; t.remainLength() > 0; ) {
                var n = c();
                if (null == n)
                    break;
                var e = t.pop();
                e && (o.runHandler(o.handler.onItemStart, e), n.process({file: e}))
            }
    };
    this.process = function(n) {
        o.conf.url = n.url || o.conf.url, t = n.queue, o.runHandler(o.handler.onStart, t.toArray()), E()
    }, this.pause = function() {
        this._command = Enum.ProcessorCommand.PAUSE
    }, this.goOn = function() {
        E()
    }, this.bind = function(n, e) {
        o.handler[n] = e
    }, this.reset = function() {
        this._command = Enum.ProcessorCommand.NONE, this._status = Enum.ProcessorStatus.NOTSTART, a = 0
    }
}, MultiUploador = function(n, e) {
    Processor.call(this);
    var t = this, r = null, o = null, a = null;
    t.extend(t.conf, {maxWidth: 0,maxHeight: 0,maxSize: 5242880,container: null,isAutoUp: !1,queueLen: 10,maxParallel: 1,postType: 0,postUrl: ""}), t.extend(t.handler, {onFileSelected: null,onStartUpload: null,onProgressListen: null,onStopUpload: null,onError: null,onComplete: null,onImageLoaded: null}), e && t.extend(t.handler, e);
    var s = function() {
        a = $("<input type='file' accept='image/*' />").css({opacity: "0",width: t.conf.container.width() + "px",height: t.conf.container.height() + "px"}).attr("multiple", "multiple"), a.appendTo(t.conf.container), a.bind("change", i), o = new UploadorPool({maxLength: t.conf.maxParallel,url: t.conf.postUrl}), u()
    }, u = function() {
        o.bind("onComplete", function(n) {
            t.runHandler(t.handler.onComplete, n), r.reset()
        }), o.bind("onProcessing", function(n) {
            t.runHandler(t.handler.onProgressListen, n)
        }), o.bind("onError", function(n) {
            t.runHandler(t.handler.onError, n)
        }), o.bind("onPause", function(n) {
            t.runHandler(t.handler.onStopUpload, n)
        })
    }, i = function(n) {
        r || (r = new ImageQueue({maxLength: t.conf.queueLen,onLoaded: c,onItemLoaded: m,maxWidth: t.conf.maxWidth,maxHeight: t.conf.maxHeight,maxSize: t.conf.maxSize})), r.concat(n.target.files), l()
    }, l = function() {
        a.val("")
    }, m = function(n) {
        n.size > t.conf.maxSize && (n.status = Enum.FileStatus.ERROR, n.errorCode = Enum.Error.FILE_SIZE_OVERFLOW.no, n.errorMessage = Enum.Error.FILE_SIZE_OVERFLOW.msg, t.runHandler(t.handler.onError, n)), t.runHandler(t.handler.onImageLoaded, n)
    }, c = function(n) {
        t.runHandler(t.handler.onFileSelected, {percent: 0,imageList: n}), t._command == Enum.ProcessorCommand.NONE && t.conf.isAutoUp && t.startUpload()
    };
    this.start = function() {
        this.runHandler(t.handler.onStartUpload, {percent: 0,imageList: r.toArray()}), o.process({queue: r})
    }, this.stop = function() {
        o.pause()
    }, this.goOn = function() {
        o.process({queue: r})
    }, this.clearList = function() {
        r.reset()
    }, this.deleteFile = function(n) {
        for (var e = r.toArray(), t = 0; t < e.length; t++)
            e[t].id && e[t].id == n && r.remove(t)
    }, s()
}, Html5Uploader = {Enum: Enum,MImage: MImage,Queue: Queue,ImageQueue: ImageQueue,FilePoster: FilePoster,Processor: Processor,Uploador: Uploador,UploadorPool: UploadorPool,MultiUploador: MultiUploador};
;
_.Module.define({path: "common/component/Select",sub: {_attrs: {},_defaultAttrs: {cid: 0,trigger: null,classPrefix: "ui-select",template: [].join(""),triggerTpl: '<a href="#"></a>',className: "",name: "",value: "",length: 0,selectedIndex: -1,multiple: !1,disabled: !1,maxHeight: null,selectSource: null},selectTpl: ['<div id="<%=classPrefix%>-cid-<%=cid%>" class="<%=classPrefix%>">', '<ul class="<%=classPrefix%>-content">', "<% for (var i = 0, len = select.length; i < len; i++ ) {%>", '<li class="<%=classPrefix%>-item <%=select[i]["selected"] ? classPrefix + "-selected" : "" %>" data-index="<%=i%>" data-value="<%=select[i]["value"]%>"><%=select[i]["text"]%></li>', "<% } %>", "</ul>", "</div>"].join(""),initial: function(e) {
    if (0 === e.trigger.length)
        throw "trigger is not found";
    this._mergeAttr(e)
},render: function() {
    var e = this, t = e._attrs, i = t.trigger, r = "";
    if ("select" === i[0].tagName.toLowerCase()) {
        this._bindObserve();
        var s = i.tbattr("name");
        s && this.set("name", s), this.set("disabled", i.tbattr("disabled")), r = e._getClassName(t.classPrefix, "trigger"), i.addClass(r), this.set("selectSource", i);
        var n = $(e.get("triggerTpl")).addClass(r);
        this.set("trigger", n), i.after(n).hide(), e.set("model", e.convertSelect(i[0], e.get("classPrefix"))), e._bindEvents()
    }
},updateSelect: function(e, t) {
    var i = this.convertSelect(e[0], t);
    this.set("model", i)
},convertSelect: function(e, t) {
    var i, r = [], s = e.options, n = s.length, l = !1, a = this.get("cid");
    for (i = 0; n > i; i++) {
        var c, o = {}, u = s[i], d = ["text", "value", "defaultSelected", "selected", "disabled"];
        for (c in d) {
            var g = d[c];
            o[g] = u[g]
        }
        u.selected && (l = !0), r.push(o)
    }
    return !l && r.length && (r[0].selected = "true"), {cid: a,select: r,classPrefix: t}
},set: function(e, t) {
    var i = this.get(e);
    this._isEqual(i, t) || (this.fire("change-cid-" + this.get("cid") + ":" + e, {prev: i,value: t}), this._attrs[e] = t)
},get: function(e) {
    return this._attrs[e]
},asyncSelect: function(e) {
    for (var t = this.get("selectSource"), i = "", r = 0, s = e.select.length; s > r; r++)
        i += "<option " + (e.select[r].selected ? "selected" : "") + ' value="' + e.select[r].value + '">' + e.select[r].text + "</option>";
    t.html(i).trigger("change")
},_bindObserve: function() {
    var e = this;
    this.observe("change-cid-" + this.get("cid") + ":model", function(t, i) {
        var r = i.value, s = baidu.template, n = e.get("trigger");
        if (!e.get("options") || 0 == e.get("options").length) {
            var l = s(e.selectTpl, r);
            e.set("options", $(l).appendTo("body"))
        }
        for (var a = null, c = 0, o = r.select.length; o > c; c++)
            r.select[c].selected && (a = r.select[c]);
        n.html(a.text), e.asyncSelect(r)
    }), this.observe("change-cid-" + this.get("cid") + ":visiable", function(t, i) {
        var r = i.value, s = (e.get("classPrefix"), e.get("cid"), e.get("trigger")), n = s.offset(), l = e.get("options");
        l.css({width: s.outerWidth(),top: n.top + s.height(),left: n.left}).toggle(r)
    })
},_bindEvents: function() {
    var e = this, t = e.get("trigger");
    t.on("click", function(t) {
        t.preventDefault();
        $(this);
        e.get("disabled") || e.set("visiable", !e.get("visiable"))
    }).on("mouseenter", function() {
        var t = $(this);
        t.data("disabled") || t.addClass(e.get("classPrefix") + "-trigger-hover")
    }).on("mouseleave", function() {
        var t = $(this);
        t.data("disabled") || t.removeClass(e.get("classPrefix") + "-trigger-hover")
    });
    var i = this.get("classPrefix");
    this.get("options").on("click", ".ui-select-item", function() {
        for (var t = e.get("model"), i = $(this).data("index"), r = $.extend(!0, {}, t), s = 0, n = r.select.length; n > s; s++)
            r.select[s].selected = !1;
        r.select[i].selected = !0, e.set("model", r), e.set("visiable", !1)
    }), $("body").on("click", function(t) {
        var r = $(t.target), s = r.tbattr("class");
        s && -1 != s.indexOf(i) || e.set("visiable", !1)
    })
},_getClassName: function(e, t) {
    if (!e)
        return this.get("className");
    var i = this.get("className") + " " + e + "-" + t;
    return this.get("disabled") && (i += " " + e + "-" + t + "-disabled"), i
},_isType: function(e) {
    return function(t) {
        return {}.toString.call(t) == "[object " + e + "]"
    }
},_isEmptyAttrValue: function(e) {
    var t = this._isType("String"), i = this._isType("Array"), r = Object.prototype.toString, s = function(e) {
        return null != e && e == e.window
    }, n = function(e) {
        if (!e || "[object Object]" !== r.call(e) || e.nodeType || s(e) || !e.hasOwnProperty)
            return !1;
        for (var t in e)
            if (e.hasOwnProperty(t))
                return !1;
        return !0
    };
    return null == e || (t(e) || i(e)) && 0 === e.length || n(e)
},_isPlainObject: function(e) {
    var t = Object.prototype.toString, i = Object.prototype.hasOwnProperty, r = function(e) {
        return null != e && e == e.window
    };
    if (!e || "[object Object]" !== t.call(e) || e.nodeType || r(e))
        return !1;
    try {
        if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf"))
            return !1
    } catch (s) {
        return !1
    }
    var n;
    for (n in e)
        ;
    return void 0 === n || i.call(e, n)
},_isEqual: function(e, t) {
    if (e === t)
        return !0;
    if (this._isEmptyAttrValue(e) && this._isEmptyAttrValue(t))
        return !0;
    var i = Object.prototype.toString, r = i.call(e);
    if (r != i.call(t))
        return !1;
    switch (r) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case "[object Boolean]":
            return +e == +t;
        case "[object Array]":
            var s = e.toString(), n = t.toString();
            return -1 === s.indexOf("[object") && -1 === n.indexOf("[object") && s === n
    }
    if ("object" != typeof e || "object" != typeof t)
        return !1;
    if (this._isPlainObject(e) && this._isPlainObject(t)) {
        if (!this._isEqual(this._keys(e), this._keys(t)))
            return !1;
        for (var l in e)
            if (e[l] !== t[l])
                return !1;
        return !0
    }
    return !1
},_mergeAttr: function(e) {
    this._attrs = $.extend(!0, {}, this._defaultAttrs);
    for (var t in this._defaultAttrs)
        e.hasOwnProperty(t) && (this._attrs[t] = e[t])
},_keys: function(e) {
    var t = Object.keys;
    if (t)
        return t(e);
    var i = [];
    for (var r in e)
        e.hasOwnProperty(r) && i.push(r);
    return i
}}});
;
_.Module.define({path: "common/widget/tchargeDialog",requires: ["common/widget/Tdou"],sub: {initial: function(t) {
    var e = this, i = this.use("common/widget/Tdou");
    t && t.chargeType && "platform" == t.chargeType ? i.factory("payment", t) : (t && (e.consumption_path = t.consumption_path, e.desc = t.desc, e.current_need_tdou = t.current_need_tdou, e.is_direct_cashier = t.is_direct_cashier), t && e.is_direct_cashier ? i.factory("auto_direct", t) : i.factory("get_icon", e.consumption_path || ""))
},_tbmallCashier: function() {
    var t = window.open("");
    $.get("/tbmall/getPayUrl?terminal=pc&pay_type=2", function(e) {
        e.data && (t.location.href = e.data)
    })
}}});
;
_.Module.define({path: "common/widget/wallet_dialog",requires: ["common/component/Card", "common/component/JsPager"],sub: {_dialog: null,_html: null,_pushPager: null,_popPager: null,_otherPopPager: null,_options: null,_pager_option: {container: null,amount: 3,current: 1,total: 0,mode: 0,showDisableItem: !0,template: {prev: '<a href="#url#" index="#page#" #special#>&lt;</a>',next: '<a href="#url#" index="#page#" #special#>&gt;</a>',prev_disable: '<a href="#url#" index="#page#" #special#>&lt;</a>',next_disable: '<a href="#url#" index="#page#" #special#>&gt;</a>',head: "",tail: "",head_disable: "",tail_disable: ""},classname: {wrapper: "tbui_js_pager wallet_js_pager",normal: "normal",current: "current",prev: "prev j_wallet_list_prev",next: "next j_wallet_next_prev",status: "status",prev_disable: "prev_disable",next_disable: "next_disable"}},initial: function() {
},show: function(a) {
    var l = this;
    l._options = a || {}, l._buildCard()
},hide: function() {
    this._dialog && this._dialog.close()
},_buildCard: function() {
    var a = this;
    $.ajax({url: "/tbmall/history?ie=utf8&c=1&pn=1&_t=" + (new Date).valueOf(),type: "get",dateType: "json",success: function(l) {
        if (0 === l.no) {
            a._buildInitHtml(l.data.user);
            var t = {html: a._html,title: "\u6211\u7684T\u8C46\u94B1\u5305",draggable: !1,width: 700,hideOnclose: !1};
            a._dialog = new $.dialog(t), a._buildPager(1, $("#wallet_dialog_msg_tbmall_pop_pager"), a._popPager, a._popChange, l), a._buildPager(1, $("#wallet_dialog_msg_other_pop_pager"), a._otherPopPager, a._otherPopChange), a._buildPager(1, $("#wallet_dialog_msg_push_pager"), a._pushPager, a._pushChange), $("#wallet_dialog_tab").on("click", ".j_wallet_dialog_tab_item", function(a) {
                var l = $(a.currentTarget);
                $(".j_wallet_dialog_tab_item").removeClass("wallet_dialog_tab_current"), l.addClass("wallet_dialog_tab_current");
                var t = l.tbattr("attr-show");
                $(".j_wallet_dialog_msg_list").hide(), $(t).show()
            }), $("#wallet_dialog_return").on("click", function(a) {
                a.preventDefault(), $("#wallet_dialog_main").show(), $("#wallet_dialog_rules").hide()
            }), $("#wallet_dialog_medal").on("click", ".j_wallet_dialog_medal_btn", function(l) {
                l.preventDefault(), _.Module.use("common/widget/JoinVipDialog", [], function(a) {
                    a.getMemberDialog()
                }), a.hide()
            }), $("#j_wallet_tcharge_dialog").on("click", function() {
                a.hide(), _.Module.use("common/widget/tcharge_dialog")
            })
        }
    }})
},_getOrderStatus: function(a) {
    var l = {0: "\u652F\u4ED8\u672A\u5B8C\u6210\uFF01",1: "\u652F\u4ED8\u6210\u529F\uFF0C\u5546\u54C1\u5151\u6362\u4E2D\uFF01",2: "\u5151\u6362\u6210\u529F",3: "\u5151\u6362\u5931\u8D25\uFF0CT\u8C46\u5DF2\u9000\u8FD8",4: '\u5151\u6362\u8D85\u65F6\uFF0C<a target="_blank" href="/f?ie=utf-8&kw=T%E8%B1%86%E5%95%86%E5%9F%8E%E5%90%A7">\u8054\u7CFB\u7BA1\u7406\u5458</a>'};
    return l[a]
},_otherPopChange: function(a, l) {
    var t = this, e = 5;
    $.ajax({url: "/tbmall/getThirdOrder?ie=utf8&c=" + e + "&pn=" + a + "&_t=" + (new Date).valueOf(),type: "get",dateType: "json",success: function(s) {
        0 === s.no && (t._buildOtherPopPage.call(t, s, a), l(Math.ceil(s.data.total_count / e)))
    }})
},_buildOtherPopPage: function(a, l) {
    for (var t = a.data.order_info || [], e = [], s = 0; s < t.length; s++) {
        var _ = t[s], i = new Date(1e3 * _.create_time), n = this._formatDateTime(i), o = _.status;
        e.push('<li class="wallet_dialog_msg_list_item wallet_dialog_msg_list_item_pop">'), e.push('<div class="wallet_dialog_order">\u8BA2\u5355\u53F7\uFF1A' + _.order_id + "\uFF0C<span>" + this._getOrderStatus(o) + "</span></div>"), e.push('<div class="wallet_dialog_order_detail">\u60A8\u83B7\u53D6\u3010<span class="wallet_dialog_msg_buy">' + $.tb.subByte(_.goods_name, 24, "") + "</span>\u3011\u5546\u54C1\uFF0C"), e.push('\u6D88\u8D39\u4E86<span class="wallet_dialog_msg_tbean">' + _.tdou_num + "T\u8C46</span></div>"), e.push('<span class="wallet_dialog_msg_list_date">' + n + "</span>"), e.push("</li>")
    }
    0 == t.length && 1 == l && (e.push('<div class="wallet_dialog_msg_empty">'), e.push("\u60A8\u8FD8\u6CA1\u8D2D\u4E70\u8FC7\u4E1C\u897F\u54E6~\uFF0C<br>\u8D34\u5427\u65B0\u73A9\u6CD5\u4ECE\u9177\u70AB\u7279\u6743\u9053\u5177\u5F00\u59CB\u3002<br>"), e.push('<a target="_blank" href="/tbmall/home">\u8FDB\u5165\u5546\u57CE\u8D2D\u4E70&gt;&gt;</a>'), e.push("</div>")), e = e.join(""), $("#wallet_other_pop_list_main").html(e)
},_popChange: function(a, l, t) {
    var e = this, s = 10;
    return t ? (e._buildPopPage.call(e, t), l(Math.ceil(t.data.total_count / s)), void 0) : ($.ajax({url: "/tbmall/history?ie=utf8&c=" + s + "&pn=" + a + "&_t=" + (new Date).valueOf(),type: "get",dateType: "json",success: function(t) {
        0 === t.no && (e._buildPopPage.call(e, t, a), l(Math.ceil(t.data.total_count / s)))
    }}), void 0)
},_formatDateTime: function(a) {
    var l = a || Date.now(), t = [];
    return t.push(l.getFullYear() + "\u5E74"), t.push(parseInt(l.getMonth() + 1) + "\u6708"), t.push(l.getDate() + "\u65E5&nbsp;"), t.push(l.getHours() + ":"), t.push(l.getMinutes()), t = t.join("")
},_buildPopPage: function(a, l) {
    for (var t = a.data.order_info || [], e = [], s = 0; s < t.length; s++) {
        var _ = t[s], i = new Date(1e3 * _.create_time), n = this._formatDateTime(i);
        e.push('<li class="wallet_dialog_msg_list_item wallet_dialog_msg_list_item_pop">'), e.push('\u60A8\u6D88\u8D39\u4E86<span class="wallet_dialog_msg_tbean">' + _.scores + "T\u8C46</span>\uFF0C");
        var o = 0 == _.props_id.indexOf("105") ? "\u8D2D\u4E70" : "\u5151\u6362";
        e.push(o + '\u4E86\u9053\u5177<span class="wallet_dialog_msg_buy">' + _.props_name + "</span>"), e.push('<span class="wallet_dialog_msg_list_date">' + n + "</span>"), e.push("</li>")
    }
    0 == t.length && 1 == l && (e.push('<div class="wallet_dialog_msg_empty">'), e.push("\u60A8\u8FD8\u6CA1\u8D2D\u4E70\u8FC7\u4E1C\u897F\u54E6~\uFF0C<br>\u8D34\u5427\u65B0\u73A9\u6CD5\u4ECE\u9177\u70AB\u7279\u6743\u9053\u5177\u5F00\u59CB\u3002<br>"), e.push('<a target="_blank" href="/tbmall/home">\u8FDB\u5165\u5546\u57CE\u8D2D\u4E70&gt;&gt;</a>'), e.push("</div>")), e = e.join(""), $("#wallet_tbmall_pop_list_main").html(e)
},_pushChange: function(a, l) {
    var t = this, e = 5;
    $.ajax({url: "/tbmall/bwsdubiorder?ie=utf8&c=" + e + "&pn=" + a + "&_t=" + (new Date).valueOf(),type: "get",dateType: "json",success: function(s) {
        0 === s.no && (t._buildPushPage.call(t, s, a), l(Math.ceil(s.data.total_num / e)))
    }})
},_buildPushPage: function(a, l) {
    for (var t = a.data.order || [], e = [], s = 0; s < t.length; s++) {
        var _ = t[s], i = new Date(1e3 * _.create_time), n = this._formatDateTime(i), o = parseInt(_.given_scores || 0, 10) + parseInt(_.scores || 0, 10);
        e.push('<li class="wallet_dialog_msg_list_item wallet_dialog_msg_list_item_push">'), e.push('<div class="wallet_dialog_order">\u8BA2\u5355\u53F7\uFF1A' + _.order_id + "</div>"), e.push('\u6D88\u8D39<span class="wallet_dialog_msg_tbean">' + _.db_money / 100 + "</span>\u767E\u5EA6\u70B9\u5238"), e.push("\u8D2D\u4E70\u3010\u8D34\u5427\u5370\u8BB0\u3011</span>"), parseInt(_.given_scores) && e.push('\u83B7\u8D60<span class="wallet_dialog_msg_tbean">' + o + "T\u8C46</span>"), e.push('<span class="wallet_dialog_msg_list_date">' + n + "</span>"), e.push("</li>")
    }
    0 == t.length && 1 == l && (e.push('<div class="wallet_dialog_msg_empty">'), e.push("\u60A8\u8FD8\u6CA1\u6709T\u8C46\u5145\u503C\u8BB0\u5F55\uFF0C<br>T\u8C46\u53EF\u4EE5\u8D2D\u4E70\u8D34\u5427\u4F1A\u5458\u4EE5\u53CA\u4F17\u591A\u9177\u70AB\u7279\u6743\u9053\u5177\u3002<br>"), e.push('<a target="_blank" href="/tbmall/home">\u67E5\u770B\u7279\u6743\u9053\u5177&gt;&gt;</a>'), e.push("</div>")), e = e.join(""), $("#wallet_push_list_main").html(e)
},_buildPager: function(a, l, t, e) {
    var s = this;
    "function" == typeof e && e.call(s, a, function(_) {
        if (!(1 >= _)) {
            t = s.use("common/component/JsPager", $.extend(s._pager_option, {current: a,total: _,container: l})), t.bind("pageChange", function(a, _) {
                s._buildPager.call(s, _, l, t, e)
            });
            var i = ['<div class="wallet_js_pager_skip">', '<input type="text" class="wallet_pager_skip_text j_wallet_pager_skip_text" placeholder="\u8DF3\u8F6C\u5230" value="' + a + '"/>', '<a class="wallet_pager_skip_btn j_wallet_pager_skip_btn" href="#">\u8DF3\u8F6C</a>', "</div>"].join(""), n = '<div class="wallet_js_pager_total">\u5171' + _ + "\u9875</div>";
            $(n).prependTo(l);
            var o = $(i);
            o.on("click", ".j_wallet_pager_skip_btn", function(i) {
                i.preventDefault();
                var n = parseInt(o.find(".j_wallet_pager_skip_text").val());
                return n > _ || 0 >= n ? (o.find(".j_wallet_pager_skip_text").val(a), void 0) : (s._buildPager.call(s, n, l, t, e), void 0)
            })
        }
    })
},_buildInitHtml: function(a) {
    var l = this, t = a.Parr_scores || [], e = a.Parr_props ? a.Parr_props.level ? a.Parr_props.level : [] : [], s = e.end_time ? parseInt((new Date).valueOf() / 1e3) > e.end_time ? 0 : e.props_id : 0, _ = a.setpass, i = [];
    i.push('<div id="wallet_dialog_medal" class="wallet_dialog_medal clearfix">'), s ? 1 == e.props_id ? (i.push('<span class="wallet_dialog_medal_text"><span class="showicon showicon_low"></span>\u4F1A\u5458\u4E13\u5C5E\u7279\u6743</span>'), i.push('<a class="wallet_dialog_continue_btn  j_wallet_dialog_medal_btn" href="#">\u7EED\u8D39</a>')) : (i.push('<span class="wallet_dialog_medal_text"><span class="showicon showicon_high"></span>\u4F1A\u5458\u4E13\u5C5E\u7279\u6743</span>'), i.push('<a class="wallet_dialog_continue_btn  j_wallet_dialog_medal_btn" href="#">\u7EED\u8D39</a>')) : (i.push('<a href="#" class="wallet_dialog_medal_open_btn  j_wallet_dialog_medal_btn"><span class="showicon showicon_high"></span>\u5F00\u901A\u4F1A\u5458</a>'), i.push('<span class="wallet_dialog_medal_text">\u5C0A\u4EAB\u7279\u6743</span>')), i.push("</div>"), i = i.join("");
    var n = this._getInfoHtml(t, _), o = this._getIntroHtml(), r = this._getMsgHtml(), d = this._getRuleHtml(), p = ['<div class="wallet_dialog_main clearfix" id="wallet_dialog_main">', '<div class="wallet_dialog_user">', n, '<div class="wallet_dialog_user_power">', i, o, "</div>", "</div>", r, "</div>", d];
    l._html = p.join("")
},_getIntroHtml: function() {
    var a = ['<div class="wallet_dialog_power_list clearfix">', '<a href="/tbmall/tshow?tab=detail&c=0"   target="_blank" class="wallet_dialog_power_item power_identity">\u5C0A\u8D35\u8EAB\u4EFD</a>', '<a href="/tbmall/tshow?tab=detail&c=112" target="_blank" class="wallet_dialog_power_item power_nameplate">\u4E2A\u6027\u94ED\u724C</a>', '<a href="/tbmall/tshow?tab=detail&c=110" target="_blank" class="wallet_dialog_power_item power_dress">\u70AB\u9177\u88C5\u626E</a>', '<a href="/tbmall/tshow?tab=detail&c=103" target="_blank" class="wallet_dialog_power_item power_post">\u8DA3\u5473\u53D1\u8D34</a>', '<a href="/tbmall/tshow?tab=detail&c=108" target="_blank" class="wallet_dialog_power_item power_magic">\u9B54\u6CD5\u9053\u5177</a>', "</div>"].join("");
    return a
},_parseInt: function(a) {
    return a = parseInt(a), a > 0 ? a : 0 >= a ? a : 0
},_getInfoHtml: function(a, l) {
    var t = this._parseInt(a.scores_money), e = this._parseInt(a.scores_other), s = this._parseInt(t + e), _ = ['<div class="wallet_dialog_user_info clearfix">', '<div class="wallet_dialog_my_tbean">', '<span class="wallet_dialog_tbean_label">\u6211\u7684T\u8C46\uFF1A</span>', '<span class="wallet_dialog_tbean_num"><span class="wallet_dialog_tbean_icon"></span>' + s + "</span>", "</div>", '<div class="wallet_dialog_recharge">', '<a href="javascript:;" id="j_wallet_tcharge_dialog" class="wallet_dialog_recharge_btn">\u83B7\u53D6T\u8C46</a>', '<a href="/tbmall/pass/set" class="wallet_dialog_paykey_set_btn" target="_blank">' + (l ? "\u4FEE\u6539\u5BC6\u7801" : "\u8BBE\u7F6E\u652F\u4ED8\u5BC6\u7801") + "</a>", "</div>", "</div>"].join("");
    return _
},_getMsgHtml: function() {
    var a = ['<div class="wallet_dialog_msg">', '<div class="wallet_dialog_tab clearfix" id="wallet_dialog_tab">', '<a class="j_wallet_dialog_tab_item wallet_dialog_tab_item wallet_dialog_tab_current" attr-show="#wallet_tbmall_pop_list">\u5546\u57CE\u6D88\u8D39\u8BB0\u5F55</a>', '<a class="j_wallet_dialog_tab_item wallet_dialog_tab_item" attr-show="#wallet_other_pop_list">\u5176\u4ED6\u6D88\u8D39\u8BB0\u5F55</a>', '<a class="j_wallet_dialog_tab_item wallet_dialog_tab_item" attr-show="#wallet_push_list">\u5145\u503C\u8BB0\u5F55</a>', "</div>", '<div class="wallet_dialog_tbody">', '<div class="j_wallet_dialog_msg_list wallet_dialog_msg_list wallet_tbmall_pop_list" id="wallet_tbmall_pop_list">', '<ul id="wallet_tbmall_pop_list_main">', "</ul>", '<div class="clearfix"></div>', '<div class="wallet_dialog_msg_pager clearfix" id="wallet_dialog_msg_tbmall_pop_pager"></div>', "</div>", '<div class="j_wallet_dialog_msg_list wallet_dialog_msg_list wallet_other_pop_list" id="wallet_other_pop_list">', '<ul id="wallet_other_pop_list_main">', "</ul>", '<div class="clearfix"></div>', '<div class="wallet_dialog_msg_pager clearfix" id="wallet_dialog_msg_other_pop_pager"></div>', "</div>", '<div class="j_wallet_dialog_msg_list wallet_dialog_msg_list wallet_push_list" id="wallet_push_list">', '<ul id="wallet_push_list_main">', "</ul>", '<div class="clearfix"></div>', '<div class="wallet_dialog_msg_pager " id="wallet_dialog_msg_push_pager"></div>', "</div>", "</div>", "</div>"].join("");
    return a
},_getRuleHtml: function() {
    var a = ['<div class="wallet_dialog_rules" id="wallet_dialog_rules">', '<a class="wallet_dialog_change_link" id="wallet_dialog_return" href="#">\u8FD4\u56DE\u6211\u7684T\u8C46\u94B1\u5305&gt;</a>', "<br><br>", "<h4>1.\u8C46\u7968\u8BF4\u660E</h4><hr>", "<p>\u8C46\u7968\u53EF\u4EE5\u8D2D\u4E70\u90E8\u5206\u8D34\u5427T\u8C46\u5546\u57CE\u5546\u54C1\uFF0C\u5177\u4F53\u53EF\u89C1\u5546\u57CE\u8D2D\u4E70\u65F6\u63D0\u793A\u3002</p><hr>", "<p>\u8C46\u7968\u53EF\u4F5C\u4E3A\u90E8\u5206\u8D34\u5427\u5546\u54C1(\u5305\u62EC\u8D34\u5427\u4F1A\u5458)\u7684\u62B5\u4EF7\u5238\u3002</p><hr>", "<h4>2.\u5728\u7EBF\u65F6\u95F4</h4><hr>", "<p>\u7528\u6237\u5728\u8D34\u5427\u6B63\u5E38\u5728\u7EBF\uFF08\u6709\u6D4F\u89C8\u5668\u884C\u4E3A\uFF09\uFF0C\u5373\u53EF\u6309\u5728\u7EBF\u7684\u65F6\u957F\u83B7\u5F97\u5BF9\u5E94\u7684\u8C46\u7968</p><hr>", "<table>", "<tbody>", '<tr><td class="no_rb">\u5728\u7EBF\u65F6\u957F</td><td class="no_rb">\u8C46\u7968\u83B7\u53D6\u6570\u91CF</td><td>\u8C46\u7968\u83B7\u53D6\u65E5\u4E0A\u9650</td></tr>', "<tr>", "<td>10\u5206\u949F</td>", '<td><span class="tbean"></span>10</td>', '<td rowspan="4"><span class="tbean"></span>100</td>', "</tr>", "<tr>", "<td>30\u5206\u949F</td>", '<td><span class="tbean"></span>20</td>', "</tr>", "<tr>", "<td>50\u5206\u949F</td>", '<td><span class="tbean"></span>30</td>', "</tr>", "<tr>", "<td>90\u5206\u949F</td>", '<td><span class="tbean"></span>40</td>', "</tr>", "</tbody>", "</table><hr>", '<p class="explain">\u8BF4\u660E\uFF1A\u5728\u5173\u6CE8\u7684\u5427\u5185\uFF0C\u53F3\u4FA7\u4E2A\u4EBA\u4FE1\u606F\u680F\u4E2D\u5F00\u542F\u5728\u7EBF\u793C\u5305\uFF0C\u5373\u53EF\u83B7\u5F97\u5956\u52B1\u8C46\u7968\u3002</p><hr>', '<img src="http://tb1.', 'bdstatic.com/tb/zt/tshow/wallet_dialog_explain_img.jpg" alt=""><hr>', "<h4>3.\u968F\u673A\u5F69\u86CB</h4><hr><hr>", "<p>\u6D4F\u89C8\u8D34\u5427\u6216\u6D4F\u89C8\u5176\u4ED6\u4F1A\u5458\u7684\u4E3B\u9875\uFF0C\u90FD\u6709\u673A\u4F1A\u83B7\u5F97\u8C46\u7968\u5F69\u86CB\uFF0C\u6BCF\u65E5\u4E0A\u9650170\u8C46\u7968\u3002</p><hr>", "<h4>4.\u53D1\u8D34\u56DE\u8D34</h4><hr>", "<p>\u7528\u6237\u6BCF\u5929\u7684\u53D1\u8D34/\u56DE\u8D34\u884C\u4E3A\u90FD\u53EF\u83B7\u5F97\u4E00\u5B9A\u7684\u8C46\u7968</p><hr>", "<table>", "<tbody>", '<tr><td class="no_rb">\u53D1\u8D34/\u56DE\u8D34</td><td class="no_rb">\u83B7\u5F97\u8C46\u7968</td><td>\u8C46\u7968\u83B7\u53D6\u65E5\u4E0A\u9650</td></tr>', "<tr>", "<td>PC\u9996\u6B21\u53D1\u8D34</td>", '<td><span class="tbean"></span>10</td>', '<td rowspan="2"><span class="tbean"></span>15</td>', "</tr>", "<tr>", "<td>PC\u9996\u6B21\u56DE\u8D34</td>", '<td><span class="tbean"></span>5</td>', "</tr>", "<tr>", "<td>\u591A\u6B21\u53D1\u8D34</td>", '<td><span class="tbean"></span>1/\u8D34\uFF08PC\uFF09<br><span class="tbean"></span>2/\u8D34\uFF08\u79FB\u52A8\u7AEF\uFF09</td>', '<td><span class="tbean"></span>10</td>', "</tr>", "</tbody>", "</table><hr>", '<p class="explain">\u8BF4\u660E\uFF1A\u6BCF\u5929\u53D1\u8D34\u7684\u8BA1\u7B97\u8D77\u6B62\u65F6\u95F4\u4E3A00:00--23:59</p><hr>', "<h4>5.\u70ED\u95E8\u8D34\u5956\u52B1</h4><hr>", "<p>\u7528\u6237\u6240\u53D1\u4E3B\u9898\u8D34\u8FBE\u5230\u70ED\u95E8\u8D34\u8981\u6C42\uFF0C\u53EF\u83B7\u5F97\u5956\u52B1\u8C46\u7968\uFF0C\u6700\u9AD8\u53EF\u8FBE20\u8C46\u7968\u3002</p><hr>", '<p class="explain">\u70ED\u95E8\u8D34\u8BF4\u660E\uFF1A\u6709\u6548\u56DE\u590D\u8FBE\u5230\u4E00\u5B9A\u6570\u91CF\uFF0C\u5177\u4F53\u6570\u91CF\u7531\u6240\u5728\u5427\u7684\u6D3B\u8DC3\u7528\u6237\u6570\u51B3\u5B9A\u3002</p><hr>', '<p class="explain">\uFF08\u5373\u5927\u578B\u8D34\u5427\u7684\u70ED\u95E8\u8D34\u6240\u9700\u56DE\u590D\u6570\u5927\u4E8E\u5C0F\u578B\u8D34\u5427\uFF09</p><hr>', "<h4>5.\u79FB\u52A8\u7AEF\u53D1\u8D34\u56DE\u8D34</h4><hr>", "<p>\u5728\u79FB\u52A8\u7AEF\u767B\u5F55\u540E\u6D3B\u8DC3\uFF08\u53D1\u8D34\uFF0C\u56DE\u8D34\uFF09\u5373\u53EF\u83B7\u5F9715\u8C46\u7968/\u5929\uFF0C\u6B64\u9879\u4E0E\u7B2C3\u9879\u5956\u52B1\u4E0D\u51B2\u7A81\u3002</p><hr>", "<h4>\u8C46\u7968\u4E0A\u9650\u8BF4\u660E</h3><hr>", "<p>1.\u6D3B\u8DC3\u83B7\u53D6\u8C46\u7968\u6BCF\u65E5\u603B\u83B7\u53D6\u4E0A\u9650\u4E3A330\u8C46\u7968/\u5929</p><hr>", "<p>2.\u6D3B\u8DC3\u8C46\u7968\u83B7\u53D6\u4E0A\u9650\u4E3A8000\uFF0C\u82E5\u65E0\u6D88\u8017\u5C06\u4E0D\u518D\u83B7\u5F97\u6D3B\u8DC3\u8C46\u7968</p>", "</div>"].join("");
    return a
}}});
;
_.Module.define({path: "common/widget/JoinVipDialog",sub: {_body: null,_agreeKnown: !0,_dataMap: {},_badgeLv: "month_v2",_monthNum: 3,_use_left_bean: 0,_all_scores: 0,_user_scores: 0,_packet_id: 0,_tbs: "",_price: "0",_dialog: null,_badge1_tpl: ['	<div class=" tshow_join_vip_block_btn tshow_join_vip_badge_btn "  data-id="month_v1">', '<div class="tshow_join_vip_block_btn_info">', '<img class="tshow_join_vip_badge_icon" src="http://tieba.baidu.com/tb/cms/tbmall/jzxz_icon.png" /><span class="badge_lv1 ">\u8D34\u5427\u4F1A\u5458</span></div>', "</div>"].join(""),_badge2_tpl: ['<div class="tshow_join_vip_block_btn tshow_join_vip_badge_btn badge_lv2  tshow_join_vip_block_btn_active "  data-id="month_v2">', '<div class="tshow_join_vip_block_btn_info">', '<img class="tshow_join_vip_badge_icon" src="http://tieba.baidu.com/tb/cms/tbmall/wxxz_icon.png" /><span class="badge_lv1 ">\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458</span>', "</div>", '<div class="tshow_join_vip_recommend_tip"></div>', "</div>"].join(""),initial: function() {
    this._tbs = PageData.tbs, this._bindEvent()
},getMemberDialog: function() {
    return PageData.user.is_login ? (this._flowRateTest(), !1) : (_.Module.use("common/widget/LoginDialog"), !1)
},_bindEvent: function() {
    var _ = this;
    $("body").off("click.j_join_vip"), $("body").delegate(".j_tbmall_join_vip_btn", "click.j_join_vip", function() {
        return _.getMemberDialog(), !1
    }).delegate(".tshow_join_vip_badge_btn", "click.j_join_vip", function() {
        _._badgeBtnClickAction(this)
    }).delegate(".tshow_join_vip_month_count_btn", "click.j_join_vip", function() {
        _._monthBtnClickAction(this)
    }).delegate(".j_tshow_join_vip_use_leave", "click.j_join_vip", function() {
        _._useLeftBtnClickAction(this)
    }).delegate("#j_agree_known", "click", function() {
        _._agreeKnown = $(this)[0].checked, 1 == _._agreeKnown ? $(".tshow_join_vip_open_btn_disable").removeClass("tshow_join_vip_open_btn_disable").addClass("tshow_join_vip_open_btn") : $(".tshow_join_vip_open_btn").removeClass("tshow_join_vip_open_btn").addClass("tshow_join_vip_open_btn_disable")
    }).delegate(".tshow_join_vip_open_btn_content .tshow_join_vip_open_btn", "click.j_join_vip", function() {
        _._getOrderId()
    }).delegate(".tshow_join_vip_j_charge_success_btn", "click.j_join_vip", function() {
        _._dialog.close(), _._confirmChargeState()
    }).delegate(".tshow_join_vip_j_charge_fail_btn", "click.j_join_vip", function() {
        _._dialog.close()
    })
},_badgeBtnClickAction: function(_) {
    _ = $(_), $(".tshow_join_vip_badge_btn").removeClass("tshow_join_vip_block_btn_active"), this._badgeLv = _.tbattr("data-id"), $(_).addClass("tshow_join_vip_block_btn_active");
    var i = this;
    this._getBadgeInfo("need_bean", function(_) {
        i._updatePriceAction(_)
    })
},_monthBtnClickAction: function(_) {
    _ = $(_), $(".tshow_join_vip_month_count_btn").removeClass("tshow_join_vip_block_btn_active"), this._monthNum = _.tbattr("data-id"), $(_).addClass("tshow_join_vip_block_btn_active");
    var i = this;
    this._getBadgeInfo("need_bean", function(_) {
        i._updatePriceAction(_)
    })
},_useLeftBtnClickAction: function() {
    var _ = this;
    _._use_left_bean = $(".tshow_join_vip_use_leave")[0].checked ? 1 : 0, this._getBadgeInfo("need_bean", function(i) {
        _._updatePriceAction(i)
    })
},_updatePriceAction: function(_) {
    this._price = _, $(".j_cost_total").html(_);
    var i;
    this._use_left_bean = $(".tshow_join_vip_use_leave")[0].checked ? 1 : 0, i = this._use_left_bean ? Math.max(0, _ - this._dataMap.use_scores) : _, $(".tshow_join_vip_red").html(Math.ceil(i / 1e3))
},_initDataMap: function() {
    var _ = this;
    $.get("/tbmall/bwstshow", function(i) {
        if (0 == i.no) {
            _._dataMap = i.data;
            var t = $(".j_month_content"), o = $(".j_badge_content");
            $(".j_tshow_join_vip_block_use_scores").html(_._dataMap.use_scores), $(".j_tshow_join_vip_block_all_scores").html(_._dataMap.all_scores);
            for (var n = 0; n < i.data.month_v1.length; n++)
                t.append('	<div class="tshow_join_vip_block_btn tshow_join_vip_month_count_btn ' + (3 == n ? "tshow_join_vip_block_btn_active" : "") + '"  data-id="' + i.data.month_v1[n].month_num + '" >' + i.data.month_v1[n].month_num + "\u4E2A\u6708" + (3 == n ? '<div class="tshow_join_vip_recommend_tip"></div>' : "") + "</div>");
            _._dataMap.user.Parr_props && _._dataMap.user.Parr_props.level && 2 == _._dataMap.user.Parr_props.level.props_id && 1e3 * _._dataMap.user.Parr_props.level.end_time > (new Date).getTime() || o.append(_._badge1_tpl), o.append(_._badge2_tpl), _._use_left_bean = $(".badge_lv2").trigger("click"), $(".tshow_join_vip_month_count_btn").eq(3).trigger("click")
        } else
            _._showDialog("\u9519\u8BEF\u63D0\u793A", "\u83B7\u53D6\u4FE1\u606F\u5931\u8D25", 200)
    })
},_build: function() {
    var _ = ['<div id="tshow_join_vip_wrapper">', '<div class="tshow_join_vip_block clearfix">', '<div class="tshow_join_vip_block_title">\u5F00\u901A\u4F1A\u5458\u7C7B\u578B\uFF1A</div>', '<div class="tshow_join_vip_block_content j_badge_content">', "</div>", "</div>", '<div class="tshow_join_vip_block clearfix">', '<div class="tshow_join_vip_block_title">\u5F00\u901A\u65F6\u957F\uFF1A</div>', '<div class="tshow_join_vip_block_content j_month_content">', "</div>", "</div>", '<div class="tshow_join_vip_block clearfix">', '<div class="tshow_join_vip_block_title tshow_join_vip_block_bottom"></div>', '<div class="tshow_join_vip_block_content tshow_join_vip_block_bottom">', '<span class="contsigncard_tip"><span class="red_sign">*</span>\u5F00\u901A12\u4E2A\u6708\u8D85\u7EA7\u4F1A\u5458\u8D60\u9001<span class="strong_txt">\u8FDE\u7EED\u7B7E\u5230\u53613\u5F20</span></span>', "</div>", "</div>", '<div class="tshow_join_vip_block clearfix">', '<div class="tshow_join_vip_block_title tshow_join_vip_block_bottom">\u603B\u4EF7\uFF1A</div>', '<div class="tshow_join_vip_block_content tshow_join_vip_block_bottom">', '<div class="tshow_join_vip_block_info"><span class="j_cost_total tshow_cost_total">360000</span>T\u8C46 <input type="checkbox" class="tshow_join_vip_use_leave j_tshow_join_vip_use_leave" name="use_leave" /><span class="tshow_join_vip_block_tip" >\u4F7F\u7528T\u8C46\u4F59\u989D(\u53EF\u7528\u4F59\u989D<span class="j_tshow_join_vip_block_use_scores" >\u52A0\u8F7D\u4E2D..</span> \u603B\u4F59\u989D<span  class="j_tshow_join_vip_block_all_scores" >\u52A0\u8F7D\u4E2D..</span>)</span></div >', "</div>", "</div>", '<div class="tshow_join_vip_block clearfix">', '<div class="tshow_join_vip_block_title tshow_join_vip_block_bottom">\u9700\u8981\u82B1\u8D39\uFF1A</div>', '<div class="tshow_join_vip_block_content tshow_join_vip_block_bottom">', '<div class="tshow_join_vip_block_info"><span class="tshow_join_vip_info"><span class="tshow_join_vip_red">360</span>\u767E\u5EA6\u70B9\u5238(1\u70B9\u5238 = 1000T\u8C46 = 1\u5143\u4EBA\u6C11\u5E01)</span></div >', "</div>", "</div>", '<div class="tshow_join_vip_block tshow_join_vip_open_btn_section">', '<div class="tshow_join_vip_open_btn_content clearfix">', '<div class="tshow_join_vip_open_btn"><i  class="tshow_join_vip_open_btn_left"></i>\u7ACB\u5373\u5F00\u901A</div>', '<div class="tshow_join_vip_open_btn_tip"><input type="checkbox" checked id="j_agree_known" name="agree" /><a href="/tb/tdouprecautions.html" target="_blank">\u540C\u610FT\u8C46\u4F7F\u7528\u987B\u77E5</a></div>', "</div>", "</div>", "</div>", '<div class="tshow_cont_sign_intro"><div class="question"><span class="question-icon"></span>\u4EC0\u4E48\u662F\u8FDE\u7EED\u7B7E\u5230\u5361</div> <div class="answer">\u4F7F\u7528\u8FDE\u7EED\u7B7E\u5230\u5361,\u53EF\u628A\u67D0\u4E2A\u5427\u6240\u6709\u7684\u7B7E\u5230\u5929\u6570\u8FDE\u7EED\u5728\u4E00\u8D77!</div></div> '].join("");
    this._body = $(_), this._showDialog("\u5F00\u901A\u8D34\u5427\u4F1A\u5458", this._body, 650)
},_chargingDialog: function() {
    var _ = "<p class='tshow_join_vip_dialog_content'>\u8BF7\u5728\u65B0\u6253\u5F00\u7684\u9875\u9762\u4E0A\u5B8C\u6210\u5F00\u901A\u4F1A\u5458\u7684\u652F\u4ED8\u64CD\u4F5C</p><p class='tshow_join_vip_dialog_second_content'>\u652F\u4ED8\u5B8C\u6210\u524D&nbsp;&nbsp;&nbsp;&nbsp;\u8BF7\u52FF\u5173\u95ED\u7A97\u53E3</p><div class='tshow_join_vip_dialog_btn_wrap'><a class='tshow_join_vip_charge_btns tshow_join_vip_j_charge_success_btn'>\u652F\u4ED8\u6210\u529F</a><a class='tshow_join_vip_charge_btns tshow_join_vip_j_charge_fail_btn'>\u652F\u4ED8\u5931\u8D25</a></div>";
    this._showDialog("\u5145\u503CT\u8C46", _, 500)
},_getBadgeInfo: function(_, i) {
    for (var t = 0; t < this._dataMap[this._badgeLv].length; t++)
        if (this._dataMap[this._badgeLv][t].month_num == this._monthNum) {
            if (!i)
                return this._dataMap[this._badgeLv][t][_];
            i(this._dataMap[this._badgeLv][t][_]);
            break
        }
},_getOrderId: function() {
    var _ = this, i = _._price <= _._dataMap.all_scores && _._use_left_bean;
    if (this._dialog.close(), !i) {
        this._chargingDialog();
        var t = window.open("about:blank")
    }
    this._getBadgeInfo("packet_id", function(i) {
        _._packet_id = i
    });
    var o = {ie: "utf-8",tbs: this._tbs,packet_id: this._packet_id};
    o.use_left_bean = _._use_left_bean, $.ajax({type: "POST",url: "/tbmall/buytshow",dataType: "json",data: o,success: function(o) {
        switch (o.no) {
            case 0:
                !i && o.data.dubi_url ? (_._order_id = o.data.order_id, t.location = o.data.dubi_url) : _._bubble = _._showBubble("<span class='tshow_join_vip_charge_btns success_bubble_icon' ></span><span class='small_bubble_content'>\u5DF2\u6210\u529F\u5F00\u901A\u4F1A\u5458", 1500, "canClose", function() {
                    $.tb.location.reload()
                });
                break;
            default:
                _._showDialog("\u64CD\u4F5C\u5931\u8D25", o.no, 200)
        }
    }})
},_confirmChargeState: function() {
    var _ = this, i = 6;
    this._bubble = this._showBubble("\u6B63\u5728\u9A8C\u8BC1\u652F\u4ED8\u4E2D\uFF0C\u8BF7\u7A0D\u5019" + i + "\u79D2...");
    var t = setInterval(function() {
        if (i--, _._bubble.html("\u6B63\u5728\u9A8C\u8BC1\u652F\u4ED8\u4E2D\uFF0C\u8BF7\u7A0D\u5019" + i + "\u79D2..."), i % 2 == 0) {
            var o = {ie: "utf-8",tbs: _._tbs,order_id: _._order_id};
            $.ajax({type: "POST",url: "/tbmall/checkorder",dataType: "json",data: o,success: function(o) {
                switch (o.no) {
                    case 0:
                        1e4 == o.data.result_code && (_._closeBubble(_._bubble), _._bubble = _._showBubble("<span class='tshow_join_vip_charge_btns success_bubble_icon' ></span><span class='small_bubble_content'>\u5DF2\u6210\u529F\u5F00\u901A\u4F1A\u5458", 1500, "canClose", function() {
                            $.tb.location.reload()
                        }), clearInterval(t)), 0 >= i && (_._closeBubble(_._bubble), _._bubble = _._showBubble("<span class='tshow_join_vip_charge_btns fail_bubble_icon' ></span><span class='small_bubble_content'>\u62B1\u6B49,\u5F00\u901A\u4F1A\u5458\u6CA1\u6709\u6210\u529F</span>", 1500, "canClose"), clearInterval(t));
                        break;
                    case 1:
                    case 2:
                    default:
                        0 >= i && (_._closeBubble(_._bubble), _._bubble = _._showBubble("<span class='tshow_join_vip_charge_btns fail_bubble_icon' ></span><span class='small_bubble_content'>\u62B1\u6B49,\u7CFB\u7EDF\u51FA\u73B0\u5F02\u5E38,\u8BF7\u5237\u65B0\u9875\u9762\u67E5\u770B\u4EA4\u6613\u8BB0\u5F55</span>", 1500, "canClose"), clearInterval(t))
                }
            },error: function() {
                _._bubble.html("<p>\u672A\u77E5\u9519\u8BEF</p>"), clearInterval(t)
            }})
        }
        0 >= i && clearInterval(t)
    }, 1e3)
},_showDialog: function(_, i, t) {
    this._dialog = new $.dialog({html: i,title: _,width: t,hideOnclose: !1,draggable: !1,closeable: !0})
},_showBubble: function(_, i, t, o) {
    var n = $("<div class='small_bubble_block'  ></div>");
    return n.append(_), $("body").append(n), n.css({left: $(window).width() / 2 - n.width() / 2,top: $(window).height() / 2}), $(window).resize(function() {
        n.css({left: $(window).width() / 2 - n.width() / 2,top: $(window).height() / 2})
    }), t && n.click(function() {
        $(this).remove()
    }), i ? (this._closeBubble(n, i, o), void 0) : n
},_closeBubble: function(_, i, t) {
    i && i > 0 ? setTimeout(function() {
        _.fadeOut("normal", function() {
            _.remove(), "function" == typeof t && t()
        })
    }, i) : _.fadeOut("normal", function() {
        _.remove()
    })
},_flowRateTest: function() {
    var _ = window.open("");
    $.get("/tbmall/getPayUrl?terminal=pc&pay_type=1", function(i) {
        i.data && (_.location.href = i.data)
    })
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouBuilder",requires: ["common/widget/Tdou/TdouTemplate", "common/widget/Tdou/TdouCounter"],sub: {order_status: {1: "\u53D1\u8D27\u4E2D",2: "\u652F\u4ED8\u6210\u529F\uFF0C\u53D1\u8D27\u6210\u529F",3: "\u652F\u4ED8\u6210\u529F\uFF0C\u53D1\u8D27\u5931\u8D25\uFF0C\u9000\u8FD8T\u8C46",4: "\u652F\u4ED8\u6210\u529F\uFF0C\u53D1\u8D27\u8D85\u65F6\uFF0C\u8BF7\u8054\u7CFB\u5546\u5BB6"},initial: function() {
    this.template = this.use("common/widget/Tdou/TdouTemplate")
},builderGetTdouMain: function(t, e) {
    var o = this.template.getMainFrame(), a = this.builderGetTdouList(t);
    return $.tb.format(o, {list: a,user_name_show: e.userNameShow,user_name: e.userName,tdou_amount: e.tdouAmount,member_icons: e.member_icons,advance_Member: e.advance_Member,member_name_color: e.member_name_color})
},builderGetBodyTitle: function(t) {
    var e = this.template.getBodyTitle();
    return $.tb.format(e, t)
},builderGetTdouList: function(t) {
    var e = "";
    if (t) {
        var o = this.template.getIconItem(), a = 0;
        for (var n in t) {
            var r = t[n];
            r.idx = a, r.price_diff = r.member_price - r.non_member_price, r.per_price = 100 * r.price_diff / r.non_member_price, e += $.tb.format(o, r), a++
        }
        return e
    }
},builderLoading: function() {
    return this.template.getLoadingTpl()
},builderMask: function() {
    return this.template.getMaskLayer()
},builderTdouCheck: function() {
    return this.template.getTipInfoCheckPayInfoAndTdouInfo()
},builderError: function(t) {
    var e = this.template.getTipInfoMainFrame(), o = {tip_img: "tip_failed_img",tdou_tip_text: "<div class='tdou_tip_error'><span class='tdou_tip_icon_name'>" + t + "</span>\u83B7\u53D6\u5931\u8D25\uFF01\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u83B7\u53D6\u6216\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF01</div>"};
    return $.tb.format(e, o)
},builderIconTip: function(t, e, o) {
    var a = this.template.getIconInfoTip(), n = {icon_name: t,icon_expired: e,icon_desc: o};
    return $.tb.format(a, n)
},buildGetIconSuccessTip: function(t) {
    var e = this.template.getTipInfoMainFrame(), o = "<span class='tdou_tip_error' style='margin-right: 10px'>\u8D2D\u4E70\u5370\u8BB0\u6210\u529F\uFF0C\u83B7\u8D60T\u8C46\u6210\u529F</span><a href=\"/home/main?ie=utf-8&un=" + t + '&fr=new_icon" target="_blank">\u53BB\u6211\u7684\u4E2A\u4EBA\u4E2D\u5FC3\u67E5\u770B>></a>', a = {tip_img: "tip_successed_img",tdou_tip_text: o};
    return $.tb.format(e, a)
},builderPaymentFailed: function(t) {
    var e = this, o = this.template.getTipInfoMainFrame(), a = {tip_img: "tip_failed_img",tdou_tip_text: e.builderPaymentFailedText(t)};
    return $.tb.format(o, a)
},builderPaymentFailedText: function(t) {
    return "<div class='tdou_tip_error'><span class='tdou_tip_icon_name'>\u3010" + t + "\u3011</span>\u5151\u6362\u5931\u8D25\uFF01<a class='tdou_pay_error_link'  target='_blank' href='/f?ie=utf-8&kw=T%E8%B1%86%E5%95%86%E5%9F%8E%E5%90%A7'>\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458</a></div>"
},buildPaymentSuccess: function(t, e, o, a) {
    var n = this, r = this.template.getTipInfoMainFrame(), i = n.buildPaymentSuccessText(t, e, o, a), d = {tip_img: "tip_successed_img",tdou_tip_text: i};
    return $.tb.format(r, d)
},buildPaymentSuccessText: function(t, e, o, a) {
    var n = "<div class='tdou_tip_error' style='margin-right: 10px'>\u60A8\u5728" + (t || "\u5546\u57CE") + "\u83B7\u53D6\u7684\u3010" + e + "\u3011</div><div class='tdou_tip_error' style='margin-right: 10px'>" + this.order_status[a] + "</div>";
    return 2 == parseInt(a) && (n += "<div>\u4F7F\u7528<span class='tdou_icon'></span>" + o + "\u5151\u6362\u8BE5\u5546\u54C1</div>"), n
},build3rdOrderInfo: function(t) {
    var e = this.template.getTipInfoMainFrame(), o = "";
    if (t) {
        o += "<div class='tdou_tip_error' style='margin-right: 10px;margin-left:25px;margin-top:0'><ul style='list-style-type: disc;'>";
        for (var a in t)
            void 0 != a && (o += "<li><p class='tdou_tip_text_line'>" + t[a] + "</p></li>");
        o += "</ul></div>"
    } else
        o = "<div class='tdou_tip_error' style='margin-right: 10px;margin-left:15px'>\u8BA2\u5355\u5904\u7406\u5F02\u5E38</div>";
    var n = {tip_img: "tip_info_img_big",tdou_tip_text: o};
    return $.tb.format(e, n)
},buildPayTdouMain_goodsInfo_getGoodsName: function(t) {
    return $.tb.subByte(t, 24, "")
},buildPayTdouMain_goodsInfo: function(t) {
    var e = this, o = parseFloat(t.goods_price) * t.goods_amount, a = e.buildPayTdouMain_goodsInfo_getGoodsName(t.goods_name), n = {goods_name: e.escapeHTML(a),goods_full_name: t.goods_name,goods_img: t.goods_image,goods_info_amount_val: e.escapeHTML(e._convertNum(t.goods_amount)),goods_info_amount_unit: e.escapeHTML(t.goods_unit),goods_info_duration_val: e.escapeHTML(t.goods_duration),goods_info_duration_unit: "\u5929",good_price_val: e.escapeHTML(o)};
    parseInt(t.goods_duration) || (n.goods_info_duration_val = "\u6C38\u4E45", n.goods_info_duration_unit = "");
    var r = e.template.getTdouPayInfoGoodsInfoBase();
    return $.tb.format(r, n)
},buildPayTdouMain_nonMemberGetGoodsOwnedMember: function(t, e, o, a) {
    var n = this, r = n.buildPayTdouMain_goodsInfo_getGoodsName(e.goods_name), i = n.buildPayTdouMain_goodsInfo(e), d = n.template.getTdouPayInfoPaymentInfoBase(), u = "", m = "", _ = "";
    t ? (_ = {tdou_pay_from: e.tdou_pay_from,tdou_pay_goods_name: r,goods_full_name: e.goods_name,tdou_pay_need_tdou: e.tdou_num}, u = $.tb.format(n.template.getTdouPayInfoPaymentInfo_tdouEnough(), _), m = n.template.getTdouPayInfoOpenMemberFreeGoodsTip() + $.tb.format(n.template.getTdouPayInfoPaymentInfoBtn_pay(), {tb_tdou_pay_btn: "\u7ACB\u5373\u5151\u6362"}), m += n.builder30CountConfirm(o.cpath)) : (_ = {tdou_pay_from: e.tdou_pay_from,tdou_pay_goods_name: r,goods_full_name: e.goods_name,tdou_need_pay: a}, u = $.tb.format(n.template.getTdouPayInfoPaymentInfo_tdouNoEnough(), _), m = n.template.getTdouPayInfoOpenMemberFreeGoodsTip() + n.template.getTdouPayInfoPaymentInfoBtn_get());
    var f = $.tb.format(d, {payment_desc: u,btn: m}), s = n.template.getTdouPayInfoMain();
    return $.tb.format(s, {sale_info: i,payment_info: f})
},buildPayTdouMain_nonMemberGetTdouOwnedMember: function(t, e, o, a) {
    var n = this, r = n.buildPayTdouMain_goodsInfo_getGoodsName(e.goods_name), i = n.buildPayTdouMain_goodsInfo(e), d = n.template.getTdouPayInfoPaymentInfoBase(), u = "", m = "", _ = "";
    t ? (_ = {tdou_pay_from: e.tdou_pay_from,tdou_pay_goods_name: r,goods_full_name: e.goods_name,tdou_pay_need_tdou: e.tdou_num}, u = $.tb.format(n.template.getTdouPayInfoPaymentInfo_tdouEnough(), _), m = $.tb.format(n.template.getTdouPayInfoPaymentInfoTip(), {checkbox: ""}) + $.tb.format(n.template.getTdouPayInfoPaymentInfoBtn_pay(), {tb_tdou_pay_btn: "\u7ACB\u5373\u5151\u6362"}), m += n.builder30CountConfirm(o.cpath)) : (_ = {tdou_pay_from: e.tdou_pay_from,tdou_pay_goods_name: r,goods_full_name: e.goods_name,tdou_need_pay: a}, u = $.tb.format(n.template.getTdouPayInfoPaymentInfo_tdouNoEnough(), _), m = $.tb.format(n.template.getTdouPayInfoPaymentInfoTip(), {checkbox: '<span class="tdou_enable_member "><input type="checkbox" class="j_tdou_enable_member" /></span>'}) + n.template.getTdouPayInfoPaymentInfoBtn_get());
    var f = $.tb.format(d, {payment_desc: u,btn: m}), s = n.template.getTdouPayInfoMain();
    return $.tb.format(s, {sale_info: i,payment_info: f})
},buildPayTdouMain_memberGetTdou: function(t, e, o, a) {
    var n = this, r = n.buildPayTdouMain_goodsInfo_getGoodsName(e.goods_name), i = n.buildPayTdouMain_goodsInfo(e), d = n.template.getTdouPayInfoPaymentInfoBase(), u = "", m = "", _ = "";
    if (t) {
        _ = {tdou_pay_from: e.tdou_pay_from,tdou_pay_goods_name: r,goods_full_name: e.goods_name,tdou_pay_need_tdou: e.tdou_num};
        var f = "\u7ACB\u5373\u5151\u6362";
        f = 2 == e.free_vip_level ? "\u514D\u8D39\u9886\u53D6" : "\u7ACB\u5373\u5151\u6362", u = $.tb.format(n.template.getTdouPayInfoPaymentInfo_tdouEnough(), _), m = n.template.getTdouPayInfoPaymentInfoByMember() + $.tb.format(n.template.getTdouPayInfoPaymentInfoBtn_pay(), {tb_tdou_pay_btn: f}), m += n.builder30CountConfirm(o.cpath)
    } else
        _ = {tdou_pay_from: e.tdou_pay_from,tdou_pay_goods_name: r,goods_full_name: e.goods_name,tdou_need_pay: a}, u = $.tb.format(n.template.getTdouPayInfoPaymentInfo_tdouNoEnough(), _), m = n.template.getTdouPayInfoPaymentInfoByMember() + n.template.getTdouPayInfoPaymentInfoBtn_get();
    var s = $.tb.format(d, {payment_desc: u,btn: m}), p = n.template.getTdouPayInfoMain();
    return $.tb.format(p, {sale_info: i,payment_info: s})
},buildPayTdouMain_memberGetTdou_freeGoods: function(t, e, o) {
    var a = this, n = a.buildPayTdouMain_goodsInfo(e), r = a.template.getTdouPayInfoPaymentInfoBase(), i = "", d = "", u = "\u514D\u8D39\u9886\u53D6";
    i = a.template.getTdouPayInfoPaymentInfo_forMember(), d = a.template.getTdouPayInfoPaymentInfoByMember() + $.tb.format(a.template.getTdouPayInfoPaymentInfoBtn_pay(), {tb_tdou_pay_btn: u}), t && (d += a.builder30CountConfirm(o.cpath));
    var m = $.tb.format(r, {payment_desc: i,btn: d}), _ = a.template.getTdouPayInfoMain();
    return $.tb.format(_, {sale_info: n,payment_info: m})
},builder30CountConfirm: function(t) {
    return t && "1" == t.tip_exist ? this.template.getTdouPayInfoPaymentInfoPayConfirm() : ""
},builderTdouPaymentResult: function(t) {
    var e = {result_html: t};
    return $.tb.format(this.template.getTdouPaymentResultMain(), e)
},builderTdouPaymentError: function(t) {
    var e = {error_text: t};
    return $.tb.format(this.template.getTdouPaymentErrorMain(), e)
},escapeHTML: function(t) {
    return "string" != typeof t ? t : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;").replace(/'/g, "&#039;").replace(/"/g, "&quot;")
},buildCashierIframe: function(t) {
    return $.tb.format(this.template.getCashierIframe(), {cashier_url: t})
},_convertNum: function(t) {
    return t > 99999999 ? Math.floor(t / 1e8) + "\u4EBF" : t > 9999999 ? Math.floor(t / 1e7) + "\u5343\u4E07" : t > 999999 ? Math.floor(t / 1e6) + "\u767E\u4E07" : t > 99999 ? Math.floor(t / 1e4) + "\u4E07" : t
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouCounter",requires: [],sub: {onValueChange: [],initial: function() {
},builderUI: function(t) {
    var a = ['<div id="tdou_counter_#{id}" class="tdou_calc_count j_tdou_calc_count">', '    <button class="tdou_calc_op tdou_calc_minus j_tdou_calc_minus">-</button>', '    <input class="tdou_calc_input j_tdou_calc_input" type="text" value="1"/>', '    <button  class="tdou_calc_op tdou_calc_add j_tdou_calc_add">+</button>', "</div>"].join(""), n = $.tb.format(a, {id: t});
    return n
},bindEvents: function(t) {
    var a = this;
    if (t) {
        var n = 999999, c = t.find(".j_tdou_calc_input"), e = t[0].id.replace("tdou_counter_", "");
        t.delegate(".j_tdou_calc_minus", "click", function() {
            var t = parseInt(c.val()) || 1;
            t = Math.max(1, t - 1), t = Math.min(n, t), c.val(t), a.triggerValChange(t, e)
        }).delegate(".j_tdou_calc_add", "click", function() {
            var t = parseInt(c.val()) || 1;
            t++, t = Math.min(n, t), c.val(t), a.triggerValChange(t, e)
        }).delegate(".j_tdou_calc_input", "input propertychange", function() {
            var t = /^[1-9]\d*$/, o = c.val();
            (o && !t.test(o) || t.test(o) && o > 999) && (o = o.replace(/\D/g, "").replace(/^0(\d*)$/, "$1"), o = Math.min(n, o), c.val(o), a.triggerValChange(o, e))
        });
        var o = function() {
            var t = c.val() && parseInt(c.val()) > 0 && parseInt(c.val()) || 1;
            t = Math.min(n, t), c.val(t), a.triggerValChange(t, e)
        };
        c.on("blur", function() {
            o()
        }).on("keydown", function(t) {
            13 == t.keyCode && o()
        })
    }
},triggerValChange: function(t, a) {
    for (var n = 0; n < this.onValueChange.length; n++) {
        var c = this.onValueChange[n];
        c.action && "function" == typeof c.action && c.context && c.action.call(c.context, t, a)
    }
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouData",requires: ["tbmall/widget/TbeanSafeAjax"],sub: {tipData: {tbxiaoniu: "\u767D\u5929\u5973\u5C4C\u4E1D\uFF0C\u665A\u4E0A\u591C\u5E97\u5973\u738B",tbzhangyu: "\u7231\u597D\u591A\u591A\uFF0C\u4E3A\u5174\u8DA3\u800C\u751F",tbxiaoxiong: "\u718A\u6F6E\u718A\u6D77\u4E2D\u6709\u4F60\u6709\u6211",tbxiaotietie: "\u8D34\u5427\u5C0F\u8D34\u8D34",ff14: "\u6700\u7EC8\u5E7B\u60F314\u4E13\u5C5E\u5370\u8BB0"},route: {getIconInfo: "http://tieba.baidu.com/tbmall/gettdouiconinfo",buyIcon: "http://tieba.baidu.com/tbmall/getPayUrl",getTdou: "http://tieba.baidu.com/tbmall/getUserTd",getPayInfo: "http://tieba.baidu.com/tbmall/open/getBuyForm",payGoods: "http://tieba.baidu.com/tbmall/submit/open/pay",get3rdOrder: "http://tieba.baidu.com/tbmall/open/getOrder"},_item_raw_cache: null,_item_raw_cache_pay_info: null,_item_cache_last_total_tdou: 0,_parrScores: null,_parrProps: null,initial: function() {
    this.iconConfig = PageUnit.load("icons_cfg")
},setParrScores: function(e) {
    this._parrScores = e
},setParrProps: function(e) {
    this._parrProps = e
},getUserName: function() {
    return PageData.user.name || PageData.user.name_url
},getUserTdou: function() {
    var e = PageData.user, a = this._parrScores || e.Parr_scores;
    return a ? a.scores_money + a.scores_other : 0
},getCacheUserTotalTdou: function() {
    return this._item_cache_last_total_tdou
},getShowName: function() {
    return PageData.user.name_show || PageData.user.user_name
},isMemeber: function() {
    var e = this._parrProps || PageData.user.mParr_props || PageData.user.Parr_props, a = this._getMaxLevel(e);
    return !!a
},getMemberLevel: function() {
    var e = this._parrProps || PageData.user.mParr_props || PageData.user.Parr_props, a = this._getMaxLevel(e);
    return a
},isLogin: function() {
    return PageData.user.is_login
},needUpdateTdou: function() {
    var e = PageData.user.mParr_props || PageData.user.Parr_props, a = PageData.user.Parr_scores;
    return !(e && a)
},_getMaxLevel: function(e) {
    var a = 0, t = (new Date).getTime(), r = e || PageData.user.Parr_props;
    if (!r || !r.level)
        return 0;
    var o = r.level;
    return 1e3 * o.end_time > t && parseInt(o.props_id, 10) > a && (a = parseInt(o.props_id, 10)), a
},getAdvanceMember: function() {
    var e = "http://tieba.baidu.com/tbmall/getPayUrl?terminal=pc&pay_type=1&is_jump=1";
    return e
},getIconInfo: function(e, a) {
    var t = this, r = {ie: "utf-8"};
    r.tbs = PageData.tbs, t._get_icon_ajax && t._get_icon_ajax.abort(), t._get_icon_ajax = $.ajax({type: "get",url: t.route.getIconInfo,data: r,cache: !1,dataType: "json"}).success(function(r) {
        if (r && 0 === r.no) {
            var o = r.data;
            t._item_raw_cache = r.data, r.data = t.dapterIconListData(o)
        }
        e.call(a, r)
    })
},dapterIconListData: function(e) {
    var a = {};
    if (e)
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var r = {icon_id: e[t].iconId,icon_name: e[t].name || "\u968F\u673A\u5370\u8BB0",icon_picurl: e[t].picUrl,member_price: "",non_member_price: e[t].non_member_t,price_diff: "",tbmall_price: e[t].dubi / 100};
                r.member_price = this.calcIconMemberPrice(e[t].dubi, e[t].non_member_t, e[t].discount, 1), a[t] = r
            }
    return a
},calcIconMemberPrice: function(e, a, t, r) {
    var o = 0, n = e * r, i = 1;
    for (var _ in t) {
        if (!(n >= _))
            return o = 1 == i ? a : a * r * t[i] / 100;
        i = _
    }
    return o = a * r * t[i] / 100
},getPriceInfo: function(e, a) {
    var t = this, r = null, o = this.getCache(a);
    return o && (r = {icon_id: o.iconId,member_price: "",non_member_price: t._convertNum(o.non_member_t * e),tbmall_price: t._convertNum(o.dubi * e / 100)}, r.member_price = t.calcIconMemberPrice(o.dubi, o.non_member_t, o.discount, e), r.member_price = t._convertNum(r.member_price)), r
},_convertNum: function(e) {
    return e > 99999999 ? Math.floor(e / 1e8) + "\u4EBF" : e > 9999999 ? Math.floor(e / 1e7) + "\u5343\u4E07" : e > 999999 ? Math.floor(e / 1e6) + "\u767E\u4E07" : e > 99999 ? Math.floor(e / 1e4) + "\u4E07" : e
},payIcon: function(e, a, t, r, o, n) {
    var i = this, _ = {ie: "utf-8",tbs: PageData.tbs,terminal: "pc",pay_type: 6,iconId: e,iconCount: a,fr: n || 0,pageUrl: o || ""};
    i._payIcon(_, t, r)
},payIconWithMargin: function(e, a, t, r, o, n, i, _, c, s) {
    var u = this;
    _ = _ || 6, c = c || PageData.tbs;
    var p = {ie: "utf-8",tbs: c,terminal: "pc",pay_type: _,iconId: e,pageUrl: o || "",margin: a,goodsCost: i,fr: n || 0,third_order_id: s};
    u._payIcon(p, t, r)
},_payIcon: function(e, a, t) {
    var r = this;
    r._buy_icon_ajax && r._buy_icon_ajax.abort(), r._buy_icon_ajax = $.ajax({type: "get",url: r.route.buyIcon,data: e,cache: !1,dataType: "json"}).success(function(e) {
        a.call(t, e)
    })
},getTdou: function(e, a, t) {
    var r = this;
    r._get_tdou_ajax && r._get_tdou_ajax.abort(), r._get_tdou_ajax = $.ajax({type: "get",url: r.route.getTdou + "?" + new Date,data: {},cache: !1,dataType: "json"}).success(function(r) {
        e.call(a, r, t)
    })
},getThirdOrderInfo: function(e, a, t) {
    var r = this, o = {order_id: t};
    r._get_3rd_order_ajax && r._get_3rd_order_ajax.abort(), r._get_3rd_order_ajax = $.ajax({type: "get",url: r.route.get3rdOrder,data: o,cache: !1,dataType: "json"}).success(function(t) {
        if (0 == t.no) {
            r._item_cache_last_total_tdou = r.getUserTdou();
            var o = t.data.user_info;
            r.setParrScores(o.Parr_scores), r.setParrProps(o.Parr_props)
        }
        e.call(a, t)
    })
},getCache: function(e) {
    return e ? this._item_raw_cache[e] : {}
},clearCache: function() {
    this._item_raw_cache = null
},getPayInfoCache: function() {
    return this._item_raw_cache_pay_info
},getTipData: function(e) {
    var a = this.getCache(e), t = {};
    return t.icon_name = a.name, t.icon_expired = 1, t.icon_desc = this.iconConfig[a.name + "_1"] || this.tipData[e], t
},getPayInfo: function(e, a, t) {
    var r = this, o = {open_id: e.open_id,order_id: e.order_id,goods_name: e.goods_name,goods_image: e.goods_image,goods_price: e.goods_price,goods_amount: e.goods_amount,goods_unit: e.goods_unit,goods_duration: e.goods_duration,free_vip_level: e.free_vip_level,timestamp: e.timestamp,scene_id: e.scene_id,pay_type: e.pay_type,from: e.from,tdou_num: e.tdou_num};
    r._get_pay_info_ajax && r._get_pay_info_ajax.abort(), r._get_pay_info_ajax = $.ajax({type: "post",url: r.route.getPayInfo,data: o,cache: !1,dataType: "json"}).success(function(e) {
        if (r._item_raw_cache_pay_info = e.data, 0 == e.no) {
            r._item_cache_last_total_tdou = r.getUserTdou();
            var o = e.data.user_info;
            r.setParrScores(o.Parr_scores), r.setParrProps(o.Parr_props)
        }
        a.call(t, e)
    })
},payGoods: function(e, a, t) {
    var r = this, o = r._item_raw_cache_pay_info.order_info, n = r._item_raw_cache_pay_info.tbs;
    if (o) {
        var i = {order_id: o.order_id,open_id: o.open_id,scene_id: o.scene_id,pay_type: o.pay_type,tbs: n};
        r._get_pay_goods_ajax && r._get_pay_goods_ajax.abort(), r.requireInstanceAsync("tbmall/widget/TbeanSafeAjax", [], function(o) {
            o.ajax({type: "post",url: r.route.payGoods,data: i,cache: !1,dataType: "json",success: function(r) {
                e.call(a, r, t)
            }})
        })
    }
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouTemplate",sub: {get_icon_main_tpl: "",get_icon_item_tpl: "",initial: function() {
},getMainFrame: function() {
    var _ = this;
    if (!_.get_icon_main_tpl) {
        var a = ['<input id="tdou_remain_num" type="hidden" value="#{tdou_amount}" />', '<div class=" tdou_base tdou_buy_box j_tdou_base">', '    <div class="tdou_header">', '        <div><span class="header_icon"></span>\u83B7\u53D6T\u8C46</div>', '        <a class="header_close j_header_close"></a>', "    </div>", '    <div class="list_body clearfix">', '        <ul class="j_tdou_base_list">', "#{list}", "        </ul>", "    </div>", '   <div class="tdou_counter_wrap">', '<span class="tdou_counter_num_text">\u8D2D\u4E70\u6570\u91CF\uFF1A</span><div class="tdou_counter_replace j_tdou_counter_replace"></div>', '<span class="tdou_counter_info">\u9700\u652F\u4ED8\uFF1A<ins class="j_goods_tmall_price_num"></ins> \u5143</span>', '<span class="tdou_counter_info">\u83B7\u8D60\uFF1A<ins class="j_goods_member_num"></ins> T\u8C46</span>', "   </div>", '    <div class="tdou_footer">', '        <a class="btn tdou_buy_btn_big j_tdou_buy_btn_big">\u7ACB\u5373\u8D2D\u4E70</a>', "    </div>", "</div>"].join("");
        _.get_icon_main_tpl = a
    }
    return _.get_icon_main_tpl
},getBodyTitle: function() {
    var _ = ['<span class="title_acc">\u8D26\u53F7\uFF1A#{member_icons}<a class="title_acc_name" href="/home/main?ie=utf-8&un=#{user_name}" style="color: #{member_name_color};">#{user_name_show}</a></span>', '<span class="title_remain">T\u8C46\u4F59\u989D\uFF1A', '<span class="tdou_icon"  title="T\u8C46"></span><span class="title_remain_num j_title_remain_num">#{tdou_amount}</span></span>', '<div class="title_ad"><span class="member_icon"></span><span class="title_ad_text">\u4F1A\u5458\u7279\u6743\uFF1A\u83B7\u53D6\u5370\u8BB0\u53EF\u591A\u8D60T\u8C46</span><a class="title_ad_link"  href="#{advance_Member}" target="_blank">\u5F00\u901A</a></div>'].join("");
    return _
},getIconItem: function() {
    var _ = this;
    if (!_.get_icon_item_tpl) {
        var a = ['<li id="#{icon_id}" class="j_tdou_get_item tdou_list_item_#{idx}">', '<div class="goods_wrap_border"></div>', '<div class="good_wrap_new clearfix">', '<div class="good_price_new">', '<p class="good_price_rmb">\u4EF7\u683C\uFF1A#{tbmall_price}\u5143</p>', '<p class="good_price_detail">', '<span class="good_price_extra">\u8D60\u9001\uFF1A<ins>#{non_member_price}</ins>T\u8C46</span>', '<span class="good_price_joinvip"><a class="member_icon" href="/tbmall/tshow" target="_blank"></a><a href="/tbmall/tshow" target="_blank">\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458</a>\u52A0\u9001<ins>#{per_price}%</ins> <ins>#{price_diff}</ins>T\u8C46</span>', "</p>", "</div>", '<div class="good_info_new">', '<img src="#{icon_picurl}" class="j_icon_img" width="26" height="26"/>', "<p>#{icon_name}<br/><span>\u6709\u6548\u671F\uFF1A</span>1\u5929</p>", "</div>", '<div class="tdou_buy_selected"></div>', "</div>", "</li>"].join("");
        _.get_icon_item_tpl = a
    }
    return _.get_icon_item_tpl
},getLoadingTpl: function() {
    var _ = this;
    if (!_.get_icon_loading_tpl) {
        var a = ['<div class="tdou_get_icon_loading j_tdou_get_icon_loading">', '    <div class="tdou_loading_img_wrap">', "    </div>", '    <div class="tdou_loading_text">', "        \u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u7B49", "    </div>", "</div>"].join("");
        _.get_icon_loading_tpl = a
    }
    return _.get_icon_loading_tpl
},getTipInfoMainFrame: function() {
    var _ = this;
    if (!_.get_icon_tip_main_tpl) {
        var a = ['<div class="tdou_get_icon_tip j_tdou_get_icon_tip">', '    <div class="tdou_tip_img_wrap #{tip_img}">', "    </div>", '    <div class="tdou_tip_text">', "    #{tdou_tip_text}", "    </div>", "</div>"].join("");
        _.get_icon_tip_main_tpl = a
    }
    return _.get_icon_tip_main_tpl
},getTipInfoCheckPayInfoAndTdouInfo: function() {
    var _ = this;
    if (!_.get_tdou_info_tpl) {
        var a = ['<div class="tdou_get_icon_check j_tdou_get_icon_check">', '  <a class="header_close j_header_close"></a>', '    <div class="tdou_tip_img_wrap"></div>', '    <div class="tdou_tip_text">', '      <div class = "tdou_check_title">', "            \u8BF7\u5728\u65B0\u6253\u5F00\u7684\u9875\u9762\u5B8C\u6210\u83B7\u53D6\u64CD\u4F5C", "        </div>", '        <div class = "tdou_check_op">', '           <a class="btn check_btn j_check_btn" href="javascript:void(0)">\u67E5\u770B\u7ED3\u679C</a> ', '		   <a class="btn_redo_check j_btn_redo_check"  href="javascript:void(0)">\u83B7\u53D6\u5370\u8BB0\u5931\u8D25\uFF0C\u91CD\u65B0\u83B7\u53D6</a>', "        </div>", "    </div>", "</div>"].join("");
        _.get_tdou_info_tpl = a
    }
    return _.get_tdou_info_tpl
},getMaskLayer: function() {
    return '<div class="tdou_mask j_tdou_mask"></div>'
},getIconInfoTip: function() {
    var _ = this;
    return _.get_icon_info_tip_tpl || (_.get_icon_info_tip_tpl = ['<div class="tdou_get_icon_info_tip j_tdou_get_icon_info_tip">', '    <div class="info_tip_wrap">', '        <p class="icon_name j_icon_name">\u3010#{icon_name}\u3011</p>', '        <p class="icon_expired ">\u6709\u6548\u671F <span class="days j_icon_expired">#{icon_expired}</span> \u5929/\u4E2A</p>', '        <p class="icon_desc j_icon_desc">#{icon_desc}</p>', "    </div>", '    <span class="tip_arrow"></span>', "</div>"].join("")), _.get_icon_info_tip_tpl
},getTdouPayInfoMain: function() {
    var _ = this;
    return _.tdou_pay_info_main || (_.tdou_pay_info_main = ['<div class="tdou_base tdou_pay_info_box j_baidu_tb_tdou_pay_info_box">', '    <div class="tdou_pay_info_header clearfix">', '        <div class="header_title"><span class="tdou_pay_header_icon"></span>T\u8C46\u5151\u6362</div>', '        <a class="tdou_pay_header_close j_tdou_pay_header_close"></a>', "    </div>", '    <div class="tdou_pay_info_body clearfix">', '        <div class="sale_info">', "            #{sale_info}", "        </div>", '        <div class="payment_info">', "            #{payment_info}", "        </div>", "    </div>", "</div>"].join("")), _.tdou_pay_info_main
},getTdouPayInfoGoodsInfoBase: function() {
    var _ = this;
    return _.tdou_pay_info_goods_base || (_.tdou_pay_info_goods_base = ['<div class="goods_wrap">', '    <div class="goods_title j_goods_title" title="#{goods_full_name}">\u3010#{goods_name}\u3011</div>', '    <div class="goods_img">', '        <div class="goods_img_wrap">', '            <img class="j_goods_img" src="#{goods_img}"/>', "        </div>", "    </div>", '    <div class="goods_info">', '        <div class="goods_info_amount">', '            <span class="goods_info_lable">\u6570\u91CF\uFF1A</span>', '            <span class="goods_info_val j_goods_info_amount_val">#{goods_info_amount_val}</span>', '            <span class="goods_info_unit j_goods_info_amount_unit">#{goods_info_amount_unit}</span>', "        </div>", '        <div class="goods_info_duration">', '            <span class="goods_info_lable">\u65F6\u957F\uFF1A</span>', '            <span class="goods_info_val j_goods_info_duration_val">#{goods_info_duration_val}</span>', '            <span class="goods_info_unit j_goods_info_duration_unit">#{goods_info_duration_unit}</span>', "        </div>", "    </div>", '    <div class="goods_sale">', '        <div class="good_price">', '          <span class="good_price_label">\u603B\u4EF7\uFF1A', '          <span class="tdou_icon"  title="T\u8C46"></span>', '          <span class="good_price_val j_good_price_val">#{good_price_val}</span></span>', "        </div>", "    </div>", "</div>"].join("")), _.tdou_pay_info_goods_base
},getTdouPayInfoPaymentInfoBase: function() {
    var _ = this;
    return _.tdou_pay_info_payment_base || (_.tdou_pay_info_payment_base = ['<div class="payment_desc j_payment_desc"><div class="payment_desc_content_float"></div>', '<div class="payment_desc_content">#{payment_desc}</div>', "</div>", '<div class="tdou_pay_btn_wrap j_tdou_pay_btn_wrap">', "#{btn}", "</div>"].join("")), _.tdou_pay_info_payment_base
},getTdouPayInfoPaymentInfoTip: function() {
    return '<div class="tdou_pay_info_tip">#{checkbox}<span class="member_icon"></span><a href="http://tieba.baidu.com/tbmall/getPayUrl?terminal=pc&pay_type=1&is_jump=1" class="j_tdou_open_super_member_link" target="_blank">\u5F00\u901A\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458</a>\u4E70\u5370\u8BB0\u83B7\u8D60\u6700\u9AD85%T\u8C46</div>'
},getTdouPayInfoOpenMemberFreeGoodsTip: function() {
    return '<div class="tdou_pay_info_tip"><span class="member_icon"></span><a href="http://tieba.baidu.com/tbmall/getPayUrl?terminal=pc&pay_type=1&is_jump=1" class="j_tdou_open_super_member_link"  target="_blank">\u5F00\u901A\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458</a>\u53EF\u514D\u8D39\u83B7\u53D6\u8BE5\u5546\u54C1</div>'
},getTdouPayInfoPaymentInfoByMember: function() {
    return '<div class="tdou_pay_info_tip"><span class="member_icon"></span>\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458<a href="javascript:void(0)" class="j_tdou_buy_icon">\u8D2D\u4E70\u5370\u8BB0</a>\u83B7\u53D6\u6700\u9AD85%T\u8C46</div>'
},getTdouPayInfoPaymentInfoPayConfirm: function() {
    return '<div class="tdou_pay_info_buy_comfirm"><span class="checkbox_buy_comfirm"><input type="checkbox" class="j_tdou_buy_confirm"/></span>\u4ECA\u65E5<span class="j_buy_comfirm_days">30</span>\u6B21\u5185\u4E0D\u518D\u63D0\u793A\u786E\u8BA4\u8D2D\u4E70</div>'
},getTdouPayInfoPaymentInfoBtn_pay: function() {
    return '<a class="btn tdou_pay_btn j_tb_tdou_pay_btn">#{tb_tdou_pay_btn}</a>'
},getTdouPayInfoPaymentInfoBtn_get: function() {
    return '<a class="btn tdou_pay_btn j_tb_tdou_get_tdou_btn">\u83B7\u53D6T\u8C46</a>'
},getTdouPayInfoPaymentInfo_tdouEnough: function() {
    return '<div class="payment_desc_text">\u60A8\u5728<span class="j_tdou_pay_from">#{tdou_pay_from}</span>\u83B7\u53D6<span class="j_tdou_pay_goods_name" title="#{goods_full_name}">\u3010#{tdou_pay_goods_name}\u3011</span></div><div class="payment_desc_text">\u9700\u8981\u6D88\u8017<span class="tdou_icon"  title="T\u8C46"></span><span class="good_price_val j_tdou_pay_need_tdou">#{tdou_pay_need_tdou}</span>T\u8C46\u5151\u6362\u8BE5\u5546\u54C1</div>'
},getTdouPayInfoPaymentInfo_tdouNoEnough: function() {
    return '<div class="payment_desc_text">\u60A8\u5728<span class="j_tdou_pay_from">#{tdou_pay_from}</span>\u83B7\u53D6<span class="j_tdou_pay_goods_name" title="#{goods_full_name}">\u3010#{tdou_pay_goods_name}\u3011</span></div><div class="payment_desc_text">\u5151\u6362\u8BE5\u5546\u54C1\u8FD8\u9700\u8981<span class="tdou_icon" title="T\u8C46"></span><span class="good_price_val j_tdou_need_pay">#{tdou_need_pay}</span>T\u8C46</div>'
},getTdouPayInfoPaymentInfo_forMember: function() {
    return '<div class="payment_desc_text">\u60A8\u662F\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458\uFF0C\u53EF\u514D\u8D39\u83B7\u53D6\u8BE5\u5546\u54C1</div>'
},getTdouPaymentErrorMain: function() {
    var _ = ['<div class="tdou_pay_error_box j_tdou_pay_error_box">', '  <a class="header_close j_header_close"></a>', '    <div class="tdou_pay_error_img_wrap"></div>', '    <div class="tdou_pay_error_text">', '      <div class = "tdou_pay_error_title " style="font-size: 18px;">', "#{error_text}", "        </div>", '        <div class = "tdou_pay_error_op">', '           <a class="tdou_pay_error_btn_close j_tdou_pay_error_btn_close" href="javascript:void(0)">\u5173\u95ED</a> ', '           <a class="tdou_pay_error_link"  target="_blank" href="/f?ie=utf-8&kw=T%E8%B1%86%E5%95%86%E5%9F%8E%E5%90%A7">\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458</a>', "        </div>", "    </div>", "</div>"].join("");
    return _
},getTdouPaymentResultMain: function() {
    var _ = ['<div class="tdou_pay_result_box j_tdou_pay_result_box">', '  <a class="header_close j_header_close"></a>', '    <div class="tdou_pay_result_img_wrap"></div>', '    <div class="tdou_pay_result_text tdou_pay_result_text">', "#{result_html}", '        <div class = "tdou_pay_result_op">', '           <a class="tdou_pay_result_btn_close j_tdou_pay_result_btn_close" href="javascript:void(0)">\u5173\u95ED</a> ', "        </div>", "    </div>", "</div>"].join("");
    return _
},getCashierIframe: function() {
    return '<div class="tdou_cashier_wrap" id="tdou_cashier_wrap"><iframe id = "tdou_cashier_iframe" src="#{cashier_url}"></iframe></div>'
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouView",requires: ["common/widget/Tdou/TdouBuilder", "common/widget/Tdou/TdouData", "common/widget/Tdou/TdouCounter", "common/widget/Tdou/TdouViewUtil", "common/widget/Icons", "common/widget/LoginDialog", "common/widget/Tdou/TdouViewCheck"],sub: {initial: function() {
    this.builder = this.use("common/widget/Tdou/TdouBuilder"), this.dataProxy = this.use("common/widget/Tdou/TdouData"), this.counter = this.use("common/widget/Tdou/TdouCounter"), this.viewUtil = this.use("common/widget/Tdou/TdouViewUtil"), this.checkTdou = this.use("common/widget/Tdou/TdouViewCheck")
},createMain: function(e, o, t, i) {
    var n = this;
    n.consumption_path = e, n.desc = o, n.current_need_tdou = t, n.is_direct_cashier = i;
    var a = $.tb.location.getHref();
    n.dataProxy.getIconInfo(n.builderMainUI, n, a)
},builderMainUI: function(e) {
    var o = this;
    if (e && 0 === e.no) {
        var t = e.data, i = this.getTitleData(), n = o.builder.builderGetTdouMain(t, i);
        o.renderMain(n), o.bindMainUIEvents(), o.dataProxy.isLogin() || $(".j_tdou_body_title").hide(), o.updateTdouAndUserName(), o.setDefaultSlected()
    } else
        e && 11e4 === e.no && this.viewUtil.OpenLoginDialog()
},getTitleData: function() {
    var e = this, o = e.dataProxy.getUserName(), t = e.dataProxy.getUserTdou(), i = e.dataProxy.getShowName(), n = e.dataProxy.getAdvanceMember(), a = e.use("common/widget/Icons"), r = a.getPreIconHtml(PageData.user.Parr_props || PageData.user.mParr_props || {}), d = e.dataProxy.isMemeber(), u = "";
    d && (u = "#FF0000");
    var c = {userName: o,userNameShow: i,tdouAmount: t,member_icons: r,advance_Member: n,member_name_color: u};
    return c
},renderMain: function(e) {
    var o = {modal: !0,showTitle: !1,fixed: !0,width: 620,height: 480,holderClassName: "tdou_pay_icon_dialog",draggable: !0};
    o.html = e, this._dialog = new $.dialog(o), this._dialog.element[0].id = "tdou_pay_icon_dialog", this._dialog.show()
},setDefaultSlected: function() {
    $(".j_tdou_base_list li:eq(1)").trigger("click")
},bindMainUIEvents: function() {
    var e = this;
    e.bindCounterEvent(), $(".j_header_close").on("click", function() {
        e.trigger("after_buy_icon"), e.closeMain()
    }), $(".j_tdou_give_btn_big").on("click", function() {
        e.trigger("after_buy_icon"), e.closeMain()
    });
    $(".j_tdou_get_item").on("click", function() {
        var o = $(this);
        e.selectIconItem(o)
    }).on("mouseenter", function() {
        var e = $(this);
        e.addClass("tdou_item_hover")
    }).on("mouseleave", function() {
        var e = $(this);
        e.removeClass("tdou_item_hover")
    });
    $(".j_tdou_buy_btn_big").on("click", function() {
        var o = $(".goods_wrap_selected");
        if (0 != o.length) {
            var t = $(".j_tdou_calc_input").val(), i = o[0].id;
            e.wrap = $("#tdou_pay_icon_dialog"), e.viewUtil.displayLoading(e.wrap), e.new_win = window.open("about:blank");
            var n = $.tb.location.getHref();
            e.dataProxy.payIcon(i, t, e.buyIcon, e, n, e.consumption_path)
        }
    })
},bindCounterEvent: function() {
    var e = this;
    $(".tdou_calc_count_wrap").each(function() {
        e.counter.bindEvents($(this).find(".j_tdou_calc_count")), e.counter.onValueChange.push({action: e.onCounterValueChange,context: e})
    })
},closeMain: function() {
    this._dialog.close(), this.dataProxy.clearCache()
},selectIconItem: function(e) {
    if (e) {
        $(".j_tdou_get_item").removeClass("goods_wrap_selected"), e.addClass("goods_wrap_selected");
        var o = this, t = e.tbattr("id");
        $(".j_tdou_counter_replace").html(o.counter.builderUI(t));
        var i = $("#tdou_counter_" + t);
        o.counter.bindEvents(i), o.counter.onValueChange.push({action: o.onCounterValueChange,context: o}), o.onCounterValueChange(1, t)
    }
},onCounterValueChange: function(e, o) {
    var t = this.dataProxy.getPriceInfo(e, o), i = this.dataProxy.getMemberLevel();
    $(".j_goods_member_num").html(i > 1 ? t.member_price : t.non_member_price), $(".j_goods_tmall_price_num").html(t.tbmall_price)
},buyIcon: function(e) {
    var o = this;
    o.viewUtil.hideLoading(), o.wrap = $("#tdou_pay_icon_dialog"), e && 0 === e.no ? (o.checkTdou.showTdouCheckView(o.wrap, o.updateTdou, o), o.new_win.location.href = e.data) : e && 11e4 === e.no ? (o.closeMain(), o.viewUtil.OpenLoginDialog(), o.new_win && o.new_win.close()) : (this.viewUtil.displayErrorInfo(o.wrap, ""), o.new_win && o.new_win.close())
},updateTdou: function() {
    var e = this;
    e.dataProxy.getTdou(e.onUpdateTdou, e)
},onUpdateTdou: function(e) {
    var o = this;
    if (e && 0 === e.no) {
        var t = e.data.Parr_scores, i = $("#tdou_remain_num"), n = t ? t.scores_money + t.scores_other : 0, a = parseInt(i.val() || 0, 10);
        if (i.val(n), n - a >= 1e4) {
            o.wrap = $("#tdou_pay_icon_dialog");
            var r = o.dataProxy.getUserName();
            this.viewUtil.dispalySuccessedInfo(o.wrap, r, function() {
                o.trigger("after_buy_icon", t), o.closeMain()
            }, o)
        } else
            this.viewUtil.displayErrorInfo(o.wrap, "", function() {
                o.trigger("after_buy_icon", t), o.closeMain()
            }, o)
    }
},updateTdouAndUserName: function() {
    var e = this;
    e.dataProxy.getTdou(e.onUpdateTdouAndUserName, e)
},onUpdateTdouAndUserName: function(e) {
    var o = this;
    if (e && 0 === e.no) {
        var t = e.data.mParr_props, i = e.data.Parr_scores;
        o.dataProxy.setParrProps(t), o.dataProxy.setParrScores(i);
        var n = $(".j_title_remain_num"), a = i ? i.scores_money + i.scores_other : 0;
        n.html(a);
        var r = this.getTitleData(), d = o.builder.builderGetBodyTitle(r);
        $("j_tdou_body_title").html(d)
    }
},pointOutTdou: function(e) {
    if (e) {
        var o = 0, t = function i() {
            2 != o && (o++, e.animate({fontSize: "+=10px"}, "normal", function() {
                e.animate({fontSize: "-=10px"}), i()
            }))
        };
        t()
    }
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouViewAutoRedirect",requires: ["common/widget/Tdou/TdouBuilder", "common/widget/Tdou/TdouData", "common/widget/Tdou/TdouViewUtil"],sub: {_icon_id: "suiji",display_type: "get_icon",third_order_id: "",initial: function() {
    this.builder = this.use("common/widget/Tdou/TdouBuilder"), this.dataProxy = this.use("common/widget/Tdou/TdouData"), this.viewUtil = this.use("common/widget/Tdou/TdouViewUtil")
},createMain: function(e, i, o, t, a, r, d, n) {
    var s = this, c = $.tb.location.getHref();
    s.consumption_path = e, s.desc = i, s.current_need_tdou = o, s.goods_cost_tdou = t, s.pay_type = a, s.tbs = r, s.third_order_id = d, (!n || $.browser.msie && $.browser.version && parseInt($.browser.version) < 9) && (s.new_win = window.open("about:blank")), s.dataProxy.getIconInfo(s.onGetIconInfo, s, c)
},onGetIconInfo: function(e) {
    var i = this;
    if (e && 0 === e.no) {
        if (!i.dataProxy.isLogin())
            return this.viewUtil.OpenLoginDialog(), void 0;
        i.afterUpdateTdou()
    } else
        e && 11e4 === e.no && this.viewUtil.OpenLoginDialog()
},afterUpdateTdou: function() {
    var e = this, i = e.current_need_tdou, o = e._icon_id, t = $.tb.location.getHref();
    e.dataProxy.payIconWithMargin(o, i, e.buyIcon, e, t, e.consumption_path, e.goods_cost_tdou, e.pay_type, e.tbs, e.third_order_id)
},builderMainUI: function() {
    var e = this.builder.builderTdouCheck();
    this.renderMain(e);
    var i = $(".j_tdou_get_icon_check");
    this.bindMainUIEvents(i), i.css({"z-index": "900"}), this.wrap = $("#tdou_pay_icon_check_dialog")
},renderMain: function(e) {
    var i = {modal: !0,showTitle: !1,fixed: !1,width: 538,height: 208,holderClassName: "tdou_pay_icon_check_dialog",draggable: !0};
    i.html = e, this._dialog = new $.dialog(i), this._dialog.element[0].id = "tdou_pay_icon_check_dialog", this._dialog.show()
},bindMainUIEvents: function(e) {
    var i = this;
    e && e.delegate(".j_header_close", "click", function() {
        i.closeMain()
    }).delegate(".j_check_btn", "click", function() {
        "get_icon" == i.display_type ? i.updateTdou() : "third_app" == i.display_type && i.displayThirdApp()
    }).delegate(".j_btn_redo_check", "click", function() {
        i.closeMain()
    })
},buildCashierIframe: function(e) {
    this._iframe_dialog && $(".tdou_pay_cashier_iframe_dialog").remove();
    var i = this.builder.buildCashierIframe(e), o = {modal: !0,showTitle: !0,fixed: !0,width: 790,height: 722,closeable: !0,hideOnclose: !1,holderClassName: "tdou_pay_cashier_iframe_dialog",draggable: !0};
    o.html = i, this._iframe_dialog = new $.dialog(o), this._iframe_dialog.show(), $("#tdou_cashier_wrap").scrollLeft(221).scrollTop(164)
},closeMain: function() {
    this._dialog.close(), this.dataProxy.clearCache()
},buyIcon: function(e) {
    var i = this;
    i.wrap = $("#tdou_pay_icon_check_dialog"), e && 0 === e.no ? (i.builderMainUI(), i.new_win ? i.new_win.location.href = e.data || "" : i.buildCashierIframe(e.data || "")) : e && 11e4 === e.no ? (i.closeMain(), i.viewUtil.OpenLoginDialog(), i.new_win && i.new_win.close()) : (this.viewUtil.displayErrorInfo(i.wrap, ""), i.new_win && i.new_win.close())
},updateTdou: function() {
    var e = this;
    e.dataProxy.getTdou(e.onUpdateTdou, e)
},onUpdateTdou: function(e) {
    var i = this;
    if (e && 0 === e.no) {
        var o = e.data.Parr_scores, t = o ? o.scores_money + o.scores_other : 0, a = i.dataProxy.getUserTdou();
        if (t - a >= 1e4) {
            i.wrap = $("#tdou_pay_icon_check_dialog");
            var r = i.dataProxy.getUserName();
            this.viewUtil.dispalySuccessedInfo(i.wrap, r, function() {
                i.closeMain()
            }, i)
        } else
            this.viewUtil.displayErrorInfo(i.wrap, "", function() {
                i.closeMain()
            }, i)
    }
},updateTdouAndUserName: function(e) {
    var i = this;
    i.dataProxy.getTdou(i.onUpdateTdouAndUserName, i, e)
},onUpdateTdouAndUserName: function(e, i) {
    var o = this;
    if (e && 0 === e.no) {
        var t = e.data.mParr_props, a = e.data.Parr_scores;
        o.dataProxy.setParrProps(t), o.dataProxy.setParrScores(a), i && i.call(this)
    }
},displayThirdApp: function() {
    var e = this;
    e.dataProxy.getThirdOrderInfo(e.onDisplayThirdApp, e, e.third_order_id)
},onDisplayThirdApp: function(e) {
    var i = this;
    if (e && 0 === e.no) {
        var o = e.data.user_info.Parr_scores, t = e.data.order_info, a = o ? o.scores_money + o.scores_other : 0, r = i.dataProxy.getCacheUserTotalTdou(), d = "", n = parseInt(t.status), s = !1;
        switch (s = n >= 1 ? !0 : a - r >= 1e4, parseInt(i.pay_type)) {
            case 6:
                d = {get_tdou: a - r >= 1e4 ? "\u83B7\u53D6T\u8C46\u6210\u529F" : "\u83B7\u53D6T\u8C46\u5931\u8D25"};
                break;
            case 7:
                d = {get_tdou: a - r >= 0 ? "\u83B7\u53D6T\u8C46\u6210\u529F" : "\u83B7\u53D6T\u8C46\u5931\u8D25",is_member: i.dataProxy.isMemeber() ? "\u5F00\u901A\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458\u6210\u529F" : "\u5F00\u901A\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458\u5931\u8D25"};
                break;
            case 8:
                d = {order_status: i.getOrderStatus(t.status),get_tdou: s ? "\u83B7\u53D6T\u8C46\u6210\u529F" : "\u83B7\u53D6T\u8C46\u5931\u8D25"};
                break;
            case 9:
                d = {order_status: i.getOrderStatus(t.status),get_tdou: s ? "\u83B7\u53D6T\u8C46\u6210\u529F" : "\u83B7\u53D6T\u8C46\u5931\u8D25",is_member: i.dataProxy.isMemeber() ? "\u5F00\u901A\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458\u6210\u529F" : "\u5F00\u901A\u8D34\u5427\u8D85\u7EA7\u4F1A\u5458\u5931\u8D25"};
                break;
            default:
                d = {error: "\u6307\u5B9A\u7684\u652F\u4ED8\u7C7B\u578B\u53C2\u65E0\u6548"}
        }
        i.wrap = $("#tdou_pay_icon_check_dialog"), i.viewUtil.dispaly3rdOrderInfo(i.wrap, d, function() {
            i.closeMain()
        }, i)
    } else
        i.viewUtil.displayErrorInfo(i.wrap, ""), i.closeMain()
},getOrderStatus: function(e) {
    var i = {0: "\u3010\u652F\u4ED8\u672A\u5B8C\u6210\u3011",1: "\u652F\u4ED8\u6210\u529F\uFF0C\u5546\u54C1\u5151\u6362\u4E2D\uFF01",2: "\u5151\u6362\u6210\u529F",3: "\u5151\u6362\u5931\u8D25\uFF0CT\u8C46\u5DF2\u9000\u8FD8",4: "\u5151\u6362\u8D85\u65F6\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"};
    return i[e]
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouViewCheck",requires: ["common/widget/Tdou/TdouBuilder", "common/widget/Tdou/TdouData", "common/widget/Tdou/TdouViewUtil"],sub: {initial: function() {
    this.builder = this.use("common/widget/Tdou/TdouBuilder"), this.dataProxy = this.use("common/widget/Tdou/TdouData"), this.viewUtil = this.use("common/widget/Tdou/TdouViewUtil")
},showTdouCheckView: function(e, i, o) {
    var t = this;
    t._wrap = e || $("body");
    var d = (t._wrap.height() - 208) / 2 + "px", c = (t._wrap.width() - 520) / 2 + "px", n = {top: d,left: c}, u = t._wrap.find(".j_tdou_get_icon_check");
    if (0 == u.length) {
        var h = this.builder.builderTdouCheck();
        u = $(h), t._wrap.prepend(u), t._bindEvents(u, i, o)
    }
    t.viewUtil.setMask(e), u.css(n), u.show()
},hideTdouCheckView: function() {
    var e = this._wrap.find(".j_tdou_get_icon_check");
    e.hide(), this.viewUtil.removeMask()
},_bindEvents: function(e, i, o) {
    var t = this;
    e && e.delegate(".j_header_close", "click", function() {
        t.hideTdouCheckView()
    }).delegate(".j_check_btn", "click", function() {
        t.hideTdouCheckView(), "function" == typeof i && t._onCheckTdou(i, o)
    }).delegate(".j_btn_redo_check", "click", function() {
        t._onRedoBuyIcon()
    })
},_onCheckTdou: function(e, i) {
    "function" == typeof e && "object" == typeof i && e.call(i)
},_onRedoBuyIcon: function() {
    this.hideTdouCheckView()
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouViewUtil",requires: ["common/widget/Tdou/TdouBuilder", "common/widget/LoginDialog"],sub: {_wrap: null,initial: function() {
    this.builder = this.use("common/widget/Tdou/TdouBuilder")
},setMask: function(i) {
    var e = this;
    this._wrap = i || $("body");
    var t = {height: e._wrap.height(),width: e._wrap.width()}, o = this._wrap.find(".j_tdou_mask");
    if (0 == o.length) {
        var d = this.builder.builderMask();
        o = $(d), e._wrap.prepend(o)
    }
    o.css(t), o.show()
},removeMask: function() {
    var i = this._wrap.find(".j_tdou_mask");
    0 != i.length && i.hide()
},displayLoading: function(i) {
    var e = this;
    this._wrap = i || $("body");
    var t = (e._wrap.height() - 70) / 2 + "px", o = (e._wrap.width() - 200) / 2 + "px", d = {top: t,left: o}, a = this._wrap.find(".j_tdou_get_icon_loading");
    if (0 == a.length) {
        var n = this.builder.builderLoading();
        a = $(n), e._wrap.prepend(a)
    }
    e.setMask(i), a.css(d), a.show()
},hideLoading: function() {
    var i = this._wrap.find(".j_tdou_get_icon_loading");
    0 != i.length && i.hide(), this.removeMask()
},_displayInfo: function(i, e, t, o, d, a) {
    var n = this;
    n._wrap = i || $("body");
    var r = (n._wrap.height() - (d || 80)) / 2 + "px", l = (n._wrap.width() - (a || 400)) / 2 + "px", _ = {top: r,left: l}, s = $(e);
    n.setMask(i), n._wrap.append(s), s.css(_), s.show(), setTimeout(function() {
        n._hideInfo(), t && t.call(o)
    }, 3e3)
},_hideInfo: function() {
    this._wrap.find(".j_tdou_get_icon_tip").remove(), this.removeMask()
},displayErrorInfo: function(i, e, t, o) {
    var d = this, a = d.builder.builderError(e);
    d._displayInfo(i, a, t, o)
},hideErrorinfo: function() {
    this._hideInfo()
},dispalySuccessedInfo: function(i, e, t, o) {
    var d = this, a = d.builder.buildGetIconSuccessTip(e);
    d._displayInfo(i, a, t, o)
},dispaly3rdOrderInfo: function(i, e, t, o) {
    var d = this, a = d.builder.build3rdOrderInfo(e);
    d._displayInfo(i, a, t, o, 100, 420)
},showIconTip: function(i, e, t) {
    var o = this, d = i;
    this._icon = e;
    var a = o._icon.position(), n = a.top - 60 + "px", r = {top: n,right: 85};
    if (this.$tip = d.find(".j_tdou_get_icon_info_tip"), 0 == this.$tip.length) {
        var l = this.builder.builderIconTip(t.icon_name, t.icon_expired, t.icon_desc);
        this.$tip = $(l), d.append(this.$tip)
    } else
        this.$tip.find(".j_icon_name").html(t.icon_name), this.$tip.find(".j_icon_expired").html(t.icon_expired), this.$tip.find(".j_icon_desc").html(t.icon_desc);
    this.$tip.css(r), this.$tip.show()
},hideIconTip: function() {
    this.$tip && this.$tip.hide()
},OpenLoginDialog: function() {
    _.Module.use("common/widget/LoginDialog")
},displayPaymentFailed: function(i, e, t, o) {
    var d = this, a = "";
    null != i ? (a = d.builder.builderPaymentFailed(e), d._displayInfo(i, a, t, o)) : (a = d.builder.builderPaymentFailedText(e), d.displayPaymentResult(a, t, o))
},displayPaymentSuccess: function(i, e, t, o) {
    var d = this, a = e.from, n = e.goods_name, r = e.price, l = e.order_status, _ = "";
    null != i ? (_ = d.builder.buildPaymentSuccess(a, n, r, l), d._displayInfo(i, _, t, o)) : (_ = d.builder.buildPaymentSuccessText(a, n, r, l), d.displayPaymentResult(_, t, o))
},displayPaymentError: function(i) {
    var e = this;
    if (!($(".baidu_tb_tdou_payment_error_dialog").length > 0)) {
        var t = i || "\u652F\u4ED8\u5F02\u5E38\uFF1A\u5E94\u7528\u8FD8\u6CA1\u6709\u5F00\u542F\u652F\u4ED8\u529F\u80FD", o = this.builder.builderTdouPaymentError(t), d = {modal: !0,showTitle: !1,fixed: !0,width: 420,height: 150,holderClassName: "baidu_tb_tdou_payment_error_dialog",draggable: !0,html: o};
        e._pay_error_dialog = new $.dialog(d), e._pay_error_dialog.show();
        var a = function() {
            e._pay_error_dialog && e._pay_error_dialog.close(), e._pay_error_dialog = null
        };
        e._pay_error_dialog.element.delegate(".j_header_close", "click", function() {
            a()
        }).delegate(".j_tdou_pay_error_btn_close", "click", function() {
            a()
        })
    }
},displayPaymentResult: function(i, e, t) {
    var o = this;
    if (!($(".baidu_tb_tdou_payment_result_dialog").length > 0)) {
        i = this.builder.builderTdouPaymentResult(i);
        var d = {modal: !0,showTitle: !1,fixed: !0,width: 520,height: 200,holderClassName: "baidu_tb_tdou_payment_result_dialog",draggable: !0,html: i};
        o._pay_result_dialog = new $.dialog(d), o._pay_result_dialog.show();
        var a = function() {
            o._pay_result_dialog && o._pay_result_dialog.close(), o._pay_result_dialog = null
        };
        setTimeout(function() {
            a(), e && e.call(t)
        }, 3e3), o._pay_result_dialog.element.delegate(".j_header_close", "click", function() {
            a()
        }).delegate(".j_tdou_pay_result_btn_close", "click", function() {
            a()
        })
    }
}}});
;
_.Module.define({path: "common/widget/Tdou/TdouViewPay",requires: ["common/widget/Tdou/TdouBuilder", "common/widget/Tdou/TdouData", "common/widget/Tdou/TdouViewUtil", "common/widget/Tdou/TdouViewAutoRedirect"],sub: {errors: {110000: "\u7528\u6237\u672A\u767B\u9646",2320007: "\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",210009: "\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",2270044: "\u8D26\u53F7\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u767B\u9646",2270047: "\u652F\u4ED8\u5931\u8D25\u2014\u8BA2\u5355\u5931\u6548",2270050: "\u8BA2\u5355\u72B6\u6001\u5F02\u5E38",2270049: "\u5546\u54C1\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u8D2D\u4E70",2270015: "\u5546\u54C1\u4E0D\u53EF\u5151\u6362",2270051: "\u7CFB\u7EDF\u7EF4\u62A4\u4E2D..."},order_status: {0: "\u652F\u4ED8\u672A\u5B8C\u6210\uFF01",1: "\u652F\u4ED8\u6210\u529F\uFF0C\u5546\u54C1\u5151\u6362\u4E2D\uFF01",2: "\u5151\u6362\u6210\u529F",3: "\u5151\u6362\u5931\u8D25\uFF0CT\u8C46\u5DF2\u9000\u8FD8",4: "\u5151\u6362\u8D85\u65F6\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"},tdou_buy_confirm_tag: "tdou_buy_confirm",is_iframe: !0,initial: function(e) {
    this.builder = this.requireInstance("common/widget/Tdou/TdouBuilder"), this.dataProxy = this.requireInstance("common/widget/Tdou/TdouData"), this.viewUtil = this.requireInstance("common/widget/Tdou/TdouViewUtil"), this.message = e, this.autoDirect = this.requireInstance("common/widget/Tdou/TdouViewAutoRedirect")
},createMain: function(e) {
    var t = this;
    t.dataProxy.getPayInfo(e, t.onPayInfo, t)
},onPayInfo: function(e) {
    var t = this;
    if (e && 0 === e.no) {
        var o = e.data.goods_info, i = e.data.order_info, r = e.data.user_info;
        t.createUI(o, i, r)
    } else
        t.handleError(e.no)
},createUI: function(e, t, o) {
    var i = this, r = "", a = o.Parr_props;
    i.dataProxy.setParrProps(a);
    var n = i.dataProxy.getMemberLevel(), d = 2 == n, u = o.Parr_scores, _ = 0;
    u && (_ = u.scores_money + u.scores_other);
    var s = _ >= e.tdou_num, c = 0;
    s || (c = e.tdou_num - _);
    var l = e.free_vip_level;
    if (s && (t.cpath.pay_cashier || void 0 == t.cpath.pay_cashier))
        return i.pay(!1), void 0;
    if (!s && (t.cpath.gettdou_cashier || void 0 == t.cpath.gettdou_cashier))
        return i.getTdou(!1), void 0;
    var m = i.confirmCount();
    return s && m > 0 ? (m -= 1, i.confirmCount(m), i.pay(!1), void 0) : (d && l && (r = i.createUI_memberGetTdou_free(s, e, t, c)), d && !l ? r = i.createUI_memberGetTdou(s, e, t, c) : !d && l ? r = i.createUI_nonMemberGetGoodsOwnedMember(s, e, t, c) : d || l || (r = i.createUI_nonMemberGetTdouOwnedMember(s, e, t, c)), i.renderMain(r), i.initUIData(), i.bindMainUIEvents(), void 0)
},directToCrasher: function(e, t, o) {
    var i = this, r = o.Parr_props;
    i.dataProxy.setParrProps(r);
    var a = o.Parr_scores, n = 0;
    a && (n = a.scores_money + a.scores_other);
    var d = n >= e.tdou_num, u = 0;
    d || (u = e.tdou_num - n), d ? i.pay(!1) : i.getTdou(!1)
},initUIData: function() {
    var e = this, t = e.confirmCount(), o = $(".j_baidu_tb_tdou_pay_info_box .j_tdou_buy_confirm");
    o.length > 0 && (parseInt(t) > 0 ? o.tbattr("checked", !0) : o.tbattr("checked", !1))
},createUI_nonMemberGetGoodsOwnedMember: function(e, t, o, i) {
    t.tdou_pay_from = o.from;
    var r = this.builder.buildPayTdouMain_nonMemberGetGoodsOwnedMember(e, t, o, i);
    return r
},createUI_nonMemberGetTdouOwnedMember: function(e, t, o, i) {
    t.tdou_pay_from = o.from;
    var r = this.builder.buildPayTdouMain_nonMemberGetTdouOwnedMember(e, t, o, i);
    return r
},createUI_memberGetTdou: function(e, t, o, i) {
    t.tdou_pay_from = o.from;
    var r = this.builder.buildPayTdouMain_memberGetTdou(e, t, o, i);
    return r
},createUI_memberGetTdou_free: function(e, t, o, i) {
    t.tdou_pay_from = o.from;
    var r = this.builder.buildPayTdouMain_memberGetTdou_freeGoods(e, t, o, i);
    return r
},renderMain: function(e) {
    if (!($(".baidu_tb_tdou_payment_dialog").length > 0)) {
        var t = {modal: !0,showTitle: !1,fixed: !0,width: 610,height: 275,holderClassName: "baidu_tb_tdou_payment_dialog",draggable: !0};
        t.html = e, this._dialog = new $.dialog(t), this._dialog.element[0].id = "baidu_tb_tdou_payment_dialog", this._dialog.show()
    }
},bindMainUIEvents: function() {
    var e = this;
    $(".j_tdou_pay_header_close").on("click", function() {
        e.closeMain(), e.sendMessage("closed", "")
    }), this._dialog.element.delegate(".j_tb_tdou_pay_btn", "click", function() {
        e.pay()
    }).delegate(".j_tb_tdou_get_tdou_btn", "click", function() {
        e.getTdou()
    }).delegate(".j_tdou_enable_member", "click", function() {
        var e = $(".j_baidu_tb_tdou_pay_info_box .j_tb_tdou_get_tdou_btn");
        $(this).tbattr("checked") ? (e.html("\u5F00\u901A\u4F1A\u5458\u5E76\u83B7\u53D6T\u8C46"), e.addClass("tdou_pay_btn_135")) : (e.html("\u83B7\u53D6T\u8C46"), e.removeClass("tdou_pay_btn_135"))
    }).delegate(".j_tdou_buy_confirm", "click", function() {
        $(this).tbattr("checked") ? e.confirmCount(30) : e.confirmCount(0)
    }).delegate(".j_tdou_buy_icon", "click", function() {
        e.getIcon()
    }).delegate(".j_tdou_open_super_member_link", "click", function() {
        e.closeMain()
    })
},pay: function(e) {
    var t = this, o = e;
    "undefined" == typeof e && (o = !0);
    var i = {no_ui: o};
    t.dataProxy.payGoods(t.onPay, t, i)
},onPay: function(e, t) {
    var o = this;
    t && !t.no_ui ? o.wrap = null : (o.wrap = null, o.closeMain());
    var i = o.dataProxy.getPayInfoCache();
    if (0 === e.no) {
        var r = {from: i.order_info.from,goods_name: $.tb.subByte(i.goods_info.goods_name, 24, ""),order_status: e.data.order_info.status,price: i.goods_info.tdou_num};
        o.viewUtil.displayPaymentSuccess(o.wrap, r, function() {
            o.closeMain(), o.sendMessage("paid", e)
        }, o)
    } else
        o.viewUtil.displayPaymentFailed(o.wrap, $.tb.subByte(i.goods_info.goods_name, 24, ""), function() {
            o.closeMain(), o.sendMessage("paid", e)
        }, o)
},getTdou: function(e) {
    var t = this, o = !1, i = e;
    "undefined" == typeof e && (i = !0), i ? (o = $(".j_baidu_tb_tdou_pay_info_box .j_tdou_enable_member").tbattr("checked"), this.closeMain()) : o = !1;
    var r = t.dataProxy.getPayInfoCache(), a = r.order_info.cpath, n = {consumption_path: r.order_info.scene_id,title: "\u7B2C\u4E09\u65B9\u652F\u4ED8:\u83B7\u53D6T\u8C46",need_tdou: 0,third_order_id: r.order_info.order_id,goods_cost_tdou: r.goods_info.tdou_num};
    o ? ($.extend(n, {title: "\u7B2C\u4E09\u65B9\u652F\u4ED8:\u5F00\u901A\u8D85\u7EA7\u4F1A\u5458,\u83B7\u53D6T\u8C46",pay_type: 7,tbs: r.tbs}), a && "1" == a.purchase && $.extend(n, {title: "\u7B2C\u4E09\u65B9\u652F\u4ED8:\u5F00\u901A\u8D85\u7EA7\u4F1A\u5458,\u83B7\u53D6T\u8C46,\u8D2D\u4E70\u5546\u54C1",pay_type: 9,tbs: r.tbs})) : a && "1" == a.purchase && $.extend(n, {title: "\u7B2C\u4E09\u65B9\u652F\u4ED8:\u8D2D\u4E70\u5546\u54C1,\u83B7\u53D6T\u8C46",pay_type: 8,third_order_id: r.order_info.order_id,tbs: r.tbs}), t.goCashier(n, i)
},goCashier: function(e, t) {
    var o = 6, i = e.consumption_path, r = e.desc, a = e.current_need_tdou, n = e.goods_cost_tdou || 0;
    o = e.pay_type || o;
    var d = e.tbs, u = e.third_order_id;
    this.autoDirect.display_type = "third_app", this.autoDirect.third_order_id = u, this.autoDirect.createMain(i, r, a, n, o, d, u, !t)
},getIcon: function() {
    var e = this;
    e.closeMain();
    var t = e.dataProxy.getPayInfoCache();
    e.view = this.requireInstance("common/widget/Tdou/TdouView"), e.view.bind("after_buy_icon", function(o, i) {
        var r = t.goods_info, a = t.order_info, n = t.user_info;
        null != i && (n.Parr_scores = i), e.createUI(r, a, n)
    }, e);
    var o = t.order_info.scene_id, i = "\u7B2C\u4E09\u65B9\u8D2D\u4E70icon", r = t.goods_info.tdou_num;
    e.view.createMain(o, i, r)
},closeMain: function() {
    this._dialog && this._dialog.close(), this.dialog = null
},confirmCount: function() {
    var e = this, t = arguments[0], o = 0, i = new Date, r = i.getFullYear() + "" + (i.getMonth() + 1) + i.getDate();
    if ("undefined" != typeof t) {
        o = parseInt(t);
        var a = r + "#" + o;
        $.tb.Storage.set(e.tdou_buy_confirm_tag, a)
    } else {
        if (t = $.tb.Storage.get(e.tdou_buy_confirm_tag), null == t)
            return 0;
        var n = t.split("#");
        o = n && 2 == n.length && n[0] == r ? parseInt(n[1]) : 0
    }
    return o
},sendMessage: function(e, t) {
    var o = this, i = null;
    "closed" == e ? i = {command: "encourage_dialog_closed",data: t} : "paid" == e && (i = {command: "encourage_paid",data: t}), o.message && o.message(i)
},handleError: function(e) {
    if (e) {
        var t = this, o = t.errors[e];
        return 11e4 == e ? (t.viewUtil.OpenLoginDialog(), void 0) : (o ? t.viewUtil.displayPaymentError(o) : t.viewUtil.displayPaymentError("\u672A\u77E5\u9519\u8BEF"), void 0)
    }
}}});
;
_.Module.define({path: "common/widget/TdouMessage",requires: ["common/widget/messenger", "common/widget/Tdou/TdouViewPay"],sub: {sub_iframe_name: "bd_tieba_app_iframe",iframe_uid: "tb_tdou_pay_0",initType: 0,windowId: "window_iframe_app_" + (new Date).getMilliseconds(),cross_domain_origin_list: [],initial: function(t) {
    var e = this;
    t = $.extend({}, t), e.postMsg = t.post_msg;
    var i = t.iframe_name, s = t.origin_array;
    $.isArray(s) ? e.cross_domain_origin_list = e.cross_domain_origin_list.concat(s) : "string" == typeof s && s && e.cross_domain_origin_list.push(s), e.sub_iframe_name = i || e.sub_iframe_name, e.payment = this.use("common/widget/Tdou/TdouViewPay", function(t) {
        e.sendMessage(t)
    }), e.init()
},init: function(t) {
    this.initMessager(), this.windowId = t || this.windowId
},getCrossDomainWhiteUrl: function() {
    var t = PageUnit.load("tdou_cross_domain_white_list"), e = "";
    for (var i in t)
        e += t[i][0];
    var s = e.split(",");
    return s
},initMessager: function() {
    var t = this;
    if (!t.MessageInstance) {
        if (t.postMsg)
            t.MessageInstance = t.postMsg, t.initType = 1;
        else {
            t.MessageInstance = this.use("common/widget/messenger", this.windowId, "tdou_pay");
            var e = window.document.getElementById(t.sub_iframe_name);
            t.MessageInstance.addTarget(e.contentWindow, t.sub_iframe_name)
        }
        var i = ["http://tieba.baidu.com", "http://test.baidu.yy.tv", "http://baidu.yy.tv", "http://webyy.yy.com", "http://c1.webyy.yy.com", "http://webyy.yy.com", "http://webyy.yy.com", "http://webyy.yy.com", "http://webyy.yy.com", "http://webyy.yy.com", "http://c1.webyy.yy.com", "http://c2.webyy.yy.com", "http://c3.webyy.yy.com", "http://c4.webyy.yy.com", "http://c5.webyy.yy.com", "http://tieba.xiu8.com", "http://www.xiu8.com", "http://fe.baidu.com", "http://openapi-test.yy.com", "http://www.yy.com", "http://skirt.xiuba.com", "http://baidu.huya.com"];
        i = i.concat(t.cross_domain_origin_list), t.MessageInstance.registerOrigin(i), t.MessageInstance.registerCommand({encourage_tdou_pay: $.proxy(t.pay, this),encourage_set_tieba_title: $.proxy(t.setTitle, this),encourage_set_tieba_height: $.proxy(t.setHeight, this),encourage_third_app_refresh: $.proxy(t.refresh, this),encourage_third_app_redirect: $.proxy(t.redirect, this)})
    }
},sendMessage: function(t) {
    var e = this;
    if (e.MessageInstance) {
        var i = "";
        "object" == typeof t && (i = JSON.stringify(t)), e.MessageInstance.targets[e.sub_iframe_name].send(i)
    }
},pay: function(t) {
    $.extend(t, {chargeType: "platform"}), this.payment.createMain(t)
},setTitle: function(t) {
    t.title && (window.document.title = decodeURIComponent(t.title))
},setHeight: function(t) {
    var e = t.height;
    1 === this.initType ? $("#iframe_" + this.sub_iframe_name).height(e) : $("#" + this.sub_iframe_name).height(e)
},refresh: function() {
    $.tb.location.reload()
},redirect: function(t) {
    var e = t.url;
    e && (e.length >= 2083 || $.tb.location.setHref(e))
}}});
;
_.Module.define({path: "common/widget/Tdou",requires: ["common/widget/Tdou/TdouView", "common/widget/Tdou/TdouViewAutoRedirect"],sub: {initial: function() {
    this.view = this.use("common/widget/Tdou/TdouView"), this.autoDirect = this.use("common/widget/Tdou/TdouViewAutoRedirect")
},factory: function(e, t) {
    var o = "", i = "", d = 0, u = 0, c = 6, n = 0;
    switch (e) {
        case "get_icon":
            o = t.consumption_path, i = t.desc, d = t.current_need_tdou, this.view.createMain(o, i, d);
            break;
        case "auto_direct":
            o = t.consumption_path, i = t.desc, d = t.current_need_tdou, u = t.goods_cost_tdou || 0, c = t.pay_type, n = t.tbs;
            var a = t.order_id, s = t.is_iframe;
            this.autoDirect.createMain(o, i, d, u, c, n, a, s);
            break;
        case "payment":
    }
}}});
;
_.Module.define({path: "common/widget/IframeBuilder",requires: ["common/widget/messenger"],sub: {_TIMEOUTTYPE: {UNDO: 0,REFRESH: 1,HIDE: 2,SHOW: 3},_WHITELIST: ["http://www.xiu8.com", "http://tieba.baidu.com", "http://baidu.yy.tv", "http://baidu.huya.com"],_styleList: "",initial: function() {
    window.iframeData || this.initIframeData()
},iframe: function(e) {
    {
        var a = $.extend(!0, {}, e), t = $(a.wrap || "body"), i = "iframe_" + a.iframe_id, r = parseInt(a.width), n = parseInt(a.height), s = a.clazz, f = a.name, o = 1 == a.replace, d = a.src, m = this.getStyleList(r, n), c = ['<iframe name="' + f + '"', ' id="' + i + '"', ' class="' + s + '"', ' src=""', ' style="' + m + '"', " frameborder=0", ' scrolling="no"', ' allowTransparency="true"></iframe>'].join(" "), _ = $(c);
        _.get(0).src = $.tb.unescapeHTML(d)
    }
    o ? _.replaceAll(t) : t.append(_), this.initIframe(e)
},initIframeData: function() {
    window.iframeData = window.iframeData || {}, window.iframeData._cache = window.iframeData._cache || {}, window.iframeData.getIframe = function(e) {
        var a = window.iframeData._cache;
        return a[e] ? a[e] : null
    }, window.iframeData.setIframe = function(e, a) {
        var t = window.iframeData._cache;
        if (t[e] = t[e] || {}, "object" != typeof a)
            throw "Iframe list id's type must be a object!";
        t[e] = $.extend(!0, t[e], a)
    }, window.iframeData.getPostMsg = function(e) {
        var a = window.iframeData.getIframe(e) || {};
        return a.msg
    }, window.iframeData.getDom = function(e, a) {
        var t = window.iframeData.getIframe(e) || {};
        return 1 == a ? "iframe_" + e : t.dom
    }, window.iframeData.getReady = function(e) {
        var a = window.iframeData.getIframe(e);
        return a.ready || $.Callbacks()
    }, window.iframeData.setReady = function(e, a) {
        var t = window.iframeData.getIframe(e) || {}, i = window.iframeData.getReady(e) || $.Callbacks();
        return "function" == typeof a ? (1 == t.success ? a() : (i.add(a), window.iframeData.setIframe(e, {ready: i})), !0) : !1
    }, window.iframeData.fireReady = function(e) {
        var a = window.iframeData.getReady(e) || $.Callbacks();
        a.fire()
    }
},initIframe: function(e) {
    var a = this;
    e.timeout_type = e.timeout_type || "HIDE";
    var t = this.conf = $.extend({wait_time: 1e4,timeout_type: "HIDE"}, e), i = t.iframe_id, r = t.project_id, n = (t.src, parseInt(t.wait_time)), s = (this._TIMEOUTTYPE[t.timeout_type], t.origin_url);
    this.stats = "object" == typeof e.stat ? e.stat : {}, window.iframeData = window.iframeData || {};
    var f = document.getElementById("iframe_" + i);
    if (f) {
        this.start_time = 1 * new Date;
        var o = window.iframeData.getPostMsg(i);
        o || (o = this.use("common/widget/messenger", "tb_Iframe_" + 1 * new Date, r), o.addTarget(f.contentWindow, i), s && "string" == typeof s && o.registerOrigin([s]), o.registerCommand({loadready: function(e) {
            return a.onLoadReady(e, i, f), {no: 0,msg: "success"}
        }})), o.targets[i].send($.json.encode({command: "loadready_ask",data: {no: 0,msg: "success"}})), setTimeout(function() {
            a.onTimeoutHandler(f)
        }, n), window.iframeData.setIframe(i, {dom: f,msg: o,callback: []})
    }
},doRefresh: function() {
    var e = this, a = this.conf || {}, t = $(iframeData.getDom(a.iframe_id)), i = this.getStyleList(), r = (parseInt(a.height), 200), n = ["<div ", ' class="iframe_refresh_dialog"', ' id="iframe_refresh_' + a.iframe_id + '"', ' style="' + i + '"', " >", '<div class="iframe_refresh_alert" style="margin-top:' + r + 'px">', '<div class="iframe_refresh_animate"></div>', '<div class="iframe_refresh_alert_title">\u7EB3\u5C3C\uFF01\u5E94\u7528\u88AB\u866B\u6D1E\u5403\u6389\u5566\uFF0C\u70B9\u51FB\u5237\u65B0\u7B49\u7B49\u770B~</div>', '<div class="iframe_refresh_operate"><a href="#" class="iframe_refresh_btn j_iframe_refresh_btn">\u70B9\u51FB\u5237\u65B0</a></div>', "</div>", "</div>"].join(" "), s = $(n);
    s.replaceAll(t), s.find(".j_iframe_refresh_btn").click(function(a) {
        a.preventDefault(), e.iframe($.extend(e.conf, {wrap: s,replace: !0}))
    }).mouseenter(function() {
        s.find(".iframe_refresh_animate").addClass("iframe_refresh_animate_do")
    })
},doRefresh2: function() {
    var e = this, a = this.conf || {}, t = $(iframeData.getDom(a.iframe_id)), i = t.offset() || {top: 0}, r = Math.max(i.top, 0), n = r + 200, s = ['<div class="iframe_refresh_alert" style="z-index:9999;position:absolute;left:50%;margin-left:-150px;top:' + n + 'px">', '<div class="iframe_refresh_animate"></div>', '<div class="iframe_refresh_alert_title">\u7EB3\u5C3C\uFF01\u5E94\u7528\u88AB\u866B\u6D1E\u5403\u6389\u5566\uFF0C\u70B9\u51FB\u5237\u65B0\u7B49\u7B49\u770B~</div>', '<div class="iframe_refresh_operate"><a href="#" class="iframe_refresh_btn j_iframe_refresh_btn">\u70B9\u51FB\u5237\u65B0</a></div>', "</div>"].join(" "), f = $(s);
    f.appendTo("body"), f.find(".j_iframe_refresh_btn").click(function(a) {
        a.preventDefault(), e.iframe($.extend(e.conf, {wrap: t,replace: !0})), f.remove()
    }).mouseenter(function() {
        f.find(".iframe_refresh_animate").addClass("iframe_refresh_animate_do")
    })
},doHide: function() {
    var e = this.conf || {}, a = $(iframeData.getDom(e.iframe_id));
    a.remove()
},getStyleList: function(e, a) {
    var t = this.conf || {};
    return e = e || parseInt(t.width), a = a || parseInt(t.height), this._styleList = this._styleList || "width:100%;margin:0 auto;" + (a ? "height:" + a + "px;" : "") + (e ? "width:" + e + "px;" : "") + "display:block;", this._styleList
},isWhiteList: function(e) {
    return !!_.filter(this._WHITELIST || [], function(a) {
        return e.indexOf(a) >= 0
    }).length
},onTimeoutHandler: function() {
    var e = this._TIMEOUTTYPE[this.conf.timeout_type], a = window.iframeData.getIframe(this.conf.iframe_id);
    !a.success && (this.sendStat(1, 0), 0 === e)
},_isLoadReady: 0,onLoadReady: function(e, a, t) {
    if (1 !== this._isLoadReady) {
        var i = 0, r = this._TIMEOUTTYPE[this.conf.timeout_type];
        this.end_time = 1 * new Date, i = this.end_time - this.start_time, 0 == e.no && (this._isLoadReady = 1, window.iframeData.setIframe(a, {success: 1,loadInfo: e.data}), 3 === r && $(t).show(), window.iframeData.fireReady(a)), this.sendStat(e.no, i)
    }
},sendStat: function(e, a) {
    var t = this, i = {app_id: "",class_type: "",app_class1: "",app_class2: "",app_unique_id: "",scene_id: "",forum_id: PageData.forum ? PageData.forum.forum_id : "",from: PageData.page,host_url: $.tb.location.getHref(),task: "",locate: "",iframe_url: t.conf.src,is_load_suc: Number(0 === e),ready_time: a}, r = $.extend(i, this.stats);
    r.task && $.ajax({url: "/appmonitor/log/stable",type: "post",data: r})
}}});
_.Module.define({path: "ueglibs/widget/Ban",sub: {initial: function(e, a, r, t, i, n) {
    var o, s, f, p, l = PageData.user.forbidden;
    if (l)
        o = l.days_to_free, s = l.opgroup, f = l.isForbid, p = l.block_reason;
    else {
        var d = PageData.user.balv;
        o = d.days_tofree, s = d.opgroup, f = d.is_block, p = d.block_reason
    }
    var u = this, e = void 0 !== e ? e : PageData.product, a = void 0 !== a ? a : PageData.forum.forum_id, r = void 0 !== r ? r : o, t = void 0 !== t ? t : s, i = void 0 !== i ? i : f, n = void 0 !== n ? n : p, n = n && "bawu" === t ? "<span>\u5C01\u7981\u7406\u7531\uFF1A" + n + "</span>" : "", c = "bawu" === t ? "\uFF1B\u5982\u679C\u5427\u52A1\u4E0D\u5904\u7406\uFF0C\u5C31\u53EF\u4EE5\u81EA\u52A8\u89E3\u5C01\u54E6\uFF5E" : "";
    u.renderInfo = {product: e,ban: i,fid: a,day: r,by: t,op: "bawu" !== t ? "\u7CFB\u7EDF" : "\u672C\u5427\u5427\u52A1",page: "bawu" !== t ? "system" : "bawu",br: n,notice: c}, $("body").off("click.ueg.pmclink").on("click.ueg.pmclink", ".ueg_pmc-link", function() {
        var e = $(this), a = e.data("fr"), r = e.data("site");
        $.stats.track(r, "UEG-track", a, "click")
    })
},ensure: function(e, a, r) {
    for (var t, a = a.split("."); a.length > 1; )
        t = a.shift(), e = e[t] = e[t] || {};
    if (t = a.shift(), void 0 === t)
        throw "Please make sure you has one namespace like `scope.name.value` !";
    return void 0 !== r && (e[t] = r), e[t]
},_tplRenders: {richPoster: function(e) {
    if ("system" == e.page)
        var a = e.ban ? ["\u60A8\u53EF\u80FD\u5B58\u5728\u8FDD\u89C4\u64CD\u4F5C\uFF0C\u5DF2\u88AB#{op}\u5C01\u7981\uFF0C\u53BB", '<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/#{page}?fid=#{fid}&fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site}" ', 'target="_blank">\u7533\u8BF7\u6062\u590D</a>', "#{notice}#{br}"].join("") : "";
    else
        var a = e.ban ? ["\u60A8\u5DF2\u88AB#{op}\u5C01\u7981\uFF0C#{br}", '\u60A8\u53EF\u4EE5\u53BB<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/#{page}?fid=#{fid}&fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site}" ', 'target="_blank">\u7533\u8BF7\u6062\u590D</a>'].join("") : "";
    return $.tb.format(a, e)
},simplePoster: function(e) {
    if ("system" == e.page)
        var a = e.ban ? ["\u60A8\u53EF\u80FD\u5B58\u5728\u8FDD\u89C4\u64CD\u4F5C\uFF0C\u5DF2\u88AB#{op}\u5C01\u7981\uFF0C\u53BB", '<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/#{page}?fid=#{fid}&fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site}" ', 'target="_blank">\u7533\u8BF7\u6062\u590D</a>'].join("") : "";
    else
        var a = e.ban ? ["\u60A8\u5DF2\u88AB#{op}\u5C01\u7981\uFF0C#{br}", '\u60A8\u53EF\u4EE5\u53BB<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/#{page}?fid=#{fid}&fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site}" ', 'target="_blank">\u7533\u8BF7\u6062\u590D</a>'].join("") : "";
    return $.tb.format(a, e)
},balvAside: function(e) {
    var a = ['<div style="width:205px;text-align:left;margin:6px 0px 6px 10px;">', "<div>\u4F60\u5DF2\u88AB\u7CFB\u7EDF\u6C38\u4E45\u5C01\u7981\uFF0C<br/>\u5C01\u7981\u671F\u95F4\u4E0D\u52A0\u7ECF\u9A8C\uFF0C\u5934\u8854\u548C\u6743\u9650\u6536\u56DE\u3002</div>", '<div style="text-align:right;margin-right:5px;">', '<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/index?fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site}" ', 'target="_blank">\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F</a>', "</div>", "</div>"].join(""), r = ['<div style="width:205px;text-align:left;margin:6px 0px 6px 10px;">', '<div style="width:205px;">', "<span>\u4F60\u5DF2\u88AB#{op}\u5C01\u7981\uFF0C#{br}</span>", "<span>\u5C01\u7981\u671F\u95F4\u4E0D\u52A0\u7ECF\u9A8C\uFF0C\u5934\u8854\u548C\u6743\u9650\u6536\u56DE\u3002</span>", "</div>", '<div style="text-align:right;margin-right:5px;">', '\u53BB<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/#{page}?fid=#{fid}&fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site} j_appealLink"', 'target="_blank">\u7533\u8BF7\u6062\u590D</a>', "</div>", "</div>"].join(""), t = e.ban ? e.day > 0 && e.day < 360 ? r : a : "";
    return $.tb.format(t, e)
},oldPosterDialog: function(e) {
    var a = e.ban ? ["\u64CD\u4F5C\u5931\u8D25\uFF0C\u60A8\u7684\u8D26\u53F7\u56E0\u8FDD\u89C4\u64CD\u4F5C\u800C\u88AB\u5C01\u7981&nbsp;&nbsp;", '<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/#{page}?fid=#{fid}&fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site}" ', 'target="_blank">\u67E5\u770B\u5C01\u7981\u4FE1\u606F</a>'] : "";
    return $.tb.format(a, e)
},balvLike: function(e) {
    return $.tb.format("\u4F60\u5DF2\u88AB#{op}\u5C01\u7981\uFF0C\u6682\u65F6\u4E0D\u80FD\u8FDB\u884C\u64CD\u4F5C", e)
},voteDialog: function(e) {
    var a = e.ban ? ["\u64CD\u4F5C\u5931\u8D25\uFF0C\u60A8\u7684\u8D26\u53F7\u56E0\u8FDD\u89C4\u64CD\u4F5C\u800C\u88AB\u5C01\u7981&nbsp;&nbsp;", '<a data-site="#{site}" ', 'data-fr="#{fr}" ', 'href="/pmc/#{page}?fid=#{fid}&fr=#{site}_#{fr}" ', 'class="ueg_pmc-link ueg_track-#{site}"', 'target="_blank">\u67E5\u770B\u5C01\u7981\u4FE1\u606F</a>'] : "";
    return $.tb.format(a, e)
},delPost: function(e) {
    var a = e.ban ? "\u62B1\u6B49\uFF0C\u60A8\u5DF2\u88AB\u672C\u5427\u5C01\u7981\u6216\u8005\u52A0\u5165\u9ED1\u540D\u5355\uFF0C\u6682\u4E0D\u80FD\u5220\u8D34" : "";
    return a
},forumInfoManager: function(e) {
    var a = e.ban ? "\u60A8\u7684\u8D26\u6237\u88AB\u5C01\u7981\uFF0C\u6682\u4E0D\u80FD\u4FEE\u6539" : "";
    return a
},forumManagerApply: function() {
    var e = "\u62B1\u6B49\uFF0C\u60A8\u7684\u5E10\u53F7\u88AB\u5C01\u7981\uFF0C\u6682\u65F6\u65E0\u6CD5\u7533\u8BF7\u5427\u4E3B\u3002";
    return e
}},_supports: {frs: {richPoster: "richPoster",simplePoster: "simplePoster",balvAside: "balvAside",balvLike: "balvLike",oldPosterDialog: "oldPosterDialog",voteDialog: "voteDialog",forumManagerApply: "forumManagerApply"},pb: {richPoster: "richPoster",simplePoster: "simplePoster",balvAside: "balvAside",oldPosterDialog: "oldPosterDialog",voteDialog: "voteDialog",forumManagerApply: "forumManagerApply",delPost: "delPost"},"forum-info": {forumManagerApply: "forumManagerApply"},tbmall_theme2: {richPoster: "richPoster"}},assign: function(e, a, r, t) {
    var i = this, n = (i._supports, i._tplRenders);
    if (!t && "function" == typeof r) {
        if (t = r, r = t.name, !r)
            return i.$error("Unknown render handler with an anonymous function"), !1;
        if (n[r])
            return i.$error("There exsits one render, place choice one another name"), !1;
        n[r] = t
    }
    e = support[e] = support[e] || {}, e[a] = r
},$error: function() {
    "tieba.baidu.com" !== $.tb.location.getHost() && (arguments[0] = "Console$>Error: " + (arguments[0] || ""), (console && console.error || function() {
    }).apply(console, arguments))
},render: function(e) {
    var a, r = this, t = r.renderInfo.product, i = r._supports, n = r._tplRenders, o = (i[t] || {})[e], s = $.tb.location.getSearchValue().fr || "";
    return o && "function" == typeof n[o] ? (r.renderInfo.site = e, r.renderInfo.fr = t + (s ? "-" + s : ""), a = n[o](r.renderInfo), r.renderInfo.site = "", a) : (r.$error("Don't support for this page named %s with the site named %s ,please hi li304207639", t, e), "")
}}});
