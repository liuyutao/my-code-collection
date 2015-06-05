!function (e) {
    rocket.pageview.image = rocket.pageview.extend({el: "#image_view", events: {click: "onclick"}, init: function (t) {
        var i = this;
        i.setup(new rocket.subview.image_header(e.extend({}, t), i)), i.appendTo(new rocket.subview.image_toolbar(e.extend({}, i.options), i), i.$("#image_toolbar")), i.setup(new rocket.subview.image_content(e.extend({}, t), i))
    }}), webappandroid.helper.addCSS("#image_view{display:none;position:absolute;top:0;left:0;bottom:0;right:0;background-color:#161616}\n#image_carousel{overflow:hidden;-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden}\n.image-carousel-item{position:relative;display:table;width:100%;background-color:#161616}\n.image-carousel-item-mark{display:none;position:absolute;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.6)}\n.hideabs .image-carousel-item-abs{display:none}\n.image-carousel-item-abs{color:#fff;line-height:1.5em;overflow:hidden;position:absolute;bottom:0;left:0;height:98px;width:100%}\n.image-carousel-item-abs p{padding:0 10px}\n.abs-linear{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),color-stop(0.3,rgba(0,0,0,.4)),to(rgba(0,0,0,.6)))}\n.image-carousel-item img{-webkit-transform:translate3d(0px,0,0);max-width:100%}\n.image-carousel-item span{display:table-cell;text-align:center;vertical-align:middle}\n#image_list{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#161616}\n#image_list div{}\n#image_carousel,#image_list .c-array,#image_carousel>div,#image_carousel>div>div,.image-view-subpage,#image_carousel .image-carousel-item{height:100%;width:100%}\n#image_view header{-webkit-transition:top;-webkit-transition-duration:250ms}\n.c-array{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABGCAMAAADsM9QKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANVQTFRFfH1//Pz8fn6A5OXl/v7+xcbGgYGD8fHx9vb2jY6Qjo+Qg4SG8/Pz0NHRvb6+lJWWkZKU+fn54+PkuLi59PT03t7f7Ozth4iJ+vr61dXW29vcgoOEsbGy5ubn4eLiwsLDqKipxMTFoKChv7/AiouM2dra4ODgmJmaz8/Pm5ydnZ2eu7u8pqaoo6SlrK2uubm6iYqL6+vrjIyOlpeYysrL5+jo7u7uq6usf3+BzMzNyMnJrq6vtra36enqtLW2s7O07+/w1tfXzc3O09PUent9////////G4wivgAAAEd0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////wDHnFZvAAABnElEQVR42oTW12LCMAwFUCcBwt7Q0r13oYPu3eby/59U2wqJAdnOCw8HidiWJcSMfwCoD2FD6C8Ii9ajunLBazFMwqKVd0SSJCICBKdBNVHProUvtSYNjoHtUGs7YBgotLSKLvdqwCGlfufWDdxS6so6wzL1KQUP9K6ucJF0CwwDjyWtRx3mSGTEBQUfky7zC+kTGAbiTa1r5VRNlhHXFPw310VukF6BYaBc01qrZ5qzjNij4LNcTf4hPQDDMvWN1tK3oXOWEW8U/Gpqzhuk52AY6NxpfR4uKLGM+KTg/UWd84nQel9gOKvc8GFJU55Q6uayKgYikVXuCsvUaeVGK6q5Sal7qzoTQD+t3IDnAQX/MmpEV9no/LcnFg7ajjfP193i1q2859g1lb5Ce/7B7bnnxNR5fznOO6+WElctvlpT6cfkU46NOo+ZOlc+ctwS3x2T3nfcUN/9NrrDiGNPb1E+pfAx+Mbl7GvSh46u6Oupvo7s6efGNOhZ2DlL1CQS9knkm2O+KeiZob4JrDzuxrb57Zv+vv8O2fMvwAAjLBUVPiy4PQAAAABJRU5ErkJggg==);background:url(/static/news/webapp/webappandroid/img/image_arrow_80ac1dd.png);background-repeat:no-repeat;background-size:12px 38px;-webkit-background-size:12px 38px;background-position:center center}\n#image_view .image-left-array,#image_view .image-right-array{position:absolute;top:0;bottom:0;width:42px;-webkit-transition-duration:250ms}\n.image-left-array{-webkit-transition:left;left:0}\n.image-right-array{-webkit-transition:right;right:0;-webkit-transform:rotate(180deg)}\n.image-toolbar{position:absolute;top:44px;left:0;z-index:2;height:38px;line-height:38px;color:#fff;font-size:16px;background-color:#161616;width:100%}\n.image-toolbar span{display:inline-block;line-height:38px;margin:0 15px 0 10px}\n.image-toolbar .image-toolbar-up,.image-toolbar .image-toolbar-comment{background:url(/static/news/webapp/webappandroid/img/bg-image_36c5a7b.png) no-repeat;background-size:50px 150px;padding-left:22px}\n.image-toolbar .image-toolbar-up{background-position:-6px 3px}\n.image-toolbar .image-toolbar-up.voted{background-position:-6px -92px;color:#e02f2f}\n.image-toolbar .image-toolbar-comment{background-position:-6px -34px}\n.image-toolbar-up{position:relative}\n.image-toolbar-up b{display:none;position:absolute;top:0;left:0;height:100%;width:24px;text-align:left;color:#f13232}"), webappandroid.helper.addHTML('<div id="image_view">\n    <header>\n        <div class="ui-new-toolbar">\n            <div class="ui-new-toolbar-l">\n                <div class="ui-new-toolbar-btn btn-back"></div>\n            </div>\n            <span class="ui-new-toolbar-title"></span>\n            <div class="ui-new-toolbar-r">\n                <div data-href="" class="ui-new-toolbar-btn btn-ori">原图</div>\n                <!--div data-href="http://m.baidu.com/?from=1000376a" class="ui-new-toolbar-btn btn-baidu"></div-->\n            </div>\n        </div>\n    </header>\n    <div id="image_toolbar"></div>\n    \n    <div id="image_list">\n        \n    </div>\n</div>\n\n')
}(Zepto), !function (e) {
    rocket.subpageview.image_subpage = rocket.subpageview.extend({className: "image-view-subpage", events: {"click .image-left-array": "prev", "click .image-right-array": "next", touchmove: "stopDefaultMove"}, tpl: '<div class="image-carousel-item">\n    <span><img src="<%=item.data.big.url || item.data.big%>" /></span>\n    <% if(!!item.data.text){ %>\n    <div class="image-carousel-item-mark"> </div>\n    <div class="image-carousel-item-abs abs-linear">\n    	<p><%= item.data.text %></p>\n    </div>  \n    <% } %>\n</div>', init: function (e) {
        var t = this;
        /related:/i.test(e.type) && (e.type = e.type.replace(/related:/i, ""), t.isRelatedImage = !0), t.type = e.type, t.id = t.getID(e), t.index = e.index, t.newsType = webappandroid.subscribe.getNewsType(e.type), t.showLoading(t.$el), t.imageheaderShown = !0
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("imagedataready", e.onimagedataready, e), t.on("imagebeforechange", e.onimagebeforechange, e)
    }, unregisterEvent: function () {
        var e = this, t = e.ec;
        t.off("imagedataready", e.onimagedataready, e), t.off("imagebeforechange", e.onimagebeforechange, e), e.$el.find("#image_carousel").off(), e.$el.off(), e.carousel && e.carousel.destory(!0)
    }, getID: function (e) {
        return rocket.model.article.getID(e)
    }, stopDefaultMove: function (e) {
        e.preventDefault()
    }, setHeight: function () {
        window.scroll(0, 0)
    }, onorientationchange: function () {
        var e = this;
        setTimeout(function () {
            e.setHeight()
        }, 100)
    }, onimagebeforechange: function () {
        var e = this, t = {transition: "none", "-webkit-transition": "none", transform: "none", "-webkit-transform": "none"};
        e.$el && e.$el.find("img").css(t), window.setTimeout(function () {
            e.$el && e.$el.find("img").imgviewer({container: "#image_carousel", onTap: function () {
                e.toggle()
            }, onPanLeftEnd: function () {
                e.prev()
            }, onPanRightEnd: function () {
                e.next()
            }, maxScale: 10, minScale: 1.2, increment: .5})
        }, 30)
    }, render: function (t) {
        var i, n, a = this, o = !1;
        if (!a.isRendered) {
            a.isRendered = !0, i = e('<div class="c-array image-left-array"></div><div class="c-array image-right-array"></div>'), n = e('<div id="image_carousel"></div>'), a.$el.append(n), a.$el.append(i), !t || !t.length, 1 === t.length ? i.hide() : i.show();
            var r = _.map(t, function (e) {
                return _.template(a.tpl, {item: e})
            });
            a.pages = r, a.carousel = a.$el.find("#image_carousel").touchCarousel({pages: r, isFollow: !1, touchEnabled: !1, curIndex: parseInt(a.index), lazyLoad: !0, onLast: function () {
                a.currentIndex == a.pages.length - 1 && "image" == a.newsType && a.goAlbum()
            }, beforechange: function () {
                a.ec.trigger("imagebeforechange")
            }, afterchange: function (e) {
                var i = t[e].data;
                a.currentIndex = e, a.ec.trigger("imagechange", {url: i.original.url || i.original, currentIndex: e + 1, total: r.length}), Backbone.history.navigate(["#image", encodeURIComponent(a.type), a.id, e].join("/"), {trigger: !1, replace: !0}), o && _ss({wa_type: "image", act: "switch", act_data_1: a.newsType}), a.touch = {}, o = !0, a.$(".image-carousel-item-abs").height(98)
            }}), a.setHeight(), a.enableAbsMove(), a.hideLoading(500)
        }
    }, enableAbsMove: function () {
        var e = this, t = (e.ec, ".image-carousel-item-abs"), i = e.$(t), n = i.height();
        e.isMarkShow = !1, e.$el.touch({selector: t, limitRange: {getMin: function () {
            return-(e.$el.height() - 82 - n)
        }, max: 0}, onTouchStart: function () {
            e.ec.trigger("toggletoolbar")
        }, onTouchMove: function (i) {
            var n = e.$(t);
            -15 >= i && !e.isMarkShow && (e.isMarkShow = !0, e.$(".c-array").hide(), e.$(".image-carousel-item-mark").show(), n.removeClass("abs-linear")), n.height(98 + -i)
        }, onTouchEnd: function (t) {
            t >= -15 && e.absReset(), _ss({act: e.ec.action, act_data_1: e.newsType, act_data_2: "onTouchEnd"})
        }})
    }, enableImageMove: function () {
        var t = this, i = t.$el, n = 0, a = 0, o = 0, r = 0, s = {}, c = ".image-carousel-item img";
        i.on("touchstart", c, function (t) {
            if (t.touches && "IMG" == t.srcElement.tagName) {
                var i = e(t.srcElement), r = i.height();
                n = o = t.touches[0].clientX, a = _lastY = t.touches[0].clientY, s.min = -r / 3, s.max = r / 3
            }
        }).on("touchmove", function (t) {
            if (t.touches && "IMG" == t.srcElement.tagName) {
                var i, c = t.changedTouches[0].clientX, l = t.changedTouches[0].clientY, g = l - _lastY, d = webappandroid.helper.getAngle(n, a, c, l);
                d > 45 || (o = c, _lastY = l, i = r + g, i >= s.min && i <= s.max && (r += g, e(t.srcElement).css({"-webkit-transform": "translateY(" + r + "px)"})), t.preventDefault())
            }
        }).on("touchend", function (e) {
            !e.touches || "IMG" != e.srcElement.tagName
        })
    }, onimagedataready: function (e) {
        this.render(e.data)
    }, fetchdata: function (t) {
        var i, n, a, o = this, r = o.ec;
        if (o.isRelatedImage)if (i = new rocket.model.article_info(null, e.extend({}, t)), a = i.getFromCache(e.extend({}, t))) {
            var s = ((a || {}).data || {}).related_image || [];
            o.onimagedataready({data: s})
        } else i.fetch({success: function (e) {
            var t = e.toJSON(), i = ((t || {}).data || {}).related_image || [];
            o.onimagedataready({data: i})
        }});
        n = rocket.model.article.getInstance(o.id), n ? (document.title = n.formatData().title, webappandroid.helper.hackWeixinForIOS(), o.isRelatedImage || (o.onimagedataready({data: n.getImages()}), r.trigger("countdataready", {data: n.getCount()}))) : (n = new rocket.model.article(null, e.extend({}, t)), n.fetch({success: function () {
            o.zTitle = n.formatData().title, document.title = o.zTitle, webappandroid.helper.hackWeixinForIOS(), o.isRelatedImage || (o.onimagedataready({data: n.getImages()}), r.trigger("countdataready", {data: n.getCount()}))
        }}))
    }, onsubpagebeforechange: function (e) {
        var t = this, i = (t.ec, e.from, e.to), n = e.params, a = t.getFeatureString(n);
        webappandroid.subscribe.getNewsType(n.type), i == t.ec && a == t.featureString && (t.type = n.type, t.index = n.index, t.id = t.getID(n), t.newsType = webappandroid.subscribe.getNewsType(n.type), t.show(), t.isSlider = !1, t.fetchdata(n))
    }, prev: function (e) {
        var t = this;
        e && e.stopPropagation(), this.carousel.curIndex <= 0 && t.toggle(!0), this.carousel.toLeft(), _ss({act: "image_prev", act_data_1: t.newsType, act_data_2: "prev"}), t.$el.touch("reset")
    }, next: function (e) {
        var t = this;
        e && e.stopPropagation(), this.carousel.curIndex >= this.carousel.maxIndex && t.toggle(!0), this.carousel.toRight(), webappandroid.subscribe.getNewsType(t.type), _ss({act: "image_next", act_data_1: t.newsType, act_data_2: "next"}), t.$el.touch("reset"), t.isSlider = !0
    }, toggle: function (e) {
        var t = this, i = !0;
        e && e == t.imageheaderShown && (i = !1), i && (t.$el.toggleClass("hideabs"), t.toggleHeader(), t.imageheaderShown = !t.imageheaderShown)
    }, toggleHeader: function () {
        var e = this;
        e.ec.trigger("toggleheader"), e.ec.trigger("toggletoolbar")
    }, absReset: function () {
        var e = this, t = e.$(".image-carousel-item-abs");
        t.css({"-webkit-transform": "translateY(0px)"}).addClass("abs-linear"), e.$(".image-carousel-item-mark").hide(), e.imageheaderShown ? e.$(".c-array").show() : e.$(".c-array").hide(), e.$el.touch("reset"), t.height(98), e.isMarkShow = !1
    }, goAlbum: function () {
        var e = this;
        e.navigate(["#album", encodeURIComponent(e.type), e.id].join("/"))
    }})
}(Zepto), !function (e) {
    rocket.subview.image_content = rocket.subview.extend({el: "#image_list", init: function (t) {
        var i, n, a = this;
        n = a.getSubpageManager({subpageClass: rocket.subpageview.image_subpage, maxSubpages: 2, subpageTransition: "simple"}), i = new rocket.subpageview.image_subpage(e.extend({}, t), a), a.append(i), n.registerSubpage(a.featureString, i)
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("pagebeforechange", e.onpagebeforechange, e)
    }, unregisterEvents: function () {
        var e = this, t = e.ec;
        t.on("pagebeforechange", e.onpagebeforechange, e)
    }, onpagebeforechange: function (e) {
        var t = this, i = e.to;
        e.params, i == t.ec && (document.title = "百度新闻", t.show())
    }})
}(Zepto), !function (e) {
    rocket.subview.image_header = rocket.subview.extend({el: "#image_view > header", events: {"click .btn-back": "onBackButtonClick", "click .btn-baidu": "onGoBaiduButtonClick", "click .btn-ori": "onOriginalButtonClick"}, init: function (e) {
        var t = this;
        t.isShow = !0, t.$title = t.$(".ui-new-toolbar-title"), t.$original = t.$(".btn-ori"), t.newsType = webappandroid.subscribe.getNewsType(e.type), t.show()
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("imagechange", e.onimagechange, e), t.on("toggleheader", e.ontoggleheader, e)
    }, onimagechange: function (e) {
        var t = this;
        t.$original.data("href", e.url), t.$title.html([e.currentIndex, e.total].join(" / "))
    }, onBackButtonClick: function () {
        var e = this, t = webappandroid.levelnav.getUpLevel(e.ec.action);
        e.navigate(t ? t.route : "index")
    }, onGoBaiduButtonClick: function (t) {
        return t.preventDefault(), _ss({act: "gobaidu"}), setTimeout(function () {
            location.href = e(t.target).data("href")
        }, 300), !1
    }, onOriginalButtonClick: function (t) {
        var i = this, n = e(t.currentTarget), a = n.data("href");
        _ss({act: i.ec.action, act_data_1: i.newsType, act_data_2: "original_image"}), window.open(a)
    }, ontoggleheader: function () {
        var e = this;
        e.isShow ? (e.$el.css("top", -42), e.isShow = !1) : (e.$el.css("top", 0), e.isShow = !0)
    }})
}(Zepto), !function (e) {
    rocket.subview.image_toolbar = rocket.subview.extend({className: "image-toolbar", tpl: '<span class="image-toolbar-comment"><%= count.comment || 0 %></span>\n<span class="image-toolbar-up"><em><%= count.up || 0 %></em><b>+1</b></span>\n', events: {"click .image-toolbar-comment": "oncommentclick", "click .image-toolbar-up": "onupboxclick"}, init: function (t) {
        var i = this;
        i.type = t.type, i.newsType = webappandroid.subscribe.getNewsType(t.type), i.nid = t.nid || 0, i.model = new rocket.model.article_support({}, e.extend({}, t)), i.isShow = !0, "image" == i.newsType ? i.show() : i.hide()
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("pagebeforechange", e.onpagebeforechange, e), t.on("pageafterchange", e.onpageafterchange, e), t.on("countdataready", e.oncountdataready, e), t.on("toggletoolbar", e.ontoggletoolbar, e)
    }, getID: function (e) {
        return rocket.model.article.getID(e)
    }, render: function (e) {
        var t = this;
        t.$el.html(_.template(t.tpl, {count: e.data}))
    }, oncommentclick: function () {
        var e = this, t = ["#comment", encodeURIComponent(e.type), e.nid].join("/");
        _ss({act: e.ec.action, act_data_1: e.newsType, act_data_2: "oncommentclick"}), e.navigate(t)
    }, oncountdataready: function (e) {
        var t = this;
        "image" == t.newsType && t.render(e)
    }, onpagebeforechange: function (e) {
        var t = this, i = e.to, n = e.from, a = e.params;
        t.newsType = webappandroid.subscribe.getNewsType(a.type), i == t.ec && (t.uped = !1, t.nid = a.nid, n && n.action && ("page" == n.action ? t.hide() : t.show()))
    }, onpageafterchange: function (e) {
        var t = this, i = e.to;
        e.params, i != t.ec && t.carousel && t.carousel.destory(!0)
    }, doVote: function (e) {
        var t = e.find("em"), i = t.html();
        t.html(i.replace(/\d+/g, function (e) {
            return e - 0 + 1
        }));
        var n = setTimeout(function () {
            e.removeClass("pressed"), e.find("b").show().css({top: 0, opacity: "0"}).animate({top: "-25px", opacity: 1}, 300, "ease-out"), e.addClass("voted"), setTimeout(function () {
                e.find("b").hide().css("top", "0")
            }, 500), window.clearTimeout(n)
        }, 200)
    }, onupboxclick: function (t) {
        var i = this;
        return i.uped ? void 0 : (i.uped = !0, i.stopPropagation = !0, i.doVote(e(t.currentTarget)), t.preventDefault(), t.stopPropagation(), _ss({act: i.ec.action, act_data_1: i.newsType, act_data_2: "onupboxclick"}), i.model.fetch({supporttype: "up"}), !1)
    }, ontoggletoolbar: function () {
        var e = this;
        e.isShow ? (e.hide(), e.isShow = !1) : (e.show(), e.isShow = !0)
    }})
}(Zepto), !function (e, t) {
    function i(e, t, i, n, a, o, r, s, c) {
        this.elements = Object.prototype.toString.call([]) === Object.prototype.toString.call(e) ? [+e[0], +e[2], +e[4], +e[1], +e[3], +e[5], 0, 0, 1] : [e, t, i, n, a, o, r || 0, s || 0, c || 1]
    }

    function n(e, t, i) {
        this.elements = [e, t, i]
    }

    function a(i, n) {
        var o = this;
        o.elem = i;
        var r = o.$elem = t(i);
        o._transform = "-webkit-transform", o.options = n = t.extend({}, a.defaults, n), o.$doc = t(i.ownerDocument || document), o.$parent = r.parents(n.container), o.parent = o.$parent[0], r.on("load imgready", function () {
            o.init(), r.unbind("load imgready")
        }), (i.complete || "complete" == i.readyState) && e.setTimeout(function () {
            r.trigger("imgready")
        }, 100)
    }

    var o = Array.prototype.slice, r = "(\\-?[\\d\\.e]+)", s = "\\,?\\s*", c = new RegExp("^matrix\\(" + r + s + r + s + r + s + r + s + r + s + r + "\\)$"), l = "touchstart", g = "touchmove", d = "touchend";
    i.prototype = {x: function (e) {
        var t = e instanceof n, a = this.elements, o = e.elements;
        return t && 3 === o.length ? new n(a[0] * o[0] + a[1] * o[1] + a[2] * o[2], a[3] * o[0] + a[4] * o[1] + a[5] * o[2], a[6] * o[0] + a[7] * o[1] + a[8] * o[2]) : o.length === a.length ? new i(a[0] * o[0] + a[1] * o[3] + a[2] * o[6], a[0] * o[1] + a[1] * o[4] + a[2] * o[7], a[0] * o[2] + a[1] * o[5] + a[2] * o[8], a[3] * o[0] + a[4] * o[3] + a[5] * o[6], a[3] * o[1] + a[4] * o[4] + a[5] * o[7], a[3] * o[2] + a[4] * o[5] + a[5] * o[8], a[6] * o[0] + a[7] * o[3] + a[8] * o[6], a[6] * o[1] + a[7] * o[4] + a[8] * o[7], a[6] * o[2] + a[7] * o[5] + a[8] * o[8]) : !1
    }, inverse: function () {
        var e = 1 / this.determinant(), t = this.elements;
        return new i(e * (t[8] * t[4] - t[7] * t[5]), e * -(t[8] * t[1] - t[7] * t[2]), e * (t[5] * t[1] - t[4] * t[2]), e * -(t[8] * t[3] - t[6] * t[5]), e * (t[8] * t[0] - t[6] * t[2]), e * -(t[5] * t[0] - t[3] * t[2]), e * (t[7] * t[3] - t[6] * t[4]), e * -(t[7] * t[0] - t[6] * t[1]), e * (t[4] * t[0] - t[3] * t[1]))
    }, determinant: function () {
        var e = this.elements;
        return e[0] * (e[8] * e[4] - e[7] * e[5]) - e[3] * (e[8] * e[1] - e[7] * e[2]) + e[6] * (e[5] * e[1] - e[4] * e[2])
    }}, n.prototype.e = i.prototype.e = function (e) {
        return this.elements[e]
    }, a.defaults = {duration: 200, transition: !0, easing: "ease-in-out", disablePan: !1, disableZoom: !1, increment: .5, minScale: .4, maxScale: 5}, a.prototype = {_trigger: function (e) {
        "string" == typeof e && (e = "imgviewer" + e), this.$elem.triggerHandler(e, [this].concat(o.call(arguments, 1)))
    }, init: function () {
        var e = this;
        e._buildTransition(), e.setTransition(!0), e.calcDimensions(), e.resetTransform(), e._initStyle(), e._bind()
    }, calcDimensions: function () {
        var e = this;
        this.dimensions = {width: this.elem.clientWidth || 1, height: this.elem.clientHeight || 1, nWidth: this.elem.naturalWidth || 1, nHeight: this.elem.naturalHeight || 1, cWidth: this.parent.clientWidth || 1, cHeight: this.parent.clientHeight || 1}, e.options.maxScale = .5 + Math.max(e.dimensions.nWidth / e.dimensions.width, e.dimensions.nHeight / e.dimensions.height) || e.options.maxScale
    }, resetTransform: function () {
        this.setTransform("none")
    }, setTransition: function (e) {
        if (this._transition) {
            var t = e || !this.options.transition ? "none" : this._transition;
            this.$elem.css("transition", t)
        }
    }, setTransform: function (e) {
        this.$elem.css("transform", e).css("-webkit-transform", e)
    }, getTransform: function (e) {
        var t = this.$elem;
        return e ? this.setTransform(e) : e = t.css(this._transform), e || "none"
    }, getMatrix: function () {
        var e = this.getTransform() || "", t = c.exec(e);
        return t && t.shift(), t || [1, 0, 0, 1, 0, 0]
    }, setMatrix: function (e) {
        var t = "matrix(" + e.join(",") + ")";
        this.setTransform(t)
    }, _buildTransition: function () {
        if (this._transform) {
            var e = this.options;
            this._transition = this._transform + " " + e.duration + "ms " + e.easing
        }
    }, _initStyle: function () {
        var e = {"backface-visibility": "hidden", "transform-origin": "50% 50%"};
        this.$elem.css(e);
        var i = this.$parent;
        i.length && i != t("body") && (e = {overflow: "hidden"}, "static" === i.css("position") && (e.position = "relative"), i.css(e))
    }, _checkDims: function () {
        return this.dimensions.width || this.calcDimensions(), this.dimensions
    }, _getTwoPointsDistance: function (e) {
        var t = e[0], i = e[1];
        return Math.sqrt(Math.pow(Math.abs(i.clientX - t.clientX), 2) + Math.pow(Math.abs(i.clientY - t.clientY), 2))
    }, _getTwoPointsAngle: function (e, t) {
        var i = e.clientX, n = t.clientX, a = e.clientY, o = t.clientY, r = Math.abs(i - n), s = Math.abs(a - o), c = Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2)), l = s / c, g = Math.acos(l), d = 180 / (Math.PI / g);
        return d
    }, _getTwoPointsMiddle: function (e) {
        var t = e[0], i = e[1];
        return{clientX: (i.clientX - t.clientX) / 2 + t.clientX, clientY: (i.clientY - t.clientY) / 2 + t.clientY}
    }, _getMoveDirection: function (e, t) {
        var i = {};
        return e.clientX < t.clientX && (i.moveright = !0), e.clientX > t.clientX && (i.moveleft = !0), e.clientY < t.clientY && (i.movedown = !0), e.clientY > t.clientY && (i.moveup = !0), i.movedistance = this._getTwoPointsDistance([e, t]), i.moveangle = this._getTwoPointsAngle(e, t), i
    }, _bind: function () {
        var e = this;
        e.$elem.off(""), t.each(["ZoomStart", "PanStart", "PanLeftEnd", "PanRightEnd", "Tap", "DoubleTap"], function () {
            var i = e.options["on" + this];
            t.isFunction(i) && e.$elem.on("imgviewer" + this, t.proxy(i, e))
        }), e.$elem.on(l, t.proxy(e._startTouchHand, this))
    }, _startTouchHand: function (t) {
        var i, n, a = t.touches, o = this, r = !0, s = o.now = {x: a[0].clientX, y: a[0].clientY, t: (new Date).getTime()};
        o.$parent.off(""), this.setTransition(!0), 1 == a.length && o.last && (i = Math.abs(Math.max(o.last.x - s.x, o.last.y - s.y)), n = s.t - o.last.t, 10 > i && 300 > n && (o.clickzoom(), o._trigger("DoubleTap"), r = !1)), r && (t.preventDefault() && t.stopPropagation(), o._moveTouchHand(a)), o.last = s, e.clearTimeout(o._timeout)
    }, _moveTouchHand: function (t) {
        function i() {
            r = Math.abs(Math.max(o.x - a.x, o.y - a.y)), s = a.t - o.t, (1 >= r && 100 > s || !o) && (c._timeout = setTimeout(function () {
                c._trigger("Tap")
            }, 500)), e.setTimeout(function () {
                c.$parent.off("")
            }, 30)
        }

        function n(e) {
            var i = e.touches;
            if (o = {x: i[0].clientX, y: i[0].clientY, t: (new Date).getTime()}, !m) {
                if (h) {
                    var n = c._getTwoPointsDistance([l, i[0]]);
                    Math.abs(n) > 10 && (c._panTouchHand(l), c._trigger("PanStart"), m = !0)
                }
                u && 2 == i.length && (c._zoomTouchHand(t), c._trigger("ZoomStart"), m = !0)
            }
        }

        var a, o, r, s, c = this, l = {clientX: t[0].clientX, clientY: t[0].clientY};
        o = a = {x: l.clientX, y: l.clientY, t: (new Date).getTime()};
        var h = 1 == t.length && !this.options.disablePan, u = 2 == t.length && !this.options.disableZoom, m = !1;
        c.$parent.on(g, n).on(d, i)
    }, _panTouchHand: function (e) {
        var t, i, n, a, o = this, r = (this.options, this.getMatrix()), s = r.slice(0), c = +s[4], l = +s[5], h = e, u = o.getMatrix();
        n = e.clientX, a = e.clientY, t = function (e) {
            e.preventDefault();
            var t = e.touches, i = o._getMoveDirection(h, t[0]);
            if (u[0] >= 1)if (i.moveangle >= 45 && 1 == u[0]); else {
                var r = t[0].clientX - n, s = t[0].clientY - a, g = c + r, d = l + s;
                g && d && i && o.pan(g, d, i)
            }
            h = {clientX: t[0].clientX, clientY: t[0].clientY}
        }, i = function () {
            var t = o.getMatrix(), i = o._checkDims(), n = i.width * r[0], a = (n / 2 - i.cWidth / 2, o._getMoveDirection(h, e)), s = Math.abs;
            s(a.movedistance) > 10 && a.moveangle > 70 && t[4] >= 0 && s(s(t[4]) - s(r[4])) < 10 && a.moveleft && o._trigger("PanLeftEnd"), s(a.movedistance) > 10 && a.moveangle > 70 && t[4] <= 0 && s(s(t[4]) - s(r[4])) < 10 && a.moveright && o._trigger("PanRightEnd")
        }, o.$parent.on(g, t).on(d, i)
    }, _zoomTouchHand: function (e) {
        var t, i, n, a, o, r = this, s = this.options, c = this.getMatrix();
        c.slice(0), n = this._getTwoPointsDistance(e), o = this._getTwoPointsMiddle(e);
        var l = a = +c[0], h = 0;
        t = function (e) {
            e.preventDefault();
            var t = e.touches;
            if (2 == t.length) {
                var i = r._getTwoPointsMiddle(t), g = r._getTwoPointsDistance(t) - n;
                if (Math.abs(h - g) > 5) {
                    l = g * (s.increment / 100) + a, r.zoom(l, i);
                    var d = i.clientX - o.clientX, u = i.clientY - o.clientY, m = +c[4] + d, p = +c[5] + u;
                    r.pan(m, p)
                }
                o = i, h = g
            }
        }, i = function () {
            var e = r.getMatrix();
            if (e) {
                var t = e[0];
                t > r.options.maxScale ? t = r.options.maxScale : t < r.options.minScale && (t = 1, e[4] = e[5] = 0), r.setTransition(!1), e[0] = e[3] = t, r.setTransform("matrix(" + e.join(",") + ")")
            }
        }, r.$parent.on(g, t).on(d, i)
    }, pan: function (e, t, i) {
        var n = this.getMatrix();
        if (i) {
            var a = this._checkDims(), o = a.width * n[0], r = a.height * n[0], s = o / 2 - a.cWidth / 2, c = Math.max(r / 2, a.cHeight / 2);
            1 == n[0] ? e = n[4] : (e > s && (e = s), -s > e && (e = -s)), t > Math.abs(c) && (t = Math.abs(c)), t < -Math.abs(c) && (t = -Math.abs(c))
        }
        n[4] = e, n[5] = t, this.setMatrix(n)
    }, zoom: function (e, t) {
        var a = this.getMatrix();
        .3 > e && (e = .3), a[0] = e, a[3] = e;
        var o = this._checkDims();
        if (t) {
            var r = t.clientX, s = t.clientY;
            r -= o.width / 2, s -= o.height / 2;
            var c = this.parentOffset || this.$parent.offset(), l = new n(r, s, 1), g = new i(a), d = new i(1, 0, c.left - document.documentElement.scrollLeft, 0, 1, c.top - document.documentElement.scrollTop), h = g.inverse().x(d.inverse().x(l)), u = e / a[0];
            g = g.x(new i([u, 0, 0, u, 0, 0])), l = d.x(g.x(h)), a[4] = +a[4] + (r - l.e(0)), a[5] = +a[5] + (s - l.e(1));
            var m, p, f, b, v, w;
            v = o.width, w = o.height, m = (v * Math.abs(e) - o.cWidth) / 2, p = (w * Math.abs(e) - o.cHeight) / 2, f = o.cWidth > v ? o.cWidth - v : 0, b = o.cHeight > w ? o.cHeight - w : 0, a[4] = Math.min(Math.max(a[4], m), -m + f), a[5] = Math.min(Math.max(a[5], p), -p + b)
        }
        this.setMatrix(a)
    }, clickzoom: function () {
        var e = 0, t = this.getMatrix();
        e = 1 == t[0] && Math.abs(t[4]) <= 20 && Math.abs(t[5]) <= 20 ? this.options.maxScale : 1, 1 == e && (t[4] = t[5] = 0), t[0] = t[3] = e, this.setTransition(!1), this.setMatrix(t)
    }}, t.fn.imgviewer = function (e) {
        return this.each(function () {
            new a(this, e)
        })
    }
}(window, $);