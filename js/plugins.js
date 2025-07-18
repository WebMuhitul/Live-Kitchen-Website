// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/* ---------------------------------------------
 Bootstrap js
 --------------------------------------------- */
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=45aec3d6db17fe917b522f494a7b99c7)
 * Config saved to config.json and https://gist.github.com/45aec3d6db17fe917b522f494a7b99c7
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function(e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === s ? [] : s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function(e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target).closest(".btn");
        e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o, this
    };
    var n = function(i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function() {
            var o = t(this),
                n = e(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function(o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n),
                a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var v = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = window.SVGElement && i instanceof window.SVGElement,
            a = o ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            r = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, r, l, a)
    }, i.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = o, this
    };
    var n = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = o, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0,
                            this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var n = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);


/* ---------------------------------------------
 Owl Carousel JQuery
 --------------------------------------------- */
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            }
        else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);


/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.7.2
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(e) {
    "use strict";

    function t() {
        i = e.innerWidth || document.documentElement.clientWidth, a = e.innerHeight || document.documentElement.clientHeight
    }

    function n(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function() {
            n.call(e)
        })
    }

    function o(n) {
        e.requestAnimationFrame(function() {
            "scroll" !== n.type && t();
            for (var e = 0, o = g.length; e < o; e++) "scroll" !== n.type && (g[e].coverImage(), g[e].clipContainer()), g[e].onScroll()
        })
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), e.requestAnimationFrame || ! function() {
        for (var t = ["webkit", "moz"], n = 0; n < t.length && !e.requestAnimationFrame; ++n) {
            var o = t[n];
            e.requestAnimationFrame = e[o + "RequestAnimationFrame"], e.cancelAnimationFrame = e[o + "CancelAnimationFrame"] || e[o + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
            var i = 0;
            e.requestAnimationFrame = function(e) {
                var t = Date.now(),
                    n = Math.max(i + 16, t);
                return setTimeout(function() {
                    e(i = n)
                }, n - t)
            }, e.cancelAnimationFrame = clearTimeout
        }
    }();
    var i, a, r = function() {
            if (!e.getComputedStyle) return !1;
            var t, n = document.createElement("p"),
                o = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            (document.body || document.documentElement).insertBefore(n, null);
            for (var i in o) "undefined" != typeof n.style[i] && (n.style[i] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(o[i]));
            return (document.body || document.documentElement).removeChild(n), "undefined" != typeof t && t.length > 0 && "none" !== t
        }(),
        l = navigator.userAgent.toLowerCase().indexOf("android") > -1,
        s = /iPad|iPhone|iPod/.test(navigator.userAgent) && !e.MSStream,
        m = !!e.opera,
        c = /Edge\/\d+/.test(navigator.userAgent),
        p = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
        u = !!Function("/*@cc_on return document.documentMode===10@*/")(),
        d = document.all && !e.atob;
    t();
    var g = [],
        f = function() {
            function e(e, n) {
                var o, i = this;
                if (i.$item = e, i.defaults = {
                        type: "scroll",
                        speed: .5,
                        imgSrc: null,
                        imgWidth: null,
                        imgHeight: null,
                        enableTransform: !0,
                        elementInViewport: null,
                        zIndex: -100,
                        noAndroid: !1,
                        noIos: !0,
                        onScroll: null,
                        onInit: null,
                        onDestroy: null,
                        onCoverImage: null
                    }, o = JSON.parse(i.$item.getAttribute("data-jarallax") || "{}"), i.options = i.extend({}, i.defaults, o, n), !(l && i.options.noAndroid || s && i.options.noIos)) {
                    i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed)));
                    var a = i.options.elementInViewport;
                    a && "object" == typeof a && "undefined" != typeof a.length && (a = a[0]), !a instanceof Element && (a = null), i.options.elementInViewport = a, i.instanceID = t++, i.image = {
                        src: i.options.imgSrc || null,
                        $container: null,
                        $item: null,
                        width: i.options.imgWidth || null,
                        height: i.options.imgHeight || null,
                        useImgTag: s || l || m || p || u || c
                    }, i.initImg() && i.init()
                }
            }
            var t = 0;
            return e
        }();
    f.prototype.css = function(t, n) {
        if ("string" == typeof n) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(n) : t.style[n];
        n.transform && (n.WebkitTransform = n.MozTransform = n.transform);
        for (var o in n) t.style[o] = n[o];
        return t
    }, f.prototype.extend = function(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
            if (arguments[t])
                for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
        return e
    }, f.prototype.initImg = function() {
        var e = this;
        return null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)
    }, f.prototype.init = function() {
        function e() {
            t.coverImage(), t.clipContainer(), t.onScroll(!0), t.$item.setAttribute("data-jarallax-original-styles", t.$item.getAttribute("style")), t.options.onInit && t.options.onInit.call(t), setTimeout(function() {
                t.$item && t.css(t.$item, {
                    "background-image": "none",
                    "background-attachment": "scroll",
                    "background-size": "auto"
                })
            }, 0)
        }
        var t = this,
            n = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none"
            },
            o = {
                position: "fixed"
            };
        t.image.$container = document.createElement("div"), t.css(t.image.$container, n), t.css(t.image.$container, {
            visibility: "hidden",
            "z-index": t.options.zIndex
        }), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag && r && t.options.enableTransform ? (t.image.$item = document.createElement("img"), t.image.$item.setAttribute("src", t.image.src), o = t.extend({
            "max-width": "none"
        }, n, o)) : (t.image.$item = document.createElement("div"), o = t.extend({
            "background-position": "50% 50%",
            "background-size": "100% auto",
            "background-repeat": "no-repeat no-repeat",
            "background-image": 'url("' + t.image.src + '")'
        }, n, o)), d && (o.backgroundAttachment = "fixed"), t.parentWithTransform = 0;
        for (var i = t.$item; null !== i && i !== document && 0 === t.parentWithTransform;) {
            var a = t.css(i, "-webkit-transform") || t.css(i, "-moz-transform") || t.css(i, "transform");
            a && "none" !== a && (t.parentWithTransform = 1, t.css(t.image.$container, {
                transform: "translateX(0) translateY(0)"
            })), i = i.parentNode
        }
        t.css(t.image.$item, o), t.image.$container.appendChild(t.image.$item), t.image.width && t.image.height ? e() : t.getImageSize(t.image.src, function(n, o) {
            t.image.width = n, t.image.height = o, e()
        }), g.push(t)
    }, f.prototype.destroy = function() {
        for (var e = this, t = 0, n = g.length; t < n; t++)
            if (g[t].instanceID === e.instanceID) {
                g.splice(t, 1);
                break
            }
        var o = e.$item.getAttribute("data-jarallax-original-styles");
        e.$item.removeAttribute("data-jarallax-original-styles"), "null" === o ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", o), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
        for (var i in e) delete e[i]
    }, f.prototype.getImageSize = function(e, t) {
        if (e && t) {
            var n = new Image;
            n.onload = function() {
                t(n.width, n.height)
            }, n.src = e
        }
    }, f.prototype.clipContainer = function() {
        if (!d) {
            var e = this,
                t = e.image.$container.getBoundingClientRect(),
                n = t.width,
                o = t.height;
            if (!e.$clipStyles) {
                e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID);
                var i = document.head || document.getElementsByTagName("head")[0];
                i.appendChild(e.$clipStyles)
            }
            var a = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + n + "px " + o + "px 0);", "   clip: rect(0, " + n + "px, " + o + "px, 0);", "}"].join("\n");
            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a
        }
    }, f.prototype.coverImage = function() {
        var e = this;
        if (e.image.width && e.image.height) {
            var t = e.image.$container.getBoundingClientRect(),
                n = t.width,
                o = t.height,
                i = t.left,
                l = e.image.width,
                s = e.image.height,
                m = e.options.speed,
                c = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                p = 0,
                u = 0,
                d = o,
                g = 0,
                f = 0;
            c && (p = m * (o + a) / 2, (m < 0 || m > 1) && (p = m * Math.max(o, a) / 2), m < 0 || m > 1 ? d = Math.max(o, a) + 2 * Math.abs(p) : d += Math.abs(a - o) * (1 - m)), u = d * l / s, u < n && (u = n, d = u * s / l), e.bgPosVerticalCenter = 0, !(c && d < a) || r && e.options.enableTransform || (e.bgPosVerticalCenter = (a - d) / 2, d = a), c ? (g = i + (n - u) / 2, f = (a - d) / 2) : (g = (n - u) / 2, f = (o - d) / 2), r && e.options.enableTransform && e.parentWithTransform && (g -= i), e.parallaxScrollDistance = p, e.css(e.image.$item, {
                width: u + "px",
                height: d + "px",
                marginLeft: g + "px",
                marginTop: f + "px"
            }), e.options.onCoverImage && e.options.onCoverImage.call(e)
        }
    }, f.prototype.isVisible = function() {
        return this.isElementInViewport || !1
    }, f.prototype.onScroll = function(e) {
        var t = this;
        if (t.image.width && t.image.height) {
            var n = t.$item.getBoundingClientRect(),
                o = n.top,
                l = n.height,
                s = {
                    position: "absolute",
                    visibility: "visible",
                    backgroundPosition: "50% 50%"
                },
                m = n;
            if (t.options.elementInViewport && (m = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = m.bottom >= 0 && m.right >= 0 && m.top <= a && m.left <= i, e || t.isElementInViewport) {
                var c = Math.max(0, o),
                    p = Math.max(0, l + o),
                    u = Math.max(0, -o),
                    g = Math.max(0, o + l - a),
                    f = Math.max(0, l - (o + l - a)),
                    h = Math.max(0, -o + a - l),
                    y = 1 - 2 * (a - o) / (a + l),
                    v = 1;
                if (l < a ? v = 1 - (u || g) / l : p <= a ? v = p / a : f <= a && (v = f / a), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "translate3d(0, 0, 0)", s.opacity = v), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                    var x = 1;
                    t.options.speed < 0 ? x -= t.options.speed * v : x += t.options.speed * (1 - v), s.transform = "scale(" + x + ") translate3d(0, 0, 0)"
                }
                if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                    var b = t.parallaxScrollDistance * y;
                    r && t.options.enableTransform ? (t.parentWithTransform && (b -= o), s.transform = "translate3d(0, " + b + "px, 0)") : t.image.useImgTag ? s.top = b + "px" : (t.bgPosVerticalCenter && (b += t.bgPosVerticalCenter), s.backgroundPosition = "50% " + b + "px"), s.position = d ? "absolute" : "fixed"
                }
                t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
                    section: n,
                    beforeTop: c,
                    beforeTopEnd: p,
                    afterTop: u,
                    beforeBottom: g,
                    beforeBottomEnd: f,
                    afterBottom: h,
                    visiblePercent: v,
                    fromViewportCenter: y
                })
            }
        }
    }, n(e, "scroll", o), n(e, "resize", o), n(e, "orientationchange", o), n(e, "load", o);
    var h = function(e) {
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        var t, n = arguments[1],
            o = Array.prototype.slice.call(arguments, 2),
            i = e.length,
            a = 0;
        for (a; a < i; a++)
            if ("object" == typeof n || "undefined" == typeof n ? e[a].jarallax || (e[a].jarallax = new f(e[a], n)) : e[a].jarallax && (t = e[a].jarallax[n].apply(e[a].jarallax, o)), "undefined" != typeof t) return t;
        return e
    };
    h.constructor = f;
    var y = e.jarallax;
    if (e.jarallax = h, e.jarallax.noConflict = function() {
            return e.jarallax = y, this
        }, "undefined" != typeof jQuery) {
        var v = function() {
            var t = arguments || [];
            Array.prototype.unshift.call(t, this);
            var n = h.apply(e, t);
            return "object" != typeof n ? n : this
        };
        v.constructor = f;
        var x = jQuery.fn.jarallax;
        jQuery.fn.jarallax = v, jQuery.fn.jarallax.noConflict = function() {
            return jQuery.fn.jarallax = x, this
        }
    }
    n(e, "DOMContentLoaded", function() {
        h(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
    })
}(window);


/*!
 * Name    : Video Worker (wrapper for Youtube, Vimeo and Local videos)
 * Version : 1.2.1
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(e) {
    "use strict";

    function t(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
            if (arguments[t])
                for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
        return e
    }

    function i() {
        this._done = [], this._fail = []
    }

    function o(e, t, i) {
        e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, function() {
            i.call(e)
        })
    }
    i.prototype = {
        execute: function(e, t) {
            var i = e.length;
            for (t = Array.prototype.slice.call(t); i--;) e[i].apply(null, t)
        },
        resolve: function() {
            this.execute(this._done, arguments)
        },
        reject: function() {
            this.execute(this._fail, arguments)
        },
        done: function(e) {
            this._done.push(e)
        },
        fail: function(e) {
            this._fail.push(e)
        }
    };
    var a = function() {
        function e(e, o) {
            var a = this;
            a.url = e, a.options_default = {
                autoplay: 1,
                loop: 1,
                mute: 1,
                controls: 0,
                startTime: 0,
                endTime: 0
            }, a.options = t({}, a.options_default, o), a.videoID = a.parseURL(e), a.videoID && (a.ID = i++, a.loadAPI(), a.init())
        }
        var i = 0;
        return e
    }();
    a.prototype.parseURL = function(e) {
        function t(e) {
            var t = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
                i = e.match(t);
            return !(!i || 11 !== i[1].length) && i[1]
        }

        function i(e) {
            var t = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                i = e.match(t);
            return !(!i || !i[3]) && i[3]
        }

        function o(e) {
            for (var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), i = {}, o = 0, a = 0; a < t.length; a++) {
                var n = t[a].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                n && n[1] && n[2] && (i["ogv" === n[1] ? "ogg" : n[1]] = n[2], o = 1)
            }
            return !!o && i
        }
        var a = t(e),
            n = i(e),
            r = o(e);
        return a ? (this.type = "youtube", a) : n ? (this.type = "vimeo", n) : !!r && (this.type = "local", r)
    }, a.prototype.isValid = function() {
        return !!this.videoID
    }, a.prototype.on = function(e, t) {
        this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
    }, a.prototype.off = function(e, t) {
        if (this.userEventsList && this.userEventsList[e])
            if (t)
                for (var i = 0; i < this.userEventsList[e].length; i++) this.userEventsList[e][i] === t && (this.userEventsList[e][i] = !1);
            else delete this.userEventsList[e]
    }, a.prototype.fire = function(e) {
        var t = [].slice.call(arguments, 1);
        if (this.userEventsList && "undefined" != typeof this.userEventsList[e])
            for (var i in this.userEventsList[e]) this.userEventsList[e][i] && this.userEventsList[e][i].apply(this, t)
    };
    var n = 0;
    a.prototype.play = function(e) {
        var t = this;
        t.player && ("youtube" === t.type && t.player.playVideo && ("undefined" != typeof e && t.player.seekTo(e || 0), t.player.playVideo()), "vimeo" !== t.type || n || ("undefined" != typeof e ? (n = 1, t.player.setCurrentTime(e || 0).then(function() {
            t.player.play(), n = 0
        })) : t.player.play()), "local" === t.type && ("undefined" != typeof e && (t.player.currentTime = e), t.player.play()))
    }, a.prototype.pause = function() {
        this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
    }, a.prototype.getImageURL = function(e) {
        var t = this;
        if (t.videoImage) return void e(t.videoImage);
        if ("youtube" === t.type) {
            var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                o = 0,
                a = new Image;
            a.onload = function() {
                120 !== (this.naturalWidth || this.width) || o === i.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg", e(t.videoImage)) : (o++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg")
            }, a.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg"
        }
        if ("vimeo" === t.type) {
            var n = new XMLHttpRequest;
            n.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), n.onreadystatechange = function() {
                if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                    var i = JSON.parse(this.responseText);
                    t.videoImage = i[0].thumbnail_large, e(t.videoImage)
                }
            }, n.send(), n = null
        }
    }, a.prototype.getIframe = function(t) {
        var i = this;
        return i.$iframe ? void t(i.$iframe) : void i.onAPIready(function() {
            function a(e, t, i) {
                var o = document.createElement("source");
                o.src = t, o.type = i, e.appendChild(o)
            }
            var n;
            if (i.$iframe || (n = document.createElement("div"), n.style.display = "none"), "youtube" === i.type) {
                i.playerOptions = {}, i.playerOptions.videoId = i.videoID, i.playerOptions.width = e.innerWidth || document.documentElement.clientWidth, i.playerOptions.playerVars = {
                    autohide: 1,
                    rel: 0,
                    autoplay: 0
                }, i.options.controls || (i.playerOptions.playerVars.iv_load_policy = 3, i.playerOptions.playerVars.modestbranding = 1, i.playerOptions.playerVars.controls = 0, i.playerOptions.playerVars.showinfo = 0, i.playerOptions.playerVars.disablekb = 1);
                var r, p;
                i.playerOptions.events = {
                    onReady: function(e) {
                        i.options.mute && e.target.mute(), i.options.autoplay && i.play(i.options.startTime), i.fire("ready", e)
                    },
                    onStateChange: function(e) {
                        i.options.loop && e.data === YT.PlayerState.ENDED && i.play(i.options.startTime), r || e.data !== YT.PlayerState.PLAYING || (r = 1, i.fire("started", e)), e.data === YT.PlayerState.PLAYING && i.fire("play", e), e.data === YT.PlayerState.PAUSED && i.fire("pause", e), e.data === YT.PlayerState.ENDED && i.fire("end", e), i.options.endTime && (e.data === YT.PlayerState.PLAYING ? p = setInterval(function() {
                            i.options.endTime && i.player.getCurrentTime() >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                        }, 150) : clearInterval(p))
                    }
                };
                var s = !i.$iframe;
                if (s) {
                    var l = document.createElement("div");
                    l.setAttribute("id", i.playerID), n.appendChild(l), document.body.appendChild(n)
                }
                i.player = i.player || new e.YT.Player(i.playerID, i.playerOptions), s && (i.$iframe = document.getElementById(i.playerID))
            }
            if ("vimeo" === i.type) {
                i.playerOptions = "", i.playerOptions += "player_id=" + i.playerID, i.playerOptions += "&autopause=0", i.options.controls || (i.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), i.playerOptions += "&autoplay=0", i.playerOptions += "&loop=" + (i.options.loop ? 1 : 0), i.$iframe || (i.$iframe = document.createElement("iframe"), i.$iframe.setAttribute("id", i.playerID), i.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + i.videoID + "?" + i.playerOptions), i.$iframe.setAttribute("frameborder", "0"), n.appendChild(i.$iframe), document.body.appendChild(n)), i.player = i.player || new Vimeo.Player(i.$iframe), i.player.setVolume(i.options.mute ? 0 : 100), i.options.autoplay && i.play(i.options.startTime);
                var d;
                i.player.on("timeupdate", function(e) {
                    d || i.fire("started", e), d = 1, i.options.endTime && i.options.endTime && e.seconds >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                }), i.player.on("play", function(e) {
                    i.fire("play", e)
                }), i.player.on("pause", function(e) {
                    i.fire("pause", e)
                }), i.player.on("ended", function(e) {
                    i.fire("end", e)
                }), i.player.on("loaded", function(e) {
                    i.fire("ready", e)
                })
            }
            if ("local" === i.type) {
                if (!i.$iframe) {
                    i.$iframe = document.createElement("video"), i.options.mute && i.$iframe.setAttribute("muted", "on"), i.options.loop && i.$iframe.setAttribute("loop", "on"), i.$iframe.setAttribute("id", i.playerID), n.appendChild(i.$iframe), document.body.appendChild(n);
                    for (var u in i.videoID) a(i.$iframe, i.videoID[u], "video/" + u)
                }
                i.player = i.player || i.$iframe;
                var y;
                o(i.player, "playing", function(e) {
                    y || i.fire("started", e), y = 1
                }), o(i.player, "timeupdate", function() {
                    i.options.endTime && i.options.endTime && this.currentTime >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                }), o(i.player, "play", function(e) {
                    i.fire("play", e)
                }), o(i.player, "pause", function(e) {
                    i.fire("pause", e)
                }), o(i.player, "ended", function(e) {
                    i.fire("end", e)
                }), o(i.player, "loadedmetadata", function() {
                    i.fire("ready"), i.options.autoplay && i.play(i.options.startTime)
                })
            }
            t(i.$iframe)
        })
    }, a.prototype.init = function() {
        var e = this;
        e.playerID = "VideoWorker-" + e.ID
    };
    var r = 0,
        p = 0;
    a.prototype.loadAPI = function() {
        var t = this;
        if (!r || !p) {
            var i = "";
            if ("youtube" !== t.type || r || (r = 1, i = "//www.youtube.com/iframe_api"), "vimeo" !== t.type || p || (p = 1, i = "//player.vimeo.com/api/player.js"), i) {
                "file://" === e.location.origin && (i = "http:" + i);
                var o = document.createElement("script"),
                    a = document.getElementsByTagName("head")[0];
                o.src = i, a.appendChild(o), a = null, o = null
            }
        }
    };
    var s = 0,
        l = 0,
        d = new i,
        u = new i;
    a.prototype.onAPIready = function(t) {
        var i = this;
        if ("youtube" === i.type && ("undefined" != typeof YT && 0 !== YT.loaded || s ? "object" == typeof YT && 1 === YT.loaded ? t() : d.done(function() {
                t()
            }) : (s = 1, e.onYouTubeIframeAPIReady = function() {
                e.onYouTubeIframeAPIReady = null, d.resolve("done"), t()
            })), "vimeo" === i.type)
            if ("undefined" != typeof Vimeo || l) "undefined" != typeof Vimeo ? t() : u.done(function() {
                t()
            });
            else {
                l = 1;
                var o = setInterval(function() {
                    "undefined" != typeof Vimeo && (clearInterval(o), u.resolve("done"), t())
                }, 20)
            }
        "local" === i.type && t()
    }, e.VideoWorker = a
}(window),
/*!
 * Name    : Video Background Extension for Jarallax
 */
function() {
    "use strict";
    if ("undefined" != typeof jarallax) {
        var e = jarallax.constructor,
            t = e.prototype.init;
        e.prototype.init = function() {
            var e = this;
            t.apply(e), e.video && e.video.getIframe(function(t) {
                var i = t.parentNode;
                e.css(t, {
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    visibility: "visible",
                    zIndex: -1
                }), e.$video = t, e.image.$container.appendChild(t), i.parentNode.removeChild(i)
            })
        };
        var i = e.prototype.coverImage;
        e.prototype.coverImage = function() {
            var e = this;
            i.apply(e), e.video && "IFRAME" === e.image.$item.nodeName && e.css(e.image.$item, {
                height: e.image.$item.getBoundingClientRect().height + 400 + "px",
                marginTop: -200 + parseFloat(e.css(e.image.$item, "margin-top")) + "px"
            })
        };
        var o = e.prototype.initImg;
        e.prototype.initImg = function() {
            var e = this;
            if (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || !1), e.options.videoSrc) {
                var t = new VideoWorker(e.options.videoSrc, {
                    startTime: e.options.videoStartTime || 0,
                    endTime: e.options.videoEndTime || 0
                });
                if (t.isValid() && (e.image.useImgTag = !0, t.on("ready", function() {
                        var i = e.onScroll;
                        e.onScroll = function() {
                            i.apply(e), e.isVisible() ? t.play() : t.pause()
                        }
                    }), t.on("started", function() {
                        e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.options.imgWidth = e.image.width || 1280, e.image.height = e.options.imgHeight = e.image.height || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                    }), e.video = t, "local" !== t.type && t.getImageURL(function(t) {
                        e.image.src = t, e.init()
                    })), "local" !== t.type) return !1
            }
            return o.apply(e)
        };
        var a = e.prototype.destroy;
        e.prototype.destroy = function() {
            var e = this;
            a.apply(e)
        }
    }
}();



//================================================================================
// [pg-calendar]
// version: 1.4.3
// update: 2017.02.02
//================================================================================

