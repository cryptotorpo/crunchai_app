const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "static/index.CNcRs-dU.js",
      "static/if-defined.Dhd0Yj5H.js",
      "static/HomeView.Cg0jJ8O7.js",
      "static/stakingConfig.CwD3bOU9.js",
      "static/HomeView.DqFByU23.css",
      "static/FeedView.CejTGT96.js",
      "static/AppForm.B0Z_FOZC.js",
      "static/UploadIcon.C2D50cAV.js",
      "static/AppForm.h6ypUbKG.css",
      "static/FeedView.DI6IXGWZ.css",
      "static/AppsView.B45dr5BY.js",
      "static/AppsView.CpI-u4eI.css",
      "static/NodesView.VrvnBEAy.js",
      "static/NodesView.D_UgGCxD.css",
      "static/FeedbackView.BmYJq9jP.js",
      "static/StakingView.BiNRU3vH.js",
    ])
) => i.map((i) => d[i]);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ql(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Fe = {},
  Zr = [],
  fn = () => {},
  u1 = () => !1,
  ta = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  eu = (e) => e.startsWith("onUpdate:"),
  Xe = Object.assign,
  tu = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  f1 = Object.prototype.hasOwnProperty,
  Te = (e, t) => f1.call(e, t),
  se = Array.isArray,
  Jr = (e) => Ro(e) === "[object Map]",
  na = (e) => Ro(e) === "[object Set]",
  _f = (e) => Ro(e) === "[object Date]",
  ue = (e) => typeof e == "function",
  qe = (e) => typeof e == "string",
  Xt = (e) => typeof e == "symbol",
  Me = (e) => e !== null && typeof e == "object",
  nu = (e) => (Me(e) || ue(e)) && ue(e.then) && ue(e.catch),
  Yh = Object.prototype.toString,
  Ro = (e) => Yh.call(e),
  d1 = (e) => Ro(e).slice(8, -1),
  Zh = (e) => Ro(e) === "[object Object]",
  ru = (e) =>
    qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Vs = Ql(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  ra = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  h1 = /-(\w)/g,
  Rt = ra((e) => e.replace(h1, (t, n) => (n ? n.toUpperCase() : ""))),
  p1 = /\B([A-Z])/g,
  Ur = ra((e) => e.replace(p1, "-$1").toLowerCase()),
  sa = ra((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  tc = ra((e) => (e ? `on${sa(e)}` : "")),
  er = (e, t) => !Object.is(e, t),
  bi = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Jh = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Pi = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Qh = (e) => {
    const t = qe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let kf;
const oa = () =>
  kf ||
  (kf =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function oo(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = qe(r) ? y1(r) : oo(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (qe(e) || Me(e)) return e;
}
const m1 = /;(?![^(]*\))/g,
  b1 = /:([^]+)/,
  g1 = /\/\*[^]*?\*\//g;
function y1(e) {
  const t = {};
  return (
    e
      .replace(g1, "")
      .split(m1)
      .forEach((n) => {
        if (n) {
          const r = n.split(b1);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function rr(e) {
  let t = "";
  if (qe(e)) t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const r = rr(e[n]);
      r && (t += r + " ");
    }
  else if (Me(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const w1 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  v1 = Ql(w1);
function ep(e) {
  return !!e || e === "";
}
function E1(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = ia(e[r], t[r]);
  return n;
}
function ia(e, t) {
  if (e === t) return !0;
  let n = _f(e),
    r = _f(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = Xt(e)), (r = Xt(t)), n || r)) return e === t;
  if (((n = se(e)), (r = se(t)), n || r)) return n && r ? E1(e, t) : !1;
  if (((n = Me(e)), (r = Me(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i),
        c = t.hasOwnProperty(i);
      if ((a && !c) || (!a && c) || !ia(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function C1(e, t) {
  return e.findIndex((n) => ia(n, t));
}
const tp = (e) => !!(e && e.__v_isRef === !0),
  Sn = (e) =>
    qe(e)
      ? e
      : e == null
      ? ""
      : se(e) || (Me(e) && (e.toString === Yh || !ue(e.toString)))
      ? tp(e)
        ? Sn(e.value)
        : JSON.stringify(e, np, 2)
      : String(e),
  np = (e, t) =>
    tp(t)
      ? np(e, t.value)
      : Jr(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], o) => ((n[nc(r, o) + " =>"] = s), n),
            {}
          ),
        }
      : na(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => nc(n)) }
      : Xt(t)
      ? nc(t)
      : Me(t) && !se(t) && !Zh(t)
      ? String(t)
      : t,
  nc = (e, t = "") => {
    var n;
    return Xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let bt;
class rp {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = bt),
      !t && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = bt;
      try {
        return (bt = this), t();
      } finally {
        bt = n;
      }
    }
  }
  on() {
    bt = this;
  }
  off() {
    bt = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function sp(e) {
  return new rp(e);
}
function op() {
  return bt;
}
function x1(e, t = !1) {
  bt && bt.cleanups.push(e);
}
let Le;
const rc = new WeakSet();
class ip {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      bt && bt.active && bt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), rc.has(this) && (rc.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || cp(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Sf(this), lp(this);
    const t = Le,
      n = Kt;
    (Le = this), (Kt = !0);
    try {
      return this.fn();
    } finally {
      up(this), (Le = t), (Kt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) iu(t);
      (this.deps = this.depsTail = void 0),
        Sf(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? rc.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Fc(this) && this.run();
  }
  get dirty() {
    return Fc(this);
  }
}
let ap = 0,
  Ks,
  Xs;
function cp(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Xs), (Xs = e);
    return;
  }
  (e.next = Ks), (Ks = e);
}
function su() {
  ap++;
}
function ou() {
  if (--ap > 0) return;
  if (Xs) {
    let t = Xs;
    for (Xs = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Ks; ) {
    let t = Ks;
    for (Ks = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function lp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function up(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), iu(r), _1(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function Fc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (fp(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function fp(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === io)
  )
    return;
  e.globalVersion = io;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Fc(e))) {
    e.flags &= -3;
    return;
  }
  const n = Le,
    r = Kt;
  (Le = e), (Kt = !0);
  try {
    lp(e);
    const s = e.fn(e._value);
    (t.version === 0 || er(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Le = n), (Kt = r), up(e), (e.flags &= -3);
  }
}
function iu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) iu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Kt = !0;
const dp = [];
function ur() {
  dp.push(Kt), (Kt = !1);
}
function fr() {
  const e = dp.pop();
  Kt = e === void 0 ? !0 : e;
}
function Sf(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Le;
    Le = void 0;
    try {
      t();
    } finally {
      Le = n;
    }
  }
}
let io = 0;
class k1 {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class aa {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!Le || !Kt || Le === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Le)
      (n = this.activeLink = new k1(Le, this)),
        Le.deps
          ? ((n.prevDep = Le.depsTail),
            (Le.depsTail.nextDep = n),
            (Le.depsTail = n))
          : (Le.deps = Le.depsTail = n),
        hp(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Le.depsTail),
        (n.nextDep = void 0),
        (Le.depsTail.nextDep = n),
        (Le.depsTail = n),
        Le.deps === n && (Le.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, io++, this.notify(t);
  }
  notify(t) {
    su();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ou();
    }
  }
}
function hp(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) hp(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Ti = new WeakMap(),
  Ar = Symbol(""),
  Bc = Symbol(""),
  ao = Symbol("");
function ut(e, t, n) {
  if (Kt && Le) {
    let r = Ti.get(e);
    r || Ti.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new aa())), (s.map = r), (s.key = n)), s.track();
  }
}
function _n(e, t, n, r, s, o) {
  const i = Ti.get(e);
  if (!i) {
    io++;
    return;
  }
  const a = (c) => {
    c && c.trigger();
  };
  if ((su(), t === "clear")) i.forEach(a);
  else {
    const c = se(e),
      u = c && ru(n);
    if (c && n === "length") {
      const l = Number(r);
      i.forEach((f, h) => {
        (h === "length" || h === ao || (!Xt(h) && h >= l)) && a(f);
      });
    } else
      switch (
        ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(ao)), t)
      ) {
        case "add":
          c ? u && a(i.get("length")) : (a(i.get(Ar)), Jr(e) && a(i.get(Bc)));
          break;
        case "delete":
          c || (a(i.get(Ar)), Jr(e) && a(i.get(Bc)));
          break;
        case "set":
          Jr(e) && a(i.get(Ar));
          break;
      }
  }
  ou();
}
function S1(e, t) {
  const n = Ti.get(e);
  return n && n.get(t);
}
function Lr(e) {
  const t = ce(e);
  return t === e ? t : (ut(t, "iterate", ao), Ft(e) ? t : t.map(ft));
}
function ca(e) {
  return ut((e = ce(e)), "iterate", ao), e;
}
const A1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return sc(this, Symbol.iterator, ft);
  },
  concat(...e) {
    return Lr(this).concat(...e.map((t) => (se(t) ? Lr(t) : t)));
  },
  entries() {
    return sc(this, "entries", (e) => ((e[1] = ft(e[1])), e));
  },
  every(e, t) {
    return yn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return yn(this, "filter", e, t, (n) => n.map(ft), arguments);
  },
  find(e, t) {
    return yn(this, "find", e, t, ft, arguments);
  },
  findIndex(e, t) {
    return yn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return yn(this, "findLast", e, t, ft, arguments);
  },
  findLastIndex(e, t) {
    return yn(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return yn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return oc(this, "includes", e);
  },
  indexOf(...e) {
    return oc(this, "indexOf", e);
  },
  join(e) {
    return Lr(this).join(e);
  },
  lastIndexOf(...e) {
    return oc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return yn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Is(this, "pop");
  },
  push(...e) {
    return Is(this, "push", e);
  },
  reduce(e, ...t) {
    return Af(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Af(this, "reduceRight", e, t);
  },
  shift() {
    return Is(this, "shift");
  },
  some(e, t) {
    return yn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Is(this, "splice", e);
  },
  toReversed() {
    return Lr(this).toReversed();
  },
  toSorted(e) {
    return Lr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Is(this, "unshift", e);
  },
  values() {
    return sc(this, "values", ft);
  },
};
function sc(e, t, n) {
  const r = ca(e),
    s = r[t]();
  return (
    r !== e &&
      !Ft(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const P1 = Array.prototype;
function yn(e, t, n, r, s, o) {
  const i = ca(e),
    a = i !== e && !Ft(e),
    c = i[t];
  if (c !== P1[t]) {
    const f = c.apply(e, o);
    return a ? ft(f) : f;
  }
  let u = n;
  i !== e &&
    (a
      ? (u = function (f, h) {
          return n.call(this, ft(f), h, e);
        })
      : n.length > 2 &&
        (u = function (f, h) {
          return n.call(this, f, h, e);
        }));
  const l = c.call(i, u, r);
  return a && s ? s(l) : l;
}
function Af(e, t, n, r) {
  const s = ca(e);
  let o = n;
  return (
    s !== e &&
      (Ft(e)
        ? n.length > 3 &&
          (o = function (i, a, c) {
            return n.call(this, i, a, c, e);
          })
        : (o = function (i, a, c) {
            return n.call(this, i, ft(a), c, e);
          })),
    s[t](o, ...r)
  );
}
function oc(e, t, n) {
  const r = ce(e);
  ut(r, "iterate", ao);
  const s = r[t](...n);
  return (s === -1 || s === !1) && uu(n[0])
    ? ((n[0] = ce(n[0])), r[t](...n))
    : s;
}
function Is(e, t, n = []) {
  ur(), su();
  const r = ce(e)[t].apply(e, n);
  return ou(), fr(), r;
}
const T1 = Ql("__proto__,__v_isRef,__isVue"),
  pp = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Xt)
  );
function D1(e) {
  Xt(e) || (e = String(e));
  const t = ce(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class mp {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return r === (s ? (o ? R1 : wp) : o ? yp : gp).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = se(t);
    if (!s) {
      let c;
      if (i && (c = A1[n])) return c;
      if (n === "hasOwnProperty") return D1;
    }
    const a = Reflect.get(t, n, ze(t) ? t : r);
    return (Xt(n) ? pp.has(n) : T1(n)) || (s || ut(t, "get", n), o)
      ? a
      : ze(a)
      ? i && ru(n)
        ? a
        : a.value
      : Me(a)
      ? s
        ? cu(a)
        : pt(a)
      : a;
  }
}
class bp extends mp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const c = Ir(o);
      if (
        (!Ft(r) && !Ir(r) && ((o = ce(o)), (r = ce(r))),
        !se(t) && ze(o) && !ze(r))
      )
        return c ? !1 : ((o.value = r), !0);
    }
    const i = se(t) && ru(n) ? Number(n) < t.length : Te(t, n),
      a = Reflect.set(t, n, r, ze(t) ? t : s);
    return (
      t === ce(s) && (i ? er(r, o) && _n(t, "set", n, r) : _n(t, "add", n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = Te(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && _n(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Xt(n) || !pp.has(n)) && ut(t, "has", n), r;
  }
  ownKeys(t) {
    return ut(t, "iterate", se(t) ? "length" : Ar), Reflect.ownKeys(t);
  }
}
class O1 extends mp {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const I1 = new bp(),
  $1 = new O1(),
  N1 = new bp(!0);
const Lc = (e) => e,
  oi = (e) => Reflect.getPrototypeOf(e);
function M1(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = ce(s),
      i = Jr(o),
      a = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      u = s[e](...r),
      l = n ? Lc : t ? Rc : ft;
    return (
      !t && ut(o, "iterate", c ? Bc : Ar),
      {
        next() {
          const { value: f, done: h } = u.next();
          return h
            ? { value: f, done: h }
            : { value: a ? [l(f[0]), l(f[1])] : l(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ii(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function U1(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = ce(o),
        a = ce(s);
      e || (er(s, a) && ut(i, "get", s), ut(i, "get", a));
      const { has: c } = oi(i),
        u = t ? Lc : e ? Rc : ft;
      if (c.call(i, s)) return u(o.get(s));
      if (c.call(i, a)) return u(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ut(ce(s), "iterate", Ar), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw,
        i = ce(o),
        a = ce(s);
      return (
        e || (er(s, a) && ut(i, "has", s), ut(i, "has", a)),
        s === a ? o.has(s) : o.has(s) || o.has(a)
      );
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        c = ce(a),
        u = t ? Lc : e ? Rc : ft;
      return (
        !e && ut(c, "iterate", Ar),
        a.forEach((l, f) => s.call(o, u(l), u(f), i))
      );
    },
  };
  return (
    Xe(
      n,
      e
        ? {
            add: ii("add"),
            set: ii("set"),
            delete: ii("delete"),
            clear: ii("clear"),
          }
        : {
            add(s) {
              !t && !Ft(s) && !Ir(s) && (s = ce(s));
              const o = ce(this);
              return (
                oi(o).has.call(o, s) || (o.add(s), _n(o, "add", s, s)), this
              );
            },
            set(s, o) {
              !t && !Ft(o) && !Ir(o) && (o = ce(o));
              const i = ce(this),
                { has: a, get: c } = oi(i);
              let u = a.call(i, s);
              u || ((s = ce(s)), (u = a.call(i, s)));
              const l = c.call(i, s);
              return (
                i.set(s, o),
                u ? er(o, l) && _n(i, "set", s, o) : _n(i, "add", s, o),
                this
              );
            },
            delete(s) {
              const o = ce(this),
                { has: i, get: a } = oi(o);
              let c = i.call(o, s);
              c || ((s = ce(s)), (c = i.call(o, s))), a && a.call(o, s);
              const u = o.delete(s);
              return c && _n(o, "delete", s, void 0), u;
            },
            clear() {
              const s = ce(this),
                o = s.size !== 0,
                i = s.clear();
              return o && _n(s, "clear", void 0, void 0), i;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = M1(s, e, t);
    }),
    n
  );
}
function au(e, t) {
  const n = U1(e, t);
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(Te(n, s) && s in r ? n : r, s, o);
}
const F1 = { get: au(!1, !1) },
  B1 = { get: au(!1, !0) },
  L1 = { get: au(!0, !1) };
const gp = new WeakMap(),
  yp = new WeakMap(),
  wp = new WeakMap(),
  R1 = new WeakMap();
function j1(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function H1(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : j1(d1(e));
}
function pt(e) {
  return Ir(e) ? e : lu(e, !1, I1, F1, gp);
}
function vp(e) {
  return lu(e, !1, N1, B1, yp);
}
function cu(e) {
  return lu(e, !0, $1, L1, wp);
}
function lu(e, t, n, r, s) {
  if (!Me(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = H1(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function Pn(e) {
  return Ir(e) ? Pn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ir(e) {
  return !!(e && e.__v_isReadonly);
}
function Ft(e) {
  return !!(e && e.__v_isShallow);
}
function uu(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function fu(e) {
  return (
    !Te(e, "__v_skip") && Object.isExtensible(e) && Jh(e, "__v_skip", !0), e
  );
}
const ft = (e) => (Me(e) ? pt(e) : e),
  Rc = (e) => (Me(e) ? cu(e) : e);
function ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function dt(e) {
  return Ep(e, !1);
}
function z1(e) {
  return Ep(e, !0);
}
function Ep(e, t) {
  return ze(e) ? e : new W1(e, t);
}
class W1 {
  constructor(t, n) {
    (this.dep = new aa()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : ce(t)),
      (this._value = n ? t : ft(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Ft(t) || Ir(t);
    (t = r ? t : ce(t)),
      er(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : ft(t)),
        this.dep.trigger());
  }
}
function Et(e) {
  return ze(e) ? e.value : e;
}
const q1 = {
  get: (e, t, n) => (t === "__v_raw" ? e : Et(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return ze(s) && !ze(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Cp(e) {
  return Pn(e) ? e : new Proxy(e, q1);
}
class G1 {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new aa()),
      { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = r), (this._set = s);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function sT(e) {
  return new G1(e);
}
function V1(e) {
  const t = se(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = xp(e, n);
  return t;
}
class K1 {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return S1(ce(this._object), this._key);
  }
}
class X1 {
  constructor(t) {
    (this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Y1(e, t, n) {
  return ze(e)
    ? e
    : ue(e)
    ? new X1(e)
    : Me(e) && arguments.length > 1
    ? xp(e, t, n)
    : dt(e);
}
function xp(e, t, n) {
  const r = e[t];
  return ze(r) ? r : new K1(e, t, n);
}
class Z1 {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new aa(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = io - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Le !== this))
      return cp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function J1(e, t, n = !1) {
  let r, s;
  return ue(e) ? (r = e) : ((r = e.get), (s = e.set)), new Z1(r, s, n);
}
const ai = {},
  Di = new WeakMap();
let _r;
function Q1(e, t = !1, n = _r) {
  if (n) {
    let r = Di.get(n);
    r || Di.set(n, (r = [])), r.push(e);
  }
}
function eg(e, t, n = Fe) {
  const {
      immediate: r,
      deep: s,
      once: o,
      scheduler: i,
      augmentJob: a,
      call: c,
    } = n,
    u = (v) => (s ? v : Ft(v) || s === !1 || s === 0 ? kn(v, 1) : kn(v));
  let l,
    f,
    h,
    p,
    m = !1,
    g = !1;
  if (
    (ze(e)
      ? ((f = () => e.value), (m = Ft(e)))
      : Pn(e)
      ? ((f = () => u(e)), (m = !0))
      : se(e)
      ? ((g = !0),
        (m = e.some((v) => Pn(v) || Ft(v))),
        (f = () =>
          e.map((v) => {
            if (ze(v)) return v.value;
            if (Pn(v)) return u(v);
            if (ue(v)) return c ? c(v, 2) : v();
          })))
      : ue(e)
      ? t
        ? (f = c ? () => c(e, 2) : e)
        : (f = () => {
            if (h) {
              ur();
              try {
                h();
              } finally {
                fr();
              }
            }
            const v = _r;
            _r = l;
            try {
              return c ? c(e, 3, [p]) : e(p);
            } finally {
              _r = v;
            }
          })
      : (f = fn),
    t && s)
  ) {
    const v = f,
      w = s === !0 ? 1 / 0 : s;
    f = () => kn(v(), w);
  }
  const y = op(),
    k = () => {
      l.stop(), y && y.active && tu(y.effects, l);
    };
  if (o && t) {
    const v = t;
    t = (...w) => {
      v(...w), k();
    };
  }
  let b = g ? new Array(e.length).fill(ai) : ai;
  const E = (v) => {
    if (!(!(l.flags & 1) || (!l.dirty && !v)))
      if (t) {
        const w = l.run();
        if (s || m || (g ? w.some((x, d) => er(x, b[d])) : er(w, b))) {
          h && h();
          const x = _r;
          _r = l;
          try {
            const d = [w, b === ai ? void 0 : g && b[0] === ai ? [] : b, p];
            c ? c(t, 3, d) : t(...d), (b = w);
          } finally {
            _r = x;
          }
        }
      } else l.run();
  };
  return (
    a && a(E),
    (l = new ip(f)),
    (l.scheduler = i ? () => i(E, !1) : E),
    (p = (v) => Q1(v, !1, l)),
    (h = l.onStop =
      () => {
        const v = Di.get(l);
        if (v) {
          if (c) c(v, 4);
          else for (const w of v) w();
          Di.delete(l);
        }
      }),
    t ? (r ? E(!0) : (b = l.run())) : i ? i(E.bind(null, !0), !0) : l.run(),
    (k.pause = l.pause.bind(l)),
    (k.resume = l.resume.bind(l)),
    (k.stop = k),
    k
  );
}
function kn(e, t = 1 / 0, n) {
  if (t <= 0 || !Me(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, ze(e))) kn(e.value, t, n);
  else if (se(e)) for (let r = 0; r < e.length; r++) kn(e[r], t, n);
  else if (na(e) || Jr(e))
    e.forEach((r) => {
      kn(r, t, n);
    });
  else if (Zh(e)) {
    for (const r in e) kn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && kn(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function jo(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Ho(s, t, n);
  }
}
function Yt(e, t, n, r) {
  if (ue(e)) {
    const s = jo(e, t, n, r);
    return (
      s &&
        nu(s) &&
        s.catch((o) => {
          Ho(o, t, n);
        }),
      s
    );
  }
  if (se(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Yt(e[o], t, n, r));
    return s;
  }
}
function Ho(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || Fe;
  if (t) {
    let a = t.parent;
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const l = a.ec;
      if (l) {
        for (let f = 0; f < l.length; f++) if (l[f](e, c, u) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      ur(), jo(o, null, 10, [e, c, u]), fr();
      return;
    }
  }
  tg(e, n, s, r, i);
}
function tg(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const gt = [];
let on = -1;
const Qr = [];
let Wn = null,
  qr = 0;
const _p = Promise.resolve();
let Oi = null;
function Fr(e) {
  const t = Oi || _p;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ng(e) {
  let t = on + 1,
    n = gt.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = gt[r],
      o = co(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function du(e) {
  if (!(e.flags & 1)) {
    const t = co(e),
      n = gt[gt.length - 1];
    !n || (!(e.flags & 2) && t >= co(n)) ? gt.push(e) : gt.splice(ng(t), 0, e),
      (e.flags |= 1),
      kp();
  }
}
function kp() {
  Oi || (Oi = _p.then(Ap));
}
function jc(e) {
  se(e)
    ? Qr.push(...e)
    : Wn && e.id === -1
    ? Wn.splice(qr + 1, 0, e)
    : e.flags & 1 || (Qr.push(e), (e.flags |= 1)),
    kp();
}
function Pf(e, t, n = on + 1) {
  for (; n < gt.length; n++) {
    const r = gt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      gt.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Sp(e) {
  if (Qr.length) {
    const t = [...new Set(Qr)].sort((n, r) => co(n) - co(r));
    if (((Qr.length = 0), Wn)) {
      Wn.push(...t);
      return;
    }
    for (Wn = t, qr = 0; qr < Wn.length; qr++) {
      const n = Wn[qr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Wn = null), (qr = 0);
  }
}
const co = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Ap(e) {
  try {
    for (on = 0; on < gt.length; on++) {
      const t = gt[on];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        jo(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; on < gt.length; on++) {
      const t = gt[on];
      t && (t.flags &= -2);
    }
    (on = -1),
      (gt.length = 0),
      Sp(),
      (Oi = null),
      (gt.length || Qr.length) && Ap();
  }
}
let Ze = null,
  Pp = null;
function Ii(e) {
  const t = Ze;
  return (Ze = e), (Pp = (e && e.type.__scopeId) || null), t;
}
function An(e, t = Ze, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Lf(-1);
    const o = Ii(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Ii(o), r._d && Lf(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function oT(e, t) {
  if (Ze === null) return e;
  const n = pa(Ze),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, c = Fe] = t[s];
    o &&
      (ue(o) && (o = { mounted: o, updated: o }),
      o.deep && kn(i),
      r.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      }));
  }
  return e;
}
function br(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[r];
    c && (ur(), Yt(c, n, 8, [e.el, a, e, t]), fr());
  }
}
const rg = Symbol("_vte"),
  Tp = (e) => e.__isTeleport,
  qn = Symbol("_leaveCb"),
  ci = Symbol("_enterCb");
function sg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ys(() => {
      e.isMounted = !0;
    }),
    hu(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ot = [Function, Array],
  Dp = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ot,
    onEnter: Ot,
    onAfterEnter: Ot,
    onEnterCancelled: Ot,
    onBeforeLeave: Ot,
    onLeave: Ot,
    onAfterLeave: Ot,
    onLeaveCancelled: Ot,
    onBeforeAppear: Ot,
    onAppear: Ot,
    onAfterAppear: Ot,
    onAppearCancelled: Ot,
  },
  Op = (e) => {
    const t = e.subTree;
    return t.component ? Op(t.component) : t;
  },
  og = {
    name: "BaseTransition",
    props: Dp,
    setup(e, { slots: t }) {
      const n = wu(),
        r = sg();
      return () => {
        const s = t.default && Np(t.default(), !0);
        if (!s || !s.length) return;
        const o = Ip(s),
          i = ce(e),
          { mode: a } = i;
        if (r.isLeaving) return ic(o);
        const c = Tf(o);
        if (!c) return ic(o);
        let u = Hc(c, i, r, n, (f) => (u = f));
        c.type !== ot && lo(c, u);
        let l = n.subTree && Tf(n.subTree);
        if (l && l.type !== ot && !an(c, l) && Op(n).type !== ot) {
          let f = Hc(l, i, r, n);
          if ((lo(l, f), a === "out-in" && c.type !== ot))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (l = void 0);
              }),
              ic(o)
            );
          a === "in-out" && c.type !== ot
            ? (f.delayLeave = (h, p, m) => {
                const g = $p(r, l);
                (g[String(l.key)] = l),
                  (h[qn] = () => {
                    p(), (h[qn] = void 0), delete u.delayedLeave, (l = void 0);
                  }),
                  (u.delayedLeave = () => {
                    m(), delete u.delayedLeave, (l = void 0);
                  });
              })
            : (l = void 0);
        } else l && (l = void 0);
        return o;
      };
    },
  };
function Ip(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ot) {
        t = n;
        break;
      }
  }
  return t;
}
const ig = og;
function $p(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Hc(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: l,
      onEnterCancelled: f,
      onBeforeLeave: h,
      onLeave: p,
      onAfterLeave: m,
      onLeaveCancelled: g,
      onBeforeAppear: y,
      onAppear: k,
      onAfterAppear: b,
      onAppearCancelled: E,
    } = t,
    v = String(e.key),
    w = $p(n, e),
    x = (A, $) => {
      A && Yt(A, r, 9, $);
    },
    d = (A, $) => {
      const I = $[1];
      x(A, $),
        se(A) ? A.every((T) => T.length <= 1) && I() : A.length <= 1 && I();
    },
    C = {
      mode: i,
      persisted: a,
      beforeEnter(A) {
        let $ = c;
        if (!n.isMounted)
          if (o) $ = y || c;
          else return;
        A[qn] && A[qn](!0);
        const I = w[v];
        I && an(e, I) && I.el[qn] && I.el[qn](), x($, [A]);
      },
      enter(A) {
        let $ = u,
          I = l,
          T = f;
        if (!n.isMounted)
          if (o) ($ = k || u), (I = b || l), (T = E || f);
          else return;
        let U = !1;
        const F = (A[ci] = (Z) => {
          U ||
            ((U = !0),
            Z ? x(T, [A]) : x(I, [A]),
            C.delayedLeave && C.delayedLeave(),
            (A[ci] = void 0));
        });
        $ ? d($, [A, F]) : F();
      },
      leave(A, $) {
        const I = String(e.key);
        if ((A[ci] && A[ci](!0), n.isUnmounting)) return $();
        x(h, [A]);
        let T = !1;
        const U = (A[qn] = (F) => {
          T ||
            ((T = !0),
            $(),
            F ? x(g, [A]) : x(m, [A]),
            (A[qn] = void 0),
            w[I] === e && delete w[I]);
        });
        (w[I] = e), p ? d(p, [A, U]) : U();
      },
      clone(A) {
        const $ = Hc(A, t, n, r, s);
        return s && s($), $;
      },
    };
  return C;
}
function ic(e) {
  if (la(e)) return (e = On(e)), (e.children = null), e;
}
function Tf(e) {
  if (!la(e)) return Tp(e.type) && e.children ? Ip(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ue(n.default)) return n.default();
  }
}
function lo(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), lo(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Np(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ge
      ? (i.patchFlag & 128 && s++, (r = r.concat(Np(i.children, t, a))))
      : (t || i.type !== ot) && r.push(a != null ? On(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function gs(e, t) {
  return ue(e) ? Xe({ name: e.name }, t, { setup: e }) : e;
}
function Mp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function $i(e, t, n, r, s = !1) {
  if (se(e)) {
    e.forEach((m, g) => $i(m, t && (se(t) ? t[g] : t), n, r, s));
    return;
  }
  if (es(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      $i(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? pa(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: c } = e,
    u = t && t.r,
    l = a.refs === Fe ? (a.refs = {}) : a.refs,
    f = a.setupState,
    h = ce(f),
    p = f === Fe ? () => !1 : (m) => Te(h, m);
  if (
    (u != null &&
      u !== c &&
      (qe(u)
        ? ((l[u] = null), p(u) && (f[u] = null))
        : ze(u) && (u.value = null)),
    ue(c))
  )
    jo(c, a, 12, [i, l]);
  else {
    const m = qe(c),
      g = ze(c);
    if (m || g) {
      const y = () => {
        if (e.f) {
          const k = m ? (p(c) ? f[c] : l[c]) : c.value;
          s
            ? se(k) && tu(k, o)
            : se(k)
            ? k.includes(o) || k.push(o)
            : m
            ? ((l[c] = [o]), p(c) && (f[c] = l[c]))
            : ((c.value = [o]), e.k && (l[e.k] = c.value));
        } else
          m
            ? ((l[c] = i), p(c) && (f[c] = i))
            : g && ((c.value = i), e.k && (l[e.k] = i));
      };
      i ? ((y.id = -1), Pt(y, n)) : y();
    }
  }
}
oa().requestIdleCallback;
oa().cancelIdleCallback;
const es = (e) => !!e.type.__asyncLoader,
  la = (e) => e.type.__isKeepAlive;
function ag(e, t) {
  Up(e, "a", t);
}
function cg(e, t) {
  Up(e, "da", t);
}
function Up(e, t, n = nt) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((ua(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      la(s.parent.vnode) && lg(r, t, n, s), (s = s.parent);
  }
}
function lg(e, t, n, r) {
  const s = ua(t, e, r, !0);
  fa(() => {
    tu(r[t], s);
  }, n);
}
function ua(e, t, n = nt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          ur();
          const a = $r(n),
            c = Yt(t, n, e, i);
          return a(), fr(), c;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Mn =
    (e) =>
    (t, n = nt) => {
      (!ho || e === "sp") && ua(e, (...r) => t(...r), n);
    },
  ug = Mn("bm"),
  ys = Mn("m"),
  fg = Mn("bu"),
  dg = Mn("u"),
  hu = Mn("bum"),
  fa = Mn("um"),
  hg = Mn("sp"),
  pg = Mn("rtg"),
  mg = Mn("rtc");
function bg(e, t = nt) {
  ua("ec", e, t);
}
const gg = "components",
  Fp = Symbol.for("v-ndc");
function uo(e) {
  return qe(e) ? yg(gg, e, !1) || e : e || Fp;
}
function yg(e, t, n = !0, r = !1) {
  const s = Ze || nt;
  if (s) {
    const o = s.type;
    {
      const a = uy(o, !1);
      if (a && (a === t || a === Rt(t) || a === sa(Rt(t)))) return o;
    }
    const i = Df(s[e] || o[e], t) || Df(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function Df(e, t) {
  return e && (e[t] || e[Rt(t)] || e[sa(Rt(t))]);
}
function cs(e, t, n, r) {
  let s;
  const o = n,
    i = se(e);
  if (i || qe(e)) {
    const a = i && Pn(e);
    let c = !1;
    a && ((c = !Ft(e)), (e = ca(e))), (s = new Array(e.length));
    for (let u = 0, l = e.length; u < l; u++)
      s[u] = t(c ? ft(e[u]) : e[u], u, void 0, o);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if (Me(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, c) => t(a, c, void 0, o));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let c = 0, u = a.length; c < u; c++) {
        const l = a[c];
        s[c] = t(e[l], l, c, o);
      }
    }
  else s = [];
  return s;
}
function wg(e, t, n = {}, r, s) {
  if (Ze.ce || (Ze.parent && es(Ze.parent) && Ze.parent.ce))
    return pe(), xt(Ge, null, [he("slot", n, r && r())], 64);
  let o = e[t];
  o && o._c && (o._d = !1), pe();
  const i = o && Bp(o(n)),
    a = n.key || (i && i.key),
    c = xt(
      Ge,
      { key: (a && !Xt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "") },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    c
  );
}
function Bp(e) {
  return e.some((t) =>
    sr(t) ? !(t.type === ot || (t.type === Ge && !Bp(t.children))) : !0
  )
    ? e
    : null;
}
const zc = (e) => (e ? (im(e) ? pa(e) : zc(e.parent)) : null),
  Ys = Xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zc(e.parent),
    $root: (e) => zc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => pu(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        du(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Fr.bind(e.proxy)),
    $watch: (e) => jg.bind(e),
  }),
  ac = (e, t) => e !== Fe && !e.__isScriptSetup && Te(e, t),
  vg = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: c,
      } = e;
      let u;
      if (t[0] !== "$") {
        const p = i[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (ac(r, t)) return (i[t] = 1), r[t];
          if (s !== Fe && Te(s, t)) return (i[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && Te(u, t)) return (i[t] = 3), o[t];
          if (n !== Fe && Te(n, t)) return (i[t] = 4), n[t];
          Wc && (i[t] = 0);
        }
      }
      const l = Ys[t];
      let f, h;
      if (l) return t === "$attrs" && ut(e.attrs, "get", ""), l(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== Fe && Te(n, t)) return (i[t] = 4), n[t];
      if (((h = c.config.globalProperties), Te(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return ac(s, t)
        ? ((s[t] = n), !0)
        : r !== Fe && Te(r, t)
        ? ((r[t] = n), !0)
        : Te(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== Fe && Te(e, i)) ||
        ac(t, i) ||
        ((a = o[0]) && Te(a, i)) ||
        Te(r, i) ||
        Te(Ys, i) ||
        Te(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Te(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function iT() {
  return Lp().slots;
}
function aT() {
  return Lp().attrs;
}
function Lp() {
  const e = wu();
  return e.setupContext || (e.setupContext = cm(e));
}
function Of(e) {
  return se(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function cT(e) {
  const t = wu();
  let n = e();
  return (
    Xc(),
    nu(n) &&
      (n = n.catch((r) => {
        throw ($r(t), r);
      })),
    [n, () => $r(t)]
  );
}
let Wc = !0;
function Eg(e) {
  const t = pu(e),
    n = e.proxy,
    r = e.ctx;
  (Wc = !1), t.beforeCreate && If(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: c,
    inject: u,
    created: l,
    beforeMount: f,
    mounted: h,
    beforeUpdate: p,
    updated: m,
    activated: g,
    deactivated: y,
    beforeDestroy: k,
    beforeUnmount: b,
    destroyed: E,
    unmounted: v,
    render: w,
    renderTracked: x,
    renderTriggered: d,
    errorCaptured: C,
    serverPrefetch: A,
    expose: $,
    inheritAttrs: I,
    components: T,
    directives: U,
    filters: F,
  } = t;
  if ((u && Cg(u, r, null), i))
    for (const N in i) {
      const X = i[N];
      ue(X) && (r[N] = X.bind(n));
    }
  if (s) {
    const N = s.call(n, n);
    Me(N) && (e.data = pt(N));
  }
  if (((Wc = !0), o))
    for (const N in o) {
      const X = o[N],
        Ce = ue(X) ? X.bind(n, n) : ue(X.get) ? X.get.bind(n, n) : fn,
        ke = !ue(X) && ue(X.set) ? X.set.bind(n) : fn,
        xe = ge({ get: Ce, set: ke });
      Object.defineProperty(r, N, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (ve) => (xe.value = ve),
      });
    }
  if (a) for (const N in a) Rp(a[N], r, n, N);
  if (c) {
    const N = ue(c) ? c.call(n) : c;
    Reflect.ownKeys(N).forEach((X) => {
      gi(X, N[X]);
    });
  }
  l && If(l, e, "c");
  function G(N, X) {
    se(X) ? X.forEach((Ce) => N(Ce.bind(n))) : X && N(X.bind(n));
  }
  if (
    (G(ug, f),
    G(ys, h),
    G(fg, p),
    G(dg, m),
    G(ag, g),
    G(cg, y),
    G(bg, C),
    G(mg, x),
    G(pg, d),
    G(hu, b),
    G(fa, v),
    G(hg, A),
    se($))
  )
    if ($.length) {
      const N = e.exposed || (e.exposed = {});
      $.forEach((X) => {
        Object.defineProperty(N, X, {
          get: () => n[X],
          set: (Ce) => (n[X] = Ce),
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === fn && (e.render = w),
    I != null && (e.inheritAttrs = I),
    T && (e.components = T),
    U && (e.directives = U),
    A && Mp(e);
}
function Cg(e, t, n = fn) {
  se(e) && (e = qc(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Me(s)
      ? "default" in s
        ? (o = Bt(s.from || r, s.default, !0))
        : (o = Bt(s.from || r))
      : (o = Bt(s)),
      ze(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function If(e, t, n) {
  Yt(se(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Rp(e, t, n, r) {
  let s = r.includes(".") ? Qp(n, r) : () => n[r];
  if (qe(e)) {
    const o = t[e];
    ue(o) && Tr(s, o);
  } else if (ue(e)) Tr(s, e.bind(n));
  else if (Me(e))
    if (se(e)) e.forEach((o) => Rp(o, t, n, r));
    else {
      const o = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
      ue(o) && Tr(s, o, e);
    }
}
function pu(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t);
  let c;
  return (
    a
      ? (c = a)
      : !s.length && !n && !r
      ? (c = t)
      : ((c = {}), s.length && s.forEach((u) => Ni(c, u, i, !0)), Ni(c, t, i)),
    Me(t) && o.set(t, c),
    c
  );
}
function Ni(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Ni(e, o, n, !0), s && s.forEach((i) => Ni(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = xg[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const xg = {
  data: $f,
  props: Nf,
  emits: Nf,
  methods: zs,
  computed: zs,
  beforeCreate: mt,
  created: mt,
  beforeMount: mt,
  mounted: mt,
  beforeUpdate: mt,
  updated: mt,
  beforeDestroy: mt,
  beforeUnmount: mt,
  destroyed: mt,
  unmounted: mt,
  activated: mt,
  deactivated: mt,
  errorCaptured: mt,
  serverPrefetch: mt,
  components: zs,
  directives: zs,
  watch: kg,
  provide: $f,
  inject: _g,
};
function $f(e, t) {
  return t
    ? e
      ? function () {
          return Xe(
            ue(e) ? e.call(this, this) : e,
            ue(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function _g(e, t) {
  return zs(qc(e), qc(t));
}
function qc(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function mt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zs(e, t) {
  return e ? Xe(Object.create(null), e, t) : t;
}
function Nf(e, t) {
  return e
    ? se(e) && se(t)
      ? [...new Set([...e, ...t])]
      : Xe(Object.create(null), Of(e), Of(t ?? {}))
    : t;
}
function kg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xe(Object.create(null), e);
  for (const r in t) n[r] = mt(e[r], t[r]);
  return n;
}
function jp() {
  return {
    app: null,
    config: {
      isNativeTag: u1,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Sg = 0;
function Ag(e, t) {
  return function (r, s = null) {
    ue(r) || (r = Xe({}, r)), s != null && !Me(s) && (s = null);
    const o = jp(),
      i = new WeakSet(),
      a = [];
    let c = !1;
    const u = (o.app = {
      _uid: Sg++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: dy,
      get config() {
        return o.config;
      },
      set config(l) {},
      use(l, ...f) {
        return (
          i.has(l) ||
            (l && ue(l.install)
              ? (i.add(l), l.install(u, ...f))
              : ue(l) && (i.add(l), l(u, ...f))),
          u
        );
      },
      mixin(l) {
        return o.mixins.includes(l) || o.mixins.push(l), u;
      },
      component(l, f) {
        return f ? ((o.components[l] = f), u) : o.components[l];
      },
      directive(l, f) {
        return f ? ((o.directives[l] = f), u) : o.directives[l];
      },
      mount(l, f, h) {
        if (!c) {
          const p = u._ceVNode || he(r, s);
          return (
            (p.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            f && t ? t(p, l) : e(p, l, h),
            (c = !0),
            (u._container = l),
            (l.__vue_app__ = u),
            pa(p.component)
          );
        }
      },
      onUnmount(l) {
        a.push(l);
      },
      unmount() {
        c &&
          (Yt(a, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(l, f) {
        return (o.provides[l] = f), u;
      },
      runWithContext(l) {
        const f = Pr;
        Pr = u;
        try {
          return l();
        } finally {
          Pr = f;
        }
      },
    });
    return u;
  };
}
let Pr = null;
function gi(e, t) {
  if (nt) {
    let n = nt.provides;
    const r = nt.parent && nt.parent.provides;
    r === n && (n = nt.provides = Object.create(r)), (n[e] = t);
  }
}
function Bt(e, t, n = !1) {
  const r = nt || Ze;
  if (r || Pr) {
    const s = Pr
      ? Pr._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ue(t) ? t.call(r && r.proxy) : t;
  }
}
function Pg() {
  return !!(nt || Ze || Pr);
}
const Hp = {},
  zp = () => Object.create(Hp),
  Wp = (e) => Object.getPrototypeOf(e) === Hp;
function Tg(e, t, n, r = !1) {
  const s = {},
    o = zp();
  (e.propsDefaults = Object.create(null)), qp(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : vp(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function Dg(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = ce(s),
    [c] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const l = e.vnode.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        let h = l[f];
        if (da(e.emitsOptions, h)) continue;
        const p = t[h];
        if (c)
          if (Te(o, h)) p !== o[h] && ((o[h] = p), (u = !0));
          else {
            const m = Rt(h);
            s[m] = Gc(c, a, m, p, e, !1);
          }
        else p !== o[h] && ((o[h] = p), (u = !0));
      }
    }
  } else {
    qp(e, t, s, o) && (u = !0);
    let l;
    for (const f in a)
      (!t || (!Te(t, f) && ((l = Ur(f)) === f || !Te(t, l)))) &&
        (c
          ? n &&
            (n[f] !== void 0 || n[l] !== void 0) &&
            (s[f] = Gc(c, a, f, void 0, e, !0))
          : delete s[f]);
    if (o !== a)
      for (const f in o) (!t || !Te(t, f)) && (delete o[f], (u = !0));
  }
  u && _n(e.attrs, "set", "");
}
function qp(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let c in t) {
      if (Vs(c)) continue;
      const u = t[c];
      let l;
      s && Te(s, (l = Rt(c)))
        ? !o || !o.includes(l)
          ? (n[l] = u)
          : ((a || (a = {}))[l] = u)
        : da(e.emitsOptions, c) ||
          ((!(c in r) || u !== r[c]) && ((r[c] = u), (i = !0)));
    }
  if (o) {
    const c = ce(n),
      u = a || Fe;
    for (let l = 0; l < o.length; l++) {
      const f = o[l];
      n[f] = Gc(s, c, f, u[f], e, !Te(u, f));
    }
  }
  return i;
}
function Gc(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Te(i, "default");
    if (a && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && ue(c)) {
        const { propsDefaults: u } = s;
        if (n in u) r = u[n];
        else {
          const l = $r(s);
          (r = u[n] = c.call(null, t)), l();
        }
      } else r = c;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] &&
      (o && !a ? (r = !1) : i[1] && (r === "" || r === Ur(n)) && (r = !0));
  }
  return r;
}
const Og = new WeakMap();
function Gp(e, t, n = !1) {
  const r = n ? Og : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let c = !1;
  if (!ue(e)) {
    const l = (f) => {
      c = !0;
      const [h, p] = Gp(f, t, !0);
      Xe(i, h), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  if (!o && !c) return Me(e) && r.set(e, Zr), Zr;
  if (se(o))
    for (let l = 0; l < o.length; l++) {
      const f = Rt(o[l]);
      Mf(f) && (i[f] = Fe);
    }
  else if (o)
    for (const l in o) {
      const f = Rt(l);
      if (Mf(f)) {
        const h = o[l],
          p = (i[f] = se(h) || ue(h) ? { type: h } : Xe({}, h)),
          m = p.type;
        let g = !1,
          y = !0;
        if (se(m))
          for (let k = 0; k < m.length; ++k) {
            const b = m[k],
              E = ue(b) && b.name;
            if (E === "Boolean") {
              g = !0;
              break;
            } else E === "String" && (y = !1);
          }
        else g = ue(m) && m.name === "Boolean";
        (p[0] = g), (p[1] = y), (g || Te(p, "default")) && a.push(f);
      }
    }
  const u = [i, a];
  return Me(e) && r.set(e, u), u;
}
function Mf(e) {
  return e[0] !== "$" && !Vs(e);
}
const Vp = (e) => e[0] === "_" || e === "$stable",
  mu = (e) => (se(e) ? e.map(qt) : [qt(e)]),
  Ig = (e, t, n) => {
    if (t._n) return t;
    const r = An((...s) => mu(t(...s)), n);
    return (r._c = !1), r;
  },
  Kp = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Vp(s)) continue;
      const o = e[s];
      if (ue(o)) t[s] = Ig(s, o, r);
      else if (o != null) {
        const i = mu(o);
        t[s] = () => i;
      }
    }
  },
  Xp = (e, t) => {
    const n = mu(t);
    e.slots.default = () => n;
  },
  Yp = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  },
  $g = (e, t, n) => {
    const r = (e.slots = zp());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Yp(r, t, n), n && Jh(r, "_", s, !0)) : Kp(t, r);
    } else t && Xp(e, t);
  },
  Ng = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = Fe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (o = !1)
          : Yp(s, t, n)
        : ((o = !t.$stable), Kp(t, s)),
        (i = t);
    } else t && (Xp(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !Vp(a) && i[a] == null && delete s[a];
  },
  Pt = Qg;
function Mg(e) {
  return Ug(e);
}
function Ug(e, t) {
  const n = oa();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: c,
      setText: u,
      setElementText: l,
      parentNode: f,
      nextSibling: h,
      setScopeId: p = fn,
      insertStaticContent: m,
    } = e,
    g = (
      _,
      S,
      D,
      L = null,
      M = null,
      j = null,
      Y = void 0,
      W = null,
      H = !!S.dynamicChildren
    ) => {
      if (_ === S) return;
      _ && !an(_, S) && ((L = O(_)), ve(_, M, j, !0), (_ = null)),
        S.patchFlag === -2 && ((H = !1), (S.dynamicChildren = null));
      const { type: B, ref: ee, shapeFlag: q } = S;
      switch (B) {
        case ha:
          y(_, S, D, L);
          break;
        case ot:
          k(_, S, D, L);
          break;
        case yi:
          _ == null && b(S, D, L, Y);
          break;
        case Ge:
          T(_, S, D, L, M, j, Y, W, H);
          break;
        default:
          q & 1
            ? w(_, S, D, L, M, j, Y, W, H)
            : q & 6
            ? U(_, S, D, L, M, j, Y, W, H)
            : (q & 64 || q & 128) && B.process(_, S, D, L, M, j, Y, W, H, V);
      }
      ee != null && M && $i(ee, _ && _.ref, j, S || _, !S);
    },
    y = (_, S, D, L) => {
      if (_ == null) r((S.el = a(S.children)), D, L);
      else {
        const M = (S.el = _.el);
        S.children !== _.children && u(M, S.children);
      }
    },
    k = (_, S, D, L) => {
      _ == null ? r((S.el = c(S.children || "")), D, L) : (S.el = _.el);
    },
    b = (_, S, D, L) => {
      [_.el, _.anchor] = m(_.children, S, D, L, _.el, _.anchor);
    },
    E = ({ el: _, anchor: S }, D, L) => {
      let M;
      for (; _ && _ !== S; ) (M = h(_)), r(_, D, L), (_ = M);
      r(S, D, L);
    },
    v = ({ el: _, anchor: S }) => {
      let D;
      for (; _ && _ !== S; ) (D = h(_)), s(_), (_ = D);
      s(S);
    },
    w = (_, S, D, L, M, j, Y, W, H) => {
      S.type === "svg" ? (Y = "svg") : S.type === "math" && (Y = "mathml"),
        _ == null ? x(S, D, L, M, j, Y, W, H) : A(_, S, M, j, Y, W, H);
    },
    x = (_, S, D, L, M, j, Y, W) => {
      let H, B;
      const { props: ee, shapeFlag: q, transition: J, dirs: te } = _;
      if (
        ((H = _.el = i(_.type, j, ee && ee.is, ee)),
        q & 8
          ? l(H, _.children)
          : q & 16 && C(_.children, H, null, L, M, cc(_, j), Y, W),
        te && br(_, null, L, "created"),
        d(H, _, _.scopeId, Y, L),
        ee)
      ) {
        for (const be in ee)
          be !== "value" && !Vs(be) && o(H, be, null, ee[be], j, L);
        "value" in ee && o(H, "value", null, ee.value, j),
          (B = ee.onVnodeBeforeMount) && rn(B, L, _);
      }
      te && br(_, null, L, "beforeMount");
      const oe = Fg(M, J);
      oe && J.beforeEnter(H),
        r(H, S, D),
        ((B = ee && ee.onVnodeMounted) || oe || te) &&
          Pt(() => {
            B && rn(B, L, _), oe && J.enter(H), te && br(_, null, L, "mounted");
          }, M);
    },
    d = (_, S, D, L, M) => {
      if ((D && p(_, D), L)) for (let j = 0; j < L.length; j++) p(_, L[j]);
      if (M) {
        let j = M.subTree;
        if (
          S === j ||
          (tm(j.type) && (j.ssContent === S || j.ssFallback === S))
        ) {
          const Y = M.vnode;
          d(_, Y, Y.scopeId, Y.slotScopeIds, M.parent);
        }
      }
    },
    C = (_, S, D, L, M, j, Y, W, H = 0) => {
      for (let B = H; B < _.length; B++) {
        const ee = (_[B] = W ? Gn(_[B]) : qt(_[B]));
        g(null, ee, S, D, L, M, j, Y, W);
      }
    },
    A = (_, S, D, L, M, j, Y) => {
      const W = (S.el = _.el);
      let { patchFlag: H, dynamicChildren: B, dirs: ee } = S;
      H |= _.patchFlag & 16;
      const q = _.props || Fe,
        J = S.props || Fe;
      let te;
      if (
        (D && gr(D, !1),
        (te = J.onVnodeBeforeUpdate) && rn(te, D, S, _),
        ee && br(S, _, D, "beforeUpdate"),
        D && gr(D, !0),
        ((q.innerHTML && J.innerHTML == null) ||
          (q.textContent && J.textContent == null)) &&
          l(W, ""),
        B
          ? $(_.dynamicChildren, B, W, D, L, cc(S, M), j)
          : Y || X(_, S, W, null, D, L, cc(S, M), j, !1),
        H > 0)
      ) {
        if (H & 16) I(W, q, J, D, M);
        else if (
          (H & 2 && q.class !== J.class && o(W, "class", null, J.class, M),
          H & 4 && o(W, "style", q.style, J.style, M),
          H & 8)
        ) {
          const oe = S.dynamicProps;
          for (let be = 0; be < oe.length; be++) {
            const de = oe[be],
              Se = q[de],
              _e = J[de];
            (_e !== Se || de === "value") && o(W, de, Se, _e, M, D);
          }
        }
        H & 1 && _.children !== S.children && l(W, S.children);
      } else !Y && B == null && I(W, q, J, D, M);
      ((te = J.onVnodeUpdated) || ee) &&
        Pt(() => {
          te && rn(te, D, S, _), ee && br(S, _, D, "updated");
        }, L);
    },
    $ = (_, S, D, L, M, j, Y) => {
      for (let W = 0; W < S.length; W++) {
        const H = _[W],
          B = S[W],
          ee =
            H.el && (H.type === Ge || !an(H, B) || H.shapeFlag & 70)
              ? f(H.el)
              : D;
        g(H, B, ee, null, L, M, j, Y, !0);
      }
    },
    I = (_, S, D, L, M) => {
      if (S !== D) {
        if (S !== Fe)
          for (const j in S) !Vs(j) && !(j in D) && o(_, j, S[j], null, M, L);
        for (const j in D) {
          if (Vs(j)) continue;
          const Y = D[j],
            W = S[j];
          Y !== W && j !== "value" && o(_, j, W, Y, M, L);
        }
        "value" in D && o(_, "value", S.value, D.value, M);
      }
    },
    T = (_, S, D, L, M, j, Y, W, H) => {
      const B = (S.el = _ ? _.el : a("")),
        ee = (S.anchor = _ ? _.anchor : a(""));
      let { patchFlag: q, dynamicChildren: J, slotScopeIds: te } = S;
      te && (W = W ? W.concat(te) : te),
        _ == null
          ? (r(B, D, L), r(ee, D, L), C(S.children || [], D, ee, M, j, Y, W, H))
          : q > 0 && q & 64 && J && _.dynamicChildren
          ? ($(_.dynamicChildren, J, D, M, j, Y, W),
            (S.key != null || (M && S === M.subTree)) && Zp(_, S, !0))
          : X(_, S, D, ee, M, j, Y, W, H);
    },
    U = (_, S, D, L, M, j, Y, W, H) => {
      (S.slotScopeIds = W),
        _ == null
          ? S.shapeFlag & 512
            ? M.ctx.activate(S, D, L, Y, H)
            : F(S, D, L, M, j, Y, H)
          : Z(_, S, H);
    },
    F = (_, S, D, L, M, j, Y) => {
      const W = (_.component = iy(_, L, M));
      if ((la(_) && (W.ctx.renderer = V), ay(W, !1, Y), W.asyncDep)) {
        if ((M && M.registerDep(W, G, Y), !_.el)) {
          const H = (W.subTree = he(ot));
          k(null, H, S, D);
        }
      } else G(W, _, S, D, M, j, Y);
    },
    Z = (_, S, D) => {
      const L = (S.component = _.component);
      if (Vg(_, S, D))
        if (L.asyncDep && !L.asyncResolved) {
          N(L, S, D);
          return;
        } else (L.next = S), L.update();
      else (S.el = _.el), (L.vnode = S);
    },
    G = (_, S, D, L, M, j, Y) => {
      const W = () => {
        if (_.isMounted) {
          let { next: q, bu: J, u: te, parent: oe, vnode: be } = _;
          {
            const Ae = Jp(_);
            if (Ae) {
              q && ((q.el = be.el), N(_, q, Y)),
                Ae.asyncDep.then(() => {
                  _.isUnmounted || W();
                });
              return;
            }
          }
          let de = q,
            Se;
          gr(_, !1),
            q ? ((q.el = be.el), N(_, q, Y)) : (q = be),
            J && bi(J),
            (Se = q.props && q.props.onVnodeBeforeUpdate) && rn(Se, oe, q, be),
            gr(_, !0);
          const _e = lc(_),
            $e = _.subTree;
          (_.subTree = _e),
            g($e, _e, f($e.el), O($e), _, M, j),
            (q.el = _e.el),
            de === null && gu(_, _e.el),
            te && Pt(te, M),
            (Se = q.props && q.props.onVnodeUpdated) &&
              Pt(() => rn(Se, oe, q, be), M);
        } else {
          let q;
          const { el: J, props: te } = S,
            { bm: oe, m: be, parent: de, root: Se, type: _e } = _,
            $e = es(S);
          if (
            (gr(_, !1),
            oe && bi(oe),
            !$e && (q = te && te.onVnodeBeforeMount) && rn(q, de, S),
            gr(_, !0),
            J && ie)
          ) {
            const Ae = () => {
              (_.subTree = lc(_)), ie(J, _.subTree, _, M, null);
            };
            $e && _e.__asyncHydrate ? _e.__asyncHydrate(J, _, Ae) : Ae();
          } else {
            Se.ce && Se.ce._injectChildStyle(_e);
            const Ae = (_.subTree = lc(_));
            g(null, Ae, D, L, _, M, j), (S.el = Ae.el);
          }
          if ((be && Pt(be, M), !$e && (q = te && te.onVnodeMounted))) {
            const Ae = S;
            Pt(() => rn(q, de, Ae), M);
          }
          (S.shapeFlag & 256 ||
            (de && es(de.vnode) && de.vnode.shapeFlag & 256)) &&
            _.a &&
            Pt(_.a, M),
            (_.isMounted = !0),
            (S = D = L = null);
        }
      };
      _.scope.on();
      const H = (_.effect = new ip(W));
      _.scope.off();
      const B = (_.update = H.run.bind(H)),
        ee = (_.job = H.runIfDirty.bind(H));
      (ee.i = _), (ee.id = _.uid), (H.scheduler = () => du(ee)), gr(_, !0), B();
    },
    N = (_, S, D) => {
      S.component = _;
      const L = _.vnode.props;
      (_.vnode = S),
        (_.next = null),
        Dg(_, S.props, L, D),
        Ng(_, S.children, D),
        ur(),
        Pf(_),
        fr();
    },
    X = (_, S, D, L, M, j, Y, W, H = !1) => {
      const B = _ && _.children,
        ee = _ ? _.shapeFlag : 0,
        q = S.children,
        { patchFlag: J, shapeFlag: te } = S;
      if (J > 0) {
        if (J & 128) {
          ke(B, q, D, L, M, j, Y, W, H);
          return;
        } else if (J & 256) {
          Ce(B, q, D, L, M, j, Y, W, H);
          return;
        }
      }
      te & 8
        ? (ee & 16 && me(B, M, j), q !== B && l(D, q))
        : ee & 16
        ? te & 16
          ? ke(B, q, D, L, M, j, Y, W, H)
          : me(B, M, j, !0)
        : (ee & 8 && l(D, ""), te & 16 && C(q, D, L, M, j, Y, W, H));
    },
    Ce = (_, S, D, L, M, j, Y, W, H) => {
      (_ = _ || Zr), (S = S || Zr);
      const B = _.length,
        ee = S.length,
        q = Math.min(B, ee);
      let J;
      for (J = 0; J < q; J++) {
        const te = (S[J] = H ? Gn(S[J]) : qt(S[J]));
        g(_[J], te, D, null, M, j, Y, W, H);
      }
      B > ee ? me(_, M, j, !0, !1, q) : C(S, D, L, M, j, Y, W, H, q);
    },
    ke = (_, S, D, L, M, j, Y, W, H) => {
      let B = 0;
      const ee = S.length;
      let q = _.length - 1,
        J = ee - 1;
      for (; B <= q && B <= J; ) {
        const te = _[B],
          oe = (S[B] = H ? Gn(S[B]) : qt(S[B]));
        if (an(te, oe)) g(te, oe, D, null, M, j, Y, W, H);
        else break;
        B++;
      }
      for (; B <= q && B <= J; ) {
        const te = _[q],
          oe = (S[J] = H ? Gn(S[J]) : qt(S[J]));
        if (an(te, oe)) g(te, oe, D, null, M, j, Y, W, H);
        else break;
        q--, J--;
      }
      if (B > q) {
        if (B <= J) {
          const te = J + 1,
            oe = te < ee ? S[te].el : L;
          for (; B <= J; )
            g(null, (S[B] = H ? Gn(S[B]) : qt(S[B])), D, oe, M, j, Y, W, H),
              B++;
        }
      } else if (B > J) for (; B <= q; ) ve(_[B], M, j, !0), B++;
      else {
        const te = B,
          oe = B,
          be = new Map();
        for (B = oe; B <= J; B++) {
          const At = (S[B] = H ? Gn(S[B]) : qt(S[B]));
          At.key != null && be.set(At.key, B);
        }
        let de,
          Se = 0;
        const _e = J - oe + 1;
        let $e = !1,
          Ae = 0;
        const We = new Array(_e);
        for (B = 0; B < _e; B++) We[B] = 0;
        for (B = te; B <= q; B++) {
          const At = _[B];
          if (Se >= _e) {
            ve(At, M, j, !0);
            continue;
          }
          let nn;
          if (At.key != null) nn = be.get(At.key);
          else
            for (de = oe; de <= J; de++)
              if (We[de - oe] === 0 && an(At, S[de])) {
                nn = de;
                break;
              }
          nn === void 0
            ? ve(At, M, j, !0)
            : ((We[nn - oe] = B + 1),
              nn >= Ae ? (Ae = nn) : ($e = !0),
              g(At, S[nn], D, null, M, j, Y, W, H),
              Se++);
        }
        const Ye = $e ? Bg(We) : Zr;
        for (de = Ye.length - 1, B = _e - 1; B >= 0; B--) {
          const At = oe + B,
            nn = S[At],
            xf = At + 1 < ee ? S[At + 1].el : L;
          We[B] === 0
            ? g(null, nn, D, xf, M, j, Y, W, H)
            : $e && (de < 0 || B !== Ye[de] ? xe(nn, D, xf, 2) : de--);
        }
      }
    },
    xe = (_, S, D, L, M = null) => {
      const { el: j, type: Y, transition: W, children: H, shapeFlag: B } = _;
      if (B & 6) {
        xe(_.component.subTree, S, D, L);
        return;
      }
      if (B & 128) {
        _.suspense.move(S, D, L);
        return;
      }
      if (B & 64) {
        Y.move(_, S, D, V);
        return;
      }
      if (Y === Ge) {
        r(j, S, D);
        for (let q = 0; q < H.length; q++) xe(H[q], S, D, L);
        r(_.anchor, S, D);
        return;
      }
      if (Y === yi) {
        E(_, S, D);
        return;
      }
      if (L !== 2 && B & 1 && W)
        if (L === 0) W.beforeEnter(j), r(j, S, D), Pt(() => W.enter(j), M);
        else {
          const { leave: q, delayLeave: J, afterLeave: te } = W,
            oe = () => r(j, S, D),
            be = () => {
              q(j, () => {
                oe(), te && te();
              });
            };
          J ? J(j, oe, be) : be();
        }
      else r(j, S, D);
    },
    ve = (_, S, D, L = !1, M = !1) => {
      const {
        type: j,
        props: Y,
        ref: W,
        children: H,
        dynamicChildren: B,
        shapeFlag: ee,
        patchFlag: q,
        dirs: J,
        cacheIndex: te,
      } = _;
      if (
        (q === -2 && (M = !1),
        W != null && $i(W, null, D, _, !0),
        te != null && (S.renderCache[te] = void 0),
        ee & 256)
      ) {
        S.ctx.deactivate(_);
        return;
      }
      const oe = ee & 1 && J,
        be = !es(_);
      let de;
      if ((be && (de = Y && Y.onVnodeBeforeUnmount) && rn(de, S, _), ee & 6))
        Ee(_.component, D, L);
      else {
        if (ee & 128) {
          _.suspense.unmount(D, L);
          return;
        }
        oe && br(_, null, S, "beforeUnmount"),
          ee & 64
            ? _.type.remove(_, S, D, V, L)
            : B && !B.hasOnce && (j !== Ge || (q > 0 && q & 64))
            ? me(B, S, D, !1, !0)
            : ((j === Ge && q & 384) || (!M && ee & 16)) && me(H, S, D),
          L && Q(_);
      }
      ((be && (de = Y && Y.onVnodeUnmounted)) || oe) &&
        Pt(() => {
          de && rn(de, S, _), oe && br(_, null, S, "unmounted");
        }, D);
    },
    Q = (_) => {
      const { type: S, el: D, anchor: L, transition: M } = _;
      if (S === Ge) {
        fe(D, L);
        return;
      }
      if (S === yi) {
        v(_);
        return;
      }
      const j = () => {
        s(D), M && !M.persisted && M.afterLeave && M.afterLeave();
      };
      if (_.shapeFlag & 1 && M && !M.persisted) {
        const { leave: Y, delayLeave: W } = M,
          H = () => Y(D, j);
        W ? W(_.el, j, H) : H();
      } else j();
    },
    fe = (_, S) => {
      let D;
      for (; _ !== S; ) (D = h(_)), s(_), (_ = D);
      s(S);
    },
    Ee = (_, S, D) => {
      const { bum: L, scope: M, job: j, subTree: Y, um: W, m: H, a: B } = _;
      Uf(H),
        Uf(B),
        L && bi(L),
        M.stop(),
        j && ((j.flags |= 8), ve(Y, _, S, D)),
        W && Pt(W, S),
        Pt(() => {
          _.isUnmounted = !0;
        }, S),
        S &&
          S.pendingBranch &&
          !S.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === S.pendingId &&
          (S.deps--, S.deps === 0 && S.resolve());
    },
    me = (_, S, D, L = !1, M = !1, j = 0) => {
      for (let Y = j; Y < _.length; Y++) ve(_[Y], S, D, L, M);
    },
    O = (_) => {
      if (_.shapeFlag & 6) return O(_.component.subTree);
      if (_.shapeFlag & 128) return _.suspense.next();
      const S = h(_.anchor || _.el),
        D = S && S[rg];
      return D ? h(D) : S;
    };
  let z = !1;
  const R = (_, S, D) => {
      _ == null
        ? S._vnode && ve(S._vnode, null, null, !0)
        : g(S._vnode || null, _, S, null, null, null, D),
        (S._vnode = _),
        z || ((z = !0), Pf(), Sp(), (z = !1));
    },
    V = { p: g, um: ve, m: xe, r: Q, mt: F, mc: C, pc: X, pbc: $, n: O, o: e };
  let re, ie;
  return { render: R, hydrate: re, createApp: Ag(R, re) };
}
function cc({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function gr({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Fg(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Zp(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (se(r) && se(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[o] = Gn(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && Zp(i, a)),
        a.type === ha && (a.el = i.el);
    }
}
function Bg(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, a;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (a = (o + i) >> 1), e[n[a]] < u ? (o = a + 1) : (i = a);
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function Jp(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Jp(t);
}
function Uf(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Lg = Symbol.for("v-scx"),
  Rg = () => Bt(Lg);
function Zs(e, t) {
  return bu(e, null, t);
}
function Tr(e, t, n) {
  return bu(e, t, n);
}
function bu(e, t, n = Fe) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = Xe({}, n),
    c = (t && r) || (!t && o !== "post");
  let u;
  if (ho) {
    if (o === "sync") {
      const p = Rg();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {};
      return (p.stop = fn), (p.resume = fn), (p.pause = fn), p;
    }
  }
  const l = nt;
  a.call = (p, m, g) => Yt(p, l, m, g);
  let f = !1;
  o === "post"
    ? (a.scheduler = (p) => {
        Pt(p, l && l.suspense);
      })
    : o !== "sync" &&
      ((f = !0),
      (a.scheduler = (p, m) => {
        m ? p() : du(p);
      })),
    (a.augmentJob = (p) => {
      t && (p.flags |= 4),
        f && ((p.flags |= 2), l && ((p.id = l.uid), (p.i = l)));
    });
  const h = eg(e, t, a);
  return ho && (u ? u.push(h) : c && h()), h;
}
function jg(e, t, n) {
  const r = this.proxy,
    s = qe(e) ? (e.includes(".") ? Qp(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  ue(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = $r(this),
    a = bu(s, o.bind(r), n);
  return i(), a;
}
function Qp(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const Hg = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${Ur(t)}Modifiers`];
function zg(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Fe;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && Hg(r, t.slice(7));
  i &&
    (i.trim && (s = n.map((l) => (qe(l) ? l.trim() : l))),
    i.number && (s = n.map(Pi)));
  let a,
    c = r[(a = tc(t))] || r[(a = tc(Rt(t)))];
  !c && o && (c = r[(a = tc(Ur(t)))]), c && Yt(c, e, 6, s);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Yt(u, e, 6, s);
  }
}
function em(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!ue(e)) {
    const c = (u) => {
      const l = em(u, t, !0);
      l && ((a = !0), Xe(i, l));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !a
    ? (Me(e) && r.set(e, null), null)
    : (se(o) ? o.forEach((c) => (i[c] = null)) : Xe(i, o),
      Me(e) && r.set(e, i),
      i);
}
function da(e, t) {
  return !e || !ta(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Te(e, t[0].toLowerCase() + t.slice(1)) || Te(e, Ur(t)) || Te(e, t));
}
function lc(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: a,
      emit: c,
      render: u,
      renderCache: l,
      props: f,
      data: h,
      setupState: p,
      ctx: m,
      inheritAttrs: g,
    } = e,
    y = Ii(e);
  let k, b;
  try {
    if (n.shapeFlag & 4) {
      const v = s || r,
        w = v;
      (k = qt(u.call(w, v, l, f, p, h, m))), (b = a);
    } else {
      const v = t;
      (k = qt(
        v.length > 1 ? v(f, { attrs: a, slots: i, emit: c }) : v(f, null)
      )),
        (b = t.props ? a : qg(a));
    }
  } catch (v) {
    (Js.length = 0), Ho(v, e, 1), (k = he(ot));
  }
  let E = k;
  if (b && g !== !1) {
    const v = Object.keys(b),
      { shapeFlag: w } = E;
    v.length &&
      w & 7 &&
      (o && v.some(eu) && (b = Gg(b, o)), (E = On(E, b, !1, !0)));
  }
  return (
    n.dirs &&
      ((E = On(E, null, !1, !0)),
      (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && lo(E, n.transition),
    (k = E),
    Ii(y),
    k
  );
}
function Wg(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (sr(s)) {
      if (s.type !== ot || s.children === "v-if") {
        if (n) return;
        n = s;
      }
    } else return;
  }
  return n;
}
const qg = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ta(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Gg = (e, t) => {
    const n = {};
    for (const r in e) (!eu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Vg(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: c } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? Ff(r, i, u) : !!i;
    if (c & 8) {
      const l = t.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        const h = l[f];
        if (i[h] !== r[h] && !da(u, h)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Ff(r, i, u)
        : !0
      : !!i;
  return !1;
}
function Ff(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !da(n, o)) return !0;
  }
  return !1;
}
function gu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const tm = (e) => e.__isSuspense;
let Vc = 0;
const Kg = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, s, o, i, a, c, u) {
      if (e == null) Xg(t, n, r, s, o, i, a, c, u);
      else {
        if (o && o.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        Yg(e, t, n, r, s, i, a, c, u);
      }
    },
    hydrate: Zg,
    normalize: Jg,
  },
  lT = Kg;
function fo(e, t) {
  const n = e.props && e.props[t];
  ue(n) && n();
}
function Xg(e, t, n, r, s, o, i, a, c) {
  const {
      p: u,
      o: { createElement: l },
    } = c,
    f = l("div"),
    h = (e.suspense = nm(e, s, r, t, f, n, o, i, a, c));
  u(null, (h.pendingBranch = e.ssContent), f, null, r, h, o, i),
    h.deps > 0
      ? (fo(e, "onPending"),
        fo(e, "onFallback"),
        u(null, e.ssFallback, t, n, r, null, o, i),
        ts(h, e.ssFallback))
      : h.resolve(!1, !0);
}
function Yg(e, t, n, r, s, o, i, a, { p: c, um: u, o: { createElement: l } }) {
  const f = (t.suspense = e.suspense);
  (f.vnode = t), (t.el = e.el);
  const h = t.ssContent,
    p = t.ssFallback,
    { activeBranch: m, pendingBranch: g, isInFallback: y, isHydrating: k } = f;
  if (g)
    (f.pendingBranch = h),
      an(h, g)
        ? (c(g, h, f.hiddenContainer, null, s, f, o, i, a),
          f.deps <= 0
            ? f.resolve()
            : y && (k || (c(m, p, n, r, s, null, o, i, a), ts(f, p))))
        : ((f.pendingId = Vc++),
          k ? ((f.isHydrating = !1), (f.activeBranch = g)) : u(g, s, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = l("div")),
          y
            ? (c(null, h, f.hiddenContainer, null, s, f, o, i, a),
              f.deps <= 0
                ? f.resolve()
                : (c(m, p, n, r, s, null, o, i, a), ts(f, p)))
            : m && an(h, m)
            ? (c(m, h, n, r, s, f, o, i, a), f.resolve(!0))
            : (c(null, h, f.hiddenContainer, null, s, f, o, i, a),
              f.deps <= 0 && f.resolve()));
  else if (m && an(h, m)) c(m, h, n, r, s, f, o, i, a), ts(f, h);
  else if (
    (fo(t, "onPending"),
    (f.pendingBranch = h),
    h.shapeFlag & 512
      ? (f.pendingId = h.component.suspenseId)
      : (f.pendingId = Vc++),
    c(null, h, f.hiddenContainer, null, s, f, o, i, a),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: b, pendingId: E } = f;
    b > 0
      ? setTimeout(() => {
          f.pendingId === E && f.fallback(p);
        }, b)
      : b === 0 && f.fallback(p);
  }
}
function nm(e, t, n, r, s, o, i, a, c, u, l = !1) {
  const {
    p: f,
    m: h,
    um: p,
    n: m,
    o: { parentNode: g, remove: y },
  } = u;
  let k;
  const b = ey(e);
  b && t && t.pendingBranch && ((k = t.pendingId), t.deps++);
  const E = e.props ? Qh(e.props.timeout) : void 0,
    v = o,
    w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: s,
      deps: 0,
      pendingId: Vc++,
      timeout: typeof E == "number" ? E : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !l,
      isHydrating: l,
      isUnmounted: !1,
      effects: [],
      resolve(x = !1, d = !1) {
        const {
          vnode: C,
          activeBranch: A,
          pendingBranch: $,
          pendingId: I,
          effects: T,
          parentComponent: U,
          container: F,
        } = w;
        let Z = !1;
        w.isHydrating
          ? (w.isHydrating = !1)
          : x ||
            ((Z = A && $.transition && $.transition.mode === "out-in"),
            Z &&
              (A.transition.afterLeave = () => {
                I === w.pendingId && (h($, F, o === v ? m(A) : o, 0), jc(T));
              }),
            A && (g(A.el) === F && (o = m(A)), p(A, U, w, !0)),
            Z || h($, F, o, 0)),
          ts(w, $),
          (w.pendingBranch = null),
          (w.isInFallback = !1);
        let G = w.parent,
          N = !1;
        for (; G; ) {
          if (G.pendingBranch) {
            G.effects.push(...T), (N = !0);
            break;
          }
          G = G.parent;
        }
        !N && !Z && jc(T),
          (w.effects = []),
          b &&
            t &&
            t.pendingBranch &&
            k === t.pendingId &&
            (t.deps--, t.deps === 0 && !d && t.resolve()),
          fo(C, "onResolve");
      },
      fallback(x) {
        if (!w.pendingBranch) return;
        const {
          vnode: d,
          activeBranch: C,
          parentComponent: A,
          container: $,
          namespace: I,
        } = w;
        fo(d, "onFallback");
        const T = m(C),
          U = () => {
            w.isInFallback && (f(null, x, $, T, A, null, I, a, c), ts(w, x));
          },
          F = x.transition && x.transition.mode === "out-in";
        F && (C.transition.afterLeave = U),
          (w.isInFallback = !0),
          p(C, A, null, !0),
          F || U();
      },
      move(x, d, C) {
        w.activeBranch && h(w.activeBranch, x, d, C), (w.container = x);
      },
      next() {
        return w.activeBranch && m(w.activeBranch);
      },
      registerDep(x, d, C) {
        const A = !!w.pendingBranch;
        A && w.deps++;
        const $ = x.vnode.el;
        x.asyncDep
          .catch((I) => {
            Ho(I, x, 0);
          })
          .then((I) => {
            if (x.isUnmounted || w.isUnmounted || w.pendingId !== x.suspenseId)
              return;
            x.asyncResolved = !0;
            const { vnode: T } = x;
            Yc(x, I, !1), $ && (T.el = $);
            const U = !$ && x.subTree.el;
            d(x, T, g($ || x.subTree.el), $ ? null : m(x.subTree), w, i, C),
              U && y(U),
              gu(x, T.el),
              A && --w.deps === 0 && w.resolve();
          });
      },
      unmount(x, d) {
        (w.isUnmounted = !0),
          w.activeBranch && p(w.activeBranch, n, x, d),
          w.pendingBranch && p(w.pendingBranch, n, x, d);
      },
    };
  return w;
}
function Zg(e, t, n, r, s, o, i, a, c) {
  const u = (t.suspense = nm(
      t,
      r,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      s,
      o,
      i,
      a,
      !0
    )),
    l = c(e, (u.pendingBranch = t.ssContent), n, u, o, i);
  return u.deps === 0 && u.resolve(!1, !0), l;
}
function Jg(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = Bf(r ? n.default : n)),
    (e.ssFallback = r ? Bf(n.fallback) : he(ot));
}
function Bf(e) {
  let t;
  if (ue(e)) {
    const n = ls && e._c;
    n && ((e._d = !1), pe()), (e = e()), n && ((e._d = !0), (t = Ct), rm());
  }
  return (
    se(e) && (e = Wg(e)),
    (e = qt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Qg(e, t) {
  t && t.pendingBranch
    ? se(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : jc(e);
}
function ts(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let s = t.el;
  for (; !s && t.component; ) (t = t.component.subTree), (s = t.el);
  (n.el = s), r && r.subTree === n && ((r.vnode.el = s), gu(r, s));
}
function ey(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Ge = Symbol.for("v-fgt"),
  ha = Symbol.for("v-txt"),
  ot = Symbol.for("v-cmt"),
  yi = Symbol.for("v-stc"),
  Js = [];
let Ct = null;
function pe(e = !1) {
  Js.push((Ct = e ? null : []));
}
function rm() {
  Js.pop(), (Ct = Js[Js.length - 1] || null);
}
let ls = 1;
function Lf(e, t = !1) {
  (ls += e), e < 0 && Ct && t && (Ct.hasOnce = !0);
}
function sm(e) {
  return (
    (e.dynamicChildren = ls > 0 ? Ct || Zr : null),
    rm(),
    ls > 0 && Ct && Ct.push(e),
    e
  );
}
function Oe(e, t, n, r, s, o) {
  return sm(ne(e, t, n, r, s, o, !0));
}
function xt(e, t, n, r, s) {
  return sm(he(e, t, n, r, s, !0));
}
function sr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function an(e, t) {
  return e.type === t.type && e.key === t.key;
}
const om = ({ key: e }) => e ?? null,
  wi = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? qe(e) || ze(e) || ue(e)
        ? { i: Ze, r: e, k: t, f: !!n }
        : e
      : null
  );
function ne(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === Ge ? 0 : 1,
  i = !1,
  a = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && om(t),
    ref: t && wi(t),
    scopeId: Pp,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ze,
  };
  return (
    a
      ? (yu(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= qe(n) ? 8 : 16),
    ls > 0 &&
      !i &&
      Ct &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Ct.push(c),
    c
  );
}
const he = ty;
function ty(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Fp) && (e = ot), sr(e))) {
    const a = On(e, t, !0);
    return (
      n && yu(a, n),
      ls > 0 &&
        !o &&
        Ct &&
        (a.shapeFlag & 6 ? (Ct[Ct.indexOf(e)] = a) : Ct.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((fy(e) && (e = e.__vccOpts), t)) {
    t = ny(t);
    let { class: a, style: c } = t;
    a && !qe(a) && (t.class = rr(a)),
      Me(c) && (uu(c) && !se(c) && (c = Xe({}, c)), (t.style = oo(c)));
  }
  const i = qe(e) ? 1 : tm(e) ? 128 : Tp(e) ? 64 : Me(e) ? 4 : ue(e) ? 2 : 0;
  return ne(e, t, n, r, s, i, o, !0);
}
function ny(e) {
  return e ? (uu(e) || Wp(e) ? Xe({}, e) : e) : null;
}
function On(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: c } = e,
    u = t ? Un(s || {}, t) : s,
    l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && om(u),
      ref:
        t && t.ref
          ? n && o
            ? se(o)
              ? o.concat(wi(t))
              : [o, wi(t)]
            : wi(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ge ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && On(e.ssContent),
      ssFallback: e.ssFallback && On(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && r && lo(l, c.clone(l)), l;
}
function ry(e = " ", t = 0) {
  return he(ha, null, e, t);
}
function uT(e, t) {
  const n = he(yi, null, e);
  return (n.staticCount = t), n;
}
function Dr(e = "", t = !1) {
  return t ? (pe(), xt(ot, null, e)) : he(ot, null, e);
}
function qt(e) {
  return e == null || typeof e == "boolean"
    ? he(ot)
    : se(e)
    ? he(Ge, null, e.slice())
    : sr(e)
    ? Gn(e)
    : he(ha, null, String(e));
}
function Gn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : On(e);
}
function yu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (se(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), yu(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Wp(t)
        ? (t._ctx = Ze)
        : s === 3 &&
          Ze &&
          (Ze.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ue(t)
      ? ((t = { default: t, _ctx: Ze }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [ry(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Un(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = rr([t.class, r.class]));
      else if (s === "style") t.style = oo([t.style, r.style]);
      else if (ta(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(se(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function rn(e, t, n, r = null) {
  Yt(e, t, 7, [n, r]);
}
const sy = jp();
let oy = 0;
function iy(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || sy,
    o = {
      uid: oy++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new rp(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Gp(r, s),
      emitsOptions: em(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Fe,
      inheritAttrs: r.inheritAttrs,
      ctx: Fe,
      data: Fe,
      props: Fe,
      attrs: Fe,
      slots: Fe,
      refs: Fe,
      setupState: Fe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = zg.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let nt = null;
const wu = () => nt || Ze;
let Mi, Kc;
{
  const e = oa(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (Mi = t("__VUE_INSTANCE_SETTERS__", (n) => (nt = n))),
    (Kc = t("__VUE_SSR_SETTERS__", (n) => (ho = n)));
}
const $r = (e) => {
    const t = nt;
    return (
      Mi(e),
      e.scope.on(),
      () => {
        e.scope.off(), Mi(t);
      }
    );
  },
  Xc = () => {
    nt && nt.scope.off(), Mi(null);
  };
function im(e) {
  return e.vnode.shapeFlag & 4;
}
let ho = !1;
function ay(e, t = !1, n = !1) {
  t && Kc(t);
  const { props: r, children: s } = e.vnode,
    o = im(e);
  Tg(e, r, o, t), $g(e, s, n);
  const i = o ? cy(e, t) : void 0;
  return t && Kc(!1), i;
}
function cy(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, vg));
  const { setup: r } = n;
  if (r) {
    ur();
    const s = (e.setupContext = r.length > 1 ? cm(e) : null),
      o = $r(e),
      i = jo(r, e, 0, [e.props, s]),
      a = nu(i);
    if ((fr(), o(), (a || e.sp) && !es(e) && Mp(e), a)) {
      if ((i.then(Xc, Xc), t))
        return i
          .then((c) => {
            Yc(e, c, t);
          })
          .catch((c) => {
            Ho(c, e, 0);
          });
      e.asyncDep = i;
    } else Yc(e, i, t);
  } else am(e, t);
}
function Yc(e, t, n) {
  ue(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Me(t) && (e.setupState = Cp(t)),
    am(e, n);
}
let Rf;
function am(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Rf && !r.render) {
      const s = r.template || pu(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: c } = r,
          u = Xe(Xe({ isCustomElement: o, delimiters: a }, i), c);
        r.render = Rf(s, u);
      }
    }
    e.render = r.render || fn;
  }
  {
    const s = $r(e);
    ur();
    try {
      Eg(e);
    } finally {
      fr(), s();
    }
  }
}
const ly = {
  get(e, t) {
    return ut(e, "get", ""), e[t];
  },
};
function cm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ly),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function pa(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Cp(fu(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Ys) return Ys[n](e);
          },
          has(t, n) {
            return n in t || n in Ys;
          },
        }))
    : e.proxy;
}
function uy(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function fy(e) {
  return ue(e) && "__vccOpts" in e;
}
const ge = (e, t) => J1(e, t, ho);
function Zn(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Me(t) && !se(t)
      ? sr(t)
        ? he(e, null, [t])
        : he(e, t)
      : he(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && sr(n) && (n = [n]),
      he(e, t, n));
}
const dy = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Zc;
const jf = typeof window < "u" && window.trustedTypes;
if (jf)
  try {
    Zc = jf.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const lm = Zc ? (e) => Zc.createHTML(e) : (e) => e,
  hy = "http://www.w3.org/2000/svg",
  py = "http://www.w3.org/1998/Math/MathML",
  xn = typeof document < "u" ? document : null,
  Hf = xn && xn.createElement("template"),
  my = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? xn.createElementNS(hy, e)
          : t === "mathml"
          ? xn.createElementNS(py, e)
          : n
          ? xn.createElement(e, { is: n })
          : xn.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => xn.createTextNode(e),
    createComment: (e) => xn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => xn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Hf.innerHTML = lm(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = Hf.content;
        if (r === "svg" || r === "mathml") {
          const c = a.firstChild;
          for (; c.firstChild; ) a.appendChild(c.firstChild);
          a.removeChild(c);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Ln = "transition",
  $s = "animation",
  po = Symbol("_vtc"),
  um = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  by = Xe({}, Dp, um),
  gy = (e) => ((e.displayName = "Transition"), (e.props = by), e),
  yy = gy((e, { slots: t }) => Zn(ig, wy(e), t)),
  yr = (e, t = []) => {
    se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  zf = (e) => (e ? (se(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function wy(e) {
  const t = {};
  for (const T in e) T in um || (t[T] = e[T]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: u = i,
      appearToClass: l = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    m = vy(s),
    g = m && m[0],
    y = m && m[1],
    {
      onBeforeEnter: k,
      onEnter: b,
      onEnterCancelled: E,
      onLeave: v,
      onLeaveCancelled: w,
      onBeforeAppear: x = k,
      onAppear: d = b,
      onAppearCancelled: C = E,
    } = t,
    A = (T, U, F, Z) => {
      (T._enterCancelled = Z), wr(T, U ? l : a), wr(T, U ? u : i), F && F();
    },
    $ = (T, U) => {
      (T._isLeaving = !1), wr(T, f), wr(T, p), wr(T, h), U && U();
    },
    I = (T) => (U, F) => {
      const Z = T ? d : b,
        G = () => A(U, T, F);
      yr(Z, [U, G]),
        Wf(() => {
          wr(U, T ? c : o), wn(U, T ? l : a), zf(Z) || qf(U, r, g, G);
        });
    };
  return Xe(t, {
    onBeforeEnter(T) {
      yr(k, [T]), wn(T, o), wn(T, i);
    },
    onBeforeAppear(T) {
      yr(x, [T]), wn(T, c), wn(T, u);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(T, U) {
      T._isLeaving = !0;
      const F = () => $(T, U);
      wn(T, f),
        T._enterCancelled ? (wn(T, h), Kf()) : (Kf(), wn(T, h)),
        Wf(() => {
          T._isLeaving && (wr(T, f), wn(T, p), zf(v) || qf(T, r, y, F));
        }),
        yr(v, [T, F]);
    },
    onEnterCancelled(T) {
      A(T, !1, void 0, !0), yr(E, [T]);
    },
    onAppearCancelled(T) {
      A(T, !0, void 0, !0), yr(C, [T]);
    },
    onLeaveCancelled(T) {
      $(T), yr(w, [T]);
    },
  });
}
function vy(e) {
  if (e == null) return null;
  if (Me(e)) return [uc(e.enter), uc(e.leave)];
  {
    const t = uc(e);
    return [t, t];
  }
}
function uc(e) {
  return Qh(e);
}
function wn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[po] || (e[po] = new Set())).add(t);
}
function wr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[po];
  n && (n.delete(t), n.size || (e[po] = void 0));
}
function Wf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ey = 0;
function qf(e, t, n, r) {
  const s = (e._endId = ++Ey),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: c } = Cy(e, t);
  if (!i) return r();
  const u = i + "end";
  let l = 0;
  const f = () => {
      e.removeEventListener(u, h), o();
    },
    h = (p) => {
      p.target === e && ++l >= c && f();
    };
  setTimeout(() => {
    l < c && f();
  }, a + 1),
    e.addEventListener(u, h);
}
function Cy(e, t) {
  const n = window.getComputedStyle(e),
    r = (m) => (n[m] || "").split(", "),
    s = r(`${Ln}Delay`),
    o = r(`${Ln}Duration`),
    i = Gf(s, o),
    a = r(`${$s}Delay`),
    c = r(`${$s}Duration`),
    u = Gf(a, c);
  let l = null,
    f = 0,
    h = 0;
  t === Ln
    ? i > 0 && ((l = Ln), (f = i), (h = o.length))
    : t === $s
    ? u > 0 && ((l = $s), (f = u), (h = c.length))
    : ((f = Math.max(i, u)),
      (l = f > 0 ? (i > u ? Ln : $s) : null),
      (h = l ? (l === Ln ? o.length : c.length) : 0));
  const p =
    l === Ln && /\b(transform|all)(,|$)/.test(r(`${Ln}Property`).toString());
  return { type: l, timeout: f, propCount: h, hasTransform: p };
}
function Gf(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Vf(n) + Vf(e[r])));
}
function Vf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Kf() {
  return document.body.offsetHeight;
}
function xy(e, t, n) {
  const r = e[po];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Xf = Symbol("_vod"),
  _y = Symbol("_vsh"),
  ky = Symbol(""),
  Sy = /(^|;)\s*display\s*:/;
function Ay(e, t, n) {
  const r = e.style,
    s = qe(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (qe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && vi(r, a, "");
        }
      else for (const i in t) n[i] == null && vi(r, i, "");
    for (const i in n) i === "display" && (o = !0), vi(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[ky];
      i && (n += ";" + i), (r.cssText = n), (o = Sy.test(n));
    }
  } else t && e.removeAttribute("style");
  Xf in e && ((e[Xf] = o ? r.display : ""), e[_y] && (r.display = "none"));
}
const Yf = /\s*!important$/;
function vi(e, t, n) {
  if (se(n)) n.forEach((r) => vi(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Py(e, t);
    Yf.test(n)
      ? e.setProperty(Ur(r), n.replace(Yf, ""), "important")
      : (e[r] = n);
  }
}
const Zf = ["Webkit", "Moz", "ms"],
  fc = {};
function Py(e, t) {
  const n = fc[t];
  if (n) return n;
  let r = Rt(t);
  if (r !== "filter" && r in e) return (fc[t] = r);
  r = sa(r);
  for (let s = 0; s < Zf.length; s++) {
    const o = Zf[s] + r;
    if (o in e) return (fc[t] = o);
  }
  return t;
}
const Jf = "http://www.w3.org/1999/xlink";
function Qf(e, t, n, r, s, o = v1(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Jf, t.slice(6, t.length))
      : e.setAttributeNS(Jf, t, n)
    : n == null || (o && !ep(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : Xt(n) ? String(n) : n);
}
function ed(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lm(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (a !== c || !("_value" in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = ep(n))
      : n == null && a === "string"
      ? ((n = ""), (i = !0))
      : a === "number" && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function kr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ty(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const td = Symbol("_vei");
function Dy(e, t, n, r, s = null) {
  const o = e[td] || (e[td] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, c] = Oy(t);
    if (r) {
      const u = (o[t] = Ny(r, s));
      kr(e, a, u, c);
    } else i && (Ty(e, a, i, c), (o[t] = void 0));
  }
}
const nd = /(?:Once|Passive|Capture)$/;
function Oy(e) {
  let t;
  if (nd.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(nd)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Ur(e.slice(2)), t];
}
let dc = 0;
const Iy = Promise.resolve(),
  $y = () => dc || (Iy.then(() => (dc = 0)), (dc = Date.now()));
function Ny(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Yt(My(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = $y()), n;
}
function My(e, t) {
  if (se(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const rd = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Uy = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class"
      ? xy(e, r, i)
      : t === "style"
      ? Ay(e, n, r)
      : ta(t)
      ? eu(t) || Dy(e, t, n, r, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Fy(e, t, r, i)
        )
      ? (ed(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Qf(e, t, r, i, o, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !qe(r))
      ? ed(e, Rt(t), r, o, t)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Qf(e, t, r, i));
  };
function Fy(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && rd(t) && ue(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return rd(t) && qe(n) ? !1 : t in e;
}
const Ui = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return se(t) ? (n) => bi(t, n) : t;
};
function By(e) {
  e.target.composing = !0;
}
function sd(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign"),
  fT = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[ns] = Ui(s);
      const o = r || (s.props && s.props.type === "number");
      kr(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), o && (a = Pi(a)), e[ns](a);
      }),
        n &&
          kr(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (kr(e, "compositionstart", By),
          kr(e, "compositionend", sd),
          kr(e, "change", sd));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } },
      i
    ) {
      if (((e[ns] = Ui(i)), e.composing)) return;
      const a =
          (o || e.type === "number") && !/^0\d/.test(e.value)
            ? Pi(e.value)
            : e.value,
        c = t ?? "";
      a !== c &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((r && t === n) || (s && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  dT = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = na(t);
      kr(e, "change", () => {
        const o = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? Pi(Fi(i)) : Fi(i)));
        e[ns](e.multiple ? (s ? new Set(o) : o) : o[0]),
          (e._assigning = !0),
          Fr(() => {
            e._assigning = !1;
          });
      }),
        (e[ns] = Ui(r));
    },
    mounted(e, { value: t }) {
      od(e, t);
    },
    beforeUpdate(e, t, n) {
      e[ns] = Ui(n);
    },
    updated(e, { value: t }) {
      e._assigning || od(e, t);
    },
  };
function od(e, t) {
  const n = e.multiple,
    r = se(t);
  if (!(n && !r && !na(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s],
        a = Fi(i);
      if (n)
        if (r) {
          const c = typeof a;
          c === "string" || c === "number"
            ? (i.selected = t.some((u) => String(u) === String(a)))
            : (i.selected = C1(t, a) > -1);
        } else i.selected = t.has(a);
      else if (ia(Fi(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Fi(e) {
  return "_value" in e ? e._value : e.value;
}
const Ly = ["ctrl", "shift", "alt", "meta"],
  Ry = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Ly.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  hT = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const a = Ry[t[i]];
          if (a && a(s, t)) return;
        }
        return e(s, ...o);
      })
    );
  },
  jy = Xe({ patchProp: Uy }, my);
let id;
function fm() {
  return id || (id = Mg(jy));
}
const pT = (...e) => {
    fm().render(...e);
  },
  dm = (...e) => {
    const t = fm().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = zy(r);
        if (!s) return;
        const o = t._component;
        !ue(o) && !o.render && !o.template && (o.template = s.innerHTML),
          s.nodeType === 1 && (s.textContent = "");
        const i = n(s, !1, Hy(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          i
        );
      }),
      t
    );
  };
function Hy(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function zy(e) {
  return qe(e) ? document.querySelector(e) : e;
}
const zo = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  },
  us = { LIGHT: "light", DARK: "dark", COLORED: "colored", AUTO: "auto" },
  vt = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  },
  Wy = {
    BOUNCE: "bounce",
    SLIDE: "slide",
    FLIP: "flip",
    ZOOM: "zoom",
    NONE: "none",
  },
  hm = {
    dangerouslyHTMLString: !1,
    multiple: !0,
    position: zo.TOP_RIGHT,
    autoClose: 5e3,
    transition: "bounce",
    hideProgressBar: !1,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    className: "",
    bodyClassName: "",
    style: {},
    progressClassName: "",
    progressStyle: {},
    role: "alert",
    theme: "light",
  },
  qy = { rtl: !1, newestOnTop: !1, toastClassName: "" },
  pm = { ...hm, ...qy };
({ ...hm, type: vt.DEFAULT });
var De = ((e) => (
    (e[(e.COLLAPSE_DURATION = 300)] = "COLLAPSE_DURATION"),
    (e[(e.DEBOUNCE_DURATION = 50)] = "DEBOUNCE_DURATION"),
    (e.CSS_NAMESPACE = "Toastify"),
    e
  ))(De || {}),
  Jc = ((e) => ((e.ENTRANCE_ANIMATION_END = "d"), e))(Jc || {});
const Gy = {
    enter: "Toastify--animate Toastify__bounce-enter",
    exit: "Toastify--animate Toastify__bounce-exit",
    appendPosition: !0,
  },
  Vy = {
    enter: "Toastify--animate Toastify__slide-enter",
    exit: "Toastify--animate Toastify__slide-exit",
    appendPosition: !0,
  },
  Ky = {
    enter: "Toastify--animate Toastify__zoom-enter",
    exit: "Toastify--animate Toastify__zoom-exit",
  },
  Xy = {
    enter: "Toastify--animate Toastify__flip-enter",
    exit: "Toastify--animate Toastify__flip-exit",
  },
  ad = "Toastify--animate Toastify__none-enter";
function mm(e, t = !1) {
  var n;
  let r = Gy;
  if (!e || typeof e == "string")
    switch (e) {
      case "flip":
        r = Xy;
        break;
      case "zoom":
        r = Ky;
        break;
      case "slide":
        r = Vy;
        break;
    }
  else r = e;
  if (t) r.enter = ad;
  else if (r.enter === ad) {
    const s = (n = r.exit.split("__")[1]) == null ? void 0 : n.split("-")[0];
    r.enter = `Toastify--animate Toastify__${s}-enter`;
  }
  return r;
}
function Yy(e) {
  return e.containerId || String(e.position);
}
const ma = "will-unmount";
function Zy(e = zo.TOP_RIGHT) {
  return !!document.querySelector(
    `.${De.CSS_NAMESPACE}__toast-container--${e}`
  );
}
function Jy(e = zo.TOP_RIGHT) {
  return `${De.CSS_NAMESPACE}__toast-container--${e}`;
}
function Qy(e, t, n = !1) {
  const r = [
    `${De.CSS_NAMESPACE}__toast-container`,
    `${De.CSS_NAMESPACE}__toast-container--${e}`,
    n ? `${De.CSS_NAMESPACE}__toast-container--rtl` : null,
  ]
    .filter(Boolean)
    .join(" ");
  return rs(t)
    ? t({ position: e, rtl: n, defaultClassName: r })
    : `${r} ${t || ""}`;
}
function ew(e) {
  var t;
  const { position: n, containerClassName: r, rtl: s = !1, style: o = {} } = e,
    i = De.CSS_NAMESPACE,
    a = Jy(n),
    c = document.querySelector(`.${i}`),
    u = document.querySelector(`.${a}`),
    l = !!u && !((t = u.className) != null && t.includes(ma)),
    f = c || document.createElement("div"),
    h = document.createElement("div");
  (h.className = Qy(n, r, s)),
    (h.dataset.testid = `${De.CSS_NAMESPACE}__toast-container--${n}`),
    (h.id = Yy(e));
  for (const p in o)
    if (Object.prototype.hasOwnProperty.call(o, p)) {
      const m = o[p];
      h.style[p] = m;
    }
  return (
    c || ((f.className = De.CSS_NAMESPACE), document.body.appendChild(f)),
    l || f.appendChild(h),
    h
  );
}
function Qc(e) {
  var t, n, r;
  const s =
      typeof e == "string"
        ? e
        : ((t = e.currentTarget) == null ? void 0 : t.id) ||
          ((n = e.target) == null ? void 0 : n.id),
    o = document.getElementById(s);
  o && o.removeEventListener("animationend", Qc, !1);
  try {
    mo[s].unmount(),
      (r = document.getElementById(s)) == null || r.remove(),
      delete mo[s],
      delete rt[s];
  } catch {}
}
const mo = pt({});
function tw(e, t) {
  const n = document.getElementById(String(t));
  n && (mo[n.id] = e);
}
function el(e, t = !0) {
  const n = String(e);
  if (!mo[n]) return;
  const r = document.getElementById(n);
  r && r.classList.add(ma),
    t ? (rw(e), r && r.addEventListener("animationend", Qc, !1)) : Qc(n),
    (hn.items = hn.items.filter((s) => s.containerId !== e));
}
function nw(e) {
  for (const t in mo) el(t, e);
  hn.items = [];
}
function bm(e, t) {
  const n = document.getElementById(e.toastId);
  if (n) {
    let r = e;
    r = { ...r, ...mm(r.transition) };
    const s = r.appendPosition ? `${r.exit}--${r.position}` : r.exit;
    (n.className += ` ${s}`), t && t(n);
  }
}
function rw(e) {
  for (const t in rt) if (t === e) for (const n of rt[t] || []) bm(n);
}
function sw(e) {
  const t = fs().find((n) => n.toastId === e);
  return t == null ? void 0 : t.containerId;
}
function vu(e) {
  return document.getElementById(e);
}
function ow(e) {
  const t = vu(e.containerId);
  return t && t.classList.contains(ma);
}
function cd(e) {
  var t;
  const n = sr(e.content) ? ce(e.content.props) : null;
  return n ?? ce((t = e.data) != null ? t : {});
}
function iw(e) {
  return e
    ? hn.items.filter((t) => t.containerId === e).length > 0
    : hn.items.length > 0;
}
function aw() {
  if (hn.items.length > 0) {
    const e = hn.items.shift();
    Ei(e == null ? void 0 : e.toastContent, e == null ? void 0 : e.toastProps);
  }
}
const rt = pt({}),
  hn = pt({ items: [] });
function fs() {
  const e = ce(rt);
  return Object.values(e).reduce((t, n) => [...t, ...n], []);
}
function cw(e) {
  return fs().find((t) => t.toastId === e);
}
function Ei(e, t = {}) {
  if (ow(t)) {
    const n = vu(t.containerId);
    n && n.addEventListener("animationend", tl.bind(null, e, t), !1);
  } else tl(e, t);
}
function tl(e, t = {}) {
  const n = vu(t.containerId);
  n && n.removeEventListener("animationend", tl.bind(null, e, t), !1);
  const r = rt[t.containerId] || [],
    s = r.length > 0;
  if (!s && !Zy(t.position)) {
    const o = ew(t),
      i = dm(Aw, t);
    i.mount(o), tw(i, o.id);
  }
  s && !t.updateId && (t.position = r[0].position),
    Fr(() => {
      t.updateId ? Tt.update(t) : Tt.add(e, t);
    });
}
const Tt = {
    add(e, t) {
      const { containerId: n = "" } = t;
      n &&
        ((rt[n] = rt[n] || []),
        rt[n].find((r) => r.toastId === t.toastId) ||
          setTimeout(() => {
            var r, s;
            t.newestOnTop
              ? (r = rt[n]) == null || r.unshift(t)
              : (s = rt[n]) == null || s.push(t),
              t.onOpen && t.onOpen(cd(t));
          }, t.delay || 0));
    },
    remove(e) {
      if (e) {
        const t = sw(e);
        if (t) {
          const n = rt[t];
          let r = n.find((s) => s.toastId === e);
          (rt[t] = n.filter((s) => s.toastId !== e)),
            !rt[t].length && !iw(t) && el(t, !1),
            aw(),
            Fr(() => {
              r != null && r.onClose && (r.onClose(cd(r)), (r = void 0));
            });
        }
      }
    },
    update(e = {}) {
      const { containerId: t = "" } = e;
      if (t && e.updateId) {
        rt[t] = rt[t] || [];
        const n = rt[t].find((o) => o.toastId === e.toastId),
          r =
            (n == null ? void 0 : n.position) !== e.position ||
            (n == null ? void 0 : n.transition) !== e.transition,
          s = { ...e, disabledEnterTransition: !r, updateId: void 0 };
        Tt.dismissForce(e == null ? void 0 : e.toastId),
          setTimeout(() => {
            Be(s.content, s);
          }, e.delay || 0);
      }
    },
    clear(e, t = !0) {
      e ? el(e, t) : nw(t);
    },
    dismissCallback(e) {
      var t;
      const n = (t = e.currentTarget) == null ? void 0 : t.id,
        r = document.getElementById(n);
      r &&
        (r.removeEventListener("animationend", Tt.dismissCallback, !1),
        setTimeout(() => {
          Tt.remove(n);
        }));
    },
    dismiss(e) {
      if (e) {
        const t = fs();
        for (const n of t)
          if (n.toastId === e) {
            bm(n, (r) => {
              r.addEventListener("animationend", Tt.dismissCallback, !1);
            });
            break;
          }
      }
    },
    dismissForce(e) {
      if (e) {
        const t = fs();
        for (const n of t)
          if (n.toastId === e) {
            const r = document.getElementById(e);
            r &&
              (r.remove(),
              r.removeEventListener("animationend", Tt.dismissCallback, !1),
              Tt.remove(e));
            break;
          }
      }
    },
  },
  gm = pt({}),
  Bi = pt({});
function ym() {
  return Math.random().toString(36).substring(2, 9);
}
function lw(e) {
  return typeof e == "number" && !isNaN(e);
}
function nl(e) {
  return typeof e == "string";
}
function rs(e) {
  return typeof e == "function";
}
function ba(...e) {
  return Un(...e);
}
function Ci(e) {
  return (
    typeof e == "object" &&
    (!!(e != null && e.render) ||
      !!(e != null && e.setup) ||
      typeof (e == null ? void 0 : e.type) == "object")
  );
}
function uw(e = {}) {
  gm[`${De.CSS_NAMESPACE}-default-options`] = e;
}
function fw() {
  return gm[`${De.CSS_NAMESPACE}-default-options`] || pm;
}
function dw() {
  const e =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return document.documentElement.classList.contains("dark") || e
    ? "dark"
    : "light";
}
var xi = ((e) => ((e[(e.Enter = 0)] = "Enter"), (e[(e.Exit = 1)] = "Exit"), e))(
  xi || {}
);
const wm = {
    containerId: { type: [String, Number], required: !1, default: "" },
    clearOnUrlChange: { type: Boolean, required: !1, default: !0 },
    disabledEnterTransition: { type: Boolean, required: !1, default: !1 },
    dangerouslyHTMLString: { type: Boolean, required: !1, default: !1 },
    multiple: { type: Boolean, required: !1, default: !0 },
    limit: { type: Number, required: !1, default: void 0 },
    position: { type: String, required: !1, default: zo.TOP_LEFT },
    bodyClassName: { type: String, required: !1, default: "" },
    autoClose: { type: [Number, Boolean], required: !1, default: !1 },
    closeButton: {
      type: [Boolean, Function, Object],
      required: !1,
      default: void 0,
    },
    transition: { type: [String, Object], required: !1, default: "bounce" },
    hideProgressBar: { type: Boolean, required: !1, default: !1 },
    pauseOnHover: { type: Boolean, required: !1, default: !0 },
    pauseOnFocusLoss: { type: Boolean, required: !1, default: !0 },
    closeOnClick: { type: Boolean, required: !1, default: !0 },
    progress: { type: Number, required: !1, default: void 0 },
    progressClassName: { type: String, required: !1, default: "" },
    toastStyle: {
      type: Object,
      required: !1,
      default() {
        return {};
      },
    },
    progressStyle: {
      type: Object,
      required: !1,
      default() {
        return {};
      },
    },
    role: { type: String, required: !1, default: "alert" },
    theme: { type: String, required: !1, default: us.AUTO },
    content: { type: [String, Object, Function], required: !1, default: "" },
    toastId: { type: [String, Number], required: !1, default: "" },
    data: {
      type: [Object, String],
      required: !1,
      default() {
        return {};
      },
    },
    type: { type: String, required: !1, default: vt.DEFAULT },
    icon: {
      type: [Boolean, String, Number, Object, Function],
      required: !1,
      default: void 0,
    },
    delay: { type: Number, required: !1, default: void 0 },
    onOpen: { type: Function, required: !1, default: void 0 },
    onClose: { type: Function, required: !1, default: void 0 },
    onClick: { type: Function, required: !1, default: void 0 },
    isLoading: { type: Boolean, required: !1, default: void 0 },
    rtl: { type: Boolean, required: !1, default: !1 },
    toastClassName: { type: String, required: !1, default: "" },
    updateId: { type: [String, Number], required: !1, default: "" },
    contentProps: { type: Object, required: !1, default: null },
  },
  hw = {
    autoClose: { type: [Number, Boolean], required: !0 },
    isRunning: { type: Boolean, required: !1, default: void 0 },
    type: { type: String, required: !1, default: vt.DEFAULT },
    theme: { type: String, required: !1, default: us.AUTO },
    hide: { type: Boolean, required: !1, default: void 0 },
    className: { type: [String, Function], required: !1, default: "" },
    controlledProgress: { type: Boolean, required: !1, default: void 0 },
    rtl: { type: Boolean, required: !1, default: void 0 },
    isIn: { type: Boolean, required: !1, default: void 0 },
    progress: { type: Number, required: !1, default: void 0 },
    closeToast: { type: Function, required: !1, default: void 0 },
  },
  pw = gs({
    name: "ProgressBar",
    props: hw,
    setup(e, { attrs: t }) {
      const n = dt(),
        r = ge(() => (e.hide ? "true" : "false")),
        s = ge(() => ({
          ...(t.style || {}),
          animationDuration: `${e.autoClose === !0 ? 5e3 : e.autoClose}ms`,
          animationPlayState: e.isRunning ? "running" : "paused",
          opacity: e.hide || e.autoClose === !1 ? 0 : 1,
          transform: e.controlledProgress ? `scaleX(${e.progress})` : "none",
        })),
        o = ge(() =>
          [
            `${De.CSS_NAMESPACE}__progress-bar`,
            e.controlledProgress
              ? `${De.CSS_NAMESPACE}__progress-bar--controlled`
              : `${De.CSS_NAMESPACE}__progress-bar--animated`,
            `${De.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,
            `${De.CSS_NAMESPACE}__progress-bar--${e.type}`,
            e.rtl ? `${De.CSS_NAMESPACE}__progress-bar--rtl` : null,
          ]
            .filter(Boolean)
            .join(" ")
        ),
        i = ge(() => `${o.value} ${(t == null ? void 0 : t.class) || ""}`),
        a = () => {
          n.value &&
            ((n.value.onanimationend = null), (n.value.ontransitionend = null));
        },
        c = () => {
          e.isIn && e.closeToast && e.autoClose !== !1 && (e.closeToast(), a());
        },
        u = ge(() => (e.controlledProgress ? null : c)),
        l = ge(() => (e.controlledProgress ? c : null));
      return (
        Zs(() => {
          n.value &&
            (a(),
            (n.value.onanimationend = u.value),
            (n.value.ontransitionend = l.value));
        }),
        () =>
          he(
            "div",
            {
              ref: n,
              role: "progressbar",
              "aria-hidden": r.value,
              "aria-label": "notification timer",
              class: i.value,
              style: s.value,
            },
            null
          )
      );
    },
  }),
  mw = gs({
    name: "CloseButton",
    inheritAttrs: !1,
    props: {
      theme: { type: String, required: !1, default: us.AUTO },
      type: { type: String, required: !1, default: us.LIGHT },
      ariaLabel: { type: String, required: !1, default: "close" },
      closeToast: { type: Function, required: !1, default: void 0 },
    },
    setup(e) {
      return () =>
        he(
          "button",
          {
            class: `${De.CSS_NAMESPACE}__close-button ${De.CSS_NAMESPACE}__close-button--${e.theme}`,
            type: "button",
            onClick: (t) => {
              t.stopPropagation(), e.closeToast && e.closeToast(t);
            },
            "aria-label": e.ariaLabel,
          },
          [
            he("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, [
              he(
                "path",
                {
                  "fill-rule": "evenodd",
                  d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                },
                null
              ),
            ]),
          ]
        );
    },
  }),
  ga = ({ theme: e, type: t, path: n, ...r }) =>
    he(
      "svg",
      Un(
        {
          viewBox: "0 0 24 24",
          width: "100%",
          height: "100%",
          fill:
            e === "colored"
              ? "currentColor"
              : `var(--toastify-icon-color-${t})`,
        },
        r
      ),
      [he("path", { d: n }, null)]
    );
function bw(e) {
  return he(
    ga,
    Un(e, {
      path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    }),
    null
  );
}
function gw(e) {
  return he(
    ga,
    Un(e, {
      path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    }),
    null
  );
}
function yw(e) {
  return he(
    ga,
    Un(e, {
      path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    }),
    null
  );
}
function ww(e) {
  return he(
    ga,
    Un(e, {
      path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    }),
    null
  );
}
function vw() {
  return he("div", { class: `${De.CSS_NAMESPACE}__spinner` }, null);
}
const rl = { info: gw, warning: bw, success: yw, error: ww, spinner: vw },
  Ew = (e) => e in rl;
function Cw({ theme: e, type: t, isLoading: n, icon: r }) {
  let s;
  const o = { theme: e, type: t };
  return (
    n
      ? (s = rl.spinner())
      : r === !1
      ? (s = void 0)
      : Ci(r)
      ? (s = ce(r))
      : rs(r)
      ? (s = r(o))
      : sr(r)
      ? (s = On(r, o))
      : nl(r) || lw(r)
      ? (s = r)
      : Ew(t) && (s = rl[t](o)),
    s
  );
}
const xw = () => {};
function _w(e, t, n = De.COLLAPSE_DURATION) {
  const { scrollHeight: r, style: s } = e,
    o = n;
  requestAnimationFrame(() => {
    (s.minHeight = "initial"),
      (s.height = r + "px"),
      (s.transition = `all ${o}ms`),
      requestAnimationFrame(() => {
        (s.height = "0"), (s.padding = "0"), (s.margin = "0"), setTimeout(t, o);
      });
  });
}
function kw(e) {
  const t = dt(!1),
    n = dt(!1),
    r = dt(!1),
    s = dt(xi.Enter),
    o = pt({
      ...e,
      appendPosition: e.appendPosition || !1,
      collapse: typeof e.collapse > "u" ? !0 : e.collapse,
      collapseDuration: e.collapseDuration || De.COLLAPSE_DURATION,
    }),
    i = o.done || xw,
    a = ge(() => (o.appendPosition ? `${o.enter}--${o.position}` : o.enter)),
    c = ge(() => (o.appendPosition ? `${o.exit}--${o.position}` : o.exit)),
    u = ge(() => (e.pauseOnHover ? { onMouseenter: y, onMouseleave: g } : {}));
  function l() {
    const b = a.value.split(" ");
    h().addEventListener(Jc.ENTRANCE_ANIMATION_END, g, { once: !0 });
    const E = (w) => {
        const x = h();
        w.target === x &&
          (x.dispatchEvent(new Event(Jc.ENTRANCE_ANIMATION_END)),
          x.removeEventListener("animationend", E),
          x.removeEventListener("animationcancel", E),
          s.value === xi.Enter &&
            w.type !== "animationcancel" &&
            x.classList.remove(...b));
      },
      v = () => {
        const w = h();
        w.classList.add(...b),
          w.addEventListener("animationend", E),
          w.addEventListener("animationcancel", E);
      };
    e.pauseOnFocusLoss && p(), v();
  }
  function f() {
    if (!h()) return;
    const b = () => {
        const v = h();
        v.removeEventListener("animationend", b),
          o.collapse ? _w(v, i, o.collapseDuration) : i();
      },
      E = () => {
        const v = h();
        (s.value = xi.Exit),
          v &&
            ((v.className += ` ${c.value}`),
            v.addEventListener("animationend", b));
      };
    n.value || (r.value ? b() : setTimeout(E));
  }
  function h() {
    return e.toastRef.value;
  }
  function p() {
    document.hasFocus() || y(),
      window.addEventListener("focus", g),
      window.addEventListener("blur", y);
  }
  function m() {
    window.removeEventListener("focus", g),
      window.removeEventListener("blur", y);
  }
  function g() {
    (!e.loading.value || e.isLoading === void 0) && (t.value = !0);
  }
  function y() {
    t.value = !1;
  }
  function k(b) {
    b && (b.stopPropagation(), b.preventDefault()), (n.value = !1);
  }
  return (
    Zs(f),
    Zs(() => {
      const b = fs();
      n.value = b.findIndex((E) => E.toastId === o.toastId) > -1;
    }),
    Zs(() => {
      e.isLoading !== void 0 && (e.loading.value ? y() : g());
    }),
    ys(l),
    fa(() => {
      e.pauseOnFocusLoss && m();
    }),
    { isIn: n, isRunning: t, hideToast: k, eventHandlers: u }
  );
}
const Sw = gs({
  name: "ToastItem",
  inheritAttrs: !1,
  props: wm,
  setup(e) {
    const t = dt(),
      n = ge(() => !!e.isLoading),
      r = ge(() => e.progress !== void 0 && e.progress !== null),
      s = ge(() => Cw(e)),
      o = ge(() =>
        [
          `${De.CSS_NAMESPACE}__toast`,
          `${De.CSS_NAMESPACE}__toast-theme--${e.theme}`,
          `${De.CSS_NAMESPACE}__toast--${e.type}`,
          e.rtl ? `${De.CSS_NAMESPACE}__toast--rtl` : void 0,
          e.toastClassName || "",
        ]
          .filter(Boolean)
          .join(" ")
      ),
      {
        isRunning: i,
        isIn: a,
        hideToast: c,
        eventHandlers: u,
      } = kw({
        toastRef: t,
        loading: n,
        done: () => {
          Tt.remove(e.toastId);
        },
        ...mm(e.transition, e.disabledEnterTransition),
        ...e,
      });
    return () =>
      he(
        "div",
        Un(
          {
            id: e.toastId,
            class: o.value,
            style: e.toastStyle || {},
            ref: t,
            "data-testid": `toast-item-${e.toastId}`,
            onClick: (l) => {
              e.closeOnClick && c(), e.onClick && e.onClick(l);
            },
          },
          u.value
        ),
        [
          he(
            "div",
            {
              role: e.role,
              "data-testid": "toast-body",
              class: `${De.CSS_NAMESPACE}__toast-body ${e.bodyClassName || ""}`,
            },
            [
              s.value != null &&
                he(
                  "div",
                  {
                    "data-testid": `toast-icon-${e.type}`,
                    class: [
                      `${De.CSS_NAMESPACE}__toast-icon`,
                      e.isLoading
                        ? ""
                        : `${De.CSS_NAMESPACE}--animate-icon ${De.CSS_NAMESPACE}__zoom-enter`,
                    ].join(" "),
                  },
                  [
                    Ci(s.value)
                      ? Zn(ce(s.value), { theme: e.theme, type: e.type })
                      : rs(s.value)
                      ? s.value({ theme: e.theme, type: e.type })
                      : s.value,
                  ]
                ),
              e.contentProps
                ? he("div", { "data-testid": "toast-content" }, [
                    Zn(ce(e.content), { contentProps: e.contentProps }),
                  ])
                : he("div", { "data-testid": "toast-content" }, [
                    Ci(e.content)
                      ? Zn(ce(e.content), {
                          toastProps: ce(e),
                          closeToast: c,
                          data: e.data,
                        })
                      : rs(e.content)
                      ? e.content({
                          toastProps: ce(e),
                          closeToast: c,
                          data: e.data,
                        })
                      : e.dangerouslyHTMLString
                      ? Zn("div", { innerHTML: e.content })
                      : e.content,
                  ]),
            ]
          ),
          (e.closeButton === void 0 || e.closeButton === !0) &&
            he(
              mw,
              {
                theme: e.theme,
                closeToast: (l) => {
                  l.stopPropagation(), l.preventDefault(), c();
                },
              },
              null
            ),
          Ci(e.closeButton)
            ? Zn(ce(e.closeButton), {
                closeToast: c,
                type: e.type,
                theme: e.theme,
              })
            : rs(e.closeButton)
            ? e.closeButton({ closeToast: c, type: e.type, theme: e.theme })
            : null,
          he(
            pw,
            {
              className: e.progressClassName,
              style: e.progressStyle,
              rtl: e.rtl,
              theme: e.theme,
              isIn: a.value,
              type: e.type,
              hide: e.hideProgressBar,
              isRunning: i.value,
              autoClose: e.autoClose,
              controlledProgress: r.value,
              progress: e.progress,
              closeToast: e.isLoading ? void 0 : c,
            },
            null
          ),
        ]
      );
  },
});
let Qs = 0;
function vm() {
  typeof window > "u" ||
    (Qs && window.cancelAnimationFrame(Qs),
    (Qs = window.requestAnimationFrame(vm)),
    Bi.lastUrl !== window.location.href &&
      ((Bi.lastUrl = window.location.href), Tt.clear()));
}
const Aw = gs({
  name: "ToastifyContainer",
  inheritAttrs: !1,
  props: wm,
  setup(e) {
    const t = ge(() => e.containerId),
      n = ge(() => rt[t.value] || []),
      r = ge(() => n.value.filter((s) => s.position === e.position));
    return (
      ys(() => {
        typeof window < "u" &&
          e.clearOnUrlChange &&
          window.requestAnimationFrame(vm);
      }),
      fa(() => {
        typeof window < "u" &&
          Qs &&
          (window.cancelAnimationFrame(Qs), (Bi.lastUrl = ""));
      }),
      () =>
        he(Ge, null, [
          r.value.map((s) => {
            const { toastId: o = "" } = s;
            return he(Sw, Un({ key: o }, s), null);
          }),
        ])
    );
  },
});
let hc = !1;
function Em() {
  const e = [];
  return (
    fs().forEach((t) => {
      const n = document.getElementById(t.containerId);
      n && !n.classList.contains(ma) && e.push(t);
    }),
    e
  );
}
function Pw(e) {
  const t = Em().length,
    n = e ?? 0;
  return n > 0 && t + hn.items.length >= n;
}
function Tw(e) {
  Pw(e.limit) &&
    !e.updateId &&
    hn.items.push({
      toastId: e.toastId,
      containerId: e.containerId,
      toastContent: e.content,
      toastProps: e,
    });
}
function dr(e, t, n = {}) {
  if (hc) return;
  (n = ba(fw(), { type: t }, ce(n))),
    (!n.toastId ||
      (typeof n.toastId != "string" && typeof n.toastId != "number")) &&
      (n.toastId = ym()),
    (n = {
      ...n,
      content: e,
      containerId: n.containerId || String(n.position),
    });
  const r = Number(n == null ? void 0 : n.progress);
  return (
    r < 0 && (n.progress = 0),
    r > 1 && (n.progress = 1),
    n.theme === "auto" && (n.theme = dw()),
    Tw(n),
    (Bi.lastUrl = window.location.href),
    n.multiple
      ? hn.items.length
        ? n.updateId && Ei(e, n)
        : Ei(e, n)
      : ((hc = !0),
        Be.clearAll(void 0, !1),
        setTimeout(() => {
          Ei(e, n);
        }, 0),
        setTimeout(() => {
          hc = !1;
        }, 390)),
    n.toastId
  );
}
const Be = (e, t) => dr(e, vt.DEFAULT, t);
Be.info = (e, t) => dr(e, vt.DEFAULT, { ...t, type: vt.INFO });
Be.error = (e, t) => dr(e, vt.DEFAULT, { ...t, type: vt.ERROR });
Be.warning = (e, t) => dr(e, vt.DEFAULT, { ...t, type: vt.WARNING });
Be.warn = Be.warning;
Be.success = (e, t) => dr(e, vt.DEFAULT, { ...t, type: vt.SUCCESS });
Be.loading = (e, t) =>
  dr(
    e,
    vt.DEFAULT,
    ba(t, {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
    })
  );
Be.dark = (e, t) => dr(e, vt.DEFAULT, ba(t, { theme: us.DARK }));
Be.remove = (e) => {
  e ? Tt.dismiss(e) : Tt.clear();
};
Be.clearAll = (e, t) => {
  Fr(() => {
    Tt.clear(e, t);
  });
};
Be.isActive = (e) => {
  let t = !1;
  return (t = Em().findIndex((n) => n.toastId === e) > -1), t;
};
Be.update = (e, t = {}) => {
  setTimeout(() => {
    const n = cw(e);
    if (n) {
      const r = ce(n),
        { content: s } = r,
        o = { ...r, ...t, toastId: t.toastId || e, updateId: ym() },
        i = o.render || s;
      delete o.render, dr(i, o.type, o);
    }
  }, 0);
};
Be.done = (e) => {
  Be.update(e, { isLoading: !1, progress: 1 });
};
Be.promise = Dw;
function Dw(e, { pending: t, error: n, success: r }, s) {
  var o, i, a;
  let c;
  const u = { ...(s || {}), autoClose: !1 };
  t && (c = nl(t) ? Be.loading(t, u) : Be.loading(t.render, { ...u, ...t }));
  const l = {
      autoClose: (o = s == null ? void 0 : s.autoClose) != null ? o : !0,
      closeOnClick: (i = s == null ? void 0 : s.closeOnClick) != null ? i : !0,
      closeButton: (a = s == null ? void 0 : s.autoClose) != null ? a : null,
      isLoading: void 0,
      draggable: null,
      delay: 100,
    },
    f = (p, m, g) => {
      if (m == null) {
        Be.remove(c);
        return;
      }
      const y = { type: p, ...l, ...s, data: g },
        k = nl(m) ? { render: m } : m;
      return (
        c
          ? Be.update(c, { ...y, ...k, isLoading: !1 })
          : Be(k.render, { ...y, ...k, isLoading: !1 }),
        g
      );
    },
    h = rs(e) ? e() : e;
  return (
    h
      .then((p) => {
        f("success", r, p);
      })
      .catch((p) => {
        f("error", n, p);
      }),
    h
  );
}
Be.POSITION = zo;
Be.THEME = us;
Be.TYPE = vt;
Be.TRANSITIONS = Wy;
const Cm = {
  install(e, t = {}) {
    Ow(t);
  },
};
typeof window < "u" && (window.Vue3Toastify = Cm);
function Ow(e = {}) {
  const t = ba(pm, e);
  uw(t);
}
var Iw = !1;
/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ let xm;
const ya = (e) => (xm = e),
  _m = Symbol();
function sl(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var eo;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(eo || (eo = {}));
function $w() {
  const e = sp(!0),
    t = e.run(() => dt({}));
  let n = [],
    r = [];
  const s = fu({
    install(o) {
      ya(s),
        (s._a = o),
        o.provide(_m, s),
        (o.config.globalProperties.$pinia = s),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(o) {
      return !this._a && !Iw ? r.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const km = () => {};
function ld(e, t, n, r = km) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && op() && x1(s), s;
}
function Rr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Nw = (e) => e(),
  ud = Symbol(),
  pc = Symbol();
function ol(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, r) => e.set(r, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    sl(s) && sl(r) && e.hasOwnProperty(n) && !ze(r) && !Pn(r)
      ? (e[n] = ol(s, r))
      : (e[n] = r);
  }
  return e;
}
const Mw = Symbol();
function Uw(e) {
  return !sl(e) || !e.hasOwnProperty(Mw);
}
const { assign: Hn } = Object;
function Fw(e) {
  return !!(ze(e) && e.effect);
}
function Bw(e, t, n, r) {
  const { state: s, actions: o, getters: i } = t,
    a = n.state.value[e];
  let c;
  function u() {
    a || (n.state.value[e] = s ? s() : {});
    const l = V1(n.state.value[e]);
    return Hn(
      l,
      o,
      Object.keys(i || {}).reduce(
        (f, h) => (
          (f[h] = fu(
            ge(() => {
              ya(n);
              const p = n._s.get(e);
              return i[h].call(p, p);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (c = Sm(e, u, t, n, r, !0)), c;
}
function Sm(e, t, n = {}, r, s, o) {
  let i;
  const a = Hn({ actions: {} }, n),
    c = { deep: !0 };
  let u,
    l,
    f = [],
    h = [],
    p;
  const m = r.state.value[e];
  !o && !m && (r.state.value[e] = {}), dt({});
  let g;
  function y(C) {
    let A;
    (u = l = !1),
      typeof C == "function"
        ? (C(r.state.value[e]),
          (A = { type: eo.patchFunction, storeId: e, events: p }))
        : (ol(r.state.value[e], C),
          (A = { type: eo.patchObject, payload: C, storeId: e, events: p }));
    const $ = (g = Symbol());
    Fr().then(() => {
      g === $ && (u = !0);
    }),
      (l = !0),
      Rr(f, A, r.state.value[e]);
  }
  const k = o
    ? function () {
        const { state: A } = n,
          $ = A ? A() : {};
        this.$patch((I) => {
          Hn(I, $);
        });
      }
    : km;
  function b() {
    i.stop(), (f = []), (h = []), r._s.delete(e);
  }
  const E = (C, A = "") => {
      if (ud in C) return (C[pc] = A), C;
      const $ = function () {
        ya(r);
        const I = Array.from(arguments),
          T = [],
          U = [];
        function F(N) {
          T.push(N);
        }
        function Z(N) {
          U.push(N);
        }
        Rr(h, { args: I, name: $[pc], store: w, after: F, onError: Z });
        let G;
        try {
          G = C.apply(this && this.$id === e ? this : w, I);
        } catch (N) {
          throw (Rr(U, N), N);
        }
        return G instanceof Promise
          ? G.then((N) => (Rr(T, N), N)).catch(
              (N) => (Rr(U, N), Promise.reject(N))
            )
          : (Rr(T, G), G);
      };
      return ($[ud] = !0), ($[pc] = A), $;
    },
    v = {
      _p: r,
      $id: e,
      $onAction: ld.bind(null, h),
      $patch: y,
      $reset: k,
      $subscribe(C, A = {}) {
        const $ = ld(f, C, A.detached, () => I()),
          I = i.run(() =>
            Tr(
              () => r.state.value[e],
              (T) => {
                (A.flush === "sync" ? l : u) &&
                  C({ storeId: e, type: eo.direct, events: p }, T);
              },
              Hn({}, c, A)
            )
          );
        return $;
      },
      $dispose: b,
    },
    w = pt(v);
  r._s.set(e, w);
  const d = ((r._a && r._a.runWithContext) || Nw)(() =>
    r._e.run(() => (i = sp()).run(() => t({ action: E })))
  );
  for (const C in d) {
    const A = d[C];
    if ((ze(A) && !Fw(A)) || Pn(A))
      o ||
        (m && Uw(A) && (ze(A) ? (A.value = m[C]) : ol(A, m[C])),
        (r.state.value[e][C] = A));
    else if (typeof A == "function") {
      const $ = E(A, C);
      (d[C] = $), (a.actions[C] = A);
    }
  }
  return (
    Hn(w, d),
    Hn(ce(w), d),
    Object.defineProperty(w, "$state", {
      get: () => r.state.value[e],
      set: (C) => {
        y((A) => {
          Hn(A, C);
        });
      },
    }),
    r._p.forEach((C) => {
      Hn(
        w,
        i.run(() => C({ store: w, app: r._a, pinia: r, options: a }))
      );
    }),
    m && o && n.hydrate && n.hydrate(w.$state, m),
    (u = !0),
    (l = !0),
    w
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function Am(e, t, n) {
  let r, s;
  const o = typeof t == "function";
  typeof e == "string" ? ((r = e), (s = o ? n : t)) : ((s = e), (r = e.id));
  function i(a, c) {
    const u = Pg();
    return (
      (a = a || (u ? Bt(_m, null) : null)),
      a && ya(a),
      (a = xm),
      a._s.has(r) || (o ? Sm(r, t, s, a) : Bw(r, s, a)),
      a._s.get(r)
    );
  }
  return (i.$id = r), i;
}
function Li(e) {
  {
    const t = ce(e),
      n = {};
    for (const r in t) {
      const s = t[r];
      s.effect
        ? (n[r] = ge({
            get: () => e[r],
            set(o) {
              e[r] = o;
            },
          }))
        : (ze(s) || Pn(s)) && (n[r] = Y1(e, r));
    }
    return n;
  }
}
const Lw =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Rw =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  jw = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Hw(e, t) {
  if (
    e === "__proto__" ||
    (e === "constructor" && t && typeof t == "object" && "prototype" in t)
  ) {
    zw(e);
    return;
  }
  return t;
}
function zw(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Ww(e, t = {}) {
  if (typeof e != "string") return e;
  const n = e.trim();
  if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
    return n.slice(1, -1);
  if (n.length <= 9) {
    const r = n.toLowerCase();
    if (r === "true") return !0;
    if (r === "false") return !1;
    if (r === "undefined") return;
    if (r === "null") return null;
    if (r === "nan") return Number.NaN;
    if (r === "infinity") return Number.POSITIVE_INFINITY;
    if (r === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!jw.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (Lw.test(e) || Rw.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, Hw);
    }
    return JSON.parse(e);
  } catch (r) {
    if (t.strict) throw r;
    return e;
  }
}
function qw(e, t) {
  if (e == null) return;
  let n = e;
  for (let r = 0; r < t.length; r++) {
    if (n == null || n[t[r]] == null) return;
    n = n[t[r]];
  }
  return n;
}
function Eu(e, t, n) {
  if (n.length === 0) return t;
  const r = n[0];
  return (
    n.length > 1 &&
      (t = Eu(
        typeof e != "object" ||
          e === null ||
          !Object.prototype.hasOwnProperty.call(e, r)
          ? Number.isInteger(Number(n[1]))
            ? []
            : {}
          : e[r],
        t,
        Array.prototype.slice.call(n, 1)
      )),
    Number.isInteger(Number(r)) && Array.isArray(e)
      ? e.slice()[r]
      : Object.assign({}, e, { [r]: t })
  );
}
function Pm(e, t) {
  if (e == null || t.length === 0) return e;
  if (t.length === 1) {
    if (e == null) return e;
    if (Number.isInteger(t[0]) && Array.isArray(e))
      return Array.prototype.slice.call(e, 0).splice(t[0], 1);
    const n = {};
    for (const r in e) n[r] = e[r];
    return delete n[t[0]], n;
  }
  if (e[t[0]] == null) {
    if (Number.isInteger(t[0]) && Array.isArray(e))
      return Array.prototype.concat.call([], e);
    const n = {};
    for (const r in e) n[r] = e[r];
    return n;
  }
  return Eu(e, Pm(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function Tm(e, t) {
  return t
    .map((n) => n.split("."))
    .map((n) => [n, qw(e, n)])
    .filter((n) => n[1] !== void 0)
    .reduce((n, r) => Eu(n, r[1], r[0]), {});
}
function Dm(e, t) {
  return t.map((n) => n.split(".")).reduce((n, r) => Pm(n, r), e);
}
function fd(
  e,
  {
    storage: t,
    serializer: n,
    key: r,
    debug: s,
    pick: o,
    omit: i,
    beforeHydrate: a,
    afterHydrate: c,
  },
  u,
  l = !0
) {
  try {
    l && (a == null || a(u));
    const f = t.getItem(r);
    if (f) {
      const h = n.deserialize(f),
        p = o ? Tm(h, o) : h,
        m = i ? Dm(p, i) : p;
      e.$patch(m);
    }
    l && (c == null || c(u));
  } catch (f) {
    s && console.error("[pinia-plugin-persistedstate]", f);
  }
}
function dd(
  e,
  { storage: t, serializer: n, key: r, debug: s, pick: o, omit: i }
) {
  try {
    const a = o ? Tm(e, o) : e,
      c = i ? Dm(a, i) : a,
      u = n.serialize(c);
    t.setItem(r, u);
  } catch (a) {
    s && console.error("[pinia-plugin-persistedstate]", a);
  }
}
function Gw(e, t, n) {
  const {
    pinia: r,
    store: s,
    options: { persist: o = n },
  } = e;
  if (!o) return;
  if (!(s.$id in r.state.value)) {
    const c = r._s.get(s.$id.replace("__hot:", ""));
    c && Promise.resolve().then(() => c.$persist());
    return;
  }
  const a = (Array.isArray(o) ? o : o === !0 ? [{}] : [o]).map(t);
  (s.$hydrate = ({ runHooks: c = !0 } = {}) => {
    a.forEach((u) => {
      fd(s, u, e, c);
    });
  }),
    (s.$persist = () => {
      a.forEach((c) => {
        dd(s.$state, c);
      });
    }),
    a.forEach((c) => {
      fd(s, c, e), s.$subscribe((u, l) => dd(l, c), { detached: !0 });
    });
}
function Vw(e = {}) {
  return function (t) {
    Gw(
      t,
      (n) => ({
        key: (e.key ? e.key : (r) => r)(n.key ?? t.store.$id),
        debug: n.debug ?? e.debug ?? !1,
        serializer: n.serializer ??
          e.serializer ?? {
            serialize: (r) => JSON.stringify(r),
            deserialize: (r) => Ww(r),
          },
        storage: n.storage ?? e.storage ?? window.localStorage,
        beforeHydrate: n.beforeHydrate,
        afterHydrate: n.afterHydrate,
        pick: n.pick,
        omit: n.omit,
      }),
      e.auto ?? !1
    );
  };
}
var Kw = Vw();
const Om = $w();
Om.use(Kw);
function Im(e, t = {}) {
  const {
    fees: n = e.fees,
    formatters: r = e.formatters,
    serializers: s = e.serializers,
  } = t;
  return { ...e, fees: n, formatters: r, serializers: s };
}
const Xw = "1.21.3",
  Yw = (e) => e,
  wa = (e) => e,
  Zw = () => `viem@${Xw}`;
class K extends Error {
  constructor(t, n = {}) {
    var o;
    super(),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ViemError",
      }),
      Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Zw(),
      });
    const r =
        n.cause instanceof K
          ? n.cause.details
          : (o = n.cause) != null && o.message
          ? n.cause.message
          : n.details,
      s = (n.cause instanceof K && n.cause.docsPath) || n.docsPath;
    (this.message = [
      t || "An error occurred.",
      "",
      ...(n.metaMessages ? [...n.metaMessages, ""] : []),
      ...(s
        ? [
            `Docs: https://viem.sh${s}.html${
              n.docsSlug ? `#${n.docsSlug}` : ""
            }`,
          ]
        : []),
      ...(r ? [`Details: ${r}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      n.cause && (this.cause = n.cause),
      (this.details = r),
      (this.docsPath = s),
      (this.metaMessages = n.metaMessages),
      (this.shortMessage = t);
  }
  walk(t) {
    return $m(this, t);
  }
}
function $m(e, t) {
  return t != null && t(e)
    ? e
    : e && typeof e == "object" && "cause" in e
    ? $m(e.cause, t)
    : t
    ? null
    : e;
}
class Jw extends K {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(
      `Number "${o}" is not in safe ${
        s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""
      }integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntegerOutOfRangeError",
      });
  }
}
class Qw extends K {
  constructor(t) {
    super(
      `Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidHexBooleanError",
      });
  }
}
class ev extends K {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SizeOverflowError",
      });
  }
}
function pn(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string"
    ? !1
    : t
    ? /^0x[0-9a-fA-F]*$/.test(e)
    : e.startsWith("0x");
}
function Je(e) {
  return pn(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
function Tn(e, { dir: t = "left" } = {}) {
  let n = typeof e == "string" ? e.replace("0x", "") : e,
    r = 0;
  for (
    let s = 0;
    s < n.length - 1 &&
    n[t === "left" ? s : n.length - s - 1].toString() === "0";
    s++
  )
    r++;
  return (
    (n = t === "left" ? n.slice(r) : n.slice(0, n.length - r)),
    typeof e == "string"
      ? (n.length === 1 && t === "right" && (n = `${n}0`),
        `0x${n.length % 2 === 1 ? `0${n}` : n}`)
      : n
  );
}
class Nm extends K {
  constructor({ offset: t, position: n, size: r }) {
    super(
      `Slice ${
        n === "start" ? "starting" : "ending"
      } at offset "${t}" is out-of-bounds (size: ${r}).`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SliceOffsetOutOfBoundsError",
      });
  }
}
class Mm extends K {
  constructor({ size: t, targetSize: n, type: r }) {
    super(
      `${r.charAt(0).toUpperCase()}${r
        .slice(1)
        .toLowerCase()} size (${t}) exceeds padding size (${n}).`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SizeExceedsPaddingSizeError",
      });
  }
}
function ws(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string"
    ? tr(e, { dir: t, size: n })
    : tv(e, { dir: t, size: n });
}
function tr(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new Mm({ size: Math.ceil(r.length / 2), targetSize: n, type: "hex" });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function tv(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e;
  if (e.length > n)
    throw new Mm({ size: e.length, targetSize: n, type: "bytes" });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = t === "right";
    r[o ? s : n - s - 1] = e[o ? s : e.length - s - 1];
  }
  return r;
}
const nv = Array.from({ length: 256 }, (e, t) =>
  t.toString(16).padStart(2, "0")
);
function Fn(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? ye(e, t)
    : typeof e == "string"
    ? Cu(e, t)
    : typeof e == "boolean"
    ? Um(e, t)
    : bo(e, t);
}
function Um(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number"
    ? (hr(n, { size: t.size }), ws(n, { size: t.size }))
    : n;
}
function bo(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++) n += nv[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number"
    ? (hr(r, { size: t.size }), ws(r, { dir: "right", size: t.size }))
    : r;
}
function ye(e, t = {}) {
  const { signed: n, size: r } = t,
    s = BigInt(e);
  let o;
  r
    ? n
      ? (o = (1n << (BigInt(r) * 8n - 1n)) - 1n)
      : (o = 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if ((o && s > o) || s < i) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new Jw({
      max: o ? `${o}${c}` : void 0,
      min: `${i}${c}`,
      signed: n,
      size: r,
      value: `${e}${c}`,
    });
  }
  const a = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(
    16
  )}`;
  return r ? ws(a, { size: r }) : a;
}
const rv = new TextEncoder();
function Cu(e, t = {}) {
  const n = rv.encode(e);
  return bo(n, t);
}
const sv = new TextEncoder();
function or(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? iv(e, t)
    : typeof e == "boolean"
    ? ov(e, t)
    : pn(e)
    ? xu(e, t)
    : Dn(e, t);
}
function ov(e, t = {}) {
  const n = new Uint8Array(1);
  return (
    (n[0] = Number(e)),
    typeof t.size == "number"
      ? (hr(n, { size: t.size }), ws(n, { size: t.size }))
      : n
  );
}
const vn = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function hd(e) {
  if (e >= vn.zero && e <= vn.nine) return e - vn.zero;
  if (e >= vn.A && e <= vn.F) return e - (vn.A - 10);
  if (e >= vn.a && e <= vn.f) return e - (vn.a - 10);
}
function xu(e, t = {}) {
  let n = e;
  t.size &&
    (hr(n, { size: t.size }), (n = ws(n, { dir: "right", size: t.size })));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2,
    o = new Uint8Array(s);
  for (let i = 0, a = 0; i < s; i++) {
    const c = hd(r.charCodeAt(a++)),
      u = hd(r.charCodeAt(a++));
    if (c === void 0 || u === void 0)
      throw new K(
        `Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`
      );
    o[i] = c * 16 + u;
  }
  return o;
}
function iv(e, t) {
  const n = ye(e, t);
  return xu(n);
}
function Dn(e, t = {}) {
  const n = sv.encode(e);
  return typeof t.size == "number"
    ? (hr(n, { size: t.size }), ws(n, { dir: "right", size: t.size }))
    : n;
}
function hr(e, { size: t }) {
  if (Je(e) > t) throw new ev({ givenSize: Je(e), maxSize: t });
}
function va(e, t = {}) {
  const { signed: n } = t;
  t.size && hr(e, { size: t.size });
  const r = BigInt(e);
  if (!n) return r;
  const s = (e.length - 2) / 2,
    o = (1n << (BigInt(s) * 8n - 1n)) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function av(e, t = {}) {
  let n = e;
  if ((t.size && (hr(n, { size: t.size }), (n = Tn(n))), Tn(n) === "0x00"))
    return !1;
  if (Tn(n) === "0x01") return !0;
  throw new Qw(n);
}
function ht(e, t = {}) {
  return Number(va(e, t));
}
function Ri(e, t = {}) {
  let n = xu(e);
  return (
    t.size && (hr(n, { size: t.size }), (n = Tn(n, { dir: "right" }))),
    new TextDecoder().decode(n)
  );
}
const Fm = { "0x0": "legacy", "0x1": "eip2930", "0x2": "eip1559" };
function Bm(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? ht(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? ht(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? Fm[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0,
  };
  return (
    (t.yParity = (() => {
      if (e.yParity) return Number(e.yParity);
      if (typeof t.v == "bigint") {
        if (t.v === 0n || t.v === 27n) return 0;
        if (t.v === 1n || t.v === 28n) return 1;
        if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
      }
    })()),
    t.type === "legacy" &&
      (delete t.accessList,
      delete t.maxFeePerGas,
      delete t.maxPriorityFeePerGas,
      delete t.yParity),
    t.type === "eip2930" &&
      (delete t.maxFeePerGas, delete t.maxPriorityFeePerGas),
    t
  );
}
function Lm(e) {
  var n;
  const t =
    (n = e.transactions) == null
      ? void 0
      : n.map((r) => (typeof r == "string" ? r : Bm(r)));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: t,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
  };
}
function Zt(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...(n ? { args: t, eventName: n } : {}),
  };
}
const cv = { "0x0": "reverted", "0x1": "success" };
function lv(e) {
  return {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((t) => Zt(t)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? ht(e.transactionIndex) : null,
    status: e.status ? cv[e.status] : null,
    type: e.type ? Fm[e.type] || e.type : null,
  };
}
const uv = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2" };
function Ea(e) {
  return {
    ...e,
    gas: typeof e.gas < "u" ? ye(e.gas) : void 0,
    gasPrice: typeof e.gasPrice < "u" ? ye(e.gasPrice) : void 0,
    maxFeePerGas: typeof e.maxFeePerGas < "u" ? ye(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas:
      typeof e.maxPriorityFeePerGas < "u" ? ye(e.maxPriorityFeePerGas) : void 0,
    nonce: typeof e.nonce < "u" ? ye(e.nonce) : void 0,
    type: typeof e.type < "u" ? uv[e.type] : void 0,
    value: typeof e.value < "u" ? ye(e.value) : void 0,
  };
}
class go extends K {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAddressError",
      });
  }
}
class il extends K {
  constructor({ blockNumber: t, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...(t && r.blockCreated && r.blockCreated > t
          ? [
              `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`,
            ]
          : [`- The chain does not have the contract "${r.name}" configured.`]),
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainDoesNotSupportContract",
      });
  }
}
class fv extends K {
  constructor({ chain: t, currentChainId: n }) {
    super(
      `The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,
      {
        metaMessages: [
          `Current Chain ID:  ${n}`,
          `Expected Chain ID: ${t.id} – ${t.name}`,
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainMismatchError",
      });
  }
}
class dv extends K {
  constructor() {
    super(
      [
        "No chain was provided to the request.",
        "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
      ].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainNotFoundError",
      });
  }
}
class Rm extends K {
  constructor() {
    super("No chain was provided to the Client."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ClientChainNotConfiguredError",
      });
  }
}
const hv = { gwei: 9, wei: 18 },
  pv = { ether: -9, wei: 9 },
  mv = { ether: -18, gwei: -9 };
function yo(e, t) {
  let n = e.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), (n = n.padStart(t, "0"));
  let [s, o] = [n.slice(0, n.length - t), n.slice(n.length - t)];
  return (
    (o = o.replace(/(0+)$/, "")),
    `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`
  );
}
function _t(e, t = "wei") {
  return yo(e, pv[t]);
}
class Xr extends K {
  constructor({ cause: t, message: n } = {}) {
    var s;
    const r =
      (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null
        ? void 0
        : s.replace("execution reverted", "");
    super(
      `Execution reverted ${
        r ? `with reason: ${r}` : "for an unknown reason"
      }.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ExecutionRevertedError",
      });
  }
}
Object.defineProperty(Xr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
});
Object.defineProperty(Xr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/,
});
class ji extends K {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${_t(n)} gwei` : ""
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeCapTooHigh",
      });
  }
}
Object.defineProperty(ji, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
});
class al extends K {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${_t(n)}` : ""
      } gwei) cannot be lower than the block base fee.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeCapTooLow",
      });
  }
}
Object.defineProperty(al, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
});
class cl extends K {
  constructor({ cause: t, nonce: n } = {}) {
    super(
      `Nonce provided for the transaction ${
        n ? `(${n}) ` : ""
      }is higher than the next one expected.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceTooHighError",
      });
  }
}
Object.defineProperty(cl, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
});
class ll extends K {
  constructor({ cause: t, nonce: n } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          n ? `(${n}) ` : ""
        }is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
      ].join(`
`),
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceTooLowError",
      });
  }
}
Object.defineProperty(ll, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
});
class ul extends K {
  constructor({ cause: t, nonce: n } = {}) {
    super(
      `Nonce provided for the transaction ${
        n ? `(${n}) ` : ""
      }exceeds the maximum allowed nonce.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceMaxValueError",
      });
  }
}
Object.defineProperty(ul, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
});
class fl extends K {
  constructor({ cause: t } = {}) {
    super(
      [
        "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
      ].join(`
`),
      {
        cause: t,
        metaMessages: [
          "This error could arise when the account does not have enough funds to:",
          " - pay for the total gas fee,",
          " - pay for the value to send.",
          " ",
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient.",
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InsufficientFundsError",
      });
  }
}
Object.defineProperty(fl, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/,
});
class dl extends K {
  constructor({ cause: t, gas: n } = {}) {
    super(
      `The amount of gas ${
        n ? `(${n}) ` : ""
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntrinsicGasTooHighError",
      });
  }
}
Object.defineProperty(dl, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
});
class hl extends K {
  constructor({ cause: t, gas: n } = {}) {
    super(
      `The amount of gas ${
        n ? `(${n}) ` : ""
      }provided for the transaction is too low.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntrinsicGasTooLowError",
      });
  }
}
Object.defineProperty(hl, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
});
class pl extends K {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionTypeNotSupportedError",
      });
  }
}
Object.defineProperty(pl, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
});
class Hi extends K {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          n ? ` = ${_t(n)} gwei` : ""
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          r ? ` = ${_t(r)} gwei` : ""
        }).`,
      ].join(`
`),
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TipAboveFeeCapError",
      });
  }
}
Object.defineProperty(Hi, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
});
class Ca extends K {
  constructor({ cause: t }) {
    super(
      `An error occurred while executing: ${
        t == null ? void 0 : t.shortMessage
      }`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownNodeError",
      });
  }
}
const bv = /^0x[a-fA-F0-9]{40}$/;
function ir(e) {
  return bv.test(e);
}
function In(e) {
  return typeof e[0] == "string" ? _u(e) : gv(e);
}
function gv(e) {
  let t = 0;
  for (const s of e) t += s.length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e) n.set(s, r), (r += s.length);
  return n;
}
function _u(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function yv(e, t) {
  const n = e.exec(t);
  return n == null ? void 0 : n.groups;
}
const pd = /^tuple(?<array>(\[(\d*)\])*)$/;
function ml(e) {
  let t = e.type;
  if (pd.test(e.type) && "components" in e) {
    t = "(";
    const n = e.components.length;
    for (let s = 0; s < n; s++) {
      const o = e.components[s];
      (t += ml(o)), s < n - 1 && (t += ", ");
    }
    const r = yv(pd, e.type);
    return (
      (t += `)${(r == null ? void 0 : r.array) ?? ""}`), ml({ ...e, type: t })
    );
  }
  return (
    "indexed" in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  );
}
function Ns(e) {
  let t = "";
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const s = e[r];
    (t += ml(s)), r !== n - 1 && (t += ", ");
  }
  return t;
}
function wv(e) {
  return e.type === "function"
    ? `function ${e.name}(${Ns(e.inputs)})${
        e.stateMutability && e.stateMutability !== "nonpayable"
          ? ` ${e.stateMutability}`
          : ""
      }${e.outputs.length ? ` returns (${Ns(e.outputs)})` : ""}`
    : e.type === "event"
    ? `event ${e.name}(${Ns(e.inputs)})`
    : e.type === "error"
    ? `error ${e.name}(${Ns(e.inputs)})`
    : e.type === "constructor"
    ? `constructor(${Ns(e.inputs)})${
        e.stateMutability === "payable" ? " payable" : ""
      }`
    : e.type === "fallback"
    ? "fallback()"
    : "receive() external payable";
}
function ae(e, t, n) {
  return (r) => {
    var s;
    return ((s = e[t.name || n]) == null ? void 0 : s.call(e, r)) ?? t(e, r);
  };
}
function $n(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new $v(e.type);
  return `${e.name}(${xa(e.inputs, { includeName: t })})`;
}
function xa(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => vv(n, { includeName: t })).join(t ? ", " : ",") : "";
}
function vv(e, { includeName: t }) {
  return e.type.startsWith("tuple")
    ? `(${xa(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : "");
}
class Ev extends K {
  constructor({ docsPath: t }) {
    super(
      [
        "A constructor was not found on the ABI.",
        "Make sure you are using the correct ABI and that the constructor exists on it.",
      ].join(`
`),
      { docsPath: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiConstructorNotFoundError",
      });
  }
}
class md extends K {
  constructor({ docsPath: t }) {
    super(
      [
        "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
        "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
      ].join(`
`),
      { docsPath: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiConstructorParamsNotFoundError",
      });
  }
}
class ku extends K {
  constructor({ data: t, params: n, size: r }) {
    super(
      [`Data size of ${r} bytes is too small for given parameters.`].join(`
`),
      {
        metaMessages: [
          `Params: (${xa(n, { includeName: !0 })})`,
          `Data:   ${t} (${r} bytes)`,
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiDecodingDataSizeTooSmallError",
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "params", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "size", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = t),
      (this.params = n),
      (this.size = r);
  }
}
class _a extends K {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.'),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiDecodingZeroDataError",
      });
  }
}
class Cv extends K {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super(
      [
        `ABI encoding array length mismatch for type ${r}.`,
        `Expected length: ${t}`,
        `Given length: ${n}`,
      ].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiEncodingArrayLengthMismatchError",
      });
  }
}
class xv extends K {
  constructor({ expectedSize: t, value: n }) {
    super(
      `Size of bytes "${n}" (bytes${Je(
        n
      )}) does not match expected size (bytes${t}).`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiEncodingBytesSizeMismatchError",
      });
  }
}
class _v extends K {
  constructor({ expectedLength: t, givenLength: n }) {
    super(
      [
        "ABI encoding params/values length mismatch.",
        `Expected length (params): ${t}`,
        `Given length (values): ${n}`,
      ].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiEncodingLengthMismatchError",
      });
  }
}
class jm extends K {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Encoded error signature "${t}" not found on ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it.",
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`,
      ].join(`
`),
      { docsPath: n }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiErrorSignatureNotFoundError",
      }),
      Object.defineProperty(this, "signature", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.signature = t);
  }
}
class kv extends K {
  constructor({ docsPath: t }) {
    super("Cannot extract event signature from empty topics.", { docsPath: t }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiEventSignatureEmptyTopicsError",
      });
  }
}
class Sv extends K {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Encoded event signature "${t}" not found on ABI.`,
        "Make sure you are using the correct ABI and that the event exists on it.",
        `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,
      ].join(`
`),
      { docsPath: n }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiEventSignatureNotFoundError",
      });
  }
}
class bd extends K {
  constructor(t, { docsPath: n } = {}) {
    super(
      [
        `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
        "Make sure you are using the correct ABI and that the event exists on it.",
      ].join(`
`),
      { docsPath: n }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiEventNotFoundError",
      });
  }
}
class zi extends K {
  constructor(t, { docsPath: n } = {}) {
    super(
      [
        `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
        "Make sure you are using the correct ABI and that the function exists on it.",
      ].join(`
`),
      { docsPath: n }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiFunctionNotFoundError",
      });
  }
}
class Av extends K {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Function "${t}" does not contain any \`outputs\` on ABI.`,
        "Cannot decode function result without knowing what the parameter types are.",
        "Make sure you are using the correct ABI and that the function exists on it.",
      ].join(`
`),
      { docsPath: n }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiFunctionOutputsNotFoundError",
      });
  }
}
class Pv extends K {
  constructor(t, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${$n(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${$n(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI.",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiItemAmbiguityError",
      });
  }
}
class Tv extends K {
  constructor({ expectedSize: t, givenSize: n }) {
    super(`Expected bytes${t}, got bytes${n}.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BytesSizeMismatchError",
      });
  }
}
class Nr extends K {
  constructor({ abiItem: t, data: n, params: r, size: s }) {
    super(
      [`Data size of ${s} bytes is too small for non-indexed event parameters.`]
        .join(`
`),
      {
        metaMessages: [
          `Params: (${xa(r, { includeName: !0 })})`,
          `Data:   ${n} (${s} bytes)`,
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "DecodeLogDataMismatch",
      }),
      Object.defineProperty(this, "abiItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "params", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "size", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.abiItem = t),
      (this.data = n),
      (this.params = r),
      (this.size = s);
  }
}
class vs extends K {
  constructor({ abiItem: t, param: n }) {
    super(
      [
        `Expected a topic for indexed event parameter${
          n.name ? ` "${n.name}"` : ""
        } on event "${$n(t, { includeName: !0 })}".`,
      ].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "DecodeLogTopicsMismatch",
      }),
      Object.defineProperty(this, "abiItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.abiItem = t);
  }
}
class Dv extends K {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Type "${t}" is not a valid encoding type.`,
        "Please provide a valid ABI type.",
      ].join(`
`),
      { docsPath: n }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAbiEncodingType",
      });
  }
}
class Ov extends K {
  constructor(t, { docsPath: n }) {
    super(
      [
        `Type "${t}" is not a valid decoding type.`,
        "Please provide a valid ABI type.",
      ].join(`
`),
      { docsPath: n }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAbiDecodingType",
      });
  }
}
class Iv extends K {
  constructor(t) {
    super(
      [`Value "${t}" is not a valid array.`].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidArrayError",
      });
  }
}
class $v extends K {
  constructor(t) {
    super(
      [
        `"${t}" is not a valid definition type.`,
        'Valid types: "function", "event", "error"',
      ].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidDefinitionTypeError",
      });
  }
}
class Nv extends K {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FilterTypeNotSupportedError",
      });
  }
}
function Mv(e) {
  let t = !0,
    n = "",
    r = 0,
    s = "",
    o = !1;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (
      (["(", ")", ","].includes(a) && (t = !0),
      a === "(" && r++,
      a === ")" && r--,
      !!t)
    ) {
      if (r === 0) {
        if (a === " " && ["event", "function", ""].includes(s)) s = "";
        else if (((s += a), a === ")")) {
          o = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        e[i - 1] !== "," && n !== "," && n !== ",(" && ((n = ""), (t = !1));
        continue;
      }
      (s += a), (n += a);
    }
  }
  if (!o) throw new K("Unable to normalize signature.");
  return s;
}
const Hm = (e) => {
    const t = typeof e == "string" ? e : wv(e);
    return Mv(t);
  },
  Uv = (e) => Hm(e);
function gd(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
function zm(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(
      `Expected Uint8Array of length ${t}, not of length=${e.length}`
    );
}
function yd(e, t = !0) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function Fv(e, t) {
  zm(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(
      `digestInto() expects output buffer of length at least ${n}`
    );
}
const li = BigInt(2 ** 32 - 1),
  wd = BigInt(32);
function Bv(e, t = !1) {
  return t
    ? { h: Number(e & li), l: Number((e >> wd) & li) }
    : { h: Number((e >> wd) & li) | 0, l: Number(e & li) | 0 };
}
function Lv(e, t = !1) {
  let n = new Uint32Array(e.length),
    r = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: i } = Bv(e[s], t);
    [n[s], r[s]] = [o, i];
  }
  return [n, r];
}
const Rv = (e, t, n) => (e << n) | (t >>> (32 - n)),
  jv = (e, t, n) => (t << n) | (e >>> (32 - n)),
  Hv = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
  zv = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Wv =
    (e) => e instanceof Uint8Array,
  qv = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  Gv = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Gv) throw new Error("Non little-endian hardware is not supported");
function Vv(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Wm(e) {
  if ((typeof e == "string" && (e = Vv(e)), !Wv(e)))
    throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
class Kv {
  clone() {
    return this._cloneInto();
  }
}
function Xv(e) {
  const t = (r) => e().update(Wm(r)).digest(),
    n = e();
  return (
    (t.outputLen = n.outputLen),
    (t.blockLen = n.blockLen),
    (t.create = () => e()),
    t
  );
}
const [qm, Gm, Vm] = [[], [], []],
  Yv = BigInt(0),
  Ms = BigInt(1),
  Zv = BigInt(2),
  Jv = BigInt(7),
  Qv = BigInt(256),
  e2 = BigInt(113);
for (let e = 0, t = Ms, n = 1, r = 0; e < 24; e++) {
  ([n, r] = [r, (2 * n + 3 * r) % 5]),
    qm.push(2 * (5 * r + n)),
    Gm.push((((e + 1) * (e + 2)) / 2) % 64);
  let s = Yv;
  for (let o = 0; o < 7; o++)
    (t = ((t << Ms) ^ ((t >> Jv) * e2)) % Qv),
      t & Zv && (s ^= Ms << ((Ms << BigInt(o)) - Ms));
  Vm.push(s);
}
const [t2, n2] = Lv(Vm, !0),
  vd = (e, t, n) => (n > 32 ? Hv(e, t, n) : Rv(e, t, n)),
  Ed = (e, t, n) => (n > 32 ? zv(e, t, n) : jv(e, t, n));
function r2(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const a = (i + 8) % 10,
        c = (i + 2) % 10,
        u = n[c],
        l = n[c + 1],
        f = vd(u, l, 1) ^ n[a],
        h = Ed(u, l, 1) ^ n[a + 1];
      for (let p = 0; p < 50; p += 10) (e[i + p] ^= f), (e[i + p + 1] ^= h);
    }
    let s = e[2],
      o = e[3];
    for (let i = 0; i < 24; i++) {
      const a = Gm[i],
        c = vd(s, o, a),
        u = Ed(s, o, a),
        l = qm[i];
      (s = e[l]), (o = e[l + 1]), (e[l] = c), (e[l + 1] = u);
    }
    for (let i = 0; i < 50; i += 10) {
      for (let a = 0; a < 10; a++) n[a] = e[i + a];
      for (let a = 0; a < 10; a++)
        e[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    (e[0] ^= t2[r]), (e[1] ^= n2[r]);
  }
  n.fill(0);
}
class Su extends Kv {
  constructor(t, n, r, s = !1, o = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = n),
      (this.outputLen = r),
      (this.enableXOF = s),
      (this.rounds = o),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      gd(r),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error("Sha3 supports only keccak-f1600 function");
    (this.state = new Uint8Array(200)), (this.state32 = qv(this.state));
  }
  keccak() {
    r2(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(t) {
    yd(this);
    const { blockLen: n, state: r } = this;
    t = Wm(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const i = Math.min(n - this.pos, s - o);
      for (let a = 0; a < i; a++) r[this.pos++] ^= t[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: s } = this;
    (t[r] ^= n),
      n & 128 && r === s - 1 && this.keccak(),
      (t[s - 1] ^= 128),
      this.keccak();
  }
  writeInto(t) {
    yd(this, !1), zm(t), this.finish();
    const n = this.state,
      { blockLen: r } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, o - s);
      t.set(n.subarray(this.posOut, this.posOut + i), s),
        (this.posOut += i),
        (s += i);
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return gd(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((Fv(t, this), this.finished))
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(t) {
    const {
      blockLen: n,
      suffix: r,
      outputLen: s,
      rounds: o,
      enableXOF: i,
    } = this;
    return (
      t || (t = new Su(n, r, s, i, o)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = o),
      (t.suffix = r),
      (t.outputLen = s),
      (t.enableXOF = i),
      (t.destroyed = this.destroyed),
      t
    );
  }
}
const s2 = (e, t, n) => Xv(() => new Su(t, e, n)),
  o2 = s2(1, 136, 256 / 8);
function yt(e, t) {
  const n = t || "hex",
    r = o2(pn(e, { strict: !1 }) ? or(e) : e);
  return n === "bytes" ? r : Fn(r);
}
const i2 = (e) => yt(or(e)),
  Au = (e) => i2(Uv(e));
function Ke(e, t, n, { strict: r } = {}) {
  return pn(e, { strict: !1 })
    ? c2(e, t, n, { strict: r })
    : a2(e, t, n, { strict: r });
}
function Km(e, t) {
  if (typeof t == "number" && t > 0 && t > Je(e) - 1)
    throw new Nm({ offset: t, position: "start", size: Je(e) });
}
function Xm(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && Je(e) !== n - t)
    throw new Nm({ offset: n, position: "end", size: Je(e) });
}
function a2(e, t, n, { strict: r } = {}) {
  Km(e, t);
  const s = e.slice(t, n);
  return r && Xm(s, t, n), s;
}
function c2(e, t, n, { strict: r } = {}) {
  Km(e, t);
  const s = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return r && Xm(s, t, n), s;
}
function Wo(e, t) {
  if (e.length !== t.length)
    throw new _v({ expectedLength: e.length, givenLength: t.length });
  const n = l2({ params: e, values: t }),
    r = Tu(n);
  return r.length === 0 ? "0x" : r;
}
function l2({ params: e, values: t }) {
  const n = [];
  for (let r = 0; r < e.length; r++) n.push(Pu({ param: e[r], value: t[r] }));
  return n;
}
function Pu({ param: e, value: t }) {
  const n = ka(e.type);
  if (n) {
    const [r, s] = n;
    return f2(t, { length: r, param: { ...e, type: s } });
  }
  if (e.type === "tuple") return b2(t, { param: e });
  if (e.type === "address") return u2(t);
  if (e.type === "bool") return h2(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    const r = e.type.startsWith("int");
    return p2(t, { signed: r });
  }
  if (e.type.startsWith("bytes")) return d2(t, { param: e });
  if (e.type === "string") return m2(t);
  throw new Dv(e.type, { docsPath: "/docs/contract/encodeAbiParameters" });
}
function Tu(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? (t += 32) : (t += Je(a));
  }
  const n = [],
    r = [];
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? (n.push(ye(t + s, { size: 32 })), r.push(a), (s += Je(a))) : n.push(a);
  }
  return In([...n, ...r]);
}
function u2(e) {
  if (!ir(e)) throw new go({ address: e });
  return { dynamic: !1, encoded: tr(e.toLowerCase()) };
}
function f2(e, { length: t, param: n }) {
  const r = t === null;
  if (!Array.isArray(e)) throw new Iv(e);
  if (!r && e.length !== t)
    throw new Cv({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`,
    });
  let s = !1;
  const o = [];
  for (let i = 0; i < e.length; i++) {
    const a = Pu({ param: n, value: e[i] });
    a.dynamic && (s = !0), o.push(a);
  }
  if (r || s) {
    const i = Tu(o);
    if (r) {
      const a = ye(o.length, { size: 32 });
      return { dynamic: !0, encoded: o.length > 0 ? In([a, i]) : a };
    }
    if (s) return { dynamic: !0, encoded: i };
  }
  return { dynamic: !1, encoded: In(o.map(({ encoded: i }) => i)) };
}
function d2(e, { param: t }) {
  const [, n] = t.type.split("bytes"),
    r = Je(e);
  if (!n) {
    let s = e;
    return (
      r % 32 !== 0 &&
        (s = tr(s, {
          dir: "right",
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: In([tr(ye(r, { size: 32 })), s]) }
    );
  }
  if (r !== parseInt(n)) throw new xv({ expectedSize: parseInt(n), value: e });
  return { dynamic: !1, encoded: tr(e, { dir: "right" }) };
}
function h2(e) {
  return { dynamic: !1, encoded: tr(Um(e)) };
}
function p2(e, { signed: t }) {
  return { dynamic: !1, encoded: ye(e, { size: 32, signed: t }) };
}
function m2(e) {
  const t = Cu(e),
    n = Math.ceil(Je(t) / 32),
    r = [];
  for (let s = 0; s < n; s++)
    r.push(tr(Ke(t, s * 32, (s + 1) * 32), { dir: "right" }));
  return { dynamic: !0, encoded: In([tr(ye(Je(t), { size: 32 })), ...r]) };
}
function b2(e, { param: t }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < t.components.length; s++) {
    const o = t.components[s],
      i = Array.isArray(e) ? s : o.name,
      a = Pu({ param: o, value: e[i] });
    r.push(a), a.dynamic && (n = !0);
  }
  return { dynamic: n, encoded: n ? Tu(r) : In(r.map(({ encoded: s }) => s)) };
}
function ka(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
}
const g2 = (e) => yt(or(e)),
  Du = (e) => Ke(g2(Hm(e)), 0, 4);
function qo({ abi: e, args: t = [], name: n }) {
  const r = pn(n, { strict: !1 }),
    s = e.filter((i) =>
      r
        ? i.type === "function"
          ? Du(i) === n
          : i.type === "event"
          ? Au(i) === n
          : !1
        : "name" in i && i.name === n
    );
  if (s.length === 0) return;
  if (s.length === 1) return s[0];
  let o;
  for (const i of s) {
    if (!("inputs" in i)) continue;
    if (!t || t.length === 0) {
      if (!i.inputs || i.inputs.length === 0) return i;
      continue;
    }
    if (!i.inputs || i.inputs.length === 0 || i.inputs.length !== t.length)
      continue;
    if (
      t.every((c, u) => {
        const l = "inputs" in i && i.inputs[u];
        return l ? bl(c, l) : !1;
      })
    ) {
      if (o && "inputs" in o && o.inputs) {
        const c = Ym(i.inputs, o.inputs, t);
        if (c)
          throw new Pv({ abiItem: i, type: c[0] }, { abiItem: o, type: c[1] });
      }
      o = i;
    }
  }
  return o || s[0];
}
function bl(e, t) {
  const n = typeof e,
    r = t.type;
  switch (r) {
    case "address":
      return ir(e);
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in t
        ? Object.values(t.components).every((s, o) =>
            bl(Object.values(e)[o], s)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            r
          )
        ? n === "number" || n === "bigint"
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)
        ? n === "string" || e instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)
        ? Array.isArray(e) &&
          e.every((s) =>
            bl(s, { ...t, type: r.replace(/(\[[0-9]{0,}\])$/, "") })
          )
        : !1;
  }
}
function Ym(e, t, n) {
  for (const r in e) {
    const s = e[r],
      o = t[r];
    if (
      s.type === "tuple" &&
      o.type === "tuple" &&
      "components" in s &&
      "components" in o
    )
      return Ym(s.components, o.components, n[r]);
    const i = [s.type, o.type];
    if (
      i.includes("address") && i.includes("bytes20")
        ? !0
        : (i.includes("address") && i.includes("string")) ||
          (i.includes("address") && i.includes("bytes"))
        ? ir(n[r])
        : !1
    )
      return i;
  }
}
function Go({ abi: e, eventName: t, args: n }) {
  var a;
  let r = e[0];
  if (t && ((r = qo({ abi: e, args: n, name: t })), !r))
    throw new bd(t, { docsPath: "/docs/contract/encodeEventTopics" });
  if (r.type !== "event")
    throw new bd(void 0, { docsPath: "/docs/contract/encodeEventTopics" });
  const s = $n(r),
    o = Au(s);
  let i = [];
  if (n && "inputs" in r) {
    const c =
        (a = r.inputs) == null
          ? void 0
          : a.filter((l) => "indexed" in l && l.indexed),
      u = Array.isArray(n)
        ? n
        : Object.values(n).length > 0
        ? (c == null ? void 0 : c.map((l) => n[l.name])) ?? []
        : [];
    u.length > 0 &&
      (i =
        (c == null
          ? void 0
          : c.map((l, f) =>
              Array.isArray(u[f])
                ? u[f].map((h, p) => Cd({ param: l, value: u[f][p] }))
                : u[f]
                ? Cd({ param: l, value: u[f] })
                : null
            )) ?? []);
  }
  return [o, ...i];
}
function Cd({ param: e, value: t }) {
  if (e.type === "string" || e.type === "bytes") return yt(or(t));
  if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Nv(e.type);
  return Wo([e], [t]);
}
function Sa(e, { method: t }) {
  var r, s;
  const n = {};
  return (
    e.transport.type === "fallback" &&
      ((s = (r = e.transport).onResponse) == null ||
        s.call(r, ({ method: o, response: i, status: a, transport: c }) => {
          a === "success" && t === o && (n[i] = c.request);
        })),
    (o) => n[o] || e.request
  );
}
async function Zm(
  e,
  {
    address: t,
    abi: n,
    args: r,
    eventName: s,
    fromBlock: o,
    strict: i,
    toBlock: a,
  }
) {
  const c = Sa(e, { method: "eth_newFilter" }),
    u = s ? Go({ abi: n, args: r, eventName: s }) : void 0,
    l = await e.request({
      method: "eth_newFilter",
      params: [
        {
          address: t,
          fromBlock: typeof o == "bigint" ? ye(o) : o,
          toBlock: typeof a == "bigint" ? ye(a) : a,
          topics: u,
        },
      ],
    });
  return {
    abi: n,
    args: r,
    eventName: s,
    id: l,
    request: c(l),
    strict: i,
    type: "event",
  };
}
function jt(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
function pr({ abi: e, args: t, functionName: n }) {
  let r = e[0];
  if (n && ((r = qo({ abi: e, args: t, name: n })), !r))
    throw new zi(n, { docsPath: "/docs/contract/encodeFunctionData" });
  if (r.type !== "function")
    throw new zi(void 0, { docsPath: "/docs/contract/encodeFunctionData" });
  const s = $n(r),
    o = Du(s),
    i = "inputs" in r && r.inputs ? Wo(r.inputs, t ?? []) : void 0;
  return _u([o, i ?? "0x"]);
}
const Jm = {
    1: "An `assert` condition failed.",
    17: "Arithmic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type.",
  },
  y2 = {
    inputs: [{ name: "message", type: "string" }],
    name: "Error",
    type: "error",
  },
  w2 = {
    inputs: [{ name: "reason", type: "uint256" }],
    name: "Panic",
    type: "error",
  };
function Ou(e, t) {
  const n = e.substring(2).toLowerCase(),
    r = yt(Dn(n), "bytes"),
    s = n.split("");
  for (let o = 0; o < 40; o += 2)
    r[o >> 1] >> 4 >= 8 && s[o] && (s[o] = s[o].toUpperCase()),
      (r[o >> 1] & 15) >= 8 && s[o + 1] && (s[o + 1] = s[o + 1].toUpperCase());
  return `0x${s.join("")}`;
}
function nr(e, t) {
  if (!ir(e)) throw new go({ address: e });
  return Ou(e);
}
function Aa(e, t) {
  if (t === "0x" && e.length > 0) throw new _a();
  if (Je(t) && Je(t) < 32) throw new ku({ data: t, params: e, size: Je(t) });
  return v2({ data: t, params: e });
}
function v2({ data: e, params: t }) {
  const n = [];
  let r = 0;
  for (let s = 0; s < t.length; s++) {
    if (r >= Je(e)) throw new ku({ data: e, params: t, size: Je(e) });
    const o = t[s],
      { consumed: i, value: a } = ss({ data: e, param: o, position: r });
    n.push(a), (r += i);
  }
  return n;
}
function ss({ data: e, param: t, position: n }) {
  const r = ka(t.type);
  if (r) {
    const [o, i] = r;
    return C2(e, { length: o, param: { ...t, type: i }, position: n });
  }
  if (t.type === "tuple") return A2(e, { param: t, position: n });
  if (t.type === "string") return S2(e, { position: n });
  if (t.type.startsWith("bytes")) return _2(e, { param: t, position: n });
  const s = Ke(e, n, n + 32, { strict: !0 });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return k2(s, { param: t });
  if (t.type === "address") return E2(s);
  if (t.type === "bool") return x2(s);
  throw new Ov(t.type, { docsPath: "/docs/contract/decodeAbiParameters" });
}
function E2(e) {
  return { consumed: 32, value: Ou(Ke(e, -20)) };
}
function C2(e, { param: t, length: n, position: r }) {
  if (!n) {
    const i = ht(Ke(e, r, r + 32, { strict: !0 })),
      a = ht(Ke(e, i, i + 32, { strict: !0 }));
    let c = 0;
    const u = [];
    for (let l = 0; l < a; ++l) {
      const f = ss({ data: Ke(e, i + 32), param: t, position: c });
      (c += f.consumed), u.push(f.value);
    }
    return { value: u, consumed: 32 };
  }
  if (Wi(t)) {
    const i = ka(t.type),
      a = !(i != null && i[0]);
    let c = 0;
    const u = [];
    for (let l = 0; l < n; ++l) {
      const f = ht(Ke(e, r, r + 32, { strict: !0 })),
        h = ss({ data: Ke(e, f), param: t, position: a ? c : l * 32 });
      (c += h.consumed), u.push(h.value);
    }
    return { value: u, consumed: 32 };
  }
  let s = 0;
  const o = [];
  for (let i = 0; i < n; ++i) {
    const a = ss({ data: e, param: t, position: r + s });
    (s += a.consumed), o.push(a.value);
  }
  return { value: o, consumed: s };
}
function x2(e) {
  return { consumed: 32, value: av(e) };
}
function _2(e, { param: t, position: n }) {
  const [r, s] = t.type.split("bytes");
  if (!s) {
    const i = ht(Ke(e, n, n + 32, { strict: !0 })),
      a = ht(Ke(e, i, i + 32, { strict: !0 }));
    return a === 0
      ? { consumed: 32, value: "0x" }
      : { consumed: 32, value: Ke(e, i + 32, i + 32 + a, { strict: !0 }) };
  }
  return { consumed: 32, value: Ke(e, n, n + parseInt(s), { strict: !0 }) };
}
function k2(e, { param: t }) {
  const n = t.type.startsWith("int");
  return {
    consumed: 32,
    value:
      parseInt(t.type.split("int")[1] || "256") > 48
        ? va(e, { signed: n })
        : ht(e, { signed: n }),
  };
}
function S2(e, { position: t }) {
  const n = ht(Ke(e, t, t + 32, { strict: !0 })),
    r = ht(Ke(e, n, n + 32, { strict: !0 }));
  return r === 0
    ? { consumed: 32, value: "" }
    : {
        consumed: 32,
        value: Ri(Tn(Ke(e, n + 32, n + 32 + r, { strict: !0 }))),
      };
}
function A2(e, { param: t, position: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: i }) => !i),
    s = r ? [] : {};
  let o = 0;
  if (Wi(t)) {
    const i = ht(Ke(e, n, n + 32, { strict: !0 }));
    for (let a = 0; a < t.components.length; ++a) {
      const c = t.components[a],
        u = ss({ data: Ke(e, i), param: c, position: o });
      (o += u.consumed), (s[r ? a : c == null ? void 0 : c.name] = u.value);
    }
    return { consumed: 32, value: s };
  }
  for (let i = 0; i < t.components.length; ++i) {
    const a = t.components[i],
      c = ss({ data: e, param: a, position: n + o });
    (o += c.consumed), (s[r ? i : a == null ? void 0 : a.name] = c.value);
  }
  return { consumed: o, value: s };
}
function Wi(e) {
  var r;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
  if (t === "tuple") return (r = e.components) == null ? void 0 : r.some(Wi);
  const n = ka(e.type);
  return !!(n && Wi({ ...e, type: n[1] }));
}
function P2({ abi: e, data: t }) {
  const n = Ke(t, 0, 4);
  if (n === "0x") throw new _a();
  const s = [...(e || []), y2, w2].find(
    (o) => o.type === "error" && n === Du($n(o))
  );
  if (!s) throw new jm(n, { docsPath: "/docs/contract/decodeErrorResult" });
  return {
    abiItem: s,
    args:
      "inputs" in s && s.inputs && s.inputs.length > 0
        ? Aa(s.inputs, Ke(t, 4))
        : void 0,
    errorName: s.name,
  };
}
const wt = (e, t, n) =>
  JSON.stringify(
    e,
    (r, s) => {
      const o = typeof s == "bigint" ? s.toString() : s;
      return typeof t == "function" ? t(r, o) : o;
    },
    n
  );
function Qm({
  abiItem: e,
  args: t,
  includeFunctionName: n = !0,
  includeName: r = !1,
}) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${n ? e.name : ""}(${e.inputs
      .map(
        (s, o) =>
          `${r && s.name ? `${s.name}: ` : ""}${
            typeof t[o] == "object" ? wt(t[o]) : t[o]
          }`
      )
      .join(", ")})`;
}
function Iu(e, t = "wei") {
  return yo(e, hv[t]);
}
function Vo(e) {
  const t = Object.entries(e)
      .map(([r, s]) => (s === void 0 || s === !1 ? null : [r, s]))
      .filter(Boolean),
    n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
  return t.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class T2 extends K {
  constructor() {
    super(
      [
        "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
        "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
      ].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeConflictError",
      });
  }
}
class D2 extends K {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        Vo(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- a Legacy Transaction with `gasPrice`",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidSerializableTransactionError",
      });
  }
}
class O2 extends K {
  constructor(
    t,
    {
      account: n,
      docsPath: r,
      chain: s,
      data: o,
      gas: i,
      gasPrice: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: u,
      nonce: l,
      to: f,
      value: h,
    }
  ) {
    var m;
    const p = Vo({
      chain:
        s &&
        `${s == null ? void 0 : s.name} (id: ${s == null ? void 0 : s.id})`,
      from: n == null ? void 0 : n.address,
      to: f,
      value:
        typeof h < "u" &&
        `${Iu(h)} ${
          ((m = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : m.symbol) || "ETH"
        }`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${_t(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${_t(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${_t(u)} gwei`,
      nonce: l,
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...(t.metaMessages ? [...t.metaMessages, " "] : []),
        "Request Arguments:",
        p,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionExecutionError",
      }),
      (this.cause = t);
  }
}
class eb extends K {
  constructor({
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    hash: s,
    index: o,
  }) {
    let i = "Transaction";
    r &&
      o !== void 0 &&
      (i = `Transaction at block time "${r}" at index "${o}"`),
      t &&
        o !== void 0 &&
        (i = `Transaction at block hash "${t}" at index "${o}"`),
      n &&
        o !== void 0 &&
        (i = `Transaction at block number "${n}" at index "${o}"`),
      s && (i = `Transaction with hash "${s}"`),
      super(`${i} could not be found.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionNotFoundError",
      });
  }
}
class tb extends K {
  constructor({ hash: t }) {
    super(
      `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionReceiptNotFoundError",
      });
  }
}
class I2 extends K {
  constructor({ hash: t }) {
    super(
      `Timed out while waiting for transaction with hash "${t}" to be confirmed.`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WaitForTransactionReceiptTimeoutError",
      });
  }
}
class nb extends K {
  constructor(
    t,
    {
      account: n,
      docsPath: r,
      chain: s,
      data: o,
      gas: i,
      gasPrice: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: u,
      nonce: l,
      to: f,
      value: h,
    }
  ) {
    var g;
    const p = n ? jt(n) : void 0,
      m = Vo({
        from: p == null ? void 0 : p.address,
        to: f,
        value:
          typeof h < "u" &&
          `${Iu(h)} ${
            ((g = s == null ? void 0 : s.nativeCurrency) == null
              ? void 0
              : g.symbol) || "ETH"
          }`,
        data: o,
        gas: i,
        gasPrice: typeof a < "u" && `${_t(a)} gwei`,
        maxFeePerGas: typeof c < "u" && `${_t(c)} gwei`,
        maxPriorityFeePerGas: typeof u < "u" && `${_t(u)} gwei`,
        nonce: l,
      });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...(t.metaMessages ? [...t.metaMessages, " "] : []),
        "Raw Call Arguments:",
        m,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CallExecutionError",
      }),
      (this.cause = t);
  }
}
class Pa extends K {
  constructor(
    t,
    {
      abi: n,
      args: r,
      contractAddress: s,
      docsPath: o,
      functionName: i,
      sender: a,
    }
  ) {
    const c = qo({ abi: n, args: r, name: i }),
      u = c
        ? Qm({ abiItem: c, args: r, includeFunctionName: !1, includeName: !1 })
        : void 0,
      l = c ? $n(c, { includeName: !0 }) : void 0,
      f = Vo({
        address: s && Yw(s),
        function: l,
        args:
          u &&
          u !== "()" &&
          `${[...Array((i == null ? void 0 : i.length) ?? 0).keys()]
            .map(() => " ")
            .join("")}${u}`,
        sender: a,
      });
    super(
      t.shortMessage ||
        `An unknown error occurred while executing the contract function "${i}".`,
      {
        cause: t,
        docsPath: o,
        metaMessages: [
          ...(t.metaMessages ? [...t.metaMessages, " "] : []),
          "Contract Call:",
          f,
        ].filter(Boolean),
      }
    ),
      Object.defineProperty(this, "abi", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "args", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "contractAddress", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "formattedArgs", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "functionName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "sender", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ContractFunctionExecutionError",
      }),
      (this.abi = n),
      (this.args = r),
      (this.cause = t),
      (this.contractAddress = s),
      (this.functionName = i),
      (this.sender = a);
  }
}
class gl extends K {
  constructor({ abi: t, data: n, functionName: r, message: s }) {
    let o, i, a, c;
    if (n && n !== "0x")
      try {
        i = P2({ abi: t, data: n });
        const { abiItem: l, errorName: f, args: h } = i;
        if (f === "Error") c = h[0];
        else if (f === "Panic") {
          const [p] = h;
          c = Jm[p];
        } else {
          const p = l ? $n(l, { includeName: !0 }) : void 0,
            m =
              l && h
                ? Qm({
                    abiItem: l,
                    args: h,
                    includeFunctionName: !1,
                    includeName: !1,
                  })
                : void 0;
          a = [
            p ? `Error: ${p}` : "",
            m && m !== "()"
              ? `       ${[
                  ...Array((f == null ? void 0 : f.length) ?? 0).keys(),
                ]
                  .map(() => " ")
                  .join("")}${m}`
              : "",
          ];
        }
      } catch (l) {
        o = l;
      }
    else s && (c = s);
    let u;
    o instanceof jm &&
      ((u = o.signature),
      (a = [
        `Unable to decode signature "${u}" as it was not found on the provided ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it.",
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`,
      ])),
      super(
        (c && c !== "execution reverted") || u
          ? [
              `The contract function "${r}" reverted with the following ${
                u ? "signature" : "reason"
              }:`,
              c || u,
            ].join(`
`)
          : `The contract function "${r}" reverted.`,
        { cause: o, metaMessages: a }
      ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ContractFunctionRevertedError",
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "reason", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "signature", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = i),
      (this.reason = c),
      (this.signature = u);
  }
}
class $2 extends K {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${t}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract.",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ContractFunctionZeroDataError",
      });
  }
}
class $u extends K {
  constructor({ data: t, message: n }) {
    super(n || ""),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "RawContractError",
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = t);
  }
}
class to extends K {
  constructor({ body: t, details: n, headers: r, status: s, url: o }) {
    super("HTTP request failed.", {
      details: n,
      metaMessages: [
        s && `Status: ${s}`,
        `URL: ${wa(o)}`,
        t && `Request body: ${wt(t)}`,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "HttpRequestError",
      }),
      Object.defineProperty(this, "body", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "headers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "status", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "url", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.body = t),
      (this.headers = r),
      (this.status = s),
      (this.url = o);
  }
}
class N2 extends K {
  constructor({ body: t, details: n, url: r }) {
    super("WebSocket request failed.", {
      details: n,
      metaMessages: [`URL: ${wa(r)}`, `Request body: ${wt(t)}`],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WebSocketRequestError",
      });
  }
}
class Nu extends K {
  constructor({ body: t, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${wa(r)}`, `Request body: ${wt(t)}`],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "RpcRequestError",
      }),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.code = n.code);
  }
}
class yl extends K {
  constructor({ body: t, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${wa(n)}`, `Request body: ${wt(t)}`],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TimeoutError",
      });
  }
}
const M2 = -1;
class St extends K {
  constructor(t, { code: n, docsPath: r, metaMessages: s, shortMessage: o }) {
    super(o, {
      cause: t,
      docsPath: r,
      metaMessages: s || (t == null ? void 0 : t.metaMessages),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "RpcError",
      }),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.name = t.name),
      (this.code = t instanceof Nu ? t.code : n ?? M2);
  }
}
class Es extends St {
  constructor(t, n) {
    super(t, n),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ProviderRpcError",
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = n.data);
  }
}
class wo extends St {
  constructor(t) {
    super(t, {
      code: wo.code,
      shortMessage:
        "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ParseRpcError",
      });
  }
}
Object.defineProperty(wo, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
});
class vo extends St {
  constructor(t) {
    super(t, {
      code: vo.code,
      shortMessage: "JSON is not a valid request object.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidRequestRpcError",
      });
  }
}
Object.defineProperty(vo, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
});
class Eo extends St {
  constructor(t) {
    super(t, {
      code: Eo.code,
      shortMessage: "The method does not exist / is not available.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "MethodNotFoundRpcError",
      });
  }
}
Object.defineProperty(Eo, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
});
class Co extends St {
  constructor(t) {
    super(t, {
      code: Co.code,
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParamsRpcError",
      });
  }
}
Object.defineProperty(Co, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
});
class ds extends St {
  constructor(t) {
    super(t, {
      code: ds.code,
      shortMessage: "An internal error was received.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InternalRpcError",
      });
  }
}
Object.defineProperty(ds, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
});
class Mr extends St {
  constructor(t) {
    super(t, {
      code: Mr.code,
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidInputRpcError",
      });
  }
}
Object.defineProperty(Mr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
});
class xo extends St {
  constructor(t) {
    super(t, { code: xo.code, shortMessage: "Requested resource not found." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceNotFoundRpcError",
      });
  }
}
Object.defineProperty(xo, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
});
class hs extends St {
  constructor(t) {
    super(t, {
      code: hs.code,
      shortMessage: "Requested resource not available.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceUnavailableRpcError",
      });
  }
}
Object.defineProperty(hs, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
});
class _o extends St {
  constructor(t) {
    super(t, { code: _o.code, shortMessage: "Transaction creation failed." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionRejectedRpcError",
      });
  }
}
Object.defineProperty(_o, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
});
class ko extends St {
  constructor(t) {
    super(t, { code: ko.code, shortMessage: "Method is not implemented." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "MethodNotSupportedRpcError",
      });
  }
}
Object.defineProperty(ko, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
});
class So extends St {
  constructor(t) {
    super(t, { code: So.code, shortMessage: "Request exceeds defined limit." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "LimitExceededRpcError",
      });
  }
}
Object.defineProperty(So, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
});
class Ao extends St {
  constructor(t) {
    super(t, {
      code: Ao.code,
      shortMessage: "Version of JSON-RPC protocol is not supported.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "JsonRpcVersionUnsupportedError",
      });
  }
}
Object.defineProperty(Ao, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
});
class Ut extends Es {
  constructor(t) {
    super(t, { code: Ut.code, shortMessage: "User rejected the request." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UserRejectedRequestError",
      });
  }
}
Object.defineProperty(Ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
});
class Po extends Es {
  constructor(t) {
    super(t, {
      code: Po.code,
      shortMessage:
        "The requested method and/or account has not been authorized by the user.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnauthorizedProviderError",
      });
  }
}
Object.defineProperty(Po, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
});
class To extends Es {
  constructor(t) {
    super(t, {
      code: To.code,
      shortMessage: "The Provider does not support the requested method.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnsupportedProviderMethodError",
      });
  }
}
Object.defineProperty(To, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
});
class Do extends Es {
  constructor(t) {
    super(t, {
      code: Do.code,
      shortMessage: "The Provider is disconnected from all chains.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ProviderDisconnectedError",
      });
  }
}
Object.defineProperty(Do, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
});
class Oo extends Es {
  constructor(t) {
    super(t, {
      code: Oo.code,
      shortMessage: "The Provider is not connected to the requested chain.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainDisconnectedError",
      });
  }
}
Object.defineProperty(Oo, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
});
class ar extends Es {
  constructor(t) {
    super(t, {
      code: ar.code,
      shortMessage: "An error occurred when attempting to switch chain.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SwitchChainError",
      });
  }
}
Object.defineProperty(ar, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
});
class U2 extends St {
  constructor(t) {
    super(t, { shortMessage: "An unknown RPC error occurred." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownRpcError",
      });
  }
}
const F2 = 3;
function Io(
  e,
  { abi: t, address: n, args: r, docsPath: s, functionName: o, sender: i }
) {
  const {
      code: a,
      data: c,
      message: u,
      shortMessage: l,
    } = e instanceof $u
      ? e
      : e instanceof K
      ? e.walk((h) => "data" in h) || e.walk()
      : {},
    f =
      e instanceof _a
        ? new $2({ functionName: o })
        : [F2, ds.code].includes(a) && (c || u || l)
        ? new gl({
            abi: t,
            data: typeof c == "object" ? c.data : c,
            functionName: o,
            message: l ?? u,
          })
        : e;
  return new Pa(f, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: o,
    sender: i,
  });
}
class Cs extends K {
  constructor({ docsPath: t } = {}) {
    super(
      [
        "Could not find an Account to execute with this Action.",
        "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",
      ].join(`
`),
      { docsPath: t, docsSlug: "account" }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AccountNotFoundError",
      });
  }
}
class B2 extends K {
  constructor(
    t,
    {
      account: n,
      docsPath: r,
      chain: s,
      data: o,
      gas: i,
      gasPrice: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: u,
      nonce: l,
      to: f,
      value: h,
    }
  ) {
    var m;
    const p = Vo({
      from: n == null ? void 0 : n.address,
      to: f,
      value:
        typeof h < "u" &&
        `${Iu(h)} ${
          ((m = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : m.symbol) || "ETH"
        }`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${_t(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${_t(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${_t(u)} gwei`,
      nonce: l,
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...(t.metaMessages ? [...t.metaMessages, " "] : []),
        "Estimate Gas Arguments:",
        p,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "EstimateGasExecutionError",
      }),
      (this.cause = t);
  }
}
function Mu(e, t) {
  const n = (e.details || "").toLowerCase(),
    r = e.walk((s) => s.code === Xr.code);
  return r instanceof K
    ? new Xr({ cause: e, message: r.details })
    : Xr.nodeMessage.test(n)
    ? new Xr({ cause: e, message: e.details })
    : ji.nodeMessage.test(n)
    ? new ji({ cause: e, maxFeePerGas: t == null ? void 0 : t.maxFeePerGas })
    : al.nodeMessage.test(n)
    ? new al({ cause: e, maxFeePerGas: t == null ? void 0 : t.maxFeePerGas })
    : cl.nodeMessage.test(n)
    ? new cl({ cause: e, nonce: t == null ? void 0 : t.nonce })
    : ll.nodeMessage.test(n)
    ? new ll({ cause: e, nonce: t == null ? void 0 : t.nonce })
    : ul.nodeMessage.test(n)
    ? new ul({ cause: e, nonce: t == null ? void 0 : t.nonce })
    : fl.nodeMessage.test(n)
    ? new fl({ cause: e })
    : dl.nodeMessage.test(n)
    ? new dl({ cause: e, gas: t == null ? void 0 : t.gas })
    : hl.nodeMessage.test(n)
    ? new hl({ cause: e, gas: t == null ? void 0 : t.gas })
    : pl.nodeMessage.test(n)
    ? new pl({ cause: e })
    : Hi.nodeMessage.test(n)
    ? new Hi({
        cause: e,
        maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
        maxPriorityFeePerGas: t == null ? void 0 : t.maxPriorityFeePerGas,
      })
    : new Ca({ cause: e });
}
function L2(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = Mu(e, n);
    return s instanceof Ca ? e : s;
  })();
  return new B2(r, { docsPath: t, ...n });
}
function Uu(e, { format: t }) {
  if (!t) return {};
  const n = {};
  function r(o) {
    const i = Object.keys(o);
    for (const a of i)
      a in e && (n[a] = e[a]),
        o[a] && typeof o[a] == "object" && !Array.isArray(o[a]) && r(o[a]);
  }
  const s = t(e || {});
  return r(s), n;
}
function Ko(e) {
  const {
      account: t,
      gasPrice: n,
      maxFeePerGas: r,
      maxPriorityFeePerGas: s,
      to: o,
    } = e,
    i = t ? jt(t) : void 0;
  if (i && !ir(i.address)) throw new go({ address: i.address });
  if (o && !ir(o)) throw new go({ address: o });
  if (typeof n < "u" && (typeof r < "u" || typeof s < "u")) throw new T2();
  if (r && r > 2n ** 256n - 1n) throw new ji({ maxFeePerGas: r });
  if (s && r && s > r)
    throw new Hi({ maxFeePerGas: r, maxPriorityFeePerGas: s });
}
class R2 extends K {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BaseFeeScalarError",
      });
  }
}
class Fu extends K {
  constructor() {
    super("Chain does not support EIP-1559 fees."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Eip1559FeesNotSupportedError",
      });
  }
}
class j2 extends K {
  constructor({ maxPriorityFeePerGas: t }) {
    super(
      `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${_t(
        t
      )} gwei).`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "MaxFeePerGasTooLowError",
      });
  }
}
class rb extends K {
  constructor({ blockHash: t, blockNumber: n }) {
    let r = "Block";
    t && (r = `Block at hash "${t}"`),
      n && (r = `Block at number "${n}"`),
      super(`${r} could not be found.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BlockNotFoundError",
      });
  }
}
async function cr(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: s } = {}
) {
  var l, f, h;
  const o = r ?? "latest",
    i = s ?? !1,
    a = n !== void 0 ? ye(n) : void 0;
  let c = null;
  if (
    (t
      ? (c = await e.request({ method: "eth_getBlockByHash", params: [t, i] }))
      : (c = await e.request({
          method: "eth_getBlockByNumber",
          params: [a || o, i],
        })),
    !c)
  )
    throw new rb({ blockHash: t, blockNumber: n });
  return (
    ((h =
      (f = (l = e.chain) == null ? void 0 : l.formatters) == null
        ? void 0
        : f.block) == null
      ? void 0
      : h.format) || Lm
  )(c);
}
async function Bu(e) {
  const t = await e.request({ method: "eth_gasPrice" });
  return BigInt(t);
}
async function H2(e, t) {
  return sb(e, t);
}
async function sb(e, t) {
  var o, i, a;
  const { block: n, chain: r = e.chain, request: s } = t || {};
  if (
    typeof ((o = r == null ? void 0 : r.fees) == null
      ? void 0
      : o.defaultPriorityFee) == "function"
  ) {
    const c = n || (await ae(e, cr, "getBlock")({}));
    return r.fees.defaultPriorityFee({ block: c, client: e, request: s });
  }
  if (
    typeof ((i = r == null ? void 0 : r.fees) == null
      ? void 0
      : i.defaultPriorityFee) < "u"
  )
    return (a = r == null ? void 0 : r.fees) == null
      ? void 0
      : a.defaultPriorityFee;
  try {
    const c = await e.request({ method: "eth_maxPriorityFeePerGas" });
    return va(c);
  } catch {
    const [c, u] = await Promise.all([
      n ? Promise.resolve(n) : ae(e, cr, "getBlock")({}),
      ae(e, Bu, "getGasPrice")({}),
    ]);
    if (typeof c.baseFeePerGas != "bigint") throw new Fu();
    const l = u - c.baseFeePerGas;
    return l < 0n ? 0n : l;
  }
}
async function z2(e, t) {
  return wl(e, t);
}
async function wl(e, t) {
  var h, p;
  const {
      block: n,
      chain: r = e.chain,
      request: s,
      type: o = "eip1559",
    } = t || {},
    i = await (async () => {
      var m, g;
      return typeof ((m = r == null ? void 0 : r.fees) == null
        ? void 0
        : m.baseFeeMultiplier) == "function"
        ? r.fees.baseFeeMultiplier({ block: n, client: e, request: s })
        : ((g = r == null ? void 0 : r.fees) == null
            ? void 0
            : g.baseFeeMultiplier) ?? 1.2;
    })();
  if (i < 1) throw new R2();
  const c =
      10 **
      (((h = i.toString().split(".")[1]) == null ? void 0 : h.length) ?? 0),
    u = (m) => (m * BigInt(Math.ceil(i * c))) / BigInt(c),
    l = n || (await ae(e, cr, "getBlock")({}));
  if (
    typeof ((p = r == null ? void 0 : r.fees) == null
      ? void 0
      : p.estimateFeesPerGas) == "function"
  )
    return r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: u,
      request: s,
      type: o,
    });
  if (o === "eip1559") {
    if (typeof l.baseFeePerGas != "bigint") throw new Fu();
    const m =
        s != null && s.maxPriorityFeePerGas
          ? s.maxPriorityFeePerGas
          : await sb(e, { block: l, chain: r, request: s }),
      g = u(l.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? g + m,
      maxPriorityFeePerGas: m,
    };
  }
  return {
    gasPrice:
      (s == null ? void 0 : s.gasPrice) ??
      u(await ae(e, Bu, "getGasPrice")({})),
  };
}
async function ob(e, { address: t, blockTag: n = "latest", blockNumber: r }) {
  const s = await e.request({
    method: "eth_getTransactionCount",
    params: [t, r ? ye(r) : n],
  });
  return ht(s);
}
function W2(e) {
  if (e.type) return e.type;
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new D2({ transaction: e });
}
async function Ta(e, t) {
  const { account: n = e.account, chain: r, gas: s, nonce: o, type: i } = t;
  if (!n) throw new Cs();
  const a = jt(n),
    c = await ae(e, cr, "getBlock")({ blockTag: "latest" }),
    u = { ...t, from: a.address };
  if (
    (typeof o > "u" &&
      (u.nonce = await ae(
        e,
        ob,
        "getTransactionCount"
      )({ address: a.address, blockTag: "pending" })),
    typeof i > "u")
  )
    try {
      u.type = W2(u);
    } catch {
      u.type = typeof c.baseFeePerGas == "bigint" ? "eip1559" : "legacy";
    }
  if (u.type === "eip1559") {
    const { maxFeePerGas: l, maxPriorityFeePerGas: f } = await wl(e, {
      block: c,
      chain: r,
      request: u,
    });
    if (
      typeof t.maxPriorityFeePerGas > "u" &&
      t.maxFeePerGas &&
      t.maxFeePerGas < f
    )
      throw new j2({ maxPriorityFeePerGas: f });
    (u.maxPriorityFeePerGas = f), (u.maxFeePerGas = l);
  } else {
    if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
      throw new Fu();
    const { gasPrice: l } = await wl(e, {
      block: c,
      chain: r,
      request: u,
      type: "legacy",
    });
    u.gasPrice = l;
  }
  return (
    typeof s > "u" &&
      (u.gas = await ae(
        e,
        Lu,
        "estimateGas"
      )({ ...u, account: { address: a.address, type: "json-rpc" } })),
    Ko(u),
    u
  );
}
async function Lu(e, t) {
  var s, o, i;
  const n = t.account ?? e.account;
  if (!n) throw new Cs({ docsPath: "/docs/actions/public/estimateGas" });
  const r = jt(n);
  try {
    const {
        accessList: a,
        blockNumber: c,
        blockTag: u,
        data: l,
        gas: f,
        gasPrice: h,
        maxFeePerGas: p,
        maxPriorityFeePerGas: m,
        nonce: g,
        to: y,
        value: k,
        ...b
      } = r.type === "local" ? await Ta(e, t) : t,
      v = (c ? ye(c) : void 0) || u;
    Ko(t);
    const w =
        (i =
          (o = (s = e.chain) == null ? void 0 : s.formatters) == null
            ? void 0
            : o.transactionRequest) == null
          ? void 0
          : i.format,
      d = (w || Ea)({
        ...Uu(b, { format: w }),
        from: r.address,
        accessList: a,
        data: l,
        gas: f,
        gasPrice: h,
        maxFeePerGas: p,
        maxPriorityFeePerGas: m,
        nonce: g,
        to: y,
        value: k,
      }),
      C = await e.request({
        method: "eth_estimateGas",
        params: v ? [d, v] : [d],
      });
    return BigInt(C);
  } catch (a) {
    throw L2(a, { ...t, account: r, chain: e.chain });
  }
}
async function q2(e, { abi: t, address: n, args: r, functionName: s, ...o }) {
  const i = pr({ abi: t, args: r, functionName: s });
  try {
    return await ae(e, Lu, "estimateGas")({ data: i, to: n, ...o });
  } catch (a) {
    const c = o.account ? jt(o.account) : void 0;
    throw Io(a, {
      abi: t,
      address: n,
      args: r,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: s,
      sender: c == null ? void 0 : c.address,
    });
  }
}
const xd = "/docs/contract/decodeEventLog";
function Xo({ abi: e, data: t, strict: n, topics: r }) {
  const s = n ?? !0,
    [o, ...i] = r;
  if (!o) throw new kv({ docsPath: xd });
  const a = e.find((m) => m.type === "event" && o === Au($n(m)));
  if (!(a && "name" in a) || a.type !== "event")
    throw new Sv(o, { docsPath: xd });
  const { name: c, inputs: u } = a,
    l = u == null ? void 0 : u.some((m) => !("name" in m && m.name));
  let f = l ? [] : {};
  const h = u.filter((m) => "indexed" in m && m.indexed);
  for (let m = 0; m < h.length; m++) {
    const g = h[m],
      y = i[m];
    if (!y) throw new vs({ abiItem: a, param: g });
    f[g.name || m] = G2({ param: g, value: y });
  }
  const p = u.filter((m) => !("indexed" in m && m.indexed));
  if (p.length > 0) {
    if (t && t !== "0x")
      try {
        const m = Aa(p, t);
        if (m)
          if (l) f = [...f, ...m];
          else for (let g = 0; g < p.length; g++) f[p[g].name] = m[g];
      } catch (m) {
        if (s)
          throw m instanceof ku
            ? new Nr({
                abiItem: a,
                data: m.data,
                params: m.params,
                size: m.size,
              })
            : m;
      }
    else if (s) throw new Nr({ abiItem: a, data: "0x", params: p, size: 0 });
  }
  return { eventName: c, args: Object.values(f).length > 0 ? f : void 0 };
}
function G2({ param: e, value: t }) {
  return e.type === "string" ||
    e.type === "bytes" ||
    e.type === "tuple" ||
    e.type.match(/^(.*)\[(\d+)?\]$/)
    ? t
    : (Aa([e], t) || [])[0];
}
async function Ru(
  e,
  {
    address: t,
    blockHash: n,
    fromBlock: r,
    toBlock: s,
    event: o,
    events: i,
    args: a,
    strict: c,
  } = {}
) {
  const u = c ?? !1,
    l = i ?? (o ? [o] : void 0);
  let f = [];
  l &&
    ((f = [l.flatMap((p) => Go({ abi: [p], eventName: p.name, args: a }))]),
    o && (f = f[0]));
  let h;
  return (
    n
      ? (h = await e.request({
          method: "eth_getLogs",
          params: [{ address: t, topics: f, blockHash: n }],
        }))
      : (h = await e.request({
          method: "eth_getLogs",
          params: [
            {
              address: t,
              topics: f,
              fromBlock: typeof r == "bigint" ? ye(r) : r,
              toBlock: typeof s == "bigint" ? ye(s) : s,
            },
          ],
        })),
    h
      .map((p) => {
        var m;
        try {
          const { eventName: g, args: y } = l
            ? Xo({ abi: l, data: p.data, topics: p.topics, strict: u })
            : { eventName: void 0, args: void 0 };
          return Zt(p, { args: y, eventName: g });
        } catch (g) {
          let y, k;
          if (g instanceof Nr || g instanceof vs) {
            if (u) return;
            (y = g.abiItem.name),
              (k =
                (m = g.abiItem.inputs) == null
                  ? void 0
                  : m.some((b) => !("name" in b && b.name)));
          }
          return Zt(p, { args: k ? [] : {}, eventName: y });
        }
      })
      .filter(Boolean)
  );
}
async function ib(
  e,
  {
    abi: t,
    address: n,
    args: r,
    blockHash: s,
    eventName: o,
    fromBlock: i,
    toBlock: a,
    strict: c,
  }
) {
  const u = o ? qo({ abi: t, name: o }) : void 0,
    l = u ? void 0 : t.filter((f) => f.type === "event");
  return ae(
    e,
    Ru,
    "getLogs"
  )({
    address: n,
    args: r,
    blockHash: s,
    event: u,
    events: l,
    fromBlock: i,
    toBlock: a,
    strict: c,
  });
}
const mc = "/docs/contract/decodeFunctionResult";
function xs({ abi: e, args: t, functionName: n, data: r }) {
  let s = e[0];
  if (n && ((s = qo({ abi: e, args: t, name: n })), !s))
    throw new zi(n, { docsPath: mc });
  if (s.type !== "function") throw new zi(void 0, { docsPath: mc });
  if (!s.outputs) throw new Av(s.name, { docsPath: mc });
  const o = Aa(s.outputs, r);
  if (o && o.length > 1) return o;
  if (o && o.length === 1) return o[0];
}
const V2 = "modulepreload",
  K2 = function (e) {
    return "/" + e;
  },
  _d = {},
  Wt = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        a =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      s = Promise.allSettled(
        n.map((c) => {
          if (((c = K2(c)), c in _d)) return;
          _d[c] = !0;
          const u = c.endsWith(".css"),
            l = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${l}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : V2),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = c),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((h, p) => {
              f.addEventListener("load", h),
                f.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${c}`))
                );
            });
        })
      );
    }
    function o(i) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented))
        throw i;
    }
    return s.then((i) => {
      for (const a of i || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
    });
  },
  vl = [
    {
      inputs: [
        {
          components: [
            { name: "target", type: "address" },
            { name: "allowFailure", type: "bool" },
            { name: "callData", type: "bytes" },
          ],
          name: "calls",
          type: "tuple[]",
        },
      ],
      name: "aggregate3",
      outputs: [
        {
          components: [
            { name: "success", type: "bool" },
            { name: "returnData", type: "bytes" },
          ],
          name: "returnData",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  ab = [
    { inputs: [], name: "ResolverNotFound", type: "error" },
    { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
  ],
  cb = [
    ...ab,
    {
      name: "resolve",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" },
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" },
      ],
    },
  ],
  X2 = [
    ...ab,
    {
      name: "reverse",
      type: "function",
      stateMutability: "view",
      inputs: [{ type: "bytes", name: "reverseName" }],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolvedAddress" },
        { type: "address", name: "reverseResolver" },
        { type: "address", name: "resolver" },
      ],
    },
  ],
  kd = [
    {
      name: "text",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "key", type: "string" },
      ],
      outputs: [{ name: "", type: "string" }],
    },
  ],
  Sd = [
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [{ name: "name", type: "bytes32" }],
      outputs: [{ name: "", type: "address" }],
    },
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "coinType", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bytes" }],
    },
  ],
  Y2 = [
    {
      inputs: [
        { internalType: "address", name: "_signer", type: "address" },
        { internalType: "bytes32", name: "_hash", type: "bytes32" },
        { internalType: "bytes", name: "_signature", type: "bytes" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
  ],
  Z2 = "0x82ad56cb";
function _s({ blockNumber: e, chain: t, contract: n }) {
  var s;
  const r = (s = t == null ? void 0 : t.contracts) == null ? void 0 : s[n];
  if (!r) throw new il({ chain: t, contract: { name: n } });
  if (e && r.blockCreated && r.blockCreated > e)
    throw new il({
      blockNumber: e,
      chain: t,
      contract: { name: n, blockCreated: r.blockCreated },
    });
  return r.address;
}
function J2(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = Mu(e, n);
    return s instanceof Ca ? e : s;
  })();
  return new nb(r, { docsPath: t, ...n });
}
const bc = new Map();
function ju({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const o = async () => {
      const l = c();
      i();
      const f = l.map(({ args: h }) => h);
      f.length !== 0 &&
        e(f)
          .then((h) => {
            var p;
            s && Array.isArray(h) && h.sort(s);
            for (let m = 0; m < l.length; m++) {
              const { pendingPromise: g } = l[m];
              (p = g.resolve) == null || p.call(g, [h[m], h]);
            }
          })
          .catch((h) => {
            var p;
            for (let m = 0; m < l.length; m++) {
              const { pendingPromise: g } = l[m];
              (p = g.reject) == null || p.call(g, h);
            }
          });
    },
    i = () => bc.delete(t),
    a = () => c().map(({ args: l }) => l),
    c = () => bc.get(t) || [],
    u = (l) => bc.set(t, [...c(), l]);
  return {
    flush: i,
    async schedule(l) {
      const f = {},
        h = new Promise((g, y) => {
          (f.resolve = g), (f.reject = y);
        });
      return (
        (n == null ? void 0 : n([...a(), l])) && o(),
        c().length > 0
          ? (u({ args: l, pendingPromise: f }), h)
          : (u({ args: l, pendingPromise: f }), setTimeout(o, r), h)
      );
    },
  };
}
async function Da(e, t) {
  var k, b, E, v;
  const {
      account: n = e.account,
      batch: r = !!((k = e.batch) != null && k.multicall),
      blockNumber: s,
      blockTag: o = "latest",
      accessList: i,
      data: a,
      gas: c,
      gasPrice: u,
      maxFeePerGas: l,
      maxPriorityFeePerGas: f,
      nonce: h,
      to: p,
      value: m,
      ...g
    } = t,
    y = n ? jt(n) : void 0;
  try {
    Ko(t);
    const x = (s ? ye(s) : void 0) || o,
      d =
        (v =
          (E = (b = e.chain) == null ? void 0 : b.formatters) == null
            ? void 0
            : E.transactionRequest) == null
          ? void 0
          : v.format,
      A = (d || Ea)({
        ...Uu(g, { format: d }),
        from: y == null ? void 0 : y.address,
        accessList: i,
        data: a,
        gas: c,
        gasPrice: u,
        maxFeePerGas: l,
        maxPriorityFeePerGas: f,
        nonce: h,
        to: p,
        value: m,
      });
    if (r && Q2({ request: A }))
      try {
        return await eE(e, { ...A, blockNumber: s, blockTag: o });
      } catch (I) {
        if (!(I instanceof Rm) && !(I instanceof il)) throw I;
      }
    const $ = await e.request({ method: "eth_call", params: x ? [A, x] : [A] });
    return $ === "0x" ? { data: void 0 } : { data: $ };
  } catch (w) {
    const x = tE(w),
      { offchainLookup: d, offchainLookupSignature: C } = await Wt(async () => {
        const { offchainLookup: A, offchainLookupSignature: $ } = await import(
          "./ccip.DZcqR0R9.js"
        );
        return { offchainLookup: A, offchainLookupSignature: $ };
      }, []);
    if ((x == null ? void 0 : x.slice(0, 10)) === C && p)
      return { data: await d(e, { data: x, to: p }) };
    throw J2(w, { ...t, account: y, chain: e.chain });
  }
}
function Q2({ request: e }) {
  const { data: t, to: n, ...r } = e;
  return !(
    !t ||
    t.startsWith(Z2) ||
    !n ||
    Object.values(r).filter((s) => typeof s < "u").length > 0
  );
}
async function eE(e, t) {
  var g;
  const { batchSize: n = 1024, wait: r = 0 } =
      typeof ((g = e.batch) == null ? void 0 : g.multicall) == "object"
        ? e.batch.multicall
        : {},
    {
      blockNumber: s,
      blockTag: o = "latest",
      data: i,
      multicallAddress: a,
      to: c,
    } = t;
  let u = a;
  if (!u) {
    if (!e.chain) throw new Rm();
    u = _s({ blockNumber: s, chain: e.chain, contract: "multicall3" });
  }
  const f = (s ? ye(s) : void 0) || o,
    { schedule: h } = ju({
      id: `${e.uid}.${f}`,
      wait: r,
      shouldSplitBatch(y) {
        return y.reduce((b, { data: E }) => b + (E.length - 2), 0) > n * 2;
      },
      fn: async (y) => {
        const k = y.map((v) => ({
            allowFailure: !0,
            callData: v.data,
            target: v.to,
          })),
          b = pr({ abi: vl, args: [k], functionName: "aggregate3" }),
          E = await e.request({
            method: "eth_call",
            params: [{ data: b, to: u }, f],
          });
        return xs({
          abi: vl,
          args: [k],
          functionName: "aggregate3",
          data: E || "0x",
        });
      },
    }),
    [{ returnData: p, success: m }] = await h({ data: i, to: c });
  if (!m) throw new $u({ data: p });
  return p === "0x" ? { data: void 0 } : { data: p };
}
function tE(e) {
  if (!(e instanceof K)) return;
  const t = e.walk();
  return typeof t.data == "object" ? t.data.data : t.data;
}
async function lr(e, { abi: t, address: n, args: r, functionName: s, ...o }) {
  const i = pr({ abi: t, args: r, functionName: s });
  try {
    const { data: a } = await ae(e, Da, "call")({ data: i, to: n, ...o });
    return xs({ abi: t, args: r, functionName: s, data: a || "0x" });
  } catch (a) {
    throw Io(a, {
      abi: t,
      address: n,
      args: r,
      docsPath: "/docs/contract/readContract",
      functionName: s,
    });
  }
}
async function nE(
  e,
  { abi: t, address: n, args: r, dataSuffix: s, functionName: o, ...i }
) {
  const a = i.account ? jt(i.account) : void 0,
    c = pr({ abi: t, args: r, functionName: o });
  try {
    const { data: u } = await ae(
      e,
      Da,
      "call"
    )({ batch: !1, data: `${c}${s ? s.replace("0x", "") : ""}`, to: n, ...i });
    return {
      result: xs({ abi: t, args: r, functionName: o, data: u || "0x" }),
      request: {
        abi: t,
        address: n,
        args: r,
        dataSuffix: s,
        functionName: o,
        ...i,
      },
    };
  } catch (u) {
    throw Io(u, {
      abi: t,
      address: n,
      args: r,
      docsPath: "/docs/contract/simulateContract",
      functionName: o,
      sender: a == null ? void 0 : a.address,
    });
  }
}
const gc = new Map(),
  Ad = new Map();
let rE = 0;
function ks(e, t, n) {
  const r = ++rE,
    s = () => gc.get(e) || [],
    o = () => {
      const l = s();
      gc.set(
        e,
        l.filter((f) => f.id !== r)
      );
    },
    i = () => {
      const l = Ad.get(e);
      s().length === 1 && l && l(), o();
    },
    a = s();
  if ((gc.set(e, [...a, { id: r, fns: t }]), a && a.length > 0)) return i;
  const c = {};
  for (const l in t)
    c[l] = (...f) => {
      var p, m;
      const h = s();
      if (h.length !== 0)
        for (const g of h) (m = (p = g.fns)[l]) == null || m.call(p, ...f);
    };
  const u = n(c);
  return typeof u == "function" && Ad.set(e, u), i;
}
async function qi(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Yo(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let s = !0;
  const o = () => (s = !1);
  return (
    (async () => {
      let a;
      t && (a = await e({ unpoll: o }));
      const c = (await (n == null ? void 0 : n(a))) ?? r;
      await qi(c);
      const u = async () => {
        s && (await e({ unpoll: o }), await qi(r), u());
      };
      u();
    })(),
    o
  );
}
const sE = new Map(),
  oE = new Map();
function iE(e) {
  const t = (s, o) => ({
      clear: () => o.delete(s),
      get: () => o.get(s),
      set: (i) => o.set(s, i),
    }),
    n = t(e, sE),
    r = t(e, oE);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r,
  };
}
async function aE(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
  const r = iE(t),
    s = r.response.get();
  if (s && n > 0 && new Date().getTime() - s.created.getTime() < n)
    return s.data;
  let o = r.promise.get();
  o || ((o = e()), r.promise.set(o));
  try {
    const i = await o;
    return r.response.set({ created: new Date(), data: i }), i;
  } finally {
    r.promise.clear();
  }
}
const cE = (e) => `blockNumber.${e}`;
async function Zo(e, { cacheTime: t = e.cacheTime, maxAge: n } = {}) {
  const r = await aE(() => e.request({ method: "eth_blockNumber" }), {
    cacheKey: cE(e.uid),
    cacheTime: n ?? t,
  });
  return BigInt(r);
}
async function Oa(e, { filter: t }) {
  const n = "strict" in t && t.strict;
  return (await t.request({ method: "eth_getFilterChanges", params: [t.id] }))
    .map((s) => {
      var o;
      if (typeof s == "string") return s;
      try {
        const { eventName: i, args: a } =
          "abi" in t && t.abi
            ? Xo({ abi: t.abi, data: s.data, topics: s.topics, strict: n })
            : { eventName: void 0, args: void 0 };
        return Zt(s, { args: a, eventName: i });
      } catch (i) {
        let a, c;
        if (i instanceof Nr || i instanceof vs) {
          if ("strict" in t && t.strict) return;
          (a = i.abiItem.name),
            (c =
              (o = i.abiItem.inputs) == null
                ? void 0
                : o.some((u) => !("name" in u && u.name)));
        }
        return Zt(s, { args: c ? [] : {}, eventName: a });
      }
    })
    .filter(Boolean);
}
async function Ia(e, { filter: t }) {
  return t.request({ method: "eth_uninstallFilter", params: [t.id] });
}
function lE(
  e,
  {
    abi: t,
    address: n,
    args: r,
    batch: s = !0,
    eventName: o,
    onError: i,
    onLogs: a,
    poll: c,
    pollingInterval: u = e.pollingInterval,
    strict: l,
  }
) {
  return (typeof c < "u" ? c : e.transport.type !== "webSocket")
    ? (() => {
        const m = wt(["watchContractEvent", n, r, s, e.uid, o, u]),
          g = l ?? !1;
        return ks(m, { onLogs: a, onError: i }, (y) => {
          let k,
            b,
            E = !1;
          const v = Yo(
            async () => {
              var w;
              if (!E) {
                try {
                  b = await ae(
                    e,
                    Zm,
                    "createContractEventFilter"
                  )({ abi: t, address: n, args: r, eventName: o, strict: g });
                } catch {}
                E = !0;
                return;
              }
              try {
                let x;
                if (b) x = await ae(e, Oa, "getFilterChanges")({ filter: b });
                else {
                  const d = await ae(e, Zo, "getBlockNumber")({});
                  k && k !== d
                    ? (x = await ae(
                        e,
                        ib,
                        "getContractEvents"
                      )({
                        abi: t,
                        address: n,
                        args: r,
                        eventName: o,
                        fromBlock: k + 1n,
                        toBlock: d,
                        strict: g,
                      }))
                    : (x = []),
                    (k = d);
                }
                if (x.length === 0) return;
                if (s) y.onLogs(x);
                else for (const d of x) y.onLogs([d]);
              } catch (x) {
                b && x instanceof Mr && (E = !1),
                  (w = y.onError) == null || w.call(y, x);
              }
            },
            { emitOnBegin: !0, interval: u }
          );
          return async () => {
            b && (await ae(e, Ia, "uninstallFilter")({ filter: b })), v();
          };
        });
      })()
    : (() => {
        let m = !0,
          g = () => (m = !1);
        return (
          (async () => {
            try {
              const y = o ? Go({ abi: t, eventName: o, args: r }) : [],
                { unsubscribe: k } = await e.transport.subscribe({
                  params: ["logs", { address: n, topics: y }],
                  onData(b) {
                    var v;
                    if (!m) return;
                    const E = b.result;
                    try {
                      const { eventName: w, args: x } = Xo({
                          abi: t,
                          data: E.data,
                          topics: E.topics,
                          strict: l,
                        }),
                        d = Zt(E, { args: x, eventName: w });
                      a([d]);
                    } catch (w) {
                      let x, d;
                      if (w instanceof Nr || w instanceof vs) {
                        if (l) return;
                        (x = w.abiItem.name),
                          (d =
                            (v = w.abiItem.inputs) == null
                              ? void 0
                              : v.some((A) => !("name" in A && A.name)));
                      }
                      const C = Zt(E, { args: d ? [] : {}, eventName: x });
                      a([C]);
                    }
                  },
                  onError(b) {
                    i == null || i(b);
                  },
                });
              (g = k), m || g();
            } catch (y) {
              i == null || i(y);
            }
          })(),
          g
        );
      })();
}
function lb({ chain: e, currentChainId: t }) {
  if (!e) throw new dv();
  if (t !== e.id) throw new fv({ chain: e, currentChainId: t });
}
function uE(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = Mu(e, n);
    return s instanceof Ca ? e : s;
  })();
  return new O2(r, { docsPath: t, ...n });
}
async function $o(e) {
  const t = await e.request({ method: "eth_chainId" });
  return ht(t);
}
async function Hu(e, { serializedTransaction: t }) {
  return e.request({ method: "eth_sendRawTransaction", params: [t] });
}
async function zu(e, t) {
  var g, y, k, b;
  const {
    account: n = e.account,
    chain: r = e.chain,
    accessList: s,
    data: o,
    gas: i,
    gasPrice: a,
    maxFeePerGas: c,
    maxPriorityFeePerGas: u,
    nonce: l,
    to: f,
    value: h,
    ...p
  } = t;
  if (!n) throw new Cs({ docsPath: "/docs/actions/wallet/sendTransaction" });
  const m = jt(n);
  try {
    Ko(t);
    let E;
    if (
      (r !== null &&
        ((E = await ae(e, $o, "getChainId")({})),
        lb({ currentChainId: E, chain: r })),
      m.type === "local")
    ) {
      const d = await ae(
        e,
        Ta,
        "prepareTransactionRequest"
      )({
        account: m,
        accessList: s,
        chain: r,
        data: o,
        gas: i,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: u,
        nonce: l,
        to: f,
        value: h,
        ...p,
      });
      E || (E = await ae(e, $o, "getChainId")({}));
      const C =
          (g = r == null ? void 0 : r.serializers) == null
            ? void 0
            : g.transaction,
        A = await m.signTransaction({ ...d, chainId: E }, { serializer: C });
      return await ae(
        e,
        Hu,
        "sendRawTransaction"
      )({ serializedTransaction: A });
    }
    const v =
        (b =
          (k = (y = e.chain) == null ? void 0 : y.formatters) == null
            ? void 0
            : k.transactionRequest) == null
          ? void 0
          : b.format,
      x = (v || Ea)({
        ...Uu(p, { format: v }),
        accessList: s,
        data: o,
        from: m.address,
        gas: i,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: u,
        nonce: l,
        to: f,
        value: h,
      });
    return await e.request({ method: "eth_sendTransaction", params: [x] });
  } catch (E) {
    throw uE(E, { ...t, account: m, chain: t.chain || void 0 });
  }
}
async function fE(
  e,
  { abi: t, address: n, args: r, dataSuffix: s, functionName: o, ...i }
) {
  const a = pr({ abi: t, args: r, functionName: o });
  return await ae(
    e,
    zu,
    "sendTransaction"
  )({ data: `${a}${s ? s.replace("0x", "") : ""}`, to: n, ...i });
}
async function dE(e, { chain: t }) {
  const {
    id: n,
    name: r,
    nativeCurrency: s,
    rpcUrls: o,
    blockExplorers: i,
  } = t;
  await e.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: ye(n),
        chainName: r,
        nativeCurrency: s,
        rpcUrls: o.default.http,
        blockExplorerUrls: i ? Object.values(i).map(({ url: a }) => a) : void 0,
      },
    ],
  });
}
const El = 256;
let ui = El,
  fi;
function hE(e = 11) {
  if (!fi || ui + e > El * 2) {
    (fi = ""), (ui = 0);
    for (let t = 0; t < El; t++)
      fi += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return fi.substring(ui, ui++ + e);
}
function ub(e) {
  const {
      batch: t,
      cacheTime: n = e.pollingInterval ?? 4e3,
      key: r = "base",
      name: s = "Base Client",
      pollingInterval: o = 4e3,
      type: i = "base",
    } = e,
    a = e.chain,
    c = e.account ? jt(e.account) : void 0,
    {
      config: u,
      request: l,
      value: f,
    } = e.transport({ chain: a, pollingInterval: o }),
    h = { ...u, ...f },
    p = {
      account: c,
      batch: t,
      cacheTime: n,
      chain: a,
      key: r,
      name: s,
      pollingInterval: o,
      request: l,
      transport: h,
      type: i,
      uid: hE(),
    };
  function m(g) {
    return (y) => {
      const k = y(g);
      for (const E in p) delete k[E];
      const b = { ...g, ...k };
      return Object.assign(b, { extend: m(b) });
    };
  }
  return Object.assign(p, { extend: m(p) });
}
function Cl(
  e,
  { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}
) {
  return new Promise((s, o) => {
    const i = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: u }) => {
        const l = typeof t == "function" ? t({ count: a, error: u }) : t;
        l && (await qi(l)), i({ count: a + 1 });
      };
      try {
        const u = await e();
        s(u);
      } catch (u) {
        if (a < n && (await r({ count: a, error: u }))) return c({ error: u });
        o(u);
      }
    };
    i();
  });
}
const fb = (e) =>
  "code" in e
    ? e.code !== -1 &&
      e.code !== -32004 &&
      e.code !== -32005 &&
      e.code !== -32042 &&
      e.code !== -32603
    : e instanceof to && e.status
    ? e.status !== 403 &&
      e.status !== 408 &&
      e.status !== 413 &&
      e.status !== 429 &&
      e.status !== 500 &&
      e.status !== 502 &&
      e.status !== 503 &&
      e.status !== 504
    : !1;
function pE(e, { retryDelay: t = 150, retryCount: n = 3 } = {}) {
  return async (r) =>
    Cl(
      async () => {
        try {
          return await e(r);
        } catch (s) {
          const o = s;
          switch (o.code) {
            case wo.code:
              throw new wo(o);
            case vo.code:
              throw new vo(o);
            case Eo.code:
              throw new Eo(o);
            case Co.code:
              throw new Co(o);
            case ds.code:
              throw new ds(o);
            case Mr.code:
              throw new Mr(o);
            case xo.code:
              throw new xo(o);
            case hs.code:
              throw new hs(o);
            case _o.code:
              throw new _o(o);
            case ko.code:
              throw new ko(o);
            case So.code:
              throw new So(o);
            case Ao.code:
              throw new Ao(o);
            case Ut.code:
              throw new Ut(o);
            case Po.code:
              throw new Po(o);
            case To.code:
              throw new To(o);
            case Do.code:
              throw new Do(o);
            case Oo.code:
              throw new Oo(o);
            case ar.code:
              throw new ar(o);
            case 5e3:
              throw new Ut(o);
            default:
              throw s instanceof K ? s : new U2(o);
          }
        }
      },
      {
        delay: ({ count: s, error: o }) => {
          var i;
          if (o && o instanceof to) {
            const a =
              (i = o == null ? void 0 : o.headers) == null
                ? void 0
                : i.get("Retry-After");
            if (a != null && a.match(/\d/)) return parseInt(a) * 1e3;
          }
          return ~~(1 << s) * t;
        },
        retryCount: n,
        shouldRetry: ({ error: s }) => !fb(s),
      }
    );
}
function $a(
  {
    key: e,
    name: t,
    request: n,
    retryCount: r = 3,
    retryDelay: s = 150,
    timeout: o,
    type: i,
  },
  a
) {
  return {
    config: {
      key: e,
      name: t,
      request: n,
      retryCount: r,
      retryDelay: s,
      timeout: o,
      type: i,
    },
    request: pE(n, { retryCount: r, retryDelay: s }),
    value: a,
  };
}
function db(e, t = {}) {
  const { key: n = "custom", name: r = "Custom Provider", retryDelay: s } = t;
  return ({ retryCount: o }) =>
    $a({
      key: n,
      name: r,
      request: e.request.bind(e),
      retryCount: t.retryCount ?? o,
      retryDelay: s,
      type: "custom",
    });
}
function Pd(e, t = {}) {
  const {
    key: n = "fallback",
    name: r = "Fallback",
    rank: s = !1,
    retryCount: o,
    retryDelay: i,
  } = t;
  return ({ chain: a, pollingInterval: c = 4e3, timeout: u }) => {
    let l = e,
      f = () => {};
    const h = $a(
      {
        key: n,
        name: r,
        async request({ method: p, params: m }) {
          const g = async (y = 0) => {
            const k = l[y]({ chain: a, retryCount: 0, timeout: u });
            try {
              const b = await k.request({ method: p, params: m });
              return (
                f({
                  method: p,
                  params: m,
                  response: b,
                  transport: k,
                  status: "success",
                }),
                b
              );
            } catch (b) {
              if (
                (f({
                  error: b,
                  method: p,
                  params: m,
                  transport: k,
                  status: "error",
                }),
                fb(b) || y === l.length - 1)
              )
                throw b;
              return g(y + 1);
            }
          };
          return g();
        },
        retryCount: o,
        retryDelay: i,
        type: "fallback",
      },
      {
        onResponse: (p) => (f = p),
        transports: l.map((p) => p({ chain: a, retryCount: 0 })),
      }
    );
    if (s) {
      const p = typeof s == "object" ? s : {};
      mE({
        chain: a,
        interval: p.interval ?? c,
        onTransports: (m) => (l = m),
        sampleCount: p.sampleCount,
        timeout: p.timeout,
        transports: l,
        weights: p.weights,
      });
    }
    return h;
  };
}
function mE({
  chain: e,
  interval: t = 4e3,
  onTransports: n,
  sampleCount: r = 10,
  timeout: s = 1e3,
  transports: o,
  weights: i = {},
}) {
  const { stability: a = 0.7, latency: c = 0.3 } = i,
    u = [],
    l = async () => {
      const f = await Promise.all(
        o.map(async (m) => {
          const g = m({ chain: e, retryCount: 0, timeout: s }),
            y = Date.now();
          let k, b;
          try {
            await g.request({ method: "net_listening" }), (b = 1);
          } catch {
            b = 0;
          } finally {
            k = Date.now();
          }
          return { latency: k - y, success: b };
        })
      );
      u.push(f), u.length > r && u.shift();
      const h = Math.max(
          ...u.map((m) => Math.max(...m.map(({ latency: g }) => g)))
        ),
        p = o
          .map((m, g) => {
            const y = u.map((w) => w[g].latency),
              b = 1 - y.reduce((w, x) => w + x, 0) / y.length / h,
              E = u.map((w) => w[g].success),
              v = E.reduce((w, x) => w + x, 0) / E.length;
            return v === 0 ? [0, g] : [c * b + a * v, g];
          })
          .sort((m, g) => g[0] - m[0]);
      n(p.map(([, m]) => o[m])), await qi(t), l();
    };
  l();
}
class hb extends K {
  constructor() {
    super(
      "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
      { docsPath: "/docs/clients/intro" }
    );
  }
}
function bE() {
  if (typeof WebSocket < "u") return WebSocket;
  if (typeof global.WebSocket < "u") return global.WebSocket;
  if (typeof window.WebSocket < "u") return window.WebSocket;
  if (typeof self.WebSocket < "u") return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const Td = bE();
function pb(
  e,
  { errorInstance: t = new Error("timed out"), timeout: n, signal: r }
) {
  return new Promise((s, o) => {
    (async () => {
      let i;
      try {
        const a = new AbortController();
        n > 0 &&
          (i = setTimeout(() => {
            r ? a.abort() : o(t);
          }, n)),
          s(await e({ signal: a == null ? void 0 : a.signal }));
      } catch (a) {
        a.name === "AbortError" && o(t), o(a);
      } finally {
        clearTimeout(i);
      }
    })();
  });
}
let xl = 0;
async function gE(e, { body: t, fetchOptions: n = {}, timeout: r = 1e4 }) {
  var a;
  const { headers: s, method: o, signal: i } = n;
  try {
    const c = await pb(
      async ({ signal: l }) =>
        await fetch(e, {
          ...n,
          body: Array.isArray(t)
            ? wt(t.map((h) => ({ jsonrpc: "2.0", id: h.id ?? xl++, ...h })))
            : wt({ jsonrpc: "2.0", id: t.id ?? xl++, ...t }),
          headers: { ...s, "Content-Type": "application/json" },
          method: o || "POST",
          signal: i || (r > 0 ? l : void 0),
        }),
      { errorInstance: new yl({ body: t, url: e }), timeout: r, signal: !0 }
    );
    let u;
    if (
      ((a = c.headers.get("Content-Type")) != null &&
      a.startsWith("application/json")
        ? (u = await c.json())
        : (u = await c.text()),
      !c.ok)
    )
      throw new to({
        body: t,
        details: wt(u.error) || c.statusText,
        headers: c.headers,
        status: c.status,
        url: e,
      });
    return u;
  } catch (c) {
    throw c instanceof to || c instanceof yl
      ? c
      : new to({ body: t, details: c.message, url: e });
  }
}
const yc = new Map();
async function wc(e) {
  let t = yc.get(e);
  if (t) return t;
  const { schedule: n } = ju({
      id: e,
      fn: async () => {
        const o = new Td(e),
          i = new Map(),
          a = new Map(),
          c = ({ data: l }) => {
            const f = JSON.parse(l),
              h = f.method === "eth_subscription",
              p = h ? f.params.subscription : f.id,
              m = h ? a : i,
              g = m.get(p);
            g && g({ data: l }), h || m.delete(p);
          },
          u = () => {
            yc.delete(e),
              o.removeEventListener("close", u),
              o.removeEventListener("message", c);
          };
        return (
          o.addEventListener("close", u),
          o.addEventListener("message", c),
          o.readyState === Td.CONNECTING &&
            (await new Promise((l, f) => {
              o && ((o.onopen = l), (o.onerror = f));
            })),
          (t = Object.assign(o, { requests: i, subscriptions: a })),
          yc.set(e, t),
          [t]
        );
      },
    }),
    [r, [s]] = await n();
  return s;
}
function yE(e, { body: t, onResponse: n }) {
  if (e.readyState === e.CLOSED || e.readyState === e.CLOSING)
    throw new N2({ body: t, url: e.url, details: "Socket is closed." });
  const r = xl++,
    s = ({ data: o }) => {
      var a;
      const i = JSON.parse(o);
      (typeof i.id == "number" && r !== i.id) ||
        (n == null || n(i),
        t.method === "eth_subscribe" &&
          typeof i.result == "string" &&
          e.subscriptions.set(i.result, s),
        t.method === "eth_unsubscribe" &&
          e.subscriptions.delete((a = t.params) == null ? void 0 : a[0]));
    };
  return (
    e.requests.set(r, s),
    e.send(JSON.stringify({ jsonrpc: "2.0", ...t, id: r })),
    e
  );
}
async function wE(e, { body: t, timeout: n = 1e4 }) {
  return pb(
    () => new Promise((r) => os.webSocket(e, { body: t, onResponse: r })),
    { errorInstance: new yl({ body: t, url: e.url }), timeout: n }
  );
}
const os = { http: gE, webSocket: yE, webSocketAsync: wE };
function vE(e, t = {}) {
  const {
    batch: n,
    fetchOptions: r,
    key: s = "http",
    name: o = "HTTP JSON-RPC",
    retryDelay: i,
  } = t;
  return ({ chain: a, retryCount: c, timeout: u }) => {
    const { batchSize: l = 1e3, wait: f = 0 } = typeof n == "object" ? n : {},
      h = t.retryCount ?? c,
      p = u ?? t.timeout ?? 1e4,
      m = e || (a == null ? void 0 : a.rpcUrls.default.http[0]);
    if (!m) throw new hb();
    return $a(
      {
        key: s,
        name: o,
        async request({ method: g, params: y }) {
          const k = { method: g, params: y },
            { schedule: b } = ju({
              id: `${e}`,
              wait: f,
              shouldSplitBatch(x) {
                return x.length > l;
              },
              fn: (x) => os.http(m, { body: x, fetchOptions: r, timeout: p }),
              sort: (x, d) => x.id - d.id,
            }),
            E = async (x) =>
              n
                ? b(x)
                : [await os.http(m, { body: x, fetchOptions: r, timeout: p })],
            [{ error: v, result: w }] = await E(k);
          if (v) throw new Nu({ body: k, error: v, url: m });
          return w;
        },
        retryCount: h,
        retryDelay: i,
        timeout: p,
        type: "http",
      },
      { fetchOptions: r, url: e }
    );
  };
}
function Wu(e, t) {
  var r, s, o;
  if (!(e instanceof K)) return !1;
  const n = e.walk((i) => i instanceof gl);
  return n instanceof gl
    ? !!(
        ((r = n.data) == null ? void 0 : r.errorName) === "ResolverNotFound" ||
        ((s = n.data) == null ? void 0 : s.errorName) ===
          "ResolverWildcardNotSupported" ||
        ((o = n.reason) != null &&
          o.includes("Wildcard on non-extended resolvers is not supported")) ||
        (t === "reverse" && n.reason === Jm[50])
      )
    : !1;
}
function mb(e) {
  if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65)
    return null;
  const t = `0x${e.slice(1, 65)}`;
  return pn(t) ? t : null;
}
function _i(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e) return bo(t);
  const n = e.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = mb(n[r]),
      o = s ? or(s) : yt(Dn(n[r]), "bytes");
    t = yt(In([t, o]), "bytes");
  }
  return bo(t);
}
function EE(e) {
  return `[${e.slice(2)}]`;
}
function CE(e) {
  const t = new Uint8Array(32).fill(0);
  return e ? mb(e) || yt(Dn(e)) : bo(t);
}
function Na(e) {
  const t = e.replace(/^\.|\.$/gm, "");
  if (t.length === 0) return new Uint8Array(1);
  const n = new Uint8Array(Dn(t).byteLength + 2);
  let r = 0;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    let i = Dn(s[o]);
    i.byteLength > 255 && (i = Dn(EE(CE(s[o])))),
      (n[r] = i.length),
      n.set(i, r + 1),
      (r += i.length + 1);
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
async function xE(
  e,
  {
    blockNumber: t,
    blockTag: n,
    coinType: r,
    name: s,
    universalResolverAddress: o,
  }
) {
  let i = o;
  if (!i) {
    if (!e.chain)
      throw new Error(
        "client chain not configured. universalResolverAddress is required."
      );
    i = _s({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver",
    });
  }
  try {
    const a = pr({
        abi: Sd,
        functionName: "addr",
        ...(r != null ? { args: [_i(s), BigInt(r)] } : { args: [_i(s)] }),
      }),
      c = await ae(
        e,
        lr,
        "readContract"
      )({
        address: i,
        abi: cb,
        functionName: "resolve",
        args: [Fn(Na(s)), a],
        blockNumber: t,
        blockTag: n,
      });
    if (c[0] === "0x") return null;
    const u = xs({
      abi: Sd,
      args: r != null ? [_i(s), BigInt(r)] : void 0,
      functionName: "addr",
      data: c[0],
    });
    return u === "0x" || Tn(u) === "0x00" ? null : u;
  } catch (a) {
    if (Wu(a, "resolve")) return null;
    throw a;
  }
}
class _E extends K {
  constructor({ data: t }) {
    super(
      "Unable to extract image from metadata. The metadata may be malformed or invalid.",
      {
        metaMessages: [
          "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
          "",
          `Provided data: ${JSON.stringify(t)}`,
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "EnsAvatarInvalidMetadataError",
      });
  }
}
class Us extends K {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "EnsAvatarInvalidNftUriError",
      });
  }
}
class qu extends K {
  constructor({ uri: t }) {
    super(
      `Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "EnsAvatarUriResolutionError",
      });
  }
}
class kE extends K {
  constructor({ namespace: t }) {
    super(
      `ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "EnsAvatarUnsupportedNamespaceError",
      });
  }
}
const SE =
    /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
  AE =
    /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
  PE = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
  TE = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function DE(e) {
  try {
    const t = await fetch(e, { method: "HEAD" });
    if (t.status === 200) {
      const n = t.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (t) {
    return (typeof t == "object" && typeof t.response < "u") ||
      !globalThis.hasOwnProperty("Image")
      ? !1
      : new Promise((n) => {
          const r = new Image();
          (r.onload = () => {
            n(!0);
          }),
            (r.onerror = () => {
              n(!1);
            }),
            (r.src = e);
        });
  }
}
function Dd(e, t) {
  return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
}
function bb({ uri: e, gatewayUrls: t }) {
  const n = PE.test(e);
  if (n) return { uri: e, isOnChain: !0, isEncoded: n };
  const r = Dd(t == null ? void 0 : t.ipfs, "https://ipfs.io"),
    s = Dd(t == null ? void 0 : t.arweave, "https://arweave.net"),
    o = e.match(SE),
    {
      protocol: i,
      subpath: a,
      target: c,
      subtarget: u = "",
    } = (o == null ? void 0 : o.groups) || {},
    l = i === "ipns:/" || a === "ipns/",
    f = i === "ipfs:/" || a === "ipfs/" || AE.test(e);
  if (e.startsWith("http") && !l && !f) {
    let p = e;
    return (
      t != null &&
        t.arweave &&
        (p = e.replace(
          /https:\/\/arweave.net/g,
          t == null ? void 0 : t.arweave
        )),
      { uri: p, isOnChain: !1, isEncoded: !1 }
    );
  }
  if ((l || f) && c)
    return {
      uri: `${r}/${l ? "ipns" : "ipfs"}/${c}${u}`,
      isOnChain: !1,
      isEncoded: !1,
    };
  if (i === "ar:/" && c)
    return { uri: `${s}/${c}${u || ""}`, isOnChain: !1, isEncoded: !1 };
  let h = e.replace(TE, "");
  if (
    (h.startsWith("<svg") && (h = `data:image/svg+xml;base64,${btoa(h)}`),
    h.startsWith("data:") || h.startsWith("{"))
  )
    return { uri: h, isOnChain: !0, isEncoded: !1 };
  throw new qu({ uri: e });
}
function gb(e) {
  if (
    typeof e != "object" ||
    (!("image" in e) && !("image_url" in e) && !("image_data" in e))
  )
    throw new _E({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function OE({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((s) => s.json());
    return await Gu({ gatewayUrls: e, uri: gb(n) });
  } catch {
    throw new qu({ uri: t });
  }
}
async function Gu({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = bb({ uri: t, gatewayUrls: e });
  if (r || (await DE(n))) return n;
  throw new qu({ uri: t });
}
function IE(e) {
  let t = e;
  t.startsWith("did:nft:") &&
    (t = t.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, s] = t.split("/"),
    [o, i] = n.split(":"),
    [a, c] = r.split(":");
  if (!o || o.toLowerCase() !== "eip155")
    throw new Us({ reason: "Only EIP-155 supported" });
  if (!i) throw new Us({ reason: "Chain ID not found" });
  if (!c) throw new Us({ reason: "Contract address not found" });
  if (!s) throw new Us({ reason: "Token ID not found" });
  if (!a) throw new Us({ reason: "ERC namespace not found" });
  return {
    chainID: parseInt(i),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: s,
  };
}
async function $E(e, { nft: t }) {
  if (t.namespace === "erc721")
    return lr(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }],
        },
      ],
      functionName: "tokenURI",
      args: [BigInt(t.tokenID)],
    });
  if (t.namespace === "erc1155")
    return lr(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }],
        },
      ],
      functionName: "uri",
      args: [BigInt(t.tokenID)],
    });
  throw new kE({ namespace: t.namespace });
}
async function NE(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n)
    ? ME(e, { gatewayUrls: t, record: n })
    : Gu({ uri: n, gatewayUrls: t });
}
async function ME(e, { gatewayUrls: t, record: n }) {
  const r = IE(n),
    s = await $E(e, { nft: r }),
    { uri: o, isOnChain: i, isEncoded: a } = bb({ uri: s, gatewayUrls: t });
  if (i && (o.includes("data:application/json;base64,") || o.startsWith("{"))) {
    const u = a ? atob(o.replace("data:application/json;base64,", "")) : o,
      l = JSON.parse(u);
    return Gu({ uri: gb(l), gatewayUrls: t });
  }
  let c = r.tokenID;
  return (
    r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")),
    OE({ gatewayUrls: t, uri: o.replace(/(?:0x)?{id}/, c) })
  );
}
async function yb(
  e,
  { blockNumber: t, blockTag: n, name: r, key: s, universalResolverAddress: o }
) {
  let i = o;
  if (!i) {
    if (!e.chain)
      throw new Error(
        "client chain not configured. universalResolverAddress is required."
      );
    i = _s({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver",
    });
  }
  try {
    const a = await ae(
      e,
      lr,
      "readContract"
    )({
      address: i,
      abi: cb,
      functionName: "resolve",
      args: [
        Fn(Na(r)),
        pr({ abi: kd, functionName: "text", args: [_i(r), s] }),
      ],
      blockNumber: t,
      blockTag: n,
    });
    if (a[0] === "0x") return null;
    const c = xs({ abi: kd, functionName: "text", data: a[0] });
    return c === "" ? null : c;
  } catch (a) {
    if (Wu(a, "resolve")) return null;
    throw a;
  }
}
async function UE(
  e,
  {
    blockNumber: t,
    blockTag: n,
    gatewayUrls: r,
    name: s,
    universalResolverAddress: o,
  }
) {
  const i = await ae(
    e,
    yb,
    "getEnsText"
  )({
    blockNumber: t,
    blockTag: n,
    key: "avatar",
    name: s,
    universalResolverAddress: o,
  });
  if (!i) return null;
  try {
    return await NE(e, { record: i, gatewayUrls: r });
  } catch {
    return null;
  }
}
async function FE(
  e,
  { address: t, blockNumber: n, blockTag: r, universalResolverAddress: s }
) {
  let o = s;
  if (!o) {
    if (!e.chain)
      throw new Error(
        "client chain not configured. universalResolverAddress is required."
      );
    o = _s({
      blockNumber: n,
      chain: e.chain,
      contract: "ensUniversalResolver",
    });
  }
  const i = `${t.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const [a, c] = await ae(
      e,
      lr,
      "readContract"
    )({
      address: o,
      abi: X2,
      functionName: "reverse",
      args: [Fn(Na(i))],
      blockNumber: n,
      blockTag: r,
    });
    return t.toLowerCase() !== c.toLowerCase() ? null : a;
  } catch (a) {
    if (Wu(a, "reverse")) return null;
    throw a;
  }
}
async function BE(
  e,
  { blockNumber: t, blockTag: n, name: r, universalResolverAddress: s }
) {
  let o = s;
  if (!o) {
    if (!e.chain)
      throw new Error(
        "client chain not configured. universalResolverAddress is required."
      );
    o = _s({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver",
    });
  }
  const [i] = await ae(
    e,
    lr,
    "readContract"
  )({
    address: o,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "findResolver",
    args: [Fn(Na(r))],
    blockNumber: t,
    blockTag: n,
  });
  return i;
}
async function LE(e) {
  const t = Sa(e, { method: "eth_newBlockFilter" }),
    n = await e.request({ method: "eth_newBlockFilter" });
  return { id: n, request: t(n), type: "block" };
}
async function wb(
  e,
  {
    address: t,
    args: n,
    event: r,
    events: s,
    fromBlock: o,
    strict: i,
    toBlock: a,
  } = {}
) {
  const c = s ?? (r ? [r] : void 0),
    u = Sa(e, { method: "eth_newFilter" });
  let l = [];
  c &&
    ((l = [c.flatMap((h) => Go({ abi: [h], eventName: h.name, args: n }))]),
    r && (l = l[0]));
  const f = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof o == "bigint" ? ye(o) : o,
        toBlock: typeof a == "bigint" ? ye(a) : a,
        ...(l.length ? { topics: l } : {}),
      },
    ],
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: o,
    id: f,
    request: u(f),
    strict: i,
    toBlock: a,
    type: "event",
  };
}
async function vb(e) {
  const t = Sa(e, { method: "eth_newPendingTransactionFilter" }),
    n = await e.request({ method: "eth_newPendingTransactionFilter" });
  return { id: n, request: t(n), type: "transaction" };
}
async function RE(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n ? ye(n) : void 0,
    o = await e.request({ method: "eth_getBalance", params: [t, s || r] });
  return BigInt(o);
}
async function jE(
  e,
  { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
) {
  const s = n !== void 0 ? ye(n) : void 0;
  let o;
  return (
    t
      ? (o = await e.request({
          method: "eth_getBlockTransactionCountByHash",
          params: [t],
        }))
      : (o = await e.request({
          method: "eth_getBlockTransactionCountByNumber",
          params: [s || r],
        })),
    ht(o)
  );
}
async function HE(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n !== void 0 ? ye(n) : void 0,
    o = await e.request({ method: "eth_getCode", params: [t, s || r] });
  if (o !== "0x") return o;
}
function zE(e) {
  var t;
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward:
      (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r))),
  };
}
async function WE(
  e,
  {
    blockCount: t,
    blockNumber: n,
    blockTag: r = "latest",
    rewardPercentiles: s,
  }
) {
  const o = n ? ye(n) : void 0,
    i = await e.request({
      method: "eth_feeHistory",
      params: [ye(t), o || r, s],
    });
  return zE(i);
}
async function qE(e, { filter: t }) {
  const n = t.strict ?? !1;
  return (await t.request({ method: "eth_getFilterLogs", params: [t.id] }))
    .map((s) => {
      var o;
      try {
        const { eventName: i, args: a } =
          "abi" in t && t.abi
            ? Xo({ abi: t.abi, data: s.data, topics: s.topics, strict: n })
            : { eventName: void 0, args: void 0 };
        return Zt(s, { args: a, eventName: i });
      } catch (i) {
        let a, c;
        if (i instanceof Nr || i instanceof vs) {
          if ("strict" in t && t.strict) return;
          (a = i.abiItem.name),
            (c =
              (o = i.abiItem.inputs) == null
                ? void 0
                : o.some((u) => !("name" in u && u.name)));
        }
        return Zt(s, { args: c ? [] : {}, eventName: a });
      }
    })
    .filter(Boolean);
}
const GE = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  VE =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function KE({ domain: e, message: t, primaryType: n, types: r }) {
  const s = typeof e > "u" ? {} : e,
    o = { EIP712Domain: Sb({ domain: s }), ...r };
  kb({ domain: s, message: t, primaryType: n, types: o });
  const i = ["0x1901"];
  return (
    s && i.push(XE({ domain: s, types: o })),
    n !== "EIP712Domain" && i.push(Eb({ data: t, primaryType: n, types: o })),
    yt(In(i))
  );
}
function XE({ domain: e, types: t }) {
  return Eb({ data: e, primaryType: "EIP712Domain", types: t });
}
function Eb({ data: e, primaryType: t, types: n }) {
  const r = Cb({ data: e, primaryType: t, types: n });
  return yt(r);
}
function Cb({ data: e, primaryType: t, types: n }) {
  const r = [{ type: "bytes32" }],
    s = [YE({ primaryType: t, types: n })];
  for (const o of n[t]) {
    const [i, a] = _b({
      types: n,
      name: o.name,
      type: o.type,
      value: e[o.name],
    });
    r.push(i), s.push(a);
  }
  return Wo(r, s);
}
function YE({ primaryType: e, types: t }) {
  const n = Fn(ZE({ primaryType: e, types: t }));
  return yt(n);
}
function ZE({ primaryType: e, types: t }) {
  let n = "";
  const r = xb({ primaryType: e, types: t });
  r.delete(e);
  const s = [e, ...Array.from(r).sort()];
  for (const o of s)
    n += `${o}(${t[o].map(({ name: i, type: a }) => `${a} ${i}`).join(",")})`;
  return n;
}
function xb({ primaryType: e, types: t }, n = new Set()) {
  const r = e.match(/^\w*/u),
    s = r == null ? void 0 : r[0];
  if (n.has(s) || t[s] === void 0) return n;
  n.add(s);
  for (const o of t[s]) xb({ primaryType: o.type, types: t }, n);
  return n;
}
function _b({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [{ type: "bytes32" }, yt(Cb({ data: r, primaryType: n, types: e }))];
  if (n === "bytes")
    return (
      (r = `0x${(r.length % 2 ? "0" : "") + r.slice(2)}`),
      [{ type: "bytes32" }, yt(r)]
    );
  if (n === "string") return [{ type: "bytes32" }, yt(Fn(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const s = n.slice(0, n.lastIndexOf("[")),
      o = r.map((i) => _b({ name: t, type: s, types: e, value: i }));
    return [
      { type: "bytes32" },
      yt(
        Wo(
          o.map(([i]) => i),
          o.map(([, i]) => i)
        )
      ),
    ];
  }
  return [{ type: n }, r];
}
function kb({ domain: e, message: t, primaryType: n, types: r }) {
  const s = r,
    o = (i, a) => {
      for (const c of i) {
        const { name: u, type: l } = c,
          f = l,
          h = a[u],
          p = f.match(VE);
        if (p && (typeof h == "number" || typeof h == "bigint")) {
          const [y, k, b] = p;
          ye(h, { signed: k === "int", size: parseInt(b) / 8 });
        }
        if (f === "address" && typeof h == "string" && !ir(h))
          throw new go({ address: h });
        const m = f.match(GE);
        if (m) {
          const [y, k] = m;
          if (k && Je(h) !== parseInt(k))
            throw new Tv({ expectedSize: parseInt(k), givenSize: Je(h) });
        }
        const g = s[f];
        g && o(g, h);
      }
    };
  if ((s.EIP712Domain && e && o(s.EIP712Domain, e), n !== "EIP712Domain")) {
    const i = s[n];
    o(i, t);
  }
}
function Sb({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == "string" && {
      name: "name",
      type: "string",
    },
    (e == null ? void 0 : e.version) && { name: "version", type: "string" },
    typeof (e == null ? void 0 : e.chainId) == "number" && {
      name: "chainId",
      type: "uint256",
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: "verifyingContract",
      type: "address",
    },
    (e == null ? void 0 : e.salt) && { name: "salt", type: "bytes32" },
  ].filter(Boolean);
}
const vc = "/docs/contract/encodeDeployData";
function Ab({ abi: e, args: t, bytecode: n }) {
  if (!t || t.length === 0) return n;
  const r = e.find((o) => "type" in o && o.type === "constructor");
  if (!r) throw new Ev({ docsPath: vc });
  if (!("inputs" in r)) throw new md({ docsPath: vc });
  if (!r.inputs || r.inputs.length === 0) throw new md({ docsPath: vc });
  const s = Wo(r.inputs, t);
  return _u([n, s]);
}
const JE = `Ethereum Signed Message:
`;
function QE(e, t) {
  const n =
      typeof e == "string"
        ? Dn(e)
        : e.raw instanceof Uint8Array
        ? e.raw
        : or(e.raw),
    r = Dn(`${JE}${n.length}`);
  return yt(In([r, n]), t);
}
function e3(e) {
  return e.map((t) => ({ ...t, value: BigInt(t.value) }));
}
function t3(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? ht(e.nonce) : void 0,
    storageProof: e.storageProof ? e3(e.storageProof) : void 0,
  };
}
async function n3(
  e,
  { address: t, blockNumber: n, blockTag: r, storageKeys: s }
) {
  const o = r ?? "latest",
    i = n !== void 0 ? ye(n) : void 0,
    a = await e.request({ method: "eth_getProof", params: [t, s, i || o] });
  return t3(a);
}
async function r3(
  e,
  { address: t, blockNumber: n, blockTag: r = "latest", slot: s }
) {
  const o = n !== void 0 ? ye(n) : void 0;
  return await e.request({
    method: "eth_getStorageAt",
    params: [t, s, o || r],
  });
}
async function Vu(
  e,
  { blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }
) {
  var l, f, h;
  const i = r || "latest",
    a = n !== void 0 ? ye(n) : void 0;
  let c = null;
  if (
    (s
      ? (c = await e.request({
          method: "eth_getTransactionByHash",
          params: [s],
        }))
      : t
      ? (c = await e.request({
          method: "eth_getTransactionByBlockHashAndIndex",
          params: [t, ye(o)],
        }))
      : (a || i) &&
        (c = await e.request({
          method: "eth_getTransactionByBlockNumberAndIndex",
          params: [a || i, ye(o)],
        })),
    !c)
  )
    throw new eb({
      blockHash: t,
      blockNumber: n,
      blockTag: i,
      hash: s,
      index: o,
    });
  return (
    ((h =
      (f = (l = e.chain) == null ? void 0 : l.formatters) == null
        ? void 0
        : f.transaction) == null
      ? void 0
      : h.format) || Bm
  )(c);
}
async function s3(e, { hash: t, transactionReceipt: n }) {
  const [r, s] = await Promise.all([
      ae(e, Zo, "getBlockNumber")({}),
      t ? ae(e, Vu, "getBlockNumber")({ hash: t }) : void 0,
    ]),
    o =
      (n == null ? void 0 : n.blockNumber) ||
      (s == null ? void 0 : s.blockNumber);
  return o ? r - o + 1n : 0n;
}
async function _l(e, { hash: t }) {
  var s, o, i;
  const n = await e.request({
    method: "eth_getTransactionReceipt",
    params: [t],
  });
  if (!n) throw new tb({ hash: t });
  return (
    ((i =
      (o = (s = e.chain) == null ? void 0 : s.formatters) == null
        ? void 0
        : o.transactionReceipt) == null
      ? void 0
      : i.format) || lv
  )(n);
}
async function o3(e, t) {
  var g;
  const {
      allowFailure: n = !0,
      batchSize: r,
      blockNumber: s,
      blockTag: o,
      contracts: i,
      multicallAddress: a,
    } = t,
    c =
      r ??
      ((typeof ((g = e.batch) == null ? void 0 : g.multicall) == "object" &&
        e.batch.multicall.batchSize) ||
        1024);
  let u = a;
  if (!u) {
    if (!e.chain)
      throw new Error(
        "client chain not configured. multicallAddress is required."
      );
    u = _s({ blockNumber: s, chain: e.chain, contract: "multicall3" });
  }
  const l = [[]];
  let f = 0,
    h = 0;
  for (let y = 0; y < i.length; y++) {
    const { abi: k, address: b, args: E, functionName: v } = i[y];
    try {
      const w = pr({ abi: k, args: E, functionName: v });
      (h += (w.length - 2) / 2),
        c > 0 &&
          h > c &&
          l[f].length > 0 &&
          (f++, (h = (w.length - 2) / 2), (l[f] = [])),
        (l[f] = [...l[f], { allowFailure: !0, callData: w, target: b }]);
    } catch (w) {
      const x = Io(w, {
        abi: k,
        address: b,
        args: E,
        docsPath: "/docs/contract/multicall",
        functionName: v,
      });
      if (!n) throw x;
      l[f] = [...l[f], { allowFailure: !0, callData: "0x", target: b }];
    }
  }
  const p = await Promise.allSettled(
      l.map((y) =>
        ae(
          e,
          lr,
          "readContract"
        )({
          abi: vl,
          address: u,
          args: [y],
          blockNumber: s,
          blockTag: o,
          functionName: "aggregate3",
        })
      )
    ),
    m = [];
  for (let y = 0; y < p.length; y++) {
    const k = p[y];
    if (k.status === "rejected") {
      if (!n) throw k.reason;
      for (let E = 0; E < l[y].length; E++)
        m.push({ status: "failure", error: k.reason, result: void 0 });
      continue;
    }
    const b = k.value;
    for (let E = 0; E < b.length; E++) {
      const { returnData: v, success: w } = b[E],
        { callData: x } = l[y][E],
        { abi: d, address: C, functionName: A, args: $ } = i[m.length];
      try {
        if (x === "0x") throw new _a();
        if (!w) throw new $u({ data: v });
        const I = xs({ abi: d, args: $, data: v, functionName: A });
        m.push(n ? { result: I, status: "success" } : I);
      } catch (I) {
        const T = Io(I, {
          abi: d,
          address: C,
          args: $,
          docsPath: "/docs/contract/multicall",
          functionName: A,
        });
        if (!n) throw T;
        m.push({ error: T, result: void 0, status: "failure" });
      }
    }
  }
  if (m.length !== i.length) throw new K("multicall results mismatch");
  return m;
}
const i3 =
  "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ BigInt(
  0
);
BigInt(1);
BigInt(2);
function a3(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function c3(e, t) {
  const n = pn(e) ? or(e) : e,
    r = pn(t) ? or(t) : t;
  return a3(n, r);
}
async function Pb(e, { address: t, hash: n, signature: r, ...s }) {
  const o = pn(r) ? r : Fn(r);
  try {
    const { data: i } = await ae(
      e,
      Da,
      "call"
    )({ data: Ab({ abi: Y2, args: [t, n, o], bytecode: i3 }), ...s });
    return c3(i ?? "0x0", "0x1");
  } catch (i) {
    if (i instanceof nb) return !1;
    throw i;
  }
}
async function l3(e, { address: t, message: n, signature: r, ...s }) {
  const o = QE(n);
  return Pb(e, { address: t, hash: o, signature: r, ...s });
}
async function u3(
  e,
  {
    address: t,
    signature: n,
    message: r,
    primaryType: s,
    types: o,
    domain: i,
    ...a
  }
) {
  const c = KE({ message: r, primaryType: s, types: o, domain: i });
  return Pb(e, { address: t, hash: c, signature: n, ...a });
}
function Tb(
  e,
  {
    emitOnBegin: t = !1,
    emitMissed: n = !1,
    onBlockNumber: r,
    onError: s,
    poll: o,
    pollingInterval: i = e.pollingInterval,
  }
) {
  const a = typeof o < "u" ? o : e.transport.type !== "webSocket";
  let c;
  return a
    ? (() => {
        const f = wt(["watchBlockNumber", e.uid, t, n, i]);
        return ks(f, { onBlockNumber: r, onError: s }, (h) =>
          Yo(
            async () => {
              var p;
              try {
                const m = await ae(e, Zo, "getBlockNumber")({ cacheTime: 0 });
                if (c) {
                  if (m === c) return;
                  if (m - c > 1 && n)
                    for (let g = c + 1n; g < m; g++)
                      h.onBlockNumber(g, c), (c = g);
                }
                (!c || m > c) && (h.onBlockNumber(m, c), (c = m));
              } catch (m) {
                (p = h.onError) == null || p.call(h, m);
              }
            },
            { emitOnBegin: t, interval: i }
          )
        );
      })()
    : (() => {
        let f = !0,
          h = () => (f = !1);
        return (
          (async () => {
            try {
              const { unsubscribe: p } = await e.transport.subscribe({
                params: ["newHeads"],
                onData(m) {
                  var y;
                  if (!f) return;
                  const g = va((y = m.result) == null ? void 0 : y.number);
                  r(g, c), (c = g);
                },
                onError(m) {
                  s == null || s(m);
                },
              });
              (h = p), f || h();
            } catch (p) {
              s == null || s(p);
            }
          })(),
          h
        );
      })();
}
async function f3(
  e,
  {
    confirmations: t = 1,
    hash: n,
    onReplaced: r,
    pollingInterval: s = e.pollingInterval,
    timeout: o,
  }
) {
  const i = wt(["waitForTransactionReceipt", e.uid, n]);
  let a,
    c,
    u,
    l = !1;
  return new Promise((f, h) => {
    o && setTimeout(() => h(new I2({ hash: n })), o);
    const p = ks(i, { onReplaced: r, resolve: f, reject: h }, (m) => {
      const g = ae(
        e,
        Tb,
        "watchBlockNumber"
      )({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(y) {
          if (l) return;
          let k = y;
          const b = (E) => {
            g(), E(), p();
          };
          try {
            if (u) {
              if (t > 1 && (!u.blockNumber || k - u.blockNumber + 1n < t))
                return;
              b(() => m.resolve(u));
              return;
            }
            if (
              (a ||
                ((l = !0),
                await Cl(
                  async () => {
                    (a = await ae(e, Vu, "getTransaction")({ hash: n })),
                      a.blockNumber && (k = a.blockNumber);
                  },
                  { delay: ({ count: E }) => ~~(1 << E) * 200, retryCount: 6 }
                ),
                (l = !1)),
              (u = await ae(e, _l, "getTransactionReceipt")({ hash: n })),
              t > 1 && (!u.blockNumber || k - u.blockNumber + 1n < t))
            )
              return;
            b(() => m.resolve(u));
          } catch (E) {
            if (a && (E instanceof eb || E instanceof tb))
              try {
                (c = a), (l = !0);
                const v = await Cl(
                  () =>
                    ae(
                      e,
                      cr,
                      "getBlock"
                    )({ blockNumber: k, includeTransactions: !0 }),
                  {
                    delay: ({ count: d }) => ~~(1 << d) * 200,
                    retryCount: 6,
                    shouldRetry: ({ error: d }) => d instanceof rb,
                  }
                );
                l = !1;
                const w = v.transactions.find(
                  ({ from: d, nonce: C }) => d === c.from && C === c.nonce
                );
                if (
                  !w ||
                  ((u = await ae(
                    e,
                    _l,
                    "getTransactionReceipt"
                  )({ hash: w.hash })),
                  t > 1 && (!u.blockNumber || k - u.blockNumber + 1n < t))
                )
                  return;
                let x = "replaced";
                w.to === c.to && w.value === c.value
                  ? (x = "repriced")
                  : w.from === w.to && w.value === 0n && (x = "cancelled"),
                  b(() => {
                    var d;
                    (d = m.onReplaced) == null ||
                      d.call(m, {
                        reason: x,
                        replacedTransaction: c,
                        transaction: w,
                        transactionReceipt: u,
                      }),
                      m.resolve(u);
                  });
              } catch (v) {
                b(() => m.reject(v));
              }
            else b(() => m.reject(E));
          }
        },
      });
    });
  });
}
function d3(
  e,
  {
    blockTag: t = "latest",
    emitMissed: n = !1,
    emitOnBegin: r = !1,
    onBlock: s,
    onError: o,
    includeTransactions: i,
    poll: a,
    pollingInterval: c = e.pollingInterval,
  }
) {
  const u = typeof a < "u" ? a : e.transport.type !== "webSocket",
    l = i ?? !1;
  let f;
  return u
    ? (() => {
        const m = wt(["watchBlocks", e.uid, n, r, l, c]);
        return ks(m, { onBlock: s, onError: o }, (g) =>
          Yo(
            async () => {
              var y;
              try {
                const k = await ae(
                  e,
                  cr,
                  "getBlock"
                )({ blockTag: t, includeTransactions: l });
                if (k.number && f != null && f.number) {
                  if (k.number === f.number) return;
                  if (k.number - f.number > 1 && n)
                    for (
                      let b = (f == null ? void 0 : f.number) + 1n;
                      b < k.number;
                      b++
                    ) {
                      const E = await ae(
                        e,
                        cr,
                        "getBlock"
                      )({ blockNumber: b, includeTransactions: l });
                      g.onBlock(E, f), (f = E);
                    }
                }
                (!(f != null && f.number) ||
                  (t === "pending" && !(k != null && k.number)) ||
                  (k.number && k.number > f.number)) &&
                  (g.onBlock(k, f), (f = k));
              } catch (k) {
                (y = g.onError) == null || y.call(g, k);
              }
            },
            { emitOnBegin: r, interval: c }
          )
        );
      })()
    : (() => {
        let m = !0,
          g = () => (m = !1);
        return (
          (async () => {
            try {
              const { unsubscribe: y } = await e.transport.subscribe({
                params: ["newHeads"],
                onData(k) {
                  var v, w, x;
                  if (!m) return;
                  const E = (
                    ((x =
                      (w = (v = e.chain) == null ? void 0 : v.formatters) ==
                      null
                        ? void 0
                        : w.block) == null
                      ? void 0
                      : x.format) || Lm
                  )(k.result);
                  s(E, f), (f = E);
                },
                onError(k) {
                  o == null || o(k);
                },
              });
              (g = y), m || g();
            } catch (y) {
              o == null || o(y);
            }
          })(),
          g
        );
      })();
}
function h3(
  e,
  {
    address: t,
    args: n,
    batch: r = !0,
    event: s,
    events: o,
    onError: i,
    onLogs: a,
    poll: c,
    pollingInterval: u = e.pollingInterval,
    strict: l,
  }
) {
  const f = typeof c < "u" ? c : e.transport.type !== "webSocket",
    h = l ?? !1;
  return f
    ? (() => {
        const g = wt(["watchEvent", t, n, r, e.uid, s, u]);
        return ks(g, { onLogs: a, onError: i }, (y) => {
          let k,
            b,
            E = !1;
          const v = Yo(
            async () => {
              var w;
              if (!E) {
                try {
                  b = await ae(
                    e,
                    wb,
                    "createEventFilter"
                  )({ address: t, args: n, event: s, events: o, strict: h });
                } catch {}
                E = !0;
                return;
              }
              try {
                let x;
                if (b) x = await ae(e, Oa, "getFilterChanges")({ filter: b });
                else {
                  const d = await ae(e, Zo, "getBlockNumber")({});
                  k && k !== d
                    ? (x = await ae(
                        e,
                        Ru,
                        "getLogs"
                      )({
                        address: t,
                        args: n,
                        event: s,
                        events: o,
                        fromBlock: k + 1n,
                        toBlock: d,
                      }))
                    : (x = []),
                    (k = d);
                }
                if (x.length === 0) return;
                if (r) y.onLogs(x);
                else for (const d of x) y.onLogs([d]);
              } catch (x) {
                b && x instanceof Mr && (E = !1),
                  (w = y.onError) == null || w.call(y, x);
              }
            },
            { emitOnBegin: !0, interval: u }
          );
          return async () => {
            b && (await ae(e, Ia, "uninstallFilter")({ filter: b })), v();
          };
        });
      })()
    : (() => {
        let g = !0,
          y = () => (g = !1);
        return (
          (async () => {
            try {
              const k = o ?? (s ? [s] : void 0);
              let b = [];
              k &&
                ((b = [
                  k.flatMap((v) =>
                    Go({ abi: [v], eventName: v.name, args: n })
                  ),
                ]),
                s && (b = b[0]));
              const { unsubscribe: E } = await e.transport.subscribe({
                params: ["logs", { address: t, topics: b }],
                onData(v) {
                  var x;
                  if (!g) return;
                  const w = v.result;
                  try {
                    const { eventName: d, args: C } = Xo({
                        abi: k,
                        data: w.data,
                        topics: w.topics,
                        strict: h,
                      }),
                      A = Zt(w, { args: C, eventName: d });
                    a([A]);
                  } catch (d) {
                    let C, A;
                    if (d instanceof Nr || d instanceof vs) {
                      if (l) return;
                      (C = d.abiItem.name),
                        (A =
                          (x = d.abiItem.inputs) == null
                            ? void 0
                            : x.some((I) => !("name" in I && I.name)));
                    }
                    const $ = Zt(w, { args: A ? [] : {}, eventName: C });
                    a([$]);
                  }
                },
                onError(v) {
                  i == null || i(v);
                },
              });
              (y = E), g || y();
            } catch (k) {
              i == null || i(k);
            }
          })(),
          y
        );
      })();
}
function p3(
  e,
  {
    batch: t = !0,
    onError: n,
    onTransactions: r,
    poll: s,
    pollingInterval: o = e.pollingInterval,
  }
) {
  return (typeof s < "u" ? s : e.transport.type !== "webSocket")
    ? (() => {
        const u = wt(["watchPendingTransactions", e.uid, t, o]);
        return ks(u, { onTransactions: r, onError: n }, (l) => {
          let f;
          const h = Yo(
            async () => {
              var p;
              try {
                if (!f)
                  try {
                    f = await ae(e, vb, "createPendingTransactionFilter")({});
                    return;
                  } catch (g) {
                    throw (h(), g);
                  }
                const m = await ae(e, Oa, "getFilterChanges")({ filter: f });
                if (m.length === 0) return;
                if (t) l.onTransactions(m);
                else for (const g of m) l.onTransactions([g]);
              } catch (m) {
                (p = l.onError) == null || p.call(l, m);
              }
            },
            { emitOnBegin: !0, interval: o }
          );
          return async () => {
            f && (await ae(e, Ia, "uninstallFilter")({ filter: f })), h();
          };
        });
      })()
    : (() => {
        let u = !0,
          l = () => (u = !1);
        return (
          (async () => {
            try {
              const { unsubscribe: f } = await e.transport.subscribe({
                params: ["newPendingTransactions"],
                onData(h) {
                  if (!u) return;
                  const p = h.result;
                  r([p]);
                },
                onError(h) {
                  n == null || n(h);
                },
              });
              (l = f), u || l();
            } catch (f) {
              n == null || n(f);
            }
          })(),
          l
        );
      })();
}
function m3(e) {
  return {
    call: (t) => Da(e, t),
    createBlockFilter: () => LE(e),
    createContractEventFilter: (t) => Zm(e, t),
    createEventFilter: (t) => wb(e, t),
    createPendingTransactionFilter: () => vb(e),
    estimateContractGas: (t) => q2(e, t),
    estimateGas: (t) => Lu(e, t),
    getBalance: (t) => RE(e, t),
    getBlock: (t) => cr(e, t),
    getBlockNumber: (t) => Zo(e, t),
    getBlockTransactionCount: (t) => jE(e, t),
    getBytecode: (t) => HE(e, t),
    getChainId: () => $o(e),
    getContractEvents: (t) => ib(e, t),
    getEnsAddress: (t) => xE(e, t),
    getEnsAvatar: (t) => UE(e, t),
    getEnsName: (t) => FE(e, t),
    getEnsResolver: (t) => BE(e, t),
    getEnsText: (t) => yb(e, t),
    getFeeHistory: (t) => WE(e, t),
    estimateFeesPerGas: (t) => z2(e, t),
    getFilterChanges: (t) => Oa(e, t),
    getFilterLogs: (t) => qE(e, t),
    getGasPrice: () => Bu(e),
    getLogs: (t) => Ru(e, t),
    getProof: (t) => n3(e, t),
    estimateMaxPriorityFeePerGas: (t) => H2(e, t),
    getStorageAt: (t) => r3(e, t),
    getTransaction: (t) => Vu(e, t),
    getTransactionConfirmations: (t) => s3(e, t),
    getTransactionCount: (t) => ob(e, t),
    getTransactionReceipt: (t) => _l(e, t),
    multicall: (t) => o3(e, t),
    prepareTransactionRequest: (t) => Ta(e, t),
    readContract: (t) => lr(e, t),
    sendRawTransaction: (t) => Hu(e, t),
    simulateContract: (t) => nE(e, t),
    verifyMessage: (t) => l3(e, t),
    verifyTypedData: (t) => u3(e, t),
    uninstallFilter: (t) => Ia(e, t),
    waitForTransactionReceipt: (t) => f3(e, t),
    watchBlocks: (t) => d3(e, t),
    watchBlockNumber: (t) => Tb(e, t),
    watchContractEvent: (t) => lE(e, t),
    watchEvent: (t) => h3(e, t),
    watchPendingTransactions: (t) => p3(e, t),
  };
}
function Od(e) {
  const { key: t = "public", name: n = "Public Client" } = e;
  return ub({ ...e, key: t, name: n, type: "publicClient" }).extend(m3);
}
function b3(e, { abi: t, args: n, bytecode: r, ...s }) {
  const o = Ab({ abi: t, args: n, bytecode: r });
  return zu(e, { ...s, data: o });
}
async function g3(e) {
  var n;
  return ((n = e.account) == null ? void 0 : n.type) === "local"
    ? [e.account.address]
    : (await e.request({ method: "eth_accounts" })).map((r) => Ou(r));
}
async function y3(e) {
  return await e.request({ method: "wallet_getPermissions" });
}
async function w3(e) {
  return (await e.request({ method: "eth_requestAccounts" })).map((n) => nr(n));
}
async function v3(e, t) {
  return e.request({ method: "wallet_requestPermissions", params: [t] });
}
async function E3(e, { account: t = e.account, message: n }) {
  if (!t) throw new Cs({ docsPath: "/docs/actions/wallet/signMessage" });
  const r = jt(t);
  if (r.type === "local") return r.signMessage({ message: n });
  const s =
    typeof n == "string"
      ? Cu(n)
      : n.raw instanceof Uint8Array
      ? Fn(n.raw)
      : n.raw;
  return e.request({ method: "personal_sign", params: [s, r.address] });
}
async function C3(e, t) {
  var u, l, f, h;
  const { account: n = e.account, chain: r = e.chain, ...s } = t;
  if (!n) throw new Cs({ docsPath: "/docs/actions/wallet/signTransaction" });
  const o = jt(n);
  Ko({ account: o, ...t });
  const i = await ae(e, $o, "getChainId")({});
  r !== null && lb({ currentChainId: i, chain: r });
  const a =
      (r == null ? void 0 : r.formatters) ||
      ((u = e.chain) == null ? void 0 : u.formatters),
    c =
      ((l = a == null ? void 0 : a.transactionRequest) == null
        ? void 0
        : l.format) || Ea;
  return o.type === "local"
    ? o.signTransaction(
        { ...s, chainId: i },
        {
          serializer:
            (h = (f = e.chain) == null ? void 0 : f.serializers) == null
              ? void 0
              : h.transaction,
        }
      )
    : await e.request({
        method: "eth_signTransaction",
        params: [{ ...c(s), chainId: ye(i), from: o.address }],
      });
}
async function x3(
  e,
  { account: t = e.account, domain: n, message: r, primaryType: s, types: o }
) {
  if (!t) throw new Cs({ docsPath: "/docs/actions/wallet/signTypedData" });
  const i = jt(t),
    a = { EIP712Domain: Sb({ domain: n }), ...o };
  if (
    (kb({ domain: n, message: r, primaryType: s, types: a }),
    i.type === "local")
  )
    return i.signTypedData({ domain: n, primaryType: s, types: a, message: r });
  const c = wt(
    { domain: n ?? {}, primaryType: s, types: a, message: r },
    (u, l) => (pn(l) ? l.toLowerCase() : l)
  );
  return e.request({ method: "eth_signTypedData_v4", params: [i.address, c] });
}
async function _3(e, { id: t }) {
  await e.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: ye(t) }],
  });
}
async function k3(e, t) {
  return await e.request({ method: "wallet_watchAsset", params: t });
}
function S3(e) {
  return {
    addChain: (t) => dE(e, t),
    deployContract: (t) => b3(e, t),
    getAddresses: () => g3(e),
    getChainId: () => $o(e),
    getPermissions: () => y3(e),
    prepareTransactionRequest: (t) => Ta(e, t),
    requestAddresses: () => w3(e),
    requestPermissions: (t) => v3(e, t),
    sendRawTransaction: (t) => Hu(e, t),
    sendTransaction: (t) => zu(e, t),
    signMessage: (t) => E3(e, t),
    signTransaction: (t) => C3(e, t),
    signTypedData: (t) => x3(e, t),
    switchChain: (t) => _3(e, t),
    watchAsset: (t) => k3(e, t),
    writeContract: (t) => fE(e, t),
  };
}
function Db(e) {
  const { key: t = "wallet", name: n = "Wallet Client", transport: r } = e;
  return ub({
    ...e,
    key: t,
    name: n,
    transport: (o) => r({ ...o, retryCount: 0 }),
    type: "walletClient",
  }).extend(S3);
}
function A3(e, t = {}) {
  const {
    key: n = "webSocket",
    name: r = "WebSocket JSON-RPC",
    retryDelay: s,
  } = t;
  return ({ chain: o, retryCount: i, timeout: a }) => {
    var f;
    const c = t.retryCount ?? i,
      u = a ?? t.timeout ?? 1e4,
      l =
        e ||
        ((f = o == null ? void 0 : o.rpcUrls.default.webSocket) == null
          ? void 0
          : f[0]);
    if (!l) throw new hb();
    return $a(
      {
        key: n,
        name: r,
        async request({ method: h, params: p }) {
          const m = { method: h, params: p },
            g = await wc(l),
            { error: y, result: k } = await os.webSocketAsync(g, {
              body: m,
              timeout: u,
            });
          if (y) throw new Nu({ body: m, error: y, url: l });
          return k;
        },
        retryCount: c,
        retryDelay: s,
        timeout: u,
        type: "webSocket",
      },
      {
        getSocket() {
          return wc(l);
        },
        async subscribe({ params: h, onData: p, onError: m }) {
          const g = await wc(l),
            { result: y } = await new Promise((k, b) =>
              os.webSocket(g, {
                body: { method: "eth_subscribe", params: h },
                onResponse(E) {
                  if (E.error) {
                    b(E.error), m == null || m(E.error);
                    return;
                  }
                  if (typeof E.id == "number") {
                    k(E);
                    return;
                  }
                  E.method === "eth_subscription" && p(E.params);
                },
              })
            );
          return {
            subscriptionId: y,
            async unsubscribe() {
              return new Promise((k) =>
                os.webSocket(g, {
                  body: { method: "eth_unsubscribe", params: [y] },
                  onResponse: k,
                })
              );
            },
          };
        },
      }
    );
  };
}
const P3 = Im({
    id: 5,
    network: "goerli",
    name: "Goerli",
    nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://eth-goerli.g.alchemy.com/v2"],
        webSocket: ["wss://eth-goerli.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://goerli.infura.io/v3"],
        webSocket: ["wss://goerli.infura.io/ws/v3"],
      },
      default: { http: ["https://rpc.ankr.com/eth_goerli"] },
      public: { http: ["https://rpc.ankr.com/eth_goerli"] },
    },
    blockExplorers: {
      etherscan: { name: "Etherscan", url: "https://goerli.etherscan.io" },
      default: { name: "Etherscan", url: "https://goerli.etherscan.io" },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      ensUniversalResolver: {
        address: "0x56522D00C410a43BFfDF00a9A569489297385790",
        blockCreated: 8765204,
      },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 6507670,
      },
    },
    testnet: !0,
  }),
  T3 = Im({
    id: 1,
    network: "homestead",
    name: "Ethereum",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://eth-mainnet.g.alchemy.com/v2"],
        webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://mainnet.infura.io/v3"],
        webSocket: ["wss://mainnet.infura.io/ws/v3"],
      },
      default: { http: ["https://cloudflare-eth.com"] },
      public: { http: ["https://cloudflare-eth.com"] },
    },
    blockExplorers: {
      etherscan: { name: "Etherscan", url: "https://etherscan.io" },
      default: { name: "Etherscan", url: "https://etherscan.io" },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      ensUniversalResolver: {
        address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
        blockCreated: 16966585,
      },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 14353601,
      },
    },
  });
var D3 = class extends Error {
    constructor({ chainId: e, connectorId: t }) {
      super(`Chain "${e}" not configured for connector "${t}".`),
        (this.name = "ChainNotConfiguredForConnectorError");
    }
  },
  Vn = class extends Error {
    constructor() {
      super(...arguments),
        (this.name = "ConnectorNotFoundError"),
        (this.message = "Connector not found");
    }
  };
function Id(e) {
  return typeof e == "string"
    ? Number.parseInt(e, e.trim().substring(0, 2) === "0x" ? 16 : 10)
    : typeof e == "bigint"
    ? Number(e)
    : e;
}
var O3 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ob(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Ib(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var $b = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    n = "~";
  function r() {}
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1));
  function s(c, u, l) {
    (this.fn = c), (this.context = u), (this.once = l || !1);
  }
  function o(c, u, l, f, h) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var p = new s(l, f || c, h),
      m = n ? n + u : u;
    return (
      c._events[m]
        ? c._events[m].fn
          ? (c._events[m] = [c._events[m], p])
          : c._events[m].push(p)
        : ((c._events[m] = p), c._eventsCount++),
      c
    );
  }
  function i(c, u) {
    --c._eventsCount === 0 ? (c._events = new r()) : delete c._events[u];
  }
  function a() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  (a.prototype.eventNames = function () {
    var u = [],
      l,
      f;
    if (this._eventsCount === 0) return u;
    for (f in (l = this._events)) t.call(l, f) && u.push(n ? f.slice(1) : f);
    return Object.getOwnPropertySymbols
      ? u.concat(Object.getOwnPropertySymbols(l))
      : u;
  }),
    (a.prototype.listeners = function (u) {
      var l = n ? n + u : u,
        f = this._events[l];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var h = 0, p = f.length, m = new Array(p); h < p; h++)
        m[h] = f[h].fn;
      return m;
    }),
    (a.prototype.listenerCount = function (u) {
      var l = n ? n + u : u,
        f = this._events[l];
      return f ? (f.fn ? 1 : f.length) : 0;
    }),
    (a.prototype.emit = function (u, l, f, h, p, m) {
      var g = n ? n + u : u;
      if (!this._events[g]) return !1;
      var y = this._events[g],
        k = arguments.length,
        b,
        E;
      if (y.fn) {
        switch ((y.once && this.removeListener(u, y.fn, void 0, !0), k)) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, l), !0;
          case 3:
            return y.fn.call(y.context, l, f), !0;
          case 4:
            return y.fn.call(y.context, l, f, h), !0;
          case 5:
            return y.fn.call(y.context, l, f, h, p), !0;
          case 6:
            return y.fn.call(y.context, l, f, h, p, m), !0;
        }
        for (E = 1, b = new Array(k - 1); E < k; E++) b[E - 1] = arguments[E];
        y.fn.apply(y.context, b);
      } else {
        var v = y.length,
          w;
        for (E = 0; E < v; E++)
          switch (
            (y[E].once && this.removeListener(u, y[E].fn, void 0, !0), k)
          ) {
            case 1:
              y[E].fn.call(y[E].context);
              break;
            case 2:
              y[E].fn.call(y[E].context, l);
              break;
            case 3:
              y[E].fn.call(y[E].context, l, f);
              break;
            case 4:
              y[E].fn.call(y[E].context, l, f, h);
              break;
            default:
              if (!b)
                for (w = 1, b = new Array(k - 1); w < k; w++)
                  b[w - 1] = arguments[w];
              y[E].fn.apply(y[E].context, b);
          }
      }
      return !0;
    }),
    (a.prototype.on = function (u, l, f) {
      return o(this, u, l, f, !1);
    }),
    (a.prototype.once = function (u, l, f) {
      return o(this, u, l, f, !0);
    }),
    (a.prototype.removeListener = function (u, l, f, h) {
      var p = n ? n + u : u;
      if (!this._events[p]) return this;
      if (!l) return i(this, p), this;
      var m = this._events[p];
      if (m.fn)
        m.fn === l && (!h || m.once) && (!f || m.context === f) && i(this, p);
      else {
        for (var g = 0, y = [], k = m.length; g < k; g++)
          (m[g].fn !== l || (h && !m[g].once) || (f && m[g].context !== f)) &&
            y.push(m[g]);
        y.length ? (this._events[p] = y.length === 1 ? y[0] : y) : i(this, p);
      }
      return this;
    }),
    (a.prototype.removeAllListeners = function (u) {
      var l;
      return (
        u
          ? ((l = n ? n + u : u), this._events[l] && i(this, l))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.addListener = a.prototype.on),
    (a.prefixed = n),
    (a.EventEmitter = a),
    (e.exports = a);
})($b);
var I3 = $b.exports;
const $3 = Ob(I3);
var Ku = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  je = (e, t, n) => (
    Ku(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Nt = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  Xu = (e, t, n, r) => (Ku(e, t, "write to private field"), t.set(e, n), n),
  et = (e, t, n) => (Ku(e, t, "access private method"), n),
  Nb = class extends $3 {
    constructor({ chains: e = [T3, P3], options: t }) {
      super(), (this.chains = e), (this.options = t);
    }
    getBlockExplorerUrls(e) {
      const { default: t, ...n } = e.blockExplorers ?? {};
      if (t) return [t.url, ...Object.values(n).map((r) => r.url)];
    }
    isChainUnsupported(e) {
      return !this.chains.some((t) => t.id === e);
    }
    setStorage(e) {
      this.storage = e;
    }
  };
function N3(e) {
  var n;
  if (!e) return "Injected";
  const t = (r) => {
    if (r.isApexWallet) return "Apex Wallet";
    if (r.isAvalanche) return "Core Wallet";
    if (r.isBackpack) return "Backpack";
    if (r.isBifrost) return "Bifrost Wallet";
    if (r.isBitKeep) return "BitKeep";
    if (r.isBitski) return "Bitski";
    if (r.isBlockWallet) return "BlockWallet";
    if (r.isBraveWallet) return "Brave Wallet";
    if (r.isCoin98) return "Coin98 Wallet";
    if (r.isCoinbaseWallet) return "Coinbase Wallet";
    if (r.isDawn) return "Dawn Wallet";
    if (r.isDefiant) return "Defiant";
    if (r.isDesig) return "Desig Wallet";
    if (r.isEnkrypt) return "Enkrypt";
    if (r.isExodus) return "Exodus";
    if (r.isFordefi) return "Fordefi";
    if (r.isFrame) return "Frame";
    if (r.isFrontier) return "Frontier Wallet";
    if (r.isGamestop) return "GameStop Wallet";
    if (r.isHaqqWallet) return "HAQQ Wallet";
    if (r.isHyperPay) return "HyperPay Wallet";
    if (r.isImToken) return "ImToken";
    if (r.isHaloWallet) return "Halo Wallet";
    if (r.isKuCoinWallet) return "KuCoin Wallet";
    if (r.isMathWallet) return "MathWallet";
    if (r.isNovaWallet) return "Nova Wallet";
    if (r.isOkxWallet || r.isOKExWallet) return "OKX Wallet";
    if (r.isOktoWallet) return "Okto Wallet";
    if (r.isOneInchIOSWallet || r.isOneInchAndroidWallet) return "1inch Wallet";
    if (r.isOneKey) return "OneKey Wallet";
    if (r.isOpera) return "Opera";
    if (r.isPhantom) return "Phantom";
    if (r.isPortal) return "Ripio Portal";
    if (r.isRabby) return "Rabby Wallet";
    if (r.isRainbow) return "Rainbow";
    if (r.isSafePal) return "SafePal Wallet";
    if (r.isStatus) return "Status";
    if (r.isSubWallet) return "SubWallet";
    if (r.isTalisman) return "Talisman";
    if (r.isTally) return "Taho";
    if (r.isTokenPocket) return "TokenPocket";
    if (r.isTokenary) return "Tokenary";
    if (r.isTrust || r.isTrustWallet) return "Trust Wallet";
    if (r.isTTWallet) return "TTWallet";
    if (r.isXDEFI) return "XDEFI Wallet";
    if (r.isZeal) return "Zeal";
    if (r.isZerion) return "Zerion";
    if (r.isMetaMask) return "MetaMask";
  };
  if ((n = e.providers) != null && n.length) {
    const r = new Set();
    let s = 1;
    for (const i of e.providers) {
      let a = t(i);
      a || ((a = `Unknown Wallet #${s}`), (s += 1)), r.add(a);
    }
    const o = [...r];
    return o.length ? o : o[0] ?? "Injected";
  }
  return t(e) ?? "Injected";
}
var ki,
  Mb = class extends Nb {
    constructor({ chains: e, options: t } = {}) {
      const n = {
        shimDisconnect: !0,
        getProvider() {
          if (typeof window > "u") return;
          const s = window.ethereum;
          return s != null && s.providers && s.providers.length > 0
            ? s.providers[0]
            : s;
        },
        ...t,
      };
      super({ chains: e, options: n }),
        (this.id = "injected"),
        Nt(this, ki, void 0),
        (this.shimDisconnectKey = `${this.id}.shimDisconnect`),
        (this.onAccountsChanged = (s) => {
          s.length === 0
            ? this.emit("disconnect")
            : this.emit("change", { account: nr(s[0]) });
        }),
        (this.onChainChanged = (s) => {
          const o = Id(s),
            i = this.isChainUnsupported(o);
          this.emit("change", { chain: { id: o, unsupported: i } });
        }),
        (this.onDisconnect = async (s) => {
          var o;
          (s.code === 1013 &&
            (await this.getProvider()) &&
            (await this.getAccount())) ||
            (this.emit("disconnect"),
            this.options.shimDisconnect &&
              ((o = this.storage) == null ||
                o.removeItem(this.shimDisconnectKey)));
        });
      const r = n.getProvider();
      if (typeof n.name == "string") this.name = n.name;
      else if (r) {
        const s = N3(r);
        n.name
          ? (this.name = n.name(s))
          : typeof s == "string"
          ? (this.name = s)
          : (this.name = s[0]);
      } else this.name = "Injected";
      this.ready = !!r;
    }
    async connect({ chainId: e } = {}) {
      var t;
      try {
        const n = await this.getProvider();
        if (!n) throw new Vn();
        n.on &&
          (n.on("accountsChanged", this.onAccountsChanged),
          n.on("chainChanged", this.onChainChanged),
          n.on("disconnect", this.onDisconnect)),
          this.emit("message", { type: "connecting" });
        const r = await n.request({ method: "eth_requestAccounts" }),
          s = nr(r[0]);
        let o = await this.getChainId(),
          i = this.isChainUnsupported(o);
        return (
          e &&
            o !== e &&
            ((o = (await this.switchChain(e)).id),
            (i = this.isChainUnsupported(o))),
          this.options.shimDisconnect &&
            ((t = this.storage) == null ||
              t.setItem(this.shimDisconnectKey, !0)),
          { account: s, chain: { id: o, unsupported: i } }
        );
      } catch (n) {
        throw this.isUserRejectedRequestError(n)
          ? new Ut(n)
          : n.code === -32002
          ? new hs(n)
          : n;
      }
    }
    async disconnect() {
      var t;
      const e = await this.getProvider();
      e != null &&
        e.removeListener &&
        (e.removeListener("accountsChanged", this.onAccountsChanged),
        e.removeListener("chainChanged", this.onChainChanged),
        e.removeListener("disconnect", this.onDisconnect),
        this.options.shimDisconnect &&
          ((t = this.storage) == null || t.removeItem(this.shimDisconnectKey)));
    }
    async getAccount() {
      const e = await this.getProvider();
      if (!e) throw new Vn();
      const t = await e.request({ method: "eth_accounts" });
      return nr(t[0]);
    }
    async getChainId() {
      const e = await this.getProvider();
      if (!e) throw new Vn();
      return e.request({ method: "eth_chainId" }).then(Id);
    }
    async getProvider() {
      const e = this.options.getProvider();
      return e && Xu(this, ki, e), je(this, ki);
    }
    async getWalletClient({ chainId: e } = {}) {
      const [t, n] = await Promise.all([this.getProvider(), this.getAccount()]),
        r = this.chains.find((s) => s.id === e);
      if (!t) throw new Error("provider is required.");
      return Db({ account: n, chain: r, transport: db(t) });
    }
    async isAuthorized() {
      var e;
      try {
        if (
          this.options.shimDisconnect &&
          !((e = this.storage) != null && e.getItem(this.shimDisconnectKey))
        )
          return !1;
        if (!(await this.getProvider())) throw new Vn();
        return !!(await this.getAccount());
      } catch {
        return !1;
      }
    }
    async switchChain(e) {
      var r, s, o;
      const t = await this.getProvider();
      if (!t) throw new Vn();
      const n = ye(e);
      try {
        return (
          await Promise.all([
            t.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: n }],
            }),
            new Promise((i) =>
              this.on("change", ({ chain: a }) => {
                (a == null ? void 0 : a.id) === e && i();
              })
            ),
          ]),
          this.chains.find((i) => i.id === e) ?? {
            id: e,
            name: `Chain ${n}`,
            network: `${n}`,
            nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
            rpcUrls: { default: { http: [""] }, public: { http: [""] } },
          }
        );
      } catch (i) {
        const a = this.chains.find((c) => c.id === e);
        if (!a) throw new D3({ chainId: e, connectorId: this.id });
        if (
          i.code === 4902 ||
          ((s =
            (r = i == null ? void 0 : i.data) == null
              ? void 0
              : r.originalError) == null
            ? void 0
            : s.code) === 4902
        )
          try {
            if (
              (await t.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: n,
                    chainName: a.name,
                    nativeCurrency: a.nativeCurrency,
                    rpcUrls: [
                      ((o = a.rpcUrls.public) == null ? void 0 : o.http[0]) ??
                        "",
                    ],
                    blockExplorerUrls: this.getBlockExplorerUrls(a),
                  },
                ],
              }),
              (await this.getChainId()) !== e)
            )
              throw new Ut(
                new Error("User rejected switch after adding network.")
              );
            return a;
          } catch (c) {
            throw new Ut(c);
          }
        throw this.isUserRejectedRequestError(i) ? new Ut(i) : new ar(i);
      }
    }
    async watchAsset({ address: e, decimals: t = 18, image: n, symbol: r }) {
      const s = await this.getProvider();
      if (!s) throw new Vn();
      return s.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: { address: e, decimals: t, image: n, symbol: r },
        },
      });
    }
    isUserRejectedRequestError(e) {
      return e.code === 4001;
    }
  };
ki = new WeakMap();
var Yu = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  Ec = (e, t, n) => (Yu(e, t, "read from private field"), t.get(e)),
  Cc = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  di = (e, t, n, r) => (Yu(e, t, "write to private field"), t.set(e, n), n),
  M3 = (e, t, n) => (Yu(e, t, "access private method"), n);
const U3 = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  F3 = (e) => (t, n, r) => {
    const s = r.subscribe;
    return (
      (r.subscribe = (i, a, c) => {
        let u = i;
        if (a) {
          const l = (c == null ? void 0 : c.equalityFn) || Object.is;
          let f = i(r.getState());
          (u = (h) => {
            const p = i(h);
            if (!l(f, p)) {
              const m = f;
              a((f = p), m);
            }
          }),
            c != null && c.fireImmediately && a(f, f);
        }
        return s(u);
      }),
      e(t, n, r)
    );
  },
  B3 = F3;
function L3(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var o;
      const i = (c) => (c === null ? null : JSON.parse(c, void 0)),
        a = (o = n.getItem(s)) != null ? o : null;
      return a instanceof Promise ? a.then(i) : i(a);
    },
    setItem: (s, o) => n.setItem(s, JSON.stringify(o, void 0)),
    removeItem: (s) => n.removeItem(s),
  };
}
const No = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return No(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return No(r)(n);
        },
      };
    }
  },
  R3 = (e, t) => (n, r, s) => {
    let o = {
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: (y) => y,
        version: 0,
        merge: (y, k) => ({ ...k, ...y }),
        ...t,
      },
      i = !1;
    const a = new Set(),
      c = new Set();
    let u;
    try {
      u = o.getStorage();
    } catch {}
    if (!u)
      return e(
        (...y) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
          ),
            n(...y);
        },
        r,
        s
      );
    const l = No(o.serialize),
      f = () => {
        const y = o.partialize({ ...r() });
        let k;
        const b = l({ state: y, version: o.version })
          .then((E) => u.setItem(o.name, E))
          .catch((E) => {
            k = E;
          });
        if (k) throw k;
        return b;
      },
      h = s.setState;
    s.setState = (y, k) => {
      h(y, k), f();
    };
    const p = e(
      (...y) => {
        n(...y), f();
      },
      r,
      s
    );
    let m;
    const g = () => {
      var y;
      if (!u) return;
      (i = !1), a.forEach((b) => b(r()));
      const k =
        ((y = o.onRehydrateStorage) == null ? void 0 : y.call(o, r())) ||
        void 0;
      return No(u.getItem.bind(u))(o.name)
        .then((b) => {
          if (b) return o.deserialize(b);
        })
        .then((b) => {
          if (b)
            if (typeof b.version == "number" && b.version !== o.version) {
              if (o.migrate) return o.migrate(b.state, b.version);
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return b.state;
        })
        .then((b) => {
          var E;
          return (m = o.merge(b, (E = r()) != null ? E : p)), n(m, !0), f();
        })
        .then(() => {
          k == null || k(m, void 0), (i = !0), c.forEach((b) => b(m));
        })
        .catch((b) => {
          k == null || k(void 0, b);
        });
    };
    return (
      (s.persist = {
        setOptions: (y) => {
          (o = { ...o, ...y }), y.getStorage && (u = y.getStorage());
        },
        clearStorage: () => {
          u == null || u.removeItem(o.name);
        },
        getOptions: () => o,
        rehydrate: () => g(),
        hasHydrated: () => i,
        onHydrate: (y) => (
          a.add(y),
          () => {
            a.delete(y);
          }
        ),
        onFinishHydration: (y) => (
          c.add(y),
          () => {
            c.delete(y);
          }
        ),
      }),
      g(),
      m || p
    );
  },
  j3 = (e, t) => (n, r, s) => {
    let o = {
        storage: L3(() => localStorage),
        partialize: (g) => g,
        version: 0,
        merge: (g, y) => ({ ...y, ...g }),
        ...t,
      },
      i = !1;
    const a = new Set(),
      c = new Set();
    let u = o.storage;
    if (!u)
      return e(
        (...g) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
          ),
            n(...g);
        },
        r,
        s
      );
    const l = () => {
        const g = o.partialize({ ...r() });
        return u.setItem(o.name, { state: g, version: o.version });
      },
      f = s.setState;
    s.setState = (g, y) => {
      f(g, y), l();
    };
    const h = e(
      (...g) => {
        n(...g), l();
      },
      r,
      s
    );
    s.getInitialState = () => h;
    let p;
    const m = () => {
      var g, y;
      if (!u) return;
      (i = !1),
        a.forEach((b) => {
          var E;
          return b((E = r()) != null ? E : h);
        });
      const k =
        ((y = o.onRehydrateStorage) == null
          ? void 0
          : y.call(o, (g = r()) != null ? g : h)) || void 0;
      return No(u.getItem.bind(u))(o.name)
        .then((b) => {
          if (b)
            if (typeof b.version == "number" && b.version !== o.version) {
              if (o.migrate) return [!0, o.migrate(b.state, b.version)];
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, b.state];
          return [!1, void 0];
        })
        .then((b) => {
          var E;
          const [v, w] = b;
          if (((p = o.merge(w, (E = r()) != null ? E : h)), n(p, !0), v))
            return l();
        })
        .then(() => {
          k == null || k(p, void 0),
            (p = r()),
            (i = !0),
            c.forEach((b) => b(p));
        })
        .catch((b) => {
          k == null || k(void 0, b);
        });
    };
    return (
      (s.persist = {
        setOptions: (g) => {
          (o = { ...o, ...g }), g.storage && (u = g.storage);
        },
        clearStorage: () => {
          u == null || u.removeItem(o.name);
        },
        getOptions: () => o,
        rehydrate: () => m(),
        hasHydrated: () => i,
        onHydrate: (g) => (
          a.add(g),
          () => {
            a.delete(g);
          }
        ),
        onFinishHydration: (g) => (
          c.add(g),
          () => {
            c.delete(g);
          }
        ),
      }),
      o.skipHydration || m(),
      p || h
    );
  },
  H3 = (e, t) =>
    "getStorage" in t || "serialize" in t || "deserialize" in t
      ? ((U3 ? "production" : void 0) !== "production" &&
          console.warn(
            "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
          ),
        R3(e, t))
      : j3(e, t),
  z3 = H3,
  W3 = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  $d = (e) => {
    let t;
    const n = new Set(),
      r = (l, f) => {
        const h = typeof l == "function" ? l(t) : l;
        if (!Object.is(h, t)) {
          const p = t;
          (t =
            f ?? (typeof h != "object" || h === null)
              ? h
              : Object.assign({}, t, h)),
            n.forEach((m) => m(t, p));
        }
      },
      s = () => t,
      c = {
        setState: r,
        getState: s,
        getInitialState: () => u,
        subscribe: (l) => (n.add(l), () => n.delete(l)),
        destroy: () => {
          (W3 ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      },
      u = (t = e(r, s, c));
    return c;
  },
  q3 = (e) => (e ? $d(e) : $d);
function Ub(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, s] of e) if (!Object.is(s, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
function G3(
  e,
  t,
  {
    batch: n = { multicall: { wait: 32 } },
    pollingInterval: r = 4e3,
    rank: s,
    retryCount: o,
    retryDelay: i,
    stallTimeout: a,
  } = {}
) {
  if (!e.length) throw new Error("must have at least one chain");
  let c = [];
  const u = {},
    l = {};
  for (const f of e) {
    let h = !1;
    for (const p of t) {
      const m = p(f);
      m &&
        ((h = !0),
        c.some(({ id: g }) => g === f.id) || (c = [...c, m.chain]),
        (u[f.id] = [...(u[f.id] || []), ...m.rpcUrls.http]),
        m.rpcUrls.webSocket &&
          (l[f.id] = [...(l[f.id] || []), ...m.rpcUrls.webSocket]));
    }
    if (!h)
      throw new Error(
        [
          `Could not find valid provider configuration for chain "${f.name}".
`,
          "You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.",
          "Read more: https://wagmi.sh/core/providers/jsonRpc",
        ].join(`
`)
      );
  }
  return {
    chains: c,
    publicClient: ({ chainId: f }) => {
      const h = c.find((g) => g.id === f) ?? e[0],
        p = u[h.id];
      if (!p || !p[0])
        throw new Error(`No providers configured for chain "${h.id}"`);
      const m = Od({
        batch: n,
        chain: h,
        transport: Pd(
          p.map((g) => vE(g, { timeout: a })),
          { rank: s, retryCount: o, retryDelay: i }
        ),
        pollingInterval: r,
      });
      return Object.assign(m, { chains: c });
    },
    webSocketPublicClient: ({ chainId: f }) => {
      const h = c.find((g) => g.id === f) ?? e[0],
        p = l[h.id];
      if (!p || !p[0]) return;
      const m = Od({
        batch: n,
        chain: h,
        transport: Pd(
          p.map((g) => A3(g, { timeout: a })),
          { rank: s, retryCount: o, retryDelay: i }
        ),
        pollingInterval: r,
      });
      return Object.assign(m, { chains: c });
    },
  };
}
var V3 = class extends Error {
    constructor({ chainId: e, connectorId: t }) {
      super(`Chain "${e}" not configured${t ? ` for connector "${t}"` : ""}.`),
        (this.name = "ChainNotConfigured");
    }
  },
  K3 = class extends Error {
    constructor() {
      super(...arguments),
        (this.name = "ConnectorAlreadyConnectedError"),
        (this.message = "Connector already connected");
    }
  },
  X3 = class extends Error {
    constructor() {
      super(...arguments),
        (this.name = "ConfigChainsNotFound"),
        (this.message =
          "No chains were found on the wagmi config. Some functions that require a chain may not work.");
    }
  },
  Y3 = class extends Error {
    constructor({ connector: e }) {
      super(`"${e.name}" does not support programmatic chain switching.`),
        (this.name = "SwitchChainNotSupportedError");
    }
  },
  kl = (e, { find: t, replace: n }) =>
    e && t(e)
      ? n(e)
      : typeof e != "object"
      ? e
      : Array.isArray(e)
      ? e.map((r) => kl(r, { find: t, replace: n }))
      : e instanceof Object
      ? Object.entries(e).reduce(
          (r, [s, o]) => ({ ...r, [s]: kl(o, { find: t, replace: n }) }),
          {}
        )
      : e;
function Z3(e) {
  const t = JSON.parse(e);
  return kl(t, {
    find: (r) => typeof r == "string" && r.startsWith("#bigint."),
    replace: (r) => BigInt(r.replace("#bigint.", "")),
  });
}
function Sl(e) {
  return typeof e == "number" ? e : e === "wei" ? 0 : Math.abs(mv[e]);
}
function Nd(e, t) {
  return e.slice(0, t).join(".") || ".";
}
function Md(e, t) {
  const { length: n } = e;
  for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
  return 0;
}
function J3(e, t) {
  const n = typeof e == "function",
    r = typeof t == "function",
    s = [],
    o = [];
  return function (a, c) {
    if (typeof c == "object")
      if (s.length) {
        const u = Md(s, this);
        u === 0 ? (s[s.length] = this) : (s.splice(u), o.splice(u)),
          (o[o.length] = a);
        const l = Md(s, c);
        if (l !== 0)
          return r ? t.call(this, a, c, Nd(o, l)) : `[ref=${Nd(o, l)}]`;
      } else (s[0] = c), (o[0] = a);
    return n ? e.call(this, a, c) : c;
  };
}
function Q3(e, t, n, r) {
  return JSON.stringify(
    e,
    J3((s, o) => {
      const i = typeof o == "bigint" ? `#bigint.${o.toString()}` : o;
      return (t == null ? void 0 : t(s, i)) || i;
    }, r),
    n ?? void 0
  );
}
var e6 = {
  getItem: (e) => "",
  setItem: (e, t) => null,
  removeItem: (e) => null,
};
function t6({
  deserialize: e = Z3,
  key: t = "wagmi",
  serialize: n = Q3,
  storage: r,
}) {
  return {
    ...r,
    getItem: (s, o = null) => {
      const i = r.getItem(`${t}.${s}`);
      try {
        return i ? e(i) : o;
      } catch (a) {
        return console.warn(a), o;
      }
    },
    setItem: (s, o) => {
      if (o === null) r.removeItem(`${t}.${s}`);
      else
        try {
          r.setItem(`${t}.${s}`, n(o));
        } catch (i) {
          console.error(i);
        }
    },
    removeItem: (s) => r.removeItem(`${t}.${s}`),
  };
}
var Ud = "store",
  Gr,
  Ws,
  Al,
  Fb,
  n6 = class {
    constructor({
      autoConnect: e = !1,
      connectors: t = [new Mb()],
      publicClient: n,
      storage: r = t6({
        storage: typeof window < "u" ? window.localStorage : e6,
      }),
      logger: s = { warn: console.warn },
      webSocketPublicClient: o,
    }) {
      var u, l;
      Cc(this, Al),
        (this.publicClients = new Map()),
        (this.webSocketPublicClients = new Map()),
        Cc(this, Gr, void 0),
        Cc(this, Ws, void 0),
        (this.args = {
          autoConnect: e,
          connectors: t,
          logger: s,
          publicClient: n,
          storage: r,
          webSocketPublicClient: o,
        });
      let i = "disconnected",
        a;
      if (e)
        try {
          const f = r.getItem(Ud),
            h = (u = f == null ? void 0 : f.state) == null ? void 0 : u.data;
          (i = h != null && h.account ? "reconnecting" : "connecting"),
            (a = (l = h == null ? void 0 : h.chain) == null ? void 0 : l.id);
        } catch {}
      const c = typeof t == "function" ? t() : t;
      c.forEach((f) => f.setStorage(r)),
        (this.store = q3(
          B3(
            z3(
              () => ({
                connectors: c,
                publicClient: this.getPublicClient({ chainId: a }),
                status: i,
                webSocketPublicClient: this.getWebSocketPublicClient({
                  chainId: a,
                }),
              }),
              {
                name: Ud,
                storage: r,
                partialize: (f) => {
                  var h, p;
                  return {
                    ...(e && {
                      data: {
                        account:
                          (h = f == null ? void 0 : f.data) == null
                            ? void 0
                            : h.account,
                        chain:
                          (p = f == null ? void 0 : f.data) == null
                            ? void 0
                            : p.chain,
                      },
                    }),
                    chains: f == null ? void 0 : f.chains,
                  };
                },
                version: 2,
              }
            )
          )
        )),
        (this.storage = r),
        di(this, Ws, r == null ? void 0 : r.getItem("wallet")),
        M3(this, Al, Fb).call(this),
        e &&
          typeof window < "u" &&
          setTimeout(async () => await this.autoConnect(), 0);
    }
    get chains() {
      return this.store.getState().chains;
    }
    get connectors() {
      return this.store.getState().connectors;
    }
    get connector() {
      return this.store.getState().connector;
    }
    get data() {
      return this.store.getState().data;
    }
    get error() {
      return this.store.getState().error;
    }
    get lastUsedChainId() {
      var e, t;
      return (t = (e = this.data) == null ? void 0 : e.chain) == null
        ? void 0
        : t.id;
    }
    get publicClient() {
      return this.store.getState().publicClient;
    }
    get status() {
      return this.store.getState().status;
    }
    get subscribe() {
      return this.store.subscribe;
    }
    get webSocketPublicClient() {
      return this.store.getState().webSocketPublicClient;
    }
    setState(e) {
      const t = typeof e == "function" ? e(this.store.getState()) : e;
      this.store.setState(t, !0);
    }
    clearState() {
      this.setState((e) => ({
        ...e,
        chains: void 0,
        connector: void 0,
        data: void 0,
        error: void 0,
        status: "disconnected",
      }));
    }
    async destroy() {
      var e, t;
      this.connector &&
        (await ((t = (e = this.connector).disconnect) == null
          ? void 0
          : t.call(e))),
        di(this, Gr, !1),
        this.clearState(),
        this.store.destroy();
    }
    async autoConnect() {
      if (Ec(this, Gr)) return;
      di(this, Gr, !0),
        this.setState((n) => {
          var r;
          return {
            ...n,
            status:
              (r = n.data) != null && r.account ? "reconnecting" : "connecting",
          };
        });
      const e = Ec(this, Ws)
        ? [...this.connectors].sort((n) => (n.id === Ec(this, Ws) ? -1 : 1))
        : this.connectors;
      let t = !1;
      for (const n of e) {
        if (!n.ready || !n.isAuthorized || !(await n.isAuthorized())) continue;
        const s = await n.connect();
        this.setState((o) => ({
          ...o,
          connector: n,
          chains: n == null ? void 0 : n.chains,
          data: s,
          status: "connected",
        })),
          (t = !0);
        break;
      }
      return (
        t ||
          this.setState((n) => ({
            ...n,
            data: void 0,
            status: "disconnected",
          })),
        di(this, Gr, !1),
        this.data
      );
    }
    setConnectors(e) {
      this.args = { ...this.args, connectors: e };
      const t = typeof e == "function" ? e() : e;
      t.forEach((n) => n.setStorage(this.args.storage)),
        this.setState((n) => ({ ...n, connectors: t }));
    }
    getPublicClient({ chainId: e } = {}) {
      let t = this.publicClients.get(-1);
      if (
        (t && (t == null ? void 0 : t.chain.id) === e) ||
        ((t = this.publicClients.get(e ?? -1)), t)
      )
        return t;
      const { publicClient: n } = this.args;
      return (
        (t = typeof n == "function" ? n({ chainId: e }) : n),
        this.publicClients.set(e ?? -1, t),
        t
      );
    }
    setPublicClient(e) {
      var n, r;
      const t =
        (r = (n = this.data) == null ? void 0 : n.chain) == null
          ? void 0
          : r.id;
      (this.args = { ...this.args, publicClient: e }),
        this.publicClients.clear(),
        this.setState((s) => ({
          ...s,
          publicClient: this.getPublicClient({ chainId: t }),
        }));
    }
    getWebSocketPublicClient({ chainId: e } = {}) {
      let t = this.webSocketPublicClients.get(-1);
      if (
        (t && (t == null ? void 0 : t.chain.id) === e) ||
        ((t = this.webSocketPublicClients.get(e ?? -1)), t)
      )
        return t;
      const { webSocketPublicClient: n } = this.args;
      return (
        (t = typeof n == "function" ? n({ chainId: e }) : n),
        t && this.webSocketPublicClients.set(e ?? -1, t),
        t
      );
    }
    setWebSocketPublicClient(e) {
      var n, r;
      const t =
        (r = (n = this.data) == null ? void 0 : n.chain) == null
          ? void 0
          : r.id;
      (this.args = { ...this.args, webSocketPublicClient: e }),
        this.webSocketPublicClients.clear(),
        this.setState((s) => ({
          ...s,
          webSocketPublicClient: this.getWebSocketPublicClient({ chainId: t }),
        }));
    }
    setLastUsedConnector(e = null) {
      var t;
      (t = this.storage) == null || t.setItem("wallet", e);
    }
  };
Gr = new WeakMap();
Ws = new WeakMap();
Al = new WeakSet();
Fb = function () {
  const e = (a) => {
      this.setState((c) => ({ ...c, data: { ...c.data, ...a } }));
    },
    t = () => {
      this.clearState();
    },
    n = (a) => {
      this.setState((c) => ({ ...c, error: a }));
    };
  this.store.subscribe(
    ({ connector: a }) => a,
    (a, c) => {
      var u, l, f, h, p, m;
      (u = c == null ? void 0 : c.off) == null || u.call(c, "change", e),
        (l = c == null ? void 0 : c.off) == null || l.call(c, "disconnect", t),
        (f = c == null ? void 0 : c.off) == null || f.call(c, "error", n),
        a &&
          ((h = a.on) == null || h.call(a, "change", e),
          (p = a.on) == null || p.call(a, "disconnect", t),
          (m = a.on) == null || m.call(a, "error", n));
    }
  );
  const { publicClient: r, webSocketPublicClient: s } = this.args;
  (typeof r == "function" || typeof s == "function") &&
    this.store.subscribe(
      ({ data: a }) => {
        var c;
        return (c = a == null ? void 0 : a.chain) == null ? void 0 : c.id;
      },
      (a) => {
        this.setState((c) => ({
          ...c,
          publicClient: this.getPublicClient({ chainId: a }),
          webSocketPublicClient: this.getWebSocketPublicClient({ chainId: a }),
        }));
      }
    );
};
var Pl;
function r6(e) {
  const t = new n6(e);
  return (Pl = t), t;
}
function bn() {
  if (!Pl)
    throw new Error(
      "No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config"
    );
  return Pl;
}
async function Fd({ chainId: e, connector: t }) {
  const n = bn(),
    r = n.connector;
  if (r && t.id === r.id) throw new K3();
  try {
    n.setState((o) => ({ ...o, status: "connecting" }));
    const s = await t.connect({ chainId: e });
    return (
      n.setLastUsedConnector(t.id),
      n.setState((o) => ({
        ...o,
        connector: t,
        chains: t == null ? void 0 : t.chains,
        data: s,
        status: "connected",
      })),
      n.storage.setItem("connected", !0),
      { ...s, connector: t }
    );
  } catch (s) {
    throw (
      (n.setState((o) => ({
        ...o,
        status: o.connector ? "connected" : "disconnected",
      })),
      s)
    );
  }
}
async function Bb() {
  const e = bn();
  e.connector && (await e.connector.disconnect()),
    e.clearState(),
    e.storage.removeItem("connected");
}
var Lb = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      type: "function",
      name: "decimals",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "uint8" }],
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "string" }],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "string" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
  ],
  Rb = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      type: "function",
      name: "decimals",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "uint8" }],
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "bytes32" }],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "bytes32" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
  ];
async function s6({ address: e, chainId: t, formatUnits: n = 18 }) {
  async function r({ abi: s }) {
    const o = { address: e, abi: s, chainId: t },
      [i, a, c, u] = await Hb({
        allowFailure: !1,
        contracts: [
          { ...o, functionName: "decimals" },
          { ...o, functionName: "name" },
          { ...o, functionName: "symbol" },
          { ...o, functionName: "totalSupply" },
        ],
      });
    return {
      address: e,
      decimals: i,
      name: a,
      symbol: c,
      totalSupply: { formatted: yo(u, Sl(n)), value: u },
    };
  }
  try {
    return await r({ abi: Lb });
  } catch (s) {
    if (s instanceof Pa) {
      const { name: o, symbol: i, ...a } = await r({ abi: Rb });
      return {
        name: Ri(Tn(o, { dir: "right" })),
        symbol: Ri(Tn(i, { dir: "right" })),
        ...a,
      };
    }
    throw s;
  }
}
function Ss({ chainId: e } = {}) {
  const t = bn();
  return (e && t.getPublicClient({ chainId: e })) || t.publicClient;
}
async function o6({ chainId: e } = {}) {
  var r, s;
  return (
    (await ((s = (r = bn().connector) == null ? void 0 : r.getWalletClient) ==
    null
      ? void 0
      : s.call(r, { chainId: e }))) || null
  );
}
async function i6({
  chainId: e,
  contracts: t,
  blockNumber: n,
  blockTag: r,
  ...s
}) {
  const o = Ss({ chainId: e });
  if (!o.chains) throw new X3();
  if (e && o.chain.id !== e) throw new V3({ chainId: e });
  return o.multicall({
    allowFailure: s.allowFailure ?? !0,
    blockNumber: n,
    blockTag: r,
    contracts: t,
  });
}
async function jb({
  address: e,
  account: t,
  chainId: n,
  abi: r,
  args: s,
  functionName: o,
  blockNumber: i,
  blockTag: a,
}) {
  return Ss({ chainId: n }).readContract({
    abi: r,
    address: e,
    account: t,
    functionName: o,
    args: s,
    blockNumber: i,
    blockTag: a,
  });
}
async function Hb({ contracts: e, blockNumber: t, blockTag: n, ...r }) {
  const { allowFailure: s = !0 } = r;
  try {
    const o = Ss(),
      i = e.reduce((l, f, h) => {
        const p = f.chainId ?? o.chain.id;
        return { ...l, [p]: [...(l[p] || []), { contract: f, index: h }] };
      }, {}),
      a = () =>
        Object.entries(i).map(([l, f]) =>
          i6({
            allowFailure: s,
            chainId: parseInt(l),
            contracts: f.map(({ contract: h }) => h),
            blockNumber: t,
            blockTag: n,
          })
        ),
      c = (await Promise.all(a())).flat(),
      u = Object.values(i).flatMap((l) => l.map(({ index: f }) => f));
    return c.reduce((l, f, h) => (l && (l[u[h]] = f), l), []);
  } catch (o) {
    if (o instanceof Pa) throw o;
    const i = () => e.map((a) => jb({ ...a, blockNumber: t, blockTag: n }));
    return s
      ? (await Promise.allSettled(i())).map((a) =>
          a.status === "fulfilled"
            ? { result: a.value, status: "success" }
            : { error: a.reason, result: void 0, status: "failure" }
        )
      : await Promise.all(i());
  }
}
async function a6({ address: e, chainId: t, formatUnits: n, token: r }) {
  const s = bn(),
    o = Ss({ chainId: t });
  if (r) {
    const u = async ({ abi: l }) => {
      const f = { abi: l, address: r, chainId: t },
        [h, p, m] = await Hb({
          allowFailure: !1,
          contracts: [
            { ...f, functionName: "balanceOf", args: [e] },
            { ...f, functionName: "decimals" },
            { ...f, functionName: "symbol" },
          ],
        });
      return {
        decimals: p,
        formatted: yo(h ?? "0", Sl(n ?? p)),
        symbol: m,
        value: h,
      };
    };
    try {
      return await u({ abi: Lb });
    } catch (l) {
      if (l instanceof Pa) {
        const { symbol: f, ...h } = await u({ abi: Rb });
        return { symbol: Ri(Tn(f, { dir: "right" })), ...h };
      }
      throw l;
    }
  }
  const i = [...(s.publicClient.chains || []), ...(s.chains ?? [])],
    a = await o.getBalance({ address: e }),
    c = i.find((u) => u.id === o.chain.id);
  return {
    decimals: (c == null ? void 0 : c.nativeCurrency.decimals) ?? 18,
    formatted: yo(a ?? "0", Sl(n ?? 18)),
    symbol: (c == null ? void 0 : c.nativeCurrency.symbol) ?? "ETH",
    value: a,
  };
}
function zb() {
  const { data: e, connector: t, status: n } = bn();
  switch (n) {
    case "connected":
      return {
        address: e == null ? void 0 : e.account,
        connector: t,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: n,
      };
    case "reconnecting":
      return {
        address: e == null ? void 0 : e.account,
        connector: t,
        isConnected: !!(e != null && e.account),
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: n,
      };
    case "connecting":
      return {
        address: e == null ? void 0 : e.account,
        connector: t,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: n,
      };
    case "disconnected":
      return {
        address: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: n,
      };
  }
}
function Wb() {
  var s, o, i, a;
  const e = bn(),
    t = (o = (s = e.data) == null ? void 0 : s.chain) == null ? void 0 : o.id,
    n = e.chains ?? [],
    r = [
      ...(((i = e.publicClient) == null ? void 0 : i.chains) || []),
      ...n,
    ].find((c) => c.id === t) ?? {
      id: t,
      name: `Chain ${t}`,
      network: `${t}`,
      nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
      rpcUrls: { default: { http: [""] }, public: { http: [""] } },
    };
  return {
    chain: t
      ? { ...r, ...((a = e.data) == null ? void 0 : a.chain), id: t }
      : void 0,
    chains: n,
  };
}
async function c6(e) {
  const t = await o6();
  if (!t) throw new Vn();
  return await t.signMessage({ message: e.message });
}
async function l6({ chainId: e }) {
  const { connector: t } = bn();
  if (!t) throw new Vn();
  if (!t.switchChain) throw new Y3({ connector: t });
  return t.switchChain(e);
}
function qb(e, { selector: t = (n) => n } = {}) {
  const n = bn(),
    r = () => e(zb());
  return n.subscribe(
    ({ data: o, connector: i, status: a }) =>
      t({ address: o == null ? void 0 : o.account, connector: i, status: a }),
    r,
    { equalityFn: Ub }
  );
}
function Gb(e, { selector: t = (n) => n } = {}) {
  const n = bn(),
    r = () => e(Wb());
  return n.subscribe(
    ({ data: o, chains: i }) => {
      var a;
      return t({
        chainId: (a = o == null ? void 0 : o.chain) == null ? void 0 : a.id,
        chains: i,
      });
    },
    r,
    { equalityFn: Ub }
  );
}
async function u6({ name: e, chainId: t }) {
  const { normalize: n } = await Wt(async () => {
    const { normalize: o } = await import("./index.BVuxaXfP.js");
    return { normalize: o };
  }, []);
  return await Ss({ chainId: t }).getEnsAvatar({ name: n(e) });
}
async function f6({ address: e, chainId: t }) {
  return Ss({ chainId: t }).getEnsName({ address: nr(e) });
}
var Zu = {},
  Ma = {},
  we = {},
  Vb = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, c) {
    var u = (a >>> 16) & 65535,
      l = a & 65535,
      f = (c >>> 16) & 65535,
      h = c & 65535;
    return (l * h + (((u * h + l * f) << 16) >>> 0)) | 0;
  }
  e.mul = Math.imul || t;
  function n(a, c) {
    return (a + c) | 0;
  }
  e.add = n;
  function r(a, c) {
    return (a - c) | 0;
  }
  e.sub = r;
  function s(a, c) {
    return (a << c) | (a >>> (32 - c));
  }
  e.rotl = s;
  function o(a, c) {
    return (a << (32 - c)) | (a >>> c);
  }
  e.rotr = o;
  function i(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  (e.isInteger = Number.isInteger || i),
    (e.MAX_SAFE_INTEGER = 9007199254740991),
    (e.isSafeInteger = function (a) {
      return (
        e.isInteger(a) && a >= -e.MAX_SAFE_INTEGER && a <= e.MAX_SAFE_INTEGER
      );
    });
})(Vb);
Object.defineProperty(we, "__esModule", { value: !0 });
var Kb = Vb;
function d6(e, t) {
  return t === void 0 && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16;
}
we.readInt16BE = d6;
function h6(e, t) {
  return t === void 0 && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0;
}
we.readUint16BE = h6;
function p6(e, t) {
  return t === void 0 && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16;
}
we.readInt16LE = p6;
function m6(e, t) {
  return t === void 0 && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0;
}
we.readUint16LE = m6;
function Xb(e, t, n) {
  return (
    t === void 0 && (t = new Uint8Array(2)),
    n === void 0 && (n = 0),
    (t[n + 0] = e >>> 8),
    (t[n + 1] = e >>> 0),
    t
  );
}
we.writeUint16BE = Xb;
we.writeInt16BE = Xb;
function Yb(e, t, n) {
  return (
    t === void 0 && (t = new Uint8Array(2)),
    n === void 0 && (n = 0),
    (t[n + 0] = e >>> 0),
    (t[n + 1] = e >>> 8),
    t
  );
}
we.writeUint16LE = Yb;
we.writeInt16LE = Yb;
function Tl(e, t) {
  return (
    t === void 0 && (t = 0),
    (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
  );
}
we.readInt32BE = Tl;
function Dl(e, t) {
  return (
    t === void 0 && (t = 0),
    ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
  );
}
we.readUint32BE = Dl;
function Ol(e, t) {
  return (
    t === void 0 && (t = 0),
    (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
  );
}
we.readInt32LE = Ol;
function Il(e, t) {
  return (
    t === void 0 && (t = 0),
    ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
  );
}
we.readUint32LE = Il;
function Gi(e, t, n) {
  return (
    t === void 0 && (t = new Uint8Array(4)),
    n === void 0 && (n = 0),
    (t[n + 0] = e >>> 24),
    (t[n + 1] = e >>> 16),
    (t[n + 2] = e >>> 8),
    (t[n + 3] = e >>> 0),
    t
  );
}
we.writeUint32BE = Gi;
we.writeInt32BE = Gi;
function Vi(e, t, n) {
  return (
    t === void 0 && (t = new Uint8Array(4)),
    n === void 0 && (n = 0),
    (t[n + 0] = e >>> 0),
    (t[n + 1] = e >>> 8),
    (t[n + 2] = e >>> 16),
    (t[n + 3] = e >>> 24),
    t
  );
}
we.writeUint32LE = Vi;
we.writeInt32LE = Vi;
function b6(e, t) {
  t === void 0 && (t = 0);
  var n = Tl(e, t),
    r = Tl(e, t + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
we.readInt64BE = b6;
function g6(e, t) {
  t === void 0 && (t = 0);
  var n = Dl(e, t),
    r = Dl(e, t + 4);
  return n * 4294967296 + r;
}
we.readUint64BE = g6;
function y6(e, t) {
  t === void 0 && (t = 0);
  var n = Ol(e, t),
    r = Ol(e, t + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
we.readInt64LE = y6;
function w6(e, t) {
  t === void 0 && (t = 0);
  var n = Il(e, t),
    r = Il(e, t + 4);
  return r * 4294967296 + n;
}
we.readUint64LE = w6;
function Zb(e, t, n) {
  return (
    t === void 0 && (t = new Uint8Array(8)),
    n === void 0 && (n = 0),
    Gi((e / 4294967296) >>> 0, t, n),
    Gi(e >>> 0, t, n + 4),
    t
  );
}
we.writeUint64BE = Zb;
we.writeInt64BE = Zb;
function Jb(e, t, n) {
  return (
    t === void 0 && (t = new Uint8Array(8)),
    n === void 0 && (n = 0),
    Vi(e >>> 0, t, n),
    Vi((e / 4294967296) >>> 0, t, n + 4),
    t
  );
}
we.writeUint64LE = Jb;
we.writeInt64LE = Jb;
function v6(e, t, n) {
  if ((n === void 0 && (n = 0), e % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var r = 0, s = 1, o = e / 8 + n - 1; o >= n; o--)
    (r += t[o] * s), (s *= 256);
  return r;
}
we.readUintBE = v6;
function E6(e, t, n) {
  if ((n === void 0 && (n = 0), e % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var r = 0, s = 1, o = n; o < n + e / 8; o++) (r += t[o] * s), (s *= 256);
  return r;
}
we.readUintLE = E6;
function C6(e, t, n, r) {
  if (
    (n === void 0 && (n = new Uint8Array(e / 8)),
    r === void 0 && (r = 0),
    e % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Kb.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, o = e / 8 + r - 1; o >= r; o--)
    (n[o] = (t / s) & 255), (s *= 256);
  return n;
}
we.writeUintBE = C6;
function x6(e, t, n, r) {
  if (
    (n === void 0 && (n = new Uint8Array(e / 8)),
    r === void 0 && (r = 0),
    e % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Kb.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, o = r; o < r + e / 8; o++) (n[o] = (t / s) & 255), (s *= 256);
  return n;
}
we.writeUintLE = x6;
function _6(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t);
}
we.readFloat32BE = _6;
function k6(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t, !0);
}
we.readFloat32LE = k6;
function S6(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t);
}
we.readFloat64BE = S6;
function A6(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t, !0);
}
we.readFloat64LE = A6;
function P6(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.setFloat32(n, e), t;
}
we.writeFloat32BE = P6;
function T6(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.setFloat32(n, e, !0), t;
}
we.writeFloat32LE = T6;
function D6(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.setFloat64(n, e), t;
}
we.writeFloat64BE = D6;
function O6(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.setFloat64(n, e, !0), t;
}
we.writeFloat64LE = O6;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
function I6(e) {
  for (var t = 0; t < e.length; t++) e[t] = 0;
  return e;
}
en.wipe = I6;
Object.defineProperty(Ma, "__esModule", { value: !0 });
var ct = we,
  $l = en,
  $6 = 20;
function N6(e, t, n) {
  for (
    var r = 1634760805,
      s = 857760878,
      o = 2036477234,
      i = 1797285236,
      a = (n[3] << 24) | (n[2] << 16) | (n[1] << 8) | n[0],
      c = (n[7] << 24) | (n[6] << 16) | (n[5] << 8) | n[4],
      u = (n[11] << 24) | (n[10] << 16) | (n[9] << 8) | n[8],
      l = (n[15] << 24) | (n[14] << 16) | (n[13] << 8) | n[12],
      f = (n[19] << 24) | (n[18] << 16) | (n[17] << 8) | n[16],
      h = (n[23] << 24) | (n[22] << 16) | (n[21] << 8) | n[20],
      p = (n[27] << 24) | (n[26] << 16) | (n[25] << 8) | n[24],
      m = (n[31] << 24) | (n[30] << 16) | (n[29] << 8) | n[28],
      g = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      y = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      k = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      b = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      E = r,
      v = s,
      w = o,
      x = i,
      d = a,
      C = c,
      A = u,
      $ = l,
      I = f,
      T = h,
      U = p,
      F = m,
      Z = g,
      G = y,
      N = k,
      X = b,
      Ce = 0;
    Ce < $6;
    Ce += 2
  )
    (E = (E + d) | 0),
      (Z ^= E),
      (Z = (Z >>> 16) | (Z << 16)),
      (I = (I + Z) | 0),
      (d ^= I),
      (d = (d >>> 20) | (d << 12)),
      (v = (v + C) | 0),
      (G ^= v),
      (G = (G >>> 16) | (G << 16)),
      (T = (T + G) | 0),
      (C ^= T),
      (C = (C >>> 20) | (C << 12)),
      (w = (w + A) | 0),
      (N ^= w),
      (N = (N >>> 16) | (N << 16)),
      (U = (U + N) | 0),
      (A ^= U),
      (A = (A >>> 20) | (A << 12)),
      (x = (x + $) | 0),
      (X ^= x),
      (X = (X >>> 16) | (X << 16)),
      (F = (F + X) | 0),
      ($ ^= F),
      ($ = ($ >>> 20) | ($ << 12)),
      (w = (w + A) | 0),
      (N ^= w),
      (N = (N >>> 24) | (N << 8)),
      (U = (U + N) | 0),
      (A ^= U),
      (A = (A >>> 25) | (A << 7)),
      (x = (x + $) | 0),
      (X ^= x),
      (X = (X >>> 24) | (X << 8)),
      (F = (F + X) | 0),
      ($ ^= F),
      ($ = ($ >>> 25) | ($ << 7)),
      (v = (v + C) | 0),
      (G ^= v),
      (G = (G >>> 24) | (G << 8)),
      (T = (T + G) | 0),
      (C ^= T),
      (C = (C >>> 25) | (C << 7)),
      (E = (E + d) | 0),
      (Z ^= E),
      (Z = (Z >>> 24) | (Z << 8)),
      (I = (I + Z) | 0),
      (d ^= I),
      (d = (d >>> 25) | (d << 7)),
      (E = (E + C) | 0),
      (X ^= E),
      (X = (X >>> 16) | (X << 16)),
      (U = (U + X) | 0),
      (C ^= U),
      (C = (C >>> 20) | (C << 12)),
      (v = (v + A) | 0),
      (Z ^= v),
      (Z = (Z >>> 16) | (Z << 16)),
      (F = (F + Z) | 0),
      (A ^= F),
      (A = (A >>> 20) | (A << 12)),
      (w = (w + $) | 0),
      (G ^= w),
      (G = (G >>> 16) | (G << 16)),
      (I = (I + G) | 0),
      ($ ^= I),
      ($ = ($ >>> 20) | ($ << 12)),
      (x = (x + d) | 0),
      (N ^= x),
      (N = (N >>> 16) | (N << 16)),
      (T = (T + N) | 0),
      (d ^= T),
      (d = (d >>> 20) | (d << 12)),
      (w = (w + $) | 0),
      (G ^= w),
      (G = (G >>> 24) | (G << 8)),
      (I = (I + G) | 0),
      ($ ^= I),
      ($ = ($ >>> 25) | ($ << 7)),
      (x = (x + d) | 0),
      (N ^= x),
      (N = (N >>> 24) | (N << 8)),
      (T = (T + N) | 0),
      (d ^= T),
      (d = (d >>> 25) | (d << 7)),
      (v = (v + A) | 0),
      (Z ^= v),
      (Z = (Z >>> 24) | (Z << 8)),
      (F = (F + Z) | 0),
      (A ^= F),
      (A = (A >>> 25) | (A << 7)),
      (E = (E + C) | 0),
      (X ^= E),
      (X = (X >>> 24) | (X << 8)),
      (U = (U + X) | 0),
      (C ^= U),
      (C = (C >>> 25) | (C << 7));
  ct.writeUint32LE((E + r) | 0, e, 0),
    ct.writeUint32LE((v + s) | 0, e, 4),
    ct.writeUint32LE((w + o) | 0, e, 8),
    ct.writeUint32LE((x + i) | 0, e, 12),
    ct.writeUint32LE((d + a) | 0, e, 16),
    ct.writeUint32LE((C + c) | 0, e, 20),
    ct.writeUint32LE((A + u) | 0, e, 24),
    ct.writeUint32LE(($ + l) | 0, e, 28),
    ct.writeUint32LE((I + f) | 0, e, 32),
    ct.writeUint32LE((T + h) | 0, e, 36),
    ct.writeUint32LE((U + p) | 0, e, 40),
    ct.writeUint32LE((F + m) | 0, e, 44),
    ct.writeUint32LE((Z + g) | 0, e, 48),
    ct.writeUint32LE((G + y) | 0, e, 52),
    ct.writeUint32LE((N + k) | 0, e, 56),
    ct.writeUint32LE((X + b) | 0, e, 60);
}
function Qb(e, t, n, r, s) {
  if ((s === void 0 && (s = 0), e.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (r.length < n.length)
    throw new Error("ChaCha: destination is shorter than source");
  var o, i;
  if (s === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (o = new Uint8Array(16)), (i = o.length - t.length), o.set(t, i);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (o = t), (i = s);
  }
  for (var a = new Uint8Array(64), c = 0; c < n.length; c += 64) {
    N6(a, o, e);
    for (var u = c; u < c + 64 && u < n.length; u++) r[u] = n[u] ^ a[u - c];
    U6(o, 0, i);
  }
  return $l.wipe(a), s === 0 && $l.wipe(o), r;
}
Ma.streamXOR = Qb;
function M6(e, t, n, r) {
  return r === void 0 && (r = 0), $l.wipe(n), Qb(e, t, n, n, r);
}
Ma.stream = M6;
function U6(e, t, n) {
  for (var r = 1; n--; )
    (r = (r + (e[t] & 255)) | 0), (e[t] = r & 255), (r >>>= 8), t++;
  if (r > 0) throw new Error("ChaCha: counter overflow");
}
var e0 = {},
  mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
function F6(e, t, n) {
  return (~(e - 1) & t) | ((e - 1) & n);
}
mr.select = F6;
function B6(e, t) {
  return (((e | 0) - (t | 0) - 1) >>> 31) & 1;
}
mr.lessOrEqual = B6;
function t0(e, t) {
  if (e.length !== t.length) return 0;
  for (var n = 0, r = 0; r < e.length; r++) n |= e[r] ^ t[r];
  return 1 & ((n - 1) >>> 8);
}
mr.compare = t0;
function L6(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : t0(e, t) !== 0;
}
mr.equal = L6;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = mr,
    n = en;
  e.DIGEST_LENGTH = 16;
  var r = (function () {
    function i(a) {
      (this.digestLength = e.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var c = a[0] | (a[1] << 8);
      this._r[0] = c & 8191;
      var u = a[2] | (a[3] << 8);
      this._r[1] = ((c >>> 13) | (u << 3)) & 8191;
      var l = a[4] | (a[5] << 8);
      this._r[2] = ((u >>> 10) | (l << 6)) & 7939;
      var f = a[6] | (a[7] << 8);
      this._r[3] = ((l >>> 7) | (f << 9)) & 8191;
      var h = a[8] | (a[9] << 8);
      (this._r[4] = ((f >>> 4) | (h << 12)) & 255),
        (this._r[5] = (h >>> 1) & 8190);
      var p = a[10] | (a[11] << 8);
      this._r[6] = ((h >>> 14) | (p << 2)) & 8191;
      var m = a[12] | (a[13] << 8);
      this._r[7] = ((p >>> 11) | (m << 5)) & 8065;
      var g = a[14] | (a[15] << 8);
      (this._r[8] = ((m >>> 8) | (g << 8)) & 8191),
        (this._r[9] = (g >>> 5) & 127),
        (this._pad[0] = a[16] | (a[17] << 8)),
        (this._pad[1] = a[18] | (a[19] << 8)),
        (this._pad[2] = a[20] | (a[21] << 8)),
        (this._pad[3] = a[22] | (a[23] << 8)),
        (this._pad[4] = a[24] | (a[25] << 8)),
        (this._pad[5] = a[26] | (a[27] << 8)),
        (this._pad[6] = a[28] | (a[29] << 8)),
        (this._pad[7] = a[30] | (a[31] << 8));
    }
    return (
      (i.prototype._blocks = function (a, c, u) {
        for (
          var l = this._fin ? 0 : 2048,
            f = this._h[0],
            h = this._h[1],
            p = this._h[2],
            m = this._h[3],
            g = this._h[4],
            y = this._h[5],
            k = this._h[6],
            b = this._h[7],
            E = this._h[8],
            v = this._h[9],
            w = this._r[0],
            x = this._r[1],
            d = this._r[2],
            C = this._r[3],
            A = this._r[4],
            $ = this._r[5],
            I = this._r[6],
            T = this._r[7],
            U = this._r[8],
            F = this._r[9];
          u >= 16;

        ) {
          var Z = a[c + 0] | (a[c + 1] << 8);
          f += Z & 8191;
          var G = a[c + 2] | (a[c + 3] << 8);
          h += ((Z >>> 13) | (G << 3)) & 8191;
          var N = a[c + 4] | (a[c + 5] << 8);
          p += ((G >>> 10) | (N << 6)) & 8191;
          var X = a[c + 6] | (a[c + 7] << 8);
          m += ((N >>> 7) | (X << 9)) & 8191;
          var Ce = a[c + 8] | (a[c + 9] << 8);
          (g += ((X >>> 4) | (Ce << 12)) & 8191), (y += (Ce >>> 1) & 8191);
          var ke = a[c + 10] | (a[c + 11] << 8);
          k += ((Ce >>> 14) | (ke << 2)) & 8191;
          var xe = a[c + 12] | (a[c + 13] << 8);
          b += ((ke >>> 11) | (xe << 5)) & 8191;
          var ve = a[c + 14] | (a[c + 15] << 8);
          (E += ((xe >>> 8) | (ve << 8)) & 8191), (v += (ve >>> 5) | l);
          var Q = 0,
            fe = Q;
          (fe += f * w),
            (fe += h * (5 * F)),
            (fe += p * (5 * U)),
            (fe += m * (5 * T)),
            (fe += g * (5 * I)),
            (Q = fe >>> 13),
            (fe &= 8191),
            (fe += y * (5 * $)),
            (fe += k * (5 * A)),
            (fe += b * (5 * C)),
            (fe += E * (5 * d)),
            (fe += v * (5 * x)),
            (Q += fe >>> 13),
            (fe &= 8191);
          var Ee = Q;
          (Ee += f * x),
            (Ee += h * w),
            (Ee += p * (5 * F)),
            (Ee += m * (5 * U)),
            (Ee += g * (5 * T)),
            (Q = Ee >>> 13),
            (Ee &= 8191),
            (Ee += y * (5 * I)),
            (Ee += k * (5 * $)),
            (Ee += b * (5 * A)),
            (Ee += E * (5 * C)),
            (Ee += v * (5 * d)),
            (Q += Ee >>> 13),
            (Ee &= 8191);
          var me = Q;
          (me += f * d),
            (me += h * x),
            (me += p * w),
            (me += m * (5 * F)),
            (me += g * (5 * U)),
            (Q = me >>> 13),
            (me &= 8191),
            (me += y * (5 * T)),
            (me += k * (5 * I)),
            (me += b * (5 * $)),
            (me += E * (5 * A)),
            (me += v * (5 * C)),
            (Q += me >>> 13),
            (me &= 8191);
          var O = Q;
          (O += f * C),
            (O += h * d),
            (O += p * x),
            (O += m * w),
            (O += g * (5 * F)),
            (Q = O >>> 13),
            (O &= 8191),
            (O += y * (5 * U)),
            (O += k * (5 * T)),
            (O += b * (5 * I)),
            (O += E * (5 * $)),
            (O += v * (5 * A)),
            (Q += O >>> 13),
            (O &= 8191);
          var z = Q;
          (z += f * A),
            (z += h * C),
            (z += p * d),
            (z += m * x),
            (z += g * w),
            (Q = z >>> 13),
            (z &= 8191),
            (z += y * (5 * F)),
            (z += k * (5 * U)),
            (z += b * (5 * T)),
            (z += E * (5 * I)),
            (z += v * (5 * $)),
            (Q += z >>> 13),
            (z &= 8191);
          var R = Q;
          (R += f * $),
            (R += h * A),
            (R += p * C),
            (R += m * d),
            (R += g * x),
            (Q = R >>> 13),
            (R &= 8191),
            (R += y * w),
            (R += k * (5 * F)),
            (R += b * (5 * U)),
            (R += E * (5 * T)),
            (R += v * (5 * I)),
            (Q += R >>> 13),
            (R &= 8191);
          var V = Q;
          (V += f * I),
            (V += h * $),
            (V += p * A),
            (V += m * C),
            (V += g * d),
            (Q = V >>> 13),
            (V &= 8191),
            (V += y * x),
            (V += k * w),
            (V += b * (5 * F)),
            (V += E * (5 * U)),
            (V += v * (5 * T)),
            (Q += V >>> 13),
            (V &= 8191);
          var re = Q;
          (re += f * T),
            (re += h * I),
            (re += p * $),
            (re += m * A),
            (re += g * C),
            (Q = re >>> 13),
            (re &= 8191),
            (re += y * d),
            (re += k * x),
            (re += b * w),
            (re += E * (5 * F)),
            (re += v * (5 * U)),
            (Q += re >>> 13),
            (re &= 8191);
          var ie = Q;
          (ie += f * U),
            (ie += h * T),
            (ie += p * I),
            (ie += m * $),
            (ie += g * A),
            (Q = ie >>> 13),
            (ie &= 8191),
            (ie += y * C),
            (ie += k * d),
            (ie += b * x),
            (ie += E * w),
            (ie += v * (5 * F)),
            (Q += ie >>> 13),
            (ie &= 8191);
          var _ = Q;
          (_ += f * F),
            (_ += h * U),
            (_ += p * T),
            (_ += m * I),
            (_ += g * $),
            (Q = _ >>> 13),
            (_ &= 8191),
            (_ += y * A),
            (_ += k * C),
            (_ += b * d),
            (_ += E * x),
            (_ += v * w),
            (Q += _ >>> 13),
            (_ &= 8191),
            (Q = ((Q << 2) + Q) | 0),
            (Q = (Q + fe) | 0),
            (fe = Q & 8191),
            (Q = Q >>> 13),
            (Ee += Q),
            (f = fe),
            (h = Ee),
            (p = me),
            (m = O),
            (g = z),
            (y = R),
            (k = V),
            (b = re),
            (E = ie),
            (v = _),
            (c += 16),
            (u -= 16);
        }
        (this._h[0] = f),
          (this._h[1] = h),
          (this._h[2] = p),
          (this._h[3] = m),
          (this._h[4] = g),
          (this._h[5] = y),
          (this._h[6] = k),
          (this._h[7] = b),
          (this._h[8] = E),
          (this._h[9] = v);
      }),
      (i.prototype.finish = function (a, c) {
        c === void 0 && (c = 0);
        var u = new Uint16Array(10),
          l,
          f,
          h,
          p;
        if (this._leftover) {
          for (p = this._leftover, this._buffer[p++] = 1; p < 16; p++)
            this._buffer[p] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (l = this._h[1] >>> 13, this._h[1] &= 8191, p = 2; p < 10; p++)
          (this._h[p] += l), (l = this._h[p] >>> 13), (this._h[p] &= 8191);
        for (
          this._h[0] += l * 5,
            l = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += l,
            l = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += l,
            u[0] = this._h[0] + 5,
            l = u[0] >>> 13,
            u[0] &= 8191,
            p = 1;
          p < 10;
          p++
        )
          (u[p] = this._h[p] + l), (l = u[p] >>> 13), (u[p] &= 8191);
        for (u[9] -= 8192, f = (l ^ 1) - 1, p = 0; p < 10; p++) u[p] &= f;
        for (f = ~f, p = 0; p < 10; p++) this._h[p] = (this._h[p] & f) | u[p];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            h = this._h[0] + this._pad[0],
            this._h[0] = h & 65535,
            p = 1;
          p < 8;
          p++
        )
          (h = (((this._h[p] + this._pad[p]) | 0) + (h >>> 16)) | 0),
            (this._h[p] = h & 65535);
        return (
          (a[c + 0] = this._h[0] >>> 0),
          (a[c + 1] = this._h[0] >>> 8),
          (a[c + 2] = this._h[1] >>> 0),
          (a[c + 3] = this._h[1] >>> 8),
          (a[c + 4] = this._h[2] >>> 0),
          (a[c + 5] = this._h[2] >>> 8),
          (a[c + 6] = this._h[3] >>> 0),
          (a[c + 7] = this._h[3] >>> 8),
          (a[c + 8] = this._h[4] >>> 0),
          (a[c + 9] = this._h[4] >>> 8),
          (a[c + 10] = this._h[5] >>> 0),
          (a[c + 11] = this._h[5] >>> 8),
          (a[c + 12] = this._h[6] >>> 0),
          (a[c + 13] = this._h[6] >>> 8),
          (a[c + 14] = this._h[7] >>> 0),
          (a[c + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (i.prototype.update = function (a) {
        var c = 0,
          u = a.length,
          l;
        if (this._leftover) {
          (l = 16 - this._leftover), l > u && (l = u);
          for (var f = 0; f < l; f++)
            this._buffer[this._leftover + f] = a[c + f];
          if (((u -= l), (c += l), (this._leftover += l), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (u >= 16 &&
            ((l = u - (u % 16)), this._blocks(a, c, l), (c += l), (u -= l)),
          u)
        ) {
          for (var f = 0; f < u; f++)
            this._buffer[this._leftover + f] = a[c + f];
          this._leftover += u;
        }
        return this;
      }),
      (i.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }),
      (i.prototype.clean = function () {
        return (
          n.wipe(this._buffer),
          n.wipe(this._r),
          n.wipe(this._h),
          n.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      i
    );
  })();
  e.Poly1305 = r;
  function s(i, a) {
    var c = new r(i);
    c.update(a);
    var u = c.digest();
    return c.clean(), u;
  }
  e.oneTimeAuth = s;
  function o(i, a) {
    return i.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH
      ? !1
      : t.equal(i, a);
  }
  e.equal = o;
})(e0);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Ma,
    n = e0,
    r = en,
    s = we,
    o = mr;
  (e.KEY_LENGTH = 32), (e.NONCE_LENGTH = 12), (e.TAG_LENGTH = 16);
  var i = new Uint8Array(16),
    a = (function () {
      function c(u) {
        if (
          ((this.nonceLength = e.NONCE_LENGTH),
          (this.tagLength = e.TAG_LENGTH),
          u.length !== e.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(u);
      }
      return (
        (c.prototype.seal = function (u, l, f, h) {
          if (u.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var p = new Uint8Array(16);
          p.set(u, p.length - u.length);
          var m = new Uint8Array(32);
          t.stream(this._key, p, m, 4);
          var g = l.length + this.tagLength,
            y;
          if (h) {
            if (h.length !== g)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            y = h;
          } else y = new Uint8Array(g);
          return (
            t.streamXOR(this._key, p, l, y, 4),
            this._authenticate(
              y.subarray(y.length - this.tagLength, y.length),
              m,
              y.subarray(0, y.length - this.tagLength),
              f
            ),
            r.wipe(p),
            y
          );
        }),
        (c.prototype.open = function (u, l, f, h) {
          if (u.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (l.length < this.tagLength) return null;
          var p = new Uint8Array(16);
          p.set(u, p.length - u.length);
          var m = new Uint8Array(32);
          t.stream(this._key, p, m, 4);
          var g = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              g,
              m,
              l.subarray(0, l.length - this.tagLength),
              f
            ),
            !o.equal(g, l.subarray(l.length - this.tagLength, l.length)))
          )
            return null;
          var y = l.length - this.tagLength,
            k;
          if (h) {
            if (h.length !== y)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            k = h;
          } else k = new Uint8Array(y);
          return (
            t.streamXOR(
              this._key,
              p,
              l.subarray(0, l.length - this.tagLength),
              k,
              4
            ),
            r.wipe(p),
            k
          );
        }),
        (c.prototype.clean = function () {
          return r.wipe(this._key), this;
        }),
        (c.prototype._authenticate = function (u, l, f, h) {
          var p = new n.Poly1305(l);
          h &&
            (p.update(h),
            h.length % 16 > 0 && p.update(i.subarray(h.length % 16))),
            p.update(f),
            f.length % 16 > 0 && p.update(i.subarray(f.length % 16));
          var m = new Uint8Array(8);
          h && s.writeUint64LE(h.length, m),
            p.update(m),
            s.writeUint64LE(f.length, m),
            p.update(m);
          for (var g = p.digest(), y = 0; y < g.length; y++) u[y] = g[y];
          p.clean(), r.wipe(g), r.wipe(m);
        }),
        c
      );
    })();
  e.ChaCha20Poly1305 = a;
})(Zu);
var n0 = {},
  Jo = {},
  Ju = {};
Object.defineProperty(Ju, "__esModule", { value: !0 });
function R6(e) {
  return (
    typeof e.saveState < "u" &&
    typeof e.restoreState < "u" &&
    typeof e.cleanSavedState < "u"
  );
}
Ju.isSerializableHash = R6;
Object.defineProperty(Jo, "__esModule", { value: !0 });
var sn = Ju,
  j6 = mr,
  H6 = en,
  r0 = (function () {
    function e(t, n) {
      (this._finished = !1),
        (this._inner = new t()),
        (this._outer = new t()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var r = new Uint8Array(this.blockSize);
      n.length > this.blockSize
        ? this._inner.update(n).finish(r).clean()
        : r.set(n);
      for (var s = 0; s < r.length; s++) r[s] ^= 54;
      this._inner.update(r);
      for (var s = 0; s < r.length; s++) r[s] ^= 106;
      this._outer.update(r),
        sn.isSerializableHash(this._inner) &&
          sn.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        H6.wipe(r);
    }
    return (
      (e.prototype.reset = function () {
        if (
          !sn.isSerializableHash(this._inner) ||
          !sn.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (e.prototype.clean = function () {
        sn.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          sn.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (e.prototype.update = function (t) {
        return this._inner.update(t), this;
      }),
      (e.prototype.finish = function (t) {
        return this._finished
          ? (this._outer.finish(t), this)
          : (this._inner.finish(t),
            this._outer.update(t.subarray(0, this.digestLength)).finish(t),
            (this._finished = !0),
            this);
      }),
      (e.prototype.digest = function () {
        var t = new Uint8Array(this.digestLength);
        return this.finish(t), t;
      }),
      (e.prototype.saveState = function () {
        if (!sn.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (e.prototype.restoreState = function (t) {
        if (
          !sn.isSerializableHash(this._inner) ||
          !sn.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(t),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (e.prototype.cleanSavedState = function (t) {
        if (!sn.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(t);
      }),
      e
    );
  })();
Jo.HMAC = r0;
function z6(e, t, n) {
  var r = new r0(e, t);
  r.update(n);
  var s = r.digest();
  return r.clean(), s;
}
Jo.hmac = z6;
Jo.equal = j6.equal;
Object.defineProperty(n0, "__esModule", { value: !0 });
var Bd = Jo,
  Ld = en,
  W6 = (function () {
    function e(t, n, r, s) {
      r === void 0 && (r = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = t),
        (this._info = s);
      var o = Bd.hmac(this._hash, r, n);
      (this._hmac = new Bd.HMAC(t, o)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (e.prototype._fillBuffer = function () {
        this._counter[0]++;
        var t = this._counter[0];
        if (t === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          t > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (e.prototype.expand = function (t) {
        for (var n = new Uint8Array(t), r = 0; r < n.length; r++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (n[r] = this._buffer[this._bufpos++]);
        return n;
      }),
      (e.prototype.clean = function () {
        this._hmac.clean(),
          Ld.wipe(this._buffer),
          Ld.wipe(this._counter),
          (this._bufpos = 0);
      }),
      e
    );
  })(),
  q6 = (n0.HKDF = W6),
  Ua = {},
  Fa = {},
  Ba = {};
Object.defineProperty(Ba, "__esModule", { value: !0 });
Ba.BrowserRandomSource = void 0;
const Rd = 65536;
class G6 {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t &&
      t.getRandomValues !== void 0 &&
      ((this._crypto = t), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const n = new Uint8Array(t);
    for (let r = 0; r < n.length; r += Rd)
      this._crypto.getRandomValues(
        n.subarray(r, r + Math.min(n.length - r, Rd))
      );
    return n;
  }
}
Ba.BrowserRandomSource = G6;
function V6(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var La = {};
const K6 = {},
  X6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: K6 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Y6 = Ib(X6);
Object.defineProperty(La, "__esModule", { value: !0 });
La.NodeRandomSource = void 0;
const Z6 = en;
class J6 {
  constructor() {
    if (
      ((this.isAvailable = !1), (this.isInstantiated = !1), typeof V6 < "u")
    ) {
      const t = Y6;
      t &&
        t.randomBytes &&
        ((this._crypto = t),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let n = this._crypto.randomBytes(t);
    if (n.length !== t)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const r = new Uint8Array(t);
    for (let s = 0; s < r.length; s++) r[s] = n[s];
    return (0, Z6.wipe)(n), r;
  }
}
La.NodeRandomSource = J6;
Object.defineProperty(Fa, "__esModule", { value: !0 });
Fa.SystemRandomSource = void 0;
const Q6 = Ba,
  eC = La;
class tC {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new Q6.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new eC.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(t) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(t);
  }
}
Fa.SystemRandomSource = tC;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.randomStringForEntropy =
      e.randomString =
      e.randomUint32 =
      e.randomBytes =
      e.defaultRandomSource =
        void 0);
  const t = Fa,
    n = we,
    r = en;
  e.defaultRandomSource = new t.SystemRandomSource();
  function s(u, l = e.defaultRandomSource) {
    return l.randomBytes(u);
  }
  e.randomBytes = s;
  function o(u = e.defaultRandomSource) {
    const l = s(4, u),
      f = (0, n.readUint32LE)(l);
    return (0, r.wipe)(l), f;
  }
  e.randomUint32 = o;
  const i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(u, l = i, f = e.defaultRandomSource) {
    if (l.length < 2) throw new Error("randomString charset is too short");
    if (l.length > 256) throw new Error("randomString charset is too long");
    let h = "";
    const p = l.length,
      m = 256 - (256 % p);
    for (; u > 0; ) {
      const g = s(Math.ceil((u * 256) / m), f);
      for (let y = 0; y < g.length && u > 0; y++) {
        const k = g[y];
        k < m && ((h += l.charAt(k % p)), u--);
      }
      (0, r.wipe)(g);
    }
    return h;
  }
  e.randomString = a;
  function c(u, l = i, f = e.defaultRandomSource) {
    const h = Math.ceil(u / (Math.log(l.length) / Math.LN2));
    return a(h, l, f);
  }
  e.randomStringForEntropy = c;
})(Ua);
var Ra = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = we,
    n = en;
  (e.DIGEST_LENGTH = 32), (e.BLOCK_SIZE = 64);
  var r = (function () {
    function a() {
      (this.digestLength = e.DIGEST_LENGTH),
        (this.blockSize = e.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (a.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (a.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (a.prototype.clean = function () {
        n.wipe(this._buffer), n.wipe(this._temp), this.reset();
      }),
      (a.prototype.update = function (c, u) {
        if ((u === void 0 && (u = c.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var l = 0;
        if (((this._bytesHashed += u), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && u > 0; )
            (this._buffer[this._bufferLength++] = c[l++]), u--;
          this._bufferLength === this.blockSize &&
            (o(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          u >= this.blockSize &&
          ((l = o(this._temp, this._state, c, l, u)), (u %= this.blockSize));
          u > 0;

        )
          (this._buffer[this._bufferLength++] = c[l++]), u--;
        return this;
      }),
      (a.prototype.finish = function (c) {
        if (!this._finished) {
          var u = this._bytesHashed,
            l = this._bufferLength,
            f = (u / 536870912) | 0,
            h = u << 3,
            p = u % 64 < 56 ? 64 : 128;
          this._buffer[l] = 128;
          for (var m = l + 1; m < p - 8; m++) this._buffer[m] = 0;
          t.writeUint32BE(f, this._buffer, p - 8),
            t.writeUint32BE(h, this._buffer, p - 4),
            o(this._temp, this._state, this._buffer, 0, p),
            (this._finished = !0);
        }
        for (var m = 0; m < this.digestLength / 4; m++)
          t.writeUint32BE(this._state[m], c, m * 4);
        return this;
      }),
      (a.prototype.digest = function () {
        var c = new Uint8Array(this.digestLength);
        return this.finish(c), c;
      }),
      (a.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (a.prototype.restoreState = function (c) {
        return (
          this._state.set(c.state),
          (this._bufferLength = c.bufferLength),
          c.buffer && this._buffer.set(c.buffer),
          (this._bytesHashed = c.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (a.prototype.cleanSavedState = function (c) {
        n.wipe(c.state),
          c.buffer && n.wipe(c.buffer),
          (c.bufferLength = 0),
          (c.bytesHashed = 0);
      }),
      a
    );
  })();
  e.SHA256 = r;
  var s = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function o(a, c, u, l, f) {
    for (; f >= 64; ) {
      for (
        var h = c[0],
          p = c[1],
          m = c[2],
          g = c[3],
          y = c[4],
          k = c[5],
          b = c[6],
          E = c[7],
          v = 0;
        v < 16;
        v++
      ) {
        var w = l + v * 4;
        a[v] = t.readUint32BE(u, w);
      }
      for (var v = 16; v < 64; v++) {
        var x = a[v - 2],
          d = ((x >>> 17) | (x << 15)) ^ ((x >>> 19) | (x << 13)) ^ (x >>> 10);
        x = a[v - 15];
        var C = ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3);
        a[v] = ((d + a[v - 7]) | 0) + ((C + a[v - 16]) | 0);
      }
      for (var v = 0; v < 64; v++) {
        var d =
            ((((((y >>> 6) | (y << 26)) ^
              ((y >>> 11) | (y << 21)) ^
              ((y >>> 25) | (y << 7))) +
              ((y & k) ^ (~y & b))) |
              0) +
              ((E + ((s[v] + a[v]) | 0)) | 0)) |
            0,
          C =
            ((((h >>> 2) | (h << 30)) ^
              ((h >>> 13) | (h << 19)) ^
              ((h >>> 22) | (h << 10))) +
              ((h & p) ^ (h & m) ^ (p & m))) |
            0;
        (E = b),
          (b = k),
          (k = y),
          (y = (g + d) | 0),
          (g = m),
          (m = p),
          (p = h),
          (h = (d + C) | 0);
      }
      (c[0] += h),
        (c[1] += p),
        (c[2] += m),
        (c[3] += g),
        (c[4] += y),
        (c[5] += k),
        (c[6] += b),
        (c[7] += E),
        (l += 64),
        (f -= 64);
    }
    return l;
  }
  function i(a) {
    var c = new r();
    c.update(a);
    var u = c.digest();
    return c.clean(), u;
  }
  e.hash = i;
})(Ra);
var Qu = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.sharedKey =
      e.generateKeyPair =
      e.generateKeyPairFromSeed =
      e.scalarMultBase =
      e.scalarMult =
      e.SHARED_KEY_LENGTH =
      e.SECRET_KEY_LENGTH =
      e.PUBLIC_KEY_LENGTH =
        void 0);
  const t = Ua,
    n = en;
  (e.PUBLIC_KEY_LENGTH = 32),
    (e.SECRET_KEY_LENGTH = 32),
    (e.SHARED_KEY_LENGTH = 32);
  function r(v) {
    const w = new Float64Array(16);
    if (v) for (let x = 0; x < v.length; x++) w[x] = v[x];
    return w;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const o = r([56129, 1]);
  function i(v) {
    let w = 1;
    for (let x = 0; x < 16; x++) {
      let d = v[x] + w + 65535;
      (w = Math.floor(d / 65536)), (v[x] = d - w * 65536);
    }
    v[0] += w - 1 + 37 * (w - 1);
  }
  function a(v, w, x) {
    const d = ~(x - 1);
    for (let C = 0; C < 16; C++) {
      const A = d & (v[C] ^ w[C]);
      (v[C] ^= A), (w[C] ^= A);
    }
  }
  function c(v, w) {
    const x = r(),
      d = r();
    for (let C = 0; C < 16; C++) d[C] = w[C];
    i(d), i(d), i(d);
    for (let C = 0; C < 2; C++) {
      x[0] = d[0] - 65517;
      for (let $ = 1; $ < 15; $++)
        (x[$] = d[$] - 65535 - ((x[$ - 1] >> 16) & 1)), (x[$ - 1] &= 65535);
      x[15] = d[15] - 32767 - ((x[14] >> 16) & 1);
      const A = (x[15] >> 16) & 1;
      (x[14] &= 65535), a(d, x, 1 - A);
    }
    for (let C = 0; C < 16; C++)
      (v[2 * C] = d[C] & 255), (v[2 * C + 1] = d[C] >> 8);
  }
  function u(v, w) {
    for (let x = 0; x < 16; x++) v[x] = w[2 * x] + (w[2 * x + 1] << 8);
    v[15] &= 32767;
  }
  function l(v, w, x) {
    for (let d = 0; d < 16; d++) v[d] = w[d] + x[d];
  }
  function f(v, w, x) {
    for (let d = 0; d < 16; d++) v[d] = w[d] - x[d];
  }
  function h(v, w, x) {
    let d,
      C,
      A = 0,
      $ = 0,
      I = 0,
      T = 0,
      U = 0,
      F = 0,
      Z = 0,
      G = 0,
      N = 0,
      X = 0,
      Ce = 0,
      ke = 0,
      xe = 0,
      ve = 0,
      Q = 0,
      fe = 0,
      Ee = 0,
      me = 0,
      O = 0,
      z = 0,
      R = 0,
      V = 0,
      re = 0,
      ie = 0,
      _ = 0,
      S = 0,
      D = 0,
      L = 0,
      M = 0,
      j = 0,
      Y = 0,
      W = x[0],
      H = x[1],
      B = x[2],
      ee = x[3],
      q = x[4],
      J = x[5],
      te = x[6],
      oe = x[7],
      be = x[8],
      de = x[9],
      Se = x[10],
      _e = x[11],
      $e = x[12],
      Ae = x[13],
      We = x[14],
      Ye = x[15];
    (d = w[0]),
      (A += d * W),
      ($ += d * H),
      (I += d * B),
      (T += d * ee),
      (U += d * q),
      (F += d * J),
      (Z += d * te),
      (G += d * oe),
      (N += d * be),
      (X += d * de),
      (Ce += d * Se),
      (ke += d * _e),
      (xe += d * $e),
      (ve += d * Ae),
      (Q += d * We),
      (fe += d * Ye),
      (d = w[1]),
      ($ += d * W),
      (I += d * H),
      (T += d * B),
      (U += d * ee),
      (F += d * q),
      (Z += d * J),
      (G += d * te),
      (N += d * oe),
      (X += d * be),
      (Ce += d * de),
      (ke += d * Se),
      (xe += d * _e),
      (ve += d * $e),
      (Q += d * Ae),
      (fe += d * We),
      (Ee += d * Ye),
      (d = w[2]),
      (I += d * W),
      (T += d * H),
      (U += d * B),
      (F += d * ee),
      (Z += d * q),
      (G += d * J),
      (N += d * te),
      (X += d * oe),
      (Ce += d * be),
      (ke += d * de),
      (xe += d * Se),
      (ve += d * _e),
      (Q += d * $e),
      (fe += d * Ae),
      (Ee += d * We),
      (me += d * Ye),
      (d = w[3]),
      (T += d * W),
      (U += d * H),
      (F += d * B),
      (Z += d * ee),
      (G += d * q),
      (N += d * J),
      (X += d * te),
      (Ce += d * oe),
      (ke += d * be),
      (xe += d * de),
      (ve += d * Se),
      (Q += d * _e),
      (fe += d * $e),
      (Ee += d * Ae),
      (me += d * We),
      (O += d * Ye),
      (d = w[4]),
      (U += d * W),
      (F += d * H),
      (Z += d * B),
      (G += d * ee),
      (N += d * q),
      (X += d * J),
      (Ce += d * te),
      (ke += d * oe),
      (xe += d * be),
      (ve += d * de),
      (Q += d * Se),
      (fe += d * _e),
      (Ee += d * $e),
      (me += d * Ae),
      (O += d * We),
      (z += d * Ye),
      (d = w[5]),
      (F += d * W),
      (Z += d * H),
      (G += d * B),
      (N += d * ee),
      (X += d * q),
      (Ce += d * J),
      (ke += d * te),
      (xe += d * oe),
      (ve += d * be),
      (Q += d * de),
      (fe += d * Se),
      (Ee += d * _e),
      (me += d * $e),
      (O += d * Ae),
      (z += d * We),
      (R += d * Ye),
      (d = w[6]),
      (Z += d * W),
      (G += d * H),
      (N += d * B),
      (X += d * ee),
      (Ce += d * q),
      (ke += d * J),
      (xe += d * te),
      (ve += d * oe),
      (Q += d * be),
      (fe += d * de),
      (Ee += d * Se),
      (me += d * _e),
      (O += d * $e),
      (z += d * Ae),
      (R += d * We),
      (V += d * Ye),
      (d = w[7]),
      (G += d * W),
      (N += d * H),
      (X += d * B),
      (Ce += d * ee),
      (ke += d * q),
      (xe += d * J),
      (ve += d * te),
      (Q += d * oe),
      (fe += d * be),
      (Ee += d * de),
      (me += d * Se),
      (O += d * _e),
      (z += d * $e),
      (R += d * Ae),
      (V += d * We),
      (re += d * Ye),
      (d = w[8]),
      (N += d * W),
      (X += d * H),
      (Ce += d * B),
      (ke += d * ee),
      (xe += d * q),
      (ve += d * J),
      (Q += d * te),
      (fe += d * oe),
      (Ee += d * be),
      (me += d * de),
      (O += d * Se),
      (z += d * _e),
      (R += d * $e),
      (V += d * Ae),
      (re += d * We),
      (ie += d * Ye),
      (d = w[9]),
      (X += d * W),
      (Ce += d * H),
      (ke += d * B),
      (xe += d * ee),
      (ve += d * q),
      (Q += d * J),
      (fe += d * te),
      (Ee += d * oe),
      (me += d * be),
      (O += d * de),
      (z += d * Se),
      (R += d * _e),
      (V += d * $e),
      (re += d * Ae),
      (ie += d * We),
      (_ += d * Ye),
      (d = w[10]),
      (Ce += d * W),
      (ke += d * H),
      (xe += d * B),
      (ve += d * ee),
      (Q += d * q),
      (fe += d * J),
      (Ee += d * te),
      (me += d * oe),
      (O += d * be),
      (z += d * de),
      (R += d * Se),
      (V += d * _e),
      (re += d * $e),
      (ie += d * Ae),
      (_ += d * We),
      (S += d * Ye),
      (d = w[11]),
      (ke += d * W),
      (xe += d * H),
      (ve += d * B),
      (Q += d * ee),
      (fe += d * q),
      (Ee += d * J),
      (me += d * te),
      (O += d * oe),
      (z += d * be),
      (R += d * de),
      (V += d * Se),
      (re += d * _e),
      (ie += d * $e),
      (_ += d * Ae),
      (S += d * We),
      (D += d * Ye),
      (d = w[12]),
      (xe += d * W),
      (ve += d * H),
      (Q += d * B),
      (fe += d * ee),
      (Ee += d * q),
      (me += d * J),
      (O += d * te),
      (z += d * oe),
      (R += d * be),
      (V += d * de),
      (re += d * Se),
      (ie += d * _e),
      (_ += d * $e),
      (S += d * Ae),
      (D += d * We),
      (L += d * Ye),
      (d = w[13]),
      (ve += d * W),
      (Q += d * H),
      (fe += d * B),
      (Ee += d * ee),
      (me += d * q),
      (O += d * J),
      (z += d * te),
      (R += d * oe),
      (V += d * be),
      (re += d * de),
      (ie += d * Se),
      (_ += d * _e),
      (S += d * $e),
      (D += d * Ae),
      (L += d * We),
      (M += d * Ye),
      (d = w[14]),
      (Q += d * W),
      (fe += d * H),
      (Ee += d * B),
      (me += d * ee),
      (O += d * q),
      (z += d * J),
      (R += d * te),
      (V += d * oe),
      (re += d * be),
      (ie += d * de),
      (_ += d * Se),
      (S += d * _e),
      (D += d * $e),
      (L += d * Ae),
      (M += d * We),
      (j += d * Ye),
      (d = w[15]),
      (fe += d * W),
      (Ee += d * H),
      (me += d * B),
      (O += d * ee),
      (z += d * q),
      (R += d * J),
      (V += d * te),
      (re += d * oe),
      (ie += d * be),
      (_ += d * de),
      (S += d * Se),
      (D += d * _e),
      (L += d * $e),
      (M += d * Ae),
      (j += d * We),
      (Y += d * Ye),
      (A += 38 * Ee),
      ($ += 38 * me),
      (I += 38 * O),
      (T += 38 * z),
      (U += 38 * R),
      (F += 38 * V),
      (Z += 38 * re),
      (G += 38 * ie),
      (N += 38 * _),
      (X += 38 * S),
      (Ce += 38 * D),
      (ke += 38 * L),
      (xe += 38 * M),
      (ve += 38 * j),
      (Q += 38 * Y),
      (C = 1),
      (d = A + C + 65535),
      (C = Math.floor(d / 65536)),
      (A = d - C * 65536),
      (d = $ + C + 65535),
      (C = Math.floor(d / 65536)),
      ($ = d - C * 65536),
      (d = I + C + 65535),
      (C = Math.floor(d / 65536)),
      (I = d - C * 65536),
      (d = T + C + 65535),
      (C = Math.floor(d / 65536)),
      (T = d - C * 65536),
      (d = U + C + 65535),
      (C = Math.floor(d / 65536)),
      (U = d - C * 65536),
      (d = F + C + 65535),
      (C = Math.floor(d / 65536)),
      (F = d - C * 65536),
      (d = Z + C + 65535),
      (C = Math.floor(d / 65536)),
      (Z = d - C * 65536),
      (d = G + C + 65535),
      (C = Math.floor(d / 65536)),
      (G = d - C * 65536),
      (d = N + C + 65535),
      (C = Math.floor(d / 65536)),
      (N = d - C * 65536),
      (d = X + C + 65535),
      (C = Math.floor(d / 65536)),
      (X = d - C * 65536),
      (d = Ce + C + 65535),
      (C = Math.floor(d / 65536)),
      (Ce = d - C * 65536),
      (d = ke + C + 65535),
      (C = Math.floor(d / 65536)),
      (ke = d - C * 65536),
      (d = xe + C + 65535),
      (C = Math.floor(d / 65536)),
      (xe = d - C * 65536),
      (d = ve + C + 65535),
      (C = Math.floor(d / 65536)),
      (ve = d - C * 65536),
      (d = Q + C + 65535),
      (C = Math.floor(d / 65536)),
      (Q = d - C * 65536),
      (d = fe + C + 65535),
      (C = Math.floor(d / 65536)),
      (fe = d - C * 65536),
      (A += C - 1 + 37 * (C - 1)),
      (C = 1),
      (d = A + C + 65535),
      (C = Math.floor(d / 65536)),
      (A = d - C * 65536),
      (d = $ + C + 65535),
      (C = Math.floor(d / 65536)),
      ($ = d - C * 65536),
      (d = I + C + 65535),
      (C = Math.floor(d / 65536)),
      (I = d - C * 65536),
      (d = T + C + 65535),
      (C = Math.floor(d / 65536)),
      (T = d - C * 65536),
      (d = U + C + 65535),
      (C = Math.floor(d / 65536)),
      (U = d - C * 65536),
      (d = F + C + 65535),
      (C = Math.floor(d / 65536)),
      (F = d - C * 65536),
      (d = Z + C + 65535),
      (C = Math.floor(d / 65536)),
      (Z = d - C * 65536),
      (d = G + C + 65535),
      (C = Math.floor(d / 65536)),
      (G = d - C * 65536),
      (d = N + C + 65535),
      (C = Math.floor(d / 65536)),
      (N = d - C * 65536),
      (d = X + C + 65535),
      (C = Math.floor(d / 65536)),
      (X = d - C * 65536),
      (d = Ce + C + 65535),
      (C = Math.floor(d / 65536)),
      (Ce = d - C * 65536),
      (d = ke + C + 65535),
      (C = Math.floor(d / 65536)),
      (ke = d - C * 65536),
      (d = xe + C + 65535),
      (C = Math.floor(d / 65536)),
      (xe = d - C * 65536),
      (d = ve + C + 65535),
      (C = Math.floor(d / 65536)),
      (ve = d - C * 65536),
      (d = Q + C + 65535),
      (C = Math.floor(d / 65536)),
      (Q = d - C * 65536),
      (d = fe + C + 65535),
      (C = Math.floor(d / 65536)),
      (fe = d - C * 65536),
      (A += C - 1 + 37 * (C - 1)),
      (v[0] = A),
      (v[1] = $),
      (v[2] = I),
      (v[3] = T),
      (v[4] = U),
      (v[5] = F),
      (v[6] = Z),
      (v[7] = G),
      (v[8] = N),
      (v[9] = X),
      (v[10] = Ce),
      (v[11] = ke),
      (v[12] = xe),
      (v[13] = ve),
      (v[14] = Q),
      (v[15] = fe);
  }
  function p(v, w) {
    h(v, w, w);
  }
  function m(v, w) {
    const x = r();
    for (let d = 0; d < 16; d++) x[d] = w[d];
    for (let d = 253; d >= 0; d--) p(x, x), d !== 2 && d !== 4 && h(x, x, w);
    for (let d = 0; d < 16; d++) v[d] = x[d];
  }
  function g(v, w) {
    const x = new Uint8Array(32),
      d = new Float64Array(80),
      C = r(),
      A = r(),
      $ = r(),
      I = r(),
      T = r(),
      U = r();
    for (let N = 0; N < 31; N++) x[N] = v[N];
    (x[31] = (v[31] & 127) | 64), (x[0] &= 248), u(d, w);
    for (let N = 0; N < 16; N++) A[N] = d[N];
    C[0] = I[0] = 1;
    for (let N = 254; N >= 0; --N) {
      const X = (x[N >>> 3] >>> (N & 7)) & 1;
      a(C, A, X),
        a($, I, X),
        l(T, C, $),
        f(C, C, $),
        l($, A, I),
        f(A, A, I),
        p(I, T),
        p(U, C),
        h(C, $, C),
        h($, A, T),
        l(T, C, $),
        f(C, C, $),
        p(A, C),
        f($, I, U),
        h(C, $, o),
        l(C, C, I),
        h($, $, C),
        h(C, I, U),
        h(I, A, d),
        p(A, T),
        a(C, A, X),
        a($, I, X);
    }
    for (let N = 0; N < 16; N++)
      (d[N + 16] = C[N]),
        (d[N + 32] = $[N]),
        (d[N + 48] = A[N]),
        (d[N + 64] = I[N]);
    const F = d.subarray(32),
      Z = d.subarray(16);
    m(F, F), h(Z, Z, F);
    const G = new Uint8Array(32);
    return c(G, Z), G;
  }
  e.scalarMult = g;
  function y(v) {
    return g(v, s);
  }
  e.scalarMultBase = y;
  function k(v) {
    if (v.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const w = new Uint8Array(v);
    return { publicKey: y(w), secretKey: w };
  }
  e.generateKeyPairFromSeed = k;
  function b(v) {
    const w = (0, t.randomBytes)(32, v),
      x = k(w);
    return (0, n.wipe)(w), x;
  }
  e.generateKeyPair = b;
  function E(v, w, x = !1) {
    if (v.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (w.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const d = g(v, w);
    if (x) {
      let C = 0;
      for (let A = 0; A < d.length; A++) C |= d[A];
      if (C === 0) throw new Error("X25519: invalid shared key");
    }
    return d;
  }
  e.sharedKey = E;
})(Qu);
function ef(e) {
  return globalThis.Buffer != null
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : e;
}
function s0(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? ef(globalThis.Buffer.allocUnsafe(e))
    : new Uint8Array(e);
}
function jd(e, t) {
  t || (t = e.reduce((s, o) => s + o.length, 0));
  const n = s0(t);
  let r = 0;
  for (const s of e) n.set(s, r), (r += s.length);
  return ef(n);
}
function nC(e, t) {
  if (e.length >= 255) throw new TypeError("Alphabet too long");
  for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
  for (var s = 0; s < e.length; s++) {
    var o = e.charAt(s),
      i = o.charCodeAt(0);
    if (n[i] !== 255) throw new TypeError(o + " is ambiguous");
    n[i] = s;
  }
  var a = e.length,
    c = e.charAt(0),
    u = Math.log(a) / Math.log(256),
    l = Math.log(256) / Math.log(a);
  function f(m) {
    if (
      (m instanceof Uint8Array ||
        (ArrayBuffer.isView(m)
          ? (m = new Uint8Array(m.buffer, m.byteOffset, m.byteLength))
          : Array.isArray(m) && (m = Uint8Array.from(m))),
      !(m instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (m.length === 0) return "";
    for (var g = 0, y = 0, k = 0, b = m.length; k !== b && m[k] === 0; )
      k++, g++;
    for (var E = ((b - k) * l + 1) >>> 0, v = new Uint8Array(E); k !== b; ) {
      for (
        var w = m[k], x = 0, d = E - 1;
        (w !== 0 || x < y) && d !== -1;
        d--, x++
      )
        (w += (256 * v[d]) >>> 0), (v[d] = w % a >>> 0), (w = (w / a) >>> 0);
      if (w !== 0) throw new Error("Non-zero carry");
      (y = x), k++;
    }
    for (var C = E - y; C !== E && v[C] === 0; ) C++;
    for (var A = c.repeat(g); C < E; ++C) A += e.charAt(v[C]);
    return A;
  }
  function h(m) {
    if (typeof m != "string") throw new TypeError("Expected String");
    if (m.length === 0) return new Uint8Array();
    var g = 0;
    if (m[g] !== " ") {
      for (var y = 0, k = 0; m[g] === c; ) y++, g++;
      for (
        var b = ((m.length - g) * u + 1) >>> 0, E = new Uint8Array(b);
        m[g];

      ) {
        var v = n[m.charCodeAt(g)];
        if (v === 255) return;
        for (var w = 0, x = b - 1; (v !== 0 || w < k) && x !== -1; x--, w++)
          (v += (a * E[x]) >>> 0),
            (E[x] = v % 256 >>> 0),
            (v = (v / 256) >>> 0);
        if (v !== 0) throw new Error("Non-zero carry");
        (k = w), g++;
      }
      if (m[g] !== " ") {
        for (var d = b - k; d !== b && E[d] === 0; ) d++;
        for (var C = new Uint8Array(y + (b - d)), A = y; d !== b; )
          C[A++] = E[d++];
        return C;
      }
    }
  }
  function p(m) {
    var g = h(m);
    if (g) return g;
    throw new Error(`Non-${t} character`);
  }
  return { encode: f, decodeUnsafe: h, decode: p };
}
var rC = nC,
  sC = rC;
const oC = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  iC = (e) => new TextEncoder().encode(e),
  aC = (e) => new TextDecoder().decode(e);
class cC {
  constructor(t, n, r) {
    (this.name = t), (this.prefix = n), (this.baseEncode = r);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class lC {
  constructor(t, n, r) {
    if (((this.name = t), (this.prefix = n), n.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = n.codePointAt(0)), (this.baseDecode = r);
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return o0(this, t);
  }
}
class uC {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return o0(this, t);
  }
  decode(t) {
    const n = t[0],
      r = this.decoders[n];
    if (r) return r.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const o0 = (e, t) =>
  new uC({
    ...(e.decoders || { [e.prefix]: e }),
    ...(t.decoders || { [t.prefix]: t }),
  });
class fC {
  constructor(t, n, r, s) {
    (this.name = t),
      (this.prefix = n),
      (this.baseEncode = r),
      (this.baseDecode = s),
      (this.encoder = new cC(t, n, r)),
      (this.decoder = new lC(t, n, s));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const ja = ({ name: e, prefix: t, encode: n, decode: r }) => new fC(e, t, n, r),
  Qo = ({ prefix: e, name: t, alphabet: n }) => {
    const { encode: r, decode: s } = sC(n, t);
    return ja({ prefix: e, name: t, encode: r, decode: (o) => oC(s(o)) });
  },
  dC = (e, t, n, r) => {
    const s = {};
    for (let l = 0; l < t.length; ++l) s[t[l]] = l;
    let o = e.length;
    for (; e[o - 1] === "="; ) --o;
    const i = new Uint8Array(((o * n) / 8) | 0);
    let a = 0,
      c = 0,
      u = 0;
    for (let l = 0; l < o; ++l) {
      const f = s[e[l]];
      if (f === void 0) throw new SyntaxError(`Non-${r} character`);
      (c = (c << n) | f),
        (a += n),
        a >= 8 && ((a -= 8), (i[u++] = 255 & (c >> a)));
    }
    if (a >= n || 255 & (c << (8 - a)))
      throw new SyntaxError("Unexpected end of data");
    return i;
  },
  hC = (e, t, n) => {
    const r = t[t.length - 1] === "=",
      s = (1 << n) - 1;
    let o = "",
      i = 0,
      a = 0;
    for (let c = 0; c < e.length; ++c)
      for (a = (a << 8) | e[c], i += 8; i > n; )
        (i -= n), (o += t[s & (a >> i)]);
    if ((i && (o += t[s & (a << (n - i))]), r))
      for (; (o.length * n) & 7; ) o += "=";
    return o;
  },
  it = ({ name: e, prefix: t, bitsPerChar: n, alphabet: r }) =>
    ja({
      prefix: t,
      name: e,
      encode(s) {
        return hC(s, r, n);
      },
      decode(s) {
        return dC(s, r, n, e);
      },
    }),
  pC = ja({
    prefix: "\0",
    name: "identity",
    encode: (e) => aC(e),
    decode: (e) => iC(e),
  }),
  mC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: pC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  bC = it({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  gC = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: bC }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  yC = it({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  wC = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: yC }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  vC = Qo({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  EC = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: vC }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  CC = it({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  xC = it({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  _C = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: CC, base16upper: xC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kC = it({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  SC = it({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  AC = it({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  PC = it({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  TC = it({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  DC = it({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  OC = it({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  IC = it({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  $C = it({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  NC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: kC,
        base32hex: TC,
        base32hexpad: OC,
        base32hexpadupper: IC,
        base32hexupper: DC,
        base32pad: AC,
        base32padupper: PC,
        base32upper: SC,
        base32z: $C,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  MC = Qo({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  UC = Qo({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  FC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: MC, base36upper: UC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  BC = Qo({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  LC = Qo({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  RC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: BC, base58flickr: LC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jC = it({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  HC = it({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  zC = it({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  WC = it({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  qC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: jC,
        base64pad: HC,
        base64url: zC,
        base64urlpad: WC,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  i0 = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  GC = i0.reduce((e, t, n) => ((e[n] = t), e), []),
  VC = i0.reduce((e, t, n) => ((e[t.codePointAt(0)] = n), e), []);
function KC(e) {
  return e.reduce((t, n) => ((t += GC[n]), t), "");
}
function XC(e) {
  const t = [];
  for (const n of e) {
    const r = VC[n.codePointAt(0)];
    if (r === void 0) throw new Error(`Non-base256emoji character: ${n}`);
    t.push(r);
  }
  return new Uint8Array(t);
}
const YC = ja({ prefix: "🚀", name: "base256emoji", encode: KC, decode: XC }),
  ZC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: YC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const Hd = {
  ...mC,
  ...gC,
  ...wC,
  ...EC,
  ..._C,
  ...NC,
  ...FC,
  ...RC,
  ...qC,
  ...ZC,
};
function a0(e, t, n, r) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: n },
    decoder: { decode: r },
  };
}
const zd = a0(
    "utf8",
    "u",
    (e) => "u" + new TextDecoder("utf8").decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  xc = a0(
    "ascii",
    "a",
    (e) => {
      let t = "a";
      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      const t = s0(e.length);
      for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
      return t;
    }
  ),
  c0 = {
    utf8: zd,
    "utf-8": zd,
    hex: Hd.base16,
    latin1: xc,
    ascii: xc,
    binary: xc,
    ...Hd,
  };
function Vt(e, t = "utf8") {
  const n = c0[t];
  if (!n) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? ef(globalThis.Buffer.from(e, "utf-8"))
    : n.decoder.decode(`${n.prefix}${e}`);
}
function Jt(e, t = "utf8") {
  const n = c0[t];
  if (!n) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
        "utf8"
      )
    : n.encoder.encode(e).substring(1);
}
var Wd = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, s = t.length, o; r < s; r++)
        (o || !(r in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
    return e.concat(o || Array.prototype.slice.call(t));
  },
  JC = (function () {
    function e(t, n, r) {
      (this.name = t),
        (this.version = n),
        (this.os = r),
        (this.type = "browser");
    }
    return e;
  })(),
  QC = (function () {
    function e(t) {
      (this.version = t),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return e;
  })(),
  e8 = (function () {
    function e(t, n, r, s) {
      (this.name = t),
        (this.version = n),
        (this.os = r),
        (this.bot = s),
        (this.type = "bot-device");
    }
    return e;
  })(),
  t8 = (function () {
    function e() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return e;
  })(),
  n8 = (function () {
    function e() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return e;
  })(),
  r8 =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  s8 =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  qd = 3,
  o8 = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", r8],
  ],
  Gd = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function i8(e) {
  return typeof document > "u" &&
    typeof navigator < "u" &&
    navigator.product === "ReactNative"
    ? new n8()
    : typeof navigator < "u"
    ? c8(navigator.userAgent)
    : u8();
}
function a8(e) {
  return (
    e !== "" &&
    o8.reduce(function (t, n) {
      var r = n[0],
        s = n[1];
      if (t) return t;
      var o = s.exec(e);
      return !!o && [r, o];
    }, !1)
  );
}
function c8(e) {
  var t = a8(e);
  if (!t) return null;
  var n = t[0],
    r = t[1];
  if (n === "searchbot") return new t8();
  var s = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
  s
    ? s.length < qd && (s = Wd(Wd([], s, !0), f8(qd - s.length), !0))
    : (s = []);
  var o = s.join("."),
    i = l8(e),
    a = s8.exec(e);
  return a && a[1] ? new e8(n, o, i, a[1]) : new JC(n, o, i);
}
function l8(e) {
  for (var t = 0, n = Gd.length; t < n; t++) {
    var r = Gd[t],
      s = r[0],
      o = r[1],
      i = o.exec(e);
    if (i) return s;
  }
  return null;
}
function u8() {
  var e = typeof process < "u" && process.version;
  return e ? new QC(process.version.slice(1)) : null;
}
function f8(e) {
  for (var t = [], n = 0; n < e; n++) t.push("0");
  return t;
}
var Or = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Nl =
  function (e, t) {
    return (
      (Nl =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var s in r) r.hasOwnProperty(s) && (n[s] = r[s]);
        }),
      Nl(e, t)
    );
  };
function d8(e, t) {
  Nl(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var Ml = function () {
  return (
    (Ml =
      Object.assign ||
      function (t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Ml.apply(this, arguments)
  );
};
function h8(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
}
function p8(e, t, n, r) {
  var s = arguments.length,
    o =
      s < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
  return s > 3 && o && Object.defineProperty(t, n, o), o;
}
function m8(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function b8(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function g8(e, t, n, r) {
  function s(o) {
    return o instanceof n
      ? o
      : new n(function (i) {
          i(o);
        });
  }
  return new (n || (n = Promise))(function (o, i) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        i(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        i(f);
      }
    }
    function u(l) {
      l.done ? o(l.value) : s(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function y8(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    r,
    s,
    o,
    i;
  return (
    (i = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function a(u) {
    return function (l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (
          ((r = 1),
          s &&
            (o =
              u[0] & 2
                ? s.return
                : u[0]
                ? s.throw || ((o = s.return) && o.call(s), 0)
                : s.next) &&
            !(o = o.call(s, u[1])).done)
        )
          return o;
        switch (((s = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (s = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((o = n.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < o[1]) {
              (n.label = o[1]), (o = u);
              break;
            }
            if (o && n.label < o[2]) {
              (n.label = o[2]), n.ops.push(u);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        (u = [6, l]), (s = 0);
      } finally {
        r = o = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function w8(e, t, n, r) {
  r === void 0 && (r = n), (e[r] = t[n]);
}
function v8(e, t) {
  for (var n in e) n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
}
function Ul(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function l0(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    s,
    o = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; ) o.push(s.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function E8() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(l0(arguments[t]));
  return e;
}
function C8() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), s = 0, t = 0; t < n; t++)
    for (var o = arguments[t], i = 0, a = o.length; i < a; i++, s++)
      r[s] = o[i];
  return r;
}
function Mo(e) {
  return this instanceof Mo ? ((this.v = e), this) : new Mo(e);
}
function x8(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    s,
    o = [];
  return (
    (s = {}),
    i("next"),
    i("throw"),
    i("return"),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function i(h) {
    r[h] &&
      (s[h] = function (p) {
        return new Promise(function (m, g) {
          o.push([h, p, m, g]) > 1 || a(h, p);
        });
      });
  }
  function a(h, p) {
    try {
      c(r[h](p));
    } catch (m) {
      f(o[0][3], m);
    }
  }
  function c(h) {
    h.value instanceof Mo
      ? Promise.resolve(h.value.v).then(u, l)
      : f(o[0][2], h);
  }
  function u(h) {
    a("next", h);
  }
  function l(h) {
    a("throw", h);
  }
  function f(h, p) {
    h(p), o.shift(), o.length && a(o[0][0], o[0][1]);
  }
}
function _8(e) {
  var t, n;
  return (
    (t = {}),
    r("next"),
    r("throw", function (s) {
      throw s;
    }),
    r("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(s, o) {
    t[s] = e[s]
      ? function (i) {
          return (n = !n)
            ? { value: Mo(e[s](i)), done: s === "return" }
            : o
            ? o(i)
            : i;
        }
      : o;
  }
}
function k8(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Ul == "function" ? Ul(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(o) {
    n[o] =
      e[o] &&
      function (i) {
        return new Promise(function (a, c) {
          (i = e[o](i)), s(a, c, i.done, i.value);
        });
      };
  }
  function s(o, i, a, c) {
    Promise.resolve(c).then(function (u) {
      o({ value: u, done: a });
    }, i);
  }
}
function S8(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
function A8(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return (t.default = e), t;
}
function P8(e) {
  return e && e.__esModule ? e : { default: e };
}
function T8(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function D8(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, n), n;
}
const O8 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Ml;
        },
        __asyncDelegator: _8,
        __asyncGenerator: x8,
        __asyncValues: k8,
        __await: Mo,
        __awaiter: g8,
        __classPrivateFieldGet: T8,
        __classPrivateFieldSet: D8,
        __createBinding: w8,
        __decorate: p8,
        __exportStar: v8,
        __extends: d8,
        __generator: y8,
        __importDefault: P8,
        __importStar: A8,
        __makeTemplateObject: S8,
        __metadata: b8,
        __param: m8,
        __read: l0,
        __rest: h8,
        __spread: E8,
        __spreadArrays: C8,
        __values: Ul,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ha = Ib(O8);
var _c = {},
  Fs = {},
  Vd;
function I8() {
  if (Vd) return Fs;
  (Vd = 1),
    Object.defineProperty(Fs, "__esModule", { value: !0 }),
    (Fs.delay = void 0);
  function e(t) {
    return new Promise((n) => {
      setTimeout(() => {
        n(!0);
      }, t);
    });
  }
  return (Fs.delay = e), Fs;
}
var vr = {},
  kc = {},
  Er = {},
  Kd;
function $8() {
  return (
    Kd ||
      ((Kd = 1),
      Object.defineProperty(Er, "__esModule", { value: !0 }),
      (Er.ONE_THOUSAND = Er.ONE_HUNDRED = void 0),
      (Er.ONE_HUNDRED = 100),
      (Er.ONE_THOUSAND = 1e3)),
    Er
  );
}
var Sc = {},
  Xd;
function N8() {
  return (
    Xd ||
      ((Xd = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ONE_YEAR =
            e.FOUR_WEEKS =
            e.THREE_WEEKS =
            e.TWO_WEEKS =
            e.ONE_WEEK =
            e.THIRTY_DAYS =
            e.SEVEN_DAYS =
            e.FIVE_DAYS =
            e.THREE_DAYS =
            e.ONE_DAY =
            e.TWENTY_FOUR_HOURS =
            e.TWELVE_HOURS =
            e.SIX_HOURS =
            e.THREE_HOURS =
            e.ONE_HOUR =
            e.SIXTY_MINUTES =
            e.THIRTY_MINUTES =
            e.TEN_MINUTES =
            e.FIVE_MINUTES =
            e.ONE_MINUTE =
            e.SIXTY_SECONDS =
            e.THIRTY_SECONDS =
            e.TEN_SECONDS =
            e.FIVE_SECONDS =
            e.ONE_SECOND =
              void 0),
          (e.ONE_SECOND = 1),
          (e.FIVE_SECONDS = 5),
          (e.TEN_SECONDS = 10),
          (e.THIRTY_SECONDS = 30),
          (e.SIXTY_SECONDS = 60),
          (e.ONE_MINUTE = e.SIXTY_SECONDS),
          (e.FIVE_MINUTES = e.ONE_MINUTE * 5),
          (e.TEN_MINUTES = e.ONE_MINUTE * 10),
          (e.THIRTY_MINUTES = e.ONE_MINUTE * 30),
          (e.SIXTY_MINUTES = e.ONE_MINUTE * 60),
          (e.ONE_HOUR = e.SIXTY_MINUTES),
          (e.THREE_HOURS = e.ONE_HOUR * 3),
          (e.SIX_HOURS = e.ONE_HOUR * 6),
          (e.TWELVE_HOURS = e.ONE_HOUR * 12),
          (e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24),
          (e.ONE_DAY = e.TWENTY_FOUR_HOURS),
          (e.THREE_DAYS = e.ONE_DAY * 3),
          (e.FIVE_DAYS = e.ONE_DAY * 5),
          (e.SEVEN_DAYS = e.ONE_DAY * 7),
          (e.THIRTY_DAYS = e.ONE_DAY * 30),
          (e.ONE_WEEK = e.SEVEN_DAYS),
          (e.TWO_WEEKS = e.ONE_WEEK * 2),
          (e.THREE_WEEKS = e.ONE_WEEK * 3),
          (e.FOUR_WEEKS = e.ONE_WEEK * 4),
          (e.ONE_YEAR = e.ONE_DAY * 365);
      })(Sc)),
    Sc
  );
}
var Yd;
function u0() {
  return (
    Yd ||
      ((Yd = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ha;
        t.__exportStar($8(), e), t.__exportStar(N8(), e);
      })(kc)),
    kc
  );
}
var Zd;
function M8() {
  if (Zd) return vr;
  (Zd = 1),
    Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.fromMiliseconds = vr.toMiliseconds = void 0);
  const e = u0();
  function t(r) {
    return r * e.ONE_THOUSAND;
  }
  vr.toMiliseconds = t;
  function n(r) {
    return Math.floor(r / e.ONE_THOUSAND);
  }
  return (vr.fromMiliseconds = n), vr;
}
var Jd;
function U8() {
  return (
    Jd ||
      ((Jd = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ha;
        t.__exportStar(I8(), e), t.__exportStar(M8(), e);
      })(_c)),
    _c
  );
}
var jr = {},
  Qd;
function F8() {
  if (Qd) return jr;
  (Qd = 1),
    Object.defineProperty(jr, "__esModule", { value: !0 }),
    (jr.Watch = void 0);
  class e {
    constructor() {
      this.timestamps = new Map();
    }
    start(n) {
      if (this.timestamps.has(n))
        throw new Error(`Watch already started for label: ${n}`);
      this.timestamps.set(n, { started: Date.now() });
    }
    stop(n) {
      const r = this.get(n);
      if (typeof r.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${n}`);
      const s = Date.now() - r.started;
      this.timestamps.set(n, { started: r.started, elapsed: s });
    }
    get(n) {
      const r = this.timestamps.get(n);
      if (typeof r > "u") throw new Error(`No timestamp found for label: ${n}`);
      return r;
    }
    elapsed(n) {
      const r = this.get(n);
      return r.elapsed || Date.now() - r.started;
    }
  }
  return (jr.Watch = e), (jr.default = e), jr;
}
var Ac = {},
  Bs = {},
  eh;
function B8() {
  if (eh) return Bs;
  (eh = 1),
    Object.defineProperty(Bs, "__esModule", { value: !0 }),
    (Bs.IWatch = void 0);
  class e {}
  return (Bs.IWatch = e), Bs;
}
var th;
function L8() {
  return (
    th ||
      ((th = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Ha.__exportStar(B8(), e);
      })(Ac)),
    Ac
  );
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Ha;
  t.__exportStar(U8(), e),
    t.__exportStar(F8(), e),
    t.__exportStar(L8(), e),
    t.__exportStar(u0(), e);
})(Or);
var Re = {};
Object.defineProperty(Re, "__esModule", { value: !0 });
Re.getLocalStorage =
  Re.getLocalStorageOrThrow =
  Re.getCrypto =
  Re.getCryptoOrThrow =
  f0 =
  Re.getLocation =
  Re.getLocationOrThrow =
  nf =
  Re.getNavigator =
  Re.getNavigatorOrThrow =
  tf =
  Re.getDocument =
  Re.getDocumentOrThrow =
  Re.getFromWindowOrThrow =
  Re.getFromWindow =
    void 0;
function Br(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
Re.getFromWindow = Br;
function As(e) {
  const t = Br(e);
  if (!t) throw new Error(`${e} is not defined in Window`);
  return t;
}
Re.getFromWindowOrThrow = As;
function R8() {
  return As("document");
}
Re.getDocumentOrThrow = R8;
function j8() {
  return Br("document");
}
var tf = (Re.getDocument = j8);
function H8() {
  return As("navigator");
}
Re.getNavigatorOrThrow = H8;
function z8() {
  return Br("navigator");
}
var nf = (Re.getNavigator = z8);
function W8() {
  return As("location");
}
Re.getLocationOrThrow = W8;
function q8() {
  return Br("location");
}
var f0 = (Re.getLocation = q8);
function G8() {
  return As("crypto");
}
Re.getCryptoOrThrow = G8;
function V8() {
  return Br("crypto");
}
Re.getCrypto = V8;
function K8() {
  return As("localStorage");
}
Re.getLocalStorageOrThrow = K8;
function X8() {
  return Br("localStorage");
}
Re.getLocalStorage = X8;
var rf = {};
Object.defineProperty(rf, "__esModule", { value: !0 });
var d0 = (rf.getWindowMetadata = void 0);
const nh = Re;
function Y8() {
  let e, t;
  try {
    (e = nh.getDocumentOrThrow()), (t = nh.getLocationOrThrow());
  } catch {
    return null;
  }
  function n() {
    const f = e.getElementsByTagName("link"),
      h = [];
    for (let p = 0; p < f.length; p++) {
      const m = f[p],
        g = m.getAttribute("rel");
      if (g && g.toLowerCase().indexOf("icon") > -1) {
        const y = m.getAttribute("href");
        if (y)
          if (
            y.toLowerCase().indexOf("https:") === -1 &&
            y.toLowerCase().indexOf("http:") === -1 &&
            y.indexOf("//") !== 0
          ) {
            let k = t.protocol + "//" + t.host;
            if (y.indexOf("/") === 0) k += y;
            else {
              const b = t.pathname.split("/");
              b.pop();
              const E = b.join("/");
              k += E + "/" + y;
            }
            h.push(k);
          } else if (y.indexOf("//") === 0) {
            const k = t.protocol + y;
            h.push(k);
          } else h.push(y);
      }
    }
    return h;
  }
  function r(...f) {
    const h = e.getElementsByTagName("meta");
    for (let p = 0; p < h.length; p++) {
      const m = h[p],
        g = ["itemprop", "property", "name"]
          .map((y) => m.getAttribute(y))
          .filter((y) => (y ? f.includes(y) : !1));
      if (g.length && g) {
        const y = m.getAttribute("content");
        if (y) return y;
      }
    }
    return "";
  }
  function s() {
    let f = r("name", "og:site_name", "og:title", "twitter:title");
    return f || (f = e.title), f;
  }
  function o() {
    return r(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const i = s(),
    a = o(),
    c = t.origin,
    u = n();
  return { description: a, url: c, icons: u, name: i };
}
d0 = rf.getWindowMetadata = Y8;
var Uo = {},
  Z8 = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  h0 = "%[a-f0-9]{2}",
  rh = new RegExp("(" + h0 + ")|([^%]+?)", "gi"),
  sh = new RegExp("(" + h0 + ")+", "gi");
function Fl(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  var n = e.slice(0, t),
    r = e.slice(t);
  return Array.prototype.concat.call([], Fl(n), Fl(r));
}
function J8(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(rh) || [], n = 1; n < t.length; n++)
      (e = Fl(t, n).join("")), (t = e.match(rh) || []);
    return e;
  }
}
function Q8(e) {
  for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = sh.exec(e); n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var r = J8(n[0]);
      r !== n[0] && (t[n[0]] = r);
    }
    n = sh.exec(e);
  }
  t["%C2"] = "�";
  for (var s = Object.keys(t), o = 0; o < s.length; o++) {
    var i = s[o];
    e = e.replace(new RegExp(i, "g"), t[i]);
  }
  return e;
}
var ex = function (e) {
    if (typeof e != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
      );
    try {
      return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch {
      return Q8(e);
    }
  },
  tx = (e, t) => {
    if (!(typeof e == "string" && typeof t == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (t === "") return [e];
    const n = e.indexOf(t);
    return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
  },
  nx = function (e, t) {
    for (
      var n = {}, r = Object.keys(e), s = Array.isArray(t), o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o],
        a = e[i];
      (s ? t.indexOf(i) !== -1 : t(i, a, e)) && (n[i] = a);
    }
    return n;
  };
(function (e) {
  const t = Z8,
    n = ex,
    r = tx,
    s = nx,
    o = (b) => b == null,
    i = Symbol("encodeFragmentIdentifier");
  function a(b) {
    switch (b.arrayFormat) {
      case "index":
        return (E) => (v, w) => {
          const x = v.length;
          return w === void 0 ||
            (b.skipNull && w === null) ||
            (b.skipEmptyString && w === "")
            ? v
            : w === null
            ? [...v, [l(E, b), "[", x, "]"].join("")]
            : [...v, [l(E, b), "[", l(x, b), "]=", l(w, b)].join("")];
        };
      case "bracket":
        return (E) => (v, w) =>
          w === void 0 ||
          (b.skipNull && w === null) ||
          (b.skipEmptyString && w === "")
            ? v
            : w === null
            ? [...v, [l(E, b), "[]"].join("")]
            : [...v, [l(E, b), "[]=", l(w, b)].join("")];
      case "colon-list-separator":
        return (E) => (v, w) =>
          w === void 0 ||
          (b.skipNull && w === null) ||
          (b.skipEmptyString && w === "")
            ? v
            : w === null
            ? [...v, [l(E, b), ":list="].join("")]
            : [...v, [l(E, b), ":list=", l(w, b)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const E = b.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (w, x) =>
          x === void 0 ||
          (b.skipNull && x === null) ||
          (b.skipEmptyString && x === "")
            ? w
            : ((x = x === null ? "" : x),
              w.length === 0
                ? [[l(v, b), E, l(x, b)].join("")]
                : [[w, l(x, b)].join(b.arrayFormatSeparator)]);
      }
      default:
        return (E) => (v, w) =>
          w === void 0 ||
          (b.skipNull && w === null) ||
          (b.skipEmptyString && w === "")
            ? v
            : w === null
            ? [...v, l(E, b)]
            : [...v, [l(E, b), "=", l(w, b)].join("")];
    }
  }
  function c(b) {
    let E;
    switch (b.arrayFormat) {
      case "index":
        return (v, w, x) => {
          if (
            ((E = /\[(\d*)\]$/.exec(v)), (v = v.replace(/\[\d*\]$/, "")), !E)
          ) {
            x[v] = w;
            return;
          }
          x[v] === void 0 && (x[v] = {}), (x[v][E[1]] = w);
        };
      case "bracket":
        return (v, w, x) => {
          if (((E = /(\[\])$/.exec(v)), (v = v.replace(/\[\]$/, "")), !E)) {
            x[v] = w;
            return;
          }
          if (x[v] === void 0) {
            x[v] = [w];
            return;
          }
          x[v] = [].concat(x[v], w);
        };
      case "colon-list-separator":
        return (v, w, x) => {
          if (((E = /(:list)$/.exec(v)), (v = v.replace(/:list$/, "")), !E)) {
            x[v] = w;
            return;
          }
          if (x[v] === void 0) {
            x[v] = [w];
            return;
          }
          x[v] = [].concat(x[v], w);
        };
      case "comma":
      case "separator":
        return (v, w, x) => {
          const d = typeof w == "string" && w.includes(b.arrayFormatSeparator),
            C =
              typeof w == "string" &&
              !d &&
              f(w, b).includes(b.arrayFormatSeparator);
          w = C ? f(w, b) : w;
          const A =
            d || C
              ? w.split(b.arrayFormatSeparator).map(($) => f($, b))
              : w === null
              ? w
              : f(w, b);
          x[v] = A;
        };
      case "bracket-separator":
        return (v, w, x) => {
          const d = /(\[\])$/.test(v);
          if (((v = v.replace(/\[\]$/, "")), !d)) {
            x[v] = w && f(w, b);
            return;
          }
          const C =
            w === null
              ? []
              : w.split(b.arrayFormatSeparator).map((A) => f(A, b));
          if (x[v] === void 0) {
            x[v] = C;
            return;
          }
          x[v] = [].concat(x[v], C);
        };
      default:
        return (v, w, x) => {
          if (x[v] === void 0) {
            x[v] = w;
            return;
          }
          x[v] = [].concat(x[v], w);
        };
    }
  }
  function u(b) {
    if (typeof b != "string" || b.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function l(b, E) {
    return E.encode ? (E.strict ? t(b) : encodeURIComponent(b)) : b;
  }
  function f(b, E) {
    return E.decode ? n(b) : b;
  }
  function h(b) {
    return Array.isArray(b)
      ? b.sort()
      : typeof b == "object"
      ? h(Object.keys(b))
          .sort((E, v) => Number(E) - Number(v))
          .map((E) => b[E])
      : b;
  }
  function p(b) {
    const E = b.indexOf("#");
    return E !== -1 && (b = b.slice(0, E)), b;
  }
  function m(b) {
    let E = "";
    const v = b.indexOf("#");
    return v !== -1 && (E = b.slice(v)), E;
  }
  function g(b) {
    b = p(b);
    const E = b.indexOf("?");
    return E === -1 ? "" : b.slice(E + 1);
  }
  function y(b, E) {
    return (
      E.parseNumbers &&
      !Number.isNaN(Number(b)) &&
      typeof b == "string" &&
      b.trim() !== ""
        ? (b = Number(b))
        : E.parseBooleans &&
          b !== null &&
          (b.toLowerCase() === "true" || b.toLowerCase() === "false") &&
          (b = b.toLowerCase() === "true"),
      b
    );
  }
  function k(b, E) {
    (E = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      E
    )),
      u(E.arrayFormatSeparator);
    const v = c(E),
      w = Object.create(null);
    if (typeof b != "string" || ((b = b.trim().replace(/^[?#&]/, "")), !b))
      return w;
    for (const x of b.split("&")) {
      if (x === "") continue;
      let [d, C] = r(E.decode ? x.replace(/\+/g, " ") : x, "=");
      (C =
        C === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(E.arrayFormat)
          ? C
          : f(C, E)),
        v(f(d, E), C, w);
    }
    for (const x of Object.keys(w)) {
      const d = w[x];
      if (typeof d == "object" && d !== null)
        for (const C of Object.keys(d)) d[C] = y(d[C], E);
      else w[x] = y(d, E);
    }
    return E.sort === !1
      ? w
      : (E.sort === !0
          ? Object.keys(w).sort()
          : Object.keys(w).sort(E.sort)
        ).reduce((x, d) => {
          const C = w[d];
          return (
            C && typeof C == "object" && !Array.isArray(C)
              ? (x[d] = h(C))
              : (x[d] = C),
            x
          );
        }, Object.create(null));
  }
  (e.extract = g),
    (e.parse = k),
    (e.stringify = (b, E) => {
      if (!b) return "";
      (E = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        E
      )),
        u(E.arrayFormatSeparator);
      const v = (C) =>
          (E.skipNull && o(b[C])) || (E.skipEmptyString && b[C] === ""),
        w = a(E),
        x = {};
      for (const C of Object.keys(b)) v(C) || (x[C] = b[C]);
      const d = Object.keys(x);
      return (
        E.sort !== !1 && d.sort(E.sort),
        d
          .map((C) => {
            const A = b[C];
            return A === void 0
              ? ""
              : A === null
              ? l(C, E)
              : Array.isArray(A)
              ? A.length === 0 && E.arrayFormat === "bracket-separator"
                ? l(C, E) + "[]"
                : A.reduce(w(C), []).join("&")
              : l(C, E) + "=" + l(A, E);
          })
          .filter((C) => C.length > 0)
          .join("&")
      );
    }),
    (e.parseUrl = (b, E) => {
      E = Object.assign({ decode: !0 }, E);
      const [v, w] = r(b, "#");
      return Object.assign(
        { url: v.split("?")[0] || "", query: k(g(b), E) },
        E && E.parseFragmentIdentifier && w
          ? { fragmentIdentifier: f(w, E) }
          : {}
      );
    }),
    (e.stringifyUrl = (b, E) => {
      E = Object.assign({ encode: !0, strict: !0, [i]: !0 }, E);
      const v = p(b.url).split("?")[0] || "",
        w = e.extract(b.url),
        x = e.parse(w, { sort: !1 }),
        d = Object.assign(x, b.query);
      let C = e.stringify(d, E);
      C && (C = `?${C}`);
      let A = m(b.url);
      return (
        b.fragmentIdentifier &&
          (A = `#${E[i] ? l(b.fragmentIdentifier, E) : b.fragmentIdentifier}`),
        `${v}${C}${A}`
      );
    }),
    (e.pick = (b, E, v) => {
      v = Object.assign({ parseFragmentIdentifier: !0, [i]: !1 }, v);
      const { url: w, query: x, fragmentIdentifier: d } = e.parseUrl(b, v);
      return e.stringifyUrl(
        { url: w, query: s(x, E), fragmentIdentifier: d },
        v
      );
    }),
    (e.exclude = (b, E, v) => {
      const w = Array.isArray(E) ? (x) => !E.includes(x) : (x, d) => !E(x, d);
      return e.pick(b, w, v);
    });
})(Uo);
const rx = {
    waku: {
      publish: "waku_publish",
      batchPublish: "waku_batchPublish",
      subscribe: "waku_subscribe",
      batchSubscribe: "waku_batchSubscribe",
      subscription: "waku_subscription",
      unsubscribe: "waku_unsubscribe",
      batchUnsubscribe: "waku_batchUnsubscribe",
      batchFetchMessages: "waku_batchFetchMessages",
    },
    irn: {
      publish: "irn_publish",
      batchPublish: "irn_batchPublish",
      subscribe: "irn_subscribe",
      batchSubscribe: "irn_batchSubscribe",
      subscription: "irn_subscription",
      unsubscribe: "irn_unsubscribe",
      batchUnsubscribe: "irn_batchUnsubscribe",
      batchFetchMessages: "irn_batchFetchMessages",
    },
    iridium: {
      publish: "iridium_publish",
      batchPublish: "iridium_batchPublish",
      subscribe: "iridium_subscribe",
      batchSubscribe: "iridium_batchSubscribe",
      subscription: "iridium_subscription",
      unsubscribe: "iridium_unsubscribe",
      batchUnsubscribe: "iridium_batchUnsubscribe",
      batchFetchMessages: "iridium_batchFetchMessages",
    },
  },
  sx = ":";
function mT(e) {
  const [t, n] = e.split(sx);
  return { namespace: t, reference: n };
}
function bT(e, t = []) {
  const n = [];
  return (
    Object.keys(e).forEach((r) => {
      if (t.length && !t.includes(r)) return;
      const s = e[r];
      n.push(...s.accounts);
    }),
    n
  );
}
function p0(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const m0 = "base10",
  kt = "base16",
  Bl = "base64pad",
  sf = "utf8",
  b0 = 0,
  ei = 1,
  ox = 0,
  oh = 1,
  Ll = 12,
  of = 32;
function gT() {
  const e = Qu.generateKeyPair();
  return { privateKey: Jt(e.secretKey, kt), publicKey: Jt(e.publicKey, kt) };
}
function yT() {
  const e = Ua.randomBytes(of);
  return Jt(e, kt);
}
function wT(e, t) {
  const n = Qu.sharedKey(Vt(e, kt), Vt(t, kt), !0),
    r = new q6(Ra.SHA256, n).expand(of);
  return Jt(r, kt);
}
function vT(e) {
  const t = Ra.hash(Vt(e, kt));
  return Jt(t, kt);
}
function ET(e) {
  const t = Ra.hash(Vt(e, sf));
  return Jt(t, kt);
}
function ix(e) {
  return Vt(`${e}`, m0);
}
function za(e) {
  return Number(Jt(e, m0));
}
function CT(e) {
  const t = ix(typeof e.type < "u" ? e.type : b0);
  if (za(t) === ei && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const n = typeof e.senderPublicKey < "u" ? Vt(e.senderPublicKey, kt) : void 0,
    r = typeof e.iv < "u" ? Vt(e.iv, kt) : Ua.randomBytes(Ll),
    s = new Zu.ChaCha20Poly1305(Vt(e.symKey, kt)).seal(r, Vt(e.message, sf));
  return ax({ type: t, sealed: s, iv: r, senderPublicKey: n });
}
function xT(e) {
  const t = new Zu.ChaCha20Poly1305(Vt(e.symKey, kt)),
    { sealed: n, iv: r } = g0(e.encoded),
    s = t.open(r, n);
  if (s === null) throw new Error("Failed to decrypt");
  return Jt(s, sf);
}
function ax(e) {
  if (za(e.type) === ei) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Jt(jd([e.type, e.senderPublicKey, e.iv, e.sealed]), Bl);
  }
  return Jt(jd([e.type, e.iv, e.sealed]), Bl);
}
function g0(e) {
  const t = Vt(e, Bl),
    n = t.slice(ox, oh),
    r = oh;
  if (za(n) === ei) {
    const a = r + of,
      c = a + Ll,
      u = t.slice(r, a),
      l = t.slice(a, c),
      f = t.slice(c);
    return { type: n, sealed: f, iv: l, senderPublicKey: u };
  }
  const s = r + Ll,
    o = t.slice(r, s),
    i = t.slice(s);
  return { type: n, sealed: i, iv: o };
}
function _T(e, t) {
  const n = g0(e);
  return cx({
    type: za(n.type),
    senderPublicKey:
      typeof n.senderPublicKey < "u" ? Jt(n.senderPublicKey, kt) : void 0,
    receiverPublicKey: t == null ? void 0 : t.receiverPublicKey,
  });
}
function cx(e) {
  const t = (e == null ? void 0 : e.type) || b0;
  if (t === ei) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: t,
    senderPublicKey: e == null ? void 0 : e.senderPublicKey,
    receiverPublicKey: e == null ? void 0 : e.receiverPublicKey,
  };
}
function kT(e) {
  return (
    e.type === ei &&
    typeof e.senderPublicKey == "string" &&
    typeof e.receiverPublicKey == "string"
  );
}
var lx = Object.defineProperty,
  ih = Object.getOwnPropertySymbols,
  ux = Object.prototype.hasOwnProperty,
  fx = Object.prototype.propertyIsEnumerable,
  ah = (e, t, n) =>
    t in e
      ? lx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ch = (e, t) => {
    for (var n in t || (t = {})) ux.call(t, n) && ah(e, n, t[n]);
    if (ih) for (var n of ih(t)) fx.call(t, n) && ah(e, n, t[n]);
    return e;
  };
const dx = "ReactNative",
  Dt = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  hx = "js";
function y0() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function ti() {
  return !tf() && !!nf() && navigator.product === dx;
}
function Wa() {
  return !y0() && !!nf() && !!tf();
}
function ni() {
  return ti()
    ? Dt.reactNative
    : y0()
    ? Dt.node
    : Wa()
    ? Dt.browser
    : Dt.unknown;
}
function ST() {
  var e;
  try {
    return ti() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (e = global.Application) == null
        ? void 0
        : e.applicationId
      : void 0;
  } catch {
    return;
  }
}
function px(e, t) {
  let n = Uo.parse(e);
  return (n = ch(ch({}, n), t)), (e = Uo.stringify(n)), e;
}
function AT() {
  return d0() || { name: "", description: "", url: "", icons: [""] };
}
function mx() {
  if (
    ni() === Dt.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: n, Version: r } = global.Platform;
    return [n, r].join("-");
  }
  const e = i8();
  if (e === null) return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser"
    ? [t, e.name, e.version].join("-")
    : [t, e.version].join("-");
}
function bx() {
  var e;
  const t = ni();
  return t === Dt.browser
    ? [t, ((e = f0()) == null ? void 0 : e.host) || "unknown"].join(":")
    : t;
}
function gx(e, t, n) {
  const r = mx(),
    s = bx();
  return [[e, t].join("-"), [hx, n].join("-"), r, s].join("/");
}
function PT({
  protocol: e,
  version: t,
  relayUrl: n,
  sdkVersion: r,
  auth: s,
  projectId: o,
  useOnCloseEvent: i,
  bundleId: a,
}) {
  const c = n.split("?"),
    u = gx(e, t, r),
    l = {
      auth: s,
      ua: u,
      projectId: o,
      useOnCloseEvent: i || void 0,
      origin: a || void 0,
    },
    f = px(c[1] || "", l);
  return c[0] + "?" + f;
}
function Sr(e, t) {
  return e.filter((n) => t.includes(n)).length === e.length;
}
function TT(e) {
  return Object.fromEntries(e.entries());
}
function DT(e) {
  return new Map(Object.entries(e));
}
function OT(e = Or.FIVE_MINUTES, t) {
  const n = Or.toMiliseconds(e || Or.FIVE_MINUTES);
  let r, s, o;
  return {
    resolve: (i) => {
      o && r && (clearTimeout(o), r(i));
    },
    reject: (i) => {
      o && s && (clearTimeout(o), s(i));
    },
    done: () =>
      new Promise((i, a) => {
        (o = setTimeout(() => {
          a(new Error(t));
        }, n)),
          (r = i),
          (s = a);
      }),
  };
}
function IT(e, t, n) {
  return new Promise(async (r, s) => {
    const o = setTimeout(() => s(new Error(n)), t);
    try {
      const i = await e;
      r(i);
    } catch (i) {
      s(i);
    }
    clearTimeout(o);
  });
}
function w0(e, t) {
  if (typeof t == "string" && t.startsWith(`${e}:`)) return t;
  if (e.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function $T(e) {
  return w0("topic", e);
}
function NT(e) {
  return w0("id", e);
}
function MT(e) {
  const [t, n] = e.split(":"),
    r = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof n == "string") r.topic = n;
  else if (t === "id" && Number.isInteger(Number(n))) r.id = Number(n);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${t}:${n}`
    );
  return r;
}
function UT(e, t) {
  return Or.fromMiliseconds(Date.now() + Or.toMiliseconds(e));
}
function FT(e) {
  return Date.now() >= Or.toMiliseconds(e);
}
function BT(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
function Pc(e = [], t = []) {
  return [...new Set([...e, ...t])];
}
async function LT({ id: e, topic: t, wcDeepLink: n }) {
  try {
    if (!n) return;
    const r = typeof n == "string" ? JSON.parse(n) : n;
    let s = r == null ? void 0 : r.href;
    if (typeof s != "string") return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
      i = ni();
    i === Dt.browser
      ? o.startsWith("https://")
        ? window.open(o, "_blank", "noreferrer noopener")
        : window.open(o, "_self", "noreferrer noopener")
      : i === Dt.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(o));
  } catch (r) {
    console.error(r);
  }
}
async function RT(e, t) {
  try {
    return (await e.getItem(t)) || (Wa() ? localStorage.getItem(t) : void 0);
  } catch (n) {
    console.error(n);
  }
}
const yx = "irn";
function jT(e) {
  return (e == null ? void 0 : e.relay) || { protocol: yx };
}
function HT(e) {
  const t = rx[e];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var wx = Object.defineProperty,
  lh = Object.getOwnPropertySymbols,
  vx = Object.prototype.hasOwnProperty,
  Ex = Object.prototype.propertyIsEnumerable,
  uh = (e, t, n) =>
    t in e
      ? wx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Cx = (e, t) => {
    for (var n in t || (t = {})) vx.call(t, n) && uh(e, n, t[n]);
    if (lh) for (var n of lh(t)) Ex.call(t, n) && uh(e, n, t[n]);
    return e;
  };
function xx(e, t = "-") {
  const n = {},
    r = "relay" + t;
  return (
    Object.keys(e).forEach((s) => {
      if (s.startsWith(r)) {
        const o = s.replace(r, ""),
          i = e[s];
        n[o] = i;
      }
    }),
    n
  );
}
function zT(e) {
  (e = e.includes("wc://") ? e.replace("wc://", "") : e),
    (e = e.includes("wc:") ? e.replace("wc:", "") : e);
  const t = e.indexOf(":"),
    n = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0,
    r = e.substring(0, t),
    s = e.substring(t + 1, n).split("@"),
    o = typeof n < "u" ? e.substring(n) : "",
    i = Uo.parse(o);
  return {
    protocol: r,
    topic: _x(s[0]),
    version: parseInt(s[1], 10),
    symKey: i.symKey,
    relay: xx(i),
  };
}
function _x(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function kx(e, t = "-") {
  const n = "relay",
    r = {};
  return (
    Object.keys(e).forEach((s) => {
      const o = n + t + s;
      e[s] && (r[o] = e[s]);
    }),
    r
  );
}
function WT(e) {
  return (
    `${e.protocol}:${e.topic}@${e.version}?` +
    Uo.stringify(Cx({ symKey: e.symKey }, kx(e.relay)))
  );
}
var Sx = Object.defineProperty,
  Ax = Object.defineProperties,
  Px = Object.getOwnPropertyDescriptors,
  fh = Object.getOwnPropertySymbols,
  Tx = Object.prototype.hasOwnProperty,
  Dx = Object.prototype.propertyIsEnumerable,
  dh = (e, t, n) =>
    t in e
      ? Sx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ox = (e, t) => {
    for (var n in t || (t = {})) Tx.call(t, n) && dh(e, n, t[n]);
    if (fh) for (var n of fh(t)) Dx.call(t, n) && dh(e, n, t[n]);
    return e;
  },
  Ix = (e, t) => Ax(e, Px(t));
function Ps(e) {
  const t = [];
  return (
    e.forEach((n) => {
      const [r, s] = n.split(":");
      t.push(`${r}:${s}`);
    }),
    t
  );
}
function $x(e) {
  const t = [];
  return (
    Object.values(e).forEach((n) => {
      t.push(...Ps(n.accounts));
    }),
    t
  );
}
function Nx(e, t) {
  const n = [];
  return (
    Object.values(e).forEach((r) => {
      Ps(r.accounts).includes(t) && n.push(...r.methods);
    }),
    n
  );
}
function Mx(e, t) {
  const n = [];
  return (
    Object.values(e).forEach((r) => {
      Ps(r.accounts).includes(t) && n.push(...r.events);
    }),
    n
  );
}
function qT(e, t) {
  const n = qx(e, t);
  if (n) throw new Error(n.message);
  const r = {};
  for (const [s, o] of Object.entries(e))
    r[s] = {
      methods: o.methods,
      events: o.events,
      chains: o.accounts.map((i) => `${i.split(":")[0]}:${i.split(":")[1]}`),
    };
  return r;
}
function v0(e) {
  return e.includes(":");
}
function Ux(e) {
  return v0(e) ? e.split(":")[0] : e;
}
function E0(e) {
  var t, n, r;
  const s = {};
  if (!af(e)) return s;
  for (const [o, i] of Object.entries(e)) {
    const a = v0(o) ? [o] : i.chains,
      c = i.methods || [],
      u = i.events || [],
      l = Ux(o);
    s[l] = Ix(Ox({}, s[l]), {
      chains: Pc(a, (t = s[l]) == null ? void 0 : t.chains),
      methods: Pc(c, (n = s[l]) == null ? void 0 : n.methods),
      events: Pc(u, (r = s[l]) == null ? void 0 : r.events),
    });
  }
  return s;
}
const Fx = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  Bx = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function Jn(e, t) {
  const { message: n, code: r } = Bx[e];
  return { message: t ? `${n} ${t}` : n, code: r };
}
function ps(e, t) {
  const { message: n, code: r } = Fx[e];
  return { message: t ? `${n} ${t}` : n, code: r };
}
function qa(e, t) {
  return !!Array.isArray(e);
}
function af(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function is(e) {
  return typeof e > "u";
}
function Ht(e, t) {
  return t && is(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function cf(e, t) {
  return typeof e == "number" && !isNaN(e);
}
function GT(e, t) {
  const { requiredNamespaces: n } = t,
    r = Object.keys(e.namespaces),
    s = Object.keys(n);
  let o = !0;
  return Sr(s, r)
    ? (r.forEach((i) => {
        const { accounts: a, methods: c, events: u } = e.namespaces[i],
          l = Ps(a),
          f = n[i];
        (!Sr(p0(i, f), l) || !Sr(f.methods, c) || !Sr(f.events, u)) && (o = !1);
      }),
      o)
    : !1;
}
function Ki(e) {
  return Ht(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Lx(e) {
  if (Ht(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const n = t[0] + ":" + t[1];
      return !!t[2] && Ki(n);
    }
  }
  return !1;
}
function VT(e) {
  if (Ht(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function KT(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function XT(e) {
  return e == null ? void 0 : e.topic;
}
function YT(e, t) {
  let n = null;
  return (
    Ht(e == null ? void 0 : e.publicKey, !1) ||
      (n = Jn(
        "MISSING_OR_INVALID",
        `${t} controller public key should be a string`
      )),
    n
  );
}
function hh(e) {
  let t = !0;
  return qa(e) ? e.length && (t = e.every((n) => Ht(n, !1))) : (t = !1), t;
}
function Rx(e, t, n) {
  let r = null;
  return (
    qa(t) && t.length
      ? t.forEach((s) => {
          r ||
            Ki(s) ||
            (r = ps(
              "UNSUPPORTED_CHAINS",
              `${n}, chain ${s} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Ki(e) ||
        (r = ps(
          "UNSUPPORTED_CHAINS",
          `${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    r
  );
}
function jx(e, t, n) {
  let r = null;
  return (
    Object.entries(e).forEach(([s, o]) => {
      if (r) return;
      const i = Rx(s, p0(s, o), `${t} ${n}`);
      i && (r = i);
    }),
    r
  );
}
function Hx(e, t) {
  let n = null;
  return (
    qa(e)
      ? e.forEach((r) => {
          n ||
            Lx(r) ||
            (n = ps(
              "UNSUPPORTED_ACCOUNTS",
              `${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (n = ps(
          "UNSUPPORTED_ACCOUNTS",
          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    n
  );
}
function zx(e, t) {
  let n = null;
  return (
    Object.values(e).forEach((r) => {
      if (n) return;
      const s = Hx(r == null ? void 0 : r.accounts, `${t} namespace`);
      s && (n = s);
    }),
    n
  );
}
function Wx(e, t) {
  let n = null;
  return (
    hh(e == null ? void 0 : e.methods)
      ? hh(e == null ? void 0 : e.events) ||
        (n = ps(
          "UNSUPPORTED_EVENTS",
          `${t}, events should be an array of strings or empty array for no events`
        ))
      : (n = ps(
          "UNSUPPORTED_METHODS",
          `${t}, methods should be an array of strings or empty array for no methods`
        )),
    n
  );
}
function C0(e, t) {
  let n = null;
  return (
    Object.values(e).forEach((r) => {
      if (n) return;
      const s = Wx(r, `${t}, namespace`);
      s && (n = s);
    }),
    n
  );
}
function ZT(e, t, n) {
  let r = null;
  if (e && af(e)) {
    const s = C0(e, t);
    s && (r = s);
    const o = jx(e, t, n);
    o && (r = o);
  } else
    r = Jn("MISSING_OR_INVALID", `${t}, ${n} should be an object with data`);
  return r;
}
function qx(e, t) {
  let n = null;
  if (e && af(e)) {
    const r = C0(e, t);
    r && (n = r);
    const s = zx(e, t);
    s && (n = s);
  } else
    n = Jn(
      "MISSING_OR_INVALID",
      `${t}, namespaces should be an object with data`
    );
  return n;
}
function Gx(e) {
  return Ht(e.protocol, !0);
}
function JT(e, t) {
  let n = !1;
  return (
    e
      ? e &&
        qa(e) &&
        e.length &&
        e.forEach((r) => {
          n = Gx(r);
        })
      : (n = !0),
    n
  );
}
function QT(e) {
  return typeof e == "number";
}
function e9(e) {
  return typeof e < "u" && typeof e !== null;
}
function t9(e) {
  return !(
    !e ||
    typeof e != "object" ||
    !e.code ||
    !cf(e.code) ||
    !e.message ||
    !Ht(e.message, !1)
  );
}
function n9(e) {
  return !(is(e) || !Ht(e.method, !1));
}
function r9(e) {
  return !(
    is(e) ||
    (is(e.result) && is(e.error)) ||
    !cf(e.id) ||
    !Ht(e.jsonrpc, !1)
  );
}
function s9(e) {
  return !(is(e) || !Ht(e.name, !1));
}
function o9(e, t) {
  return !(!Ki(t) || !$x(e).includes(t));
}
function i9(e, t, n) {
  return Ht(n, !1) ? Nx(e, t).includes(n) : !1;
}
function a9(e, t, n) {
  return Ht(n, !1) ? Mx(e, t).includes(n) : !1;
}
function c9(e, t, n) {
  let r = null;
  const s = Vx(e),
    o = Kx(t),
    i = Object.keys(s),
    a = Object.keys(o),
    c = ph(Object.keys(e)),
    u = ph(Object.keys(t)),
    l = c.filter((f) => !u.includes(f));
  return (
    l.length &&
      (r = Jn(
        "NON_CONFORMING_NAMESPACES",
        `${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`
      )),
    Sr(i, a) ||
      (r = Jn(
        "NON_CONFORMING_NAMESPACES",
        `${n} namespaces chains don't satisfy required namespaces.
      Required: ${i.toString()}
      Approved: ${a.toString()}`
      )),
    Object.keys(t).forEach((f) => {
      if (!f.includes(":") || r) return;
      const h = Ps(t[f].accounts);
      h.includes(f) ||
        (r = Jn(
          "NON_CONFORMING_NAMESPACES",
          `${n} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${h.toString()}`
        ));
    }),
    i.forEach((f) => {
      r ||
        (Sr(s[f].methods, o[f].methods)
          ? Sr(s[f].events, o[f].events) ||
            (r = Jn(
              "NON_CONFORMING_NAMESPACES",
              `${n} namespaces events don't satisfy namespace events for ${f}`
            ))
          : (r = Jn(
              "NON_CONFORMING_NAMESPACES",
              `${n} namespaces methods don't satisfy namespace methods for ${f}`
            )));
    }),
    r
  );
}
function Vx(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      var r;
      n.includes(":")
        ? (t[n] = e[n])
        : (r = e[n].chains) == null ||
          r.forEach((s) => {
            t[s] = { methods: e[n].methods, events: e[n].events };
          });
    }),
    t
  );
}
function ph(e) {
  return [...new Set(e.map((t) => (t.includes(":") ? t.split(":")[0] : t)))];
}
function Kx(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      if (n.includes(":")) t[n] = e[n];
      else {
        const r = Ps(e[n].accounts);
        r == null ||
          r.forEach((s) => {
            t[s] = {
              accounts: e[n].accounts.filter((o) => o.includes(`${s}:`)),
              methods: e[n].methods,
              events: e[n].events,
            };
          });
      }
    }),
    t
  );
}
function l9(e, t) {
  return cf(e) && e <= t.max && e >= t.min;
}
function u9() {
  const e = ni();
  return new Promise((t) => {
    switch (e) {
      case Dt.browser:
        t(Xx());
        break;
      case Dt.reactNative:
        t(Yx());
        break;
      case Dt.node:
        t(Zx());
        break;
      default:
        t(!0);
    }
  });
}
function Xx() {
  return Wa() && (navigator == null ? void 0 : navigator.onLine);
}
async function Yx() {
  if (ti() && typeof global < "u" && global != null && global.NetInfo) {
    const e = await (global == null ? void 0 : global.NetInfo.fetch());
    return e == null ? void 0 : e.isConnected;
  }
  return !0;
}
function Zx() {
  return !0;
}
function f9(e) {
  switch (ni()) {
    case Dt.browser:
      Jx(e);
      break;
    case Dt.reactNative:
      Qx(e);
      break;
  }
}
function Jx(e) {
  !ti() &&
    Wa() &&
    (window.addEventListener("online", () => e(!0)),
    window.addEventListener("offline", () => e(!1)));
}
function Qx(e) {
  ti() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((t) =>
        e(t == null ? void 0 : t.isConnected)
      ));
}
const Tc = {};
class d9 {
  static get(t) {
    return Tc[t];
  }
  static set(t, n) {
    Tc[t] = n;
  }
  static delete(t) {
    delete Tc[t];
  }
}
var x0 = "eip155",
  e5 = "store",
  _0 = "requestedChains",
  Rl = "wallet_addEthereumChain",
  He,
  no,
  Si,
  jl,
  lf,
  k0,
  Ai,
  Hl,
  zl,
  S0,
  Xi,
  uf,
  Vr,
  qs,
  Yi,
  ff,
  Zi,
  df,
  Ji,
  hf,
  t5 = class extends Nb {
    constructor(e) {
      super({ ...e, options: { isNewChainsStale: !0, ...e.options } }),
        Nt(this, Si),
        Nt(this, lf),
        Nt(this, Ai),
        Nt(this, zl),
        Nt(this, Xi),
        Nt(this, Vr),
        Nt(this, Yi),
        Nt(this, Zi),
        Nt(this, Ji),
        (this.id = "walletConnect"),
        (this.name = "WalletConnect"),
        (this.ready = !0),
        Nt(this, He, void 0),
        Nt(this, no, void 0),
        (this.onAccountsChanged = (t) => {
          t.length === 0
            ? this.emit("disconnect")
            : this.emit("change", { account: nr(t[0]) });
        }),
        (this.onChainChanged = (t) => {
          const n = Number(t),
            r = this.isChainUnsupported(n);
          this.emit("change", { chain: { id: n, unsupported: r } });
        }),
        (this.onDisconnect = () => {
          et(this, Vr, qs).call(this, []), this.emit("disconnect");
        }),
        (this.onDisplayUri = (t) => {
          this.emit("message", { type: "display_uri", data: t });
        }),
        (this.onConnect = () => {
          this.emit("connect", {});
        }),
        et(this, Si, jl).call(this);
    }
    async connect({ chainId: e, pairingTopic: t } = {}) {
      var n, r, s, o, i;
      try {
        let a = e;
        if (!a) {
          const m = (n = this.storage) == null ? void 0 : n.getItem(e5),
            g =
              (o =
                (s =
                  (r = m == null ? void 0 : m.state) == null
                    ? void 0
                    : r.data) == null
                  ? void 0
                  : s.chain) == null
                ? void 0
                : o.id;
          g && !this.isChainUnsupported(g)
            ? (a = g)
            : (a = (i = this.chains[0]) == null ? void 0 : i.id);
        }
        if (!a) throw new Error("No chains found on connector.");
        const c = await this.getProvider();
        et(this, zl, S0).call(this);
        const u = et(this, Ai, Hl).call(this);
        if ((c.session && u && (await c.disconnect()), !c.session || u)) {
          const m = this.chains.filter((g) => g.id !== a).map((g) => g.id);
          this.emit("message", { type: "connecting" }),
            await c.connect({ pairingTopic: t, optionalChains: [a, ...m] }),
            et(this, Vr, qs).call(
              this,
              this.chains.map(({ id: g }) => g)
            );
        }
        const l = await c.enable(),
          f = nr(l[0]),
          h = await this.getChainId(),
          p = this.isChainUnsupported(h);
        return { account: f, chain: { id: h, unsupported: p } };
      } catch (a) {
        throw /user rejected/i.test(a == null ? void 0 : a.message)
          ? new Ut(a)
          : a;
      }
    }
    async disconnect() {
      const e = await this.getProvider();
      try {
        await e.disconnect();
      } catch (t) {
        if (!/No matching key/i.test(t.message)) throw t;
      } finally {
        et(this, Xi, uf).call(this), et(this, Vr, qs).call(this, []);
      }
    }
    async getAccount() {
      const { accounts: e } = await this.getProvider();
      return nr(e[0]);
    }
    async getChainId() {
      const { chainId: e } = await this.getProvider();
      return e;
    }
    async getProvider({ chainId: e } = {}) {
      return (
        je(this, He) || (await et(this, Si, jl).call(this)),
        e && (await this.switchChain(e)),
        je(this, He)
      );
    }
    async getWalletClient({ chainId: e } = {}) {
      const [t, n] = await Promise.all([
          this.getProvider({ chainId: e }),
          this.getAccount(),
        ]),
        r = this.chains.find((s) => s.id === e);
      if (!t) throw new Error("provider is required.");
      return Db({ account: n, chain: r, transport: db(t) });
    }
    async isAuthorized() {
      try {
        const [e, t] = await Promise.all([
            this.getAccount(),
            this.getProvider(),
          ]),
          n = et(this, Ai, Hl).call(this);
        if (!e) return !1;
        if (n && t.session) {
          try {
            await t.disconnect();
          } catch {}
          return !1;
        }
        return !0;
      } catch {
        return !1;
      }
    }
    async switchChain(e) {
      var n, r;
      const t = this.chains.find((s) => s.id === e);
      if (!t) throw new ar(new Error("chain not found on connector."));
      try {
        const s = await this.getProvider(),
          o = et(this, Zi, df).call(this),
          i = et(this, Ji, hf).call(this);
        if (!o.includes(e) && i.includes(Rl)) {
          await s.request({
            method: Rl,
            params: [
              {
                chainId: ye(t.id),
                blockExplorerUrls: [
                  (r = (n = t.blockExplorers) == null ? void 0 : n.default) ==
                  null
                    ? void 0
                    : r.url,
                ],
                chainName: t.name,
                nativeCurrency: t.nativeCurrency,
                rpcUrls: [...t.rpcUrls.default.http],
              },
            ],
          });
          const c = et(this, Yi, ff).call(this);
          c.push(e), et(this, Vr, qs).call(this, c);
        }
        return (
          await s.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: ye(e) }],
          }),
          t
        );
      } catch (s) {
        const o = typeof s == "string" ? s : s == null ? void 0 : s.message;
        throw /user rejected request/i.test(o) ? new Ut(s) : new ar(s);
      }
    }
  };
He = new WeakMap();
no = new WeakMap();
Si = new WeakSet();
jl = async function () {
  return (
    !je(this, no) &&
      typeof window < "u" &&
      Xu(this, no, et(this, lf, k0).call(this)),
    je(this, no)
  );
};
lf = new WeakSet();
k0 = async function () {
  const { EthereumProvider: e } = await Wt(async () => {
      const { EthereumProvider: n } = await import("./index.es.BhRM_Kz1.js");
      return { EthereumProvider: n };
    }, []),
    t = this.chains.map(({ id: n }) => n);
  if (t.length) {
    const {
      projectId: n,
      showQrModal: r = !0,
      qrModalOptions: s,
      metadata: o,
      relayUrl: i,
    } = this.options;
    Xu(
      this,
      He,
      await e.init({
        showQrModal: r,
        qrModalOptions: s,
        projectId: n,
        optionalChains: t,
        rpcMap: Object.fromEntries(
          this.chains.map((a) => [a.id, a.rpcUrls.default.http[0]])
        ),
        metadata: o,
        relayUrl: i,
      })
    );
  }
};
Ai = new WeakSet();
Hl = function () {
  if (
    et(this, Ji, hf).call(this).includes(Rl) ||
    !this.options.isNewChainsStale
  )
    return !1;
  const t = et(this, Yi, ff).call(this),
    n = this.chains.map(({ id: s }) => s),
    r = et(this, Zi, df).call(this);
  return r.length && !r.some((s) => n.includes(s))
    ? !1
    : !n.every((s) => t.includes(s));
};
zl = new WeakSet();
S0 = function () {
  je(this, He) &&
    (et(this, Xi, uf).call(this),
    je(this, He).on("accountsChanged", this.onAccountsChanged),
    je(this, He).on("chainChanged", this.onChainChanged),
    je(this, He).on("disconnect", this.onDisconnect),
    je(this, He).on("session_delete", this.onDisconnect),
    je(this, He).on("display_uri", this.onDisplayUri),
    je(this, He).on("connect", this.onConnect));
};
Xi = new WeakSet();
uf = function () {
  je(this, He) &&
    (je(this, He).removeListener("accountsChanged", this.onAccountsChanged),
    je(this, He).removeListener("chainChanged", this.onChainChanged),
    je(this, He).removeListener("disconnect", this.onDisconnect),
    je(this, He).removeListener("session_delete", this.onDisconnect),
    je(this, He).removeListener("display_uri", this.onDisplayUri),
    je(this, He).removeListener("connect", this.onConnect));
};
Vr = new WeakSet();
qs = function (e) {
  var t;
  (t = this.storage) == null || t.setItem(_0, e);
};
Yi = new WeakSet();
ff = function () {
  var e;
  return ((e = this.storage) == null ? void 0 : e.getItem(_0)) ?? [];
};
Zi = new WeakSet();
df = function () {
  var r, s, o;
  if (!je(this, He)) return [];
  const e = (r = je(this, He).session) == null ? void 0 : r.namespaces;
  return e
    ? ((o = (s = E0(e)[x0]) == null ? void 0 : s.chains) == null
        ? void 0
        : o.map((i) => parseInt(i.split(":")[1] || ""))) ?? []
    : [];
};
Ji = new WeakSet();
hf = function () {
  var r, s;
  if (!je(this, He)) return [];
  const e = (r = je(this, He).session) == null ? void 0 : r.namespaces;
  return e ? ((s = E0(e)[x0]) == null ? void 0 : s.methods) ?? [] : [];
};
function n5({ rpc: e }) {
  return function (t) {
    const n = e(t);
    return !n || n.http === ""
      ? null
      : {
          chain: {
            ...t,
            rpcUrls: { ...t.rpcUrls, default: { http: [n.http] } },
          },
          rpcUrls: {
            http: [n.http],
            webSocket: n.webSocket ? [n.webSocket] : void 0,
          },
        };
  };
}
const r5 = "wallet_addEthereumChain";
let s5 = class {
  constructor(t, n) {
    (this.wagmi = {}),
      (this.chains = []),
      (this.namespace = "eip155"),
      (this.disconnect = Bb),
      (this.getAccount = zb),
      (this.watchAccount = qb),
      (this.fetchBalance = a6),
      (this.getNetwork = Wb),
      (this.watchNetwork = Gb),
      (this.switchNetwork = l6),
      (this.fetchEnsName = f6),
      (this.fetchEnsAvatar = u6),
      (this.wagmi = t),
      (this.chains = n);
  }
  getWalletConnectConnector() {
    const t = this.wagmi.connectors.find((n) => n.id === "walletConnect");
    if (!t) throw new Error("WalletConnectConnector is required");
    return t;
  }
  async connectWalletConnectProvider(t, n) {
    return (
      await t.getProvider(),
      new Promise((r) => {
        t.once("message", (s) => {
          s.type === "display_uri" && (n(s.data), r());
        });
      })
    );
  }
  getConnectorById(t) {
    const n = this.wagmi.connectors.find((r) => r.id === t);
    if (!n) throw new Error(`Connector for id ${t} was not found`);
    return n;
  }
  getConnectors() {
    return this.wagmi.connectors.filter((t) => !t.id.includes("walletConnect"));
  }
  async connectWalletConnect(t, n) {
    const r = this.getWalletConnectConnector(),
      s = { connector: r };
    return (
      n && (s.chainId = n),
      Promise.all([Fd(s), this.connectWalletConnectProvider(r, t)])
    );
  }
  async connectConnector(t, n) {
    const r = { connector: this.getConnectorById(t) };
    return n && (r.chainId = n), await Fd(r);
  }
  isInjectedProviderInstalled() {
    return typeof window.ethereum < "u";
  }
  safeCheckInjectedProvider(t) {
    var n;
    try {
      const r = String(t);
      return !!((n = window.ethereum) != null && n[r]);
    } catch (r) {
      return console.error(r), !1;
    }
  }
  async getConnectedChainIds() {
    var t, n, r;
    const s =
        (n =
          (t = (await this.getWalletConnectConnector().getProvider()).signer) ==
          null
            ? void 0
            : t.session) == null
          ? void 0
          : n.namespaces,
      o =
        (r = s == null ? void 0 : s[this.namespace]) == null
          ? void 0
          : r.methods;
    if (o != null && o.includes(r5)) return "ALL";
    if (s) {
      const i = [];
      return (
        Object.keys(s).forEach((a) => {
          a.includes(this.namespace) && i.push(...s[a].accounts);
        }),
        i == null ? void 0 : i.map((a) => a.split(":")[1])
      );
    }
    return "ALL";
  }
};
const o5 = "eip155",
  i5 = "https://rpc.walletconnect.com";
function a5({ projectId: e }) {
  return n5({
    rpc: (t) => {
      var n;
      return [
        1, 3, 4, 5, 10, 42, 56, 69, 97, 100, 137, 280, 324, 420, 42161, 42220,
        43114, 80001, 421611, 421613, 1313161554, 1313161555,
      ].includes(t.id)
        ? { http: `${i5}/v1/?chainId=${o5}:${t.id}&projectId=${e}` }
        : {
            http: t.rpcUrls.default.http[0],
            webSocket:
              (n = t.rpcUrls.default.webSocket) == null ? void 0 : n[0],
          };
    },
  });
}
function c5({ chains: e, projectId: t }) {
  return [
    new t5({ chains: e, options: { projectId: t, showQrModal: !1 } }),
    new Mb({ chains: e, options: { shimDisconnect: !0 } }),
  ];
}
const l5 = Symbol(),
  mh = Object.getPrototypeOf,
  Wl = new WeakMap(),
  u5 = (e) =>
    e &&
    (Wl.has(e)
      ? Wl.get(e)
      : mh(e) === Object.prototype || mh(e) === Array.prototype),
  f5 = (e) => (u5(e) && e[l5]) || null,
  bh = (e, t = !0) => {
    Wl.set(e, t);
  },
  Qi = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  Dc = (e) => typeof e == "object" && e !== null,
  Kn = new WeakMap(),
  hi = new WeakSet(),
  d5 = (
    e = Object.is,
    t = (l, f) => new Proxy(l, f),
    n = (l) =>
      Dc(l) &&
      !hi.has(l) &&
      (Array.isArray(l) || !(Symbol.iterator in l)) &&
      !(l instanceof WeakMap) &&
      !(l instanceof WeakSet) &&
      !(l instanceof Error) &&
      !(l instanceof Number) &&
      !(l instanceof Date) &&
      !(l instanceof String) &&
      !(l instanceof RegExp) &&
      !(l instanceof ArrayBuffer),
    r = (l) => l.configurable && l.enumerable && l.writable,
    s = (l) => {
      switch (l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw l.reason;
        default:
          throw l;
      }
    },
    o = new WeakMap(),
    i = (l, f, h = s) => {
      const p = o.get(l);
      if ((p == null ? void 0 : p[0]) === f) return p[1];
      const m = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
      return (
        bh(m, !0),
        o.set(l, [f, m]),
        Reflect.ownKeys(l).forEach((g) => {
          if (Object.getOwnPropertyDescriptor(m, g)) return;
          const y = Reflect.get(l, g),
            k = { value: y, enumerable: !0, configurable: !0 };
          if (hi.has(y)) bh(y, !1);
          else if (y instanceof Promise) delete k.value, (k.get = () => h(y));
          else if (Kn.has(y)) {
            const [b, E] = Kn.get(y);
            k.value = i(b, E(), h);
          }
          Object.defineProperty(m, g, k);
        }),
        Object.preventExtensions(m)
      );
    },
    a = new WeakMap(),
    c = [1, 1],
    u = (l) => {
      if (!Dc(l)) throw new Error("object required");
      const f = a.get(l);
      if (f) return f;
      let h = c[0];
      const p = new Set(),
        m = (I, T = ++c[0]) => {
          h !== T && ((h = T), p.forEach((U) => U(I, T)));
        };
      let g = c[1];
      const y = (I = ++c[1]) => (
          g !== I &&
            !p.size &&
            ((g = I),
            b.forEach(([T]) => {
              const U = T[1](I);
              U > h && (h = U);
            })),
          h
        ),
        k = (I) => (T, U) => {
          const F = [...T];
          (F[1] = [I, ...F[1]]), m(F, U);
        },
        b = new Map(),
        E = (I, T) => {
          if ((Qi ? "production" : void 0) !== "production" && b.has(I))
            throw new Error("prop listener already exists");
          if (p.size) {
            const U = T[3](k(I));
            b.set(I, [T, U]);
          } else b.set(I, [T]);
        },
        v = (I) => {
          var T;
          const U = b.get(I);
          U && (b.delete(I), (T = U[1]) == null || T.call(U));
        },
        w = (I) => (
          p.add(I),
          p.size === 1 &&
            b.forEach(([U, F], Z) => {
              if ((Qi ? "production" : void 0) !== "production" && F)
                throw new Error("remove already exists");
              const G = U[3](k(Z));
              b.set(Z, [U, G]);
            }),
          () => {
            p.delete(I),
              p.size === 0 &&
                b.forEach(([U, F], Z) => {
                  F && (F(), b.set(Z, [U]));
                });
          }
        ),
        x = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)),
        d = (I, T, U, F, Z) => {
          if (I && (e(T, F) || (a.has(F) && e(T, a.get(F))))) return;
          v(U), Dc(F) && (F = f5(F) || F);
          let G = F;
          if (F instanceof Promise)
            F.then((N) => {
              (F.status = "fulfilled"), (F.value = N), m(["resolve", [U], N]);
            }).catch((N) => {
              (F.status = "rejected"), (F.reason = N), m(["reject", [U], N]);
            });
          else {
            !Kn.has(F) && n(F) && (G = u(F));
            const N = !hi.has(G) && Kn.get(G);
            N && E(U, N);
          }
          Z(G), m(["set", [U], F, T]);
        },
        A = t(x, {
          deleteProperty(I, T) {
            const U = Reflect.get(I, T);
            v(T);
            const F = Reflect.deleteProperty(I, T);
            return F && m(["delete", [T], U]), F;
          },
          set(I, T, U, F) {
            const Z = Reflect.has(I, T),
              G = Reflect.get(I, T, F);
            return (
              d(Z, G, T, U, (N) => {
                Reflect.set(I, T, N, F);
              }),
              !0
            );
          },
          defineProperty(I, T, U) {
            if (r(U)) {
              const F = Reflect.getOwnPropertyDescriptor(I, T);
              if (!F || r(F))
                return (
                  d(
                    !!F && "value" in F,
                    F == null ? void 0 : F.value,
                    T,
                    U.value,
                    (Z) => {
                      Reflect.defineProperty(I, T, { ...U, value: Z });
                    }
                  ),
                  !0
                );
            }
            return Reflect.defineProperty(I, T, U);
          },
        });
      a.set(l, A);
      const $ = [x, y, i, w];
      return (
        Kn.set(A, $),
        Reflect.ownKeys(l).forEach((I) => {
          const T = Object.getOwnPropertyDescriptor(l, I);
          "value" in T && ((A[I] = l[I]), delete T.value, delete T.writable),
            Object.defineProperty(x, I, T);
        }),
        A
      );
    }
  ) => [u, Kn, hi, e, t, n, r, s, o, i, a, c],
  [h5] = d5();
function gn(e = {}) {
  return h5(e);
}
function Bn(e, t, n) {
  const r = Kn.get(e);
  (Qi ? "production" : void 0) !== "production" &&
    !r &&
    console.warn("Please use proxy object");
  let s;
  const o = [],
    i = r[3];
  let a = !1;
  const u = i((l) => {
    o.push(l),
      s ||
        (s = Promise.resolve().then(() => {
          (s = void 0), a && t(o.splice(0));
        }));
  });
  return (
    (a = !0),
    () => {
      (a = !1), u();
    }
  );
}
function p5(e, t) {
  const n = Kn.get(e);
  (Qi ? "production" : void 0) !== "production" &&
    !n &&
    console.warn("Please use proxy object");
  const [r, s, o] = n;
  return o(r, s(), t);
}
const Qe = gn({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0,
  }),
  Yr = {
    state: Qe,
    subscribe(e) {
      return Bn(Qe, () => e(Qe));
    },
    push(e, t) {
      e !== Qe.view && ((Qe.view = e), t && (Qe.data = t), Qe.history.push(e));
    },
    reset(e) {
      (Qe.view = e), (Qe.history = [e]);
    },
    replace(e) {
      Qe.history.length > 1 &&
        ((Qe.history[Qe.history.length - 1] = e), (Qe.view = e));
    },
    goBack() {
      if (Qe.history.length > 1) {
        Qe.history.pop();
        const [e] = Qe.history.slice(-1);
        Qe.view = e;
      }
    },
    setData(e) {
      Qe.data = e;
    },
  },
  tt = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    W3M_VERSION: "W3M_VERSION",
    W3M_PREFER_INJECTED_URL_FLAG: "w3mPreferInjected",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile() {
      return typeof window < "u"
        ? !!(
            window.matchMedia("(pointer:coarse)").matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
              navigator.userAgent
            )
          )
        : !1;
    },
    isAndroid() {
      return (
        tt.isMobile() && navigator.userAgent.toLowerCase().includes("android")
      );
    },
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return tt.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray(e) {
      return Array.isArray(e) && e.length > 0;
    },
    formatNativeUrl(e, t, n) {
      if (tt.isHttpUrl(e)) return this.formatUniversalUrl(e, t, n);
      let r = e;
      r.includes("://") ||
        ((r = e.replaceAll("/", "").replaceAll(":", "")), (r = `${r}://`)),
        r.endsWith("/") || (r = `${r}/`),
        this.setWalletConnectDeepLink(r, n);
      const s = encodeURIComponent(t);
      return `${r}wc?uri=${s}`;
    },
    formatUniversalUrl(e, t, n) {
      if (!tt.isHttpUrl(e)) return this.formatNativeUrl(e, t, n);
      let r = e;
      r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, n);
      const s = encodeURIComponent(t);
      return `${r}wc?uri=${s}`;
    },
    async wait(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    openHref(e, t) {
      window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(
          tt.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: e, name: t })
        );
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(
          tt.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: t, name: "Android" })
        );
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(tt.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setWeb3ModalVersionInStorage() {
      try {
        typeof localStorage < "u" &&
          localStorage.setItem(tt.W3M_VERSION, "2.7.1");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = (e = Yr.state.data) == null ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    },
    getSwitchNetworkRouterData() {
      var e;
      const t = (e = Yr.state.data) == null ? void 0 : e.SwitchNetwork;
      if (!t) throw new Error('Missing "SwitchNetwork" view data');
      return t;
    },
    isPreferInjectedFlag() {
      return typeof location < "u"
        ? new URLSearchParams(location.search).has(
            tt.W3M_PREFER_INJECTED_URL_FLAG
          )
        : !1;
    },
  };
let Oc;
const cn = {
    ethereumClient: void 0,
    setEthereumClient(e) {
      Oc = e;
    },
    client() {
      if (Oc) return Oc;
      throw new Error("ClientCtrl has no client set");
    },
  },
  m5 =
    typeof location < "u" &&
    (location.hostname.includes("localhost") ||
      location.protocol.includes("https")),
  lt = gn({
    enabled: m5,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0,
  }),
  A0 = {
    state: lt,
    subscribe(e) {
      return Bn(lt.events, () => e(p5(lt.events[lt.events.length - 1])));
    },
    initialize() {
      lt.enabled &&
        typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" &&
        (lt.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      lt.connectedWalletId = e;
    },
    click(e) {
      if (lt.enabled) {
        const t = {
          type: "CLICK",
          name: e.name,
          userSessionId: lt.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        lt.events.push(t);
      }
    },
    track(e) {
      if (lt.enabled) {
        const t = {
          type: "TRACK",
          name: e.name,
          userSessionId: lt.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        lt.events.push(t);
      }
    },
    view(e) {
      if (lt.enabled) {
        const t = {
          type: "VIEW",
          name: e.name,
          userSessionId: lt.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        lt.events.push(t);
      }
    },
  },
  It = gn({
    selectedChain: void 0,
    chains: void 0,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1,
    isPreferInjected: !1,
  }),
  ln = {
    state: It,
    subscribe(e) {
      return Bn(It, () => e(It));
    },
    setChains(e) {
      It.chains = e;
    },
    getSelectedChain() {
      const e = cn.client().getNetwork().chain;
      return e && (It.selectedChain = e), It.selectedChain;
    },
    setSelectedChain(e) {
      It.selectedChain = e;
    },
    setIsCustomDesktop(e) {
      It.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      It.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      It.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      It.isUiLoaded = e;
    },
    setIsPreferInjected(e) {
      It.isPreferInjected = e;
    },
  },
  pi = gn({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chainImages: void 0,
    tokenImages: void 0,
    tokenContracts: void 0,
    enableNetworkView: !1,
    enableAccountView: !0,
    enableExplorer: !0,
    defaultChain: void 0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0,
  }),
  Nn = {
    state: pi,
    subscribe(e) {
      return Bn(pi, () => e(pi));
    },
    setConfig(e) {
      var t, n;
      A0.initialize(),
        ln.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)),
        ln.setIsCustomDesktop(!!((n = e.desktopWallets) != null && n.length)),
        ln.setChains(cn.client().chains),
        ln.setIsPreferInjected(
          cn.client().isInjectedProviderInstalled() && tt.isPreferInjectedFlag()
        ),
        e.defaultChain && ln.setSelectedChain(e.defaultChain),
        tt.setWeb3ModalVersionInStorage(),
        Object.assign(pi, e);
    },
  },
  b5 = "eip155",
  g5 = "https://rpc.walletconnect.com",
  y5 = {
    async getIdentity(e, t) {
      const { projectId: n } = Nn.state,
        r = `${b5}:${t}`,
        s = `${g5}/v1/identity/${e}?chainId=${r}&projectId=${n}`;
      return (await fetch(s)).json();
    },
  },
  Ne = gn({
    address: void 0,
    profileName: void 0,
    profileAvatar: void 0,
    profileLoading: !1,
    balanceLoading: !1,
    balance: void 0,
    isConnected: !1,
  }),
  w5 = {
    state: Ne,
    subscribe(e) {
      return Bn(Ne, () => e(Ne));
    },
    getAccount() {
      const e = cn.client().getAccount();
      (Ne.address = e.address), (Ne.isConnected = e.isConnected);
    },
    async fetchProfile(e, t) {
      var n;
      try {
        (Ne.profileLoading = !0),
          (Ne.profileName = null),
          (Ne.profileAvatar = null);
        const r = t ?? Ne.address,
          s = 1,
          o =
            (n = ln.state.chains) == null ? void 0 : n.find((i) => i.id === s);
        if (r && o) {
          try {
            const i = await y5.getIdentity(r, s);
            (Ne.profileName = i.name), (Ne.profileAvatar = i.avatar);
          } catch {
            const i = await cn
              .client()
              .fetchEnsName({ address: r, chainId: s });
            if (((Ne.profileName = i), i)) {
              const a = await cn
                .client()
                .fetchEnsAvatar({ name: i, chainId: s });
              Ne.profileAvatar = a;
            }
          }
          Ne.profileAvatar && (await e(Ne.profileAvatar));
        }
      } finally {
        Ne.profileLoading = !1;
      }
    },
    async fetchBalance(e) {
      try {
        const { chain: t } = cn.client().getNetwork(),
          { tokenContracts: n } = Nn.state;
        let r;
        t && n && (r = n[t.id]), (Ne.balanceLoading = !0);
        const s = e ?? Ne.address;
        if (s) {
          const o = await cn.client().fetchBalance({ address: s, token: r });
          Ne.balance = { amount: o.formatted, symbol: o.symbol };
        }
      } finally {
        Ne.balanceLoading = !1;
      }
    },
    setAddress(e) {
      Ne.address = e;
    },
    setIsConnected(e) {
      Ne.isConnected = e;
    },
    resetBalance() {
      Ne.balance = void 0;
    },
    resetAccount() {
      (Ne.address = void 0),
        (Ne.isConnected = !1),
        (Ne.profileName = void 0),
        (Ne.profileAvatar = void 0),
        (Ne.balance = void 0);
    },
  };
var v5 = Object.defineProperty,
  gh = Object.getOwnPropertySymbols,
  E5 = Object.prototype.hasOwnProperty,
  C5 = Object.prototype.propertyIsEnumerable,
  yh = (e, t, n) =>
    t in e
      ? v5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  x5 = (e, t) => {
    for (var n in t || (t = {})) E5.call(t, n) && yh(e, n, t[n]);
    if (gh) for (var n of gh(t)) C5.call(t, n) && yh(e, n, t[n]);
    return e;
  };
const ql = "https://explorer-api.walletconnect.com",
  Gl = "w3m",
  Vl = "js-2.7.1";
async function mi(e, t) {
  const n = x5({ sdkType: Gl, sdkVersion: Vl }, t),
    r = new URL(e, ql);
  return (
    r.searchParams.append("projectId", Nn.state.projectId),
    Object.entries(n).forEach(([s, o]) => {
      o && r.searchParams.append(s, String(o));
    }),
    (await fetch(r)).json()
  );
}
const Rn = {
  async getDesktopListings(e) {
    return mi("/w3m/v1/getDesktopListings", e);
  },
  async getMobileListings(e) {
    return mi("/w3m/v1/getMobileListings", e);
  },
  async getInjectedListings(e) {
    return mi("/w3m/v1/getInjectedListings", e);
  },
  async getAllListings(e) {
    return mi("/w3m/v1/getAllListings", e);
  },
  getWalletImageUrl(e) {
    return `${ql}/w3m/v1/getWalletImage/${e}?projectId=${Nn.state.projectId}&sdkType=${Gl}&sdkVersion=${Vl}`;
  },
  getAssetImageUrl(e) {
    return `${ql}/w3m/v1/getAssetImage/${e}?projectId=${Nn.state.projectId}&sdkType=${Gl}&sdkVersion=${Vl}`;
  },
};
var _5 = Object.defineProperty,
  wh = Object.getOwnPropertySymbols,
  k5 = Object.prototype.hasOwnProperty,
  S5 = Object.prototype.propertyIsEnumerable,
  vh = (e, t, n) =>
    t in e
      ? _5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  A5 = (e, t) => {
    for (var n in t || (t = {})) k5.call(t, n) && vh(e, n, t[n]);
    if (wh) for (var n of wh(t)) S5.call(t, n) && vh(e, n, t[n]);
    return e;
  };
const Eh = tt.isMobile(),
  $t = gn({
    wallets: { listings: [], total: 0, page: 1 },
    injectedWallets: [],
    search: { listings: [], total: 0, page: 1 },
    recomendedWallets: [],
  }),
  p9 = {
    state: $t,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } =
        Nn.state;
      if (e === "NONE" || (t === "ALL" && !e)) return $t.recomendedWallets;
      if (tt.isArray(e)) {
        const n = { recommendedIds: e.join(",") },
          { listings: r } = await Rn.getAllListings(n),
          s = Object.values(r);
        s.sort((o, i) => {
          const a = e.indexOf(o.id),
            c = e.indexOf(i.id);
          return a - c;
        }),
          ($t.recomendedWallets = s);
      } else {
        const n = tt.isArray(t),
          r = {
            page: 1,
            entries: tt.RECOMMENDED_WALLET_AMOUNT,
            version: 2,
            excludedIds: n ? t.join(",") : void 0,
          },
          { listings: s } = Eh
            ? await Rn.getMobileListings(r)
            : await Rn.getDesktopListings(r);
        $t.recomendedWallets = Object.values(s);
      }
      return $t.recomendedWallets;
    },
    async getWallets(e) {
      const t = A5({}, e),
        { explorerRecommendedWalletIds: n, explorerExcludedWalletIds: r } =
          Nn.state,
        { recomendedWallets: s } = $t;
      if (r === "ALL") return $t.wallets;
      s.length
        ? (t.excludedIds = s.map((f) => f.id).join(","))
        : tt.isArray(n) && (t.excludedIds = n.join(",")),
        tt.isArray(r) &&
          (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(","));
      const { page: o, search: i } = e,
        { listings: a, total: c } = Eh
          ? await Rn.getMobileListings(t)
          : await Rn.getDesktopListings(t),
        u = Object.values(a),
        l = i ? "search" : "wallets";
      return (
        ($t[l] = {
          listings: [...$t[l].listings, ...u],
          total: c,
          page: o ?? 1,
        }),
        { listings: u, total: c }
      );
    },
    async getInjectedWallets() {
      const { listings: e } = await Rn.getInjectedListings({}),
        t = Object.values(e);
      return ($t.injectedWallets = t), $t.injectedWallets;
    },
    getWalletImageUrl(e) {
      return Rn.getWalletImageUrl(e);
    },
    getAssetImageUrl(e) {
      return Rn.getAssetImageUrl(e);
    },
    resetSearch() {
      $t.search = { listings: [], total: 0, page: 1 };
    },
  },
  Hr = gn({ pairingEnabled: !1, pairingUri: "", pairingError: !1 }),
  Ic = {
    state: Hr,
    subscribe(e) {
      return Bn(Hr, () => e(Hr));
    },
    setPairingUri(e) {
      Hr.pairingUri = e;
    },
    setPairingError(e) {
      Hr.pairingError = e;
    },
    setPairingEnabled(e) {
      Hr.pairingEnabled = e;
    },
  },
  zr = gn({ open: !1 }),
  $c = {
    state: zr,
    subscribe(e) {
      return Bn(zr, () => e(zr));
    },
    async open(e) {
      return new Promise((t) => {
        const {
            isUiLoaded: n,
            isDataLoaded: r,
            isPreferInjected: s,
            selectedChain: o,
          } = ln.state,
          { isConnected: i } = w5.state,
          { enableNetworkView: a } = Nn.state;
        if (
          (Ic.setPairingEnabled(!0),
          i || tt.removeWalletConnectDeepLink(),
          e != null && e.route)
        )
          Yr.reset(e.route);
        else if (i) Yr.reset("Account");
        else if (a) Yr.reset("SelectNetwork");
        else if (s) {
          cn
            .client()
            .connectConnector("injected", o == null ? void 0 : o.id)
            .catch((u) => console.error(u)),
            t();
          return;
        } else Yr.reset("ConnectWallet");
        const { pairingUri: c } = Ic.state;
        if (n && r && (c || i)) (zr.open = !0), t();
        else {
          const u = setInterval(() => {
            const l = ln.state,
              f = Ic.state;
            l.isUiLoaded &&
              l.isDataLoaded &&
              (f.pairingUri || i) &&
              (clearInterval(u), (zr.open = !0), t());
          }, 200);
        }
      });
    },
    close() {
      zr.open = !1;
    },
  };
var P5 = Object.defineProperty,
  Ch = Object.getOwnPropertySymbols,
  T5 = Object.prototype.hasOwnProperty,
  D5 = Object.prototype.propertyIsEnumerable,
  xh = (e, t, n) =>
    t in e
      ? P5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  O5 = (e, t) => {
    for (var n in t || (t = {})) T5.call(t, n) && xh(e, n, t[n]);
    if (Ch) for (var n of Ch(t)) D5.call(t, n) && xh(e, n, t[n]);
    return e;
  };
function I5() {
  return (
    typeof matchMedia < "u" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  );
}
const Ls = gn({ themeMode: I5() ? "dark" : "light" }),
  _h = {
    state: Ls,
    subscribe(e) {
      return Bn(Ls, () => e(Ls));
    },
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: n } = e;
      t && (Ls.themeMode = t), n && (Ls.themeVariables = O5({}, n));
    },
  },
  Cr = gn({ open: !1, message: "", variant: "success" }),
  m9 = {
    state: Cr,
    subscribe(e) {
      return Bn(Cr, () => e(Cr));
    },
    openToast(e, t) {
      (Cr.open = !0), (Cr.message = e), (Cr.variant = t);
    },
    closeToast() {
      Cr.open = !1;
    },
  };
class $5 {
  constructor(t, n) {
    (this.openModal = $c.open),
      (this.closeModal = $c.close),
      (this.subscribeModal = $c.subscribe),
      (this.setTheme = _h.setThemeConfig),
      (this.setDefaultChain = ln.setSelectedChain),
      (this.subscribeEvents = A0.subscribe),
      _h.setThemeConfig(t),
      cn.setEthereumClient(n),
      Nn.setConfig(t),
      this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await Wt(() => import("./index.CNcRs-dU.js"), __vite__mapDeps([0, 1]));
      const t = document.createElement("w3m-modal");
      document.body.insertAdjacentElement("beforeend", t), ln.setIsUiLoaded(!0);
    }
  }
}
var P0 = { exports: {} };
(function (e, t) {
  (function (n, r) {
    (e.exports = r()), (e.exports.default = e.exports);
  })(O3, function () {
    var n = function () {
      (this.listeners = {}),
        (this.registerListener = function (s, o, i) {
          var a = s.constructor.name;
          (i = this.validateNumber(i || "any")),
            a !== "Array" && (s = [s]),
            s.forEach(function (c) {
              if (c.constructor.name !== "String")
                throw new Error(
                  "Only `String` and array of `String` are accepted for the event names!"
                );
              (r.listeners[c] = r.listeners[c] || []),
                r.listeners[c].push({ callback: o, number: i });
            });
        }),
        (this.validateNumber = function (s) {
          var o = s.constructor.name;
          if (o === "Number") return s;
          if (o === "String" && s.toLowerCase() === "any") return "any";
          throw new Error(
            "Only `Number` and `any` are accepted in the number of possible executions!"
          );
        }),
        (this.toBeRemoved = function (s) {
          var o = s.number;
          return (
            (s.execution = s.execution || 0),
            s.execution++,
            !(o === "any" || s.execution < o)
          );
        });
      var r = this;
      return {
        on: function (s, o) {
          r.registerListener.bind(r)(s, o, "any");
        },
        once: function (s, o) {
          r.registerListener.bind(r)(s, o, 1);
        },
        exactly: function (s, o, i) {
          r.registerListener.bind(r)(o, i, s);
        },
        die: function (s) {
          delete r.listeners[s];
        },
        off: function (s) {
          this.die(s);
        },
        detach: function (s, o) {
          if (o === void 0) return (r.listeners[s] = []), !0;
          for (var i in r.listeners[s])
            if (
              r.listeners[s].hasOwnProperty(i) &&
              r.listeners[s][i].callback === o
            )
              return r.listeners[s].splice(i, 1), this.detach(s, o);
          return !0;
        },
        detachAll: function () {
          for (var s in r.listeners)
            r.listeners.hasOwnProperty(s) && this.detach(s);
        },
        emit: function (s, o) {
          var i = [];
          for (var a in r.listeners)
            if (
              r.listeners.hasOwnProperty(a) &&
              (a === s && Array.prototype.push.apply(i, r.listeners[a]),
              a.indexOf("*") >= 0)
            ) {
              var c = a.replace(/\*\*/, "([^.]+.?)+");
              c = c.replace(/\*/g, "[^.]+");
              var u = s.match(c);
              u && s === u[0] && Array.prototype.push.apply(i, r.listeners[a]);
            }
          var l = arguments;
          (o = o || this),
            i.forEach(function (f, h) {
              var p = f.callback;
              f.number, o && (p = p.bind(o));
              var m = [];
              Object.keys(l).map(function (g) {
                g > 1 && m.push(l[g]);
              }),
                r.toBeRemoved(f) && r.listeners[s].splice(h, 1),
                p.apply(null, m);
            });
        },
      };
    };
    return n;
  });
})(P0);
var N5 = P0.exports;
const M5 = Ob(N5);
function P(e, t = {}) {
  const {
    fees: n = e.fees,
    formatters: r = e.formatters,
    serializers: s = e.serializers,
  } = t;
  return { ...e, fees: n, formatters: r, serializers: s };
}
const U5 = P({
    id: 787,
    name: "Acala",
    network: "acala",
    nativeCurrency: { name: "Acala", symbol: "ACA", decimals: 18 },
    rpcUrls: {
      public: {
        http: ["https://eth-rpc-acala.aca-api.network"],
        webSocket: ["wss://eth-rpc-acala.aca-api.network"],
      },
      default: {
        http: ["https://eth-rpc-acala.aca-api.network"],
        webSocket: ["wss://eth-rpc-acala.aca-api.network"],
      },
    },
    blockExplorers: {
      default: {
        name: "Acala Blockscout",
        url: "https://blockscout.acala.network",
      },
    },
    testnet: !1,
  }),
  F5 = P({
    id: 42161,
    name: "Arbitrum One",
    network: "arbitrum",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://arb-mainnet.g.alchemy.com/v2"],
        webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://arbitrum-mainnet.infura.io/v3"],
        webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"],
      },
      default: { http: ["https://arb1.arbitrum.io/rpc"] },
      public: { http: ["https://arb1.arbitrum.io/rpc"] },
    },
    blockExplorers: {
      etherscan: { name: "Arbiscan", url: "https://arbiscan.io" },
      default: { name: "Arbiscan", url: "https://arbiscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 7654707,
      },
    },
  }),
  B5 = P({
    id: 421613,
    name: "Arbitrum Goerli",
    network: "arbitrum-goerli",
    nativeCurrency: {
      name: "Arbitrum Goerli Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      alchemy: {
        http: ["https://arb-goerli.g.alchemy.com/v2"],
        webSocket: ["wss://arb-goerli.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://arbitrum-goerli.infura.io/v3"],
        webSocket: ["wss://arbitrum-goerli.infura.io/ws/v3"],
      },
      default: { http: ["https://goerli-rollup.arbitrum.io/rpc"] },
      public: { http: ["https://goerli-rollup.arbitrum.io/rpc"] },
    },
    blockExplorers: {
      etherscan: { name: "Arbiscan", url: "https://goerli.arbiscan.io" },
      default: { name: "Arbiscan", url: "https://goerli.arbiscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 88114,
      },
    },
    testnet: !0,
  }),
  L5 = P({
    id: 42170,
    name: "Arbitrum Nova",
    network: "arbitrum-nova",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      blast: {
        http: ["https://arbitrum-nova.public.blastapi.io"],
        webSocket: ["wss://arbitrum-nova.public.blastapi.io"],
      },
      default: { http: ["https://nova.arbitrum.io/rpc"] },
      public: { http: ["https://nova.arbitrum.io/rpc"] },
    },
    blockExplorers: {
      etherscan: { name: "Arbiscan", url: "https://nova.arbiscan.io" },
      blockScout: {
        name: "BlockScout",
        url: "https://nova-explorer.arbitrum.io/",
      },
      default: { name: "Arbiscan", url: "https://nova.arbiscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 1746963,
      },
    },
  }),
  R5 = P({
    id: 592,
    name: "Astar",
    network: "astar-mainnet",
    nativeCurrency: { name: "Astar", symbol: "ASTR", decimals: 18 },
    rpcUrls: {
      public: { http: ["https://astar.api.onfinality.io/public"] },
      default: { http: ["https://astar.api.onfinality.io/public"] },
    },
    blockExplorers: {
      default: { name: "Astar Subscan", url: "https://astar.subscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 761794,
      },
    },
    testnet: !1,
  }),
  j5 = P({
    id: 421614,
    name: "Arbitrum Sepolia",
    network: "arbitrum-sepolia",
    nativeCurrency: {
      name: "Arbitrum Sepolia Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      alchemy: {
        http: ["https://arb-sepolia.g.alchemy.com/v2"],
        webSocket: ["wss://arb-sepolia.g.alchemy.com/v2"],
      },
      default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
      public: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
    },
    blockExplorers: {
      etherscan: { name: "Arbiscan", url: "https://sepolia.arbiscan.io" },
      default: { name: "Arbiscan", url: "https://sepolia.arbiscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 81930,
      },
    },
    testnet: !0,
  }),
  H5 = P({
    id: 1261120,
    name: "Astar zkEVM Testnet zKatana",
    network: "zKatana",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.zkatana.gelato.digital",
          "https://rpc.startale.com/zkatana",
        ],
      },
      public: {
        http: [
          "https://rpc.zkatana.gelato.digital",
          "https://rpc.startale.com/zkatana",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "Blockscout zKatana chain explorer",
        url: "https://zkatana.blockscout.com",
      },
      default: {
        name: "zKatana Explorer",
        url: "https://zkatana.explorer.startale.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 31317,
      },
    },
    testnet: !0,
  }),
  z5 = P({
    id: 1313161554,
    name: "Aurora",
    network: "aurora",
    nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
    rpcUrls: {
      infura: { http: ["https://aurora-mainnet.infura.io/v3"] },
      default: { http: ["https://mainnet.aurora.dev"] },
      public: { http: ["https://mainnet.aurora.dev"] },
    },
    blockExplorers: {
      etherscan: { name: "Aurorascan", url: "https://aurorascan.dev" },
      default: { name: "Aurorascan", url: "https://aurorascan.dev" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 62907816,
      },
    },
  }),
  W5 = P({
    id: 1313161555,
    name: "Aurora Testnet",
    network: "aurora-testnet",
    nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
    rpcUrls: {
      infura: { http: ["https://aurora-testnet.infura.io/v3"] },
      default: { http: ["https://testnet.aurora.dev"] },
      public: { http: ["https://testnet.aurora.dev"] },
    },
    blockExplorers: {
      etherscan: { name: "Aurorascan", url: "https://testnet.aurorascan.dev" },
      default: { name: "Aurorascan", url: "https://testnet.aurorascan.dev" },
    },
    testnet: !0,
  }),
  q5 = P({
    id: 43114,
    name: "Avalanche",
    network: "avalanche",
    nativeCurrency: { decimals: 18, name: "Avalanche", symbol: "AVAX" },
    rpcUrls: {
      default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
      public: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
    },
    blockExplorers: {
      etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
      default: { name: "SnowTrace", url: "https://snowtrace.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 11907934,
      },
    },
  }),
  G5 = P({
    id: 43113,
    name: "Avalanche Fuji",
    network: "avalanche-fuji",
    nativeCurrency: { decimals: 18, name: "Avalanche Fuji", symbol: "AVAX" },
    rpcUrls: {
      default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
      public: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
    },
    blockExplorers: {
      etherscan: { name: "SnowTrace", url: "https://testnet.snowtrace.io" },
      default: { name: "SnowTrace", url: "https://testnet.snowtrace.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 7096959,
      },
    },
    testnet: !0,
  }),
  V5 = P({
    id: 5165,
    network: "bahamut",
    name: "Bahamut",
    nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://rpc1.bahamut.io",
          "https://bahamut.publicnode.com",
          "https://rpc2.bahamut.io",
        ],
        webSocket: [
          "wss://ws1.sahara.bahamutchain.com",
          "wss://bahamut.publicnode.com",
          "wss://ws2.sahara.bahamutchain.com",
        ],
      },
      public: {
        http: [
          "https://rpc1.bahamut.io",
          "https://bahamut.publicnode.com",
          "https://rpc2.bahamut.io",
        ],
        webSocket: [
          "wss://ws1.sahara.bahamutchain.com",
          "wss://bahamut.publicnode.com",
          "wss://ws2.sahara.bahamutchain.com",
        ],
      },
    },
    blockExplorers: {
      default: { name: "Ftnscan", url: "https://www.ftnscan.com" },
    },
  }),
  K5 = "1.21.3",
  X5 = () => `viem@${K5}`;
class Ie extends Error {
  constructor(t, n = {}) {
    var r;
    super(),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ViemError",
      }),
      Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: X5(),
      });
    const s =
        n.cause instanceof Ie
          ? n.cause.details
          : (r = n.cause) != null && r.message
          ? n.cause.message
          : n.details,
      o = (n.cause instanceof Ie && n.cause.docsPath) || n.docsPath;
    (this.message = [
      t || "An error occurred.",
      "",
      ...(n.metaMessages ? [...n.metaMessages, ""] : []),
      ...(o
        ? [
            `Docs: https://viem.sh${o}.html${
              n.docsSlug ? `#${n.docsSlug}` : ""
            }`,
          ]
        : []),
      ...(s ? [`Details: ${s}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      n.cause && (this.cause = n.cause),
      (this.details = s),
      (this.docsPath = o),
      (this.metaMessages = n.metaMessages),
      (this.shortMessage = t);
  }
  walk(t) {
    return T0(this, t);
  }
}
function T0(e, t) {
  return t != null && t(e)
    ? e
    : e && typeof e == "object" && "cause" in e
    ? T0(e.cause, t)
    : t
    ? null
    : e;
}
class Y5 extends Ie {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(
      `Number "${o}" is not in safe ${
        s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""
      }integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntegerOutOfRangeError",
      });
  }
}
class Z5 extends Ie {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SizeOverflowError",
      });
  }
}
function J5(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string"
    ? !1
    : t
    ? /^0x[0-9a-fA-F]*$/.test(e)
    : e.startsWith("0x");
}
function kh(e) {
  return J5(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
function mn(e, { dir: t = "left" } = {}) {
  let n = typeof e == "string" ? e.replace("0x", "") : e,
    r = 0;
  for (
    let s = 0;
    s < n.length - 1 &&
    n[t === "left" ? s : n.length - s - 1].toString() === "0";
    s++
  )
    r++;
  return (
    (n = t === "left" ? n.slice(r) : n.slice(0, n.length - r)),
    typeof e == "string"
      ? (n.length === 1 && t === "right" && (n = `${n}0`),
        `0x${n.length % 2 === 1 ? `0${n}` : n}`)
      : n
  );
}
class D0 extends Ie {
  constructor({ size: t, targetSize: n, type: r }) {
    super(
      `${r.charAt(0).toUpperCase()}${r
        .slice(1)
        .toLowerCase()} size (${t}) exceeds padding size (${n}).`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SizeExceedsPaddingSizeError",
      });
  }
}
function Ga(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string"
    ? Q5(e, { dir: t, size: n })
    : e_(e, { dir: t, size: n });
}
function Q5(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new D0({ size: Math.ceil(r.length / 2), targetSize: n, type: "hex" });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function e_(e, { dir: t, size: n = 32 } = {}) {
  if (n === null) return e;
  if (e.length > n)
    throw new D0({ size: e.length, targetSize: n, type: "bytes" });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = t === "right";
    r[o ? s : n - s - 1] = e[o ? s : e.length - s - 1];
  }
  return r;
}
const t_ = Array.from({ length: 256 }, (e, t) =>
  t.toString(16).padStart(2, "0")
);
function le(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? Xn(e, t)
    : typeof e == "string"
    ? s_(e, t)
    : typeof e == "boolean"
    ? n_(e, t)
    : pf(e, t);
}
function n_(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number"
    ? (Va(n, { size: t.size }), Ga(n, { size: t.size }))
    : n;
}
function pf(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++) n += t_[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number"
    ? (Va(r, { size: t.size }), Ga(r, { dir: "right", size: t.size }))
    : r;
}
function Xn(e, t = {}) {
  const { signed: n, size: r } = t,
    s = BigInt(e);
  let o;
  r
    ? n
      ? (o = (1n << (BigInt(r) * 8n - 1n)) - 1n)
      : (o = 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if ((o && s > o) || s < i) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new Y5({
      max: o ? `${o}${c}` : void 0,
      min: `${i}${c}`,
      signed: n,
      size: r,
      value: `${e}${c}`,
    });
  }
  const a = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(
    16
  )}`;
  return r ? Ga(a, { size: r }) : a;
}
const r_ = new TextEncoder();
function s_(e, t = {}) {
  const n = r_.encode(e);
  return pf(n, t);
}
const En = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function Sh(e) {
  if (e >= En.zero && e <= En.nine) return e - En.zero;
  if (e >= En.A && e <= En.F) return e - (En.A - 10);
  if (e >= En.a && e <= En.f) return e - (En.a - 10);
}
function O0(e, t = {}) {
  let n = e;
  t.size &&
    (Va(n, { size: t.size }), (n = Ga(n, { dir: "right", size: t.size })));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2,
    o = new Uint8Array(s);
  for (let i = 0, a = 0; i < s; i++) {
    const c = Sh(r.charCodeAt(a++)),
      u = Sh(r.charCodeAt(a++));
    if (c === void 0 || u === void 0)
      throw new Ie(
        `Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`
      );
    o[i] = c * 16 + u;
  }
  return o;
}
function Va(e, { size: t }) {
  if (kh(e) > t) throw new Z5({ givenSize: kh(e), maxSize: t });
}
function Ve(e, t = {}) {
  const { signed: n } = t;
  t.size && Va(e, { size: t.size });
  const r = BigInt(e);
  if (!n) return r;
  const s = (e.length - 2) / 2,
    o = (1n << (BigInt(s) * 8n - 1n)) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function ea(e, t = {}) {
  return Number(Ve(e, t));
}
function Ka(e, t) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (s) => {
      const o = t(s);
      if (n) for (const i of n) delete o[i];
      return { ...o, ...r(s) };
    },
    type: e,
  });
}
const I0 = { "0x0": "legacy", "0x1": "eip2930", "0x2": "eip1559" };
function Xa(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? ea(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? ea(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? I0[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0,
  };
  return (
    (t.yParity = (() => {
      if (e.yParity) return Number(e.yParity);
      if (typeof t.v == "bigint") {
        if (t.v === 0n || t.v === 27n) return 0;
        if (t.v === 1n || t.v === 28n) return 1;
        if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
      }
    })()),
    t.type === "legacy" &&
      (delete t.accessList,
      delete t.maxFeePerGas,
      delete t.maxPriorityFeePerGas,
      delete t.yParity),
    t.type === "eip2930" &&
      (delete t.maxFeePerGas, delete t.maxPriorityFeePerGas),
    t
  );
}
const mf = Ka("transaction", Xa);
function o_(e) {
  var t;
  const n =
    (t = e.transactions) == null
      ? void 0
      : t.map((r) => (typeof r == "string" ? r : Xa(r)));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: n,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
  };
}
const bf = Ka("block", o_);
function $0(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...(n ? { args: t, eventName: n } : {}),
  };
}
const i_ = { "0x0": "reverted", "0x1": "success" };
function a_(e) {
  return {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((t) => $0(t)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? ea(e.transactionIndex) : null,
    status: e.status ? i_[e.status] : null,
    type: e.type ? I0[e.type] || e.type : null,
  };
}
const N0 = Ka("transactionReceipt", a_),
  tn = {
    block: bf({
      format(e) {
        var t;
        return {
          transactions:
            (t = e.transactions) == null
              ? void 0
              : t.map((n) => {
                  if (typeof n == "string") return n;
                  const r = Xa(n);
                  return (
                    r.typeHex === "0x7e" &&
                      ((r.isSystemTx = n.isSystemTx),
                      (r.mint = n.mint ? Ve(n.mint) : void 0),
                      (r.sourceHash = n.sourceHash),
                      (r.type = "deposit")),
                    r
                  );
                }),
          stateRoot: e.stateRoot,
        };
      },
    }),
    transaction: mf({
      format(e) {
        const t = {};
        return (
          e.type === "0x7e" &&
            ((t.isSystemTx = e.isSystemTx),
            (t.mint = e.mint ? Ve(e.mint) : void 0),
            (t.sourceHash = e.sourceHash),
            (t.type = "deposit")),
          t
        );
      },
    }),
    transactionReceipt: N0({
      format(e) {
        return {
          l1GasPrice: e.l1GasPrice ? Ve(e.l1GasPrice) : null,
          l1GasUsed: e.l1GasUsed ? Ve(e.l1GasUsed) : null,
          l1Fee: e.l1Fee ? Ve(e.l1Fee) : null,
          l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
        };
      },
    }),
  },
  c_ = P(
    {
      id: 8453,
      network: "base",
      name: "Base",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        alchemy: {
          http: ["https://base-mainnet.g.alchemy.com/v2"],
          webSocket: ["wss://base-mainnet.g.alchemy.com/v2"],
        },
        infura: {
          http: ["https://base-mainnet.infura.io/v3"],
          webSocket: ["wss://base-mainnet.infura.io/ws/v3"],
        },
        default: { http: ["https://mainnet.base.org"] },
        public: { http: ["https://mainnet.base.org"] },
      },
      blockExplorers: {
        blockscout: { name: "Basescout", url: "https://base.blockscout.com" },
        default: { name: "Basescan", url: "https://basescan.org" },
        etherscan: { name: "Basescan", url: "https://basescan.org" },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 5022,
        },
      },
    },
    { formatters: tn }
  ),
  l_ = P(
    {
      id: 84531,
      network: "base-goerli",
      name: "Base Goerli",
      nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        alchemy: {
          http: ["https://base-goerli.g.alchemy.com/v2"],
          webSocket: ["wss://base-goerli.g.alchemy.com/v2"],
        },
        default: { http: ["https://goerli.base.org"] },
        public: { http: ["https://goerli.base.org"] },
      },
      blockExplorers: {
        etherscan: { name: "Basescan", url: "https://goerli.basescan.org" },
        default: { name: "Basescan", url: "https://goerli.basescan.org" },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 1376988,
        },
      },
      testnet: !0,
      sourceId: 5,
    },
    { formatters: tn }
  ),
  u_ = P(
    {
      id: 84532,
      network: "base-sepolia",
      name: "Base Sepolia",
      nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        alchemy: {
          http: ["https://base-sepolia.g.alchemy.com/v2"],
          webSocket: ["wss://base-sepolia.g.alchemy.com/v2"],
        },
        default: { http: ["https://sepolia.base.org"] },
        public: { http: ["https://sepolia.base.org"] },
      },
      blockExplorers: {
        blockscout: {
          name: "Blockscout",
          url: "https://base-sepolia.blockscout.com",
        },
        default: {
          name: "Blockscout",
          url: "https://base-sepolia.blockscout.com",
        },
      },
      testnet: !0,
      sourceId: 11155111,
    },
    { formatters: tn }
  ),
  f_ = P({
    id: 641230,
    name: "Bear Network Chain Mainnet",
    network: "BearNetworkChainMainnet",
    nativeCurrency: { decimals: 18, name: "BearNetworkChain", symbol: "BRNKC" },
    rpcUrls: {
      public: { http: ["https://brnkc-mainnet.bearnetwork.net"] },
      default: { http: ["https://brnkc-mainnet.bearnetwork.net"] },
    },
    blockExplorers: {
      default: { name: "BrnkScan", url: "https://brnkscan.bearnetwork.net" },
    },
  }),
  d_ = P({
    id: 751230,
    name: "Bear Network Chain Testnet",
    network: "BearNetworkChainTestnet",
    nativeCurrency: { decimals: 18, name: "tBRNKC", symbol: "tBRNKC" },
    rpcUrls: {
      public: { http: ["https://brnkc-test.bearnetwork.net"] },
      default: { http: ["https://brnkc-test.bearnetwork.net"] },
    },
    blockExplorers: {
      default: {
        name: "BrnkTestScan",
        url: "https://brnktest-scan.bearnetwork.net",
      },
    },
    testnet: !0,
  }),
  h_ = P({
    id: 199,
    name: "BitTorrent",
    network: "bittorrent-chain-mainnet",
    nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.bittorrentchain.io"] },
      public: { http: ["https://rpc.bittorrentchain.io"] },
    },
    blockExplorers: {
      etherscan: { name: "Bttcscan", url: "https://bttcscan.com" },
      default: { name: "Bttcscan", url: "https://bttcscan.com" },
    },
  }),
  p_ = P({
    id: 1028,
    name: "BitTorrent Chain Testnet",
    network: "bittorrent-chain-testnet",
    nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://testrpc.bittorrentchain.io"] },
      public: { http: ["https://testrpc.bittorrentchain.io"] },
    },
    blockExplorers: {
      etherscan: { name: "Bttcscan", url: "https://testnet.bttcscan.com" },
      default: { name: "Bttcscan", url: "https://testnet.bttcscan.com" },
    },
    testnet: !0,
  }),
  m_ = P({
    id: 288,
    name: "Boba Network",
    network: "boba",
    nativeCurrency: { decimals: 18, name: "Boba", symbol: "BOBA" },
    rpcUrls: {
      default: { http: ["https://mainnet.boba.network"] },
      public: { http: ["https://mainnet.boba.network"] },
    },
    blockExplorers: {
      etherscan: { name: "BOBAScan", url: "https://bobascan.com" },
      default: { name: "BOBAScan", url: "https://bobascan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 446859,
      },
    },
  }),
  b_ = P({
    id: 1039,
    name: "Bronos",
    network: "bronos",
    nativeCurrency: { decimals: 18, name: "BRO", symbol: "BRO" },
    rpcUrls: {
      default: { http: ["https://evm.bronos.org"] },
      public: { http: ["https://evm.bronos.org"] },
    },
    blockExplorers: {
      default: { name: "BronoScan", url: "https://broscan.bronos.org" },
    },
  }),
  g_ = P({
    id: 1038,
    name: "Bronos Testnet",
    network: "bronos-testnet",
    nativeCurrency: { decimals: 18, name: "Bronos Coin", symbol: "tBRO" },
    rpcUrls: {
      default: { http: ["https://evm-testnet.bronos.org"] },
      public: { http: ["https://evm-testnet.bronos.org"] },
    },
    blockExplorers: {
      default: { name: "BronoScan", url: "https://tbroscan.bronos.org" },
    },
    testnet: !0,
  }),
  y_ = P({
    id: 56,
    name: "BNB Smart Chain",
    network: "bsc",
    nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
    rpcUrls: {
      default: { http: ["https://rpc.ankr.com/bsc"] },
      public: { http: ["https://rpc.ankr.com/bsc"] },
    },
    blockExplorers: {
      etherscan: { name: "BscScan", url: "https://bscscan.com" },
      default: { name: "BscScan", url: "https://bscscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 15921452,
      },
    },
  }),
  w_ = P({
    id: 97,
    name: "Binance Smart Chain Testnet",
    network: "bsc-testnet",
    nativeCurrency: { decimals: 18, name: "BNB", symbol: "tBNB" },
    rpcUrls: {
      default: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] },
      public: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] },
    },
    blockExplorers: {
      etherscan: { name: "BscScan", url: "https://testnet.bscscan.com" },
      default: { name: "BscScan", url: "https://testnet.bscscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 17422483,
      },
    },
    testnet: !0,
  }),
  v_ = P({
    id: 4999,
    name: "BlackFort Exchange Network",
    network: "bxn",
    nativeCurrency: { name: "BlackFort Token", symbol: "BXN", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://mainnet.blackfort.network/rpc"] },
      public: { http: ["https://mainnet.blackfort.network/rpc"] },
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://explorer.blackfort.network",
      },
    },
  }),
  E_ = P({
    id: 4777,
    name: "BlackFort Exchange Network Testnet",
    network: "bxnTestnet",
    nativeCurrency: {
      name: "BlackFort Testnet Token",
      symbol: "TBXN",
      decimals: 18,
    },
    rpcUrls: {
      default: { http: ["https://testnet.blackfort.network/rpc"] },
      public: { http: ["https://testnet.blackfort.network/rpc"] },
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://testnet-explorer.blackfort.network",
      },
    },
  }),
  C_ = P({
    id: 7700,
    name: "Canto",
    network: "canto",
    nativeCurrency: { decimals: 18, name: "Canto", symbol: "CANTO" },
    rpcUrls: {
      default: { http: ["https://canto.gravitychain.io"] },
      public: { http: ["https://canto.gravitychain.io"] },
    },
    blockExplorers: {
      default: { name: "Tuber.Build (Blockscout)", url: "https://tuber.build" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 2905789,
      },
    },
  }),
  x_ = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2" };
function __(e) {
  return {
    ...e,
    gas: typeof e.gas < "u" ? Xn(e.gas) : void 0,
    gasPrice: typeof e.gasPrice < "u" ? Xn(e.gasPrice) : void 0,
    maxFeePerGas: typeof e.maxFeePerGas < "u" ? Xn(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas:
      typeof e.maxPriorityFeePerGas < "u" ? Xn(e.maxPriorityFeePerGas) : void 0,
    nonce: typeof e.nonce < "u" ? Xn(e.nonce) : void 0,
    type: typeof e.type < "u" ? x_[e.type] : void 0,
    value: typeof e.value < "u" ? Xn(e.value) : void 0,
  };
}
const M0 = Ka("transactionRequest", __);
function Qn(e) {
  return (
    e === 0 ||
    e === 0n ||
    e === void 0 ||
    e === null ||
    e === "0" ||
    e === "" ||
    (typeof e == "string" &&
      (mn(e).toLowerCase() === "0x" || mn(e).toLowerCase() === "0x00"))
  );
}
function st(e) {
  return !Qn(e);
}
function U0(e) {
  return st(e.maxFeePerGas) && st(e.maxPriorityFeePerGas);
}
function F0(e) {
  return e.type === "cip42"
    ? !0
    : U0(e) &&
        (st(e.feeCurrency) || st(e.gatewayFeeRecipient) || st(e.gatewayFee));
}
function B0(e) {
  return e.type === "cip64"
    ? !0
    : U0(e) &&
        st(e.feeCurrency) &&
        Qn(e.gatewayFee) &&
        Qn(e.gatewayFeeRecipient);
}
const gf = {
  block: bf({
    exclude: ["difficulty", "gasLimit", "mixHash", "nonce", "uncles"],
    format(e) {
      var t;
      const n =
        (t = e.transactions) == null
          ? void 0
          : t.map((r) =>
              typeof r == "string"
                ? r
                : {
                    ...Xa(r),
                    feeCurrency: r.feeCurrency,
                    ...(r.type !== "0x7b"
                      ? {
                          gatewayFee: r.gatewayFee ? Ve(r.gatewayFee) : null,
                          gatewayFeeRecipient: r.gatewayFeeRecipient || null,
                        }
                      : {}),
                  }
            );
      return { randomness: e.randomness, transactions: n };
    },
  }),
  transaction: mf({
    format(e) {
      const t = { feeCurrency: e.feeCurrency };
      return (
        e.type === "0x7b"
          ? (t.type = "cip64")
          : (e.type === "0x7c" && (t.type = "cip42"),
            (t.gatewayFee = e.gatewayFee ? Ve(e.gatewayFee) : null),
            (t.gatewayFeeRecipient = e.gatewayFeeRecipient)),
        t
      );
    },
  }),
  transactionRequest: M0({
    format(e) {
      const t = { feeCurrency: e.feeCurrency };
      return (
        B0(e)
          ? (t.type = "0x7b")
          : (F0(e) && (t.type = "0x7c"),
            (t.gatewayFee =
              typeof e.gatewayFee < "u" ? Xn(e.gatewayFee) : void 0),
            (t.gatewayFeeRecipient = e.gatewayFeeRecipient)),
        t
      );
    },
  }),
};
class dn extends Ie {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAddressError",
      });
  }
}
class Ts extends Ie {
  constructor({ chainId: t }) {
    super(`Chain ID "${t}" is invalid.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidChainIdError",
      });
  }
}
const k_ = { ether: -9, wei: 9 };
function S_(e, t) {
  let n = e.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), (n = n.padStart(t, "0"));
  let [s, o] = [n.slice(0, n.length - t), n.slice(n.length - t)];
  return (
    (o = o.replace(/(0+)$/, "")),
    `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`
  );
}
function Kl(e, t = "wei") {
  return S_(e, k_[t]);
}
class Ds extends Ie {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${Kl(n)} gwei` : ""
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeCapTooHigh",
      });
  }
}
Object.defineProperty(Ds, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
});
class Ya extends Ie {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          n ? ` = ${Kl(n)} gwei` : ""
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          r ? ` = ${Kl(r)} gwei` : ""
        }).`,
      ].join(`
`),
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TipAboveFeeCapError",
      });
  }
}
Object.defineProperty(Ya, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
});
const A_ = /^0x[a-fA-F0-9]{40}$/;
function Lt(e) {
  return A_.test(e);
}
function ri(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const P_ =
  new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!P_) throw new Error("Non little-endian hardware is not supported");
const [T_, D_, O_] = [[], [], []],
  I_ = BigInt(0),
  Rs = BigInt(1),
  $_ = BigInt(2),
  N_ = BigInt(7),
  M_ = BigInt(256),
  U_ = BigInt(113);
for (let e = 0, t = Rs, n = 1, r = 0; e < 24; e++) {
  ([n, r] = [r, (2 * n + 3 * r) % 5]),
    T_.push(2 * (5 * r + n)),
    D_.push((((e + 1) * (e + 2)) / 2) % 64);
  let s = I_;
  for (let o = 0; o < 7; o++)
    (t = ((t << Rs) ^ ((t >> N_) * U_)) % M_),
      t & $_ && (s ^= Rs << ((Rs << BigInt(o)) - Rs));
  O_.push(s);
}
function F_(e) {
  const t = Object.entries(e)
      .map(([r, s]) => (s === void 0 || s === !1 ? null : [r, s]))
      .filter(Boolean),
    n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
  return t.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class B_ extends Ie {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidLegacyVError",
      });
  }
}
class L_ extends Ie {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        F_(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- a Legacy Transaction with `gasPrice`",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidSerializableTransactionError",
      });
  }
}
class R_ extends Ie {
  constructor({ storageKey: t }) {
    super(
      `Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor(
        (t.length - 2) / 2
      )} bytes.`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidStorageKeySizeError",
      });
  }
}
function j_(e) {
  if (e.type) return e.type;
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new L_({ transaction: e });
}
class Ah extends Ie {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NegativeOffsetError",
      });
  }
}
class H_ extends Ie {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "PositionOutOfBoundsError",
      });
  }
}
const z_ = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new H_({ length: this.bytes.length, position: e });
  },
  decrementPosition(e) {
    if (e < 0) throw new Ah({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), (this.position = t);
  },
  incrementPosition(e) {
    if (e < 0) throw new Ah({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), (this.position = t);
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return (
      this.assertPosition(t + 2),
      (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    );
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1),
      this.bytes.set(e, this.position),
      (this.position += e.length);
  },
  pushUint8(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, e),
      (this.position += 2);
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, e >> 8),
      this.dataView.setUint8(this.position + 2, e & 255),
      (this.position += 3);
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, e),
      (this.position += 4);
  },
  readByte() {
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e) {
    const t = this.inspectBytes(e);
    return (this.position += e), t;
  },
  readUint8() {
    const e = this.inspectUint8();
    return (this.position += 1), e;
  },
  readUint16() {
    const e = this.inspectUint16();
    return (this.position += 2), e;
  },
  readUint24() {
    const e = this.inspectUint24();
    return (this.position += 3), e;
  },
  readUint32() {
    const e = this.inspectUint32();
    return (this.position += 4), e;
  },
  setPosition(e) {
    this.assertPosition(e), (this.position = e);
  },
};
function W_(e) {
  const t = Object.create(z_);
  return (
    (t.bytes = e),
    (t.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    t
  );
}
function q_(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: s,
    to: o,
  } = e;
  if (t <= 0) throw new Ts({ chainId: t });
  if (o && !Lt(o)) throw new dn({ address: o });
  if (r)
    throw new Ie("`gasPrice` is not a valid EIP-1559 Transaction attribute.");
  if (s && s > 2n ** 256n - 1n) throw new Ds({ maxFeePerGas: s });
  if (n && s && n > s)
    throw new Ya({ maxFeePerGas: s, maxPriorityFeePerGas: n });
}
function G_(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: s,
    to: o,
  } = e;
  if (t <= 0) throw new Ts({ chainId: t });
  if (o && !Lt(o)) throw new dn({ address: o });
  if (n || s)
    throw new Ie(
      "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
    );
  if (r && r > 2n ** 256n - 1n) throw new Ds({ maxFeePerGas: r });
}
function V_(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: s,
    to: o,
    accessList: i,
  } = e;
  if (o && !Lt(o)) throw new dn({ address: o });
  if (typeof t < "u" && t <= 0) throw new Ts({ chainId: t });
  if (n || s)
    throw new Ie(
      "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
    );
  if (r && r > 2n ** 256n - 1n) throw new Ds({ maxFeePerGas: r });
  if (i)
    throw new Ie("`accessList` is not a valid Legacy Transaction attribute.");
}
function Za(e) {
  if (!e || e.length === 0) return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: s } = e[n];
    for (let o = 0; o < s.length; o++)
      if (s[o].length - 2 !== 64) throw new R_({ storageKey: s[o] });
    if (!Lt(r)) throw new dn({ address: r });
    t.push([r, s]);
  }
  return t;
}
function L0(e, t) {
  const n = j_(e);
  return n === "eip1559" ? K_(e, t) : n === "eip2930" ? X_(e, t) : Y_(e, t);
}
function K_(e, t) {
  const {
    chainId: n,
    gas: r,
    nonce: s,
    to: o,
    value: i,
    maxFeePerGas: a,
    maxPriorityFeePerGas: c,
    accessList: u,
    data: l,
  } = e;
  q_(e);
  const f = Za(u),
    h = [
      le(n),
      s ? le(s) : "0x",
      c ? le(c) : "0x",
      a ? le(a) : "0x",
      r ? le(r) : "0x",
      o ?? "0x",
      i ? le(i) : "0x",
      l ?? "0x",
      f,
    ];
  if (t) {
    const p =
      t.v === 0n ? "0x" : t.v === 1n ? le(1) : t.v === 27n ? "0x" : le(1);
    h.push(p, mn(t.r), mn(t.s));
  }
  return ri(["0x02", Os(h)]);
}
function X_(e, t) {
  const {
    chainId: n,
    gas: r,
    data: s,
    nonce: o,
    to: i,
    value: a,
    accessList: c,
    gasPrice: u,
  } = e;
  G_(e);
  const l = Za(c),
    f = [
      le(n),
      o ? le(o) : "0x",
      u ? le(u) : "0x",
      r ? le(r) : "0x",
      i ?? "0x",
      a ? le(a) : "0x",
      s ?? "0x",
      l,
    ];
  if (t) {
    const h =
      t.v === 0n ? "0x" : t.v === 1n ? le(1) : t.v === 27n ? "0x" : le(1);
    f.push(h, mn(t.r), mn(t.s));
  }
  return ri(["0x01", Os(f)]);
}
function Y_(e, t) {
  const {
    chainId: n = 0,
    gas: r,
    data: s,
    nonce: o,
    to: i,
    value: a,
    gasPrice: c,
  } = e;
  V_(e);
  let u = [
    o ? le(o) : "0x",
    c ? le(c) : "0x",
    r ? le(r) : "0x",
    i ?? "0x",
    a ? le(a) : "0x",
    s ?? "0x",
  ];
  if (t) {
    const l = (() => {
      if (n > 0) return BigInt(n * 2) + BigInt(35n + t.v - 27n);
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
      const f = 27n + (t.v === 27n ? 0n : 1n);
      if (t.v !== f) throw new B_({ v: t.v });
      return f;
    })();
    u = [...u, le(l), t.r, t.s];
  } else n > 0 && (u = [...u, le(n), "0x", "0x"]);
  return Os(u);
}
function Os(e, t = "hex") {
  const n = R0(e),
    r = W_(new Uint8Array(n.length));
  return n.encode(r), t === "hex" ? pf(r.bytes) : r.bytes;
}
function R0(e) {
  return Array.isArray(e) ? Z_(e.map((t) => R0(t))) : J_(e);
}
function Z_(e) {
  const t = e.reduce((r, s) => r + s.length, 0),
    n = j0(t);
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(r) {
      t <= 55
        ? r.pushByte(192 + t)
        : (r.pushByte(247 + n),
          n === 1
            ? r.pushUint8(t)
            : n === 2
            ? r.pushUint16(t)
            : n === 3
            ? r.pushUint24(t)
            : r.pushUint32(t));
      for (const { encode: s } of e) s(r);
    },
  };
}
function J_(e) {
  const t = typeof e == "string" ? O0(e) : e,
    n = j0(t.length);
  return {
    length:
      t.length === 1 && t[0] < 128
        ? 1
        : t.length <= 55
        ? 1 + t.length
        : 1 + n + t.length,
    encode(r) {
      t.length === 1 && t[0] < 128
        ? r.pushBytes(t)
        : t.length <= 55
        ? (r.pushByte(128 + t.length), r.pushBytes(t))
        : (r.pushByte(183 + n),
          n === 1
            ? r.pushUint8(t.length)
            : n === 2
            ? r.pushUint16(t.length)
            : n === 3
            ? r.pushUint24(t.length)
            : r.pushUint32(t.length),
          r.pushBytes(t));
    },
  };
}
function j0(e) {
  if (e < 2 ** 8) return 1;
  if (e < 2 ** 16) return 2;
  if (e < 2 ** 24) return 3;
  if (e < 2 ** 32) return 4;
  throw new Ie("Length is too large.");
}
const Q_ = (e, t) => (B0(e) ? tk(e, t) : F0(e) ? ek(e, t) : L0(e, t)),
  yf = { transaction: Q_ };
function ek(e, t) {
  nk(e);
  const {
      chainId: n,
      gas: r,
      nonce: s,
      to: o,
      value: i,
      maxFeePerGas: a,
      maxPriorityFeePerGas: c,
      accessList: u,
      feeCurrency: l,
      gatewayFeeRecipient: f,
      gatewayFee: h,
      data: p,
    } = e,
    m = [
      le(n),
      s ? le(s) : "0x",
      c ? le(c) : "0x",
      a ? le(a) : "0x",
      r ? le(r) : "0x",
      l ?? "0x",
      f ?? "0x",
      h ? le(h) : "0x",
      o ?? "0x",
      i ? le(i) : "0x",
      p ?? "0x",
      Za(u),
    ];
  return (
    t && m.push(t.v === 27n ? "0x" : le(1), mn(t.r), mn(t.s)),
    ri(["0x7c", Os(m)])
  );
}
function tk(e, t) {
  rk(e);
  const {
      chainId: n,
      gas: r,
      nonce: s,
      to: o,
      value: i,
      maxFeePerGas: a,
      maxPriorityFeePerGas: c,
      accessList: u,
      feeCurrency: l,
      data: f,
    } = e,
    h = [
      le(n),
      s ? le(s) : "0x",
      c ? le(c) : "0x",
      a ? le(a) : "0x",
      r ? le(r) : "0x",
      o ?? "0x",
      i ? le(i) : "0x",
      f ?? "0x",
      Za(u),
      l,
    ];
  return (
    t && h.push(t.v === 27n ? "0x" : le(1), mn(t.r), mn(t.s)),
    ri(["0x7b", Os(h)])
  );
}
const H0 = 2n ** 256n - 1n;
function nk(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: s,
    to: o,
    feeCurrency: i,
    gatewayFee: a,
    gatewayFeeRecipient: c,
  } = e;
  if (t <= 0) throw new Ts({ chainId: t });
  if (o && !Lt(o)) throw new dn({ address: o });
  if (r)
    throw new Ie("`gasPrice` is not a valid CIP-42 Transaction attribute.");
  if (st(s) && s > H0) throw new Ds({ maxFeePerGas: s });
  if (st(n) && st(s) && n > s)
    throw new Ya({ maxFeePerGas: s, maxPriorityFeePerGas: n });
  if ((st(a) && Qn(c)) || (st(c) && Qn(a)))
    throw new Ie(
      "`gatewayFee` and `gatewayFeeRecipient` must be provided together."
    );
  if (st(i) && !Lt(i))
    throw new Ie(
      "`feeCurrency` MUST be a token address for CIP-42 transactions."
    );
  if (st(c) && !Lt(c)) throw new dn(c);
  if (Qn(i) && Qn(c))
    throw new Ie(
      "Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions."
    );
}
function rk(e) {
  const {
    chainId: t,
    maxPriorityFeePerGas: n,
    gasPrice: r,
    maxFeePerGas: s,
    to: o,
    feeCurrency: i,
  } = e;
  if (t <= 0) throw new Ts({ chainId: t });
  if (o && !Lt(o)) throw new dn({ address: o });
  if (r)
    throw new Ie("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (st(s) && s > H0) throw new Ds({ maxFeePerGas: s });
  if (st(n) && st(s) && n > s)
    throw new Ya({ maxFeePerGas: s, maxPriorityFeePerGas: n });
  if (st(i) && !Lt(i))
    throw new Ie(
      "`feeCurrency` MUST be a token address for CIP-64 transactions."
    );
  if (Qn(i))
    throw new Ie("`feeCurrency` must be provided for CIP-64 transactions.");
}
const sk = P(
    {
      id: 42220,
      name: "Celo",
      network: "celo",
      nativeCurrency: { decimals: 18, name: "CELO", symbol: "CELO" },
      rpcUrls: {
        default: { http: ["https://forno.celo.org"] },
        infura: { http: ["https://celo-mainnet.infura.io/v3"] },
        public: { http: ["https://forno.celo.org"] },
      },
      blockExplorers: {
        default: {
          name: "Celo Explorer",
          url: "https://explorer.celo.org/mainnet",
        },
        etherscan: { name: "CeloScan", url: "https://celoscan.io" },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 13112599,
        },
      },
      testnet: !1,
    },
    { formatters: gf, serializers: yf }
  ),
  ok = P(
    {
      id: 44787,
      name: "Alfajores",
      network: "celo-alfajores",
      nativeCurrency: { decimals: 18, name: "CELO", symbol: "A-CELO" },
      rpcUrls: {
        default: { http: ["https://alfajores-forno.celo-testnet.org"] },
        infura: { http: ["https://celo-alfajores.infura.io/v3"] },
        public: { http: ["https://alfajores-forno.celo-testnet.org"] },
      },
      blockExplorers: {
        default: {
          name: "Celo Explorer",
          url: "https://explorer.celo.org/alfajores",
        },
        etherscan: { name: "CeloScan", url: "https://alfajores.celoscan.io/" },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 14569001,
        },
      },
      testnet: !0,
    },
    { formatters: gf, serializers: yf }
  ),
  ik = P({
    id: 88888,
    name: "Chiliz Chain",
    network: "chiliz-chain",
    nativeCurrency: { decimals: 18, name: "CHZ", symbol: "CHZ" },
    rpcUrls: {
      default: {
        http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"],
      },
      public: {
        http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"],
      },
    },
    blockExplorers: {
      default: { name: "Chiliz Explorer", url: "https://scan.chiliz.com" },
    },
  }),
  ak = P(
    {
      id: 17323,
      name: "Cannoli",
      network: "celo-cannoli",
      nativeCurrency: { decimals: 18, name: "CELO", symbol: "C-CELO" },
      rpcUrls: {
        default: { http: ["https://forno.cannoli.celo-testnet.org"] },
        public: { http: ["https://forno.cannoli.celo-testnet.org"] },
      },
      blockExplorers: {
        default: {
          name: "Celo Explorer",
          url: "https://explorer.celo.org/cannoli",
        },
      },
      contracts: {
        multicall3: {
          address: "0x5Acb0aa8BF4E8Ff0d882Ee187140713C12BF9718",
          blockCreated: 87429,
        },
      },
      testnet: !0,
    },
    { formatters: gf, serializers: yf }
  ),
  ck = P({
    id: 61,
    name: "Ethereum Classic",
    network: "classic",
    nativeCurrency: { decimals: 18, name: "ETC", symbol: "ETC" },
    rpcUrls: {
      default: { http: ["https://etc.rivet.link"] },
      public: { http: ["https://etc.rivet.link"] },
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://blockscout.com/etc/mainnet",
      },
    },
  }),
  lk = P({
    id: 1030,
    name: "Conflux eSpace",
    network: "cfx-espace",
    nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://evm.confluxrpc.org"],
        webSocket: ["wss://evm.confluxrpc.org/ws"],
      },
      public: {
        http: ["https://evm.confluxrpc.org"],
        webSocket: ["wss://evm.confluxrpc.org/ws"],
      },
    },
    blockExplorers: {
      default: { name: "ConfluxScan", url: "https://evm.confluxscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
        blockCreated: 68602935,
      },
    },
  }),
  uk = P({
    id: 71,
    name: "Conflux eSpace Testnet",
    network: "cfx-espace-testnet",
    testnet: !0,
    nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://evmtestnet.confluxrpc.org"],
        webSocket: ["wss://evmtestnet.confluxrpc.org/ws"],
      },
      public: {
        http: ["https://evmtestnet.confluxrpc.org"],
        webSocket: ["wss://evmtestnet.confluxrpc.org/ws"],
      },
    },
    blockExplorers: {
      default: {
        name: "ConfluxScan",
        url: "https://evmtestnet.confluxscan.io",
      },
    },
    contracts: {
      multicall3: {
        address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
        blockCreated: 117499050,
      },
    },
  }),
  fk = P({
    id: 1116,
    name: "Core Dao",
    network: "coreDao",
    nativeCurrency: { decimals: 18, name: "Core", symbol: "CORE" },
    rpcUrls: {
      public: { http: ["https://rpc.coredao.org"] },
      default: { http: ["https://rpc.coredao.org"] },
    },
    blockExplorers: {
      default: { name: "CoreDao", url: "https://scan.coredao.org" },
      etherscan: { name: "CoreDao", url: "https://scan.coredao.org" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 11907934,
      },
    },
    testnet: !1,
  }),
  dk = P({
    id: 25,
    name: "Cronos Mainnet",
    network: "cronos",
    nativeCurrency: { decimals: 18, name: "Cronos", symbol: "CRO" },
    rpcUrls: {
      default: { http: ["https://evm.cronos.org"] },
      public: { http: ["https://evm.cronos.org"] },
    },
    blockExplorers: {
      default: { name: "Cronoscan", url: "https://cronoscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 1963112,
      },
    },
  }),
  hk = P({
    id: 338,
    name: "Cronos Testnet",
    network: "cronos-testnet",
    nativeCurrency: { decimals: 18, name: "CRO", symbol: "tCRO" },
    rpcUrls: {
      default: { http: ["https://evm-t3.cronos.org"] },
      public: { http: ["https://evm-t3.cronos.org"] },
    },
    blockExplorers: {
      default: {
        name: "Cronos Explorer",
        url: "https://cronos.org/explorer/testnet3",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 10191251,
      },
    },
    testnet: !0,
  }),
  pk = P({
    id: 3737,
    network: "crossbell",
    name: "Crossbell",
    nativeCurrency: { decimals: 18, name: "CSB", symbol: "CSB" },
    rpcUrls: {
      default: { http: ["https://rpc.crossbell.io"] },
      public: { http: ["https://rpc.crossbell.io"] },
    },
    blockExplorers: {
      default: { name: "CrossScan", url: "https://scan.crossbell.io" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 38246031,
      },
    },
  }),
  mk = P({
    id: 53935,
    name: "DFK Chain",
    network: "dfk",
    nativeCurrency: { decimals: 18, name: "Jewel", symbol: "JEWEL" },
    rpcUrls: {
      default: {
        http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
      },
      public: {
        http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
      },
    },
    blockExplorers: {
      etherscan: {
        name: "DFKSubnetScan",
        url: "https://subnets.avax.network/defi-kingdoms",
      },
      default: {
        name: "DFKSubnetScan",
        url: "https://subnets.avax.network/defi-kingdoms",
      },
    },
  }),
  bk = P({
    id: 2e3,
    name: "Dogechain",
    network: "dogechain",
    nativeCurrency: { decimals: 18, name: "Dogechain", symbol: "DC" },
    rpcUrls: {
      default: { http: ["https://rpc.dogechain.dog"] },
      public: { http: ["https://rpc.dogechain.dog"] },
    },
    blockExplorers: {
      etherscan: {
        name: "DogeChainExplorer",
        url: "https://explorer.dogechain.dog",
      },
      default: {
        name: "DogeChainExplorer",
        url: "https://explorer.dogechain.dog",
      },
    },
  }),
  gk = P({
    id: 2021,
    name: "Edgeware EdgeEVM Mainnet",
    network: "edgeware",
    nativeCurrency: { decimals: 18, name: "Edgeware", symbol: "EDG" },
    rpcUrls: {
      default: { http: ["https://edgeware-evm.jelliedowl.net"] },
      public: { http: ["https://edgeware-evm.jelliedowl.net"] },
    },
    blockExplorers: {
      etherscan: {
        name: "Edgscan by Bharathcoorg",
        url: "https://edgscan.live",
      },
      default: { name: "Edgscan by Bharathcoorg", url: "https://edgscan.live" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 18117872,
      },
    },
  }),
  yk = P({
    id: 2022,
    name: "Beresheet BereEVM Testnet",
    network: "edgewareTestnet",
    nativeCurrency: { decimals: 18, name: "Testnet EDG", symbol: "tEDG" },
    rpcUrls: {
      default: { http: ["https://beresheet-evm.jelliedowl.net"] },
      public: { http: ["https://beresheet-evm.jelliedowl.net"] },
    },
    blockExplorers: {
      etherscan: {
        name: "Edgscan by Bharathcoorg",
        url: "https://testnet.edgscan.live",
      },
      default: {
        name: "Edgscan by Bharathcoorg",
        url: "https://testnet.edgscan.live",
      },
    },
  }),
  wk = P({
    id: 17777,
    name: "EOS EVM",
    network: "eos",
    nativeCurrency: { decimals: 18, name: "EOS", symbol: "EOS" },
    rpcUrls: {
      default: { http: ["https://api.evm.eosnetwork.com"] },
      public: { http: ["https://api.evm.eosnetwork.com"] },
    },
    blockExplorers: {
      etherscan: {
        name: "EOS EVM Explorer",
        url: "https://explorer.evm.eosnetwork.com",
      },
      default: {
        name: "EOS EVM Explorer",
        url: "https://explorer.evm.eosnetwork.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 7943933,
      },
    },
  }),
  vk = P({
    id: 15557,
    name: "EOS EVM Testnet",
    network: "eos",
    nativeCurrency: { decimals: 18, name: "EOS", symbol: "EOS" },
    rpcUrls: {
      default: { http: ["https://api.testnet.evm.eosnetwork.com"] },
      public: { http: ["https://api.testnet.evm.eosnetwork.com"] },
    },
    blockExplorers: {
      etherscan: {
        name: "EOS EVM Testnet Explorer",
        url: "https://explorer.testnet.evm.eosnetwork.com",
      },
      default: {
        name: "EOS EVM Testnet Explorer",
        url: "https://explorer.testnet.evm.eosnetwork.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 9067940,
      },
    },
    testnet: !0,
  }),
  Ek = P({
    id: 9001,
    name: "Evmos",
    network: "evmos",
    nativeCurrency: { decimals: 18, name: "Evmos", symbol: "EVMOS" },
    rpcUrls: {
      default: { http: ["https://eth.bd.evmos.org:8545"] },
      public: { http: ["https://eth.bd.evmos.org:8545"] },
    },
    blockExplorers: {
      default: { name: "Evmos Block Explorer", url: "https://escan.live" },
    },
  }),
  Ck = P({
    id: 9e3,
    name: "Evmos Testnet",
    network: "evmos-testnet",
    nativeCurrency: { decimals: 18, name: "Evmos", symbol: "EVMOS" },
    rpcUrls: {
      default: { http: ["https://eth.bd.evmos.dev:8545"] },
      public: { http: ["https://eth.bd.evmos.dev:8545"] },
    },
    blockExplorers: {
      default: {
        name: "Evmos Testnet Block Explorer",
        url: "https://evm.evmos.dev/",
      },
    },
  }),
  xk = P({
    id: 1994,
    name: "Ekta",
    network: "ekta",
    nativeCurrency: { decimals: 18, name: "EKTA", symbol: "EKTA" },
    rpcUrls: {
      public: { http: ["https://main.ekta.io"] },
      default: { http: ["https://main.ekta.io"] },
    },
    blockExplorers: {
      default: { name: "Ektascan", url: "https://ektascan.io" },
    },
  }),
  _k = P({
    id: 1004,
    name: "Ekta Testnet",
    network: "ekta-testnet",
    nativeCurrency: { decimals: 18, name: "EKTA", symbol: "EKTA" },
    rpcUrls: {
      public: { http: ["https://test.ekta.io:8545"] },
      default: { http: ["https://test.ekta.io:8545"] },
    },
    blockExplorers: {
      default: { name: "Test Ektascan", url: "https://test.ektascan.io" },
    },
    testnet: !0,
  }),
  kk = P({
    id: 250,
    name: "Fantom",
    network: "fantom",
    nativeCurrency: { decimals: 18, name: "Fantom", symbol: "FTM" },
    rpcUrls: {
      default: { http: ["https://rpc.ankr.com/fantom"] },
      public: { http: ["https://rpc.ankr.com/fantom"] },
    },
    blockExplorers: {
      etherscan: { name: "FTMScan", url: "https://ftmscan.com" },
      default: { name: "FTMScan", url: "https://ftmscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 33001987,
      },
    },
  }),
  Sk = P({
    id: 64240,
    name: "Fantom Sonic Open Testnet",
    network: "fantom-sonic-testnet",
    nativeCurrency: { decimals: 18, name: "Fantom", symbol: "FTM" },
    rpcUrls: {
      default: { http: ["https://rpcapi.sonic.fantom.network"] },
      public: { http: ["https://rpcapi.sonic.fantom.network"] },
    },
    blockExplorers: {
      default: {
        name: "Fantom Sonic Open Testnet Explorer",
        url: "https://public-sonic.fantom.network",
      },
    },
    testnet: !0,
  }),
  Ak = P({
    id: 4002,
    name: "Fantom Testnet",
    network: "fantom-testnet",
    nativeCurrency: { decimals: 18, name: "Fantom", symbol: "FTM" },
    rpcUrls: {
      default: { http: ["https://rpc.testnet.fantom.network"] },
      public: { http: ["https://rpc.testnet.fantom.network"] },
    },
    blockExplorers: {
      etherscan: { name: "FTMScan", url: "https://testnet.ftmscan.com" },
      default: { name: "FTMScan", url: "https://testnet.ftmscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 8328688,
      },
    },
  }),
  Pk = P({
    id: 12306,
    name: "Fibo Chain",
    network: "fibochain",
    nativeCurrency: { decimals: 18, name: "fibo", symbol: "FIBO" },
    rpcUrls: {
      default: { http: ["https://network.hzroc.art"] },
      public: { http: ["https://network.hzroc.art"] },
    },
    blockExplorers: {
      default: { name: "FiboScan", url: "https://scan.fibochain.org" },
    },
  }),
  Tk = P({
    id: 314,
    name: "Filecoin Mainnet",
    network: "filecoin-mainnet",
    nativeCurrency: { decimals: 18, name: "filecoin", symbol: "FIL" },
    rpcUrls: {
      default: { http: ["https://api.node.glif.io/rpc/v1"] },
      public: { http: ["https://api.node.glif.io/rpc/v1"] },
    },
    blockExplorers: {
      default: { name: "Filfox", url: "https://filfox.info/en" },
      filscan: { name: "Filscan", url: "https://filscan.io" },
      filscout: { name: "Filscout", url: "https://filscout.io/en" },
      glif: { name: "Glif", url: "https://explorer.glif.io" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 3328594,
      },
    },
  }),
  Dk = P({
    id: 314159,
    name: "Filecoin Calibration",
    network: "filecoin-calibration",
    nativeCurrency: { decimals: 18, name: "testnet filecoin", symbol: "tFIL" },
    rpcUrls: {
      default: { http: ["https://api.calibration.node.glif.io/rpc/v1"] },
      public: { http: ["https://api.calibration.node.glif.io/rpc/v1"] },
    },
    blockExplorers: {
      default: { name: "Filscan", url: "https://calibration.filscan.io" },
    },
  }),
  Ok = P({
    id: 3141,
    name: "Filecoin Hyperspace",
    network: "filecoin-hyperspace",
    nativeCurrency: { decimals: 18, name: "testnet filecoin", symbol: "tFIL" },
    rpcUrls: {
      default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
      public: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
    },
    blockExplorers: {
      default: { name: "Filfox", url: "https://hyperspace.filfox.info/en" },
      filscan: { name: "Filscan", url: "https://hyperspace.filscan.io" },
    },
  }),
  Ik = P({
    id: 14,
    name: "Flare Mainnet",
    network: "flare-mainnet",
    nativeCurrency: { decimals: 18, name: "flare", symbol: "FLR" },
    rpcUrls: {
      default: { http: ["https://flare-api.flare.network/ext/C/rpc"] },
      public: { http: ["https://flare-api.flare.network/ext/C/rpc"] },
    },
    blockExplorers: {
      default: {
        name: "Flare Explorer",
        url: "https://flare-explorer.flare.network",
      },
    },
  }),
  $k = P({
    id: 114,
    name: "Coston2",
    network: "coston2",
    nativeCurrency: { decimals: 18, name: "coston2flare", symbol: "C2FLR" },
    rpcUrls: {
      default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] },
      public: { http: ["https://coston2-api.flare.network/ext/C/rpc"] },
    },
    blockExplorers: {
      default: {
        name: "Coston2 Explorer",
        url: "https://coston2-explorer.flare.network",
      },
    },
    testnet: !0,
  }),
  Nk = P({
    id: 31337,
    name: "Foundry",
    network: "foundry",
    nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
    rpcUrls: {
      default: {
        http: ["http://127.0.0.1:8545"],
        webSocket: ["ws://127.0.0.1:8545"],
      },
      public: {
        http: ["http://127.0.0.1:8545"],
        webSocket: ["ws://127.0.0.1:8545"],
      },
    },
  }),
  Mk = P({
    id: 122,
    name: "Fuse",
    network: "fuse",
    nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.fuse.io"] },
      public: { http: ["https://rpc.fuse.io"] },
    },
    blockExplorers: {
      default: { name: "Fuse Explorer", url: "https://explorer.fuse.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 16146628,
      },
    },
  }),
  Uk = P({
    id: 123,
    name: "Fuse Sparknet",
    network: "fuse",
    nativeCurrency: { name: "Spark", symbol: "SPARK", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.fusespark.io"] },
      public: { http: ["https://rpc.fusespark.io"] },
    },
    blockExplorers: {
      default: {
        name: "Sparkent Explorer",
        url: "https://explorer.fusespark.io",
      },
    },
  }),
  Fk = P({
    id: 4689,
    name: "IoTeX",
    network: "iotex",
    nativeCurrency: { decimals: 18, name: "IoTeX", symbol: "IOTX" },
    rpcUrls: {
      default: {
        http: ["https://babel-api.mainnet.iotex.io"],
        webSocket: ["wss://babel-api.mainnet.iotex.io"],
      },
      public: {
        http: ["https://babel-api.mainnet.iotex.io"],
        webSocket: ["wss://babel-api.mainnet.iotex.io"],
      },
    },
    blockExplorers: {
      default: { name: "IoTeXScan", url: "https://iotexscan.io" },
    },
  }),
  Bk = P({
    id: 4690,
    name: "IoTeX Testnet",
    network: "iotex-testnet",
    nativeCurrency: { decimals: 18, name: "IoTeX", symbol: "IOTX" },
    rpcUrls: {
      default: {
        http: ["https://babel-api.testnet.iotex.io"],
        webSocket: ["wss://babel-api.testnet.iotex.io"],
      },
      public: {
        http: ["https://babel-api.testnet.iotex.io"],
        webSocket: ["wss://babel-api.testnet.iotex.io"],
      },
    },
    blockExplorers: {
      default: { name: "IoTeXScan", url: "https://testnet.iotexscan.io" },
    },
  }),
  Lk = P({
    id: 8899,
    name: "JIBCHAIN L1",
    network: "jbc",
    nativeCurrency: { name: "JBC", symbol: "JBC", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc-l1.jibchain.net"] },
      public: { http: ["https://rpc-l1.jibchain.net"] },
    },
    blockExplorers: {
      default: { name: "Blockscout", url: "https://exp-l1.jibchain.net" },
    },
    contracts: {
      multicall3: {
        address: "0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC",
        blockCreated: 2299048,
      },
    },
    testnet: !1,
  }),
  Rk = P({
    id: 686,
    name: "Karura",
    network: "karura",
    nativeCurrency: { name: "Karura", symbol: "KAR", decimals: 18 },
    rpcUrls: {
      public: {
        http: ["https://eth-rpc-karura.aca-api.network"],
        webSocket: ["wss://eth-rpc-karura.aca-api.network"],
      },
      default: {
        http: ["https://eth-rpc-karura.aca-api.network"],
        webSocket: ["wss://eth-rpc-karura.aca-api.network"],
      },
    },
    blockExplorers: {
      default: {
        name: "Karura Blockscout",
        url: "https://blockscout.karura.network",
      },
    },
    testnet: !1,
  }),
  jk = P({
    id: 1663,
    name: "Horizen Gobi Testnet",
    network: "gobi",
    nativeCurrency: { decimals: 18, name: "Test ZEN", symbol: "tZEN" },
    rpcUrls: {
      public: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] },
      default: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] },
    },
    blockExplorers: {
      default: {
        name: "Gobi Explorer",
        url: "https://gobi-explorer.horizen.io",
      },
    },
    contracts: {},
    testnet: !0,
  }),
  Hk = P({
    id: 5,
    network: "goerli",
    name: "Goerli",
    nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://eth-goerli.g.alchemy.com/v2"],
        webSocket: ["wss://eth-goerli.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://goerli.infura.io/v3"],
        webSocket: ["wss://goerli.infura.io/ws/v3"],
      },
      default: { http: ["https://rpc.ankr.com/eth_goerli"] },
      public: { http: ["https://rpc.ankr.com/eth_goerli"] },
    },
    blockExplorers: {
      etherscan: { name: "Etherscan", url: "https://goerli.etherscan.io" },
      default: { name: "Etherscan", url: "https://goerli.etherscan.io" },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      ensUniversalResolver: {
        address: "0x56522D00C410a43BFfDF00a9A569489297385790",
        blockCreated: 8765204,
      },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 6507670,
      },
    },
    testnet: !0,
  }),
  zk = P({
    id: 100,
    name: "Gnosis",
    network: "gnosis",
    nativeCurrency: { decimals: 18, name: "Gnosis", symbol: "xDAI" },
    rpcUrls: {
      default: {
        http: ["https://rpc.gnosischain.com"],
        webSocket: ["wss://rpc.gnosischain.com/wss"],
      },
      public: {
        http: ["https://rpc.gnosischain.com"],
        webSocket: ["wss://rpc.gnosischain.com/wss"],
      },
    },
    blockExplorers: {
      etherscan: { name: "Gnosisscan", url: "https://gnosisscan.io" },
      default: {
        name: "Gnosis Chain Explorer",
        url: "https://blockscout.com/xdai/mainnet",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 21022491,
      },
    },
  }),
  Wk = P({
    id: 10200,
    name: "Gnosis Chiado",
    network: "chiado",
    nativeCurrency: { decimals: 18, name: "Gnosis", symbol: "xDAI" },
    rpcUrls: {
      default: {
        http: ["https://rpc.chiadochain.net"],
        webSocket: ["wss://rpc.chiadochain.net/wss"],
      },
      public: {
        http: ["https://rpc.chiadochain.net"],
        webSocket: ["wss://rpc.chiadochain.net/wss"],
      },
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://blockscout.chiadochain.net",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 4967313,
      },
    },
    testnet: !0,
  }),
  qk = P({
    id: 31337,
    name: "Hardhat",
    network: "hardhat",
    nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
    rpcUrls: {
      default: { http: ["http://127.0.0.1:8545"] },
      public: { http: ["http://127.0.0.1:8545"] },
    },
  }),
  Gk = P({
    id: 16666e5,
    name: "Harmony One",
    network: "harmony",
    nativeCurrency: { name: "Harmony", symbol: "ONE", decimals: 18 },
    rpcUrls: {
      public: { http: ["https://rpc.ankr.com/harmony"] },
      default: { http: ["https://rpc.ankr.com/harmony"] },
    },
    blockExplorers: {
      default: {
        name: "Harmony Explorer",
        url: "https://explorer.harmony.one",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 24185753,
      },
    },
  }),
  Vk = P({
    id: 11235,
    name: "HAQQ Mainnet",
    network: "haqq-mainnet",
    nativeCurrency: { decimals: 18, name: "Islamic Coin", symbol: "ISLM" },
    rpcUrls: {
      default: { http: ["https://rpc.eth.haqq.network"] },
      public: { http: ["https://rpc.eth.haqq.network"] },
    },
    blockExplorers: {
      default: { name: "HAQQ Explorer", url: "https://explorer.haqq.network" },
    },
  }),
  Kk = P({
    id: 54211,
    name: "HAQQ Testedge 2",
    network: "haqq-testedge-2",
    nativeCurrency: { decimals: 18, name: "Islamic Coin", symbol: "ISLMT" },
    rpcUrls: {
      default: { http: ["https://rpc.eth.testedge2.haqq.network"] },
      public: { http: ["https://rpc.eth.testedge2.haqq.network"] },
    },
    blockExplorers: {
      default: {
        name: "HAQQ Explorer",
        url: "https://explorer.testedge2.haqq.network",
      },
    },
  }),
  Xk = P({
    id: 17e3,
    network: "holesky",
    name: "Holesky",
    nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://ethereum-holesky.publicnode.com"] },
      public: { http: ["https://ethereum-holesky.publicnode.com"] },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 77,
      },
    },
    testnet: !0,
  }),
  Yk = P({
    id: 2222,
    name: "Kava EVM",
    network: "kava-mainnet",
    nativeCurrency: { name: "Kava", symbol: "KAVA", decimals: 18 },
    rpcUrls: {
      public: { http: ["https://evm.kava.io"] },
      default: { http: ["https://evm.kava.io"] },
    },
    blockExplorers: {
      default: { name: "Kava EVM Explorer", url: "https://kavascan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 3661165,
      },
    },
    testnet: !1,
  }),
  Zk = P({
    id: 2221,
    name: "Kava EVM Testnet",
    network: "kava-testnet",
    nativeCurrency: { name: "Kava", symbol: "KAVA", decimals: 18 },
    rpcUrls: {
      public: { http: ["https://evm.testnet.kava.io"] },
      default: { http: ["https://evm.testnet.kava.io"] },
    },
    blockExplorers: {
      default: {
        name: "Kava EVM Testnet Explorer",
        url: "https://testnet.kavascan.com/",
      },
    },
    contracts: {
      multicall3: {
        address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
        blockCreated: 7242179,
      },
    },
    testnet: !0,
  }),
  Jk = P({
    id: 8217,
    name: "Klaytn",
    network: "klaytn",
    nativeCurrency: { decimals: 18, name: "Klaytn", symbol: "KLAY" },
    rpcUrls: {
      default: { http: ["https://public-en-cypress.klaytn.net"] },
      public: { http: ["https://public-en-cypress.klaytn.net"] },
    },
    blockExplorers: {
      etherscan: { name: "KlaytnScope", url: "https://scope.klaytn.com" },
      default: { name: "KlaytnScope", url: "https://scope.klaytn.com" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 96002415,
      },
    },
  }),
  Qk = P({
    id: 1001,
    name: "Klaytn Baobab Testnet",
    network: "klaytn-baobab",
    nativeCurrency: { decimals: 18, name: "Baobab Klaytn", symbol: "KLAY" },
    rpcUrls: {
      default: { http: ["https://public-en-baobab.klaytn.net"] },
      public: { http: ["https://public-en-baobab.klaytn.net"] },
    },
    blockExplorers: {
      etherscan: { name: "KlaytnScope", url: "https://baobab.klaytnscope.com" },
      default: { name: "KlaytnScope", url: "https://baobab.klaytnscope.com" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 123390593,
      },
    },
    testnet: !0,
  }),
  eS = P({
    id: 255,
    network: "kroma",
    name: "Kroma",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://api.kroma.network"] },
      public: { http: ["https://api.kroma.network"] },
    },
    blockExplorers: {
      default: {
        name: "Kroma Explorer",
        url: "https://blockscout.kroma.network",
      },
    },
    testnet: !1,
  }),
  tS = P({
    id: 2358,
    network: "kroma-sepolia",
    name: "Kroma Sepolia",
    nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://api.sepolia.kroma.network"] },
      public: { http: ["https://api.sepolia.kroma.network"] },
    },
    blockExplorers: {
      default: {
        name: "Kroma Sepolia Explorer",
        url: "https://blockscout.sepolia.kroma.network",
      },
    },
    testnet: !0,
  }),
  nS = P({
    id: 59144,
    name: "Linea Mainnet",
    network: "linea-mainnet",
    nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      infura: {
        http: ["https://linea-mainnet.infura.io/v3"],
        webSocket: ["wss://linea-mainnet.infura.io/ws/v3"],
      },
      default: {
        http: ["https://rpc.linea.build"],
        webSocket: ["wss://rpc.linea.build"],
      },
      public: {
        http: ["https://rpc.linea.build"],
        webSocket: ["wss://rpc.linea.build"],
      },
    },
    blockExplorers: {
      default: { name: "Etherscan", url: "https://lineascan.build" },
      etherscan: { name: "Etherscan", url: "https://lineascan.build" },
      blockscout: { name: "Blockscout", url: "https://explorer.linea.build" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 42,
      },
    },
    testnet: !1,
  }),
  rS = P({
    id: 59140,
    name: "Linea Goerli Testnet",
    network: "linea-testnet",
    nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      infura: {
        http: ["https://linea-goerli.infura.io/v3"],
        webSocket: ["wss://linea-goerli.infura.io/ws/v3"],
      },
      default: {
        http: ["https://rpc.goerli.linea.build"],
        webSocket: ["wss://rpc.goerli.linea.build"],
      },
      public: {
        http: ["https://rpc.goerli.linea.build"],
        webSocket: ["wss://rpc.goerli.linea.build"],
      },
    },
    blockExplorers: {
      default: { name: "Etherscan", url: "https://goerli.lineascan.build" },
      etherscan: { name: "Etherscan", url: "https://goerli.lineascan.build" },
      blockscout: {
        name: "Blockscout",
        url: "https://explorer.goerli.linea.build",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 498623,
      },
    },
    testnet: !0,
  }),
  sS = P({
    id: 1337,
    name: "Localhost",
    network: "localhost",
    nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
    rpcUrls: {
      default: { http: ["http://127.0.0.1:8545"] },
      public: { http: ["http://127.0.0.1:8545"] },
    },
  }),
  oS = P({
    id: 42,
    network: "lukso",
    name: "LUKSO",
    nativeCurrency: { name: "LUKSO", symbol: "LYX", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://rpc.mainnet.lukso.network"],
        webSocket: ["wss://ws-rpc.mainnet.lukso.network"],
      },
      public: {
        http: ["https://rpc.mainnet.lukso.network"],
        webSocket: ["wss://ws-rpc.mainnet.lukso.network"],
      },
    },
    blockExplorers: {
      default: {
        name: "LUKSO Mainnet Explorer",
        url: "https://explorer.execution.mainnet.lukso.network",
      },
    },
  }),
  z0 = P({
    id: 1,
    network: "homestead",
    name: "Ethereum",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://eth-mainnet.g.alchemy.com/v2"],
        webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://mainnet.infura.io/v3"],
        webSocket: ["wss://mainnet.infura.io/ws/v3"],
      },
      default: { http: ["https://cloudflare-eth.com"] },
      public: { http: ["https://cloudflare-eth.com"] },
    },
    blockExplorers: {
      etherscan: { name: "Etherscan", url: "https://etherscan.io" },
      default: { name: "Etherscan", url: "https://etherscan.io" },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      ensUniversalResolver: {
        address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
        blockCreated: 16966585,
      },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 14353601,
      },
    },
  }),
  iS = P({
    id: 595,
    name: "Mandala TC9",
    network: "mandala",
    nativeCurrency: { name: "Mandala", symbol: "mACA", decimals: 18 },
    rpcUrls: {
      public: {
        http: ["https://eth-rpc-tc9.aca-staging.network"],
        webSocket: ["wss://eth-rpc-tc9.aca-staging.network"],
      },
      default: {
        http: ["https://eth-rpc-tc9.aca-staging.network"],
        webSocket: ["wss://eth-rpc-tc9.aca-staging.network"],
      },
    },
    blockExplorers: {
      default: {
        name: "Mandala Blockscout",
        url: "https://blockscout.mandala.aca-staging.network",
      },
    },
    testnet: !0,
  }),
  aS = P({
    id: 169,
    name: "Manta Pacific Mainnet",
    network: "manta",
    nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
    rpcUrls: {
      default: { http: ["https://pacific-rpc.manta.network/http"] },
      public: { http: ["https://pacific-rpc.manta.network/http"] },
    },
    blockExplorers: {
      etherscan: {
        name: "Manta Explorer",
        url: "https://pacific-explorer.manta.network",
      },
      default: {
        name: "Manta Explorer",
        url: "https://pacific-explorer.manta.network",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 332890,
      },
    },
  }),
  cS = P({
    id: 3441005,
    name: "Manta Pacific Testnet",
    network: "manta-testnet",
    nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
    rpcUrls: {
      default: { http: ["https://manta-testnet.calderachain.xyz/http"] },
      public: { http: ["https://manta-testnet.calderachain.xyz/http"] },
    },
    blockExplorers: {
      etherscan: {
        name: "Manta Testnet Explorer",
        url: "https://pacific-explorer.testnet.manta.network",
      },
      default: {
        name: "Manta Testnet Explorer",
        url: "https://pacific-explorer.testnet.manta.network",
      },
    },
    contracts: {
      multicall3: {
        address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
        blockCreated: 419915,
      },
    },
    testnet: !0,
  }),
  lS = P({
    id: 5e3,
    name: "Mantle",
    network: "mantle",
    nativeCurrency: { decimals: 18, name: "MNT", symbol: "MNT" },
    rpcUrls: {
      default: { http: ["https://rpc.mantle.xyz"] },
      public: { http: ["https://rpc.mantle.xyz"] },
    },
    blockExplorers: {
      etherscan: {
        name: "Mantle Explorer",
        url: "https://explorer.mantle.xyz",
      },
      default: { name: "Mantle Explorer", url: "https://explorer.mantle.xyz" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 304717,
      },
    },
  }),
  uS = P({
    id: 5001,
    name: "Mantle Testnet",
    network: "mantle",
    nativeCurrency: { decimals: 18, name: "MNT", symbol: "MNT" },
    rpcUrls: {
      default: { http: ["https://rpc.testnet.mantle.xyz"] },
      public: { http: ["https://rpc.testnet.mantle.xyz"] },
    },
    blockExplorers: {
      etherscan: {
        name: "Mantle Testnet Explorer",
        url: "https://explorer.testnet.mantle.xyz",
      },
      default: {
        name: "Mantle Testnet Explorer",
        url: "https://explorer.testnet.mantle.xyz",
      },
    },
    testnet: !0,
  }),
  fS = P({
    id: 82,
    name: "Meter",
    network: "meter",
    nativeCurrency: { decimals: 18, name: "MTR", symbol: "MTR" },
    rpcUrls: {
      default: { http: ["https://rpc.meter.io"] },
      public: { http: ["https://rpc.meter.io"] },
    },
    blockExplorers: {
      default: { name: "MeterScan", url: "https://scan.meter.io" },
    },
  }),
  dS = P({
    id: 83,
    name: "Meter Testnet",
    network: "meter-testnet",
    nativeCurrency: { decimals: 18, name: "MTR", symbol: "MTR" },
    rpcUrls: {
      default: { http: ["https://rpctest.meter.io"] },
      public: { http: ["https://rpctest.meter.io"] },
    },
    blockExplorers: {
      default: {
        name: "MeterTestnetScan",
        url: "https://scan-warringstakes.meter.io",
      },
    },
  }),
  hS = P({
    id: 1088,
    name: "Metis",
    network: "andromeda",
    nativeCurrency: { decimals: 18, name: "Metis", symbol: "METIS" },
    rpcUrls: {
      default: { http: ["https://andromeda.metis.io/?owner=1088"] },
      public: { http: ["https://andromeda.metis.io/?owner=1088"] },
    },
    blockExplorers: {
      default: {
        name: "Andromeda Explorer",
        url: "https://andromeda-explorer.metis.io",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 2338552,
      },
    },
  }),
  pS = P({
    id: 599,
    name: "Metis Goerli",
    network: "metis-goerli",
    nativeCurrency: { decimals: 18, name: "Metis Goerli", symbol: "METIS" },
    rpcUrls: {
      default: { http: ["https://goerli.gateway.metisdevops.link"] },
      public: { http: ["https://goerli.gateway.metisdevops.link"] },
    },
    blockExplorers: {
      default: {
        name: "Metis Goerli Explorer",
        url: "https://goerli.explorer.metisdevops.link",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 1006207,
      },
    },
  }),
  mS = P({
    id: 7518,
    network: "MEVerse",
    name: "MEVerse Chain Mainnet",
    nativeCurrency: { decimals: 18, name: "MEVerse", symbol: "MEV" },
    rpcUrls: {
      default: { http: ["https://rpc.meversemainnet.io"] },
      public: { http: ["https://rpc.meversemainnet.io"] },
    },
    blockExplorers: {
      default: { name: "Explorer", url: "https://www.meversescan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 86881340,
      },
    },
  }),
  bS = P({
    id: 4759,
    network: "MEVerse Testnet",
    name: "MEVerse Chain Testnet",
    nativeCurrency: { decimals: 18, name: "MEVerse", symbol: "MEV" },
    rpcUrls: {
      default: { http: ["https://rpc.meversetestnet.io"] },
      public: { http: ["https://rpc.meversetestnet.io"] },
    },
    blockExplorers: {
      default: { name: "Explorer", url: "https://testnet.meversescan.io/" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 64371115,
      },
    },
    testnet: !0,
  }),
  gS = P({
    id: 919,
    name: "Mode Testnet",
    network: "mode-testnet",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://sepolia.mode.network"] },
      public: { http: ["https://sepolia.mode.network"] },
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://sepolia.explorer.mode.network",
      },
    },
    contracts: {
      multicall3: {
        address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
        blockCreated: 3019007,
      },
    },
    testnet: !0,
  }),
  yS = P({
    id: 1287,
    name: "Moonbase Alpha",
    network: "moonbase-alpha",
    nativeCurrency: { decimals: 18, name: "DEV", symbol: "DEV" },
    rpcUrls: {
      default: {
        http: ["https://rpc.api.moonbase.moonbeam.network"],
        webSocket: ["wss://wss.api.moonbase.moonbeam.network"],
      },
      public: {
        http: ["https://rpc.api.moonbase.moonbeam.network"],
        webSocket: ["wss://wss.api.moonbase.moonbeam.network"],
      },
    },
    blockExplorers: {
      default: { name: "Moonscan", url: "https://moonbase.moonscan.io" },
      etherscan: { name: "Moonscan", url: "https://moonbase.moonscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 1850686,
      },
    },
    testnet: !0,
  }),
  wS = P({
    id: 1284,
    name: "Moonbeam",
    network: "moonbeam",
    nativeCurrency: { decimals: 18, name: "GLMR", symbol: "GLMR" },
    rpcUrls: {
      public: {
        http: ["https://moonbeam.public.blastapi.io"],
        webSocket: ["wss://moonbeam.public.blastapi.io"],
      },
      default: {
        http: ["https://moonbeam.public.blastapi.io"],
        webSocket: ["wss://moonbeam.public.blastapi.io"],
      },
    },
    blockExplorers: {
      default: { name: "Moonscan", url: "https://moonscan.io" },
      etherscan: { name: "Moonscan", url: "https://moonscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 609002,
      },
    },
    testnet: !1,
  }),
  vS = P({
    id: 1281,
    name: "Moonbeam Development Node",
    network: "development",
    nativeCurrency: { decimals: 18, name: "DEV", symbol: "DEV" },
    rpcUrls: {
      default: {
        http: ["http://127.0.0.1:9944"],
        webSocket: ["wss://127.0.0.1:9944"],
      },
      public: {
        http: ["http://127.0.0.1:9944"],
        webSocket: ["wss://127.0.0.1:9944"],
      },
    },
  }),
  ES = P({
    id: 1285,
    name: "Moonriver",
    network: "moonriver",
    nativeCurrency: { decimals: 18, name: "MOVR", symbol: "MOVR" },
    rpcUrls: {
      public: {
        http: ["https://moonriver.public.blastapi.io"],
        webSocket: ["wss://moonriver.public.blastapi.io"],
      },
      default: {
        http: ["https://moonriver.public.blastapi.io"],
        webSocket: ["wss://moonriver.public.blastapi.io"],
      },
    },
    blockExplorers: {
      default: { name: "Moonscan", url: "https://moonriver.moonscan.io" },
      etherscan: { name: "Moonscan", url: "https://moonriver.moonscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 1597904,
      },
    },
    testnet: !1,
  }),
  CS = P({
    id: 245022926,
    network: "neonDevnet",
    name: "Neon EVM DevNet",
    nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://devnet.neonevm.org"] },
      public: { http: ["https://devnet.neonevm.org"] },
    },
    blockExplorers: {
      default: { name: "Neonscan", url: "https://devnet.neonscan.org" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 205206112,
      },
    },
    testnet: !0,
  }),
  xS = P({
    id: 245022934,
    network: "neonMainnet",
    name: "Neon EVM MainNet",
    nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://neon-proxy-mainnet.solana.p2p.org"] },
      public: { http: ["https://neon-proxy-mainnet.solana.p2p.org"] },
    },
    blockExplorers: {
      default: { name: "Neonscan", url: "https://neonscan.org" },
    },
    contracts: {},
    testnet: !1,
  }),
  _S = P({
    id: 4242,
    name: "Nexi",
    network: "nexi",
    nativeCurrency: { name: "Nexi", symbol: "NEXI", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.chain.nexi.technology"] },
      public: { http: ["https://rpc.chain.nexi.technology"] },
    },
    blockExplorers: {
      etherscan: { name: "NexiScan", url: "https://www.nexiscan.com" },
      default: { name: "NexiScan", url: "https://www.nexiscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
        blockCreated: 25770160,
      },
    },
  }),
  kS = P({
    id: 240,
    name: "Nexilix Smart Chain",
    network: "nexilix",
    nativeCurrency: { decimals: 18, name: "Nexilix", symbol: "NEXILIX" },
    rpcUrls: {
      default: { http: ["https://rpcurl.pos.nexilix.com"] },
      public: { http: ["https://rpcurl.pos.nexilix.com"] },
    },
    blockExplorers: {
      etherscan: { name: "NexilixScan", url: "https://scan.nexilix.com" },
      default: { name: "NexilixScan", url: "https://scan.nexilix.com" },
    },
    contracts: {
      multicall3: {
        address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
        blockCreated: 74448,
      },
    },
  }),
  SS = P({
    id: 248,
    name: "Oasys",
    network: "oasys",
    nativeCurrency: { name: "Oasys", symbol: "OAS", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.mainnet.oasys.games"] },
      public: { http: ["https://rpc.mainnet.oasys.games"] },
    },
    blockExplorers: {
      default: { name: "OasysScan", url: "https://scan.oasys.games" },
    },
  }),
  AS = P({
    id: 4090,
    network: "oasis-testnet",
    name: "Oasis Testnet",
    nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc1.oasis.bahamutchain.com"] },
      public: { http: ["https://rpc1.oasis.bahamutchain.com"] },
    },
    blockExplorers: {
      default: { name: "Ftnscan", url: "https://oasis.ftnscan.com" },
    },
    testnet: !0,
  }),
  PS = P({
    id: 66,
    name: "OKC",
    network: "okc",
    nativeCurrency: { decimals: 18, name: "OKT", symbol: "OKT" },
    rpcUrls: {
      default: { http: ["https://exchainrpc.okex.org"] },
      public: { http: ["https://exchainrpc.okex.org"] },
    },
    blockExplorers: {
      default: { name: "oklink", url: "https://www.oklink.com/okc" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 10364792,
      },
    },
  }),
  TS = P(
    {
      id: 10,
      name: "OP Mainnet",
      network: "optimism",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        alchemy: {
          http: ["https://opt-mainnet.g.alchemy.com/v2"],
          webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"],
        },
        infura: {
          http: ["https://optimism-mainnet.infura.io/v3"],
          webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"],
        },
        default: { http: ["https://mainnet.optimism.io"] },
        public: { http: ["https://mainnet.optimism.io"] },
      },
      blockExplorers: {
        etherscan: {
          name: "Etherscan",
          url: "https://optimistic.etherscan.io",
        },
        default: {
          name: "Optimism Explorer",
          url: "https://explorer.optimism.io",
        },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 4286263,
        },
      },
    },
    { formatters: tn }
  ),
  DS = P(
    {
      id: 420,
      name: "Optimism Goerli",
      network: "optimism-goerli",
      nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        alchemy: {
          http: ["https://opt-goerli.g.alchemy.com/v2"],
          webSocket: ["wss://opt-goerli.g.alchemy.com/v2"],
        },
        infura: {
          http: ["https://optimism-goerli.infura.io/v3"],
          webSocket: ["wss://optimism-goerli.infura.io/ws/v3"],
        },
        default: { http: ["https://goerli.optimism.io"] },
        public: { http: ["https://goerli.optimism.io"] },
      },
      blockExplorers: {
        etherscan: {
          name: "Etherscan",
          url: "https://goerli-optimism.etherscan.io",
        },
        default: {
          name: "Etherscan",
          url: "https://goerli-optimism.etherscan.io",
        },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 49461,
        },
      },
      testnet: !0,
    },
    { formatters: tn }
  ),
  OS = P(
    {
      id: 11155420,
      name: "Optimism Sepolia",
      network: "optimism-sepolia",
      nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        alchemy: {
          http: ["https://opt-sepolia.g.alchemy.com/v2"],
          webSocket: ["wss://opt-sepolia.g.alchemy.com/v2"],
        },
        default: { http: ["https://sepolia.optimism.io"] },
        public: { http: ["https://sepolia.optimism.io"] },
      },
      blockExplorers: {
        blockscout: {
          name: "Blockscout",
          url: "https://optimism-sepolia.blockscout.com",
        },
        default: {
          name: "Blockscout",
          url: "https://optimism-sepolia.blockscout.com",
        },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 1620204,
        },
      },
      testnet: !0,
    },
    { formatters: tn }
  ),
  IS = P({
    id: 204,
    name: "opBNB",
    network: "opBNB Mainnet",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
    rpcUrls: {
      public: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] },
      default: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] },
    },
    blockExplorers: {
      default: { name: "opbnbscan", url: "https://mainnet.opbnbscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 512881,
      },
    },
  }),
  $S = P({
    id: 5611,
    name: "opBNB Testnet",
    network: "opBNB Testnet",
    nativeCurrency: { decimals: 18, name: "tBNB", symbol: "tBNB" },
    rpcUrls: {
      public: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] },
      default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] },
    },
    blockExplorers: {
      default: { name: "opbnbscan", url: "https://testnet.opbnbscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 3705108,
      },
    },
    testnet: !0,
  }),
  NS = P(
    {
      id: 424,
      network: "pgn",
      name: "PGN",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: { http: ["https://rpc.publicgoods.network"] },
        public: { http: ["https://rpc.publicgoods.network"] },
      },
      blockExplorers: {
        default: {
          name: "PGN Explorer",
          url: "https://explorer.publicgoods.network",
        },
        blocksout: {
          name: "PGN Explorer",
          url: "https://explorer.publicgoods.network",
        },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 3380209,
        },
      },
    },
    { formatters: tn }
  ),
  MS = P(
    {
      id: 58008,
      network: "pgn-testnet",
      name: "PGN ",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: { http: ["https://sepolia.publicgoods.network"] },
        public: { http: ["https://sepolia.publicgoods.network"] },
      },
      blockExplorers: {
        default: {
          name: "PGN Testnet Explorer",
          url: "https://explorer.sepolia.publicgoods.network",
        },
        blocksout: {
          name: "PGN Testnet Explorer",
          url: "https://explorer.sepolia.publicgoods.network",
        },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 3754925,
        },
      },
      testnet: !0,
    },
    { formatters: tn }
  ),
  US = P({
    id: 242,
    name: "Plinga",
    network: "plinga",
    nativeCurrency: { name: "Plinga", symbol: "PLINGA", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpcurl.mainnet.plgchain.com"] },
      public: { http: ["https://rpcurl.mainnet.plgchain.com"] },
    },
    blockExplorers: {
      default: { name: "Plgscan", url: "https://www.plgscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0x0989576160f2e7092908BB9479631b901060b6e4",
        blockCreated: 204489,
      },
    },
  }),
  FS = P({
    id: 137,
    name: "Polygon",
    network: "matic",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://polygon-mainnet.g.alchemy.com/v2"],
        webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://polygon-mainnet.infura.io/v3"],
        webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"],
      },
      default: { http: ["https://polygon-rpc.com"] },
      public: { http: ["https://polygon-rpc.com"] },
    },
    blockExplorers: {
      etherscan: { name: "PolygonScan", url: "https://polygonscan.com" },
      default: { name: "PolygonScan", url: "https://polygonscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 25770160,
      },
    },
  }),
  BS = P({
    id: 80001,
    name: "Polygon Mumbai",
    network: "maticmum",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://polygon-mumbai.g.alchemy.com/v2"],
        webSocket: ["wss://polygon-mumbai.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://polygon-mumbai.infura.io/v3"],
        webSocket: ["wss://polygon-mumbai.infura.io/ws/v3"],
      },
      default: { http: ["https://rpc.ankr.com/polygon_mumbai"] },
      public: { http: ["https://rpc.ankr.com/polygon_mumbai"] },
    },
    blockExplorers: {
      etherscan: { name: "PolygonScan", url: "https://mumbai.polygonscan.com" },
      default: { name: "PolygonScan", url: "https://mumbai.polygonscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 25770160,
      },
    },
    testnet: !0,
  }),
  LS = P({
    id: 1442,
    name: "Polygon zkEVM Testnet",
    network: "polygon-zkevm-testnet",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.public.zkevm-test.net"] },
      public: { http: ["https://rpc.public.zkevm-test.net"] },
    },
    blockExplorers: {
      blockscout: {
        name: "Blockscout",
        url: "https://explorer.public.zkevm-test.net",
      },
      default: {
        name: "PolygonScan",
        url: "https://testnet-zkevm.polygonscan.com",
      },
    },
    testnet: !0,
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 525686,
      },
    },
  }),
  RS = P({
    id: 1101,
    name: "Polygon zkEVM",
    network: "polygon-zkevm",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://zkevm-rpc.com"] },
      public: { http: ["https://zkevm-rpc.com"] },
    },
    blockExplorers: {
      default: { name: "PolygonScan", url: "https://zkevm.polygonscan.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 57746,
      },
    },
  }),
  jS = P({
    id: 369,
    network: "pulsechain",
    name: "PulseChain",
    nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
    testnet: !1,
    rpcUrls: {
      default: {
        http: ["https://rpc.pulsechain.com"],
        webSocket: ["wss://ws.pulsechain.com"],
      },
      public: {
        http: ["https://rpc.pulsechain.com"],
        webSocket: ["wss://ws.pulsechain.com"],
      },
    },
    blockExplorers: {
      default: { name: "PulseScan", url: "https://scan.pulsechain.com" },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 14353601,
      },
    },
  }),
  HS = P({
    id: 943,
    network: "pulsechainV4",
    name: "PulseChain V4",
    testnet: !0,
    nativeCurrency: { name: "V4 Pulse", symbol: "v4PLS", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://rpc.v4.testnet.pulsechain.com"],
        webSocket: ["wss://ws.v4.testnet.pulsechain.com"],
      },
      public: {
        http: ["https://rpc.v4.testnet.pulsechain.com"],
        webSocket: ["wss://ws.v4.testnet.pulsechain.com"],
      },
    },
    blockExplorers: {
      default: {
        name: "PulseScan",
        url: "https://scan.v4.testnet.pulsechain.com",
      },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 14353601,
      },
    },
  }),
  zS = P({
    id: 35441,
    name: "Q Mainnet",
    network: "q-mainnet",
    nativeCurrency: { decimals: 18, name: "Q", symbol: "Q" },
    rpcUrls: {
      default: { http: ["https://rpc.q.org"] },
      public: { http: ["https://rpc.q.org"] },
    },
    blockExplorers: {
      default: { name: "Q Mainnet Explorer", url: "https://explorer.q.org" },
    },
  }),
  WS = P({
    id: 35443,
    name: "Q Testnet",
    network: "q-testnet",
    nativeCurrency: { decimals: 18, name: "Q", symbol: "Q" },
    rpcUrls: {
      default: { http: ["https://rpc.qtestnet.org"] },
      public: { http: ["https://rpc.qtestnet.org"] },
    },
    blockExplorers: {
      default: {
        name: "Q Testnet Explorer",
        url: "https://explorer.qtestnet.org",
      },
    },
    testnet: !0,
  }),
  qS = P({
    id: 570,
    name: "Rollux Mainnet",
    network: "rollux",
    nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
    rpcUrls: {
      default: {
        http: ["https://rpc.rollux.com"],
        webSocket: ["wss://rpc.rollux.com/wss"],
      },
      public: { http: ["https://rollux.public-rpc.com"] },
    },
    blockExplorers: {
      default: { name: "RolluxExplorer", url: "https://explorer.rollux.com" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 119222,
      },
    },
  }),
  GS = P({
    id: 57e3,
    name: "Rollux Testnet",
    network: "rollux-testnet",
    nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
    rpcUrls: {
      default: {
        http: ["https://rpc-tanenbaum.rollux.com/"],
        webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"],
      },
      public: { http: ["https://rpc-tanenbaum.rollux.com/"] },
    },
    blockExplorers: {
      default: {
        name: "RolluxTestnetExplorer",
        url: "https://rollux.tanenbaum.io",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 1813675,
      },
    },
  }),
  VS = P({
    id: 2020,
    name: "Ronin",
    network: "ronin",
    nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://api.roninchain.com/rpc"] },
      public: { http: ["https://api.roninchain.com/rpc"] },
    },
    blockExplorers: {
      default: { name: "Ronin Explorer", url: "https://app.roninchain.com" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 26023535,
      },
    },
  }),
  KS = P({
    id: 30,
    name: "Rootstock Mainnet",
    network: "rootstock",
    nativeCurrency: { decimals: 18, name: "Rootstock Bitcoin", symbol: "RBTC" },
    rpcUrls: {
      public: { http: ["https://public-node.rsk.co"] },
      default: { http: ["https://public-node.rsk.co"] },
    },
    blockExplorers: {
      blockscout: {
        name: "Blockscout",
        url: "https://rootstock.blockscout.com",
      },
      default: { name: "RSK Explorer", url: "https://explorer.rsk.co" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 4249540,
      },
    },
  }),
  XS = P({
    id: 2021,
    name: "Saigon Testnet",
    network: "saigon",
    nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://saigon-testnet.roninchain.com/rpc"] },
      public: { http: ["https://saigon-testnet.roninchain.com/rpc"] },
    },
    blockExplorers: {
      default: {
        name: "Saigon Explorer",
        url: "https://saigon-explorer.roninchain.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 18736871,
      },
    },
    testnet: !0,
  }),
  YS = P({
    id: 23294,
    name: "Oasis Sapphire",
    network: "sapphire",
    nativeCurrency: { name: "Sapphire Rose", symbol: "ROSE", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://sapphire.oasis.io"],
        webSocket: ["wss://sapphire.oasis.io/ws"],
      },
      public: {
        http: ["https://sapphire.oasis.io"],
        webSocket: ["wss://sapphire.oasis.io/ws"],
      },
    },
    blockExplorers: {
      default: {
        name: "Oasis Sapphire Explorer",
        url: "https://explorer.sapphire.oasis.io",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 734531,
      },
    },
  }),
  ZS = P({
    id: 23295,
    name: "Oasis Sapphire Testnet",
    network: "sapphire-testnet",
    nativeCurrency: {
      name: "Sapphire Test Rose",
      symbol: "TEST",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://testnet.sapphire.oasis.dev"],
        webSocket: ["wss://testnet.sapphire.oasis.dev/ws"],
      },
      public: {
        http: ["https://testnet.sapphire.oasis.dev"],
        webSocket: ["wss://testnet.sapphire.oasis.dev/ws"],
      },
    },
    blockExplorers: {
      default: {
        name: "Oasis Sapphire Testnet Explorer",
        url: "https://testnet.explorer.sapphire.oasis.dev",
      },
    },
    testnet: !0,
  }),
  JS = P({
    id: 534352,
    name: "Scroll",
    network: "scroll",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://rpc.scroll.io"],
        webSocket: ["wss://wss-rpc.scroll.io/ws"],
      },
      public: {
        http: ["https://rpc.scroll.io"],
        webSocket: ["wss://wss-rpc.scroll.io/ws"],
      },
    },
    blockExplorers: {
      default: { name: "Scrollscan", url: "https://scrollscan.com" },
      blockscout: { name: "Blockscout", url: "https://blockscout.scroll.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 14,
      },
    },
    testnet: !1,
  }),
  QS = P({
    id: 534351,
    name: "Scroll Sepolia",
    network: "scroll-sepolia",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://sepolia-rpc.scroll.io"] },
      public: { http: ["https://sepolia-rpc.scroll.io"] },
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://sepolia-blockscout.scroll.io",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 9473,
      },
    },
    testnet: !0,
  }),
  e7 = P({
    id: 534353,
    name: "Scroll Testnet",
    network: "scroll-testnet",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://alpha-rpc.scroll.io/l2"],
        webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"],
      },
      public: {
        http: ["https://alpha-rpc.scroll.io/l2"],
        webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"],
      },
    },
    blockExplorers: {
      default: { name: "Blockscout", url: "https://blockscout.scroll.io" },
    },
    testnet: !0,
  }),
  t7 = P({
    id: 11155111,
    network: "sepolia",
    name: "Sepolia",
    nativeCurrency: { name: "Sepolia Ether", symbol: "SEP", decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ["https://eth-sepolia.g.alchemy.com/v2"],
        webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"],
      },
      infura: {
        http: ["https://sepolia.infura.io/v3"],
        webSocket: ["wss://sepolia.infura.io/ws/v3"],
      },
      default: { http: ["https://rpc.sepolia.org"] },
      public: { http: ["https://rpc.sepolia.org"] },
    },
    blockExplorers: {
      etherscan: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
      default: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 751532,
      },
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      ensUniversalResolver: {
        address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
        blockCreated: 3914906,
      },
    },
    testnet: !0,
  }),
  n7 = P({
    id: 148,
    name: "Shimmer",
    network: "shimmer",
    nativeCurrency: { decimals: 18, name: "Shimmer", symbol: "SMR" },
    rpcUrls: {
      public: { http: ["https://json-rpc.evm.shimmer.network"] },
      default: { http: ["https://json-rpc.evm.shimmer.network"] },
    },
    blockExplorers: {
      default: {
        name: "Shimmer Network Explorer",
        url: "https://explorer.evm.shimmer.network",
      },
    },
  }),
  r7 = P({
    id: 1073,
    name: "Shimmer Testnet",
    network: "shimmer-testnet",
    nativeCurrency: { decimals: 18, name: "Shimmer", symbol: "SMR" },
    rpcUrls: {
      public: { http: ["https://json-rpc.evm.testnet.shimmer.network"] },
      default: { http: ["https://json-rpc.evm.testnet.shimmer.network"] },
    },
    blockExplorers: {
      default: {
        name: "Shimmer Network Explorer",
        url: "https://explorer.evm.testnet.shimmer.network",
      },
    },
    testnet: !0,
  }),
  s7 = P({
    id: 391845894,
    name: "SKALE | Block Brawlers",
    network: "skale-brawl",
    nativeCurrency: { name: "BRAWL", symbol: "BRAWL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {},
  }),
  o7 = P({
    id: 1564830818,
    name: "SKALE | Calypso NFT Hub",
    network: "skale-calypso",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague",
        ],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 3107626,
      },
    },
  }),
  i7 = P({
    id: 344106930,
    name: "SKALE | Calypso NFT Hub Testnet",
    network: "skale-calypso-testnet",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar",
        ],
      },
      public: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 2131424,
      },
    },
    testnet: !0,
  }),
  a7 = P({
    id: 1351057110,
    name: "SKALE | Chaos Testnet",
    network: "skale-chaos-testnet",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix",
        ],
      },
      public: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 1192202,
      },
    },
    testnet: !0,
  }),
  c7 = P({
    id: 1026062157,
    name: "SKALE | CryptoBlades",
    network: "skale-cryptoblades",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux",
        ],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux",
        ],
      },
      public: {
        http: [
          "https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux",
        ],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {},
  }),
  l7 = P({
    id: 2046399126,
    name: "SKALE | Crypto Colosseum",
    network: "skale-crypto-coloseeum",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb",
        ],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {},
  }),
  u7 = P({
    id: 2046399126,
    name: "SKALE | Europa Liquidity Hub",
    network: "skale-europa",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 3113495,
      },
    },
  }),
  f7 = P({
    id: 476158412,
    name: "SKALE | Europa Liquidity Hub Testnet",
    network: "skale-europa-testnet",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor",
        ],
      },
      public: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 2071911,
      },
    },
    testnet: !0,
  }),
  d7 = P({
    id: 2139927552,
    name: "SKALE | Exorde",
    network: "skale-exorde",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {},
  }),
  h7 = P({
    id: 1273227453,
    name: "SKALE | Human Protocol",
    network: "skale-human-protocol",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://wan-red-ain.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://wan-red-ain.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {},
  }),
  p7 = P({
    id: 1482601649,
    name: "SKALE | Nebula Gaming Hub",
    network: "skale-nebula",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 2372986,
      },
    },
  }),
  m7 = P({
    id: 503129905,
    name: "SKALE | Nebula Gaming Hub Testnet",
    network: "skale-nebula-testnet",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird",
        ],
      },
      public: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 2205882,
      },
    },
    testnet: !0,
  }),
  b7 = P({
    id: 278611351,
    name: "SKALE | Razor Network",
    network: "skale-razor",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat",
        ],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
        webSocket: [
          "wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {},
  }),
  g7 = P({
    id: 1350216234,
    name: "SKALE | Titan Community Hub",
    network: "skale-titan",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"],
      },
      public: {
        http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
        webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 2076458,
      },
    },
  }),
  y7 = P({
    id: 1517929550,
    name: "SKALE | Titan Community Hub Testnet",
    network: "skale-titan-testnet",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar",
        ],
      },
      public: {
        http: [
          "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar",
        ],
        webSocket: [
          "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar",
        ],
      },
    },
    blockExplorers: {
      blockscout: {
        name: "SKALE Explorer",
        url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com",
      },
      default: {
        name: "SKALE Explorer",
        url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com",
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 2085155,
      },
    },
    testnet: !0,
  }),
  w7 = P({
    id: 19,
    name: "Songbird Mainnet",
    network: "songbird-mainnet",
    nativeCurrency: { decimals: 18, name: "songbird", symbol: "SGB" },
    rpcUrls: {
      default: { http: ["https://songbird-api.flare.network/ext/C/rpc"] },
      public: { http: ["https://songbird-api.flare.network/ext/C/rpc"] },
    },
    blockExplorers: {
      default: {
        name: "Songbird Explorer",
        url: "https://songbird-explorer.flare.network",
      },
    },
  }),
  v7 = P({
    id: 16,
    name: "Coston",
    network: "coston",
    nativeCurrency: { decimals: 18, name: "costonflare", symbol: "CFLR" },
    rpcUrls: {
      default: { http: ["https://coston-api.flare.network/ext/C/rpc"] },
      public: { http: ["https://coston-api.flare.network/ext/C/rpc"] },
    },
    blockExplorers: {
      default: {
        name: "Coston Explorer",
        url: "https://coston-explorer.flare.network",
      },
    },
    testnet: !0,
  }),
  E7 = P({
    id: 88882,
    name: "Chiliz Spicy Testnet",
    network: "chiliz-spicy-Testnet",
    nativeCurrency: { decimals: 18, name: "CHZ", symbol: "CHZ" },
    rpcUrls: {
      default: {
        http: [
          "https://spicy-rpc.chiliz.com",
          "https://chiliz-spicy.publicnode.com",
        ],
        webSocket: [
          "wss://spicy-rpc-ws.chiliz.com",
          "wss://chiliz-spicy.publicnode.com",
        ],
      },
      public: {
        http: [
          "https://spicy-rpc.chiliz.com",
          "https://chiliz-spicy.publicnode.com",
        ],
        webSocket: [
          "wss://spicy-rpc-ws.chiliz.com",
          "wss://chiliz-spicy.publicnode.com",
        ],
      },
    },
    blockExplorers: {
      default: {
        name: "Chiliz Explorer",
        url: "http://spicy-explorer.chiliz.com",
      },
    },
    testnet: !0,
  }),
  C7 = P({
    id: 8082,
    name: "Shardeum Sphinx",
    network: "shmSphinx",
    nativeCurrency: { name: "SHARDEUM", symbol: "SHM", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://sphinx.shardeum.org"] },
      public: { http: ["https://sphinx.shardeum.org"] },
    },
    blockExplorers: {
      default: {
        name: "Shardeum Explorer",
        url: "https://explorer-sphinx.shardeum.org",
      },
    },
    testnet: !0,
  }),
  x7 = P({
    id: 109,
    name: "Shibarium",
    network: "shibarium",
    nativeCurrency: { name: "Bone", symbol: "BONE", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.shibrpc.com"] },
      public: { http: ["https://rpc.shibrpc.com"] },
    },
    blockExplorers: {
      etherscan: { name: "Blockscout", url: "https://shibariumscan.io" },
      default: { name: "Blockscout", url: "https://shibariumscan.io" },
    },
    contracts: {
      multicall3: {
        address: "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
        blockCreated: 265900,
      },
    },
  }),
  _7 = P({
    id: 57,
    name: "Syscoin Mainnet",
    network: "syscoin",
    nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
    rpcUrls: {
      default: {
        http: ["https://rpc.syscoin.org"],
        webSocket: ["wss://rpc.syscoin.org/wss"],
      },
      public: {
        http: ["https://rpc.syscoin.org"],
        webSocket: ["wss://rpc.syscoin.org/wss"],
      },
    },
    blockExplorers: {
      default: { name: "SyscoinExplorer", url: "https://explorer.syscoin.org" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 287139,
      },
    },
  }),
  k7 = P({
    id: 5700,
    name: "Syscoin Tanenbaum Testnet",
    network: "syscoin-testnet",
    nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
    rpcUrls: {
      default: {
        http: ["https://rpc.tanenbaum.io"],
        webSocket: ["wss://rpc.tanenbaum.io/wss"],
      },
      public: {
        http: ["https://rpc.tanenbaum.io"],
        webSocket: ["wss://rpc.tanenbaum.io/wss"],
      },
    },
    blockExplorers: {
      default: { name: "SyscoinTestnetExplorer", url: "https://tanenbaum.io" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 271288,
      },
    },
  }),
  S7 = P({
    id: 841,
    name: "Taraxa Mainnet",
    network: "taraxa",
    nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.mainnet.taraxa.io"] },
      public: { http: ["https://rpc.mainnet.taraxa.io"] },
    },
    blockExplorers: {
      default: {
        name: "Taraxa Explorer",
        url: "https://explorer.mainnet.taraxa.io",
      },
    },
  }),
  A7 = P({
    id: 167007,
    name: "Taiko Jolnir (Alpha-5 Testnet)",
    network: "tko-jolnir",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.jolnir.taiko.xyz"] },
      public: { http: ["https://rpc.jolnir.taiko.xyz"] },
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.jolnir.taiko.xyz" },
    },
  }),
  P7 = P({
    id: 167005,
    name: "Taiko (Alpha-3 Testnet)",
    network: "taiko-sepolia",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.test.taiko.xyz"] },
      public: { http: ["https://rpc.test.taiko.xyz"] },
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.test.taiko.xyz" },
    },
  }),
  T7 = P({
    id: 842,
    name: "Taraxa Testnet",
    network: "taraxa-testnet",
    nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.testnet.taraxa.io"] },
      public: { http: ["https://rpc.testnet.taraxa.io"] },
    },
    blockExplorers: {
      default: {
        name: "Taraxa Explorer",
        url: "https://explorer.testnet.taraxa.io",
      },
    },
    testnet: !0,
  }),
  D7 = P({
    id: 40,
    name: "Telos",
    network: "telos",
    nativeCurrency: { decimals: 18, name: "Telos", symbol: "TLOS" },
    rpcUrls: {
      default: { http: ["https://mainnet.telos.net/evm"] },
      public: { http: ["https://mainnet.telos.net/evm"] },
    },
    blockExplorers: {
      default: { name: "Teloscan", url: "https://www.teloscan.io/" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 246530709,
      },
    },
  }),
  O7 = P({
    id: 41,
    name: "Telos",
    network: "telosTestnet",
    nativeCurrency: { decimals: 18, name: "Telos", symbol: "TLOS" },
    rpcUrls: {
      default: { http: ["https://testnet.telos.net/evm"] },
      public: { http: ["https://testnet.telos.net/evm"] },
    },
    blockExplorers: {
      default: {
        name: "Teloscan (testnet)",
        url: "https://testnet.teloscan.io/",
      },
    },
    testnet: !0,
  }),
  I7 = P({
    id: 1559,
    name: "Tenet",
    network: "tenet-mainnet",
    nativeCurrency: { name: "TENET", symbol: "TENET", decimals: 18 },
    rpcUrls: {
      public: { http: ["https://rpc.tenet.org"] },
      default: { http: ["https://rpc.tenet.org"] },
    },
    blockExplorers: {
      default: { name: "TenetScan Mainnet", url: "https://tenetscan.io" },
    },
    testnet: !1,
  }),
  $7 = P({
    id: 997,
    name: "5ireChain Thunder Testnet",
    network: "5ireChain",
    nativeCurrency: { name: "5ire Token", symbol: "5IRE", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc-testnet.5ire.network"] },
      public: { http: ["https://rpc-testnet.5ire.network"] },
    },
    blockExplorers: {
      default: {
        name: "5ireChain Explorer",
        url: "https://explorer.5ire.network",
      },
    },
    testnet: !0,
  }),
  N7 = P({
    id: 100009,
    name: "Vechain",
    network: "vechain",
    nativeCurrency: { name: "VeChain", symbol: "VET", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://mainnet.vechain.org"] },
      public: { http: ["https://mainnet.vechain.org"] },
    },
    blockExplorers: {
      default: { name: "Vechain Explorer", url: "https://explore.vechain.org" },
      vechainStats: { name: "Vechain Stats", url: "https://vechainstats.com" },
    },
  }),
  M7 = P({
    id: 888,
    name: "Wanchain",
    network: "wanchain",
    nativeCurrency: { name: "WANCHAIN", symbol: "WAN", decimals: 18 },
    rpcUrls: {
      default: {
        http: [
          "https://gwan-ssl.wandevs.org:56891",
          "https://gwan2-ssl.wandevs.org",
        ],
      },
      public: {
        http: [
          "https://gwan-ssl.wandevs.org:56891",
          "https://gwan2-ssl.wandevs.org",
        ],
      },
    },
    blockExplorers: {
      etherscan: { name: "WanScan", url: "https://wanscan.org" },
      default: { name: "WanScan", url: "https://wanscan.org" },
    },
    contracts: {
      multicall3: {
        address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
        blockCreated: 25312390,
      },
    },
  }),
  U7 = P({
    id: 999,
    name: "Wanchain Testnet",
    network: "wanchainTestnet",
    nativeCurrency: { name: "WANCHAIN", symbol: "WANt", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://gwan-ssl.wandevs.org:46891"] },
      public: { http: ["https://gwan-ssl.wandevs.org:46891"] },
    },
    blockExplorers: {
      etherscan: { name: "WanScanTest", url: "https://wanscan.org" },
      default: { name: "WanScanTest", url: "https://wanscan.org" },
    },
    contracts: {
      multicall3: {
        address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
        blockCreated: 24743448,
      },
    },
    testnet: !0,
  }),
  F7 = P({
    id: 1111,
    name: "WEMIX",
    network: "wemix-mainnet",
    nativeCurrency: { name: "WEMIX", symbol: "WEMIX", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://api.wemix.com"] },
      public: { http: ["https://api.wemix.com"] },
    },
    blockExplorers: {
      etherscan: { name: "wemixExplorer", url: "https://explorer.wemix.com" },
      default: { name: "wemixExplorer", url: "https://explorer.wemix.com" },
    },
  }),
  B7 = P({
    id: 1112,
    name: "WEMIX Testnet",
    network: "wemix-testnet",
    nativeCurrency: { name: "WEMIX", symbol: "tWEMIX", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://api.test.wemix.com"] },
      public: { http: ["https://api.test.wemix.com"] },
    },
    blockExplorers: {
      etherscan: {
        name: "wemixExplorer",
        url: "https://testnet.wemixscan.com",
      },
      default: { name: "wemixExplorer", url: "https://testnet.wemixscan.com" },
    },
    testnet: !0,
  }),
  L7 = P({
    id: 50,
    name: "XinFin Network",
    network: "xdc",
    nativeCurrency: { decimals: 18, name: "XDC", symbol: "XDC" },
    rpcUrls: {
      default: { http: ["https://rpc.xinfin.network"] },
      public: { http: ["https://rpc.xinfin.network"] },
    },
    blockExplorers: {
      xinfin: { name: "XinFin", url: "https://explorer.xinfin.network" },
      default: { name: "Blocksscan", url: "https://xdc.blocksscan.io" },
    },
  }),
  R7 = P({
    id: 51,
    name: "Apothem Network",
    network: "xdc-testnet",
    nativeCurrency: { decimals: 18, name: "TXDC", symbol: "TXDC" },
    rpcUrls: {
      default: { http: ["https://erpc.apothem.network"] },
      public: { http: ["https://erpc.apothem.network"] },
    },
    blockExplorers: {
      xinfin: { name: "XinFin", url: "https://explorer.apothem.network" },
      default: { name: "Blocksscan", url: "https://apothem.blocksscan.io" },
    },
  }),
  j7 = P({
    id: 1337803,
    network: "zhejiang",
    name: "Zhejiang",
    nativeCurrency: { name: "Zhejiang Ether", symbol: "ZhejETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://rpc.zhejiang.ethpandaops.io"] },
      public: { http: ["https://rpc.zhejiang.ethpandaops.io"] },
    },
    blockExplorers: {
      beaconchain: { name: "Etherscan", url: "https://zhejiang.beaconcha.in" },
      blockscout: {
        name: "Blockscout",
        url: "https://blockscout.com/eth/zhejiang-testnet",
      },
      default: { name: "Beaconchain", url: "https://zhejiang.beaconcha.in" },
    },
    testnet: !0,
  }),
  H7 = P({
    id: 42766,
    name: "ZKFair Mainnet",
    network: "zkfair-mainnet",
    nativeCurrency: { decimals: 18, name: "USD Coin", symbol: "USDC" },
    rpcUrls: {
      default: { http: ["https://rpc.zkfair.io"] },
      public: { http: ["https://rpc.zkfair.io"] },
    },
    blockExplorers: {
      default: { name: "zkFair Explorer", url: "https://scan.zkfair.io" },
    },
    testnet: !1,
  }),
  z7 = P({
    id: 43851,
    name: "ZKFair Testnet",
    network: "zkfair-testnet",
    nativeCurrency: { decimals: 18, name: "USD Coin", symbol: "USDC" },
    rpcUrls: {
      default: { http: ["https://testnet-rpc.zkfair.io"] },
      public: { http: ["https://testnet-rpc.zkfair.io"] },
    },
    blockExplorers: {
      default: {
        name: "zkFair Explorer",
        url: "https://testnet-scan.zkfair.io",
      },
    },
    testnet: !0,
  }),
  Ja = {
    block: bf({
      format(e) {
        var t;
        const n =
          (t = e.transactions) == null
            ? void 0
            : t.map((r) => {
                if (typeof r == "string") return r;
                const s = Ja.transaction.format(r);
                return (
                  s.typeHex === "0x71"
                    ? (s.type = "eip712")
                    : s.typeHex === "0xff" && (s.type = "priority"),
                  s
                );
              });
        return {
          l1BatchNumber: e.l1BatchNumber ? Ve(e.l1BatchNumber) : null,
          l1BatchTimestamp: e.l1BatchTimestamp ? Ve(e.l1BatchTimestamp) : null,
          transactions: n,
        };
      },
    }),
    transaction: mf({
      format(e) {
        const t = {};
        return (
          e.type === "0x71"
            ? (t.type = "eip712")
            : e.type === "0xff" && (t.type = "priority"),
          {
            ...t,
            l1BatchNumber: e.l1BatchNumber ? Ve(e.l1BatchNumber) : null,
            l1BatchTxIndex: e.l1BatchTxIndex ? Ve(e.l1BatchTxIndex) : null,
          }
        );
      },
    }),
    transactionReceipt: N0({
      format(e) {
        return {
          l1BatchNumber: e.l1BatchNumber ? Ve(e.l1BatchNumber) : null,
          l1BatchTxIndex: e.l1BatchTxIndex ? Ve(e.l1BatchTxIndex) : null,
          logs: e.logs.map((t) => ({
            ...$0(t),
            l1BatchNumber: t.l1BatchNumber ? Ve(t.l1BatchNumber) : null,
            transactionLogIndex: ea(t.transactionLogIndex),
            logType: t.logType,
          })),
          l2ToL1Logs: e.l2ToL1Logs.map((t) => ({
            blockNumber: Ve(t.blockHash),
            blockHash: t.blockHash,
            l1BatchNumber: Ve(t.l1BatchNumber),
            transactionIndex: Ve(t.transactionIndex),
            shardId: Ve(t.shardId),
            isService: t.isService,
            sender: t.sender,
            key: t.key,
            value: t.value,
            transactionHash: t.transactionHash,
            logIndex: Ve(t.logIndex),
          })),
        };
      },
    }),
    transactionRequest: M0({
      exclude: [
        "customSignature",
        "factoryDeps",
        "gasPerPubdata",
        "paymaster",
        "paymasterInput",
      ],
      format(e) {
        return e.gasPerPubdata ||
          (e.paymaster && e.paymasterInput) ||
          e.factoryDeps ||
          e.customSignature
          ? {
              eip712Meta: {
                ...(e.gasPerPubdata
                  ? { gasPerPubdata: le(e.gasPerPubdata) }
                  : {}),
                ...(e.paymaster && e.paymasterInput
                  ? {
                      paymasterParams: {
                        paymaster: e.paymaster,
                        paymasterInput: Array.from(O0(e.paymasterInput)),
                      },
                    }
                  : {}),
                ...(e.factoryDeps ? { factoryDeps: e.factoryDeps } : {}),
                ...(e.customSignature
                  ? { customSignature: e.customSignature }
                  : {}),
              },
              type: e.type === "eip712" ? "0x71" : "0xff",
            }
          : {};
      },
    }),
  },
  W7 = (e, t) => (G7(e) ? q7(e) : L0(e, t)),
  wf = { transaction: W7 };
function q7(e) {
  const {
    chainId: t,
    gas: n,
    nonce: r,
    to: s,
    from: o,
    value: i,
    maxFeePerGas: a,
    maxPriorityFeePerGas: c,
    customSignature: u,
    factoryDeps: l,
    paymaster: f,
    paymasterInput: h,
    gasPerPubdata: p,
    data: m,
  } = e;
  V7(e);
  const g = [
    r ? le(r) : "0x",
    c ? le(c) : "0x",
    a ? le(a) : "0x",
    n ? le(n) : "0x",
    s ?? "0x",
    i ? le(i) : "0x",
    m ?? "0x",
    le(t),
    le(""),
    le(""),
    le(t),
    o ?? "0x",
    p ? le(p) : "0x",
    l ?? [],
    u ?? "0x",
    f && h ? [f, h] : [],
  ];
  return ri(["0x71", Os(g)]);
}
function G7(e) {
  return (
    "customSignature" in e ||
    "paymaster" in e ||
    "paymasterInput" in e ||
    "gasPerPubdata" in e ||
    "factoryDeps" in e
  );
}
function V7(e) {
  const { chainId: t, to: n, from: r, paymaster: s, paymasterInput: o } = e;
  if (t <= 0) throw new Ts({ chainId: t });
  if (n && !Lt(n)) throw new dn({ address: n });
  if (r && !Lt(r)) throw new dn({ address: r });
  if (s && !Lt(s)) throw new dn({ address: s });
  if (s && !o)
    throw new Ie(
      "`paymasterInput` must be provided when `paymaster` is defined"
    );
  if (!s && o)
    throw new Ie(
      "`paymaster` must be provided when `paymasterInput` is defined"
    );
}
const K7 = P(
    {
      id: 324,
      name: "zkSync Era",
      network: "zksync-era",
      nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
      rpcUrls: {
        default: {
          http: ["https://mainnet.era.zksync.io"],
          webSocket: ["wss://mainnet.era.zksync.io/ws"],
        },
        public: {
          http: ["https://mainnet.era.zksync.io"],
          webSocket: ["wss://mainnet.era.zksync.io/ws"],
        },
      },
      blockExplorers: {
        default: { name: "zkExplorer", url: "https://explorer.zksync.io" },
      },
      contracts: {
        multicall3: { address: "0xF9cda624FBC7e059355ce98a31693d299FACd963" },
      },
    },
    { serializers: wf, formatters: Ja }
  ),
  X7 = P(
    {
      id: 280,
      name: "zkSync Era Testnet",
      network: "zksync-era-testnet",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: {
          http: ["https://testnet.era.zksync.dev"],
          webSocket: ["wss://testnet.era.zksync.dev/ws"],
        },
        public: {
          http: ["https://testnet.era.zksync.dev"],
          webSocket: ["wss://testnet.era.zksync.dev/ws"],
        },
      },
      blockExplorers: {
        default: {
          name: "zkExplorer",
          url: "https://goerli.explorer.zksync.io",
        },
      },
      contracts: {
        multicall3: { address: "0xF9cda624FBC7e059355ce98a31693d299FACd963" },
      },
      testnet: !0,
    },
    { serializers: wf, formatters: Ja }
  ),
  Y7 = P(
    {
      id: 300,
      name: "zkSync Sepolia Testnet",
      network: "zksync-sepolia-testnet",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: {
          http: ["https://sepolia.era.zksync.dev"],
          webSocket: ["wss://sepolia.era.zksync.dev/ws"],
        },
        public: {
          http: ["https://sepolia.era.zksync.dev"],
          webSocket: ["wss://sepolia.era.zksync.dev/ws"],
        },
      },
      blockExplorers: {
        default: {
          name: "zkExplorer",
          url: "https://sepolia.explorer.zksync.io/",
        },
      },
      contracts: {
        multicall3: { address: "0xF9cda624FBC7e059355ce98a31693d299FACd963" },
      },
      testnet: !0,
    },
    { serializers: wf, formatters: Ja }
  ),
  Z7 = P({
    id: 7001,
    name: "ZetaChain Athens Testnet",
    network: "zetachain-athens-testnet",
    nativeCurrency: { decimals: 18, name: "Zeta", symbol: "aZETA" },
    rpcUrls: {
      public: {
        http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
      },
      default: {
        http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
      },
    },
    blockExplorers: {
      default: {
        name: "ZetaScan",
        url: "https://athens3.explorer.zetachain.com",
      },
    },
    testnet: !0,
  }),
  J7 = P({
    id: 32769,
    name: "Zilliqa",
    network: "zilliqa",
    nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://api.zilliqa.com"] },
      public: { http: ["https://api.zilliqa.com"] },
    },
    blockExplorers: {
      default: { name: "Ethernal", url: "https://evmx.zilliqa.com" },
    },
    testnet: !1,
  }),
  Q7 = P({
    id: 33101,
    name: "Zilliqa Testnet",
    network: "zilliqa-testnet",
    nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://dev-api.zilliqa.com"] },
      public: { http: ["https://dev-api.zilliqa.com"] },
    },
    blockExplorers: {
      default: { name: "Ethernal", url: "https://evmx.testnet.zilliqa.com" },
    },
    testnet: !0,
  }),
  e4 = P(
    {
      id: 7777777,
      name: "Zora",
      network: "zora",
      nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
      rpcUrls: {
        default: {
          http: ["https://rpc.zora.energy"],
          webSocket: ["wss://rpc.zora.energy"],
        },
        public: {
          http: ["https://rpc.zora.energy"],
          webSocket: ["wss://rpc.zora.energy"],
        },
      },
      blockExplorers: {
        default: { name: "Explorer", url: "https://explorer.zora.energy" },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 5882,
        },
      },
    },
    { formatters: tn }
  ),
  t4 = P(
    {
      id: 999999999,
      name: "Zora Sepolia",
      network: "zora-sepolia",
      nativeCurrency: { decimals: 18, name: "Zora Sepolia", symbol: "ETH" },
      rpcUrls: {
        default: {
          http: ["https://sepolia.rpc.zora.energy"],
          webSocket: ["wss://sepolia.rpc.zora.energy"],
        },
        public: {
          http: ["https://sepolia.rpc.zora.energy"],
          webSocket: ["wss://sepolia.rpc.zora.energy"],
        },
      },
      blockExplorers: {
        default: {
          name: "Zora Sepolia Explorer",
          url: "https://sepolia.explorer.zora.energy/",
        },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 83160,
        },
      },
      testnet: !0,
    },
    { formatters: tn }
  ),
  n4 = P(
    {
      id: 999,
      name: "Zora Goerli Testnet",
      network: "zora-testnet",
      nativeCurrency: { decimals: 18, name: "Zora Goerli", symbol: "ETH" },
      rpcUrls: {
        default: {
          http: ["https://testnet.rpc.zora.energy"],
          webSocket: ["wss://testnet.rpc.zora.energy"],
        },
        public: {
          http: ["https://testnet.rpc.zora.energy"],
          webSocket: ["wss://testnet.rpc.zora.energy"],
        },
      },
      blockExplorers: {
        default: {
          name: "Explorer",
          url: "https://testnet.explorer.zora.energy",
        },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 189123,
        },
      },
      testnet: !0,
    },
    { formatters: tn }
  ),
  W0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        acala: U5,
        arbitrum: F5,
        arbitrumGoerli: B5,
        arbitrumNova: L5,
        arbitrumSepolia: j5,
        astar: R5,
        astarZkatana: H5,
        aurora: z5,
        auroraTestnet: W5,
        avalanche: q5,
        avalancheFuji: G5,
        bahamut: V5,
        base: c_,
        baseGoerli: l_,
        baseSepolia: u_,
        bearNetworkChainMainnet: f_,
        bearNetworkChainTestnet: d_,
        bitTorrent: h_,
        bitTorrentTestnet: p_,
        boba: m_,
        bronos: b_,
        bronosTestnet: g_,
        bsc: y_,
        bscTestnet: w_,
        bxn: v_,
        bxnTestnet: E_,
        canto: C_,
        celo: sk,
        celoAlfajores: ok,
        celoCannoli: ak,
        chiliz: ik,
        classic: ck,
        confluxESpace: lk,
        confluxESpaceTestnet: uk,
        coreDao: fk,
        cronos: dk,
        cronosTestnet: hk,
        crossbell: pk,
        dfk: mk,
        dogechain: bk,
        edgeware: gk,
        edgewareTestnet: yk,
        ekta: xk,
        ektaTestnet: _k,
        eos: wk,
        eosTestnet: vk,
        evmos: Ek,
        evmosTestnet: Ck,
        fantom: kk,
        fantomSonicTestnet: Sk,
        fantomTestnet: Ak,
        fibo: Pk,
        filecoin: Tk,
        filecoinCalibration: Dk,
        filecoinHyperspace: Ok,
        flare: Ik,
        flareTestnet: $k,
        foundry: Nk,
        fuse: Mk,
        fuseSparknet: Uk,
        gnosis: zk,
        gnosisChiado: Wk,
        gobi: jk,
        goerli: Hk,
        haqqMainnet: Vk,
        haqqTestedge2: Kk,
        hardhat: qk,
        harmonyOne: Gk,
        holesky: Xk,
        iotex: Fk,
        iotexTestnet: Bk,
        jbc: Lk,
        karura: Rk,
        kava: Yk,
        kavaTestnet: Zk,
        klaytn: Jk,
        klaytnBaobab: Qk,
        kroma: eS,
        kromaSepolia: tS,
        linea: nS,
        lineaTestnet: rS,
        localhost: sS,
        lukso: oS,
        mainnet: z0,
        mandala: iS,
        manta: aS,
        mantaTestnet: cS,
        mantle: lS,
        mantleTestnet: uS,
        meter: fS,
        meterTestnet: dS,
        metis: hS,
        metisGoerli: pS,
        mev: mS,
        mevTestnet: bS,
        modeTestnet: gS,
        moonbaseAlpha: yS,
        moonbeam: wS,
        moonbeamDev: vS,
        moonriver: ES,
        neonDevnet: CS,
        neonMainnet: xS,
        nexi: _S,
        nexilix: kS,
        oasisTestnet: AS,
        oasys: SS,
        okc: PS,
        opBNB: IS,
        opBNBTestnet: $S,
        optimism: TS,
        optimismGoerli: DS,
        optimismSepolia: OS,
        pgn: NS,
        pgnTestnet: MS,
        plinga: US,
        polygon: FS,
        polygonMumbai: BS,
        polygonZkEvm: RS,
        polygonZkEvmTestnet: LS,
        pulsechain: jS,
        pulsechainV4: HS,
        qMainnet: zS,
        qTestnet: WS,
        rollux: qS,
        rolluxTestnet: GS,
        ronin: VS,
        rootstock: KS,
        saigon: XS,
        sapphire: YS,
        sapphireTestnet: ZS,
        scroll: JS,
        scrollSepolia: QS,
        scrollTestnet: e7,
        sepolia: t7,
        shardeumSphinx: C7,
        shibarium: x7,
        shimmer: n7,
        shimmerTestnet: r7,
        skaleBlockBrawlers: s7,
        skaleCalypso: o7,
        skaleCalypsoTestnet: i7,
        skaleChaosTestnet: a7,
        skaleCryptoBlades: c7,
        skaleCryptoColosseum: l7,
        skaleEuropa: u7,
        skaleEuropaTestnet: f7,
        skaleExorde: d7,
        skaleHumanProtocol: h7,
        skaleNebula: p7,
        skaleNebulaTestnet: m7,
        skaleRazor: b7,
        skaleTitan: g7,
        skaleTitanTestnet: y7,
        songbird: w7,
        songbirdTestnet: v7,
        spicy: E7,
        syscoin: _7,
        syscoinTestnet: k7,
        taikoJolnir: A7,
        taikoTestnetSepolia: P7,
        taraxa: S7,
        taraxaTestnet: T7,
        telos: D7,
        telosTestnet: O7,
        tenet: I7,
        thunderTestnet: $7,
        vechain: N7,
        wanchain: M7,
        wanchainTestnet: U7,
        wemix: F7,
        wemixTestnet: B7,
        xdc: L7,
        xdcTestnet: R7,
        zetachainAthensTestnet: Z7,
        zhejiang: j7,
        zilliqa: J7,
        zilliqaTestnet: Q7,
        zkFair: H7,
        zkFairTestnet: z7,
        zkSync: K7,
        zkSyncSepoliaTestnet: Y7,
        zkSyncTestnet: X7,
        zora: e4,
        zoraSepolia: t4,
        zoraTestnet: n4,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ue = pt({
    autoInit: !0,
    projectId: "",
    chains: [z0],
    autoConnect: !0,
    disconnectUnknownChain: !0,
    reconnectToChain: !0,
    logEnabled: !1,
    enableCustomProvider: !1,
    web3modalOptions: { themeMode: "light", themeVariables: {} },
  });
function r4(e) {
  "autoInit" in e && (Ue.autoInit = e.autoInit),
    "projectId" in e && (Ue.projectId = e.projectId),
    "chains" in e && (Ue.chains = e.chains),
    "autoConnect" in e && (Ue.autoConnect = e.autoConnect),
    "disconnectUnknownChain" in e &&
      (Ue.disconnectUnknownChain = e.disconnectUnknownChain),
    "reconnectToChain" in e && (Ue.reconnectToChain = e.reconnectToChain),
    "logEnabled" in e && (Ue.logEnabled = e.logEnabled),
    "enableCustomProvider" in e &&
      (Ue.enableCustomProvider = e.enableCustomProvider),
    "web3modalOptions" in e &&
      ("themeMode" in e.web3modalOptions &&
        (Ue.web3modalOptions.themeMode = e.web3modalOptions.themeMode),
      "themeVariables" in e.web3modalOptions &&
        (Ue.web3modalOptions.themeVariables =
          e.web3modalOptions.themeVariables));
}
function s4() {
  return function (e) {
    return e.rpcUrls.public.http[0]
      ? { chain: e, rpcUrls: e.rpcUrls.public }
      : null;
  };
}
var Mt = ((e) => (
  (e.Connected = "connected"),
  (e.Disconnected = "disconnect"),
  (e.ChainSwitched = "chain_switched"),
  (e.UnknownChain = "unknown_chain"),
  (e.ModalStateChanged = "modal_state_changed"),
  e
))(Mt || {});
function xr(...e) {
  Ue.logEnabled && console.log("[WC]", ...e);
}
const o4 = new M5();
function zn(e, ...t) {
  e === Mt.Connected || e === Mt.Disconnected
    ? ((un.currentChain = un.bufferChain),
      (Gt.currentAccount = Gt.bufferAccount))
    : e === Mt.ChainSwitched && (un.currentChain = un.bufferChain),
    setTimeout(o4.emit, 0, e, null, ...t);
}
const as = dt(null);
function i4(e) {
  var t;
  (as.value = new $5(
    {
      projectId: Ue.projectId,
      ...((Ue == null ? void 0 : Ue.web3modalOptions) || {}),
    },
    e
  )),
    (t = as.value) == null ||
      t.subscribeModal(({ open: n }) => {
        zn(Mt.ModalStateChanged, n);
      });
}
const un = pt({ bufferChain: null, currentChain: null }),
  q0 = ge(() => (un.currentChain ? un.currentChain : Ue.chains[0]));
let Ph;
const a4 = pt({ client: null });
function Wr(e) {
  return String(e).toLowerCase();
}
async function c4([e, t], [n, r]) {
  if (
    Ue.disconnectUnknownChain &&
    ((!n && Ue.disconnectUnknownChain) || n) &&
    t &&
    !Ue.chains.some((s) => s.id === t.id)
  ) {
    await u4(),
      r &&
        (zn(Mt.Disconnected),
        xr(`account ${e.address} disconnected from ${Wr(r.name)} chain.`)),
      zn(Mt.UnknownChain, { chain: t }),
      xr("switched to unsupported chain.");
    return;
  }
  (n == null ? void 0 : n.address) !== (e == null ? void 0 : e.address) &&
    !(r != null && r.unsupported) &&
    (n &&
      (zn(Mt.Disconnected),
      xr(`account ${n.address} disconnected from ${Wr(r.name)} chain.`)),
    e &&
      (zn(Mt.Connected, { chain: un.bufferChain, account: Gt.bufferAccount }),
      xr(`account ${e.address} connected to ${Wr(t.name)} chain.`))),
    r &&
      t &&
      r.id !== t.id &&
      (Ue.reconnectToChain
        ? (zn(Mt.Disconnected),
          xr(`account ${n.address} disconnected from ${Wr(r.name)} chain.`),
          zn(Mt.Connected, {
            chain: un.bufferChain,
            account: Gt.bufferAccount,
          }),
          xr(`account ${e.address} connected to ${Wr(t.name)} chain.`))
        : (zn(Mt.ChainSwitched, { chain: t }),
          xr(`account ${e.address} switched to ${Wr(t.name)} chain.`)));
}
function l4([e, t], [n, r]) {
  clearTimeout(Ph), (Ph = setTimeout(c4, 200, [e, t], [n, r]));
}
function G0() {
  if (as.value) return;
  const e = ce(Ue.chains),
    t = [];
  Ue.enableCustomProvider
    ? t.push(s4())
    : t.push(a5({ projectId: Ue.projectId }));
  const { publicClient: n, webSocketPublicClient: r } = G3(e, t),
    s = r6({
      autoConnect: Ue.autoConnect,
      connectors: c5({ projectId: Ue.projectId, chains: e }),
      publicClient: n,
      webSocketPublicClient: r,
    });
  Gb((i) => {
    var a;
    (a = i.chain) != null && a.unsupported && (i.chain.name = "Unsupported"),
      (un.bufferChain = i.chain || null);
  }),
    qb((i) => {
      Gt.bufferAccount = i.address ? i : null;
    }),
    Tr([() => Gt.bufferAccount, () => un.bufferChain], l4);
  const o = new s5(s, e);
  (a4.client = o), i4(o);
}
const Gt = pt({ bufferAccount: null, currentAccount: null }),
  zt = pt({
    connected: !1,
    address: void 0,
    shortAddress: void 0,
    wallet: { id: void 0, name: void 0 },
  }),
  V0 = cu(zt);
async function u4() {
  await Bb();
}
async function Th(e) {
  var t, n;
  as.value || G0(),
    e instanceof Event && (e = Ue.chains[0]),
    (t = as.value) == null || t.setDefaultChain(e || Ue.chains[0]),
    await ((n = as.value) == null
      ? void 0
      : n.openModal({ route: "ConnectWallet" }));
}
function f4(e = "") {
  return `${e.slice(0, 5)}...${e.slice(-4)}`;
}
Zs(() => {
  var e, t;
  Gt.currentAccount
    ? ((zt.connected = !0),
      (zt.address = Gt.currentAccount.address),
      (zt.shortAddress = f4(Gt.currentAccount.address)),
      (zt.wallet.id =
        (e = Gt.currentAccount.connector) == null ? void 0 : e.id),
      (zt.wallet.name =
        (t = Gt.currentAccount.connector) == null ? void 0 : t.name))
    : ((zt.connected = !1),
      (zt.address = void 0),
      (zt.shortAddress = void 0),
      (zt.wallet.id = void 0),
      (zt.wallet.name = void 0));
});
async function b9(e) {
  return jb({
    chainId: e.chainId || q0.value.id,
    address: e.address,
    abi: e.abi,
    functionName: e.functionName,
    args: e.args || [],
    account: e.account || V0.address,
    blockNumber: e.blockNumber,
    blockTag: e.blockTag,
  });
}
function Dh(e) {
  return c6({ message: e });
}
function g9(e) {
  return s6({
    chainId: e.chainId || q0.value.id,
    address: e.address,
    formatUnits: e.formatUnits,
  });
}
function d4(e) {
  return {
    install() {
      r4(e), Ue.autoInit && G0();
    },
  };
}
const { localhost: K0 } = W0;
K0.id = 31337;
const h4 = d4({
  projectId: "440135962d06f8f2501e8a4a111150a9",
  chains: [W0.mainnet, K0],
});
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Kr = typeof document < "u";
function X0(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function p4(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && X0(e.default))
  );
}
const Pe = Object.assign;
function Nc(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Qt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ro = () => {},
  Qt = Array.isArray,
  Y0 = /#/g,
  m4 = /&/g,
  b4 = /\//g,
  g4 = /=/g,
  y4 = /\?/g,
  Z0 = /\+/g,
  w4 = /%5B/g,
  v4 = /%5D/g,
  J0 = /%5E/g,
  E4 = /%60/g,
  Q0 = /%7B/g,
  C4 = /%7C/g,
  e1 = /%7D/g,
  x4 = /%20/g;
function vf(e) {
  return encodeURI("" + e)
    .replace(C4, "|")
    .replace(w4, "[")
    .replace(v4, "]");
}
function _4(e) {
  return vf(e).replace(Q0, "{").replace(e1, "}").replace(J0, "^");
}
function Xl(e) {
  return vf(e)
    .replace(Z0, "%2B")
    .replace(x4, "+")
    .replace(Y0, "%23")
    .replace(m4, "%26")
    .replace(E4, "`")
    .replace(Q0, "{")
    .replace(e1, "}")
    .replace(J0, "^");
}
function k4(e) {
  return Xl(e).replace(g4, "%3D");
}
function S4(e) {
  return vf(e).replace(Y0, "%23").replace(y4, "%3F");
}
function A4(e) {
  return e == null ? "" : S4(e).replace(b4, "%2F");
}
function Fo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const P4 = /\/$/,
  T4 = (e) => e.replace(P4, "");
function Mc(e, t, n = "/") {
  let r,
    s = {},
    o = "",
    i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    a < c && a >= 0 && (c = -1),
    c > -1 &&
      ((r = t.slice(0, c)),
      (o = t.slice(c + 1, a > -1 ? a : t.length)),
      (s = e(o))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = $4(r ?? t, n)),
    { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: Fo(i) }
  );
}
function D4(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Oh(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function O4(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    ms(t.matched[r], n.matched[s]) &&
    t1(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function ms(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function t1(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!I4(e[n], t[n])) return !1;
  return !0;
}
function I4(e, t) {
  return Qt(e) ? Ih(e, t) : Qt(t) ? Ih(t, e) : e === t;
}
function Ih(e, t) {
  return Qt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function $4(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let o = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== "."))
      if (a === "..") o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + r.slice(i).join("/");
}
const jn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Bo;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Bo || (Bo = {}));
var so;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(so || (so = {}));
function N4(e) {
  if (!e)
    if (Kr) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), T4(e);
}
const M4 = /^[^#]+#/;
function U4(e, t) {
  return e.replace(M4, "#") + t;
}
function F4(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Qa = () => ({ left: window.scrollX, top: window.scrollY });
function B4(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = F4(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function $h(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Yl = new Map();
function L4(e, t) {
  Yl.set(e, t);
}
function R4(e) {
  const t = Yl.get(e);
  return Yl.delete(e), t;
}
let j4 = () => location.protocol + "//" + location.host;
function n1(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = s.slice(a);
    return c[0] !== "/" && (c = "/" + c), Oh(c, "");
  }
  return Oh(n, e) + r + s;
}
function H4(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: h }) => {
    const p = n1(e, location),
      m = n.value,
      g = t.value;
    let y = 0;
    if (h) {
      if (((n.value = p), (t.value = h), i && i === m)) {
        i = null;
        return;
      }
      y = g ? h.position - g.position : 0;
    } else r(p);
    s.forEach((k) => {
      k(n.value, m, {
        delta: y,
        type: Bo.pop,
        direction: y ? (y > 0 ? so.forward : so.back) : so.unknown,
      });
    });
  };
  function c() {
    i = n.value;
  }
  function u(h) {
    s.push(h);
    const p = () => {
      const m = s.indexOf(h);
      m > -1 && s.splice(m, 1);
    };
    return o.push(p), p;
  }
  function l() {
    const { history: h } = window;
    h.state && h.replaceState(Pe({}, h.state, { scroll: Qa() }), "");
  }
  function f() {
    for (const h of o) h();
    (o = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", l);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", l, { passive: !0 }),
    { pauseListeners: c, listen: u, destroy: f }
  );
}
function Nh(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Qa() : null,
  };
}
function z4(e) {
  const { history: t, location: n } = window,
    r = { value: n1(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(c, u, l) {
    const f = e.indexOf("#"),
      h =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c
          : j4() + e + c;
    try {
      t[l ? "replaceState" : "pushState"](u, "", h), (s.value = u);
    } catch (p) {
      console.error(p), n[l ? "replace" : "assign"](h);
    }
  }
  function i(c, u) {
    const l = Pe({}, t.state, Nh(s.value.back, c, s.value.forward, !0), u, {
      position: s.value.position,
    });
    o(c, l, !0), (r.value = c);
  }
  function a(c, u) {
    const l = Pe({}, s.value, t.state, { forward: c, scroll: Qa() });
    o(l.current, l, !0);
    const f = Pe({}, Nh(r.value, c, null), { position: l.position + 1 }, u);
    o(c, f, !1), (r.value = c);
  }
  return { location: r, state: s, push: a, replace: i };
}
function W4(e) {
  e = N4(e);
  const t = z4(e),
    n = H4(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = Pe(
    { location: "", base: e, go: r, createHref: U4.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function q4(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function r1(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const s1 = Symbol("");
var Mh;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Mh || (Mh = {}));
function bs(e, t) {
  return Pe(new Error(), { type: e, [s1]: !0 }, t);
}
function Cn(e, t) {
  return e instanceof Error && s1 in e && (t == null || !!(e.type & t));
}
const Uh = "[^/]+?",
  G4 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  V4 = /[.+*?^${}()[\]/\\]/g;
function K4(e, t) {
  const n = Pe({}, G4, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const l = u.length ? [] : [90];
    n.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (s += "/"), (s += h.value.replace(V4, "\\$&")), (p += 40);
      else if (h.type === 1) {
        const { value: m, repeatable: g, optional: y, regexp: k } = h;
        o.push({ name: m, repeatable: g, optional: y });
        const b = k || Uh;
        if (b !== Uh) {
          p += 10;
          try {
            new RegExp(`(${b})`);
          } catch (v) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${b}): ` + v.message
            );
          }
        }
        let E = g ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        f || (E = y && u.length < 2 ? `(?:/${E})` : "/" + E),
          y && (E += "?"),
          (s += E),
          (p += 20),
          y && (p += -8),
          g && (p += -20),
          b === ".*" && (p += -50);
      }
      l.push(p);
    }
    r.push(l);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"),
    n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function a(u) {
    const l = u.match(i),
      f = {};
    if (!l) return null;
    for (let h = 1; h < l.length; h++) {
      const p = l[h] || "",
        m = o[h - 1];
      f[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return f;
  }
  function c(u) {
    let l = "",
      f = !1;
    for (const h of e) {
      (!f || !l.endsWith("/")) && (l += "/"), (f = !1);
      for (const p of h)
        if (p.type === 0) l += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: g, optional: y } = p,
            k = m in u ? u[m] : "";
          if (Qt(k) && !g)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`
            );
          const b = Qt(k) ? k.join("/") : k;
          if (!b)
            if (y)
              h.length < 2 &&
                (l.endsWith("/") ? (l = l.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${m}"`);
          l += b;
        }
    }
    return l || "/";
  }
  return { re: i, score: r, keys: o, parse: a, stringify: c };
}
function X4(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function o1(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = X4(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Fh(r)) return 1;
    if (Fh(s)) return -1;
  }
  return s.length - r.length;
}
function Fh(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Y4 = { type: 0, value: "" },
  Z4 = /[a-zA-Z0-9_]/;
function J4(e) {
  if (!e) return [[]];
  if (e === "/") return [[Y4]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    c,
    u = "",
    l = "";
  function f() {
    u &&
      (n === 0
        ? o.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: u,
            regexp: l,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function h() {
    u += c;
  }
  for (; a < e.length; ) {
    if (((c = e[a++]), c === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (u && f(), i()) : c === ":" ? (f(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : Z4.test(c)
          ? h()
          : (f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case 2:
        c === ")"
          ? l[l.length - 1] == "\\"
            ? (l = l.slice(0, -1) + c)
            : (n = 3)
          : (l += c);
        break;
      case 3:
        f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && a--, (l = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), s;
}
function Q4(e, t, n) {
  const r = K4(J4(e.path), n),
    s = Pe(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function eA(e, t) {
  const n = [],
    r = new Map();
  t = jh({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(f) {
    return r.get(f);
  }
  function o(f, h, p) {
    const m = !p,
      g = Lh(f);
    g.aliasOf = p && p.record;
    const y = jh(t, f),
      k = [g];
    if ("alias" in f) {
      const v = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const w of v)
        k.push(
          Lh(
            Pe({}, g, {
              components: p ? p.record.components : g.components,
              path: w,
              aliasOf: p ? p.record : g,
            })
          )
        );
    }
    let b, E;
    for (const v of k) {
      const { path: w } = v;
      if (h && w[0] !== "/") {
        const x = h.record.path,
          d = x[x.length - 1] === "/" ? "" : "/";
        v.path = h.record.path + (w && d + w);
      }
      if (
        ((b = Q4(v, h, y)),
        p
          ? p.alias.push(b)
          : ((E = E || b),
            E !== b && E.alias.push(b),
            m && f.name && !Rh(b) && i(f.name)),
        i1(b) && c(b),
        g.children)
      ) {
        const x = g.children;
        for (let d = 0; d < x.length; d++) o(x[d], b, p && p.children[d]);
      }
      p = p || b;
    }
    return E
      ? () => {
          i(E);
        }
      : ro;
  }
  function i(f) {
    if (r1(f)) {
      const h = r.get(f);
      h &&
        (r.delete(f),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(f);
      h > -1 &&
        (n.splice(h, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function c(f) {
    const h = rA(f, n);
    n.splice(h, 0, f), f.record.name && !Rh(f) && r.set(f.record.name, f);
  }
  function u(f, h) {
    let p,
      m = {},
      g,
      y;
    if ("name" in f && f.name) {
      if (((p = r.get(f.name)), !p)) throw bs(1, { location: f });
      (y = p.record.name),
        (m = Pe(
          Bh(
            h.params,
            p.keys
              .filter((E) => !E.optional)
              .concat(p.parent ? p.parent.keys.filter((E) => E.optional) : [])
              .map((E) => E.name)
          ),
          f.params &&
            Bh(
              f.params,
              p.keys.map((E) => E.name)
            )
        )),
        (g = p.stringify(m));
    } else if (f.path != null)
      (g = f.path),
        (p = n.find((E) => E.re.test(g))),
        p && ((m = p.parse(g)), (y = p.record.name));
    else {
      if (((p = h.name ? r.get(h.name) : n.find((E) => E.re.test(h.path))), !p))
        throw bs(1, { location: f, currentLocation: h });
      (y = p.record.name),
        (m = Pe({}, h.params, f.params)),
        (g = p.stringify(m));
    }
    const k = [];
    let b = p;
    for (; b; ) k.unshift(b.record), (b = b.parent);
    return { name: y, path: g, params: m, matched: k, meta: nA(k) };
  }
  e.forEach((f) => o(f));
  function l() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: o,
    resolve: u,
    removeRoute: i,
    clearRoutes: l,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function Bh(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Lh(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: tA(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function tA(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Rh(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function nA(e) {
  return e.reduce((t, n) => Pe(t, n.meta), {});
}
function jh(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function rA(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    o1(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = sA(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function sA(e) {
  let t = e;
  for (; (t = t.parent); ) if (i1(t) && o1(e, t) === 0) return t;
}
function i1({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function oA(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Z0, " "),
      i = o.indexOf("="),
      a = Fo(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : Fo(o.slice(i + 1));
    if (a in t) {
      let u = t[a];
      Qt(u) || (u = t[a] = [u]), u.push(c);
    } else t[a] = c;
  }
  return t;
}
function Hh(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = k4(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Qt(r) ? r.map((o) => o && Xl(o)) : [r && Xl(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function iA(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Qt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const aA = Symbol(""),
  zh = Symbol(""),
  ec = Symbol(""),
  Ef = Symbol(""),
  Zl = Symbol("");
function js() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Yn(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, c) => {
      const u = (h) => {
          h === !1
            ? c(bs(4, { from: n, to: t }))
            : h instanceof Error
            ? c(h)
            : q4(h)
            ? c(bs(2, { from: t, to: h }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof h == "function" &&
                i.push(h),
              a());
        },
        l = o(() => e.call(r && r.instances[s], t, n, u));
      let f = Promise.resolve(l);
      e.length < 3 && (f = f.then(u)), f.catch((h) => c(h));
    });
}
function Uc(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let c = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (X0(c)) {
          const l = (c.__vccOpts || c)[t];
          l && o.push(Yn(l, n, r, i, a, s));
        } else {
          let u = c();
          o.push(() =>
            u.then((l) => {
              if (!l)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${i.path}"`
                );
              const f = p4(l) ? l.default : l;
              (i.mods[a] = l), (i.components[a] = f);
              const p = (f.__vccOpts || f)[t];
              return p && Yn(p, n, r, i, a, s)();
            })
          );
        }
    }
  return o;
}
function Wh(e) {
  const t = Bt(ec),
    n = Bt(Ef),
    r = ge(() => {
      const c = Et(e.to);
      return t.resolve(c);
    }),
    s = ge(() => {
      const { matched: c } = r.value,
        { length: u } = c,
        l = c[u - 1],
        f = n.matched;
      if (!l || !f.length) return -1;
      const h = f.findIndex(ms.bind(null, l));
      if (h > -1) return h;
      const p = qh(c[u - 2]);
      return u > 1 && qh(l) === p && f[f.length - 1].path !== p
        ? f.findIndex(ms.bind(null, c[u - 2]))
        : h;
    }),
    o = ge(() => s.value > -1 && fA(n.params, r.value.params)),
    i = ge(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        t1(n.params, r.value.params)
    );
  function a(c = {}) {
    if (uA(c)) {
      const u = t[Et(e.replace) ? "replace" : "push"](Et(e.to)).catch(ro);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: ge(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a,
  };
}
function cA(e) {
  return e.length === 1 ? e[0] : e;
}
const lA = gs({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Wh,
    setup(e, { slots: t }) {
      const n = pt(Wh(e)),
        { options: r } = Bt(ec),
        s = ge(() => ({
          [Gh(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Gh(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && cA(t.default(n));
        return e.custom
          ? o
          : Zn(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  Lo = lA;
function uA(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function fA(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!Qt(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function qh(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Gh = (e, t, n) => e ?? t ?? n,
  dA = gs({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Bt(Zl),
        s = ge(() => e.route || r.value),
        o = Bt(zh, 0),
        i = ge(() => {
          let u = Et(o);
          const { matched: l } = s.value;
          let f;
          for (; (f = l[u]) && !f.components; ) u++;
          return u;
        }),
        a = ge(() => s.value.matched[i.value]);
      gi(
        zh,
        ge(() => i.value + 1)
      ),
        gi(aA, a),
        gi(Zl, s);
      const c = dt();
      return (
        Tr(
          () => [c.value, a.value, e.name],
          ([u, l, f], [h, p, m]) => {
            l &&
              ((l.instances[f] = u),
              p &&
                p !== l &&
                u &&
                u === h &&
                (l.leaveGuards.size || (l.leaveGuards = p.leaveGuards),
                l.updateGuards.size || (l.updateGuards = p.updateGuards))),
              u &&
                l &&
                (!p || !ms(l, p) || !h) &&
                (l.enterCallbacks[f] || []).forEach((g) => g(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = s.value,
            l = e.name,
            f = a.value,
            h = f && f.components[l];
          if (!h) return Vh(n.default, { Component: h, route: u });
          const p = f.props[l],
            m = p
              ? p === !0
                ? u.params
                : typeof p == "function"
                ? p(u)
                : p
              : null,
            y = Zn(
              h,
              Pe({}, m, t, {
                onVnodeUnmounted: (k) => {
                  k.component.isUnmounted && (f.instances[l] = null);
                },
                ref: c,
              })
            );
          return Vh(n.default, { Component: y, route: u }) || y;
        }
      );
    },
  });
function Vh(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const a1 = dA;
function hA(e) {
  const t = eA(e.routes, e),
    n = e.parseQuery || oA,
    r = e.stringifyQuery || Hh,
    s = e.history,
    o = js(),
    i = js(),
    a = js(),
    c = z1(jn);
  let u = jn;
  Kr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const l = Nc.bind(null, (O) => "" + O),
    f = Nc.bind(null, A4),
    h = Nc.bind(null, Fo);
  function p(O, z) {
    let R, V;
    return (
      r1(O) ? ((R = t.getRecordMatcher(O)), (V = z)) : (V = O), t.addRoute(V, R)
    );
  }
  function m(O) {
    const z = t.getRecordMatcher(O);
    z && t.removeRoute(z);
  }
  function g() {
    return t.getRoutes().map((O) => O.record);
  }
  function y(O) {
    return !!t.getRecordMatcher(O);
  }
  function k(O, z) {
    if (((z = Pe({}, z || c.value)), typeof O == "string")) {
      const S = Mc(n, O, z.path),
        D = t.resolve({ path: S.path }, z),
        L = s.createHref(S.fullPath);
      return Pe(S, D, {
        params: h(D.params),
        hash: Fo(S.hash),
        redirectedFrom: void 0,
        href: L,
      });
    }
    let R;
    if (O.path != null) R = Pe({}, O, { path: Mc(n, O.path, z.path).path });
    else {
      const S = Pe({}, O.params);
      for (const D in S) S[D] == null && delete S[D];
      (R = Pe({}, O, { params: f(S) })), (z.params = f(z.params));
    }
    const V = t.resolve(R, z),
      re = O.hash || "";
    V.params = l(h(V.params));
    const ie = D4(r, Pe({}, O, { hash: _4(re), path: V.path })),
      _ = s.createHref(ie);
    return Pe(
      { fullPath: ie, hash: re, query: r === Hh ? iA(O.query) : O.query || {} },
      V,
      { redirectedFrom: void 0, href: _ }
    );
  }
  function b(O) {
    return typeof O == "string" ? Mc(n, O, c.value.path) : Pe({}, O);
  }
  function E(O, z) {
    if (u !== O) return bs(8, { from: z, to: O });
  }
  function v(O) {
    return d(O);
  }
  function w(O) {
    return v(Pe(b(O), { replace: !0 }));
  }
  function x(O) {
    const z = O.matched[O.matched.length - 1];
    if (z && z.redirect) {
      const { redirect: R } = z;
      let V = typeof R == "function" ? R(O) : R;
      return (
        typeof V == "string" &&
          ((V = V.includes("?") || V.includes("#") ? (V = b(V)) : { path: V }),
          (V.params = {})),
        Pe(
          {
            query: O.query,
            hash: O.hash,
            params: V.path != null ? {} : O.params,
          },
          V
        )
      );
    }
  }
  function d(O, z) {
    const R = (u = k(O)),
      V = c.value,
      re = O.state,
      ie = O.force,
      _ = O.replace === !0,
      S = x(R);
    if (S)
      return d(
        Pe(b(S), {
          state: typeof S == "object" ? Pe({}, re, S.state) : re,
          force: ie,
          replace: _,
        }),
        z || R
      );
    const D = R;
    D.redirectedFrom = z;
    let L;
    return (
      !ie &&
        O4(r, V, R) &&
        ((L = bs(16, { to: D, from: V })), xe(V, V, !0, !1)),
      (L ? Promise.resolve(L) : $(D, V))
        .catch((M) => (Cn(M) ? (Cn(M, 2) ? M : ke(M)) : X(M, D, V)))
        .then((M) => {
          if (M) {
            if (Cn(M, 2))
              return d(
                Pe({ replace: _ }, b(M.to), {
                  state: typeof M.to == "object" ? Pe({}, re, M.to.state) : re,
                  force: ie,
                }),
                z || D
              );
          } else M = T(D, V, !0, _, re);
          return I(D, V, M), M;
        })
    );
  }
  function C(O, z) {
    const R = E(O, z);
    return R ? Promise.reject(R) : Promise.resolve();
  }
  function A(O) {
    const z = fe.values().next().value;
    return z && typeof z.runWithContext == "function"
      ? z.runWithContext(O)
      : O();
  }
  function $(O, z) {
    let R;
    const [V, re, ie] = pA(O, z);
    R = Uc(V.reverse(), "beforeRouteLeave", O, z);
    for (const S of V)
      S.leaveGuards.forEach((D) => {
        R.push(Yn(D, O, z));
      });
    const _ = C.bind(null, O, z);
    return (
      R.push(_),
      me(R)
        .then(() => {
          R = [];
          for (const S of o.list()) R.push(Yn(S, O, z));
          return R.push(_), me(R);
        })
        .then(() => {
          R = Uc(re, "beforeRouteUpdate", O, z);
          for (const S of re)
            S.updateGuards.forEach((D) => {
              R.push(Yn(D, O, z));
            });
          return R.push(_), me(R);
        })
        .then(() => {
          R = [];
          for (const S of ie)
            if (S.beforeEnter)
              if (Qt(S.beforeEnter))
                for (const D of S.beforeEnter) R.push(Yn(D, O, z));
              else R.push(Yn(S.beforeEnter, O, z));
          return R.push(_), me(R);
        })
        .then(
          () => (
            O.matched.forEach((S) => (S.enterCallbacks = {})),
            (R = Uc(ie, "beforeRouteEnter", O, z, A)),
            R.push(_),
            me(R)
          )
        )
        .then(() => {
          R = [];
          for (const S of i.list()) R.push(Yn(S, O, z));
          return R.push(_), me(R);
        })
        .catch((S) => (Cn(S, 8) ? S : Promise.reject(S)))
    );
  }
  function I(O, z, R) {
    a.list().forEach((V) => A(() => V(O, z, R)));
  }
  function T(O, z, R, V, re) {
    const ie = E(O, z);
    if (ie) return ie;
    const _ = z === jn,
      S = Kr ? history.state : {};
    R &&
      (V || _
        ? s.replace(O.fullPath, Pe({ scroll: _ && S && S.scroll }, re))
        : s.push(O.fullPath, re)),
      (c.value = O),
      xe(O, z, R, _),
      ke();
  }
  let U;
  function F() {
    U ||
      (U = s.listen((O, z, R) => {
        if (!Ee.listening) return;
        const V = k(O),
          re = x(V);
        if (re) {
          d(Pe(re, { replace: !0, force: !0 }), V).catch(ro);
          return;
        }
        u = V;
        const ie = c.value;
        Kr && L4($h(ie.fullPath, R.delta), Qa()),
          $(V, ie)
            .catch((_) =>
              Cn(_, 12)
                ? _
                : Cn(_, 2)
                ? (d(Pe(b(_.to), { force: !0 }), V)
                    .then((S) => {
                      Cn(S, 20) &&
                        !R.delta &&
                        R.type === Bo.pop &&
                        s.go(-1, !1);
                    })
                    .catch(ro),
                  Promise.reject())
                : (R.delta && s.go(-R.delta, !1), X(_, V, ie))
            )
            .then((_) => {
              (_ = _ || T(V, ie, !1)),
                _ &&
                  (R.delta && !Cn(_, 8)
                    ? s.go(-R.delta, !1)
                    : R.type === Bo.pop && Cn(_, 20) && s.go(-1, !1)),
                I(V, ie, _);
            })
            .catch(ro);
      }));
  }
  let Z = js(),
    G = js(),
    N;
  function X(O, z, R) {
    ke(O);
    const V = G.list();
    return (
      V.length ? V.forEach((re) => re(O, z, R)) : console.error(O),
      Promise.reject(O)
    );
  }
  function Ce() {
    return N && c.value !== jn
      ? Promise.resolve()
      : new Promise((O, z) => {
          Z.add([O, z]);
        });
  }
  function ke(O) {
    return (
      N ||
        ((N = !O),
        F(),
        Z.list().forEach(([z, R]) => (O ? R(O) : z())),
        Z.reset()),
      O
    );
  }
  function xe(O, z, R, V) {
    const { scrollBehavior: re } = e;
    if (!Kr || !re) return Promise.resolve();
    const ie =
      (!R && R4($h(O.fullPath, 0))) ||
      ((V || !R) && history.state && history.state.scroll) ||
      null;
    return Fr()
      .then(() => re(O, z, ie))
      .then((_) => _ && B4(_))
      .catch((_) => X(_, O, z));
  }
  const ve = (O) => s.go(O);
  let Q;
  const fe = new Set(),
    Ee = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: y,
      getRoutes: g,
      resolve: k,
      options: e,
      push: v,
      replace: w,
      go: ve,
      back: () => ve(-1),
      forward: () => ve(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: G.add,
      isReady: Ce,
      install(O) {
        const z = this;
        O.component("RouterLink", Lo),
          O.component("RouterView", a1),
          (O.config.globalProperties.$router = z),
          Object.defineProperty(O.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Et(c),
          }),
          Kr &&
            !Q &&
            c.value === jn &&
            ((Q = !0), v(s.location).catch((re) => {}));
        const R = {};
        for (const re in jn)
          Object.defineProperty(R, re, {
            get: () => c.value[re],
            enumerable: !0,
          });
        O.provide(ec, z), O.provide(Ef, vp(R)), O.provide(Zl, c);
        const V = O.unmount;
        fe.add(O),
          (O.unmount = function () {
            fe.delete(O),
              fe.size < 1 &&
                ((u = jn),
                U && U(),
                (U = null),
                (c.value = jn),
                (Q = !1),
                (N = !1)),
              V();
          });
      },
    };
  function me(O) {
    return O.reduce((z, R) => z.then(() => A(R)), Promise.resolve());
  }
  return Ee;
}
function pA(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((u) => ms(u, a)) ? r.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find((u) => ms(u, c)) || s.push(c));
  }
  return [n, r, s];
}
function Cf() {
  return Bt(ec);
}
function y9(e) {
  return Bt(Ef);
}
const Kh =
    "Welcome! To ensure your security, please sign this message to authenticate your account. Thank you for using our service!",
  Xh = "https://api2.infrax.network";
class Gs extends Error {}
Gs.prototype.name = "InvalidTokenError";
function mA(e) {
  return decodeURIComponent(
    atob(e).replace(/(.)/g, (t, n) => {
      let r = n.charCodeAt(0).toString(16).toUpperCase();
      return r.length < 2 && (r = "0" + r), "%" + r;
    })
  );
}
function bA(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return mA(t);
  } catch {
    return atob(t);
  }
}
function c1(e, t) {
  if (typeof e != "string")
    throw new Gs("Invalid token specified: must be a string");
  t || (t = {});
  const n = t.header === !0 ? 0 : 1,
    r = e.split(".")[n];
  if (typeof r != "string")
    throw new Gs(`Invalid token specified: missing part #${n + 1}`);
  let s;
  try {
    s = bA(r);
  } catch (o) {
    throw new Gs(
      `Invalid token specified: invalid base64 for part #${n + 1} (${
        o.message
      })`
    );
  }
  try {
    return JSON.parse(s);
  } catch (o) {
    throw new Gs(
      `Invalid token specified: invalid json for part #${n + 1} (${o.message})`
    );
  }
}
const Hs = Am(
    "api",
    () => {
      const e = dt(null),
        t = ge(() => {
          var y;
          return (y = e.value) == null ? void 0 : y.accessToken;
        }),
        n = ge(() => {
          var y;
          return (y = e.value) == null ? void 0 : y.refreshToken;
        }),
        r = ge(() => {
          var y;
          return (y = e.value) == null ? void 0 : y.tokenType;
        }),
        s = async (y, k = {}) => {
          await a();
          const b = { ...k.headers };
          t.value && (b.Authorization = `${r.value} ${t.value}`);
          const E = { ...k, headers: b },
            v = await fetch(`${Xh}${y}${k.query || ""}`, E);
          return v.ok
            ? await v.json()
            : (console.log("fetch error", v),
              Be.error("Failed to fetch data"),
              null);
        },
        o = async (y, k) => {
          const b = await s("/auth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: y, signature: k }),
          });
          return b.accessToken && (e.value = b), t.value;
        },
        i = () => (e.value = null),
        a = async () => {
          if (!t.value) return;
          if (c1(t.value).exp < Date.now() / 1e3 && n.value) {
            const k = new FormData();
            k.append("token", n.value);
            const E = await (
              await fetch(`${Xh}/auth/refresh`, { method: "POST", body: k })
            ).json();
            E.accessToken && (e.value = E);
          }
        };
      return {
        token: e,
        accessToken: t,
        refreshToken: n,
        fetch: s,
        auth: o,
        clearToken: i,
        getApps: async () => await s("/app"),
        submitJob: async (y) =>
          await s("/job", {
            method: "POST",
            headers: { Authorization: `${r.value} ${t.value}` },
            body: y,
          }),
        getJob: async (y) =>
          await s(`/job/${y}`, {
            method: "GET",
            headers: { Authorization: `${r.value} ${t.value}` },
          }),
        getJobs: async (y = 0, k = 25, b = null) =>
          await s("/job/finished", {
            query: `?offset=${y}&limit=${k}${b ? `&app_id=${b}` : ""}`,
          }),
        getUserJobs: async (y = 0, k = 25) =>
          await s("/job", { query: `?offset=${y}&limit=${k}` }),
        getPerfStats: async () => await (await fetch("/api/perf-stats")).json(),
        getDevlog: async () => await s("/devlog"),
        submitFeedback: async (y) =>
          await s("/bugreport", { method: "POST", body: y }),
      };
    },
    { persist: !0 }
  ),
  l1 = Am("user", () => {
    const e = Cf(),
      t = ge(() => V0.address),
      n = ge(() => {
        const { accessToken: r } = Li(Hs());
        return !!t.value && !!r.value;
      });
    return (
      Tr(t, async (r) => {
        const { accessToken: s } = Li(Hs());
        r
          ? s.value
            ? c1(s.value).sub !== r && Hs().auth(r, await Dh(Kh))
            : Hs().auth(r, await Dh(Kh))
          : e.currentRoute.value.path === "/profile" &&
            (Hs().clearToken(), e.push("/feed"));
      }),
      { address: t, isLoggedIn: n }
    );
  }),
  at = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  gA = {},
  yA = {
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function wA(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      yA,
      t[0] ||
        (t[0] = [
          ne("title", null, "X", -1),
          ne(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M7.93098 6.90625C8.11225 6.90298 8.33327 6.90245 8.6065 6.90245H10.0437C10.8145 6.90245 11.3196 6.90353 11.7133 6.94019C12.0844 6.97476 12.2774 7.03559 12.4256 7.1145C12.5732 7.19334 12.7311 7.31946 12.9677 7.60871C13.2187 7.91567 13.5032 8.33531 13.9361 8.97687C13.9361 8.97683 13.9361 8.9769 13.9361 8.97687L24.4292 24.5302C24.5824 24.7571 24.7064 24.9415 24.8055 25.094C24.6243 25.0972 24.4034 25.0977 24.1305 25.0977H22.6933C21.9225 25.0977 21.4174 25.0967 21.0237 25.06C20.6528 25.0255 20.4598 24.9647 20.3116 24.8858C20.164 24.807 20.006 24.6809 19.7693 24.3915C19.5182 24.0845 19.2338 23.6649 18.8009 23.0233C18.8009 23.0233 18.8009 23.0233 18.8009 23.0233L8.30789 7.47158C8.30785 7.47152 8.30793 7.47163 8.30789 7.47158M8.53522 4.719C8.55895 4.71901 8.58271 4.71901 8.6065 4.71901L10.0906 4.71901C10.8018 4.71899 11.4079 4.71897 11.9135 4.76606C12.4525 4.81626 12.9535 4.92494 13.442 5.1851C13.9297 5.44544 14.3008 5.80165 14.6443 6.22166C14.9663 6.61529 15.3061 7.11892 15.705 7.71005L15.7325 7.75082L26.2253 23.3038C26.2252 23.3036 26.2255 23.3039 26.2253 23.3038C26.239 23.324 26.253 23.3447 26.2666 23.3649C26.5685 23.8116 26.8602 24.2432 27.0386 24.6146C27.2243 25.0011 27.4477 25.6461 27.0937 26.3143C26.7425 26.9816 26.0889 27.1582 25.6659 27.2211C25.2598 27.2814 24.7402 27.2813 24.2018 27.2812C24.178 27.2812 24.1543 27.2812 24.1305 27.2812H22.6463C21.9352 27.2812 21.3291 27.2812 20.8235 27.2341C20.2845 27.1839 19.7835 27.0753 19.295 26.8151C18.8073 26.5548 18.4362 26.1985 18.0927 25.7785C17.7707 25.3849 17.4309 24.8813 17.032 24.2901L17.0045 24.2494L6.51135 8.69743C6.49625 8.67503 6.48104 8.6525 6.46598 8.63018C6.16583 8.18541 5.87593 7.75583 5.69841 7.38636C5.51207 6.99854 5.28985 6.3547 5.64287 5.68663C5.994 5.01869 6.64798 4.84202 7.07105 4.77914C7.47723 4.71877 7.9968 4.71889 8.53522 4.719ZM23.5764 5.69986C24.0369 6.08586 24.0991 6.77425 23.7153 7.23745L20.4589 11.1676C20.0751 11.6308 19.3906 11.6934 18.9301 11.3074C18.4695 10.9214 18.4073 10.233 18.7911 9.76983L22.0476 5.83964C22.4313 5.37645 23.1158 5.31387 23.5764 5.69986ZM12.5246 19.0377C12.9851 19.4237 13.0474 20.1121 12.6636 20.5753L8.15664 26.015C7.77286 26.4782 7.08839 26.5408 6.62783 26.1548C6.16727 25.7688 6.10503 25.0804 6.48881 24.6172L10.9958 19.1775C11.3796 18.7143 12.064 18.6517 12.5246 19.0377Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const vA = at(gA, [["render", wA]]),
  EA = {},
  CA = {
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function xA(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      CA,
      t[0] ||
        (t[0] = [
          ne("title", null, "Dex", -1),
          ne(
            "path",
            {
              d: "M21.8705 11.326C21.1468 10.8561 20.4929 10.4306 19.7374 9.94156C20.7913 9.45892 21.7753 9.02073 22.753 8.56984C23.4069 8.27136 25.9083 9.15409 26.0163 9.85901C26.1623 10.7862 26.0416 11.7515 26.0226 12.7041C26.0036 13.9678 24.8989 13.9805 24.1053 14.3362C19.6041 16.3747 15.1028 18.4069 10.608 20.4581C10.3921 20.5598 10.2461 20.8201 10.0556 21.0297C10.6524 21.4996 11.1984 21.9251 11.7888 22.3824C9.73818 23.7541 7.80817 24.44 5.76389 22.503C5.76389 22.4205 5.76389 22.2173 5.76389 22.0077C5.78929 18.7371 5.81468 18.7879 8.88745 17.4607C12.9633 15.7016 16.9947 13.8472 21.0389 12.0119C21.35 11.8721 21.5849 11.5737 21.8769 11.3323L21.8705 11.326ZM9.42074 8.35392C8.6462 7.96018 5.82738 9.2684 5.79564 10.0559C5.7131 12.069 5.77024 14.0949 5.77024 15.9683C8.99538 15.9238 9.28107 13.8535 8.94459 10.9767C11.2746 13.5106 13.3696 13.6821 15.6361 11.6181C13.5537 10.5195 11.5095 9.40176 9.42709 8.35392H9.42074ZM22.8165 20.763C21.7182 20.2105 20.6706 19.3087 19.5596 19.2261C18.5057 19.1499 17.382 19.9183 15.9536 20.4454C18.3724 21.7283 20.3723 22.8142 22.3975 23.843C23.3117 24.313 26.0353 22.8968 26.067 21.9188C26.1305 20.039 26.0861 18.1592 26.0861 16.2541C23.426 16.6605 23.1022 17.1241 22.8229 20.7566L22.8165 20.763ZM16.6202 4.84839C16.2075 4.65152 15.5218 4.68962 15.0901 4.89284C13.6934 5.566 12.3538 6.37253 10.9254 7.16635C14.3219 9.28745 17.6233 9.07788 21.2547 7.35052C19.5596 6.41698 18.1185 5.566 16.6138 4.84204L16.6202 4.84839ZM16.6329 24.097C16.3472 24.2939 15.6361 24.2939 15.4203 24.0843C14.4426 23.1381 13.5918 23.8811 12.7284 24.1796C12.0872 24.4019 11.4904 24.7702 10.6524 25.183C11.7444 25.6656 12.7983 25.8943 13.5411 26.5039C15.2298 27.882 16.7535 27.5772 18.4169 26.523C19.2676 25.9895 20.2453 25.6656 21.5277 25.075C19.7056 24.6559 18.5946 22.7698 16.6392 24.097H16.6329Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const _A = at(EA, [["render", xA]]),
  kA = {},
  SA = {
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function AA(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      SA,
      t[0] ||
        (t[0] = [
          ne("title", null, "Telegram", -1),
          ne(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M6.26989 14.7621C12.3262 12.098 16.3649 10.3421 18.3855 9.49356C24.1547 7.07112 25.3538 6.64997 26.1349 6.63612C26.307 6.63319 26.6909 6.67597 26.9402 6.87984C27.1504 7.05182 27.2082 7.28463 27.236 7.4478C27.2639 7.61097 27.2983 7.98304 27.2709 8.27332C26.9585 11.5896 25.6056 19.6376 24.9171 23.352C24.6258 24.9238 24.0525 25.4506 23.4974 25.5022C22.2907 25.6142 21.375 24.6973 20.2062 23.9242C18.3776 22.714 17.3446 21.9611 15.57 20.7802C13.5187 19.4157 14.8487 18.6657 16.0175 17.44C16.3233 17.1191 21.6392 12.2382 21.7419 11.7952C21.7547 11.7398 21.7668 11.5334 21.6451 11.4244C21.5233 11.3153 21.3442 11.3526 21.215 11.3824C21.0318 11.4244 18.1108 13.3737 12.4521 17.2298C11.6232 17.8045 10.872 18.0847 10.1993 18.07C9.45761 18.0537 8.03078 17.6468 6.97001 17.2986C5.66825 16.8716 4.63407 16.6459 4.72423 15.9211C4.77118 15.5436 5.2864 15.1572 6.26989 14.7625V14.7621Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const PA = at(kA, [["render", AA]]),
  TA = {
    class:
      "social-links is-flex is-justify-content-space-around is-align-items-center buttons",
  },
  DA = ["href", "aria-label"],
  OA = { class: "icon" },
  IA = {
    __name: "SocialLinksComp",
    setup(e) {
      const t = [
        { name: "X", icon: vA, href: "https://x.com/CrunchAI_Eth" },
        {
          name: "Dex",
          icon: _A,
          href: "https://www.dextools.io/app/en/ether/pair-explorer/0x8c05f97d992534450981cd3bb0fa5683c9250830?t=1753863015925",
        },
        { name: "Telegram", icon: PA, href: "https://t.me/CrunchAI_Network" },
      ];
      return (n, r) => (
        pe(),
        Oe("div", TA, [
          (pe(),
          Oe(
            Ge,
            null,
            cs(t, (s) =>
              ne(
                "a",
                {
                  key: s.name,
                  class: "social-links-item has-text-centered has-text-grey",
                  href: s.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": s.name,
                },
                [ne("span", OA, [(pe(), xt(uo(s.icon)))])],
                8,
                DA
              )
            ),
            64
          )),
        ])
      );
    },
  },
  $A = at(IA, [["__scopeId", "data-v-9a793550"]]),
  NA = {},
  MA = { src:"/favicon.ico" };
function UA(e, t) {
  return (
    pe(),
    Oe(
      "img",
      MA,
    )
  );
}
const FA = at(NA, [["render", UA]]),
  BA = {},
  LA = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function RA(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      LA,
      t[0] ||
        (t[0] = [
          ne("title", null, "link variant", -1),
          ne(
            "path",
            {
              d: "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const jA = at(BA, [["render", RA]]),
  HA = {},
  zA = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function WA(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      zA,
      t[0] ||
        (t[0] = [
          ne("title", null, "menu", -1),
          ne(
            "path",
            {
              d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const qA = at(HA, [["render", WA]]),
  GA = ["name"],
  VA = {
    __name: "GlitchText",
    props: {
      stacks: { type: Number, default: 3 },
      text: { type: String, default: null },
      minInterval: { type: Number, default: 10 },
      maxInterval: { type: Number, default: 30 },
    },
    setup(e) {
      const t = e,
        n = dt(null),
        r = dt(!1),
        s = () =>
          (Math.random() * (t.maxInterval - t.minInterval) + t.minInterval) *
          1e3,
        o = () => {
          (r.value = !0), (n.value = setTimeout(i, 1200));
        },
        i = () => {
          (r.value = !1), clearTimeout(n.value), setTimeout(o, s());
        };
      return (
        ys(() => {
          n.value = setTimeout(o, s());
        }),
        hu(() => {
          clearTimeout(n.value);
        }),
        (a, c) => (
          pe(),
          Oe(
            "div",
            {
              class: "stack is-clipped",
              style: oo({
                "--stacks": e.stacks,
                "--glitch-active": r.value ? 1 : 0,
              }),
            },
            [
              (pe(!0),
              Oe(
                Ge,
                null,
                cs(
                  e.stacks,
                  (u) => (
                    pe(),
                    Oe(
                      "span",
                      {
                        key: u,
                        style: oo({ "--index": u }),
                        name: `text-${u}`,
                      },
                      [
                        wg(
                          a.$slots,
                          "default",
                          {},
                          () => [ne("span", null, Sn(t.text), 1)],
                          !0
                        ),
                      ],
                      12,
                      GA
                    )
                  )
                ),
                128
              )),
            ],
            4
          )
        )
      );
    },
  },
  Jl = at(VA, [["__scopeId", "data-v-e44a71c0"]]),
  KA = {
    id: "sidenav",
    class:
      "sidebar is-flex is-flex-direction-column p-2 has-background-primary-00",
    role: "navigation",
  },
  XA = {
    class:
      "is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-space-between",
  },
  YA = {
    class:
      "navigation-links buttons is-flex is-flex-direction-column is-align-items-start is-justify-content-space-around",
  },
  ZA = {
    class: "has-text-white p-1 is-flex is-align-items-center",
    href: "/",
    "aria-label": "Home",
  },
  JA = { class: "icon is-medium" },
  QA = { class: "InfraW-logo-text nav-description ml-2" },
  eP = ["href", "onClick", "aria-label"],
  tP = { class: "icon is-medium" },
  nP = { class: "nav-description is-square-pixel-7 ml-2" },
  rP = {
    class:
      "nav-tooltip is-square-pixel-7 has-text-white has-background-primary-00 has-text-left ml-2",
  },
  sP = { class: "icon is-medium" },
  oP = { class: "navigation-links buttons are-small" },
  iP = ["href", "onClick", "aria-label"],
  aP = { class: "icon is-small" },
  cP = { class: "nav-description is-square-pixel-7 ml-2" },
  lP = {
    class:
      "nav-tooltip is-square-pixel-7 has-text-white has-background-primary-00 has-text-left ml-2",
  },
  uP = {
    __name: "SidebarComp",
    setup(e) {
      const t = l1(),
        { isLoggedIn: n } = Li(t),
        r = Cf(),
        s = ge(() =>
          r
            .getRoutes()
            .filter((a) => a.meta.sidebar && !(a.meta.requiresAuth && !n.value))
        ),
        o = ge(() => s.value.filter((a) => !a.meta.inMenu)),
        i = ge(() => s.value.filter((a) => a.meta.inMenu));
      return (a, c) => (
        pe(),
        Oe("aside", KA, [
          ne("div", XA, [
            ne("div", YA, [
              ne("a", ZA, [
                ne("span", JA, [he(FA)]),
                ne("span", QA, [
                  he(
                    Jl,
                    { stacks: 3 },
                    {
                      default: An(
                        () =>
                          c[1] ||
                          (c[1] = [
                            ne(
                              "span",
                              { class: "is-size-4 is-square-pixel-7" },
                              "Crunch",
                              -1
                            ),
                          ]) 
                      ),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              (pe(!0),
              Oe(
                Ge,
                null,
                cs(
                  o.value,
                  (u) => (
                    pe(),
                    xt(
                      Et(Lo),
                      { key: u.path, to: u.path, custom: "" },
                      {
                        default: An(({ navigate: l, href: f, isActive: h }) => [
                          u.meta.sidebar
                            ? (pe(),
                              Oe(
                                "a",
                                {
                                  key: 0,
                                  class: rr([
                                    "navigation-links-item button is-fullwidth is-justify-content-start",
                                    [h ? "is-primary" : "is-ghost"],
                                  ]),
                                  href: f,
                                  onClick: l,
                                  "aria-label": u.meta.name,
                                },
                                [
                                  ne("span", tP, [(pe(), xt(uo(u.meta.icon)))]),
                                  ne("span", nP, Sn(u.meta.name), 1),
                                  ne("span", rP, Sn(u.meta.name), 1),
                                ],
                                10,
                                eP
                              ))
                            : Dr("", !0),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["to"]
                    )
                  )
                ),
                128
              )),
              Et(n)
                ? Dr("", !0)
                : (pe(),
                  Oe(
                    "a",
                    {
                      key: 0,
                      class:
                        "navigation-links-item button is-ghost is-fullwidth is-justify-content-start has-text-danger",
                      onClick:
                        c[0] || (c[0] = (...u) => Et(Th) && Et(Th)(...u)),
                      "aria-label": "Connect",
                    },
                    [
                      ne("span", sP, [he(jA)]),
                      c[2] ||
                        (c[2] = ne(
                          "span",
                          { class: "nav-description is-square-pixel-7 ml-2" },
                          " Connect ",
                          -1
                        )),
                      c[3] ||
                        (c[3] = ne(
                          "span",
                          {
                            class:
                              "nav-tooltip is-square-pixel-7 has-text-white has-background-primary-00 has-text-left ml-2",
                          },
                          " Connect ",
                          -1
                        )),
                    ]
                  )),
            ]),
            ne("div", oP, [
              (pe(!0),
              Oe(
                Ge,
                null,
                cs(
                  i.value,
                  (u) => (
                    pe(),
                    xt(
                      Et(Lo),
                      { key: u.path, to: u.path, custom: "" },
                      {
                        default: An(({ navigate: l, href: f, isActive: h }) => [
                          u.meta.sidebar
                            ? (pe(),
                              Oe(
                                "a",
                                {
                                  key: 0,
                                  class: rr([
                                    "navigation-links-item button is-fullwidth is-justify-content-start is-ghost mx-1",
                                    [
                                      h
                                        ? "has-text-white"
                                        : "has-text-grey-light",
                                    ],
                                  ]),
                                  href: f,
                                  onClick: l,
                                  "aria-label": u.meta.name,
                                },
                                [
                                  ne("span", aP, [(pe(), xt(uo(u.meta.icon)))]),
                                  ne("span", cP, Sn(u.meta.name), 1),
                                  ne("span", lP, Sn(u.meta.name), 1),
                                ],
                                10,
                                iP
                              ))
                            : Dr("", !0),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["to"]
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
          he(
            Jl,
            { stacks: 3, "min-interval": 5, "max-interval": 10 },
            {
              default: An(
                () =>
                  c[4] ||
                  (c[4] = [
                    ne(
                      "div",
                      {
                        class:
                          "beta-tag is-flex is-align-items-center is-justify-content-center is-square-pixel-7 has-text-info has-text-centered is-size-7 my-4",
                      },
                      " Beta 1.7.2 ",
                      -1
                    ),
                  ])
              ),
              _: 1,
            }
          ),
          he($A),
        ])
      );
    },
  },
  fP = at(uP, [["__scopeId", "data-v-721ee339"]]),
  dP = {
    class: "mobile-bar p-2 has-background-primary-00",
    role: "contentinfo",
  },
  hP = { key: 0, class: "is-clipped pb-0" },
  pP = { class: "navigation-links field is-grouped" },
  mP = { class: "control is-expanded" },
  bP = ["href", "onClick", "aria-label"],
  gP = { class: "icon" },
  yP = { class: "is-square-pixel-7 is-size-7" },
  wP = {
    class:
      "navigation-links buttons is-flex is-flex-wrap-nowrap is-justify-content-space-around",
  },
  vP = ["href", "onClick", "aria-label"],
  EP = { class: "icon m-0" },
  CP = { class: "is-square-pixel-7 is-size-7" },
  xP = { class: "icon m-0" },
  _P = {
    __name: "MobileBarComp",
    setup(e) {
      const t = l1(),
        { isLoggedIn: n } = Li(t),
        r = Cf(),
        s = ge(() =>
          r
            .getRoutes()
            .filter((c) => c.meta.sidebar && !(c.meta.requiresAuth && !n.value))
        ),
        o = ge(() => s.value.filter((c) => !c.meta.inMenu)),
        i = ge(() => s.value.filter((c) => c.meta.inMenu)),
        a = dt(!1);
      return (c, u) => (
        pe(),
        Oe("div", dP, [
          he(
            yy,
            { name: "fade" },
            {
              default: An(() => [
                a.value
                  ? (pe(),
                    Oe("div", hP, [
                      ne("div", pP, [
                        (pe(!0),
                        Oe(
                          Ge,
                          null,
                          cs(
                            i.value,
                            (l) => (
                              pe(),
                              xt(
                                Et(Lo),
                                { key: l.path, to: l.path, custom: "" },
                                {
                                  default: An(
                                    ({ navigate: f, href: h, isActive: p }) => [
                                      ne("div", mP, [
                                        ne(
                                          "a",
                                          {
                                            class: rr([
                                              "button is-fullwidth",
                                              [p ? "is-primary" : "is-ghost"],
                                            ]),
                                            href: h,
                                            onClick: f,
                                            "aria-label": l.meta.name,
                                          },
                                          [
                                            ne("span", gP, [
                                              (pe(), xt(uo(l.meta.icon))),
                                            ]),
                                            ne("span", yP, Sn(l.meta.name), 1),
                                          ],
                                          10,
                                          bP
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _: 2,
                                },
                                1032,
                                ["to"]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      he(
                        Jl,
                        { stacks: 3 },
                        {
                          default: An(
                            () =>
                              u[1] ||
                              (u[1] = [
                                ne(
                                  "div",
                                  {
                                    class:
                                      "beta-tag is-flex is-align-items-center is-justify-content-center is-square-pixel-7 has-text-info is-size-7 my-0",
                                  },
                                  " Beta 1.7.2 ",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }
                      ),
                    ]))
                  : Dr("", !0),
              ]),
              _: 1,
            }
          ),
          ne("div", wP, [
            (pe(!0),
            Oe(
              Ge,
              null,
              cs(
                o.value,
                (l) => (
                  pe(),
                  xt(
                    Et(Lo),
                    { key: l.path, to: l.path, custom: "" },
                    {
                      default: An(({ navigate: f, href: h, isActive: p }) => [
                        l.meta.sidebar
                          ? (pe(),
                            Oe(
                              "a",
                              {
                                key: 0,
                                class: rr([
                                  "navigation-links-item button is-flex is-flex-direction-column has-text-centered",
                                  [p ? "is-primary" : "is-ghost"],
                                ]),
                                href: h,
                                onClick: f,
                                "aria-label": l.meta.name,
                              },
                              [
                                ne("span", EP, [(pe(), xt(uo(l.meta.icon)))]),
                                ne("span", CP, Sn(l.meta.name), 1),
                              ],
                              10,
                              vP
                            ))
                          : Dr("", !0),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["to"]
                  )
                )
              ),
              128
            )),
            ne(
              "a",
              {
                ref: "mobileMenuButton",
                class:
                  "navigation-links-item button is-flex is-flex-direction-column has-text-centered",
                onClick: u[0] || (u[0] = (l) => (a.value = !a.value)),
              },
              [
                ne("span", xP, [he(qA)]),
                u[2] ||
                  (u[2] = ne(
                    "span",
                    { class: "is-square-pixel-7 is-size-7" },
                    "Menu",
                    -1
                  )),
              ],
              512
            ),
          ]),
        ])
      );
    },
  },
  kP = at(_P, [["__scopeId", "data-v-80537eae"]]),
  SP = {},
  AP = { class: "footer has-background-inherit" },
  PP = { class: "content has-text-centered" };
function TP(e, t) {
  return (
    pe(),
    Oe("footer", AP, [
      ne("div", PP, [
        ne(
          "p",
          null,
          "© " + Sn(new Date().getFullYear()) + " Crunch AI Labs",
          1
        ),
      ]),
    ])
  );
}
const DP = at(SP, [["render", TP]]),
  OP = { class: "container px-2 is-fullhd is-relative" },
  IP = {
    __name: "App",
    setup(e) {
      const t = dt(!1);
      return (
        ys(() => {
          (t.value = window.innerWidth < 640),
            window.addEventListener("resize", () => {
              t.value = window.innerWidth < 640;
            });
        }),
        (n, r) => (
          pe(),
          Oe(
            Ge,
            null,
            [
              t.value ? Dr("", !0) : (pe(), xt(fP, { key: 0 })),
              ne(
                "main",
                {
                  class: rr([
                    "main-content is-flex-grow-1 is-flex is-flex-direction-column",
                    { "main-content-desktop": !t.value },
                  ]),
                },
                [ne("div", OP, [he(Et(a1))]), he(DP)],
                2
              ),
              t.value ? (pe(), xt(kP, { key: 1 })) : Dr("", !0),
            ],
            64
          )
        )
      );
    },
  },
  $P = {},
  NP = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function MP(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      NP,
      t[0] ||
        (t[0] = [
          ne("title", null, "earth", -1),
          ne(
            "path",
            {
              d: "M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const UP = at($P, [["render", MP]]),
  FP = {},
  BP = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function LP(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      BP,
      t[0] ||
        (t[0] = [
          ne("title", null, "apps", -1),
          ne(
            "path",
            {
              d: "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const RP = at(FP, [["render", LP]]),
  jP = {},
  HP = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function zP(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      HP,
      t[0] ||
        (t[0] = [
          ne("title", null, "expansion card", -1),
          ne(
            "path",
            {
              d: "M2,7V8.5H3V17H4.5V7C3.7,7 2.8,7 2,7M6,7V7L6,16H7V17H14V16H22V7H6M17.5,9A2.5,2.5 0 0,1 20,11.5A2.5,2.5 0 0,1 17.5,14A2.5,2.5 0 0,1 15,11.5A2.5,2.5 0 0,1 17.5,9Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const WP = at(jP, [["render", zP]]),
  qP = {},
  GP = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function VP(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      GP,
      t[0] ||
        (t[0] = [
          ne("title", null, "currency-sign", -1),
          ne(
            "path",
            {
              d: "M4.41 3L3 4.41L5.69 7.1C4.63 8.46 4 10.15 4 12C4 13.85 4.63 15.55 5.69 16.9L3 19.59L4.41 21L7.1 18.31C8.46 19.37 10.15 20 12 20C13.85 20 15.55 19.37 16.9 18.31L19.59 21L21 19.59L18.31 16.9C19.37 15.54 20 13.85 20 12C20 10.15 19.37 8.45 18.31 7.1L21 4.41L19.59 3L16.9 5.69C15.54 4.63 13.85 4 12 4C10.15 4 8.45 4.63 7.1 5.69L4.41 3M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const KP = at(qP, [["render", VP]]),
  XP = {},
  YP = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function ZP(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      YP,
      t[0] ||
        (t[0] = [
          ne("title", null, "post", -1),
          ne(
            "path",
            {
              d: "M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const JP = at(XP, [["render", ZP]]),
  QP = {},
  eT = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" };
function tT(e, t) {
  return (
    pe(),
    Oe(
      "svg",
      eT,
      t[0] ||
        (t[0] = [
          ne("title", null, "shield-bug", -1),
          ne(
            "path",
            {
              d: "M11 13H13V14H11V13M21 5V11C21 16.5 17.2 21.7 12 23C6.8 21.7 3 16.5 3 11V5L12 1L21 5M17 10H14.8C14.6 9.4 14.2 8.9 13.7 8.5L14.9 7.3L14.2 6.6L12.8 8H12C11.8 8 11.5 8 11.3 8.1L9.9 6.6L9.1 7.4L10.3 8.6C9.8 8.9 9.4 9.4 9.2 10H7V11H9V12H7V13H9V14H7V15H9.2C9.6 16.2 10.7 17 12 17S14.4 16.2 14.8 15H17V14H15V13H17V12H15V11H17V10M11 12H13V11H11V12Z",
              fill: "currentColor",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const nT = at(QP, [["render", tT]]),
  rT = hA({
    history: W4("/"),
    routes: [
      {
        path: "/",
        name: "home",
        component: () =>
          Wt(
            () => import("./HomeView.Cg0jJ8O7.js"),
            __vite__mapDeps([2, 3, 4])
          ),
      },
      {
        path: "/feed",
        name: "feed",
        component: () =>
          Wt(
            () => import("./FeedView.CejTGT96.js"),
            __vite__mapDeps([5, 6, 7, 8, 9])
          ),
        meta: { sidebar: !0, icon: UP, name: "Feed" },
      },
      {
        path: "/apps",
        name: "apps",
        component: () =>
          Wt(
            () => import("./AppsView.B45dr5BY.js"),
            __vite__mapDeps([10, 6, 7, 8, 11])
          ),
        meta: { sidebar: !0, icon: RP, name: "Apps" },
      },
      {
        path: "/nodes",
        name: "nodes",
        component: () =>
          Wt(
            () => import("./NodesView.VrvnBEAy.js"),
            __vite__mapDeps([12, 13])
          ),
        meta: { sidebar: !0, icon: WP, name: "Nodes" },
      },
      {
        path: "/devlog",
        name: "devlog",
        component: () => Wt(() => import("./DevlogView.CzypCmSl.js"), []),
        meta: { sidebar: !0, icon: JP, name: "Devlog", inMenu: !0 },
      },
      {
        path: "/feedback",
        name: "feedback",
        component: () =>
          Wt(
            () => import("./FeedbackView.BmYJq9jP.js"),
            __vite__mapDeps([14, 7])
          ),
        meta: { sidebar: !0, icon: nT, name: "Feedback", inMenu: !0 },
      },
      {
        path: "/staking",
        name: "staking",
        component: () =>
          Wt(
            () => import("./StakingView.BiNRU3vH.js"),
            __vite__mapDeps([15, 3])
          ),
        meta: {
          sidebar: !0,
          icon: KP,
          name: "Staking",
          requiresAuth: !0,
          inMenu: !0,
        },
      },
      { path: "/:pathMatch(.*)*", name: "not-found", redirect: "/" },
    ],
  }),
  si = dm(IP);
si.use(Om);
si.use(rT);
si.use(h4);
si.use(Cm, { autoClose: 3e3, theme: "dark" });
si.mount("#app");
export {
  Hs as $,
  z1 as A,
  fa as B,
  rr as C,
  oo as D,
  gi as E,
  Ge as F,
  Bt as G,
  Mg as H,
  Zn as I,
  wg as J,
  aT as K,
  pT as L,
  xt as M,
  cT as N,
  Un as O,
  An as P,
  lT as Q,
  l1 as R,
  Xh as S,
  Li as T,
  Sn as U,
  vA as V,
  PA as W,
  oT as X,
  dT as Y,
  cs as Z,
  at as _,
  ne as a,
  PT as a$,
  Jl as a0,
  y9 as a1,
  ry as a2,
  Cf as a3,
  Lo as a4,
  hT as a5,
  fT as a6,
  uo as a7,
  Be as a8,
  dy as a9,
  Or as aA,
  we as aB,
  en as aC,
  Ua as aD,
  Vt as aE,
  Jt as aF,
  jd as aG,
  O3 as aH,
  is as aI,
  KT as aJ,
  XT as aK,
  Jn as aL,
  gT as aM,
  yT as aN,
  wT as aO,
  vT as aP,
  cx as aQ,
  kT as aR,
  CT as aS,
  _T as aT,
  xT as aU,
  g0 as aV,
  za as aW,
  kt as aX,
  ST as aY,
  IT as aZ,
  u9 as a_,
  ce as aa,
  uu as ab,
  b9 as ac,
  V0 as ad,
  xE as ae,
  UE as af,
  FE as ag,
  BE as ah,
  yb as ai,
  CE as aj,
  _i as ak,
  _h as al,
  A0 as am,
  $c as an,
  w5 as ao,
  cn as ap,
  ln as aq,
  Yr as ar,
  p9 as as,
  tt as at,
  Ic as au,
  m9 as av,
  Nn as aw,
  Ob as ax,
  Ww as ay,
  Ib as az,
  uT as b,
  bh as b$,
  f9 as b0,
  ei as b1,
  UT as b2,
  WT as b3,
  zT as b4,
  OT as b5,
  BT as b6,
  ps as b7,
  FT as b8,
  e9 as b9,
  Gx as bA,
  YT as bB,
  o9 as bC,
  n9 as bD,
  i9 as bE,
  l9 as bF,
  r9 as bG,
  s9 as bH,
  a9 as bI,
  QT as bJ,
  Ux as bK,
  v0 as bL,
  Pc as bM,
  mT as bN,
  bT as bO,
  Wt as bP,
  K as bQ,
  wa as bR,
  wt as bS,
  ir as bT,
  go as bU,
  P2 as bV,
  Da as bW,
  In as bX,
  Wo as bY,
  to as bZ,
  pn as b_,
  VT as ba,
  Ht as bb,
  MT as bc,
  $T as bd,
  NT as be,
  ti as bf,
  Wa as bg,
  y0 as bh,
  TT as bi,
  DT as bj,
  ET as bk,
  jT as bl,
  HT as bm,
  qa as bn,
  AT as bo,
  af as bp,
  qT as bq,
  RT as br,
  LT as bs,
  GT as bt,
  d9 as bu,
  JT as bv,
  ZT as bw,
  qx as bx,
  c9 as by,
  t9 as bz,
  Oe as c,
  f5 as c0,
  pe as d,
  Am as e,
  ge as f,
  hu as g,
  Dr as h,
  he as i,
  op as j,
  x1 as k,
  ze as l,
  sT as m,
  Fr as n,
  ys as o,
  wu as p,
  cu as q,
  dt as r,
  Zs as s,
  V1 as t,
  Et as u,
  pt as v,
  Tr as w,
  gs as x,
  iT as y,
  g9 as z,
};
//# sourceMappingURL=main.Dqpd9PAW.js.map
