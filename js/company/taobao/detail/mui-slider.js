/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/6/3.
 */


KISSY.add("mui/slider-m/index", function(e, t, n, i) {
    var r = "//gtms01.alicdn.com/tps/i1/T1Sgj2FilaXXb6ROYh-48-48.gif";
    var o = "current";
    var a = window;
    var s = document;
    var f = function() {
        this.initializer.apply(this, arguments)
    };
    f.prototype.__defineGetter__("index", function() {
        return this.flipsnap.currentPoint
    });
    f.prototype.__defineGetter__("size", function() {
        return this.flipsnap._maxPoint
    });
    e.augment(f, t.Target, {initializer: function(t, n) {
        var r = this;
        this.config = n = e.mix({scroller: ".scroller",nav: ".nav",transitionDuration: 350,bindTrigger: false,lazyLoadImg: false,autoSlide: false,hoverStop: true,fallback: {img: "",width: 30,height: 30},timeout: 3e3}, n);
        this.$el = typeof t === "string" ? e.one(t) : t instanceof KISSY.Node ? t : e.one(t);
        this.$scroller = this.$el.one(n.scroller);
        this.$pannels = this.$scroller.children();
        this.$nav = this.$el.one(n.nav);
        if (this.$nav) {
            this.$triggers = this.$nav.children()
        }
        var s = i(this.$scroller.getDOMNode(), n);
        this.flipsnap = s;
        s.element.addEventListener("fspointmove", function(e) {
            var t = r.index;
            if (isNaN(t)) {
                return
            }
            if (r.$triggers) {
                var n = r.$triggers.item(t);
                r.$triggers.filter("." + o).removeClass(o);
                n.addClass(o)
            }
            r.fire("change", {index: t,$pannel: r.$pannels.item(t),originalEvent: e})
        }, false);
        s.element.addEventListener("fspointbeforemove", function(e) {
            r.fire("beforechange", {before: e.beforePoint,index: e.currentPoint,$pannel: r.$pannels.item(e.currentPoint),originalEvent: e})
        }, false);
        if (n.autoSlide) {
            this.play();
            if (n.hoverStop) {
                this.$scroller.on("fstouchstart", function(e) {
                    r.stop()
                }).on("fstouchend", function(e) {
                    r.play()
                })
            }
            var f = function(e, t, n, i) {
                if (!e) {
                    return
                }
                var r = Array.prototype.slice.call(i);
                t = t || 0;
                if (typeof e === "string") {
                    e = n[e]
                }
                var o = function() {
                    e.apply(n, r)
                }, a = setTimeout(o, t);
                return {id: a,cancel: function() {
                    clearTimeout(a)
                }}
            };
            var u = function(e, t, n) {
                t = t || 150;
                if (t === -1) {
                    return function() {
                        e.apply(n || this, arguments)
                    }
                }
                var i = null;
                function r() {
                    r.stop();
                    i = f(e, t, n || this, arguments)
                }
                r.stop = function() {
                    if (i) {
                        i.cancel();
                        i = 0
                    }
                };
                return r
            };
            a.addEventListener("scroll", u(function(e) {
                if (r.isViewPort()) {
                    r.play()
                } else {
                    r.stop()
                }
            }, 200), false)
        }
        if (this.$triggers && n.bindTrigger) {
            this.$triggers.on("tap", function(e) {
                e.preventDefault();
                r.go(r.$triggers.index(this))
            })
        }
        a.addEventListener("orientationchange", function() {
            s.refresh(0)
        });
        if (n.lazyLoadImg !== false) {
            this.lazyLoadImg()
        }
    },play: function() {
        var e = this;
        clearInterval(e.autoSliderTimer);
        e.autoSliderTimer = setInterval(function() {
            e.next()
        }, e.config.timeout)
    },stop: function() {
        clearInterval(this.autoSliderTimer)
    },getPoint: function(e) {
        var t = this.size + 1;
        return (t + e % t) % t
    },go: function(e, t, n) {
        this.flipsnap.moveToPoint.apply(this.flipsnap, [e, n]);
        if (!t) {
            return
        }
        this.on("change", {once: true,fn: t})
    },next: function(e, t) {
        var n = this.getPoint(this.index + 1);
        this.go.apply(this, [n, e, t])
    },previous: function(e, t) {
        var n = this.getPoint(this.index - 1);
        this.go.apply(this, [n, e, t])
    },refresh: function(e) {
        this.flipsnap.refresh.apply(this.flipsnap, arguments)
    },destroy: function() {
        if (this.autoSliderTimer) {
            this.stop()
        }
        this.flipsnap.destroy()
    },lazyLoadImg: function() {
        var e = this, t = [], n = this.config.fallback, i = e.flipsnap.element, r = e.$pannels, o, a;
        o = function(i) {
            var o = e.index, s = "data-src";
            if (t.length !== e.size + 1) {
                if (t.indexOf(o) === -1) {
                    var f = r.item(o).all("img");
                    f.each(function(e) {
                        var t = e.attr(s);
                        if (!t) {
                            return
                        }
                        if (n && n.img) {
                            e.attr("src", n.img).css({width: n.width,height: n.height})
                        }
                        var i = new Image;
                        i.addEventListener("load", function() {
                            e.replaceWith(i);
                            i = null
                        });
                        i.src = t;
                        e.removeAttr(s)
                    });
                    t.push(o)
                }
            } else {
                a()
            }
        };
        a = function() {
            i.removeEventListener("fspointbeforemove", o, false)
        };
        i.addEventListener("fspointbeforemove", o, false);
        o()
    },getOffset: function(e) {
        var t = e;
        var n = 0, i = 0;
        while (t != null && t != s.body) {
            n += t.offsetLeft;
            i += t.offsetTop;
            t = t.offsetParent
        }
        return {left: n,top: i}
    },isViewPort: function() {
        var e = this.$el[0], t = this.getOffset(e);
        return !(t.top + e.clientHeight <= a.scrollY) && !(a.innerWidth + a.scrollX <= t.left) && !(a.innerHeight + a.scrollY <= t.top) && !(t.left + e.clientWidth <= a.scrollX)
    }});
    return f
}, {requires: ["event", "node", "mui/slider-m/flipsnap"]});
KISSY.add("mui/slider-m/flipsnap", function(e) {
    var t = document.createElement("div");
    var n = ["webkit", "moz", "o", "ms"];
    var r = {};
    var i = s.support = {};
    var o = false;
    i.transform3d = f(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
    i.transform = f(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]);
    i.transition = f(["transitionProperty", "WebkitTransitionProperty", "MozTransitionProperty", "OTransitionProperty", "msTransitionProperty"]);
    i.addEventListener = "addEventListener" in window;
    i.mspointer = navigator.msPointerEnabled || navigator.pointerEnabled;
    i.cssAnimation = (i.transform3d || i.transform) && i.transition;
    i.touch = true;
    var a;
    if (navigator.pointerEnabled) {
        a = {start: "pointerdown",move: "pointermove",end: "pointerup"}
    } else if (navigator.msPointerEnabled) {
        a = {start: "MSPointerDown",move: "MSPointerMove",end: "MSPointerUp"}
    } else if ("ontouchstart" in window) {
        a = {start: "touchstart",move: "touchmove",end: "touchend"}
    } else {
        a = {start: "mousedown",move: "mousemove",end: "mouseup"};
        i.touch = false
    }
    if (i.addEventListener) {
        document.addEventListener("gesturestart", function() {
            o = true
        });
        document.addEventListener("gestureend", function() {
            o = false
        })
    }
    function s(e, t) {
        return this instanceof s ? this.init(e, t) : new s(e, t)
    }
    s.prototype.init = function(e, t) {
        var n = this;
        n.element = e;
        if (typeof e === "string") {
            n.element = document.querySelector(e)
        }
        if (!n.element) {
            throw new Error("element not found")
        }
        t = t || {};
        n.distance = t.distance;
        n.maxPoint = t.maxPoint;
        n.disableTouch = t.disableTouch === undefined ? false : t.disableTouch;
        n.disable3d = t.disable3d === undefined ? false : t.disable3d;
        n.transitionDuration = t.transitionDuration === undefined ? "350ms" : t.transitionDuration + "ms";
        n.currentPoint = 0;
        n.currentX = 0;
        n.animation = false;
        n.use3d = i.transform3d;
        if (n.disable3d === true) {
            n.use3d = false
        }
        if (i.cssAnimation) {
            n._setStyle({transitionProperty: l("transform"),transitionTimingFunction: "cubic-bezier(0,0,0.25,1)",transitionDuration: "0ms",transform: n._getTranslate(0)})
        } else {
            n._setStyle({position: "relative",left: "0px"})
        }
        if (i.mspointer) {
            n.element.style["msTouchAction"] = "pan-y"
        }
        n.refresh();
        n.element.addEventListener(a.start, n, false);
        return n
    };
    s.prototype.handleEvent = function(e) {
        var t = this;
        switch (e.type) {
            case a.start:
                t._touchStart(e);
                break;
            case a.move:
                t._touchMove(e);
                break;
            case a.end:
                t._touchEnd(e);
                break
        }
    };
    s.prototype.refresh = function(e, t) {
        var n = this;
        n._maxPoint = n.maxPoint === undefined ? function() {
            var e = n.element.childNodes, t = -1, r = 0, i = e.length, o;
            for (; r < i; r++) {
                o = e[r];
                if (o.nodeType === 1) {
                    t++
                }
            }
            return t
        }() : n.maxPoint;
        if (n.distance === undefined) {
            if (n._maxPoint < 0) {
                n._distance = 0
            } else {
                n._distance = t || n.element.scrollWidth / (n._maxPoint + 1)
            }
        } else {
            n._distance = n.distance
        }
        n._maxX = -n._distance * n._maxPoint;
        n.moveToPoint(undefined, e)
    };
    s.prototype.hasNext = function() {
        var e = this;
        return e.currentPoint < e._maxPoint
    };
    s.prototype.hasPrev = function() {
        var e = this;
        return e.currentPoint > 0
    };
    s.prototype.toNext = function(e) {
        var t = this;
        if (!t.hasNext()) {
            return
        }
        t.moveToPoint(t.currentPoint + 1, e)
    };
    s.prototype.toPrev = function(e) {
        var t = this;
        if (!t.hasPrev()) {
            return
        }
        t.moveToPoint(t.currentPoint - 1, e)
    };
    s.prototype.moveToPoint = function(e, t, n) {
        var r = this;
        t = t === undefined ? r.transitionDuration : t + "ms";
        var o = r.currentPoint;
        if (e === undefined) {
            e = r.currentPoint
        }
        if (e < 0) {
            r.currentPoint = 0
        } else if (e > r._maxPoint) {
            r.currentPoint = r._maxPoint
        } else {
            r.currentPoint = parseInt(e, 10)
        }
        if (i.cssAnimation) {
            r._setStyle({transitionDuration: t})
        } else {
            r.animation = true
        }
        if (o !== r.currentPoint && !n) {
            r._triggerEvent("fspointbeforemove", true, false, {beforePoint: o,currentPoint: r.currentPoint})
        }
        r._setX(-r.currentPoint * r._distance, t);
        if (o !== r.currentPoint && !n) {
            if ("webkitTransition" in document.body.style) {
                var a;
                var s = function() {
                    clearTimeout(a);
                    a = null;
                    r._triggerEvent("fsmoveend", true, false);
                    r._triggerEvent("fspointmove", true, false)
                };
                r.element.addEventListener("webkitTransitionEnd", function() {
                    if (a) {
                        s();
                        this.removeEventListener("webkitTransitionEnd", arguments.callee)
                    }
                });
                a = setTimeout(function() {
                    s()
                }, r.transitionDuration + 10)
            } else {
                r._triggerEvent("fsmoveend", true, false);
                r._triggerEvent("fspointmove", true, false)
            }
        }
    };
    s.prototype._setX = function(e, t) {
        var n = this;
        n.currentX = e;
        if (i.cssAnimation) {
            n.element.style[r.transform] = n._getTranslate(e)
        } else {
            if (n.animation) {
                n._animate(e, t || n.transitionDuration)
            } else {
                n.element.style.left = e + "px"
            }
        }
    };
    s.prototype._touchStart = function(e) {
        var t = this;
        if (t.disableTouch || o) {
            return
        }
        t.element.addEventListener(a.move, t, false);
        document.addEventListener(a.end, t, false);
        var n = e.target.tagName;
        if (!i.touch && n !== "SELECT" && n !== "INPUT" && n !== "TEXTAREA") {
            e.preventDefault()
        }
        if (i.cssAnimation) {
            t._setStyle({transitionDuration: "0ms"})
        } else {
            t.animation = false
        }
        t.scrolling = true;
        t.moveReady = false;
        t.startPageX = u(e, "pageX");
        t.startPageY = u(e, "pageY");
        t.basePageX = t.startPageX;
        t.directionX = 0;
        t.startTime = e.timeStamp;
        t._triggerEvent("fstouchstart", true, false)
    };
    s.prototype._touchMove = function(e) {
        var t = this;
        if (!t.scrolling || o) {
            return
        }
        var n = u(e, "pageX"), r = u(e, "pageY"), i, a, s = 5;
        var f = function(e, t, n, r) {
            var i = Math.abs(e - n);
            var o = Math.abs(t - r);
            var a = Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2));
            return {x: i,y: o,z: a}
        };
        var c = function(e) {
            var t = e.y / e.z;
            var n = Math.acos(t);
            var r = 180 / (Math.PI / n);
            return r
        };
        if (t.moveReady) {
            e.preventDefault();
            i = n - t.basePageX;
            a = t.currentX + i;
            if (a >= 0 || a < t._maxX) {
                a = Math.round(t.currentX + i / 3)
            }
            t.directionX = i === 0 ? t.directionX : i > 0 ? -1 : 1;
            var l = !t._triggerEvent("fstouchmove", true, true, {delta: i,direction: t.directionX});
            if (l) {
                t._touchAfter({moved: false,originalPoint: t.currentPoint,newPoint: t.currentPoint,cancelled: true})
            } else {
                t._setX(a)
            }
        } else {
            var d = f(t.startPageX, t.startPageY, n, r);
            if (d.z > s) {
                if (c(d) > 55) {
                    t.moveReady = true;
                    e.preventDefault()
                } else {
                    t.scrolling = false
                }
            }
        }
        t.basePageX = n
    };
    s.prototype._touchEnd = function(e) {
        var t = this;
        t.element.removeEventListener(a.move, t, false);
        document.removeEventListener(a.end, t, false);
        if (!t.scrolling) {
            return
        }
        var n = -t.currentX / t._distance;
        n = t.directionX > 0 ? Math.ceil(n) : t.directionX < 0 ? Math.floor(n) : Math.round(n);
        if (n < 0) {
            n = 0
        } else if (n > t._maxPoint) {
            n = t._maxPoint
        }
        t._touchAfter({moved: n !== t.currentPoint,originalPoint: t.currentPoint,newPoint: n,cancelled: false});
        t.moveToPoint(n)
    };
    s.prototype._touchAfter = function(e) {
        var t = this;
        t.scrolling = false;
        t.moveReady = false;
        t._triggerEvent("fstouchend", true, false, e)
    };
    s.prototype._setStyle = function(e) {
        var t = this;
        var n = t.element.style;
        for (var r in e) {
            c(n, r, e[r])
        }
    };
    s.prototype._animate = function(e, t) {
        var n = this;
        var r = n.element;
        var i = +new Date;
        var o = parseInt(r.style.left, 10);
        var a = e;
        var s = parseInt(t, 10);
        var u = function(e, t) {
            return -(e /= t) * (e - 2)
        };
        var f = setInterval(function() {
            var e = new Date - i;
            var t, n;
            if (e > s) {
                clearInterval(f);
                n = a
            } else {
                t = u(e, s);
                n = t * (a - o) + o
            }
            r.style.left = n + "px"
        }, 10)
    };
    s.prototype.destroy = function() {
        this.element.removeEventListener(a.start, this, false)
    };
    s.prototype._getTranslate = function(e) {
        var t = this;
        return t.use3d ? "translate3d(" + e + "px, 0, 0)" : "translate(" + e + "px, 0)"
    };
    s.prototype._triggerEvent = function(e, t, n, r) {
        var i = this;
        var o = document.createEvent("Event");
        o.initEvent(e, t, n);
        if (r) {
            for (var a in r) {
                if (r.hasOwnProperty(a)) {
                    o[a] = r[a]
                }
            }
        }
        return i.element.dispatchEvent(o)
    };
    function u(e, t) {
        return e.changedTouches ? e.changedTouches[0][t] : e[t]
    }
    function f(e) {
        return v(e, function(e) {
            return t.style[e] !== undefined
        })
    }
    function c(e, t, i) {
        var o = r[t];
        if (o) {
            e[o] = i
        } else if (e[t] !== undefined) {
            r[t] = t;
            e[t] = i
        } else {
            v(n, function(n) {
                var o = d(n) + d(t);
                if (e[o] !== undefined) {
                    r[t] = o;
                    e[o] = i;
                    return true
                }
            })
        }
    }
    function l(e) {
        if (t.style[e] !== undefined) {
            return e
        } else {
            var r;
            v(n, function(n) {
                var i = d(n) + d(e);
                if (t.style[i] !== undefined) {
                    r = "-" + n + "-" + e;
                    return true
                }
            });
            return r
        }
    }
    function d(e) {
        return e.charAt(0).toUpperCase() + e.substr(1)
    }
    function v(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            if (t(e[n], n)) {
                return true
            }
        }
        return false
    }
    window.Flipsnap = s;
    return s
}, {});