var ComponentName = "pignoseCalendar",
    ComponentVersion = "1.4.2";
window[ComponentName] = {
    VERSION: ComponentVersion
};
var DateManager = function() {
        var a = {},
            b = function(a) {
                this.year = parseInt(a.format("YYYY"), 10), this.month = parseInt(a.format("MM"), 10), this.prevMonth = parseInt(a.clone().add(-1, "months").format("MM"), 10), this.nextMonth = parseInt(a.clone().add(1, "months").format("MM"), 10), this.day = parseInt(a.format("DD"), 10), this.firstDay = 1, this.lastDay = parseInt(a.clone().endOf("month").format("DD"), 10), this.weekDay = a.weekday(), this.date = a
            };
        return b.prototype.toString = function() {
            return this.date.format("YYYY-MM-DD")
        }, b.Convert = function(b, c, d) {
            var e = Helper.Format("{0}-{1}-{2}", b, c, d);
            return "undefined" == typeof a[e] && (a[e] = moment(e, "YYYY-MM-DD")), a[e]
        }, b
    }(),
    Helper = function() {
        var a = {},
            b = {},
            c = {},
            d = /[A-Z]/,
            e = function() {};
        return e.Format = function(b) {
            if ("undefined" == typeof b || "" === b || arguments.length <= 1) return "";
            var c = Array.prototype.slice.call(arguments, 1),
                d = b + c.join("");
            if ("undefined" != typeof a[d]) return a[d];
            for (var e = c.length, f = 0; f < e; f++) {
                var g = c[f];
                b = b.replace(new RegExp("((?!\\\\)?\\{" + f + "(?!\\\\)?\\})", "g"), g)
            }
            return a[d] = b, b
        }, e.GetClass = function(a) {
            var c = ComponentName + a;
            if ("undefined" != typeof b[c]) return b[c];
            for (var e, f = a.split(""), g = [], h = f.length, i = 0, j = 0; i < h; i++) {
                var k = f[i];
                "string" == typeof k && (d.test(k) === !0 && (g[j++] = "-", k = k.toString().toLowerCase()), g[j++] = k)
            }
            return e = g.join(""), b[c] = e, e
        }, e.GetSubClass = function(a) {
            return "undefined" == typeof c[a] && (c[a] = e.GetClass(e.Format("{0}{1}", ComponentName, a))), c[a]
        }, e
    }();
"undefined" == typeof Array.prototype.filter && (Array.prototype.filter = function(a) {
    "use strict";
    if (null == this) throw new TypeError;
    var b = Object(this),
        c = b.length >>> 0;
    if ("function" != typeof a) return [];
    for (var d = [], e = arguments[1], f = 0; f < c; f++)
        if (f in b) {
            var g = b[f];
            a.call(e, g, f, b) && d.push(g)
        }
    return d
});
var ComponentClass = Helper.GetClass(ComponentName),
    ComponentPreference = {
        supports: {
            themes: ["light", "dark"]
        }
    };
