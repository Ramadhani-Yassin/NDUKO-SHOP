import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withDirectives, vModelSelect, withKeys, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData, a as TableHead } from "./CardTable-CLSKi596.js";
import { _ as _sfc_main$2 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$4 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$3 } from "./Modal-i5NunLpR.js";
import { g as getCurrency, f as formatDatetime, t as truncateString, n as numberFormat, s as showToast } from "./AsyncVueSelect-DAiIkMoY.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BZyRwGK2.js";
import "notivue";
import "lodash/throttle.js";
import "lodash/mapValues.js";
import "lodash/pickBy.js";
import "@vuepic/vue-datepicker";
import "./SubmitButton-B3gBT10i.js";
import "vue-select";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Object
    },
    orders: {
      type: Object
    },
    orderPaidByTypes: {
      type: Object
    }
  },
  setup(__props) {
    const selectedOrder = ref(null);
    const showOrderItemsModal = ref(false);
    const showPaymentModal = ref(false);
    const showSettleModal = ref(false);
    const tableHeads = ref(["Order Number", "Customer", "Summary(" + getCurrency() + ")", "Paid", "Due", "Profit", "Loss", "Status", "Date", "Action"]);
    const form = useForm({
      amount: null,
      paid_through: "cash"
    });
    const viewOrderItemsModal = (order) => {
      selectedOrder.value = order;
      showOrderItemsModal.value = true;
    };
    const payDueOrderModal = (order) => {
      selectedOrder.value = order;
      form.amount = order.due;
      showPaymentModal.value = true;
    };
    const payOrderDue = () => {
      form.post(route("orders.pay", selectedOrder.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        }
      });
    };
    const settleOrderModal = (order) => {
      selectedOrder.value = order;
      showSettleModal.value = true;
    };
    const settleDuePayment = () => {
      form.post(route("orders.settle", selectedOrder.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        }
      });
    };
    const closeModal = () => {
      showOrderItemsModal.value = false;
      showPaymentModal.value = false;
      showSettleModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Order" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Orders `);
          } else {
            return [
              createTextVNode(" Orders ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "orders.index",
              paginatedData: __props.orders,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Orders (${ssrInterpolate(__props.orders.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Orders (" + toDisplayString(__props.orders.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("orders.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("carts.index"),
                    buttonType: "link"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create Order`);
                      } else {
                        return [
                          createTextVNode("Create Order")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("a", {
                        href: _ctx.route("orders.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"]),
                      createVNode(_sfc_main$2, {
                        href: _ctx.route("carts.index"),
                        buttonType: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Create Order")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.orders.data, (order, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<strong${_scopeId3}>#${ssrInterpolate(order.order_number)}</strong>`);
                        } else {
                          return [
                            createVNode("strong", null, "#" + toDisplayString(order.order_number), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(order.customer ? order.customer.name : "Unknown")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(order.customer ? order.customer.name : "Unknown"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, { class: "text-start" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Sub Total: ${ssrInterpolate(order.sub_total)}</span><br${_scopeId3}><span${_scopeId3}>Tax: ${ssrInterpolate(order.tax_total)}</span><br${_scopeId3}><span${_scopeId3}>Discount: ${ssrInterpolate(order.discount_total)}</span><br${_scopeId3}><span${_scopeId3}>Total: ${ssrInterpolate(order.total)}</span><br${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("span", null, "Sub Total: " + toDisplayString(order.sub_total), 1),
                            createVNode("br"),
                            createVNode("span", null, "Tax: " + toDisplayString(order.tax_total), 1),
                            createVNode("br"),
                            createVNode("span", null, "Discount: " + toDisplayString(order.discount_total), 1),
                            createVNode("br"),
                            createVNode("span", null, "Total: " + toDisplayString(order.total), 1),
                            createVNode("br")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(order.paid)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.paid), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="${ssrRenderClass(order.due > 0 ? "text-red-500 text-xl font-bold" : "")}"${_scopeId3}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(order.due)}</span><br${_scopeId3}>`);
                          if (order.due > 0) {
                            _push4(`<div class="flex"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_sfc_main$2, {
                              onClick: ($event) => payDueOrderModal(order),
                              title: "Pay Due",
                              class: "px-2"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<i class="fa fa-money-bill-wave"${_scopeId4}></i>`);
                                } else {
                                  return [
                                    createVNode("i", { class: "fa fa-money-bill-wave" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_sfc_main$2, {
                              onClick: ($event) => settleOrderModal(order),
                              type: "red",
                              class: "px-2",
                              title: "Settle"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<i class="fa fa-handshake"${_scopeId4}></i>`);
                                } else {
                                  return [
                                    createVNode("i", { class: "fa fa-handshake" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("span", {
                              class: order.due > 0 ? "text-red-500 text-xl font-bold" : ""
                            }, toDisplayString(unref(getCurrency)()) + toDisplayString(order.due), 3),
                            createVNode("br"),
                            order.due > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex"
                            }, [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => payDueOrderModal(order),
                                title: "Pay Due",
                                class: "px-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-money-bill-wave" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => settleOrderModal(order),
                                type: "red",
                                class: "px-2",
                                title: "Settle"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-handshake" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, {
                      class: order.profit > 0 ? "text-emerald-500 font-bold" : ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(order.profit)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.profit), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, {
                      class: order.loss > 0 ? "text-red-500 font-bold" : ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(order.loss)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.loss), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (order.status === "paid") {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"${_scopeId3}>Paid</span>`);
                          } else if (order.status === "partial_paid") {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"${_scopeId3}>Partial Paid</span>`);
                          } else if (order.status === "over_paid") {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-purple-600 bg-purple-200"${_scopeId3}>Over Paid</span>`);
                          } else if (order.status === "unpaid") {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"${_scopeId3}>Unpaid</span>`);
                          } else {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200"${_scopeId3}>Settled</span>`);
                          }
                        } else {
                          return [
                            order.status === "paid" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                            }, "Paid")) : order.status === "partial_paid" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"
                            }, "Partial Paid")) : order.status === "over_paid" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-purple-600 bg-purple-200"
                            }, "Over Paid")) : order.status === "unpaid" ? (openBlock(), createBlock("span", {
                              key: 3,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                            }, "Unpaid")) : (openBlock(), createBlock("span", {
                              key: 4,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200"
                            }, "Settled"))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(formatDatetime)(order.created_at))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(formatDatetime)(order.created_at)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => viewOrderItemsModal(order),
                            title: "Order Items"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<i class="fa fa-list"${_scopeId4}></i>`);
                              } else {
                                return [
                                  createVNode("i", { class: "fa fa-list" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => viewOrderItemsModal(order),
                              title: "Order Items"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-list" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</tr>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.orders.data, (order, index) => {
                      return openBlock(), createBlock("tr", {
                        key: order.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode("strong", null, "#" + toDisplayString(order.order_number), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(order.customer ? order.customer.name : "Unknown"), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, { class: "text-start" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Sub Total: " + toDisplayString(order.sub_total), 1),
                            createVNode("br"),
                            createVNode("span", null, "Tax: " + toDisplayString(order.tax_total), 1),
                            createVNode("br"),
                            createVNode("span", null, "Discount: " + toDisplayString(order.discount_total), 1),
                            createVNode("br"),
                            createVNode("span", null, "Total: " + toDisplayString(order.total), 1),
                            createVNode("br")
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.paid), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: order.due > 0 ? "text-red-500 text-xl font-bold" : ""
                            }, toDisplayString(unref(getCurrency)()) + toDisplayString(order.due), 3),
                            createVNode("br"),
                            order.due > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex"
                            }, [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => payDueOrderModal(order),
                                title: "Pay Due",
                                class: "px-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-money-bill-wave" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => settleOrderModal(order),
                                type: "red",
                                class: "px-2",
                                title: "Settle"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-handshake" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, {
                          class: order.profit > 0 ? "text-emerald-500 font-bold" : ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.profit), 1)
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(TableData, {
                          class: order.loss > 0 ? "text-red-500 font-bold" : ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.loss), 1)
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            order.status === "paid" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                            }, "Paid")) : order.status === "partial_paid" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"
                            }, "Partial Paid")) : order.status === "over_paid" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-purple-600 bg-purple-200"
                            }, "Over Paid")) : order.status === "unpaid" ? (openBlock(), createBlock("span", {
                              key: 3,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                            }, "Unpaid")) : (openBlock(), createBlock("span", {
                              key: 4,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200"
                            }, "Settled"))
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(formatDatetime)(order.created_at)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => viewOrderItemsModal(order),
                              title: "Order Items"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-list" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Order Items(" + ((_a = selectedOrder.value) == null ? void 0 : _a.order_items.length) + ")",
              show: showOrderItemsModal.value,
              onClose: closeModal,
              maxWidth: "4xl",
              showSubmitButton: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded bg-white"${_scopeId2}><div class="block w-full overflow-x-auto"${_scopeId2}><table class="items-center w-full bg-transparent border-collapse"${_scopeId2}><thead${_scopeId2}><tr${_scopeId2}>`);
                  _push3(ssrRenderComponent(TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Product Name`);
                      } else {
                        return [
                          createTextVNode("Product Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Product Number`);
                      } else {
                        return [
                          createTextVNode("Product Number")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Product Code`);
                      } else {
                        return [
                          createTextVNode("Product Code")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Price`);
                      } else {
                        return [
                          createTextVNode("Price")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Quantity`);
                      } else {
                        return [
                          createTextVNode("Quantity")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Action`);
                      } else {
                        return [
                          createTextVNode("Action")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(selectedOrder.value.order_items, (orderItem, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, {
                      class: "text-left flex items-center",
                      title: orderItem.product_json.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="ml-3 font-bold text-blueGray-600"${_scopeId3}>${ssrInterpolate(unref(truncateString)(orderItem.product_json.name, 15))}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(orderItem.product_json.name, 15)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(orderItem.product_json.product_number)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(orderItem.product_json.product_number), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(orderItem.product_json.product_code)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(orderItem.product_json.product_code), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Buying: <strong${_scopeId3}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(orderItem.product_json.buying_price)}</strong><br${_scopeId3}> Selling: <strong${_scopeId3}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(orderItem.product_json.selling_price)}</strong>`);
                        } else {
                          return [
                            createTextVNode(" Buying: "),
                            createVNode("strong", null, toDisplayString(unref(getCurrency)()) + toDisplayString(orderItem.product_json.buying_price), 1),
                            createVNode("br"),
                            createTextVNode(" Selling: "),
                            createVNode("strong", null, toDisplayString(unref(getCurrency)()) + toDisplayString(orderItem.product_json.selling_price), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2, _c, _d;
                        if (_push4) {
                          _push4(`<strong${_scopeId3}>${ssrInterpolate(unref(numberFormat)(orderItem.quantity))}${ssrInterpolate((_b2 = (_a2 = orderItem.product) == null ? void 0 : _a2.unit_type) == null ? void 0 : _b2.symbol)}</strong>`);
                        } else {
                          return [
                            createVNode("strong", null, toDisplayString(unref(numberFormat)(orderItem.quantity)) + toDisplayString((_d = (_c = orderItem.product) == null ? void 0 : _c.unit_type) == null ? void 0 : _d.symbol), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (orderItem.product_id) {
                            _push4(ssrRenderComponent(_sfc_main$2, {
                              href: _ctx.route("products.edit", orderItem.product_id),
                              buttonType: "link",
                              preserveScroll: ""
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<i class="fa fa-eye"${_scopeId4}></i>`);
                                } else {
                                  return [
                                    createVNode("i", { class: "fa fa-eye" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            orderItem.product_id ? (openBlock(), createBlock(_sfc_main$2, {
                              key: 0,
                              href: _ctx.route("products.edit", orderItem.product_id),
                              buttonType: "link",
                              preserveScroll: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-eye" })
                              ]),
                              _: 2
                            }, 1032, ["href"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</tr>`);
                  });
                  _push3(`<!--]--></tbody></table></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 rounded bg-white" }, [
                      createVNode("div", { class: "block w-full overflow-x-auto" }, [
                        createVNode("table", { class: "items-center w-full bg-transparent border-collapse" }, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode(TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Product Name")
                                ]),
                                _: 1
                              }),
                              createVNode(TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Product Number")
                                ]),
                                _: 1
                              }),
                              createVNode(TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Product Code")
                                ]),
                                _: 1
                              }),
                              createVNode(TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Price")
                                ]),
                                _: 1
                              }),
                              createVNode(TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Quantity")
                                ]),
                                _: 1
                              }),
                              createVNode(TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Action")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(selectedOrder.value.order_items, (orderItem, index) => {
                              return openBlock(), createBlock("tr", {
                                key: orderItem.id
                              }, [
                                createVNode(TableData, {
                                  class: "text-left flex items-center",
                                  title: orderItem.product_json.name
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(orderItem.product_json.name, 15)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["title"]),
                                createVNode(TableData, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(orderItem.product_json.product_number), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(TableData, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(orderItem.product_json.product_code), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(TableData, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Buying: "),
                                    createVNode("strong", null, toDisplayString(unref(getCurrency)()) + toDisplayString(orderItem.product_json.buying_price), 1),
                                    createVNode("br"),
                                    createTextVNode(" Selling: "),
                                    createVNode("strong", null, toDisplayString(unref(getCurrency)()) + toDisplayString(orderItem.product_json.selling_price), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(TableData, null, {
                                  default: withCtx(() => {
                                    var _a2, _b2;
                                    return [
                                      createVNode("strong", null, toDisplayString(unref(numberFormat)(orderItem.quantity)) + toDisplayString((_b2 = (_a2 = orderItem.product) == null ? void 0 : _a2.unit_type) == null ? void 0 : _b2.symbol), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(TableData, null, {
                                  default: withCtx(() => [
                                    orderItem.product_id ? (openBlock(), createBlock(_sfc_main$2, {
                                      key: 0,
                                      href: _ctx.route("products.edit", orderItem.product_id),
                                      buttonType: "link",
                                      preserveScroll: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("i", { class: "fa fa-eye" })
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Pay Due",
              show: showPaymentModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: payOrderDue,
              maxWidth: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex mt-1"${_scopeId2}><select id="paid_through" class="w-1/2 rounded-l-md bg-gray-300 border-none px-2 py-2 outline-none focus:outline-none"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.orderPaidByTypes, (orderPaidByType, index) => {
                    _push3(`<option${ssrRenderAttr("value", orderPaidByType.value)}${_scopeId2}>${ssrInterpolate(orderPaidByType.label)}</option>`);
                  });
                  _push3(`<!--]--></select><input id="paid" placeholder="Enter paid amount"${ssrRenderAttr("value", unref(form).amount)} type="text" class="w-full rounded-r-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.amount
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex mt-1" }, [
                        withDirectives(createVNode("select", {
                          id: "paid_through",
                          "onUpdate:modelValue": ($event) => unref(form).paid_through = $event,
                          class: "w-1/2 rounded-l-md bg-gray-300 border-none px-2 py-2 outline-none focus:outline-none"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.orderPaidByTypes, (orderPaidByType, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: orderPaidByType.value
                            }, toDisplayString(orderPaidByType.label), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).paid_through]
                        ]),
                        withDirectives(createVNode("input", {
                          id: "paid",
                          placeholder: "Enter paid amount",
                          "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                          onKeyup: withKeys(payOrderDue, ["enter"]),
                          type: "text",
                          class: "w-full rounded-r-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).amount]
                        ])
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.amount
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Due Settlement",
              show: showSettleModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: settleDuePayment,
              maxWidth: "md",
              submitButtonText: "Yes, settle it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to settle this due payment? <br${_scopeId2}><br${_scopeId2}><strong${_scopeId2}>Note: </strong>The due amount will be applied as discount. `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to settle this due payment? "),
                    createVNode("br"),
                    createVNode("br"),
                    createVNode("strong", null, "Note: "),
                    createTextVNode("The due amount will be applied as discount. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap" }, [
                createVNode("div", { class: "w-full px-4" }, [
                  createVNode(CardTable, {
                    indexRoute: "orders.index",
                    paginatedData: __props.orders,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Orders (" + toDisplayString(__props.orders.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("orders.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"]),
                        createVNode(_sfc_main$2, {
                          href: _ctx.route("carts.index"),
                          buttonType: "link"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Create Order")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.orders.data, (order, index) => {
                        return openBlock(), createBlock("tr", {
                          key: order.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode("strong", null, "#" + toDisplayString(order.order_number), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.customer ? order.customer.name : "Unknown"), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, { class: "text-start" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Sub Total: " + toDisplayString(order.sub_total), 1),
                              createVNode("br"),
                              createVNode("span", null, "Tax: " + toDisplayString(order.tax_total), 1),
                              createVNode("br"),
                              createVNode("span", null, "Discount: " + toDisplayString(order.discount_total), 1),
                              createVNode("br"),
                              createVNode("span", null, "Total: " + toDisplayString(order.total), 1),
                              createVNode("br")
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.paid), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: order.due > 0 ? "text-red-500 text-xl font-bold" : ""
                              }, toDisplayString(unref(getCurrency)()) + toDisplayString(order.due), 3),
                              createVNode("br"),
                              order.due > 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex"
                              }, [
                                createVNode(_sfc_main$2, {
                                  onClick: ($event) => payDueOrderModal(order),
                                  title: "Pay Due",
                                  class: "px-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "fa fa-money-bill-wave" })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_sfc_main$2, {
                                  onClick: ($event) => settleOrderModal(order),
                                  type: "red",
                                  class: "px-2",
                                  title: "Settle"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "fa fa-handshake" })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, {
                            class: order.profit > 0 ? "text-emerald-500 font-bold" : ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.profit), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(TableData, {
                            class: order.loss > 0 ? "text-red-500 font-bold" : ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(getCurrency)()) + toDisplayString(order.loss), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              order.status === "paid" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                              }, "Paid")) : order.status === "partial_paid" ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"
                              }, "Partial Paid")) : order.status === "over_paid" ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-purple-600 bg-purple-200"
                              }, "Over Paid")) : order.status === "unpaid" ? (openBlock(), createBlock("span", {
                                key: 3,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                              }, "Unpaid")) : (openBlock(), createBlock("span", {
                                key: 4,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200"
                              }, "Settled"))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formatDatetime)(order.created_at)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => viewOrderItemsModal(order),
                                title: "Order Items"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-list" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["paginatedData", "filters", "tableHeads"])
                ])
              ]),
              createVNode(_sfc_main$3, {
                title: "Order Items(" + ((_b = selectedOrder.value) == null ? void 0 : _b.order_items.length) + ")",
                show: showOrderItemsModal.value,
                onClose: closeModal,
                maxWidth: "4xl",
                showSubmitButton: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 rounded bg-white" }, [
                    createVNode("div", { class: "block w-full overflow-x-auto" }, [
                      createVNode("table", { class: "items-center w-full bg-transparent border-collapse" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Product Name")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Product Number")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Product Code")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Price")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Quantity")
                              ]),
                              _: 1
                            }),
                            createVNode(TableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Action")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(selectedOrder.value.order_items, (orderItem, index) => {
                            return openBlock(), createBlock("tr", {
                              key: orderItem.id
                            }, [
                              createVNode(TableData, {
                                class: "text-left flex items-center",
                                title: orderItem.product_json.name
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(orderItem.product_json.name, 15)), 1)
                                ]),
                                _: 2
                              }, 1032, ["title"]),
                              createVNode(TableData, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(orderItem.product_json.product_number), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(TableData, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(orderItem.product_json.product_code), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(TableData, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Buying: "),
                                  createVNode("strong", null, toDisplayString(unref(getCurrency)()) + toDisplayString(orderItem.product_json.buying_price), 1),
                                  createVNode("br"),
                                  createTextVNode(" Selling: "),
                                  createVNode("strong", null, toDisplayString(unref(getCurrency)()) + toDisplayString(orderItem.product_json.selling_price), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(TableData, null, {
                                default: withCtx(() => {
                                  var _a2, _b2;
                                  return [
                                    createVNode("strong", null, toDisplayString(unref(numberFormat)(orderItem.quantity)) + toDisplayString((_b2 = (_a2 = orderItem.product) == null ? void 0 : _a2.unit_type) == null ? void 0 : _b2.symbol), 1)
                                  ];
                                }),
                                _: 2
                              }, 1024),
                              createVNode(TableData, null, {
                                default: withCtx(() => [
                                  orderItem.product_id ? (openBlock(), createBlock(_sfc_main$2, {
                                    key: 0,
                                    href: _ctx.route("products.edit", orderItem.product_id),
                                    buttonType: "link",
                                    preserveScroll: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "fa fa-eye" })
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title", "show"]),
              createVNode(_sfc_main$3, {
                title: "Pay Due",
                show: showPaymentModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: payOrderDue,
                maxWidth: "sm"
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex mt-1" }, [
                      withDirectives(createVNode("select", {
                        id: "paid_through",
                        "onUpdate:modelValue": ($event) => unref(form).paid_through = $event,
                        class: "w-1/2 rounded-l-md bg-gray-300 border-none px-2 py-2 outline-none focus:outline-none"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.orderPaidByTypes, (orderPaidByType, index) => {
                          return openBlock(), createBlock("option", {
                            key: index,
                            value: orderPaidByType.value
                          }, toDisplayString(orderPaidByType.label), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).paid_through]
                      ]),
                      withDirectives(createVNode("input", {
                        id: "paid",
                        placeholder: "Enter paid amount",
                        "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                        onKeyup: withKeys(payOrderDue, ["enter"]),
                        type: "text",
                        class: "w-full rounded-r-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).amount]
                      ])
                    ]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.amount
                    }, null, 8, ["message"])
                  ])
                ]),
                _: 1
              }, 8, ["show", "formProcessing"]),
              createVNode(_sfc_main$3, {
                title: "Due Settlement",
                show: showSettleModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: settleDuePayment,
                maxWidth: "md",
                submitButtonText: "Yes, settle it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to settle this due payment? "),
                  createVNode("br"),
                  createVNode("br"),
                  createVNode("strong", null, "Note: "),
                  createTextVNode("The due amount will be applied as discount. ")
                ]),
                _: 1
              }, 8, ["show", "formProcessing"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
