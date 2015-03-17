/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/11.
 */
STK.namespace("v6home", function (a, b) {
    var STK = arguments[0], $ = arguments[1];
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
    STK.register("conf.channel.feed", function (a) {
        var b = ["forward", "publish", "comment", "delete", "refresh", "reply", "feedTagUpdate", "feedTagMoreUpdate", "qfaceAdd", "qfaceCount", "timeFeedPublish"];
        return a.lib.kit.extra.listener.define("conf.channel.feed", b)
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

    STK.register("conf.trans.card", function (STK) {
        var b = STK.lib.kit.io.inter(), c = b.register;
        c("userCard", {url: "http://weibo.com/aj/v6/user/newcard", method: "get", requestMode: "jsonp", varkey: "callback"});
        c("userCard_abroad", {url: "http://www.weibo.com/aj/v6/user/newcard", method: "get", requestMode: "jsonp", varkey: "callback"});
        c("mblogCard", {url: "/aj/v6/mblog/mblogcard", method: "get"});
        c("levelCard", {url: "/aj/user/rankdetail", method: "get"});
        c("darenCard", {url: "/aj/club/card", method: "get"});
        c("creditCard", {url: "/aj/credit/card", method: "get"});
        c("medalCard", {url: "/aj/badge/card", method: "get"});
        return b
    });
    STK.register("lib.kit.extra.language", function (a) {
        window.$LANG || (window.$LANG = {});
        return function (b) {
            var c = [].splice.call(arguments, 1, arguments.length), d = [b, $LANG].concat(c), e = a.core.util.language.apply(this, d);
            return e
        }
    });
    STK.register("lib.kit.touch.cantouch", function (a) {
        return STK.core.util.browser.IPAD
    });
    STK.register("lib.card.popcard", function (STK) {
        var width = 400, height = 200;
        return function (d) {
            var exports = {}, f, g, cardShowOrHideTimeout, isShowCard = !1, param = STK.core.json.merge({autoShow: !0, autoHide: !0, priority: "tbrl", attribute: "usercard", out: document.body, showWithAni: null, hideWithAni: null, showWithSetWidth: !1}, d), uicard = STK.ui.card(param);
            uicard.setContent('<div style="width:300px;height:120px;padding:10px;"></div>');
            uicard.on("beforeShow", function () {
                uicard.getBox().style.pointerEvents = "none"
            }).on("shown", function () {
                uicard.getBox().style.pointerEvents = ""
            });
            var l = function (event, obj) {
                if (event.type != "mouseout" && event.type != "mouseover")return!1;
                var target = event.relatedTarget ? event.relatedTarget : event.type == "mouseout" ? event.toElement : event.fromElement;
                while (target && target != obj)target = target.parentNode;
                return target != obj
            }, showCard = function (c, d) {
                clearTimeout(cardShowOrHideTimeout);
                cardShowOrHideTimeout = setTimeout(function () {
                    STK.custEvent.fire(exports, "beforeShow", [c, d]);
                    if (param.autoShow) {
                        uicard.showByTarget(c, d);
                        STK.custEvent.fire(exports, "show", [c, d])
                    }
                }, width)
            }, hideCard = function () {
                if (isShowCard != !1) {
                    clearTimeout(cardShowOrHideTimeout);
                    cardShowOrHideTimeout = setTimeout(function () {
                        STK.custEvent.fire(exports, "beforeHide");
                        if (param.autoHide) {
                            uicard.hide();
                            STK.custEvent.fire(exports, "hide")
                        }
                    }, height)
                }
            };
            STK.custEvent.define(exports, ["beforeShow", "show", "beforeHide", "hide"]);
            var setShowCardTrue = function () {
                isShowCard = !0
            }, setShowCardFalse = function () {
                isShowCard = !1
            }, mousemoveHdl = function (b) {
                var target = STK.fixEvent(b).target;
                g = target;
                if (f != target) {
                    if (STK.contains(uicard.getBox(), target)) {
                        clearTimeout(cardShowOrHideTimeout);
                        return
                    }
                    var d = target.getAttribute(param.attribute);
                    d ? showCard(target, b) : hideCard();
                    f = target
                }
            }, mouseoverHdl = function (event) {
                l(event || window.event, uicard.getBox()) && clearTimeout(cardShowOrHideTimeout)
            }, mouseoutHdl = function (event) {
                l(event || window.event, uicard.getBox()) && hideCard()
            }, tapHdl = function (event) {
                var target = STK.fixEvent(event).target;
                STK.contains(uicard.getBox(), target) || hideCard();
                var atrribute = target.getAttribute && target.getAttribute(param.attribute);
                atrribute && STK.contains(param.out, target) && showCard(target, event);
                f = target;
                g = target
            }, clickHdl = function (b) {
                b = STK.fixEvent(b);
                var c = b.target;
                c.getAttribute(param.attribute) && STK.preventDefault(b)
            }, v = function (event) {
                var c = STK.fixEvent(event).target;
                STK.contains(uicard.getBox(), c) || uicard.hide()
            }, bindEvent = function () {
                if (STK.lib.kit.touch.cantouch) {
                    STK.addEvent(document.body, "tap", tapHdl);
                    STK.addEvent(param.out, "click", clickHdl)
                } else {
                    STK.addEvent(param.out, "mousemove", mousemoveHdl);
                    STK.addEvent(uicard.getBox(), "mouseover", mouseoverHdl);
                    STK.addEvent(uicard.getBox(), "mouseout", mouseoutHdl);
                    STK.addEvent(param.out, "click", v)
                }
                STK.custEvent.add(uicard, "show", setShowCardTrue);
                STK.custEvent.add(uicard, "hide", setShowCardFalse)
            }, bindEventFunc = function () {
                bindEvent()
            }, destroy = function () {
                if (STK.lib.kit.touch.cantouch) {
                    STK.addEvent(document.body, "tap", tapHdl);
                    STK.addEvent(param.out, "click", clickHdl)
                } else {
                    STK.removeEvent(out, "mousemove", mouseoverHdl);
                    STK.removeEvent(uicard.getBox(), "mouseover", mouseoverHdl);
                    STK.removeEvent(uicard.getBox(), "mouseout", mouseoutHdl);
                    STK.removeEvent(param.out, "click", v)
                }
                STK.custEvent.remove(uicard, "show", setShowCardTrue);
                STK.custEvent.remove(uicard, "hide", setShowCardFalse);
                uicard.destroy()
            };
            bindEventFunc();
            exports.card = uicard;
            exports.attribute = param.attribute;
            exports.mouseTarget = function () {
                return g
            };
            exports.isShowCard = function () {
                return isShowCard
            };
            exports.showCard = showCard;
            exports.hideCard = hideCard;
            exports.destroy = destroy;
            return exports
        }
    });
    STK.register("lib.card.levelcard", function (STK) {
        var b = '<div style="width:212px;padding-top:15px;padding-bottom:15px;text-align:center"><i class="W_loading"></i><span>#L{正在加载，请稍候}...</span></div>', c = '<div style="width:212px;padding-top:15px;padding-bottom:15px;text-align:center"><span>#{MSG}</span></div>', d = 3e5, e = STK.lib.kit.extra.language;
        return function (f) {
            var popcard = STK.lib.card.popcard(f), card = popcard.card, cardBox = card.getBox(), j = {}, k = STK.parseParam({trans: STK.conf.trans.card, transName: "levelCard", temp_error: e(c), temp_loading: e(b), cacheDelay: d, type: ""}, f), l, m, n = function (a) {
                return j[a] ? j[a] : null
            }, o = function (a, b) {
                j[a] = b;
                return b
            }, p = function (a) {
                j = {}
            }, q = function (b, c) {
                var c = STK.parseParam({success: STK.funcEmpty, fail: STK.funcEmpty}, c), d = b.getAttribute(popcard.attribute) || "", e = STK.queryToJson(d), f = n(d);
                if (f)return c.success(b, f);
                k.trans.request(k.transName, {onComplete: function (a) {
                    a.code == "100000" ? c.success(b, o(d, a.data)) : c.fail(b, a.msg)
                }}, e)
            }, r = function (a, b) {
                m = b;
                card.setContent(k.temp_loading).showByTarget(b, {top: 8, left: 30, type: k.type});
                q(b, {success: function (a, b) {
                    m == a && card.setContent(b).showByTarget(a, {top: 8, left: 30, type: k.type})
                }, fail: function (a, b) {
                    if (m == a) {
                        var c, d;
                        d = {msg: b || e("#L{加载失败}")};
                        c = $T(k.temp_error, d);
                        card.setContent(c).showByTarget(a, {top: 8, left: 30, type: k.type})
                    }
                }})
            }, s = function () {
                STK.custEvent.add(popcard, "show", r)
            }, t = function () {
                l = STK.builder(cardBox).list;
                l.close[0].style.display = "none";
                cardBox.style.zIndex = "9999"
            }, u = function () {
                t();
                s()
            }, v = function () {
                STK.custEvent.remove(popcard, "show", r);
                card.hide();
                popcard && popcard.destroy()
            };
            u()
        }
    });
    STK.register("pl.rightmod.myinfo.source.init", function (a) {
        return function (b) {
            function l() {
            }

            function k() {
                function e(a) {
                    return a + 0 !== a ? "" : a <= 0 ? "1" : a <= 10 ? "2" : a <= 20 ? "3" : a <= 30 ? "4" : a <= 48 ? "5" : ""
                }

                var b = c.levelNum[0];
                if (!!b) {
                    var d = a.queryToJson(g.getAttribute("action-data") || "").level || h(a.trim(b.innerHTML).replace("Lv.", ""));
                    d = parseInt(d);
                    var f = e(d), i = e(d + 1);
                    a.addClassName(g, "rank_ani rank_ani" + f);
                    f !== i && setTimeout(function () {
                        a.removeClassName(g, "icon_level_c" + f);
                        a.removeClassName(g, "rank_ani" + f);
                        a.addClassName(g, "icon_level_c" + i);
                        a.addClassName(g, "rank_ani" + i)
                    }, 1e3);
                    a.insertHTML(b.parentNode, '<span title="微博等级' + (d + 1) + ' 升级有好礼">Lv.' + (d + 1) + "</span>", "BeforeEnd");
                    var j = navigator.userAgent.toLowerCase(), k = j.indexOf("msie") > -1 && j.indexOf("opera") == -1, l = /(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(j), m = l ? l[1] : "0";
                    if (k && m < 10) {
                        b.style.display = "none";
                        a.removeNode(b)
                    }
                }
            }

            function j() {
                var b = h(a.trim(e.innerHTML));
                b !== !1 && a.ui.badge(e, b - 1, !1)
            }

            function i() {
                var b = h(a.trim(e.innerHTML));
                b !== !1 && a.ui.badge(e, b + 1)
            }

            function h(a) {
                return/^\d+$/.test(a) ? parseInt(a, 10) : !1
            }

            var c = a.builder(b).list, d = c.level, e = c.weibo[0], f = $CONFIG.uid, g = c.levelBox[0];
            d && d[0] && d[0].setAttribute("levelcard", a.jsonToQuery({uid: f, id: "level_" + f}));
            g && g.getAttribute("levelup") == "1" && setTimeout(k, 500);
            a.conf.channel.feed.register("publish", i);
            a.conf.channel.feed.register("forward", i);
            a.conf.channel.feed.register("delete", j);
            return{destroy: l}
        }
    });
    FM.register("pl.rightmod.myinfo.index", function (b, c) {
        return a.pl.rightmod.myinfo.source.init(a.E(b))
    })
});