! function(a) {
    "use strict";
    var b = a(window),
        c = (a(document), Helper.GetSubClass("Top")),
        d = Helper.GetSubClass("Header"),
        e = Helper.GetSubClass("Body"),
        f = Helper.GetSubClass("Button"),
        g = {
            supports: ["en", "ko", "fr", "ch", "de", "jp", "pt", "da", "pl", "es"],
            weeks: {
                en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                ko: ["일", "월", "화", "수", "목", "금", "토"],
                fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                ch: ["日", "一", "二", "三", "四", "五", "六"],
                de: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
                jp: ["日", "月", "火", "水", "木", "金", "土"],
                pt: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                da: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                pl: ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"],
                es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
            },
            monthsLong: {
                en: ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"],
                ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                ch: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                jp: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                pt: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                da: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
                pl: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            },
            months: {
                en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                fr: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"],
                ch: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                de: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                jp: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                pt: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                da: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                pl: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
                es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"]
            }
        };
    a.fn[ComponentName] = function(h) {
        var i = {
            init: function(h) {
                var i = this;
                this.settings = a.extend({
                    lang: "en",
                    theme: "light",
                    date: moment(),
                    format: "YYYY-MM-DD",
                    classOnDays: [],
                    enabledDates: [],
                    disabledDates: [],
                    disabledWeekdays: [],
                    disabledRanges: [],
                    weeks: g.weeks.en,
                    monthsLong: g.monthsLong.en,
                    months: g.months.en,
                    pickWeeks: !1,
                    initialize: !0,
                    multiple: !1,
                    toggle: !1,
                    reverse: !1,
                    buttons: !1,
                    modal: !1,
                    minDate: null,
                    maxDate: null,
                    select: null,
                    apply: null
                }, h), "en" !== this.settings.lang && a.inArray(this.settings.lang, g.supports) !== -1 && (this.settings.weeks = g.weeks[this.settings.lang], this.settings.monthsLong = g.monthsLong[this.settings.lang], this.settings.months = g.months[this.settings.lang]), "light" !== this.settings.theme && a.inArray(this.settings.theme, ComponentPreference.supports.themes) === -1 && (this.settings.theme = "light"), this.settings.pickWeeks === !0 && (this.settings.multiple === !1 ? console.error("You must give true at settings.multiple options on PIGNOSE-Calendar for using in pickWeeks option.") : this.settings.toggle === !0 && console.error("You must give false at settings.toggle options on PIGNOSE-Calendar for using in pickWeeks option.")), this.global = {
                    calendarHtml: Helper.Format('<div class="{0} {0}-{4}">\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="{1}">\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="{1}-nav {1}-prev">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="{1}-icon"></span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="{1}-value"></span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="{1}-date">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="{1}-month"></p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="{1}-year"></h3>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="{1}-nav {1}-next">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="{1}-value"></span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="{1}-icon"></span>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="{2}"></div>\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="{3}"></div>\t\t\t\t\t\t\t\t\t\t\t\t</div>', ComponentClass, c, d, e, i.settings.theme),
                    calendarButtonsHtml: Helper.Format('<div class="{0}-group">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="{0} {0}-cancel">Cancel</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="{0} {0}-apply">OK</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>', f)
                };
                var j = Helper.GetSubClass("UnitRange"),
                    k = Helper.GetSubClass("UnitRangeFirst"),
                    l = Helper.GetSubClass("UnitRangeLast"),
                    m = Helper.GetSubClass("UnitActive"),
                    n = [Helper.GetSubClass("UnitFirstActive"), Helper.GetSubClass("UnitSecondActive")],
                    o = Helper.GetSubClass("UnitToggleActive"),
                    p = Helper.GetSubClass("UnitToggleInactive");
                return this.each(function() {
                    var h, q = a(this),
                        r = q,
                        s = q,
                        t = {
                            initialize: null,
                            calendar: a(i.global.calendarHtml),
                            input: q.is("input"),
                            renderer: null,
                            current: [null, null],
                            storage: {
                                activeDates: []
                            },
                            dateManager: new DateManager(i.settings.date),
                            calendarWrapperHtml: Helper.Format('<div class="{0}"></div>', Helper.GetSubClass("Wrapper")),
                            calendarWrapperOverlayHtml: Helper.Format('<div class="{0}"></div>', Helper.GetSubClass("WrapperOverlay")),
                            context: i
                        };
                    i.settings.initialize === !0 && (t.initialize = t.current[0] = t.dateManager.date.clone()), this.local = t, i.settings.reverse === !0 ? t.calendar.addClass(Helper.GetSubClass("Reverse")) : t.calendar.addClass(Helper.GetSubClass("Default")), h = i.settings.weeks.length;
                    for (var u = 0; u < h; u++) {
                        var v = i.settings.weeks[u];
                        if ("string" == typeof v) {
                            v = v.toUpperCase();
                            var w = a(Helper.Format('<div class="{0} {0}-{2}">{1}</div>', Helper.GetSubClass("Week"), v, g.weeks.en[u].toLowerCase()));
                            w.appendTo(t.calendar.find("." + d))
                        }
                    }
                    if (i.settings.buttons === !0) {
                        var x = a(i.global.calendarButtonsHtml);
                        x.appendTo(t.calendar)
                    }
                    if (t.input === !0 || i.settings.modal === !0) {
                        var y = Helper.GetSubClass("WrapperActive"),
                            z = Helper.GetSubClass("WrapperOverlayActive"),
                            A = a("." + Helper.GetSubClass("WrapperOverlay"));
                        A.length < 1 && (A = a(t.calendarWrapperOverlayHtml), A.appendTo("body").hide()), s = a(t.calendarWrapperHtml), s.appendTo("body"), s.bind("click", function(a) {
                            a.stopPropagation()
                        }), q.bind("click", function(a) {
                            a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), setTimeout(function() {
                                A.show(), s.show(), b.unbind("resize." + ComponentClass).bind("resize." + ComponentClass, function() {
                                    s.css({
                                        marginLeft: -s.outerWidth() / 2,
                                        marginTop: -s.outerHeight() / 2
                                    })
                                }).triggerHandler("resize." + ComponentClass), r[ComponentName]("set", q.val()), setTimeout(function() {
                                    A.addClass(z), s.addClass(y)
                                }, 25)
                            }, 25)
                        }).bind("focus", function(b) {
                            var c = a(this);
                            c.blur()
                        }), A.bind("click." + ComponentClass, function() {
                            s.trigger("cancel." + ComponentClass)
                        }), s.unbind("cancel." + ComponentClass + " apply." + ComponentClass).bind("cancel." + ComponentClass + " apply." + ComponentClass, function() {
                            A.removeClass(z).hide(), s.removeClass(y).hide()
                        })
                    }
                    var B = function() {
                        if (null === t.current[0] || null === t.current[1]) return !1;
                        var a = t.current[0].format("YYYY-MM-DD"),
                            b = t.current[1].format("YYYY-MM-DD"),
                            c = moment(Math.max(t.current[0].valueOf(), t.dateManager.date.clone().startOf("month").valueOf())),
                            d = moment(Math.min(t.current[1].valueOf(), t.dateManager.date.clone().endOf("month").valueOf())),
                            e = c.format("YYYY-MM-DD") !== a,
                            f = d.format("YYYY-MM-DD") !== b;
                        e === !1 && c.add(1, "days"), f === !1 && d.add(-1, "days");
                        for (var g = c.format("YYYY-MM-DD"), h = d.format("YYYY-MM-DD"); c.format("YYYY-MM-DD") <= d.format("YYYY-MM-DD"); c.add(1, "days")) {
                            var i = c.format("YYYY-MM-DD"),
                                m = t.calendar.find(Helper.Format('.{0}[data-date="{1}"]', Helper.GetSubClass("Unit"), i)).addClass(j);
                            i === g && m.addClass(k), i === h && m.addClass(l)
                        }
                    };
                    t.renderer = function() {
                        t.calendar.appendTo(s.empty()), t.calendar.find("." + c + "-year").text(t.dateManager.year), t.calendar.find("." + c + "-month").text(i.settings.monthsLong[t.dateManager.month - 1]), t.calendar.find(Helper.Format(".{0}-prev .{0}-value", c)).text(i.settings.months[t.dateManager.prevMonth - 1].toUpperCase()), t.calendar.find(Helper.Format(".{0}-next .{0}-value", c)).text(i.settings.months[t.dateManager.nextMonth - 1].toUpperCase()), i.settings.buttons === !0 && x.find("." + f).bind("click", function(b) {
                            b.preventDefault(), b.stopPropagation();
                            var c = a(this);
                            if (c.hasClass(f + "-apply")) {
                                r.trigger("apply." + ComponentName, t);
                                var d = "";
                                if (i.settings.toggle === !0) d = t.storage.activeDates.join(", ");
                                else if (i.settings.multiple === !0) {
                                    var e = [];
                                    null !== t.current[0] && e.push(t.current[0].format(i.settings.format)), null !== t.current[1] && e.push(t.current[1].format(i.settings.format)), d = e.join(" ~ ")
                                } else d = null === t.current[0] ? "" : moment(t.current[0]).format(i.settings.format);
                                t.input === !0 && r.val(d).triggerHandler("change"), "function" == typeof i.settings.apply && i.settings.apply.call(r, d), s.triggerHandler("apply." + ComponentClass)
                            } else s.triggerHandler("cancel." + ComponentClass)
                        });
                        for (var b = t.calendar.find("." + e).empty(), d = DateManager.Convert(t.dateManager.year, t.dateManager.month, t.dateManager.firstDay), h = d.weekday(), q = [], u = [null === t.current[0] ? null : t.current[0].format("YYYY-MM-DD"), null === t.current[1] ? null : t.current[1].format("YYYY-MM-DD")], v = null === i.settings.minDate ? null : moment(i.settings.minDate), w = null === i.settings.maxDate ? null : moment(i.settings.maxDate), y = 0; y < h; y++) {
                            var z = a(Helper.Format('<div class="{0} {0}-{1}"></div>', Helper.GetSubClass("Unit"), g.weeks.en[y].toLowerCase()));
                            q.push(z)
                        }
                        for (var y = t.dateManager.firstDay; y <= t.dateManager.lastDay; y++) {
                            var A = DateManager.Convert(t.dateManager.year, t.dateManager.month, y),
                                C = A.format("YYYY-MM-DD"),
                                z = a(Helper.Format('<div class="{0} {0}-date {0}-{3}" data-date="{1}"><a href="#">{2}</a></div>', Helper.GetSubClass("Unit"), A.format("YYYY-MM-DD"), y, g.weeks.en[A.weekday()].toLowerCase()));
                            if (i.settings.enabledDates.length > 0) a.inArray(C, i.settings.enabledDates) === -1 && z.addClass(Helper.GetSubClass("UnitDisabled"));
                            else if (i.settings.disabledWeekdays.length > 0 && a.inArray(A.weekday(), i.settings.disabledWeekdays) !== -1) z.addClass(Helper.GetSubClass("UnitDisabled")).addClass(Helper.GetSubClass("UnitDisabledWeekdays"));
                            else if (null !== v && v.diff(A) > 0 || null !== w && w.diff(A) < 0) z.addClass(Helper.GetSubClass("UnitDisabled")).addClass(Helper.GetSubClass("UnitDisabledRange"));
                            else if (a.inArray(C, i.settings.disabledDates) !== -1) z.addClass(Helper.GetSubClass("UnitDisabled"));
                            else if (i.settings.disabledRanges.length > 0)
                                for (var D = i.settings.disabledRanges.length, E = 0; E < D; E++) {
                                    var F = i.settings.disabledRanges[E];
                                    F.length;
                                    if (A.diff(moment(F[0])) >= 0 && A.diff(moment(F[1])) <= 0) {
                                        z.addClass(Helper.GetSubClass("UnitDisabled")).addClass(Helper.GetSubClass("UnitDisabledRange")).addClass(Helper.GetSubClass("UnitDisabledMultipleRange"));
                                        break
                                    }
                                }
                            i.settings.toggle === !0 ? a.inArray(C, t.storage.activeDates) !== -1 && t.storage.activeDates.length > 0 ? z.addClass(o) : z.addClass(p) : z.hasClass(Helper.GetSubClass("UnitDisabled")) === !1 && (i.settings.multiple === !0 ? (null !== u[0] && C === u[0] && z.addClass(m).addClass(n[0]), null !== u[1] && C === u[1] && z.addClass(m).addClass(n[1])) : null !== u[0] && C === u[0] && a.inArray(u[0], i.settings.disabledDates) === -1 && (i.settings.enabledDates.length < 1 || a.inArray(u[0], i.settings.enabledDates) !== -1) && z.addClass(m).addClass(n[0])), q.push(z), z.bind("click", function(b) {
                                b.preventDefault(), b.stopPropagation();
                                var c = a(this),
                                    d = 0,
                                    e = c.data("date");
                                if (c.hasClass(Helper.GetSubClass("UnitDisabled"))) return !1;
                                if (t.input === !0 && i.settings.multiple === !1 && i.settings.buttons === !1) return r.val(moment(e).format(i.settings.format)), s.triggerHandler("apply." + ComponentClass), !1;
                                if (null !== t.initialize && t.initialize.format("YYYY-MM-DD") === e && i.settings.toggle === !1);
                                else if (i.settings.toggle === !0) {
                                    var f = t.storage.activeDates.filter(function(a, b) {
                                        return a === e
                                    });
                                    if (t.current[d] = moment(e), f.length < 1) t.storage.activeDates.push(e), c.addClass(o).removeClass(p);
                                    else {
                                        for (var g = 0, h = 0; h < t.storage.activeDates.length; h++) {
                                            var q = t.storage.activeDates[h];
                                            if (e === q) {
                                                g = h;
                                                break
                                            }
                                        }
                                        t.storage.activeDates.splice(g, 1), c.removeClass(o).addClass(p)
                                    }
                                } else if (c.hasClass(m) === !0 && i.settings.pickWeeks === !1) i.settings.multiple === !0 && (c.hasClass(n[0]) ? d = 0 : n[1] && (d = 1)), c.removeClass(m).removeClass(n[d]), t.current[d] = null;
                                else {
                                    if (i.settings.pickWeeks === !0)
                                        if (c.hasClass(m) === !0 || c.hasClass(j) === !0) {
                                            for (var u = 0; u < 2; u++) t.calendar.find("." + m + "." + n[u]).removeClass(m).removeClass(n[u]);
                                            t.current[0] = null, t.current[1] = null
                                        } else {
                                            t.current[0] = moment(e).startOf("week"), t.current[1] = moment(e).endOf("week");
                                            for (var u = 0; u < 2; u++) t.calendar.find("." + m + "." + n[u]).removeClass(m).removeClass(n[u]), t.calendar.find(Helper.Format('.{0}[data-date="{1}"]', Helper.GetSubClass("Unit"), t.current[u].format("YYYY-MM-DD"))).addClass(m).addClass(n[u])
                                        }
                                    else i.settings.multiple === !0 && (null === t.current[0] ? d = 0 : null === t.current[1] ? d = 1 : (d = 0, t.current[1] = null, t.calendar.find("." + m + "." + n[1]).removeClass(m).removeClass(n[1]))), t.calendar.find("." + m + "." + n[d]).removeClass(m).removeClass(n[d]), c.addClass(m).addClass(n[d]), t.current[d] = moment(e);
                                    if (i.settings.multiple === !0 && t.calendar.find("." + j).removeClass(j).removeClass(k).removeClass(l), i.settings.multiple === !0 && null !== t.current[0] && null !== t.current[1]) {
                                        if (t.current[0].diff(t.current[1]) > 0) {
                                            var v = t.current[0];
                                            t.current[0] = t.current[1], t.current[1] = v, v = null, t.calendar.find("." + m).each(function() {
                                                var b = a(this);
                                                for (var c in n) {
                                                    var d = n[c];
                                                    b.toggleClass(d)
                                                }
                                            })
                                        }
                                        if (t.input === !0 && i.settings.buttons === !1) {
                                            var w = [];
                                            null !== t.current[0] && w.push(t.current[0].format(i.settings.format)), null !== t.current[1] && w.push(t.current[1].format(i.settings.format)), r.val(w.join(", ")), s.trigger("apply." + ComponentClass)
                                        }
                                        B.call()
                                    }
                                }
                                t.initialize = null, "function" == typeof i.settings.select && i.settings.select.call(c, t.current, t)
                            })
                        }
                        for (var G = DateManager.Convert(t.dateManager.year, t.dateManager.month, t.dateManager.lastDay), H = G.weekday(), y = H + 1; q.length <= 35; y++) {
                            var z = a(Helper.Format('<div class="{0} {0}-{1}"></div>', Helper.GetSubClass("Unit"), g.weeks.en[y % 7].toLowerCase()));
                            q.push(z)
                        }
                        for (var I = null, J = q.length, y = 0; y < J; y++) {
                            var K = q[y];
                            (y % 7 == 0 || y + 1 >= J) && (null !== I && I.appendTo(b), y + 1 < J && (I = a(Helper.Format('<div class="{0}"></div>', Helper.GetSubClass("Row"))))), I.append(K)
                        }
                        t.calendar.find("." + c + "-nav").bind("click", function(b) {
                            b.preventDefault(), b.stopPropagation();
                            var d = a(this);
                            d.hasClass(c + "-prev") ? (t.dateManager = new DateManager(t.dateManager.date.clone().add(-1, "months")), t.renderer.call()) : d.hasClass(c + "-next") && (t.dateManager = new DateManager(t.dateManager.date.clone().add(1, "months")), t.renderer.call())
                        }), i.settings.multiple === !0 && (t.calendar.find("." + j).removeClass(j).removeClass(k).removeClass(l), B.call())
                    }, t.renderer.call(), q[0][ComponentName] = t
                })
            },
            set: function(b) {
                if ("undefined" != typeof b && null !== b && "" !== b) {
                    var c = b.split("~").map(function(b) {
                        var c = a.trim(b);
                        return "null" === c || "" === c ? null : c
                    });
                    this.each(function() {
                        var b = a(this),
                            d = b[0][ComponentName],
                            e = d.context,
                            f = ["undefined" == typeof c[0] || null === c[0] ? null : moment(c[0], e.settings.format), "undefined" == typeof c[1] || null === c[1] ? null : moment(c[1], e.settings.format)];
                        if (d.dateManager = new DateManager(f[0]), e.settings.pickWeeks === !0 && null !== f[0]) {
                            var g = f[0];
                            f[0] = g.clone().startOf("week"), f[1] = g.clone().endOf("week"), console.log(f)
                        }
                        e.settings.toggle === !0 ? d.storage.activeDates = c : d.current = f, d.renderer.call()
                    })
                }
            },
            select: function(b) {
                this.each(function() {
                    var c = this.local,
                        d = c.dateManager,
                        e = Helper.Format("{0}-{1}-{2}", d.year, d.month, b);
                    a(this).find(Helper.Format('.{0}[data-date="{1}"]', Helper.GetSubClass("Unit"), e)).triggerHandler("click")
                })
            }
        };
        return i[h] ? i[h].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof h && h ? void console.error("Argument error are occured.") : i.init.apply(this, arguments)
    }
}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
/* ---------------------------------------------
 Isotope Pluging
 --------------------------------------------- */
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function(a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function(a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function(a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function() {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function() {
                b = !0, a()
            }), this.once("hideComplete", function() {
                c = !0, a()
            }), this.once("revealComplete", function() {
                d = !0, a()
            })
        }, m.prototype._filter = function(a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function(a) {
            return i && this.options.isJQueryFiltering ? function(b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function(a) {
                    return a && h(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function(a) {
                return parseInt(a, 10)
            },
            parseFloat: function(a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });
/* ---------------------------------------------
 Masonry PACKAGED
 --------------------------------------------- */
/*!
 * Masonry PACKAGED v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var u = a.data(h, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var c = d.apply(u, n);
                o = void 0 === o ? c : o
            }), void 0 !== o ? o : t
        }

        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || [];
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, c = 0; u > c; c++) {
                var l = h[c],
                    f = r[l],
                    m = parseFloat(f);
                a[l] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                y = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                E = a.borderTopWidth + a.borderBottomWidth,
                z = d && s,
                b = t(r.width);
            b !== !1 && (a.width = b + (z ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (z ? 0 : g + E)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + E), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = h.length,
        d = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var r = i.toDashed(o),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                h = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(h)),
                d = s + "-options",
                c = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var h = new e(t, i);
                c && c.data(t, o, h)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EvEmitter, t.getSize))
}(window, function(t, e, i) {
    "use strict";

    function n(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function r(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        a = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        h = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[a],
        d = [h, a, a + "Duration", a + "Property"],
        c = o.prototype = Object.create(e.prototype);
    c.constructor = o, c._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, c.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = d[i] || i;
            e[n] = t[i]
        }
    }, c.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = this.layout.size,
            s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
    }, c.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            c = this.position.y + t[h];
        e[u] = this.getYValue(c), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, c.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, c.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, c._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            r = parseInt(e, 10),
            s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            h = e - n,
            u = {};
        u.transform = this.getTranslate(a, h), this.transition({
            to: u,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, c.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, c.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, c._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, c._transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + r(d.transform || "transform");
    c.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: l,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(u, this, !1))
    }, c.transition = o.prototype[a ? "_transition" : "_nonTransition"], c.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, c.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    c.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                var o = e.onEnd[i];
                o.call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, c.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, c._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var m = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return c.removeTransitionStyles = function() {
        this.css(m)
    }, c.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, c.remove = function() {
        return a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, c.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, c.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, c.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, c.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, c.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, c.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++d;
        this.element.outlayerGUID = o, c[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }
    var a = t.console,
        h = t.jQuery,
        u = function() {},
        d = 0,
        c = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var l = r.prototype;
    return n.extend(l, e.prototype), l.option = function(t) {
        n.extend(this.options, t)
    }, l._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, l._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, l.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, l._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);
            n.push(s)
        }
        return n
    }, l._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, l.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, l.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, l._init = l.layout, l._resetLayout = function() {
        this.getSize()
    }, l.getSize = function() {
        this.size = i(this.element)
    }, l._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, l.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, l._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, l._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, l._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, l._processLayoutQueue = function(t) {
        t.forEach(function(t) {
            this._positionItem(t.item, t.x, t.y, t.isInstant)
        }, this)
    }, l._positionItem = function(t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, l._postLayout = function() {
        this.resizeContainer()
    }, l.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, l._getContainerSize = u, l._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, l._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, l.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), h)
            if (this.$element = this.$element || h(this.element), e) {
                var o = h.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, l.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, l.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, l.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, l.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, l._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, l._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, l._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, l._manageStamp = u, l._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return r
    }, l.handleEvent = n.handleEvent, l.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, l.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, l.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), l.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, l.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, l.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, l.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, l.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach(function(t) {
            t.reveal()
        })
    }, l.hide = function(t) {
        this._emitCompleteOnItems("hide", t), t && t.length && t.forEach(function(t) {
            t.hide()
        })
    }, l.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, l.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, l.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, l.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, l.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, l.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    }, r.Item = o, r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                x: this.columnWidth * s,
                y: r
            }, h = r + t.size.outerHeight, u = this.cols + 1 - o.length, d = 0; u > d; d++) this.colYs[s + d] = h;
        return a
    }, i.prototype._getColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, c = a; h >= c; c++) this.colYs[c] = Math.max(d, this.colYs[c])
    }, i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
});
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }

    function o(t, e, r) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(t, e, r)
    }

    function r(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var h = t.jQuery,
        a = t.console;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/* ---------------------------------------------
 jQuery FormChimp
 --------------------------------------------- */
/* 
    jQuery FormChimp - v1.2.1
    A customizable MailChimp ajax plugin for jQuery
    Fabio Quarantini - @febba
    http://www.fabioquarantini.com/formchimp/
*/
;
(function($, window, document, undefined) {
    $.fn.formchimp = function(settings) {
        var $form = $(this);
        var $body = $('body');
        var actionUrl = $form.attr('action').replace('/post?', '/post-json?').concat('&c=?');
        var $button = $form.find('[type="submit"]');
        var defaults = {
            'appendElement': $form,
            'buttonSelector': $button,
            'buttonText': '',
            'debug': false,
            'errorMessage': '',
            'onMailChimpSuccess': function() {},
            'onMailChimpError': function() {},
            'responseClass': "mc-response",
            'successMessage': '',
            'url': actionUrl,
        };
        var originalButtonText = defaults.buttonSelector.text();
        $.extend(defaults, settings);
        $($form).on('submit', function(event) {
            event.preventDefault();
            $body.removeClass('mc-success mc-error').addClass('mc-loading');
            if ($("." + defaults.responseClass).length === 0) {
                $responseContainer = $('<div/>').addClass(defaults.responseClass).appendTo(defaults.appendElement);
            } else {
                $responseContainer.html('');
            }
            $.ajax({
                url: defaults.url,
                data: $form.serialize(),
                dataType: 'jsonp'
            }).done(function(data) {
                if (defaults.debug) {
                    console.log(JSON.stringify(data));
                }
                var responseMessage = data.msg;
                if (!isNaN(responseMessage.charAt(0)) && responseMessage.charAt(2) === '-') {
                    responseMessage = responseMessage.substring(3);
                }
                $body.addClass('mc-' + data.result).removeClass('mc-loading');
                if (data.result === 'success') {
                    if (defaults.successMessage !== '') {
                        responseMessage = defaults.successMessage;
                    }
                    if (defaults.buttonText !== '') {
                        defaults.buttonSelector.text(defaults.buttonText);
                    }
                    $(document).trigger('mailChimpSuccess');
                    defaults.onMailChimpSuccess.call();
                } else {
                    if (defaults.errorMessage !== '') {
                        responseMessage = defaults.errorMessage;
                    }
                    if (defaults.buttonText !== '') {
                        defaults.buttonSelector.text(originalButtonText);
                    }
                    $(document).trigger('mailChimpError');
                    defaults.onMailChimpError.call();
                }
                $responseContainer.html(responseMessage);
            });
        });
    };
})(jQuery, window, document);
/**
 * SyoTimer v.1.1.0 | under MIT licence
 * https://github.com/mrfratello/SyoTimer#readme
 */
! function(e) {
    const t = 86400,
        i = 3600,
        o = 60;
    var n = {
        rus: {
            second: ["секунда", "секунды", "секунд"],
            minute: ["минута", "минуты", "минут"],
            hour: ["час", "часа", "часов"],
            day: ["день", "дня", "дней"]
        },
        eng: {
            second: ["second", "seconds"],
            minute: ["minute", "minutes"],
            hour: ["hour", "hours"],
            day: ["day", "days"]
        }
    };
    const r = {
        year: 2014,
        month: 7,
        day: 31,
        hour: 0,
        minute: 0,
        second: 0,
        timeZone: "local",
        ignoreTransferTime: !1,
        periodic: !1,
        periodInterval: 7,
        periodUnit: "d",
        dayVisible: !0,
        dubleNumbers: !0,
        doubleNumbers: !0,
        effectType: "none",
        lang: "eng",
        headTitle: "",
        footTitle: "",
        afterDeadline: function(e) {
            e.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>')
        }
    };
    var a = {
            init: function(t) {
                var i = e.extend({}, r, t || {});
                return t.hasOwnProperty("dubleNumbers") && (i.doubleNumbers = t.dubleNumbers), this.each(function() {
                    var t = e(this);
                    t.data("syotimer-options", i), a._render.apply(this, []), a._perSecondHandler.apply(this, [])
                })
            },
            _render: function() {
                var t, i = e(this),
                    o = i.data("syotimer-options"),
                    n = o.dayVisible ? s.getCellDom("day", "0") : "";
                t = '<div class="timer-head-block">' + o.headTitle + '</div><div class="timer-body-block">' + n + s.getCellDom("hour") + s.getCellDom("minute") + s.getCellDom("second") + '</div><div class="timer-foot-block">' + o.footTitle + "</div>", i.addClass("syotimer").addClass("timer").html(t);
                var r = e(".timer-head-block", i),
                    a = e(".timer-body-block", i),
                    d = e(".timer-foot-block", i),
                    l = {
                        headBlock: r,
                        bodyBlock: a,
                        footBlock: d
                    };
                i.data("syotimer-blocks", l)
            },
            _perSecondHandler: function() {
                var t = e(this),
                    i = t.data("syotimer-options");
                e(".second .tab-val", t).css("opacity", 1);
                var o = new Date,
                    n = new Date(i.year, i.month - 1, i.day, i.hour, i.minute, i.second),
                    r = s.getDifferenceWithTimezone(o, n, i),
                    d = s.getSecondsToDeadLine(r, i);
                d >= 0 ? (a._refreshUnitsDom.apply(this, [d]), a._applyEffectSwitch.apply(this, [i.effectType])) : (t = e.extend(t, t.data("syotimer-blocks")), i.afterDeadline(t))
            },
            _refreshUnitsDom: function(t) {
                var i = e(this),
                    o = i.data("syotimer-options"),
                    r = ["day", "hour", "minute", "second"],
                    a = s.getUnitsToDeadLine(t),
                    d = n[o.lang];
                o.dayVisible || (a.hour += 24 * a.day, r.splice(0, 1));
                for (var l = 0; l < r.length; l++) {
                    var c = r[l],
                        u = "." + c;
                    e(u + " .tab-val", i).html(s.format2(a[c], "day" != c && o.doubleNumbers)), e(u + " .tab-unit", i).html(s.definitionOfNumerals(a[c], d[c], o.lang))
                }
            },
            _applyEffectSwitch: function(t) {
                var i = this,
                    o = e(i);
                switch (t) {
                    case "none":
                        setTimeout(function() {
                            a._perSecondHandler.apply(i, [])
                        }, 1e3);
                        break;
                    case "opacity":
                        e(".second .tab-val", o).animate({
                            opacity: .1
                        }, 1e3, "linear", function() {
                            a._perSecondHandler.apply(i, [])
                        })
                }
            }
        },
        s = {
            getCellDom: function(e, t) {
                return e = e || "", t = t || "00", '<div class="table-cell ' + e + '"><div class="tab-val">' + t + '</div><div class="tab-metr tab-unit"></div></div>'
            },
            getSecondsToDeadLine: function(e, t) {
                var i, o = e / 1e3;
                if (o = Math.floor(o), t.periodic) {
                    var n, r, a = s.getPeriodUnit(t.periodUnit),
                        d = e / (1e3 * a);
                    d = Math.ceil(d), d = Math.abs(d), o >= 0 ? (r = d % t.periodInterval, r = 0 == r ? t.periodInterval : r, r -= 1) : r = t.periodInterval - d % t.periodInterval, n = o % a, 0 == n && o < 0 && r--, i = Math.abs(r * a + n)
                } else i = o;
                return i
            },
            getUnitsToDeadLine: function(e) {
                for (var t = ["day", "hour", "minute", "second"], i = {}, o = 0; o < t.length; o++) {
                    var n = t[o],
                        r = s.getPeriodUnit(n);
                    i[n] = Math.floor(e / r), e %= r
                }
                return i
            },
            getPeriodUnit: function(e) {
                switch (e) {
                    case "d":
                    case "day":
                        return t;
                    case "h":
                    case "hour":
                        return i;
                    case "m":
                    case "minute":
                        return o;
                    case "s":
                    case "second":
                        return 1
                }
            },
            getDifferenceWithTimezone: function(e, t, i) {
                var o, n = t.getTime() - e.getTime(),
                    r = 0,
                    a = 0;
                if ("local" !== i.timeZone) {
                    var d = parseFloat(i.timeZone) * s.getPeriodUnit("hour"),
                        l = -e.getTimezoneOffset() * s.getPeriodUnit("minute");
                    r = 1e3 * (d - l)
                }
                if (i.ignoreTransferTime) {
                    var c = -e.getTimezoneOffset() * s.getPeriodUnit("minute"),
                        u = -t.getTimezoneOffset() * s.getPeriodUnit("minute");
                    a = 1e3 * (c - u)
                }
                return o = r + a, n - o
            },
            format2: function(e, t) {
                return t = t !== !1, e <= 9 && t ? "0" + e : "" + e
            },
            definitionOfNumerals: function(e, t, i) {
                switch (i) {
                    case "rus":
                        var o, n = [2, 0, 1, 1, 1, 2];
                        return o = e % 100 > 4 && e % 100 < 20 ? 2 : n[e % 10 < 5 ? e % 10 : 5], t[o];
                    case "eng":
                        return t[1 == e ? 0 : 1]
                }
            }
        },
        d = {
            setOption: function(t, i) {
                var o = e(this),
                    n = o.data("syotimer-options");
                n.hasOwnProperty(t) && (n[t] = i, o.data("syotimer-options", n))
            }
        };
    e.fn.syotimer = function(t) {
        if ("string" == typeof t && "setOption" === t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                d[t].apply(this, i)
            })
        }
        return null === t || "object" == typeof t ? a.init.apply(this, [t]) : void e.error("SyoTimer. Error in call methods: methods is not exist")
    }
}(jQuery);
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);

/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});

/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    ! function(t) {
        var o = "function" == typeof define && define.amd,
            a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t()
    }(function() {
        var t, o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function(t) {
                    var t = e.extend(!0, {}, i, t),
                        o = f.call(this);
                    if (t.live) {
                        var s = t.liveSelector || this.selector || n,
                            c = e(s);
                        if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function() {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
                        }, 500)
                    } else m(s);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() {
                        var o = e(this);
                        if (!o.data(a)) {
                            o.data(a, {
                                idx: ++r,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: o.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
                        }
                    })
                },
                update: function(t, o) {
                    var n = t || f.call(this);
                    return e(n).each(function() {
                        var t = e(this);
                        if (t.data(a)) {
                            var n = t.data(a),
                                i = n.opt,
                                r = e("#mCSB_" + n.idx + "_container"),
                                l = e("#mCSB_" + n.idx),
                                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                            if (!r.length) return;
                            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this)
                        }
                    })
                },
                scrollTo: function(t, o) {
                    if ("undefined" != typeof t && null != t) {
                        var n = f.call(this);
                        return e(n).each(function() {
                            var n = e(this);
                            if (n.data(a)) {
                                var i = n.data(a),
                                    r = i.opt,
                                    l = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    s = e.extend(!0, {}, l, o),
                                    c = Y.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function() {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s))
                                }, s.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var t = e(this);
                        t.data(a) && Q(t)
                    })
                },
                disable: function(t) {
                    var o = f.call(this);
                    return e(o).each(function() {
                        var o = e(this);
                        if (o.data(a)) {
                            o.data(a);
                            N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3])
                        }
                    })
                },
                destroy: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                        }
                    })
                }
            },
            f = function() {
                return "object" != typeof e(this) || e(this).length < 1 ? n : this
            },
            h = function(t) {
                var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
            },
            m = function(e) {
                l[e] && (clearTimeout(l[e]), $(l, e))
            },
            p = function(e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
            },
            g = function(e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
            },
            v = function() {
                var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
                var m = e("#mCSB_" + n.idx),
                    p = e("#mCSB_" + n.idx + "_container");
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
                var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            },
            x = function(t) {
                var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                        return e(this).outerWidth(!0)
                    }).get())],
                    a = t.parent().width();
                return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
            },
            _ = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    i.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                        width: r,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : i.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            },
            w = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
            },
            S = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({
                    height: d,
                    "max-height": r[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": c[0] + "px"
                }), r[1].css({
                    width: u,
                    "max-width": r[1].parent().width() - 10
                })
            },
            b = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = {
                    y: s[0],
                    x: s[1]
                }
            },
            C = function(e, t, o) {
                var a = o ? d[0] + "_expanded" : "",
                    n = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
            },
            y = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                    s = i[0].scrollHeight,
                    c = i[0].scrollWidth;
                return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
            },
            B = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                    var s = dx = 0;
                    "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX")
                }
            },
            T = function() {
                function t() {
                    r = setTimeout(function() {
                        e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t()
                    }, 100)
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt;
                if (!n.bindEvents) {
                    if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
                        var r;
                        t()
                    }
                    P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0
                }
            },
            k = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function() {
                    e(this).unbind("." + i)
                }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1)
            },
            M = function(t) {
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
            },
            O = function(t) {
                var o = t.type,
                    a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                switch (o) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                        return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                    default:
                        return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
                }
            },
            I = function() {
                function t(e, t, a, n) {
                    if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                        s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                    else var i = "y",
                        s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                    G(r, s.toString(), {
                        dir: i,
                        drag: !0
                    })
                }
                var o, n, i, r = e(this),
                    l = r.data(a),
                    d = l.opt,
                    u = a + "_" + l.idx,
                    f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    h = e("#mCSB_" + l.idx + "_container"),
                    m = e("#" + f[0] + ",#" + f[1]),
                    p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                    g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
                m.bind("contextmenu." + u, function(e) {
                    e.preventDefault()
                }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                    if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                        c = !0, s && (document.onselectstart = function() {
                            return !1
                        }), L.call(h, !1), Q(r), o = e(this);
                        var a = o.offset(),
                            l = O(t)[0] - a.top,
                            u = O(t)[1] - a.left,
                            f = o.height() + a.top,
                            m = o.width() + a.left;
                        f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar)
                    }
                }).bind("touchmove." + u, function(e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var a = o.offset(),
                        r = O(e)[0] - a.top,
                        l = O(e)[1] - a.left;
                    t(n, i, r, l)
                }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                    if (o) {
                        var a = o.offset(),
                            r = O(e)[0] - a.top,
                            l = O(e)[1] - a.left;
                        if (n === r && i === l) return;
                        t(n, i, r, l)
                    }
                }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                    o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0)
                })
            },
            D = function() {
                function o(e) {
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
                    var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]]
                }

                function n(e) {
                    if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
                        g = K();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left,
                            n = "mcsLinearOut";
                        if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                        if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0)
                    }
                }

                function i(e) {
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), Q(y), p = K();
                    var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = []
                }

                function r(e) {
                    if (te(e) && !c && !O(e)[2]) {
                        d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            _ = 1e3 / (v - p);
                            var n = "mcsEaseOut",
                                i = 2.5 > _,
                                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                            var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                            var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1)
                        }
                    }
                }

                function l(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
                }

                function s(e, t, o, a, n, i) {
                    e && G(y, e.toString(), {
                        dur: t,
                        scrollEasing: o,
                        dir: a,
                        overwrite: n,
                        drag: i
                    })
                }
                var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
                    B = y.data(a),
                    T = B.opt,
                    k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx),
                    I = e("#mCSB_" + B.idx + "_container"),
                    D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                    E = [],
                    W = [],
                    R = 0,
                    L = "yx" === T.axis ? "none" : "all",
                    z = [],
                    P = I.find("iframe"),
                    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                I.bind(H[0], function(e) {
                    o(e)
                }).bind(H[1], function(e) {
                    n(e)
                }), M.bind(H[0], function(e) {
                    i(e)
                }).bind(H[2], function(e) {
                    r(e)
                }), P.length && P.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                            o(e), i(e)
                        }).bind(H[1], function(e) {
                            n(e)
                        }).bind(H[2], function(e) {
                            r(e)
                        })
                    })
                })
            },
            E = function() {
                function o() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function n(e, t, o) {
                    d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null)
                }
                var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + u, function() {
                    t || i || (i = 1, c = !0)
                }).add(document).bind("mousemove." + u, function(e) {
                    if (!t && i && o()) {
                        var a = f.offset(),
                            r = O(e)[0] - a.top + f[0].offsetTop,
                            c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                    }
                }).bind("mouseup." + u + " dragend." + u, function() {
                    t || (i && (i = 0, n("off", null)), c = !1)
                })
            },
            W = function() {
                function t(t, a) {
                    if (Q(o), !z(o, t.target)) {
                        var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = i.scrollInertia;
                        if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                            f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            p = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                        else var u = "y",
                            f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            p = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(),
                            v = t.deltaY || a;
                        "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
                            dir: u,
                            dur: d
                        }))
                    }
                }
                if (e(this).data(a)) {
                    var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function() {
                        e(this).bind("load", function() {
                            A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                                t(e, o)
                            })
                        })
                    }), l.bind("mousewheel." + r, function(e, o) {
                        t(e, o)
                    })
                }
            },
            R = new Object,
            A = function(t) {
                var o = !1,
                    a = !1,
                    n = null;
                if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];
                if (t) {
                    try {
                        var i = t.contentDocument || t.contentWindow.document;
                        n = i.body.innerHTML
                    } catch (r) {}
                    o = null !== n
                } else {
                    try {
                        var i = top.document;
                        n = i.body.innerHTML
                    } catch (r) {}
                    o = null !== n
                }
                return a !== !1 && (R[a] = o), o
            },
            L = function(e) {
                var t = this.find("iframe");
                if (t.length) {
                    var o = e ? "auto" : "none";
                    t.css("pointer-events", o)
                }
            },
            z = function(t, o) {
                var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = ["select", "textarea"];
                return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
            },
            P = function() {
                var t, o = e(this),
                    n = o.data(a),
                    i = a + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container"),
                    l = r.parent(),
                    s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
                s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                    c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1)
                }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() {
                    c = !1
                }).bind("click." + i, function(a) {
                    if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                        Q(o);
                        var i = e(this),
                            s = i.find(".mCSB_dragger");
                        if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!n.overflowed[1]) return;
                            var c = "x",
                                u = a.pageX > s.offset().left ? -1 : 1,
                                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                        } else {
                            if (!n.overflowed[0]) return;
                            var c = "y",
                                u = a.pageY > s.offset().top ? -1 : 1,
                                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                        }
                        G(o, f.toString(), {
                            dir: c,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            H = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function() {
                    var o = e(document.activeElement),
                        a = r.find(".mCustomScrollBox").length,
                        i = 0;
                    o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function() {
                        var e = [ae(o)[0], ae(o)[1]],
                            a = [r[0].offsetTop, r[0].offsetLeft],
                            s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
                            c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                        "x" === n.axis || s[0] || G(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: i
                        }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: i
                        })
                    }, t[0]._focusTimer))
                })
            },
            U = function() {
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function() {
                    0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            F = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar",
                    s = e(l + ">a");
                s.bind("contextmenu." + r, function(e) {
                    e.preventDefault()
                }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                    function r(e, o) {
                        i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o)
                    }
                    if (a.preventDefault(), ee(a)) {
                        var l = e(this).attr("class");
                        switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l);
                                break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l)
                        }
                    }
                })
            },
            q = function() {
                function t(t) {
                    function a(e, t) {
                        r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t)
                    }
                    switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = "on";
                            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
                            } else if (33 === l || 34 === l) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    Q(o);
                                    var f = 34 === l ? -1 : 1;
                                    if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                                    G(o, m.toString(), {
                                        dir: h,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                G(o, m.toString(), {
                                    dir: h,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                            t(e)
                        })
                    })
                }), s.attr("tabindex", "0").bind(h[0], function(e) {
                    t(e)
                })
            },
            j = function(t, o, n, i, r) {
                function l(e) {
                    u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                    var o = "stepped" !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
                        v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        x = "auto" !== f.scrollAmount ? v : m,
                        _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        w = !!e;
                    return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
                        dir: f.dir[0],
                        scrollEasing: _,
                        dur: a,
                        onComplete: w
                    }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
                        l()
                    }, a)))
                }

                function s() {
                    clearTimeout(f.step), $(f, "step"), Q(t)
                }
                var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
                        l(m);
                        break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0)
                }
            },
            Y = function(t) {
                var o = e(this).data(a).opt,
                    n = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
            },
            X = function(t, o) {
                if (null != t && "undefined" != typeof t) {
                    var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y");
                    var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t);
                            if (!m.length) return;
                            return "x" === o ? ae(m)[1] : ae(m)[0];
                        case "string":
                        case "number":
                            if (oe(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var p = f + parseInt(t.split("+=")[1]);
                                return p >= 0 ? 0 : Math.abs(p)
                            }
                            if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = l.find(":" + t);
                                return "x" === o ? ae(m)[1] : ae(m)[0]
                            }
                            return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
                    }
                }
            },
            N = function(t) {
                function o() {
                    return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function() {
                        return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function() {
                            n(this)
                        }))
                    }, c.advanced.autoUpdateTimeout))
                }

                function n(t) {
                    function o(e, t) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function a() {
                        this.onload = null, e(t).addClass(d[2]), r(2)
                    }
                    if (e(t).hasClass(d[2])) return void r();
                    var n = new Image;
                    n.onload = o(n, a), n.src = t.src
                }

                function i() {
                    c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                        e += this.offsetHeight + this.offsetWidth
                    }), e
                }

                function r(e) {
                    clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e)
                }
                var l = e(this),
                    s = l.data(a),
                    c = s.opt,
                    f = e("#mCSB_" + s.idx + "_container");
                return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o()
            },
            V = function(e, t, o) {
                return Math.round(e / t) * t - o
            },
            Q = function(t) {
                var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function() {
                    Z.call(this)
                })
            },
            G = function(t, o, n) {
                function i(e) {
                    return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w]
                }

                function l() {
                    var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [x[0].offsetTop, x[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: o[0],
                        draggerLeft: o[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                        direction: n.dir
                    }
                }
                var s = t.data(a),
                    c = s.opt,
                    d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                    if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
                        var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        o = V(o, v, c.snapOffset)
                    }
                    switch (n.dir) {
                        case "x":
                            var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                _ = "left",
                                w = h[0].offsetLeft,
                                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                y = p[1],
                                B = g[1],
                                T = y > 0 ? y / s.scrollRatio.x : 0,
                                k = B > 0 ? B / s.scrollRatio.x : 0;
                            break;
                        case "y":
                            var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                _ = "top",
                                w = h[0].offsetTop,
                                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                y = p[0],
                                B = g[0],
                                T = y > 0 ? y / s.scrollRatio.y : 0,
                                k = B > 0 ? B / s.scrollRatio.y : 0
                    }
                    b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                        onStart: function() {
                            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r())
                        },
                        onUpdate: function() {
                            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
                        },
                        onComplete: function() {
                            if (n.callbacks && n.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function() {
                                    i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide")
                                }, e)
                            }
                        }
                    })
                }
            },
            J = function(e, t, o, a, n, i, r) {
                function l() {
                    S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call())
                }

                function s() {
                    a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call()
                }

                function c() {
                    f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                        return s(), setTimeout(e, .01)
                    }, S.id = h(l)
                }

                function d() {
                    null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
                }

                function u(e, t, o, a, n) {
                    switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e;
                            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, h, r = r || {},
                    m = r.onStart || function() {},
                    p = r.onUpdate || function() {},
                    g = r.onComplete || function() {},
                    v = K(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t];
                "left" === t && (_ = e.offsetLeft);
                var b = o - _;
                S.stop = 0, "none" !== i && d(), c()
            },
            K = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            Z = function() {
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                    var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
                }
            },
            $ = function(e, t) {
                try {
                    delete e[t]
                } catch (o) {
                    e[t] = null
                }
            },
            ee = function(e) {
                return !(e.which && 1 !== e.which)
            },
            te = function(e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            },
            oe = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            ae = function(e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            },
            ne = function() {
                function e() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
                var t = e();
                return t ? document[t] : !1
            };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function() {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t),
                        i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                },
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t),
                        c = s.parents(".mCSB_container"),
                        d = "exact" === a[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ];
                    if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});

