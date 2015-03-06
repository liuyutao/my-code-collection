/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/6.
 */
STK.namespace("v6home", function(a, b) {
    var STK = arguments[0], $ = arguments[1];
    STK.register("lib.kit.io.ajax", function(a) {
        var b = function(b, c, d) {
            c = c | 0 || 1;
            d = d || "fail";
            var e = b.args;
            e.__rnd && delete e.__rnd;
            (new Image).src = "http://weibolog.sinaapp.com/?t=" + c + "&u=" + encodeURIComponent(b.url) + "&p=" + encodeURIComponent(a.core.json.jsonToQuery(e)) + "&m=" + d;
            (new Image).src = "http://s1.sinaedge.com/whb.gif?t=" + c + "&u=" + encodeURIComponent(b.url) + "&p=" + encodeURIComponent(a.core.json.jsonToQuery(e)) + "&m=" + d
        };
        return function(c) {
            var d = {}, e = [], f = null, g = !1, h = a.parseParam({url: "",method: "get",responseType: "json",timeout: 3e4,onTraning: a.funcEmpty,isEncode: !0}, c);
            h.onComplete = function(a) {
                g = !1;
                c.onComplete(a, h.args);
                setTimeout(i, 0)
            };
            h.onFail = function(a) {
                g = !1;
                if (typeof c.onFail == "function")
                    try {
                        c.onFail(a, h.args)
                    } catch (d) {
                    }
                setTimeout(i, 0);
                try {
                    b(h)
                } catch (d) {
                }
            };
            h.onTimeout = function(a) {
                try {
                    b(h);
                    c.onTimeout(a)
                } catch (d) {
                }
            };
            var i = function() {
                if (!!e.length) {
                    if (g === !0)
                        return;
                    g = !0;
                    h.args = e.shift();
                    if (h.method.toLowerCase() == "post") {
                        var b = a.core.util.URL(h.url);
                        b.setParam("__rnd", +(new Date));
                        h.url = b.toString()
                    }
                    f = a.ajax(h)
                }
            }, j = function(a) {
                while (e.length)
                    e.shift();
                g = !1;
                if (f)
                    try {
                        f.abort()
                    } catch (b) {
                    }
                f = null
            };
            d.request = function(a) {
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
    STK.register("lib.kit.io.jsonp", function(a) {
        return function(b) {
            var c = a.parseParam({url: "",method: "get",responseType: "json",varkey: "_v",timeout: 3e4,onComplete: a.funcEmpty,onTraning: a.funcEmpty,onFail: a.funcEmpty,isEncode: !0}, b), d = [], e = {}, f = !1, g = function() {
                if (!!d.length) {
                    if (f === !0)
                        return;
                    f = !0;
                    e.args = d.shift();
                    e.onComplete = function(a) {
                        f = !1;
                        c.onComplete(a, e.args);
                        setTimeout(g, 0)
                    };
                    e.onFail = function(a) {
                        f = !1;
                        c.onFail(a);
                        setTimeout(g, 0)
                    };
                    a.jsonp(a.core.json.merge(c, {args: e.args,onComplete: function(a) {
                        e.onComplete(a)
                    },onFail: function(a) {
                        try {
                            e.onFail(a)
                        } catch (b) {
                        }
                    }}))
                }
            }, h = {};
            h.request = function(a) {
                a || (a = {});
                d.push(a);
                a._t = 1;
                g()
            };
            h.abort = function(a) {
                while (d.length)
                    d.shift();
                f = !1;
                e = null
            };
            return h
        }
    });
    STK.register("lib.kit.io.ijax", function(a) {
        return function(b) {
            var c = a.parseParam({url: "",timeout: 3e4,isEncode: !0,abaurl: null,responseName: null,varkey: "callback",abakey: "callback"}, b), d = [], e = null, f = !1;
            c.onComplete = function(a, d) {
                f = !1;
                b.onComplete(a, c.form, d);
                c.form = null;
                c.args = null;
                setTimeout(g, 0)
            };
            c.onFail = function(a, d) {
                f = !1;
                b.onFail(a, c.form, d);
                c.form = null;
                c.args = null;
                setTimeout(g, 0)
            };
            var g = function() {
                var b;
                if (!!d.length) {
                    if (f === !0)
                        return;
                    f = !0;
                    b = d.shift();
                    c.args = b.args;
                    c.form = b.form;
                    e = a.ijax(c)
                }
            }, h = function(a) {
                while (d.length)
                    d.shift();
                f = !1;
                if (e)
                    try {
                        e.abort()
                    } catch (b) {
                    }
                e = null
            }, i = {};
            i.request = function(c, e) {
                if (!a.isNode(c))
                    throw "[lib.kit.io.ijax.request] need a form as first parameter";
                e || (e = {});
                b.noQueue && h();
                d.push({form: c,args: e});
                g()
            };
            i.abort = h;
            return i
        }
    });
    STK.register("lib.kit.io.inter", function(a) {
        var b = a.core.json.merge;
        return function() {
            var c = {}, d = {}, e = {}, f = function(a, b) {
                return function(c, d) {
                    try {
                        b.onComplete(c, d)
                    } catch (f) {
                    }
                    try {
                        c.code === "100000" ? b.onSuccess(c, d) : b.onError(c, d)
                    } catch (f) {
                    }
                    for (var g in e[a])
                        try {
                            e[a][g](c, d)
                        } catch (f) {
                        }
                }
            }, g = function(a, b, c) {
                return function(d) {
                    try {
                        b.onComplete(d, c)
                    } catch (f) {
                    }
                    try {
                        d.code === "100000" ? b.onSuccess(d, c) : b.onError(d, c)
                    } catch (f) {
                    }
                    for (var g in e[a])
                        try {
                            e[a][g](d, c)
                        } catch (f) {
                        }
                }
            };
            c.register = function(a, b) {
                if (typeof d[a] != "undefined")
                    throw a + " registered";
                d[a] = b;
                e[a] = {}
            };
            c.addHook = function(b, c) {
                var d = a.core.util.getUniqueKey();
                e[b][d] = c;
                return d
            };
            c.rmHook = function(a, b) {
                e[a] && e[a][b] && delete e[a][b]
            };
            c.getTrans = function(c, e) {
                var g = b(d[c], e);
                g.onComplete = f(c, e);
                g.url += (g.url.indexOf("?") >= 0 ? "&" : "?") + "ajwvr=6";
                g.withDomain && (g.url += "&domain=" + $CONFIG.domain);
                var h = d[c].requestMode, i = "ajax";
                if (h === "jsonp" || h === "ijax")
                    i = h;
                return a.lib.kit.io[i](g)
            };
            c.request = function(c, e, f) {
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
    STK.register("conf.trans.bubbleTip", function(a) {
        var b = a.lib.kit.io.inter(), c = b.register;
        c("bubblesInfo", {url: "/aj/guide/bubblead",method: "get"});
        return b
    });
    STK.register("pl.content.bubbleTip.source.tip", function(a) {
        var b = '<#et list data><div class="W_layer_tips W_layer_tips_left" style="top:500px;left:50px;"><div class="W_layer_close"><a href="#" class="W_ficon ficon_close S_ficon">X</a></div><div class="content"><div class="W_layer_title">大标题（可以没有）</div> <div class="txt"><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p></div><div class="picbox"><img src="../../../images/common/feedapp/normal_topic.jpg" width="260" height="92"></div></div><div class="W_layer_btn"><a href="" class="W_btn_a">确定</a></div><div class="W_layer_arrow"><span class="W_arrow_bor W_arrow_bor_l"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></#et>';
        return function(c) {
            var d, e, f, g, h, i, j, k, l = function(a) {
                e.style.top = a.t + "px";
                e.style.left = a.l + "px";
                return i
            }, m = function() {
                var b = a.core.util.winSize(), c = d.getSize(!0);
                e.style.top = a.core.util.scrollPos().top + (b.height - c.h) / 2 + "px";
                e.style.left = (b.width - c.w) / 2 + "px";
                return i
            }, n = function(a, b, c) {
                typeof a == "string" ? g.innerHTML = a : g.appendChild(a);
                h.style.display = b ? "" : "none";
                c && h.setAttribute("suda-data", c);
                return i
            }, o = function(a) {
                if (j) {
                    j.className = a.className || "";
                    j.style.cssText = a.style || ""
                }
                return i
            }, p = function() {
                d = a.ui.layer({template: b});
                e = d.getBox();
                f = d.getDomList();
                g = f.inner;
                j = f.arrow;
                h = f.closeBtn;
                i = d;
                c && n(c);
                document.body.appendChild(e)
            };
            p();
            i.setPosition = l;
            i.setMiddle = m;
            i.setContent = n;
            i.setArrow = o;
            return i
        }
    });
    STK.register("lib.kit.extra.rects", function(a) {
        var b = a.core.util.browser, c = {}, d = 5, e = 20, f = {t: function(a, b) {
            return a.t > b.h
        },b: function(a, b) {
            return a.b > b.h
        },l: function(a, b) {
            return a.l > b.w
        },r: function(a, b) {
            return a.r > b.w
        }}, g = {domSize: function(b) {
            var c = a.core.dom.getSize(b);
            return {w: Math.max(c.width, a.getStyle(b, "width").replace(/px|auto/gi, "")),h: Math.max(c.height, a.getStyle(b, "height").replace(/px|auto/gi, ""))}
        },mouseXY: function(c) {
            var d = {x: c.pageX,y: c.pageY};
            if (b.IE6 || b.IE7) {
                var e = a.core.util.scrollPos();
                d.x = d.x + e.left;
                d.y = d.y + e.top
            }
            return d
        },getRows: function(a) {
            var c = a.getClientRects();
            if (b.IE6 || b.IE7) {
                var d = [], e = {}, f;
                for (var g = 0, h = c.length; g < h; g++) {
                    var i = c[g];
                    e[i.top] || (e[i.top] = []);
                    e[i.top].push(i)
                }
                for (var j in e) {
                    var k = e[j], h = k.length, l = k[0];
                    h > 1 && (l.right = k[h - 1].right);
                    d.push(l)
                }
                c = d
            }
            return c
        },getTextRect: function(b, c) {
            var d = a.parseParam({evt: ""}, c), e = a.core.util.scrollPos(), f;
            if (!b.getClientRects) {
                var h = g.domSize(b);
                return {width: h.w,height: h.h,left: "",right: "",top: "",bottom: ""}
            }
            var i = {rows: g.getRows(b)}, j = g.mouseXY(d.evt), k = {x: j.x - e.left,y: j.y - e.top};
            for (var l = 0, m = i.rows.length; l < m; l++) {
                var n = i.rows[l];
                l == 0 && (f = n);
                if (k.y > n.top && k.y < n.bottom) {
                    f = n;
                    break
                }
            }
            if (a.IE) {
                var h = g.domSize(b);
                f = a.parseParam({width: h.w,height: h.h,left: "",right: "",top: "",bottom: ""}, f)
            }
            return f
        },getDistance: function(b, c) {
            var d = a.core.util.winSize(), e = g.getTextRect(b, c);
            return {win: d,rect: e,w: e.width,h: e.height,t: e.top,l: e.left,r: d.width - e.right,b: d.height - e.bottom}
        },getSeat: function(b, c, d) {
            var h = a.parseParam({distance: e,priority: "trbl"}, d), i = g.getDistance(b, d), j = g.domSize(c);
            i.area = "b";
            var k = h.priority.split("");
            for (var l = 0, m = k.length; l < m; l++) {
                var n = k[l];
                if (!f[n])
                    throw 'priority error, random use "tbrl" combination';
                if (f[n](i, j)) {
                    i.area = n;
                    break
                }
            }
            return i
        },setArrow: function(b) {
            var c = a.parseParam({evt: "",node: "",layer: "",arrow: "",priority: "trbl",css_t: "arrow arrow_b",css_r: "arrow arrow_l",css_b: "arrow arrow_t",css_l: "arrow arrow_r",offset: d,distance: e,followNode: !1,isFixed: !1,setArrowMiddle: !1}, b);
            if (!c.node)
                throw "target node is undefined";
            if (!c.layer)
                throw "layer node is undefined";
            if (!c.arrow)
                throw "arrow node is undefined";
            var f = g.getSeat(c.node, c.layer, c), h = f.area, i = f.rect;
            c.arrow.className = c["css_" + h];
            c.arrow.style.cssText = "";
            var j = g.domSize(c.layer), k = a.scrollPos();
            window.navigator.userAgent.indexOf("iPad") > -1 && window.navigator.userAgent.indexOf("Version/7.0") > -1 && (k.top = 0);
            var l, m, n, o = a.winSize().width - 20, p = a.winSize().height - 20, q = j.w, r = j.h, s = 0;
            if (c.setArrowMiddle) {
                if (h == "t" || h == "b")
                    s = parseInt(i.width / 2) - d;
                if (h == "l" || h == "r")
                    s = parseInt(i.height / 2) - d
            }
            if (h == "t" || h == "b") {
                if (i.left + j.w > o) {
                    c.distance = -(o - (i.left + j.w));
                    c.arrow.style.cssText = "left:" + c.distance + "px;right:auto;"
                }
                if (i.left - c.distance < 0) {
                    c.distance = c.followNode ? 0 : i.left;
                    c.arrow.style.cssText = "left:" + c.distance + "px;right:auto;"
                }
            }
            if (h == "l" || h == "r") {
                if (i.top + j.h > p) {
                    c.distance = -(p - (i.top + j.h));
                    c.arrow.style.cssText = "top:" + c.distance + "px;bottom:auto;"
                }
                if (i.top - c.distance < 0) {
                    c.distance = c.followNode ? 0 : i.top;
                    c.arrow.style.cssText = "top:" + c.distance + "px;bottom:auto;"
                }
            }
            if (c.isFixed) {
                a.setStyle(c.layer, "position", "fixed");
                k.top = k.left = 0
            }
            if (h == "t" || h == "b") {
                l = h == "t" ? i.top + k.top - j.h - c.offset : i.bottom + k.top + c.offset;
                m = i.left + k.left - c.distance + s
            } else {
                l = i.top + k.top - c.distance + s;
                m = h == "r" ? i.right + k.left + c.offset : i.left + k.left - j.w - c.offset
            }
            c.layer.style.top = l + "px";
            c.layer.style.left = m + "px";
            return h
        },setLevelCardArrow: function(b) {
            var c = a.parseParam({evt: "",node: "",layer: "",arrow: "",priority: "trbl",css_t: "arrow arrow_b",css_r: "arrow arrow_l",css_b: "arrow arrow_t",css_l: "arrow arrow_r",offset: d,distance: e}, b);
            if (!c.node)
                throw "target node is undefined";
            if (!c.layer)
                throw "layer node is undefined";
            if (!c.arrow)
                throw "arrow node is undefined";
            var f = g.getSeat(c.node, c.layer, c), h = f.area, i = f.rect;
            c.arrow.className = c["css_" + h];
            c.arrow.style.cssText = "";
            var j = g.domSize(c.layer), k = a.scrollPos();
            window.navigator.userAgent.indexOf("iPad") > -1 && window.navigator.userAgent.indexOf("Version/7.0") > -1 && (k.top = 0);
            var l, m, n, o = a.winSize().width, p = j.w;
            if (h == "t" || h == "b") {
                l = h == "t" ? i.top + k.top - j.h - c.offset : i.bottom + k.top + c.offset;
                m = i.left + k.left - c.distance;
                n = i.right + k.left - p + c.distance;
                if (n > 0 && m + p > o + k.left) {
                    m = n;
                    c.arrow.style.cssText = "right:30px;left:auto;"
                }
            } else {
                l = i.top + k.top - c.distance;
                m = h == "r" ? i.right + k.left + c.offset : i.left + k.left - j.w - c.offset
            }
            c.layer.style.top = l + "px";
            c.layer.style.left = m + "px"
        },setLayer: function(b) {
            var c = a.parseParam({evt: "",node: "",layer: "",priority: "btrl",offsetX: 0,offsetY: 0}, b);
            if (!c.node)
                throw "target node is undefined";
            if (!c.layer)
                throw "layer node is undefined";
            var d = g.getSeat(c.node, c.layer, c), e = d.area, f = d.rect, h = g.domSize(c.layer), i = a.scrollPos();
            window.navigator.userAgent.indexOf("iPad") > -1 && window.navigator.userAgent.indexOf("Version/7.0") > -1 && (i.top = 0);
            var j, k, l, m = a.winSize().width, n = h.w;
            if (e == "t" || e == "b") {
                j = e == "t" ? f.top + i.top - h.h + c.offsetY : f.bottom + i.top - c.offsetY;
                k = f.left + i.left + c.offsetX;
                l = f.right + i.left - n + c.distance;
                l > 0 && k + n > m + i.left && (k = l)
            } else {
                j = f.top + i.top + c.offsetY;
                k = e == "r" ? f.right + i.left - c.offsetX : f.left + i.left - h.w + c.offsetX
            }
            c.layer.style.top = j + "px";
            c.layer.style.left = k + "px"
        }};
        c.getTextRect = g.getTextRect;
        c.getDistance = g.getDistance;
        c.getSeat = g.getSeat;
        c.setArrow = g.setArrow;
        c.setLevelCardArrow = g.setLevelCardArrow;
        c.setLayer = g.setLayer;
        return c
    });
    STK.register("pl.content.bubbleTip.source.bubLayer", function(a) {
        var b = 5, c = 30, d = 30, e = 20, f = '<div node-type="outer" class="W_layer_tips W_layer_tips_top" style="top:50px;left:50px;"><div class="W_layer_close"><a action-type="close" href="javascript:void(0)" class="W_ficon ficon_close S_ficon">X</a></div><div class="content" node-type="content"></div><div class="W_layer_btn" node-type="type4btn" style="display:none"></div><div class="W_layer_arrow" ><span class="W_arrow_bor W_arrow_bor_t" node-type="arrow"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div>', g = '<#et list data><#if (data.step>0)><a href="javascript:void(0)" class="W_btn_b" action-type="prev" action-data="now=${data.step}">${data.prevBtnText}</a></#if><a href="javascript:void(0)" action-type="next" action-data="${data.step}" class="W_btn_a">${data.nextBtnText}</a><span class="page"><a href="javascript:void(0)">${data.step+1}</a>/${data.max}</span></#et>', h = {1: '<#et list data><div class="txt"><p>${data.content}</p></div></#et>',2: '<#et list data><div class="W_layer_title">${data.title}</div><div class="txt"><p>${data.content}</p><#if (data.confirmBtnText)><a action-type="close" <#if (data.confrimBtnHref)>href="${data.confirmBtnHref}"</#else >href="javascript:void(0)"</#if> class="W_btn_a">${data.confirmBtnText}</a></#if></div></#et>',3: '<#et list data><#if (data.title)><div class="W_layer_title">${data.title}</div></#if><div class="picone"><img src="${data.imgSrc}" width="92" height="92"></div><div class="txt"><#if (data.smallTitle)><h3>${data.smallTitle}</h3></#if><p>${data.content}</p><a action-type="close" <#if (data.confrimBtnHref)>href="${data.confirmBtnHref}"</#else >href="javascript:void(0)"</#if> class="W_btn_a">${data.confirmBtnText}</a></div></#et>',4: '<#et list data><#if (data.title)><div class="W_layer_title">${data.title}</div></#if><div class="txt"><p>${data.content}</p></div><div class="picbox"><img src="${data.imgSrc}" width="260"></div></#et>'};
        return function(b) {
            var c, d = a.parseParam({node: null,url: "",dir: "trlb",boxClass: "",arrowClass: "",hasClose: "",onHide: a.funcEmpty,onComplete: a.funcEmpty,content: "",zIndex: 999,suda: "",offsetX: 10,offsetY: 20}, b || {});
            if (!d.node)
                return a.log(new Error("lib.litter.bubble:没有指定要依附的节点！"));
            var e = {}, g, h, i = 1e3, j = function() {
                if (!!d.node && !!d.node.parentNode && d.node.style.display != "none") {
                    l(!0);
                    m()
                }
            }, k = function() {
                c.hide();
                clearInterval(g);
                r()
            }, h = function() {
                var b = d.node;
                h = !1;
                while (b != document.body)
                    if (a.getStyle(b, "position") !== "fixed")
                        b = b.parentNode;
                    else {
                        h = !0;
                        break
                    }
            }, l = function(b) {
                if (!b || a.getStyle(d.node.parentNode, "display") == "none")
                    $box.style.display = "none";
                else {
                    $box.style.display = "";
                    var e = a.core.dom.position(d.node);
                    if (!a.contains(document.body, d.node) || !e || isNaN(e.l + e.t))
                        return k();
                    a.lib.kit.extra.rects.setArrow({node: d.node,layer: $box,arrow: c.getDomList().arrow,priority: d.dir,css_t: "arrow_down",css_b: "arrow_up",css_l: "arrow_right",css_r: "arrow_left",followNode: !0,isFixed: h,offset: 12,setArrowMiddle: !0})
                }
            }, m = function() {
                h && ($box.style.position = "fixed");
                var b;
                clearInterval(g);
                g = setInterval(function() {
                    a.position(d.node) ? b = !0 : b = !1;
                    l(b)
                }, i)
            }, n = function(b) {
                a.preventDefault(b);
                var c = a.fixEvent(b).target, e;
                while (c && c !== $box) {
                    if (c.tagName.toLowerCase() === "a") {
                        e = c.getAttribute("action-data");
                        c.href.match(/^\s*javascript\s*:/i) || window.open(c.href);
                        a.lib.kit.io.ajax({url: d.url,onComplete: function() {
                            k();
                            d.onHide(e);
                            typeof d.onComplete == "function" && d.onComplete(e)
                        }}).request(a.queryToJson(e || ""));
                        return
                    }
                    c = c.parentNode
                }
            }, o = function() {
                c = a.core.util.easyTemplate(f).toString();
                c = a
            }, p = function() {
                a.addEvent($box, "click", n)
            }, q = function() {
                o();
                p();
                h()
            };
            q();
            var r = function() {
                a.removeEvent($box, "click", n);
                c.destroy()
            };
            e.show = j;
            e.hide = k;
            return e
        }
    });
    STK.register("lib.kit.dom.parseDOM", function(a) {
        return function(a) {
            for (var b in a)
                a[b] && a[b].length == 1 && (a[b] = a[b][0]);
            return a
        }
    });
    STK.register("lib.kit.extra.language", function(a) {
        window.$LANG || (window.$LANG = {});
        return function(b) {
            var c = [].splice.call(arguments, 1, arguments.length), d = [b, $LANG].concat(c), e = a.core.util.language.apply(this, d);
            return e
        }
    });
    STK.register("pl.content.bubbleTip.source.init", function(a) {
        var b = a.lib.kit.extra.language, c = '<div node-type="outer" class="W_layer_tips W_layer_tips_top" style="position:absolute;top:50px;left:50px;display:none;"><div class="W_layer_close"><a href="javascript:void(0)" action-type="close" class="W_ficon ficon_close S_ficon">X</a></div><div class="content" node-type="content"></div><div class="W_layer_btn" node-type="type4btn" style="display:none"></div><div class="W_layer_arrow" ><span class="W_arrow_bor W_arrow_bor_t" node-type="arrow"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div>', d = '<#et list data><a href="javascript:void(0)" action-type="next" action-data="now=${data.step}" class="W_btn_a">${data.nextBtnText}</a><span class="page"><a href="javascript:void(0)">${data.step+1}</a>/${data.max}</span></#et>', e = {1: '<#et list data><div class="txt"><p>${data.content}</p></div></#et>',2: '<#et list data><div class="W_layer_title">${data.title}</div><div class="txt"><p>${data.content}</p><#if (data.confirmBtnText)><a action-type="close" <#if (data.confirmBtnHref)> href="${data.confirmBtnHref}"<#else>href="javascript:void(0)" </#if> class="W_btn_a">${data.confirmBtnText}</a></#if></div></#et>',3: '<#et list data><#if (data.title)><div class="W_layer_title">${data.title}</div></#if><div class="picone"><#if (data.imgSrc)><#if (data.imgHref)><a style="cursor:pointer" href="${data.imgHref}" target="_blank"><img src="${data.imgSrc}"></a><#else><img src="${data.imgSrc}"></#if></#if></div><div class="txt"><#if (data.smallTitle)><h3>${data.smallTitle}</h3></#if><p>${data.content}</p><a action-type="close" <#if (data.confirmBtnHref)>href="${data.confirmBtnHref}"</#else> href="javascript:void(0)" </#if> class="W_btn_a">${data.confirmBtnText}</a></div></#et>',4: '<#et list data><#if (data.title)><div class="W_layer_title">${data.title}</div></#if><div class="txt"><p>${data.content}</p></div><div class="picbox"><#if (data.imgSrc)><#if (data.imgHref)><a style="cursor:pointer" href="${data.imgHref}" target="_blank"><img src="${data.imgSrc}"></a><#else><img src="${data.imgSrc}"></#if></#if></div></#et>'}, f = 0, g = {b: "W_layer_tips W_layer_tips_top",t: "W_layer_tips W_layer_tips_bottom",r: "W_layer_tips W_layer_tips_left",l: "W_layer_tips W_layer_tips_right"}, h = [], i = {1: {node: "",dir: "brlt",content: ""},2: {node: "#plc_main",dir: "brlt",title: "",content: "",confirmBtnText: b("#L{确定}"),confirmBtnHref: ""},3: {node: "#plc_main",dir: "brlt",title: "",smallTitle: "",content: "",confirmBtnText: b("#L{确定}"),confirmBtnHref: "",imgSrc: "",imgHref: ""},4: {node: "#plc_main",dir: "brlt",title: "",content: "",confirmBtnText: b("#L{确定}"),confirmBtnHref: "",nextBtnText: b("#L{确定}"),prevBtnText: b("#L{上一步}"),imgSrc: "",imgHref: ""}};
        return function(b) {
            var j = {}, k, l, m = a.core.util.easyTemplate, n, o, p = 0, q = "-", r, s, t = 36e5, u = t + 1e3, v = function(a) {
                n = a.data;
                n.bubs = n.bubs || [a.data];
                if (!n.bubs || !n.bubs.length)
                    return !1;
                n.finished = !1;
                w(n)
            }, w = function(b, c) {
                x();
                var d = b.styleType || 0, e = c || 0, f, h;
                f = b.bubs[e];
                h = f.node;
                var j = a.parseParam(i[d], f || {});
                o = j;
                j.step = e;
                j.max = b.bubs ? b.bubs.length : 1;
                z(j, d);
                var l = function() {
                    var b = a.sizzle(h)[0];
                    if (!!h && !!b) {
                        k.outer.style.display = "";
                        !a.hasClassName(document.body, "WB_global_tips_none") && a.addClassName(document.body, "WB_global_tips_none");
                        y(b) || (k.outer.style.position = "absolute");
                        var c = a.lib.kit.extra.rects.setArrow({node: b,layer: k.outer,arrow: k.arrow,priority: f.dir || j.dir,css_t: "W_arrow_bor W_arrow_bor_b",css_b: "W_arrow_bor W_arrow_bor_t",css_l: "W_arrow_bor W_arrow_bor_r",css_r: "W_arrow_bor W_arrow_bor_l",followNode: !0,isFixed: y(b),offset: 12,setArrowMiddle: !0});
                        k.outer.className = g[c]
                    }
                };
                l()
            }, x = function() {
                clearInterval(r);
                k.outer.style.display = "none"
            }, y = function(b) {
                var c = !1;
                while (b != document.body)
                    if (a.getStyle(b, "position") !== "fixed")
                        b = b.parentNode;
                    else {
                        c = !0;
                        break
                    }
                return c
            }, z = function(a, b) {
                if (!!a && !!b) {
                    for (var c in a)
                        (a[c] == null || a[c] == "null") && delete a[c];
                    var f = m(e[b], a);
                    k.content.innerHTML = f;
                    if (b == 4) {
                        k.type4btn.style.display = "";
                        k.type4btn.innerHTML = m(d, a).toString()
                    } else
                        k.type4btn.style.display = "none"
                }
            }, A = {showNextGroup: function() {
                f = 0;
                var b = h.shift();
                b ? v(b) : a.hasClassName(document.body, "WB_global_tips_none") && a.removeClassName(document.body, "WB_global_tips_none")
            },close: function(a) {
                x();
                A.showNextGroup()
            },next: function(a) {
                var b = n.bubs;
                if (a.data.now == b.length - 1) {
                    x();
                    A.showNextGroup()
                } else
                    w(n, parseInt(a.data.now) + 1)
            },prev: function(a) {
                var b = n.bubs;
                a.data.now != 0 && w(n, parseInt(a.data.now) - 1)
            }}, B = function() {
                k = m(c).toString();
                k = a.lib.kit.dom.parseDOM(a.builder(k).list);
                document.body.appendChild(k.outer);
                l = a.delegatedEvent(k.outer)
            }, C = function() {
                l.add("close", "click", A.close);
                l.add("next", "click", A.next);
                l.add("prev", "click", A.prev)
            }, D = function() {
                setTimeout(function() {
                    var b = {pageid: $CONFIG.pageid};
                    a.conf.trans.bubbleTip.getTrans("bubblesInfo", {onSuccess: function(a) {
                        h.push(a);
                        A.showNextGroup()
                    },onError: function() {
                        A.showNextGroup()
                    }}).request(b)
                }, 3e3)
            }, E = function() {
                B();
                C();
                var c = a.sizzle('[node-type="bubble-extra"]', b)[0];
                if (c)
                    try {
                        var d = a.strToJson(c.value);
                        d && h.push(d)
                    } catch (e) {
                    }
            };
            E();
            a.core.dom.ready(D);
            var F = function() {
                a.removeClassName(document.body, "WB_global_tips_none");
                s && clearInterval(s);
                a.removeNode(k.outer)
            };
            j.destroy = F;
            return j
        }
    });
    FM.register("pl.content.bubbleTip.index", function(b, c) {
        return a.pl.content.bubbleTip.source.init(a.E(b), c)
    })
});
