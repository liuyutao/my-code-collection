/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/6.
 */
    typeof JSON != "object" && (JSON = {}), function () {
    function f(a) {
        return a < 10 ? "0" + a : a
    }

    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
            var b = meta[a];
            return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function str(a, b) {
        var c, d, e, f, g = gap, h, i = b[a];
        i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
        switch (typeof i) {
            case "string":
                return quote(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i)
                    return "null";
                gap += indent, h = [];
                if (Object.prototype.toString.apply(i) === "[object Array]") {
                    f = i.length;
                    for (c = 0; c < f; c += 1)
                        h[c] = str(c, i) || "null";
                    return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                }
                if (rep && typeof rep == "object") {
                    f = rep.length;
                    for (c = 0; c < f; c += 1)
                        typeof rep[c] == "string" && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
                } else
                    for (d in i)
                        Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
        }
    }

    "use strict", typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "  ": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (a, b, c) {
        var d;
        gap = "", indent = "";
        if (typeof c == "number")
            for (d = 0; d < c; d += 1)
                indent += " ";
        else
            typeof c == "string" && (indent = c);
        rep = b;
        if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number")
            return str("", {"": a});
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && typeof e == "object")
                for (c in e)
                    Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }

        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function (a, b) {
    "use strict";
    var c = a.History = a.History || {}, d = a.MooTools, e = a.Element;
    if (typeof c.Adapter != "undefined")
        throw new Error("History.js Adapter has already been loaded...");
    Object.append(e.NativeEvents, {popstate: 2, hashchange: 2}), c.Adapter = {bind: function (a, b, c) {
        var d = typeof a == "string" ? document.id(a) : a;
        d.addEvent(b, c)
    }, trigger: function (a, b, c) {
        var d = typeof a == "string" ? document.id(a) : a;
        d.fireEvent(b, c)
    }, extractEventData: function (a, c) {
        var d = c && c.event && c.event[a] || c && c[a] || b;
        return d
    }, onDomLoad: function (b) {
        a.addEvent("domready", b)
    }}, typeof c.init != "undefined" && c.init()
}(window), function (a, b) {
    "use strict";
    var c = a.document, d = a.setTimeout || d, e = a.clearTimeout || e, f = a.setInterval || f, g = a.History = a.History || {};
    if (typeof g.initHtml4 != "undefined")
        throw new Error("History.js HTML4 Support has already been loaded...");
    g.initHtml4 = function () {
        if (typeof g.initHtml4.initialized != "undefined")
            return !1;
        g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function (a) {
            var b = g.getHashByIndex(), c;
            return c = a === b, c
        }, g.isHashEqual = function (a, b) {
            return a = encodeURIComponent(a).replace(/%25/g, "%"), b = encodeURIComponent(b).replace(/%25/g, "%"), a === b
        }, g.saveHash = function (a) {
            return g.isLastHash(a) ? !1 : (g.savedHashes.push(a), !0)
        }, g.getHashByIndex = function (a) {
            var b = null;
            return typeof a == "undefined" ? b = g.savedHashes[g.savedHashes.length - 1] : a < 0 ? b = g.savedHashes[g.savedHashes.length + a] : b = g.savedHashes[a], b
        }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function (a, b, c) {
            var d = g.getHashByState(a), e;
            return e = {discardedState: a, backState: c, forwardState: b}, g.discardedStates[d] = e, !0
        }, g.discardHash = function (a, b, c) {
            var d = {discardedHash: a, backState: c, forwardState: b};
            return g.discardedHashes[a] = d, !0
        }, g.discardedState = function (a) {
            var b = g.getHashByState(a), c;
            return c = g.discardedStates[b] || !1, c
        }, g.discardedHash = function (a) {
            var b = g.discardedHashes[a] || !1;
            return b
        }, g.recycleState = function (a) {
            var b = g.getHashByState(a);
            return g.discardedState(a) && delete g.discardedStates[b], !0
        }, g.emulated.hashChange && (g.hashChangeInit = function () {
            g.checkerFunction = null;
            var b = "", d, e, h, i, j = Boolean(g.getHash());
            return g.isInternetExplorer() ? (d = "historyjs-iframe", e = c.createElement("iframe"), e.setAttribute("id", d), e.setAttribute("src", "#"), e.style.display = "none", c.body.appendChild(e), e.contentWindow.document.open(), e.contentWindow.document.close(), h = "", i = !1, g.checkerFunction = function () {
                if (i)
                    return !1;
                i = !0;
                var c = g.getHash(), d = g.getHash(e.contentWindow.document);
                return c !== b ? (b = c, d !== c && (h = d = c, e.contentWindow.document.open(), e.contentWindow.document.close(), e.contentWindow.document.location.hash = g.escapeHash(c)), g.Adapter.trigger(a, "hashchange")) : d !== h && (h = d, j && d === "" ? g.back() : g.setHash(d, !1)), i = !1, !0
            }) : g.checkerFunction = function () {
                var c = g.getHash() || "";
                return c !== b && (b = c, g.Adapter.trigger(a, "hashchange")), !0
            }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
        }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function (b) {
            var c = b && b.newURL || g.getLocationHref(), d = g.getHashByUrl(c), e = null, f = null, h = null, i;
            return g.isLastHash(d) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(d), d && g.isTraditionalAnchor(d) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (e = g.extractState(g.getFullUrl(d || g.getLocationHref()), !0), g.isLastSavedState(e) ? (g.busy(!1), !1) : (f = g.getHashByState(e), i = g.discardedState(e), i ? (g.getHashByIndex(-2) === g.getHashByState(i.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(e.data, e.title, encodeURI(e.url), !1), !0))))
        }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function (b, c, d, e) {
            d = encodeURI(d).replace(/%25/g, "%");
            if (g.getHashByUrl(d))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (e !== !1 && g.busy())
                return g.pushQueue({scope: g, callback: g.pushState, args: arguments, queue: e}), !1;
            g.busy(!0);
            var f = g.createStateObject(b, c, d), h = g.getHashByState(f), i = g.getState(!1), j = g.getHashByState(i), k = g.getHash(), l = g.expectedStateId == f.id;
            return g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), h === j ? (g.busy(!1), !1) : (g.saveState(f), l || g.Adapter.trigger(a, "statechange"), !g.isHashEqual(h, k) && !g.isHashEqual(h, g.getShortUrl(g.getLocationHref())) && g.setHash(h, !1), g.busy(!1), !0)
        }, g.replaceState = function (b, c, d, e) {
            d = encodeURI(d).replace(/%25/g, "%");
            if (g.getHashByUrl(d))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (e !== !1 && g.busy())
                return g.pushQueue({scope: g, callback: g.replaceState, args: arguments, queue: e}), !1;
            g.busy(!0);
            var f = g.createStateObject(b, c, d), h = g.getHashByState(f), i = g.getState(!1), j = g.getHashByState(i), k = g.getStateByIndex(-2);
            return g.discardState(i, f, k), h === j ? (g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), g.saveState(f), g.Adapter.trigger(a, "statechange"), g.busy(!1)) : g.pushState(f.data, f.title, f.url, !1), !0
        }), g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function () {
            g.Adapter.trigger(a, "hashchange")
        })
    }, typeof g.init != "undefined" && g.init()
}(window), function (a, b) {
    "use strict";
    var c = a.console || b, d = a.document, e = a.navigator, f = !1, g = a.setTimeout, h = a.clearTimeout, i = a.setInterval, j = a.clearInterval, k = a.JSON, l = a.alert, m = a.History = a.History || {}, n = a.history;
    try {
        f = a.sessionStorage, f.setItem("TEST", "1"), f.removeItem("TEST")
    } catch (o) {
        f = !1
    }
    k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode;
    if (typeof m.init != "undefined")
        throw new Error("History.js Core has already been loaded...");
    m.init = function (a) {
        return typeof m.Adapter == "undefined" ? !1 : (typeof m.initCore != "undefined" && m.initCore(), typeof m.initHtml4 != "undefined" && m.initHtml4(), !0)
    }, m.initCore = function (o) {
        if (typeof m.initCore.initialized != "undefined")
            return !1;
        m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.disableSuid = m.options.disableSuid || !1, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.options.html4Mode = m.options.html4Mode || !1, m.options.delayInit = m.options.delayInit || !1, m.intervalList = [], m.clearAllIntervals = function () {
            var a, b = m.intervalList;
            if (typeof b != "undefined" && b !== null) {
                for (a = 0; a < b.length; a++)
                    j(b[a]);
                m.intervalList = null
            }
        }, m.debug = function () {
            (m.options.debug || !1) && m.log.apply(m, arguments)
        }, m.log = function () {
            var a = typeof c != "undefined" && typeof c.log != "undefined" && typeof c.log.apply != "undefined", b = d.getElementById("log"), e, f, g, h, i;
            a ? (h = Array.prototype.slice.call(arguments), e = h.shift(), typeof c.debug != "undefined" ? c.debug.apply(c, [e, h]) : c.log.apply(c, [e, h])) : e = "\n" + arguments[0] + "\n";
            for (f = 1, g = arguments.length; f < g; ++f) {
                i = arguments[f];
                if (typeof i == "object" && typeof k != "undefined")
                    try {
                        i = k.stringify(i)
                    } catch (j) {
                    }
                e += "\n" + i + "\n"
            }
            return b ? (b.value += e + "\n-----\n", b.scrollTop = b.scrollHeight - b.clientHeight) : a || l(e), !0
        }, m.getInternetExplorerMajorVersion = function () {
            var a = m.getInternetExplorerMajorVersion.cached = typeof m.getInternetExplorerMajorVersion.cached != "undefined" ? m.getInternetExplorerMajorVersion.cached : function () {
                var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                while ((b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0])
                    ;
                return a > 4 ? a : !1
            }();
            return a
        }, m.isInternetExplorer = function () {
            var a = m.isInternetExplorer.cached = typeof m.isInternetExplorer.cached != "undefined" ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
            return a
        }, m.options.html4Mode ? m.emulated = {pushState: !0, hashChange: !0} : m.emulated = {pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)), hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)}, m.enabled = !m.emulated.pushState, m.bugs = {setHash: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)), safariPoll: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)), ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)}, m.isEmptyObject = function (a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !1;
            return !0
        }, m.cloneObject = function (a) {
            var b, c;
            return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
        }, m.getRootUrl = function () {
            var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
            if (d.location.port || !1)
                a += ":" + d.location.port;
            return a += "/", a
        }, m.getBaseHref = function () {
            var a = d.getElementsByTagName("base"), b = null, c = "";
            return a.length === 1 && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
        }, m.getBaseUrl = function () {
            var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
            return a
        }, m.getPageUrl = function () {
            var a = m.getState(!1, !1), b = (a || {}).url || m.getLocationHref(), c;
            return c = b.replace(/\/+$/, "").replace(/[^\/]+$/, function (a, b, c) {
                return /\./.test(a) ? a : a + "/"
            }), c
        }, m.getBasePageUrl = function () {
            var a = m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (a, b, c) {
                return /[^\/]$/.test(a) ? "" : a
            }).replace(/\/+$/, "") + "/";
            return a
        }, m.getFullUrl = function (a, b) {
            var c = a, d = a.substring(0, 1);
            return b = typeof b == "undefined" ? !0 : b, /[a-z]+\:\/\//.test(a) || (d === "/" ? c = m.getRootUrl() + a.replace(/^\/+/, "") : d === "#" ? c = m.getPageUrl().replace(/#.*/, "") + a : d === "?" ? c = m.getPageUrl().replace(/[\?#].*/, "") + a : b ? c = m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : c = m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
        }, m.getShortUrl = function (a) {
            var b = a, c = m.getBaseUrl(), d = m.getRootUrl();
            return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), b
        }, m.getLocationHref = function (a) {
            return a = a || d, a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : a.URL.indexOf("#") == -1 && a.location.href.indexOf("#") != -1 ? a.location.href : a.URL || a.location.href
        }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function () {
            m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
        }, m.getState = function (a, b) {
            typeof a == "undefined" && (a = !0), typeof b == "undefined" && (b = !0);
            var c = m.getLastSavedState();
            return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
        }, m.getIdByState = function (a) {
            var b = m.extractId(a.url), c;
            if (!b) {
                c = m.getStateString(a);
                if (typeof m.stateToId[c] != "undefined")
                    b = m.stateToId[c];
                else if (typeof m.store.stateToId[c] != "undefined")
                    b = m.store.stateToId[c];
                else {
                    for (; ;) {
                        b = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof m.idToState[b] == "undefined" && typeof m.store.idToState[b] == "undefined")
                            break
                    }
                    m.stateToId[c] = b, m.idToState[b] = a
                }
            }
            return b
        }, m.normalizeState = function (a) {
            var b, c;
            if (!a || typeof a != "object")
                a = {};
            if (typeof a.normalized != "undefined")
                return a;
            if (!a.data || typeof a.data != "object")
                a.data = {};
            return b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && m.options.disableSuid !== !0 && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b
        }, m.createStateObject = function (a, b, c) {
            var d = {data: a, title: b, url: c};
            return d = m.normalizeState(d), d
        }, m.getStateById = function (a) {
            a = String(a);
            var c = m.idToState[a] || m.store.idToState[a] || b;
            return c
        }, m.getStateString = function (a) {
            var b, c, d;
            return b = m.normalizeState(a), c = {data: b.data, title: a.title, url: a.url}, d = k.stringify(c), d
        }, m.getStateId = function (a) {
            var b, c;
            return b = m.normalizeState(a), c = b.id, c
        }, m.getHashByState = function (a) {
            var b, c;
            return b = m.normalizeState(a), c = b.hash, c
        }, m.extractId = function (a) {
            var b, c, d, e;
            return a.indexOf("#") != -1 ? e = a.split("#")[0] : e = a, c = /(.*)\&_suid=([0-9]+)$/.exec(e), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
        }, m.isTraditionalAnchor = function (a) {
            var b = !/[\/\?\.]/.test(a);
            return b
        }, m.extractState = function (a, b) {
            var c = null, d, e;
            return b = b || !1, d = m.extractId(a), d && (c = m.getStateById(d)), c || (e = m.getFullUrl(a), d = m.getIdByUrl(e) || !1, d && (c = m.getStateById(d)), !c && b && !m.isTraditionalAnchor(a) && (c = m.createStateObject(null, null, e))), c
        }, m.getIdByUrl = function (a) {
            var c = m.urlToId[a] || m.store.urlToId[a] || b;
            return c
        }, m.getLastSavedState = function () {
            return m.savedStates[m.savedStates.length - 1] || b
        }, m.getLastStoredState = function () {
            return m.storedStates[m.storedStates.length - 1] || b
        }, m.hasUrlDuplicate = function (a) {
            var b = !1, c;
            return c = m.extractState(a.url), b = c && c.id !== a.id, b
        }, m.storeState = function (a) {
            return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
        }, m.isLastSavedState = function (a) {
            var b = !1, c, d, e;
            return m.savedStates.length && (c = a.id, d = m.getLastSavedState(), e = d.id, b = c === e), b
        }, m.saveState = function (a) {
            return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
        }, m.getStateByIndex = function (a) {
            var b = null;
            return typeof a == "undefined" ? b = m.savedStates[m.savedStates.length - 1] : a < 0 ? b = m.savedStates[m.savedStates.length + a] : b = m.savedStates[a], b
        }, m.getCurrentIndex = function () {
            var a = null;
            return m.savedStates.length < 1 ? a = 0 : a = m.savedStates.length - 1, a
        }, m.getHash = function (a) {
            var b = m.getLocationHref(a), c;
            return c = m.getHashByUrl(b), c
        }, m.unescapeHash = function (a) {
            var b = m.normalizeHash(a);
            return b = decodeURIComponent(b), b
        }, m.normalizeHash = function (a) {
            var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
            return b
        }, m.setHash = function (a, b) {
            var c, e;
            return b !== !1 && m.busy() ? (m.pushQueue({scope: m, callback: m.setHash, args: arguments, queue: b}), !1) : (m.busy(!0), c = m.extractState(a, !0), c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(), m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a), m)
        }, m.escapeHash = function (b) {
            var c = m.normalizeHash(b);
            return c = a.encodeURIComponent(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
        }, m.getHashByUrl = function (a) {
            var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return b = m.unescapeHash(b), b
        }, m.setTitle = function (a) {
            var b = a.title, c;
            b || (c = m.getStateByIndex(0), c && c.url === a.url && (b = c.title || m.options.initialTitle));
            try {
                d.getElementsByTagName("title")[0].innerHTML = b.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (e) {
            }
            return d.title = b, m
        }, m.queues = [], m.busy = function (a) {
            typeof a != "undefined" ? m.busy.flag = a : typeof m.busy.flag == "undefined" && (m.busy.flag = !1);
            if (!m.busy.flag) {
                h(m.busy.timeout);
                var b = function () {
                    var a, c, d;
                    if (m.busy.flag)
                        return;
                    for (a = m.queues.length - 1; a >= 0; --a) {
                        c = m.queues[a];
                        if (c.length === 0)
                            continue;
                        d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay)
                    }
                };
                m.busy.timeout = g(b, m.options.busyDelay)
            }
            return m.busy.flag
        }, m.busy.flag = !1, m.fireQueueItem = function (a) {
            return a.callback.apply(a.scope || m, a.args || [])
        }, m.pushQueue = function (a) {
            return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
        }, m.queue = function (a, b) {
            return typeof a == "function" && (a = {callback: a}), typeof b != "undefined" && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
        }, m.clearQueue = function () {
            return m.busy.flag = !1, m.queues = [], m
        }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function () {
            return m.stateChanged = !0, m.doubleCheckClear(), m
        }, m.doubleCheckClear = function () {
            return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
        }, m.doubleCheck = function (a) {
            return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function () {
                return m.doubleCheckClear(), m.stateChanged || a(), !0
            }, m.options.doubleCheckInterval)), m
        }, m.safariStatePoll = function () {
            var b = m.extractState(m.getLocationHref()), c;
            if (!m.isLastSavedState(b))
                return c = b, c || (c = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m;
            return
        }, m.back = function (a) {
            return a !== !1 && m.busy() ? (m.pushQueue({scope: m, callback: m.back, args: arguments, queue: a}), !1) : (m.busy(!0), m.doubleCheck(function () {
                m.back(!1)
            }), n.go(-1), !0)
        }, m.forward = function (a) {
            return a !== !1 && m.busy() ? (m.pushQueue({scope: m, callback: m.forward, args: arguments, queue: a}), !1) : (m.busy(!0), m.doubleCheck(function () {
                m.forward(!1)
            }), n.go(1), !0)
        }, m.go = function (a, b) {
            var c;
            if (a > 0)
                for (c = 1; c <= a; ++c)
                    m.forward(b);
            else {
                if (!(a < 0))
                    throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (c = -1; c >= a; --c)
                    m.back(b)
            }
            return m
        };
        if (m.emulated.pushState) {
            var q = function () {
            };
            m.pushState = m.pushState || q, m.replaceState = m.replaceState || q
        } else
            m.onPopState = function (b, c) {
                var d = !1, e = !1, f, g;
                return m.doubleCheckComplete(), f = m.getHash(), f ? (g = m.extractState(f || m.getLocationHref(), !0), g ? m.replaceState(g.data, g.title, g.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (d = m.Adapter.extractEventData("state", b, c) || !1, d ? e = m.getStateById(d) : m.expectedStateId ? e = m.getStateById(m.expectedStateId) : e = m.extractState(m.getLocationHref()), e || (e = m.createStateObject(null, null, m.getLocationHref())), m.expectedStateId = !1, m.isLastSavedState(e) ? (m.busy(!1), !1) : (m.storeState(e), m.saveState(e), m.setTitle(e), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
            }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function (b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy())
                    return m.pushQueue({scope: m, callback: m.pushState, args: arguments, queue: e}), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            }, m.replaceState = function (b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy())
                    return m.pushQueue({scope: m, callback: m.replaceState, args: arguments, queue: e}), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            };
        if (f) {
            try {
                m.store = k.parse(f.getItem("History.store")) || {}
            } catch (v) {
                m.store = {}
            }
            m.normalizeStore()
        } else
            m.store = {}, m.normalizeStore();
        m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))), f && (m.onUnload = function () {
            var a, b, c;
            try {
                a = k.parse(f.getItem("History.store")) || {}
            } catch (d) {
                a = {}
            }
            a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
            for (b in m.idToState) {
                if (!m.idToState.hasOwnProperty(b))
                    continue;
                a.idToState[b] = m.idToState[b]
            }
            for (b in m.urlToId) {
                if (!m.urlToId.hasOwnProperty(b))
                    continue;
                a.urlToId[b] = m.urlToId[b]
            }
            for (b in m.stateToId) {
                if (!m.stateToId.hasOwnProperty(b))
                    continue;
                a.stateToId[b] = m.stateToId[b]
            }
            m.store = a, m.normalizeStore(), c = k.stringify(a);
            try {
                f.setItem("History.store", c)
            } catch (e) {
                if (e.code !== DOMException.QUOTA_EXCEEDED_ERR)
                    throw e;
                f.length && (f.removeItem("History.store"), f.setItem("History.store", c))
            }
        }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload));
        if (!m.emulated.pushState) {
            m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval));
            if (e.vendor === "Apple Computer, Inc." || (e.appCodeName || "") === "Mozilla")
                m.Adapter.bind(a, "hashchange", function () {
                    m.Adapter.trigger(a, "popstate")
                }), m.getHash() && m.Adapter.onDomLoad(function () {
                    m.Adapter.trigger(a, "hashchange")
                })
        }
    }, (!m.options || !m.options.delayInit) && m.init()
}(window);
var app = app || {};
(function () {
    window.console || function () {
        var a = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
        window.console = {};
        for (var b = 0; b < a.length; ++b)
            window.console[a[b]] = function () {
            }
    }(), Object.append(app, new Events), Object.append(app, {addOnceEvent: function (a, b) {
        var c = this, d = function () {
            try {
                b.apply(c, arguments)
            } finally {
                c.removeEvent(a, d)
            }
        };
        this.addEvent(a, d)
    }}), Object.append(app, {parsePinUrl: function (a) {
        var b = app.host || "huaban.com", c = new RegExp("(http)?:\\/\\/" + b + "/(shiji/)?pins/(\\d+)/?"), d = a.match(c);
        return d ? d[3].toInt() : !1
    }}), app.isRetinaDisplay = function () {
        if (window.matchMedia) {
            var a = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
            return a && a.matches || window.devicePixelRatio > 1.3 ? !0 : !1
        }
    }(), app.COMMON_ERRMSG = "网络错误，请稍候再试", app.currentUrl = location.href;
    var a = window.navigator.userAgent.toLowerCase();
    Browser.anquan360 = a.indexOf("360se") > -1, Browser.jisu360 = a.indexOf("360ee") > -1, Browser.qq = a.indexOf("qqbrowser") > -1, Browser.sougou = a.indexOf("metasr") > -1, Browser.maxthon = a.indexOf("maxthon") > -1, !navigator.userAgent.match(/Trident.*rv[ :]*11\./) || (Browser.ie = Browser.ie11 = !0, Browser.version = 11), Browser.isMobile = function () {
        var a = navigator.userAgent.toLowerCase();
        a = a.toLowerCase();
        var b = !!a.match(/ip(?:ad|od|hone)/), c = !!a.match(/ipad/), d = !!a.match(/(?:android)/), e = a.match(/(ucbrowser|mobile|ucweb)/g), f = a.match(/(Windows Phone)/g), g = a.match(/(MI PAD)/gi);
        return (b || d || e || f) && !c && !g
    }(), "undefined" != typeof document.referrer && !~document.referrer.indexOf(app.host) && Cookie.write("wft", "1"), window.addEvent("domready", function () {
        window.docScroller = new Fx.Scroll(document.body), app.view = app.view || $("page");
        var a = document.id("elevator_item"), b = document.id("elevator"), c = document.getElement(".add-board-item"), d = !1;
        app.req.user && app.req.user.status && app.req.user.status.designer && (d = !0);
        if (a) {
            document.id("bookmarklet") && a.hide(), window.addEvent("scroll", function (a) {
                window.getScrollTop() > 200 ? b.removeClass("off") : b.addClass("off")
            });
            var e = a.getElement(".plus"), f = a.getElement(".plus-popup");
            new MenuController({menu: f, trigger: e, showupDelay: 100})
        }
        if (b) {
            var g = new Fx.Scroll(window, {duration: "short"});
            b.addEvent("click", function () {
                g.toTop()
            })
        }
        c && c.addEvent("click", function (a) {
            app.requireLogin(function () {
                app.showDialogBox("create_board", {is_designer: d})
            })
        }), function () {
            $$(".ts-words").each(function (a) {
                var b = a.retrieve("PinTime");
                if (!b) {
                    var c = a.get("data-ts");
                    if (!c)
                        return;
                    b = new Date(c.toInt() * 1e3), a.store("PinTime", b)
                }
                var d = new Date;
                if (d - b > 2592e6)
                    return;
                a.set("html", b.timeAgo())
            })
        }.periodical(6e4)
    })
})(), String.implement("stripScripts", function (a) {
    var b = "", c = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function (a, c) {
        return b += ";" + c + "\n", ""
    });
    return a === !0 ? Browser.exec(b) : typeOf(a) == "function" && a(b, c), c
}), Element.implement({mouseOver: function (a) {
    var b = this.getCoordinates();
    return a.x > b.left && a.x < b.right && a.y < b.bottom && a.y > b.top
}, setStyles: function (a, b) {
    b && this.store("styles:_old", this.getStyles(Object.keys(a)));
    for (var c in a)
        this.setStyle(c, a[c]);
    return this
}, restoreStyles: function () {
    var a = this.retrieve("styles:_old");
    return a ? (this.erase("styles:_old"), this.setStyles(a)) : this
}, absolutize: function () {
    var a = this.getStyle("position");
    if (a === "absolute")
        return this;
    var b = this.getParent();
    while (b && ["relative", "fixed", "absolute"].indexOf(b.getStyle("position")) == -1)
        b = b.getParent();
    b = b || document.body;
    var c = this.getCoordinates(b), d = c.top, e = c.left;
    if (a === "relative" || a === "static") {
        var f = (new Element("div")).setStyles({position: a, width: c.width, height: c.height}).inject(this, "after");
        this.store("absolutize:placeholder", f)
    } else {
        var g = (a === "fixed" ? window : b).getScroll();
        d += g.y, e += g.x
    }
    return this.setStyles({position: "absolute", top: d, left: e, width: c.width, margin: 0}, !0), this
}, unabsolutize: function () {
    this.restoreStyles();
    var a = this.retrieve("absolutize:placeholder");
    return a && a.destroy(), this
}, fadeAndDestroy: function (a) {
    a = a || 600;
    var b = this;
    this.set("tween", {duration: a}).fade("out").get("tween").chain(function () {
        b.dispose()
    })
}}), function () {
    Object.append(app, {templates: {}, _tplLoading: {}, $revisions: {}, $rev: function (a) {
        return this.$revisions[a] || Math.floor((new Date).getTime() / 1e3)
    }, loadTemplate: function (a, b) {
        var c = this.templates[a];
        if (c)
            return b(c);
        var d = a, e = a.split("/");
        e.length > 1 && (e.pop(), d = e.join("_"));
        var f = this, g = function () {
            b(f.templates[a])
        };
        this._tplLoading[d] ? this._tplLoading[d].push(g) : this._tplLoading[d] = [g];
        var h = "/js/views_" + d + ".js";
        new Asset.javascript(h + "?" + this.$rev(h) + ".js", {onLoad: function () {
            setTimeout(function () {
                var a = f._tplLoading[d];
                delete f._tplLoading[d];
                for (var b = 0, c = a.length; b < c; b++)
                    a[b].call()
            }, 10)
        }})
    }, render: function (a, b, c) {
        var d = null;
        typeOf(b) === "function" ? (c = b, b = this) : typeOf(b) === "element" && (d = b, b = this);
        var e = this;
        this.loadTemplate(a, function (a) {
            var f = a ? a.call(e, b || e) : "";
            d ? f.stripScripts(function (a, b) {
                d.set("html", b), a && Browser.exec(a), c && (f = c(a, b))
            }) : c && f.stripScripts(c)
        })
    }, renderSync: function (a, b) {
        var c = this.templates[a];
        return c ? c.call(this, b || this) : ""
    }, renderElements: function (a, b, c) {
        var d = app.renderSync(a, b), e = null;
        return d.stripScripts(function (a, b) {
            e = Elements.from(b), c && (e.inject(c), Browser.exec(a))
        }), e
    }})
}();
var Cache = new Class({Implements: [Options], options: {duration: 60, capcity: 100}, initialize: function (a) {
    this.setOptions(a), this.data = {}
}, set: function (a, b, c) {
    return this.data[a] = {key: a, value: b, expires: this.calculateDuration(c || this.options.duration), duration: c || this.options.duration, lastAccess: Date.now()}, this.isFull() && this.purge.delay(200, this), this
}, get: function (a) {
    var b = this.data[a];
    if (!b)
        return null;
    var c = Date.now();
    return b.expires <= c ? (this.clear(a), null) : (b.lastAccess = c, b.value)
}, getLength: function () {
    return Object.getLength(this.data)
}, isFull: function () {
    return this.getLength() >= this.options.capcity
}, load: function (a, b) {
    for (var c in a)
        a.hasOwnProperty(c) && this.set(c, a[c])
}, clear: function (a) {
    return a ? delete this.data[a] : this.data = {}, this
}, calculateDuration: function (a) {
    return a * 1e3 + Date.now()
}, purge: function () {
    var a = [], b = Date.now();
    Object.each(this.data, function (c, d) {
        c.expires <= b ? this.clear(d) : a.push(c)
    }), a.sort(function (a, b) {
        return b.lastAccessed - a.lastAccessed
    });
    while (a.length > this.options.capcity) {
        var c = a.pop();
        this.clear(c.key)
    }
}});
(function (a) {
    function k() {
        f.getStyle("display") != "none" && !i && (i = (new Element("div#loading_unit")).fade("hide").inject(f), (new Element("h1", {html: "页面加载中"})).inject(i), (new Element(".progress")).inject(i), (new Element("a.go", {html: "点此手动跳转", href: a.location.href})).inject(i), i.fade("in"))
    }

    var b = a.History;
    if (!b.enabled)
        return !1;
    b.unescapeString = function (a) {
        return a
    };
    var c = 100, d = app.$pageCache = new Cache({duration: 900, capcity: Browser.ie ? 4 : 10}), e = app.scheme + "://" + app.host, f, g, h, i, j = null, l = function (a) {
        if (!g) {
            g = setTimeout(l, a);
            return
        }
        g = null, h || (h = new Fx.Tween(f, {duration: 1e3})), f.show(), h.chain(function () {
            k.delay(1e3)
        }).set("opacity", 0).start("opacity", 1)
    }, m = function () {
        g && clearTimeout(g), g = null, h && h.stop(), f.hide(), i && (i.destroy(), i = null)
    }, n = function (b) {
        document.title = "加载中...", l(100), (new Request.JSON({url: b, noCache: !0, onSuccess: function (a) {
            if (a.err)
                return location.href = b;
            var c = Object.append({$url: b}, a);
            o(c)
        }, onFailure: function () {
            a.location.href = b
        }})).get()
    }, o = function (b) {
        m(), app.page.$waterfall && app.page.$waterfall.detach(), app.page.$header && app.page.$header.detach(), app.page.$navigator && app.page.$navigator.detach(), app.page.isOrganizing && app.page.isOrganizing.fireEvent("click"), app.page.msgCloseTimeout && clearTimeout(app.page.msgCloseTimeout), app._currentSheet && app.hideSheet(), app.page.dmController && app.page.dmController.hide(), document.body.setStyle("overflow", ""), app.view.dispose(), app.page.$view || (app.page.$waterfall && app.page.$waterfall.destroy(), app.view.destroy()), app.page = b;
        if (b.$view)
            app.view = b.$view, app.view.inject(document.body, "top"), b.$waterfall && b.$waterfall.attach(), b.$header && b.$header.attach(), b.$navigator && b.$navigator.attach(), app.setTitle();
        else {
            app.view = (new Element("div", {id: "page"})).inject(document.body, "top");
            var c = b.$url;
            app.route(c), app.setTitle()
        }
        b.$scroll && a.scrollTo(b.$scroll.x, b.$scroll.y), app.fireEvent("switchPage", {url: b.$url})
    }, p = function (e) {
        if (b.savedStates.length > c) {
            a.location.href = e;
            return
        }
        var f = d.get(e), g = b.getState();
        if (j && j[g.id])
            return j[g.id](g);
        if (j && j[e])
            return j[e](g);
        f ? o(f) : n(e)
    };
    app.addEvent("switchPage", function (b) {
        a.ga && a._trackPageview && a._trackPageview()
    });
    var q = !0, r = document.title;
    b.Adapter.bind(a, "statechange", function () {
        var a = b.getState(), c = "/" + a.url.replace(e, "").replace(/^\//, ""), d = new URI(c);
        q && !document.title && (document.title = r, q = !1);
        if (app.currentUrl == d.toString())
            return;
        return app.currentUrl = location.href, p(c)
    }), Object.append(app, {onRoute: function () {
        app.page.$waterfall && (app.page.$view = app.view, d.set(app.page.$url, app.page)), app.setTitle(), a.scrollTo(0, 0)
    }, reload: function () {
        n(app.page.$url)
    }, redraw: function () {
        var a = app.page;
        delete a.$view, o(a)
    }, setTitle: function (a) {
        return a = a || app.page.title || History.options.initialTitle, b.setTitle({title: a}), this
    }, registerStateHandler: function (a, b) {
        return j = j || {}, j[a] = b, this
    }, removeStateHandler: function (a) {
        return j && delete j[a], this
    }, getState: function (a) {
        return "undefined" == typeof a ? b.getState() : b.getStateByIndex(a)
    }, replaceState: function (a, c, d) {
        return d = "/" + d.replace(e, "").replace(/^\//, ""), b.replaceState(a, c, d), this
    }, pushState: function (a, c, d) {
        return d = "/" + d.replace(e, "").replace(/^\//, ""), b.pushState(a, c, d), this
    }, popState: function () {
        return this.back()
    }, go: function (a) {
        return this.pushState(null, null, a)
    }, back: function () {
        return b.back(), b.Adapter.trigger(a, "popstate"), this
    }, forward: function () {
        return b.forward(), b.Adapter.trigger(a, "popstate"), this
    }, setPinView: function (a) {
        if (app.page.noPinViewLayer)
            return;
        var b = app.getState().id;
        if (!app.$pinViewState || app.$pinViewState.url !== app.page.$url)
            j = null, d.clear(), d.set(app.page.$url, app.page), app.$pinViewState = {id: b, url: app.page.$url, states: []};
        var c = function (a) {
            var b = a.hash.match(/pins\/(\d+)\//), c = b && b[1];
            app.$pinViewState.url == app.page.$url && app.$pinViewState.id == a.id ? (app.hidePinViewLayer(), app.fireEvent("switchPage")) : app.$pinViewState.url == app.page.$url && c ? (l(100), app.showPinViewLayer(c, function () {
                m(), app.fireEvent("switchPage")
            })) : d.get(app.$pinViewState.url) ? o(d.get(app.$pinViewState.url)) : n(a.hash)
        };
        app.registerStateHandler("/pins/" + a + "/", c), app.registerStateHandler(b, c)
    }}), a.addEvent("domready", function () {
        app._firstOnRoute || (app._firstOnRoute = !0, app.onRoute()), f = document.id("page_overlay");
        var b = Cookie.read("_is_qplus");
        $(document.body).addEvent("click:relay(a.x)", function (c) {
            if (!app._csr || c.meta || c.control || c.shift || c.alt || c.event.button !== 0 || app.page.nox)
                return !0;
            var d = c.target;
            d.get("tag") !== "a" && (d = d.getParent("a"));
            var e = d.get("href");
            e && e.test(/^\/message\//) && (app._prepath = location.pathname);
            if (e) {
                if (Browser.isMobile)
                    return !0;
                if (Browser.ie && Browser.version < 9 && !b) {
                    if (e.test(/^(https?:\/\/[a-z0-9-_\.]+)?\/pins\/\d+\/?/g) && !d.hasClass("self")) {
                        c.stop();
                        var f = a.open(e, "_blank");
                        try {
                            f.focus()
                        } catch (c) {
                        }
                        return !1
                    }
                } else if (e.indexOf("/") === 0 && app.getRouter(e)) {
                    if (d.hasClass("layer-view")) {
                        var g = e.match(/^\/pins\/(\d+)\//), h = g && g[1];
                        h && app.setPinView(h)
                    }
                    return c.stop(), app.go(e), !1
                }
            }
            return !0
        })
    }), a.addEvent("scroll", function () {
        if (!app.page)
            return;
        try {
            var b = a.getScroll();
            app.page.$scroll = b
        } catch (c) {
        }
    })
})(window), Object.append(app, {showSheet: function (a, b) {
    b = b || {};
    var c = "dialog/sheet_" + a;
    if (this._currentSheet && this._currentSheet.retrieve("sheet_id") == c)
        return this._currentSheet;
    var d = this[c];
    d || this.render(c, b, function (a, b) {
        var e = (new Element("div")).set("html", b);
        d = this[c] = e.getFirst().hide().inject(this.view), d.store("sheet_id", c), a && Browser.exec(a)
    }.bind(this)), this.hideSheet(), this._fixFlashLayer(), this._currentSheet = d;
    var e = this, f = function () {
        var a = app.page.$header ? app.page.$header.element : document.id("header"), c = a && a.getStyle("position") != "static" ? a.getCoordinates() : {bottom: 0}, f = d.setStyle("top", -1e3).show().getHeight();
        if (b.modal) {
            var g = d.retrieve("sheet:overlay");
            g || (g = (new Element("div", {"class": "sheet-overlay"})).inject(d, "before"), d.store("sheet:overlay", g)), g.set("tween", {duration: "short"}).fade("hide").fade("in")
        }
        d.set("tween", {duration: "short"}).tween("top", c.bottom - f, c.bottom).get("tween").chain(function () {
            var a = d.retrieve("onShow");
            "function" == typeof a && a.apply(e, Array.prototype.slice.call(arguments, 1))
        })
    };
    f(), Browser.ie6 && docScroller.toTop();
    var g = document.getElement(".registration-tip");
    g && g.fade("out");
    var h = document.getElement(".dialog-boxes");
    return h && h.getStyle("display") == "block" && d.setStyle("z-index", 99999), d
}, hideSheet: function (a) {
    this._fixFlashLayer(!0);
    var b = this._currentSheet;
    if (b) {
        var c = this, d = app.page.$header ? app.page.$header.element : document.id("header"), e = d ? d.getCoordinates() : {bottom: 0}, f = b.retrieve("sheet:overlay"), g = b.hasClass("destroy");
        return f && f.set("tween", {duration: "short"}).fade("out").get("tween").chain(function () {
            f.hide(), g && f.destroy()
        }), b.set("tween", {duration: "short"}).tween("top", e.bottom, e.bottom - b.getHeight()).get("tween").chain(function () {
            var d = b.retrieve("onHide");
            b.hide(), b.hasClass("destroy") && (delete c[b.retrieve("sheet_id")], b.destroy()), delete c._currentSheet, "function" == typeof d && d.apply(c, Array.prototype.slice.call(arguments, 1));
            var e = [];
            "function" == typeof a ? a() : "undefined" != typeof a && e.push(a), app.fireEvent("hideSheet", e)
        }), !0
    }
}, _fixFlashLayer: function (a) {
    var b = document.id("_huaban_FixFlashStyle");
    if (a)
        return b && b.destroy();
    if (!b) {
        var b = new Element("style", {id: "_huaban_FixFlashStyle"}), c = "object, embed {visibility: hidden}";
        (document.getElement("head") || document.body).grab(b), Browser.ie ? b.styleSheet.cssText = c : b.set("text", c)
    }
}, showDialog: function (a) {
    this.hideDialog();
    var b = "dialog/dialog_" + a;
    this[b] || this.render(b, function (a, c) {
        var d = (new Element("div")).set("html", c), e = this[b] = d.getFirst().inject(this.view);
        e.store("dialog_id", b), a && Browser.exec(a)
    }.bind(this)), this._fixFlashLayer(), this[b].show(), this._currentDialog = this[b];
    var c = this[b].retrieve("onShow");
    return "function" == typeof c && c.apply(this, Array.prototype.slice.call(arguments, 1)), this[b]
}, hideDialog: function () {
    this._fixFlashLayer(!0);
    var a = this._currentDialog;
    if (a)
        return a.hide(), a.hasClass("destroy") && (delete this[a.retrieve("dialog_id")], a.destroy()), delete this._currentDialog, !0
}, renderDialogBox: function (a, b) {
    app.dialogBoxes = app.dialogBoxes || {}, app.dialogBoxes.currents = app.dialogBoxes.currents || [];
    var c = app.view.getChildren(".dialog-boxes")[0], d = this;
    c || (c = (new Element("div.dialog-boxes")).inject(app.view), c.addEvent("click:relay(.dialog-overlay, .close-btn)", function (a) {
        d.hideDialogBox(), a.stop()
    })), c.show(), b && app.dialogBoxes[a] && (app.dialogBoxes[a].destroy(), delete app.dialogBoxes[a]);
    if (!app.dialogBoxes[a]) {
        var e = app.renderSync("dialog_box/" + a, b || {});
        app.dialogBoxes[a] = Elements.from(e).inject(c), e.stripScripts(!0)
    } else
        app.dialogBoxes[a].show()
}, showDialogBox: function (a, b) {
    return (b || !app.dialogBoxes || !app.dialogBoxes[a]) && this.renderDialogBox(a, b), app.dialogBoxes[a].show(), app.dialogBoxes.currents.push(a), app.dialogBoxes[a]
}, hideDialogBox: function (a) {
    if (!app.dialogBoxes)
        return !1;
    if (!a && !app.dialogBoxes.currents.length)
        return !1;
    if (!a)
        a = app.dialogBoxes.currents.pop();
    else {
        var b = app.dialogBoxes.currents.indexOf(a);
        ~b && app.dialogBoxes.currents.splice(b, 1)
    }
    var c = !1, d = app.dialogBoxes[a];
    return d && d.getStyle("display") != "none" && (d.hide().fireEvent("hide"), c = !0), c
}, hideAllDialogBox: function () {
    if (!app.dialogBoxes || !app.dialogBoxes.currents.length)
        return !1;
    var a = !1, b = app.dialogBoxes.currents, c;
    for (var d = 0; d < b.length; d++)
        c = app.dialogBoxes[b[d]], c.getStyle("display") != "none" && (c.hide().fireEvent("hide"), a = !0);
    return app.dialogBoxes.currents = [], a
}, requireCaptcha: function (a) {
    return app.$captcha_callback = a, app.showSheet("comment_captcha", {modal: !0}), !1
}, requireLogin: function (a, b) {
    if (app.req.user)
        return a && a(), !0;
    a ? (Object.append(a, b || {redraw: !0}), app.$login_callback = a) : b && (app.$login_callback = b), app.loginFrame ? app.loginFrame.inject(app.view) : app.render("base/login_frame", "", function (a, b) {
        app.loginFrame = Elements.from(b)[0].inject(app.view), a && Browser.exec(a)
    });
    var c = b && b.to || "signup";
    return app.loginFrame.switchTo(c), !1
}, showUploadDialog: function () {
    app.requireLogin(function () {
        app.showDialogBox("upload", !0)
    })
}, forceLogin: function () {
    return app.req.user ? !0 : (app.showSheet("login", {modal: !0}), !1)
}, msg: function (a, b) {
    var c = Object.append({text: a, type: "success", timeout: 3e3}, b), d = document.id("floating_notice_box") || (new Element("#floating_notice_box")).inject(document.body, "top");
    return app.renderElements("base/floating_notice", c, d), this
}, error: function (a, b) {
    typeof a != "object" && (a = {text: a});
    var c = Object.append({title: "错误", type: "error"}, a);
    return app.alert(c, b)
}, alert: function (a, b) {
    typeof a != "object" && (a = {text: a});
    var c = Object.append({text: "", title: "", type: "caution", action: "确定", cancelButton: !1, closeButton: !0}, a), d = app.showDialogBox("alert", c);
    return b && d.addEvent("confirm", b), this
}, confirm: function (a, b) {
    typeof a != "object" && (a = {text: a});
    var c = Object.append({cancelButton: !0}, a);
    app.alert(c, b)
}, showTip: function (a, b, c) {
    c = Object.append({arrow: "left"}, c);
    var d = c.offset || {x: 15, y: 0}, e = a.retrieve("hb:tip");
    e || (e = (new Element("div", {"class": "msgr"})).inject(a, "after"), e.set("html", '<span class="txt"></span><span class="arrow">◣</span><span class="arrow-mask"></span>'), a.store("hb:tip", e)), e.getElement("span.txt").set("html", b), c.arrow == "left" && e.addClass("left-arrow"), c.width && e.setStyle("width", c.width), e.position({relativeTo: a, position: "upperRight", edge: "upperLeft", offset: d}), e.show()
}, hideTip: function (a) {
    var b = a.retrieve("hb:tip");
    if (!b)
        return;
    b.hide()
}, initGifButtons: function () {
    var a = {buttonSelector: ".gif-icon"};
    app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[a.buttonSelector])
        return;
    app.view.$initialized[a.buttonSelector] = !0, app.view.addEvent("click:relay(" + a.buttonSelector + ")", function (a) {
        a.stop();
        var b = this, c = b.getSiblings("img"), d = b.getParent("a.img.layer-view"), e = b.getElement(".gif-loading"), f = c.get("src")[0];
        b.getSiblings(".cover").addClass("remove-cover");
        if (b.hasClass("gif-stop"))
            b.removeClass("gif-stop"), c.set("src", app.gifURL(f)), d.removeClass("gif");
        else {
            b.addClass("gif-load"), e.setStyle("display", "inline-block");
            var g = app.gifURL(f), h = Asset.image(g, {onLoad: function () {
                c.set("src", g), d.addClass("gif"), b.removeClass("gif-load").addClass("gif-stop"), e.setStyle("display", "none")
            }})
        }
    })
}, initFollowButtons: function () {
    app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[".follow,.unfollow"])
        return;
    app.view.$initialized[".follow,.unfollow"] = !0, app.view.addEvent("click:relay(.follow,.unfollow)", function (a) {
        function e() {
            b.hasClass("unfollow") ? (d.setTitle("取消..."), (new Request.JSON({url: "/boards/" + c + "/unfollow/", onSuccess: function (a) {
                if (a.err)
                    return d.setTitle("已关注"), app.error(a.msg || app.COMMON_ERRMSG);
                b.removeClass("unfollow").addClass("follow"), d.setTitle("关注").enable()
            }})).post()) : (d.setTitle("关注..."), (new Request.JSON({url: "/boards/" + c + "/follow/", onSuccess: function (a) {
                if (a.err)
                    return d.setTitle("关注"), app.error(a.msg || app.COMMON_ERRMSG);
                b.addClass("unfollow").removeClass("follow"), d.setTitle("已关注").enable()
            }})).post())
        }

        a.stop();
        var b = this, c = b.get("data-id"), d = (new Button(b)).disable();
        return app.req.user ? e() : (app.requireLogin(function () {
            b = app.view.getElement("a[data-id=" + c + "].follow"), b ? e() : app.error("这个画板是你自己的")
        }), !1)
    })
}, initFollowExploreButtons: function (a) {
    function c(a, b) {
        (new Request.JSON({url: "/explore/" + a + "/follow/", onSuccess: b})).post()
    }

    function d(a, b) {
        (new Request.JSON({url: "/explore/" + a + "/unfollow/", onSuccess: b})).post()
    }

    var b = {buttonSelector: ".follow-explore", unfollowButtonClass: "unfollow-explore", onFollowSuccess: function () {
    }, onUnfollowSuccess: function () {
    }};
    Object.append(b, a), app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[b.buttonSelector])
        return;
    app.view.$initialized[b.buttonSelector] = !0, app.view.addEvent("click:relay(" + b.buttonSelector + ")", function (a) {
        a.stop();
        var e = this, f = this.get("data-urlname");
        if (e.hasClass("disabled"))
            return;
        e.addClass("disabled"), app.requireLogin(function () {
            e.hasClass(b.unfollowButtonClass) ? (e.addClass("unfollow-explore"), d(f, function (a) {
                e.removeClass("disabled");
                if (a.err)
                    return app.error(a.msg || "操作失败");
                e.removeClass(b.unfollowButtonClass), b.onUnfollowSuccess(e, a)
            })) : c(f, function (a) {
                e.removeClass("disabled");
                if (a.err)
                    return app.error(a.msg || "操作失败");
                e.addClass(b.unfollowButtonClass), b.onFollowSuccess(e, a)
            })
        }, {reload: !0})
    })
}, initPureFollowBoardButtons: function (a) {
    function c(a, b) {
        (new Request.JSON({url: "/boards/" + a + "/follow/", onSuccess: b})).post()
    }

    function d(a, b) {
        (new Request.JSON({url: "/boards/" + a + "/unfollow/", onSuccess: b})).post()
    }

    var b = {buttonSelector: ".follow-board", unfollowButtonClass: "unfollow", onFollowSuccess: function () {
    }, onUnfollowSuccess: function () {
    }};
    Object.append(b, a), app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[b.buttonSelector])
        return;
    app.view.$initialized[b.buttonSelector] = !0, app.view.addEvent("click:relay(" + b.buttonSelector + ")", function (a) {
        a.stop();
        var e = this, f = this.get("data-id");
        if (e.hasClass("disabled"))
            return;
        e.addClass("disabled"), app.requireLogin(function () {
            e.hasClass(b.unfollowButtonClass) ? (e.addClass("unfollowing"), d(f, function (a) {
                e.removeClass("disabled unfollowing");
                if (a.err)
                    return app.error(a.msg || "操作失败");
                e.removeClass(b.unfollowButtonClass), b.onUnfollowSuccess(e, a)
            })) : (e.addClass("following"), c(f, function (a) {
                e.removeClass("disabled following");
                if (a.err)
                    return app.error(a.msg || "操作失败");
                e.addClass(b.unfollowButtonClass), b.onFollowSuccess(e, a)
            }))
        }, {reload: !0})
    })
}, initFollowUserButtons: function (a) {
    app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized["a.followuser,a.unfollowuser"])
        return;
    app.view.$initialized["a.followuser,a.unfollowuser"] = !0, app.view.addEvent("click:relay(a.followuser,a.unfollowuser)", function (b) {
        function f() {
            c.hasClass("unfollowuser") ? (e.setTitle("Unfollowing..."), (new Request.JSON({url: "/" + d + "/unfollow/", onSuccess: function (b) {
                if (b.err)
                    return e.setTitle("取消关注"), app.error(b.msg || app.COMMON_ERRMSG);
                c.removeClass("unfollowuser").removeClass("wbtn").addClass("followuser").addClass("rbtn"), e.setTitle("关注").enable(), a && a(c)
            }})).post()) : (e.setTitle("Following..."), (new Request.JSON({url: "/" + d + "/follow/", onSuccess: function (b) {
                if (b.err)
                    return e.setTitle("关注"), app.error(b.msg || app.COMMON_ERRMSG);
                c.addClass("unfollowuser").removeClass("followuser").removeClass("rbtn").addClass("wbtn"), e.setTitle("取消关注").enable(), a && a(c)
            }})).post())
        }

        var c = this, d = c.get("data-id"), e = (new Button(c)).disable();
        return app.req.user ? f() : (app.requireLogin(function () {
            c = app.view.getElement("a[data-id=" + d + "].followuser"), c ? f() : app.error("这就是你自己")
        }), !1)
    })
}, initPureFollowUserButtons: function (a) {
    function c(a, b) {
        (new Request.JSON({url: "/" + a + "/follow/", onSuccess: b})).post()
    }

    function d(a, b) {
        (new Request.JSON({url: "/" + a + "/unfollow/", onSuccess: b})).post()
    }

    var b = {buttonSelector: ".followuser", unfollowButtonClass: "unfollowuser", onFollowSuccess: function () {
    }, onUnfollowSuccess: function () {
    }};
    Object.append(b, a), app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[b.buttonSelector])
        return;
    app.view.$initialized[b.buttonSelector] = !0, app.view.addEvent("click:relay(" + b.buttonSelector + ")", function () {
        var a = this, e = this.get("data-urlname");
        if (a.hasClass("disabled"))
            return;
        a.addClass("disabled"), app.requireLogin(function () {
            a.hasClass(b.unfollowButtonClass) ? (a.addClass("unfollowing"), d(e, function (c) {
                a.removeClass("disabled unfollowing");
                if (c.err)
                    return app.error(c.msg || "操作失败");
                a.removeClass(b.unfollowButtonClass), b.onUnfollowSuccess(a, c)
            })) : (a.addClass("following"), c(e, function (c) {
                a.removeClass("disabled following");
                if (c.err)
                    return app.error(c.msg || "操作失败");
                a.addClass(b.unfollowButtonClass), b.onFollowSuccess(a, c)
            }))
        }, {reload: !0})
    })
}, initPureLikeButtons: function (a) {
    function c(a, b) {
        (new Request.JSON({url: "/pins/" + a + "/like/", onSuccess: b})).post()
    }

    function d(a, b) {
        (new Request.JSON({url: "/pins/" + a + "/unlike/", onSuccess: b})).post()
    }

    var b = {buttonSelector: ".laud-btn", unLikeButtonClass: "cancel", onLikeSuccess: function () {
    }, onUnLikeSuccess: function () {
    }};
    Object.append(b, a), app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[b.buttonSelector])
        return;
    app.view.$initialized[b.buttonSelector] = !0, app.view.addEvent("click:relay(" + b.buttonSelector + ")", function () {
        var a = this, e = this.get("data-id");
        if (a.hasClass("disabled"))
            return;
        a.addClass("disabled"), app.requireLogin(function () {
            a.hasClass(b.unLikeButtonClass) ? d(e, function (c) {
                a.removeClass("disabled");
                if (c.err)
                    return app.error(c.msg || "操作失败");
                a.removeClass(b.unLikeButtonClass), b.onUnLikeSuccess(a, c)
            }) : c(e, function (c) {
                a.removeClass("disabled");
                if (c.err)
                    return app.error(c.msg || "操作失败");
                a.addClass(b.unLikeButtonClass), b.onLikeSuccess(a, c)
            })
        }, {reload: !0})
    })
}, initLikeButtons: function () {
    app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized["a.like,a.unlike"])
        return;
    app.view.$initialized["a.like,a.unlike"] = !0, app.view.addEvent("click:relay(a.like,a.unlike)", function (a) {
        function f() {
            var a = (new Button(b)).disable(), f = d ? a.element.getElement(".text").get("text") : a.element.get("text"), g = f.toInt(), h = "赞", i = a.getTitle();
            ~i.indexOf("喜欢") && (h = "喜欢"), g = isNaN(g) ? 0 : g, b.hasClass("unlike") ? (a.setTitle("Unliking..."), (new Request.JSON({url: "/pins/" + c + "/unlike/", onSuccess: function (c) {
                b.removeClass("unlike").addClass("like"), g--;
                var d = g > 0 ? g + h : h;
                a.setTitle(d).enable(), e && e.removeClass("liked").innerHTML--
            }})).post()) : (a.setTitle("Liking..."), (new Request.JSON({url: "/pins/" + c + "/like/", onSuccess: function (c) {
                b.addClass("unlike").removeClass("like"), g++, a.setTitle(g + h).enable(), e && e.addClass("liked").innerHTML++
            }})).post())
        }

        var b = this, c = b.get("data-id"), d = this.getParent(".pin");
        if (d)
            var e = d.getElement(".commodity .likes");
        return app.req.user ? f() : (app.requireLogin(function () {
            b = app.view.getElement("a[data-id=" + c + "].like"), b ? f() : app.error("这个采集是你自己的")
        }), !1)
    })
}, initDelCommentButtons: function () {
    app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[".pin-view .info-piece .comments .delete"])
        return;
    app.view.$initialized[".pin-view .info-piece .comments .delete"] = !0, app.view.addEvent("click:relay(.pin-view .info-piece .comments .delete)", function (a) {
        if (!app.forceLogin())
            return;
        var b = a.target;
        b.get("tag") !== "a" && (b = b.getParent("a"));
        var c = b.get("data-url");
        return (new Request.JSON({url: c, data: {_method: "DELETE"}, onSuccess: function (a) {
            if (a.err)
                return app.error(a.msg || app.COMMON_ERRMSG);
            var c = b.getParent("div.comment");
            c && c.tween("opacity", 0).get("tween").chain(function () {
                c.destroy()
            })
        }})).post(), !1
    })
}, initReplyButtons: function () {
    app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized[".pin-view .comments .reply-button"])
        return;
    app.view.$initialized[".pin-view .comments .reply-button"] = !0, app.view.addEvent("click:relay(.pin-view .comments .reply-button)", function () {
        var a = this.get("data-name"), b = document.getElement("#pin_view_add_comment textarea");
        ~b.value.indexOf(a) || (b.value = "@" + a + " " + b.value), b.setCaretPosition("end").fireEvent("keyup")
    })
}, initAddCommentButtons: function () {
    function a(a) {
        var b = a.getParent("div.pin"), c = app.page.$waterfall, d = a.getParent(".waterfall");
        d && d.$waterfall && (c = d.$waterfall);
        if (a.hasClass("ani-affected"))
            return;
        a.addEvents({focus: function () {
            this.getParent(".write").addClass("focus"), c && c.update(b)
        }, blur: function () {
            this.value || this.getParent(".write").removeClass("focus"), c && c.update(b)
        }}).addClass("ani-affected"), window.document.activeElement == a && a.fireEvent("focus")
    }

    function b(a) {
        if (a.retrieve("registered-at"))
            return;
        new Autocompleter.Contacts.At(a, {width: 154, delay: 300})
    }

    function c() {
        function j() {
            (new Request.JSON({url: h, data: {text: g}, onSuccess: function (d) {
                function h(a) {
                    c.hide(), e.set("value", "");
                    var d = app.renderSync("base/comment_item_convo", a.comment), g = Elements.from(d).inject(f);
                    f.isDisplayed() || f.show(), g.highlight("#EEE");
                    var h = app.page.$waterfall;
                    h && h.update(b)
                }

                d.err && d.err == 412 ? (app.$form = {pinId: i, text: g}, app.requireCaptcha(h)) : d.err ? app.error(d.msg || app.COMMON_ERRMSG) : h(d), a.removeClass("disabled")
            }, onFailure: function () {
                app.error(app.COMMON_ERRMSG), a.removeClass("disabled")
            }})).post()
        }

        var a = this;
        if (a.hasClass("disabled"))
            return !1;
        var b = a.getParent("div.pin"), c = b.getElement("div.write"), d = c.getElement("form"), e = d.getElement("textarea"), f = c.getPrevious("div.comments"), g = e.get("value").trim();
        if (g == "" || g == "说说你的看法或@给好友")
            return e.highlight(), !1;
        var h = d.get("action"), i = b.get("data-id");
        return a.addClass("disabled"), app.req.user ? j() : (app.requireLogin(function () {
            b = app.view.getElement("div[data-id=" + i + "].pin");
            if (!b)
                return app.error("你不能评论这个采集");
            a = b.getElement("a.grid_comment_button"), c = b.getElement("div.write"), d = c.getElement("form"), e = d.getElement("textarea"), f = c.getPrevious("div.comments"), c.show(), e.set("value", g), j()
        }), !1)
    }

    app.view.$initialized = app.view.$initialized || {};
    if (app.view.$initialized["textarea.GridComment,a.comment,a.replyButton,.grid_comment_button"])
        return;
    app.view.$initialized["textarea.GridComment,a.comment,a.replyButton,.grid_comment_button"] = !0, app.view.addEvent("click:relay(textarea.GridComment)", function () {
        a(this), b(this)
    }), app.view.addEvent("click:relay(a.comment,a.replyButton)", function () {
        var c = this, d = c.getParent("div.pin"), e = d.getElement("div.write"), f = e.getElement("textarea"), g = app.page.$waterfall, h = this.getParent(".waterfall");
        h && h.$waterfall && (g = h.$waterfall), a(f), b(f);
        if (c.hasClass("disabled"))
            e.hide(), g && g.update(d), c.removeClass("disabled");
        else {
            e.show(), g && g.update(d), docScroller.chain(function () {
                try {
                    f.focus()
                } catch (a) {
                }
                f.highlight()
            }), d.getSize().y > document.html.clientHeight ? docScroller.toElementCenter(f, "y") : docScroller.toElement(d, "y");
            if (c.hasClass("replyButton")) {
                if (c.getParent(".attribution"))
                    return !1;
                var i = c.getSiblings(".content")[0].getElement(".author").innerHTML;
                f.value == f.get("placeholder") && (f.value = ""), ~f.value.indexOf(i) || (f.value = "@" + i + " " + f.value, f.setCaretPosition("end").fireEvent("keyup"))
            } else
                c.addClass("disabled")
        }
        return !1
    }), app.view.addEvent("click:relay(.grid_comment_button)", c)
}, initSearchForms: function (a, b) {
    document.getElements(a).each(function (a) {
        if (!a)
            return;
        if (a.getAttribute("data-regestered"))
            return;
        a.setAttribute("data-regestered", "regestered");
        var c = a.getElement("a.go"), d = a.getElement("input[name=q]"), e = d.get("placeholder");
        e && !Modernizr.input.placeholder && new Form.Placeholder(d, {color: b && b.placeholderColor});
        var f = function () {
            return d.get("value") ? !0 : (a.getAttribute("class") == "new-searching-unit" ? d.set("placeholder", "请输入你喜欢的关键词") : app.error("请输入搜索关键词"), !1)
        };
        a.addEvent("submit", function () {
            return f() ? !0 : !1
        }), c && c.addEvent("click", function (b) {
            b.stop();
            if (!f())
                return;
            a.submit()
        });
        var g = "", h = null, i = function (a) {
            var c = d.value.replace(/^\s+|$/g, "");
            h && h.isRunning() && h.cancel();
            if (c == g)
                return;
            g = c, c ? h = (new Request.JSON({url: "/search/hint/", data: {q: c, limit: b && b.hintLimit || 6}, onSuccess: function (a) {
                if (a.err)
                    return j.empty();
                var e = a.result.filter(function (a) {
                    return a != c
                }), f = app.renderSync("base/search_hint", {result: e}), g = d.getPosition().x - d.getParent().getParent().getPosition().x;
                j.innerHTML = f, j.setStyles({"min-width": d.getSize().x, left: g}), b && b.queryHintCallback && b.queryHintCallback(e)
            }})).get() : (j.empty(), b && b.queryHintCallback && b.queryHintCallback([]))
        }, j = new Element("div.search-hint");
        j.inject(a, "after"), d.set("autocomplete", "off");
        var k = function (a) {
            if (!j.getElements("li").length)
                return;
            var b = j.getElement(".active");
            if (b) {
                var c = a == "next" ? b.getNext("li") : b.getPrevious("li");
                c ? (c.addClass("active"), b.removeClass("active")) : (b.removeClass("active"), j.getElement(a == "next" ? "li:first-child" : "li:last-child").addClass("active"))
            } else
                j.getElement(a == "next" ? "li:first-child" : "li:last-child").addClass("active")
        };
        d.addEvents({keyup: i, click: i, keydown: function (a) {
            if (a.key == "down" || a.key == "up")
                return k(a.key == "down" ? "next" : "prev"), !1;
            if (!(!a.control || a.key != "n" && a.key != "p"))
                return k(a.key == "n" ? "next" : "prev"), !1;
            if (a.key == "tab") {
                var b = j.getElement(".active") || j.getElement("li");
                return b && (d.value = b.innerHTML), !1
            }
            if (a.key == "enter") {
                var c = j.getElement(".active");
                if (c)
                    return c.click(), !1
            }
        }}), $(document.body).addEvent("click", function (a) {
            a.target.getParent(".search-hint") || j.empty()
        }), j.addEvent("click:relay(li)", function () {
            d.value = this.innerHTML, j.empty(), c && c.click()
        }), j.addEvent("mouseenter:relay(li)", function () {
            this.addClass("active"), this.getSiblings().removeClass("active")
        })
    })
}, _gaq_promotion: function () {
    return;
    var a, b, c, d, e, f
}});
var Button = new Class({Implements: [Options, Class.Occlude], options: {}, property: "Button", initialize: function (a, b) {
    this.element = document.id(a);
    if (this.occlude())
        return this.occluded;
    this.setOptions(b), this.label = this.element.getElement("strong, span.text") || this.element, this.label && (this.title = this.label.get("text")), this.action = this.options.click ? this.options.click.bind(this) : !1, delete this.options.click, this.attach(), this.element.hasClass("disabled") && this.disable(), this.icon = this.element.getElement("i,em")
}, destroy: function () {
    this.element.destroy()
}, setTitle: function (a) {
    a = a || this.title, this.label.empty();
    var b = this.icon && !~a.toLowerCase().indexOf("<em") && !~a.toLowerCase().indexOf("<i");
    return b && this.icon.inject(this.label, "before"), this.label.appendText(a), this
}, getTitle: function () {
    return this.label.innerHTML
}, show: function () {
    this.element.show()
}, hide: function () {
    this.element.hide()
}, attach: function () {
    return this.action && this.element.addEvent("click", this.action), this._disabled = !1, this
}, detach: function () {
    return this.action && this.element.removeEvent("click", this.action), this._disabled = !0, this
}, disable: function () {
    return this._disabled ? this : (this.detach(), this.element.addClass("disabled"), this.options.disabledTitle && this.setTitle(this.options.disabledTitle), this)
}, enable: function () {
    return this._disabled === !1 ? this : (this.attach(), this.element.removeClass("disabled"), this.options.disabledTitle && this.setTitle(this.title), this)
}, bind: function (a) {
    var b = instanceOf(a, FancyInput) ? a : a.retrieve("FancyInput");
    return b && b.addEvents({feed: this.enable.bind(this), hunger: this.disable.bind(this)}), this
}});
(function () {
    if (Modernizr.input.placeholder)
        return;
    this.Form || (this.Form = {}), this.Form.Placeholder = new Class({Implements: Options, options: {color: "#A9A9A9", clearOnSubmit: !0}, initialize: function (a, b) {
        this.setOptions(b), this.element = document.id(a), this.placeholder = this.element.get("placeholder"), this.original_color = this.element.getStyle("color"), this.is_password = this.element.get("type") == "password" ? !0 : !1, this.activatePlaceholder(), this.element.addEvents({focus: function () {
            this.deactivatePlaceholder()
        }.bind(this), blur: function () {
            this.activatePlaceholder()
        }.bind(this)}), this.element.getParent("form") && this.options.clearOnSubmit && this.element.getParent("form").addEvent("submit", function (a) {
            this.element.get("value") == this.placeholder && this.element.set("value", "")
        }.bind(this))
    }, activatePlaceholder: function () {
        if (this.element.get("value") == "" || this.element.get("value") == this.placeholder)
            this.is_password && this.element.set("type", "text"), this.element.setStyle("color", this.options.color), this.element.set("value", this.placeholder)
    }, deactivatePlaceholder: function () {
        this.element.get("value") == this.placeholder && (this.is_password && this.element.set("type", "password"), this.element.set("value", ""), this.element.setStyle("color", this.original_color))
    }})
})();
var FancyInput = new Class({Binds: ["_checker"], Implements: [Events, Options, Class.Occlude], options: {}, property: "FancyInput", initialize: function (a, b) {
    this.element = document.id(a);
    if (this.occlude())
        return this.occluded;
    this.setOptions(b), this.label = this.element.getNext("label"), this.placeholder = this.element.get("placeholder"), !this.label && this.placeholder && !Modernizr.input.placeholder && new Form.Placeholder(this.element);
    if (Browser.ie && this.label) {
        if (Browser.ie6) {
            var a = this.label.getNext("span.fff");
            a && a.dispose()
        }
        this.label.addEvent("click", function () {
            this.element.focus()
        }.bind(this))
    }
    this.attach()
}, attach: function () {
    this._timer = null, this.element.addEvents({keyup: this._checker, focus: function () {
        this._timer = this._checker.periodical(500), this.fireEvent("focus", this)
    }.bind(this), blur: function () {
        this._timer && clearTimeout(this._timer), this.fireEvent("blur", this)
    }.bind(this)}), this._checker()
}, setValue: function (a) {
    this.element.set("value", a), this._checker()
}, getValue: function () {
    return this.element.get("value")
}, _checker: function () {
    this.element.get("value") != "" ? (this.label && this.label.hide(), this.fireEvent("feed")) : (this.label && this.label.show(), this.fireEvent("hunger"))
}}), PopupPicker = new Class({Implements: [Events, Options], Binds: ["attach", "show", "bodyClicked"], options: {}, initialize: function (a, b, c) {
    this.setOptions(c), this.element = document.id(a), this.popup = document.id(b), this.attach(), this.popup.addEvent("click:relay(li)", function (a) {
        var b = a.target;
        b.get("tag") != "li" && (b = b.getParent()), this.fireEvent("pick", b), this.hide()
    }.bind(this))
}, attach: function () {
    this.element.addEvent("click", this.show)
}, detach: function () {
    this.element.removeEvent("click", this.show)
}, show: function () {
    this.detach(), this.popup.show(), document.body.addEvent("click", this.bodyClicked), this.fireEvent("show")
}, hide: function () {
    this.popup.hide(), document.body.removeEvent("click", this.bodyClicked), this.attach.delay(100), this.fireEvent("hide")
}, bodyClicked: function (a) {
    this.popup.isDisplayed() && !this.popup.mouseOver(a.page) && this.hide()
}}), CategoryPicker = new Class({Implements: [Class.Occlude, Events, Options], Binds: ["select"], property: "CategoryPicker", options: {showAll: !1, itemHeight: 30, maxVisibleItems: 8, setHeight: !1}, initialize: function (a, b) {
    this.element = document.id(a);
    if (this.occlude())
        return this.occluded;
    this.setOptions(b), this.init()
}, init: function () {
    var a = this.element;
    this._maxH = this.options.itemHeight * this.options.maxVisibleItems, this.curEl = a.getElement(".CurrentBoard"), this.popEl = a.getElement(".BoardList"), this.bodyEl = a.getElement(".BoardListBody"), this.listEl = this.bodyEl.getElement("ul"), this.popup = new PopupPicker(a, this.popEl, {onPick: this.select.bind(this)}), this.build()
}, build: function () {
    this._empty(), app.settings.categories.each(function (a) {
        if (a.id == "videos" || a.id == "web_captures" || a.id == "taomm" || !this.options.showAll && a.display === !1)
            return;
        this._injectItem(a.id, a.name)
    }, this)
}, _empty: function () {
    this._items = 0, this.listEl.empty()
}, _injectItem: function (a, b) {
    this._items += 1;
    var c = (new Element("li", {"class": "BoardCategory", data: a, html: "<span>" + b + "</span>"})).inject(this.listEl);
    if (this.options.setHeight) {
        var d = this._items * this.options.itemHeight;
        this.bodyEl.setStyle("height", d > this._maxH ? this._maxH : d)
    }
    return c
}, select: function (a) {
    if (!a)
        return;
    if (typeOf(a) === "element")
        return this.curEl.set("data", a.get("data")).set("html", a.getElement("span").get("html")), this.fireEvent("select"), this;
    var b = this.listEl.getElements("li");
    for (var c = 0, d = b.length; c < d; c++)
        if (b[c].get("data") == a)
            return this.select(b[c]);
    return this
}, hide: function () {
    this.popup.hide()
}, getSelected: function () {
    return this.curEl.get("data")
}}), BoardPicker = new Class({Extends: CategoryPicker, options: {setHeight: !0, currentBoard: !1}, init: function () {
    this.parent(), (new Request.JSON({url: "/last_boards/", data: {extra: "recommend_tags"}, noCache: !0, onSuccess: function (a) {
        if (a.err)
            this.curEl.set("html", a.msg);
        else {
            var b = a.boards.filter(function (a) {
                return a.is_private != 2
            });
            app.req.user.boards = b, this.build()
        }
    }.bind(this), onFailure: function () {
        this.curEl.set("html", app.COMMON_ERRMSG)
    }.bind(this)})).get()
}, add: function (a) {
    app.req.user.boards.push(a);
    var b = this._injectItem(a.board_id, a.title);
    return this.select(b), this
}, build: function () {
    if (!app.req.user.boards)
        return;
    var a = app.req.user.boards;
    if (!a || a.length === 0)
        return;
    this._empty(), a.each(function (a) {
        this._injectItem(a.board_id, a.title)
    }, this), this.select(this.options.currentBoard || this.listEl.getFirst("li"))
}}), BoardList = new Class({Implements: [Events, Options], Options: {}, initialize: function (a, b) {
    this.setOptions(b);
    var c = this;
    this.mainEl = a, this.listEl = a.getElement(".drop-list"), this.currentEl = a.getElement(".current"), this.filterInput = a.getElement(".filter input"), this.boardsEl = this.listEl.getElement(".boards"), this.filtrateEl = this.listEl.getElement(".filtrate"), this.filterValue = "", app.page.$creation && (this.options.creationOnly = !0), this.currentEl.addEvent("click", function () {
        c.openList()
    }), a.addEvent("click:relay(.selections .board)", function () {
        c.selectBoard(this.get("data-board-id"))
    }), this.filterInput.addEvent("keyup", function () {
        c.filterValue !== this.value && (c.checkFilter(this.value), c.filterValue = this.value)
    }), $(document.html).addEvent("click", this.clickingOtherArea.bind(this)), a.addEvent("click:relay(.create-board)", function () {
        c.createBoard(this.get("data-name"))
    }), a.addEvent("submit", this.onSubmit.bind(this)), this.keyboard = new Keyboard({defaultEventType: "keydown", events: {up: function (a) {
        c.preSelectTo("prev"), a.stop()
    }, down: function (a) {
        c.preSelectTo("next"), a.stop()
    }, "ctrl+p": function (a) {
        c.preSelectTo("prev"), a.stop()
    }, "ctrl+n": function (a) {
        c.preSelectTo("next"), a.stop()
    }, enter: function (a) {
        var b = c.mainEl.getElement(".board.selected");
        b && (b.click(), a.stop())
    }, esc: function (a) {
        c.filterValue ? c.emptyFilter() : c.closeList()
    }}}), app.req.user.boards ? (c.boards = app.req.user.boards, c.handleBoards()) : (new Request.JSON({url: "/last_boards/", noCache: !0, data: {extra: "recommend_tags"}, onSuccess: function (a) {
        if (a.err)
            return alert(a.err);
        var b = a.boards.filter(function (a) {
            return a.is_private != 2
        });
        c.boards = b, app.req.user.boards = b, c.handleBoards()
    }, onFailure: function () {
        alert(app.COMMON_ERRMSG)
    }})).get()
}, handleBoards: function () {
    var a = this;
    a.loadPinyinLib(function () {
        var b = a.filterCategories(a.boards);
        a.director = new FormatBoardList(b), a.groupedBoards = a.director.formatJson(), a.buildList();
        var c = a.mainEl.getElement(".board");
        c && a.mainEl.hasClass("use-default-board") && a.selectBoard(c.get("data-board-id"))
    })
}, filterCategories: function (a) {
    var b = this.options && this.options.creationOnly, c = a.filter(function (a) {
        var c = a && a.extra && a.extra.is_creation;
        return b ? c : !c
    }), d = this.mainEl.get("data-categorys");
    if (d) {
        var e = d.split(","), a = c.filter(function (a) {
            return ~e.indexOf(a.category_id)
        });
        return !a || !a.length ? (this.fireEvent("noboard"), []) : a
    }
    return c
}, showCreationBoards: function (a) {
    this.options.creationOnly = !0, this.handleBoards(), a && a()
}, loadPinyinLib: function (a) {
    if (typeof Pinyin != "undefined")
        return a();
    new Asset.javascript("/js/pinyin.js", {onLoad: a})
}, buildList: function () {
    this.boardsEl.empty();
    var a = app.renderSync("base/board_list_cell", this.groupedBoards);
    Elements.from(a).inject(this.boardsEl)
}, openList: function () {
    this.listEl.show(), this.filterInput.focus(), this.keyboard.activate(), this.isShowing = !0, this.clearPreSelect()
}, closeList: function () {
    this.listEl.hide(), this.keyboard.deactivate(), app.hotkey && app.hotkey.keyboard.activate(), this.isShowing = !1
}, clickingOtherArea: function (a) {
    this.isShowing && !a.target.getParent(".board-list") && this.closeList()
}, selectBoard: function (a) {
    this.mainEl.set("data-board-id", a);
    var b = this.mainEl.getElement(".selections a[data-board-id=" + a + "]");
    b && this.mainEl.set("data-select-category", b.get("data-category")), b && (this.currentEl.getElement(".name").innerHTML = b.innerHTML), this.emptyFilter(), this.closeList(), this.fireEvent("select"), this.mainEl.fireEvent("select")
}, showFiltrate: function () {
    this.boardsEl.hide(), this.filtrateEl.show()
}, hideFiltrate: function () {
    this.boardsEl.show(), this.filtrateEl.hide()
}, emptyFiltrate: function () {
    this.filtrateEl.empty()
}, checkFilter: function (a) {
    if (!a)
        return this.hideFiltrate(), [];
    if (!this.director)
        return [];
    this.showFiltrate(), this.emptyFiltrate();
    var b = this.director.match(a), c = app.renderSync("base/board_list_filtrate", {boards: b, name: a});
    Elements.from(c).inject(this.filtrateEl);
    var d = this.filtrateEl.getElement(".board:not(.create-board)");
    d ? this.preSelectBoardEl(d) : this.preSelectBoardEl(this.filtrateEl.getElement(".create-board"))
}, emptyFilter: function () {
    this.filterInput.value = "", this.checkFilter("")
}, createBoard: function (a) {
    if (!a)
        return;
    var b = this.options && this.options.creationOnly;
    (new Request.JSON({url: "/boards/", data: {title: a, creation: b}, onSuccess: function (a) {
        if (a.err)
            return alert(a.msg || app.COMMON_ERRMSG);
        this.addBoard(a.board)
    }.bind(this), onFailure: function () {
        alert(app.COMMON_ERRMSG)
    }, onComplete: function () {
    }})).post()
}, addBoard: function (a) {
    this.boards.unshift(a);
    var b = this.filterCategories(this.boards);
    this.director.update(b), this.groupedBoards = this.director.formatJson(), this.buildList(), this.selectBoard(a.board_id)
}, preSelectBoardEl: function (a) {
    this.clearPreSelect(), a.addClass("selected");
    var b = a.getParent(".boards, .filtrate"), c = a.getPosition(b).y;
    c < 0 ? b.scrollTo(0, c + b.getScroll().y) : c > 180 && b.scrollTo(0, c - 180 + b.getScroll().y)
}, clearPreSelect: function () {
    this.mainEl.getElements(".board.selected").removeClass("selected")
}, preSelectTo: function (a) {
    if (this.boardsEl.getStyle("display") == "none")
        var b = this.filtrateEl;
    else if (this.filtrateEl.getStyle("display") == "none")
        var b = this.boardsEl;
    var c = b.getElements(".board"), d = b.getElement(".board.selected");
    if (!d)
        return this.preSelectBoardEl(c[0]);
    selectedId = d.get("data-board-id");
    for (var e = 0; e < c.length; e++) {
        var f = !1;
        a == "prev" ? f = c[e - 1] : a == "next" && (f = c[e + 1]), c[e].get("data-board-id") == selectedId && f && this.preSelectBoardEl(f)
    }
}, getSelected: function () {
    return this.mainEl.get("data-board-id")
}, onSubmit: function () {
    var a = this.getSelected(), b = null;
    this.boards = this.boards.filter(function (c) {
        return c.board_id == a ? (b = c, !1) : !0
    }), this.boards.unshift(b), app.req.user.boards = this.boards
}}), ImagePicker = new Class({Implements: [Events, Options, Class.Occlude], options: {cellW: 170, minW: 16, minH: 16}, property: "ImagePicker", initialize: function (a, b) {
    this.element = document.id(a);
    if (this.occlude())
        return this.occluded;
    this.setOptions(b), this.listEl = this.element.getElement(".carousel-list"), this.arrowEl = this.element.getElement(".Arrows"), this.loadEl = this.element.getElement(".load"), this.attach()
}, attach: function () {
    var a = !0;
    this.listEl.get("tween").addEvents({start: function () {
        a = !1
    }, complete: function () {
        a = !0
    }}), this.arrowEl.getElements("a.picker").addEvent("click", function (b) {
        var c = this.listEl.getStyle("left").toInt(), d = this.listEl.getStyle("width").toInt();
        return b.target.hasClass("imagePickerNext") && c > this.options.cellW - d ? a && this.listEl.tween("left", c, c - this.options.cellW) : b.target.hasClass("imagePickerPrevious") && c < 0 && a && this.listEl.tween("left", c, c + this.options.cellW), !1
    }.bind(this));
    var b = this.listEl;
    this.listEl.addEvent("click:relay(li)", function () {
        b.getElements("li").removeClass("selected"), this.addClass("selected")
    })
}, load: function (a, b, c, d) {
    if (this.loading)
        return;
    typeOf(c) == "function" && (d = c, c = !0), c = c === undefined ? !0 : !!c;
    if (a.length == 0)
        return;
    this.loading = !0, this.loadEl.show(), this.fireEvent("startLoading");
    var e = new Asset.images(a, {onComplete: function () {
        this.loadEl.hide(), this.loading = !1, c && (e = e.filter(function (a) {
            return a.width === "" || a.height === "" || a.width.toInt() >= this.options.minW && a.height.toInt() >= this.options.minH
        }.bind(this))), typeOf(d) == "function" && d(e), this.build(e, b), this.fireEvent("finishLoading")
    }.bind(this)});
    return e
}, build: function (a, b) {
    this.source = b, this.listEl.set("tween", {duration: "short"}).setStyles({width: a.length * this.options.cellW, left: 0}).empty(), a.each(function (a) {
        if (a.height * 170 / a.width > 170) {
            var b = new Element("li", {"class": "carousel-item long"}), c = new Element("span", {"class": "stop"}), d = new Element("span", {"class": "carousel-shadow"});
            a.inject(b), d.inject(b), c.inject(b), b.inject(this.listEl)
        } else {
            var e = new Element("li", {"class": "carousel-item"});
            a.addClass("short");
            var d = new Element("span", {"class": "carousel-shadow"});
            d.inject(e), a.inject(e), e.inject(this.listEl)
        }
        a.set("width", this.options.cellW).erase("height")
    }, this);
    if (a.length > 1) {
        this.arrowEl.show(), this.element.getParent(".pbt").addClass("multi");
        var c = this.element.getParent(".modal");
        c && c.setStyle("margin-top", "-300px")
    } else
        this.arrowEl.hide(), this.element.getParent(".pbt").removeClass("multi")
}, insertImageElement: function (a, b, c) {
    c.width >= c.height ? c.set("width", this.options.cellW).erase("height") : c.set("height", this.options.cellW).erase("width"), c.inject((new Element("li", {"class": "carousel-item"})).inject(this.listEl))
}, assetComplate: function () {
    this.loadEl.hide(), this.loading = !1, this.fireEvent("finishLoading")
}, getSelected: function () {
    var a = this.listEl.getElement(".selected");
    if (a)
        var b = a.getElement("img");
    else
        var c = 0 - this.listEl.getStyle("left").toInt() / this.options.cellW, b = this.listEl.getElements("li img")[c];
    return {el: b, src: b.src, link: this.source}
}});
app.createCellLoader = function (a, b, c, d, e) {
    function i(a, b) {
        var c;
        return e && e.template == "base/person_item" ? c = app.renderSync(e.template, {user: a, pins: a.pins, req: app.req}) : e && e.template == "base/pin_view_board_pin_item" ? c = app.renderSync("base/pin_view_board_pin_item", {board_pin: a}) : e && e.template == "base/board_item" ? c = app.renderSync("base/board_item", {board: a, user: app.req.user}) : e && e.template == "explore/explore_item" ? c = app.renderSync("explore/explore_item", {explore: a}) : e && e.template == "uc/recommend_item" ? c = app.renderSync("uc/recommend_item", {recommend: a}) : e && e.template == "base/explore_board" ? c = app.renderSync("base/explore_board", {explore: a, user: app.page.user}) : a.channel_board ? c = app.renderSync("base/board_item_ent", {type: "normal", req: app.req, board: a}) : a.post_id ? c = app.renderSync("topics/post_item", {type: "normal", req: app.req, post: a}) : a.topic_id || a._new_block ? c = app.renderSync("topics/block_item", {type: "normal", req: app.req, pin: a, is_editor: app.page.is_editor, favorite_view: app.page.favorite_view, seq_str: app.page.seq_str, topic_view: app.page.topic_view, fall: app.page.topic_view == "waterfall"}) : a.pin_id ? c = app.renderSync("base/pin_item", {user: a.user || b.user, pin: a, board: a.board || b.board, hide_user: b && b.hide_user}) : a.board_id ? c = app.renderSync("base/board_item", {board: a, user: app.req.user}) : c = app.renderSync("base/user_item", {user: a, current_user: app.req.user}), (new Element("div")).set("html", c).getFirst()
    }

    function j(a) {
        var b;
        return a.pin_id ? b = a.seq ? a.seq : a.pin_id : a.board_id ? b = a.seq : b = a.user_id, b
    }

    var f = !1, g = !1, h = [];
    e = e || {}, b = b || 10, typeof c == "function" && (e = d || {}, d = c, c = null);
    var k = 0, l = {};
    return function (m, n) {
        n = n ? n : "load";
        switch (n) {
            case "load":
                if (f)
                    return;
                f = !0;
                var o = m.getLast(), p = o ? o.seq : null;
                m.showIndicator(), typeof c == "number" && c++, c ? (l.page = c, l.per_page = b) : (l.max = p, l.limit = b), e.max_loads && c && (l.page_loads = l.page, delete l.page), l.wfl = 1, e && e.snapshot && (l.snapshot = app.page.snapshot), e.time && (l.time = e.time), e.maxs && k == 0 && (l.maxs = e.maxs);
            function q() {
                k++, (new Request.JSON({url: a, noCache: !0, data: l, onSuccess: function (a) {
                    m.hideIndicator();
                    if (a.err) {
                        app.error(a.msg || app.COMMON_ERRMSG);
                        return
                    }
                    a = d ? d(a) : {data: a.pins}, a.data.length && a.data.each(function (b) {
                        m.append(i(b, a.extra))
                    }), a.maxs && (l.maxs = a.maxs), a.page && (c = a.page), c ? (a.data.length == 0 && m.stopLoader(e.max_loads ? !1 : !0), e.max_loads && k >= e.max_loads && m.stopLoader(!1)) : a.data.length < b && m.stopLoader(e.max_loads ? !1 : !0), m.fireEvent("loadComplate")
                }, onComplete: function () {
                    f = !1
                }})).get()
            }

                q();
                break;
            case "fetch":
                if (c)
                    return;
                if (g)
                    return;
                g = !0;
                if (h.length >= 100)
                    return;
                var r;
                h.length > 0 ? r = j(h.getLast()) : r = m.getFirstSeq();
                if (!r)
                    return;
                (new Request.JSON({url: a, data: {since: r, limit: 100, wfl: 1}, noCache: !0, onSuccess: function (a) {
                    if (a.err) {
                        app.error(a.msg || app.COMMON_ERRMSG);
                        return
                    }
                    var a = d ? d(a) : {data: a.pins};
                    if (a.data && a.data.length > 0) {
                        h = h.concat(a.data);
                        var b = h.length, c = b >= 100 ? "100+" : b;
                        document.title.match(/^\(\d+\)/) ? document.title = document.title.replace(/^\(\d+\)/, "(" + c + ")") : document.title = "(" + c + ") " + document.title, m.showNewIndicator(c + "条新采集")
                    }
                }, onComplete: function () {
                    g = !1, m.scheduleFetcher()
                }})).get();
                break;
            case "show_new":
                document.title = document.title.replace(/^\(\d+\+?\) /, ""), m.hideNewIndicator();
                var s = [];
                if (h.length) {
                    for (var t = h.length - 1; t >= 0; t--)
                        s.push(i(h[t]));
                    h = [], m.insert(s)
                }
                break;
            default:
                app.error("CellLoader unkown action")
        }
    }
};
var Waterfall = new Class({Binds: ["resize", "scroll", "_append", "fetchNew"], Implements: [Options, Events], options: {container: null, cellWidth: 236, cellSpace: 16, minCols: 4, maxCols: 6, cellSelector: ".wfc", sideSpace: 0, preservedCols: 0, hibernate: 5e3, viewportExtend: 500, containerSelector: "div.wrapper", loadOffset: 100, paddingBottom: !1, loader: null, fetcher: !1, autoResize: !0, scrollEl: window, transitionClass: "wft", containerSelectorOffset: 50, endEl: null}, initialize: function (a, b) {
    this.element = document.id(a), this.setOptions(b), this.container = this.options.container ? document.id(this.options.container) : app.view, this.cols = 0, this.width = 0, this.height = 0, this.cells = [], this._visibleCells = [], this._top = this.element.getCoordinates(this.container).top, this.options.loader && (this._indicator = this._createIndicator()), this.options.fetcher && (this._newIndicator = this._createNewIndicator()), this._pending = [], this.options.cellSelector && this.element.getElements(this.options.cellSelector).forEach(function (a) {
        this.cells.push(this.newCell(a))
    }, this), Cookie.read("wft") && (Cookie.dispose("wft"), this.options.transitionClass && this.cells.invoke("addClass", this.options.transitionClass)), this.reposition(!0), this.attach()
}, toElement: function () {
    return this.element
}, newCell: function (a, b) {
    try {
        a.getElement(".img img").addEvent("load", function () {
            try {
                this.getParent(".img").addClass("loaded")
            } catch (a) {
            }
        })
    } catch (c) {
    }
    var d = new Waterfall.Cell(this, a);
    return b && (d = this._position(d)), d
}, destroy: function () {
    this.detach(), this._indicator && this._indicator.destroy(), this._newIndicator && this._newIndicator.main.destroy()
}, _createIndicator: function () {
    return (new Element("div", {"class": "loading"})).inject(this.element, "after").hide().set("html", '<img src="/img/loading.gif"><span>正在加载...</span>')
}, _createNewIndicator: function () {
    var a = new SmoothNotification({duration: !1, container: "#header", id: "NewIndicator"}), b = this;
    return a.main.addEvent("click", function () {
        b.options.loader(b, "show_new")
    }), a
}, showIndicator: function () {
    this._indicator && this._indicator.show()
}, showNewIndicator: function (a) {
    this._newIndicator && this._newIndicator.show(a);
    var b = this._newIndicator.main;
    b.setStyle("margin-left", -b.getSize().x / 2)
}, hideIndicator: function () {
    this._indicator && this._indicator.hide()
}, hideNewIndicator: function () {
    this._newIndicator && this._newIndicator.hide()
}, fetchNew: function () {
    this.options.loader(this, "fetch")
}, scheduleFetcher: function () {
    this._newIndicator && (this._fetchTimer && clearTimeout(this._fetchTimer), this._fetchTimer = setTimeout(this.fetchNew, 3e4))
}, attach: function () {
    this.options.autoResize && window.addEvent("resize", this.resize), this.options.scrollEl && this.options.scrollEl.addEvent("scroll", this.scroll), this.scheduleFetcher()
}, detach: function () {
    this.options.autoResize && window.removeEvent("resize", this.resize), this.options.scrollEl && this.options.scrollEl.removeEvent("scroll", this.scroll), this._fetchTimer && (clearTimeout(this._fetchTimer), delete this._fetchTimer)
}, resize: function () {
    return this.reposition()
}, scroll: function () {
    this._updateViewport();
    if (!this.options.loader || this._stopLoading || this._pending.length)
        return;
    var a = this.options.scrollEl.getSize().y, b = this.options.scrollEl.getScroll().y, c = this._hs[this._minCol || 0] + this._top;
    if (b + a < c - this.options.loadOffset)
        return;
    this.options.loader(this)
}, stopLoader: function (a) {
    return this._stopLoading = !0, a && this._indicator && this._indicator.set("html", this.options.endEl || '<img src="/img/end.png">').show(), this.options.paddingBottom && this._equalise(), this
}, startLoader: function () {
    return this._stopLoading = !1, this._indicator && (this._indicator.destroy(), this._indicator = this._createIndicator()), this
}, getColsHeight: function () {
    return this._hs
}, getLast: function () {
    return this.cells.getLast()
}, getFirst: function (a) {
    var b = this.cells;
    for (var c = 0; c < b.length; c++)
        if (b[c].seq)
            return a ? {cell: b[c], index: c} : b[c];
    return null
}, getFirstSeq: function (a) {
    var b = this.getFirst();
    return b ? b.seq : -1
}, reposition: function (a) {
    if (this._layout(a)) {
        this.porscheSubCell && (this.porscheSubCell.isShowing = !1);
        var b = this.cells;
        for (var c = 0, d = b.length; c < d; c++)
            this._position(b[c]);
        this._updateViewport(!0), this.options.paddingBottom && this._equalise(), this.fireEvent("layout", this)
    }
    return this
}, update: function (a) {
    a = typeOf(a) === "element" ? a.retrieve("wf:cell") : a;
    var b = a.col, c = a.getElementHeight(), d = c - a.height, e = this.cells, f = e.indexOf(a), g = [];
    for (var h = f + 1, i = e.length; h < i; h++) {
        var j = e[h];
        j.col === b && j.position(j.left, j.top + d, b)
    }
    return a.updateHeight(), this._hs[b] += d, this.options.paddingBottom && this._equalise(), j = this.porscheSubCell, j && j.col == a.col && a.top < j.top && (j.position(j.left, j.top + d, b), this._adjustPorscheCell()), this
}, remove: function (a) {
    a = $$(a), a.each(function (a) {
        var b = a.dispose().retrieve("wf:cell");
        b.attached && this._visibleCells.erase(b), this.cells.erase(b)
    }.bind(this)), this.reposition(!0)
}, insert: function (a) {
    a = $$(a);
    var b = this.getFirst(!0);
    !b && this.cells.length === 1 && (b = {index: 1});
    var c = b ? b.index : 0, d = a.map(function (a) {
        return this.newCell(a)
    }, this);
    d.unshift(c, 0), Array.prototype.splice.apply(this.cells, d), docScroller.toTop(), this.reposition(!0)
}, append: function (a) {
    var b = this.newCell(a, !0);
    return this.cells.push(b), this
}, _position: function (a) {
    var b = this.cols - this.options.preservedCols, c = 0, d = this._hs;
    if (a.fixed === "topright")
        c = b - 1;
    else if (a.fixed === "porscheCell")
        c = 1, this.porscheCell = a;
    else {
        if (a.fixed === "porscheSubCell") {
            this.porscheSubCell = a;
            return
        }
        for (var e = 0; e < b; e++)
            d[e] < d[c] && (c = e)
    }
    var f = c * (this.options.cellWidth + this.options.cellSpace), g = d[c], h = 3800;
    if (this.porscheSubCell && !this.porscheSubCell.isShowing && g > h && c == 2) {
        this._positionPorscheSubCell();
        for (var e = 0; e < b; e++)
            d[e] < d[c] && (c = e);
        f = c * (this.options.cellWidth + this.options.cellSpace), g = d[c]
    }
    a.position(f, g, c), d[c] += a.height + this.options.cellSpace;
    var i = min = 0;
    for (var e = 0; e < b; e++)
        d[e] < d[min] && (min = e), d[e] > d[i] && (i = e);
    return this._maxCol = i, this._minCol = min, this._height = d[i] + this.options.containerSelectorOffset, this.element.setStyle("height", this._height), a
}, _positionPorscheSubCell: function () {
    var a = this.porscheSubCell, b = this.cols - this.options.preservedCols, c = 2, d = this._hs, e = c * (this.options.cellWidth + this.options.cellSpace), f = d[c];
    a.position(e, f, c), a.isShowing = !0, d[c] += a.height + this.options.cellSpace;
    var g = min = 0;
    for (var h = 0; h < b; h++)
        d[h] < d[min] && (min = h), d[h] > d[g] && (g = h);
    return this._maxCol = g, this._minCol = min, this._height = d[g] + this.options.containerSelectorOffset, this.element.setStyle("height", this._height), this._adjustPorscheCell(), a
}, _adjustPorscheCell: function () {
    var a = this.porscheCell, b = this.porscheSubCell, c = -4825;
    a.element.getElement(".img img").setStyle("margin-top", c + b.top), this.update(this.porscheCell)
}, _equalise: function () {
    var a = this.cols - this.options.preservedCols;
    this._snaps = this._snaps || new Elements;
    if (this._snaps.length < a) {
        var b = a - this._snaps.length;
        b.times(function () {
            this._snaps.push((new Element("div")).addClass("padding-block"))
        }, this)
    }
    this._snaps.dispose();
    var c = this._hs, d = c[this._maxCol], e = 0;
    for (var f = 0; f < a; f++)
        e = d - c[f] - this.options.cellSpace, this._snaps[f].setStyles({height: d === c[f] || e < 0 ? 0 : e, left: f * (this.options.cellWidth + this.options.cellSpace), top: c[f], width: this.options.cellWidth, paddingBottom: d === c[f] ? 40 : 60}).inject(this.element)
}, getVisibleCells: function () {
    var a = this._visibleCells, b = a.length, c = new Array(b);
    while (b--)
        c[b] = a[b];
    return c
}, _updateViewport: function (a) {
    if (!this.options.hibernate || this._height < this.options.hibernate)
        return;
    var b = this.cells.length;
    if (b == 0)
        return;
    var c = window.getScroll().y;
    this._lastScroll = this._lastScroll || 0;
    var d = Math.abs(c - this._lastScroll);
    if (!a && d < 50)
        return;
    var e = window.getSize().y, f = this.element.getTop(), g = c > f ? c - f : 0, h = g + e + this.options.viewportExtend;
    g = g - this.options.viewportExtend, g < 0 && (g = 0), this._viewport = [g, h], this._updateCells(), this._lastScroll = c
}, cellVisible: function (a) {
    var b = this._viewport[0], c = this._viewport[1];
    return !(a.bottom < b || a.top > c)
}, _updateCells: function () {
    var a = this._viewport[0], b = this._viewport[1], c = this.cells, d = c.length, e = d - 1, f = 0, g = 0, h = [];
    while (e > f) {
        g = Math.floor((f + e) / 2);
        var i = c[g];
        if (i.bottom < a || i.top > b) {
            if (i.top > b) {
                e = g - 1;
                continue
            }
            f = g + 1;
            continue
        }
        break
    }
    h.push(c[g]);
    for (var j = g + 1, k = 10; j < d && k > 0; j++) {
        var i = c[j];
        i.bottom < a || i.top > b ? k-- : h.push(i)
    }
    for (var j = g - 1, k = 10; j >= 0 && k > 0; j--) {
        var i = c[j];
        i.bottom < a || i.top > b ? k-- : h.unshift(i)
    }
    var l = this.getVisibleCells().filter(function (c) {
        return !h.contains(c) && (c.bottom < a || c.top > b)
    });
    h.invoke("attach"), l.invoke("detach")
}, _layout: function (a) {
    var b = this.options.cellWidth + this.options.cellSpace, c = Math.floor((this.container.getWidth() - this.options.sideSpace * 2) / b);
    c > this.options.maxCols && (c = this.options.maxCols), c < this.options.minCols && (c = this.options.minCols);
    if (!a && this.cols === c)
        return !1;
    var d = [];
    for (var e = 0; e < c; e++)
        d.push(0);
    return this.width = c * b - this.options.cellSpace, this.cols = c, this._hs = d, $$(this.options.containerSelector).setStyle("width", this.width), !0
}});
Waterfall.Cell = new Class({initialize: function (a, b) {
    this.waterfall = a, this.element = document.id(b), this.element.store("wf:cell", this).setStyle("position", "absolute").inject(this.waterfall.toElement()), this.fixed = b.hasClass("topright") ? "topright" : b.hasClass("topleft") ? "topleft" : !1, b.hasClass("porsche") ? this.fixed = "porscheCell" : b.hasClass("porsche-sub") && (this.fixed = "porscheSubCell"), this.updateHeight(), this.seq = b.get("data-seq"), this.col = 0, this.left = this.top = this.bottom = -1, this.html = null, this.attached = !!this.element.parentNode, this._register()
}, toElement: function () {
    return this.element
}, updateHeight: function () {
    this.element.parentNode ? this.height = this.element.getHeight() : (this.element.setStyle("top", -1e3).inject(this.waterfall.toElement()), this.height = this.element.getHeight(), this.element.setStyle("top", this.top).dispose())
}, getElementHeight: function () {
    return this.element.getHeight()
}, position: function (a, b, c) {
    this.left = a, this.top = b, this.bottom = this.top + this.height, this.col = c, this.element.setStyles({left: this.left, top: this.top})
}, _register: function () {
    this.attached ? this.waterfall._visibleCells.include(this) : this.waterfall._visibleCells.erase(this)
}, attach: function (a) {
    if (this.attached)
        return;
    var b = this.toElement();
    this.html && b.set("html", this.html), this.html = null, b.inject(this.waterfall.toElement(), a || "bottom"), Modernizr.csstransitions ? b.setStyle("opacity", 1) : b.setStyle("display", ""), this.attached = !0, this._register()
}, detach: function () {
    if (!this.attached)
        return;
    var a = this.toElement();
    this.html = a.get("html"), a.dispose().set("html", ""), Modernizr.csstransitions ? a.setStyle("opacity", 0) : a.setStyle("display", "none"), this.attached = !1, this._register()
}}), ["getSize"].forEach(function (a) {
    Waterfall.Cell.implement(a, function () {
        return Element.prototype[a].apply(this.element, arguments)
    })
}), ["addClass", "setStyles", "setStyle"].forEach(function (a) {
    Waterfall.Cell.implement(a, function () {
        return Element.prototype[a].apply(this.element, arguments), this
    })
});
var Uploadr = new Class({Implements: [Options, Events, Class.Occlude], options: {url: "/upload/", uploadText: "正在上传...", fieldName: "file"}, property: "Uploadr", initialize: function (a, b) {
    this.target = this.element = document.id(a);
    if (this.occlude())
        return this.occluded;
    this.setOptions(b), this.box = (new Element("div")).setStyles({position: "absolute", opacity: .01, overflow: "hidden"}).inject(this.target, "after"), this.btn = new Button(this.target, {disabledTitle: this.options.uploadText, click: function () {
        return this.file.click(), !1
    }.bind(this)}), this.create()
}, create: function () {
    this.clear(), this.iframe || (this.iframe = (new IFrame({src: "javascript:'<html></html>'", frameborder: "no", border: 0})).inject(this.box), this.iframe.addEvents({load: this.onLoad.bind(this)})), Browser.ie ? (this.iframe.setStyles({width: 300, height: 30}), this.runner = this.createIBody.periodical(50, this)) : (this.iframe.setStyle("display", "none"), this.createInput())
}, createIBody: function () {
    var a = this.iframe.contentWindow.document;
    if (!a || !a.body)
        return;
    clearTimeout(this.runner), a.body.innerHTML = '<form method="post" enctype="multipart/form-data" id="form"><input type="file" id="file" style="position:absolute;left:0;top:0;" /><div id="data"></div></form><style type="text/css">body{background:#FCF9F9;}input{border: 1px solid #999;padding: 5px;}</style>', this.doc = a, this.processIBody.delay(50, this)
}, processIBody: function () {
    if (!(this.file = this.doc.getElementById("file")) || !this.file.offsetHeight)
        return this.createIBody();
    this.file.onchange = this.select.bind(this)
}, createInput: function () {
    var a = this.file = (new Element("input", {type: "file", name: this.options.fieldName, size: 1, styles: {position: "absolute", top: 0, left: 0, border: 0}})).inject(this.box);
    a.onfocus = function () {
        return !1
    }, a.onchange = this.select.bind(this)
}, onLoad: function () {
    if (!this.iframe.parentNode)
        return;
    var a = this.iframe.contentWindow.document, b = a.body.innerHTML;
    if (this.loaded === !1)
        this.loaded = !0;
    else if (b !== "") {
        this.loaded = !0;
        var c = b.match(/(\{.+\})/g);
        b = JSON.decode(c[0], !0), b.err ? this.fireEvent("failed", [b]) : this.fireEvent("complete", [b]), this.enable(), this.create()
    }
}, disable: function () {
    this.btn && this.btn.disable(), this.disabled = !0
}, enable: function () {
    this.btn && this.btn.enable(), this.disabled = !1
}, select: function () {
    this.disabled || this.disable(), this.file.onchange = this.file.onmousedown = this.file.onfocus = null, this.options && this.options.copyrightClass && (this.is_creation = this.element.hasClass(this.options && this.options.copyrightClass));
    if (Browser.ie) {
        var a = this.iframe.contentWindow.document;
        this.form = a.forms[0], this.file = this.form.elements[0]
    } else
        this.form = (new Element("form", {method: "post", enctype: "multipart/form-data", target: this.iframe.get("name"), styles: {width: 0, height: 0, overflow: "hidden"}})).adopt(this.file).inject(this.box);
    this.form.action = this.is_creation ? this.options.copyrightUrl : this.options.url, this.file.name = this.options.fieldName, this.fireEvent("start"), this.form.submit(), Browser.ie && this.iframe.set("visibility", "hidden")
}, reposition: function () {
    var a = this.target.getCoordinates(this.box.getOffsetParent());
    this.box.setStyles(a)
}, clear: function () {
    Browser.ie || this.form && this.form.destroy(), this.form = null, this.is_creation = null, this.file = null
}}), FixedHeader = new Class({Implements: [Options, Events], options: {scrollOffset: 0, transition: !1, scrollElement: window}, initialize: function (a, b) {
    this.setOptions(b), this.element = document.id(a), this.options.transition && this.element.addClass(this.options.transition), window.setTimeout(function () {
        this.scrollOffset = this.scrollOffset || this.element.getCoordinates().top
    }.bind(this), 100), this.scrollOffset = this.options.scrollOffset, this.scrollElement = document.id(this.options.scrollElement), this.isPinned = !0, this.boundScroll = this._scroll.bind(this), this._init()
}, _init: function () {
    this._scroll()
}, _pin: function () {
    this.element.isDisplayed() || this.element.show(), this.fireEvent("pin")
}, _unpin: function () {
    this.fireEvent("unpin")
}, _tick: function (a) {
    this.element.setStyle("left", -a.x + "px"), this.fireEvent("tick", [a])
}, _scroll: function () {
    var a = this.scrollElement.getScroll();
    !this.isPinned && a.y > this.scrollOffset ? (this._pin(), this.isPinned = !0) : this.isPinned && a.y < this.scrollOffset && (this._unpin(), this.isPinned = !1), this._tick(a)
}, attach: function () {
    return this.scrollElement.addEvent("scroll", this.boundScroll), this
}, detach: function () {
    return this.scrollElement.removeEvent("scroll", this.boundScroll), this
}}), SmoothNotification = new Class({Implements: [Options], options: {duration: 3e3, styles: {position: "absolute", "z-index": 999999, "text-align": "center"}, dispose: !0, style: "normal", relative: {to: "", position: "topcenter", edge: "bottomcenter", offset: {x: 0, y: 0}}, fadeType: "down", horizontalCenter: !1, verticalCenter: !1, closeButton: !1, arrow: !1, arrowColor: "rgba(0, 0, 0, 0.6)", arrowStyles: {}, mask: !1, maskStyle: {}, id: "", container: "", hideNotiOnclickMask: !0}, initialize: function (a) {
    this.setOptions(a), this.main = new Element("div.smooth-notification"), this.mask = new Element("div.sm-mask"), this.closeButton = (new Element("div.sm-closeButton")).addEvent("click", function () {
        this.hide()
    }.bind(this)), this.isShowing = !1, this.options.container && (this.options.parent = document.getElement(this.options.container)), this.options.id && (this.main.id = this.options.id)
}, setPosition: function () {
    this.main.inject(this.options.parent || document.body), this.options.relative.to ? this.main.position({relativeTo: this.options.relative.to, position: this.options.relative.position, edge: this.options.relative.edge, offset: this.options.relative.offset}) : (this.options.horizontalCenter && this.main.setStyle("left", document.documentElement.clientWidth / 2 + window.getScroll().x - this.main.getSize().x / 2), this.options.verticalCenter && (this.main.getStyle("position") != "fixed" ? this.main.setStyle("top", document.documentElement.clientHeight / 2 + window.getScroll().y - this.main.getSize().y / 2) : this.main.setStyle("top", document.body.getSize().y / 2 - this.main.getSize().y / 2)))
}, setCloseButton: function () {
    this.options.closeButton ? this.closeButton.inject(this.main) : this.closeButton.dispose
}, setArrow: function () {
    var a = this.main.getElement(".sm-arrow");
    a && a.destroy();
    if (!this.options.arrow)
        return;
    var b = !0;
    this.options.arrowColor != "rgba(0, 0, 0, 0.6)" && (b = !1), Browser.ie6 && this.main.setStyle("filter", 0);
    var c = new Element("div.sm-arrow");
    b ? c.set("class", "sm-arrow pic-" + this.options.arrow) : (c.set("class", "sm-arrow border-arrow border-" + this.options.arrow), this.options.arrow == "down" && c.setStyle("border-top-color", this.options.arrowColor), this.options.arrow == "up" && c.setStyle("border-bottom-color", this.options.arrowColor), this.options.arrow == "left" && c.setStyle("border-right-color", this.options.arrowColor), this.options.arrow == "right" && c.setStyle("border-left-color", this.options.arrowColor)), c.setStyles(this.options.arrowStyles).inject(this.main)
}, setMask: function () {
    if (!this.options.mask)
        return;
    var a = document.html.getScrollSize();
    (Browser.ie6 || Browser.ie7) && this.mask.setStyles({width: document.body.offsetWidth, height: document.body.offsetHeight, position: "absolute"}), this.mask.setStyles(this.options.maskStyle).inject(document.body), this.options.hideNotiOnclickMask && this.mask.addEvent("click", function () {
        this.hide()
    }.bind(this))
}, setDefaultOption: function (a) {
    a == "window" && (this.options.horizontalCenter = this.options.verticalCenter = !0)
}, show: function (a, b) {
    return this.setOptions(b), this.main.dispose(), clearTimeout(this.hideTimer), clearTimeout(this.disposeTimer), a && (this.main.empty(), typeOf(a) == "string" ? this.main.grab(new Element("a.notification", {html: a})) : this.main.adopt(a)), this.setDefaultOption(this.options.style), this.setCloseButton(), this.main.set("class", ["smooth-notification", this.options.fadeType, this.options.style].join(" ")), this.main.setStyles(this.options.styles), this.setPosition(), this.setArrow(), this.setMask(), this.main.setStyles(this.options.styles), function () {
        this.main.addClass("show")
    }.delay(150, this), this.options.duration && (this.hideTimer = function () {
        this.hide()
    }.delay(this.options.duration + 150, this)), this.isShowing = !0, this
}, hide: function () {
    return this.main.removeClass("show"), this.mask.dispose(), this.disposeTimer = function () {
        this.options.dispose && this.main.dispose(), this.options.complete && this.options.complete()
    }.delay(150, this), this.isShowing = !1, this
}}), Gestures = new Class({Extends: Drag, options: {snap: 10, minX: 150, maxY: 100, style: !1, modifiers: {}, preventDefault: !0, stopPropagation: !0}, initialize: function (a) {
    this.parent(document.body, a), this.bound.eventStop = Function.from(!0), this.bound.contextMenu = this._contextmenu.bind(this), this.addEvents({drag: this._drag.bind(this), complete: this._complete.bind(this)}), this._skipmenu = 0, this.document.addEvent("contextmenu", this.bound.contextMenu), Modernizr.canvas && (this.canvas = new Element("canvas", {styles: {position: "fixed", top: 0, left: 0, zIndex: 10001}}))
}, start: function (a) {
    return !a.rightClick || Browser.Platform.linux ? !0 : Browser.Platform.mac && !a.control && !a.meta ? !0 : (this.canvas && this.canvas.setProperties({width: window.innerWidth, height: window.innerHeight}), a.rightClick = !1, this._skipmenu = 1, this.parent(a))
}, cancel: function (a) {
    return this.canvas && this.canvas.dispose(), a && (this._skipmenu = 0), this.parent(a)
}, stop: function (a) {
    return a && a.rightClick && a.preventDefault(), this.parent(a)
}, _contextmenu: function (a) {
    return !this._skipmenu
}, _complete: function (a, b) {
    this.canvas && this.canvas.dispose();
    var c = this.mouse.now.x - this.mouse.start.x, d = this.mouse.now.y - this.mouse.start.y;
    if (Math.abs(c) < this.options.minX || Math.abs(d) > this.options.maxY)
        return;
    c > 0 ? this.fireEvent("forward") : this.fireEvent("back")
}, _drag: function (a, b) {
    if (!this.canvas)
        return;
    var c = window.getScroll(), d = this.canvas.getContext("2d");
    d.strokeStyle = "rgba(233,59,72,0.83)", d.lineWidth = 5, d.lineCap = "round", d.lineJoin = "round", d.shadowColor = "rgba(0,0,0,0.45)", d.shadowOffsetX = 2, d.shadowOffsetY = 2, d.shadowBlur = 3, d.clearRect(0, 0, this.canvas.width, this.canvas.height), d.beginPath(), d.moveTo(this.mouse.start.x - c.x, this.mouse.start.y - c.y), d.lineTo(this.mouse.now.x - c.x, this.mouse.now.y - c.y), d.stroke(), this.canvas.parentNode || document.body.appendChild(this.canvas)
}}), SlidePage = new Class({Extends: Fx, options: {direction: "right", fixedSelector: null}, initialize: function (a, b) {
    this.element = document.id(a), this.container = document.id(document.body), this.view = app.view, this.elevatorItem = document.id("elevator_item"), this.parent(b), this.left = this.options.direction === "left"
}, prepareShow: function () {
    var a = Object.append(this.container.getSize(), {scroll: this.container.getScroll()});
    return a.from = 0, this.left ? a.to = -a.x : a.to = a.x, this.container.setStyles({overflow: "hidden"}, !0), this.view.setStyles({position: "absolute", top: 0, width: this.view.getSize().x}, !0), this.element.setStyles({position: "absolute", top: a.scroll.y, left: this.left ? 0 - a.x : a.x, width: a.x, height: a.y}, !0), this.elevatorItem && this.elevatorItem.hide(), this.options.fixedSelector && document.getElements(this.options.fixedSelector).absolutize(), app.page.$header && app.page.$header.detach(), a
}, prepareHide: function () {
    var a = this.state;
    return this.view.setStyles({top: 0}), this.element.setStyles({top: a.scroll.y, width: a.x, height: a.y}), this.container.setStyles({overflow: "hidden"}).scrollTo(a.scroll.x, a.scroll.y), this.elevatorItem && this.elevatorItem.hide(), this
}, set: function (a) {
    return this.view.setStyle("left", -a), this.element.setStyle("left", this.left ? -(this.state.x + a) : this.state.x - a), this
}, show: function () {
    var a = this.state = this.prepareShow();
    return this.start(a.from, a.to).chain(function () {
        this.element.setStyles({top: 0}), this.container.scrollTo(0, 0), this.callChain()
    }.bind(this))
}, hide: function () {
    var a = this.state;
    return this.prepareHide().start(a.to, a.from).chain(function () {
        this.elevatorItem && this.elevatorItem.show(), this.element.restoreStyles(), this.view.restoreStyles().setStyles({width: "auto"}), this.container.restoreStyles().scrollTo(a.scroll.x, a.scroll.y), this.options.fixedSelector && document.getElements(this.options.fixedSelector).unabsolutize(), app.page.$header && app.page.$header.attach(), delete this.state, this.callChain()
    }.bind(this))
}}), MessageChecker = new Class({Implements: [Options, Events], options: {interval: 3e4, indicator: ".menu-bar .alert-nav .num"}, initialize: function (a) {
    this.setOptions(a), this.indicator = document.getElement(this.options.indicator), this.attach()
}, fetchNow: function () {
    if (this.fetching)
        return;
    this.fetching = !0, (new Request.JSON({url: "/message/unread/", noCache: !0, onSuccess: function (a) {
        this.unreadActivities = a.unread_feeds, this.unreadMentions = a.unread_mentions, this.updateIndicator(a.unread_feeds + a.unread_mentions)
    }.bind(this), onComplete: function () {
        this.fetching = !1
    }.bind(this)})).get()
}, scheduleFetcher: function (a) {
    this._fetchTimer && clearTimeout(this._fetchTimer), a && this.fetchNow()
}, updateIndicator: function (a) {
    this.indicator.innerHTML = a, a == 0 ? this.indicator.addClass("hidden") : this.indicator.removeClass("hidden")
}, attach: function () {
    this.scheduleFetcher(!0)
}, detach: function () {
    this._fetchTimer && (clearTimeout(this._fetchTimer), delete this._fetchTimer)
}});
app.pinOrganizer = function (a) {
    function n() {
        c.options.hibernate = !1, r(function () {
            c.cells.each(function (a) {
                a.updateHeight()
            }), c.reposition(!0)
        }), d.getElements(".huaban-share-unit, .edit, .organize").hide(), (new Elements([g, f, e])).show(), document.body.addEvents(t), p(), app.page.isOrganizing = e
    }

    function o() {
        if (Browser.ie6) {
            location.reload();
            return
        }
        s(), d.getElements(".huaban-share-unit, .edit, .organize").show(), (new Elements([g, f, e])).hide(), $$(".pin.selected").removeClass("selected"), $$(".pin .pin-overlay").destroy(), document.body.removeEvents(t), A.hide(), c.cells.each(function (a) {
            a.updateHeight()
        }), c.reposition(!0), q(), app.page.isOrganizing = !1
    }

    function p() {
        i.inject(app.view)
    }

    function q() {
        i.dispose()
    }

    function r(a) {
        Asset.css("/css/organizing_pins.css", {id: "organizing_style", events: {load: a}})
    }

    function s() {
        document.id("organizing_style").destroy()
    }

    function u(a) {
        h.clone().cloneEvents(h).inject(a.getElement("a.img"))
    }

    function v() {
        this.getElement(".pin-overlay") || u(this), this.getElement(".pin-overlay").show()
    }

    function w() {
        this.hasClass("selected") || this.getElement(".pin-overlay").hide()
    }

    function x(a) {
        a.each(function (a) {
            a.getElement(".pin-overlay") || u(a), a.addClass("selected").getElement(".pin-overlay").show()
        })
    }

    function y(a) {
        a.each(function (a) {
            a.removeClass("selected").getElement(".pin-overlay").hide()
        })
    }

    function z(a) {
        if (a.key == "a" && (Browser.Platform.mac && a.meta || !Browser.Platform.mac && a.control))
            return m.removeClass("uncheck").click(), !1;
        if (a.key == "esc" && !a.control && !a.meta && !a.shift)
            return m.addClass("uncheck").click(), !1
    }

    function B(a) {
        if (!a.length)
            return;
        a.each(function (a) {
            var b = c.element.getChildren("[data-id=" + a + "]");
            c.remove(b)
        }), c.reposition(!0);
        var b = document.getElement("#board_card .tabs .pins");
        b.innerHTML = b.innerHTML.toInt() - a.length + "采集"
    }

    function D(a) {
        setTimeout(function () {
            Object.keys(C.getRunning()).length && app.msg("删除进行中，请稍候...", {type: "notice", timeout: !1, modal: !0})
        }, 500);
        var b = [], c = [];
        C.clear(), a.each(function (a, d) {
            C.addRequest("d" + d, new Request.JSON({url: "/pins/" + a + "/", method: "post", data: {_method: "DELETE"}, onComplete: function (d) {
                !d || d && d.err ? b.push(a) : c.push(a);
                if (!C.hasNext()) {
                    var e = function () {
                        var a = "成功删除 " + c.length + " 个采集";
                        b.length && (a += "，失败 " + b.length + " 个采集"), app.msg(a, {timeout: 4e3}), B(c)
                    };
                    $$(".floating-notice").destroy(), e()
                }
            }})).send("d" + d)
        })
    }

    function E(a, b) {
        setTimeout(function () {
            Object.keys(C.getRunning()).length && app.msg("正在移动采集，请稍候...", {type: "notice", timeout: !1, modal: !0})
        }, 500);
        var c = [], d = [];
        C.clear(), a.each(function (a, e) {
            C.addRequest("d" + e, new Request.JSON({url: "/pins/" + a + "/", method: "post", data: {board_id: b, moveonly: 1}, onComplete: function (e) {
                !e || e && e.err ? c.push(a) : d.push(a);
                if (!C.hasNext()) {
                    var f = function () {
                        var a = "成功移动" + d.length + "个采集";
                        c.length && (a += "，失败" + c.length + "个采集"), d.length && (a += '，<a href="/boards/' + b + '/">查看采集</a>'), app.msg(a, {timeout: 4e3}), B(d)
                    };
                    $$(".floating-notice").destroy(), f()
                }
            }})).send("d" + e)
        })
    }

    var b, c, d = a.getParent(".action-buttons"), e = (new Element("a.btn.wbtn.btn13.over", {html: "<strong>完成</strong>", events: {click: o}})).inject(d).hide(), f = (new Element("a.btn.rbtn.btn13.delete", {html: "<strong>删除</strong>"})).inject(d).hide(), g = (new Element("a.btn.wbtn.btn13.move", {html: "<strong>移动至...</strong>"})).inject(d).hide(), h = new Element(".pin-overlay", {events: {click: function () {
        return this.getParent(".pin").toggleClass("selected"), !1
    }}, html: '<i class="btn-select"></i>'}), i = new Element(".sub-toolbar"), j = g.clone().addEvent("click", function () {
        g.click()
    }).inject(i).set("style", ""), k = f.clone().addEvent("click", function () {
        f.click()
    }).inject(i).set("style", ""), l = e.clone().addEvent("click", function () {
        e.click()
    }).inject(i).set("style", ""), m = (new Element("a.btn.btn13.rbtn.check", {html: "<strong>全选</strong>"})).inject(i), t = {"mouseenter:relay(.pin)": v, "mouseleave:relay(.pin)": w, keydown: z}, A = new SmoothNotification({relative: {to: document.id("board_card"), position: "centertop", edge: "centertop", offset: {y: 16}}, styles: {"border-radius": "5px"}, duration: 4e3});
    a.onclick = function () {
        return c = app.page.$waterfall, b = c.options.cellWidth, n(), A.show("提示：选中采集后，点击右侧按钮可以批量移动或删除"), !1
    };
    var C = new Request.Queue({stopOnFailure: !1});
    f.addEvent("click", function () {
        A && A.hide();
        var a = $$(".pin.selected").get("data-id").clean();
        if (!a.length) {
            app.error("你还没有选择任何采集哦！");
            return
        }
        app.confirm({text: "确定要删除吗？删除采集后不能恢复", action: "删除"}, function (b) {
            if (!b)
                return;
            D(a)
        })
    }), g.addEvent("click", function () {
        A && A.hide();
        var a = $$(".pin.selected").get("data-id").clean();
        if (!a.length) {
            app.error("你还没有选择任何采集哦！");
            return
        }
        var b = app.showDialogBox("move_pins", {is_creation: app.page.board.extra && app.page.board.extra.is_creation})[1], c = b.getElement(".board-list");
        b.getElement(".go").addEvent("click", function () {
            var b = c.get("data-board-id");
            if (b == app.page.$url.split("/")[2]) {
                alert("不能移动到当前画板");
                return
            }
            app.hideAllDialogBox(), E(a, b)
        }), b.getElement(".close-btn").addEvent("click", function () {
            app.hideDialogBox("move_pins")
        })
    }), m.addEvent("click", function () {
        this.hasClass("uncheck") ? (y($$(".pin.selected")), this.removeClass("uncheck").getElement("strong").innerHTML = "全选") : (x($$(".pin")), this.addClass("uncheck").getElement("strong").innerHTML = "取消全选")
    })
};
var HuabanHotkeys = new Class({Implements: [Options, Events], options: {defaultEventType: "keydown"}, initialize: function (a) {
    this.setOptions(a), this.setEvents(), this.keyboard = new Keyboard({defaultEventType: this.options.defaultEventType, events: this.options.events}), this.startListening(), this.leadings = {}, this.scroll = function (a) {
        var b = document.id("pin_view_layer") || document.body;
        (new Fx.Scroll(b, {duration: 150, transition: "linear"})).start(0, b.getScroll().y + b.getSize().y * 2 / 3 * (a == "down" ? 1 : -1))
    }
}, setEvents: function () {
    var a = this;
    this.options.events = {t: function (b) {
        if (a.checkEditor())
            return
    }, "¾": function () {
        if (a.checkEditor())
            return;
        var b = document.id("pin_view_layer");
        if (b)
            return (new Fx.Scroll(b)).toTop();
        var c = document.id("NewIndicator");
        c && c.getStyle("display") == "block" ? c.fireEvent("click") : window.docScroller.toTop()
    }, "shift+¿": function () {
        if (a.checkEditor())
            return;
        a.win && a.win.isShowing ? a.hideIntro() : a.showIntro()
    }, right: function () {
        if (a.checkEditor())
            return;
        var b = document.id("zoomr_hide");
        if (b)
            return b.click();
        var c = document.getElement("#pin_view_layer .pin-view-arrows .next"), d = document.getElement("#pin_view_layer .pin-view");
        c && d && d.get("data-media-type") != 1 && c.click()
    }, left: function () {
        if (a.checkEditor())
            return;
        var b = document.id("zoomr_hide");
        if (b)
            return b.click();
        var c = document.getElement("#pin_view_layer .pin-view-arrows .prev"), d = document.getElement("#pin_view_layer .pin-view");
        c && d && d.get("data-media-type") != 1 && c.click()
    }, "¿": function () {
        if (a.checkEditor())
            return;
        var b = document.id("query");
        if (b)
            return setTimeout(function () {
                b.highlight().select()
            }, 100), !1
    }, esc: function (b) {
        var c = document.id("zoomr_hide"), d = document.getElement(".menu-bar .add-nav .menu"), e = document.id("pin_view_layer"), f = document.getElement("#pin_view_layer .zoom-layer");
        if (a.checkEditor())
            return b.target.blur(), b.stop();
        if (app.hideAllDialogBox())
            return b.stop();
        if (d && d.getStyle("display") !== "none")
            return d.hide(), b.stop();
        if (a.win && a.win.isShowing)
            return a.win.hide(), b.stop();
        if (app.hideDialog())
            return b.stop();
        if (app.hideSheet())
            return b.stop();
        if (c)
            return c.fireEvent("click"), b.stop();
        if (app.page.dmController && app.page.dmController.isShowing)
            return app.page.dmController.hide(), b.stop();
        if (f && f.getStyle("display") !== "none")
            return f.getElement(".close-zoom").click(), b.stop();
        if (e)
            return e.getElement(".close-layer").click(), b.stop()
    }, enter: function () {
        if (a.checkEditor())
            return;
        var b = document.getElement("#dialog_alert .buttons .action"), c = document.getElement("#repin_dialog");
        b ? b.click() : c && c.getStyle("display") == "block" && c.getElement(".buttons .action").click()
    }, n: function (b) {
        if (a.checkEditor())
            return;
        if (b.code == 78) {
            var c = document.getElement(".menu-bar .add-nav a");
            c && c.click()
        } else
            b.code == 110 && a.options.events["¾"]()
    }, f: function () {
        if (a.checkEditor())
            return;
        var b = document.id("pin_view_layer"), c = document.getElement(".pin-view .tool-bar .zoomin");
        if (!c)
            return;
        if (b)
            b.getElement(".zoom-layer").getStyle("display") == "none" ? c.click() : b.getElement(".zoom-layer .close-zoom").click();
        else {
            var d = document.id("zoomr_hide"), e = document.id("zoomr");
            c && !e && c.click(), d && e.getStyle("left") == "0px" && d.click()
        }
    }, o: function () {
        if (a.checkEditor())
            return;
        var b = document.getElement(".pin-view .image-holder>a");
        b && b.click()
    }, r: function () {
        if (a.checkEditor())
            return;
        var b = document.getElement(".pin-view .tool-bar .repin-btn");
        b && b.click()
    }, d: function () {
        if (a.checkEditor())
            return;
        var b = document.getElement(".pin-view .tool-bar .del-btn");
        b && b.click()
    }, g: function () {
        if (a.checkEditor())
            return;
        a.startLeading("g")
    }, s: function () {
        if (a.checkEditor())
            return;
        var b = document.getElement(".pin-view .image-holder img");
        if (b && a.leadings.leading_g) {
            var c = "https://www.google.com.hk/searchbyimage?image_url=";
            window.open(c + encodeURIComponent(b.src), "_blank"), a.cancelLeading("g")
        }
    }, j: function () {
        if (a.checkEditor())
            return;
        a.scroll("down")
    }, k: function () {
        if (a.checkEditor())
            return;
        a.scroll("up")
    }, m: function () {
        if (a.checkEditor())
            return;
        app.page.dmController && app.page.dmController.openFreshList()
    }, t: function () {
        if (a.checkEditor())
            return;
        (new Fx.Scroll(window, {duration: "short"})).toTop()
    }}
}, startListening: function () {
    this.keyboard.activate()
}, stopListening: function () {
    this.keyboard.deactivate()
}, checkEditor: function () {
    return window.document.activeElement.match("input,textarea,[contenteditable=true]")
}, startLeading: function (a) {
    this.cancelLeading(), clearTimeout(this.leadingTimer), this.leadings["leading_" + a] = !0, this.leadingTimer = function () {
        this.cancelLeading(a)
    }.delay(1e3, this)
}, cancelLeading: function (a) {
    a ? this.leadings["leading_" + a] && delete this.leadings["leading_" + a] : this.leadings = {}
}, showIntro: function () {
    var a = this;
    if (a.win && a.win.isShowing)
        return;
    app.render("base/hotkeys", "", function (b, c) {
        a.win || (a.win = new SmoothNotification({style: "window", styles: {position: "fixed"}, mask: !0, duration: !1})), a.win.show(Elements.from(c)[0]), a.win.main.id = "hotkeys_intro"
    })
}, hideIntro: function () {
    this.win.hide()
}});
window.addEvent("domready", function () {
    app.hotkey || (app.hotkey = new HuabanHotkeys)
});
var LikeCommentForm = new Class({Implements: [Options], options: {action: "Like", pinSource: ""}, initialize: function (a, b, c) {
    this.setOptions(c), this.target = document.id(a), this.pinId = b, this.build(), this.init()
}, init: function () {
    this._initRenderNewComment(), this._initCloseButton(), this._initShareButtons(), this._initSubmitButton()
}, _initRenderNewComment: function () {
    var a = this.element, b = a.getElement("textarea");
    this.options.action == "PinView" ? this.renderNewComment = function (a) {
        var c = $("pin_comments"), d = app.renderSync("base/comment_item", a.comment), e = Elements.from(d).inject(c);
        e.highlight(), b.set("value", "")
    } : this.options.action == "Like" && (this.renderNewComment = function (c) {
        var d = a.getParent("div.pin"), e = d.getElement("div.write"), f = e.getPrevious("div.comments");
        a.removeClass("disabled"), b.set("value", "");
        var g = app.renderSync("base/comment_item_convo", c.comment), h = Elements.from(g).inject(f);
        f.isDisplayed() || f.show(), h.highlight("#EEE");
        var i = app.page.$waterfall;
        i && i.update(d)
    })
}, _initCloseButton: function () {
    var a = this, b = this.element.getElement(".close");
    b.addEvent("click", function (b) {
        b.stop(), a.hide()
    })
}, _initShareButtons: function () {
    var a = this.options.action, b = this.pinId, c = this.options.pinSource;
    this.element.getElements(".share-button").addEvent("click", function (d) {
        d.stop();
        var e = this.get("data-to");
        try {
            ga("send", "event", "SocialShare", e + ":{js}", a + ":" + c)
        } catch (d) {
        }
        window.open("/pins/" + b + "/js-share/?to=" + e)
    })
}, _initSubmitButton: function () {
    var a = this, b = this.pinId, c = this.renderNewComment, d = this.element, e = d.getElement(".submit-comment"), f = d.getElement("textarea"), g = function (d) {
        (new Request.JSON({url: "/pins/" + b + "/comments/", data: {text: d}, onSuccess: function (f) {
            f.err && f.err == 412 ? (app.$form = {pinId: b, text: d}, app.requireCaptcha(c)) : f.err ? app.error(f.msg || app.COMMON_ERRMSG) : (c(f), a.options.action == "PinView" && app.msg("评论成功"), a.hide()), e.removeClass("disabled")
        }, onFailure: function () {
            app.error(app.COMMON_ERRMSG), e.removeClass("disabled")
        }})).post()
    };
    e.addEvent("click", function (a) {
        a.stop();
        if (d.hasClass("disabled"))
            return !1;
        var b = f.get("value").trim();
        if (b == "")
            return app.error("好歹输两个字吧，亲！");
        e.addClass("disable"), app.requireLogin(function () {
            g(b)
        })
    })
}, build: function () {
    var a = "div", b = "提交";
    this.options.action == "PinView" && (a = "li", b = "添加评论");
    var c = new Element(a, {"class": "comment"});
    (new Element("a", {"class": "close", href: "#", text: "x"})).inject(c), Browser.ie && Browser.version < 9 && (new Element("div", {"class": "pointer"})).inject(c);
    var d = new Element("form", {actions: "/pins/" + this.pinId + "/comments/", method: "post"});
    (new Element("textarea", {"class": "txt", name: "text", placeholder: "说说你赞的理由吧"})).inject(d), (new Element("input", {"class": "submit-comment", type: "submit", value: b})).inject(d), (new Element("label", {text: "把这个采集推荐给好友："})).inject(d);
    var e = new Element("ul", {"class": "js-share-buttons"}), f = {weibo: "分享到新浪微博", qzone: "分享到QQ空间", tqq: "分享到腾讯微博", douban: "分享到豆瓣", renren: "分享到人人"};
    for (var g in f) {
        var h = new Element("li");
        (new Element("a", {"class": "share-button " + g, href: "#", title: f[g], "data-to": g})).inject(h), h.inject(e)
    }
    e.inject(d), d.inject(c), this.element = c
}, show: function () {
    this.target.setStyle("display", "block"), this.element.inject(this.target);
    var a = this;
    a._hideOnOutsideClick = function (b) {
        if (a.element.contains(b.target))
            return !1;
        a.hide()
    }, document.body.addEvent("mouseup", a._hideOnOutsideClick)
}, hide: function () {
    this.element.dispose(), this.target.setStyle("display", ""), typeof this._hideOnOutsideClick == "function" && document.body.removeEvent("mouseup", this._hideOnOutsideClick)
}, focusInput: function () {
    var a = this.element.getElement("textarea");
    a.focus()
}}), installHuabanChromeAddon = function (a) {
    if (!Browser.chrome)
        return;
    if (Browser.version < 26 && Browser.version >= 21)
        return location.href = "http://hbfile.b0.upaiyun.com/extensions/huaban-chrome-extension-21.crx", a && a();
    if (Browser.version < 21)
        return alert("请更新你的浏览器，Chrome 版本必须高于 26");
    (new Element("link", {rel: "chrome-webstore-item", href: "https://chrome.google.com/webstore/detail/imamemhokkdleoelohnmkimbmpfglcil"})).inject(document.head);
    if (app.page.chromeAddonInstalling)
        return !1;
    app.page.chromeAddonInstalling = !0, app.msg("安装中，请稍候...", {timeout: !1});
    var b = function () {
        $$(".floating-notice").destroy(), app.showSheet("chrome_addon"), app.page.chromeAddonInstalling = !1
    };
    chrome.webstore.install("https://chrome.google.com/webstore/detail/imamemhokkdleoelohnmkimbmpfglcil", function () {
        $$(".floating-notice").destroy(), a && a()
    }, b), setTimeout(function () {
        app.page.chromeAddonInstalling && b()
    }, 3e4)
}, openJsShareWindow = function (a) {
    var b = Object.append({to: "weibo", pageUrl: "", imgUrl: "", title: ""}, a), c = ["url=" + encodeURIComponent(b.pageUrl)], d = "";
    if (b.to === "weibo")
        d = "http://v.t.sina.com.cn/share/share.php?", c.push("&appkey=2499394483"), c.push("&pic=" + b.imgUrl), c.push("&title=" + b.title), c.push("&ralateUid=2493118952");
    else if (b.to === "douban")
        d = "http://www.douban.com/recommend/?", c.push("&title=" + b.title), c.push("&comment=" + b.title);
    else if (b.to === "qzone")
        d = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?", c.push("&title=" + b.title), c.push("&pics=" + b.imgUrl);
    else if (b.to === "tqq")
        d = "http://share.v.t.qq.com/index.php?c=share&a=index&", c.push("&title=" + b.title), c.push("&appkey=801088644"), c.push("&pic=" + b.imgUrl), c.push("&assname=huaban20111114");
    else if (b.to === "renren")
        d = "http://widget.renren.com/dialog/share?", c.push("&title=" + b.title), c.push("&pic=" + b.imgUrl), c[0] = c[0].replace("url=", "resourceUrl="), c.push(c[0].replace("resourceUrl=", "&srcUrl="));
    else if (b.to === "qfriends")
        d = "http://connect.qq.com/widget/shareqq/index.html?", c.push("&desc=" + b.title), c.push("&site=" + encodeURIComponent("花瓣网"));
    else
        return;
    c = c.join("");
    var e = [d, c].join("");
    window.open(e)
}, MenuController = new Class({Implements: [Options], options: {menu: {}, trigger: {}, timeout: 500, showupDelay: 0}, initialize: function (a) {
    this.setOptions(a);
    var b = this;
    this.timer = {}, this.showupTimer = {}, (new Elements([this.options.trigger, this.options.menu])).addEvents({mouseenter: function () {
        clearTimeout(b.timer)
    }, mouseleave: function () {
        clearTimeout(b.timer), b.timer = function () {
            b.options.menu.hide().fireEvent("menu_hide")
        }.delay(b.options.timeout)
    }}), this.options.trigger.addEvents({mouseenter: function () {
        clearTimeout(b.showupTimer), b.showupTimer = function () {
            b.options.menu.show().fireEvent("menu_show")
        }.delay(b.options.showupDelay)
    }, mouseleave: function () {
        clearTimeout(b.showupTimer)
    }, click: function () {
        b.options.menu.show().fireEvent("menu_show")
    }})
}}), CharactersChecker = new Class({Implements: [Options], options: {remainDesc: "还可以输入{count}个字符", exceedDesc: "已经超过{count}个字符", disableSubmit: !1, maxChars: 140}, initialize: function (a, b) {
    this.setOptions(b), this.input = document.id(a), this.options.indicator && (this.indicator = document.id(this.options.indicator)), this.options.submit && (this.submit = document.id(this.options.submit)), this.attach()
}, attach: function () {
    var a = this;
    this.input.addEvent("keyup", function (b) {
        if (a.indicator) {
            var c = this.get("value").length;
            if (c >= a.options.maxChars) {
                var d = a.options.exceedDesc.replace("{count}", c - a.options.maxChars);
                a.indicator.set("text", d)
            } else {
                var d = a.options.remainDesc.replace("{count}", a.options.maxChars - c);
                a.indicator.set("text", d)
            }
        }
    })
}}), Parallax = new Class({Implements: [Options], options: {speed: .5}, initialize: function (a, b) {
    this.setOptions(b), this.el = document.id(a), this._addScrollEvent()
}, _addScrollEvent: function () {
    var a = this;
    window.addEvent("scroll", function (b) {
        var c = window.getSize().y, d = window.getScroll().y, e = a.el.getCoordinates().top, f = a.el.getCoordinates().height;
        if (e + f <= d || e >= d + c)
            return;
        var g = Math.round(Math.abs(e - d) * a.options.speed);
        a.el.setStyle("background-position", "center " + g + "px")
    })
}});
app.gaqTrackEvent = function (a, b) {
    var c = app.page.$url, d = {elementEvent: "click", category: "", action: "click", label: c, value: null, useTargetUrlAsLabel: !1, trackPromotion: !1};
    b = Object.append(d, b), document.getElements(a).addEvent(b.elementEvent, function (a) {
        var c = ["send", "event", b.category, b.action, b.label, b.value, {nonInteraction: 1}];
        if (b.useTargetUrlAsLabel) {
            var d = "";
            d = this.get("href");
            if (!d) {
                var e = a.target.match("a") ? e : a.target.getParent("a");
                e && (d = e.get("href"))
            }
            c[4] = d
        }
        try {
            b.trackPromotion ? (c[0] = "adsTracker.send", ga.apply(this, c)) : ga.apply(this, c)
        } catch (a) {
        }
    })
}, app.gaqTrackPromotion = function (a, b) {
    var c = document.getElements(a);
    if (!c || !c.length)
        return;
    b = Object.append({category: "", action: "click", label: app.page.$url, value: null}, b);
    var d = ["adsTracker.send", "event", "expose_" + b.category, b.action, b.label, b.value, {nonInteraction: 1}];
    try {
        ga.apply(this, d)
    } catch (e) {
    }
    b.trackPromotion = !0, app.gaqTrackEvent(a, b)
}, app.oauthError = function (a) {
    app._currentSheet ? app.hideSheet(function () {
        app.error(a)
    }) : app.error(a)
}, app.blinkMenuButton = function (a) {
    var b = document.getElement(".menu-bar .menu-nav");
    if (!b)
        return;
    a == "start" ? b.addClass("blink") : a == "stop" && b.removeClass("blink")
};
var FormatBoardList = new Class({initialize: function (a) {
    this.boards = a, this.pinyin = new Pinyin({keepUnknownWords: !0}), this._sort()
}, update: function (a) {
    this.boards = a, this._sort()
}, _pinyin: function () {
    this.boards.each(function (a) {
        var b = this.pinyin.getCharsArray(a.title, "detailed"), c = "";
        for (var d = 0; d < b.length; d++)
            if (typeof b[d] == "string")
                c += b[d];
            else
                for (var e = 0; e < b[d].length; e++)
                    c += b[d][e].full;
        a.pinyin = c.toUpperCase(), a.acronym = a.pinyin.charAt(0)
    }.bind(this))
}, _sort: function () {
    this._pinyin();
    var a = this.boards;
    this.recent = a.slice(0, 5), this.sort_boards = a.slice(5).sort(function (a, b) {
        return a.acronym > b.acronym ? 1 : a.acronym < b.acronym ? -1 : 0
    })
}, formatJson: function () {
    var a = this.sort_boards, b = {};
    b.recent = this.recent, b.other = [], b.num = [], b.letters = [];
    var c = [];
    for (var d = 0; d < a.length; d++) {
        var e = a[d].acronym;
        e.test(/[A-Z]/) ? d > 0 && a[d - 1].acronym == e ? c.push(a[d]) : (c = [a[d]], b.letters.push({letter: e, boards: c})) : e.test(/[0-9]/) ? b.num.push(a[d]) : b.other.push(a[d])
    }
    return b
}, match: function (a, b) {
    var c = this.recent, d = c.concat(this.sort_boards), e = [], f = this.generateReg(a);
    for (var g = 0; g < d.length; g++) {
        var h = d[g].pinyin.test(f, "i"), i = d[g].title.test(f, "i");
        if (h || i)
            d[g].pinyin == a || d[g].title == a ? e.unshift(d[g]) : e.push(d[g])
    }
    return e
}, generateReg: function (a) {
    var b = "*.?+$^[](){}|/\\".split("");
    return a.split("").map(function (a) {
        return b.contains(a) ? "\\" + a : a
    }).join(".*")
}}), stopWindowScroll = function (a) {
    $$(a).each(function (a) {
        var b = null;
        a.addEvent("mousewheel", function (c) {
            b || (b = a.getSize().y);
            var d = c.event.wheelDeltaY || c.wheel;
            this.scrollTop <= 0 && c.wheel > 0 ? c.preventDefault() : this.getScroll().y + b - d >= this.getScrollSize().y && (this.scrollTo(0, this.getScrollSize().y), c.preventDefault())
        })
    })
}, dateToHoroscope = function (a, b) {
    if (typeof a == "object")
        b = a.getDate(), a = a.getMonth() + 1;
    else if (~a.indexOf("-")) {
        var c = a.split("-");
        a = c[c.length - 2], b = c[c.length - 1]
    }
    if (a == 89 && b == 64)
        return "龙虾";
    var d = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯", e = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return d.substr(a * 2 - (b < e[a - 1] ? 2 : 0), 2)
};
app.showPinViewLayer = function (a, b) {
    var c = "/pins/" + a + "/";
    (new Request.JSON({url: c, noCache: !0, onSuccess: function (a) {
        if (a.err)
            return location.href = c;
        var d = a.pin, e = d.raw_text ? d.raw_text.length > 20 ? d.raw_text.substr(0, 20) + "..." : d.raw_text : "", f = d.user ? d.user.username : "花瓣用户", g = (e ? e + "@" : "") + f + "采集到" + d.board.title + "(" + (d.board && d.board.pin_count) + "图)" + "_花瓣";
        app.setTitle(g), app.hidePinViewLayer();
        try {
            app.page.$header.element.setStyle("z-index", 1)
        } catch (h) {
        }
        app.render("base/pin_view_layer", a, function (a, c) {
            var d = Elements.from(c)[0].inject(app.view), e = document.id("layout_elevator_item"), f = document.id("layout_elevator"), g = document.id("pin_view_layer");
            d.addEvent("scroll", function () {
                document.body.setStyle("overflow", "hidden"), g.getScrollTop() > 200 ? f.removeClass("off") : f.addClass("off")
            });
            var h = e.getElement(".plus"), i = e.getElement(".plus-popup");
            new MenuController({menu: i, trigger: h, showupDelay: 1e3}), f.addEvent("click", function () {
                (new Fx.Scroll(g)).toTop()
            }), document.body.setStyle("overflow", "hidden");
            var j = d.getElement(".pin-view-arrows .prev"), k = d.getElement(".pin-view-arrows .next");
            j && j.setStyles({position: "fixed", left: j.getCoordinates(document.body).left}), k && k.setStyles({position: "fixed", right: document.body.getSize().x - k.getCoordinates(document.body).right}), a && Browser.exec(a), app.view.fireEvent("initWaterfall"), b && b()
        })
    }, onFailure: function () {
        window.location.href = c
    }})).get()
}, app.hidePinViewLayer = function () {
    try {
        document.body.setStyle("overflow", ""), app.page.$header.element.setStyle("z-index", "")
    } catch (a) {
    }
    var b = document.id("pin_view_layer");
    b && b.destroy()
}, app.getCaptcha = function () {
    var a = new Date / 1, b = "callback=app.tdcaptcha.showcode&rand=" + a, c = app.settings.tdcaptcha.create_url;
    c += "?pubkey=" + app.settings.tdcaptcha.public_key, c += "&" + b;
    var d = document.id("captcha_script");
    d && d.destroy(), d = new Element("script", {id: "captcha_script", src: c}), document.body.appendChild(d)
}, app.feedback = function () {
    var a = !1;
    return function (b, c) {
        c = typeof c == "function" ? c : function () {
        };
        if (a)
            return c();
        a = !0, setTimeout(function () {
            (new Request.JSON({url: "/feedback/pin", data: b, onSuccess: function (a) {
                c()
            }, onFailure: function () {
                a = !1, c()
            }})).post()
        }, 5e3)
    }
}(), function () {
    Array.isArray || (Array.isArray = function (a) {
        return "[object Array]" == Object.prototype.toString.call(a)
    }), Array.getRandom || (Array.getRandom = function (a) {
        return a.length ? a[Math.floor(Math.random() * a.length)] : null
    }), Object.keys || (Object.keys = function (a) {
        var b = [];
        for (var c in a)
            a.hasOwnProperty(c) && b.push(c);
        return b
    }), Object.append || (Object.append = function (a) {
        for (var b = 1, c = arguments.length; b < c; b++) {
            var d = arguments[b] || {};
            for (var e in d)
                a[e] = d[e]
        }
        return a
    }), String.prototype.len || (String.prototype.len = function () {
        var a = this.toString(), b = 0;
        for (var c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            d > 128 ? b += 2 : b += 1
        }
        return b
    }), String.prototype.brief || (String.prototype.brief = function (a, b) {
        b = b || "...";
        var c = 0, d = "";
        for (var e = 0, f = this.length; e < f; e++) {
            var g = this.charCodeAt(e);
            g > 128 ? c += 2 : c += 1;
            if (c <= a)
                d += this.charAt(e);
            else
                return d + b
        }
        return d
    }), String.prototype.nl2br || (String.prototype.nl2br = function () {
        return this.replace(/(\r|\n)+/g, "<br/>")
    })
}(), function () {
    var a, b = /\\?([a-z])/gi, c = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], d = function (a, b) {
        return f[a] ? f[a]() : b
    }, e = function (a, b) {
        return (a = a + "").length < b ? (new Array(++b - a.length)).join("0") + a : a
    }, f = {d: function () {
        return e(f.j(), 2)
    }, D: function () {
        return f.l().slice(0, 3)
    }, j: function () {
        return a.getDate()
    }, l: function () {
        return c[f.w()] + "day"
    }, N: function () {
        return f.w() || 7
    }, S: function () {
        var a = f.j();
        return a < 4 | a > 20 && ["st", "nd", "rd"][a % 10 - 1] || "th"
    }, w: function () {
        return a.getDay()
    }, z: function () {
        var a = new Date(f.Y(), f.n() - 1, f.j()), b = new Date(f.Y(), 0, 1);
        return Math.round((a - b) / 864e5) + 1
    }, W: function () {
        var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3), b = new Date(a.getFullYear(), 0, 4);
        return e(1 + Math.round((a - b) / 864e5 / 7), 2)
    }, F: function () {
        return c[6 + f.n()]
    }, m: function () {
        return e(f.n(), 2)
    }, M: function () {
        return f.F().slice(0, 3)
    }, n: function () {
        return a.getMonth() + 1
    }, t: function () {
        return (new Date(f.Y(), f.n(), 0)).getDate()
    }, L: function () {
        var a = f.Y();
        return a % 4 == 0 & a % 100 != 0 | a % 400 == 0
    }, o: function () {
        var a = f.n(), b = f.W(), c = f.Y();
        return c + (a === 12 && b < 9 ? -1 : a === 1 && b > 9)
    }, Y: function () {
        return a.getFullYear()
    }, y: function () {
        return (f.Y() + "").slice(-2)
    }, a: function () {
        return a.getHours() > 11 ? "pm" : "am"
    }, A: function () {
        return f.a().toUpperCase()
    }, B: function () {
        var b = a.getUTCHours() * 3600, c = a.getUTCMinutes() * 60, d = a.getUTCSeconds();
        return e(Math.floor((b + c + d + 3600) / 86.4) % 1e3, 3)
    }, g: function () {
        return f.G() % 12 || 12
    }, G: function () {
        return a.getHours()
    }, h: function () {
        return e(f.g(), 2)
    }, H: function () {
        return e(f.G(), 2)
    }, i: function () {
        return e(a.getMinutes(), 2)
    }, s: function () {
        return e(a.getSeconds(), 2)
    }, u: function () {
        return e(a.getMilliseconds() * 1e3, 6)
    }, e: function () {
        throw "Not supported (see source code of date() for timezone on how to add support)"
    }, I: function () {
        var a = new Date(f.Y(), 0), b = Date.UTC(f.Y(), 0), c = new Date(f.Y(), 6), d = Date.UTC(f.Y(), 6);
        return 0 + (a - b !== c - d)
    }, O: function () {
        var b = a.getTimezoneOffset(), c = Math.abs(b);
        return (b > 0 ? "-" : "+") + e(Math.floor(c / 60) * 100 + c % 60, 4)
    }, P: function () {
        var a = f.O();
        return a.substr(0, 3) + ":" + a.substr(3, 2)
    }, T: function () {
        return "UTC"
    }, Z: function () {
        return -a.getTimezoneOffset() * 60
    }, c: function () {
        return "Y-m-d\\Th:i:sP".replace(b, d)
    }, r: function () {
        return "D, d M Y H:i:s O".replace(b, d)
    }, U: function () {
        return a / 1e3 | 0
    }};
    Date.format = function (c, e) {
        return arguments.length == 1 ? (e = c, c = "Y-m-d H:i:s") : arguments.length == 0 && (e = null, c = "Y-m-d H:i:s"), a = e == null ? new Date : e instanceof Date ? new Date(e) : new Date(e * 1e3), c.replace(b, d)
    }, Date.prototype.format = function (a) {
        return Date.format(a, this)
    }
}(), function () {
    var a = {lessThanMinuteAgo: "刚刚", minuteAgo: " 1 分钟前", minutesAgo: " {delta} 分钟前", hourAgo: " 1 小时前", hoursAgo: " {delta} 小时前", dayAgo: "昨天", daysAgo: " {delta} 天前", weekAgo: " 1 周前", weeksAgo: " {delta} 周前", monthAgo: " 1个月前", monthsAgo: " {delta} 个月前", yearAgo: " 1 年前", yearsAgo: " {delta} 年前", lessThanMinuteUntil: "从现在开始不到 1 分钟", minuteUntil: "从现在开始約 1 分钟", minutesUntil: "从现在开始约 {delta} 分钟", hourUntil: "从现在开始 1 小时", hoursUntil: "从现在开始约 {delta} 小时", dayUntil: "从现在开始 1 天", daysUntil: "从现在开始 {delta} 天", weekUntil: "从现在开始 1 星期", weeksUntil: "从现在开始 {delta} 星期", monthUntil: "从现在开始 1 个月", monthsUntil: "从现在开始 {delta} 个月", yearUntil: "从现在开始 1 年", yearsUntil: "从现在开始 {delta} 年"};
    Date.getTimePhrase = function (a) {
        var b = a < 0 ? "Until" : "Ago";
        a < 0 && (a *= -1);
        var c = {minute: 60, hour: 60, day: 24, week: 7, month: 52 / 12, year: 12, eon: Infinity}, d = "lessThanMinute";
        for (var e in c) {
            var f = c[e];
            if (a < 1.5 * f) {
                a > .75 * f && (d = e);
                break
            }
            a /= f, d = e + "s"
        }
        return a = Math.round(a), {msg: d, delta: a, suffix: b}
    }, Date.timeAgo = function (b) {
        var c = b == null ? new Date : b instanceof Date ? new Date(b) : new Date(b * 1e3), d = Math.round((new Date - c) / 1e3);
        if (d > 2592e3)
            return Date.format("Y-m-d H:i:s", c);
        var e = Date.getTimePhrase(d);
        return a[e.msg + e.suffix].replace("{delta}", e.delta)
    }, Date.prototype.timeAgo = function () {
        return Date.timeAgo(this)
    }
}(), function () {
    var a = function (a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
    }, b = function (a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate() - 1
    }, c = function (a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear()
    };
    Date.formatMoment = function (d) {
        var e = d == null ? new Date : d instanceof Date ? new Date(d) : new Date(d * 1e3), f = new Date, g;
        return a(e, f) ? g = "今天 H:i" : b(e, f) ? g = "昨天 H:i" : c(e, f) ? g = "m 月 d 日 H:i" : g = "Y 年 m 月 d 日 H:i", Date.format(g, e)
    }, Date.prototype.formatMoment = function () {
        return Date.formatMoment(this)
    }
}(), function (a) {
    return Object.append(a, {templates: {}, attrs: function (b) {
        var c = [], d = b.terse;
        delete b.terse;
        var e = Object.keys(b), f = e.length;
        if (f) {
            c.push("");
            for (var g = 0; g < f; ++g) {
                var h = e[g], i = b[h];
                "boolean" == typeof i || null == i ? i && (d ? c.push(h) : c.push(h + '="' + h + '"')) : "class" == h && Array.isArray(i) ? c.push(h + '="' + a.escape(i.join(" ")) + '"') : c.push(h + '="' + a.escape(i) + '"')
            }
        }
        return c.join(" ")
    }, _: function (a) {
        return a ? String(a).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
    }, img: function (a, b, c, d) {
        var e = '<img src="' + this.imgURL(a, b) + '"', f = this.imgSize(a, d || b);
        e += ' width="' + f.w + '" height="' + f.h + '"';
        if (c)
            for (k in c)
                e += " " + k + '="' + c[k] + '"';
        return e + "/>"
    }, imgURL: function (a, b) {
        if (!a)
            return "";
        if ("string" == typeof a)
            return a;
        var c = "http://" + this.settings.imgHosts[a.bucket] + "/" + a.key;
        if (!b)
            return c;
        b = this.imgSuffixIsRetinaDisplay(b);
        var d = c + "_" + b;
        return d
    }, gifURL: function (a) {
        return /g$/.test(a) ? a.substr(0, a.length - 1) : a + "g"
    }, imgSuffixIsRetinaDisplay: function (a) {
        if (!this.isRetinaDisplay)
            return a;
        switch (a) {
            case "fw78":
                return "fw192";
            case "fw236":
                return "fw320";
            case "sq75":
                return "sq180";
            case "sq235":
                return "sq490";
            default:
                return a
        }
    }, imgSize: function (a, b) {
        if (!b)
            return {w: a.width, h: a.height};
        var c, d, e = a.width, f = a.height, g = b.substr(0, 2), h = Number(b.substr(2));
        switch (g) {
            case "sq":
                c = d = h;
                break;
            case "fm":
                if (h < 0 || e < h && f < h)
                    c = e, d = f;
                else {
                    c = d = h;
                    var i = c / d, j = e / f;
                    i < j ? d = Math.round(c / j) : c = Math.round(d * j)
                }
                break;
            case "fw":
                e < h ? (c = e, d = f) : (c = h, d = Math.round(h * f / e));
                break;
            default:
        }
        return {w: c, h: d}
    }, avatar: function (a, b) {
        var c = this.settings.default_avatars || [], d = ~c.indexOf(a && a.avatar && a.avatar.id);
        a || (a = {});
        if (!a || !a.avatar || d)
            a.avatar = this.settings && this.settings.default_avatar_img;
        return b == "sq75" && (b = "sq75sf"), this.imgURL(a.avatar, b || "sq75sf")
    }, isVerified: function (a) {
        return !1;
        var b
    }, url: function (a, b) {
        if (~a.indexOf("://"))
            return a;
        var c = b ? "https" : this.scheme;
        return c + "://" + this.host + a
    }, mkurl: function (a, b) {
        var c = [], d;
        for (f in b) {
            if (f.indexOf("_") === 0)
                continue;
            b[f] == "%_page_" || b[f] == "%_limit_" ? d = b[f] : d = encodeURIComponent(b[f]), b[f] && c.push(f + "=" + d)
        }
        return c.length ? (a = a.replace(/\/$/, ""), a + "/?" + c.join("&")) : a
    }, GACampaignURL: function (a, b) {
        var c = [];
        return b.source && c.push("utm_source=" + b.source), b.medium && c.push("utm_medium=" + b.medium), b.term && c.push("utm_term=" + b.term), b.content && c.push("utm_content=" + b.content), b.name && c.push("utm_campaign=" + b.name), a + "?" + c.join("&")
    }, format_text: function (a, b, c) {
        a = this._(a);
        if (!b)
            return a.nl2br();
        var d = Array.isArray(b.mentions) && b.mentions || [], e = Array.isArray(b.links) && b.links || [], f = Array.isArray(b.tags) && b.tags || [];
        d = d.map(function (a) {
            return a.type = "mention", a
        }), e = e.map(function (a) {
            return a.type = "link", a
        }), f = f.map(function (a) {
            return a.type = "tag", a
        }), b = d.concat(e, f).sort(function (a, b) {
            return a.start - b.start
        });
        if (!b || b.length <= 0)
            return a.nl2br();
        var g = [], h = 0;
        for (var i = 0; i < b.length; i++) {
            if (b[i].start > a.length)
                break;
            if (b[i].type == "mention" && b[i].mention_id && b[i].user)
                g.push(a.substr(h, b[i].start - h)), g.push('<a class="text-meta meta-mention" href="/' + b[i].user.urlname + '/">@'), g.push(a.substr(b[i].start + 1, b[i].offset - 1)), g.push("</a>");
            else if (b[i].type == "link") {
                var j = a.substr(b[i].start, b[i].offset);
                g.push(a.substr(h, b[i].start - h));
                var k = j.replace(/^https?:\/\/(www\.)?/, ""), l = j.match(/^(https?:\/\/).*$/), m = k, n = "", o = !1;
                l ? l = l[1] : l = "", k.length > 30 && (o = !0, m = k.slice(0, 27), n = k.slice(27)), g.push('<a class="text-meta meta-link" rel="nofollow" href="' + j + '" title="' + j + '" target="_blank">'), g.push('<span class="invisible">' + l + "</span>"), g.push('<span class="">' + m + "</span>"), g.push('<span class="invisible">' + n + "</span>"), g.push('<span class="ellipsis"><span class="invisible">&nbsp;</span>'), o && g.push("…"), g.push("</span></a>")
            } else if (b[i].type == "tag") {
                var p = a.substr(b[i].start + 1, b[i].offset - 2);
                g.push(a.substr(h, b[i].start - h)), c && c.tag_icon ? (g.push('<a class="text-meta meta-tag" href="/search/?q=' + p + '">'), g.push('<i class="tag-icon"></i>'), g.push(p), g.push("</a>")) : (g.push('<a class="text-meta meta-tag" href="/search/?q=' + p + '">#'), g.push(p), g.push("#</a>"))
            }
            h = b[i].start + b[i].offset
        }
        return g.push(a.substr(h)), g.join("").nl2br()
    }}), a.escape = a._, a
}(typeof exports == "undefined" ? window.app : exports), function (a) {
    var b = a.routers || [], c = a.map = function (a, c) {
        typeof a == "string" && (a = new RegExp(a)), b.push([a, c])
    }, d = a.route = function (b) {
        var c = a.getRouter(b);
        if (c) {
            var d = c.call(this, this);
            return this.onRoute && (this._firstOnRoute = !0, this.onRoute(d)), d
        }
        return !1
    };
    a.getRouter = function (a) {
        a = (a || this.page.$url).split("?")[0];
        for (var c = 0, d = b.length; c < d; c++)
            if (b[c][0].test(a))
                return b[c][1];
        return null
    }, c(/^\/((all|following|from|popular|favorite)(\/([^\/]+)(\/youku|\/ku6|\/56|\/baomihua)?)?)?\/?$/, function (b) {
        var c = a.view || {};
        return b.page.show_categories_bar = !b.page.filter || !~b.page.filter.indexOf("site:"), b.render("base/index", c, function (a, d) {
            c.show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {fetcher: !~b.page.$url.indexOf("popular"), loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                return b.page.pins && Array.prototype.push.apply(b.page.pins, a.pins), {data: a.pins}
            })})).reposition()
        })
    }), c(/^\/explore(\/([^\/]+))?\/?$/, function (b) {
        var c = a.view || {};
        return b.page.keyword_id ? b.render("explore/detail", c, function (a, d) {
            c.show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                return b.page.pins && Array.prototype.push.apply(b.page.pins, a.pins), {data: a.pins}
            }, {template: "base/pin_item"})})).reposition()
        }) : b.render("explore/explore_old", c, function (a, d) {
            c.show(), b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, 1, function (a) {
                return {data: a.pins || a.boards}
            })})).reposition(), b.page.nox = !0
        })
    }), c(/^\/partner\/uc\/((all|home|photography|illustration|kids|pets|anime|beauty)(\/([^\/]+))?)?\/?$/, function (b) {
        var c = a.view || {};
        return b.render("uc/index", c, function (a, d) {
            c.show();
            var e = 1;
            b.page.pins && b.page.pins.length && (b.page.$waterfall = (new Waterfall("waterfall", {maxCols: 4, cellSpace: 20, cellWidth: 235, paddingBottom: !0, endEl: '<div class="uc-get-more"><a href="/favorite/' + b.page.tag_name + '" target="_blank">查看更多</a></div>', loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                return b.page.pins && Array.prototype.push.apply(b.page.pins, a.pins), {data: a.pins}
            }, {template: "uc/recommend_item"})})).reposition())
        })
    }), c(/^\/users\/((all|favorite|popular)(\/([^\/]+))?)?\/?$/, function (b) {
        var c = a.view || {};
        return b.render("base/promote_users", c, function (a, b) {
            c.show()
        })
    }), c(/^\/boards\/((all|favorite|popular)(\/([^\/]+))?)?\/?$/, function (b) {
        var c = a.view || {};
        return b.page.show_categories_bar = !0, b.render("base/index", c, function (a, d) {
            c.show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                return b.page.boards && Array.prototype.push.apply(b.page.boards, a.boards), {data: a.boards}
            })})).reposition()
        })
    }), c(/^\/search(\/(pins|boards|people|gift))?\/?$/, function (b) {
        var c = a.view || {};
        return b.render("base/search_result", c, function (a, d) {
            c.show(), b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, 1, function (a) {
                var c;
                return b.page.query.type == "people" ? c = "users" : b.page.query.type == "gift" ? c = "pins" : c = b.page.query.type + "s", b.page[c] && Array.prototype.push.apply(b.page[c], a[c]), {page: a.page, data: a[c]}
            }), hibernate: !b.page.query.text.match(/(保时捷|porsche)/ig)})).reposition()
        })
    }), c(/^\/pins\/\d+\/?$/, function (b) {
        var c = a.view || {}, d = b.page, e = d.pin, f = {};
        b.settings.categories.forEach(function (a) {
            f[a.id] = a.name
        });
        var g = e.raw_text ? e.raw_text.length > 20 ? e.raw_text.substr(0, 20) + "..." : e.raw_text : "", h = e.user ? e.user.username : "花瓣用户", i = e.board.category_id ? f[e.board.category_id] : "";
        return d.title = (g ? g + "@" : "") + h + "采集到" + e.board.title + "(" + (e.board && e.board.pin_count) + "图)" + "_花瓣" + i, b.render("base/pin_view_page", c, function (a, b) {
            c.addClass("view").show(), c.fireEvent("initWaterfall");
            if (!history.state && document.referrer && document.referrer.indexOf("http://huaban.com/cc") == 0)
                try {
                    ga("send", "event", "From Design", "Pin Page")
                } catch (d) {
                }
            return !1
        })
    }), c(/^\/pins\/\d+\/zoom\/?$/, function (b) {
        var c = a.view || {}, d = b.page, e = d.pin, f = {};
        b.settings.categories.forEach(function (a) {
            f[a.id] = a.name
        });
        var g = e.raw_text ? e.raw_text.length > 20 ? e.raw_text.substr(0, 20) + "..." : e.raw_text : "", h = e.user ? e.user.username : "花瓣用户", i = e.board.category_id ? f[e.board.category_id] : "";
        return d.title = g + "@" + h + "采集到" + e.board.title + "(" + (e.board && e.board.pin_count) + "图)" + "_花瓣" + i, b.render("base/pin_view_zoom", c, function (a, b) {
            return c.addClass("view").show(), !1
        })
    }), c(/^\/boards\/\d+\/?$/, function (b) {
        var c = a.view || {}, d = b.page, e = d.board;
        return d.title = (e.is_private == 2 ? "待归类采集" : e.title) + "(" + e.pin_count + "图)_@" + (e.user ? e.user.username : "") + "收集_花瓣" + (e.category_name || ""), b.render("base/board_view", c, function (a, e) {
            c.show(), b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, function (a) {
                return b.page.board && Array.prototype.push.apply(b.page.board.pins, a.board.pins), {data: a.board.pins, extra: {user: a.board.user, board: a.board, hide_user: !0}}
            })})).reposition(), function () {
                if (~window.location.href.indexOf("setcover=1") && b.req.user.user_id == d.board.user_id) {
                    var a = function () {
                        $$(".pin .actions .left .repin").each(function (a) {
                            a.getParent(".left").set("html", '<a title="设置封面" href="#" onclick="return false;" class="set cover-change btn btn14"><span class="text"> 设置封面</span></a>')
                        })
                    };
                    a(), b.page.$waterfall.addEvent("loadComplate", a), b.view.addEvent("click:relay(.cover-change)", function () {
                        b.dialog = {};
                        var a = this;
                        b.dialog.board_id = b.page.board.board_id, b.dialog.pin_id = a.getParent(".pin").get("data-id"), b.showDialog("board_cover_pinitem");
                        var c = this.getParent(".pin").getElement(".img img").src;
                        return c = c.replace(/_.*$/, "_sq235"), document.getElement("#board_cover_pinitem .cover img").src = c, !1
                    })
                }
            }();
            if (!history.state && document.referrer && document.referrer.indexOf("http://huaban.com/cc") == 0)
                try {
                    ga("send", "event", "From Design", "Board Page")
                } catch (f) {
                }
        })
    }), c(/^\/boards\/\d+\/followers\/?$/, function (b) {
        var c = a.view || {}, d = b.page, e = d.board;
        return b.render("base/board_view", c, function (a, d) {
            c.show(), b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: "div.person-item", loader: b.createCellLoader(b.page.$url, 20, function (a) {
                return {data: a.followers}
            }, {template: "base/person_item"})})).reposition()
        })
    }), c(/^\/bookmarklet_success\/?$/, function (b) {
        var c = a.view || {};
        return b.render("base/bookmarklet_success", c, function (a, b) {
            c.show()
        })
    }), c(/^\/message\/(mentions|activities)\/?$/, function (b) {
        var c = a.view || {};
        return b.render("messages_deprecated/message", c, function (a, b) {
            return c.addClass("view").show(), !1
        })
    }), c(/^\/_error\/?$/, function (b) {
        var c = a.view || {};
        return b.render("base/error", c, function (a, b) {
            c.show()
        })
    }), c(/^\/gift\/?$/, function (b) {
        var c = a.view || {};
        return b.render("gift/index", c, function (a, b) {
            c.show()
        })
    });
    var e = function (a) {
        var b = a.page, c = b.user;
        b.title = c && c.username ? c.username + "的花瓣个人主页" : ""
    };
    return c(/^\/[a-z0-9-_\.]+(\/about|)\/?$/, function (b) {
        e(b);
        var c = a.view || {};
        return b.render("base/people_boards", c, function (a, d) {
            c.addClass("profile").show(), b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: !1})).reposition();
            if (!history.state && document.referrer && document.referrer.indexOf("http://huaban.com/cc") == 0)
                try {
                    ga("send", "event", "From Design", "User Page")
                } catch (e) {
                }
        })
    }), c(/^\/[a-z0-9-_\.]+\/pins\/?$/, function (b) {
        e(b);
        var c = a.view || {};
        return b.render("base/people_pins", c, function (a, d) {
            c.addClass("profile").show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                var b = a.user.pins;
                return b.each(function (b) {
                    b.user = a.user
                }), {data: b}
            })})).reposition()
        })
    }), c(/^\/[a-z0-9-_\.]+\/commodities\/?$/, function (b) {
        e(b);
        var c = a.view || {};
        return b.render("base/people_commodities", c, function (a, d) {
            c.addClass("profile").show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                var b = a.user.commodities;
                return b.each(function (b) {
                    b.user = a.user
                }), {data: b}
            })})).reposition()
        })
    }), c(/^\/[a-z0-9-_\.]+\/creations\/?$/, function (b) {
        e(b);
        var c = a.view || {};
        return b.render("base/people_creations", c, function (a, d) {
            c.addClass("profile").show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                var b = a.user.creations;
                return b.each(function (b) {
                    b.user = a.user
                }), {data: b}
            })})).reposition()
        })
    }), c(/^\/shiji\/following\/?/, function (b) {
        var c = a.view;
        return b.render("shiji/following", c, function (a, d) {
            c.show(), b.page.$waterfall = new Waterfall("waterfall", {hibernate: !1, paddingBottom: !0, cellWidth: 320, cellSpace: 20, minCols: 3, maxCols: 3, containerSelector: null, container: "waterfall"})
        })
    }), c(/^\/[a-z0-9-_\.]+\/following\/explores\/?$/, function (b) {
        e(b), b.page.filter = "explores";
        var c = a.view || {};
        return b.render("base/people_following", c, function (a, d) {
            c.show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: "div.explore-board", loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                return {data: a.explores}
            }, {template: "base/explore_board"})})).reposition()
        })
    }), c(/^\/[a-z0-9-_\.]+\/following\/boards\/?$/, function (b) {
        e(b), b.page.filter = "boards";
        var c = a.view || {};
        return b.render("base/people_following", c, function (a, d) {
            c.show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, e, function (a) {
                return b.page.boards && Array.prototype.push.apply(b.page.boards, a.boards), {data: a.boards}
            })})).reposition()
        })
    }), c(/^\/[a-z0-9-_\.]+\/following\/?$/, function (b) {
        e(b), b.page.filter = "users";
        var c = a.view || {};
        return b.render("base/people_following", c, function (a, d) {
            c.addClass("profile").show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: "div.person-item", loader: b.createCellLoader(b.page.$url, 20, function (a) {
                return {data: a.users}
            }, {template: "base/person_item"})})).reposition()
        })
    }), c(/^\/[a-z0-9-_\.]+\/followers\/?$/, function (b) {
        e(b);
        var c = a.view || {};
        return b.render("base/people_followers", c, function (a, d) {
            c.addClass("profile").show();
            var e = b.page.page || !1;
            b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: "div.person-item", loader: b.createCellLoader(b.page.$url, 20, function (a) {
                return {data: a.users}
            }, {template: "base/person_item"})})).reposition()
        })
    }), c(/^\/[a-z0-9-_\.]+\/likes\/?$/, function (b) {
        e(b);
        var c = a.view || {};
        return b.render("base/people_likes", c, function (a, d) {
            c.addClass("profile").show(), b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, function (a) {
                return {data: a.user.likes}
            })})).reposition()
        })
    }), c(/^\/[a-z0-9-_\.]+\/likes\/boards\/?$/, function (b) {
        e(b);
        var c = a.view || {};
        return b.render("base/people_likes_boards", c, function (a, d) {
            c.addClass("profile").show(), b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, function (a) {
                return {data: a.user.likes_boards}
            })})).reposition()
        })
    }), c(/^\/fm\/\w+(\/(pins|boards))?(\/[^/]+)?\/?$/, function (b) {
        var c = a.view || {};
        return b.render("channel/channel", c, function (a, d) {
            c.addClass("channel").show();
            var e = {container: "channel_container"};
            b.page.pager != "normal" ? e.loader = b.createCellLoader(b.page.$url, 20, function (a) {
                var b = a.view_type;
                if (b == "pins") {
                    var c = a.pins;
                    return {data: c}
                }
                if (b == "boards") {
                    var d = a.boards;
                    return {data: d}
                }
            }, {template: b.page.boards ? "base/board_item" : "base/pin_item"}) : e.containerSelectorOffset = 0, b.page.$waterfall = (new Waterfall("waterfall", e)).reposition()
        })
    }), c(/^\/topics\/\d+(\/favorites)?(\/(pop|hot|latest)?)?\/?$/, function (b) {
        var c = a.view || {};
        return b.render("topics/topic_view", c, function (a, d) {
            c.show();
            var e;
            b.page.by_page ? e = b.createCellLoader(b.page.$url, 18, !0, function (a) {
                return {data: a.pins}
            }, {snapshot: !0}) : e = b.createCellLoader(b.page.$url, 18, function (a) {
                return {data: a.pins}
            }, {snapshot: !0}), b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: ".block-item, .tools", containerSelector: null, container: "waterfall", fetcher: !1, cellWidth: b.page.topic_view == "waterfall" ? 230 : 314, cellSpace: 20, transitionClass: !1, minCols: b.page.topic_view == "waterfall" ? 4 : 3, maxCols: b.page.topic_view == "waterfall" ? 4 : 3, loader: e})).reposition()
        })
    }), c(/^\/tag\/[^\/]+\/?$/, function (b) {
        var c = a.view || {};
        return b.render("topics/tag_view", c, function (a, d) {
            c.show();
            var e = b.createCellLoader(b.page.$url, 20, !0, function (a) {
                return a.pins.forEach(function (a) {
                    a._new_block = !0
                }), {data: a.pins}
            });
            b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: ".block-item, .tools", containerSelector: null, container: "waterfall", fetcher: !1, cellWidth: b.page.topic_view == "waterfall" ? 230 : 314, cellSpace: 20, transitionClass: !1, minCols: b.page.topic_view == "waterfall" ? 4 : 3, maxCols: b.page.topic_view == "waterfall" ? 4 : 3, loader: e})).reposition()
        })
    }), c(/^\/topics\/\d+\/posts\/?$/, function (b) {
        var c = a.view || {};
        return b.render("topics/topic_posts", c, function (a, d) {
            c.show();
            var e = b.createCellLoader(b.page.$url, 20, function (a) {
                return {data: a.posts}
            });
            b.page.$waterfall = (new Waterfall("waterfall", {cellSelector: ".post-item", containerSelector: null, container: "waterfall", fetcher: !1, cellWidth: 314, cellSpace: 20, transitionClass: !1, minCols: 3, maxCols: 3, loader: e})).reposition()
        })
    }), c(/^\/features\/news\/?$/, function (b) {
        var c = a.view;
        return b.render("features/news", c, function (a, d) {
            c.show(), b.page.predictChecking()
        })
    }), c(/^\/features\/cars\/?$/, function (b) {
        var c = a.view;
        return b.render("features/cars", c, function (a, d) {
            c.show(), b.page.buttonChecking()
        })
    }), c(/^\/shiji\/[a-z0-9-_\.]+\/pins\/?$/, function (b) {
        var c = a.view;
        return b.render("shiji/user_pins", c, function (a, d) {
            c.show(), b.page.$waterfall = new Waterfall("waterfall", {hibernate: !1, paddingBottom: !0, cellWidth: 320, cellSpace: 20, minCols: 3, maxCols: 3, containerSelector: null, container: "waterfall"})
        })
    }), c(/^\/shiji\/((cat|tag|from|boards)\/[^\/]+|search)\/?$/, function (b) {
        var c = a.view;
        return b.render("shiji/things", c, function (a, d) {
            c.show(), b.page.$waterfall = new Waterfall("waterfall", {hibernate: !1, paddingBottom: !0, cellWidth: 320, cellSpace: 20, minCols: 3, maxCols: 3, containerSelector: null, container: "waterfall"})
        })
    }), c(/^\/gift\/(search|goods(\/(gent|lady|child|scene|type)))\/?$/, function (b) {
        var c = a.view;
        return b.render("gift/goods", c, function (a, d) {
            c.show();
            var e = b.page.page || !1;
            b.page.$waterfall = new Waterfall("waterfall", {hibernate: !1, paddingBottom: !0, cellSpace: 16, minCols: 4, maxCols: 5, containerSelector: ".wrapper", container: "gift_goods", loader: b.createCellLoader(b.page.$url, 30, e, function (a) {
                return {data: a.pins}
            }, {template: "base/pin_item", max_loads: 3})})
        })
    }), c(/^\/shiji\/shops\/?$/, function (b) {
        var c = a.view;
        return b.render("shiji/shops", c, function (a, d) {
            c.show(), b.page.$waterfall = new Waterfall("waterfall", {hibernate: !1, cellWidth: 320, cellSpace: 20, minCols: 3, maxCols: 3, cellSelector: ".shop-item", containerSelector: null, containerSelectorOffset: -20, transitionClass: "", container: "waterfall"})
        })
    }), c(/^\/cc\/business\/?$/, function (b) {
        var c = a.view;
        return b.render("design/business", c, function (a, d) {
            function e(a, c) {
                b.page.$waterfall ? b.page.$waterfall.setOptions({cellWidth: a, minCols: c, maxCols: c}) : b.page.$waterfall = new Waterfall("waterfall", {hibernate: !1, cellWidth: a, cellSpace: 16, minCols: c, maxCols: c, cellSelector: ".card", containerSelector: "div.wrapper", containerSelectorOffset: -20, transitionClass: "", container: "waterfall"})
            }

            function f() {
                var a = document.documentElement;
                return self.innerWidth || a && a.clientWidth || document.body.clientWidth
            }

            c.show();
            var g = function () {
                var a = f();
                a > 1243 ? (e(404, 3), $("waterfall").removeClass("minWidth")) : (e(488, 2), $("waterfall").addClass("minWidth"))
            };
            window.addEvent("resize", g), g()
        })
    }), c(/^\/cc(((\/boards)?\/(design_all|web_app_icon|design|illustration|industrial_design|architecture)(\/[^\/]+)?)|(\/search(\/boards)?)|(\/from\/[^\/]+))\/?$/, function (b) {
        var c = a.view;
        return b.render("design/search", c, function (a, d) {
            c.show();
            var e = /^\/design\/(boards\/)?(design_all|web_app_icon|design|illustration|industrial_design|architecture)\/?$/.test(b.page.$url);
            e ? b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, function (a) {
                return {data: a.pins || a.boards}
            })})).reposition() : b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, 1, function (a) {
                return {data: a.pins || a.boards}
            })})).reposition()
        })
    }), c(/^\/explore\/[A-Za-z0-9-_\.]+/, function (b) {
        var c = a.view;
        return b.render("explore", c, function (a, d) {
            c.show(), b.page.$waterfall = (new Waterfall("waterfall", {loader: b.createCellLoader(b.page.$url, 20, 1, function (a) {
                return {data: a.pins || a.boards}
            })})).reposition(), b.page.nox = !0
        })
    }), a
}(typeof exports == "undefined" ? window.app : exports);
var Autocompleter = {}, OverlayFix = IframeShim;
Autocompleter.Base = new Class({Implements: [Options, Events], options: {minLength: 1, markQuery: !0, width: "inherit", maxChoices: 10, className: "autocompleter-choices", zIndex: 42, delay: 400, observerOptions: {}, fxOptions: {}, autoSubmit: !1, overflow: !1, overflowMargin: 25, selectFirst: !1, filter: null, filterCase: !1, filterSubset: !1, forceSelect: !1, selectMode: !0, choicesMatch: null, multiple: !1, separator: ", ", autoTrim: !0, allowDupes: !1, cache: !0, relative: !1}, initialize: function (a, b) {
    this.element = document.id(a), this.setOptions(b), this.options.separatorSplit = new RegExp("\\s*[" + this.options.separator + "]\\s*"), this.build(), this.observer = new Observer(this.element, this.prefetch.bind(this), Object.merge({delay: this.options.delay}, this.options.observerOptions)), this.queryValue = null, this.options.filter && (this.filter = this.options.filter.bind(this));
    var c = this.options.selectMode;
    this.typeAhead = c == "type-ahead", this.selectMode = c === !0 ? "selection" : c, this.cached = []
}, build: function () {
    if (document.id(this.options.customChoices))
        this.choices = this.options.customChoices;
    else {
        this.choices = (new Element("ul", {"class": this.options.className, styles: {display: "none", zIndex: this.options.zIndex}})).inject(document.body), this.relative = !1;
        if (this.options.relative || this.element.getOffsetParent() != document.body)
            this.choices.inject(this.element, "after"), this.relative = this.element.getOffsetParent(), function () {
                this.relative = this.element.getOffsetParent()
            }.bind(this).delay(1e3);
        this.fix = new OverlayFix(this.choices)
    }
    this.options.separator.test(this.options.separatorSplit) || (this.options.separatorSplit = this.options.separator), this.fx = this.options.fxOptions ? (new Fx.Tween(this.choices, Object.merge({property: "opacity", link: "cancel", duration: 200}, this.options.fxOptions))).addEvent("onStart", Chain.prototype.clearChain).set(0) : null, this.element.setProperty("autocomplete", "off").addEvent(Browser.ie || Browser.chrome || Browser.safari ? "keydown" : "keypress", this.onCommand.bind(this)).addEvent("click", this.onCommand.bind(this, !1)).addEvent("focus", function () {
        this.toggleFocus.delay(100, this, [!0])
    }.bind(this))
}, destroy: function () {
    this.fix && this.fix.dispose(), this.choices = this.selected = this.choices.destroy()
}, toggleFocus: function (a) {
    this.focussed = a, a || this.hideChoices(!0), this.fireEvent(a ? "onFocus" : "onBlur", [this.element])
}, onCommand: function (a) {
    if (!a && this.focussed)
        return this.prefetch();
    if (a && a.key && !a.shift)
        switch (a.key) {
            case "enter":
            case "tab":
                if (this.selected && this.visible)
                    return this.choiceSelect(this.selected), !!this.options.autoSubmit;
                break;
            case "up":
            case "down":
                if (!this.prefetch() && this.queryValue !== null) {
                    var b = a.key == "up";
                    return this.choiceOver((this.selected || this.choices)[this.selected ? b ? "getPrevious" : "getNext" : b ? "getLast" : "getFirst"](this.options.choicesMatch), !0), !1
                }
                break;
            case "esc":
                this.hideChoices(!0)
        }
    return !0
}, setSelection: function (a) {
    var b = this.selected.inputValue, c = b, d = this.queryValue.length, e = b.length;
    b.substr(0, d).toLowerCase() != this.queryValue.toLowerCase() && (d = 0);
    if (this.options.multiple) {
        var f = this.options.separatorSplit;
        c = this.element.value, d += this.queryIndex, e += this.queryIndex;
        var g = c.substr(this.queryIndex).split(f, 1)[0];
        c = c.substr(0, this.queryIndex) + b + c.substr(this.queryIndex + g.length);
        if (a) {
            var h = /[^\s,]+/, i = c.split(this.options.separatorSplit).filter(h.test, h);
            this.options.allowDupes || (i = [].combine(i));
            var j = this.options.separator;
            c = i.join(j) + j, e = c.length
        }
    }
    this.observer.setValue(c), this.opted = c;
    if (a || this.selectMode == "pick")
        d = e;
    this.element.selectRange(d, e), this.fireEvent("onSelection", [this.element, this.selected, c, b])
}, showChoices: function () {
    var a = this.options.choicesMatch, b = this.choices.getFirst(a);
    this.selected = this.selectedValue = null;
    if (this.fix) {
        var c = this.element.getCoordinates(this.relative), d = this.options.width || "auto";
        this.choices.setStyles({left: c.left, top: c.bottom, width: d === !0 || d == "inherit" ? c.width : d})
    }
    if (!b)
        return;
    this.visible || (this.visible = !0, this.choices.setStyle("display", ""), this.fx && this.fx.start(1), this.fireEvent("onShow", [this.element, this.choices])), (this.options.selectFirst || this.typeAhead || b.inputValue == this.queryValue) && this.choiceOver(b, this.typeAhead);
    var e = this.choices.getChildren(a), f = this.options.maxChoices, g = {overflowY: "hidden", height: ""};
    this.overflown = !1;
    if (e.length > f) {
        var h = e[f - 1];
        g.overflowY = "scroll", g.height = h.getCoordinates(this.choices).bottom, this.overflown = !0
    }
    this.choices.setStyles(g), this.fix.show()
}, hideChoices: function (a) {
    if (a) {
        var b = this.element.value;
        this.options.forceSelect && (b = this.opted), this.options.autoTrim && (b = b.split(this.options.separatorSplit).filter(function () {
            return arguments[0]
        }).join(this.options.separator)), this.observer.setValue(b)
    }
    if (!this.visible)
        return;
    this.visible = !1, this.observer.clear();
    var c = function () {
        this.choices.setStyle("display", "none"), this.fix.hide()
    }.bind(this);
    this.fx ? this.fx.start(0).chain(c) : c(), this.fireEvent("onHide", [this.element, this.choices])
}, prefetch: function () {
    var a = this.element.value, b = a;
    if (this.options.multiple) {
        var c = this.options.separatorSplit, d = a.split(c), e = this.element.getCaretPosition(), f = a.substr(0, e).split(c), g = f.length - 1;
        e -= f[g].length, b = d[g]
    }
    if (b.length < this.options.minLength)
        this.hideChoices();
    else if (b === this.queryValue || this.visible && b == this.selectedValue) {
        if (this.visible)
            return !1;
        this.showChoices()
    } else
        this.queryValue = b, this.queryIndex = e, this.fetchCached() || this.query();
    return !0
}, fetchCached: function () {
    return !this.options.cache || !this.cached || !this.cached.length || this.cached.length >= this.options.maxChoices || this.queryValue ? !1 : (this.update(this.filter(this.cached)), !0)
}, update: function (a) {
    this.choices.empty(), this.cached = a, !a || !a.length ? this.hideChoices() : (this.options.maxChoices < a.length && !this.options.overflow && (a.length = this.options.maxChoices), a.each(this.options.injectChoice || function (a) {
        var b = new Element("li", {html: this.markQueryValue(a)});
        b.inputValue = a, this.addChoiceEvents(b).inject(this.choices)
    }, this), this.showChoices())
}, choiceOver: function (a, b) {
    if (!a || a == this.selected)
        return;
    this.selected && this.selected.removeClass("autocompleter-selected"), this.selected = a.addClass("autocompleter-selected"), this.fireEvent("onSelect", [this.element, this.selected, b]);
    if (!b)
        return;
    this.selectedValue = this.selected.inputValue;
    if (this.overflown) {
        var c = this.selected.getCoordinates(this.choices), d = this.options.overflowMargin, e = this.choices.scrollTop, f = this.choices.offsetHeight, g = e + f;
        c.top - d < e && e ? this.choices.scrollTop = Math.max(c.top - d, 0) : c.bottom + d > g && (this.choices.scrollTop = Math.min(c.bottom - f + d, g))
    }
    this.selectMode && this.setSelection()
}, choiceSelect: function (a) {
    a && this.choiceOver(a), this.setSelection(!0), this.queryValue = !1, this.hideChoices()
}, filter: function (a) {
    return (a || this.tokens).filter(function (a) {
        return this.test(a)
    }, new RegExp((this.options.filterSubset ? "" : "^") + this.queryValue.escapeRegExp(), this.options.filterCase ? "" : "i"))
}, markQueryValue: function (a) {
    if (!this.options.markQuery || !this.queryValue)
        return a;
    var b = new RegExp("(" + (this.options.filterSubset ? "" : "^") + this.queryValue.escapeRegExp() + ")", this.options.filterCase ? "" : "i");
    return a.replace(b, '<a class="autocompleter-queried">$1</a>')
}, addChoiceEvents: function (a) {
    return a.addEvents({mouseover: this.choiceOver.bind(this, a), click: this.choiceSelect.bind(this, a)})
}});
var Observer = new Class({Implements: [Options, Events], options: {periodical: !1, delay: 1e3}, initialize: function (a, b, c) {
    this.setOptions(c), this.addEvent("onFired", b), this.element = document.id(a) || $$(a), this.boundChange = this.changed.bind(this), this.resume()
}, changed: function () {
    var a = this.element.get("value");
    if ($equals(this.value, a))
        return;
    this.clear(), this.value = a, this.timeout = this.onFired.delay(this.options.delay, this)
}, setValue: function (a) {
    return this.value = a, this.element.set("value", a), this.clear()
}, onFired: function () {
    this.fireEvent("onFired", [this.value, this.element])
}, clear: function () {
    return clearTimeout(this.timeout || null), this
}, pause: function () {
    return clearTimeout(this.timeout), clearTimeout(this.timer), this.element.removeEvent("keyup", this.boundChange), this
}, resume: function () {
    return this.value = this.element.get("value"), this.options.periodical ? this.timer = this.changed.periodical(this.options.periodical, this) : this.element.addEvent("keyup", this.boundChange), this
}}), $equals = function (a, b) {
    return a == b || JSON.encode(a) == JSON.encode(b)
};
(function () {
    var a = new RegExp(/\@[^\s]{0,32}/g), b = new RegExp(/^\@[^\s]{0,32}$/);
    Autocompleter.Contacts = new Class({Extends: Autocompleter.Base, Implements: StyleWriter, options: {delay: 100, allowDupes: !1, multiple: !1, selectMode: "pick", className: "ac-choices", css: ".ac-choices {position: absolute;background: #fff;border: 1px solid #ccc;}\n.ac-choices {-webkit-box-shadow: 0 1px 5px rgba(0,0,0,.2);-moz-box-shadow: 0 1px 5px rgba(0,0,0,.2);box-shadow: 0 1px 5px rgba(0,0,0,.2);}\n.ac-choices li {padding: 3px 5px;cursor: pointer;white-space: nowrap;overflow: hidden;}\n.ac-choices li:hover {background: #f5f5f5;}\n.ac-choices li img {float: left;}\n.ac-choices li span {margin-left: 5px;line-height: 24px;}\n.ac-choices li span.ac-username {font-size: 14px;}\n.ac-choices li span.ac-urlname {color: #ccc;}\n.ac-choices li.autocompleter-selected {background: #f5f5f5;}\n.ac-choices li .autocompleter-queried {background: #d2f092;}\n", cssId: "autocompleter"}, initialize: function (a, b) {
        this.parent(a, b), this.options.injectChoice = this.injectChoice, this.createStyle(this.options.css, this.options.cssId), this.loadTokens()
    }, loadTokens: function (a) {
        if (!app.req.user)
            this.tokens = [];
        else {
            var b = this.queryValue ? this.queryValue.replace("@", "").toLowerCase() : "";
            if (b === "" && this.friendList) {
                this.tokens = this.friendList, a && a();
                return
            }
            this.requestTimer && clearTimeout(this.requestTimer), this.requestTimer = setTimeout(function () {
                (new Request.JSON({url: "/" + app.req.user.urlname + "/friends/", data: {q: b}, onSuccess: function (c) {
                    b === "" && (this.friendList = c.users), this.tokens = c.users, a && a()
                }.bind(this)})).get()
            }.bind(this), 300)
        }
    }, query: function () {
        var a = this;
        a.loadTokens(function () {
            a.update(a.tokens)
        })
    }, queryForMatching: function () {
        return this.queryValue || ""
    }, valueForInput: function (a) {
        return a.username
    }, injectChoice: function (a) {
        var b = (new Element("li")).adopt(new Element("img", {styles: {width: 24, height: 24}, src: app.avatar(a)})).adopt((new Element("span", {"class": "ac-username"})).set("html", this.markQueryValue(a.username)));
        b.inputValue = this.valueForInput(a), this.addChoiceEvents(b).inject(this.choices)
    }, markQueryValue: function (a) {
        if (!this.options.markQuery || !this.queryValue)
            return a;
        var b = this.queryForMatching();
        if (!b)
            return a;
        var c = new RegExp("(" + (this.options.filterSubset ? "" : "^") + b.escapeRegExp() + ")", this.options.filterCase ? "" : "i");
        return a.replace(c, '<a class="autocompleter-queried">$1</a>')
    }}), Autocompleter.Contacts.At = new Class({Extends: Autocompleter.Contacts, options: {selectFirst: !0, allowDupes: !0, multiple: !0, separator: " "}, prefetch: function () {
        var b = this.element.value, c = null, d = -1, e = b.match(a);
        if (e) {
            var f = this.element.getCaretPosition(), g = b.substr(0, f).match(a);
            if (g) {
                var h = g.length - 1;
                d = f - g[h].length, b.substr(d, 1) == "@" ? c = e[h] : d = -1
            }
        }
        if (!c || c.length < this.options.minLength)
            this.hideChoices();
        else if (c === this.queryValue || this.visible && c == this.selectedValue) {
            if (this.visible)
                return !1;
            this.showChoices()
        } else
            this.queryValue = c, this.queryIndex = d, this.fetchCached() || this.query();
        return !0
    }, queryForMatching: function () {
        return (this.queryValue || "@").substr(1)
    }, valueForInput: function (a) {
        var c = "@" + a.username;
        return b.test(c) ? c : "@" + a.username
    }})
}).call(this)
