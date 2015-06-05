!function (e) {
    rocket.pageview.preview = rocket.pageview.extend({el: "#preview_view", init: function (t) {
        var n = this;
        n.setup(new rocket.subview.preview_header(e.extend({}, t), n)), n.setup(new rocket.subview.preview_subscribeinfo(e.extend({}, t), n)), n.setup(new rocket.subview.preview_content(e.extend({}, t), n))
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("pagebeforechange", e.onpagebeforechange, e), t.on("pageafterchange", e.onpageafterchange, e)
    }, onpageafterchange: function (e) {
        var t = this, n = e.from, i = e.to;
        null != n && i == t.ec && t.$(".lazy-load").imglazyload({threshold: 100})
    }, onpagebeforechange: function (e) {
        var t = this, n = (t.ec, e.from, e.to), i = e.params;
        n == t && (t.type = i.type || "chosen")
    }}), webappandroid.helper.addCSS("#preview_view{display:none;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#fff}\n#preview_view_content{position:relative;z-index:1;top:-2px;min-height:800px}\n#preview_view_subscribeinfo{position:relative;height:44px;overflow:hidden;margin-bottom:3px;background-color:#f5f7fb}\n#preview_view_subscribeinfo .name,#preview_view_subscribeinfo .state-btn{position:absolute;top:7px;height:30px;line-height:30px}\n#preview_view_subscribeinfo .name{left:10px;right:90px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:18px}\n#preview_view_subscribeinfo .state-btn{right:10px;top:7px;height:28px;font-size:16px}\n#preview_view_subscribeinfo .state-btn.on{width:43px;padding-left:32px;background-color:#239bf0;background-position:12px 7px;text-align:left;color:#fff}\n#preview_view_subscribeinfo .state-btn.off{width:75px;padding-left:0;background-color:#e5e7e9;background-position:100px 100px;text-align:center;color:#262b31}"), webappandroid.helper.addHTML('<div id="preview_view">\n\n    <header>\n        <div class="ui-new-toolbar">\n            <div class="ui-new-toolbar-l">\n                <div class="ui-new-toolbar-btn btn-back"></div>\n            </div>\n            <span class="ui-new-toolbar-title">预览</span>\n            <div class="ui-new-toolbar-r">\n            </div>\n        </div>\n    </header>\n\n    <div id="preview_view_subscribeinfo">\n        <div class="name">李彦宏</div>\n        <div class="state-btn on">订阅</div>\n    </div>\n    <div id="preview_view_content"></div>\n\n</div>\n\n\n')
}(Zepto), !function (e) {
    rocket.subview.preview_content = rocket.subview.extend({el: "#preview_view_content", init: function (t) {
        var n, i, a = this;
        i = a.getSubpageManager({subpageClass: rocket.subpageview.index_subpage, maxSubpages: 2, subpageTransition: "simple"}), n = new rocket.subpageview.index_subpage(e.extend({}, t), a), a.append(n), i.registerSubpage(a.featureString, n)
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("pagebeforechange", e.onpagebeforechange, e)
    }, onpagebeforechange: function (e) {
        var t = this, n = e.to;
        e.params, n == t.ec && t.show()
    }})
}(Zepto), !function () {
    rocket.subview.preview_header = rocket.subview.extend({el: "#preview_view > header", events: {"click .btn-back": "onBackButtonClick", "click .ui-new-toolbar-title": "onTitleClick"}, init: function (e) {
        var t = this;
        t.type = e.type, t.$title = t.$(".ui-new-toolbar-title"), t.render(), t.show()
    }, render: function () {
        var e, t = this, n = webappandroid.subscribe.getSubscribeInfo(t.type);
        e = "【百度新闻】" + n.displaytype + "-" + n.name, document.title = e, webappandroid.helper.hackWeixinForIOS(), t.$title.html(n.name ? n.displaytype : "新闻")
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("pagebeforechange", e.onpagebeforechange, e)
    }, onpagebeforechange: function (e) {
        var t = this, n = t.ec, i = (e.from, e.to), a = e.params;
        i == n && (t.type = a.type, t.render())
    }, onTitleClick: function (e) {
        this.onBackButtonClick(e)
    }, onBackButtonClick: function () {
        var e = this, t = /^forward/.test(e.type), n = webappandroid.levelnav.getUpLevel(e.ec.action + (t ? "_forward" : "_other"), 7);
        e.navigate(n ? n.route : "index")
    }})
}(Zepto), !function (e) {
    rocket.subview.preview_subscribeinfo = rocket.subview.extend({el: "#preview_view_subscribeinfo", events: {"click .state-btn": "onStateButtonClick"}, init: function (e) {
        var t = this;
        t.type = e.type, t.$name = t.$(".name"), t.$statBtn = t.$(".state-btn"), t.everyRend()
    }, everyRend: function () {
        var e = this, t = webappandroid.subscribe.getSubscribeInfo(e.type), n = e.$statBtn, i = "百度新闻";
        t.name && (i = t.name), e.$name.html(i), e.$name.attr({"data-name": encodeURIComponent(t.name), "data-id": t.id || "-1", "data-type": t.type}), webappandroid.subscribe.isSubscribeExist(t.type, t.name, t.id) ? (n.removeClass("on").addClass("off"), n.html("取消订阅")) : (n.removeClass("off").addClass("on"), n.html("订阅")), e.isChosenNews() ? n.hide() : n.show();
        var a = webappandroid.subscribe.getNewsType(e.type);
        "forward" == a ? e.hide() : e.show(), /^newsman:/.test(e.type) ? e.$statBtn.hide() : e.$statBtn.show()
    }, isChosenNews: function () {
        return 0 == this.type.indexOf("chosen") || "undefined" == typeof this.type
    }, registerEvents: function () {
        var e = this, t = e.ec;
        t.on("pagebeforechange", e.onpagebeforechange, e), t.on("subscribedatachange", e.render, e)
    }, onpagebeforechange: function (e) {
        var t = this, n = t.ec, i = (e.from, e.to), a = e.params;
        i == n && (t.type = a.type, t.everyRend())
    }, onStateButtonClick: function (t) {
        var n, i = this, a = {}, o = i.$name, r = e(t.target);
        "-1" != o.data("id") && (a.id = o.data("id")), o.data("name") && (a.name = decodeURIComponent(o.data("name"))), o.data("type") && (a.type = o.data("type")), r.hasClass("on") ? (r.removeClass("on").addClass("off"), webappandroid.subdata.addSub(a), r.html("取消订阅"), n = "add") : (webappandroid.subdata.removeSub(a.type, a.name) && (r.removeClass("off").addClass("on"), r.html("订阅")), n = "remove"), setTimeout(function () {
            _ss({act: i.ec.action + "_do_subscribe_" + n, act_data_1: a.type, act_data_2: a.name})
        }, 200)
    }})
}(Zepto);