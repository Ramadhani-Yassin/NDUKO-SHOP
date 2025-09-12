import { useAttrs as jn, openBlock as T, createElementBlock as j, createElementVNode as ye, unref as o, reactive as Qt, computed as X, ref as te, toRef as Vt, watch as at, defineComponent as Le, onMounted as We, onUnmounted as ua, renderSlot as ue, normalizeProps as Ne, mergeProps as Ee, Fragment as be, normalizeStyle as tt, createCommentVNode as J, createTextVNode as ct, toDisplayString as Ue, onBeforeUpdate as Kn, nextTick as xe, normalizeClass as we, withModifiers as Wt, renderList as Re, withDirectives as na, vShow as la, createBlock as $e, withCtx as ke, withKeys as Gn, createVNode as Ze, Transition as Nt, createSlots as Ve, useSlots as Pt, guardReactiveProps as Qe, resolveDynamicComponent as ia, h as Qn, render as xa, getCurrentScope as qn, onScopeDispose as Xn, isRef as en, Teleport as Jn } from "vue";
import { format as ut, isEqual as Ot, set as Te, startOfMonth as Zn, isAfter as _t, getYear as me, getMonth as De, setMonth as xn, setYear as st, addMonths as At, subMonths as jt, isValid as ra, isBefore as Kt, eachDayOfInterval as pn, setHours as el, setMinutes as tl, setSeconds as yn, setMilliseconds as gn, getHours as ft, getMinutes as ht, getSeconds as Bt, startOfWeek as La, endOfWeek as hn, parse as Ia, isDate as al, addHours as nl, addYears as bn, subYears as kn, endOfYear as wn, startOfYear as oa, differenceInYears as ll, add as Dn, sub as rl, getWeek as ol, getISOWeek as sl, addDays as $t, isSameQuarter as tn, eachQuarterOfInterval as ul, startOfQuarter as il, endOfQuarter as an, getQuarter as nn, getDay as dl, differenceInCalendarDays as cl } from "date-fns";
function Et() {
  const e = jn();
  return T(), j(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img",
      ...e
    },
    [
      ye("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ye("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ye("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ye("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Et.compatConfig = {
  MODE: 3
};
function Mn() {
  return T(), j(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ye("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Mn.compatConfig = {
  MODE: 3
};
function za() {
  return T(), j(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
za.compatConfig = {
  MODE: 3
};
function Ha() {
  return T(), j(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Ha.compatConfig = {
  MODE: 3
};
function Ua() {
  return T(), j(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ye("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Ua.compatConfig = {
  MODE: 3
};
function Va() {
  return T(), j(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Va.compatConfig = {
  MODE: 3
};
function Wa() {
  return T(), j(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Wa.compatConfig = {
  MODE: 3
};
const qe = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), ja = (e, t, l) => {
  const a = Na(e, t, l);
  return a || K();
}, fl = (e, t, l) => {
  const a = t.dateInTz ? qe(new Date(e), t.dateInTz) : K(e);
  return l ? Ge(a, !0) : a;
}, Na = (e, t, l) => {
  if (!e) return null;
  const a = l ? Ge(K(e), !0) : K(e);
  return t ? t.exactMatch ? fl(e, t, l) : qe(a, t.timezone) : a;
}, vl = (e) => {
  if (!e) return 0;
  const t = /* @__PURE__ */ new Date(), l = new Date(t.toLocaleString("en-US", { timeZone: "UTC" })), a = new Date(t.toLocaleString("en-US", { timeZone: e })), n = a.getTimezoneOffset() / 60;
  return (+l - +a) / (1e3 * 60 * 60) - n;
};
var nt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(nt || {}), Mt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Mt || {}), Tt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Tt || {}), He = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(He || {});
const ml = ["timestamp", "date", "iso"];
var je = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(je || {}), Pe = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Pe || {});
function ln(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function pl(e) {
  return (t) => ut(qe(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const yl = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(pl(e));
    } catch {
      n = a.map(ln(t));
    }
  else
    n = a.map(ln(t));
  const i = n.slice(0, l), c = n.slice(l + 1, n.length);
  return [n[l]].concat(...c).concat(...i);
}, Ka = (e, t, l) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: Sn(n, t) });
  return l ? a.reverse() : a;
}, $n = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
    const c = i < 10 ? `0${i}` : i;
    return /* @__PURE__ */ new Date(`2017-${c}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const i = l === "long" ? "LLLL" : "LLL";
      return a.map((c, w) => {
        const f = ut(qe(c, "UTC"), i, { locale: e });
        return {
          text: f.charAt(0).toUpperCase() + f.substring(1),
          value: w
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: l, timeZone: "UTC" });
  return a.map((i, c) => {
    const w = n.format(i);
    return {
      text: w.charAt(0).toUpperCase() + w.substring(1),
      value: c
    };
  });
}, gl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ie = (e) => {
  const t = o(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, hl = (e) => ({ type: "dot", ...e ?? {} }), An = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ga = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ye = (e) => e, rn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, on = (e) => e === null, Tn = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, bl = (e) => {
  const t = [], l = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(l(n));
  }
  return t;
}, Gt = (e, t, l) => {
  const a = l != null, n = t != null;
  if (!a && !n) return !1;
  const i = +l, c = +t;
  return a && n ? +e > i || +e < c : a ? +e > i : n ? +e < c : !1;
}, Yt = (e, t) => bl(e).map((l) => l.map((a) => {
  const { active: n, disabled: i, isBetween: c, highlighted: w } = t(a);
  return {
    ...a,
    active: n,
    disabled: i,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: i,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: i && n,
      dp__cell_in_between: c,
      "dp--highlighted": w
    }
  };
})), yt = (e, t, l = !1) => {
  e && t.allowStopPropagation && (l && e.stopImmediatePropagation(), e.stopPropagation());
}, kl = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function wl(e, t) {
  let l = [...document.querySelectorAll(kl())];
  l = l.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = l.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= l.length))
    return l[a + (t ? -1 : 1)];
}
const Ea = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Sn = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), Qa = (e) => ut(e, "dd-MM-yyyy"), $a = (e) => Array.isArray(e), sa = (e, t) => t.get(Qa(e)), Dl = (e, t) => e ? t ? t instanceof Map ? !!sa(e, t) : t(K(e)) : !1 : !0, Ke = (e, t, l = !1, a) => {
  if (e.key === Pe.enter || e.key === Pe.space)
    return l && e.preventDefault(), t();
  if (a) return a(e);
}, sn = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].some(
  (e) => navigator.userAgent.includes(e)
) || navigator.userAgent.includes("Mac") && "ontouchend" in document, un = (e, t, l, a, n, i) => {
  const c = Ia(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: i });
  return ra(c) && al(c) ? a || n ? c : Te(c, {
    hours: +l.hours,
    minutes: +(l == null ? void 0 : l.minutes),
    seconds: +(l == null ? void 0 : l.seconds),
    milliseconds: 0
  }) : null;
}, Ml = (e, t, l, a, n, i) => {
  const c = Array.isArray(l) ? l[0] : l;
  if (typeof t == "string")
    return un(e, t, c, a, n, i);
  if (Array.isArray(t)) {
    let w = null;
    for (const f of t)
      if (w = un(e, f, c, a, n, i), w)
        break;
    return w;
  }
  return typeof t == "function" ? t(e) : null;
}, K = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), $l = (e, t, l) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), i = e.getDate().toString().padStart(2, "0"), c = e.getHours().toString().padStart(2, "0"), w = e.getMinutes().toString().padStart(2, "0"), f = l ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${i}T${c}:${w}:${f}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Ge = (e, t) => {
  const l = K(JSON.parse(JSON.stringify(e))), a = Te(l, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? Zn(a) : a;
}, gt = (e, t, l, a) => {
  let n = e ? K(e) : K();
  return (t || t === 0) && (n = el(n, +t)), (l || l === 0) && (n = tl(n, +l)), (a || a === 0) && (n = yn(n, +a)), gn(n, 0);
}, Oe = (e, t) => !e || !t ? !1 : Kt(Ge(e), Ge(t)), Me = (e, t) => !e || !t ? !1 : Ot(Ge(e), Ge(t)), Be = (e, t) => !e || !t ? !1 : _t(Ge(e), Ge(t)), da = (e, t, l) => e != null && e[0] && (e != null && e[1]) ? Be(l, e[0]) && Oe(l, e[1]) : e != null && e[0] && t ? Be(l, e[0]) && Oe(l, t) || Oe(l, e[0]) && Be(l, t) : !1, lt = (e) => {
  const t = Te(new Date(e), { date: 1 });
  return Ge(t);
}, Aa = (e, t, l) => t && (l || l === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, l] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, St = (e) => ({
  hours: ft(e),
  minutes: ht(e),
  seconds: Bt(e)
}), Pn = (e, t) => {
  if (t) {
    const l = me(K(t));
    if (l > e) return 12;
    if (l === e) return De(K(t));
  }
}, Rn = (e, t) => {
  if (t) {
    const l = me(K(t));
    return l < e ? -1 : l === e ? De(K(t)) : void 0;
  }
}, It = (e) => {
  if (e) return me(K(e));
}, Cn = (e, t) => {
  const l = Be(e, t) ? t : e, a = Be(t, e) ? t : e;
  return pn({ start: l, end: a });
}, Al = (e) => {
  const t = At(e, 1);
  return { month: De(t), year: me(t) };
}, it = (e, t) => {
  const l = La(e, { weekStartsOn: +t }), a = hn(e, { weekStartsOn: +t });
  return [l, a];
}, On = (e, t) => {
  const l = {
    hours: ft(K()),
    minutes: ht(K()),
    seconds: t ? Bt(K()) : 0
  };
  return Object.assign(l, e);
}, pt = (e, t, l) => [Te(K(e), { date: 1 }), Te(K(), { month: t, year: l, date: 1 })], dt = (e, t, l) => {
  let a = e ? K(e) : K();
  return (t || t === 0) && (a = xn(a, t)), l && (a = st(a, l)), a;
}, _n = (e, t, l, a, n) => {
  if (!a || n && !t || !n && !l) return !1;
  const i = n ? At(e, 1) : jt(e, 1), c = [De(i), me(i)];
  return n ? !Sl(...c, t) : !Tl(...c, l);
}, Tl = (e, t, l) => Oe(...pt(l, e, t)) || Me(...pt(l, e, t)), Sl = (e, t, l) => Be(...pt(l, e, t)) || Me(...pt(l, e, t)), Bn = (e, t, l, a, n, i, c) => {
  if (typeof t == "function" && !c) return t(e);
  const w = l ? { locale: l } : void 0;
  return Array.isArray(e) ? `${ut(e[0], i, w)}${n && !e[1] ? "" : a}${e[1] ? ut(e[1], i, w) : ""}` : ut(e, i, w);
}, Rt = (e) => {
  if (e) return null;
  throw new Error(Ga.prop("partial-range"));
}, ta = (e, t) => {
  if (t) return e();
  throw new Error(Ga.prop("range"));
}, Fa = (e) => Array.isArray(e) ? ra(e[0]) && (e[1] ? ra(e[1]) : !0) : e ? ra(e) : !1, Pl = (e, t) => Te(t ?? K(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Ta = (e, t, l, a) => {
  if (!e) return !0;
  if (a) {
    const n = l === "max" ? Kt(e, t) : _t(e, t), i = { seconds: 0, milliseconds: 0 };
    return n || Ot(Te(e, i), Te(t, i));
  }
  return l === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, Sa = (e, t, l) => e ? Pl(e, t) : K(l ?? t), dn = (e, t, l, a, n) => {
  if (Array.isArray(a)) {
    const c = Sa(e, a[0], t), w = Sa(e, a[1], t);
    return Ta(a[0], c, l, !!t) && Ta(a[1], w, l, !!t) && n;
  }
  const i = Sa(e, a, t);
  return Ta(a, i, l, !!t) && n;
}, Pa = (e) => Te(K(), St(e)), Rl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((l) => me(K(l)) === t).map((l) => De(l)) : [], Yn = (e, t, l) => typeof e == "function" ? e({ month: t, year: l }) : !!e.months.find((a) => a.month === t && a.year === l), qa = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), In = (e) => ut(e, "yyyy-MM-dd"), Ht = Qt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Nn = () => {
  const e = (a) => {
    Ht.menuFocused = a;
  }, t = (a) => {
    Ht.shiftKeyInMenu !== a && (Ht.shiftKeyInMenu = a);
  };
  return {
    control: X(() => ({ shiftKeyInMenu: Ht.shiftKeyInMenu, menuFocused: Ht.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Se = Qt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Ra = te(null), aa = te(!1), Ca = te(!1), Oa = te(!1), _a = te(!1), ze = te(0), _e = te(0), bt = () => {
  const e = X(() => aa.value ? [...Se.selectionGrid, Se.actionRow].filter((v) => v.length) : Ca.value ? [
    ...Se.timePicker[0],
    ...Se.timePicker[1],
    _a.value ? [] : [Ra.value],
    Se.actionRow
  ].filter((v) => v.length) : Oa.value ? [...Se.monthPicker, Se.actionRow] : [Se.monthYear, ...Se.calendar, Se.time, Se.actionRow].filter((v) => v.length)), t = (v) => {
    ze.value = v ? ze.value + 1 : ze.value - 1;
    let O = null;
    e.value[_e.value] && (O = e.value[_e.value][ze.value]), !O && e.value[_e.value + (v ? 1 : -1)] ? (_e.value = _e.value + (v ? 1 : -1), ze.value = v ? 0 : e.value[_e.value].length - 1) : O || (ze.value = v ? ze.value - 1 : ze.value + 1);
  }, l = (v) => {
    if (_e.value === 0 && !v || _e.value === e.value.length && v) return;
    _e.value = v ? _e.value + 1 : _e.value - 1, e.value[_e.value] ? e.value[_e.value] && !e.value[_e.value][ze.value] && ze.value !== 0 && (ze.value = e.value[_e.value].length - 1) : _e.value = v ? _e.value - 1 : _e.value + 1;
  }, a = (v) => {
    let O = null;
    e.value[_e.value] && (O = e.value[_e.value][ze.value]), O ? O.focus({ preventScroll: !aa.value }) : ze.value = v ? ze.value - 1 : ze.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, i = () => {
    t(!1), a(!1);
  }, c = () => {
    l(!1), a(!0);
  }, w = () => {
    l(!0), a(!0);
  }, f = (v, O) => {
    Se[O] = v;
  }, F = (v, O) => {
    Se[O] = v;
  }, p = () => {
    ze.value = 0, _e.value = 0;
  };
  return {
    buildMatrix: f,
    buildMultiLevelMatrix: F,
    setTimePickerBackRef: (v) => {
      Ra.value = v;
    },
    setSelectionGrid: (v) => {
      aa.value = v, p(), v || (Se.selectionGrid = []);
    },
    setTimePicker: (v, O = !1) => {
      Ca.value = v, _a.value = O, p(), v || (Se.timePicker[0] = [], Se.timePicker[1] = []);
    },
    setTimePickerElements: (v, O = 0) => {
      Se.timePicker[O] = v;
    },
    arrowRight: n,
    arrowLeft: i,
    arrowUp: c,
    arrowDown: w,
    clearArrowNav: () => {
      Se.monthYear = [], Se.calendar = [], Se.time = [], Se.actionRow = [], Se.selectionGrid = [], Se.timePicker[0] = [], Se.timePicker[1] = [], aa.value = !1, Ca.value = !1, _a.value = !1, Oa.value = !1, p(), Ra.value = null;
    },
    setMonthPicker: (v) => {
      Oa.value = v, p();
    },
    refSets: Se
    // exposed for testing
  };
}, cn = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Cl = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (t) => `Month picker${t ? " overlay" : ""}`,
  yearPicker: (t) => `Year picker${t ? " overlay" : ""}`,
  timeOverlay: (t) => `${t} overlay`,
  ...e ?? {}
}), fn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Ol = (e) => {
  const t = typeof e == "object" && e, l = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...l, count: fn(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, i = fn(n);
  return Object.assign(l, a, { count: i });
}, _l = (e, t, l) => e || (typeof l == "string" ? l : t), Bl = (e) => typeof e == "boolean" ? e ? cn({}) : !1 : cn(e), Yl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: "open",
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, Il = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Nl = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), El = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Fl = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0,
  arrowLeft: void 0,
  keepViewOnOffsetClick: !1,
  timeArrowHoldThreshold: 0,
  shadowDom: !1
}, ...e ?? {} }), Ll = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((l) => K(l)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, zl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Hl = (e) => {
  const t = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...t, ...e } : {
    enabled: e,
    ...t
  };
}, Ul = (e) => e ? typeof e == "string" ? {
  timezone: e,
  exactMatch: !1,
  dateInTz: void 0,
  emitTimezone: void 0,
  convertModel: !0
} : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: e.emitTimezone ?? void 0,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: void 0 }, Ba = (e, t, l) => new Map(
  e.map((a) => {
    const n = ja(a, t, l);
    return [Qa(n), n];
  })
), Vl = (e, t) => e.length ? new Map(
  e.map((l) => {
    const a = ja(l.date, t);
    return [Qa(a), l];
  })
) : null, Wl = (e) => {
  var t;
  return {
    minDate: Na(e.minDate, e.timezone, e.isSpecific),
    maxDate: Na(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: $a(e.disabledDates) ? Ba(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: $a(e.allowedDates) ? Ba(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && $a((t = e.highlight) == null ? void 0 : t.dates) ? Ba(e.highlight.dates, e.timezone) : e.highlight,
    markers: Vl(e.markers, e.timezone)
  };
}, jl = (e) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: null } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Kl = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((l) => {
      const a = l, n = e[a], i = typeof e[a] == "string" ? { [n]: !0 } : Object.fromEntries(n.map((c) => [c, !0]));
      return [l, i];
    })
  )
}), Ce = (e) => {
  const t = () => {
    const oe = e.enableSeconds ? ":ss" : "", Z = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${Z}${oe}` : `hh${Z}${oe} aa`;
  }, l = () => {
    var oe;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((oe = H.value) == null ? void 0 : oe.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (oe) => On(oe, e.enableSeconds), n = () => G.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, i = X(() => Ol(e.multiCalendars)), c = X(() => n()), w = X(() => Cl(e.ariaLabels)), f = X(() => Il(e.filters)), F = X(() => Bl(e.transitions)), p = X(() => Nl(e.actionRow)), _ = X(
    () => _l(e.previewFormat, e.format, l())
  ), k = X(() => Yl(e.textInput)), R = X(() => El(e.inline)), z = X(() => Fl(e.config)), N = X(() => Ll(e.highlight)), H = X(() => zl(e.weekNumbers)), v = X(() => Ul(e.timezone)), O = X(() => jl(e.multiDates)), S = X(
    () => Wl({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: N.value,
      markers: e.markers,
      timezone: v.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), G = X(() => Hl(e.range)), ae = X(() => Kl(e.ui));
  return {
    defaultedTransitions: F,
    defaultedMultiCalendars: i,
    defaultedStartTime: c,
    defaultedAriaLabels: w,
    defaultedFilters: f,
    defaultedActionRow: p,
    defaultedPreviewFormat: _,
    defaultedTextInput: k,
    defaultedInline: R,
    defaultedConfig: z,
    defaultedHighlight: N,
    defaultedWeekNumbers: H,
    defaultedRange: G,
    propDates: S,
    defaultedTz: v,
    defaultedMultiDates: O,
    defaultedUI: ae,
    getDefaultPattern: l,
    getDefaultStartTime: n
  };
}, Gl = (e, t, l) => {
  const a = te(), { defaultedTextInput: n, defaultedRange: i, defaultedTz: c, defaultedMultiDates: w, getDefaultPattern: f } = Ce(t), F = te(""), p = Vt(t, "format"), _ = Vt(t, "formatLocale");
  at(
    a,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", a.value, b(!0));
    },
    { deep: !0 }
  ), at(i, (s, le) => {
    s.enabled !== le.enabled && (a.value = null);
  }), at(p, () => {
    Q();
  });
  const k = (s) => c.value.timezone && c.value.convertModel ? qe(s, c.value.timezone) : s, R = (s) => {
    if (c.value.timezone && c.value.convertModel) {
      const le = vl(c.value.timezone);
      return nl(s, le);
    }
    return s;
  }, z = (s, le, pe = !1) => Bn(
    s,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    le ?? f(),
    pe
  ), N = (s) => s ? t.modelType ? ne(s) : {
    hours: ft(s),
    minutes: ht(s),
    seconds: t.enableSeconds ? Bt(s) : 0
  } : null, H = (s) => t.modelType ? ne(s) : { month: De(s), year: me(s) }, v = (s) => Array.isArray(s) ? w.value.enabled ? s.map((le) => O(le, st(K(), le))) : ta(
    () => [
      st(K(), s[0]),
      s[1] ? st(K(), s[1]) : Rt(i.value.partialRange)
    ],
    i.value.enabled
  ) : st(K(), +s), O = (s, le) => (typeof s == "string" || typeof s == "number") && t.modelType ? A(s) : le, S = (s) => Array.isArray(s) ? [
    O(
      s[0],
      gt(null, +s[0].hours, +s[0].minutes, s[0].seconds)
    ),
    O(
      s[1],
      gt(null, +s[1].hours, +s[1].minutes, s[1].seconds)
    )
  ] : O(s, gt(null, s.hours, s.minutes, s.seconds)), G = (s) => {
    const le = Te(K(), { date: 1 });
    return Array.isArray(s) ? w.value.enabled ? s.map((pe) => O(pe, dt(le, +pe.month, +pe.year))) : ta(
      () => [
        O(s[0], dt(le, +s[0].month, +s[0].year)),
        O(
          s[1],
          s[1] ? dt(le, +s[1].month, +s[1].year) : Rt(i.value.partialRange)
        )
      ],
      i.value.enabled
    ) : O(s, dt(le, +s.month, +s.year));
  }, ae = (s) => {
    if (Array.isArray(s))
      return s.map((le) => A(le));
    throw new Error(Ga.dateArr("multi-dates"));
  }, oe = (s) => {
    if (Array.isArray(s) && i.value.enabled) {
      const le = s[0], pe = s[1];
      return [
        K(Array.isArray(le) ? le[0] : null),
        K(Array.isArray(pe) ? pe[0] : null)
      ];
    }
    return K(s[0]);
  }, Z = (s) => t.modelAuto ? Array.isArray(s) ? [A(s[0]), A(s[1])] : t.autoApply ? [A(s)] : [A(s), null] : Array.isArray(s) ? ta(
    () => s[1] ? [
      A(s[0]),
      s[1] ? A(s[1]) : Rt(i.value.partialRange)
    ] : [A(s[0])],
    i.value.enabled
  ) : A(s), P = () => {
    Array.isArray(a.value) && i.value.enabled && a.value.length === 1 && a.value.push(Rt(i.value.partialRange));
  }, x = () => {
    const s = a.value;
    return [
      ne(s[0]),
      s[1] ? ne(s[1]) : Rt(i.value.partialRange)
    ];
  }, Y = () => a.value[1] ? x() : ne(Ye(a.value[0])), q = () => (a.value || []).map((s) => ne(s)), ie = (s = !1) => (s || P(), t.modelAuto ? Y() : w.value.enabled ? q() : Array.isArray(a.value) ? ta(() => x(), i.value.enabled) : ne(Ye(a.value))), fe = (s) => !s || Array.isArray(s) && !s.length ? null : t.timePicker ? S(Ye(s)) : t.monthPicker ? G(Ye(s)) : t.yearPicker ? v(Ye(s)) : w.value.enabled ? ae(Ye(s)) : t.weekPicker ? oe(Ye(s)) : Z(Ye(s)), h = (s) => {
    const le = fe(s);
    Fa(Ye(le)) ? (a.value = Ye(le), Q()) : (a.value = null, F.value = "");
  }, U = () => {
    const s = (le) => ut(le, n.value.format);
    return `${s(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? s(a.value[1]) : ""}`;
  }, ee = () => l.value && a.value ? Array.isArray(a.value) ? U() : ut(a.value, n.value.format) : z(a.value), y = () => a.value ? w.value.enabled ? a.value.map((s) => z(s)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? ee() : z(a.value) : "", Q = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? F.value = y() : F.value = t.format(a.value);
  }, A = (s) => {
    if (t.utc) {
      const le = new Date(s);
      return t.utc === "preserve" ? new Date(le.getTime() + le.getTimezoneOffset() * 6e4) : le;
    }
    return t.modelType ? ml.includes(t.modelType) ? k(new Date(s)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? k(
      Ia(s, f(), /* @__PURE__ */ new Date(), { locale: _.value })
    ) : k(
      Ia(s, t.modelType, /* @__PURE__ */ new Date(), { locale: _.value })
    ) : k(new Date(s));
  }, ne = (s) => s ? t.utc ? $l(s, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +R(s) : t.modelType === "iso" ? R(s).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? z(R(s)) : z(R(s), t.modelType, !0) : R(s) : "", de = (s, le = !1, pe = !1) => {
    if (pe) return s;
    if (e("update:model-value", s), c.value.emitTimezone && le) {
      const $ = Array.isArray(s) ? s.map((ge) => qe(Ye(ge), c.value.emitTimezone)) : qe(Ye(s), c.value.emitTimezone);
      e("update:model-timezone-value", $);
    }
  }, d = (s) => Array.isArray(a.value) ? w.value.enabled ? a.value.map((le) => s(le)) : [
    s(a.value[0]),
    a.value[1] ? s(a.value[1]) : Rt(i.value.partialRange)
  ] : s(Ye(a.value)), m = () => {
    if (Array.isArray(a.value)) {
      const s = it(a.value[0], t.weekStart), le = a.value[1] ? it(a.value[1], t.weekStart) : [];
      return [s.map((pe) => K(pe)), le.map((pe) => K(pe))];
    }
    return it(a.value, t.weekStart).map((s) => K(s));
  }, L = (s, le) => de(Ye(d(s)), !1, le), u = (s) => {
    const le = m();
    return s ? le : e("update:model-value", m());
  }, b = (s = !1) => (s || Q(), t.monthPicker ? L(H, s) : t.timePicker ? L(N, s) : t.yearPicker ? L(me, s) : t.weekPicker ? u(s) : de(ie(s), !0, s));
  return {
    inputValue: F,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? i.value.enabled ? i.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: h,
    formatInputValue: Q,
    emitModelValue: b
  };
}, Ql = (e, t) => {
  const { defaultedFilters: l, propDates: a } = Ce(e), { validateMonthYearInRange: n } = kt(e), i = (p, _) => {
    let k = p;
    return l.value.months.includes(De(k)) ? (k = _ ? At(p, 1) : jt(p, 1), i(k, _)) : k;
  }, c = (p, _) => {
    let k = p;
    return l.value.years.includes(me(k)) ? (k = _ ? bn(p, 1) : kn(p, 1), c(k, _)) : k;
  }, w = (p, _ = !1) => {
    const k = Te(K(), { month: e.month, year: e.year });
    let R = p ? At(k, 1) : jt(k, 1);
    e.disableYearSelect && (R = st(R, e.year));
    let z = De(R), N = me(R);
    l.value.months.includes(z) && (R = i(R, p), z = De(R), N = me(R)), l.value.years.includes(N) && (R = c(R, p), N = me(R)), n(z, N, p, e.preventMinMaxNavigation) && f(z, N, _);
  }, f = (p, _, k) => {
    t("update-month-year", { month: p, year: _, fromNav: k });
  }, F = X(() => (p) => _n(
    Te(K(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    p
  ));
  return { handleMonthYearChange: w, isDisabled: F, updateMonthYear: f };
}, ca = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, rt = {
  ...ca,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 }
}, ql = ["title"], Xl = ["disabled"], Jl = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...rt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const l = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: i,
      defaultedMultiCalendars: c,
      defaultedTextInput: w,
      defaultedInline: f,
      defaultedRange: F,
      defaultedMultiDates: p
    } = Ce(a), { isTimeValid: _, isMonthValid: k } = kt(a), { buildMatrix: R } = bt(), z = te(null), N = te(null), H = te(!1), v = te({}), O = te(null), S = te(null);
    We(() => {
      a.arrowNavigation && R([Ie(z), Ie(N)], "actionRow"), G(), window.addEventListener("resize", G);
    }), ua(() => {
      window.removeEventListener("resize", G);
    });
    const G = () => {
      H.value = !1, setTimeout(() => {
        var ee, y;
        const h = (ee = O.value) == null ? void 0 : ee.getBoundingClientRect(), U = (y = S.value) == null ? void 0 : y.getBoundingClientRect();
        h && U && (v.value.maxWidth = `${U.width - h.width - 20}px`), H.value = !0;
      }, 0);
    }, ae = X(() => F.value.enabled && !F.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), oe = X(
      () => !_.value(a.internalModelValue) || !k.value(a.internalModelValue) || !ae.value
    ), Z = () => {
      const h = i.value;
      return a.timePicker || a.monthPicker, h(Ye(a.internalModelValue));
    }, P = () => {
      const h = a.internalModelValue;
      return c.value.count > 0 ? `${x(h[0])} - ${x(h[1])}` : [x(h[0]), x(h[1])];
    }, x = (h) => Bn(
      h,
      i.value,
      a.formatLocale,
      w.value.rangeSeparator,
      a.modelAuto,
      i.value
    ), Y = X(() => !a.internalModelValue || !a.menuMount ? "" : typeof i.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? P() : p.value.enabled ? a.internalModelValue.map((h) => `${x(h)}`) : a.modelAuto ? `${x(a.internalModelValue[0])}` : `${x(a.internalModelValue[0])} -` : x(a.internalModelValue) : Z()), q = () => p.value.enabled ? "; " : " - ", ie = X(
      () => Array.isArray(Y.value) ? Y.value.join(q()) : Y.value
    ), fe = () => {
      _.value(a.internalModelValue) && k.value(a.internalModelValue) && ae.value ? l("select-date") : l("invalid-select");
    };
    return (h, U) => (T(), j("div", {
      ref_key: "actionRowRef",
      ref: S,
      class: "dp__action_row"
    }, [
      h.$slots["action-row"] ? ue(h.$slots, "action-row", Ne(Ee({ key: 0 }, {
        internalModelValue: h.internalModelValue,
        disabled: oe.value,
        selectDate: () => h.$emit("select-date"),
        closePicker: () => h.$emit("close-picker")
      }))) : (T(), j(be, { key: 1 }, [
        o(n).showPreview ? (T(), j("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ie.value,
          style: tt(v.value)
        }, [
          h.$slots["action-preview"] && H.value ? ue(h.$slots, "action-preview", {
            key: 0,
            value: h.internalModelValue
          }) : J("", !0),
          !h.$slots["action-preview"] && H.value ? (T(), j(be, { key: 1 }, [
            ct(Ue(ie.value), 1)
          ], 64)) : J("", !0)
        ], 12, ql)) : J("", !0),
        ye("div", {
          ref_key: "actionBtnContainer",
          ref: O,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          h.$slots["action-buttons"] ? ue(h.$slots, "action-buttons", {
            key: 0,
            value: h.internalModelValue
          }) : J("", !0),
          h.$slots["action-buttons"] ? J("", !0) : (T(), j(be, { key: 1 }, [
            !o(f).enabled && o(n).showCancel ? (T(), j("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: z,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: U[0] || (U[0] = (ee) => h.$emit("close-picker")),
              onKeydown: U[1] || (U[1] = (ee) => o(Ke)(ee, () => h.$emit("close-picker")))
            }, Ue(h.cancelText), 545)) : J("", !0),
            o(n).showNow ? (T(), j("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: U[2] || (U[2] = (ee) => h.$emit("select-now")),
              onKeydown: U[3] || (U[3] = (ee) => o(Ke)(ee, () => h.$emit("select-now")))
            }, Ue(h.nowButtonLabel), 33)) : J("", !0),
            o(n).showSelect ? (T(), j("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: N,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: oe.value,
              "data-test": "select-button",
              onKeydown: U[4] || (U[4] = (ee) => o(Ke)(ee, () => fe())),
              onClick: fe
            }, Ue(h.selectText), 41, Xl)) : J("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Zl = ["role", "aria-label", "tabindex"], xl = { class: "dp__selection_grid_header" }, er = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], tr = ["aria-label"], qt = /* @__PURE__ */ Le({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: l }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: i } = bt(), c = l, w = e, { defaultedAriaLabels: f, defaultedTextInput: F, defaultedConfig: p } = Ce(
      w
    ), { hideNavigationButtons: _ } = ma(), k = te(!1), R = te(null), z = te(null), N = te([]), H = te(), v = te(null), O = te(0), S = te(null);
    Kn(() => {
      R.value = null;
    }), We(() => {
      xe().then(() => q()), w.noOverlayFocus || ae(), G(!0);
    }), ua(() => G(!1));
    const G = (d) => {
      var m;
      w.arrowNavigation && ((m = w.headerRefs) != null && m.length ? i(d) : a(d));
    }, ae = () => {
      var m;
      const d = Ie(z);
      d && (F.value.enabled || (R.value ? (m = R.value) == null || m.focus({ preventScroll: !0 }) : d.focus({ preventScroll: !0 })), k.value = d.clientHeight < d.scrollHeight);
    }, oe = X(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !w.useRelative,
        "dp--overlay-relative": w.useRelative
      })
    ), Z = X(
      () => w.useRelative ? { height: `${w.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), P = X(() => ({
      dp__overlay_col: !0
    })), x = X(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: k.value,
        dp__button_bottom: w.isLast
      })
    ), Y = X(() => {
      var d, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((d = w.items) == null ? void 0 : d.length) <= 6,
        dp__container_block: ((m = w.items) == null ? void 0 : m.length) > 6
      };
    });
    at(
      () => w.items,
      () => q(!1),
      { deep: !0 }
    );
    const q = (d = !0) => {
      xe().then(() => {
        const m = Ie(R), L = Ie(z), u = Ie(v), b = Ie(S), I = u ? u.getBoundingClientRect().height : 0;
        L && (L.getBoundingClientRect().height ? O.value = L.getBoundingClientRect().height - I : O.value = p.value.modeHeight - I), m && b && d && (b.scrollTop = m.offsetTop - b.offsetTop - (O.value / 2 - m.getBoundingClientRect().height) - I);
      });
    }, ie = (d) => {
      d.disabled || c("selected", d.value);
    }, fe = () => {
      c("toggle"), c("reset-flow");
    }, h = () => {
      w.escClose && fe();
    }, U = (d, m, L, u) => {
      d && ((m.active || m.value === w.focusValue) && (R.value = d), w.arrowNavigation && (Array.isArray(N.value[L]) ? N.value[L][u] = d : N.value[L] = [d], ee()));
    }, ee = () => {
      var m, L;
      const d = (m = w.headerRefs) != null && m.length ? [w.headerRefs].concat(N.value) : N.value.concat([w.skipButtonRef ? [] : [v.value]]);
      n(Ye(d), (L = w.headerRefs) != null && L.length ? "monthPicker" : "selectionGrid");
    }, y = (d) => {
      w.arrowNavigation || yt(d, p.value, !0);
    }, Q = (d) => {
      H.value = d, c("hover-value", d);
    }, A = () => {
      if (fe(), !w.isLast) {
        const d = Ea(w.menuWrapRef ?? null, "action-row");
        if (d) {
          const m = Tn(d);
          m == null || m.focus();
        }
      }
    }, ne = (d) => {
      switch (d.key) {
        case Pe.esc:
          return h();
        case Pe.arrowLeft:
          return y(d);
        case Pe.arrowRight:
          return y(d);
        case Pe.arrowUp:
          return y(d);
        case Pe.arrowDown:
          return y(d);
        default:
          return;
      }
    }, de = (d) => {
      if (d.key === Pe.enter) return fe();
      if (d.key === Pe.tab) return A();
    };
    return t({ focusGrid: ae }), (d, m) => {
      var L;
      return T(), j("div", {
        ref_key: "gridWrapRef",
        ref: z,
        class: we(oe.value),
        style: tt(Z.value),
        role: d.useRelative ? void 0 : "dialog",
        "aria-label": d.overlayLabel,
        tabindex: d.useRelative ? void 0 : "0",
        onKeydown: ne,
        onClick: m[0] || (m[0] = Wt(() => {
        }, ["prevent"]))
      }, [
        ye("div", {
          ref_key: "containerRef",
          ref: S,
          class: we(Y.value),
          style: tt({ "--dp-overlay-height": `${O.value}px` }),
          role: "grid"
        }, [
          ye("div", xl, [
            ue(d.$slots, "header")
          ]),
          d.$slots.overlay ? ue(d.$slots, "overlay", { key: 0 }) : (T(!0), j(be, { key: 1 }, Re(d.items, (u, b) => (T(), j("div", {
            key: b,
            class: we(["dp__overlay_row", { dp__flex_row: d.items.length >= 3 }]),
            role: "row"
          }, [
            (T(!0), j(be, null, Re(u, (I, s) => (T(), j("div", {
              key: I.value,
              ref_for: !0,
              ref: (le) => U(le, I, b, s),
              role: "gridcell",
              class: we(P.value),
              "aria-selected": I.active || void 0,
              "aria-disabled": I.disabled || void 0,
              tabindex: "0",
              "data-test": I.text,
              onClick: Wt((le) => ie(I), ["prevent"]),
              onKeydown: (le) => o(Ke)(le, () => ie(I), !0),
              onMouseover: (le) => Q(I.value)
            }, [
              ye("div", {
                class: we(I.className)
              }, [
                d.$slots.item ? ue(d.$slots, "item", {
                  key: 0,
                  item: I
                }) : J("", !0),
                d.$slots.item ? J("", !0) : (T(), j(be, { key: 1 }, [
                  ct(Ue(I.text), 1)
                ], 64))
              ], 2)
            ], 42, er))), 128))
          ], 2))), 128))
        ], 6),
        d.$slots["button-icon"] ? na((T(), j("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: v,
          type: "button",
          "aria-label": (L = o(f)) == null ? void 0 : L.toggleOverlay,
          class: we(x.value),
          tabindex: "0",
          onClick: fe,
          onKeydown: de
        }, [
          ue(d.$slots, "button-icon")
        ], 42, tr)), [
          [la, !o(_)(d.hideNavigation, d.type)]
        ]) : J("", !0)
      ], 46, Zl);
    };
  }
}), fa = /* @__PURE__ */ Le({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, l = X(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = X(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, i) => (T(), j("div", {
      class: we({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      })
    }, [
      (T(!0), j(be, null, Re(l.value, (c, w) => (T(), j("div", {
        key: c,
        class: we(a.value)
      }, [
        ue(n.$slots, "default", {
          instance: c,
          index: w
        })
      ], 2))), 128))
    ], 2));
  }
}), ar = ["data-dp-element", "aria-label", "aria-disabled"], Ut = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const l = t, a = te(null);
    return We(() => l("set-ref", a)), (n, i) => (T(), j("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      "data-dp-element": n.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: i[0] || (i[0] = (c) => n.$emit("activate")),
      onKeydown: i[1] || (i[1] = (c) => o(Ke)(c, () => n.$emit("activate"), !0))
    }, [
      ye("span", {
        class: we(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        ue(n.$slots, "default")
      ], 2)
    ], 40, ar));
  }
}), nr = ["aria-label", "data-test"], En = /* @__PURE__ */ Le({
  __name: "YearModePicker",
  props: {
    ...rt,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const l = t, a = e, { showRightIcon: n, showLeftIcon: i } = ma(), { defaultedConfig: c, defaultedMultiCalendars: w, defaultedAriaLabels: f, defaultedTransitions: F, defaultedUI: p } = Ce(a), { showTransition: _, transitionName: k } = Xt(F), R = te(!1), z = (v = !1, O) => {
      R.value = !R.value, l("toggle-year-picker", { flow: v, show: O });
    }, N = (v) => {
      R.value = !1, l("year-select", v);
    }, H = (v = !1) => {
      l("handle-year", v);
    };
    return (v, O) => {
      var S, G, ae, oe, Z;
      return T(), j(be, null, [
        ye("div", {
          class: we(["dp--year-mode-picker", { "dp--hidden-el": R.value }])
        }, [
          o(i)(o(w), e.instance) ? (T(), $e(Ut, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (S = o(f)) == null ? void 0 : S.prevYear,
            disabled: e.isDisabled(!1),
            class: we((G = o(p)) == null ? void 0 : G.navBtnPrev),
            onActivate: O[0] || (O[0] = (P) => H(!1))
          }, {
            default: ke(() => [
              v.$slots["arrow-left"] ? ue(v.$slots, "arrow-left", { key: 0 }) : J("", !0),
              v.$slots["arrow-left"] ? J("", !0) : (T(), $e(o(za), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
          ye("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(ae = o(f)) == null ? void 0 : ae.openYearsOverlay}`,
            "data-test": `year-mode-btn-${e.instance}`,
            onClick: O[1] || (O[1] = () => z(!1)),
            onKeydown: O[2] || (O[2] = Gn(() => z(!1), ["enter"]))
          }, [
            v.$slots.year ? ue(v.$slots, "year", {
              key: 0,
              year: e.year
            }) : J("", !0),
            v.$slots.year ? J("", !0) : (T(), j(be, { key: 1 }, [
              ct(Ue(e.year), 1)
            ], 64))
          ], 40, nr),
          o(n)(o(w), e.instance) ? (T(), $e(Ut, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (oe = o(f)) == null ? void 0 : oe.nextYear,
            disabled: e.isDisabled(!0),
            class: we((Z = o(p)) == null ? void 0 : Z.navBtnNext),
            onActivate: O[3] || (O[3] = (P) => H(!0))
          }, {
            default: ke(() => [
              v.$slots["arrow-right"] ? ue(v.$slots, "arrow-right", { key: 0 }) : J("", !0),
              v.$slots["arrow-right"] ? J("", !0) : (T(), $e(o(Ha), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : J("", !0)
        ], 2),
        Ze(Nt, {
          name: o(k)(e.showYearPicker),
          css: o(_)
        }, {
          default: ke(() => {
            var P, x;
            return [
              e.showYearPicker ? (T(), $e(qt, {
                key: 0,
                items: e.items,
                "text-input": v.textInput,
                "esc-close": v.escClose,
                config: v.config,
                "is-last": v.autoApply && !o(c).keepActionRow,
                "hide-navigation": v.hideNavigation,
                "aria-labels": v.ariaLabels,
                "overlay-label": (x = (P = o(f)) == null ? void 0 : P.yearPicker) == null ? void 0 : x.call(P, !0),
                type: "year",
                onToggle: z,
                onSelected: O[4] || (O[4] = (Y) => N(Y))
              }, Ve({
                "button-icon": ke(() => [
                  v.$slots["calendar-icon"] ? ue(v.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                  v.$slots["calendar-icon"] ? J("", !0) : (T(), $e(o(Et), { key: 1 }))
                ]),
                _: 2
              }, [
                v.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: ke(({ item: Y }) => [
                    ue(v.$slots, "year-overlay-value", {
                      text: Y.text,
                      value: Y.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels", "overlay-label"])) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 64);
    };
  }
}), Xa = (e, t, l) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => Me(e, a))) {
      const a = t.value.filter((n) => !Me(n, e));
      t.value = a.length ? a : null;
    } else (l && +l > t.value.length || !l) && t.value.push(e);
  else
    t.value = [e];
}, Ja = (e, t, l) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? Oe(t, a[0]) ? (a.unshift(t), l("range-start", a[0]), l("range-start", a[1])) : (a[1] = t, l("range-end", t)) : (a = [t], l("range-start", t)), a;
}, va = (e, t, l, a) => {
  e && (e[0] && e[1] && l && t("auto-apply"), e[0] && !e[1] && a && l && t("auto-apply"));
}, Fn = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => qe(K(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = qe(K(e.value), e.timezone));
}, Ln = (e, t, l, a) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && a.value.partialRange) ? a.value.fixedStart && (Be(e, t.value[0]) || Me(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (Oe(e, t.value[1]) || Me(e, t.value[1])) ? [e, t.value[1]] : (l("invalid-fixed-range", e), t.value) : [], zn = ({
  multiCalendars: e,
  range: t,
  highlight: l,
  propDates: a,
  calendars: n,
  modelValue: i,
  props: c,
  filters: w,
  year: f,
  month: F,
  emit: p
}) => {
  const _ = X(() => Ka(c.yearRange, c.locale, c.reverseYears)), k = te([!1]), R = X(() => (Y, q) => {
    const ie = Te(lt(/* @__PURE__ */ new Date()), {
      month: F.value(Y),
      year: f.value(Y)
    }), fe = q ? wn(ie) : oa(ie);
    return _n(
      fe,
      a.value.maxDate,
      a.value.minDate,
      c.preventMinMaxNavigation,
      q
    );
  }), z = () => Array.isArray(i.value) && e.value.solo && i.value[1], N = () => {
    for (let Y = 0; Y < e.value.count; Y++)
      if (Y === 0)
        n.value[Y] = n.value[0];
      else if (Y === e.value.count - 1 && z())
        n.value[Y] = {
          month: De(i.value[1]),
          year: me(i.value[1])
        };
      else {
        const q = Te(K(), n.value[Y - 1]);
        n.value[Y] = { month: De(q), year: me(bn(q, 1)) };
      }
  }, H = (Y) => {
    if (!Y) return N();
    const q = Te(K(), n.value[Y]);
    return n.value[0].year = me(kn(q, e.value.count - 1)), N();
  }, v = (Y, q) => {
    const ie = ll(q, Y);
    return t.value.showLastInRange && ie > 1 ? q : Y;
  }, O = (Y) => c.focusStartDate || e.value.solo ? Y[0] : Y[1] ? v(Y[0], Y[1]) : Y[0], S = () => {
    if (i.value) {
      const Y = Array.isArray(i.value) ? O(i.value) : i.value;
      n.value[0] = { month: De(Y), year: me(Y) };
    }
  }, G = () => {
    S(), e.value.count && N();
  };
  at(i, (Y, q) => {
    c.isTextInputDate && JSON.stringify(Y ?? {}) !== JSON.stringify(q ?? {}) && G();
  }), We(() => {
    G();
  });
  const ae = (Y, q) => {
    n.value[q].year = Y, p("update-month-year", { instance: q, year: Y, month: n.value[q].month }), e.value.count && !e.value.solo && H(q);
  }, oe = X(() => (Y) => Yt(_.value, (q) => {
    var U;
    const ie = f.value(Y) === q.value, fe = Gt(
      q.value,
      It(a.value.minDate),
      It(a.value.maxDate)
    ) || ((U = w.value.years) == null ? void 0 : U.includes(f.value(Y))), h = qa(l.value, q.value);
    return { active: ie, disabled: fe, highlighted: h };
  })), Z = (Y, q) => {
    ae(Y, q), x(q);
  }, P = (Y, q = !1) => {
    if (!R.value(Y, q)) {
      const ie = q ? f.value(Y) + 1 : f.value(Y) - 1;
      ae(ie, Y);
    }
  }, x = (Y, q = !1, ie) => {
    q || p("reset-flow"), ie !== void 0 ? k.value[Y] = ie : k.value[Y] = !k.value[Y], k.value[Y] ? p("overlay-toggle", { open: !0, overlay: He.year }) : (p("overlay-closed"), p("overlay-toggle", { open: !1, overlay: He.year }));
  };
  return {
    isDisabled: R,
    groupedYears: oe,
    showYearPicker: k,
    selectYear: ae,
    toggleYearPicker: x,
    handleYearSelect: Z,
    handleYear: P
  };
}, lr = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    defaultedRange: c,
    defaultedHighlight: w,
    propDates: f,
    defaultedTz: F,
    defaultedFilters: p,
    defaultedMultiDates: _
  } = Ce(e), k = () => {
    e.isTextInputDate && G(me(K(e.startDate)), 0);
  }, { modelValue: R, year: z, month: N, calendars: H } = Jt(e, t, k), v = X(() => $n(e.formatLocale, e.locale, e.monthNameFormat)), O = te(null), { checkMinMaxRange: S } = kt(e), {
    selectYear: G,
    groupedYears: ae,
    showYearPicker: oe,
    toggleYearPicker: Z,
    handleYearSelect: P,
    handleYear: x,
    isDisabled: Y
  } = zn({
    modelValue: R,
    multiCalendars: l,
    range: c,
    highlight: w,
    calendars: H,
    year: z,
    propDates: f,
    month: N,
    filters: p,
    props: e,
    emit: t
  });
  We(() => {
    e.startDate && (R.value && e.focusStartDate || !R.value) && G(me(K(e.startDate)), 0);
  });
  const q = (b) => b ? { month: De(b), year: me(b) } : { month: null, year: null }, ie = () => R.value ? Array.isArray(R.value) ? R.value.map((b) => q(b)) : q(R.value) : q(), fe = (b, I) => {
    const s = H.value[b], le = ie();
    return Array.isArray(le) ? le.some((pe) => pe.year === (s == null ? void 0 : s.year) && pe.month === I) : (s == null ? void 0 : s.year) === le.year && I === le.month;
  }, h = (b, I, s) => {
    var pe, $;
    const le = ie();
    return Array.isArray(le) ? z.value(I) === ((pe = le[s]) == null ? void 0 : pe.year) && b === (($ = le[s]) == null ? void 0 : $.month) : !1;
  }, U = (b, I) => {
    if (c.value.enabled) {
      const s = ie();
      if (Array.isArray(R.value) && Array.isArray(s)) {
        const le = h(b, I, 0) || h(b, I, 1), pe = dt(lt(K()), b, z.value(I));
        return da(R.value, O.value, pe) && !le;
      }
      return !1;
    }
    return !1;
  }, ee = X(() => (b) => Yt(v.value, (I) => {
    var ge;
    const s = fe(b, I.value), le = Gt(
      I.value,
      Pn(z.value(b), f.value.minDate),
      Rn(z.value(b), f.value.maxDate)
    ) || Rl(f.value.disabledDates, z.value(b)).includes(I.value) || ((ge = p.value.months) == null ? void 0 : ge.includes(I.value)), pe = U(I.value, b), $ = Yn(w.value, I.value, z.value(b));
    return { active: s, disabled: le, isBetween: pe, highlighted: $ };
  })), y = (b, I) => dt(lt(K()), b, z.value(I)), Q = (b, I) => {
    const s = R.value ? R.value : lt(/* @__PURE__ */ new Date());
    R.value = dt(s, b, z.value(I)), t("auto-apply"), t("update-flow-step");
  }, A = (b, I) => {
    const s = y(b, I);
    c.value.fixedEnd || c.value.fixedStart ? R.value = Ln(s, R, t, c) : R.value ? S(s, R.value) && (R.value = Ja(R, y(b, I), t)) : R.value = [y(b, I)], xe().then(() => {
      va(R.value, t, e.autoApply, e.modelAuto);
    });
  }, ne = (b, I) => {
    Xa(y(b, I), R, _.value.limit), t("auto-apply", !0);
  }, de = (b, I) => (H.value[I].month = b, m(I, H.value[I].year, b), _.value.enabled ? ne(b, I) : c.value.enabled ? A(b, I) : Q(b, I)), d = (b, I) => {
    G(b, I), m(I, b, null);
  }, m = (b, I, s) => {
    let le = s;
    if (!le && le !== 0) {
      const pe = ie();
      le = Array.isArray(pe) ? pe[b].month : pe.month;
    }
    t("update-month-year", { instance: b, year: I, month: le });
  };
  return {
    groupedMonths: ee,
    groupedYears: ae,
    year: z,
    isDisabled: Y,
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    showYearPicker: oe,
    modelValue: R,
    presetDate: (b, I) => {
      Fn({
        value: b,
        modelValue: R,
        range: c.value.enabled,
        timezone: I ? void 0 : F.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (b, I) => {
      O.value = y(b, I);
    },
    selectMonth: de,
    selectYear: d,
    toggleYearPicker: Z,
    handleYearSelect: P,
    handleYear: x,
    getModelMonthYear: ie
  };
}, rr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = Pt(), i = Je(n, "yearMode"), c = e;
    We(() => {
      c.shadow || a("mount", null);
    });
    const {
      groupedMonths: w,
      groupedYears: f,
      year: F,
      isDisabled: p,
      defaultedMultiCalendars: _,
      defaultedConfig: k,
      showYearPicker: R,
      modelValue: z,
      presetDate: N,
      setHoverDate: H,
      selectMonth: v,
      selectYear: O,
      toggleYearPicker: S,
      handleYearSelect: G,
      handleYear: ae,
      getModelMonthYear: oe
    } = lr(c, a);
    return t({ getSidebarProps: () => ({
      modelValue: z,
      year: F,
      getModelMonthYear: oe,
      selectMonth: v,
      selectYear: O,
      handleYear: ae
    }), presetDate: N, toggleYearPicker: (P) => S(0, P) }), (P, x) => (T(), $e(fa, {
      "multi-calendars": o(_).count,
      collapse: P.collapse,
      stretch: ""
    }, {
      default: ke(({ instance: Y }) => [
        P.$slots["top-extra"] ? ue(P.$slots, "top-extra", {
          key: 0,
          value: P.internalModelValue
        }) : J("", !0),
        P.$slots["month-year"] ? ue(P.$slots, "month-year", Ne(Ee({ key: 1 }, {
          year: o(F),
          months: o(w)(Y),
          years: o(f)(Y),
          selectMonth: o(v),
          selectYear: o(O),
          instance: Y
        }))) : (T(), $e(qt, {
          key: 2,
          items: o(w)(Y),
          "arrow-navigation": P.arrowNavigation,
          "is-last": P.autoApply && !o(k).keepActionRow,
          "esc-close": P.escClose,
          height: o(k).modeHeight,
          config: P.config,
          "no-overlay-focus": !!(P.noOverlayFocus || P.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (q) => o(v)(q, Y),
          onHoverValue: (q) => o(H)(q, Y)
        }, Ve({
          header: ke(() => [
            Ze(En, Ee(P.$props, {
              items: o(f)(Y),
              instance: Y,
              "show-year-picker": o(R)[Y],
              year: o(F)(Y),
              "is-disabled": (q) => o(p)(Y, q),
              onHandleYear: (q) => o(ae)(Y, q),
              onYearSelect: (q) => o(G)(q, Y),
              onToggleYearPicker: (q) => o(S)(Y, q == null ? void 0 : q.flow, q == null ? void 0 : q.show)
            }), Ve({ _: 2 }, [
              Re(o(i), (q, ie) => ({
                name: q,
                fn: ke((fe) => [
                  ue(P.$slots, q, Ne(Qe(fe)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          P.$slots["month-overlay-value"] ? {
            name: "item",
            fn: ke(({ item: q }) => [
              ue(P.$slots, "month-overlay-value", {
                text: q.text,
                value: q.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), or = (e, t) => {
  const l = () => {
    e.isTextInputDate && (p.value = me(K(e.startDate)));
  }, { modelValue: a } = Jt(e, t, l), n = te(null), { defaultedHighlight: i, defaultedMultiDates: c, defaultedFilters: w, defaultedRange: f, propDates: F } = Ce(e), p = te();
  We(() => {
    e.startDate && (a.value && e.focusStartDate || !a.value) && (p.value = me(K(e.startDate)));
  });
  const _ = (v) => Array.isArray(a.value) ? a.value.some((O) => me(O) === v) : a.value ? me(a.value) === v : !1, k = (v) => f.value.enabled && Array.isArray(a.value) ? da(a.value, n.value, z(v)) : !1, R = X(() => Yt(Ka(e.yearRange, e.locale, e.reverseYears), (v) => {
    const O = _(v.value), S = Gt(
      v.value,
      It(F.value.minDate),
      It(F.value.maxDate)
    ) || w.value.years.includes(v.value), G = k(v.value) && !O, ae = qa(i.value, v.value);
    return { active: O, disabled: S, isBetween: G, highlighted: ae };
  })), z = (v) => st(lt(oa(/* @__PURE__ */ new Date())), v);
  return {
    groupedYears: R,
    modelValue: a,
    focusYear: p,
    setHoverValue: (v) => {
      n.value = st(lt(/* @__PURE__ */ new Date()), v);
    },
    selectYear: (v) => {
      var O;
      if (t("update-month-year", { instance: 0, year: v }), c.value.enabled)
        return a.value ? Array.isArray(a.value) && (((O = a.value) == null ? void 0 : O.map((G) => me(G))).includes(v) ? a.value = a.value.filter((G) => me(G) !== v) : a.value.push(st(Ge(K()), v))) : a.value = [st(Ge(oa(K())), v)], t("auto-apply", !0);
      f.value.enabled ? (a.value = Ja(a, z(v), t), xe().then(() => {
        va(a.value, t, e.autoApply, e.modelAuto);
      })) : (a.value = z(v), t("auto-apply"));
    }
  };
}, sr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { groupedYears: i, modelValue: c, focusYear: w, selectYear: f, setHoverValue: F } = or(n, a), { defaultedConfig: p } = Ce(n);
    return t({ getSidebarProps: () => ({
      modelValue: c,
      selectYear: f
    }) }), (k, R) => (T(), j("div", null, [
      k.$slots["top-extra"] ? ue(k.$slots, "top-extra", {
        key: 0,
        value: k.internalModelValue
      }) : J("", !0),
      k.$slots["month-year"] ? ue(k.$slots, "month-year", Ne(Ee({ key: 1 }, {
        years: o(i),
        selectYear: o(f)
      }))) : (T(), $e(qt, {
        key: 2,
        items: o(i),
        "is-last": k.autoApply && !o(p).keepActionRow,
        height: o(p).modeHeight,
        config: k.config,
        "no-overlay-focus": !!(k.noOverlayFocus || k.textInput),
        "focus-value": o(w),
        type: "year",
        "use-relative": "",
        onSelected: o(f),
        onHoverValue: o(F)
      }, Ve({ _: 2 }, [
        k.$slots["year-overlay-value"] ? {
          name: "item",
          fn: ke(({ item: z }) => [
            ue(k.$slots, "year-overlay-value", {
              text: z.text,
              value: z.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), ur = {
  key: 0,
  class: "dp__time_input"
}, ir = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], dr = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), cr = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), fr = ["aria-label", "disabled", "data-test", "onKeydown", "onClick"], vr = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], mr = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), pr = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), yr = { key: 0 }, gr = ["aria-label"], hr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...rt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { setTimePickerElements: i, setTimePickerBackRef: c } = bt(), { defaultedAriaLabels: w, defaultedTransitions: f, defaultedFilters: F, defaultedConfig: p, defaultedRange: _ } = Ce(n), { transitionName: k, showTransition: R } = Xt(f), z = Qt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), N = te("AM"), H = te(null), v = te([]), O = te(), S = te(!1);
    We(() => {
      a("mounted");
    });
    const G = (r) => Te(/* @__PURE__ */ new Date(), {
      hours: r.hours,
      minutes: r.minutes,
      seconds: n.enableSeconds ? r.seconds : 0,
      milliseconds: 0
    }), ae = X(
      () => (r) => y(r, n[r]) || Z(r, n[r])
    ), oe = X(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), Z = (r, B) => _.value.enabled && !_.value.disableTimeRangeValidation ? !n.validateTime(r, B) : !1, P = (r, B) => {
      if (_.value.enabled && !_.value.disableTimeRangeValidation) {
        const C = B ? +n[`${r}Increment`] : -+n[`${r}Increment`], V = n[r] + C;
        return !n.validateTime(r, V);
      }
      return !1;
    }, x = X(() => (r) => !d(+n[r] + +n[`${r}Increment`], r) || P(r, !0)), Y = X(() => (r) => !d(+n[r] - +n[`${r}Increment`], r) || P(r, !1)), q = (r, B) => Dn(Te(K(), r), B), ie = (r, B) => rl(Te(K(), r), B), fe = X(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), h = X(() => {
      const r = [{ type: "hours" }];
      return n.enableMinutes && r.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), n.enableSeconds && r.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), r;
    }), U = X(() => h.value.filter((r) => !r.separator)), ee = X(() => (r) => {
      if (r === "hours") {
        const B = s(+n.hours);
        return { text: B < 10 ? `0${B}` : `${B}`, value: B };
      }
      return { text: n[r] < 10 ? `0${n[r]}` : `${n[r]}`, value: n[r] };
    }), y = (r, B) => {
      var V;
      if (!n.disabledTimesConfig) return !1;
      const C = n.disabledTimesConfig(n.order, r === "hours" ? B : void 0);
      return C[r] ? !!((V = C[r]) != null && V.includes(B)) : !0;
    }, Q = (r, B) => B !== "hours" || N.value === "AM" ? r : r + 12, A = (r) => {
      const B = n.is24 ? 24 : 12, C = r === "hours" ? B : 60, V = +n[`${r}GridIncrement`], se = r === "hours" && !n.is24 ? V : 0, M = [];
      for (let E = se; E < C; E += V)
        M.push({ value: n.is24 ? E : Q(E, r), text: E < 10 ? `0${E}` : `${E}` });
      return r === "hours" && !n.is24 && M.unshift({ value: N.value === "PM" ? 12 : 0, text: "12" }), Yt(M, (E) => ({ active: !1, disabled: F.value.times[r].includes(E.value) || !d(E.value, r) || y(r, E.value) || Z(r, E.value) }));
    }, ne = (r) => r >= 0 ? r : 59, de = (r) => r >= 0 ? r : 23, d = (r, B) => {
      const C = n.minTime ? G(Aa(n.minTime)) : null, V = n.maxTime ? G(Aa(n.maxTime)) : null, se = G(
        Aa(
          oe.value,
          B,
          B === "minutes" || B === "seconds" ? ne(r) : de(r)
        )
      );
      return C && V ? (Kt(se, V) || Ot(se, V)) && (_t(se, C) || Ot(se, C)) : C ? _t(se, C) || Ot(se, C) : V ? Kt(se, V) || Ot(se, V) : !0;
    }, m = (r) => n[`no${r[0].toUpperCase() + r.slice(1)}Overlay`], L = (r) => {
      m(r) || (z[r] = !z[r], z[r] ? (S.value = !0, a("overlay-opened", r)) : (S.value = !1, a("overlay-closed", r)));
    }, u = (r) => r === "hours" ? ft : r === "minutes" ? ht : Bt, b = () => {
      O.value && clearTimeout(O.value);
    }, I = (r, B = !0, C) => {
      const V = B ? q : ie, se = B ? +n[`${r}Increment`] : -+n[`${r}Increment`];
      d(+n[r] + se, r) && a(
        `update:${r}`,
        u(r)(V({ [r]: +n[r] }, { [r]: +n[`${r}Increment`] }))
      ), !(C != null && C.keyboard) && p.value.timeArrowHoldThreshold && (O.value = setTimeout(() => {
        I(r, B);
      }, p.value.timeArrowHoldThreshold));
    }, s = (r) => n.is24 ? r : (r >= 12 ? N.value = "PM" : N.value = "AM", gl(r)), le = () => {
      N.value === "PM" ? (N.value = "AM", a("update:hours", n.hours - 12)) : (N.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", N.value);
    }, pe = (r) => {
      z[r] = !0;
    }, $ = (r, B, C) => {
      if (r && n.arrowNavigation) {
        Array.isArray(v.value[B]) ? v.value[B][C] = r : v.value[B] = [r];
        const V = v.value.reduce(
          (se, M) => M.map((E, ce) => [...se[ce] || [], M[ce]]),
          []
        );
        c(n.closeTimePickerBtn), H.value && (V[1] = V[1].concat(H.value)), i(V, n.order);
      }
    }, ge = (r, B) => (L(r), a(`update:${r}`, B));
    return t({ openChildCmp: pe }), (r, B) => {
      var C;
      return r.disabled ? J("", !0) : (T(), j("div", ur, [
        (T(!0), j(be, null, Re(h.value, (V, se) => {
          var M, E, ce;
          return T(), j("div", {
            key: se,
            class: we(fe.value)
          }, [
            V.separator ? (T(), j(be, { key: 0 }, [
              S.value ? J("", !0) : (T(), j(be, { key: 0 }, [
                ct(":")
              ], 64))
            ], 64)) : (T(), j(be, { key: 1 }, [
              ye("button", {
                ref_for: !0,
                ref: (he) => $(he, se, 0),
                type: "button",
                class: we({
                  dp__btn: !0,
                  dp__inc_dec_button: !r.timePickerInline,
                  dp__inc_dec_button_inline: r.timePickerInline,
                  dp__tp_inline_btn_top: r.timePickerInline,
                  dp__inc_dec_button_disabled: x.value(V.type),
                  "dp--hidden-el": S.value
                }),
                "data-test": `${V.type}-time-inc-btn-${n.order}`,
                "aria-label": (M = o(w)) == null ? void 0 : M.incrementValue(V.type),
                tabindex: "0",
                onKeydown: (he) => o(Ke)(he, () => I(V.type, !0, { keyboard: !0 }), !0),
                onClick: (he) => o(p).timeArrowHoldThreshold ? void 0 : I(V.type, !0),
                onMousedown: (he) => o(p).timeArrowHoldThreshold ? I(V.type, !0) : void 0,
                onMouseup: b
              }, [
                n.timePickerInline ? (T(), j(be, { key: 1 }, [
                  r.$slots["tp-inline-arrow-up"] ? ue(r.$slots, "tp-inline-arrow-up", { key: 0 }) : (T(), j(be, { key: 1 }, [
                    dr,
                    cr
                  ], 64))
                ], 64)) : (T(), j(be, { key: 0 }, [
                  r.$slots["arrow-up"] ? ue(r.$slots, "arrow-up", { key: 0 }) : J("", !0),
                  r.$slots["arrow-up"] ? J("", !0) : (T(), $e(o(Va), { key: 1 }))
                ], 64))
              ], 42, ir),
              ye("button", {
                ref_for: !0,
                ref: (he) => $(he, se, 1),
                type: "button",
                "aria-label": `${ee.value(V.type).text}-${(E = o(w)) == null ? void 0 : E.openTpOverlay(V.type)}`,
                class: we({
                  dp__time_display: !0,
                  dp__time_display_block: !r.timePickerInline,
                  dp__time_display_inline: r.timePickerInline,
                  "dp--time-invalid": ae.value(V.type),
                  "dp--time-overlay-btn": !ae.value(V.type),
                  "dp--hidden-el": S.value
                }),
                disabled: m(V.type),
                tabindex: "0",
                "data-test": `${V.type}-toggle-overlay-btn-${n.order}`,
                onKeydown: (he) => o(Ke)(he, () => L(V.type), !0),
                onClick: (he) => L(V.type)
              }, [
                r.$slots[V.type] ? ue(r.$slots, V.type, {
                  key: 0,
                  text: ee.value(V.type).text,
                  value: ee.value(V.type).value
                }) : J("", !0),
                r.$slots[V.type] ? J("", !0) : (T(), j(be, { key: 1 }, [
                  ct(Ue(ee.value(V.type).text), 1)
                ], 64))
              ], 42, fr),
              ye("button", {
                ref_for: !0,
                ref: (he) => $(he, se, 2),
                type: "button",
                class: we({
                  dp__btn: !0,
                  dp__inc_dec_button: !r.timePickerInline,
                  dp__inc_dec_button_inline: r.timePickerInline,
                  dp__tp_inline_btn_bottom: r.timePickerInline,
                  dp__inc_dec_button_disabled: Y.value(V.type),
                  "dp--hidden-el": S.value
                }),
                "data-test": `${V.type}-time-dec-btn-${n.order}`,
                "aria-label": (ce = o(w)) == null ? void 0 : ce.decrementValue(V.type),
                tabindex: "0",
                onKeydown: (he) => o(Ke)(he, () => I(V.type, !1, { keyboard: !0 }), !0),
                onClick: (he) => o(p).timeArrowHoldThreshold ? void 0 : I(V.type, !1),
                onMousedown: (he) => o(p).timeArrowHoldThreshold ? I(V.type, !1) : void 0,
                onMouseup: b
              }, [
                n.timePickerInline ? (T(), j(be, { key: 1 }, [
                  r.$slots["tp-inline-arrow-down"] ? ue(r.$slots, "tp-inline-arrow-down", { key: 0 }) : (T(), j(be, { key: 1 }, [
                    mr,
                    pr
                  ], 64))
                ], 64)) : (T(), j(be, { key: 0 }, [
                  r.$slots["arrow-down"] ? ue(r.$slots, "arrow-down", { key: 0 }) : J("", !0),
                  r.$slots["arrow-down"] ? J("", !0) : (T(), $e(o(Wa), { key: 1 }))
                ], 64))
              ], 42, vr)
            ], 64))
          ], 2);
        }), 128)),
        r.is24 ? J("", !0) : (T(), j("div", yr, [
          r.$slots["am-pm-button"] ? ue(r.$slots, "am-pm-button", {
            key: 0,
            toggle: le,
            value: N.value
          }) : J("", !0),
          r.$slots["am-pm-button"] ? J("", !0) : (T(), j("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: H,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (C = o(w)) == null ? void 0 : C.amPmButton,
            tabindex: "0",
            onClick: le,
            onKeydown: B[0] || (B[0] = (V) => o(Ke)(V, () => le(), !0))
          }, Ue(N.value), 41, gr))
        ])),
        (T(!0), j(be, null, Re(U.value, (V, se) => (T(), $e(Nt, {
          key: se,
          name: o(k)(z[V.type]),
          css: o(R)
        }, {
          default: ke(() => {
            var M, E;
            return [
              z[V.type] ? (T(), $e(qt, {
                key: 0,
                items: A(V.type),
                "is-last": r.autoApply && !o(p).keepActionRow,
                "esc-close": r.escClose,
                type: V.type,
                "text-input": r.textInput,
                config: r.config,
                "arrow-navigation": r.arrowNavigation,
                "aria-labels": r.ariaLabels,
                "overlay-label": (E = (M = o(w)).timeOverlay) == null ? void 0 : E.call(M, V.type),
                onSelected: (ce) => ge(V.type, ce),
                onToggle: (ce) => L(V.type),
                onResetFlow: B[1] || (B[1] = (ce) => r.$emit("reset-flow"))
              }, Ve({
                "button-icon": ke(() => [
                  r.$slots["clock-icon"] ? ue(r.$slots, "clock-icon", { key: 0 }) : J("", !0),
                  r.$slots["clock-icon"] ? J("", !0) : (T(), $e(ia(r.timePickerInline ? o(Et) : o(Ua)), { key: 1 }))
                ]),
                _: 2
              }, [
                r.$slots[`${V.type}-overlay-value`] ? {
                  name: "item",
                  fn: ke(({ item: ce }) => [
                    ue(r.$slots, `${V.type}-overlay-value`, {
                      text: ce.text,
                      value: ce.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                r.$slots[`${V.type}-overlay-header`] ? {
                  name: "header",
                  fn: ke(() => [
                    ue(r.$slots, `${V.type}-overlay-header`, {
                      toggle: () => L(V.type)
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : J("", !0)
            ];
          }),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), br = { class: "dp--tp-wrap" }, kr = ["aria-label", "tabindex"], wr = ["role", "aria-label", "tabindex"], Dr = ["aria-label"], Hn = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...rt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMatrix: i, setTimePicker: c } = bt(), w = Pt(), { defaultedTransitions: f, defaultedAriaLabels: F, defaultedTextInput: p, defaultedConfig: _, defaultedRange: k } = Ce(n), { transitionName: R, showTransition: z } = Xt(f), { hideNavigationButtons: N } = ma(), H = te(null), v = te(null), O = te([]), S = te(null), G = te(!1);
    We(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? i([Ie(H.value)], "time") : c(!0, n.timePicker);
    });
    const ae = X(() => k.value.enabled && n.modelAuto ? An(n.internalModelValue) : !0), oe = te(!1), Z = (A) => ({
      hours: Array.isArray(n.hours) ? n.hours[A] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[A] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[A] : n.seconds
    }), P = X(() => {
      const A = [];
      if (k.value.enabled)
        for (let ne = 0; ne < 2; ne++)
          A.push(Z(ne));
      else
        A.push(Z(0));
      return A;
    }), x = (A, ne = !1, de = "") => {
      ne || a("reset-flow"), oe.value = A, a(A ? "overlay-opened" : "overlay-closed", He.time), n.arrowNavigation && c(A), xe(() => {
        de !== "" && O.value[0] && O.value[0].openChildCmp(de);
      });
    }, Y = X(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !_.value.keepActionRow
    })), q = Je(w, "timePicker"), ie = (A, ne, de) => k.value.enabled ? ne === 0 ? [A, P.value[1][de]] : [P.value[0][de], A] : A, fe = (A) => {
      a("update:hours", A);
    }, h = (A) => {
      a("update:minutes", A);
    }, U = (A) => {
      a("update:seconds", A);
    }, ee = () => {
      if (S.value && !p.value.enabled && !n.noOverlayFocus) {
        const A = Tn(S.value);
        A && A.focus({ preventScroll: !0 });
      }
    }, y = (A) => {
      G.value = !1, a("overlay-closed", A);
    }, Q = (A) => {
      G.value = !0, a("overlay-opened", A);
    };
    return t({ toggleTimePicker: x }), (A, ne) => {
      var de;
      return T(), j("div", br, [
        !A.timePicker && !A.timePickerInline ? na((T(), j("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: H,
          type: "button",
          class: we({ ...Y.value, "dp--hidden-el": oe.value }),
          "aria-label": (de = o(F)) == null ? void 0 : de.openTimePicker,
          tabindex: A.noOverlayFocus ? void 0 : 0,
          "data-test": "open-time-picker-btn",
          onKeydown: ne[0] || (ne[0] = (d) => o(Ke)(d, () => x(!0))),
          onClick: ne[1] || (ne[1] = (d) => x(!0))
        }, [
          A.$slots["clock-icon"] ? ue(A.$slots, "clock-icon", { key: 0 }) : J("", !0),
          A.$slots["clock-icon"] ? J("", !0) : (T(), $e(o(Ua), { key: 1 }))
        ], 42, kr)), [
          [la, !o(N)(A.hideNavigation, "time")]
        ]) : J("", !0),
        Ze(Nt, {
          name: o(R)(oe.value),
          css: o(z) && !A.timePickerInline
        }, {
          default: ke(() => {
            var d, m;
            return [
              oe.value || A.timePicker || A.timePickerInline ? (T(), j("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: S,
                role: A.timePickerInline ? void 0 : "dialog",
                class: we({
                  dp__overlay: !A.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !A.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: tt(A.timePicker ? { height: `${o(_).modeHeight}px` } : void 0),
                "aria-label": (d = o(F)) == null ? void 0 : d.timePicker,
                tabindex: A.timePickerInline ? void 0 : 0
              }, [
                ye("div", {
                  class: we(
                    A.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  A.$slots["time-picker-overlay"] ? ue(A.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: fe,
                    setMinutes: h,
                    setSeconds: U
                  }) : J("", !0),
                  A.$slots["time-picker-overlay"] ? J("", !0) : (T(), j("div", {
                    key: 1,
                    class: we(A.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (T(!0), j(be, null, Re(P.value, (L, u) => na((T(), $e(hr, Ee({
                      key: u,
                      ref_for: !0
                    }, {
                      ...A.$props,
                      order: u,
                      hours: L.hours,
                      minutes: L.minutes,
                      seconds: L.seconds,
                      closeTimePickerBtn: v.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: u === 0 ? o(k).fixedStart : o(k).fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: O,
                      "validate-time": (b, I) => e.validateTime(b, ie(I, u, b)),
                      "onUpdate:hours": (b) => fe(ie(b, u, "hours")),
                      "onUpdate:minutes": (b) => h(ie(b, u, "minutes")),
                      "onUpdate:seconds": (b) => U(ie(b, u, "seconds")),
                      onMounted: ee,
                      onOverlayClosed: y,
                      onOverlayOpened: Q,
                      onAmPmChange: ne[2] || (ne[2] = (b) => A.$emit("am-pm-change", b))
                    }), Ve({ _: 2 }, [
                      Re(o(q), (b, I) => ({
                        name: b,
                        fn: ke((s) => [
                          ue(A.$slots, b, Ee({ ref_for: !0 }, s))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [la, u === 0 ? !0 : ae.value]
                    ])), 128))
                  ], 2)),
                  !A.timePicker && !A.timePickerInline ? na((T(), j("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: v,
                    type: "button",
                    class: we({ ...Y.value, "dp--hidden-el": G.value }),
                    "aria-label": (m = o(F)) == null ? void 0 : m.closeTimePicker,
                    tabindex: "0",
                    onKeydown: ne[3] || (ne[3] = (L) => o(Ke)(L, () => x(!1))),
                    onClick: ne[4] || (ne[4] = (L) => x(!1))
                  }, [
                    A.$slots["calendar-icon"] ? ue(A.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                    A.$slots["calendar-icon"] ? J("", !0) : (T(), $e(o(Et), { key: 1 }))
                  ], 42, Dr)), [
                    [la, !o(N)(A.hideNavigation, "time")]
                  ]) : J("", !0)
                ], 2)
              ], 14, wr)) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Un = (e, t, l, a) => {
  const { defaultedRange: n } = Ce(e), i = (S, G) => Array.isArray(t[S]) ? t[S][G] : t[S], c = (S) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[S] : t.seconds : 0, w = (S, G) => S ? G !== void 0 ? gt(S, i("hours", G), i("minutes", G), c(G)) : gt(S, t.hours, t.minutes, c()) : yn(K(), c(G)), f = (S, G) => {
    t[S] = G;
  }, F = X(() => e.modelAuto && n.value.enabled ? Array.isArray(l.value) ? l.value.length > 1 : !1 : n.value.enabled), p = (S, G) => {
    const ae = Object.fromEntries(
      Object.keys(t).map((oe) => oe === S ? [oe, G] : [oe, t[oe]].slice())
    );
    if (F.value && !n.value.disableTimeRangeValidation) {
      const oe = (P) => l.value ? gt(
        l.value[P],
        ae.hours[P],
        ae.minutes[P],
        ae.seconds[P]
      ) : null, Z = (P) => gn(l.value[P], 0);
      return !(Me(oe(0), oe(1)) && (_t(oe(0), Z(1)) || Kt(oe(1), Z(0))));
    }
    return !0;
  }, _ = (S, G) => {
    p(S, G) && (f(S, G), a && a());
  }, k = (S) => {
    _("hours", S);
  }, R = (S) => {
    _("minutes", S);
  }, z = (S) => {
    _("seconds", S);
  }, N = (S, G, ae, oe) => {
    G && k(S), !G && !ae && R(S), ae && z(S), l.value && oe(l.value);
  }, H = (S) => {
    if (S) {
      const G = Array.isArray(S), ae = G ? [+S[0].hours, +S[1].hours] : +S.hours, oe = G ? [+S[0].minutes, +S[1].minutes] : +S.minutes, Z = G ? [+S[0].seconds, +S[1].seconds] : +S.seconds;
      f("hours", ae), f("minutes", oe), e.enableSeconds && f("seconds", Z);
    }
  }, v = (S, G) => {
    const ae = {
      hours: Array.isArray(t.hours) ? t.hours[S] : t.hours,
      disabledArr: []
    };
    return (G || G === 0) && (ae.hours = G), Array.isArray(e.disabledTimes) && (ae.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[S]) ? e.disabledTimes[S] : e.disabledTimes), ae;
  }, O = X(() => (S, G) => {
    var ae;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: oe, hours: Z } = v(S, G), P = oe.filter((x) => +x.hours === Z);
      return ((ae = P[0]) == null ? void 0 : ae.minutes) === "*" ? { hours: [Z], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (P == null ? void 0 : P.map((x) => +x.minutes)) ?? [],
        seconds: (P == null ? void 0 : P.map((x) => x.seconds ? +x.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: f,
    updateHours: k,
    updateMinutes: R,
    updateSeconds: z,
    getSetDateTime: w,
    updateTimeValues: N,
    getSecondsValue: c,
    assignStartTime: H,
    validateTime: p,
    disabledTimesConfig: O
  };
}, Mr = (e, t) => {
  const l = () => {
    e.isTextInputDate && G();
  }, { modelValue: a, time: n } = Jt(e, t, l), { defaultedStartTime: i, defaultedRange: c, defaultedTz: w } = Ce(e), { updateTimeValues: f, getSetDateTime: F, setTime: p, assignStartTime: _, disabledTimesConfig: k, validateTime: R } = Un(e, n, a, z);
  function z() {
    t("update-flow-step");
  }
  const N = (Z) => {
    const { hours: P, minutes: x, seconds: Y } = Z;
    return { hours: +P, minutes: +x, seconds: Y ? +Y : 0 };
  }, H = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const P = N(e.startTime[0]), x = N(e.startTime[1]);
        return [Te(K(), P), Te(K(), x)];
      }
      const Z = N(e.startTime);
      return Te(K(), Z);
    }
    return c.value.enabled ? [null, null] : null;
  }, v = () => {
    if (c.value.enabled) {
      const [Z, P] = H();
      a.value = [
        qe(F(Z, 0), w.value.timezone),
        qe(F(P, 1), w.value.timezone)
      ];
    } else
      a.value = qe(F(H()), w.value.timezone);
  }, O = (Z) => Array.isArray(Z) ? [St(K(Z[0])), St(K(Z[1]))] : [St(Z ?? K())], S = (Z, P, x) => {
    p("hours", Z), p("minutes", P), p("seconds", e.enableSeconds ? x : 0);
  }, G = () => {
    const [Z, P] = O(a.value);
    return c.value.enabled ? S(
      [Z.hours, P.hours],
      [Z.minutes, P.minutes],
      [Z.seconds, P.seconds]
    ) : S(Z.hours, Z.minutes, Z.seconds);
  };
  We(() => {
    if (!e.shadow)
      return _(i.value), a.value ? G() : v();
  });
  const ae = () => {
    Array.isArray(a.value) ? a.value = a.value.map((Z, P) => Z && F(Z, P)) : a.value = F(a.value), t("time-update");
  };
  return {
    modelValue: a,
    time: n,
    disabledTimesConfig: k,
    updateTime: (Z, P = !0, x = !1) => {
      f(Z, P, x, ae);
    },
    validateTime: R
  };
}, $r = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Pt(), c = Je(i, "timePicker"), w = te(null), { time: f, modelValue: F, disabledTimesConfig: p, updateTime: _, validateTime: k } = Mr(n, a);
    return We(() => {
      n.shadow || a("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: F,
      time: f,
      updateTime: _
    }), toggleTimePicker: (N, H = !1, v = "") => {
      var O;
      (O = w.value) == null || O.toggleTimePicker(N, H, v);
    } }), (N, H) => (T(), $e(fa, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: ke(() => [
        Ze(Hn, Ee({
          ref_key: "tpRef",
          ref: w
        }, N.$props, {
          hours: o(f).hours,
          minutes: o(f).minutes,
          seconds: o(f).seconds,
          "internal-model-value": N.internalModelValue,
          "disabled-times-config": o(p),
          "validate-time": o(k),
          "onUpdate:hours": H[0] || (H[0] = (v) => o(_)(v)),
          "onUpdate:minutes": H[1] || (H[1] = (v) => o(_)(v, !1)),
          "onUpdate:seconds": H[2] || (H[2] = (v) => o(_)(v, !1, !0)),
          onAmPmChange: H[3] || (H[3] = (v) => N.$emit("am-pm-change", v)),
          onResetFlow: H[4] || (H[4] = (v) => N.$emit("reset-flow")),
          onOverlayClosed: H[5] || (H[5] = (v) => N.$emit("overlay-toggle", { open: !1, overlay: v })),
          onOverlayOpened: H[6] || (H[6] = (v) => N.$emit("overlay-toggle", { open: !0, overlay: v }))
        }), Ve({ _: 2 }, [
          Re(o(c), (v, O) => ({
            name: v,
            fn: ke((S) => [
              ue(N.$slots, v, Ne(Qe(S)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Ar = { class: "dp--header-wrap" }, Tr = {
  key: 0,
  class: "dp__month_year_wrap"
}, Sr = { key: 0 }, Pr = { class: "dp__month_year_wrap" }, Rr = ["data-dp-element", "aria-label", "data-test", "onClick", "onKeydown"], Cr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...rt
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTransitions: i,
      defaultedAriaLabels: c,
      defaultedMultiCalendars: w,
      defaultedFilters: f,
      defaultedConfig: F,
      defaultedHighlight: p,
      propDates: _,
      defaultedUI: k
    } = Ce(n), { transitionName: R, showTransition: z } = Xt(i), { buildMatrix: N } = bt(), { handleMonthYearChange: H, isDisabled: v, updateMonthYear: O } = Ql(n, a), { showLeftIcon: S, showRightIcon: G } = ma(), ae = te(!1), oe = te(!1), Z = te(!1), P = te([null, null, null, null]);
    We(() => {
      a("mount");
    });
    const x = (m) => ({
      get: () => n[m],
      set: (L) => {
        const u = m === nt.month ? nt.year : nt.month;
        a("update-month-year", { [m]: L, [u]: n[u] }), m === nt.month ? y(!0) : Q(!0);
      }
    }), Y = X(x(nt.month)), q = X(x(nt.year)), ie = X(() => (m) => ({
      month: n.month,
      year: n.year,
      items: m === nt.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: O,
      toggle: m === nt.month ? y : Q
    })), fe = X(() => {
      const m = n.months.find((L) => L.value === n.month);
      return m || { text: "", value: 0 };
    }), h = X(() => Yt(n.months, (m) => {
      const L = n.month === m.value, u = Gt(
        m.value,
        Pn(n.year, _.value.minDate),
        Rn(n.year, _.value.maxDate)
      ) || f.value.months.includes(m.value), b = Yn(p.value, m.value, n.year);
      return { active: L, disabled: u, highlighted: b };
    })), U = X(() => Yt(n.years, (m) => {
      const L = n.year === m.value, u = Gt(
        m.value,
        It(_.value.minDate),
        It(_.value.maxDate)
      ) || f.value.years.includes(m.value), b = qa(p.value, m.value);
      return { active: L, disabled: u, highlighted: b };
    })), ee = (m, L, u) => {
      u !== void 0 ? m.value = u : m.value = !m.value, m.value ? (Z.value = !0, a("overlay-opened", L)) : (Z.value = !1, a("overlay-closed", L));
    }, y = (m = !1, L) => {
      A(m), ee(ae, He.month, L);
    }, Q = (m = !1, L) => {
      A(m), ee(oe, He.year, L);
    }, A = (m) => {
      m || a("reset-flow");
    }, ne = (m, L) => {
      n.arrowNavigation && (P.value[L] = Ie(m), N(P.value, "monthYear"));
    }, de = X(() => {
      var m, L, u, b, I, s;
      return [
        {
          type: nt.month,
          index: 1,
          toggle: y,
          modelValue: Y.value,
          updateModelValue: (le) => Y.value = le,
          text: fe.value.text,
          showSelectionGrid: ae.value,
          items: h.value,
          ariaLabel: (m = c.value) == null ? void 0 : m.openMonthsOverlay,
          overlayLabel: ((u = (L = c.value).monthPicker) == null ? void 0 : u.call(L, !0)) ?? void 0
        },
        {
          type: nt.year,
          index: 2,
          toggle: Q,
          modelValue: q.value,
          updateModelValue: (le) => q.value = le,
          text: Sn(n.year, n.locale),
          showSelectionGrid: oe.value,
          items: U.value,
          ariaLabel: (b = c.value) == null ? void 0 : b.openYearsOverlay,
          overlayLabel: ((s = (I = c.value).yearPicker) == null ? void 0 : s.call(I, !0)) ?? void 0
        }
      ];
    }), d = X(() => n.disableYearSelect ? [de.value[0]] : n.yearFirst ? [...de.value].reverse() : de.value);
    return t({
      toggleMonthPicker: y,
      toggleYearPicker: Q,
      handleMonthYearChange: H
    }), (m, L) => {
      var u, b, I, s, le, pe;
      return T(), j("div", Ar, [
        m.$slots["month-year"] ? (T(), j("div", Tr, [
          ue(m.$slots, "month-year", Ne(Qe({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: o(O), handleMonthYearChange: o(H), instance: e.instance })))
        ])) : (T(), j(be, { key: 1 }, [
          m.$slots["top-extra"] ? (T(), j("div", Sr, [
            ue(m.$slots, "top-extra", { value: m.internalModelValue })
          ])) : J("", !0),
          ye("div", Pr, [
            o(S)(o(w), e.instance) && !m.vertical ? (T(), $e(Ut, {
              key: 0,
              "aria-label": (u = o(c)) == null ? void 0 : u.prevMonth,
              disabled: o(v)(!1),
              class: we((b = o(k)) == null ? void 0 : b.navBtnPrev),
              "el-name": "action-prev",
              onActivate: L[0] || (L[0] = ($) => o(H)(!1, !0)),
              onSetRef: L[1] || (L[1] = ($) => ne($, 0))
            }, {
              default: ke(() => [
                m.$slots["arrow-left"] ? ue(m.$slots, "arrow-left", { key: 0 }) : J("", !0),
                m.$slots["arrow-left"] ? J("", !0) : (T(), $e(o(za), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
            ye("div", {
              class: we(["dp__month_year_wrap", {
                dp__year_disable_select: m.disableYearSelect
              }])
            }, [
              (T(!0), j(be, null, Re(d.value, ($, ge) => (T(), j(be, {
                key: $.type
              }, [
                ye("button", {
                  ref_for: !0,
                  ref: (r) => ne(r, ge + 1),
                  type: "button",
                  "data-dp-element": `overlay-${$.type}`,
                  class: we(["dp__btn dp__month_year_select", { "dp--hidden-el": Z.value }]),
                  "aria-label": `${$.text}-${$.ariaLabel}`,
                  "data-test": `${$.type}-toggle-overlay-${e.instance}`,
                  onClick: $.toggle,
                  onKeydown: (r) => o(Ke)(r, () => $.toggle(), !0)
                }, [
                  m.$slots[$.type] ? ue(m.$slots, $.type, {
                    key: 0,
                    text: $.text,
                    value: n[$.type]
                  }) : J("", !0),
                  m.$slots[$.type] ? J("", !0) : (T(), j(be, { key: 1 }, [
                    ct(Ue($.text), 1)
                  ], 64))
                ], 42, Rr),
                Ze(Nt, {
                  name: o(R)($.showSelectionGrid),
                  css: o(z)
                }, {
                  default: ke(() => [
                    $.showSelectionGrid ? (T(), $e(qt, {
                      key: 0,
                      items: $.items,
                      "arrow-navigation": m.arrowNavigation,
                      "hide-navigation": m.hideNavigation,
                      "is-last": m.autoApply && !o(F).keepActionRow,
                      "skip-button-ref": !1,
                      config: m.config,
                      type: $.type,
                      "header-refs": [],
                      "esc-close": m.escClose,
                      "menu-wrap-ref": m.menuWrapRef,
                      "text-input": m.textInput,
                      "aria-labels": m.ariaLabels,
                      "overlay-label": $.overlayLabel,
                      onSelected: $.updateModelValue,
                      onToggle: $.toggle
                    }, Ve({
                      "button-icon": ke(() => [
                        m.$slots["calendar-icon"] ? ue(m.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                        m.$slots["calendar-icon"] ? J("", !0) : (T(), $e(o(Et), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      m.$slots[`${$.type}-overlay-value`] ? {
                        name: "item",
                        fn: ke(({ item: r }) => [
                          ue(m.$slots, `${$.type}-overlay-value`, {
                            text: r.text,
                            value: r.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      m.$slots[`${$.type}-overlay`] ? {
                        name: "overlay",
                        fn: ke(() => [
                          ue(m.$slots, `${$.type}-overlay`, Ee({ ref_for: !0 }, ie.value($.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      m.$slots[`${$.type}-overlay-header`] ? {
                        name: "header",
                        fn: ke(() => [
                          ue(m.$slots, `${$.type}-overlay-header`, {
                            toggle: $.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : J("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            o(S)(o(w), e.instance) && m.vertical ? (T(), $e(Ut, {
              key: 1,
              "aria-label": (I = o(c)) == null ? void 0 : I.prevMonth,
              "el-name": "action-prev",
              disabled: o(v)(!1),
              class: we((s = o(k)) == null ? void 0 : s.navBtnPrev),
              onActivate: L[2] || (L[2] = ($) => o(H)(!1, !0))
            }, {
              default: ke(() => [
                m.$slots["arrow-up"] ? ue(m.$slots, "arrow-up", { key: 0 }) : J("", !0),
                m.$slots["arrow-up"] ? J("", !0) : (T(), $e(o(Va), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
            o(G)(o(w), e.instance) ? (T(), $e(Ut, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: o(v)(!0),
              "aria-label": (le = o(c)) == null ? void 0 : le.nextMonth,
              class: we((pe = o(k)) == null ? void 0 : pe.navBtnNext),
              onActivate: L[3] || (L[3] = ($) => o(H)(!0, !0)),
              onSetRef: L[4] || (L[4] = ($) => ne($, m.disableYearSelect ? 2 : 3))
            }, {
              default: ke(() => [
                m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ue(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : J("", !0),
                m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? J("", !0) : (T(), $e(ia(m.vertical ? o(Wa) : o(Ha)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : J("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Or = {
  class: "dp__calendar_header",
  role: "row"
}, _r = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Br = ["aria-label"], Yr = /* @__PURE__ */ ye("div", { class: "dp__calendar_header_separator" }, null, -1), Ir = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, Nr = { class: "dp__cell_inner" }, Er = ["id", "aria-pressed", "aria-disabled", "aria-label", "data-test", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Fr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...rt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMultiLevelMatrix: i } = bt(), {
      defaultedTransitions: c,
      defaultedConfig: w,
      defaultedAriaLabels: f,
      defaultedMultiCalendars: F,
      defaultedWeekNumbers: p,
      defaultedMultiDates: _,
      defaultedUI: k
    } = Ce(n), R = te(null), z = te({
      bottom: "",
      left: "",
      transform: ""
    }), N = te([]), H = te(null), v = te(!0), O = te(""), S = te({ startX: 0, endX: 0, startY: 0, endY: 0 }), G = te([]), ae = te({ left: "50%" }), oe = te(!1), Z = X(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), P = X(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : yl(n.formatLocale, n.locale, +n.weekStart));
    We(() => {
      a("mount", { cmp: "calendar", refs: N }), w.value.noSwipe || H.value && (H.value.addEventListener("touchstart", ne, { passive: !1 }), H.value.addEventListener("touchend", de, { passive: !1 }), H.value.addEventListener("touchmove", d, { passive: !1 })), n.monthChangeOnScroll && H.value && H.value.addEventListener("wheel", u, { passive: !1 });
    });
    const x = ($) => $ ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", Y = ($, ge) => {
      if (n.transitions) {
        const r = Ge(dt(K(), n.month, n.year));
        O.value = Be(Ge(dt(K(), $, ge)), r) ? c.value[x(!0)] : c.value[x(!1)], v.value = !1, xe(() => {
          v.value = !0;
        });
      }
    }, q = X(
      () => ({
        ...k.value.calendar ?? {}
      })
    ), ie = X(() => ($) => {
      const ge = hl($);
      return {
        dp__marker_dot: ge.type === "dot",
        dp__marker_line: ge.type === "line"
      };
    }), fe = X(() => ($) => Me($, R.value)), h = X(() => ({
      dp__calendar: !0,
      dp__calendar_next: F.value.count > 0 && n.instance !== 0
    })), U = X(() => ($) => n.hideOffsetDates ? $.current : !0), ee = async ($, ge) => {
      const { width: r, height: B } = $.getBoundingClientRect();
      R.value = ge.value;
      let C = { left: `${r / 2}px` }, V = -50;
      if (await xe(), G.value[0]) {
        const { left: se, width: M } = G.value[0].getBoundingClientRect();
        se < 0 && (C = { left: "0" }, V = 0, ae.value.left = `${r / 2}px`), window.innerWidth < se + M && (C = { right: "0" }, V = 0, ae.value.left = `${M - r / 2}px`);
      }
      z.value = {
        bottom: `${B}px`,
        ...C,
        transform: `translateX(${V}%)`
      };
    }, y = async ($, ge, r) => {
      var C, V, se;
      const B = Ie(N.value[ge][r]);
      B && ((C = $.marker) != null && C.customPosition && ((se = (V = $.marker) == null ? void 0 : V.tooltip) != null && se.length) ? z.value = $.marker.customPosition(B) : await ee(B, $), a("tooltip-open", $.marker));
    }, Q = async ($, ge, r) => {
      var B, C;
      if (oe.value && _.value.enabled && _.value.dragSelect)
        return a("select-date", $);
      a("set-hover-date", $), (C = (B = $.marker) == null ? void 0 : B.tooltip) != null && C.length && await y($, ge, r);
    }, A = ($) => {
      R.value && (R.value = null, z.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", $.marker));
    }, ne = ($) => {
      S.value.startX = $.changedTouches[0].screenX, S.value.startY = $.changedTouches[0].screenY;
    }, de = ($) => {
      S.value.endX = $.changedTouches[0].screenX, S.value.endY = $.changedTouches[0].screenY, m();
    }, d = ($) => {
      n.vertical && !n.inline && $.preventDefault();
    }, m = () => {
      const $ = n.vertical ? "Y" : "X";
      Math.abs(S.value[`start${$}`] - S.value[`end${$}`]) > 10 && a("handle-swipe", S.value[`start${$}`] > S.value[`end${$}`] ? "right" : "left");
    }, L = ($, ge, r) => {
      $ && (Array.isArray(N.value[ge]) ? N.value[ge][r] = $ : N.value[ge] = [$]), n.arrowNavigation && i(N.value, "calendar");
    }, u = ($) => {
      n.monthChangeOnScroll && ($.preventDefault(), a("handle-scroll", $));
    }, b = ($) => p.value.type === "local" ? ol($.value, { weekStartsOn: +n.weekStart }) : p.value.type === "iso" ? sl($.value) : typeof p.value.type == "function" ? p.value.type($.value) : "", I = ($) => {
      const ge = $[0];
      return p.value.hideOnOffsetDates ? $.some((r) => r.current) ? b(ge) : "" : b(ge);
    }, s = ($, ge, r = !0) => {
      r && sn() || !r && !sn() || _.value.enabled || (yt($, w.value), a("select-date", ge));
    }, le = ($) => {
      yt($, w.value);
    }, pe = ($) => {
      _.value.enabled && _.value.dragSelect ? (oe.value = !0, a("select-date", $)) : _.value.enabled && a("select-date", $);
    };
    return t({ triggerTransition: Y }), ($, ge) => (T(), j("div", {
      class: we(h.value)
    }, [
      ye("div", {
        ref_key: "calendarWrapRef",
        ref: H,
        class: we(q.value),
        role: "grid"
      }, [
        ye("div", Or, [
          $.weekNumbers ? (T(), j("div", _r, Ue($.weekNumName), 1)) : J("", !0),
          (T(!0), j(be, null, Re(P.value, (r, B) => {
            var C, V;
            return T(), j("div", {
              key: B,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test": "calendar-header",
              "aria-label": (V = (C = o(f)) == null ? void 0 : C.weekDay) == null ? void 0 : V.call(C, B)
            }, [
              $.$slots["calendar-header"] ? ue($.$slots, "calendar-header", {
                key: 0,
                day: r,
                index: B
              }) : J("", !0),
              $.$slots["calendar-header"] ? J("", !0) : (T(), j(be, { key: 1 }, [
                ct(Ue(r), 1)
              ], 64))
            ], 8, Br);
          }), 128))
        ]),
        Yr,
        Ze(Nt, {
          name: O.value,
          css: !!$.transitions
        }, {
          default: ke(() => [
            v.value ? (T(), j("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: ge[1] || (ge[1] = (r) => oe.value = !1)
            }, [
              (T(!0), j(be, null, Re(Z.value, (r, B) => (T(), j("div", {
                key: B,
                class: "dp__calendar_row",
                role: "row"
              }, [
                $.weekNumbers ? (T(), j("div", Ir, [
                  ye("div", Nr, Ue(I(r.days)), 1)
                ])) : J("", !0),
                (T(!0), j(be, null, Re(r.days, (C, V) => {
                  var se, M, E;
                  return T(), j("div", {
                    id: o(In)(C.value),
                    ref_for: !0,
                    ref: (ce) => L(ce, B, V),
                    key: V + B,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-pressed": (C.classData.dp__active_date || C.classData.dp__range_start || C.classData.dp__range_start) ?? void 0,
                    "aria-disabled": C.classData.dp__cell_disabled || void 0,
                    "aria-label": (M = (se = o(f)) == null ? void 0 : se.day) == null ? void 0 : M.call(se, C),
                    tabindex: "0",
                    "data-test": C.value,
                    onClick: Wt((ce) => s(ce, C), ["prevent"]),
                    onTouchend: (ce) => s(ce, C, !1),
                    onKeydown: (ce) => o(Ke)(ce, () => $.$emit("select-date", C)),
                    onMouseenter: (ce) => Q(C, B, V),
                    onMouseleave: (ce) => A(C),
                    onMousedown: (ce) => pe(C),
                    onMouseup: ge[0] || (ge[0] = (ce) => oe.value = !1)
                  }, [
                    ye("div", {
                      class: we(["dp__cell_inner", C.classData])
                    }, [
                      $.$slots.day && U.value(C) ? ue($.$slots, "day", {
                        key: 0,
                        day: +C.text,
                        date: C.value
                      }) : J("", !0),
                      $.$slots.day ? J("", !0) : (T(), j(be, { key: 1 }, [
                        ct(Ue(C.text), 1)
                      ], 64)),
                      C.marker && U.value(C) ? (T(), j(be, { key: 2 }, [
                        $.$slots.marker ? ue($.$slots, "marker", {
                          key: 0,
                          marker: C.marker,
                          day: +C.text,
                          date: C.value
                        }) : (T(), j("div", {
                          key: 1,
                          class: we(ie.value(C.marker)),
                          style: tt(C.marker.color ? { backgroundColor: C.marker.color } : {})
                        }, null, 6))
                      ], 64)) : J("", !0),
                      fe.value(C.value) ? (T(), j("div", {
                        key: 3,
                        ref_for: !0,
                        ref_key: "activeTooltip",
                        ref: G,
                        class: "dp__marker_tooltip",
                        style: tt(z.value)
                      }, [
                        (E = C.marker) != null && E.tooltip ? (T(), j("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: le
                        }, [
                          (T(!0), j(be, null, Re(C.marker.tooltip, (ce, he) => (T(), j("div", {
                            key: he,
                            class: "dp__tooltip_text"
                          }, [
                            $.$slots["marker-tooltip"] ? ue($.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: ce,
                              day: C.value
                            }) : J("", !0),
                            $.$slots["marker-tooltip"] ? J("", !0) : (T(), j(be, { key: 1 }, [
                              ye("div", {
                                class: "dp__tooltip_mark",
                                style: tt(ce.color ? { backgroundColor: ce.color } : {})
                              }, null, 4),
                              ye("div", null, Ue(ce.text), 1)
                            ], 64))
                          ]))), 128)),
                          ye("div", {
                            class: "dp__arrow_bottom_tp",
                            style: tt(ae.value)
                          }, null, 4)
                        ])) : J("", !0)
                      ], 4)) : J("", !0)
                    ], 2)
                  ], 40, Er);
                }), 128))
              ]))), 128))
            ], 32)) : J("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), vn = (e) => Array.isArray(e), Lr = (e, t, l, a) => {
  const n = te([]), i = te(/* @__PURE__ */ new Date()), c = te(), w = () => ne(e.isTextInputDate), { modelValue: f, calendars: F, time: p, today: _ } = Jt(e, t, w), {
    defaultedMultiCalendars: k,
    defaultedStartTime: R,
    defaultedRange: z,
    defaultedConfig: N,
    defaultedTz: H,
    propDates: v,
    defaultedMultiDates: O
  } = Ce(e), { validateMonthYearInRange: S, isDisabled: G, isDateRangeAllowed: ae, checkMinMaxRange: oe } = kt(e), { updateTimeValues: Z, getSetDateTime: P, setTime: x, assignStartTime: Y, validateTime: q, disabledTimesConfig: ie } = Un(e, p, f, a), fe = X(
    () => (D) => F.value[D] ? F.value[D].month : 0
  ), h = X(
    () => (D) => F.value[D] ? F.value[D].year : 0
  ), U = (D) => !N.value.keepViewOnOffsetClick || D ? !0 : !c.value, ee = (D, g, W, re = !1) => {
    var Ae, Fe;
    U(re) && (F.value[D] || (F.value[D] = { month: 0, year: 0 }), F.value[D].month = on(g) ? (Ae = F.value[D]) == null ? void 0 : Ae.month : g, F.value[D].year = on(W) ? (Fe = F.value[D]) == null ? void 0 : Fe.year : W);
  }, y = () => {
    e.autoApply && t("select-date");
  };
  We(() => {
    e.shadow || (f.value || ($(), R.value && Y(R.value)), ne(!0), e.focusStartDate && e.startDate && $());
  });
  const Q = X(() => {
    var D;
    return (D = e.flow) != null && D.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), A = () => {
    e.autoApply && Q.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
  }, ne = (D = !1) => {
    if (f.value)
      return Array.isArray(f.value) ? (n.value = f.value, I(D)) : m(f.value, D);
    if (k.value.count && D && !e.startDate)
      return d(K(), D);
  }, de = () => Array.isArray(f.value) && z.value.enabled ? De(f.value[0]) === De(f.value[1] ?? f.value[0]) : !1, d = (D = /* @__PURE__ */ new Date(), g = !1) => {
    if ((!k.value.count || !k.value.static || g) && ee(0, De(D), me(D)), k.value.count && (!k.value.solo || !f.value || de()))
      for (let W = 1; W < k.value.count; W++) {
        const re = Te(K(), { month: fe.value(W - 1), year: h.value(W - 1) }), Ae = Dn(re, { months: 1 });
        F.value[W] = { month: De(Ae), year: me(Ae) };
      }
  }, m = (D, g) => {
    d(D), x("hours", ft(D)), x("minutes", ht(D)), x("seconds", Bt(D)), k.value.count && g && pe();
  }, L = (D) => {
    if (k.value.count) {
      if (k.value.solo) return 0;
      const g = De(D[0]), W = De(D[1]);
      return Math.abs(W - g) < k.value.count ? 0 : 1;
    }
    return 1;
  }, u = (D, g) => {
    D[1] && z.value.showLastInRange ? d(D[L(D)], g) : d(D[0], g);
    const W = (re, Ae) => [
      re(D[0]),
      D[1] ? re(D[1]) : p[Ae][1]
    ];
    x("hours", W(ft, "hours")), x("minutes", W(ht, "minutes")), x("seconds", W(Bt, "seconds"));
  }, b = (D, g) => {
    if ((z.value.enabled || e.weekPicker) && !O.value.enabled)
      return u(D, g);
    if (O.value.enabled && g) {
      const W = D[D.length - 1];
      return m(W, g);
    }
  }, I = (D) => {
    const g = f.value;
    b(g, D), k.value.count && k.value.solo && pe();
  }, s = (D, g) => {
    const W = Te(K(), { month: fe.value(g), year: h.value(g) }), re = D < 0 ? At(W, 1) : jt(W, 1);
    S(De(re), me(re), D < 0, e.preventMinMaxNavigation) && (ee(g, De(re), me(re)), t("update-month-year", { instance: g, month: De(re), year: me(re) }), k.value.count && !k.value.solo && le(g), l());
  }, le = (D) => {
    for (let g = D - 1; g >= 0; g--) {
      const W = jt(Te(K(), { month: fe.value(g + 1), year: h.value(g + 1) }), 1);
      ee(g, De(W), me(W));
    }
    for (let g = D + 1; g <= k.value.count - 1; g++) {
      const W = At(Te(K(), { month: fe.value(g - 1), year: h.value(g - 1) }), 1);
      ee(g, De(W), me(W));
    }
  }, pe = () => {
    if (Array.isArray(f.value) && f.value.length === 2) {
      const D = K(
        K(f.value[1] ? f.value[1] : At(f.value[0], 1))
      ), [g, W] = [De(f.value[0]), me(f.value[0])], [re, Ae] = [De(f.value[1]), me(f.value[1])];
      (g !== re || g === re && W !== Ae) && k.value.solo && ee(1, De(D), me(D));
    } else f.value && !Array.isArray(f.value) && (ee(0, De(f.value), me(f.value)), d(K()));
  }, $ = () => {
    e.startDate && (ee(0, De(K(e.startDate)), me(K(e.startDate))), k.value.count && le(0));
  }, ge = (D, g) => {
    if (e.monthChangeOnScroll) {
      const W = (/* @__PURE__ */ new Date()).getTime() - i.value.getTime(), re = Math.abs(D.deltaY);
      let Ae = 500;
      re > 1 && (Ae = 100), re > 100 && (Ae = 0), W > Ae && (i.value = /* @__PURE__ */ new Date(), s(e.monthChangeOnScroll !== "inverse" ? -D.deltaY : D.deltaY, g));
    }
  }, r = (D, g, W = !1) => {
    e.monthChangeOnArrows && e.vertical === W && B(D, g);
  }, B = (D, g) => {
    s(D === "right" ? -1 : 1, g);
  }, C = (D) => {
    if (v.value.markers)
      return sa(D.value, v.value.markers);
  }, V = (D, g) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [D == 0, !0];
      case "fair":
        return [D == 0 || g > D, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, se = (D, g, W, re) => {
    if (e.sixWeeks && D.length < 6) {
      const Ae = 6 - D.length, Fe = (g.getDay() + 7 - re) % 7, xt = 6 - (W.getDay() + 7 - re) % 7, [zt, Da] = V(Fe, xt);
      for (let Dt = 1; Dt <= Ae; Dt++)
        if (Da ? !!(Dt % 2) == zt : zt) {
          const ea = D[0].days[0], Ma = M($t(ea.value, -7), De(g));
          D.unshift({ days: Ma });
        } else {
          const ea = D[D.length - 1], Ma = ea.days[ea.days.length - 1], Wn = M($t(Ma.value, 1), De(g));
          D.push({ days: Wn });
        }
    }
    return D;
  }, M = (D, g) => {
    const W = K(D), re = [];
    for (let Ae = 0; Ae < 7; Ae++) {
      const Fe = $t(W, Ae), wt = De(Fe) !== g;
      re.push({
        text: e.hideOffsetDates && wt ? "" : Fe.getDate(),
        value: Fe,
        current: !wt,
        classData: {}
      });
    }
    return re;
  }, E = (D, g) => {
    const W = [], re = new Date(g, D), Ae = new Date(g, D + 1, 0), Fe = e.weekStart, wt = La(re, { weekStartsOn: Fe }), xt = (zt) => {
      const Da = M(zt, D);
      if (W.push({ days: Da }), !W[W.length - 1].days.some(
        (Dt) => Me(Ge(Dt.value), Ge(Ae))
      )) {
        const Dt = $t(zt, 7);
        xt(Dt);
      }
    };
    return xt(wt), se(W, re, Ae, Fe);
  }, ce = (D) => {
    const g = gt(K(D.value), p.hours, p.minutes, Xe());
    t("date-update", g), O.value.enabled ? Xa(g, f, O.value.limit) : f.value = g, a(), xe().then(() => {
      A();
    });
  }, he = (D) => z.value.noDisabledRange ? Cn(n.value[0], D).some((W) => G(W)) : !1, et = () => {
    n.value = f.value ? f.value.slice() : [], n.value.length === 2 && !(z.value.fixedStart || z.value.fixedEnd) && (n.value = []);
  }, ve = (D, g) => {
    const W = [
      K(D.value),
      $t(K(D.value), +z.value.autoRange)
    ];
    ae(W) ? (g && vt(D.value), n.value = W) : t("invalid-date", D.value);
  }, vt = (D) => {
    const g = De(K(D)), W = me(K(D));
    if (ee(0, g, W), k.value.count > 0)
      for (let re = 1; re < k.value.count; re++) {
        const Ae = Al(
          Te(K(D), { year: h.value(re - 1), month: fe.value(re - 1) })
        );
        ee(re, Ae.month, Ae.year);
      }
  }, ot = (D) => {
    if (he(D.value) || !oe(D.value, f.value, z.value.fixedStart ? 0 : 1))
      return t("invalid-date", D.value);
    n.value = Ln(K(D.value), f, t, z);
  }, Ft = (D, g) => {
    if (et(), z.value.autoRange) return ve(D, g);
    if (z.value.fixedStart || z.value.fixedEnd) return ot(D);
    n.value[0] ? oe(K(D.value), f.value) && !he(D.value) ? Oe(K(D.value), K(n.value[0])) ? (n.value.unshift(K(D.value)), t("range-end", n.value[0])) : (n.value[1] = K(D.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", D.value), t("invalid-date", D.value)) : (n.value[0] = K(D.value), t("range-start", n.value[0]));
  }, Xe = (D = !0) => e.enableSeconds ? Array.isArray(p.seconds) ? D ? p.seconds[0] : p.seconds[1] : p.seconds : 0, Lt = (D) => {
    n.value[D] = gt(
      n.value[D],
      p.hours[D],
      p.minutes[D],
      Xe(D !== 1)
    );
  }, pa = () => {
    var D, g;
    n.value[0] && n.value[1] && +((D = n.value) == null ? void 0 : D[0]) > +((g = n.value) == null ? void 0 : g[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, Zt = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Lt(0) : (Lt(0), Lt(1), a()), pa(), f.value = n.value.slice(), va(n.value, t, e.autoApply, e.modelAuto));
  }, ya = (D, g = !1) => {
    if (G(D.value) || !D.current && e.hideOffsetDates) return t("invalid-date", D.value);
    if (c.value = JSON.parse(JSON.stringify(D)), !z.value.enabled) return ce(D);
    vn(p.hours) && vn(p.minutes) && !O.value.enabled && (Ft(D, g), Zt());
  }, ga = (D, g) => {
    var re;
    ee(D, g.month, g.year, !0), k.value.count && !k.value.solo && le(D), t("update-month-year", { instance: D, month: g.month, year: g.year }), l(k.value.solo ? D : void 0);
    const W = (re = e.flow) != null && re.length ? e.flow[e.flowStep] : void 0;
    !g.fromNav && (W === He.month || W === He.year) && a();
  }, ha = (D, g) => {
    Fn({
      value: D,
      modelValue: f,
      range: z.value.enabled,
      timezone: g ? void 0 : H.value.timezone
    }), y(), e.multiCalendars && xe().then(() => ne(!0));
  }, ba = () => {
    const D = ja(K(), H.value);
    z.value.enabled ? f.value && Array.isArray(f.value) && f.value[0] ? f.value = Oe(D, f.value[0]) ? [D, f.value[0]] : [f.value[0], D] : f.value = [D] : f.value = D, y();
  }, ka = () => {
    if (Array.isArray(f.value))
      if (O.value.enabled) {
        const D = wa();
        f.value[f.value.length - 1] = P(D);
      } else
        f.value = f.value.map((D, g) => D && P(D, g));
    else
      f.value = P(f.value);
    t("time-update");
  }, wa = () => Array.isArray(f.value) && f.value.length ? f.value[f.value.length - 1] : null;
  return {
    calendars: F,
    modelValue: f,
    month: fe,
    year: h,
    time: p,
    disabledTimesConfig: ie,
    today: _,
    validateTime: q,
    getCalendarDays: E,
    getMarker: C,
    handleScroll: ge,
    handleSwipe: B,
    handleArrow: r,
    selectDate: ya,
    updateMonthYear: ga,
    presetDate: ha,
    selectCurrentDate: ba,
    updateTime: (D, g = !0, W = !1) => {
      Z(D, g, W, ka);
    },
    assignMonthAndYear: d
  };
}, zr = { key: 0 }, Hr = /* @__PURE__ */ Le({
  __name: "DatePicker",
  props: {
    ...rt
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      calendars: i,
      month: c,
      year: w,
      modelValue: f,
      time: F,
      disabledTimesConfig: p,
      today: _,
      validateTime: k,
      getCalendarDays: R,
      getMarker: z,
      handleArrow: N,
      handleScroll: H,
      handleSwipe: v,
      selectDate: O,
      updateMonthYear: S,
      presetDate: G,
      selectCurrentDate: ae,
      updateTime: oe,
      assignMonthAndYear: Z
    } = Lr(n, a, de, d), P = Pt(), { setHoverDate: x, getDayClassData: Y, clearHoverDate: q } = lo(f, n), { defaultedMultiCalendars: ie } = Ce(n), fe = te([]), h = te([]), U = te(null), ee = Je(P, "calendar"), y = Je(P, "monthYear"), Q = Je(P, "timePicker"), A = (r) => {
      n.shadow || a("mount", r);
    };
    at(
      i,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), at(
      ie,
      (r, B) => {
        r.count - B.count > 0 && Z();
      },
      { deep: !0 }
    );
    const ne = X(() => (r) => R(c.value(r), w.value(r)).map((B) => ({
      ...B,
      days: B.days.map((C) => (C.marker = z(C), C.classData = Y(C), C))
    })));
    function de(r) {
      var B;
      r || r === 0 ? (B = h.value[r]) == null || B.triggerTransition(c.value(r), w.value(r)) : h.value.forEach((C, V) => C.triggerTransition(c.value(V), w.value(V)));
    }
    function d() {
      a("update-flow-step");
    }
    const m = (r, B = !1) => {
      O(r, B), n.spaceConfirm && a("select-date");
    }, L = (r, B, C = 0) => {
      var V;
      (V = fe.value[C]) == null || V.toggleMonthPicker(r, B);
    }, u = (r, B, C = 0) => {
      var V;
      (V = fe.value[C]) == null || V.toggleYearPicker(r, B);
    }, b = (r, B, C) => {
      var V;
      (V = U.value) == null || V.toggleTimePicker(r, B, C);
    }, I = (r, B) => {
      var C;
      if (!n.range) {
        const V = f.value ? f.value : _, se = B ? new Date(B) : V, M = r ? La(se, { weekStartsOn: 1 }) : hn(se, { weekStartsOn: 1 });
        O({
          value: M,
          current: De(se) === c.value(0),
          text: "",
          classData: {}
        }), (C = document.getElementById(In(M))) == null || C.focus();
      }
    }, s = (r) => {
      var B;
      (B = fe.value[0]) == null || B.handleMonthYearChange(r, !0);
    }, le = (r) => {
      S(0, { month: c.value(0), year: w.value(0) + (r ? 1 : -1), fromNav: !0 });
    }, pe = (r, B) => {
      r === He.time && a(`time-picker-${B ? "open" : "close"}`), a("overlay-toggle", { open: B, overlay: r });
    }, $ = (r) => {
      a("overlay-toggle", { open: !1, overlay: r }), a("focus-menu");
    };
    return t({
      clearHoverDate: q,
      presetDate: G,
      selectCurrentDate: ae,
      toggleMonthPicker: L,
      toggleYearPicker: u,
      toggleTimePicker: b,
      handleArrow: N,
      updateMonthYear: S,
      getSidebarProps: () => ({
        modelValue: f,
        month: c,
        year: w,
        time: F,
        updateTime: oe,
        updateMonthYear: S,
        selectDate: O,
        presetDate: G
      }),
      changeMonth: s,
      changeYear: le,
      selectWeekDate: I
    }), (r, B) => (T(), j(be, null, [
      Ze(fa, {
        "multi-calendars": o(ie).count,
        collapse: r.collapse
      }, {
        default: ke(({ instance: C, index: V }) => [
          r.disableMonthYearSelect ? J("", !0) : (T(), $e(Cr, Ee({
            key: 0,
            ref: (se) => {
              se && (fe.value[V] = se);
            },
            months: o($n)(r.formatLocale, r.locale, r.monthNameFormat),
            years: o(Ka)(r.yearRange, r.locale, r.reverseYears),
            month: o(c)(C),
            year: o(w)(C),
            instance: C
          }, r.$props, {
            onMount: B[0] || (B[0] = (se) => A(o(Tt).header)),
            onResetFlow: B[1] || (B[1] = (se) => r.$emit("reset-flow")),
            onUpdateMonthYear: (se) => o(S)(C, se),
            onOverlayClosed: $,
            onOverlayOpened: B[2] || (B[2] = (se) => r.$emit("overlay-toggle", { open: !0, overlay: se }))
          }), Ve({ _: 2 }, [
            Re(o(y), (se, M) => ({
              name: se,
              fn: ke((E) => [
                ue(r.$slots, se, Ne(Qe(E)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Ze(Fr, Ee({
            ref: (se) => {
              se && (h.value[V] = se);
            },
            "mapped-dates": ne.value(C),
            month: o(c)(C),
            year: o(w)(C),
            instance: C
          }, r.$props, {
            onSelectDate: (se) => o(O)(se, C !== 1),
            onHandleSpace: (se) => m(se, C !== 1),
            onSetHoverDate: B[3] || (B[3] = (se) => o(x)(se)),
            onHandleScroll: (se) => o(H)(se, C),
            onHandleSwipe: (se) => o(v)(se, C),
            onMount: B[4] || (B[4] = (se) => A(o(Tt).calendar)),
            onResetFlow: B[5] || (B[5] = (se) => r.$emit("reset-flow")),
            onTooltipOpen: B[6] || (B[6] = (se) => r.$emit("tooltip-open", se)),
            onTooltipClose: B[7] || (B[7] = (se) => r.$emit("tooltip-close", se))
          }), Ve({ _: 2 }, [
            Re(o(ee), (se, M) => ({
              name: se,
              fn: ke((E) => [
                ue(r.$slots, se, Ne(Qe({ ...E })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      r.enableTimePicker ? (T(), j("div", zr, [
        r.$slots["time-picker"] ? ue(r.$slots, "time-picker", Ne(Ee({ key: 0 }, { time: o(F), updateTime: o(oe) }))) : (T(), $e(Hn, Ee({
          key: 1,
          ref_key: "timePickerRef",
          ref: U
        }, r.$props, {
          hours: o(F).hours,
          minutes: o(F).minutes,
          seconds: o(F).seconds,
          "internal-model-value": r.internalModelValue,
          "disabled-times-config": o(p),
          "validate-time": o(k),
          onMount: B[8] || (B[8] = (C) => A(o(Tt).timePicker)),
          "onUpdate:hours": B[9] || (B[9] = (C) => o(oe)(C)),
          "onUpdate:minutes": B[10] || (B[10] = (C) => o(oe)(C, !1)),
          "onUpdate:seconds": B[11] || (B[11] = (C) => o(oe)(C, !1, !0)),
          onResetFlow: B[12] || (B[12] = (C) => r.$emit("reset-flow")),
          onOverlayClosed: B[13] || (B[13] = (C) => pe(C, !1)),
          onOverlayOpened: B[14] || (B[14] = (C) => pe(C, !0)),
          onAmPmChange: B[15] || (B[15] = (C) => r.$emit("am-pm-change", C))
        }), Ve({ _: 2 }, [
          Re(o(Q), (C, V) => ({
            name: C,
            fn: ke((se) => [
              ue(r.$slots, C, Ne(Qe(se)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : J("", !0)
    ], 64));
  }
}), Ur = (e, t) => {
  const l = te(), {
    defaultedMultiCalendars: a,
    defaultedConfig: n,
    defaultedHighlight: i,
    defaultedRange: c,
    propDates: w,
    defaultedFilters: f,
    defaultedMultiDates: F
  } = Ce(e), { modelValue: p, year: _, month: k, calendars: R } = Jt(e, t), { isDisabled: z } = kt(e), { selectYear: N, groupedYears: H, showYearPicker: v, isDisabled: O, toggleYearPicker: S, handleYearSelect: G, handleYear: ae } = zn({
    modelValue: p,
    multiCalendars: a,
    range: c,
    highlight: i,
    calendars: R,
    propDates: w,
    month: k,
    year: _,
    filters: f,
    props: e,
    emit: t
  }), oe = (y, Q) => [y, Q].map((A) => ut(A, "MMMM", { locale: e.formatLocale })).join("-"), Z = X(() => (y) => p.value ? Array.isArray(p.value) ? p.value.some((Q) => tn(y, Q)) : tn(p.value, y) : !1), P = (y) => {
    if (c.value.enabled) {
      if (Array.isArray(p.value)) {
        const Q = Me(y, p.value[0]) || Me(y, p.value[1]);
        return da(p.value, l.value, y) && !Q;
      }
      return !1;
    }
    return !1;
  }, x = (y, Q) => y.quarter === nn(Q) && y.year === me(Q), Y = (y) => typeof i.value == "function" ? i.value({ quarter: nn(y), year: me(y) }) : !!i.value.quarters.find((Q) => x(Q, y)), q = X(() => (y) => {
    const Q = Te(/* @__PURE__ */ new Date(), { year: _.value(y) });
    return ul({
      start: oa(Q),
      end: wn(Q)
    }).map((A) => {
      const ne = il(A), de = an(A), d = z(A), m = P(ne), L = Y(ne);
      return {
        text: oe(ne, de),
        value: ne,
        active: Z.value(ne),
        highlighted: L,
        disabled: d,
        isBetween: m
      };
    });
  }), ie = (y) => {
    Xa(y, p, F.value.limit), t("auto-apply", !0);
  }, fe = (y) => {
    p.value = Ja(p, y, t), va(p.value, t, e.autoApply, e.modelAuto);
  }, h = (y) => {
    p.value = y, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: H,
    year: _,
    isDisabled: O,
    quarters: q,
    showYearPicker: v,
    modelValue: p,
    setHoverDate: (y) => {
      l.value = y;
    },
    selectYear: N,
    selectQuarter: (y, Q, A) => {
      if (!A)
        return R.value[Q].month = De(an(y)), F.value.enabled ? ie(y) : c.value.enabled ? fe(y) : h(y);
    },
    toggleYearPicker: S,
    handleYearSelect: G,
    handleYear: ae
  };
}, Vr = { class: "dp--quarter-items" }, Wr = ["data-test", "disabled", "onClick", "onMouseover"], jr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Pt(), c = Je(i, "yearMode"), {
      defaultedMultiCalendars: w,
      defaultedConfig: f,
      groupedYears: F,
      year: p,
      isDisabled: _,
      quarters: k,
      modelValue: R,
      showYearPicker: z,
      setHoverDate: N,
      selectQuarter: H,
      toggleYearPicker: v,
      handleYearSelect: O,
      handleYear: S
    } = Ur(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: R,
      year: p,
      selectQuarter: H,
      handleYearSelect: O,
      handleYear: S
    }) }), (ae, oe) => (T(), $e(fa, {
      "multi-calendars": o(w).count,
      collapse: ae.collapse,
      stretch: ""
    }, {
      default: ke(({ instance: Z }) => [
        ye("div", {
          class: "dp-quarter-picker-wrap",
          style: tt({ minHeight: `${o(f).modeHeight}px` })
        }, [
          ae.$slots["top-extra"] ? ue(ae.$slots, "top-extra", {
            key: 0,
            value: ae.internalModelValue
          }) : J("", !0),
          ye("div", null, [
            Ze(En, Ee(ae.$props, {
              items: o(F)(Z),
              instance: Z,
              "show-year-picker": o(z)[Z],
              year: o(p)(Z),
              "is-disabled": (P) => o(_)(Z, P),
              onHandleYear: (P) => o(S)(Z, P),
              onYearSelect: (P) => o(O)(P, Z),
              onToggleYearPicker: (P) => o(v)(Z, P == null ? void 0 : P.flow, P == null ? void 0 : P.show)
            }), Ve({ _: 2 }, [
              Re(o(c), (P, x) => ({
                name: P,
                fn: ke((Y) => [
                  ue(ae.$slots, P, Ne(Qe(Y)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ye("div", Vr, [
            (T(!0), j(be, null, Re(o(k)(Z), (P, x) => (T(), j("div", { key: x }, [
              ye("button", {
                type: "button",
                class: we(["dp--qr-btn", {
                  "dp--qr-btn-active": P.active,
                  "dp--qr-btn-between": P.isBetween,
                  "dp--qr-btn-disabled": P.disabled,
                  "dp--highlighted": P.highlighted
                }]),
                "data-test": P.value,
                disabled: P.disabled,
                onClick: (Y) => o(H)(P.value, Z, P.disabled),
                onMouseover: (Y) => o(N)(P.value)
              }, [
                ae.$slots.quarter ? ue(ae.$slots, "quarter", {
                  key: 0,
                  value: P.value,
                  text: P.text
                }) : (T(), j(be, { key: 1 }, [
                  ct(Ue(P.text), 1)
                ], 64))
              ], 42, Wr)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Kr = ["id", "tabindex", "role", "aria-label"], Gr = {
  key: 0,
  class: "dp--menu-load-container"
}, Qr = /* @__PURE__ */ ye("span", { class: "dp--menu-loader" }, null, -1), qr = [
  Qr
], Xr = {
  key: 1,
  class: "dp--menu-header"
}, Jr = {
  key: 0,
  class: "dp__sidebar_left"
}, Zr = ["data-test", "onClick", "onKeydown"], xr = {
  key: 2,
  class: "dp__sidebar_right"
}, eo = {
  key: 3,
  class: "dp__action_extra"
}, mn = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...ca,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = te(null), c = X(() => {
      const { openOnTop: M, ...E } = n;
      return {
        ...E,
        flowStep: x.value,
        collapse: n.collapse,
        noOverlayFocus: n.noOverlayFocus,
        menuWrapRef: i.value
      };
    }), { setMenuFocused: w, setShiftKey: f, control: F } = Nn(), p = Pt(), { defaultedTextInput: _, defaultedInline: k, defaultedConfig: R, defaultedUI: z } = Ce(n), N = te(null), H = te(0), v = te(null), O = te(!1), S = te(null);
    We(() => {
      if (!n.shadow) {
        O.value = !0, G(), window.addEventListener("resize", G);
        const M = Ie(i);
        if (M && !_.value.enabled && !k.value.enabled && (w(!0), ee()), M) {
          const E = (ce) => {
            R.value.allowPreventDefault && ce.preventDefault(), yt(ce, R.value, !0);
          };
          M.addEventListener("pointerdown", E), M.addEventListener("mousedown", E);
        }
      }
    }), ua(() => {
      window.removeEventListener("resize", G);
    });
    const G = () => {
      const M = Ie(v);
      M && (H.value = M.getBoundingClientRect().width);
    }, { arrowRight: ae, arrowLeft: oe, arrowDown: Z, arrowUp: P } = bt(), { flowStep: x, updateFlowStep: Y, childMount: q, resetFlow: ie, handleFlow: fe } = ro(n, a, S), h = X(() => n.monthPicker ? rr : n.yearPicker ? sr : n.timePicker ? $r : n.quarterPicker ? jr : Hr), U = X(() => {
      var ce;
      if (R.value.arrowLeft) return R.value.arrowLeft;
      const M = (ce = i.value) == null ? void 0 : ce.getBoundingClientRect(), E = n.getInputRect();
      return (E == null ? void 0 : E.width) < (H == null ? void 0 : H.value) && (E == null ? void 0 : E.left) <= ((M == null ? void 0 : M.left) ?? 0) ? `${(E == null ? void 0 : E.width) / 2}px` : (E == null ? void 0 : E.right) >= ((M == null ? void 0 : M.right) ?? 0) && (E == null ? void 0 : E.width) < (H == null ? void 0 : H.value) ? `${(H == null ? void 0 : H.value) - (E == null ? void 0 : E.width) / 2}px` : "50%";
    }), ee = () => {
      const M = Ie(i);
      M && M.focus({ preventScroll: !0 });
    }, y = X(() => {
      var M;
      return ((M = S.value) == null ? void 0 : M.getSidebarProps()) || {};
    }), Q = () => {
      n.openOnTop && a("recalculate-position");
    }, A = Je(p, "action"), ne = X(() => n.monthPicker || n.yearPicker ? Je(p, "monthYear") : n.timePicker ? Je(p, "timePicker") : Je(p, "shared")), de = X(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), d = X(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), m = X(
      () => ({
        dp__menu: !0,
        dp__menu_index: !k.value.enabled,
        dp__relative: k.value.enabled,
        ...z.value.menu ?? {}
      })
    ), L = (M) => {
      yt(M, R.value, !0);
    }, u = () => {
      n.escClose && a("close-picker");
    }, b = (M) => {
      if (n.arrowNavigation) {
        if (M === je.up) return P();
        if (M === je.down) return Z();
        if (M === je.left) return oe();
        if (M === je.right) return ae();
      } else M === je.left || M === je.up ? $("handleArrow", je.left, 0, M === je.up) : $("handleArrow", je.right, 0, M === je.down);
    }, I = (M) => {
      f(M.shiftKey), !n.disableMonthYearSelect && M.code === Pe.tab && M.target.classList.contains("dp__menu") && F.value.shiftKeyInMenu && (M.preventDefault(), yt(M, R.value, !0), a("close-picker"));
    }, s = () => {
      ee(), a("time-picker-close");
    }, le = (M) => {
      var E, ce, he;
      (E = S.value) == null || E.toggleTimePicker(!1, !1), (ce = S.value) == null || ce.toggleMonthPicker(!1, !1, M), (he = S.value) == null || he.toggleYearPicker(!1, !1, M);
    }, pe = (M, E = 0) => {
      var ce, he, et;
      return M === "month" ? (ce = S.value) == null ? void 0 : ce.toggleMonthPicker(!1, !0, E) : M === "year" ? (he = S.value) == null ? void 0 : he.toggleYearPicker(!1, !0, E) : M === "time" ? (et = S.value) == null ? void 0 : et.toggleTimePicker(!0, !1) : le(E);
    }, $ = (M, ...E) => {
      var ce, he;
      (ce = S.value) != null && ce[M] && ((he = S.value) == null || he[M](...E));
    }, ge = () => {
      $("selectCurrentDate");
    }, r = (M, E) => {
      $("presetDate", M, E);
    }, B = () => {
      $("clearHoverDate");
    }, C = (M, E) => {
      $("updateMonthYear", M, E);
    }, V = (M, E) => {
      M.preventDefault(), b(E);
    }, se = (M) => {
      var E, ce, he;
      if (I(M), M.key === Pe.home || M.key === Pe.end)
        return $(
          "selectWeekDate",
          M.key === Pe.home,
          M.target.getAttribute("id")
        );
      switch ((M.key === Pe.pageUp || M.key === Pe.pageDown) && (M.shiftKey ? ($("changeYear", M.key === Pe.pageUp), (E = Ea(i.value, "overlay-year")) == null || E.focus()) : ($("changeMonth", M.key === Pe.pageUp), (ce = Ea(i.value, M.key === Pe.pageUp ? "action-prev" : "action-next")) == null || ce.focus()), M.target.getAttribute("id") && ((he = i.value) == null || he.focus({ preventScroll: !0 }))), M.key) {
        case Pe.esc:
          return u();
        case Pe.arrowLeft:
          return V(M, je.left);
        case Pe.arrowRight:
          return V(M, je.right);
        case Pe.arrowUp:
          return V(M, je.up);
        case Pe.arrowDown:
          return V(M, je.down);
        default:
          return;
      }
    };
    return t({
      updateMonthYear: C,
      switchView: pe,
      handleFlow: fe
    }), (M, E) => {
      var ce, he, et;
      return T(), j("div", {
        id: M.uid ? `dp-menu-${M.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: i,
        tabindex: o(k).enabled ? void 0 : "0",
        role: o(k).enabled ? void 0 : "dialog",
        "aria-label": (ce = M.ariaLabels) == null ? void 0 : ce.menu,
        class: we(m.value),
        style: tt({ "--dp-arrow-left": U.value }),
        onMouseleave: B,
        onClick: L,
        onKeydown: se
      }, [
        (M.disabled || M.readonly) && o(k).enabled || M.loading ? (T(), j("div", {
          key: 0,
          class: we(d.value)
        }, [
          M.loading ? (T(), j("div", Gr, qr)) : J("", !0)
        ], 2)) : J("", !0),
        M.$slots["menu-header"] ? (T(), j("div", Xr, [
          ue(M.$slots, "menu-header")
        ])) : J("", !0),
        !o(k).enabled && !M.teleportCenter ? (T(), j("div", {
          key: 2,
          class: we(de.value)
        }, null, 2)) : J("", !0),
        ye("div", {
          ref_key: "innerMenuRef",
          ref: v,
          class: we({
            dp__menu_content_wrapper: ((he = M.presetDates) == null ? void 0 : he.length) || !!M.$slots["left-sidebar"] || !!M.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((et = M.presetDates) == null ? void 0 : et.length) || !!M.$slots["left-sidebar"] || !!M.$slots["right-sidebar"])
          }),
          style: tt({ "--dp-menu-width": `${H.value}px` })
        }, [
          M.$slots["left-sidebar"] ? (T(), j("div", Jr, [
            ue(M.$slots, "left-sidebar", Ne(Qe(y.value)))
          ])) : J("", !0),
          M.presetDates.length ? (T(), j("div", {
            key: 1,
            class: we({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (T(!0), j(be, null, Re(M.presetDates, (ve, vt) => (T(), j(be, { key: vt }, [
              ve.slot ? ue(M.$slots, ve.slot, {
                key: 0,
                presetDate: r,
                label: ve.label,
                value: ve.value
              }) : (T(), j("button", {
                key: 1,
                type: "button",
                style: tt(ve.style || {}),
                class: we(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test": ve.testId ?? void 0,
                onClick: Wt((ot) => r(ve.value, ve.noTz), ["prevent"]),
                onKeydown: (ot) => o(Ke)(ot, () => r(ve.value, ve.noTz), !0)
              }, Ue(ve.label), 47, Zr))
            ], 64))), 128))
          ], 2)) : J("", !0),
          ye("div", {
            ref_key: "calendarWrapperRef",
            ref: N,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (T(), $e(ia(h.value), Ee({
              ref_key: "dynCmpRef",
              ref: S
            }, c.value, {
              "flow-step": o(x),
              onMount: o(q),
              onUpdateFlowStep: o(Y),
              onResetFlow: o(ie),
              onFocusMenu: ee,
              onSelectDate: E[0] || (E[0] = (ve) => M.$emit("select-date")),
              onDateUpdate: E[1] || (E[1] = (ve) => M.$emit("date-update", ve)),
              onTooltipOpen: E[2] || (E[2] = (ve) => M.$emit("tooltip-open", ve)),
              onTooltipClose: E[3] || (E[3] = (ve) => M.$emit("tooltip-close", ve)),
              onAutoApply: E[4] || (E[4] = (ve) => M.$emit("auto-apply", ve)),
              onRangeStart: E[5] || (E[5] = (ve) => M.$emit("range-start", ve)),
              onRangeEnd: E[6] || (E[6] = (ve) => M.$emit("range-end", ve)),
              onInvalidFixedRange: E[7] || (E[7] = (ve) => M.$emit("invalid-fixed-range", ve)),
              onTimeUpdate: E[8] || (E[8] = (ve) => M.$emit("time-update")),
              onAmPmChange: E[9] || (E[9] = (ve) => M.$emit("am-pm-change", ve)),
              onTimePickerOpen: E[10] || (E[10] = (ve) => M.$emit("time-picker-open", ve)),
              onTimePickerClose: s,
              onRecalculatePosition: Q,
              onUpdateMonthYear: E[11] || (E[11] = (ve) => M.$emit("update-month-year", ve)),
              onAutoApplyInvalid: E[12] || (E[12] = (ve) => M.$emit("auto-apply-invalid", ve)),
              onInvalidDate: E[13] || (E[13] = (ve) => M.$emit("invalid-date", ve)),
              onOverlayToggle: E[14] || (E[14] = (ve) => M.$emit("overlay-toggle", ve)),
              "onUpdate:internalModelValue": E[15] || (E[15] = (ve) => M.$emit("update:internal-model-value", ve))
            }), Ve({ _: 2 }, [
              Re(ne.value, (ve, vt) => ({
                name: ve,
                fn: ke((ot) => [
                  ue(M.$slots, ve, Ne(Qe({ ...ot })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          M.$slots["right-sidebar"] ? (T(), j("div", xr, [
            ue(M.$slots, "right-sidebar", Ne(Qe(y.value)))
          ])) : J("", !0),
          M.$slots["action-extra"] ? (T(), j("div", eo, [
            M.$slots["action-extra"] ? ue(M.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: ge
            }) : J("", !0)
          ])) : J("", !0)
        ], 6),
        !M.autoApply || o(R).keepActionRow ? (T(), $e(Jl, Ee({
          key: 3,
          "menu-mount": O.value
        }, c.value, {
          "calendar-width": H.value,
          onClosePicker: E[16] || (E[16] = (ve) => M.$emit("close-picker")),
          onSelectDate: E[17] || (E[17] = (ve) => M.$emit("select-date")),
          onInvalidSelect: E[18] || (E[18] = (ve) => M.$emit("invalid-select")),
          onSelectNow: ge
        }), Ve({ _: 2 }, [
          Re(o(A), (ve, vt) => ({
            name: ve,
            fn: ke((ot) => [
              ue(M.$slots, ve, Ne(Qe({ ...ot })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : J("", !0)
      ], 46, Kr);
    };
  }
});
var Ct = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ct || {});
const to = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: l,
  pickerWrapperRef: a,
  inline: n,
  emit: i,
  props: c,
  slots: w
}) => {
  const { defaultedConfig: f } = Ce(c), F = te({}), p = te(!1), _ = te({
    top: "0",
    left: "0"
  }), k = te(!1), R = Vt(c, "teleportCenter");
  at(R, () => {
    _.value = JSON.parse(JSON.stringify({})), ae();
  });
  const z = (y) => {
    if (c.teleport) {
      const Q = y.getBoundingClientRect();
      return {
        left: Q.left + window.scrollX,
        top: Q.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, N = (y, Q) => {
    _.value.left = `${y + Q - F.value.width}px`;
  }, H = (y) => {
    _.value.left = `${y}px`;
  }, v = (y, Q) => {
    c.position === Ct.left && H(y), c.position === Ct.right && N(y, Q), c.position === Ct.center && (_.value.left = `${y + Q / 2 - F.value.width / 2}px`);
  }, O = (y) => {
    const { width: Q, height: A } = y.getBoundingClientRect(), { top: ne, left: de } = c.altPosition ? c.altPosition(y) : z(y);
    return { top: +ne, left: +de, width: Q, height: A };
  }, S = () => {
    _.value.left = "50%", _.value.top = "50%", _.value.transform = "translate(-50%, -50%)", _.value.position = "fixed", delete _.value.opacity;
  }, G = () => {
    const y = Ie(l), { top: Q, left: A, transform: ne } = c.altPosition(y);
    _.value = { top: `${Q}px`, left: `${A}px`, transform: ne ?? "" };
  }, ae = (y = !0) => {
    var Q;
    if (!n.value.enabled) {
      if (R.value) return S();
      if (c.altPosition !== null) return G();
      if (y) {
        const A = c.teleport ? (Q = t.value) == null ? void 0 : Q.$el : e.value;
        A && (F.value = A.getBoundingClientRect()), i("recalculate-position");
      }
      return ie();
    }
  }, oe = ({ inputEl: y, left: Q, width: A }) => {
    window.screen.width > 768 && !p.value && v(Q, A), x(y);
  }, Z = (y) => {
    const { top: Q, left: A, height: ne, width: de } = O(y);
    _.value.top = `${ne + Q + +c.offset}px`, k.value = !1, p.value || (_.value.left = `${A + de / 2 - F.value.width / 2}px`), oe({ inputEl: y, left: A, width: de });
  }, P = (y) => {
    const { top: Q, left: A, width: ne } = O(y);
    _.value.top = `${Q - +c.offset - F.value.height}px`, k.value = !0, oe({ inputEl: y, left: A, width: ne });
  }, x = (y) => {
    if (c.autoPosition) {
      const { left: Q, width: A } = O(y), { left: ne, right: de } = F.value;
      if (!p.value) {
        if (Math.abs(ne) !== Math.abs(de)) {
          if (ne <= 0)
            return p.value = !0, H(Q);
          if (de >= document.documentElement.clientWidth)
            return p.value = !0, N(Q, A);
        }
        return v(Q, A);
      }
    }
  }, Y = () => {
    const y = Ie(l);
    if (y) {
      const { height: Q } = F.value, { top: A, height: ne } = y.getBoundingClientRect(), d = window.innerHeight - A - ne, m = A;
      return Q <= d ? Mt.bottom : Q > d && Q <= m ? Mt.top : d >= m ? Mt.bottom : Mt.top;
    }
    return Mt.bottom;
  }, q = (y) => Y() === Mt.bottom ? Z(y) : P(y), ie = () => {
    const y = Ie(l);
    if (y)
      return c.autoPosition ? q(y) : Z(y);
  }, fe = function(y) {
    if (y) {
      const Q = y.scrollHeight > y.clientHeight, ne = window.getComputedStyle(y).overflowY.indexOf("hidden") !== -1;
      return Q && !ne;
    }
    return !0;
  }, h = function(y) {
    return !y || y === document.body || y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : fe(y) ? y : h(
      y.assignedSlot && f.value.shadowDom ? y.assignedSlot.parentNode : y.parentNode
    );
  }, U = (y) => {
    if (y)
      switch (c.position) {
        case Ct.left:
          return { left: 0, transform: "translateX(0)" };
        case Ct.right:
          return { left: `${y.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${y.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: k,
    menuStyle: _,
    xCorrect: p,
    setMenuPosition: ae,
    getScrollableParent: h,
    shadowRender: (y, Q) => {
      var u, b, I;
      const A = document.createElement("div"), ne = (u = Ie(l)) == null ? void 0 : u.getBoundingClientRect();
      A.setAttribute("id", "dp--temp-container");
      const de = (b = a.value) != null && b.clientWidth ? a.value : document.body;
      de.append(A);
      const d = U(ne), m = f.value.shadowDom ? Object.keys(w).filter(
        (s) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(s)
      ) : Object.keys(w), L = Qn(
        y,
        {
          ...Q,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...d }
        },
        Object.fromEntries(m.map((s) => [s, w[s]]))
      );
      xa(L, A), F.value = (I = L.el) == null ? void 0 : I.getBoundingClientRect(), xa(null, A), de.removeChild(A);
    }
  };
}, mt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], ao = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], no = {
  all: () => mt,
  monthYear: () => mt.filter((e) => e.use.includes("month-year")),
  input: () => ao,
  timePicker: () => mt.filter((e) => e.use.includes("time")),
  action: () => mt.filter((e) => e.use.includes("action")),
  calendar: () => mt.filter((e) => e.use.includes("calendar")),
  menu: () => mt.filter((e) => e.use.includes("menu")),
  shared: () => mt.filter((e) => e.use.includes("shared")),
  yearMode: () => mt.filter((e) => e.use.includes("year-mode"))
}, Je = (e, t, l) => {
  const a = [];
  return no[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), l != null && l.length && l.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, Xt = (e) => {
  const t = X(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), l = X(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: l };
}, Jt = (e, t, l) => {
  const { defaultedRange: a, defaultedTz: n } = Ce(e), i = K(qe(K(), n.value.timezone)), c = te([{ month: De(i), year: me(i) }]), w = (k) => {
    const R = {
      hours: ft(i),
      minutes: ht(i),
      seconds: 0
    };
    return a.value.enabled ? [R[k], R[k]] : R[k];
  }, f = Qt({
    hours: w("hours"),
    minutes: w("minutes"),
    seconds: w("seconds")
  });
  at(
    a,
    (k, R) => {
      k.enabled !== R.enabled && (f.hours = w("hours"), f.minutes = w("minutes"), f.seconds = w("seconds"));
    },
    { deep: !0 }
  );
  const F = X({
    get: () => e.internalModelValue,
    set: (k) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", k);
    }
  }), p = X(
    () => (k) => c.value[k] ? c.value[k].month : 0
  ), _ = X(
    () => (k) => c.value[k] ? c.value[k].year : 0
  );
  return at(
    F,
    (k, R) => {
      l && JSON.stringify(k ?? {}) !== JSON.stringify(R ?? {}) && l();
    },
    { deep: !0 }
  ), {
    calendars: c,
    time: f,
    modelValue: F,
    month: p,
    year: _,
    today: i
  };
}, lo = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedMultiDates: a,
    defaultedUI: n,
    defaultedHighlight: i,
    defaultedTz: c,
    propDates: w,
    defaultedRange: f
  } = Ce(t), { isDisabled: F } = kt(t), p = te(null), _ = te(qe(/* @__PURE__ */ new Date(), c.value.timezone)), k = (u) => {
    !u.current && t.hideOffsetDates || (p.value = u.value);
  }, R = () => {
    p.value = null;
  }, z = (u) => Array.isArray(e.value) && f.value.enabled && e.value[0] && p.value ? u ? Be(p.value, e.value[0]) : Oe(p.value, e.value[0]) : !0, N = (u, b) => {
    const I = () => e.value ? b ? e.value[0] || null : e.value[1] : null, s = e.value && Array.isArray(e.value) ? I() : null;
    return Me(K(u.value), s);
  }, H = (u) => {
    const b = Array.isArray(e.value) ? e.value[0] : null;
    return u ? !Oe(p.value ?? null, b) : !0;
  }, v = (u, b = !0) => (f.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !u.current ? !1 : Me(K(u.value), e.value[b ? 0 : 1]) : f.value.enabled ? N(u, b) && H(b) || Me(u.value, Array.isArray(e.value) ? e.value[0] : null) && z(b) : !1, O = (u, b) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const I = Me(u.value, p.value);
      return b ? Be(e.value[0], u.value) && I : Oe(e.value[0], u.value) && I;
    }
    return !1;
  }, S = (u) => !e.value || t.hideOffsetDates && !u.current ? !1 : f.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Me(u.value, e.value[0] ? e.value[0] : _.value) : !1 : a.value.enabled && Array.isArray(e.value) ? e.value.some((b) => Me(b, u.value)) : Me(u.value, e.value ? e.value : _.value), G = (u) => {
    if (f.value.autoRange || t.weekPicker) {
      if (p.value) {
        if (t.hideOffsetDates && !u.current) return !1;
        const b = $t(p.value, +f.value.autoRange), I = it(K(p.value), t.weekStart);
        return t.weekPicker ? Me(I[1], K(u.value)) : Me(b, K(u.value));
      }
      return !1;
    }
    return !1;
  }, ae = (u) => {
    if (f.value.autoRange || t.weekPicker) {
      if (p.value) {
        const b = $t(p.value, +f.value.autoRange);
        if (t.hideOffsetDates && !u.current) return !1;
        const I = it(K(p.value), t.weekStart);
        return t.weekPicker ? Be(u.value, I[0]) && Oe(u.value, I[1]) : Be(u.value, p.value) && Oe(u.value, b);
      }
      return !1;
    }
    return !1;
  }, oe = (u) => {
    if (f.value.autoRange || t.weekPicker) {
      if (p.value) {
        if (t.hideOffsetDates && !u.current) return !1;
        const b = it(K(p.value), t.weekStart);
        return t.weekPicker ? Me(b[0], u.value) : Me(p.value, u.value);
      }
      return !1;
    }
    return !1;
  }, Z = (u) => da(e.value, p.value, u.value), P = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, x = () => t.modelAuto ? An(t.internalModelValue) : !0, Y = (u) => {
    if (t.weekPicker) return !1;
    const b = f.value.enabled ? !v(u) && !v(u, !1) : !0;
    return !F(u.value) && !S(u) && !(!u.current && t.hideOffsetDates) && b;
  }, q = (u) => f.value.enabled ? t.modelAuto ? P() && S(u) : !1 : S(u), ie = (u) => i.value ? Dl(u.value, w.value.highlight) : !1, fe = (u) => {
    const b = F(u.value);
    return b && (typeof i.value == "function" ? !i.value(u.value, b) : !i.value.options.highlightDisabled);
  }, h = (u) => {
    var b;
    return typeof i.value == "function" ? i.value(u.value) : (b = i.value.weekdays) == null ? void 0 : b.includes(u.value.getDay());
  }, U = (u) => (f.value.enabled || t.weekPicker) && (!(l.value.count > 0) || u.current) && x() && !(!u.current && t.hideOffsetDates) && !S(u) ? Z(u) : !1, ee = (u) => {
    const { isRangeStart: b, isRangeEnd: I } = ne(u), s = f.value.enabled ? b || I : !1;
    return {
      dp__cell_offset: !u.current,
      dp__pointer: !t.disabled && !(!u.current && t.hideOffsetDates) && !F(u.value),
      dp__cell_disabled: F(u.value),
      dp__cell_highlight: !fe(u) && (ie(u) || h(u)) && !q(u) && !s && !oe(u) && !(U(u) && t.weekPicker) && !I,
      dp__cell_highlight_active: !fe(u) && (ie(u) || h(u)) && q(u),
      dp__today: !t.noToday && Me(u.value, _.value) && u.current,
      "dp--past": Oe(u.value, _.value),
      "dp--future": Be(u.value, _.value)
    };
  }, y = (u) => ({
    dp__active_date: q(u),
    dp__date_hover: Y(u)
  }), Q = (u) => {
    if (e.value && !Array.isArray(e.value)) {
      const b = it(e.value, t.weekStart);
      return {
        ...d(u),
        dp__range_start: Me(b[0], u.value),
        dp__range_end: Me(b[1], u.value),
        dp__range_between_week: Be(u.value, b[0]) && Oe(u.value, b[1])
      };
    }
    return {
      ...d(u)
    };
  }, A = (u) => {
    if (e.value && Array.isArray(e.value)) {
      const b = it(e.value[0], t.weekStart), I = e.value[1] ? it(e.value[1], t.weekStart) : [];
      return {
        ...d(u),
        dp__range_start: Me(b[0], u.value) || Me(I[0], u.value),
        dp__range_end: Me(b[1], u.value) || Me(I[1], u.value),
        dp__range_between_week: Be(u.value, b[0]) && Oe(u.value, b[1]) || Be(u.value, I[0]) && Oe(u.value, I[1]),
        dp__range_between: Be(u.value, b[1]) && Oe(u.value, I[0])
      };
    }
    return {
      ...d(u)
    };
  }, ne = (u) => {
    const b = l.value.count > 0 ? u.current && v(u) && x() : v(u) && x(), I = l.value.count > 0 ? u.current && v(u, !1) && x() : v(u, !1) && x();
    return { isRangeStart: b, isRangeEnd: I };
  }, de = (u) => {
    const { isRangeStart: b, isRangeEnd: I } = ne(u);
    return {
      dp__range_start: b,
      dp__range_end: I,
      dp__range_between: U(u),
      dp__date_hover: Me(u.value, p.value) && !b && !I && !t.weekPicker,
      dp__date_hover_start: O(u, !0),
      dp__date_hover_end: O(u, !1)
    };
  }, d = (u) => ({
    ...de(u),
    dp__cell_auto_range: ae(u),
    dp__cell_auto_range_start: oe(u),
    dp__cell_auto_range_end: G(u)
  }), m = (u) => f.value.enabled ? f.value.autoRange ? d(u) : t.modelAuto ? { ...y(u), ...de(u) } : t.weekPicker ? A(u) : de(u) : t.weekPicker ? Q(u) : y(u);
  return {
    setHoverDate: k,
    clearHoverDate: R,
    getDayClassData: (u) => t.hideOffsetDates && !u.current ? {} : {
      ...ee(u),
      ...m(u),
      [t.dayClass ? t.dayClass(u.value, t.internalModelValue) : ""]: !0,
      ...n.value.calendarCell ?? {}
    }
  };
}, kt = (e) => {
  const { defaultedFilters: t, defaultedRange: l, propDates: a, defaultedMultiDates: n } = Ce(e), i = (h) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(K(h)) : !!sa(h, a.value.disabledDates) : !1, c = (h) => a.value.maxDate ? e.yearPicker ? me(h) > me(a.value.maxDate) : Be(h, a.value.maxDate) : !1, w = (h) => a.value.minDate ? e.yearPicker ? me(h) < me(a.value.minDate) : Oe(h, a.value.minDate) : !1, f = (h) => {
    const U = c(h), ee = w(h), y = i(h), A = t.value.months.map((L) => +L).includes(De(h)), ne = e.disabledWeekDays.length ? e.disabledWeekDays.some((L) => +L === dl(h)) : !1, de = R(h), d = me(h), m = d < +e.yearRange[0] || d > +e.yearRange[1];
    return !(U || ee || y || A || m || ne || de);
  }, F = (h, U) => Oe(...pt(a.value.minDate, h, U)) || Me(...pt(a.value.minDate, h, U)), p = (h, U) => Be(...pt(a.value.maxDate, h, U)) || Me(...pt(a.value.maxDate, h, U)), _ = (h, U, ee) => {
    let y = !1;
    return a.value.maxDate && ee && p(h, U) && (y = !0), a.value.minDate && !ee && F(h, U) && (y = !0), y;
  }, k = (h, U, ee, y) => {
    let Q = !1;
    return y && (a.value.minDate || a.value.maxDate) ? a.value.minDate && a.value.maxDate ? Q = _(h, U, ee) : (a.value.minDate && F(h, U) || a.value.maxDate && p(h, U)) && (Q = !0) : Q = !0, Q;
  }, R = (h) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !sa(h, a.value.allowedDates) : !1, z = (h) => !f(h), N = (h) => l.value.noDisabledRange ? !pn({ start: h[0], end: h[1] }).some((ee) => z(ee)) : !0, H = (h) => {
    if (h) {
      const U = me(h);
      return U >= +e.yearRange[0] && U <= e.yearRange[1];
    }
    return !0;
  }, v = (h, U) => !!(Array.isArray(h) && h[U] && (l.value.maxRange || l.value.minRange) && H(h[U])), O = (h, U, ee = 0) => {
    if (v(U, ee) && H(h)) {
      const y = cl(h, U[ee]), Q = Cn(U[ee], h), A = Q.length === 1 ? 0 : Q.filter((de) => z(de)).length, ne = Math.abs(y) - (l.value.minMaxRawRange ? 0 : A);
      if (l.value.minRange && l.value.maxRange)
        return ne >= +l.value.minRange && ne <= +l.value.maxRange;
      if (l.value.minRange) return ne >= +l.value.minRange;
      if (l.value.maxRange) return ne <= +l.value.maxRange;
    }
    return !0;
  }, S = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, G = (h) => Array.isArray(h) ? [h[0] ? Pa(h[0]) : null, h[1] ? Pa(h[1]) : null] : Pa(h), ae = (h, U, ee) => h.find(
    (y) => +y.hours === ft(U) && y.minutes === "*" ? !0 : +y.minutes === ht(U) && +y.hours === ft(U)
  ) && ee, oe = (h, U, ee) => {
    const [y, Q] = h, [A, ne] = U;
    return !ae(y, A, ee) && !ae(Q, ne, ee) && ee;
  }, Z = (h, U) => {
    const ee = Array.isArray(U) ? U : [U];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? oe(e.disabledTimes, ee, h) : !ee.some((y) => ae(e.disabledTimes, y, h)) : h;
  }, P = (h, U) => {
    const ee = Array.isArray(U) ? [St(U[0]), U[1] ? St(U[1]) : void 0] : St(U), y = !e.disabledTimes(ee);
    return h && y;
  }, x = (h, U) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? Z(U, h) : P(U, h) : U, Y = (h) => {
    let U = !0;
    if (!h || S()) return !0;
    const ee = !a.value.minDate && !a.value.maxDate ? G(h) : h;
    return (e.maxTime || a.value.maxDate) && (U = dn(
      e.maxTime,
      a.value.maxDate,
      "max",
      Ye(ee),
      U
    )), (e.minTime || a.value.minDate) && (U = dn(
      e.minTime,
      a.value.minDate,
      "min",
      Ye(ee),
      U
    )), x(h, U);
  }, q = (h) => {
    if (!e.monthPicker) return !0;
    let U = !0;
    const ee = K(lt(h));
    if (a.value.minDate && a.value.maxDate) {
      const y = K(lt(a.value.minDate)), Q = K(lt(a.value.maxDate));
      return Be(ee, y) && Oe(ee, Q) || Me(ee, y) || Me(ee, Q);
    }
    if (a.value.minDate) {
      const y = K(lt(a.value.minDate));
      U = Be(ee, y) || Me(ee, y);
    }
    if (a.value.maxDate) {
      const y = K(lt(a.value.maxDate));
      U = Oe(ee, y) || Me(ee, y);
    }
    return U;
  }, ie = X(() => (h) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : Y(h)), fe = X(() => (h) => e.monthPicker ? Array.isArray(h) && (l.value.enabled || n.value.enabled) ? !h.filter((ee) => !q(ee)).length : q(h) : !0);
  return {
    isDisabled: z,
    validateDate: f,
    validateMonthYearInRange: k,
    isDateRangeAllowed: N,
    checkMinMaxRange: O,
    isValidTime: Y,
    isTimeValid: ie,
    isMonthValid: fe
  };
}, ma = () => {
  const e = X(() => (a, n) => a == null ? void 0 : a.includes(n)), t = X(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), l = X(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: l };
}, ro = (e, t, l) => {
  const a = te(0), n = Qt({
    [Tt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Tt.calendar]: !1,
    [Tt.header]: !1
  }), i = X(() => e.monthPicker || e.timePicker), c = (_) => {
    var k;
    if ((k = e.flow) != null && k.length) {
      if (!_ && i.value) return p();
      n[_] = !0, Object.keys(n).filter((R) => !n[R]).length || p();
    }
  }, w = () => {
    var _, k;
    (_ = e.flow) != null && _.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), p()), ((k = e.flow) == null ? void 0 : k.length) === a.value && xe().then(() => f());
  }, f = () => {
    a.value = -1;
  }, F = (_, k, ...R) => {
    var z, N;
    e.flow[a.value] === _ && l.value && ((N = (z = l.value)[k]) == null || N.call(z, ...R));
  }, p = (_ = 0) => {
    _ && (a.value += _), F(He.month, "toggleMonthPicker", !0), F(He.year, "toggleYearPicker", !0), F(He.calendar, "toggleTimePicker", !1, !0), F(He.time, "toggleTimePicker", !0, !0);
    const k = e.flow[a.value];
    (k === He.hours || k === He.minutes || k === He.seconds) && F(k, "toggleTimePicker", !0, !0, k);
  };
  return { childMount: c, updateFlowStep: w, resetFlow: f, handleFlow: p, flowStep: a };
}, oo = {
  key: 1,
  class: "dp__input_wrap"
}, so = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-disabled", "aria-invalid"], uo = {
  key: 2,
  class: "dp--clear-btn"
}, io = ["aria-label"], co = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...ca
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur",
    "text-input"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTextInput: i,
      defaultedAriaLabels: c,
      defaultedInline: w,
      defaultedConfig: f,
      defaultedRange: F,
      defaultedMultiDates: p,
      defaultedUI: _,
      getDefaultPattern: k,
      getDefaultStartTime: R
    } = Ce(n), { checkMinMaxRange: z } = kt(n), N = te(), H = te(null), v = te(!1), O = te(!1), S = te(!1), G = te(null), ae = X(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !i.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !i.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: typeof n.state == "boolean" ? n.state : !1,
        dp__input_invalid: typeof n.state == "boolean" ? !n.state : !1,
        dp__input_focus: v.value || n.isMenuOpen,
        dp__input_reg: !i.value.enabled,
        ..._.value.input ?? {}
      })
    ), oe = () => {
      a("set-input-date", null), n.clearable && n.autoApply && (a("set-empty-date"), N.value = null);
    }, Z = (d) => {
      const m = R();
      return Ml(
        d,
        i.value.format ?? k(),
        m ?? On({}, n.enableSeconds),
        n.inputValue,
        S.value,
        n.formatLocale
      );
    }, P = (d) => {
      const { rangeSeparator: m } = i.value, [L, u] = d.split(`${m}`);
      if (L) {
        const b = Z(L.trim()), I = u ? Z(u.trim()) : null;
        if (_t(b, I)) return;
        const s = b && I ? [b, I] : [b];
        z(I, s, 0) && (N.value = b ? s : null);
      }
    }, x = () => {
      S.value = !0;
    }, Y = (d) => {
      if (F.value.enabled)
        P(d);
      else if (p.value.enabled) {
        const m = d.split(";");
        N.value = m.map((L) => Z(L.trim())).filter((L) => L);
      } else
        N.value = Z(d);
    }, q = (d) => {
      var L;
      const m = typeof d == "string" ? d : (L = d.target) == null ? void 0 : L.value;
      m !== "" ? (i.value.openMenu && !n.isMenuOpen && a("open"), Y(m), a("set-input-date", N.value)) : oe(), S.value = !1, a("update:input-value", m), a("text-input", d, N.value);
    }, ie = (d) => {
      i.value.enabled ? (Y(d.target.value), i.value.enterSubmit && Fa(N.value) && n.inputValue !== "" ? (a("set-input-date", N.value, !0), N.value = null) : i.value.enterSubmit && n.inputValue === "" && (N.value = null, a("clear"))) : U(d);
    }, fe = (d, m) => {
      var L;
      G.value && m && !O.value && (d.preventDefault(), O.value = !0, (L = G.value) == null || L.focus()), i.value.enabled && i.value.tabSubmit && Y(d.target.value), i.value.tabSubmit && Fa(N.value) && n.inputValue !== "" ? (a("set-input-date", N.value, !0, !0), N.value = null) : i.value.tabSubmit && n.inputValue === "" && (N.value = null, a("clear", !0));
    }, h = () => {
      v.value = !0, a("focus"), xe().then(() => {
        var d;
        i.value.enabled && i.value.selectOnFocus && ((d = H.value) == null || d.select());
      });
    }, U = (d) => {
      if (d.preventDefault(), yt(d, f.value, !0), i.value.enabled && i.value.openMenu && !w.value.input) {
        if (i.value.openMenu === "open" && !n.isMenuOpen) return a("open");
        if (i.value.openMenu === "toggle") return a("toggle");
      } else i.value.enabled || a("toggle");
    }, ee = () => {
      a("real-blur"), v.value = !1, (!n.isMenuOpen || w.value.enabled && w.value.input) && a("blur"), n.autoApply && i.value.enabled && N.value && !n.isMenuOpen && (a("set-input-date", N.value), a("select-date"), N.value = null);
    }, y = (d) => {
      yt(d, f.value, !0), a("clear");
    }, Q = (d, m) => {
      if (d.key === "Tab" && fe(d, m), d.key === "Enter" && ie(d), !i.value.enabled) {
        if (d.code === "Tab") return;
        d.preventDefault();
      }
    }, A = () => {
      var d;
      (d = H.value) == null || d.focus({ preventScroll: !0 });
    }, ne = (d) => {
      N.value = d;
    }, de = (d) => {
      d.key === Pe.tab && (O.value = !1, fe(d));
    };
    return t({
      focusInput: A,
      setParsedDate: ne
    }), (d, m) => {
      var L, u;
      return T(), j("div", { onClick: U }, [
        d.$slots.trigger && !d.$slots["dp-input"] && !o(w).enabled ? ue(d.$slots, "trigger", { key: 0 }) : J("", !0),
        !d.$slots.trigger && (!o(w).enabled || o(w).input) ? (T(), j("div", oo, [
          d.$slots["dp-input"] && !d.$slots.trigger && (!o(w).enabled || o(w).enabled && o(w).input) ? ue(d.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: q,
            onEnter: ie,
            onTab: fe,
            onClear: y,
            onBlur: ee,
            onKeypress: Q,
            onPaste: x,
            onFocus: h,
            openMenu: () => d.$emit("open"),
            closeMenu: () => d.$emit("close"),
            toggleMenu: () => d.$emit("toggle")
          }) : J("", !0),
          d.$slots["dp-input"] ? J("", !0) : (T(), j("input", {
            key: 1,
            id: d.uid ? `dp-input-${d.uid}` : void 0,
            ref_key: "inputRef",
            ref: H,
            "data-test": "dp-input",
            name: d.name,
            class: we(ae.value),
            inputmode: o(i).enabled ? "text" : "none",
            placeholder: d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            required: d.required,
            value: e.inputValue,
            autocomplete: d.autocomplete,
            "aria-disabled": d.disabled || void 0,
            "aria-invalid": d.state === !1 ? !0 : void 0,
            onInput: q,
            onBlur: ee,
            onFocus: h,
            onKeypress: Q,
            onKeydown: m[0] || (m[0] = (b) => Q(b, !0)),
            onPaste: x
          }, null, 42, so)),
          ye("div", {
            onClick: m[3] || (m[3] = (b) => a("toggle"))
          }, [
            d.$slots["input-icon"] && !d.hideInputIcon ? (T(), j("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: m[1] || (m[1] = (b) => a("toggle"))
            }, [
              ue(d.$slots, "input-icon")
            ])) : J("", !0),
            !d.$slots["input-icon"] && !d.hideInputIcon && !d.$slots["dp-input"] ? (T(), $e(o(Et), {
              key: 1,
              "aria-label": (L = o(c)) == null ? void 0 : L.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: m[2] || (m[2] = (b) => a("toggle"))
            }, null, 8, ["aria-label"])) : J("", !0)
          ]),
          d.$slots["clear-icon"] && e.inputValue && d.clearable && !d.disabled && !d.readonly ? (T(), j("span", uo, [
            ue(d.$slots, "clear-icon", { clear: y })
          ])) : J("", !0),
          d.clearable && !d.$slots["clear-icon"] && e.inputValue && !d.disabled && !d.readonly ? (T(), j("button", {
            key: 3,
            ref_key: "clearBtnRef",
            ref: G,
            "aria-label": (u = o(c)) == null ? void 0 : u.clearInput,
            class: "dp--clear-btn",
            type: "button",
            onBlur: m[4] || (m[4] = (b) => O.value = !1),
            onKeydown: m[5] || (m[5] = (b) => o(Ke)(b, () => y(b), !0, de)),
            onClick: m[6] || (m[6] = Wt((b) => y(b), ["prevent"]))
          }, [
            Ze(o(Mn), {
              class: "dp__input_icons",
              "data-test": "clear-icon"
            })
          ], 40, io)) : J("", !0)
        ])) : J("", !0)
      ]);
    };
  }
}), fo = typeof window < "u" ? window : void 0, Ya = () => {
}, vo = (e) => qn() ? (Xn(e), !0) : !1, mo = (e, t, l, a) => {
  if (!e) return Ya;
  let n = Ya;
  const i = at(
    () => o(e),
    (w) => {
      n(), w && (w.addEventListener(t, l, a), n = () => {
        w.removeEventListener(t, l, a), n = Ya;
      });
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), n();
  };
  return vo(c), c;
}, po = (e, t, l, a = {}) => {
  const { window: n = fo, event: i = "pointerdown" } = a;
  return n ? mo(n, i, (w) => {
    const f = Ie(e), F = Ie(t);
    !f || !F || f === w.target || w.composedPath().includes(f) || w.composedPath().includes(F) || l(w);
  }, { passive: !0 }) : void 0;
}, yo = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...ca
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "text-input"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Pt(), c = te(!1), w = Vt(n, "modelValue"), f = Vt(n, "timezone"), F = te(null), p = te(null), _ = te(null), k = te(!1), R = te(null), z = te(!1), N = te(!1), H = te(!1), v = te(!1), { setMenuFocused: O, setShiftKey: S } = Nn(), { clearArrowNav: G } = bt(), { validateDate: ae, isValidTime: oe } = kt(n), {
      defaultedTransitions: Z,
      defaultedTextInput: P,
      defaultedInline: x,
      defaultedConfig: Y,
      defaultedRange: q,
      defaultedMultiDates: ie
    } = Ce(n), { menuTransition: fe, showTransition: h } = Xt(Z);
    We(() => {
      u(n.modelValue), xe().then(() => {
        if (!x.value.enabled) {
          const g = de(R.value);
          g == null || g.addEventListener("scroll", C), window == null || window.addEventListener("resize", V);
        }
      }), x.value.enabled && (c.value = !0), window == null || window.addEventListener("keyup", se), window == null || window.addEventListener("keydown", M);
    }), ua(() => {
      if (!x.value.enabled) {
        const g = de(R.value);
        g == null || g.removeEventListener("scroll", C), window == null || window.removeEventListener("resize", V);
      }
      window == null || window.removeEventListener("keyup", se), window == null || window.removeEventListener("keydown", M);
    });
    const U = Je(i, "all", n.presetDates), ee = Je(i, "input");
    at(
      [w, f],
      () => {
        u(w.value);
      },
      { deep: !0 }
    );
    const { openOnTop: y, menuStyle: Q, xCorrect: A, setMenuPosition: ne, getScrollableParent: de, shadowRender: d } = to({
      menuRef: F,
      menuRefInner: p,
      inputRef: _,
      pickerWrapperRef: R,
      inline: x,
      emit: a,
      props: n,
      slots: i
    }), {
      inputValue: m,
      internalModelValue: L,
      parseExternalModelValue: u,
      emitModelValue: b,
      formatInputValue: I,
      checkBeforeEmit: s
    } = Gl(a, n, k), le = X(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: x.value.enabled,
        "dp--flex-display-collapsed": H.value,
        dp__flex_display_with_input: x.value.input
      })
    ), pe = X(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), $ = X(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || x.value.enabled
    } : {}), ge = X(() => ({ class: "dp__outer_menu_wrap" })), r = X(() => x.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), B = () => {
      var g, W;
      return (W = (g = _.value) == null ? void 0 : g.$el) == null ? void 0 : W.getBoundingClientRect();
    }, C = () => {
      c.value && (Y.value.closeOnScroll ? Xe() : ne());
    }, V = () => {
      var W;
      c.value && ne();
      const g = (W = p.value) == null ? void 0 : W.$el.getBoundingClientRect().width;
      H.value = document.body.offsetWidth <= g;
    }, se = (g) => {
      g.key === "Tab" && !x.value.enabled && !n.teleport && Y.value.tabOutClosesMenu && (R.value.contains(document.activeElement) || Xe()), N.value = g.shiftKey;
    }, M = (g) => {
      N.value = g.shiftKey;
    }, E = () => {
      !n.disabled && !n.readonly && (d(mn, n), ne(!1), c.value = !0, c.value && a("open"), c.value || Ft(), u(n.modelValue));
    }, ce = () => {
      var g;
      m.value = "", Ft(), (g = _.value) == null || g.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), Y.value.closeOnClearValue && Xe();
    }, he = () => {
      const g = L.value;
      return !g || !Array.isArray(g) && ae(g) ? !0 : Array.isArray(g) ? ie.value.enabled || g.length === 2 && ae(g[0]) && ae(g[1]) ? !0 : q.value.partialRange && !n.timePicker ? ae(g[0]) : !1 : !1;
    }, et = () => {
      s() && he() ? (b(), Xe()) : a("invalid-select", L.value);
    }, ve = (g) => {
      vt(), b(), Y.value.closeOnAutoApply && !g && Xe();
    }, vt = () => {
      _.value && P.value.enabled && _.value.setParsedDate(L.value);
    }, ot = (g = !1) => {
      n.autoApply && oe(L.value) && he() && (q.value.enabled && Array.isArray(L.value) ? (q.value.partialRange || L.value.length === 2) && ve(g) : ve(g));
    }, Ft = () => {
      P.value.enabled || (L.value = null);
    }, Xe = () => {
      x.value.enabled || (c.value && (c.value = !1, A.value = !1, O(!1), S(!1), G(), a("closed"), m.value && u(w.value)), Ft(), a("blur"));
    }, Lt = (g, W, re = !1) => {
      if (!g) {
        L.value = null;
        return;
      }
      const Ae = Array.isArray(g) ? !g.some((wt) => !ae(wt)) : ae(g), Fe = oe(g);
      Ae && Fe && (v.value = !0, L.value = g, W && (z.value = re, et(), a("text-submit")), xe().then(() => {
        v.value = !1;
      }));
    }, pa = () => {
      n.autoApply && oe(L.value) && b(), vt();
    }, Zt = () => c.value ? Xe() : E(), ya = (g) => {
      L.value = g;
    }, ga = () => {
      P.value.enabled && (k.value = !0, I()), a("focus");
    }, ha = () => {
      if (P.value.enabled && (k.value = !1, u(n.modelValue), z.value)) {
        const g = wl(R.value, N.value);
        g == null || g.focus();
      }
      a("blur");
    }, ba = (g) => {
      p.value && p.value.updateMonthYear(0, {
        month: rn(g.month),
        year: rn(g.year)
      });
    }, ka = (g) => {
      u(g ?? n.modelValue);
    }, wa = (g, W) => {
      var re;
      (re = p.value) == null || re.switchView(g, W);
    }, Za = (g) => Y.value.onClickOutside ? Y.value.onClickOutside(g) : Xe(), D = (g = 0) => {
      var W;
      (W = p.value) == null || W.handleFlow(g);
    };
    return po(F, _, () => Za(he)), t({
      closeMenu: Xe,
      selectDate: et,
      clearValue: ce,
      openMenu: E,
      onScroll: C,
      formatInputValue: I,
      // exposed for testing purposes
      updateInternalModelValue: ya,
      // modify internal modelValue
      setMonthYear: ba,
      parseModel: ka,
      switchView: wa,
      toggleMenu: Zt,
      handleFlow: D,
      dpWrapMenuRef: F
    }), (g, W) => (T(), j("div", {
      ref_key: "pickerWrapperRef",
      ref: R,
      class: we(le.value),
      "data-datepicker-instance": ""
    }, [
      Ze(co, Ee({
        ref_key: "inputRef",
        ref: _,
        "input-value": o(m),
        "onUpdate:inputValue": W[0] || (W[0] = (re) => en(m) ? m.value = re : null),
        "is-menu-open": c.value
      }, g.$props, {
        onClear: ce,
        onOpen: E,
        onSetInputDate: Lt,
        onSetEmptyDate: o(b),
        onSelectDate: et,
        onToggle: Zt,
        onClose: Xe,
        onFocus: ga,
        onBlur: ha,
        onRealBlur: W[1] || (W[1] = (re) => k.value = !1),
        onTextInput: W[2] || (W[2] = (re) => g.$emit("text-input", re))
      }), Ve({ _: 2 }, [
        Re(o(ee), (re, Ae) => ({
          name: re,
          fn: ke((Fe) => [
            ue(g.$slots, re, Ne(Qe(Fe)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (T(), $e(ia(g.teleport ? Jn : "div"), Ne(Qe($.value)), {
        default: ke(() => [
          Ze(Nt, {
            name: o(fe)(o(y)),
            css: o(h) && !o(x).enabled
          }, {
            default: ke(() => [
              c.value ? (T(), j("div", Ee({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: F
              }, ge.value, {
                class: { "dp--menu-wrapper": !o(x).enabled },
                style: o(x).enabled ? void 0 : o(Q)
              }), [
                Ze(mn, Ee({
                  ref_key: "dpMenuRef",
                  ref: p
                }, g.$props, {
                  "internal-model-value": o(L),
                  "onUpdate:internalModelValue": W[3] || (W[3] = (re) => en(L) ? L.value = re : null),
                  class: { [pe.value]: !0, "dp--menu-wrapper": g.teleport },
                  "open-on-top": o(y),
                  "no-overlay-focus": r.value,
                  collapse: H.value,
                  "get-input-rect": B,
                  "is-text-input-date": v.value,
                  onClosePicker: Xe,
                  onSelectDate: et,
                  onAutoApply: ot,
                  onTimeUpdate: pa,
                  onFlowStep: W[4] || (W[4] = (re) => g.$emit("flow-step", re)),
                  onUpdateMonthYear: W[5] || (W[5] = (re) => g.$emit("update-month-year", re)),
                  onInvalidSelect: W[6] || (W[6] = (re) => g.$emit("invalid-select", o(L))),
                  onAutoApplyInvalid: W[7] || (W[7] = (re) => g.$emit("invalid-select", re)),
                  onInvalidFixedRange: W[8] || (W[8] = (re) => g.$emit("invalid-fixed-range", re)),
                  onRecalculatePosition: o(ne),
                  onTooltipOpen: W[9] || (W[9] = (re) => g.$emit("tooltip-open", re)),
                  onTooltipClose: W[10] || (W[10] = (re) => g.$emit("tooltip-close", re)),
                  onTimePickerOpen: W[11] || (W[11] = (re) => g.$emit("time-picker-open", re)),
                  onTimePickerClose: W[12] || (W[12] = (re) => g.$emit("time-picker-close", re)),
                  onAmPmChange: W[13] || (W[13] = (re) => g.$emit("am-pm-change", re)),
                  onRangeStart: W[14] || (W[14] = (re) => g.$emit("range-start", re)),
                  onRangeEnd: W[15] || (W[15] = (re) => g.$emit("range-end", re)),
                  onDateUpdate: W[16] || (W[16] = (re) => g.$emit("date-update", re)),
                  onInvalidDate: W[17] || (W[17] = (re) => g.$emit("invalid-date", re)),
                  onOverlayToggle: W[18] || (W[18] = (re) => g.$emit("overlay-toggle", re))
                }), Ve({ _: 2 }, [
                  Re(o(U), (re, Ae) => ({
                    name: re,
                    fn: ke((Fe) => [
                      ue(g.$slots, re, Ne(Qe({ ...Fe })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : J("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Vn = /* @__PURE__ */ (() => {
  const e = yo;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(go).forEach(([e, t]) => {
  e !== "default" && (Vn[e] = t);
});
export {
  Vn as default
};
