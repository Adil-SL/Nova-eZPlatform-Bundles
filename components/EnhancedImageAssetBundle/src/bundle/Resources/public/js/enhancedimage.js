!(function (t) {
    var e = {};
    function i(n) {
        if (e[n]) return e[n].exports;
        var s = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
            i.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (i.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (i.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: t
                }),
                2 & e && 'string' != typeof t)
            )
                for (var s in t)
                    i.d(
                        n,
                        s,
                        function (e) {
                            return t[e];
                        }.bind(null, s)
                    );
            return n;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, 'a', e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ''),
        i((i.s = 1));
})([
    function (t, e, i) {
        !(function (e, i) {
            var n = (function (t, e) {
                'use strict';
                if (!e.getElementsByClassName) return;
                var i,
                    n,
                    s = e.documentElement,
                    o = t.Date,
                    a = t.HTMLPictureElement,
                    r = t.addEventListener,
                    u = t.setTimeout,
                    c = t.requestAnimationFrame || u,
                    l = t.requestIdleCallback,
                    d = /^picture$/i,
                    h = ['load', 'error', 'lazyincluded', '_lazyloaded'],
                    f = {},
                    g = Array.prototype.forEach,
                    m = function (t, e) {
                        return (
                            f[e] ||
                                (f[e] = new RegExp('(\\s|^)' + e + '(\\s|$)')),
                            f[e].test(t.getAttribute('class') || '') && f[e]
                        );
                    },
                    p = function (t, e) {
                        m(t, e) ||
                            t.setAttribute(
                                'class',
                                (t.getAttribute('class') || '').trim() + ' ' + e
                            );
                    },
                    v = function (t, e) {
                        var i;
                        (i = m(t, e)) &&
                            t.setAttribute(
                                'class',
                                (t.getAttribute('class') || '').replace(i, ' ')
                            );
                    },
                    y = function (t, e, i) {
                        var n = i ? 'addEventListener' : 'removeEventListener';
                        i && y(t, e),
                            h.forEach(function (i) {
                                t[n](i, e);
                            });
                    },
                    b = function (t, n, s, o, a) {
                        var r = e.createEvent('Event');
                        return (
                            s || (s = {}),
                            (s.instance = i),
                            r.initEvent(n, !o, !a),
                            (r.detail = s),
                            t.dispatchEvent(r),
                            r
                        );
                    },
                    z = function (e, i) {
                        var s;
                        !a && (s = t.picturefill || n.pf)
                            ? (i &&
                                  i.src &&
                                  !e.getAttribute('srcset') &&
                                  e.setAttribute('srcset', i.src),
                              s({ reevaluate: !0, elements: [e] }))
                            : i && i.src && (e.src = i.src);
                    },
                    A = function (t, e) {
                        return (getComputedStyle(t, null) || {})[e];
                    },
                    C = function (t, e, i) {
                        for (
                            i = i || t.offsetWidth;
                            i < n.minSize && e && !t._lazysizesWidth;

                        )
                            (i = e.offsetWidth), (e = e.parentNode);
                        return i;
                    },
                    E =
                        ((x = []),
                        (_ = []),
                        (F = x),
                        (M = function () {
                            var t = F;
                            for (
                                F = x.length ? _ : x, L = !0, I = !1;
                                t.length;

                            )
                                t.shift()();
                            L = !1;
                        }),
                        (D = function (t, i) {
                            L && !i
                                ? t.apply(this, arguments)
                                : (F.push(t),
                                  I || ((I = !0), (e.hidden ? u : c)(M)));
                        }),
                        (D._lsFlush = M),
                        D),
                    S = function (t, e) {
                        return e
                            ? function () {
                                  E(t);
                              }
                            : function () {
                                  var e = this,
                                      i = arguments;
                                  E(function () {
                                      t.apply(e, i);
                                  });
                              };
                    },
                    w = function (t) {
                        var e,
                            i,
                            n = function () {
                                (e = null), t();
                            },
                            s = function () {
                                var t = o.now() - i;
                                t < 99 ? u(s, 99 - t) : (l || n)(n);
                            };
                        return function () {
                            (i = o.now()), e || (e = u(s, 99));
                        };
                    };
                var L, I, x, _, F, M, D;
                !(function () {
                    var e,
                        i = {
                            lazyClass: 'lazyload',
                            loadedClass: 'lazyloaded',
                            loadingClass: 'lazyloading',
                            preloadClass: 'lazypreload',
                            errorClass: 'lazyerror',
                            autosizesClass: 'lazyautosizes',
                            srcAttr: 'data-src',
                            srcsetAttr: 'data-srcset',
                            sizesAttr: 'data-sizes',
                            minSize: 40,
                            customMedia: {},
                            init: !0,
                            expFactor: 1.5,
                            hFac: 0.8,
                            loadMode: 2,
                            loadHidden: !0,
                            ricTimeout: 0,
                            throttleDelay: 125
                        };
                    for (e in ((n =
                        t.lazySizesConfig || t.lazysizesConfig || {}),
                    i))
                        e in n || (n[e] = i[e]);
                    (t.lazySizesConfig = n),
                        u(function () {
                            n.init && W();
                        });
                })();
                var P =
                        ((U = /^img$/i),
                        (Q = /^iframe$/i),
                        (tt =
                            'onscroll' in t &&
                            !/(gle|ing)bot/.test(navigator.userAgent)),
                        (et = 0),
                        (it = 0),
                        (nt = -1),
                        (st = function (t) {
                            it--, (!t || it < 0 || !t.target) && (it = 0);
                        }),
                        (ot = function (t) {
                            return (
                                null == K &&
                                    (K = 'hidden' == A(e.body, 'visibility')),
                                K ||
                                    ('hidden' !=
                                        A(t.parentNode, 'visibility') &&
                                        'hidden' != A(t, 'visibility'))
                            );
                        }),
                        (at = function (t, i) {
                            var n,
                                o = t,
                                a = ot(t);
                            for (
                                $ -= i, V += i, q -= i, J += i;
                                a &&
                                (o = o.offsetParent) &&
                                o != e.body &&
                                o != s;

                            )
                                (a = (A(o, 'opacity') || 1) > 0) &&
                                    'visible' != A(o, 'overflow') &&
                                    ((n = o.getBoundingClientRect()),
                                    (a =
                                        J > n.left &&
                                        q < n.right &&
                                        V > n.top - 1 &&
                                        $ < n.bottom + 1));
                            return a;
                        }),
                        (rt = function () {
                            var t,
                                o,
                                a,
                                r,
                                u,
                                c,
                                l,
                                d,
                                h,
                                f,
                                g,
                                m,
                                p = i.elements;
                            if ((Z = n.loadMode) && it < 8 && (t = p.length)) {
                                for (
                                    o = 0,
                                        nt++,
                                        f =
                                            !n.expand || n.expand < 1
                                                ? s.clientHeight > 500 &&
                                                  s.clientWidth > 500
                                                    ? 500
                                                    : 370
                                                : n.expand,
                                        i._defEx = f,
                                        g = f * n.expFactor,
                                        m = n.hFac,
                                        K = null,
                                        et < g &&
                                        it < 1 &&
                                        nt > 2 &&
                                        Z > 2 &&
                                        !e.hidden
                                            ? ((et = g), (nt = 0))
                                            : (et =
                                                  Z > 1 && nt > 1 && it < 6
                                                      ? f
                                                      : 0);
                                    o < t;
                                    o++
                                )
                                    if (p[o] && !p[o]._lazyRace)
                                        if (tt)
                                            if (
                                                (((d =
                                                    p[o].getAttribute(
                                                        'data-expand'
                                                    )) &&
                                                    (c = 1 * d)) ||
                                                    (c = et),
                                                h !== c &&
                                                    ((X = innerWidth + c * m),
                                                    (G = innerHeight + c),
                                                    (l = -1 * c),
                                                    (h = c)),
                                                (a =
                                                    p[
                                                        o
                                                    ].getBoundingClientRect()),
                                                (V = a.bottom) >= l &&
                                                    ($ = a.top) <= G &&
                                                    (J = a.right) >= l * m &&
                                                    (q = a.left) <= X &&
                                                    (V || J || q || $) &&
                                                    (n.loadHidden ||
                                                        ot(p[o])) &&
                                                    ((H &&
                                                        it < 3 &&
                                                        !d &&
                                                        (Z < 3 || nt < 4)) ||
                                                        at(p[o], c)))
                                            ) {
                                                if (
                                                    (gt(p[o]), (u = !0), it > 9)
                                                )
                                                    break;
                                            } else
                                                !u &&
                                                    H &&
                                                    !r &&
                                                    it < 4 &&
                                                    nt < 4 &&
                                                    Z > 2 &&
                                                    (B[0] ||
                                                        n.preloadAfterLoad) &&
                                                    (B[0] ||
                                                        (!d &&
                                                            (V ||
                                                                J ||
                                                                q ||
                                                                $ ||
                                                                'auto' !=
                                                                    p[
                                                                        o
                                                                    ].getAttribute(
                                                                        n.sizesAttr
                                                                    )))) &&
                                                    (r = B[0] || p[o]);
                                        else gt(p[o]);
                                r && !u && gt(r);
                            }
                        }),
                        (ut = (function (t) {
                            var e,
                                i = 0,
                                s = n.throttleDelay,
                                a = n.ricTimeout,
                                r = function () {
                                    (e = !1), (i = o.now()), t();
                                },
                                c =
                                    l && a > 49
                                        ? function () {
                                              l(r, { timeout: a }),
                                                  a !== n.ricTimeout &&
                                                      (a = n.ricTimeout);
                                          }
                                        : S(function () {
                                              u(r);
                                          }, !0);
                            return function (t) {
                                var n;
                                (t = !0 === t) && (a = 33),
                                    e ||
                                        ((e = !0),
                                        (n = s - (o.now() - i)) < 0 && (n = 0),
                                        t || n < 9 ? c() : u(c, n));
                            };
                        })(rt)),
                        (ct = function (t) {
                            var e = t.target;
                            e._lazyCache
                                ? delete e._lazyCache
                                : (st(t),
                                  p(e, n.loadedClass),
                                  v(e, n.loadingClass),
                                  y(e, dt),
                                  b(e, 'lazyloaded'));
                        }),
                        (lt = S(ct)),
                        (dt = function (t) {
                            lt({ target: t.target });
                        }),
                        (ht = function (t) {
                            var e,
                                i = t.getAttribute(n.srcsetAttr);
                            (e =
                                n.customMedia[
                                    t.getAttribute('data-media') ||
                                        t.getAttribute('media')
                                ]) && t.setAttribute('media', e),
                                i && t.setAttribute('srcset', i);
                        }),
                        (ft = S(function (t, e, i, s, o) {
                            var a, r, c, l, h, f;
                            (h = b(t, 'lazybeforeunveil', e))
                                .defaultPrevented ||
                                (s &&
                                    (i
                                        ? p(t, n.autosizesClass)
                                        : t.setAttribute('sizes', s)),
                                (r = t.getAttribute(n.srcsetAttr)),
                                (a = t.getAttribute(n.srcAttr)),
                                o &&
                                    (l =
                                        (c = t.parentNode) &&
                                        d.test(c.nodeName || '')),
                                (f =
                                    e.firesLoad ||
                                    ('src' in t && (r || a || l))),
                                (h = { target: t }),
                                p(t, n.loadingClass),
                                f &&
                                    (clearTimeout(k),
                                    (k = u(st, 2500)),
                                    y(t, dt, !0)),
                                l &&
                                    g.call(
                                        c.getElementsByTagName('source'),
                                        ht
                                    ),
                                r
                                    ? t.setAttribute('srcset', r)
                                    : a &&
                                      !l &&
                                      (Q.test(t.nodeName)
                                          ? (function (t, e) {
                                                try {
                                                    t.contentWindow.location.replace(
                                                        e
                                                    );
                                                } catch (i) {
                                                    t.src = e;
                                                }
                                            })(t, a)
                                          : (t.src = a)),
                                o && (r || l) && z(t, { src: a })),
                                t._lazyRace && delete t._lazyRace,
                                v(t, n.lazyClass),
                                E(function () {
                                    var e = t.complete && t.naturalWidth > 1;
                                    (f && !e) ||
                                        (e && p(t, 'ls-is-cached'),
                                        ct(h),
                                        (t._lazyCache = !0),
                                        u(function () {
                                            '_lazyCache' in t &&
                                                delete t._lazyCache;
                                        }, 9));
                                }, !0);
                        })),
                        (gt = function (t) {
                            var e,
                                i = U.test(t.nodeName),
                                s =
                                    i &&
                                    (t.getAttribute(n.sizesAttr) ||
                                        t.getAttribute('sizes')),
                                o = 'auto' == s;
                            ((!o && H) ||
                                !i ||
                                (!t.getAttribute('src') && !t.srcset) ||
                                t.complete ||
                                m(t, n.errorClass) ||
                                !m(t, n.lazyClass)) &&
                                ((e = b(t, 'lazyunveilread').detail),
                                o && N.updateElem(t, !0, t.offsetWidth),
                                (t._lazyRace = !0),
                                it++,
                                ft(t, e, o, s, i));
                        }),
                        (mt = function () {
                            if (!H)
                                if (o.now() - Y < 999) u(mt, 999);
                                else {
                                    var t = w(function () {
                                        (n.loadMode = 3), ut();
                                    });
                                    (H = !0),
                                        (n.loadMode = 3),
                                        ut(),
                                        r(
                                            'scroll',
                                            function () {
                                                3 == n.loadMode &&
                                                    (n.loadMode = 2),
                                                    t();
                                            },
                                            !0
                                        );
                                }
                        }),
                        {
                            _: function () {
                                (Y = o.now()),
                                    (i.elements = e.getElementsByClassName(
                                        n.lazyClass
                                    )),
                                    (B = e.getElementsByClassName(
                                        n.lazyClass + ' ' + n.preloadClass
                                    )),
                                    r('scroll', ut, !0),
                                    r('resize', ut, !0),
                                    t.MutationObserver
                                        ? new MutationObserver(ut).observe(s, {
                                              childList: !0,
                                              subtree: !0,
                                              attributes: !0
                                          })
                                        : (s.addEventListener(
                                              'DOMNodeInserted',
                                              ut,
                                              !0
                                          ),
                                          s.addEventListener(
                                              'DOMAttrModified',
                                              ut,
                                              !0
                                          ),
                                          setInterval(ut, 999)),
                                    r('hashchange', ut, !0),
                                    [
                                        'focus',
                                        'mouseover',
                                        'click',
                                        'load',
                                        'transitionend',
                                        'animationend',
                                        'webkitAnimationEnd'
                                    ].forEach(function (t) {
                                        e.addEventListener(t, ut, !0);
                                    }),
                                    /d$|^c/.test(e.readyState)
                                        ? mt()
                                        : (r('load', mt),
                                          e.addEventListener(
                                              'DOMContentLoaded',
                                              ut
                                          ),
                                          u(mt, 2e4)),
                                    i.elements.length
                                        ? (rt(), E._lsFlush())
                                        : ut();
                            },
                            checkElems: ut,
                            unveil: gt
                        }),
                    N =
                        ((O = S(function (t, e, i, n) {
                            var s, o, a;
                            if (
                                ((t._lazysizesWidth = n),
                                (n += 'px'),
                                t.setAttribute('sizes', n),
                                d.test(e.nodeName || ''))
                            )
                                for (
                                    o = 0,
                                        a = (s =
                                            e.getElementsByTagName('source'))
                                            .length;
                                    o < a;
                                    o++
                                )
                                    s[o].setAttribute('sizes', n);
                            i.detail.dataAttr || z(t, i.detail);
                        })),
                        (R = function (t, e, i) {
                            var n,
                                s = t.parentNode;
                            s &&
                                ((i = C(t, s, i)),
                                (n = b(t, 'lazybeforesizes', {
                                    width: i,
                                    dataAttr: !!e
                                })).defaultPrevented ||
                                    ((i = n.detail.width) &&
                                        i !== t._lazysizesWidth &&
                                        O(t, s, n, i)));
                        }),
                        (j = w(function () {
                            var t,
                                e = T.length;
                            if (e) for (t = 0; t < e; t++) R(T[t]);
                        })),
                        {
                            _: function () {
                                (T = e.getElementsByClassName(
                                    n.autosizesClass
                                )),
                                    r('resize', j);
                            },
                            checkElems: j,
                            updateElem: R
                        }),
                    W = function () {
                        W.i || ((W.i = !0), N._(), P._());
                    };
                var T, O, R, j;
                var B,
                    H,
                    k,
                    Z,
                    Y,
                    X,
                    G,
                    $,
                    q,
                    J,
                    V,
                    K,
                    U,
                    Q,
                    tt,
                    et,
                    it,
                    nt,
                    st,
                    ot,
                    at,
                    rt,
                    ut,
                    ct,
                    lt,
                    dt,
                    ht,
                    ft,
                    gt,
                    mt;
                return (i = {
                    cfg: n,
                    autoSizer: N,
                    loader: P,
                    init: W,
                    uP: z,
                    aC: p,
                    rC: v,
                    hC: m,
                    fire: b,
                    gW: C,
                    rAF: E
                });
            })(e, e.document);
            (e.lazySizes = n), t.exports && (t.exports = n);
        })(window);
    },
    function (t, e, i) {
        'use strict';
        function n(t) {
            for (var e = [], i = 1; i < arguments.length; i++)
                e[i - 1] = arguments[i];
            return (
                e.forEach(function (e) {
                    return Object.keys(e).forEach(function (i) {
                        return (t[i] = e[i]);
                    });
                }),
                t
            );
        }
        i.r(e);
        var s = { position: 'relative', overflow: 'hidden' },
            o = {
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0'
            },
            a = { display: 'block', maxWidth: '100%', touchAction: 'none' },
            r = {
                position: 'absolute',
                cursor: 'move',
                transform: 'translate(-50%, -50%)'
            },
            u = {
                onChange: function () {},
                retina: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGNpcmNsZSBpZD0iYSIgY3g9IjEwIiBjeT0iMTAiIHI9IjEwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4zIiAvPgogICAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utb3BhY2l0eT0iLjgiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+'
            },
            c =
                ((function () {
                    function t(t, e) {
                        void 0 === e && (e = {});
                        var i = this;
                        (this.startDragging = function (t) {
                            t.preventDefault(),
                                (i.isDragging = !0),
                                t instanceof MouseEvent
                                    ? i.updateCoordinates(t.clientX, t.clientY)
                                    : i.updateCoordinates(
                                          t.touches[0].clientX,
                                          t.touches[0].clientY
                                      );
                        }),
                            (this.handleMove = function (t) {
                                if (
                                    (t.preventDefault(),
                                    t instanceof MouseEvent)
                                )
                                    i.updateCoordinates(t.clientX, t.clientY);
                                else {
                                    var e = t.touches[0],
                                        n = document.elementFromPoint(
                                            e.pageX,
                                            e.pageY
                                        );
                                    n !== i.retina && n !== i.img
                                        ? i.stopDragging()
                                        : i.updateCoordinates(
                                              e.clientX,
                                              e.clientY
                                          );
                                }
                            }),
                            (this.stopDragging = function () {
                                i.isDragging = !1;
                            }),
                            (this.updateRetinaPositionFromFocus = function () {
                                i.updateRetinaPosition(
                                    i.calculateOffsetFromFocus()
                                );
                            }),
                            (this.updateRetinaPosition = function (t) {
                                (i.retina.style.top = t.offsetY + 'px'),
                                    (i.retina.style.left = t.offsetX + 'px');
                            }),
                            (this.options = n({}, u, e)),
                            (this.img = t),
                            (this.container = t.parentElement),
                            (this.retina = document.createElement('img')),
                            (this.retina.src = this.options.retina),
                            (this.retina.draggable = !1),
                            this.container.appendChild(this.retina),
                            (this.img.draggable = !1),
                            this.startListening(),
                            n(this.img.style, a),
                            n(this.retina.style, r),
                            n(this.container.style, s),
                            (this.focus = this.options.focus
                                ? this.options.focus
                                : {
                                      x:
                                          parseFloat(
                                              this.img.getAttribute(
                                                  'data-focus-x'
                                              )
                                          ) || 0,
                                      y:
                                          parseFloat(
                                              this.img.getAttribute(
                                                  'data-focus-y'
                                              )
                                          ) || 0
                                  }),
                            this.setFocus(this.focus);
                    }
                    (t.prototype.startListening = function () {
                        this.container.addEventListener(
                            'mousedown',
                            this.startDragging
                        ),
                            this.container.addEventListener(
                                'mousemove',
                                this.handleMove
                            ),
                            this.container.addEventListener(
                                'mouseup',
                                this.stopDragging
                            ),
                            this.container.addEventListener(
                                'mouseleave',
                                this.stopDragging
                            ),
                            this.container.addEventListener(
                                'touchend',
                                this.stopDragging
                            ),
                            this.container.addEventListener(
                                'touchstart',
                                this.startDragging,
                                { passive: !0 }
                            ),
                            this.container.addEventListener(
                                'touchmove',
                                this.handleMove,
                                { passive: !0 }
                            ),
                            this.img.addEventListener(
                                'load',
                                this.updateRetinaPositionFromFocus
                            );
                    }),
                        (t.prototype.stopListening = function () {
                            this.container.removeEventListener(
                                'mousedown',
                                this.startDragging
                            ),
                                this.container.removeEventListener(
                                    'mousemove',
                                    this.handleMove
                                ),
                                this.container.removeEventListener(
                                    'mouseup',
                                    this.stopDragging
                                ),
                                this.container.removeEventListener(
                                    'mouseleave',
                                    this.stopDragging
                                ),
                                this.container.removeEventListener(
                                    'touchend',
                                    this.stopDragging
                                ),
                                this.container.removeEventListener(
                                    'touchstart',
                                    this.startDragging
                                ),
                                this.container.removeEventListener(
                                    'touchmove',
                                    this.handleMove
                                ),
                                this.img.removeEventListener(
                                    'load',
                                    this.updateRetinaPositionFromFocus
                                );
                        }),
                        (t.prototype.setFocus = function (t) {
                            (this.focus = t),
                                this.img.setAttribute(
                                    'data-focus-x',
                                    t.x.toString()
                                ),
                                this.img.setAttribute(
                                    'data-focus-y',
                                    t.y.toString()
                                ),
                                this.updateRetinaPositionFromFocus(),
                                this.options.onChange(t);
                        }),
                        (t.prototype.calculateOffsetFromFocus = function () {
                            var t = this.img.getBoundingClientRect(),
                                e = t.width,
                                i = t.height;
                            return {
                                offsetX: e * (this.focus.x / 2 + 0.5),
                                offsetY: i * (this.focus.y / -2 + 0.5)
                            };
                        }),
                        (t.prototype.updateCoordinates = function (t, e) {
                            if (this.isDragging) {
                                var i = this.img.getBoundingClientRect(),
                                    n = i.width,
                                    s = i.height,
                                    o = 2 * ((t - i.left) / n - 0.5),
                                    a = -2 * ((e - i.top) / s - 0.5);
                                this.setFocus({ x: o, y: a });
                            }
                        });
                })(),
                { minHeight: '100%', minWidth: '100%' }),
            l = {
                height: '100%',
                width: '100%',
                border: 'none',
                opacity: 0,
                zIndex: -1,
                pointerEvents: 'none'
            },
            d = {
                debounceTime: 17,
                updateOnWindowResize: !0,
                updateOnContainerResize: !1,
                containerPosition: 'relative'
            },
            h = (function () {
                function t(t, e) {
                    void 0 === e && (e = {});
                    var i = this;
                    (this.imageNode = t),
                        (this.listening = !1),
                        (this.setFocus = function (t) {
                            (i.focus = t),
                                i.img.setAttribute(
                                    'data-focus-x',
                                    t.x.toString()
                                ),
                                i.img.setAttribute(
                                    'data-focus-y',
                                    t.y.toString()
                                ),
                                i.applyShift();
                        }),
                        (this.applyShift = function () {
                            var t = i.img,
                                e = t.naturalWidth,
                                n = t.naturalHeight,
                                s = i.container.getBoundingClientRect(),
                                o = s.width,
                                a = s.height,
                                r = '0',
                                u = '0';
                            if (!(o > 0 && a > 0 && e > 0 && n > 0)) return !1;
                            var c = e / o,
                                l = n / a;
                            (i.img.style.maxHeight = null),
                                (i.img.style.maxWidth = null),
                                e > o &&
                                    n > a &&
                                    (i.img.style[
                                        c > l ? 'maxHeight' : 'maxWidth'
                                    ] = '100%'),
                                c > l
                                    ? (r =
                                          i.calcShift(l, o, e, i.focus.x) + '%')
                                    : c < l &&
                                      (u =
                                          i.calcShift(c, a, n, i.focus.y, !0) +
                                          '%'),
                                (i.img.style.top = u),
                                (i.img.style.left = r);
                        }),
                        (this.options = n(d, e)),
                        (this.img = t),
                        (this.container = t.parentElement),
                        this.img.__focused_image_instance__ &&
                            (this.img.__focused_image_instance__.stopListening(),
                            this.img.removeEventListener(
                                'load',
                                this.applyShift
                            )),
                        (this.img.__focused_image_instance__ = this),
                        this.img.addEventListener('load', this.applyShift),
                        n(this.container.style, s),
                        (this.container.style.position =
                            this.options.containerPosition),
                        n(this.img.style, c, o),
                        (this.debounceApplyShift = (function (t, e) {
                            var i;
                            return function () {
                                for (
                                    var n = [], s = 0;
                                    s < arguments.length;
                                    s++
                                )
                                    n[s] = arguments[s];
                                clearTimeout(i),
                                    (i = setTimeout(function () {
                                        return t.apply(void 0, n);
                                    }, e));
                            };
                        })(this.applyShift, this.options.debounceTime)),
                        (this.focus = this.options.focus
                            ? this.options.focus
                            : {
                                  x:
                                      parseFloat(
                                          this.img.getAttribute('data-focus-x')
                                      ) || 0,
                                  y:
                                      parseFloat(
                                          this.img.getAttribute('data-focus-y')
                                      ) || 0
                              }),
                        this.startListening(),
                        this.setFocus(this.focus);
                }
                return (
                    (t.prototype.startListening = function () {
                        var t = this;
                        if (
                            !this.listening &&
                            ((this.listening = !0),
                            this.options.updateOnWindowResize &&
                                window.addEventListener(
                                    'resize',
                                    this.debounceApplyShift
                                ),
                            this.options.updateOnContainerResize)
                        ) {
                            var e = document.createElement('object');
                            n(e.style, l, o),
                                e.addEventListener('load', function (i) {
                                    return e.contentDocument.defaultView.addEventListener(
                                        'resize',
                                        function () {
                                            return t.debounceApplyShift();
                                        }
                                    );
                                }),
                                (e.type = 'text/html'),
                                e.setAttribute('aria-hidden', 'true'),
                                (e.tabIndex = -1),
                                this.container.appendChild(e),
                                (e.data = 'about:blank'),
                                (this.resizeListenerObject = e);
                        }
                    }),
                    (t.prototype.stopListening = function () {
                        this.listening &&
                            ((this.listening = !1),
                            window.removeEventListener(
                                'resize',
                                this.debounceApplyShift
                            ),
                            this.resizeListenerObject &&
                                (this.resizeListenerObject.contentDocument.defaultView.removeEventListener(
                                    'resize',
                                    this.debounceApplyShift
                                ),
                                this.container.removeChild(
                                    this.resizeListenerObject
                                ),
                                (this.resizeListenerObject = null)));
                    }),
                    (t.prototype.calcShift = function (t, e, i, n, s) {
                        var o = Math.floor(e / 2),
                            a = (n + 1) / 2,
                            r = Math.floor(i / t),
                            u = Math.floor(a * r);
                        s && (u = r - u);
                        var c = u - o,
                            l = r - u,
                            d = e - o;
                        return (
                            l < d && (c -= d - l),
                            c < 0 && (c = 0),
                            (-100 * c) / e
                        );
                    }),
                    t
                );
            })();
        i(0);
        /*
         * NovaeZEnhancedImageAssetBundle.
         *
         * @package   NovaeZEnhancedImageAssetBundle
         *
         * @author    Novactive <f.alexandre@novactive.com>
         * @copyright 2019 Novactive
         * @license   https://github.com/Novactive/NovaeZEnhancedImageAssetBundle/blob/master/LICENSE
         */
        (window.lazySizesConfig = window.lazySizesConfig || {}),
            (window.lazySizesConfig.lazyClass = 'enhancedimage--img--lazyload');
        var f = /^img$/i,
            g = /^picture$/i,
            m = function (t) {
                var e = document.createElement('a');
                return (e.href = t), e;
            },
            p = (function () {
                function t(t) {
                    (this.sources = new Map()),
                        (this.element = t),
                        (this.currentSrc = null);
                }
                return (
                    (t.prototype.parseSrc = function (t) {
                        for (
                            var e = [], i = 0, n = t.split(',');
                            i < n.length;
                            i++
                        ) {
                            var s = n[i].trim().split(' ')[0];
                            e.push(m(s));
                        }
                        return e;
                    }),
                    (t.prototype.addSource = function (t, e, i) {
                        for (
                            var n = 0, s = this.parseSrc(t);
                            n < s.length;
                            n++
                        ) {
                            var o = { url: s[n], focus: e, size: i };
                            this.sources.set(o.url.pathname, o);
                        }
                    }),
                    (t.prototype.setFocus = function (t) {
                        this.focusedImage ||
                            (this.focusedImage = new h(this.element, {
                                focus: t
                            })),
                            this.focusedImage.setFocus(t);
                    }),
                    (t.prototype.updateFocusPoint = function (t) {
                        if (
                            this.currentSrc !== this.element.currentSrc ||
                            !0 === t
                        ) {
                            var e = this.element.currentSrc || this.element.src,
                                i = this.sources.get(m(e).pathname);
                            i &&
                                (this.setFocus(i.focus),
                                this.element.classList.add('focused'),
                                (this.currentSrc = e));
                        }
                    }),
                    t
                );
            })();
        !(function (t, e) {
            var i,
                n,
                s,
                o,
                a,
                r,
                u,
                c =
                    ((o = []),
                    (a = s = []),
                    ((u = function (t, s) {
                        i && !s
                            ? t.apply(this, arguments)
                            : (a.push(t),
                              n ||
                                  ((n = !0),
                                  (e.hidden
                                      ? setTimeout
                                      : requestAnimationFrame)(r)));
                    })._lsFlush = r =
                        function () {
                            var t = a;
                            for (
                                a = s.length ? o : s, i = !0, n = !1;
                                t.length;

                            )
                                t.shift()();
                            i = !1;
                        }),
                    u),
                l = e.getElementsByClassName('enhancedimage--focused-img'),
                d = (function (e) {
                    var i,
                        n = 0,
                        s = t.lazySizesConfig.throttleDelay,
                        o = t.lazySizesConfig.ricTimeout,
                        a = function () {
                            (i = !1), (n = Date.now()), e();
                        },
                        r =
                            t.requestIdleCallback && o > 49
                                ? function () {
                                      t.requestIdleCallback(a, { timeout: o }),
                                          o !== t.lazySizesConfig.ricTimeout &&
                                              (o =
                                                  t.lazySizesConfig.ricTimeout);
                                  }
                                : (function (t, e) {
                                      return e
                                          ? function () {
                                                c(t);
                                            }
                                          : function () {
                                                var e = this,
                                                    i = arguments;
                                                c(function () {
                                                    t.apply(e, i);
                                                });
                                            };
                                  })(function () {
                                      setTimeout(a);
                                  }, !0);
                    return function (t) {
                        var e;
                        (t = !0 === t) && (o = 33),
                            i ||
                                ((i = !0),
                                (e = s - (Date.now() - n)) < 0 && (e = 0),
                                t || e < 9 ? r() : setTimeout(r, e));
                    };
                })(function () {
                    for (var t = l.length, e = 0; e < t; e++)
                        if (l[e]) {
                            var i = l[e]._image;
                            i && i.updateFocusPoint();
                        }
                });
            t.addEventListener('resize', d, !0),
                e.addEventListener('lazyloaded', function (t) {
                    var e = t.target;
                    if (
                        f.test(e.nodeName) &&
                        e.classList.contains('enhancedimage--focused-img')
                    ) {
                        var i = t.target,
                            n = i.parentElement,
                            s = i._image;
                        if (!s) {
                            if (
                                ((s = new p(i)).addSource(
                                    i.getAttribute('srcset'),
                                    {
                                        x: parseFloat(
                                            i.getAttribute('data-focus-x')
                                        ),
                                        y: parseFloat(
                                            i.getAttribute('data-focus-y')
                                        )
                                    },
                                    {
                                        width: parseInt(
                                            i.getAttribute('data-width')
                                        ),
                                        height: parseInt(
                                            i.getAttribute('data-height')
                                        )
                                    }
                                ),
                                n && g.test(n.nodeName || ''))
                            )
                                for (
                                    var o = n.getElementsByTagName('source'),
                                        a = o.length,
                                        r = 0;
                                    r < a;
                                    r++
                                )
                                    if (o[r]) {
                                        var u = o[r];
                                        s.addSource(
                                            u.getAttribute('srcset'),
                                            {
                                                x: parseFloat(
                                                    u.getAttribute(
                                                        'data-focus-x'
                                                    )
                                                ),
                                                y: parseFloat(
                                                    u.getAttribute(
                                                        'data-focus-y'
                                                    )
                                                )
                                            },
                                            {
                                                width: parseInt(
                                                    u.getAttribute('data-width')
                                                ),
                                                height: parseInt(
                                                    u.getAttribute(
                                                        'data-height'
                                                    )
                                                )
                                            }
                                        );
                                    }
                            i._image = s;
                        }
                        s.updateFocusPoint();
                    }
                });
        })(window, document);
    }
]);
