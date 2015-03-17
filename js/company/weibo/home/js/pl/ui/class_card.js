/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/3/12.
 */
function ClassCard(a, b, c, d) {
    var e = c("/$")[0], f = c("/$")[1], g = f.rects, h = f.setImmediate, i = f.proxy, j = f.extend, k = c("/css"), l = {t: ["showWithAniOnTop", "hideWithAniOnTop"], r: ["showWithAniOnRight", "hideWithAniOnRight"], b: ["showWithAniOnBottom", "hideWithAniOnBottom"], l: ["showWithAniOnLeft", "hideWithAniOnLeft"]}, m = c("/Class_bubble").extend({showByTarget: function (lastTarget, event) {
        this._.lastTarget = lastTarget;
        var c = this.getState(), d, e;
        this._.showWithAni = null;
        this.show();
        this._.lastPos = d = g.setArrow({evt: event, node: lastTarget, layer: this.getBox(), arrow: this.getDomList(!0).arrow, priority: this._.priority});
        e = l[d] && l[d][0];
        e = (this._[e] || "").split(":");
        c || e[0] && e[0].length && k.effect(this._.node, e[0], e[1]);
        return this
    }, hide: function () {
        var a = l[this._.lastPos] && l[this._.lastPos][1];
        this._.hideWithAni = this._[a];
        m.__super__.hide.apply(this, arguments)
    }, setPriority: function (a) {
        this._.priority = a;
        return this
    }, lastTarget: function (a) {
        return this._.lastTarget
    }});
    m.defalutOpts = j({}, m.defalutOpts, {lastPos: null, lastTarget: null, priority: "tbrl", showWithAniOnTop: "fadeInUp:fast", showWithAniOnRight: "fadeInRight:fast", showWithAniOnBottom: "fadeInDown:fast", hideWithAniOnLeft: "fadeOutLeft:fast", hideWithAniOnTop: "fadeOutDown:fast", hideWithAniOnRight: "fadeOutLeft:fast", hideWithAniOnBottom: "fadeOutUp:fast", hideWithAniOnLeft: "fadeOutRight:fast"});
    a.exports = m
}