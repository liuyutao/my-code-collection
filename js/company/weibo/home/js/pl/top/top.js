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
    STK.register("lib.kit.extra.language", function (a) {
        window.$LANG || (window.$LANG = {});
        return function (b) {
            var c = [].splice.call(arguments, 1, arguments.length), d = [b, $LANG].concat(c), e = a.core.util.language.apply(this, d);
            return e
        }
    });
    STK.register("lib.kit.dom.parseDOM", function (a) {
        return function (a) {
            for (var b in a)a[b] && a[b].length == 1 && (a[b] = a[b][0]);
            return a
        }
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
    STK.register("conf.channel.topTip", function (a) {
        var b = ["refresh", "readed", "currentGroup", "unread", "apps", "dm", "dmConnected", "dmOpenIm", "logoClick"];
        return a.lib.kit.extra.listener.define("conf.channel.topTip", b)
    });
    STK.register("pl.top.formatData", function (a) {
        var b = {}, c = function (a) {
            return/^(http|https):\/\/([\w-]+(\.[\w-]+)+(\/[\w-   .\/\?%@&+=\u4e00-\u9fa5]*)?)?$/i.test(a)
        };
        b.replaceTags = function (b) {
            return a.trim((b + "").replace(/<[^>]+>/g, ""))
        };
        b.format = function (b, d) {
            d = d || {};
            var e, f = {}, g = a.core.json.merge(d, {}, {isDeep: !0}), h = g.hrefurl;
            h && !c(h) && delete g.hrefurl;
            for (e in b) {
                f[e] = b[e];
                g[e] != null && b.hasOwnProperty(e) && typeof g[e] != "object" && (f[e] = g[e])
            }
            return f
        };
        b.formatMerge = function (d, e, f) {
            var g, h = {};
            if (f && f.length > 0) {
                e = e || {};
                var i = a.core.json.merge(e, {}, {isDeep: !0}), j = i.hrefurl;
                j && !c(j) && delete i.hrefurl;
                for (g in d) {
                    h[g] = d[g];
                    a.core.arr.inArray(g, f) && i[g] != null && d.hasOwnProperty(g) && typeof i[g] != "object" && (h[g] = i[g])
                }
                return h
            }
            return b.format(d, e)
        };
        b.formatCheck = function (b, d) {
            if (!b)return!1;
            var e = a.core.json.merge(b, {}, {isDeep: !0}), f = e.hrefurl, g = {};
            if (f && c(f)) {
                var h = d.length;
                if (h > 0) {
                    var i = !0;
                    for (var j = 0; j < h; j++)if (typeof b[d[j]] == "undefined") {
                        i = !1;
                        break
                    }
                    if (i) {
                        for (var k = 0; k < h; k++)typeof e[d[k]] != "object" && (g[d[k]] = b[d[k]]);
                        return g
                    }
                    return!1
                }
                return!1
            }
            return!1
        };
        return b
    });
    STK.register("pl.top.templates.remind", function (a) {
        return function () {
            return'<#et tip data><a href="javascript:void(0);" action-type="close" class="W_ficon ficon_close S_ficon" suda-data="key=tblog_home_new&value=topnav_sign_close">X</a><ul><#if (data.cmt_c)><li>${data.cmt_c}#L{条新评论}，<a target="_top" bpfilter="message" suda-data="key=yellowtag_remind_click&value=cmt_remind" href="${data.domainUrl}/comment/inbox?${data.info}&mod=message&f=1&need_filter=1">#L{查看评论%s}</a></li></#if><#if (data.moments_to_me)><li>${data.moments_to_me}#L{条新的好友圈微博}，<a target="_top" suda-data="key=yellowtag_remind_click&value=friends_remind" bpfilter="main"  href="${data.domainUrl}/friends?${data.info}&mod=message&isfriends=1">#L{查看%s}</a></li></#if><#if (data.follower)><li>${data.follower}#L{位新粉丝}，<a target="_top" bpfilter="page_frame" suda-data="key=yellowtag_remind_click&value=newfans_remind" href="${data.domainUrl}/${data.uid}/fans?${data.info}&mod=message&need_filter=1">#L{查看粉丝%s}</a></li></#if><#if (data.remind_settings && data.remind_settings.msgbox && data.remind_settings.msgbox==1 && data.msgbox)><li>${data.msgbox}#L{条新未关注人私信}，<a target="_top" bpfilter="message" href="${data.domainUrl}/notesboard?${data.info}&mod=message">#L{查看%s}</a></li></#if><#if (data.mention_status)><li>${data.mention_status}#L{条@我的微博}，<a target="_top" suda-data="key=yellowtag_remind_click&value=atme_remind" bpfilter="message" href="${data.domainUrl}/at/weibo?${data.info}&mod=message&need_filter=1">#L{查看@我%s}</a></li></#if><#if (data.mention_cmt)><li>${data.mention_cmt}#L{条@我的评论}，<a target="_top"  bpfilter="message" suda-data="key=yellowtag_remind_click&value=atme_remind" href="${data.domainUrl}/at/comment?${data.info}&mod=message&need_filter=1">#L{查看@我%s}</a></li></#if><#if (data.chat_group_notice)><li>${data.chat_group_notice}#L{条群通知}，<a target="_top"  bpfilter="message"  href="${data.domainUrl}/messages?is_notice=1&${data.info}">#L{查看}</a></li></#if><#if (data.page_follower)><#if (data.page_follower.pagenum>2)><li>${data.page_follower.pagenum}#L{个兴趣主页有}${data.page_follower.followercount}#L{个新粉丝}，<a target="_top" bpfilter="page_frame"  href="${data.domainUrl}/${data.uid}/follow?relate=interested#place">#L{查看}</a></li><#else><#list data.page_follower.pages as list ><li>${list.name}#L{有}${list.count}#L{个新粉丝}，<a target="_top" bpfilter="page_frame" href="${data.domainUrl}/p/${list.pid}/followlist?relate=interested&${data.info}">#L{查看}</a></li></#list></#if></#if></ul>'
        }
    });
    STK.register("pl.top.plugins.remind", function (a) {
        var b = a.lib.kit.extra.language, c = a.conf.channel.topTip, d = a.pl.top.formatData, e, f = "http://rm.api.weibo.com/2/remind/push_count.json?", g = "http://rm.api.weibo.com/2/remind/ignore_count.json", h = 1e4, i = d.replaceTags, j = [], k = ["msgbox"], l = [];
        return function (m, n) {
            function I(a, b) {
                b = b || 99;
                return a > b ? b + "+" : a
            }

            if (n.isHttps || n.https) {
                f = "https://rm.api.weibo.com/2/remind/push_count.json?";
                g = "https://rm.api.weibo.com/2/remind/ignore_count.json"
            }
            var o = a.pl.top.templates.remind(), p = {comment: "cmt_c", tome_c: "tome_c", closefriend_feed: "moments_to_me", follower: "follower", message: "dm", atme: "atme", atme_feed: "mention_status_c", atme_comment: "mention_status_c", atme_comment: "mention_cmt_c"}, q = {comment: {_data: "cmt_c", text: "#L{条新评论}", hreftext: "#L{查看评论%s}", hrefurl: "${data.domainUrl}/comment/inbox?${data.info}&mod=message&f=1&need_filter=1", isShow: !0}, tome_c: {_data: "tome_c", text: "#L{条新发给我的}", hreftext: "#L{查看微博%s}", hrefurl: "${data.domainUrl}/direct/tome?${data.info}&mod=message", isShow: !0}, closefriend_feed: {_data: "moments_to_me", text: "#L{条好友圈微博}", hreftext: "#L{查看%s}", hrefurl: "${data.domainUrl}/friends?${data.info}&mod=message&isfriends=1", isShow: !0}, follower: {_data: "follower", text: "#L{位新粉丝}", hreftext: "#L{查看粉丝%s}", hrefurl: "${data.domainUrl}/${data.uid}/fans?${data.info}&mod=message", isShow: !0}, msgbox: {_data: "msgbox", text: "#L{条新未关注人私信}", hreftext: "#L{查看%s}", hrefurl: "${data.domainUrl}/notesboard?${data.info}&mod=message", isShow: !0}, atme: {_data: "atme", text: "#L{条新@我}", hreftext: "#L{查看@我%s}", hrefurl: "${data.domainUrl}/${data.atlink}?${data.info}&mod=message&need_filter=1", isShow: !0}, atme_feed: {_data: "mention_status_c", text: "#L{条新@我的微博}", hreftext: "#L{查看@我%s}", hrefurl: "${data.domainUrl}/at/weibo?${data.info}&mod=message&need_filter=1", isShow: !0}, atme_comment: {_data: "mention_cmt_c", text: "#L{条新@我的评论}", hreftext: "#L{查看@我%s}", hrefurl: "${data.domainUrl}/at/comment?${data.info}&mod=message&need_filter=1", isShow: !0}, groupNotice: {_data: "chat_group_notice", text: "#L{群通知}", hreftext: "#L{查看}", hrefurl: "${data.domainUrl}/messages?is_notice=1&${data.info}", isShow: !0}}, r = m.tips, s = function (b, c) {
                var d = [];
                a.core.arr.indexOf(c, k) != -1 && d.push("<#if (data.remind_settings && data.remind_settings." + c + " && data.remind_settings." + c + "==1)>");
                a.core.arr.indexOf(c, l) != -1 && d.push("<#if (data._iswhitelist)>");
                d.push("<#if (data." + b._data + ")>");
                d.push("<li>${data."+b._data+"}" + i(b.text) + '，<a target="_top" ' + (b.actiontype ? ' action-type="' + i(b.actiontype) + '"' : "") + (b.title ? ' title="' + i(b.title) + '"' : "") + ' href=" ' + i(b.hrefurl) + '"' + (b.bp ? '" bpfilter="' + i(b.bp) + '"' : "") + ">" + i(b.hreftext) + "</a></li>");
                d.push("</#if>");
                (a.core.arr.indexOf(c, k) != -1 || a.core.arr.indexOf(c, l) != -1) && d.push("</#if>");
                return d.join("")
            }, t = function (a) {
                if (typeof a != "object")return!1;
                var b = [], c = [];
                b.push('<#et tip data><a href="javascript:void(0);" action-type="close" class="W_ico12 icon_close" suda-data="key=tblog_home_new&value=topnav_sign_close"></a><ul class="tips_list">');
                var e, f;
                for (var g in q) {
                    if (a[g]) {
                        c.push(g);
                        f = a[g];
                        e = d.format(q[g], f)
                    } else {
                        e = q[g];
                        var h = p[g];
                        if (h && a[h]) {
                            c.push(g);
                            f = a[h];
                            e = d.format(q[g], f)
                        }
                    }
                    if (e.isShow) {
                        j.push(g);
                        if (g == "atme") {
                            var k = q.mention_cmt_c;
                            a.mention_cmt_c && (k = d.$format(q.mention_cmt_c, a.mention_cmt_c));
                            if (a[g] && a[g].hrefurl && e.hrefurl != q[g].hrefurl || a.mention_cmt_c && a.mention_cmt_c.hrefurl && k.hrefurl != q.mention_cmt_c.hrefurl) {
                                b.push("<#if (data.atme)>");
                                b.push("<li>${data.atme}" + i(e.text) + '，<a target="_top"' + (e.actiontype ? ' action-type="' + i(e.actiontype) + '"' : "") + (e.title ? ' title="' + i(e.title) + '"' : "") + ' href="<#if (data.onlycmt)> ' + i(e.hrefurl) + "<#else>" + i(k.hrefurl) + '</#if>"' + (e.bp ? ' bpfilter="' + i(e.bp) + '"' : "") + ">" + i(e.hreftext) + "</a></li>");
                                b.push("</#if>")
                            } else b.push(s(e, g))
                        } else b.push(s(e, g))
                    }
                }
                b.push('<#if (data.page_follower)><#if (data.page_follower.pagenum>2)><li>${data.page_follower.pagenum}#L{个兴趣主页有}${data.page_follower.followercount}#L{个新粉丝}，<a target="_top"  href="${data.domainUrl}/${data.uid}/follow?relate=interested#place">#L{查看}</a></li><#else><#list data.page_follower.pages as list ><li>${list.name}#L{有}${list.count}#L{个新粉丝}，<a target="_top"   href="${data.domainUrl}/p/${list.pid}/followlist?relate=interested&${data.info}">#L{查看}</a></li></#list></#if></#if>');
                b.push("</ul></#et>");
                return b.join("")
            }, u = 0, v = !1, w = !1, x = {}, y = {}, z = null;
            try {
                var A = t(n.tips)
            } catch (B) {
            }
            A && (o = A);
            var C = [o];
            for (var D = 0; D < 12; D++)C.push("");
            o = b.apply(this, C);
            var E = null, F = "0";
            c.register("currentGroup", function (a) {
                a ? E = a : E = null
            });
            c.register("currentStatusType", function (a) {
                F = a
            });
            var G = function () {
                var b = "";
                n.access_token && (b = "&access_token=" + n.access_token);
                var c = "";
                E && (c = "&group_id=" + E);
                var d = "";
                F && (d = "&status_type=" + F);
                var g = f + "trim_null=1&with_settings=1&exclude_attitude=1&with_common_cmt=1&with_comment_attitude=1&with_common_attitude=1&with_moments=1&&with_dm_unread=1&msgbox=true&with_page_group=1&with_chat_group=1&with_chat_group_notice=1&_pid=" + n.pid + "&count=" + u + "&source=" + n.source + b + c + d;
                a.jsonp({url: g, onComplete: function (b) {
                    u += 1;
                    if (u == 2) {
                        h = 2e4;
                        e && clearInterval(e);
                        e = setInterval(G, h)
                    } else if (u == 3) {
                        h = 3e4;
                        e && clearInterval(e);
                        e = setInterval(G, h)
                    }
                    if (b.code == "1") {
                        var c = ["tome", "moments_to_me", "status", "attitude", "chat_group_notice", "follower", "cmt", "mention_status", "mention_cmt", "dm_unread", "messages"];
                        a.foreach(c, function (a, c) {
                            b.data[a] === undefined && (b.data[a] = 0)
                        });
                        x = a.core.json.clone(b.data);
                        K(b.data);
                        a.conf.channel.topTip.fire("readed", b)
                    }
                }, onFail: function () {
                }, onTimeout: function () {
                }})
            }, H = function (b) {
                b.atme = b.mention_status + b.mention_cmt;
                b.cmt_c = b.cmt;
                b.attitude_c = b.attitude;
                b.tome_c = b.tome;
                b.uid = n.uid;
                b.info = n.info;
                b.domainUrl = n.domainUrl;
                b.atlink = "at/weibo";
                b.onlycmt = !0;
                typeof z == "number" && (b.dm = z);
                b.mention_status_c = b.mention_status;
                b.mention_cmt_c = b.mention_cmt;
                if (b.mention_status === 0 && b.mention_cmt !== 0) {
                    b.atlink = "at/comment";
                    b.onlycmt = !1
                }
                if (typeof n.tips == "object") {
                    var c = j.length;
                    for (var d = 0; d < c; d++) {
                        var e = j[d];
                        if (a.core.arr.findout(k, e)) {
                            if (b[e] && b.remind_settings && b.remind_settings[e] && b.remind_settings[e] == 1)break;
                            continue
                        }
                        if (b[e])break
                    }
                }
                if (b.page_follower) {
                    var f = b.page_follower.pages;
                    if (f) {
                        var c = f.length;
                        for (var d = 0; d < c; d++)f[d] && f[d].pid && (f[d].pid = f[d].pid.split(":")[1])
                    }
                }
                return b
            }, J = function (b) {
                if (typeof n.tips == "object") {
                    for (var c in q) {
                        var d = p[c];
                        if (q[c] && a.core.arr.indexOf(c, j) != -1 && (b[c] || d && b[d]) && a.core.arr.indexOf(c, l) == -1) {
                            if (a.core.arr.indexOf(c, k) == -1)return!1;
                            if (b.remind_settings && b.remind_settings.msgbox == 1)return!1
                        }
                    }
                    return!0
                }
                return!b.cmt && !b.follower && !b.mention_cmt && !b.mention_status && !b.tome && !b.moments_to_me && !b.chat_group_notice && (!b.page_follower || !b.page_follower.pagenum) && (!b.remind_settings || b.remind_settings.msgbox != 1 || !b.msgbox) ? !0 : !1
            }, K = function (b) {
                b = H(b);
                if (J(b)) {
                    M();
                    w = !1;
                    r.innerHTML = ""
                } else {
                    var c = {}, d = a.core.json.clone(b), e = ["cmt_c", "moments_to_me", "follower", "msgbox", "chat_group_notice", "mention_status", "mention_cmt"];
                    a.foreach(e, function (a, b) {
                        c[a] = d[a] > 0 ? 1 : 0
                    });
                    a.core.json.compare(y, c) || (w = !1);
                    y = c;
                    var f = a.core.util.easyTemplate(o, b).toString();
                    r.innerHTML = f;
                    L()
                }
                var g = a.sizzle(".W_new_count", m.msg)[0], h = b.messages;
                if (typeof z == "number") {
                    h = h - b.dm_unread + z;
                    h = h > 0 ? h : 0
                }
                var i = g ? parseInt(g.innerHTML) : 0;
                if (i != h) {
                    g && a.removeNode(g);
                    g = null;
                    h && a.insertHTML(m.msg, '<em class="W_new_count">' + I(h) + "</em>")
                }
            }, L = function () {
                if (!v) {
                    r.style.display = "";
                    !w && window.WBEXP && window.WBEXP.collect({v6toplayer: "top_yellow"});
                    w = !0
                }
            }, M = function () {
                r.style.display = "none"
            }, N = function () {
                setTimeout(function () {
                    G();
                    e = setInterval(G, h)
                }, 3e3);
                if (r) {
                    var b = a.delegatedEvent(r, []);
                    b.add("close", "click", function () {
                        M();
                        w = !1;
                        z = null;
                        a.jsonp({url: g, args: {source: n.source, with_closefriends: !1}, onComplete: function (a) {
                        }, onFail: function () {
                        }, onTimeout: function () {
                        }});
                        x = {}
                    })
                }
                c.register("refresh", G);
                var d = !1;
                c.register("dmConnected", function () {
                    d = !0
                });
                c.register("dm", function (b) {
                    z = b;
                    var d = a.core.json.clone(x);
                    K(d);
                    var e = {};
                    e.data = x;
                    c.fire("readed", e)
                });
                if (a.core.util.browser.IE6 && r) {
                    var f = document.documentElement.scrollTop, i = !0;
                    r.style.position = "absolute";
                    var j = a.position(m.msg);
                    a.setXY(r, {t: j.t + 40, l: j.l});
                    setInterval(function () {
                        var a = document.documentElement.scrollTop;
                        if (f === a) {
                            if (!i && !J(x)) {
                                L();
                                a < 40 ? r.style.top = 40 : r.style.top = a
                            }
                            i = !0
                        } else {
                            i = !1;
                            M()
                        }
                        f = a
                    }, 300)
                }
            };
            N();
            var O = {};
            O.close = function () {
                r.style.display = "none";
                v = !0
            };
            O.open = function () {
                v = !1;
                K(x)
            };
            return O
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
    STK.register("pl.top.plugins.logo", function (a) {
        var b = a.conf.channel.topTip, c = "http://img.t.sinajs.cn/t6/style/images/global_nav/", d = "http://img.t.sinajs.cn/t6/style/images/global_nav/", e = a.lib.kit.extra.swfobject;
        return function (f, g) {
            if (g.https) {
                c = "https://img.t.sinajs.cn/t6/style/images/global_nav/";
                d = "https://img.t.sinajs.cn/t6/style/images/global_nav/"
            }
            var h = function () {
                var h = f.logo, i = f.logolink;
                if (!!h) {
                    var j = h.getAttribute("data-logotype") || "", k = h.getAttribute("data-logourl") || "";
                    if (!k || !j)return;
                    var l = !0, m = g.https && g.httpspath;
                    setTimeout(function () {
                        a.addEvent(h, "click", function () {
                            b.fire("logoClick")
                        });
                        k.indexOf("http://") == -1 && k.indexOf("https://") == -1 && (l = !1);
                        if (j == "1") {
                            l || (k = (m ? m : c) + k);
                            function f(a, b) {
                                var c = new Image;
                                c.src = a;
                                c.complete ? b.call(c) : c.onload = function () {
                                    b.call()
                                }
                            }

                            var n = function () {
                                i.innerHTML = "";
                                a.insertHTML(i, '<img src ="' + (k + "?_t=" + g.version) + '">', "beforeend")
                            };
                            f(k, n)
                        } else if (j == "2") {
                            if (e.getFlashPlayerVersion().major < 9)return;
                            var o = {}, p = {menu: "false", scale: "noScale", allowFullscreen: "false", allowScriptAccess: "always", wmode: "transparent"};
                            k = k + "?_t=" + g.version;
                            var q = "logo_" + a.getUniqueKey(), r = {id: q, name: " top_logo"}, n = function () {
                            }, s = d + "home/static/swf/img/";
                            m && (s = m);
                            l || (k = m ? m + k : d + k);
                            i.innerHTML = "";
                            a.insertHTML(i, '<span id ="' + q + '"></span>', "beforeend");
                            e.embedSWF(k, q, "190", "48", "10.0.0", s + "expressInstall.swf", o, p, r, n)
                        }
                    }, 3e3)
                }
            };
            h()
        }
    });
    STK.register("pl.top.plugins.webim.plugins.webim", function (a) {
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
    STK.register("pl.top.plugins.webim.init", function (a) {
        var b = a.conf.channel.topTip, c = a.pl.top.plugins.webim.plugins.webim;
        return function () {
            try {
                window.__PubSub__ = window.__PubSub__ || c();
                window.__PubSub__.subscribe("webim.showMessage", function (a) {
                    b.fire("dm", parseInt(a, 10))
                });
                window.__PubSub__.subscribe("webim.connected", function (a) {
                    b.fire("dmConnected", !0)
                });
                b.register("dmOpenIm", function () {
                    window.__PubSub__.publish("webim.messageTipClicked", !0)
                })
            } catch (a) {
            }
        }
    });
    STK.register("lib.kit.touch.cantouch", function (a) {
        return STK.core.util.browser.IPAD
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
    STK.register("lib.kit.extra.merge", function (a) {
        return function (a, b) {
            var c = {};
            for (var d in a)c[d] = a[d];
            for (var d in b)c[d] = b[d];
            return c
        }
    });
    STK.register("pl.top.plugins.menu.layer", function (a) {
        var b = a.lib.kit.dom.hover, c = a.lib.kit.extra.language, d = a.lib.kit.extra.merge;
        return function (e, f, g, h) {
            var i = {};
            if (!f || !g)return!1;
            var j = a.queryToJson(f.getAttribute("action-data") || "");
            j._t = 1;
            var k = j.topnav_type, h = h || {}, l = a.parseParam({type: k, url: h.domainUrl + "/aj/top/getcustomized?_wv=5", loopTime: 3e5, extraData: {}}, h), m = l.loopTime, n = h.layerObject && h.layerObject(g, f), o = function () {
                if (g.style.display === "none") {
                    !e[l.type] && (e[l.type] = {});
                    if (g._out && e[l.type].html) {
                        g.innerHTML = e[l.type].html;
                        n && n.start && n.start()
                    }
                    g._out = !1;
                    g.style.display = "";
                    a.ui.effect(g, "fadeInDown", "fast");
                    q();
                    if (!e[l.type].handler) {
                        g.innerHTML = c('<div><i class="W_loading"></i> <span>#L{正在加载，请稍候...}</span></div>');
                        a.jsonp({url: l.url, method: "get", varkey: "_v", args: d(j, l.extraData), onComplete: function (a) {
                            if (a.code === "100000") {
                                g.innerHTML = a.data;
                                n && n.start && n.start();
                                e[l.type].handler = !0;
                                e[l.type].html = a.data;
                                setTimeout(function () {
                                    e[l.type].handler = !1
                                }, m)
                            }
                        }})
                    }
                    a.addClassName(f, "gn_onmouse  W_arrow_turn");
                    a.custEvent.fire(i, "show")
                }
            }, p = function () {
                g.style.display != "none" && a.ui.effect(g, "fadeOutUp", "fast", function () {
                    g.style.display = "none";
                    g._out = !0;
                    a.removeClassName(f, "gn_onmouse  W_arrow_turn");
                    a.custEvent.fire(i, "hide");
                    e[l.type] && e[l.type].html && (g.innerHTML = e[l.type].html)
                })
            }, q = function () {
                h.type == "_account" && window.WBEXP && window.WBEXP.collect({v6toplayer: "top_account"})
            };
            b({act: f, extra: [g], onmouseover: o, onmouseout: p});
            a.custEvent.define(i, ["show", "hide"]);
            return i
        }
    });
    STK.register("pl.top.plugins.menu.nav", function (a) {
        var b = a.pl.top.plugins.menu.layer;
        return function (a) {
            var c = {}, d = 3e5, e = {_account: {timeout: d, handler: !0}}, f = function (c, d, f) {
                f = f || {};
                f.domainUrl = a.domainUrl;
                var g = b(e, c, d, f);
                return g
            };
            c.add = f;
            c.destroy = function () {
                $hover.destroy()
            };
            return c
        }
    });
    STK.register("lib.kit.extra.htmlFilter", function (a) {
        var b = /([a-z\d-]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^\s]+)))?/ig, c = /^on([a-z\d-]*)$/i, d = /&#(x?)([a-z\d]*);?/ig, e = /(javascript|vbscript|expression|applet)/i, f = /^(audio|video|html|object|embed|applet|param|body|head|form|script|iframe|expression|applet|meta|xml|blink|style|frame|frameset|ilayer|layer|bgsound|title|base)$/i, g = function (a) {
            return a.replace(b, function (a, b, f) {
                var g = a.replace(d, function () {
                    var a = arguments[1], b = arguments[2];
                    return String.fromCharCode(a ? parseInt(b, 16) : b)
                }).replace(/(\s|%20)/g, "");
                return e.test(g) || c.test(b) ? "" : a
            })
        }, h = function (a) {
            var b = a[0], c = a[1], d = a[2], e = a[3];
            return f.test(d) ? "" : !d || !e ? b : c ? ["</", d, ">"].join("") : ["<", d, " ", g(e), ">"].join("")
        };
        return function (b) {
            var c = a.core.str.parseHTML(b);
            c = a.foreach(c, h);
            return c.join("")
        }
    });
    STK.register("pl.top.templates.account", function (a) {
        return function () {
            return'<#et data data><ul><li><a href="http://account.weibo.com/set/index?${data.info}" suda-data="key=account_setup&value=account_setup">#L{帐号设置}</a></li><li><a target="_top" href="http://verified.weibo.com/verify?${data.info}" suda-data="key=account_setup&value=vuser_authen">#L{V认证}</a></li> <li><a target="_top" href="http://security.weibo.com/security/index?${data.info}" suda-data="key=account_setup&value=account_safe">#L{帐号安全}</a></li> <li><a target="_top" href="http://account.weibo.com/set/privacy?${data.info}" suda-data="key=account_setup&value=privacy_setup">#L{隐私设置}</a></li><li><a href="http://account.weibo.com/set/message?${data.info}" suda-data="key=account_setup&value=notice_setup">#L{消息设置}</a></li><li><a href="http://help.weibo.com/?${data.info}" suda-data="key=account_setup&value=helpcenter">#L{帮助中心}</a></li><li class="line S_line1"></li><li class="gn_func"><a target="_top" suda-data="key=account_setup&value=quit" href="http://weibo.com/logout.php?backurl=${data.backurl}">#L{退出}</a></li></ul><div class="W_layer_arrow"><span class="W_arrow_bor W_arrow_bor_t"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div><#/et>'
        }
    });
    STK.register("pl.top.plugins.menu.account", function (a) {
        var b = a.lib.kit.extra.language, c = a.pl.top.formatData, d = c.replaceTags;
        return function (e, f) {
            f.skinUrl = f.skinUrl || "/home";
            var g = 3, h = 5, i = {account: {hrefurl: "http://account.weibo.com/set/index?" + f.info, text: "#L{帐号设置}", isShow: !0}, verified: {hrefurl: "http://verified.weibo.com/verify?" + f.info, text: "#L{V认证}", isShow: !0}, save: {hrefurl: "http://security.weibo.com/security/index?" + f.info, text: "#L{帐号安全}", isShow: !0}, "private": {hrefurl: "http://account.weibo.com/set/privacy?" + f.info, text: "#L{隐私设置}", isShow: !0}, notice: {hrefurl: "http://account.weibo.com/set/message?" + f.info, text: "#L{消息设置}", isShow: !0}, help: {hrefurl: "http://help.weibo.com/?rightmod=1&wvr=6", text: "#L{通知设置}", isShow: !0}}, j = {info: f.info, backurl: encodeURIComponent(d(f.backurl))}, k = a.pl.top.templates.account(), l = a.core.util.easyTemplate(k, j).toString(), m = function (b) {
                if (typeof b != "object")return!1;
                var e = [], j = [];
                e.push('<ul class="gn_text_list">');
                var k, l, m = 0;
                for (var n in i) {
                    if (b[n]) {
                        j.push(n);
                        l = b[n];
                        k = c.formatMerge(i[n], l, ["isShow", "hrefurl"])
                    } else k = i[n];
                    if (k.isShow) {
                        m++;
                        e.push('<li><a target="_top"' + (k.title ? ' title="' + d(k.title) + '"' : "") + ' href="' + d(k.hrefurl) + '">' + d(k.text) + "</a></li>")
                    }
                }
                var o = 0;
                for (var p in b)if (!i[p]) {
                    k = c.formatCheck(b[p], ["hrefurl", "text"]);
                    if (k) {
                        if (o >= g || m >= h)break;
                        m++;
                        o++;
                        e.push('<li><a target="_top"' + (k.title ? ' title="' + d(k.title) + '"' : "") + ' href="' + d(k.hrefurl) + '">' + d(k.text) + "</a></li>")
                    }
                }
                e.push('<li class="gn_func"><a target="_top" href="http://weibo.com/logout.php?backurl=' + encodeURIComponent(a.lib.kit.extra.htmlFilter(f.backurl)) + '">#L{退出}</a></li>');
                e.push("</ul>");
                e.push('<div class="W_layer_arrow"><span class="W_arrow_bor W_arrow_bor_t"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div>');
                return e.join("")
            }, n = m(f.account);
            n && (l = n);
            e.accountLayer.innerHTML = b(l)
        }
    });
    STK.register("conf.channel.msgbox", function (a) {
        var b = ["start", "stop", "data"];
        return a.lib.kit.extra.listener.define("conf.channel.msgbox", b)
    });
    STK.register("pl.top.templates.unread", function (a) {
        return function () {
            return'<#et tip data><ul><li><a target="_top" suda-data="key=info_box&value=atme" action-type="bp-link" bpfilter="message" href="${data.domainUrl}/${data.atlink}?${data.info}"><#if (data.atme)><em class="W_new_count">${data.atme}</em></#if>#L{@我的}</a></li><li><a target="_top" suda-data="key=info_box&value=comment" action-type="bp-link" bpfilter="message" href="${data.domainUrl}/comment/inbox?${data.info}&f=1"><#if (data.cmt)><em class="W_new_count">${data.cmt}</em></#if>#L{评论}</a></li><li><a target="_top" suda-data="key=info_box&value=like" action-type="bp-link" bpfilter="message" href="${data.domainUrl}/like/inbox?${data.info}&f=1"><#if (data.attitude)><em class="W_new_count">${data.attitude}</em><#else></#if>#L{赞}</a></li><li class="line S_line2"></li><li><a target="_top" suda-data="key=info_box&value=privacy_letter" action-type="bp-link" bpfilter="message" action-data="goMsg=stop" href="${data.domainUrl}/messages?${data.info}"><#if (data.dm)><em class="W_new_count">${data.dm}</em></#if>#L{私信}</a></li><li><a target="_top" suda-data="key=info_box&value=unattention_privacy_letter" bpfilter="message" href="${data.domainUrl}/notesboard?${data.info}"><#if (data.msgbox && data.remind_settings && data.remind_settings.msgbox && data.remind_settings.msgbox==1)><em class="W_new_count">${data.msgbox}</em><#else></#if>#L{未关注人私信}</a></li><li><a target="_top"  action-type="bp-link" bpfilter="message"  href="${data.domainUrl}/messages?is_notice=1&${data.info}"><#if (data.chat_group_notice)><em class="W_new_count">${data.chat_group_notice}</em></#if>#L{群通知}</a></li><li class="line S_line1"></li><li class="gn_func"><a target="_top" suda-data="key=info_box&value=remind_setup" href="http://account.weibo.com/set/message?${data.info}&info_box=1">#L{消息设置}</a></li></ul><div class="W_layer_arrow"><span class="W_arrow_bor W_arrow_bor_t"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></#et>'
        }
    });
    STK.register("pl.top.plugins.menu.unread", function (a) {
        var b = a.pl.top.formatData, c = a.lib.kit.extra.language, d = a.lib.kit.dom.hover, e = a.conf.channel.topTip;
        return function (e, f) {
            var g = "http://rm.api.weibo.com/2/remind/unread_count.json?", h = b.replaceTags, i = [], j, k = {comment: "cmt", atme: "atme", message: "dm", messagebox: "msgbox", follower: "follower", closefriends_feed: "moments_to_me", sendtome_feed: "tome"}, l = {atme: {_data: "atme", hrefurl: "${data.domainUrl}/${data.atlink}?${data.info}", newText: "#L{@我的}", text: "#L{@我的}", isShow: !0, actiontype: "bp-link"}, comment: {_data: "cmt", hrefurl: "${data.domainUrl}/comment/inbox?f=1&${data.info}", newText: "#L{评论}", text: "#L{评论}", isShow: !0, actiontype: "bp-link"}, attitude: {_data: "cmt", hrefurl: "${data.domainUrl}/like/inbox?${data.info}&f=1", newText: "#L{赞}", text: "#L{赞}", isShow: !0, actiontype: "bp-link"}, message: {_data: "dm", hrefurl: "${data.domainUrl}/messages?${data.info}", newText: "#L{私信}", text: "#L{私信}", isShow: !0, actiontype: "bp-link"}, messagebox: {_data: "msgbox", hrefurl: "${data.domainUrl}/notesboard?${data.info}", newText: "#L{未关注人私信}", text: "#L{未关注人私信}", isShow: !0}, groupNotice: {_data: "chat_group_notice", hrefurl: "${data.domainUrl}/messages?is_notice=1&${data.info}", newText: "#L{群通知}", text: "#L{群通知}", isShow: !0}};
            if (f.isHttps || f.https)g = "https://rm.api.weibo.com/2/remind/unread_count.json?";
            var m = a.pl.top.templates.unread(), n = {}, o = function (b, c) {
                var d = [];
                d.push('<li><a target="_top"' + (b.actiontype ? ' action-type="' + h(b.actiontype) + '"' : "") + (b.title ? ' title="' + h(b.title) + '"' : "") + (b.bp ? ' bpfilter="' + h(b.bp) + '"' : "") + ' href="' + h(b.hrefurl) + '">');
                d.push("<#if (data." + b._data + ")>");
                i.length > 0 && a.core.arr.indexOf(i, c) != -1 && d.push("<#if(data.remind_settings && data.remind_settings." + b._data + " && data.remind_settings." + b._data + "==1)>");
                d.push('<em class="W_new_count">${data.' + b._data + "}</em>");
                i.length > 0 && a.core.arr.indexOf(i, c) != -1 && d.push("<#else>" + h(b.text) + "</#if>");
                d.push(h(b.newText) + "<#else>" + h(b.text) + "</#if></a></li>");
                return d.join("")
            }, p = function (a) {
                if (typeof a != "object")return!1;
                var c = [], d = [];
                c.push('<#et tip data><ul class="gn_text_list">');
                var e, f;
                for (var g in l) {
                    if (a[g]) {
                        d.push(g);
                        f = a[g];
                        e = b.format(l[g], f)
                    } else {
                        e = l[g];
                        var i = k[g];
                        if (i && a[i]) {
                            d.push(g);
                            f = a[i];
                            e = b.format(l[g], f)
                        }
                    }
                    if (e.isShow)if (g == "atme") {
                        var j = l.mention_cmt_c;
                        a.mention_cmt_c && (j = b.format(l.mention_cmt_c, a.mention_cmt_c));
                        if (a[g] && a[g].hrefurl && e.hrefurl != l[g].hrefurl || a.mention_cmt_c && a.mention_cmt_c.hrefurl && j.hrefurl != l.mention_cmt_c.hrefurl) {
                            c.push('<li><a target="_top"' + (e.actiontype ? ' action-type="' + h(e.actiontype) + '"' : "") + (e.title ? ' title="' + h(e.title) + '"' : "") + (e.bp ? ' bpfilter="' + h(e.bp) + '"' : "") + ' href="<#if (data.onlycmt)> ' + h(e.hrefurl) + "<#else>" + h(j.hrefurl) + '</#if>">');
                            c.push("<span>${data."+e._data+"}</span><#if (data." + e._data + ")>" + h(e.newText) + "<#else>" + h(e.text) + "</#if></a></li>")
                        } else c.push(o(e, g))
                    } else c.push(o(e, g))
                }
                c.push('<li class="line S_line1"></li>');
                c.push('<li class="gn_func"><a target="_top" href="http://account.weibo.com/set/message?${data.info}&info_box=1">#L{消息设置}</a></li>');
                c.push("</ul>");
                c.push('<div class="W_layer_arrow"><span class="W_arrow_bor W_arrow_bor_t"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></#et>');
                return c.join("")
            }, q = p(f.unread);
            q && (m = q);
            m = c(m);
            var r = function () {
                var b = "";
                f.access_token && (b = "&access_token=" + f.access_token);
                var c = g + "target=api&unread_message=1&trim_null=1&with_moments=1&with_comment_attitude=1&with_settings=1&with_common_cmt=1&with_page_group=1&with_common_attitude=1&with_chat_group_notice=1&need_back=13" + "&_pid=" + f.pid + "&source=" + f.source + b;
                a.jsonp({url: c, onComplete: function (b) {
                    if (b.code == "1") {
                        var c = ["msgbox", "chat_group_notice", "moments_to_me", "status", "tome", "attitude", "follower", "cmt", "dm", "mention_status", "mention_cmt"];
                        a.foreach(c, function (a, c) {
                            b.data[a] === undefined && (b.data[a] = 0)
                        });
                        typeof highLeveLDmInfo == "number" && (b.data.dm = highLeveLDmInfo);
                        s(b.data);
                        u = !0;
                        a.ui.effect(e.msgLayer, "fadeInDOwn", "fast");
                        setTimeout(function () {
                            u = !1
                        }, t)
                    } else s({})
                }, onFail: function () {
                }, onTimeout: function () {
                }})
            }, s = function (b) {
                a.conf.channel.topTip.fire("refresh", {});
                b.atme = b.mention_status + b.mention_cmt;
                b.cmt = b.cmt;
                b.attitude = b.attitude;
                b.uid = f.uid;
                b.info = f.info;
                b.domainUrl = f.domainUrl;
                b.onlycmt = !0;
                b.atlink = "at/weibo";
                b.mention_status_c = b.mention_status;
                b.mention_cmt_c = b.mention_cmt;
                if (b.mention_status === 0 && b.mention_cmt !== 0) {
                    b.atlink = "at/comment";
                    b.onlycmt = !1
                }
                a.foreach(["msgbox", "moments_to_me", "atme", "chat_group_notice", "follower", "dm", "cmt", "attitude", "tome", "mention_status_c", "mention_cmt_c"], function (a, c) {
                    if (b[a] === 0 || b[a] === undefined)b[a] = "";
                    b[a] >= 100 && (b[a] = "99+")
                });
                b.app_unreadcount = b.app_message.app_unreadcount;
                b.apps = b.app_message.apps || [];
                var c = a.core.util.easyTemplate(m, b).toString();
                e.msgLayer.innerHTML = c
            }, t = 3e4, u = !1, v = !1, w = function () {
                var b = "";
                f.access_token && (b = "&access_token=" + f.access_token);
                var c = g + "target=api&unread_message=1&trim_null=1&with_moments=1&with_comment_attitude=1&with_settings=1&with_common_cmt=1&with_page_group=1&with_common_attitude=1&with_chat_group_notice=1&need_back=13" + "&_pid=" + f.pid + "&source=" + f.source + b;
                a.jsonp({url: c, onComplete: function (b) {
                    if (b.code == "1") {
                        typeof highLeveLDmInfo == "number" && (b.data.dm = highLeveLDmInfo);
                        a.conf.channel.msgbox.fire("data", b.data)
                    }
                }, onFail: function () {
                }, onTimeout: function () {
                }})
            }, x = function (a) {
                a = a || {};
                var b = a.time;
                b = b || 3e4;
                y();
                w();
                j = setInterval(function () {
                    w()
                }, b)
            }, y = function () {
                j && clearInterval(j)
            }, z = function () {
                d({act: e.msg, extra: [e.msgLayer], onmouseover: function () {
                    if (e.msgLayer.style.display === "none") {
                        e.msgLayer.style.display = "";
                        v = !0;
                        if (!u) {
                            e.msgLayer.innerHTML = c('<div><i class="W_loading"></i> <span>#L{正在加载，请稍候...}</span></div>');
                            r()
                        }
                        a.addClassName(e.msg, "gn_onmouse");
                        a.custEvent.fire(n, "show");
                        window.WBEXP && window.WBEXP.collect({v6toplayer: "top_message"})
                    }
                }, onmouseout: function () {
                    e.msgLayer.style.display != "none" && a.ui.effect(e.msgLayer, "fadeOutUp", "fast", function () {
                        e.msgLayer.style.display = "none";
                        v = !1;
                        a.removeClassName(e.msg, "gn_onmouse");
                        a.custEvent.fire(n, "hide")
                    })
                }});
                a.custEvent.define(n, ["show", "hide"]);
                window.FM && FM.oniLoadEnd(function () {
                    v && r()
                });
                a.conf.channel.msgbox.register("start", function (a) {
                    x(a)
                });
                a.conf.channel.msgbox.register("stop", function () {
                    y()
                });
                a.conf.channel.topTip.register("refresh", function () {
                    u = !1
                });
                a.conf.channel.topTip.register("readed", function () {
                    u = !1
                });
                a.conf.channel.topTip.register("dm", function (a) {
                    u = !1;
                    highLeveLDmInfo = a
                })
            };
            z();
            return n
        }
    });
    STK.register("pl.top.plugins.menu.init", function (a) {
        var b = a.pl.top.plugins.menu.nav, c = a.pl.top.plugins.menu.unread, d = a.pl.top.plugins.menu.account;
        return function (e, f) {
            var g = {}, h = b({domainUrl: f.domainUrl, language: f.language});
            d(e, f);
            var i = e.account && h.add(e.account, e.accountLayer, {type: "_account"}), j = e.msg && c(e, f), k = function () {
                a.custEvent.fire(g, "show")
            }, l = function () {
                a.custEvent.fire(g, "hide")
            }, m = function () {
                a.custEvent.define(g, ["show", "hide"]);
                j && a.custEvent.add(j, "show", k);
                j && a.custEvent.add(j, "hide", l);
                i && a.custEvent.add(i, "show", k);
                i && a.custEvent.add(i, "hide", l)
            };
            m();
            g.destroy = function () {
                b.destroy();
                j && a.custEvent.remove(j, "show", k);
                j && a.custEvent.remove(j, "hide", l);
                i && a.custEvent.remove(i, "show", k);
                i && a.custEvent.remove(i, "hide", l)
            };
            return g
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
    STK.register("pl.top.templates.suggest.userStatic", function (a) {
        return function () {
            return'<#et suggest data><ul class="selectbox"><li action-type="select" suda-data="key=tblog_top_search_v4&value=skey" isStatic="1"durl="http://s.weibo.com/weibo/${data.keywordlong}?${data.info}&topsug=1" class="curr"><a href="http://s.weibo.com/weibo/${data.keywordlong}?${data.info}&topsug=1"><em class="S_txt1">搜 “</em><span class="S_spetxt">${data.keyword}</span><em class="S_txt1">” #L{相关微博}</em></a></li></ul><div class="selectbox"><p action-type="select" class="title" isStatic="1" suda-data="key=tblog_top_search_v4&value=suser"durl="http://s.weibo.com/user/${data.keywordlong}?${data.info}&topsug=1">搜 “<span class="S_spetxt">${data.keyword}</span>”#L{相关用户}»</p></div></#et>'
        }
    });
    STK.register("pl.top.templates.suggest.userList", function (a) {
        return function () {
            return'<#et suggest data><ul class="selectbox"><li action-type="select" action-data="text=${data.keyword}" suda-data="key=tblog_top_search_v4&value=skey" isStatic="1"durl="http://s.weibo.com/weibo/${data.keywordlong}?${data.info}&topsug=1" class="curr"><a href="http://s.weibo.com/weibo/${data.keywordlong}?${data.info}&topsug=1"><em class="S_txt1">搜 “</em><span class="S_spetxt">${data.keyword}</span><em class="S_txt1">” #L{相关微博}</em></a></li><#list data.querys as list><li  action-type="select" action-data="text=${list.key}" suda-data="key=${list.sudaKey}&value=${list.sudaValue}"durl="http://s.weibo.com/weibo/${list.ekey}?${data.info}&topsug=1"><a href="durl="http://s.weibo.com/weibo/${list.ekey}?${data.info}&topsug=1">${list.key}</a></li></#list></ul><div class="selectbox"><p action-type="select" class="title" action-data="text=${data.keyword}" isStatic="1" suda-data="key=tblog_top_search_v4&value=suser"durl="http://s.weibo.com/user/${data.keywordlong}?${data.info}&topsug=1">搜 “<span class="S_spetxt">${data.keyword}</span>”#L{相关用户}»</p><#if (data.user.length)><div node-type="userResult"><#list data.user as list><dl class="clearfix" bpfilter="page_frame" action-type="select" action-data="isUser=1&topsug=1&text=${list.u_name}" suda-data="key=${list.sudaKey}&value=${list.sudaValue}"durl="${data.domainUrl}/u/${list.u_id}?${data.info}&topsug=1"><dt><a href="javascript:void(0);"><img height="30" width="30" src="${list.u_pic}"></a></dt><dd><a href="javascript:void(0);"><span class="S_spetxt">${list.u_name}<#if (list.is_v)><span class="W_icon <#if (list.verified_type)>icon_approve_co <#else>icon_approve</#if>"></span></#if></span></a><p class="area S_txt2"><span class="W_icon ${list.sex=="m"?"male":"female"}"></span>#L{粉丝}:${list.fans_n}<#if (list.prov)>${list.prov}</#if></p></dd></dl></#list></div></#if></div></#et>'
        }
    });
    STK.register("pl.top.templates.suggest.userPlus", function (a) {
        return function () {
            return'<#et suggest data><#if (data.weiba)><div class="selectbox"><p action-type="select" class="title" action-data="text=${data.keyword}" isStatic="1" suda-data="key=tblog_top_search_v4&value=sweiba"durl=" http://weiba.weibo.com/search/bar?${data.info}&k=${data.keyonceword}&topsug=1">搜 “<spanclass="c_red">${data.keyword}</span>” #L{相关微吧}»</p><div node-type="weiqunResult"><dl class="clearfix" action-type="select" action-data="isUser=1&text=${data.weiba.grade}" suda-data="key=tblog_top_search_v4&value=weiba"durl="${data.weiba.link}?${data.info}&topsug=1"><dt><span><img height="30" width="30" src="${data.weiba.pic}"></span></dt><dd><span>${data.weiba.name}<span class="${data.weiba.grade}"></span></span><p class="txtb member">#L{成员}:${data.weiba.members}</p></dd></dl></div></div></#if><#if (data.app)><div class="selectbox"><p action-type="select" action-data="text=${data.keyword}" suda-data="key=tblog_top_search_v4&value=sapp" class="title" isStatic="1"durl="http://s.weibo.com/apps/${data.keywordlong}?${data.info}&topsug=1">搜 “<span class="S_spetxt">${data.keyword}</span>”#L{相关应用}»</p><div node-type="appResult"><dl class="clearfix" action-type="select" action-data="isUser=1&text=${data.app.name}" suda-data="key=tblog_top_search_v4&value=appc"durl="${data.app.link}?${data.info}&topsug=1"><dt><a href="javascript:void(0);"><img height="30" width="30" src="${data.app.pic}"></a></dt><dd><a href="javascript:void(0);"><span class="S_spetxt">${data.app.name}</span></a><p class="area S_txt2">#L{用户}:${data.app.owner_n}</p></dd></dl></div></div></div></#if></#et>'
        }
    });
    STK.register("pl.top.plugins.search.source.modSuggest", function (a) {
        var b = null, c = a.custEvent, d = c.define, e = c.fire, f = c.add, g = a.addEvent, h = a.removeEvent, i = a.stopEvent, j = [], k = {}, l = {ENTER: 13, ESC: 27, UP: 38, DOWN: 40, TAB: 9}, m = function (b) {
            var c = -1, j = [], k = b.textNode, m = b.uiNode, n = a.core.evt.delegatedEvent(m), o = d(k, ["open", "close", "indexChange", "onSelect", "onIndexChange", "onClose", "onOpen", "openSetFlag", "resetIndex"]), p = function (a) {
                b.flag = a
            }, q = function () {
                return a.sizzle(["[action-type=", b.actionType, "]"].join(""), m)
            }, r = function () {
                c = -1;
                h(k, "keydown", s);
                n.destroy()
            }, s = function (d) {
                var f, g;
                if (!!(f = d) && !!(g = f.keyCode)) {
                    if (g == l.ENTER) {
                        e(o, "onSelect", [c, k, b.flag]);
                        c = -1;
                        a.preventDefault()
                    }
                    if (g == l.UP) {
                        i();
                        var h = q().length, j = a.sizzle(".cur", m)[0];
                        j ? c = a.core.arr.indexOf(a.sizzle(".cur", m)[0], q()) : c = -1;
                        if (c == 0) {
                            c = -1;
                            e(o, "onIndexChange", [c]);
                            return
                        }
                        c = c < 1 ? h - 1 : c - 1;
                        e(o, "onIndexChange", [c]);
                        a.preventDefault(d);
                        return!1
                    }
                    if (g == l.DOWN) {
                        i();
                        var h = q().length, j = a.sizzle(".cur", m)[0];
                        j ? c = a.core.arr.indexOf(a.sizzle(".cur", m)[0], q()) : c = -1;
                        if (c == h - 1) {
                            c = -1;
                            e(o, "onIndexChange", [c]);
                            return
                        }
                        c = c == h - 1 ? 0 : c + 1;
                        e(o, "onIndexChange", [c]);
                        a.preventDefault(d);
                        return!1
                    }
                    if (g == l.ESC) {
                        i();
                        c = 0;
                        e(o, "onClose");
                        return!1
                    }
                    if (g == l.TAB) {
                        r();
                        e(o, "onClose");
                        return!1
                    }
                }
            }, t = function (c) {
                e(o, "onSelect", [a.core.arr.indexOf(c.el, q()), k, b.flag])
            }, u = function (b) {
                var c = a.core.arr.indexOf(b.el, q());
                e(o, "onIndexChange", [c, !0])
            };
            f(o, "open", function (a, c) {
                k = c;
                r();
                g(c, "keydown", s);
                n.add(b.actionType, "mouseover", u);
                n.add(b.actionType, "click", t);
                e(o, "onOpen", [b.flag])
            });
            f(o, "openSetFlag", function (a, b) {
                p(b)
            });
            f(o, "resetIndex", function (a) {
                c = -1
            });
            f(o, "close", function () {
                r();
                e(o, "onClose", [b.flag])
            });
            f(o, "indexChange", function (a, d) {
                c = d;
                e(o, "onIndexChange", [c, b.flag])
            });
            return o
        }, n = function (b) {
            var c = b.textNode, d = a.core.arr.indexOf(c, j);
            if (!k[d]) {
                j[d = j.length] = c;
                k[d] = m(b)
            }
            return k[d]
        };
        return function (c) {
            if (!!c.textNode && !!c.uiNode) {
                c = a.parseParam({textNode: b, uiNode: b, actionType: "item", actionData: "index", flag: ""}, c);
                return n(c)
            }
        }
    });
    STK.register("pl.top.plugins.search.source.suggest", function (a) {
        var b = a.pl.top.plugins.search.source.modSuggest, c = a.lib.kit.io.jsonp, d = a.lib.kit.extra.language, e = a.pl.top.templates.suggest.userStatic(), f = a.pl.top.templates.suggest.userList(), g = a.pl.top.templates.suggest.userPlus();
        return function (h) {
            function N() {
                a.removeEvent(document.body, "click", F);
                a.custEvent.undefine(r, "action")
            }

            function M() {
                o = ""
            }

            function L(b) {
                if (!b) {
                    K();
                    return!1
                }
                p && (p.innerHTML = "");
                q && (q.innerHTML = b);
                a.custEvent.fire(k, "resetIndex");
                C();
                J();
                return!0
            }

            function K() {
                l && (l.style.display = "none");
                a.removeEvent(document.body, "click", F);
                p && (p.innerHTML = "");
                q && (q.innerHTML = "");
                setTimeout(function () {
                    A = -1
                }, 100)
            }

            function J() {
                l && (l.style.display = "");
                a.removeEvent(document.body, "click", F);
                a.addEvent(document.body, "click", F)
            }

            function I() {
                z();
                H();
                I = function () {
                }
            }

            function H() {
                i = b({textNode: k, uiNode: l, actionType: "select", actionData: "index"});
                a.custEvent.add(i, "onIndexChange", D);
                a.custEvent.add(i, "onSelect", E);
                a.custEvent.add(i, "onClose", K);
                a.custEvent.fire(k, "open", k);
                a.custEvent.define(r, "action");
                a.addEvent(document.body, "click", F);
                a.addEvent(k, "keydown", G)
            }

            function E(b, c) {
                if (c < 0)return!0;
                var d = a.getEvent() || window.event, e = d.target || d.srcElement, f = B[c];
                if (e && e.getAttribute("action-type") && e.getAttribute("action-type") != "select") {
                    a.custEvent.fire(r, "action", {evt: d, el: e, box: l, type: e.getAttribute("action-type"), data: a.core.json.queryToJson(e.getAttribute("action-data") || "")});
                    return!1
                }
                K();
                var g = f.getAttribute("suda-data");
                if (g) {
                    g = g.match(/key=.+?&value=(.+)$/)[1];
                    d.type != "click" && (g = g.replace(/c$/, "k"));
                    window.SUDA && window.SUDA.uaTrack ? window.SUDA.uaTrack("tblog_top_search_v4", g) : window.GB_SUDA && window.GB_SUDA._S_uaTrack && window.GB_SUDA._S_uaTrack("tblog_top_search_v4", g)
                }
                var h = f.getAttribute("durl");
                if (h) {
                    var i = f.getAttribute("bpfilter"), j = h.match(/^(https?\:\/\/.*?)(\/.*)$/), m = j && j[1] === location.href.match(/^(https?\:\/\/.*?)\//)[1];
                    i && window.FM && m ? FM.setState(h) : window.location.href = h;
                    setTimeout(function () {
                        k.value = "";
                        k.blur();
                        M()
                    }, 200)
                }
                d && a.preventDefault(d)
            }

            function D(b, c, d) {
                if (!!B && B.length != 0) {
                    var e = A != -1 ? A : n;
                    e != null && B[e] && a.removeClassName(B[e], "cur");
                    if (c == -1) {
                        A = c;
                        k.value = o || "";
                        return
                    }
                    c == null && (c = 0);
                    a.addClassName(B[c], "cur");
                    var f = a.queryToJson(B[c].getAttribute("action-data") || "");
                    !d && typeof f.text != "undefined" && (k.value = f.text);
                    if (!d) {
                        A = c;
                        n = null
                    } else {
                        n = c;
                        A = -1
                    }
                }
            }

            function C() {
                B = a.sizzle('[action-type="select"]', l)
            }

            var i, j, k, l, m = {};
            e = d(e);
            f = d(f);
            g = d(g);
            l = h.listNode;
            k = h.textNode;
            var n, o, p = a.sizzle('[node-type="basic"]', l)[0], q = a.sizzle('[node-type="plus"]', l)[0], r = {}, s = function (a, b) {
                var c = new RegExp("<\\!\\-\\-start\\-\\->(.*?)<\\!\\-\\-end\\-\\->", "ig"), d = b.replace(c, function () {
                    return arguments[1].replace(new RegExp(a, "g"), '<span node-type="input" class="c_red">' + a + "</span>")
                });
                return d
            }, t = function (b, c, d) {
                if (c && a.isArray(c)) {
                    var e = "tblog_top_search_v4";
                    for (var f = 0, g = c.length; f < g; f++) {
                        var h = c[f];
                        h.sudaKey = e;
                        h.sudaValue = b + (f + 1) + "c";
                        d && (h.ekey = encodeURIComponent(h.key))
                    }
                }
            }, u = function (b) {
                return a.encodeHTML(b.length > 12 ? a.leftB(b, 12) + "..." : b)
            }, v = function (b, c, d) {
                var i = d || {};
                i.keyword = u(c);
                i.keywordlong = encodeURIComponent(encodeURIComponent(c));
                i.keyonceword = encodeURIComponent(c);
                i.info = h.info;
                i.domainUrl = h.domainUrl;
                i.imgPath = h.imgPath;
                var j = function (b, d) {
                    var e = a.core.util.easyTemplate(b, i).toString();
                    d && (d.innerHTML = s(c, e))
                };
                if (b === "static")j(e, p); else if (b === "dynamic") {
                    if (d.user || d.querys) {
                        t("user_0", d.user);
                        t("key_0", d.querys, !0);
                        j(f, p)
                    }
                    if (d.weiba) {
                        var k = d.weiba.grade;
                        parseInt(k, 10) < 10 && (k = "0" + k);
                        d.weiba.grade = "mg_rankicon" + k
                    }
                    d.app && (d.app.rank = d.app.rank * 20);
                    d.app || d.weiba ? j(g, q) : q.innerHTML = "";
                    C()
                }
            }, w = function (a) {
                o = a;
                if (!a)K(); else {
                    A = -1;
                    v("static", a);
                    m[a] ? setTimeout(function () {
                        v("dynamic", a, m[a])
                    }, 0) : y(a)
                }
            }, x = function (b, c) {
                var d, e = b.data;
                if (b.code != 1e5)K(); else {
                    m[c.key] = e;
                    v("dynamic", c.key, e);
                    a.custEvent.fire(k, "resetIndex")
                }
            }, y = function (b) {
                j.request({key: b, _k: a.getUniqueKey(), uid: h.uid})
            }, z = function () {
                j = c({url: "http://s.weibo.com/ajax/topsuggest.php", method: "get", onComplete: x, onSuccess: function () {
                }, onError: function () {
                }, onFail: function () {
                }})
            }, A, B, F = function (b) {
                var c = b || window.event, d = c.target || c.srcElement;
                if (!!d) {
                    var e = l === d || a.contains(l, d) || a.contains(k, d) || k === d;
                    e || K()
                }
            }, G = function (a) {
                var b = {ENTER: 13, ESC: 27, UP: 38, DOWN: 40, TAB: 9}, c, d;
                if (!!(c = a) && !!(d = c.keyCode)) {
                    if (d == b.ENTER || d == b.ESC || d == b.UP || d == b.DOWN || d == b.TAB)return;
                    A = -1
                }
            };
            r.show = J;
            r.hide = K;
            r.setSuggestHTML = L;
            r.changeKey = w;
            r.resetKeyword = M;
            r.resetItem = C;
            r.destroy = N;
            r.getItems = function () {
                return B
            };
            r.init = function () {
                I()
            };
            r.getIndex = function () {
                return A > -1 ? A : -1
            };
            return r
        }
    });
    STK.register("pl.top.plugins.search.histroy", function (a) {
        var b = 20;
        return function (c) {
            var d = {}, e = function () {
                var b = a.storage.get("WBSearchHistroy");
                return b && b != "null" ? !1 : !0
            }, f = function (c, d) {
                var f = a.storage.get("WBSearchHistroy");
                if (e()) {
                    var g = {};
                    g[c] = {query: [d]};
                    var h = a.jsonToStr(g);
                    a.storage.set("WBSearchHistroy", h)
                } else {
                    var i;
                    try {
                        i = a.strToJson(f)
                    } catch (j) {
                        var g = {};
                        g[c] = {query: [d]};
                        var h = a.jsonToStr(g);
                        a.storage.set("WBSearchHistroy", h);
                        return
                    }
                    i[c] || (i[c] = {});
                    var k = i[c].query;
                    if (k && a.isArray(k)) {
                        if (a.core.arr.indexOf(d, k) != -1)return;
                        k.length >= b && k.splice(b, k.length - b + 1);
                        k.unshift(d)
                    } else i[c].query = [d];
                    var h = a.jsonToStr(i);
                    a.storage.set("WBSearchHistroy", h)
                }
            }, g = function (b, c) {
                if (!e()) {
                    var d = a.storage.get("WBSearchHistroy"), f;
                    try {
                        f = a.strToJson(d)
                    } catch (g) {
                        return
                    }
                    var h = f[b].query;
                    if (h && a.isArray(h)) {
                        var i = a.core.arr.indexOf(c, h);
                        if (i != -1) {
                            h.splice(i, 1);
                            var j = a.jsonToStr(f);
                            a.storage.set("WBSearchHistroy", j)
                        }
                    }
                }
            }, h = function (b) {
                if (e())return{};
                var c = a.storage.get("WBSearchHistroy"), d;
                try {
                    d = a.strToJson(c)
                } catch (f) {
                    return
                }
                return d[b]
            }, i = function (b) {
                if (!e()) {
                    var c = a.storage.get("WBSearchHistroy"), d;
                    try {
                        d = a.strToJson(c)
                    } catch (f) {
                        return
                    }
                    if (d[b]) {
                        delete d[b];
                        var g = a.jsonToStr(d);
                        a.storage.set("WBSearchHistroy", g)
                    }
                }
            };
            d.add = f;
            d.remove = g;
            d.get = h;
            d.del = i;
            return d
        }
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
    STK.register("pl.top.plugins.search.init", function (a) {
        var b = /[\\\$\^\*\[\]\(\)\{\}\?]/g, c = "http://s.weibo.com", d = "http://s.weibo.com/weibo/", e = a.lib.kit.extra.language, f = a.lib.kit.dom.smartInput, g = [], h = a.pl.top.plugins.search.source.suggest, i = 3, j = {ENTER: 13, ESC: 27, UP: 38, DOWN: 40, TAB: 9};
        return function (k, l) {
            var m = {}, n = l.uid, o = a.pl.top.plugins.search.histroy(), p = "http://s.weibo.com/ajax/jsonp/suggestion?ver=1&isnew=1&lang=" + l.lang, q, r, s = k.searchInput, t = k.searchSubmit, u = k.searchSuggest, v = s.defaultValue, w, x = v == "" ? e("#L{搜索微博、找人}") : v, y, z = function () {
                var e = s.value, f = c;
                e = a.trim(e).replace(b, "");
                if (e !== "" && e !== x)if (g.length > 0 && s.value == "")f = "http://s.weibo.com/top/summary?Refer=top_hot&" + l.info; else {
                    try {
                        o.add(n, e)
                    } catch (h) {
                    }
                    f = d + encodeURIComponent(encodeURIComponent(e)) + "?" + l.info + "&b=1"
                } else f = g.length > 0 ? d + encodeURIComponent(encodeURIComponent(g[y].query)) + "?" + l.info + "&Refer=op_button" : c + "?" + l.info;
                top.location.href = f
            }, A = function (a) {
                var b, c;
                if (!!(b = a) && !!(c = b.keyCode)) {
                    if (c == j.ENTER || c == j.ESC || c == j.UP || c == j.DOWN || c == j.TAB)return;
                    w && clearTimeout(w);
                    w = setTimeout(B, 200)
                }
            }, B = function () {
                var b = a.trim(s.value);
                if (g.length != 0 || b !== "" && b !== x) {
                    if (b != "" && b != x) {
                        q.show();
                        q.changeKey(a.trim(s.value))
                    } else if (b == "" && g.length > 0) {
                        q.resetKeyword();
                        K()
                    }
                } else q.resetKeyword()
            }, C = function (b) {
                var e = a.hasClassName(s.parentNode, "gn_clicked");
                r.getValue() === "" ? !e && g.length > 0 ? top.location.href = d + encodeURIComponent(encodeURIComponent(g[y].query)) + "?" + l.info + "&Refer=top_button" : top.location.href = c + "?" + l.info : z();
                return!1
            }, D = function (b, c) {
                var d = c.el, e = c.data.value, f = a.lib.kit.dom.parentElementBy(d, u, function (a) {
                    if (a.getAttribute("action-type") == "select")return!0
                });
                try {
                    o.remove(n, e)
                } catch (g) {
                }
                setTimeout(function () {
                    a.removeNode(f);
                    q.resetItem();
                    var b = q.getItems(), c = b ? b.length : 0;
                    c <= 0 && q.hide()
                }, 100)
            }, E = function () {
                var b = a.core.json.merge({listNode: u, textNode: s}, l);
                q = h(b);
                q.init();
                a.custEvent.add(q, "action", D);
                s.setAttribute("name", a.getUniqueKey())
            }, F = function () {
                E();
                r = f(s, {notice: x, maxLength: 40});
                r.restart();
                a.custEvent.add(r, "enter", function () {
                    q.getIndex() < 0 && z()
                });
                a.addEvent(s, "keyup", A);
                a.addEvent(t, "click", C);
                var b = !0;
                a.addEvent(s, "focus", function () {
                    a.addClassName(s.parentNode, "gn_clicked");
                    (s.value == "" || s.value == x) && K();
                    b = !0
                });
                a.addEvent(s, "blur", function (c) {
                    window.setTimeout(function () {
                        a.removeClassName(s.parentNode, "gn_clicked")
                    }, 200);
                    b && q.hide()
                });
                a.addEvent(u, "mousedown", function (c) {
                    c = c || a.getEvent();
                    a.preventDefault(c);
                    b = !1;
                    return!1
                });
                window.setTimeout(function () {
                    I()
                }, 5e3)
            }, G = function (b) {
                if (b.code = b.data) {
                    var c = b.data || {};
                    g = c.hotsearch || [];
                    c.timer = (new Date).getTime();
                    c.owerUid = l.uid;
                    y = c.showindex;
                    g.length > 0 && a.storage.set("WBHotSearchKeynew", a.jsonToStr(c))
                }
                J()
            }, H = function () {
                a.jsonp({url: p, varkey: "_cb", onComplete: function (a) {
                    G(a)
                }, onFail: function () {
                    J()
                }, onTimeout: function () {
                    J()
                }})
            }, I = function () {
                var b = a.storage.get("WBHotSearchKeynew");
                if (!b || b == "null")H(); else {
                    var c = a.strToJson(b), d = c.timer, e = c.owerUid, f = c.hotsearch;
                    y = c.showindex;
                    if (e != l.uid || (new Date).getTime() - d > 18e4 || !f || f.length == 0)H(); else {
                        g = f;
                        J()
                    }
                }
            }, J = function () {
                if (g.length > 0) {
                    y = y || parseInt(Math.random() * 10);
                    var a = y < g.length ? y : 0, b = g[a], c = b.tiptext + b.query;
                    x == s.value && (s.value = c);
                    x = c;
                    r.setNotice(c)
                }
            }, K = function () {
                var b = {}, c = g.length, d = ["icon_num_red", "icon_num_yellow"], f;
                try {
                    f = o.get($CONFIG.uid) && o.get($CONFIG.uid).query
                } catch (h) {
                }
                var j = f && a.isArray(f) ? f.length : 0;
                j = j > i ? i : j;
                var k = [];
                if (j > 0) {
                    k.push('<ul class="selectbox">');
                    for (var m = 0; m < j; m++) {
                        k.push("<li " + (m == 0 ? 'class=""' : "") + ' action-type="select" action-data="text=' + f[m] + '"  durl="http://s.weibo.com/weibo/' + encodeURIComponent(encodeURIComponent(f[m])) + "?" + l.info + '">');
                        k.push('<a href="javascript:;"><em class="W_ficon ficon_time S_ficon">ü</em>' + f[m] + '<em action-type="remove" class="W_ficon ficon_close S_ficon" action-data="value=' + f[m] + '">X</em></a></li>')
                    }
                    k.push("</ul>")
                }
                if (c > 0) {
                    k.push('<ul class="selectbox">');
                    k.push("<li ");
                    j == 0 && k.push('class=""');
                    k.push(' suda-data="key=tblog_top_search_v4&value=hot_all" action-type="select" action-data="text="   isStatic="1" durl="http://s.weibo.com/top/summary?Refer=top_hot&' + l.info + '"><a href="javascript:;" class="S_spetxt">#L{查看完整热搜榜}»</a></li>');
                    k.push('<ul class="selectbox">');
                    for (var n = 0; n < c; n++) {
                        k.push('<li  action-type="select"  suda-data="key=tblog_top_search_v4&value=hotword_0' + (n + 1) + '" action-data="text=' + g[n].query + '" durl="http://s.weibo.com/weibo/' + encodeURIComponent(encodeURIComponent(g[n].query)) + "?" + l.info + '&Refer=top_hot">');
                        k.push('<a href="javascript:;"><i class="' + (d[n] ? d[n] : "icon_num_gray") + '">' + (n + 1) + "</i>" + g[n].query + "</a></li>")
                    }
                    k.push("</ul>")
                }
                q.setSuggestHTML(e(k.join("")))
            }, L = function () {
                q.hide();
                q.destroy();
                r.destroy();
                w && clearTimeout(w);
                a.removeEvent(s, "keyup", A);
                a.removeEvent(t, "click", C);
                q = r = k = null
            };
            k && F();
            m.destroy = L;
            return m
        }
    });
    STK.register("pl.top.plugins.alpha", function (a) {
        return function (b, c) {
            var d = {}, e = !1, f, g = b.top_all, h = function () {
                var b = a.scrollPos(), c = b.top;
                if (c > 0) {
                    if (e)return;
                    a.addClassName(g, "WB_global_nav_alpha");
                    e = !0
                } else {
                    a.removeClassName(g, "WB_global_nav_alpha");
                    e = !1
                }
            }, i = function () {
                if (!!g) {
                    f && clearTimeout(f);
                    f = setTimeout(h, 200)
                }
            };
            a.addEvent(window, "scroll", i);
            d.destroy = function () {
                a.removeEvent(window, "scroll", i);
                f && clearTimeout(f)
            };
            return d
        }
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
    STK.register("pl.top.source.init", function (a) {
        var b = a.lib.kit.extra.language, c = a.lib.kit.dom.parseDOM, d, e = a.pl.top.plugins.remind, f = a.pl.top.plugins.logo, g = a.pl.top.plugins.webim.init, h = a.pl.top.plugins.menu.init, i = a.pl.top.plugins.search.init, j, k = '<em class="W_new"></em>', l = '<em class="W_new_count">[n]</em>', m = "W_new", n = "W_new_count";
        return function (b, d) {
            try {
                var o, p = {}, q = !0, r = function (b) {
                    b = b || {};
                    a.lib.dialog.loginLayer(b)
                }, s = function () {
                    var b = {lang: d.lang || "", currentTab: "login"};
                    r(b);
                    a.preventDefault()
                }, t = function () {
                    o = c(a.builder(b).list);
                    o[d.page] && a.addClassName(o[d.page], "current")
                }, u = function () {
                    j = i({searchInput: o.searchInput, searchSubmit: o.searchSubmit, searchSuggest: o.searchSuggest}, d);
                    var b = f(o, d);
                    a.pl.top.plugins.alpha(o, d);
                    var c = e(o, d);
                    if (d.islogin == "1" || d.islogin == "3") {
                        var k = g(o, d), l = h(o, d), m = function () {
                            q = !0;
                            setTimeout(function () {
                                q && c.open()
                            }, 500)
                        }, n = function () {
                            q = !1;
                            c.close()
                        };
                        a.custEvent.add(l, "show", n);
                        a.custEvent.add(l, "hide", m)
                    } else o.loginBtn && a.addEvent(o.loginBtn, "click", s)
                }, v = function (c, d) {
                    if (!!w(c)) {
                        var e = a.sizzle("[nm='" + c + "']", b)[0];
                        d = d || {};
                        if (d.isNum) {
                            var f = parseInt(d.num);
                            f && a.insertHTML(e, l.replace("[n]", f), "beforeEnd")
                        } else a.insertHTML(e, k, "beforeEnd")
                    }
                }, w = function (c) {
                    if (!c)return!1;
                    var d = a.sizzle("[nm='" + c + "']", b)[0];
                    if (!d)return!1;
                    var e = a.sizzle("." + m, d)[0] || a.sizzle("." + n, d)[0];
                    e && a.removeNode(e);
                    return!0
                }, x = function (b) {
                    var c = b.data.status;
                    !a.hasClassName(document.body, "FRAME_main") && c && c >= 15 ? v("home") : w("home")
                }, y = function () {
                    t();
                    u();
                    a.conf.channel.topTip.register("readed", x)
                };
                b && y();
                p.destroy = function () {
                };
                p.showLoginLayer = r;
                p.updateAndAddNewIcon = v;
                p.removeNewIcon = w;
                return p
            } catch (z) {
            }
        }
    });
    FM.register("pl.top.index", function (b, c) {
        var d = a.pl.top.source.init, e = a.E(b || "plc_top"), f = "http://weibo.com";
        document.domain === "www.weibo.com" && (f = "http://www.weibo.com");
        window.$TOPLANG || (window.$TOPLANG = {});
        var g = window.$TOPLANG, h = window.$CONFIG || {}, i = !h ? (new Date).toLocaleString() : h.version, j = {domainUrl: f, language: window.$TOPLANG, imgPath: h.imgPath, verify: 0, verified: "", uid: h.uid, icon: "", inviteCode: h.inviteCode, entry: "", info: "topnav=1&wvr=6", page: "", islogin: h.islogin, lang: h.lang, source: 3818214747, webim: h.$webim, logoImage: null, backurl: "/", pid: h.pid || 1, access_token: "", version: i, tips: "", unread: "", account: ""}, k = a.parseURL(window.location.href).path;
        /\/profile$/.test(k) && (j.skinUrl = "/" + k);
        var l = "http://js.t.sinajs.cn/t5/";
        h && h.jsPath && (l = h.jsPath);
        var m = function (b) {
            a.core.io.scriptLoader({timeout: 3e3, url: b, onComplete: function () {
                j.language = window.$TOPLANG;
                var a = d(e, j);
                n(a)
            }, onTimeout: function () {
                j.language = window.$TOPLANG;
                var a = d(e, j);
                n(a);
                throw"init top error language"
            }})
        }, n = function (a) {
            for (var b in a)o[b] = a[b]
        }, o = {}, p = "http://js.t.sinajs.cn/t5/lang/jsv6top/mo/", q = j.https && j.httpspath;
        q && (p = q);
        switch ($CONFIG.lang) {
            case"zh-tw":
                m(p + "zh-tw.js?version=" + i);
                break;
            case"en-us":
                m(p + "en-us.js?version=" + i);
                break;
            case"en":
                m(p + "en-us.js?version=" + i);
                break;
            case"zh-hk":
                m(p + "zh-hk.js?version=" + i);
                break;
            default:
                o = d(e, j)
        }
        return o
    })
});
