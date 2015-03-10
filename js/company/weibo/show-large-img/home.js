/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/9.
 */
STK.namespace("v6home", function (a, b) {
    var STK = arguments[0], $ = arguments[1];
    STK.register("lib.cite.suda", function (a) {
        window.SUDA = window.SUDA || [];
        Math.ceil(Math.random() * 1e4) == 1 && SUDA.push(["setPerformance", 15]);
        SUDA.push(["setGatherInfo", null, "WEIBO-V5"]);
        return function () {
            window.SUDA = window.SUDA || [];
            window.SUDA.push(["setGatherInfo", null, "WEIBO-V6"]);
            var a = !1, b = document, c = b.createElement("script"), d = b.getElementsByTagName("script")[0];
            c.type = "text/javascript";
            c.charset = "utf-8";
            c.async = !0;
            c.src = ("https:" == b.location.protocol ? "https://" : "http://") + "js.t.sinajs.cn/open/analytics/js/suda.js?version=" + $CONFIG.version;
            d.parentNode.insertBefore(c, d)
        }
    });
    STK.register("lib.message.IMpubSub", function (a) {
        return function () {
            var a = {}, b = {};
            a.publish = function (a, c) {
                b[a] = b[a] || [];
                for (var d = 0; d < b[a].length; d++) {
                    var e = b[a][d];
                    if (typeof e == "function") {
                        var f = [];
                        for (var g = 1, h = arguments.length; g < h; g++)f.push(arguments[g]);
                        e.apply(this, f)
                    }
                }
            };
            a.subscribe = function (a, c, d) {
                b[a] = b[a] || [];
                b[a].push(function () {
                    c.apply(d, arguments)
                })
            };
            return a
        }
    });
    STK.register("lib.kit.dom.parseDOM", function (a) {
        return function (a) {
            for (var b in a)a[b] && a[b].length == 1 && (a[b] = a[b][0]);
            return a
        }
    });
    STK.register("lib.kit.extra.language", function (a) {
        window.$LANG || (window.$LANG = {});
        return function (b) {
            var c = [].splice.call(arguments, 1, arguments.length), d = [b, $LANG].concat(c), e = a.core.util.language.apply(this, d);
            return e
        }
    });
    STK.register("lib.message.upload.getExt", function (a) {
        var b = {csv: "csv", doc: "word", docx: "word", xls: "excel", xlsx: "excel", ppt: "ppt", pptx: "ppt", pdf: "pdf", rar: "rar", zip: "rar", txt: "txt", mp3: "music", avi: "video", flv: "video", mkv: "video", mp4: "video", mpeg: "video", mpg2: "video", rmvb: "video"};
        return function (c) {
            var d = a.trim(c.match(/[^\.]+$/)[0]).toLowerCase();
            return typeof b[d] != "undefined" ? b[d] : "default"
        }
    });
    STK.register("lib.message.upload.addItem", function (a) {
        var b = a.lib.kit.extra.language;
        return function (b, c, d) {
            var e = b.getAttribute("swfId") || "", f, g = a.lib.message.upload.getExt(c), h = c, c = a.core.str.bLength(c) > 20 ? a.core.str.leftB(c, 20) + "..." : c;
            d.thumbnail && d.thumbnail.length != 0 ? f = '<img src="' + d.thumbnail + '" class="img" alt="图片" title="' + h + '">' + c + '<span class="func"><a class="S_link2 del" href="javascript:void(0)" node-type="deleteFile" action-type="deleteFile" action-data="swfId=' + e + "&" + STK.core.json.jsonToQuery(d) + '">删除</a></span>' : f = '<i><img src="' + $CONFIG.imgPath + "style/images/accessory/" + g + '.png" class="doc" alt="附件文件" title="' + h + '"></i>' + c + '<span class="func"><a class="S_link2 del" href="javascript:void(0)" node-type="deleteFile" action-type="deleteFile" action-data="swfId=' + e + "&" + STK.core.json.jsonToQuery(d) + '">删除</a></span>';
            var i = "<li>" + f + "</li>";
            b.style.display = "block";
            b.innerHTML += i;
            var j = b.getAttribute("fid") || "";
            b.setAttribute("fid", j + d.fid + ",")
        }
    });
    STK.register("lib.kit.io.ajax", function (a) {
        var b = function (b, c, d) {
            c = c | 0 || 1;
            d = d || "fail";
            var e = b.args;
            e.__rnd && delete e.__rnd;
            (new Image).src = "http://weibolog.sinaapp.com/?t=" + c + "&u=" + encodeURIComponent(b.url) + "&p=" + encodeURIComponent(a.core.json.jsonToQuery(e)) + "&m=" + d;
            (new Image).src = "http://s1.sinaedge.com/whb.gif?t=" + c + "&u=" + encodeURIComponent(b.url) + "&p=" + encodeURIComponent(a.core.json.jsonToQuery(e)) + "&m=" + d
        };
        return function (c) {
            var d = {}, e = [], f = null, g = !1, h = a.parseParam({url: "", method: "get", responseType: "json", timeout: 3e4, onTraning: a.funcEmpty, isEncode: !0}, c);
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
    STK.register("lib.kit.io.jsonp", function (a) {
        return function (b) {
            var c = a.parseParam({url: "", method: "get", responseType: "json", varkey: "_v", timeout: 3e4, onComplete: a.funcEmpty, onTraning: a.funcEmpty, onFail: a.funcEmpty, isEncode: !0}, b), d = [], e = {}, f = !1, g = function () {
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
                    a.jsonp(a.core.json.merge(c, {args: e.args, onComplete: function (a) {
                        e.onComplete(a)
                    }, onFail: function (a) {
                        try {
                            e.onFail(a)
                        } catch (b) {
                        }
                    }}))
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
    STK.register("lib.kit.io.ijax", function (a) {
        return function (b) {
            var c = a.parseParam({url: "", timeout: 3e4, isEncode: !0, abaurl: null, responseName: null, varkey: "callback", abakey: "callback"}, b), d = [], e = null, f = !1;
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
                if (!a.isNode(c))throw"[lib.kit.io.ijax.request] need a form as first parameter";
                e || (e = {});
                b.noQueue && h();
                d.push({form: c, args: e});
                g()
            };
            i.abort = h;
            return i
        }
    });
    STK.register("lib.kit.io.inter", function (a) {
        var b = a.core.json.merge;
        return function () {
            var c = {}, d = {}, e = {}, f = function (a, b) {
                return function (c, d) {
                    try {
                        b.onComplete(c, d)
                    } catch (f) {
                    }
                    try {
                        c.code === "100000" ? b.onSuccess(c, d) : b.onError(c, d)
                    } catch (f) {
                    }
                    for (var g in e[a])try {
                        e[a][g](c, d)
                    } catch (f) {
                    }
                }
            }, g = function (a, b, c) {
                return function (d) {
                    try {
                        b.onComplete(d, c)
                    } catch (f) {
                    }
                    try {
                        d.code === "100000" ? b.onSuccess(d, c) : b.onError(d, c)
                    } catch (f) {
                    }
                    for (var g in e[a])try {
                        e[a][g](d, c)
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
                g.url += (g.url.indexOf("?") >= 0 ? "&" : "?") + "ajwvr=6";
                g.withDomain && (g.url += "&domain=" + $CONFIG.domain);
                var h = d[c].requestMode, i = "ajax";
                if (h === "jsonp" || h === "ijax")i = h;
                return a.lib.kit.io[i](g)
            };
            c.request = function (c, e, f) {
                var h = b(d[c], e);
                h.onComplete = g(c, e, f);
                h.url += (h.url.indexOf("?") >= 0 ? "&" : "?") + "ajwvr=6";
                h.withDomain && (h.url += "&domain=" + $CONFIG.domain);
                h = a.core.obj.cut(h, ["noqueue"]);
                h.args = f;
                var i = d[c].requestMode;
                return i === "jsonp" ? a.jsonp(h) : i === "ijax" ? a.ijax(h) : a.ajax(h)
            };
            return c
        }
    });
    STK.register("conf.trans.message", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("delete", {url: "/aj/message/del", method: "post"});
        c("getMsg", {url: "/aj/message/getmessagedetail", method: "get"});
        c("deleteUserMsg", {url: "/aj/message/destroy", method: "post"});
        c("create", {url: "/aj/message/add", method: "post"});
        c("search", {url: "/message", method: "get"});
        c("attachDel", {url: "/aj/message/attach/del", method: "get"});
        c("getDetail", {url: "/aj/message/detail", method: "get"});
        c("getSearchList", {url: "/aj/message/detail", method: "get"});
        c("getDetailList", {url: "/aj/message/detail", method: "get"});
        c("noConfirm", {url: "/aj/bubble/closebubble", method: "get"});
        return b
    });
    STK.register("lib.kit.extra.listener", function (a) {
        var b = {}, c = {};
        c.define = function (c, d) {
            if (b[c] != null)throw"lib.kit.extra.listener.define: 频道已被占用";
            b[c] = d;
            var e = {};
            e.register = function (d, e) {
                if (b[c] == null)throw"lib.kit.extra.listener.define: 频道未定义";
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
    STK.register("conf.channel.message", function (a) {
        var b = ["create", "delete"];
        return a.lib.kit.extra.listener.define("conf.channel.message", b)
    });
    STK.register("conf.trans.at", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("followList", {url: "/aj/mblog/attention"});
        c("topicList", {url: "/aj/mblog/topic"});
        return b
    });
    STK.register("lib.follow.myFollowSuggest", function (a) {
        var b = '<div style="position: absolute; top: -2000px; left: -2000px; z-index: 100001;" node-type="___followListSuggest___" class="layer_menu_list"></div>', c = '<#et userlist data><ul><#list data.users as list><li action-type="followItem" action-data="index=${list.uid}"><a href="#" onclick="return false;">${list.screen_name}</a></li></#list></ul>';
        return function (d) {
            function F() {
                a.removeEvent(g, "keyup", r);
                g = null
            }

            function E() {
                h.innerHTML = "";
                a.setStyle(h, "left", "-2000px");
                a.setStyle(h, "top", "-2000px");
                k = null;
                a.removeEvent(document.body, "click", E)
            }

            function D() {
                y();
                e || C()
            }

            function C() {
                j = g.value;
                z();
                B()
            }

            function B() {
                e = a.ui.mod.suggest({textNode: g, uiNode: h, actionType: "followItem", actionData: "index"});
                a.custEvent.add(e, "onIndexChange", w);
                a.custEvent.add(e, "onSelect", x);
                a.custEvent.add(e, "onClose", E);
                a.addEvent(g, "keyup", r)
            }

            function A() {
            }

            function z() {
                var c = a.sizzle('div[node-type="___followListSuggest___"]', document.body);
                if (a.objIsEmpty(c) && !h) {
                    c = a.builder(b);
                    document.body.appendChild(c.box);
                    c = a.sizzle('div[node-type="___followListSuggest___"]', document.body);
                    !a.objIsEmpty(c) && (c = c[0])
                }
                h = a.isArray(c) ? c[0] : c;
                d.width && function () {
                    var a = parseInt(d.width, 10);
                    h.style.width = d.width + (a == d.width ? "px" : "")
                }()
            }

            function y() {
                i = -1
            }

            function x(a, b) {
                if (b == null || b < 0)b == -1 && d.dontSelectFirst && p && p(g.value); else {
                    j = n[b].screen_name;
                    j = j.replace(/\(.*\)/, "");
                    g.value = j;
                    E();
                    p && p(n[b])
                }
            }

            function w(a, b) {
                if (!!m && m.length != 0) {
                    l != null && m[l] && (m[l].className = "");
                    b == null && (b = 0);
                    m[b].className = "cur";
                    l = b
                }
            }

            function v() {
                var b = a.sizzle("li", h);
                m = b
            }

            function u(a, b) {
                E()
            }

            function t(b, e) {
                var f;
                h.innerHTML = a.core.util.easyTemplate(c, {users: b.data || []});
                a.addEvent(document.body, "click", E);
                n = b.data;
                f = a.position(g);
                a.setStyle(h, "left", f.l + "px");
                a.setStyle(h, "top", f.t + g.scrollHeight + 10 + "px");
                v();
                var i = d.dontSelectFirst ? -1 : 0;
                a.custEvent.fire(g, "indexChange", i);
                b.data.length || E()
            }

            function s() {
                a.conf.trans.at.request(d.transName || "followList", {onSuccess: t, onError: u, onFail: u}, a.parseParam({q: g.value, type: 0}, d))
            }

            function r() {
                if (!k) {
                    a.custEvent.fire(g, "open", g);
                    k = !0
                }
                if (a.trim(g.value) != "" && g.value != j) {
                    j = g.value;
                    s()
                } else if (a.trim(g.value) == "") {
                    E();
                    j = ""
                }
            }

            var e, f, g, h, i, j, k, l, m, n, o, p;
            if (d == null || d != null && d.textNode == null)throw new Error("[common.bubble.myFollowSuggest]Required parameter opts.textNode is missing");
            g = d.textNode;
            p = d.callback;
            d.list_template && (c = d.list_template);
            if (!a.isNode(g))throw new Error("[common.bubble.myFollowSuggest]Required parameter opts.textNode is NOT a html node.");
            var q = {};
            q.show = D;
            q.hide = E;
            q.destroy = F;
            return q
        }
    });
    STK.register("lib.kit.dom.textSelection", function (a) {
        return function (b, c) {
            var d, e;
            d = {};
            e = a.parseParam({}, c);
            var f = function (c) {
                return a.core.dom.selectText(b, c)
            }, g = function () {
                b.__areaQuery = a.jsonToQuery(a.core.dom.textSelectArea(b))
            }, h = function () {
                b.__areaQuery = !1
            };
            a.addEvent(b, "beforedeactivate", g);
            a.addEvent(b, "active", h);
            var i = function () {
                var c = null;
                try {
                    c = a.core.dom.textSelectArea(b)
                } catch (d) {
                    c = a.queryToJson(b.__areaQuery)
                }
                c.start === 0 && c.len === 0 && b.__areaQuery && (c = a.queryToJson(b.__areaQuery));
                c.start = parseInt(c.start, 10);
                c.len = parseInt(c.len, 10);
                return c
            }, j = function (a, c) {
                var d = b.value, e = c.start, f = c.len || 0, g = d.slice(0, e), h = d.slice(e + f, d.length);
                b.value = g + a + h;
                d = null;
                g = null;
                h = null;
                var e = null, f = null
            };
            d.setCursor = function (a) {
                f(a)
            };
            d.getCursor = function () {
                return i()
            };
            d.insertCursor = function (a) {
                var b = i();
                j(a, b);
                b.len = a.length;
                f(b)
            };
            d.TempletCursor = function (c) {
                var d, e, g;
                d = i();
                d.len > 0 ? e = b.value.substr(d.start, d.len) : e = "";
                g = a.templet(c, {origin: e});
                j(g, d);
                d.start = d.start + c.indexOf("#{origin");
                d.len = g.length - c.replace(/#\{[origin].+?\}/, "").length;
                f(d)
            };
            d.insertText = j;
            d.destroy = function () {
                a.removeEvent(b, "beforedeactivate", g);
                a.removeEvent(b, "active", h);
                b = null
            };
            return d
        }
    });
    STK.register("lib.kit.dom.smartInput", function (a) {
        return function (b, c) {
            var d, e, f, g, h, i, j, k, l, m = "stop", n, o, p, q, r;
            d = a.parseParam({notice: "", currentClass: null, noticeClass: null, noticeStyle: null, maxLength: null, needLazyInput: !1, LazyInputDelay: 200}, c);
            e = a.cascadeNode(b);
            h = a.lib.kit.dom.textSelection(b);
            a.custEvent.define(e, "enter");
            a.custEvent.define(e, "ctrlEnter");
            a.custEvent.define(e, "lazyInput");
            f = function () {
                d.maxLength && a.bLength(b.value) > d.maxLength && (b.value = a.leftB(b.value, d.maxLength))
            };
            o = function () {
                if (b.value === d.notice) {
                    b.value = "";
                    d.noticeClass != null && a.removeClassName(b, d.noticeClass)
                }
                d.currentClass != null && a.addClassName(b.parentNode, d.currentClass)
            };
            p = function () {
                if (b.value === "") {
                    b.value = d.notice;
                    d.noticeClass != null && a.addClassName(b, d.noticeClass)
                }
                d.currentClass != null && a.removeClassName(b.parentNode, d.currentClass)
            };
            g = function () {
                f();
                return b.value === d.notice ? "" : b.value
            };
            q = function (b) {
                b.keyCode === 13 && a.custEvent.fire(e, "enter", g())
            };
            r = function (b) {
                (b.keyCode === 13 || b.keyCode === 10) && b.ctrlKey && a.custEvent.fire(e, "ctrlEnter", g())
            };
            i = function () {
                if (m === "stop") {
                    l = setInterval(k, d.LazyInputDelay);
                    m = "sleep"
                }
            };
            j = function () {
                clearInterval(l);
                m = "stop"
            };
            k = function () {
                if (n === b.value)if (m === "weakup") {
                    a.custEvent.fire(e, "lazyInput", b.value);
                    m = "sleep"
                } else m === "waiting" && (m = "weakup"); else m = "waiting";
                n = b.value
            };
            if (d.needLazyInput) {
                a.addEvent(b, "focus", i);
                a.addEvent(b, "blur", j)
            }
            a.addEvent(b, "focus", o);
            a.addEvent(b, "blur", p);
            a.addEvent(b, "keyup", f);
            a.addEvent(b, "keydown", q);
            a.addEvent(b, "keydown", r);
            e.getValue = g;
            e.setValue = function (a) {
                b.value = a;
                f();
                return e
            };
            e.setNotice = function (a) {
                d.notice = a;
                return e
            };
            e.setNoticeClass = function (a) {
                d.noticeClass = a;
                return e
            };
            e.setNoticeStyle = function (a) {
                d.noticeStyle = a;
                return e
            };
            e.setMaxLength = function (a) {
                d.maxLength = a;
                return e
            };
            e.restart = function () {
                p()
            };
            e.startLazyInput = i;
            e.stopLazyInput = j;
            e.setCursor = h.setCursor;
            e.getCursor = h.getCursor;
            e.insertCursor = h.insertCursor;
            e.insertText = h.insertText;
            e.destroy = function () {
                if (d.needLazyInput) {
                    a.removeEvent(b, "focus", o);
                    a.removeEvent(b, "blur", p)
                }
                j();
                a.removeEvent(b, "focus", o);
                a.removeEvent(b, "blur", p);
                a.removeEvent(b, "keyup", f);
                a.removeEvent(b, "keydown", q);
                a.removeEvent(b, "keydown", r);
                a.custEvent.undefine(e, "enter");
                a.custEvent.undefine(e, "ctrlEnter");
                a.custEvent.undefine(e, "lazyInput");
                h.destroy();
                e = null
            };
            return e
        }
    });
    STK.register("lib.editor.plugin.count", function (a) {
        function e(a, b) {
            if (!a.textEl)throw"[editor plugin count]: plz check nodeList"
        }

        function d(a, b) {
            var d = c(a), e = Math.abs(b - d), f;
            d > b || d < 1 ? f = {wordsnum: d, vnum: e, overflow: !0} : d == 0 ? f = {wordsnum: d, vnum: e, overflow: !0} : f = {wordsnum: d, vnum: e, overflow: !1};
            return f
        }

        function c(b) {
            var c = 41, d = 140, e = 20, f = b, g = b.match(/(http|https):\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+([-A-Z0-9a-z_\$\.\+\!\*\(\)\/\,\:;@&=\?~#%]*)*/gi) || [], h = 0;
            for (var i = 0, j = g.length; i < j; i++) {
                var k = a.core.str.bLength(g[i]);
                if (/^(http:\/\/t.cn)/.test(g[i]))continue;
                /^(http:\/\/)+(t.sina.com.cn|t.sina.cn)/.test(g[i]) || /^(http:\/\/)+(weibo.com|weibo.cn)/.test(g[i]) ? h += k <= c ? k : k <= d ? e : k - d + e : h += k <= d ? e : k - d + e;
                f = f.replace(g[i], "")
            }
            var l = Math.ceil((h + a.core.str.bLength(f)) / 2);
            return l
        }

        var b;
        return function (c) {
            var f = c.nodeList, g, h = c.opts, i = a.lib.kit.extra.language;
            b = h.limitNum;
            e(f);
            a.core.evt.custEvent.define(c, "textNum");
            a.custEvent.define(c, "keyUpCount");
            var j = f.textEl, k = f.num;
            a.addEvent(j, "focus", function () {
                g = setInterval(function () {
                    l()
                }, 200)
            });
            a.addEvent(j, "blur", function () {
                clearInterval(g)
            });
            var l = function () {
                var b = a.core.str.trim(j.value).length == 0 ? a.core.str.trim(j.value) : j.value, e = c && c.opts && c.opts.extendText;
                b = b.replace(/\r\n/g, "\n");
                var f = d(b, h.limitNum);
                b.length >= 0 && j.focus ? f.overflow && f.wordsnum != 0 ? k.innerHTML = (e ? i(e) : "") + i("#L{已经超过%s字}", '<span class="S_error">' + f.vnum + "</span>") : k.innerHTML = (e ? i(e) : "") + i("#L{还可以输入%s字}", "<span>" + f.vnum + "</span>") : b.length === 0 && (k.innerHTML = (e ? i(e) : "") + i("#L{还可以输入%s字}", "<span>" + f.vnum + "</span>"));
                a.core.evt.custEvent.fire(c, "textNum", {count: f.wordsnum, isOver: f.overflow})
            };
            STK.core.evt.addEvent(j, "keyup", l);
            a.custEvent.add(c, "keyUpCount", l)
        }
    });
    STK.register("lib.kit.dom.layoutPos", function (a) {
        return function (b, c, d) {
            if (!a.isNode(c))throw"lib.kit.dom.layerOutElement need element as first parameter";
            if (c === document.body)return!1;
            if (!c.parentNode)return!1;
            if (c.style.display === "none")return!1;
            var e, f, g, h, i, j, k;
            e = a.parseParam({pos: "left-bottom", offsetX: 0, offsetY: 0}, d);
            f = c;
            if (!f)return!1;
            while (f !== document.body) {
                f = f.parentNode;
                if (f.style.display === "none")return!1;
                j = a.getStyle(f, "position");
                k = f.getAttribute("layout-shell");
                if (j === "absolute" || j === "fixed")break;
                if (k === "true" && j === "relative")break
            }
            f.appendChild(b);
            g = a.position(c, {parent: f});
            h = {w: c.offsetWidth, h: c.offsetHeight};
            i = e.pos.split("-");
            i[0] === "left" ? b.style.left = g.l + e.offsetX + "px" : i[0] === "right" ? b.style.left = g.l + h.w + e.offsetX + "px" : i[0] === "center" && (b.style.left = g.l + h.w / 2 + e.offsetX + "px");
            i[1] === "top" ? b.style.top = g.t + e.offsetY + "px" : i[1] === "bottom" ? b.style.top = g.t + h.h + e.offsetY + "px" : i[1] === "middle" && (b.style.top = g.t + h.h / 2 + e.offsetY + "px");
            return!0
        }
    });
    STK.register("lib.kit.extra.textareaUtils", function (a) {
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
            } else a.setSelectionRange && a.setSelectionRange(b, b + c)
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
    STK.register("lib.kit.dom.isTurnoff", function (a) {
        return function (a) {
            return!a.parentNode || a.parentNode.nodeType == 11 || !!a.disabled
        }
    });
    STK.register("lib.kit.dom.cssText", function (a) {
        var b = function (a, b) {
            var c = (a + ";" + b).replace(/(\s*(;)\s*)|(\s*(:)\s*)/g, "$2$4"), d;
            while (c && (d = c.match(/(^|;)([\w\-]+:)([^;]*);(.*;)?\2/i)))c = c.replace(d[1] + d[2] + d[3], "");
            return c
        };
        return function (a) {
            a = a || "";
            var c = [], d = {push: function (a, b) {
                c.push(a + ":" + b);
                return d
            }, remove: function (a) {
                for (var b = 0; b < c.length; b++)c[b].indexOf(a + ":") == 0 && c.splice(b, 1);
                return d
            }, getStyleList: function () {
                return c.slice()
            }, getCss: function () {
                return b(a, c.join(";"))
            }};
            return d
        }
    });
    STK.register("lib.editor.at", function (a) {
        var b = a.lib.kit.dom.cssText, c = a.lib.kit.dom.isTurnoff, d = a.lib.kit.extra.textareaUtils, e = window, f = document, g = a.core.util.browser, h = "", i = d.selectionStart, j, k, l, m, n, o = function () {
            var a = {"<": "&lt;", ">": "&gt;", '"': "&quot;", "\\": "&#92;", "&": "&amp;", "'": "&#039;", "\r": "", "\n": "<br>", " ": (navigator.userAgent.match(/.+(?:ie) ([\d.]+)/i) || [8])[1] < 8 ? ['<pre style="overflow:hidden;display:inline;', h, 'word-wrap:break-word;"> </pre>'].join("") : ['<span style="white-space:pre-wrap;', h, '"> </span>'].join("")};
            return function (b) {
                var c = b.replace(/(<|>|\"|\\|&|\'|\n|\r| )/g, function (b) {
                    return a[b]
                });
                return c
            }
        }(), p = function () {
            var c = [], d = j.textEl.style.cssText, e;
            a.foreach(["margin", "padding", "border"], function (b) {
                a.foreach(["Top", "Left", "Bottom", "Right"], function (d) {
                    var e;
                    b != "border" ? e = c.push(b, "-", d.toLowerCase(), ":", a.getStyle(j.textEl, b + d), ";") : a.foreach(["Style", "Width"], function (e) {
                        c.push(b, "-", d.toLowerCase(), "-", e.toLowerCase(), ":", a.getStyle(j.textEl, [b, d, e].join("")), ";")
                    })
                })
            });
            c.push("font-size:" + a.getStyle(j.textEl, "fontSize") + ";");
            return b([d, c.join(""), h, "\n\t\tword-wrap: break-word;\n\t\tline-height: 18px;\n\t\toverflow-y:auto;\n\t\toverflow-x:hidden;\n\t\toutline:none;\n\t"].join("")).getCss()
        }, q = function () {
            var b = a.builder(['<div node-type="wrap" style="display:none;">', '<span node-type="before"></span>', '<span node-type="flag"></span>', '<span node-type="after"></span>', "</div>"].join("")).list, c = b.wrap[0], d = b.flag[0], e = b.after[0], h = b.before[0], i = 0, k, l, m, q = function (a) {
                return g.MOZ ? -2 : g.MOBILE && g.SAFARI && (g.IPAD || g.ITOUCH || g.IPHONE) ? -2 : 0
            };
            return{bind: function () {
                if (l !== j.textEl) {
                    n = a.position(j.textEl);
                    var b = ["left:", n.l, "px;top:", n.t + 20, "px;"].join("");
                    l = j.textEl;
                    var d = p();
                    l.style.cssText = d;
                    m = [b, d, "\n\t\t\t\tposition:absolute;\n\t\t\t\tfilter:alpha(opacity=0);\n\t\t\t\topacity:0;\n\t\t\t\tz-index:-1000;\n\t\t\t"].join("");
                    c.style.cssText = m;
                    if (!i) {
                        i = 1;
                        f.body.appendChild(c)
                    }
                }
            }, content: function (b, f, g, i) {
                c.style.cssText = [m, "\n\t\t\t\twidth:", (parseInt(a.getStyle(l, "width")) || l.offsetWidth) + q(), "px;\n\t\t\t\theight:", parseInt(a.getStyle(l, "height")) || l.offsetHeight, "px;\n\t\t\t\toverflow-x:hidden;\n\t\t\t\toverflow-y:", /webkit/i.test(navigator.userAgent) ? "hidden" : a.getStyle(l, "overflowY"), ";\n\t\t\t"].join("");
                h.innerHTML = o(b);
                d.innerHTML = o(f) || "&thinsp;";
                e.innerHTML = o([g, i].join(""));
                clearTimeout(k);
                k = setTimeout(function () {
                    var b = a.position(d);
                    a.custEvent.fire(j.eId, "at", {t: b.t - l.scrollTop - n.t, l: b.l - n.l, fl: b.l, key: g, flag: f, textarea: j.textEl})
                }, 30)
            }, hide: function () {
                c.style.display = "none"
            }, show: function () {
                c.style.display = ""
            }}
        }(), r = function () {
            if (c(j.textEl))clearInterval(k); else {
                var b = j.textEl.value.replace(/\r/g, ""), d = i(j.textEl);
                if (d < 0 || d == m)return;
                m = d;
                var e = b.slice(0, d), f = e.match(new RegExp(["(", j.flag, ")([a-z/[A-Z0-9/\\]一-龥_-]{0,20})$"].join("")));
                if (!f) {
                    a.custEvent.fire(j.eId, "hidden");
                    return
                }
                var g = b.slice(d);
                e = e.slice(0, -f[0].length);
                q.content(e, f[1], f[2], g)
            }
        };
        return function (b) {
            if (!!b && !!b.textEl) {
                b = a.parseParam({textEl: null, flag: "@", eId: a.custEvent.define({}, ["at", "hidden"])}, b);
                var c = function () {
                    if (!!j) {
                        clearInterval(k);
                        a.removeEvent(j.textEl, "blur", c);
                        q.hide()
                    }
                }, d = function () {
                    c();
                    j = b;
                    m = null;
                    q.bind();
                    q.show();
                    k = setInterval(r, 200);
                    a.addEvent(b.textEl, "blur", c)
                };
                a.addEvent(b.textEl, "focus", d);
                return b.eId
            }
        }
    });
    STK.register("lib.editor.plugin.at", function (a) {
        var b = a.lib.kit.extra.language, c = '<div style="" class="layer_menu_list"><ul node-type="suggestWrap"></ul></div>', d = {"@": {normalTitle: b("#L{选择昵称或轻敲空格完成输入}"), moreTitle: b("#L{选择最近@的人或直接输入}"), noTilte: b("#L{轻敲空格完成输入}")}, "#": {normalTitle: b("#L{想用什么话题？}")}}, e = {"@": '<#et temp data><li class="suggest_title">${data.title}</li><#list data.data as list><li action-type="item" <#if (list_index == 0)>class="cur" </#if>action-data="value=${list.screen_name}" value="${list.screen_name}"><a href="#">${list.screen_name}<#if (list.remark)>(${list.remark})</#if></a></li><#if (list.count)><span>${list.count}</span></#if></#list></#et>', "#": '<#et temp data><li class="suggest_title">${data.title}</li><#list data.data as list><li action-type="item" <#if (list_index == 0)>class="cur" </#if>action-data="value=${list.topic}" value="${list.topic}"><a href="#">${list.topic}<#if (list.count)>(${list.count})</#if></a></li></#list></#et>'}, f, g, h, i, j, k, l = !1, m, n, o = {"@": "followList", "#": "topicList"}, p = 0, q = function () {
            setTimeout(function () {
                a.custEvent.fire(f, "close")
            }, 200)
        }, r = function () {
            j.style.display = "none"
        }, s = function () {
            a.custEvent.add(f, "onIndexChange", function (a, b) {
                y(b)
            });
            a.custEvent.add(f, "onSelect", function (b, c, d, e) {
                p = 0;
                a.core.evt.stopEvent();
                var g = n[c].getAttribute("value") + "";
                g = g.replace(/\(.*\)/, "");
                try {
                    d.focus()
                } catch (h) {
                }
                var i = a.lib.kit.extra.textareaUtils;
                i.replaceText(d, "");
                var j = i.selectionStart(d) * 1, k = new RegExp(e + "([a-z/[A-Z0-9/\\]一-龥_-]{0,20})$"), l = d.value.replace(/\r+/g, "").slice(0, j).match(k), m = d.value.slice(j, j + 1);
                l = l && l[1] ? l[1].length : 0;
                e == "#" ? typeof m != "undefined" && m != e && (g = g + e + " ") : g = g + " ";
                i.insertText(d, g, j, l);
                var o = i.getCursorPos(d);
                if (e == "#" && m == e) {
                    i.setCursor(d, o + 1);
                    i.insertText(d, " ", o + 1, 0)
                }
                o = i.getCursorPos(d);
                var q = i.getSelectedText(d), r = q == "" || q == null ? 0 : q.length;
                d.setAttribute("range", o + "&" + r);
                a.custEvent.fire(f, "close")
            });
            a.addEvent(h.textEl, "blur", q);
            a.custEvent.add(f, "onClose", r);
            a.custEvent.add(f, "onOpen", function (b, c) {
                i.style.display = "";
                j.style.display = "";
                l = !0;
                setTimeout(function () {
                    a.custEvent.fire(f, "indexChange", 0)
                }, 100)
            })
        }, t = function (b) {
            a.custEvent.remove(b);
            a.removeEvent(h.textEl, "blur", q)
        }, u = function (b, c, f) {
            b == "@" ? c.data && c.data.length > 0 ? c.title = f == "" ? d[b].moreTitle : d[b].normalTitle : c.title = d[b].noTilte : c.title = d[b].normalTitle;
            var g = a.core.util.easyTemplate(e[b], c);
            return g
        }, v = function () {
            a.core.evt.custEvent.add(g, "hidden", function (b, c) {
                a.custEvent.fire(f, "close")
            });
            a.core.evt.custEvent.add(g, "at", function (b, c) {
                k = c.key;
                var d = c.flag;
                if (k.length == 0 && d != "@" && d != "#" || c.textarea && !c.textarea.value)a.custEvent.fire(f, "close"); else var e = a.conf.trans.at.request(o[d], {onSuccess: function (b, e) {
                    var g = u(d, b, k);
                    a.custEvent.fire(f, "openSetFlag", d);
                    a.custEvent.fire(f, "open", c.textarea);
                    var h = a.core.dom.builder(g), l = h.box;
                    i.innerHTML = l;
                    j.style.cssText = ["z-index:11001;background-color:#ffffff;position:absolute;"].join("");
                    var m = c.l;
                    document.body.clientWidth < c.fl + a.core.dom.getSize(j).width && c.fl > a.core.dom.getSize(j).width && (m = c.l - a.core.dom.getSize(j).width);
                    var n = 0;
                    a.winSize().height - c.textarea.getBoundingClientRect().bottom < 200 ? n = -i.offsetHeight - 4 : n = c.t;
                    a.lib.kit.dom.layoutPos(j, c.textarea, {pos: "left-top", offsetX: m, offsetY: n})
                }, onError: function () {
                    a.custEvent.fire(f, "close")
                }}, {q: encodeURIComponent(k)})
            })
        }, w = function () {
            m = h.textEl;
            g = a.lib.editor.at({textEl: m, flag: "@|#"})
        }, x = function (b) {
            p = 0;
            j && (j.style.display = "none");
            j && (j.innerHTML = "");
            a.removeNode(j);
            j = STK.C("div");
            document.body.appendChild(j);
            if (j.innerHTML.length == 0) {
                j.innerHTML = c;
                i = a.core.dom.sizzle('[node-type="suggestWrap"]', j)[0];
                j.style.display = "none"
            }
            if (f) {
                a.custEvent.fire(f, "close");
                t(f)
            }
            f = a.ui.mod.suggest({textNode: b, uiNode: i, actionType: "item", actionData: "value", flag: "@"});
            s()
        }, y = function (b) {
            n = a.sizzle("li[class!=suggest_title]", i);
            n && n[0] && a.core.dom.removeClassName(n[p], "cur");
            a.core.dom.addClassName(n[b], "cur");
            p = b
        };
        return function (a, b) {
            h = a.nodeList;
            var c = {};
            c.init = function () {
                w();
                x(h.textEl);
                v()
            };
            return c
        }
    });
    STK.register("lib.editor.plugin.sucTip", function (a) {
        return function (b, c) {
            var d = b.nodeList, e = {}, f = function (c) {
                var c = c || {}, e = a.core.obj.parseParam({className: "send_succpic", innerHTML: "", delay: 2}, c);
                d.successTip.className = e.className;
                d.successTip.innerHTML = e.innerHTML;
                a.core.evt.custEvent.fire(b, "setSucTipDelay", e.delay)
            }, g = function (a) {
                if (!a || !a.getTime)a = new Date;
                var b = {year: a.getFullYear(), mouth: a.getMonth() + 1, date: a.getDate(), hours: a.getHours(), minutes: a.getMinutes(), seconds: a.getSeconds()};
                return b
            }, h = {theEnd: function (a, b) {
                var c = g(b.time);
                if (c.year == 2012 && c.mouth == 12 && c.date == 21 && c.hours >= 10) {
                    var d = !1;
                    c.seconds % 5 == 0 && (d = !0);
                    b.text.indexOf("末日") != -1 && (d = !0);
                    b.text.indexOf("玛雅") != -1 && (d = !0);
                    b.text.indexOf("登船") != -1 && (d = !0);
                    d ? f({className: "send_success_over2", innerHTML: '<a target="_blank" href="http://huati.weibo.com/z/2013/"></a>', delay: 3}) : f()
                } else c.year == 2012 && c.mouth == 12 && c.date == 22 && c.hours <= 14 ? f({className: "send_success_over1", innerHTML: '<a target="_blank" href="http://huati.weibo.com/z/2013/"></a>', delay: 3}) : f({})
            }}, i = function () {
                a.core.evt.custEvent.define(b, "theEnd");
                a.core.evt.custEvent.add(b, "theEnd", h.theEnd)
            }, j = function () {
                i()
            };
            e.init = j;
            return e
        }
    });
    STK.register("conf.trans.publisher", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("publish", {url: "/aj/mblog/add", method: "post"});
        c("publishPro", {url: "/aj/mblog/add", method: "post"});
        c("interactive", {url: "/aj/mblog/interactive", method: "post"});
        c("timingPublish", {url: "/aj/mblog/addtime", method: "post"});
        c("getpublish", {url: "/p/aj/v6/publish", method: "get"});
        c("reviewadd", {url: "/p/aj/review/add", method: "post"});
        c("follow", {url: "/aj/f/followed", method: "post"});
        c("proxy", {url: "/p/aj/proxy", method: "post"});
        c("pagepublish", {url: "/p/aj/v6/mblog/add?domain=100505", method: "post"});
        c("getreview", {url: "/aj/review/list", method: "get"});
        c("getscore", {url: "/aj/review/info", method: "get"});
        c("reviewsug", {url: "/aj/review/search", method: "get"});
        return b
    });
    STK.register("lib.dialog.loginLayer", function (a) {
        var b, c = "http://tjs.sjs.sinajs.cn/t5/register/js/page/remote/loginLayer.js";
        return function (d) {
            d = a.core.obj.parseParam({lang: "zh-cn", loginSuccessUrl: encodeURIComponent(window.location.href), currentTab: ""}, d || {});
            if (window.WBtopGlobal_loginLayer)WBtopGlobal_loginLayer(d); else {
                if (b)return;
                b = !0;
                a.core.io.scriptLoader({url: c, onComplete: function () {
                    b = !1;
                    window.WBtopGlobal_loginLayer(d)
                }, timeout: 1e4, onTimeout: function () {
                    b = !1
                }})
            }
        }
    });
    STK.register("lib.kit.io.cssLoader", function (a) {
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
                    return!1
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
                j ? m = d + f : m = c + f + "?version=" + i;
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
    STK.register("lib.dialog.authentication", function (a) {
        return function (b) {
            var c = a.lib.kit.extra.language, d = a.core.util.browser;
            b = a.parseParam({src: "http://weibo.com/a/verify/realname?stage=home_verification", icon: "warn", isHold: !0, width: "380px", height: "240px", title: c("#L{帐号验证}")}, b || {});
            var e = {}, f, g, h = !1, i = "tblog_checkfailed_reform", j = {init: function () {
                f = a.ui.dialog(b);
                var c = [];
                c.push('<iframe id="account_authentication" name="account_authentication" node-type="frame" width="' + b.width + '" height="' + b.height + '" allowtransparency="true" scrolling="no" frameborder="0" src=""></iframe>');
                var d = a.builder(c.join(""));
                f.setTitle(b.title);
                f.setContent(d.box);
                var e = f.getDomList()
            }, show: function () {
                try {
                    window.SUDA && SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_box")
                } catch (c) {
                }
                h || a.lib.kit.io.cssLoader("style/css/module/layer/layer_check_identity.css", "js_style_css_module_layer_check_identity", function () {
                    h = !0
                });
                f.show().setMiddle();
                g = a.E("account_authentication");
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
                window.SUDA && SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_success");
                f.hide();
                var b = {title: c("#L{提示}"), icon: "success", OK: function () {
                    window.SUDA && SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_play");
                    history.go(0)
                }, OKText: c("#L{进入首页}"), msg: c("#L{恭喜，您的身份已验证成功，马上进入微博。}")}, d = a.ui.alert(b.msg, b);
                a.custEvent.add(d, "hide", function () {
                    history.go(0)
                })
            }, verifyFail: function () {
                window.SUDA && SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_twotimes");
                f.hide();
                var b = {title: c("#L{提示}"), icon: "warn", OK: function () {
                    SUDA.uaTrack && SUDA.uaTrack(i, "checkfailed_triple");
                    j.show()
                }, OKText: c("#L{再次验证}"), msg: c("#L{抱歉，您的身份信息不准确，请再次验证。<br/>}") + '<a class="S_spetxt" suda-data="key=tblog_checkfailed_reform&value=checkfailed_havealook" href="http://weibo.com">' + c("#L{您也可以先体验微博，随后再验证身份信息>>}") + "</a>"}, d = a.ui.alert(b.msg, b);
                a.custEvent.add(d, "hide", function () {
                    history.go(0)
                })
            }};
            j.init();
            e.destroy = j.destory;
            e.show = j.show;
            window.App = window.App || {};
            window.App.checkRealName = j.hook;
            return e
        }
    });
    STK.register("lib.dialog.memberDialog", function (a) {
        var b = '<div node-type="outer" class="layer_point"><dl class="point clearfix"><dt><span class="" node-type="icon"></span></dt><dd node-type="inner"><p class="S_txt1" node-type="textLarge"></p><p class="S_txt1" node-type="textComplex"></p><p class="S_txt2" node-type="textSmall"></p></dd></dl></div><div class="W_layer_btn S_bg1"><a href="javascript:void(0);" class="W_btn_b" node-type="OK"></a><a href="javascript:void(0);" class="W_btn_a" node-type="cancel"></a><a href="http://vip.weibo.com/paycenter?pageid=byebank" class="W_btn_a" node-type="member"><span><em class="W_icon icon_member"></em>#L{立即开通会员}</span></a></div>', c = {success: "icon_succM", error: "icon_errorM", warn: "icon_warnM", "delete": "icon_delM", question: "icon_questionM"}, d = a.lib.kit.extra.language, e = function (e, f) {
            var g, h, i, j, k, l;
            g = a.parseParam({title: "&nbsp;", icon: "warn", textLarge: e, textComplex: "", textSmall: "", OK: a.funcEmpty, OKText: d("#L{确定}"), cancel: a.funcEmpty, cancelText: d("#L{确认}")}, f);
            g.icon = c[g.icon];
            h = {};
            i = a.ui.dialog();
            i.setContent(d(b));
            l = i.getDomList(!0);
            l.icon.className = g.icon;
            l.textLarge.innerHTML = g.textLarge;
            l.textComplex.innerHTML = g.textComplex;
            l.textSmall.innerHTML = g.textSmall;
            l.OK.innerHTML = "<span>" + g.OKText + "</span>";
            l.cancel.innerHTML = "<span>" + g.cancelText + "</span>";
            i.setTitle(g.title);
            i.getDomList().title.style.borderBottomStyle = "none";
            var m = function () {
                j = !0;
                k = a.htmlToJson(l.textComplex);
                i.hide()
            };
            a.addEvent(l.OK, "click", m);
            a.addEvent(l.cancel, "click", i.hide);
            a.custEvent.add(i, "hide", function () {
                a.custEvent.remove(i, "hide", arguments.callee);
                a.removeEvent(l.OK, "click", m);
                a.removeEvent(l.cancel, "click", i.hide);
                j ? g.OK(k) : g.cancel(k)
            });
            i.show().setMiddle();
            h.dia = i;
            return h
        };
        return function (b) {
            b = a.parseParam({type: "follow", errortype: "1"}, b);
            var c, f, g = {textLarge: d("#L{您已达到悄悄关注上限！}"), textComplex: d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{悄悄关注上限立即提高}'), textSmall: d('#L{可}<a href="http://vip.weibo.com/paycenter?pageid=byebank" class="S_link2">#L{开通会员}</a>#L{或先将悄悄关注减少至10人以下，再添加}'), OKText: d("#L{管理我的悄悄关注}"), OK: function () {
                a.preventDefault();
                window.location.href = "/" + $CONFIG.uid + "/whisper"
            }}, h = {textLarge: d("#L{您已达到关注上限！}"), textComplex: d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{关注上限立即提高}'), textSmall: d('#L{可}<a href="http://vip.weibo.com/paycenter?pageid=byebank" class="S_link2">#L{开通会员}</a>#L{或先将关注减少至2000人以下，再添加}'), OKText: d("#L{管理我的关注}"), OK: function () {
                a.preventDefault();
                window.location.href = "/" + $CONFIG.uid + "/follow"
            }};
            if (b.type == "quiet") {
                switch (parseInt(b.errortype, 10)) {
                    case 2:
                        g.textLarge = d("#L{您当前已达会员等级悄悄关注上限啦！}");
                        g.textSmall = "";
                        g.textComplex = d('<a href="http://vip.weibo.com/privilege" class="S_link2">#L{了解更多会员特权信息»}</a>');
                        break;
                    case 1:
                        g.textLarge = d("#L{您已达到悄悄关注上限！}");
                        g.textSmall = "";
                        g.textComplex = d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{悄悄关注上限立即提高}');
                        break;
                    case 3:
                        g.textLarge = d("#L{您已达到悄悄关注上限！}");
                        g.textComplex = d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{悄悄关注上限立即提高}');
                        g.textSmall = d('#L{可}<a href="http://vip.weibo.com/paycenter">#L{开通会员}</a>#L{或将悄悄关注减少至10人以下，再添加}')
                }
                c = g
            } else {
                switch (parseInt(b.errortype, 10)) {
                    case 2:
                        h.textLarge = d("#L{您当前已达会员等级关注上限啦！}");
                        h.textSmall = "";
                        h.textComplex = d('<a href="http://vip.weibo.com/privilege" class="S_link2">#L{了解更多会员特权信息»}</a>');
                        break;
                    case 1:
                        h.textLarge = d("#L{您已达到关注上限！}");
                        h.textSmall = "";
                        h.textComplex = d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{关注上限立即提高}');
                        break;
                    case 3:
                        h.textLarge = d("#L{您已达到关注上限！}");
                        h.textComplex = d('#L{开通}<a href="http://vip.weibo.com/privilege">#L{微博会员}</a>，#L{关注上限立即提高}');
                        h.textSmall = d('#L{可}<a href="http://vip.weibo.com/paycenter">#L{开通会员}</a>#L{或将关注减少至2000人以下，再添加}')
                }
                c = h
            }
            f = e("", c);
            parseInt(b.errortype, 10) == 2 ? f.dia.getDomList().member.style.display = "none" : f.dia.getDomList().cancel.style.display = "none"
        }
    });
    STK.register("lib.dialog.ioError", function (a) {
        var b = a.lib.kit.extra.language, c, d;
        return function (d, e, f) {
            var g = {}, h, i, j = function () {
            }, k = {init: function () {
                k.data()
            }, data: function () {
                i = a.parseParam({auto: !0, call: j, ok: j, cancel: j, beside: null}, f);
                h = a.parseParam({location: "", OKText: b("#L{确 定}"), cancelText: b("#L{取 消}"), suda: ""}, e.data);
                h.msg = e.msg || b("#L{系统繁忙}");
                h.OK = function () {
                    a.preventDefault();
                    var b = a.queryToJson(h.suda || "");
                    b = b.ok || {};
                    window.SUDA && SUDA.uaTrack && b.key && SUDA.uaTrack(b.key, b.value);
                    i.ok();
                    h.location && (window.location.href = h.location)
                };
                h.cancel = function () {
                    a.preventDefault();
                    var b = a.queryToJson(h.suda || "");
                    b = b.cancel || {};
                    window.SUDA && SUDA.uaTrack && b.key && SUDA.uaTrack(b.key, b.value);
                    i.cancel()
                }
            }, run: function () {
                var a = l[e.code] || l[100001];
                return a() || i.call(h, e)
            }, destroy: function () {
                c && c.destroy()
            }}, l = {100001: function () {
                i.beside ? a.ui.tipAlert(h.msg, a.core.json.merge(h, {autoHide: !1, icon: "warnS"})).beside(i.beside) : a.ui.alert(h.msg.split("\\n"), a.core.json.merge(h, {icon: "warnB"}))
            }, 100002: function () {
                a.lib.dialog.loginLayer({lang: window.$CONFIG && window.$CONFIG.lang || "zh-cn"})
            }, 100003: function () {
                i.beside ? a.ui.tipConfirm(h.msg, h).beside(i.beside) : a.ui.confirm(h.msg.split("\n"), h)
            }, 100004: function () {
                c || (c = a.lib.dialog.authentication());
                c.show()
            }, 100005: function () {
                h.type = e.data && (e.data.type ? e.data.type : "follow");
                h.errortype = e.data && (e.data.errortype || "1");
                return a.lib.dialog.memberDialog(h || {})
            }, 100008: function () {
                a.lib.dialog.loginLayer({lang: window.$CONFIG && window.$CONFIG.lang || "zh-cn"})
            }};
            k.init();
            g.getdata = function () {
                return h
            };
            g.getAction = function (a) {
                return a ? l[a] : l
            };
            g.getCode = function () {
                return e.code || ""
            };
            g.run = k.run;
            i.auto && k.run();
            return g
        }
    });
    STK.register("lib.publisher.source.formdata", function (a) {
        return function (b) {
            function g() {
                var c = {}, d = a.sizzle("[name]", b);
                for (var e in d) {
                    var f = d[e].getAttribute("name"), g = d[e].getAttribute("value");
                    f && g && (c[f] = g)
                }
                return c
            }

            function f(c) {
                var d = a.sizzle('[name="' + c + '"]', b);
                d[0] && a.removeNode(d[0])
            }

            function e(c, d) {
                var e = a.sizzle('[name="' + c + '"]', b);
                e[0] && e[0].setAttribute("value", d)
            }

            function d(c) {
                var d = a.sizzle('[name="' + c + '"]', b);
                return d[0] ? d[0].getAttribute("value") : "ABSENT"
            }

            if (!b)return!1;
            var c = {}, b = b;
            c = {get: d, set: e, del: f, read: g, node: b};
            return c
        }
    });
    STK.register("lib.kit.extra.refreshpl", function (a) {
        return function (b, c) {
            function g(c, e) {
                var g = f(b);
                if (!!g) {
                    var h = FM.getURL().path, i = a.queryToJson(FM.getURL().query);
                    i.pids = g;
                    var j = a.jsonToQuery(i), k = "";
                    if (d) {
                        i = i ? i : "";
                        k = h + "?" + j + "#_0";
                        FM.setState(k, e)
                    } else {
                        k = h + "?" + i;
                        window.location.href = k
                    }
                }
            }

            function f(b) {
                var c = [];
                a.foreach(a.sizzle(b), function (a, b) {
                    c.push(e(a))
                });
                return c[0] ? c.join("|") : !1
            }

            function e(a) {
                return!a || a == document.body ? !1 : a.id ? a.id : e(a.parentNode)
            }

            var d = $CONFIG.bigpipe === "true";
            g(c || {})
        }
    });
    STK.register("lib.editor.plugin.score", function (a) {
        return function (b, c) {
            if (!!(b && b.nodeList && b.nodeList.score)) {
                var d = {}, e = b.nodeList.reviewadd, f = a.core.dom.getSize(e), g = b.nodeList.scorecontrol.style.width, h = a.delegatedEvent(b.nodeList.score), i = a.lib.publisher.source.formdata(b.nodeList.extradata), j = a.lib.kit.extra.language, k = {1: j("#L{很差}"), 2: j("#L{一般}"), 3: j("#L{还行}"), 4: j("#L{不错}"), 5: j("#L{怒赞}")}, l = {reviewadd: function (c) {
                    var c = a.fixEvent(c), d = a.position(e);
                    f = a.core.dom.getSize(e);
                    if (c.pageY > d.t && c.pageY < d.t + f.height && c.pageX > d.l && c.pageX < d.l + f.width) {
                        var h = c.pageX - d.l, i = Math.floor(h / f.width * 5 + 1);
                        b.nodeList.scorecontrol.style.width = i * 20 + "%";
                        b.nodeList.score_title && (b.nodeList.score_title.innerHTML = k[i])
                    } else {
                        b.nodeList.scorecontrol.style.width = g;
                        b.nodeList.score_title && (b.nodeList.score_title.innerHTML = k[g.replace("%", "") * 5 / 100] || "")
                    }
                }, mouseout: function (a) {
                    b.nodeList.scorecontrol.style.width = g
                }, add: function (c) {
                    var d = a.position(e), h = c.data, j = c.evt.pageX - d.l;
                    h.score = Math.floor(j / f.width * 5 + 1);
                    a.conf.trans.publisher.getTrans("reviewadd", {onSuccess: function (c) {
                        g = h.score * 20 + "%";
                        b.nodeList.scorecontrol.style.width = g;
                        b.nodeList.score_title && (b.nodeList.score_title.innerHTML = c.data.score_title);
                        i.set("score", h.score);
                        c.data.prefixtext && i.set("prefixtext", c.data.prefixtext);
                        c.data.refreshpl && a.lib.kit.extra.refreshpl('[node-type="' + c.data.refreshpl + '"]');
                        a.custEvent.fire(b, "keyUpCount")
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }, onFail: function () {
                    }}).request(h)
                }}, m = function () {
                    a.addEvent(document.body, "mousemove", l.reviewadd);
                    h.add("reviewadd", "click", l.add)
                }, n = function () {
                    m()
                };
                n();
                d.destroy = function () {
                    a.removeEvent(document.body, "mousemove", l.reviewadd);
                    h.remove("reviewadd", "click", l.add)
                };
                return d
            }
        }
    });
    STK.register("conf.trans.face", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("face", {url: "/aj/mblog/face?type=face&_wv=5"});
        c("magicFace", {url: "/aj/mblog/face?type=ani&_wv=5"});
        return b
    });
    STK.register("lib.face.face", function (a) {
        function g(b) {
            if (e.length) {
                b(e);
                return!0
            }
            a.conf.trans.face.request("face", {onSuccess: function (a, c) {
                e = [];
                a.data.usual.norm && e.push({name: f, hotmap: a.data.usual.hot.slice(0, 12), map: a.data.usual.norm});
                for (var d in a.data.more)a.data.more.hasOwnProperty(d) && e.push({name: d, map: a.data.more[d]});
                b(e)
            }, onError: function (b, c) {
                a.lib.dialog.ioError(b.code, b)
            }}, {});
            return!1
        }

        var b = a.lib.kit.extra.language, c = ["first", "second", "third", "fouth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"], d = '<div class="W_layer W_layer_pop"><div class="content"><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div><div class="layer_faces"><div class="WB_minitab"><ul class="minitb_ul S_line1 S_bg1 clearfix"><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li></ul><ul class="W_fr minitb_ul S_line1 S_bg1 clearfix"><li class="minitb_more S_line1" node-type="prev" action-type="prev"> <a href="javascript:void(0);" class="minitb_lk S_txt1"><i class="W_ficon ficon_arrow_left_lite S_ficon">j</i></a></li><li class="minitb_more S_line1" node-type="next" action-type="next"> <a href="javascript:void(0);" class="minitb_lk S_txt1"><i class="W_ficon ficon_arrow_right_lite S_ficon">i</i></a></li></ul></div><div class="faces_list_box"><div class="faces_list" node-type="scrollView"><div node-type="list"></div></div></div></div><div class="W_layer_arrow"><span class="W_arrow_bor" node-type="arrow"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div>', e = [], f = b("#L{默认}");
        return function (b, e) {
            var f = a.ui.bubble(d, {clickBlankToHide: !0, stopClickPropagation: !0, autoRelease: !0, showWithAni: "fadeInDown:fast", hideWithAni: "fadeOutUp:fast"});
            a.custEvent.define(f, "insert");
            var h = f.getDomList(!0).list, i = [].concat(f.getDomList(!0).tab), j, k = 0, l = 0;
            g(function (b) {
                function d() {
                    a.foreach(i, function (c, d) {
                        d = d + l;
                        a.removeClassName(c, "current");
                        if (b[d]) {
                            if (d === k) {
                                a.addClassName(c, "current");
                                c.innerHTML = '<a href="javascript:void(0);" class="minitb_lk S_txt1 S_bg2" action-type="tab" action-data="index=' + d + '">' + b[d].name + '</a><span class="cur_block"></span>'
                            } else c.innerHTML = '<a href="javascript:void(0);" class="minitb_lk S_txt1" action-type="tab" action-data="index=' + d + '">' + b[d].name + '</a><span class="cur_block"></span>';
                            c.title = b[d].name
                        } else {
                            c.innerHTML = '<a href="javascript:void(0);" class="minitb_lk S_txt1"></a><span class="cur_block"></span>';
                            c.title = ""
                        }
                        c.offsetWidth
                    });
                    l <= 0 ? a.addClassName(f.getDomList().prev, "W_btn_b_disable") : a.removeClassName(f.getDomList().prev, "W_btn_b_disable");
                    l >= b.length - 5 ? a.addClassName(f.getDomList().next, "W_btn_b_disable") : a.removeClassName(f.getDomList().next, "W_btn_b_disable")
                }

                f.on("tab", "click", function (d) {
                    k = d.data.index | 0;
                    a.foreach(i, function (b, c) {
                        a.removeClassName(b, "current");
                        a.removeClassName(b.firstChild, "S_bg2")
                    });
                    a.addClassName(d.el.parentNode, "current");
                    a.addClassName(d.el, "S_bg2");
                    var e = "", g;
                    if (b[k].hotmap) {
                        e += '<ul class="faces_list_hot clearfix">';
                        a.foreach([].concat(b[k].hotmap), function (a, b) {
                            g = 'suda="key=mainpub_default_expr&value=' + c[b] + '"';
                            e += '<li action-type="select" action-data="insert=' + encodeURIComponent(a.phrase) + '" title="' + a.phrase.replace(/\[|\]/g, "") + '" ' + g + '><img src="' + a.icon + '"/></li>'
                        });
                        e += "</ul>"
                    }
                    e += "<ul>";
                    a.foreach([].concat(b[k].map), function (a) {
                        e += '<li action-type="select" action-data="insert=' + encodeURIComponent(a.phrase) + '" title="' + a.phrase.replace(/\[|\]/g, "") + '" ><img src="' + a.icon + '"/></li>'
                    });
                    e += "</ul>";
                    h.innerHTML = e;
                    h.offsetWidth;
                    j || (j = a.ui.scrollView(f.getDomList(!0).scrollView));
                    setTimeout(function () {
                        j.reset();
                        j.scrollTop(0)
                    })
                });
                f.on("prev", "click", function (a) {
                    l = Math.max(l - 5, 0);
                    d()
                });
                f.on("next", "click", function (a) {
                    l = Math.min(l + 5, b.length - 5);
                    d()
                });
                f.on("select", "click", function (b) {
                    var c = a.sizzle("img", b.el)[0].getAttribute("src");
                    f.trigger("insert", {value: decodeURIComponent(b.data.insert), url: c});
                    var d = b.el.getAttribute("suda");
                    if (d) {
                        d = a.queryToJson(d);
                        window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack(d.key, d.value)
                    }
                });
                f.on("beforeHide", function () {
                    j.scrollEl.style.overflowY = "hidden"
                });
                f.on("hide", function () {
                    if (j) {
                        j.destroy();
                        j = null
                    }
                });
                d();
                f.trigger(i[0].firstChild, "click", null)
            });
            f.getBub = function () {
                return f
            };
            e.refer ? f.show().setArrow("top").setAlignPos(b, e.refer, e) : f.show().beside(b, e);
            return f
        }
    });
    STK.register("lib.publisher.widget.face", function (a) {
        var b = a.lib.face.face;
        return function (c, d) {
            var e = {}, f, g;
            d = a.core.json.merge({t: 0, l: -15, refer: c.nodeList.textEl, useAlign: !0, arrowOffset: 2, clickToHide: !1}, d || {});
            var h = function (a, b) {
                var e = c.API.getCurrentLogType();
                c.API.addShortUrlLog(e);
                c.API.insertText(b.value);
                d.clickToHide && f.getBub().hide()
            }, i = function () {
                a.core.evt.preventDefault();
                var g, i = a.fixEvent(a.getEvent()).target;
                g = i;
                f = b(g, d);
                a.custEvent.add(f, "insert", h);
                a.custEvent.define(c, "close");
                a.custEvent.add(c, "close", e.hide);
                a.custEvent.add(f, "hide", function () {
                    a.custEvent.remove(f, "hide", arguments.callee);
                    a.custEvent.remove(f, "insert", h);
                    a.custEvent.remove(c, "close", e.hide)
                })
            };
            e.init = function (b, d, e) {
                c = b;
                g = d;
                a.addEvent(b.nodeList[g], "click", i)
            };
            e.show = i;
            e.hide = function () {
                f && f.getBub().hide()
            };
            e.destroy = function () {
                c = null
            };
            return e
        }
    });
    STK.register("conf.trans.imageUploadBubble", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("cartoon", {url: "/aj/mblog/face?type=cartoon&_wv=5"});
        return b
    });
    STK.register("lib.kit.extra.crc32", function (a) {
        return function (a, b) {
            function c(a) {
                a = a.replace(/\r\n/g, "\n");
                var b = "";
                for (var c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    if (d < 128)b += String.fromCharCode(d); else if (d > 127 && d < 2048) {
                        b += String.fromCharCode(d >> 6 | 192);
                        b += String.fromCharCode(d & 63 | 128)
                    } else {
                        b += String.fromCharCode(d >> 12 | 224);
                        b += String.fromCharCode(d >> 6 & 63 | 128);
                        b += String.fromCharCode(d & 63 | 128)
                    }
                }
                return b
            }

            a = c(a);
            var d = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D", b;
            typeof b == "undefined" && (b = 0);
            var e = 0, f = 0;
            b = b ^ -1;
            for (var g = 0, h = a.length; g < h; g++) {
                f = (b ^ a.charCodeAt(g)) & 255;
                e = "0x" + d.substr(f * 9, 8);
                b = b >>> 8 ^ e
            }
            var i = b ^ -1;
            i < 0 && (i = 4294967296 + i);
            return i
        }
    });
    STK.register("lib.kit.extra.imageURL", function (a) {
        return function (b, c) {
            function f(a) {
                a = (a + "").replace(/[^a-f0-9]/gi, "");
                return parseInt(a, 16)
            }

            var d = {size: "small"};
            if (typeof b == "string") {
                d = a.core.obj.parseParam(d, c);
                var e = d.size, g = {ss: {middle: "&690", bmiddle: "&690", small: "&690", thumbnail: "&690", square: "&690", orignal: "&690", thumb180: "&690", mw1024: "&690"}, ww: {middle: "bmiddle", large: "large", bmiddle: "bmiddle", small: "small", thumbnail: "thumbnail", square: "square", orignal: "large", thumb180: "thumb180", mw690: "mw690", mw1024: "mw1024"}}, h = b.charAt(9) == "w", i = b.charAt(21) == "g" ? ".gif" : ".jpg", j = h ? a.lib.kit.extra.crc32(b) % 4 + 1 : f(b.substr(19, 2)) % 16 + 1, k = "http://" + (h ? "ww" : "ss") + j + ".sinaimg.cn/" + (h ? g.ww[e] : e) + "/" + b + (h ? i : "") + (h ? "" : g.ss[e]);
                return k
            }
        }
    });
    STK.register("lib.kit.extra.merge", function (a) {
        return function (a, b) {
            var c = {};
            for (var d in a)c[d] = a[d];
            for (var d in b)c[d] = b[d];
            return c
        }
    });
    STK.register("conf.trans.watermark", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("waterMark", {url: "/aj/account/watermark"});
        return b
    });
    STK.register("lib.image.watermark", function (a) {
        var b = {trans: null, conf: null, success: function (a, c) {
            b.conf = a.data
        }}, c = [];
        return function (d) {
            if (typeof d == "function") {
                c.push(d);
                if (b.conf)for (var e = 0; e < c.length; e++) {
                    c[e] && c[e](b.conf);
                    c[e] = null
                } else {
                    b.trans || (b.trans = a.conf.trans.watermark.getTrans("waterMark", {onSuccess: function () {
                        b.success.apply(null, arguments);
                        for (var a = 0; a < c.length; a++) {
                            c[a] && c[a](b.conf);
                            c[a] = null
                        }
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }, onFail: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}));
                    b.trans.abort();
                    b.trans.request()
                }
            }
        }
    });
    STK.register("lib.kit.extra.upload", function (a) {
        var b = a.lib.kit.extra.language;
        return function (c) {
            var d = {}, e = window.location.href, f;
            c = a.parseParam({type: "common", form: null, base64Str: "", imgName: "", uploadArgs: {}}, c);
            a.custEvent.define(d, ["uploadError", "uploadSucc", "uploadFail"]);
            var g = {base64form: null, upload: function (b) {
                var d, e = b, h = "weibo.com/", i = window.$CONFIG, j = c.type;
                if (j === "common")d = c.form; else if (j === "base64") {
                    d = a.C("form");
                    g.base64form = d;
                    d.method = "POST";
                    var k = a.C("input");
                    k.name = "b64_data";
                    k.type = "hidden";
                    k.value = c.base64Str;
                    d.appendChild(k);
                    document.body.appendChild(d)
                }
                var l = {marks: 0, app: "miniblog", s: "rdxt"};
                c.type === "common" || c.type === "base64" ? l = a.lib.kit.extra.merge({url: e.domain == "1" ? h + (i && i.watermark || i.domain) : 0, markpos: e.position || "", logo: e.logo || "", nick: e.nickname == "1" ? "@" + (i && i.nick) : 0}, l) : c.type === "custom" && (l = a.lib.kit.extra.merge(c.uploadArgs, l));
                j === "base64" && (l = a.lib.kit.extra.merge({mime: "image/jpeg", data: "base64"}, l));
                f = a.core.io.ijax({url: "http://picupload.service.weibo.com/interface/pic_upload.php", form: d, abaurl: "http://" + document.domain + "/aj/static/upimgback.html?_wv=5", abakey: "cb", timeout: 18e5, onComplete: g.handle, onTimeout: g.timeout, args: l})
            }, sendError: function (b) {
                var c = new Image, d = encodeURIComponent(navigator.userAgent), f = window.$CONFIG, g = a.lib.kit.extra.merge(b, {ua: d, rnd: (new Date).getTime(), uid: f ? f.uid : 0, referer: encodeURIComponent(e)});
                g = a.core.json.jsonToQuery(g);
                g = "http://ww1.sinaimg.cn/do_not_delete/fc.html?" + g;
                c.setAttribute("src", g)
            }, timeout: function (c) {
                a.custEvent.fire(d, "uploadFail", {msg: b("#L{上传图片超时}")})
            }, handle: function (e) {
                a.removeNode(g.base64form);
                g.base64form = null;
                var f = Math.abs(e.ret);
                if (!e || e.ret < 0) {
                    var h = "";
                    switch (f) {
                        case 1:
                            h = "#L{没有登录}";
                            break;
                        case 4:
                        case 9:
                            h = "#L{请上传5M以内的JPG、GIF、PNG图片。}";
                            break;
                        default:
                            h = "#L{上传图片超时}"
                    }
                    e ? g.sendError({ret: e.ret}) : g.sendError({ret: "none"});
                    a.custEvent.fire(d, "uploadError", {code: f, msg: b(h)})
                } else {
                    var i = new Date, j = function (a) {
                        return a < 10 ? "0" + a : a
                    }, k;
                    if (c.type === "common")k = c.imgName; else if (c.type === "base64") {
                        var l = [i.getFullYear(), j(i.getMonth() + 1), j(i.getDate()), j(i.getHours()), j(i.getMinutes()), j(i.getSeconds())].join("");
                        k = b("#L{微博桌面截图}") + l + ".jpg"
                    }
                    a.custEvent.fire(d, "uploadSucc", {pid: e.pid, imgName: k})
                }
            }, init: function () {
                c.type === "common" || c.type === "base64" ? a.lib.image.watermark(function (a) {
                    g.upload(a)
                }) : g.upload()
            }, destroy: function () {
                a.custEvent.undefine(d);
                a.removeNode(g.base64form)
            }};
            g.init();
            d.destroy = g.destroy;
            d.abort = function () {
                if (f)try {
                    f.abort()
                } catch (a) {
                }
            };
            return d
        }
    });
    STK.register("lib.kit.extra.getFlashVersion", function (a) {
        return function () {
            var a = "1", b = navigator;
            if (b.plugins && b.plugins.length) {
                for (var c = 0; c < b.plugins.length; c++)if (b.plugins[c] && b.plugins[c].name && b.plugins[c].name.indexOf("Shockwave Flash") != -1) {
                    a = b.plugins[c].description.split("Shockwave Flash ")[1];
                    break
                }
            } else if (window.ActiveXObject)for (var c = 10; c >= 2; c--)try {
                var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + c);
                if (d) {
                    a = c + ".0";
                    break
                }
            } catch (e) {
            }
            return parseInt(a.split(".")[0])
        }
    });
    STK.register("lib.kit.extra.installFlash", function (a) {
        var b = a.lib.kit.extra.language;
        return function (c) {
            c = a.parseParam({onHide: a.funcEmpty}, c);
            var d = '<div class="layer_version_upgrade"><dl class="point clearfix"><dt><span class="icon_versionup"></span></dt><dd><p class="S_txt1">#L{你的Flash版本过低，请安装更高版本的Flash插件后，再刷新页面重试}</p></dd></dl><div class="versionup_btn"><a class="btn_l" href="http://get.adobe.com/cn/flashplayer/" target="_blank"><img width="16" height="16" class="icon_install" title="" src="' + $CONFIG.imgPath + 'style/images/common/transparent.gif">' + '<span class="txt">#L{安装更新}</span></a><a class="btn_r" href="javascript:void(0);" onclick="window.location.reload()">' + ' <img width="16" height="16" class="icon_refreshpage" title="" src="' + $CONFIG.imgPath + 'style/images/common/transparent.gif">' + '<span class="txt">#L{刷新页面}</span></a></div>' + "</div>";
            a.lib.kit.io.cssLoader("style/css/module/layer/layer_version_upgrade.css", "js_style_css_module_layer_layer_version_upgrade", function () {
                var e = a.ui.dialog();
                e.setTitle(b("#L{提示}"));
                var f = a.C("div");
                f.innerHTML = b(d);
                e.setContent(f);
                f = null;
                e.show();
                e.setMiddle();
                a.custEvent.add(e, "hide", function () {
                    a.custEvent.remove(e, "hide", arguments.callee);
                    setTimeout(function () {
                        c.onHide()
                    }, 0)
                })
            })
        }
    });
    STK.register("lib.kit.extra.swfobject", function (a) {
        var b = function () {
            function W(b) {
                var c = /[\\\"<>\.;]/, d = c.exec(b) != null;
                return d && typeof encodeURIComponent != a ? encodeURIComponent(b) : b
            }

            function V(a, b) {
                if (!!y) {
                    var c = b ? "visible" : "hidden";
                    u && Q(a) ? Q(a).style.visibility = c : U("#" + a, "visibility:" + c)
                }
            }

            function U(b, d, e, f) {
                if (!z.ie || !z.mac) {
                    var g = j.getElementsByTagName("head")[0];
                    if (!g)return;
                    var h = e && typeof e == "string" ? e : "screen";
                    if (f) {
                        w = null;
                        x = null
                    }
                    if (!w || x != h) {
                        var i = R("style");
                        i.setAttribute("type", "text/css");
                        i.setAttribute("media", h);
                        w = g.appendChild(i);
                        z.ie && z.win && typeof j.styleSheets != a && j.styleSheets.length > 0 && (w = j.styleSheets[j.styleSheets.length - 1]);
                        x = h
                    }
                    z.ie && z.win ? w && typeof w.addRule == c && w.addRule(b, d) : w && typeof j.createTextNode != a && w.appendChild(j.createTextNode(b + " {" + d + "}"))
                }
            }

            function T(a) {
                var b = z.pv, c = a.split(".");
                c[0] = parseInt(c[0], 10);
                c[1] = parseInt(c[1], 10) || 0;
                c[2] = parseInt(c[2], 10) || 0;
                return b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1
            }

            function S(a, b, c) {
                a.attachEvent(b, c);
                p[p.length] = [a, b, c]
            }

            function R(a) {
                return j.createElement(a)
            }

            function Q(a) {
                var b = null;
                try {
                    b = j.getElementById(a)
                } catch (c) {
                }
                return b
            }

            function P(a) {
                var b = Q(a);
                if (b) {
                    for (var c in b)typeof b[c] == "function" && (b[c] = null);
                    b.parentNode.removeChild(b)
                }
            }

            function O(a) {
                var b = Q(a);
                if (b && b.nodeName == "OBJECT")if (z.ie && z.win) {
                    b.style.display = "none";
                    (function () {
                        b.readyState == 4 ? P(a) : setTimeout(arguments.callee, 10)
                    })()
                } else b.parentNode.removeChild(b)
            }

            function N(a, b, c) {
                var d = R("param");
                d.setAttribute("name", b);
                d.setAttribute("value", c);
                a.appendChild(d)
            }

            function M(b, d, e) {
                var g, h = Q(e);
                if (z.wk && z.wk < 312)return g;
                if (h) {
                    typeof b.id == a && (b.id = e);
                    if (z.ie && z.win) {
                        var i = "";
                        for (var j in b)b[j] != Object.prototype[j] && (j.toLowerCase() == "data" ? d.movie = b[j] : j.toLowerCase() == "styleclass" ? i += ' class="' + b[j] + '"' : j.toLowerCase() != "classid" && (i += " " + j + '="' + b[j] + '"'));
                        var k = "";
                        for (var l in d)d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
                        h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + k + "</object>";
                        o[o.length] = b.id;
                        g = Q(b.id)
                    } else {
                        var m = R(c);
                        m.setAttribute("type", f);
                        for (var n in b)b[n] != Object.prototype[n] && (n.toLowerCase() == "styleclass" ? m.setAttribute("class", b[n]) : n.toLowerCase() != "classid" && m.setAttribute(n, b[n]));
                        for (var p in d)d[p] != Object.prototype[p] && p.toLowerCase() != "movie" && N(m, p, d[p]);
                        h.parentNode.replaceChild(m, h);
                        g = m
                    }
                }
                return g
            }

            function L(a) {
                var b = R("div");
                if (z.win && z.ie)b.innerHTML = a.innerHTML; else {
                    var d = a.getElementsByTagName(c)[0];
                    if (d) {
                        var e = d.childNodes;
                        if (e) {
                            var f = e.length;
                            for (var g = 0; g < f; g++)(e[g].nodeType != 1 || e[g].nodeName != "PARAM") && e[g].nodeType != 8 && b.appendChild(e[g].cloneNode(!0))
                        }
                    }
                }
                return b
            }

            function K(a) {
                if (z.ie && z.win && a.readyState != 4) {
                    var b = R("div");
                    a.parentNode.insertBefore(b, a);
                    b.parentNode.replaceChild(L(a), b);
                    a.style.display = "none";
                    (function () {
                        a.readyState == 4 ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
                    })()
                } else a.parentNode.replaceChild(L(a), a)
            }

            function J(b, c, d, e) {
                v = !0;
                s = e || null;
                t = {success: !1, id: d};
                var f = Q(d);
                if (f) {
                    if (f.nodeName == "OBJECT") {
                        q = L(f);
                        r = null
                    } else {
                        q = f;
                        r = d
                    }
                    b.id = g;
                    if (typeof b.width == a || !/%$/.test(b.width) && parseInt(b.width, 10) < 310)b.width = "310";
                    if (typeof b.height == a || !/%$/.test(b.height) && parseInt(b.height, 10) < 137)b.height = "137";
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var h = z.ie && z.win ? "ActiveX" : "PlugIn", k = "MMredirectURL=" + i.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + h + "&MMdoctitle=" + j.title;
                    typeof c.flashvars != a ? c.flashvars += "&" + k : c.flashvars = k;
                    if (z.ie && z.win && f.readyState != 4) {
                        var l = R("div");
                        d += "SWFObjectNew";
                        l.setAttribute("id", d);
                        f.parentNode.insertBefore(l, f);
                        f.style.display = "none";
                        (function () {
                            f.readyState == 4 ? f.parentNode.removeChild(f) : setTimeout(arguments.callee, 10)
                        })()
                    }
                    M(b, c, d)
                }
            }

            function I() {
                return!v && T("6.0.65") && (z.win || z.mac) && !(z.wk && z.wk < 312)
            }

            function H(b) {
                var d = null, e = Q(b);
                if (e && e.nodeName == "OBJECT")if (typeof e.SetVariable != a)d = e; else {
                    var f = e.getElementsByTagName(c)[0];
                    f && (d = f)
                }
                return d
            }

            function G() {
                var b = n.length;
                if (b > 0)for (var c = 0; c < b; c++) {
                    var d = n[c].id, e = n[c].callbackFn, f = {success: !1, id: d};
                    if (z.pv[0] > 0) {
                        var g = Q(d);
                        if (g)if (T(n[c].swfVersion) && !(z.wk && z.wk < 312)) {
                            V(d, !0);
                            if (e) {
                                f.success = !0;
                                f.ref = H(d);
                                e(f)
                            }
                        } else if (n[c].expressInstall && I()) {
                            var h = {};
                            h.data = n[c].expressInstall;
                            h.width = g.getAttribute("width") || "0";
                            h.height = g.getAttribute("height") || "0";
                            g.getAttribute("class") && (h.styleclass = g.getAttribute("class"));
                            g.getAttribute("align") && (h.align = g.getAttribute("align"));
                            var i = {}, j = g.getElementsByTagName("param"), k = j.length;
                            for (var l = 0; l < k; l++)j[l].getAttribute("name").toLowerCase() != "movie" && (i[j[l].getAttribute("name")] = j[l].getAttribute("value"));
                            J(h, i, d, e)
                        } else {
                            K(g);
                            e && e(f)
                        }
                    } else {
                        V(d, !0);
                        if (e) {
                            var m = H(d);
                            if (m && typeof m.SetVariable != a) {
                                f.success = !0;
                                f.ref = m
                            }
                            e(f)
                        }
                    }
                }
            }

            function F() {
                var b = j.getElementsByTagName("body")[0], d = R(c);
                d.setAttribute("type", f);
                var e = b.appendChild(d);
                if (e) {
                    var g = 0;
                    (function () {
                        if (typeof e.GetVariable != a) {
                            var c = e.GetVariable("$version");
                            if (c) {
                                c = c.split(" ")[1].split(",");
                                z.pv = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]
                            }
                        } else if (g < 10) {
                            g++;
                            setTimeout(arguments.callee, 10);
                            return
                        }
                        b.removeChild(d);
                        e = null;
                        G()
                    })()
                } else G()
            }

            function E() {
                l ? F() : G()
            }

            function D(b) {
                if (typeof i.addEventListener != a)i.addEventListener("load", b, !1); else if (typeof j.addEventListener != a)j.addEventListener("load", b, !1); else if (typeof i.attachEvent != a)S(i, "onload", b); else if (typeof i.onload == "function") {
                    var c = i.onload;
                    i.onload = function () {
                        c();
                        b()
                    }
                } else i.onload = b
            }

            function C(a) {
                u ? a() : m[m.length] = a
            }

            function B() {
                if (!u) {
                    try {
                        var a = j.getElementsByTagName("body")[0].appendChild(R("span"));
                        a.parentNode.removeChild(a)
                    } catch (b) {
                        return
                    }
                    u = !0;
                    var c = m.length;
                    for (var d = 0; d < c; d++)m[d]()
                }
            }

            var a = "undefined", c = "object", d = "Shockwave Flash", e = "ShockwaveFlash.ShockwaveFlash", f = "application/x-shockwave-flash", g = "SWFObjectExprInst", h = "onreadystatechange", i = window, j = document, k = navigator, l = !1, m = [E], n = [], o = [], p = [], q, r, s, t, u = !1, v = !1, w, x, y = !0, z = function () {
                var b = typeof j.getElementById != a && typeof j.getElementsByTagName != a && typeof j.createElement != a, g = k.userAgent.toLowerCase(), h = k.platform.toLowerCase(), m = h ? /win/.test(h) : /win/.test(g), n = h ? /mac/.test(h) : /mac/.test(g), o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, p = !1, q = [0, 0, 0], r = null;
                if (typeof k.plugins != a && typeof k.plugins[d] == c) {
                    r = k.plugins[d].description;
                    if (r && (typeof k.mimeTypes == a || !k.mimeTypes[f] || !!k.mimeTypes[f].enabledPlugin)) {
                        l = !0;
                        p = !1;
                        r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10);
                        q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else if (typeof i.ActiveXObject != a)try {
                    var s = new ActiveXObject(e);
                    if (s) {
                        r = s.GetVariable("$version");
                        if (r) {
                            p = !0;
                            r = r.split(" ")[1].split(",");
                            q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]
                        }
                    }
                } catch (t) {
                }
                return{w3: b, pv: q, wk: o, ie: p, win: m, mac: n}
            }(), A = function () {
                if (!!z.w3) {
                    (typeof j.readyState != a && j.readyState == "complete" || typeof j.readyState == a && (j.getElementsByTagName("body")[0] || j.body)) && B();
                    if (!u) {
                        typeof j.addEventListener != a && j.addEventListener("DOMContentLoaded", B, !1);
                        if (z.ie && z.win) {
                            j.attachEvent(h, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(h, arguments.callee);
                                    B()
                                }
                            });
                            i == top && function () {
                                if (!u) {
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (a) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    B()
                                }
                            }()
                        }
                        z.wk && function () {
                            if (!u) {
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                B()
                            }
                        }();
                        D(B)
                    }
                }
            }(), X = function () {
                z.ie && z.win && window.attachEvent("onunload", function () {
                    var a = p.length;
                    for (var c = 0; c < a; c++)p[c][0].detachEvent(p[c][1], p[c][2]);
                    var d = o.length;
                    for (var e = 0; e < d; e++)O(o[e]);
                    for (var f in z)z[f] = null;
                    z = null;
                    for (var g in b)b[g] = null;
                    b = null
                })
            }();
            return{registerObject: function (a, b, c, d) {
                if (z.w3 && a && b) {
                    var e = {};
                    e.id = a;
                    e.swfVersion = b;
                    e.expressInstall = c;
                    e.callbackFn = d;
                    n[n.length] = e;
                    V(a, !1)
                } else d && d({success: !1, id: a})
            }, getObjectById: function (a) {
                if (z.w3)return H(a)
            }, embedSWF: function (b, d, e, f, g, h, i, j, k, l) {
                var m = {success: !1, id: d};
                if (z.w3 && !(z.wk && z.wk < 312) && b && d && e && f && g) {
                    V(d, !1);
                    C(function () {
                        e += "";
                        f += "";
                        var n = {};
                        if (k && typeof k === c)for (var o in k)n[o] = k[o];
                        n.data = b;
                        n.width = e;
                        n.height = f;
                        var p = {};
                        if (j && typeof j === c)for (var q in j)p[q] = j[q];
                        if (i && typeof i === c)for (var r in i)typeof p.flashvars != a ? p.flashvars += "&" + r + "=" + i[r] : p.flashvars = r + "=" + i[r];
                        if (T(g)) {
                            var s = M(n, p, d);
                            n.id == d && V(d, !0);
                            m.success = !0;
                            m.ref = s
                        } else {
                            if (h && I()) {
                                n.data = h;
                                J(n, p, d, l);
                                return
                            }
                            V(d, !0)
                        }
                        l && l(m)
                    })
                } else l && l(m)
            }, switchOffAutoHideShow: function () {
                y = !1
            }, ua: z, getFlashPlayerVersion: function () {
                return{major: z.pv[0], minor: z.pv[1], release: z.pv[2]}
            }, hasFlashPlayerVersion: T, createSWF: function (a, b, c) {
                return z.w3 ? M(a, b, c) : undefined
            }, showExpressInstall: function (a, b, c, d) {
                z.w3 && I() && J(a, b, c, d)
            }, removeSWF: function (a) {
                z.w3 && O(a)
            }, createCSS: function (a, b, c, d) {
                z.w3 && U(a, b, c, d)
            }, addDomLoadEvent: C, addLoadEvent: D, getQueryParamValue: function (a) {
                var b = j.location.search || j.location.hash;
                if (b) {
                    /\?/.test(b) && (b = b.split("?")[1]);
                    if (a == null)return W(b);
                    var c = b.split("&");
                    for (var d = 0; d < c.length; d++)if (c[d].substring(0, c[d].indexOf("=")) == a)return W(c[d].substring(c[d].indexOf("=") + 1))
                }
                return""
            }, expressInstallCallback: function () {
                if (v) {
                    var a = Q(g);
                    if (a && q) {
                        a.parentNode.replaceChild(q, a);
                        if (r) {
                            V(r, !0);
                            z.ie && z.win && (q.style.display = "block")
                        }
                        s && s(t)
                    }
                    v = !1
                }
            }}
        }();
        return b
    });
    STK.register("lib.image.imgUpload", function (a) {
        var b = document.documentElement, c = document.body, d = {getScroll: function () {
            var a, d, e, f;
            if (b && b.scrollTop) {
                a = b.scrollTop;
                d = b.scrollLeft;
                e = b.scrollWidth;
                f = b.scrollHeight
            } else if (c) {
                a = c.scrollTop;
                d = c.scrollLeft;
                e = c.scrollWidth;
                f = c.scrollHeight
            }
            return{t: a, l: d, w: e, h: f}
        }, getScreen: function () {
            var c = {};
            if (a.IE) {
                c.w = b.clientWidth;
                c.h = b.clientHeight
            } else {
                c.w = window.innerWidth;
                c.h = window.innerHeight
            }
            return c
        }}, e = function (a) {
            var b = {cn: "zh_CN", tw: "zh_TW"};
            a = a.toLowerCase();
            a = a.replace(/zh-/g, "");
            return b[a]
        };
        return function (b, f) {
            var g = {version: $CONFIG.version, swf_path: $CONFIG.jsPath + "home/static/swf/img/", service: b.service, ed_swf: b.swf || "PhotoEditor.swf", exp_swf: "expressInstall.swf", h: b.h || 385, w: b.w || 528, f_version: "10.0.0", channel: b.id + "_channel", id_panel: b.id + "_panel", id_swf: b.id + "_swf"}, h = {}, i, j, k = {init: function () {
                f.init && f.init(h, b)
            }, setHeight: function (b) {
                a.IE || (m.getFlash(g.id_swf).height = b)
            }, upComplate: function (a) {
                b.sucess && b.sucess(a);
                i.style.display = "none";
                h.destory()
            }, closeEditor: function () {
                i.style.display = "none";
                h.destory();
                f.close && f.close(h, b)
            }, suda: function (a) {
                window.SUDA && SUDA.uaTrack && SUDA.uaTrack("meitu", "v4||" + a)
            }}, l = {version: g.version, language: e($CONFIG.lang), channel: g.channel, JSHandler: "STK.core.util.listener.fire", initFun: "init", changeFlashHeightFun: "setHeight", uploadCompleteFun: "upComplate", closePhotoEditorFun: "closeEditor", suda: "suda"}, m = {init: function () {
                if (!!b.id) {
                    i = a.E(g.id_panel);
                    j = a.E(g.id_swf);
                    if (!i) {
                        i = a.C("div");
                        i.id = g.id_panel;
                        c.appendChild(i)
                    }
                    if (!j) {
                        j = a.C("div");
                        j.id = g.id_swf;
                        i.appendChild(j)
                    }
                    i.style.display = "none";
                    m.getFlash(g.id_swf) || m.build()
                }
            }, checkAction: function (a, b) {
                var c = STK.core.util.listener.list;
                return!!c[a] && !!c[a][b]
            }, bindEvt: function (a) {
                for (var b in a)k[a[b]] && !m.checkAction(g.channel, a[b]) && STK.core.util.listener.register(g.channel, a[b], k[a[b]])
            }, build: function () {
                var c = b.baseDir ? b.baseDir + "/" : "", d = {menu: "true", scale: "noScale", allowFullscreen: "true", allowScriptAccess: "always", bgcolor: "#FFFFFF", wmode: a.IE ? "window" : "transparent", base: g.swf_path + c}, e = {id: b.id};
                m.bindEvt(l);
                a.lib.kit.extra.swfobject.embedSWF(g.swf_path + c + g.ed_swf + "?version=" + g.version, g.id_swf, g.w, g.h, g.f_version, g.swf_path + g.exp_swf, l, d, e)
            }, getFlash: function () {
                return a.lib.kit.extra.swfobject.getObjectById(b.id)
            }, setPos: function () {
                var c, e, f, h, j = d.getScroll(), k = d.getScreen();
                f = Math.round(g.h > k.h ? k.h / 5 + j.t : (k.h - g.h) / 2 + j.t);
                h = Math.round(g.w > k.w ? k.w / 5 + j.l : (k.w - g.w) / 2 + j.l);
                c = b.pos.t - 1 || f;
                e = b.pos.l || h;
                i.style.zIndex = b.zIndex || 2e4;
                a.setStyle(i, "position", "absolute");
                a.setStyle(i, "left", e + "px");
                a.setStyle(i, "top", c + "px");
                m.autoScroll(j.t, j.t + (c - f))
            }, autoScroll: function (a, b, c) {
                var d, e, f, g = 8, h;
                g = c || g;
                h = a - b;
                e = [h];
                e[g] = 0;
                f = 1;
                for (f; f < g; f++)e[f] = h = h / 2;
                clearInterval(d);
                d = setInterval(function () {
                    e.length ? window.scrollTo(0, b + e.shift()) : clearInterval(d)
                }, 30)
            }};
            h.show = function (a) {
                a && (b.id = a);
                i && (i.style.display = "");
                m.setPos();
                return this
            };
            h.hide = function () {
                i && (i.style.display = "");
                return this
            };
            h.setPars = function (a) {
                var b = {imageURL: a || "", uploadURL: g.service};
                m.getFlash(g.id_swf).editPhoto(b);
                return this
            };
            h.getSwf = m.getFlash;
            h.destory = function () {
                for (var b in l)k[l[b]] && STK.core.util.listener.remove(g.channel, l[b], k[l[b]]);
                i.innerHTML = "";
                a.removeNode(i)
            };
            m.init();
            return h
        }
    });
    STK.register("lib.browser.plugin.plugInstallState", function (a) {
        return function (b, c, d, e) {
            var f = {}, g = a.core.util.browser, h = window.navigator, i = a.IE, j = g.MOZ, k = g.OPERA, l = g.SAFARI, m = g.CHROME, n = g.Version, o = c.embedId, p = c.embedType, q = b.pluginName, r = b.activeXName;
            f.instance = e;
            var s = function () {
                var a;
                for (a = 0; a < d.length; a++)if (!(d.param[a]in f.instance))break;
                return a < d.length - 1 ? !1 : !0
            };
            f.getInstallState = function () {
                if (i) {
                    var b;
                    if (!f.instance)try {
                        f.instance = new ActiveXObject(r);
                        b = !0
                    } catch (c) {
                        f.instance = null
                    }
                    if (f.instance) {
                        if (s())return"ieinstalled";
                        if (!b)try {
                            f.instance = new ActiveXObject(r)
                        } catch (c) {
                            f.instance = null
                        }
                        return f.instance ? s() ? "ieinstalled" : "ieneedUpdate" : "ieneedInstall"
                    }
                    return"ieneedInstall"
                }
                var d = h.plugins, e;
                if (d && d.length)for (var g = 0, j = d.length; g < j; g++) {
                    var k = d[g];
                    if (k && k.name && k.name === q) {
                        e = !0;
                        break
                    }
                }
                if (e) {
                    if (!f.instance) {
                        var l = a.C("embed");
                        l.id = o;
                        l.type = p;
                        l.setAttribute("hidden", !0);
                        document.body.appendChild(l);
                        f.instance = l
                    }
                    return"installed"
                }
                f.instance = null;
                return"needInstall"
            };
            return f
        }
    });
    STK.register("lib.browser.plugin.screenCapture", function (a) {
        var b = a.core.util.browser, c = a.lib.kit.extra.language, d = function (a, b) {
            window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack(a, b)
        }, e = a.IE, f = b.MOZ, g = b.OPERA, h = b.SAFARI, i = b.CHROME, j = b.Version, k = "weibo_screen_grab_download", l = {pluginName: "npScreenGrab Plugin", activeXName: "ScreenGrab.ScreenGrabCom.1"}, m = {embedId: "weibo_screen_grab_embed", embedType: "application/x-screengrab-sina"}, n = {param1: "OnGrapContent", param2: "CloseScreenGrabCtrlWnd", param3: "onmsgfireevent"}, o, p = {spec: null, setCurrentSpec: function (a) {
            p.spec = a
        }, setup: function () {
            if (typeof o.OnGrapContent != "function") {
                o.OnGrapContent = function (a, b, c, d) {
                    var e = p.spec;
                    q.focusWindow();
                    if (a === 2) {
                        if (e.captureType === "base64")e.captureSuccess(c); else if (e.captureType === "pid") {
                            e.beforeUpload();
                            e.upload(c)
                        }
                    } else if (a === 3) {
                        q.focusWindow();
                        e.captureCancel()
                    }
                };
                o.onmsgfireevent = function (a, b) {
                    if (b === 2) {
                        q.focusWindow();
                        spec.captureCancel()
                    }
                };
                a.addEvent(window, "unload", function () {
                    a.removeEvent(window, "unload", arguments.callee);
                    if (o)try {
                        o.CloseScreenGrabCtrlWnd();
                        o.onmsgfireevent = null;
                        o.OnGrapContent = null;
                        o = null
                    } catch (b) {
                    }
                })
            }
        }}, q = {};
        q.isSupport = function () {
            return b.OS === "windows" ? e ? !0 : f ? j >= 3.6 ? !0 : !1 : g ? !1 : h ? !1 : i ? j >= 4 ? !0 : !1 : !1 : !1
        };
        q.focusWindow = function () {
            window.focus()
        };
        q.hide = function () {
            o && o.CloseScreenGrabCtrlWnd()
        };
        q.screenCapture = function (b) {
            var g, h = {uploadSucc: function (a, c) {
                q.focusWindow();
                b.captureSuccess(c)
            }, uploadErr: function (a, c) {
                b.captureError(c)
            }}, j = function (b) {
                g && g.destroy();
                g = a.lib.kit.extra.upload({type: "base64", base64Str: b});
                a.custEvent.add(g, "uploadSucc", h.uploadSucc);
                a.custEvent.add(g, "uploadError", h.uploadErr)
            }, r = function () {
                b.upload = function (a) {
                    j(a)
                };
                p.setup();
                p.setCurrentSpec(b);
                if (a.isArray(b.showPos)) {
                    var c = b.showPos;
                    o.ShowControlWnd(c[0], c[1], c[2], c[3])
                } else if (typeof b.showPos == "function") {
                    var c = b.showPos();
                    a.isArray(c) && o.ShowControlWnd(c[0], c[1], c[2], c[3])
                } else if (b.showPos === "center") {
                    var d = a.scrollPos(), e = 200, f = 200, g = a.winSize(), h = Math.floor(d.top + (g.height - e) / 2), i = Math.floor(d.left + (g.width - f) / 2);
                    o.ShowControlWnd(window.screenLeft + i, window.screenTop + h, f, e)
                } else b.showPos === "default" && o.ShowControlWnd(-1, -1, -1, -1)
            }, s = function (b, e) {
                var f = "http://desktop.weibo.com/download.php?source=jietu", g = '<#et screentip data><div class="layer_screenshot_tips"><p class="tip" style="width:338px"><span class="icon_warnM"></span>${data.titletip}。</p><div><a href="http://desktop.weibo.com" target="_blank"><img src="${data.imgsrc}" width="338" height="147"/></a></div></div></#et>', h = {imgsrc: (window.$CONFIG && window.$CONFIG.imgPath || "http://img.t.sinajs.cn/t6/") + "style/images/layer/pic_screenshot.png?version=" + (window.$CONFIG && window.$CONFIG.version || ""), titletip: b === "IE" ? "#L{使用此功能，需要先安装微博桌面}" : "#L{使用此功能，需要先安装微博桌面插件}" + (b === "FF" ? "，#L{并重新启动浏览器才能使用}" : ""), downloadTitle: "#L{立即下载}"}, i = a.ui.dialog();
                i.setTitle(c("#L{截屏插件安装提示}"));
                i.setContent(c(a.core.util.easyTemplate(g, h).toString()));
                i.show();
                i.setMiddle();
                var j = i.getDomList(!0), l = function () {
                    i.hide();
                    d("tblog_image_cut", "cancel_download")
                }, m = function (b) {
                    var c = a.E(k);
                    if (!c) {
                        c = a.C("iframe");
                        c.id = k;
                        c.style.display = "none";
                        a.core.util.hideContainer.appendChild(c)
                    }
                    c.src = f;
                    d("tblog_image_cut", "download");
                    i.hide()
                };
                a.custEvent.add(i, "hide", function () {
                    a.custEvent.remove(i, "hide", arguments.callee);
                    e()
                })
            }, t = function () {
                b.beforeSupportTip();
                a.ui.alert(c("#L{微博截图功能暂未支持你的浏览器，目前微博截图插件支持Windows系统下的以下浏览器：IE浏览器，支持IE6及更新版本。IE内核浏览器，如360安全浏览器，傲游等浏览器。Firefox浏览器，支持3.6及更新版本。Chrome浏览器，支持4.0及更新版本。Chronium内核浏览器，如360急速浏览器，搜狗等浏览器}。"), {title: c("#L{暂不支持当前浏览器}"), icon: "warnB", OK: function () {
                    setTimeout(function () {
                        b.supportTipOk()
                    }, 0)
                }});
                d("tblog_image_cut", "not_support_browser")
            }, u = function () {
                var c = e ? "IE" : f ? "FF" : i ? "CHROME" : "";
                b = a.parseParam({captureType: "base64", captureSuccess: a.funcEmpty, captureCancel: a.funcEmpty, captureError: a.funcEmpty, beforeUpload: a.funcEmpty, showPos: "default", beforeSupportTip: a.funcEmpty, supportTip: t, supportTipOk: a.funcEmpty, beforeIeInstallTip: a.funcEmpty, ieInstallTip: function () {
                    b.beforeIeInstallTip();
                    s(c, b.ieInstallTipOk)
                }, ieInstallTipOk: a.funcEmpty, beforeInstallTip: a.funcEmpty, installTip: function () {
                    b.beforeInstallTip();
                    s(c, b.installTipOk)
                }, installTipOk: a.funcEmpty}, b || {});
                var d = q.isSupport();
                if (!d)b.supportTip(); else {
                    var g = a.lib.browser.plugin.plugInstallState(l, m, n, o), h = g.getInstallState();
                    o = g.instance;
                    h === "installed" || h === "ieinstalled" ? r() : h === "ieneedUpdate" || h === "ieneedInstall" ? b.ieInstallTip() : h === "needInstall" && b.installTip()
                }
            };
            return{doit: u, hide: q.hide, focusWindow: q.focusWindow, abort: function () {
                try {
                    g && g.abort()
                } catch (a) {
                }
            }}
        };
        return q
    });
    STK.register("lib.image.uploadBubble", function (a) {
        var b = window.$CONFIG, c = [];
        (function () {
            b && b.bigpipe === "true" && a.historyM && a.historyM.onpopstate(function (b, d) {
                if (d) {
                    a.foreach(c, function (a) {
                        a()
                    });
                    c = []
                }
            })
        })();
        var d = a.conf.trans.imageUploadBubble;
        return function (e, f) {
            var g, h, i = a.lib.browser.plugin.screenCapture, j = a.lib.kit.extra.language, k = '<div node-type="outer"><div class="layer_send_pic" node-type="wrap"><div node-type="inner"><div node-type="tabs"><div class="profile_tab S_line5"><ul class="pftb_ul layer_tab S_line1"><li class="pftb_itm S_line1"><a class="pftb_lk current S_line5 S_txt1 S_bg5" href="javascript:void(0);" node-type="tab1" action-type="tab">#L{本地上传}</a></li><li class="pftb_itm pftb_itm_lst S_line1"><a  class="pftb_lk S_line5 S_txt1 S_bg1" href="javascript:void(0);" node-type="tab2" action-type="tab">#L{推荐配图}</a></li></ul></div></div><div node-type="content"></div></div><div node-type="uploaded" style="display:none"><div class="laPic_tit"><span node-type="pName"></span><span class="right"></span></div><div node-type="picWrap" class="laPic_Pic"></div><div class="lapic_edit"><a class="beautify" href="javascript:void(0);" node-type="beautify" action-type="beautify" suda-data="key=meitu&value=v4||publish||editor"><span class="W_ico12 icon_edit"></span>#L{编辑}</a><a class="delete" href="javascript:void(0);" action-type="delete"><span class="W_ico12 ico_del"></span>#L{删除}</a></div></div><div node-type="flashPanel"></div>', l = '<#et uppic data><div node-type="uppic">    <div class="laPic_btnBox clearfix">        <div class="laPic_btnmore">            <a href="javascript:void(0);" class="W_btn_e" node-type="inputCover">                <span><em class="ico_one"></em>#L{单张图片}</span>                <form node-type="form" action-type="form" id="pic_upload" name="pic_upload" target="upload_target" enctype="multipart/form-data" method="POST" action="">                    <input class="input_f" type="file" hidefoucs="true" style="" node-type="fileBtn" name="pic1"/>                </form></a>        </div>        <div class="laPic_btnmore">            <a href="javascript:void(0);" class="W_btn_e" action-type="more" suda-data="key=meitu&value=v4||publish||more">                <span><em class="ico_ones"></em>#L{多张图片}</span>            </a>        </div>        <#if (data.supportCapture)><div class="laPic_btnmore">            <a href="javascript:void(0);" class="W_btn_e" action-type="screen_window" suda-data="key=tblog_image_cut&value=open_image_cut">                <span><em class="ico_screenshot"></em>#L{截屏上传}</span>            </a>        </div></#if>       <div class="laPic_btnmore">           <a href="javascript:void(0);" class="W_btn_e" action-type="face_sticker">               <span><em class="ico_bigface"></em>#L{大 头 贴}</span>           </a>       </div>       <div class="laPic_btnmore">           <a href="javascript:void(0);" class="W_btn_e" action-type="upload_album">               <span><em class="ico_toalbum"></em>#L{上传到相册}</span>           </a>       </div>    </div></div><div node-type="loading"  style="width:230px;display:none"><div class="laPic_con"><div><i class="W_loading"></i> <span>#L{图片正在上传，请等待}...</span></div></div><div class="laPic_btn"><a href="javascript:void(0);" class="W_btn_b" action-type="cancel"><span>#L{取消上传}</span></a></div></div></#et>', m = '<p class="tab_kind S_link2"><span class="right"><a class="pre_d" action-type="prev" node-type="prev" href="javascript:void(0);"></a><a class="next" action-type="next" node-type="next" href="javascript:void(0);"></a></span><em node-type="categorys"></em></p><div node-type="loading"></div><div class="detail"><ul node-type="list" class="faces_magic_list clearfix"></ul><div node-type="page" class="W_pages_minibtn"></div></div>', n = '<div><i class="W_loading"></i> <span>正在加载，请稍候...</span></div>', o = '<a href="javascript:void(0);" onclick="return false;" action-type="category" action-data="category=#{item}">#{item}</a>', p = '<a href="javascript:void(0);"  onclick="return false;" action-type="category" action-data="category=#{item}" class="current S_txt1">#{item}</a>', q = '<li><a action-type="insertSmiley" action-data="url=#{thumb}&pid=#{picid}&value=#{value}" class="img" href="javascript:void(0);"><img src="#{thumb}" original="#{original}" title="#{value}" alt="#{phrase}" /></a><span title="#{value}"  action-type="insertSmiley" action-data="url=#{thumb}&pid=#{picid}&value=#{value}">#{phrase}</span></li>', r = '<a action-type="page" class="page S_bg1" action-data="num=#{number}" href="javascript:void(0);" >#{label}</a>', s = '<a action-type="page" action-data="num=#{number}" href="javascript:void(0);"  class="page S_txt1"  onclick="return false;">#{label}</a>', t = "", u = j("#L{默认}"), v = "#L{分享图片}", w = "##L{微博大头贴}#", x = 5, y = "weibo.com/", z, A, B, C, D, E, F, G, H, I, J, K, L = {}, M = {page: 0, cache: null, cPoniter: 0, categorys: [], currentCategory: u, itemNumber: 10}, N, O, P = a.core.dom.position, Q = a.core.evt.addEvent, R = a.core.evt.removeEvent, S = function () {
                B = T;
                a.custEvent.define(L, ["uploaded", "hide", "insert", "deletePIC", "picLoad"]);
                a.custEvent.add(g, "hide", function (b) {
                    return function () {
                        T.abortUpload();
                        T.hideCapture();
                        a.custEvent.remove(b, "hide", arguments.callee);
                        a.custEvent.fire(L, "hide", {});
                        H = 0
                    }
                }(g));
                h = a.ui.mod.tab({templete: z, eventType: "click"});
                a.custEvent.add(h, "tabOut", function (a, b) {
                    b == "tab1" ? U.init() : b == "tab2" && T.init()
                });
                K = a.core.evt.delegatedEvent(z);
                T.bind()
            }, T = {abortUpload: function () {
                E && E.abort();
                F && F.abort()
            }, init: function () {
                B = T;
                T.initDom();
                T.bind()
            }, initDom: function () {
                var b;
                N.wrap.className = "layer_send_pic";
                var c = {supportCapture: !0};
                N.content.innerHTML = j(a.core.util.easyTemplate(l, c).toString());
                N.close = a.builder(g.getBox()).list.close[0];
                b = a.lib.kit.dom.parseDOM(a.core.dom.builder(z).list);
                N = a.lib.kit.extra.merge(N, b);
                T.exchangeInput()
            }, bind: function () {
                Q(N.fileBtn, "change", V.upload);
                Q(N.fileBtn, "click", T.hideCapture);
                K.add("delete", "click", T.deletePic);
                K.add("cancel", "click", T.cancelUpload);
                K.add("more", "click", T.morePic);
                K.add("beautify", "click", T.beautify);
                K.add("screen_window", "click", T.captureWindow);
                K.add("face_sticker", "click", T.faceSticker);
                K.add("upload_album", "click", T.uploadAblum)
            }, destroy: function () {
                N.fileBtn && R(N.fileBtn, "click", T.hideCapture);
                N.fileBtn && R(N.fileBtn, "change", V.upload)
            }, handleError: function (b) {
                T.stopUpload();
                g.stopBoxClose();
                T.resetInput();
                a.ui.alert(j(b.msg), {OK: function () {
                    b.code == 1 && window.location.reload();
                    setTimeout(function () {
                        g.startBoxClose()
                    }, 0)
                }})
            }, handleSucc: function (a) {
                T.rendSucc(a);
                T.stopUpload()
            }, rendLoad: function () {
                g.stopBoxClose();
                N.uppic.style.display = "none";
                N.loading.style.display = ""
            }, rendSucc: function (b) {
                var c = a.lib.kit.extra.imageURL(b.pid), d = [], e, f;
                J = J || b.pid;
                d = J.split(/\/|\\/);
                e = d[d.length - 1];
                d = e.split(".");
                if (d.length > 1 && a.bLength(d[0]) > 20) {
                    d[0] = a.leftB(d[0], 20);
                    f = [d[0], "...", d[1]].join("")
                } else f = e;
                D = b.pid;
                V.loadPic({url: c, value: f, pid: b.pid});
                N.beautify && (N.beautify.style.display = "")
            }, deletePic: function () {
                a.preventDefault();
                N.close.style.display = "";
                N.inner.style.display = "";
                N.wrap.style.width = "";
                N.uploaded.style.display = "none";
                N.picWrap.innerHTML = "";
                B.destroy();
                B.init();
                g.startBoxClose();
                a.custEvent.fire(L, "deletePIC", {text: j(I)});
                H = 0
            }, stopUpload: function () {
                N.loading.style.display = "none";
                N.uppic.style.display = ""
            }, cancelUpload: function () {
                T.abortUpload();
                T.stopUpload();
                T.resetInput();
                g.startBoxClose()
            }, exchangeInput: function () {
                var b = N.fileBtn, c = b.parentNode, d = b.className, e = b.name, f = a.C("input");
                f.className = d;
                f.name = e;
                f.type = "file";
                f.hideFocus = "true";
                N.fileBtn = f;
                c.removeChild(b);
                c.appendChild(f)
            }, resetInput: function () {
                R(N.fileBtn, "click", T.hideCapture);
                R(N.fileBtn, "change", V.upload);
                T.exchangeInput();
                Q(N.fileBtn, "change", V.upload);
                Q(N.fileBtn, "click", T.hideCapture)
            }, beautifySucess: function (a) {
                J = a;
                T.handleSucc({pid: a})
            }, faceStickerSucess: function (a) {
                H = 1;
                J = a;
                T.handleSucc({pid: a})
            }, morePic: function () {
                T.uploadWaterMarkFlash({id: "photo_merge", swf: "SinaCollage.swf", width: 528, height: 470, sucess: T.beautifySucess})
            }, faceSticker: function () {
                T.uploadWaterMarkFlash({id: "photo_facesticker", swf: "FacePhoto.swf", width: 568, height: 478, baseDir: "facesticker", sucess: T.faceStickerSucess})
            }, uploadWaterMarkFlash: function (c) {
                a.preventDefault();
                T.hideCapture();
                g.stopBoxClose();
                if (a.lib.kit.extra.getFlashVersion() < 10)a.lib.kit.extra.installFlash({onHide: function () {
                    g.startBoxClose()
                }}); else {
                    var d = function (d) {
                        var e = d.nickname != "0" || d.logo != "0" || d.domain != "0", f = b && b.nick || "", h = "http://picupload.service.weibo.com/interface/pic_upload.php?app=miniblog&marks=" + (e ? "1" : "0") + (d.logo == "1" ? "&logo=1" : "") + (d.nickname == "1" ? "&nick=" + (f ? encodeURIComponent("@" + f) : "") : "") + (d.domain == "1" ? "&url=" + y + (b && b.watermark || b.domain) : "") + (d.position ? "&markpos=" + d.position : "") + "&s=xml&cb=http://weibo.com/upimgback.html&rq=http%3A%2F%2Fphoto.i.weibo.com%2Fpic%2Fadd.php%3Fapp%3D1", i = {id: c.id, pos: g.getPosition(), service: h, sucess: c.sucess, h: c.height, w: c.width, swf: c.swf, baseDir: c.baseDir || ""};
                        a.lib.image.imgUpload(i, {init: function (a, b) {
                            a.setPars()
                        }, close: function (a, b) {
                            setTimeout(function () {
                                g.startBoxClose()
                            }, 100)
                        }}).show()
                    };
                    a.lib.image.watermark(function (a) {
                        d(a)
                    })
                }
            }, beautify: function () {
                a.preventDefault();
                if (a.lib.kit.extra.getFlashVersion() < 10)a.lib.kit.extra.installFlash(); else {
                    var b = {id: "photo_editor", pos: g.getPosition(), service: "http://picupload.service.weibo.com/interface/pic_upload.php?app=miniblog&s=xml&cb=http://weibo.com/upimgback.html&rq=http%3A%2F%2Fphoto.i.weibo.com%2Fpic%2Fadd.php%3Fapp%3D1", sucess: T.beautifySucess, h: 385, w: 528, swf: "PhotoEditor.swf"};
                    a.lib.image.imgUpload(b, {init: function (b, c) {
                        b.setPars(a.lib.kit.extra.imageURL(D, {size: "large"}))
                    }, close: function (a, b) {
                    }}).show()
                }
            }, hideCapture: function () {
                F && F.hide()
            }, captureWindow: function () {
                a.preventDefault();
                if (!F) {
                    var b = function () {
                        g.stopBoxClose()
                    }, c = function () {
                        g.startBoxClose()
                    };
                    F = i.screenCapture({captureType: "pid", beforeUpload: T.beforeCaptureUpload, captureSuccess: T.captureSuccess, captureError: T.handleError, beforeSupportTip: b, supportTipOk: c, beforeIeInstallTip: b, ieInstallTipOk: c, beforeInstallTip: b, installTipOk: c})
                }
                F.doit()
            }, beforeCaptureUpload: function () {
                T.rendLoad()
            }, captureSuccess: function (a) {
                J = a.imgName;
                G = 1;
                T.handleSucc(a)
            }, uploadAblum: function () {
                window.open("http://photo.weibo.com/upload/weibo", "", "width=650, height=470, top=300, left=400")
            }}, U = {init: function () {
                B = U;
                T.abortUpload();
                T.hideCapture();
                var b;
                N.wrap.className = "layer_faces";
                T.destroy();
                N.content.innerHTML = j(m);
                b = a.lib.kit.dom.parseDOM(a.core.dom.builder(z).list);
                N = a.lib.kit.extra.merge(N, b);
                N.loading.innerHTML = j(n);
                U.cartoonStart();
                U.bind()
            }, bind: function () {
                K.add("insertSmiley", "click", function (a) {
                    STK.core.evt.preventDefault();
                    N.beautify && (N.beautify.style.display = "none");
                    var b = a.data.url, c = a.data.pid, d = a.data.value;
                    V.loadPic({url: b, value: d, pid: c})
                });
                K.add("category", "click", function (a) {
                    M.page = 0;
                    M.currentCategory = a.data.category;
                    U.rend();
                    setTimeout(function () {
                        U.rendCategory(M);
                        U.rendPage(M)
                    }, 0)
                });
                K.add("prev", "click", function (b) {
                    a.preventDefault(b.evt);
                    var c = M.cPoniter;
                    if (c <= 0)return!1;
                    M.cPoniter -= x;
                    U.rendCategory(M)
                });
                K.add("next", "click", function (b) {
                    a.preventDefault(b.evt);
                    var c = M.cPoniter, d = M.categorys;
                    if (c >= d.length - x)return!1;
                    M.cPoniter += x;
                    U.rendCategory(M)
                });
                K.add("page", "click", function (a) {
                    M.page = parseInt(a.data.num, 10);
                    U.rend();
                    setTimeout(function () {
                        U.rendPage(M)
                    }, 0);
                    return STK.preventDefault(a.evt)
                })
            }, cartoonStart: function () {
                d.request("cartoon", {onSuccess: function (a, b) {
                    M.cache = a.data.more || {};
                    M.categorys = [u];
                    for (var c in M.cache)M.categorys.push(c);
                    M.cache[u] = a.data.usual.norm;
                    U.cartoonStart = function () {
                        M.page = 0;
                        M.cPoniter = 0;
                        M.currentCategory = u;
                        U.rend();
                        U.rendCategory(M);
                        U.rendPage(M)
                    };
                    U.cartoonStart()
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }}, {})
            }, rend: function (b, c) {
                var d = M.currentCategory, e = M.cache[d], f = M.page, g = M.itemNumber;
                e = e.slice(f * g, f * g + g);
                e = a.foreach(e, function (b, c) {
                    a.bLength(b.phrase) > 8 && (b.phrase = [a.leftB(b.phrase, 6), "..."].join(""));
                    return a.templet(j(q), b)
                });
                N.loading.innerHTML = "";
                N.list.innerHTML = e.join("")
            }, rendCategory: function (b) {
                var c = b.cPoniter, d = b.categorys, e = b.currentCategory, f = d.slice(c, c + x);
                f = a.foreach(f, function (b, c) {
                    return e === b ? a.templet(j(p), {item: b}) : a.templet(j(o), {item: b})
                });
                N.categorys.innerHTML = f.join(t);
                c + 6 >= d.length ? N.next.className = "next_d" : N.next.className = "next";
                c <= 0 ? N.prev.className = "pre_d" : N.prev.className = "pre"
            }, rendPage: function (b) {
                var c = b.page, d = b.cache[b.currentCategory], e = d.length / b.itemNumber, f = [];
                for (var g = 0; g < e; g += 1)c == g ? f.push(a.templet(j(s), {number: g, label: g + 1})) : f.push(a.templet(j(r), {number: g, label: g + 1}));
                N.page.innerHTML = f.join("")
            }, destroy: function () {
            }}, V = {trans: function () {
                E && E.destroy();
                E = a.lib.kit.extra.upload({type: "common", form: N.form, imgName: J});
                a.custEvent.add(E, "uploadSucc", function (a, b) {
                    T.handleSucc(b)
                });
                a.custEvent.add(E, "uploadError", function (a, b) {
                    T.handleError(b)
                })
            }, upload: function () {
                J = N.fileBtn.value;
                if (a.core.str.trim(J) !== "") {
                    T.rendLoad();
                    V.trans()
                }
            }, loadPic: function (b) {
                N.picWrap.innerHTML = "";
                var c = b.url, d = N.close, e = a.C("img");
                b.value && (N.pName.innerHTML = b.value);
                G && (e.onload = function () {
                    window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("tblog_image_cut", "succeed_image_cut")
                });
                G = 0;
                e.src = c;
                g.stopBoxClose();
                I = H ? w : v;
                a.core.evt.custEvent.fire(L, "uploaded", {text: j(I), pid: b.pid});
                N.wrap.style.display = "";
                N.wrap.className = "layer_send_pic";
                N.wrap.style.width = "240px";
                N.inner.style.display = "none";
                N.uploaded.style.display = "";
                d.style.display = "none";
                N.picWrap.appendChild(e)
            }}, W = {};
            L = {};
            L.getBub = function () {
                return g
            };
            if (!a.isNode(e))throw"common.bubble.image need el as first parameter!";
            O = window.location.href;
            N = a.lib.kit.dom.parseDOM(a.core.dom.builder(j(k)).list);
            z = N.outer;
            g = a.ui.bubble();
            T.initDom();
            if (f && f.pid) {
                var X = a.lib.kit.extra.imageURL(f.pid);
                V.loadPic({url: X, pid: f.pid})
            }
            S();
            g.setContent(z);
            f.fail = function () {
                g.setLayout(e, {offsetX: -24, offsetY: 5})
            };
            g.setAlignPos(e, f.refer, f);
            L.bubble = g;
            g.show();
            c.push(function () {
                g && g.hide()
            });
            return L
        }
    });
    STK.register("lib.publisher.widget.image", function (a) {
        return function (b) {
            var c = {}, d, e, f, g, h = !1, i = function (a, c) {
                var e = b.API.getImageLogType();
                b.API.addShortUrlLog(e);
                b.API.insertText(c.value);
                d.getBub().hide()
            }, j = function (a, c) {
                var d = b.API.getImageLogType();
                b.API.addShortUrlLog(d);
                h = !0;
                var e = b.API.getWords();
                e.length == 0 && b.API.insertText(c.text);
                b.API.addExtraInfo(c.pid);
                f = !0
            }, k = function (a, c) {
                h = !1;
                b.API.delWords(c.text);
                b.API.addExtraInfo("");
                clearInterval(g);
                f = !1
            }, l = function (e) {
                if (!f) {
                    a.core.evt.preventDefault();
                    var l, m = a.fixEvent(a.getEvent()).target;
                    l = m;
                    var n = b.nodeList.textEl;
                    if (typeof e == "string") {
                        d = a.lib.image.uploadBubble(l, {pid: e, refer: n});
                        g = setInterval(function () {
                            var a = {fail: function () {
                                d.bubble.setLayout(l, {offsetX: -29, offsetY: 5})
                            }};
                            d.bubble.setAlignPos(l, n, a)
                        }, 200)
                    } else d = a.lib.image.uploadBubble(l, {refer: n});
                    a.custEvent.add(d, "uploaded", j);
                    a.custEvent.add(d, "insert", i);
                    a.custEvent.add(d, "deletePIC", k);
                    a.custEvent.add(b, "close", c.hide);
                    a.custEvent.add(d, "hide", function () {
                        a.custEvent.remove(d, "hide", arguments.callee);
                        a.custEvent.remove(d, "uploaded", j);
                        a.custEvent.remove(d, "insert", i);
                        a.custEvent.remove(d, "deletePIC", k);
                        a.custEvent.remove(d, "changeType");
                        a.custEvent.remove(b, "close", c.hide);
                        b.API.addExtraInfo("");
                        h = !1;
                        f = !1
                    })
                }
            };
            c.init = function (c, d, f) {
                b = c;
                e = d;
                a.addEvent(c.nodeList[e], "click", l);
                f && f.pid && l(f.pid)
            };
            c.show = l;
            c.hide = function (b, c) {
                if (h && d) {
                    var e = d.getBub();
                    if (e) {
                        var f = a.builder(e.getBox()).list.close[0];
                        a.isNode(f) && a.setStyle(f, "display", "")
                    }
                }
                a.core.util.listener.fire("photo_merge_channel", "closeEditor", []);
                a.core.util.listener.fire("photo_editor_channel", "closeEditor", []);
                c && c.type && c.type == "publish" ? d && d.getBub().hide() : h || d && d.getBub().hide()
            };
            c.resetBubble = function (a) {
                if (d) {
                    var c = {fail: function () {
                        d.bubble.setLayout(a, {offsetX: -29, offsetY: 5})
                    }};
                    d.bubble.setAlignPos(a, b.nodeList.textEl, c)
                }
            };
            c.destroy = function () {
                b = null
            };
            return c
        }
    });
    STK.register("lib.image.mUpload", function (a) {
        var b = $CONFIG.jsPath + "home/static/swf/", c = "http://picupload.service.weibo.com/interface/pic_upload.php?app=miniblog&data=1", d, e = "";
        $CONFIG && $CONFIG.uid && (e = $CONFIG.uid || "");
        var f = '<form node-type="form" action-type="form" id="pic_upload" name="pic_upload" target="upload_target" enctype="multipart/form-data" method="POST" action=""><input type="file" hidefoucs="true" node-type="fileBtn" name="pic1"/></form>', g = {};
        return function (h, i) {
            var j = {}, k = {}, l, m, n, o = a.lib.kit.extra.getFlashVersion() < 10 ? !0 : !1, p = function () {
                var d = a.core.dom.getSize(h);
                k = a.core.obj.parseParam({service: c, swf: b + "MultiFilesUpload.swf?version=" + $CONFIG.version, exp_swf: b + "img/expressInstall.swf?version=" + $CONFIG.version, h: d.height, w: d.width, version: "10.0.0", type: "*.png;*.jpg;*.gif;*.jpeg;", size: 20971520, number: 9, globalFun: "fcb_" + a.getUniqueKey(), callback: t, init: function () {
                }, uploaded: function () {
                }, uploading: function () {
                }, error: function () {
                }, extra: function () {
                }}, i);
                k.id = "swf_upbtn_" + a.getUniqueKey();
                k.channel = k.id + "_channel"
            }, q = {uploading: function (a) {
                k.uploading({data: [
                    {fid: a.fid, name: a.name}
                ]})
            }, uploaded: function (a) {
                k.uploaded({data: {pid: a.pid}, fid: a.fid})
            }, error: function (a) {
                var b = "defaultErr", c = "";
                if (a.code == 9) {
                    b = "singleError";
                    c = "A20001"
                }
                k.error({type: b, fid: a.fid, data: {sourceData: {code: c}}})
            }}, r = function () {
                var b = a.getUniqueKey(), c = m.value;
                g[b] = a.lib.kit.extra.upload({type: "common", form: n, imgName: c, app: 1001});
                q.uploading({fid: b, name: c});
                m.value = "";
                a.custEvent.add(g[b], "uploadSucc", function (a, c) {
                    var d = c.pid;
                    q.uploaded({fid: b, pid: c.pid})
                });
                a.custEvent.add(g[b], "uploadError", function (a, c) {
                    q.error({code: c.code, fid: b})
                })
            }, s = function () {
                var b = a.C("div"), c = a.C("div");
                c.setAttribute("id", k.id);
                var d = "position:absolute;left:0;top:0;display:block;overflow:hidden;background-color:#000;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;";
                d += "width:" + k.w + "px;" + "height:" + k.h + "px;";
                b.style.cssText = d;
                h.appendChild(b);
                h.style.position = "relative";
                var g = {swfid: k.id, uploadAPIs: encodeURIComponent(k.service), maxFileSize: k.size, maxFileNum: k.number, jsHandler: "STK." + k.globalFun, channel: k.channel, areaInfo: "0-0-" + k.w + "-" + k.h, fExt: k.type, fExtDec: "选择图片:*.jpg, *.jpeg, *.gif, *.png", uid: e}, i = {menu: "false", scale: "noScale", allowFullscreen: "false", allowScriptAccess: "always", bgcolor: "#FFFFFF", wmode: "opaque"};
                if (o) {
                    var j = a.builder(f).list;
                    m = j.fileBtn[0];
                    n = j.form[0];
                    m.style.cssText = "width:" + k.w + "px;" + "height:" + k.h + "px;";
                    b.appendChild(n)
                } else {
                    b.appendChild(c);
                    a.lib.kit.extra.swfobject.embedSWF(k.swf, k.id, k.w, k.h, k.version, k.exp_swf, g, i, k.id, u)
                }
            }, t = function (a, b, c) {
                switch (c.type) {
                    case"flashInit":
                        k.init(c);
                        break;
                    case"uploading":
                        k.uploading(c);
                        break;
                    case"singleSuccess":
                        k.uploaded(c);
                        break;
                    case"fileNumErr":
                        return k.error(c);
                    case"singleError":
                        k.error(c);
                        break;
                    case"fileSizeErr":
                        k.error(c);
                        break;
                    default:
                        k.extra(c)
                }
            }, u = function (a) {
                l = a.ref
            }, v = function () {
                o ? a.core.evt.addEvent(m, "change", r) : a.namespace()[k.globalFun] = t
            }, w = function () {
                a.lib.image.watermark(function (b) {
                    var e = b, f = "weibo.com/", g = window.$CONFIG, h = e.nickname != "0" || e.logo != "0" || e.domain != "0", i = {marks: h ? 1 : 0};
                    d = a.lib.kit.extra.merge({url: e.domain == "1" ? f + (g && g.watermark || g.domain) : 0, markpos: e.position || "", logo: e.logo || "", nick: e.nickname == "1" ? encodeURIComponent("@" + (g && g.nick)) : 0}, i);
                    c += "&" + a.jsonToQuery(d);
                    p();
                    s();
                    v()
                })
            };
            w();
            var x = function () {
                return k.id
            }, y = function () {
                return l
            }, z = function (a) {
                if (o) {
                    g[a] && g[a].abort();
                    m.value = ""
                } else try {
                    mUpload && mUpload.getswf && mUpload.getswf() && mUpload.getswf().removeFileById && mUpload.getswf().removeFileById(a)
                } catch (b) {
                }
            }, A = function () {
                delete a.namespace()[k.globalFun]
            };
            j.getId = x;
            j.destroy = A;
            j.getswf = y;
            j.removeFile = z;
            return j
        }
    });
    STK.register("lib.kit.touch.cantouch", function (a) {
        return STK.core.util.browser.IPAD
    });
    STK.register("lib.image.multiimage.index", function (a) {
        var b = '<div class="W_layer W_layer_pop"><div class="content"><div class="W_layer_title"><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div></div><div class="layer_send_pic" node-type="inner"><div class="layer_send_btn clearfix"><ul class="clearfix"><li class="S_line2" suda-data="key=tblog_new_image_upload&value=fast_upload"><a href="javascript:void(0);" class="W_btn_l" node-type="mUpload"><span class="btn_45px"><em class="W_ficon ficon_add_pic S_ficon">È</em>#L{单图/多图}</span></a></li><li class="S_line2"><a href="javascript:void(0);" class="W_btn_l" node-type="inputCover" action-type="more" suda-data="key=tblog_new_image_upload&value=pin_upload"><span class="btn_45px"><em class="W_ficon ficon_puzzle S_ficon">Æ</em>#L{拼图}</span></a></li><li class="S_line2"><a href="javascript:void(0);" class="W_btn_l" action-type="capture" suda-data="key=tblog_new_image_upload&value=screenshot_upload"><span class="btn_45px"><em class="W_ficon ficon_screenshot S_ficon">Ô</em>#L{截屏}</span></a></li><li class="S_line2"><a href="javascript:void(0);" class="W_btn_l" action-type="uploadAblum" suda-data="key=tblog_new_image_upload&value=upload_albums"><span class="btn_45px"><em class="W_ficon ficon_upload_album S_ficon">Ë</em>#L{传至相册}</span></a></li></ul></div></div><div class="W_layer_arrow"><span class="W_arrow_bor" node-type="arrow"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div>', c, d, e;
        return function (f, g) {
            var h = {}, i, j = "weibo.com/", k = $CONFIG || {}, l = a.lib.browser.plugin.screenCapture, m, n, o = a.lib.kit.extra.language, p = function (b) {
                if (a.lib.kit.extra.getFlashVersion() < 10)a.lib.kit.extra.installFlash({onHide: function () {
                    c.startBoxClose()
                }}); else {
                    var d = function (d) {
                        var e = d.nickname != "0" || d.logo != "0" || d.domain != "0", f = $CONFIG && $CONFIG.nick || "", g = "http://picupload.service.weibo.com/interface/pic_upload.php?app=miniblog&marks=" + (e ? "1" : "0") + (d.logo == "1" ? "&logo=1" : "") + (d.nickname == "1" ? "&nick=" + (f ? encodeURIComponent("@" + f) : "") : "") + (d.domain == "1" ? "&url=" + j + (k && k.watermark || k.domain) : "") + (d.position ? "&markpos=" + d.position : "") + "&s=xml&cb=http://weibo.com/upimgback.html&rq=http%3A%2F%2Fphoto.i.weibo.com%2Fpic%2Fadd.php%3Fapp%3D1", h = {id: b.id, pos: c.getPosition(), service: g, sucess: b.sucess, h: b.height, w: b.width, swf: b.swf, baseDir: b.baseDir || ""};
                        n = a.lib.image.imgUpload(h, {init: function (a, b) {
                            a.setPars()
                        }, close: function (a, b) {
                            setTimeout(function () {
                                c.startBoxClose()
                            }, 100)
                        }});
                        n.show()
                    };
                    a.lib.image.watermark(function (a) {
                        d(a)
                    })
                }
            }, q = function (b) {
                c.startBoxClose();
                var b = b.pid || b, d = a.getUniqueKey();
                e.uploading({data: [
                    {fid: d}
                ]});
                e.uploaded({data: {pid: b}, fid: d})
            }, r = {hideCapture: function () {
                m && m.hide()
            }, handleError: function (b) {
                c.stopBoxClose();
                a.ui.alert(o(b.msg), {OK: function () {
                    b.code == 1 && window.location.reload();
                    setTimeout(function () {
                        c.startBoxClose()
                    }, 0)
                }})
            }, captureWindow: function () {
                a.preventDefault();
                if (!m) {
                    var b = function () {
                        c.stopBoxClose()
                    }, d = function () {
                        c.startBoxClose()
                    };
                    m = l.screenCapture({captureType: "pid", beforeUpload: r.beforeCaptureUpload, captureSuccess: q, captureError: r.handleError, beforeSupportTip: b, supportTipOk: d, beforeIeInstallTip: b, ieInstallTipOk: d, beforeInstallTip: b, installTipOk: d})
                }
                m.doit()
            }, beforeCaptureUpload: function () {
                c.stopBoxClose()
            }, captureSuccess: function (a) {
                imgName = a.imgName;
                captureFlag = 1;
                r.handleSucc(a)
            }}, s = {splice: function () {
                p({id: "photo_merge", swf: "SinaCollage.swf", width: 528, height: 470, sucess: function (a) {
                    q(a)
                }});
                c.hide()
            }, face_sticker: function () {
                p({id: "photo_facesticker", swf: "FacePhoto.swf", width: 568, height: 478, baseDir: "facesticker", sucess: function () {
                }});
                c.hide()
            }, uploadAblum: function () {
                window.open("http://photo.weibo.com/upload/weibo", "", "width=650, height=470, top=300, left=400")
            }}, t = function () {
                function h() {
                    c.stopBoxClose();
                    c.getBox().style.marginLeft = "-2000px"
                }

                c && c.destroy();
                c = a.ui.bubble({template: o(b), clickBlankToHide: !0, showWithAni: "fadeInDown:fast", hideWithAni: "fadeOutUp:fast", showWithSetWidth: !1});
                c.show().setArrow("top").setAlignPos(f, g.refer, g);
                var i = a.sizzle('a[node-type="mUpload"]', c.getBox());
                e = g.editor.getPreview();
                a.lib.image.mUpload(i[0], {w: 194, h: 45, uploading: e.uploading, uploaded: e.uploaded, error: e.error, extra: e.extra});
                a.custEvent.add(e, "loading", function () {
                    h()
                });
                a.custEvent.add(e, "hide", function () {
                    h()
                });
                d = a.delegatedEvent(c.getBox());
                d.add("more", "click", s.splice);
                d.add("capture", "click", r.captureWindow);
                d.add("uploadAblum", "click", s.uploadAblum)
            }, u = function () {
                t()
            };
            u();
            h.getPreview = function () {
                return e
            };
            h.hide = function () {
                c.hide()
            };
            h.getBub = function () {
                return c
            };
            h.destroy = function () {
                c.destroy();
                d.destroy();
                c = null
            };
            return h
        }
    });
    STK.register("lib.publisher.widget.multiimage", function (a) {
        return function (b) {
            var c = {}, d, e, f, g, h = !1, i, j = {restore: function () {
                var a = STK.core.util.storage.get("editor_multiimage" + $CONFIG.uid);
                return a != "null" && a != null && a.length != 0 ? a : !1
            }, store: function (a) {
                STK.core.util.storage.set("editor_multiimage" + $CONFIG.uid, a)
            }, delWord: function () {
                STK.core.util.storage.del("editor_multiimage" + $CONFIG.uid)
            }}, k = function (a, c) {
                var e = b.API.getImageLogType();
                b.API.addShortUrlLog(e);
                b.API.insertText(c.value);
                d.getBub().hide()
            }, l = function (a, c) {
                h = !0;
                b.API.addExtraInfo(c.pids);
                f = !0;
                if (c.pids == "")b.API.delWords(c.text); else {
                    var d = b.API.getWords();
                    d.length == 0 && b.API.insertText(c.text)
                }
            }, m = function (e) {
                if (!f) {
                    a.core.evt.preventDefault();
                    var g, k = a.fixEvent(a.getEvent()).target;
                    a.contains(b.nodeList.widget, k) ? g = k : g = b.nodeList.more;
                    var l = b.nodeList.textEl, m = j.restore();
                    d = a.lib.image.multiimage.index(g, {refer: l, editor: b});
                    i = b.getPreview();
                    a.custEvent.add(i, "loading", function () {
                        h = !0;
                        f = !0
                    });
                    a.custEvent.add(b, "close", c.hide);
                    a.custEvent.add(i, "hide", function () {
                        h = !1;
                        a.custEvent.remove(i, "hide", arguments.callee);
                        a.custEvent.remove(i, "changeType");
                        a.custEvent.remove(b, "close", c.hide);
                        f = !1
                    });
                    if (!i.getNumInfo() && m && m != "") {
                        f = !0;
                        var n = m.split(" "), o = [];
                        for (var p = 0; n[p]; p++)o.push({fid: a.getUniqueKey(), pid: n[p]});
                        if (!o[0])return;
                        i.uploading({data: o});
                        for (var p = 0; o[p]; p++)i.uploaded({fid: o[p].fid, data: o[p]})
                    }
                }
            };
            c.init = function (c, d, f) {
                b = c;
                e = d;
                a.addEvent(c.nodeList[e], "click", m);
                f && f.pid && m(f.pid)
            };
            c.show = m;
            c.hide = function (b, c) {
                i && i.hide();
                a.core.util.listener.fire("photo_merge_channel", "closeEditor", []);
                a.core.util.listener.fire("photo_editor_channel", "closeEditor", []);
                if (c && c.type && c.type == "publish") {
                    d && d.getBub().hide();
                    f = !1
                } else d && d.getBub().hide()
            };
            c.destroy = function () {
                d.destroy();
                b = null
            };
            return c
        }
    });
    STK.register("conf.trans.media", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("parseVideo", {url: "/aj/mblog/video"});
        c("suggestMusic", {url: "/aj/mblog/music/suggest", requestMode: "jsonp"});
        c("searchMusic", {url: "http://music.weibo.com/t/port/ajax_search_music_song.php", method: "get", requestMode: "jsonp"});
        c("addMusic", {url: "/aj/mblog/music/submit", requestMode: "jsonp"});
        c("parseMusic", {url: "/aj/mblog/music/parse", requestMode: "jsonp"});
        c("favSongSearch", {url: "http://music.weibo.com/yueku/port/sina_t_getcollect.php", method: "get", requestMode: "jsonp"});
        c("getOutlinkInfo", {url: "http://api.weibo.com/widget/info.json", varkey: "callback", method: "get", requestMode: "jsonp"});
        c("tabLog", {url: "http://music.weibo.com/t/port/ajax_log_action.php", method: "get", requestMode: "jsonp"});
        c("videoThirdUrl", {url: "/aj/video/gettoken", method: "get"});
        return b
    });
    STK.register("lib.connect.iframe", function (a) {
        var b = {}, c = {}, d = function (c, d, e, f) {
            try {
                var g = a.jsonToStr({cid: d, call: e, rs: f});
                b[c] && b[c].contentWindow && b[c].contentWindow.postMessage ? b[c].contentWindow.postMessage(g, "*") : window.navigator["STK_IFRAME_CONNECT_" + c] && window.navigator["STK_IFRAME_CONNECT_" + c](g)
            } catch (h) {
            }
        }, e = function (e) {
            try {
                var f = a.strToJson(e.data);
                if (f.iid in c) {
                    a.custEvent.define(c[f.iid], [f.cmd]);
                    a.custEvent.fire(c[f.iid], f.cmd, [b[f.iid], f.param, function (a, b) {
                        return d(f.iid, f.cid, a, b)
                    }])
                }
            } catch (g) {
            }
        };
        window.postMessage ? a.addEvent(window, "message", e) : window.navigator.STK_IFRAME_CONNECT_OUT = function (a) {
            e({data: a})
        };
        return function (e) {
            if (!e)return!1;
            e.contentWindow.name = e.name = e.name || "iframe_" + a.getUniqueKey();
            if (e.name in b) {
                if (b[e.name] != e)throw"iframe:" + e.name + " is existed! "
            } else {
                b[e.name] = e;
                c[e.name] = {};
                e.src = e.getAttribute("_src");
                e.removeAttribute("_src");
                e.contentWindow.name = e.name
            }
            return{trigger: function (a, b) {
                d(e.name, "_EVENT_", a, b)
            }, on: function (b, d) {
                a.custEvent.define(c[e.name], b);
                a.custEvent.add(c[e.name], b, d)
            }, off: function (b, d) {
                a.custEvent.remove(c[e.name], b, d)
            }, destroy: function () {
                a.custEvent.undefine(c[e.name]);
                delete b[e.name];
                delete c[e.name]
            }}
        }
    });
    STK.register("lib.media.publishVideoBubble", function (a) {
        var b = a.lib.kit.extra.language, c = b("#L{请输入视频播放页地址}"), d = b('<div class="W_layer W_layer_pop"><div class="content" node-type="inner"><div class="W_layer_title"><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div></div><div class="layer_send_medias" node-type="layer_send_medias"><div node-type="switcher"><div class="layer_send_btn clearfix"><ul class="clearfix"><li class="S_line2"><a href="javascript:void(0);" action-type="switchTab" action-data="type=local" suda-data="key=tblog_home_edit&value=video_record" class="W_btn_l"><span class="btn_45px"><em class="W_ficon ficon_upload S_ficon">É</em>#L{本地视频}</span></a></li><li class="S_line2"><a href="javascript:void(0);" action-type="switchTab" action-data="type=url"   suda-data="key=tblog_home_edit&value=share_tv" class="W_btn_l"><span class="btn_45px"><em class="W_ficon ficon_online_video S_ficon">Ð</em>#L{在线视频}</span></a></li></ul></div></div><div node-type="contenter" style="display:none;"><div node-type="url" style="display:none;"><div class="laMed_inp"><input node-type="videoInput" action-type="videoInput" type="text" class="W_input inp_video" value="' + c + '" style="color:#999" /><a href="javascript:void(0);" class="W_btn_a btn_30px" action-type="videoSubmit"><span class="btn_30px W_f14">#L{确定}</span></a><p class="laMed_err S_error" style="display:none;" node-type="errorWord">#L{你输入的链接地址无法识别}</p><p class="laMed_err" style="display:none;" node-type="optional"><a href="javascript:void(0);" action-type="cancel">#L{取消操作}</a> #L{或者}<a href="javascript:void(0);" action-type="normalLink">#L{作为普通的链接发布}</a></p></div><div class="laMed_con S_txt2">#L{目前已支持}<a target="_blank" class="S_link2" href="http://video.sina.com.cn">#L{新浪播客}</a>、<a target="_blank" href="http://www.youku.com" class="S_link2">#L{优酷网}</a>、<a target="_blank" class="S_link2" href="http://www.tudou.com">#L{土豆网}</a>、<a class="S_link2" target="_blank" href="http://www.ku6.com/">#L{酷6网}</a>、<a class="S_link2" target="_blank" href="http://tv.sohu.com/">#L{搜狐视频}</a>、<a class="S_link2" target="_blank" href="http://www.56.com/">#L{56网}</a>、<a class="S_link2" target="_blank" href="http://www.qiyi.com/">#L{奇艺网}</a>、<a class="S_link2" target="_blank" href="http://www.ifeng.com/">#L{凤凰网}</a>、<a class="S_link2" target="_blank" href="http://www.yinyuetai.com/">#L{音悦台}</a>、<a class="S_link2" target="_blank" href="http://www.letv.com/">#L{乐视网}</a>#L{等视频网站的视频播放页链接。}</div></div>' + '<div node-type="local" style="display:none;">' + '<div class="notes S_txt2">#L{温馨提示：视频上传功能由优酷土豆集团提供}</div>' + '<div class="WB_minitab">' + '<ul class="minitb_ul S_line1 S_bg1 clearfix">' + '<li node-type="switchLocal" action-type="switchLocal" action-data="entry=tudou" class="minitb_item S_line1"><a href="javascript:void(0);" class="minitb_lk S_txt1" suda-data="key=mainpub_choosevideo&value=to_tudou"><em class="tudou"></em>#L{上传至土豆}</a><span class="cur_block"></span></li>' + '<li node-type="switchLocal" action-type="switchLocal" action-data="entry=youku" class="minitb_item S_line1"><a href="javascript:void(0);" class="minitb_lk S_txt1" suda-data="key=mainpub_choosevideo&value=to_youku"><em class="youku"></em>#L{上传至优酷}</a><span class="cur_block"></span></li>' + "</ul>" + "</div>" + '<iframe node-type="localIframe" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" style="width:408px;height:400px;border:0;" _src="about:blank"></iframe>' + "</div>" + "</div>" + "</div>" + '<div class="W_layer_arrow"><span node-type="arrow" class="W_arrow_bor"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div>' + "</div>" + "</div>"), e, f, g, h, j, k, l = {}, m = a.core.dom.getStyle, n = a.core.dom.setStyle, o = a.core.evt.addEvent, p = a.core.evt.removeEvent, q = a.core.evt.preventDefault, r = a.core.str.trim, s = "http://weibo.com/aj/video/upload";
        l.getBub = function () {
            return g
        };
        var t = function () {
            var a = j.videoInput, b = r(a.value);
            b == "" || b == c ? a.value = "" : a.select()
        }, u = function () {
            var a = j.videoInput, b = r(a.value);
            if (b == "" || b == c) {
                a.value = c;
                return!1
            }
        }, v = function () {
            j.videoInput.value = c;
            z()
        }, w = function () {
            var b = a.core.str.trim(j.videoInput.value);
            b != k && z()
        }, x = function () {
            var b = r(j.videoInput.value);
            q();
            if (b !== "") {
                k = b;
                a.conf.trans.media.getTrans("parseVideo", {onSuccess: function (b) {
                    var c = b.data.url + " ";
                    a.custEvent.fire(l, "insert", {value: c});
                    g.hide()
                }, onError: function (a) {
                    y()
                }}).request({url: b})
            }
        }, y = function () {
            j.errorWord.style.display = "";
            j.optional.style.display = ""
        }, z = function () {
            j.errorWord.style.display = "none";
            j.optional.style.display = "none"
        }, A = function () {
            var b = a.core.str.trim(j.videoInput.value);
            a.custEvent.fire(l, "insert", {value: b + " "});
            g.hide()
        }, B = function (b) {
            var c = b.data.type;
            j.switcher.style.display = "none";
            j.contenter.style.display = "";
            a.foreach({url: j.url, local: j.local}, function (b, d) {
                b.style.display = d === c ? "" : "none";
                if (d === "local") {
                    a.addClassName(j.layer_send_medias, "layer_medias_youku");
                    C({el: j.switchLocal[0], data: {entry: "tudou"}})
                }
            })
        }, C = function (b) {
            a.foreach(j.switchLocal, function (c) {
                if (c === b.el) {
                    a.addClassName(c, "current");
                    a.addClassName(c.firstChild, "S_bg2")
                } else {
                    a.removeClassName(c, "current");
                    a.removeClassName(c.firstChild, "S_bg2")
                }
            });
            a.conf.trans.media.request("videoThirdUrl", {onSuccess: function (a) {
                j.localIframe.src = a.data.url
            }}, b.data)
        }, D = function () {
            a.custEvent.define(l, ["insert", "hide", "upload", "rec"]);
            var b = a.core.evt.delegatedEvent(h);
            b.add("normalLink", "click", A);
            b.add("videoSubmit", "click", x);
            b.add("cancel", "click", function () {
                v();
                g.hide()
            });
            b.add("uploadVideo", "click", function () {
                a.custEvent.fire(l, "upload", {el: h, url: s, width: 570, height: 420})
            });
            b.add("switchTab", "click", B);
            b.add("switchLocal", "click", C);
            a.addEvent(j.videoInput, "keyup", w);
            a.addEvent(j.videoInput, "blur", u);
            a.addEvent(j.videoInput, "focus", t);
            a.custEvent.add(g, "hidden", function (b) {
                return function () {
                    a.custEvent.remove(b, "hidden", arguments.callee);
                    a.custEvent.fire(l, "hide", {});
                    b && b.destroy && b.destroy()
                }
            }(g))
        };
        return function (b, c) {
            if (!a.isNode(b))throw"common.bubble.video need el as first parameter!";
            g = a.ui.bubble(d, {clickBlankToHide: !0, showWithAni: "fadeInDown:fast", hideWithAni: "fadeOutUp:fast", showWithSetWidth: !1});
            j = g.getDomList(!0);
            h = g.getBox();
            D();
            g.show();
            g.setArrow("top").setAlignPos(b, c.refer, {offset: {left: -1, top: 2}});
            i = a.lib.connect.iframe(j.localIframe);
            i.on("insertToPublisher", function (b, c, d) {
                a.custEvent.fire(l, "insert", {value: d + " "})
            });
            i.on("setHeight", function (a, b, c) {
                b.style.height = parseInt(c) + "px"
            });
            i.on("close", function (a, b, c) {
                g.hide()
            });
            return l
        }
    });
    STK.register("lib.publisher.widget.video", function (a) {
        return function (b) {
            var c = {}, d, e, f, g, h = !1, i = function (c, d) {
                var e = d.value, g = b.nodeList.textEl, h = g.value, i = e.length - 2;
                if (h.indexOf(e) != -1) {
                    var j = h.indexOf(e);
                    a.lib.kit.extra.textareaUtils.setCursor(g, j + 1, i)
                } else b.API.insertText(e, f);
                var k = b.API.getCurrentLogType();
                b.API.addShortUrlLog(k)
            }, j = function (c, d) {
                var e, f, g, h = b.API.getWords(), i = b.API.getExtra(), j = {pid: i, publish: h};
                a.core.evt.preventDefault();
                f = a.core.json.jsonToQuery(j, !0);
                g = d.url + (f ? "?" + f : "");
                e = a.core.dom.position(d.el);
                window.open(g, "", "height=459,width=660,location=no,left=" + e.l + ",top=" + e.t)
            }, k = function (b, c) {
                var d, e;
                a.core.evt.preventDefault();
                e = c.url;
                window.open(e, "", "height=645,width=610,location=no, left=300, top=200")
            }, l = function () {
                h = !1;
                d = a.lib.media.publishVideoBubble(g, {refer: b.nodeList.textEl});
                a.custEvent.add(d, "insert", i);
                a.custEvent.add(d, "upload", j);
                a.custEvent.add(d, "rec", k);
                a.custEvent.add(b, "close", c.hide);
                a.custEvent.add(d, "hide", function () {
                    a.custEvent.remove(d, "hide", arguments.callee);
                    a.custEvent.remove(d, "insert", i);
                    a.custEvent.remove(d, "upload", j);
                    a.custEvent.remove(d, "rec", k);
                    a.custEvent.remove(b, "close", c.hide)
                });
                f = b.API.getCurPos()
            }, m = function (c) {
                a.core.evt.preventDefault();
                if (!h) {
                    h = !0;
                    var d = a.fixEvent(a.getEvent()).target;
                    a.contains(b.nodeList.widget, d) ? g = d : g = b.nodeList.more;
                    l(c)
                }
            };
            c.clear = function () {
            };
            c.show = m;
            c.hide = function () {
                d && d.getBub().hide()
            };
            c.destroy = function () {
                b = null
            };
            return c
        }
    });
    STK.register("lib.kit.dom.children", function (a) {
        return function (b) {
            if (!a.core.dom.isNode(b))throw"Parameter must be an HTMLEelement!";
            var c = [];
            for (var d = 0, e = b.childNodes.length; d < e; d++)b.childNodes[d].nodeType == 1 && c.push(b.childNodes[d]);
            return c
        }
    });
    STK.register("lib.face.destroyFlash", function (a) {
        var b = a.core.util.browser, c = function (a) {
            if (a) {
                for (var b in a)typeof a[b] == "function" && (a[b] = null);
                a.parentNode.removeChild(a)
            }
        };
        return function (d) {
            if (!!a.isNode(d) && d && d.nodeName === "OBJECT")if (a.IE && b.OS === "windows") {
                d.style.display = "none";
                (function () {
                    d.readyState === 4 ? c(d) : setTimeout(arguments.callee, 10)
                })()
            } else d.parentNode.removeChild(d)
        }
    });
    STK.register("lib.media.publishMusicBubble", function (a) {
        var b = window.$CONFIG && window.$CONFIG.version, c = '<div class="layer_send_music" node-type="outer"><div node-type="inner"><div node-type="tabs"><div class="profile_tab S_line5"><ul class="pftb_ul layer_tab S_line1"><li class="pftb_itm S_line1"><a class="pftb_lk current S_line5 S_txt1 S_bg5" action-type="tab" node-type="tab1" href="javascript:void(0);">#L{搜索歌曲}</a></li><li class="pftb_itm S_line1"><a class="pftb_lk S_line5 S_txt1 S_bg1" action-type="tab" node-type="tab2" href="javascript:void(0);">#L{喜欢的歌}</a></li><li class="pftb_itm pftb_itm_lst S_line1"><a href="javascript:void(0);" class="pftb_lk S_line5 S_txt1 S_bg1" action-type="tab" node-type="tab3">#L{输入音乐链接}</a></li><span style="float:left" node-type="miniplayer"></span></p></div><div node-type="content"><div node-type="tab1-block" class="laMed_border" ><div class="laMed_inp"><input type="text" autocomplete="off" style="color: rgb(153, 153, 153);" value="#L{请输入歌曲、歌手、专辑名}" class="W_input inp_music" node-type="songInput"><a class="W_btn_b" href="javascript:void(0);" onclick="return false;" node-type="nameSearch"><span>#L{搜索}</span></a><div style="display:none" class="layer_menu_list" node-type="suggestLay"></div><p style="display: none;" node-type="searchError" class="laMed_err S_error">#L{抱歉，没有找到和}"<span node-type="searchKey"></span>"#L{有关的歌曲，换个词再试一下}</p></div><div class="laMed_titS" node-type="searchRusult" style="display:none">#L{搜索结果}：</div><div class="laMed_mulist" node-type="songList" style="display:none"></div></div><div node-type="tab2-block" class="laMed_border" style="display:none"><div node-type="favRusult" class="laMed_titS" style="display:none">#L{我有}<a class="W_fb" href="http://music.weibo.com/ting/?musicpublisher=1#like" target="_blank" node-type="favSongCount">199</a>#L{首喜欢的歌}<i>(在<a href="http://ting.weibo.com?musicpublisher=2" target="_blank">#L{微博音乐盒}</a>#L{标记为红心})</i></div><div class="laMed_mulist" node-type="favSongList" style="display:none"></div><div class="W_pages_minibtn" node-type="favPagingBar" style="display:none"></div><p class="no_music" node-type="favNoSongs" style="display:none">#L{你还没有标记为喜欢的歌，快去} <a href="http://ting.weibo.com?musicpublisher=3" target="_blank">#L{微博音乐盒}</a> #L{听听}</p></div><div node-type="tab3-block" class="laMed_border" style="display:none"><div class="laMed_con S_txt2">#L{目前已支持}<a href="http://music.sina.com.cn/" target="_blank" class="S_link2">#L{新浪乐库}</a>、<a class="S_link2" href="http://www.kuwo.cn/" target="_blank">#L{酷我音乐}</a>、<a class="S_link2" href="http://www.songtaste.com/" target="_blank">#L{Songtaste}</a> #L{的播放页面链接，也支持MP3格式歌曲链接。}</div><div class="laMed_inp"><input action-type="inputAction" type="text" style="color: rgb(153, 153, 153);" node-type="linkInput" value="#L{请输入MP3链接或新浪乐库单曲播放页链接}" class="W_input inp_music"><a class="W_btn_b" onclick="return false;" node-type="searchLink" href="javascript:void(0)"><span>#L{搜索}</span></a><p node-type="linkError" style="display: none;" class="laMed_err S_error">#L{没有识别出相应的歌曲信息}</p><p node-type="linkOptional" style="display: none;" class="laMed_err"><a href="javascript:void(0)" action-type="normalLink">#L{作为普通的链接发布}</a>&nbsp;#L{或}&nbsp;<a href="javascript:void(0)" action-type="closeLayer">#L{取消操作}</a></p></div><div class="laMed_titS" node-type="integrity" style="display:none">#L{为了更好的分享音乐，请花一点时间完善歌曲资料}</div><div class="laMed_muinfo" node-type="songInfo" style="display:none"></div></div></div></div></div></div>', d = '<#et tname data><ul><#list data.music_list as list><li action-type="songItem" action-data="index=${list_index}" songKeyWord="${list.title}"><a onclick="return false" href="javascript:void(0);">${list.title}</a></li></#list></ul></#et>', e = '<#et tname data><ol><li><span class="mu_song">#L{歌曲名}</span></li><li><span class="mu_songer">#L{歌手名}</span></li><li><span class="mu_album">#L{专辑名}</span></li><li><span class="mu_play">#L{试听}</span></li></ol><ul><#list data.music_list as list><li artist="${list.artist}" title="${list.stitle}" mp3_url="${list.mp3_url}" ><div class="mu_name" action-type="song"><span class="mu_song" title="${list.title}"><span>${list.show_title}</span><em class="mu_icon_new" style="display:${list.isnew}"></em></span><span class="mu_songer" title="${list.artist}">${list.show_artist}</span><span class="mu_album" title="${list.album}">${list.show_album}</span></div><div class="W_ico16 icon_toplay" songUrl="${list.mp3_url}" action-type="player"><span></span></div></li></#list></ul></#et>', f = '<table><tbody><tr><th><em class="S_spetxt">*</em>#L{歌曲名}</th><td><input type="text" value="" node-type="songName" class="W_input"></td></tr><tr><th>#L{演唱者}</th><td><input type="text" value="" node-type="artist" class="W_input"></td></tr><tr class="laMed_err S_error"><th></th><td><span class="S_error" node-type="errorSongName" style="display:none"></span></td></tr><tr class="laMed_btn"><th></th><td><a href="javascript:void(0);" class="W_btn_b" action-type="addSong"><span>#L{添加}</span></a></td></tr></tbody></table>', g = '<#et tname data><ul><#list data.music_list as list><li artist="${list.artist}" title="${list.title}" mp3_url="${list.mp3_url}"><div class="mu_name" action-type="favsong">${list.title}</div><div class="W_ico16 icon_toplay" songUrl="${list.mp3_url}" action-type="player" ><span></span></div></li></#list></ul></#et>', h = '<a action-type="favSongPage" action-data="num=#{number}" class="page S_bg1" href="javascript:;" onclick="return false;">#{label}</a>', i = '<a action-data="num=#{number}" href="javascript:;" class="page S_txt1"  onclick="return false;">#{label}</a>', j = '<a class="reverse" action-type="favPagPrev" href="javascript:;" onclick="return false;"></a>', k = '<a class="next" action-type="favPagNext" href="javascript:;" onclick="return false;"></a>', l, m, n, o, p, q, r, s, t, u, v, w, x, y = -1, z, A, B, C = $CONFIG.jsPath, D = a.lib.kit.extra.language, E = {songInput: D("#L{请输入歌曲、歌手、专辑名}"), linkInput: D("#L{请输入MP3链接或新浪乐库单曲播放页链接}"), songError: D("#L{歌曲名不能超过15个汉字}"), artistError: D("#L{演唱者不能超过15个汉字}"), interError: D("#L{接口错误}")}, F = {searchTab: {idx: 0, logstatus: !1, logfn: function () {
            N.tabLog.request({coflag: 500010, action: "search_click"});
            this.logstatus = !0
        }}, favTab: {idx: 1, logstatus: !1, logfn: function () {
            N.tabLog.request({coflag: 500010, action: "collect_click"});
            this.logstatus = !0
        }}, linkTab: {idx: 2, logstatus: !1, logfn: function () {
            N.tabLog.request({coflag: 500010, action: "link_click"});
            this.logstatus = !0
        }}}, G = {}, H = a.conf.trans.media.getTrans, I = a.core.str.trim, J = a.core.util.easyTemplate, K = a.core.evt.preventDefault, L = function () {
            l = a.lib.kit.dom.parseDOM(a.core.dom.builder(D(c)).list);
            p = l.outer;
            n = a.ui.bubble();
            n.setArrow({style: "left:82px;"});
            U();
            a.custEvent.add(n, "hide", function (b) {
                return function () {
                    b.setArrow({style: "left:30px;"});
                    a.custEvent.remove(b, "hide", arguments.callee);
                    a.custEvent.fire(G, "hide", {});
                    var c = a.sizzle("object,embed", l.miniplayer)[0];
                    a.lib.face.destroyFlash(c);
                    B = !1;
                    s = null;
                    x = null;
                    window.origin_miniplayer_music = undefined
                }
            }(n));
            !F.searchTab.logstatus && F.searchTab.logfn()
        }, M = {currentPage: 0, maxShowPage: 6, limit: 10}, N = {suggestMusic: H("suggestMusic", {onSuccess: function (a) {
            a.data && O.rendSugg(a)
        }}), searchMusic: H("searchMusic", {onSuccess: function (a) {
            O.rendList(a)
        }, onError: function () {
            O.rendError()
        }}), parseMusic: H("parseMusic", {onSuccess: function (a) {
            O.rendInfo(a)
        }, onComplete: function (a) {
            a.code != "100000" && O.urlError(a)
        }}), addMusic: H("addMusic", {onSuccess: function (a) {
            O.urlSucc(a)
        }, onError: function () {
            var b = a.sizzle('[node-type="errorSongName"]', l.outer)[0];
            b.innerHTML = E.interError
        }}), favSongSearch: H("favSongSearch", {onSuccess: function (a) {
            O.rendFavList(a)
        }}), getOutlinkInfo: function (a) {
            return H("getOutlinkInfo", {onComplete: function (b) {
                b.code == "1" && O.listenOutLinkSong(a, b)
            }})
        }, tabLog: H("tabLog")}, O = {rendSugg: function (b) {
            var c = l.suggestLay, e, f = b.data;
            if (b.key == z && f !== null) {
                for (var g = 0, h = f.music_list.length; g < h; g++)f.music_list[g].title = a.leftB(f.music_list[g].title, 30);
                e = J(d, f);
                c.innerHTML = e;
                P.showSugg();
                l.suggestList = a.sizzle('[action-type="songItem"]', c)
            }
        }, rendError: function () {
            var b = I(l.songInput.value);
            b = a.bLength(b) > 25 ? a.leftB(b, 25) + "..." : b;
            P.clean();
            a.core.dom.insertHTML(l.searchKey, a.encodeHTML(b));
            a.setStyle(l.searchError, "display", "");
            P.hideSugg()
        }, rendList: function (b) {
            var c = l.songList, d, f = b.data, g;
            P.clean();
            P.hideSugg();
            g = f.music_list;
            for (var h = 0; h < g.length; h++) {
                g[h].stitle = [g[h].title, g[h].artist, g[h].album].join("-");
                a.bLength(g[h].title) > 13 ? g[h].show_title = [a.leftB(g[h].title, 13), "..."].join("") : g[h].show_title = g[h].title;
                a.bLength(g[h].artist) > 7 ? g[h].show_artist = [a.leftB(g[h].artist, 7), "..."].join("") : g[h].show_artist = g[h].artist;
                a.bLength(g[h].album) > 9 ? g[h].show_album = [a.leftB(g[h].album, 9), "..."].join("") : g[h].show_album = g[h].album;
                a.bLength(g[h].stitle) > 40 && (g[h].stitle = [a.leftB(g[h].stitle, 40), "..."].join(""));
                g[h].isnew = g[h]["new"] ? "" : "none"
            }
            d = J(D(e), f).toString();
            c.innerHTML = d;
            a.setStyle(l.searchRusult, "display", "");
            a.setStyle(l.songList, "display", "");
            a.setStyle(c, "display", "")
        }, rendInfo: function (b) {
            var c = a.core.dom.builder(D(f)), d = l.songInfo, e = c.list.artist[0], g = c.list.songName[0], h = b.data.artist ? b.data.artist : "", i = b.data.title ? b.data.title : "";
            d.innerHTML = "";
            d.appendChild(c.box);
            g.value = i;
            e.value = h;
            Q.clean();
            a.setStyle(l.integrity, "display", "");
            a.setStyle(d, "display", "")
        }, urlError: function (b) {
            Q.clean();
            a.setStyle(l.linkError, "display", "");
            a.setStyle(l.linkOptional, "display", "")
        }, urlSucc: function (b) {
            var c = b.data.text;
            a.custEvent.fire(G, "insert", {value: c});
            Q.clean();
            n.hide()
        }, favTabClick: function (a) {
            if (a == "tab2" && !B) {
                B = !0;
                P.favSong(0)
            }
            a == "tab1" && !F.searchTab.logstatus ? F.searchTab.logfn() : a == "tab2" && !F.favTab.logstatus ? F.favTab.logfn() : a == "tab3" && !F.linkTab.logstatus && F.linkTab.logfn()
        }, setFavPagingBar: function (b) {
            function m(b, c) {
                b.push("...");
                b.push(a.templet(h, {number: c - 1, label: c}))
            }

            function g(b) {
                b.push(a.templet(h, {number: 0, label: 1}));
                b.push("...")
            }

            function f(b, d, e) {
                for (var f = d; f < e; f += 1)c == f ? b.push(a.templet(i, {number: f, label: f + 1})) : b.push(a.templet(h, {number: f, label: f + 1}))
            }

            var c = M.currentPage, d = l.favPagingBar, e = [];
            if (b <= M.maxShowPage + 2)f(e, 0, b); else if (M.currentPage < M.maxShowPage / 2 + 1) {
                f(e, 0, M.maxShowPage);
                m(e, b)
            } else if (M.currentPage + (M.maxShowPage / 2 + 1) >= b) {
                g(e);
                f(e, b - M.maxShowPage, b)
            } else {
                g(e);
                f(e, M.currentPage - (M.maxShowPage / 2 - 1), M.currentPage + (M.maxShowPage / 2 - 1) + 1);
                m(e, b)
            }
            if (b > 1) {
                e.unshift(a.templet(j));
                e.push(a.templet(k))
            }
            d.innerHTML = e.join("")
        }, rendFavList: function (b) {
            var c = l.favSongList, d = l.favSongCount, e, f = b.data, h, i, j;
            h = f.music_list;
            i = f.music_num;
            j = Math.ceil(i / M.limit);
            M.totalPage = j;
            if (h.length < 1) {
                a.setStyle(l.favNoSongs, "display", "");
                a.setStyle(l.favSongList, "display", "none");
                a.setStyle(l.favRusult, "display", "none");
                a.setStyle(l.favPagingBar, "display", "none")
            } else {
                for (var k = 0; k < h.length; k++) {
                    h[k].title = [h[k].title, h[k].artist].join("-");
                    a.bLength(h[k].title) > 40 && (h[k].title = [a.leftB(h[k].title, 40), "..."].join(""))
                }
                e = J(g, f);
                c.innerHTML = e;
                d.innerHTML = i;
                O.setFavPagingBar(j);
                a.setStyle(l.favSongList, "display", "");
                a.setStyle(l.favRusult, "display", "");
                a.setStyle(l.favPagingBar, "display", "");
                a.setStyle(l.favNoSongs, "display", "none");
                a.setStyle(c, "display", "")
            }
        }, listenOutLinkSong: function (a, b) {
            x.setUrl(b.data[a].songurl)
        }}, P = {focus: function (b) {
            var c = a.fixEvent(b).target, d = I(c.value), e = d == E.songInput || d === "" ? !1 : !0;
            clearTimeout(v);
            e ? I(l.suggestLay.innerHTML) !== "" && P.showSugg() : c.value = ""
        }, blur: function (b) {
            var c = a.fixEvent(b).target, d = I(c.value), e = d === "" || d == E.songInput ? !1 : !0;
            e || (c.value = E.songInput);
            clearTimeout(v);
            v = setTimeout(P.hideSugg, 1e3)
        }, keyhandler: function (a) {
            a.keyCode == 13 && setTimeout(P.search, 0);
            a.keyCode == 27 && P.hideSugg()
        }, setSuggestLayPos: function () {
            var b = a.lib.kit.dom.parseDOM(a.builder(n.getOuter()).list).layoutContent, c = a.core.dom.getSize(l.songInput), d = a.position(b), e = a.position(l.songInput), f = e.l - d.l, g = e.t - d.t + c.height - 1;
            a.setStyle(l.suggestLay, "left", f + "px");
            a.setStyle(l.suggestLay, "top", g + "px")
        }, showSugg: function () {
            y = -1;
            P.setSuggestLayPos();
            a.setStyle(l.suggestLay, "display", "");
            a.custEvent.fire(A, "open", l.songInput);
            a.addEvent(document, "click", P.hideSugg)
        }, hideSugg: function (b) {
            var c = b ? a.core.evt.fixEvent(b).target : null, d = l.suggestLay, e = l.songInput;
            if (c && (c == e || a.core.dom.contains(d, c)))return!1;
            y > -1 && l.suggestList && l.suggestList[y] && a.removeClassName(l.suggestList[y], "cur");
            a.setStyle(d, "display", "none");
            a.custEvent.fire(A, "close");
            a.removeEvent(document, "click", P.hideSugg)
        }, goSugg: function (b) {
            var c = l.songInput, d = I(c.value);
            clearTimeout(u);
            if (d != E.songInput && d != r) {
                if (d === "") {
                    P.hideSugg();
                    return
                }
                l.suggestLay.innerHTML = "";
                a.setStyle(l.suggestLay, "display", "none");
                u = setTimeout(function () {
                    z = a.core.util.getUniqueKey();
                    N.suggestMusic.request({key: d, _k: z});
                    r = d
                }, 200)
            }
        }, searchChoose: function (a, b) {
            var c = l.songInput, d, e;
            if (y >= 0) {
                d = l.suggestList[b];
                e = d.getAttribute("songkeyword");
                c.value = e;
                r = e
            }
        }, search: function () {
            var a = l.songInput, b = I(a.value);
            if (b !== "" && b != E.songInput) {
                x && x.songStop && x.songStop();
                window.setTimeout(function () {
                    N.searchMusic.request({key: b, isred: !1});
                    t = b
                }, 0)
            }
        }, clean: function () {
            var b = l.searchError, c = l.searchRusult, d = l.songList;
            r = "";
            d.innerHTML = "";
            l.searchKey.innerHTML = "";
            a.setStyle(b, "display", "none");
            a.setStyle(c, "display", "none")
        }, add: function (a) {
            var b = a.el.parentNode, c = b.getAttribute("mp3_url"), d = b.getAttribute("title"), e = b.getAttribute("artist");
            K();
            N.addMusic.request({url: c, title: d, artist: e})
        }, setIndex: function (b, c) {
            var d;
            if (y >= 0) {
                d = l.suggestList[y] ? l.suggestList[y] : null;
                d.parentNode && d.parentNode.nodeType != 11 && a.removeClassName(d, "cur")
            }
            l.suggestList[c] && a.addClassName(l.suggestList[c], "cur");
            y = c
        }, controlSong: function (a) {
            var b = a.el;
            w && w != b && (w.className = "W_ico16 icon_toplay");
            w = b;
            b.className != "W_loading" && (b.className == "W_ico16 icon_toplay" ? S.playSong(b) : b.className == "W_ico16 icon_tostop" && S.pauseSong())
        }, addfavSong: function (b) {
            var c = b.el.parentNode, d = c.getAttribute("mp3_url"), e = c.getAttribute("title"), f = c.getAttribute("artist");
            K();
            if (d.indexOf("http://t.cn") >= 0) {
                var g = e + "-" + d;
                a.custEvent.fire(G, "insert", {value: g});
                n.hide()
            } else N.addMusic.request({url: d, title: e, artist: f})
        }, favSong: function (a) {
            M.currentPage = Math.floor(a / M.limit);
            N.favSongSearch.request({start: a, limit: M.limit})
        }, favSongPage: function (b) {
            a.preventDefault(b.evt);
            P.favSong(b.data.num * M.limit)
        }, favSongPrev: function () {
            a.preventDefault();
            if (!(M.currentPage < 1)) {
                M.currentPage--;
                P.favSong(M.currentPage * M.limit)
            }
        }, favSongNext: function () {
            a.preventDefault();
            if (!(M.currentPage >= M.totalPage - 1)) {
                M.currentPage++;
                P.favSong(M.currentPage * M.limit)
            }
        }, getOutlinkInfo: function (a) {
            N.getOutlinkInfo(a).request({short_url: a, source: "872034675"})
        }}, Q = {focus: function (b) {
            var c = a.fixEvent(b).target, d = I(c.value), e = d == E.linkInput || d === "" ? !1 : !0;
            e || (c.value = "");
            c.select()
        }, blur: function (b) {
            var c = a.fixEvent(b).target, d = I(c.value), e = d === "" || d == E.linkInput ? !1 : !0;
            e || (c.value = E.linkInput)
        }, clean: function () {
            a.setStyle(l.integrity, "display", "none");
            a.setStyle(l.songInfo, "display", "none");
            a.setStyle(l.linkError, "display", "none");
            a.setStyle(l.linkOptional, "display", "none")
        }, addSong: function () {
            var b = I(a.sizzle('[node-type="songName"]', l.outer)[0].value), c = I(a.sizzle('[node-type="artist"]', l.outer)[0].value), d = I(l.linkInput.value), e = a.sizzle('[node-type="errorSongName"]', l.outer)[0];
            K();
            if (b === "") {
                e.innerHTML = E.songInput;
                a.setStyle(e, "display", "")
            } else {
                if (a.bLength(b) > 30) {
                    e.innerHTML = E.songError;
                    a.setStyle(e, "display", "");
                    return
                }
                if (a.bLength(c) > 30) {
                    e.innerHTML = E.artistError;
                    a.setStyle(e, "display", "");
                    return
                }
                N.addMusic.request({title: b, url: d, artist: c})
            }
        }, search: function () {
            var a = I(l.linkInput.value);
            if (a !== "" && a !== E.linkInput) {
                N.parseMusic.request({url: a});
                K()
            }
        }, normal: function () {
            var b = I(l.linkInput.value);
            a.custEvent.fire(G, "insert", {value: b + " "});
            T.closeLayer()
        }}, R = function (b, c) {
            var d;
            if (c == "buffer" || c == "playing") {
                c == "playing" ? d = "W_ico16 icon_tostop" : c == "buffer" && (d = "W_loading");
                a.core.dom.isNode(w) && (w.className = d)
            }
        }, S = {init: function () {
            var c = l.miniplayer, d = a.getUniqueKey();
            window.origin_miniplayer_music = R;
            x = a.core.util.swf.create(c, C + "/home/static/swf/player/MiniPlayer.swf?version=" + b, {id: d, flashvars: {statusListener: "origin_miniplayer_music"}, paras: {quality: "high", allowScriptAccess: "always", wmode: "transparent", allowFullscreen: !0}, attrs: {name: d}})
        }, playSong: function (a) {
            var b = a.getAttribute("songUrl");
            if (b == s)x.songPlay(); else if (x && x.setUrl) {
                if (b.indexOf("http://t.cn/") >= 0) {
                    var c = b.replace("http://t.cn/", "");
                    P.getOutlinkInfo(c)
                } else x.setUrl(b);
                s = b
            }
        }, pauseSong: function () {
            w.className = "W_ico16 icon_toplay";
            x.songStop()
        }}, T = {closeLayer: function () {
            n.hide()
        }}, U = function () {
            var b = a.core.evt.delegatedEvent(l.outer);
            a.custEvent.define(G, "insert");
            a.custEvent.define(G, "hide");
            b.add("player", "click", P.controlSong);
            b.add("addSong", "click", Q.addSong);
            b.add("normalLink", "click", Q.normal);
            b.add("closeLayer", "click", T.closeLayer);
            b.add("song", "click", P.add);
            b.add("favsong", "click", P.addfavSong);
            b.add("favSongPage", "click", P.favSongPage);
            b.add("favPagPrev", "click", P.favSongPrev);
            b.add("favPagNext", "click", P.favSongNext);
            a.addEvent(l.songInput, "focus", P.focus);
            a.addEvent(l.songInput, "blur", P.blur);
            a.addEvent(l.songInput, "keyup", P.goSugg);
            a.addEvent(l.songInput, "keydown", P.keyhandler);
            a.addEvent(l.nameSearch, "click", P.search);
            a.addEvent(l.linkInput, "focus", Q.focus);
            a.addEvent(l.linkInput, "blur", Q.blur);
            a.addEvent(l.searchLink, "click", Q.search);
            var c = a.ui.mod.tab({templete: l.outer, currentTab: "tab1"});
            a.custEvent.add(c, "tabIn", function (b, c) {
                a.foreach(a.lib.kit.dom.children(l.content), function (a, b) {
                    a.style.display = a.getAttribute("node-type") == c + "-block" ? "" : "none"
                });
                O.favTabClick(c)
            });
            A = a.ui.mod.suggest({textNode: l.songInput, uiNode: l.suggestLay, actionType: "songItem", actionData: "index"});
            a.custEvent.add(A, "onIndexChange", P.setIndex);
            a.custEvent.add(A, "onSelect", P.searchChoose);
            setTimeout(S.init, 100)
        };
        return function (b, c) {
            L();
            if (!a.isNode(b))throw"common.bubble.music need el as first parameter!";
            n.setContent(p);
            n.setAlignPos(b, c.refer, c);
            n.show();
            G.hide = n.hide;
            return G
        }
    });
    STK.register("lib.publisher.widget.music", function (a) {
        return function (b) {
            var c = {}, d, e, f, g, h = function (c, d) {
                var e = d.value + " ", g = b.nodeList.textEl, h = g.value, i = e.length - 2;
                if (h.indexOf(e) != -1) {
                    var j = h.indexOf(e);
                    a.lib.kit.extra.textareaUtils.setCursor(g, j + 1, i)
                } else b.API.insertText(e, f);
                var k = b.API.getCurrentLogType();
                b.API.addShortUrlLog(k)
            }, i = !1, j = function (e) {
                i = !1;
                d = a.lib.media.publishMusicBubble(g, {refer: b.nodeList.textEl});
                a.custEvent.add(d, "insert", h);
                a.custEvent.add(b, "close", c.hide);
                a.custEvent.add(d, "hide", function () {
                    a.custEvent.remove(d, "hide", arguments.callee);
                    a.custEvent.remove(d, "insert", h);
                    a.custEvent.remove(b, "close", c.hide)
                });
                f = b.API.getCurPos()
            }, k = function (c) {
                a.core.evt.preventDefault();
                if (!i) {
                    i = !0;
                    var d = a.fixEvent(a.getEvent()).target;
                    a.contains(b.nodeList.widget, d) ? g = d : g = b.nodeList.more;
                    j(c)
                }
            };
            c.clear = function () {
            };
            c.show = k;
            c.hide = function () {
                d && d.hide()
            };
            c.destroy = function () {
                b = null
            };
            return c
        }
    });
    STK.register("conf.trans.vote", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("add", {url: "/aj/vote/add", method: "post"});
        c("join", {url: "/aj/vote/join", method: "post"});
        return b
    });
    STK.register("lib.kit.dom.parentElementBy", function (a) {
        return function (a, b, c) {
            if (!a || !b)throw new Error("传入的参数为空");
            var d = 0, e;
            a = a.parentNode;
            while (a && a.parentNode) {
                d++;
                e = c(a);
                if (e === !1)return!1;
                if (e === !0)return a;
                if (e === b)return null;
                a = a.parentNode;
                if (d > 3e4)return!1
            }
            return null
        }
    });
    STK.register("lib.kit.extra.shine", function (a) {
        var b = function (a) {
            return a.slice(0, a.length - 1).concat(a.concat([]).reverse())
        };
        return function (c, d) {
            var e = a.parseParam({start: "#fff", color: "#fbb", times: 2, step: 5, length: 4}, d), f = e.start.split(""), g = e.color.split(""), h = [];
            for (var i = 0; i < e.step; i += 1) {
                var j = f[0];
                for (var k = 1; k < e.length; k += 1) {
                    var l = parseInt(f[k], 16), m = parseInt(g[k], 16);
                    j += Math.floor(parseInt(l + (m - l) * i / e.step, 10)).toString(16)
                }
                h.push(j)
            }
            for (var i = 0; i < e.times; i += 1)h = b(h);
            var n = !1, o = a.timer.add(function () {
                if (!h.length)a.timer.remove(o); else {
                    if (n) {
                        n = !1;
                        return
                    }
                    n = !0;
                    c.style.backgroundColor = h.pop()
                }
            })
        }
    });
    STK.register("lib.image.imgUploadCode", function (a) {
        var b = a.lib.kit.extra.language, c = {"-1": b("#L{没有登录}"), "-2": b("#L{没有收到PUT的数据}"), "-3": b("#L{没有指定cb参数}"), "-4": b("#L{没有发现提交上传文件}"), "-5": b("#L{该app没有开放图片上传服务}"), "-6": b("#L{SINAPRO或uid非法}"), "-7": b("#L{参数s值不被支持}"), "-8": b("#L{数据上传失败}"), "-9": b("#L{文件mime类型不支持}"), "-10": b("#L{文件字节数超限}"), "-11": b("#L{存储错误}")};
        return function (a) {
            return c[a]
        }
    });
    STK.register("lib.image.uploadLog", function (a) {
        return function () {
            var b = {}, c = function (b) {
                var c = new Image, d = encodeURIComponent(navigator.userAgent), e = window.$CONFIG, f = a.lib.kit.extra.merge({cl: d, rnd: (new Date).getTime(), uid: e ? e.uid : 0, referer: encodeURIComponent(location), tm: +(new Date), ip: "", t: 0}, b);
                f.ret == "none" && (f.err = "10003");
                f = a.core.json.jsonToQuery(f);
                f = "http://stats.t.sinaimg.cn/do_not_delete/fc.html?" + f;
                c.setAttribute("src", f)
            }, d = function (b) {
                var c = new Image, d = encodeURIComponent(navigator.userAgent), e = window.$CONFIG, f = a.lib.kit.extra.merge({rnd: (new Date).getTime(), uid: e ? e.uid : 0, cl: d, tm: +(new Date), ip: "", t: 2, sz: 0}, b);
                f = a.core.json.jsonToQuery(f);
                f = "http://stats.t.sinaimg.cn/do_not_delete/fc.html?" + f;
                c.setAttribute("src", f)
            };
            b.sendSucc = d;
            b.sendError = c;
            b.destroy = function () {
            };
            return b
        }
    });
    STK.register("pl.setting.uploadPic", function (a) {
        return function (b, c) {
            var d = {}, e, f = a.core.evt.addEvent, g = "weibo.com/", h = "picupload.service.weibo.com", i = c, j = {complete: function (b, c) {
                a.log("complete", b, i);
                if (!b || b.ret < 0)i.err ? i.err(b) : i.complete(b); else {
                    var d = j.parseInfo(b);
                    a.log("result", d, b, i);
                    i.complete(d)
                }
            }, parseInfo: function (b) {
                var c = a.lib.kit.extra.imageURL(b.pid), d = [], e, f;
                return{url: c, pid: b.pid}
            }}, k = {upload: function (b, d) {
                var e = d.value;
                if (a.core.str.trim(e) !== "") {
                    c.start && c.start.call();
                    a.core.io.ijax({url: "http://" + h + "/interface/pic_upload.php", form: b, abaurl: "http://" + document.domain + "/aj/static/upimgback.html?_wv=5", abakey: "cb", onComplete: j.complete, onTimeout: c.timeout, args: {marks: 1, app: "miniblog", s: "rdxt"}})
                }
            }}, l = {}, m = {}, n = function () {
                o();
                p();
                r();
                t();
                u()
            }, o = function () {
                if (!b)throw"node is not defined"
            }, p = function () {
                e = a.lib.kit.dom.parseDOM(a.core.dom.builder(b).list);
                if (!e.fileBtn)throw"[common.content.uploadPic]: nodes.fileBtn is not defined.";
                if (!e.form)throw"[common.content.uploadPic]: nodes.form is not defined."
            }, q = function () {
            }, r = function () {
                f(e.fileBtn, "change", function () {
                    k.upload(e.form, e.fileBtn)
                })
            }, s = function () {
            }, t = function () {
            }, u = function () {
            }, v = function () {
            }, w = {};
            d.doUpload = k.upload;
            d.destroy = v;
            n();
            return d
        }
    });
    STK.register("lib.vote.publishVoteBubble", function (a) {
        var b = a.lib.kit.extra.language, c = a.core.util.templet, d = a.lib.kit.extra.shine, e = a.lib.image.uploadLog(), f, g = function (a, b, c, d, e) {
            if (a > b)return"";
            var f = [];
            d || (d = "");
            e || (e = "");
            for (var g = a; g <= b; g++) {
                var h = g;
                !c || (h = h < 10 ? "0" + h : "" + h);
                f.push('<option value="' + h + '">' + d + h + e + "</option>")
            }
            return f.join("")
        }, h = function (a) {
            var b = new Date, c;
            switch (a) {
                case"Y":
                    c = b.getFullYear();
                    break;
                case"M":
                    c = b.getMonth() + 1;
                    c < 10 && (c = "0" + c);
                    break;
                case"D":
                    c = b.getDate();
                    c < 10 && (c = "0" + c);
                    break;
                case"H":
                    c = b.getHours();
                    c < 10 && (c = "0" + c);
                    break;
                case"I":
                    c = b.getMinutes();
                    c < 10 && (c = "0" + c);
                    break;
                case"S":
                    c = b.getSeconds();
                    c < 10 && (c = "0" + c);
                    break;
                default:
                    c = b.getFullYear() + "-" + (b.getMonth() + 1) + "-" + b.getDate() + " " + b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds()
            }
            return c
        }, i = function (a) {
            var b = a ? new Date(a) : new Date, c = {year: b.getFullYear(), month: b.getMonth() + 1, day: b.getDate()};
            c.month < 10 && (c.month = "0" + c.month);
            c.day < 10 && (c.day = "0" + c.day);
            return c.year + "-" + c.month + "-" + c.day
        }, j = function () {
            var a = "" + Math.random();
            return a.replace(/^0\./, "s_")
        }, k = {FRAME: '<div class="W_layer W_layer_pop"><div class="content"><div class="W_layer_title"><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div></div><div class="layer_send_vote" node-type="vote_switcher"><div class="layer_send_btn clearfix"><ul class="clearfix"><li class="S_line2"><a href="javascript:void(0);" action-type="switcher" action-data="type=0" class="W_btn_l"><span class="btn_45px"><em class="W_ficon ficon_vote_text S_ficon">Ì</em>#L{发起文字投票}</span></a></li><li class="S_line2"><a href="javascript:void(0);" action-type="switcher" action-data="type=1" class="W_btn_l"><span class="btn_45px"><em class="W_ficon ficon_vote_pic S_ficon">Í</em>#L{发起图片投票}</span></a></li></ul></div></div><div class="layer_vote" node-type="vote_content" style="display:none"><div class="title"><h5>#L{创建标题}：</h5><p class="tips" node-type="titleTips"><span class="txt S_txt2">#L{标题最多25字}</span></p></div><div class="con"><input node-type="title" type="text" name="title" class="W_input"/></div><div class="title"><h5>#L{投票选项}：</h5><p class="tips" node-type="itemsTips"><span class="txt S_txt2">#L{至少2项,每项最多20字}</span></p></div><div node-type="items"></div><div class="con"><a node-type="addItems" href="javascript:void(0);" class="addbox S_bg1 S_txt1"><em class="W_ficon ficon_add S_ficon">+</em>#L{添加选项}</a></div><div class="chooseBox S_line2"><h5>#L{单选/多选}：</h5><select  name="num" node-type="num"><option value="1">#L{单选}</option></select></div><div class="seniorBox S_line1"><h5><a node-type="advancedBtn" href="javascript:void(0);" class="S_txt1"><span class="txt">#L{高级设置}</span> <em class="W_ficon ficon_arrow_down S_ficon">c</em></a></h5><div node-type="advanced"><div class="title">#L{截止时间}：<span class="date"><select node-type="deadline"><option value="1 week">#L{一周}</option><option value="1 month">#L{一个月}</option><option value=".5 year">#L{半年}</option><option value="1 year">#L{一年}</option><option value="modify">#L{自定义}</option></select></span><p style="display:none;" class="date" node-type="modify"><input name="date" type="text" node-type="date_select" class="date_select" readonly /><span class="date"><select name="hours">' + g(0, 23, 1) + '</select>#L{时}</span><span class="date"><select name="minutes">' + g(0, 59, 1) + "</select>#L{分}</span></p>" + "</div>" + '<div class="title">#L{投票结果}：<span node-type="voteResult"><label class="W_label" for="vote_visibility_0"><input id="vote_visibility_0" value="0" type="radio" name="visibility" class="W_radio" checked="checked" /><span>#L{投票后可见}</span></label><label class="W_label" for="vote_visibility_1"><input id="vote_visibility_1" value="1" type="radio" name="visibility" class="W_radio" /><span>#L{任何人可见}</span></label></div>' + '<div class="title">#L{投票说明}：</div>' + '<div class="seniorpic" node-type="desc">' + '<div class="W_input clearfix">' + '<div style="display:none" node-type="pictureArea">' + '<div node-type="pictureArea_pic" class="pic S_bg1"><em class="W_ficon ficon_add_pic S_ficon">È</em><form node-type="pictureForm" id="vote_picture_upload" name="vote_picture_upload" target="upload_target" enctype="multipart/form-data" method="POST" action=""><span node-type="fileBtn"><input name="pic1" action-type="picuploadinput" type="file" style="width:100px;height:100px;position:absolute;bottom:0;right:0;opacity:0;filter:alpha(opacity=0);cursor:pointer;"></span></form></div>' + '<div node-type="pictureArea_pic" class="pic S_bg1"><em class="W_ficon ficon_add_pic S_ficon">È</em><a href="javascript:void(0);" action-type="cancel" class="ico_delpic"></a></div>' + '<div node-type="pictureArea_pic" class="pic S_bg1"><img node-type="pic" height="50" width="50"><a href="javascript:void(0);" action-type="cancel" class="ico_delpic"></a></div>' + "</div>" + '<textarea node-type="info" class="input" onfocus="this.parentNode.className=\'W_input W_input_focus clearfix\'" onblur="this.parentNode.className=\'W_input clearfix\'"></textarea>' + "</div>" + "</div>" + "</div>" + "</div>" + '<div node-type="secodeArea" class="coding S_line2" style="display:none;">#L{验证码}' + '<input node-type="secode" type="text" class="W_input" name="secode">' + b('<img action-type="secodeImg" node-type="secodeImg" width="75" height="24" title="#L{看不清，换一个}" alt="#L{看不清，换一个}" />') + '<p node-type="secodeTips"></p>' + "</div>" + '<div class="W_layer_btn">' + '<a node-type="submitBtn" href="javascript:void(0);" class="W_btn_a">#L{发起}</a>' + "</div>" + "</div>" + '<div class="W_layer_arrow"><span node-type="arrow" class="W_arrow_bor"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div>' + "</div></div>", ITEM: '<div node-type="vote_item" class="con"><div class="W_input"><span class="S_txt1" node-type="vote_item_index">#{NUMBER}</span><input class="input" onfocus="this.parentNode.className=\'W_input W_input_focus\'" onblur="this.parentNode.className=\'W_input\'" type="text" action-type="item"/><span action-type="removeItem" class="del S_line1"><a href="javascript:void(0);" class="W_ficon ficon_close S_ficon">X</a></span></div></div>', ITEM_PIC: '<div node-type="vote_item" class="option_pic clearfix"><div class="pic S_bg1"><em class="W_ficon ficon_add_pic S_ficon" node-type="pic_placeholder">È</em><em style="display:none;" class="W_ficon ficon_add_pic S_ficon" node-type="pic_loading">È</em><img node-type="pic" height="50" width="50" src="" style="display:none;"/><span style="visibility:hidden" node-type="ruTips">' + b("#L{重新上传}") + '</span><form node-type="form" enctype="multipart/form-data" method="POST"><input name="pic1" style="width:100px;height:100px;position:absolute;bottom:0;right:0;opacity:0;filter:alpha(opacity=0);cursor:pointer;" node-type="fileBtn" type="file" /></form></div>' + '<div class="piccon">' + '<div class="W_input">' + '<span class="S_txt1" node-type="vote_item_index">#{NUMBER}</span>' + '<input class="input" type="text" action-type="item" onfocus="this.parentNode.className=\'W_input W_input_focus\'" onblur="this.parentNode.className=\'W_input\'"/><span action-type="removeItem" class="del S_line1"><a href="javascript:void(0);" class="W_ficon ficon_close S_ficon">X</a></span>' + '</div><p class="S_spetxt" node-type="tips"></p>' + "</div>" + "</div>", ITEM_PIC_UPLOADING: $CONFIG.imgPath + "style/images/index/vote_img_loading.png", EDITOR: b("#L{我发起了一个投票}【#{TITLE}】，#L{地址} #{SHORTURL}"), ADVANCED: {PICUPLOADINPUT: '<input action-type="picuploadinput" type="file" name="pic1"/>', PICUPLOADTHUMBFRAME: '<div node-type="outer" class="W_layer"><div class="bg"><table border="0" cellspacing="0" cellpadding="0"><tr><td><div node-type="inner" class="content" style="padding:5px;"></div></td></tr></table><div class="arrow arrow_t"></div></div></div>', PICUPLOADTHUMBNAIL: '<img src="#{URL}"/>'}, TITLE: {DEFAULT: b('<span class="txt S_txt2">#L{标题最多25字}</span>'), SUCCESS: b('<span class="txt S_txt2">#L{标题最多25字}</span>'), EMPTY: b('<span class="W_icon icon_rederrorS"></span><span class="txt S_txt2">#L{标题不能为空}</span>')}, ITEMS: {DEFAULT: b('<span class="txt S_txt2">#L{至少2项,每项最多20字}</span>'), LESS: b('<span class="W_icon icon_rederrorS"></span><span class="txt S_txt2">#L{选项太少啦，至少两项哦。}</span>')}, SUBMIT: {DEFAULT: b("#L{发起后不可删除或修改选项}"), ERROR: "#{MESSAGE}", ING: b("#L{正在提交}"), SUCCESS: b("#L{投票发起成功}")}, SECODE: {DEFAULT: b('<em class="S_txt2">#L{请输入验证码}</em>'), EMPTY: b('<span class="icon_del"></span><em class="S_spetxt">#L{验证码不能为空}</em>'), ERROR: b('<span class="icon_del"></span><em class="S_spetxt">#L{验证码错误，请重新输入}</em>')}, PICTUREUPLOAD: {ERRORSIZE: b("#L{请上传5M以内的JPG、GIF、PNG图片。}")}}, l = {}, m = {}, n, o, p, q, r, s = {}, t = "1 week", u = {}, v = 0, w = !1, x = !1, y = 0, z = !1, A = null, B, C, D = !1, E, F = ["normal", "picture"], G, H = {itemMin: 5, itemMax: 10, defaultItem: 5, addItemStep: 1, itemMaxLen: 20, titleMaxLen: 25, maintain: 365, itemMinActive: 2}, I, J = {init: function () {
            J.bind();
            K.init()
        }, changeTab: function (a) {
            var b = F[a.data.type | 0];
            J.stopLsn();
            o.vote_switcher.style.display = "none";
            o.vote_content.style.display = "";
            z = !1;
            x = !1;
            w = !1;
            v = 0;
            G = J[b]();
            J.resetTitle();
            J.resetDeadline();
            J.resetVoteResult();
            J.clearItems();
            J.itemsNum();
            J.hideCalendar();
            J.hideAdvanced();
            J.startLsn();
            switch (b) {
                case 0:
                case"default":
                    H.itemMax = 20;
                    K.enable();
                    break;
                case 1:
                case"picture":
                    H.itemMax = 15;
                    K.disable();
                    break;
                default:
                    H.itemMax = 20;
                    K.enable()
            }
            J.addItems(H.defaultItem);
            o.itemsTips.innerHTML = "";
            o.titleTips.innerHTML = "";
            o.secodeTips.innerHTML = "";
            setTimeout(function () {
                o.title.focus()
            }, 0)
        }, bind: function () {
            s.items = a.core.evt.delegatedEvent(o.items);
            s.secode = a.core.evt.delegatedEvent(o.secodeArea);
            s.switcher = a.core.evt.delegatedEvent(o.vote_switcher);
            s.items.add("removeItem", "click", J.removeItem);
            s.items.add("item", "click", function () {
                o.itemsTips.innerHTML = k.ITEMS.DEFAULT
            });
            s.secode.add("secodeImg", "click", J.secodeReflush);
            s.switcher.add("switcher", "click", J.changeTab);
            a.addEvent(o.addItems, "click", J.addItemStep);
            a.addEvent(o.advancedBtn, "click", J.toggleAdvanced);
            a.addEvent(o.deadline, "change", J.toggleDeadline);
            a.addEvent(o.date_select, "click", J.showCalendar);
            a.addEvent(o.submitBtn, "click", J.submit);
            a.addEvent(o.info, "click", J.showInfo);
            a.addEvent(o.info, "blur", J.hideInfo);
            a.addEvent(o.title, "keyup", J.getTitle);
            a.addEvent(o.secode, "keyup", J.getSecode)
        }, startLsn: function () {
            m.flushNum = window.setInterval(J.itemsReflushStatus, 500)
        }, stopLsn: function () {
            for (var a in m)window.clearInterval(m[a])
        }, getBub: function () {
            return q
        }, hide: function () {
            a.custEvent.remove(l, "hide");
            q.hide()
        }, show: function () {
            q.show()
        }, itemsNum: function () {
            v = a.sizzle("[node-type=vote_item]", o.items).length
        }, itemsReMark: function () {
            var b = a.sizzle("[node-type=vote_item_index]", o.items);
            for (var c = 0; c < v; c++)b[c].innerHTML = c + 1 + "."
        }, addItems: function (a) {
            G.addItems(a);
            J.removeItemsBtn.autoToggle();
            J.addItemsBtn.autoToggle()
        }, addItemStep: function () {
            J.addItems(H.addItemStep)
        }, clearItems: function () {
            o.items.innerHTML = ""
        }, addItemsBtn: {show: function () {
            o.addItems.style.display = ""
        }, hide: function () {
            o.addItems.style.display = "none"
        }, autoToggle: function () {
            v < H.itemMax ? J.addItemsBtn.show() : J.addItemsBtn.hide()
        }}, removeItem: function (a) {
            setTimeout(function () {
                J.itemsNum();
                G.removeItem(a.el);
                J.itemsReMark();
                J.removeItemsBtn.autoToggle();
                J.addItemsBtn.autoToggle()
            }, 0)
        }, removeItemsBtn: {get: function () {
            return a.sizzle("[action-type=removeItem]", o.items)
        }, show: function () {
            var a = J.removeItemsBtn.get();
            if (a.length > 0)for (var b in a)a[b].style.display = ""
        }, hide: function () {
            var a = J.removeItemsBtn.get();
            if (a.length > 0)for (var b in a)a[b].style.display = "none"
        }, autoToggle: function () {
            v > H.itemMin ? J.removeItemsBtn.show() : J.removeItemsBtn.hide()
        }}, getTitle: function () {
            var b = a.core.str.trim(o.title.value);
            if (b == "")o.titleTips.innerHTML = k.TITLE.DEFAULT; else {
                b.length >= H.titleMaxLen && (b = b.slice(0, H.titleMaxLen));
                o.titleTips.innerHTML = k.TITLE.SUCCESS
            }
            o.title.value != b && (o.title.value = b);
            return b
        }, resetTitle: function () {
            o.title.value = "";
            J.getTitle()
        }, itemsFormat: function () {
            var b = a.sizzle("input[action-type=item]", o.items);
            if (b && b.length > 0) {
                var c;
                for (var d in b) {
                    c = b[d].value;
                    c = a.core.str.trim(c).replace(/,/, "").slice(0, H.itemMaxLen);
                    b[d].value != c && (b[d].value = c)
                }
            }
        }, itemsReflushStatus: function () {
            J.itemsFormat();
            var a = G.getItemsData();
            if (y != a.length) {
                J.flushNum(a.length);
                y = a.length
            }
        }, getItemsFormData: function () {
            J.itemsFormat();
            var a = G.getItemsFormData();
            return a
        }, getVoteResult: function () {
            var b = a.sizzle("[name=visibility]", o.vote);
            for (var c in b)if (b[c].checked == !0)return b[c].value;
            return 0
        }, resetVoteResult: function () {
            a.sizzle("[name=visibility]", o.vote)[0].checked = !0
        }, getDeadline: function () {
            var b = o.deadline.value, c = {};
            c.hh = h("H");
            c.mm = h("I");
            switch (b) {
                case"1 week":
                    c.date = i((Math.round(+(new Date) / 1e3) + 604800) * 1e3);
                    break;
                case"1 month":
                    c.date = i((Math.round(+(new Date) / 1e3) + 2592e3) * 1e3);
                    break;
                case".5 year":
                    c.date = i((Math.round(+(new Date) / 1e3) + 15724800) * 1e3);
                    break;
                case"1 year":
                    c.date = i((Math.round(+(new Date) / 1e3) + 31536e3) * 1e3);
                    break;
                default:
                    c.date = a.sizzle("[name=date]", o.modify)[0].value;
                    c.hh = a.sizzle("[name=hours]", o.modify)[0].value;
                    c.mm = a.sizzle("[name=minutes]", o.modify)[0].value
            }
            return c
        }, getSecode: function () {
            var b = a.core.str.trim(o.secode.value);
            if (b == "") {
                o.secodeTips.innerHTML = k.SECODE.DEFAULT;
                return!1
            }
            o.secodeTips.innerHTML = "";
            return b
        }, secodeReflush: function () {
            if (z) {
                o.secodeArea.style.display = "";
                o.secodeImg.src = A + "&ts=" + (new Date).getTime();
                o.secodeTips.innerHTML = k.SECODE.DEFAULT;
                o.secode.value = "";
                o.secode.focus()
            } else o.secodeArea.style.display = "none"
        }, flushNum: function (b) {
            o.num.innerHTML = "";
            var c;
            c = a.C("option");
            c.value = "1";
            c.innerHTML = "单选";
            o.num.appendChild(c);
            if (b >= 2)for (var d = 2; d <= b; d++) {
                c = a.C("option");
                c.value = d;
                c.innerHTML = "最多选 " + d + " 项";
                o.num.appendChild(c)
            }
        }, showAdvanced: function () {
            var b = a.sizzle("em", o.advancedBtn)[0];
            b.innerHTML = "d";
            a.core.dom.toggleClassName("ficon_arrow_up", "ficon_arrow_down");
            o.advanced.style.display = "";
            w = !0
        }, hideAdvanced: function () {
            var b = a.sizzle("em", o.advancedBtn)[0];
            b.innerHTML = "c";
            a.core.dom.toggleClassName("ficon_arrow_down", "ficon_arrow_up");
            o.advanced.style.display = "none";
            J.hideCalendar();
            w = !1
        }, toggleAdvanced: function () {
            w ? J.hideAdvanced() : J.showAdvanced()
        }, showCalendar: function () {
            E || (E = a.ui.calendar({start: u.startDate, end: u.endDate, currentDate: u.currentDate, callback: function (a, b) {
                o.date_select.value = a;
                E.hide()
            }}));
            E.show(o.date_select)
        }, hideCalendar: function () {
            E && E.hide()
        }, lastDeadline: function () {
            t != o.deadline.value && o.deadline.value != "modify" && (t = o.deadline.value)
        }, showDeadline: function () {
            u.startDate = i();
            u.endDate = i((Math.round(+(new Date) / 1e3) + H.maintain * 86400) * 1e3);
            switch (t) {
                case"1 week":
                    u.currentDate = i((Math.round(+(new Date) / 1e3) + 604800) * 1e3);
                    break;
                case"1 month":
                    u.currentDate = i((Math.round(+(new Date) / 1e3) + 2592e3) * 1e3);
                    break;
                case".5 year":
                    u.currentDate = i((Math.round(+(new Date) / 1e3) + 15724800) * 1e3);
                    break;
                case"1 year":
                    u.currentDate = i((Math.round(+(new Date) / 1e3) + 31536e3) * 1e3);
                    break;
                default:
                    u.currentDate = i((Math.round(+(new Date) / 1e3) + 604800) * 1e3)
            }
            o.date_select.value = u.currentDate;
            a.sizzle("[name=hours]", o.modify)[0].value = h("H");
            a.sizzle("[name=minutes]", o.modify)[0].value = h("I");
            o.modify.style.display = ""
        }, hideDeadline: function () {
            o.modify.style.display = "none"
        }, toggleDeadline: function () {
            J.lastDeadline();
            o.deadline.value == "modify" ? J.showDeadline() : J.hideDeadline()
        }, resetDeadline: function () {
            J.hideDeadline();
            t = "1 week";
            o.deadline.value = a.sizzle("option", o.deadline)[0].value
        }, showInfo: function () {
            o.info.style.height = "100px"
        }, hideInfo: function () {
            o.info.value = a.core.str.trim(o.info.value);
            o.info.value == "" && (o.info.style.height = "")
        }, getFormData: function () {
            var b = !0, c = J.getDeadline(), e = J.getTitle();
            if (!e) {
                o.titleTips.innerHTML = k.TITLE.EMPTY;
                if (b) {
                    a.core.util.scrollTo(o.titleTips, {step: 10});
                    o.title.focus();
                    d(o.title)
                }
                b &= !1
            }
            var f = J.getItemsFormData();
            if (!f) {
                o.itemsTips.innerHTML = k.ITEMS.LESS;
                b && a.core.util.scrollTo(o.titleTips, {step: 10});
                b &= !1
            }
            if (z) {
                var g = J.getSecode();
                if (!g) {
                    o.secodeTips.innerHTML = k.SECODE.EMPTY;
                    if (b) {
                        o.secode.focus();
                        d(o.secode)
                    }
                    b &= !1
                }
                c.secode = g
            }
            if (!!b) {
                c.title = e;
                c.items = f;
                c.vote_result = J.getVoteResult();
                c.num = o.num.value;
                c.pid = K.getPid();
                c.info = a.core.str.trim(o.info.value);
                c.poll_category = I;
                return c
            }
        }, submit: function () {
            if (!x) {
                x = !0;
                p = J.getFormData();
                if (!p) {
                    x = !1;
                    return
                }
                a.addClassName(o.submitBtn, "W_btn_a_disable");
                o.submitBtn.innerHTML = b('<i class="W_loading"></i>#L{提交中}');
                a.conf.trans.vote.request("add", {onComplete: J.handle}, p)
            }
        }, handle: function (e) {
            a.removeClassName(o.submitBtn, "W_btn_a_disable");
            o.submitBtn.innerHTML = b("#L{发起}");
            if (e.code == "100000")a.ui.tipAlert(k.SUBMIT.SUCCESS).beside(o.submitBtn).on("hide", function () {
                a.custEvent.fire(l, "insert", c(k.EDITOR, {TITLE: p.title, SHORTURL: e.data.short_url}));
                x = !1;
                J.hide()
            }); else {
                if (e.code == "100024") {
                    z = !0;
                    A = e.data.url;
                    x = !1
                } else if (e.code == "100025") {
                    o.secodeTips.innerHTML = k.SECODE.ERROR;
                    d(o.secode);
                    x = !1
                } else if (e.code == "100026") {
                    z = !1;
                    a.ui.tipAlert(e.msg, {icon: "warnS"}).beside(o.submitBtn).on("hide", function () {
                        x = !1
                    })
                } else if (e.code == "100030") {
                    o.itemsTips.innerHTML = c(k.SUBMIT.ERROR, {MESSAGE: e.msg});
                    x = !1
                } else {
                    a.lib.dialog.ioError(e.code, e);
                    x = !1
                }
                J.secodeReflush()
            }
        }};
        J.normal = function () {
            return function () {
                I = 0;
                var b = {addItems: function (b) {
                    H.itemMax <= v + b && (b = H.itemMax - v);
                    if (b > 0) {
                        for (var d = 0; d < b; d++)o.items.appendChild(a.core.dom.builder(c(k.ITEM, {NUMBER: v++ + 1 + "."})).box.firstChild);
                        setTimeout(function () {
                            a.sizzle("input", o.items).pop().focus()
                        }, 0)
                    }
                }, removeItem: function (b) {
                    a.core.dom.removeNode(a.core.dom.dir.parent(b, {expr: "[node-type=vote_item]"})[0]);
                    v--
                }, getItemsData: function () {
                    var b = [], c = a.sizzle('input[action-type="item"]', o.items), d;
                    for (var e in c) {
                        d = c[e].value;
                        !!d && b.push(d)
                    }
                    return b
                }, getItemsFormData: function () {
                    var a = b.getItemsData();
                    return a.length >= H.itemMinActive ? a.join(",") : ""
                }, destroy: function () {
                }};
                return b
            }
        }();
        J.picture = function () {
            return function () {
                I = 1;
                var b = 0, d = {addItems: function (d) {
                    H.itemMax <= v + d && (d = H.itemMax - v);
                    if (d > 0) {
                        var e, f, g;
                        for (var h = 0; h < d; h++) {
                            e = a.core.dom.builder(c(k.ITEM_PIC, {NUMBER: v++ + 1 + "."}));
                            f = e.box.firstChild;
                            g = a.lib.kit.dom.parseDOM(e.list);
                            o.items.appendChild(f);
                            a.pl.setting.uploadPic(f, {start: function (c) {
                                return function () {
                                    c.pic_placeholder.style.display = "none";
                                    c.pic.style.display = "none";
                                    c.pic_loading.style.display = "";
                                    c.pic.setAttribute("last", c.pic.getAttribute("src"));
                                    a.setStyle(c.ruTips, "visibility", "hidden");
                                    b++
                                }
                            }(g), err: null, complete: function (c) {
                                return function (d) {
                                    c.pic_placeholder.style.display = "none";
                                    c.pic_loading.style.display = "none";
                                    c.pic.style.display = "";
                                    if (d.pid) {
                                        c.pic.setAttribute("src", a.lib.kit.extra.imageURL(d.pid, {size: "square"}));
                                        c.pic.setAttribute("pid", d.pid);
                                        c.tips.innerHTML = ""
                                    } else if (d.ret && d.ret < 0) {
                                        c.pic.setAttribute("src", c.pic.getAttribute("last"));
                                        d.ret == "-4" || d.ret == "-9" || d.ret == "-10" ? c.tips.innerHTML = k.PICTUREUPLOAD.ERRORSIZE : c.tips.innerHTML = a.lib.image.imgUploadCode(d.ret)
                                    }
                                    a.setStyle(c.ruTips, "visibility", "visible");
                                    b--
                                }
                            }(g)})
                        }
                        setTimeout(function () {
                            a.sizzle("input", o.items).pop().focus()
                        }, 0)
                    }
                }, removeItem: function (b) {
                    a.core.dom.removeNode(a.core.dom.dir.parent(b, {expr: "[node-type=vote_item]"})[0]);
                    v--
                }, getItemsData: function () {
                    var b = [], c = a.sizzle(".option_pic", o.items), d, e, f;
                    for (var g in c) {
                        f = {};
                        e = a.sizzle('img[node-type="pic"]', c[g])[0].getAttribute("pid");
                        d = a.sizzle('input[action-type="item"]', c[g])[0].value;
                        e && (f.pid = e);
                        d && (f.content = d);
                        (e || d) && (b = b.concat([f]))
                    }
                    return b
                }, getItemsFormData: function () {
                    var b = d.getItemsData();
                    return b.length >= H.itemMinActive ? a.core.json.jsonToStr(b) : ""
                }, canBeClose: function () {
                    b > 0 ? q.stopBoxClose() : q.startBoxClose()
                }, destroy: function () {
                }};
                return d
            }
        }();
        var K = {img: {}, pictureInUploading: !1, init: function () {
            var b = a.sizzle("[node-type=pictureArea_pic]", o.pictureArea);
            o.pictureAreaItems = {upload: b[0], uploading: b[1], uploaded: b[2]};
            K.bind()
        }, enable: function () {
            K.show.upload();
            o.pictureArea.style.display = "";
            o.desc.className = "seniorpic"
        }, disable: function () {
            o.pictureArea.style.display = "none";
            K.stopUpload();
            K.hideAll();
            o.desc.className = "seniortxt"
        }, hideAll: function () {
            for (var a in o.pictureAreaItems)o.pictureAreaItems[a].style.display = "none"
        }, show: {upload: function () {
            K.img = {};
            K.hideAll();
            o.pictureAreaItems.upload.style.display = ""
        }, uploading: function () {
            K.hideAll();
            o.pictureAreaItems.uploading.style.display = ""
        }, uploadfail: function () {
            K.hideAll();
            o.pictureAreaItems.upload.style.display = ""
        }, uploaded: function () {
            K.hideAll();
            o.pictureAreaItems.uploaded.style.display = "";
            a.sizzle("img", o.pictureAreaItems.uploaded)[0].src = K.img.url
        }}, startUpload: function () {
            K.pictureInUploading = !0;
            q.stopBoxClose();
            K.show.uploading()
        }, upload: function () {
            if (!K.pictureInUploading) {
                K.img.name = a.core.str.trim(a.sizzle("input", o.fileBtn)[0].value);
                if (K.img.name === "")return;
                var b = K.img.name.split("\\");
                b.length > 1 && (K.img.name = b[b.length - 1]);
                b = null;
                K.startUpload();
                f = new Date;
                a.core.io.ijax({url: "http://picupload.service.weibo.com/interface/pic_upload.php", form: a.E("vote_picture_upload"), abaurl: "http://" + document.domain + "/aj/static/upimgback.html?_wv=5", abakey: "cb", onComplete: K.uploadHandle, onTimeout: K.uploadHandle, args: {marks: 1, app: "miniblog", s: "rdxt", nick: "@" + $CONFIG.nick, logo: 1, url: "vote.weibo.com"}})
            }
        }, uploadHandle: function (b) {
            if (b && b.ret && b.ret >= 0) {
                K.uploadSuccess(b);
                var c = new Date - f;
                e.sendSucc({pids: b.pid, ret: b.ret, app: "1001", el: c, ct: "1"})
            } else {
                b && b.ret && b.ret < 0 && (b.ret == "-4" || b.ret == "-9" || b.ret == "-10" ? o.updateImageTips.innerHTML = k.PICTUREUPLOAD.ERRORSIZE : o.updateImageTips.innerHTML = a.lib.image.imgUploadCode(b.ret));
                b ? e.sendError({ret: b.ret, app: "1001"}) : e.sendError({ret: "none", app: "1001"});
                K.uploadFailed()
            }
        }, stopUpload: function () {
            q.startBoxClose();
            a.removeEvent(a.sizzle("input", o.fileBtn)[0], "change", K.upload);
            o.fileBtn.innerHTML = "";
            setTimeout(function () {
                o.fileBtn.innerHTML = k.ADVANCED.PICUPLOADINPUT;
                a.addEvent(a.sizzle("input", o.fileBtn)[0], "change", K.upload);
                K.pictureInUploading = !1
            }, 0)
        }, uploadFailed: function () {
            K.stopUpload();
            K.show.uploadfail()
        }, uploadSuccess: function (b) {
            K.stopUpload();
            K.img.pid = b.pid;
            K.img.url = a.lib.kit.extra.imageURL(K.img.pid);
            K.show.uploaded()
        }, getPid: function () {
            return K.img.pid ? K.img.pid : ""
        }, viewThumbnail: function (b) {
            if (!r) {
                r = a.ui.mod.layer(k.ADVANCED.PICUPLOADTHUMBFRAME);
                o.vote.appendChild(r.getOuter())
            }
            var d = r.getOuter(), e = a.core.dom.position(o.picturePreview), f = a.core.dom.getSize(o.picturePreview);
            a.core.dom.setXY(d, {t: e.t + f.height + 3, l: e.l - 5});
            r.html(c(k.ADVANCED.PICUPLOADTHUMBNAIL, {URL: K.img.url}));
            r.show()
        }, closeThumbnail: function () {
            r.hide()
        }, bind: function () {
            s.pictureUploadfail = a.core.evt.delegatedEvent(o.pictureArea);
            s.pictureUploadfail.add("cancel", "click", function () {
                K.stopUpload();
                K.show.upload()
            });
            a.addEvent(a.sizzle("input", o.fileBtn)[0], "change", K.upload);
            a.addEvent(o.picturePreview, "mouseover", K.viewThumbnail);
            a.addEvent(o.picturePreview, "mouseout", K.closeThumbnail)
        }}, L = function () {
            E && E.destroy && E.destroy();
            J.stopLsn();
            l = null;
            J = null;
            K = null
        }, M = function () {
            a.custEvent.define(l, "hide");
            a.custEvent.add(l, "hide", J.hide);
            q.on("hidden", function () {
                E && E.hide && E.hide();
                q && q.destroy && q.destroy()
            })
        };
        l.destroy = L;
        return function (b, c) {
            var d = function () {
                H = a.parseParam(H, c);
                q = a.ui.bubble(k.FRAME, {showWithAni: "fadeInDown:fast", hideWithAni: "fadeOutUp:fast", clickBlankToHide: !0, showWithSetWidth: !1});
                n = q.getBox();
                o = q.getDomList(!0);
                M();
                J.init();
                q.show().setArrow("top").setAlignPos(b, c.refer);
                D = !0
            };
            d();
            l.layer = q;
            return l
        }
    });
    STK.register("lib.publisher.widget.vote", function (a) {
        return function (b) {
            var c = {}, d, e, f = function (a, d) {
                var e = b.API.getCurrentLogType();
                b.API.addShortUrlLog(e);
                b.API.insertText(d);
                c.hide()
            }, g = !1, h = function (b, c) {
                g = !1;
                d = a.lib.vote.publishVoteBubble(b, c);
                i()
            }, i = function () {
                a.custEvent.define(d, "insert");
                a.custEvent.add(d, "insert", f);
                a.custEvent.add(b, "close", c.hide);
                d.layer.on("hide", function () {
                    a.custEvent.remove(d, "insert", f);
                    a.custEvent.remove(b, "close", c.hide)
                })
            }, j = function () {
                a.core.evt.preventDefault();
                if (!g) {
                    g = !0;
                    var c, d = a.fixEvent(a.getEvent()).target;
                    a.contains(b.nodeList.widget, d) ? c = d : c = b.nodeList.more;
                    h(c, {itemMin: 2, defaultItem: 2, refer: b.nodeList.textEl})
                }
            };
            c.init = function (c, d, f) {
                b = c;
                e = d;
                a.addEvent(b.nodeList[e], "click", j)
            };
            c.clear = function () {
            };
            c.show = j;
            c.hide = function () {
                a.custEvent.fire(d, "hide")
            };
            c.destroy = function () {
                b = null;
                a.custEvent.remove(d, "insert")
            };
            return c
        }
    });
    STK.register("conf.trans.topic", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("getTopic", {url: "/aj/v6/mblog/trend"});
        return b
    });
    STK.register("lib.topic.publishTopicBubble", function (a) {
        var b = a.lib.kit.extra.language, c = b('<div class="W_layer W_layer_pop"><div class="content"><div class="W_layer_title"><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div></div><div class="layer_send_topic"><div class="layer_send_btn clearfix"><ul class="clearfix"><li class="S_line2 li_s3"><a href="javascript:void(0);" action-type="blank_topic" action-data="text=##L{在这里输入你想要说的话题}#" class="W_btn_l"><span class="btn_45px"><em class="W_ficon ficon_add_topic S_ficon">Î</em>#L{插入话题}</span></a></li></ul></div><div class="topic_box"><div class="tit">#L{热门推荐}：</div><ul class="topic_ul clearfix" node-type="topic_list"></ul></div></div><div class="W_layer_arrow"><span node-type="arrow" class="W_arrow_bor"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div>'), d, e, f, g, h, i = {}, j = function () {
            f = a.ui.bubble(c, {showWithAni: "fadeInDown:fast", hideWithAni: "fadeOutUp:fast", clickBlankToHide: !0, showWithSetWidth: !1});
            d = f.getDomList(!0);
            g = f.getBox();
            h = d.topic_list;
            n();
            var b = a.conf.trans.topic.request("getTopic", {onComplete: function (a, b) {
                l(a.data)
            }}, {})
        }, k = function () {
            j();
            m.add();
            a.custEvent.add(f, "hidden", function (b) {
                return function () {
                    a.custEvent.remove(b, "hidden", arguments.callee);
                    m.destroy();
                    b && b.destroy && b.destroy()
                }
            }(f))
        }, l = function (a) {
            h.innerHTML = a
        }, m = {add: function () {
            a.custEvent.add(i, "hide", function () {
                f.hide()
            })
        }, destroy: function () {
            a.custEvent.remove(i, "blank_topic");
            a.custEvent.remove(i, "hide");
            a.custEvent.remove(i, "insert")
        }}, n = function () {
            a.custEvent.define(i, "blank_topic");
            a.custEvent.define(i, "insert");
            a.custEvent.define(i, "hide");
            var b = STK.core.evt.delegatedEvent(g);
            b.add("add_topic", "click", function (b) {
                a.preventDefault(b.evt);
                a.custEvent.fire(i, "insert", {value: b.data.text})
            });
            b.add("blank_topic", "click", function (b) {
                a.preventDefault(b.evt);
                a.custEvent.fire(i, "blank_topic", {value: b.data.text})
            })
        };
        i.getBub = function () {
            return f
        };
        return function (b, c) {
            if (!a.isNode(b))throw"common.bubble.topic need el as first parameter!";
            k();
            f.show().setArrow("top").setAlignPos(b, c.refer);
            return i
        }
    });
    STK.register("lib.publisher.widget.topic", function (a) {
        return function (b) {
            var c = {}, d, e, f = !1, g = a.lib.kit.extra.textareaUtils, h = {text: "#在这里输入你想要说的话题#"}, i = function (a, d) {
                b.API.insertText(d.value);
                c.hide()
            }, j = function (a, d) {
                var e = d.value, f = b.nodeList.textEl, h = f.value, i = e.length;
                if (h.indexOf(e) != -1) {
                    var j = h.indexOf(e);
                    g.setCursor(f, j + 1 + i)
                } else {
                    b.API.insertText(e + " ");
                    var k = g.getCursorPos(f);
                    g.setCursor(f, k)
                }
                c.hide();
                var l = b.API.getCurrentLogType();
                b.API.addShortUrlLog(l)
            }, k = function (a, d) {
                var e = g.getSelectedText(b.nodeList.textEl), f = e.length * 1;
                if (f == 0 || h.text.indexOf(e) > -1)j(a, d); else {
                    var i = "#" + e + "#";
                    g.replaceText(b.nodeList.textEl, i);
                    c.hide()
                }
            }, l = function () {
                a.custEvent.add(d, "insert", j);
                a.custEvent.add(d, "blank_topic", k);
                a.custEvent.add(b, "close", c.hide);
                a.custEvent.add(d, "hide", function () {
                    a.custEvent.remove(d, "blank_topic");
                    a.custEvent.remove(d, "hide", arguments.callee);
                    a.custEvent.remove(d, "insert");
                    a.custEvent.remove(b, "close")
                })
            }, m = function () {
                a.core.evt.preventDefault();
                var c, e = a.fixEvent(a.getEvent()).target;
                a.contains(b.nodeList.widget, e) ? c = e : c = b.nodeList.more;
                d = a.lib.topic.publishTopicBubble(c, {refer: b.nodeList.textEl});
                f || l()
            };
            c.init = function (c, d, f) {
                b = c;
                e = d;
                a.addEvent(c.nodeList[e], "click", m)
            };
            c.clear = function () {
            };
            c.show = m;
            c.hide = function () {
                d && d.getBub().hide()
            };
            c.destroy = function () {
                b = null
            };
            return c
        }
    });
    STK.register("widget.module.component", function (a) {
        return function () {
            var b = {};
            b.initParam = a.core.func.empty;
            b.initEvent = a.core.func.empty;
            b.destroyParam = a.core.func.empty;
            b.destroyEvent = a.core.func.empty;
            b.init = function () {
                b.initParam();
                b.initEvent()
            };
            b.destroy = function () {
                b.destroyEvent();
                b.destroyParam()
            };
            return b
        }
    });
    STK.register("widget.parse", function (a) {
        var b = "http://js.t.sinajs.cn/t5/page/js/", c = "STK.", d = ["destroy", "part_destroy", "part_flush"], e = 1, f = typeof $CONFIG == "undefined" ? e : $CONFIG.version;
        return function (e, g) {
            var h = a.widget.module.component(), i = a.core.obj.sup(h, ["init", "destroy"]), j = {}, k, l;
            h.handler = {getMethod: function (b) {
                b = b.split(".");
                var c, d = a.namespace();
                while (c = b.shift())if (!(d = d[c]))break;
                return d
            }, extract: function (a) {
                var b = h.handler.getMethod(a.ns);
                if (b) {
                    j[a.uniqueID] = {info: a, entity: b(a)};
                    j[a.uniqueID].entity.init()
                }
            }, getDomInfo: function (b) {
                return{dom: b, top: h.entity.dom, ns: b.getAttribute("component"), uniqueID: a.core.dom.uniqueID(b), data: a.queryToJson(b.getAttribute("component-data") || ""), param: a.queryToJson(b.getAttribute("component-param") || "")}
            }, loadComponent: function (b) {
                var c = h.handler.getDomInfo(b), d = [
                    {url: [k.baseURL, c.ns.replace(/\./g, "/"), ".js?version=", f].join(""), NS: k.baseNS + c.ns}
                ];
                a.core.io.require(d, h.handler.extract, c)
            }};
            h.accept = {partDestroy: function (b, c) {
                var d = c.dom;
                for (var e in j)if (a.contains(d, j[e].info.dom)) {
                    j[e].entity.destroy();
                    delete j[e].info;
                    delete j[e].entity;
                    delete j[e]
                }
            }, partFlush: function (b, c) {
                a.foreach(a.sizzle("[component]", c.dom), h.handler.loadComponent)
            }};
            h.initParam = function () {
                h.entity = {dom: e};
                l = a.custEvent.define(h.entity.dom, d);
                k = a.parseParam({baseURL: b, baseNS: c}, g);
                j = {}
            };
            h.destroyParam = function () {
                k = null;
                j = null
            };
            h.initEvent = function () {
                a.custEvent.add(l, "part_destroy", h.accept.partDestroy);
                a.custEvent.add(l, "part_flush", h.accept.partFlush)
            };
            h.destroyEvent = function () {
                a.custEvent.remove(l, "part_destroy", h.accept.partDestroy);
                a.custEvent.remove(l, "part_flush", h.accept.partFlush)
            };
            h.destroy = function () {
                for (var a in j) {
                    j[a].entity.destroy();
                    delete j[a].info;
                    delete j[a].entity;
                    delete j[a]
                }
                i.destroy()
            };
            h.init = function () {
                i.init();
                a.foreach(a.sizzle("[component]", h.entity.dom), h.handler.loadComponent)
            };
            return h
        }
    });
    STK.register("lib.sandbox.publishPluginBubble", function (a) {
        var b = {}, c = a.lib.kit.extra.language, d = '<div class="W_layer W_layer_pop"><div class="content"><div class="W_layer_title"><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div></div><div node-type="inner"></div><div class="W_layer_arrow"><span node-type="arrow" class="W_arrow_bor"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div>';
        return function (e) {
            var f = {}, g = function () {
                e.insert(arguments[0], arguments[1]);
                i.remove(b.ishow)
            }, h = 1, i = {add: function (a) {
                if (!b[a.id]) {
                    b[a.id] = {};
                    b[a.id].box = i.build(a)
                }
                b.ishow = a.id;
                return b[a.id]
            }, has: function (a) {
                return b[a.id]
            }, remove: function (c) {
                if (b[c]) {
                    a.custEvent.remove(b[c].layer.getInner(), "bridge", g);
                    try {
                        b[c].wbml.destroy && b[c].wbml.destroy()
                    } catch (d) {
                    }
                    try {
                        b[c].iframe.destroy && b[c].iframe.destroy()
                    } catch (d) {
                    }
                    b[c].box.destroy && b[c].box.destroy();
                    b[c].layer.destroy && b[c].layer.destroy();
                    var e = b[c].layer.getOuter();
                    e.parentNode.removeChild(e);
                    delete b[c]
                }
            }, build: function (f) {
                var i = a.ui.bubble(d, {showWithAni: "fadeInDown:fast", hideWithAni: "fadeOutUp:fast", clickBlankToHide: !0, showWithSetWidth: !1});
                h++;
                i.setContent(f.html).rebindClose();
                b[f.id].layer = i;
                var j = i.getDomList().inner;
                b[f.id].wbml = a.widget.parse(j);
                b[f.id].wbml.init();
                a.custEvent.define(j, "bridge");
                a.custEvent.add(j, "bridge", g);
                a.custEvent.once(i, "show", function () {
                    setTimeout(function () {
                        var d = a.builder(i.getBox()).list, g = d.iframe && d.iframe[0], h;
                        if (g) {
                            b[f.id].iframe = h = a.lib.connect.iframe(g);
                            h.on("insertIntoPublishTop", function (a, b, d, f) {
                                function g(a) {
                                    return typeof a == "string" || a && typeof a.substr == "function"
                                }

                                g(d) && (d = {text: d});
                                e.insert("这个值没有用", {text: d.text, tip: d.tip || c("#L{添加成功}")})
                            });
                            h.on("setHeight", function (a, b, c, d) {
                                b.style.height = c + "px"
                            });
                            h.on("setWidth", function (a, b, c, d) {
                                b.style.width = c + "px"
                            });
                            h.on("close", function (a, b, c, d) {
                                i.hide();
                                d("callback")
                            });
                            h.on("setTittle", function (b, c, d, e) {
                                var f = a.sizzle("div", i.getDomList().inner)[0] || null;
                                f && (f.innerHTML = d)
                            });
                            a.custEvent.add(i, "hide", function () {
                                h.trigger("close")
                            })
                        }
                    }, 10)
                });
                return i
            }, destroy: function () {
                for (var a in b)i.remove(a)
            }};
            f.layers = b;
            f.add = i.add;
            f.remove = i.remove;
            f.destroy = i.destroy;
            return f
        }
    });
    STK.register("lib.publisher.widget.plugin", function (a) {
        var b = a.conf.trans.publisher;
        return function (c, d) {
            d = a.parseParam({widget: c.nodeList.widget}, d || {});
            var e = {}, f, g, h, i = !1, j = {init: function () {
                f = a.delegatedEvent(d.widget);
                f.add("plugin", "click", j.show)
            }, show: function (b) {
                c.API.setCurrentLogType(b.data.log);
                a.preventDefault();
                if (!i) {
                    i = !0;
                    var d = a.fixEvent(a.getEvent()).target;
                    a.contains(c.nodeList.widget, d) ? h = d : h = c.nodeList.more;
                    j.asynShow(b)
                }
            }, asynShow: function (d) {
                i = !1;
                g || (g = a.lib.sandbox.publishPluginBubble({insert: j.insert}));
                var e = function () {
                    g.layers[f].layer.setArrow("top").show().setAlignPos(h, c.nodeList.textEl);
                    setTimeout(function () {
                        a.custEvent.add(c, "close", g.layers[f].layer.hide)
                    }, 0)
                }, f = d.data.type;
                g.layers[f] ? e() : b.request("interactive", {onSuccess: function (b) {
                    var c = a.lib.kit.extra.merge({html: b.data.html, id: f}, d.data);
                    g.add(c);
                    e()
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }}, d.data)
            }, insert: function (a, b) {
                var d = c.API.getCurrentLogType();
                c.API.addShortUrlLog(d);
                c.API.insertText(b.text)
            }};
            j.init();
            e.delegatedEvent = f;
            e.show = j.show;
            e.destroy = function () {
                f.destroy()
            };
            return e
        }
    });
    STK.register("conf.trans.image", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("recmodlayer", {url: "/aj/photo/recomlayer", method: "get"});
        c("waterfall", {url: "http://photo.weibo.com/page/waterfall", method: "get", varkey: "callback", requestMode: "jsonp"});
        c("recmodlayer_new", {url: "/aj/v6/photo/morepic", method: "get"});
        c("createTag", {url: "/aj/publishplug/bainian", method: "get"});
        c("showtip", {url: "/aj/bubble/checkshowbubble", method: "get"});
        c("hidetip", {url: "/aj/bubble/closebubble", method: "get"});
        c("followList", {url: "/aj/mblog/attention"});
        c("tagtopicList", {url: "/aj/photo/tag/recomtopic"});
        c("getTags", {url: "/aj/photo/tag/phototag"});
        c("viewTags", {url: "/aj/photo/tag/getphototag"});
        return b
    });
    STK.register("lib.image.multiimage.taglist", function (a) {
        var b = '<div style="position:absolute;z-index:10000;" class="layer_menu_list" node-type="layer_outer"><ul node-type="suggestWrap"></ul></div>', c = {"@": '<#et temp data><li class="suggest_title">${data.title}</li><#list data.data as list><li action-type="item" action-data="value=${list.screen_name}" value="${list.screen_name}" objid="1042:${list.uid}"><a href="javascript:;">${list.screen_name}<#if (list.remark)>(${list.remark})</#if></a></li><#if (list.count)><span>${list.count}</span></#if></#list></#et>', "#": '<#et temp data><li class="suggest_title">${data.title}</li><#list data.data as list><li action-type="item" suda-data="key=tblog_associate&value=list_${list_index+1}"action-data="value=${list.topic}" value="${list.topic}" objid="${list.object_id}"><a href="javascript:;">${list.topic}<#if (list.count)>(${list.count})</#if></a></li></#list></#et>'};
        return function (d, e) {
            var f = {}, g, h, i, j = a.lib.kit.extra.language, k = a.conf.trans.image, l = 0, m, n, o = a.parseParam({flag: "@"}, e), p = d.value, q = {"@": "followList", "#": "tagtopicList"}, r = {"@": {normalTitle: j("#L{选择昵称或轻敲空格完成输入}"), moreTitle: j("#L{选择最近@的人或直接输入}"), noTilte: j("#L{轻敲空格完成输入}"), tagTitle: j("#L{输入想要@的人并回车结束}")}, "#": {normalTitle: j("#L{想用什么话题？}"), tagTitle: j("#L{输入话题并回车结束}")}}, s = {rendHtml: function (b, d, e) {
                d.title = r[b].tagTitle;
                var f = a.core.util.easyTemplate(c[b], d);
                return f
            }, getList: function () {
                k.getTrans(q[o.flag], {onSuccess: function (b) {
                    var c = s.rendHtml(o.flag, b);
                    a.custEvent.fire(i, "open", d);
                    h.innerHTML = c
                }}).request({q: p});
                g.style.display = "";
                s.setPos(g)
            }, setPos: function (b) {
                var c = a.position(d);
                b.style.top = c.t + 30 + "px";
                b.style.left = c.l - 12 + "px";
                b.style.display = ""
            }, checkValue: function () {
                if (a.trim(d.value) != p) {
                    p = a.trim(d.value);
                    s.getList()
                }
            }}, t = function () {
                var c = a.core.dom.builder(b);
                g = c.list.layer_outer[0];
                document.body.appendChild(g);
                h = c.list.suggestWrap[0];
                i = a.ui.mod.suggest({textNode: d, uiNode: h, actionType: "item", actionData: "value"})
            }, u = {item: function () {
            }, blur: function () {
                clearInterval(n);
                n = null;
                setTimeout(function () {
                    a.custEvent.fire(i, "close")
                }, 200)
            }, focus: function () {
                s.getList();
                !n && (n = setInterval(function () {
                    s.checkValue()
                }, 200))
            }, enterkey: function (b) {
                if (!!a.trim(d.value)) {
                    a.custEvent.fire(f, "createTag", {content: d.value, flag: o.flag, tag_object_id: 0});
                    i && i.hide && i.hide();
                    d.value = "";
                    if (n) {
                        clearInterval(n);
                        n = null
                    }
                    g.style.display = "none";
                    a.preventDefault(b)
                }
            }, change: function () {
                var a = 30;
                o.flag == "#" && (a = 100);
                d.value != STK.core.str.leftB(d.value, a) && (d.value = STK.core.str.leftB(d.value, a))
            }}, v = function () {
                d.focus()
            }, w = function () {
                a.custEvent.define(f, ["createTag"]);
                a.custEvent.add(i, "onIndexChange", function (b, c) {
                    m = a.sizzle("li[class!=suggest_title]", h);
                    m && m[0] && a.core.dom.removeClassName(m[l], "cur");
                    a.core.dom.addClassName(m[c], "cur");
                    l = c
                });
                a.custEvent.add(i, "onSelect", function (b, c, e, h) {
                    if (c == -1)u.enterkey(); else {
                        l = 0;
                        if (m[0]) {
                            var i = m[c].getAttribute("value") + "", j = m[c].getAttribute("objid");
                            d.value = i
                        } else var i = d.value, j = 0;
                        d.value = "";
                        if (n) {
                            clearInterval(n);
                            n = null
                        }
                        g.style.display = "none";
                        a.custEvent.fire(f, "createTag", {content: i, flag: o.flag, tag_object_id: j})
                    }
                });
                a.custEvent.add(i, "onClose", function () {
                    if (n) {
                        clearInterval(n);
                        n = null
                    }
                    g.style.display = "none"
                });
                a.addEvent(d, "focus", u.focus);
                a.addEvent(d, "blur", u.blur);
                a.addEvent(d, "keydown", u.change);
                a.core.evt.hotKey.add(d, ["enter"], u.enterkey)
            }, x = function () {
                t();
                w()
            };
            x();
            f.show = v;
            f.destroy = function () {
                a.removeEvent(d, "focus", u.focus);
                a.removeEvent(d, "blur", u.blur);
                a.core.evt.hotKey.remove(d, ["enter"], u.enterkey);
                g.style.display = "none";
                i && i.destroy && i.destroy()
            };
            return f
        }
    });
    STK.register("lib.image.multiimage.hastags", function (a) {
        var b = {};
        return function () {
            return{add: function (a) {
                if (!!a) {
                    _tags = a.split(",");
                    for (var c in _tags)b[_tags[c]] = !0
                }
            }, check: function (a) {
                return!!b[a]
            }}
        }
    });
    STK.register("lib.image.multiimage.showtag", function (a) {
        var b = '<#et temp data><a  title="${data.content}" node-type="tag"  action-type="tag" <#if (data.url)>target="_blank" href="${data.url}" class="tag_showpic${data.offset}"<#else>href="javascript:void(0);" onclick="return false;" class="tag_showpic${data.offset}"</#if> style="left:${data.left}px;top:${data.top}px;white-space: nowrap;"><span <#if (data.tag_uid)>usercard="id=${data.tag_uid}"</#if> class="inner"><#if (data.flag == "#")><i class="codetag">#</i><em node-type="tagmove" class="txt W_autocut">${data.content}</em><i class="codetag">#</i></#if><#if (data.flag == "@")><i class="codetag">@</i><em <#if (data.tag_uid)>usercard="id=${data.tag_uid}"</#if> node-type="tagmove" class="txt W_autocut">${data.content}</em></#if><#if (data.isshow != 1)><span action-type="removeTag" class="W_ficon ficon_close S_ficon" title="关闭">X</span></span></a></#if></#et>', c = {};
        return function (d) {
            function m(b, c) {
                if (!b)return!1;
                var e, f = 0, g = b.getAttribute("src"), h = a.C("img");
                h.onload = function () {
                    e = setInterval(function () {
                        f++;
                        f > 50 && e && clearInterval(e);
                        b || e && clearInterval(e);
                        if (b.parentNode) {
                            e && clearInterval(e);
                            d.container = b.parentNode;
                            c && c()
                        }
                    }, 100)
                };
                g && (h.src = g)
            }

            function j(a, b) {
                if (typeof a != "string")return a;
                b && (a = a.replace(/\&/g, "&amp;"));
                return a.replace(/"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#39;").replace(/(\u0020|\u000B|\u2028|\u2029|\f)/g, "&#32;")
            }

            var e = {}, f = a.conf.trans.image, g = [], h = !0, i = function (a, b) {
                if (!a || a.type != "mouseout" && a.type != "mouseover")return!1;
                var c = a.relatedTarget ? a.relatedTarget : a.type == "mouseout" ? a.toElement : a.fromElement;
                while (c && c != b)c = c.parentNode;
                return c != b
            }, k = {getRPos: function (b, c, d) {
                var e = a.position(b), f = a.position(c), g = a.core.dom.getSize(c), h = {left: f.l - e.l + g.width * d.x - 5, top: f.t - e.t + g.height * d.y - 15};
                h = {left: h.left > 0 ? h.left : 0, top: h.top > 0 ? h.top : 0};
                h.offset = d.x > .5 ? "R" : "L";
                return h
            }, offsetTar: function (b, c) {
                if (c == "R") {
                    var d = a.core.dom.getSize(b);
                    b.style.marginLeft = 0 - d.width + 12 + "px"
                } else b.style.marginLeft = ""
            }, createTag: function (c, e) {
                if (!!h) {
                    var f = {};
                    for (var i in e)f[i] = e[i];
                    f.content = j(f.content);
                    var l = a.core.util.easyTemplate(b, f).toString(), m = a.lib.kit.dom.parseDOM(a.builder(l).list);
                    d.container.appendChild(m.tag);
                    k.offsetTar(m.tag, e.offset);
                    m.tag.setAttribute("tag-id", c);
                    g.push(m.tag);
                    d.from != "add" && a.addEvent(m.tag, "click", k.stopEvent)
                }
            }, fixData: function (b) {
                for (var c in b) {
                    var e = k.getRPos(d.container, d.img, {x: b[c].pos_x, y: b[c].pos_y});
                    e.flag = {user: "@", topic: "#"}[b[c].tag_type] || "@";
                    e.content = a.encodeHTML(b[c].tag_name);
                    e.url = b[c].url;
                    !d.fromLayer && e.flag == "@" && b[c].url && (e.tag_uid = b[c].tag_id.replace("1042:", ""));
                    e.isshow = 1;
                    k.createTag(c, e)
                }
                k.bindEvent()
            }, showtags: function (a) {
                if (!!i(a || window.event, d.container)) {
                    if (d.img.style.cssText.toLowerCase().indexOf("filter") != -1 && !d.fromLayer)return;
                    if (d.container != d.img.parentNode) {
                        k.hidetags();
                        return
                    }
                    for (var b in g)g[b].style.display = ""
                }
            }, hidetags: function (a) {
                if (!!i(a || window.event, d.container))for (var b in g)g[b].style.display = "none"
            }, bindEvent: function () {
                a.addEvent(d.container, "mouseover", k.showtags);
                a.addEvent(d.container, "mouseout", k.hidetags)
            }, removetags: function () {
                var b = a.sizzle('[node-type="tag"]', d.container);
                for (var c in b)b[c] && a.removeNode(b[c])
            }, stopEvent: function (b) {
                b = a.fixEvent(b);
                b.cancelBubble = !0;
                b.stopPropagation && b.stopPropagation()
            }}, l = function () {
            }, n = function () {
                if (!d.container) {
                    if (!d.img)return;
                    d.container = d.img.parentNode
                }
                if (!d.tags) {
                    if (c[d.postdata.pid]) {
                        m(d.img, function () {
                            k.fixData(c[d.postdata.pid])
                        });
                        return
                    }
                    if (!a.lib.image.multiimage.hastags().check(d.postdata.pid) && !d.fromLayer)return;
                    f.getTrans("viewTags", {onSuccess: function (a) {
                        for (var b in a.data) {
                            c[d.postdata.pid] = a.data[b].pic_tags;
                            m(d.img, function () {
                                k.fixData(a.data[b].pic_tags)
                            })
                        }
                    }, onError: function (a) {
                        c[d.postdata.pid] = []
                    }}).request(d.postdata)
                } else for (var b in d.tags)k.createTag(b, d.tags[b])
            };
            n();
            var o = function () {
                a.removeEvent(d.container, "mouseover", k.showtags);
                a.removeEvent(d.container, "mouseout", k.hidetags);
                k.hidetags();
                k.removetags();
                h = null;
                g = null
            };
            e.rend = l;
            e.destroy = o;
            return e
        }
    });
    STK.register("lib.image.multiimage.addtags", function (a) {
        var b = $CONFIG.imgPath, c = '<div node-type="box"><div class="layer_add_tag"><div class="W_layer_con_tit"><h1 class="W_f14 W_fb">添加标签：</h1><h2>点击图片添加标签，还可添加<em class="S_spetxt" node-type="tagsCount" >5</em>个标签</h2></div><div node-type="container" class="need_pic addtag_cur"><img node-type="target" src="' + b + 'style/images/common/loading.gif" alt="">' + '<span node-type="tag_menu" class="tag_addpic" style="display:none;z-index:10002;"><a href="javascript:;" action-type="at" class="inner_call" title="标出TA是谁">@</a><a href="javascript:;" action-type="topic" class="inner_topic" title="标出你想说的">#</a></span>' + '<a href="javascript:void(0);" node-type="topic" class="tag_editpicL" style="display:none;z-index:10002;">#<input type="text" node-type="topicinput" class="" value="">#</a>' + '<a href="javascript:void(0);" node-type="at"  class="tag_editpicL" style="display:none;z-index:10002;">@<input node-type="atinput" type="text" class="" value=""></a>' + "</div>" + "</div>" + '<div class="W_layer_btn S_bg1">' + '<a href="javascript:;" action-type="ok" class="W_btn_a btn_34px">确定</a>' + '<a href="javascript:;" action-type="cancle" class="W_btn_b btn_34px">取消</a>' + "</div>" + "</div>" + "", d = '<#et temp data><a node-type="tag" action-type="tag" href="javascript:void(0);" class="tag_showpic${data.offset}" style="left:${data.left}px;top:${data.top}px;white-space: nowrap;"><span class="inner"><#if (data.flag == "#")><i class="codetag">#</i><em node-type="tagmove" class="txt W_autocut">${data.content}</em><i class="codetag">#</i></#if><#if (data.flag == "@")><i class="codetag">@</i><em node-type="tagmove" class="txt W_autocut">${data.content}</em></#if><span action-type="removeTag" class="W_ficon ficon_close S_ficon" title="关闭">X</span></span></a></#et>';
        return function (b, e) {
            function t(a, b) {
                if (typeof a != "string")return a;
                b && (a = a.replace(/\&/g, "&amp;"));
                return a.replace(/"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#39;").replace(/(\u0020|\u000B|\u2028|\u2029|\f)/g, "&#32;")
            }

            var f = {}, g = a.conf.trans.image, h, i, j, k, l, m, n = {}, o = 5, p, q, r, s = {"#": "topic", "@": "user"}, u = {getRPos: function (b, c, d, e) {
                var f = a.position(b), g = a.position(c), h = a.core.dom.getSize(c);
                if (e) {
                    var i = {x: ((parseInt(d.left) + 5 - parseInt(g.l) + parseInt(f.l)) / h.width).toFixed(2), y: ((parseInt(d.top) + 15 - g.t + f.t) / h.height).toFixed(2)};
                    i.offset = i.x > .5 ? "R" : "L"
                } else {
                    var i = {left: g.l - f.l + h.width * d.x - 5, top: g.t - f.t + h.height * d.y - 15};
                    i = {left: i.left > 0 ? i.left : 0, top: i.top > 0 ? i.top : 0};
                    i.offset = d.x > .5 ? "R" : "L"
                }
                return i
            }, panelHide: function () {
                i.at.style.display = "none";
                i.tag_menu.style.display = "none";
                i.topic.style.display = "none"
            }, offsetTar: function (b, c) {
                if (c == "R") {
                    b.style.marginLeft = "-1000px";
                    var d = a.core.dom.getSize(b);
                    b.style.marginLeft = 0 - d.width + 12 + "px"
                } else b.style.marginLeft = ""
            }, createTag: function (b, c) {
                var e = a.queryToJson(i.tag_menu.getAttribute("action-data"));
                e.content = c.content || "";
                e.tag = e.content;
                e.flag = c.flag;
                e.tag_type = s[c.flag];
                e.pos = {x: e.x, y: e.y};
                e.tag_object_id = c.tag_object_id;
                var f = {};
                for (var g in e)f[g] = e[g];
                f.content = t(f.content);
                var h = a.core.util.easyTemplate(d, f).toString(), j = a.lib.kit.dom.parseDOM(a.builder(h).list);
                u.panelHide();
                i.container.appendChild(j.tag);
                u.offsetTar(j.tag, e.offset);
                var k = "tag_" + a.getUniqueKey();
                j.tag.setAttribute("tag-id", k);
                n[k] = e;
                u.getTagsCount()
            }, resetTagPos: function (b) {
                var c = b.getAttribute("tag-id");
                n[c].left = b.style.left.replace("px", "");
                n[c].top = b.style.top.replace("px", "");
                var e = a.core.dom.getSize(i.target), f = u.getRPos(i.container, i.target, n[c], !0);
                n[c].x = f.x;
                n[c].y = f.y;
                n[c].offset = f.offset;
                n[c].pos = {x: n[c].x, y: n[c].y};
                var g = a.core.util.easyTemplate(d, n[c]).toString(), h = a.lib.kit.dom.parseDOM(a.builder(g).list);
                u.panelHide();
                i.container.appendChild(h.tag);
                u.offsetTar(h.tag, n[c].offset);
                h.tag.setAttribute("tag-id", c);
                a.removeNode(b);
                u.getTagsCount()
            }, setTags: function (b) {
                a.custEvent.fire(f, "setTags", [n, b])
            }, getTagsCount: function () {
                var a = 0;
                for (var b in n)a++;
                i.tagsCount.innerHTML = o - a;
                return a
            }}, p = function () {
                var b = {}, c = null, d, e, f = function (a) {
                    return a == document.body ? null : a.getAttribute("node-type") == "tagmove" ? a : arguments.callee(a.parentNode)
                }, g = {mousedown: function (b) {
                    var b = a.fixEvent(b), g = f(b.target);
                    if (!g)return!0;
                    c = a.core.dom.dir(g, {dir: "parent", expr: '[node-type="tag"]'})[0];
                    d = {x: b.clientX, y: b.clientY};
                    e = {x: parseInt(c.style.left.replace("px", "")), y: parseInt(c.style.top.replace("px", ""))};
                    a.preventDefault(b)
                }, mousemove: function (b) {
                    var b = a.fixEvent(b);
                    if (!c)return!0;
                    var f = e.x + parseInt(b.clientX - d.x), g = e.y + parseInt(b.clientY - d.y);
                    !q && (q = a.core.dom.getSize(i.target));
                    !r && (r = a.core.dom.getSize(i.container));
                    f = f < r.width / 2 - q.width / 2 ? r.width / 2 - q.width / 2 : f;
                    g = g < r.height / 2 - q.height / 2 ? r.height / 2 - q.height / 2 : g;
                    f = f > r.width / 2 + q.width / 2 - 12 ? r.width / 2 + q.width / 2 - 12 : f;
                    g = g > q.height - 20 ? q.height - 20 : g;
                    c.style.left = f + "px";
                    c.style.top = g + "px";
                    a.preventDefault(b)
                }, mouseup: function (b) {
                    var b = a.fixEvent(b);
                    if (!c)return!0;
                    u.resetTagPos(c);
                    c = null;
                    a.preventDefault(b)
                }}, h = function () {
                    a.addEvent(document.body, "mousedown", g.mousedown);
                    a.addEvent(document.body, "mousemove", g.mousemove);
                    a.addEvent(document.body, "mouseup", g.mouseup)
                };
                h();
                b.destroy = function () {
                    a.removeEvent(document.body, "mousedown", g.mousedown);
                    a.removeEvent(document.body, "mousemove", g.mousemove);
                    a.removeEvent(document.body, "mouseup", g.mouseup)
                };
                return b
            }, v = {topic: function () {
                var b = a.queryToJson(i.tag_menu.getAttribute("action-data"));
                i.topic.style.left = b.left + "px";
                i.topic.style.top = b.top + "px";
                i.topic.className = "tag_editpic" + b.offset;
                u.offsetTar(i.topic, b.offset);
                u.panelHide();
                i.topic.style.display = "";
                if (!m) {
                    m = a.lib.image.multiimage.taglist(i.topicinput, {flag: "#"});
                    a.custEvent.add(m, "createTag", u.createTag)
                }
                m.show()
            }, at: function (b) {
                var c = a.queryToJson(i.tag_menu.getAttribute("action-data"));
                i.at.style.left = c.left + "px";
                i.at.style.top = c.top + "px";
                i.at.className = "tag_editpic" + c.offset;
                u.offsetTar(i.at, c.offset);
                u.panelHide();
                i.at.style.display = "";
                if (!l) {
                    l = a.lib.image.multiimage.taglist(i.atinput, {flag: "@"});
                    a.custEvent.add(l, "createTag", u.createTag)
                }
                l.show()
            }, tapimg: function (b) {
                b = a.fixEvent(b);
                if (!(u.getTagsCount() >= o)) {
                    var c = a.position(b.target);
                    q = a.core.dom.getSize(b.target);
                    var d = {x: ((b.pageX - c.l + 11) / q.width).toFixed(2), y: ((b.pageY - c.t + 2) / q.height).toFixed(2)}, e = u.getRPos(i.container, i.target, d);
                    e.x = d.x;
                    e.y = d.y;
                    i.tag_menu.style.left = e.left + "px";
                    i.tag_menu.style.top = e.top + "px";
                    i.tag_menu.className = "tag_addpic" + e.offset;
                    u.offsetTar(i.tag_menu, e.offset);
                    i.tag_menu.setAttribute("action-data", a.jsonToQuery(e));
                    u.panelHide();
                    i.tag_menu.style.display = "";
                    m && m.hide && m.hide();
                    l && l.hide && l.hide();
                    r = a.core.dom.getSize(i.container)
                }
            }, cancle: function () {
                k.hide();
                B()
            }, removeTag: function (b) {
                var c = a.core.dom.dir(b.el, {dir: "parent", expr: '[node-type="tag"]'})[0], d = c.getAttribute("tag-id");
                delete n[d];
                a.removeNode(c);
                u.getTagsCount();
                return!1
            }, tag: function (a) {
                i.container.appendChild(a.el)
            }, ok: function (b) {
                var c = {};
                c[e.pid] = [];
                for (var d in n) {
                    var f = a.parseParam({tag: "", tag_type: "", tag_object_id: "", pos: {}}, n[d]);
                    c[e.pid].push(f)
                }
                if (!c[e.pid][0]) {
                    u.setTags(c);
                    z()
                } else {
                    var h = {photo_tag: encodeURIComponent(a.jsonToStr(c))};
                    g.getTrans("getTags", {onSuccess: function (a) {
                        u.setTags(a.data);
                        z()
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}).request(h)
                }
            }, close: function (b) {
                u.getTagsCount() < 1 ? z() : a.ui.tipConfirm("是否保存编辑过的标签？").ok(function () {
                    v.ok()
                }).cancel(function () {
                }).beside(b.el, {pos: "bottom-middle"})
            }}, w = function () {
                j.add("at", "click", v.at);
                j.add("topic", "click", v.topic);
                j.add("cancle", "click", v.cancle);
                j.add("removeTag", "click", v.removeTag);
                j.add("tag", "click", v.tag);
                j.add("ok", "click", v.ok);
                j.add("close", "click", v.close);
                a.addEvent(i.target, "click", v.tapimg);
                a.custEvent.define(f, ["setTags"]);
                p = p();
                k.on("hide", function () {
                    p.destroy()
                })
            }, x = function () {
                h = a.core.dom.builder(c);
                i = a.lib.kit.dom.parseDOM(h.list);
                !k && (k = a.ui.bubble());
                k.setContent("");
                k.setContent(i.box);
                j = a.core.evt.delegatedEvent(k.getOuter());
                k.getDomList().close.parentNode.innerHTML = '<a href="javascript:void(0)" action-type="close" class="W_ficon ficon_close S_ficon">X</a>'
            }, y = function (c, d) {
                var f = a.lib.kit.extra.imageURL(c, {size: "bmiddle"});
                i.target.setAttribute("src", f);
                k.setArrow("top").setAlignPos(b, e.refer, e);
                k.getOuter().style.zIndex = 1e4;
                k.stopBoxClose()
            }, z = function () {
                k.hide()
            }, A = function () {
                x();
                w();
                y(e.pid);
                if (e.tags) {
                    var b = e.tags.split("|");
                    for (var c in b) {
                        var d = a.getUniqueKey();
                        n[d] = a.queryToJson(b[c]);
                        n[d].pos = {x: n[d].x, y: n[d].y}
                    }
                    a.lib.image.multiimage.showtag({container: i.container, img: i.img, tags: n, from: "add"});
                    u.getTagsCount()
                }
            };
            A();
            var B = function () {
                a.removeEvent(i.target, "click", v.tapimg);
                j.remove("at", "click", v.at);
                j.remove("topic", "click", v.topic);
                j.remove("cancle", "click", v.cancle);
                m && m.destroy();
                l && l.destroy();
                k.hide();
                k.destroy();
                p && p.destroy();
                f = null
            };
            f.show = y;
            f.hide = z;
            f.destroy = B;
            return f
        }
    });
    STK.register("lib.image.multiimage.dragRank", function (a) {
        return function (b) {
            var c = b.preList, d = {}, e = [], f = [], g = {}, h = !1, i, j, k, l, m, n = !1, o = !1, p = {getTargets: function (b) {
                var c = e;
                for (var d in c)if (a.contains(c[d], b) || b == c[d])return function (a) {
                    return{dom: e[a], index: a}
                }(d);
                return!1
            }, getDrop: function (a) {
                for (var b = 0; e[b]; b++) {
                    var c = f[b];
                    if (a.pageX > c.l && a.pageX < c.l + g.width && a.pageY > c.t && a.pageY < c.t + g.height) {
                        var d = a.pageX - c.l > g.width / 2 ? !0 : !1;
                        return function (a) {
                            return{tar: e[a], left: d, index: a}
                        }(b)
                    }
                }
                return!1
            }, getEffectTar: function (b) {
                var c = a.C("ul");
                a.addClassName(c, "drag_pic_list");
                var d = b.cloneNode();
                d.innerHTML = b.innerHTML;
                a.addClassName(b, "move");
                c.appendChild(d);
                return c
            }, insertArr: function (a, b, c) {
                var d = [], e = a.length;
                if (b > c)for (var f = 0; f < e; f++) {
                    f < c && d.push(a[f]);
                    if (f == c) {
                        d.push(a[b]);
                        d.push(a[f])
                    }
                    f > c && f != b && d.push(a[f])
                } else if (b < c)for (var f = 0; f < e; f++)f < b ? d[f] = a[f] : f < c ? d[f] = a[f + 1] : f == c ? d[f] = a[b] : f > c && (d[f] = a[f]); else d = a;
                return d
            }}, q = {mousedown: function (b) {
                var b = a.fixEvent(b);
                if (!b.target || !b.target.getAttribute("action-type")) {
                    if (!n) {
                        s();
                        n = !0
                    }
                    var c = p.getTargets(b.target);
                    if (!c)return;
                    document.body.style.cssText = "-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;";
                    document.body.setAttribute("onselectstart", "return false;");
                    h = c;
                    j = a.position(h.dom);
                    i = {x: b.clientX, y: b.clientY};
                    k = p.getEffectTar(h.dom);
                    k.style.position = "absolute";
                    k.style.zIndex = "9999";
                    k.style.top = j.t;
                    k.style.left = j.l;
                    document.body.appendChild(k)
                }
            }, mousemove: function (b) {
                if (!!h) {
                    var b = a.fixEvent(b), c = {x: b.clientX, y: b.clientY}, d = j.l + c.x - i.x, f = j.t + c.y - i.y;
                    d < l.l && (d = l.l);
                    d > l.l + m.width - g.width && (d = l.l + m.width - g.width);
                    f < l.t && (f = l.t);
                    f > l.t + m.height - g.height && (f = l.t + m.height - g.height);
                    k.style.left = d + "px";
                    k.style.top = f + "px";
                    var n = p.getDrop(b);
                    if (n) {
                        if (n.tar == h.dom || n.index == h.index)return;
                        n.index > h.index ? a.insertAfter(h.dom, e[n.index]) : a.insertBefore(h.dom, e[n.index]);
                        e = p.insertArr(e, h.index, n.index);
                        h.index = n.index
                    }
                }
            }, mouseup: function (b) {
                if (!!h) {
                    var b = a.fixEvent(b);
                    document.body.style.cssText = "";
                    document.body.removeAttribute("onselectstart", "return false;");
                    a.removeNode(k);
                    a.removeClassName(h.dom, "move");
                    h = !1;
                    s();
                    a.custEvent.fire(d, "setExtra", {});
                    o || window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("tblog_new_image_upload", "drag_pic")
                }
            }}, r = function () {
                a.custEvent.define(d, ["setExtra"]);
                a.addEvent(document.body, "mousedown", q.mousedown);
                a.addEvent(document.body, "mousemove", q.mousemove);
                a.addEvent(document.body, "mouseup", q.mouseup)
            }, s = function () {
                e = a.sizzle("li", c);
                e.pop();
                if (!!e[0]) {
                    g = a.core.dom.getSize(e[0]);
                    f = [];
                    for (var d = 0; e[d]; d++)f.push(a.position(e[d]));
                    l = a.position(b.box);
                    m = a.core.dom.getSize(b.box)
                }
            }, t = function () {
                s();
                r()
            };
            t();
            d.freshDom = s;
            d.destroy = function () {
                o = null;
                a.removeEvent(document.body, "mousedown", q.mousedown);
                a.removeEvent(document.body, "mousemove", q.mousemove);
                a.removeEvent(document.body, "mouseup", q.mouseup)
            };
            return d
        }
    });
    STK.register("lib.image.multiimage.preview", function (a) {
        var b = $CONFIG.imgPath, c = '<#et loading data><span class="txt S_txt1"><img class="picloading" src="' + b + 'style/images/common/loading.gif">${data.filename}</span>' + '<a href="javascript:;" action-type="deleteImg"  title="#L{删除}" class="ico_delpic"></a>' + "</#et>", d = '<#et image data><li class="loading" node-type="${data.type}">' + c + "</li>" + "</#et>", e = '<#et err data><span class="txt S_txt1">${data.text}</span><span class="txt2 S_txt1">${data.filename}</span><a href="javascript:;" title="#L{删除}" action-type="deleteImg" class="ico_delpic"></a></#et>', f = '<#et retry data><span class="txt S_txt1">#L{上传失败}<a class="W_btn_b" href="javascript:;" action-type="retryLoad" action-data="fid=${data.fid}"><span>#L{重传}</span></a></span><a href="javascript:;" title="#L{删除}" action-type="deleteImg" class="ico_delpic"></a></#et>';
        return function (b, g) {
            var h = a.lib.kit.extra.language, i = g.refer && g.refer.getAttribute("phototag") === "false", j = '<div class="" node-type="box"><div class="W_layer_title">#L{本地上传}</div>\t<div class="layer_pic_list clearfix">\t\t<div class="pic_list_count" node-type="picsInfo"></div>\t\t<ul class="drag_pic_list clearfix" node-type="preList">\t\t\t<li class="add" node-type="uploadBtn"><a href="javascript:;" title="">+</a></li>\t\t</ul>\t</div>' + (i ? "" : '<div node-type="tagtip" class="layer_tips_version layer_tips_intro" style="display:none; left:-165px; top:56px;z-index:9999"><div class="layer_tips_bg"><a class="W_ico12 icon_close" action-type="hideTip" href="javascript:;"></a><div class="layer_tips_cont"><p>#L{新功能！鼠标移到图片上点击}<i class="ico_showtag"></i>#L{就能给图片加标签}</p></div><span class="arrow_right"></span></div></div>') + "</div>" + "", k = '<#et image data><div style="background-image:url(${data.src});width:80px;height:80px;" alt=""></div><a action-type="editImg" href="javascript:;" class="ico_editpic"></a><a href="javascript:;" action-type="deleteImg" class="ico_delpic"></a>' + (i ? "" : '<span class="tag_v2"><a suda-data="key=pub_pic_upload&value=main_pub_tag" action-type="addTag" href="javascript:;" class="W_btn_d"><i class="icon_imgtag"></i>#L{标签}</a></span>') + '<i style="display:none;" class="W_icon icon_taged_pic"></i>' + "</#et>", l = a.parseParam({templete: h(j)}, g), m = 9, n = {}, o, p, q, r, s, t, u, v = {}, w = !1, x = a.lib.image.uploadLog(), y = {}, z, A = {init: function () {
                D.setNumInfo()
            }, uploading: function (b, c) {
                a.custEvent.fire(n, "loading");
                (!q || !q.getState()) && G();
                var e = b.data, f = {}, g = e.length;
                for (var i = 0; i < g; i++) {
                    var j = D.getFileName(e[i].name);
                    v[e[i].fid] = {name: j};
                    f[e[i].fid] = {name: j}
                }
                var k = "";
                for (var l in f)k += a.core.util.easyTemplate(h(d), {type: l, filename: f[l].name || ""});
                var m = a.builder(k), o = a.lib.kit.dom.parseDOM(m.list);
                for (var i in o)v[i].imgnode = o[i];
                a.insertBefore(m.box, p.uploadBtn);
                D.setNumInfo();
                B()
            }, uploaded: function (b) {
                var c = a.lib.kit.extra.imageURL(b.data.pid, {size: "square"});
                v[b.fid].pid = b.data.pid;
                var d = a.C("img");
                d.onload = function () {
                    d.onload = null;
                    if (v[b.fid]) {
                        v[b.fid].imgnode.innerHTML = a.core.util.easyTemplate(h(k), {src: c});
                        a.removeClassName(v[b.fid].imgnode, "loading");
                        a.addClassName(v[b.fid].imgnode, "pic")
                    }
                };
                d.src = c;
                v[b.fid].imgnode.setAttribute("action-data", b.data.pid);
                D.setExtra();
                (function () {
                    if (!w) {
                        var b = a.sizzle("li", p.preList);
                        if (b[0] && b[1]) {
                            a.addClassName(b[0], "first");
                            function c() {
                                a.removeClassName(b[0], "first");
                                a.removeEvent(b[0], "mouseover", c)
                            }

                            a.addEvent(b[0], "mouseover", c);
                            w = !0
                        }
                    }
                })()
            }, error: function (b) {
                if (b.type == "singleError") {
                    b.data.sourceData && b.data.sourceData.code == "A20001" ? v[b.fid].imgnode.innerHTML = a.core.util.easyTemplate(h(e), {text: h("#L{文件格式错误}"), filename: v[b.fid].name || ""}) : v[b.fid].imgnode.innerHTML = a.core.util.easyTemplate(h(f), {fid: b.fid});
                    v[b.fid].imgnode.className = "opt";
                    v[b.fid].err = 1;
                    D.setNumInfo()
                }
                if (b.type == "fileNumErr")return D.getReFileNum();
                b.type == "fileSizeErr" && setTimeout(function () {
                    var c = b.data.sizeErrAry.length;
                    for (var d = 0; d < c; d++) {
                        var f = a.getUniqueKey();
                        A.uploading({data: [
                            {fid: f, name: b.data.sizeErrAry[d] || ""}
                        ]});
                        v[f].imgnode.innerHTML = a.core.util.easyTemplate(h(e), {text: h("#L{图片大于20M}"), filename: v[f].name || ""});
                        v[f].imgnode.className = "opt";
                        v[f].err = 1
                    }
                    D.setNumInfo()
                }, 30);
                if (b.type == "defaultErr") {
                    v[b.fid].imgnode.innerHTML = a.core.util.easyTemplate(h(e), {text: h("#L{上传失败}"), filename: v[b.fid].name || ""});
                    v[b.fid].imgnode.className = "opt";
                    v[b.fid].err = 1;
                    D.setNumInfo()
                }
            }, extra: function (a) {
                a.type == "beclicked" && window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("tblog_new_image_upload", "fast_upload")
            }}, B = function () {
                s || (s = a.lib.image.mUpload(p.uploadBtn, {h: 80, w: 80, number: D.getReFileNum(), init: A.init, uploading: A.uploading, uploaded: A.uploaded, error: A.error, extra: A.extra}))
            }, C = {restore: function () {
                var a = STK.core.util.storage.get("editor_multiimage" + $CONFIG.uid);
                return a != "null" && a != null && a.length != 0 ? a : !1
            }, store: function (a) {
                STK.core.util.storage.set("editor_multiimage" + $CONFIG.uid, a)
            }, delWord: function () {
                STK.core.util.storage.del("editor_multiimage" + $CONFIG.uid)
            }}, D = {getExtraInfo: function (a, b) {
                var c = D.getImgNode(a);
                return c ? c.getAttribute(b) : null
            }, getImgNode: function (a) {
                if (a == document.body)return null;
                if (a.tagName.toLowerCase() == "li")return a;
                a = a.parentNode;
                return arguments.callee(a)
            }, setExtra: function () {
                var b = "";
                for (var c in v)if (v[c] && !v[c].pid && !v[c].err)return;
                var d = a.sizzle("li", p.preList);
                for (var e in d) {
                    var f = d[e].getAttribute("action-data");
                    f && (b += f + " ")
                }
                C.store(b);
                a.custEvent.fire(n, "setExtra", {pids: b, text: h("#L{分享图片}")});
                u && u.freshDom();
                if (!u) {
                    u = a.lib.image.multiimage.dragRank(p);
                    a.custEvent.add(u, "setExtra", D.setExtra)
                }
            }, getNumInfo: function () {
                var a = 0;
                for (var b in v)v[b] && !v[b].err && a++;
                return a
            }, setNumInfo: function () {
                var a = D.getNumInfo();
                if (a < m) {
                    p.uploadBtn.style.cssText = "";
                    p.picsInfo.innerHTML = h('#L{共%s张，还能上传%s张}<em class="S_txt2">（#L{按住ctrl可选择多张}）</em>', a, m - a)
                } else {
                    p.uploadBtn.style.cssText = "margin-left:-10000px;";
                    p.picsInfo.innerHTML = h('<em class="error_txt">#L{最多选择9张图片上传}</em>')
                }
                try {
                    s && s.getswf() && s.getswf().resetFileNum && s.getswf().resetFileNum(m);
                    s && s.getswf() && s.getswf().resetFileNum && s.getswf().resetUploadedFileNum(D.getNumInfo())
                } catch (b) {
                }
            }, getReFileNum: function () {
                var a = D.getNumInfo();
                return m - a > 0 ? m - a : 0
            }, getFileName: function (b, c) {
                var b = b || "", c = c || 8, d = b.length, e = b.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**"), f = e.slice(e.length - c - 1, e.length).replace(/\*\*/g, " ").replace(/\*/g, "").length;
                if (e.length > c && c > 0 && d - f - 1 > 0) {
                    b = b.slice(d - f - 1, d);
                    b = "..." + b
                }
                return a.encodeHTML(b)
            }}, E = {editImg: function (b) {
                a.preventDefault();
                var c = D.getExtraInfo(b.el, "node-type"), d = D.getExtraInfo(b.el, "action-data"), e = function (a) {
                    A.uploaded({data: {pid: a}, fid: c})
                };
                if (a.lib.kit.extra.getFlashVersion() < 10)a.lib.kit.extra.installFlash(); else {
                    var f = {id: "photo_editor", pos: q.getPosition(), service: "http://picupload.service.weibo.com/interface/pic_upload.php?app=miniblog&s=xml&cb=http://weibo.com/upimgback.html&rq=http%3A%2F%2Fphoto.i.weibo.com%2Fpic%2Fadd.php%3Fapp%3D1", sucess: e, h: 385, w: 528, swf: "PhotoEditor.swf"};
                    a.lib.image.imgUpload(f, {init: function (b, c) {
                        b.setPars(a.lib.kit.extra.imageURL(d, {size: "large"}))
                    }, close: function (a, b) {
                    }}).show()
                }
            }, deleteImg: function (b) {
                var c = D.getImgNode(b.el), d = c.getAttribute("node-type"), e = c.getAttribute("action-data");
                v && v[d] && (v[d] = null);
                a.removeNode(c);
                s.removeFile(d);
                D.setExtra();
                D.setNumInfo();
                x.sendError({t: 1, err: 1008, app: 1001});
                delete y[e];
                a.custEvent.fire(n, "setTags", {tags: a.jsonToStr(y)})
            }, retryLoad: function (b) {
                var d = b.data.fid;
                v[d].imgnode.innerHTML = a.core.util.easyTemplate(h(c), {filename: v[d].name || ""});
                v[d].imgnode.className = "loading";
                s && s.getswf() && s.getswf().reuploadById && s.getswf().reuploadById(d)
            }, close: function () {
                q.hide()
            }, sendData: function () {
                x.sendError({t: 1, err: 1008, app: 1001})
            }, addTag: function (c) {
                var d = D.getExtraInfo(c.el, "action-data");
                g.pid = d;
                g.tags = c.el.getAttribute("tags");
                z = a.lib.image.multiimage.addtags(b, g);
                a.custEvent.add(z, "setTags", function (b, e, f) {
                    var g = [];
                    for (var i in e) {
                        e[i].pid = d;
                        g.push(a.jsonToQuery(e[i]))
                    }
                    c.el.setAttribute("tags", g.join("|"));
                    if (g[0]) {
                        c.el.innerHTML = h("#L{编辑标签}");
                        var j = a.core.dom.dir(c.el.parentNode, {dir: "next", expr: "i.icon_taged_pic"});
                        j[0] && (j[0].style.display = "")
                    } else {
                        c.el.innerHTML = h('<i class="icon_imgtag"></i>#L{标签}');
                        var j = a.core.dom.dir(c.el.parentNode, {dir: "next", expr: "i.icon_taged_pic"});
                        j[0] && (j[0].style.display = "none")
                    }
                    for (var i in f) {
                        y[i] = f[i];
                        a.isArray(f[i]) && !f[i][0] && delete y[i]
                    }
                    a.custEvent.fire(n, "setTags", {tags: a.jsonToStr(y)})
                });
                E.hideTip()
            }, hideTip: function () {
                p.tagtip.style.display = "none";
                a.conf.trans.image.getTrans("hidetip", {onSuccess: function () {
                    p.tagtip.style.display = "none"
                }, onError: function () {
                }}).request({bid: 55})
            }}, F = function () {
                r.add("editImg", "click", E.editImg);
                r.add("deleteImg", "click", E.deleteImg);
                r.add("retryLoad", "click", E.retryLoad);
                r.add("addTag", "click", E.addTag);
                r.add("hideTip", "click", E.hideTip);
                a.addEvent(t, "click", E.sendData);
                a.custEvent.define(n, ["setTags", "setExtra", "hide", "insert", "deletePIC", "picLoad", "loading"])
            }, G = function () {
                if (q)q.setArrow("top").setAlignPos(b, g.refer, g); else {
                    q = a.ui.bubble({showWithAni: null, hideWithAni: null});
                    q.setContent(p.box);
                    q.setArrow("top").setAlignPos(b, g.refer, g);
                    t = q.getDomList().close;
                    q.on("hide", function () {
                        for (var b in v)try {
                            v[b] && v[b].imgnode && a.removeNode(v[b].imgnode);
                            s.removeFile(b);
                            v[b] = null
                        } catch (c) {
                        }
                        y = {};
                        a.custEvent.fire(n, "setTags", {tags: a.jsonToStr(y)});
                        v = {};
                        D.setExtra();
                        a.custEvent.fire(n, "hide", {});
                        u && u.destroy();
                        u = null
                    })
                }
            }, H = function () {
                o = a.core.dom.builder(l.templete);
                p = a.lib.kit.dom.parseDOM(o.list);
                r = a.core.evt.delegatedEvent(p.box)
            }, I = function () {
                q && q.setAlignPos(b, g.refer, g)
            }, J = function () {
                q.show()
            }, K = function () {
                q.startBoxClose();
                q.hide()
            }, L = function () {
                H();
                F()
            }, M = function () {
            }, N = function () {
            }, O = function () {
                var a = D.getNumInfo();
                return a < m ? !1 : !0
            }, P = function (a) {
                return p[a] || null
            };
            L();
            var Q = function () {
                q.hide();
                q.destroy && q.destroy();
                r.destroy();
                a.removeEvent(t, "click", E.sendData);
                v = null;
                q = null;
                u && u.destroy && u.destroy();
                u = null;
                z && z.destroy && z.destroy()
            };
            n.destroy = Q;
            n.uploading = A.uploading;
            n.uploaded = A.uploaded;
            n.error = A.error;
            n.extra = A.extra;
            n.show = J;
            n.hide = K;
            n.isOutstanding = O;
            n.getNumInfo = D.getNumInfo;
            n.getDomList = P;
            return n
        }
    });
    STK.register("lib.publisher.widget.imgPreview", function (a) {
        return function (b) {
            var c, d = {}, e = {restore: function () {
                var a = STK.core.util.storage.get("editor_multiimage" + $CONFIG.uid);
                return a != "null" && a != null && a.length != 0 ? a : !1
            }, store: function (a) {
                STK.core.util.storage.set("editor_multiimage" + $CONFIG.uid, a || "")
            }, delWord: function () {
                STK.core.util.storage.del("editor_multiimage" + $CONFIG.uid)
            }}, f = function (a, c) {
                var d = b.API.getImageLogType();
                b.API.addShortUrlLog(d);
                b.API.insertText(c.value);
                image.getBub().hide()
            }, g = function (a, c) {
                b.API.addExtraInfo(c.pids);
                e.store(c.pids);
                if (c.pids == "")b.API.delWords(c.text); else {
                    var d = b.API.getWords();
                    d.length == 0 && b.API.insertText(c.text)
                }
            }, h = function (a, c) {
                c.tags == "{}" ? b.nodeList.textEl.removeAttribute("tags") : b.nodeList.textEl.setAttribute("tags", encodeURIComponent(c.tags))
            }, i = function () {
                var d = a.sizzle('a[action-type="multiimage"]', b.nodeList.widget);
                if (!!d[0]) {
                    var e = b.nodeList.textEl;
                    c = a.lib.image.multiimage.preview(d[0], {refer: e});
                    j();
                    b.getPreview = function () {
                        return c
                    }
                }
            }, j = function () {
                a.custEvent.add(c, "setExtra", g);
                a.custEvent.add(c, "insert", f);
                a.custEvent.add(c, "setTags", h)
            };
            i();
            var k = function () {
                if (c) {
                    a.custEvent.remove(c, "setExtra", g);
                    a.custEvent.remove(c, "insert", f);
                    c.destroy()
                }
            };
            d.destroy = k;
            return d
        }
    });
    STK.register("lib.publisher.widget.settime", function (a) {
        return function (b) {
            var c = {}, d, e = function () {
                b.nodeList.settime.style.display = "";
                a.addClassName(b.nodeList.textElDiv, "input_set_timer");
                var c = a.delegatedEvent(b.nodeList.settime), e = {settime_date: function (c) {
                    var f = (c.data.end || "").split(" ")[0], g = (c.data.start || "").split(" ")[0];
                    !d && (d = a.ui.calendar({start: g || mTime().ymd, end: f, callback: function (a) {
                        b.nodeList.settime_data.value = a;
                        e.changed();
                        d.hide()
                    }}));
                    d.show(c.el, {appendTo: document.body, pos: "bottom-left"})
                }, settime_hour: function () {
                }, settime_min: function () {
                }, changed: function () {
                    var a = b.nodeList.settime_data.value + " " + b.nodeList.settime_hour.value + ":" + b.nodeList.settime_min.value;
                    b.nodeList.textEl.setAttribute("settime", a)
                }, reset: function () {
                    a.removeClassName(b.nodeList.textElDiv, "input_set_timer");
                    b.nodeList.textEl.setAttribute("settime", "")
                }, close: function () {
                    e.reset()
                }}, f = function () {
                    c.add("settime_data", "click", e.settime_date);
                    c.add("close", "click", e.close);
                    a.addEvent(b.nodeList.settime_data, "change", e.changed);
                    a.addEvent(b.nodeList.settime_hour, "change", e.changed);
                    a.addEvent(b.nodeList.settime_min, "change", e.changed);
                    a.core.evt.custEvent.define(b, "resettime");
                    a.core.evt.custEvent.add(b, "resettime", e.reset)
                };
                f();
                e.changed()
            };
            c.init = function (c, d, f) {
                b = c;
                aim = d;
                a.addEvent(c.nodeList[aim], "click", e)
            };
            c.destroy = function () {
            };
            c.show = e;
            return c
        }
    });
    STK.register("lib.publisher.widget.blog", function (a) {
        return function (b, c) {
            function k(c) {
                var d = "http://weibo.com/guide/article";
                c && c.data && c.data.extend && (d = d + "?extend=" + c.data.extend);
                f = a.ui.dialog({template: '<div style="width:662px;height:512px;position:absolute;z-index:9999;"><iframe allowtransparency="true" style="background:transparent" node-type="iframe" width="662" height="100%" frameborder="no" scrolling="no" _src="' + d + '"></iframe></div>'});
                var e = function (c) {
                    var d = b.nodeList.textEl.getAttribute("drafturl");
                    d && b.nodeList.textEl.value.indexOf(d) > -1 ? b.nodeList.textEl.value = b.nodeList.textEl.value.replace(d, c.text) : b.API.insertText(i("#L{我发表了文章} ") + c.text + " ");
                    b.nodeList.textEl.setAttribute("withdraft", "true");
                    b.nodeList.textEl.setAttribute("drafturl", c.text);
                    a.ui.notice(c.tip).on("hide", function () {
                        var c = 0, d = setInterval(function () {
                            c % 2 == 1 ? a.addClassName(b.nodeList.textElDiv, "clicked") : a.removeClassName(b.nodeList.textElDiv, "clicked");
                            if (c == 9) {
                                clearInterval(d);
                                c = 0
                            }
                            c++
                        }, 200)
                    })
                };
                f.on("show", function () {
                    setTimeout(function () {
                        function d(c) {
                            var d = (a.winSize().height - 512) / 2, e = (a.winSize().width - 662) / 2;
                            d = d >= 0 ? d : 0;
                            if (c) {
                                d = 0;
                                e = 0
                            }
                            b.style.marginTop = d + "px";
                            b.style.marginLeft = e + "px"
                        }

                        var b = f.getOuter(), c = a.sizzle('[node-type="iframe"]', b)[0];
                        h = a.lib.connect.iframe(c);
                        h.on("insertIntoPublishTop", function (a, b, c, d) {
                            function g(a) {
                                return typeof a == "string" || a && typeof a.substr == "function"
                            }

                            g(c) && (c = {text: c});
                            f.hide();
                            e({text: c.text, tip: c.tip || i("#L{添加成功}")})
                        });
                        h.on("setHeight", function (a, b, c, d) {
                            b.style.height = c + "px"
                        });
                        h.on("setWidth", function (a, b, c, d) {
                            b.style.width = c + "px"
                        });
                        h.on("fullscreen", function (a, c, d, e) {
                            if (!d) {
                                document.body.style.overflowY = "hidden";
                                b.style.position = "fixed";
                                b.style.top = "0";
                                b.style.left = "0";
                                b.style.width = "100%";
                                b.style.height = "100%";
                                c.width = "100%";
                                c.height = "100%";
                                b.style.zIndex = "9999"
                            } else {
                                document.body.style.overflowY = "";
                                b.style.position = "absolute";
                                c.width = "662";
                                c.height = "512";
                                b.style.width = "662px";
                                b.style.height = "512px";
                                f.setMiddle();
                                b.style.zIndex = "9999"
                            }
                        });
                        h.on("close", function (a, b, c, d) {
                            f.hide();
                            d("callback")
                        });
                        h.on("setTittle", function (b, c, d, e) {
                            var f = a.sizzle("div", layer.getDomList().inner)[0] || null;
                            f && (f.innerHTML = d)
                        });
                        f.on("hide", function () {
                            document.body.style.overflowY = ""
                        })
                    }, 10)
                });
                f.show().setMiddle()
            }

            var d = {}, e, f, g, h, i = a.lib.kit.extra.language, j = !0, l = function (b) {
                a.core.evt.preventDefault();
                j ? k(b) : window.open("http://c.blog.sina.com.cn/cblog.php?from=weibo", "newwindow", "height=600, left=300,top=100,width=783, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no")
            };
            d.init = function (c, d, f) {
                b = c;
                e = d;
                a.addEvent(c.nodeList[e], "click", l)
            };
            d.show = l;
            d.destroy = function () {
                b = null
            };
            return d
        }
    });
    STK.register("lib.publisher.widget.review", function (a) {
        return function (b) {
            function o(c) {
                var d = a.fixEvent(a.getEvent()).target, e;
                b.nodeList.widget && a.contains(b.nodeList.widget, d) ? e = d : e = b.nodeList.more;
                var f = b.nodeList.textEl;
                g.getTrans("getreview", {onSuccess: function (a) {
                    i = k();
                    i.setContent(a.data.html);
                    n(i);
                    i.show().setArrow("top").setAlignPos(e, b.nodeList.textEl)
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }}).request({})
            }

            function n(b) {
                function q() {
                    f();
                    d.add("change", "click", i);
                    d.add("nextpage", "click", p);
                    d.add("prepage", "click", n);
                    d.add("select", "click", k);
                    d.add("search", "click", m)
                }

                function p(b) {
                    g.getTrans("getscore", {onSuccess: function (a) {
                        b.data.oscore = a.data.user_score || 0;
                        o(b)
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}).request(b.data)
                }

                function o(c) {
                    var d = a.jsonToQuery(c.data), e = '<div class="layer_send_remark"><div class="title">#L{给}' + (c.data.type || "#L{电影}") + '<a href="javascript:;" class="name">' + c.data.title + "</a>#L{评分}</div>" + '<div node-type="score" class="remark"><a action-data="' + d + '" action-type="reviewadd" node-type="reviewadd" href="javascript:;" class="W_icon icon_starbar_a"><span class="W_icon icon_starbar_error" style="display:none;"></span><span node-type="scorecontrol" class="W_icon icon_starbar_stars" style=" width:' + c.data.oscore * 10 + '%;"></span></a></div>' + "</div>";
                    setTimeout(function () {
                        b.setContent(h(e));
                        j(b.getOuter())
                    }, 100)
                }

                function n(c) {
                    if (c.el.getAttribute("istransing") != 1) {
                        c.el.setAttribute("istransing", 1);
                        e--;
                        c.data.page = e;
                        g.getTrans("getreview", {onSuccess: function (a) {
                            b.setContent(a.data.html);
                            f();
                            c.el.setAttribute("istransing", 0)
                        }, onError: function (b) {
                            c.el.setAttribute("istransing", 0);
                            a.lib.dialog.ioError(b.code, b)
                        }, onFail: function () {
                            c.el.setAttribute("istransing", 0)
                        }}).request(c.data)
                    }
                }

                function k(c) {
                    if (c.el.getAttribute("istransing") != 1) {
                        c.el.setAttribute("istransing", 1);
                        e++;
                        c.data.page = e;
                        g.getTrans("getreview", {onSuccess: function (a) {
                            b.setContent(a.data.html);
                            f();
                            c.el.setAttribute("istransing", 0)
                        }, onError: function (b) {
                            a.lib.dialog.ioError(b.code, b);
                            c.el.setAttribute("istransing", 0)
                        }, onFail: function () {
                            c.el.setAttribute("istransing", 0)
                        }}).request(c.data)
                    }
                }

                function i(c) {
                    g.getTrans("getreview", {onSuccess: function (a) {
                        b.setContent(a.data.html);
                        e = 1;
                        f()
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}).request(c.data)
                }

                function f() {
                    var b = a.sizzle('[node-type="searchinput"]', c);
                    !!b && !!b[0] && l(b[0], {box: c})
                }

                var c = b.getOuter(), d = a.delegatedEvent(c), e = 1;
                q()
            }

            function m(b) {
                var c = a.sizzle('[node-type="searchinput"]', i.getOuter());
                if (!!c && !!c[0]) {
                    if (c[0].value == "") {
                        c[0].focus();
                        return
                    }
                    b.data.q = c[0].value;
                    b.data.is_search = 1;
                    g.getTrans("reviewsug", {onSuccess: function (b) {
                        var c = a.sizzle(".topic_box", i.getOuter());
                        c[0].innerHTML = b.data.html
                    }}).request(b.data)
                }
            }

            function l(b, c) {
                var d = '<div style="position:absolute;z-index:10000;display:none;" class="layer_menu_list" node-type="layer_outer"><div class="search_movie_1"><ul node-type="suggestWrap"></ul></div></div>', e = {"@": '<#et temp data><#list data.data as list><li action-type="item" action-data="value=${list.title}" value="${list.title}" objid="1042:${list.object_id}"><a href="javascript:;"><em class="tit">${list.title}</em><em class="subtitle S_txt2">${list.description}</em></a></li><#if (list.count)><span>${list.count}</span></#if></#list></#et>'}, f = {}, g, h, i, j = a.lib.kit.extra.language, k = a.conf.trans.publisher, l = 0, n, o, p = a.parseParam({flag: "@"}, c), q = b.value, r, s = "movie", t = {"@": {normalTitle: j("#L{选择昵称或轻敲空格完成输入}"), moreTitle: j("#L{选择最近@的人或直接输入}"), noTilte: j("#L{轻敲空格完成输入}"), tagTitle: j("#L{输入想要搜索的内容并回车结束}")}, "#": {normalTitle: j("#L{想用什么话题？}"), tagTitle: j("#L{输入话题并回车结束}")}}, u = 0, v = 0, w = function (c, d) {
                    if (!d.data.list.data[0])g.style.display = "none"; else {
                        if (c < v)return;
                        v = c;
                        var e = x.rendHtml(p.flag, d);
                        a.custEvent.fire(i, "open", b);
                        h.innerHTML = e;
                        g.style.display = "";
                        x.setPos(g)
                    }
                }, x = {rendHtml: function (b, c, d) {
                    c.data.list.title = t[b].tagTitle;
                    var f = a.core.util.easyTemplate(e[b], c.data.list);
                    return f
                }, getList: function () {
                    u++;
                    (function (a) {
                        k.getTrans("reviewsug", {onSuccess: function (b) {
                            w(a, b)
                        }}).request({q: q, type: s})
                    })(u)
                }, setPos: function (d) {
                    var e = a.position(b), f = a.position(c.box);
                    d.style.top = e.t - f.t + 30 + "px";
                    d.style.left = e.l - f.l + "px";
                    d.style.display = ""
                }, checkValue: function () {
                    if (!!b.value && a.trim(b.value) != q) {
                        q = a.trim(b.value);
                        x.getList()
                    }
                }}, y = function () {
                    var e = a.core.dom.builder(d);
                    g = e.list.layer_outer[0];
                    (c.box || document.body).appendChild(g);
                    h = e.list.suggestWrap[0];
                    i = a.ui.mod.suggest({textNode: b, uiNode: h, actionType: "item", actionData: "value"});
                    r = a.sizzle('[action-type="search"]', c.box)[0];
                    r && (s = a.queryToJson(r.getAttribute("action-data") || "").type || "movie")
                }, z = {item: function () {
                }, blur: function () {
                    clearInterval(o);
                    o = null;
                    q = null;
                    setTimeout(function () {
                        a.custEvent.fire(i, "close")
                    }, 200)
                }, focus: function () {
                    !o && (o = setInterval(function () {
                        x.checkValue()
                    }, 500))
                }, enterkey: function (c) {
                    if (!!a.trim(b.value)) {
                        i && i.hide && i.hide();
                        m({data: {q: b.value, type: s}});
                        if (o) {
                            clearInterval(o);
                            o = null
                        }
                        g.style.display = "none";
                        a.preventDefault(c)
                    }
                }, change: function () {
                    a.trim(b.value) == "" ? r && a.addClassName(r, "W_btn_a_disable") : r && a.removeClassName(r, "W_btn_a_disable")
                }}, A = function () {
                    b.focus()
                }, B = function () {
                    a.custEvent.define(f, ["createTag"]);
                    a.custEvent.add(i, "onIndexChange", function (b, c) {
                        n = a.sizzle("li[class!=suggest_title]", h);
                        n && n[0] && a.core.dom.removeClassName(n[l], "cur");
                        a.core.dom.addClassName(n[c], "cur");
                        l = c
                    });
                    a.custEvent.add(i, "onSelect", function (a, c, d, e) {
                        if (c == -1)z.enterkey(); else {
                            l = 0;
                            if (n[0]) {
                                var f = n[c].getAttribute("value") + "", h = n[c].getAttribute("objid");
                                b.value = f
                            } else var f = b.value, h = 0;
                            b.value = f;
                            m({data: {q: b.value, type: s}});
                            if (o) {
                                clearInterval(o);
                                o = null
                            }
                            g.style.display = "none"
                        }
                    });
                    a.custEvent.add(i, "onClose", function () {
                        if (o) {
                            clearInterval(o);
                            o = null
                        }
                        g.style.display = "none"
                    });
                    a.addEvent(b, "focus", z.focus);
                    a.addEvent(b, "blur", z.blur);
                    a.addEvent(b, "change", z.focus);
                    a.addEvent(b, "keyup", z.change);
                    a.addEvent(b, "focus", z.change);
                    a.core.evt.hotKey.add(b, ["enter"], z.enterkey)
                }, C = function () {
                    y();
                    B()
                };
                C();
                f.show = A;
                f.destroy = function () {
                    a.removeEvent(b, "focus", z.focus);
                    a.removeEvent(b, "blur", z.blur);
                    a.core.evt.hotKey.remove(b, ["enter"], z.enterkey);
                    g.style.display = "none";
                    i && i.destroy && i.destroy()
                };
                return f
            }

            function k() {
                i = a.ui.bubble({clickBlankToHide: !0});
                return i
            }

            function j(c, d) {
                var e = a.core.dom.builder(c), f = a.lib.kit.dom.parseDOM(e.list), g = {}, h = f.reviewadd, j = a.core.dom.getSize(h), k = f.scorecontrol.style.width, l = a.delegatedEvent(f.score), m = a.lib.publisher.source.formdata(f.extradata), n = a.lib.kit.extra.language, o = {1: n("#L{很差}"), 2: n("#L{一般}"), 3: n("#L{还行}"), 4: n("#L{不错}"), 5: n("#L{怒赞}")}, p = {reviewadd: function (b) {
                    var b = a.fixEvent(b), c = a.position(h);
                    j = a.core.dom.getSize(h);
                    if (b.pageY > c.t && b.pageY < c.t + j.height && b.pageX > c.l && b.pageX < c.l + j.width) {
                        var d = b.pageX - c.l, e = Math.floor(d / j.width * 5 + 1);
                        f.scorecontrol.style.width = e * 20 + "%";
                        f.score_title && (f.score_title.innerHTML = o[e])
                    } else {
                        f.scorecontrol.style.width = k;
                        f.score_title && (f.score_title.innerHTML = o[k.replace("%", "") * 5 / 100] || "")
                    }
                }, mouseout: function (a) {
                    f.scorecontrol.style.width = k
                }, add: function (c) {
                    var d = a.position(h), e = c.data, g = c.evt.pageX - d.l;
                    e.score = Math.floor(g / j.width * 5 + 1);
                    a.conf.trans.publisher.getTrans("reviewadd", {onSuccess: function (c) {
                        k = e.score * 20 + "%";
                        f.scorecontrol.style.width = k;
                        f.score_title && (f.score_title.innerHTML = c.data.score_title);
                        c.data.prefixtext && b.API.insertText(c.data.prefixtext);
                        i.hide();
                        a.custEvent.fire(b, "keyUpCount")
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }, onFail: function () {
                    }}).request(e)
                }}, q = function () {
                    a.addEvent(document.body, "mousemove", p.reviewadd);
                    l.add("reviewadd", "click", p.add)
                }, r = function () {
                    q()
                };
                r();
                g.destroy = function () {
                    a.removeEvent(document.body, "mousemove", p.reviewadd);
                    l.remove("reviewadd", "click", p.add)
                };
                return g
            }

            var c = {}, d, e, f = !1, g = a.conf.trans.publisher, h = a.lib.kit.extra.language, i;
            c.init = function (c, d, f) {
                b = c;
                e = d;
                a.addEvent(c.nodeList[e], "click", o)
            };
            c.clear = function () {
            };
            c.show = o;
            c.hide = function () {
                i && i.startBoxClose();
                i && i.hide()
            };
            c.destroy = function () {
                i && i.startBoxClose();
                i && i.hide();
                b = null
            };
            return c
        }
    });
    STK.register("lib.publisher.widget.widgetloader", function (a) {
        var b = a.lib.publisher.widget;
        return function (c, d) {
            d = a.parseParam({widget: c.nodeList.widget, devent: ""}, d || {});
            var e = {}, f, g, h, i = {list: ["face", "image", "multiimage", "video", "music", "vote", "topic", "settime", "blog", "review"], entity: {}, widgetList: {}, func: function (a) {
                return function (d) {
                    d.data.isimage ? c.API.setImageLogType(d.data.log) : c.API.setCurrentLogType(d.data.log);
                    i.widgetList[a] || (i.widgetList[a] = b[a](c));
                    i.widgetList[a].show()
                }
            }}, j = {init: function () {
                j.bind()
            }, bind: function () {
                a.custEvent.define(c, "close");
                f = d.devent ? d.devent : a.delegatedEvent(d.widget);
                for (var e = 0, j = i.list.length; e < j; e++) {
                    var k = i.list[e];
                    i.entity[k] = i.func(k);
                    f.add(k, "click", i.entity[k])
                }
                g = b.plugin(c, d);
                h = b.imgPreview(c)
            }, close: function () {
                a.custEvent.fire(c, "close", {type: "publish"})
            }, destroy: function () {
                for (var a = 0, b = i.list.length; a < b; a++) {
                    var c = i.list[a];
                    f.remove(c, "click", i.entity[c])
                }
                for (var d in i.widgetList)i.widgetList[d].destroy && i.widgetList[d].destroy();
                g.destroy();
                h.destroy()
            }};
            j.init();
            e.close = j.close;
            e.destroy = j.destroy;
            return e
        }
    });
    STK.register("lib.editor.plugin.morePlugin", function (a) {
        var b = a.lib.kit.extra.language;
        return function (b) {
            var c = {}, d, e, f, g, h = !1, i = {number: 4, defNumber: 2}, j = {list: [], data: {}, add: function (a) {
                var b = a.type;
                j.data[b] = a
            }, destroy: function () {
                j.list = [];
                j.data = {}
            }}, k, l = {init: function () {
                var c = a.queryToJson(b.nodeList.widget.getAttribute("node-data") || "");
                i = a.parseParam(i, c);
                l.buildMenu()
            }, showMenu: function (b) {
                e.style.display = "";
                e.style.zIndex = "10000";
                var c = a.position(b), d = a.core.dom.getSize(b);
                a.core.dom.setXY(e, {t: c.t + d.height + 3, l: c.l - 5});
                a.ui.effect(e, "fadeInDown", "fast");
                window.SUDA && SUDA.uaTrack && SUDA.uaTrack("tblog_home_edit", 'unfold_more"')
            }, hideMenu: function () {
                a.ui.effect(e, "fadeOutUp", "fast", function () {
                    e.style.display = "none"
                })
            }, buildMenu: function () {
                e = b.nodeList.morePlugin;
                if (!!e) {
                    document.body.appendChild(e);
                    e.style.position = "absolute";
                    a.lib.publisher.widget.widgetloader(b, {widget: e});
                    l.menuEvt()
                }
            }, menuEvt: function () {
                a.addEvent(e, "click", l.hideMenu)
            }, destroy: function () {
                a.removeEvent(e, "click", l.hideMenu);
                d && d.destroy()
            }};
            l.init();
            c.menu = e;
            c.show = l.showMenu;
            c.hide = l.hideMenu;
            c.destroy = l.destroy;
            return c
        }
    });
    STK.register("lib.kit.dom.hover", function (a) {
        function b(b, c) {
            var d = c.length;
            while (d--)if (c[d] === b || a.contains(c[d], b))return!0;
            return!1
        }

        var c = {};
        return a.lib.kit.touch.cantouch ? function (d) {
            var e = d.act, f = d.extra || [], g = function (a) {
                d.onmouseover.apply(e, [a])
            }, h = function (a) {
                d.onmouseout.apply(e, [a])
            }, i = function (c, d) {
                b(a.fixEvent(d).target, [e].concat(f)) ? g(d) : h(d)
            };
            if (!("inited"in c)) {
                c.inited = !0;
                a.custEvent.define(c, ["tap"]);
                a.addEvent(document.body, "tap", function (b) {
                    a.custEvent.fire(c, "tap", b)
                })
            }
            a.custEvent.add(c, "tap", i);
            return{destroy: function () {
                a.removeEvent(document.body, "tap", i)
            }}
        } : function (b) {
            var c = b.delay || 300, d = b.moutDelay || c, e = b.isover || !1, f = b.act, g = b.extra || [], h = null, i = function (a) {
                e && b.onmouseover.apply(f, [a])
            }, j = function (a) {
                e || b.onmouseout.apply(f, [a])
            }, k = function (a) {
                e = !0;
                h && clearTimeout(h);
                h = setTimeout(function () {
                    i(a)
                }, c)
            }, l = function (a) {
                e = !1;
                h && clearTimeout(h);
                h = setTimeout(function () {
                    j(a)
                }, d)
            };
            a.core.evt.addEvent(f, "mouseover", k);
            a.core.evt.addEvent(f, "mouseout", l);
            for (var m = 0, n = g.length; m < n; m += 1) {
                a.core.evt.addEvent(g[m], "mouseover", k);
                a.core.evt.addEvent(g[m], "mouseout", l)
            }
            var o = {};
            o.destroy = function () {
                a.core.evt.removeEvent(f, "mouseover", k);
                a.core.evt.removeEvent(f, "mouseout", l);
                for (var b = 0, c = g.length; b < c; b += 1) {
                    a.core.evt.removeEvent(g[b], "mouseover", k);
                    a.core.evt.removeEvent(g[b], "mouseout", l)
                }
            };
            return o
        }
    });
    STK.register("lib.kit.dom.firstChild", function (a) {
        var b = a.core.dom.next;
        return function (a) {
            var c = a.firstChild;
            c && c.nodeType != 1 && (c = b(c));
            return c
        }
    });
    STK.register("lib.editor.count", function (a) {
        function b(b) {
            var c = 41, d = 140, e = 20, f = b, g = b.match(/http:\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+([-A-Z0-9a-z_\$\.\+\!\*\(\)\/,:;@&=\?\~\#\%]*)*/gi) || [], h = 0;
            for (var i = 0, j = g.length; i < j; i++) {
                var k = a.core.str.bLength(g[i]);
                if (/^(http:\/\/t.cn)/.test(g[i]))continue;
                /^(http:\/\/)+(t.sina.com.cn|t.sina.cn)/.test(g[i]) || /^(http:\/\/)+(weibo.com|weibo.cn)/.test(g[i]) ? h += k <= c ? k : k <= d ? e : k - d + e : h += k <= d ? e : k - d + e;
                f = f.replace(g[i], "")
            }
            var l = Math.ceil((h + a.core.str.bLength(f)) / 2);
            return l
        }

        return function (a) {
            a = a.replace(/\r\n/g, "\n");
            return b(a)
        }
    });
    STK.register("lib.editor.editor", function (a) {
        var b = a.addEvent, c = a.removeEvent, d = a.custEvent, e = a.getStyle, f = a.setStyle, g = a.lib.kit.dom.parseDOM, h = a.lib.kit.extra.textareaUtils, i = a.lib.editor.count;
        return function (e, f) {
            var j = {}, f = f, k = {}, l = "", m = "", n = "", o = {reset: function () {
                k.textEl.value = "";
                d.fire(j, "changed");
                k.textEl.removeAttribute("extra");
                l = m = n = ""
            }, delWords: function (a) {
                var b = o.getWords();
                if (!(b.indexOf(a) > -1))return!1;
                k.textEl.value = "";
                q.textInput(b.replace(a, ""))
            }, getWords: function () {
                return a.core.str.trim(k.textEl.value)
            }, getExtra: function () {
                var b, c = k.textEl.getAttribute("extra") || "";
                c != null && (b = a.core.str.trim(c));
                return b
            }, focus: function (a, b) {
                if (typeof a != "undefined")h.setCursor(k.textEl, a, b); else {
                    var c = k.textEl.value.length;
                    h.setCursor(k.textEl, c)
                }
                p.cacheCurPos()
            }, blur: function () {
                k.textEl.blur()
            }, addExtraInfo: function (a) {
                typeof a == "string" && k.textEl.setAttribute("extra", a)
            }, disableEditor: function (a) {
                c(k.textEl, "mouseup", p.cacheCurPos);
                if (a === !0)k.textEl.setAttribute("disabled", "disabled"); else {
                    b(k.textEl, "mouseup", p.cacheCurPos);
                    k.textEl.removeAttribute("disabled")
                }
            }, getCurPos: function () {
                var a = k.textEl.getAttribute("range") || "0&0";
                return a.split("&")
            }, count: function () {
                var b = a.core.str.trim(k.textEl.value).length == 0 ? a.core.str.trim(k.textEl.value) : k.textEl.value;
                return i(b)
            }, addShortUrlLog: function (b) {
                b = b && a.trim(b);
                if (b) {
                    var c = new RegExp("^" + b + "$|" + "_" + b + "$|^" + b + "_|" + "_" + b + "_");
                    c.test(l) || (l ? l = l + "_" + b : l = b)
                }
            }, getShortUrlLog: function () {
                return l
            }, setCurrentLogType: function (a) {
                m = a
            }, getCurrentLogType: function () {
                return m
            }, setImageLogType: function (a) {
                n = a
            }, getImageLogType: function () {
                return n
            }}, p = {textElFocus: function () {
                k.recommendTopic && a.core.dom.setStyle(k.recommendTopic, "display", "none");
                d.fire(j, "focus");
                k.num && a.core.dom.setStyle(k.num, "display", "");
                o.getWords() == f.tipText && o.delWords(f.tipText)
            }, textElBlur: function () {
                setTimeout(function () {
                    if (k.textEl.value.length === 0) {
                        k.recommendTopic && a.core.dom.setStyle(k.recommendTopic, "display", "");
                        k.num && k.recommendTopic && a.core.dom.setStyle(k.num, "display", "none");
                        typeof f.tipText != "undefined" && (k.textEl.value = f.tipText)
                    }
                    d.fire(j, "blur")
                }, 50)
            }, cacheCurPos: function () {
                var b = h.getSelectedText(k.textEl), c = b == "" || b == null ? 0 : b.length, d = a.core.dom.textSelectArea(k.textEl).start, e = d + "&" + c;
                k.textEl.setAttribute("range", e)
            }}, q = {textChanged: function () {
                d.fire(j, "keyUpCount")
            }, textInput: function (a, b) {
                var c = o.getCurPos(), b = c[0], e = c[1];
                o.getWords() == f.tipText && a != f.tipText && o.delWords(f.tipText);
                h.unCoverInsertText(k.textEl, a, {rcs: c[0], rccl: c[1]});
                p.cacheCurPos();
                d.fire(j, "changed")
            }}, r = {}, s = function () {
                v();
                w()
            }, t = function () {
                x();
                z();
                A();
                u()
            }, u = function () {
                f.storeWords ? k.textEl.value.length == 0 && q.textInput(f.storeWords) : f.tipText && (k.textEl.value = f.tipText)
            }, v = function () {
                if (!e)throw"node is not defined in module editor"
            }, w = function () {
                var b = a.core.dom.builder(e).list;
                k = g(b);
                if (!k.widget)throw"can not find nodes.widget in module editor"
            }, x = function () {
                var a = k.textEl;
                b(a, "focus", p.textElFocus);
                b(a, "blur", p.textElBlur);
                b(a, "mouseup", p.cacheCurPos);
                b(a, "keyup", p.cacheCurPos)
            }, y = function () {
                d.define(j, ["changed", "focus", "blur"])
            }, z = function () {
                y();
                d.add(j, "changed", q.textChanged)
            }, A = function () {
            }, B = function () {
                d.remove(j);
                d.undefine(j);
                var a = k.textEl;
                c(a, "focus", p.textElFocus);
                c(a, "blur", p.textElBlur);
                c(a, "mouseup", p.cacheCurPos);
                c(a, "keyup", p.cacheCurPos)
            };
            s();
            var C = {reset: o.reset, getWords: o.getWords, getExtra: o.getExtra, delWords: o.delWords, focus: o.focus, blur: o.blur, insertText: q.textInput, check: q.textChanged, addExtraInfo: o.addExtraInfo, disableEditor: o.disableEditor, getCurPos: o.getCurPos, count: o.count, textElFocus: p.textElFocus, cacheCurPos: p.cacheCurPos, addShortUrlLog: o.addShortUrlLog, getShortUrlLog: o.getShortUrlLog, setCurrentLogType: o.setCurrentLogType, getCurrentLogType: o.getCurrentLogType, setImageLogType: o.setImageLogType, getImageLogType: o.getImageLogType};
            j.destroy = B;
            j.API = C;
            j.nodeList = k;
            j.init = t;
            j.opts = f;
            return j
        }
    });
    STK.register("lib.editor.base", function (a) {
        var b = a.lib.editor.service, c = a.lib.editor.plugin, d;
        return function (b, e) {
            var f = {}, g, h, i, j;
            e = a.lib.kit.extra.merge({limitNum: 140}, e);
            var k = function (b) {
                var c = a.fixEvent(b).target;
                if (a.contains(i.nodeList.more, c) || c == i.nodeList.more) {
                    l.showMenu();
                    var d = a.lib.kit.dom.firstChild(i.nodeList.more);
                    d && a.addClassName(d, "W_arrow_turn")
                } else {
                    l.hideMenu();
                    var d = a.lib.kit.dom.firstChild(i.nodeList.more);
                    d && a.removeClassName(d, "W_arrow_turn")
                }
            }, l = {init: function () {
                l.build();
                l.bind()
            }, build: function () {
                i = a.lib.editor.editor(b, e);
                d = i.nodeList;
                j = c.at(i, e);
                (typeof e.count == "undefined" || e.count == "enable") && c.count(i);
                var f = c.sucTip(i, e), g = c.score(i, e);
                h = c.morePlugin(i, e);
                j.init();
                i.init();
                f.init()
            }, bind: function () {
                i.nodeList.more && a.addEvent(document.body, "click", k)
            }, showMenu: function () {
                h.show(i.nodeList.more)
            }, hideMenu: function () {
                h.hide()
            }, destroy: function () {
                i.destroy && i.destroy();
                j.destroy && j.destroy();
                h.destroy()
            }, closeWidget: function () {
            }};
            l.init();
            f.editor = i;
            f.nodeList = d;
            f.destroy = l.destroy;
            f.closeWidget = l.closeWidget;
            return f
        }
    });
    STK.register("conf.channel.flashUpload", function (a) {
        var b = ["uploading", "uploaded", "uploadfail", "nofile", "complete", "deleteFile"];
        return a.lib.kit.extra.listener.define("conf.channel.flashUpload", b)
    });
    STK.register("lib.message.upload.start", function (a) {
        var b = a.lib.kit.extra.language, c = b('<#et userlist data><div class="img_mod W_fl" fid=${data.fid}><div class="mod_top S_bg1"><p class="prompt S_txt2" node-type="imgLoading_${data.fid}"><i class="W_loading"></i></p><img style="display:none;" width="92" height="92" node-type="imgUrl_${data.fid}" src="${data.url}" alt="${data.fileName}" class="send_img"></div><div class="mod_btm clearfix"><span class="W_autocut S_txt2 W_fl">${data.fileName}</span><a href="javascript:void(0);" class="W_fr" node-type="deleteImg_${data.fid}" action-type="cancelImg" action-data="fid=${data.fid}">#L{删除}</a></div></div>'), d = b('<#et userlist data><div class="files clearfix" fid=${data.fid}><div class="private_file_mod W_fl W_autocut"><span class="mes_acc_icon ${data.fileTypeClass}" node-type="fileType_${data.fid}"></span><span class="W_autocut name S_txt2" node-type="fileName_${data.fid}">${data.fileName} </span> </div><div class="state_mod W_fr"><i class="W_loading" node-type="uploading_icon_${data.fid}"></i><span class="state S_txt1" node-type="uploading_${data.fid}">#L{正在上传}</span><a href="javascript:void(0);" class="W_ficon ficon_close S_ficon" node-type="deleteFile_${data.fid}" action-type="cancelFile" action-data="fid=${data.fid}">X</a></div></div></#et>'), e = a.core.util.easyTemplate, f = {img: 8, file: 38};
        return function (b) {
            var g = {};
            if (!b.target)return g;
            var h = a.E(b.target), i, j, k = b.fileName, l = b.fileName.toString().replace(/.*\.(\S{1,8})$/, "$1"), m = h.getAttribute("fileType");
            if (m == "img") {
                h.parentNode.style.display = "";
                i = c
            } else {
                h.style.display = "";
                i = d
            }
            j = "acc_icon_" + l;
            f[m] && a.core.str.bLength(k) >= f[m] && (k = a.core.str.leftB(k, f[m] - 3) + "...");
            var n = e(i, {fid: b.fid, fileName: k, fileTypeClass: j}).toString();
            a.insertHTML(h, n, "beforeend");
            a.conf.channel.flashUpload.fire("uploading", {fid: b.fid, fileName: b.fileName});
            return g
        }
    });
    STK.register("lib.kit.extra.actionData", function (a) {
        return function (b) {
            return{set: function (c, d) {
                if (!!a.isNode(b)) {
                    var e = a.queryToJson(b.getAttribute("action-data") || "") || {};
                    e[c] = d;
                    b.setAttribute("action-data", a.jsonToQuery(e))
                }
            }, del: function (c) {
                if (!!a.isNode(b)) {
                    var d = a.queryToJson(b.getAttribute("action-data") || "") || {};
                    delete d[c];
                    b.setAttribute("action-data", a.jsonToQuery(d))
                }
            }, get: function (c) {
                if (!a.isNode(b))return"";
                var d = a.queryToJson(b.getAttribute("action-data") || "") || {};
                return d[c] || ""
            }}
        }
    });
    STK.register("lib.message.upload.complete", function (a) {
        var b = a.lib.kit.extra.language, c = a.lib.kit.extra.actionData, d = {1e3: "K", 1e6: "M", 1e9: "G"};
        return function (b, d) {
            var e = {};
            if (!b.target)return e;
            var f, g = a.E(b.target), h = a.lib.kit.dom.parseDOM(a.builder(g).list), i = b.fid, j = b.data.vfid, k = b.data.tovfid, l = b.fileSize, m = b.fileName, n = b.data.thumbnail_120 + "&source=209678993", o = b.data.thumbnail_180 + "&source=209678993", p = function () {
                if (l < 1024)return l + " B";
                if (l < 1048576)return parseInt(l / 102.4) / 10 + " K";
                if (l < 1073741824)return parseInt(l / 104857.6) / 10 + " M"
            }();
            if (g.getAttribute("fileType") == "file") {
                f = g;
                a.removeNode(h["uploading_" + i]);
                a.removeNode(h["uploading_icon_" + i]);
                h["fileName_" + i].innerHTML = m + " (" + p + ")";
                c(h["deleteFile_" + i]).set("fileSize", l);
                h["deleteFile_" + i].setAttribute("action-type", "deleteFile")
            } else {
                f = g.parentNode;
                a.removeNode(h["imgLoading_" + i]);
                h["imgUrl_" + i].style.display = "";
                h["imgUrl_" + i].setAttribute("src", n);
                h["imgUrl_" + i].setAttribute("action-type", "imgEnlarge");
                h["imgUrl_" + i].setAttribute("action-data", "s=" + n + "&l=" + o + "&size=120");
                c(h["deleteImg_" + i]).set("fileSize", l);
                h["deleteImg_" + i].setAttribute("action-type", "deleteImg")
            }
            f.setAttribute("fids", (f.getAttribute("fids") || "") + "," + i);
            f.setAttribute("tovfids", (f.getAttribute("tovfids") || "") + "," + k);
            f.setAttribute("vfids", (f.getAttribute("vfids") || "") + "," + j);
            a.conf.channel.flashUpload.fire("uploaded", b);
            return e
        }
    });
    STK.register("lib.message.upload.init", function (a) {
        return function () {
        }
    });
    STK.register("lib.message.upload.error", function (a) {
        var b = a.lib.kit.extra.language, c = b('<p class="prompt S_txt2">#L{图片上传失败}</p>'), d = b("#L{上传失败}");
        return function (e, f) {
            e.fileName = e.fileName || "";
            if (e.code && e.code == -1)return a.ui.alert(b("文件“NAME”超出#L{规定}大小").replace(/NAME/, e.fileName));
            e.code && e.code == -2 && a.ui.alert(b("文件 “NAME”#L{上传出错}").replace(/NAME/, e.fileName));
            if (e.code && e.code == -3)return a.ui.alert(b("#L{总}文件#L{数量}超出").replace(/NAME/, e.fileName));
            if (e.code && e.code == -4)return a.ui.alert(b("#L{总}文件大小超出").replace(/NAME/, e.fileName));
            var g = {};
            if (!e.target)return g;
            var h, i = a.E(e.target), j = a.lib.kit.dom.parseDOM(a.builder(i).list), k = e.fid, l = e.fileName, m = e.data.thumbnail_120 + "&source=209678993", n = e.data.thumbnail_180 + "&source=209678993";
            if (i.getAttribute("fileType") == "file") {
                h = i;
                a.removeNode(j["uploading_" + k]);
                j["fileName_" + k].innerHTML = l + " (" + d + ")";
                j["deleteFile_" + k].setAttribute("action-type", "deleteFile")
            } else {
                h = i.parentNode;
                j["imgUrl_" + k].parentNode.innerHTML = c;
                j["deleteImg_" + k].setAttribute("action-type", "deleteImg")
            }
            h.setAttribute("fids", (i.getAttribute("fids") || "") + "," + k);
            a.conf.channel.flashUpload.fire("uploadfail", e);
            return g
        }
    });
    STK.register("lib.kit.extra.runFlashMethod", function (a) {
        return function (a, b, c) {
            var d, e, f, g = function () {
                if (a[b]) {
                    e = !0;
                    clearTimeout(d);
                    try {
                        a.TotalFrames()
                    } catch (h) {
                        a.TotalFrames
                    }
                    c()
                } else f = setTimeout(g, 100)
            };
            g();
            d = setTimeout(function () {
                e || clearTimeout(f)
            }, 1e4);
            return{destroy: function () {
                clearTimeout(d);
                clearTimeout(f)
            }}
        }
    });
    STK.register("lib.message.upload.loadSwf", function (a) {
        var b = a.lib.kit.extra.language;
        return function (c, d) {
            var e = {}, f, g = !1, h = a.C("span"), i, j, d = a.parseParam({fileListNode: null, fn_start: "STK.namespace.v6home.lib.message.upload.start", fn_init: "STK.namespace.v6home.lib.message.upload.init", fn_complete: "STK.namespace.v6home.lib.message.upload.complete", fn_error: "STK.namespace.v6home.lib.message.upload.error", uid: $CONFIG.uid, source: "209678993", uploadAPI: "http://upload.api.weibo.com/2/mss/upload.json", flashURL: "http://service.weibo.com/staticjs/tools/upload.swf", fileType: "file", maxFileSize: 50, maxSumSize: 50, maxFileCount: 5, flash_width: 25, flash_height: 20, areaInfo: "0-20|10-22", flashID: "uploadflash_id_" + a.getUniqueKey(), multiSelect: 0, deleteConfirm: null, flashCssText: "", pasteEl: null}, d || {});
            if (!d.fileListNode)throw new Error("message.upload.loadSwf:缺少fileListNode作为文件容器！");
            if (d.fileType == "img") {
                i = a.C("div");
                i.className = "imgs clearfix";
                d.fileListNode.appendChild(i)
            } else i = d.fileListNode;
            var k = 50, l = 1, m = {}, n = {}, o = function (c, e) {
                var f = window.$CONFIG && window.$CONFIG.version || (new Date).getTime(), g = {swfid: d.flashID, maxSumSize: d.maxFileSize, maxFileSize: d.maxFileSize, maxFileNum: d.maxFileCount, multiSelect: 0, uploadAPI: encodeURIComponent(d.uploadAPI + "?source=209678993&tuid=" + d.uid), initFun: d.fn_init, sucFun: d.fn_complete, errFun: d.fn_error, beginFun: d.fn_start, areaInfo: d.areaInfo, fExt: d.fileType == "img" ? "*.jpg;*.gif;*.jpeg;*.png" : "*", fExtDec: d.fileType == "img" ? b("#L{选择图片}") : b("#L{选择文件}")}, h = a.core.util.swf.create(c, d.flashURL, {width: d.flash_width, height: d.flash_height, paras: {menu: "false", scale: "noScale", allowFullscreen: "true", allowScriptAccess: "always", bgcolor: "", wmode: "transparent"}, flashvars: g});
                return h
            }, p = function (a) {
                m[a.fid] = {fileName: a.fileName, fileSize: a.fileSize}
            }, q = function (b) {
                n[b.fid] = {fileName: b.fileName, fileSize: b.fileSize, vfid: b.data.vfid, tovfid: b.data.tovfid};
                a.custEvent.fire(e, "uploaded", [b.fid, n[b.fid]])
            }, r = function (a, b) {
            }, s = function (b) {
                var c = b.clipboardData, d, e, f;
                if (c) {
                    d = c.items;
                    if (!d)return;
                    f = d[0];
                    e = c.types || [];
                    for (var g = 0; g < e.length; g++)if (e[g] === "Files") {
                        f = d[g];
                        break
                    }
                    if (f && f.kind === "file" && f.type.match(/^image\//i)) {
                        var h = f.getAsFile(), i = new FileReader;
                        i.onload = function (b) {
                            a.lib.kit.extra.runFlashMethod(j, "screenCapture", function () {
                                j.screenCapture(b.target.result.split(",")[1])
                            })
                        };
                        i.readAsDataURL(h)
                    }
                }
            }, t = function () {
                var a = d.fileListNode.getAttribute("fids");
                a = (a || "").replace(/^\,/, "");
                return a && a.split(",") || []
            }, u = function () {
                var a = d.fileListNode.getAttribute("vfids");
                a = (a || "").replace(/^\,/, "");
                return a && a.split(",") || []
            }, v = function () {
                var a = d.fileListNode.getAttribute("tovfids");
                a = (a || "").replace(/^\,/, "");
                return a && a.split(",") || []
            }, w = function () {
                for (var a in m)if (!n[a])return!1;
                return!0
            }, x = function () {
                a.lib.kit.extra.installFlash()
            }, y = function (b) {
                var c = a.sizzle('[fid="' + b + '"]', i)[0], f = n[b] || {}, g = f.fileSize, h = f.vfid, k = f.tovfid;
                if (!c || !g)return a.log("找不到要删除的文件！");
                a.removeNode(c);
                var l = a.sizzle("[fid]", i);
                l.length || (d.fileListNode.style.display = "none");
                z("fids", b);
                h && z("vfids", h);
                k && z("tovfids", k);
                a.lib.kit.extra.runFlashMethod(j, "removeFileBySize", function () {
                    j.removeFileBySize(g)
                });
                a.custEvent.fire(e, "deleted", [b, n[b]]);
                delete m[b];
                delete n[b]
            }, z = function (a, b) {
                var c = d.fileListNode.getAttribute(a), e = c.replace("," + b, "");
                d.fileListNode.setAttribute(a, e)
            }, A = function () {
                try {
                    j.resetUploadedFileNum(0);
                    j.resetUploadedFileSize(0)
                } catch (a) {
                }
                d.fileListNode.style.display = "none";
                i.innerHTML = "";
                d.fileListNode.setAttribute("fids", "");
                d.fileListNode.setAttribute("vfids", "");
                d.fileListNode.setAttribute("tovfids", "");
                m = {};
                n = {}
            }, B = function (b) {
                var c = b.data.fid, e = a.sizzle('[fid="' + c + '"]', i)[0], f = (n[c] || {}).fileSize;
                a.removeNode(e);
                var g = a.sizzle("[fid]", i);
                g.length || (d.fileListNode.style.display = "none");
                delete m[c];
                a.lib.kit.extra.runFlashMethod(j, "cancelUpload", function () {
                    j.removeFileBySize(b.data.fid)
                })
            }, C = function (c) {
                var e = c.data;
                typeof d.deleteConfirm != "function" ? a.ui.confirm(b("#L{确定要删除该" + (d.fileType == "img" ? "图片" : "附件") + "？}"), {OK: function () {
                    y(e.fid)
                }}) : d.deleteConfirm(e, c)
            }, D = function (b) {
                a.lib.kit.extra.runFlashMethod(j, "resetUploadAPI", function () {
                    j.resetUploadAPI(b)
                })
            }, E = function () {
                c.style.position = "relative";
                h.style.cssText = d.flashCssText || "display:inline-block;position:absolute;left:0px;top:-2px;z-index:9999";
                c.appendChild(h);
                d.fileListNode.className = "sendbox_" + (d.fileType == "img" ? "img" : "file") + " S_line2"
            }, F = function () {
                f = a.delegatedEvent(d.fileListNode);
                f.add(d.fileType == "img" ? "deleteImg" : "deleteFile", "click", C);
                f.add(d.fileType == "img" ? "cancelImg" : "cancelFile", "click", B);
                a.custEvent.define(e, ["deleteConfirm", "uploading", "uploaded", "deleted"]);
                a.conf.channel.flashUpload.register("uploading", p);
                a.conf.channel.flashUpload.register("uploaded", q);
                a.conf.channel.flashUpload.register("uploading", r);
                d.fileType == "img" && d.pasteEl && d.pasteEl.addEventListener && d.pasteEl.addEventListener("paste", s)
            }, G = function () {
                f.destroy();
                a.custEvent.undefine(e, ["deleteConfirm", "uploading", "uploaded", "deleted"]);
                a.conf.channel.flashUpload.remove("uploading", p);
                a.conf.channel.flashUpload.remove("uploaded", q);
                a.removeNode(h)
            };
            e.resetUploadAPI = D;
            e.deleteFile = y;
            e.checkUploadComplete = w;
            e.getFids = t;
            e.getVfids = u;
            e.getTovfids = v;
            e.deleteAllFiles = A;
            e.destroy = G;
            E();
            F();
            if (a.lib.kit.extra.getFlashVersion() >= 10) {
                j = o(h);
                e.flashNode = j;
                if (i) {
                    i.setAttribute("id", d.flashID);
                    i.setAttribute("fileType", d.fileType);
                    i.setAttribute("swfid", j.getAttribute("id"))
                }
            } else a.addEvent(c, "click", x);
            return e
        }
    });
    STK.register("conf.channel.flashUpImg", function (a) {
        var b = ["initFun", "changeFlashHeightFun", "uploadCompleteFun", "closePhotoEditorFun", "cannelUpload", "completeUpload"];
        return a.lib.kit.extra.listener.define("conf.channel.flashUpImg", b)
    });
    STK.register("lib.message.upload.deleteItem", function (a) {
        return function (b, c, d) {
            var e;
            e = b;
            if (b.tagName != "LI")var f = a.core.dom.dir(b, {dir: "parent", expr: "li"}), e = f[0];
            var g = e.parentNode;
            a.removeNode(e);
            if (g.tagName == "UL") {
                a.sizzle("li", g).length == 0 && (g.style.display = "none");
                if (c == "delete") {
                    var h = d.fid, i = g.getAttribute("fid"), j = i.replace(h + ",", "");
                    g.setAttribute("fid", j)
                }
            }
        }
    });
    STK.register("lib.message.upload.getFlash", function (a) {
        return function (b) {
            return a.sizzle('[flashobj="' + b + '"]')[0]
        }
    });
    STK.register("lib.message.upload.delegateEvt", function (a) {
        var b = a.lib.kit.extra.language;
        return function (b) {
            var b = b, c = {}, d = function (b) {
                a.log("cancelUpload", b);
                var c = b.el, d = b.data, e = c.getAttribute("token"), f = d.swfId;
                a.lib.message.upload.deleteItem(c, "cancel", d);
                var g = a.lib.message.upload.getFlash(f);
                a.lib.kit.extra.runFlashMethod(g, "cancelUpload", function () {
                    try {
                        g.cancelUpload(e)
                    } catch (a) {
                    }
                });
                a.conf.channel.flashUpImg.fire("cannelUpload");
                return!1
            }, e = function (b) {
                var c = b.el, d = b.data, e = d.swfId;
                a.log(e);
                a.lib.message.upload.deleteItem(c, "delete", d);
                if (d.size) {
                    var f = a.lib.message.upload.getFlash(e);
                    a.lib.kit.extra.runFlashMethod(f, "afterDelete", function () {
                        f.afterDelete(d.size)
                    })
                }
                return!1
            }, f = function () {
                var c = a.lib.kit.dom.parseDOM(a.core.dom.builder(b.parentNode).list);
                c.uploadList.setAttribute("fid", "");
                c.uploadList.innerHTML = "";
                c.uploadList.style.display = "none"
            }, g = a.core.evt.delegatedEvent(b);
            g.add("cancelUpload", "click", d);
            g.add("deleteFile", "click", e);
            c.reset = f;
            return c
        }
    });
    STK.register("conf.trans.validateCode", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("checkValidate", {url: "/aj/pincode/verified", method: "post"});
        return b
    });
    STK.register("lib.dialog.validateCode", function (a) {
        var b = window.$LANG, c = a.lib.kit.extra.language, d = "/aj/pincode/pin?_wv=5&type=rule&lang=" + $CONFIG.lang + "&ts=", e = {dialog_html: '<div class="layer_point layer_verification"><div class="clearfix"><div class="v_img W_fl"><img height="25" width="250" class="yzm_img"/></div><div class="v_change W_fl"><a href="javascript:void(0);" class="yzm_change" action-type="yzm_change"><span class="W_ficon ficon_rotate S_ficon">e</span><span class="font S_txt1">#L{换一组}</span></a></div></div><div class="v_text yzm_wng"><span class="v_text">#L{请输入上面问题的答案}：</span><input type="text" class="yzm_input ontext W_input" action-type="yzm_input"/></div><div class="W_layer W_layer_pop yzm_error" style="display:none;top:70px;left:200px;"><div class="content layer_mini_info"><p class="main_txt"><i class="W_icon icon_rederrorS"></i><span class="txt S_txt1"></span><a class="W_ficon ficon_close S_ficon yzm_hideError">X</a></p><div class="W_layer_arrow"><span class="W_arrow_bor W_arrow_bor_b"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div></div><div class="W_layer_btn S_bg1"><a class="W_btn_a btn_34px yzm_submit" href="javascript:void(0);" action-type="yzm_submit">#L{确定}</a><a class="W_btn_b btn_34px yzm_cancel" href="javascript:void(0);" action-type="yzm_cancel" action-data="value=frombtn">#L{取消}</a></div>'}, f;
        return function () {
            if (f)return f;
            var b = {}, g = {}, h, i, j, k, l = function () {
                g.yzm_error.innerHTML = "";
                g.yzm_error_layer.style.display = "none";
                a.removeClassName(g.yzm_wng, "v_wrong")
            }, m = function (b) {
                g.yzm_error.innerHTML = b;
                g.yzm_error_layer.style.display = "";
                a.addClassName(g.yzm_wng, "v_wrong")
            }, n = function () {
                a.lib.kit.io.cssLoader("style/css/module/layer/layer_verifycode.css", "js_style_css_module_layer_layer_verifycode", function () {
                    h || o();
                    l();
                    h.setTop();
                    h.show();
                    t.changesrc();
                    h.setMiddle();
                    g.input_text.value = "";
                    a.hotKey.add(document.documentElement, ["esc"], t.closeDialog, {type: "keyup", disableInInput: !0})
                })
            }, o = function () {
                h = a.ui.dialog({isHold: !0});
                h.setTitle(c("#L{请输入验证码}"));
                h.setContent(c(e.dialog_html));
                h.on("hide", t.closeEvt);
                var b = h.getBox();
                s(b);
                u()
            }, p = function (b) {
                a.conf.trans.validateCode.request("checkValidate", {onError: function () {
                    m(c("#L{验证码错误}"));
                    t.changesrc();
                    j = !1;
                    g.input_text.value = ""
                }, onFail: function () {
                    m(c("#L{验证码错误}"));
                    t.changesrc();
                    g.input_text.value = "";
                    j = !1
                }, onSuccess: function (b, c) {
                    j = !1;
                    var d = b.data.retcode;
                    l();
                    g.input_text.value = "";
                    h.hide();
                    var e = i.requestAjax, f = a.lib.kit.extra.merge(i.param, {retcode: d});
                    e.request(f)
                }}, b)
            }, q = function () {
            }, r = function () {
            }, s = function (b) {
                g.vImg = a.core.dom.sizzle("img.yzm_img", b)[0];
                g.yzm_change = a.core.dom.sizzle("a.yzm_change", b)[0];
                g.yzm_submit = a.core.dom.sizzle("a.yzm_submit", b)[0];
                g.yzm_cancel = a.core.dom.sizzle("a.yzm_cancel", b)[0];
                g.input_text = a.core.dom.sizzle("input.yzm_input", b)[0];
                g.yzm_wng = a.core.dom.sizzle("div.yzm_wng", b)[0];
                g.yzm_error = a.core.dom.sizzle("div.yzm_error span.txt", b)[0];
                g.yzm_error_layer = a.core.dom.sizzle("div.yzm_error", b)[0];
                g.yzm_hideError = a.core.dom.sizzle(".yzm_hideError", b)[0]
            }, t = {enter: function () {
                a.fireEvent(g.yzm_submit, "click")
            }, changesrc: function () {
                var b = d + a.getUniqueKey();
                g.vImg.setAttribute("src", b);
                try {
                    g.yzm_change.blur()
                } catch (c) {
                }
            }, checkValidateCode: function () {
                l();
                var b = a.core.str.trim(g.input_text.value);
                b ? j || p({secode: b, type: "rule"}) : m(c("#L{请输入验证码}"));
                try {
                    g.yzm_submit.blur()
                } catch (d) {
                }
            }, closeEvt: function () {
                typeof i == "object" && i.onRelease && typeof i.onRelease == "function" && i.onRelease();
                a.hotKey.remove(document.documentElement, ["esc"], t.closeDialog, {type: "keyup"})
            }, closeDialog: function (b) {
                typeof b == "object" && b.el && h.hide();
                typeof i == "object" && i.onRelease && typeof i.onRelease == "function" && i.onRelease();
                a.hotKey.remove(document.documentElement, ["esc"], t.closeDialog, {type: "keyup"});
                try {
                    a.preventDefault()
                } catch (c) {
                }
            }, onFocus: function (b) {
                b = a.core.evt.getEvent();
                var c = b.target || b.srcElement, d = c.value;
                d || l()
            }}, u = function () {
                var b = h.getBox();
                k = a.core.evt.delegatedEvent(b);
                k.add("yzm_change", "click", function () {
                    t.changesrc();
                    a.preventDefault()
                });
                k.add("yzm_submit", "click", function () {
                    t.checkValidateCode();
                    a.preventDefault()
                });
                k.add("yzm_cancel", "click", t.closeDialog);
                a.core.evt.addEvent(g.yzm_hideError, "click", l);
                a.core.evt.addEvent(g.input_text, "focus", t.onFocus);
                a.core.evt.addEvent(g.input_text, "blur", t.onFocus);
                a.hotKey.add(g.input_text, ["enter"], t.enter, {type: "keyup"})
            }, v = function () {
                if (h) {
                    k.destroy();
                    a.core.evt.removeEvent(g.yzm_hideError, "click", l);
                    a.core.evt.removeEvent(g.input_text, "focus", t.onFocus);
                    a.core.evt.removeEvent(g.input_text, "blur", t.onFocus);
                    h && h.destroy && h.destroy()
                }
                j = h = f = null
            }, w = function (a, b, c) {
                if (a.code == "100027") {
                    i = c;
                    n()
                } else if (a.code === "100000")try {
                    var d = c.onSuccess;
                    d && d(a, b)
                } catch (e) {
                } else try {
                    var d = c.onError;
                    d && d(a, b)
                } catch (e) {
                }
            };
            r();
            r = null;
            b.destroy = v;
            b.validateIntercept = w;
            b.addUnloadEvent = function () {
                h && a.core.evt.addEvent(window, "unload", v)
            };
            f = b;
            return b
        }
    });
    STK.register("lib.message.upload.mergeFileCount", function (a) {
        return function (b, c) {
            var d = {};
            if (!b)return d;
            var e = c || {}, f = {}, g = parseInt(e.count) || 5, h = 0, i = function (c, d, e) {
                if (!f[d] && !!e) {
                    h++;
                    f[d] = e;
                    a.foreach(b, function (b, c) {
                        b.flashNode && a.lib.kit.extra.runFlashMethod(b.flashNode, "resetUploadedFileNum", function () {
                            b.flashNode.resetUploadedFileNum(h)
                        })
                    })
                }
            }, j = function (c, d, e) {
                if (!!f[d] && !!e) {
                    h--;
                    delete f[d];
                    a.foreach(b, function (b, c) {
                        b.flashNode && a.lib.kit.extra.runFlashMethod(b.flashNode, "resetUploadedFileNum", function () {
                            b.flashNode.resetUploadedFileNum(h)
                        })
                    })
                }
            };
            a.foreach(b, function (b, c) {
                b.flashNode && a.lib.kit.extra.runFlashMethod(b.flashNode, "resetFileNum", function () {
                    b.flashNode.resetFileNum(g)
                });
                a.custEvent.add(b, "uploaded", i);
                a.custEvent.add(b, "deleted", j)
            })
        }
    });
    STK.register("lib.kit.dom.parentAttr", function (a) {
        return function (a, b, c) {
            var d;
            if (a && b) {
                c = c || document.body;
                while (a && a != c && !(d = a.getAttribute(b)))a = a.parentNode
            }
            return d
        }
    });
    STK.register("lib.kit.extra.getDiss", function (a) {
        return function () {
            var b = {}, c = 0, d = {location: $CONFIG.location};
            arguments[0] && !a.core.dom.isNode(arguments[0]) && (b = arguments[c++]);
            b = a.lib.kit.extra.merge(b, d);
            if (!arguments[c])return b;
            b = a.lib.kit.extra.merge(b, a.core.json.queryToJson(a.lib.kit.dom.parentAttr(arguments[c++], "diss-data", arguments[c]) || ""));
            return b
        }
    });
    STK.register("conf.channel.at", function (a) {
        var b = ["open", "close"];
        return a.lib.kit.extra.listener.define("conf.channel.at", b)
    });
    STK.register("lib.kit.dom.autoHeightTextArea", function (a) {
        var b = a.core.util.browser.MOZ, c = a.core.util.browser.IE6 || a.core.util.browser.IE7 || a.core.util.browser.IE8, d = function (d) {
            var e = a.core.dom.getStyle, f;
            d.defaultHeight || (d.defaultHeight = parseInt(e(d, "height"), 10) || parseInt(d.offsetHeight, 10) || 20);
            if (c) {
                var g = parseInt(e(d, "paddingTop"), 10) + parseInt(e(d, "paddingBottom"), 10);
                f = Math.max(d.scrollHeight - g, d.defaultHeight)
            } else {
                var g = b ? 0 : parseInt(e(d, "paddingTop"), 10) + parseInt(e(d, "paddingBottom"), 10), h = a.E("_____textarea_____");
                if (!h) {
                    h = a.C("textarea");
                    h.id = "_____textarea_____";
                    document.body.appendChild(h)
                }
                if (h.currentTarget != d) {
                    var i = [];
                    i.push("width:" + e(d, "width"));
                    i.push("font-size:" + e(d, "fontSize"));
                    i.push("font-family:" + e(d, "fontFamily"));
                    i.push("line-height:" + e(d, "lineHeight"));
                    i.push("padding-left:" + e(d, "paddingLeft"));
                    i.push("padding-right:" + e(d, "paddingRight"));
                    i.push("padding-top:" + e(d, "paddingTop"));
                    i.push("padding-bottom:" + e(d, "paddingBottom"));
                    i.push("top:-1000px");
                    i.push("height:0px");
                    i.push("position:absolute");
                    i.push("overflow:hidden");
                    i.push("");
                    i = i.join(";");
                    h.style.cssText = i
                }
                h.value = d.value;
                f = Math.max(h.scrollHeight - g, d.defaultHeight);
                h.currentTarget = d
            }
            return f
        };
        return function (b) {
            function j(b) {
                var c = a.core.dom.getStyle, d, e = [];
                e.push("width:" + c(b, "width"));
                e.push("font-size:" + c(b, "fontSize"));
                e.push("font-family:" + c(b, "fontFamily"));
                e.push("line-height:" + c(b, "lineHeight"));
                e.push("padding-left:" + c(b, "paddingLeft"));
                e.push("padding-right:" + c(b, "paddingRight"));
                e.push("padding-top:" + c(b, "paddingTop"));
                e.push("padding-bottom:" + c(b, "paddingBottom"));
                e.push("top:-1000px");
                e.push("height:0px");
                e.push("position:absolute");
                e.push("overflow:hidden");
                e.push("");
                e = e.join(";");
                return e
            }

            var c = b.textArea, e = b.maxHeight, f = b.inputListener, g = c.style, h;
            (h = function () {
                typeof f == "function" && f();
                setTimeout(function () {
                    var a = d(c), b;
                    e = e || a;
                    var f = a > e;
                    b = f ? e : a;
                    g.overflowY = f ? "auto" : "hidden";
                    g.height = Math.min(e, a) + "px"
                }, 0)
            })();
            if (!a.core.util.browser.IE)try {
                a.conf.channel.at.register("open", function () {
                    a.E("_____textarea_____").style.cssText = j(c)
                })
            } catch (i) {
                a.log(i)
            }
            if (!c.binded) {
                a.addEvent(c, "keyup", h);
                a.addEvent(c, "focus", h);
                a.addEvent(c, "blur", h);
                c.binded = !0;
                c.style.overflow = "hidden"
            }
        }
    });
    STK.register("lib.kit.extra.keySubmit", function (a) {
        function f(c, e) {
            var f = a.core.dom.uniqueID(c);
            if (f in b) {
                var g = a.core.arr.indexOf(e, b[f]);
                g >= 0 && b[f].splice(g, 1);
                if (b[f].length == 0) {
                    delete b[f];
                    a.removeEvent(c, "keydown", d)
                }
            }
        }

        function e(c, e) {
            var f = a.core.dom.uniqueID(c);
            if (f in b)a.core.arr.inArray(e, b[f]) || b[f].push(e); else {
                b[f] = [e];
                a.addEvent(c, "keydown", d)
            }
        }

        function d(d) {
            d = a.fixEvent(d);
            var e = a.core.dom.uniqueID(d.target), f = d.keyCode === 13 || d.keyCode === 10;
            f && (c && d.metaKey || !c && d.ctrlKey) && b[e] && a.foreach(b[e], function (a) {
                a(d)
            })
        }

        var b = {}, c = a.core.util.browser.OS === "macintosh";
        return{on: e, off: f}
    });
    STK.register("lib.message.sendMessage", function (a) {
        var b = a.lib.kit.extra.language, c = 1e4;
        return function (d) {
            d = d || {};
            var e, f, g, h, i = b("#L{请输入对方昵称}"), j = {}, k, l, m, n, o, p = a.lib.dialog.validateCode(), q, r, s = 0, t, u, v, w = d.touid || 0, x = d.style_id || 1, y, z;
            if (d && d.mid) {
                q = "forward";
                t = d.mid;
                u = d.is_send
            }
            var A, B, C = q == "forward" ? b("#L{转发私信}") : b("#L{发私信}"), D = function (a, c) {
                c == "normal" ? a.innerHTML = b("#L{发送}") : a.innerHTML = b("#L{提交中...}")
            }, E = {submitsendMessage: function (b) {
                if (!N.isSending()) {
                    if (!e) {
                        a.lib.kit.extra.shine(B.nodeList.textEl);
                        return
                    }
                    if (a.trim(r.screen_name.value) == i || a.trim(r.screen_name.value).length == 0) {
                        a.ui.alert(i);
                        return
                    }
                    var c = [].concat(z.getTovfids(), fileupload.getTovfids()), d = c.join(","), g = {text: B.API.getWords(), screen_name: r.screen_name.value, id: s, fids: d, touid: w, style_id: x};
                    N.disableSubmit();
                    try {
                        r.textEl.blur()
                    } catch (h) {
                    }
                    sendParams = g;
                    P();
                    a.preventDefault();
                    f = !0
                }
            }, publishBtn: function () {
                var a = B.API.getWords(), b = B.API.count(a), d = b <= c && b > 0 ? !0 : !1;
                !d || a.length === 0 ? e = !1 : e = !0
            }, addFocusState: function () {
                r.uploadTd && a.addClassName(r.uploadTd, "sendbox_mod_focus")
            }, removeFocusState: function () {
                r.uploadTd && a.removeClassName(r.uploadTd, "sendbox_mod_focus")
            }}, F = function () {
                var a = d.content || "", b = d.userName ? d.userName : i;
                A = '<div class="layer_private_letter"><div class="form_private"><dl class="private_sendto clearfix"><dt class="tit W_fl">#L{发给：}</dt><dd class="W_fl"><input type="text" node-type="screen_name" class="text W_input" value="' + b + '"></dd>' + "</dl>" + '<dl class="private_sendbox clearfix">' + '<dt class="tit W_fl">#L{内容：}</dt>' + '<dd class="sendbox_mod W_fl" node-type="uploadTd">' + '<div class="sendbox_area"><textarea name="" class="W_no_outline W_input" node-type="textEl">' + a + "</textarea></div>" + '<div class="sendbox_annex S_bg2 S_line3">' + '<div class="sendbox_file S_line2" style="display:none" node-type="fileuploadList">' + "</div>" + '<div class="sendbox_img S_line2" style="display:none"  node-type="imguploadList">' + "</div>" + "</div>" + '<div class="sendbox_bar clearfix">' + '<div class="sendbox_menu W_fl" node-type="widget">' + '<a href="javascript:;" node-type="smileyBtn" title="表情" class="icon_send"><em class="W_ficon ficon_face">o</em></a>' + '<a href="javascript:;" node-type="picBtn" title="图片" class="icon_send"><em class="W_ficon ficon_image">p</em></a>' + '<a href="javascript:;" node-type="attachBtn" title="文件" class="icon_send"><em class="W_ficon ficon_file">x</em></a>' + '<div id="uploadSwf" node-type="uploadSwf" class="flash"></div>' + "</div>" + '<div class="sendbox_btn W_fr" >' + '<span style="display:none;" node-type="numout"><span class="prompt S_txt1" node-type="num">#L{还可以输入%s字}</span></span>' + '<a href="javascript:void(0);" class="W_btn_a  btn_30px" diss-data="module=msglayout" node-type="submit" action-type="submit"><em node-type="btnText">#L{发送}</em></a>' + "</div>" + "</div>" + "</dd>" + "</dl>" + "</div>" + "</div>"
            }, G = function (a, b) {
                r.numout.style.display = B.API.count() > c ? "" : "none"
            }, H = function () {
                o = new a.lib.follow.myFollowSuggest({type: 1, textNode: r.screen_name, list_template: "", callback: function () {
                }});
                o.show();
                var b = a.lib.kit.dom.smartInput(r.screen_name, {notice: i});
                a.addEvent(r.textEl, "focus", function () {
                    n = setInterval(function () {
                        E.publishBtn()
                    }, 200)
                });
                a.addEvent(r.textEl, "blur", function () {
                    clearInterval(n)
                });
                B = a.lib.editor.base(m, {limitNum: c}).editor;
                a.custEvent.add(B, "textNum", G);
                var d = a.lib.publisher.widget.face(B), e = a.sizzle('[node-type="smileyBtn"]', m)[0];
                a.addEvent(e, "click", d.show);
                L()
            }, I = function () {
                a.conf.trans.message.getTrans("getDetail", {onSuccess: function (b) {
                    B.API.insertText(b.data.content);
                    s = b.data.status_id;
                    var c = 0, d = 0;
                    for (var e = 0, f = b.data.fids.length; e < f; e++)try {
                        a.lib.content.message.upload.addItem(r.uploadList, b.data.fids[e].file_name, b.data.fids[e]);
                        c += b.data.fids[e].size * 1;
                        d += 1
                    } catch (g) {
                    }
                    var i = r.uploadList.getAttribute("swfid"), j = a.lib.content.message.upload.getFlash(i);
                    h = a.lib.kit.extra.runFlashMethod(j, "setInitSize", function () {
                        j.setInitSize(d, c)
                    })
                }, onError: function (b) {
                    a.ui.alert(b.msg)
                }}).request({mid: t, is_send: u})
            }, J = function (c, d) {
                a.ui.confirm(b("#L{确认删除？}"), {OK: function () {
                    z.deleteFile(d.fid, d.fileSize)
                }})
            }, K = function (c, d) {
                a.ui.confirm(b("#L{确认删除？}"), {OK: function () {
                    fileupload.deleteFile(d.fid, d.fileSize)
                }})
            }, L = function () {
                fileupload = a.lib.message.upload.loadSwf(r.picBtn, {fileType: "img", fileListNode: r.fileuploadList});
                z = a.lib.message.upload.loadSwf(r.attachBtn, {fileListNode: r.imguploadList});
                a.custEvent.add(z, "deleteConfirm", J);
                a.custEvent.add(fileupload, "deleteConfirm", K);
                v = a.lib.message.upload.mergeFileCount([fileupload, z])
            }, M = function () {
                k = a.ui.dialog();
                k.setTitle(C);
                var d = b(A, "<em>" + c + "</em>");
                k.setContent(d).show();
                k.on("beforeHide", function () {
                    if (E.checkContent() && f != !0) {
                        a.ui.confirm(b("#L{你的私信尚未发送，确定要丢弃该条私信吗}?"), {OK: function () {
                            k.hide()
                        }, cancel: function () {
                            return!0
                        }});
                        return!1
                    }
                    r.screen_name.blur();
                    r.textEl.blur();
                    r.submit.focus();
                    o.hide();
                    o.destroy();
                    return!0
                })
            }, N = {enableSubmit: function () {
                r.submit.isSending = !1;
                r.submit.className = "W_btn_a btn_30px btn_noloading";
                D(r.btnText, "normal")
            }, disableSubmit: function () {
                r.submit.isSending = !0;
                r.submit.className = "W_btn_a btn_30px W_btn_a_disable";
                D(r.btnText, "loading")
            }, isSending: function () {
                return r.submit.isSending
            }}, O = function () {
                sendParams && N.enableSubmit()
            }, P = function (a) {
                if (!fileupload.checkUploadComplete() || !z.checkUploadComplete())setTimeout(function () {
                    P(a)
                }, 100); else {
                    var b = [].concat(z.getTovfids(), fileupload.getTovfids());
                    fids = b.join(",");
                    sendParams = {text: B.API.getWords(), screen_name: r.screen_name.value, id: s, fids: fids, touid: w, style_id: x};
                    g.request(sendParams)
                }
            }, Q = function () {
                m = k.getOuter();
                r = a.lib.kit.dom.parseDOM(a.builder(m).list);
                l = a.delegatedEvent(m);
                l.add("submit", "click", E.submitsendMessage);
                a.lib.kit.extra.keySubmit.on(r.textEl, E.submitsendMessage);
                a.addEvent(r.textEl, "focus", E.addFocusState);
                a.addEvent(r.textEl, "blur", E.removeFocusState);
                a.lib.kit.dom.autoHeightTextArea({textArea: r.textEl, maxHeight: 9999})
            }, R = {createSuccess: function (c) {
                sendParams = null;
                N.enableSubmit();
                k.hide();
                a.ui.tip("lite", {msg: b("#L{恭喜，私信发送成功啦。}"), type: "succM", timer: "500", hideCallback: function () {
                    a.conf.channel.message.fire("create", c.data)
                }})
            }, createError: function (b) {
                sendParams = null;
                N.enableSubmit();
                a.lib.dialog.ioError(b.code, b)
            }, createFail: function () {
                sendParams = null;
                N.enableSubmit()
            }}, S = function () {
                M();
                q == "forward" && I();
                g = a.conf.trans.message.getTrans("create", {onComplete: function (a, b) {
                    var c = {onSuccess: R.createSuccess, onError: R.createError, requestAjax: g, param: b, onRelease: function () {
                        N.enableSubmit()
                    }};
                    p.validateIntercept(a, b, c)
                }, onFail: R.createFail})
            }, T = function () {
                F();
                S();
                Q();
                H()
            };
            T();
            j.show = function () {
                k.show();
                a.preventDefault()
            };
            j.destroy = function () {
                h && h.destroy && h.destroy();
                v && v.destroy && v.destroy();
                a.custEvent.remove(z, "deleteConfirm", J);
                a.custEvent.remove(fileupload, "deleteConfirm", K);
                l && l.destroy && l.destroy();
                fileupload && fileupload.destroy && fileupload.destroy();
                z && z.destroy && z.destroy();
                a.lib.kit.extra.keySubmit.off(r.textEl, E.submitsendMessage);
                a.removeEvent(r.textEl, "focus", E.addFocusState);
                a.removeEvent(r.textEl, "blur", E.removeFocusState);
                k = m = fileupload = z = null
            };
            j.hide = function () {
                k.hide();
                a.preventDefault()
            };
            j.originShow = function () {
                j.show()
            };
            return j
        }
    });
    STK.register("lib.browser.plugin.weiboDesktop", function (a) {
        return function () {
            var b = $CONFIG.uid, c = {pluginName: "npWeiboDesktopAssist Plugin", activeXName: "WeiboDesktopAssist.WBDesktopAssistCom.1"}, d = {embedId: "WeiboDesktopAssistCom", embedType: "application/x-weibodesktopassist-sina"}, e = {param: "oninvokebymessageevent"}, f = null, g = {}, h = a.lib.browser.plugin.plugInstallState(c, d, e, f);
            g.getInstance = function () {
                f = h.instance;
                return f
            };
            g.isInstalled = function () {
                var a = h.getInstallState();
                return a === "installed" || a === "ieinstalled" ? !0 : !1
            };
            g.invokeDesk = function (a, c) {
                f.oninvokebymessageevent = function (b) {
                    b == 0 && c(a)
                };
                f.InvokeDesktop(b, a.uid)
            };
            return g
        }
    });
    STK.register("lib.cite.webim", function (a) {
        var b = window, c = 1e3, d = a.namespace();
        return function () {
            var c = function (b) {
                if (d.webim && d.webim.ui && d.webim.ui.uiEvent && d.webim.ui.uiEvent.fire && g) {
                    b.content ? k(b, 1) : window.setTimeout(function () {
                        d.webim.ui.uiEvent.fire("ui.user.click", {uid: b.uid})
                    }, 0);
                    return!1
                }
                try {
                    if (b.content)k(b, 2); else {
                        var c = a.lib.message.sendMessage({uid: b.uid, userName: b.nick || "", content: b.content || ""});
                        c.originShow()
                    }
                } catch (e) {
                }
            }, e = a.delegatedEvent(document);
            if (a.E("wbim_box") || navigator.platform.indexOf("iPad") !== -1 || b.$CONFIG && b.$CONFIG.pageid === "content_sorry")e.add("webim.conversation", "click", function (a) {
                c(a.data)
            }); else {
                var f = !1, g = !0;
                window.__PubSub__ = window.__PubSub__ || a.lib.message.IMpubSub();
                window.__PubSub__ && window.__PubSub__.subscribe("webim.connected", function () {
                    f = !0
                });
                window.__PubSub__ && window.__PubSub__.subscribe("webim.display", function (a) {
                    g = a.show
                });
                var h = a.lib.kit.extra.language, i = a.lib.dialog.validateCode(), j, k = function (b, c) {
                    var e = {createSuccess: function (b, c) {
                        if (c.type == 1)window.setTimeout(function () {
                            d.webim.ui.uiEvent.fire("ui.user.click", {uid: c.uid})
                        }, 100); else if (c.type == 2)a.ui.tip("lite", {msg: h("#L{恭喜，私信发送成功啦。}"), type: "succ", timer: "500", hideCallback: function () {
                            a.conf.channel.message.fire("create", b.data)
                        }}); else if (c.type == 3) {
                            j.invokeDesk(c, function () {
                            });
                            l(c)
                        }
                    }, createError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}, f = a.conf.trans.message.getTrans("create", {onComplete: function (a, b) {
                        var d = {onSuccess: e.createSuccess, onError: e.createError, requestAjax: f, param: b, onRelease: function () {
                        }};
                        b.type = c;
                        i.validateIntercept(a, b, d)
                    }});
                    f.request(a.lib.kit.extra.merge({text: b.content, screen_name: b.nick, location: $CONFIG.location}, b))
                }, l = function (b) {
                    if (d.webim && d.webim.ui && d.webim.ui.uiEvent && d.webim.ui.uiEvent.fire) {
                        window.setTimeout(function () {
                            d.webim.ui.uiEvent.fire("ui.user.click", {uid: b.uid})
                        }, 210);
                        return!1
                    }
                    a.ui.tip("lite", {msg: h("#L{恭喜，私信发送成功啦。}"), type: "succ", timer: "500", hideCallback: function () {
                        a.conf.channel.message.fire("create", rt.data)
                    }})
                };
                e.add("webim.conversation", "click", function (b) {
                    var d = b.el, e = b.data, f = e.uid;
                    j = a.lib.browser.plugin.weiboDesktop();
                    if (j.isInstalled() && j.getInstance() != null)if (e.content)k(e, 3); else try {
                        j.invokeDesk(e, c)
                    } catch (g) {
                        c(e)
                    } else c(e)
                });
                e.add("grouptalk", "click", function (b) {
                    var c = b.data;
                    if (window.$WBIM && g) {
                        window.$WBIM && $WBIM.publish("IM:conversation", {gid: c.gid});
                        return a.preventDefault()
                    }
                })
            }
        }
    });
    STK.register("conf.trans.follow", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("follow", {url: "/aj/f/followed", method: "post"});
        c("unFollow", {url: "/aj/f/unfollow", method: "post"});
        c("block", {url: "/aj/f/addblack", method: "post"});
        c("unBlock", {url: "/aj/f/delblack", method: "post"});
        c("removeFans", {url: "/aj/f/remove", method: "post"});
        c("follow_object", {url: "/p/aj/relation/follow", method: "post"});
        c("unFollow_object", {url: "/p/aj/relation/unfollow", method: "post"});
        c("unloginfollow", {url: "/p/aj/official/unloginfollow", method: "post"});
        c("proxy", {url: "/aj/proxy", method: "post"});
        return b
    });
    STK.register("conf.channel.follow", function (a) {
        var b = ["changeStatus"];
        return a.lib.kit.extra.listener.define("conf.channel.follow", b)
    });
    STK.register("lib.follow.utils.follow", function (a) {
        var b = a.lib.kit.extra.merge, c = a.conf.channel.follow;
        return function (d) {
            var e = {};
            d = a.parseParam({trans: a.conf.trans.follow, transNameFollow: "follow", transNameUnfollow: "unFollow", transNameBlock: "block", transNameUnBlock: "unBlock", transNameRemoveFans: "removeFans", refer_sort: "", refer_flag: ""}, d);
            var f = a.lib.kit.extra.merge, g = a.lib.dialog.validateCode(), h = function (b, c) {
                a.lib.dialog.ioError(b.code, b)
            }, i = function (e, h) {
                var j = b({uid: undefined, objectid: undefined, f: 0, extra: "", refer_sort: d.refer_sort, refer_flag: d.refer_flag, location: window.$CONFIG && $CONFIG.location || "", oid: window.$CONFIG && $CONFIG.oid || "", wforce: 1, nogroup: !1}, h), k = e + (j.objectid ? "_object" : "");
                if (e === "follow") {
                    j.api ? transtype = "proxy" : j.unlogin && (transtype = "unloginfollow");
                    var l = d.trans.getTrans(k, {onComplete: function (b, d) {
                        var j = {onSuccess: function (a, b) {
                            var d = f(h, a.data), g = h.onSuccessCb;
                            typeof g == "function" && g(d);
                            c.fire("changeStatus", {uid: d.uid, objectid: d.objectid, action: e, both: d.relation && d.relation.follow_me == 1})
                        }, onError: function (b, c) {
                            b.code == 100050 ? a.ui.confirm(b.msg, {OK: function () {
                                h.wforce = 0;
                                i(e, h)
                            }}) : a.lib.dialog.ioError(b.code, b);
                            var d = h.onFailCb;
                            typeof d == "function" && d()
                        }, requestAjax: l, param: d, onRelease: function () {
                            var a = h.onFailCb;
                            typeof a == "function" && a()
                        }};
                        g.validateIntercept(b, d, j)
                    }});
                    l.request(j)
                } else d.trans.request(k, {onSuccess: function (a, b) {
                    var d = f(h, a.data), g = h.onSuccessCb;
                    typeof g == "function" && g(d);
                    c.fire("changeStatus", {uid: d.uid, objectid: d.objectid, action: e, fan: d.relation && d.relation.follow_me == 1})
                }, onError: function (b, c) {
                    a.lib.dialog.ioError(b.code, b);
                    var d = h.onFailCb;
                    typeof d == "function" && d()
                }}, j)
            };
            e.follow = function (a) {
                i(d.transNameFollow, a)
            };
            e.unFollow = function (a) {
                i(d.transNameUnfollow, a)
            };
            e.block = function (a) {
                i(d.transNameBlock, a)
            };
            e.unBlock = function (a) {
                i(d.transNameUnBlock, a)
            };
            e.removeFans = function (a) {
                i(d.transNameRemoveFans, a)
            };
            return e
        }
    });
    STK.register("conf.trans.setGroup", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("list", {url: "/aj/f/group/list", method: "get"});
        c("update", {url: "/aj/f/group/update", method: "post"});
        c("batchSet", {url: "/aj3/attention/aj_group_batchupdate_v4.php", method: "post"});
        c("add", {url: "/aj/f/group/add", method: "post"});
        c("recommendfollow", {url: "/aj/f/recomafterfollow", method: "get"});
        c("closerecommend", {url: "/aj/f/closerecommend", method: "get"});
        c("checkcloserelation", {url: "/aj/f/checkcloserelation", method: "post"});
        c("addCloseFriend", {url: "/aj/f/createclosefriend", method: "post"});
        c("followGroup", {url: "/aj/f/group/followedgroup", method: "post"});
        return b
    });
    STK.register("lib.kit.extra.parseURL", function (a) {
        return function () {
            return STK.historyM && STK.historyM.parseURL ? STK.historyM.parseURL() : a.core.str.parseURL(location.href)
        }
    });
    STK.register("lib.dialog.groupListPanel", function (a) {
        var b = a.lib.kit.extra.language, c = b("#L{我的推荐}");
        return function (c) {
            var d = {}, e = a.C("div"), f = {}, g = {}, h, i = a.delegatedEvent(e), j = $CONFIG.imgPath + "style/images/common/transparent.gif", k = [
                {mode: "special", className: "W_ico16 i_conn_public", title: b("#L{所有人可见}")},
                {mode: "normal", className: "W_ico16 i_conn_public", title: b("#L{所有人可见}")}
            ], l = function (a, b, c) {
                if (!!a) {
                    c && (c = c.toUpperCase());
                    var d = a[b];
                    while (d) {
                        if (d.nodeType == 1 && (c ? d.nodeName == c : !0))break;
                        d = d[b]
                    }
                    return d
                }
            }, m = c.multi ? 'style="display:none;"' : '<#if (item.belong==1)><#else>style="display:none;"</#if>', n = '<ul node-type="#{mode}" class="group_ul #{addOnClass} clearfix"></ul>', o = a.core.util.easyTemplate('<#et listItem gList><#list gList as item><li class="group_li" ><label for="${item.gid}"><input action-type="select" id="${item.gid}" type="checkbox"<#if (item.recom_join)> recom_join="1" </#if><#if (item.belong==1 || item.recom_join || item.gid == 0)>checked="checked"</#if> <#if (item.ogname)>ogname="${item.ogname}"</#if>class="W_checkbox" value="${item.gid}"><span class="group_name <#if (item.gid==0 || item.recom_join)>W_autocut</#if>"  node-type="gplist_${item.gid}_gname"><span><#if (item.ogname)>${item.ogname}<#elseif (item.gname)>${item.gname}</#if></span><#if (item.needIcon == 1)><span class="W_icon icon_askS" action-type="specialAttentionTip"></span><#elseif (item.gid == 0)><i class="new_group_tag">' + b("#L{新分组}") + "</i></#if>" + "<#if (item.gid == 0)>" + '<em class="S_txt2">(' + b("#L{建议创建并加到该组}") + '</em></span><em class="S_txt2">)</em>' + "<#elseif (item.recom_join)>" + '<em class="S_txt2">(' + b("#L{建议加到该组}") + '</em></span><em class="S_txt2">)</em>' + "</#if>" + "<#if (item.recom_add)>" + '<em class="S_txt2">(' + b("#L{勾选此组即可将这个帐号推荐给粉丝}") + '</em></span><em class="S_txt2">)</em>' + "</#if>" + "</label>" + "</li>" + "</#list>" + "</#et>"), p, q = '<div class="W_layer W_layer_pop"><div class="content layer_mini_info"> <p class="main_txt"><i class="W_icon icon_succ"></i><span class="txt S_txt1">#L{不想错过Ta的每一条微博？<br>可以将其加到这个分组里，方便在首页查看}</span></p><div class="W_layer_arrow"><span node-type="arrow" class="W_arrow_bor"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div>', r = function (b) {
                var c = document.createTextNode(b), d = a.C("div");
                d.appendChild(c);
                var e = d.innerHTML;
                d = c = null;
                return e
            }, s = function () {
                var b = "";
                for (var d = 0; d < k.length; d++) {
                    d != k.length - 1 ? k[d].addOnClass = "spec" : k[d].addOnClass = "";
                    b += a.templet(n, k[d])
                }
                e.innerHTML = b;
                h = a.lib.kit.dom.parseDOM(a.core.dom.builder(e).list);
                c.data && A(c.data)
            }, t = function () {
                for (var b = 0; b < k.length; b++) {
                    var d = k[b].mode;
                    if (d == "system" && f[d]) {
                        c.fromFollow && a.foreach(f[d], function (a, b) {
                            a.fromFollow = 1
                        });
                        var e = o(f[d]).toString(), g = c.fromFollow ? h.special : h.normal;
                        g && a.insertHTML(g, e, "afterbegin")
                    } else if (f[d]) {
                        var e = o(f[d]).toString();
                        h[d].innerHTML += e
                    }
                }
                !f.special && h.special && (h.special.style.display = "none")
            };
            lengthLimit = function (b) {
                var c = a.fixEvent(b).target;
                a.bLength(c.value) > 16 && (c.value = a.leftB(c.value, 16))
            }, onEnter = function (b) {
                if (b.keyCode === 13) {
                    var c = a.fixEvent(b).target;
                    a.fireEvent(c, "blur")
                }
            };
            var u = function (b) {
                var c = l(b, "parentNode", "li");
                if (!!c) {
                    var d = a.sizzle('input[action-type="select"]', c)[0];
                    g[d.id] || (g[d.id] = {});
                    return g[d.id]
                }
            }, v = {show: function (c) {
                p = a.ui.bubble(b(q)).show().beside(c.el, {pos: "bottom-left", offsetX: -10, offsetY: 2})
            }, hide: function () {
                p.hide()
            }}, w = function () {
                i.add("specialAttentionTip", "mouseover", v.show);
                i.add("specialAttentionTip", "mouseout", v.hide)
            }, x = function () {
                s();
                w()
            }, y = function () {
                return e
            }, z = function (b) {
                var c = b.mode || "normal";
                f[c] = f[c] || [];
                f[c].push(b);
                var d = o([b]).toString();
                a.insertHTML(h[c], d, "beforeend")
            }, A = function (d) {
                f = {};
                if (a.isArray(d))for (var e = 0, g = d.length; e < g; e++) {
                    d[e].gid == "0" || d[e].recom_join == 1 ? d[e].mode = "special" : d[e].mode = "normal";
                    c.fromFollow && d[e].gname == b("#L{特别关注}") && (d[e].needIcon = 1);
                    var h = d[e].mode;
                    f[h] = f[h] || [];
                    f[h].push(d[e])
                }
                t()
            }, B = function () {
                var b = [], c = {suda: [], diss: {allGroup: 0, autoSelect: 0, gid: [], uid: $CONFIG.uid}}, d = a.sizzle('input[action-type="select"]', e), f, g;
                c.diss.allGroup = d.length;
                for (var h = d.length; h--;) {
                    var i = {};
                    f = g = !1;
                    if (d[h].checked) {
                        f = !0;
                        var j = u(d[h]);
                        if (j) {
                            i.gid = d[h].value;
                            i.gid == "0" && (i.ogname = d[h].getAttribute("ogname") || "");
                            b.push(i)
                        }
                    }
                    if (d[h].getAttribute("recom_join")) {
                        g = !0;
                        c.diss.autoSelect++;
                        c.diss.gid.push(d[h].value)
                    }
                    (g || f) && c.suda.push(d[h].value + (g ? "_a" : "_b") + (f ? "_1" : "_0"))
                }
                b.suda_diss = c;
                return b
            }, C = function () {
                t()
            }, D = function () {
                f = {};
                t()
            }, E = function () {
                i.destroy();
                g = null;
                f = null;
                h = null;
                e = null
            }, F = function () {
                var b = a.sizzle('input[action-type="select"]', e);
                return b.length
            };
            x();
            d.getOuter = y;
            d.length = F;
            d.add = z;
            d.setData = A;
            d.getData = B;
            d.reset = C;
            d.clear = D;
            d.destroy = E;
            return d
        }
    });
    STK.register("lib.dialog.vipError", function (a) {
        var b = '<#et temp data><div node-type="outer" class="layer_point"><dl class="point clearfix"><dt><span class="${data.icon}" node-type="icon"></span></dt><dd node-type="inner">${data.info}</dd></dl></div><div class="W_layer_btn S_bg1"><a href="javascript:void(0);" <#if (data.lbtnStyle == 1)>class="W_btn_a"<#else if (data.lbtn == 0)>class="W_btn_b"</#if> node-type="lbtn"><span><#if (data.lbtnIcon == 1)><i class="W_icon icon_member"></i></#if>${data.lbtnText}</span></a><a href="javascript:void(0);" <#if (data.rbtnStyle == 1)>class="W_btn_a"<#else if (data.rbtn == 0)>class="W_btn_b"</#if> node-type="rbtn"><span><#if (data.rbtnIcon == 1)><i class="W_icon icon_member"></i></#if>${data.rbtnText}</span></a></div></#et>', c = {success: "icon_succM", error: "icon_errorM", warn: "icon_warnM", "delete": "icon_delM", question: "icon_questionM"}, d = a.lib.kit.extra.language, e = function (e) {
            var f, g, h;
            f = a.parseParam({title: "&nbsp;", icon: "warn", info: "", lbtnFunc: a.funcEmpty, lbtnStyle: 0, lbtnIcon: 0, lbtnText: d("#L{立即开通会员}"), rbtnFunc: a.funcEmpty, rbtnStyle: 0, rbtnIcon: 0, rbtnText: d("#L{立即开通会员}")}, e);
            f.icon = c[f.icon];
            g = a.ui.dialog();
            g.setContent(a.core.util.easyTemplate(b, f).toString());
            h = g.getDomList(!0);
            g.setTitle(f.title);
            g.getDomList().title.style.borderBottomStyle = "none";
            var i = function () {
                f.lbtnFunc();
                g.hide()
            }, j = function () {
                f.rbtnFunc();
                g.hide()
            };
            a.addEvent(h.lbtn, "click", i);
            a.addEvent(h.rbtn, "click", j);
            a.custEvent.add(g, "hide", function () {
                a.custEvent.remove(g, "hide", arguments.callee);
                a.removeEvent(h.lbtn, "click", i);
                a.removeEvent(h.rbtn, "click", j)
            });
            g.show().setMiddle();
            return g
        };
        return function (a, b) {
            if (a == "100096" || a == "100098") {
                b.lbtnStyle = 0;
                b.lbtnIcon = 0;
                b.lbtnText = d("#L{管理分组}");
                b.rbtnStyle = 1;
                b.rbtnIcon = 1;
                b.rbtnText = d("#L{开通会员}");
                b.rbtnFunc = function () {
                    location.href = "http://vip.weibo.com/paycenter?form=group"
                }
            } else if (a == "100097") {
                b.lbtnStyle = 0;
                b.lbtnIcon = 0;
                b.lbtnText = d("#L{管理分组}");
                b.rbtnStyle = 0;
                b.rbtnIcon = 0;
                b.rbtnText = d("#L{知道了}")
            }
            return e(b)
        }
    });
    STK.register("lib.dialog.setGroup", function (a) {
        var b = 30, c = "http://rs.sinajs.cn/sgmark.gif", d = a.lib.kit.extra.language, e = a.lib.kit.extra.merge;
        return function () {
            function C(a) {
                return s.extraPostData ? e(a, typeof s.extraPostData == "function" ? s.extraPostData() : s.extraPostData) : a
            }

            var f = {}, g = !1, h = 0, i, j = 5, k = a.ui.dialog(), l = a.ui.alert, m, n = {groupBox: '<div class="layer_set_group" node-type="group_panel"><input type="hidden" node-type="uid" name="touid" ><div class="remark_set" node-type="remarkPanel"><label for=""><em class="W_fb">#L{备注名称：}</em><input type="text" node-type="remarkInput" name="remark" class="W_input" value="#L{填写备注名称}"></label></div><div class="group_box"><h4 class="tit W_fb" node-type="message">#L{选择分组：}</h4><div class="loading_box" node-type="loading"><i class="W_loading"></i><span class="S_txt1">正在加载，请稍候</span></div><div class="choose_area"><div class="group_list" node-type="groupList"></div><div node-type="addGroupPanel"><div class="opt_area" node-type="showBtnBox"><a href="javascript:void(0);" class="W_btn_b" action-type="showBtn"><em class="W_ficon ficon_add S_ficon">+</em>#L{创建新分组}</a></div><div style="display:block;" class="add_group clearfix" node-type="addGroupBox"><div class="W_fl"><input type="text" node-type="groupInput" class="W_input" value="#L{新分組}"><a href="javascript:void(0);" class="W_btn_a" action-type="addGroup" node-type="addGroup">#L{创建}</a><a action-type="hideBtn" href="javascript:void(0);" action-type="hideBtn">#L{取消}</a></div></div></div></div><div class="reco_area" style="display:none;" node-type="samelist"><div class="WB_cardtitle_a" ><h4 class="obj_name"><span class="main_title W_fb">#L{与Ta相似的人}</span></h4><div class="opt_box"><a href="javascript:void(0);"  suda-uatrack="key=V6addattenlayer&value=change" action-type="refresh" class="opt_change S_txt1" node-type="refreshbtn"><em class="W_ficon ficon_rotate W_f14 S_ficon">e</em>#L{换一换}</a></div></div><ul class="pt_ul clearfix" node-type="userList"></ul></div></div></div><div class="W_layer_btn S_bg1" node-type="confirmBox"><a href="javascript:void(0);" suda-data="key=V6addattenlayer&value=save" class="W_btn_a btn_34px" action-type="submit" node-type="submit">#L{保存}</a><a href="javascript:void(0);" suda-data="key=V6addattenlayer&value=cancel" class="W_btn_b btn_34px" action-type="cancel">#L{取消}</a></div>', checkBox: '<input type="checkbox" value="{value}" name="gid" class="W_checkbox" {checked} id="group_{groupId}"><label for="group_{groupId}">{name}</label>', userlist: '<#et data data><li class="picitems" uid="${data.uid}"><div class="midbox"><p class="pic_wrap"><span class="pic_box"><a href="${data.profile_url}" target="_blank"><img src="${data.profile_image_url}" width="50" height="50" alt="${data.fnick}"  class="pic"></a><a href="${data.profile_url}"  class="icon_bed" target="_blank"><em class="W_icon  ${data.icon}"></em></a></span></p><p class="name W_tc" ><a href="${data.profile_url}" target="_blank"  class="S_txt1">${data.fnick}</a></p><p class="opt" node-type="widget_followBtnBox" action-data="uid=${data.uid}&fnick=${data.fnick}&template=2&nogroup=1&refer_sort=similar&refer_flag=similar&location=afterfollow_v6"><a href="javascript:;" action-type="follow"   class="W_btn_b btn_22px"><em class="W_ficon ficon_add S_ficon">+</em>关注</a></p></div></li></#et>'}, o = {title: "#L{关注成功}", setGroupTitle: "#L{设置分组}", gEmpty: "#L{分组名不能为空}", rEmpty: "#L{备注名不能为空}", gMaxLen: "#L{请不要超过16个字符}", gDefVal: "#L{新分组}", okLabel: "#L{设置成功}", rDefVal: "#L{设置备注}", message: '#L{为   <span class="W_fb">%s</span>  选择分组}', repeat: "#L{此分组名已存在}"}, p = !1, q = [], r = !1, s, t, u, v, w, x, y, z, A, B, D = function (a) {
                u.remarkInput.value = d(o.rDefVal);
                u.groupInput.value = d(o.gDefVal);
                u.showBtnBox.style.display = "";
                u.addGroupBox.style.display = "none";
                u.loading.style.display = "";
                u.groupList.innerHTML = ""
            }, E = function () {
            }, F = function (b, c) {
                var e, f;
                if (b == "addGroup") {
                    e = d("#L{创建}");
                    f = "addGroup"
                } else {
                    e = d("#L{保存}");
                    f = "submit"
                }
                if (c == "normal") {
                    a.addClassName(u[b], "btn_noloading");
                    a.removeClassName(u[b], "W_btn_a_disable");
                    u[f].innerHTML = e
                } else {
                    a.addClassName(u[b], "W_btn_a_disable");
                    a.removeClassName(u[b], "btn_noloading");
                    u[f].innerHTML = d("#L{保存中...}")
                }
            }, G = function (b) {
                D(b);
                s = a.parseParam({uid: "", fnick: "", sex: "m", hasRemark: !0, fromFollow: !1, groupList: [], recommend: [], title: d(o.setGroupTitle), successCb: function () {
                }, cancelCb: function () {
                }, extraPostData: {}, remark: undefined}, b);
                r = s.fromFollow;
                r && (s.title = d(o.title));
                b.tarEl && (s = a.lib.kit.extra.getDiss(s, b.tarEl));
                A = s.successCb;
                B = s.cancelCb;
                u.uid.value = s.uid;
                u.remarkInput.value = s.remark || d(o.rDefVal);
                if (s.hasRemark) {
                    u.remarkInput.removeAttribute("disabled");
                    u.remarkPanel.style.display = ""
                } else {
                    u.remarkInput.setAttribute("disabled", "disabled");
                    u.remarkPanel.style.display = "none"
                }
                s.groupList.length ? M(s.groupList) : R.request({uid: s.uid});
                s.recommend.length ? N(s.recommend) : N([]);
                u.message.innerHTML = d(o.message, s.fnick);
                k.setTitle(s.title);
                k.getDomList().close.setAttribute("suda-uatrack", "key=V6addattenlayer&value=shutdown");
                k.insertElement(u.group_panel, "beforeend");
                k.insertElement(u.confirmBox, "beforeend");
                s.fromFollow || (u.remarkPanel.style.display = "none");
                k.show();
                window.WBEXP && window.WBEXP.collect({V6addattenlayer: "addatten"})
            }, H = function (b) {
                if (!!b) {
                    if (s && s.fromFollow != !0)return;
                    var d = parseInt(Math.random() * 1e4), e = a.C("img");
                    e.src = c + "?n=" + b.allGroup + "_" + b.autoSelect + "&gid=" + b.gid.join(",") + "&uid=" + b.uid + "&rd=" + d;
                    document.body.appendChild(e);
                    setTimeout(function () {
                        e.parentNode.removeChild(e)
                    }, 3e3)
                }
            }, I = function (a) {
                var a = a || {};
                k.hide()
            }, J = {defVal: d(o.gDefVal), check: function (b) {
                var c = "";
                b === "" || b === this.defVal ? c = o.gEmpty : a.core.str.bLength(b) > 16 && (c = o.gMaxLen);
                return d(c)
            }, checkRepeat: function (a) {
                var b = "";
                for (var c = q.length; c--;)if (a === q[c].gname) {
                    b = o.repeat;
                    break
                }
                return d(b)
            }, showError: function (b) {
                m = a.ui.tipAlert('<span class="txt S_txt1">' + b + "</span>", {autoHide: !1, icon: "rederrorS"}).beside(u.groupInput, {pos: "top-middle"})
            }, hideError: function () {
                m && m.hide && m.hide();
                m = undefined
            }}, K = {defVal: d(o.rDefVal), check: function (b) {
                var c = "";
                b === "" ? c = o.rEmpty : a.core.str.bLength(b) > 16 && (c = o.gMaxLen);
                return d(c)
            }, showError: function (a) {
            }, hideError: function () {
            }}, L = function (b) {
                var c = a.C("li"), d = n.checkBox.replace(/\{value\}/g, b.gid).replace(/\{groupId\}/g, b.gid).replace(/\{name\}/g, b.gname).replace(/\{checked\}/g, b.belong ? "checked" : "");
                c.innerHTML = d;
                return c
            }, M = function (b) {
                var c = b, d = b.recommend, e = {data: c, fnick: s.fnick, uid: s.uid, fromFollow: r};
                t = a.lib.dialog.groupListPanel(e);
                u.groupList.appendChild(t.getOuter());
                u.loading.style.display = "none";
                c.length >= 20 && (u.addGroupPanel.style.display = "none")
            }, N = function (a) {
                i = a;
                if (!!i) {
                    var b = i.length;
                    if (b == 0) {
                        u.samelist.style.display = "none";
                        u.userList.innerHTML = "";
                        return
                    }
                    window.WBEXP && window.WBEXP.collect({V6addattenlayer: "similar"});
                    var c = [];
                    u.samelist.style.display = "";
                    u.refreshbtn.style.display = b > j ? "" : "none";
                    P()
                }
            }, O = function (a) {
                a.icon = "";
                a.verified ? a.verified_type == 0 ? a.icon = "icon_pf_approve" : a.verified_type >= 1 && a.verified_type <= 7 && (a.icon = "icon_pf_approve_co") : a.verified_type == 220 && (a.icon = "icon_pf_club")
            }, P = function () {
                var b, c = [], d = i.length, e = [];
                for (var f = 0; f < d && f < j; f++) {
                    h >= d && (h = h - d);
                    b = i[h];
                    h++;
                    O(b);
                    var g = a.core.util.easyTemplate(n.userlist, b).toString();
                    e.push(b.uid);
                    c.push(g)
                }
                u.userList.innerHTML = c.join("");
                var k = "p2p:" + e.join("_") + ":" + $CONFIG.uid + ":" + s.uid;
                window.WBEXP && window.WBEXP.collect({similarhead: k})
            }, Q = {errorCd: function (b, c) {
                g = !1;
                if (b.code == "100096" || b.code == "100097" || b.code == "100098") {
                    var d = a.lib.dialog.vipError(b.code, {info: b.data.html, lbtnFunc: function () {
                        location.href = b.data.gurl
                    }});
                    a.custEvent.add(d, "hide", I)
                } else a.lib.dialog.ioError(b.code, b);
                F("submit", "normal")
            }, getGroupSuccess: function (a, b) {
                M(a.data);
                i = a.data.recommend || [];
                N(i)
            }, setGroupSuccess: function (b, c) {
                g = !1;
                F("submit", "normal");
                I();
                A(b, c);
                a.ui.tip("lite", {msg: d(o.okLabel), type: "succM", timer: "500"})
            }, setGroupError: function (a, b) {
                g = !1;
                J.showError(a.msg)
            }, addGroupSuccess: function (a, b) {
                F("addGroup", "normal");
                var c = a.data, e;
                u.addGroupPanel.style.display = c.length >= 20 ? "none" : "";
                for (var f in c)if (c[f].belong === 1) {
                    e = c[f];
                    break
                }
                e && q.push(e);
                t.add(e);
                W.hideAddPanel();
                u.groupInput.value = d(o.gDefVal);
                t.length() >= 20 && (u.addGroupPanel.style.display = "none")
            }}, R = a.conf.trans.setGroup.getTrans("list", {onSuccess: Q.getGroupSuccess, onError: Q.errorCd}), S = function (b) {
                a.conf.trans.setGroup.getTrans("update", {onSuccess: Q.setGroupSuccess, onError: Q.errorCd, onFail: Q.errorCd}).request(C(b))
            }, T = a.conf.trans.setGroup.getTrans("batchSet", {onSuccess: Q.setGroupSuccess, onError: Q.errorCd}), U = function (b) {
                a.conf.trans.setGroup.getTrans("add", {onSuccess: Q.addGroupSuccess, onError: function (b, c) {
                    F("addGroup", "normal");
                    a.lib.dialog.ioError(b.code, b)
                }}).request(b)
            }, V = function (b) {
                var c = document.createTextNode(b), d = a.C("div");
                d.appendChild(c);
                var e = d.innerHTML;
                d = c = null;
                return e
            }, W = {showAddPanel: function () {
                u.showBtnBox.style.display = "none";
                u.addGroupBox.style.display = "";
                u.groupInput.focus()
            }, hideAddPanel: function () {
                u.showBtnBox.style.display = "";
                u.addGroupBox.style.display = "none";
                J.hideError();
                u.groupInput.value = J.defVal
            }, addGroup: function () {
                var b = V(a.trim(u.groupInput.value)), c = J.check(b) || J.checkRepeat(b);
                if (c)J.showError(c); else {
                    J.hideError();
                    F("addGroup", "loading");
                    U({name: b, ispublic: ""})
                }
            }, submit: function () {
                if (!g) {
                    g = !0;
                    var b = {};
                    p = !0;
                    b.type = "s";
                    var c = t.getData(), e = [], f = u.remarkInput.value;
                    f === d(o.rDefVal) && (f = "");
                    b.remark = f;
                    var h = u.uid.value;
                    b.user = h;
                    b.gid = a.jsonToStr(c);
                    if (c.suda_diss && s.fromFollow == !0) {
                        var i = c.suda_diss.suda, j = c.suda_diss.diss;
                        window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("group_aftermark", "save:" + i.join(","))
                    }
                    F("submit", "loading");
                    S(b)
                }
            }, followEnd: function (b) {
                if (b.action == "follow") {
                    var c = b.uid;
                    if (!i)return;
                    var d = i.length;
                    for (var e = d - 1; e >= 0; e--)if (i[e].uid == c) {
                        i.splice(e, 1);
                        break
                    }
                    i.length <= j && (u.refreshbtn.style.display = "none");
                    var f = a.sizzle("[uid=" + c + "]", u.userList)[0];
                    f && a.tween(f, {end: function () {
                        if (i.length >= j) {
                            var b = h - 1;
                            b >= i.length && (b = 0);
                            O(i[b]);
                            var c = a.core.util.easyTemplate(n.userlist, i[b]).toString(), d = "p2p:" + i[b].uid + ":" + $CONFIG.uid + ":" + s.uid;
                            window.WBEXP && window.WBEXP.collect({similarhead: d});
                            a.insertHTML(f, c, "afterend")
                        }
                        a.removeNode(f);
                        f = null
                    }, duration: 800}).play({opacity: 0})
                }
            }, cancel: function () {
                p = !1;
                I()
            }, inputFocus: function (b) {
                return function (c) {
                    var c = a.fixEvent(c), d = c.target, e = d.value;
                    b.hideError();
                    e === b.defVal && (d.value = "")
                }
            }, inputBlur: function (b) {
                return function (c) {
                    var c = a.fixEvent(c), d = c.target, e = a.trim(d.value);
                    e || (d.value = b.defVal)
                }
            }, inputMaxLen: function (c) {
                var c = a.fixEvent(c), d = c.target, e = d.value, f = a.core.str.bLength(e);
                c.keyCode == "13" ? W.submit() : f > b && (d.value = a.core.str.leftB(e, b))
            }}, X = function () {
                _();
                Y();
                Z()
            }, Y = function () {
                var b = k.getDomList().close;
                b && b.setAttribute("suda-uatrack", "key=group_aftermark&value=close");
                a.custEvent.define(f, ["hide"]);
                v = a.core.evt.delegatedEvent(k.getDomList().inner);
                w = W.inputFocus(J);
                x = W.inputBlur(J);
                y = W.inputFocus(K);
                z = W.inputBlur(K);
                a.addEvent(u.remarkInput, "focus", y);
                a.addEvent(u.remarkInput, "blur", z);
                a.addEvent(u.groupInput, "focus", w);
                a.addEvent(u.groupInput, "blur", x);
                a.addEvent(u.remarkInput, "keyup", W.inputMaxLen);
                a.addEvent(u.groupInput, "keyup", W.inputMaxLen);
                v.add("showBtn", "click", W.showAddPanel);
                v.add("hideBtn", "click", W.hideAddPanel);
                v.add("addGroup", "click", W.addGroup);
                v.add("submit", "click", W.submit);
                v.add("cancel", "click", W.cancel);
                v.add("refresh", "click", P);
                a.conf.channel.follow.register("changeStatus", W.followEnd)
            }, Z = function () {
                a.custEvent.add(k, "hide", function () {
                    a.custEvent.fire(f, ["hide"]);
                    p || B();
                    var b = t.getData();
                    b && b.suda_diss && H(b.suda_diss.diss);
                    J.hideError()
                })
            }, _ = function () {
                var b = a.core.dom.builder(d(n.groupBox));
                u = a.lib.kit.dom.parseDOM(b.list)
            }, ba = function () {
                a.custEvent.undefine(f, ["hide"]);
                a.removeEvent(u.remarkInput, "focus", y);
                a.removeEvent(u.remarkInput, "blur", z);
                a.removeEvent(u.groupInput, "focus", w);
                a.removeEvent(u.groupInput, "blur", x);
                a.removeEvent(u.remarkInput, "keyup", W.inputMaxLen);
                a.removeEvent(u.groupInput, "keyup", W.inputMaxLen);
                a.conf.channel.follow.remove("changeStatus", W.followEnd);
                w = null;
                x = null;
                y = null;
                z = null;
                v && v.destroy();
                recommend && recommend.destroy()
            };
            X();
            f.show = G;
            f.hide = I;
            f.destroy = ba;
            return f
        }
    });
    STK.register("lib.cite.wbad", function (a) {
        return function () {
            var b = a.lib.follow.utils.follow(), c = a.sizzle("[ad-data]", document.body);
            if (c.length != 0) {
                var d = function () {
                    window.WBAD || (window.WBAD = {uid: $CONFIG.uid || scope.$uid});
                    for (var d = 0, e = c.length; d < e; d++) {
                        var f = c[d], g = a.delegatedEvent(f);
                        g.add("followBtn", "click", function (c) {
                            a.preventDefault();
                            var d = c.el, e = c.data;
                            e.onSuccessCb = function (b) {
                                var c = a.sizzle("a", d.parentNode);
                                for (var e = 0, f = c.length; e < f; e++) {
                                    var g = c[e];
                                    g.style.display = g == d ? "none" : ""
                                }
                                a.lib.dialog.setGroup().show({uid: b.uid, fnick: b.fnick, groupList: b.group, hasRemark: !0})
                            };
                            b.follow(e)
                        });
                        g.add("hover", "mouseover", function (a) {
                            var b = a.el, c = a.data.onOverCls;
                            b.className = c
                        });
                        g.add("hover", "mouseout", function (a) {
                            var b = a.el, c = a.data.onOutCls;
                            b.className = c
                        })
                    }
                };
                d();
                if (window.WBAD && window.WBAD.restart) {
                    window.WBAD.restart();
                    return
                }
                var e = !1, f = document, g = f.createElement("script"), h = f.getElementsByTagName("script")[0];
                g.type = "text/javascript";
                g.charset = "utf-8";
                g.async = !0;
                g.src = ("https:" == f.location.protocol ? "https://" : "http://") + "js.t.sinajs.cn/t4/apps/publicity/static/wbad.js?version=" + $CONFIG.version;
                h.parentNode.insertBefore(g, h)
            }
        }
    });
    STK.register("lib.cite.exposure", function (a) {
        return function () {
            var a = !1, b = document, c = b.createElement("script"), d = b.getElementsByTagName("script")[0];
            c.type = "text/javascript";
            c.charset = "utf-8";
            c.async = !0;
            c.src = ("https:" == b.location.protocol ? "https://" : "http://") + "js.t.sinajs.cn/t5/home/js/common/extra/exposure.js?version=" + $CONFIG.version;
            d.parentNode.insertBefore(c, d)
        }
    });
    STK.register("lib.cite.scrollToTop", function (a) {
        return function (b, c) {
            function k() {
                document.body.scrollIntoView();
                h();
                return!1
            }

            function j() {
                if (document.body.offsetHeight != i) {
                    i = document.body.offsetHeight;
                    h()
                }
            }

            function h() {
                var c = a.scrollPos(), g = c.top, h = a.core.dom.getSize(document.body), i = h.height - c.top - a.winSize().height - d;
                f ? a.setStyle(b, "top", g + a.winSize().height - 190 + Math.min(0, i) + "px") : a.setStyle(b, "bottom", i < 0 ? e - i + "px" : "");
                a.setStyle(b, "visibility", g > 0 ? "visible" : "hidden")
            }

            if (b == null) {
                a.log("[comp.content.scrollToTop]: scrollToTop need a node[id=base_scrollToTop] in BODY.");
                return{destroy: a.funcEmpty}
            }
            var d = a.sizzle(".WB_footer")[0].offsetHeight - 24, e = 40, f = a.core.util.browser.IE6, g, i = document.body.offsetHeight;
            a.addEvent(b, "click", k);
            a.addEvent(window, "scroll", h);
            b.style.cssText += "visibility: visible;";
            h();
            g = setInterval(j, 1e3);
            var l = {destroy: function () {
                a.removeEvent(window, "scroll", h);
                a.removeEvent(b, "click", k);
                clearInterval(g)
            }};
            return l
        }
    });
    STK.register("lib.cite.putoff", function (a) {
        return function () {
            var b = a.sizzle("link[putoff]");
            if (!!b[0]) {
                var c = b[0].getAttribute("putoff").split("|");
                for (var d = c.length - 1; d >= 0; d--) {
                    var e = a.C("link");
                    e.setAttribute("href", $CONFIG.cssPath + c[d]);
                    e.setAttribute("type", "text/css");
                    e.setAttribute("rel", "stylesheet");
                    document.getElementsByTagName("head")[0].appendChild(e)
                }
            }
        }
    });
    STK.register("lib.cite.responsive", function (a) {
        function h() {
            var a = g[$CONFIG.bpType];
            try {
                b.destroy()
            } catch (c) {
            }
            a && (b = a())
        }

        function f(b) {
            while (b = b.parentNode)if (b && b.style && (a.getStyle(b, "position") === "fixed" || a.getStyle(b, "display") === "none"))return!0;
            return!1
        }

        var b, c = a.addClassName, d = a.removeClassName, e = a.core.dom.hasClassName, g = {main: function () {
            function l() {
                a.removeEvent(g, "click", j);
                a.removeEvent(document.body, "click", k);
                a.removeEvent(b, "swipeRight", i);
                a.removeNode(g)
            }

            function k(c) {
                var d = a.fixEvent(c).target;
                if (d !== b && !a.contains(b, d)) {
                    if (d === g || a.contains(g, d))return;
                    i()
                }
            }

            function j() {
                e(b, f) ? i() : h()
            }

            function i() {
                d(g, "W_fold_out");
                d(b, f)
            }

            function h() {
                c(b, f);
                c(b, "S_bg1");
                c(g, "W_fold_out");
                b.scrollTop = 0
            }

            var b = a.sizzle(".WB_main_r")[0], f = "W_fold_layer", g = a.builder('<div class="W_fold"><a href="javascript:void(0);"><em class="W_ficon ficon_arrow_right S_ficon">b</em></a></div>').box.firstChild;
            if (b) {
                a.insertBefore(g, a.E("base_scrollToTop"));
                a.addEvent(g, "click", j);
                a.addEvent(document.body, "click", k);
                a.addEvent(b, "swipeRight", i)
            }
            return{destroy: l}
        }, page: function () {
            function l() {
                a.removeEvent(g, "click", j);
                a.removeEvent(document.body, "click", k);
                a.removeEvent(b, "swipeLeft", i);
                a.removeNode(g)
            }

            function k(c) {
                var d = a.fixEvent(c).target;
                if (d !== b && !a.contains(b, d)) {
                    if (d === g || a.contains(g, d))return;
                    i()
                }
            }

            function j() {
                e(b, f) ? i() : h()
            }

            function i() {
                d(b, f);
                d(g, "W_fold_out")
            }

            function h() {
                c(b, f);
                c(b, "S_bg1");
                c(g, "W_fold_out");
                b.scrollTop = 0
            }

            var b = a.sizzle(".WB_frame_b")[0], f = "W_fold_layer_page", g = a.builder('<div class="W_fold"><a href="javascript:void(0);"><em class="W_ficon ficon_arrow_right S_ficon">b</em></a></div>').box.firstChild;
            if (b) {
                a.insertBefore(g, a.E("base_scrollToTop"));
                a.addEvent(g, "click", j);
                a.addEvent(document.body, "click", k);
                a.addEvent(b, "swipeLeft", i)
            }
            return{destroy: l}
        }};
        return function () {
            FM.onallRenderReady(h);
            FM.isOrigPageRenderReady() && h()
        }
    });
    STK.register("conf.channel.feed", function (a) {
        var b = ["forward", "publish", "comment", "delete", "refresh", "reply", "feedTagUpdate", "feedTagMoreUpdate", "qfaceAdd", "qfaceCount", "timeFeedPublish"];
        return a.lib.kit.extra.listener.define("conf.channel.feed", b)
    });
    STK.register("lib.publisher.widget.count", function (a) {
        function b(b) {
            var c = 41, d = 140, e = 20, f = b, g = b.match(/http:\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+([-A-Z0-9a-z_\$\.\+\!\*\(\)\/,:;@&=\?\~\#\%]*)*/gi) || [], h = 0;
            for (var i = 0, j = g.length; i < j; i++) {
                var k = a.core.str.bLength(g[i]);
                if (/^(http:\/\/t.cn)/.test(g[i]))continue;
                /^(http:\/\/)+(t.sina.com.cn|t.sina.cn)/.test(g[i]) || /^(http:\/\/)+(weibo.com|weibo.cn)/.test(g[i]) ? h += k <= c ? k : k <= d ? e : k - d + e : h += k <= d ? e : k - d + e;
                f = f.replace(g[i], "")
            }
            var l = Math.ceil((h + a.core.str.bLength(f)) / 2);
            return l
        }

        return function (a) {
            a = a.replace(/\r\n/g, "\n");
            return b(a)
        }
    });
    STK.register("conf.trans.publishTo", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("list", {url: "/aj/f/group/list", method: "get"});
        c("chatlist", {url: "/aj/f/groupchat/list", method: "get"});
        return b
    });
    STK.register("lib.publisher.widget.keyboardCapture", function (a) {
        var b = {13: "enter", 27: "esc", 32: "space", 38: "up", 40: "down", 9: "tab"};
        return function (c, d) {
            d = d || {};
            var e = {}, f, g = {keydown: function (c) {
                d.stopScroll && a.stopEvent();
                var f, g;
                !!(f = c) && !!(g = f.keyCode) && b[g] && a.custEvent.fire(e, b[g])
            }}, h = {init: function () {
                h.pars();
                h.bind()
            }, pars: function () {
            }, bind: function () {
                for (var b in g)a.addEvent(c, b, g[b])
            }, getKey: function (a) {
                return b[a]
            }, destroy: function () {
                for (var b in g)a.removeEvent(c, b, g[b])
            }};
            h.init();
            e.getKey = h.getKey;
            e.destroy = h.destroy;
            return e
        }
    });
    STK.register("conf.trans.groupMember", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("create", {url: "/aj/groupchat/create", method: "post"});
        c("update", {url: "/aj/groupchat/edit", method: "post"});
        c("userList", {url: "/aj/relation/groupallmembers", method: "get"});
        c("info", {url: "/aj/groupchat/query", method: "get"});
        c("suggest", {url: "/aj/groupchat/attention", method: "get"});
        c("groupList", {url: "/aj/relation/grouplist", method: "get"});
        c("check", {url: "/aj/groupchat/getuser", method: "get"});
        c("getUser", {url: "/aj/groupchat/getlist", method: "get"});
        c("noticeClear", {url: "/aj/groupchat/clearnotice", method: "post"});
        c("agreeJoin", {url: "/aj/groupchat/allowjoinin", method: "post"});
        c("applyJoin", {url: "/aj/groupchat/applyjoinin", method: "post"});
        return b
    });
    STK.register("lib.group.groupMember", function (a) {
        var b = '<#et data data><#if (!data.islist)><div node-type="group_fan_tool"><div class="webim_tab_hd" node-type="group_fan_filternav"><div class="hd_mod S_line1 clearfix"><h3 class="W_fl W_fb">#L{最近联系人}</h3><div class="W_fr" ><a href="javascript:void(0);" action-type="group_fans_filter" suda-data="key=button_build_group&value=screen_fans"  action-data="type=2">#L{筛选粉丝}</a></div></div></div><div  node-type="group_fan_nav" style="display:none;"><div class="webim_tab_hd hd_two S_line1"><div class="back"><a href="javascript:void(0);" suda-data="key=button_build_group&value=back" action-type="group_fan_back" action-data="type=1" class="S_txt1"><em class="W_ficon ficon_back S_ficon">«</em></a></div><p class="title W_fb">#L{筛选粉丝}</p></div><div class="webim_tab_btn"><div class="WB_minitab"><ul class="minitb_ul S_line1 S_bg1 clearfix"><li class="minitb_item current S_line1" action-type="group_fan_tab" suda-data="key=button_build_group&value=intera_group"  node-type="group_fan_tab" action-data="type=2"><a href="javascript:void(0);" class="minitb_lk S_txt1 S_bg2" node-type="group_fan_tabtext">#L{忠诚度}</a><span class="cur_block"></span></li><li class="minitb_item S_line1" action-type="group_fan_tab" suda-data="key=button_build_group&value=fans" node-type="group_fan_tab" action-data="type=3"><a href="javascript:void(0);" class="minitb_lk S_txt1" node-type="group_fan_tabtext">#L{粉丝数}</a><span class="cur_block"></span></li></ul></div></div></div></div><div class="webim_tab_bd" ><div class="webim_contacts_group" node-type="group_fan_scrollC"><ul class="webim_contacts_list" node-type="group_list_c"></#if><#list data.list as item><li class="contacts SW_fun_bg clearfix" action-type="add_group_member"  action-data="uid=${item.id}&screen_name=<#if (item.remark)>${item.remark}<#else>${item.screen_name}</#if>&profile_image_url=${item.profile_image_url}"><div class="head W_fl"><img width="30" height="30"  src="${item.profile_image_url}"></div><p class="name W_autocut W_fl S_txt1 W_f14"><#if (item.remark)>${item.remark}<#else>${item.screen_name}</#if></p><div class="icon_mod W_fl"><#if (data.verified && data.verified_type == 0)><i title="微博个人认证" class="W_icon icon_approve"></i></#if></div><div class="icon_add W_fr"><a href="javascript:void(0);"   class="W_ficon ficon_add S_ficon">+</a></div></li></#list><#if (!data.islist)></ul></div></div></#if></#et>';
        return function (c, d) {
            var e = {offest: 50, isloading: !1, trans: "", page: 1, isEnd: !1, extraParam: {}}, f = a.lib.kit.extra.language;
            d = a.parseParam({isAjax: !0, members: ""}, d || {});
            var g = {}, h, i, j, k = a.conf.trans.groupMember, l = {getData: function () {
                i && clearInterval(i);
                e.trans && e.trans.abort();
                e.isloading = !0;
                var c = e.extraParam;
                c.page = e.page;
                e.trans = k.getTrans("getUser", {onSuccess: function (c) {
                    var d = {list: c.data.users, islist: !0}, g = a.core.util.easyTemplate(f(b), d).toString();
                    e.isloading = !1;
                    h.group_list_c.innerHTML = g;
                    uiscroll.reset();
                    i = setInterval(l.srcollEvent, 200)
                }, onFail: function () {
                    e.isloading = !1
                }, onError: function () {
                    e.isloading = !1
                }}).request(c)
            }, srcollEvent: function () {
                if (!e.isloading) {
                    if (e.isEnd) {
                        clearInterval(i);
                        return
                    }
                    if (uiscroll.scrollHeight() - uiscroll.offsetHeight() - uiscroll.scrollTop() <= e.offest) {
                        e.isloading = !0;
                        e.page = e.page + 1;
                        e.trans && e.trans.abort();
                        var c = e.extraParam;
                        c.page = e.page;
                        e.trans = k.getTrans("getUser", {onSuccess: function (c) {
                            var d = {list: c.data.users, islist: !0}, g = a.core.util.easyTemplate(f(b), d).toString();
                            e.isloading = !1;
                            a.core.dom.insertHTML(h.group_list_c, g, "beforeend");
                            e.page >= c.data.total_page && (e.isEnd = !0)
                        }, onFail: function () {
                            e.page = e.page - 1;
                            e.isloading = !1
                        }, onError: function () {
                            e.page = e.page - 1;
                            e.isloading = !1
                        }}).request(c)
                    }
                }
            }, addGroupMember: function (b) {
                a.custEvent.fire(g, "addMember", b.data)
            }, addGroupInject: function (a) {
                return!1
            }, groupFanBack: function (a) {
                h.group_fan_filternav.style.display = "";
                h.group_fan_nav.style.display = "none";
                e.page = 1;
                e.isloading = !1;
                e.isEnd = !1;
                e.extraParam = a.data;
                l.setListHeight();
                l.getData()
            }, tabDomchange: function (b) {
                var c;
                a.foreach(h.group_fan_tab, function (b, d) {
                    c = a.sizzle('[node-type="group_fan_tabtext"]', b)[0];
                    c && a.core.dom.removeClassName(c, "S_bg2");
                    a.core.dom.removeClassName(b, "current")
                });
                c = a.sizzle('[node-type="group_fan_tabtext"]', b)[0];
                a.core.dom.addClassName(b, "current");
                c && a.core.dom.addClassName(c, "S_bg2")
            }, groupFanTab: function (b) {
                if (!a.core.dom.hasClassName(b.el, "current")) {
                    l.tabDomchange(b.el);
                    e.page = 1;
                    e.isloading = !1;
                    e.isEnd = !1;
                    e.extraParam = b.data;
                    l.setListHeight();
                    l.getData()
                }
            }, groupFansFilter: function (a) {
                h.group_fan_filternav.style.display = "none";
                h.group_fan_nav.style.display = "";
                e.page = 1;
                e.isloading = !1;
                e.isEnd = !1;
                e.extraParam = a.data;
                l.setListHeight();
                l.tabDomchange(h.group_fan_tab[0]);
                l.getData()
            }, setListHeight: function () {
                var a = h.group_fan_tool.offsetHeight;
                h.group_fan_scrollC.style.height = d.height - a + "px"
            }}, m = function () {
                h = a.lib.kit.dom.parseDOM(a.builder(c).list)
            }, n = function () {
                var b = a.delegatedEvent(c);
                a.custEvent.define(g, ["addMember", "addGroup", "getUserInfo"]);
                b.add("add_group_member", "click", l.addGroupMember);
                b.add("add_group_inject", "click", l.addGroupInject);
                b.add("group_fans_filter", "click", l.groupFansFilter);
                b.add("group_fan_tab", "click", l.groupFanTab);
                b.add("group_fan_back", "click", l.groupFanBack)
            }, o = function () {
                n();
                k.getTrans("getUser", {onSuccess: function (d) {
                    var j = {list: d.data.users}, k = a.core.util.easyTemplate(f(b), j).toString(), n = {currUser: d.data.viewer, addUser: d.data.members};
                    a.custEvent.fire(g, "getUserInfo", n);
                    c.innerHTML = k;
                    m();
                    l.setListHeight();
                    uiscroll = a.ui.scrollView(h.group_fan_scrollC);
                    e.page >= d.data.total_page && (e.isEnd = !0);
                    i = setInterval(l.srcollEvent, 200)
                }, onFail: function () {
                }, onError: function () {
                }}).request({page: 1, members: d.members})
            };
            o();
            g.setHeight = function (a) {
                d.height = a;
                l.setListHeight();
                uiscroll.reset()
            };
            g.destroy = function () {
                i && clearInterval(i);
                dEvent.destroy()
            };
            return g
        }
    });
    STK.register("lib.group.gmemberSelect", function (a) {
        return function (b) {
            var c = a.lib.kit.extra.language, d = {ENTER: 13, ESC: 27, UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39}, e = 500, f = "", g, h, i, j = !1, k, l = '<div class="W_layer"><div class="content group_content"><div class="W_layer_hd"><div class="h_name_box clearfix" node-type="groupNamePanel"><p class="h_name W_fl W_autocut W_f14" node-type="titleText"></p><div class="h_change W_fl" action-type="editGroupName" suda-data="key=button_build_group&value=rev_name_group"  node-type="editGroupName" title="#L{修改群名称}"><em class="W_ficon ficon_edit S_ficon">7</em><span>#L{修改群名称}</span></div></div><div class="h_change_box clearfix" node-type="editGroupFrom" style="display:none;"><input name="" type="text" node-type="group_edit_input"  class="W_input W_fl" value="#L{输入群名称}"><a href="javascript:void(0);" class="W_btn_a W_fl" action-type="subimtEditGroup">#L{保存名称}</a><a href="javascript:void(0);" class="W_btn_b W_fl" action-type="cannelEditGroup">#L{取消}</a></div><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div></div><div class="layer_msg_group"><ul class="group_nav S_line1 clearfix"><li class="W_fl S_line1 S_bg1 g_first">#L{添加群成员}</li><li class="W_fl S_bg1">已有成员 ( <span class="online" node-type="group_all_count">0</span>/<span class="all" node-type="maxConut">500</span> )<a href="http://weibo.com/" class="group_nav_href" node-type="batManage" style="display:none;">#L{批量管理}</a> </li></ul><div class="group_members clearfix"><div class="add_box S_bg1 W_fl"><div class="a_serch"><span class="WB_search_s"><input type="text" value="#L{查找联系人}"  class="W_input" node-type="group_search_input"><span class="pos"><a href="javascript:void(0);" title="#L{查找联系人}" class="W_ficon ficon_search S_ficon">f</a></span></span></div><div class="webim_contacts_bd" node-type="groupSelect"><div  node-type="groupMember"></div><div class="webim_tab_bd"><div node-type="searchLists" style="display:none;"></div></div></div></div><div class="existing_box W_fl"><div class="webim_contacts_bd" node-type="existing_box"><div class="webim_tab_bd"><div node-type="addUserLists" style="display:none;"><div class="webim_contacts_group mt10"><div class="webim_group_title webim_existing_title"><a href="javascript:void(0);" class="group_title_cont S_txt1"><span class="name" node-type="addUserCount"></span></a></div><ul class="webim_contacts_list" node-type="addUserListsContain"></ul></div><div class="W_layer_line S_line2" node-type="line" style="display:none;"></div></div><div class="webim_contacts_group mt10" node-type="joinMemberList"></div><div node-type="joinMemberListContain"></div></div></div></div></div></div><div class="W_layer_btn S_line1 S_bg1"><a href="javascript:void(0);" node-type="editsubmitBtn" action-type="groupPostSubmit" class="W_btn_a btn_34px W_btn_a_disable">#L{确定}</a><a href="javascript:void(0);" action-type="groupPostCannel" class="W_btn_b btn_34px">#L{取消}</a></div></div></div>', m = '<ul class="webim_contacts_list">#L{%s}</ul>', n = '<#et data data><#list data as item><li class="contacts SW_fun_bg clearfix" node-type="userItem" action-type="addMember" action-data="uid=<#if (item.id)>${item.id}<#else>${item.uid}</#if>&screen_name=<#if (item.remark)>${item.remark}<#else>${item.screen_name}</#if>&profile_image_url=${item.profile_image_url}"><div class="head W_fl"><img width="30" height="30"  src="${item.profile_image_url}"></div><p class="name W_autocut W_fl S_txt1 W_f14"><#if (item.remark)>${item.remark}<#else>${item.screen_name}</#if></p><div class="icon_mod W_fl"><#if (data.verified && data.verified_type == 0)><i title="微博个人认证" class="W_icon icon_approve"></i></#if></div><div class="icon_add W_fr"><a href="javascript:void(0);"  action-data="uid=<#if (item.id)>${item.id}<#else>${item.uid}</#if>&screen_name=<#if (item.remark)>${item.remark}<#else>${item.screen_name}</#if>&profile_image_url=${item.profile_image_url}" class="W_ficon ficon_add S_ficon">+</a></div></li></#list></#et>', o = '<#et data data><#list data as item><li class="contacts <#if (!item.nopower)> SW_fun_bg</#if> clearfix" node-type="addUserItem"><div class="head W_fl"><img width="30" height="30"  src="${item.profile_image_url}"></div><p class="name W_autocut W_fl S_txt1 W_f14"><#if (item.remark)>${item.remark}<#else>${item.screen_name}</#if></p><div class="icon_mod W_fl"><#if (item.verified && item.verified_type == 0)><i title="微博个人认证" class="W_icon icon_approve"></i></#if></div><#if (item.is_owner)><div class="main W_fr"><em class="W_ficon ficon_user S_ficon">H</em></div><#else><div class="close W_fr"><a href="javascript:void(0);" action-data="uid=<#if (item.id)>${item.id}<#else>${item.uid}</#if>&screen_name=<#if (item.remark)>${item.remark}<#else>${item.screen_name}</#if>&profile_image_url="${item.profile_image_url}" class="W_ficon ficon_close S_ficon"<#if (item.actiontype)> action-type="${item.actiontype}" <#else> action-type="kickMember" </#if> >X</a></div></#if></li></#list></#et>', p = '<#et data data><li class="contacts  clearfix" node-type="addUserItem"><div class="head W_fl"><img width="30" height="30"  src="${data.profile_image_url}"></div><p class="name W_autocut W_fl S_txt1 W_f14">${data.screen_name}</p><div class="icon_mod W_fl"><#if (data.verified && data.verified_type == 0)><i title="微博个人认证" class="W_icon icon_approve"></i></#if></div><div class="main W_fr"><em class="W_ficon ficon_user S_ficon">H</em></div><div class="close W_fr"></div></li></#et>', q = {}, r = a.ui.dialog(c(l)), s = "";
            b = a.parseParam({gid: "", addUsers: "", minNum: 3, extraData: {}, addSuccessCallback: "", editSuccessCallback: ""}, b);
            var t = -1, u = [], v = [], w = [], x = [], y, z = {}, A, B, C, D, E, F = b.gid, G = a.conf.trans.groupMember, H, I, J = {editGroupName: function () {
                C.groupNamePanel.style.display = "none";
                C.editGroupFrom.style.display = "";
                D.value = y ? a.decodeHTML(y) : s
            }, cannelEditGroup: function () {
                C.groupNamePanel.style.display = "";
                C.editGroupFrom.style.display = "none"
            }, subimtEditGroup: function () {
                var b = E.getValue();
                if (!b)a.ui.tipAlert("请输入群名称!").beside(D).on("hide", function () {
                    D.foucs()
                }); else {
                    j = !0;
                    C.groupNamePanel.style.display = "";
                    C.editGroupFrom.style.display = "none";
                    if (b == s)return;
                    y = b.substring(0, 16);
                    C.titleText.innerHTML = a.encodeHTML(y);
                    J.updateGroupName()
                }
            }, groupPostCannel: function (a) {
                r.hide()
            }, checkIsOk: function () {
                if (!j && b.extraData && b.extraData.page_id) {
                    var d = C.editGroupFrom.style.display == "", e = d ? D : C.editGroupName, f = d ? c("#L{昵称还没保存哦}") : c("#L{请先换个好点的昵称吧}");
                    a.ui.tipAlert(f).beside(e, {pos: "bottom-middle", appendTo: document.body, offsetY: d ? -10 : -20});
                    return!1
                }
                if (C.editGroupFrom.style.display == "") {
                    a.ui.tipAlert(c("#L{昵称还没保存哦}")).beside(D, {pos: "bottom-middle", appendTo: document.body, offsetY: -10});
                    return!1
                }
                return!0
            }, groupPostSubmit: function (c) {
                if (!a.hasClassName(c.el, "W_btn_a_disable") && !!J.checkIsOk()) {
                    var d = b.extraData;
                    if (F) {
                        d = a.lib.kit.extra.merge(d, {join_uids: w.join(","), kick_uids: v.join(","), name: y, gid: F});
                        var e = d.name;
                        j || delete d.name;
                        G.getTrans("update", {onSuccess: function (c) {
                            c.data.name = e;
                            a.custEvent.fire(q, "editSuccess", c.data);
                            r.hide();
                            try {
                                b.editSuccessCallback && b.editSuccessCallback(c.data)
                            } catch (d) {
                            }
                            J.errorBack(c)
                        }, onFail: function (b) {
                            a.lib.dialog.ioError(b.code, b)
                        }, onError: function (b) {
                            a.lib.dialog.ioError(b.code, b)
                        }}).request(d)
                    } else {
                        d = a.lib.kit.extra.merge(d, {name: y ? y : s, members: x.join(",")});
                        var e = d.name;
                        j || delete d.name;
                        G.getTrans("create", {onSuccess: function (c) {
                            c.data.name = e;
                            a.custEvent.fire(q, "addSuccess", c.data);
                            r.hide();
                            try {
                                b.addSuccessCallback && b.addSuccessCallback(c.data)
                            } catch (d) {
                            }
                            J.errorBack(c)
                        }, onFail: function (b) {
                            a.lib.dialog.ioError(b.code, b)
                        }, onError: function (b) {
                            a.lib.dialog.ioError(b.code, b)
                        }}).request(d)
                    }
                }
            }, errorBack: function (b) {
                var d = b.data, e = ["error_uids", "exceed_uids", "unspported_uids"], f = [c("#L{还不是你的粉丝，暂时无法加群。}"), c("#L{群成员已满，操作失败。}"), c("#L{不支持群聊的用户。}")], g = [], h = 1;
                for (var i = 0; i < e.length; i++)if (d[e[i]]) {
                    g.push(h + "." + d[e[i]].join(" ") + " " + f[i] + "<br>");
                    h++
                }
                h > 1 && a.ui.alert(g.join(""))
            }, removeIndexElement: function (b, c) {
                var d = a.core.arr.indexOf(b, c);
                d != -1 && c.splice(d, 1)
            }, getCurItem: function (b) {
                var c = b.length;
                while (c--)if (a.hasClassName(b[c], "cur"))return b[c];
                return null
            }, groupSuggest: function (b) {
                var c = a.fixEvent().keyCode, e = C.searchLists;
                if (c == d.UP || c == d.DOWN || c == d.ENTER) {
                    a.preventDefault(b);
                    var f = a.sizzle("[node-type='userItem']", e), g = f.length, h = J.getCurItem(f);
                    if (c == d.UP) {
                        t = t < 1 ? g - 1 : t - 1;
                        h && a.removeClassName(h, "cur");
                        a.addClassName(f[t], "cur")
                    } else if (c == d.DOWN) {
                        t = t >= g - 1 ? 0 : t + 1;
                        h && a.removeClassName(h, "cur");
                        f[t] && a.addClassName(f[t], "cur")
                    } else if (c == d.ENTER) {
                        var i = h && a.queryToJson(h.getAttribute("action-data"));
                        i && J.addGroupMember(undefined, i)
                    }
                }
            }, groupinputclick: function (a) {
                window.SUDA && window.SUDA.uaTrack("button_build_group", "search_box")
            }, groupinputkeyup: function (b) {
                var e = a.trim(A.getValue()), f = a.fixEvent().keyCode;
                if (f == d.UP || f == d.LEFT || f == d.DOWN || f == d.RIGHT || f == d.ENTER)a.preventDefault(b); else if (e) {
                    h && clearTimeout(h);
                    i && i.abort && i.abort();
                    h = setTimeout(function () {
                        i = G.getTrans("suggest", {onSuccess: function (b) {
                            t = -1;
                            var d = a.core.util.easyTemplate(n, b.data).toString();
                            d = c(m, d);
                            C.groupMember.style.display = "none";
                            C.searchLists.innerHTML = d;
                            C.searchLists.style.display = ""
                        }, onFail: function () {
                        }, onError: function () {
                        }}).request({q: e})
                    }, 200)
                } else {
                    h && clearTimeout(h);
                    i && i.abort && i.abort();
                    C.groupMember.style.display = "";
                    C.searchLists.innerHTML = "";
                    C.searchLists.style.display = "none"
                }
            }, kickMember: function (b) {
                var c = b.data, d = a.core.arr.indexOf(c.uid, x);
                if (d != -1) {
                    x.splice(d, 1);
                    J.removeIndexElement(c.screen_name, u);
                    J.removeIndexElement(c.uid, w);
                    J.removeIndexElement(c.uid, x);
                    v.push(c.uid)
                }
                var e = a.lib.kit.dom.parentElementBy(b.el, document.body, function (a) {
                    if (a.getAttribute("node-type") == "addUserItem")return!0
                });
                e && a.removeNode(e);
                var f = a.sizzle("[node-type='addUserItem']", C.joinMemberListContain).length;
                J.updateGroupName()
            }, addMember: function (b) {
                var c = b.data.uid;
                b.data.actiontype = "removeMember";
                if (x.length > e - 1)a.ui.tipAlert("群人数已达上限!", {icon: "rederrorS", hideDelay: 2e3}).beside(b.el); else if (!a.inArray(c, x)) {
                    x.push(c);
                    w.push(c);
                    u.push(b.data.screen_name);
                    J.addMemberFunc([b.data]);
                    J.updateGroupName();
                    if (C.groupMember.style.display == "none") {
                        B.value = "";
                        B.blur();
                        C.groupMember.style.display = "";
                        C.searchLists.innerHTML = "";
                        C.searchLists.style.display = "none"
                    }
                }
            }, addMemberFunc: function (b) {
                var d = a.core.util.easyTemplate(o, b).toString();
                C.addUserLists.style.display = "";
                a.insertHTML(C.addUserListsContain, d, "afterbegin");
                var e = a.sizzle("[node-type='addUserItem']", C.addUserListsContain).length;
                C.addUserCount.innerHTML = c("#L{新加成员（%s）}", e);
                e > 0 && C.addUserCount.style.display == ""
            }, removeMember: function (b) {
                var d = b.data;
                J.removeIndexElement(d.uid, x);
                J.removeIndexElement(d.screen_name, u);
                J.removeIndexElement(d.uid, w);
                var e = a.lib.kit.dom.parentElementBy(b.el, document.body, function (a) {
                    if (a.getAttribute("node-type") == "addUserItem")return!0
                });
                e && a.removeNode(e);
                var f = a.sizzle("[node-type='addUserItem']", C.addUserListsContain).length;
                f != 0 && (C.addUserCount.innerHTML = c("#L{新加成员（%s）}", f));
                f == 0 && (C.addUserLists.style.display = "none");
                J.updateGroupName()
            }, addGroupMember: function (b, c) {
                c.actiontype = "removeMember";
                var d = c.uid + "";
                if (!a.inArray(d, x)) {
                    x.push(d);
                    w.push(d);
                    u.push(c.screen_name);
                    J.addMemberFunc([c])
                }
                J.updateGroupName()
            }, updateGroupName: function () {
                C.group_all_count.innerHTML = x.length + (F ? 0 : 1);
                k && k.reset();
                if (F)v.length == 0 && w.length == 0 && f == y ? !a.hasClassName(C.editsubmitBtn, "W_btn_a_disable") && a.addClassName(C.editsubmitBtn, "W_btn_a_disable") : a.hasClassName(C.editsubmitBtn, "W_btn_a_disable") && a.removeClassName(C.editsubmitBtn, "W_btn_a_disable"); else {
                    var d = b.minNum - 1;
                    d = d > 0 ? d : 2;
                    w.length >= d && C.titleText.innerHTML != "" ? a.hasClassName(C.editsubmitBtn, "W_btn_a_disable") && a.removeClassName(C.editsubmitBtn, "W_btn_a_disable") : !a.hasClassName(C.editsubmitBtn, "W_btn_a_disable") && a.addClassName(C.editsubmitBtn, "W_btn_a_disable")
                }
                if (!y) {
                    var e = u.length, g = c("#L{新建群}");
                    s = g;
                    e > 0 && (g = "");
                    for (var h = 0; h < e && h < 4; h++)g = g + u[h] + "、";
                    e == 1 && (g = g.substring(0, g.length - 1));
                    s = g.substring(0, 16);
                    C.titleText.innerHTML = s
                }
            }, addGroupAllFunc: function (b) {
                var d = b.length, f, g = [];
                for (var h = 0; h < d; h++) {
                    var i = b[h];
                    f = i.id + "";
                    if (x.length >= e)break;
                    if (!a.inArray(f, x)) {
                        i.actiontype = "removeMember";
                        g.push(i);
                        x.push(f);
                        w.push(f);
                        u.push(i.screen_name)
                    }
                }
                J.addMemberFunc(g);
                J.updateGroupName()
            }, groupEditInputKeyup: function () {
                var b = E.getValue(), c = a.trim(b);
                c != b && E.setValue(c.substring(0, 16))
            }, addUserByName: function () {
                var b = A.getValue(), c = a.sizzle("[node-type='userItem']", C.searchLists), d = J.getCurItem(c);
                if (!d) {
                    if (x.length > e - 1) {
                        a.ui.tipAlert("群成员已满!", {icon: "rederrorS", hideDelay: 2e3}).beside(B);
                        return
                    }
                    var f = {nick: b};
                    G.getTrans("check", {onSuccess: function (a) {
                        J.addGroupMember(undefined, a.data);
                        B.value = "";
                        B.blur();
                        C.groupMember.style.display = "";
                        C.searchLists.innerHTML = "";
                        C.searchLists.style.display = "none"
                    }, onError: function (b) {
                        a.ui.tipAlert(b.msg, {icon: "rederrorS", hideDelay: 2e3}).beside(B)
                    }, onFail: function (a) {
                    }}).request(f)
                }
            }, setUserInfo: function (b, d) {
                if (!F && !!d) {
                    var e = d.currUser, f = d.addUser, g = a.core.util.easyTemplate(p, e).toString();
                    J.addGroupAllFunc(f);
                    C.addUserLists.style.display = "";
                    a.insertHTML(C.addUserListsContain, g, "afterbegin");
                    var h = a.sizzle("[node-type='addUserItem']", C.addUserListsContain).length;
                    C.addUserCount.innerHTML = c("#L{新加成员（%s）}", h);
                    h > 0 && C.addUserCount.style.display == ""
                }
            }, hideDialog: function () {
                a.custEvent.fire(q, "hide")
            }}, K = function () {
                B = r.getDomList().group_search_input;
                D = r.getDomList().group_edit_input;
                C = r.getDomList();
                r.on("editGroupName", "click", J.editGroupName);
                r.on("cannelEditGroup", "click", J.cannelEditGroup);
                r.on("groupPostSubmit", "click", J.groupPostSubmit);
                r.on("kickMember", "click", J.kickMember);
                r.on("groupPostCannel", "click", J.groupPostCannel);
                r.on("removeMember", "click", J.removeMember);
                r.on("addMember", "click", J.addMember);
                r.on("subimtEditGroup", "click", J.subimtEditGroup);
                a.custEvent.define(q, ["addSuccess", "editSuccess", "hide"])
            }, L = function () {
                var b = {gid: F};
                G.getTrans("info", {onSuccess: function (b) {
                    y = b.data.name;
                    f = y;
                    var d = b.data.members || [], h = d.length;
                    g = b.data.is_owner == 1;
                    var i;
                    for (var j = 0; j < h; j++) {
                        i = d[j];
                        x.push(i.uid + "");
                        u.push(i.remark ? i.remark : i.screen_name);
                        !g && (d[j].nopower = !0)
                    }
                    if (g) {
                        var l = "http://weibo.com/p/230491" + F + "/members?from=managelayer";
                        if (C.batManage) {
                            C.batManage.setAttribute("href", l);
                            C.batManage.style.display = ""
                        }
                    }
                    e = parseInt(b.data.max_member) || e;
                    C.maxConut.innerHTML = e;
                    C.line.style.display = "";
                    var n = a.core.util.easyTemplate(o, d).toString();
                    n = c(m, n);
                    C.titleText.innerHTML = y;
                    C.joinMemberListContain.innerHTML = n;
                    !k && (k = a.ui.scrollView(C.existing_box));
                    k && k.reset();
                    !g && (C.editGroupName.style.display = "none");
                    J.updateGroupName()
                }, onFail: function (a) {
                }, onError: function (a) {
                }}).request(b)
            }, M = function () {
                A = a.lib.kit.dom.smartInput(B, {notice: B.defaultValue});
                E = a.lib.kit.dom.smartInput(D, {notice: D.defaultValue});
                a.custEvent.add(A, "enter", J.addUserByName);
                a.addEvent(B, "keydown", J.groupSuggest);
                a.addEvent(B, "keyup", J.groupinputkeyup);
                a.addEvent(B, "click", J.groupinputclick);
                a.addEvent(D, "keyup", J.groupEditInputKeyup);
                a.addEvent(r, "hide", J.hideDialog);
                F ? L() : J.updateGroupName();
                I = a.lib.group.groupMember(r.getDomList().groupMember, {members: b.addUsers});
                a.custEvent.add(I, "addMember", J.addGroupMember);
                a.custEvent.add(I, "getUserInfo", J.setUserInfo)
            }, N = function () {
                K();
                M();
                r.on("shown", function () {
                    var b = C.groupSelect.offsetHeight, c = C.existing_box.offsetHeight;
                    C.searchLists.style.height = b + "px";
                    !k && (k = a.ui.scrollView(C.existing_box));
                    k && k.reset();
                    I.setHeight(b)
                }).on("hide", function () {
                    q.destroy()
                }).show()
            };
            N();
            q.destroy = function () {
                a.custEvent.undefine(q, ["addSuccess", "editSuccess", "hide"]);
                a.removeEvent(B, "keydown", J.groupSuggest);
                a.removeEvent(B, "keyup", J.groupinputkeyup);
                a.removeEvent(D, "keyup", J.groupEditInputKeyup);
                a.custEvent.remove(A, "enter", J.addUserByName);
                a.removeEvent(B, "click", J.groupinputclick);
                I.destroy();
                E.destroy();
                A.destroy();
                k.destroy()
            };
            return q
        }
    });
    STK.register("lib.publisher.source.publishTo", function (a) {
        var b = a.lib.kit.extra.language, c = a.core.util.templet, d = a.core.util.easyTemplate, e;
        return function (c) {
            var d, f, g = c && c.editorWrapEl, h = c && c.textEl, i = c && c.trans || a.conf.trans.publishTo, j = c && c.transName || "chatlist", k = {}, l = [], m, n = {}, o = c.isforward, p, q = !1, r, s, t, u = function () {
                if (!a.isNode(g))throw"publishTo need a wrapper node to parseDOM"
            }, v = a.getUniqueKey(), w = function (a) {
                var b = [], c;
                b.push('<div style="position: absolute;display:none;z-index:29999;outline:none;" hideFocus="true" node-type="publishTo" class="layer_menu_list" tabindex="10">');
                b.push('<ul id="' + v + '">');
                b.push('<li action-type="select" rank="0"><a title="#L{公开-你发表的微博可以被大家公开查看哦}" suda-data="key=tblog_edit_exposure&value=edit_public" href="javascript:void(0)" action-data="rank=0&text=#L{公开}&rankid=" action-type="publishTo"><i class="W_icon icon_type_public"></i>#L{公开}</a></li>');
                b.push('<li action-type="select" rank="6"><a title="#L{好友圈-发表的微博只有你的好友才能看到}" href="javascript:void(0)" action-data="rank=6&text=#L{好友圈}&rankid=" action-type="publishTo"><i class="W_icon icon_type_friends"></i>#L{好友圈}</a></li>');
                b.push('<li action-type="select" rank="1"><a title="#L{仅自己可见-发表的微博只有自己才能看到}" suda-data="key=tblog_edit_exposure&value=edit_private" href="javascript:void(0)" action-data="rank=1&text=#L{仅自己可见}&rankid=" action-type="publishTo"><i class="W_icon icon_type_self"></i>#L{仅自己可见}</a></li>');
                b.push('<li class="line S_line1"></li>');
                b.push('<li action-type="select"><a action-type="more" title="#L{群可见-发表的微博所有群成员都可以看到}" href="javascript:void(0);"><i class="W_icon icon_type_group_v2"></i>#L{群可见}</a></li>');
                b.push("</ul></div>");
                return b.join("")
            }, x = function (a) {
                var b = [], c = a.length, d;
                c > 6 ? b.push('<ul class="scroll_bar W_scroll" id="' + v + '">') : b.push('<ul class="scroll_bar W_scroll" id="' + v + '" style="">');
                for (var e = 0; e < c; e++) {
                    d = a[e];
                    b.push('<li action-type="select"><a action-type="publishTo" action-data="rank=7&text=' + d.gname + "&rankid=" + d.gid + '" title="' + d.gname + '" href="javascript:void(0);" onclick="return false;"><em class="S_txt1">' + d.gname + "</em>");
                    b.push('<span class="qunlist_right" action-type="setting" suda-data="key=adm_group&value=mail_publish"><em class="W_ficon ficon_setup S_ficon">J</em></span></a></li>')
                }
                b.push("</ul>");
                b.push('<ul><li class="line S_line1"></li>');
                b.push('<li  class="lotopt"><a href="javascript:void(0)" onclick="return false;" action-type="back">#L{返回}</a>');
                b.push('<a href="javascript:void(0);"suda－data="key=build_group&value=mail_publish"  action-data="minNum=2" action-type="createGroup" class="right"><em class="W_ficon ficon_add S_ficon">+</em><em class="S_txt1">#L{新建群}</em></a></li>');
                b.push("</ul>");
                return b.join("")
            }, y = function () {
                f = a.lib.kit.dom.parseDOM(a.builder(g).list);
                f.wrap || (f.wrap = g);
                r = f.wrap.className;
                f.submit && (s = f.submit.innerHTML)
            }, z = function () {
                d = function () {
                    var c = {}, d, k, n, o, u = f.showPublishTo;
                    k = d = u && u.getAttribute("action-data") && a.core.json.queryToJson(u.getAttribute("action-data")) || {rank: "all", rankid: ""};
                    c.node = a.core.evt.delegatedEvent(g);
                    var y = !1, z = {hotKeyChangeRank: function (c, f) {
                        var g = f.match(/\d+/);
                        if (g && g[0]) {
                            var h = parseInt(g[0], 10) - 1, i = [
                                {rank: 0, rankid: "", text: b("#L{公开}"), title: b("#L{公开-你发表的微博可以被大家公开查看哦}")},
                                {rank: 6, rankid: "", text: b("#L{好友圈}"), title: b("#L{好友圈-发表的微博只有你的好友才能看到}")},
                                {rank: 1, rankid: "", text: b("#L{仅自己可见}"), title: b("#L{仅自己可见-发表的微博只有自己才能看到}")}
                            ], j = function () {
                                a.foreach(k, function (a) {
                                    a.rank = 7;
                                    a.rankid = a.gid;
                                    a.text = a.gname;
                                    a.title = a.gname
                                });
                                i = i.concat(k);
                                var b = window.$CONFIG && window.$CONFIG.miyou == "1";
                                b || i.splice(1, 1);
                                if (i[h]) {
                                    d = i[h];
                                    E.btnContent(d.text);
                                    E.btnTitle(d.title);
                                    y = !1;
                                    a.custEvent.fire(E, "changeRank", d)
                                }
                            }, k = function () {
                                if (e)return a.core.arr.copy(e);
                                F.group.request(function (b) {
                                    k = a.core.arr.copy(b);
                                    j()
                                });
                                return null
                            }();
                            k && j()
                        }
                    }}, A = function () {
                        c.node.add("showPublishTo", "click", E.show)
                    }, B = function () {
                        F.normal.bind();
                        F.group.bind();
                        C.bind()
                    }, C = {keyboardManager: null, keyTypes: ["up", "down", "esc", "enter"], getIndex: function (b) {
                        var c = C.getList(), d = C.lastCur, e;
                        a.foreach(c, function (a, b) {
                            if (d === a) {
                                e = b;
                                return!1
                            }
                        });
                        b > 0 ? e++ : e--;
                        e >= c.length ? e = 0 : e < 0 && (e = c.length - 1);
                        return e
                    }, up: function () {
                        q = !0;
                        var a = C.getIndex(-1), b = C.getList()[a];
                        C.setCur(b, a);
                        q = !1
                    }, down: function () {
                        q = !0;
                        var a = C.getIndex(1), b = C.getList()[a];
                        C.setCur(b, a);
                        q = !1
                    }, enter: function () {
                        var b = C.lastCur;
                        if (!b.getAttribute("action-type") || b.getAttribute("action-type") == "select")b = a.sizzle("[action-type]", b)[0];
                        b && c.layer.fireDom(b, "click", null)
                    }, esc: function () {
                        E.hide()
                    }, bind: function () {
                        C.keyboardManager = a.lib.publisher.widget.keyboardCapture(f.publishTo, {stopScroll: !0});
                        a.custEvent.define(C.keyboardManager, C.keyTypes);
                        for (var b = 0, c = C.keyTypes.length; b < c; b++) {
                            var d = C.keyTypes[b];
                            a.custEvent.add(C.keyboardManager, d, C[d])
                        }
                    }, list: null, lastCur: null, focusPublishTo: function () {
                        f.publishTo.focus();
                        var b = this.getList(!0), c = a.sizzle('li[rank="' + d.rank + '"]', f.publishTo)[0];
                        this.setCur(c || b[0], 0)
                    }, setCur: function (b, c, d) {
                        this.lastCur && a.removeClassName(this.lastCur, "cur");
                        a.addClassName(b, "cur");
                        this.lastCur = b;
                        var e = a.E(v);
                        if (a.contains(e, b)) {
                            var f = function (b) {
                                return a.core.dom.getSize(b).height + (parseFloat(a.core.dom.getStyle(b, "marginTop")) || 0) + (parseFloat(a.core.dom.getStyle(b, "marginBottom")) || 0)
                            }, g = c + 1, h = Math.max(f(b), f(a.sizzle("a", b)[0]));
                            if (d)return;
                            g > 6 ? e.scrollTop = (g - 6) * h : e.scrollTop = 0
                        }
                    }, getList: function (b) {
                        if (b || !this.list) {
                            var c = a.sizzle("li", f.publishTo), d = [];
                            a.foreach(c, function (b) {
                                a.getStyle(b, "display") != "none" && b.className != "line" && d.push(b)
                            });
                            this.list = d
                        }
                        return this.list
                    }}, D = {setPos: function () {
                        var b = a.core.dom.getSize;
                        document.body.appendChild(f.publishTo);
                        var c = b(f.showPublishTo).width - b(f.publishTo).width;
                        a.lib.kit.dom.layoutPos(f.publishTo, f.showPublishTo, {offsetX: c + 2, offsetY: 2})
                    }, overHandler: function (b) {
                        if (!q) {
                            var c = a.sizzle("[action-type=select]", f.publishTo);
                            index = a.core.arr.indexOf(b.el, c);
                            list = a.sizzle(".cur", f.publishTo);
                            list && list[0] && a.core.dom.removeClassName(list[0], "cur");
                            a.core.dom.addClassName(c[index], "cur");
                            C.setCur(c[index], index, !0)
                        }
                    }, init: function () {
                        c.layer = a.core.evt.delegatedEvent(f.publishTo);
                        c.closeFriend = a.core.evt.delegatedEvent(f.publishTo)
                    }, show: function () {
                        var b = a.getStyle(f.publishTo, "display") != "none";
                        a.setStyle(f.publishTo, "display", "");
                        D.setPos();
                        C.focusPublishTo();
                        b || a.ui.effect(f.publishTo, "fadeInDown", "fast");
                        if (!m) {
                            m = 1;
                            D.bindBodyEvt()
                        }
                        return!1
                    }, hide: function () {
                        !f.publishTo || a.ui.effect(f.publishTo, "fadeOutUp", "fast", function () {
                            a.setStyle(f.publishTo, "display", "none");
                            y = !1;
                            if (m) {
                                m = 0;
                                D.removeBodyEvt()
                            }
                        })
                    }, autoHide: function (b) {
                        b = a.core.evt.fixEvent(b);
                        f.showPublishTo !== b.target && !a.core.dom.contains(f.showPublishTo, b.target) && !a.core.dom.contains(f.publishTo, b.target) && E.hide()
                    }, content: function (a) {
                        if (typeof a == "undefined")return f.publishTo.innerHTML;
                        f.publishTo.innerHTML = a
                    }, bindBodyEvt: function () {
                        a.addEvent(document.body, "click", D.autoHide)
                    }, removeBodyEvt: function () {
                        a.removeEvent(document.body, "click", D.autoHide)
                    }}, E = {enable: function () {
                        f.showPublishTo.setAttribute("action-type", "showPublishTo")
                    }, disable: function () {
                        f.showPublishTo.setAttribute("action-type", "")
                    }, miYouStyle: function (a, c) {
                        var d = "2", e = $CONFIG.lang == "zh-cn" ? "" : "_CHT";
                        d == c.rank ? f.submit.innerHTML = b('<span class="btn_30px">#L{好友发布}</span>') : f.submit.innerHTML = s
                    }, show: function () {
                        var b = function () {
                            a.custEvent.fire(E, "show");
                            y ? F.group.show() : F.normal.show()
                        };
                        if (f.publishTo) {
                            var c = a.getStyle(f.publishTo, "display");
                            if (c === "none")b(); else {
                                a.setStyle(f.publishTo, "display", "none");
                                y = !1
                            }
                        } else b();
                        a.preventDefault()
                    }, btnContent: function (b) {
                        b && (n.innerHTML = a.encodeHTML(b))
                    }, btnTitle: function (a) {
                        a && f.showPublishTo.setAttribute("title", a)
                    }, hide: function () {
                        D.hide()
                    }, toggle: function () {
                        y || (f.publishTo.style.display == "none" ? E.show() : E.hide())
                    }, rank: function () {
                        return d
                    }, reset: function () {
                        E.enable();
                        f.wrap.className = r;
                        f.submit.innerHTML = s;
                        E.btnContent(o.content);
                        E.btnTitle(o.title);
                        d = null;
                        y = !1;
                        d = k
                    }, destroy: function () {
                        try {
                            for (var b in c)c[b].destroy()
                        } catch (d) {
                        }
                        l.length && a.hotKey.remove(h, l, z.hotKeyChangeRank);
                        a.removeNode(f.publishTo);
                        a.custEvent.undefine(E);
                        if (C.keyboardManager) {
                            C.keyboardManager.destroy();
                            a.custEvent.undefine(C.keyboardManager, C.keyTypes)
                        }
                    }, changeRank: function (b) {
                        b = b > 0 ? b - 1 : 0;
                        var c = a.sizzle('a[action-type="publishTo"]', f.publishTo)[b];
                        if (c) {
                            F.normal.changeRank({el: c, data: a.core.json.queryToJson(c.getAttribute("action-data") || "")});
                            var d = c.getAttribute("suda-data");
                            if (d) {
                                var e = d.match(/key=(.+?)&value=(.+)/);
                                e && e.length === 3 && window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack(e[1], e[2])
                            }
                        }
                    }, getDomHeight: function () {
                        return f.publishTo.style.display == "none" ? {width: 0, heigth: 0} : a.core.dom.getSize(f.publishTo)
                    }, bindAltKey: function () {
                        if (a.isNode(h)) {
                            var b = a.core.util.browser.OS === "macintosh";
                            if (b)for (var c = 1; c <= 9; c++)l.push("ctrl+" + c); else for (var c = 1; c <= 9; c++)l.push("alt+" + c);
                            a.hotKey.add(h, l, z.hotKeyChangeRank)
                        }
                    }}, F = {normal: {bind: function () {
                        c.layer.add("publishTo", "click", F.normal.changeRank);
                        c.layer.add("more", "click", F.normal.more);
                        c.layer.add("select", "mousemove", D.overHandler)
                    }, getList: function () {
                        D.content(p)
                    }, more: function () {
                        F.group.show();
                        y = !0;
                        a.core.evt.stopEvent()
                    }, show: function () {
                        var a = function () {
                            if (!f.publishTo) {
                                G();
                                D.init();
                                B()
                            }
                            F.normal.getList();
                            D.show()
                        };
                        e ? a() : F.group.request(a)
                    }, editGroupCallback: function (b) {
                        F.group.request(function (b) {
                            groups = a.core.arr.copy(b);
                            F.group.cache = null
                        })
                    }, changeRank: function (c) {
                        try {
                            a.preventDefault(c.evt)
                        } catch (e) {
                        }
                        var g = a.fixEvent().target, h = !1;
                        if (g.getAttribute("action-type") == "setting")h = !0; else {
                            var i = a.lib.kit.dom.parentElementBy(g, f.publishTo, function (a) {
                                if (a.getAttribute("action-type") == "setting")return!0
                            });
                            i && (h = !0)
                        }
                        if (h) {
                            var j = c.data.rankid.split(":")[1];
                            E.hide();
                            t = a.lib.group.gmemberSelect({gid: j, editSuccessCallback: F.normal.editGroupCallback})
                        } else {
                            d = c.data;
                            var k = c.data.text;
                            E.btnContent(k);
                            E.btnTitle(c.el.getAttribute("title"));
                            d.rank == "group" ? F.group.show() : E.hide();
                            a.custEvent.fire(E, "changeRank", d);
                            c.data.rank == "6" ? f.submit.innerHTML = b("#L{好友发布}") : f.submit.innerHTML = b("#L{发布}")
                        }
                    }}, group: {request: function (b) {
                        i.request(j, {onSuccess: function (a) {
                            var c = a.data.length;
                            for (var d = 0; d < c; d++)a.data[d].index = d + 1;
                            e = a.data;
                            b && b(e)
                        }, onError: function (b) {
                            a.lib.dialog.ioError(b.code, b)
                        }}, {})
                    }, bind: function () {
                        c.layer.add("back", "click", F.group.back);
                        c.layer.add("createGroup", "click", F.group.createGroup)
                    }, getList: function () {
                        if (!F.group.cache) {
                            var a = b(x(e));
                            F.group.cache = a;
                            D.content(F.group.cache)
                        } else D.content(F.group.cache)
                    }, show: function () {
                        F.group.getList();
                        D.show()
                    }, back: function () {
                        var b = a.core.evt.fixEvent();
                        a.core.evt.stopEvent(b);
                        y = !1;
                        F.normal.show()
                    }, groupSelectCallback: function (b) {
                        d = {rank: 7, rankid: b.page_objectid, text: b.name, title: b.name};
                        var c = b.name;
                        E.btnContent(c);
                        E.btnTitle(c);
                        a.custEvent.fire(E, "changeRank", d);
                        F.group.request(function (b) {
                            groups = a.core.arr.copy(b);
                            F.group.cache = null
                        })
                    }, createGroup: function (b) {
                        E.hide();
                        var c = b.data;
                        c.extraData = {fromapp: 1};
                        c.addSuccessCallback = F.group.groupSelectCallback;
                        t = a.lib.group.gmemberSelect(c)
                    }}}, G = function (c) {
                        var d = b(w(c));
                        f.publishTo = a.insertHTML(document.body, d, "beforeend");
                        p = f.publishTo.innerHTML
                    }, H = function () {
                        if (!a.isNode(f.showPublishTo))return 0;
                        n = f.publishTotext;
                        o = {content: n.innerHTML, title: f.showPublishTo.getAttribute("title")};
                        A();
                        return 1
                    }, I = H();
                    a.custEvent.define(E, ["show", "hide", "changeRank"]);
                    return I ? E : null
                }();
                d && d.bindAltKey && d.bindAltKey()
            }, A = function () {
                u();
                y();
                z()
            };
            A();
            return d
        }
    });
    STK.register("lib.publisher.source.shine", function (a) {
        var b = function (a) {
            return a.slice(0, a.length - 1).concat(a.concat([]).reverse())
        };
        return function (c, d) {
            var e = a.parseParam({start: "#fff", color: "#fbb", times: 2, step: 5, length: 4}, d), f = e.start.split(""), g = e.color.split(""), h = [];
            for (var i = 0; i < e.step; i += 1) {
                var j = f[0];
                for (var k = 1; k < e.length; k += 1) {
                    var l = parseInt(f[k], 16), m = parseInt(g[k], 16);
                    j += Math.floor(parseInt(l + (m - l) * i / e.step, 10)).toString(16)
                }
                h.push(j)
            }
            for (var i = 0; i < e.times; i += 1)h = b(h);
            var n = !1, o = a.timer.add(function () {
                if (!h.length)a.timer.remove(o); else {
                    if (n) {
                        n = !1;
                        return
                    }
                    n = !0;
                    c.style.backgroundColor = h.pop()
                }
            })
        }
    });
    STK.register("lib.publisher.source.scoreshine", function (a) {
        return function (b, c) {
            var d = a.lib.kit.extra.language, e, f = 0, e = setInterval(function () {
                c.innerHTML = d("#L{亲，先打个分吧}");
                b.style.width = f % 2 == 0 ? "100%" : "0%";
                f++;
                f > 3 && clearInterval(e)
            }, 200)
        }
    });
    STK.register("conf.trans.rteditor", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("create", {url: "/aj/article/create", method: "post"});
        c("getvideo", {url: "/aj/article/getvideo", method: "post"});
        c("setdraft", {url: "/aj/article/setdraft", method: "post"});
        c("getdraft", {url: "/aj/article/getdraft", method: "post"});
        c("cleandraft", {url: "/aj/article/cleandraft", method: "post"});
        c("import", {url: "/aj/article/import", method: "get"});
        return b
    });
    STK.register("lib.publisher.publisher", function (a) {
        var b = {title: "#L{有什么新鲜事想告诉大家}"}, c = a.lib.kit.extra.language, d = a.lib.publisher.widget.widgetloader, e = "#在这里输入你想要说的话题#";
        return function (b) {
            var e = {limitNum: 140, extendText: ""}, f = 140, g = {}, h, i = !0, j, k, l, m, n, o, p, q, r, s;
            h = a.parseParam({trans: a.conf.trans.publisher, transName: "publish", node: null, styleId: "1", appkey: "", pid: "", info: "", content: "", extraUrl: "", extraSend: {}, dialog: !1, storage: !0}, b);
            var t;
            h.extraSend.location = h.extraSend.location || $CONFIG.location || "";
            o = a.custEvent.define(g, ["publish", "share"]);
            var u = {key: "publisher_" + $CONFIG.uid, write: function (a) {
                if (h.storage != !1) {
                    var a = a || m.API.getWords() || "";
                    STK.core.util.storage.set(u.key, a)
                }
            }, read: function () {
                if (h.storage == !1)return null;
                var a = STK.core.util.storage.get(u.key);
                return a != "null" && a != null && a.length != 0 ? a : null
            }, del: function () {
                h.storage != !1 && STK.core.util.storage.del(u.key)
            }}, v = function () {
                var b = k.textEl;
                if (i) {
                    j === "error" && a.lib.publisher.source.shine(b);
                    t && t.get("score") == 0 && k.scorecontrol && a.lib.publisher.source.scoreshine(k.scorecontrol, k.score_title)
                } else {
                    if (a.hasClassName(k.submit, "W_btn_a_disable"))return;
                    i = !0;
                    j = "loading";
                    var c = a.lib.kit.extra.getDiss(w(), k.submit);
                    c = a.lib.kit.extra.merge(c, a.queryToJson(k.submit.getAttribute("action-data") || ""));
                    t && (c = a.lib.kit.extra.merge(c, t.read()));
                    c.pub_type = "dialog";
                    r && r.disable();
                    n.request(c);
                    if (k.followpresenter && k.followpresenter.checked == !0) {
                        var d = a.queryToJson(k.followpresenter.getAttribute("action-data") || "");
                        h.trans.getTrans("follow", {}).request(d)
                    }
                }
            }, w = function () {
                var b = m.API.getWords();
                p && b.indexOf(p) === -1 && (b = b + p);
                var c = {};
                c = a.core.json.merge(c, h.extraSend);
                c.appkey = h.appkey;
                c.style_type = h.styleId;
                c.pic_id = h.pid;
                c.text = b;
                c.pdetail = $CONFIG.page_id;
                c.location = $CONFIG.location;
                var d = m.API.getExtra();
                if (d)if (d.indexOf("=") < 0)c.pic_id = m.API.getExtra() || ""; else {
                    var e = d, f = a.core.json.queryToJson(e);
                    for (var g in f)c[g] = f[g]
                }
                if (r && r.rank) {
                    var i = r.rank();
                    c.rank = i.rank;
                    c.rankid = i.rankid
                }
                var j = !1;
                if (m.nodeList.textEl && m.nodeList.textEl.getAttribute("settime")) {
                    c.addtime = m.nodeList.textEl.getAttribute("settime");
                    c.module = "autopub";
                    j = !0
                }
                m.nodeList.textEl && m.nodeList.textEl.getAttribute("tags") && (c.photo_tag = m.nodeList.textEl.getAttribute("tags"));
                return c
            }, x = function (a) {
                if ((a.keyCode === 13 || a.keyCode === 10) && a.ctrlKey) {
                    v();
                    m.API.blur()
                }
            }, y = function (b, d) {
                function s() {
                    i = !1;
                    a.removeClassName(k.submit, "W_btn_a_disable")
                }

                function r() {
                    i = !0;
                    a.addClassName(k.submit, "W_btn_a_disable")
                }

                u.write(a.core.str.trim(k.textEl.value) ? k.textEl.value : "");
                var g = t && t.get("extraurl") || "";
                g === "ABSENT" && (g = "");
                var h = t && t.get("prefixtext") || "";
                h === "ABSENT" && (h = "");
                var j = t && t.get("score"), l = "#L{还可以输入%s字}", m = "#L{已超出%s字}", n = l, o = !0, p = 0, q = e.extendText ? c(e.extendText) : "";
                e.limitNum = f - a.lib.publisher.widget.count(g + h);
                o = (p = e.limitNum - d.count) >= 0;
                if (d.count === 0) {
                    n = l;
                    r()
                } else if (o) {
                    n = l;
                    s()
                } else {
                    n = m;
                    r()
                }
                k.num.innerHTML = q + c(n, o ? "<span>" + Math.abs(p) + "</span>" : '<span class="S_error">' + Math.abs(p) + "</span>");
                t && t.get("score") !== "ABSENT" && t.get("score") == 0 && r()
            }, z = function (b, d) {
                m.API.blur();
                j = "";
                k.successTip.style.display = "";
                k.textEl.value = k.textEl.getAttribute("defaulttopic") || "";
                var f = a.sizzle(".W_icon", k.successTip)[0], g = a.sizzle(".txt", k.successTip)[0];
                g.style.display = "none";
                a.ui.effect(f, "flipInY", "normal");
                setTimeout(function () {
                    g.style.display = "";
                    a.ui.effect(g, "fadeInRight", "normal")
                }, 50);
                setTimeout(function () {
                    i = !1;
                    a.ui.effect(k.successTip, "fadeOut", "fast", function () {
                        k.successTip.style.display = "none"
                    });
                    var b = m.API.count();
                    b > 0 ? a.core.dom.removeClassName(k.submit, "W_btn_a_disable") : k.submit && a.core.dom.addClassName(k.submit, "W_btn_a_disable");
                    k.num.innerHTML = (e.extendText ? c(e.extendText) : "") + c("#L{还可以输入%s字}", "<span>" + (e.limitNum - b) + "</span>")
                }, 2e3);
                a.custEvent.fire(o, "publish", [b.data, d]);
                a.custEvent.fire(o, "share");
                setTimeout(function () {
                    b.data.feedtype == "timefeed" ? a.conf.channel.feed.fire("timeFeedPublish", [b.data.html, d]) : a.conf.channel.feed.fire("publish", [b.data, d])
                }, 1500);
                a.core.dom.addClassName(k.submit, "W_btn_a_disable");
                r && r.reset && r.reset();
                u.del();
                s && s.close && s.close();
                m.nodeList.textEl && m.nodeList.textEl.getAttribute("tags") && m.nodeList.textEl.removeAttribute("tags");
                if (m.nodeList.textEl && m.nodeList.textEl.getAttribute("withdraft") == "true") {
                    m.nodeList.textEl.removeAttribute("withdraft");
                    a.conf.trans.rteditor.getTrans("cleandraft", {}).request()
                }
            }, A = function (b, d) {
                i = !1;
                j = "";
                b.msg = b.msg || c("操作失败");
                a.lib.dialog.ioError(b.code, b);
                k.submit && a.core.dom.removeClassName(k.submit, "W_btn_a_disable");
                r && r.enable()
            }, B = function () {
                a.removeClassName(k.textEl.parentNode, "clicked")
            }, C = function () {
                a.addClassName(k.textEl.parentNode, "clicked")
            }, D = function (b) {
                var b = a.parseParam({appkey: "", content: "", info: "", pid: "", extraSend: {}}, b);
                h.extraSend = b.extraSend;
                h.extraSend.location = h.extraSend.location || $CONFIG.location || "";
                h.pid = b.pid;
                if (!!a.contains(document.body, k.textEl)) {
                    k.textEl.defaultValue && (k.textEl.value = k.textEl.defaultValue);
                    b.content && (k.textEl.value = b.content);
                    k.textEl.setAttribute("content", b.content);
                    k.info && (k.info.innerHTML = b.info);
                    b.appkey && (h.appkey = b.appkey);
                    var d = m.API.count();
                    if (d > 0) {
                        i = !1;
                        j = "";
                        a.core.dom.removeClassName(k.submit, "W_btn_a_disable")
                    } else {
                        i = !0;
                        j = "error";
                        a.core.dom.addClassName(k.submit, "W_btn_a_disable")
                    }
                    if (t && t.get("score") !== "ABSENT" && t.get("score") == 0) {
                        i = !0;
                        a.core.dom.addClassName(k.submit, "W_btn_a_disable")
                    }
                    k.num.innerHTML = (e.extendText ? c(e.extendText) : "") + c("#L{还可以输入%s字}", "<span>" + (e.limitNum - d) + "</span>");
                    s && s.close && s.close()
                }
            }, E = function () {
                i = !1
            }, F = function (b) {
                var c = a.core.dom.textSelectArea(b), d = c.start || b.value.length, e = c.len || 0, f = d + "&" + e;
                b.setAttribute("range", f)
            }, G = function () {
                l = a.lib.editor.base(h.node, e);
                m = l.editor;
                k = m.nodeList;
                h.dialog === "true" && k.textEl.setAttribute("phototag", "false");
                t = a.lib.publisher.source.formdata(k.extradata);
                var b = t && t.get("extraurl") || "";
                b === "ABSENT" && (b = "");
                var c = t && t.get("prefixtext") || "";
                c === "ABSENT" && (c = "");
                e.limitNum = e.limitNum - a.lib.publisher.widget.count(b + c);
                try {
                    F(k.textEl)
                } catch (d) {
                }
                k.wrap && (r = a.lib.publisher.source.publishTo({editorWrapEl: k.wrap, textEl: k.textEl}));
                q = a.lib.dialog.validateCode();
                u.read() && setTimeout(function () {
                    if (a.trim(k.textEl.value).length === 0 || k.textEl.defaultValue && k.textEl.value === k.textEl.defaultValue) {
                        k.textEl.value = "";
                        m.API.insertText(u.read());
                        k.textEl.focus()
                    }
                })
            }, H = "", I = function (b) {
                if (!!k && !!k.feedconfig) {
                    if (a.core.dom.hasClassName(k.feedconfig, "send_weibo_simple") && a.core.dom.hasClassName(k.feedconfig, "send_weibo_simple_remark_fold")) {
                        a.removeClassName(k.feedconfig, "send_weibo_simple_remark_fold");
                        H = "send_weibo_simple_remark_fold"
                    }
                    if (a.core.dom.hasClassName(k.feedconfig, "send_weibo_simple") && a.core.dom.hasClassName(k.feedconfig, "send_weibo_simple_fold")) {
                        a.removeClassName(k.feedconfig, "send_weibo_simple_fold");
                        H = "send_weibo_simple_fold"
                    }
                }
            }, J = function (b) {
                if (!!k && !!k.feedconfig) {
                    var b = a.fixEvent(b), c = b.target;
                    a.core.dom.hasClassName(k.feedconfig, "send_weibo_simple") && !a.core.dom.hasClassName(k.feedconfig, H) && c !== k.feedconfig && (a.core.dom.hasClassName(c, "WB_miniblog_fb") || a.core.dom.hasClassName(c, "WB_frame_c")) && a.addClassName(k.feedconfig, H)
                }
            }, K = function () {
                a.addEvent(k.submit, "click", v);
                a.lib.kit.extra.keySubmit.on(k.textEl, v);
                a.custEvent.add(m, "blur", B);
                a.custEvent.add(m, "focus", C);
                a.addEvent(k.feedconfig, "click", I);
                a.addEvent(document.body, "click", J)
            }, L = function () {
                r && r.miYouStyle.apply(null, arguments)
            }, M = function () {
                a.custEvent.add(m, "textNum", y);
                r && a.custEvent.add(r, "changeRank", L)
            }, N = function () {
                t && t.get("api") && t.get("api") !== "ABSENT" && (h.transName = "proxy");
                n = h.trans.getTrans(h.transName, {onComplete: function (b, c) {
                    var d = {onSuccess: z, onError: A, requestAjax: n, param: w(), onRelease: function () {
                        i = !1;
                        j = "";
                        k.submit && a.core.dom.removeClassName(k.submit, "W_btn_a_disable");
                        r && r.enable()
                    }};
                    q.validateIntercept(b, c, d)
                }, onFail: A, onTimeout: A})
            }, O = function () {
                G();
                K();
                M();
                N();
                try {
                    D(h)
                } catch (a) {
                }
                try {
                    s = d(m)
                } catch (a) {
                }
            }, P = function () {
                r && r.reset && r.reset();
                r && r.hide && r.hide();
                s && s.close && s.close()
            }, Q = function (a) {
                m.API.addExtraInfo(a)
            }, R = function (a) {
                m.API.disableEditor(a)
            }, S = function () {
                k && k.submit && a.removeEvent(k.submit, "click", v);
                k && k.textEl && a.lib.kit.extra.keySubmit.off(k.textEl, v);
                a.custEvent.remove(m, "textNum", y);
                a.custEvent.remove(m, "blur", B);
                a.custEvent.remove(m, "focus", C);
                a.removeEvent(k.feedconfig, "click", I);
                a.removeEvent(document.body, "click", J);
                r && a.custEvent.remove(r, "changeRank", L);
                a.custEvent.undefine(o, "publish");
                q && q.destroy && q.destroy();
                r && r.destroy && r.destroy();
                s && s.destroy && s.destroy();
                k = null;
                n = null;
                i = !1;
                for (var b in g)delete g[b];
                g = null
            };
            O();
            g.publishTo = r;
            g.close = P;
            g.editor = m;
            g.rend = D;
            g.unrend = E;
            g.addExtraInfo = Q;
            g.disableEditor = R;
            g.destroy = S;
            return g
        }
    });
    STK.register("lib.publisher.publisherDialog", function (a) {
        var b = '<#et temp data><div class="detail" node-type="outer"><div class="send_weibo clearfix" node-type="wrap"><div class="title_area clearfix"><div class="title" node-type="info"></div><div class="num S_txt2" node-type="num">#L{还可以输入}<span>140</span>#L{字}</div><div class="key S_textb"></div></div><div class="input "><textarea placeholder="" class="W_input" name="" node-type="textEl" range="26&amp;0"></textarea><div class="send_succpic" style="display:none" node-type="successTip"><span class="W_icon icon_succB"></span><span class="txt">发布成功</span></div><form style="display:none;" node-type="extradata"></form></div><div class="func_area clearfix"><div class="func"><div class="limits"><a href="javascript:void(0);" class="S_txt1" node-type="showPublishTo" action-type="showPublishTo" action-data="rank=0"><span node-type="publishTotext" class="W_autocut">#L{所有人可见}</span><em class="W_ficon ficon_arrow_down S_ficon" node-type="publish_to_arrow">c</em></a></div><a href="javascript:void(0)" class="W_btn_a btn_30px" node-type="submit">#L{发布}</a></div><div class="kind" node-type="widget"><#if (data.face)><a href="javascript:void(0);" class="S_txt1" action-type="face" action-data="type=500&amp;action=1&amp;log=face&amp;cate=1" title="#L{表情}" node-type="smileyBtn" suda-uatrack="key=tblog_home_edit&amp;value=phiz_button"><em class="W_ficon ficon_face">o</em></a></#if><#if (data.face)><a href="javascript:void(0);" class="S_txt1" action-type="multiimage" action-data="type=508&amp;action=1&amp;log=image&amp;cate=1" title="#L{图片}" suda-uatrack="key=tblog_new_image_upload&amp;value=image_button"><em class="W_ficon ficon_image">p</em></a></#if></div></div></div></div></#et>', c = {title: "#L{有什么新鲜事想告诉大家?}"}, d = a.lib.kit.extra.language, e = a.lib.publisher.publisher, f = a.core.util.easyTemplate, g = window.$CONFIG || {}, h = {limitNum: 140, extendText: '<a target="_blank" class="S_txt2" href="http://weibo.com/z/guize/gongyue.html">#L{发言请遵守社区公约}</a>，'};
        return function (i) {
            var j = {}, k, l;
            conf = a.parseParam({trans: a.conf.trans.publisher, transName: "publish", template: d(b), appkey: "", styleId: "1", face: !0, image: !0, pid: "", content: "", info: "", title: d(c.title), extraUrl: "", extraSend: {}, html: null, dialog: "true", storage: !1}, i);
            conf.extraSend.location = conf.extraSend.location || g.location || "";
            var m = f(d(conf.template), conf).toString();
            conf.html && (m = conf.html);
            conf.editorOpts = h;
            a.custEvent.define(j, ["show", "hide", "publishShare"]);
            var n = function (b) {
                var e = a.parseParam({appkey: "", content: "", info: "", pid: "", title: d(c.title), extraSend: {}}, b);
                e.extraSend.location = e.extraSend.location || g.location || "";
                l.setTitle(e.title);
                l.show();
                a.custEvent.add(l, "hidden", r);
                k.rend(e);
                k.editor.API.focus();
                a.custEvent.fire(j, "show")
            }, o = function () {
                setTimeout(r, 1500)
            }, p = function (b, c, d) {
                a.custEvent.fire(j, "publishShare", [c, d])
            }, q = function () {
                a.custEvent.add(k, "publish", o);
                a.custEvent.add(k, "publish", p)
            }, r = function () {
                a.custEvent.remove(l, "hidden", r);
                k.close();
                l.hide();
                a.custEvent.fire(j, "hide")
            }, s = function () {
                a.custEvent.remove(k, "publish", o);
                k.destroy();
                l.destroy()
            }, t = function () {
                if (!l) {
                    l = a.ui.dialog();
                    l.setContent(m)
                }
                conf.node = l.getBox();
                k = e(conf);
                a.custEvent.hook(k, j, {publish: "publish", hide: "hide"});
                q();
                n(conf)
            };
            t();
            j.dialog = l;
            j.publishTo = k.publishTo;
            j.addExtraInfo = k.addExtraInfo;
            j.disableEditor = k.disableEditor;
            j.show = n;
            j.hide = r;
            j.destroy = s;
            return j
        }
    });
    STK.register("lib.cite.hotkey", function (a) {
        function i(b) {
            var c = document.activeElement, d = a.fixEvent(b).target;
            c && c.getAttribute("action-type") === "feed_list_item" && d != c && !a.contains(c, d) && c.removeAttribute("tabindex")
        }

        function f() {
            var b = a.ui.mask.getNode();
            return!!b && b.style.display != "none"
        }

        var b = a.lib.kit.extra.language, c, d, e = b('<div class="W_layer"><div class="content"><div class="W_layer_title" node-type="title">#L{快捷键菜单}</div><div class="W_layer_close"><a node-type="close" href="javascript:void(0);" class="W_ficon ficon_close S_ficon">X</a></div><div class="W_shortcuts_menu"><dl class="sc_l"><dd class="keyboard">m</dd><dt class="name"><em>#L{收藏}</em></dt> </dl><dl class="sc_c"><dd class="keyboard">j</dd><dt class="name"><em>#L{下一条微博}</em></dt> </dl><dl class="sc_r"><dd class="keyboard">p</dd><dt class="name"><em>#L{返回顶部发布器}</em></dt> </dl><dl class="sc_l"><dd class="keyboard">l</dd><dt class="name"><em>#L{赞}</em></dt> </dl><dl class="sc_c"><dd class="keyboard">k</dd><dt class="name"><em>#L{上一条微博}</em></dt> </dl><dl class="sc_r"><dd class="keyboard">i</dd><dt class="name"><em>#L{展开微博内容}</em></dt> </dl><dl class="sc_l"><dd class="keyboard">f</dd><dt class="name"><em>#L{转发}</em></dt> </dl><dl class="sc_c"><dd class="keyboard">.</dd><dt class="name"><em>#L{显示新微博}</em></dt> </dl><dl class="sc_r"><dd class="keyboard">space</dd><dt class="name"><em>#L{向下滚动一屏幕}</em></dt> </dl><dl class="sc_l"><dd class="keyboard">c</dd><dt class="name"><em>#L{评论}</em></dt> </dl><dl class="sc_c"><dd class="keyboard">?</dd><dt class="name"><em>#L{快捷键帮助}</em></dt> </dl><dl class="sc_r"><dd class="keyboard">shift</dd><dd class="keyboard">space</dd><dt class="name"><em>#L{向上滚动一屏}</em></dt> </dl><dl class="sc_l"><dd class="keyboard">/</dd><dt class="name"><em>#L{搜索}</em></dt> </dl><dl class="sc_c"><dd class="keyboard">n</dd><dt class="name"><em>#L{快捷发布器}</em></dt> </dl><dl class="sc_r"><dd class="keyboard">esc</dd><dt class="name"><em>#L{关闭弹层 / 取消输入}</em></dt> </dl><dl class="sc_l"></dl></div></div></div>'), g = ["esc"], h = {"t:keyup": function () {
            if (!f()) {
                document.body.scrollIntoView();
                document.activeElement && document.activeElement.blur()
            }
        }, "p:keyup": function () {
            if (!f()) {
                var b = a.sizzle("#v6_pl_content_publishertop [node-type=textEl]")[0];
                b && b.focus()
            }
        }, "n:keyup": function () {
            c || a.conf.trans.publisher.request("getpublish", {onSuccess: function (b) {
                c = a.lib.publisher.publisherDialog({html: b.data.html});
                a.custEvent.once(c, "hide", function () {
                    c = null
                })
            }})
        }, "j:keydown": function () {
            if (!f()) {
                var b = a.sizzle("[action-type=feed_list_item]"), c = 60, d;
                while (d = b.shift()) {
                    if (d.getAttribute("feedtype") === "subfeed")continue;
                    d.getAttribute("tabindex") && d.removeAttribute("tabindex");
                    var e = d.getBoundingClientRect().top - c;
                    if (e > 1) {
                        ~function (b) {
                            setTimeout(function () {
                                b.setAttribute("tabindex", "-1");
                                b.focus();
                                a.scrollTo(b, {top: c, step: 8})
                            })
                        }(d);
                        break
                    }
                }
                while (d = b.shift())d.getAttribute("tabindex") && d.removeAttribute("tabindex")
            }
        }, "k:keydown": function () {
            if (!f()) {
                var b = a.sizzle("[action-type=feed_list_item]"), c = 60, d;
                while (d = b.pop()) {
                    if (d.getAttribute("feedtype") === "subfeed")continue;
                    d.getAttribute("tabindex") && d.removeAttribute("tabindex");
                    var e = d.getBoundingClientRect().top - c;
                    if (e < 0) {
                        ~function (b) {
                            setTimeout(function () {
                                b.setAttribute("tabindex", "-1");
                                b.focus();
                                a.scrollTo(b, {top: c, step: 8})
                            })
                        }(d);
                        break
                    }
                }
                while (d = b.shift())d.getAttribute("tabindex") && d.removeAttribute("tabindex")
            }
        }, "m:keyup": function (b) {
            var c = document.activeElement, d;
            c && c.getAttribute("action-type") === "feed_list_item" && (d = a.sizzle(".WB_feed_handle [action-type=fl_favorite]", c)[0]) && a.core.evt.fireEvent(d, "click")
        }, "f:keyup": function (b) {
            var c = document.activeElement, d;
            c && c.getAttribute("action-type") === "feed_list_item" && (d = a.sizzle(".WB_feed_handle [action-type=fl_forward]", c)[0]) && a.core.evt.fireEvent(d, "click")
        }, "c:keyup": function (b) {
            var c = document.activeElement, d;
            c && c.getAttribute("action-type") === "feed_list_item" && (d = a.sizzle(".WB_feed_handle [action-type=fl_comment]", c)[0]) && a.core.evt.fireEvent(d, "click")
        }, "l:keyup": function (b) {
            var c = document.activeElement, d;
            c && c.getAttribute("action-type") === "feed_list_item" && (d = a.sizzle(".WB_feed_handle [action-type=fl_like]", c)[0]) && a.core.evt.fireEvent(d, "click")
        }, "i:keyup": function (b) {
            var c = document.activeElement, d, e = a.fixEvent(b).shiftKey === !0;
            if (c && c.getAttribute("action-type") === "feed_list_item")if (d = a.sizzle("[action-type=feed_list_media_toSmall]", c)[0]) {
                var f = a.sizzle("[node-type=imagesBox]", c)[0], g = f && a.sizzle("[action-type=thumbItem]", f), h;
                if (g && g.length) {
                    var i = e ? "pop" : "shift";
                    while (h = g[i]())if (a.core.dom.hasClassName(h, "current"))break;
                    if (h = g[i]()) {
                        a.core.evt.fireEvent(h, "click");
                        return
                    }
                }
                a.core.evt.fireEvent(d, "click")
            } else if ((d = a.sizzle("[action-type=fl_pics],[action-type=feed_list_media_img], [action-type=feed_list_third_rend]", c)).length) {
                d = e ? d[d.length - 1] : d[0];
                a.core.evt.fireEvent(d, "click")
            }
        }, "space:keydown": function (b) {
            a.scrollTo(document.body, {top: -(a.scrollPos().top + (a.winSize().height - 70)), step: 5});
            a.stopEvent(b)
        }, "shift+space:keydown": function (b) {
            a.scrollTo(document.body, {top: -(a.scrollPos().top - (a.winSize().height - 70)), step: 5});
            a.stopEvent(b)
        }, "esc:keydown": function () {
            document.activeElement && document.activeElement.blur()
        }, ".:keyup": function () {
            if (!f()) {
                document.body.scrollIntoView();
                var b = a.E("home_new_feed_tip");
                b && a.core.evt.fireEvent(b, "click");
                document.activeElement && document.activeElement.blur()
            }
        }, "/:keydown": function (b) {
            if (a.fixEvent(b).shiftKey !== !0) {
                var c = a.sizzle(".WB_global_nav input[node-type=searchInput]")[0];
                c && setTimeout(function () {
                    c.focus()
                })
            }
        }, "shift+/:keyup": function () {
            d || (d = a.ui.dialog(e));
            d.getState() ? d.hide() : d.show()
        }};
        return function () {
            a.foreach(h, function (b, c) {
                var c = c.split(":");
                a.hotKey.add(document.documentElement, [c[0]], b, {type: c[1], disableInInput: a.arrIndexOf(c[0], g) === -1})
            });
            a.addEvent(document, "mousedown", i);
            return{destroy: function () {
                a.foreach(h, function (b, c) {
                    a.hotKey.remove(document.documentElement, [c], b, {type: c[1], disableInInput: a.arrIndexOf(c[0], g) === -1})
                });
                a.removeEvent(document, "mousedown", i)
            }}
        }
    });
    STK.register("lib.cite.checkUser", function (a) {
        var b = a.lib.kit.extra.language, c = !1;
        return function () {
            function e() {
                try {
                    var b = decodeURIComponent(document.cookie), c = b.match(/SUP=[^;]+/i), d = c[0].match(/(uid)\=[^&|;]+/g).join("&");
                    return a.queryToJson(decodeURIComponent(d)).uid || $CONFIG.uid
                } catch (e) {
                    return $CONFIG.uid
                }
            }

            function d() {
                a.ui.alert(b("#L{由于刚刚的操作，您的登录帐号已发生变化，请注意使用！}"), {icon: "warnB"}).ok(b("#L{我知道了}")).on("hide", function () {
                    window.location = "http://weibo.com"
                })
            }

            if (!c) {
                var f = e(), g = setInterval(function () {
                    e() != f && (d(), clearInterval(g))
                }, 1500);
                c = !0;
                var h = {};
                h.destroy = function () {
                    clearInterval(g)
                };
                return h
            }
        }
    });
    STK.register("pl.base.source.widgetsource.publish", function (a) {
        function d(b) {
            var g = function (b) {
                var g = b.data, h = b.el, i = {title: g.title ? decodeURIComponent(g.title) : c("#L{分享}"), content: g.content ? decodeURIComponent(g.content) : "", extraUrl: g.extraUrl ? decodeURIComponent(g.extraUrl) : "", pid: g.pid, extraSend: g};
                if (d) {
                    try {
                        d && d.destroy && d.destroy()
                    } catch (j) {
                    }
                    d = null
                }
                var k = {};
                for (var l in g)l != "module" && l != "title" && l != "content" && l != "spr" && (k[l] = g[l]);
                e.getTrans("getpublish", {onSuccess: function (b) {
                    i.html = b.data.html;
                    i.transName = "pagepublish";
                    d = a.lib.publisher.publisherDialog(i);
                    a.custEvent.add(d, "publishShare", function () {
                        var b = a.sizzle('[node-type="shareCount"]', h)[0];
                        if (b) {
                            var d = a.trim(b.innerHTML).match(/^.*\((\d+)\)$/);
                            d = d ? parseInt(d[1]) : 0;
                            b.innerHTML = c("#L{分享}") + "&nbsp;&nbsp;(" + ++d + ")"
                        }
                    });
                    f(h, "widgetPublish", d)
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }, onFail: function () {
                }}).request(k)
            };
            b.add("widget_publish", "click", g);
            var h = {};
            h.destroy = function () {
                b.remove("widget_publish", "click", g);
                d && d.destroy()
            };
            return h
        }

        var b = window.$CONFIG || {}, c = a.lib.kit.extra.language, d, e = a.conf.trans.publisher, f = a.namespace().data;
        d.init = function (b) {
            if (d) {
                try {
                    d && d.destroy && d.destroy()
                } catch (c) {
                }
                d = null
            }
            return d = a.lib.publisher.publisherDialog(b)
        };
        return d
    });
    STK.register("conf.trans.forward", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("toMicroblog", {url: "/aj/v6/mblog/forward", method: "post", withDomain: !0});
        c("toMicroblogv5", {url: "/aj/v6/mblog/forward", method: "post"});
        c("setDefault", {url: "/aj/mblog/repost/setdefault", method: "post"});
        c("simpleForwardLinks", {url: "/aj/v6/mblog/repost/unexpanded", method: "get"});
        c("detailForwardLinks", {url: "/aj/v6/mblog/repost/small", method: "get"});
        c("toMicrogroup", {url: "/aj/weiqun/forward", method: "post"});
        c("microgroupList", {url: "/aj/weiqun/mylist", method: "get"});
        c("importMiyou", {url: "/aj/f/closefriendsrecom", method: "get"});
        c("toMiyouCircle", {url: "/aj/v6/mblog/forwardmiyou", method: "post"});
        c("toMiyouCirclev5", {url: "/aj/v6/mblog/forwardmiyou", method: "post"});
        c("create", {url: "/aj/message/add", method: "post"});
        c("toPriv_delete", {url: "/aj/message/del", method: "post"});
        c("toPriv_getMsg", {url: "/aj/message/getmessagedetail", method: "get"});
        return b
    });
    STK.register("lib.forward.source.API", function (a) {
        var b = {checkAtNum: function (a) {
            var b = a.match(/@[a-zA-Z0-9\u4e00-\u9fa5_]{0,20}/g), c = a.match(/\/\/@[a-zA-Z0-9\u4e00-\u9fa5_]{0,20}/g);
            b = b ? b.length : 0;
            c = c ? c.length : 0;
            return b - c
        }, preventDefault: function (b) {
            a.core.evt.preventDefault(b);
            return!1
        }};
        return b
    });
    STK.register("lib.forward.plugin.report", function (a) {
        return function (b) {
            window.open("http://weibo.com/complaint/complaint.php?url=" + a.lib.kit.extra.parseURL().url);
            a.core.evt.preventDefault(b.evt);
            return!1
        }
    });
    STK.register("lib.kit.extra.toFeedText", function (a) {
        var b = function (a) {
            return/^http\:\/\/(t\.cn|sinaurl\.cn)/.test(a)
        };
        return function (c) {
            if (typeof c != "string")throw"[lib.kit.extra.toFeedText]:need string as first parameter";
            var d = a.core.str.parseHTML(c), e = [], f = !1;
            for (var g = 0, h = d.length; g < h; g += 1)if (!d[g][2])f === !1 && e.push(d[g][0]); else if (d[g][2].toLowerCase() === "img") {
                var i = d[g][3].match(/(?:alt\s*=\s*["|']?([^"|'|\s]+)["|']?)/), j = d[g][3].match(/(?:brand_face\s*=\s*["|']?([^"|'|\s]+)["|']?)/);
                j ? e.push(j[1]) : i && e.push(i[1])
            } else if (d[g][2].toLowerCase() === "a")if (d[g][1] === "/")f = !1; else {
                var k;
                if ((k = d[g][3].match(/(?:ignore\s*=\s*["|']?([^"|'|\s]+)["|']?)/)) && k[1])f = !0; else if ((k = d[g][3].match(/(?:alt\s*=\s*["|']?([^"|'|\s]+)["|']?)/)) && k[1]) {
                    e.push(" " + k[1] + " ");
                    f = !0
                } else if ((k = d[g][3].match(/(?:href\s*=\s*["|']?([^"|'|\s]+)["|']?)/)) && k[1] && b(k[1])) {
                    e.push(" " + k[1] + " ");
                    f = !0
                } else if ((k = d[g][3].match(/(?:shorthref\s*=\s*["|']?([^"|'|\s]+)["|']?)/)) && k[1]) {
                    e.push(" http://t.cn/" + k[1] + " ");
                    f = !0
                }
            }
            return e.join("")
        }
    });
    STK.register("conf.trans.feed.attitude", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("feedSmall", {url: "/aj/attitude/small", method: "get"});
        c("add", {url: "/aj/attitude/add", method: "post"});
        c("big", {url: "/aj/attitude/big", method: "get"});
        c("in", {url: "/aj/attitude/in", method: "get"});
        c("del", {url: "/aj/attitude/destroy", method: "get"});
        c("miniadd", {url: "/aj/v6/like/add", method: "post"});
        c("minismall", {url: "/aj/v6/like/small", method: "get"});
        c("likein", {url: "/aj/like/in", method: "get"});
        c("likebig", {url: "/aj/like/big", method: "get"});
        c("minidel", {url: "/aj/like/del", method: "post"});
        c("objLike", {url: "/aj/v6/like/objectlike", method: "post"});
        c("photosmall", {url: "/aj/v6/like/object/photosmall", method: "get"});
        c("cmtLike", {url: "/aj/v6/like/object/small", method: "get"});
        c("cmtLikeMore", {url: "/aj/like/object/big", method: "get"});
        c("likeStatus", {url: "/aj/like/status", method: "get"});
        return b
    });
    STK.register("lib.forward.source.like", function (a) {
        return function (b) {
            var c = a.conf.trans.feed.attitude, d = !1, e, f = {}, g = [], h = a.delegatedEvent(b), i, j = !0, k, l = null, m, n, o = 600, p = 350, q = '<div class="W_layer W_layer_pop" style="display:none;" node-type="outer"><div class="content"><div class="layer_emotion" node-type="inner"><ul class="emotion_list clearfix" node-type="faceList"></ul></div><div class="W_layer_arrow"><span node-type="arrow" class="W_arrow_bor W_arrow_bor_t" style="right:20px;"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div>';
            e = a.lib.kit.dom.parseDOM(a.builder(q).list);
            document.body.appendChild(e.outer);
            m = a.delegatedEvent(e.outer);
            var r, s, t = {go: function (b) {
                s = b.el;
                r = a.sizzle('[node-type="forward_like_count"]', s)[0];
                r = r && r.innerHTML || 0;
                d = !0;
                if (a.core.dom.contains(b.el, b.evt.relatedTarget) || e && e.outer.style.display != "none" && b.data.mid == k && b.data.object_id == l)v(); else {
                    t.stop(b, !0);
                    n = setTimeout(function () {
                        t.trans(b)
                    }, o)
                }
            }, fill: function (b) {
                if (!!j) {
                    j = !1;
                    var d = a.core.json.merge(b.data, {location: $CONFIG.location}), f = "miniadd";
                    c.getTrans(f, {onSuccess: function (c) {
                        r = a.sizzle('[node-type="forward_like_count"]', s)[0];
                        r = r && r.innerHTML || 0;
                        var d = a.sizzle("em", b.el)[0], f = c.data.is_del ? !0 : !1, g = "W_icon icon_praised_b" + (f ? "" : "c");
                        f ? r > 0 && r-- : r++;
                        r = r <= 0 ? "" : r;
                        b.el.innerHTML = '<em class="' + g + '"></em><em node-type="forward_like_count">' + r + "</em>";
                        if (!f && c.data.html && e) {
                            i && (i.style.display = "none");
                            b.el.title = a.lib.kit.extra.language("#L{取消赞}");
                            a.insertHTML(e.faceList, c.data.html, "afterbegin")
                        } else {
                            b.el.title = a.lib.kit.extra.language("#L{赞}");
                            a.removeNode(a.sizzle('[uid="' + $CONFIG.uid + '"]', e.faceList)[0]);
                            i && (i.style.display = "");
                            a.sizzle("[uid]", e.faceList).length <= 0 && t.stop(b, !0)
                        }
                        var h = a.sizzle('[node-type="faceMore"]', e.faceList)[0];
                        r > 4 ? h && h.style.display == "none" && (h.style.display = "") : h && h.style.display != "none" && (h.style.display = "none");
                        if (e.outer.style.display != "none") {
                            var k = a.sizzle("[uid]", e.faceList);
                            k = function (a) {
                                var b = [], c;
                                while (c = a.shift())c.style.display != "none" && b.push(c);
                                return b
                            }(k);
                            var l = a.sizzle("[node-type=faceMore]", e.faceList)[0].style.display === "none" ? 0 : 1;
                            e.outer.style.width = k.length * 40 + l * 40 + 13 + "px";
                            a.ui.card(e.outer).showByTarget(b.el)
                        }
                        j = !0
                    }, onFail: function (b) {
                        a.lib.dialog.ioError(b.code, b);
                        j = !0
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b);
                        j = !0
                    }}).request(d)
                }
            }, trans: function (b) {
                e && e.outer && (e.outer.style.display = "none");
                var d = "minismall", f = "faceList", g = {mid: b.data.mid, location: $CONFIG.location};
                e && (e.outer.show = !0);
                c.getTrans(d, {onSuccess: function (c) {
                    v();
                    var d = c.data.total_number || c.data.like_counts || 0;
                    if (d != "0") {
                        r = d;
                        k = b.data.mid;
                        l = b.data.object_id;
                        var g = a.sizzle('[node-type="forward_like_count"]', b.el)[0];
                        g && (g.innerHTML = d ? d : "");
                        var h = a.lib.kit.dom.parseDOM(a.builder(c.data.html).list);
                        e.faceList.innerHTML = h[f].innerHTML;
                        var j = a.sizzle("[uid]", e.faceList), m = a.sizzle("[node-type=faceMore]", e.faceList)[0].style.display === "none" ? 0 : 1;
                        a.sizzle('[uid="' + $CONFIG.uid + '"]', e.faceList)[0] || (i = j[3]);
                        e.mid = b.data.mid;
                        document.body.appendChild(e.outer);
                        if (e && e.outer.show === !0) {
                            document.body.appendChild(e.outer);
                            e.outer.style.display = "";
                            e.outer.style.width = j.length * 40 + m * 40 + 13 + "px";
                            a.ui.card(e.outer).showByTarget(b.el)
                        }
                    }
                }, onFail: function () {
                }, onError: function () {
                }}).request(g)
            }, stop: function (a, b) {
                d = !1;
                if (b)u(); else {
                    v();
                    g.push(setTimeout(u, p))
                }
            }, cancelLike: function (b) {
                a.preventDefault();
                r--;
                a.removeNode(a.core.dom.neighbor(b.el).parent("li").getCurrent());
                var d = a.sizzle('[action-type="like_del"]', e.faceList);
                d[0] && a.removeNode(a.core.dom.neighbor(d[0]).parent("li").getCurrent());
                s.title = a.lib.kit.extra.language("#L{赞}");
                s.innerHTML = '<em class="W_icon icon_praised_b"></em><em node-type="forward_like_count">' + r + "</em>";
                i && (i.style.display = "");
                a.sizzle("[uid]", e.faceList).length <= 0 && (e.outer.style.display = "none");
                var f = "minidel";
                c.getTrans(f, {onSuccess: a.core.func.empty, onError: a.core.func.empty}).request(b.data)
            }}, u = function () {
                clearTimeout(n);
                v();
                e && (e.outer.style.display = "none");
                e && (e.outer.show = !1)
            }, v = function () {
                while (g.length)clearTimeout(g.pop())
            }, w = function () {
                h.add("forward_like", "mouseover", t.go);
                h.add("forward_like", "click", t.fill);
                h.add("forward_like", "mouseout", t.stop);
                m.add("like_del", "click", t.cancelLike)
            }, x = function () {
                w();
                a.addEvent(e.outer, "mouseover", function () {
                    v()
                });
                a.addEvent(e.outer, "mouseout", function () {
                    t.stop()
                })
            };
            x();
            f.destroy = function () {
                h.destroy();
                m.destroy();
                a.removeEvent(e.outer, "mouseover");
                a.removeEvent(e.outer, "mouseout");
                a.removeNode(e.outer)
            };
            return f
        }
    });
    STK.register("lib.forward.source.forwardLink", function (a) {
        var b = a.lib.kit.extra.language, c = a.conf.trans.forward, d = a.lib.kit.dom.parseDOM, e = a.lib.kit.extra.actionData, f, g = {on: b('#L{收起}<span class="W_arrow" title="#L{收起}" href="javascript:;" onclick="return false;" action-type="show" action-data="id=2"><em>◆</em></span>'), off: b('#L{展开}<span class="W_arrow" title="#L{展开}" href="javascript:;" onclick="return false;" action-type="show" action-data="id=1"><em>◆</em></span>')}, h;
        return function (b, i) {
            h = b;
            var j = i.flNode, k = i.mid, l = i.data, m = {}, n, o, p, q = !1, r, s, t = a.parseParam({forward_link_status: "on", inDialog: !0, mid: ""}, l);
            if (typeof t.mid != "string" && typeof t.mid != "number")throw new Error("forward.forwardLlink: need string (or number) as mid");
            var u = function (b) {
                r = r || d(a.builder(f).list);
                if (!!r.forward_link_more) {
                    b.el.innerHTML = g[o];
                    if (o == "on") {
                        r.forward_link_more.style.display = "";
                        a.addClassName(b.el, "W_arrow_turn");
                        e(b.el).set("id", "2");
                        r.check_more_link && (r.check_more_link.style.display = "")
                    } else if (o == "off") {
                        r.forward_link_more.style.display = "none";
                        a.removeClassName(b.el, "W_arrow_turn");
                        e(b.el).set("id", "1");
                        r.check_more_link && (r.check_more_link.style.display = "none")
                    }
                }
            }, v = function () {
                q = !0;
                c.request("detailForwardLinks", {onSuccess: function (b, c) {
                    if (!b.data.num)a.removeNode(f.parentNode); else {
                        o = o == "on" ? "off" : "on";
                        f.innerHTML = b.data.html || "";
                        a.custEvent.fire(h, "resetComment", [b]);
                        a.custEvent.fire(h, "updateNum", [b.data]);
                        w(f)
                    }
                }, onError: function () {
                    f.innerHTML = ""
                }, onFail: function () {
                    f.innerHTML = ""
                }}, {mid: k, d_expanded: p, expanded_status: q ? o === "on" ? 1 : 2 : ""})
            }, w = function (b) {
                var c = a.sizzle("div.list_ul", b)[0];
                if (!!c) {
                    c.style.marginTop = -a.core.dom.getSize(c).height + "px";
                    setTimeout(function () {
                        c.style.webkitTransition = "margin-top 0.4s";
                        c.style.mozTransition = "margin-top 0.4s";
                        c.style.msTransition = "margin-top 0.4s";
                        c.style.transition = "margin-top 0.4s";
                        c.style.marginTop = "0px"
                    }, 0)
                }
            }, x = function (b) {
                var c = a.core.dom.dir.parent(b.el, {expr: '[node-type="forward_link_item"]'})[0], d = b.data, e, f, g, i;
                if (c) {
                    e = a.sizzle('[node-type="forward_again"]', c)[0];
                    i = d.name;
                    if (e) {
                        var j = "//@" + i + ": " + a.trim(e.innerHTML.replace(/[\r|\n|\t]/g, ""));
                        a.custEvent.fire(h, "forwardAgain", [d, j])
                    }
                }
            }, y = function () {
                f = a.C("div");
                f.className = "list_box";
                s = a.delegatedEvent(f);
                j.innerHTML = "";
                j.appendChild(f);
                s.add("show", "click", function (a) {
                    o = a.data.id * 1 == 1 ? "on" : "off";
                    switch (t.forward_link_status) {
                        case"off":
                            v(a);
                            break;
                        case"on":
                        default:
                            u(a)
                    }
                });
                s.add("forward_again", "click", x);
                p = a.core.util.storage.get("forward_link_status");
                if (p == "null" || !p)p = t.forward_link_status;
                o = p;
                v()
            };
            a.custEvent.define(m, ["switch"]);
            a.custEvent.add(m, "switch", function (a, b) {
                if (b.node) {
                    var c = f.innerHTML;
                    b.node.innerHTML = "";
                    b.node.appendChild(f);
                    f.innerHTML = c
                }
                b.base && (h = b.base)
            });
            m.destroy = function () {
                s.destroy();
                a.custEvent.undefine(m);
                a.removeNode(f);
                f = null
            };
            if (f && t.forward_link_status == n) {
                n = t.forward_link_status;
                j.innerHTML = "";
                j.appendChild(f)
            } else y();
            return m
        }
    });
    STK.register("lib.forward.source.toMicroblog", function (a) {
        var b = a.lib.kit.extra.language, c = a.lib.kit.extra.toFeedText, d = a.lib.kit.extra.textareaUtils, e = a.lib.kit.extra.shine, f = a.lib.kit.dom.parseDOM, g = null, h, i = a.lib.dialog.validateCode(), j = b('<#et userlist data><div node-type="toMicroblog_client"><#if (data.isDialog == true)><div class="WB_text S_bg1" node-type="content"><#if (data.showArrow == true)><a href="javascript:void(0);" action-type="origin_all" class="W_ficon ficon_arrow_down_lite S_ficon">g</a></#if><span class="con S_txt2">${data.content}</span></div></#if><div class="WB_feed_repeat forward_rpt1"><div class="WB_repeat"><div class="WB_feed_publish clearfix"><div class="WB_publish"><div class="p_input p_textarea"><textarea class="W_input" name="" rows="" cols="" title="#L{转发微博}#L{内容}" node-type="textEl">${data.reason}</textarea><span class="tips S_txt2" node-type="num"></span><div class="send_succpic" node-type="success_tip" style="display:none"><span class="W_icon icon_succB"></span><span class="txt">#L{发布成功}</span></div></div><div class="p_opt clearfix"><div class="btn W_fr"><div class="limits" style="position:relative;" layout-shell="true"><a action-data="rank=0" title="" class="S_txt1" href="javascript:void(0)" action-type="showPublishTo" node-type="showPublishTo" title=#L{公开-你发表的微博可以被大家公开查看哦}><span class="W_autocut" node-type="publishTotext">#L{公开}</span> <i class="W_ficon ficon_arrow_down S_ficon" node-type="publish_to_arrow">c</i></a></div><a href="javascript:void(0)" node-type="submit" class="W_btn_a">#L{转发}</a></div><div class="opt clearfix" test=1 node-type="widget"><span class="ico"><a href="javascript:void(0)" title="#L{表情}" node-type="smileyBtn"><i class="W_ficon ficon_face">o</i></a></span><ul class="ipt" node-type="cmtopts"><#if (data.forwardNick)><li node-type="forwardLi" class="W_autocut"><label for="forward_comment_opt_forwardLi" class="W_label"><input node-type="forwardInput" name="" type="checkbox" value="" class="W_checkbox" id="forward_comment_opt_forwardLi"><span>#L{同时评论给} ${data.forwardNick}</span></label></li></#if><#if (data.originNick)><li node-type="originLi" class="W_autocut"><label for="forward_comment_opt_originLi" class="W_label"><input node-type="originInput" name="" type="checkbox" value="" class="W_checkbox" id="forward_comment_opt_originLi"><span><#if (data.forwardNick)> #L{同时评论给原文作者} <#else>#L{同时评论给}</#if> ${data.originNick}</span></label></li></#if></ul></div></div></div></div><#if (data.isDialog == true)><div node-type="forward_link" class="repeat_list S_line1"></div></#if></div></div></#et>'), k = {notice: "#L{请输入转发理由}", defUpdate: "#L{转发微博}", netError: "#L{系统繁忙}", success: "#L{转发成功}!", off: "#L{关闭}", on: "#L{开启}"}, l = {limitNum: 140, tipText: b(k.notice), count: "disable"}, m = function (a, c) {
            c == "normal" ? a.innerHTML = b("#L{转发}") : a.innerHTML = b('<i class="W_loading"></i>#L{转发中...}')
        };
        return function (n, o, p) {
            if (n == null || o == null)throw new Error("[common.forward.toMicroblog]Required parameter client is missing");
            var q, r = p.data, s = 56, t = !1, u = r.originNick ? "@" + r.originNick : "", v = c(r.origin.replace(/<[^>]+>/gi, ""));
            v = a.trim(v);
            r.content = v + "";
            if (a.bLength(a.core.str.decodeHTML(c(v + u))) > s) {
                r.content = a.leftB(v, s - a.bLength(u)) + "...";
                t = !0
            } else r.content = r.origin;
            u ? u = '<a class="S_txt1" href="/' + (r.domain || r.rootuid || r.uid) + '" target="_blank">' + u + "</a>:" : u = "";
            r.content = u + r.content;
            var w = r.reason || "", x = r.forwardNick ? "//@" + r.forwardNick + ":" + " " : "", y, z, A, B, C, D, E, F, G, H, I, J, K, L, M = !1, N = !1, O, P, Q = a.lib.forward.source.API, R, S, T = {};
            T.client = n;
            T.opts = p.data || {};
            T.isInit = !1;
            A = a.parseParam({appkey: "", styleId: "1", mark: "", module: "", page_module_id: "", refer_sort: "", pic_src: "", extra: "", dissDataFromFeed: {}}, T.opts);
            a.custEvent.define(T, ["forward", "hide", "center", "count", "updateNum", "forwardAgain", "resetComment"]);
            var U = function () {
                if (B)C === "error" && a.lib.kit.extra.shine(z.textEl); else {
                    var c = a.trim(y.API.getWords() || "");
                    c === b(k.notice) && (c = "");
                    B = !0;
                    C = "loading";
                    z.submit.className = "W_btn_a W_btn_a_disable";
                    m(z.submit, "loading");
                    var d = {};
                    d.pic_src = A.pic_src;
                    d.appkey = A.appkey;
                    d.mid = o;
                    d.style_type = A.styleId;
                    d.mark = A.mark;
                    d.reason = c || b(k.defUpdate);
                    d.location = $CONFIG.location;
                    d.pdetail = $CONFIG.page_id;
                    d.module = A.module;
                    d.page_module_id = A.page_module_id;
                    d.refer_sort = A.refer_sort;
                    z.originInput && z.originInput.checked && (d.is_comment_base = "1");
                    if (z.forwardInput && z.forwardInput.checked) {
                        d.is_comment = "1";
                        M = !0
                    }
                    !z.forwardInput && d.is_comment_base == "1" && (M = !0);
                    R && R.disable();
                    if (R) {
                        var e = R.rank();
                        d.rank = e.rank;
                        d.rankid = e.rankid
                    }
                    d = a.lib.kit.extra.getDiss(d, z.submit);
                    d = a.core.json.merge(d, A.dissDataFromFeed);
                    p.mark && (d.mark = p.mark);
                    if (r.postdata) {
                        var f = r.postdata.split(";");
                        for (var h = 0; f[h]; h++) {
                            var i = f[h].split(",");
                            i[0] && i[0] && (d[i[0]] = i[1])
                        }
                    }
                    g = d;
                    if (Q.checkAtNum(c) > 5) {
                        a.ui.confirm(b("#L{单条微博里面@ 太多的人，可能被其它用户投诉。如果投诉太多可能会被系统封禁。是否继续转发？}"), {OK: function () {
                            D.request(d)
                        }, cancel: function () {
                            B = !1;
                            C = "";
                            z.submit.className = "W_btn_a btn_noloading";
                            m(z.submit, "normal")
                        }});
                        return
                    }
                    A.extra && (d.ref = A.extra);
                    D.request(d)
                }
            }, V = function (a) {
                if ((a.keyCode === 13 || a.keyCode === 10) && a.ctrlKey) {
                    y.API.blur();
                    U()
                }
            }, W = function () {
                var a = y.API.count(), b = l.limitNum - a, c = b >= 0 ? !0 : !1;
                if (c) {
                    B = !1;
                    C = "";
                    c && (z.num.innerHTML = "<span>" + b + "</span>")
                } else {
                    B = !0;
                    C = "error";
                    z.num.innerHTML = '<span class="S_error">' + b + "</span>"
                }
            }, X = function (b, c) {
                y.API.blur();
                z.success_tip.style.display = "";
                var d = a.sizzle(".W_icon", z.success_tip)[0], e = a.sizzle(".txt", z.success_tip)[0];
                e.style.display = "none";
                a.ui.effect(d, "flipInY", "normal");
                setTimeout(function () {
                    e.style.display = "";
                    a.ui.effect(e, "fadeInRight", "normal")
                }, 50);
                y.API.reset();
                setTimeout(function () {
                    B = !1;
                    C = "";
                    g = null;
                    z.submit.className = "W_btn_a btn_noloading";
                    m(z.submit, "normal");
                    try {
                        b.data.mid = c.mid;
                        b.data.isComment = M;
                        b.data.isToMiniBlog = !0;
                        a.custEvent.fire(T, "forward", [b.data, c, p.inDialog]);
                        a.conf.channel.feed.fire("forward", [b.data, c, p.inDialog])
                    } catch (d) {
                    }
                    a.custEvent.fire(T, "hide");
                    M = !1;
                    R && R.reset();
                    a.ui.effect(z.success_tip, "fadeOut", "fast", function () {
                        z && z.success_tip && (z.success_tip.style.display = "none")
                    })
                }, 1e3)
            }, Y = function (c, d) {
                B = !1;
                C = "";
                z.submit.className = "W_btn_a btn_noloading";
                m(z.submit, "normal");
                c.msg = c.msg || b(k.netError);
                a.lib.dialog.ioError(c.code, c);
                M = !1;
                R && R.enable()
            }, Z = function (b, c) {
                B = !1;
                C = "";
                z.submit.className = "W_btn_a btn_noloading";
                m(z.submit, "normal");
                R && R.enable();
                a.lib.dialog.ioError(b.code, b)
            }, _ = function () {
                H = a.builder(n);
                H = a.lib.kit.dom.parseDOM(H.list).toMicroblog_client;
                y = a.lib.editor.base(H, l);
                z = y.nodeList;
                y.API = y.editor.API;
                a.custEvent.define(y.editor, "close");
                S = a.lib.publisher.widget.face(y.editor);
                R = a.lib.publisher.source.publishTo({editorWrapEl: n, textEl: z.textEl, isforward: !0});
                a.addEvent(z.textEl, "focus", function () {
                    O = setInterval(function () {
                        try {
                            W()
                        } catch (a) {
                        }
                    }, 200)
                });
                a.addEvent(z.textEl, "blur", function () {
                    clearInterval(O)
                });
                y.API.insertText(x + a.trim(a.core.str.decodeHTML(c(w))));
                a.lib.kit.dom.autoHeightTextArea({textArea: z.textEl, maxHeight: 145, inputListener: a.funcEmpty});
                if (L) {
                    q = a.lib.forward.source.like(H);
                    h = a.lib.forward.source.forwardLink(T, {flNode: z.forward_link, mid: o, data: A})
                }
            }, ba = function () {
                a.addEvent(z.submit, "click", U);
                a.lib.kit.extra.keySubmit.on(z.textEl, U);
                a.addEvent(z.smileyBtn, "click", S.show);
                if (L) {
                    K = a.delegatedEvent(H);
                    K.add("origin_all", "click", function (a) {
                        z.content.innerHTML = '<span class="con S_txt2">' + u + r.origin + "</span>"
                    });
                    K.add("report", "click", function (b) {
                        return a.lib.forward.plugin.report(b)
                    });
                    K.add("switch", "click", function (c) {
                        var d = {1: "on", 2: "off"}, e = d[c.data.id];
                        setSwitchStatus(e);
                        a.setStyle(c.el, "left", e == "on" ? "23px" : "0px");
                        c.el.setAttribute("action-data", e == "on" ? "id=2" : "id=1");
                        c.el.setAttribute("title", e == "on" ? b(k.off) : b(k.on))
                    });
                    K.add("show", "click", function (a) {
                        J = a.data.id * 1 == 1 ? "on" : "off";
                        getForwardInfo_more(a)
                    });
                    K.add("forward_again", "click", bh)
                }
            }, bb = function (b, g, h) {
                w = h;
                y.API.reset();
                y.API.insertText(a.trim(a.core.str.decodeHTML(c(w))), 0);
                d.setCursor(z.textEl, 0, 0);
                e(z.textEl);
                A = a.parseParam(A, g);
                o = g.mid;
                r = $merge(r, g);
                g.forwardNick = g.name;
                g.originNick = g.rootname;
                z.cmtopts.innerHTML = a.core.util.easyTemplate(bg, g).toString();
                z = $merge(z, f(a.builder(z.cmtopts).list))
            }, bc = function (a, b) {
                if (z.cmtopts && b.data.permission && b.data.permission.allowComment == 0) {
                    z.cmtopts.style.display = "none";
                    z.cmtopts.innerHTML = ""
                } else if (z.originLi && b.data.permission && b.data.permission.allowRootComment == 0) {
                    z.originLi.style.display = "none";
                    z.originLi.innerHTML = ""
                }
            }, bd = function () {
                a.custEvent.add(T, "forwardAgain", bb);
                a.custEvent.add(T, "resetComment", bc)
            }, be = function (a, b) {
                J = J == "on" ? "off" : "on"
            }, bf = function (b) {
                a.lib.dialog.ioError(b.code, b)
            }, bg = b('<#et cmt data><#if (data.forwardNick)><li node-type="forwardLi" class="W_autocut"><label class="W_label" for="forward_comment_opt_forwardLi"><input id="forward_comment_opt_forwardLi" type="checkbox" node-type="forwardInput" class="W_checkbox"  /><span>#L{同时评论给} ${data.forwardNick}</span></label></li></#if><#if (data.originNick)><li node-type="originLi" class="W_autocut"><label class="W_label" for="forward_comment_opt_originLi"><input id="forward_comment_opt_originLi" type="checkbox" node-type="originInput" class="W_checkbox" /><span><#if (data.forwardNick)>#L{同时评论给原文作者} <#else>#L{同时评论给} </#if>${data.originNick}</span></label></li></#if>'), bh = function (b) {
                var d = a.core.dom.dir.parent(b.el, {expr: "dl"})[0], e = b.data, f, g, h, i;
                if (d) {
                    f = a.sizzle('em[node-type="forward_again"]', d)[0];
                    i = e.name;
                    if (f) {
                        w = "//@" + i + ": " + a.trim(f.innerHTML.replace(/[\r|\n|\t]/g, ""));
                        y.API.reset();
                        y.API.insertText(a.trim(a.core.str.decodeHTML(c(w))), 0);
                        a.lib.kit.extra.textareaUtils.setCursor(z.textEl, 0, 0);
                        a.lib.kit.extra.shine(z.textEl);
                        A = a.parseParam(A, e);
                        o = e.mid;
                        e.forwardNick = e.name;
                        e.originNick = e.rootname;
                        r = a.lib.kit.extra.merge(r, b.data);
                        z.cmtopts.innerHTML = a.core.util.easyTemplate(bg, e).toString();
                        z = a.lib.kit.extra.merge(z, a.lib.kit.dom.parseDOM(a.builder(z.cmtopts).list))
                    }
                }
            }, bi = function () {
                D = a.conf.trans.forward.getTrans("toMicroblog", {onComplete: function (a, b) {
                    var c = {onSuccess: X, onError: Y, requestAjax: D, param: g, onRelease: function () {
                        B = !1;
                        C = "";
                        z.submit.className = "W_btn_a btn_noloading";
                        m(z.submit, "normal");
                        M = !1;
                        R && R.enable()
                    }};
                    i.validateIntercept(a, b, c)
                }, onFail: Z, onTimeout: Y});
                E = function (b) {
                    a.conf.trans.forward.request("setDefault", {onSuccess: be, onError: bf, onFail: bf}, b)
                }
            }, bj = function () {
            }, bk = function () {
                bi();
                _();
                ba();
                bj();
                bd()
            }, bl = function (b) {
                if (T.isInit == !1) {
                    p.data.isDialog = b;
                    L = b;
                    p.data.showArrow = t;
                    a.addHTML(n, a.core.util.easyTemplate(j, p.data));
                    y || bk();
                    T.isInit = !0
                } else {
                    H && a.setStyle(H, "display", "");
                    h && a.custEvent.fire(h, "switch", [
                        {node: z.forward_link, base: T}
                    ])
                }
                y.API.focus(0)
            }, bm = function () {
                a.lib.kit.extra.shine(y.nodeList.textEl)
            }, bn = function () {
                y.API.blur();
                H != null && a.setStyle(H, "display", "none")
            }, bo = function () {
                a.removeEvent(z.submit, "click", U);
                a.lib.kit.extra.keySubmit.off(z.textEl, U);
                a.custEvent.undefine(T);
                K && K.remove("origin_all", "click");
                K && K.remove("report", "click");
                K && K.remove("switch", "click");
                K && K.remove("retry", "click");
                K && K.remove("show", "click");
                K.destroy();
                K = null;
                h && h.destroy && h.destroy();
                i && i.destroy && i.destroy();
                R && R.destroy && R.destroy();
                q && q.destroy && q.destroy();
                y.closeWidget();
                O && clearInterval(O);
                y = null;
                z = null;
                D = null;
                H = null;
                for (var b in T)delete T[b];
                T = null
            };
            T.show = bl;
            T.hide = bn;
            T.shine = bm;
            T.destroy = bo;
            return T
        }
    });
    STK.register("lib.forward.source.toFriends", function (a) {
        var b = a.lib.kit.extra.language, c = a.lib.editor.base, d = a.lib.publisher.widget.face, e = a.lib.kit.dom.autoHeightTextArea, f = a.lib.kit.extra.shine, g = a.lib.kit.extra.merge, h = a.lib.kit.extra.textareaUtils, i = a.conf.channel.feed, j = a.lib.kit.dom.parseDOM, k = a.conf.trans.forward, l = a.lib.forward.source.API, m = a.lib.kit.extra.report, n = a.lib.kit.extra.toFeedText, o = a.lib.kit.extra.getDiss, p = a.lib.dialog.ioError, q = a.lib.forward.source.forwardLink, r = null, s = a.lib.dialog.validateCode(), t = b('<#et userlist data><div node-type="toFriends_client"><div class="W_tips tips_warn clearfix"><p class="icon"><i class="W_icon icon_warnS"></i></p><p class="txt">将微博定向转发到好友圈，只有你的好友可见这条微博。</p></div><div class="WB_text S_bg1" node-type="content"><#if (data.showArrow == true)><a href="javascript:void(0);" action-type="origin_all" class="W_ficon ficon_arrow_down_lite S_ficon">g</a></#if><span class="con S_txt2">${data.content}</span></div><div class="WB_feed_repeat forward_rpt1"><div class="WB_repeat"><div class="WB_feed_publish clearfix"><div class="WB_publish"><div class="p_input p_textarea"><textarea class="W_input" name="" rows="" cols="" title="#L{转发微博}#L{内容}" node-type="textEl">${data.reason}</textarea><span class="tips S_txt2" node-type="num"></span><div class="send_succpic" node-type="success_tip" style="display:none"><span class="W_icon icon_succB"></span><span class="txt">#L{发布成功}</span></div></div><div class="p_opt clearfix"><div class="btn W_fr"><a href="javascript:void(0)" node-type="submit" class="W_btn_a">转发</a><!--<a href="" class="W_btn_a W_btn_a_disable"><i class="W_loading"></i>转发中</a>--></div><div class="opt clearfix" test=1 node-type="widget"><span class="ico"><a href="javascript:void(0)" title="#L{表情}" node-type="smileyBtn"><i class="W_ficon ficon_face">o</i></a></span><ul class="ipt" node-type="cmtopts"><#if (data.forwardNick)><li node-type="forwardLi" class="W_autocut"><label for="forward_comment_opt_forwardLi_f" class="W_label"><input node-type="forwardInput" name="" type="checkbox" value="" class="W_checkbox" id="forward_comment_opt_forwardLi_f"><span>#L{同时评论给} ${data.forwardNick}</span></label></li></#if><#if (data.originNick)><li node-type="originLi" class="W_autocut"><label for="forward_comment_opt_originLi_f" class="W_label"><input node-type="originInput" name="" type="checkbox" value="" class="W_checkbox" id="forward_comment_opt_originLi_f"><span><#if (data.forwardNick)>#L{同时评论给原文作者} <#else>#L{同时评论给} </#if>${data.originNick}</span></label></li></#if></ul></div></div></div></div><div node-type="forward_link" class="repeat_list S_line1"></div></div></div></div>'), u = b('<#et cmt data><#if (data.forwardNick)><li node-type="forwardLi" class="W_autocut"><label class="W_label" for="forward_comment_opt_forwardLi_f"><input id="forward_comment_opt_forwardLi_f" type="checkbox" node-type="forwardInput" class="W_checkbox"  /><span>#L{同时评论给} ${data.forwardNick}</span></label></li></#if><#if (data.originNick)><li node-type="originLi" class="W_autocut"><label class="W_label" for="forward_comment_opt_originLi_f"><input id="forward_comment_opt_originLi_f" type="checkbox" node-type="originInput" class="W_checkbox" /><span><#if (data.forwardNick)>#L{同时评论给原文作者} <#else>#L{同时评论给} </#if>${data.originNick}</span></label></li></#if>'), v = {notice: "#L{请输入转发理由}", defUpdate: "#L{转发微博}", netError: "#L{系统繁忙}", success: "#L{转发成功}!", off: "#L{关闭}", on: "#L{开启}"};
        return function (o, w, x) {
            (o == null || w == null) && a.log("[common.forward.toMiyouCircle]Required parameter client is missing");
            var y = a.parseParam({limitNum: 140, tipText: b(v.notice), count: "disable"}, x || {}), z, A, B, C, D = !0, E, F = x.data, G = 56, H = !1, I = F.originNick ? "@" + F.originNick : "", J = n(F.origin.replace(/<[^>]+>/gi, ""));
            F.content = a.trim(J) + "";
            if (a.bLength(a.core.str.decodeHTML(n(J + I))) > G) {
                F.content = a.leftB(J, G - a.bLength(I)) + "...";
                H = !0
            } else F.content = F.origin;
            I ? I = '<a class="S_func1" href="/' + (F.domain || F.rootuid || F.uid) + '" target="_blank">' + I + "</a>:" : I = "";
            F.content = I + F.content;
            var K = a.trim(F.reason.replace(/[\r|\n|\t]/g, "")) || "", L = F.forwardNick ? "//@" + F.forwardNick + ":" + " " : "", M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ba = !1, bb = !1, bc, bd, be = l, bf, bg = {};
            bg.client = o;
            bg.opts = x.data || {};
            bg.isInit = !1;
            O = a.parseParam({appkey: "", styleId: "1", mark: "", module: "", page_module_id: "", refer_sort: "", forward_link_status: "on", dissDataFromFeed: {}}, bg.opts);
            a.custEvent.define(bg, ["forward", "hide", "center", "count", "forwardAgain", "resetComment", "updateNum"]);
            var bh = {changeBtnText: function (c, d) {
                if (d == "normal") {
                    a.removeClassName(c, "W_btn_a_disable");
                    c.innerHTML = b("#L{转发}")
                } else {
                    a.addClassName(c, "W_btn_a_disable");
                    c.innerHTML = b('<i class="W_loading"></i>#L{转发中...}')
                }
            }, canForward: function () {
                if (!!M && !!M.API) {
                    var a = M.API.count(), b = y.limitNum - a, c = b >= 0 ? !0 : !1;
                    if (c) {
                        P = !1;
                        Q = "";
                        c && (N.num.innerHTML = "<span>" + b + "</span>")
                    } else {
                        P = !0;
                        Q = "error";
                        N.num.innerHTML = '<span class="S_error">' + b + "</span>"
                    }
                }
            }}, bi = {updateForward: function (c) {
                if (P)Q === "error" && f(N.textEl); else {
                    var d = a.trim(M.API.getWords() || "");
                    d === b(v.notice) && (d = "");
                    P = !0;
                    Q = "loading";
                    a.addClassName(N.submit, "W_btn_a_disable");
                    bh.changeBtnText(N.submit, "loading");
                    var e = {};
                    e.appkey = O.appkey;
                    e.mid = w;
                    e.style_type = O.styleId;
                    e.mark = O.mark;
                    e.reason = d || b(v.defUpdate);
                    N.originInput && N.originInput.checked && (e.is_comment_base = "1");
                    if (N.forwardInput && N.forwardInput.checked) {
                        e.is_comment = "1";
                        ba = !0
                    }
                    e.rank = 2;
                    e.rankid = "";
                    e.group_source = "group_all";
                    e.module = O.module;
                    e.page_module_id = O.page_module_id;
                    e.refer_sort = O.refer_sort;
                    e = a.core.json.merge(e, O.dissDataFromFeed);
                    r = e;
                    if (be.checkAtNum(d) > 5) {
                        a.ui.confirm(b("#L{单条微博里面@ 太多的人，可能被其它用户投诉。如果投诉太多可能会被系统封禁。是否继续转发？}"), {OK: function () {
                            R.request(e)
                        }, cancel: function () {
                            P = !1;
                            Q = "";
                            a.removeClassName(N.submit, "W_btn_a_disable");
                            bh.changeBtnText(N.submit, "normal")
                        }});
                        return
                    }
                    R.request(e)
                }
            }, putAside: function () {
                N.putAside.style.display = "none";
                N.submit.innerHTML = b("#L{转发}");
                N.submit.removeAttribute("suda-data")
            }, ctrlUpdateForward: function (a) {
                if ((a.keyCode === 13 || a.keyCode === 10) && a.ctrlKey) {
                    M.API.blur();
                    bi.updateForward()
                }
            }}, bj = function () {
                X = a.core.util.storage.get("forward_link_status");
                if (X == "null" || !X)X = O.forward_link_status;
                Y = X
            }, bk = function (b, c) {
                M.API.blur();
                N.success_tip.style.display = "";
                M.API.reset();
                setTimeout(function () {
                    P = !1;
                    Q = "";
                    r = null;
                    a.removeClassName(N.submit, "W_btn_a_disable");
                    bh.changeBtnText(N.submit, "normal");
                    try {
                        b.data.mid = c.mid;
                        b.data.isComment = ba;
                        b.data.isToMiniBlog = !0;
                        a.custEvent.fire(bg, "forward", [b.data, c, x.inDialog]);
                        i.fire("forward", [b.data, c, x.inDialog])
                    } catch (d) {
                    }
                    a.custEvent.fire(bg, "hide");
                    bi.putAside();
                    ba = !1
                }, 500)
            }, bl = function (a, c) {
                P = !1;
                Q = "";
                bh.changeBtnText(N.submit, "normal");
                a.msg = a.msg || b(v.netError);
                p(a.code, a);
                ba = !1
            }, bm = function (b, c) {
                P = !1;
                Q = "";
                a.removeClassName(N.submit, "W_btn_a_disable");
                bh.changeBtnText(N.submit, "normal");
                p(b.code, b)
            }, bn = function (b, c, d) {
                K = d;
                M.API.reset();
                M.API.insertText(a.trim(a.core.str.decodeHTML(n(K))), 0);
                h.setCursor(N.textEl, 0, 0);
                f(N.textEl);
                O = a.parseParam(O, c);
                w = c.mid;
                F = g(F, c);
                c.forwardNick = c.name;
                c.originNick = c.rootname;
                N.cmtopts.innerHTML = a.core.util.easyTemplate(u, c).toString();
                N = g(N, j(a.builder(N.cmtopts).list))
            }, bo = function (a, b) {
                if (N.cmtopts && b.data.permission && b.data.permission.allowComment == 0) {
                    N.cmtopts.style.display = "none";
                    N.cmtopts.innerHTML = ""
                } else if (N.originLi && b.data.permission && b.data.permission.allowRootComment == 0) {
                    N.originLi.style.display = "none";
                    N.originLi.innerHTML = ""
                }
            }, bp = function () {
                a.custEvent.add(bg, "forwardAgain", bn);
                a.custEvent.add(bg, "resetComment", bo)
            }, bq = function () {
                R = k.getTrans(x.isWeiboDetail ? "toMiyouCirclev5" : "toMiyouCircle", {onComplete: function (a, b) {
                    var c = {onSuccess: bk, onError: bl, requestAjax: R, param: r, onRelease: function () {
                        P = !1;
                        Q = "";
                        bh.changeBtnText(N.submit, "normal");
                        ba = !1
                    }};
                    s.validateIntercept(a, b, c)
                }, onFail: bm, onTimeout: bl}, F)
            }, br = function () {
                W = a.builder(o);
                W = j(W.list).toFriends_client;
                M = c(W, y);
                M.API = M.editor.API;
                a.custEvent.define(M.editor, "close");
                C = d(M.editor);
                N = M.nodeList;
                a.addEvent(N.textEl, "focus", function () {
                    bc = setInterval(function () {
                        bh.canForward()
                    }, 200)
                });
                a.addEvent(N.textEl, "blur", function () {
                    clearInterval(bc)
                });
                M.API.insertText(L + a.core.str.decodeHTML(n(K)));
                e({textArea: N.textEl, maxHeight: 145, inputListener: a.funcEmpty});
                if (_) {
                    z = a.lib.forward.source.like(W);
                    A = q(bg, {flNode: N.forward_link, mid: w, data: O})
                }
            }, bs = function () {
                a.addEvent(N.submit, "click", bi.updateForward);
                a.addEvent(N.putAside, "click", bi.putAside);
                a.lib.kit.extra.keySubmit.on(N.textEl, bi.updateForward);
                a.addEvent(N.smileyBtn, "click", C.show);
                if (_) {
                    Z = a.delegatedEvent(W);
                    Z.add("origin_all", "click", function (b) {
                        N.content.innerHTML = '<span class="con S_txt2">' + I + a.trim(F.origin) + "</span>"
                    });
                    Z.add("report", "click", function (a) {
                        return m(a)
                    })
                }
            }, bt = function () {
                bj();
                bp();
                bq();
                br();
                bs()
            }, bu = function (b) {
                if (bg.isInit == !1) {
                    x.data.isDialog = b;
                    _ = b;
                    x.data.showArrow = H;
                    a.addHTML(o, a.core.util.easyTemplate(t, x.data));
                    M || bt();
                    bg.isInit = !0
                } else {
                    W && a.setStyle(W, "display", "");
                    a.custEvent.fire(A, "switch", [
                        {node: N.forward_link, base: bg}
                    ])
                }
                M.API.focus(0)
            }, bv = function () {
                a.lib.extra.shine(M.nodeList.textEl)
            }, bw = function () {
                M.API.blur();
                W != null && a.setStyle(W, "display", "none")
            }, bx = function () {
                a.removeEvent(N.submit, "click", bi.updateForward);
                a.removeEvent(N.putAside, "click", bi.putAside);
                a.lib.kit.extra.keySubmit.off(N.textEl, bi.updateForward);
                a.custEvent.undefine(bg);
                Z && Z.remove("origin_all", "click");
                Z && Z.remove("report", "click");
                Z && Z.remove("switch", "click");
                Z && Z.remove("retry", "click");
                Z && Z.remove("show", "click");
                Z = null;
                A && A.destroy && A.destroy();
                s && s.destroy && s.destroy();
                z && z.destroy && z.destroy();
                M.closeWidget();
                bc && clearInterval(bc);
                M = null;
                N = null;
                R = null;
                W = null;
                for (var b in bg)delete bg[b];
                bg = null
            };
            bg.show = bu;
            bg.hide = bw;
            bg.shine = bv;
            bg.destroy = bx;
            return bg
        }
    });
    STK.register("conf.trans.global", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("language", {url: "/aj/user/lang", method: "post"});
        c("followList", {url: "/aj/mblog/attention"});
        c("topicList", {url: "/aj/mblog/topic"});
        c("myFollowList", {url: "/aj/relation/attention"});
        c("closetipsbar", {url: "/aj/tipsbar/closetipsbar", method: "post"});
        c("weiqunnew", {url: "/ajm/weiqun?action=aj_remindunread"});
        c("quiet_suggest", {url: "/aj/f/lenovo?ct=10&_wv=5", method: "get"});
        c("like_object", {url: "/p/aj/like/update", method: "post", withDomain: !0});
        c("like_weibo", {url: "/p/aj/like/set", method: "post", withDomain: !0});
        c("take", {url: "/p/aj/general/button", method: "get"});
        c("pageTabDelete", {url: "/p/aj/tab/delete", method: "post"});
        c("getenvelope", {url: "/p/aj/proxy", method: "get"});
        c("rss", {url: "/p/aj/proxy", method: "get"});
        return b
    });
    STK.register("lib.forward.source.toMessage", function (a) {
        var b = a.lib.kit.extra.language, c = a.lib.editor.base, d = a.lib.publisher.widget.face, e = a.lib.kit.dom.autoHeightTextArea, f = a.lib.kit.extra.shine, g = a.ui.tip, h = a.lib.kit.extra.getDiss, i = a.conf.channel.feed, j = a.lib.forward.source.API, k = a.conf.trans.forward, l = a.lib.kit.dom.smartInput, m = a.lib.dialog.validateCode, n = a.lib.message.upload.loadSwf, o = a.lib.message.upload.getFlash, p = a.lib.dialog.ioError, q = a.lib.kit.dom.parseDOM, r, s, t, u = {limitNum: 1e4, count: "disable"}, v = b('<#et userlist data><div node-type="toMessage_client"><div class="WB_feed_repeat forward_rpt2" ><div class="WB_repeat"><!--评论-发表--><div class="WB_feed_publish clearfix"><div class="WB_face W_fl">收信人：</div><div class="WB_publish"><div class="p_input"><textarea class="W_input" node-type="msgTo"></textarea></div></div></div><!--评论-发表--><div class="WB_feed_publish clearfix"><div class="WB_face W_fl">内   容：</div><div class="WB_publish"><div class="sendbox_mod sendbox_mod_down sendbox_mod_focus" node-type="uploadTd"><div class="sendbox_area S_bg2"><textarea node-type="textEl" name="" cols="" rows="" class="W_input W_f14" style="">#L{给你推荐一条微博}&#13;<#if (data.url)>${data.url}</#if></textarea></div><!-- 私信模块 --><div node-type="uploadList" class="sendbox_annex S_bg2 S_line3"><div class="sendbox_file S_line2" node-type="uploadFile" style="display:none;"></div><!-- 私信模块 --><!-- 图片模块 --><div class="sendbox_img S_line2" style="display:none;" node-type="uploadImg"></div></div><!-- 图片模块 --><div class="sendbox_bar clearfix"><div class="sendbox_menu W_fl" node-type="widget"><a href="javascript:void(0);" class="icon_send" node-type="smileyBtn"> <em class="W_ficon ficon_face">o</em></a><a href="javascript:void(0);" class="icon_send" node-type="picBtn"> <em class="W_ficon ficon_image">p</em></a><a href="javascript:void(0);" class="icon_send" node-type="attachBtn"><em class="W_ficon ficon_file">x</em></a></div><div class="sendbox_btn W_fr"><span class="prompt S_txt1" node-type="num" style="display:none;"> 还可以输入 <em>10000</em> 字 </span><a href="javascript:void(0);" node-type="submit" class="W_btn_a">发送</a></div></div></div></div><!-- 发送附件和图片 --> </div><!--/评论-发表--><#if (data.isDialog == true)></div></div></#if></div></#et>'), w = {notice: "#L{请输入转发理由}", nameNotice: "#L{请输入收信人昵称}", defUpdate: "#L{转发微博}", netError: "#L{系统繁忙}", success: "#L{转发成功}!", retry: '#L{读取失败，请}<a href="#" onclick="return false;" action-type="retry" value="retry">#L{重试}</a>', off: "#L{关闭}", on: "#L{开启}"}, x = function (c, d) {
            if (d == "normal") {
                a.removeClassName(c, "W_btn_a_disable");
                c.innerHTML = b("#L{转发}")
            } else {
                a.addClassName(c, "W_btn_a_disable");
                c.innerHTML = b('<i class="W_loading"></i>#L{转发中...}')
            }
        };
        return function (h, i, o) {
            function U() {
                a.removeEvent(y.msgTo, "focus", U);
                sugg = $suggest({textNode: y.msgTo, callback: function (a) {
                }});
                sugg.show()
            }

            var r = m();
            if (h == null || i == null)throw new Error("[lib.invoke.forward.publisher.toPrivateMsg]Required parameter client is missing");
            var t, y, z, A, B, C, D, E, F, G, H = j, I, J, K = {};
            K.client = h;
            K.opts = o || {};
            K.isInit = !1;
            var L, M;
            a.custEvent.define(K, ["forward", "hide", "center", "updateNum"]);
            var N = function () {
                if (s) {
                    A = !1;
                    B = "";
                    s = null;
                    x(y.submit, "normal")
                }
            }, O = function () {
                var c = t.API.getExtra();
                if (A)B === "error" && f(y.textEl); else {
                    var d = a.trim(t.API.getWords() || "");
                    d === b(w.notice) && (d = "");
                    var e = a.trim(y.msgTo.value);
                    e === b(w.nameNotice) && (e = "");
                    if (d === "") {
                        f(y.textEl);
                        return
                    }
                    if (e === "") {
                        f(y.msgTo);
                        return
                    }
                    A = !0;
                    B = "loading";
                    x(y.submit, "loading");
                    var g = {};
                    g.text = d || b(w.defUpdate);
                    var h = L.getTovfids().concat(M.getTovfids());
                    if (h.length != 0) {
                        g.fids = h.join(",");
                        g.tovfids = h.join(",")
                    }
                    g.appkey = K.opts.data.appkey;
                    g.id = i;
                    g.screen_name = e;
                    s = g;
                    s.module = K.opts.data.module;
                    s.page_module_id = K.opts.data.page_module_id;
                    s.refer_sort = K.opts.data.refer_sort;
                    V()
                }
            }, P = function (b) {
                if ((b.keyCode === 13 || b.keyCode === 10) && b.ctrlKey) {
                    t.API.blur();
                    a.core.evt.fireEvent(y.submit, "click")
                }
            }, Q = function () {
                if (!!t && !!t.API) {
                    var a = t.API.count(), c = u.limitNum - a, d = c >= 0 ? !0 : !1;
                    if (d) {
                        A = !1;
                        B = "";
                        if (d) {
                            y.num.innerHTML = b("#L{还可以输入}<span>" + c + "</span> #L{字}");
                            y.num.style.display = "none"
                        }
                    } else {
                        A = !0;
                        B = "error";
                        y.num.innerHTML = b('#L{已经超过}<span class="S_error">' + Math.abs(c) + "</span> #L{字}");
                        y.num.style.display = ""
                    }
                }
            }, R = function (c, d) {
                t.API.blur();
                s = null;
                A = !1;
                B = "";
                x(y.submit, "normal");
                try {
                    c.data.mid = d.mid;
                    c.data.toPrivateMsg = !0;
                    a.custEvent.fire(K, "forward", [c.data, d, o.inDialog])
                } catch (e) {
                }
                a.custEvent.fire(K, "hide");
                g("lite", {msg: b(w.success), type: "succ", timer: "500"});
                t.API.reset();
                G.reset()
            }, S = function (a, b) {
                A = !1;
                s = null;
                B = "";
                x(y.submit, "normal");
                p(a.code, a)
            }, T = function (a, b) {
                A = !1;
                B = "";
                s = null;
                x(y.submit, "normal");
                p(a.code, a)
            }, V = function (b) {
                if (!L.checkUploadComplete() || !M.checkUploadComplete())setTimeout(function () {
                    V(b)
                }, 100); else {
                    s = a.lib.kit.extra.getDiss(s, y.submit);
                    C.request(s)
                }
            }, W = function (b, c) {
                a.ui.confirm("确认删除？", {OK: function () {
                    L.deleteFile(c.fid, c.fileSize)
                }})
            }, X = function (b, c) {
                a.ui.confirm("确认删除？", {OK: function () {
                    M.deleteFile(c.fid, c.fileSize)
                }})
            }, Y = function () {
                var b;
                D = a.builder(h);
                b = q(D.list);
                D = b.toMessage_client;
                t = c(D, u);
                t.API = t.editor.API;
                a.custEvent.define(t.editor, "close");
                J = d(t.editor);
                y = t.nodeList;
                L = n(b.picBtn, {fileType: "img", fileListNode: b.uploadImg, pasteEl: y.textEl});
                M = n(b.attachBtn, {fileType: "file", fileListNode: b.uploadFile});
                a.lib.message.upload.mergeFileCount([L, M]);
                a.addEvent(y.textEl, "focus", function () {
                    Q();
                    a.addClassName(y.uploadTd, "sendbox_mod_focus");
                    F = setInterval(function () {
                        Q()
                    }, 200)
                });
                a.addEvent(y.textEl, "blur", function () {
                    a.removeClassName(y.uploadTd, "sendbox_mod_focus");
                    clearInterval(F)
                });
                e({textArea: y.textEl, maxHeight: 145, inputListener: a.funcEmpty})
            }, Z = function () {
                a.addEvent(y.submit, "click", O);
                a.lib.kit.extra.keySubmit.on(y.textEl, O);
                a.addEvent(y.smileyBtn, "click", J.show)
            }, _ = function () {
            }, ba = function () {
                C = k.getTrans("create", {onComplete: function (a, b) {
                    var c = {onSuccess: R, onError: S, requestAjax: C, param: b, onRelease: function () {
                        A = !1;
                        s = null;
                        B = "";
                        x(y.submit, "normal")
                    }};
                    r.validateIntercept(a, b, c)
                }, onFail: T})
            }, bb = function () {
                ba();
                Y();
                Z();
                _();
                I = l(y.msgTo, {notice: b(w.nameNotice)});
                I.restart();
                a.ui.suggest(y.msgTo).on("suggest", function (b, c, d) {
                    a.conf.trans.global.request("followList", {onSuccess: function (b) {
                        var c = [];
                        a.foreach(b.data, function (a) {
                            var b = a.remark ? "(" + a.remark + ")" : "";
                            c.push([a.screen_name + b, a.screen_name])
                        });
                        d(c)
                    }}, {q: c})
                })
            }, bc = function (c) {
                if (K.isInit == !1) {
                    E = c;
                    o.data.msgTo = b(w.nameNotice);
                    o.data.isDialog = c;
                    o.data.origin = a.trim(o.data.origin);
                    a.addHTML(h, a.core.util.easyTemplate(v, o.data));
                    t || bb();
                    K.isInit = !0
                } else D && a.setStyle(D, "display", "");
                t.API.focus(0)
            }, bd = function () {
                t.API.blur();
                D != null && a.setStyle(D, "display", "none")
            }, be = function () {
                a.removeEvent(y.submit, "click", O);
                a.lib.kit.extra.keySubmit.off(y.textEl, O);
                a.custEvent.undefine(K);
                sugg && sugg.destroy();
                t.closeWidget();
                s = null;
                F && clearInterval(F);
                r && r.destroy && r.destroy();
                t = null;
                y = null;
                C = null;
                D = null;
                for (var b in K)delete K[b];
                L && L.destroy && L.destroy();
                M && M.destroy && M.destroy();
                K = null
            };
            K.show = bc;
            K.hide = bd;
            K.destroy = be;
            return K
        }
    });
    STK.register("lib.forward.source.publisher", function (a) {
        var b = a.lib.kit.extra.language, c = a.lib.forward.source, d = b('<#et userlist data><div class="froward_wrap"><div node-type="forward_tab" class="WB_minitab clearfix"><span class="txt">#L{转发到}：</span><ul class="minitb_ul S_line1 S_bg1 clearfix"><#list data.tab as list><li <#if (list.id==data.type)> class="minitb_item current S_line1" <#else> class="minitb_item S_line1" </#if>><a href="javascript:void(0);" action-type="tab_item" action-data="id=${list.id}"<#if (list.id==data.type)> class="minitb_lk S_txt1 S_bg2"<#else> class="minitb_lk S_txt1"</#if><#if (list.suda)> suda-data="key=tblog_tran_miyou&value=miyou_group_click"</#if>node-type="tab_item_bg">${list.name}<#if (list.id==3)><i title="#L{他是你的好友哦~}" class="W_icon icon_type_friends"></i></#if></a><span class="cur_block"></span></li></#list></ul></div><div node-type="forward_client"></div></div>'), e = [
            {id: 1, name: b("#L{我的微博}"), first_one: !0}
        ];
        e.push({id: 3, name: b("#L{好友圈}"), suda: !0});
        e.push({id: 2, name: b("#L{私信}"), last_one: !0});
        return function (f, g) {
            if (f == null)throw new Error("[common.forward.publisher]Required parameter mid is missing");
            g = g || {type: 1, styleId: "1"};
            var h = {instances: {}}, i = g.type, j, k, l, m, n, o, p = a.lib.kit.extra.toFeedText, q = {1: c.toMicroblog, 2: c.toMessage, 3: c.toFriends}, r = {appkey: "", domInit: !1, forwardNick: "", originNick: "", origin: "", reason: "", url: null, styleId: "1", allowComment: "1", allowForward: "1", allowRootComment: "1", uid: "", rootuid: "", pid: "", domain: "", mark: "", page_module_id: "", module: "", refer_sort: "", pic_src: "", dissDataFromFeed: {}}, s = function () {
                if (g.domInit == !1)var b = a.core.util.easyTemplate(d), c = b({type: i, tab: e, tab_count: e.length}).toString(), f = a.builder(c);
                var h = a.lib.kit.dom.parseDOM(f.list);
                j = h.forward_tab;
                k = h.forward_client;
                return f.box
            };
            a.custEvent.define(h, ["hide", "center", "forward", "updateNum"]);
            var t = function (a) {
                if (f == null)throw new Error("[common.forward.publisher]Required parameter inner is missing");
                l = a;
                v();
                x(i, {data: g, client: k})
            }, u = function (b) {
                if (m) {
                    a.removeClassName(m.parentNode, "current");
                    a.removeClassName(m, "S_bg2")
                }
                m = b.el;
                a.addClassName(m.parentNode, "current");
                a.addClassName(m, "S_bg2");
                i = b.data.id || i;
                x(i, {data: g, client: k})
            }, v = function () {
                m = a.sizzle('a[node-type="tab_item_bg"]', l);
                m = m.length > 0 ? m[0] : null;
                var b = a.sizzle('div[node-type="forward_tab"]', l);
                b = b.length > 0 ? b[0] : null;
                if (b) {
                    n = a.delegatedEvent(b);
                    n.add("tab_item", "click", function (a) {
                        i != a.data.id && u(a)
                    })
                }
            }, w = function (b) {
                var c = function (a, b) {
                    return a[b]
                }, d = b.split("."), e = a, f, g = 0;
                while (d[g]) {
                    f = d[g];
                    e = c(e, f);
                    g++
                }
                return e
            }, x = function (c, d) {
                o != null && o.hide();
                !!k.offsetHeight;
                c = c.toString();
                var e;
                if (h.instances[c] == null) {
                    var g = {}, i;
                    for (var j in r)g[j] = d.data[j];
                    g.type = c;
                    i = {client: k, data: g, inDialog: !0};
                    if (i.data.allowForward === "0") {
                        i.data.originNick = "";
                        i.data.origin = b("#L{此微博已被原作者删除}")
                    }
                    i.data.reason = p(i.data.reason);
                    e = q[c](k, f, i);
                    h.instances[c] = e;
                    a.custEvent.add(e, "hide", function () {
                        a.custEvent.fire(h, "hide")
                    });
                    a.custEvent.add(e, "center", function () {
                        a.custEvent.fire(h, "center")
                    });
                    a.custEvent.add(e, "updateNum", function (b, c) {
                        a.custEvent.fire(h, "updateNum", c)
                    });
                    a.custEvent.add(e, "forward", function (b, c) {
                        a.custEvent.fire(h, "forward", c)
                    })
                } else e = h.instances[c];
                e.show(!0);
                o = e
            }, y = function () {
                for (var b in h.instances) {
                    var c = h.instances[b];
                    c && c.destroy && c.destroy();
                    c = null
                }
                h.instances = null;
                a.custEvent.undefine(h);
                j = null;
                k = null;
                l = null;
                m = null;
                n && n.remove("tab_item", "click");
                n = null
            };
            h.getDom = s;
            h.init = t;
            h.destroy = y;
            return h
        }
    });
    STK.register("lib.kit.extra.setPlainHash", function (a) {
        return function (b) {
            try {
                var c = window.$CONFIG;
                c && c.bigpipe === "true" && a.historyM ? a.historyM.setPlainHash(b) : window.location.hash = b
            } catch (d) {
            }
        }
    });
    STK.register("lib.kit.extra.feedControlHash", function (a) {
        var b = $CONFIG.g_mathematician || 0;
        return function () {
            var c = Math.random();
            c <= b && a.lib.kit.extra.setPlainHash("_rnd" + (+(new Date)).toString())
        }
    });
    STK.register("lib.forward.source.init", function (a) {
        var b = {title: "#L{转发微博}", commentPerson: "#L{同时评论给}", originPerson: "#L{同时评论给原文作者}", notice: "#L{请输入转发理由}", defUpdate: "#L{转发微博}"}, c = a.lib.kit.extra.language;
        return function (d, e) {
            var f = {}, g = {}, h, i, j, k = function () {
                g.cevt = ["forward", "hide", "show", "updateNum"];
                g.callbackCevt = ["forward", "hide", "updateNum"];
                a.custEvent.define(g, g.cevt)
            }, l = function () {
            }, m = function () {
                a.custEvent.add(g, "hide", function () {
                    g.destroy()
                })
            }, n = function (d, e) {
                if (typeof d != "string" && typeof d != "number")throw new Error("$.common.dialog.forward.show need string (or number) as weiboId");
                mid = d;
                e.pic && (e.pid = e.pic);
                var k = a.parseParam({appkey: "", type: 1, origin: "", reason: "", originNick: "", forwardNick: "", title: c(b.title), domInit: !1, url: null, styleId: "1", allowComment: "1", allowForward: "1", allowRootComment: "1", module: "", page_module_id: "", refer_sort: "", pid: "", domain: "", mark: "", pic_src: "", dissDataFromFeed: {}}, e);
                i = a.ui.dialog();
                h = i.getDomList().inner;
                h.className = "layer_forward";
                i.setTitle(k.title);
                i.show().setMiddle();
                j = new a.lib.forward.source.publisher(mid, k);
                h.appendChild(j.getDom());
                i.setBeforeHideFn(function () {
                });
                j.init(h);
                a.custEvent.add(j, "hide", function () {
                    o()
                });
                a.custEvent.add(j, "updateNum", function (b, c) {
                    f.backnum = c.num;
                    a.custEvent.fire(g, "updateNum", f)
                });
                a.custEvent.add(j, "center", function () {
                    i.setMiddle()
                });
                a.custEvent.add(j, "forward", function (b, c) {
                    c = a.core.json.merge(c, f);
                    c.cevtType = b.type;
                    a.custEvent.fire(g, "forward", c)
                });
                a.custEvent.add(i, "hidden", function () {
                    h.className = "detail";
                    j.destroy();
                    i.clearBeforeHideFn();
                    var b = arguments.callee;
                    a.custEvent.remove(i, "hidden", b);
                    i.clearContent();
                    a.custEvent.fire(g, "hide", f)
                });
                i.setMiddle();
                var l = i._.node;
                l.style.top = parseInt(l.style.top) - 80 + "px";
                a.custEvent.fire(g, "show", {box: i});
                g.publisher = j
            }, o = function () {
                i && i.hide && i.hide()
            };
            g.destroy = function () {
                o();
                j.destroy()
            };
            var p = function () {
                k();
                l();
                m()
            };
            p();
            g.show = n;
            return g
        }
    });
    STK.register("lib.forward.forwardDialog", function (a) {
        return function (b, c) {
            var d = a.lib.forward.source.init();
            d.show(b, c);
            return d
        }
    });
    STK.register("pl.base.source.widgetsource.forward", function (a) {
        function d(d) {
            var e = function (d) {
                function k(a, b) {
                    if (i != 1 && b.isToMiniBlog) {
                        var c = d.el.innerHTML;
                        /(\d+)/.test(c) || (c = c + "(0)");
                        d.el.innerHTML = c.replace(/(\d+)/, function (a) {
                            return parseInt(a || 0) + 1
                        })
                    }
                }

                var e = d.data, g = d.el, h = {};
                h.mid = e.mid;
                var i = e.noadd;
                h.forwardOpts = {originNick: e.originNick, uid: e.uid, origin: decodeURIComponent(e.reason), module: e.module, domain: e.domain, url: e.url, refer_sort: e.refer_sort, pic_src: e.pic_src};
                if (b)try {
                    b.destroy();
                    b = null
                } catch (j) {
                }
                b = a.lib.forward.forwardDialog(h.mid, h.forwardOpts);
                a.custEvent.add(b, "forward", k);
                c(g, "widgetForward", b)
            };
            d.add("widget_forward", "click", e);
            var g = {};
            g.destroy = function () {
                d.remove("widget_forward", "click", e)
            };
            return g
        }

        var b, c = a.namespace().data;
        d.init = function (b) {
            var c = {mid: b.mid};
            c.forwardOpts = {originNick: b.originNick, uid: b.uid, origin: b.reason, module: b.module, domain: b.domain, url: b.url, refer_sort: b.refer_sort, pic_src: b.pic_src};
            a.lib.forward.forwardDialog(c.mid, c.forwardOpts);
            return that
        };
        return d
    });
    STK.register("pl.base.source.widgetsource.like", function (a) {
        var b = window.$CONFIG || {}, c = a.lib.kit.extra.language, d = a.conf.trans.global, e = [
            {unlike: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em>#L{赞} #{count}</span>'), like: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em>#L{赞} #{count}</span>')},
            {unlike: c('<em node-type="widget_like_icon" class="W_icon icon_praised_b"></em> #{count}'), like: c('<em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em> #{count}')},
            {unlike: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em>#L{赞} #{count}</span>'), like: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em>#L{赞} #{count}</span>')},
            {unlike: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em>#L{赞} #{count}</span>'), like: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em>#L{赞} #{count}</span>')},
            {unlike: c('<span class="btn_34px W_f14"><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em>#L{赞} #{count}</span>'), like: c('<span class="btn_34px W_f14"><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em>#L{赞} #{count}</span>')},
            {unlike: c('<span class="btn_34px W_f14"><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em> #{count}</span>'), like: c('<span class="btn_34px W_f14"><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em> #{count}</span>')},
            {unlike: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em> #L{赞} #{count}</span>'), like: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em> #L{赞} #{count}</span>')},
            {unlike: c('<span><em node-type="widget_like_icon" class="W_ficon ficon_praised S_ficon">ñ</em> #{count}</span>'), like: c('<span><em node-type="widget_like_icon" class="W_ficon ficon_praised praised S_ficon">ñ</em> #{count}</span>')},
            {unlike: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em> #L{赞}</span>'), like: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em> #L{赞}</span>')},
            {unlike: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_b"></em></span>'), like: c('<span><em node-type="widget_like_icon" class="W_icon icon_praised_bc"></em></span>')}
        ];
        return function (f) {
            var g = function (f) {
                var g = f.el, h = f.data, i = h.status, j = +h.count, k = g.innerHTML, l = "uitype"in h ? e[h.uitype] : e[0], m = j;
                g.removeAttribute("action-type");
                h.status = i = i == 0 ? 1 : 0;
                var n = !isNaN(j);
                n && (j = h.count = Math.max(j + (i === 0 ? -1 : 1), 0));
                var o = a.core.json.merge(h, {});
                o.location = o.location || b.location || "";
                o.type = i === 0 ? 0 : 1;
                d.request("mid"in o ? "like_weibo" : "like_object", {onFail: function (b) {
                    a.lib.dialog.ioError(b.code, b);
                    g.innerHTML = k;
                    g.setAttribute("action-type", "widget_like")
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b);
                    g.innerHTML = k;
                    g.setAttribute("action-type", "widget_like")
                }, onSuccess: function (b) {
                    var d = h.count;
                    g.innerHTML = a.templet(l[i === 1 ? "like" : "unlike"], {count: n ? d > 0 ? "<span>" + d + "</span>" : "" : d});
                    g.setAttribute("action-data", a.jsonToQuery(h || {}));
                    g.setAttribute("action-type", "widget_like");
                    g.setAttribute("title", i === 1 ? c("#L{取消赞}") : c("#L{赞}"));
                    var e = a.sizzle("[node-type=widget_like_icon]", g)[0];
                    e && e.removeAttribute("node-type");
                    i != 0 && e && a.ui.effect(e, "bounce", "slow")
                }}, o)
            };
            f.add("widget_like", "click", g);
            var h = {};
            h.destroy = function () {
                f.remove("widget_like", "click", g)
            };
            return h
        }
    });
    STK.register("pl.base.source.widgetsource.take", function (a) {
        var b = window.$CONFIG || {}, c = a.lib.kit.extra.language, d = a.conf.trans.global;
        return function (c) {
            var e = function (c) {
                var e = c.el, f = c.data, g = f.status, h = f.texta, i = f.textb, j = a.lib.kit.extra.actionData(e), k = e.innerHTML;
                a.addClassName(e, "loadingbtn");
                e.innerHTML = '<span><i class="loading"></i>' + (g == 0 ? h : i) + "</span>";
                var l = a.core.json.merge(f, {});
                l.location = l.location || b.location || "";
                d.request("take", {onFail: function (b) {
                    a.lib.dialog.ioError(b.code, b);
                    e.innerHTML = k;
                    a.removeClassName(e, "loadingbtn")
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b);
                    e.innerHTML = k;
                    a.removeClassName(e, "loadingbtn")
                }, onSuccess: function (b) {
                    g = g == 0 ? 1 : 0;
                    e.innerHTML = "<span>" + (g == 0 ? h : i) + "</span>";
                    a.removeClassName(e, "loadingbtn");
                    j.set("status", g)
                }}, l)
            };
            c.add("widget_take", "click", e);
            var f = {};
            f.destroy = function () {
                c.remove("widget_take", "click", e)
            };
            return f
        }
    });
    STK.register("pl.base.source.widgetsource.message", function (a) {
        return function (b) {
            var c, d = function (b) {
                var d = b.data || {}, e = d.nick ? decodeURIComponent(d.nick) : "";
                if (c) {
                    c.destroy && c.destroy();
                    c = null
                }
                c = a.lib.message.sendMessage({userName: e});
                c.originShow()
            };
            b.add("widget_message", "click", d);
            var e = {};
            e.destroy = function () {
                b.remove("widget_message", "click", d);
                c && c.destroy && c.destroy()
            };
            return e
        }
    });
    STK.register("conf.trans.photoview", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("list", {url: "/aj/photo/popview", method: "get"});
        c("bloginfo", {url: "/aj/v6/mblog/photolayer", method: "get"});
        c("poprecomalbum", {url: "/aj/v6/photo/poprecomalbum", method: "get"});
        c("commentList", {url: "/aj/v6/comment/big", method: "get"});
        c("forwardList", {url: "/aj/v6/mblog/info/big", method: "get"});
        c("toMicroblog", {url: "/aj/v6/mblog/forward", method: "post"});
        return b
    });
    STK.register("lib.photoview.source.util", function (a) {
        var b = a.foreach, c = a.setStyle;
        return{mix: function (a, b) {
            for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        }, throttle: function (a, b) {
            b = b ? b : 150;
            if (b === -1)return function () {
                a.apply(this, arguments)
            };
            var c;
            return function () {
                var d = +(new Date);
                if (!c || d - c > b) {
                    c = d;
                    a.apply(this, arguments)
                }
            }
        }, debounce: function (a, b, c, d) {
            var e;
            return function () {
                var f = d || this, g = arguments, h = function () {
                    e = null;
                    c || a.apply(f, g)
                }, i = c && !e;
                clearTimeout(e);
                e = setTimeout(h, b);
                i && a.apply(f, g)
            }
        }, empty: function (a) {
            var b;
            if (a)while (b = a.firstChild)a.removeChild(b)
        }, setStyles: function (a, d) {
            b(d, function (b, d) {
                c(a, d, b)
            })
        }}
    });
    STK.register("lib.photoview.source.channel", function (a) {
        var b = ["like", "likeChangedFromLayer", "updateLayerLikeBtn", "commentCount", "forwordCount", "fakeForwordData"];
        return a.lib.kit.extra.listener.define("lib.photoview.source.channel", b)
    });
    STK.register("lib.kit.dom.fix", function (a) {
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
                var m = {getNode: function () {
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
                }};
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
    STK.register("lib.photoview.source.mask", function (a) {
        function k(b) {
            var c;
            (c = b.getAttribute(f)) || b.setAttribute(f, c = a.getUniqueKey());
            return">" + b.tagName.toLowerCase() + "[" + f + '="' + c + '"]'
        }

        function j() {
            b = a.C("div");
            var c = '<div node-type="outer">';
            a.core.util.browser.IE6 && (c += '<div style="position:absolute;width:100%;height:100%;"></div>');
            c += "</div>";
            b = a.builder(c).list.outer[0];
            document.body.appendChild(b);
            e = !0;
            d = a.lib.kit.dom.fix(b, "lt");
            var f = function () {
                var c = a.core.util.winSize();
                b.style.cssText = a.core.dom.cssText(b.style.cssText).push("width", c.width + "px").push("height", c.height + "px").getCss()
            };
            i.add(d, "beforeFix", f);
            f()
        }

        var b, c = [], d, e = !1, f = "STK-Mask-Key", g = a.core.dom.setStyle, h = a.core.dom.getStyle, i = a.core.evt.custEvent, l = {getNode: function () {
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
        }, resetSize: function () {
            var c = a.core.util.winSize();
            b.style.cssText = a.core.dom.cssText(b.style.cssText).push("width", c.width + "px").push("height", c.height + 22 + "px").getCss();
            return l
        }, destroy: function () {
            i.remove(d);
            b.style.display = "none"
        }};
        return l
    });
    STK.register("lib.photoview.source.eventemiter", function (a) {
        var b = a.custEvent, c = function (a, b) {
            for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        }, d = function (b, c) {
            return b && a.core.arr.indexOf(c, b) !== -1
        }, e = Object.create || function (a) {
            function b() {
            }

            b.prototype = a;
            return new b
        }, f = function (a, b, d) {
            var f = e(b.prototype);
            a.prototype = f;
            f.constructor = a;
            c(f, d);
            return a
        }, g = function (a) {
            this.addEvents(a)
        };
        g.prototype = {addEvents: function (c) {
            if (!!c && !!c.length) {
                a.isArray(c) || (c = [].concat(c));
                b.define(this, c);
                this._events = (this._events || []).concat(c);
                return this
            }
        }, removeEvents: function () {
            b.remove(this);
            b.undefine(this);
            this._events = []
        }, on: function (a, c, e) {
            d(this._events, a) || this.addEvents(a);
            b.add(this, a, c, e);
            return this
        }, un: function (a, c) {
            b.remove(this, a, c);
            return this
        }, once: function (a, c) {
            d(this._events, a) || this.addEvents(a);
            b.once(this, a, c);
            return this
        }, fire: function (a, c) {
            b.fire(this, a, c);
            return this
        }};
        g.extend = function (a, b) {
            var d = typeof a;
            if (d === "function")return f(a, g, b);
            if (d === "object") {
                b = a;
                var e = new g(b.events);
                c(e, b);
                return e
            }
            return a
        };
        return g
    });
    STK.register("lib.photoview.source.overlayer", function (a) {
        function C(a) {
            a[1] === undefined && (a[1] = a[0]);
            a[2] === undefined && (a[2] = a[0]);
            a[3] === undefined && (a[3] = a[1]);
            return a
        }

        function B(c, d) {
            d = d || b;
            var e = A(c), f = A(d), g = (f.width - e.width) / 2, h = (f.height - e.height) / 2;
            d === b && a.getStyle(c, "position") !== "fixed" && (h += a.scrollPos().top);
            c.style.top = (h > 0 ? h : 0) + "px";
            c.style.left = (g > 0 ? g : 0) + "px"
        }

        function A(a) {
            if (a === b)return r();
            var c, d, e = a.style;
            if (e.display == "none") {
                e.visibility = "hidden";
                e.display = "";
                c = a.offsetWidth;
                d = a.offsetHeight;
                e.display = "none";
                e.visibility = "visible"
            } else {
                c = a.offsetWidth;
                d = a.offsetHeight
            }
            c += y(a, "marginLeft") + y(a, "marginRight");
            d += y(a, "marginTop") + y(a, "marginBottom");
            return{width: c, height: d}
        }

        function z(a, b) {
            switch (b) {
                case"height":
                    return y(a, "marginTop") + y(a, "marginBottom") + y(a, "paddingTop") + y(a, "paddingBottom") + y(a, "borderTopWidth") + y(a, "borderBottomWidth");
                case"width":
                    return y(a, "marginLeft") + y(a, "marginRight") + y(a, "paddingLeft") + y(a, "paddingRight") + y(a, "borderLeftWidth") + y(a, "borderRightWidth");
                default:
            }
            return y(a, b)
        }

        function y(b, c) {
            var d = parseInt(a.getStyle(b, c), 10);
            return isNaN(d) ? 0 : d
        }

        function x(a, b) {
            return a < b ? a : b
        }

        function w(a, b) {
            return a > b ? a : b
        }

        var b = window, c = document, d = document.documentElement, e = a.addEvent, f = a.removeEvent, g = a.core.util.easyTemplate, h = a.lib.kit.extra.language, i = a.core.dom, j = a.core.evt, k = j.custEvent, l = a.lib.photoview.source, m = l.eventemiter, n = l.util.debounce, o = l.mask, p = STK.core.util.browser, q = navigator.userAgent.indexOf("Mac OS X") > -1 ? 0 : 17, r = a.winSize, s = a.foreach, t = a.core.json.merge, u = function (b, c) {
            s(c, function (c, d) {
                a.setStyle(b, d, c)
            })
        }, v = function () {
            if (v.value !== undefined)return v.value;
            var a = document.createElement("div"), b = a.cloneNode(!1), c = !1, e = document.body || function () {
                c = !0;
                return d.appendChild(document.createElement("body"))
            }();
            a.style.cssText = "position:fixed;top:42px";
            e.appendChild(a);
            e.appendChild(b);
            var f = a.offsetTop !== b.offsetTop;
            e.removeChild(a);
            e.removeChild(b);
            c && d.removeChild(e);
            v.value = f;
            return f
        }, D = ["show", "hide", "beforeHide", "resize"], E = m.extend(function (c, i) {
            if (!(this instanceof E))return new E(c, i);
            var j = this;
            m.call(j, D);
            var k = r(), l = k.width, q = k.height;
            i = t({limits: {maxWidth: l, maxHeight: q, minWidth: l / 2, minHeight: q / 2}, offset: [0, 0], style: {zIndex: 9999, position: "absolute"}, pid: "", mid: "", pic_objects: ""}, i, {isDeep: !0});
            C(i.offset);
            var s = decodeURIComponent(i.pic_objects);
            s = s.split(",");
            var u = [], v = [], w = [], x = [];
            for (var y = 0, z = s.length; y < z; y++) {
                var A = s[y];
                A = A.split("|");
                u.push(A[0]);
                v.push(A[1]);
                w.push(A[2]);
                x.push(A[3])
            }
            var B = 0;
            for (var F = 0, G = u.length; F < G; F++)if (u[F] == i.pid) {
                B = F;
                break
            }
            var H = a.ui.mlayer({template: h(g(c, {is_liked: +v[B], count: w[B] || 0, object_id: x[B], mid: i.mid, pid: u[B] || i.pid, notShowLikeBtn: i.pic_objects != ""}).toString()), showWithAni: "bounceIn:normal", hideWithAni: "bounceOut:fast"});
            j._layer = H;
            j._node = H.getBox();
            j.hidden = !0;
            j.get = function (a) {
                return i[a]
            };
            j.set = function (a, b) {
                i[a] = b
            };
            var I = n(function () {
                j.resize()
            }, 50), J = d.style, K = 0, L = function () {
                var b = a.scrollPos(), c = b.left, d = b.top;
                K = d;
                J.overflow = "hidden";
                p.MOZ && p.Version < 20 && (J.marginTop = 0 - d + "px")
            }, M = function () {
                J.overflow = "";
                J.marginTop = "0px";
                J.marginRight = "0px";
                b.scrollTo(0, K)
            }, N = function () {
                j.hide()
            };
            j.on("show", function () {
                L();
                o.showUnderNode(j._node, {opacity: .75});
                o.resetSize();
                e(b, "resize", I);
                a.hotKey.add(d, ["esc"], N, {type: "keyup"})
            });
            j.on("hide", function () {
                a.hotKey.remove(d, ["esc"], N, {type: "keyup"});
                o.back();
                f(b, "resize", I);
                M();
                var c = o.getNode();
                a.setStyle(c, "opacity", .3);
                o.resetSize()
            });
            j._initEvts()
        }, {hidden: !0, _initEvts: function () {
            var b = this, c = b._node, d = j.delegatedEvent(c);
            b._delegate = d;
            d.add("close", "click", function (c) {
                b.hide();
                a.stopEvent(c.evt);
                return!1
            });
            var g = function (c) {
                c = a.fixEvent(c);
                var d = b.getDom("box"), e = c.target;
                d !== e && !a.contains(d, e) && a.contains(document.body, e) && b.hide()
            };
            e(c, "click", g);
            b.once("destroy", function () {
                f(c, "click", g)
            })
        }, _initUI: function () {
            var a = this._node, b = this.get("style");
            b.position = v() ? "fixed" : "absolute";
            u(a, b)
        }, _rendered: !1, _render: function () {
            var a = c.body, b = this._node;
            i.contains(a, b) || a.appendChild(b);
            this._initUI();
            this._rendered = !0
        }, getOuter: function () {
            return this._node
        }, getDom: function (a) {
            var b = this._layer.getDomList();
            return b[a] ? b[a] : null
        }, getDelegate: function () {
            return this._delegate
        }, getOffset: function (a) {
            var b = this.get("offset");
            return a === "x" ? b[1] + b[3] : b[0] + b[2]
        }, setSize: function (a, b) {
            var c = this, d = c._node, e = c.getDom("box");
            u(e, {position: "absolute", width: a + "px", height: b + "px"});
            B(e, d);
            c.set("size", [a, b]);
            c.fire("resize", {width: a, height: b})
        }, resize: function () {
            var a = this;
            if (!a._resizing) {
                var b = a.get("limits"), c = a._node, d = a.getDom("box"), e = r();
                u(c, {overflow: "auto", width: e.width + "px", height: e.height + "px"});
                B(c);
                var f = e.width - a.getOffset("x"), g = e.height - a.getOffset("y");
                f -= z(d, "width");
                g -= z(d, "height");
                f = w(x(f, b.maxWidth), b.minWidth);
                g = w(x(g, b.maxHeight), b.minHeight);
                a.set("screen", [f, g]);
                a._resizing = !0;
                a.setSize(f, g);
                a._resizing = !1;
                return a
            }
        }, show: function () {
            var a = this;
            if (a.hidden) {
                var b = c.body, d = a._node;
                i.contains(b, d) || b.appendChild(d);
                a._rendered || a._render();
                a._layer.show();
                a.fire("show");
                a.resize();
                a.hidden = !1
            }
            return a
        }, hide: function () {
            var a = this;
            if (!a.hidden && a.fire("beforeHide") !== !1) {
                a._layer.hide();
                a.fire("hide");
                a.hidden = !0
            }
            return a
        }, destroy: function () {
            var a = this, b = a._layer;
            a.hidden || a.hide();
            a.fire("destroy");
            a.removeEvents();
            a._delegate.destroy();
            k.undefine(b);
            k.remove(b);
            a._layer = null;
            a._node = null
        }});
        return E
    });
    STK.register("lib.photoview.source.imagedisplay", function (a) {
        var b = window.document, c = window.setTimeout, d = $CONFIG.imgPath + "/style/images/common/loading.gif", e = "about:blank", f = a.lib.photoview.source, g = f.eventemiter, h = f.util, i = a.lib.kit.dom.parseDOM, j = a.insertHTML, k = a.addEvent, l = a.foreach, m = a.setStyle, n = a.removeEvent, o, p = 37, q = 38, r = 39, s = 40, t = "left", u = "right", v = function (b, c, d, e, f) {
            if (typeof e == "function") {
                f = e;
                e = null
            }
            a.tween(b, {duration: d, animationType: e || "easeoutcubic", end: f}).play(c).destroy()
        }, w = h.throttle, x = h.debounce, y = h.setStyles, z = function (a) {
            a.style.display = "block"
        }, A = function (a) {
            a.style.display = "none"
        }, B = function (a, b) {
            var c = new Image;
            b && (c.onload = b);
            c.src = a || e;
            c.setAttribute("hidefocus", !0);
            return c
        }, C = function () {
            var a = new Image;
            a.onload = function () {
                y(a, {position: "absolute", top: "50%", left: "50%", marginTop: -1 * (a.height / 2) + "px", marginLeft: -1 * (a.width / 2) + "px"});
                a.onload = null
            };
            a.src = d;
            return a
        }, D = function (c) {
            var d = c.relatedTarget, e = c.fromElement;
            if (!d || e && e === c.target) {
                d = c.toElement || e;
                c.relatedTarget = d
            }
            return d == null ? !0 : d ? d !== this && d.prefix !== "xul" && this !== b && !a.contains(this, d) : !1
        }, E = function (d, f) {
            var h, k, n = "", E, F, G, H, I, J, K = "", L = "", M = !1, N = function (c) {
                o = i(a.builder(c).list);
                h = c;
                k = o.loader || j(c, "<div></div>");
                n = k.className;
                k.setAttribute("tabIndex", -1);
                k.setAttribute("hidefocus", !0);
                k.onselectstart = function () {
                    return!1
                };
                k.ondblclick = function () {
                    var a = b.selection;
                    a ? a.empty() : window.getSelection().removeAllRanges();
                    return!1
                };
                y(k, {position: "relative", outline: "none", "-moz-user-select": "none", "-webkit-user-select": "none"});
                E = k.appendChild(B());
                F = k.appendChild(B());
                G = k.appendChild(C());
                l([E, F, G], A)
            }, O = function (c) {
                var d = a[c ? "addEvent" : "removeEvent"];
                d(k, "click", T);
                d(b, "keydown", T);
                if (a.lib.kit.touch.cantouch) {
                    d(h, "swipeLeft", T);
                    d(h, "swipeRight", T)
                } else {
                    d(h, "mousemove", T);
                    d(h, "mouseout", T);
                    d(h, "mouseover", T)
                }
            }, P = function () {
                if (!M) {
                    M = !0;
                    O(!0);
                    ba.fire("show")
                }
            }, Q = function () {
                if (M) {
                    M = !1;
                    l([E, F, G], A);
                    L = e;
                    E.src = e;
                    F.src = e;
                    O(!1);
                    ba.fire("hide")
                }
            }, R = w(function (b) {
                var c = "", d = H, e = a.position(h), f = b.pageX - e.l, g = b.pageY - e.t;
                f < d * .5 ? c = t : f >= d * .5 && (c = u);
                if (c !== K) {
                    K = c;
                    k.className = [n, c + "cursor"].join(" ")
                }
                ba.fire("mousemove", {x: f, y: g, event: b})
            }, 10), S = w(function (a) {
                o.likeBtn && (o.likeBtn.style.display = "none");
                ba.fire("navigate", {dir: a})
            }, 400), T = function (c) {
                var d = c.type;
                c = a.fixEvent(c);
                switch (d) {
                    case"mousemove":
                        R(c);
                        break;
                    case"mouseover":
                    case"mouseout":
                        D.call(h, c) && ba.fire(d, c);
                        break;
                    case"click":
                        K && S(K);
                        break;
                    case"keydown":
                    case"keypress":
                        var e = c.target;
                        if (b.body !== e && (/TEXTAREA|SELECT/.test(e.nodeName.toUpperCase()) || e.type === "text"))return;
                        a.stopEvent(c);
                        var g = c.which || c.keyCode || c.charCode, i = "";
                        switch (g) {
                            case 72:
                            case q:
                                f.scrollTop -= 50;
                                break;
                            case s:
                                f.scrollTop += 50;
                                break;
                            case p:
                                i = t;
                                break;
                            case 76:
                            case r:
                                i = u
                        }
                        i && S(i);
                        break;
                    case"swipeLeft":
                        S(u);
                        break;
                    case"swipeRight":
                        S(t)
                }
            }, U = function (a, b, c) {
                var d = a.width, e = a.height, f = d / e;
                if (d > 0 && e > 0)if (f >= b / c) {
                    if (d > b) {
                        d = b;
                        e = d / f
                    }
                } else if (e > c) {
                    e = c;
                    d = e * f
                }
                return{width: d, height: e}
            }, V = function () {
                var a = E;
                y(a, {position: "absolute", top: "50%", left: "50%", marginLeft: a.width / -2 + "px", marginTop: a.height / -2 + "px"})
            }, W = function () {
                if (!!J) {
                    var a = E, b = U(J, H, I);
                    a.width = b.width;
                    a.height = b.height;
                    V()
                }
            }, X = 300, Y = null, Z = function () {
                _();
                Y = c(function () {
                    z(G)
                }, X)
            }, _ = function () {
                var a = Y;
                if (a) {
                    clearTimeout(a);
                    Y = null
                }
                A(G)
            };
            N(d);
            var ba = g.extend({events: ["navigate", "mousemove", "mouseover", "mouseout"], getOuter: function () {
                return h
            }, load: x(function (b, d) {
                if (!b || b !== L) {
                    M ? L !== e && z(E) : P();
                    Z();
                    L = b;
                    var f = new Image, g = function (e) {
                        var h = f.width, i = f.height;
                        f = g = f.onload = f.onerror = null;
                        if (e === "error") {
                            if (d) {
                                d();
                                d = null
                            }
                        } else c(function () {
                            if (L !== b)d = null; else {
                                J = {width: h, height: i};
                                var c = F;
                                F = E;
                                E = c;
                                m(E, "opacity", 0);
                                z(E);
                                a.insertAfter(F, E);
                                if (d) {
                                    d();
                                    d = null
                                }
                                ba.fire("load", {src: b, width: h, height: i});
                                E.src = b;
                                W();
                                v(F, {opacity: .1}, 200, function () {
                                    A(F);
                                    m(F, "opacity", 0)
                                });
                                v(E, {opacity: 1}, 150, function () {
                                    _()
                                })
                            }
                        }, 1)
                    };
                    f.onload = function () {
                        g("load")
                    };
                    f.onerror = function () {
                        g("error")
                    };
                    f.src = b
                }
            }, 10), resize: function (a, b) {
                if (a !== H || b !== I) {
                    H = a;
                    I = b;
                    y(k, {width: a + "px", height: b + "px"});
                    W()
                }
            }, show: P, hide: Q, destroy: function () {
                ba.hide();
                ba.fire("destroy");
                ba.removeEvents();
                E = null;
                k = null;
                F = null
            }});
            return ba
        };
        return E
    });
    STK.register("lib.photoview.source.carousel", function (a) {
        function V() {
            var a = this, b = a.get("numItems");
            if (!!b && !a.isAnimating()) {
                var c = a._carouselEl, d = a.get("firstVisible"), e = a.get("numVisible"), f = d + e - 1;
                f = f > b - 1 ? b - 1 : f;
                var g = a._items, h = g[d].el, i = g[f].el, j;
                if (i)while (j = p(i))c.removeChild(j);
                if (h)while (j = o(h))c.removeChild(j);
                c.style.left = "0px";
                a.flush()
            }
        }

        function U(a, b, c) {
            var d = this, e = d.get("numVisible"), f = d._selectedItem;
            d.get("selectOnScroll") && d.get("selectedItem") !== f && d.setSelectedItem(f);
            d.fire("afterScroll", {dir: c, first: d.get("firstVisible"), last: b})
        }

        function T(a, b) {
            var c = this, d = c.get("CLASSES"), e, f = c._items, g = c.get("numItems"), h = c.get("numVisible"), i = c.get("firstVisible"), l = b, m = i + h - 1, n, o = d.SELECTED_ITEM;
            if (i + h > g - 1) {
                m = g - 1;
                i = D(m - h, 0);
                c.set("firstItem", i)
            }
            isNaN(a) && (a = i);
            if (l !== a) {
                if (l >= 0 && l < g) {
                    n = f[l];
                    n && (e = n.el) && k(e, o)
                }
                if (f[a]) {
                    var p = f[a].status === X;
                    if (g > h) {
                        var q = ~~(h / 2), r = a - q;
                        r < 0 && (r = 0);
                        g - r < h && (r = D(g - h, 0));
                        (!p || r !== i) && c.scrollTo(r)
                    } else {
                        p || c.scrollTo(a);
                        (a < i || a > m) && c.scrollTo(a)
                    }
                    (e = f[a].el) && setTimeout(function () {
                        e && a === c._selectedItem && j(e, o)
                    }, 200)
                }
            }
        }

        function S() {
            var a = !1, b = this, c = b.get("CLASSES"), d = c.PREV_DISABLED, e = c.NEXT_DISABLED, f, g, l = b.get("numItems"), m = b.get("firstVisible");
            if (!!b._rendered) {
                f = b.get("navigation");
                if (g = f.prev) {
                    var n = b.get("prevStateFn");
                    if (!n()) {
                        i(g, "click", b.get("pcFn"));
                        j(g, d);
                        b._prevEnabled = !1
                    } else a = !b._prevEnabled;
                    if (a) {
                        h(g, "click", b.get("pcFn"));
                        k(g, d);
                        b._prevEnabled = !0
                    }
                }
                a = !1;
                if (g = f.next) {
                    var o = b.get("nextStateFn");
                    if (!o()) {
                        i(g, "click", b.get("ncFn"));
                        j(g, e);
                        b._nextEnabled = !1
                    } else a = !b._nextEnabled;
                    if (a) {
                        h(g, "click", b.get("ncFn"));
                        k(g, e);
                        b._nextEnabled = !0
                    }
                }
            }
        }

        function R(a) {
            var b = this, c = 0, d = 0, e = "width";
            c = b._itemSize || Q.call(b, e);
            d = c * a;
            return d
        }

        function Q(a, b) {
            var c = this, d, e = 0, f = !1;
            d = b || q(c._carouselEl);
            if (!d)return 0;
            f = a === "height";
            e = L(d, f ? "height" : "width");
            return e
        }

        function P(a, b) {
            var c = document.createElement(a);
            b = b || {};
            b.className && j(c, b.className);
            b.styles && v(c, b.styles);
            b.parent && b.parent.appendChild(c);
            b.id && c.setAttribute("id", b.id);
            b.html && (b.html.nodeName ? c.appendChild(b.html) : c.innerHTML = b.html);
            return c
        }

        function O(a, b) {
            var c = N(a);
            r(a, "width", b - c + "px")
        }

        function N(b) {
            return L(b, "width") - parseInt(a.getStyle(b, "width"))
        }

        function M(a, b) {
            switch (b) {
                case"height":
                    return L(a, "marginTop") + L(a, "marginBottom") + L(a, "paddingTop") + L(a, "paddingBottom") + L(a, "borderTopWidth") + L(a, "borderBottomWidth");
                case"width":
                    return L(a, "marginLeft") + L(a, "marginRight") + L(a, "paddingLeft") + L(a, "paddingRight") + L(a, "borderLeftWidth") + L(a, "borderRightWidth");
                default:
            }
            return L(a, b)
        }

        function L(b, c, d) {
            function g(b, c) {
                var d = parseFloat(a.getStyle(b, c));
                return isNaN(d) ? 0 : d
            }

            function f(b, c) {
                var d = parseInt(a.getStyle(b, c), 10);
                return isNaN(d) ? 0 : d
            }

            var e;
            if (!b)return 0;
            typeof d == "undefined" && (d = "int");
            switch (c) {
                case"height":
                    e = b.offsetHeight;
                    e > 0 ? e += f(b, "marginTop") + f(b, "marginBottom") : e = g(b, "height") + f(b, "marginTop") + f(b, "marginBottom") + f(b, "borderTopWidth") + f(b, "borderBottomWidth") + f(b, "paddingTop") + f(b, "paddingBottom");
                    break;
                case"width":
                    e = b.offsetWidth;
                    e > 0 ? e += f(b, "marginLeft") + f(b, "marginRight") : e = g(b, "width") + f(b, "marginLeft") + f(b, "marginRight") + f(b, "borderLeftWidth") + f(b, "borderRightWidth") + f(b, "paddingLeft") + f(b, "paddingRight");
                    break;
                default:
                    d === "int" ? e = f(b, c) : d === "float" ? e = g(b, c) : e = a.getStyle(b, c)
            }
            return e
        }

        function K(a, b) {
            return(a = String(a)) ? a.replace(J, function (a) {
                var c = a.length, d = a.substring(1, c - 1), e = b[d];
                return e === undefined ? a : e
            }) : a
        }

        function I(a, b) {
            var c = a.length;
            while (c--)if (b(a[c]))return c;
            return-1
        }

        function H(b, c) {
            var d = a.core.arr.indexOf(c, b);
            d !== -1 && b.splice(d, 1);
            return d
        }

        function G(a, b) {
            if (a.filter)return a.filter(b);
            var c = [];
            for (var d = 0, e = -1, f = a.length; d < f; d++)b(a[d], d) && (c[++e] = a[d]);
            return c
        }

        function F(a, b) {
            "use strict";
            if (a.map)return a.map(b);
            if (typeof b != "function")throw TypeError("map need a function");
            var c = a, d = c.length >>> 0, e = Array(d);
            for (var f = 0; f < d; f++)f in c && (e[f] = b.call(null, c[f], f, c));
            return e
        }

        function E(a, b) {
            return a < b ? a : b
        }

        function D(a, b) {
            return a > b ? a : b
        }

        function C(a) {
            return typeof a == "function"
        }

        function B(a) {
            return typeof a == "number"
        }

        var b = a.lib.photoview.source, c = b.eventemiter, d = a.tween, e = a.core.json.merge, f = a.foreach, g = a.preventDefault, h = a.addEvent, i = a.removeEvent, j = a.addClassName, k = a.removeClassName, l = a.insertHTML, m = a.lib.kit.dom.parseDOM, n = a.core.dom, o = n.prev, p = n.next, q = n.firstChild, r = a.setStyle, s = STK.core.util.browser, t = window.Math, u = b.util, v = u.setStyles, w = [].push, x = [].unshift, y = [].slice, z = function (a) {
            return y.call(a.children, 0)
        };
        try {
            y.call(document.documentElement.children, 0)[0].nodeType
        } catch (A) {
            z = function (a) {
                var b = [], a = a.firstChild;
                while (a) {
                    a.nodeType === 1 && (b[b.length] = a);
                    a = a.nextSibling
                }
                return b
            }
        }
        var J = /\{\w[\w.]*?\}/g, W = 0, X = 1, Y = !0, Z = function (a) {
            return a.status === X
        }, $ = ["click", "show", "hide", "render", "selectedItemChange", "itemLoad", "itemAdded", "itemRemoved", "itemSelected"], _ = c.extend(function (a, b) {
            if (!(this instanceof _))return new _(a, b);
            if (!a || a.nodeType !== 1)throw Error("Carousel construct failed, el not a valid html element.");
            var d = this;
            c.call(d, $);
            b = e({itemSize: 0, itemMargin: 1, numItems: 0, numVisible: 1, firstVisible: 0, scrollIncrement: 1, currentPage: 1, selectedItem: -1, itemTemplate: "", animation: {method: "easeoutcubic", speed: 300}, CLASSES: {WRAP: "carousel", LIST: "carousel-list", CLIP: "carousel-clip", ITEM: "carousel-item", SELECTED_ITEM: "current", PREV_DISABLED: "disabled", NEXT_DISABLED: "disabled"}}, b, {isDeep: !0});
            d.get = function (a) {
                return b[a]
            };
            d.set = function (a, c) {
                b[a] = c
            };
            d.init(a, b)
        }, {_items: null, _carouselEl: null, _clipEl: null, _itemSize: 0, _itemMargin: 0, _isAnimating: !1, _rendered: !1, _selectedItem: -1, hidden: !1, init: function (b, c) {
            var d = this, e = c.CLASSES, h = m(a.builder(b).list), i, k;
            h.prev = h.prev || l(b, '<div class="carousel-prev"></div>');
            h.next = h.next || l(b, '<div class="carousel-next"></div>');
            h.clip = h.clip || l(b, '<div class="' + e.CLIP + '"></div>');
            h.list = h.list || l(h.clip, '<ul class="' + e.LIST + '"></ul>');
            i = h.clip;
            k = h.list;
            j(b, e.WRAP);
            j(i, e.CLIP);
            j(k, e.LIST);
            v(i, {overflow: "hidden", position: "relative"});
            v(k, {overflow: "hidden", position: "relative"});
            var n = {prev: h.prev, next: h.next};
            f(n, function (a, b) {
                j(a, "carousel-nav")
            });
            d._items = [];
            d._parseItems();
            d.set("navigation", n);
            d.set("element", b);
            d.set("numItems", d._items.length);
            d._el = b;
            d._clipEl = i;
            d._carouselEl = k;
            d.hide();
            d.set("pcFn", function (a) {
                g(a);
                d.get("prevClick")(a) !== !1 && d.scrollPrev()
            });
            d.set("ncFn", function (a) {
                g(a);
                d.get("nextClick")(a) !== !1 && d.scrollNext()
            });
            var o = function () {
                return!0
            };
            d.set("prevClick", o);
            d.set("nextClick", o);
            d.set("prevStateFn", function () {
                return!d.isBOF()
            });
            d.set("nextStateFn", function () {
                return!d.isEOF()
            });
            d._initEvts()
        }, show: function () {
            var a = this, b;
            if (a.hidden) {
                b = a._el.style;
                b.visibility = "visible";
                b.display = "block";
                a.hidden = !1;
                a.fire("show")
            }
            return a
        }, hide: function () {
            var a = this;
            if (!a.hidden) {
                a.hidden = !0;
                a._el.style.display = "none";
                a.fire("hide")
            }
            return a
        }, isBOF: function () {
            return this.get("numItems") === 0 || this.get("firstVisible") === 0
        }, isEOF: function () {
            var a = this, b = a.get("firstVisible"), c = a.get("numItems"), d = b + a.get("numVisible");
            return d >= c
        }, render: function (a) {
            var b = this;
            if (!b._rendered) {
                b.show();
                b._refreshUi();
                b._syncUiItems();
                return!0
            }
        }, _parseItems: function () {
        }, _initUiState: function () {
            var b = this, c = b._el, d = b._clipEl, e = b._carouselEl, f, g = q(e), h, i, j, k, l, m;
            a.setStyle(d, "width", "");
            m = 0;
            l = L(c, "width");
            l -= M(c, "width") + M(d, "width");
            g = q(e);
            if (!g) {
                f = e.appendChild(b._createItem({}));
                f.style.visibility = "hidden";
                g = f
            }
            h = Q.call(b, "width", g);
            i = Q.call(b, "height", g);
            j = L(g, "marginRight", "int");
            b.set("itemSize", h);
            b.set("itemMargin", j);
            f && a.removeNode(f);
            if (l > 0) {
                k = t.floor((l + j) / h);
                b.set("numVisible", k);
                m = t.floor((l - k * (h - j)) / (k - 1)) - j
            }
            b.set("addMargin", m)
        }, _refreshUi: function () {
            var a = this, b = a._items.length;
            a._initUiState();
            if (!(b < 1)) {
                var c = a._clipEl, d = a._carouselEl, e = a.get("itemSize"), f = a.get("itemMargin"), g = a.get("numVisible"), h = a.get("addMargin");
                f += h;
                g <= b && (a._itemMargin = f);
                var i = e + h;
                v(c, {marginRight: "auto", marginLeft: "auto", width: g * i - f + "px"});
                r(d, "width", b * i + "px");
                a._itemSize = i;
                a._rendered = !0;
                a.fire("render")
            }
        }, _syncUiForItemAdd: function () {
            var a = this;
            a._rendered || a._refreshUi();
            a._syncUiItems()
        }, _syncUiItems: function () {
            if (!!Y) {
                var a = this, b = a._items, c = a._itemMargin;
                if (c > 0)for (var d = b.length, e; d--;) {
                    e = b[d];
                    if (e.status === X && e.margin !== c) {
                        e.margin = c;
                        r(b[d].el, "marginRight", c + "px")
                    }
                }
                var f = a._carouselEl;
                r(f, "width", z(f).length * a._itemSize + "px");
                a._selectedItem < 0 && a.setSelectedItem(a.get("selectedItem"))
            }
        }, flush: function (a, b) {
            var c = this, d, e = c._items, f = c._carouselEl, g = c.get("numVisible"), h = c.get("firstVisible"), i = c.get("numItems"), j, k, l, m = 0, n, o = 0;
            if (!!i) {
                if (typeof a != "number" || typeof b != "number") {
                    a = h;
                    a < 0 && (a = 0);
                    b = E(a + g - 1, i - 1);
                    if (a + g > i - 1) {
                        b = i - 1;
                        a = D(b - g, 0)
                    }
                } else b >= i && (b = i - 1);
                if (a < h) {
                    l = c._findClosestSibling(a);
                    o = L(f, "left", "int")
                }
                k = b - a + 1;
                if (k > 0) {
                    Y = !1;
                    while (a <= b) {
                        d = e[a];
                        j = d.el;
                        if (!j || d.status === W) {
                            j = c._createItem(d.data);
                            d.el = j;
                            d.status = X;
                            c.fire("itemLoad", {prev: e[a - 1], next: e[a + 1], data: d})
                        }
                        if (j.parentNode !== f) {
                            if (l) {
                                ++m;
                                f.insertBefore(j, l)
                            } else f.appendChild(j);
                            c.fire("itemAdded", d)
                        }
                        ++a
                    }
                    Y = !0;
                    c._syncUiItems();
                    if (m > 0) {
                        n = 0 - m;
                        o += R.call(c, n);
                        f.style.left = o + "px"
                    }
                }
            }
        }, scrollTo: function (b) {
            var c = this, e, f, g, h, i, j, k, l, m, n, o = c._items;
            j = c.get("numItems");
            i = c.get("firstVisible");
            if (!isNaN(b) && j !== 0 && b !== i && !c.isAnimating()) {
                e = c._carouselEl;
                f = c.get("animation");
                k = c.get("numVisible");
                b < 0 && (b = 0);
                j - b < k && (b = D(j - k, 0));
                if (b === i)return;
                h = i > b ? "backward" : "forward";
                n = i + k - 1;
                n = n > j - 1 ? j - 1 : n;
                m = c.fire("beforeScroll", {dir: h, first: i, last: n});
                if (m === !1)return;
                var p = b, q = b + k - 1;
                p > n + 1 && (p = n + 1);
                c.flush(p, q);
                g = 0 - b;
                if (i > 0) {
                    var s = a.core.arr.indexOf(o[i].el, z(c._carouselEl));
                    if (s !== -1 && s !== i) {
                        g += i - s;
                        g = g > 0 ? 0 : g
                    }
                }
                n = b + k;
                n = n > j - 1 ? j - 1 : n;
                l = R.call(c, g);
                c.set("firstVisible", b);
                if (f) {
                    var t = function () {
                        c._isAnimating = !1;
                        U.call(c, b, n, h)
                    };
                    c._isAnimating = !0;
                    d(e, {duration: f.speed, animationType: f.method, end: t}).play({left: l}).destroy()
                } else {
                    r(e, "left", l + "px");
                    U.call(c, b, n, h)
                }
            }
        }, scrollNext: function () {
            var a = this;
            a.scrollTo(a.get("firstVisible") + a.get("scrollIncrement"))
        }, scrollPrev: function () {
            var a = this;
            a.scrollTo(a.get("firstVisible") - a.get("scrollIncrement"))
        }, addItems: function (a, b) {
            var c = this, d = c._items, e = a.length, f = c._itemMargin, g = a && a.length;
            if (!!g) {
                a = F(a, function (a) {
                    return{data: a, el: null, status: W, margin: 0}
                });
                if (d.length > 0 && b) {
                    x.apply(d, a);
                    c.set("firstVisible", c.get("firstVisible") + g);
                    var h = c.get("selectedItem");
                    if (h !== -1) {
                        h += g;
                        c._selectedItem = h;
                        c.set("selectedItem", h)
                    }
                } else w.apply(d, a);
                c.set("numItems", d.length)
            }
        }, rewriteItem: function (a, b) {
            var c = this._items, d = b ? c[b] : c[this._selectedItem];
            d.data.is_liked = a.is_liked;
            d.data.likecount = a.count
        }, removeItems: function (b) {
            var c = this, d = c._items, e, f, g = b.length;
            while (g--) {
                e = b[g];
                H(d, e);
                (f = e.el) && a.removeNode(f)
            }
            c.set("numItems", d.length);
            c.resize();
            c.fire("itemsRemoved")
        }, setSelectedItem: function (a) {
            var b = this, c = b._items.length - 1, d = b._selectedItem;
            a = parseInt(a);
            if (isNaN(a) || a < 0)a = 0;
            if (c < 0)b.set("selectedItem", a); else {
                a > c && (a = c);
                if (d !== a) {
                    b.set("selectedItem", a);
                    b._selectedItem = a;
                    b.fire("selectedItemChange", {prevValue: d, newValue: a})
                }
            }
        }, clear: function () {
            var a = this;
            a.set("numItems", 0);
            a.set("firstVisible", 0);
            a.set("selectedItem", -1);
            a._selectedItem = -1;
            a._rendered = !1;
            a._items = [];
            var b = a._carouselEl;
            b.innerHTML = "";
            b.style.left = "0"
        }, resize: function () {
            var a = this, b = a._carouselEl;
            if (!!a.get("numItems") && !a.isAnimating()) {
                u.empty(b);
                b.style.left = "0";
                a._rendered = !1;
                a._refreshUi();
                a.flush()
            }
        }, filter: function (a) {
            return G(this._items, a)
        }, slice: function (a, b) {
            var c = this._items, d = c.length;
            a = a < 0 ? 0 : a;
            b = b > d ? d : b;
            return c.slice(a, b)
        }, destroy: function () {
            this.clear();
            S.call(this);
            this.removeEvents();
            this._el = null;
            this._clipEl = null;
            this._carouselEl = null
        }, isAnimating: function () {
            return this._isAnimating
        }, _createItem: function (a) {
            var b = this, c = b.get("CLASSES").ITEM, d = a.className, e = b._itemMargin, f;
            c && d && d !== c && (c += " " + d);
            return P("LI", {className: d, html: a.html || K(b.get("itemTemplate"), a)})
        }, _findClosestSibling: function (a) {
            var b = this, c = b._items, d = c.length, e = a + 1, f, g, h;
            while (e < d && !f) {
                g = c[e++].el;
                h = g && g.parentNode;
                h && h.nodeType === 1 && (f = g)
            }
            return f
        }, _initEvts: function () {
            var b = this;
            b.on("itemAdded", function (a, c) {
                b._syncUiForItemAdd(c)
            });
            b.on("selectedItemChange", function (a, c) {
                T.call(b, c.newValue, c.prevValue);
                b.fire("itemSelected", b._items[c.newValue])
            });
            b.on("afterScroll", function (a, c) {
                V.call(b, c);
                S.call(b, c)
            });
            b.on("render", function (a) {
                b._setNavigation(b.get("navigation"));
                S.call(b, a);
                b.show()
            });
            b.on("itemsRemoved", function (a) {
                b._setNavigation(b.get("navigation"));
                S.call(b, a)
            });
            b.on("click", function (a, c) {
                b._itemClickHandler(c) && g(c)
            });
            h(b._el, "click", function (c) {
                b.fire("click", a.fixEvent(c))
            })
        }, _setNavigation: function (a) {
            var b = this;
            a.prev && h(a.prev, "click", b.get("pcFn"));
            a.next && h(a.next, "click", b.get("ncFn"))
        }, _itemClickHandler: function (a) {
            var b = this, c = b._el, d = b._carouselEl, e, f = a.target, g = f.tagName.toUpperCase();
            if (g !== "INPUT" && g !== "SELECT" && g !== "TEXTAREA") {
                while (f && f !== c && f !== d) {
                    if (f.nodeName.toUpperCase() === "LI")break;
                    f = f.parentNode
                }
                e = I(b._items, function (a) {
                    return a.el === f
                });
                if (e >= 0) {
                    b.setSelectedItem(e);
                    return!0
                }
                return!1
            }
        }});
        return _
    });
    STK.register("conf.trans.comment", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("smallList", {url: "/aj/v6/comment/small", method: "get"});
        c("add", {url: "/p/aj/v6/comment/add", method: "post"});
        c("delete", {url: "/aj/comment/del", method: "post"});
        c("hotChange", {url: "/aj/comment/hotchange"});
        c("privateSetting", {url: "/aj/account/setcommentprivacy", method: "post"});
        c("privateNoMore", {url: "/aj/bubble/closebubble", method: "get"});
        c("cfilter", {url: "/aj/v6/comment/small", method: "get"});
        c("isComment", {url: "/aj/comment/privacy", method: "get"});
        c("getIn", {url: "/aj/commentbox/in", method: "get"});
        c("getOut", {url: "/aj/commentbox/out", method: "get"});
        c("getComment", {url: "/aj/at/comment/comment", method: "get"});
        c("getCommonComent", {url: "/aj/commentbox/common", method: "get"});
        c("dialogue", {url: "/aj/v6/comment/conversation", method: "get"});
        c("clear", {url: "/aj/comment/delspam", method: "post"});
        return b
    });
    STK.register("conf.trans.feed.comment", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("smallList", {url: "/aj/v6/comment/small", method: "get"});
        c("add", {url: "/aj/v6/comment/add", method: "post"});
        c("delete", {url: "/aj/comment/del", method: "post"});
        c("hotChange", {url: "/aj/comment/hotchange"});
        c("privateSetting", {url: "/aj/account/setcommentprivacy", method: "post"});
        c("privateNoMore", {url: "/aj/bubble/closebubble", method: "get"});
        c("cfilter", {url: "/aj/v6/comment/small", method: "get"});
        c("isComment", {url: "/aj/comment/privacy", method: "get"});
        c("getIn", {url: "/aj/commentbox/in", method: "get"});
        c("getOut", {url: "/aj/commentbox/out", method: "get"});
        c("getComment", {url: "/aj/at/comment/comment", method: "get"});
        c("getCommonComent", {url: "/aj/commentbox/common", method: "get"});
        c("dialogue", {url: "/aj/v6/comment/conversation", method: "get"});
        return b
    });
    STK.register("lib.dialog.commentPrivateSetting", function (a) {
        var b = 1, c = 0, d = {}, e, f, g = 0, h, i = {}, j = 0, k = 0, l = a.lib.kit.extra.language, m = function () {
            var d = a.getUniqueKey, f = a.core.util.easyTemplate, g = a.lib.kit.dom.parseDOM, i = {id1: "key" + d(), id2: "key" + d(), id3: "key" + d(), showType: b, set: c}, j = '<#et privateSetting data><div class="detail layer_setup_privacy" node-type="content"><div class="W_tips tips_warn clearfix"><p class="icon"><span class="icon_warnS"></span></p><p class="txt">#L{为了避免受到不必要的骚扰，建议设置“可信用户”可以评论我的微博。}</p></div><p class="privacy_title">#L{设置谁可以评论我的微博}</p><ul class="privacy_repliable">\t<li><label for="${data.id1}"><input type="radio" class="W_radio" value="0" name="comment" id="${data.id1}" action-type="choose" <#if (data.showType == 1)>checked="checked"</#if><#if (data.showType==2 && data.set==0)>checked="checked"</#if>/>&nbsp;#L{所有人}<span class="S_txt2">#L{（不包括你的黑名单用户）}</span></label></li>  <li><label for="${data.id2}"><input type="radio" class="W_radio" value="2" name="comment" id="${data.id2}" action-type="choose" <#if (data.showType==2 && data.set==2)>checked="checked"</#if>/>&nbsp;#L{可信用户}<span class="S_txt2">#L{（包括我关注的人、新浪认证用户、微博达人以及手机绑定用户）}</span></label></li>  <li><label for="${data.id3}"><input type="radio" class="W_radio" value="1" name="comment" id="${data.id3}" action-type="choose" <#if (data.showType==2 && data.set==1)>checked="checked"</#if>/>&nbsp;#L{我关注的人}</label></li></ul><div class="btn"><a href="javascript:void(0)" class="W_btn_d" action-type="OK" node-type="OK" style="visibility:hidden;"><span>#L{保存}</span></a><#if (data.showType==1)><a href="javascript:void(0)" class="W_btn_b" action-type="cancel" node-type="noMore"><span>#L{不再提示}</span></a></#if><#if (data.showType==2)><a href="javascript:void(0)" class="W_btn_b" action-type="hide" node-type="hide"><span>#L{取消}</span></a></#if></div></div></#et>';
            e = a.ui.dialog();
            e.setTitle(l("#L{评论隐私设置}"));
            e.setContent(f(l(j), i).toString());
            h = g(a.builder(e.getOuter()).list)
        }, n = {chooseItem: function (d) {
            g = d.el.value;
            b == 1 ? a.setStyle(h.OK, "visibility", g == 0 ? "hidden" : "visible") : a.setStyle(h.OK, "visibility", g == c ? "hidden" : "visible")
        }, save: function (b) {
            g = parseInt(g, 10);
            if (g > -1) {
                if (j)return;
                j = 1;
                a.conf.trans.comment.request("privateSetting", {onSuccess: o.saveSuccess, onError: o.saveError}, {comment: g})
            }
            return a.preventDefault(b.evt)
        }, cancel: function (b) {
            if (!k) {
                k = 1;
                s();
                e.hide();
                a.conf.trans.comment.request("privateNoMore", {onSuccess: o.noMoreSuccess, onError: o.noMoreError}, {bubbletype: 5, time: 604800});
                return a.preventDefault(b.evt)
            }
        }, hide: function (b) {
            s();
            e.hide();
            return a.preventDefault(b.evt)
        }}, o = {getSetErr: function () {
            a.ui.alert(l("#L{对不起，评论隐私设置获取失败}"))
        }, getAlert: function (b, c, d) {
            var f = a.ui.tip({showCallback: function () {
                setTimeout(function () {
                    f && f.anihide()
                }, 500)
            }, hideCallback: function () {
                f && f.destroy();
                b ? setTimeout(function () {
                    d && d();
                    s();
                    e.hide()
                }, 200) : d && d()
            }, msg: c, type: b ? undefined : "del"});
            return f
        }, saveSuccess: function (b, c) {
            e.hide();
            a.ui.tip("lite", {msg: l("#L{保存成功}"), type: "succM", timer: "1000", hideCallback: function () {
                window.location.reload()
            }})
        }, saveError: function () {
            var a = o.getAlert(!1, l("#L{保存失败，请重试}"), function () {
                j = 0
            });
            a.setLayerXY(h.OK);
            a.aniShow()
        }, noMoreSuccess: function () {
            k = 0
        }, noMoreError: function (b) {
            k = 0;
            a.lib.dialog.ioError(b.code, b)
        }}, p = function () {
            g = 0;
            k = 0;
            f = a.delegatedEvent(h.content);
            f.add("choose", "click", n.chooseItem);
            f.add("OK", "click", n.save);
            f.add("cancel", "click", n.cancel);
            f.add("hide", "click", n.hide)
        }, q = function () {
        }, r = function (a) {
            if (a) {
                a.data && a.data.set && (c = a.data.set);
                b = !c ? 1 : 2
            }
            q();
            m();
            p();
            e.show();
            e.setMiddle()
        }, s = function () {
            f && f.destroy()
        };
        d.show = r;
        return d
    });
    STK.register("lib.comment.inter", function (a) {
        var b = null, c = function () {
        }, d = a.ui.alert, e, f = a.lib.dialog.commentPrivateSetting, g = a.lib.kit.extra.language, h = function (b, c) {
            if (b && b.code) {
                b.code != "100000" && b.code != "100005" && a.lib.dialog.ioError(b.code, b);
                c(b)
            }
        };
        return function (f, i) {
            e = a.lib.dialog.validateCode();
            var j = {}, k = 0, l = a.conf.trans.feed.comment;
            f = a.parseParam({delete_success: c, delete_fail: c, delete_error: c, add_success: c, add_fail: c, add_error: c, smallList_success: c, smallList_fail: c, smallList_error: c}, f || {});
            j.conf = a.parseParam({act: b, mid: b, cid: b, uid: $CONFIG.uid, page: b, forward: b, isroot: b, content: b, type: b, is_block: b, appkey: b}, i);
            j.merge = function (b) {
                b = a.lib.kit.extra.merge(j.conf, b);
                return a.core.obj.clear(b)
            };
            j.request = function (b, c) {
                if (!k) {
                    k = 1;
                    var i = j.merge(c), m = l.getTrans(b, {onComplete: function (c, j) {
                        if (b == "add") {
                            var l = {onSuccess: function (a, c) {
                                h(a, function (a) {
                                    f[b + (a.code == "100000" ? "_success" : "_fail")](a, i)
                                })
                            }, onError: function (c, e) {
                                f[b + "_error"](c, i);
                                c.code == "100005" ? d(g("#L{由于对方隐私设置，你无法进行评论。}"), {textSmall: g("#L{绑定手机后可以更多地参与评论。}") + '<a href="http://account.weibo.com/settings/mobile" target="_blank">' + g("#L{立即绑定}") + "</a>"}) : a.lib.dialog.ioError(c.code, c)
                            }, param: i, requestAjax: m};
                            e.validateIntercept(c, j, l)
                        } else h(c, function (c) {
                            if (c.code == "100000")f[b + "_success"](c, i); else {
                                var d = f[b + "_fail"];
                                typeof d == "function" ? f[b + "_fail"](c, i) : f[b + "_success"](c, i);
                                a.ui.ioError(c.code, c)
                            }
                        });
                        k = 0
                    }, onFail: function (b) {
                        k = 0;
                        a.lib.dialog.ioError(b.code, b)
                    }});
                    m.request(i)
                }
            };
            j.load = function (a) {
                j.request("smallList", a)
            };
            j.del = function (a) {
                j.request("delete", a)
            };
            j.post = function (a) {
                a.location = $CONFIG.location;
                a.pdetail = $CONFIG.page_id;
                j.request("add", a)
            };
            e.addUnloadEvent();
            return j
        }
    });
    STK.register("lib.comment.reply", function (a) {
        var b = a.lib.kit.extra.language, c = a.conf.trans.feed.comment, d = a.core.dom.setStyle, e = a.core.dom.getStyle, f = a.core.evt.preventDefault, g = a.lib.kit.extra.setPlainHash, h = [], i = {}, j = {reply: b("#L{回复}"), alert: b("#L{评论内容不能为空哦，写点东西吧。}"), success: b("#L{评论成功}"), block: b("#L{同时将此用户加入黑名单}")}, k = new RegExp(["^", j.reply, "@([^:]*):"].join("")), l = function (a, c) {
            !a || (c == "normal" ? a.innerHTML = b("#L{评论}") : a.innerHTML = b("#L{提交中...}"))
        }, m = function (b, c) {
            var e = {}, f, h, i, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
            a.custEvent.define(e, ["reply"]);
            var D = a.core.evt.delegatedEvent(b), E = {add_success: function (c) {
                A = 0;
                p.className = "W_btn_a btn_noloading";
                l(r, "normal");
                h.API.reset();
                h.API.insertText(v);
                h.API.blur();
                d(b, "display", "none");
                c.forward = s;
                a.custEvent.fire(e, "reply", [c]);
                a.ui.tip("lite", {msg: j.success, type: "succM", timer: "500"})
            }, add_fail: function (a) {
                A = 0;
                p.className = "W_btn_a btn_noloading";
                l(r, "normal")
            }, add_error: function (a) {
                A = 0;
                p.className = "W_btn_a btn_noloading";
                l(r, "normal")
            }}, F = function () {
                t = a.core.str.trim(o.value);
                t == v || t == "" ? !a.hasClassName(p, "W_btn_a_disable") && a.addClassName(p, "W_btn_a_disable") : a.hasClassName(p, "W_btn_a_disable") && a.removeClassName(p, "W_btn_a_disable")
            }, G = function (b) {
                if (!A) {
                    A = 1;
                    a.core.evt.preventDefault();
                    s = n.checked ? 1 : 0;
                    t = a.core.str.trim(o.value);
                    w = t.match(k);
                    if (t == v || t == "") {
                        a.ui.tipAlert(j.alert, {icon: "rederrorS"}).beside(o);
                        A = 0;
                        o.focus();
                        !a.hasClassName(p, "W_btn_a_disable") && a.addClassName(p, "W_btn_a_disable")
                    } else {
                        if (!w || !w[1] || w[1] != u)c.cid = u = null;
                        t = a.leftB(t, 280);
                        c.content = t;
                        x = a.lib.kit.extra.getDiss(a.lib.kit.extra.merge(c, {act: "reply", content: t, forward: s, isroot: 0}), b.el);
                        b && b.el ? b.el.className = "W_btn_a W_btn_a_disable" : p && (p.className = "W_btn_a W_btn_a_disable");
                        l(r, "loading");
                        g("_rnd" + (+(new Date)).toString());
                        i = a.lib.comment.inter(E, x);
                        x = a.lib.kit.extra.merge(b.data, x);
                        i.post(x)
                    }
                }
            };
            n = a.sizzle('[node-type="forward"]', b)[0];
            o = a.sizzle('[node-type="textEl"]', b)[0];
            p = a.sizzle('[action-type="doReply"]', b)[0];
            r = a.sizzle('[node-type="btnText"]', b)[0];
            C = a.sizzle('[node-type="smileyBtn"]', b)[0];
            z = a.core.json.jsonToQuery(c);
            p.setAttribute("action-data", z);
            u = c.content;
            v = [j.reply, "@", u, ":"].join("");
            try {
                f = a.lib.editor.base(b, {count: "disable"});
                h = f.editor;
                a.custEvent.define(h, "close");
                var B = a.lib.publisher.widget.face(h)
            } catch (H) {
            }
            y = h.API.getWords();
            y == "" ? h.API.insertText(v) : h.API.insertText("");
            D.add("doReply", "click", G);
            a.addEvent(C, "click", B.show);
            a.lib.kit.extra.keySubmit.on(o, G);
            m = setInterval(function () {
                F()
            }, 200);
            a.lib.kit.dom.autoHeightTextArea({textArea: o, maxHeight: 9999, inputListener: function () {
                var b = a.trim(o.value);
                a.bLength(b) > 280 && (o.value = a.leftB(b, 280))
            }});
            e.focus = function () {
                h.API.insertText("")
            };
            e.destroy = function () {
                a.removeEvent(C, "click", B.show);
                D && D.destroy && D.destroy();
                clearInterval(m);
                a.lib.kit.extra.keySubmit.off(o, G)
            };
            return e
        }, n = function (b, c) {
            var d = a.core.arr.indexOf(b, h);
            if (!i[d]) {
                h[d = h.length] = b;
                i[d] = m(b, c)
            }
            return i[d]
        };
        return function (b, c) {
            (!c || !c.mid) && a.log("lib.comment/reply.js-------mid is not defined");
            return n(b, c)
        }
    });
    STK.register("lib.comment.commentMsg", function (a) {
        return{noPhoneReplyMsg: '#L{由于用户设置，你无法回复评论。}<br><a href="http://account.weibo.com/settings/mobile" target="_blank">#L{绑定手机}</a>#L{后可以更多地参与评论。}', noPowerReplyMsg: "#L{由于用户设置，你无法回复评论。}"}
    });
    STK.register("lib.dialog.commentDialogue", function (a) {
        var b = a.lib.comment.commentMsg, c = a.lib.kit.extra.language, d = {TITLE: c("#L{查看对话}"), FRAME: c('<div class="layer_dialogue_v5"><div class="WB_empty" node-type="topbox" style="display:none;"><div class="WB_innerwrap"><div class="empty_con clearfix"><p class="subtext" style="display:none;" node-type="more"></p></div>\t\t\t\t\t</div>\t\t\t</div><div class="WB_feed_repeat" node-type="scrollView"><!--模块最外层，需要设置定位和高度值--><div class="WB_repeat"><div class="repeat_list"><div class="list_box"><div class="list_ul" node-type="repeat_list"></div></div></div></div></div>  </div>'), MOREAREA: {LOADING: c('<span>&nbsp;<i class="W_loading"></i>#L{加载中...}</span>'), DELETEED: c("#L{回复记录中部分评论已被原作者删除。}"), RETRY: c('#L{加载失败，请}<a action-type="older" href="javascript:void(0)" onclick="return false;">#L{重试}</a>#L{。}'), DEFAULT: c('<a action-type="older" href="javascript:void(0)" onclick="return false;"><span class="more_arrow">&laquo;</span>#L{查看更早的评论}</a>')}}, e = {unReply: c(b.noPhoneReplyMsg), unPower: c(b.noPowerReplyMsg)}, f = a.conf.trans.comment, g = a.ui.dialog({isHold: !0}), h = null, i = null, j = a.conf.trans.comment, k, l = !1;
        return function () {
            var b, c, m, n, o, p, q, r = !0, s = !1, t = [], u, v = function () {
                g.setTitle(d.TITLE);
                g.setContent(d.FRAME);
                var b = g.getDomList().inner;
                k = a.lib.kit.dom.parseDOM(a.builder(b).list);
                k.outer = g.getBox();
                k.inner = b;
                u = a.ui.scrollView(k.scrollView);
                w();
                l = !0
            }, w = function () {
                q = a.core.evt.delegatedEvent(k.outer);
                q.add("older", "click", b.getDialogueList);
                q.add("replycomment", "click", x.show);
                a.custEvent.add(g, "hide", b.reset)
            }, x = {show: function (b) {
                var c = b.el;
                {
                    if (!a.core.dom.hasClassName(c, "unclick_rep")) {
                        b.data && b.data.ispower == "1" ? j.request("isComment", {onComplete: function (d) {
                            if (d.code == "100000")x.showReply(b); else {
                                if (h) {
                                    h.aniHide && h.aniHide();
                                    h.destroy && h.destroy();
                                    h = null
                                }
                                if (d.code == "100022")h = a.ui.tip("alert", {msg: e.unPower, type: "warn"}); else if (d.code == "100001") {
                                    c && c.setAttribute("isphone", "1");
                                    h = a.ui.tip("alert", {msg: e.unReply, type: "warn"})
                                } else h = a.ui.tip("alert", {msg: d.msg, type: "warn"});
                                h.setLayerXY(c);
                                h.aniShow();
                                a.addClassName(c, "unclick_rep");
                                i && window.clearTimeout(i);
                                i = window.setTimeout(function () {
                                    h.aniHide && h.aniHide();
                                    h.destroy && h.destroy();
                                    h = null
                                }, 3e3)
                            }
                        }}, b.data) : x.showReply(b);
                        return a.preventDefault(b.evt)
                    }
                    if (h) {
                        h.aniHide && h.aniHide();
                        h.destroy && h.destroy();
                        h = null
                    }
                    var d = c.getAttribute("isPhone");
                    d ? h = a.ui.tip("alert", {msg: e.unReply, type: "warn"}) : h = a.ui.tip("alert", {msg: e.unPower, type: "warn"});
                    h.setLayerXY(c);
                    h.aniShow();
                    i && window.clearTimeout(i);
                    i = window.setTimeout(function () {
                        h.aniHide && h.aniHide();
                        h.destroy && h.destroy();
                        h = null
                    }, 3e3)
                }
            }, showReply: function (b) {
                var c = b.el, d, e, f;
                while (c.className.toLowerCase() != "list_con")c = c.parentNode;
                d = a.sizzle('[node-type="commentwrap"]', c)[0];
                var g = b.el;
                e = g.getAttribute("status");
                var h = a.core.dom.dir(g, {expr: "li"});
                if (a.core.dom.getStyle(d, "display") != "none" && e == "true") {
                    g.setAttribute("status", "false");
                    a.core.dom.setStyle(d, "display", "none");
                    h[0] && a.removeClassName(h[0], "curr")
                } else {
                    g.setAttribute("status", "true");
                    a.core.dom.setStyle(d, "display", "");
                    h[0] && a.addClassName(h[0], "curr");
                    f && f.focus()
                }
                if (!e) {
                    f = a.lib.comment.reply(d, b.data);
                    f.liNode = h[0];
                    x.funcs.add(f)
                }
                u.reset()
            }, reply: function (b, c) {
                a.conf.channel.feed.fire("reply", {obj: b, ret: c, cid: n});
                c.data && c.data.content && x.newDialogue(c.data.content)
            }, newDialogue: function (b) {
                a.core.dom.insertHTML(k.repeat_list, b, "beforeend")
            }, funcs: {add: function (b) {
                var c = x.funcs.get(b);
                if (!t[c]) {
                    t.push(b);
                    a.custEvent.add(b, "reply", x.reply);
                    a.custEvent.add(b, "reply", function () {
                        b.liNode && a.removeClassName(b.liNode, "curr")
                    })
                }
            }, remove: function (b) {
                if (t[b]) {
                    a.custEvent.remove(b);
                    t[b] = null;
                    delete t[b]
                }
            }, get: function (a) {
                var b, c = !1;
                for (var d = 0; d < t.length; d++) {
                    var e = t[d];
                    if (e == a) {
                        b = d;
                        c = !0;
                        break
                    }
                }
                return b
            }, destroy: function () {
                for (var a = 0; a < t.length; a++)x.funcs.remove(a)
            }}};
            b = {show: function (a) {
                !l && v();
                r = !0;
                c = a.data.cid;
                m = a.data.ouid;
                n = c;
                o = a.data.cuid;
                p = a.data.type || "small";
                b.display();
                b.getDialogueList()
            }, getCid: function () {
                var d = !1, e = a.lib.kit.dom.firstChild(k.repeat_list);
                if (e)var d = e.getAttribute("cid");
                if (d) {
                    c = d;
                    b.moreArea.show()
                } else b.moreArea.hide()
            }, getDialogueList: function () {
                var e = {cid: c, type: p, ouid: m, cuid: o};
                r && (e.is_more = 1);
                if (!s) {
                    b.loading.start();
                    f.request("dialogue", {onComplete: function (c) {
                        b.loading.end();
                        if (c.code == "100000") {
                            c.data && c.data.html && b.addContent(c.data.html);
                            r = !1;
                            b.getCid();
                            b.moreArea.setContent(c.msg ? c.msg : d.MOREAREA.DEFAULT)
                        } else if (c.code == "100001") {
                            b.moreArea.setContent(d.MOREAREA.RETRY);
                            b.moreArea.show()
                        } else if (c.code == "100011") {
                            b.moreArea.setContent(d.MOREAREA.DELETEED);
                            b.moreArea.show()
                        } else a.lib.dialog.ioError(c.code, c);
                        u.reset()
                    }}, e)
                }
                u.reset()
            }, getOldDialogueList: function () {
                var e = {cid: c, type: p, ouid: m, cuid: o};
                r && (e.is_more = 1);
                if (!s) {
                    b.loading.start();
                    f.request("dialogue", {onComplete: function (c) {
                        b.loading.end();
                        if (c.code == "100000") {
                            c.data && c.data.html && b.loadmore(c.data.html);
                            r = !1;
                            b.getCid();
                            b.moreArea.setContent(c.msg ? c.msg : d.MOREAREA.DEFAULT)
                        } else if (c.code == "100001") {
                            b.moreArea.setContent(d.MOREAREA.RETRY);
                            b.moreArea.show()
                        } else if (c.code == "100011") {
                            b.moreArea.setContent(d.MOREAREA.DELETEED);
                            b.moreArea.show()
                        } else a.lib.dialog.ioError(c.code, c);
                        u.reset()
                    }}, e)
                }
                u.reset()
            }, loading: {start: function () {
                s = !0;
                b.moreArea.setContent(d.MOREAREA.LOADING)
            }, end: function () {
                s = !1;
                b.moreArea.setContent(d.MOREAREA.DEFAULT)
            }}, addContent: function (b) {
                a.core.dom.insertHTML(k.repeat_list, b, "afterbegin")
            }, loadmore: function (b) {
                var c = a.sizzle('[node-type="commentconversation"]', k.repeat_list)[0];
                a.core.dom.insertHTML(c, b, "afterbegin")
            }, moreArea: {show: function () {
                a.setStyle(k.more, "display", "");
                a.setStyle(k.topbox, "display", "")
            }, hide: function () {
                a.setStyle(k.more, "display", "none");
                a.setStyle(k.topbox, "display", "none")
            }, setContent: function (a) {
                k.more.innerHTML = a
            }}, display: function () {
                b.clear();
                g.show();
                g.setMiddle();
                a.setStyle(k.outer, "top", parseInt(a.getStyle(k.outer, "top")) - 30 + "px")
            }, clear: function () {
                k.repeat_list.innerHTML = ""
            }, reset: function () {
                r = !0;
                b.moreArea.show();
                b.clear();
                x.funcs.destroy()
            }, destroy: function () {
                b = null, x = null;
                x.funcs.destroy();
                i && window.clearTimeout(i);
                h && h.aniHide && h.aniHide();
                h && h.destroy && h.destroy();
                h = null
            }};
            return b
        }
    });
    STK.register("lib.comment.commentTemp", function (a) {
        function b(b) {
            var b = "LAB_" + a.getUniqueKey();
            return'<div node-type="commentwrap" class="WB_repeat_in S_bg2"><div class="WB_feed_publish clearfix"><div class="WB_publish"> <div class="p_input"><textarea node-type="textEl" class="W_input"></textarea></div><div class="p_opt clearfix"> <div class="btn W_fr"><a node-type="btnText" action-type="doReply" href="javascript:;" class="W_btn_a W_btn_a_disable">#L{评论}</a></div> <div node-type="widget" class="opt clearfix"> <span class="ico"><a node-type="smileyBtn" href="javascript:;"><i class="W_ficon ficon_face">o</i></a></span> <ul class="ipt"><li><label class="W_label" for="' + b + '"><input node-type="forward" name="" type="checkbox" value="" class="W_checkbox" id="' + b + '"><span>#L{同时转发到我的微博}</span></label></li>' + " </ul>" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + ""
        }

        return{reply: b("LAB_" + a.getUniqueKey()), getReply: b}
    });
    STK.register("lib.photoview.source.inter", function (a) {
        var b = null, c = function () {
        }, d = a.ui.alert, e, f = a.lib.dialog.commentPrivateSetting, g = a.lib.kit.extra.language, h = function (b, c) {
            if (b && b.code) {
                b.code != "100000" && b.code != "100005" && a.lib.dialog.ioError(b.code, b);
                c(b)
            }
        };
        return function (f, i) {
            e = a.lib.dialog.validateCode();
            var j = {}, k = 0, l = a.conf.trans.feed.comment;
            f = a.parseParam({delete_success: c, delete_fail: c, delete_error: c, add_success: c, add_fail: c, add_error: c, smallList_success: c, smallList_fail: c, smallList_error: c}, f || {});
            j.conf = a.parseParam({act: b, mid: b, cid: b, uid: $CONFIG.uid, page: b, forward: b, isroot: b, content: b, type: b, is_block: b, appkey: b}, i);
            j.merge = function (b) {
                b = a.lib.kit.extra.merge(j.conf, b);
                return a.core.obj.clear(b)
            };
            j.request = function (b, c) {
                if (!k) {
                    k = 1;
                    var i = j.merge(c), m = l.getTrans(b, {onComplete: function (c, j) {
                        if (b == "add") {
                            var l = {onSuccess: function (a, c) {
                                h(a, function (a) {
                                    f[b + (a.code == "100000" ? "_success" : "_fail")](a, i)
                                })
                            }, onError: function (c, e) {
                                f[b + "_error"](c, i);
                                c.code == "100005" ? d(g("#L{由于对方隐私设置，你无法进行评论。}"), {textSmall: g("#L{绑定手机后可以更多地参与评论。}") + '<a href="http://account.weibo.com/settings/mobile" target="_blank">' + g("#L{立即绑定}") + "</a>"}) : a.lib.dialog.ioError(c.code, c)
                            }, param: i, requestAjax: m};
                            e.validateIntercept(c, j, l)
                        } else h(c, function (a) {
                            if (a.code == "100000")f[b + "_success"](a, i); else {
                                var c = f[b + "_fail"];
                                typeof c == "function" ? f[b + "_fail"](a, i) : f[b + "_success"](a, i)
                            }
                        });
                        k = 0
                    }, onFail: function () {
                        k = 0
                    }});
                    m.request(i)
                }
            };
            j.load = function (a, b) {
                f.smallList_success(a, b)
            };
            j.del = function (a) {
                j.request("delete", a)
            };
            j.post = function (a) {
                j.request("add", a)
            };
            e.addUnloadEvent();
            return j
        }
    });
    STK.register("lib.photoview.source.setTextarea", function (a) {
        function h(b) {
            var c = b.parentNode;
            return c && c.nodeType === 1 && a.contains(document.body, c)
        }

        function g(c, d) {
            a.foreach(d, function (a, d) {
                b(c, d, a)
            })
        }

        var b = a.setStyle, c = a.addEvent, d = a.removeEvent, e = a.addClassName, f = a.removeClassName;
        return function (b, i) {
            var j, k = 0, l, m = 0, n = function () {
                if (!b || !h(b))r(); else {
                    var a = b.scrollTop;
                    if (a !== m)if (a >= l) {
                        e(i, "set_top");
                        g(i, {position: "relative", zoom: 1, top: a - l + "px", zIndex: 9999})
                    } else {
                        f(i, "set_top");
                        g(i, {position: "relative", top: "0px"})
                    }
                    m = b.scrollTop
                }
            }, o = function () {
                j && clearInterval(j);
                j = setInterval(n, 100)
            }, p = function (a) {
                k && clearTimeout(k);
                clearInterval(j);
                n();
                k = setTimeout(o, 100)
            }, q = function (b, d) {
                if (!b || !d)throw new Error("Illegal argument. target and reference not a valid node.");
                l = a.position(d, {parent: b}).t;
                c(b, "scroll", p);
                o()
            }, r = function () {
                if (!!b) {
                    d(b, "scroll", p);
                    if (k) {
                        clearTimeout(k);
                        k = null
                    }
                    if (j) {
                        clearInterval(j);
                        j = null
                    }
                    b = null;
                    i = null
                }
            };
            q(b, i);
            var s = {destroy: r};
            return s
        }
    });
    STK.register("lib.photoview.source.comment", function (a) {
        function H(b) {
            var c = a.builder(b);
            G(c.list);
            return c.box
        }

        function G(a) {
            a = g(a);
            for (var b in a)a.hasOwnProperty(b) && (F[b] = a[b])
        }

        var b = a.lib.photoview.source, c = b.util.mix, d = a.lib.comment.commentMsg, e = a.lib.comment.commentTemp, f = a.lib.comment.reply, g = a.lib.kit.dom.parseDOM, h = "", i = a.ui.alert, j = a.ui.tip, k = a.lib.kit.extra.language, l = a.custEvent, m = a.sizzle, n = a.setStyle, o = a.core.dom, p = a.core.evt.preventDefault, q = a.conf.trans.feed.comment, r = a.lib.kit.dom.children, s = a.core.evt.removeEvent, t = a.addClassName, u = a.removeClassName, v, w, x, y, z = !1, A = !1, B = !1, C = 1, D, E = '<div><i class="W_loading"></i> <span>正在加载中，请稍候...</span></div>', F = {}, I = function (a, b) {
            return m(a, b)[0]
        }, J = a.lib.photoview.source.channel, K = {content: k("#L{评论内容不能为空哦，写点东西吧。}"), "delete": k("#L{确定要删除该回复吗}"), reply: k("#L{回复}"), blcok: k("#L{同时将此用户加入黑名单}"), notice: k("#L{输入评论内容}"), unReply: k(d.noPhoneReplyMsg), unPower: k(d.noPowerReplyMsg)}, L = function (a) {
            return parseInt(a.innerHTML.replace(/[^\d]+/, "")) || 0
        }, M = function (d, g) {
            var i = g.mid, p, u, A, C, E, G, L, M = new RegExp(["^", K.reply, "@([^:]*):(.*)"].join("")), P = a.core.str, R = a.lib.dialog.commentDialogue(), S = {}, T, U, V, W, X = function (b) {
                window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("big_pic_cover", "commt_pub_button");
                var e = a.trim(w.value), f = e.match(M);
                if (e == "" || f && a.trim(f[2]) == "" || e == K.notice)a.ui.tipAlert(K.content, {icon: "rederrorS"}).beside(w).on("hide", function () {
                    w.focus()
                }); else {
                    if (!f || !f[1] || f[1] != A)p = A = null;
                    h = a.sizzle('em[node-type="btnText"]', b.el)[0].innerHTML;
                    b && b.el ? b.el.className = "W_btn_a W_btn_a_disable" : I('[action-type="post"]', d).className = "W_btn_a W_btn_a_disable";
                    var i = a.lib.kit.extra.getDiss({act: f ? "reply" : "post", cid: p, content: P.leftB(e, 280), isroot: E && E.checked ? "1" : "0", forward: C && C.checked ? "1" : "0", appkey: g.appkey, mark: g.mark, type: "photolayer", pic_src: g.shouldPicSrc ? "layer" : ""}, b.el);
                    c(i, {log_type: "weibo", refer_sort: "layer", location: $CONFIG.location, pdetail: $CONFIG.page_id});
                    bh.post(i)
                }
            }, Y = function (b) {
                var d = b.el, h = b.data.cid, j = b.data.nick, m = "photolayer", n = o.dir(d, {dir: "parent", expr: "li", matchAll: !1})[0], p = g.mark || "", q = o.dir(d, {dir: "parent", expr: ".WB_func", matchAll: !1})[0], r = S[h] && S[h].DOM, s = r ? a.core.dom.contains(document.body, r) : !1;
                if (r && a.getStyle(r, "display") != "none" && s) {
                    a.setStyle(r, "display", "none");
                    a.removeClassName(n, "curr")
                } else {
                    if (!r || !s) {
                        r = a.builder(k(e.getReply())).list.commentwrap[0];
                        q && a.core.dom.insertAfter(r, q);
                        var t = {mid: i, cid: h, content: j, mark: p, module: "scommlist", type: m};
                        c(t, {log_type: "weibo", refer_sort: "layer", location: $CONFIG.location, pdetail: $CONFIG.page_id});
                        S[h] = {handle: f(r, t), DOM: r};
                        l.add(S[h].handle, "reply", bc, {liItem: n})
                    }
                    a.setStyle(r, "display", "");
                    a.addClassName(n, "curr");
                    S[h] && S[h].handle.focus()
                }
            }, Z = function () {
                var a, b, c = function () {
                    b && window.clearTimeout(b);
                    if (a) {
                        a.aniHide();
                        a.destroy();
                        a = null
                    }
                }, d = function (d) {
                    c();
                    a = j("alert", {msg: d, type: "warn"});
                    b = window.setTimeout(c, 3e3);
                    return a
                };
                d.hide = c;
                return d
            }(), _ = function (b) {
                window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("big_pic_cover", "commt_list_reply");
                var c = b.el, d = b.data, e;
                if (a.core.dom.hasClassName(c, "unclick_rep")) {
                    var f = c.getAttribute("isPhone");
                    f ? e = Z(K.unReply) : e = Z(K.unPower);
                    e.setLayerXY(c);
                    e.aniShow()
                } else d && d.ispower == "1" ? q.request("isComment", {onComplete: function (a) {
                    if (a.code == "100000") {
                        var f, g;
                        d && (f = d.nick) && Y(b)
                    } else {
                        if (a.code == "100022")e = Z(K.unPower); else if (a.code == "100001") {
                            e = Z(K.unReply);
                            c && c.setAttribute("isphone", "1")
                        } else e = Z(K.msg);
                        e.setLayerXY(c);
                        e.aniShow();
                        t(c, "unclick_rep")
                    }
                }, onSuccess: a.funcEmpty}, d) : Y(b)
            }, ba = function (b) {
                var c = b.data.block ? ['<input node-type="block_user" id="block_user" name="block_user" value="1" type="checkbox"/><label for="block_user">', K.blcok, "</label>"].join("") : "";
                a.ui.confirm(K["delete"], {OK: function (a) {
                    var c = a.block_user, d, e;
                    (d = b.data) && (e = d.cid) && bh.del({act: "delete", cid: e, is_block: c ? "1" : "0"})
                }, textComplex: c})
            }, bb = function (a) {
                u = a.data.cid;
                R.show(a)
            }, bc = function (a, b) {
                bd(b, a.data)
            }, bd = function (b, c) {
                var d = b.data;
                if (!d)return!1;
                p = A = null;
                c && c.liItem && a.removeClassName(c.liItem, "curr");
                if (d.comment && y) {
                    a.insertHTML(y, d.comment, "afterbegin");
                    Q()
                }
                d.feed && J.fire("forwardCount", 1);
                J.fire("commentCount", 1);
                bf.changeSubmitBtn();
                return!0
            }, be = function () {
                if (!B) {
                    var a = F.commentMore;
                    if (a.getAttribute("data-local") === "1") {
                        var b = F.todo_more, c = r(b), d = c.length, e = D.pagenum < D.totalpage;
                        while (d-- > 4)n(c[d], "display", "");
                        a.removeAttribute("data-local");
                        n(a, "display", e ? "block" : "none");
                        Q()
                    } else {
                        z = !0;
                        O(bh)
                    }
                }
            }, bf = {checkIsEmpty: function () {
                var b = new RegExp(["^", K.reply, "@([^:]*):(.*)"].join("")), c = a.sizzle("[node-type='submit']", d)[0], e = a.trim(w.value.replace(K.notice, "")), f = e.match(b);
                c && (e == "" || f && a.trim(f[2]) == "" ? !a.hasClassName(c, "W_btn_a_disable") && a.addClassName(c, "W_btn_a_disable") : a.hasClassName(c, "W_btn_a_disable") && a.removeClassName(c, "W_btn_a_disable"))
            }, changeSubmitBtn: function () {
                var a = I("em[node-type='btnText']", d), b = I("a[action-type='post']", d);
                b.className = "W_btn_a";
                h && (a.innerHTML = h)
            }, add_success: function (a, b) {
                if (bd(a)) {
                    w.value = "输入评论内容";
                    var c = I("[node-type=showCommentBtn]", v), d = I("a[node-type=submit]", c);
                    d.className = "W_btn_a";
                    n(c, "display", "none");
                    n(w, "height", "25px")
                }
            }, add_fail: function () {
                bf.changeSubmitBtn()
            }, add_error: function () {
                bf.changeSubmitBtn()
            }, delete_success: function (a, b) {
                var c = I(['div[comment_id="' + b.cid + '"]'].join(""), d);
                if (c) {
                    c.parentNode.removeChild(c);
                    J.fire("commentCount", -1);
                    Q()
                }
            }, delete_fail: function (a, b) {
            }, smallList_success: function (c, e) {
                e.focus = !1;
                var f = c, g = {limitNum: 140, tipText: K.notice, count: "disable"};
                if (!!f) {
                    d.innerHTML = "";
                    d.appendChild(H(c.html));
                    w = F.textEl;
                    V = setTimeout(function () {
                        if (w) {
                            a.lib.kit.dom.autoHeightTextArea({textArea: w, maxHeight: 9999, inputListener: function () {
                                var b = a.trim(w.value);
                                P.bLength(b) > 280 && (w.value = P.leftB(b, 280))
                            }});
                            try {
                                L = a.lib.editor.base(d, g);
                                G = L.editor;
                                l.define(G, "close");
                                var b = a.lib.publisher.widget.face(G), c = a.sizzle('[node-type="smileyBtn"]', d)[0];
                                a.addEvent(c, "click", b.show);
                                U = setInterval(function () {
                                    bf.checkIsEmpty()
                                }, 200);
                                e.focus && a.core.dom.selectText(w, {start: 0});
                                e.focus && w.focus()
                            } catch (f) {
                            }
                        }
                    }, 150);
                    a.addEvent(w, "focus", N);
                    C = I("input[name=forward]", d);
                    E = I("input[name=isroot]", d);
                    x = I("div[node-type=commentList]", d);
                    y = I("div[node-type=todo_more]", d);
                    a.core.evt.hotKey.add(x, ["ctrl+enter"], X);
                    var h = m("div[node-type=scroller]")[1];
                    W && W.destroy();
                    W = b.setTextarea(h, x);
                    bg.add("reply", "click", _);
                    bg.add("delete", "click", ba);
                    bg.add("post", "click", X);
                    bg.add("commentDialogue", "click", bb);
                    bg.add("commentMoreBtn", "click", be)
                }
            }}, bg = a.delegatedEvent(d), bh = a.lib.photoview.source.inter(bf, g);
            l.define(bh, ["count", "feed", "comment", "del", "destroy"]);
            bh.disposed = !1;
            bh.destroy = function () {
                if (!bh.disposed) {
                    bh.disposed = !0;
                    if (G) {
                        L.destroy();
                        G = null;
                        L = null
                    }
                    if (V) {
                        clearTimeout(V);
                        V = null
                    }
                    if (W) {
                        W.destroy();
                        W = null
                    }
                    if (T) {
                        bg.remove("qface_send", "click", T.send);
                        T.destroy();
                        T = null
                    }
                    a.foreach(S, function (a) {
                        l.remove(a.handle);
                        l.undefine(a.handle);
                        a.DOM = null;
                        a.handle = null
                    });
                    a.core.evt.hotKey.remove(x, ["ctrl+enter"], X);
                    U && clearInterval(U);
                    Z.hide();
                    bg.remove("commentMoreBtn", "click", be);
                    bg.remove("check", "foucs", N);
                    bg.remove("reply", "click", _);
                    bg.remove("delete", "click", ba);
                    bg.remove("post", "click", X);
                    bg.remove("commentDialogue", "click", bb);
                    bg.destroy();
                    s(w, "focus", N);
                    l.remove(bh);
                    l.undefine(bh)
                }
            };
            return bh
        }, N = function () {
            a.trim(w.value) == K.notice && (w.value = "");
            var b = I("[node-type=showCommentBtn]", v), c = I("a[node-type=submit]", b);
            n(b, "display", "")
        }, O = function (b, c) {
            if (!B) {
                B = !0;
                var d = {};
                d.id = T.mid;
                d.type = "photolayer";
                d.page = C || 1;
                z && (F.showCommentMore.innerHTML = E);
                a.conf.trans.photoview.request("commentList", {onSuccess: function (a, c) {
                    P(b, a, c)
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }}, d)
            }
        }, P = function (b, c, d) {
            if (!b.disposed) {
                B = !1;
                var e = c.data, f = e && a.trim(e.html || "");
                if (!A) {
                    A = !0;
                    U.load(T, {focus: !0, mid: T.mid});
                    n(F.showCommentBtn, "display", f ? "none" : "block")
                }
                var g = c.data.page, h = F.commentMore, i = F.showCommentMore, j = F.todo_more, k = !1;
                if (f) {
                    if (g.pagenum === 1) {
                        var l = I("cite[node-type=commentCount]", T.tab), m = parseInt(e.count, 10) || 0;
                        l.innerHTML = m > 0 ? " " + m : "";
                        f = a.builder(f);
                        var o = r(f.box), p = o.length, q = 4;
                        k = p > q;
                        if (k) {
                            h.setAttribute("data-local", "1");
                            while (p-- > q)n(o[p], "display", "none")
                        }
                        j.appendChild(f.box)
                    } else {
                        k = g.pagenum < g.totalpage;
                        a.insertHTML(j, f)
                    }
                    C = g.pagenum + 1;
                    D = g
                }
                n(h, "display", k ? "block" : "none");
                i.innerHTML = "查看更多评论";
                Q()
            }
        }, Q = function () {
            var a = F.todo_more;
            if (a) {
                var b = r(a), c = b.length, d = c - 1, e = F.commentMore.style.display === "none";
                while (c--) {
                    var f = b[c];
                    e && c === d ? t(f, "last") : u(f, "last")
                }
            }
        }, R = function (a) {
            var b = I("cite[node-type=commentCount]", T.tab), c = L(b);
            a < 0 ? --c : ++c;
            b.innerHTML = c > 0 ? " " + c : ""
        }, S = !1, T, U, V = function (a, b, c) {
            U = a;
            T = c;
            v = b;
            A = !1;
            z = !1;
            C = 1;
            B = !1;
            O(a)
        }, W = function () {
            S = !0;
            J.register("commentCount", R)
        };
        return function (a, b) {
            S || W(b);
            a.html.shouldPicSrc = a.shouldPicSrc;
            if (!a || !a.mid || !(a = a.html))throw"mid is not defined";
            var c = M(b, a);
            V(c, b, a);
            return c
        }
    });
    STK.register("conf.trans.feed.feed", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("publish", {url: "/aj/mblog/add", method: "post"});
        c("delete", {url: "/aj/mblog/del", method: "post"});
        c("forward", {url: "/aj/v6/mblog/forward", method: "post"});
        c("list", {url: "/aj/fav/mblog/favlist", method: "get"});
        c("getfeed", {url: "/aj/mblog/fsearch", method: "get"});
        c("getfeed_at", {url: "/aj/at/mblog/list", method: "get"});
        c("memberTopFeed", {url: "/p/aj/mblog/settop", method: "post"});
        c("mediaShow", {url: "http://api.weibo.com/widget/show.jsonp", varkey: "jsonp", method: "get", requestMode: "jsonp"});
        c("widget", {url: "/aj/mblog/showinfo", method: "post"});
        c("third_rend", {url: "/aj/mblog/renderfeed", method: "post"});
        c("feedViews", {url: "/aj/vtasks/recom", method: "post"});
        c("popularizeEffect", {url: "/aj/vip/popeffect", method: "get"});
        c("deleteTimingBlog", {url: "/aj/mblog/deltime", method: "post"});
        c("changeLevel", {url: "/aj/v6/mblog/modifyvisible", method: "post"});
        c("feedset", {url: "/p/aj/proxy/feedsetting", method: "post"});
        c("accountset", {url: "/aj/account/settings", method: "post"});
        c("getAtmeBlog", {url: "/aj/at/mblog/mblog", method: "get"});
        c("atMeShield", {url: "/aj/at/mblog/shield", method: "post"});
        c("adShield", {url: "/aj/user/blockad", method: "post"});
        c("recfeed", {url: "/aj/mblog/recfeed", method: "get"});
        c("closeRecfeed", {url: "/aj/mblog/recfeedclose", method: "get"});
        c("delSpread", {url: "/aj/feedtrend/filter", method: "post"});
        c("proxy", {url: "/aj/proxy", method: "post"});
        c("setAD", {url: "/aj/proxy/adclickserve", method: "post"});
        c("readhistory", {url: "/aj/v6/mblog/mtimelog", method: "post"});
        return b
    });
    STK.register("lib.invoke.forward.source.API", function (a) {
        var b = {checkAtNum: function (a) {
            var b = a.match(/@[a-zA-Z0-9\u4e00-\u9fa5_]{0,20}/g), c = a.match(/\/\/@[a-zA-Z0-9\u4e00-\u9fa5_]{0,20}/g);
            b = b ? b.length : 0;
            c = c ? c.length : 0;
            return b - c
        }, preventDefault: function (b) {
            a.core.evt.preventDefault(b);
            return!1
        }};
        return b
    });
    STK.register("lib.photoview.source.forward", function (a) {
        var b = a.setStyle, c = a.sizzle, d = a.lib.photoview.source, e = d.util.mix, f = a.lib.kit.dom.parseDOM, g = a.lib.kit.extra.language, h = a.lib.invoke.forward.source.API, i = a.core.evt.preventDefault, j = d.channel, k = a.lib.kit.dom.children, l = a.lib.kit.extra.toFeedText, m = a.core.dom, n = a.addClassName, o = a.removeClassName, p = a.core.evt.removeEvent, q = a.ui.alert, r = a.ui.tip, s, t, u = !1, v, w, x, y, z = 1, A, B = !1, C = !1, D = {}, E = {}, F = '<div><i class="W_loading"></i> <span>正在加载中，请稍候...</span></div>', G = {notice: "#L{请输入转发理由}", defUpdate: "#L{转发微博}", netError: "#L{系统繁忙}", success: "#L{转发成功}!", retry: '#L{读取失败，请}<a href="#" onclick="return false;" action-type="retry" value="retry">#L{重试}</a>', off: "#L{关闭}", on: "#L{开启}"}, H = function (a, b) {
            b == "normal" ? a.innerHTML = g("#L{转发}") : a.innerHTML = g("#L{提交中...}")
        }, I = function (a, b) {
            return c(a, b)[0]
        }, J = function (a) {
            return parseInt(a.innerHTML.replace(/[^\d]+/, "")) || 0
        }, K = function (a) {
            a = f(a);
            for (var b in a)a.hasOwnProperty(b) && (E[b] = a[b])
        }, L = function (b) {
            var c = a.builder(b);
            K(c.list);
            return c.box
        }, M, N = !1, O, P, Q, R, S = !1, T = function () {
            return s || (s = a.lib.dialog.validateCode())
        }, U = function (b) {
            a.lib.forward.forwardDialog(b.mid, b.forwardOpts)
        }, V = function (a) {
            window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("big_pic_cover", "trans_list_trans");
            var b = a.data;
            if (!!b) {
                var d = m.dir.parent(a.el, {expr: "div[node-type=userinfo]"})[0], e = c("div.WB_text", d)[0], f = m.dir.parent(a.el, {expr: "[mid]"})[0], g = l(e.innerHTML), h = l(c("em", f)[0].innerHTML), i = b.mid, j = {type: b.allowForward, origin: g, reason: h, originNick: b.rootname, forwardNick: b.name, title: "转发微博", domInit: !1, url: b.url, styleId: "1", allowComment: "1", allowForward: "1", allowRootComment: "1", pid: b.pid, mark: "", domain: "u/" + b.rootuid};
                U({mid: i, forwardOpts: j})
            }
        }, W = function (a) {
            E.textEl.value == "请输入转发理由" && (E.textEl.value = "");
            b(E.showforwradFace, "display", "");
            E.submit.className = "W_btn_a"
        }, X = function () {
            if (!!y) {
                var a = y.API.count(), b = 140 - a, c = b >= 0 ? !0 : !1;
                if (c) {
                    O = !1;
                    R = ""
                } else {
                    O = !0;
                    R = "error"
                }
            }
        }, Y = function (b) {
            var c = b;
            if (!c)return!1;
            a.insertHTML(E.todo_more, c, "afterbegin");
            j.fire("forwardCount", 1);
            Z();
            return!0
        }, Z = function () {
            var a = E.todo_more;
            if (a) {
                var b = k(a), c = b.length, d = c - 1, e = E.forwardMoreBtn.style.display === "none";
                while (c--) {
                    var f = b[c];
                    e && c === d ? n(f, "last") : o(f, "last")
                }
            }
        }, $ = function (a, c) {
            O = !1;
            E.submit.className = "W_btn_a";
            H(E.btnText, "normal");
            b(E.textEl, "height", "25px");
            b(E.showforwradFace, "display", "none");
            try {
                a.data.isComment = N;
                a.data.isToMiniBlog = !0
            } catch (d) {
            }
            setTimeout(function () {
                r("lite", {msg: g(G.success), type: "succ", timer: "500"})
            }, 150);
            N = !1;
            y.API.reset();
            var e = a.data.html;
            Y(e);
            E.textEl.value = "请输入转发理由"
        }, _ = function (b) {
            var c = b.data, d = {};
            d.mid = c.mid;
            a.conf.trans.feed.feed.getTrans("delete", {onSuccess: ba, onError: bb, onFail: function () {
            }}).request(d)
        }, ba = function (a, b) {
            var c = I(['div[mid="' + b.mid + '"]'].join(""), t);
            c && c.parentNode.removeChild(c);
            j.fire("forwardCount", -1);
            Z()
        }, bb = function (b, c) {
            O = !1;
            E.submit.className = "W_btn_a";
            H(E.btnText, "normal");
            b.msg = b.msg || g(G.netError);
            a.lib.dialog.ioError(b.code, b);
            N = !1
        }, bc = function (a, b) {
            O = !1;
            R = "";
            E.submit.className = "W_btn_a";
            H(E.btnText, "normal");
            q(g(G.netError))
        }, bd = function (b) {
            window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack("big_pic_cover", "trans_pub_button");
            if (O)R === "error" && a.lib.kit.extra.shine(E.textEl); else {
                var c = a.trim(y.API.getWords() || "");
                c == g(G.notice) && (c = "");
                var d = {};
                d.reason = c || g(G.defUpdate);
                d.style_type = 3;
                d.rank = 0;
                d.mid = Q;
                d.location = $CONFIG.location || "";
                d.pic_src = D.shouldPicSrc ? "layer" : "";
                O = !0;
                R = "loading";
                E.submit.className = "W_btn_a W_btn_a_disable";
                E.originInput && E.originInput.checked && (d.is_comment_base = "1");
                if (E.forwardInput && E.forwardInput.checked) {
                    d.is_comment = "1";
                    N = !0
                }
                d = a.lib.kit.extra.getDiss(d, E.submit);
                e(d, {log_type: "weibo", refer_sort: "layer", location: $CONFIG.location});
                var f = a.conf.trans.photoview.getTrans("toMicroblog", {onComplete: function (a, b) {
                    var c = {onSuccess: $, onError: bb, requestAjax: f, param: d, onRelease: function () {
                        O = !1;
                        R = "";
                        E.submit.className = "W_btn_a";
                        H(E.btnText, "normal");
                        N = !1
                    }};
                    T().validateIntercept(a, b, c)
                }, onFail: bc, onTimeout: bb});
                if (h.checkAtNum(c) > 5) {
                    a.ui.confirm(g("#L{单条微博里面@ 太多的人，可能被其它用户投诉。如果投诉太多可能会被系统封禁。是否继续转发？}"), {OK: function () {
                        f.request(d)
                    }, cancel: function () {
                        O = !1;
                        R = "";
                        E.submit.className = "W_btn_a";
                        H(E.btnText, "normal")
                    }});
                    return
                }
                f.request(d)
            }
        }, be = function (a) {
            if ((a.keyCode === 13 || a.keyCode === 10) && a.ctrlKey) {
                y.API.blur();
                bd()
            }
        }, bf = function (b) {
            if (!B) {
                B = !0;
                var c = {};
                c.id = D.mid;
                c.type = "photolayer";
                c.page = z;
                C && (E.forwardMoreBtnBox.innerHTML = F);
                a.conf.trans.photoview.request("forwardList", {onSuccess: bg, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }}, c)
            }
        }, bg = function (c, d) {
            B = !1;
            var e = c.data, f = e && a.trim(e.html || "");
            if (!u) {
                u = !0;
                bh()
            }
            var g = e.page, h = E.todo_more, i = E.forwardMoreBtn, j = E.forwardMoreBtnBox, l = !1;
            if (f) {
                if (g.pagenum === 1) {
                    var m = I("cite[node-type=forwardCount]", D.tab), n = parseInt(e.count, 10) || 0;
                    m.innerHTML = n > 0 ? " " + n : "";
                    f = a.builder(f);
                    var o = k(f.box), p = o.length, q = 4;
                    l = p > q;
                    if (l) {
                        i.setAttribute("data-local", "1");
                        while (p-- > q)b(o[p], "display", "none")
                    }
                    h.appendChild(f.box)
                } else {
                    l = g.pagenum < g.totalpage;
                    a.insertHTML(h, f)
                }
                z = g.pagenum + 1;
                A = g
            } else z === 1 && b(E.showforwradFace, "display", "");
            b(i, "display", l ? "block" : "none");
            j.innerHTML = "查看更多转发";
            Z()
        }, bh = function () {
            var b = D, e = b.forwardBox, f = b.repost.html;
            Q = b.mid;
            e.innerHTML = "";
            e.appendChild(L(f));
            t = e;
            v = setTimeout(function () {
                a.lib.kit.dom.autoHeightTextArea({textArea: E.textEl, maxHeight: 145, inputListener: function () {
                }});
                if (E.textEl)try {
                    var b = {limitNum: 140, tipText: g(G.notice), count: "disable"}, c = t;
                    x = a.lib.editor.base(c, b);
                    y = x.editor;
                    a.custEvent.define(y, "close");
                    var d = a.lib.publisher.widget.face(y), e = a.sizzle('[node-type="smileyBtn"]', c)[0];
                    a.addEvent(e, "click", d.show)
                } catch (f) {
                }
            }, 100);
            a.addEvent(E.textEl, "focus", function () {
                P && clearInterval(P);
                P = setInterval(X, 200);
                W()
            });
            a.addEvent(E.textEl, "blur", function () {
                clearInterval(P)
            });
            a.addEvent(E.submit, "click", bd);
            var h = c("div[node-type=scroller]")[1];
            w && w.destroy();
            w = d.setTextarea(h, E.forward)
        }, bi = function (a) {
            var b = I("cite[node-type=forwardCount]", D.tab), c = J(b);
            a < 0 ? --c : ++c;
            b.innerHTML = c > 0 ? " " + c : ""
        }, bj = function () {
            if (!B) {
                var a = E.forwardMoreBtn;
                if (a.getAttribute("data-local") === "1") {
                    var c = E.todo_more, d = k(c), e = d.length, f = A.pagenum < A.totalpage;
                    while (e-- > 4)b(d[e], "display", "");
                    a.removeAttribute("data-local");
                    b(a, "display", f ? "block" : "none");
                    Z()
                } else {
                    C = !0;
                    bf()
                }
            }
        }, bk = function (a) {
            M = a.dEvent;
            if (!M)throw Error("dEvent is null.");
            j.register("forwardCount", bi);
            M.add("feed_list_forward", "click", V);
            M.add("forwardMore", "click", bj);
            M.add("feed_list_delete", "click", _)
        }, bl = function () {
            if (P) {
                clearInterval(P);
                P = null
            }
            if (y) {
                x.destroy();
                y = null;
                x = null
            }
            if (v) {
                clearTimeout(v);
                v = null
            }
            if (w) {
                w.destroy();
                w = null
            }
            if (s) {
                s.destroy();
                s = null
            }
            M.remove("feed_list_forward", "click", V);
            M.remove("forwardMore", "click", bj);
            M.remove("feed_list_delete", "click", _);
            p(E.btnText, "click", bd);
            j.remove("forwardCount", bi)
        }, bm = function (a) {
            u = !1;
            C = !1;
            B = !1;
            D = a;
            z = 1;
            bf()
        }, bn = {init: bk, update: bm, destroy: bl};
        return function (a) {
            bk(a);
            return bn
        }
    });
    STK.register("lib.photoview.source.userinfo", function (a) {
        var b = a.lib.kit.dom.parseDOM, c = a.sizzle, d = a.lib.kit.dom.children, e = a.core.json.merge, f = a.custEvent, g = a.lib.kit.extra.language, h = a.lib.photoview.source, i = h.util.mix, j = h.channel, k, l, m = 1, n = !0, o = '<div class="WB_empty"> <div class="WB_innerwrap"> <div class="empty_con clearfix"> <p class="text"><i class="W_loading"></i>正在加载中，请稍候...</p> </div> </div> </div>', p = function (b, c, d) {
            b && a.setStyle(b, c, d)
        }, q = function (b, c) {
            var d = parseInt(a.getStyle(b, c), 10);
            return isNaN(d) ? 0 : d
        }, r = Object.create || function (a) {
            function b() {
            }

            b.prototype = a;
            return new b
        }, s = {}, t = function (c) {
            var d = a.builder(c), e = b(d.list);
            for (var f in e)e.hasOwnProperty(f) && (s[f] = e[f]);
            return d.box
        }, u = function (a, b) {
            return c(a, b)[0]
        }, v = function () {
            function C(b) {
                a.lib.dialog.ioError(b.code, b);
                e = !1
            }

            function B() {
                e = !1;
                f = !0;
                i = 0;
                p = 0;
                q = 0
            }

            function A(b) {
                var c = a.builder(b);
                z(c.list);
                return c.box
            }

            function z(a) {
                a = b(a);
                for (var c in a)a.hasOwnProperty(c) && (y[c] = a[c])
            }

            var c = a.conf.trans.feed.attitude, e = !1, f = !0, h = !1, i = 0, p = 0, q = 0, r = 0, s, t = 3, v = !1, w = 0, x = !1, y = {}, D = function (b) {
                var c = u('[action-type="like"]', y.tab), d = {el: c, data: a.queryToJson(c.getAttribute("action-data"))};
                F(d, "notfirechange")
            }, E = function () {
                var b = y.likeMoreBtn.style.display == "none", c = a.core.dom.lastChild(y.likeList);
                b ? a.core.dom.addClassName(c, "last") : a.core.dom.removeClassName(c, "last")
            }, F = function (b) {
                if (f) {
                    if (!b) {
                        var e = u('[action-type="like"]', y.tab), b = {};
                        b.data = a.queryToJson(e.getAttribute("action-data"))
                    }
                    x = !1;
                    var g = a.core.json.merge(b.data, {location: $CONFIG.location, object_type: "pic"});
                    c.getTrans("objLike", {onSuccess: function (b) {
                        var c = b.data.html, e = y.panel, f = b.data.is_del ? !0 : !1, h = g.count;
                        f ? h-- : h++;
                        var i = h > 0 ? h : 0;
                        if (!x) {
                            var k = u('[action-type="like"]', y.tab), l = u("em", k), m = "W_icon", n = "icon_praised_bc", o = "icon_praised_b";
                            m += " " + (f ? o : n);
                            k.title = f ? "赞" : "取消赞";
                            k.innerHTML = '<em class="' + m + '"></em>' + (i > 0 ? " " + i : "");
                            var p = a.lib.kit.extra.actionData(k);
                            p.set("count", i);
                            p.set("is_liked", f ? 0 : 1);
                            x = !0
                        }
                        if (f)setTimeout(function () {
                            var b = a.sizzle('[node-type="uid=' + $CONFIG.uid + '"]', e)[0];
                            a.removeNode(b);
                            var c = y.likeList;
                            if (d(c).length == 0) {
                                c.style.display = "none";
                                y.grabSofa.style.display = ""
                            }
                        }, 100); else {
                            var q = a.sizzle('[node-type="likeList"]', e)[0];
                            q.style.display = "";
                            y.grabSofa.style.display = "none";
                            a.insertHTML(q, c, "AfterBegin")
                        }
                        E();
                        j.fire("updateLayerLikeBtn", {count: i, isDel: f})
                    }, onFail: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}).request(g)
                }
                return!1
            }, G = function () {
                var b = y.likeMoreBtn;
                if (b.getAttribute("data-local") === "1") {
                    var c = y.likeList, e = d(c), f = e.length;
                    for (var g = 0, h = f; g < h; g++)a.setStyle(e[g], "display", "");
                    w <= 5 && a.setStyle(b, "display", "none");
                    b.removeAttribute("data-local");
                    E()
                } else {
                    v = !0;
                    H({object_id: k})
                }
            }, H = function (b, e) {
                f = !1;
                x = !1;
                b.page = m || 1;
                b.object_type = "pic";
                v && (y.likeMoreBtn.innerHTML = o);
                c.request("photosmall", {onSuccess: function (b) {
                    f = !0;
                    var c = !1, h = b.data, i = h.page;
                    w = h.like_counts;
                    var j = h.is_liked;
                    a.custEvent.fire(K, "uplikestatus", {is_liked: j, like_counts: w});
                    var k = h.html, o = y.panel, p = A(k);
                    if (i.pagenum === 1) {
                        o.innerHTML = "";
                        o.appendChild(p);
                        w == 0 && (y.likeList.style.display = "none");
                        var q = d(y.likeList), r = q.length;
                        c = r > t;
                        if (c) {
                            y.likeMoreBtn && y.likeMoreBtn.setAttribute("data-local", "1");
                            while (r-- > t)a.setStyle(q[r], "display", "none")
                        }
                        w > t && y.likeMoreBtn && (y.likeMoreBtn.style.display = "");
                        if (!x) {
                            var s = y.tab, p = u('[action-type="like"]', s), v = u("em", p), z = "W_icon", B = "icon_praised_bc", C = "icon_praised_b";
                            z += " " + (j ? B : C);
                            p.title = j ? "取消赞" : "赞";
                            p.innerHTML = '<em class="' + z + '"></em>' + (w > 0 ? " " + w : "");
                            var D = a.lib.kit.extra.actionData(p);
                            D.set("count", w);
                            D.set("is_liked", j ? 1 : 0);
                            D.set("object_id", h.object_id);
                            D.set("ref", l);
                            x = !0
                        }
                    } else {
                        a.insertHTML(y.likeList, k);
                        c = i.pagenum < i.totalpage;
                        y.likeMoreBtn.innerHTML = '<a href="javascript:void(0)" class="WB_cardmore S_txt1 S_line1 clearfix" action-type="likeMoreBtn">' + g("#L{查看更多赞}") + "</a>";
                        y.likeMoreBtn.style.display = c ? "" : "none"
                    }
                    m = i.pagenum + 1;
                    E();
                    n || e && e()
                }, onFail: C, onError: C}, b)
            }, I;
            return{init: function (b) {
                var c = b.tab, d = b.panel;
                y.tab = c;
                y.panel = d;
                z(a.builder(c).list);
                I = b.dEvent;
                h = !1;
                I.add("like", "click", F);
                I.add("likeMoreBtn", "click", G);
                j.register("likeChangedFromLayer", D)
            }, load: function (b) {
                m = 1;
                v = !1;
                b = a.parseParam({mid: null, object_id: null}, b);
                var c = y.panel;
                c.innerHTML = g('<div class="WB_empty"> <div class="WB_innerwrap"> <div class="empty_con clearfix"> <p class="text"><i class="W_loading"></i>正在加载中，请稍候...</p> </div> </div> </div>');
                B();
                s = b.mid;
                f = !1;
                setTimeout(function () {
                    h || H(b, F)
                }, 100)
            }, destroy: function () {
                h = !0;
                j.remove("likeChangedFromLayer", D);
                I.remove("like", "click", F);
                j.remove("likeChangedFromLayer", D)
            }}
        }(), w = function () {
            function c(c) {
                c = b(c);
                for (var d in c)c.hasOwnProperty(d) && (a[d] = c[d])
            }

            var a = {}, d = null, e = null;
            return{init: function (b) {
                d = b.dEvent;
                a.tab = b.tab;
                a.panel = b.panel
            }, load: function (b) {
                var c = D.repost_list;
                e && e.destroy();
                var f = a.panel;
                f.innerHTML = o;
                e = h.forward({dEvent: d});
                e.update({forwardBox: f, repost: c, mid: b.mid, tab: a.tab, shouldPicSrc: b.shouldPicSrc})
            }, destroy: function () {
                if (e) {
                    e.destroy();
                    e = null
                }
            }}
        }(), x = function () {
            function e(c) {
                var e = a.builder(c);
                d(b(e.list));
                return e.box
            }

            function d(a) {
                a = b(a);
                for (var d in a)a.hasOwnProperty(d) && (c[d] = a[d])
            }

            var c = {}, f, g;
            return{init: function (a) {
                f = a.dEvent;
                c.tab = a.tab;
                c.panel = a.panel
            }, load: function (b) {
                b = a.parseParam({mid: null, page: 1, shouldPicSrc: !1}, b);
                var d = c.panel;
                d.innerHTML = o;
                g && g.destroy();
                g = h.comment({html: D.comment_list, dEvent: f, mid: b.mid, tab: c.tab, shouldPicSrc: b.shouldPicSrc}, d)
            }, destroy: function () {
                if (g) {
                    g.destroy();
                    g = null
                }
            }}
        }(), y, z = !1, A, B, C, D, E = function (b) {
            function c(a, b) {
                return d.getDom(a)[b || 0]
            }

            n = !0;
            var d = y;
            d && d.destroy();
            d = a.ui.mod.tab({templete: b, eventType: "click", currentTab: "tab3", currentClassName: "S_txt1", defaultClassName: "S_txt1"});
            y = d;
            var e = {}, g = function (a, b) {
                var d = r(b);
                typeof d.init == "function" && d.init({mid: C, dEvent: A, tab: c(a, 0), panel: c(a, 1)});
                e[a] = d
            }, h = d.destroy;
            d.destroy = function () {
                h();
                f.undefine(d);
                f.remove(d);
                a.foreach(e, function (a) {
                    a.destroy()
                });
                e = null
            };
            var i = function (b) {
                var d = c("tabarrow");
                d && a.foreach(["tab1", "tab2", "tab3"], function (e) {
                    var f = a.core.dom.dir.parent(c(e), {expr: "li"})[0];
                    if (b === e) {
                        f.appendChild(d);
                        a.addClassName(f, "curr")
                    } else a.removeClassName(f, "curr")
                })
            }, j = function (a, b) {
                b == 2 && (n = !1);
                var c = e[a];
                i(a);
                c.load({mid: C, object_id: k, shouldPicSrc: B})
            };
            f.add(d, "tabIn", function (a, b) {
                j(b, 2)
            });
            g("tab1", v);
            g("tab2", w);
            g("tab3", x);
            j("tab1");
            j("tab3");
            return d
        }, F = function (a) {
            var b = ['<div node-type="content">', '<div class="media_expand S_bg1"   node-type="tab1" style="display:none"></div>', '<div class="WB_feed_repeat S_bg1" node-type="tab2" style="display:none"></div>', '<div class="WB_feed_repeat S_bg1" node-type="tab3" style="display:none"></div>', "</div>"].join("");
            a = (a || "").replace(/>\s\s*</g, "><");
            var c = s.userinfoBox, d = a + b;
            c.innerHTML = "";
            c.appendChild(t(d));
            E(s.userinfoBox)
        }, G = function () {
            if (y) {
                y.destroy();
                y = null
            }
        }, H = function (a) {
            var b = s.userinfoBox;
            b && (b.innerHTML = a)
        }, I = function (b, c) {
            var d = '<div node-type="scroller" class="scroller_box"><div class="inner_box"><div class="WB_feed_type" node-type="userinfoBox"></div></div></div>';
            b.innerHTML = "";
            b.appendChild(t(d));
            A = a.delegatedEvent(b);
            B = c.shouldPicSrc
        }, J = function (a, b) {
            if (!b)H("抱歉，此微博已被删除。"); else {
                D = b;
                C = a.mid;
                k = a.object_id;
                l = a.ref;
                F(b.mblog.html)
            }
        }, K = {update: J, setLoading: function (a) {
            if (!a || !z) {
                G();
                z = a;
                H(a ? o : "")
            }
        }, resize: function (a) {
            var b = s.scroller, c = q(b, "marginTop") + q(b, "marginBottom") + q(b, "borderTopWidth") + q(b, "borderBottomWidth") + q(b, "paddingTop") + q(b, "paddingBottom");
            p(b, "height", Math.max(a.height - c, 0) + "px")
        }, destroy: function () {
            G();
            if (A) {
                A.destroy();
                A = null
            }
        }};
        a.custEvent.define(K, "uplikestatus");
        return function (a, b) {
            I(a, b);
            return K
        }
    });
    STK.register("lib.photoview.source.recommonedlayer", function (a) {
        function g(b, c) {
            c = c || window;
            var d = f(b), e = f(c), g = (e.width - d.width) / 2, h = (e.height - d.height) / 2;
            c === window && (h += a.scrollPos().top);
            b.style.top = (h > 0 ? h : 0) + "px";
            b.style.left = (g > 0 ? g : 0) + "px"
        }

        function f(b) {
            if (b === window)return a.winSize();
            var c, d, e = b.style;
            if (e.display === "none") {
                e.visibility = "hidden";
                e.display = "";
                c = b.offsetWidth;
                d = b.offsetHeight;
                e.display = "none";
                e.visibility = "visible"
            } else {
                c = b.offsetWidth;
                d = b.offsetHeight
            }
            return{width: c, height: d}
        }

        function e(b, c) {
            a.foreach(c, function (c, d) {
                a.setStyle(b, d, c)
            })
        }

        var b = a.tween, c = a.lib.photoview.source, d = c.eventemiter;
        return function (c) {
            function y() {
                if (!!q) {
                    w();
                    f.destroy();
                    z.removeEvents();
                    a.removeNode(i);
                    q = !1;
                    i = null;
                    k = null
                }
            }

            function x() {
                h || g(i, k)
            }

            function w() {
                z.un("load");
                if (!s && !h) {
                    a.removeEvent(document, "click", n);
                    s = !0;
                    b(i, {duration: 300, animationType: "easeoutcubic", end: function () {
                        h = !0;
                        u();
                        i.style.visibility = "hidden";
                        a.removeNode(i)
                    }}).play({opacity: 0}).destroy()
                }
            }

            function p(b, c) {
                var d = function (b) {
                    o = !1;
                    a.lib.dialog.ioError(b.code, b)
                };
                o = !0;
                a.conf.trans.photoview.request("poprecomalbum", {onComplete: a.funcEmpty, onSuccess: function (a) {
                    o = !1;
                    var b = a.data;
                    b && c(b)
                }, onFail: d, onError: d}, b)
            }

            function n(b) {
                b = a.fixEvent(b);
                var c = k, d = b.target;
                c !== d && !a.contains(c, d) && a.contains(document.body, d) && w()
            }

            function m(b) {
                f = b || a.delegatedEvent(i);
                f.add("close", "click", function (b) {
                    w();
                    a.stopEvent(b.evt);
                    return!1
                });
                f.add("refresh", "click", function (b) {
                    w();
                    z.fire("refresh", b);
                    a.stopEvent(b.evt);
                    return!1
                });
                return f
            }

            function l(b) {
                var c = '<div class="layer_album_end"><table><tbody><tr><td>' + b + "</td></tr></tbody></table>" + "</div>", d = a.insertHTML(j, c);
                i = d;
                m();
                return d
            }

            var f = null, h = !0, i = null, j = c, k = c, o = !1, q = !1, r = !1, s = !1, t = {}, u = function () {
                s = !1
            }, v = function (c) {
                if (!(s || !h || o || r)) {
                    var d = function () {
                        h = !1;
                        i.parentNode !== k && k.appendChild(i);
                        x();
                        e(i, {visibility: "visible", opacity: 0});
                        a.addEvent(document, "click", n);
                        s = !0;
                        b(i, {duration: 300, animationType: "easeoutcubic", end: u}).play({opacity: 1}).destroy()
                    };
                    if (!q) {
                        z.once("load", d);
                        p(c, function (a) {
                            var b = a.html;
                            if (b) {
                                q = !0;
                                i = l(b);
                                e(i, {display: "block", visibility: "hidden"});
                                r = !0;
                                setTimeout(function () {
                                    r = !1;
                                    z.fire("load")
                                }, 300)
                            }
                        })
                    } else d()
                }
            }, z = d.extend({show: v, hide: w, resize: x, destroy: y});
            return z
        }
    });
    STK.register("lib.feed.imageLikeWhiteList", function (a) {
        return function () {
            return!0
        }
    });
    STK.register("lib.photoview.index", function (a) {
        function D(a, b) {
            return i(a, {size: b || "mw1024"})
        }

        function C(a, b) {
            return(a = String(a)) ? a.replace(B, function (a) {
                var c = a.length, d = a.substring(1, c - 1), e = b[d];
                return e === undefined ? a : e
            }) : a
        }

        function A(a, b) {
            "use strict";
            if (a.map)return a.map(b);
            if (typeof b != "function")throw TypeError("map need a function");
            var c = a, d = c.length >>> 0, e = Array(d);
            for (var f = 0; f < d; f++)f in c && (e[f] = b.call(null, c[f], f, c));
            return e
        }

        function z(a, b) {
            return c(a, b || 1)
        }

        var b = a.lib.feed.imageLikeWhiteList(), c = window.setTimeout, d = a.lib.photoview.source, e = d.channel, f = a.conf.trans.photoview, g = d.util, h = a.ui.alert, i = a.lib.kit.extra.imageURL, j = a.preventDefault, k = a.funcEmpty, l = a.tween, m = a.setStyle, n = a.addClassName, o = a.lib.kit.extra.language, p, q, r = g.throttle, s = g.debounce, t = g.mix, u = Math.max, v = Math.min, w = function (a, b) {
            var c = a.length;
            while (c--)if (b(a[c]))return c;
            return-1
        }, x = function (b, c) {
            var d = 0;
            switch (c) {
                case"height":
                    d = b.offsetHeight;
                    break;
                case"width":
                    d = b.offsetWidth
            }
            d || (d = parseInt(a.getStyle(b, c), 10));
            return isNaN(d) ? 0 : d
        }, y = function (a) {
        }, B = /\{\w[\w.]*?\}/g, E = '<#et temp data>' +
            '<div class="W_layer layer_multipic_preview" node-type="outer">' +
            '<div node-type="box" class="multipic_preview">' +
            '<a role="button" action-type="close" href="#" class="close" title="#L{关闭}">&times;</a>' +
            '<div node-type="scroller" class="scroller"><div node-type="inner" class="inner clearfix"><div node-type="userinfo" class="info_box W_fr S_bg2"></div><div node-type="desktop" class="pic_box"><div node-type="display" class="pic_show_box"><div node-type="loader" class="pic"></div><div node-type="wrapIcon" class="pos_icon">' + (b ? '<div class="pos_margin" node-type="likeBtn" style="display:none;" action-type="image_like" action-data="mid=${data.mid}&photo_id=${data.pid}&is_liked=${data.is_liked}&count=${data.count}&object_id=${data.object_id}&ref=${data.ref}"><#if (data.is_liked)><a href="javascript:" class="W_btn_alpha" title="#L{取消赞}"><i class="icon_praised"></i><span node-type="count">(${data.count})</span></a><#else><a href="javascript:" class="W_btn_alpha" title="#L{赞}"><i class="icon_praise"></i><span node-type="count">(${data.count})</span></a></#if></div>' : "") + '<a suda-data="key=big_pic_cover&value=magnify_pic" node-type="togglesize" action-type="togglesize" href="javascript:" class="W_btn_alpha"><i class="icon_narrow"></i><span>#L{适应页面}</span></a>' + '<a suda-data="key=big_pic_cover&value=check_pic" node-type="maximum" action-type="maximum" href="javascript:" class="W_btn_alpha" title="#L{查看原图}" suda-uatrack="key=tblog_newimage_feed&value=view_original"><i class="icon_maximum"></i><span>#L{查看原图}</span></a>' + "</div>" + "</div>" + '<div node-type="carousel" class="pic_choose_box">' + '<div node-type="prev" class="arrow_boxL"><a href="javascript:;" class="arrow_left_small" title="#L{上一页}"><em class="ico_pic_prev">&lt;</em></em></a></div>' + '<div node-type="clip" class="stage_box"><ul node-type="list" class="choose_box clearfix"></ul></div>' + '<div node-type="next" class="arrow_boxR"><a href="javascript:;" class="arrow_right_small" title="#L{下一页}"><em class="ico_pic_next">&gt;</em></em></a></div>' + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</#et>", F = !1, G = !1, H, I, J, K, L = null, M, N, O, P, Q, R, S, T, U, V = !1, W, X, Y, Z, $, _, ba = function (b) {
            var c, e = r(function (a) {
                !V && M[a] && i(a) && bm(M[a], k, a)
            }, 300), f = function () {
                c && clearTimeout(c);
                c = z(function () {
                    e(j())
                }, 1e3)
            }, g = function () {
                var a = 2, b = 3, c = 0, d = [], e = {};
                H.on("hide", function () {
                    e = {};
                    d = []
                });
                var f = function (a) {
                    var b = new Image;
                    c++;
                    e[a] = 1;
                    b.onload = b.onerror = function () {
                        b = b.onload = b.onerror = null;
                        c--;
                        g()
                    };
                    b.src = a
                }, g = function () {
                    var b;
                    while (c < a && d.length) {
                        b = d.pop();
                        e[b] || f(b)
                    }
                }, h = function () {
                    c = 0;
                    g()
                }, i = function (a) {
                    return D(a.data.pid)
                };
                return function () {
                    var a = u.get("numItems"), c = u.get("selectedItem"), e = b, f = 0, g = 0;
                    c === -1 && (c = 0);
                    f = c - e;
                    f = f > 0 ? f : 0;
                    g = c + e + 1;
                    g = g > a ? a : g;
                    d = A(u.slice(f, g), i);
                    h()
                }
            }(), h = function () {
                if (_) {
                    W ? _.innerHTML = +(X || 0) != 0 ? o('<a href="javascript:" class="W_btn_alpha" title="#L{取消赞}"><i class="icon_praised"></i><span>(' + (X || 0) + ")</span></a>") : o('<a href="javascript:" class="W_btn_alpha" title="#L{取消赞}"><i class="icon_praised"></i></a>') : _.innerHTML = +(X || 0) != 0 ? o('<a href="javascript:" class="W_btn_alpha" title="#L{赞}"><i class="icon_praise"></i><span>(' + (X || 0) + ")</span></a>") : o('<a href="javascript:" class="W_btn_alpha" title="#L{赞}"><i class="icon_praise"></i><span>#L{赞}</span></a>');
                    _.setAttribute("action-data", "ref=" + p + "&mid=" + Z + "&photo_id=" + $ + "&is_liked=" + W + "&count=" + (X || 0) + "&object_id=" + Y)
                }
            }, i = function (a) {
                var b = u.get("firstVisible"), c = u.get("scrollIncrement");
                if (a === "next") {
                    var d = u.get("numItems"), e = u.get("numVisible"), f = b + e;
                    f = f > d - 1 ? d - 1 : f;
                    return f + c >= d
                }
                return b - c <= 0
            }, j = function () {
                var a = u.get("firstVisible"), b = u.get("selectedItem"), c = u.get("numItems"), d = a + u.get("numVisible");
                d = d > c - 1 ? c - 1 : d;
                return d - b < b - a ? "next" : "prev"
            }, n = function () {
                return!M.next
            }, q = function () {
                return!!M.prev || !u.isBOF()
            }, s = function () {
                return!!M.next || !u.isEOF()
            }, t = function () {
                g();
                h()
            }, u = d.carousel(b, {itemSize: 60, itemMargin: 5, numVisible: 20, scrollIncrement: 10, itemTemplate: '<a href="javascript:;" suda-uatrack="key=tblog_newimage_feed&value=left_right_nextpage"><img src="about:blank"></a>', CLASSES: {SELECTED_ITEM: "current", PREV_DISABLED: "btn_pic_prevdis", NEXT_DISABLED: "btn_pic_nextdis"}}).on("itemLoad", function (b, c) {
                var d = c.data, e = c.prev, f = c.next, g = d.data, h = g.pid, i = d.el, j = D(h, "square"), k = new Image;
                k.onload = k.onerror = function () {
                    var b = a.sizzle("img", i)[0];
                    k = k.onload = k.onerror = null;
                    b.src = j;
                    b = null
                };
                k.src = j
            }).on("itemSelected", function (a, b) {
                var c = b.data, d = c.pid, e = c.mid, g = D(d);
                W = +c.is_liked, X = c.likecount, Y = c.object_id;
                Z = e, $ = d;
                I.load(g, t);
                f();
                bp(c)
            }).on("afterScroll", function (a, b) {
                var c = b.dir === "forward" ? "next" : "prev";
                e(c)
            }).on("itemsRemoved", function () {
                var a = "next", b = M[a];
                if (!b) {
                    a = "prev";
                    b = M[a];
                    b || (a = "")
                }
                !V && a && i(a) && bm(b, function () {
                    u.flush()
                }, a)
            });
            u.set("prevStateFn", q);
            u.set("nextStateFn", s);
            u.set("prevClick", function (a) {
                e("prev")
            });
            u.set("nextClick", function (a) {
                e("next")
            });
            var v = !1, w = !1, y = {duration: 300, animationType: "easeoutcubic", end: function () {
                w = !1
            }}, B = r(function (a) {
                if (!w && !!v) {
                    var b = a.get("element"), c = x(b, "height");
                    v = !1;
                    w = !0;
                    var d = function () {
                        m(b, "bottom", 0 - c + "px");
                        l(b, y).play({bottom: 0, opacity: 1}).destroy()
                    };
                    a.isAnimating() ? a.once("afterScroll", d) : d()
                }
            }, 400), C = r(function (a, b) {
                if (!w && !v) {
                    var c = a.get("element"), d = x(c, "height");
                    v = !0;
                    if (!b) {
                        w = !0;
                        var e = function () {
                            m(c, "bottom", 0);
                            l(c, y).play({bottom: 0 - d, opacity: 0}).destroy()
                        };
                        a.isAnimating() ? a.once("afterScroll", e) : e()
                    } else m(c, "bottom", 0 - d + "px")
                }
            }, 400);
            u.toggle = function (a, b) {
                a ? B(u) : C(u, b)
            };
            u.isEnd = function () {
                if (n()) {
                    var a = u.get("numItems"), b = u.get("selectedItem");
                    return a && u.isEOF() && b === a - 1
                }
                return!1
            };
            u.preload = function () {
                f()
            };
            return u
        }, bb = function (b, c) {
            var f = !0, g = null, h = !1, i = H.getDom("maximum"), j = H.getDom("togglesize"), k = H.getDom("wrapIcon");
            _ = H.getDom("likeBtn");
            var l = function (a) {
                h = a;
                var b = a ? "" : "none";
                m(k, "display", b)
            }, n = function (b) {
                g = b;
                var c = b.width + bd, d = b.height;
                if (f) {
                    var e = H.get("limits"), h = H.get("screen"), i = H.get("size"), k = a.winSize(), l = c, m = d, n = e.minWidth, p = k.width - H.getOffset("x");
                    c = u(v(c, e.maxWidth), n);
                    c = u(c, i[0]);
                    c >= n && c > p && (c = p);
                    if (c < l) {
                        var q = (l - 290) / m;
                        d = (c - 290) / q
                    }
                    d = u(d, h[1]);
                    H.setSize(c, d)
                } else H.resize();
                j.title = o(f ? "#L{适应页面}" : "#L{放大图片}");
                a.sizzle("i", j)[0].className = f ? "icon_narrow" : "icon_enlarge";
                a.sizzle("span", j)[0].innerHTML = o(f ? "#L{适应页面}" : "#L{放大图片}")
            }, p = function (b) {
                var c = b.relatedTarget, d = b.fromElement;
                if (!c || d && d === b.target) {
                    c = b.toElement || d;
                    b.relatedTarget = c
                }
                return c == null ? !0 : c ? c !== this && c.prefix !== "xul" && this !== document && !a.contains(this, c) : !1
            }, w = function (a, b) {
                p.call(a.currentTarget || this, a) && bf[b ? "stop" : "start"]()
            }, y = function (a) {
                w.apply(this, [a, !1])
            }, z = function (a) {
                w.apply(this, [a, !0])
            }, A = d.imagedisplay(b, c).on("show", function () {
                var b = J && J.get("element");
                if (b) {
                    a.addEvent(b, "mouseout", y);
                    a.addEvent(b, "mouseover", z);
                    A.once("hide", function () {
                        a.removeEvent(b, "mouseout", y);
                        a.removeEvent(b, "mouseover", z)
                    })
                }
            }).on("navigate", function (a, b) {
                var c = b.dir, d = -1;
                d = J.get("selectedItem") + (c === "left" ? -1 : 1);
                if (c !== "left" && !bg() && J.isEnd()) {
                    bh();
                    J.once("itemSelected", bi)
                }
                d > -1 && J.setSelectedItem(d);
                bc("left_right_nextpage")
            }).on("load", function (a, b) {
                b.height / b.width > 2 ? f = !0 : f = !1;
                n(b)
            }).on("hide", function (a) {
                f = !0
            }).on("mousemove", r(function (a, c) {
                var d = 95, e = x(b, "height"), f = c.y > e - d ? 1 : 0;
                bf[f ? "show" : "start"]();
                h || l(1)
            }, 50)).on("mouseout", function (b, c) {
                l(0);
                var d = c.relatedTarget, e = J.get("element");
                e && (d === e || a.contains(e, d)) && bf.stop()
            }).on("mouseover", s(function (a, b) {
                l(1)
            }, 90)), B = H.getDelegate();
            B.add("maximum", "click", function (a) {
                var b = t({}, U), c = C("http://photo.weibo.com/{uid}/wbphotos/large/mid/{mid}/pid/{pid}", b);
                window.open(c);
                return!1
            });
            var D = function (b) {
                if (g) {
                    f = !f;
                    n(g);
                    q && q.destroy();
                    var c = a.sizzle("img", H.getDom("loader"))[0];
                    q = a.lib.image.multiimage.showtag({img: c, postdata: {mid: Z, pid: $}, fromLayer: !0})
                }
            };
            B.add("togglesize", "click", function () {
                D()
            });
            var E = function (b) {
                var c = b.el, d = b.data, f = +d.is_liked ? !0 : !1, g = d.count;
                f ? g-- : g++;
                var h = g > 0 ? g : 0, i;
                f ? i = h != 0 ? o('<a class="W_btn_alpha" title="#L{赞}" href="javascript:"><span><i class="W_ficon ficon_praised">ñ</i><em>' + h + "</em></span></a>") : o('<a class="W_btn_alpha" title="#L{赞}" href="javascript:"><span><i class="W_ficon ficon_praised">ñ</i></span></a>') : i = h != 0 ? o('<a class="W_btn_alpha" title="#L{取消赞}" href="javascript:"><span class="W_praised"><i class="W_ficon ficon_praised">ñ</i><em>' + h + "</em></span></a>") : o('<a class="W_btn_alpha" title="#L{取消赞}" href="javascript:"><span class="W_praised"><i class="W_ficon ficon_praised">ñ</i></span></a>');
                c.innerHTML = i;
                var j = a.lib.kit.extra.actionData(c);
                j.set("count", h);
                j.set("is_liked", f ? 0 : 1);
                e.fire("likeChangedFromLayer", {isDel: f, num: h});
                J.rewriteItem({is_liked: f ? "0" : "1", count: h})
            };
            B.add("image_like", "click", E);
            var F = function (b) {
                var c = b.isDel, d = b.count, e = _, f;
                c ? f = _count != 0 ? o('<a class="W_btn_alpha" title="#L{赞}" href="javascript:"><span><i class="W_ficon ficon_praised">ñ</i><em>' + _count + "</em></span></a>") : o('<a class="W_btn_alpha" title="#L{赞}" href="javascript:"><span><i class="W_ficon ficon_praised">ñ</i></span></a>') : f = _count != 0 ? o('<a class="W_btn_alpha" title="#L{取消赞}" href="javascript:"><span class="W_praised"><i class="W_ficon ficon_praised">ñ</i><em>' + _count + "</em></span></a>") : o('<a class="W_btn_alpha" title="#L{取消赞}" href="javascript:"><span class="W_praised"><i class="W_ficon ficon_praised">ñ</i></span></a>');
                e.innerHTML = f;
                var g = a.lib.kit.extra.actionData(e);
                g.set("count", d);
                g.set("is_liked", c ? 0 : 1);
                J.rewriteItem({is_liked: c ? "0" : "1", count: d})
            };
            e.register("updateLayerLikeBtn", F);
            return A
        }, bc = function (a, b) {
            if (!b) {
                b = a;
                a = "tblog_newimage_feed"
            }
            var c = window.SUDA;
            c && c.uaTrack && c.uaTrack(a, b)
        }, bd = 290, be = function (b, c) {
            F = !0;
            p = c.pic_like_src || "layer";
            H = d.overlayer(E, {limits: {maxWidth: 1314, maxHeight: 710, minWidth: 740, minHeight: 400}, offset: [30, 80], pid: c.pid, mid: c.mid, ref: p, pic_objects: c.pic_objects});
            var e = H.getOuter(), f = H.getDom("count");
            f && f.innerHTML == "(0)" && a.removeNode(f);
            var g = 0;
            H.on("resize", function (a, b) {
                var c = b.width - bd, d = b.height, e = H.getDom("desktop");
                m(e, "width", c + "px");
                m(e, "height", d + "px");
                var f = H.getOuter();
                f.scrollTop = 0;
                if (g !== c) {
                    g = c;
                    J.resize()
                }
                I.resize(c, d);
                K.resize(b);
                L && L.resize()
            });
            H.on("hide", function () {
                bq();
                I.hide();
                _ && (_.style.display = "none");
                q && q.destroy();
                J.toggle(0, !0);
                J.clear();
                bi()
            });
            I = bb(H.getDom("display"), e);
            I.on("navigate", function () {
                q && q.destroy()
            });
            J = ba(H.getDom("carousel"));
            K = d.userinfo(H.getDom("userinfo"), {shouldPicSrc: c.picSrc == "photo" ? !0 : !1});
            a.custEvent.add(K, "uplikestatus", function (b, c) {
                W = c.is_liked;
                X = c.like_counts;
                if (_) {
                    var d = c.like_counts || 0;
                    c.is_liked ? _.innerHTML = d != 0 ? o('<a class="W_btn_alpha" title="#L{取消赞}" href="javascript:"><span class="W_praised"><i class="W_ficon ficon_praised">ñ</i><em>' + d + "</em></span></a>") : o('<a class="W_btn_alpha" title="#L{取消赞}" href="javascript:"><span class="W_praised"><i class="W_ficon ficon_praised">ñ</i></span></a>') : _.innerHTML = d != 0 ? o('<a class="W_btn_alpha" title="#L{赞}" href="javascript:"><span><i class="W_ficon ficon_praised">ñ</i><em>' + d + "</em></span></a>") : o('<a class="W_btn_alpha" title="#L{赞}" href="javascript:"><span><i class="W_ficon ficon_praised">ñ</i></span></a>');
                    _.setAttribute("action-data", "ref=" + p + "&mid=" + Z + "&photo_id=" + $ + "&is_liked=" + c.is_liked + "&count=" + (c.like_counts || 0) + "&object_id=" + Y);
                    _.style.display = ""
                }
                q && q.destroy();
                var e = a.sizzle("img", H.getDom("loader"))[0];
                q = a.lib.image.multiimage.showtag({img: e, postdata: {mid: Z, pid: $}, fromLayer: !0})
            });
            H.once("destroy", function () {
                H.hide();
                J.destroy();
                I.destroy();
                K.destroy();
                H = null;
                J = null;
                K = null;
                I = null
            })
        }, bf = function () {
            function f() {
                b || (b = c(function () {
                    J.toggle(0);
                    b = null
                }, 3e3))
            }

            function e() {
                if (G) {
                    d();
                    J.toggle(1);
                    !a.lib.kit.touch.cantouch && f()
                }
            }

            function d() {
                if (b) {
                    clearTimeout(b);
                    b = null
                }
            }

            var b = null, g = function () {
                e()
            };
            t(g, {show: e, start: f, stop: d});
            return g
        }(), bg = function () {
            return!!U.multiuser
        }, bh = function () {
            if (!L) {
                L = d.recommonedlayer(H.getDom("desktop"));
                L.on("refresh", function () {
                    J.setSelectedItem(0)
                })
            }
            L.show({uid: U.uid})
        }, bi = function () {
            L && L.hide()
        }, bj = function (a) {
            var b = U.pid, c = U.mid, d = w(a, function (a) {
                return a.pid === b && a.mid === c
            });
            d === -1 && (d = 0);
            J.set("selectedItem", d);
            J.flush()
        }, bk = function (a, b) {
            F || be(document.body, a);
            bq(a);
            H.show();
            a = t({mid: "", pid: "", type: 0, uid: $CONFIG.uid, page_id: $CONFIG.page_id, pic_like_src: null}, a);
            U = a;
            I.load(D(a.pid));
            G = !1;
            J.render();
            J.toggle(!1, !0);
            K.setLoading(1);
            bm(a, function (a) {
                if (a) {
                    bj(a.pic_list);
                    G = !0;
                    bf()
                }
            })
        }, bl = function () {
            if (F) {
                F = !1;
                H.destroy();
                H = null
            }
        }, bm = function (a, b, d) {
            if (!V) {
                var e = function () {
                    c(function () {
                        V = !1
                    }, 500)
                }, g = function (a) {
                    e();
                    y(a)
                };
                a.uid = U.uid;
                var h = !1;
                V = !0;
                (function i(a, b) {
                    f.request("list", {onError: g, onFail: g, onComplete: k, onSuccess: function (a) {
                        if (!(a = a.data)) {
                            if (!h) {
                                M = {prev: 0, next: 0};
                                h = !0;
                                var c = {type: 0, mid: S, pid: T, uid: U.uid};
                                i(c, function (a) {
                                    a && bj(a.pic_list)
                                });
                                return
                            }
                        } else {
                            bn({prev: a.pic_prev, next: a.pic_next, direction: d});
                            (h || !d) && J.clear();
                            J.addItems(a.pic_list, d === "prev");
                            b && b(a)
                        }
                        e()
                    }}, a)
                })(a, b)
            }
        }, bn = function (a) {
            var b = a.direction, c = a.prev, d = a.next, e = -1;
            b === "next" && (c = e);
            b === "prev" && (d = e);
            c !== e && (M.prev = c);
            d !== e && (M.next = d)
        }, bo = function (a) {
            S = a.mid;
            T = a.pid
        }, bp = function (a) {
            if (!!a.mid) {
                t(U, a);
                z(function () {
                    bu(a)
                })
            }
        }, bq = function (a) {
            a && (p = a.pic_like_src || "layer");
            R = "";
            S = "";
            T = "";
            M = {prev: 0, next: 0};
            N = {};
            O = {};
            P = {};
            Q = {};
            V = !1;
            if (a) {
                var b = decodeURIComponent(a.pic_objects);
                b = b.split(",");
                var c = [], d = [], e = [], f = [];
                for (var g = 0, h = b.length; g < h; g++) {
                    var i = b[g];
                    i = i.split("|");
                    c.push(i[0]);
                    d.push(i[1]);
                    e.push(i[2]);
                    f.push(i[3])
                }
                var j = 0;
                for (var k = 0, l = c.length; k < l; k++)if (c[k] == a.pid) {
                    j = k;
                    break
                }
            }
        }, br = function (a) {
            t(N, a.mblog_list);
            t(O, a.comment_list);
            t(P, a.mblog_like_list);
            t(Q, a.repost_list)
        }, bs = function (a) {
            return N[a] ? {mid: a, mblog: N[a], like_list: P[a], comment_list: O[a], repost_list: Q[a]} : null
        }, bt = function (a, b, c) {
            f.request("bloginfo", {onComplete: k, onError: c, onFail: c, onTimeout: c, onSuccess: b}, {mids: a})
        }, bu = function (a) {
            var b = a.mid, c = a.pid, d = a.object_id, e = function (a, b) {
                try {
                    K.setLoading(0);
                    K.update(a, b)
                } catch (c) {
                }
            };
            if (R === b)e({mid: b, object_id: d, ref: p}, bs(b)); else {
                R = b;
                var f = function (a, b) {
                    e(a, null);
                    J.removeItems(J.filter(function (b) {
                        return b.data.mid === a
                    }))
                }, g = !1, h = bs(b);
                if (h && g)e({mid: b, object_id: d, ref: p}, h); else {
                    K.setLoading(1);
                    bt(b, function (a) {
                        var g = a.data, h = g.mblog_list, i = h && h.hasOwnProperty(b);
                        i && br(g);
                        z(function () {
                            if (b === R)if (i) {
                                bo({mid: b, pid: c});
                                e({mid: b, object_id: d, ref: p}, bs(b))
                            } else f(b, g)
                        })
                    })
                }
            }
        }, bv = !1;
        return{show: function (b, c) {
            if (bv)return!1;
            var d = b.mid;
            bt(d, function (a) {
                bv = !1;
                var e = a.data, f = e.mblog_list, g = f && f.hasOwnProperty(d);
                g ? bk(b, c) : h(o("#L{抱歉，此微博已被删除}。"))
            }, function (b) {
                bv = !1;
                a.lib.dialog.ioError(b.code, b)
            })
        }, hide: function () {
            H && H.hide()
        }, destroy: bl}
    });
    STK.register("pl.base.source.widgetsource.photoview", function (a) {
        return function (b) {
            var c = a.lib.photoview.index, d = function (b) {
                var d = b.evt;
                d.type && a.preventDefault(d);
                c.show(b.data, d)
            };
            b.add("widget_photoview", "click", d);
            b.add("images_view_tobig", "click", d);
            var e = {};
            e.destroy = function () {
                b.remove("widget_photoview", "click", d);
                b.remove("images_view_tobig", "click", d);
                c && c.destroy()
            };
            return e
        }
    });
    STK.register("lib.follow.followButton", function (a) {
        function i(c, d, e) {
            a.foreach(h, function (b) {
                a.removeClassName(c, b)
            });
            a.foreach([].concat(d[1]), function (b) {
                a.addClassName(c, b)
            });
            e === !1 ? c.innerHTML = b(d[0]) : a.ui.badge(c, b(d[0]));
            c.setAttribute("action-type", d[2])
        }

        var b = a.lib.kit.extra.language, c = a.templet, d = a.conf.channel.follow, e = a.lib.kit.extra.merge, f = a.lib.kit.dom.hover, g = {0: {temp_follow: ['<em class="W_ficon ficon_right S_ficon">Y</em>#L{已关注}<em class="W_ficon ficon_arrow_down_lite S_ficon">g</em>', "W_btn_d", "unFollow"], temp_followBoth: ['<em class="W_ficon ficon_addtwo S_ficon">Z</em>#L{互相关注}<em class="W_ficon ficon_arrow_down_lite S_ficon">g</em>', "W_btn_d", "unFollow"], temp_unfollow: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_c", "follow"], temp_unfollowFan: ['<em class="W_ficon ficon_right S_ficon">Y</em><em class="W_vline S_line1"></em><em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_c", "follow"], temp_block: ["#L{解除黑名单}", "W_btn_d", "unBlock"], temp_loading: ['<i class="W_loading"></i>#L{关注中}', "W_btn_c", "noop"], temp_loading2: ['<i class="W_loading"></i>#L{取消关注中}', "W_btn_d", "noop"], temp_layer: ['<div class="layer_menu_list_b" style="position:absolute;z-index:3000;"><div class="list_wrap"><div class="list_content W_f14"><ul class="list_ul"><li action-type="ok" class="item"><a href="javascript:void(0);" class="tlink S_txt1">#L{取消关注}</a></li><li class="item" action-type="setGroup"><a href="javascript:void(0);" class="tlink S_txt1">#L{设置分组}</a></li></ul></div></div>'], temp_layerOffset: {x: 1, y: 2, width: 0}}, 1: {temp_follow: ['<em class="W_ficon ficon_right">Y</em>#L{已关注}<em class="W_ficon ficon_arrow_down_lite">g</em>', "W_btn_b", "unFollow"], temp_followBoth: ['<em class="W_ficon ficon_addtwo">Z</em>#L{互相关注}<em class="W_ficon ficon_arrow_down_lite">g</em>', "W_btn_b", "unFollow"], temp_unfollow: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "follow"], temp_unfollowFan: ['<em class="W_ficon ficon_right">Y</em><em class="W_vline S_line1"></em><em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "follow"], temp_block: ["#L{解除黑名单}", "W_btn_b", "unBlock"], temp_loading: ['<i class="W_loading"></i>#L{关注中}', "W_btn_b", "noop"], temp_loading2: ['<i class="W_loading"></i>#L{取消关注中}', "W_btn_b", "noop"], temp_layer: ['<div class="layer_menu_list" style="position:absolute;z-index:3000;"><ul><li action-type="ok"><a href="javascript:void(0);">#L{取消关注}</a></li><li action-type="setGroup"><a href="javascript:void(0);">#L{设置分组}</a></li></ul></div>']}, 2: {temp_follow: ["#L{已关注}", ["W_btn_b", "W_btn_b W_btn_b_disable"], "noop"], temp_followBoth: ["#L{已关注}", ["W_btn_b", "W_btn_b W_btn_b_disable"], "noop"], temp_unfollow: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "follow"], temp_unfollowFan: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "follow"], temp_block: ["#L{解除黑名单}", "W_btn_b", "unBlock"], temp_loading: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "noop"], temp_loading2: ["#L{已关注}", "W_btn_b", ""], temp_layer: [""]}, 3: {temp_follow: ['<em class="W_ficon ficon_right">Y</em>#L{已关注}', "W_btn_b W_btn_b_disable", "noop"], temp_followBoth: ['<em class="W_ficon ficon_right">Y</em>#L{已关注}', "W_btn_b W_btn_b_disable", "noop"], temp_unfollow: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "follow"], temp_unfollowFan: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "follow"], temp_block: ["#L{解除黑名单}", "W_btn_b", "unBlock"], temp_loading: ['<i class="W_loading"></i>#L{关注中}', "W_btn_b", "noop"], temp_loading2: ['<i class="W_loading"></i>#L{取消关注中}', "W_btn_b", "noop"], temp_layer: [""]}, 4: {temp_follow: ['<em class="W_ficon ficon_right">Y</em>#L{已关注}<em class="W_ficon ficon_arrow_down_lite">g</em>', "W_btn_b", "unFollow"], temp_followBoth: ['<em class="W_ficon ficon_addtwo">Z</em>#L{互相关注}<em class="W_ficon ficon_arrow_down_lite">g</em>', "W_btn_b", "unFollow"], temp_unfollow: ['<em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_b", "follow"], temp_unfollowFan: ['<em class="W_ficon ficon_right">Y</em><em class="W_vline S_line1"></em><em class="W_ficon ficon_add">+</em>#L{关注}', "W_btn_c", "follow"], temp_block: ["#L{解除黑名单}", "W_btn_b", "unBlock"], temp_loading: ['<i class="W_loading"></i>#L{关注中}', "W_btn_b", "noop"], temp_loading2: ['<i class="W_loading"></i>#L{取消关注中}', "W_btn_b", "noop"], temp_layer: ['<div class="layer_menu_list_b" style="position:absolute;z-index:3000;"><div class="list_wrap"><div class="list_content W_f14"><ul class="list_ul"><li action-type="ok" class="item"><a href="javascript:void(0);" class="tlink S_txt1">#L{取消关注}</a></li><li class="item" action-type="setGroup"><a href="javascript:void(0);" class="tlink S_txt1">#L{设置分组}</a></li></ul></div></div>'], temp_layerOffset: {x: 1, y: 2, width: 0}}}, h = ["W_btn_a", "W_btn_b", "W_btn_c", "W_btn_d", "W_btn_a_disable", "W_btn_b_disable", "W_btn_c_disable", "W_btn_d_disable"], j = function (a, b) {
            if (a.type != "mouseout" && a.type != "mouseover")return!1;
            var c = a.relatedTarget ? a.relatedTarget : a.type == "mouseout" ? a.toElement : a.fromElement;
            while (c && c != b)c = c.parentNode;
            return c != b
        };
        return function (c) {
            function q(a) {
                return c.extraPostData ? e(a, typeof c.extraPostData == "function" ? c.extraPostData() : c.extraPostData) : a
            }

            var h = {}, c = a.parseParam({outer: null, outNodeExpr: '[node-type="followBtnBox"]', refer_sort: "", refer_flag: "", extraPostData: {}, needSync: !1, followOpts: null}, c), k, l = null, m = a.lib.follow.utils.follow(c.followOpts), n = a.lib.dialog.setGroup, o = a.ui.confirm, p = a.delegatedEvent(c.outer), r = function (b) {
                return a.core.dom.dir.parent(b, {expr: c.outNodeExpr})[0]
            }, s = {"click:follow": function (b) {
                a.preventDefault();
                var d = r(b.el);
                if (!!d) {
                    var e = b.el, f = a.queryToJson(d.getAttribute("action-data") || ""), j = d.innerHTML, o, p = f.template || "0";
                    f.onSuccessCb = function (b) {
                        var c = b.relation, d = c && c.follow_me == 1;
                        i(l = e, g[p][d ? "temp_followBoth" : "temp_follow"]);
                        a.custEvent.fire(h, "change", {state: "follow", spec: b});
                        b.groupList = b.group;
                        b.fromFollow = !0;
                        if (!b.nogroup) {
                            k || (k = n());
                            setTimeout(function () {
                                k.show(b);
                                a.custEvent.fire(h, "showDialog")
                            }, 700)
                        }
                    };
                    f.onFailCb = function (b) {
                        o && (d.innerHTML = o);
                        a.custEvent.fire(h, "showDialog")
                    };
                    f.onRelease = function () {
                        d.innerHTML = j
                    };
                    setTimeout(function () {
                        o = d.innerHTML;
                        i(e, g[p].temp_loading, !1);
                        f.refer_sort = f.refer_sort || c.refer_sort;
                        f.refer_flag = f.refer_flag || c.refer_flag;
                        f = q(f);
                        if (f.proxy_api) {
                            f.api = f.proxy_api;
                            delete f.proxy_api;
                            a.lib.follow.utils.follow({transNameFollow: "proxy"}).follow(f)
                        } else m.follow(f)
                    }, 0)
                }
            }, "mouseout:unFollow": function (b) {
                a.preventDefault();
                if (!!j(b.evt, b.el)) {
                    var c = r(b.el);
                    if (c) {
                        clearTimeout(c.t);
                        c.t = null
                    }
                }
            }, "mouseover:unFollow": function (b) {
                a.preventDefault();
                if (!!j(b.evt, b.el)) {
                    var c = r(b.el);
                    if (!c)return;
                    c.confirm || (c.t = setTimeout(function () {
                        var d = b.el, e = a.queryToJson(c.getAttribute("action-data") || ""), j = c.innerHTML, o = e.template || "0", p, r;
                        if (!!g[o].temp_layer[0]) {
                            e.onSuccessCb = function (b) {
                                var c = b.relation, e = c && c.follow_me == 1;
                                i(l = d, g[o][e ? "temp_unfollowFan" : "temp_unfollow"]);
                                a.custEvent.fire(h, "change", {state: "unfollow", spec: b})
                            };
                            e.onFailCb = function (a) {
                                p && (c.innerHTML = p)
                            };
                            var s = function () {
                                p = c.innerHTML;
                                i(d, g[o].temp_loading2, !1);
                                e.refer_sort = "";
                                e = q(e);
                                m.unFollow(e);
                                c.hover.destroy();
                                c.confirm.hide();
                                setTimeout(function () {
                                    c.confirm.hide();
                                    c.confirm.destroy();
                                    c.confirm = null
                                }, 100)
                            }, t = function (b) {
                                var c = a.core.util.browser.IE6 ? "width" : "minWidth", e = g[o].temp_layerOffset ? g[o].temp_layerOffset.width | 0 : 0;
                                b.style[c] = d.offsetWidth - (parseInt(a.getStyle(b, "padding-left")) || 0) - (parseInt(a.getStyle(b, "padding-right")) || 0) - (parseInt(a.getStyle(b, "border-left")) || 0) - (parseInt(a.getStyle(b, "border-right")) || 0) + e + "px"
                            };
                            c.confirm = a.ui.mlayer(g[o].temp_layer[0], {stopClickPropagation: !0}).on("ok", "click", s).on("setGroup", "click", function () {
                                k || (k = n());
                                k.show(e);
                                c.confirm.hide();
                                a.custEvent.fire(h, "showDialog")
                            });
                            c.hover = f({act: d, extra: [c.confirm.getBox()], delay: 200, isover: !0, onmouseover: function () {
                                c.confirm.getState() || t(c.confirm.show().beside(d, {pos: "bottom-left", offsetX: u, offsetY: v}).getBox())
                            }, onmouseout: function () {
                                c.confirm.hide();
                                clearTimeout(r)
                            }});
                            var u = g[o].temp_layerOffset ? g[o].temp_layerOffset.x | 0 : 0, v = g[o].temp_layerOffset ? g[o].temp_layerOffset.y | 0 : 0;
                            t(c.confirm.show().beside(d, {pos: "bottom-left", offsetX: u, offsetY: v}).getBox())
                        }
                    }, 200))
                }
            }, "click:unBlock": function (c) {
                var d = r(c.el);
                if (!!d) {
                    var e = c.el, f = a.queryToJson(d.getAttribute("action-data") || ""), g = d.innerHTML, i = f.template || "0";
                    f.onSuccessCb = function () {
                        window.location.reload()
                    };
                    var j = function () {
                        f = q(f);
                        m.unBlock(f)
                    };
                    o(b("#L{确认将此用户从你的黑名单中移除吗？}"), {OK: j});
                    a.custEvent.fire(h, "showDialog")
                }
            }}, t = function (b) {
                var d = b.uid, e = b.objectid, f = b.action.toLowerCase(), h = b.both, j = b.fan, k = a.sizzle(c.outNodeExpr, c.outer);
                for (var m = 0, n = k.length; m < n; m++) {
                    var o = k[m], p = a.sizzle("[action-type=noop],[action-type=follow],[action-type=unFollow],[action-type=unBlock]", o)[0], q = a.queryToJson(o.getAttribute("action-data")), r = q.template || "0";
                    l != p && (q.uid && q.uid == d || q.objectid && q.objectid == e) && (f == "unfollow" ? i(p, g[r][j ? "temp_unfollowFan" : "temp_unfollow"], !1) : f == "unblock" ? i(p, g[r].temp_unfollow, !1) : f == "follow" && i(p, g[r][h ? "temp_followBoth" : "temp_follow"], !1))
                }
                l = null
            }, u = function () {
                a.custEvent.define(h, ["change", "showDialog"]);
                a.foreach(s, function (a, b) {
                    b = b.split(":");
                    p.add(b[1], b[0], a)
                });
                c.needSync && d.register("changeStatus", t)
            }, v = function () {
                if (c.outer) {
                    a.foreach(s, function (a, b) {
                        p.remove(b, "click", a)
                    });
                    p.destroy()
                }
                c.needSync && d.remove("changeStatus", t)
            }, w = function () {
                c.outer && u()
            };
            w();
            h.destroy = v;
            return h
        }
    });
    STK.register("pl.base.source.widgetsource.follow", function (a) {
        var b = a.lib.follow.followButton, c = a.lib.kit.extra.language;
        return function (c) {
            var d = b({outer: document.body, outNodeExpr: '[node-type="widget_followBtnBox"]', needSync: !0}), e = {};
            e.destroy = function () {
                a.foreach(btns, function (a) {
                    a && a.destroy && a.destroy()
                })
            };
            return e
        }
    });
    STK.register("pl.base.source.widgetsource.setGroup", function (a) {
        var b = a.lib.dialog.setGroup, c = a.lib.kit.extra.language;
        return function (c) {
            var d;
            c.add("set_group", "click", function (a) {
                d = d || b();
                d.show(a.data)
            });
            var e = {};
            e.destroy = function () {
                a.foreach(btns, function (a) {
                    a && a.destroy && a.destroy()
                })
            };
            return e
        }
    });
    STK.register("pl.base.source.widgetsource.group", function (a) {
        var b = a.lib.kit.extra.language, c = a.ui.tip, d = a.conf.channel.follow, e = a.conf.trans.setGroup, f = a.lib.dialog.ioError, g = a.lib.dialog.validateCode(), h = '<a class="W_btn_b W_btn_b_disable btn_22px" href="javascript:void(0);" node-type="widget_groupfollow"><span><em class="W_ficon ficon_right S_ficon">Y</em>#L{已关注并分组}</span></a>', i = b("#L{已关注此分组}") + "<br/>&nbsp;&nbsp;&nbsp;&nbsp;" + b("#L{ (此分组为默认公开）}"), j = function (b, c) {
            a.foreach(b || [], function (a) {
                a = a.split(":");
                var b = a[1] == 2 || a[1] == 1;
                d.fire("changeStatus", {uid: a[0], action: c, both: b})
            })
        }, k = function (d) {
            var k = a.foreach(d.data, function (a) {
                return decodeURIComponent(a)
            });
            k.location = $CONFIG.location;
            var l = d.el, m = (k.uids || "").split(",");
            try {
                delete k.uids
            } catch (n) {
            }
            var o = e.getTrans("followGroup", {onComplete: function (d) {
                var e = {onError: function (a) {
                    f(a.code, a)
                }, onFail: function (a) {
                    f(a.code, a)
                }, onSuccess: function (d) {
                    var e, f = a.builder(b(h)).list.widget_groupfollow[0];
                    a.replaceNode(f, l);
                    j(m, "follow");
                    f.removeAttribute("node-type");
                    e = c("alert", {msg: i, hideCallback: function () {
                        e && e.destroy && e.destroy()
                    }, showCallback: function () {
                        setTimeout(function () {
                            e.aniHide()
                        }, 2e3)
                    }});
                    e.setLayerXY(f);
                    e.aniShow()
                }, requestAjax: o, param: k, onRelease: function () {
                }};
                g.validateIntercept(d, k, e)
            }});
            o.request(k)
        };
        return function (a) {
            a.add("widget_groupfollow", "click", k);
            var b = {};
            b.destroy = function () {
                a.remove("widget_groupfollow", "click", k)
            };
            return b
        }
    });
    STK.register("conf.trans.card", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("userCard", {url: "http://weibo.com/aj/v6/user/newcard", method: "get", requestMode: "jsonp", varkey: "callback"});
        c("userCard_abroad", {url: "http://www.weibo.com/aj/v6/user/newcard", method: "get", requestMode: "jsonp", varkey: "callback"});
        c("mblogCard", {url: "/aj/v6/mblog/mblogcard", method: "get"});
        c("levelCard", {url: "/aj/user/rankdetail", method: "get"});
        c("darenCard", {url: "/aj/club/card", method: "get"});
        c("creditCard", {url: "/aj/credit/card", method: "get"});
        c("medalCard", {url: "/aj/badge/card", method: "get"});
        return b
    });
    STK.register("lib.card.popcard", function (a) {
        var b = 400, c = 200;
        return function (d) {
            var e = {}, f, g, h, i = !1, j = a.core.json.merge({autoShow: !0, autoHide: !0, priority: "tbrl", attribute: "usercard", out: document.body, showWithAni: null, hideWithAni: null, showWithSetWidth: !1}, d), k = a.ui.card(j);
            k.setContent('<div style="width:300px;height:120px;padding:10px;"></div>');
            k.on("beforeShow", function () {
                k.getBox().style.pointerEvents = "none"
            }).on("shown", function () {
                k.getBox().style.pointerEvents = ""
            });
            var l = function (a, b) {
                if (a.type != "mouseout" && a.type != "mouseover")return!1;
                var c = a.relatedTarget ? a.relatedTarget : a.type == "mouseout" ? a.toElement : a.fromElement;
                while (c && c != b)c = c.parentNode;
                return c != b
            }, m = function (c, d) {
                clearTimeout(h);
                h = setTimeout(function () {
                    a.custEvent.fire(e, "beforeShow", [c, d]);
                    if (j.autoShow) {
                        k.showByTarget(c, d);
                        a.custEvent.fire(e, "show", [c, d])
                    }
                }, b)
            }, n = function () {
                if (i != !1) {
                    clearTimeout(h);
                    h = setTimeout(function () {
                        a.custEvent.fire(e, "beforeHide");
                        if (j.autoHide) {
                            k.hide();
                            a.custEvent.fire(e, "hide")
                        }
                    }, c)
                }
            };
            a.custEvent.define(e, ["beforeShow", "show", "beforeHide", "hide"]);
            var o = function () {
                i = !0
            }, p = function () {
                i = !1
            }, q = function (b) {
                var c = a.fixEvent(b).target;
                g = c;
                if (f != c) {
                    if (a.contains(k.getBox(), c)) {
                        clearTimeout(h);
                        return
                    }
                    var d = c.getAttribute(j.attribute);
                    d ? m(c, b) : n();
                    f = c
                }
            }, r = function (a) {
                l(a || window.event, k.getBox()) && clearTimeout(h)
            }, s = function (a) {
                l(a || window.event, k.getBox()) && n()
            }, t = function (b) {
                var c = a.fixEvent(b).target;
                a.contains(k.getBox(), c) || n();
                var d = c.getAttribute && c.getAttribute(j.attribute);
                d && a.contains(j.out, c) && m(c, b);
                f = c;
                g = c
            }, u = function (b) {
                b = a.fixEvent(b);
                var c = b.target;
                c.getAttribute(j.attribute) && a.preventDefault(b)
            }, v = function (b) {
                var c = a.fixEvent(b).target;
                a.contains(k.getBox(), c) || k.hide()
            }, w = function () {
                if (a.lib.kit.touch.cantouch) {
                    a.addEvent(document.body, "tap", t);
                    a.addEvent(j.out, "click", u)
                } else {
                    a.addEvent(j.out, "mousemove", q);
                    a.addEvent(k.getBox(), "mouseover", r);
                    a.addEvent(k.getBox(), "mouseout", s);
                    a.addEvent(j.out, "click", v)
                }
                a.custEvent.add(k, "show", o);
                a.custEvent.add(k, "hide", p)
            }, x = function () {
                w()
            }, y = function () {
                if (a.lib.kit.touch.cantouch) {
                    a.addEvent(document.body, "tap", t);
                    a.addEvent(j.out, "click", u)
                } else {
                    a.removeEvent(out, "mousemove", r);
                    a.removeEvent(k.getBox(), "mouseover", r);
                    a.removeEvent(k.getBox(), "mouseout", s);
                    a.removeEvent(j.out, "click", v)
                }
                a.custEvent.remove(k, "show", o);
                a.custEvent.remove(k, "hide", p);
                k.destroy()
            };
            x();
            e.card = k;
            e.attribute = j.attribute;
            e.mouseTarget = function () {
                return g
            };
            e.isShowCard = function () {
                return i
            };
            e.showCard = m;
            e.hideCard = n;
            e.destroy = y;
            return e
        }
    });
    STK.register("lib.card.usercard.basecard", function (a) {
        var b = a.lib.kit.extra.language, c = a.templet, d = a.lib.kit.extra.merge, e = a.lib.kit.dom.hover, f = '<div class="W_layer W_layer_pop"><div class="content"><div class="layer_personcard" layout-shell="true" node-type="inner"></div><div class="W_layer_arrow"><span class="W_arrow_bor" node-type="arrow"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div>', g = '<div style="width:360px;padding-top:15px;padding-bottom:15px;text-align:center"><span>#{msg}</span></div>', h = '<div style="width:360px;padding-top:15px;padding-bottom:15px;text-align:center"><i class="W_loading"></i> <span>#L{正在加载，请稍候}...</span></div>', i = 3e5, j = document.domain === "www.weibo.com";
        return function (k) {
            var l = {};
            k = k || {};
            k.autoShow = !1;
            k.template = f;
            var m = a.lib.card.popcard(k), n = m.card, o = n.getBox(), p = {}, q = a.parseParam({trans: a.conf.trans.card, transName: j ? "userCard_abroad" : "userCard", temp_error: b(g), temp_loading: b(h), cacheDelay: i, extraData: ""}, k), r, s, t, u, v, w, x, y, z = function (a, b) {
                return p[a] && p[a][b] ? p[a][b] : null
            }, A = function (a, b, c) {
                p[a] || (p[a] = {});
                p[a][b] = c;
                return c
            }, B = function (a) {
                a ? p[a] = {} : p = {}
            }, C = function (b, c) {
                var c = a.parseParam({success: a.funcEmpty, fail: a.funcEmpty}, c), e = b.getAttribute(m.attribute) || "", f = a.queryToJson(e), g = f.id || f.name;
                f.name && (f.name = encodeURIComponent(f.name));
                f.type == undefined && (f.type = 1);
                var h = f.type, i = z(g, h);
                i ? c.success(b, i) : q.trans.request(q.transName, {onComplete: function (a) {
                    a.code == "100000" ? c.success(b, A(g, h, a.data)) : c.fail(b, a.msg)
                }}, d(f, a.queryToJson(q.extraData)))
            }, D = function (b, c) {
                y = a.ui.mlayer(c);
                a.removeNode(c);
                c.style.display = "";
                x = e({act: b, extra: [c], onmouseover: function () {
                    y.getState() === !1 && y.show().beside(b, {pos: "bottom-left"})
                }, onmouseout: function () {
                    y.getState() === !0 && y.hide()
                }})
            }, E = function () {
                try {
                    y && y.destroy();
                    x && x.destroy();
                    x = y = null
                } catch (a) {
                }
            }, F, G = 500, H = function (d, e, f) {
                u = e;
                var g = function () {
                    var b = m.mouseTarget();
                    return u == e && a.contains(document.body, e) && (b == e || a.contains(o, b))
                }, h = !1;
                F = setTimeout(function () {
                    if (g()) {
                        n.setContent(q.temp_loading).showByTarget(e, f);
                        h = !0
                    }
                }, G);
                C(e, {success: function (a, b) {
                    clearTimeout(F);
                    setTimeout(function () {
                        if (g()) {
                            E();
                            n.setContent(b).showByTarget(a, f);
                            var c = n.getDomList(!0);
                            D(c.more, c.more_list);
                            h = !1;
                            window.WBEXP && window.WBEXP.collect({V6newcard: "card"})
                        }
                    }, h ? 1e3 : 0)
                }, fail: function (a, d) {
                    var e, i;
                    clearTimeout(F);
                    setTimeout(function () {
                        if (g()) {
                            i = {msg: d || b("#L{加载失败}")};
                            e = c(q.temp_error, i);
                            n.setContent(e).showByTarget(a, f);
                            h = !1
                        }
                    }, h ? G : 0)
                }})
            }, I = function () {
                r = a.delegatedEvent(o);
                a.custEvent.add(m, "beforeShow", H);
                t = setInterval(B, i)
            }, J = function () {
                s = a.builder(o).list
            }, K = function () {
                J();
                I()
            }, L = function () {
                r && r.destroy();
                a.custEvent.remove(m, "beforeShow", H);
                clearInterval(t);
                m && m.destroy()
            };
            K();
            l.devt = r;
            l.usercard = m;
            l.lastTarget = function () {
                return u
            };
            l.clearCache = B;
            l.destroy = L;
            return l
        }
    });
    STK.register("conf.trans.setRemark", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("setRemark", {url: "/aj/f/remarkname", method: "post"});
        return b
    });
    STK.register("lib.dialog.setRemark", function (a) {
        $merge = a.lib.kit.extra.merge;
        var b = '<div class="W_layer" style="top:50px;left:550px;"><div class="content"><div class="W_layer_title" node-type="title">#L{设置备注名}</div><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div><div class="layer_prompt" ><dl class="clearfix"><dt node-type="label">#L{备注名}:</dt><dd><input type="text" class="W_input W_input_default" node-type="input"></dd></dl></div><div class="W_layer_btn S_bg1"><a href="javascript:void(0);" action-type="ok" class="W_btn_a btn_34px">#L{确定}</a><a href="javascript:void(0)" action-type="close" class="W_btn_b btn_34px">#L{取消}</a></div></div></div>';
        return function (c) {
            function n(a) {
                return c.extraPostData ? $merge(a, typeof c.extraPostData == "function" ? c.extraPostData() : c.extraPostData) : a
            }

            var d = a.lib.kit.extra.language, e, f, g, h, i, j, k, l = "", m = {}, o = {init: function () {
                o.pars();
                o.build()
            }, pars: function () {
                c = c || {};
                i = c.trans || a.conf.trans.setRemark;
                j = c.transName || "setRemark";
                e = c.uid;
                if (c.uid != null) {
                    f = a.trim(c.remark || "");
                    g = c.callback
                }
            }, build: function () {
                h = a.ui.dialog(d(b)).show().on("ok", "click", function () {
                    l = a.trim(c.getValue());
                    if (l === f) {
                        g && g(f);
                        h.hide()
                    } else i.request(j, {onSuccess: function (a, b) {
                        g && g(l);
                        h.hide()
                    } || a.funcEmpty, onError: function (b, c) {
                        a.lib.dialog.ioError(b.code, b, {beside: h.getDomList().input})
                    }, onFail: function (b, c) {
                        a.lib.dialog.ioError(b.code, b, {beside: h.getDomList().input})
                    }}, n({touid: e, remark: encodeURIComponent(l)}))
                });
                h.on("close", "click", function () {
                    h.hide()
                });
                var c = a.lib.kit.dom.smartInput(h.getDomList().input);
                c.setNotice(d("#L{请输入备注名}"));
                c.setValue(f || "");
                c.setMaxLength(30);
                c.restart();
                a.addEvent(c, "keydown", function () {
                    c.value = a.leftB(c.value, 30)
                });
                setTimeout(function () {
                    c.setCursor({start: c.getValue().length, len: 0})
                }, 0)
            }, destroy: function () {
                h.destroy()
            }};
            o.init();
            m.destroy = o.destroy;
            return m
        }
    });
    STK.register("lib.card.usercard.getExtra", function (a) {
        function c(a, b, d) {
            d = d || [];
            b = b || function () {
                return!0
            };
            a && a.tagName && "getAttribute"in a && b(a) === !0 && d.push(a);
            return a == document.body || !a || !a.parentNode ? d : c(a.parentNode, b, d)
        }

        function b(b, c) {
            c = typeof c == "string" ? a.queryToJson(c || "") : c;
            for (var d in c)c.hasOwnProperty(d) && !(d in b) && (b[d] = c[d]);
            return b
        }

        return function (a, d) {
            var e = {};
            c(a, function (a) {
                var c = a.getAttribute(d);
                if (c) {
                    b(e, c);
                    return!0
                }
            });
            return e
        }
    });
    STK.register("conf.trans.hisInfo", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("recommendfollow", {url: "/aj/f/recomafterfollow", method: "get"});
        c("closerecommend", {url: "/aj/f/closerecommend", method: "get"});
        c("newuserguide", {url: "/aj/user/interest/newuserguide", method: "get"});
        c("mayinterested", {url: "/aj/user/interest/list", method: "get"});
        c("uninterested", {url: "/aj/user/interest/uninterested", method: "post"});
        c("userCard", {url: "/aj/user/cardv5", method: "get"});
        c("follow", {url: "/aj/f/followed", method: "post"});
        c("unFollow", {url: "/aj/f/unfollow", method: "post"});
        c("follow_register", {url: "/nguide/aj/relation/followed", method: "post"});
        c("unfollow_register", {url: "/nguide/aj/relation/unfollow", method: "post"});
        c("block", {url: "/aj/f/addblack", method: "post"});
        c("unBlock", {url: "/aj/f/delblack", method: "post"});
        c("removeFans", {url: "/aj/f/remove", method: "post"});
        c("requestFollow", {url: "/ajax/relation/requestfollow", method: "post"});
        c("questions", {url: "/aj/invite/attlimit", method: "get"});
        c("answer", {url: "/aj/invite/att", method: "post"});
        c("setRemark", {url: "/aj/f/remarkname", method: "post"});
        c("recommendusers", {url: "/aj/f/recommendusers", method: "get"});
        c("recommendAttUsers", {url: "/aj/f/worthfollowusers", method: "get"});
        c("recommendPopularUsers", {url: "/aj/user/interest/recommendpopularusers", method: "get"});
        c("mayinterestedweiqun", {url: "/aj/weiqun/getinterestedlist", method: "get"});
        c("moreData", {url: "/aj/f/listuserdetail", method: "get"});
        c("getInvite", {url: "/aj/invite/unread", method: "get"});
        c("quiet_addUser", {url: "/aj/f/addwhisper", method: "post"});
        c("quiet_removeUser", {url: "/aj/f/delwhisper", method: "post"});
        c("quiet_know", {url: "/aj/tipsbar/closetipsbar", method: "post"});
        c("groupUserList", {url: "/aj/f/group/getgroupmembers", method: "get"});
        c("smart_sort", {url: "/aj/mblog/mblogcard", method: "post"});
        c("groupSubmit", {url: "/aj/f/group/list", method: "get"});
        c("wqList", {url: "/aj/proxy?api=http://recom.i.t.sina.com.cn/1/weiqun/weiqun_may_interest.php", method: "get"});
        c("uninterestedWq", {url: "/aj/proxy?api=http://recom.i.t.sina.com.cn/1/weiqun/weiqun_uninterest.php", method: "get"});
        c("inviteNeglect", {url: "/aj/invite/handleinvite", method: "post"});
        c("checkNeglect", {url: "/aj/invite/shieldedlist", method: "post"});
        c("inviteLift", {url: "/aj/invite/lift", method: "post"});
        c("inviteAccept", {url: "/aj/invite/handleinvite", method: "post"});
        c("searchByTel", {url: "/aj/relation/getuserbymobile", method: "post"});
        c("inviteCloseTips", {url: "/aj/invite/closetips", method: "post"});
        c("checkrelation", {url: "/aj/f/checkrelation", method: "post"});
        c("addCloseFriend", {url: "/aj/f/createclosefriend", method: "post"});
        c("removeClsFrd", {url: "/aj/f/removeclosefriend", method: "post"});
        c("cfInviteUnread", {url: "/aj/invite/unread", method: "get"});
        c("recommendCf", {url: "/aj/user/closefriend/recommend", method: "get"});
        c("clearInvalidUsers", {url: "/aj/f/clearinvalidfriends", method: "post"});
        c("unIstCf", {url: "/aj/user/closefriend/deny", method: "post"});
        c("checkcloserelation", {url: "/aj/f/checkcloserelation", method: "post"});
        c("closeunfollow", {url: "/aj/profile/closeunfollow", method: "post"});
        c("fanslikemore", {url: "/aj/relation/fanslikemore", method: "get"});
        c("getProfileInfo", {url: "/aj/relation/getprofileinfo", method: "get"});
        c("getheaderinfo", {url: "/p/aj/official/getheaderinfo", method: "get"});
        c("interestlist", {url: "/aj/user/interest/profileinfo", method: "get"});
        c("recommendGroupMember", {url: "/aj/user/group/recommend", method: "get"});
        c("feedShield", {url: "/aj/user/block", method: "post"});
        c("removeShield", {url: "/aj/user/unblock", method: "post"});
        return b
    });
    STK.register("conf.trans.block", function (a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("block", {url: "/aj/f/addblack", method: "post"});
        return b
    });
    STK.register("lib.dialog.block", function (a) {
        var b = a.lib.kit.extra.language, c = a.templet, d = b("#L{你和他将自动解除关注关系，并且他不能再关注你<br/>他不能再给你发评论、私信、@通知}"), e = b("#L{确认将}") + "#{nickName}" + b("#L{加入到我的黑名单中么？}");
        return function (f) {
            var g = f.trans || a.conf.trans.block, h = f.transName || "block", i = f.uid || $CONFIG.oid, j = f.nickname || $CONFIG.onick;
            a.ui.confirm(c(e, {nickName: j}), {textSmall: d, icon: "error", OK: function () {
                g.request(h, {onSuccess: function (c) {
                    a.ui.notice(b("#L{已将%s加入黑名单}", j)).on("hide", function () {
                        window.location.reload()
                    })
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }}, {uid: i, f: 1})
            }})
        }
    });
    STK.register("lib.card.usercard.widgets", function (a) {
        function i(a, b) {
            window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack(a, b)
        }

        var b = a.lib.kit.extra.language, c = a.lib.dialog.setRemark, d = a.lib.dialog.inviteFollow, e = a.lib.dialog.ioError, f = a.conf.channel.follow, g = a.lib.follow.followButton, h = a.lib.card.usercard.getExtra, j = {confirm: b("<span>#L{确认屏蔽}<strong> #{NICKNAME}</strong> #L{的微博吗？}</span>"), smallText: '#L{在“我的首页”将自动屏蔽%s的新微博。}<br />#L{可以在}<a href="http://account.weibo.com/set/feed" target="_blank">#L{帐号设置-隐私设置}</a>#L{中增加或取消屏蔽。}', tips: {USERMAX: {CONTENT: b(['<div node-type="outer" class="layer_point">', '<dl class="point clearfix">', '<dt><span class="icon_warnM"></span></dt>', '<dd node-type="inner">', '<p class="S_txt1">#L{抱歉！你已经屏蔽了10人的微博，不能继续操作了。}</p>', '<p class="S_txt2">#L{但你可以试试下面的办法}</p>', "</dd>", '</dl></div><div class="W_layer_btn S_bg1"><a class="W_btn_b btn_34px" href="http://account.weibo.com/set/feed"><span>#L{管理我的屏蔽}</span></a>', '<a class="W_btn_a btn_34px" href="http://vip.weibo.com/paycenter?from=pbyh"><span><em class=W_icon icon_member"></em>#L{立即开通会员}</span></a>', "</div>"].join(""))}, MEMBERMAX: {CONTENT: b(['<div node-type="outer" class="layer_point">', '<dl class="point clearfix">', '<dt><span class="icon_warnM"></span></dt>', '<dd node-type="inner">', '<p class="S_txt1">#L{你的屏蔽数已满，等会员升级后再试吧！}</p>', "</dd>", '</dl></div><div class="W_layer_btn S_bg1"><a class="W_btn_a btn_34px" href="http://vip.weibo.com/privilege"><span>#L{了解更多会员特权}&raquo;</span></a><a action-type="cancel" class="W_btn_d btn_34px" href="javascript:void(0)"><span>#L{知道了}</span></a></div>'].join(""))}, MEMBERTIMEOUT: {CONTENT: b(['<div node-type="outer" class="layer_point">', '<dl class="point clearfix">', '<dt><span class="icon_warnM"></span></dt>', "<dd>", '<p class="S_txt1">#L{抱歉！你已经屏蔽了太多人的微博，不能继续操作了。}</p>', '<p class="S_txt2">#L{但你可以试试下面的办法}</p>', "</dd>", '</dl></div><div class="W_layer_btn S_bg1"><a class="W_btn_b btn_34px" href="http://account.weibo.com/set/feed"><span>#L{管理我的屏蔽}</span></a>', '<a class="W_btn_a btn_34px" href="http://vip.weibo.com/paycenter"><span><em class=W_icon icon_member"></em>#L{立即开通会员}</span></a>', "</div>"].join(""))}}};
        return function (d) {
            function u() {
                l.hide();
                i("V6newcard", "addgroup")
            }

            var k = d.devt, l = d.usercard.card, m = l.getBox(), n, o = function () {
                setTimeout(function () {
                    l.hide()
                }, 10);
                a.preventDefault()
            }, p = {setRemark: function (b) {
                var e = b.data, f = e.remark;
                c({uid: e.uid, remark: a.core.str.decodeHTML(decodeURIComponent(f)), callback: function (a) {
                    d.clearCache(e.uid);
                    d.clearCache(e.fnick)
                }, extraPostData: function () {
                    return h(d.lastTarget(), "data-usercard-extra")
                }});
                o();
                i("V6newcard", "addnote")
            }, "webim.conversation": function () {
                o();
                i("V6newcard", "privateletter")
            }, block: function (b) {
                b.data.nickname = b.data.fnick;
                a.lib.dialog.block(b.data);
                d.clearCache(b.data.uid);
                o()
            }, remove: function (c) {
                a.ui.confirm(b("#L{确认把%s从粉丝中移除吗？}", c.data.fnick)).ok(function () {
                    a.conf.trans.hisInfo.request("removeFans", {onSuccess: function (e) {
                        d.clearCache(c.data.uid);
                        d.clearCache(c.data.fnick);
                        a.ui.notice(b("#L{移除成功}"));
                        o()
                    }, onError: function (a) {
                        e(a.code, a)
                    }}, {uid: c.data.uid})
                })
            }, shield_by_user: function (c) {
                var f = c.data;
                f.location = $CONFIG.location;
                a.ui.confirm(a.templet(j.confirm, {UID: c.data.uid, NICKNAME: c.data.fnick, GENDER: c.data.gender == "m" ? "他" : "她"}), {textSmall: b(j.smallText, c.data.gender == "m" ? b("#L{他}") : b("#L{她}")), OK: function () {
                    a.conf.trans.hisInfo.getTrans("feedShield", {onSuccess: function (e) {
                        d.clearCache(c.data.uid);
                        d.clearCache(c.data.fnick);
                        a.ui.notice(b("#L{保存成功}"));
                        o()
                    }, onError: function (b) {
                        if (b.data && b.data.member_type > -1) {
                            var c = {title: j.tips.USERMAX.TITLE, content: j.tips.USERMAX.CONTENT};
                            if (b.code == "100033") {
                                switch (b.data.member_type) {
                                    case"0":
                                        break;
                                    case"1":
                                        c.content = j.tips.MEMBERMAX.CONTENT;
                                        break;
                                    case"2":
                                        c.content = j.tips.MEMBERTIMEOUT.CONTENT;
                                        break;
                                    default:
                                }
                                a.ui.dialog().setTitle("提示").setContent(j.tips.MEMBERTIMEOUT.CONTENT).show();
                                o()
                            }
                        }
                        a.ui.notice(b.msg, {icon: "rederrorB"})
                    }, onFail: function (a) {
                        e(a.code, a);
                        o()
                    }}).request(f)
                }})
            }, removeShield: function (c) {
                var f = c.data;
                a.conf.trans.hisInfo.getTrans("removeShield", {onSuccess: function (e) {
                    a.ui.notice(b("#L{解除成功}"), {icon: "succB"});
                    d.clearCache(c.data.uid);
                    d.clearCache(c.data.fnick);
                    o()
                }, onFail: function (a) {
                    e(a.code, a);
                    o()
                }, onError: function (a) {
                    e(a.code, a);
                    o()
                }}).request(f)
            }, addQuietFollow: function (c) {
                function e(c, e) {
                    var f = {location: $CONFIG.location || "", action: c.action || "add"};
                    c.fnick && (f.fname = c.fnick);
                    c.uid && (f.fuid = c.uid);
                    (!!f.fname || !!f.fuid) && a.conf.trans.hisInfo.request("quiet_addUser", {onSuccess: function (g) {
                        a.ui.notice(b("#L{成功悄悄关注}") + (c.fname || ""));
                        d.clearCache(f.fnick);
                        d.clearCache(f.fuid);
                        e && e(g)
                    }, onError: function (c) {
                        if (c.code == "100001")return e && e(c);
                        if (c.code == "100004")return a.ui.confirm(c.msg, {OKText: b("#L{管理我的悄悄关注}"), cancelText: b("#L{知道了}"), OK: function () {
                            a.preventDefault();
                            window.location.href = "/" + $CONFIG.uid + "/whisper"
                        }});
                        a.lib.dialog.ioError(c.code, c)
                    }, onFail: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}, f)
                }

                var f = c.el, g = c.data;
                g.fname = g.fname || "";
                var h = function (b) {
                    b && b.code == "100001" ? a.ui.confirm(b.msg, {OK: function () {
                        g.action = "force";
                        e(g, h)
                    }}) : opts.addQFollow && opts.addQFollow(b)
                };
                e(g, h);
                o()
            }, removeQuietFollow: function (c) {
                function e(c, e) {
                    var f = {location: $CONFIG.location || ""};
                    c.name && (f.fname = c.name);
                    c.uid && (f.fuid = c.uid);
                    (!!f.fname || !!f.fuid) && a.conf.trans.hisInfo.request("quiet_removeUser", {onSuccess: function (g) {
                        a.ui.notice(b("#L{成功取消悄悄关注}") + (c.name || ""));
                        d.clearCache(f.fnick);
                        d.clearCache(f.fuid);
                        e && e(g)
                    }, onError: function (b) {
                        a.lib.dialog.ioError(b.code, b);
                        e && e(b)
                    }, onFail: function (b) {
                        a.lib.dialog.ioError(b.code, b)
                    }}, f)
                }

                var f = c.el, g = c.data;
                g.name = g.name || "";
                a.ui.confirm(b("#L{确定不再悄悄关注}") + g.name + "？", {OK: function () {
                    e(g)
                }});
                o()
            }}, q = function (b, c) {
                d.clearCache(c.spec.uid);
                d.clearCache(c.spec.fnick);
                if (c.state === "unfollow") {
                    var e = a.sizzle(".remark", m)[0];
                    e && (e.style.display = "none")
                }
                c.state === "follow" ? i("V6newcard", "addatten") : c.state === "unfollow" && i("V6newcard", "cancelrelation")
            }, r = function (a) {
                d.clearCache(a.uid);
                d.clearCache(a.fnick)
            }, s = function (a, b) {
                b = b || document.body;
                return a && a.tagName && a.tagName.toUpperCase() === "A" ? !0 : a && a.tagName && a.getAttribute("node-type") === "followBtnBox" ? !0 : a ? a === b ? !1 : s(a.parentNode, b) : !1
            }, t = function (b) {
                b = a.fixEvent(b);
                var c = b.target;
                if (!s(c, m)) {
                    var d = a.sizzle("a[uid]", m)[0];
                    try {
                        d.click()
                    } catch (e) {
                        d.getAttribute("target") === "_blank" ? window.open(d.href) : setTimeout(function () {
                            location.href = d.href
                        }, 0)
                    }
                    setTimeout(function () {
                        l.hide()
                    }, 30)
                }
            }, v = function () {
                n = g({outer: m, refer_sort: "card", extraPostData: function () {
                    return h(d.lastTarget(), "data-usercard-extra")
                }});
                a.custEvent.add(n, "change", q);
                a.custEvent.add(n, "showDialog", u);
                a.foreach(p, function (a, b) {
                    k.add(b, "click", a)
                });
                a.addEvent(m, "click", t);
                f.register("changeStatus", r)
            };
            v();
            var w = {};
            w.destroy = function () {
                a.custEvent.remove(n, "change", q);
                a.custEvent.remove(n, "showDialog", u);
                n.destroy();
                a.foreach(p, function (a, b) {
                    k.remove(b, "click", a)
                });
                a.removeEvent(m, "click", t)
            };
            return w
        }
    });
    STK.register("pl.base.source.widgetsource.usercard", function (a) {
        var b = a.lib.card.usercard.basecard, c = a.lib.card.usercard.widgets;
        return function (a) {
            var d = b(), e = c(d), f = {};
            f.destroy = function () {
                e.destroy();
                d.destroy()
            };
            return f
        }
    });
    STK.register("pl.base.source.widgetsource.jumpurl", function (a) {
        return function (b) {
            var c = {}, d = function (a, b) {
                return a == b || a == document.body || !a ? !1 : a.tagName.toUpperCase() == "A" ? !0 : d(a.parentNode, b)
            }, e = function (b) {
                var c = b.evt, e = b.data, f = e.target, g = a.queryToJson(decodeURIComponent(e.suda));
                a.foreach(g, function (a, b) {
                    window.SUDA && SUDA.uaTrack && SUDA.uaTrack(b, a)
                });
                var h = decodeURIComponent(e.url);
                !h || d(c.target, b.el) || (f == "blank" ? window.open(h) : location.href = h)
            };
            b.add("widget_jumpurl", "click", e);
            c.destroy = function () {
                b.remove("widget_jumpurl", "click", e)
            };
            return c
        }
    });
    STK.register("pl.base.source.widgetsource.map", function (a) {
        var b = a.lib.kit.extra.language, c = '<iframe node-type="iframe" width="#{width}" height="#{height}" scrolling="no" frameborder="0"></iframe>', d = "810", e = "560";
        return function (f) {
            var g, h = function (f) {
                var h = f.el, i = f.data;
                g || (g = a.ui.dialog());
                var j = h.getAttribute("data-url") + "&type=big";
                g.setTitle(b("#L{地图}"));
                g.setContent(a.templet(c, {width: i.width || d, height: i.height || e}));
                g.show().setMiddle();
                g.getDomList(!0).iframe.src = j
            };
            f.add("widget_iframe", "click", h);
            var i = {};
            i.destroy = function () {
                f.remove("widget_iframe", "click", h)
            };
            return i
        }
    });
    STK.register("pl.base.source.widgetsource.musicplayer", function (a) {
        function j() {
            function m() {
                if (f in window) {
                    window[f].load({page_id: k});
                    window[f].on("share", b);
                    window[f].on("like", j);
                    FM.oniLoadEnd(l)
                } else setTimeout(m, 500)
            }

            function l() {
                if (h.page_id != k) {
                    k = h.page_id;
                    window[f].load({page_id: k})
                }
            }

            function j(b, c, f) {
                if (h.islogin == "0") {
                    d({lang: i});
                    return!1
                }
                var g = c.object_id.split(":"), j = g[0], k = g[1], l;
                c.is_like === "false" || c.is_like == 0 ? l = 1 : tpye = 0;
                e.request("like_object", {onSuccess: function (a) {
                    f(l == 1)
                }, onError: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }, onFail: function (b) {
                    a.lib.dialog.ioError(b.code, b)
                }}, {type: l, status: l, service_num: j, page_id: k})
            }

            function b(a, b) {
                if (h.islogin == "0") {
                    d({lang: i});
                    return!1
                }
                b.content = decodeURIComponent(b.copy);
                c(b)
            }

            if (g !== !0) {
                if (STK.core.util.browser.IE6 || STK.core.util.browser.IE7)return;
                var k = h.page_id;
                a.core.io.scriptLoader({url: "http://js.t.sinajs.cn/t5/pack/static/musicplayer/musicplayer_v6.0.14.js", onComplete: m, timeout: 1e4});
                g = !0
            }
        }

        var b = a.lib.kit.extra.merge, c = a.lib.publisher.publisherDialog, d = a.lib.dialog.loginLayer, e = a.conf.trans.global, f = "WEIBO_MUSIC_PLAYER", g = !1, h = window.$CONFIG || {}, i = h.lang || "zh-cn";
        return function (c) {
            function g(b) {
                var c = b.data, d = c.songid && c.songid.split(","), g = c.object_id, h = c.source;
                if (f in window)if (c.object_id)window[f].playSongByObjectId(g, {source: h}); else if (c.songid)window[f].playSong(d, {source: h}); else {
                    window[f].audio.pause();
                    e(a.queryToJson(b.el.getAttribute("data-noplayer") || ""))
                } else e(a.queryToJson(b.el.getAttribute("data-noplayer") || ""))
            }

            function e(c) {
                var d = decodeURIComponent(c.href), e = b({}, c);
                try {
                    delete e.href;
                    delete e.width;
                    delete e.hegiht
                } catch (f) {
                }
                d = d + (d.indexOf("?") == -1 ? "?" : "&") + a.jsonToQuery(e);
                window.open(d, "newwindow", "height=" + c.height + ", width=" + c.width + ", top=" + ((window.screen.height - c.height) / 2 + 0) + ", left=" + ((window.screen.width - c.width) / 2 + 0) + ", resizable=yes")
            }

            var d = {};
            c.add("music_player", "click", g);
            j();
            d.destroy = function () {
                c.remove("music_player", "click", g)
            };
            return d
        }
    });
    STK.register("pl.base.source.widgets", function (a) {
        var b = a.pl.base.source.widgetsource;
        return function () {
            var c = a.delegatedEvent(document.body), d = [];
            d.push(b.publish(c));
            d.push(b.like(c));
            d.push(b.take(c));
            d.push(b.forward(c));
            d.push(b.message(c));
            d.push(b.photoview(c));
            d.push(b.follow(c));
            d.push(b.setGroup(c));
            d.push(b.group(c));
            d.push(b.map(c));
            d.push(b.jumpurl(c));
            d.push(b.musicplayer(c));
            $CONFIG && $CONFIG.islogin && $CONFIG.islogin != 2 && d.push(b.usercard(c));
            var e = {};
            e.destroy = function () {
                c && c.destroy();
                a.foreach(d, function (a) {
                    try {
                        a && a.destroy && a.destroy()
                    } catch (b) {
                    }
                })
            };
            return e
        }
    });
    STK.register("lib.cite.open", function (a) {
        return function () {
            var b = {}, c = STK.namespace();
            c._groupSelectDialog = a.lib.group.gmemberSelect;
            b.destroy = function () {
                c._groupSelectDialog = null;
                delete c._groupSelectDialog
            };
            return b
        }
    });
    STK.register("pl.base.source.init", function (a) {
        var b = !1;
        return function () {
            var c = {}, d = function () {
                !b && a.lib.cite.suda();
                !b && a.lib.cite.webim();
                !b && a.lib.cite.putoff();
                !b && a.lib.cite.open();
                !b && a.pl.base.source.widgets();
                !b && a.lib.cite.scrollToTop(a.E("base_scrollToTop"));
                a.lib.cite.wbad();
                !b && a.lib.cite.exposure();
                !b && a.lib.cite.responsive();
                !b && a.lib.cite.hotkey();
                !b && a.lib.cite.checkUser();
                b = !0
            }, e = function () {
                if (FM) {
                    if (!b) {
                        FM.isOrigPageRenderReady() && d();
                        FM.onallRenderReady(d)
                    }
                } else d();
                if ($CONFIG && $CONFIG.islogin && $CONFIG.islogin == 2) {
                    var c = a.delegatedEvent(document.body);
                    c.add("visitorlogin", "click", function () {
                        a.lib.dialog.loginLayer({lang: window.$CONFIG && window.$CONFIG.lang || "zh-cn"});
                        a.preventDefault()
                    })
                }
            }, f = function () {
                window.WBAD && window.WBAD.destroy()
            };
            e();
            c.destroy = f;
            return c
        }
    });
    FM.register("pl.base.index", function (b, c) {
        return a.pl.base.source.init(a.E(b), c)
    })
});
