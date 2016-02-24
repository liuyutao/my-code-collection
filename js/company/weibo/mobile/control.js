/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/6/9.
 */

define("ctrl/home", function(require, a, b) {
    require("tpl/mod/home"), require("mod/home"), require("tpl/mod/base"), require("mod/base"), require("ux/picShow"), require("core/lib/iscroll"), require("tpl/mod/pagelist"), require("mod/pagelist"), require("tpl/mod/message/item"), require("mod/message/item"), require("tpl/mod/search"), require("mod/search");
    var c = require("./base");
    a.render = function(a) {
        c.render(a)
    }
}), define("tpl/mod/home", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<div class="home" data-node="homewrap"><div class="topBarWrap" data-node="topBarWrap"><div class="home-topbar module-topbar" data-node="homeTopBar" data-actiontype="home"> ';
        if (a.btn && a.btn.right) {
            b += " ";
            var c = a.btn.right;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e; )
                    d = c[e += 1], b += " ", d.iconName ? (b += '<a class="fr iconf iconf_' + d.iconName + '" href="', b += d.url ? d.url : "javascript:;", b += '"', d.type && (b += ' data-node="' + d.type + '"'), b += ' title="' + (d.title || "") + '" data-act-type="hover"></a>') : (b += '<a class="fr txt-link" href="', b += d.url ? d.url : "javascript:;", b += '"', d.type && (b += ' data-node="' + d.type + '"'), b += ' title="' + (d.title || "") + '" data-act-type="hover">' + d.title + "</a>"), b += " ";
            b += " "
        }
        return b += " <!-- ", b += "sub" == a.title.type ? '<div class="title-group"><h1 class="title txt-cut">' + a.title.txt + '</h1><h2 class="sub-title">' + a.title.txt_sub + "</h2></div>" : "drop" == a.title.type ? '<div class="fl drop-title" data-node = "homeDrop"><p class="title txt-cut">' + a.title.txt + '</p><i class="icon-font icon-font-arrow-down"></i></div>' : '<h1 class="title txt-cut">' + a.title.txt + "</h1>", b += "-->", b += "sub" == a.title.type ? '<div class="title-group"><h1 class="title txt-cut">' + a.title.txt + '</h1><h2 class="sub-title">' + a.title.txt_sub + "</h2></div>" : '<div class="fl drop-title" data-node = "homeDrop" data-username="' + a.userName + '"><p class="title txt-cut" data-node="title"></p><i class="icon-font icon-font-arrow-down"></i></div><h1 class="title txt-cut" data-node = "homeTit"></h1>', b += '</div><div class="home-sub-nav layout-box" data-node="homeSubNav"><a href="javascript:;" data-action="home" data-act-type="hover" data-text="首页" class="item box-col">首页</a><a href="javascript:;" data-action="msg" data-act-type="hover" data-text="消息" class="item box-col">消息</a><a href="javascript:;" data-action="discover" data-act-type="hover" data-text="发现" class="item box-col">发现</a><a href="javascript:;" data-action="profile" data-act-type="hover" data-text="我" class="item box-col">我</a></div></div><div class="contWrap" data-node="contWrap" data-url="' + a.url + '"><div data-node="homeWrap" class="tabCont"><div data-node="loading" class="feed-loading hid"><span>加载中…</span></div><div class="dataCont"></div></div><div data-node="discoverWrap" class="tabCont"><div data-node="loading" class="feed-loading hid"><span>加载中…</span></div><div class="dataCont"></div></div><div data-node="msgWrap" class="tabCont"><div data-node="loading" class="feed-loading hid"><span>加载中…</span></div><div class="dataCont"></div></div><div data-node="profileWrap" class="tabCont"><div data-node="loading" class="feed-loading hid"><span>加载中…</span></div><div class="dataCont"></div></div></div><footer style="text-align: center;margin: 10px;line-height: 1.5;color: #CCC;font-size: .75rem;">Copyright © 2009-2015<br>m.weibo.cn</footer></div>'
    }
}), define("core/tplFunc", function(require, a, b) {
    var c = require("core/util/keepParams"), d = require("core/util/checkLogin"), e = require("core/util/accessLevel");
    a.canAccessLink = function() {
        return !(!d && $render_data.common.showPopLogin && 2 == e)
    }(), a.href = function(b) {
        var e = b;
        return b && ("object" != typeof b || (e = b.urls && b.urls.h5 || b.scheme)) ? !d && $render_data.common.showPopLogin ? "javascript:require(['brick'],function(brick){brick.notice.trigger('AccessDenied');});" : a.canAccessLink ? 0 === e.indexOf("javascript:") ? e : c(e) : "javascript:require(['brick'],function(brick){brick.notice.trigger('AccessDenied');});" : "javascript:;"
    }
}), define("core/util/keepParams", function(require, a, b) {
    b.exports = function(a, b) {
        var c, d = $render_data.common;
        return a && d && (c = b ? d.ajaxPassParams : d.passParams, c && (a += -1 != a.indexOf("?") ? "&" + c : "?" + c)), a
    }
}), define("core/util/checkLogin", function(require, a, b) {
    b.exports = function() {
        return !(1 != $render_data.common.isLogin && 1 != $render_data.common.login)
    }()
}), define("core/util/accessLevel", function(require, a, b) {
    b.exports = $render_data.common.seeLevel || 0
}), define("mod/home", function(require, a, b) {
    b.exports = function(a, b, c) {
        var d = require("brick"), e = (require("ux/autoComplete"), require("mod/getUnread")), f = require("ux/topbarPop"), g = require("brick").notice, h = require("core/io/trans")(), i = h.json, j = require("core/io/actLog"), k = require("core/util/keepParams"), l = (require("core/util/linkMan"), 18e5), m = "", n = $(a), o = $(a).find('[data-node="contWrap"]'), p = $(a).find("[data-node='homeTopBar']"), q = p.find('[data-node="homeDrop"]'), r = $('[data-node="homeSubNav"]'), s = {0: "home",1: "msg",2: "discover",3: "profile"}, t = {home: "561",msg: "569",discover: "562",profile: "563",refresh: "137",search: "564"}, u = {0: {all: "/index/feed?format=cards",friend: "/index/friends?format=cards","private": "/index/secret?format=cards",my: "/index/my?format=cards",group: "/index/group?format=cards&gid="},1: "/msg/index?format=cards",2: "/home/discover?format=cards",3: "/home/me?format=cards"};
        searchinit = function() {
            var b = n.find(".search-wrapper"), c = n.find('[node-type="search"]'), e = $('<div node-type="hots" style="display:none;"></div>');
            $(a).on("focus", '[node-type="search"]', function() {
                0 == $(a).find('[node-type="hots"]').length && (b.after(e), i({url: "/page/pagejson?containerid=106003type=1",log: !0,success: function(b) {
                    b = b.cards, d.replaceRender($(a).find('[node-type="hots"]')[0], b || [])
                }})), "" == c.val() && (b.siblings().hide(), e.show())
            }), c.on("input", function() {
                b.siblings('[node-type!="J-result-list"]').hide()
            }), $(a).on("click", '[node-type="btn"]', function() {
                "" == c.val() && (b.siblings('[node-type!="J-result-list"]').show(), e.hide())
            })
        }, setLocal = function(a, b) {
            try {
                window.localStorage && (window.localStorage[a] = b, window.localStorage.H5_UID = $render_data.common.uid)
            } catch (c) {
            }
        }, getLocal = function(a) {
            try {
                return window.localStorage && window.localStorage[a] ? window.localStorage[a] : null
            } catch (b) {
                return null
            }
        }, hasLocalData = function(a) {
            try {
                return window.localStorage && window.localStorage[a] ? !0 : !1
            } catch (b) {
                return !1
            }
        }, getCookie = function(a) {
            var b, c;
            return document.cookie.length > 0 && (b = document.cookie.indexOf(a + "="), -1 != b) ? (b = b + a.length + 1, c = document.cookie.indexOf(";", b), -1 == c && (c = document.cookie.length), decodeURIComponent(document.cookie.substring(b, c))) : null
        }, delCookie = function(a) {
            var b = new Date;
            b.setTime(b.getTime() - 1e4), document.cookie = a + "=v;domain=.weibo.cn;expires=" + b.toGMTString()
        }, getTabindex = function() {
            var a, b, c = [], d = getCookie("H5_INDEX");
            if (tit = getCookie("H5_INDEX_TITLE"), d ? tit || (delCookie("H5_INDEX"), d = "0_all") : d = "0_all", tit || (tit = q.data("username")), a = d.toString(), -1 != a.indexOf("_") && (b = a.split("_")), b)
                for (var e = 0; e < b.length; e++)
                    c.push(b[e]);
            else
                c = [a];
            return {tab: c,tit: tit}
        }, setTabindex = function(a) {
            var b, c = p.attr("data-actiontype");
            switch (c) {
                case "home":
                    b = "0";
                    break;
                case "msg":
                    b = "1";
                    break;
                case "discover":
                    b = "2";
                    break;
                case "profile":
                    b = "3"
            }
            var d = a ? b + "_" + a : b, e = q.find("[data-node='title']").html();
            a && "group" == a && (d += "_" + q.attr("data-curgroup"));
            var f = new Date;
            f.setTime(f.getTime() + 36e5), document.cookie = "H5_INDEX=" + encodeURIComponent(d) + ";domain=.weibo.cn;expire=" + f.toGMTString(), document.cookie = "H5_INDEX_TITLE=" + encodeURIComponent(e) + ";domain=.weibo.cn;expire=" + f.toGMTString()
        }, updataTabList = function(b, c) {
            i({url: u[b],log: !0,success: function(e) {
                var f;
                "[object Array]" === Object.prototype.toString.call(e) ? f = e : e.ok && 1 == e.ok && (f = e.cards), f && (setLocal("H5_HOME_" + b, JSON.stringify(f)), d.replaceRender($(a).find('[data-node="' + c + 'Wrap"] .dataCont')[0], f || []))
            }})
        }, getCache = function(b, c) {
            if (hasLocalData("H5_HOME_" + b))
                try {
                    var e = JSON.parse(getLocal("H5_HOME_" + b));
                    d.replaceRender($(a).find('[data-node="' + c + 'Wrap"] .dataCont')[0], e || []), "2" == b && searchinit()
                } catch (f) {
                }
        }, randerData = function(b) {
            var c, f = p.attr("data-actiontype"), h = $(a).find('[data-node="' + f + 'Wrap"]'), j = getTabindex().tab;
            h.find("[data-node='loading']").show(), c = 2 == j.length ? u[j[0]][j[1]] : 1 == j.length ? u[j[0]] : "private" == j[2] ? u[j[0]][j[2]] : u[j[0]][j[1]] + j[2], c && (window.scrollTo(0, 0), i({url: c,log: !0,success: function(a) {
                var c;
                h.find("[data-node='loading']").hide(), "[object Array]" === Object.prototype.toString.call(a) ? c = a : a.ok && 1 == a.ok && (c = a.cards), c ? (b && b.end(), "2" == j[0] && c.unshift({mod_type: "mod/search",type: "home",close_complete: 0}), setLocal("H5_HOME_" + j[0], JSON.stringify(c)), d.replaceRender(h.find(".dataCont")[0], c || []), "0" == j[0] && g.trigger("LOAD_IMAGE"), "2" == j[0] && searchinit(), e.getUnread(getUnreads)) : h.find(".dataCont").html('<div data-node="msgtip">' + a.msg + "</div>")
            }}))
        }, getGroupTop3Cache = function(a) {
            var b = [{txt: "全部",type: "all"}, {txt: "好友圈",type: "friend"}, {txt: "我的微博",type: "my"}], c = a.data;
            for (var d in c)
                b.push({txt: c[d].title,type: "group_" + c[d].gid}), m += '<a href="javascript:;" class="item" data-type="group_' + c[d].gid + '" data-act-type="hover">' + c[d].title + " </a>";
            return b.push({txt: "全部分组",type: "group"}), b
        }, groupTop3 = function() {
            i({url: "/index/getCommonGroup",log: !0,success: function(a) {
                if (a.ok > 0) {
                    a.nowTime = Date.now(), setLocal("H5_groupTop3", JSON.stringify(a));
                    var b = getGroupTop3Cache(a);
                    $("#J-homeDrop").size() > 0 ? ($('#J-scroll [data-type="group"]').before(m), setGroupState()) : initGroupPop(b)
                }
            }})
        }, setGroupState = function() {
            var a, b = q.attr("data-curdrop"), c = q.attr("data-curgroup");
            a = "group" == b && c && -1 != m.indexOf(c) ? b + "_" + c : b, $("#J-homeDrop").find(".isActive").removeClass("isActive").end().find('[data-type="' + a + '"]').addClass("isActive")
        }, initGroupPop = function(a) {
            a = a ? a : [{txt: "全部",type: "all"}, {txt: "好友圈",type: "friend"}, {txt: "我的微博",type: "my"}, {txt: "全部分组",type: "group"}], q[0].onclick = function() {
                new f({target: q,id: "J-homeDrop",item: a,callback: function(a) {
                    clickGroupItem(a.target), $(this).addClass("hid")
                }}), setGroupState()
            }
        }, clickGroupItem = function(a) {
            if ("a" == a.nodeName.toLowerCase()) {
                var b = $(a).data("type");
                "group" == b ? window.location.href = "/home/groupList" : (q.attr("data-curdrop", b), q.find("[data-node='title']").html("all" == b ? q.data("username") : $(a).html()), setTabindex(b), randerData())
            }
        }, setCurNav = function(a) {
            var b = r.find('[data-action="' + a + '"]');
            b.siblings().removeClass("isActive").end().addClass("isActive"), p.attr("data-actiontype", a), p.find('[data-node="homeTit"]').html(b.data("text")), o.find(".tabCont").hide().end().find('[data-node="' + a + 'Wrap"]').show(), window.scrollTo(0, 0)
        }, setNav = function(a) {
            var b = $(a.target);
            if ((3 == a.target.nodeType || "i" == a.target.nodeName.toLowerCase()) && (b = b.parents("a")), "a" == b[0].nodeName.toLowerCase()) {
                var c = b.data("action"), d = b.hasClass("isActive");
                setCurNav(c), j(t[c]), "home" == c ? setTabindex(q.attr("data-curdrop")) : setTabindex(), "msg" == c && e.getUnread(getUnreads), d ? (randerData(), "home" == c && removeNumTip(c)) : ("" == o.find('[data-node="' + c + 'Wrap"] .dataCont').html() && randerData(), "discover" == c && upadata_topicword())
            }
        }, getUnreads = function(a, b, c) {
            if (a ? insertNumTip("msg", a) : removeNumTip("msg"), b ? insertNumTip("profile", b) : removeNumTip("profile"), c ? insertNumTip("home", c) : removeNumTip("home"), hasLocalData("H5_UNREAD"))
                try {
                    var d = JSON.parse(getLocal("H5_UNREAD"));
                    d.newMsg != a && g.trigger("updata_list_msg"), d.newFs != b && g.trigger("updata_list_profile")
                } catch (e) {
                }
            setLocal("H5_UNREAD", JSON.stringify({newMsg: a,newFs: b}))
        }, removeNumTip = function(a) {
            var b = r.find("[data-action='" + a + "']");
            b.find("i.num").length > 0 && b.find("i.num").remove()
        }, insertNumTip = function(a, b) {
            var c = r.find("[data-action='" + a + "']");
            "home" == a && c.hasClass("isActive") || (c.find("i.num").length > 0 ? c.find("i.num").html(b) : c.prepend('<i class="num">' + b + "</i>"))
        }, initRefresh = function() {
            var b = new toprefresh({c: $(a).find('[data-node="homeWrap"]')[0],fx: 0}, function() {
                randerData(b)
            })
        }, imgerror = function() {
            $('[data-node="home-tip"]').hide()
        }, versionTips = function() {
            if (1 == $render_data.common.params.tip) {
                var a = '<div data-node="version-tip" class="version-tip"><a href="javascript:;" class="close"></a><p>当前在触屏版，可在 “我-设置-版本切换” 中修改</p></div>';
                o.find('[data-node="homeWrap"]').prepend(a), $('[data-node="version-tip"] .close').click(function() {
                    $('[data-node="version-tip"]').remove()
                })
            }
        }, getTips = function() {
            var a = 2 == window.devicePixelRatio ? "640" : "320";
            $.ajax({url: k("/notice/getTips?size=" + a, !0),dataType: "json",success: function(b) {
                if (1 == b.ok) {
                    var c = b.data, d = "";
                    c.imageurl && (d = '<div data-node="home-tip" class="home-tip" style="background-image:url(' + c.imageurl + ');"><img onerror="imgerror()" src="' + c.imageurl + '"/>', "1" == c.userclose && (d += '<a href="javascript:;" class="close"></a>'), d += "</div>"), o.find('[data-node="homeWrap"]').prepend(d), $('[data-node="home-tip"]').click(function() {
                        location.href = k("/notice/clickTips?id=" + c.adid + "&size=" + a)
                    }), $('[data-node="home-tip"] a').click(function(b) {
                        $.ajax({url: k("/notice/closeTips?id=" + c.adid + "&size=" + a, !0)}), $('[data-node="home-tip"]').remove(), b.stopPropagation()
                    })
                }
            }})
        }, upadata_topicword = function() {
            if (hasLocalData("H5_HOME_NOW")) {
                var a = Date.now() - parseInt(getLocal("H5_HOME_NOW"));
                a > l && (randerData(), setLocal("H5_HOME_NOW", Date.now()))
            }
        }, initEvent = function() {
            r.on("click", setNav), p.on("click", function(a) {
                var b = a.target;
                return $(b).hasClass("disable") ? !1 : ("refresh" == $(b).data("node") && (j(t.refresh), randerData()), "search" == $(b).data("node") && j(t.search, function() {
                    window.location = "/searchs"
                }), "setting" == $(b).data("node") && (window.location = "/home/setting"), void ("msg" == $(b).data("node") && (window.location = "/groupChat/userChat/contactMemebers/")))
            })
        }, g.on("userSmall", function(a) {
            window.location = "/msg/chat?uid=" + a.id
        }), init = function() {
            var a = getTabindex(), b = a.tab, c = a.tit;
            try {
                localStorage.removeItem("H5_HOME_1")
            } catch (d) {
            }
            if (hasLocalData("H5_UID") && getLocal("H5_UID") != $render_data.common.uid && (localStorage.clear(), delCookie("H5_INDEX"), delCookie("H5_INDEX_TITLE")), setCurNav(s[b[0]]), "home" != s[b[0]]) {
                var f = p.attr("data-actiontype");
                q.find("[data-node='title']").html(q.data("username")), p.find('[data-node="homeTit"]').html(r.find('[data-action="' + f + '"]').data("text"))
            } else
                q.find("[data-node='title']").html(c);
            if (q.attr("data-curdrop", b[1] ? b[1] : "all"), b[2] && q.attr("data-curgroup", b[2]), hasLocalData("H5_groupTop3"))
                try {
                    var h = JSON.parse(getLocal("H5_groupTop3")), i = Date.now();
                    i - h.nowTime <= 864e5 ? initGroupPop(getGroupTop3Cache(h)) : localStorage.removeItem("H5_groupTop3")
                } catch (d) {
                }
            hasLocalData("H5_groupTop3") || (initGroupPop(), groupTop3()), initEvent();
            for (var j = 0; 4 > j; j++)
                getCache(j.toString(), s[j]);
            0 != b[0] && hasLocalData("H5_HOME_" + b[0]) || randerData(), hasLocalData("H5_HOME_NOW") || setLocal("H5_HOME_NOW", Date.now()), 2 == b[0] && upadata_topicword(), g.on("updata_list_msg", function() {
                updataTabList("1", "msg")
            }), g.on("updata_list_profile", function() {
                updataTabList("3", "profile")
            }), $(window).on("pageshow", function() {
                e.getUnread(getUnreads)
            }), e.getUnread(getUnreads), versionTips(), getTips()
        }, $("#box").css("overflow", ""), init()
    }
}), define("ux/autoComplete", function(require, a, b) {
    var c = function(a) {
        var b, c, d, e, f = document.body, g = "", h = 1, i = {inputEle: null,tarEle: null,resultEle: null,delay: 200,sugCount: 1,maxResultCount: 5,ajaxUrl: "",ajaxPara: "",formateResult: function(a) {
        },onclickItem: function(a, b) {
        },onHideItemList: function() {
        }}, j = function(a) {
            if (!a)
                return {left: 0,top: 0};
            var b = 0, c = 0;
            if ("getBoundingClientRect" in document.documentElement)
                var d = a.getBoundingClientRect(), e = a.ownerDocument, f = e.body, g = e.documentElement, h = g.clientTop || f.clientTop || 0, i = g.clientLeft || f.clientLeft || 0, b = d.top + (self.pageYOffset || g && g.scrollTop || f.scrollTop) - h, c = d.left + (self.pageXOffset || g && g.scrollLeft || f.scrollLeft) - i;
            else
                do
                    b += a.offsetTop || 0, c += a.offsetLeft || 0, a = a.offsetParent;
                while (a);
            return {left: c,top: b}
        }, k = function(a, b) {
            console.log("ajax------------------------" + a), $.ajax({url: "/searchs/suggest",type: "POST",dataType: "json",data: "q=" + a + "&count=10",success: function(a) {
                console.log(a), a && l(a, b)
            },error: function() {
            }})
        }, l = function(a, b) {
            var d = "";
            console.log("idx=" + b + "  index=" + h), h > b ? console.log("跳过") : (a[0] && a[1] && (d = i.formateResult(a[0], a[1])), c.innerHTML = d, "" != d && "" != i.inputEle.value && (c.style.display = ""))
        }, m = function() {
            c.style.display = "none", i.onHideItemList()
        }, n = function() {
            b = i.inputEle.value, g != b && (clearTimeout(e), g = b, "" == b ? (m(), g = "") : e = setTimeout(function() {
                k(b, h)
            }, i.delay), h++)
        }, o = function(a) {
            var b = a.tar;
            i.onclickItem(event, b), setTimeout(function() {
                m()
            }, 100)
        }, p = function(a) {
        }, q = function(a) {
            i.inputEle.value = a, g = a
        }, r = function() {
            var a = j(i.tarEle);
            c.style.cssText = "display:none;z-index:999;position:absolute;left:" + a.left + "px;top:" + (a.top + i.tarEle.offsetHeight) + "px;width:" + i.tarEle.offsetWidth + "px"
        }, s = function() {
            i.inputEle && (i.inputEle.addEventListener("focus", function() {
                d = setInterval(function() {
                    n()
                }, 200)
            }, !1), i.inputEle.addEventListener("blur", function() {
                clearInterval(d)
            }, !1)), i.resultEle ? c = i.resultEle : (c = document.createElement("div"), c.id = "J-result-List", c.className = "J-result-List", f.appendChild(c), r()), c.addEventListener("click", o, !1), c.addEventListener("onkeydown", p, !1)
        };
        for (var t in a)
            i[t] = a[t];
        return s(), {hideResultList: m,setValueStatus: q}
    };
    b.exports = c
}), define("mod/getUnread", function(require, a, b) {
    function c(a) {
        return a = a > 0 ? a > 99 ? "99+" : a : ""
    }
    function d(a) {
        e(), $.getJSON("/unread?t=" + (new Date).getTime()).done(function(b) {
            var d = 0, e = 0, f = 0;
            if (b.qp) {
                var g = b.qp;
                g["new"] && (f = g["new"]), g.fs && (e = g.fs), g.at && (d += g.at), g.pl && (d += g.pl), g.atcmt && (d += g.atcmt), g.sx && (d += g.sx), g.attitude && (d += g.attitude), g.group && (d += g.group), f = c(f), e = c(e), d = c(d), a && a(d, e, f)
            }
        }), f = setTimeout(function() {
            d(a)
        }, 3e4)
    }
    function e() {
        f && clearTimeout(f)
    }
    var f;
    b.exports = {getUnread: d,clearUnread: e}
}), define("ux/topbarPop", function(require, a, b) {
    function c(a) {
        function b() {
            if (!o.id)
                return void alert("topbarPop 需要唯一标示 ID");
            var a = o.target;
            if (!a)
                return void console.error("没有 $target !");
            if (j = o.box ? o.box : $("body"), k = $("#" + o.id), k.size() && (n.isInit = !0), !n.isInit) {
                if ($("#" + o.id).size())
                    return void alert(o.id + " ID 已经被占用啦！");
                f.append(d(o)), j.append(f), k = $("#" + o.id), 0 === k.size() && console.log("topbarPop 模板未加载"), l = k.find("#J-list");
                for (var b = 0, g = o.item.length; g > b && !o.item[b].active; b++)
                    b == g - 1 ? l.find(".item").eq(0).addClass("isActive") : "";
                a.attr("data-TBPtrigger", 1), n.isInit = !0, c()
            }
            i(a), k.toggleClass("hid"), $(document).bind(e, p.clickToClose)
        }
        function c() {
            l.on("click", ".item", function(a) {
                var b = $(a.target);
                b.hasClass("item") || (b = b.parent(".item")), b.hasClass("isActive") || (l.find(".item").removeClass("isActive"), b.addClass("isActive"))
            }), o.callback && k.on("click", o.callback)
        }
        function g() {
            $(document).bind(e, p.clickToClose)
        }
        function h() {
            if (m) {
                try {
                    m.destory()
                } catch (a) {
                    console.log(a)
                }
                m = null
            }
            g()
        }
        function i(a) {
            var b, c = a.offset(), d = k.outerWidth();
            b = "BODY" != j[0].tagName ? a.outerHeight() + 7 : c.top + a.outerHeight() + 7;
            var e = c.left + a.outerWidth() / 2 - d / 2, f = window.innerWidth - d - 5, g = e > 5 ? e > f ? f : e : 5;
            k.css({top: b,left: g}), 0 > e && c.left < 30 && k.addClass("isLeftArrow")
        }
        var j, k, l, m, n = {}, o = a || {}, p = {clickToClose: function(a) {
            var b = $(a.target);
            if (b.length && b[0] !== o.target[0] && !b.parents("[data-TBPtrigger=1]").size()) {
                var c = "J-topbarPop" === b.attr("id"), d = b.parents("#J-list").size() > 0;
                if (!c && !d)
                    return k.addClass("hid"), j.hasClass("module-topbar") && j.find(".icon-font").removeClass("icon-font-arrow-up").addClass("icon-font-arrow-down"), void $(document).unbind(a, p.clickToClose)
            }
        }};
        return b(), {destory: h}
    }
    var d = (require("conf/inter/topbarPop"), require("tpl/ux/topbarPop")), e = "ontouchstart" in window ? "touchstart" : "click", f = $(document.createDocumentFragment());
    b.exports = c
}), define("conf/inter/topbarPop", function(require, a, b) {
    var c = require("core/io/trans")();
    c.set("getGroupList", {url: "attGroups/getAttGroupListByUid"}), c.set("createGroup", {url: "attGroupsDeal/createAndAddGroup",type: "post"}), c.set("addUserToGroup", {url: "attGroupsDeal/addUserToGroup",type: "post"}), c.set("removeUserFromGroup", {url: "attGroupsDeal/moveUserFromGroup",type: "post"}), c.set("unfollow", {url: "attentionDeal/delAttention",type: "post"}), b.exports = c
}), define("core/io/trans", function(require, a, b) {
    var c = require("core/util/keepParams"), d = require("../../ux/alertPop"), d = require("../../ux/alertPop");
    b.exports = function() {
        var a = {}, b = {};
        return b.set = function(b, c) {
            if ("undefined" != typeof a[b])
                throw b + " 接口已经被定义！";
            a[b] = c
        }, b.get = function(c, d) {
            if ("undefined" == typeof a[c])
                throw c + " 接口没有定义！";
            var e = $.extend({}, a[c], d);
            b.json(e)
        }, b.json = function(a) {
            a.url = c(a.url, !0), a.type = a.type || "get", a.dataType = a.dataType || "json", a.timeout = a.timeout || 1e3 * ("get" == a.type ? 30 : 60);
            var e = a.success;
            a.success = function(f) {
                var g = ((new Date).getTime(), "" + f.ok);
                switch (g) {
                    case "-3":
                    case "20031":
                        $("#J-toast-wrapper").addClass("hid");
                        var h = new d;
                        return h.init({wrapperId: "J-" + (new Date).getTime(),html: '<div style="overflow:hidden;"><p style="margin:6px auto 22px;font-size:1.125rem;text-align:center">你发的太疯狂啦，请验证一下</p><img style="display:block;margin:0 0 15px;height:30px;" src="http://weibo.cn/interface/f/ttt/captcha/show.php?c=' + f.captId + '" alt="验证码获取失败" /></div>',inputArr: [{placeholder: "请输入验证码"}],cancelBtn: {},confirmBtn: {callback: function(c) {
                            var d = c.find("input"), e = String.prototype.trim.call(d.val());
                            return "" == e ? (h.showError(d, "验证码不能为空"), !1) : (h.close(), a.data.captId = f.captId, a.data.code = e, void b.json(a))
                        }}}), !1;
                    case "-7":
                        window.location.href = "/security?from=0";
                        break;
                    case "-8":
                        window.location.href = "/security";
                        break;
                    case "-9":
                        "post" == a.type.toLowerCase() ? (alert("您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。"), location.href = "/security/readonly") : e(f);
                        break;
                    case "-9+225":
                    case "-9+222":
                        "post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"), (new d).init({wrapperId: "J-" + (new Date).getTime(),info: "您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。",confirmBtn: {callback: function() {
                            window.location.href = "/security/stolenReadOnly"
                        }}})) : e(f);
                        break;
                    case "-98":
                    case "-100":
                        location.href = c(f.url || "/login?backUrl=" + decodeURIComponent(location.href));
                        break;
                    case "-255":
                        alert("您的帐号疑似被盗，已经被系统锁定部分功能，为了保障您的帐号安全，请立即修改密码。"), location.href = "/security";
                        break;
                    case "403":
                        $("#J-toast-wrapper").addClass("hid"), alert("您输入的网址疑似为不安全链接，无法发表，请谅解。\n如需帮助，请联系客服。");
                        break;
                    case "2014":
                        location.href = data.location;
                        break;
                    case "20016":
                        $("#J-toast-wrapper").addClass("hid"), alert("发微博太多啦，休息一会儿吧!");
                        break;
                    case "20018":
                        $("#J-toast-wrapper").addClass("hid"), alert("您输入的网址疑似为不安全链接，无法发表，请谅解。");
                        break;
                    case "20019":
                        $("#J-toast-wrapper").addClass("hid"), alert("相同内容请隔10分钟再进行发布哦。");
                        break;
                    case "20020":
                        $("#J-toast-wrapper").addClass("hid"), alert("由于该内容为广告信息，无法进行发布！");
                        break;
                    case "20021":
                        $("#J-toast-wrapper").addClass("hid"), alert("抱歉，此内容违反了《微博社区管理规定(试行)》或相关法规政策，无法进行指定操作。");
                        break;
                    case "20038":
                        $("#J-toast-wrapper").addClass("hid"), alert("您刚才已经发过相似的内容啦，建议您第二天再尝试！");
                        break;
                    case "20046":
                        "post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"), (new d).init({wrapperId: "J-" + (new Date).getTime(),info: "您的登录邮箱尚未验证，不能使用完整功能，请验证邮箱。",cancelBtn: {},confirmBtn: {callback: function() {
                            window.location.href = "/edmActive?disable_sinaurl=1"
                        }}})) : e(f);
                        break;
                    case "ag:4_st:3":
                        "post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"), (new d).init({wrapperId: "J-" + (new Date).getTime(),info: "你的邮箱未激活！激活邮箱，即可使用邮箱和密码登录微博，安全又方便。",cancelBtn: !0,confirmBtn: {txt: "立即激活",callback: function() {
                            window.location.href = "https://passport.sina.cn/bindname/mail?entry=mweibo"
                        }}})) : e(f);
                        break;
                    default:
                        e(f)
                }
            }, $.ajax(a)
        }, b
    }
}), define("ux/alertPop", function(require, a, b) {
    function c() {
        function a(a) {
            return m = a || {}, m.wrapperId ? $("#" + m.wrapperId).size() ? void alert(m.wrapperId + " ID 已经被占用啦！") : (h = d(m), e.append(h), $("body").append(e), i = $("#" + (m.wrapperId || "J-alertPop")), j = i.find(".wrapper"), k = i.find("#" + (m.cancelBtn && m.cancelBtn.id || "J-alertPop-cancel")), l = i.find("#" + (m.confirmBtn && m.confirmBtn.id || "J-alertPop-confirm")), g(), i.removeClass("hid"), f(), void (m.html && m.htmlFunction && m.htmlFunction.call(this, i.find(".custom-wrapper")))) : void alert("alertPop 需要唯一标示 ID，庸人这么多，牵错手了可不是闹着玩儿的！")
        }
        function b(a, b, c) {
            c = "number" == typeof c && c > 3e3 ? c : 3e3;
            var d = a.parent().parent().find(".error-label");
            d.html(b || "请重新输入").removeClass("hid"), clearTimeout(n.errorTimer), n.errorTimer = setTimeout(function() {
                d.addClass("hid").html("")
            }, c)
        }
        function c() {
            i.addClass("hid"), i.remove()
        }
        function f() {
            var a = $("body").outerHeight(!0), b = j.outerHeight(), c = j.outerWidth(), d = window.scrollY, e = window.innerHeight, f = window.innerWidth;
            j.css({top: (e - b) / 2 + d,left: (f - c) / 2}), i.css({height: a > e ? a : e})
        }
        function g(a) {
            l.on("click", o.confirm), k.on("click", o.cancel)
        }
        var h, i, j, k, l, m, n = {}, o = {cancel: function() {
            var a = $(this);
            if (!a.hasClass("isDisabled"))
                return c(), m.cancelBtn && m.cancelBtn.callback && m.cancelBtn.callback.call(this, i), !1
        },confirm: function() {
            var a = $(this);
            if (!a.hasClass("isDisabled"))
                return m.confirmBtn && m.confirmBtn.callback ? m.confirmBtn.callback.call(this, i) : c(), !1
        }};
        return {init: a,showError: b,close: c}
    }
    var d = require("tpl/ux/alertPop"), e = $(document.createDocumentFragment());
    b.exports = c
}), define("tpl/ux/alertPop", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<div id="' + a.wrapperId + '" class="alert-wrapper hid"><article class="wrapper">';
        if (a.title && (b += '<header class="title">' + a.title + "</header>"), b += " ", a.info && (b += '<span class="info">' + a.info + "</span>"), b += " ", a.html && (b += '<div class="custom-wrapper">' + a.html + "</div>"), b += " ", a.label && (b += '<span class="label">' + a.label + "</span>"), b += " ", a.inputArr && a.inputArr.length) {
            b += " ";
            var c = a.inputArr;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e; ) {
                    if (d = c[e += 1], b += '<div class="input-wrapper"><div class="input-item">', "object" == typeof d && d.length) {
                        b += " ";
                        var g = d;
                        if (g)
                            for (var h, i = -1, j = g.length - 1; j > i; )
                                h = g[i += 1], b += '<input id="' + (h.id || "") + '" name="' + (h.name || "") + '" type="text" placeholder="' + (h.placeholder || "") + '" value="' + (h.value || "") + '"/>';
                        b += " "
                    } else
                        b += '<input id="' + (d.id || "") + '" name="' + (d.name || "") + '" type="text" placeholder="' + (d.placeholder || "") + '" value="' + (d.value || "") + '"/>';
                    b += '</div><p class="error-label hid"></p></div>'
                }
            b += " "
        }
        return b += '<div class="action">', (a.cancelBtn || !a.cancelBtn && !a.confirmBtn) && (b += '<a id="' + (a.cancelBtn && a.cancelBtn.id || "J-alertPop-cancel") + '" href="javascript:void(0);" class="btn cancel-btn', a.cancelBtn && a.cancelBtn.isDisabled && (b += " isDisabled"), b += '">' + (a.cancelBtn && a.cancelBtn.txt || "取消") + "</a>"), b += " ", a.confirmBtn && (b += '<a id="' + (a.confirmBtn && a.confirmBtn.id || "J-alertPop-confirm") + '" href="javascript:void(0);" class="btn confirm-btn', a.confirmBtn && a.confirmBtn.isDisabled && (b += " isDisabled"), b += '">' + (a.confirmBtn && a.confirmBtn.txt || "确定") + "</a>"), b += "</div></article></div>"
    }
}), define("tpl/ux/topbarPop", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<article id="' + a.id + '" class="topbar-pop hid"><section class="list" id="J-list"><div id="J-scroll">';
        if (a.item) {
            b += " ";
            var c = a.item;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e; )
                    d = c[e += 1], b += " ", d.split ? b += '<p class="item-split"><span>' + d.txt + "</span></p>" : (b += '<a href="', b += d.url ? d.url : "javascript:;", b += '" class="item', d.active && (b += " isActive"), b += '"', d.type && (b += ' data-type="' + d.type + '"'), b += ' data-act-type="hover">' + (d.txt || "") + " ", d.num && (b += '<span class="num">(' + d.num + ")</span>"), b += "</a>"), b += " ";
            b += " "
        }
        return b += "</div></section>", a.btn && (b += '<footer class="action layout-box"><a class="btn box-col" href="', b += a.btn.url ? a.btn.url : "javascript:;", b += '" title="' + (a.btn.txt || "") + '"', a.btn.type && (b += ' data-type="' + a.btn.type + '"'), b += ">" + a.btn.txt + "</a></footer>"), b += "</article>"
    }
}), define("core/io/actLog", function(require, a, b) {
    b.exports = function(a, b) {
        if (a) {
            var c = "/h5logs/actionLog?type=pic&act_code=" + a + "&t=" + (new Date).getTime(), d = require("core/util/keepParams");
            c = d(c, !0);
            var e = new Image;
            b && (e.onload = b, e.onerror = b), e.src = c
        }
    }
}), define("core/util/linkMan", function(require, a, b) {
    function c() {
        var a = "#wbContact", b = location.hash;
        (!b || a.indexOf(b) < 0) && d()
    }
    function d() {
        f.remove(), g && "#wbContact" == location.hash && history.go(-1)
    }
    function e() {
        var a = f.find("#J-result"), b = f.find("#J-default");
        j.search({parent: f.find("#J-poisearch"),resultWrap: a,clearKeyCallback: function() {
            f.find(".j_searchButton").html("取消"), a.find('[data-node-type="userList"]').empty(), a.hide(), f.find(".j_clearKey").hide()
        },submitCallback: function(c) {
            b.hide(), a.find('[data-node-type="userList"]').empty(), a.show(), a.find('[data-node-type="userList"]').html('<span class="loading"></span>'), $.getJSON("/attention/getAttentionList?keyword=" + c + "&format=cards").done(function(b) {
                b.ok ? (a.find(".loading").hide(), k.render(a.find('[data-node-type="userList"]')[0], b.cards || [])) : a.find('[data-node-type="userList"]').html('<div class="ErrorInfo relativonError">搜索关注人列表为空</div>')
            })
        },onfocusCallback: function() {
            b.hide(), f.find(".j_searchButton").show()
        },inputCallback: function() {
            f.find(".j_searchButton").html(f.find(".j_searchInput").val() ? "搜索" : "取消")
        }}), b.find('[data-node-type="userList"]').html('<span class="loading"></span>'), $.getJSON("/attention/getAtList").done(function(a) {
            a.ok ? (b.find(".loading").hide(), k.render(b.find('[data-node-type="userList"]')[0], a.cards || [])) : b.find('[data-node-type="userList"]').html('<div class="ErrorInfo relativonError">最近联系人列表为空</div>')
        }), l.on("userSmall", function(a) {
            d()
        }), f.find(".J-cancel").click(function() {
            d()
        })
    }
    var f, g, h = '<div id="J-contactpop" class="wrapper-popup"><div id="J-actualct"><header class="sub-header"><a class="J-cancel fl BtnLev4" href="javascript:;" >关闭</a><span>联系人</span><a class="J-update fr BtnLev4" style="visibility:hidden;" href="javascript:;" >更新</a></header><form id="J-poisearch" class="search-pos-pop"><a class="j_searchButton fr hid" href="javascript:;">取消</a><div class="txt-pos-pop"><span class="j_clearKey fr clear hid" node-type="clear"></span><span class="fl type iconf iconf_navbar_search" node-type="type-list"></span><div class="input-box"><input class=" j_searchInput search" type="text" node-type="search" placeholder="搜索联系人"></div></div></form><div id="J-result" style="display:none;"><div class="list-pos-pop" data-node-type="userList"></div></div><div id="J-default"><div class="list-pos-pop" data-node-type="userList"></div></div></div></div>', i = (require("tpl/mod/widget-list"), require("core/util/list"), require("core/util/insertText"), require("core/util/getVip"), require("core/util/screenHeight")), j = (require("core/util/scrollTo"), require("core/util/uiView")), k = (require("core/util/moveEnd"), require("brick")), l = k.notice;
    b.exports = function(a) {
        location.hash = "wbContact", g = a, window.onhashchange = c, $("#J-contactpop").length ? (f = $("#J-contactpop"), f.show()) : ($("body").append(h), f = $("#J-contactpop"), e()), f.find("#J-actualct").css({"min-height": i().viewHeight})
    }
}), define("tpl/mod/widget-list", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = "";
        for (var c in a.data) {
            var d = a.data[c];
            b += '<a data-id="' + c + '" class="item-pos-pop clearfix BCLev8 FCLev18" href="javascript:;"><img class="J-lazyPic" src="http://u1.sinaimg.cn/upload/h5/img/v4/avt_def.png" data-src="' + d.avantar + '"><h2>' + d.nick + " " + a.getVip(d.vip) + "</h2></a>"
        }
        return b
    }
}), define("core/util/list", function(require, a, b) {
    var c = require("../util/uiView");
    b.exports = function(a) {
        function b(a, b) {
            a = a || m.page, p.html(m.loadingTpl), n.triggerHandler("loading");
            var e = m.url, f = m.url;
            -1 != f.indexOf("?") ? "&" != f.slice(f.length - 1) && (f += "&") : f += "?", f += "page=" + a, b && "undefined" != b && (f += "&maxId=" + b), $.ajax({url: f,data: m.data,dataType: "json",success: function(b) {
                if (e != m.url)
                    return void alert("1");
                if (c.valideState(b))
                    return void alert("2");
                if (1 == b.ok) {
                    var f = b.data;
                    m.beforeRender && (f = m.beforeRender.call(o, b, a)), m.page = a, f && (d(f), m.showPager && g(m.getTotalPage.call(o, b) || b.maxPage, b.previous_cursor, b.next_cursor)), m.getTotalPage(b) > 1 ? q.show() : q.hide()
                } else
                    p.html('<div class="ErrorInfo' + (m.errorClass ? " " + m.errorClass : "") + '">' + b.msg + "</div>"), q.hide();
                p.removeClass(r), n.removeClass("loading").triggerHandler("success"), m.success.call(o, b, a)
            },error: function() {
                q.hide(), p.removeClass(r).html('<div class="ErrorInfo">请求数据发生错误，请稍后再试！</div>'), n.removeClass("loading").triggerHandler("error"), m.error.call(o, a)
            }})
        }
        function d(a) {
            p.html(m.tpl(a))
        }
        function e(a) {
            j(a.target.value)
        }
        function f(a, b) {
            if (a = a || q.find("select"), b = b || q.data("max"), a.size() && 0 == a.children().size() && 1 * b > 0) {
                for (var c = [], d = 1; b >= d; d++) {
                    var e = 1 == d ? " selected" : "";
                    c.push('<option value="' + d + '"' + e + ">第" + d + "页</option>")
                }
                a.html(c.join(""))
            }
        }
        function g(a, b, c) {
            var d = m.page, e = [];
            if (isNaN(a))
                return void q.remove();
            1 >= a ? q.hide() : q.show(), a > 500 && (a = 500), q.data("max", a);
            var g = q.find("select");
            if (g.size() > 0 && q.data("max") == a) {
                g.val(d), q.find(".L-select span").html("第" + d + "页");
                var h = q.find(".prev");
                b && h.data("id", b);
                var i = q.find(".next");
                return c && i.data("id", c), 1 == d ? h.addClass("disabled") : h.removeClass("disabled"), d >= a ? i.addClass("disabled") : i.removeClass("disabled"), void f(g, a)
            }
            var j = "prev" + (1 == d ? " disabled" : ""), k = "next" + (d == a ? " disabled" : "");
            e.push('<a href="javascript:;" class="' + j + '"' + (b ? 'data-id="' + b + '"' : "") + ">上一页</a>"), e.push('<span class="L-select num-pager BtnLev1"><select class="pageSel L-list-select">');
            for (var l = 1; a >= l; l++) {
                var n = l == d ? " selected" : "";
                e.push('<option value="' + l + '"' + n + ">第" + l + "页</option>")
            }
            e.push("</select><span>第" + d + "页</span></span>"), e.push('<a href="javascript:;" class="' + k + '"' + (c ? 'data-id="' + b + '"' : "") + ">下一页</a>"), q.html(e.join(""))
        }
        function h() {
            var a = $(this).data("id");
            j(m.page - 1, a)
        }
        function i() {
            var a = $(this).data("id");
            j(parseInt(m.page, 10) + 1, a)
        }
        function j(a, c) {
            b(a, c)
        }
        function k() {
            n.delegate(".widget-pager .prev:not(.disabled)", "click", h), n.delegate(".widget-pager .next:not(.disabled)", "click", i), n.delegate(".widget-pager select", "change", e)
        }
        function l() {
            return k(), f(), m.ignoreFirstPage || b(), this
        }
        var m = $.extend({element: null,url: null,data: null,tpl: null,listContainer: ".widget-list",pagerContainer: ".widget-pager",beforeRender: function(a, b) {
            return a
        },getTotalPage: function(a) {
            return a.maxPage
        },success: function() {
        },error: function() {
        },page: 1,showPager: !0,loadingTpl: '<div class="loadingV5" style="background: url(http://u1.sinaimg.cn/upload/h5/img/loading.gif) no-repeat center;height: 100px;"></div>',loadingClass: "loadingLarge",ignoreFirstPage: !1}, a), n = ($.isObject ? $.isObject(m.element) : "object" == $.type(m.element)) ? m.element : $(m.element), o = this, p = n.find(m.listContainer);
        0 === p.size() && (n.empty(), p = $('<div class="' + m.listContainer.substr(1) + '">').appendTo(n));
        var q = n.find(m.pagerContainer);
        0 === q.size() && m.showPager && (q = $('<div class="' + m.pagerContainer.substr(1) + '">').appendTo(n));
        var r = m.loadingClass;
        l(), o.changeUrl = function(a) {
            return m.url = a, this
        }, o.changeTpl = function(a) {
            return m.tpl = a, this
        }, this.getPage = function() {
            return m.page
        }, this.goTo = function(a) {
            return j(a), this
        }
    }
}), define("core/util/uiView", function(require, a, b) {
    function c(a) {
        if (a.is(".J-feed-img img")) {
            var b = /\.gif$/;
            b.test(a.attr("src")) && 30 < a.width() && a.parent().addClass("gif")
        }
    }
    var d = require("core/util/rectifyName"), e = require("core/util/imgReady"), f = require("core/util/screenHeight"), g = {};
    g.formMsg = function(a, b, c) {
        var e = new function(a, b, c) {
            var a = "string" == typeof a ? $(a) : a;
            if (null == a || null == b)
                return !1;
            c || (c = 1);
            var b = '<div id="j_formMsg">' + b + "</div>";
            switch (1 * c) {
                case 1:
                    a.append(b);
                    break;
                case 2:
                    a.prepend(b);
                    break;
                case 3:
                    a.after(b);
                    break;
                case 4:
                    a.before(b);
                    break;
                default:
                    return !1
            }
            var d = $("#j_formMsg");
            return d
        }(a, b, c);
        return e.close = function(a, b, c) {
            var e = this, f = 1500, g = ".j_msgText";
            c || (c = f);
            var h = e.find(g);
            h.length > 0 ? h.html(a) : e.children().eq(0).html(a);
            var i = "-webkit-transition: opacity 0.5s ease-in-out;-ms-transition: opacity 0.5s ease-in-out;transition: opacity 0.5s ease-in-out;";
            e.attr("style", i);
            setTimeout(function() {
                e.css({opacity: 0});
                var a = d("TransitionEnd").event;
                a ? e.on(a, function(a) {
                    b && b(), e.remove()
                }) : (b && b(), e.remove())
            }, c)
        }, e
    }, g.search = function(a) {
        function b() {
            g.val() ? h.show() : (h.hide(), k && k())
        }
        function c(a) {
            var b = g.val();
            "取消" == i.html() && (g.val(""), g.blur(), $(f).find(".txt-pos-pop").css("margin-right", "0px"), g.parents(".search-pos-pop").siblings().show(), j.hide(), i.hide()), "搜索" == i.html() && (l && l.call(a, b), i.html("取消"))
        }
        var d, e = $.extend({parent: "#j_search",searchInput: ".j_searchInput",clearKey: ".j_clearKey",searchButton: ".j_searchButton",resultWrap: "#J-result",clearKeyCallback: function() {
        },submitCallback: function(a) {
        },onfocusCallback: function() {
        },inputCallback: function() {
        }}, a), f = e.parent, g = $(f).find(e.searchInput), h = $(f).find(e.clearKey), i = $(f).find(e.searchButton), j = e.resultWrap, k = e.clearKeyCallback, l = e.submitCallback, m = e.onfocusCallback, n = e.inputCallback, o = $(e.parent);
        g.bind("focus", function() {
            "none" != o.siblings().css("display") && m && m(), clearInterval(d), d = setInterval(function() {
                b()
            }, 300)
        }), g.bind("blur", function() {
            clearInterval(d), b()
        }), g.bind("input", function() {
            n()
        }), g.bind("keyup", function() {
            n()
        }), h.bind("click", function() {
            g.val(""), k && k(), g.focus()
        }), o.bind("submit", function(a) {
            a.preventDefault(), c(this), g.blur()
        }), i.bind("click", function() {
            c(o[0])
        })
    }, g.maskLayer = function(a, b) {
        b = $.extend({type: "remove"}, b);
        var c = new function(a, b) {
            var c = b.masksty ? "" : "background:rgba(0,0,0,0.4);position:absolute;top:0;width:100%;z-index:500", d = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), e = "<div id='cache_mask' " + (b.masksty ? "class=" + b.masksty : "") + " style='height:" + d + "px;" + c + "'>" + a + "</div>";
            $("body").append(e);
            var f = $("#cache_mask"), g = f.children(), h = Math.max(document.body.scrollTop, document.body.scrollTop + $(window).height() / 2 - g.height() / 2), i = $(document).width() / 2 - g.width() / 2;
            return 0 >= h && (h = 10), "top" == b.pos && (h = document.body.scrollTop), g.css({margin: h + "px 0 0 " + i + "px"}), b.cancelBind && "[object String]" == toString.call(b.cancelBind) && f.find(b.cancelBind).on("click", function(a) {
                a.stopPropagation()
            }), 1 != b.cancelBind && f.on("click", function() {
                $(this)[b.type]()
            }), f.attr("id", "uiview_mask"), f
        }(a, b);
        return c.close = function() {
            var a = "remove";
            arguments.length && (a = arguments[0]), this[a]()
        }, c
    }, g.tipDialog = function(a, b, c) {
        return new function(a, b, c) {
            var c = $.extend({top: 0,left: 0}, c), a = $(a), d = a.offset().left + (c.left ? c.left : ""), e = a.height() + a.offset().top + c.top;
            return $(b).css({top: e + "px",left: d + "px"}).appendTo($("body")), b
        }(a, b, c)
    }, g.asynLoadPic = function(a, b) {
        a = a || ".asynLoad", b = b || "asynSuc", setTimeout(function() {
            $.each($(a), function(a, c) {
                if (!(c.className.indexOf(b) > 0) && $(c).data("src")) {
                    var d = $(c);
                    e(d.data("src"), function() {
                        c.src = this.src
                    }, function() {
                        d.addClass(b), c.src = this.src, c.removeAttribute("data-src"), setTimeout(function() {
                            d.removeClass(b)
                        }, 200)
                    })
                }
            })
        })
    }, g.lazyLoad = function(a, b) {
        var d = "J-lazyPic", g = "picani", h = $("." + d);
        setTimeout(function() {
            $.each(h, function(h, i) {
                var j = $(i), k = j.data("src");
                if (k && j.is(":visible")) {
                    if (j.data("loading"))
                        return;
                    j.data("loading", "1");
                    var l = j.parents(".J-feed-img");
                    e(k, function() {
                        if (l.size() && "mul" != j.attr("data-type") && (this.width > l.width() ? j.css({"max-width": "100%"}) : j.css("width", "auto")), j.hasClass("J-resize")) {
                            var b = j.parent(), c = b.width(), d = b.height(), e = d / c, f = this.height / this.width;
                            e > f && j.css({height: "100%",width: "auto","margin-left": -(this.width / this.height * d - c) / 2 + "px"}), f > e && j.css({"max-width": "100%",height: "auto","margin-top": -(c / this.width * this.height - d) / 2 + "px"})
                        }
                        a && a.call(this, j)
                    }, function() {
                        j.attr("src", k), j.addClass(g), j[0].removeAttribute("data-src"), setTimeout(function() {
                            j.removeClass(d), j.removeClass(g)
                        }, 200), c(j);
                        var a = f().viewHeight;
                        if (0 == $(".wrapper-detail-wb").size() && j.height() > a) {
                            var e = j.parents(".large-img-wb");
                            e.hasClass("gif") || (e.css("max-height", a + "px").append('<i class="full"></i>'), e.find(".full").css({width: this.width + "px","max-width": "100%"}))
                        }
                        b && b.call(this, j)
                    })
                }
            })
        }, 15)
    }, g.valideState = function(a, b) {
        if ((-100 == a.ok || -98 == a.ok) && a.url) {
            var c = a.url;
            return -1 == c.indexOf("wm=") && window.comParam && (c = c + "&" + window.comParam), location.href = c, !0
        }
        return -3 == a.ok ? (require.async("common/module/1/dialog", function(c) {
            var d = ajaxPassParams, e = new c({title: "请输入验证码",modal: !1,hideClose: !0});
            e.init(), console.log("false" == a.checkcode), e.info('<p class="multi-info-popup"><input placeholder="请输入验证码" class="IptLev1" style="width:100%"/></p><div class="multi-info-popup">' + (0 == a.checkcode ? '<div class="AlarmInfo" style="margin: -5px 0 5px;">' + a.msg + "</div>" : "") + '<img src="http://weibo.cn/interface/f/ttt/captcha/show.php?c=' + a.captId + '"> <a href="javascript:;" node-action="changeCode">看不清换一张</a></div>'), e.getDom().find('[node-action="changeCode"]').click(function() {
                $.ajax({url: root + "verifycode/captId",success: function(b) {
                    a.captId = b, e.getDom().find("img").attr("src", "http://weibo.cn/interface/f/ttt/captcha/show.php?c=" + b)
                }})
            }), e.addBtn('<a href="javascript:;" class="canel-popup L-item-tab BtnLev1">取消</a>', function() {
                e.destory()
            }), e.addBtn('<a href="javascript:;"" class="confirm-popup L-item-tab BtnLev3"><b></b>确定</a>', function() {
                ajaxPassParams += "&code=" + e.getDom().find("input").val() + "&captId=" + a.captId, b && b(), ajaxPassParams = d, e.destory()
            })
        }), !0) : -225 == a.ok ? (require.async("common/module/1/dialog", function(a) {
            var b = new a({title: "温馨提示",modal: !0});
            b.init(), b.info("您的帐号疑似被盗，已经被系统锁定部分功能，为了保障您的帐号安全，请立即修改密码。"), b.addBtn('<a href="javascript:void(0)" class="canel-popup L-item-tab BtnLev1">取消</a>', function() {
                b.destory()
            }), b.addBtn('<a href="javascript:void(0)" class="confirm-popup L-item-tab BtnLev2">修改密码</a>', function() {
                location.href = root + "security"
            })
        }), !0) : -9 == a.ok ? (require.async("common/module/1/dialog", function(a) {
            var b = new a({title: "操作失败！",modal: !0});
            b.init(), b.info("您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。"), b.addBtn('<a href="javascript:void(0)" class="canel-popup L-item-tab BtnLev1">以后再说</a>', function() {
                b.destory()
            }), b.addBtn('<a href="javascript:void(0)" class="confirm-popup L-item-tab BtnLev2">进行验证</a>', function() {
                location.href = root + "security"
            })
        }), !0) : -7 == a.ok || -8 == a.ok ? (location.href = root + "/security", !0) : !1
    }, g.loginState = function(a) {
        if (!(a || userInfo && userInfo.id)) {
            if (confirm("这个功能需要登录才能使用，立即登录?")) {
                var b = root + "login?backURL=" + encodeURIComponent(location.href);
                comParam && (b = b + "&" + comParam), location.href = b
            }
            return !1
        }
        return !0
    }, g.alert = function(a) {
        alert(a)
    }, g.inform = function(b) {
        function c(b) {
            var c = "";
            b.find("form").length && (c = b.find("form").serialize());
            var e = a.formMsg(b.find("form"), '<div class="j_msgText">正在提交...</div>');
            $.ajax({url: root + d.url + comParam,data: c,context: a,dataType: "json",type: "POST",success: function(a) {
                this.valideState(a) || e.close(a.msg, function() {
                    1 == a.ok ? d.sucCallBack ? d.sucCallBack(a, f) : f.close() : d.eroCallBack && d.eroCallBack(a, f)
                }, d.time)
            }})
        }
        var d = $.extend({tempId: "",renderData: "",url: "",editSty: "form",sucCallBack: "",eroCallBack: "",time: ""}, b), e = doT.template($(d.tempId).text()), f = this.maskLayer(e(d.renderData)), g = f.children(), h = g.find("#j_cancel"), i = g.find("#j_submit");
        f.find(d.editSty).on("click", function(a) {
            a.stopPropagation()
        }), i.on("click", function() {
            c(g)
        }), h.on("click", function() {
            f.close()
        })
    }, g.fixHeader = function(a, b) {
        var c = navigator.userAgent.toLowerCase(), d = c.match(/(android)\s+([\d]+)/), e = c.match(/(iphone\sos)\s([\d]+)/);
        if (!(d && d[2] < 4 || e && e[2] < 5)) {
            var f = a || $("#J-fixedHeader");
            if (f.size()) {
                if (!f.is(":visible"))
                    return;
                var g = $("#wrapper-log");
                g.size() && g.prependTo(f), f.parent().addClass(b || "fixed").css("padding-top", f.height() + "px")
            } else {
                var h = $(".sub-header");
                h.wrap('<div id="J-fixedHeader" class="wrapper-fixed"></div>'), f = h.parent()
            }
        }
    }, b.exports = g
}), define("core/util/rectifyName", function(require, a, b) {
    b.exports = function(a) {
        var b, c, d = {Webkit: "webkit",Moz: "",O: "o",ms: "MS"}, e = document.createElement("div");
        return $.each(d, function(a, d) {
            return void 0 !== e.style[a + "TransitionProperty"] ? (c = "-" + a.toLowerCase() + "-", b = d, !1) : void 0
        }), {event: a && b ? b + a : "",prefix: c}
    }
}), define("core/util/imgReady", function(require, a, b) {
    var c = [], d = null, e = function() {
        for (var a = 0; a < c.length; a++)
            c[a].end ? c.splice(a--, 1) : c[a]();
        !c.length && f()
    }, f = function() {
        clearInterval(d), d = null
    };
    b.exports = function(a, b, f, g) {
        var h, i, j, k, l, m = new Image;
        return m.src = a, m.complete ? (b.call(m), void (f && f.call(m))) : (i = m.width, j = m.height, m.onerror = function() {
            g && g.call(m), h.end = !0, m = m.onload = m.onerror = null
        }, h = function() {
            k = m.width, l = m.height, (k !== i || l !== j || k * l > 1024) && (b.call(m), h.end = !0)
        }, h(), m.onload = function() {
            !h.end && h(), f ? f.call(m) : b.call(m), m = m.onload = m.onerror = null
        }, void (h.end || (c.push(h), null === d && (d = setInterval(e, 40)))))
    }
}), define("core/util/screenHeight", function(require, a, b) {
    b.exports = function(a) {
        var b = (window.screen.height, window.screen.width, window.innerHeight || document.documentElement.clientHeight);
        return {viewHeight: b}
    }
}), define("core/util/insertText", function(require, a, b) {
    b.exports = function(a, b) {
        var c = a.value;
        if ("number" == typeof a.selectionStart && "number" == typeof a.selectionEnd) {
            var d = a.selectionStart, e = a.selectionEnd, f = d;
            a.value = c.substring(0, d) + b + c.substring(e, c.length), f += b.length, a.selectionStart = a.selectionEnd = f
        } else if (document.selection) {
            var g = document.selection.createRange();
            if ("TEXTAREA" == g.parentElement().tagName) {
                if (g.text)
                    g.text = b;
                else {
                    var h = document.body.createTextRange();
                    h.moveToElementText(a), g.setEndPoint("StartToStart", h);
                    var i = g.text.length;
                    a.value = c.substring(0, i) + b + c.substring(i, c.length)
                }
                return
            }
        } else
            a.value += b
    }
}), define("core/util/getVip", function(require, a, b) {
    b.exports = function(a) {
        var b = "";
        "string" == typeof a && (a = a.split(","));
        for (var c = 0, d = a.length; d > c; c++)
            b = b + '<img src="' + a[c] + '" alt="v" width="15" height="15"/> ';
        return b
    }
}), define("core/util/scrollTo", function(require, a, b) {
    var c, d = 1, e = !1;
    b.exports = function(a, b) {
        e || (c = setTimeout(function() {
            e = !0;
            var b = document.body.scrollTop, f = a - b > 0 ? 1 : -1, g = g || 1;
            d = d > 0 ? d * f : d, 0 > a && (a = 0);
            var h = b + f + d;
            f > 0 && h > a ? h = a : 0 > f && a >= h && (h = a), h == a ? (d = 1, e = !1, clearTimeout(c)) : setTimeout(arguments.callee, 10), document.body.scrollTop = h, d += g * f
        }, 10))
    }
}), define("core/util/moveEnd", function(require, a, b) {
    b.exports = function(a) {
        var a = "string" == typeof a ? $(a)[0] : a[0];
        a.focus();
        var b = a.value.length;
        if (a.createTextRange) {
            var c = a.createTextRange();
            c.moveStart("character", b), c.collapse(!0), c.select()
        } else
            "number" == typeof a.selectionStart && "number" == typeof a.selectionEnd && (a.selectionStart = a.selectionEnd = b)
    }
}), define("tpl/mod/base", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = "<!-- 场景全局初始化模块占位符 --><div></div>";
        return b
    }
}), define("mod/base", function(require, a, b) {
    b.exports = function(a, b) {
        var c = require("brick"), d = c.notice, e = require("ux/quicklyReg"), f = require("core/device/openClient"), g = require("core/io/actLog"), h = require("core/device/geo"), i = require("ux/toast");
        if (top.location != self.location)
            if ("" != document.referrer) {
                var j = /^([\w\d]+):\/\/([\w\d\-_]+(?:\.[\w\d\-_]+)*)/.exec(document.referrer);
                /(\.sina(\.com)?\.cn|\.weibo\.(cn|com)|\.meishitui\.com|open\.mb\.qq\.com)$/.test(j[2]) || (top.location = self.location)
            } else
                top.location = self.location;
        if ("standalone" in window.navigator && window.navigator.standalone) {
            var k, l = !1;
            document.addEventListener("click", function(a) {
                for (k = a.target; "A" !== k.nodeName && "HTML" !== k.nodeName; )
                    k = k.parentNode;
                "href" in k && -1 !== k.href.indexOf("http") && (-1 !== k.href.indexOf(document.location.host) || l) && (a.preventDefault(), document.location.href = k.href)
            }, !1)
        }
        var m = require("core/lazyload");
        m.init();
        var n = $render_data.common;
        if (n.callClient) {
            var o = n.scheme, p = {scheme_IOS: o,scheme_Adr: o};
            n.params && "sms" == n.params.sourceType && (p.downurl_IOS = p.downurl_Adr = null), f.init(p)
        }
        d.on("AccessDenied", function() {
            e.init()
        }), d.on("OpenWeiboApp", function(a) {
            var b = {};
            a && (b.downurl_IOS = b.downurl_Adr = a), g("433"), f.init(b)
        }), d.on("addGeo", function(a) {
            i.loading("正在获取经纬度"), h({callback: function(b, c) {
                b ? i.error(b) : location.href = a + "&lat=" + c.latitude + "&lon=" + c.longitude
            }})
        })
    }
}), define("ux/quicklyReg", function(require, a, b) {
    var c, d = require("core/lib/rsaTools"), e = require("conf/inter/quicklyReg"), f = require("core/io/actLog"), g = require("tpl/ux/quicklyReg"), h = $(document.createDocumentFragment()), i = {set: function(a, b, c) {
        var d = c || 0;
        if (d > 0) {
            var e = new Date;
            e.setTime(e.getTime() + 60 * d * 1e3), document.cookie = a + "=" + escape(b) + ";expires=" + e.toGMTString()
        } else
            document.cookie = a + "=" + escape(b)
    },get: function(a) {
        var b = document.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
        return null != b ? unescape(b[2]) : null
    },"delete": function(a) {
        var b = new Date, c = this.get(a);
        b.setTime(b.getTime() - 1e4), null != c && (document.cookie = a + "=" + c + ";expires=" + b.toGMTString())
    }}, j = {_regex: /^[a-zA-Z0-9\.\_\-\?\~\!\@\#\$\%\^\&\*\\\+\`\=\[\]\(\)\{\}\|\;\'\:\"\,\/\<\>]{6,16}$/,_orderStr: function(a, b) {
        if (!a || !b)
            throw "orderStr error!";
        "string" != typeof a && (a += ""), "string" != typeof b && (b += "");
        var c = a.charCodeAt(0), d = b.charCodeAt(0), e = c > d;
        if (e) {
            var f = c;
            c = d, d = f
        }
        for (var g = [], h = c; d >= h; h++)
            g.push(String.fromCharCode(h));
        return e && g.reverse(), g.join("")
    },_isOrder: function(a, b) {
        return a && a.length && a.length > 1 && function() {
            for (var c = 0; c < b.length; c++)
                if (b[c].indexOf(a) >= 0)
                    return !0;
            return !1
        }()
    },_bLength: function(a) {
        if (!a)
            return 0;
        var b = a.match(/[^\x00-\xff]/g);
        return a.length + (b ? b.length : 0)
    },_lenLimit: function(a, b, c) {
        var d = this._bLength(a);
        return !(b > d || d > c)
    },_isWeakPasswd: function(a, b) {
        if (/^(112233|123123|123321|123456|654321|abcdef|abcabc|abc123|a1b2c3|aaa111|123qwe|qwerty|qweasd|admin|password|p@ssword|passwd|iloveyou|5201314)$/.test(a))
            return !0;
        if (/^([a-zA-Z0-9])\1+$/.test(a))
            return !0;
        if (this._isOrder(a, b))
            return !0;
        if (/^([a-zA-Z]+)([0-9]+)$/.test(a) || /^([0-9]+)([a-zA-Z]+)$/.test(a)) {
            var c = RegExp.$1, d = RegExp.$2;
            if (this._isOrder(c, b) && this._isOrder(d, b))
                return !0
        }
        return !1
    },_isStrongPasswd: function(a) {
        var b = a.match(/[a-z]/gi), c = a.match(/[0-9]/gi), d = a.match(/([^a-z0-9])/gi);
        return b && c && d ? !0 : b && c ? b.length + c.length >= 11 : b && d ? b.length + d.length >= 11 : c && d ? c.length + d.length >= 11 : !1
    },_isWeird: function(a) {
        return !/^[a-zA-Z0-9\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\uFF01\u201c\u201d\u2018\u2019\u300e\u300f\u300c\u300d\uFF09\uFF08\.\_\-\?\~\!\@\#\$\%\^\&\*\\\+\`\=\[\]\(\)\{\}\|\;\'\:\"\,\/\<\>]+$/i.test(a)
    },check: function(a, b, c) {
        var d = [this._orderStr("a", "z"), this._orderStr("z", "a"), this._orderStr("0", "9"), this._orderStr("9", "0")], b = b || 6, c = c || 16;
        return {isBase: this._regex.test(a),isInLength: this._lenLimit(a, b, c),isWeak: this._isWeakPasswd(a, d),isWeired: this._isWeird(a),isStrong: this._isStrongPasswd(a)}
    }}, k = {init: function(a) {
        var a = a || {};
        if ("weixin" == $render_data.common.sourceType)
            return void (window.location.href = $render_data.common.wx_authorize);
        if (!this._isInit) {
            if ($("body").append(h.append(g(a))), h = null, this.wrapper = $("#J-wx-reg"), 0 == this.wrapper.size())
                return void console.log("quickyreg 模板没有加载~ ");
            this.stepWrapper = this.wrapper.find(".quicklyRegPopup-box"), this.phoneWrapper = this.stepWrapper.find("#J-wx-phone"), this.phoneInput = this.phoneWrapper.find("input").eq(0), this.vCodeInput = this.phoneWrapper.find("input").eq(1), this.phoneCancel = this.phoneWrapper.find("#J-phone-cancel"), this.phoneConfirm = this.phoneWrapper.find("#J-phone-confirm"), this.pwdWrapper = this.stepWrapper.find("#J-wx-pwd"), this.pwdPhone = this.pwdWrapper.find("#J-pwd-phone"), this.pwdDefault = this.pwdWrapper.find("#J-pwd-default"), this.pwdInput = this.pwdWrapper.find("input").eq(0), this.pwdChange = this.pwdWrapper.find("#J-pwd-change"), this.pwdCancel = this.phoneWrapper.find("#J-pwd-cancel"), this.pwdConfirm = this.phoneWrapper.find("#J-pwd-confirm"), this.resultWrapper = this.wrapper.find(".quicklyRegPopup-result"), this.resultInfo = this.resultWrapper.find(".result-info"), this.isPopupAgain = a.isPopupAgain, this._bindEvent()
        }
        this.wrapper.removeClass("hid"), this.wrapper.css({opacity: 1,height: $("body").height() > window.innerHeight ? $("body").height() : window.innerHeight}), this.wrapper[0].style.webkitTransitionDuration = 0, this.isPopupAgain ? (this.pwdPhone.html(m.substr(0, 3) + " " + m.substr(3, 4) + " " + m.substr(7)), this.pwdDefault.html(n), this.phoneWrapper.addClass("hid"), this.pwdWrapper.removeClass("hid")) : this._actCode(555, "quickyreg pop"), this._posCenter(this.stepWrapper), this._rsa = new d, this._rsa.setPublic("9EFA113A6C785D5976DDBCFFD7FCED2D2AF4A3A3C0AFB5442CD756754453DD7D6A6C663B51460371A90C50717919D37711F8824269675762AB3AAC0D8535178E58787A3B05A7420F9DBF38F9C55E5F20483574738F8A23C15C820532EA1A24C0CDCF718F6ECABBB95C90C5BF5DAA1DBF0354BA98BD891E948CC38AA432FCC7BB", "10001")
    },_close: function() {
        var a = this;
        this.wrapper[0].style.webkitTransitionDuration = "800ms", this.wrapper.css("opacity", 0), setTimeout(function() {
            a.wrapper.addClass("hid"), a.wrapper.find("input").val(""), a.pwdWrapper.addClass("hid"), a.phoneWrapper.removeClass("hid")
        }, 800)
    },_eventsForID: {"J-phone-cancel": function(a) {
        this._close(), this._actCode("437", "取消验证")
    },"J-phone-fetch": function(a) {
        var b = this;
        if (!a.hasClass("isDisabled")) {
            var d = String.prototype.trim.call(this.phoneInput.val());
            this._checkPhone(d) && (a.addClass("isDisabled"), e.get("fetchVcode", {data: "phone=" + encodeURIComponent(d),success: function(d) {
                if (1 != d.ok)
                    b._showMsg(b.phoneInput, d.msg), a.removeClass("isDisabled");
                else {
                    b.phoneWrapper.find("#J-phone-confirm").removeClass("isDisabled"), d.data && (b._isUser = !0), a.html('<span id="J-fetch-timer">120</span>s后重新获取');
                    var e = b.phoneWrapper.find("#J-fetch-timer");
                    clearInterval(c), c = setInterval(function() {
                        var b = e.html();
                        return 0 == b ? (clearInterval(c), void a.removeClass("isDisabled").html("重新获取")) : void e.html(b - 1)
                    }, 1e3)
                }
            }}))
        }
    },"J-phone-confirm": function(a) {
        var b = this;
        if (!a.hasClass("isDisabled")) {
            var c = String.prototype.trim.call(this.phoneInput.val()), d = String.prototype.trim.call(this.vCodeInput.val());
            this._phone = c, this._isUser ? e.get("phoneVcodeLogin", {data: "phone=" + encodeURIComponent(c) + "&code=" + encodeURIComponent(d),success: function(a) {
                1 == a.ok ? (b.stepWrapper.addClass("hid"), b.resultInfo.html("登录成功"), b.resultWrapper.addClass("result-success").removeClass("hid"), b._posCenter(b.resultWrapper), setTimeout(function() {
                    location.reload()
                }, 500)) : b._showMsg(b.vCodeInput, a.msg)
            }}) : e.get("phoneVcodeReg", {data: "phone=" + encodeURIComponent(c) + "&code=" + encodeURIComponent(d) + "&" + decodeURIComponent(i.get("M_WEIBOCN_PARAMS")),success: function(a) {
                1 == a.ok ? (b.phoneWrapper.addClass("hid"), a.data.pwd && (b.pwdPhone.html(c.substr(0, 3) + " " + c.substr(3, 4) + " " + c.substr(7)), b.pwdDefault.html(a.data.pwd), b._defaultPwd = a.data.pwd), b.pwdWrapper.removeClass("hid")) : b._showMsg(b.vCodeInput, a.msg)
            }})
        }
    },"J-qq": function(a) {
        return this._actCode("440", "qq授权登录"), setTimeout(function() {
            location.href = a.attr("data-url")
        }, 50), !1
    },"J-wx": function(a) {
        return this._actCode("718", "微信帐号登录"), setTimeout(function() {
            location.href = a.attr("data-url")
        }, 50), !1
    },"J-pwd-change": function(a) {
        "password" == this.pwdInput.attr("type") ? (this.pwdInput.attr("type", "text"), a.html("隐藏")) : (this.pwdInput.attr("type", "password"), a.html("显示"))
    },"J-pwd-cancel": function(a) {
        this._actCode("441", "取消设置密码"), this._close(), this._phone ? (i.set("QUICKLY_REG_TIME", (new Date).getTime(), 60), i.set("QUICKLY_REG_PHONE", this._phone, 60), i.set("QUICKLY_REG_DEFAULT_PWD", this._defaultPwd, 60), setTimeout(function() {
            location.reload()
        }, 1e3)) : (i["delete"]("QUICKLY_REG_TIME"), i["delete"]("QUICKLY_REG_PHONE"), i["delete"]("QUICKLY_REG_DEFAULT_PWD"))
    },"J-pwd-confirm": function(a) {
        var b = this;
        if (!a.hasClass("isDisabled")) {
            a.addClass("isDisabled");
            var c = String.prototype.trim.call(this.pwdInput.val());
            this._checkPwd(c) ? e.get("changePwd", {data: "phone=" + encodeURIComponent(m ? m : b._phone) + "&newpwd=" + b._rsa.encrypt(encodeURIComponent(c)),success: function(c) {
                -6 == c.ok && c.data.url ? location.href = c.data.url : 1 == c.ok ? (b.stepWrapper.addClass("hid"), b.resultInfo.html("密码设置成功"), b.resultWrapper.addClass("result-success").removeClass("hid"), b._posCenter(b.resultWrapper), i["delete"]("QUICKLY_REG_TIME"), i["delete"]("QUICKLY_REG_PHONE"), i["delete"]("QUICKLY_REG_DEFAULT_PWD"), setTimeout(function() {
                    location.reload()
                }, 1e3)) : (a.removeClass("isDisabled"), b.stepWrapper.addClass("hid"), b.resultInfo.html(c.msg), b.resultWrapper.addClass("result-fail").removeClass("hid"), b._posCenter(b.resultWrapper))
            }}) : a.removeClass("isDisabled")
        }
    },"J-pwd-reset": function(a) {
        this._actCode("443", "重新设置"), this.resultWrapper.addClass("hid").removeClass("result-fail"), this.phoneWrapper.addClass("hid"), this.pwdWrapper.removeClass("hid"), this.stepWrapper.removeClass("hid"), this._posCenter(this.stepWrapper)
    },"J-pwd-skip": function(a) {
        this._actCode("441", "跳过设置"), this._close(), location.reload()
    }},_bindEvent: function() {
        var a = this;
        this.wrapper.on("click", "a", function(b) {
            var c = b.target, d = $(c);
            a._eventsForID.hasOwnProperty(c.id) && a._eventsForID[c.id].call(a, d)
        }), this._isInit = !0
    },_checkPhone: function(a) {
        var b = !1;
        return "" == a ? this._showMsg(this.phoneInput, "手机号不能为空") : /^1[3578][\d]{9}$/.test(a) ? b = !0 : this._showMsg(this.phoneInput, "请输入正确的手机号"), b
    },_checkPwd: function(a, b) {
        var c = !1, b = b || this.pwdInput;
        return "" == a ? this._showMsg(b, "密码不能为空") : j.check(a).isInLength ? c = !0 : this._showMsg(b, "6-16位数字字母组合，区分大小写"), c
    },_showMsg: function(a, b) {
        if (a) {
            var c = a.parent().parent().next();
            c.html(b).removeClass("hid"), setTimeout(function() {
                c.addClass("hid")
            }, 3e3)
        }
    },_posCenter: function(a) {
        var b = a.outerHeight(), c = a.outerWidth(), d = window.scrollY, e = window.innerHeight, f = window.innerWidth;
        a.css({top: (e - b) / 2 + d,left: (f - c) / 2})
    },_actCode: function(a, b) {
        "undefined" != a && f(a)
    }}, l = i.get("QUICKLY_REG_TIME"), m = i.get("QUICKLY_REG_PHONE"), n = i.get("QUICKLY_REG_DEFAULT_PWD");
    if (l)
        var o = setInterval(function() {
            (new Date).getTime() - l > 12e4 && (k.init({isPopupAgain: !0}), i["delete"]("QUICKLY_REG_TIME"), i["delete"]("QUICKLY_REG_PHONE"), i["delete"]("QUICKLY_REG_DEFAULT_PWD"), clearInterval(o))
        }, 1e3);
    b.exports = k
}), define("core/lib/rsaTools", function(require, a, b) {
    function c(a, b, c) {
        null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
    }
    function d() {
        return new c(null)
    }
    function e(a, b, c, d, e, f) {
        for (; --f >= 0; ) {
            var g = b * this[a++] + c[d] + e;
            e = Math.floor(g / 67108864), c[d++] = 67108863 & g
        }
        return e
    }
    function f(a, b, c, d, e, f) {
        for (var g = 32767 & b, h = b >> 15; --f >= 0; ) {
            var i = 32767 & this[a], j = this[a++] >> 15, k = h * i + j * g;
            i = g * i + ((32767 & k) << 15) + c[d] + (1073741823 & e), e = (i >>> 30) + (k >>> 15) + h * j + (e >>> 30), c[d++] = 1073741823 & i
        }
        return e
    }
    function g(a, b, c, d, e, f) {
        for (var g = 16383 & b, h = b >> 14; --f >= 0; ) {
            var i = 16383 & this[a], j = this[a++] >> 14, k = h * i + j * g;
            i = g * i + ((16383 & k) << 14) + c[d] + e, e = (i >> 28) + (k >> 14) + h * j, c[d++] = 268435455 & i
        }
        return e
    }
    function h(a) {
        return ma.charAt(a)
    }
    function i(a, b) {
        var c = na[a.charCodeAt(b)];
        return null == c ? -1 : c
    }
    function j(a) {
        for (var b = this.t - 1; b >= 0; --b)
            a[b] = this[b];
        a.t = this.t, a.s = this.s
    }
    function k(a) {
        this.t = 1, this.s = 0 > a ? -1 : 0, a > 0 ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
    }
    function l(a) {
        var b = d();
        return b.fromInt(a), b
    }
    function m(a, b) {
        var d;
        if (16 == b)
            d = 4;
        else if (8 == b)
            d = 3;
        else if (256 == b)
            d = 8;
        else if (2 == b)
            d = 1;
        else if (32 == b)
            d = 5;
        else {
            if (4 != b)
                return void this.fromRadix(a, b);
            d = 2
        }
        this.t = 0, this.s = 0;
        for (var e = a.length, f = !1, g = 0; --e >= 0; ) {
            var h = 8 == d ? 255 & a[e] : i(a, e);
            0 > h ? "-" == a.charAt(e) && (f = !0) : (f = !1, 0 == g ? this[this.t++] = h : g + d > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - g) - 1) << g, this[this.t++] = h >> this.DB - g) : this[this.t - 1] |= h << g, g += d, g >= this.DB && (g -= this.DB))
        }
        8 == d && 0 != (128 & a[0]) && (this.s = -1, g > 0 && (this[this.t - 1] |= (1 << this.DB - g) - 1 << g)), this.clamp(), f && c.ZERO.subTo(this, this)
    }
    function n() {
        for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a; )
            --this.t
    }
    function o(a) {
        if (this.s < 0)
            return "-" + this.negate().toString(a);
        var b;
        if (16 == a)
            b = 4;
        else if (8 == a)
            b = 3;
        else if (2 == a)
            b = 1;
        else if (32 == a)
            b = 5;
        else {
            if (4 != a)
                return this.toRadix(a);
            b = 2
        }
        var c, d = (1 << b) - 1, e = !1, f = "", g = this.t, i = this.DB - g * this.DB % b;
        if (g-- > 0)
            for (i < this.DB && (c = this[g] >> i) > 0 && (e = !0, f = h(c)); g >= 0; )
                b > i ? (c = (this[g] & (1 << i) - 1) << b - i, c |= this[--g] >> (i += this.DB - b)) : (c = this[g] >> (i -= b) & d, 0 >= i && (i += this.DB, --g)), c > 0 && (e = !0), e && (f += h(c));
        return e ? f : "0"
    }
    function p() {
        var a = d();
        return c.ZERO.subTo(this, a), a
    }
    function q() {
        return this.s < 0 ? this.negate() : this
    }
    function r(a) {
        var b = this.s - a.s;
        if (0 != b)
            return b;
        var c = this.t;
        if (b = c - a.t, 0 != b)
            return this.s < 0 ? -b : b;
        for (; --c >= 0; )
            if (0 != (b = this[c] - a[c]))
                return b;
        return 0
    }
    function s(a) {
        var b, c = 1;
        return 0 != (b = a >>> 16) && (a = b, c += 16), 0 != (b = a >> 8) && (a = b, c += 8), 0 != (b = a >> 4) && (a = b, c += 4), 0 != (b = a >> 2) && (a = b, c += 2), 0 != (b = a >> 1) && (a = b, c += 1), c
    }
    function t() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + s(this[this.t - 1] ^ this.s & this.DM)
    }
    function u(a, b) {
        var c;
        for (c = this.t - 1; c >= 0; --c)
            b[c + a] = this[c];
        for (c = a - 1; c >= 0; --c)
            b[c] = 0;
        b.t = this.t + a, b.s = this.s
    }
    function v(a, b) {
        for (var c = a; c < this.t; ++c)
            b[c - a] = this[c];
        b.t = Math.max(this.t - a, 0), b.s = this.s
    }
    function w(a, b) {
        var c, d = a % this.DB, e = this.DB - d, f = (1 << e) - 1, g = Math.floor(a / this.DB), h = this.s << d & this.DM;
        for (c = this.t - 1; c >= 0; --c)
            b[c + g + 1] = this[c] >> e | h, h = (this[c] & f) << d;
        for (c = g - 1; c >= 0; --c)
            b[c] = 0;
        b[g] = h, b.t = this.t + g + 1, b.s = this.s, b.clamp()
    }
    function x(a, b) {
        b.s = this.s;
        var c = Math.floor(a / this.DB);
        if (c >= this.t)
            return void (b.t = 0);
        var d = a % this.DB, e = this.DB - d, f = (1 << d) - 1;
        b[0] = this[c] >> d;
        for (var g = c + 1; g < this.t; ++g)
            b[g - c - 1] |= (this[g] & f) << e, b[g - c] = this[g] >> d;
        d > 0 && (b[this.t - c - 1] |= (this.s & f) << e), b.t = this.t - c, b.clamp()
    }
    function y(a, b) {
        for (var c = 0, d = 0, e = Math.min(a.t, this.t); e > c; )
            d += this[c] - a[c], b[c++] = d & this.DM, d >>= this.DB;
        if (a.t < this.t) {
            for (d -= a.s; c < this.t; )
                d += this[c], b[c++] = d & this.DM, d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t; )
                d -= a[c], b[c++] = d & this.DM, d >>= this.DB;
            d -= a.s
        }
        b.s = 0 > d ? -1 : 0, -1 > d ? b[c++] = this.DV + d : d > 0 && (b[c++] = d), b.t = c, b.clamp()
    }
    function z(a, b) {
        var d = this.abs(), e = a.abs(), f = d.t;
        for (b.t = f + e.t; --f >= 0; )
            b[f] = 0;
        for (f = 0; f < e.t; ++f)
            b[f + d.t] = d.am(0, e[f], b, f, 0, d.t);
        b.s = 0, b.clamp(), this.s != a.s && c.ZERO.subTo(b, b)
    }
    function A(a) {
        for (var b = this.abs(), c = a.t = 2 * b.t; --c >= 0; )
            a[c] = 0;
        for (c = 0; c < b.t - 1; ++c) {
            var d = b.am(c, b[c], a, 2 * c, 0, 1);
            (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV, a[c + b.t + 1] = 1)
        }
        a.t > 0 && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)), a.s = 0, a.clamp()
    }
    function B(a, b, e) {
        var f = a.abs();
        if (!(f.t <= 0)) {
            var g = this.abs();
            if (g.t < f.t)
                return null != b && b.fromInt(0), void (null != e && this.copyTo(e));
            null == e && (e = d());
            var h = d(), i = this.s, j = a.s, k = this.DB - s(f[f.t - 1]);
            k > 0 ? (f.lShiftTo(k, h), g.lShiftTo(k, e)) : (f.copyTo(h), g.copyTo(e));
            var l = h.t, m = h[l - 1];
            if (0 != m) {
                var n = m * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2 : 0), o = this.FV / n, p = (1 << this.F1) / n, q = 1 << this.F2, r = e.t, t = r - l, u = null == b ? d() : b;
                for (h.dlShiftTo(t, u), e.compareTo(u) >= 0 && (e[e.t++] = 1, e.subTo(u, e)), c.ONE.dlShiftTo(l, u), u.subTo(h, h); h.t < l; )
                    h[h.t++] = 0;
                for (; --t >= 0; ) {
                    var v = e[--r] == m ? this.DM : Math.floor(e[r] * o + (e[r - 1] + q) * p);
                    if ((e[r] += h.am(0, v, e, t, 0, l)) < v)
                        for (h.dlShiftTo(t, u), e.subTo(u, e); e[r] < --v; )
                            e.subTo(u, e)
                }
                null != b && (e.drShiftTo(l, b), i != j && c.ZERO.subTo(b, b)), e.t = l, e.clamp(), k > 0 && e.rShiftTo(k, e), 0 > i && c.ZERO.subTo(e, e)
            }
        }
    }
    function C(a) {
        var b = d();
        return this.abs().divRemTo(a, null, b), this.s < 0 && b.compareTo(c.ZERO) > 0 && a.subTo(b, b), b
    }
    function D(a) {
        this.m = a
    }
    function E(a) {
        return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
    }
    function F(a) {
        return a
    }
    function G(a) {
        a.divRemTo(this.m, null, a)
    }
    function H(a, b, c) {
        a.multiplyTo(b, c), this.reduce(c)
    }
    function I(a, b) {
        a.squareTo(b), this.reduce(b)
    }
    function J() {
        if (this.t < 1)
            return 0;
        var a = this[0];
        if (0 == (1 & a))
            return 0;
        var b = 3 & a;
        return b = b * (2 - (15 & a) * b) & 15, b = b * (2 - (255 & a) * b) & 255, b = b * (2 - ((65535 & a) * b & 65535)) & 65535, b = b * (2 - a * b % this.DV) % this.DV, b > 0 ? this.DV - b : -b
    }
    function K(a) {
        this.m = a, this.mp = a.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << a.DB - 15) - 1, this.mt2 = 2 * a.t
    }
    function L(a) {
        var b = d();
        return a.abs().dlShiftTo(this.m.t, b), b.divRemTo(this.m, null, b), a.s < 0 && b.compareTo(c.ZERO) > 0 && this.m.subTo(b, b), b
    }
    function M(a) {
        var b = d();
        return a.copyTo(b), this.reduce(b), b
    }
    function N(a) {
        for (; a.t <= this.mt2; )
            a[a.t++] = 0;
        for (var b = 0; b < this.m.t; ++b) {
            var c = 32767 & a[b], d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
            for (c = b + this.m.t, a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV; )
                a[c] -= a.DV, a[++c]++
        }
        a.clamp(), a.drShiftTo(this.m.t, a), a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
    }
    function O(a, b) {
        a.squareTo(b), this.reduce(b)
    }
    function P(a, b, c) {
        a.multiplyTo(b, c), this.reduce(c)
    }
    function Q() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }
    function R(a, b) {
        if (a > 4294967295 || 1 > a)
            return c.ONE;
        var e = d(), f = d(), g = b.convert(this), h = s(a) - 1;
        for (g.copyTo(e); --h >= 0; )
            if (b.sqrTo(e, f), (a & 1 << h) > 0)
                b.mulTo(f, g, e);
            else {
                var i = e;
                e = f, f = i
            }
        return b.revert(e)
    }
    function S(a, b) {
        var c;
        return c = 256 > a || b.isEven() ? new D(b) : new K(b), this.exp(a, c)
    }
    function T() {
        this.i = 0, this.j = 0, this.S = new Array
    }
    function U(a) {
        var b, c, d;
        for (b = 0; 256 > b; ++b)
            this.S[b] = b;
        for (c = 0, b = 0; 256 > b; ++b)
            c = c + this.S[b] + a[b % a.length] & 255, d = this.S[b], this.S[b] = this.S[c], this.S[c] = d;
        this.i = 0, this.j = 0
    }
    function V() {
        var a;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, a = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = a, this.S[a + this.S[this.i] & 255]
    }
    function W() {
        return new T
    }
    function X(a) {
        pa[qa++] ^= 255 & a, pa[qa++] ^= a >> 8 & 255, pa[qa++] ^= a >> 16 & 255, pa[qa++] ^= a >> 24 & 255, qa >= ra && (qa -= ra)
    }
    function Y() {
        X((new Date).getTime())
    }
    function Z() {
        if (null == oa) {
            for (Y(), oa = W(), oa.init(pa), qa = 0; qa < pa.length; ++qa)
                pa[qa] = 0;
            qa = 0
        }
        return oa.next()
    }
    function $(a) {
        var b;
        for (b = 0; b < a.length; ++b)
            a[b] = Z()
    }
    function _() {
    }
    function aa(a, b) {
        return new c(a, b)
    }
    function ba(a, b) {
        if (b < a.length + 11)
            return alert("Message too long for RSA"), null;
        for (var d = new Array, e = a.length - 1; e >= 0 && b > 0; ) {
            var f = a.charCodeAt(e--);
            128 > f ? d[--b] = f : f > 127 && 2048 > f ? (d[--b] = 63 & f | 128, d[--b] = f >> 6 | 192) : (d[--b] = 63 & f | 128, d[--b] = f >> 6 & 63 | 128, d[--b] = f >> 12 | 224)
        }
        d[--b] = 0;
        for (var g = new _, h = new Array; b > 2; ) {
            for (h[0] = 0; 0 == h[0]; )
                g.nextBytes(h);
            d[--b] = h[0]
        }
        return d[--b] = 2, d[--b] = 0, new c(d)
    }
    function ca() {
        this.n = null, this.e = 0,
            this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
    }
    function da(a, b) {
        null != a && null != b && a.length > 0 && b.length > 0 ? (this.n = aa(a, 16), this.e = parseInt(b, 16)) : alert("Invalid RSA public key")
    }
    function ea(a) {
        return a.modPowInt(this.e, this.n)
    }
    function fa(a) {
        var b = ba(a, this.n.bitLength() + 7 >> 3);
        if (null == b)
            return null;
        var c = this.doPublic(b);
        if (null == c)
            return null;
        var d = c.toString(16);
        return 0 == (1 & d.length) ? d : "0" + d
    }
    var ga, ha = 0xdeadbeefcafe, ia = 15715070 == (16777215 & ha);
    ia && "Microsoft Internet Explorer" == navigator.appName ? (c.prototype.am = f, ga = 30) : ia && "Netscape" != navigator.appName ? (c.prototype.am = e, ga = 26) : (c.prototype.am = g, ga = 28), c.prototype.DB = ga, c.prototype.DM = (1 << ga) - 1, c.prototype.DV = 1 << ga;
    var ja = 52;
    c.prototype.FV = Math.pow(2, ja), c.prototype.F1 = ja - ga, c.prototype.F2 = 2 * ga - ja;
    var ka, la, ma = "0123456789abcdefghijklmnopqrstuvwxyz", na = new Array;
    for (ka = "0".charCodeAt(0), la = 0; 9 >= la; ++la)
        na[ka++] = la;
    for (ka = "a".charCodeAt(0), la = 10; 36 > la; ++la)
        na[ka++] = la;
    for (ka = "A".charCodeAt(0), la = 10; 36 > la; ++la)
        na[ka++] = la;
    D.prototype.convert = E, D.prototype.revert = F, D.prototype.reduce = G, D.prototype.mulTo = H, D.prototype.sqrTo = I, K.prototype.convert = L, K.prototype.revert = M, K.prototype.reduce = N, K.prototype.mulTo = P, K.prototype.sqrTo = O, c.prototype.copyTo = j, c.prototype.fromInt = k, c.prototype.fromString = m, c.prototype.clamp = n, c.prototype.dlShiftTo = u, c.prototype.drShiftTo = v, c.prototype.lShiftTo = w, c.prototype.rShiftTo = x, c.prototype.subTo = y, c.prototype.multiplyTo = z, c.prototype.squareTo = A, c.prototype.divRemTo = B, c.prototype.invDigit = J, c.prototype.isEven = Q, c.prototype.exp = R, c.prototype.toString = o, c.prototype.negate = p, c.prototype.abs = q, c.prototype.compareTo = r, c.prototype.bitLength = t, c.prototype.mod = C, c.prototype.modPowInt = S, c.ZERO = l(0), c.ONE = l(1), T.prototype.init = U, T.prototype.next = V;
    var oa, pa, qa, ra = 256;
    if (null == pa) {
        pa = new Array, qa = 0;
        var sa;
        if (window.crypto && window.crypto.getRandomValues) {
            var ta = new Uint8Array(32);
            for (window.crypto.getRandomValues(ta), sa = 0; 32 > sa; ++sa)
                pa[qa++] = ta[sa]
        }
        if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random) {
            var ua = window.crypto.random(32);
            for (sa = 0; sa < ua.length; ++sa)
                pa[qa++] = 255 & ua.charCodeAt(sa)
        }
        for (; ra > qa; )
            sa = Math.floor(65536 * Math.random()), pa[qa++] = sa >>> 8, pa[qa++] = 255 & sa;
        qa = 0, Y()
    }
    _.prototype.nextBytes = $, ca.prototype.doPublic = ea, ca.prototype.setPublic = da, ca.prototype.encrypt = fa;
    b.exports = ca
}), define("conf/inter/quicklyReg", function(require, a, b) {
    var c = require("core/io/trans")();
    c.set("fetchVcode", {url: "/reg/sendCodeBySso",type: "POST"}), c.set("phoneVcodeLogin", {url: "/reg/checksso",type: "POST"}), c.set("phoneVcodeReg", {url: "/reg/thirdReg",type: "POST"}), c.set("weiboUserLogin", {url: "/reg/loginWeiboByThird",type: "POST"}), c.set("changePwd", {url: "/reg/modifyPass",type: "POST"}), b.exports = c
}), define("tpl/ux/quicklyReg", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<!-- 第三方分享落地页登录注册弹出层 最开始是给微信做的 wx --><!-- window.$render_data.common.wx_callback newWeibo.tpl 模板输出变量 --><div id="J-wx-reg" class="quicklyRegPopup-wrapper hid"><div id="J-wx-reg-step" class="quicklyRegPopup-box"><!-- 输入手机号 --><article id="J-wx-phone" class="">';
        return a.unclosed || (b += '<a href="javascript:;" id="J-phone-cancel" class="close">关闭</a>'), b += " ", b += $render_data.common.quickly_reg_txt ? '<header class="quicklyRegPopup-tit reg-tit">' + $render_data.common.quickly_reg_txt + "</header>" : '<header class="quicklyRegPopup-tit reg-tit">只需手机号，即可玩转微博</header>', b += " ", b += $render_data.common.quickly_reg_pic ? '<section class="quicklyRegPopup-content phone-content" style="background-image:url(' + $render_data.common.quickly_reg_pic + ')">' : '<section class="quicklyRegPopup-content phone-content">', b += '<div class="input-wrapper"><p class="input-item"><input type="tel" class="" name="phone" maxlength="11" placeholder="请输入手机号"></p></div><p class="error-label hid">手机号码格式错误，仅支持大陆号码！</p><div class="input-wrapper quicklyRegPopup-vcode-item"><a href="javascript:;" id="J-phone-fetch" class="fetch-btn">获取验证码</a><p class="input-item"><input type="text" name="SMScode" maxlength="6" placeholder="请输入验证码"></p></div><p class="error-label hid">手机号码格式错误，仅支持大陆号码！</p><a href="javascript:;" id="J-phone-confirm" class="btn btnRed isDisabled">完成</a><aside class="quicklyRegPopup-action layout-box"><a href="' + $render_data.common.passport_login_url + '" class="box-col txt">微博帐号登录</a>', "weixin" == $render_data.common.sourceType ? b += '<a href="javascript:;" id="J-wx" class="box-col txt" data-url="' + $render_data.common.wx_authorize + '">微信帐号登录</a>' : $render_data.common.wx_callback && (b += '<a href="javascript:;" id="J-qq" class="box-col txt" data-url="' + $render_data.common.wx_callback + '">QQ号码登录</a>'), b += '</aside></section></article><!-- 修改密码 --><article id="J-wx-pwd" class="hid"><a href="javascript:;" id="J-pwd-cancel" class="close">关闭</a><header class="quicklyRegPopup-tit pwd-tit">微博开通成功</header><section class="quicklyRegPopup-content"><p class="pwd-label">帐号<span id="J-pwd-phone">15001088576</span></p><p class="pwd-label">密码<span id="J-pwd-default">1234567</span></p><p class="pwd-tip">为保证安全请修改密码，密码为6~16位数字或字母</p><div class="input-wrapper quicklyRegPopup-pwd-item"><p class="input-item"><input type="text" name="pwd" placeholder="请输入新密码"></p><a href="javascript:;" id="J-pwd-change" class="pwd-change-btn">隐藏</a></div><p class="error-label hid">手机号码格式错误，仅支持大陆号码！</p><a href="javascript:;" id="J-pwd-confirm" class="btn btnRed">完成</a></section></article></div><!-- 结果 --><div id="J-wx-reg-result" class="quicklyRegPopup-result hid"><i class="icon"></i><p class="result-info">密码设置成功</p><p class="result-action"><a href="javascript:;" id="J-pwd-reset" class="reset-btn">重新设置</a><a href="javascript:;" id="J-pwd-skip" class="skip-btn">跳过</a></p></div></div>'
    }
}), define("core/device/openClient", function(require, a, b) {
    function c(a) {
        f = e.extend(!0, {element: null,scheme_IOS: "sinaweibo://home",scheme_Adr: "sinaweibo://splash",downurl_IOS: "http://weibo.cn/client/download",downurl_Adr: "http://weibo.cn/client/download",showConfirm: null,timeout: 600}, a);
        var b = f.element;
        b ? (b = "string" == typeof b ? e(b) : b, b.on("click", d)) : d()
    }
    function d() {
        var a = Date.now(), b = document.createElement("iframe");
        b.src = g.indexOf("os") > 0 ? f.scheme_IOS : f.scheme_Adr, b.style.display = "none", document.body.appendChild(b);
        var c = setTimeout(function() {
            var b = Date.now();
            (!a || b - a < f.timeout + 200) && (g.indexOf("os") > 0 && f.downurl_IOS || g.indexOf("os") < 0 && f.downurl_Adr) && (window.location = g.indexOf("os") > 0 ? f.downurl_IOS : f.downurl_Adr)
        }, f.timeout);
        window.onblur = function() {
            clearTimeout(c)
        }
    }
    var e = require("jquery"), f = {}, g = navigator.userAgent.toLowerCase();
    b.exports.init = c
}), define("core/device/geo", function(require, a, b) {
    b.exports = function(a) {
        var b = $.extend({timeout: 5e3,enableHighAccuracy: !1,callback: function() {
        }}, a);
        if (navigator.geolocation)
            try {
                navigator.geolocation.getCurrentPosition(function(a) {
                    b.callback(null, a.coords)
                }, function(a) {
                    var c;
                    switch (a.code) {
                        case a.PERMISSION_DENIED:
                            c = "没有权限获取当前位置信息,请打开定位服务！";
                            break;
                        case a.POSITION_UNAVAILABLE:
                            c = "当前位置信息获取失败！";
                            break;
                        case a.TIMEOUT:
                            c = "获取位置信息超时！"
                    }
                    if (!c) {
                        var d = a.code.toString();
                        c = "未知错误，获取位置信息失败！", d && (c += "错误代码：" + d)
                    }
                    b.callback(c)
                }, {timeout: b.timeout,enableHighAccuracy: b.enableHighAccuracy})
            } catch (c) {
                b.callback(c.message)
            }
        else
            b.callback("您的浏览器不支持地理位置信息定位！")
    }
}), define("ux/toast", function(require, a, b) {
    var c = require("tpl/ux/toast"), d = $(document.createDocumentFragment());
    d.append(c());
    var e = function() {
        var a, b, c, e, f, g = $("body").height(), h = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight), i = g > h ? g : h, j = ["isLoad", "isSuccess", "isError", "isAlarm"], k = {status: 0,msg: "加载中"}, l = function(a, b) {
            p({status: 0,msg: a,time: b || null})
        }, m = function(a, b) {
            p({status: 1,msg: a,time: b || null})
        }, n = function(a, b) {
            p({status: 2,msg: a,time: b || null})
        }, o = function(a, b) {
            p({status: 3,msg: a,time: b || null})
        }, p = function(g) {
            f || ($("body").append(d), b = $("#J-toast-wrapper"), c = $("#J-toast-box"), e = $("#J-toast-txt")), f = !0, a = document.documentElement.scrollTop || document.body.scrollTop, g ? k = g : "", e.html(k.msg), c.removeClass("isLoad").addClass(j[k.status]), b.removeClass("hid").css("height", i), c.css("margin-top", (h - c.innerHeight()) / 2 + a), this.timer = setTimeout(function() {
                q()
            }, k.time || 3e3)
        }, q = function() {
            clearTimeout(this.timer), b.addClass("hid"), c.removeClass(j[k.status]).addClass("isLoad")
        }, r = function() {
            b.remove(), $(document).off("click", "#J-toast-wrapper", s)
        }, s = function(a) {
            var b = a.target || a.srcElement;
            return "J-toast-wrapper" === b.id ? (q(), !1) : void 0
        };
        return this.timer = 0, $(document).on("click", "#J-toast-wrapper", s), {show: p,close: q,distroy: r,loading: l,success: m,error: n,alarm: o}
    };
    b.exports = new e
}), define("tpl/ux/toast", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<section id="J-toast-wrapper" class="toast-wrapper hid"><p id="J-toast-box" class="toast-info isLoad"><i class="icon"></i><span id="J-toast-txt">提示文字</span></p></section>';
        return b
    }
}), define("core/lazyload", function(require, a, b) {
    function c() {
        this.timer = (new Date).getTime(), this.todo = !0, this.setPlaceholder = function() {
            this.aImg = $("img[data-src]:visible"), this.aImg.each(function() {
                this.src || (this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC")
            })
        }, this.load = function() {
            var a = (new Date).getTime(), b = document.documentElement.scrollTop || document.body.scrollTop, c = 3 * document.documentElement.clientHeight + b, d = 0, g = 0, h = this.loaded(0);
            this.setPlaceholder(), this.loaded(1).length != this.aImg.length && $.each(h, function(a, h) {
                d = f.getPageY(this) - 50, g = f.getPageY(this) + this.offsetHeight + 50;
                var i = d > b && c > d ? !0 : !1, j = g > b && c > g ? !0 : !1;
                if (i || j) {
                    var k = $(this).attr("data-src") || this.src;
                    e > 1 && (k = k.replace("/wap180/", "/wap360/")), this.src = k, $(this).removeAttr("data-src"), $(this).hasClass("loaded") || ($(this).attr("class") ? $(this).attr("class", "loaded") : $(this).addClass("loaded"))
                }
            }), this.todo = !1, this.timer = a
        }, this.loaded = function(a) {
            var b = [];
            return this.aImg.each(function() {
                var c = $(this).hasClass("loaded");
                a || c || b.push(this), a && c && b.push(this)
            }), b
        }, this.fnLoad = f.bindToObj(this, this.load), this.setPlaceholder(), this.load(), $(window).bind("scroll", this.fnLoad), $(window).bind("resize", this.fnLoad)
    }
    var d = require("brick"), e = window.devicePixelRatio, f = {bindToObj: function(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    },getPageY: function(a) {
        var b = 0;
        do
            b += a.offsetTop;
        while (a.offsetParent && "BODY" != (a = a.offsetParent).nodeName.toUpperCase());
        return b
    }}, g = function() {
        new c, d.notice.on("LOAD_IMAGE", c)
    };
    b.exports = {init: g}
}), define("ux/picShow", function(require, a, b) {
    require(["core/lib/iscroll"], function(a) {
        var c = function(b) {
            var c, d = document.body, e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, f = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight, g = document.documentElement.scrollTop || document.body.scrollTop, h = navigator.userAgent.match(/Android ([3-9][._][0-9])/), i = navigator.userAgent.match(/OS ([5-9])_\d[_\d]*/), j = [], k = {imgList: [],el: null,hidDom: document.getElementById("box"),preloadCount: 2,curPage: 1,showPage: !0,showCtrlBtn: !0,zanCfg: null,setGuide: !1,maxW: null,maxH: null,zan: function() {
            },close: function() {
            }}, l = function() {
                try {
                    return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
                } catch (a) {
                    return !1
                }
            }, m = function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }, n = function(a, b) {
                a.className += (a.className ? " " : "") + b
            }, o = function(a, b) {
                return RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
            }, p = function(a, b) {
                a.className = a.className.replace(RegExp(b + "(\\s|$)"), "")
            }, q = function(a, b, d) {
                c.style.webkitTransform = "translate(" + a + "px," + b + "px) translateZ(0)"
            }, r = function(a, b, d) {
                c.style.webkitTransition = a + " " + b + "s " + d
            }, s = function() {
                var a = k.imgList.length || 0, b = "";
                k.el || (k.el = document.createElement("div"), k.el.className = "J-slider", d.appendChild(k.el)), b += '<div id="J-slider-cont">';
                for (var g = 1; a >= g; g++)
                    b += '<div id="J-wrapper' + g + '" class="wrapper" style="-webkit-transform:translate3d(0,0,0);width:' + e + "px;height:" + f + 'px"><div id="J-scroller' + g + '" class="scroller"></div></div>';
                if (b += "</div>", k.showCtrlBtn) {
                    var j = i || h && navigator.userAgent.indexOf("UCBrowser") > 0 ? "fixed" : "absolute";
                    b += '<div class="ctrlbar" style="position:' + j + '"><a id="J-zan" href="javascript:;"><i class="icon animated"></i><span id="J-zan-text" class="zan">赞</span><span id="J-zan-count" data-num="0"></span></a><a id="J-close" href="javascript:;">关闭</a>', k.showPage && k.imgList.length > 1 && (b += '<span id="J-curPage">' + k.curPage + '</span><span id="J-pageCount">/' + a + "</span>"), b += "</div>"
                }
                k.el.innerHTML = b, k.el.style.cssText = "margin:auto;overflow:hidden;width:" + e + "px;", c = document.getElementById("J-slider-cont"), c.style.cssText = "position:relative;top:0px;left:0px;width:" + a * e + "px;height:" + f + "px", navigator.userAgent.toLowerCase().indexOf("firefox") > 0 && (document.querySelector(".ctrlbar").style.cssText = "position:absolute;top:20px;left:0;")
            }, t = function(a) {
                var b, c, d;
                for (d = 0; d < k.preloadCount; d++)
                    b = "next" == a ? k.curPage + k.preloadCount + d : k.curPage - k.preloadCount - d, c = document.getElementById("J-scroller" + b), c && "" == c.innerHTML && v(b)
            }, u = function(b) {
                var c = document.getElementById(b), d = !1, e = !1;
                navigator.userAgent.toLowerCase().indexOf("mobile") > 0 && (d = !0, e = !0);
                var f = new a(c, {zoom: !0,zoomMin: 1,zoomMax: 2,disableMouse: d,tap: "tap",scrollX: !0,scrollY: !0,mouseWheel: !0,wheelAction: "zoom",doubleTapZoom: 2,slider: k.el});
                return f.on("flick", function(a) {
                    this.hasHorizontalScroll || Math.abs(this.distY) > Math.abs(this.distX) || (this.distX > 0 ? D() : E())
                }), j.push(f), f
            }, v = function(a) {
                var b, c = document.getElementById("J-scroller" + a);
                if (c) {
                    n(c.parentNode, "loading");
                    var d = new Image;
                    d.onload = function() {
                        c && (p(c.parentNode, "loading"), c.style.lineHeight = f + "px", b.refresh(), d.style.opacity = "1")
                    }, d.src = k.imgList[a - 1], document.getElementById("J-scroller" + a).appendChild(d), b = u("J-wrapper" + a)
                }
            }, w = function(a) {
                return a > 0 && (a > 99999999 && (a = Math.floor(a / 1e8) + "亿"), a > 9999 && (a = a > 99999999 ? Math.floor(a / 1e8) + "亿" : Math.floor(a / 1e4) + "万")), a
            }, x = function(a, b) {
                b = b ? b : k.zanCfg;
                var c = document.getElementById("J-zan"), d = document.getElementById("J-zan-count"), e = document.getElementById("J-zan-text"), f = c.getElementsByTagName("i")[0], g = (m(b) ? b[k.curPage - 1] : [b], document.getElementById("J-wrapper" + k.curPage));
                if (a) {
                    b[0].disabled && !o(c, "disabled") ? n(c, "disabled") : p(c, "disabled");
                    for (var h = 1, i = b.length; i >= h; h++) {
                        var j = document.getElementById("J-wrapper" + h);
                        j.setAttribute("pid", b[h - 1].pid), j.setAttribute("zanNum", b[h - 1].like_counts), j.setAttribute("zanLiked", b[h - 1].liked)
                    }
                }
                p(f, "icon-like"), p(f, "icon-liked"), "true" == g.getAttribute("zanLiked") ? n(f, "icon-liked") : n(f, "icon-like"), d.innerHTML = w(g.getAttribute("zanNum")), parseInt(d.innerHTML) > 0 ? (e.style.display = "none", d.style.display = "") : (e.style.display = "", d.style.display = "none")
            }, y = function() {
                var a = document.createElement("div");
                a.className = "J-guide", a.style.cssText = "height:" + f + "px;line-height:" + f + "px;opacity:0;-webkit-transition:opacity 0.6s ease", a.innerHTML = '<div class="J-guide-pop"></div>', k.el.appendChild(a), setTimeout(function() {
                    a.style.opacity = "1"
                }, 1e3);
                var b = setTimeout(function() {
                    k.el.removeChild(a)
                }, 5e3);
                if (a.onclick = function() {
                    clearTimeout(b), k.el.removeChild(a)
                }, k.setGuide)
                    try {
                        l && (window.localStorage.H5_IMGZOOM_GUIDE = "1")
                    } catch (c) {
                    }
            }, z = function() {
                var a = document.getElementById("J-close"), b = "#showPic", c = location.hash;
                (!c || b.indexOf(c) < 0) && (k.close.call(a), F())
            }, A = function() {
                document.getElementById("J-close").onclick = function() {
                    k.close.call(this), F()
                }, document.getElementById("J-zan").onclick = function() {
                    o(this, "disabled") || k.zan.call(this, k.curPage)
                }, window.onorientationchange = window.onresize = function() {
                    for (var a = document.documentElement.clientHeight || window.innerHeight, b = 0; b < j.length; b++)
                        $(".J-slider .wrapper").css("height", a + "px"), $(".J-slider .scroller").css("line-height", a + "px"), j[b].refresh()
                }
            }, B = function() {
                if (m(k.imgList) || (k.imgList = [k.imgList]), k.curPage = k.curPage ? parseInt(k.curPage) : 1, !document.querySelector(".J-slider")) {
                    window.location.hash = "showPic", window.onhashchange = z;
                    var a = Math.min(document.documentElement.clientHeight, window.innerHeight);
                    f = a > 0 ? a : f, s(), k.zanCfg ? x(1) : document.getElementById("J-zan").style.display = "none", k.hidDom && (k.hidDom.style.display = "none"), q(-1 * (k.curPage - 1) * e, 0, 0), setTimeout(function() {
                        if (v(k.curPage), v(k.curPage - 1), v(k.curPage + 1), A(), k.setGuide)
                            try {
                                l() && !window.localStorage.H5_IMGZOOM_GUIDE && y()
                            } catch (a) {
                            }
                    }, 200)
                }
            }, C = function() {
                k.zanCfg && x(), k.showPage && (document.getElementById("J-curPage").innerHTML = "" + k.curPage), r("all", .3, "ease-out"), q(-1 * (k.curPage - 1) * e, 0, 0), i && i[1] && i[1] >= 8 && setTimeout(function() {
                    var a = document.getElementById("J-scroller" + k.curPage).getElementsByTagName("img");
                    a && a[0] && ("1" === a[0].style.opacity ? a[0].style.opacity = "0.999" : "0.999" === a[0].style.opacity && (a[0].style.opacity = "1"))
                }, 400)
            }, D = function() {
                k.curPage > 1 && (t("prev"), k.curPage--, C())
            }, E = function() {
                k.curPage < k.imgList.length && (t("next"), k.curPage++, C())
            }, F = function() {
                k.el && (d.removeChild(k.el), k.el = null, k.hidDom && (k.hidDom.style.display = "block", g > 0 && 0 == document.querySelectorAll("#detail-wrap").length && window.scrollTo(0, g)), "#showPic" == location.hash && history.go(-1))
            };
            for (var G in b)
                k[G] = b[G];
            return B(), {setZan: x,distroy: F,prev: D,next: E}
        };
        b.exports = c
    })
}), define("core/lib/iscroll", function(require, a, b) {
    !function(a, c, d) {
        function e(a, b) {
            this.wrapper = "string" == typeof a ? c.querySelector(a) : a, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {slider: null,zoomMin: 1,zoomMax: 2,startZoom: 1,resizeScrollbars: !0,mouseWheelSpeed: 20,snapThreshold: .334,startX: 0,startY: 0,scrollY: !0,directionLockThreshold: 5,momentum: !0,bounce: !0,bounceTime: 600,bounceEasing: "",preventDefault: !0,preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/},HWCompositing: !0,useTransition: !0,useTransform: !0};
            for (var e in b)
                this.options[e] = b[e];
            this.translateZ = this.options.HWCompositing && i.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = i.hasTransition && this.options.useTransition, this.options.useTransform = i.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? i.ease[this.options.bounceEasing] || i.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this.scale = d.min(d.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax), this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }
        function f(a, b, d) {
            var e = c.createElement("div"), f = c.createElement("div");
            return d === !0 && (e.style.cssText = "position:absolute;z-index:9999", f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), f.className = "iScrollIndicator", "h" == a ? (d === !0 && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", f.style.height = "100%"), e.className = "iScrollHorizontalScrollbar") : (d === !0 && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", f.style.width = "100%"), e.className = "iScrollVerticalScrollbar"), e.style.cssText += ";overflow:hidden", b || (e.style.pointerEvents = "none"), e.appendChild(f), e
        }
        function g(b, d) {
            this.wrapper = "string" == typeof d.el ? c.querySelector(d.el) : d.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = b, this.options = {listenX: !0,listenY: !0,interactive: !1,resize: !0,defaultScrollbars: !1,shrink: !1,fade: !1,speedRatioX: 0,speedRatioY: 0};
            for (var e in d)
                this.options[e] = d[e];
            this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (i.addEvent(this.indicator, "touchstart", this), i.addEvent(a, "touchend", this)), this.options.disablePointer || (i.addEvent(this.indicator, "MSPointerDown", this), i.addEvent(a, "MSPointerUp", this)), this.options.disableMouse || (i.addEvent(this.indicator, "mousedown", this), i.addEvent(a, "mouseup", this))), this.options.fade && (this.wrapperStyle[i.style.transform] = this.scroller.translateZ, this.wrapperStyle[i.style.transitionDuration] = i.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
        }
        var h = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(b) {
            a.setTimeout(b, 1e3 / 60)
        }, i = function() {
            function b(a) {
                return g === !1 ? !1 : "" === g ? a : g + a.charAt(0).toUpperCase() + a.substr(1)
            }
            var e = {}, f = c.createElement("div").style, g = function() {
                for (var a, b = ["t", "webkitT", "MozT", "msT", "OT"], c = 0, d = b.length; d > c; c++)
                    if (a = b[c] + "ransform", a in f)
                        return b[c].substr(0, b[c].length - 1);
                return !1
            }();
            e.getTime = Date.now || function() {
                return (new Date).getTime()
            }, e.extend = function(a, b) {
                for (var c in b)
                    a[c] = b[c]
            }, e.addEvent = function(a, b, c, d) {
                a.addEventListener(b, c, !!d)
            }, e.removeEvent = function(a, b, c, d) {
                a.removeEventListener(b, c, !!d)
            }, e.momentum = function(a, b, c, e, f, g) {
                var h, i, j = a - b, k = d.abs(j) / c;
                return g = void 0 === g ? 6e-4 : g, h = a + k * k / (2 * g) * (0 > j ? -1 : 1), i = k / g, e > h ? (h = f ? e - f / 2.5 * (k / 8) : e, j = d.abs(h - a), i = j / k) : h > 0 && (h = f ? f / 2.5 * (k / 8) : 0, j = d.abs(a) + h, i = j / k), {destination: d.round(h),duration: i}
            };
            var h = b("transform");
            return e.extend(e, {hasTransform: h !== !1,hasPerspective: b("perspective") in f,hasTouch: "ontouchstart" in a,hasPointer: navigator.msPointerEnabled,hasTransition: b("transition") in f}), e.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion), e.extend(e.style = {}, {transform: h,transitionTimingFunction: b("transitionTimingFunction"),transitionDuration: b("transitionDuration"),transitionDelay: b("transitionDelay"),transformOrigin: b("transformOrigin")}), e.hasClass = function(a, b) {
                var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
                return c.test(a.className)
            }, e.addClass = function(a, b) {
                if (!e.hasClass(a, b)) {
                    var c = a.className.split(" ");
                    c.push(b), a.className = c.join(" ")
                }
            }, e.removeClass = function(a, b) {
                if (e.hasClass(a, b)) {
                    var c = new RegExp("(^|\\s)" + b + "(\\s|$)", "g");
                    a.className = a.className.replace(c, " ")
                }
            }, e.offset = function(a) {
                for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                    b -= a.offsetLeft, c -= a.offsetTop;
                return {left: b,top: c}
            }, e.preventDefaultException = function(a, b) {
                for (var c in b)
                    if (b[c].test(a[c]))
                        return !0;
                return !1
            }, e.extend(e.eventType = {}, {touchstart: 1,touchmove: 1,touchend: 1,mousedown: 2,mousemove: 2,mouseup: 2,MSPointerDown: 3,MSPointerMove: 3,MSPointerUp: 3}), e.extend(e.ease = {}, {quadratic: {style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn: function(a) {
                return a * (2 - a)
            }},circular: {style: "cubic-bezier(0.1, 0.57, 0.1, 1)",fn: function(a) {
                return d.sqrt(1 - --a * a)
            }},back: {style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn: function(a) {
                var b = 4;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            }},bounce: {style: "",fn: function(a) {
                return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }},elastic: {style: "",fn: function(a) {
                var b = .22, c = .4;
                return 0 === a ? 0 : 1 == a ? 1 : c * d.pow(2, -10 * a) * d.sin(2 * (a - b / 4) * d.PI / b) + 1
            }}}), e.tap = function(a, b) {
                var d = c.createEvent("Event");
                d.initEvent(b, !0, !0), d.pageX = a.pageX, d.pageY = a.pageY, a.target.dispatchEvent(d)
            }, e.click = function(a) {
                var b, d = a.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(d.tagName) || (b = c.createEvent("MouseEvents"), b.initMouseEvent("click", !0, !0, a.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), b._constructed = !0, d.dispatchEvent(b))
            }, e
        }();
        e.prototype = {version: "5.1.1",_init: function() {
            this._initEvents(), this.options.zoom && this._initZoom(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },destroy: function() {
            this._initEvents(!0), this._execEvent("destroy")
        },_transitionEnd: function(a) {
            a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },_start: function(a) {
            if (!(1 != i.eventType[a.type] && 0 !== a.button || !this.enabled || this.initiated && i.eventType[a.type] !== this.initiated)) {
                !this.options.preventDefault || i.isBadAndroid || i.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
                var b, c = a.touches ? a.touches[0] : a;
                this.initiated = i.eventType[a.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = i.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, b = this.getComputedPosition(), this._translate(d.round(b.x), d.round(b.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = c.pageX, this.pointY = c.pageY, this._execEvent("beforeScrollStart")
            }
        },_move: function(a) {
            if (this.enabled && i.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b, c, e, f, g = a.touches ? a.touches[0] : a, h = g.pageX - this.pointX, j = g.pageY - this.pointY, k = i.getTime();
                if (this.pointX = g.pageX, this.pointY = g.pageY, this.distX += h, this.distY += j, e = d.abs(this.distX), f = d.abs(this.distY), !(10 > e && 10 > f)) {
                    if (this.directionLocked || this.options.freeScroll || (this.directionLocked = e > f + this.options.directionLockThreshold ? "h" : f >= e + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)
                            a.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        j = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)
                            a.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        h = 0
                    }
                    h = this.hasHorizontalScroll ? h : 0, j = this.hasVerticalScroll ? j : 0, b = this.x + h, c = this.y + j, (b > 0 || b < this.maxScrollX) && (b = this.options.bounce ? this.x + h / 3 : b > 0 ? 0 : this.maxScrollX), (c > 0 || c < this.maxScrollY) && (c = this.options.bounce ? this.y + j / 3 : c > 0 ? 0 : this.maxScrollY), this.directionX = h > 0 ? -1 : 0 > h ? 1 : 0, this.directionY = j > 0 ? -1 : 0 > j ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(b, c), k - this.startTime > 300 && (this.startTime = k, this.startX = this.x, this.startY = this.y)
                }
            }
        },_end: function(a) {
            if (this.enabled && i.eventType[a.type] === this.initiated) {
                this.options.preventDefault && !i.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
                var b, c, e = a.changedTouches ? a.changedTouches[0] : a, f = i.getTime() - this.startTime, g = d.round(this.x), h = d.round(this.y), j = d.abs(g - this.startX), k = d.abs(h - this.startY), l = 0, m = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = i.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(g, h), !this.moved) {
                        if (this.doubleTapTimer && this.options.zoom)
                            clearTimeout(this.doubleTapTimer), this.doubleTapTimer = null, this.options.doubleTapZoom && this.zoom(this.scale > 1 ? 1 : this.options.doubleTapZoom, e.pageX, e.pageY);
                        else {
                            var n = this;
                            this.doubleTapTimer = setTimeout(function() {
                                n.doubleTapTimer = null, n.options.tap && i.tap(a, n.options.tap), n.options.click && i.click(a)
                            }, this.options.zoom ? 250 : 0)
                        }
                        return void this._execEvent("scrollCancel")
                    }
                    if (this._events.flick && 200 > f && 100 > j && 100 > k)
                        return void this._execEvent("flick");
                    if (this.options.momentum && 300 > f && (b = this.hasHorizontalScroll ? i.momentum(this.x, this.startX, f, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {destination: g,duration: 0}, c = this.hasVerticalScroll ? i.momentum(this.y, this.startY, f, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {destination: h,duration: 0}, g = b.destination, h = c.destination, l = d.max(b.duration, c.duration), this.isInTransition = 1), this.options.snap) {
                        var o = this._nearestSnap(g, h);
                        this.currentPage = o, l = this.options.snapSpeed || d.max(d.max(d.min(d.abs(g - o.x), 1e3), d.min(d.abs(h - o.y), 1e3)), 300), g = o.x, h = o.y, this.directionX = 0, this.directionY = 0, m = this.options.bounceEasing
                    }
                    return g != this.x || h != this.y ? ((g > 0 || g < this.maxScrollX || h > 0 || h < this.maxScrollY) && (m = i.ease.quadratic), void this.scrollTo(g, h, l, m)) : void this._execEvent("scrollEnd")
                }
            }
        },_resize: function() {
            var a = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                a.refresh()
            }, this.options.resizePolling)
        },resetPosition: function(a) {
            var b = this.x, c = this.y;
            return a = a || 0, !this.hasHorizontalScroll || this.x > 0 ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY), b == this.x && c == this.y ? !1 : (this.scrollTo(b, c, a, this.options.bounceEasing), !0)
        },disable: function() {
            this.enabled = !1
        },enable: function() {
            this.enabled = !0
        },refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = d.round(this.scroller.offsetWidth * this.scale), this.scrollerHeight = d.round(this.scroller.offsetHeight * this.scale), this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = i.offset(this.wrapper), this.options.slider && (this.wrapperOffset = i.offset(this.options.slider)), this._execEvent("refresh"), this.resetPosition()
        },on: function(a, b) {
            this._events[a] || (this._events[a] = []), this._events[a].push(b)
        },off: function(a, b) {
            if (this._events[a]) {
                var c = this._events[a].indexOf(b);
                c > -1 && this._events[a].splice(c, 1)
            }
        },_execEvent: function(a) {
            if (this._events[a]) {
                var b = 0, c = this._events[a].length;
                if (c)
                    for (; c > b; b++)
                        this._events[a][b].apply(this, [].slice.call(arguments, 1))
            }
        },scrollBy: function(a, b, c, d) {
            a = this.x + a, b = this.y + b, c = c || 0, this.scrollTo(a, b, c, d)
        },scrollTo: function(a, b, c, d) {
            d = d || i.ease.circular, this.isInTransition = this.options.useTransition && c > 0, !c || this.options.useTransition && d.style ? (this._transitionTimingFunction(d.style), this._transitionTime(c), this._translate(a, b)) : this._animate(a, b, c, d.fn)
        },scrollToElement: function(a, b, c, e, f) {
            if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
                var g = i.offset(a);
                g.left -= this.wrapperOffset.left, g.top -= this.wrapperOffset.top, c === !0 && (c = d.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), e === !0 && (e = d.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), g.left -= c || 0, g.top -= e || 0, g.left = g.left > 0 ? 0 : g.left < this.maxScrollX ? this.maxScrollX : g.left, g.top = g.top > 0 ? 0 : g.top < this.maxScrollY ? this.maxScrollY : g.top, b = void 0 === b || null === b || "auto" === b ? d.max(d.abs(this.x - g.left), d.abs(this.y - g.top)) : b, this.scrollTo(g.left, g.top, b, f)
            }
        },_transitionTime: function(a) {
            if (a = a || 0, this.scrollerStyle[i.style.transitionDuration] = a + "ms", !a && i.isBadAndroid && (this.scrollerStyle[i.style.transitionDuration] = "0.001s"), this.indicators)
                for (var b = this.indicators.length; b--; )
                    this.indicators[b].transitionTime(a)
        },_transitionTimingFunction: function(a) {
            if (this.scrollerStyle[i.style.transitionTimingFunction] = a, this.indicators)
                for (var b = this.indicators.length; b--; )
                    this.indicators[b].transitionTimingFunction(a)
        },_translate: function(a, b) {
            if (this.options.useTransform ? this.scrollerStyle[i.style.transform] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ") " + this.translateZ : (a = d.round(a),
                b = d.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px"), this.x = a, this.y = b, this.indicators)
                for (var c = this.indicators.length; c--; )
                    this.indicators[c].updatePosition()
        },_initEvents: function(b) {
            var c = b ? i.removeEvent : i.addEvent, d = this.options.bindToWrapper ? this.wrapper : a;
            c(a, "orientationchange", this), c(a, "resize", this), this.options.disableMouse || (c(this.wrapper, "mousedown", this), c(d, "mousemove", this), c(d, "mousecancel", this), c(d, "mouseup", this)), i.hasPointer && !this.options.disablePointer && (c(this.wrapper, "MSPointerDown", this), c(d, "MSPointerMove", this), c(d, "MSPointerCancel", this), c(d, "MSPointerUp", this)), i.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this), c(d, "touchmove", this), c(d, "touchcancel", this), c(d, "touchend", this)), c(this.scroller, "transitionend", this), c(this.scroller, "webkitTransitionEnd", this), c(this.scroller, "oTransitionEnd", this), c(this.scroller, "MSTransitionEnd", this)
        },getComputedPosition: function() {
            var b, c, d = a.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (d = d[i.style.transform].split(")")[0].split(", "), b = +(d[12] || d[4]), c = +(d[13] || d[5])) : (b = +d.left.replace(/[^-\d.]/g, ""), c = +d.top.replace(/[^-\d.]/g, "")), {x: b,y: c}
        },_initIndicators: function() {
            function a(a) {
                for (var b = h.indicators.length; b--; )
                    a.call(h.indicators[b])
            }
            var b, c = this.options.interactiveScrollbars, d = "string" != typeof this.options.scrollbars, e = [], h = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (b = {el: f("v", c, this.options.scrollbars),interactive: c,defaultScrollbars: !0,customStyle: d,resize: this.options.resizeScrollbars,shrink: this.options.shrinkScrollbars,fade: this.options.fadeScrollbars,listenX: !1}, this.wrapper.appendChild(b.el), e.push(b)), this.options.scrollX && (b = {el: f("h", c, this.options.scrollbars),interactive: c,defaultScrollbars: !0,customStyle: d,resize: this.options.resizeScrollbars,shrink: this.options.shrinkScrollbars,fade: this.options.fadeScrollbars,listenY: !1}, this.wrapper.appendChild(b.el), e.push(b))), this.options.indicators && (e = e.concat(this.options.indicators));
            for (var i = e.length; i--; )
                this.indicators.push(new g(this, e[i]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                a(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                a(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                a(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                a(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                a(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                a(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },_initZoom: function() {
            this.scrollerStyle[i.style.transformOrigin] = "0 0"
        },_zoomStart: function(a) {
            var b = d.abs(a.touches[0].pageX - a.touches[1].pageX), c = d.abs(a.touches[0].pageY - a.touches[1].pageY);
            this.touchesDistanceStart = d.sqrt(b * b + c * c), this.startScale = this.scale, this.originX = d.abs(a.touches[0].pageX + a.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x, this.originY = d.abs(a.touches[0].pageY + a.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y, this._execEvent("zoomStart")
        },_zoom: function(a) {
            if (this.enabled && i.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b, c, e, f = d.abs(a.touches[0].pageX - a.touches[1].pageX), g = d.abs(a.touches[0].pageY - a.touches[1].pageY), h = d.sqrt(f * f + g * g), j = 1 / this.touchesDistanceStart * h * this.startScale;
                this.scaled = !0, j < this.options.zoomMin ? j = .5 * this.options.zoomMin * d.pow(2, j / this.options.zoomMin) : j > this.options.zoomMax && (j = 2 * this.options.zoomMax * d.pow(.5, this.options.zoomMax / j)), b = j / this.startScale, c = this.originX - this.originX * b + this.startX, e = this.originY - this.originY * b + this.startY, this.scale = j, this.scrollTo(c, e, 0)
            }
        },_zoomEnd: function(a) {
            if (this.enabled && i.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b, c, d;
                this.isInTransition = 0, this.initiated = 0, this.scale > this.options.zoomMax ? this.scale = this.options.zoomMax : this.scale < this.options.zoomMin && (this.scale = this.options.zoomMin), this.refresh(), d = this.scale / this.startScale, b = this.originX - this.originX * d + this.startX, c = this.originY - this.originY * d + this.startY, b > 0 ? b = 0 : b < this.maxScrollX && (b = this.maxScrollX), c > 0 ? c = 0 : c < this.maxScrollY && (c = this.maxScrollY), (this.x != b || this.y != c) && this.scrollTo(b, c, this.options.bounceTime), this.scaled = !1, this._execEvent("zoomEnd")
            }
        },zoom: function(a, b, c, d) {
            if (a < this.options.zoomMin ? a = this.options.zoomMin : a > this.options.zoomMax && (a = this.options.zoomMax), a != this.scale) {
                var e = a / this.scale;
                b = void 0 === b ? this.wrapperWidth / 2 : b, c = void 0 === c ? this.wrapperHeight / 2 : c, d = void 0 === d ? 300 : d, b = b + this.wrapperOffset.left - this.x, c = c + this.wrapperOffset.top - this.y, b = b - b * e + this.x, c = c - c * e + this.y, this.scale = a, this.refresh(), b > 0 ? b = 0 : b < this.maxScrollX && (b = this.maxScrollX), c > 0 ? c = 0 : c < this.maxScrollY && (c = this.maxScrollY), this.scrollTo(b, c, d)
            }
        },_wheelZoom: function(a) {
            var b, c, e = this;
            if (clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                e._execEvent("zoomEnd")
            }, 400), "deltaX" in a)
                b = -a.deltaY / d.abs(a.deltaY);
            else if ("wheelDeltaX" in a)
                b = a.wheelDeltaY / d.abs(a.wheelDeltaY);
            else if ("wheelDelta" in a)
                b = a.wheelDelta / d.abs(a.wheelDelta);
            else {
                if (!("detail" in a))
                    return;
                b = -a.detail / d.abs(a.wheelDelta)
            }
            c = this.scale + b / 5, this.zoom(c, a.pageX, a.pageY, 0)
        },_initWheel: function() {
            i.addEvent(this.wrapper, "wheel", this), i.addEvent(this.wrapper, "mousewheel", this), i.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                i.removeEvent(this.wrapper, "wheel", this), i.removeEvent(this.wrapper, "mousewheel", this), i.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },_wheel: function(a) {
            if (this.enabled) {
                a.preventDefault(), a.stopPropagation();
                var b, c, e, f, g = this;
                if (void 0 === this.wheelTimeout && g._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                    g._execEvent("scrollEnd"), g.wheelTimeout = void 0
                }, 400), "deltaX" in a)
                    b = -a.deltaX, c = -a.deltaY;
                else if ("wheelDeltaX" in a)
                    b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed, c = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in a)
                    b = c = a.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in a))
                        return;
                    b = c = -a.detail / 3 * this.options.mouseWheelSpeed
                }
                if (b *= this.options.invertWheelDirection, c *= this.options.invertWheelDirection, this.hasVerticalScroll || (b = c, c = 0), this.options.snap)
                    return e = this.currentPage.pageX, f = this.currentPage.pageY, b > 0 ? e-- : 0 > b && e++, c > 0 ? f-- : 0 > c && f++, void this.goToPage(e, f);
                e = this.x + d.round(this.hasHorizontalScroll ? b : 0), f = this.y + d.round(this.hasVerticalScroll ? c : 0), e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), f > 0 ? f = 0 : f < this.maxScrollY && (f = this.maxScrollY), this.scrollTo(e, f, 0)
            }
        },_initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var a, b, c, e, f, g, h = 0, i = 0, j = 0, k = this.options.snapStepX || this.wrapperWidth, l = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (c = d.round(k / 2), e = d.round(l / 2); j > -this.scrollerWidth; ) {
                            for (this.pages[h] = [], a = 0, f = 0; f > -this.scrollerHeight; )
                                this.pages[h][a] = {x: d.max(j, this.maxScrollX),y: d.max(f, this.maxScrollY),width: k,height: l,cx: j - c,cy: f - e}, f -= l, a++;
                            j -= k, h++
                        }
                    else
                        for (g = this.options.snap, a = g.length, b = -1; a > h; h++)
                            (0 === h || g[h].offsetLeft <= g[h - 1].offsetLeft) && (i = 0, b++), this.pages[i] || (this.pages[i] = []), j = d.max(-g[h].offsetLeft, this.maxScrollX), f = d.max(-g[h].offsetTop, this.maxScrollY), c = j - d.round(g[h].offsetWidth / 2), e = f - d.round(g[h].offsetHeight / 2), this.pages[i][b] = {x: j,y: f,width: g[h].offsetWidth,height: g[h].offsetHeight,cx: c,cy: e}, j > this.maxScrollX && i++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function() {
                var a = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.x - this.startX), 1e3), d.min(d.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        },_nearestSnap: function(a, b) {
            if (!this.pages.length)
                return {x: 0,y: 0,pageX: 0,pageY: 0};
            var c = 0, e = this.pages.length, f = 0;
            if (d.abs(a - this.absStartX) < this.snapThresholdX && d.abs(b - this.absStartY) < this.snapThresholdY)
                return this.currentPage;
            for (a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX), b > 0 ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY); e > c; c++)
                if (a >= this.pages[c][0].cx) {
                    a = this.pages[c][0].x;
                    break
                }
            for (e = this.pages[c].length; e > f; f++)
                if (b >= this.pages[0][f].cy) {
                    b = this.pages[0][f].y;
                    break
                }
            return c == this.currentPage.pageX && (c += this.directionX, 0 > c ? c = 0 : c >= this.pages.length && (c = this.pages.length - 1), a = this.pages[c][0].x), f == this.currentPage.pageY && (f += this.directionY, 0 > f ? f = 0 : f >= this.pages[0].length && (f = this.pages[0].length - 1), b = this.pages[0][f].y), {x: a,y: b,pageX: c,pageY: f}
        },goToPage: function(a, b, c, e) {
            e = e || this.options.bounceEasing, a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0), b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);
            var f = this.pages[a][b].x, g = this.pages[a][b].y;
            c = void 0 === c ? this.options.snapSpeed || d.max(d.max(d.min(d.abs(f - this.x), 1e3), d.min(d.abs(g - this.y), 1e3)), 300) : c, this.currentPage = {x: f,y: g,pageX: a,pageY: b}, this.scrollTo(f, g, c, e)
        },next: function(a, b) {
            var c = this.currentPage.pageX, d = this.currentPage.pageY;
            c++, c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++), this.goToPage(c, d, a, b)
        },prev: function(a, b) {
            var c = this.currentPage.pageX, d = this.currentPage.pageY;
            c--, 0 > c && this.hasVerticalScroll && (c = 0, d--), this.goToPage(c, d, a, b)
        },_initKeys: function(b) {
            var c, d = {pageUp: 33,pageDown: 34,end: 35,home: 36,left: 37,up: 38,right: 39,down: 40};
            if ("object" == typeof this.options.keyBindings)
                for (c in this.options.keyBindings)
                    "string" == typeof this.options.keyBindings[c] && (this.options.keyBindings[c] = this.options.keyBindings[c].toUpperCase().charCodeAt(0));
            else
                this.options.keyBindings = {};
            for (c in d)
                this.options.keyBindings[c] = this.options.keyBindings[c] || d[c];
            i.addEvent(a, "keydown", this), this.on("destroy", function() {
                i.removeEvent(a, "keydown", this)
            })
        },_key: function(a) {
            if (this.enabled) {
                var b, c = this.options.snap, e = c ? this.currentPage.pageX : this.x, f = c ? this.currentPage.pageY : this.y, g = i.getTime(), h = this.keyTime || 0, j = .25;
                switch (this.options.useTransition && this.isInTransition && (b = this.getComputedPosition(), this._translate(d.round(b.x), d.round(b.y)), this.isInTransition = !1), this.keyAcceleration = 200 > g - h ? d.min(this.keyAcceleration + j, 50) : 0, a.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? e += c ? 1 : this.wrapperWidth : f += c ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? e -= c ? 1 : this.wrapperWidth : f -= c ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        e = c ? this.pages.length - 1 : this.maxScrollX, f = c ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        e = 0, f = 0;
                        break;
                    case this.options.keyBindings.left:
                        e += c ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        f += c ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        e -= c ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        f -= c ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (c)
                    return void this.goToPage(e, f);
                e > 0 ? (e = 0, this.keyAcceleration = 0) : e < this.maxScrollX && (e = this.maxScrollX, this.keyAcceleration = 0), f > 0 ? (f = 0, this.keyAcceleration = 0) : f < this.maxScrollY && (f = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(e, f, 0), this.keyTime = g
            }
        },_animate: function(a, b, c, d) {
            function e() {
                var m, n, o, p = i.getTime();
                return p >= l ? (f.isAnimating = !1, f._translate(a, b), void (f.resetPosition(f.options.bounceTime) || f._execEvent("scrollEnd"))) : (p = (p - k) / c, o = d(p), m = (a - g) * o + g, n = (b - j) * o + j, f._translate(m, n), void (f.isAnimating && h(e)))
            }
            var f = this, g = this.x, j = this.y, k = i.getTime(), l = k + c;
            this.isAnimating = !0, e()
        },handleEvent: function(a) {
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                case "mousedown":
                    this._start(a), this.options.zoom && a.touches && a.touches.length > 1 && this._zoomStart(a);
                    break;
                case "touchmove":
                case "MSPointerMove":
                case "mousemove":
                    if (this.options.zoom && a.touches && a.touches[1])
                        return void this._zoom(a);
                    this._move(a);
                    break;
                case "touchend":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "MSPointerCancel":
                case "mousecancel":
                    if (this.scaled)
                        return void this._zoomEnd(a);
                    this._end(a);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(a);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    if ("zoom" == this.options.wheelAction)
                        return void this._wheelZoom(a);
                    this._wheel(a);
                    break;
                case "keydown":
                    this._key(a)
            }
        }}, g.prototype = {handleEvent: function(a) {
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                case "mousedown":
                    this._start(a);
                    break;
                case "touchmove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(a);
                    break;
                case "touchend":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(a)
            }
        },destroy: function() {
            this.options.interactive && (i.removeEvent(this.indicator, "touchstart", this), i.removeEvent(this.indicator, "MSPointerDown", this), i.removeEvent(this.indicator, "mousedown", this), i.removeEvent(a, "touchmove", this), i.removeEvent(a, "MSPointerMove", this), i.removeEvent(a, "mousemove", this), i.removeEvent(a, "touchend", this), i.removeEvent(a, "MSPointerUp", this), i.removeEvent(a, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },_start: function(b) {
            var c = b.touches ? b.touches[0] : b;
            b.preventDefault(), b.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = c.pageX, this.lastPointY = c.pageY, this.startTime = i.getTime(), this.options.disableTouch || i.addEvent(a, "touchmove", this), this.options.disablePointer || i.addEvent(a, "MSPointerMove", this), this.options.disableMouse || i.addEvent(a, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },_move: function(a) {
            {
                var b, c, d, e, f = a.touches ? a.touches[0] : a;
                i.getTime()
            }
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, b = f.pageX - this.lastPointX, this.lastPointX = f.pageX, c = f.pageY - this.lastPointY, this.lastPointY = f.pageY, d = this.x + b, e = this.y + c, this._pos(d, e), a.preventDefault(), a.stopPropagation()
        },_end: function(b) {
            if (this.initiated) {
                if (this.initiated = !1, b.preventDefault(), b.stopPropagation(), i.removeEvent(a, "touchmove", this), i.removeEvent(a, "MSPointerMove", this), i.removeEvent(a, "mousemove", this), this.scroller.options.snap) {
                    var c = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), e = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.scroller.x - c.x), 1e3), d.min(d.abs(this.scroller.y - c.y), 1e3)), 300);
                    (this.scroller.x != c.x || this.scroller.y != c.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = c, this.scroller.scrollTo(c.x, c.y, e, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },transitionTime: function(a) {
            a = a || 0, this.indicatorStyle[i.style.transitionDuration] = a + "ms", !a && i.isBadAndroid && (this.indicatorStyle[i.style.transitionDuration] = "0.001s")
        },transitionTimingFunction: function(a) {
            this.indicatorStyle[i.style.transitionTimingFunction] = a
        },refresh: function() {
            this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (i.addClass(this.wrapper, "iScrollBothScrollbars"), i.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (i.removeClass(this.wrapper, "iScrollBothScrollbars"), i.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = d.max(d.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = d.max(d.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },updatePosition: function() {
            var a = this.options.listenX && d.round(this.sizeRatioX * this.scroller.x) || 0, b = this.options.listenY && d.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = d.max(this.indicatorWidth + a, 8), this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = d.max(this.indicatorWidth - (a - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = d.max(this.indicatorHeight + 3 * b, 8), this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = d.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = a, this.y = b, this.scroller.options.useTransform ? this.indicatorStyle[i.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px", this.indicatorStyle.top = b + "px")
        },_pos: function(a, b) {
            0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX), 0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY), a = this.options.listenX ? d.round(a / this.sizeRatioX) : this.scroller.x, b = this.options.listenY ? d.round(b / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(a, b)
        },fade: function(a, b) {
            if (!b || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var c = a ? 250 : 500, d = a ? 0 : 300;
                a = a ? "1" : "0", this.wrapperStyle[i.style.transitionDuration] = c + "ms", this.fadeTimeout = setTimeout(function(a) {
                    this.wrapperStyle.opacity = a, this.visible = +a
                }.bind(this, a), d)
            }
        }}, e.utils = i, "undefined" != typeof b && b.exports ? b.exports = e : a.IScroll = e
    }(window, document, Math)
}), define("tpl/mod/pagelist", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<section class="mod-pagelist card-combine"><div data-node="cardList" class="card-list"></div>';
        if (0 == a.loadMore) {
            if (b += " ", a.maxPage > 1) {
                var c = 5;
                p = 0, b += '<div class="line-around layout-box mod-pagination" data-node="turnPage" style="display:none"><a href="javascript:;" class="btn box-col line-right ', a.page <= 1 && (b += "isDisabled"), b += '" data-node="prevPage">上一页</a><a href="javascript:;" class="box-col"><div class="select-wrapper layout-box box-center-h"><select name="" id="" data-node="pageSelect">';
                for (var d = 1; d <= a.maxPage; d++)
                    b += " ", d % c == 0 && (++p, b += '<option value="' + Math.ceil(d / c) + '"', d == a.page && (b += ' selected="selected"'), b += ">第" + Math.ceil(d / c) + "页</option>"), b += " ";
                b += " ", p < Math.ceil(a.maxPage / c) && (b += '<option value="' + Math.ceil(d / c) + '"', d == a.page && (b += ' selected="selected"'), b += ">第" + Math.ceil(a.maxPage / c) + "页</option>"), b += '</select><span class="select-txt" data-node="curPage" data-curpage="' + Math.ceil(a.page / c) + '">第' + (Math.ceil(a.page / c) || 1) + '页</span><span class="plus"><i class="icon-font icon-font-arrow-down"></i></span></div></a><a href="javascript:;" class="btn box-col line-left ', a.page >= a.maxPage && (b += "isDisabled"), b += '" data-node="nextPage">下一页</a></div><div class="loading" data-node="more"></div>'
            }
            b += " "
        } else
            b += " ", a.maxPage > 1 && (b += '<div class="loading" data-node="more"></div>'), b += " ";
        return b += "</section>"
    }
}), define("mod/pagelist", function(require, a, b) {
    var c = require("core/io/trans")(), d = c.json, e = $render_data.common, f = !e.isLogin && 2 == e.seeLevel && e.showPopLogin, g = require("brick");
    b.exports = function(a, b, c) {
        function e(a, c) {
            var e = b.url;
            if (!l) {
                if (l = 1, f && 1 == w)
                    return g.notice.trigger("AccessDenied"), void m.find('[data-node="more"]').remove();
                c && t ? "next" == c ? u && (e += "&next_cursor=" + u) : "prev" == c && j && (e += "&previous_cursor=" + j + "&next_cursor=" + t) : (k = k ? k : b.next_cursor, k && (e += "&next_cursor=" + k)), a ? "next" == c ? v = Math.abs(w - a) : "prev" == c && (v = a) : v = 1, w = a ? a : w + 1, e += s.length > 0 && t ? "&page=" + v : "&page=" + w, d({url: e,dataType: "json",log: !0,success: function(a) {
                    l = 0;
                    var c, d = {}, e = m.find('[data-node="cardList"]').first();
                    if (1 == e.children().length && e.children().first().hasClass("card11") && (e = e.find('[data-node="cardList"]')), "[object Array]" === Object.prototype.toString.call(a))
                        c = a;
                    else {
                        if (!a.ok) {
                            var f = m.find('[data-node="more"]');
                            return $(document).off("scroll", i), void f.remove()
                        }
                        c = a.cards
                    }
                    if (c[0] && "mod/empty" == c[0].mod_type)
                        return $(document).off("scroll", i), void m.find('[data-node="more"]').remove();
                    if (c[0] && "mod/pagelist" == c[0].mod_type && (d = c[0], c = c[0].card_group), g.render(e[0], c), g.notice.trigger("LOAD_IMAGE"), g.notice.trigger("DOM_FILTER", a), s.length > 0 && Math.ceil(b.maxPage / x) > 1)
                        w % x == 0 ? (s.show(), r.hide()) : (r.show(), s.hide());
                    else if (w == b.maxPage) {
                        var f = m.find('[data-node="more"]');
                        $(document).off("scroll", i), f.remove()
                    }
                    s.length > 0 && x > 1 ? (d.next_cursor && (k = d.next_cursor, w % x == 0 && (u = d.next_cursor)), d.previous_cursor && w % x == 1 && (j = d.previous_cursor)) : (d.next_cursor && (k = u = d.next_cursor), d.previous_cursor && (j = d.previous_cursor)), b.maxPage === w && g.notice.trigger("PAGELIST_DONE")
                }})
            }
        }
        function h(a) {
            var c, d, f = $(this), g = parseInt(q.attr("data-curpage"));
            if (!f.hasClass("isDisabled")) {
                switch (f.attr("data-node")) {
                    case "pageSelect":
                        c = p.val(), d = c > g ? "next" : "prev";
                        break;
                    case "nextPage":
                        c = g + 1, d = "next";
                        break;
                    case "prevPage":
                        c = g - 1, d = "prev"
                }
                q.attr("data-curpage", c).html("第" + c + "页"), p.val(c), m.find('[data-node="cardList"]').html(""), 1 >= c ? o.addClass("isDisabled") : o.removeClass("isDisabled"), c >= Math.ceil(b.maxPage / x) ? n.addClass("isDisabled") : n.removeClass("isDisabled"), r.show(), s.hide(), e((c - 1) * x + 1, d)
            }
        }
        function i() {
            r.is(":visible") && $(window).scrollTop() + window.innerHeight - r.offset().top > -200 && e()
        }
        var j, k, l, m = $(a), n = m.find('[data-node="nextPage"]'), o = m.find('[data-node="prevPage"]'), p = m.find('[data-node="pageSelect"]'), q = m.find('[data-node="curPage"]'), r = m.find('[data-node="more"]'), s = m.find('[data-node="turnPage"]'), t = b.previous_cursor, u = b.next_cursor, v = 1, w = 1, x = s.length > 0 ? 5 : 1;
        return b.maxPage > 1 && ($(document).on("scroll", i), i(), s.length > 0 && x > 1 && (p.on("change", h), n.on("click", h), o.on("click", h))), {destroy: function() {
            $(document).off("scroll", i)
        }}
    }
}), define("tpl/mod/message/item", function(require, a, b) {
    var c = require("core/tplFunc");
    b.exports = function(a) {
        var b = '<!--消息箱/条目--><div class="card card25 line-around module-message-item';
        return a.type && (b += " " + a.type), b += '" data-act-type="hover"><div class="layout-box media-graphic"><a href="' + c.href(a.type ? a.scheme : "/u/" + a.user.id) + '" class="mod-media"><div class="media-main">', a.user && (b += '<img src="' + a.user.avatar_large + '" height="48" width="48">', b += function() {
            var b = require("tpl/common/verified");
            return b(a.user)
        }(), b += " "), b += " ", a.type && (b += '<div class="' + a.type + '"><i class="iconf iconf_msgcenter_' + a.type + '"></i></div>'), b += '</div></a><a href="' + c.href(a) + '"class="box-col item-list">', a.title ? b += '<div class="item-main txt-xl mct-a txt-cut">' + a.title + "</div>" : a.user && (b += '<div class="item-main txt-xl mct-a txt-cut">' + a.user.screen_name + "</div>"), b += " ", a.text && (b += '<div class="item-minor txt-m mct-d txt-cut">' + a.text + "</div>"), b += '</a><span class="plus plus-m">', a.created_at && (b += '<span class="txt-s mct-d time">' + a.created_at + "</span>"), b += " ", a.unread ? b += '<i class="bubble bubble-dot-red">' + a.unread + "</i>" : a.display_arrow && (b += '<i class="icon-font icon-font-arrow-right txt-m"></i>'), b += "</span></div></div>"
    }
}), define("mod/message/item", function(require, a, b) {
    b.exports = function(a, b) {
    }
}), define("tpl/mod/search", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<article class="search-wrapper';
        if ("home" == a.type && (b += " forHome"), b += '">', "nav" == a.type) {
            if (b += '<header class="nav layout-box">', a.tabs) {
                b += " ";
                var c = a.tabs;
                if (c)
                    for (var d, e = -1, f = c.length - 1; f > e; )
                        d = c[e += 1], b += '<a href="javascript:;" data-type="' + d.type + '" data-act-type="hover" class="item box-col', 0 == e && (b += " isActive"), b += '">' + d.txt + "</a>";
                b += " "
            } else
                b += '<a href="javascript:;" data-type="all" data-act-type="hover" class="item box-col isActive">全部</a><a href="javascript:;" data-type="user" data-act-type="hover" class="item box-col">用户</a><a href="javascript:;" data-type="wb" data-act-type="hover" class="item box-col">微博</a>';
            b += "</header>"
        }
        return b += '<form action="' + (a.url || "/searchs/result") + '" class="search-box layout-box" node-type="search-box" method="' + (a.method || "get") + '"><input type="hidden" name="type" value="' + (a.tabs && a.tabs[0] && a.tabs[0].type || "all") + '"><div class="input-wrapper box-col"><span class="fl type iconf iconf_navbar_search" data-act-type="hover"', ("home" == a.type || a.pop_type) && (b += ' node-type="type-list"'), b += '></span><span class="fr clear hid" node-type="clear"></span><div class="input-box"><input name="queryVal" class="search', "nav" == a.type && (b += " forSearch"), b += '" type="text" node-type="search" placeholder="' + (a.placeholder || "搜索") + '" autocomplete="off"></div></div><span node-type="btn" data-act-type="hover" class="btn-txt">' + (a.btn_txt || "取消") + "</span></form></article>"
    }
}), define("mod/search", function(require, a, b) {
    b.exports = function(a, b, c) {
        var d, e = $(a), f = e.find("[node-type=search-box]"), g = e.find("[name=type]"), h = e.find("[name=queryVal]"), i = e.find("[node-type=clear]"), j = e.find("[node-type=btn]"), k = b.btn_txt || "取消", l = b.btn_txt_1 || "搜索", m = require("core/io/trans")().json, n = require("brick"), o = n.notice, p = $('<section id="J-ajax-result" class="hid"></seciton>'), q = !!$("#J-ajax-result").size();
        if (h.on("click", function() {
            f.addClass("isReady")
        }), h.on("input", function() {
            "" != h.val() && (j.removeClass("isCancel").html(l), i.removeClass("hid"))
        }), h.on("focus", function() {
            "" == h.val() && (f.addClass("isReady"), j.addClass("isCancel").html(k), i.addClass("hid"), d && d.size() && d.hide())
        }), i.on("click", function() {
            h.val("").focus()
        }), j.on("click", function() {
            var a = String.prototype.trim.call(h.val());
            "" === a ? (f.removeClass("isReady"), q && p.addClass("hid").html(""), o.trigger("SearchClose", p)) : "ajax" == b.type ? (q || (e.after(p), q = !0), o.trigger("SearchAjaxResult", [a, p])) : f.submit()
        }), f.on("submit", function(a) {
            var b = String.prototype.trim.call(h.val());
            return "" === b ? !1 : !0
        }), !b.close_complete || 1 != b.close_complete) {
            var r = require("ux/autoComplete");
            d = $('<div node-type="J-result-list" class="J-result-list" style="display:none;"></div>'), $("[node-type=J-result-list]").size() || e.after(d), suggest = new r({inputEle: h[0],resultEle: d[0],onHideItemList: function() {
                "" == h.val() ? j.addClass("isCancel").html(k) : j.removeClass("isCancel").html(l)
            },formateResult: function(a, b) {
                "" == h.val() ? j.addClass("isCancel").html(k) : j.removeClass("isCancel").html(l);
                for (var c = 1, d = "", e = 0; e < b.length; e++)
                    d += '<div class="item-info-page" data-index="' + c++ + '"><p>' + b[e] + "</p></div>";
                return d
            },onclickItem: function(a, b) {
                var c = a.target;
                "p" == c.nodeName.toLowerCase() && (c.parentNode.className = "item-info-page cur", suggest.setValueStatus(c.innerHTML), f.submit())
            }})
        }
        if ("nav" == b.type)
            e.on("click", ".nav", function(a) {
                var b = $(a.target);
                b.hasClass("item") && !b.hasClass("isActive") && (b.parent().find(".item").removeClass("isActive"), b.addClass("isActive"), g.val(b.data("type")))
            }), m({url: "/page/pagejson?containerid=106003type=1",success: function(b) {
                b.ok && n.render(a.nextElementSibling.nextElementSibling, b.cards)
            }});
        else {
            var s = require("ux/topbarPop"), t = $(a).find('[node-type="type-list"]');
            t.on("click", function() {
                new s({target: t,id: "J-searchDrop",item: [{txt: "全部",type: "all"}, {txt: "用户",type: "user"}, {txt: "微博",type: "wb"}],callback: function(a) {
                    var b = $(a.target);
                    b.hasClass("item") && g.val(b.data("type")), $(this).addClass("hid")
                }})
            })
        }
        b.ad && ($("body").append('<a href="' + b.ad.url + '" style="-webkit-tap-highlight-clor:transparent;position:fixed;left:0;bottom:0;width:100%;height:50px;border-top:#c2c3c5 solid 1px;background:#ebebeb"><img style="display:block;margin:0 auto;height:50px;" src="' + b.ad.pic + '" alt=""/><span id="J-delad" style="position:absolute;top:0;right:0;width:30px;height:100%;line-height:55px;text-align:center"><img style="display:inline-block;width:15px;height:15px" src="' + b.ad.close + '" alt=""/></span></a>'), $("body").on("click", "#J-delad", function() {
            return $(this).parent().remove(), !1
        }))
    }
}), define("ctrl/base", function(require, a, b) {
    var c = {request: function() {
    },cache: function() {
    },before: function(a) {
        return a
    },after: function(a) {
    },render: function(a) {
        var b = require("brick");
        b.render(document.getElementById("box"), a)
    },router: {}};
    b.exports = c
});

