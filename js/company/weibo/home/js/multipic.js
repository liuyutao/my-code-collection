/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/9.
 */
STK.register("lib.photoview.index", function (a) {
    function D(a, b) {
        return i(a, {size: b || "mw1024"})
    }

    function C(a, b) {
        return(a = String(a)) ? a.replace(PreviewDom, function (a) {
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
        return timeout(a, b || 1)
    }

    var whiteList = a.lib.feed.imageLikeWhiteList(), timeout = window.setTimeout, photoviewSource = a.lib.photoview.source, e = photoviewSource.channel, photoviewConfTrans = a.conf.trans.photoview, photoviewUtil = photoviewSource.util, uiAlert = a.ui.alert, i = a.lib.kit.extra.imageURL, preventDef = a.preventDefault, k = a.funcEmpty, l = a.tween, m = a.setStyle, n = a.addClassName, o = a.lib.kit.extra.language, p, q, r = photoviewUtil.throttle, s = photoviewUtil.debounce, t = photoviewUtil.mix, u = Math.max, v = Math.min, w = function (a, b) {
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
    }, PreviewDom = /\{\w[\w.]*?\}/g, E = '<#et temp data>' +
        '<div class="W_layer layer_multipic_preview" node-type="outer">' +
        '<div node-type="box" class="multipic_preview">' +
        '<a role="button" action-type="close" href="#" class="close" title="#L{关闭}">&times;</a>' +
        '<div node-type="scroller" class="scroller"><div node-type="inner" class="inner clearfix"><div node-type="userinfo" class="info_box W_fr S_bg2"></div><div node-type="desktop" class="pic_box"><div node-type="display" class="pic_show_box"><div node-type="loader" class="pic"></div><div node-type="wrapIcon" class="pos_icon">' + (whiteList ? '<div class="pos_margin" node-type="likeBtn" style="display:none;" action-type="image_like" action-data="mid=${data.mid}&photo_id=${data.pid}&is_liked=${data.is_liked}&count=${data.count}&object_id=${data.object_id}&ref=${data.ref}"><#if (data.is_liked)><a href="javascript:" class="W_btn_alpha" title="#L{取消赞}"><i class="icon_praised"></i><span node-type="count">(${data.count})</span></a><#else><a href="javascript:" class="W_btn_alpha" title="#L{赞}"><i class="icon_praise"></i><span node-type="count">(${data.count})</span></a></#if></div>' : "") + '<a suda-data="key=big_pic_cover&value=magnify_pic" node-type="togglesize" action-type="togglesize" href="javascript:" class="W_btn_alpha"><i class="icon_narrow"></i><span>#L{适应页面}</span></a>' + '<a suda-data="key=big_pic_cover&value=check_pic" node-type="maximum" action-type="maximum" href="javascript:" class="W_btn_alpha" title="#L{查看原图}" suda-uatrack="key=tblog_newimage_feed&value=view_original"><i class="icon_maximum"></i><span>#L{查看原图}</span></a>' + "</div>" + "</div>" + '<div node-type="carousel" class="pic_choose_box">' + '<div node-type="prev" class="arrow_boxL"><a href="javascript:;" class="arrow_left_small" title="#L{上一页}"><em class="ico_pic_prev">&lt;</em></em></a></div>' + '<div node-type="clip" class="stage_box"><ul node-type="list" class="choose_box clearfix"></ul></div>' + '<div node-type="next" class="arrow_boxR"><a href="javascript:;" class="arrow_right_small" title="#L{下一页}"><em class="ico_pic_next">&gt;</em></em></a></div>' + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</#et>", F = !1, G = !1, photoOverLayer, I, J, K, L = null, directionObj, N, O, P, Q, R, S, T, U, V = !1, W, X, Y, Z, $, _, ba = function (b) {
        var c, e = r(function (a) {
            !V && directionObj[a] && i(a) && bm(directionObj[a], k, a)
        }, 300), f = function () {
            c && clearTimeout(c);
            c = z(function () {
                e(j())
            }, 1e3)
        }, g = function () {
            var a = 2, b = 3, c = 0, d = [], e = {};
            photoOverLayer.on("hide", function () {
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
                var a = photoviewCarousel.get("numItems"), c = photoviewCarousel.get("selectedItem"), e = b, f = 0, g = 0;
                c === -1 && (c = 0);
                f = c - e;
                f = f > 0 ? f : 0;
                g = c + e + 1;
                g = g > a ? a : g;
                d = A(photoviewCarousel.slice(f, g), i);
                h()
            }
        }(), h = function () {
            if (_) {
                W ? _.innerHTML = +(X || 0) != 0 ? o('<a href="javascript:" class="W_btn_alpha" title="#L{取消赞}"><i class="icon_praised"></i><span>(' + (X || 0) + ")</span></a>") : o('<a href="javascript:" class="W_btn_alpha" title="#L{取消赞}"><i class="icon_praised"></i></a>') : _.innerHTML = +(X || 0) != 0 ? o('<a href="javascript:" class="W_btn_alpha" title="#L{赞}"><i class="icon_praise"></i><span>(' + (X || 0) + ")</span></a>") : o('<a href="javascript:" class="W_btn_alpha" title="#L{赞}"><i class="icon_praise"></i><span>#L{赞}</span></a>');
                _.setAttribute("action-data", "ref=" + p + "&mid=" + Z + "&photo_id=" + $ + "&is_liked=" + W + "&count=" + (X || 0) + "&object_id=" + Y)
            }
        }, i = function (a) {
            var b = photoviewCarousel.get("firstVisible"), c = photoviewCarousel.get("scrollIncrement");
            if (a === "next") {
                var d = photoviewCarousel.get("numItems"), e = photoviewCarousel.get("numVisible"), f = b + e;
                f = f > d - 1 ? d - 1 : f;
                return f + c >= d
            }
            return b - c <= 0
        }, j = function () {
            var a = photoviewCarousel.get("firstVisible"), b = photoviewCarousel.get("selectedItem"), c = photoviewCarousel.get("numItems"), d = a + photoviewCarousel.get("numVisible");
            d = d > c - 1 ? c - 1 : d;
            return d - b < b - a ? "next" : "prev"
        }, n = function () {
            return!directionObj.next
        }, q = function () {
            return!!directionObj.prev || !photoviewCarousel.isBOF()
        }, s = function () {
            return!!directionObj.next || !photoviewCarousel.isEOF()
        }, t = function () {
            g();
            h()
        }, photoviewCarousel = photoviewSource.carousel(b, {itemSize: 60, itemMargin: 5, numVisible: 20, scrollIncrement: 10, itemTemplate: '<a href="javascript:;" suda-uatrack="key=tblog_newimage_feed&value=left_right_nextpage"><img src="about:blank"></a>', CLASSES: {SELECTED_ITEM: "current", PREV_DISABLED: "btn_pic_prevdis", NEXT_DISABLED: "btn_pic_nextdis"}}).on("itemLoad", function (b, c) {
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
            var a = "next", b = directionObj[a];
            if (!b) {
                a = "prev";
                b = directionObj[a];
                b || (a = "")
            }
            !V && a && i(a) && bm(b, function () {
                photoviewCarousel.flush()
            }, a)
        });
        photoviewCarousel.set("prevStateFn", q);
        photoviewCarousel.set("nextStateFn", s);
        photoviewCarousel.set("prevClick", function (a) {
            e("prev")
        });
        photoviewCarousel.set("nextClick", function (a) {
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
        photoviewCarousel.toggle = function (a, b) {
            a ? B(photoviewCarousel) : C(photoviewCarousel, b)
        };
        photoviewCarousel.isEnd = function () {
            if (n()) {
                var a = photoviewCarousel.get("numItems"), b = photoviewCarousel.get("selectedItem");
                return a && photoviewCarousel.isEOF() && b === a - 1
            }
            return!1
        };
        photoviewCarousel.preload = function () {
            f()
        };
        return photoviewCarousel
    }, bb = function (b, c) {
        var f = !0, g = null, h = !1, i = photoOverLayer.getDom("maximum"), j = photoOverLayer.getDom("togglesize"), k = photoOverLayer.getDom("wrapIcon");
        _ = photoOverLayer.getDom("likeBtn");
        var l = function (a) {
            h = a;
            var b = a ? "" : "none";
            m(k, "display", b)
        }, n = function (b) {
            g = b;
            var c = b.width + bd, d = b.height;
            if (f) {
                var e = photoOverLayer.get("limits"), h = photoOverLayer.get("screen"), i = photoOverLayer.get("size"), k = a.winSize(), l = c, m = d, n = e.minWidth, p = k.width - photoOverLayer.getOffset("x");
                c = u(v(c, e.maxWidth), n);
                c = u(c, i[0]);
                c >= n && c > p && (c = p);
                if (c < l) {
                    var q = (l - 290) / m;
                    d = (c - 290) / q
                }
                d = u(d, h[1]);
                photoOverLayer.setSize(c, d)
            } else photoOverLayer.resize();
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
        }, imageDisplay = photoviewSource.imagedisplay(b, c).on("show", function () {
            var b = J && J.get("element");
            if (b) {
                a.addEvent(b, "mouseout", y);
                a.addEvent(b, "mouseover", z);
                imageDisplay.once("hide", function () {
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
        }, 90)), B = photoOverLayer.getDelegate();
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
                var c = a.sizzle("img", photoOverLayer.getDom("loader"))[0];
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
        return imageDisplay
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
        photoOverLayer = photoviewSource.overlayer(E, {limits: {maxWidth: 1314, maxHeight: 710, minWidth: 740, minHeight: 400}, offset: [30, 80], pid: c.pid, mid: c.mid, ref: p, pic_objects: c.pic_objects});
        var e = photoOverLayer.getOuter(), f = photoOverLayer.getDom("count");
        f && f.innerHTML == "(0)" && a.removeNode(f);
        var g = 0;
        photoOverLayer.on("resize", function (a, b) {       // 改变大小
            var c = b.width - bd, d = b.height, domDeskTop = photoOverLayer.getDom("desktop");
            m(domDeskTop, "width", c + "px");
            m(domDeskTop, "height", d + "px");
            var overlayerOuter = photoOverLayer.getOuter();
            overlayerOuter.scrollTop = 0;
            if (g !== c) {
                g = c;
                J.resize()
            }
            I.resize(c, d);
            K.resize(b);
            L && L.resize()
        });
        photoOverLayer.on("hide", function () {             // 隐藏弹层
            bq();
            I.hide();
            _ && (_.style.display = "none");
            q && q.destroy();
            J.toggle(0, !0);
            J.clear();
            bi()
        });
        I = bb(photoOverLayer.getDom("display"), e);
        I.on("navigate", function () {
            q && q.destroy()
        });
        J = ba(photoOverLayer.getDom("carousel"));
        K = photoviewSource.userinfo(photoOverLayer.getDom("userinfo"), {shouldPicSrc: c.picSrc == "photo" ? !0 : !1});
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
            var e = a.sizzle("img", photoOverLayer.getDom("loader"))[0];
            q = a.lib.image.multiimage.showtag({img: e, postdata: {mid: Z, pid: $}, fromLayer: !0})
        });
        photoOverLayer.once("destroy", function () {
            photoOverLayer.hide();
            J.destroy();
            I.destroy();
            K.destroy();
            photoOverLayer = null;
            J = null;
            K = null;
            I = null
        })
    }, bf = function () {
        function f() {
            b || (b = timeout(function () {
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
            L = photoviewSource.recommonedlayer(photoOverLayer.getDom("desktop"));
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
        photoOverLayer.show();
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
            photoOverLayer.destroy();
            photoOverLayer = null
        }
    }, bm = function (a, b, d) {
        if (!V) {
            var e = function () {
                timeout(function () {
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
                photoviewConfTrans.request("list", {onError: g, onFail: g, onComplete: k, onSuccess: function (a) {
                    if (!(a = a.data)) {
                        if (!h) {
                            directionObj = {prev: 0, next: 0};
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
        c !== e && (directionObj.prev = c);
        d !== e && (directionObj.next = d)
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
        directionObj = {prev: 0, next: 0};
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
        photoviewConfTrans.request("bloginfo", {onComplete: k, onError: c, onFail: c, onTimeout: c, onSuccess: b}, {mids: a})
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
            g ? bk(b, c) : uiAlert(o("#L{抱歉，此微博已被删除}。"))
        }, function (b) {
            bv = !1;
            a.lib.dialog.ioError(b.code, b)
        })
    }, hide: function () {
        photoOverLayer && photoOverLayer.hide()
    }, destroy: bl}
});


STK.register("pl.base.source.widgetsource.photoview", function (STK) {
    return function (b) {
        var photoview = STK.lib.photoview.index, d = function (b) {
            var d = b.evt;
            d.type && STK.preventDefault(d);
            photoview.show(b.data, d)
        };
        b.add("widget_photoview", "click", d);
        b.add("images_view_tobig", "click", d);
        var obj = {};
        obj.destroy = function () {
            b.remove("widget_photoview", "click", d);
            b.remove("images_view_tobig", "click", d);
            photoview && photoview.destroy()
        };
        return obj
    }
});


STK.register("pl.base.source.widgets", function (STK) {
    var widgtsource = STK.pl.base.source.widgetsource;
    return function () {
        var callback = STK.delegatedEvent(document.body), temparr = [];
        temparr.push(widgtsource.publish(callback));
        temparr.push(widgtsource.like(callback));
        temparr.push(widgtsource.take(callback));
        temparr.push(widgtsource.forward(callback));
        temparr.push(widgtsource.message(callback));
        temparr.push(widgtsource.photoview(callback));
        temparr.push(widgtsource.follow(callback));
        temparr.push(widgtsource.setGroup(callback));
        temparr.push(widgtsource.group(callback));
        temparr.push(widgtsource.map(callback));
        temparr.push(widgtsource.jumpurl(callback));
        temparr.push(widgtsource.musicplayer(callback));
        $CONFIG && $CONFIG.islogin && $CONFIG.islogin != 2 && temparr.push(widgtsource.usercard(callback));
        var obj = {};
        obj.destroy = function () {
            callback && callback.destroy();
            STK.foreach(temparr, function (obj) {
                try {
                    obj && obj.destroy && obj.destroy()
                } catch (b) {
                }
            })
        };
        return obj
    }
});

