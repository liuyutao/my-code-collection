/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/5.
 */

/*! BUILD: 2014-10-31 */
function Model() {
    this.attributes = {id: null,method: null,conversationId: null,params: null}, 1 === arguments.length && "object" == typeof arguments[0] ? $.extend(this.attributes, arguments[0]) : ("string" == typeof arguments[0] && (this.attributes.method = arguments[0]), "object" == typeof arguments[1] && (this.attributes.params = arguments[1]), "string" == typeof arguments[1] && (this.attributes.conversationId = arguments[1]), "string" == typeof arguments[2] && (this.attributes.conversationId = arguments[2]))
}
function openWin(a, b) {
    var c = (parseFloat(navigator.appVersion.split("MSIE ")[1]) || void 0, window.open(a, b || "win_" + Common.getIdentityId(), "toolbar=no, menubar=no,scrollbars=yes,resizable=yes, location=no, status=no"));
    try {
        c.focus(), c.moveTo(0, 0), c.resizeTo(screen.width, screen.height - 30)
    } catch (d) {
    }
}
function keepSessionActive() {
    var a = Common.postRequest(new Model("PsnCommonQueryOprLoginInfo"), {showLoading: !1});
    return {then: function(b, c) {
        a.then(function(a) {
            void 0 !== a.response[0].status && "01" == a.response[0].status ? b() : (c(), CU.ajaxDataHandle(a))
        })
    }}
}
var isArray = function(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
}, contextPath = "", ajaxSuccessStatusCode = "01", Common = {};
Common.triggerSubMenuAuto = !0, Common.controllers = {}, Common.context = {}, Common.context.modules = {}, Common.menu = {}, Common.basePath = "", biztype = "individual", Common.params = {};
var stopBubble = function(a) {
    a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
}, Class = {create: function() {
    return function() {
        this.initialize.apply(this, arguments)
    }
}}, localParam = {C: "zh_CN",E: "en_US"}, urlPrefix = "/BII/", dataPostURL = urlPrefix + "PsnGetUserProfile.do", validationURL = urlPrefix + "ImageValidation/validation";
Common.getCommPostParam = function(a, b) {
    return {header: {local: b || ("C" == lan ? "zh_CN" : "en_US"),agent: "WEB15","bfw-ctrl": "json",version: "",device: "",platform: "",plugins: "",page: "",ext: ""},request: a || null}
};
var getIdentityId = function() {
    function a() {
        return ++b
    }
    var b = 0;
    return a
}, DetachSigner = Class.create();
DetachSigner.prototype = {initialize: function(a, b, c, d) {
    this.util = new com.ibm.boc.util, this.el = a;
    var e = this.dataHandle(b), f = {data: e.data,appendTo: a,defValue: e.def.val,defText: e.def.text,callback: function(a) {
        d && d(a)
    }};
    return this.conversationId = c, this.itSelect = new ITSelect(f), this
},clear: function() {
    this.smsControl && this.smsControl.clear && this.smsControl.clear(), this.otpController && this.otpController.clear && this.otpController.clear("dynamic_password")
},_initSmsController: function(a) {
    this.smsControl = new com.ibm.boc.security.MobileCheckNum({container: this.controlsDomNode,smcTrigerInterval: a,conversationid: this.conversationId})
},removeControl: function() {
    this.controlsDomNode && $(this.controlsDomNode).remove()
},_initOtpController: function() {
    this.otpController = new com.ibm.boc.security.PassWordController(this.main);
    var a = dojo.create("div", {"class": "para clear"}, this.controlsDomNode), b = (dojo.create("span", {"class": "lt dynamictitle",innerHTML: this.util.nls.dynamicpasswordlabel}, a), dojo.create("span", {"class": "rt"}, a));
    this.otpControl = this.otpController.createControl(b, null, "dynamic_password", 2, "zh_CN", this.conversationId)
},build: function(a) {
    dojo.require("com.ibm.boc.attest.attest"), this.main = "undefined" != typeof attest ? attest : new com.ibm.boc.attest, this.detachSigner = new com.ibm.boc.security.DetachSigner, this.factorList = a.factorList, this.controlsDomNode = dojo.create("span", {"class": "contentBox securityControllerDomNode"}, a.container || dojo.create("span")), this.conversationId = a.conversationId || this.conversationId || "", dojo.forEach(this.factorList, dojo.hitch(this, function(b) {
        switch (b.field.name) {
            case "Smc":
                this._initSmsController(a.smcTrigerInterval);
                break;
            case "Otp":
                this._initOtpController(this.conversationId);
                break;
            case "_signedData":
                this.certDN = a.certDN, this.plainData = a.plainData, dojo.create("div", {"class": "para importantInfo",innerHTML: this.util.nls.canotifyMsg}, this.controlsDomNode)
        }
    }))
},dataHandle: function(a) {
    for (var b = {data: [],def: {text: Regional.l0002[lan],val: ""}}, c = 0, d = a._combinList.length; d > c; c++)
        b.data.push({key: a._combinList[c].id,val: a._combinList[c].name});
    return null != a._defaultCombin && (b._defaultCombin = {text: a._combinList[0].name,val: a._combinList[0].id}), b
},doCA: function(a, b, c) {
    return this.main.detachSigner.doDetachSign(a, b, c)
},val: function() {
    for (var a = {Smc: "",Otp: "",_signedData: ""}, b = 0; b < this.factorList.length; b++) {
        var c = this.factorList[b];
        switch (c.field.name) {
            case "Smc":
                var d = {Smc: this.smsControl.getValue(),Smc_RC: this.smsControl.getRSValue()};
                dojo.mixin(a, d), dojo.mixin(a, this.smsControl.getfixedParams());
                break;
            case "Otp":
                var e = {Otp: this.otpController.passobj.dynamic_password.value,Otp_RC: this.otpController.getRcParam("dynamic_password")};
                dojo.mixin(a, e), dojo.mixin(a, this.otpController.getfixedParams());
                break;
            case "_signedData":
                var f = {_signedData: this.caPlainResult.result};
                dojo.mixin(a, f)
        }
    }
    return a
},isValidate: function() {
    dojo.forEach(this.factorList, dojo.hitch(this, function(a) {
        "_signedData" == a.field.name && (this.caPlainResult = this.doCA(this.certDN, "", this.plainData))
    }));
    for (var a = 0; a < this.factorList.length; a++) {
        var b = this.factorList[a];
        switch (b.field.name) {
            case "Smc":
                if (!this.smsControl.validate())
                    return !1;
                break;
            case "Otp":
                if (!this.otpController.passwordValidation("dynamic_password"))
                    return !1;
                break;
            case "_signedData":
                if (!this.caPlainResult || !this.caPlainResult.result) {
                    {
                        (this.caPlainResult.error && this.caPlainResult.error.message || this.util.nls.FailedSignedtitle) + this.util.nls.plsbacktoredocaorselectotherfactor
                    }
                    return !1
                }
        }
    }
    return !0
}}, Common.getIdentityId = getIdentityId(), Common.postRequestCallback = null, Common.postRequest = function() {
    var modelArray = arguments, showLoading = !0;
    if (!modelArray.length)
        return null;
    isArray(modelArray[0]) && (modelArray = modelArray[0]);
    for (var arr = [], jsn = {}, i = 0; i < modelArray.length; i++) {
        if (0 == modelArray[i].showLoading) {
            showLoading = !1;
            break
        }
        if (null == modelArray[i])
            break;
        jsn = void 0 === modelArray[i].id ? modelArray[i].attributes : modelArray[i], jsn.id = Common.getIdentityId(), arr[arr.length] = jsn
    }
    return $.ajax({url: dataPostURL + "?_locale=" + localParam[lan],type: "post",showLoading: showLoading,data: JSON.stringify(Common.getCommPostParam(arr)).replace(/"null"/g, '""') || eval("(" + Common.getCommPostParam(arr) + ")"),dataType: "json",headers: {"bfw-ctrl": "json"},contentType: "text/json;",error: function() {
        Common.LightBox.hide(), Common.LightBox.showMessage(Common.Error.getMsgByCode("ajaxError")), "function" == typeof Common.postRequestCallback && Common.postRequestCallback()
    }})
}, Common.getPostHeader = function(a, b) {
    return a.header = {local: b || ("C" == lan ? "ZH_cn" : "EN_us")}, a
}, Common.ajax = function(a, b) {
    return $.ajax({url: dataPostURL,type: b,data: JSON.stringify(Common.getPostHeader(a)),dataType: "json",headers: {"bfw-ctrl": "json"},contentType: "text/plain; charset=utf-8",error: function() {
        $("#disablePage").hide(), Common.LightBox.showMessage(Common.Error.getMsgByCode("ajaxError"))
    }})
}, Common.post = function() {
    var a = arguments[0];
    return a.attributes || a.method ? (void 0 !== a.attributes && (a = a.attributes), $("#disablePage").show(), Common.ajax(a, "post")) : !1
}, Common.postReqTree = function() {
    var a = arguments, b = {};
    if (!a.length)
        return null;
    isArray(a[0]) && (a = a[0]);
    var c = a.length;
    if (1 == c)
        b = a[0].attributes || a[0];
    else
        for (var d = 0; c > d && null != a[d]; d++)
            b["param" + (d + 1)] = a[d].attributes || a[d];
    return $("#disablePage").show(), Common.ajax(b, "post")
}, Common.Canvas = {element: null,clear: function() {
    this.element.html("")
},init: function(a) {
    this.element = $("#" + a)
},render: function(a) {
    this.clear(), this.element.html(a)
}}, Common.Dispatcher = {redirect: function(action) {
    this.showLoading();
    var t = this;
    window.previousAction, action && (0 == $("#" + action).length && $("body").append($('<div id="' + action + '" class="window"></div>')), Common.Canvas.init(action), $.when(eval("Common.Canvas.element." + action + "();")).done(function() {
        t.hideLoading(), window.previousAction = action
    }))
},showLoading: function() {
    this.loading = (this.loading || $('<div style="position:absolute; top:45%; left:36%;z-index:10; display:none" id="ctrollerLoading"><img src="images/loading.gif" alt="loading" /></div>').appendTo(document.body)).show(), Common.LightBox.show()
},hideLoading: function() {
    this.loading.hide(), Common.LightBox.hide()
}}, Common.ValicationUtil = Common.VU = {addAmountValid: function(a, b) {
    switch (a) {
        case "027":
            $(b).attr({tips: "tipsrequired tipsmax tips0306",validateGroup: "{required:true,maxLength:15,reg100:true}"}).attr("currCode", a);
            break;
        case "034":
            $(b).attr({tips: "tipsrequired tipsmax tips0266",validateGroup: "{required:true,maxLength:15,reg44:true}"}).attr("currCode", a);
            break;
        default:
            $(b).attr({tips: "tipsrequired tipsmax tips0293",validateGroup: "{required:true,maxLength:15,reg45:true}"}).attr("currCode", a)
    }
}}, Common.Security = {mask: function(a, b) {
    var c = 0, d = len = 0, e = "";
    switch (a.toLowerCase()) {
        case "302":
            if (b.length < 9)
                return b;
            len = b.length - 4, c = 4, d = 6;
            break;
        case "mobile":
            c = 3, len = b.length - 4, d = 4;
            break;
        default:
            c = 4, len = b.length - 4, d = 6
    }
    for (; d-- > 0; )
        e += "*";
    return b.substr(0, c) + e + b.substr(len)
}}, Common.AccountInfo = {getAccountInfo: function(a, b, c, d, e) {
    var f = "";
    return a && (f += "<span lan='account_type_" + a + "'>" + CU.getDictNameByKey("account_type_" + a) + "</span>"), b && (f += "<span class='ml5'>" + Common.Security.mask(null == e ? "302" : "", b) + "</span>"), c && (f += "<span class='ml5'>" + c + "</span>"), d && (f += "<span class='ml5' lan='payeraccount_" + d + "'>" + CU.getDictNameByKey("payeraccount_" + d) + "</span>"), f.trim()
},getAllAccountInfo: function(a, b) {
    var c = "";
    return b && (c = "<span lan='payeraccount_" + a.accountIbkNum + "'>" + CU.getDictNameByKey + "('payeraccount_' + p.accountIbkNum)</span>"), a ? "<span lan='account_type_" + a.accountType + "'>" + CU.getDictNameByKey + "('account_type_' + p.accountType)</span> " + Common.Security.mask("", a.accountNumber) + " " + a.nickName + " " + c : ""
},getAccountElementDesc: function(a) {
    return a ? (-1 == $.inArray(a.accountType, ["103", "104", "107"]) ? '<span class="mr5" lan="account_type_' + a.accountType + '">' + CU.getDictNameByKey("account_type_" + a.accountType) + "</span>" : a.cardDescription) + '<span class="mr5">' + Common.Security.mask("", a.accountNumber) + '</span><span class="mr5">' + a.nickName + '</span><span class="mr5" lan="payeraccount_' + a.accountIbkNum + '">' + CU.getDictNameByKey("payeraccount_" + a.accountIbkNum) + "</span>" : ""
}}, Common.Error = {handle: function(a) {
    var b = ErrorCode ? ErrorCode[a.code][lan] : a.message;
    return b
},getMsgByCode: function(a) {
    var b = void 0;
    return b = a.code ? a.code : a, a && ErrorCode[b] ? ErrorCode[b][lan] || "" : a ? "后台返回未知错误Code:" + a.code : "后台返回错误,没有错误编号"
},lastErrorCode: ""}, Common.getControllerParam = function(a, b) {
    var c = null;
    return c = a.length > 3 ? a[3] : (new b).findAll()
}, CU = Common.Util = {getFirstElementChild: function(a) {
    if ("1" == a.nodeType)
        return a;
    if ("11" == a.nodeType)
        for (var b = 0, c = a.childNodes.length; c > b; b++)
            if ("1" == a.childNodes[b].nodeType) {
                a = a.childNodes[b];
                break
            }
    return a || null
},getElementChildren: function() {
},Json: {merge: function() {
    var a = arguments;
    if (!a || !a.length)
        return null;
    for (var b = a[0], c = 1; c < a.length; c++)
        for (var d in a[c])
            b[d] = a[c][d];
    return b
},copyAttr: function(a, b) {
    for (var c in a)
        a[c] = b[c]
},replaceNull: function(a) {
    if (a)
        for (var b in a)
            null == a[b] && (a[b] = ""), "object" == typeof a[b] && (a[b] = CU.Json.replaceNull(a[b]));
    return a
}},getKeyCode: function(a) {
    var b = 0, a = a || event;
    return b = a.keyCode || a.which || a.charCode || a.originalEvent.keyCode
},Date: {getDateObj: function(a) {
    return new Date(a.replace(/\-/g, "/"))
},in_N_month: function(a, b, c) {
    var d = CU.Date.getDateObj(a), e = CU.Date.getDateObj(a), f = CU.Date.getDateObj(b);
    d.setMonth(d.getMonth() + c), d.setDate(d.getDate());
    var g = f.getYear() - e.getYear(), h = f.getMonth() + 12 * g;
    return 0 > f - e || f - d > 0 || h - e.getMonth() > c ? !1 : !0
},inThreeMonth: function(a, b) {
    return CU.Date.in_N_month(a, b, 3)
},inOneMonth: function(a, b) {
    return CU.Date.in_N_month(a, b, 1)
},inSixMonth: function(a, b) {
    return CU.Date.in_N_month(a, b, 6)
},inOneYear: function(a, b) {
    var c = CU.Date.getDateObj(a), d = CU.Date.getDateObj(a), e = CU.Date.getDateObj(b);
    return c.setFullYear(c.getFullYear() + 1), c.setDate(c.getDate() - 1), e - c > 0 || e.getFullYear() - d.getFullYear() == 1 && e.getMonth() - d.getMonth() > 0 ? !1 : !0
},diff: function(a, b) {
    var c = Date.parse(a.replace(/\-/g, "/")), d = Date.parse(b.replace(/\-/g, "/"));
    return (d - c) / 864e5
},format: function(a) {
    if (a = $.trim(a), 0 == a.length)
        return "";
    var b = "", c = a.indexOf("-");
    if (c && -1 != c)
        b = a.replace(/-/g, "/");
    else {
        var d = a.split("/");
        b = d[2] + "/" + d[0] + "/" + d[1]
    }
    return b
},lastMonthDay: function(a) {
    var b = new Date(a.replace(/\-/g, "/"));
    b.setMonth(b.getMonth() - 1), b.setDate(b.getDate());
    var c = b.getMonth() + 1;
    9 >= c && (c = "0" + c);
    var d = b.getDate();
    return 9 >= d && (d = "0" + d), b.getFullYear() + "/" + c + "/" + d
},lastThreeMonthDay: function(a) {
    var b = new Date(a.replace(/\-/g, "/"));
    b.setMonth(b.getMonth() - 3), b.setDate(b.getDate() + 1);
    var c = b.getMonth() + 1;
    9 >= c && (c = "0" + c);
    var d = b.getDate();
    return 9 >= d && (d = "0" + d), b.getFullYear() + "/" + c + "/" + d
},checkDateTime: function(a, b) {
    for (var c = !0, d = 0; 16 > d; d++)
        if (a.charAt(d) > b.charAt(d)) {
            c = !1;
            break
        }
    return c
},lasWeekDay: function(a) {
    var b = new Date(a.replace(/\-/g, "/")), c = b.getTime(), d = c - 5184e5, e = new Date(d), f = e.getMonth() + 1;
    9 >= f && (f = "0" + f);
    var g = e.getDate();
    return 9 >= g && (g = "0" + g), e.getFullYear() + "/" + f + "/" + g
},addDays: function(a, b) {
    var c, d;
    if ("string" == typeof a) {
        c = a.split(/[\/|-]/), d = new Date(c[0], parseInt(1 * c[1]) - 1, c[2]), d.setTime(d.getTime() + 3600 * b * 24 * 1e3);
        var e = d.getFullYear(), f = d.getMonth() + 1, g = d.getDate();
        return 10 > f && (f = "0" + f), 10 > g && (g = "0" + g), e + "/" + f + "/" + g
    }
    return a.constructor === Date ? (d = new Date, d.setTime(a.getTime() + 3600 * b * 24 * 1e3), d) : null
},addMonths: function(a, b) {
    var c, d;
    if ("string" == typeof a) {
        c = a.split(/[\/|-]/), d = new Date(c[0], parseInt(1 * c[1]) - 1, c[2]), d.setMonth(d.getMonth() + b);
        var e = d.getFullYear(), f = d.getMonth() + 1, g = d.getDate();
        return 10 > f && (f = "0" + f), 10 > g && (g = "0" + g), e + "/" + f + "/" + g
    }
    return a.constructor === Date ? (d = new Date, d.setTime(a.getTime()), d.setMonth(d.getMonth() + b), d) : null
},getDateStr: function(a) {
    var b = new Date;
    b.setDate(b.getDate() + a);
    var c = b.getFullYear(), d = b.getMonth() + 1, e = b.getDate();
    return 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), c + "/" + d + "/" + e
},getDateStrByTime: function(a) {
    var b = new Date;
    b.setTime(a);
    var c = b.getFullYear(), d = b.getMonth() + 1, e = b.getDate();
    return 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), c + "/" + d + "/" + e
}},Currency: {getSymbol: function(a) {
    var b = "￥";
    switch (a) {
        case "014":
            b = "$";
            break;
        case "001":
            b = "￥"
    }
    return b
}},ajaxDataHandle: function(a, b, c) {
    if ($("#disablePage").hide(), b = b || 0, a) {
        var d = a.response;
        if (d && d.length)
            if (d[b].status == ajaxSuccessStatusCode) {
                var e = d[b].result;
                if (null != e)
                    return CU.Json.replaceNull(e)
            } else {
                var f = d[b].error, g = {"validation.session_invalid": "l15798","role.invalid_user": "l15803","validation.resubmit_same_session": "l15797","QA.authenticate.limit": "l15817","smc.token.lock": "l15818","smc.token.false.lock": "l15818","smc.token.true.lock": "","otp.token.lock": "","otp.token.false.lock": "","otp.token.true.lock": ""};
                f && f.code && f.code in g ? ($.removeCookie("jsessionid"), window.top.location.href = (Common.basePath || "") + "logout.html?title=" + escape(f.message) + "&locale=" + localParam[lan] + ("validation.resubmit_same_session" === f.code || Common.basePath ? "&relogin=0" : "")) : (CU.changeLan($("#msgBox")), d[b].error && d[b].error.message || (d[b].error = {message: "C" === lan ? "系统逻辑处理问题" : "System Logic Process Problem"}), Common.LightBox.showMessage(d[b].error.message), Common.Error.lastErrorCode = d[b].error.code, c && c.length && (Common.Dispatcher.redirect(c), Common.LightBox.hide(), CU.cordinateWithMenu(c)))
            }
    }
    return null
},isSuccesful: function(a, b) {
    return b = b || 0, void 0 !== a.response[b].status ? ($("#disablePage").hide(), "01" == a.response[b].status) : null == this.ajaxDataHandle(a, b)
},createTokenId: function(a) {
    return new Model("PSNGetTokenId", a)
},createConversation: function() {
    return new Model("PSNCreatConversation")
},closeConversation: function(a) {
    return new Model("PSNCloseConversation", a)
},getPageCount: function(a, b) {
    return parseInt((a - 1) / b) + 1
},getAbsCenterAxis: function(a) {
    return {left: (document.body.clientWidth - a.width()) / 2,top: (document.body.clientHeight - a.height()) / 2}
},setObjScreenAbsCenter: function(a, b) {
    var c = {left: (window.top.document.body.clientWidth - a.width()) / 2,top: ((window.top.innerHeight || window.top.document.documentElement.clientHeight) - a.height()) / 2 + (window.top.document.body.scrollTop || window.top.document.documentElement && window.top.document.documentElement.scrollTop || 0)};
    return a.css({left: c.left + "px",top: c.top + "px",zIndex: "911"}), b && mw.addTask(a.parent().attr("id"), a.find("h4.i-pop-title-m").text()), a
},setObjAbsCenter: function(a, b) {
    this.setObjScreenAbsCenter(a, b)
},loadLan: function(a) {
    var b = document.createElement("script");
    b.type = "text/javascript", b.readyState ? b.onreadystatechange = function() {
        "loaded" === b.readyState || "complete" === b.readyState ? (b.onreadystatechange = null, a()) : "loading" !== b.readyState && (b.onreadystatechange = null, a())
    } : (b.onload = function() {
        a()
    }, b.onerror = function() {
        a()
    }), b.src = "scripts/lib/lan_" + lan.toLowerCase() + ".js", document.getElementsByTagName("head")[0].appendChild(b)
},fixTips: function(a) {
    var b, c, d = a && a.find(".uptips") && a.find(".uptips").size() ? a.find(".uptips") : $(".uptips");
    d.css({minHeight: "",_height: ""}), b = $("#subMenu").height() - $("#content").children("div").height() - 22, b > 0 && (c = d.height() + b + "px", d.css({minHeight: c,_height: c}))
},changeLan: function(a) {
    function b() {
        if (c) {
            if (!window.Regional)
                return CU.loadLan(b);
            for (var e in window.Regional)
                $.extend(window.Regional[e], c[e])
        }
        Common.LightBox.hide(), window.lanLoaded[lan] = !0, d.local = d.local || new Localize, setTimeout(function() {
            d.local.changeLanInContainer(lan, a || Common.Canvas.element), CU.fixTips(a)
        }, 1)
    }
    var c, d = this;
    return window.lanLoaded || (window.lanLoaded = {}), lan = lan || "C", window.lanLoaded[lan] ? (d.local = d.local || new Localize, d.local.changeLanInContainer(lan, a || Common.Canvas.element), CU.fixTips(a)) : (window.Regional && (c = window.Regional, window.Regional = null), Common.LightBox.show(), CU.loadLan(b)), a
},CNYFormat: function(a, b) {
    var c, d = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"], e = new Array(["元", "万", "亿", "万亿", "京", "垓"], ["", "拾", "佰", "仟"]), f = "", g = "", h = "";
    switch (b) {
        case "AUD":
        case "CAD":
        case "HKD":
        case "MOP":
        case "MZD":
        case "SGD":
        case "USD":
        case "013":
        case "014":
        case "018":
        case "028":
        case "029":
        case "081":
        case "087":
            c = ["拾", "分"];
            break;
        case "015":
        case "CHF":
            c = ["拾", "分"], e[0][0] = "法郎";
            break;
        case "022":
        case "DKK":
            c = ["拾", "欧尔"], e[0][0] = "克朗";
            break;
        case "038":
        case "EUR":
            c = ["拾", "生丁"];
            break;
        case "012":
        case "GBP":
            c = ["拾", "便士"], e[0][0] = "镑";
            break;
        case "023":
        case "NOK":
        case "021":
        case "SEK":
            c = ["拾", "欧尔"], e[0][0] = "克朗";
            break;
        case "082":
        case "PHP":
            e[0][0] = "比索";
            break;
        case "084":
        case "THB":
            c = ["拾", "萨当"], e[0][0] = "铢";
            break;
        default:
            c = ["角", "分"]
    }
    if (-1 != a.indexOf(".") ? (g = a.substring(0, a.indexOf(".")), h = a.substring(a.indexOf(".") + 1).split("")) : g = a, "" != h && 0 != h) {
        if (h.length > 2)
            return;
        for (var i = 0, j = h.length; j > i; i++)
            "0" != h[i] && (f += d[parseInt(h[i])] + c[i], (1 == j && b && "001" != b && "CNY" != b || 2 == j && "0" == h[1]) && (f += c[1]))
    }
    f = f || "整";
    var k;
    for (i = 0, j = e[0].length; j > i && g > 0; i++) {
        k = "";
        for (var l = 0; l < e[1].length && g > 0; l++)
            k = d[g % 10] + e[1][l] + k, g = Math.floor(g / 10);
        f = k.replace(/(零.)*零$/, "").replace(/^$/, "零") + e[0][i] + f
    }
    return f.replace(new RegExp("(零.)*零" + e[0][0]), e[0][0]).replace(/(零.)+/g, "零").replace(/^整$/, "零" + e[0][0] + "整").replace("角分", "角")
},getDictNameByKey: function(a) {
    var b = "";
    try {
        b = Regional[a][lan]
    } catch (c) {
    }
    return b
},cordinateWithMenu: function(a) {
    $("ul li", "#accordion").each(function() {
        var b = this;
        if ($(this).css("color", "#333").removeAttr("class"), $("a", b).attr("action") == a) {
            $("ul li", b).removeAttr("class"), $("#navigator").removeAttr("style"), $(b).attr("class", "current");
            var c = $(b).parent();
            $("span", c.parent()).attr("class", "ndown"), c.slideDown()
        }
    })
},print: function() {
    window.print()
},changeTheme: function(a) {
    $("#skin").attr("href", "css/" + a + "/default.css")
},letterLenLimit: function(a, b, c) {
    var d = c - a.val().len();
    $.browser.msie && (a._change_attached || (d = c)), b.text(d), a.on("keyup", function() {
        var a = $(this), d = a.val().len(), e = c - d;
        b.text(e >= 0 ? e : 0)
    }).on("keydown", function(a) {
        var b = CU.getKeyCode(a);
        return (b > 46 && 112 > b || 13 == b || 32 == b) && $(this).val().len() >= c ? !1 : void 0
    })
},resetForm: function(a) {
    var b = "input[type='text'],input[type='radio'],input[type='password'],textarea";
    a.find(b).val(""), a.find("select").each(function() {
        this.selectedIndex = 0
    }), a.find(":checkbox:checked").attr("checked", !1), a.find("div.SecEditCtrl").length && a.find("div.SecEditCtrl").sec("clear"), a.find(b).removeClass("passed").removeClass("warning").removeAttr("pass"), Common.SF.reset(), ITSelect.reset(a)
},emptyQueryResult: function(a) {
    a.children("tbody").html(""), a.children("tfoot td>div.page").html("")
},addIFrame: function(a) {
    $.browser.msie && "6.0" == $.browser.version && !$.support.style && $("<iframe src='' marginwidth=0 framespacing=0 marginheight=0 frameborder=0 width=100% class='ifhideselect'></iframe>").insertBefore($(a).children().first().first())
},setMenuClicked: function(a) {
    var b = $("span[action='" + a + "']"), c = b.parent();
    $("#accordion li.current,h3").removeClass("current"), c.addClass("current"), c.parent().addClass("open").show(), c.parent().parent().children().first().addClass("current")
},triggerLeftMenuClick: function(a) {
    mw.dropTask(), CU.setMenuClicked(a), $("#accordion").find("*[action='" + a + "']").first().trigger("click"), $("#transmitter").hide()
},forceReading: function(a, b) {
    var c = 0, d = 0, e = a.height();
    a.on("scroll", function() {
        c = a.get(0).scrollHeight, d = a.get(0).scrollTop, d + e >= c ? b.removeAttr("disabled") : b.attr("disabled", "disabled")
    })
},appendZero: function(a, b) {
    if (a || (a = ""), 1 > b)
        return "";
    var c = a.length;
    if (c > b)
        return a.substr(0, b);
    c = b - c;
    for (var d = "", e = 0; c > e; e++)
        d += "0";
    return a + d
},formatCurrency: function(a, b) {
    var c = "";
    if (isNaN(a))
        switch (a) {
            case "JPY":
                c = Number(b).toFixed(0);
                break;
            case "XAU":
                c = Number(b).toFixed(1);
                break;
            default:
                c = Number(b).toFixed(2)
        }
    else
        switch (a) {
            case "027":
                c = Number(b).toFixed(0);
                break;
            case "034":
                c = Number(b).toFixed(1);
                break;
            default:
                c = Number(b).toFixed(2)
        }
    return c
},getDocumentPracticalHeight: function() {
    return Math.max(document.documentElement.clientHeight || 0, Math.max(document.body.scrollHeight || 0, document.body.offsetHeight || 0))
}}, String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}, String.prototype.format = function() {
    var a = arguments;
    return 1 == a.length && a[0].join && (a = a[0]), this.replace(/\{(\d+)\}/g, function(b, c) {
        return a[c]
    })
}, String.prototype.len = function() {
    return this.replace(/[^\x00-\xff]/g, "  ").length
}, String.prototype.toJson = function() {
    return new Function("return " + this)()
}, String.prototype.fix2decimal = function() {
    var a = this.split(".")[0].replace(/(\d{1,2}?)((\d{3})+)$/, "$1,$2").replace(/(\d{3})(?=\d)/g, "$1,"), b = this.split(".")[1];
    return b && b.length >= 2 ? a + "." + b.substr(0, 2) : b ? a + "." + b + "0" : a + ".00"
}, String.prototype.removeComma = function() {
    return this.replace(/\,/g, "")
}, Number.prototype.fix2decimal = function() {
    return this.toString().fix2decimal()
}, String.prototype.formatNum = function(a, b, c) {
    if (0 != this.length) {
        switch (a) {
            case "027":
            case "068":
            case "036":
            case "0271":
            case "0272":
            case "035":
                a = 0;
                break;
            case "034":
                a = 1;
                break;
            case "841":
                a = 1;
                break;
            case "045":
                a = 1;
                break;
            case "844":
                a = 0;
                break;
            case "845":
                a = 0;
                break;
            case "GS":
                a = 3;
                break;
            case "ER":
                a = 4;
                break;
            case "NV":
                a = 8;
                break;
            default:
                a = 2
        }
        var d = this.split(".");
        if (!c && d[1] && d[1].length > a)
            return this;
        var e = Number(this.replace(/\,/g, "")).toFixed(a).toString(), d = e.split(".");
        return 1 != b && (d[0] = d[0].replace(/(\d{1,2}?)((\d{3})+)$/, "$1,$2").replace(/(\d{3})(?=\d)/g, "$1,")), 1 > a ? d[0] : d[0] + "." + CU.appendZero(d[1], a)
    }
}, Number.prototype.formatNum = function(a, b, c) {
    return this.toString().formatNum(a, b, c)
};
var _dateToString = Date.prototype.toString;
Date.prototype.toString = function(a) {
    if (!a)
        return _dateToString.call(this);
    var b = this.getFullYear() + "", c = this.getMonth() + 1, d = this.getDate();
    return 10 > c && (c = "0" + c), 10 > d && (d = "0" + d), [b, c, d].join(a)
}, Common.stopBubble = function(a) {
    a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
}, Common.LightBox = {element: null,init: function() {
    var a = "100%", b = "fixed";
    $.browser.msie && "6.0" == $.browser.version && !$.support.style && (a = document.documentElement.clientHeight + "px", b = "absolute");
    var c;
    c = $.browser.msie ? '<div id="lightbox" style="left:0; background:rgb(150,150,150); top:0; width:100%; height:' + a + "; filter:alpha(opacity=30); -moz-opacity: 0.3; opacity: 0.3;zoom:1; position:" + b + '; z-index:9; " ><iframe src="" marginwidth="0" framespacing="0" marginheight="0" frameborder="0" width="100%" height="100%" style="left:0; background:rgb(255,255,255); top:0; width:100%; filter:alpha(opacity=0); -moz-opacity: 0; opacity: 0;zoom:1; position:absolute; z-index: 9"></iframe></div>' : '<div id="lightbox" style="left:0; background:rgb(150,150,150); top:0; width:100%; height:' + a + "; filter:alpha(opacity=30); -moz-opacity: 0.3; opacity: 0.3;zoom:1; position:" + b + '; z-index:9; " ></div>', this.element = $(c).appendTo(document.body), $("#_lightbox").remove(), this.count = 0
},getZIndex: function() {
    return parseInt(this.element.css("zIndex")) || -1
},hide: function() {
    var a = this;
    a.element && ($.browser.msie && Number($.browser.version) < 9 ? setTimeout(function() {
        a.count--, (a.count <= 0 || a.element.css("zIndex") <= 7) && a.element.hide()
    }, 200) : (a.count--, (a.count <= 0 || a.element.css("zIndex") <= 7) && (a.element.hide(), $.browser.msie || $("div.SecEditCtrl").css("visibility", "visible"))))
},resetZIndex: function() {
    return this.setZIndex("7")
},setZIndex: function(a) {
    return this.element || this.init(), this.element.css("zIndex", a || this.element.css("zIndex"))
},show: function() {
    return this.element || this.init(), $.browser.msie && "6.0" == $.browser.version && !$.support.style && this.element.css("height", CU.getDocumentPracticalHeight() + "px"), this.element.show(), this.setZIndex("9"), this.count < 0 && (this.count = 0), this.count++, $.browser.msie || $("div.SecEditCtrl").each(function() {
        $(this).parents("div.bu-pop") || $(this).css("visibility", "hidden")
    }), this
},zIndexUp: function() {
    this.element.css("zIndex", "+=2")
},zIndexDown: function() {
    this.element.css("zIndex", "-=2")
},showMessage: function(a) {
    var b = a, c = arguments[1], d = this;
    if ((a && a.code || void 0 !== a.code && null == a.code) && (b = Common.Error.getMsgByCode(a)), window.sgp)
        return void (c && $(c).length > 0 && (c.show(), c.find(".msgArea_msg").text(b), CU.changeLan(c)));
    if (d.element) {
        if (d.isShowMessageModel())
            return;
        this.element.show(), d.element.css({zIndex: d.element.css("zIndex"),height: CU.getDocumentPracticalHeight() + "px"}), this.count++, $.browser.msie || $("div.SecEditCtrl").each(function() {
            $(this).parents("div.bu-pop") || $(this).css("visibility", "hidden")
        })
    } else
        d.show();
    window.sgp && $("#msgBox").css("zIndex", "1000"), $("#lightbox").attr("zindex", $("#lightbox").css("zIndex")).css("zIndex", "930"), $("#msgContent").text(b), CU.changeLan($("#msgBox")), d.msgBox || (d.msgBox = $("#msgBox"), $("#hideMsgBox,#closeMsgBox").on("click", function() {
        d.hideMessage()
    })), d.msgBox.show(), CU.setObjScreenAbsCenter(d.msgBox), d.msgBox.css("zIndex", "931"), $(window).on("resize", function() {
        CU.setObjScreenAbsCenter(d.msgBox)
    })
},hideMessage: function() {
    this.msgBox.hide(), this.element.css("zIndex", $("#lightbox").attr("zIndex").toString()), this.count--, (this.count <= 0 || this.element.css("zIndex") <= 7) && (this.element.hide(), $.browser.msie || $("div.SecEditCtrl").css("visibility", "visible")), $(window).off("resize")
},isShowMessageModel: function() {
    return $("#msgBox").is(":visible")
}}, Common.Hashtable = function() {
    this._hash = new Object
}, Common.Hashtable.prototype = {add: function(a, b) {
    return void 0 === a || this.contains(a) ? !1 : (this._hash[a] = void 0 === b ? null : b, this.length++, !0)
},clear: function() {
    for (var a in this._hash)
        delete this._hash[a];
    this.length = 0
},contains: function(a) {
    return void 0 !== this._hash[a]
},count: function() {
    return this.length
},isEmpty: function() {
    return 0 == this.length
},item: function(a, b) {
    return b && (this._hash[a] = b), this._hash[a]
},length: 0,remove: function(a) {
    delete this._hash[a], this.length--
}}, Common.upperAmount = function(a, b, c) {
    var d = a.el.find(c);
    a.el.find(b).on("keyup", function() {
        var a = $(this), b = $.trim(a.val().removeComma());
        d.text("C" == lan && "" != b && /^[0-9]{1,12}(\.\d{1,2}){0,1}$/.test(b) ? CU.CNYFormat(b) : "-").show()
    })
};
var Pager = Pager || {defaultIndex: 1};
Pager.Entity = function() {
    var a = this.defaultIndex;
    this.setPageIndex = function(b) {
        a = b
    }, this.getPageIndex = function() {
        return a
    }, this.params = this.params || {}
}, Pager.Entity.prototype = {init: function(a) {
    return this.paramsCheck(a) ? (this.paramsRefactoring(a), this.render(), this.bindEvent(), void (this.autoCallback && this.callbackFn(a.pageIndex, this.point))) : !1
},bindEvent: function() {
    var a = this;
    a.canvas.find("a.prev,a.next,a.goto").on("click", function() {
        a.clickHandler($(this))
    }), a.canvas.find(".page_pop_btn").on("click", function() {
        var b = a.canvas.find("div.page_pop_div");
        Common.LightBox.show(a.point.el), CU.setObjAbsCenter(b), b.show()
    }), a.canvas.find("a.page_pop_cancel").on("click", function() {
        a.canvas.find("div.page_pop_div").hide(), Common.LightBox.hide(a.point._el)
    }), a.canvas.find("a.page_pop_ok").on("click", function() {
        a.canvas.find("div.page_pop_div").hide(), Common.LightBox.hide(a.point._el);
        var b = parseInt(a.canvas.find("div.page_pop_div input").val());
        1 > b || b > this.pageCount || a.pageIndexChange(b)
    })
},clickHandler: function(a) {
    var b = a.attr("op"), c = this.getPageIndex();
    if (!(1 == c && "first" == b || c == this.pageCount && "last" == b)) {
        switch (b) {
            case "prev":
                c--;
                break;
            case "next":
                c++;
                break;
            case "first":
                c = 1;
                break;
            case "last":
                c = this.pageCount;
                break;
            case "goto":
                if (a.hasClass("btn-disabled"))
                    return;
                c = this.canvas.find("input.input-page").val();
                break;
            default:
                c = parseInt(a.text())
        }
        var d = a.parent().hasClass("disabled");
        if ("goto" == b && !d) {
            if ("" == c || /^[1-9]+[0-9]*$/.test(c + "") === !1 || isNaN(parseInt(c)) || parseInt(c) != c)
                return this.canvas.find("input.input-page").val(""), Common.LightBox.showMessage(CU.getDictNameByKey("l8979")), !1;
            if (parseInt(c) % 1 != 0)
                return this.canvas.find("input.input-page").val(""), Common.LightBox.showMessage(CU.getDictNameByKey("l8979")), !1;
            if (1 > c || c > this.pageCount)
                return this.canvas.find("input.input-page").val(""), Common.LightBox.showMessage(CU.getDictNameByKey("l10013")), !1
        }
        return "goto" == b && 1 == this.pageCount ? (Common.LightBox.showMessage(CU.getDictNameByKey("l8978")), !1) : void this.pageIndexChange(c)
    }
},htmlCombine: function() {
    this.outputHtml = '<ul class="page"><li class="p-list" ><span lan="l0384" v="查询到" class="mr5"></span><em>' + this.recordCount + '</em><span lan="l0385" v="条记录" class="ml5"></span></li><li class="p-list"><span lan="l1430" v="第" class="mr5"></span><em class="js-curindex">' + this.getPageIndex() + '</em><span class="ml5 mr5" lan="l1428" v="页/共"></span><em>' + Math.ceil(this.recordCount / this.pageSize) + '</em><span class="ml5" lan="l36263" v="页"></span></li><li class="p-list"><a href="javascript:void(0);" title="" class="prev" op="prev" lan="l1425" v="上一页"></a></li><li class="p-list"><a href="javascript:void(0);" title="" class="next" op="next" lan="l1426" v="下一页"></a></li><li class="p-list"><span lan="l1427" v="跳转到第"></span><input type="text" class="input input-page"><span lan="l1429" v="页"></span></li><li class="p-list"><a class="btn btn-gray-s btn-page goto" href="javascript:void(0);" op="goto"><span class="btn-r goto" op="goto" lan="l0441">' + CU.getDictNameByKey("l0441") + "</span></a></li></ul>"
},displayPageNum: function() {
    for (var a = this, b = "", c = [], d = 4; d > 0; d--)
        a.getPageIndex() - d > 0 && c.push(a.getPageIndex() - d);
    c.push(a.getPageIndex());
    for (var e = c.length, d = 1; 5 > d; d++)
        a.getPageIndex() + d <= a.pageCount && c.push(a.getPageIndex() + d);
    var f = 0;
    if (3 >= e || e <= c.length / 2)
        for (var d = 1; d <= c.length && 5 >= d; d++)
            b += '<em class="default-num ' + (d == e ? "cur-num" : "") + '">' + c[d - 1] + "</em>";
    else if (c.length - e >= 2 || e >= c.length / 2)
        for (var d = c.length; d > 0 && 5 > f; d--)
            f++, b = '<em class="default-num ' + (d == e ? "cur-num" : "") + '">' + c[d - 1] + "</em>" + b;
    return b
},htmlFormat: function(a) {
    var b = "";
    return b = "prev" == a ? "pre-sh" : "next-sh", "<" + this.panelFlag + ' class="' + b + " " + a + '" op="' + a + '"></' + this.panelFlag + ">"
},pageIndexChange: function(a) {
    1 > a || a > this.pageCount || (this.setPageIndex(a), this.canvas.find("em.js-curindex").text(a), 1 == a ? this.canvas.find("a.prev").addClass("disabled") : this.canvas.find("a.prev").removeClass("disabled"), a == this.pageCount ? this.canvas.find("a.next").addClass("disabled") : this.canvas.find("a.next").removeClass("disabled"), this.canvas.find("input.input-page").val(""), this.callbackFn && this.callbackFn(a, this.point))
},paramsCheck: function(a) {
    var b = "Parameter error!";
    if (0 !== a.pageCount) {
        if (!a.pageCount && (!a.canvas || !a.pageSize || void 0 === a.recordCount || a.recordCount < 0))
            return alert(b), !1;
        if (0 !== a.recordCount)
            return !0
    }
},paramsRefactoring: function(a) {
    var b = this;
    if (b.goToPage = a.goToPage || "", b.panelFlag = a.panelFlag || "span", b.callbackFn = a.callbackFn || void 0, a.pageIndex && this.setPageIndex(a.pageIndex), b.canvas = $(a.canvas).first(), b.point = a.point || null, b.autoCallback = a.autoCallback || null, b.recordCount = a.recordCount, b.pageSize = a.pageSize, b.pageCount = a.pageCount || parseInt((a.recordCount - 1) / a.pageSize + 1), b.pageCount < 1)
        return void (b.outputHtml = "");
    var c = "undefined" == typeof a.isShowPrevNext || a.isShowPrevNext;
    b.prevHtml = c ? this.htmlFormat("prev") : "", b.nextHtml = c ? this.htmlFormat("next") : "", a.showDownload && (b.showDownload = !0, b.downClick = a.downClick), a.showPrint && (b.showPrint = !0, b.printClick = a.printClick)
},render: function() {
    var a = this;
    a.htmlCombine(), a.canvas.html(a.outputHtml), a.getPageIndex() > 1 ? (a.canvas.find("span.first").addClass("first-sh-g"), a.canvas.find("span.prev").addClass("pre-sh-g")) : (a.canvas.find("span.first").removeClass("first-sh-g"), a.canvas.find("span.prev").removeClass("pre-sh-g")), a.getPageIndex() < a.pageCount ? (a.canvas.find("span.last").addClass("last-sh-g"), a.canvas.find("span.next").addClass("next-sh-g")) : (a.canvas.find("span.last").removeClass("last-sh-g"), a.canvas.find("span.next").removeClass("next-sh-g")), a.showDownload && $('<a id="download" target="_blank" class="btn btn-gray-s btn-page ml5" href="javascript:void(0);"><span class="btn-r" lan="l0442" v="下载"></span></a>').on("click", function() {
        a.downClick && a.downClick($(this))
    }).appendTo(a.canvas.find("ul>li.p-list").last()), a.showPrint && $('<a id="listPrint" class="btn btn-gray-s btn-page ml5" href="javascript:void(0);"><span class="btn-r" lan="l0416" v="打印"></span></a>').on("click", function() {
        a.printClick && a.printClick()
    }).appendTo(a.canvas.find("ul>li.p-list").last()), 1 == a.pageCount && a.canvas.find(".prev").addClass("disabled"), 1 == a.getPageIndex() && 1 == a.pageCount && (a.canvas.find(".prev").addClass("disabled"), a.canvas.find(".btn-page[op=goto]").addClass("btn-disabled")), 1 == a.getPageIndex() && a.canvas.find(".prev").addClass("disabled"), a.getPageIndex() == a.pageCount && a.canvas.find(".next").addClass("disabled"), CU.changeLan(a.canvas)
}}, Pager.getInstance = function(a) {
    return new Pager.Entity(a)
}, Model.prototype.setCurrentIndex = function(a) {
    return a && (this.attributes.params.currentIndex = this.attributes.params.pageSize ? (a - 1) * this.attributes.params.pageSize : a), this
}, Model.migrate = {map: {PsnAccountQuery: {name: "a",args: [30, 1]},PsnAccountSigningProductQuery: {name: "a",args: [30, 1]},PsnAccountQueryForPaging: {name: "a",args: [25, 1]},PsnLinkAccProQuery: {name: "a",args: [25, 0]},PsnPackageQuery: {name: "a",args: [25, 0]},PsnXpadProgressQuery: {name: "a",args: [10, 0]},PsnVirtualVircardListQuery: {name: "b"},PsnXpadQueryGuarantyProductListResult: {name: "b"},PsnXpadSingleProductQuery: {name: "b"},PsnXpadTradStatus: {name: "b"},PsnOFAProdQueryByCode: {name: "b"},PsnOFAComBuyAndGenTrsQuery: {name: "b"},PsnBFTHistoryTransQueryResult: {name: "b"},PsnBFTRelationQueryResult: {name: "b"},PsnStockThirdTAQuery: {name: "b"},PsnStockThirdTransactionQuery: {name: "b"},PsnStockThirdResHisQueryList: {name: "b"},StockTQuerySingInfo: {name: "b"},StockTQueryTransferRecord: {name: "b"},PsnCashBankCompanyDetail: {name: "b"},PsnCashBankYieldsDetail: {name: "b"},PsnCrcdDividedPayHisQry: {name: "b"},PsnRegularToCurrentParamQuery: {name: "b"},PsnVFGBailProductQuery: {name: "b"},PsnVFGTradeInfoQuery: {name: "b"},PsnForexAllTransQuery: {name: "b"},PsnWealthDetailQuery: {name: "b"},PsnWealthTransRecordQuery: {name: "b"},PsnFundStatusDdTransQuery: {name: "b"},PsnEntrustTransQuery: {name: "b"},PsnHistoryTransQuery: {name: "b"},PsnPrepaidCardQueryReplenishmentList: {name: "b"},CheckSharedAccount: {name: "b"},PsnBatTransDetail: {name: "b"},PsnBatTransSumList: {name: "b"},PsnOcrsHistoryTransferQuery: {name: "b"},PsnTransActQueryPaymentOrderList: {name: "b"},PsnTransActQueryReminderOrderList: {name: "b"},PsnTransQueryExternalBankInfo: {name: "b"},RemitSetMealApply: {name: "b"},RemitSetMealApplyPre: {name: "b"},RemitSetMealCancel: {name: "b"},RemitSetMealCancelPre: {name: "b"},RemitSetMealModify: {name: "b"},RemitSetMealModifyPre: {name: "b"},RemitSetMealQuery: {name: "b"},PsnCrcdDividedPayConsumeQry: {name: "b"},PsnCrcdVirtualCardQuery: {name: "b"},PsnCrcdVirtualCardUnsettledbillQuery: {name: "b"},PsnBocExpressPaymentRecordQuery: {name: "b"},PsnEpayQueryAgreementPaySignRelation: {name: "b"},PsnEpayQueryAgreePaymentRecord: {name: "b"},PsnEpayQueryAllTypeRecord: {name: "b"},PsnInsuranceProductQuery: {name: "b"},PsnInsuranceSavedQuery: {name: "b"},PsnInternationalTransferTemplateQuery: {name: "b"},PsnXpadProductQuery: {name: "b",args: [!0]},StockTQueryCompanyList: {name: "b",args: [!0]},StockTQueryTransTime: {name: "b",args: [!0]},StockTQueryCompanyBalance: {name: "b",args: [!0]},StockTBanktoCompanyPre: {name: "b",args: [!0]},StockTBanktoCompany: {name: "b",args: [!0]},StockTCompanytoBank: {name: "b",args: [!0]},StockTSignPre: {name: "b",args: [!0]},StockTSign: {name: "b",args: [!0]},PsnFessQueryExchangeTrans: {name: "b",args: [!0]},PsnFundQueryTransOntran: {name: "b",args: [!0]},PsnInsuranceListQuery: {name: "b",args: [!0]},PsnInsuranceTradeQuery: {name: "b",args: [!0]},PsnProxyPaymentSignRelationQuery: {name: "b",args: [!0]},PsnPasswordRemitFreeTranQuery: {name: "b",args: [!0]},RemitSetMealDetail: {name: "b",args: [!0]},PsnTransQueryTransferRecord: {name: "b",args: [!0]},PsnEshopQueryHistoryOrder: {name: "b",args: [!0]},PsnEshopQueryNewOrder: {name: "b",args: [!0]},PsnSVRServiceRecQueryDetail: {name: "b",args: [!0]},PsnFincHistoryQuery: {name: "b",args: [!0]},PsnFincTodayQuery: {name: "b",args: [!0]},PsnFundAttentionQueryList: {name: "b",args: [!0]},PsnFundQueryAppointDeal: {name: "b",args: [!0]},PsnFundQueryConsignStatus: {name: "b",args: [!0]},PsnFundQueryHistoryDetail: {name: "b",args: [!0]},PsnFundStatusDdApplyQuery: {name: "b",args: [!0]},PsnOFAProductQuery: {name: "b",args: [!0]},PsnCrcdQueryFutureBill: {name: "b",args: [!0]},PsnEpayQueryOnlinePaymentRecord: {name: "b",args: [!0]},PsnFundQueryTodayConsignStatus: {name: "b",args: [!0]},PsnFundCollectionparamQuery: {name: "b",args: [!0]},PsnEbpsTransferRecordQuery: {name: "b",args: [!1, !0]},PsnGoldTDQueryInstIdList: {name: "b",args: [!1, !0]},PsnGoldTDQueryConsign: {name: "b",args: [!1, !0]},PsnGoldTDCancelConsign: {name: "b",args: [!1, !0]},PsnGoldTDQueryTransfer: {name: "b",args: [!1, !0]},PsnAnnuityAccInfoList: {name: "b",args: [!1, !0]},PsnAnnuityQuery: {name: "b",args: [!1, !0]},PsnQueryBancInfo: {name: "b",args: [!0, !0]},PsnQueryCrcdBancInfo: {name: "b",args: [!0, !0]},PsnEbpsQueryAccountOfBank: {name: "b",args: [!0, !0]},PsnGoldTDQueryNotifyBill: {name: "b",args: [!0, !0]},PsnGoldStoreTransQuery: {name: "b",args: [!0, !0]},PsnTransPreRecordQuery: {name: "b",args: [!0, !0]},PsnCurrentToRegularParamQuery: {name: "b",args: [!1, !1, 1]},PsnFinanceICTransferDetail: {name: "c"},PsnEpayQueryFinancialPaymentRecord: {name: "d"},PsnCrcdQueryBilledTransDetail: {name: "e"},PsnInternationalTransferSwiftQuery: {name: "f"}},func: {a: function(a, b, c) {
    this.attributes.params || (this.attributes.params = {}), this.attributes.params.currentIndex = (a - 1) * b + c
},b: function(a, b, c, d, e, f) {
    return this.attributes.params || (this.attributes.params = {}), f || (f = 0), b && (this.attributes.params.pageSize = d ? b + "" : b), e && "undefined" === c || (this.attributes.params._refresh = c ? "true" : "false"), this.attributes.params.currentIndex = d ? (a - 1) * this.attributes.params.pageSize + f + "" : (a - 1) * this.attributes.params.pageSize + f, this
},c: function(a, b) {
    return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.pageSize = b + ""), this.attributes.params.currentIndex = a + "", this
},d: function(a, b, c) {
    return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.pageSize = b), this.attributes.params._refresh = c ? "true" : "false", this.attributes.params.currentIndex = (a - 1) * this.attributes.params.pageSize + "", this
},e: function(a, b, c) {
    return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.lineNum = b + ""), this.attributes.params._refresh = c ? "true" : "false", this.attributes.params.currentIndex = (a - 1) * this.attributes.params.lineNum + "", this
},f: function(a, b, c) {
    return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.pageSize = b), this.attributes.params._refresh = c ? "true" : "false", this.attributes.params.currentIndex = a - 1, this
}}}, Model.prototype.findPage = function() {
    var a, b = Model.migrate.map[this.attributes.method], c = [], d = arguments.length;
    for ("b" === b.name && (d = 3), a = 0; d > a; a++)
        c[a] = arguments[a];
    return b && Model.migrate.func[b.name].apply(this, b.args ? c.concat(b.args) : c), this
}, lan = dojo.locale && "zh" == dojo.locale ? "C" : "E";