/* ---------------------------------------------
 Gmaps
 --------------------------------------------- */
"use strict";
! function(a, b) {
    "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], b) : a.GMaps = b()
}(this, function() {
    var a = function(a, b) {
            var c;
            if (a === b) return a;
            for (c in b) void 0 !== b[c] && (a[c] = b[c]);
            return a
        },
        b = function(a, b) {
            var c, d = Array.prototype.slice.call(arguments, 2),
                e = [],
                f = a.length;
            if (Array.prototype.map && a.map === Array.prototype.map) e = Array.prototype.map.call(a, function(a) {
                var c = d.slice(0);
                return c.splice(0, 0, a), b.apply(this, c)
            });
            else
                for (c = 0; f > c; c++) callback_params = d, callback_params.splice(0, 0, a[c]), e.push(b.apply(this, callback_params));
            return e
        },
        c = function(a) {
            var b, c = [];
            for (b = 0; b < a.length; b++) c = c.concat(a[b]);
            return c
        },
        d = function(a, b) {
            var c = a[0],
                d = a[1];
            return b && (c = a[1], d = a[0]), new google.maps.LatLng(c, d)
        },
        f = function(a, b) {
            var c;
            for (c = 0; c < a.length; c++) a[c] instanceof google.maps.LatLng || (a[c].length > 0 && "object" == typeof a[c][0] ? a[c] = f(a[c], b) : a[c] = d(a[c], b));
            return a
        },
        g = function(a, b) {
            var c, d = a.replace(".", "");
            return c = "jQuery" in this && b ? $("." + d, b)[0] : document.getElementsByClassName(d)[0]
        },
        h = function(a, b) {
            var c, a = a.replace("#", "");
            return c = "jQuery" in window && b ? $("#" + a, b)[0] : document.getElementById(a)
        },
        i = function(a) {
            var b = 0,
                c = 0;
            if (a.offsetParent)
                do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent);
            return [b, c]
        },
        j = function(b) {
            var c = document,
                d = function(b) {
                    if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
                        function() {};
                    if (!this) return new d(b);
                    b.zoom = b.zoom || 15, b.mapType = b.mapType || "roadmap";
                    var e, f = function(a, b) {
                            return void 0 === a ? b : a
                        },
                        j = this,
                        k = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
                        l = ["mousemove", "mouseout", "mouseover"],
                        m = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
                        n = b.el || b.div,
                        o = b.markerClusterer,
                        p = google.maps.MapTypeId[b.mapType.toUpperCase()],
                        q = new google.maps.LatLng(b.lat, b.lng),
                        r = f(b.zoomControl, !0),
                        s = b.zoomControlOpt || {
                            style: "DEFAULT",
                            position: "TOP_LEFT"
                        },
                        t = s.style || "DEFAULT",
                        u = s.position || "TOP_LEFT",
                        v = f(b.panControl, !0),
                        w = f(b.mapTypeControl, !0),
                        x = f(b.scaleControl, !0),
                        y = f(b.streetViewControl, !0),
                        z = f(z, !0),
                        A = {},
                        B = {
                            zoom: this.zoom,
                            center: q,
                            mapTypeId: p
                        },
                        C = {
                            panControl: v,
                            zoomControl: r,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle[t],
                                position: google.maps.ControlPosition[u]
                            },
                            mapTypeControl: w,
                            scaleControl: x,
                            streetViewControl: y,
                            overviewMapControl: z
                        };
                    if ("string" == typeof b.el || "string" == typeof b.div ? n.indexOf("#") > -1 ? this.el = h(n, b.context) : this.el = g.apply(this, [n, b.context]) : this.el = n, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
                    for (window.context_menu = window.context_menu || {}, window.context_menu[j.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = b.zoom, this.registered_events = {}, this.el.style.width = b.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = b.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = b.enableNewStyle, e = 0; e < m.length; e++) delete b[m[e]];
                    for (1 != b.disableDefaultUI && (B = a(B, C)), A = a(B, b), e = 0; e < k.length; e++) delete A[k[e]];
                    for (e = 0; e < l.length; e++) delete A[l[e]];
                    this.map = new google.maps.Map(this.el, A), o && (this.markerClusterer = o.apply(this, [this.map]));
                    var D = function(a, b) {
                        var c = "",
                            d = window.context_menu[j.el.id][a];
                        for (var e in d)
                            if (d.hasOwnProperty(e)) {
                                var f = d[e];
                                c += '<li><a id="' + a + "_" + e + '" href="#">' + f.title + "</a></li>"
                            }
                        if (h("gmaps_context_menu")) {
                            var g = h("gmaps_context_menu");
                            g.innerHTML = c;
                            var e, k = g.getElementsByTagName("a"),
                                l = k.length;
                            for (e = 0; l > e; e++) {
                                var m = k[e],
                                    n = function(c) {
                                        c.preventDefault(), d[this.id.replace(a + "_", "")].action.apply(j, [b]), j.hideContextMenu()
                                    };
                                google.maps.event.clearListeners(m, "click"), google.maps.event.addDomListenerOnce(m, "click", n, !1)
                            }
                            var o = i.apply(this, [j.el]),
                                p = o[0] + b.pixel.x - 15,
                                q = o[1] + b.pixel.y - 15;
                            g.style.left = p + "px", g.style.top = q + "px"
                        }
                    };
                    this.buildContextMenu = function(a, b) {
                        if ("marker" === a) {
                            b.pixel = {};
                            var c = new google.maps.OverlayView;
                            c.setMap(j.map), c.draw = function() {
                                var d = c.getProjection(),
                                    e = b.marker.getPosition();
                                b.pixel = d.fromLatLngToContainerPixel(e), D(a, b)
                            }
                        } else D(a, b);
                        var d = h("gmaps_context_menu");
                        setTimeout(function() {
                            d.style.display = "block"
                        }, 0)
                    }, this.setContextMenu = function(a) {
                        window.context_menu[j.el.id][a.control] = {};
                        var b, d = c.createElement("ul");
                        for (b in a.options)
                            if (a.options.hasOwnProperty(b)) {
                                var e = a.options[b];
                                window.context_menu[j.el.id][a.control][e.name] = {
                                    title: e.title,
                                    action: e.action
                                }
                            }
                        d.id = "gmaps_context_menu", d.style.display = "none", d.style.position = "absolute", d.style.minWidth = "100px", d.style.background = "white", d.style.listStyle = "none", d.style.padding = "8px", d.style.boxShadow = "2px 2px 6px #ccc", h("gmaps_context_menu") || c.body.appendChild(d);
                        var f = h("gmaps_context_menu");
                        google.maps.event.addDomListener(f, "mouseout", function(a) {
                            a.relatedTarget && this.contains(a.relatedTarget) || window.setTimeout(function() {
                                f.style.display = "none"
                            }, 400)
                        }, !1)
                    }, this.hideContextMenu = function() {
                        var a = h("gmaps_context_menu");
                        a && (a.style.display = "none")
                    };
                    var E = function(a, c) {
                        google.maps.event.addListener(a, c, function(a) {
                            void 0 == a && (a = this), b[c].apply(this, [a]), j.hideContextMenu()
                        })
                    };
                    google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
                    for (var F = 0; F < k.length; F++) {
                        var G = k[F];
                        G in b && E(this.map, G)
                    }
                    for (var F = 0; F < l.length; F++) {
                        var G = l[F];
                        G in b && E(this.map, G)
                    }
                    google.maps.event.addListener(this.map, "rightclick", function(a) {
                        b.rightclick && b.rightclick.apply(this, [a]), void 0 != window.context_menu[j.el.id].map && j.buildContextMenu("map", a)
                    }), this.refresh = function() {
                        google.maps.event.trigger(this.map, "resize")
                    }, this.fitZoom = function() {
                        var a, b = [],
                            c = this.markers.length;
                        for (a = 0; c > a; a++) "boolean" == typeof this.markers[a].visible && this.markers[a].visible && b.push(this.markers[a].getPosition());
                        this.fitLatLngBounds(b)
                    }, this.fitLatLngBounds = function(a) {
                        var b, c = a.length,
                            d = new google.maps.LatLngBounds;
                        for (b = 0; c > b; b++) d.extend(a[b]);
                        this.map.fitBounds(d)
                    }, this.setCenter = function(a, b, c) {
                        this.map.panTo(new google.maps.LatLng(a, b)), c && c()
                    }, this.getElement = function() {
                        return this.el
                    }, this.zoomIn = function(a) {
                        a = a || 1, this.zoom = this.map.getZoom() + a, this.map.setZoom(this.zoom)
                    }, this.zoomOut = function(a) {
                        a = a || 1, this.zoom = this.map.getZoom() - a, this.map.setZoom(this.zoom)
                    };
                    var H, I = [];
                    for (H in this.map) "function" != typeof this.map[H] || this[H] || I.push(H);
                    for (e = 0; e < I.length; e++) ! function(a, b, c) {
                        a[c] = function() {
                            return b[c].apply(b, arguments)
                        }
                    }(this, this.map, I[e])
                };
            return d
        }(this);
    j.prototype.createControl = function(a) {
        var b = document.createElement("div");
        b.style.cursor = "pointer", a.disableDefaultStyles !== !0 && (b.style.fontFamily = "Roboto, Arial, sans-serif", b.style.fontSize = "11px", b.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
        for (var c in a.style) b.style[c] = a.style[c];
        a.id && (b.id = a.id), a.title && (b.title = a.title), a.classes && (b.className = a.classes), a.content && ("string" == typeof a.content ? b.innerHTML = a.content : a.content instanceof HTMLElement && b.appendChild(a.content)), a.position && (b.position = google.maps.ControlPosition[a.position.toUpperCase()]);
        for (var d in a.events) ! function(b, c) {
            google.maps.event.addDomListener(b, c, function() {
                a.events[c].apply(this, [this])
            })
        }(b, d);
        return b.index = 1, b
    }, j.prototype.addControl = function(a) {
        var b = this.createControl(a);
        return this.controls.push(b), this.map.controls[b.position].push(b), b
    }, j.prototype.removeControl = function(a) {
        var b, c = null;
        for (b = 0; b < this.controls.length; b++) this.controls[b] == a && (c = this.controls[b].position, this.controls.splice(b, 1));
        if (c)
            for (b = 0; b < this.map.controls.length; b++) {
                var d = this.map.controls[a.position];
                if (d.getAt(b) == a) {
                    d.removeAt(b);
                    break
                }
            }
        return a
    }, j.prototype.createMarker = function(b) {
        if (void 0 == b.lat && void 0 == b.lng && void 0 == b.position) throw "No latitude or longitude defined.";
        var c = this,
            d = b.details,
            e = b.fences,
            f = b.outside,
            g = {
                position: new google.maps.LatLng(b.lat, b.lng),
                map: null
            },
            h = a(g, b);
        delete h.lat, delete h.lng, delete h.fences, delete h.outside;
        var i = new google.maps.Marker(h);
        if (i.fences = e, b.infoWindow) {
            i.infoWindow = new google.maps.InfoWindow(b.infoWindow);
            for (var j = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], k = 0; k < j.length; k++) ! function(a, c) {
                b.infoWindow[c] && google.maps.event.addListener(a, c, function(a) {
                    b.infoWindow[c].apply(this, [a])
                })
            }(i.infoWindow, j[k])
        }
        for (var l = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], m = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], k = 0; k < l.length; k++) ! function(a, c) {
            b[c] && google.maps.event.addListener(a, c, function() {
                b[c].apply(this, [this])
            })
        }(i, l[k]);
        for (var k = 0; k < m.length; k++) ! function(a, c, d) {
            b[d] && google.maps.event.addListener(c, d, function(c) {
                c.pixel || (c.pixel = a.getProjection().fromLatLngToPoint(c.latLng)), b[d].apply(this, [c])
            })
        }(this.map, i, m[k]);
        return google.maps.event.addListener(i, "click", function() {
            this.details = d, b.click && b.click.apply(this, [this]), i.infoWindow && (c.hideInfoWindows(), i.infoWindow.open(c.map, i))
        }), google.maps.event.addListener(i, "rightclick", function(a) {
            a.marker = this, b.rightclick && b.rightclick.apply(this, [a]), void 0 != window.context_menu[c.el.id].marker && c.buildContextMenu("marker", a)
        }), i.fences && google.maps.event.addListener(i, "dragend", function() {
            c.checkMarkerGeofence(i, function(a, b) {
                f(a, b)
            })
        }), i
    }, j.prototype.addMarker = function(a) {
        var b;
        if (a.hasOwnProperty("gm_accessors_")) b = a;
        else {
            if (!(a.hasOwnProperty("lat") && a.hasOwnProperty("lng") || a.position)) throw "No latitude or longitude defined.";
            b = this.createMarker(a)
        }
        return b.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(b), this.markers.push(b), j.fire("marker_added", b, this), b
    }, j.prototype.addMarkers = function(a) {
        for (var b, c = 0; b = a[c]; c++) this.addMarker(b);
        return this.markers
    }, j.prototype.hideInfoWindows = function() {
        for (var a, b = 0; a = this.markers[b]; b++) a.infoWindow && a.infoWindow.close()
    }, j.prototype.removeMarker = function(a) {
        for (var b = 0; b < this.markers.length; b++)
            if (this.markers[b] === a) {
                this.markers[b].setMap(null), this.markers.splice(b, 1), this.markerClusterer && this.markerClusterer.removeMarker(a), j.fire("marker_removed", a, this);
                break
            }
        return a
    }, j.prototype.removeMarkers = function(a) {
        var b = [];
        if ("undefined" == typeof a) {
            for (var c = 0; c < this.markers.length; c++) {
                var d = this.markers[c];
                d.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(d), j.fire("marker_removed", d, this)
            }
            this.markers = b
        } else {
            for (var c = 0; c < a.length; c++) {
                var e = this.markers.indexOf(a[c]);
                if (e > -1) {
                    var d = this.markers[e];
                    d.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(d), j.fire("marker_removed", d, this)
                }
            }
            for (var c = 0; c < this.markers.length; c++) {
                var d = this.markers[c];
                null != d.getMap() && b.push(d)
            }
            this.markers = b
        }
    }, j.prototype.drawOverlay = function(a) {
        var b = new google.maps.OverlayView,
            c = !0;
        return b.setMap(this.map), null != a.auto_show && (c = a.auto_show), b.onAdd = function() {
            var c = document.createElement("div");
            c.style.borderStyle = "none", c.style.borderWidth = "0px", c.style.position = "absolute", c.style.zIndex = 100, c.innerHTML = a.content, b.el = c, a.layer || (a.layer = "overlayLayer");
            var d = this.getPanes(),
                e = d[a.layer],
                f = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
            e.appendChild(c);
            for (var g = 0; g < f.length; g++) ! function(a, b) {
                google.maps.event.addDomListener(a, b, function(a) {
                    -1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (a.cancelBubble = !0, a.returnValue = !1) : a.stopPropagation()
                })
            }(c, f[g]);
            a.click && (d.overlayMouseTarget.appendChild(b.el), google.maps.event.addDomListener(b.el, "click", function() {
                a.click.apply(b, [b])
            })), google.maps.event.trigger(this, "ready")
        }, b.draw = function() {
            var d = this.getProjection(),
                e = d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat, a.lng));
            a.horizontalOffset = a.horizontalOffset || 0, a.verticalOffset = a.verticalOffset || 0;
            var f = b.el,
                g = f.children[0],
                h = g.clientHeight,
                i = g.clientWidth;
            switch (a.verticalAlign) {
                case "top":
                    f.style.top = e.y - h + a.verticalOffset + "px";
                    break;
                default:
                case "middle":
                    f.style.top = e.y - h / 2 + a.verticalOffset + "px";
                    break;
                case "bottom":
                    f.style.top = e.y + a.verticalOffset + "px"
            }
            switch (a.horizontalAlign) {
                case "left":
                    f.style.left = e.x - i + a.horizontalOffset + "px";
                    break;
                default:
                case "center":
                    f.style.left = e.x - i / 2 + a.horizontalOffset + "px";
                    break;
                case "right":
                    f.style.left = e.x + a.horizontalOffset + "px"
            }
            f.style.display = c ? "block" : "none", c || a.show.apply(this, [f])
        }, b.onRemove = function() {
            var c = b.el;
            a.remove ? a.remove.apply(this, [c]) : (b.el.parentNode.removeChild(b.el), b.el = null)
        }, this.overlays.push(b), b
    }, j.prototype.removeOverlay = function(a) {
        for (var b = 0; b < this.overlays.length; b++)
            if (this.overlays[b] === a) {
                this.overlays[b].setMap(null), this.overlays.splice(b, 1);
                break
            }
    }, j.prototype.removeOverlays = function() {
        for (var a, b = 0; a = this.overlays[b]; b++) a.setMap(null);
        this.overlays = []
    }, j.prototype.drawPolyline = function(a) {
        var b = [],
            c = a.path;
        if (c.length)
            if (void 0 === c[0][0]) b = c;
            else
                for (var d, e = 0; d = c[e]; e++) b.push(new google.maps.LatLng(d[0], d[1]));
        var f = {
            map: this.map,
            path: b,
            strokeColor: a.strokeColor,
            strokeOpacity: a.strokeOpacity,
            strokeWeight: a.strokeWeight,
            geodesic: a.geodesic,
            clickable: !0,
            editable: !1,
            visible: !0
        };
        a.hasOwnProperty("clickable") && (f.clickable = a.clickable), a.hasOwnProperty("editable") && (f.editable = a.editable), a.hasOwnProperty("icons") && (f.icons = a.icons), a.hasOwnProperty("zIndex") && (f.zIndex = a.zIndex);
        for (var g = new google.maps.Polyline(f), h = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < h.length; i++) ! function(b, c) {
            a[c] && google.maps.event.addListener(b, c, function(b) {
                a[c].apply(this, [b])
            })
        }(g, h[i]);
        return this.polylines.push(g), j.fire("polyline_added", g, this), g
    }, j.prototype.removePolyline = function(a) {
        for (var b = 0; b < this.polylines.length; b++)
            if (this.polylines[b] === a) {
                this.polylines[b].setMap(null), this.polylines.splice(b, 1), j.fire("polyline_removed", a, this);
                break
            }
    }, j.prototype.removePolylines = function() {
        for (var a, b = 0; a = this.polylines[b]; b++) a.setMap(null);
        this.polylines = []
    }, j.prototype.drawCircle = function(b) {
        b = a({
            map: this.map,
            center: new google.maps.LatLng(b.lat, b.lng)
        }, b), delete b.lat, delete b.lng;
        for (var c = new google.maps.Circle(b), d = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], e = 0; e < d.length; e++) ! function(a, c) {
            b[c] && google.maps.event.addListener(a, c, function(a) {
                b[c].apply(this, [a])
            })
        }(c, d[e]);
        return this.polygons.push(c), c
    }, j.prototype.drawRectangle = function(b) {
        b = a({
            map: this.map
        }, b);
        var c = new google.maps.LatLngBounds(new google.maps.LatLng(b.bounds[0][0], b.bounds[0][1]), new google.maps.LatLng(b.bounds[1][0], b.bounds[1][1]));
        b.bounds = c;
        for (var d = new google.maps.Rectangle(b), e = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], f = 0; f < e.length; f++) ! function(a, c) {
            b[c] && google.maps.event.addListener(a, c, function(a) {
                b[c].apply(this, [a])
            })
        }(d, e[f]);
        return this.polygons.push(d), d
    }, j.prototype.drawPolygon = function(d) {
        var e = !1;
        d.hasOwnProperty("useGeoJSON") && (e = d.useGeoJSON), delete d.useGeoJSON, d = a({
            map: this.map
        }, d), 0 == e && (d.paths = [d.paths.slice(0)]), d.paths.length > 0 && d.paths[0].length > 0 && (d.paths = c(b(d.paths, f, e)));
        for (var g = new google.maps.Polygon(d), h = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < h.length; i++) ! function(a, b) {
            d[b] && google.maps.event.addListener(a, b, function(a) {
                d[b].apply(this, [a])
            })
        }(g, h[i]);
        return this.polygons.push(g), j.fire("polygon_added", g, this), g
    }, j.prototype.removePolygon = function(a) {
        for (var b = 0; b < this.polygons.length; b++)
            if (this.polygons[b] === a) {
                this.polygons[b].setMap(null), this.polygons.splice(b, 1), j.fire("polygon_removed", a, this);
                break
            }
    }, j.prototype.removePolygons = function() {
        for (var a, b = 0; a = this.polygons[b]; b++) a.setMap(null);
        this.polygons = []
    }, j.prototype.getFromFusionTables = function(a) {
        var b = a.events;
        delete a.events;
        var c = a,
            d = new google.maps.FusionTablesLayer(c);
        for (var e in b) ! function(a, c) {
            google.maps.event.addListener(a, c, function(a) {
                b[c].apply(this, [a])
            })
        }(d, e);
        return this.layers.push(d), d
    }, j.prototype.loadFromFusionTables = function(a) {
        var b = this.getFromFusionTables(a);
        return b.setMap(this.map), b
    }, j.prototype.getFromKML = function(a) {
        var b = a.url,
            c = a.events;
        delete a.url, delete a.events;
        var d = a,
            e = new google.maps.KmlLayer(b, d);
        for (var f in c) ! function(a, b) {
            google.maps.event.addListener(a, b, function(a) {
                c[b].apply(this, [a])
            })
        }(e, f);
        return this.layers.push(e), e
    }, j.prototype.loadFromKML = function(a) {
        var b = this.getFromKML(a);
        return b.setMap(this.map), b
    }, j.prototype.addLayer = function(a, b) {
        b = b || {};
        var c;
        switch (a) {
            case "weather":
                this.singleLayers.weather = c = new google.maps.weather.WeatherLayer;
                break;
            case "clouds":
                this.singleLayers.clouds = c = new google.maps.weather.CloudLayer;
                break;
            case "traffic":
                this.singleLayers.traffic = c = new google.maps.TrafficLayer;
                break;
            case "transit":
                this.singleLayers.transit = c = new google.maps.TransitLayer;
                break;
            case "bicycling":
                this.singleLayers.bicycling = c = new google.maps.BicyclingLayer;
                break;
            case "panoramio":
                this.singleLayers.panoramio = c = new google.maps.panoramio.PanoramioLayer, c.setTag(b.filter), delete b.filter, b.click && google.maps.event.addListener(c, "click", function(a) {
                    b.click(a), delete b.click
                });
                break;
            case "places":
                if (this.singleLayers.places = c = new google.maps.places.PlacesService(this.map), b.search || b.nearbySearch || b.radarSearch) {
                    var d = {
                        bounds: b.bounds || null,
                        keyword: b.keyword || null,
                        location: b.location || null,
                        name: b.name || null,
                        radius: b.radius || null,
                        rankBy: b.rankBy || null,
                        types: b.types || null
                    };
                    b.radarSearch && c.radarSearch(d, b.radarSearch), b.search && c.search(d, b.search), b.nearbySearch && c.nearbySearch(d, b.nearbySearch)
                }
                if (b.textSearch) {
                    var e = {
                        bounds: b.bounds || null,
                        location: b.location || null,
                        query: b.query || null,
                        radius: b.radius || null
                    };
                    c.textSearch(e, b.textSearch)
                }
        }
        return void 0 !== c ? ("function" == typeof c.setOptions && c.setOptions(b), "function" == typeof c.setMap && c.setMap(this.map), c) : void 0
    }, j.prototype.removeLayer = function(a) {
        if ("string" == typeof a && void 0 !== this.singleLayers[a]) this.singleLayers[a].setMap(null), delete this.singleLayers[a];
        else
            for (var b = 0; b < this.layers.length; b++)
                if (this.layers[b] === a) {
                    this.layers[b].setMap(null), this.layers.splice(b, 1);
                    break
                }
    };
    var k, l;
    return j.prototype.getRoutes = function(b) {
        switch (b.travelMode) {
            case "bicycling":
                k = google.maps.TravelMode.BICYCLING;
                break;
            case "transit":
                k = google.maps.TravelMode.TRANSIT;
                break;
            case "driving":
                k = google.maps.TravelMode.DRIVING;
                break;
            default:
                k = google.maps.TravelMode.WALKING
        }
        l = "imperial" === b.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
        var c = {
                avoidHighways: !1,
                avoidTolls: !1,
                optimizeWaypoints: !1,
                waypoints: []
            },
            d = a(c, b);
        d.origin = /string/.test(typeof b.origin) ? b.origin : new google.maps.LatLng(b.origin[0], b.origin[1]), d.destination = /string/.test(typeof b.destination) ? b.destination : new google.maps.LatLng(b.destination[0], b.destination[1]), d.travelMode = k, d.unitSystem = l, delete d.callback, delete d.error;
        var e = this,
            f = new google.maps.DirectionsService;
        f.route(d, function(a, c) {
            if (c === google.maps.DirectionsStatus.OK) {
                for (var d in a.routes) a.routes.hasOwnProperty(d) && e.routes.push(a.routes[d]);
                b.callback && b.callback(e.routes, a, c)
            } else b.error && b.error(a, c)
        })
    }, j.prototype.removeRoutes = function() {
        this.routes.length = 0
    }, j.prototype.getElevations = function(d) {
        d = a({
            locations: [],
            path: !1,
            samples: 256
        }, d), d.locations.length > 0 && d.locations[0].length > 0 && (d.locations = c(b([d.locations], f, !1)));
        var e = d.callback;
        delete d.callback;
        var g = new google.maps.ElevationService;
        if (d.path) {
            var h = {
                path: d.locations,
                samples: d.samples
            };
            g.getElevationAlongPath(h, function(a, b) {
                e && "function" == typeof e && e(a, b)
            })
        } else delete d.path, delete d.samples, g.getElevationForLocations(d, function(a, b) {
            e && "function" == typeof e && e(a, b)
        })
    }, j.prototype.cleanRoute = j.prototype.removePolylines, j.prototype.renderRoute = function(b, c) {
        var d, e = "string" == typeof c.panel ? document.getElementById(c.panel.replace("#", "")) : c.panel;
        c.panel = e, c = a({
            map: this.map
        }, c), d = new google.maps.DirectionsRenderer(c), this.getRoutes({
            origin: b.origin,
            destination: b.destination,
            travelMode: b.travelMode,
            waypoints: b.waypoints,
            unitSystem: b.unitSystem,
            error: b.error,
            avoidHighways: b.avoidHighways,
            avoidTolls: b.avoidTolls,
            optimizeWaypoints: b.optimizeWaypoints,
            callback: function(a, b, c) {
                c === google.maps.DirectionsStatus.OK && d.setDirections(b)
            }
        })
    }, j.prototype.drawRoute = function(a) {
        var b = this;
        this.getRoutes({
            origin: a.origin,
            destination: a.destination,
            travelMode: a.travelMode,
            waypoints: a.waypoints,
            unitSystem: a.unitSystem,
            error: a.error,
            avoidHighways: a.avoidHighways,
            avoidTolls: a.avoidTolls,
            optimizeWaypoints: a.optimizeWaypoints,
            callback: function(c) {
                if (c.length > 0) {
                    var d = {
                        path: c[c.length - 1].overview_path,
                        strokeColor: a.strokeColor,
                        strokeOpacity: a.strokeOpacity,
                        strokeWeight: a.strokeWeight
                    };
                    a.hasOwnProperty("icons") && (d.icons = a.icons), b.drawPolyline(d), a.callback && a.callback(c[c.length - 1])
                }
            }
        })
    }, j.prototype.travelRoute = function(a) {
        if (a.origin && a.destination) this.getRoutes({
            origin: a.origin,
            destination: a.destination,
            travelMode: a.travelMode,
            waypoints: a.waypoints,
            unitSystem: a.unitSystem,
            error: a.error,
            callback: function(b) {
                if (b.length > 0 && a.start && a.start(b[b.length - 1]), b.length > 0 && a.step) {
                    var c = b[b.length - 1];
                    if (c.legs.length > 0)
                        for (var d, e = c.legs[0].steps, f = 0; d = e[f]; f++) d.step_number = f, a.step(d, c.legs[0].steps.length - 1)
                }
                b.length > 0 && a.end && a.end(b[b.length - 1])
            }
        });
        else if (a.route && a.route.legs.length > 0)
            for (var b, c = a.route.legs[0].steps, d = 0; b = c[d]; d++) b.step_number = d, a.step(b)
    }, j.prototype.drawSteppedRoute = function(a) {
        var b = this;
        if (a.origin && a.destination) this.getRoutes({
            origin: a.origin,
            destination: a.destination,
            travelMode: a.travelMode,
            waypoints: a.waypoints,
            error: a.error,
            callback: function(c) {
                if (c.length > 0 && a.start && a.start(c[c.length - 1]), c.length > 0 && a.step) {
                    var d = c[c.length - 1];
                    if (d.legs.length > 0)
                        for (var e, f = d.legs[0].steps, g = 0; e = f[g]; g++) {
                            e.step_number = g;
                            var h = {
                                path: e.path,
                                strokeColor: a.strokeColor,
                                strokeOpacity: a.strokeOpacity,
                                strokeWeight: a.strokeWeight
                            };
                            a.hasOwnProperty("icons") && (h.icons = a.icons), b.drawPolyline(h), a.step(e, d.legs[0].steps.length - 1)
                        }
                }
                c.length > 0 && a.end && a.end(c[c.length - 1])
            }
        });
        else if (a.route && a.route.legs.length > 0)
            for (var c, d = a.route.legs[0].steps, e = 0; c = d[e]; e++) {
                c.step_number = e;
                var f = {
                    path: c.path,
                    strokeColor: a.strokeColor,
                    strokeOpacity: a.strokeOpacity,
                    strokeWeight: a.strokeWeight
                };
                a.hasOwnProperty("icons") && (f.icons = a.icons), b.drawPolyline(f), a.step(c)
            }
    }, j.Route = function(a) {
        this.origin = a.origin, this.destination = a.destination, this.waypoints = a.waypoints, this.map = a.map, this.route = a.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
        var b = {
            path: new google.maps.MVCArray,
            strokeColor: a.strokeColor,
            strokeOpacity: a.strokeOpacity,
            strokeWeight: a.strokeWeight
        };
        a.hasOwnProperty("icons") && (b.icons = a.icons), this.polyline = this.map.drawPolyline(b).getPath()
    }, j.Route.prototype.getRoute = function(a) {
        var b = this;
        this.map.getRoutes({
            origin: this.origin,
            destination: this.destination,
            travelMode: a.travelMode,
            waypoints: this.waypoints || [],
            error: a.error,
            callback: function() {
                b.route = e[0], a.callback && a.callback.call(b)
            }
        })
    }, j.Route.prototype.back = function() {
        if (this.step_count > 0) {
            this.step_count--;
            var a = this.route.legs[0].steps[this.step_count].path;
            for (var b in a) a.hasOwnProperty(b) && this.polyline.pop()
        }
    }, j.Route.prototype.forward = function() {
        if (this.step_count < this.steps_length) {
            var a = this.route.legs[0].steps[this.step_count].path;
            for (var b in a) a.hasOwnProperty(b) && this.polyline.push(a[b]);
            this.step_count++
        }
    }, j.prototype.checkGeofence = function(a, b, c) {
        return c.containsLatLng(new google.maps.LatLng(a, b))
    }, j.prototype.checkMarkerGeofence = function(a, b) {
        if (a.fences)
            for (var c, d = 0; c = a.fences[d]; d++) {
                var e = a.getPosition();
                this.checkGeofence(e.lat(), e.lng(), c) || b(a, c)
            }
    }, j.prototype.toImage = function(a) {
        var a = a || {},
            b = {};
        if (b.size = a.size || [this.el.clientWidth, this.el.clientHeight], b.lat = this.getCenter().lat(), b.lng = this.getCenter().lng(), this.markers.length > 0) {
            b.markers = [];
            for (var c = 0; c < this.markers.length; c++) b.markers.push({
                lat: this.markers[c].getPosition().lat(),
                lng: this.markers[c].getPosition().lng()
            })
        }
        if (this.polylines.length > 0) {
            var d = this.polylines[0];
            b.polyline = {}, b.polyline.path = google.maps.geometry.encoding.encodePath(d.getPath()), b.polyline.strokeColor = d.strokeColor, b.polyline.strokeOpacity = d.strokeOpacity, b.polyline.strokeWeight = d.strokeWeight
        }
        return j.staticMapURL(b)
    }, j.staticMapURL = function(a) {
        function b(a, b) {
            if ("#" === a[0] && (a = a.replace("#", "0x"), b)) {
                if (b = parseFloat(b), b = Math.min(1, Math.max(b, 0)), 0 === b) return "0x00000000";
                b = (255 * b).toString(16), 1 === b.length && (b += b), a = a.slice(0, 8) + b
            }
            return a
        }
        var c, d = [],
            e = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
        a.url && (e = a.url, delete a.url), e += "?";
        var f = a.markers;
        delete a.markers, !f && a.marker && (f = [a.marker], delete a.marker);
        var g = a.styles;
        delete a.styles;
        var h = a.polyline;
        if (delete a.polyline, a.center) d.push("center=" + a.center), delete a.center;
        else if (a.address) d.push("center=" + a.address), delete a.address;
        else if (a.lat) d.push(["center=", a.lat, ",", a.lng].join("")), delete a.lat, delete a.lng;
        else if (a.visible) {
            var i = encodeURI(a.visible.join("|"));
            d.push("visible=" + i)
        }
        var j = a.size;
        j ? (j.join && (j = j.join("x")), delete a.size) : j = "630x300", d.push("size=" + j), a.zoom || a.zoom === !1 || (a.zoom = 15);
        var k = a.hasOwnProperty("sensor") ? !!a.sensor : !0;
        delete a.sensor, d.push("sensor=" + k);
        for (var l in a) a.hasOwnProperty(l) && d.push(l + "=" + a[l]);
        if (f)
            for (var m, n, o = 0; c = f[o]; o++) {
                m = [], c.size && "normal" !== c.size ? (m.push("size:" + c.size), delete c.size) : c.icon && (m.push("icon:" + encodeURI(c.icon)), delete c.icon), c.color && (m.push("color:" + c.color.replace("#", "0x")), delete c.color), c.label && (m.push("label:" + c.label[0].toUpperCase()), delete c.label), n = c.address ? c.address : c.lat + "," + c.lng, delete c.address, delete c.lat, delete c.lng;
                for (var l in c) c.hasOwnProperty(l) && m.push(l + ":" + c[l]);
                m.length || 0 === o ? (m.push(n), m = m.join("|"), d.push("markers=" + encodeURI(m))) : (m = d.pop() + encodeURI("|" + n), d.push(m))
            }
        if (g)
            for (var o = 0; o < g.length; o++) {
                var p = [];
                g[o].featureType && p.push("feature:" + g[o].featureType.toLowerCase()), g[o].elementType && p.push("element:" + g[o].elementType.toLowerCase());
                for (var q = 0; q < g[o].stylers.length; q++)
                    for (var r in g[o].stylers[q]) {
                        var s = g[o].stylers[q][r];
                        ("hue" == r || "color" == r) && (s = "0x" + s.substring(1)), p.push(r + ":" + s)
                    }
                var t = p.join("|");
                "" != t && d.push("style=" + t)
            }
        if (h) {
            if (c = h, h = [], c.strokeWeight && h.push("weight:" + parseInt(c.strokeWeight, 10)), c.strokeColor) {
                var u = b(c.strokeColor, c.strokeOpacity);
                h.push("color:" + u)
            }
            if (c.fillColor) {
                var v = b(c.fillColor, c.fillOpacity);
                h.push("fillcolor:" + v)
            }
            var w = c.path;
            if (w.join)
                for (var x, q = 0; x = w[q]; q++) h.push(x.join(","));
            else h.push("enc:" + w);
            h = h.join("|"), d.push("path=" + encodeURI(h))
        }
        var y = window.devicePixelRatio || 1;
        return d.push("scale=" + y), d = d.join("&"), e + d
    }, j.prototype.addMapType = function(a, b) {
        if (!b.hasOwnProperty("getTileUrl") || "function" != typeof b.getTileUrl) throw "'getTileUrl' function required.";
        b.tileSize = b.tileSize || new google.maps.Size(256, 256);
        var c = new google.maps.ImageMapType(b);
        this.map.mapTypes.set(a, c)
    }, j.prototype.addOverlayMapType = function(a) {
        if (!a.hasOwnProperty("getTile") || "function" != typeof a.getTile) throw "'getTile' function required.";
        var b = a.index;
        delete a.index, this.map.overlayMapTypes.insertAt(b, a)
    }, j.prototype.removeOverlayMapType = function(a) {
        this.map.overlayMapTypes.removeAt(a)
    }, j.prototype.addStyle = function(a) {
        var b = new google.maps.StyledMapType(a.styles, {
            name: a.styledMapName
        });
        this.map.mapTypes.set(a.mapTypeId, b)
    }, j.prototype.setStyle = function(a) {
        this.map.setMapTypeId(a)
    }, j.prototype.createPanorama = function(a) {
        return a.hasOwnProperty("lat") && a.hasOwnProperty("lng") || (a.lat = this.getCenter().lat(), a.lng = this.getCenter().lng()), this.panorama = j.createPanorama(a), this.map.setStreetView(this.panorama), this.panorama
    }, j.createPanorama = function(b) {
        var c = h(b.el, b.context);
        b.position = new google.maps.LatLng(b.lat, b.lng), delete b.el, delete b.context, delete b.lat, delete b.lng;
        for (var d = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], e = a({
                visible: !0
            }, b), f = 0; f < d.length; f++) delete e[d[f]];
        for (var g = new google.maps.StreetViewPanorama(c, e), f = 0; f < d.length; f++) ! function(a, c) {
            b[c] && google.maps.event.addListener(a, c, function() {
                b[c].apply(this)
            })
        }(g, d[f]);
        return g
    }, j.prototype.on = function(a, b) {
        return j.on(a, this, b)
    }, j.prototype.off = function(a) {
        j.off(a, this)
    }, j.prototype.once = function(a, b) {
        return j.once(a, this, b)
    }, j.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], j.on = function(a, b, c) {
        if (-1 == j.custom_events.indexOf(a)) return b instanceof j && (b = b.map), google.maps.event.addListener(b, a, c);
        var d = {
            handler: c,
            eventName: a
        };
        return b.registered_events[a] = b.registered_events[a] || [], b.registered_events[a].push(d), d
    }, j.off = function(a, b) {
        -1 == j.custom_events.indexOf(a) ? (b instanceof j && (b = b.map), google.maps.event.clearListeners(b, a)) : b.registered_events[a] = []
    }, j.once = function(a, b, c) {
        return -1 == j.custom_events.indexOf(a) ? (b instanceof j && (b = b.map), google.maps.event.addListenerOnce(b, a, c)) : void 0
    }, j.fire = function(a, b, c) {
        if (-1 == j.custom_events.indexOf(a)) google.maps.event.trigger(b, a, Array.prototype.slice.apply(arguments).slice(2));
        else if (a in c.registered_events)
            for (var d = c.registered_events[a], e = 0; e < d.length; e++) ! function(a, b, c) {
                a.apply(b, [c])
            }(d[e].handler, c, b)
    }, j.geolocate = function(a) {
        var b = a.always || a.complete;
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(c) {
            a.success(c), b && b()
        }, function(c) {
            a.error(c), b && b()
        }, a.options) : (a.not_supported(), b && b())
    }, j.geocode = function(a) {
        this.geocoder = new google.maps.Geocoder;
        var b = a.callback;
        a.hasOwnProperty("lat") && a.hasOwnProperty("lng") && (a.latLng = new google.maps.LatLng(a.lat, a.lng)), delete a.lat, delete a.lng, delete a.callback, this.geocoder.geocode(a, function(a, c) {
            b(a, c)
        })
    }, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(a) {
        for (var b, c = new google.maps.LatLngBounds, d = this.getPaths(), e = 0; e < d.getLength(); e++) {
            b = d.getAt(e);
            for (var f = 0; f < b.getLength(); f++) c.extend(b.getAt(f))
        }
        return c
    }), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(a) {
        var b = this.getBounds();
        if (null !== b && !b.contains(a)) return !1;
        for (var c = !1, d = this.getPaths().getLength(), e = 0; d > e; e++)
            for (var f = this.getPaths().getAt(e), g = f.getLength(), h = g - 1, i = 0; g > i; i++) {
                var j = f.getAt(i),
                    k = f.getAt(h);
                (j.lng() < a.lng() && k.lng() >= a.lng() || k.lng() < a.lng() && j.lng() >= a.lng()) && j.lat() + (a.lng() - j.lng()) / (k.lng() - j.lng()) * (k.lat() - j.lat()) < a.lat() && (c = !c), h = i
            }
        return c
    }), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(a) {
        return google.maps.geometry ? google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), a) <= this.getRadius() : !0
    }), google.maps.LatLngBounds.prototype.containsLatLng = function(a) {
        return this.contains(a)
    }, google.maps.Marker.prototype.setFences = function(a) {
        this.fences = a
    }, google.maps.Marker.prototype.addFence = function(a) {
        this.fences.push(a)
    }, google.maps.Marker.prototype.getId = function() {
        return this.__gm_id
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        if (null == this) throw new TypeError;
        var b = Object(this),
            c = b.length >>> 0;
        if (0 === c) return -1;
        var d = 0;
        if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
            if (e in b && b[e] === a) return e;
        return -1
    }), j
});
//# sourceMappingURL=gmaps.min.js.map

