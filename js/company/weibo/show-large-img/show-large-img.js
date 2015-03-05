/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/5.
 */

(function(f) {
    var c = {};
    var i = function(k) {
        return c[k];
    };
    var r = function(k) {
        if (!c[k]) {
            var m = {exports: {}};
            try {
                f[k].call(m.exports, m, m.exports, r, i)
            } catch (e) {
            }
            ;
            c[k] = m.exports;
        }
        return c[k];
    };
    return r('a');
})({a: function(e, t, n, r) {
    function R() {
        B();
        u(i.E("user"));
        o();
        H();
        F();
        I();
        j()
    }
    var i = n("A");
    var s = n("b");
    var o = n("B");
    var u = n("D");
    var a = n("E");
    var f = n("f");
    var l = n("F");
    var c = n("g");
    var h = n("G");
    var p = n("h");
    var d = n("c");
    var v = n("H");
    var m = n("i");
    var g = n("m");
    var y = n("n");
    var b = i.addEvent;
    var w = i.ajax;
    var E = i.getType;
    var S = i.core.dom.firstChild;
    var x = $CONFIG, T = x.owner_uid, N = x.photo_type, C = s.baseURL, k = x.account_uid === T ? 0 : 1, L = x.mid, A = x.pid;
    var O = function(e, t) {
        return a(e, t)
    }, M = function(e, t) {
        return C + e + "/photos/detail/photo_id/" + t + (x.albumInfo.album_id ? "/album_id/" + x.albumInfo.album_id : "")
    }, _ = function(e, t) {
        return C + e + "/talbum/index/album_id/" + t
    }, D = function(e, t) {
        return C + e + "/talbum/detail/photo_id/" + t + (x.albumInfo.album_id ? "/album_id/" + x.albumInfo.album_id : "")
    };
    var P = function() {
        if (N === 15) {
            P = D
        } else {
            P = M
        }
        return P
    }();
    var H = function() {
        var e = i.contains;
        var t = i.E("detailBtn");
        var n = i.E("detail_menu");
        n.style.top = "-300px";
        n.style.display = "block";
        var r = false;
        var s = function() {
            if (!r) {
                n.style.top = "23px";
                r = true
            } else {
                n.style.top = "-300px";
                r = false
            }
        };
        var o = "onmouseenter" in document;
        var u = "mouseenter", f = "mouseleave", l = function(e) {
            s()
        };
        if (!o) {
            u = "mouseover";
            f = "mouseout", l = function() {
                var n = t, r = event.relatedTarget;
                if (!r || r !== n && !e(n, r)) {
                    s()
                }
            }
        }
        b(t, u, l);
        b(t, f, l);
        var c = "current";
        var h = i.sizzle("[action-type=bigger]", n)[0];
        var d = function(e) {
            i.preventDefault();
            var t = e.el;
            if (h !== t) {
                i.removeClassName(h, c);
                i.addClassName(t, c);
                h = t;
                p.fire(e.data.size)
            }
        };
        var m = function(e) {
            var t = a(e, "large");
            w({url: "/favorites/setWeiPan",method: "post",args: {url: t},onComplete: function(e) {
                if (e && e.result) {
                    q({title: "我的微盘",text: "保存成功",href: "http://vdisk.weibo.com/",href_text: "我的微盘",autoclose: 3e3})
                } else {
                    g("保存失败", {type: "error"})
                }
            }})
        };
        var y = i.delegatedEvent(n);
        y.add("bigger", "click", d);
        y.add("big", "click", d);
        y.add("middle", "click", d);
        y.add("small", "click", d);
        v.register("loaded", function(e) {
            y.add("to_vdisk", "click", function(t) {
                i.preventDefault();
                m(e)
            })
        })
    };
    var B = function() {
        var e = i.E("pic");
        var t = e.src;
        var n = /(http:\/\/[\w|.]+?\/)(\w+\/)?([\S|.]+)/;
        var r = n.exec(t);
        var s = r[1];
        var o = r[3];
        var u = function(t) {
            var n = new Image;
            n.onload = function() {
                n.onload = null;
                e.width = n.width;
                e.height = n.height;
                e.src = i;
                x.zoom_obj.state = "out"
            };
            var i = s + o;
            if (r[2]) {
                i = s + t + "/" + o
            }
            n.src = i;
            d.fire("changeSrc", i)
        };
        p.register("bigger", function() {
            u("large")
        });
        p.register("big", function() {
            u("mw690")
        });
        p.register("middle", function() {
            u("bmiddle")
        });
        p.register("small", function() {
            u("thumbnail")
        });
        b(e, "click", function() {
            var t = x.zoom_obj, n = x.img_size, r = t.zoom_size, i = t.zoom, s = t.state;
            if (i) {
                if (s === "out") {
                    e.className = "M_cur_zoom_in";
                    e.width = r.w;
                    e.height = r.h;
                    t.state = "in"
                } else {
                    e.className = "M_cur_zoom_out";
                    e.width = n.w;
                    e.height = n.h;
                    t.state = "out"
                }
            }
        })
    };
    var j = function() {
        var e = i.core.arr.indexOf;
        var t = i.core.json.merge;
        var n = x.owner_uid, r = x.photo_type;
        var s = [];
        var o = 3;
        var u = 7;
        var f = 58;
        var l;
        var h = {};
        var p = i.E("sliderWrap"), d = i.E("slider"), m = i.E("prev"), g = i.E("next");
        var b;
        var S = function() {
            return 2 === r ? x.albumInfo.album_id : 0
        }();
        var T = function() {
            if (x.albumInfo.type) {
                return x.albumInfo.type
            }
            return 2 === r ? 1 : 3
        }();
        var N = function(e, t) {
            w({url: "/photos/get_photo_ids",args: {uid: n,album_id: S,type: T},onComplete: function(t) {
                if (e && "function" === E(e)) {
                    e(t)
                }
            },onFail: function() {
                if (t && "function" === E(t)) {
                    t(res)
                }
            }})
        };
        var C = function(e, t, r) {
            w({url: "/photos/get_multiple",args: {uid: n,ids: e,type: T},onComplete: function(e) {
                if (t && "function" === E(t)) {
                    t(e)
                }
            }})
        };
        var k = function(e, t) {
            w({url: "/photos/get_photo_id_by_mid_and_pid",args: {uid: n,mid: x.mid,pid: x.pid},onComplete: function(t) {
                if (t.result) {
                    e(parseInt(t.data.photo_id, 10))
                } else {
                }
            },onFail: function(e) {
                if (t && "function" === E(t)) {
                    t(e)
                }
            }})
        };
        var L = function(e) {
            var t = "";
            i.foreach(e, function(e, r) {
                var i = {href: P(n, r),src: a(e, "thumb50"),cur: false};
                if (e.is_current) {
                    i.current = 1
                }
                t += y(i)
            });
            return t
        };
        var A = function(e) {
            c(m);
            c(g);
            var t = e.start, n = e.end, r = s.length;
            if (0 === t) {
                i.addClassName(m, "btn_dis")
            }
            if (r === n) {
                i.addClassName(g, "btn_dis")
            }
            if (r < u) {
                i.addClassName(m, "btn_dis");
                i.addClassName(g, "btn_dis")
            }
        };
        var O = function(e) {
            d.innerHTML = L(e)
        };
        var M = function(e, t, n, r, s) {
            if (typeof r === "function") {
                s = r;
                r = null
            }
            i.tween(e, {duration: n,animationType: r || "easeoutcubic",end: s}).play(t).destroy()
        };
        var _ = function(e, t) {
            var n = i.core.arr.indexOf;
            var r = false;
            var s = t, o = s.length, u = e, a = -1, f = 0, l = 0;
            var c = 3, h = 7;
            if (u === -1) {
                a = 0;
                s.unshift(-1)
            } else {
                a = n(u, s);
                a === -1 && (a = n(u + "", s));
                if (a < 0) {
                    s.unshift(u)
                }
            }
            if (o <= h) {
                f = 0;
                l = o
            } else {
                f = a - c;
                f < 0 && (f = 0);
                if (a >= o - c) {
                    f = o - h
                }
                l = a + c + 1;
                l = l > o ? o : l < h ? h : l
            }
            return function(e) {
                if (e === "prev") {
                    var t = {start: f,end: l};
                    var n = f, r = l;
                    n = n - h;
                    if (n < 0) {
                        n = 0
                    }
                    r = f;
                    f = n;
                    l = r;
                    return {last: t,current: {start: n,end: r}}
                } else if (e === "next") {
                    var t = {start: f,end: l};
                    var n = l;
                    n < h && (n = h);
                    var r = n + h;
                    r > o && (r = o);
                    if (r - n < h) {
                        l = r;
                        f = r - h
                    } else {
                        f = n;
                        l = r
                    }
                    return {last: t,current: {start: n,end: r}}
                } else {
                    return {start: f,end: l}
                }
            }
        };
        var D = function() {
            var e = false;
            var n = function(t, n, r, i) {
                if (!e) {
                    e = true;
                    M(t, n, r, function() {
                        e = false;
                        i()
                    })
                }
            };
            var r = function(e) {
                var t = [];
                for (var n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    if (!h[i]) {
                        t.push(i)
                    }
                }
                return t
            };
            var o = function(e) {
                var t = {};
                for (var n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    t[i] = h[i]
                }
                return t
            };
            var a = function() {
                i.preventDefault();
                if (e) {
                    return
                }
                if (i.hasClassName(m, "btn_dis")) {
                    return
                }
                var a = l("prev");
                var c = a.last;
                var p = a.current;
                var v = p.start, y = p.end;
                if (v === 0) {
                    i.addClassName(m, "btn_dis")
                }
                if (y !== s.length) {
                    i.removeClassName(g, "btn_dis")
                }
                n(d, {left: f * (y - v)}, 300, function() {
                    var e = i.sizzle("> li", d), n = e.length;
                    for (var a = u - 1; a >= u - y; a--) {
                        i.removeNode(e[a])
                    }
                    var f = s.slice(v, y);
                    var l = r(f);
                    if (l.length) {
                        C(l.join(","), function(e) {
                            h = t(h, e.data);
                            var n = o(f);
                            i.insertHTML("slider", L(n), "afterbegin");
                            d.style.left = 0
                        })
                    } else {
                        var c = o(f);
                        var e = L(c);
                        i.insertHTML("slider", e, "afterbegin");
                        d.style.left = 0
                    }
                })
            }, c = function() {
                i.preventDefault();
                if (e) {
                    return
                }
                if (i.hasClassName(g, "btn_dis")) {
                    return
                }
                var u = l("next"), a = u.last, c = u.current, p = c.start, v = c.end;
                if (v === s.length) {
                    i.addClassName(g, "btn_dis")
                }
                if (p !== 0) {
                    i.removeClassName(m, "btn_dis")
                }
                n(d, {left: -f * (v - p)}, 300, function() {
                    var e = s.slice(p, v);
                    var n = r(e);
                    if (n.length) {
                        C(n.join(","), function(n) {
                            h = t(h, n.data);
                            var r = i.sizzle("> li", d);
                            for (var s = 0; s < c.end - c.start; s++) {
                                i.removeNode(r[s])
                            }
                            var u = o(e);
                            i.insertHTML("slider", L(u), "beforeend");
                            d.style.left = 0
                        })
                    } else {
                        var u = i.sizzle("> li", d);
                        for (var a = 0; a < c.end - c.start; a++) {
                            i.removeNode(u[a])
                        }
                        var f = o(e);
                        var u = L(f);
                        i.insertHTML("slider", u, "beforeend");
                        d.style.left = 0
                    }
                })
            };
            i.addEvent(m, "click", a);
            i.addEvent(g, "click", c)
        };
        var H = function(e) {
            N(function(n) {
                s = n.data;
                l = _(e, s);
                var r = l();
                C(s.slice(r.start, r.end).join(","), function(n) {
                    var i = n.data;
                    i[e].is_current = 1;
                    O(i);
                    A(r);
                    v.fire("loaded", i[e]);
                    h = t(h, i)
                })
            });
            i.E("go_detail").href = P(n, e);
            D()
        };
        var B = x.photo_id;
        if (!B) {
            k(function(e) {
                H(e)
            })
        } else {
            H(B)
        }
    };
    var F = function() {
        var e = n("N");
        var t = n("O");
        var r, s;
        var o = function(e) {
            r = i.E("likeWrap");
            h(r);
            r.innerHTML = t(e);
            s = i.sizzle("span", r)[0];
            c(r)
        };
        var u = function(t) {
            var n = t.data;
            n.album_id = x.albumInfo.album_id;
            n.album_type = x.albumInfo.type;
            e.set({like_uid: n["like_uid"],target_id: n["target_id"],type: n["type"],ref: n["ref"],album_id: n.album_id,album_type: n.album_type}, function(r) {
                var o = r.data;
                n["is_feed"] = o.result.is_feed;
                n["property"] = 1;
                i.addClassName(s, "M_icon6_on");
                e.likeTip(function(t) {
                    q({title: "我赞过的",text: "赞图成功",href: "http://photo.weibo.com/" + x.account_uid + "/likes/photos?prel=p6_6",href_text: "我赞过的"});
                    n = i.core.json.merge(n, t);
                    e.setFeed(n)
                }, t.el)
            })
        };
        var a = function(t) {
            var n = t.data;
            e.cancel({like_uid: n["like_uid"],target_id: n["target_id"],type: n["type"],ref: n["ref"],album_id: x.albumInfo.album_id,album_type: x.albumInfo.type}, function(e) {
                i.removeClassName(s, "M_icon6_on");
                g(e.msg || "取消赞图成功")
            })
        };
        v.register("loaded", function(e) {
            o(e);
            var t = e.is_liked;
            var n = i.delegatedEvent(r);
            n.add("like", "click", function(e) {
                if (t) {
                    a(e);
                    t = false
                } else {
                    u(e);
                    t = true
                }
            })
        })
    };
    var I = function() {
        var e = i.E("favWrap"), t = i.E("icon_fav");
        var n = false;
        var r = function(r, s, o) {
            var u, a, f;
            if (n) {
                u = "/favorites/disfavorite";
                a = "收藏";
                f = "取消收藏成功！"
            } else {
                u = "/favorites/favorite";
                a = "已收藏";
                f = "收藏成功！"
            }
            w({url: u,method: "post",args: {target_id: r,fav_uid: s,type: o,ref: "p6"},onComplete: function(r) {
                if (r.result) {
                    if (n) {
                        n = false;
                        i.removeClassName(t, "M_icon77_on");
                        g("取消收藏成功！")
                    } else {
                        n = true;
                        i.addClassName(t, "M_icon77_on");
                        q({title: "我的收藏",text: "收藏成功！",href: "http://photo.weibo.com/" + x.account_uid + "/favorites/photos?prel=p6_7",href_text: "我的收藏"})
                    }
                    e.setAttribute("title", a)
                }
            },onFail: function() {
            }})
        }, s = function(t) {
            b(e, "click", function() {
                r(t.photo_id, x.owner_uid, t["type"])
            })
        };
        v.register("loaded", function(r) {
            n = r.is_favorited;
            (x.account_uid === x.owner_uid ? function() {
                i.removeNode(e)
            } : function() {
                if (n) {
                    i.addClassName(t, "M_icon77_on");
                    e.setAttribute("title", "已收藏")
                } else {
                    i.removeClassName(t, "M_icon77_on");
                    e.setAttribute("title", "收藏")
                }
                c(e);
                s(r)
            })()
        })
    };
    var q = function(e) {
        var t, r;
        var s = {};
        var o = n("p");
        var u = {init: function() {
            u.pars();
            u.build();
            u.bind()
        },pars: function() {
            t = i.parseParam({title: "",text: "",href: "",href_text: "",draggable: false,autoclose: 0}, e)
        },build: function() {
            var e = o({text: t.text,href: t.href,title: t.title,href_text: t.href_text});
            r = m(e, t);
            r.setMiddle().show();
            if (t.autoclose > 0) {
                setTimeout(function() {
                    r.hide()
                }, t.autoclose)
            }
        },bind: function() {
            i.custEvent.add(r, "hide", function() {
                i.custEvent.remove(r, "hide", arguments.callee)
            })
        }};
        u.init();
        s.layer = r;
        return s
    };
    R()
},A: function(e, t, n, r) {
    e.exports = window.STK.getPKG("theia")
},b: function(e, t, n, r) {
    var i = "http://js.app.wcdn.cn/ops/photo/";
    var s = "http://img.t.sinajs.cn/t4/appstyle/photo/";
    var o = "http://img.app.wcdn.cn/ops/photo/style/";
    var u = $CONFIG.script_version;
    var a = $CONFIG.style_version;
    e.exports = {baseURL: $CONFIG.base_url,baseIMG: s + "images/",baseCSS: s + "css/",baseSWF: "http://js.t.sinajs.cn/t5/album/static/swf/v5/",baseJS: i + "/js/v5/",base: o,imgVersion: a,jsVersion: u,cssVersion: a}
},B: function(e, t, n, r) {
    function h() {
        var e = i.E("pic").src;
        var t = u.baseSWF + "downloadBtn.swf?v=" + l;
        var n = {image: e};
        if (o.hasFlashPlayerVersion("10.0.0")) {
            o.embedSWF(t, "download", 48, 22, "10.0.0", null, n, c, null)
        }
        window._$download = function() {
            return e
        };
        s.register("changeSrc", function(t) {
            e = t
        })
    }
    var i = n("A");
    var s = n("c");
    var o = n("d");
    var u = n("b");
    var a = document.getElementsByTagName("link")[0].href, f = a.length, l = a.substring(f - 7);
    var c = {quality: "high",allowscriptaccess: "always",wmode: "transparent",allowfullscreen: false};
    e.exports = h
},c: function(e, t, n, r) {
    var i = n("C");
    var s = ["changeSrc"];
    var o = i.define("bp.channel.large.img", s);
    e.exports = o
},C: function(e, t, n, r) {
    var i = n("A");
    var s = {};
    var o = {};
    o.define = function(e, t) {
        if (s[e] != null) {
            throw "kit.extra.listener.define: 频道已被占用"
        }
        s[e] = t;
        var n = {};
        n.register = function(t, n) {
            if (s[e] == null) {
                throw "kit.extra.listener.define: 频道未定义"
            }
            i.listener.register(e, t, n)
        };
        n.fire = function(t, n) {
            if (s[e] == null) {
                throw "commonlistener.define: 频道未定义"
            }
            i.listener.fire(e, t, n)
        };
        n.remove = function(t, n) {
            i.listener.remove(e, t, n)
        };
        n.cache = function(t) {
            return i.listener.cache(e, t)
        };
        return n
    };
    e.exports = o
},d: function(e, t, n, r) {
    var i = function() {
        function k() {
            if (w) {
                return
            }
            try {
                var e = f.getElementsByTagName("body")[0].appendChild(z("span"));
                e.parentNode.removeChild(e)
            } catch (t) {
                return
            }
            w = true;
            var n = h.length;
            for (var r = 0; r < n; r++) {
                h[r]()
            }
        }
        function L(e) {
            if (w) {
                e()
            } else {
                h[h.length] = e
            }
        }
        function A(t) {
            if (typeof a.addEventListener != e) {
                a.addEventListener("load", t, false)
            } else if (typeof f.addEventListener != e) {
                f.addEventListener("load", t, false)
            } else if (typeof a.attachEvent != e) {
                W(a, "onload", t)
            } else if (typeof a.onload == "function") {
                var n = a.onload;
                a.onload = function() {
                    n();
                    t()
                }
            } else {
                a.onload = t
            }
        }
        function O() {
            if (c) {
                M()
            } else {
                _()
            }
        }
        function M() {
            var n = f.getElementsByTagName("body")[0];
            var r = z(t);
            r.setAttribute("type", s);
            var i = n.appendChild(r);
            if (i) {
                var o = 0;
                (function() {
                    if (typeof i.GetVariable != e) {
                        var t = i.GetVariable("$version");
                        if (t) {
                            t = t.split(" ")[1].split(",");
                            N.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]
                        }
                    } else if (o < 10) {
                        o++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                    n.removeChild(r);
                    i = null;
                    _()
                })()
            } else {
                _()
            }
        }
        function _() {
            var t = p.length;
            if (t > 0) {
                for (var n = 0; n < t; n++) {
                    var r = p[n].id;
                    var i = p[n].callbackFn;
                    var s = {success: false,id: r};
                    if (N.pv[0] > 0) {
                        var o = U(r);
                        if (o) {
                            if (X(p[n].swfVersion) && !(N.wk && N.wk < 312)) {
                                $(r, true);
                                if (i) {
                                    s.success = true;
                                    s.ref = D(r);
                                    i(s)
                                }
                            } else if (p[n].expressInstall && P()) {
                                var u = {};
                                u.data = p[n].expressInstall;
                                u.width = o.getAttribute("width") || "0";
                                u.height = o.getAttribute("height") || "0";
                                if (o.getAttribute("class")) {
                                    u.styleclass = o.getAttribute("class")
                                }
                                if (o.getAttribute("align")) {
                                    u.align = o.getAttribute("align")
                                }
                                var a = {};
                                var f = o.getElementsByTagName("param");
                                var l = f.length;
                                for (var c = 0; c < l; c++) {
                                    if (f[c].getAttribute("name").toLowerCase() != "movie") {
                                        a[f[c].getAttribute("name")] = f[c].getAttribute("value")
                                    }
                                }
                                H(u, a, r, i)
                            } else {
                                B(o);
                                if (i) {
                                    i(s)
                                }
                            }
                        }
                    } else {
                        $(r, true);
                        if (i) {
                            var h = D(r);
                            if (h && typeof h.SetVariable != e) {
                                s.success = true;
                                s.ref = h
                            }
                            i(s)
                        }
                    }
                }
            }
        }
        function D(n) {
            var r = null;
            var i = U(n);
            if (i && i.nodeName == "OBJECT") {
                if (typeof i.SetVariable != e) {
                    r = i
                } else {
                    var s = i.getElementsByTagName(t)[0];
                    if (s) {
                        r = s
                    }
                }
            }
            return r
        }
        function P() {
            return !E && X("6.0.65") && (N.win || N.mac) && !(N.wk && N.wk < 312)
        }
        function H(t, n, r, i) {
            E = true;
            y = i || null;
            b = {success: false,id: r};
            var s = U(r);
            if (s) {
                if (s.nodeName == "OBJECT") {
                    m = j(s);
                    g = null
                } else {
                    m = s;
                    g = r
                }
                t.id = o;
                if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) {
                    t.width = "310"
                }
                if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) {
                    t.height = "137"
                }
                f.title = f.title.slice(0, 47) + " - Flash Player Installation";
                var u = N.ie && N.win ? "ActiveX" : "PlugIn", l = "MMredirectURL=" + encodeURI(a.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + u + "&MMdoctitle=" + f.title;
                if (typeof n.flashvars != e) {
                    n.flashvars += "&" + l
                } else {
                    n.flashvars = l
                }
                if (N.ie && N.win && s.readyState != 4) {
                    var c = z("div");
                    r += "SWFObjectNew";
                    c.setAttribute("id", r);
                    s.parentNode.insertBefore(c, s);
                    s.style.display = "none";
                    (function() {
                        if (s.readyState == 4) {
                            s.parentNode.removeChild(s)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                }
                F(t, n, r)
            }
        }
        function B(e) {
            if (N.ie && N.win && e.readyState != 4) {
                var t = z("div");
                e.parentNode.insertBefore(t, e);
                t.parentNode.replaceChild(j(e), t);
                e.style.display = "none";
                (function() {
                    if (e.readyState == 4) {
                        e.parentNode.removeChild(e)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                e.parentNode.replaceChild(j(e), e)
            }
        }
        function j(e) {
            var n = z("div");
            if (N.win && N.ie) {
                n.innerHTML = e.innerHTML
            } else {
                var r = e.getElementsByTagName(t)[0];
                if (r) {
                    var i = r.childNodes;
                    if (i) {
                        var s = i.length;
                        for (var o = 0; o < s; o++) {
                            if (!(i[o].nodeType == 1 && i[o].nodeName == "PARAM") && !(i[o].nodeType == 8)) {
                                n.appendChild(i[o].cloneNode(true))
                            }
                        }
                    }
                }
            }
            return n
        }
        function F(n, r, i) {
            var o, u = U(i);
            if (N.wk && N.wk < 312) {
                return o
            }
            if (u) {
                if (typeof n.id == e) {
                    n.id = i
                }
                if (N.ie && N.win) {
                    var a = "";
                    for (var f in n) {
                        if (n[f] != Object.prototype[f]) {
                            if (f.toLowerCase() == "data") {
                                r.movie = n[f]
                            } else if (f.toLowerCase() == "styleclass") {
                                a += ' class="' + n[f] + '"'
                            } else if (f.toLowerCase() != "classid") {
                                a += " " + f + '="' + n[f] + '"'
                            }
                        }
                    }
                    var l = "";
                    for (var c in r) {
                        if (r[c] != Object.prototype[c]) {
                            l += '<param name="' + c + '" value="' + r[c] + '" />'
                        }
                    }
                    u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>";
                    d[d.length] = n.id;
                    o = U(n.id)
                } else {
                    var h = z(t);
                    h.setAttribute("type", s);
                    for (var p in n) {
                        if (n[p] != Object.prototype[p]) {
                            if (p.toLowerCase() == "styleclass") {
                                h.setAttribute("class", n[p])
                            } else if (p.toLowerCase() != "classid") {
                                h.setAttribute(p, n[p])
                            }
                        }
                    }
                    for (var v in r) {
                        if (r[v] != Object.prototype[v] && v.toLowerCase() != "movie") {
                            I(h, v, r[v])
                        }
                    }
                    u.parentNode.replaceChild(h, u);
                    o = h
                }
            }
            return o
        }
        function I(e, t, n) {
            var r = z("param");
            r.setAttribute("name", t);
            r.setAttribute("value", n);
            e.appendChild(r)
        }
        function q(e) {
            var t = U(e);
            if (t && t.nodeName == "OBJECT") {
                if (N.ie && N.win) {
                    t.style.display = "none";
                    (function() {
                        if (t.readyState == 4) {
                            R(e)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    t.parentNode.removeChild(t)
                }
            }
        }
        function R(e) {
            var t = U(e);
            if (t) {
                for (var n in t) {
                    if (typeof t[n] == "function") {
                        t[n] = null
                    }
                }
                t.parentNode.removeChild(t)
            }
        }
        function U(e) {
            if (typeof e === "string") {
                return f.getElementById(e)
            }
            return e
        }
        function z(e) {
            return f.createElement(e)
        }
        function W(e, t, n) {
            e.attachEvent(t, n);
            v[v.length] = [e, t, n]
        }
        function X(e) {
            var t = N.pv, n = e.split(".");
            n[0] = parseInt(n[0], 10);
            n[1] = parseInt(n[1], 10) || 0;
            n[2] = parseInt(n[2], 10) || 0;
            return t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? true : false
        }
        function V(n, r, i, s) {
            if (N.ie && N.mac) {
                return
            }
            var o = f.getElementsByTagName("head")[0];
            if (!o) {
                return
            }
            var u = i && typeof i == "string" ? i : "screen";
            if (s) {
                S = null;
                x = null
            }
            if (!S || x != u) {
                var a = z("style");
                a.setAttribute("type", "text/css");
                a.setAttribute("media", u);
                S = o.appendChild(a);
                if (N.ie && N.win && typeof f.styleSheets != e && f.styleSheets.length > 0) {
                    S = f.styleSheets[f.styleSheets.length - 1]
                }
                x = u
            }
            if (N.ie && N.win) {
                if (S && typeof S.addRule == t) {
                    S.addRule(n, r)
                }
            } else {
                if (S && typeof f.createTextNode != e) {
                    S.appendChild(f.createTextNode(n + " {" + r + "}"))
                }
            }
        }
        function $(e, t) {
            if (!T) {
                return
            }
            var n = t ? "visible" : "hidden";
            if (w && U(e)) {
                U(e).style.visibility = n
            } else {
                V("#" + e, "visibility:" + n)
            }
        }
        function J(t) {
            var n = /[\\\"<>\.;]/;
            var r = n.exec(t) != null;
            return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
        }
        var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", s = "application/x-shockwave-flash", o = "SWFObjectExprInst", u = "onreadystatechange", a = window, f = document, l = navigator, c = false, h = [O], p = [], d = [], v = [], m, g, y, b, w = false, E = false, S, x, T = true, N = function() {
            var i = typeof f.getElementById != e && typeof f.getElementsByTagName != e && typeof f.createElement != e, o = l.userAgent.toLowerCase(), u = l.platform.toLowerCase(), h = u ? /win/.test(u) : /win/.test(o), p = u ? /mac/.test(u) : /mac/.test(o), d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, v = !+"1", m = [0, 0, 0], g = null;
            if (typeof l.plugins != e && typeof l.plugins[n] == t) {
                g = l.plugins[n].description;
                if (g && !(typeof l.mimeTypes != e && l.mimeTypes[s] && !l.mimeTypes[s].enabledPlugin)) {
                    c = true;
                    v = false;
                    g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10);
                    m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else if (typeof a.ActiveXObject != e) {
                try {
                    var y = new ActiveXObject(r);
                    if (y) {
                        g = y.GetVariable("$version");
                        if (g) {
                            v = true;
                            g = g.split(" ")[1].split(",");
                            m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]
                        }
                    }
                } catch (b) {
                }
            }
            return {w3: i,pv: m,wk: d,ie: v,win: h,mac: p}
        }(), C = function() {
            if (!N.w3) {
                return
            }
            if (typeof f.readyState != e && f.readyState == "complete" || typeof f.readyState == e && (f.getElementsByTagName("body")[0] || f.body)) {
                k()
            }
            if (!w) {
                if (typeof f.addEventListener != e) {
                    f.addEventListener("DOMContentLoaded", k, false)
                }
                if (N.ie && N.win) {
                    f.attachEvent(u, function() {
                        if (f.readyState == "complete") {
                            f.detachEvent(u, arguments.callee);
                            k()
                        }
                    });
                    if (a == top) {
                        (function() {
                            if (w) {
                                return
                            }
                            try {
                                f.documentElement.doScroll("left")
                            } catch (e) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            k()
                        })()
                    }
                }
                if (N.wk) {
                    (function() {
                        if (w) {
                            return
                        }
                        if (!/loaded|complete/.test(f.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        k()
                    })()
                }
                A(k)
            }
        }();
        var K = function() {
            if (N.ie && N.win) {
                window.attachEvent("onunload", function() {
                    var e = v.length;
                    for (var t = 0; t < e; t++) {
                        v[t][0].detachEvent(v[t][1], v[t][2])
                    }
                    var n = d.length;
                    for (var r = 0; r < n; r++) {
                        q(d[r])
                    }
                    for (var s in N) {
                        N[s] = null
                    }
                    N = null;
                    for (var o in i) {
                        i[o] = null
                    }
                    i = null
                })
            }
        }();
        return {registerObject: function(e, t, n, r) {
            if (N.w3 && e && t) {
                var i = {};
                i.id = e;
                i.swfVersion = t;
                i.expressInstall = n;
                i.callbackFn = r;
                p[p.length] = i;
                $(e, false)
            } else if (r) {
                r({success: false,id: e})
            }
        },getObjectById: function(e) {
            if (N.w3) {
                return D(e)
            }
        },embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {success: false,id: r};
            if (N.w3 && !(N.wk && N.wk < 312) && n && r && i && s && o) {
                $(r, false);
                L(function() {
                    i += "";
                    s += "";
                    var p = {};
                    if (l && typeof l === t) {
                        for (var d in l) {
                            p[d] = l[d]
                        }
                    }
                    p.data = n;
                    p.width = i;
                    p.height = s;
                    var v = {};
                    if (f && typeof f === t) {
                        for (var m in f) {
                            v[m] = f[m]
                        }
                    }
                    if (a && typeof a === t) {
                        for (var g in a) {
                            if (typeof v.flashvars != e) {
                                v.flashvars += "&" + g + "=" + a[g]
                            } else {
                                v.flashvars = g + "=" + a[g]
                            }
                        }
                    }
                    if (X(o)) {
                        var y = F(p, v, r);
                        if (p.id == r) {
                            $(r, true)
                        }
                        h.success = true;
                        h.ref = y
                    } else if (u && P()) {
                        p.data = u;
                        H(p, v, r, c);
                        return
                    } else {
                        $(r, true)
                    }
                    if (c) {
                        c(h)
                    }
                })
            } else if (c) {
                c(h)
            }
        },switchOffAutoHideShow: function() {
            T = false
        },ua: N,getFlashPlayerVersion: function() {
            return {major: N.pv[0],minor: N.pv[1],release: N.pv[2]}
        },hasFlashPlayerVersion: X,createSWF: function(e, t, n) {
            if (N.w3) {
                return F(e, t, n)
            } else {
                return undefined
            }
        },showExpressInstall: function(e, t, n, r) {
            if (N.w3 && P()) {
                H(e, t, n, r)
            }
        },removeSWF: function(e) {
            if (N.w3) {
                q(e)
            }
        },createCSS: function(e, t, n, r) {
            if (N.w3) {
                V(e, t, n, r)
            }
        },addDomLoadEvent: L,addLoadEvent: A,getQueryParamValue: function(e) {
            var t = f.location.search || f.location.hash;
            if (t) {
                if (/\?/.test(t)) {
                    t = t.split("?")[1]
                }
                if (e == null) {
                    return J(t)
                }
                var n = t.split("&");
                for (var r = 0; r < n.length; r++) {
                    if (n[r].substring(0, n[r].indexOf("=")) == e) {
                        return J(n[r].substring(n[r].indexOf("=") + 1))
                    }
                }
            }
            return ""
        },expressInstallCallback: function() {
            if (E) {
                var e = U(o);
                if (e && m) {
                    e.parentNode.replaceChild(m, e);
                    if (g) {
                        $(g, true);
                        if (N.ie && N.win) {
                            m.style.display = "block"
                        }
                    }
                    if (y) {
                        y(b)
                    }
                }
                E = false
            }
        }}
    }();
    e.exports = i
},D: function(e, t, n, r) {
    function p(e, t) {
        if (!e || e.nodeType !== 1) {
            throw TypeError("renderTo must be a element")
        }
        e.innerHTML = a(t || {})
    }
    function d(e, t) {
        return s + e + "/talbum/index/album_id/" + t
    }
    function v(e, t) {
        return s + e + "/albums/detail/album_id/" + t
    }
    function m(e, t) {
        var n = l;
        o({url: "/albums/get_line",args: {uid: n,album_id: 0,type: 3,user_info: 1},onComplete: function(t) {
            if (e && "function" === u(e)) {
                e(t)
            }
        },onFail: function() {
            if (t && "function" === u(t)) {
                t(res)
            }
        }})
    }
    function g(e) {
        var t;
        if (2 === c) {
            t = {caption: f.albumInfo.caption,user_href: "/" + l + "/albums?prel=p6_1",album_href: v(l, f.albumInfo.album_id) + "?prel=p6_2",name: h.name,profile_image_url: h.profile_image_url};
            p(e, t)
        } else {
            m(function(n) {
                var r = n.data, i = r.uid;
                t = {caption: r.caption,user_href: "/" + i + "/albums?prel=p6_1",album_href: d(i, r.album_id) + "?prel=p6_2",name: r.screen_name,profile_image_url: r.profile_image_url};
                p(e, t)
            })
        }
    }
    var i = n("A");
    var s = n("b").baseURL;
    var o = i.ajax;
    var u = i.getType;
    var a = n("e");
    var f = $CONFIG;
    var l = f.owner_uid;
    var c = f.photo_type;
    var h = f.profile;
    e.exports = g
},e: function(e, t, n, r) {
    e.exports = function(e, t, n) {
        t = t || function(e) {
            return e
        };
        var r = "", i = t('<div class="m_thumb m_thumb_b">\n    <a href="'), s = t('" title="'), o = t('"><img src="'), u = t('" /></a>\n</div>\n<div class="user_info">\n    <div class="user_name M_txtc">\n        <a class="name" title="'), a = t('" href="'), f = t('">'), l = t('</a>\n        <span class="M_txta txt">的</span>\n        <a class="album" title="'), c = t("</a>\n    </div>\n</div>");
        r += i;
        r += e.user_href;
        r += s;
        r += e.name;
        r += o;
        r += e.profile_image_url;
        r += u;
        r += e.name;
        r += a;
        r += e.user_href;
        r += f;
        r += e.name;
        r += l;
        r += e.caption;
        r += a;
        r += e.album_href;
        r += f;
        r += e.caption;
        r += c;
        return r
    }
},E: function(e, t, n, r) {
    var i = function(e, t) {
        if (!e)
            return undefined;
        if (e["pic_type"] == 2 && e["pri_" + t + "_pic"]) {
            return e["pri_" + t + "_pic"]
        }
        var n = e["pic_host"], r = e["pic_type"], i = e["uid"], s = e["pic_name"];
        if (n && s) {
            if (r == 1) {
                return n + "/" + t + "/" + s
            } else if (r == 0 && e["avatar_large"]) {
                return e["avatar_large"]
            }
        } else {
            return e[t + "_pic"]
        }
    };
    e.exports = i
},f: function(e, t, n, r) {
    e.exports = function(e, t) {
        t = t ? t : 150;
        if (t === -1) {
            return function() {
                e.apply(this, arguments)
            }
        }
        var n;
        return function() {
            var r = +(new Date);
            if (!n || r - n > t) {
                n = r;
                e.apply(this, arguments)
            }
        }
    }
},F: function(e, t, n, r) {
    e.exports = function(e, t, n, r) {
        var i;
        return function() {
            var s = r || this, o = arguments;
            var u = function() {
                i = null;
                if (!n)
                    e.apply(s, o)
            };
            var a = n && !i;
            clearTimeout(i);
            i = setTimeout(u, t);
            if (a)
                e.apply(s, o)
        }
    }
},g: function(e, t, n, r) {
    e.exports = function(e) {
        if (!e || e.nodeType !== 1) {
            throw "fn-->show need a element node as parameter"
        }
        e.style.display = "block"
    }
},G: function(e, t, n, r) {
    e.exports = function(e) {
        if (!e || e.nodeType !== 1) {
            throw "/bp/dom/hide() need a element node as parameter"
        }
        e.style.display = "none"
    }
},h: function(e, t, n, r) {
    var i = n("A");
    var s = n("C");
    var o = ["bigger", "big", "middle", "small"];
    var u = s.define("bp.channel.large.size", o);
    e.exports = u
},H: function(e, t, n, r) {
    var i = n("C");
    var s = ["loaded"];
    var o = i.define("bp.channel.large.photo", s);
    e.exports = o
},i: function(e, t, n, r) {
    var i = n("A");
    var s = n("I");
    var o = n("L");
    e.exports = function(e, t) {
        var n = {};
        var r, u, a, f, l, c;
        var h = 10003;
        var p;
        var d;
        var v = {box: '<div class="L_layer" node-type="outer" style="position:absolute;clear:both;display:none;">' + '<div node-type="inner" class="bg">' + '<table border="0" cellpadding="0" cellspacing="0">' + "<tbody><tr><td>" + '<div class="content" node-type="content"></div>' + "</td></tr></tbody>" + "</table>" + "</div>" + "</div>"};
        var m = {ok: function(e) {
            i.stopEvent(e.evt);
            if (i.getType(t.okCallback) == "function" && t.okCallback(e) == false) {
                return
            }
            n.hide()
        },cancel: function(e) {
            i.stopEvent(e.evt);
            if (i.getType(t.cancelCallback) == "function") {
                t.cancelCallback(e)
            }
            n.hide()
        }};
        var g = {init: function() {
            g.pars();
            g.build();
            g.bind()
        },pars: function() {
            t = i.parseParam({okCallback: i.funcEmpty,cancelCallback: i.funcEmpty,showCallback: i.funcEmpty,hideCallback: i.funcEmpty,draggable: true,mask: true}, t || {})
        },build: function() {
            var n = i.builder(v.box).list;
            a = n.outer[0];
            r = s(a);
            f = n.inner[0];
            content = n.content[0];
            content.innerHTML = e || "";
            u = r.getDomList(true);
            l = u.title;
            if (t.mask) {
                r.setMask()
            }
            c = i.objSup(r, ["destroy"])
        },bind: function() {
            d = i.delegatedEvent(a);
            d.add("ok", "click", m.ok);
            d.add("cancel", "click", m.cancel);
            if (l && t.draggable) {
                o(l, {actObj: r,moveDom: a})
            }
            i.custEvent.add(r, "hide", function() {
                i.custEvent.remove(r, "hide", arguments.callee);
                n.destroy();
                o.destroy()
            })
        }};
        g.init();
        n = r;
        n.layer_size = r.getSize();
        n.setContent = function(e) {
            if (typeof e == "string") {
                content.innerHTML = e
            } else {
                content.appendChild(e)
            }
            return n
        };
        n.setLayerXY = function(e) {
            if (!e) {
                i.log("ui.tip.setLayerXY need element as pNode")
            }
            var t = i.position(e);
            var s = t.l;
            var o = e.offsetWidth;
            var u = e.offsetHeight;
            var a = n.layer_size.w;
            var f = Math.min(Math.max(s + (o - a) / 2, i.scrollPos().left), i.scrollPos().left + STK.winSize().width - a);
            var l = t.t + u;
            var c = [";"];
            c.push("height:", n.tipHeight, "px;");
            c.push("top:", l, "px;");
            c.push("left:", f, "px;");
            r.getBox().style.cssText += c.join("")
        };
        n.addEvent = function(e, t, n) {
            d.add(e, t, n)
        };
        n.destroy = function() {
            c.destroy();
            d.destroy();
            r = null
        };
        return n
    }
},I: function(e, t, n, r) {
    var i = n("A");
    var s = n("j");
    var o = n("J");
    var u = n("K");
    e.exports = function(e, t) {
        var n, r, a;
        var f = false;
        var l;
        var c = {init: function() {
            c.pars();
            c.build();
            c.bind()
        },pars: function() {
        },build: function() {
            n = u(e, t);
            r = n.getBox();
            a = i.builder(r).list
        },bind: function() {
        }};
        c.init();
        l = n;
        l.getDomList = function(e) {
            if (e) {
                a = s(i.builder(r).list)
            }
            return a
        };
        l.setMask = function() {
            i.custEvent.add(n, "show", function() {
                if (!f) {
                    o.showUnderNode(r)
                }
                f = true
            });
            i.custEvent.add(n, "hide", function() {
                o.back();
                f = false
            })
        };
        return l
    }
},j: function(e, t, n, r) {
    e.exports = function(e) {
        for (var t in e) {
            if (e[t] && e[t].length == 1) {
                e[t] = e[t][0]
            }
        }
        return e
    }
},J: function(e, t, n, r) {
    function d() {
        o = i.C("div");
        var e = '<div node-type="outer">';
        if (i.core.util.browser.IE6) {
            e += '<div style="position:absolute;width:100%;height:100%;"></div>'
        }
        e += "</div>";
        o = i.builder(e).list["outer"][0];
        document.body.appendChild(o);
        f = true;
        a = s(o, "lt");
        var t = function() {
            var e = i.core.util.winSize();
            o.style.cssText = i.core.dom.cssText(o.style.cssText).push("width", e.width + "px").push("height", e.height + "px").getCss()
        };
        p.add(a, "beforeFix", t);
        t()
    }
    function v(e) {
        var t;
        if (!(t = e.getAttribute(l))) {
            e.setAttribute(l, t = i.getUniqueKey())
        }
        return ">" + e.tagName.toLowerCase() + "[" + l + '="' + t + '"]'
    }
    var i = n("A");
    var s = n("k");
    var o, u = [], a, f = false, l = "STK-Mask-Key";
    var c = i.core.dom.setStyle, h = i.core.dom.getStyle, p = i.core.evt.custEvent;
    var m = {getNode: function() {
        return o
    },show: function(e, t) {
        if (f) {
            e = i.core.obj.parseParam({opacity: .3,background: "#000000"}, e);
            o.style.background = e.background;
            c(o, "opacity", e.opacity);
            o.style.display = "";
            a.setAlign("lt");
            t && t()
        } else {
            d();
            m.show(e, t)
        }
        return m
    },hide: function() {
        o.style.display = "none";
        u = [];
        return m
    },showUnderNode: function(e, t) {
        if (i.isNode(e)) {
            m.show(t, function() {
                c(o, "zIndex", h(e, "zIndex"));
                var t = v(e);
                var n = i.core.arr.indexOf(u, t);
                if (n != -1) {
                    u.splice(n, 1)
                }
                u.push(t);
                i.core.dom.insertElement(e, o, "beforebegin")
            })
        }
        return m
    },back: function() {
        if (u.length < 1) {
            return m
        }
        var e, t;
        u.pop();
        if (u.length < 1) {
            m.hide()
        } else if ((t = u[u.length - 1]) && (e = i.sizzle(t, document.body)[0])) {
            c(o, "zIndex", h(e, "zIndex"));
            i.core.dom.insertElement(e, o, "beforebegin")
        } else {
            m.back()
        }
        return m
    },resetSize: function() {
        var e = i.core.util.winSize();
        o.style.cssText = i.core.dom.cssText(o.style.cssText).push("width", e.width + "px").push("height", e.height + 22 + "px").getCss();
        return m
    },destroy: function() {
        p.remove(a);
        o.style.display = "none"
    }};
    e.exports = m
},k: function(e, t, n, r) {
    function u(e) {
        return i.core.dom.getStyle(e, "display") != "none"
    }
    function a(e) {
        e = i.core.arr.isArray(e) ? e : [0, 0];
        for (var t = 0; t < 2; t++) {
            if (typeof e[t] != "number")
                e[t] = 0
        }
        return e
    }
    function f(e, t, n) {
        if (!u(e))
            return;
        var r = "fixed", o, a, f, l, c = e.offsetWidth, h = e.offsetHeight, p = i.core.util.winSize(), d = 0, v = 0, m = i.core.dom.cssText(e.style.cssText);
        if (!s) {
            r = "absolute";
            var g = i.core.util.scrollPos();
            d = o = g.top;
            v = a = g.left;
            switch (t) {
                case "lt":
                    o += n[1];
                    a += n[0];
                    break;
                case "lb":
                    o += p.height - h - n[1];
                    a += n[0];
                    break;
                case "rt":
                    o += n[1];
                    a += p.width - c - n[0];
                    break;
                case "rb":
                    o += p.height - h - n[1];
                    a += p.width - c - n[0];
                    break;
                case "c":
                default:
                    o += (p.height - h) / 2 + n[1];
                    a += (p.width - c) / 2 + n[0];
                    break
            }
            f = l = ""
        } else {
            o = l = n[1];
            a = f = n[0];
            switch (t) {
                case "lt":
                    l = f = "";
                    break;
                case "lb":
                    o = f = "";
                    break;
                case "rt":
                    a = l = "";
                    break;
                case "rb":
                    o = a = "";
                    break;
                case "c":
                default:
                    o = (p.height - h) / 2 + n[1];
                    a = (p.width - c) / 2 + n[0];
                    l = f = "";
                    break
            }
        }
        if (t == "c") {
            if (o < d)
                o = d;
            if (a < v)
                a = v
        }
        m.push("position", r).push("top", o + "px").push("left", a + "px").push("right", f + "px").push("bottom", l + "px");
        e.style.cssText = m.getCss()
    }
    var i = n("A");
    var s = !(i.core.util.browser.IE6 || document.compatMode !== "CSS1Compat" && STK.IE), o = /^(c)|(lt)|(lb)|(rt)|(rb)$/;
    e.exports = function(e, t, n) {
        var r, u, l = true, c;
        if (i.core.dom.isNode(e) && o.test(t)) {
            var h = {getNode: function() {
                return e
            },isFixed: function() {
                return l
            },setFixed: function(t) {
                (l = !!t) && f(e, r, u);
                return this
            },setAlign: function(t, n) {
                if (o.test(t)) {
                    r = t;
                    u = a(n);
                    l && f(e, r, u)
                }
                return this
            },destroy: function() {
                if (!s) {
                    s && i.core.evt.removeEvent(window, "scroll", p)
                }
                i.core.evt.removeEvent(window, "resize", p);
                i.core.evt.custEvent.undefine(c)
            }};
            c = i.core.evt.custEvent.define(h, "beforeFix");
            h.setAlign(t, n);
            function p(t) {
                t = t || window.event;
                i.core.evt.custEvent.fire(c, "beforeFix", t.type);
                if (l && (!s || r == "c")) {
                    f(e, r, u)
                }
            }
            if (!s) {
                i.core.evt.addEvent(window, "scroll", p)
            }
            i.core.evt.addEvent(window, "resize", p);
            return h
        }
    }
},K: function(e, t, n, r) {
    var i = n("A");
    var s = n("l");
    var o = n("k");
    var u = n("L");
    var a = '<div node-type="outer" class="L_layer" style="display:none;position:absolute;"></div>';
    var f = 100100;
    e.exports = function(e, t) {
        var n, r, l, c;
        var h = null;
        var p = function(e) {
            var t = {};
            if (e.style.display == "none") {
                e.style.visibility = "hidden";
                e.style.display = "";
                t.w = e.offsetWidth;
                t.h = e.offsetHeight;
                e.style.display = "none";
                e.style.visibility = "visible"
            } else {
                t.w = e.offsetWidth;
                t.h = e.offsetHeight
            }
            return t
        };
        var d = function(e, t) {
            t = t || "topleft";
            var n = {};
            if (e.style.display == "none") {
                e.style.visibility = "hidden";
                e.style.display = "";
                n = i.core.dom.position(e);
                e.style.display = "none";
                e.style.visibility = "visible"
            } else {
                n = i.core.dom.position(e)
            }
            var r = p(e);
            switch (t) {
                case "topleft":
                    break;
                case "topright":
                    n["l"] = n["l"] + r["w"];
                    break;
                case "bottomleft":
                    n["t"] = n["t"] + r["h"];
                    break;
                case "bottomright":
                    n["l"] = n["l"] + r["w"];
                    n["t"] = n["t"] + r["h"];
                    break;
                default:
                    break
            }
            return n
        };
        var v = {show: function() {
            r.style.display = "";
            document.body.appendChild(r);
            i.custEvent.fire(v, "show");
            return v
        },hide: function() {
            r.style.display = "none";
            i.custEvent.fire(v, "hide");
            return v
        },getState: function() {
            if (r.style.display == "none") {
                return false
            } else {
                return true
            }
        },getID: function() {
            return n.id
        },getBox: function() {
            return r
        },html: function(e) {
            if (typeof e === "string") {
                r.innerHTML = e
            } else {
                r.appendChild(e)
            }
            return v
        },setTop: function() {
            r.parentNode && r.parentNode.appendChild(r);
            return v
        },setPosition: function(e) {
            r.style.top = e["t"] + "px";
            r.style.left = e["l"] + "px";
            return v
        },getPosition: function(e) {
            return d(r, e)
        },setLayoutPos: function(e, t) {
            s(r, e, t);
            return v
        },setMiddle: function() {
            var e = i.winSize();
            var t = v.getSize(true);
            var s = i.scrollPos()["top"] + (e.height - t.h) / 2;
            r.style.top = (s > 0 ? s : 0) + n.offset[1] + "px";
            r.style.left = (e.width - t.w) / 2 + n.offset[0] + "px";
            return v
        },setAlign: function(e) {
            e = i.parseParam({type: "c",offset: [0, 0]}, e || {});
            c = o(r, e.type, e.offset);
            return v
        },getSize: function(e) {
            if (e || !h) {
                h = p(r)
            }
            return h
        },setIndex: function(e) {
            r.style.zIndex = e
        },destroy: function() {
            r.style.display = "none";
            i.removeNode(r);
            c && c.destroy();
            r = null
        }};
        var m = {init: function() {
            m.pars();
            m.build();
            m.bind()
        },pars: function() {
            n = i.parseParam({id: "layer_" + i.core.util.getUniqueKey(),node: null,template: "",appendTo: document.body,draggable: false,zIndex: null,offset: [0, 0]}, t || {});
            if (i.isNode(e)) {
                n.node = e || n.node
            } else {
                switch ((typeof e || "").toLowerCase()) {
                    case "string":
                        n.id = e || n.id;
                        n.node = i.E(n.id) || null;
                        break;
                    case "object":
                        n = i.parseParam(n, e || {});
                        break
                }
            }
        },build: function() {
            r = n.node;
            l = n.appendTo;
            if (!r) {
                nodes = i.builder(n.template || a);
                r = nodes.list["outer"][0];
                l && l.appendChild(r)
            } else {
                if (!i.contains(l, r)) {
                    l && l.appendChild(r)
                }
            }
            v.setIndex(n.zIndex || f);
            r.id = n.id
        },bind: function() {
            i.custEvent.define(v, ["show", "hide"]);
            if (n.draggable) {
                u(r, {actObj: r,moveDom: r})
            }
        }};
        m.init();
        return v
    }
},l: function(e, t, n, r) {
    var i = n("A");
    e.exports = function(e, t, n) {
        if (!i.isNode(t)) {
            throw "kit.dom.layerOutElement need element as first parameter"
        }
        if (t === document.body) {
            return false
        }
        if (!t.parentNode) {
            return false
        }
        if (t.style.display === "none") {
            return false
        }
        var r, s, o, u, a, f, l;
        r = i.parseParam({pos: "left-bottom",offsetX: 0,offsetY: 0}, n);
        s = t;
        if (!s) {
            return false
        }
        while (s !== document.body) {
            s = s.parentNode;
            if (s.style.display === "none") {
                return false
            }
            f = i.getStyle(s, "position");
            l = s.getAttribute("layout-shell");
            if (f === "absolute" || f === "fixed") {
                break
            }
            if (l === "true" && f === "relative") {
                break
            }
        }
        s.appendChild(e);
        o = i.position(t, {parent: s});
        u = {w: t.offsetWidth,h: t.offsetHeight};
        a = r["pos"].split("-");
        if (a[0] === "left") {
            e.style.left = o.l + r.offsetX + "px"
        } else if (a[0] === "right") {
            e.style.left = o.l + u.w + r.offsetX + "px"
        } else if (a[0] === "center") {
            e.style.left = o.l + u.w / 2 + r.offsetX + "px"
        }
        if (a[1] === "top") {
            e.style.top = o.t + r.offsetY + "px"
        } else if (a[1] === "bottom") {
            e.style.top = o.t + u.h + r.offsetY + "px"
        } else if (a[1] === "middle") {
            e.style.top = o.t + u.h / 2 + r.offsetY + "px"
        }
        return true
    }
},L: function(e, t, n, r) {
    var i = n("A");
    e.exports = function(e, t) {
        var n, r, s, o, u, a, f, l;
        var c = function() {
            h();
            p()
        };
        var h = function() {
            n = i.parseParam({moveDom: e,perchStyle: "border:solid #999999 2px;",dragtype: "perch",actObj: {},pagePadding: 5}, t);
            s = n.moveDom;
            r = {};
            o = {};
            u = i.drag(e, {actObj: n.actObj});
            if (n["dragtype"] === "perch") {
                a = i.C("div");
                f = false;
                l = false;
                s = a
            }
            e.style.cursor = "move"
        };
        var p = function() {
            i.custEvent.add(n.actObj, "dragStart", d);
            i.custEvent.add(n.actObj, "dragEnd", v);
            i.custEvent.add(n.actObj, "draging", m)
        };
        var d = function(t, r) {
            document.body.style.cursor = "move";
            var s = i.core.util.pageSize()["page"];
            o = i.core.dom.position(n.moveDom);
            o.pageX = r.pageX;
            o.pageY = r.pageY;
            o.height = n.moveDom.offsetHeight;
            o.width = n.moveDom.offsetWidth;
            o.pageHeight = s["height"];
            o.pageWidth = s["width"];
            if (n["dragtype"] === "perch") {
                var u = [];
                u.push(n["perchStyle"]);
                u.push("position:absolute");
                u.push("z-index:" + (n.moveDom.style.zIndex + 10));
                u.push("width:" + n.moveDom.offsetWidth + "px");
                u.push("height:" + n.moveDom.offsetHeight + "px");
                u.push("left:" + o["l"] + "px");
                u.push("top:" + o["t"] + "px");
                a.style.cssText = u.join(";");
                l = true;
                setTimeout(function() {
                    if (l) {
                        document.body.appendChild(a);
                        f = true
                    }
                }, 100)
            }
            if (e.setCapture !== undefined) {
                e.setCapture()
            }
        };
        var v = function(t, r) {
            document.body.style.cursor = "auto";
            if (e.setCapture !== undefined) {
                e.releaseCapture()
            }
            if (n["dragtype"] === "perch") {
                l = false;
                n.moveDom.style.top = a.style.top;
                n.moveDom.style.left = a.style.left;
                if (f) {
                    document.body.removeChild(a);
                    f = false
                }
            }
        };
        var m = function(e, t) {
            var r = o.t + (t.pageY - o.pageY);
            var i = o.l + (t.pageX - o.pageX);
            var u = r + o["height"];
            var a = i + o["width"];
            var f = o["pageHeight"] - n["pagePadding"];
            var l = o["pageWidth"] - n["pagePadding"];
            if (u < f && r > 0) {
                s.style.top = r + "px"
            } else {
                var c;
                if (u >= f) {
                    c = f - o["height"]
                }
                if (r < 0 || c < 0) {
                    c = 0
                }
                s.style.top = c + "px"
            }
            if (a < l && i > 0) {
                s.style.left = i + "px"
            } else {
                if (i < 0) {
                    s.style.left = "0px"
                }
                if (a >= l) {
                    s.style.left = l - o["width"] + "px"
                }
            }
        };
        c();
        r.destroy = function() {
            document.body.style.cursor = "auto";
            if (typeof s.setCapture === "function") {
                s.releaseCapture()
            }
            if (n["dragtype"] === "perch") {
                l = false;
                if (f) {
                    document.body.removeChild(a);
                    f = false
                }
            }
            i.custEvent.remove(n.actObj, "dragStart", d);
            i.custEvent.remove(n.actObj, "dragEnd", v);
            i.custEvent.remove(n.actObj, "draging", m);
            if (u.destroy) {
                u.destroy()
            }
            n = null;
            s = null;
            o = null;
            u = null;
            a = null;
            f = null;
            l = null
        };
        r.getActObj = function() {
            return n.actObj
        };
        return r
    }
},m: function(e, t, n, r) {
    var i = n("A");
    var s = n("i");
    var o = n("M");
    var u = '<div class="L_min_prompt">' + '<div class="prompt M_txtc">' + '<span class="mk_ico" node-type="icon"></span><span class="cont" node-type="msg"></span>' + "</div>" + "</div>";
    var a = {suced: "mk_suced",error: "mk_fail",remind: "mk_remind"};
    e.exports = function(e, t) {
        var n, r, f, l = {};
        var c = {init: function() {
            c.pars();
            c.build();
            c.bind()
        },pars: function() {
            t = o({temp: "",mask: false,type: "suced",timer: 2e3}, t)
        },build: function() {
            r = s(t.temp || u, t);
            f = r.getDomList(true);
            if (f.icon) {
                i.addClassName(f.icon, a[t["type"] || "suced"])
            }
            if (f.msg) {
                f.msg.innerHTML = e
            }
            r.setMiddle().show()
        },bind: function() {
            var e = parseInt(t.timer, 10);
            if (e) {
                setTimeout(function() {
                    r.hide()
                }, e)
            }
        }};
        c.init();
        l.layer = r;
        return l
    }
},M: function(e, t, n, r) {
    var i = Object.prototype.hasOwnProperty;
    e.exports = function(e, t) {
        var n = Array.apply([], arguments), r = 1, s, o = typeof n[n.length - 1] == "boolean" ? n.pop() : true;
        if (n.length === 1) {
            e = !this.window ? this : {};
            r = 0
        }
        while (t = n[r++]) {
            for (s in t) {
                if (i.call(t, s) && (o || !(s in e))) {
                    e[s] = t[s]
                }
            }
        }
        return e
    }
},n: function(e, t, n, r) {
    e.exports = function(e, t, n) {
        t = t || function(e) {
            return e
        };
        var r = "", i = t("<li"), s = t(' class="cur"'), o = t('><a href="'), u = t('?prel=p6_3"><img src="'), a = t('"></a></li>');
        r += i;
        if (e.current) {
            r += s
        }
        r += o;
        r += e.href;
        r += u;
        r += e.src;
        r += a;
        return r
    }
},N: function(e, t, n, r) {
    var i = n("A");
    var s = n("o");
    var o = n("i");
    var u = n("b");
    var a = n("m");
    var f = $CONFIG["base_url"] || u.baseURL;
    var l = {set: function(e, t) {
        s({url: f + "likes/like",method: "post",args: e,onComplete: function(e) {
            if (e && e.result) {
                if (t && typeof t === "function") {
                    t.call(this, e)
                }
            } else {
                a(e.msg, {type: "error"})
            }
        }})
    },cancel: function(e, t) {
        s({url: f + "likes/dislike",method: "post",args: e,onComplete: function(e) {
            if (e && e.result) {
                if (t && typeof t === "function") {
                    t.call(this, e)
                }
            } else {
                a(e.msg, {type: "error"})
            }
        }})
    },setFeed: function(e, t) {
        s({url: f + "likes/like_feed",method: "post",args: e,onComplete: function(e) {
            if (e && e.result) {
                if (t && typeof t === "function") {
                    t.call(this, e)
                }
            } else {
                a(e.msg, {type: "error"})
            }
        }})
    },likeTip: function(e, t) {
        if ($CONFIG.account_settings.like_tip) {
            this.syncWeiboPop(e, t)
        } else {
            if (e && typeof e == "function") {
                e.call(this, {})
            }
        }
    },setLikeTip: function(e, t) {
        s({url: f + "settings/set_like",method: "post",args: e,onComplete: function(e) {
            if (e && e.result) {
                $CONFIG.account_settings.like_tip = !t
            }
        }})
    },syncWeiboPop: function(e, t) {
        function u(t, r) {
            var s = i.sizzle("input:checkbox", t.box)[0];
            n.setLikeTip({is_upload: r,like_tip: s.checked ? 0 : 1}, s.checked);
            if (e && typeof e == "function") {
                e.call(n, {is_sync: r})
            }
        }
        var n = this;
        var r = '<div class="L_synchr_wb">                        <a class="close" action-type="cancel" href="#">×</a>                        <p class="prompt">是否将我赞过的同步到微博？</p>                        <div class="confirm">                            <a class="M_btn_e" action-type="ok" href="#"><span>是</span></a><a class="M_btn_e" action-type="cancel" href="#"><span>否</span></a>                        </div>                        <label class="rembr M_txta"><input action-type="remember_me" type="checkbox" class="M_checkbox">记住我的选择，不再提示</label>                        <p node-type="like-tip" style="display:none" class="M_txtb tips">您的选择可在相册“设置”中重置</p>                    </div>';
        var s = {mask: false,okCallback: function(e) {
            u(e, 1)
        },cancelCallback: function(e) {
            u(e, 0)
        }};
        var a = o(r, s);
        a.setLayerXY(t);
        a.show();
        a.addEvent("remember_me", "click", function(e) {
            var t = e.el;
            var n = i.builder(e.box).list["like-tip"];
            window.setTimeout(function() {
                if (n && n[0])
                    n[0].style.display = t.checked ? "block" : "none"
            }, 10)
        })
    }};
    e.exports = l
},o: function(e, t, n, r) {
    var i = n("A");
    var s = i.funcEmpty;
    e.exports = function(e) {
        var t = {};
        var n = [];
        var r = null;
        var o = false;
        var u = i.parseParam({url: "",method: "get",responseType: "json",args: {},timeout: 30 * 1e3,onTraning: i.funcEmpty,isEncode: true}, e);
        u.onComplete = function(t) {
            o = false;
            if (typeof e.onComplete === "function") {
                e.onComplete(t, u.args)
            }
        };
        u.onFail = function(t) {
            o = false;
            if (typeof e.onFail === "function") {
                try {
                    s(u);
                    e.onFail(t, u.args)
                } catch (n) {
                }
            }
        };
        u.onTimeout = function(t) {
            o = false;
            try {
                s(u);
                if (typeof e.onTimeout === "function") {
                    e.onTimeout(t)
                }
            } catch (n) {
            }
        };
        if (o && u.needLock)
            return;
        o = true;
        i.ajax(u)
    }
},O: function(e, t, n, r) {
    e.exports = function(e, t, n) {
        t = t || function(e) {
            return e
        };
        var r = "", i = t('<a href="javascript:;" class="M_btn_c" action-type="like" title="'), s = t("取消赞"), o = t("赞"), u = t('" action-data="target_id='), a = t("&like_uid="), f = t("&type="), l = t('&is_private=false&ref=p6"><span class="M_ico M_icon6 '), c = t("M_icon6_on"), h = t('"></span><span class="t">赞</span></a>');
        r += i;
        if (e.is_liked) {
            r += s
        } else {
            r += o
        }
        r += u;
        r += e.photo_id;
        r += a;
        r += e.uid;
        r += f;
        r += e.type;
        r += l;
        if (e.is_liked) {
            r += c
        }
        r += h;
        return r
    }
},p: function(e, t, n, r) {
    e.exports = function(e, t, n) {
        t = t || function(e) {
            return e
        };
        var r = "", i = t('<div class="L_min_prompt"><a href="javscript:;" class="close" title="关闭" action-type="cancel"></a><div class="prompt M_txtc">    	<span class="mk_ico mk_suced"></span><span class="cont">'), s = t('</span>    </div><div class="view M_txtc">    	<p>进入<a class="category" href="'), o = t('" title="'), u = t('">'), a = t("</a>查看»</p>    </div></div>");
        r += i;
        r += e.text;
        r += s;
        r += e.href;
        r += o;
        r += e.title;
        r += u;
        r += e.href_text;
        r += a;
        return r
    }
}});
