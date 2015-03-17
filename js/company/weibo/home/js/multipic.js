/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/9.
 */

STK.register("lib.photoview.source.carousel", function (a) {
    function V() {
        var _this = this, b = _this.get("numItems");
        if (!!b && !_this.isAnimating()) {
            var c = _this._carouselEl, d = _this.get("firstVisible"), e = _this.get("numVisible"), f = d + e - 1;
            f = f > b - 1 ? b - 1 : f;
            var g = _this._items, h = g[d].el, i = g[f].el, j;
            if (i)while (j = p(i))c.removeChild(j);
            if (h)while (j = o(h))c.removeChild(j);
            c.style.left = "0px";
            _this.flush()
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
            i = Max(m - h, 0);
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
                    g - r < h && (r = Max(g - h, 0));
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

    function L(el, type, numType) {
        function g(b, c) {
            var d = parseFloat(a.getStyle(b, c));
            return isNaN(d) ? 0 : d
        }

        function f(b, c) {
            var d = parseInt(a.getStyle(b, c), 10);
            return isNaN(d) ? 0 : d
        }

        var result;
        if (!el)return 0;
        typeof numType == "undefined" && (numType = "int");
        switch (type) {
            case"height":
                result = el.offsetHeight;
                result > 0 ? result += f(el, "marginTop") + f(el, "marginBottom") : result = g(el, "height") + f(el, "marginTop") + f(el, "marginBottom") + f(el, "borderTopWidth") + f(el, "borderBottomWidth") + f(el, "paddingTop") + f(el, "paddingBottom");
                break;
            case"width":
                result = el.offsetWidth;
                result > 0 ? result += f(el, "marginLeft") + f(el, "marginRight") : result = g(el, "width") + f(el, "marginLeft") + f(el, "marginRight") + f(el, "borderLeftWidth") + f(el, "borderRightWidth") + f(el, "paddingLeft") + f(el, "paddingRight");
                break;
            default:
                numType === "int" ? result = f(el, type) : numType === "float" ? result = g(el, type) : result = a.getStyle(el, type)
        }
        return result
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
        var c = a, d = c.length >>> 0, result = Array(d);
        for (var f = 0; f < d; f++)f in c && (result[f] = b.call(null, c[f], f, c));
        return result
    }

    function Min(a, b) {
        return a < b ? a : b
    }

    function Max(a, b) {
        return a > b ? a : b
    }

    function isFunction(a) {
        return typeof a == "function"
    }

    function isNumber(a) {
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
                b = Min(a + g - 1, i - 1);
                if (a + g > i - 1) {
                    b = i - 1;
                    a = Max(b - g, 0)
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
            j - b < k && (b = Max(j - k, 0));
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

    var whiteList = a.lib.feed.imageLikeWhiteList(), timeout = window.setTimeout, photoviewSource = a.lib.photoview.source, e = photoviewSource.channel, photoviewConfTrans = a.conf.trans.photoview, photoviewUtil = photoviewSource.util, uiAlert = a.ui.alert, i = a.lib.kit.extra.imageURL, preventDef = a.preventDefault, k = a.funcEmpty, l = a.tween, m = a.setStyle, n = a.addClassName, o = a.lib.kit.extra.language, p, q, r = photoviewUtil.throttle, s = photoviewUtil.debounce, mix = photoviewUtil.mix, u = Math.max, v = Math.min, w = function (a, b) {
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
        '<div node-type="scroller" class="scroller"><div node-type="inner" class="inner clearfix"><div node-type="userinfo" class="info_box W_fr S_bg2"></div><div node-type="desktop" class="pic_box"><div node-type="display" class="pic_show_box"><div node-type="loader" class="pic"></div><div node-type="wrapIcon" class="pos_icon">' + (whiteList ? '<div class="pos_margin" node-type="likeBtn" style="display:none;" action-type="image_like" action-data="mid=${data.mid}&photo_id=${data.pid}&is_liked=${data.is_liked}&count=${data.count}&object_id=${data.object_id}&ref=${data.ref}"><#if (data.is_liked)><a href="javascript:" class="W_btn_alpha" title="#L{取消赞}"><i class="icon_praised"></i><span node-type="count">(${data.count})</span></a><#else><a href="javascript:" class="W_btn_alpha" title="#L{赞}"><i class="icon_praise"></i><span node-type="count">(${data.count})</span></a></#if></div>' : "") + '<a suda-data="key=big_pic_cover&value=magnify_pic" node-type="togglesize" action-type="togglesize" href="javascript:" class="W_btn_alpha"><i class="icon_narrow"></i><span>#L{适应页面}</span></a>' + '<a suda-data="key=big_pic_cover&value=check_pic" node-type="maximum" action-type="maximum" href="javascript:" class="W_btn_alpha" title="#L{查看原图}" suda-uatrack="key=tblog_newimage_feed&value=view_original"><i class="icon_maximum"></i><span>#L{查看原图}</span></a>' + "</div>" + "</div>" + '<div node-type="carousel" class="pic_choose_box">' + '<div node-type="prev" class="arrow_boxL"><a href="javascript:;" class="arrow_left_small" title="#L{上一页}"><em class="ico_pic_prev">&lt;</em></em></a></div>' + '<div node-type="clip" class="stage_box"><ul node-type="list" class="choose_box clearfix"></ul></div>' + '<div node-type="next" class="arrow_boxR"><a href="javascript:;" class="arrow_right_small" title="#L{下一页}"><em class="ico_pic_next">&gt;</em></em></a></div>' + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</#et>", F = !1, G = !1, photoOverLayer, I, J, K, recommonedlayer = null, directionObj, N, O, P, Q, R, S, T, U, V = !1, W, X, Y, Z, $, _, ba = function (b) {
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
        var v = !1, w = !1, conf = {duration: 300, animationType: "easeoutcubic", end: function () {
            w = !1
        }}, B = r(function (a) {
            if (!w && !!v) {
                var b = a.get("element"), c = x(b, "height");
                v = !1;
                w = !0;
                var d = function () {
                    m(b, "bottom", 0 - c + "px");
                    l(b, conf).play({bottom: 0, opacity: 1}).destroy()
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
                        l(c, conf).play({bottom: 0 - d, opacity: 0}).destroy()
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
        }, 90)), photoOverLayerDelegate = photoOverLayer.getDelegate();
        photoOverLayerDelegate.add("maximum", "click", function (a) {
            var b = mix({}, U), c = C("http://photo.weibo.com/{uid}/wbphotos/large/mid/{mid}/pid/{pid}", b);
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
        photoOverLayerDelegate.add("togglesize", "click", function () {
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
        photoOverLayerDelegate.add("image_like", "click", E);
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
            recommonedlayer && recommonedlayer.resize()
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
        function start() {
            timoutObj || (timoutObj = timeout(function () {
                J.toggle(0);
                timoutObj = null
            }, 3e3))
        }

        function show() {
            if (G) {
                stop();
                J.toggle(1);
                !a.lib.kit.touch.cantouch && start()
            }
        }

        function stop() {
            if (timoutObj) {
                clearTimeout(timoutObj);
                timoutObj = null
            }
        }

        var timoutObj = null, wrapShow = function () {
            show()
        };
        mix(wrapShow, {show: show, start: start, stop: stop});
        return wrapShow
    }(), bg = function () {
        return!!U.multiuser
    }, bh = function () {
        if (!recommonedlayer) {
            recommonedlayer = photoviewSource.recommonedlayer(photoOverLayer.getDom("desktop"));
            recommonedlayer.on("refresh", function () {
                J.setSelectedItem(0)
            })
        }
        recommonedlayer.show({uid: U.uid})
    }, bi = function () {
        recommonedlayer && recommonedlayer.hide()
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
        a = mix({mid: "", pid: "", type: 0, uid: $CONFIG.uid, page_id: $CONFIG.page_id, pic_like_src: null}, a);
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
            mix(U, a);
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
        mix(N, a.mblog_list);
        mix(O, a.comment_list);
        mix(P, a.mblog_like_list);
        mix(Q, a.repost_list)
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

