import { computed, watch, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withKeys, withDirectives, vModelSelect, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head, router } from "@inertiajs/vue3";
import { n as numberFormat, g as getCurrency, A as AsyncVueSelect, s as showToast } from "./AsyncVueSelect-DAiIkMoY.js";
import { _ as _sfc_main$2 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$3 } from "./SubmitButton-B3gBT10i.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@popperjs/core";
import "./ApplicationLogo-BZyRwGK2.js";
import "notivue";
import "vue-select";
import "lodash/pickBy.js";
const _sfc_main = {
  __name: "Pos",
  __ssrInlineRender: true,
  props: {
    products: Object,
    carts: Object,
    cartSubtotal: Number,
    discountType: String,
    discount: Number,
    totalDiscount: Number,
    tax: Number,
    totalTax: Number,
    total: Number,
    orderPaidByTypes: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      customer_id: null,
      total: null,
      paid: null,
      paid_through: "cash",
      custom_discount: {
        discount: 0,
        discount_type: "fixed"
      }
    });
    const isLoan = computed(() => form.paid_through === "loan");
    watch(props, (newProps) => {
      if (form.custom_discount.discount_type === "fixed") {
        form.total = newProps.total - form.custom_discount.discount;
        form.paid = newProps.total - form.custom_discount.discount;
      } else {
        form.total = numberFormat(newProps.total - newProps.cartSubtotal * (form.custom_discount.discount / 100));
        form.paid = numberFormat(newProps.total - newProps.cartSubtotal * (form.custom_discount.discount / 100));
      }
    }, { immediate: true });
    watch(() => form.custom_discount, async (newForm, oldForm) => {
      if (form.custom_discount.discount_type === "fixed") {
        form.total = props.total - form.custom_discount.discount;
        form.paid = props.total - form.custom_discount.discount;
      } else {
        form.total = numberFormat(props.total - props.cartSubtotal * (form.custom_discount.discount / 100));
        form.paid = numberFormat(props.total - props.cartSubtotal * (form.custom_discount.discount / 100));
      }
    }, {
      immediate: true,
      deep: true
    });
    watch(isLoan, (val) => {
      if (val) {
        form.paid = 0;
      }
    });
    const addToCart = (product) => {
      router.post(route("carts.store", product.id), {}, {
        preserveScroll: true,
        onSuccess: () => {
          showToast();
        }
      });
    };
    const incrementCartQuantity = (cart) => {
      router.post(route("carts.increment", cart.id), {}, {
        preserveScroll: true,
        onSuccess: () => {
          showToast();
        }
      });
    };
    const decrementCartQuantity = (cart) => {
      router.post(route("carts.decrement", cart.id), {}, {
        preserveScroll: true,
        onSuccess: () => {
          showToast();
        }
      });
    };
    const insertCartQuantity = (cart, quantity) => {
      if (cart.quantity == quantity) {
        return;
      }
      router.post(route("carts.update", cart.id), {
        quantity
      }, {
        preserveScroll: true,
        onSuccess: () => {
          showToast();
        }
      });
    };
    const deleteCart = (cart) => {
      router.post(route("carts.delete", cart.id), {
        preserveScroll: true,
        onSuccess: () => {
          showToast();
        }
      });
    };
    const deleteCartAllItems = () => {
      router.post(route("carts.delete.all"), {
        onSuccess: () => {
          showToast();
        }
      });
    };
    const createOrder = () => {
      if (!props.carts.total) {
        return;
      }
      form.post(route("orders.store"), {
        preserveScroll: true,
        onSuccess: () => {
          showToast();
          form.reset();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` POS `);
          } else {
            return [
              createTextVNode(" POS ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap" data-v-fa49b5df${_scopeId}><div class="w-full px-4" data-v-fa49b5df${_scopeId}><div class="relative -mt-16 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" data-v-fa49b5df${_scopeId}><div class="flex lg:flex-row flex-col-reverse shadow-lg" data-v-fa49b5df${_scopeId}><div class="lg:w-4/5 min-h-screen shadow-lg overflow-auto max-h-screen" data-v-fa49b5df${_scopeId}><div class="flex flex-row justify-between items-center px-5 mt-5" data-v-fa49b5df${_scopeId}><div class="text-gray-800" data-v-fa49b5df${_scopeId}><div class="font-bold text-xl" data-v-fa49b5df${_scopeId}>Products</div></div></div><div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-4 mt-4 overflow-y-auto h-4/6" data-v-fa49b5df${_scopeId}><!--[-->`);
            ssrRenderList(__props.products.data, (product, index) => {
              var _a;
              _push2(`<div role="button" class="select-none cursor-pointer transition-shadow rounded-md bg-white shadow hover:shadow-lg border border-gray-200 flex flex-col justify-between"${ssrRenderAttr("title", product.name)} data-v-fa49b5df${_scopeId}><div class="flex justify-center items-center p-1" data-v-fa49b5df${_scopeId}></div><div class="flex pb-1 px-2 text-sm" data-v-fa49b5df${_scopeId}><p class="flex-grow mr-1 whitespace-normal break-words leading-tight" data-v-fa49b5df${_scopeId}>`);
              if (product.quantity > 0) {
                _push2(`<span class="text-xs font-semibold inline-block py-0.5 px-1.5 rounded text-emerald-600 bg-emerald-200" data-v-fa49b5df${_scopeId}>${ssrInterpolate(product.quantity)}${ssrInterpolate((_a = product.unit_type) == null ? void 0 : _a.symbol)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (product.quantity < 1) {
                _push2(`<span class="text-xs font-semibold inline-block py-0.5 px-1.5 rounded text-red-600 bg-red-200" data-v-fa49b5df${_scopeId}>0</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(product.name)}</p><p class="nowrap font-semibold" data-v-fa49b5df${_scopeId}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(product.selling_price)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="lg:w-2/5" data-v-fa49b5df${_scopeId}><div class="flex flex-row items-center justify-between px-5 mt-5" data-v-fa49b5df${_scopeId}><div class="font-bold text-xl" data-v-fa49b5df${_scopeId}>Cart</div><div class="font-semibold" data-v-fa49b5df${_scopeId}><span${ssrRenderAttr("role", __props.carts.total > 0 ? "button" : null)} class="px-4 py-2 rounded-md bg-red-100 text-red-500" data-v-fa49b5df${_scopeId}>Clear(${ssrInterpolate(__props.carts.total)})</span></div></div><div class="px-5 py-2 overflow-y-auto h-60" data-v-fa49b5df${_scopeId}><!--[-->`);
            ssrRenderList(__props.carts.data, (cart) => {
              var _a;
              _push2(`<div class="${ssrRenderClass([cart.quantity > cart.product.quantity ? "bg-red-200" : "", "flex flex-row justify-between items-center mb-3"])}" data-v-fa49b5df${_scopeId}><div class="flex flex-row items-center w-2/5"${ssrRenderAttr("title", cart.product.name)} data-v-fa49b5df${_scopeId}><span class="ml-1 font-semibold text-sm whitespace-normal break-words leading-tight line-clamp-2" data-v-fa49b5df${_scopeId}>${ssrInterpolate(cart.product.name)} <br data-v-fa49b5df${_scopeId}> Q: ${ssrInterpolate(unref(numberFormat)(cart.product.quantity))} ${ssrInterpolate((_a = cart.product.unit_type) == null ? void 0 : _a.symbol)}</span></div><div class="flex justify-between" data-v-fa49b5df${_scopeId}><span role="button" class="px-3 py-0.5 rounded-l-md bg-gray-300" data-v-fa49b5df${_scopeId}>-</span><input type="number" class="font-semibold border-gray-300 px-0.5 py-0.5 w-10 text-center"${ssrRenderAttr("value", cart.quantity)} data-v-fa49b5df${_scopeId}><span role="button" class="px-3 py-0.5 rounded-r-md bg-gray-300" data-v-fa49b5df${_scopeId}>+</span></div><div class="font-semibold text-lg w-16 text-center" data-v-fa49b5df${_scopeId}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(unref(numberFormat)(cart.quantity * cart.product.selling_price))}</div><i role="button" class="fa fa-trash-alt text-red-500" data-v-fa49b5df${_scopeId}></i></div>`);
            });
            _push2(`<!--]--></div><div class="px-5 mt-1" data-v-fa49b5df${_scopeId}><div class="pt-2 rounded-md shadow-lg" data-v-fa49b5df${_scopeId}><div class="px-4 flex justify-between" data-v-fa49b5df${_scopeId}><span class="font-semibold text-sm" data-v-fa49b5df${_scopeId}>Subtotal</span><span class="font-bold" data-v-fa49b5df${_scopeId}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(__props.cartSubtotal)}</span></div><div class="px-4 flex justify-between" data-v-fa49b5df${_scopeId}><span class="font-semibold text-sm" data-v-fa49b5df${_scopeId}>Sales Tax(${ssrInterpolate(__props.tax)}%)</span><span class="font-bold" data-v-fa49b5df${_scopeId}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(__props.totalTax)}</span></div><div class="px-4 flex justify-between" data-v-fa49b5df${_scopeId}>`);
            if (__props.discountType === "fixed") {
              _push2(`<span class="font-semibold text-sm" data-v-fa49b5df${_scopeId}>Discount(${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(__props.discount)})</span>`);
            } else {
              _push2(`<span class="font-semibold text-sm" data-v-fa49b5df${_scopeId}>Discount(${ssrInterpolate(__props.discount)}%)</span>`);
            }
            _push2(`<span class="font-bold" data-v-fa49b5df${_scopeId}>- ${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(__props.totalDiscount)}</span></div><div class="px-4 flex justify-between items-center" data-v-fa49b5df${_scopeId}><div class="text-sm flex items-center flex-wrap" data-v-fa49b5df${_scopeId}><span class="font-semibold text-sm mr-1" data-v-fa49b5df${_scopeId}>Custom Discount - </span><div class="flex" data-v-fa49b5df${_scopeId}><select class="px-3 py-1 w-14 rounded-l-md bg-gray-300 border-none" data-v-fa49b5df${_scopeId}><option value="fixed" data-v-fa49b5df${ssrIncludeBooleanAttr(Array.isArray(unref(form).custom_discount.discount_type) ? ssrLooseContain(unref(form).custom_discount.discount_type, "fixed") : ssrLooseEqual(unref(form).custom_discount.discount_type, "fixed")) ? " selected" : ""}${_scopeId}>=</option><option value="percentage" data-v-fa49b5df${ssrIncludeBooleanAttr(Array.isArray(unref(form).custom_discount.discount_type) ? ssrLooseContain(unref(form).custom_discount.discount_type, "percentage") : ssrLooseEqual(unref(form).custom_discount.discount_type, "percentage")) ? " selected" : ""}${_scopeId}>%</option></select><input${ssrRenderAttr("value", unref(form).custom_discount.discount)} type="number" class="font-semibold border-gray-300 px-0.5 py-1 w-10 text-center" data-v-fa49b5df${_scopeId}></div></div>`);
            if (unref(form).custom_discount.discount_type === "fixed") {
              _push2(`<span class="font-bold" data-v-fa49b5df${_scopeId}>- ${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(unref(form).custom_discount.discount)}</span>`);
            } else {
              _push2(`<span class="font-bold" data-v-fa49b5df${_scopeId}>- ${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(unref(numberFormat)(__props.cartSubtotal * (unref(form).custom_discount.discount / 100)))}</span>`);
            }
            _push2(`</div><div class="border-t-2 mt-3 py-2 px-4 flex items-center justify-between" data-v-fa49b5df${_scopeId}><span class="font-semibold text-2xl" data-v-fa49b5df${_scopeId}>Total</span><span class="font-bold text-2xl" data-v-fa49b5df${_scopeId}>${ssrInterpolate(unref(getCurrency)())}${ssrInterpolate(unref(form).total)}</span></div></div></div><div class="px-5 mt-1" data-v-fa49b5df${_scopeId}><div class="rounded-md shadow-lg px-4 py-4" data-v-fa49b5df${_scopeId}><div data-v-fa49b5df${_scopeId}><label for="customer" class="text-stone-600 text-sm font-medium" data-v-fa49b5df${_scopeId}>Customer</label>`);
            _push2(ssrRenderComponent(AsyncVueSelect, {
              modelValue: unref(form).customer_id,
              "onUpdate:modelValue": ($event) => unref(form).customer_id = $event,
              class: "my-1",
              resource: "customers.index",
              placeholder: "Select Customer"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.customer_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-fa49b5df${_scopeId}><label for="paid" class="text-stone-600 text-sm font-medium" data-v-fa49b5df${_scopeId}>Pay</label><div class="flex mt-1" data-v-fa49b5df${_scopeId}><select id="paid_through" class="w-1/2 rounded-l-md bg-gray-300 border-none px-2 py-2 outline-none focus:outline-none" data-v-fa49b5df${_scopeId}><!--[-->`);
            ssrRenderList(__props.orderPaidByTypes, (orderPaidByType, index) => {
              _push2(`<option${ssrRenderAttr("value", orderPaidByType.value)} data-v-fa49b5df${_scopeId}>${ssrInterpolate(orderPaidByType.label)}</option>`);
            });
            _push2(`<!--]--></select><input id="paid" placeholder="Enter paid amount"${ssrRenderAttr("value", unref(form).paid)}${ssrIncludeBooleanAttr(isLoan.value) ? " disabled" : ""} type="text" class="w-full rounded-r-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline" data-v-fa49b5df${_scopeId}></div>`);
            if (isLoan.value) {
              _push2(`<p class="text-xs text-gray-600 mt-1" data-v-fa49b5df${_scopeId}>This sale will be recorded as a customer loan (no cash collected).</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.paid
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="px-5 mt-3 mb-4" data-v-fa49b5df${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              onClick: createOrder,
              processing: unref(form).processing,
              class: ["w-full px-4 py-4 rounded-md shadow-lg text-center bg-emerald-500 text-white font-semibold focus:outline-none", !__props.carts.total ? "cursor-not-allowed" : ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pay &amp; Print`);
                } else {
                  return [
                    createTextVNode("Pay & Print")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap" }, [
                createVNode("div", { class: "w-full px-4" }, [
                  createVNode("div", { class: "relative -mt-16 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" }, [
                    createVNode("div", { class: "flex lg:flex-row flex-col-reverse shadow-lg" }, [
                      createVNode("div", { class: "lg:w-4/5 min-h-screen shadow-lg overflow-auto max-h-screen" }, [
                        createVNode("div", { class: "flex flex-row justify-between items-center px-5 mt-5" }, [
                          createVNode("div", { class: "text-gray-800" }, [
                            createVNode("div", { class: "font-bold text-xl" }, "Products")
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-4 mt-4 overflow-y-auto h-4/6" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (product, index) => {
                            var _a;
                            return openBlock(), createBlock("div", {
                              key: product.id,
                              role: "button",
                              class: "select-none cursor-pointer transition-shadow rounded-md bg-white shadow hover:shadow-lg border border-gray-200 flex flex-col justify-between",
                              title: product.name,
                              onClick: ($event) => addToCart(product)
                            }, [
                              createVNode("div", { class: "flex justify-center items-center p-1" }),
                              createVNode("div", { class: "flex pb-1 px-2 text-sm" }, [
                                createVNode("p", { class: "flex-grow mr-1 whitespace-normal break-words leading-tight" }, [
                                  product.quantity > 0 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-xs font-semibold inline-block py-0.5 px-1.5 rounded text-emerald-600 bg-emerald-200"
                                  }, toDisplayString(product.quantity) + toDisplayString((_a = product.unit_type) == null ? void 0 : _a.symbol), 1)) : createCommentVNode("", true),
                                  product.quantity < 1 ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "text-xs font-semibold inline-block py-0.5 px-1.5 rounded text-red-600 bg-red-200"
                                  }, "0")) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(product.name), 1)
                                ]),
                                createVNode("p", { class: "nowrap font-semibold" }, toDisplayString(unref(getCurrency)()) + toDisplayString(product.selling_price), 1)
                              ])
                            ], 8, ["title", "onClick"]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "lg:w-2/5" }, [
                        createVNode("div", { class: "flex flex-row items-center justify-between px-5 mt-5" }, [
                          createVNode("div", { class: "font-bold text-xl" }, "Cart"),
                          createVNode("div", { class: "font-semibold" }, [
                            createVNode("span", {
                              onClick: ($event) => __props.carts.total > 0 ? deleteCartAllItems() : null,
                              role: __props.carts.total > 0 ? "button" : null,
                              class: "px-4 py-2 rounded-md bg-red-100 text-red-500"
                            }, "Clear(" + toDisplayString(__props.carts.total) + ")", 9, ["onClick", "role"])
                          ])
                        ]),
                        createVNode("div", { class: "px-5 py-2 overflow-y-auto h-60" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.carts.data, (cart) => {
                            var _a;
                            return openBlock(), createBlock("div", {
                              key: cart.id,
                              class: ["flex flex-row justify-between items-center mb-3", cart.quantity > cart.product.quantity ? "bg-red-200" : ""]
                            }, [
                              createVNode("div", {
                                class: "flex flex-row items-center w-2/5",
                                title: cart.product.name
                              }, [
                                createVNode("span", { class: "ml-1 font-semibold text-sm whitespace-normal break-words leading-tight line-clamp-2" }, [
                                  createTextVNode(toDisplayString(cart.product.name) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" Q: " + toDisplayString(unref(numberFormat)(cart.product.quantity)) + " " + toDisplayString((_a = cart.product.unit_type) == null ? void 0 : _a.symbol), 1)
                                ])
                              ], 8, ["title"]),
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("span", {
                                  role: "button",
                                  onClick: ($event) => decrementCartQuantity(cart),
                                  class: "px-3 py-0.5 rounded-l-md bg-gray-300"
                                }, "-", 8, ["onClick"]),
                                createVNode("input", {
                                  onKeyup: withKeys(($event) => insertCartQuantity(cart, $event.target.value), ["enter"]),
                                  type: "number",
                                  class: "font-semibold border-gray-300 px-0.5 py-0.5 w-10 text-center",
                                  value: cart.quantity
                                }, null, 40, ["onKeyup", "value"]),
                                createVNode("span", {
                                  onClick: ($event) => incrementCartQuantity(cart),
                                  role: "button",
                                  class: "px-3 py-0.5 rounded-r-md bg-gray-300"
                                }, "+", 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "font-semibold text-lg w-16 text-center" }, toDisplayString(unref(getCurrency)()) + toDisplayString(unref(numberFormat)(cart.quantity * cart.product.selling_price)), 1),
                              createVNode("i", {
                                onClick: ($event) => deleteCart(cart),
                                role: "button",
                                class: "fa fa-trash-alt text-red-500"
                              }, null, 8, ["onClick"])
                            ], 2);
                          }), 128))
                        ]),
                        createVNode("div", { class: "px-5 mt-1" }, [
                          createVNode("div", { class: "pt-2 rounded-md shadow-lg" }, [
                            createVNode("div", { class: "px-4 flex justify-between" }, [
                              createVNode("span", { class: "font-semibold text-sm" }, "Subtotal"),
                              createVNode("span", { class: "font-bold" }, toDisplayString(unref(getCurrency)()) + toDisplayString(__props.cartSubtotal), 1)
                            ]),
                            createVNode("div", { class: "px-4 flex justify-between" }, [
                              createVNode("span", { class: "font-semibold text-sm" }, "Sales Tax(" + toDisplayString(__props.tax) + "%)", 1),
                              createVNode("span", { class: "font-bold" }, toDisplayString(unref(getCurrency)()) + toDisplayString(__props.totalTax), 1)
                            ]),
                            createVNode("div", { class: "px-4 flex justify-between" }, [
                              __props.discountType === "fixed" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "font-semibold text-sm"
                              }, "Discount(" + toDisplayString(unref(getCurrency)()) + toDisplayString(__props.discount) + ")", 1)) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "font-semibold text-sm"
                              }, "Discount(" + toDisplayString(__props.discount) + "%)", 1)),
                              createVNode("span", { class: "font-bold" }, "- " + toDisplayString(unref(getCurrency)()) + toDisplayString(__props.totalDiscount), 1)
                            ]),
                            createVNode("div", { class: "px-4 flex justify-between items-center" }, [
                              createVNode("div", { class: "text-sm flex items-center flex-wrap" }, [
                                createVNode("span", { class: "font-semibold text-sm mr-1" }, "Custom Discount - "),
                                createVNode("div", { class: "flex" }, [
                                  withDirectives(createVNode("select", {
                                    "onUpdate:modelValue": ($event) => unref(form).custom_discount.discount_type = $event,
                                    class: "px-3 py-1 w-14 rounded-l-md bg-gray-300 border-none"
                                  }, [
                                    createVNode("option", { value: "fixed" }, "="),
                                    createVNode("option", { value: "percentage" }, "%")
                                  ], 8, ["onUpdate:modelValue"]), [
                                    [vModelSelect, unref(form).custom_discount.discount_type]
                                  ]),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => unref(form).custom_discount.discount = $event,
                                    type: "number",
                                    class: "font-semibold border-gray-300 px-0.5 py-1 w-10 text-center"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).custom_discount.discount]
                                  ])
                                ])
                              ]),
                              unref(form).custom_discount.discount_type === "fixed" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "font-bold"
                              }, "- " + toDisplayString(unref(getCurrency)()) + toDisplayString(unref(form).custom_discount.discount), 1)) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "font-bold"
                              }, "- " + toDisplayString(unref(getCurrency)()) + toDisplayString(unref(numberFormat)(__props.cartSubtotal * (unref(form).custom_discount.discount / 100))), 1))
                            ]),
                            createVNode("div", { class: "border-t-2 mt-3 py-2 px-4 flex items-center justify-between" }, [
                              createVNode("span", { class: "font-semibold text-2xl" }, "Total"),
                              createVNode("span", { class: "font-bold text-2xl" }, toDisplayString(unref(getCurrency)()) + toDisplayString(unref(form).total), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "px-5 mt-1" }, [
                          createVNode("div", { class: "rounded-md shadow-lg px-4 py-4" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "customer",
                                class: "text-stone-600 text-sm font-medium"
                              }, "Customer"),
                              createVNode(AsyncVueSelect, {
                                modelValue: unref(form).customer_id,
                                "onUpdate:modelValue": ($event) => unref(form).customer_id = $event,
                                class: "my-1",
                                resource: "customers.index",
                                placeholder: "Select Customer"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_sfc_main$2, {
                                message: unref(form).errors.customer_id
                              }, null, 8, ["message"])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "paid",
                                class: "text-stone-600 text-sm font-medium"
                              }, "Pay"),
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
                                  "onUpdate:modelValue": ($event) => unref(form).paid = $event,
                                  disabled: isLoan.value,
                                  type: "text",
                                  class: "w-full rounded-r-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                                }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                                  [vModelText, unref(form).paid]
                                ])
                              ]),
                              isLoan.value ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-gray-600 mt-1"
                              }, "This sale will be recorded as a customer loan (no cash collected).")) : createCommentVNode("", true),
                              createVNode(_sfc_main$2, {
                                message: unref(form).errors.paid
                              }, null, 8, ["message"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "px-5 mt-3 mb-4" }, [
                          createVNode(_sfc_main$3, {
                            onClick: createOrder,
                            processing: unref(form).processing,
                            class: ["w-full px-4 py-4 rounded-md shadow-lg text-center bg-emerald-500 text-white font-semibold focus:outline-none", !__props.carts.total ? "cursor-not-allowed" : ""]
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Pay & Print")
                            ]),
                            _: 1
                          }, 8, ["processing", "class"])
                        ])
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cart/Pos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa49b5df"]]);
export {
  Pos as default
};
