import { mergeProps, useSSRContext, watch, unref, withCtx, withDirectives, createVNode, vModelText } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head } from "@inertiajs/vue3";
import Chart from "chart.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@popperjs/core";
import "./ApplicationLogo-BZyRwGK2.js";
import "notivue";
const _sfc_main$4 = {
  props: {
    profit_line_chart: Object
  },
  mounted: function() {
    this.$nextTick(function() {
      var config = {
        type: "line",
        data: {
          labels: this.profit_line_chart.months,
          datasets: [
            {
              label: (/* @__PURE__ */ new Date()).getFullYear(),
              backgroundColor: "#4c51bf",
              borderColor: "#4c51bf",
              data: this.profit_line_chart.current_year,
              fill: false
            },
            {
              label: (/* @__PURE__ */ new Date()).getFullYear() - 1,
              fill: false,
              backgroundColor: "#fff",
              borderColor: "#fff",
              data: this.profit_line_chart.last_year
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white"
          },
          legend: {
            labels: {
              fontColor: "white"
            },
            align: "end",
            position: "bottom"
          },
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)"
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white"
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)"
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white"
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(255, 255, 255, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ]
          }
        }
      };
      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700" }, _attrs))}><div class="rounded-t mb-0 px-4 py-3 bg-transparent"><div class="flex flex-wrap items-center"><div class="relative w-full max-w-full flex-grow flex-1"><h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold"> Overview </h6><h2 class="text-white text-xl font-semibold"> Profit value </h2></div></div></div><div class="p-4 flex-auto"><div class="relative h-350-px"><canvas id="line-chart"></canvas></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Cards/CardLineChart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CardLineChart = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  props: {
    orders_bar_chart: Object
  },
  mounted: function() {
    this.$nextTick(function() {
      let config = {
        type: "bar",
        data: {
          labels: this.orders_bar_chart.months,
          datasets: [
            {
              label: (/* @__PURE__ */ new Date()).getFullYear(),
              backgroundColor: "#ed64a6",
              borderColor: "#ed64a6",
              data: this.orders_bar_chart.current_year,
              fill: false,
              barThickness: 8
            },
            {
              label: (/* @__PURE__ */ new Date()).getFullYear() - 1,
              fill: false,
              backgroundColor: "#4c51bf",
              borderColor: "#4c51bf",
              data: this.orders_bar_chart.last_year,
              barThickness: 8
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Orders Chart"
          },
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          legend: {
            labels: {
              fontColor: "rgba(0,0,0,.4)"
            },
            align: "end",
            position: "bottom"
          },
          scales: {
            xAxes: [
              {
                display: false,
                scaleLabel: {
                  display: true,
                  labelString: "Month"
                },
                gridLines: {
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value"
                },
                gridLines: {
                  borderDash: [2],
                  drawBorder: false,
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.2)",
                  zeroLineColor: "rgba(33, 37, 41, 0.15)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ]
          }
        }
      };
      let ctx = document.getElementById("bar-chart").getContext("2d");
      window.myBar = new Chart(ctx, config);
    });
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" }, _attrs))}><div class="rounded-t mb-0 px-4 py-3 bg-transparent"><div class="flex flex-wrap items-center"><div class="relative w-full max-w-full flex-grow flex-1"><h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold"> Performance </h6><h2 class="text-blueGray-700 text-xl font-semibold"> Total orders </h2></div></div></div><div class="p-4 flex-auto"><div class="relative h-350-px"><canvas id="bar-chart"></canvas></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Cards/CardBarChart.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CardBarChart = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  name: "card-stats",
  props: {
    statSubtitle: {
      type: String,
      default: "Traffic"
    },
    statTitle: {
      type: String,
      default: "350,897"
    },
    statArrow: {
      default: "up",
      validator: function(value) {
        return ["up", "down"].indexOf(value) !== -1;
      }
    },
    statPercent: {
      type: String,
      default: "3.48"
    },
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: {
      type: String,
      default: "text-emerald-500"
    },
    statDescripiron: {
      type: String,
      default: "Since last month"
    },
    statIconName: {
      type: String,
      default: "far fa-chart-bar"
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: "bg-red-500"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg" }, _attrs))}><div class="flex-auto p-4"><div class="flex flex-wrap"><div class="relative w-full pr-4 max-w-full flex-grow flex-1"><h5 class="text-blueGray-400 uppercase font-bold text-xs">${ssrInterpolate($props.statSubtitle)}</h5><span class="font-semibold text-xl text-blueGray-700">${ssrInterpolate($props.statTitle)}</span></div><div class="relative w-auto pl-4 flex-initial"><div class="${ssrRenderClass([[$props.statIconColor], "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"])}"><i class="${ssrRenderClass([$props.statIconName])}"></i></div></div></div><p class="text-sm text-blueGray-400 mt-4"><span class="${ssrRenderClass([[$props.statPercentColor], "mr-2"])}"><i class="${ssrRenderClass([
    $props.statArrow === "up" ? `fas fa-arrow-up` : `fas fa-arrow-down`
  ])}"></i> ${ssrInterpolate($props.statPercent)}% </span><span class="whitespace-nowrap">${ssrInterpolate($props.statDescripiron)}</span></p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Cards/CardStats.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardStats = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "HeaderStats",
  __ssrInlineRender: true,
  props: {
    total_orders: Object,
    total_profit: Object,
    total_sales: Object,
    total_expense: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap" }, _attrs))}><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`);
      _push(ssrRenderComponent(CardStats, {
        statSubtitle: "ORDERS",
        statTitle: __props.total_orders.selected,
        statArrow: __props.total_orders.stateArray,
        statPercent: __props.total_orders.percentage_change,
        statPercentColor: __props.total_orders.stateArray === "up" ? "text-emerald-500" : "text-red-500",
        statDescripiron: "Since last month",
        statIconName: "fas fa-chart-pie",
        statIconColor: "bg-red-500"
      }, null, _parent));
      _push(`</div><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`);
      _push(ssrRenderComponent(CardStats, {
        statSubtitle: "PROFIT",
        statTitle: __props.total_profit.selected,
        statArrow: __props.total_profit.stateArray,
        statPercent: __props.total_profit.percentage_change,
        statPercentColor: __props.total_profit.stateArray === "up" ? "text-emerald-500" : "text-red-500",
        statDescripiron: "Since last month",
        statIconName: "fas fa-chart-bar",
        statIconColor: "bg-orange-500"
      }, null, _parent));
      _push(`</div><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`);
      _push(ssrRenderComponent(CardStats, {
        statSubtitle: "SALES",
        statTitle: __props.total_sales.selected,
        statArrow: __props.total_sales.stateArray,
        statPercent: __props.total_sales.percentage_change,
        statPercentColor: __props.total_sales.stateArray === "up" ? "text-emerald-500" : "text-red-500",
        statDescripiron: "Since last month",
        statIconName: "fas fa-shopping-cart",
        statIconColor: "bg-pink-500"
      }, null, _parent));
      _push(`</div><div class="w-full lg:w-6/12 xl:w-3/12 px-4">`);
      _push(ssrRenderComponent(CardStats, {
        statSubtitle: "EXPENSES",
        statTitle: __props.total_expense.selected,
        statArrow: __props.total_expense.stateArray,
        statPercent: __props.total_expense.percentage_change,
        statPercentColor: __props.total_expense.stateArray === "up" ? "text-emerald-500" : "text-red-500",
        statDescripiron: "Since last month",
        statIconName: "fas fa-money-bill",
        statIconColor: "bg-emerald-500"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Headers/HeaderStats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    date: String,
    total_orders: Object,
    total_profit: Object,
    total_sales: Object,
    total_expense: Object,
    profit_line_chart: Object,
    orders_bar_chart: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      date: props.date
    });
    watch(() => form.date, async (newDateRange, oldDateRange) => {
      form.get(route("dashboard"), {
        preserveScroll: true
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="month" placeholder="Select Month"${ssrRenderAttr("value", unref(form).date)} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "month",
                placeholder: "Select Month",
                "onUpdate:modelValue": ($event) => unref(form).date = $event,
                class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, unref(form).date]
              ])
            ];
          }
        }),
        headerState: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              total_orders: __props.total_orders,
              total_profit: __props.total_profit,
              total_sales: __props.total_sales,
              total_expense: __props.total_expense
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                total_orders: __props.total_orders,
                total_profit: __props.total_profit,
                total_sales: __props.total_sales,
                total_expense: __props.total_expense
              }, null, 8, ["total_orders", "total_profit", "total_sales", "total_expense"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex flex-wrap"${_scopeId}><div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardLineChart, { profit_line_chart: __props.profit_line_chart }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full xl:w-4/12 px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardBarChart, { orders_bar_chart: __props.orders_bar_chart }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex flex-wrap" }, [
                  createVNode("div", { class: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4" }, [
                    createVNode(CardLineChart, { profit_line_chart: __props.profit_line_chart }, null, 8, ["profit_line_chart"])
                  ]),
                  createVNode("div", { class: "w-full xl:w-4/12 px-4" }, [
                    createVNode(CardBarChart, { orders_bar_chart: __props.orders_bar_chart }, null, 8, ["orders_bar_chart"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