(function($, window, document, undefined) {
    function appendPrefixedStyles(obj, prop, val) {
        if (prop.charAt(0) === '*') {
            obj[prop.substring(1)] = val;
        } else {
            obj['-ms-' + prop] = val;
            obj['-webkit-' + prop] = val;
            obj[prop] = val;
        }
    }
    $.fn.precss = function(styles) {
        var prefixedStyles = {};
        if (arguments.length === 1) {
            for (style in styles) {
                if (styles.hasOwnProperty(style)) {
                    appendPrefixedStyles(prefixedStyles, style, styles[style]);
                }
            }
        } else {
            appendPrefixedStyles(prefixedStyles, arguments[0], arguments[1]);
        }
        this.css(prefixedStyles);
        return this;
    }
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';
    var supportsCSSProp = function(featurename) {
        var feature = false;
        var domPrefixes = 'Webkit Moz ms O'.split(' ');
        var elm = document.createElement('div');
        var featurenameCapital = null;
        featurename = featurename.toLowerCase();
        if (elm.style[featurename]) {
            feature = true;
        }
        if (feature === false) {
            featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
            for (var i = 0; i < domPrefixes.length; i++) {
                if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) {
                    feature = true;
                    break;
                }
            }
        }
        return feature;
    };
    var supports = {};
    supports.animation = supportsCSSProp('animation');
    supports.transition = supportsCSSProp('transition');
    supports.transform = supportsCSSProp('transform');
    var pluginName = 'pogoSlider';
    var defaults = {
        autoplayTimeout: 4000,
        autoplay: true,
        baseZindex: 1,
        displayProgess: true,
        onSlideStart: null,
        onSlideEnd: null,
        onSliderPause: null,
        onSliderResume: null,
        slideTransition: 'slide',
        slideTransitionDuration: 1000,
        elementTransitionStart: 500,
        elementTransitionDuration: 1000,
        elementTransitionIn: 'slideUp',
        elementTransitionOut: 'slideDown',
        generateButtons: true,
        buttonPosition: 'CenterHorizontal',
        generateNav: true,
        navPosition: 'Bottom',
        preserveTargetSize: false,
        targetWidth: 1000,
        targetHeight: 300,
        responsive: false,
        pauseOnHover: true
    };

    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        this.currentSlideIndex = 0;
        this.prevSlideIndex = 0;
        this.slideTimeoutId = 0;
        this.slides = [];
        this.calls = [];
        this.paused = false;
        this.navigating = false;
        this.slideStartTime = null;
        this.slideTimeRemaining = 0;
        this._init();
    }
    Plugin.prototype = {
        _init: function() {
            var self = this;
            self.$element.find('.pogoSlider-slide').each(function() {
                var children = [];
                var elementTransitionDuration = 0;
                $(this).data('original-styles', $(this).attr('style'));
                $(this).find('.pogoSlider-slide-element').each(function() {
                    var startTime = parseInt($(this).data('start')) !== undefined ? $(this).data('start') : self.settings.elementTransitionStart;
                    var duration = parseInt($(this).data('duration')) || self.settings.elementTransitionDuration;
                    if ((startTime + duration) > elementTransitionDuration) {
                        elementTransitionDuration = (startTime + duration);
                    }
                    children.push({
                        $element: $(this),
                        element: this,
                        startTime: startTime,
                        duration: duration,
                        transitionIn: $(this).data('in') || self.settings.elementTransitionIn,
                        transitionOut: $(this).data('out') || self.settings.elementTransitionOut
                    });
                    $(this).css('opacity', 0);
                });
                var slide = {
                    $element: $(this),
                    element: this,
                    transition: $(this).data('transition') || self.settings.slideTransition,
                    duration: parseInt($(this).data('duration')) || self.settings.slideTransitionDuration,
                    elementTransitionDuration: elementTransitionDuration,
                    totalSlideDuration: self.settings.autoplayTimeout + elementTransitionDuration,
                    children: children
                };
                self.slides.push(slide);
            });
            self.numSlides = self.slides.length;
            self.slides[0].$element.css('opacity', 1);
            if (self.settings.autoplay && self.settings.displayProgess) {
                self._createProgessBar();
            }
            self.$element.css('padding-bottom', (100 / (self.settings.targetWidth / self.settings.targetHeight)) + '%');
            var numImages = self.$element.find('img').length;
            if (numImages > 0) {
                var imagesLoaded = 0;
                self.$element.prepend('<div class="pogoSlider-loading"><div class="pogoSlider-loading-icon"></div></div>');
                self.$element.find('img').one('load', function() {
                    if (++imagesLoaded === numImages) {
                        $('.pogoSlider-loading').remove();
                        self._onSliderReady();
                    }
                }).each(function() {
                    if (this.complete) {
                        $(this).trigger('load');
                    }
                });
            } else {
                self._onSliderReady();
            }
        },
        _onSliderReady: function() {
            var self = this;
            if (self.settings.autoplay) {
                self.slideStartTime = new Date();
                self.slideTimeRemaining = self.slides[0].totalSlideDuration;
                self._slideTimeout(self.slideTimeRemaining);
            }
            if (self.settings.generateButtons && self.slides.length > 1) {
                self._createDirButtons();
            }
            if (self.settings.generateNav && self.slides.length > 1) {
                self._createNavigation();
            }
            if (self.settings.preserveTargetSize) {
                self._preserveTargetSize();
                if (self.settings.responsive) {
                    $(window).on('resize', function() {
                        self._preserveTargetSize();
                    });
                }
            }
            if (self.settings.pauseOnHover) {
                self.$element.on('mouseenter', function() {
                    self.pause();
                });
                self.$element.on('mouseleave', function() {
                    self.resume();
                });
            }
            self._onSlideStart(0);
        },
        _createDirButtons: function() {
            var self = this;
            self.$element.addClass('pogoSlider--dir' + self.settings.buttonPosition);
            $('<button class="pogoSlider-dir-btn pogoSlider-dir-btn--prev"></button>').appendTo(self.$element).on('click', function() {
                self.prevSlide();
            });
            $('<button class="pogoSlider-dir-btn pogoSlider-dir-btn--next"></button>').appendTo(self.$element).on('click', function() {
                self.nextSlide();
            });
        },
        _createNavigation: function() {
            var self = this;
            self.$element.addClass('pogoSlider--nav' + self.settings.navPosition);
            var $navContainer = $('<ul class="pogoSlider-nav"></ul>').appendTo(self.$element);
            for (var i = 0; i < self.slides.length; i++) {
                $('<li data-num="' + i + '"><button class="pogoSlider-nav-btn"></button></li>').appendTo($navContainer).on('click', function() {
                    self.toSlide($(this).data('num'));
                });
            }
        },
        getAppliedProps: function(el) {
            var styleSheets = document.styleSheets;
            var stylesReg = new RegExp('{(.+)}');
            el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
            var inlineStyles = el.getAttribute('style').replace(/ /g, '').split(';');
            var props = [];
            for (var k = 0; k < inlineStyles.length; k++) {
                var inlineProp = inlineStyles[k].split(':')[0];
                if (inlineProp && props.indexOf(inlineProp) === -1) {
                    props.push(inlineProp);
                }
            }
            return props;
        },
        _preserveTargetSize: function() {
            var self = this;
            var unitReg = new RegExp('px|%|em', 'i');
            var numReg = new RegExp('[0-9]*.?[0-9]+');
            var pixelReg = new RegExp('px', 'i');
            var scaleFactor = 1;
            if (this.scaledBy) {
                scaleFactor = (this.$element.width() / this.settings.targetWidth) / this.scaledBy;
            } else {
                scaleFactor = this.$element.width() / this.settings.targetWidth;
            }
            this.scaledBy = this.$element.width() / this.settings.targetWidth;
            this.$element.find('.pogoSlider-slide-element').each(function() {
                var elementStyles = window.getComputedStyle(this);
                var appliedProps = self.getAppliedProps(this);
                var styleObj = {};
                if (!$.data(self, 'originalStyles')) {
                    $.data(self, 'originalStyles', $(this).attr('style'));
                }
                for (var i = 0; i < appliedProps.length; i++) {
                    var cssVal = elementStyles.getPropertyValue(appliedProps[i]);
                    if (unitReg.test(cssVal) && numReg.test(cssVal)) {
                        var numVal = numReg.exec(cssVal);
                        var unitVal = unitReg.exec(cssVal);
                        if (pixelReg.test(unitVal[0])) {
                            styleObj[appliedProps[i]] = Math.ceil(numVal[0] * scaleFactor) + unitVal[0];
                        } else {
                            styleObj[appliedProps[i]] = (numVal[0] * scaleFactor) + unitVal[0];
                        }
                    }
                }
                $(this).css(styleObj);
            });
        },
        _createProgessBar: function() {
            var progressHtml = '';
            progressHtml += '<div class="pogoSlider-progressBar">';
            progressHtml += '<div class="pogoSlider-progressBar-duration"></div>';
            progressHtml += '</div>';
            for (var i = 0; i < this.slides.length; i++) {
                this.slides[i].$element.prepend(progressHtml);
            }
        },
        _slideTimeout: function(pauseFor) {
            var self = this;
            var timeoutId;
            timeoutId = self.slideTimeoutId = setTimeout(function() {
                if (!self.paused && timeoutId === self.slideTimeoutId) {
                    self._changeToNext();
                }
            }, pauseFor);
        },
        pause: function() {
            if (this.settings.autoplay) {
                this.paused = true;
                clearTimeout(this.slideTimeoutId);
                if (this.settings.displayProgess) {
                    this.$element.find('.pogoSlider-progressBar-duration').stop(true);
                }
                this.slidePauseTime = new Date();
                this.slideTimeRemaining = this.slideTimeRemaining - ((new Date()) - this.slideStartTime);
                for (var i = 0; i < this.slides[this.currentSlideIndex].children.length; i++) {
                    this.slides[this.currentSlideIndex].children[i].$element.precss('animation-play-state', '');
                }
                if (this.settings.onSliderPause) {
                    this.settings.onSliderPause.apply(this);
                }
            }
        },
        resume: function() {
            if (this.settings.autoplay) {
                this.paused = false;
                this.slideStartTime = new Date();
                for (var i = 0; i < this.slides[this.currentSlideIndex].children.length; i++) {
                    this.slides[this.currentSlideIndex].children[i].$element.precss('animation-play-state', '');
                }
                if (this.slideTimeRemaining > 0 && !this.navigating) {
                    if (this.settings.displayProgess) {
                        this.$element.find('.pogoSlider-progressBar-duration').animate({
                            'width': '100%'
                        }, this.slideTimeRemaining, 'linear');
                    }
                    this._slideTimeout(this.slideTimeRemaining);
                }
                if (this.settings.onSliderResume) {
                    this.settings.onSliderResume.apply(this);
                }
            }
        },
        nextSlide: function() {
            if (!this.navigating) {
                clearTimeout(this.slideTimeoutId);
                this.prevSlideIndex = this.currentSlideIndex;
                if (++this.currentSlideIndex > (this.numSlides - 1)) {
                    this.currentSlideIndex = 0;
                }
                this._changeSlide(this.prevSlideIndex, this.currentSlideIndex);
            }
        },
        prevSlide: function() {
            if (!this.navigating) {
                clearTimeout(this.slideTimeoutId);
                this.prevSlideIndex = this.currentSlideIndex;
                if (--this.currentSlideIndex < 0) {
                    this.currentSlideIndex = this.numSlides - 1;
                }
                this._changeSlide(this.prevSlideIndex, this.currentSlideIndex);
            }
        },
        toSlide: function(slideIndex) {
            if (!this.navigating) {
                clearTimeout(this.slideTimeoutId);
                if (slideIndex === this.currentSlideIndex || slideIndex > (this.slides.length - 1)) {
                    return;
                }
                this.prevSlideIndex = this.currentSlideIndex;
                this.currentSlideIndex = slideIndex;
                this._changeSlide(this.prevSlideIndex, this.currentSlideIndex);
            }
        },
        destroy: function() {
            this.paused = true;
            clearTimeout(this.slideTimeoutId);
            $.removeData(this.element, 'plugin_' + pluginName);
        },
        _changeToNext: function() {
            this.prevSlideIndex = this.currentSlideIndex;
            if (++this.currentSlideIndex > (this.numSlides - 1)) {
                this.currentSlideIndex = 0;
            }
            this._changeSlide(this.prevSlideIndex, this.currentSlideIndex);
        },
        _changeSlide: function(prevSlideIndex, currentSlideIndex) {
            var self = this;
            var slideTransitions;
            self._onSlideEnd(prevSlideIndex);
            self.navigating = true;
            if (supports.animation && supports.transition && supports.transform) {
                slideTransitions = self.slideTransitions;
            } else {
                slideTransitions = self.compatSlideTransitions;
            }
            var slideTransition = slideTransitions[self.slides[currentSlideIndex].transition] ? self.slides[currentSlideIndex].transition : 'slide';
            var slideTransitionCallback = slideTransitions[slideTransition].apply(self, [prevSlideIndex, currentSlideIndex]);
            setTimeout(function() {
                if (slideTransitionCallback) {
                    slideTransitionCallback();
                }
                self.navigating = false;
                self._slideCleanup(prevSlideIndex, false);
                self._slideElementCleanup(prevSlideIndex);
                if (self.settings.autoplay) {
                    self._slideTimeout(self.slides[currentSlideIndex].totalSlideDuration);
                }
                self._onSlideStart(currentSlideIndex);
            }, self.slides[currentSlideIndex].duration);
        },
        _onSlideStart: function(slideIndex) {
            this.slides[slideIndex].$element.css('z-index', 1);
            if (this.settings.autoplay) {
                this.slideStartTime = new Date();
                this.slideTimeRemaining = this.slides[slideIndex].totalSlideDuration;
                if (this.settings.displayProgess && !this.paused) {
                    this.slides[slideIndex].$element.find('.pogoSlider-progressBar-duration').css('width', '0').animate({
                        'width': '100%'
                    }, this.slideTimeRemaining, 'linear');
                }
            }
            if (this.slides[slideIndex].children.length > 0) {
                this._slideElementsTransitionIn(slideIndex);
            }
            if (this.paused) {
                for (var i = 0; i < this.slides[slideIndex].children.length; i++) {
                    this.slides[slideIndex].children[i].$element.precss('animation-play-state', '');
                }
            }
            if (this.settings.generateNav) {
                this.$element.find('.pogoSlider-nav-btn').removeClass('pogoSlider-nav-btn--selected');
                this.$element.find('.pogoSlider-nav-btn').eq(slideIndex).addClass('pogoSlider-nav-btn--selected');
            }
            if (this.settings.onSlideStart) {
                this.settings.onSlideStart.apply(this);
            }
        },
        _onSlideEnd: function(slideIndex) {
            var timeElapsed;
            if (this.settings.autoplay) {
                if (this.settings.displayProgess) {
                    this.slides[slideIndex].$element.find('.pogoSlider-progressBar-duration').stop(true).css('width', '0');
                }
            }
            if (this.paused) {
                timeElapsed = this.slides[slideIndex].totalSlideDuration - this.slideTimeRemaining;
                for (var i = 0; i < this.slides[slideIndex].children.length; i++) {
                    this.slides[slideIndex].children[i].$element.precss('animation-play-state', '');
                }
            } else {
                timeElapsed = this.slides[slideIndex].totalSlideDuration - (this.slideTimeRemaining - ((new Date()) - this.slideStartTime));
            }
            if (this.slides[slideIndex].children.length > 0 && timeElapsed > this.slides[slideIndex].elementTransitionDuration) {
                this._slideElementsTransitionOut(slideIndex);
            }
            if (this.settings.onSlideEnd) {
                this.settings.onSlideEnd.apply(this);
            }
        },
        _slideElementsTransitionIn: function(slideIndex) {
            for (var i = 0; i < this.slides[slideIndex].children.length; i++) {
                var el = this.slides[slideIndex].children[i];
                el.$element.precss({
                    '*opacity': 1,
                    'animation-duration': el.duration + 'ms',
                    'animation-delay': el.startTime + 'ms'
                }).addClass('pogoSlider-animation-' + el.transitionIn + 'In');
            }
        },
        _slideElementsTransitionOut: function(slideIndex) {
            for (var i = 0; i < this.slides[slideIndex].children.length; i++) {
                var el = this.slides[slideIndex].children[i];
                el.$element.precss('animation-delay', '').removeClass('pogoSlider-animation-' + el.transitionIn + 'In').addClass('pogoSlider-animation-' + el.transitionOut + 'Out');
            }
        },
        _slideCleanup: function(slideIndex, slideVisible) {
            if (this.slides[slideIndex].$element.find('.pogoSlider-slide-slice').length > 0) {
                this._removeSlideSlices(slideIndex);
            }
            this.slides[slideIndex].$element.attr('style', this.slides[slideIndex].$element.data('original-styles')).css('opacity', slideVisible ? '1' : '0');
        },
        _slideElementCleanup: function(slideIndex) {
            var removePogoSlideElementClasses = function(index, className) {
                return (className.match(/pogoSlider-(?:(?:transition)|(?:animation))(?:-[a-zA-Z0-9]+)?(?:--[a-z]+)?/gi) || []).join(' ');
            };
            var removePogoSlideElementStyles = function(index, style) {
                return style.replace(/(?:-webkit-)?(?:-ms-)?((?:transition)|(?:animation))[^;]+;/g, '');
            };
            this.slides[slideIndex].$element.find('.pogoSlider-progressBar-duration').css('width', '0');
            for (var i = 0; i < this.slides[slideIndex].children.length; i++) {
                this.slides[slideIndex].children[i].$element.removeClass(removePogoSlideElementClasses).attr('style', removePogoSlideElementStyles).css('opacity', 0);
            }
        },
        _createSlideSlices: function(slideIndex, rows, cols) {
            var numSlices = cols * rows;
            var sliceWidth = 100 / cols;
            var sliceHeight = 100 / rows;
            var sliceInnerWidth = 100 * cols;
            var sliceInnerHeight = 100 * rows;
            var $el = this.slides[slideIndex].$element;
            var styleAttr = $el.attr('style');
            var timeElapsed;
            if (this.paused) {
                timeElapsed = this.slides[slideIndex].totalSlideDuration - this.slideTimeRemaining;
            } else {
                timeElapsed = this.slides[slideIndex].totalSlideDuration - (this.slideTimeRemaining - ((new Date()) - this.slideStartTime));
            }
            if (slideIndex === this.prevSlideIndex && this.slides[slideIndex].children.length > 0 && timeElapsed < this.slides[slideIndex].elementTransitionDuration) {
                for (var i = 0; i < this.slides[slideIndex].children.length; i++) {
                    var animationDelay = (this.slides[slideIndex].children[i].startTime - timeElapsed) + 'ms';
                    this.slides[slideIndex].children[i].$element.precss('animation-delay', animationDelay);
                }
            }
            $el.children().wrapAll('<div class="pogoSlider-slide-slice" style="' + 'width:' + sliceWidth + '%;height:' + sliceHeight + '%;top:0%;left:0%;' + '"/>').wrapAll('<div class="pogoSlider-slide-slice-inner" style="' + styleAttr + 'width:' + sliceInnerWidth + '%;height:' + sliceInnerHeight + '%;top:0%;left:0%;' + '"/>');
            $el.attr('style', function(i, style) {
                return style.replace(/(?:background)[^;]+;/g, '');
            });
            for (var j = 0; j < numSlices; j++) {
                var colNum = j % rows;
                var rowNum = Math.floor(j / rows);
                var slicePosStyles = 'width:' + sliceWidth + '%;height:' + sliceHeight + '%;top:' + (sliceHeight * colNum) + '%;left:' + (sliceWidth * rowNum) + '%;';
                var sliceInnerPosStyles = 'width:' + sliceInnerWidth + '%;height:' + sliceInnerHeight + '%;top:-' + (100 * colNum) + '%;left:-' + (100 * rowNum) + '%;';
                var sliceInnerBackgroundStyles = '';
                if (this.settings.preserveTargetSize) {
                    sliceInnerBackgroundStyles = 'background-size:' + this.$element.width() + 'px ' + parseFloat(this.$element.css('padding-bottom')) + 'px;';
                }
                var el = $el.find('.pogoSlider-slide-slice').last();
                if (j != 0) {
                    el = el.clone(true, true).appendTo(this.slides[slideIndex].element);
                }
                el.attr('style', slicePosStyles).find('.pogoSlider-slide-slice-inner').attr('style', styleAttr + sliceInnerPosStyles + sliceInnerBackgroundStyles);
            }
        },
        _removeSlideSlices: function(slideIndex) {
            var self = this;
            var $el = self.slides[slideIndex].$element;
            $el.attr('style', $el.data('original-styles'));
            $el.find('.pogoSlider-slide-slice').not(':first').remove();
            $el.find('.pogoSlider-slide-slice-inner').children().unwrap();
            $el.find('.pogoSlider-slide-slice').children().unwrap();
        },
        _generateARandomArray: function(numItems) {
            var arr = [];
            for (var i = 0; i < numItems; i++) {
                arr.push(i);
            }
            for (var j = arr.length - 1; j > 0; j--) {
                var k = Math.floor(Math.random() * (j + 1));
                var temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            }
            return arr;
        },
        slideTransitions: {
            fade: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.precss({
                    '*opacity': '0',
                    'transition-duration': currentSlide.duration + 'ms'
                });
                currentSlide.$element.precss({
                    '*opacity': '1',
                    'transition-duration': currentSlide.duration + 'ms'
                });
            },
            slide: function(prevSlideIndex, currentSlideIndex) {
                var method;
                if (currentSlideIndex === 0 && prevSlideIndex === this.slides.length - 1) {
                    method = 'slideLeft';
                } else if (prevSlideIndex === 0 && currentSlideIndex === this.slides.length - 1) {
                    method = 'slideRight';
                } else if (currentSlideIndex > prevSlideIndex) {
                    method = 'slideLeft';
                } else {
                    method = 'slideRight';
                }
                return this.slideTransitions[method].apply(this, [prevSlideIndex, currentSlideIndex]);
            },
            verticalSlide: function(prevSlideIndex, currentSlideIndex) {
                var method;
                if (currentSlideIndex === 0 && prevSlideIndex === this.slides.length - 1) {
                    method = 'slideUp';
                } else if (prevSlideIndex === 0 && currentSlideIndex === this.slides.length - 1) {
                    method = 'slideDown';
                } else if (currentSlideIndex > prevSlideIndex) {
                    method = 'slideUp';
                } else {
                    method = 'slideDown';
                }
                return this.slideTransitions[method].apply(this, [prevSlideIndex, currentSlideIndex]);
            },
            slideLeft: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.precss('animation-duration', currentSlide.duration + 'ms').addClass('pogoSlider-animation-leftOut');
                currentSlide.$element.precss({
                    '*opacity': '1',
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-leftIn');
                return function() {
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-leftOut');
                    currentSlide.$element.attr('style', currentSlide.$element.data('original-styles')).css('opacity', '1').removeClass('pogoSlider-animation-leftIn');
                };
            },
            slideRight: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.precss('animation-duration', currentSlide.duration + 'ms').addClass('pogoSlider-animation-rightOut');
                currentSlide.$element.precss({
                    '*opacity': '1',
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-rightIn');
                return function() {
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-rightOut');
                    currentSlide.$element.attr('style', currentSlide.$element.data('original-styles')).css('opacity', '1').removeClass('pogoSlider-animation-rightIn');
                };
            },
            slideUp: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.precss('animation-duration', currentSlide.duration + 'ms').addClass('pogoSlider-animation-upOut');
                currentSlide.$element.precss({
                    '*opacity': '1',
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-upIn');
                return function() {
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-upOut');
                    currentSlide.$element.attr('style', currentSlide.$element.data('original-styles')).css('opacity', '1').removeClass('pogoSlider-animation-upIn');
                };
            },
            slideDown: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.precss('animation-duration', currentSlide.duration + 'ms').addClass('pogoSlider-animation-downOut');
                currentSlide.$element.precss({
                    '*opacity': '1',
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-downIn');
                return function() {
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-downOut');
                    currentSlide.$element.attr('style', currentSlide.$element.data('original-styles')).css('opacity', '1').removeClass('pogoSlider-animation-downIn');
                };
            },
            slideRevealLeft: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.precss({
                    '*z-index': self.settings.baseZindex + 1,
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-leftOut');
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                return function() {
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-leftOut');
                };
            },
            slideRevealRight: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.precss({
                    '*z-index': self.settings.baseZindex + 1,
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-rightOut');
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                return function() {
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-rightOut');
                };
            },
            slideOverLeft: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                currentSlide.$element.precss({
                    '*opacity': '1',
                    '*z-index': this.settings.baseZindex + 1,
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-leftIn');
                return function() {
                    currentSlide.$element.attr('style', currentSlide.$element.data('original-styles')).css('opacity', '1').removeClass('pogoSlider-animation-leftIn');
                };
            },
            slideOverRight: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                currentSlide.$element.precss({
                    '*opacity': '1',
                    '*z-index': this.settings.baseZindex + 1,
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-rightIn');
                return function() {
                    currentSlide.$element.attr('style', currentSlide.$element.data('original-styles')).css('opacity', '1').removeClass('pogoSlider-animation-rightIn');
                };
            },
            expandReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.$element.css('overflow', 'visible');
                self.slides[prevSlideIndex].$element.precss({
                    '*z-index': self.settings.baseZindex + 1,
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-expandReveal');
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                return function() {
                    self.$element.css('overflow', '');
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-expandReveal');
                };
            },
            shrinkReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.precss({
                    '*z-index': self.settings.baseZindex + 1,
                    'animation-duration': currentSlide.duration + 'ms'
                }).addClass('pogoSlider-animation-shrinkReveal');
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                return function() {
                    self.slides[prevSlideIndex].$element.removeClass('pogoSlider-animation-shrinkReveal');
                };
            },
            verticalSplitReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 1, 2);
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                $slices.precss('animation-duration', currentSlide.duration + 'ms');
                $slices.eq(0).addClass('pogoSlider-animation-leftOut');
                $slices.eq(1).addClass('pogoSlider-animation-rightOut');
            },
            horizontalSplitReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 2, 1);
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                $slices.precss('animation-duration', currentSlide.duration + 'ms');
                $slices.eq(0).addClass('pogoSlider-animation-upOut');
                $slices.eq(1).addClass('pogoSlider-animation-downOut');
            },
            zipReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 1, Math.round(self.$element.width() / 100));
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                $slices.precss('animation-duration', currentSlide.duration + 'ms');
                $slices.each(function(index) {
                    if (index % 2 === 0) {
                        $(this).addClass('pogoSlider-animation-upOut');
                    } else {
                        $(this).addClass('pogoSlider-animation-downOut');
                    }
                });
            },
            barRevealDown: function(prevSlideIndex, currentSlideIndex) {
                return this.slideTransitions['barReveal'].apply(this, [prevSlideIndex, currentSlideIndex, 'down']);
            },
            barRevealUp: function(prevSlideIndex, currentSlideIndex) {
                return this.slideTransitions['barReveal'].apply(this, [prevSlideIndex, currentSlideIndex, 'up']);
            },
            barReveal: function(prevSlideIndex, currentSlideIndex, direction) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 1, Math.round(self.$element.width() / 100));
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                var animationDelay = currentSlide.duration / ($slices.length + 1);
                var animationDuration = animationDelay * 2;
                $slices.precss('animation-duration', animationDuration + 'ms');
                $slices.each(function(index) {
                    if (direction === 'down') {
                        $(this).addClass('pogoSlider-animation-downOut').precss('animation-delay', animationDelay * index + 'ms');
                    } else {
                        $(this).addClass('pogoSlider-animation-upOut').precss('animation-delay', animationDelay * index + 'ms');
                    }
                });
            },
            blocksReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                var height = 0;
                if (self.settings.preserveTargetSize) {
                    height = parseFloat(self.$element.css('padding-bottom'));
                } else {
                    height = self.$element.height();
                }
                var numRows = Math.round(height / 100);
                var numCols = Math.round(self.$element.width() / 100);
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                var randArr = self._generateARandomArray(numRows * numCols);
                self._createSlideSlices(prevSlideIndex, numRows, numCols);
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                var animationDelay = currentSlide.duration / ($slices.length + 1);
                var animationDuration = animationDelay * 2;
                $slices.precss('animation-duration', animationDuration + 'ms');
                for (var i = 0; i < $slices.length; i++) {
                    $slices.eq(randArr.pop()).precss('animation-delay', (animationDelay * i) + 'ms').addClass('pogoSlider-animation-blocksReveal');
                }
            },
            fold: function(prevSlideIndex, currentSlideIndex) {
                var method;
                if (currentSlideIndex === 0 && prevSlideIndex === this.slides.length - 1) {
                    method = 'foldLeft';
                } else if (prevSlideIndex === 0 && currentSlideIndex === this.slides.length - 1) {
                    method = 'foldRight';
                } else if (currentSlideIndex > prevSlideIndex) {
                    method = 'foldLeft';
                } else {
                    method = 'foldRight';
                }
                return this.slideTransitions[method].apply(this, [prevSlideIndex, currentSlideIndex]);
            },
            foldRight: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                var prevSlide = self.slides[prevSlideIndex];
                self.$element.css('overflow', 'visible');
                prevSlide.$element.css({
                    'overflow': 'visible',
                    'z-index': self.settings.baseZindex
                });
                currentSlide.$element.css({
                    'opacity': 1,
                    'overflow': 'visible',
                    'z-index': self.settings.baseZindex + 1
                });
                self._createSlideSlices(prevSlideIndex, 1, 2);
                var $prevSlideSlices = prevSlide.$element.find('.pogoSlider-slide-slice');
                self._createSlideSlices(currentSlideIndex, 1, 2);
                var $currentSlideSlices = self.slides[currentSlideIndex].$element.find('.pogoSlider-slide-slice');
                var $bottomLeft = $prevSlideSlices.eq(0);
                var $topLeft = $currentSlideSlices.eq(0);
                var $topRight = $currentSlideSlices.eq(1);
                currentSlide.$element.prepend($bottomLeft.detach());
                prevSlide.$element.prepend($topLeft.detach());
                $bottomLeft.addClass('pogoSlider-animation-foldInRight').precss('animation-duration', currentSlide.duration + 'ms');
                $topRight.addClass('pogoSlider-animation-foldOutRight').precss('animation-duration', currentSlide.duration + 'ms');
                return function() {
                    self.$element.css('overflow', '');
                    currentSlide.$element.prepend($topLeft.detach());
                    prevSlide.$element.prepend($bottomLeft.detach());
                    self._slideCleanup(currentSlideIndex, true);
                };
            },
            foldLeft: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                var prevSlide = self.slides[prevSlideIndex];
                self.$element.css('overflow', 'visible');
                prevSlide.$element.css({
                    'overflow': 'visible',
                    'z-index': self.settings.baseZindex
                });
                currentSlide.$element.css({
                    'opacity': 1,
                    'overflow': 'visible',
                    'z-index': self.settings.baseZindex + 1
                });
                self._createSlideSlices(prevSlideIndex, 1, 2);
                var $prevSlideSlices = prevSlide.$element.find('.pogoSlider-slide-slice');
                self._createSlideSlices(currentSlideIndex, 1, 2);
                var $currentSlideSlices = self.slides[currentSlideIndex].$element.find('.pogoSlider-slide-slice');
                var $bottomRight = $prevSlideSlices.eq(1);
                var $topLeft = $currentSlideSlices.eq(0);
                var $topRight = $currentSlideSlices.eq(1);
                currentSlide.$element.append($bottomRight.detach());
                prevSlide.$element.append($topRight.detach());
                $bottomRight.addClass('pogoSlider-animation-foldInLeft').precss('animation-duration', currentSlide.duration + 'ms');
                $topLeft.addClass('pogoSlider-animation-foldOutLeft').precss('animation-duration', currentSlide.duration + 'ms');
                return function() {
                    self.$element.css('overflow', '');
                    self._slideCleanup(currentSlideIndex, true);
                };
            }
        },
        compatSlideTransitions: {
            fade: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.animate({
                    opacity: 0
                }, currentSlide.duration);
                currentSlide.$element.animate({
                    opacity: 1
                }, currentSlide.duration);
            },
            slide: function(prevSlideIndex, currentSlideIndex) {
                var method;
                if (prevSlideIndex > currentSlideIndex && prevSlideIndex === this.slides.length - 1 && currentSlideIndex === 0) {
                    method = 'slideLeft';
                } else if (prevSlideIndex < currentSlideIndex && prevSlideIndex === 0 && currentSlideIndex === this.slides.length - 1) {
                    method = 'slideRight';
                } else if (prevSlideIndex < currentSlideIndex) {
                    method = 'slideLeft';
                } else {
                    method = 'slideRight';
                }
                return this.slideTransitions[method].apply(this, [prevSlideIndex, currentSlideIndex]);
            },
            verticalSlide: function(prevSlideIndex, currentSlideIndex) {
                var method;
                if (prevSlideIndex > currentSlideIndex && prevSlideIndex === this.slides.length - 1 && currentSlideIndex === 0) {
                    method = 'slideUp';
                } else if (prevSlideIndex < currentSlideIndex && prevSlideIndex === 0 && currentSlideIndex === this.slides.length - 1) {
                    method = 'slideDown';
                } else if (prevSlideIndex < currentSlideIndex) {
                    method = 'slideUp';
                } else {
                    method = 'slideDown';
                }
                return this.slideTransitions[method].apply(this, [prevSlideIndex, currentSlideIndex]);
            },
            slideLeft: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.animate({
                    left: '-100%'
                }, currentSlide.duration);
                currentSlide.$element.css({
                    left: '100%',
                    'opacity': 1
                }).animate({
                    left: 0
                }, currentSlide.duration);
            },
            slideRight: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.animate({
                    left: '100%'
                }, currentSlide.duration);
                currentSlide.$element.css({
                    left: '-100%',
                    'opacity': 1
                }).animate({
                    left: 0
                }, currentSlide.duration);
            },
            slideUp: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.animate({
                    top: '-100%'
                }, currentSlide.duration);
                currentSlide.$element.css({
                    top: '100%',
                    'opacity': 1
                }).animate({
                    top: '0'
                }, currentSlide.duration);
            },
            slideDown: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.animate({
                    top: '100%'
                }, currentSlide.duration);
                currentSlide.$element.css({
                    top: '-100%',
                    'opacity': 1
                }).animate({
                    top: '0'
                }, currentSlide.duration);
            },
            slideRevealLeft: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.css('z-index', this.settings.baseZindex + 1).animate({
                    left: '-100%'
                }, currentSlide.duration);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': this.settings.baseZindex
                });
            },
            slideRevealRight: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.css('z-index', this.settings.baseZindex + 1).animate({
                    left: '100%'
                }, currentSlide.duration);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': this.settings.baseZindex
                });
            },
            slideOverLeft: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': this.settings.baseZindex,
                    'left': '100%'
                }).animate({
                    'left': 0
                }, currentSlide.duration);
            },
            slideOverRight: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': this.settings.baseZindex,
                    'right': '100%'
                }).animate({
                    'right': 0
                }, currentSlide.duration);
            },
            expandReveal: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.css('z-index', this.settings.baseZindex + 1).animate({
                    width: '120%',
                    height: '120%',
                    'left': '-10%',
                    'top': '-10%',
                    opacity: 0
                }, currentSlide.duration);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': this.settings.baseZindex
                });
            },
            shrinkReveal: function(prevSlideIndex, currentSlideIndex) {
                var currentSlide = this.slides[currentSlideIndex];
                this.slides[prevSlideIndex].$element.css('z-index', this.settings.baseZindex + 1).animate({
                    width: '50%',
                    height: '50%',
                    'left': '25%',
                    'top': '25%',
                    opacity: 0
                }, currentSlide.duration);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': this.settings.baseZindex
                });
            },
            verticalSplitReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 1, 2);
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                $slices.eq(0).animate({
                    'left': '-50%'
                }, currentSlide.duration);
                $slices.eq(1).animate({
                    'left': '100%'
                }, currentSlide.duration);
            },
            horizontalSplitReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 2, 1);
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                $slices.eq(0).animate({
                    'top': '-50%'
                }, currentSlide.duration);
                $slices.eq(1).animate({
                    'top': '100%'
                }, currentSlide.duration);
            },
            zipReveal: function(prevSlideIndex, currentSlideIndex) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 1, Math.round(self.$element.width() / 100));
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                var transitionDelay = currentSlide.duration / ($slices.length + 1);
                var transitionDuration = transitionDelay * 2;
                $slices.each(function(index) {
                    if (index % 2 === 0) {
                        $(this).delay(transitionDelay * index).animate({
                            'top': '100%'
                        }, transitionDuration);
                    } else {
                        $(this).delay(transitionDelay * index).animate({
                            'top': '-100%'
                        }, transitionDuration);
                    }
                });
            },
            barRevealDown: function(prevSlideIndex, currentSlideIndex) {
                return this.slideTransitions['barReveal'].apply(this, [prevSlideIndex, currentSlideIndex, 'down']);
            },
            barRevealUp: function(prevSlideIndex, currentSlideIndex) {
                return this.slideTransitions['barReveal'].apply(this, [prevSlideIndex, currentSlideIndex, 'up']);
            },
            barReveal: function(prevSlideIndex, currentSlideIndex, direction) {
                var self = this;
                var currentSlide = self.slides[currentSlideIndex];
                self.slides[prevSlideIndex].$element.css('z-index', self.settings.baseZindex + 1);
                currentSlide.$element.css({
                    'opacity': 1,
                    'z-index': self.settings.baseZindex
                });
                self._createSlideSlices(prevSlideIndex, 1, Math.round(self.$element.width() / 100));
                var $slices = self.slides[prevSlideIndex].$element.find('.pogoSlider-slide-slice');
                var transitionDelay = currentSlide.duration / ($slices.length + 1);
                var transitionDuration = transitionDelay * 2;
                $slices.each(function(index) {
                    if (direction === 'down') {
                        $(this).delay(transitionDelay * index).animate({
                            'top': '100%'
                        }, transitionDuration);
                    } else {
                        $(this).delay(transitionDelay * index).animate({
                            'top': '-100%'
                        }, transitionDuration);
                    }
                });
            }
        }
    };
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
        return this;
    };
})(jQuery, window, document);

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var CountTo = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
        this.init();
    };
    CountTo.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };
    CountTo.prototype.init = function() {
        this.value = this.options.from;
        this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
        this.loopCount = 0;
        this.increment = (this.options.to - this.options.from) / this.loops;
    };
    CountTo.prototype.dataOptions = function() {
        var options = {
            from: this.$element.data('from'),
            to: this.$element.data('to'),
            speed: this.$element.data('speed'),
            refreshInterval: this.$element.data('refresh-interval'),
            decimals: this.$element.data('decimals')
        };
        var keys = Object.keys(options);
        for (var i in keys) {
            var key = keys[i];
            if (typeof(options[key]) === 'undefined') {
                delete options[key];
            }
        }
        return options;
    };
    CountTo.prototype.update = function() {
        this.value += this.increment;
        this.loopCount++;
        this.render();
        if (typeof(this.options.onUpdate) == 'function') {
            this.options.onUpdate.call(this.$element, this.value);
        }
        if (this.loopCount >= this.loops) {
            clearInterval(this.interval);
            this.value = this.options.to;
            if (typeof(this.options.onComplete) == 'function') {
                this.options.onComplete.call(this.$element, this.value);
            }
        }
    };
    CountTo.prototype.render = function() {
        var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(formattedValue);
    };
    CountTo.prototype.restart = function() {
        this.stop();
        this.init();
        this.start();
    };
    CountTo.prototype.start = function() {
        this.stop();
        this.render();
        this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
    };
    CountTo.prototype.stop = function() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    CountTo.prototype.toggle = function() {
        if (this.interval) {
            this.stop();
        } else {
            this.start();
        }
    };

    function formatter(value, options) {
        return value.toFixed(options.decimals);
    }
    $.fn.countTo = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('countTo');
            var init = !data || typeof(option) === 'object';
            var options = typeof(option) === 'object' ? option : {};
            var method = typeof(option) === 'string' ? option : 'start';
            if (init) {
                if (data) data.stop();
                $this.data('countTo', data = new CountTo(this, options));
            }
            data[method].call(data);
        });
    };
}));

