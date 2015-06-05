KISSY.add("detail-model/product", function(e, t, n) {
    var a, i = window, r = document, o = g_config["assetsHost"] = g_config["assetsHost"] || "http://a.tbcdn.cn", u = o.indexOf(".daily.") != -1;
    function c(e, t) {
        var n = e.promText ? 2 : e.limitTime && e.start === false ? 1 : 0;
        var a = t.promText ? 2 : t.limitTime && t.start === false ? 1 : 0;
        if (n != a) {
            return n - a
        }
        return e.price - t.price
    }
    function l() {
        l.superclass.constructor.apply(this, arguments);
        var t = this;
        _CTK6da3(20, "model.product.init", "app.init");
        t.addAttr("deviceType", {value: "pc"});
        t.addAttr("3rdExtraInfo", {value: null});
        t.addAttr("thirdPartyInventory", {value: null});
        t.addAttr("etParams", {value: null});
        t.addAttr("token", {load: function(e) {
                t.onLoad("config", function(n) {
                    if (n && n.token) {
                        e(n.token);
                        return
                    }
                    t.onToken(e)
                })
            }});
        t.addAttr("bucketId", {load: function(e) {
                var n = t.getState("bucket_id");
                if (n) {
                    e(parseInt(n, 10));
                    return
                }
                t.onLoad("config", function(t) {
                    e(parseInt(t.bucketId || 0, 10))
                })
            }});
        t.addAttr("qrcodeUrl", {load: function(e) {
                t.onLoad(["itemDO"], function(t) {
                    if (!t) {
                        e(null);
                        return
                    }
                    e("http://" + (u ? "10.125.199.21" : "gqrcode.alicdn.com") + "/img?v=1&type=bi&item_id=" + t.itemId)
                })
            }});
        t.addAttr("amount", {validator: function(e) {
                return !isNaN(e = parseInt(e, 10)) && e > 0
            },setter: function(e) {
                return parseInt(e, 10)
            },load: function(e) {
                e(1);
                t.onLoad("config", function(t) {
                    e(t && t.detail && t.detail.quantityList && t.detail.quantityList[0])
                })
            }});
        t.addAttr("amountMultiple", {load: function(e) {
                e(1);
                t.onLoad(["config", "itemDO"], function(t, n) {
                    if (t && t.timesBuy > 1) {
                        e(t.timesBuy)
                    } else if (n && n.timesBuy > 1) {
                        e(n.timesBuy)
                    }
                })
            }});
        t.addAttr("originalPrice", {load: function(e) {
                t.onChange(["currentPriceInfoList", "selectedSkuList", "config"], function(t, n, a) {
                    var i = {}, r = true, o;
                    if (t) {
                        for (var u in t) {
                            if ((o = t[u] && t[u].price) !== undefined) {
                                i.min = Number(o) > Number(i.min) ? i.min : o;
                                i.max = Number(o) < Number(i.max) ? i.max : o;
                                r = false
                            }
                        }
                    }
                    if (r && n) {
                        for (var u in n) {
                            if ((o = n[u] && n[u].price) !== undefined) {
                                i.min = Number(o) > Number(i.min) ? i.min : o;
                                i.max = Number(o) < Number(i.max) ? i.max : o;
                                r = false
                            }
                        }
                    }
                    if (r && a) {
                        if ((o = a.itemDO.reservePrice || a.detail.defaultItemPrice) !== undefined) {
                            i.min = i.max = o;
                            r = false
                        }
                    }
                    if (r) {
                        i = null
                    } else {
                        i.str = i.min;
                        if (i.min != i.max) {
                            i.str += "-" + i.max
                        }
                    }
                    e(i)
                })
            }});
        t.addAttr("buyPrice", {load: function(e) {
                var n, a;
                t.onChange(["currentPriceInfoList", "originalPrice", "currentCycle", "3rdExtraInfo"], function(n, a, i, r) {
                    var o = r && r.price;
                    if (o) {
                        return e({max: o,min: o,str: o})
                    }
                    var u = 0, c = false, l = {}, d = true, s;
                    if (i) {
                        var s = (i.bPrice / 100).toFixed(2);
                        e({max: s,min: s,str: s});
                        return
                    }
                    var f = function() {
                        if (u > 0 || !c) {
                            return
                        }
                        if (d) {
                            l = a
                        } else {
                            l.str = l.min;
                            if (l.min != l.max) {
                                l.str += "-" + l.max
                            }
                        }
                        e(l)
                    };
                    for (var m in n) {
                        u++;
                        t.onPriceInfo(n[m], function(e) {
                            t.onPromotionList(e, function(t) {
                                var n = t && t[0];
                                if (n && !n.promText && (!n.limitTime || n.start !== false) && (s = n.price) !== undefined) {
                                    l.min = Number(s) > Number(l.min) ? l.min : s;
                                    l.max = Number(s) < Number(l.max) ? l.max : s;
                                    d = false
                                } else if ((s = e.price) !== undefined) {
                                    l.min = Number(s) > Number(l.min) ? l.min : s;
                                    l.max = Number(s) < Number(l.max) ? l.max : s
                                }
                                u--;
                                f()
                            })
                        })
                    }
                    c = true;
                    f()
                })
            }});
        t.addAttr("promoPrice", {load: function(e) {
                var n, a;
                t.onChange(["currentPriceInfoList", "originalPrice"], function(n, a) {
                    var i = 0, r = false, o = {}, u = true, c;
                    var l = function() {
                        if (i > 0 || !r) {
                            return
                        }
                        if (u) {
                            o = a
                        } else {
                            o.str = o.min;
                            if (o.min != o.max) {
                                o.str += "-" + o.max
                            }
                        }
                        e(o)
                    };
                    for (var d in n) {
                        i++;
                        t.onPriceInfo(n[d], function(e) {
                            t.onPromotionList(e, function(t) {
                                var n = t && t[0];
                                if (n && !n.promText && (c = n.price) !== undefined) {
                                    o.min = Number(c) > Number(o.min) ? o.min : c;
                                    o.max = Number(c) < Number(o.max) ? o.max : c;
                                    u = false
                                } else if ((c = e.price) !== undefined) {
                                    o.min = Number(c) > Number(o.min) ? o.min : c;
                                    o.max = Number(c) < Number(o.max) ? o.max : c
                                }
                                i--;
                                l()
                            })
                        })
                    }
                    r = true;
                    l()
                })
            }});
        t.addAttr("tagPrice", {load: function(e) {
                t.onChange(["currentPriceInfoList", "selectedSkuList"], function(t, n) {
                    var a = {}, i = true, r;
                    if (t) {
                        for (var o in t) {
                            if ((r = t[o] && t[o].tagPrice) !== undefined && r !== null) {
                                a.min = Number(r) > Number(a.min) ? a.min : r;
                                a.max = Number(r) < Number(a.max) ? a.max : r;
                                i = false
                            }
                        }
                    }
                    if (i && n) {
                        for (var o = 0, u = n.length; o < u; o++) {
                            if ((r = n[o] && n[o].tagPrice) !== undefined && r !== null) {
                                a.min = Number(r) > Number(a.min) ? a.min : r;
                                a.max = Number(r) < Number(a.max) ? a.max : r;
                                i = false
                            }
                        }
                    }
                    if (i) {
                        a = null
                    } else {
                        a.str = a.min;
                        if (a.min != a.max) {
                            a.str += "-" + a.max
                        }
                    }
                    e(a)
                })
            }});
        t.addAttr("servicePrice", {load: function(n) {
                t.onChange(["selectedService", "currentService", "service"], function(t, a, i) {
                    i = a || i;
                    var r = 0;
                    if (t && i) {
                        e.each(i.list, function(n) {
                            var a = t[n.id];
                            if (!a) {
                                return
                            }
                            if (n.uniqueServices && n.uniqueServices.length) {
                                e.each(n.uniqueServices, function(e) {
                                    if (e.uniqueId != a) {
                                        return
                                    }
                                    r += e.price * 1
                                })
                            } else {
                                if (a === n.uniqueId) {
                                    r += parseFloat(n.price)
                                }
                            }
                        })
                    }
                    n({min: r.toFixed(2),max: r.toFixed(2)})
                })
            }});
        t.addAttr("totalPrice", {load: function(e) {
                t.onChange(["buyPrice", "servicePrice", "amount"], function(t, n, a) {
                    e({min: (t.min * 1 + n.min * 1) * a,max: (t.max * 1 + n.max * 1) * a})
                })
            }});
        t.addAttr("progressiveInfo", {load: function(n) {
                _CTK6da3(20, "mod.progressive.load", "model.product.init");
                t.onLoad(["model", "userInfo"], function(t, a) {
                    var i = t.progressiveInfoDO;
                    if (!i) {
                        _CTK6da3(20, "mod.progressive.null", "mod.progressive.load");
                        n(null);
                        return
                    }
                    var r = {extInfos: {bizType: a.userId ? i.tipType : 0,installFee: {}},show: i.showProgressivePlan,enable: i.progressiveEnable,tryBeforeBuy: i.tryBeforeBuy};
                    if (!r.tryBeforeBuy) {
                        e.each(i.rateMap, function(e, t) {
                            r.extInfos.installFee[t + "p"] = {rate: e}
                        })
                    }
                    _CTK6da3(20, "mod.progressive.success", "mod.progressive.load");
                    n(r)
                })
            }});
        function a(t) {
            var n = t.FEstepCur;
            var a = t.wrtLevelFinalPrices.length;
            var i = a - n - 1;
            var r = 0;
            if (a > 3) {
                if (t.status == 2) {
                    if (i > 0) {
                        if (n === 0) {
                            r = 0
                        } else {
                            r = n - 1
                        }
                        t.FEstepCur = n - r
                    } else {
                        r = a - 3;
                        t.FEstepCur = 2
                    }
                } else {
                    r = 0
                }
                t.wrtLevelFinalPrices = t.wrtLevelFinalPrices.slice(r, r + 3);
                t.wrtLevelNeedCounts = t.wrtLevelNeedCounts.slice(r, r + 3)
            }
            var o = t.wrtLevelNeedCounts;
            t.FEstepCur = 0;
            for (var u = a - 1; u >= 0; u--) {
                if (o[u] <= t.groupUC) {
                    t.FEstepCur = u;
                    break
                }
            }
            if (t.status != 2)
                t.FEstepCur = -1;
            var c = [];
            var l = 0;
            var d = parseInt(t.groupUC || 0);
            var s = t.wrtLevelFinalPrices;
            var f = t.wrtLevelNeedCounts;
            e.each(s, function(e, t) {
                var n = f[t];
                c[t] = [(e / 100).toFixed(2), n];
                if (d >= n) {
                    if (t <= s.length - 1) {
                        l = t
                    }
                }
            });
            var m = t.giftsList;
            var p = [];
            if (m && m.length) {
                m.forEach(function(e) {
                    var t = e.split(",");
                    p.push({from: t[0],to: t[1],contents: t[2]})
                })
            }
            t.level = l;
            t.priceCountArr = c;
            t.giftList = p;
            var v = t.price;
            var g = t.wrtLevelFinalPrices.length ? t.wrtLevelFinalPrices[t.level] - v : t.finalPayment;
            var y = 0;
            if (t.type === 2) {
                y = t.finalPayment
            } else {
                y = g + v
            }
            t.prePayFee = (v / 100).toFixed(2);
            t.preSellPrice = (y / 100).toFixed(2);
            return t
        }
        t.addAttr("currentWrtInfo", {load: function(n) {
                t.onChange(["selectedSku", "currentPriceInfo", "priceInfo", "itemPrice"], function(t, i, r, o) {
                    if (i) {
                        i = e.clone(i)
                    } else {
                        return n(null)
                    }
                    if (t) {
                        if (i && i.wrtInfo) {
                            i.wrtInfo.priceRange = null;
                            var u = i.wrtInfo;
                            var c = u.FEstepCur < 0 ? 0 : u.FEstepCur;
                            u.FEstepCur = c;
                            u = a(u);
                            return n(u)
                        } else {
                            return n(null)
                        }
                    } else {
                        var u = i.wrtInfo;
                        if (!u) {
                            if (!o)
                                return n(null);
                            u = o.wanrentuanInfo
                        }
                        if (u) {
                            var c = u.FEstepCur < 0 ? 0 : u.FEstepCur;
                            u.FEstepCur = c;
                            u = a(u);
                            var l = {minPre: null,maxPre: null,minTotal: null,maxTotal: null,minTail: null,maxTail: null};
                            for (var d in r) {
                                var s = r[d];
                                var f = s.wrtInfo;
                                if (f) {
                                    f = a(f);
                                    var c = f.FEstepCur < 0 ? 0 : f.FEstepCur;
                                    s.FEstepCur = c;
                                    var m = f.price;
                                    var p = f.wrtLevelFinalPrices.length ? f.wrtLevelFinalPrices[c] - m : f.finalPayment;
                                    var v;
                                    if (f.type === 2) {
                                        v = f.finalPayment
                                    } else {
                                        v = p + m
                                    }
                                    if (!l.minTotal || v < l.minTotal) {
                                        l.minTotal = v
                                    }
                                    if (!l.minPre || m < l.minPre) {
                                        l.minPre = m
                                    }
                                    if (!l.minTail || p < l.minTail) {
                                        l.minTail = p
                                    }
                                    if (!l.maxTotal || v > l.maxTotal) {
                                        l.maxTotal = v
                                    }
                                    if (!l.maxPre || m > l.maxPre) {
                                        l.maxPre = m
                                    }
                                    if (!l.maxTail || p > l.maxTail) {
                                        l.maxTail = p
                                    }
                                }
                            }
                            if (l.minTotal != l.maxTotal || l.minPre != l.maxPre) {
                                u.priceRange = l
                            } else {
                                u.priceRange = null
                            }
                            if (u.priceRange) {
                                if (l.minTotal != l.maxTotal) {
                                    u.preSellPrice = (l.minTotal / 100).toFixed(2) + "-" + (l.maxTotal / 100).toFixed(2)
                                }
                                if (l.minPre != l.maxPre) {
                                    u.prePayFee = (l.minPre / 100).toFixed(2) + "-" + (l.maxPre / 100).toFixed(2)
                                }
                            }
                            n(u)
                        } else {
                            n(null)
                        }
                    }
                })
            }});
        t.addAttr("progressiveType", {load: function(e) {
                e(t.getState("fenqi") == 1 ? "3p" : "")
            }});
        t.addAttr("currentProgressive", {load: function(e) {
                t.onChange(["progressiveInfo", "itemDO", "totalPrice", "progressiveType"], function(n, a, i, r) {
                    t.onProgressive(r, function(t) {
                        e(t && t.enabled ? t : null)
                    })
                })
            }});
        t.addAttr("xshmPay", {load: function(e) {
                e(0)
            }});
        t.addAttr("isOfflineShop", {load: function(e) {
                e(window.g_config && window.g_config.offlineShop == 1)
            }});
        t.addAttr("tradeResult", {load: function(e) {
                e(null)
            }});
        t.addAttr("config", {});
        t.addAttr("mdskip", {});
        t.addAttr("model", {load: function(n) {
                var a;
                t.onLoad(["config", "deviceType"], function(i, r) {
                    t.onChange("mdskip", function(o) {
                        o = o || {};
                        var u;
                        if (o.isSuccess) {
                            u = o["defaultModel"];
                            if (u.tradeResult) {
                                if (e.isUndefined(u.tradeResult.tradeType) || u.tradeResult.tradeType == null) {
                                    u.tradeResult.tradeType = i.tradeType
                                }
                            }
                            e.log("TMLOG::detailMode:" + (a = a == "skipError" ? "skipOkAfterError" : "skipOk"), "info")
                        } else {
                            u = {itemPriceResultDO: {priceInfo: {},areaId: 330100,promType: t.getState("key") ? 1 : 0},userInfoDO: {},miscDO: {city: "\u676d\u5dde",cityId: "330100",region: "\u4e0a\u57ce\u533a",regionId: "330102"},gatewayDO: {},deliveryDO: {deliverySkuMap: {}}};
                            if (r === "phone") {
                                e.mix(u, o.defaultModel, true)
                            } else {
                                e.mix(u, i.noSkipMode, true)
                            }
                            e.log("TMLOG::detailMode:" + (a = "skipError"), "info")
                        }
                        var c = u.tradeResult;
                        i.tradeType = c["tradeType"];
                        n(u)
                    })
                })
            }});
        t.addAttr("tmallCarFinantialEnable", {load: function(e) {
                t.onChange(["mdskip"], function(t) {
                    var n = t.defaultModel;
                    if (n) {
                        n.tradeResult = n.tradeResult || {};
                        e && e(n.tradeResult.tmallCarFinantialEnable)
                    } else {
                        e(null)
                    }
                })
            }});
        t.addAttr("priceInfo", {load: function(e) {
                t.onChange(["itemPrice"], function(t) {
                    e && e(t ? t.priceInfo || null : null)
                })
            }});
        t.addAttr("buyerLoc", {load: function(e) {
                t.onLoad("model", function(t) {
                    e(t && (t.serviceInfoDO && t.serviceInfoDO.divisionId || t.itemPriceResultDO && t.itemPriceResultDO.areaId || t.miscDO && t.miscDO.cityId) || "330100")
                })
            }});
        t.addAttr("locModel", {load: function(n) {
                t.onChange("buyerLoc", function(a) {
                    t.onLoad(["config", "gateway", "model"], function(i, r, o) {
                        if (o.serviceInfoDO && o.serviceInfoDO.divisionId == a || o.itemPriceResultDO && o.itemPriceResultDO.areaId == a || o.miscDO && o.miscDO.cityId == a) {
                            n({});
                            return
                        }
                        t.canSoldArea(a, function(o) {
                            if (!o) {
                                return
                            }
                            var u = t.getState(["campaignId", "abt", "key"]);
                            e.mix(u, r && r.changeLocationGateway);
                            if (i.changeLocationApi.indexOf("tmallBuySupport") == -1) {
                                u.tmallBuySupport = i.tradeType == 2 || i.tradeType == 7 ? "true" : "false"
                            }
                            u.ref = encodeURIComponent(document.referrer);
                            u.areaId = a;
                            e.use("ajax", function(e, t) {
                                _CTK6da3(20, "data.locationUrl.start", "model.product.init");
                                t.jsonp(i.changeLocationApi, u, function(e) {
                                    if (e && e.isSuccess) {
                                        _CTK6da3(20, "data.locationUrl.success", "data.locationUrl.start");
                                        n && n(e && e.defaultModel)
                                    } else {
                                        _CTK6da3(20, "data.locationUrl.error", "data.locationUrl.start")
                                    }
                                })
                            })
                        })
                    })
                })
            }});
        t.addAttr("soldArea", {load: function(e) {
                t.onChange("model", function(t) {
                    var n = t ? t.soldAreaDataDO : null;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("amountRestrict", {load: function(e) {
                t.onChange(["model", "config"], function(t, n) {
                    e(t && t.buyerRestrictInfoDO && t.buyerRestrictInfoDO.amountRestrictInfoMap || null)
                })
            }});
        t.addAttr("sellCount", {load: function(n) {
                e.use("dom", function(e, a) {
                    var i, r = a.get(".tm-count", ".tm-ind-sellCount"), o = true;
                    if (r && (i = r.innerHTML) && !/^[0\s]*$/.test(i)) {
                        n({sellCount: parseInt(i, 10)});
                        o = false
                    }
                    t.onChange("model", function(e) {
                        var t = e && e.sellCountDO;
                        t = t && t.success !== false ? t : null;
                        if (t || o) {
                            n(t);
                            o = false
                        }
                    })
                })
            }});
        t.addAttr("trade", {load: function(e) {
                t.onChange(["model", "config", "cycle", "misc"], function(t, n, a, i) {
                    var r = t && t.tradeResult || n && n.noSkipMode && n.noSkipMode.tradeResult;
                    if (r && t && t.miscDO && t.miscDO.sellCountDown) {
                        if (!r.sellCountDown) {
                            r.sellCountDown = t.miscDO.sellCountDown
                        }
                        delete t.miscDO.sellCountDown
                    }
                    if (a && r && !r.sellCountDown && parseInt(a.startTime, 10) > parseInt(i.systemTime, 10)) {
                        r.sellCountDown = Math.floor((a.startTime - i.systemTime) / 1e3)
                    }
                    e(r && r.success !== false ? r : null)
                })
            }});
        t.addAttr("userInfo", {load: function(e) {
                t.onChange("model", function(t) {
                    var n = t && t.userInfoDO;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("isLogin", {load: function(e) {
                t.onChange("userInfo", function(t) {
                    e(t ? t.userId > 0 : false)
                })
            }});
        t.addAttr("campaignInfo", {load: function(e) {
                t.onChange("model", function(t) {
                    var n = t && t.campaignInfo;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("jz", {load: function(e) {
                t.onChange("model", function(t) {
                    var n = t && t.jzDO;
                    if (n) {
                        n.style = t.style
                    }
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("firstSell", {load: function(e) {
                t.onChange("model", function(t) {
                    e(t.vmarket && t.vmarket.firstSellDO ? t.vmarket && t.vmarket.firstSellDO : null)
                })
            }});
        t.addAttr("secKill", {load: function(e) {
                t.onChange("model", function(t) {
                    var n = t && t.secKillDO;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("misc", {load: function(e) {
                t.onLoad("cycle", function(n) {
                    t.onChange(["model"], function(t) {
                        var n = t && t.miscDO;
                        e(n && n.success !== false ? n : null)
                    })
                })
            }});
        t.addAttr("relatedAuctions", {load: function(e) {
                t.onChange("model", function(t) {
                    var n = t && t.relatedAuctionsDO;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("detailPageTips", {load: function(e) {
                t.onChange(["model", "config"], function(t, n) {
                    var a = t && t.detailPageTipsDO || n && n.detailPageTipsDO;
                    e(a && a.success !== false ? a : null)
                })
            }});
        t.addAttr("gateway", {load: function(e) {
                t.onChange(["model", "deviceType"], function(t, n) {
                    if (n === "phone") {
                        return e({trade: {addToBuyNow: {},addToCart: {}}})
                    }
                    var a = t && t.gatewayDO;
                    e(a && a.success !== false ? a : null)
                })
            }});
        t.addAttr("itemPrice", {load: function(e) {
                t.onChange(["locModel", "model", "config"], function(t, n, a) {
                    var i = t && t.itemPriceResultDO !== undefined && t.itemPriceResultDO || n && n.itemPriceResultDO || a && a.itemPriceResultDO;
                    e(i && i.success !== false ? i : null)
                })
            }});
        t.addAttr("delivery", {load: function(e) {
                t.onChange(["locModel", "model", "deviceType"], function(t, n, a) {
                    var i = t && t.deliveryDO !== undefined && t.deliveryDO || n && (n.deliverDO || n.deliveryDO);
                    e(i && i.success !== false ? i : null)
                })
            }});
        t.addAttr("inventory", {load: function(e) {
                t.onChange(["locModel", "model"], function(t, n) {
                    var a = t && t.inventoryDO !== undefined && t.inventoryDO || n && n.inventoryDO;
                    e(a && a.success !== false ? a : null)
                })
            }});
        t.addAttr("serviceInfo", {load: function(n) {
                t.onChange(["locModel", "model"], function(a, i) {
                    if (!a && !i)
                        return n(null);
                    if (!a || e.isEmptyObject(a)) {
                        a = i
                    }
                    var r = a.serviceInfoDO;
                    if (r) {
                        var o = r.servicePriceMap;
                        var u = r.serviceItemMap;
                        if (o) {
                            e.each(o, function(t, n) {
                                e.each(t, function(n, a) {
                                    var i = String(n.id);
                                    var r = u[i];
                                    if (r) {
                                        var o = [];
                                        if (n.uniqueServices && n.uniqueServices.length) {
                                            e.each(n.uniqueServices, function(t, n) {
                                                o.push(e.merge(t, r.uniqueServices[n]))
                                            })
                                        }
                                        n = e.merge(n, r);
                                        n.uniqueServices = o
                                    }
                                    t[a] = n
                                });
                                o.skuId = t
                            })
                        }
                    }
                    if (r && r.success) {
                        t.set("cacheSelectedService", null);
                        n(r)
                    } else {
                        n(null)
                    }
                })
            }});
        t.addAttr("skuServiceMap", {load: function(e) {
                t.onChange(["serviceInfo"], function(t) {
                    var n = t ? t.servicePriceMap || t.skuServiceMap || null : null;
                    e(n)
                })
            }});
        t.addAttr("boundsSKU", {load: function(e) {
                var n = {minPrice: null,minSkuId: null,max: null,maxSkuId: null};
                t.onChange(["priceInfo"], function(t) {
                    for (var a in t) {
                        var i = t[a];
                        var r = i.promotionList;
                        var o;
                        if (r) {
                            r = r.sort(c);
                            o = r[0]
                        }
                        var u = (o ? o.price : i.price) * 100;
                        if (!n.minPrice || u < n.minPrice) {
                            n.minPrice = u;
                            n.minSkuId = a
                        }
                        if (!n.maxPrice || u > n.maxPrice) {
                            n.maxPrice = u;
                            n.maxSkuId = a
                        }
                    }
                    e(n)
                })
            }});
        t.addAttr("currentService", {load: function(n) {
                t.onChange(["serviceInfo", "skuServiceMap", "selectedSku", "boundsSKU"], function(t, a, i, r) {
                    if (t) {
                        var o = e.clone(t);
                        if (!a)
                            return n(null);
                        if (i) {
                            var u = i.skuId
                        } else {
                            var u = r.minSkuId
                        }
                        var c = a[u];
                        if (c && c.length) {
                            e.each(c, function(e) {
                                if (!e.uniqueServices || !e.uniqueServices.length) {
                                    e.uniqueId = "0"
                                }
                            });
                            o.stype = o.serviceType;
                            o.list = c;
                            n(o)
                        } else {
                            n(null)
                        }
                    } else {
                        n(null)
                    }
                })
            }});
        t.addAttr("service", {load: function(n) {
                t.onChange(["locModel", "model", "selectedSku"], function(t, a, i) {
                    var r = t && t.serviceDO !== undefined ? t.serviceDO : a && a.serviceDO;
                    var o, u = {stype: null,list: []};
                    var c = i && i.skuId || 0;
                    if (r && r.success) {
                        u.stype = r["serviceType"];
                        o = r.servicePriceMap[c];
                        if (o) {
                            for (var l = 0, d = o.length; l < d; l++) {
                                var s = e.mix({}, o[l], undefined, undefined, true);
                                var f = e.mix({}, r.serviceItemMap[s.id], undefined, undefined, true);
                                if (!f)
                                    continue;
                                if (f.uniqueServices && f.uniqueServices.length) {
                                    for (var m = 0; m < f.uniqueServices.length; m++) {
                                        if (f.uniqueServices[m]["uniqueId"] in s.uniqueServices) {
                                            e.mix(f.uniqueServices[m], s.uniqueServices[f.uniqueServices[m]["uniqueId"]], true)
                                        } else {
                                            f.uniqueServices.splice(m, 1);
                                            m--
                                        }
                                    }
                                    if (!f.uniqueServices.length)
                                        f.uniqueServices = null
                                } else {
                                    s.uniqueId = "0"
                                }
                                if (s.uniqueServices)
                                    delete s.uniqueServices;
                                e.mix(s, f, undefined, undefined, true);
                                if (u.stype == "3c" && s.free || u.stype == "house" && s.autoSelect) {
                                    s["selected"] = true
                                }
                                u.list.push(s)
                            }
                        }
                    }
                    if (u.stype == "house" && u.list && u.list.length == 1) {
                        u.list[0].selected = u.list[0].autoSelect = true
                    }
                    n(u)
                })
            }});
        t.addAttr("memberRight", {load: function(e) {
                t.onChange(["locModel", "model"], function(t, n) {
                    var a = t && t.memberRightDO !== undefined && t.memberRightDO || n && n.memberRightDO;
                    e(a && a.isSuccess !== false ? a : null)
                })
            }});
        t.addAttr("memberMultiPoint", {load: function(e) {
                t.onChange(["memberRight", "boundsSKU"], function(t, n) {
                    var a = t && t.pricePointExt;
                    var i = n.minPrice;
                    if (a) {
                        return e(Math.floor(i * a.pointRate / 100 / 10))
                    }
                    e(null)
                })
            }});
        t.addAttr("breadCrumb", {load: function(e) {
                t.onChange("Extension", function(t) {
                    var n = t && t.breadCrumbDO;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("spuMaintainer", {load: function(e) {
                t.onChange("Extension", function(t) {
                    var n = t && t.spuMaintainerDO;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("tmallShopProm", {load: function(n) {
                t.onLoad("itemPrice", function(t) {
                    var a = t && t.tmallShopProm ? t.tmallShopProm : null;
                    var i = function(e) {
                        if (e && e.promPlan && e.promPlan.length) {
                            for (var t = 0; t < e.promPlan.length; t++) {
                                if (e.promPlan[t].msg) {
                                    e.msg = e.promPlan[t].msg
                                }
                                if (e.promPlan[t].detailMsg) {
                                    e.promPlan = e.promPlan[t];
                                    break
                                }
                            }
                            return e
                        }
                    };
                    var r = function(e) {
                        if (!e || !e.promPlan || !e.promPlan.detailMsg) {
                            return false
                        } else {
                            return true
                        }
                    };
                    if (e.isArray(a)) {
                        var o = new Array(0);
                        for (var u = 0; u < a.length; u++) {
                            o.push(i(a[u]))
                        }
                        n(o)
                    } else if (e.isPlainObject(a)) {
                        var c = i(a);
                        n(r(c) ? [c] : null)
                    } else {
                        n(null);
                        return
                    }
                })
            }});
        t.addAttr("hasGift", {load: function(n) {
                t.onLoad("tmallShopProm", function(t) {
                    if (!t) {
                        n(false);
                        return
                    }
                    var a = [];
                    if (e.isArray(t)) {
                        for (var i = 0; i < t.length; i++) {
                            a.push(t[i].promPlan.detailMsg)
                        }
                    } else {
                        a = t.promPlan.detailMsg
                    }
                    var r;
                    for (var o = a.length; o--; ) {
                        r = a[o];
                        if (r.method && r.method.giftPool && r.method.giftPool.giftList && r.method.giftPool.giftList.length > 0) {
                            n(true);
                            return
                        }
                    }
                    n(false)
                })
            }});
        t.addAttr("meal", {load: function(e) {
                t.onChange("Extension", function(t) {
                    var n = t && t.mealResult;
                    e(n && n.success !== false ? n : null)
                })
            }});
        t.addAttr("dsr", {load: function(e) {
                t.onLoad(["shopDynamicRating", "itemDO"], function(t, n) {
                    if (!t) {
                        return e(null)
                    }
                    var a = "SM_368_dsr-" + n.userId;
                    var i = t[a];
                    if (i) {
                        var r = [{rate: (Math.floor(i.m * 10) / 10).toFixed(1),rate_title: i.m,rate_UFB: i.m_UFB,rate_g: i.m_g}, {rate: (Math.floor(i.s * 10) / 10).toFixed(1),rate_title: i.s,rate_UFB: i.s_UFB,rate_g: i.s_g}, {rate: (Math.floor(i.c * 10) / 10).toFixed(1),rate_title: i.c,rate_UFB: i.c_UFB,rate_g: i.c_g}];
                        e(r)
                    } else {
                        e(null)
                    }
                })
            }});
        t.addAttr("isDownShelf", {load: function(e) {
                var a, i;
                function r() {
                    var t = a || i;
                    if (t !== undefined) {
                        e(t)
                    }
                }
                t.onChange(["config"], function(e) {
                    a = e.detail.isDownShelf || !!n.get("#J_Sold-out-recommend");
                    r()
                });
                t.onChange(["model"], function(e) {
                    i = !!(e.inventoryDO && e.inventoryDO.totalQuantity === 0);
                    r()
                })
            }});
        t.addAttr("Extension", {load: function(n) {
                t.onLoad("config", function(a) {
                    var i = a && a.initExtensionApi;
                    if (!i) {
                        n({});
                        return
                    }
                    e.use("ajax", function(e, a) {
                        _CTK6da3(20, "data.extension.start", "model.product.init");
                        a({url: i,data: t.getState(["q", "cat_id"]),dataType: "jsonp",jsonpCallback: "jsonpInitExtension",cache: true,success: function(e) {
                                if (e && e.success) {
                                    _CTK6da3(20, "data.extension.success", "data.extension.start");
                                    n(e)
                                } else {
                                    _CTK6da3(20, "data.extension.error", "data.extension.start");
                                    n({})
                                }
                            },error: function() {
                                _CTK6da3(20, "data.extension.error", "data.extension.start")
                            }})
                    })
                })
            }});
        t.addAttr("reviewCount", {load: function(n) {
                t.onLoad(["config", "itemDO"], function(t, a) {
                    if (t && t.detail && t.detail.allowRate === false) {
                        n({grade: null,rateTotal: null,gradeAvg: null});
                        return
                    }
                    function i(t, n) {
                        e.use("ajax", function(e, i) {
                            i({url: t,data: {itemId: a.itemId,spuId: a.spuId,sellerId: a.userId},dataType: "jsonp",success: function(e) {
                                    var t = e && e.dsr;
                                    if (t && t.rateTotal === 0 && t.gradeAvg == 5) {
                                        t = null
                                    }
                                    n(t)
                                },error: function() {
                                    n(null)
                                }})
                        })
                    }
                    function r(e) {
                        if (e) {
                            _CTK6da3(20, "data.reviewCount.success", "data.reviewCount.start")
                        } else {
                            _CTK6da3(20, "data.reviewCount.error", "data.reviewCount.start")
                        }
                        n(e ? {grade: e.gradeAvg,gradeAvg: (e.gradeAvg + "").length > 2 ? (e.gradeAvg + "").substr(0, 3) : e.gradeAvg + "",rateTotal: e.rateTotal} : {grade: null,gradeAvg: null,rateTotal: null})
                    }
                    _CTK6da3(20, "data.reviewCount.start", "model.product.init");
                    if (t.rateConfig.rateScoreCacheDisable !== true) {
                        i("http://dsr-rate." + (u ? "daily.tmall.net" : "tmall.com") + "/list_dsr_info.htm", function(e) {
                            if (e || t.rateConfig.rateScoreDisable === false) {
                                r(e);
                                return
                            }
                            _CTK6da3(20, "data.reviewCount.again", "data.reviewCount.start");
                            i("http://rate." + (u ? "daily.tmall.net" : "tmall.com") + "/list_dsr_info.htm", function(e) {
                                r(e)
                            })
                        })
                    }
                })
            }});
        t.addAttr("dealChartData", {load: function(n) {
                t.onLoad("config", function(t) {
                    if (t && t.api.recordExtUrl) {
                        _CTK6da3(20, "mod.dealRecord.chart.start", "model.product.init");
                        e.IO({url: t.api.recordExtUrl,dataType: "jsonp",jsonpCallback: "jsonpCallback",success: function(e) {
                                _CTK6da3(20, "mod.dealRecord.chart.success", "mod.dealRecord.chart.success");
                                n(e)
                            },error: function() {
                                _CTK6da3(20, "mod.dealRecord.chart.failure", "mod.dealRecord.chart.start");
                                e.log("DealRecord Load Error!")
                            }})
                    }
                })
            }});
        t.addAttr("customResource", {load: function(e) {
                t.onLoad("model", function(t) {
                    var n = t.customResourceDO;
                    if (n && n.customResources) {
                        return e(n.customResources)
                    }
                    e(null)
                })
            }});
        t.addAttr("activityDO", {load: function(e) {
                t.onLoad("mdskip", function(t) {
                    e(t && t.defaultModel && t.defaultModel.activityDO ? t.defaultModel.activityDO : null)
                })
            }});
        t.addAttr("cycle", {load: function(e) {
                t.onChange("config", function(t) {
                    if (!t) {
                        e(null);
                        return
                    }
                    var n = t.cyclePurchaseDO;
                    var a = t.itemDO.reservePrice;
                    a = a.replace(/\./, "");
                    if (n && n.purchaseSelected.length) {
                        n.selectedIndex = 0;
                        for (var i = 0, r = n.purchaseSelected.length; i < r; i++) {
                            var o = n.purchaseSelected[i];
                            o["totalPrice"] = o["deliveryTimes"] * parseInt(o["price"], 10);
                            o["oTotalPrice"] = a * o["deliveryTimes"];
                            o["offPrice"] = o["oTotalPrice"] - o["totalPrice"];
                            o["bPrice"] = n.payType == 1 ? o["cyclePriceStep"][0] : o["totalPrice"]
                        }
                    } else {
                        n = null
                    }
                    e(n)
                })
            }});
        t.addAttr("currentCycle", {load: function(e) {
                t.onChange(["amount", "cycle"], function(t, n) {
                    if (n) {
                        var a = n.selectedIndex;
                        var i = n.purchaseSelected[a];
                        e({payType: n.payType,selectedIndex: a,amount: t,price: i["totalPrice"] * t,bPrice: i["bPrice"] * t,itemAmount: i["deliveryTimes"] * t,buy_cycle: i["cycleId"],deliveryUnit: i["deliveryUnit"],priceStep: i["cyclePriceStep"],delivery_amount: i["deliveryId"]})
                    } else {
                        e(null)
                    }
                })
            }});
        t.addAttr("skuMap", {load: function(n) {
                t.onChange(["config", "inventory", "thirdPartyInventory"], function(a, i, r) {
                    var o = a && a.valItemInfo && a.valItemInfo.skuMap || null, u;
                    if (!o || !i || (u = e.keys(o).length) === 0) {
                        n(o);
                        return
                    }
                    var c = {}, l = 0;
                    e.each(o, function(e, a) {
                        t.onInventory(e.skuId, function(t) {
                            if (!(t && !t.quantity && t.totalQuantity === 0)) {
                                c[a] = e;
                                l++
                            }
                            if (--u === 0) {
                                n(c)
                            }
                        })
                    })
                })
            }});
        t.addAttr("skuNames", {load: function(e) {
                t.onLoad("config", function(t) {
                    return e(t && t.valItemInfo && t.valItemInfo.skuName || null)
                })
            }});
        t.addAttr("selectedSku", {load: function(n) {
                t.onChange(["selectedSkuProp", "selectedSkuList"], function(t, a) {
                    if (!a) {
                        n(null);
                        return
                    }
                    var i = e.keys(a);
                    if (i.length != 1) {
                        n(null);
                        return
                    }
                    var r = i[0].split(";"), o = true;
                    e.each(r, function(e) {
                        if (e) {
                            var n = e.split(":");
                            if (t[n[0]] != n[1]) {
                                o = false
                            }
                        }
                    });
                    n(o ? a[i[0]] : null)
                })
            }});
        t.addAttr("selectedCspu", {load: function(n) {
                t.onChange(["selectedSkuList"], function(t) {
                    var a;
                    if (t) {
                        e.each(t, function(e) {
                            a = a || e.cspuId;
                            if (e.cspuId && a && a != e.cspuId) {
                                a = null;
                                return false
                            }
                        })
                    }
                    n(a ? {cspuId: a} : null)
                })
            }});
        t.addAttr("selectedSkuList", {load: function(e) {
                t.onChange("selectedSkuProp", function(n) {
                    t.onSkuList(n, e)
                })
            }});
        t.addAttr("currentAmountRestrict", {load: function(n) {
                t.onLoad(["amountRestrict", "config"], function(a, i) {
                    if (!i) {
                        n(null);
                        return
                    }
                    var r;
                    if (i.cyclePurchaseDO && (i.cyclePurchaseDO.amountLimitUp || i.cyclePurchaseDO.amountLimitDown)) {
                        r = {amountLimitUp: i.cyclePurchaseDO.amountLimitUp,amountLimitDown: i.cyclePurchaseDO.amountLimitDown}
                    }
                    t.onChange("selectedSku", function(t) {
                        var i = t && t.skuId || "def";
                        var o = a && a[i] || null;
                        if (r) {
                            o = o && e.mix(o, r) || r
                        }
                        n(o)
                    })
                })
            }});
        t.addAttr("currentPriceInfoList", {load: function(n) {
                t.onChange(["priceInfo", "selectedSkuList"], function(t, a) {
                    var i = [];
                    if (a && t) {
                        e.each(a, function(e) {
                            if (t[e.skuId]) {
                                i.push(t[e.skuId])
                            }
                        })
                    } else {
                        e.each(t, function(e) {
                            if (e) {
                                i.push(e)
                            }
                        })
                    }
                    i = i.sort(function(e, t) {
                        var n = e.promotionList && e.promotionList.length ? 0 : 1, a = t.promotionList && t.promotionList.length ? 0 : 1;
                        if (n != a) {
                            return n - a
                        }
                        if (!n) {
                            var i = e.promotionList.sort(c), r = t.promotionList.sort(c), o = c(i[0], r[0]);
                            if (o !== 0) {
                                return o
                            }
                            return r.length - i.length
                        }
                        return 0
                    });
                    n(i)
                })
            }});
        t.addAttr("currentPriceInfo", {load: function(e) {
                t.onChange("currentPriceInfoList", function(t) {
                    e(t && t[0] || null)
                })
            }});
        t.addAttr("currentInventory", {load: function(e) {
                t.onLoad("config", function(n) {
                    var a = n.detail;
                    var i = a.isCarService;
                    if (i) {
                        t.onChange(["3rdExtraInfo", "selectedSku", "inventory"], function(a, i, r) {
                            var o = a && a.amount;
                            if (o) {
                                e({type: r && r.type || n && n.valItemInfo && n.valItemInfo["type"] || 0,quantity: parseInt(o, 10),totalQuantity: parseInt(o, 10)})
                            } else {
                                t.onInventory(i && i.skuId, e)
                            }
                        })
                    } else {
                        t.onChange(["selectedSku", "inventory"], function(n) {
                            t.onInventory(n && n.skuId, e)
                        })
                    }
                })
            }});
        t.addAttr("currentPromotion", {load: function(e) {
                t.onChange("currentPromotionList", function(t) {
                    e(t && t[0] || null)
                })
            }});
        t.addAttr("currentPromotionList", {load: function(e) {
                t.onChange("currentPriceInfo", function(n) {
                    t.onPromotionList(n, e)
                })
            }});
        t.addAttr("currentSuggestivePromotionList", {load: function(e) {
                t.onChange(["currentPriceInfo"], function(t) {
                    if (!t) {
                        e(null);
                        return
                    }
                    var n = t.suggestivePromotionList;
                    if (n) {
                        e(n.sort(c))
                    } else {
                        e(null)
                    }
                })
            }});
        t.addAttr("currentSuggestivePromotion", {load: function(e) {
                t.onChange("currentSuggestivePromotionList", function(t) {
                    e(t && t[0] || null)
                })
            }});
        t.addAttr("currentDelivery", {load: function(n) {
                t.onChange(["delivery", "service", "isAreaRestricted", "selectedSku"], function(t, a, i, r) {
                    var o = t && t.deliverySkuMap;
                    var r = r || {};
                    var u = r.skuId ? r.skuId : "default";
                    var c = {feeUnit: null,money: null,name: null,postage: "",serviceLinkText: null,serviceLinkUrl: null,signText: null,tagImage: null,type: 0}, l = o && o[u] || o["default"] || [c];
                    if (i) {
                        l = [e.mix({postage: "\u6240\u9009\u533a\u57df\u6682\u4e0d\u9500\u552e\uff0c\u8bf7\u67e5\u770b\u5176\u4ed6\u533a\u57df",warning: true}, c, false)]
                    } else if (a && a.list.length && a["stype"] == "house") {
                        l = [e.mix({postage: ""}, c, false)]
                    }
                    n(l)
                })
            }});
        t.addAttr("skuProp", {load: function(a) {
                t.onChange(["config", "skuMap"], function(t, i) {
                    var r = {};
                    if (!i) {
                        a(r);
                        return
                    }
                    for (var o in i) {
                        if (!i.hasOwnProperty(o)) {
                            continue
                        }
                        var u = o.split(";");
                        for (var c = 0; c < u.length; c++) {
                            if (!u[c]) {
                                continue
                            }
                            var l = u[c].split(":");
                            if (!l[0] || !l[1]) {
                                continue
                            }
                            if (!r[l[0]]) {
                                r[l[0]] = {}
                            }
                            r[l[0]][l[1]] = {label: "",text: "",info: ""}
                        }
                    }
                    var d = t.skuCascadeMapString;
                    var s = t.carCascade;
                    if (!s && d) {
                        var f = function(t, n, a) {
                            e.each(t, function(e, t) {
                                var i = t.split(":"), o = r[i[0]] && r[i[0]][i[1]];
                                if (o) {
                                    o.text = e.name;
                                    switch (n.length) {
                                        case 0:
                                            o.label = "\u54c1\u724c";
                                            break;
                                        case 1:
                                            o.label = "\u8f66\u578b";
                                            break;
                                        default:
                                            o.label = "\u8f66\u7cfb";
                                            break
                                    }
                                    o.parent = a;
                                    var u = n.concat(e.name), c = d[t];
                                    if (c) {
                                        f(c, u, t)
                                    } else {
                                        o.info = "\u9002\u914d\u8f66\u578b:" + u.join(" ")
                                    }
                                }
                            })
                        };
                        f(d.root, [], "")
                    }
                    var m = t.valItemInfo && t.valItemInfo.salesProp || null;
                    var p = n.query(".J_TSaleProp", "#detail");
                    e.each(p, function(t) {
                        var a = n.children(t), i = n.attr(t, "data-property");
                        e.each(a, function(e) {
                            var t = e.getAttribute("data-value");
                            if (!t) {
                                return
                            }
                            var a = t.split(":");
                            var o = r[a[0]] && r[a[0]][a[1]];
                            if (!o) {
                                return
                            }
                            o.label = i;
                            o.text = n.text(n.get("span", e));
                            o.info = o.label + ":" + o.text;
                            if (m && m[a[0]] && m[a[0]][a[1]]) {
                                o.tip = m[a[0]][a[1]]
                            }
                        })
                    });
                    a && a(r)
                })
            }});
        t.addAttr("selectedSkuProp", {load: function(n) {
                var a = e.unparam(location.href.split("?")[1]), i;
                function r(e) {
                    t.onLoad("skuProp", function(t) {
                        for (var a in e) {
                            if (e.hasOwnProperty(a)) {
                                if (!t[a] || !t[a][e[a]]) {
                                    delete e[a]
                                }
                            }
                        }
                        n(e)
                    })
                }
                function o(t) {
                    if (!t) {
                        return null
                    }
                    var n = {}, a = false, i;
                    e.each(t.split ? t.split(";") : t, function(e) {
                        if (e && (i = e.split(":")) && i.length == 2 && i[0] && i[1]) {
                            n[i[0]] = i[1];
                            a = true
                        }
                    });
                    return a ? n : null
                }
                function u() {
                    var u = o(a["sku"]);
                    if ((i = a["sku_properties"]) && (i = o(i))) {
                        r(u ? e.mix(u, i) : i);
                        return
                    }
                    t.onLoad("config", function(t) {
                        if ((i = t && t.valItemInfo && t.valItemInfo["defSelected"]) && (i = o(i))) {
                            r(u ? e.mix(u, i) : i);
                            return
                        }
                        u ? r(u) : n({})
                    })
                }
                t.onChange("isDownShelf", function(e) {
                    if (e) {
                        n({})
                    }
                });
                if (i = a["skuId"]) {
                    t.onLoad("skuMap", function(e) {
                        if (e) {
                            for (var t in e) {
                                if (e[t]["skuId"] == i) {
                                    r(o(t));
                                    return
                                }
                            }
                        }
                        u()
                    })
                } else {
                    u()
                }
            }});
        t.addAttr("selectedCarProp", {load: function(e) {
                t.onLoad("config", function(n) {
                    if (n) {
                        if (!n.carCascade || !n.skuCascadeMapString) {
                            return e(null)
                        }
                        e(t.get("selectedCarProp") || null)
                    } else {
                        e(null)
                    }
                })
            }});
        t.addAttr("skuPropSelectivity", {load: function(n) {
                t.onChange(["locModel"], function(t) {
                    n(e.now())
                })
            }});
        t.addAttr("selectedSkuInfo", {load: function(n) {
                t.onChange(["skuProp", "selectedSku", "selectedSkuProp"], function(a, i, r) {
                    if (i) {
                        var o = i.skuId;
                        t.onLoad("skuMap", function(t) {
                            var n = false;
                            for (var a in t) {
                                if (t[a] && t[a].skuId == o) {
                                    var i = {};
                                    e.each(a.split(";"), function(e) {
                                        if (e && e.indexOf(":") >= 0) {
                                            var t = e.split(":");
                                            i[t[0]] = t[1];
                                            u(i)
                                        }
                                    });
                                    n = true;
                                    break
                                }
                            }
                            if (!n) {
                                u(r)
                            }
                        })
                    } else {
                        u(r)
                    }
                    function u(t) {
                        var i = {};
                        e.each(t, function(e, t) {
                            var n = a[t] && a[t][e] && a[t][e].info;
                            n && (i[t + ":" + e] = n)
                        });
                        n(i)
                    }
                })
            }});
        t.addAttr("cacheSelectedService");
        t.set("cacheSelectedService", null);
        t.addAttr("selectedService", {load: function(e) {
                t.onChange(["service", "currentService", "cacheSelectedService"], function(t, n, a) {
                    t = n || t;
                    if (!t || !t.list || !t.list.length) {
                        e(null);
                        return
                    }
                    var i = {};
                    var r = t.list;
                    for (var o = 0; o < r.length; o++) {
                        var u = r[o];
                        u.id = u.id || u.serviceId;
                        if (u.uniqueServices && u.uniqueServices.length == 1) {
                            var c = u.uniqueServices[0];
                            if (c.autoSelect || c.free || c.isFree) {
                                if (a) {
                                    var l = a[u.id];
                                    if (l && l.checked !== false) {
                                        if (l.value == c.uniqueId) {
                                            i[u.id] = c.uniqueId
                                        }
                                    }
                                } else {
                                    i[u.id] = c.uniqueId
                                }
                            } else {
                                if (a) {
                                    var l = a[u.id];
                                    if (l && l.checked === true) {
                                        if (l.value == c.uniqueId) {
                                            i[u.id] = c.uniqueId
                                        }
                                    }
                                }
                            }
                        } else if (u.uniqueServices && u.uniqueServices.length > 1) {
                            for (var o = 0, d = u.uniqueServices.length; o < d; o++) {
                                var c = u.uniqueServices[o];
                                if (c.autoSelect || c.free || c.isFree) {
                                    if (a) {
                                        var l = a[u.id];
                                        if (l && l.checked !== false) {
                                            if (l.value == c.uniqueId) {
                                                i[u.id] = c.uniqueId
                                            }
                                        }
                                    } else {
                                        i[u.id] = c.uniqueId
                                    }
                                } else {
                                    if (a) {
                                        var l = a[u.id];
                                        if (l && l.checked === true) {
                                            if (l.value == c.uniqueId) {
                                                i[u.id] = c.uniqueId
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (u.autoSelect || (u.isFree || u.free) || o === 0 && t.stype == "house") {
                                if (a) {
                                    var l = a[u.id];
                                    if (l && l.checked !== false) {
                                        if (l.value == u.uniqueId) {
                                            i[u.id] = u.uniqueId || "0"
                                        }
                                    }
                                    if (!l) {
                                        i[u.id] = u.uniqueId || "0"
                                    }
                                } else {
                                    i[u.id] = u.uniqueId || "0"
                                }
                            } else {
                                if (a) {
                                    var l = a[u.id];
                                    if (l && l.checked === true) {
                                        if (l.value == u.uniqueId) {
                                            i[u.id] = u.uniqueId || "0"
                                        }
                                    }
                                }
                            }
                        }
                    }
                    e(i)
                })
            }});
        t.addAttr("desc", {load: function(n) {
                t.onLoad("config", function(t) {
                    if (t.tag.isAsynDesc !== true || !t.api || !t.api.descUrl) {
                        n("");
                        return
                    }
                    var a = t.api.descUrl;
                    if (t.isTwView) {
                        a += "&_thwlang=zh_CN:TB-GBK"
                    }
                    e.getScript(a, {success: function() {
                            n(window.desc || "")
                        }})
                })
            }});
        t.addAttr("shopDynamicRating", {load: function(n) {
                t.onLoad("config", function(t) {
                    if (!t || !t.apiBeans) {
                        n(null);
                        return
                    }
                    e.use("ajax", function(e, a) {
                        _CTK6da3(20, "data.apiBeans.start", "model.product.init");
                        a({url: t.apiBeans,dataType: "jsonp",success: function(e) {
                                _CTK6da3(20, "data.apiBeans.success", "data.apiBeans.start");
                                n && n(e)
                            },error: function() {
                                _CTK6da3(20, "data.apiBeans.error", "data.apiBeans.start")
                            }})
                    })
                })
            }});
        t.addAttr("skuExtra", {load: function(e) {
                t.onLoad("config", function(t) {
                    e(t.valItemInfo.skuExtra)
                })
            }});
        t.addAttr("pickupPoints", {load: function(e) {
                t.onLoad(["config", "deviceType"], function(n, a) {
                    if (a === "phone") {
                        t.onLoad("skuExtra", function(t) {
                            var n = t.pickupPoints;
                            if (n && n.values && n.values.length) {
                                e(n.values)
                            } else {
                                e(null)
                            }
                        })
                    } else {
                        e(n && n.elecVoucherPickupPoint || null)
                    }
                })
            }});
        t.addAttr("etm", {load: function(n) {
                if (!t.get("etm")) {
                    e.use("dom", function(e, a) {
                        var i = a.get("#J_FrmBid");
                        if (!i) {
                            return n(null)
                        }
                        if (t.get("etm") !== undefined) {
                            return n(null)
                        }
                        n(i["etm"] ? i["etm"].value || "" : null)
                    })
                }
            }});
        t.addAttr("pickupPoint", {value: ""});
        t.addAttr("isAreaRestricted", {load: function(e) {
                t.onChange(["currentPriceInfoList", "buyerLoc", "deviceType"], function(n, a, i) {
                    function r() {
                        t.canSoldArea(a, function(t) {
                            e(!t)
                        })
                    }
                    if (!n || !n[0]) {
                        r();
                        return
                    }
                    for (var o = n.length - 1; o >= 0; o--) {
                        if (i === "phone") {
                            return e(false)
                        }
                        if (n[o].areaSold !== false) {
                            r();
                            return
                        }
                    }
                    e(true)
                })
            }});
        t.addAttr("itemDO", {load: function(e) {
                t.onLoad("config", function(t) {
                    e(t && t.itemDO || null)
                })
            }});
        t.addAttr("wtBuyParam", {value: ""});
        t.addAttr("canBuyStatus", {load: function(e) {
                t.onChange(["trade", "selectedSku", "misc", "currentInventory", "itemPrice", "isAreaRestricted", "amount", "amountMultiple", "selectedCarProp", "selectedService", "pickupPoint"], function() {
                    var e = t.get("canBuyStatus");
                    if (e) {
                        t.set("canBuyStatus", ++e)
                    } else {
                        t.set("canBuyStatus", 1)
                    }
                })
            }});
        t.addAttr("canAddToCartStatus", {load: function(e) {
                t.onChange(["trade", "misc", "currentInventory", "itemPrice", "isAreaRestricted", "amount", "pickupPoint"], function() {
                    var e = t.get("canAddToCartStatus");
                    if (e) {
                        t.set("canAddToCartStatus", ++e)
                    } else {
                        t.set("canAddToCartStatus", 1)
                    }
                })
            }});
        t.addAttr("timeminus", {load: function() {
            }});
        t.addAttr("mainImg", {load: function(e) {
                var t = n.get("#J_ImgBooth");
                e(t.src || null)
            }});
        t.addAttr("itemtitle", {load: function(e) {
                var t = document.getElementsByTagName("title")[0];
                e(t.innerHTML.split("-tmall.")[0])
            }});
        t.addAttr("buyFlowFrom", {load: function(e) {
                function t(e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i");
                    var n = window.location.search.substr(1).match(t);
                    if (n != null)
                        return unescape(n[2]);
                    return ""
                }
                function n() {
                    var e = encodeURIComponent(document.referrer);
                    return e ? e : ""
                }
                var a = t("root_refer");
                var i = n();
                var r = t("u_channel");
                e({root_refer: a,item_url_refer: i,u_channel: r})
            }});
        t.addAttr("colorSp", {load: function(t) {
                e.ready(function() {
                    var a = e.filter(n.query(".J_TSaleProp"), function(e) {
                        return n.hasClass(e, ".tb-img")
                    });
                    a = a[0];
                    var i = n.query("li", a);
                    if (i && i.length) {
                        var r = {};
                        i.each(function(e) {
                            r[n.attr(e, "data-value")] = n.attr(e, "title")
                        });
                        t(r)
                    } else {
                        t(null)
                    }
                })
            }});
        t.addAttr("currentColorSp", {load: function(a) {
                e.ready(function() {
                    t.onChange(["selectedSkuProp", "colorSp"], function(t, i) {
                        var r = e.filter(n.query(".J_TSaleProp"), function(e) {
                            return n.hasClass(e, ".tb-img")
                        });
                        r = r[0];
                        var o = n.get(".tb-selected", r);
                        if (o) {
                            var u = n.attr(o, "data-value");
                            a({value: u,title: i[u]})
                        } else {
                            a(null)
                        }
                    })
                })
            }});
        var i = window.g_config.startTime || e.now();
        t.addAttr("clientStartTime", {load: function(e) {
                e(i)
            }});
        t.addAttr("serverStartTime", {load: function(e) {
                t.onLoad("config", function(n) {
                    if (n && n.renderTime && parseInt(n.renderTime, 10) < 9999999999) {
                        return e(n.renderTime * 1e3)
                    }
                    t.onChange(["misc"], function(n) {
                        if (n && n.systemTime) {
                            return e(n.systemTime)
                        }
                        t.onLoad("clientStartTime", e)
                    })
                })
            }});
        t.addAttr("minicart", {load: function(n) {
                t.onLoad("config", function(t) {
                    if (t && t.isTripUser) {
                        e.use("mui/minicart/trip/cart", function(e, t) {
                            n(t)
                        })
                    } else {
                        e.use("mui/minicart", function(e, t) {
                            n(t)
                        })
                    }
                })
            }});
        t.addAttr("comboLoc", {load: function(e) {
                t.onLoad("buyerLoc", function(t) {
                    if (t.toString().length > 6) {
                        t = t.toString().substring(0, 6)
                    }
                    e(t)
                })
            }});
        t.onComboData = function(n, a, i, r) {
            if (!n) {
                i(null);
                return
            }
            function o() {
                e.use("malldetail/common/util", function(e, o) {
                    var u = n + "_" + a + "_" + (r ? "1" : "0");
                    t._cdlm = t._cdlm || {};
                    t._cdlm[u] = t._cdlm[u] || (t._cdlm[u] = o.createLoader(function(i) {
                        e.use("ajax", function(e, o) {
                            t.onLoad("config", function(e) {
                                o({url: e.apiTmallComboInfo,data: {areaId: n,comboId: a,noCache: r ? "true" : "false"},dataType: "jsonp",success: function(e) {
                                        if (r && (!e || !e.success)) {
                                            return t.onComboData(n, a, i, false)
                                        }
                                        i(e && e.success ? e : null)
                                    },error: function() {
                                        if (r) {
                                            return t.onComboData(n, a, i, false)
                                        }
                                        i(null)
                                    }})
                            })
                        })
                    }));
                    t._cdlm[u](i)
                })
            }
            a = a || "";
            if (!a) {
                t["_cda" + n] = true
            } else {
                if (t["_cda" + n]) {
                    t.onComboData(n, "", function(e) {
                        if (e && e.currentCombo && e.currentCombo.id == a) {
                            return i(e)
                        }
                        o()
                    }, r);
                    return
                }
            }
            o()
        };
        t.onCombo = function(n, a, i) {
            if (!n || !a) {
                i(null);
                return
            }
            e.use("malldetail/common/util", function(e, r) {
                var o = a;
                t._clm = t._clm || {};
                t._clm[o] = t._clm[o] || (t._clm[o] = r.createLoader(function(i) {
                    e.use("detail-model/combo", function(e, r) {
                        var o = new r;
                        o.onLogin = t.onLogin;
                        o.set("noCache", false);
                        o.addAttr("comboData", {load: function(e) {
                                o.onChange(["buyerLoc", "noCache"], function(n, i) {
                                    t.onComboData(n, a, function(t) {
                                        e(t && t.currentCombo || null)
                                    }, i)
                                })
                            }});
                        o.addAttr("shopId", {load: function(e) {
                                t.onChange("config", function(t) {
                                    e(t && t.rstShopId || "")
                                })
                            }});
                        o.addAttr("buyerLoc", {load: function(e) {
                                e(n)
                            }});
                        o.addAttr("misc", {load: function(e) {
                                t.onChange("misc", e)
                            }});
                        o.addAttr("state", {load: function(e) {
                                t.onChange("state", e)
                            }});
                        o.addAttr("token", {load: function(e) {
                                t.onChange("token", e)
                            }});
                        o.addAttr("minicart", {load: function(e) {
                                t.onChange("minicart", e)
                            }});
                        o.addAttr("urlMap", {load: function(e) {
                                t.onChange("config", function(t) {
                                    var n = t && t.url;
                                    if (t.apiTmallComboItem && n) {
                                        n.apiTmallComboItem = t.apiTmallComboItem
                                    }
                                    e(n)
                                })
                            }});
                        o.onTrackID = function() {
                            return t.onTrackID.apply(t, arguments)
                        };
                        i(o)
                    })
                }));
                t._clm[o](function(e) {
                    e.onLoad("buyerLoc", function() {
                        e.set("buyerLoc", n);
                        i(e)
                    })
                })
            })
        };
        t.addAttr("comboData", {load: function(e) {
                t.onLoad("config", function(n) {
                    if (!n.isTmallComboSupport || !n.apiTmallComboInfo) {
                        e(null);
                        return
                    }
                    t.onChange("comboLoc", function(n) {
                        t.onComboData(n, "", e)
                    })
                })
            }});
        t.addAttr("comboList", {load: function(e) {
                t.onChange("comboData", function(t) {
                    e(t && t.combos || null)
                })
            }});
        t.addAttr("currentComboId", {});
        t.onChange("currentComboId", function() {
            t.reset("currentCombo", {silent: true})
        });
        t.addAttr("currentCombo", {load: function(e) {
                t.onChange(["comboList", "currentComboId", "comboLoc"], function(n, a, i) {
                    t.onCombo(i, a, e)
                })
            }});
        t.addAttr("recommendSku", {load: function(n) {
                t.onLoad(["itemDO"], function(a) {
                    e.use("ajax", function(e, i) {
                        _CTK6da3(20, "data.recommendSku.start", "trade.sku.init");
                        i({url: "http://fs.tmall.com/sizetools/recommandUserSize.jsonp",data: {cateId: a.categoryId,itemId: a.itemId},dataType: "jsonp",jsonpCallback: "jsonpRecommendSku",success: function(a) {
                                if (a && a.success) {
                                    if (!a.model || !a.model.recommandSize) {
                                        n(null)
                                    }
                                    a.model.recommendSize = a.model.recommandSize;
                                    t.onLoad("skuProp", function(t) {
                                        e.each(t, function(t, i) {
                                            e.each(t, function(e, t) {
                                                if (e["text"] == a.model.recommendSize) {
                                                    a.model.pid = i;
                                                    a.model.vid = t;
                                                    n(a)
                                                }
                                            })
                                        })
                                    })
                                } else {
                                    n(null)
                                }
                                _CTK6da3(20, "data.recommendSku.end", "data.recommendSku.start")
                            },error: function() {
                                _CTK6da3(20, "data.recommendSku.error", "data.recommendSku.start");
                                n(null)
                            }})
                    })
                })
            }});
        t.onChange("buyerLoc", function(e) {
            t.reset("locModel", {silent: true})
        }, 0);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["trade", "deviceType", "model"], function(t, a, i) {
                if (!t) {
                    return n(null)
                }
                if (a === "phone" && i.jhsDO && e.type === 1) {
                    var r = i.jhsDO;
                    if (r.itemStatus !== 1) {
                        return n({level: 8,name: "jhs",itemStatus: r.itemStatus})
                    }
                    return n()
                }
                if (e.type == 1) {
                    return n(t.tradeEnable ? null : {level: 8,name: "init"})
                }
                if (e.type == 2) {
                    return n(t.cartEnable ? null : {level: 8,name: "init"})
                }
                return n(null)
            })
        }, 8);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["config"], function(e) {
                if (e && e.isTwView) {
                    n(e.tradeEnable ? null : {level: 8,name: "isTwView"})
                } else {
                    n(null)
                }
            })
        }, 8);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["trade"], function(e) {
                n(e && e.sellCountDown > 0 ? {level: 8,name: "sellCountDown"} : null)
            })
        }, 8);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["currentInventory", "isAreaRestricted"], function(e, t) {
                if (!e || t) {
                    return n()
                }
                var a = ["", "\u6b64\u5546\u54c1\u6682\u65f6\u7f3a\u8d27", "\u6240\u9009\u533a\u57df\u6682\u65f6\u7f3a\u8d27\uff0c\u8bf7\u67e5\u770b\u5176\u4ed6\u533a\u57df", "\u6709\u4eba\u8fd8\u672a\u4ed8\u6b3e\uff0c\u82e515\u5206\u949f\u540e\u4ecd\u672a\u4ed8\u6b3e\uff0c\u60a8\u5c06\u6709\u8d2d\u4e70\u673a\u4f1a"];
                if (e.type == 3) {
                    n({level: 8,name: "stock",message: a[e.type],stockType: e.type})
                } else if (e.quantity === 0) {
                    n({level: 5,name: "stock",message: a[e.type],stockType: e.type})
                } else {
                    n()
                }
            })
        }, 8);
        t.addBuyValidator(function(e, n) {
            if (e.type != 2) {
                n();
                return
            }
            t.onLoad(["deviceType", "model"], function(e, a) {
                if (e === "phone") {
                    n(a.jhsDO ? {level: 8,name: "juKey"} : null)
                } else {
                    n(t.getState("key") ? {level: 8,name: "juKey"} : null)
                }
            })
        }, 8);
        t.addBuyValidator(function(e, n) {
            if (e.type === 2) {
                t.onLoad("currentWrtInfo", function(e) {
                    if (e) {
                        return n({level: 5,name: "wanrentuan"})
                    }
                    return n(null)
                })
            } else {
                if (e.type != 1) {
                    n();
                    return
                }
                t.onLoad("currentWrtInfo", function(e) {
                    var t = e;
                    if (t && t.type != 2 && (t.status === 0 || t.status == 1 || t.status == 3 || t.status == 2 && t.maxAmount != -1 && t.maxAmount - t.purchasedAmount <= 0 || t.remainTime === 0 && t.status == 2)) {
                        n({level: 5,name: "wanrentuan",wrtStatus: t.status})
                    } else {
                        n()
                    }
                })
            }
        }, 5);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["cycle", "serverStartTime"], function(e, t) {
                if (e && t > e.endTime) {
                    n({level: 5,name: "cycle"})
                } else {
                    n()
                }
            })
        }, 5);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["currentAmountRestrict", "amount", "amountMultiple", "config", "currentInventory", "selectedSku", "buyPrice"], function(e, t, a, i, r, o, u) {
                if (!i) {
                    n();
                    return
                }
                var c = r.quantity;
                var l = o ? o["type"] : i.valItemInfo && i.valItemInfo.type;
                if (e && e.restrictAmount && (e.amountCanBuy === 0 || t > e.amountCanBuy)) {
                    var d = {1: "\u805a\u5212\u7b97\u7279\u4ef7\u5546\u54c1,\u6bcf\u4eba\u9650\u8d2d" + e.restrictAmount + "\u4ef6",2: "\u805a\u5212\u7b97\u7279\u4ef7\u5546\u54c1,\u6bcf\u4eba\u9650\u8d2d" + e.restrictAmount + "\u4ef6",3: "\u6b64\u5546\u54c1\u9650\u8d2d" + e.restrictAmount + "\u4ef6",4: "\u6bcf\u4eba\u9650\u8d2d" + e.restrictAmount + "\u4ef6\uff0c\u5df2\u8d85\u8fc7\u9650\u8d2d\u6570",5: "\u60a8\u6240\u586b\u5199\u7684\u5546\u54c1\u6570\u91cf\u8d85\u8fc7\u9650\u8d2d\u6570\u91cf\uff01"};
                    n({level: 5,name: "limitedCheck",message: d[e.restrictType] || ""})
                } else if (e && e.amountLimitDown && t < e.amountLimitDown) {
                    n({level: 5,name: "limitedCheck",message: "\u6b64\u5546\u54c1\u5355\u6b21\u8d2d\u4e70\u6570\u91cf\u81f3\u5c11\u4e3a" + e.amountLimitDown + "\u4ef6"})
                } else if (e && e.amountLimitUp && t > e.amountLimitUp) {
                    n({level: 5,name: "limitedCheck",message: "\u6b64\u5546\u54c1\u5355\u6b21\u8d2d\u4e70\u81f3\u591a\u4e3a" + e.amountLimitUp + "\u4ef6"})
                } else if (typeof c == "number" && c < t * a && l != 3) {
                    debugger;
                    n({level: 5,name: "limitedCheck",message: "\u60a8\u6240\u586b\u5199\u7684\u5546\u54c1\u6570\u91cf\u8d85\u8fc7\u5e93\u5b58\uff01"})
                } else if (e && !e.restrictAmount && e.moneyCanBuy && 1 * e.moneyCanBuy < t * a * u.max) {
                    n({level: 5,name: "limitedCheck",message: "\u60a8\u6240\u586b\u5199\u7684\u5546\u54c1\u603b\u4ef7\u8d85\u8fc7\u9650\u989d\uff01"})
                } else {
                    n(null)
                }
            })
        }, 5);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["isAreaRestricted"], function(e) {
                n(e ? {level: 5,name: "areaSold",message: "\u6b64\u5546\u54c1\u4e0d\u652f\u6301\u5728\u5f53\u524d\u533a\u57df\u9500\u552e"} : undefined)
            })
        }, 5);
        t.addBuyValidator(function(n, a) {
            t.onLoad(["skuMap", "selectedSku", "skuNames", "selectedSkuProp"], function(t, i, r, o) {
                if (t && !i) {
                    var u = {level: 2,name: "sku",tmallCarFinantialEnable: n.tmallCarFinantialEnable};
                    if (r) {
                        var c = [];
                        e.each(r, function(t) {
                            var n = false;
                            e.each(o, function(e, a) {
                                a = Number(a);
                                if (t.id === a) {
                                    n = true;
                                    return false
                                }
                            });
                            if (!n) {
                                c.push(t.text)
                            }
                        });
                        if (c.length) {
                            u.message = "\u8bf7\u9009\u62e9" + c.join("\u3001")
                        }
                    }
                    return a(u)
                }
                a()
            })
        }, 2);
        t.addBuyValidator(function(n, a) {
            t.onLoad(["currentService", "selectedService"], function(t, n) {
                if (t) {
                    if (t.mustSelectService && (!n || e.isEmptyObject(n))) {
                        return a({level: 2,name: "sku",message: "\u8bf7\u9009\u62e9\u670d\u52a1"})
                    }
                }
                a()
            })
        }, 2);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["etParams", "config", "deviceType"], function(e, t, a) {
                if (a === "phone") {
                    var i = t && t.api && t.api.appointUrl;
                    if (i) {
                        if (!e) {
                            n({level: 2,name: "sku",message: "\u6b63\u5728\u67e5\u8be2\u670d\u52a1\u95e8\u5e97\uff0c\u8bf7\u7a0d\u540e"})
                        } else {
                            n()
                        }
                    } else {
                        n()
                    }
                } else {
                    n()
                }
            })
        }, 2);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["config", "selectedCarProp"], function(e, t) {
                if (e) {
                    if (e.carCascade && e.skuCascadeMapString) {
                        if (t) {
                            n()
                        } else {
                            n({level: 2,name: "sku",message: "\u8bf7\u5c06\u9002\u914d\u8f66\u578b\u9009\u62e9\u5b8c\u6574"})
                        }
                    } else {
                        n()
                    }
                } else {
                    n()
                }
            })
        }, 2);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["pickupPoints", "pickupPoint"], function(e, t) {
                if (e && e.length) {
                    if (!t) {
                        return n({level: 2,name: "sku",message: "\u8bf7\u9009\u62e9\u63d0\u8d27\u5730\u70b9"})
                    }
                }
                return n()
            })
        }, 2);
        t.addBuyValidator(function(e, n) {
            t.onLoad(["config", "selectedSku", "amount", "currentPromotion", "currentInventory", "amountMultiple"], function(e, t, a, i, r, o) {
                if (!a) {
                    n();
                    return
                }
                a = a * o;
                if (a && i && i.limitTime) {
                    if (e.statu == "-1") {
                        n({level: 2,name: "limitPromo",message: "\u6d3b\u52a8\u5df2\u7ecf\u7ed3\u675f\uff0c\u4f60\u53ea\u80fd\u7528\u539f\u4ef7\u8d2d\u4e70\u4e86"});
                        return
                    }
                }
                if (e && e.orderLimitQuantity && a > e.orderLimitQuantity) {
                    n({level: 2,name: "limitedCheck",message: "\u5f88\u62b1\u6b49\uff0c\u5f53\u524d\u53ea\u53ef\u4ee5\u8d2d\u4e70" + e.orderLimitQuantity + "\u4ef6\u5546\u54c1"});
                    return
                }
                if (typeof r.quantity == "number" && r.quantity < a && r.quantity >= 0 && r.type != 3) {
                    n({level: 2,name: "limitedCheck",message: "\u60a8\u6240\u586b\u5199\u7684\u5546\u54c1\u6570\u91cf\u8d85\u8fc7\u5e93\u5b58\uff01"});
                    return
                }
                n()
            })
        }, 2);
        t.addBuyValidator(function(e, t) {
            var a = n.get("#J_Select_region");
            if (a && (a.value == null || a.value == "")) {
                t({level: 2,name: "twoDimensionRegion",message: "\u8bf7\u9009\u62e9\u5546\u54c1\u5151\u6362\u5730!"})
            } else {
                t()
            }
        }, 2);
        t.addBuyValidator(function(e, n) {
            if (e.type != 1) {
                n();
                return
            }
            t.onLoad("xshmPay", function(e) {
                if (!e) {
                    return n()
                }
                t.onChange(["progressiveInfo"], function(e) {
                    if (e) {
                        n()
                    } else {
                        n({level: 2,name: "xshmPay",message: "\u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u4e0d\u8db3"})
                    }
                })
            })
        }, 1);
        if (e.Config.debug) {
            t.on("*Change", function(t) {
                e.log(["ModelChange:", t.attrName.join(",")])
            })
        }
    }
    e.extend(l, t);
    e.augment(l, {onServerTime: function(t) {
            this.onLoad(["clientStartTime", "serverStartTime"], function(n, a) {
                t(e.now() - n + a)
            })
        },onToken: function(t) {
            var n = this;
            n.onLoad("deviceType", function(n) {
                if (n === "phone") {
                    t()
                } else {
                    var a = document, i = a.body, r = "";
                    var o = "http://www." + (u ? "daily." : "") + window.g_config.domain + "/go/rgn/tmall/t.php?t=20121104";
                    if (window.g_config.domain.indexOf("95095.") != -1 || window.g_config.domain.indexOf("alitrip.") != -1) {
                        TB && TB.Global && TB.Global.loginStatusReady(function(e) {
                            t(e.tbToken || "")
                        })
                    } else {
                        e.use("dom", function(e, n) {
                            _CTK6da3(20, "data.token.start", "model.product.init");
                            var a = window.getIfrToken = function() {
                                if (!t) {
                                    return
                                }
                                try {
                                    r = u.contentWindow.getToken()
                                } catch (e) {
                                    setTimeout(a, 50);
                                    return
                                }
                                _CTK6da3(20, "data.token.success", "data.token.start");
                                t(r);
                                t = null
                            };
                            setTimeout(function() {
                                if (!t) {
                                    return
                                }
                                _CTK6da3(20, "data.token.timeout", "data.token.start");
                                t(r);
                                t = null
                            }, 4e3);
                            var u = n.create('<iframe style="display:none" width="0" onload="getIfrToken(this)" height="0" src="' + o + '"></iframe>');
                            i.insertBefore(u, i.firstChild)
                        })
                    }
                }
            })
        },onSkuList: function(e, t) {
            this.onLoad(["skuMap"], function(n) {
                var a = {};
                if (!e || !n) {
                    t(null);
                    return
                }
                for (var i in n) {
                    var r = true;
                    for (var o in e) {
                        if (!e.hasOwnProperty(o)) {
                            continue
                        }
                        var u = new RegExp(";" + o + ":" + e[o] + ";");
                        if (!u.test(i)) {
                            r = false;
                            break
                        }
                    }
                    if (r) {
                        a[i] = n[i]
                    }
                }
                t(a)
            })
        },onPriceInfo: function(e, t) {
            this.onLoad("priceInfo", function(n) {
                if (typeof e == "object") {
                    t(e);
                    return
                }
                t(n[e || "def"])
            }, 13)
        },onInventory: function(e, t) {
            var n = this;
            n.onLoad(["inventory", "config", "thirdPartyInventory"], function(n, a, i) {
                var r = null;
                if (i && i[e]) {
                    r = e && i && i[e];
                    r.type = r.type || 1
                } else {
                    r = e && n && n.skuQuantity[e]
                }
                t({type: r ? r.type : n && n.type || a && a.valItemInfo && a.valItemInfo["type"] || 0,quantity: r ? r["quantity"] : n ? n["icTotalQuantity"] : null,totalQuantity: r ? r["totalQuantity"] : null})
            }, 13)
        },onPromotionList: function(e, t) {
            if (!e) {
                t(null);
                return
            }
            var n = e.promotionList;
            if (n) {
                n = n.sort(c)
            }
            var a = e.suggestivePromotionList || null;
            if (a && (a[0].promType == "jhs" || a[0].promType == "tCodeProm")) {
                n = [a[0]].concat(n || [])
            }
            t(n || null)
        },clearSkuProp: function() {
            var e = this;
            e.onLoad("selectedSkuProp", function(t) {
                e.set("selectedSkuProp", {})
            })
        },refreshCanBuyStatus: function() {
            var e = this;
            e.onLoad("canBuyStatus", function(t) {
                e.set("canBuyStatus", ++t)
            })
        },selectSkuProp: function(t, n, a) {
            if (t.indexOf(":") >= 0) {
                var i = t.split(":", 2);
                t = i[0];
                n = i[1]
            }
            var r = this;
            r.canSelectSkuProp(t, n, function(i) {
                if (i <= 0) {
                    if (a) {
                        r.onLoad("selectedSkuProp", function(i) {
                            var o = e.keys(i).sort();
                            if (o[0]) {
                                r.deselectSkuProp(o[0], "", function() {
                                    r.selectSkuProp(t, n, a)
                                })
                            }
                        })
                    }
                    return
                }
                r.onLoad("selectedSkuProp", function(a) {
                    if (a[t] == n) {
                        return
                    }
                    var i = {};
                    e.mix(i, a);
                    i[t] = n;
                    r.set("selectedSkuProp", i)
                })
            })
        },deselectSkuProp: function(t, n, a) {
            if (t.indexOf(":") >= 0) {
                var i = t.split(":", 2);
                t = i[0];
                n = i[1]
            }
            var r = this;
            r.onLoad("selectedSkuProp", function(i) {
                if (!i[t] || n && i[t] != n) {
                    a && a();
                    return
                }
                var o = {};
                e.each(i, function(e, n) {
                    if (n != t) {
                        o[n] = e
                    }
                });
                r.set("selectedSkuProp", o);
                a && a()
            })
        },canSelectSkuProp: function(t, n, a, i) {
            i = i || {};
            if (t.indexOf(":") >= 0) {
                var r = t.split(":", 2);
                t = r[0];
                n = r[1]
            }
            if (!n) {
                a(0);
                return
            }
            var o = this;
            function u(e) {
                if (i.ignoreSelection) {
                    e({});
                    return
                }
                o.onLoad("selectedSkuProp", e)
            }
            u(function(i) {
                if (i[t] == n) {
                    a(1);
                    return
                }
                var r = e.mix({}, i);
                r[t] = n;
                o.onSkuList(r, function(t) {
                    if (!t)
                        return;
                    var n = e.keys(t).length;
                    if (!n) {
                        a(-1);
                        return
                    }
                    e.each(t, function(e) {
                        if (n < 0) {
                            return
                        }
                        o.onInventory(e.skuId, function(e) {
                            if (n < 0) {
                                return
                            }
                            if (e.type == 3 || e.quantity > 0 || e.quantity === null) {
                                a(1);
                                n = -1;
                                return
                            }
                            if (--n === 0) {
                                a(0)
                            }
                        })
                    })
                })
            })
        },selectService: function(t, n) {
            if (!t) {
                return
            }
            if (t.indexOf("-") >= 0) {
                var a = t.split("-", 2);
                t = a[0];
                n = a[1]
            }
            n = n || "0";
            var i = this;
            i.onLoad(["cacheSelectedService", "currentService"], function(a, r) {
                a = a || {};
                if (a[t] && a[t].value == n && a[t].checked) {
                    return
                }
                var o = {};
                e.each(a, function(e, n) {
                    if (n != t) {
                        o[n] = e
                    }
                });
                o[t] = {key: t,value: n,checked: true};
                i.set("cacheSelectedService", o)
            })
        },deselectService: function(t, n, a) {
            if (!t) {
                return
            }
            if (t.indexOf("-") >= 0) {
                var i = t.split("-", 2);
                t = i[0];
                n = i[1]
            }
            n = n || "0";
            var r = this;
            r.onLoad(["cacheSelectedService", "currentService"], function(i) {
                i = i || {};
                var o = {};
                e.each(i, function(e, n) {
                    if (n != t) {
                        o[n] = e
                    }
                });
                o[t] = {key: t,value: n,checked: false};
                r.set("cacheSelectedService", o);
                a && a()
            })
        },canSoldArea: function(t, n, a) {
            var i = this;
            var t = String(t);
            i.onLoad(["soldArea", "config"], function(a, r) {
                var o = a && a.cityData;
                if (!o || o.allAreaSold) {
                    return n(true)
                }
                var u = o.soldAreas || [];
                if (e.inArray(parseInt(t, 10), u)) {
                    return n(true)
                }
                var c = a && a.regionData;
                var l = c.soldAreas || [];
                if (e.inArray(parseInt(t, 10), l)) {
                    return n(true)
                }
                if (/^\d\d0000$/.test(t)) {
                    return n(!!e.filter(u, function(e) {
                        return String(e).substr(0, 2) == t.substr(0, 2)
                    })[0])
                }
                if (e.inArray(parseInt(t, 10), [110100, 120100, 310100, 500100, 13e4, 14e4, 15e4, 21e4, 22e4, 23e4, 32e4, 33e4, 34e4, 35e4, 36e4, 37e4, 41e4, 42e4, 43e4, 44e4, 45e4, 46e4, 51e4, 52e4, 53e4, 54e4, 61e4, 62e4, 63e4, 64e4, 65e4, 71e4, 81e4, 82e4, 990100])) {
                    return n(false)
                }
                if (t.length <= 6) {
                    i.onAreaInfo(t, function(a) {
                        if (!a) {
                            return n(true)
                        }
                        if (a.level <= 2) {
                            return n(false)
                        }
                        var o = a["parent"];
                        i.canSoldArea(o, function(a) {
                            if (a === false) {
                                return n(a)
                            }
                            var u = i._cityLoadMap || (i._cityLoadMap = {});
                            e.use("malldetail/common/util", function(e, a) {
                                u[o] = u[o] || a.createLoader(function(t) {
                                    var n = r.selectCityApi;
                                    if (r && r.isAreaSell && n) {
                                        _CTK6da3(20, "data.selectCity.start", "model.product.init");
                                        e.use("ajax", function(e, a) {
                                            a({url: n,data: {city: o},dataType: "jsonp",jsonpCallback: "jsonpSelectCity" + o,cache: true,success: function(e) {
                                                    if (e.isSuccess) {
                                                        _CTK6da3(20, "data.selectCity.success", "data.selectCity.start");
                                                        t(e.selectCityDO.regionSoldArea ? e.selectCityDO.regionSoldArea : null)
                                                    } else {
                                                        _CTK6da3(20, "data.selectCity.error", "data.selectCity.start");
                                                        t(null)
                                                    }
                                                },timeout: 10,error: function() {
                                                    _CTK6da3(20, "data.selectCity.error", "data.selectCity.start");
                                                    t(null)
                                                }})
                                        })
                                    } else {
                                        t(null)
                                    }
                                });
                                u[o](function(a) {
                                    if (!a || !a.soldAreas) {
                                        return n(true)
                                    }
                                    return n(e.inArray(parseInt(t, 10), a.soldAreas))
                                })
                            })
                        })
                    });
                    return
                }
                i.onAreaInfo(t, function(a) {
                    if (!a) {
                        return n(true)
                    }
                    var o = a["parent"];
                    var u = i._areaLoadMap || (i._areaLoadMap = {});
                    e.use("malldetail/common/util", function(e, a) {
                        u[o] = u[o] || a.createLoader(function(t) {
                            var n = r.selectRegionApi;
                            if (r.isAreaSell && n) {
                                e.use("ajax", function(e, a) {
                                    a({url: n,data: {regionId: o,areaSold: o},dataType: "jsonp",jsonpCallback: "jsonpRegion" + o,cache: true,success: function(e) {
                                            if (e.isSuccess) {
                                                t(e.selectRegionDO.soldAreas || null)
                                            } else {
                                                t(null)
                                            }
                                        },timeout: 10,error: function() {
                                            t(null)
                                        }})
                                })
                            } else {
                                t(true)
                            }
                        });
                        u[o](function(a) {
                            if (!a || !a.soldAreas) {
                                return n(true)
                            }
                            return n(e.inArray(t, a.soldAreas))
                        })
                    })
                })
            })
        },onAreaInfo: function(t, n, a) {
            var i = this, r = i._areaMap || (i._areaMap = {});
            if (!a && r[t] !== undefined || r[t] && r[t].children !== undefined) {
                n(r[t]);
                return
            }
            e.use("malldetail/common/util", function(e, o) {
                var u = i._areaLoadMap || (i._areaLoadMap = {});
                u[t] = u[t] || o.createLoader(function(i) {
                    if (!a && r[t] !== undefined || r[t] && r[t].children !== undefined) {
                        n(r[t]);
                        return
                    }
                    _CTK6da3(20, "data.addrlist.start", "model.product.init");
                    e.use("ajax", function(e, n) {
                        n({url: "http://www.tmall.com/go/app/tmall/common/addrlist.php",data: {id: t,addProvs: r[1] && r[1].children ? false : true,frm: "malldetail"},dataType: "jsonp",cache: true,jsonpCallback: "jsonpAreaTree" + t,success: function(n) {
                                _CTK6da3(20, "data.addrlist.success", "data.addrlist.start");
                                e.mix(r, n.list, true, null, true);
                                i(r[t] || null)
                            },timeout: 10,error: function() {
                                _CTK6da3(20, "data.addrlist.error", "data.addrlist.start");
                                i(r[t] || null)
                            }})
                    })
                });
                u[t](n)
            })
        },_onCardIn: function(e, t) {
            var n = l._cardManager;
            if (!n) {
                n = l._cardManager = new window.JZ.CardManager({cardCookie: "xx1",loginCookie: "xx4",timeout: 1e4})
            }
            if (n.isIn()) {
                t()
            } else {
                n.begin(e);
                n.onCardIn(t)
            }
        },_onMfpIn: function(t) {
            var n = window.g_config;
            function a() {
                var e = window.MFP.LoginPopup;
                if (e) {
                    e.oncallback(t);
                    e.check({cardPSW: true})
                }
            }
            window.MFP ? a() : e.getScript(n.assetsHost + "/p/mall/jz/popup/popup.js", {success: function() {
                    e.use("IFCLoginPopup", a)
                }})
        },onTrackID: function(t) {
            var n = this;
            n.onLoad("config", function(n) {
                var a = n.url;
                var r = a.mdskip ? a.mdskip + "/extension/get_tb_ck_ps.htm" : a.tbskip + "/json/get_tb_ck_ps.htm";
                e.use("cookie", function(e, n) {
                    e.getScript(r + "?varName=__BTrackID&t=" + e.now(), {success: function() {
                            t(i.__BTrackID && i.__BTrackID.ct || n.get("t"))
                        },error: function() {
                            t(i.__BTrackID && i.__BTrackID.ct || n.get("t"))
                        },timeout: 5})
                })
            })
        },monitorBuyServer: function(e, t, n) {
            var a = "http://asyncwebserver.monitor.taobao.com/item?";
            var i = ["src=" + e, "type=" + t, "rq=" + encodeURIComponent(n), "t=" + +new Date];
            (new Image).src = a + i.join("&")
        },_buylogin: function(t, n) {
            var a = this;
            n = n || {};
            if (g_config.domain.indexOf("95095.") != -1) {
                var r = "http://buy." + window.g_config.domain + "/login/buy.do?from=itemDetail&var=login_indicator&id=" + n.itemId + "&shop_id=" + n.shopId + "&cart_ids="
            } else {
                var r = "http://buy." + (u ? "daily." : "") + window.g_config.domain + "/login/buy.do?from=itemDetail&var=login_indicator&id=" + n.itemId + "&shop_id=" + n.shopId + "&cart_ids="
            }
            e.use("cookie", function(e, o) {
                o.remove("cookie2", "");
                e.getScript(r + "&t=" + e.now(), {success: function() {
                        var r = i.login_indicator || {};
                        if (r.success && r["hasLoggedIn"] || !r.success) {
                            t(r)
                        } else if (!r["hasLoggedIn"]) {
                            if (r.fastBuy && n.fastBuy) {
                                t(r)
                            } else {
                                _CTK6da3(20, "trade.buy.login", "trade.run.buyForm");
                                a.onLogin(function(n) {
                                    r.fastBuy = false;
                                    r.hasLoggedIn = true;
                                    r.success = true;
                                    if (n) {
                                        e.mix(r, n)
                                    }
                                    t(r)
                                }, {check: false})
                            }
                        }
                    },error: function() {
                        t({hasLoggedIn: true,success: false,fastBuy: false})
                    },timeout: 10,charset: "gbk"})
            })
        },_buyIfc: function(t, n) {
            var a = this;
            _CTK6da3(20, "trade.run.buyIfc", "trade.buy.run");
            a._onCardIn("#J_LinkBuy", function() {
                a._onMfpIn(function() {
                    a.onLoad(["config", "selectedSku", "selectedService", "amount"], function(t, a, i, r) {
                        var o = [];
                        if (i) {
                            e.each(i, function(e, t) {
                                o.push(t + "|" + (e || 0))
                            })
                        }
                        var u = [t.itemDO.itemId, r, a ? a.skuId : 0];
                        if (o.length > 0) {
                            u.push(o.join("-"))
                        }
                        location.href = t.tradeConfig[3] + "?buyer_from=ifc0001&buy_param=" + u.join("_");
                        n && n({level: 0})
                    })
                })
            })
        },_buyState: function(e, t) {
            var n = this;
            _CTK6da3(20, "trade.run.buyState", "trade.buy.run");
            n.onLoad(["config", "selectedSku", "amount"], function(e, t, n) {
                location.href = e.tradeConfig[4] + "&state=item_id_num:" + e.itemDO.itemId + ",skuId:" + (t ? t.skuId : 0) + ",quantity:" + n
            })
        },_buyForm: function(t, a) {
            var i = this;
            _CTK6da3(20, "trade.run.buyForm", "trade.buy.run");
            i.onLoad(["config", "selectedSku", "selectedService", "selectedSkuInfo", "etm", "isOfflineShop", "token", "buyerLoc", "selectedSkuInfo", "itemPrice", "gateway", "secKill", "userInfo", "currentPromotion", "amount", "wtBuyParam", "currentCycle", "currentProgressive", "xshmPay", "hasGift", "selectedCarProp", "buyFlowFrom", "pickupPoint", "amountMultiple"], function(o, u, c, l, d, s, f, m, l, p, v, g, y, h, b, C, I, S, _, k, T, P, x, L) {
                var A = n.get("#J_FrmBid"), D = {}, w = u ? u.skuId : 0;
                A.target = "_self";
                function O(e, t, n) {
                    if (A[e]) {
                        A[e].value = t
                    } else {
                        var a = n ? ' id="' + n + '" ' : "";
                        A.innerHTML += '<input type="hidden" name="' + e + '" value="' + t + '"' + a + ">"
                    }
                }
                O("root_refer", P["root_refer"]);
                O("item_url_refer", P["item_url_refer"]);
                if (P["u_channel"]) {
                    O("umpkey", P["u_channel"])
                }
                var M = o.itemDO.quantity || "";
                if ((!p || p.promType == 1) && h && h.amountRestriction && h.amountRestriction < M) {
                    M = h.amountRestriction
                }
                var B = [];
                if (c) {
                    e.each(c, function(e, t) {
                        B.push(t + "|" + (e || 0))
                    })
                }
                b = b * L;
                var K = [o.itemDO.itemId, b, w];
                if (B.length > 0) {
                    K.push(B.join("-"))
                }
                var F = [];
                e.each(l, function(e) {
                    F.push(e)
                });
                if (g && g.timeKillKeyName && typeof g.timeKillKey != "undefined") {
                    if (o.itemDO.isOnline && (o.itemDO.isSecondKillFromPC || o.itemDO.isSecondKillFromPCAndWap || o.detail.timeKillAuction && (y && y.loginUserType))) {
                        O(g.timeKillKeyName, g.timeKillKey)
                    }
                }
                if (v && v.trade) {
                    for (var R in v.trade.addToBuyNow) {
                        O(R, v.trade.addToBuyNow[R])
                    }
                }
                if (I) {
                    O("buy_cycle", I.buy_cycle);
                    O("delivery_amount", I.delivery_amount)
                }
                var j = {};
                var q = o && o.carCascade;
                if (q) {
                    T = T.split(";");
                    T = e.map(T, function(e) {
                        return e.replace(":", "_")
                    });
                    j.skuExtra = T
                }
                if (x) {
                    j.pickupPoint = x
                }
                if (!e.isEmptyObject(j)) {
                    var E = e.JSON.stringify(j);
                    O("extraAttribute", encodeURIComponent(E))
                }
                if (C) {
                    O("wt_buy_param", C)
                }
                if (S) {
                    O("installmentPay", true);
                    O("installmentNum", S.stages);
                    _CTK6da3(20, "trade.buy.progressive", "trade.run.buyForm")
                }
                if (_) {
                    _CTK6da3(20, "trade.buy.xshmPay", "trade.run.buyForm");
                    O("xshmPay", _)
                }
                O("allow_quantity", M);
                O("buy_param", K.join("_"));
                O("quantity", b);
                O("_tb_token_", f, "J_TokenField");
                O("skuInfo", F.join(";"));
                O("use_cod", "false");
                O("_input_charset", "UTF-8");
                O("destination", m);
                O("skuId", w);
                O("bankfrom", i.getState("bankfrom"));
                O("from_etao", i.getState("frm") == "etao" ? 1 : "");
                if (o.isTwView) {
                    O("buyer_from", "mhw")
                } else {
                    O("buyer_from", i.getState("buyer_from") || "ecity")
                }
                O("item_id_num", o.itemDO.itemId);
                O("item_id", o.itemDO.itemId);
                O("auction_id", o.itemDO.itemId);
                O("seller_rank", "0");
                O("seller_rate_sum", "0");
                O("is_orginal", "no");
                O("point_price", "false");
                O("secure_pay", "true");
                O("pay_method", "\u6b3e\u5230\u53d1\u8d27");
                O("from", "item_detail");
                O("buy_now", o.itemDO.reservePrice);
                O("current_price", o.itemDO.reservePrice);
                O("auction_type", o.itemDO.auctionType);
                O("seller_num_id", o.itemDO.userId);
                A["strSkuId"] && O("strSkuId", w);
                O("activity", "");
                O("chargeTypeId", "", "J_ChargeTypeId");
                var N = i.getState("buytraceid");
                if (N)
                    O("buytraceid", N);
                var U = i.getState("i_channel");
                if (U)
                    O("i_channel", U);
                if (o.tradeType == 1) {
                    O("item_url_refer", r.referrer || "OTHER")
                }
                if (p && p.promType == 1) {
                    O("key", i.getState("key"))
                }
                if (o.isHouseholdService) {
                    O("deliveryZoneCode", m)
                }
                if (d !== null) {
                    O("etm", d)
                }
                if (d === "") {
                    if (o.detail.isHkItem) {
                        A.action = o.tradeConfig[o.tradeType]
                    } else {
                        A.action = o.tradeConfig[1]
                    }
                } else if (o.tradeType === 7 && (S || _ || k)) {
                    A.action = o.tradeConfig[2]
                } else {
                    A.action = o.tradeConfig[o.tradeType]
                }
                i._buylogin(function(r) {
                    r = r || {};
                    if (r.success && r.token && r.token.length > 0) {
                        var u = r.token;
                        for (var c = 0, l = u.length; c < l; c++) {
                            O(u[c][0], u[c][1])
                        }
                    }
                    if (r.fastBuy) {
                        A.action = o["url"]["buyBase"] + "/fastbuy/fast_buy.htm";
                        _CTK6da3(20, "trade.buy.fastBuy", "trade.run.buyForm")
                    }
                    var d = A.action === o.tradeConfig[7];
                    if (r.unitPrefix && !n.data(A, "trade-unit") && !d) {
                        A.action = (A.action || "").replace(/(http:\/\/)/, "$1" + r.unitPrefix + ".");
                        n.data(A, "trade-unit", true);
                        _CTK6da3(20, "trade.buy.unit", "trade.run.buyForm")
                    }
                    if (t.tmallCarFinantialEnable) {
                        var s = n.create('<form method="post" style="display:none"/>');
                        document.body.appendChild(s);
                        var f = typeof o.tradeConfig[6] === "string" ? e.JSON.parse(o.tradeConfig[6]) : o.tradeConfig[6];
                        if (f.url) {
                            n.attr(s, "action", f.url);
                            i.onLoad(["currentPriceInfo", "currentPromotion", "mainImg", "itemtitle", "currentColorSp"], function(t, a, i, r, o) {
                                function u(e, t, a) {
                                    var i = a ? ' id="' + a + '" ' : "";
                                    var r = n.create('<input type="hidden" name="' + e + '" value="' + t + '"' + i + ">");
                                    n.append(r, s)
                                }
                                for (var c in f.params) {
                                    u(c, f.params[c])
                                }
                                var l;
                                if (a) {
                                    l = a.price
                                } else {
                                    l = t.price
                                }
                                e.use("io", function(e, n) {
                                    u("sku", n.serialize(A));
                                    u("key2", t.encryptDES);
                                    u("carIoc", i);
                                    u("carPrice", l);
                                    u("carColor", o.title);
                                    s.submit()
                                })
                            })
                        }
                    } else {
                        A.submit()
                    }
                    a && a({level: 0})
                }, {itemId: o.itemDO.itemId,shopId: o.rstShopId,fastBuy: !n.attr("#J_LinkBuy", "data-noFastBuy") && !s && o.tradeType != 2})
            })
        },_cartMini: function(t, a) {
            var i = this;
            _CTK6da3(20, "trade.run.cartMini", "trade.cart.run");
            i.onLoad(["selectedService", "selectedSku", "config", "token", "buyerLoc", "amount", "campaignInfo", "gateway", "selectedCarProp", "pickupPoint", "currentProgressive", "xshmPay"], function(r, o, u, c, l, d, s, f, m, p, v, g) {
                var y = u && u.carCascade;
                var h = {};
                if (y) {
                    m = m.split(";");
                    m = e.map(m, function(e) {
                        return e.replace(":", "_")
                    });
                    h = {skuExtra: m}
                }
                var b = {};
                if (v) {
                    b.installmentPay = true;
                    b.installmentNum = v.stages;
                    h.itemExtra = b;
                    _CTK6da3(20, "trade.cart.progressive", "trade.run.cartMini")
                }
                if (g) {
                    _CTK6da3(20, "trade.cart.xshmPay", "trade.run.cartMini");
                    b.xshmPay = true;
                    h.itemExtra = b
                }
                if (p) {
                    h.pickupPoint = p
                }
                var C = function() {
                    var m = [];
                    if (r) {
                        e.each(r, function(e, t) {
                            m.push(t + "|" + (e || 0))
                        })
                    }
                    var p = n.attr("#J_ImgBooth", "src") || "";
                    var v = f && f.trade && f.trade.addToCart;
                    var g = {};
                    i.onTrackID(function(r) {
                        i.onLoad(["minicart", "itemDO", "buyFlowFrom"], function(f, y, b) {
                            g = {_tb_token_: c,anim: {img: p,startNode: t.button,endNode: n.get("#J_MiniCart") || n.get("#TMinaCart") || undefined},add: e.mix({deliveryCityCode: l,campaignId: s && s.campaignId || i.getState("campaignId") || 0,from_etao: i.getState("frm") == "etao" ? 1 : "",tpId: i.get("tpId"),umpkey: b["u_channel"],items: [e.merge(v, {itemId: u.itemDO.itemId,skuId: o ? o.skuId : 0,iChannel: i.getState("i_channel") || "",quantity: d,serviceInfo: m.join("-"),extraAttribute: h})]}, v)};
                            g.tsid = r;
                            g.itemId = y.itemId;
                            g.sellerId = y.userId;
                            g.categoryId = y.categoryId;
                            g.root_refer = b["root_refer"];
                            g.item_url_refer = b["item_url_refer"];
                            f.add(g, function(e) {
                                if (u.isTwView) {
                                    setTimeout(function() {
                                        TB.Global.tmUpdate()
                                    }, 1e3)
                                }
                                a({method: "mini",level: 0,message: e.warn || "",response: e,request: g})
                            }, function(e) {
                                _CTK6da3(20, "trade.cart.error", "trade.run.cartMini", {group: e.errorCode});
                                a({method: "mini",level: -1,name: e.errorCode,message: e.error})
                            })
                        })
                    })
                };
                _CTK6da3(20, "trade.cart.login", "trade.run.cartMini");
                i._buylogin(function(e) {
                    if (e.success && e["hasLoggedIn"]) {
                        C()
                    } else {
                        i.onLogin(C, {check: false})
                    }
                })
            })
        },_cartUrl: function(t, n) {
            var a = this;
            _CTK6da3(20, "trade.run.cartUrl", "trade.cart.run");
            var i = function(t, i, o) {
                t += "&ct=" + i;
                e.getScript(t, {success: function() {
                        var u;
                        if (TB && TB.Detail) {
                            u = TB.Detail.CartResult;
                            TB.Detail.CartResult = null;
                            delete TB.Detail.CartResult
                        }
                        if ("undefined" === typeof u) {
                            a.monitorBuyServer("gwc", "invalid", t);
                            n && n({method: "obuy",trackId: i,level: -5,name: "fatalError",message: "\u65e0\u6cd5\u52a0\u8f7d\u8d2d\u7269\u8f66\u6570\u636e"});
                            return
                        }
                        if (typeof u.error !== "undefined") {
                            if ("UserCartIsFull" === u.error || "TrackCartIsFull" === u.error) {
                                n && n({method: "obuy",trackId: i,result: u,level: -2,name: u.error,message: u.error})
                            } else {
                                n && n({method: "obuy",trackId: i,result: u,level: -5,name: "fatalError",message: u.error})
                            }
                        } else {
                            if (o) {
                                e.use("cookie", function(e, t) {
                                    var n, a;
                                    n = o + (-1 === o.indexOf("?") ? "?" : "&") + "userid=" + t.get("cookie17") + "&pre=" + encodeURIComponent(r.URL);
                                    a = new Image(1, 1);
                                    a.src = n.replace("{loc}", "1") + "&cache=" + +new Date;
                                    a.onload = function() {
                                        a = null
                                    }
                                })
                            }
                            n && n({method: "obuy",trackId: i,result: u,level: 0})
                        }
                    },error: function() {
                        a.monitorBuyServer("gwc", "timeout", t);
                        n && n({method: "obuy",trackId: i,level: -5,name: "fatalError",message: "\u63a5\u53e3\u8bbf\u95ee\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u3002"})
                    },timeout: 10,charset: r.charset || r["characterSet"] || "gb2312"})
            };
            a.onLoad(["selectedSku", "config", "selectedService", "buyerLoc", "isOfflineShop", "amount"], function(t, n, r, o, u, c) {
                var l = t ? 2 : 1, d = n.valCartInfo || {}, s = t ? t.skuId : d.itemId, f = n.apiAddCart || "", m = d["dbNum"];
                var p = (-1 === f.indexOf("?") ? "?" : "&") + "outer_id=" + s + "&outer_id_type=" + l + "&quantity=" + c + "&x_id=" + m;
                p += "&nekot=" + e.now();
                var v = a.getState;
                var g = v("buytraceid");
                var y = "&bankfrom=" + v("bankfrom");
                if (!u && g) {
                    g = "&buytraceid=" + g;
                    y += g
                }
                p += y;
                var h = [];
                if (r) {
                    e.each(r, function(e, t) {
                        h.push(t + "|" + (e || 0))
                    })
                }
                p += "&serviceInfo=" + h.join("-");
                p += "&devisionCode=" + o;
                var b = f + p, C = d["statsUrl"];
                if (u) {
                    a._onCardIn("#J_LinkAdd", function() {
                        a.onTrackID(function(e) {
                            i(b, e, C)
                        })
                    })
                } else {
                    a.onTrackID(function(e) {
                        i(b, e, C)
                    })
                }
            })
        },_mobilebuy: function(t, n) {
            var a = this;
            _CTK6da3(20, "trade.run.mobilebuy", "trade.mbuy.run");
            this.onLoad(["config", "itemDO", "selectedSku", "selectedService", "selectedSkuInfo", "amount", "mainImg"], function(t, i, r, o, u, c, l) {
                var d = {itemId: t.itemDO.itemId,itemImg: l.replace(/_\d{2,3}x\d{2,3}(q90)?.jpg/, "_80x80.jpg"),relEl: "#J_ImgBooth",num: c};
                var s = a.getState("key");
                if (s)
                    d.tgKey = s;
                d.skuId = r ? r.skuId : 0;
                if (o) {
                    var f = [];
                    e.each(o, function(e, t) {
                        f.push(t + "|" + e)
                    });
                    d.serv = f.join("-")
                }
                if (i && i.isElecCouponItem) {
                    d.type = 1
                }
                e.use("mui/mobilecross", function(e, t) {
                    t.crossBuy(d);
                    n({level: 0})
                })
            })
        },buy: function(t) {
            var n = this;
            t = t || {};
            var a;
            if (t.type == 2) {
                _CTK6da3(20, "trade.cart.start", "model.product.init");
                a = setTimeout(function() {
                    _CTK6da3(20, "trade.cart.lose", "trade.cart.start", {reject: "trade.cart.login"})
                }, 4096)
            } else if (t.type == 3) {
                _CTK6da3(20, "trade.mbuy.start", "model.product.init");
                a = setTimeout(function() {
                    _CTK6da3(20, "trade.mbuy.lose", "trade.mbuy.start", {reject: "trade.mbuy.login"})
                }, 4096)
            } else if (t.type == 4) {
                _CTK6da3(20, "trade.buycar.start", "model.product.init");
                a = setTimeout(function() {
                    _CTK6da3(20, "trade.buycar.lose", "trade.buycar.start", {reject: "trade.buycar.login"})
                }, 4096)
            } else {
                _CTK6da3(20, "trade.buy.start", "model.product.init");
                a = setTimeout(function() {
                    _CTK6da3(20, "trade.buy.lose", "trade.buy.start", {reject: "trade.buy.login"})
                }, 4096)
            }
            function i(e) {
                n.set("tradeResult", e);
                clearTimeout(a);
                if (t.type == 2) {
                    if (e.level) {
                        _CTK6da3(20, "trade.cart.failure", "trade.cart.run", {group: e.level})
                    } else {
                        _CTK6da3(20, "trade.cart.success", "trade.cart.run")
                    }
                } else if (t.type == 3) {
                    if (e.level) {
                        _CTK6da3(20, "trade.mbuy.failure", "trade.mbuy.run", {group: e.level})
                    } else {
                        _CTK6da3(20, "trade.mbuy.success", "trade.mbuy.run")
                    }
                } else if (t.type == 4) {
                    if (e.level) {
                        _CTK6da3(20, "trade.buycar.failure", "trade.buycar.run", {group: e.level})
                    } else {
                        _CTK6da3(20, "trade.buycar.success", "trade.buycar.run")
                    }
                } else {
                    if (e.level) {
                        _CTK6da3(20, "trade.buy.failure", "trade.buy.run", {group: e.level})
                    } else {
                        _CTK6da3(20, "trade.buy.success", "trade.buy.run")
                    }
                }
                t.callback && t.callback(e)
            }
            n.canBuy(t, function(a) {
                a.type = t.type || 1;
                if (a.level > 0) {
                    i(a);
                    return
                }
                n.onLoad("deviceType", function(a) {
                    if (a === "phone") {
                        if (t.type == 1) {
                            n._buyInPhone(t, i)
                        } else if (t.type == 2) {
                            n._cartInPhone(t, i)
                        } else if (t.type == 3) {
                            n._chaoshiCartInPhone(t, i)
                        }
                    } else {
                        if (t.type == 2) {
                            _CTK6da3(20, "trade.cart.run", "trade.cart.start");
                            e.use("dom", function(e, a) {
                                var r = a.parent("#J_LinkAdd");
                                if (r && !a.hasClass(r, "tb-hidden")) {
                                    n._cartUrl(t, i)
                                } else {
                                    n._cartMini(t, i)
                                }
                            })
                        } else if (t.type == 3) {
                            _CTK6da3(20, "trade.mbuy.run", "trade.mbuy.start");
                            n._mobilebuy(t, i)
                        } else {
                            _CTK6da3(20, "trade.buy.run", "trade.buy.start");
                            n.onLoad(["isOfflineShop", "config"], function(e, a) {
                                if (e) {
                                    n._buyIfc(t, i);
                                    return
                                }
                                if (a.tradeType == 4) {
                                    n._buyState(t, i);
                                    return
                                }
                                n._buyForm(t, i)
                            })
                        }
                    }
                })
            })
        },canBuy: function(e, t) {
            e = e || {};
            var n = this, a = n._bvList, i = {level: 0,checkType: e.type};
            if (!a || !a.maxLevel) {
                t && t(i)
            }
            var r = e.level || 0;
            function o(n) {
                var u, c, l = false;
                if (n < r || i.level >= n) {
                    t && t(i)
                } else if (!(u = a[n]) || !(c = u.length)) {
                    o(n - 1)
                } else {
                    for (var d = c - 1; d >= 0; d--) {
                        u[d](e, function(e) {
                            if (!e) {
                                e = {level: 0}
                            }
                            if (l) {
                                return
                            }
                            c--;
                            if (e.level) {
                                if (e.level >= n) {
                                    t && t(i = e);
                                    l = true;
                                    return
                                } else if (e.level > i.level) {
                                    i = e
                                }
                            }
                            if (c === 0) {
                                o(n - 1)
                            }
                        })
                    }
                }
            }
            o(a.maxLevel)
        },addBuyValidator: function(e, t) {
            t = t || 0;
            var n = this, a = n._bvList || (n._bvList = {}), i = a[t] || (a[t] = []);
            if (a.maxLevel === undefined || t > a.maxLevel) {
                a.maxLevel = t
            }
            i.push(e)
        },_decisionVList: [],needDecision: function(e) {
            var t = this;
            var n = t._decisionVList;
            var a = n.length;
            var i = false;
            function r() {
                for (var t = 0, r = n.length; t < r; t++) {
                    n[t](function(t) {
                        if (i) {
                            return
                        }
                        a--;
                        if (t) {
                            i = true;
                            return e(true)
                        }
                        if (a === 0) {
                            e(false)
                        }
                    })
                }
            }
            r()
        },needDecisionValidator: function(e) {
            var t = this;
            var n = t._decisionVList;
            n.push(e)
        },setBuyParam: function(e, t, n) {
            _CTK6da3(20, "tmshop.setBuyParam", "app.init");
            if (!e) {
                return
            }
            n = n || 0;
            var a = this;
            function i(n) {
                a.onLoad("gateway", function(a) {
                    var i = a && a.trade && a.trade[n];
                    if (t === null || t === undefined) {
                        if (i) {
                            delete i[e]
                        }
                    } else {
                        if (!a.trade) {
                            a.trade = {}
                        }
                        i = i || (a.trade[n] = {});
                        i[e] = t
                    }
                })
            }
            if (n === 1 || n === 0) {
                i("addToBuyNow")
            }
            if (n === 2 || n === 0) {
                i("addToCart")
            }
        },onProgressive: function(e, t) {
            var n = {};
            function a(e) {
                return (Math.floor(e * 100) / 100).toFixed(2) * 1
            }
            function i(e) {
                if (!n[e]) {
                    n[e] = new RegExp("^" + e + "_")
                }
                return n[e]
            }
            function r(e, t, n) {
                return (a(e / t) + a(e * n / t)).toFixed(2)
            }
            this.onLoad(["progressiveInfo", "itemDO", "totalPrice"], function(n, a, i) {
                var o, u;
                if (n && (o = n.extInfos) && o.installFee && e && (u = o.installFee[e])) {
                    var c = parseInt(e, 10), l;
                    l = u.rate;
                    t({type: e,stages: c,minPrice: r(i.min, c, l),maxPrice: r(i.max, c, l),rate: l,enabled: n.enable})
                } else {
                    t(null)
                }
            })
        },getState: function(t) {
            if (e.isArray(t)) {
                return e.mix({}, this.get("state"), undefined, t)
            }
            return (this.get("state") || {})[t] || ""
        },safeGet: function(e) {
            var t;
            var n = this;
            e = e.split(".");
            for (var a = 0, i = e.length; a < i; a++) {
                if (a === 0) {
                    t = n.get(e[a])
                } else {
                    t = t[e[a]]
                }
                if (typeof t === "undefined" || t === null) {
                    break
                }
            }
            return t
        }});
    e.mix(l, {instance: function() {
            return a || (a = new l)
        },onPriceInfo: function() {
            var e = l.instance();
            return e.onPriceInfo.apply(e, arguments)
        },onPromotionList: function() {
            var e = l.instance();
            return e.onPromotionList.apply(e, arguments)
        },clearSkuProp: function() {
            var e = l.instance();
            return e.clearSkuProp.apply(e, arguments)
        },refreshCanBuyStatus: function() {
            var e = l.instance();
            return e.refreshCanBuyStatus.apply(e, arguments)
        },selectSkuProp: function() {
            var e = l.instance();
            return e.selectSkuProp.apply(e, arguments)
        },deselectSkuProp: function() {
            var e = l.instance();
            return e.deselectSkuProp.apply(e, arguments)
        },canSelectSkuProp: function() {
            var e = l.instance();
            return e.canSelectSkuProp.apply(e, arguments)
        },selectService: function() {
            var e = l.instance();
            return e.selectService.apply(e, arguments)
        },deselectService: function() {
            var e = l.instance();
            return e.deselectService.apply(e, arguments)
        },onChange: function() {
            var e = l.instance();
            return e.onChange.apply(e, arguments)
        },onLoad: function() {
            var e = l.instance();
            return e.onLoad.apply(e, arguments)
        },buy: function() {
            var e = l.instance();
            return e.buy.apply(e, arguments)
        },canBuy: function() {
            var e = l.instance();
            return e.canBuy.apply(e, arguments)
        },set: function() {
            var e = l.instance();
            return e.set.apply(e, arguments)
        },get: function(e) {
            var t = l.instance();
            t.onLoad(e);
            return t.get.apply(t, arguments)
        }});
    return l
}, {requires: ["detail-model/model", "dom"]});
KISSY.add("detail-m/mods/model/adapt", function(e) {
    function t(t, i) {
        var a = null;
        i = i.split(".");
        e.each(i, function(e) {
            var i = (a || t)[e];
            if (typeof i !== "undefined") {
                a = i
            } else {
                a = null;
                return false
            }
        });
        return a
    }
    return {transform: function(i) {
            var a = t(i, "defaultModel");
            if (a && !a.gatewayDO) {
                a.gatewayDO = {trade: {addToBuyNow: {},addToCart: {}}}
            }
            if (a.priceResultDO) {
                a.itemPriceResultDO = a.priceResultDO;
                var n = a.itemPriceResultDO;
                var r = n.priceInfo;
                var o = e.isEmptyObject(r);
                if (o) {
                    n.priceInfo.def = n.defaultPriceInfoDO
                }
                for (var s in r) {
                    var d = r[s];
                    if (d.tagPrice && typeof d.tagPrice.cent !== "undefined") {
                        d.tagPrice = (d.tagPrice.cent / 100).toFixed(2)
                    }
                    if (d.price && typeof d.price.cent !== "undefined") {
                        d.price = (d.price.cent / 100).toFixed(2)
                    }
                    var l = d.promotionList;
                    if (l) {
                        var c = d.promPrice;
                        l.unshift(c)
                    }
                }
                a.detailPageTipsDO = n.detailPageTipsDO
            } else {
                a.itemPriceResultDO = {}
            }
            return i
        }}
});
KISSY.add("detail-m/mods/header/header", function(e, t, i, a) {
    var n = t.instance();
    var r = a.extend({el: "#s-header",initializer: function() {
            var t = this;
            t.initRateCount();
            n.onLoad(["config"], function(t) {
                if (t.isChaoshi) {
                    e.getScript("//g.alicdn.com/tm/chaoshi-m/4.8.1/??seed.js,seed-add.js,mods/header/header-base-seed.js", function() {
                        e.use(["chaoshi-m/mods/header/header-base"], function(e, i) {
                            var a = new i({tpId: t.rstShopId,triggerSearch: "#m-header .search",triggerCategory: "#m-header .category",initCart: false});
                            a.getModel(function(e, t, i) {
                                n.addAttr("chaoshiDeliverArea");
                                n.set("chaoshiDeliverArea", {id: t.siteId,name: t.siteName,sites: i.sites})
                            })
                        })
                    })
                }
            }.bind(this))
        },initRateCount: function() {
            n.onLoad(["model"], function(e) {
                var t = e && e.rateDO && e.rateDO.rateCounts;
                if (t) {
                    this.$el.one(".review").append("<b>" + t + "</b>")
                }
            }.bind(this))
        }});
    return r
}, {requires: ["detail-model/product", "dom", "detail-m/widgets/view/view"]});
KISSY.add("detail-m/widgets/view/view", function(e, t) {
    var i = "//img.alicdn.com/tps/i4/T12d9HFL4gXXXe1I2r-1-1.png";
    var n = t.extend({el: undefined,$el: undefined,app: undefined,page: undefined,events: undefined,initializer: function() {
            var t = this;
            var i = this.el;
            var n = this.userConfig || {};
            e.mix(this, n);
            if (i) {
                this.$el = typeof i === "string" ? e.one(i) : i instanceof e.Node ? i : e.one(i);
                if (this.$el) {
                    this.el = this.$el.getDOMNode();
                    if (this.el) {
                        if (this.events) {
                            e.each(this.events, function(i, n) {
                                e.each(i, function(e, i) {
                                    if (n === "") {
                                        t.$el.on(i, function(i) {
                                            e.apply(t, [i, this])
                                        })
                                    } else {
                                        t.$el.delegate(i, n, function(i) {
                                            e.apply(t, [i, this])
                                        })
                                    }
                                })
                            })
                        }
                    }
                }
            }
        },loadImg: function(e) {
            var t = function(e) {
                var t = "ui-img-loading";
                var n = e.attr("data-src");
                e.attr("src", i);
                e.addClass(t);
                var a = new Image;
                a.onload = function() {
                    e.removeClass(t);
                    e.attr("src", n);
                    a = null
                };
                a.src = n
            };
            if (e.length) {
                e.each(t)
            } else {
                t(e)
            }
        }});
    return n
}, {requires: ["base", "node"]});
KISSY.add("detail-m/mods/p-summary/summary", function(e, t, i, n, a, r, o, s, c, l, u, d, f, m, p, v, h, g) {
    var y = t.extend({el: "#p-summary",initializer: function() {
            var e = this;
            [i, n, a, r, o, s, c, l, u, d, f, m, p, v, h, g].forEach(function(t, i) {
                typeof t == "function" && new t({app: e.app,page: e})
            })
        }});
    return y
}, {requires: ["detail-m/widgets/view/view", "detail-m/mods/showcase/showcase", "detail-m/mods/price/price", "detail-m/mods/adds/adds", "detail-m/mods/advantage/advantage", "detail-m/mods/action/action", "detail-m/mods/recommend/recommend", "detail-m/mods/title/title", "detail-m/mods/footer/footer", "detail-m/mods/shop/shop", "detail-m/mods/chaoshiDeliver/chaoshiDeliver", "detail-m/mods/activityEntry/activityEntry", "detail-m/mods/poi/poi", "detail-m/mods/chaoshiTodayCrazy/chaoshiTodayCrazy", "detail-m/mods/chaoshiHotActivity/chaoshiHotActivity", "detail-m/mods/chaoshiAgain/seeAgain", "detail-m/mods/chaoshiAgain/buyAgain"]});
KISSY.add("detail-m/mods/showcase/showcase", function(e, t, i, n) {
    var a = t.instance();
    var r = i.extend({el: "#s-showcase",events: {".open": {tap: function(e) {
                    e.preventDefault();
                    this.$el.addClass("show-skus");
                    this.$el.all(".pics img").each(function(e) {
                        e.attr("src", e.attr("data-src"))
                    });
                    this.app.sendAtpanel("mtmalldetail.1.11")
                }},".close": {tap: function(e) {
                    e.preventDefault();
                    this.$el.removeClass("show-skus")
                }},".main": {tap: function(e) {
                    e.preventDefault();
                    this.app.go("desc");
                    this.app.sendAtpanel("mtmalldetail.1.18")
                }}},initializer: function(e) {
            if (this.$el) {
                this.initScroll();
                this.initChangeMainImg();
                this.initJewelTry();
                var t = this.$el.all(".pics img");
                if (t.length > 4) {
                    this.$el.addClass("c2");
                    this.$el.one(".skus").removeClass("c2")
                }
            }
        },initScroll: function() {
            var t = this;
            if (this.$el.all(".pics img").length > 8) {
                e.use("detail-m/widgets/iscroll/iscroll-lite", function(e, i) {
                    new i(t.$el.one(".pics")[0])
                })
            }
        },initChangeMainImg: function() {
            var t = this;
            var i = this.$el.one(".pics");
            if (i) {
                var n = t.$el.one(".main img");
                i.delegate("tap", "img", function(a) {
                    var r = e.one(a.target);
                    if (r.hasClass("current")) {
                        return
                    }
                    i.one(".current").removeClass("current");
                    r.addClass("current");
                    n.attr("data-src", t.app.formatSrc(a.target.src, "480x480q50"));
                    t.loadImg(n)
                })
            }
        },initJewelTry: function() {
            var e = this;
            a.onLoad(["itemDO"], function(t) {
                var i = t.trySuitUrl;
                var a = t.tryItOn;
                if (i && a != false) {
                    e.$el.append(n.create('<a href="' + i + '" class="jewel" traget="_blank">\u73e0\u5b9d<br>\u8bd5\u6234</a>'))
                }
            })
        }});
    return r
}, {requires: ["detail-model/product", "detail-m/widgets/view/view", "dom"]});
KISSY.add("detail-m/mods/price/price", function(e, t, i, n, a, r, o, s) {
    var c;
    var l = a.instance();
    var u = n.extend({el: "#s-price",initializer: function() {
            if (!this.$el)
                return;
            c = this.userConfig.app;
            l = c.product;
            var e = this;
            var t = e.app.get("env");
            l.onLoad(["config", "buyPrice", "originalPrice", "currentWrtInfo", "currentPromotion", "model", "tagPrice", "itemPrice", "memberMultiPoint", "detailPageTips"], function(n, a, r, s, u, d, f, m, p, v) {
                var h = {buyPrice: a,originalPrice: r,tagPrice: f,currentWrtInfo: s,currentPromotion: u,config: n};
                var g = [];
                var y = null;
                var b = "";
                var S = d.jhsDO;
                if (S) {
                    g.push({text: "\u805a\u5212\u7b97",cls: "tag-ju"});
                    h.jhsDO = S
                }
                if (u && u.add) {
                    y = u.add.match(/\+(\d+)[\S]+$/);
                    if (y && y.length)
                        y = y[1];
                    if (u.add.match("\u6dd8\u91d1\u5e01")) {
                        b = "\u6dd8\u91d1\u5e01"
                    } else {
                        b = "\u79ef\u5206"
                    }
                    h.pointsLabel = b;
                    h.points = y
                }
                var I = [];
                var k = o.getParam();
                if (k.ttid) {
                    I.push("ttid=" + k.ttid)
                }
                if (s && s.fullPayment) {
                    I.push("type=fp")
                } else {
                    I.push("type=dj")
                }
                h.params = I.join("&");
                var w = 0;
                var T = m.duo11Item;
                var P = m.duo11Stage;
                var C = false;
                if (!v) {
                    v = m.detailPageTipsDO
                }
                if (T && P === 1) {
                    var x = v.warmingUpHintText;
                    if (x) {
                        g.unshift({cls: "big-promo",text: x});
                        w = 1
                    }
                } else if (T && P === 2) {
                    var _ = v.icons;
                    if (_ && _.length) {
                        for (var D = _.length - 1, A = 0; D >= A; D--) {
                            if (_[D].tips) {
                                g.unshift({cls: "big-promo",text: _[D].tips});
                                C = true
                            }
                        }
                        w = 2
                    }
                } else if (P === 0) {
                    var _ = v.icons;
                    if (_ && _.length) {
                        for (var D = _.length - 1, A = 0; D >= A; D--) {
                            if (_[D].tips) {
                                g.unshift({cls: "big-promo",text: _[D].tips})
                            }
                        }
                        w = 2
                    }
                }
                if (C === false) {
                    if (u && u.type) {
                        g.unshift({text: u.type})
                    }
                }
                h.memberMultiPoint = p;
                var L = e.app.uri.query.get("memberMultiPoint");
                if (L) {
                    h.memberMultiPoint = L
                }
                if (h.memberMultiPoint) {
                    c.sendAtpanel("tmalldetail.39.4")
                }
                if (t.tmallApp) {
                    if (h.memberMultiPoint) {
                        g.unshift({text: "\u4e13\u4eab\u591a\u500d\u79ef\u5206"})
                    }
                    h.memberMultiPoint = null
                }
                h.priceDisplayType = w;
                g = g.slice(0, 3);
                h.slogons = g;
                var O = e.render(h);
                i.delegate(O, "tap", ".tm-multi-wrap", function() {
                    c.sendAtpanel("tmalldetail.39.5");
                    l.onLoad("itemDO", function(e) {
                        location.href = "//m.laiwang.com/market/laiwang/tmall/app-download.php?mmstat=detail_h5cross&type=detail&key=" + e.itemId
                    })
                })
            })
        },render: function(e) {
            if (e.buyPrice.str === e.originalPrice.str && !e.currentWrtInfo) {
                delete e.originalPrice
            }
            var t = this;
            var i = e.currentPromotion;
            if (i) {
                e.amountRestriction = i.amountRestriction;
                e.buyerAmountRestriction = i.buyerAmountRestriction
            }
            t.$el.html(r.to_html(s, e));
            return t.$el.getDOMNode()
        }});
    return u
}, {requires: ["dom", "event", "detail-m/widgets/view/view", "detail-model/product", "detail-m/widgets/juicer/juicer", "detail-m/mods/lib/util", "detail-m/mods/price/price.juicer"]});
(function() {
    var e = function() {
        var t = [].slice.call(arguments);
        t.push(e.options);
        if (t[0].match(/^\s*#([\w:\-\.]+)\s*$/gim)) {
            t[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function(e, i) {
                var n = document;
                var a = n && n.getElementById(i);
                t[0] = a ? a.value || a.innerHTML : e
            })
        }
        if (arguments.length == 1) {
            return e.compile.apply(e, t)
        }
        if (arguments.length >= 2) {
            return e.to_html.apply(e, t)
        }
    };
    var t = {escapehash: {"<": "&lt;",">": "&gt;","&": "&amp;",'"': "&quot;","'": "&#x27;","/": "&#x2f;"},escapereplace: function(e) {
            return t.escapehash[e]
        },escaping: function(e) {
            return typeof e !== "string" ? e : e.replace(/[&<>"]/gim, this.escapereplace)
        },detection: function(e) {
            return typeof e === "undefined" ? "" : e
        }};
    var i = function(e) {
        if (typeof console !== "undefined") {
            if (console.warn) {
                console.warn(e);
                return
            }
            if (console.log) {
                console.log(e);
                return
            }
        }
        throw e
    };
    var n = function(e, t) {
        e = e !== Object(e) ? {} : e;
        if (e.__proto__) {
            e.__proto__ = t;
            return e
        }
        var i = function() {
        };
        var n = Object.create ? Object.create(t) : new (i.prototype = t, i);
        for (var a in e) {
            if (e.hasOwnProperty(a)) {
                n[a] = e[a]
            }
        }
        return n
    };
    e.__cache = {};
    e.version = "0.6.5-stable";
    e.settings = {};
    e.tags = {operationOpen: "{@",operationClose: "}",interpolateOpen: "\\${",interpolateClose: "}",noneencodeOpen: "\\$\\${",noneencodeClose: "}",commentOpen: "\\{#",commentClose: "\\}"};
    e.options = {cache: true,strip: true,errorhandling: true,detection: true,_method: n({__escapehtml: t,__throw: i,__juicer: e}, {})};
    e.tagInit = function() {
        var t = e.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + e.tags.operationClose;
        var i = e.tags.operationOpen + "\\/each" + e.tags.operationClose;
        var n = e.tags.operationOpen + "if\\s*([^}]*?)" + e.tags.operationClose;
        var a = e.tags.operationOpen + "\\/if" + e.tags.operationClose;
        var r = e.tags.operationOpen + "else" + e.tags.operationClose;
        var o = e.tags.operationOpen + "else if\\s*([^}]*?)" + e.tags.operationClose;
        var s = e.tags.interpolateOpen + "([\\s\\S]+?)" + e.tags.interpolateClose;
        var l = e.tags.noneencodeOpen + "([\\s\\S]+?)" + e.tags.noneencodeClose;
        var c = e.tags.commentOpen + "[^}]*?" + e.tags.commentClose;
        var u = e.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + e.tags.operationClose;
        var d = e.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + e.tags.operationClose;
        e.settings.forstart = new RegExp(t, "igm");
        e.settings.forend = new RegExp(i, "igm");
        e.settings.ifstart = new RegExp(n, "igm");
        e.settings.ifend = new RegExp(a, "igm");
        e.settings.elsestart = new RegExp(r, "igm");
        e.settings.elseifstart = new RegExp(o, "igm");
        e.settings.interpolate = new RegExp(s, "igm");
        e.settings.noneencode = new RegExp(l, "igm");
        e.settings.inlinecomment = new RegExp(c, "igm");
        e.settings.rangestart = new RegExp(u, "igm");
        e.settings.include = new RegExp(d, "igm")
    };
    e.tagInit();
    e.set = function(e, t) {
        var i = this;
        var n = function(e) {
            return e.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function(e) {
                return "\\" + e
            })
        };
        var a = function(e, t) {
            var a = e.match(/^tag::(.*)$/i);
            if (a) {
                i.tags[a[1]] = n(t);
                i.tagInit();
                return
            }
            i.options[e] = t
        };
        if (arguments.length === 2) {
            a(e, t);
            return
        }
        if (e === Object(e)) {
            for (var r in e) {
                if (e.hasOwnProperty(r)) {
                    a(r, e[r])
                }
            }
        }
    };
    e.register = function(e, t) {
        var i = this.options._method;
        if (i.hasOwnProperty(e)) {
            return false
        }
        return i[e] = t
    };
    e.unregister = function(e) {
        var t = this.options._method;
        if (t.hasOwnProperty(e)) {
            return delete t[e]
        }
    };
    e.template = function(t) {
        var i = this;
        this.options = t;
        this.__interpolate = function(e, t, i) {
            var n = e.split("|"), a = n[0] || "", r;
            if (n.length > 1) {
                e = n.shift();
                r = n.shift().split(",");
                a = "_method." + r.shift() + ".call({}, " + [e].concat(r) + ")"
            }
            return "<%= " + (t ? "_method.__escapehtml.escaping" : "") + "(" + (!i || i.detection !== false ? "_method.__escapehtml.detection" : "") + "(" + a + ")" + ")" + " %>"
        };
        this.__removeShell = function(t, n) {
            var a = 0;
            t = t.replace(e.settings.forstart, function(e, t, i, n) {
                var i = i || "value", n = n && n.substr(1);
                var r = "i" + a++;
                return "<% ~function() {" + "for(var " + r + " in " + t + ") {" + "if(" + t + ".hasOwnProperty(" + r + ")) {" + "var " + i + "=" + t + "[" + r + "];" + (n ? "var " + n + "=" + r + ";" : "") + " %>"
            }).replace(e.settings.forend, "<% }}}(); %>").replace(e.settings.ifstart, function(e, t) {
                return "<% if(" + t + ") { %>"
            }).replace(e.settings.ifend, "<% } %>").replace(e.settings.elsestart, function(e) {
                return "<% } else { %>"
            }).replace(e.settings.elseifstart, function(e, t) {
                return "<% } else if(" + t + ") { %>"
            }).replace(e.settings.noneencode, function(e, t) {
                return i.__interpolate(t, false, n)
            }).replace(e.settings.interpolate, function(e, t) {
                return i.__interpolate(t, true, n)
            }).replace(e.settings.inlinecomment, "").replace(e.settings.rangestart, function(e, t, i, n) {
                var r = "j" + a++;
                return "<% ~function() {" + "for(var " + r + "=" + i + ";" + r + "<" + n + ";" + r + "++) {{" + "var " + t + "=" + r + ";" + " %>"
            }).replace(e.settings.include, function(e, t, i) {
                return "<%= _method.__juicer(" + t + ", " + i + "); %>"
            });
            if (!n || n.errorhandling !== false) {
                t = "<% try { %>" + t;
                t += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'
            }
            return t
        };
        this.__toNative = function(e, t) {
            return this.__convert(e, !t || t.strip)
        };
        this.__lexicalAnalyze = function(t) {
            var i = [];
            var n = [];
            var a = "";
            var r = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"];
            var o = function(e, t) {
                if (Array.prototype.indexOf && e.indexOf === Array.prototype.indexOf) {
                    return e.indexOf(t)
                }
                for (var i = 0; i < e.length; i++) {
                    if (e[i] === t)
                        return i
                }
                return -1
            };
            var s = function(t, a) {
                a = a.match(/\w+/gim)[0];
                if (o(i, a) === -1 && o(r, a) === -1 && o(n, a) === -1) {
                    if (typeof window !== "undefined" && typeof window[a] === "function" && window[a].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return t
                    }
                    if (typeof global !== "undefined" && typeof global[a] === "function" && global[a].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return t
                    }
                    if (typeof e.options._method[a] === "function" || e.options._method.hasOwnProperty(a)) {
                        n.push(a);
                        return t
                    }
                    i.push(a)
                }
                return t
            };
            t.replace(e.settings.forstart, s).replace(e.settings.interpolate, s).replace(e.settings.ifstart, s).replace(e.settings.elseifstart, s).replace(e.settings.include, s).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/gim, s);
            for (var l = 0; l < i.length; l++) {
                a += "var " + i[l] + "=_." + i[l] + ";"
            }
            for (var l = 0; l < n.length; l++) {
                a += "var " + n[l] + "=_method." + n[l] + ";"
            }
            return "<% " + a + " %>"
        };
        this.__convert = function(e, t) {
            var i = [].join("");
            i += "'use strict';";
            i += "var _=_||{};";
            i += "var _out='';_out+='";
            if (t !== false) {
                i += e.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;";
                return i
            }
            i += e.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";
            return i
        };
        this.parse = function(e, t) {
            var a = this;
            if (!t || t.loose !== false) {
                e = this.__lexicalAnalyze(e) + e
            }
            e = this.__removeShell(e, t);
            e = this.__toNative(e, t);
            this._render = new Function("_, _method", e);
            this.render = function(e, t) {
                if (!t || t !== i.options._method) {
                    t = n(t, i.options._method)
                }
                return a._render.call(this, e, t)
            };
            return this
        }
    };
    e.compile = function(e, t) {
        if (!t || t !== this.options) {
            t = n(t, this.options)
        }
        try {
            var a = this.__cache[e] ? this.__cache[e] : new this.template(this.options).parse(e, t);
            if (!t || t.cache !== false) {
                this.__cache[e] = a
            }
            return a
        } catch (r) {
            i("Juicer Compile Exception: " + r.message);
            return {render: function() {
                }}
        }
    };
    e.to_html = function(e, t, i) {
        if (!i || i !== this.options) {
            i = n(i, this.options)
        }
        return this.compile(e, i).render(t, i._method)
    };
    typeof module !== "undefined" && module.exports ? module.exports = e : this.juicer = e;
    KISSY.add("detail-m/widgets/juicer/juicer", function(t) {
        return e
    }, {})
})();
KISSY.add("detail-m/mods/lib/util", function(e) {
    return {formatCentToPrice: function(e) {
            return (e / 100).toFixed(2)
        },getParam: function() {
            var e = {};
            var t = location.search.slice(1).split("&");
            if (t[0].length) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i].split("=");
                    e[a[0]] = a[1]
                }
            }
            return e
        },formatImg: function(e, t) {
            return e.replace(/_(\d+x\d+)?(q\d+)?\.jpg$/, t ? "_" + t + ".jpg" : "")
        }}
});
KISSY.add("detail-m/mods/price/price.juicer", function(e) {
    var t = '{@if currentWrtInfo}<div class="item"><span class="ui-price-wrap wrt-pre-price"><b class="ui-label">\u9884\u552e\u4ef7</b><br>{@if currentWrtInfo.priceCountArr.length} <b class="ui-yen arrowPoint">\uffe5${currentWrtInfo.priceCountArr[currentWrtInfo.level][0]}</b> {@else} <b class="ui-yen arrowPoint preSellStage1">\uffe5${currentWrtInfo.preSellPrice}</b> {@/if} {@if currentWrtInfo.fullPayment}<span class="extra-tip">\uff08\u542b\u5b9a\u91d1<b class="ui-yen">\uffe5${currentWrtInfo.prePayFee}</b>\uff09</span>{@/if}</span> {@if !currentWrtInfo.fullPayment} <span class="ui-price-wrap"><b class="ui-label">\u9884\u4ed8\u5b9a\u91d1</b> <b class="ui-yen">\uffe5${currentWrtInfo.prePayFee}</b></span> {@/if}</div><div class="item"><div class="wrt-stage">{@if currentWrtInfo.priceCountArr.length} {@each currentWrtInfo.priceCountArr as item,key}<div class="wrt-stage-item{@if (currentWrtInfo.level == key)} current{@/if}">{@if currentWrtInfo.level == key}<div class="text">${currentWrtInfo.groupUC}\u4eba\u5df2\u9884\u5b9a</div>{@else}<div class="text">\u6ee1${item[1]}\u4eba</div>{@/if}<div class="price {@if currentWrtInfo.level != key}del{@/if}">\uffe5${item[0]}</div></div>{@/each} {@else}<div class="wrt-stage-item current"><div class="text">${currentWrtInfo.groupUC}\u4eba\u5df2\u9884\u5b9a</div></div>{@/if}</div></div><div class="item rule"><del class="ui-label">\u4ef7\u683c</del><del class="price-origin">\uffe5${originalPrice.str}</del><a href="//mdetail.tmall.com/mobile/wrt_rules.htm?${params}">\u67e5\u770b\u9884\u5b9a\u89c4\u5219</a></div>{@if currentWrtInfo.giftList && currentWrtInfo.giftList.length}<div class="item gift">\u8d60\u54c1\uff1a{@each currentWrtInfo.giftList as gift}\u7b2c${gift.from}-${gift.to}\u4f4d\u987e\u5ba2 \u9001 $${gift.contents}&nbsp;&nbsp;{@/each}</div>{@/if}{@else}<div class="item price-bar"><b class="ui-yen">\uffe5{@if jhsDO}${jhsDO.activityPrice}{@else}${buyPrice.str}{@/if}</b> {@if memberMultiPoint}<div class="tm-multi-wrap" id="J_TMMultiPoints"><div class="tm-multi-text-wrap"><div class="tm-multi-vm"><div class="tm-multi-text">\u624b\u673a\u5929\u732b\u8d2d\u4e70<br>\u9001\u7ea6<strong>${memberMultiPoint}</strong><span class="nowrap">\u79ef\u5206</span></div></div></div><div class="tm-multi-icon-wrap"><i class="tm-multi-icon"></i><div class="tm-multi-icon-text">\u7acb\u5373<br>\u83b7\u53d6</div><i class="tm-multi-icon-arrow"></i></div></div>{@/if}</div>{@if points || slogons.length}<div class="item">{@each slogons as slogon}<em class="tag ${slogon.cls}">${slogon.text}</em>{@/each} {@if points} <span class="ui-point-wrap"><span class="ui-label ui-point-plus">+</span> <span class="ui-label ui-point-number">${points}</span> <span class="ui-label ui-point-name">${pointsLabel}</span></span> {@/if}</div>{@/if} {@if amountRestriction || buyerAmountRestriction}<div class="restrict">{@if amountRestriction}\u6b64\u4f18\u60e0\u9650\u91cf${amountRestriction}\u4ef6{@/if} {@if amountRestriction && buyerAmountRestriction}\uff0c{@/if} {@if buyerAmountRestriction}\u6bcf\u4eba\u9650${buyerAmountRestriction}\u4ef6{@/if}\uff0c\u8d85\u8fc7\u6062\u590d\u539f\u4ef7</div>{@/if} {@if jhsDO}<div class="item">{@if (!config.isChaoshi && originalPrice)} <span class="ui-price-wrap del"><del class="ui-label">\u4e00\u53e3\u4ef7</del><del class="price-origin">\uffe5${originalPrice.str}</del></span> {@/if} {@if (!config.isChaoshi && tagPrice)} <span class="ui-price-wrap del"><del class="ui-label">\u4e13\u67dc\u4ef7</del><del class="price-origin">\uffe5${tagPrice.str}</del></span> {@/if}</div>{@else} {@if (priceDisplayType == 1)}<div class="item">{@if (!config.isChaoshi &&originalPrice)} <span class="ui-price-wrap del"><del class="ui-label">\u4e00\u53e3\u4ef7</del><del class="price-origin">\uffe5${originalPrice.str}</del></span> {@/if} {@if (!config.isChaoshi && tagPrice)} <span class="ui-price-wrap del"><del class="ui-label">\u4e13\u67dc\u4ef7</del><del class="price-origin">\uffe5${tagPrice.str}</del></span> {@/if}</div>{@else if (priceDisplayType == 2)}<div class="item">{@if (!config.isChaoshi && tagPrice)} <span class="ui-price-wrap del"><del class="ui-label">\u4e13\u67dc\u4ef7</del><del class="price-origin">\uffe5${tagPrice.str}</del></span> {@/if}</div>{@else} {@if (!config.isChaoshi && originalPrice)}<div class="item"><del class="ui-label">\u4e00\u53e3\u4ef7</del><del class="price-origin">\uffe5${originalPrice.str}</del></div>{@/if} {@/if} {@/if} {@/if}';
    return t
});
KISSY.add("detail-m/mods/adds/adds", function(e, t, i, a, n) {
    var o = t.instance();
    function r(e) {
        var t = null;
        var i = e ? e.deliveryAddress : "";
        if (i) {
            t || (t = {});
            t.from = i
        }
        var a = e ? e.destination : null;
        if (a) {
            t || (t = {});
            t.to = a
        }
        try {
            var n = e.deliverySkuMap || e.extDeliverySkuMap;
            var o = n["default"][0]
        } catch (r) {
        }
        if (o) {
            var s = o["postage"];
            try {
                s = o["postages"][0]
            } catch (d) {
            }
            if (s) {
                t || (t = {});
                t.price = s
            }
        }
        return t
    }
    var s = i.extend({el: "#s-adds",initializer: function() {
            if (!this.$el)
                return;
            var e = this;
            e.getData(function(t) {
                e.render(t)
            })
        },getData: function(e) {
            o.onLoad(["config", "itemDO", "sellCount", "delivery", "buyPrice", "itemPrice", "priceInfo", "memberMultiPoint", "memberRight"], function(t, i, a, n, o, s, d, l, c) {
                var u = this.app.get("env");
                var m = t.isChaoshi;
                var f = i.weight;
                var p = i.postFee;
                var a = a ? a.sellCount : null;
                var g = a;
                var h = r(n);
                var v = self.app.uri.query.get("memberMultiPoint");
                if (v) {
                    l = v
                }
                var b = null;
                if (u.tmallApp && l) {
                    b = l
                } else if (d) {
                    var y = c && c.value > 0 ? c.value : parseFloat(t.valPointRate);
                    b = Math.floor(o.min * y)
                }
                function w(e) {
                    return !e && e !== 0 ? null : e
                }
                if (m) {
                    if (s && s.duo11Item && s.duo11Stage == 2) {
                        p = "\u5feb\u9012\u5305\u90ae"
                    }
                    e({isChaoshi: true,weight: w(f),delivery: p,saleCount: w(g)})
                } else {
                    var _ = {isChaoshi: false,logistics: h,saleCount: w(g),tmallPoints: w(b)};
                    if (t && t.detail && t.detail.isHkO2OItem) {
                        _.location = i.prov
                    }
                    e(_)
                }
            }.bind(this))
        },render: function(e) {
            if (e.isChaoshi) {
                if (e.weight || e.delivery || e.saleCount) {
                    return this.$el.html(a.to_html(n, e))
                }
            } else {
                if (e.location || e.logistics || e.saleCount || e.tmallPoints) {
                    return this.$el.html(a.to_html(n, e))
                }
            }
            return this.$el.hide()
        }});
    return s
}, {requires: ["detail-model/product", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "./adds.juicer"]});
KISSY.add("detail-m/mods/adds/adds.juicer", function(e) {
    var t = '<div class="content">{@if isChaoshi === true} {@if weight !== null && weight > 0}<div class="weight"><h2>\u91cd\u91cf</h2><div class="v">${weight}kg</div></div>{@/if} {@if delivery !== null}<div class="delivery"><h2>\u8fd0\u8d39</h2><div class="v">${delivery}</div></div>{@/if} {@if saleCount !== null}<div class="sales"><h2>\u6708\u9500\u91cf</h2><div class="v">${saleCount}\u4ef6</div></div>{@/if}{@else} {@if location}<div class="location"><h2>\u6240\u5728\u5730</h2><div class="v">${location}</div></div>{@else if(logistics !== null)}<div class="logistics"><h2>{@if logistics.from}<span class="from">${logistics.from}</span>{@/if} \u81f3 {@if logistics.to}<span class="to">${logistics.to}</span>{@/if}</h2>{@if logistics.price}<div class="v">${logistics.price}</div>{@/if}</div>{@/if} {@if saleCount !== null}<div class="sales"><h2>\u6708\u9500\u91cf</h2><div class="v">${saleCount}\u4ef6</div></div>{@/if} {@if tmallPoints !== null && tmallPoints > 0}<div class="point"><h2>\u5929\u732b\u79ef\u5206</h2><div class="v">\u9001${tmallPoints}\u8d77</div></div>{@/if}{@/if}</div>';
    return t
});
KISSY.add("detail-m/mods/advantage/advantage", function(e, t, i, a, n, o) {
    if (!t.get("#s-advantage"))
        return;
    var r = i.extend({el: "#s-advantage",initializer: function(e) {
            this.bindMore()
        },bindMore: function() {
            new o({target: "#s-advantage .service .v",trigger: "#s-advantage .service"})
        }});
    return r
}, {requires: ["dom", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "./activity.juicer", "detail-m/widgets/more/more"]});
KISSY.add("detail-m/mods/advantage/activity.juicer", function(e) {
    var t = '<li class="activity"><h2>\u6d3b\u52a8\uff1a</h2><div class="v">${activity}</div></li>';
    return t
});
KISSY.add("detail-m/widgets/more/more", function(e) {
    var t = e.DOM;
    var i = "mui-more";
    var n = "mui-more-open";
    function a(i) {
        var a = this;
        this.config = i;
        this.toggleClass = function() {
            t.toggleClass(document.querySelector(a.config.trigger), n)
        };
        this.refresh();
        window.addEventListener("orientationchange", function() {
            setTimeout(function() {
                var t = e.one(a.config.trigger);
                if (t && !t.hasClass(n)) {
                    a.refresh()
                }
            }, 500)
        })
    }
    a.prototype.refresh = function() {
        var t = document.querySelector(this.config.target);
        var n = document.querySelector(this.config.trigger);
        if (!t || !t) {
            return
        }
        if (t.scrollWidth > t.clientWidth) {
            e.one(n).addClass(i).on("tap", this.toggleClass)
        } else {
            e.one(n).removeClass(i).detach("tap", this.toggleClass)
        }
    };
    return a
}, {requires: ["node"]});
KISSY.add("detail-m/mods/action/action", function(e, t, i, a, n, o, r, s) {
    var d = n.instance();
    var c;
    var l;
    var u = {chaoshiCart: "\u52a0\u5165\u8d85\u5e02\u8d2d\u7269\u8f66",addCartSuccess: "\u52a0\u5165\u8d2d\u7269\u8f66\u6210\u529f",serverError: "\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",joinNow: "\u7acb\u523b\u53c2\u56e2",joinError: "\u53c2\u56e2\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",payDeposit: "\u7acb\u523b\u4ed8\u5b9a\u91d1",deposit: "\u7acb\u523b\u9884\u5b9a",soldOut: "\u5356\u5149\u4e86",areaSold: "\u6240\u5728\u533a\u57df\u6682\u65f6\u7f3a\u8d27",isBeginning: "\u5373\u5c06\u5f00\u59cb...",preSellEnd: "\u9884\u552e\u5df2\u7ed3\u675f",sellEnd: "\u5df2\u7ed3\u675f",chanceLeft: "\u8fd8\u6709\u673a\u4f1a"};
    var m = {};
    d.prepareParam = function(t) {
        var i = {};
        d.onLoad(["itemDO", "selectedSku", "selectedService", "amount", "buyerLoc", "selectedCarProp", "pickupPoint", "etParams"], function(a, n, o, r, s, d, c, u) {
            i.itemId = a.itemId;
            if (n) {
                i.skuId = n.skuId
            }
            if (o) {
                var m = [];
                e.each(o, function(e, t) {
                    m.push(t + "|" + e)
                });
                i.service = m.join("-")
            }
            var f = {};
            if (d) {
                d = d.split(";");
                d = e.map(d, function(e) {
                    return e.replace(":", "_")
                });
                f.skuExtra = d
            }
            if (c) {
                f.pickupPoint = c;
                i.exParams = f
            }
            if (e.isEmptyObject(f)) {
                i.extraAttribute = null
            } else {
                i.extraAttribute = JSON.stringify(f)
            }
            if (u) {
                i.buyParam = encodeURIComponent(JSON.stringify(u))
            }
            i.quantity = r;
            i.divisionCode = s;
            var p = l.uri.getQuery();
            i.tks = p.get("tks");
            i.ttid = p.get("ttid");
            i.activityId = p.get("activityId");
            i.from_etao = p.get("frm") == "etao" ? 1 : null;
            t(i)
        })
    };
    d._submitForm = function(e, i, a) {
        var n = i.tradeConfig;
        var o = a.tradeResult;
        var r = o.tradeType;
        var s = n["default"];
        if (!s) {
            s = n[r]
        }
        var d = t.create('<form style="display: none;" method="get"/>');
        t.attr(d, "action", s);
        f(d, e);
        t.append(d, document.body);
        d.submit()
    };
    d._buyInPhone = function(t, i) {
        var a = this;
        this.prepareParam(function(t) {
            var i = t;
            d.onLoad(["config", "model", "gateway", "amountMultiple"], function(t, n, o, r) {
                i.quantity *= r;
                var s = t.tradeParams || {};
                var d = n.tradeParams || {};
                var c = e.merge(s, d, i, m);
                if (o && o.trade) {
                    for (var l in o.trade.addToBuyNow) {
                        c.exParams = c.exParams || {};
                        c.exParams[l] = o.trade.addToBuyNow[l]
                    }
                }
                if (c.exParams) {
                    c.exParams = JSON.stringify(c.exParams)
                }
                a._submitForm(c, t, n)
            })
        })
    };
    d._cartInPhone = function() {
        d.onLoad(["config", "model", "gateway"], function(t, a, n) {
            this.prepareParam(function(o) {
                var r = {itemId: String(o.itemId)};
                if (o.skuId) {
                    r.skuId = String(o.skuId)
                }
                if (o.quantity) {
                    r.quantity = String(o.quantity)
                }
                if (o.divisionCode) {
                    r.exParams = r.exParams || {};
                    r.exParams.divisionId = String(o.divisionCode)
                }
                if (o.service) {
                    r.exParams = r.exParams || {};
                    r.exParams.serviceId = String(o.service)
                }
                if (o.extraAttribute) {
                    r.exParams = r.exParams || {};
                    r.exParams.extraAttribute = String(o.extraAttribute)
                }
                if (r.exParams) {
                    var s = t.tradeParams || {};
                    var d = a.tradeParams || {};
                    r.exParams = e.merge(r.exParams, s, d)
                }
                if (n && n.trade) {
                    for (var c in n.trade.addToCart) {
                        r.exParams = r.exParams || {};
                        r.exParams[c] = n.trade.addToCart[c]
                    }
                }
                if (r.exParams) {
                    r.exParams = JSON.stringify(r.exParams)
                }
                if (location.href.indexOf("frm=etao") !== -1) {
                    r.piggybacking = "tag:etao;"
                }
                e.use("detail-m/widgets/loading/loading", function(e, t) {
                    t.getInstance().show()
                });
                e.use("detail-m/widgets/toast/toast");
                window.$ = window.$ || {};
                window.$.ajax = window.$.ajax || i;
                lib.mtop.H5Request({api: "mtop.trade.addBag",v: "3.0",data: r,ttid: "tmalldetail"}, function(t) {
                    e.use("detail-m/widgets/toast/toast,detail-m/widgets/loading/loading", function(e, t, i) {
                        i.getInstance().hide();
                        _CTKbd2c(21, "mod.action.tap.cart.ok", "mod.action.tap.cart");
                        t.getInstance().show(u.addCartSuccess);
                        l.backFromDecision()
                    })
                }, function(t) {
                    var i = u.serverError;
                    var a = t && t.ret && t.ret[0];
                    if (a) {
                        if (a.indexOf("ERR_SID_INVALID") !== -1) {
                            return self.app.login()
                        } else if (a.indexOf("SESSION_EXPIRED") !== -1) {
                            return self.app.login()
                        } else {
                            i = a.split("::")[1] || i
                        }
                    }
                    e.use("detail-m/widgets/toast/toast,detail-m/widgets/loading/loading", function(e, t, a) {
                        a.getInstance().hide();
                        t.getInstance().show(i);
                        _CTKbd2c(16, "mod.action.tap.cart.error", "mod.action.tap.cart")
                    })
                })
            })
        }.bind(this))
    };
    d.addBuyValidator(function(t, i) {
        d.onLoad(["config", "deviceType", "model"], function(t, a, n) {
            if (a === "pc") {
                return i()
            }
            if (!n.jhsDO) {
                return i()
            }
            var o = t && t.api && t.api.joinTgUrl;
            if (!o) {
                return i()
            }
            _CTKbd2c(8, "mod.action.joinJhs", "mod.action.init");
            e.use("io", function(e, t) {
                t({type: "GET",url: o,dataType: "jsonp",success: function(e) {
                        if (e.success) {
                            var t = e.tgKey;
                            try {
                                t = decodeURIComponent(t)
                            } catch (a) {
                            }
                            m.tgKey = t;
                            m.key = t;
                            i()
                        } else {
                            i({level: 1,name: "jhsJoin",message: e.errorMsg})
                        }
                    },error: function() {
                        i({level: 1,name: "jhsJoin",message: u.joinError})
                    }})
            })
        })
    }, 1);
    var f = function(t, i) {
        var a = "";
        for (var n in i) {
            var o = i[n];
            if (o) {
                a += '<input name="' + n + '" value="' + e.escapeHTML(o) + '" />'
            }
        }
        t.innerHTML = t.innerHTML + a
    };
    var p = o.extend({el: "#s-action",events: {".buy": {tap: function(i) {
                    _CTKbd2c(21, "mod.action.tap.buy");
                    var a = this;
                    i.preventDefault();
                    if (i.target.disabled)
                        return;
                    a.app.sendAtpanel("mtmalldetail.1.3");
                    var n = t.attr(i.target, "data-url");
                    if (n) {
                        return window.open(n)
                    }
                    d.onLoad(["config", "model", "isLogin"], function(t, n, o) {
                        var r = n.jhsDO;
                        var s = t.isChaoshi;
                        var d = r || s;
                        if (d && !o) {
                            return l.login()
                        }
                        if (s && !t.isPreSellBrand) {
                            a.needDecision(function(t) {
                                if (t) {
                                    l.go("decision", {action: "chaoshiCart"})
                                } else {
                                    e.use("detail-m/mods/chaoshiCart/chaoshiCart", function(e, t) {
                                        t.getInstance().cart(i)
                                    })
                                }
                            })
                        } else {
                            a.needDecision(function(e) {
                                if (e) {
                                    l.go("decision", {action: "buy"})
                                } else {
                                    a.buy(i)
                                }
                            })
                        }
                    })
                }},".cart": {tap: function(e) {
                    _CTKbd2c(21, "mod.action.tap.cart");
                    var t = this;
                    e.preventDefault();
                    d.onLoad(["isLogin"], function(i) {
                        if (!i) {
                            l.login();
                            return
                        }
                        this.needDecision(function(i) {
                            if (i) {
                                l.go("decision", {action: "cart"})
                            } else {
                                t.cart(e)
                            }
                        });
                        this.app.sendAtpanel("mtmalldetail.1.12")
                    }.bind(this))
                }}},cart: function(t) {
            d.buy({type: 2,button: t && t.target,callback: function(t) {
                    if (t.level) {
                        e.use("detail-m/widgets/toast/toast", function(e, i) {
                            i.getInstance().show(t.message)
                        })
                    }
                }})
        },buy: function(t) {
            d.buy({type: 1,button: t && t.target,callback: function(t) {
                    if (t.level) {
                        e.use("detail-m/widgets/toast/toast", function(e, i) {
                            i.getInstance().show(t.message)
                        })
                    }
                }})
        },_needDecision: function(e) {
            d.needDecisionValidator(function(e) {
                d.onLoad(["itemDO", "currentService", "config"], function(t, i, a) {
                    var n = a.valItemInfo && a.valItemInfo.skuExtra;
                    var o = n && n.tickets;
                    if (o) {
                        _CTKbd2c(14, "mod.action.type.elec", "mod.action.init")
                    }
                    var r = t.hasSku || i || o || a.carCascade && a.skuCascadeMapString;
                    e(r)
                })
            });
            d.needDecisionValidator(function(e) {
                d.onLoad(["config"], function(t) {
                    var i = t.detail;
                    if (i.isAlicomMasterCard) {
                        return e(true)
                    }
                    return e(false)
                })
            });
            d.needDecision(function(t) {
                e(t)
            })
        },disableBuy: function() {
            t.attr(t.get(".buy", this.el), "disabled", "disabled");
            t.hide(t.get(".cart", this.el))
        },initializer: function() {
            if (!this.$el)
                return;
            _CTKbd2c(26, "mod.action.init");
            var i = this;
            i.el = this.$el.getDOMNode();
            i.tradeBtn = t.get(".buy", i.el);
            i.cartBtn = t.get(".cart", i.el);
            i.needDecision = i._needDecision;
            l = this.app;
            d.onLoad(["config", "model", "currentWrtInfo", "skuNames"], function(n, o, r, m) {
                var f = n && n.detail && n.detail.canBuyInMobile;
                var p = e.clone(o.tradeResult);
                if (t.css(i.cartBtn, "display") === "none") {
                    p.cartEnable = false
                } else {
                    p.cartEnable = true
                }
                if (i.tradeBtn.disabled) {
                    _CTKbd2c(19, "mod.action.tradeEnable.init.false", "mod.action.init");
                    p.tradeEnable = false
                } else {
                    p.tradeEnable = true
                }
                _CTKbd2c({"true": 26,_: 19}, "mod.action.tradeEnable.init", "mod.action.init", {group: p.tradeEnable});
                _CTKbd2c({_: 22,"true": 25}, "mod.action.cartEnable.init", "mod.action.init", {group: p.cartEnable});
                var g = this.$el;
                if (f) {
                    d.onChange("canBuyStatus", function() {
                        d.canBuy({type: 1,level: 4}, function(a) {
                            d.canBuy({type: 2,level: 4}, function(c) {
                                var m;
                                if (!n.isChaoshi && a && a.level > 0 || n.isChaoshi && c && c.level > 1) {
                                    p.cartEnable = false;
                                    p.tradeEnable = false;
                                    if (n.isChaoshi && c && c.level > 1) {
                                        p.tradeBtnText = c.message || u.soldOut
                                    } else if (a.name == "jhs") {
                                        var f = o.jhsDO;
                                        switch (f.itemStatus) {
                                            case 0:
                                                p.tradeBtnText = u.isBeginning;
                                                break;
                                            case 2:
                                                p.tradeBtnText = u.chanceLeft;
                                                break;
                                            case 3:
                                                p.tradeBtnText = u.soldOut;
                                                break;
                                            default:
                                                p.tradeBtnText = u.sellEnd
                                        }
                                    } else if (a.name === "sellCountDown") {
                                        p.tradeBtnText = u.isBeginning;
                                        p.tradeEnable = false;
                                        m = {label: "\u8fd8\u5269",leftTime: p.sellCountDown};
                                        _CTKbd2c(18, "mod.action.sellCountDown", "mod.action.init")
                                    } else if (a.name == "stock") {
                                        if (a.stockType === 1) {
                                            p.tradeBtnText = u.soldOut
                                        } else if (a.stockType === 2) {
                                            p.tradeBtnText = u.areaSold
                                        } else if (a.stockType === 3) {
                                            p.tradeBtnText = u.chanceLeft
                                        } else {
                                            p.tradeBtnText = u.soldOut
                                        }
                                        _CTKbd2c({1: 18,3: 18}, "mod.action.stockLimit", "mod.action.init", {group: a.stockType || 0})
                                    } else if (a.wrtStatus) {
                                        if (r.status === 0) {
                                        } else if (r.status == 1) {
                                            p.tradeBtnText = u.isBeginning;
                                            m = {label: "\u8ddd\u5f00\u59cb",leftTime: (r.startTime - s.now()) / 1e3};
                                            _CTKbd2c(14, "mod.action.wrtCountDown1", "mod.action.init")
                                        } else if (r.status == 3) {
                                            p.tradeBtnText = u.preSellEnd
                                        } else {
                                            p.tradeBtnText = u.preSellEnd
                                        }
                                    } else if (a.name == "areaSold") {
                                        p.tradeBtnText = u.areaSold
                                    } else {
                                        p.tradeBtnText = p.tradeBtnText || u.soldOut
                                    }
                                } else {
                                    if (c.name === "juKey" || c.name === "wanrentuan" || n.isChaoshi) {
                                        p.cartEnable = false
                                    }
                                    if (r) {
                                        p.cartEnable = false;
                                        if (r.fullPayment) {
                                            p.tradeBtnText = u.deposit
                                        } else {
                                            p.tradeBtnText = u.payDeposit
                                        }
                                        if (r.status == 2) {
                                            m = {label: "\u8fd8\u5269",leftTime: (r.endTime - s.now()) / 1e3};
                                            _CTKbd2c(18, "mod.action.wrtCountDown2", "mod.action.init")
                                        }
                                    } else if (o.jhsDO) {
                                        p.tradeBtnText = u.joinNow
                                    } else if (n.isChaoshi) {
                                        p.tradeBtnText = u.chaoshiCart
                                    }
                                }
                                if (p.tradeDisableTypeEnum === 9) {
                                    p.tradeBtnText = "\u7acb\u5373\u8d2d\u4e70";
                                    var h = p.param.ecityActionUrl;
                                    if (h) {
                                        var v = t.get("#J_ExtraTip");
                                        if (!v) {
                                            v = t.create('<div class="extraTip" id="J_ExtraTip">\u6b64\u5546\u54c1\u4e3a\u7535\u5668\u57ce\u6d3b\u52a8\u5546\u54c1\uff0c<a href="' + h + '" target="_blank">\u70b9\u6b64\u67e5\u770b\u8be6\u60c5</a></div>')
                                        }
                                        t.append(v, "#s-action-container")
                                    }
                                }
                                d.set("tradeStatus", p);
                                _CTKbd2c({_: 21,"true": 27}, "mod.action.tradeEnable", "mod.action.init", {group: p.tradeEnable});
                                _CTKbd2c({_: 22,"true": 27}, "mod.action.cartEnable", "mod.action.init", {group: p.cartEnable});
                                if (p.tradeBtnText) {
                                    g.one(".buy").text(p.tradeBtnText)
                                }
                                if (n.cartEnable == false || p.cartEnable == false) {
                                    g.one(".cart").hide()
                                }
                                if (m)
                                    i.renderCountDown(m);
                                if (p && p.tradeEnable == false) {
                                    i.disableBuy()
                                }
                                if (n.isChaoshi) {
                                    g.one(".cart-link").hide();
                                    g.css("padding-right", "10px");
                                    var b = g.one(".buy");
                                    b.addClass("chaoshiCart");
                                    b.prepend("<i></i>");
                                    l.on("afterPageChange", function(e) {
                                        var t = e.to._id;
                                        if (t !== "summary" && t !== "decision") {
                                            g.one(".chaoshiCart").addClass("shorter")
                                        } else {
                                            g.one(".chaoshiCart").removeClass("shorter")
                                        }
                                    });
                                    e.use("detail-m/mods/chaoshiCart/chaoshiCart", function(e, t) {
                                        _CTKbd2c(20, "mod.action.chaoshiBtn.init", "mod.action.init");
                                        t.getInstance({app: i.app,page: i.page})
                                    })
                                }
                            })
                        })
                    });
                    d.onLoad(["itemDO", "currentAmountRestrict", "currentPromotion"], function(e, a, n) {
                        var o = [];
                        var r = e.timesBuy;
                        var s = a && a.restrictAmount;
                        var d = n && n.orderAmountRestriction;
                        if (s) {
                            _CTKbd2c(23, "mod.action.buyerRestrict", "mod.action.init");
                            o.push('\u6bcf\u4eba\u9650\u8d2d<strong class="restrictAmount">' + s + "</strong>\u4ef6")
                        }
                        if (d) {
                            _CTKbd2c(16, "mod.action.orderRestrict", "mod.action.init");
                            o.push('\u6bcf\u5355\u9650\u8d2d<strong class="restrictAmount">' + d + "</strong>\u4ef6")
                        }
                        if (r) {
                            _CTKbd2c(16, "mod.action.timesBuy", "mod.action.init");
                            o.push('\u4ec5\u652f\u6301<strong class="timesBuy">' + r + "</strong>\u500d\u8d2d\u4e70")
                        }
                        var c = t.parent(i.el);
                        var l = t.get(".restrict", c);
                        if (o.length === 0) {
                            return t.hide(l)
                        } else {
                            if (!l) {
                                l = t.create('<div class="restrict"></div>');
                                t.insertBefore(l, i.el)
                            }
                            t.html(l, o.join("\uff0c"))
                        }
                    });
                    if (m && m.length) {
                        var h = [];
                        m.forEach(function(e) {
                            h.push(e.text)
                        });
                        var v = t.create('<div class="sku"><div class="content">' + (p.tradeEnable ? "\u9009\u62e9" : "\u67e5\u770b") + "\uff1a" + h.join("/") + "</div></div>");
                        a.on(v, "tap", function(e) {
                            e.preventDefault();
                            if (e.target.disabled)
                                return;
                            var t = d.get("tradeStatus");
                            l.go("decision", {action: "sku",buttonState: {buy: {enabled: t.tradeEnable,text: t.tradeBtnText},cart: {enabled: t.cartEnable,text: "\u52a0\u5165\u8d2d\u7269\u8f66"}}})
                        });
                        g.parent().prepend(v)
                    }
                }
                var b = n.valCartInfo && n.valCartInfo && n.valCartInfo.cartUrl;
                if (b) {
                    g.one(".cart-link").attr("href", b)
                }
                var y = o && o.vMarketAO && o.vMarketAO.firstSellDO;
                if (y) {
                    var w = y.buttonUrl;
                    if (y.buttonUrl) {
                        _CTKbd2c(20, "mod.action.firstSell", "mod.action.init");
                        g.one(".buy").attr("data-url", w)
                    }
                    var _ = p.tradeTextLink;
                    if (_) {
                        var T = t.create('<div class="extraTip">' + _ + "</div>");
                        t.append(T, "#s-action-container")
                    }
                }
                c = this;
                this.initFloat();
                e.log("action inited!")
            }.bind(this));
            if (this.app.query.get("sku") === "open") {
                this.$el.one(".buy").fire("tap")
            }
        },unfloat: function() {
            var e = this;
            e.$el.appendTo(e.$container).removeClass("float");
            var i = t.get("#J_ExtraTip");
            if (i) {
                t.insertAfter(i, e.$el.getDOMNode())
            }
            this.floating = false
        },"float": function() {
            var e = this;
            e.$el.appendTo("body").addClass("float");
            this.floating = true
        },initFloat: function() {
            var e = this;
            var t = this.$el.parent();
            this.$container = t;
            e.$el.parent().css("height", t.getDOMNode().scrollHeight);
            this.app.on("afterPageChange", function(t) {
                if (t.to._id === "decision") {
                    return
                }
                if (t.to._id === "summary" && e.floating || t.to._id === "sizeHelper") {
                    e.unfloat()
                } else if (t.to._id !== "summary" && !e.floating) {
                    e.float()
                }
            })
        },renderCountDown: function(i) {
            var a = this;
            e.use("detail-m/mods/lib/timer,detail-m/mods/lib/clock", function(e, n, o) {
                var r = a.$el.one(".countdown");
                var s = r.one(".time");
                var d = r.one(".label");
                d.html(i.label);
                if (i.leftTime > 0) {
                    new n({leftTime: i.leftTime,container: s,template: 3,tpl: "{date}"}).onStop(function() {
                        window.location.reload()
                    });
                    r.show()
                } else {
                    t.hide(r)
                }
            })
        }}, {getInstance: function(e) {
            return c || new p(e)
        }});
    return p
}, {requires: ["dom", "io", "event", "detail-model/product", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "detail-m/mods/lib/clock"]});
KISSY.add("detail-m/mods/lib/clock", function(e) {
    var t;
    return {init: function(i) {
            if (t)
                return t;
            t = i.startTime - e.now()
        },now: function() {
            return e.now() + (t || 0)
        }}
});
KISSY.add("detail-m/mods/recommend/recommend", function(e, t, i, n, a, r, o, s, l, c) {
    var d = i.instance();
    function u(e, t) {
        t = t || window.devicePixelRatio;
        e = e || window.screen.width * (1 / 3) * .85 * t;
        var i = {210: "210x210",350: "350x350"};
        var n = [210, 350];
        n = n.sort(function(t, i) {
            return Math.abs(t - e) - Math.abs(i - e)
        });
        return i[n[0]] + "q50"
    }
    var f = n.extend({el: "#s-recommend",initializer: function() {
            if (!this.$el) {
                return
            }
            this.el = this.$el.getDOMNode();
            var e = this;
            this.lazyLoad(function() {
                this.getData(function() {
                    this.render.apply(this, arguments)
                })
            })
        },getData: function(i) {
            var n = this;
            d.onLoad(["itemDO", "config", "customResource"], function(t, a) {
                var o = a && a.detail && a.detail.showDiscountRecommend;
                var s = {};
                if (o) {
                    e.mix(s, {appId: "03333",wfCode: "96905"});
                    this.app.api["recommend"] = "//ald.taobao.com/recommend.htm"
                }
                var l = e.merge({appId: "03080",itemId: t.itemId,categoryId: t.categoryId,sellerId: t.userId,resultSize: a.isChaoshi ? 18 : 12}, s);
                var c = a.detail.isHkItem;
                if (c) {
                    l.tag = "13186"
                }
                this.server = new r({loadingTarget: "#s-recommend .list",server: {url: this.app.api["recommend"],type: "GET",dataType: "jsonp",jsonpCallback: "jsonp_ald_03080",data: l},validate: function(e) {
                        return !!e
                    }});
                this.server.on("request", function(e) {
                    if (e.data.list && e.data.list.length & e.data.acurl) {
                        (new Image).src = e.acurl
                    }
                    i.apply(n, [e.err, e.err ? null : e.data.list])
                });
                this.server.request()
            }.bind(this));
            d.onLoad("customResource", function(e) {
                if (e && e.length) {
                    var i = a.to_html(s, {list: e});
                    t.prepend(t.create(i), this.el);
                    this.app.sendAtpanel("tmalldetail.203.1")
                }
            }.bind(this))
        },render: function(t, i) {
            var n = this;
            if (!t) {
                if (!i.length) {
                    return n.$el.one(".list").html(a.to_html(l, {msg: "\u5f88\u62b1\u6b49\uff0c\u627e\u4e0d\u5230\u76f8\u5173\u7684\u5546\u54c1"}))
                } else {
                    var r = n.app.getParam()["ttid"];
                    i = i.map(function(e, t) {
                        if (e.title && typeof e.title === "string") {
                            e.title = e.title.replace("\u3010\u5929\u732b\u8d85\u5e02\u3011", "")
                        }
                        if (r) {
                            if (e.url.indexOf("?") != -1) {
                                e.url += "&ttid=" + r
                            } else {
                                e.url += "?ttid=" + r
                            }
                        }
                        e.img = e.img + "_" + u() + ".jpg";
                        return e
                    });
                    d.onLoad(["config"], function(t) {
                        var r = t.isChaoshi;
                        if (r) {
                            var s = [];
                            var l = 0;
                            e.each(i, function(e, t) {
                                if (!s[l]) {
                                    s[l] = []
                                }
                                s[l].push(e);
                                if ((t + 1) % 9 === 0) {
                                    l++
                                }
                            });
                            n.$el.one(".list").html(a.to_html(o, {panels: s,isChaoshi: r}));
                            n.$el.addClass("recommendScroll");
                            e.use(["mui/slider-m/index"], function(e, t) {
                                var i = new t(".recommendScroll", {scroller: ".scroller",pannelClass: "panel",nav: ".icons",triggerSelector: "i",selectedClass: "current",speed: 350,effect: "hSlide",bindTrigger: true,lazyLoadImg: true,autoSlide: false});
                                i.flipsnap.element.addEventListener("fspointmove", function(e) {
                                    e.stopPropagation()
                                });
                                var a = n.app.uri.getQuery().get("ttid");
                                n.$el.on("touchstart", function(e) {
                                    n.app.slider.flipsnap.disableTouch = true
                                });
                                n.$el.on("touchend", function(e) {
                                    n.app.slider.flipsnap.disableTouch = false
                                })
                            });
                            n.$el.all(".cart").each(function(e, t) {
                                var n = i[t];
                                e.on("tap", function(t) {
                                    t.halt(true);
                                    c.getInstance().add({node: e,img: n.img,itemId: n.id || n.itemId,skuId: 0,quantity: 1,sellerId: n.sellerId || n.userId,url: n.url})
                                })
                            })
                        } else {
                            n.$el.one(".list").html(a.to_html(o, {items: i,isChaoshi: r}))
                        }
                    }.bind(this))
                }
            } else {
                n.$el.one(".list").html(a.to_html(l, {msg: "\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"}))
            }
            n.fire("render")
        },lazyLoad: function(e) {
            var t = this;
            if (!t.$el)
                return;
            var i = false;
            var n = t.$el.getDOMNode();
            this.app.onDatalazyload(function(a) {
                a.addCallback(n, function() {
                    i = true;
                    e.apply(t)
                })
            })
        }});
    return f
}, {requires: ["dom", "detail-model/product", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "detail-m/widgets/server/server", "./recommend.juicer", "./banner.juicer", "detail-m/mods/error/error.juicer", "detail-m/mods/chaoshiCart/chaoshiCart"]});
KISSY.add("detail-m/widgets/server/server", function(e, t, i) {
    var n = t.extend({cache: false,cacheSize: 10,maxAge: 60 * 60 * 1e3,loading: false,initializer: function(t) {
            t = this.userConfig;
            this.server = {url: "",data: {},charset: "utf-8",type: "POST",dataType: "text",timeout: 20};
            this.data = {};
            e.mix(this, t, true, null, true);
            if (t.loadingTarget) {
                var i = e.one(t.loadingTarget);
                var n;
                this.on("beforeSend", function() {
                    n = e.one('<div class="ui-loading"><i></i></div>');
                    i.empty().append(n)
                }).on("complete", function() {
                    n.remove()
                })
            }
        },getServerData: function(e) {
            return this.server.data
        },updateServerData: function(t) {
            this.server.data = e.mix(this.server.data, t, true, null, true);
            return this
        },request: function(t, n) {
            var a = this;
            var r = {};
            e.mix(r, this.server.data);
            e.mix(r, t);
            if (this.cache) {
                var o = this.getData(r);
                if (o) {
                    a.fire("beforeSend");
                    a.fire("request", {err: null,data: o});
                    n && n.call(a, null, o);
                    a.fire("complete");
                    return this
                }
            }
            if (this.server.dataType === "script") {
                var s = {success: function() {
                        var e = null;
                        var t = window[r.globalVar];
                        if (!t) {
                            e = {code: 201}
                        }
                        if (!a.validate(t)) {
                            e = {code: 201}
                        } else {
                            t = a.parse(t)
                        }
                        if (a.cache && t) {
                            a.saveData(r, t)
                        }
                        a.fire("request", {err: e,data: t});
                        a.loading = false;
                        a.fire("complete")
                    },error: function() {
                        a.fire("request", {err: {code: 202,msg: "\u8bf7\u6c42\u5931\u8d25"}});
                        a.loading = false;
                        a.fire("complete")
                    }};
                a.loading = true;
                this.fire("beforeSend");
                e.getScript(this.server.url, e.mix(s, {charset: this.server.charset,timeout: this.server.timeout}));
                return this
            }
            var s = {beforeSend: function() {
                    a.loading = true;
                    a.fire("beforeSend")
                },success: function(e) {
                    try {
                        e = JSON.parse(e.replace(//g, ""))
                    } catch (t) {
                    }
                    var i = e ? null : {code: 201};
                    if (!a.validate(e)) {
                        i = {code: 201}
                    } else {
                        e = a.parse(e)
                    }
                    if (a.cache && e) {
                        a.saveData(r, e)
                    }
                    a.fire("request", {err: i,data: e});
                    n && n.call(a, i, e)
                },error: function(e, t) {
                    var i = {code: 202,msg: t};
                    a.fire("request", {err: i});
                    n && n.call(a, i)
                },complete: function() {
                    a.loading = false;
                    a.fire("complete")
                }};
            e.mix(s, this.server, true, null, true);
            e.mix(s, {data: r}, true, null, true);
            i(s);
            return this
        },validate: function(e) {
            return true
        },parse: function(e) {
            return e
        },saveData: function(e, t) {
            try {
                e = JSON.stringify(e);
                var i = this.getCacheList();
                i = i.filter(function(t) {
                    return t.key !== e
                });
                i.push({key: e,data: t,time: (new Date).getTime()});
                if (i.length > this.cacheSize) {
                    i.shift()
                }
                this.saveCacheList(i)
            } catch (n) {
            }
        },getData: function(e) {
            var t = this;
            try {
                var i = this.getCacheList();
                if (i.length) {
                    e = JSON.stringify(e);
                    i = i.filter(function(i) {
                        if (i.key === e && (new Date).getTime() - i.time < t.maxAge) {
                            return true
                        }
                    });
                    if (i.length) {
                        return i[0].data
                    }
                }
            } catch (n) {
            }
        },getCacheList: function() {
            var e = this.data[this.server.url];
            if (!e) {
                this.data[this.server.url] = []
            }
            return this.data[this.server.url]
        },saveCacheList: function(e) {
            this.data[this.server.url] = e
        }});
    return n
}, {requires: ["base", "io"]});
KISSY.add("detail-m/mods/recommend/recommend.juicer", function(e) {
    var t = '{@if isChaoshi}<div class="scroller">{@each panels as panel}<div class="panel">{@each panel as item}<div class="intro"><a href="${item.url}"><div class="img"><img src="${item.img}" alt=""></div></a><div class="info"><div class="title">$${item.title}</div><div class="cart"></div><div class="numbers"><div class="monthSellNum">${item.monthSellNum}\u4eba\u5df2\u4e70</div><div class="price">&yen;${item.price}</div></div></div></div>{@/each}</div>{@/each}</div><div class="icons"><i class="current"></i><i></i></div>{@else}{@each items as item}<a href="${item.url}" class="intro"><div class="img"><img src="${item.img}" alt=""></div><div class="price">&yen;${item.price}</div></a> {@/each} {@/if}';
    return t
});
KISSY.add("detail-m/mods/recommend/banner.juicer", function(e) {
    var t = '<div class="tm-recbanner" data-spm="1998338749">{@each list as item} <a href="${item.linkUrl}" target="_blank"><img src="${item.picUrl}" alt=""></a> {@/each}</div>';
    return t
});
KISSY.add("detail-m/mods/error/error.juicer", function(e) {
    var t = '<div class="ui-error">${msg}</div>';
    return t
});
KISSY.add("detail-m/mods/chaoshiCart/chaoshiCart", function(e, t, i, a, n, r, o) {
    var s = o.instance();
    var d;
    var l;
    var c;
    var u = r.extend({initializer: function() {
            _CTKbd2c(20, "mod.chaoshicart.init");
            var i = this;
            l = i.app;
            c = i.page;
            s.onLoad(["config", "delivery"], function(i, a) {
                t.append(t.create('<div id="chaoshiCartWapper"></div>'), "body");
                window.g_config = window.g_config || {};
                window.g_config.assetsServer = "//g.tbcdn.cn/";
                e.getScript("//g.alicdn.com/mui/seed-m/1.1.1/seed.js", function() {
                    e.getScript("//g.alicdn.com/mui/tinycart/2.1.6/seed.js", function() {
                        e.use("mui/tinycart/core", function(e, t) {
                            t.init({tpId: i.rstShopId,deliveryCityCode: a.areaId,noPrompt: false,wrapper: "#chaoshiCartWapper"})
                        })
                    })
                })
            }.bind(this));
            d = this
        },cart: function(t) {
            var i = this;
            s.onLoad("isLogin", function(a) {
                if (!a) {
                    return i.app.login()
                }
                s.canBuy({type: 2}, function(a) {
                    if (a && a.level) {
                        e.use("detail-m/widgets/toast/toast", function(e, t) {
                            _CTKbd2c({}, "mod.chaoshicart.canBuy", "mod.chaoshicart.init", {group: a.level});
                            if (a.message) {
                                t.getInstance().show(a.message)
                            }
                        })
                    } else {
                        s.prepareParam(function(e) {
                            s.onLoad(["itemDO"], function(a) {
                                i.add({node: t.target || c.$el.one(".buy"),img: a.mainPic,itemId: a.itemId,sellerId: a.userId,skuId: e.skuId,quantity: e.quantity})
                            })
                        })
                    }
                })
            })
        },add: function(e, t) {
            var i = this;
            var a = {itemId: e.itemId,skuId: e.skuId,quantity: e.quantity};
            i._add(a, e, t)
        },_add: function(t, i, a) {
            e.use("mui/tinycart/core", function(e, a) {
                a.add({animation: {startElement: i.node,img: i.img},items: [t]});
                a.on("addSuccess", function() {
                });
                a.on("addError", function(e) {
                    if (e && !e.success && e.errorCode === "CART_ITEM_HAS_SKU_MUST_CHOSE_SKU") {
                        window.location.href = i.url
                    }
                });
                s.onLoad(["isLogin", "userInfo"], function(e, t) {
                    if (e) {
                        l.goldlog("tbchaoshi.21.111", {itemid: i.itemId,module: "detail",seller_id: i.sellerId,nk: t.nicker}, "H46926338")
                    }
                })
            })
        }}, {getInstance: function(e) {
            return d || new u(e)
        }});
    return u
}, {requires: ["dom", "io", "event", "promise", "detail-m/widgets/view/view", "detail-model/product", "detail-m/mods/chaoshiCart/chaoshiCart.css"]});
KISSY.add("detail-m/mods/title/title", function(e, t, i, n, a, r) {
    var o = r.all;
    var s = t.instance();
    var l;
    var c = i.extend({el: "#s-title",initializer: function(e) {
            l = this.app;
            if (this.$el === null)
                return;
            var t = {41572748070: {name: "iPhone 6 Plus",itemId: "41572736528",extra: "&from=iphone6"},41572736528: {name: "iPhone 6",itemId: "41572748070",extra: "&from=iphone6plus"}};
            s.onLoad(["itemDO", "config"], function(e, i) {
                if (i && i.detail && i.detail.isNewAttraction) {
                    var n = i.itemDO.newAttraction;
                    o("#s-title .main").after("<div class='product-sellpoint'>" + n + "</div>")
                }
                var r = e.itemId;
                var s = t[r];
                if (s) {
                    var c = a.create('<div class="relGoods"><a class="content" href="' + l.buildItemUrl(s.itemId, s.extra) + '">\u5176\u4ed6\u578b\u53f7\uff1a' + s.name + "</a></div>");
                    this.$el.after(c)
                }
            }.bind(this))
        }});
    return c
}, {requires: ["detail-model/product", "detail-m/widgets/view/view", "io", "dom", "node"]});
KISSY.add("detail-m/mods/footer/footer", function(e, t, i, a, n) {
    if (!i.get("#s-footer"))
        return;
    var r = t.instance();
    var o;
    var s = function(e, t) {
        var i;
        if (e.detail.isH5NewLogin) {
            i = t + "&redirectURL=" + encodeURIComponent(location.href.split("#")[0])
        } else {
            i = t + "&tpl_redirect_url=" + encodeURIComponent(location.href.split("#")[0])
        }
        return i
    };
    var d = a.extend({el: "#s-footer",events: {},initializer: function(e) {
            o = this.app;
            if (this.$el) {
                var t = this.$el.one(".login");
                r.onLoad(["userInfo", "config"], function(e, i) {
                    var a = i.api;
                    var n = "";
                    if (e && e.userId > 0) {
                        n += '<a href="' + a.myUrl + '" id="J_UserNick">' + e.nicker + "</a>";
                        n += '<a href="' + s(i, a.logOutUrl) + '" id="J_Logout">\u9000\u51fa</a>'
                    } else {
                        n += '<a href="' + s(i, a.loginUrl) + '" id="J_Login">\u767b\u9646</a>';
                        n += '<a href="' + a.reUrl + '" id="J_Register">\u6ce8\u518c</a>'
                    }
                    t.html(n)
                });
                new n({container: this.$el.getDOMNode(),diff: 50})
            }
        }});
    return d
}, {requires: ["detail-model/product", "dom", "detail-m/widgets/view/view", "datalazyload"]});
KISSY.add("detail-m/mods/shop/shop", function(e, t, i, n, a, r) {
    var o = t.instance();
    var s = r.extend({el: "#s-shop",initializer: function() {
            var t = this;
            o.onLoad(["config"], function(e) {
                if (e.isChaoshi) {
                    t.$el.one(".ww-link").hide()
                }
            });
            o.onLoad(["userInfo", "itemDO", "config"], function(n, r, o) {
                if (o && o.detail && (o.detail.isNewMedical || o.detail.isHasQualification)) {
                    var s = i.create('<a class="yao-qualification"></a>');
                    var l = i.get(".main", t.el);
                    i.append(s, l);
                    a.on(s, "tap", function(i) {
                        t.app.sendAtpanel("tmalldetail.206.1");
                        if (!t.qualification) {
                            e.use("detail-m/mods/qualification/qualification", function(e, i) {
                                t.qualification = new i({userId: r.encryptSellerId,itemId: r.itemId,app: app}).show()
                            })
                        } else {
                            t.qualification.show()
                        }
                    })
                }
            })
        }});
    return s
}, {requires: ["detail-model/product", "dom", "io", "event", "detail-m/widgets/view/view"]});
KISSY.add("detail-m/mods/chaoshiDeliver/chaoshiDeliver", function(e, t, i, a, n, r) {
    if (!i.get("#s-chaoshiDeliver"))
        return;
    var o = t.instance();
    var s = {1: function() {
            return "\u9001\u8d27\u8303\u56f4\u4ec5\u9650\u6c5f\u6d59\u6caa\u5730\u533a(\u751f\u9c9c\u7c7b\u522b\u4ec5\u9650\u90e8\u5206\u5730\u533a)"
        },2: function() {
            return "\u9001\u8d27\u8303\u56f4\u4ec5\u9650\u5e7f\u4e1c\u5730\u533a"
        },4: function(t) {
            var i = "\u9001\u8d27\u8303\u56f4\u4ec5\u9650";
            t = t[4];
            var a = [];
            e.each(t.areas, function(t) {
                e.each(t.cities, function(e) {
                    a.push(e.text)
                })
            });
            i += a.join("\u3001") + "\u5730\u533a";
            return i
        }};
    var d = a.extend({el: "#s-chaoshiDeliver",initializer: function() {
            var e = this;
            var t = e.$el;
            t.on("tap", function() {
                var e = t.one(".content");
                if (e.hasClass("opened")) {
                    e.removeClass("opened")
                } else {
                    e.addClass("opened")
                }
            });
            e.render();
            o.on("afterChaoshiDeliverAreaChange", function() {
                e.render()
            })
        },render: function() {
            var e = o.get("deliverArea");
            if (e) {
                var t = e.id;
                var i;
                if (s[t] && e.sites) {
                    i = s[t](e.sites)
                }
                o.onLoad(["config"], function(e) {
                    if (e && e.detail && e.detail.showDiscountRecommend) {
                        i = "\u652f\u6301\u5168\u56fd\u914d\u9001"
                    }
                    if (i) {
                        this.$el.show();
                        this.$el.html(n.to_html(r, {areaName: i}))
                    } else {
                        this.$el.hide()
                    }
                }.bind(this))
            }
        }});
    return d
}, {requires: ["detail-model/product", "dom", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "./chaoshiDeliver.juicer"]});
KISSY.add("detail-m/mods/chaoshiDeliver/chaoshiDeliver.juicer", function(e) {
    var t = '<div class="container"><span class="content"><span class="title">\u914d\u9001\u533a\u57df\uff1a</span> <span class="areaName">${areaName}</span></span></div>';
    return t
});
KISSY.add("detail-m/mods/activityEntry/activityEntry", function(e, t, i, a, n, o, r) {
    var s = r.instance();
    function d(e) {
        if (e) {
            var t = [];
            for (var i = 0; i < e.length; i++) {
                var a = function(e, t) {
                    var i = function(e) {
                        e = e.replace(/(\b[\d+\.]+\b)/g, "<em>$1</em>");
                        return e
                    };
                    var a = [];
                    for (var n = 0; n < e.length; n++) {
                        a.push(e[n].msg)
                    }
                    return i(a.join("\uff1b") + "...")
                };
                t.push(a(e[i].orignPromPlan, 20))
            }
            return t
        } else {
            return null
        }
    }
    var c = a.extend({activity: [],initializer: function() {
            var e = this;
            s.onLoad(["model", "mdskip"], function(t, i) {
                if (i.new) {
                    s.onLoad("tmallShopProm", function(t) {
                        if (t)
                            e.renderNew(t)
                    })
                } else {
                    s.onLoad("itemPrice", function(t) {
                        var i = d(t.campaignInfoList);
                        if (i && i.length > 0) {
                            e.activity = new Array(i.length);
                            for (var a = i.length - 1; a >= 0; a--) {
                                e.render(null, i, a)
                            }
                        }
                    })
                }
            })
        },renderNew: function(a) {
            var r = this;
            for (var s = a.length - 1; s >= 0; s--) {
                (function(s, d) {
                    var c = "\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341";
                    var l = "";
                    if (a.length > 1) {
                        l = c.charAt(d)
                    }
                    s.acitivityIndex = l;
                    s.msg = s.promPlanMsg.join(";");
                    s.activity = s.msg.replace(/(\b[\d+\.]+\b)/g, "<em>$1</em>") + "\uff1b...";
                    var u = t.create(n.to_html(o, s));
                    t.prepend(u, ".itemExtraInfo");
                    i.on(u, "tap", function(t) {
                        if (r.activity[d]) {
                            r.activity[d].show()
                        } else {
                            r.app.loading.show();
                            e.use(["detail-m/mods/activity/activity"], function(e, t) {
                                r.app.loading.hide();
                                r.activity[d] = new t({data: a[d],isNew: true}).show()
                            })
                        }
                    })
                })(a[s], s)
            }
        },render: function(a, r, d) {
            var c = this;
            var l = "\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341";
            var u = "";
            if (r.length > 1) {
                u = l.charAt(d)
            }
            var m = t.create(e.unEscapeHTML(n.to_html(o, {activity: r[d],acitivityIndex: u})));
            t.prepend(m, ".itemExtraInfo");
            i.on(m, "tap", function(t) {
                var i = this.index;
                if (c.activity[i]) {
                    c.activity[i].show()
                } else {
                    c.app.loading.show();
                    e.use(["detail-m/mods/activity/activity"], function(e, t) {
                        c.app.loading.hide();
                        s.onLoad("itemPrice", function(e) {
                            if (e.campaignInfoList) {
                                c.activity[i] = new t({data: [e.campaignInfoList[i]]}).show()
                            }
                        })
                    })
                }
                this._self.app.sendAtpanel("mtmalldetail.1.21")
            }, {index: d,_self: c})
        }});
    return c
}, {requires: ["dom", "event", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "./activityEntry.juicer", "detail-model/product", "./activityEntry.css"]});
KISSY.add("detail-m/mods/activityEntry/activityEntry.juicer", function(e) {
    var t = '<section class="activityEntry"><div class="content"><h2>\u6d3b\u52a8${acitivityIndex}\uff1a</h2><div class="v">$${activity}</div></div></section>';
    return t
});
KISSY.add("detail-m/mods/poi/poi", function(e, t, i, n, a, r, o, s, c) {
    var l = t.instance();
    var u = r.extend({initializer: function() {
            var t = this;
            t.pos = {};
            l.onLoad(["config", "misc", "itemDO"], function(i, n, a) {
                if (i.isHidePoi || i.detail.isHidePoi || i.api.appointUrl) {
                    return
                }
                if (n && n.poiItem) {
                    _CTKbd2c(20, "poi.init", "app.init");
                    t.getPos(function() {
                        t.getData(e.mix(t.pos, {itemId: a.itemId}), function(e, i) {
                            t.render.apply(t, arguments)
                        })
                    })
                }
            })
        },lenFix: function(e, t) {
            return e.length > t ? e.substring(0, t) + "\u2026" : e
        },getPos: function(e) {
            var t = this;
            if (window.navigator.userAgent.match(/WindVane/i)) {
                Ali.ready(function() {
                    window.WindVane.call("WVLocation", "getLocation", {enableHighAcuracy: true,address: false}, function(i) {
                        t.pos = {lng: i.coords.longitude,lat: i.coords.latitude};
                        e(t.pos)
                    }, function(t) {
                        e(null)
                    })
                })
            } else if (navigator.geolocation) {
                var i = false;
                navigator.geolocation.getCurrentPosition(function(n) {
                    t.pos = {lng: n.coords.longitude,lat: n.coords.latitude};
                    e(t.pos);
                    i = true
                }, function(t) {
                    e(null);
                    i = true
                })
            } else {
                e(null)
            }
        },getData: function(e, t) {
            var i = this;
            this.server = new c({server: {url: "//ext.mdskip.taobao.com/mobile/queryPoi.htm",type: "GET",dataType: "jsonp",data: e},validate: function(e) {
                    return e && e.isSuccess
                }});
            this.server.on("request", function(e) {
                t.apply(i, [e.err, e.err ? null : e.data])
            });
            this.server.request()
        },render: function(t, n) {
            var a = this;
            if (t || !n) {
            } else {
                var r = n.defaultModel;
                if (e.isPlainObject(r) && r.addr) {
                    r.addr = a.lenFix(r.addr, 22);
                    var c = s.to_html(o, r);
                    i.insertAfter(i.create(c), ".itemExtraInfo")
                }
            }
            return this
        }});
    return u
}, {requires: ["detail-model/product", "dom", "io", "event", "detail-m/widgets/view/view", "detail-m/mods/poi/poi.juicer", "detail-m/widgets/juicer/juicer", "detail-m/widgets/server/server", "detail-m/mods/poi/poi.css"]});
KISSY.add("detail-m/mods/poi/poi.juicer", function(e) {
    var t = '<section id="s-poi-container"><a href="${url}" class="poi-shop-count">\u670d\u52a1\u95e8\u5e97(${count})</a> <a href="${url}" class="recommend-shop-info"><i></i><div class="name">${name} <span class="distance">{@if distanceFormat}${distanceFormat}{@/if}</span></div><div class="address">${addr}</div></a></section>';
    return t
});
KISSY.add("detail-m/mods/chaoshiTodayCrazy/chaoshiTodayCrazy", function(e, t, i, a, n, r, o) {
    if (!i.get("#s-todayCrazy"))
        return;
    var s = t.instance();
    var d = function() {
        function e(e, t) {
            t = t || window.devicePixelRatio;
            e = e || window.screen.width * (1 / 2) * .85 * t;
            var i = {210: "210x210",350: "350x350"};
            var a = [210, 350];
            a = a.sort(function(t, i) {
                return Math.abs(t - e) - Math.abs(i - e)
            });
            return i[a[0]] + "q50"
        }
        var t;
        return {get: function() {
                return t ? t : t = e()
            }}
    }();
    var l = a.extend({el: "#s-todayCrazy",initializer: function() {
            var e = this;
            e.getData({}, function(t, i) {
                e.render.apply(e, arguments)
            })
        },render: function(t, i) {
            var a = this;
            var o = i && i.data && i.data["itemList"];
            for (prop in o) {
                if (o.hasOwnProperty(prop)) {
                    o[prop].img = o[prop].img + "_" + d.get() + ".jpg"
                }
            }
            a.el.innerHTML = r.to_html(n, i && i.data);
            e.use("mui/chaoshi/daily-sale-countdown/index", function(e, t) {
                new t({wrapper: "#s-todayCrazy .count-down"})
            })
        },getData: function(e, t) {
            var i = this;
            this.server = new o({server: {url: "//chaoshi.tmall.com/nativeApp/getTodayCrazy.do",type: "GET",dataType: "jsonp"},validate: function(e) {
                    return e && e.ret && e.ret[0] == "SUCCESS::\u8c03\u7528\u6210\u529f"
                }});
            this.server.on("request", function(e) {
                t.apply(i, [e.err, e.err ? null : e.data])
            });
            this.server.request()
        }});
    return l
}, {requires: ["detail-model/product", "dom", "detail-m/widgets/view/view", "detail-m/mods/chaoshiTodayCrazy/chaoshiTodayCrazy.juicer", "detail-m/widgets/juicer/juicer", "detail-m/widgets/server/server", "detail-m/mods/chaoshiTodayCrazy/chaoshiTodayCrazy.css"]});
KISSY.add("detail-m/mods/chaoshiTodayCrazy/chaoshiTodayCrazy.juicer", function(e) {
    var t = '<div class="container mui-flex"><div class="remain-time cell fixed" href="${url}"><img src="http://gtms04.alicdn.com/tps/i4/TB1cGAoHFXXXXcgaXXX2oh7IFXX-194-76.png_q50.jpg"> <div class="count-down"></div></div>{@each itemList as item}<div class="product-container cell" href="${url}"><a href="${url}"><img src="${item.img}"></a> <span>\xa5${item.promPrice}</span></div>{@/each}</div>';
    return t
});
KISSY.add("detail-m/mods/chaoshiHotActivity/chaoshiHotActivity", function(e, t, i, a, n, r, o) {
    if (!i.get("#s-hotactivity"))
        return;
    var s = t.instance();
    var d = function() {
        function e(e, t) {
            t = t || window.devicePixelRatio;
            e = e || window.screen.width * (1 / 2) * .85 * t;
            var i = {210: "210x210",350: "350x350"};
            var a = [210, 350];
            a = a.sort(function(t, i) {
                return Math.abs(t - e) - Math.abs(i - e)
            });
            return i[a[0]] + "q50"
        }
        var t;
        return {get: function() {
                return t ? t : t = e()
            }}
    }();
    var l = a.extend({el: "#s-hotactivity",initializer: function() {
            var e = this;
            e.getData({}, function(t, i) {
                e.render.apply(e, arguments)
            })
        },render: function(e, t) {
            var i = this;
            var a = [];
            for (prop in t) {
                if (t.hasOwnProperty(prop)) {
                    t[prop].content = t[prop].content + "_" + d.get() + ".jpg";
                    a.push(t[prop])
                }
            }
            i.el.innerHTML = r.to_html(n, {dA: a})
        },getData: function(e, t) {
            var i = this;
            KISSY.use(["mui/chaoshi/ald/index"], function(e, a) {
                var n = new a({loadingTarget: "#s-hotactivity",server: {data: {appId: "2015031212,2015031213,2015031214,2015031215"}}});
                n.on("request", function(e) {
                    t.apply(i, [e.err, e.err ? null : e.data])
                });
                n.request()
            })
        }});
    return l
}, {requires: ["detail-model/product", "dom", "detail-m/widgets/view/view", "detail-m/mods/chaoshiHotActivity/chaoshiHotActivity.juicer", "detail-m/widgets/juicer/juicer", "detail-m/widgets/server/server", "detail-m/mods/chaoshiHotActivity/chaoshiHotActivity.css"]});
KISSY.add("detail-m/mods/chaoshiHotActivity/chaoshiHotActivity.juicer", function(e) {
    var t = '<header>\u70ed\u95e8\u6d3b\u52a8</header><ul class="content">{@each dA as item}<li><a href="${item.link}"><img class="ui-fb" src="${item.content}"></a></li>{@/each}</ul>';
    return t
});
KISSY.add("detail-m/mods/chaoshiAgain/seeAgain", function(e, t, i, a, n, r, o, s, d, l, c) {
    if (!t.get("#s-seeAgain"))
        return;
    var u = i.instance();
    var m = a.extend({el: "#s-seeAgain",initializer: function() {
            if (!this.$el) {
                return
            }
            this.el = this.$el.getDOMNode();
            var e = this;
            new c({$el: e.$el,app: e.app,page: e.page,appId: "20150518121"})
        }});
    return m
}, {requires: ["dom", "detail-model/product", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "detail-m/widgets/server/server", "detail-m/mods/error/error.juicer", "detail-m/mods/chaoshiCart/chaoshiCart", "datalazyload", "mui/chaoshi/ald/index", "detail-m/mods/chaoshiAgain/chaoshiAgain"]});
KISSY.add("detail-m/mods/chaoshiAgain/chaoshiAgain", function(e, t, i, a, n, o, r, s, d, l, c) {
    var u = i.instance();
    function m(e) {
        m.superclass.constructor.apply(this, arguments);
        this.init(e)
    }
    var f;
    m.ATTRS = {responseSize: {value: undefined,getter: function(e) {
                if (!this.value) {
                    function t(e, t) {
                        t = t || window.devicePixelRatio;
                        e = e || window.screen.width * (1 / 3) * .85 * t;
                        var i = {210: "210x210",350: "350x350"};
                        var a = [210, 350];
                        a = a.sort(function(t, i) {
                            return Math.abs(t - e) - Math.abs(i - e)
                        });
                        return i[a[0]] + "q50"
                    }
                    return this.value = t()
                } else {
                    return this.value
                }
            }}};
    e.extend(m, e.Base, {init: function(e) {
            var t = this;
            f = t;
            t.$el = e.$el;
            t.app = e.app;
            t.page = e.page;
            t.appId = e.appId;
            m.loader = m.loader || (m.loader = t.app.createLoader(function(e) {
                u.onLoad(["itemDO", "config"], function(i, a) {
                    var n = {appId: "20150518121,20150518122",itemId: i.itemId,sellerId: i.userId,resultSize: a.isChaoshi ? 12 : 9};
                    t._data = n;
                    var o = new c({server: {data: n}});
                    o.on("request", function(t) {
                        e(t.err ? null : t.data)
                    });
                    o.request()
                })
            }));
            if (!this.$el) {
                return
            }
            t.el = this.$el.getDOMNode();
            t.on("render", function() {
                t.app.onDatalazyload(function(e) {
                    e.refresh();
                    t.page.on("show", function() {
                        e.resume()
                    }).on("hide", function() {
                        e.pause()
                    })
                })
            });
            t.lazyLoad(function() {
                t.getData(function() {
                    t.render.apply(t, arguments)
                })
            })
        },getData: function(e) {
            var t = this;
            m.loader(function(i) {
                e(i[t.appId].data)
            })
        },render: function(t) {
            var i = this;
            var a = t["list"];
            var o = i.app.getParam()["ttid"];
            a = a.map(function(e, t) {
                if (e.title && typeof e.title === "string") {
                    e.title = e.title.replace("\u3010\u5929\u732b\u8d85\u5e02\u3011", "")
                }
                if (o) {
                    if (e.url.indexOf("?") != -1) {
                        e.url += "&ttid=" + o
                    } else {
                        e.url += "?ttid=" + o
                    }
                }
                e.img = e.img + "_" + i.get("responseSize") + ".jpg";
                return e
            });
            if (a.length < 1) {
                i.$el.one(".list").html(n.to_html(s, {msg: "\u5f88\u62b1\u6b49\uff0c\u627e\u4e0d\u5230\u76f8\u5173\u7684\u5546\u54c1"}))
            } else {
                u.onLoad("config", function(t) {
                    var o = t.isChaoshi;
                    var s = [];
                    var l = 0;
                    e.each(a, function(e, t) {
                        if (!s[l]) {
                            s[l] = []
                        }
                        s[l].push(e);
                        if ((t + 1) % 3 === 0) {
                            l++
                        }
                    });
                    i.$el.one(".list").html(n.to_html(r, {panels: s,isChaoshi: o}));
                    KISSY.use(["mui/slider-m/index"], function(e, t) {
                        var a = new t(i.el, {scroller: ".scroller",transitionDuration: 300,bindTrigger: false,lazyLoadImg: false,autoSlide: false,timeout: 4e3});
                        a.flipsnap.element.addEventListener("fspointmove", function(e) {
                            e.stopPropagation()
                        });
                        var n = i.app.uri.getQuery().get("ttid");
                        i.$el.on("touchstart", function(e) {
                            i.app.slider.flipsnap.disableTouch = true
                        });
                        i.$el.on("touchend", function(e) {
                            i.app.slider.flipsnap.disableTouch = false
                        })
                    });
                    i.$el.all(".cart").each(function(e, t) {
                        var i = a[t];
                        e.on("tap", function(t) {
                            t.halt(true);
                            d.getInstance().add({node: e,img: i.img,itemId: i.id || i.itemId,skuId: 0,quantity: 1,sellerId: i.sellerId || i.userId,url: i.url})
                        })
                    })
                })
            }
            i.fire("render")
        },lazyLoad: function(e) {
            var t = this;
            if (!t.$el)
                return;
            var i = false;
            var a = t.$el.getDOMNode();
            this.app.onDatalazyload(function(n) {
                n.addCallback(a, function() {
                    i = true;
                    e.apply(t)
                })
            })
        }});
    return m
}, {requires: ["dom", "detail-model/product", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "detail-m/widgets/server/server", "./chaoshiAgain.juicer", "detail-m/mods/error/error.juicer", "detail-m/mods/chaoshiCart/chaoshiCart", "datalazyload", "mui/chaoshi/ald/index", "detail-m/mods/chaoshiAgain/chaoshiAgain.css"]});
KISSY.add("detail-m/mods/chaoshiAgain/chaoshiAgain.juicer", function(e) {
    var t = '{@if isChaoshi}<div class="viewport"><div class="scroller">{@each panels as panel}<div class="panel">{@each panel as item}<div class="intro item"><a href="${item.url}"><div class="img"><img src="${item.img}" alt=""></div></a><div class="info"><div class="title">${item.title}</div><div class="cart"></div><div class="numbers"><div class="d-price">\xa5${item.marketPrice}</div><div class="price">\xa5${item.price}</div></div></div></div>{@/each}</div>{@/each}</div></div>{@/if}';
    return t
});
KISSY.add("detail-m/mods/chaoshiAgain/buyAgain", function(e, t, i, a, n, o, r, s, d, l, c) {
    if (!t.get("#s-buyAgain"))
        return;
    var u = i.instance();
    var m = a.extend({el: "#s-buyAgain",initializer: function() {
            if (!this.$el) {
                return
            }
            this.el = this.$el.getDOMNode();
            var e = this;
            new c({$el: e.$el,app: e.app,page: e.page,appId: "20150518122"})
        }});
    return m
}, {requires: ["dom", "detail-model/product", "detail-m/widgets/view/view", "detail-m/widgets/juicer/juicer", "detail-m/widgets/server/server", "detail-m/mods/error/error.juicer", "detail-m/mods/chaoshiCart/chaoshiCart", "datalazyload", "mui/chaoshi/ald/index", "detail-m/mods/chaoshiAgain/chaoshiAgain"]});
