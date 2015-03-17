var YAO = function () {
    var D = document, OA = '[object Array]', OF = "[object Function]", OP = Object.prototype, nt = "nodeType", listeners = [], webkitKeymap = {
        63232: 38, // up
        63233: 40, // down
        63234: 37, // left
        63235: 39, // right
        63276: 33, // page up
        63277: 34, // page down
        25: 9 // SHIFT-TAB (Safari provides a different key code in
    }, patterns = {
        HYPHEN: /(-[a-z])/i,
        ROOT_TAG: /body|html/i
    }, lastError = null;
    //Download by http://www.codefans.net
    return {
        isArray: function (obj) {
            return OP.toString.apply(obj) === OA;
        },
        isString: function (s) {
            return typeof s
                === 'string';
        },
        isBoolean: function (b) {
            return typeof b === 'boolean';
        },
        isFunction: function (fn) {
            return OP.toString.apply(fn) === OF;
        },
        isNull: function (obj) {
            return obj === null;
        },
        isNumber: function (num) {
            return typeof num === 'number' && isFinite(num);
        },
        isObject: function (str) {
            return (str && (typeof str === "object" || this.isFunction(str))) || false;
        },
        isUndefined: function (obj) {
            return typeof obj === 'undefined';
        },
        hasOwnProperty: function (obj, prper) {
            if (OP.hasOwnProperty) {
                return obj.hasOwnProperty(prper);
            }
            return !this.isUndefined(obj[prper]) && obj.constructor.prototype[prper] !== obj[prper];
        },
        isMobile: function (mobile) {
            return /^(13|15|18)\d{9}$/.test(YAO.trim(mobile));
        },
        isName: function (name) {
            return /^[\w\u4e00-\u9fa5]{1}[\w\u4e00-\u9fa5 \.]{0,19}$/.test(YAO.trim(name));
        },

        keys: function (obj) {
            var b = [];
            for (var p in obj) {
                b.push(p);
            }
            return b;
        },
        values: function (obj) {
            var a = [];
            for (var p in obj) {
                a.push(obj[p]);
            }
            return a;
        },
        isXMLDoc: function (obj) {
            return obj.documentElement && !obj.body || obj.tagName && obj.ownerDocument && !obj.ownerDocument.body;
        },
        formatNumber: function (b, e) {
            e = e || '';
            b += '';
            var d = b.split('.');
            var a = d[0];
            var c = d.length > 1 ? '.' + d[1] : '';
            var f = /(\d+)(\d{3})/;
            while (f.test(a)) {
                a = a.replace(f, '$1,$2');
            }
            return e + a + c;
        },
        unformatNumber: function (a) {
            return a.replace(/([^0-9\.\-])/g, '') * 1;
        },
        stringBuffer: function () {
            var a = [];
            for (var i = 0; i < arguments.length; ++i) {
                a.push(arguments[i]);
            }
            return a.join('');
        },
        trim: function (str) {
            try {
                return str.replace(/^\s+|\s+$/g, '');
            }
            catch (a) {
                return str;
            }
        },
        stripTags: function (str) {
            return str.replace(/<\/?[^>]+>/gi, '');
        },
        stripScripts: function (str) {
            return str.replace(/<script[^>]*>([\\S\\s]*?)<\/script>/g, '');
        },
        isJSON: function (obj) {
            obj = obj.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
            return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(obj);
        },
        encodeHTML: function (str) {
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        },
        decodeHTML: function (str) {
            return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        },
        toCamel: function (property) {
            if (!patterns.HYPHEN.test(property)) {
                return property;
            }
            if (propertyCache[property]) {
                return propertyCache[property];
            }
            var converted = property;
            while (patterns.HYPHEN.exec(converted)) {
                converted = converted.replace(RegExp.$1, RegExp.$1.substr(1).toUpperCase());
            }
            propertyCache[property] = converted;
            return converted;
        },

        Cookie: {
            set: function (g, c, f, b) {
                var e = new Date();
                var a = new Date();
                if (f == null || f == 0) {
                    f = 1;
                }
                a.setTime(e.getTime() + 3600000 * 24 * f);
                D.cookie = g + '=' + encodeURI(c) + ';expires=' + a.toGMTString() + ';domain=' + b + '; path=/';
            },
            get: function (e) {
                var b = D.cookie;
                var d = e + '=';
                var c = b.indexOf('; ' + d);
                if (c == -1) {
                    c = b.indexOf(d);
                    if (c != 0) {
                        return null;
                    }
                }
                else {
                    c += 2;
                }
                var a = D.cookie.indexOf(';', c);
                if (a == -1) {
                    a = b.length;
                }
                return decodeURI(b.substring(c + d.length, a));
            },
            clear: function (b, a) {
                if (this.get(b)) {
                    D.cookie = b + '=' + ((domain) ? '; domain=' + a : '') + '; expires=Thu, 01-Jan-70 00:00:01 GMT';
                }
            }
        },

        ua: function () {
            var C = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                mobile: null,
                air: 0,
                caja: 0
            }, B = navigator.userAgent, A;
            if ((/KHTML/).test(B)) {
                C.webkit = 1;
            }
            A = B.match(/AppleWebKit\/([^\s]*)/);
            if (A && A[1]) {
                C.webkit = parseFloat(A[1]);
                if (/ Mobile\//.test(B)) {
                    C.mobile = 'Apple';
                }
                else {
                    A = B.match(/NokiaN[^\/]*/);
                    if (A) {
                        C.mobile = A[0];
                    }
                }
                A = B.match(/AdobeAIR\/([^\s]*)/);
                if (A) {
                    C.air = A[0];
                }
            }
            if (!C.webkit) {
                A = B.match(/Opera[\s\/]([^\s]*)/);
                if (A && A[1]) {
                    C.opera = parseFloat(A[1]);
                    A = B.match(/Opera Mini[^;]*/);
                    if (A) {
                        C.mobile = A[0];
                    }
                }
                else {
                    A = B.match(/MSIE\s([^;]*)/);
                    if (A && A[1]) {
                        C.ie = parseFloat(A[1]);
                    }
                    else {
                        A = B.match(/Gecko\/([^\s]*)/);
                        if (A) {
                            C.gecko = 1;
                            A = B.match(/rv:([^\s\)]*)/);
                            if (A && A[1]) {
                                C.gecko = parseFloat(A[1]);
                            }
                        }
                    }
                }
            }
            A = B.match(/Caja\/([^\s]*)/);
            if (A && A[1]) {
                C.caja = parseFloat(A[1]);
            }
            return C;
        }(),

        extend: function (subClass, superClass, override) {
            if (!superClass || !subClass) {
                throw new Error('extend failed, please check that all dependencies are included.');
            }
            var F = function () {
            };
            F.prototype = superClass.prototype;
            subClass.prototype = new F();
            subClass.prototype.constructor = subClass;
            subClass.superclass = superClass.prototype;
            if (superClass.prototype.constructor == Object.prototype.constructor) {
                superClass.prototype.constructor = superClass;
            }
            if (override) {
                for (var p in override) {
                    subClass.prototype[p] = override[p];
                }
            }
        },
        augmentProto: function (sub, sup) {
            if (!sub || !sup) {
                throw new Error('augment failed, please check that all dependencies are included.');
            }
            var d = sub.prototype, g = sup.prototype, b = arguments, c, h;
            if (b[2]) {
                for (c = 2; c < b.length; c += 1) {
                    d[b[c]] = g[b[c]];
                }
            }
            else {
                for (h in g) {
                    if (!d[h]) {
                        d[h] = g[h];
                    }
                }
            }
        },
        augmentObject: function (e, d) {
            if (!d || !e) {
                throw new Error('augment failed, please check that all dependencies are included.');
            }
            var b = arguments, c, f;
            if (b[2]) {
                if (YAO.isString(b[2])) {
                    e[b[2]] = d[b[2]];
                }
                else {
                    for (c = 0; c < b[2].length; c += 1) {
                        e[b[2][c]] = d[b[2][c]];
                    }
                }
            }
            else {
                for (f in d) {
                    e[f] = d[f];
                }
            }
            return e;
        },
        clone: function (d, f) {
            var e = function () {
            }, b, c = arguments;
            e.prototype = d;
            b = new e;
            if (f) {
                for (p in f) {
                    b[p] = f[p];
                }
            }
            return b;
        },

        on: function (el, sType, fn, obj, overrideContext, bCapture) {
            var oEl = null, context = null, wrappedFn = null;
            if (YAO.isString(el)) {
                el = YAO.getEl(el);
            }
            if (!el || !fn || !fn.call) {
                return false;
            }
            bCapture = bCapture || false;
            context = el;
            if (overrideContext) {
                if (overrideContext === true) {
                    context = obj;
                }
                else {
                    context = overrideContext;
                }
            }
            wrappedFn = function (e) {
                return fn.call(context, YAO.getEvent(e, el), obj);
            };
            if ('unload' != sType) {
                listeners[listeners.length] = [el, sType, fn, wrappedFn, bCapture];
            }
            try {
                if (window.addEventListener) {
                    el.addEventListener(sType, wrappedFn, bCapture);
                }
                else {
                    if (window.attachEvent) {
                        el.attachEvent('on' + sType, wrappedFn);
                    }
                    else {
                        el['on' + sType] = wrappedFn;
                    }
                }
            }
            catch (e) {
                alert('e');
                lastError = e;
                this.removeListener(el, sType, wrappedFn, bCapture);
                return false;
            }
        },
        removeListener: function (el, sType, fn, bCapture) {
            try {
                if (window.removeEventListener) {
                    return function (el, sType, fn, bCapture) {
                        el.removeEventListener(sType, fn, (bCapture));
                    };
                }
                else {
                    if (window.detachEvent) {
                        return function (el, sType, fn) {
                            el.detachEvent("on" + sType, fn);
                        };
                    }
                    else {
                        return function () {
                        };
                    }
                }
            }
            catch (e) {
                lastError = e;
                return false;
            }

            return true;
        },
        isMouseLeaveOrEnter: function (e, handler) {
            if (e.type !== 'mouseout' && e.type !== 'mouseover') {
                return false;
            }
            var reltg = e.relatedTarget ? e.relatedTarget : (e.type === 'mouseout' ? e.toElement : e.fromElement);

            while (reltg && reltg !== handler) {
                reltg = reltg.parentNode;
            }
            return (reltg !== handler);
        },
        stopEvent: function (evt) {
            this.stopPropagation(evt);
            this.preventDefault(evt);
        },
        stopPropagation: function (evt) {
            if (evt.stopPropagation) {
                evt.stopPropagation();
            }
            else {
                evt.cancelBubble = true;
            }
        },
        preventDefault: function (evt) {
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            else {
                evt.returnValue = false;
            }
        },
        getEvent: function (e, boundEl) {
            var ev = e || window.event;

            if (!ev) {
                var c = this.getEvent.caller;
                while (c) {
                    ev = c.arguments[0];
                    if (ev && Event == ev.constructor) {
                        break;
                    }
                    c = c.caller;
                }
            }

            return ev;
        },
        getCharCode: function (ev) {
            var code = ev.keyCode || ev.charCode || 0;

            // webkit key normalization
            if (YAO.ua.webkit && (code in webkitKeymap)) {
                code = webkitKeymap[code];
            }
            return code;
        },
        _unload: function (e) {
            var j, l;
            if (listeners) {
                for (j = listeners.length - 1; j > -1; j--) {
                    l = listeners[j];
                    if (l) {
                        YAO.removeListener(l[0], l[1], l[3], l[4]);
                    }
                }
                l = null;
            }

            YAO.removeListener(window, "unload", YAO._unload);
        },

        getEl: function (elem) {
            var elemID, E, m, i, k, length, len;
            if (elem) {
                if (elem[nt] || elem.item) {
                    return elem;
                }
                if (YAO.isString(elem)) {
                    elemID = elem;
                    elem = D.getElementById(elem);
                    if (elem && elem.id === elemID) {
                        return elem;
                    }
                    else {
                        if (elem && elem.all) {
                            elem = null;
                            E = D.all[elemID];
                            for (i = 0, len = E.length; i < len; i += 1) {
                                if (E[i].id === elemID) {
                                    return E[i];
                                }
                            }
                        }
                    }
                    return elem;
                }
                else {
                    if (elem.DOM_EVENTS) {
                        elem = elem.get("element");
                    }
                    else {
                        if (YAO.isArray(elem)) {
                            m = [];
                            for (k = 0, length = elem.length; k < length; k += 1) {
                                m[m.length] = YAO.getEl(elem[k]);
                            }
                            return m;
                        }
                    }
                }
            }
            return null;
        },
        hasClass: function (elem, className) {
            var has = new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)");
            return has.test(elem.className);
        },
        addClass: function (elem, className) {
            if (YAO.hasClass(elem, className)) {
                return;
            }
            elem.className = [elem.className, className].join(" ");
        },
        removeClass: function (elem, className) {
            var replace = new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)", "g");
            if (!YAO.hasClass(elem, className)) {
                return;
            }
            var o = elem.className;
            elem.className = o.replace(replace, " ");
            if (YAO.hasClass(elem, className)) {
                YAO.removeClass(elem, className);
            }
        },
        replaceClass: function (elem, newClass, oldClass) {
            if (newClass === oldClass) {
                return false;
            }
            var has = new RegExp("(?:^|\\s+)" + newClass + "(?:\\s+|$)", "g");
            if (!YAO.hasClass(elem, newClass)) {
                YAO.addClass(elem, oldClass);
                return;
            }
            elem.className = elem.className.replace(has, " " + oldClass + " ");
            if (YAO.hasClass(elem, newClass)) {
                YAO.replaceClass(elem, newClass, oldClass);
            }
        },
        getElByClassName: function (className, tag, rootId) {
            var elems = [], i, tempCnt = YAO.getEl(rootId).getElementsByTagName(tag), len = tempCnt.length;
            for (i = 0; i < len; ++i) {
                if (YAO.hasClass(tempCnt[i], className)) {
                    elems.push(tempCnt[i]);
                }
            }
            if (elems.length < 1) {
                return false;
            }
            else {
                return elems;
            }
        },
        getStyle: function (el, property) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var value = null;
                if (property == 'float') {
                    property = 'cssFloat';
                }
                var computed = document.defaultView.getComputedStyle(el, '');
                if (computed) {
                    value = computed[YAO.toCamel(property)];
                }
                return el.style[property] || value;
            }
            else {
                if (document.documentElement.currentStyle && YAO.ua.ie) {
                    switch (YAO.toCamel(property)) {
                        case 'opacity':
                            var val = 100;
                            try {
                                val = el.filters['DXImageTransform.Microsoft.Alpha'].opacity;
                            }
                            catch (e) {
                                try {
                                    val = el.filters('alpha').opacity;
                                }
                                catch (e) {
                                }
                            }
                            return val / 100;
                            break;
                        case 'float':
                            property = 'styleFloat';
                        default:
                            var value = el.currentStyle ? el.currentStyle[property] : null;
                            return (el.style[property] || value);
                    }
                }
                else {
                    return el.style[property];
                }
            }
        },
        setStyle: function (el, property, val) {
            if (YAO.ua.ie) {
                switch (property) {
                    case 'opacity':
                        if (YAO.isString(el.style.filter)) {
                            el.style.filter = 'alpha(opacity=' + val * 100 + ')';
                            if (!el.currentStyle || !el.currentStyle.hasLayout) {
                                el.style.zoom = 1;
                            }
                        }
                        break;
                    case 'float':
                        property = 'styleFloat';
                    default:
                        el.style[property] = val;
                }
            }
            else {
                if (property == 'float') {
                    property = 'cssFloat';
                }
                el.style[property] = val;
            }
        },
        setStyles: function (el, propertys) {
            for (var p in propertys) {
                YAO.setStyle(el, p, propertys[p]);
            }
            return el;
        },
        getElementsBy: function (method, tag, root) {
            tag = tag || "*";
            var m = [];
            if (root) {
                root = YAO.getEl(root);
                if (!root) {
                    return m;
                }
            }
            else {
                root = document;
            }
            var oElem = root.getElementsByTagName(tag);
            if (!oElem.length && (tag === "*" && root.all)) {
                oElem = root.all;
            }
            for (var n = 0, j = oElem.length; n < j; ++n) {
                if (method(oElem[n])) {
                    m[m.length] = oElem[n];
                }
            }
            return m;
        },
        getDocumentWidth: function () {
            var k = YAO.getScrollWidth();
            var j = Math.max(k, YAO.getViewportWidth());
            return j;
        },
        getDocumentHeight: function () {
            var k = YAO.getScrollHeight();
            var j = Math.max(k, YAO.getViewportHeight());
            return j;
        },
        getScrollWidth: function () {
            var j = (D.compatMode == "CSS1Compat") ? D.body.scrollWidth : D.Element.scrollWidth;
            return j;
        },
        getScrollHeight: function () {
            var j = (D.compatMode == "CSS1Compat") ? D.body.scrollHeight : D.documentElement.scrollHeight;
            return j;
        },
        getXScroll: function () {
            var j = self.pageXOffset || D.documentElement.scrollLeft || D.body.scrollLeft;
            return j;
        },
        getYScroll: function () {
            var j = self.pageYOffset || D.documentElement.scrollTop || D.body.scrollTop;
            return j;
        },
        getViewportWidth: function () {
            var j = self.innerWidth;
            var k = D.compatMode;
            if (k || YAO.ua.ie) {
                j = (k == "CSS1Compat") ? D.documentElement.clientWidth : D.body.clientWidth;
            }
            return j;
        },
        getViewportHeight: function () {
            var j = self.innerHeight;
            var k = D.compatMode;
            if ((k || YAO.ua.ie) && !YAO.ua.opera) {
                j = (k == "CSS1Compat") ? D.documentElement.clientHeight : D.body.clientHeight;
            }
            return j;
        },
        removeChildren: function (j) {
            if (!(prent = YAO.getEl(j))) {
                return false;
            }
            while (j.firstChild) {
                j.firstChild.parentNode.removeChild(j.firstChild);
            }
            return j;
        },
        prependChild: function (k, j) {
            if (!(k = YAO.getEl(k)) || !(j = YAO.getEl(j))) {
                return false;
            }
            if (k.firstChild) {
                k.insertBefore(j, k.firstChild);
            }
            else {
                k.appendChild(j);
            }
            return k;
        },
        insertBefore: function (Y, G) {
            Y = YAO.getEl(Y);
            G = YAO.getEl(G);
            if (!Y || !G || !G.parentNode) {
                return null;
            }
            return G.parentNode.insertBefore(Y, G);
        },
        insertAfter: function (l, j) {
            var k = null;
            l = YAO.getEl(l);
            j = YAO.getEl(j);
            k = j.parentNode;
            if (!l || !j || !k) {
                return false;
            }
            if (j.nextSibling) {
                return k.insertBefore(l, j.nextSibling);
            }
            else {
                return k.appendChild(l);
            }
        },
        setOpacity: function (el, val) {
            YAO.setStyle(el, 'opacity', val);
        },
        Builder: {
            nidx: 0,
            NODEMAP: {
                AREA: 'map',
                CAPTION: 'table',
                COL: 'table',
                COLGROUP: 'table',
                LEGEND: 'fieldset',
                OPTGROUP: 'select',
                OPTION: 'select',
                PARAM: 'object',
                TBODY: 'table',
                TD: 'table',
                TFOOT: 'table',
                TH: 'table',
                THEAD: 'table',
                TR: 'table'
            },
            ATTR_MAP: {
                'className': 'class',
                'htmlFor': 'for',
                'readOnly': 'readonly',
                'maxLength': 'maxlength',
                'cellSpacing': 'cellspacing'
            },
            EMPTY_TAG: /^(?:BR|FRAME|HR|IMG|INPUT|LINK|META|RANGE|SPACER|WBR|AREA|PARAM|COL)$/i,
            // 追加Link节点（添加CSS样式表）
            linkNode: function (url, cssId, charset) {
                var c = charset || 'utf-8', link = null;
                var head = D.getElementsByTagName('head')[0];
                link = this.Node('link', {
                    'id': cssId || ('link-' + (YAO.Builder.nidx++)),
                    'type': 'text/css',
                    'charset': c,
                    'rel': 'stylesheet',
                    'href': url
                });
                head.appendChild(link);
                return link;
            },
            // 追加Script节点
            scriptNode: function (url, scriptId, win, charset) {
                var d = win || document.body;
                var c = charset || 'utf-8';
                return d.appendChild(this.Node('script', {
                    'id': scriptId || ('script-' + (YAO.Builder.nidx++)),
                    'type': 'text/javascript',
                    'charset': c,
                    'src': url
                }));
            },
            // 创建元素节点
            Node: function (tag, attr, children) {
                tag = tag.toUpperCase();
                // try innerHTML approach
                var parentTag = YAO.Builder.NODEMAP[tag] || 'div';
                var parentElement = D.createElement(parentTag);
                var elem = null;
                try { // prevent IE "feature": http://dev.rubyonrails.org/ticket/2707
                    if (this.EMPTY_TAG.test(tag)) {
                        //alert(tag);
                    }
                    else {
                        parentElement.innerHTML = "<" + tag + "></" + tag + ">";
                    }
                }
                catch (e) {
                }
                elem = parentElement.firstChild;

                // see if browser added wrapping tags
                if (elem && (elem.tagName.toUpperCase() != tag)) {
                    elem = elem.getElementsByTagName(tag)[0];
                }
                // fallback to createElement approach
                if (!elem) {
                    if (YAO.isString(tag)) {
                        elem = D.createElement(tag);
                    }
                }
                // abort if nothing could be created
                if (!elem) {
                    return;
                }
                else {
                    if (attr) {
                        this.Attributes(elem, attr);
                    }
                    if (children) {
                        this.Child(elem, children);
                    }
                    return elem;
                }
            },
            // 给节点添加属性
            Attributes: function (elem, attr) {
                var attrName = '', i;
                for (i in attr) {
                    if (attr[i] && YAO.hasOwnProperty(attr, i)) {
                        attrName = i in YAO.Builder.ATTR_MAP ? YAO.Builder.ATTR_MAP[i] : i;
                        if (attrName === 'class') {
                            elem.className = attr[i];
                        }
                        else {
                            elem.setAttribute(attrName, attr[i]);
                        }
                    }
                }
                return elem;
            },
            // 追加子节点
            Child: function (parent, child) {
                if (child.tagName) {
                    parent.appendChild(child);
                    return false;
                }
                if (YAO.isArray(child)) {
                    var i, length = child.length;
                    for (i = 0; i < length; i += 1) {
                        if (child[i].tagName) {
                            parent.appendChild(child[i]);
                        }
                        else {
                            if (YAO.isString(child[i])) {
                                parent.appendChild(D.createTextNode(child[i]));
                            }
                        }
                    }
                }
                else {
                    if (YAO.isString(child)) {
                        parent.appendChild(D.createTextNode(child));
                    }
                }
            }
        },
        isAncestor: function (Y, x) {
            Y = YAO.getEl(Y);
            x = YAO.getEl(x);
            var G = false;
            if ((Y && x) && (Y[nt] && x[nt])) {
                if (Y.contains && Y !== x) {
                    G = Y.contains(x);
                }
                else {
                    if (Y.compareDocumentPosition) {
                        G = !!(Y.compareDocumentPosition(x) & 16);
                    }
                }
            }
            else {
                return false;
            }
            return G;
        },
        batch: function (el, method, o, override) {
            var id = el;
            el = YAO.getEl(el);
            var scope = (override) ? o : window;
            if (!el || el.tagName || !el.length) {
                if (!el) {
                    return false;
                }
                return method.call(scope, el, o);
            }
            var collection = [];
            for (var i = 0, len = el.length; i < len; ++i) {
                if (!el[i]) {
                    id = el[i];
                }
                collection[collection.length] = method.call(scope, el[i], o);
            }
            return collection;
        },

        fadeUp: function (elem) {
            if (elem) {
                var level = 0, fade = function () {
                    var timer = null;
                    level += 0.05;
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    if (level > 1) {
                        YAO.setOpacity(elem, 1);
                        return false;
                    }
                    else {
                        YAO.setOpacity(elem, level);
                    }
                    timer = setTimeout(fade, 50);
                };
                fade();
            }
        },
        zebra: function () {
            var j, length = arguments.length;
            for (j = 0; j < length; ++j) {
                (function (config) {
                    var root = YAO.getEl(config.rootTag) || (config.root || null), rows = root.getElementsByTagName(config.rowTag) || (config.rows || null), i, len = rows.length, lastClass = [];
                    if (root && rows && len > 1) {
                        for (var i = 0; i < len; ++i) {
                            rows[i].className = i % 2 === 0 ? 'even' : 'odd';
                            lastClass[i] = rows[i].className;
                            YAO.on(rows[i], 'mouseover', function (index) {
                                return function () {
                                    YAO.replaceClass(this, lastClass[index], 'hover');
                                }
                            }(i), rows[i], true);
                            YAO.on(rows[i], 'mouseout', function (index) {
                                return function () {
                                    YAO.replaceClass(this, 'hover', lastClass[index]);
                                }
                            }(i), rows[i], true);
                        }
                    }
                    else {
                        return false;
                    }
                })(arguments[j]);
            }
        },
        moveElement: function (element, finalX, finalY, speed) {
            var elem = YAO.isString(element) ? YAO.getEl(element) : element, style = null;
            if (elem) {
                if (elem.movement) {
                    clearTimeout(elem.movement);
                }
                if (!YAO.getStyle(elem, 'left')) {
                    YAO.setStyle(elem, 'left', 0);
                }
                if (!YAO.getStyle(elem, 'top')) {
                    YAO.setStyle(elem, 'top', 0);
                }
                var xpos = parseInt(YAO.getStyle(elem, 'left'), 10);
                var ypos = parseInt(YAO.getStyle(elem, 'top'), 10);
                if (xpos === finalX && ypos === finalY) {
                    return true;
                }
                if (xpos < finalX) {
                    var dist = Math.ceil((finalX - xpos) / 10);
                    xpos = xpos + dist;
                }
                if (xpos > finalX) {
                    var dist = Math.ceil((xpos - finalX) / 10);
                    xpos = xpos - dist;
                }
                if (ypos < finalY) {
                    var dist = Math.ceil((finalY - ypos) / 10);
                    ypos = ypos + dist;
                }
                if (ypos > finalY) {
                    var dist = Math.ceil((ypos - finalY) / 10);
                    ypos = ypos - dist;
                }
                YAO.setStyle(elem, 'left', (xpos + 'px'));
                YAO.setStyle(elem, 'top', (ypos + 'px'));
                elem.movement = setTimeout(function () {
                    YAO.moveElement(element, finalX, finalY, speed);
                }, speed);
            }
        },

        ajax: function (config) {
            var oXhr, method = config.method ? config.method.toUpperCase() : 'GET', url = config.url || '', fn = config.fn || null, postData = config.data || null, elem = config.id ? YAO.getEl(config.id) : (config.element || null), load = config.loadFn ? config.loadFn : (config.loading || '正在获取数据，请稍后...');
            if (!url) {
                return;
            }
            if (window.XMLHttpRequest) {
                oXhr = new XMLHttpRequest();
            }
            else {
                if (window.ActiveXObject) {
                    oXhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
            }
            if (oXhr) {
                try {
                    oXhr.open(method, url, true);
                    oXhr.onreadystatechange = function () {
                        if (oXhr.readyState !== 4) {
                            return false
                        }
                        if (oXhr.readyState == 4) {
                            if (oXhr.status == 200 || location.href.indexOf('http') === -1) {
                                if (fn) {
                                    fn.success(oXhr);
                                }
                                else {
                                    if (YAO.isFunction(load)) {
                                        load(oXhr);
                                    }
                                    else {
                                        elem.innerHTML = oXhr.responseText;
                                    }
                                }
                            }
                            else {
                                elem.innerHTML = load;
                            }
                        }
                    };
                    oXhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    if (postData) {
                        oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                    }
                    oXhr.send(postData);
                }
                catch (e) {
                    throw new Error(e);
                    return false;
                }
            }
            else {
                throw new Error("Your browser does not support XMLHTTP.");
                return false;
            }
        },
        JSON: function () {
            function f(n) {
                return n < 10 ? '0' + n : n;
            }

            Date.prototype.toJSON = function () {
                return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z';
            };

            var m = {
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            };

            function stringify(value, whitelist) {
                var a, i, k, l, r = /["\\\x00-\x1f\x7f-\x9f]/g, v;
                switch (typeof value) {
                    case 'string':
                        return r.test(value) ? '"' +
                            value.replace(r, function (a) {
                                var c = m[a];
                                if (c) {
                                    return c;
                                }
                                c = a.charCodeAt();
                                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                            }) +
                            '"' : '"' + value + '"';
                    case 'number':
                        return isFinite(value) ? String(value) : 'null';
                    case 'boolean':
                    case 'null':
                        return String(value);
                    case 'object':
                        if (!value) {
                            return 'null';
                        }

                        if (typeof value.toJSON === 'function') {
                            return stringify(value.toJSON());
                        }
                        a = [];
                        if (typeof value.length === 'number' && !(value.propertyIsEnumerable('length'))) {

                            l = value.length;
                            for (i = 0; i < l; i += 1) {
                                a.push(stringify(value[i], whitelist) || 'null');
                            }

                            return '[' + a.join(',') + ']';
                        }
                        if (whitelist) {
                            l = whitelist.length;
                            for (i = 0; i < l; i += 1) {
                                k = whitelist[i];
                                if (typeof k === 'string') {
                                    v = stringify(value[k], whitelist);
                                    if (v) {
                                        a.push(stringify(k) + ':' + v);
                                    }
                                }
                            }
                        }
                        else {
                            for (k in value) {
                                if (typeof k === 'string') {
                                    v = stringify(value[k], whitelist);
                                    if (v) {
                                        a.push(stringify(k) + ':' + v);
                                    }
                                }
                            }
                        }
                        return '{' + a.join(',') + '}';
                }
            }

            return {
                stringify: stringify,
                parse: function (text, filter) {
                    var j;

                    function walk(k, v) {
                        var i, n;
                        if (v && typeof v === 'object') {
                            for (i in v) {
                                if (OP.hasOwnProperty.apply(v, [i])) {
                                    n = walk(i, v[i]);
                                    if (n !== undefined) {
                                        v[i] = n;
                                    }
                                    else {
                                        delete v[i];
                                    }
                                }
                            }
                        }
                        return filter(k, v);
                    }

                    if (/^[\],:{}\s]*$/.test(text.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                        j = eval('(' + text + ')');

                        return typeof filter === 'function' ? walk('', j) : j;
                    }

                    throw new SyntaxError('parseJSON');
                }
            };
        }()
    };

    YAO.on(window, "unload", YAO._unload);
}();