//! moment.js
//! version : 2.11.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return Uc.apply(null, arguments)
    }

    function b(a) {
        Uc = a
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
        return Da(a, b, c, d, !0).utc()
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a) {
        return void 0 === a
    }

    function n(a, b) {
        var c, d, e;
        if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Wc.length > 0)
            for (c in Wc) d = Wc[c], e = b[d], m(e) || (a[d] = e);
        return a
    }

    function o(b) {
        n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Xc === !1 && (Xc = !0, a.updateOffset(this), Xc = !1)
    }

    function p(a) {
        return a instanceof o || null != a && null != a._isAMomentObject
    }

    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function r(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = q(b)), c
    }

    function s(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
        return g + f
    }

    function t() {}

    function u(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function v(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = w(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function w(a) {
        var b = null;
        if (!Yc[a] && "undefined" != typeof module && module && module.exports) try {
            b = Vc._abbr, require("./locale/" + a), x(b)
        } catch (c) {}
        return Yc[a]
    }

    function x(a, b) {
        var c;
        return a && (c = m(b) ? z(a) : y(a, b), c && (Vc = c)), Vc._abbr
    }

    function y(a, b) {
        return null !== b ? (b.abbr = a, Yc[a] = Yc[a] || new t, Yc[a].set(b), x(a), Yc[a]) : (delete Yc[a], null)
    }

    function z(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Vc;
        if (!c(a)) {
            if (b = w(a)) return b;
            a = [a]
        }
        return v(a)
    }

    function A(a, b) {
        var c = a.toLowerCase();
        Zc[c] = Zc[c + "s"] = Zc[b] = a
    }

    function B(a) {
        return "string" == typeof a ? Zc[a] || Zc[a.toLowerCase()] : void 0
    }

    function C(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = B(c), b && (d[b] = a[c]));
        return d
    }

    function D(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function E(b, c) {
        return function(d) {
            return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b)
        }
    }

    function F(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function G(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function H(a, b) {
        var c;
        if ("object" == typeof a)
            for (c in a) this.set(c, a[c]);
        else if (a = B(a), D(this[a])) return this[a](b);
        return this
    }

    function I(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function J(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (bd[a] = e), b && (bd[b[0]] = function() {
            return I(e.apply(this, arguments), b[1], b[2])
        }), c && (bd[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function K(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function L(a) {
        var b, c, d = a.match($c);
        for (b = 0, c = d.length; c > b; b++) bd[d[b]] ? d[b] = bd[d[b]] : d[b] = K(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function M(a, b) {
        return a.isValid() ? (b = N(b, a.localeData()), ad[b] = ad[b] || L(b), ad[b](a)) : a.localeData().invalidDate()
    }

    function N(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (_c.lastIndex = 0; d >= 0 && _c.test(a);) a = a.replace(_c, c), _c.lastIndex = 0, d -= 1;
        return a
    }

    function O(a, b, c) {
        td[a] = D(b) ? b : function(a, d) {
            return a && c ? c : b
        }
    }

    function P(a, b) {
        return f(td, a) ? td[a](b._strict, b._locale) : new RegExp(Q(a))
    }

    function Q(a) {
        return R(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function S(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
                c[b] = r(a)
            }), c = 0; c < a.length; c++) ud[a[c]] = d
    }

    function T(a, b) {
        S(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function U(a, b, c) {
        null != b && f(ud, a) && ud[a](b, c._a, c, a)
    }

    function V(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function W(a, b) {
        return c(this._months) ? this._months[a.month()] : this._months[Ed.test(b) ? "format" : "standalone"][a.month()]
    }

    function X(a, b) {
        return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ed.test(b) ? "format" : "standalone"][a.month()]
    }

    function Y(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function Z(a, b) {
        var c;
        return a.isValid() ? "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), V(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) : a
    }

    function $(b) {
        return null != b ? (Z(this, b), a.updateOffset(this, !0), this) : F(this, "Month")
    }

    function _() {
        return V(this.year(), this.month())
    }

    function aa(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function ba(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
    }

    function ca() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = R(d[b]), e[b] = R(e[b]), f[b] = R(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i")
    }

    function da(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[wd] < 0 || c[wd] > 11 ? wd : c[xd] < 1 || c[xd] > V(c[vd], c[wd]) ? xd : c[yd] < 0 || c[yd] > 24 || 24 === c[yd] && (0 !== c[zd] || 0 !== c[Ad] || 0 !== c[Bd]) ? yd : c[zd] < 0 || c[zd] > 59 ? zd : c[Ad] < 0 || c[Ad] > 59 ? Ad : c[Bd] < 0 || c[Bd] > 999 ? Bd : -1, j(a)._overflowDayOfYear && (vd > b || b > xd) && (b = xd), j(a)._overflowWeeks && -1 === b && (b = Cd), j(a)._overflowWeekday && -1 === b && (b = Dd), j(a).overflow = b), a
    }

    function ea(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function fa(a, b) {
        var c = !0;
        return g(function() {
            return c && (ea(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
        }, b)
    }

    function ga(a, b) {
        Jd[a] || (ea(b), Jd[a] = !0)
    }

    function ha(a) {
        var b, c, d, e, f, g, h = a._i,
            i = Kd.exec(h) || Ld.exec(h);
        if (i) {
            for (j(a).iso = !0, b = 0, c = Nd.length; c > b; b++)
                if (Nd[b][1].exec(i[1])) {
                    e = Nd[b][0], d = Nd[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Od.length; c > b; b++)
                    if (Od[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Od[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!Md.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), wa(a)
        } else a._isValid = !1
    }

    function ia(b) {
        var c = Pd.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (ha(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function ja(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ka(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function la(a) {
        return ma(a) ? 366 : 365
    }

    function ma(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function na() {
        return ma(this.year())
    }

    function oa(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ka(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function pa(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = oa(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return 0 >= j ? (f = a - 1, g = la(f) + j) : j > la(a) ? (f = a + 1, g = j - la(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function qa(a, b, c) {
        var d, e, f = oa(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return 1 > g ? (e = a.year() - 1, d = g + ra(e, b, c)) : g > ra(a.year(), b, c) ? (d = g - ra(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function ra(a, b, c) {
        var d = oa(a, b, c),
            e = oa(a + 1, b, c);
        return (la(a) - d + e) / 7
    }

    function sa(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function ta(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function ua(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ta(a), a._w && null == a._a[xd] && null == a._a[wd] && va(a), a._dayOfYear && (e = sa(a._a[vd], d[vd]), a._dayOfYear > la(e) && (j(a)._overflowDayOfYear = !0), c = ka(e, 0, a._dayOfYear), a._a[wd] = c.getUTCMonth(), a._a[xd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[yd] && 0 === a._a[zd] && 0 === a._a[Ad] && 0 === a._a[Bd] && (a._nextDay = !0, a._a[yd] = 0), a._d = (a._useUTC ? ka : ja).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[yd] = 24)
        }
    }

    function va(a) {
        var b, c, d, e, f, g, h, i;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = sa(b.GG, a._a[vd], qa(Ea(), 1, 4).year), d = sa(b.W, 1), e = sa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = sa(b.gg, a._a[vd], qa(Ea(), f, g).year), d = sa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > ra(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = pa(c, d, e, f, g), a._a[vd] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function wa(b) {
        if (b._f === a.ISO_8601) return void ha(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            k = 0;
        for (e = N(b._f, b._locale).match($c) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), bd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), U(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[yd] <= 12 && b._a[yd] > 0 && (j(b).bigHour = void 0), b._a[yd] = xa(b._locale, b._a[yd], b._meridiem), ua(b), da(b)
    }

    function xa(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function ya(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], wa(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function za(a) {
        if (!a._d) {
            var b = C(a._i);
            a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), ua(a)
        }
    }

    function Aa(a) {
        var b = new o(da(Ba(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function Ba(a) {
        var b = a._i,
            e = a._f;
        return a._locale = a._locale || z(a._l), null === b || void 0 === e && "" === b ? l({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(da(b)) : (c(e) ? ya(a) : e ? wa(a) : d(b) ? a._d = b : Ca(a), k(a) || (a._d = null), a))
    }

    function Ca(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ia(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
            return parseInt(a, 10)
        }), ua(b)) : "object" == typeof f ? za(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function Da(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Aa(f)
    }

    function Ea(a, b, c, d) {
        return Da(a, b, c, d, !1)
    }

    function Fa(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ea();
        for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d
    }

    function Ga() {
        var a = [].slice.call(arguments, 0);
        return Fa("isBefore", a)
    }

    function Ha() {
        var a = [].slice.call(arguments, 0);
        return Fa("isAfter", a)
    }

    function Ia(a) {
        var b = C(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = z(), this._bubble()
    }

    function Ja(a) {
        return a instanceof Ia
    }

    function Ka(a, b) {
        J(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return 0 > a && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
        })
    }

    function La(a, b) {
        var c = (b || "").match(a) || [],
            d = c[c.length - 1] || [],
            e = (d + "").match(Ud) || ["-", 0, 0],
            f = +(60 * e[1]) + r(e[2]);
        return "+" === e[0] ? f : -f
    }

    function Ma(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Ea(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Ea(b).local()
    }

    function Na(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Oa(b, c) {
        var d, e = this._offset || 0;
        return this.isValid() ? null != b ? ("string" == typeof b ? b = La(qd, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Na(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? cb(this, Za(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Na(this) : null != b ? this : NaN
    }

    function Pa(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Qa(a) {
        return this.utcOffset(0, a)
    }

    function Ra(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Na(this), "m")), this
    }

    function Sa() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(La(pd, this._i)), this
    }

    function Ta(a) {
        return this.isValid() ? (a = a ? Ea(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
    }

    function Ua() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Va() {
        if (!m(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (n(a, this), a = Ba(a), a._a) {
            var b = a._isUTC ? h(a._a) : Ea(a._a);
            this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Wa() {
        return this.isValid() ? !this._isUTC : !1
    }

    function Xa() {
        return this.isValid() ? this._isUTC : !1
    }

    function Ya() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function Za(a, b) {
        var c, d, e, g = a,
            h = null;
        return Ja(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Vd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: r(h[xd]) * c,
            h: r(h[yd]) * c,
            m: r(h[zd]) * c,
            s: r(h[Ad]) * c,
            ms: r(h[Bd]) * c
        }) : (h = Wd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: $a(h[2], c),
            M: $a(h[3], c),
            d: $a(h[4], c),
            h: $a(h[5], c),
            m: $a(h[6], c),
            s: $a(h[7], c),
            w: $a(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = ab(Ea(g.from), Ea(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ia(g), Ja(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function $a(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function _a(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function ab(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Ma(b, a), a.isBefore(b) ? c = _a(a, b) : (c = _a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function bb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (ga(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Za(c, d), cb(this, e, a), this
        }
    }

    function cb(b, c, d, e) {
        var f = c._milliseconds,
            g = c._days,
            h = c._months;
        b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), h && Z(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function db(a, b) {
        var c = a || Ea(),
            d = Ma(c, this).startOf("day"),
            e = this.diff(d, "days", !0),
            f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
            g = b && (D(b[f]) ? b[f]() : b[f]);
        return this.format(g || this.localeData().calendar(f, this, Ea(c)))
    }

    function eb() {
        return new o(this)
    }

    function fb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
    }

    function gb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
    }

    function hb(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function ib(a, b) {
        var c, d = p(a) ? a : Ea(a);
        return this.isValid() && d.isValid() ? (b = B(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
    }

    function jb(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function kb(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function lb(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Ma(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = B(b), "year" === b || "month" === b || "quarter" === b ? (g = mb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
    }

    function mb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function nb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ob() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function pb(b) {
        var c = M(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }

    function qb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function rb(a) {
        return this.from(Ea(), a)
    }

    function sb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function tb(a) {
        return this.to(Ea(), a)
    }

    function ub(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = z(a), null != b && (this._locale = b), this)
    }

    function vb() {
        return this._locale
    }

    function wb(a) {
        switch (a = B(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function xb(a) {
        return a = B(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function yb() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function zb() {
        return Math.floor(+this / 1e3)
    }

    function Ab() {
        return this._offset ? new Date(+this) : this._d
    }

    function Bb() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function Cb() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function Db() {
        return this.isValid() ? this.toISOString() : "null"
    }

    function Eb() {
        return k(this)
    }

    function Fb() {
        return g({}, j(this))
    }

    function Gb() {
        return j(this).overflow
    }

    function Hb() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Ib(a, b) {
        J(0, [a, a.length], 0, b)
    }

    function Jb(a) {
        return Nb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Kb(a) {
        return Nb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Lb() {
        return ra(this.year(), 1, 4)
    }

    function Mb() {
        var a = this.localeData()._week;
        return ra(this.year(), a.dow, a.doy)
    }

    function Nb(a, b, c, d, e) {
        var f;
        return null == a ? qa(this, d, e).year : (f = ra(a, d, e), b > f && (b = f), Ob.call(this, a, b, c, d, e))
    }

    function Ob(a, b, c, d, e) {
        var f = pa(a, b, c, d, e),
            g = ka(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Pb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Qb(a) {
        return qa(a, this._week.dow, this._week.doy).week
    }

    function Rb() {
        return this._week.dow
    }

    function Sb() {
        return this._week.doy
    }

    function Tb(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ub(a) {
        var b = qa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Vb(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Wb(a, b) {
        return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
    }

    function Xb(a) {
        return this._weekdaysShort[a.day()]
    }

    function Yb(a) {
        return this._weekdaysMin[a.day()]
    }

    function Zb(a, b, c) {
        var d, e, f;
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
            if (e = Ea([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function $b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Vb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function _b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function ac(a) {
        return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
    }

    function bc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function cc() {
        return this.hours() % 12 || 12
    }

    function dc(a, b) {
        J(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function ec(a, b) {
        return b._meridiemParse
    }

    function fc(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function gc(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function hc(a, b) {
        b[Bd] = r(1e3 * ("0." + a))
    }

    function ic() {
        return this._isUTC ? "UTC" : ""
    }

    function jc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function kc(a) {
        return Ea(1e3 * a)
    }

    function lc() {
        return Ea.apply(null, arguments).parseZone()
    }

    function mc(a, b, c) {
        var d = this._calendar[a];
        return D(d) ? d.call(b, c) : d
    }

    function nc(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function oc() {
        return this._invalidDate
    }

    function pc(a) {
        return this._ordinal.replace("%d", a)
    }

    function qc(a) {
        return a
    }

    function rc(a, b, c, d) {
        var e = this._relativeTime[c];
        return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function sc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return D(c) ? c(b) : c.replace(/%s/i, b)
    }

    function tc(a) {
        var b, c;
        for (c in a) b = a[c], D(b) ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function uc(a, b, c, d) {
        var e = z(),
            f = h().set(d, b);
        return e[c](f, a)
    }

    function vc(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return uc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = uc(a, f, c, e);
        return g
    }

    function wc(a, b) {
        return vc(a, b, "months", 12, "month")
    }

    function xc(a, b) {
        return vc(a, b, "monthsShort", 12, "month")
    }

    function yc(a, b) {
        return vc(a, b, "weekdays", 7, "day")
    }

    function zc(a, b) {
        return vc(a, b, "weekdaysShort", 7, "day")
    }

    function Ac(a, b) {
        return vc(a, b, "weekdaysMin", 7, "day")
    }

    function Bc() {
        var a = this._data;
        return this._milliseconds = se(this._milliseconds), this._days = se(this._days), this._months = se(this._months), a.milliseconds = se(a.milliseconds), a.seconds = se(a.seconds), a.minutes = se(a.minutes), a.hours = se(a.hours), a.months = se(a.months), a.years = se(a.years), this
    }

    function Cc(a, b, c, d) {
        var e = Za(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function Dc(a, b) {
        return Cc(this, a, b, 1)
    }

    function Ec(a, b) {
        return Cc(this, a, b, -1)
    }

    function Fc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function Gc() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Fc(Ic(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Hc(g)), h += e, g -= Fc(Ic(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function Hc(a) {
        return 4800 * a / 146097
    }

    function Ic(a) {
        return 146097 * a / 4800
    }

    function Jc(a) {
        var b, c, d = this._milliseconds;
        if (a = B(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Hc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(Ic(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function Kc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
    }

    function Lc(a) {
        return function() {
            return this.as(a)
        }
    }

    function Mc(a) {
        return a = B(a), this[a + "s"]()
    }

    function Nc(a) {
        return function() {
            return this._data[a]
        }
    }

    function Oc() {
        return q(this.days() / 7)
    }

    function Pc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function Qc(a, b, c) {
        var d = Za(a).abs(),
            e = Ie(d.as("s")),
            f = Ie(d.as("m")),
            g = Ie(d.as("h")),
            h = Ie(d.as("d")),
            i = Ie(d.as("M")),
            j = Ie(d.as("y")),
            k = e < Je.s && ["s", e] || 1 >= f && ["m"] || f < Je.m && ["mm", f] || 1 >= g && ["h"] || g < Je.h && ["hh", g] || 1 >= h && ["d"] || h < Je.d && ["dd", h] || 1 >= i && ["M"] || i < Je.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, Pc.apply(null, k)
    }

    function Rc(a, b) {
        return void 0 === Je[a] ? !1 : void 0 === b ? Je[a] : (Je[a] = b, !0)
    }

    function Sc(a) {
        var b = this.localeData(),
            c = Qc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Tc() {
        var a, b, c, d = Ke(this._milliseconds) / 1e3,
            e = Ke(this._days),
            f = Ke(this._months);
        a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var Uc, Vc, Wc = a.momentProperties = [],
        Xc = !1,
        Yc = {},
        Zc = {},
        $c = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        _c = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        ad = {},
        bd = {},
        cd = /\d/,
        dd = /\d\d/,
        ed = /\d{3}/,
        fd = /\d{4}/,
        gd = /[+-]?\d{6}/,
        hd = /\d\d?/,
        id = /\d\d\d\d?/,
        jd = /\d\d\d\d\d\d?/,
        kd = /\d{1,3}/,
        ld = /\d{1,4}/,
        md = /[+-]?\d{1,6}/,
        nd = /\d+/,
        od = /[+-]?\d+/,
        pd = /Z|[+-]\d\d:?\d\d/gi,
        qd = /Z|[+-]\d\d(?::?\d\d)?/gi,
        rd = /[+-]?\d+(\.\d{1,3})?/,
        sd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        td = {},
        ud = {},
        vd = 0,
        wd = 1,
        xd = 2,
        yd = 3,
        zd = 4,
        Ad = 5,
        Bd = 6,
        Cd = 7,
        Dd = 8;
    J("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), J("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), J("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), A("month", "M"), O("M", hd), O("MM", hd, dd), O("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    }), O("MMMM", function(a, b) {
        return b.monthsRegex(a)
    }), S(["M", "MM"], function(a, b) {
        b[wd] = r(a) - 1
    }), S(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[wd] = e : j(c).invalidMonth = a
    });
    var Ed = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        Fd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Gd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Hd = sd,
        Id = sd,
        Jd = {};
    a.suppressDeprecationWarnings = !1;
    var Kd = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Ld = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Md = /Z|[+-]\d\d(?::?\d\d)?/,
        Nd = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Od = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Pd = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = fa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), J("Y", 0, 0, function() {
        var a = this.year();
        return 9999 >= a ? "" + a : "+" + a
    }), J(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), O("Y", od), O("YY", hd, dd), O("YYYY", ld, fd), O("YYYYY", md, gd), O("YYYYYY", md, gd), S(["YYYYY", "YYYYYY"], vd), S("YYYY", function(b, c) {
        c[vd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
    }), S("YY", function(b, c) {
        c[vd] = a.parseTwoDigitYear(b)
    }), S("Y", function(a, b) {
        b[vd] = parseInt(a, 10)
    }), a.parseTwoDigitYear = function(a) {
        return r(a) + (r(a) > 68 ? 1900 : 2e3)
    };
    var Qd = E("FullYear", !1);
    a.ISO_8601 = function() {};
    var Rd = fa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var a = Ea.apply(null, arguments);
            return this.isValid() && a.isValid() ? this > a ? this : a : l()
        }),
        Sd = fa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var a = Ea.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : l()
        }),
        Td = function() {
            return Date.now ? Date.now() : +new Date
        };
    Ka("Z", ":"), Ka("ZZ", ""), O("Z", qd), O("ZZ", qd), S(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0, c._tzm = La(qd, a)
    });
    var Ud = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Vd = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
        Wd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Za.fn = Ia.prototype;
    var Xd = bb(1, "add"),
        Yd = bb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Zd = fa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    J(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), J(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Ib("gggg", "weekYear"), Ib("ggggg", "weekYear"), Ib("GGGG", "isoWeekYear"), Ib("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), O("G", od), O("g", od), O("GG", hd, dd), O("gg", hd, dd), O("GGGG", ld, fd), O("gggg", ld, fd), O("GGGGG", md, gd), O("ggggg", md, gd), T(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = r(a)
    }), T(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), O("Q", cd), S("Q", function(a, b) {
        b[wd] = 3 * (r(a) - 1)
    }), J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), O("w", hd), O("ww", hd, dd), O("W", hd), O("WW", hd, dd), T(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = r(a)
    });
    var $d = {
        dow: 0,
        doy: 6
    };
    J("D", ["DD", 2], "Do", "date"), A("date", "D"), O("D", hd), O("DD", hd, dd), O("Do", function(a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }), S(["D", "DD"], xd), S("Do", function(a, b) {
        b[xd] = r(a.match(hd)[0], 10)
    });
    var _d = E("Date", !0);
    J("d", 0, "do", "day"), J("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }), J("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }), J("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), O("d", hd), O("e", hd), O("E", hd), O("dd", sd), O("ddd", sd), O("dddd", sd), T(["dd", "ddd", "dddd"], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : j(c).invalidWeekday = a
    }), T(["d", "e", "E"], function(a, b, c, d) {
        b[d] = r(a)
    });
    var ae = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        ce = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), O("DDD", kd), O("DDDD", ed), S(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = r(a)
    }), J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, cc), J("hmm", 0, 0, function() {
        return "" + cc.apply(this) + I(this.minutes(), 2)
    }), J("hmmss", 0, 0, function() {
        return "" + cc.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), J("Hmm", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2)
    }), J("Hmmss", 0, 0, function() {
        return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), dc("a", !0), dc("A", !1), A("hour", "h"), O("a", ec), O("A", ec), O("H", hd), O("h", hd), O("HH", hd, dd), O("hh", hd, dd), O("hmm", id), O("hmmss", jd), O("Hmm", id), O("Hmmss", jd), S(["H", "HH"], yd), S(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), S(["h", "hh"], function(a, b, c) {
        b[yd] = r(a), j(c).bigHour = !0
    }), S("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d)), j(c).bigHour = !0
    }), S("hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d, 2)), b[Ad] = r(a.substr(e)), j(c).bigHour = !0
    }), S("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d))
    }), S("Hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[yd] = r(a.substr(0, d)), b[zd] = r(a.substr(d, 2)), b[Ad] = r(a.substr(e))
    });
    var de = /[ap]\.?m?\.?/i,
        ee = E("Hours", !0);
    J("m", ["mm", 2], 0, "minute"), A("minute", "m"), O("m", hd), O("mm", hd, dd), S(["m", "mm"], zd);
    var fe = E("Minutes", !1);
    J("s", ["ss", 2], 0, "second"), A("second", "s"), O("s", hd), O("ss", hd, dd), S(["s", "ss"], Ad);
    var ge = E("Seconds", !1);
    J("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), J(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), J(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), J(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), J(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), J(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), J(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), A("millisecond", "ms"), O("S", kd, cd), O("SS", kd, dd), O("SSS", kd, ed);
    var he;
    for (he = "SSSS"; he.length <= 9; he += "S") O(he, nd);
    for (he = "S"; he.length <= 9; he += "S") S(he, hc);
    var ie = E("Milliseconds", !1);
    J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
    var je = o.prototype;
    je.add = Xd, je.calendar = db, je.clone = eb, je.diff = lb, je.endOf = xb, je.format = pb, je.from = qb, je.fromNow = rb, je.to = sb, je.toNow = tb, je.get = H, je.invalidAt = Gb, je.isAfter = fb, je.isBefore = gb, je.isBetween = hb, je.isSame = ib, je.isSameOrAfter = jb, je.isSameOrBefore = kb, je.isValid = Eb, je.lang = Zd, je.locale = ub, je.localeData = vb, je.max = Sd, je.min = Rd, je.parsingFlags = Fb, je.set = H, je.startOf = wb, je.subtract = Yd, je.toArray = Bb, je.toObject = Cb, je.toDate = Ab, je.toISOString = ob, je.toJSON = Db, je.toString = nb, je.unix = zb, je.valueOf = yb, je.creationData = Hb, je.year = Qd, je.isLeapYear = na, je.weekYear = Jb, je.isoWeekYear = Kb, je.quarter = je.quarters = Pb, je.month = $, je.daysInMonth = _, je.week = je.weeks = Tb, je.isoWeek = je.isoWeeks = Ub, je.weeksInYear = Mb, je.isoWeeksInYear = Lb, je.date = _d, je.day = je.days = $b, je.weekday = _b, je.isoWeekday = ac, je.dayOfYear = bc, je.hour = je.hours = ee, je.minute = je.minutes = fe, je.second = je.seconds = ge, je.millisecond = je.milliseconds = ie, je.utcOffset = Oa, je.utc = Qa, je.local = Ra, je.parseZone = Sa, je.hasAlignedHourOffset = Ta, je.isDST = Ua, je.isDSTShifted = Va, je.isLocal = Wa, je.isUtcOffset = Xa, je.isUtc = Ya, je.isUTC = Ya, je.zoneAbbr = ic, je.zoneName = jc, je.dates = fa("dates accessor is deprecated. Use date instead.", _d), je.months = fa("months accessor is deprecated. Use month instead", $), je.years = fa("years accessor is deprecated. Use year instead", Qd), je.zone = fa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Pa);
    var ke = je,
        le = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        me = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        ne = "Invalid date",
        oe = "%d",
        pe = /\d{1,2}/,
        qe = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        re = t.prototype;
    re._calendar = le, re.calendar = mc, re._longDateFormat = me, re.longDateFormat = nc, re._invalidDate = ne, re.invalidDate = oc, re._ordinal = oe, re.ordinal = pc, re._ordinalParse = pe, re.preparse = qc, re.postformat = qc, re._relativeTime = qe, re.relativeTime = rc, re.pastFuture = sc, re.set = tc, re.months = W, re._months = Fd, re.monthsShort = X, re._monthsShort = Gd, re.monthsParse = Y, re._monthsRegex = Id, re.monthsRegex = ba, re._monthsShortRegex = Hd, re.monthsShortRegex = aa, re.week = Qb, re._week = $d, re.firstDayOfYear = Sb, re.firstDayOfWeek = Rb, re.weekdays = Wb, re._weekdays = ae, re.weekdaysMin = Yb, re._weekdaysMin = ce, re.weekdaysShort = Xb, re._weekdaysShort = be, re.weekdaysParse = Zb, re.isPM = fc, re._meridiemParse = de, re.meridiem = gc, x("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = fa("moment.lang is deprecated. Use moment.locale instead.", x), a.langData = fa("moment.langData is deprecated. Use moment.localeData instead.", z);
    var se = Math.abs,
        te = Lc("ms"),
        ue = Lc("s"),
        ve = Lc("m"),
        we = Lc("h"),
        xe = Lc("d"),
        ye = Lc("w"),
        ze = Lc("M"),
        Ae = Lc("y"),
        Be = Nc("milliseconds"),
        Ce = Nc("seconds"),
        De = Nc("minutes"),
        Ee = Nc("hours"),
        Fe = Nc("days"),
        Ge = Nc("months"),
        He = Nc("years"),
        Ie = Math.round,
        Je = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        Ke = Math.abs,
        Le = Ia.prototype;
    Le.abs = Bc, Le.add = Dc, Le.subtract = Ec, Le.as = Jc, Le.asMilliseconds = te, Le.asSeconds = ue, Le.asMinutes = ve, Le.asHours = we, Le.asDays = xe, Le.asWeeks = ye, Le.asMonths = ze, Le.asYears = Ae, Le.valueOf = Kc, Le._bubble = Gc, Le.get = Mc, Le.milliseconds = Be, Le.seconds = Ce, Le.minutes = De, Le.hours = Ee, Le.days = Fe, Le.weeks = Oc, Le.months = Ge, Le.years = He, Le.humanize = Sc, Le.toISOString = Tc, Le.toString = Tc, Le.toJSON = Tc, Le.locale = ub, Le.localeData = vb, Le.toIsoString = fa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tc), Le.lang = Zd, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), O("x", od), O("X", rd), S("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), S("x", function(a, b, c) {
        c._d = new Date(r(a))
    }), a.version = "2.11.2", b(Ea), a.fn = ke, a.min = Ga, a.max = Ha, a.now = Td, a.utc = h, a.unix = kc, a.months = wc, a.isDate = d, a.locale = x, a.invalid = l, a.duration = Za, a.isMoment = p, a.weekdays = yc, a.parseZone = lc, a.localeData = z, a.isDuration = Ja, a.monthsShort = xc, a.weekdaysMin = Ac, a.defineLocale = y, a.weekdaysShort = zc, a.normalizeUnits = B, a.relativeTimeThreshold = Rc, a.prototype = ke;
    var Me = a;
    return Me
});

new WOW().init();

var fakewaffle = (function($, fakewaffle) {
    'use strict';
    fakewaffle.responsiveTabs = function(collapseDisplayed) {
        fakewaffle.currentPosition = 'tabs';
        var tabGroups = $('.nav-tabs.responsive');
        var hidden = '';
        var visible = '';
        var activeTab = '';
        if (collapseDisplayed === undefined) {
            collapseDisplayed = ['xs', 'sm'];
        }
        $.each(collapseDisplayed, function() {
            hidden += ' hidden-' + this;
            visible += ' visible-' + this;
        });
        $.each(tabGroups, function(index) {
            var collapseDiv;
            var $tabGroup = $(this);
            var tabs = $tabGroup.find('li a');
            if ($tabGroup.attr('id') === undefined) {
                $tabGroup.attr('id', 'tabs-' + index);
            }
            collapseDiv = $('<div></div>', {
                'class': 'panel-group responsive' + visible,
                'id': 'collapse-' + $tabGroup.attr('id')
            });
            $.each(tabs, function() {
                var $this = $(this);
                var oldLinkClass = $this.attr('class') === undefined ? '' : $this.attr('class');
                var newLinkClass = 'accordion-toggle';
                var oldParentClass = $this.parent().attr('class') === undefined ? '' : $this.parent().attr('class');
                var newParentClass = 'panel panel-default';
                var newHash = $this.get(0).hash.replace('#', 'collapse-');
                if (oldLinkClass.length > 0) {
                    newLinkClass += ' ' + oldLinkClass;
                }
                if (oldParentClass.length > 0) {
                    oldParentClass = oldParentClass.replace(/\bactive\b/g, '');
                    newParentClass += ' ' + oldParentClass;
                    newParentClass = newParentClass.replace(/\s{2,}/g, ' ');
                    newParentClass = newParentClass.replace(/^\s+|\s+$/g, '');
                }
                if ($this.parent().hasClass('active')) {
                    activeTab = '#' + newHash;
                }
                collapseDiv.append($('<div>').attr('class', newParentClass).html($('<div>').attr('class', 'panel-heading').html($('<h4>').attr('class', 'panel-title').html($('<a>', {
                    'class': newLinkClass,
                    'data-toggle': 'collapse',
                    'data-parent': '#collapse-' + $tabGroup.attr('id'),
                    'href': '#' + newHash,
                    'html': $this.html()
                })))).append($('<div>', {
                    'id': newHash,
                    'class': 'panel-collapse collapse'
                })));
            });
            $tabGroup.next().after(collapseDiv);
            $tabGroup.addClass(hidden);
            $('.tab-content.responsive').addClass(hidden);
            if (activeTab) {
                $(activeTab).collapse('show');
            }
        });
        fakewaffle.checkResize();
        fakewaffle.bindTabToCollapse();
    };
    fakewaffle.checkResize = function() {
        if ($('.panel-group.responsive').is(':visible') === true && fakewaffle.currentPosition === 'tabs') {
            fakewaffle.tabToPanel();
            fakewaffle.currentPosition = 'panel';
        } else if ($('.panel-group.responsive').is(':visible') === false && fakewaffle.currentPosition === 'panel') {
            fakewaffle.panelToTab();
            fakewaffle.currentPosition = 'tabs';
        }
    };
    fakewaffle.tabToPanel = function() {
        var tabGroups = $('.nav-tabs.responsive');
        $.each(tabGroups, function(index, tabGroup) {
            var tabContents = $(tabGroup).next('.tab-content').find('.tab-pane');
            $.each(tabContents, function(index, tabContent) {
                var destinationId = $(tabContent).attr('id').replace(/^/, '#collapse-');
                $(tabContent).removeClass('tab-pane').addClass('panel-body fw-previous-tab-pane').appendTo($(destinationId));
            });
        });
    };
    fakewaffle.panelToTab = function() {
        var panelGroups = $('.panel-group.responsive');
        $.each(panelGroups, function(index, panelGroup) {
            var destinationId = $(panelGroup).attr('id').replace('collapse-', '#');
            var destination = $(destinationId).next('.tab-content')[0];
            var panelContents = $(panelGroup).find('.panel-body.fw-previous-tab-pane');
            panelContents.removeClass('panel-body fw-previous-tab-pane').addClass('tab-pane').appendTo($(destination));
        });
    };
    fakewaffle.bindTabToCollapse = function() {
        var tabs = $('.nav-tabs.responsive').find('li a');
        var collapse = $('.panel-group.responsive').find('.panel-collapse');
        tabs.on('shown.bs.tab', function(e) {
            if (fakewaffle.currentPosition === 'tabs') {
                var $current = $(e.currentTarget.hash.replace(/#/, '#collapse-'));
                $current.collapse('show');
                if (e.relatedTarget) {
                    var $previous = $(e.relatedTarget.hash.replace(/#/, '#collapse-'));
                    $previous.collapse('hide');
                }
            }
        });
        collapse.on('shown.bs.collapse', function(e) {
            if (fakewaffle.currentPosition === 'panel') {
                var current = $(e.target).context.id.replace(/collapse-/g, '#');
                $('a[href="' + current + '"]').tab('show');
                $(e.target).closest('.panel').siblings().find('.panel-collapse').collapse('hide');
                var panelGroup = $(e.currentTarget).closest('.panel-group.responsive');
                $(panelGroup).find('.panel-body').removeClass('active');
                $(e.currentTarget).find('.panel-body').addClass('active');
            }
        });
    };
    $(window).resize(function() {
        fakewaffle.checkResize();
    });
    return fakewaffle;
}(window.jQuery, fakewaffle || {}));
(function($) {
    $('ul.nav.nav-tabs  a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
    fakewaffle.responsiveTabs(['xs', 'sm']);
})(jQuery);