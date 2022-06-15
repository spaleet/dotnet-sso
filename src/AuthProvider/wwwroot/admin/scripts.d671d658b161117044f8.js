var Reflect;
!function(t) {
    !function(n) {
        var r = "object" == typeof global
                ? global
                : "object" == typeof self
                ? self
                : "object" == typeof this
                ? this
                : Function("return this;")(),
            e = i(t);

        function i(t, n) {
            return function(r, e) {
                "function" != typeof t[r] && Object.defineProperty(t, r, { configurable: !0, writable: !0, value: e }),
                    n && n(r, e)
            }
        }

        void 0 === r.Reflect ? r.Reflect = t : e = i(r.Reflect, e), function(t) {
            var n = Object.prototype.hasOwnProperty,
                r = "function" == typeof Symbol,
                e = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                i = r && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                u = "function" == typeof Object.create,
                o = { __proto__: [] } instanceof Array,
                a = !u && !o,
                c = {
                    create: u
                        ? function() { return F(Object.create(null)) }
                        : o
                        ? function() { return F({ __proto__: null }) }
                        : function() { return F({}) },
                    has: a ? function(t, r) { return n.call(t, r) } : function(t, n) { return n in t },
                    get: a ? function(t, r) { return n.call(t, r) ? t[r] : void 0 } : function(t, n) { return t[n] }
                },
                f = Object.getPrototypeOf(Function),
                l = "object" == typeof process &&
                    process.env &&
                    "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL,
                s = l || "function" != typeof Map || "function" != typeof Map.prototype.entries
                    ? function() {
                        var t = {},
                            n = [],
                            r = function() {
                                function t(t, n, r) {
                                    this._index = 0, this._keys = t, this._values = n, this._selector = r
                                }

                                return t.prototype["@@iterator"] = function() { return this }, t.prototype[i] =
                                    function() { return this }, t.prototype.next = function() {
                                    var t = this._index;
                                    if (t >= 0 && t < this._keys.length) {
                                        var r = this._selector(this._keys[t], this._values[t]);
                                        return t + 1 >= this._keys.length
                                            ? (this._index = -1, this._keys = n, this._values = n)
                                            : this._index++, { value: r, done: !1 }
                                    }
                                    return{ value: void 0, done: !0 }
                                }, t.prototype.throw =
                                    function(t) {
                                        throw this._index >= 0 &&
                                            (this._index = -1, this._keys = n, this._values = n), t
                                    }, t.prototype.return = function(t) {
                                    return this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), {
                                        value: t,
                                        done: !0
                                    }
                                }, t
                            }();
                        return function() {
                            function n() {
                                this._keys = [], this._values = [], this._cacheKey = t, this._cacheIndex = -2
                            }

                            return Object.defineProperty(n.prototype,
                                    "size",
                                    { get: function() { return this._keys.length }, enumerable: !0, configurable: !0 }),
                                n.prototype.has = function(t) { return this._find(t, !1) >= 0 }, n.prototype.get =
                                    function(t) {
                                        var n = this._find(t, !1);
                                        return n >= 0 ? this._values[n] : void 0
                                    }, n.prototype.set = function(t, n) {
                                    var r = this._find(t, !0);
                                    return this._values[r] = n, this
                                }, n.prototype.delete = function(n) {
                                    var r = this._find(n, !1);
                                    if (r >= 0) {
                                        for (var e = this._keys.length, i = r + 1; i < e; i++)
                                            this._keys[i - 1] = this._keys[i], this._values[i - 1] = this._values[i];
                                        return this._keys.length--, this._values.length--, n === this._cacheKey &&
                                            (this._cacheKey = t, this._cacheIndex = -2), !0
                                    }
                                    return!1
                                }, n.prototype.clear =
                                    function() {
                                        this._keys.length = 0, this._values.length = 0, this._cacheKey =
                                            t, this._cacheIndex =
                                            -2
                                    }, n.prototype.keys =
                                    function() { return new r(this._keys, this._values, e) }, n.prototype.values =
                                    function() { return new r(this._keys, this._values, u) }, n.prototype.entries =
                                    function() { return new r(this._keys, this._values, o) }, n.prototype[
                                        "@@iterator"] =
                                    function() { return this.entries() }, n.prototype[i] =
                                    function() { return this.entries() }, n.prototype._find = function(t, n) {
                                    return this._cacheKey !== t &&
                                            (this._cacheIndex = this._keys.indexOf(this._cacheKey = t)),
                                        this._cacheIndex < 0 &&
                                            n &&
                                            (this._cacheIndex =
                                                this._keys.length, this._keys.push(t), this._values.push(void 0)), this
                                            ._cacheIndex
                                }, n
                        }();

                        function e(t, n) { return t }

                        function u(t, n) { return n }

                        function o(t, n) { return[t, n] }
                    }()
                    : Map,
                p = l || "function" != typeof Set || "function" != typeof Set.prototype.entries
                    ? function() {
                        function t() { this._map = new s }

                        return Object.defineProperty(t.prototype,
                                "size",
                                { get: function() { return this._map.size }, enumerable: !0, configurable: !0 }),
                            t.prototype.has = function(t) { return this._map.has(t) }, t.prototype.add =
                                function(t) { return this._map.set(t, t), this }, t.prototype.delete =
                                function(t) { return this._map.delete(t) }, t.prototype.clear =
                                function() { this._map.clear() }, t.prototype.keys =
                                function() { return this._map.keys() }, t.prototype.values =
                                function() { return this._map.values() }, t.prototype.entries =
                                function() { return this._map.entries() }, t.prototype["@@iterator"] =
                                function() { return this.keys() }, t.prototype[i] = function() { return this.keys() }, t
                    }()
                    : Set,
                h = new(l || "function" != typeof WeakMap
                    ? function() {
                        var t = 16, r = c.create(), e = i();
                        return function() {
                            function t() { this._key = i() }

                            return t.prototype.has = function(t) {
                                var n = u(t, !1);
                                return void 0 !== n && c.has(n, this._key)
                            }, t.prototype.get = function(t) {
                                var n = u(t, !1);
                                return void 0 !== n ? c.get(n, this._key) : void 0
                            }, t.prototype.set =
                                function(t, n) { return u(t, !0)[this._key] = n, this }, t.prototype.delete =
                                function(t) {
                                    var n = u(t, !1);
                                    return void 0 !== n && delete n[this._key]
                                }, t.prototype.clear = function() { this._key = i() }, t
                        }();

                        function i() {
                            var t;
                            do {
                                t = "@@WeakMap@@" + a()
                            } while (c.has(r, t));
                            return r[t] = !0, t
                        }

                        function u(t, r) {
                            if (!n.call(t, e)) {
                                if (!r) return;
                                Object.defineProperty(t, e, { value: c.create() })
                            }
                            return t[e]
                        }

                        function o(t, n) {
                            for (var r = 0; r < n; ++r) t[r] = 255 * Math.random() | 0;
                            return t
                        }

                        function a() {
                            var n,
                                r = (n = t, "function" == typeof Uint8Array
                                    ? "undefined" != typeof crypto
                                    ? crypto.getRandomValues(new Uint8Array(n))
                                    : "undefined" != typeof msCrypto
                                    ? msCrypto.getRandomValues(new Uint8Array(n))
                                    : o(new Uint8Array(n), n)
                                    : o(new Array(n), n));
                            r[6] = 79 & r[6] | 64, r[8] = 191 & r[8] | 128;
                            for (var e = "", i = 0; i < t; ++i) {
                                var u = r[i];
                                4 !== i && 6 !== i && 8 !== i || (e += "-"), u < 16 && (e += "0"), e += u.toString(16)
                                    .toLowerCase()
                            }
                            return e
                        }
                    }()
                    : WeakMap);

            function y(t, n, r) {
                var e = h.get(t);
                if (b(e)) {
                    if (!r) return;
                    e = new s, h.set(t, e)
                }
                var i = e.get(n);
                if (b(i)) {
                    if (!r) return;
                    i = new s, e.set(n, i)
                }
                return i
            }

            function v(t, n, r) {
                var e = y(n, r, !1);
                return!b(e) && !!e.has(t)
            }

            function d(t, n, r) {
                var e = y(n, r, !1);
                if (!b(e)) return e.get(t)
            }

            function g(t, n, r, e) { y(r, e, !0).set(t, n) }

            function _(t, n) {
                var r = [], e = y(t, n, !1);
                if (b(e)) return r;
                for (var u = function(t) {
                        var n = E(t, i);
                        if (!O(n)) throw new TypeError;
                        var r = n.call(t);
                        if (!j(r)) throw new TypeError;
                        return r
                    }(e.keys()),
                    o = 0;;
                ) {
                    var a = S(u);
                    if (!a) return r.length = o, r;
                    var c = a.value;
                    try {
                        r[o] = c
                    } catch (f) {
                        try {
                            T(u)
                        } finally {
                            throw f
                        }
                    }
                    o++
                }
            }

            function m(t) {
                if (null === t) return 1;
                switch (typeof t) {
                case"undefined":
                    return 0;
                case"boolean":
                    return 2;
                case"string":
                    return 3;
                case"symbol":
                    return 4;
                case"number":
                    return 5;
                case"object":
                    return null === t ? 1 : 6;
                default:
                    return 6
                }
            }

            function b(t) { return void 0 === t }

            function w(t) { return null === t }

            function j(t) { return"object" == typeof t ? null !== t : "function" == typeof t }

            function k(t) {
                var n = function(t, n) {
                    switch (m(t)) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        return t
                    }
                    var r = E(t, e);
                    if (void 0 !== r) {
                        var i = r.call(t, "string");
                        if (j(i)) throw new TypeError;
                        return i
                    }
                    return function(t, n) {
                        var r, e, i = t.toString;
                        if (O(i) && !j(e = i.call(t))) return e;
                        if (O(r = t.valueOf) && !j(e = r.call(t))) return e;
                        throw new TypeError
                    }(t)
                }(t);
                return"symbol" == typeof n ? n : "" + n
            }

            function x(t) {
                return Array.isArray
                    ? Array.isArray(t)
                    : t instanceof Object
                    ? t instanceof Array
                    : "[object Array]" === Object.prototype.toString.call(t)
            }

            function O(t) { return"function" == typeof t }

            function A(t) { return"function" == typeof t }

            function E(t, n) {
                var r = t[n];
                if (null != r) {
                    if (!O(r)) throw new TypeError;
                    return r
                }
            }

            function S(t) {
                var n = t.next();
                return!n.done && n
            }

            function T(t) {
                var n = t.return;
                n && n.call(t)
            }

            function M(t) {
                var n = Object.getPrototypeOf(t);
                if ("function" != typeof t || t === f) return n;
                if (n !== f) return n;
                var r = t.prototype, e = r && Object.getPrototypeOf(r);
                if (null == e || e === Object.prototype) return n;
                var i = e.constructor;
                return"function" != typeof i ? n : i === t ? n : i
            }

            function F(t) { return t.__ = void 0, delete t.__, t }

            t("decorate",
                function(t, n, r, e) {
                    if (b(r)) {
                        if (!x(t)) throw new TypeError;
                        if (!A(n)) throw new TypeError;
                        return function(t, n) {
                            for (var r = t.length - 1; r >= 0; --r) {
                                var e = (0, t[r])(n);
                                if (!b(e) && !w(e)) {
                                    if (!A(e)) throw new TypeError;
                                    n = e
                                }
                            }
                            return n
                        }(t, n)
                    }
                    if (!x(t)) throw new TypeError;
                    if (!j(n)) throw new TypeError;
                    if (!j(e) && !b(e) && !w(e)) throw new TypeError;
                    return w(e) && (e = void 0), function(t, n, r, e) {
                        for (var i = t.length - 1; i >= 0; --i) {
                            var u = (0, t[i])(n, r, e);
                            if (!b(u) && !w(u)) {
                                if (!j(u)) throw new TypeError;
                                e = u
                            }
                        }
                        return e
                    }(t, n, r = k(r), e)
                }), t("metadata",
                function(t, n) {
                    return function(r, e) {
                        if (!j(r)) throw new TypeError;
                        if (!b(e) &&
                            !function(t) {
                                switch (m(e)) {
                                case 3:
                                case 4:
                                    return!0;
                                default:
                                    return!1
                                }
                            }()) throw new TypeError;
                        g(t, n, r, e)
                    }
                }), t("defineMetadata",
                function(t, n, r, e) {
                    if (!j(r)) throw new TypeError;
                    return b(e) || (e = k(e)), g(t, n, r, e)
                }), t("hasMetadata",
                function(t, n, r) {
                    if (!j(n)) throw new TypeError;
                    return b(r) || (r = k(r)), function t(n, r, e) {
                        if (v(n, r, e)) return!0;
                        var i = M(r);
                        return!w(i) && t(n, i, e)
                    }(t, n, r)
                }), t("hasOwnMetadata",
                function(t, n, r) {
                    if (!j(n)) throw new TypeError;
                    return b(r) || (r = k(r)), v(t, n, r)
                }), t("getMetadata",
                function(t, n, r) {
                    if (!j(n)) throw new TypeError;
                    return b(r) || (r = k(r)), function t(n, r, e) {
                        if (v(n, r, e)) return d(n, r, e);
                        var i = M(r);
                        return w(i) ? void 0 : t(n, i, e)
                    }(t, n, r)
                }), t("getOwnMetadata",
                function(t, n, r) {
                    if (!j(n)) throw new TypeError;
                    return b(r) || (r = k(r)), d(t, n, r)
                }), t("getMetadataKeys",
                function(t, n) {
                    if (!j(t)) throw new TypeError;
                    return b(n) || (n = k(n)), function t(n, r) {
                        var e = _(n, r), i = M(n);
                        if (null === i) return e;
                        var u = t(i, r);
                        if (u.length <= 0) return e;
                        if (e.length <= 0) return u;
                        for (var o = new p, a = [], c = 0, f = e; c < f.length; c++)
                            o.has(h = f[c]) || (o.add(h), a.push(h));
                        for (var l = 0, s = u; l < s.length; l++) {
                            var h;
                            o.has(h = s[l]) || (o.add(h), a.push(h))
                        }
                        return a
                    }(t, n)
                }), t("getOwnMetadataKeys",
                function(t, n) {
                    if (!j(t)) throw new TypeError;
                    return b(n) || (n = k(n)), _(t, n)
                }), t("deleteMetadata",
                function(t, n, r) {
                    if (!j(n)) throw new TypeError;
                    b(r) || (r = k(r));
                    var e = y(n, r, !1);
                    if (b(e)) return!1;
                    if (!e.delete(t)) return!1;
                    if (e.size > 0) return!0;
                    var i = h.get(n);
                    return i.delete(r), i.size > 0 || (h.delete(n), !0)
                })
        }(e)
    }()
}(Reflect || (Reflect = {})), function() {
    var t = "object" == typeof self && self.self === self && self ||
            "object" == typeof global && global.global === global && global ||
            this ||
            {},
        n = t._,
        r = Array.prototype,
        e = Object.prototype,
        i = "undefined" != typeof Symbol ? Symbol.prototype : null,
        u = r.push,
        o = r.slice,
        a = e.toString,
        c = e.hasOwnProperty,
        f = Array.isArray,
        l = Object.keys,
        s = Object.create,
        p = function() {},
        h = function(t) { return t instanceof h ? t : this instanceof h ? void(this._wrapped = t) : new h(t) };
    "undefined" == typeof exports || exports.nodeType
        ? t._ = h
        : ("undefined" != typeof module &&
            !module.nodeType &&
            module.exports &&
            (exports = module.exports = h), exports._ = h), h.VERSION = "1.9.1";
    var y,
        v = function(t, n, r) {
            if (void 0 === n) return t;
            switch (null == r ? 3 : r) {
            case 1:
                return function(r) { return t.call(n, r) };
            case 3:
                return function(r, e, i) { return t.call(n, r, e, i) };
            case 4:
                return function(r, e, i, u) { return t.call(n, r, e, i, u) }
            }
            return function() { return t.apply(n, arguments) }
        },
        d = function(t, n, r) {
            return h.iteratee !== y
                ? h.iteratee(t, n)
                : null == t
                ? h.identity
                : h.isFunction(t)
                ? v(t, n, r)
                : h.isObject(t) && !h.isArray(t)
                ? h.matcher(t)
                : h.property(t)
        };
    h.iteratee = y = function(t, n) { return d(t, n, 1 / 0) };
    var g = function(t, n) {
            return n = null == n ? t.length - 1 : +n, function() {
                for (var r = Math.max(arguments.length - n, 0), e = Array(r), i = 0; i < r; i++)
                    e[i] = arguments[i + n];
                switch (n) {
                case 0:
                    return t.call(this, e);
                case 1:
                    return t.call(this, arguments[0], e);
                case 2:
                    return t.call(this, arguments[0], arguments[1], e)
                }
                var u = Array(n + 1);
                for (i = 0; i < n; i++) u[i] = arguments[i];
                return u[n] = e, t.apply(this, u)
            }
        },
        _ = function(t) {
            if (!h.isObject(t)) return{};
            if (s) return s(t);
            p.prototype = t;
            var n = new p;
            return p.prototype = null, n
        },
        m = function(t) { return function(n) { return null == n ? void 0 : n[t] } },
        b = function(t, n) { return null != t && c.call(t, n) },
        w = function(t, n) {
            for (var r = n.length, e = 0; e < r; e++) {
                if (null == t) return;
                t = t[n[e]]
            }
            return r ? t : void 0
        },
        j = Math.pow(2, 53) - 1,
        k = m("length"),
        x = function(t) {
            var n = k(t);
            return"number" == typeof n && n >= 0 && n <= j
        };
    h.each = h.forEach = function(t, n, r) {
        var e, i;
        if (n = v(n, r), x(t)) for (e = 0, i = t.length; e < i; e++) n(t[e], e, t);
        else {
            var u = h.keys(t);
            for (e = 0, i = u.length; e < i; e++) n(t[u[e]], u[e], t)
        }
        return t
    }, h.map = h.collect = function(t, n, r) {
        n = d(n, r);
        for (var e = !x(t) && h.keys(t), i = (e || t).length, u = Array(i), o = 0; o < i; o++) {
            var a = e ? e[o] : o;
            u[o] = n(t[a], a, t)
        }
        return u
    };
    var O = function(t) {
        var n = function(n, r, e, i) {
            var u = !x(n) && h.keys(n), o = (u || n).length, a = t > 0 ? 0 : o - 1;
            for (i || (e = n[u ? u[a] : a], a += t); a >= 0 && a < o; a += t) {
                var c = u ? u[a] : a;
                e = r(e, n[c], c, n)
            }
            return e
        };
        return function(t, r, e, i) {
            var u = arguments.length >= 3;
            return n(t, v(r, i, 4), e, u)
        }
    };
    h.reduce = h.foldl = h.inject = O(1), h.reduceRight = h.foldr = O(-1), h.find = h.detect = function(t, n, r) {
        var e = (x(t) ? h.findIndex : h.findKey)(t, n, r);
        if (void 0 !== e && -1 !== e) return t[e]
    }, h.filter = h.select = function(t, n, r) {
        var e = [];
        return n = d(n, r), h.each(t, function(t, r, i) { n(t, r, i) && e.push(t) }), e
    }, h.reject = function(t, n, r) { return h.filter(t, h.negate(d(n)), r) }, h.every = h.all = function(t, n, r) {
        n = d(n, r);
        for (var e = !x(t) && h.keys(t), i = (e || t).length, u = 0; u < i; u++) {
            var o = e ? e[u] : u;
            if (!n(t[o], o, t)) return!1
        }
        return!0
    }, h.some = h.any = function(t, n, r) {
        n = d(n, r);
        for (var e = !x(t) && h.keys(t), i = (e || t).length, u = 0; u < i; u++) {
            var o = e ? e[u] : u;
            if (n(t[o], o, t)) return!0
        }
        return!1
    }, h.contains = h.includes = h.include = function(t, n, r, e) {
        return x(t) || (t = h.values(t)), ("number" != typeof r || e) && (r = 0), h.indexOf(t, n, r) >= 0
    }, h.invoke = g(function(t, n, r) {
        var e, i;
        return h.isFunction(n) ? i = n : h.isArray(n) && (e = n.slice(0, -1), n = n[n.length - 1]), h.map(t,
            function(t) {
                var u = i;
                if (!u) {
                    if (e && e.length && (t = w(t, e)), null == t) return;
                    u = t[n]
                }
                return null == u ? u : u.apply(t, r)
            })
    }), h.pluck = function(t, n) { return h.map(t, h.property(n)) }, h.where =
        function(t, n) { return h.filter(t, h.matcher(n)) }, h.findWhere =
        function(t, n) { return h.find(t, h.matcher(n)) }, h.max = function(t, n, r) {
        var e, i, u = -1 / 0, o = -1 / 0;
        if (null == n || "number" == typeof n && "object" != typeof t[0] && null != t)
            for (var a = 0, c = (t = x(t) ? t : h.values(t)).length; a < c; a++) null != (e = t[a]) && e > u && (u = e);
        else
            n = d(n, r), h.each(t,
                function(t, r, e) { ((i = n(t, r, e)) > o || i === -1 / 0 && u === -1 / 0) && (u = t, o = i) });
        return u
    }, h.min = function(t, n, r) {
        var e, i, u = 1 / 0, o = 1 / 0;
        if (null == n || "number" == typeof n && "object" != typeof t[0] && null != t)
            for (var a = 0, c = (t = x(t) ? t : h.values(t)).length; a < c; a++) null != (e = t[a]) && e < u && (u = e);
        else
            n = d(n, r), h.each(t,
                function(t, r, e) { ((i = n(t, r, e)) < o || i === 1 / 0 && u === 1 / 0) && (u = t, o = i) });
        return u
    }, h.shuffle = function(t) { return h.sample(t, 1 / 0) }, h.sample = function(t, n, r) {
        if (null == n || r) return x(t) || (t = h.values(t)), t[h.random(t.length - 1)];
        var e = x(t) ? h.clone(t) : h.values(t), i = k(e);
        n = Math.max(Math.min(n, i), 0);
        for (var u = i - 1, o = 0; o < n; o++) {
            var a = h.random(o, u), c = e[o];
            e[o] = e[a], e[a] = c
        }
        return e.slice(0, n)
    }, h.sortBy = function(t, n, r) {
        var e = 0;
        return n = d(n, r), h.pluck(h.map(t, function(t, r, i) { return{ value: t, index: e++, criteria: n(t, r, i) } })
            .sort(function(t, n) {
                var r = t.criteria, e = n.criteria;
                if (r !== e) {
                    if (r > e || void 0 === r) return 1;
                    if (r < e || void 0 === e) return-1
                }
                return t.index - n.index
            }),
            "value")
    };
    var A = function(t, n) {
        return function(r, e, i) {
            var u = n ? [[], []] : {};
            return e = d(e, i), h.each(r,
                function(n, i) {
                    var o = e(n, i, r);
                    t(u, n, o)
                }), u
        }
    };
    h.groupBy = A(function(t, n, r) { b(t, r) ? t[r].push(n) : t[r] = [n] }), h.indexBy =
        A(function(t, n, r) { t[r] = n }), h.countBy = A(function(t, n, r) { b(t, r) ? t[r]++ : t[r] = 1 });
    var E = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    h.toArray =
        function(t) {
            return t
                ? h.isArray(t)
                ? o.call(t)
                : h.isString(t)
                ? t.match(E)
                : x(t)
                ? h.map(t, h.identity)
                : h.values(t)
                : []
        }, h.size = function(t) { return null == t ? 0 : x(t) ? t.length : h.keys(t).length }, h.partition =
        A(function(t, n, r) { t[r ? 0 : 1].push(n) }, !0), h.first = h.head = h.take =
        function(t, n, r) {
            return null == t || t.length < 1
                ? null == n
                ? void 0
                : []
                : null == n || r
                ? t[0]
                : h.initial(t, t.length - n)
        }, h.initial =
        function(t, n, r) { return o.call(t, 0, Math.max(0, t.length - (null == n || r ? 1 : n))) }, h.last =
        function(t, n, r) {
            return null == t || t.length < 1
                ? null == n
                ? void 0
                : []
                : null == n || r
                ? t[t.length - 1]
                : h.rest(t, Math.max(0, t.length - n))
        }, h.rest = h.tail = h.drop = function(t, n, r) { return o.call(t, null == n || r ? 1 : n) }, h.compact =
        function(t) { return h.filter(t, Boolean) };
    var S = function(t, n, r, e) {
        for (var i = (e = e || []).length, u = 0, o = k(t); u < o; u++) {
            var a = t[u];
            if (x(a) && (h.isArray(a) || h.isArguments(a)))
                if (n) for (var c = 0, f = a.length; c < f;) e[i++] = a[c++];
                else S(a, n, r, e), i = e.length;
            else r || (e[i++] = a)
        }
        return e
    };
    h.flatten = function(t, n) { return S(t, n, !1) }, h.without =
        g(function(t, n) { return h.difference(t, n) }), h.uniq = h.unique = function(t, n, r, e) {
        h.isBoolean(n) || (e = r, r = n, n = !1), null != r && (r = d(r, e));
        for (var i = [], u = [], o = 0, a = k(t); o < a; o++) {
            var c = t[o], f = r ? r(c, o, t) : c;
            n && !r
                ? (o && u === f || i.push(c), u = f)
                : r
                ? h.contains(u, f) || (u.push(f), i.push(c))
                : h.contains(i, c) || i.push(c)
        }
        return i
    }, h.union = g(function(t) { return h.uniq(S(t, !0, !0)) }), h.intersection = function(t) {
        for (var n = [], r = arguments.length, e = 0, i = k(t); e < i; e++) {
            var u = t[e];
            if (!h.contains(n, u)) {
                var o;
                for (o = 1; o < r && h.contains(arguments[o], u); o++);
                o === r && n.push(u)
            }
        }
        return n
    }, h.difference =
        g(function(t, n) { return n = S(n, !0, !0), h.filter(t, function(t) { return!h.contains(n, t) }) }), h.unzip =
        function(t) {
            for (var n = t && h.max(t, k).length || 0, r = Array(n), e = 0; e < n; e++) r[e] = h.pluck(t, e);
            return r
        }, h.zip = g(h.unzip), h.object = function(t, n) {
        for (var r = {}, e = 0, i = k(t); e < i; e++) n ? r[t[e]] = n[e] : r[t[e][0]] = t[e][1];
        return r
    };
    var T = function(t) {
        return function(n, r, e) {
            r = d(r, e);
            for (var i = k(n), u = t > 0 ? 0 : i - 1; u >= 0 && u < i; u += t) if (r(n[u], u, n)) return u;
            return-1
        }
    };
    h.findIndex = T(1), h.findLastIndex = T(-1), h.sortedIndex = function(t, n, r, e) {
        for (var i = (r = d(r, e, 1))(n), u = 0, o = k(t); u < o;) {
            var a = Math.floor((u + o) / 2);
            r(t[a]) < i ? u = a + 1 : o = a
        }
        return u
    };
    var M = function(t, n, r) {
        return function(e, i, u) {
            var a = 0, c = k(e);
            if ("number" == typeof u)
                t > 0 ? a = u >= 0 ? u : Math.max(u + c, a) : c = u >= 0 ? Math.min(u + 1, c) : u + c + 1;
            else if (r && u && c) return e[u = r(e, i)] === i ? u : -1;
            if (i != i) return(u = n(o.call(e, a, c), h.isNaN)) >= 0 ? u + a : -1;
            for (u = t > 0 ? a : c - 1; u >= 0 && u < c; u += t) if (e[u] === i) return u;
            return-1
        }
    };
    h.indexOf = M(1, h.findIndex, h.sortedIndex), h.lastIndexOf = M(-1, h.findLastIndex), h.range = function(t, n, r) {
        null == n && (n = t || 0, t = 0), r || (r = n < t ? -1 : 1);
        for (var e = Math.max(Math.ceil((n - t) / r), 0), i = Array(e), u = 0; u < e; u++, t += r) i[u] = t;
        return i
    }, h.chunk = function(t, n) {
        if (null == n || n < 1) return[];
        for (var r = [], e = 0, i = t.length; e < i;) r.push(o.call(t, e, e += n));
        return r
    };
    var F = function(t, n, r, e, i) {
        if (!(e instanceof n)) return t.apply(r, i);
        var u = _(t.prototype), o = t.apply(u, i);
        return h.isObject(o) ? o : u
    };
    h.bind = g(function(t, n, r) {
        if (!h.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var e = g(function(i) { return F(t, e, n, this, r.concat(i)) });
        return e
    }), h.partial = g(function(t, n) {
        var r = h.partial.placeholder,
            e = function() {
                for (var i = 0, u = n.length, o = Array(u), a = 0; a < u; a++)
                    o[a] = n[a] === r ? arguments[i++] : n[a];
                for (; i < arguments.length;) o.push(arguments[i++]);
                return F(t, e, this, this, o)
            };
        return e
    }), h.partial.placeholder = h, h.bindAll = g(function(t, n) {
        var r = (n = S(n, !1, !1)).length;
        if (r < 1) throw new Error("bindAll must be passed function names");
        for (; r--;) {
            var e = n[r];
            t[e] = h.bind(t[e], t)
        }
    }), h.memoize = function(t, n) {
        var r = function(e) {
            var i = r.cache, u = "" + (n ? n.apply(this, arguments) : e);
            return b(i, u) || (i[u] = t.apply(this, arguments)), i[u]
        };
        return r.cache = {}, r
    }, h.delay = g(function(t, n, r) { return setTimeout(function() { return t.apply(null, r) }, n) }), h.defer =
        h.partial(h.delay, h, 1), h.throttle = function(t, n, r) {
        var e, i, u, o, a = 0;
        r || (r = {});
        var c = function() { a = !1 === r.leading ? 0 : h.now(), e = null, o = t.apply(i, u), e || (i = u = null) },
            f = function() {
                var f = h.now();
                a || !1 !== r.leading || (a = f);
                var l = n - (f - a);
                return i = this, u = arguments, l <= 0 || l > n
                    ? (e && (clearTimeout(e), e = null), a = f, o = t.apply(i, u), e || (i = u = null))
                    : e || !1 === r.trailing || (e = setTimeout(c, l)), o
            };
        return f.cancel = function() { clearTimeout(e), a = 0, e = i = u = null }, f
    }, h.debounce = function(t, n, r) {
        var e,
            i,
            u = function(n, r) { e = null, r && (i = t.apply(n, r)) },
            o = g(function(o) {
                if (e && clearTimeout(e), r) {
                    var a = !e;
                    e = setTimeout(u, n), a && (i = t.apply(this, o))
                } else e = h.delay(u, n, this, o);
                return i
            });
        return o.cancel = function() { clearTimeout(e), e = null }, o
    }, h.wrap = function(t, n) { return h.partial(n, t) }, h.negate =
        function(t) { return function() { return!t.apply(this, arguments) } }, h.compose = function() {
        var t = arguments, n = t.length - 1;
        return function() {
            for (var r = n, e = t[n].apply(this, arguments); r--;) e = t[r].call(this, e);
            return e
        }
    }, h.after = function(t, n) { return function() { if (--t < 1) return n.apply(this, arguments) } }, h.before =
        function(t, n) {
            var r;
            return function() { return--t > 0 && (r = n.apply(this, arguments)), t <= 1 && (n = null), r }
        }, h.once = h.partial(h.before, 2), h.restArguments = g;
    var I = !{ toString: null }.propertyIsEnumerable("toString"),
        P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        R = function(t, n) {
            var r = P.length, i = t.constructor, u = h.isFunction(i) && i.prototype || e, o = "constructor";
            for (b(t, o) && !h.contains(n, o) && n.push(o); r--;)
                (o = P[r]) in t && t[o] !== u[o] && !h.contains(n, o) && n.push(o)
        };
    h.keys = function(t) {
        if (!h.isObject(t)) return[];
        if (l) return l(t);
        var n = [];
        for (var r in t) b(t, r) && n.push(r);
        return I && R(t, n), n
    }, h.allKeys = function(t) {
        if (!h.isObject(t)) return[];
        var n = [];
        for (var r in t) n.push(r);
        return I && R(t, n), n
    }, h.values = function(t) {
        for (var n = h.keys(t), r = n.length, e = Array(r), i = 0; i < r; i++) e[i] = t[n[i]];
        return e
    }, h.mapObject = function(t, n, r) {
        n = d(n, r);
        for (var e = h.keys(t), i = e.length, u = {}, o = 0; o < i; o++) {
            var a = e[o];
            u[a] = n(t[a], a, t)
        }
        return u
    }, h.pairs = function(t) {
        for (var n = h.keys(t), r = n.length, e = Array(r), i = 0; i < r; i++) e[i] = [n[i], t[n[i]]];
        return e
    }, h.invert = function(t) {
        for (var n = {}, r = h.keys(t), e = 0, i = r.length; e < i; e++) n[t[r[e]]] = r[e];
        return n
    }, h.functions = h.methods = function(t) {
        var n = [];
        for (var r in t) h.isFunction(t[r]) && n.push(r);
        return n.sort()
    };
    var N = function(t, n) {
        return function(r) {
            var e = arguments.length;
            if (n && (r = Object(r)), e < 2 || null == r) return r;
            for (var i = 1; i < e; i++)
                for (var u = arguments[i], o = t(u), a = o.length, c = 0; c < a; c++) {
                    var f = o[c];
                    n && void 0 !== r[f] || (r[f] = u[f])
                }
            return r
        }
    };
    h.extend = N(h.allKeys), h.extendOwn = h.assign = N(h.keys), h.findKey = function(t, n, r) {
        n = d(n, r);
        for (var e, i = h.keys(t), u = 0, o = i.length; u < o; u++) if (n(t[e = i[u]], e, t)) return e
    };
    var K, z, B = function(t, n, r) { return n in r };
    h.pick = g(function(t, n) {
            var r = {}, e = n[0];
            if (null == t) return r;
            h.isFunction(e)
                ? (n.length > 1 && (e = v(e, n[1])), n = h.allKeys(t))
                : (e = B, n = S(n, !1, !1), t = Object(t));
            for (var i = 0, u = n.length; i < u; i++) {
                var o = n[i], a = t[o];
                e(a, o, t) && (r[o] = a)
            }
            return r
        }), h.omit = g(function(t, n) {
            var r, e = n[0];
            return h.isFunction(e)
                ? (e = h.negate(e), n.length > 1 && (r = n[1]))
                : (n = h.map(S(n, !1, !1), String), e = function(t, r) { return!h.contains(n, r) }), h.pick(t, e, r)
        }), h.defaults = N(h.allKeys, !0), h.create = function(t, n) {
            var r = _(t);
            return n && h.extendOwn(r, n), r
        }, h.clone = function(t) { return h.isObject(t) ? h.isArray(t) ? t.slice() : h.extend({}, t) : t }, h.tap =
            function(t, n) { return n(t), t }, h.isMatch = function(t, n) {
            var r = h.keys(n), e = r.length;
            if (null == t) return!e;
            for (var i = Object(t), u = 0; u < e; u++) {
                var o = r[u];
                if (n[o] !== i[o] || !(o in i)) return!1
            }
            return!0
        }, K = function(t, n, r, e) {
            if (t === n) return 0 !== t || 1 / t == 1 / n;
            if (null == t || null == n) return!1;
            if (t != t) return n != n;
            var i = typeof t;
            return("function" === i || "object" === i || "object" == typeof n) && z(t, n, r, e)
        }, z = function(t, n, r, e) {
            t instanceof h && (t = t._wrapped), n instanceof h && (n = n._wrapped);
            var u = a.call(t);
            if (u !== a.call(n)) return!1;
            switch (u) {
            case"[object RegExp]":
            case"[object String]":
                return"" + t == "" + n;
            case"[object Number]":
                return+t != +t ? +n != +n : 0 == +t ? 1 / +t == 1 / n : +t == +n;
            case"[object Date]":
            case"[object Boolean]":
                return+t == +n;
            case"[object Symbol]":
                return i.valueOf.call(t) === i.valueOf.call(n)
            }
            var o = "[object Array]" === u;
            if (!o) {
                if ("object" != typeof t || "object" != typeof n) return!1;
                var c = t.constructor, f = n.constructor;
                if (c !== f &&
                    !(h.isFunction(c) && c instanceof c && h.isFunction(f) && f instanceof f) &&
                    "constructor" in t &&
                    "constructor" in n) return!1
            }
            e = e || [];
            for (var l = (r = r || []).length; l--;) if (r[l] === t) return e[l] === n;
            if (r.push(t), e.push(n), o) {
                if ((l = t.length) !== n.length) return!1;
                for (; l--;) if (!K(t[l], n[l], r, e)) return!1
            } else {
                var s, p = h.keys(t);
                if (l = p.length, h.keys(n).length !== l) return!1;
                for (; l--;) if (!b(n, s = p[l]) || !K(t[s], n[s], r, e)) return!1
            }
            return r.pop(), e.pop(), !0
        }, h.isEqual = function(t, n) { return K(t, n) }, h.isEmpty =
            function(t) {
                return null == t ||
                (x(t) && (h.isArray(t) || h.isString(t) || h.isArguments(t))
                    ? 0 === t.length
                    : 0 === h.keys(t).length)
            }, h.isElement = function(t) { return!(!t || 1 !== t.nodeType) }, h.isArray =
            f || function(t) { return"[object Array]" === a.call(t) }, h.isObject = function(t) {
            var n = typeof t;
            return"function" === n || "object" === n && !!t
        }, h.each([
                "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap",
                "Set",
                "WeakSet"
            ],
            function(t) { h["is" + t] = function(n) { return a.call(n) === "[object " + t + "]" } }),
        h.isArguments(arguments) || (h.isArguments = function(t) { return b(t, "callee") });
    var L = t.document && t.document.childNodes;
    "function" != typeof/./ &&
            "object" != typeof Int8Array &&
            "function" != typeof L &&
            (h.isFunction = function(t) { return"function" == typeof t || !1 }), h.isFinite =
            function(t) { return!h.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t)) }, h.isNaN =
            function(t) { return h.isNumber(t) && isNaN(t) }, h.isBoolean =
            function(t) { return!0 === t || !1 === t || "[object Boolean]" === a.call(t) }, h.isNull =
            function(t) { return null === t }, h.isUndefined = function(t) { return void 0 === t }, h.has =
            function(t, n) {
                if (!h.isArray(n)) return b(t, n);
                for (var r = n.length, e = 0; e < r; e++) {
                    var i = n[e];
                    if (null == t || !c.call(t, i)) return!1;
                    t = t[i]
                }
                return!!r
            }, h.noConflict = function() { return t._ = n, this }, h.identity = function(t) { return t }, h.constant =
            function(t) { return function() { return t } }, h.noop = function() {}, h.property =
            function(t) { return h.isArray(t) ? function(n) { return w(n, t) } : m(t) }, h.propertyOf =
            function(t) { return null == t ? function() {} : function(n) { return h.isArray(n) ? w(t, n) : t[n] } },
        h.matcher = h.matches =
            function(t) { return t = h.extendOwn({}, t), function(n) { return h.isMatch(n, t) } }, h.times =
            function(t, n, r) {
                var e = Array(Math.max(0, t));
                n = v(n, r, 1);
                for (var i = 0; i < t; i++) e[i] = n(i);
                return e
            }, h.random =
            function(t, n) { return null == n && (n = t, t = 0), t + Math.floor(Math.random() * (n - t + 1)) }, h.now =
            Date.now || function() { return(new Date).getTime() };
    var q = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        U = h.invert(q),
        W = function(t) {
            var n = function(n) { return t[n] },
                r = "(?:" + h.keys(t).join("|") + ")",
                e = RegExp(r),
                i = RegExp(r, "g");
            return function(t) { return e.test(t = null == t ? "" : "" + t) ? t.replace(i, n) : t }
        };
    h.escape = W(q), h.unescape = W(U), h.result = function(t, n, r) {
        h.isArray(n) || (n = [n]);
        var e = n.length;
        if (!e) return h.isFunction(r) ? r.call(t) : r;
        for (var i = 0; i < e; i++) {
            var u = null == t ? void 0 : t[n[i]];
            void 0 === u && (u = r, i = e), t = h.isFunction(u) ? u.call(t) : u
        }
        return t
    };
    var C = 0;
    h.uniqueId = function(t) {
        var n = ++C + "";
        return t ? t + n : n
    }, h.templateSettings =
        { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
    var D = /(.)^/,
        V = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        Y = function(t) { return"\\" + V[t] };
    h.template = function(t, n, r) {
        !n && r && (n = r), n = h.defaults({}, n, h.templateSettings);
        var e,
            i = RegExp([(n.escape || D).source, (n.interpolate || D).source, (n.evaluate || D).source].join("|") + "|$",
                "g"),
            u = 0,
            o = "__p+='";
        t.replace(i,
            function(n, r, e, i, a) {
                return o += t.slice(u, a).replace(J, Y), u = a + n.length, r
                    ? o += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"
                    : e
                    ? o += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"
                    : i && (o += "';\n" + i + "\n__p+='"), n
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            o +
            "return __p;\n";
        try {
            e = new Function(n.variable || "obj", "_", o)
        } catch (c) {
            throw c.source = o, c
        }
        var a = function(t) { return e.call(this, t, h) };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, h.chain = function(t) {
        var n = h(t);
        return n._chain = !0, n
    };
    var $ = function(t, n) { return t._chain ? h(n).chain() : n };
    h.mixin = function(t) {
        return h.each(h.functions(t),
            function(n) {
                var r = h[n] = t[n];
                h.prototype[n] = function() {
                    var t = [this._wrapped];
                    return u.apply(t, arguments), $(this, r.apply(h, t))
                }
            }), h
    }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function(t) {
            var n = r[t];
            h.prototype[t] = function() {
                var r = this._wrapped;
                return n.apply(r, arguments), "shift" !== t && "splice" !== t || 0 !== r.length || delete r[0], $(this,
                    r)
            }
        }), h.each(["concat", "join", "slice"],
        function(t) {
            var n = r[t];
            h.prototype[t] = function() { return $(this, n.apply(this._wrapped, arguments)) }
        }), h.prototype.value = function() { return this._wrapped }, h.prototype.valueOf = h.prototype.toJSON =
        h.prototype.value, h.prototype.toString =
        function() { return String(this._wrapped) }, "function" == typeof define &&
        define.amd &&
        define("underscore", [], function() { return h })
}();