YAO.Carousel = function (oConfig) {
    this.carouselCnt = YAO.isString(oConfig.carouselCnt) ? YAO.getEl(oConfig.carouselCnt) : (oConfig.carouselCnt || null);
    this.carousel = YAO.isString(oConfig.carousel) ? YAO.getEl(oConfig.carousel) : (oConfig.carousel || null);

    if (!this.carouselCnt || !this.carousel) {
        return false;
    }

    this.items = YAO.isString(oConfig.items) ? this.carousel.getElementsByTagName(oConfig.items) : (oConfig.items || null);
    this.btnPrevious = YAO.isString(oConfig.btnPrevious) ? YAO.getEl(oConfig.btnPrevious) : (oConfig.btnPrevious || null);
    this.btnNext = YAO.isString(oConfig.btnNext) ? YAO.getEl(oConfig.btnNext) : (oConfig.btnNext || null);

    this.lnkBtnPrevious = this.btnPrevious ? this.btnPrevious.getElementsByTagName('a')[0] : null;
    this.lnkBtnNext = this.btnNext ? this.btnNext.getElementsByTagName('a')[0] : null;
    this.derection = oConfig.derection || 'H';

    if (oConfig.speed) {
        this.speed = oConfig.speed
    }

    this.length = this.items.length;
    this.itemWidth = this.items[0].offsetWidth;
    this.itemHeight = this.items[0].offsetHeight;
    this.width = this.itemWidth * this.length;
    this.height = this.itemHeight * this.length;
    this.stepWidth = oConfig.stepWidth || this.itemWidth;
    this.stepHeight = oConfig.stepHeight || this.itemHeight;
    this.oneScreenWidth = this.carouselCnt.offsetWidth;
    this.oneScreenHeight = this.carouselCnt.offsetHeight;

    if (this.derection === 'H') {
        this.onScreenItemsNum = this.oneScreenWidth / this.itemWidth;
        this.groups = Math.ceil(this.width / this.stepWidth);
        this.oneScreenGroups = this.oneScreenWidth / this.stepWidth;
        this.maxMovedGroups = this.groups - this.oneScreenGroups;
    }
    else {
        this.onScreenItemsNum = this.oneScreenHeight / this.itemHeight;
        this.groups = Math.ceil(this.height / this.stepHeight);
        this.oneScreenGroups = this.oneScreenHeight / this.stepHeight;
        this.maxMovedGroups = this.groups - this.oneScreenGroups;
    }
};
YAO.Carousel.prototype.speed = 50;
YAO.Carousel.prototype.movedGroups = 0;
YAO.Carousel.prototype.LNK_BTNS_DISABLED_CLASS = 'dis';
YAO.Carousel.prototype.init = function () {
    this.initComponent();
    this.btnsEnabled();
    this.initEvents();
};
YAO.Carousel.prototype.initComponent = function () {
    if (this.derection === 'H') {
        YAO.setStyle(this.carousel, 'width', (this.width + 'px'));
    }
    else {
        YAO.setStyle(this.carousel, 'height', (this.height + 'px'));
    }
    YAO.setStyle(this.carouselCnt, 'overflow', 'hidden');
};
YAO.Carousel.prototype.btnsEnabled = function () {
    if (this.lnkBtnNext && this.movedGroups === this.maxMovedGroups) {
        YAO.addClass(this.lnkBtnNext, this.LNK_BTNS_DISABLED_CLASS);
    }
    if (this.lnkBtnPrevious && this.movedGroups === 0) {
        YAO.addClass(this.lnkBtnPrevious, this.LNK_BTNS_DISABLED_CLASS);
    }
};
YAO.Carousel.prototype.initEvents = function () {
    YAO.on(this.btnPrevious, 'click', this.previous, this.btnPrevious, this);
    YAO.on(this.btnNext, 'click', this.next, this.btnNext, this);
};
YAO.Carousel.prototype.getItem = function (index) {
    if (index < 0 || index >= this.length) {
        return null;
    }
    else {
        if (this.length > index) {
            if (!YAO.isUndefined(this.itmes[index])) {
                return this.items[index];
            }
        }
        else {
            return null;
        }
    }
};
YAO.Carousel.prototype.getItemIndexById = function (id) {
    var i = 0, len = this.length;

    for (; i < len; ++i) {
        if (!YAO.isUndefined(this.items[i])) {
            if (this.items[i].id === id) {
                return i;
            }
        }
    }

    return -1;
};
YAO.Carousel.prototype.getVisibleItems = function () {
    var i = this.movedGroups, len = i + this.onScreenItemsNum, items = [];

    for (; i < len; ++i) {
        items.push(this.items[i]);
    }

    return items;
};
YAO.Carousel.prototype.addItem = function (item, index) {
    if (index < 0 || index >= this.length) {
        return false;
    }
    else {
        this.length += 1;
        if (!index && index !== 0) {
            this.carousel.appendChild(item);
        }
        else {
            if (this.length > index) {
                if (index === 0) {
                    YAO.insertBefore(item, this.items[index]);
                }
                else {
                    YAO.insertAfter(item, this.items[index]);
                }
            }
        }
        if (this.derection === 'H') {
            YAO.setStyle(this.carousel, 'width', (this.width + this.itemWidth) + 'px');
        }
        else {
            YAO.setStyle(this.carousel, 'width', (this.height + this.itemHeight) + 'px');
        }
        return true;
    }
};
YAO.Carousel.prototype.removeItem = function (index) {
    var item = null;

    if (index < 0 || index >= this.length) {
        return false;
    }

    item = this.items.splice(index, 1);
    if (item && item.length === 1) {
        this.length -= 1;

        if (item[0]) {
            if (item[0] && YAO.isAncestor(this.carousel, item[0])) {
                Event.purgeElement(item[0], true);
                this.carousel.removeChild(item[0]);
            }
            return index;
        }
        else {
            return false;
        }
    }
};
YAO.Carousel.prototype.previous = function (event) {
    var evt = event || window.event;
    if (this.movedGroups > 0) {
        this.movedGroups -= 1;
        if (this.lnkBtnNext && YAO.hasClass(this.lnkBtnNext, this.LNK_BTNS_DISABLED_CLASS)) {
            YAO.removeClass(this.lnkBtnNext, this.LNK_BTNS_DISABLED_CLASS);
        }
        if (this.movedGroups <= 0) {
            this.movedGroups = 0;
            if (this.lnkBtnPrevious) {
                YAO.addClass(this.lnkBtnPrevious, this.LNK_BTNS_DISABLED_CLASS);
            }
        }
        this.scroll(this.movedGroups);
    }
    YAO.stopEvent(evt);
};
YAO.Carousel.prototype.next = function (event) {
    var evt = event || window.event;
    if (this.movedGroups < this.maxMovedGroups) {
        this.movedGroups += 1;
        if (this.lnkBtnPrevious && YAO.hasClass(this.lnkBtnPrevious, this.LNK_BTNS_DISABLED_CLASS)) {
            YAO.removeClass(this.lnkBtnPrevious, this.LNK_BTNS_DISABLED_CLASS);
        }
        if (this.movedGroups >= this.maxMovedGroups) {
            this.movedGroups = this.maxMovedGroups;
            if (this.lnkBtnNext) {
                YAO.addClass(this.lnkBtnNext, this.LNK_BTNS_DISABLED_CLASS);
            }
        }
        this.scroll(this.movedGroups);
    }
    YAO.stopEvent(evt);
};
YAO.Carousel.prototype.scroll = function () {
    var scrollWidth = 0, scrollHeight = 0;
    if (this.derection === 'H') {
        scrollWidth = -(this.stepWidth * this.movedGroups);
    }
    else {
        scrollHeight = -(this.stepHeight * steps);
    }
    YAO.moveElement(this.carousel, scrollWidth, scrollHeight, this.speed);
};

