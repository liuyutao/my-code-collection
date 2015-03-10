/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/9.
 */
$(function() {
    var a, b, c, d, e;
    return a = $("body"), d = $(".modal-back"), b = $(".modal-card"), c = $(".modal-back, .cancel-handler, .close-handler"), $(".modal-handler").on("click", function(c) {
        return c.preventDefault(), a.addClass("open-modal"), $(".confirm-handler").html(teambitionI18n.confirm), b.delay(100).fadeIn(250), d.fadeIn(350)
    }), c.on("click", function() {
        return e()
    }), a.on("keydown", function(a) {
        return 27 === a.keyCode ? e() : void 0
    }), e = function() {
        return b.animate({opacity: 0,top: "-=200"}, 150, function() {
            return b.attr({style: "display:none"})
        }), d.delay(100).fadeOut(350, function() {
            return a.removeClass("open-modal")
        })
    }
}), $(function() {
    return $(".setlocale").on("click", function(a) {
        var b, c;
        return a.preventDefault(), c = $(this).data("locale"), b = {path: "/",domain: "." + location.hostname.split(".").slice(1).join(".")}, $.cookie("lang", c, b), location.href = $(".tbsite-article").length ? this.href + "?p=setlocale&" + location.search.match(/_id=([^&]*)/)[0] : this.href + "?p=setlocale"
    })
}), $(function() {
    var a, b, c, d;
    return d = $(".tbsite-article"), a = {appid: "",title: document.title,desc: $('meta[name="description"]').attr("content"),image: $(".navbar-brand").data("circle"),link: location.href,callback: function() {
    }}, d.length ? (b = d.find(".modal-wechat .qrcode"), b.qrcode({text: b.data("src"),width: 250,height: 250}), c = $.extend({}, a, {title: d.find(".title").text(),desc: b.data("desc"),image: d.find(".topbanner").data("bg"),link: b.data("src")})) : c = a, $(document).on("WeixinJSBridgeReady", function() {
        return WeixinJSBridge.on("menu:share:appmessage", function() {
            return WeixinJSBridge.invoke("sendAppMessage", {appid: c.appid,title: c.title,desc: c.desc,img_url: c.image,link: c.link}, c.callback)
        }), WeixinJSBridge.on("menu:share:timeline", function() {
            return WeixinJSBridge.invoke("shareTimeline", {title: c.title,desc: c.desc,img_url: c.image,link: c.link}, c.callback)
        })
    })
}), $(function() {
    var a, b;
    return a = $(".csr-form #submit"), b = !1, $(".csr-form .type").on("click", function() {
        return $(".type").removeClass("active"), $(this).addClass("active")
    }), a.on("click", function(c) {
        var d;
        return c.preventDefault(), d = {email: $("#teambition-account").val(),type: $(".active").data("type"),name: $("#organization-name").val(),description: $("#organization-description").val(),contact: $("#organization-contact-info").val()}, b === !1 ? $.post("/philanthropy", d, function() {
            return a.html(teambitionI18n.applySuccess + ' <img src="https://dn-st.b0.upaiyun.com/site/v0.4.x/images/csr/heart@2x.png">'), b = !0
        }).fail(function() {
            return a.html(teambitionI18n.pleaseRetry + ' <img src="https://dn-st.b0.upaiyun.com/site/v0.4.x/images/csr/heart@2x.png">')
        }) : a.html(teambitionI18n.submitted + ' <img src="https://dn-st.b0.upaiyun.com/site/v0.4.x/images/csr/heart@2x.png">').addClass("disabled")
    }), $(".csr-form input, .csr-form textarea").on("keydown", function() {
        return a.html(teambitionI18n.applyNow + ' <img src="https://dn-st.b0.upaiyun.com/site/v0.4.x/images/csr/heart@2x.png">')
    })
}), $(function() {
    var a, b, c;
    return b = $(".deploy-form"), a = b.find(".confirm-handler"), c = !1, a.on("click", function(b) {
        var d;
        return b.preventDefault(), d = {type: "deployment",companyName: $("#company-name").val(),contactName: $("#contact-name").val(),contact: $("#contact-phone").val()}, c === !1 ? $.post("/philanthropy", d, function() {
            return a.html(teambitionI18n.applySuccess), c = !0
        }).fail(function() {
            return a.html(teambitionI18n.pleaseRetry)
        }) : a.html(teambitionI18n.submitted).addClass("disabled")
    }), b.find(".form-input").on("keydown", function() {
        return a.html(teambitionI18n.confirm)
    })
}), $(function() {
    var a, b, c, d, e, f;
    return d = $("#incubator-name-sh").html(), c = $("#incubator-name-bj").html(), e = $("#incubator-name-sz").html(), b = $("#incubator-name"), a = $(".incubator-form #submit-handler"), f = !1, b.html(d), $("#organization-city").change(function() {
        return b.empty(), b.html(0 === this.selectedIndex ? d : 1 === this.selectedIndex ? c : e)
    }), a.on("click", function(b) {
        var c;
        return b.preventDefault(), c = {type: "incubator",email: $("#teambition-account").val(),name: $("#organization-name").val(),city: $("#organization-city").val(),incubatorName: $("#incubator-name").val(),description: $("#organization-desc").val(),contactName: $("#organization-contact-name").val(),contact: $("#organization-contact-info").val()}, f === !1 ? $.post("/philanthropy", c, function() {
            return a.html(teambitionI18n.applySuccess), f = !0
        }).fail(function() {
            return a.html(teambitionI18n.pleaseRetry)
        }) : a.html(teambitionI18n.submitted).addClass("disabled")
    }), $(".incubator-form .form-input").on("keydown", function() {
        return $("#submit-handler").html(teambitionI18n.applyNow)
    })
}), $(function() {
    var a, b, c, d;
    return c = $(".research-form"), b = c.find(".input-group"), a = c.find(".confirm-handler"), d = !1, c.find(".subtype").on("click", function() {
        return $(".subtype").removeClass("active"), $(this).addClass("active")
    }), c.find("#share-experience").on("click", function() {
        return $("#content").attr("placeholder", "输入您要分享的内容")
    }), c.find("#need-help").on("click", function() {
        return $("#content").attr("placeholder", "输入您遇到的问题")
    }), a.on("click", function(b) {
        var c;
        return b.preventDefault(), c = {type: "research",subtype: $(".subtype.active").data("subtype"),industry: $("#industry").val(),companyName: $("#company-name").val(),name: $("#name").val(),jobTitle: $("#job-title").val(),contact: $("#contact").val(),useTime: $("#use-time").val(),users: $("#users").val(),content: $("#content").val()}, d === !1 ? $.post("/philanthropy", c, function() {
            return a.html(teambitionI18n.applySuccess), d = !0
        }).fail(function() {
            return a.html(teambitionI18n.pleaseRetry)
        }) : a.html(teambitionI18n.submitted).addClass("disabled")
    }), c.find(".form-control").click(function() {
        return d === !1 ? a.html(teambitionI18n.confirm) : void 0
    }).on("keyup", function() {
        return $.trim(this.value).length ? $(this).parents().addClass("has-value") : $(this).parents().removeClass("has-value")
    })
}), $(function() {
    var a;
    return a = {animation: !0,triggrt: "hover"}, $(".devtooltip").tooltip(a), $("body").scrollspy({target: ".api-sidebar"}), $(".api-sidebar").affix({offset: {top: $(".site-header").outerHeight() + $(".jumbotron").outerHeight(!0)}}), $("body").on("click", ".back-to-top", function(a) {
        return a.preventDefault(), $("body").animate({scrollTop: 0}, 300)
    })
}), $(function() {
    var a, b, c, d, e, f, g, h, i, j, k;
    return $.createEventCapturing = function() {
        var a;
        return a = $.event.special, function(b) {
            return document.addEventListener ? ("string" == typeof b && (b = [b]), $.each(b, function(b, c) {
                var d;
                return d = function(a) {
                    return a = $.event.fix(a), $.event.dispatch.call(this, a)
                }, a[c] = a[c] || {}, a[c].setup || a[c].teardown ? void 0 : $.extend(a[c], {setup: function() {
                    this.addEventListener(c, d, !0)
                },teardown: function() {
                    this.removeEventListener(c, d, !0)
                }})
            })) : void 0
        }
    }(), $.createEventCapturing(["play", "loadedmetadata", "pause", "ended"]), a = $(".page-index"), c = $(".watch-handler", a), b = $(".video-modal", a), e = {delayMin: 3500}, k = {actionCase: {initDelay: 1400}}, c.on("click", function(a) {
        var b, c, d;
        return a.preventDefault(), b = $(a.currentTarget), c = b.data("name"), d = b.data("url"), i(c, d)
    }), a.on("show.bs.modal", b, function(a) {
        var b, c, d;
        return b = $(a.target), c = $("video", b).get(0), d = b.attr("id"), j(c, d)
    }), a.on("hidden.bs.modal", b, function(a) {
        var b;
        return b = $(a.target), f(b)
    }), a.on("play loadedmetadata pause ended", function(a) {
        var b, c, e, f;
        switch (c = $(a.target), b = c.closest(".modal-video"), f = b.attr("id"), e = a.type) {
            case "play":
                return g(b, f, e);
            case "loadedmetadata":
                return g(b, f, e);
            case "pause":
                return d(b, f, e);
            case "ended":
                return d(b, f, e)
        }
    }), h = function(a) {
        return '<div class="modal modal-video fade" id="' + a.name + '" tabindex="-1">\n  <div class="modal-dialog modal-lg default-margin">\n    <div class="modal-content">\n    <div class="modal-header">\n      <a class="modal-close pull-right icon icon-remove" data-dismiss="modal"></a>\n    </div>\n      <div class="modal-body">\n        <div class="video-loading">\n          <img src="https://dn-st.b0.upaiyun.com/site/v0.4.x/images/index/model-video-bg.gif?' + (new Date).getTime() + '" class="img-responsive">\n        </div>\n        <div class="embed-responsive embed-responsive-16by9">\n          <video class="embed-responsive-item" controls="controls">\n            <source src="' + a.url + '" type="video/mp4">\n          </video>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'
    }, i = function(b, c) {
        var d, e, f;
        return f = k[b], null != f.isInit ? (d = $("[id='" + b + "']"), e = $("video", d).get(0)) : (d = $(h({name: b,url: c})), e = $("video", d).get(0), f.url = c, d.appendTo(a.find(".site-main")), e.load()), d.modal("show")
    }, j = function(a, b) {
        var c;
        return c = k[b], c.timeLoad = (new Date).getTime(), a.play()
    }, f = function(a) {
        return $("video", a).get(0).pause()
    }, g = function(a, b, c) {
        var d, f, g, h;
        return d = $("video", a).get(0), g = k[b], null == g.isInit && "loadedmetadata" === c && (d.pause(), g.timeStart = (new Date).getTime(), f = null != g.playedTime ? g.playedTime - g.timeStart : g.timeStart - g.timeLoad, h = f > e.delayMin ? 0 : e.delayMin - f, setTimeout(function() {
            return d.play(), a.hasClass("in") ? setTimeout(function() {
                return g.isInit = !0, a.addClass("is-init is-playing"), a.on("transitionend webkitTransitionEnd", ".video-loading", function() {
                    return $(this).remove()
                })
            }, g.initDelay) : (d.pause(), a.remove())
        }, h)), "play" === c && (g.playedTime = (new Date).getTime()), null != g.isInit ? a.addClass("is-playing") : void 0
    }, d = function(a, b, c) {
        return a.removeClass("is-playing"), "ended" === c ? (a.modal("hide"), k[b].isInit = !1) : void 0
    }
}), $(function() {
    var a, b, c, d, e, f, g, h, i, j, k;
    return c = $(window), a = $(".members-list"), b = a.find(".member"), j = {imageSize: 190,lookStraight: 30}, d = function(a, b, c, d) {
        var e, f, g, h, i;
        return h = a - c, i = b - d, e = Math.sqrt(h * h + i * i), e < j.lookStraight ? g = 12 : (f = Math.PI / 6, g = Math.round(Math.atan2(h, i) / f), g -= 3, g = (12 - g) % 12), g
    }, k = function(a, c) {
        var e, f;
        return f = j.imageSize, e = j.imageSize, $.each(b, function(b, g) {
            var h, i, j, k, l;
            return g = $(g), h = g.offset(), i = h.left + f / 2, j = h.top + e / 2, l = 1, k = -e * d(a, c, i, j) - l, g.css("background-position", "0px " + k + "px")
        })
    }, g = function(a) {
        return k(a.pageX, a.pageY)
    }, f = function(a) {
        var b, c, d, e, f, g, h, i, j;
        if (window.hasOwnProperty("ontouchstart") || navigator.msMaxTouchPoints > 0) {
            if (e = !1, b = 3, c = c > -b && b > c ? 0 : Math.floor(a.originalEvent.beta), d = d > -b && b > d ? 0 : Math.floor(a.originalEvent.gamma), j = {x: document.body.clientWidth / 2,y: screen.height / 2}, void 0 === f && (f = {beta: c,gamma: d}), void 0 !== window.orientation) {
                switch (window.orientation) {
                    case 0:
                    case 90:
                        i = c, c = -d, d = i;
                        break;
                    case 180:
                        d = -d, c = -c;
                        break;
                    case -90:
                        i = c, c = d, d = -i
                }
                e = !0
            }
            if (0 !== c && c !== f.beta && (j.y += c, j.y > document.body.clientHeight ? j.y = document.body.clientHeight : j.y < 0 && (j.y = 0), e = !0), e)
                return $(window).unbind("mousemove"), g = j.x, h = j.y, k(g, h)
        }
    }, i = function(a) {
        var b, c;
        return b = a.height(), c = a.offset().top, k(a.offset().left + b / 2, c + b / 2)
    }, e = function(a) {
        var b;
        return b = $($(this).hasClass("member") ? this : "#" + $(this).data("target")), b.hasClass("back") ? (b.removeClass("back"), b.hasClass("supporter") || b.find(".full-name").addClass("transparent")) : (b.siblings(".member").removeClass("back"), b.hasClass("supporter") || (b.siblings(".member:not('.supporter')").find(".full-name").addClass("transparent"), b.find(".full-name").removeClass("transparent")), b.addClass("back")), b.hasClass("back") ? ($(window).unbind("mousemove"), $(window).unbind("deviceorientation"), i(b)) : ($(window).mousemove(g), $(window).on("deviceorientation", f), g(a))
    }, h = function() {
        return c.on("mousemove", g), c.on("deviceorientation", f), b.click(e)
    }, a.length ? h() : void 0
}), $(function() {
    return $(".page-new").on("click", ".feature-title", function() {
        return $(this).parent(".feature").toggleClass("open")
    })
}), $(function() {
    var a;
    return a = document.location.toString(), a.match("#") ? $(".partner-tab a[href=#" + a.split("#")[1] + "]").tab("show") : void 0
}), $(function() {
    return $(".search-input").keyup(function() {
        var a;
        return a = $(this).val(), "" !== a ? $(".search-handler").addClass("active") : $(".search-handler").removeClass("active")
    }).focus(function() {
        return $(".search-icon").addClass("active")
    }).blur(function() {
        var a;
        return a = $(this).val(), "" === a ? $(".search-icon").removeClass("active") : void 0
    })
}), $(function() {
    var a, b, c;
    return a = $(".page-info-member"), $(".next", a).on("click", function() {
        var a, b;
        return a = $(".act"), b = a.next(), b.length || (b = a.siblings("li:first")), a.fadeOut(600, function() {
            return $(".workerlist li").removeClass("act"), b.fadeIn(600).addClass("act")
        })
    }), $(".prev", a).on("click", function() {
        var a, b;
        return a = $(".act"), b = a.prev(), b.length || (b = a.siblings("li:last")), a.fadeOut(600, function() {
            return $(".workerlist li").removeClass("act"), b.fadeIn(600).addClass("act")
        })
    }), b = function(a) {
        var b, c;
        return c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"), b = window.location.search.substr(1).match(c), b ? unescape(b[2]) : void 0
    }, c = b("index"), c >= 0 ? $(".workerlist li").removeClass("act").eq(c).addClass("act") : void 0
}), $(function() {
    return $(".page-tour .slide img").lazyload({effect: "fadeIn",placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"})
}), $(function() {
    var a, b, c, d;
    return b = $(".tbsite-article"), b.length ? (c = b.find(".topbanner"), a = b.find(".loadingbar"), navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) || $(window).scroll(function() {
        var a, b;
        return a = $(window).scrollTop(), b = 1 * (c.height() - a) / c.height(), c.css("opacity", b)
    }), d = new Image, d.src = c.data("bg"), d.onload = function() {
        return c.css("background-image", "url(" + d.src + ")"), a.fadeOut(500, function() {
            return this.remove()
        })
    }) : void 0
}), $(function() {
    var a;
    return navigator.userAgent.match(/micromessenger/i) ? void 0 : (a = $("body.tbsite-article").length ? $(".tbsite-article .topbanner").height() : 300, $(".site-header").headroom({offset: a,tolerance: 5,classes: {initial: "animated",pinned: "slideDown",unpinned: "slideUp"}}))
}), $(function() {
    var a;
    return a = $.ias({container: ".list-wrap .content",item: ".list-item:not(.category)",pagination: ".pagination",next: ".next a",delay: 1e3,negativeMargin: 100}), a.extension(new IASSpinnerExtension({html: '<div class="loading-indicator text-center"> <span class="loader-dot"></span> <span class="loader-dot"></span> <span class="loader-dot"></span> </div>'})), a.extension(new IASTriggerExtension({offset: 3}))
});