YAO.newsCarousel = function (oConfig) {
    this.root = oConfig.root;
    this.ajaxable = oConfig.ajaxable || false;
    this.ajaxItemNum = oConfig.ajaxItemNum || 0;
    // 继承时调用基类的构造函数，从而初始化设置
    YAO.newsCarousel.superclass.constructor.call(this, oConfig);
};
YAO.extend(YAO.newsCarousel, YAO.Carousel, {
    lastIndex: 0,
    toolBar: null,
    countable: true,
    curCount: null,
    talCount: null,
    ajaxable: false,
    ajaxItemNum: 0,
    speed: 10,
    initComponent: function () {
        var D = document, itemDf = D.createDocumentFragment(), ftDf = D.createDocumentFragment(), i, carouselWidth = 0, carouselHeight = 0;
        if (this.ajaxable && this.ajaxItemNum) {
            for (i = 0; i < this.ajaxItemNum; ++i) {
                // 也可以用自带的addItem方法，但是循环添加多次比起先添加到碎片中效率低
                // 使用addItem方法例子：this.addItem(YAO.Builder.Node('li'));
                itemDf.appendChild(YAO.Builder.Node('li'));
            }
            this.carousel.appendChild(itemDf);
            this.items = this.carousel.getElementsByTagName(this.items[0].tagName);
            this.length = this.items.length;
            if (this.derection === 'H') {
                carouselWidth = this.itemWidth * this.length;
                YAO.setStyle(this.carousel, 'width', carouselWidth + 'px');
            }
            else {
                carouselHeight = this.itemHeight * this.length;
                YAO.setStyle(this.carousel, 'width', carouselHeight + 'px');
            }
        }
        ftDf.appendChild(YAO.Builder.Node('div', {
            id: 'yt-ft'
        }, YAO.Builder.Node('span', {
            id: 'yt-btns'
        }, [YAO.Builder.Node('a', {
            id: 'yt-lnk-previous',
            title: '上一条',
            href: '#previous'
        }, '上一条'), YAO.Builder.Node('a', {
            id: 'yt-lnk-next',
            title: '下一条',
            href: '#next'
        })])));
        this.root.appendChild(ftDf);
        this.toolBar = YAO.getEl('yt-ft');
        this.btnPrevious = YAO.getEl('yt-lnk-previous');
        this.btnNext = YAO.getEl('yt-lnk-next');
    },
    initTools: function () {
        var D = document, oDf = D.createDocumentFragment(), oSelf = this;
        if (this.countable) {
            oDf.appendChild(YAO.Builder.Node('span', {
                id: 'yt-count'
            }, [YAO.Builder.Node('em', {
                id: 'yt-cur-count'
            }, (oSelf.lastIndex + 1) + ''), '/', YAO.Builder.Node('em', {
                id: 'yt-tal-count'
            }, oSelf.length + '')]));
            this.toolBar.appendChild(oDf);
            this.curCount = YAO.getEl('yt-cur-count');
            this.talCount = YAO.getEl('yt-tal-count');
        }
    },
    initEvents: function () {
        YAO.on(this.btnPrevious, 'click', this.previous, this.btnPrevious, this);
        YAO.on(this.btnNext, 'click', this.next, this.btnNext, this);
    },
    init: function (oConfig) {
        this.initComponent(oConfig);
        this.initTools();
        this.initEvents();
    },
    previous: function (event) {
        var evt = event || window.event;
        this.lastIndex -= 1;
        if (this.lastIndex < 0) {
            this.lastIndex = (this.length - 1);
            if (this.lastIndex === (this.length - 1)) {
                this.speed = this.speed / this.length;
            }
        }
        this.scroll();
        YAO.stopEvent(evt);
    },
    next: function (event) {
        var evt = event || window.event;
        this.lastIndex += 1;
        if (this.lastIndex > (this.length - 1)) {
            this.lastIndex = 0;
            if (this.lastIndex === 0) {
                this.speed = this.speed / this.length;
            }
        }
        this.scroll();
        YAO.stopEvent(evt);
    },
    count: function () {
        if (this.countable) {
            this.curCount.innerHTML = (this.lastIndex + 1);
        }
    },
    scroll: function () {
        var scrollWidth = 0, scrollHeight = 0, carousel = this, elem = null;
        this.count();
        if (this.derection === 'H') {
            scrollWidth = -(this.stepWidth * this.lastIndex);
        }
        else {
            scrollHeight = -(this.stepHeight * this.lastIndex);
        }
        if (this.ajaxable) {
            elem = this.items[this.lastIndex];
            if (!YAO.trim(elem.innerHTML)) {
                YAO.addClass(elem, 'yt-loading');
                YAO.ajax({
                    method: 'get',
                    url: 'samples/json/' + carousel.lastIndex + '.js',
                    loadFn: function (json) {
                        YAO.removeClass(elem, 'yt-loading');
                        var data = YAO.JSON.parse(json.responseText);
                        elem.innerHTML = data.html;
                    },
                    element: elem
                });
            }
        }
        YAO.moveElement(this.carousel, scrollWidth, scrollHeight, this.speed);
    }
});