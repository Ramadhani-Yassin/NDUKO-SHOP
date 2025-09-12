import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData } from "./CardTable-CLSKi596.js";
import { _ as _sfc_main$2 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$3 } from "./Modal-i5NunLpR.js";
import { t as truncateString, n as numberFormat, s as showToast } from "./AsyncVueSelect-DAiIkMoY.js";
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
    products: {
      type: Object
    }
  },
  setup(__props) {
    const selectedProduct = ref(null);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const tableHeads = ref(["#", "Name", "Product Number", "Product Code", "Category", "Supplier", "Quantity", "Status", "Action"]);
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      shop_name: null,
      address: null,
      photo: null
    });
    const deleteProductModal = (product) => {
      selectedProduct.value = product;
      showDeleteModal.value = true;
    };
    const deleteProduct = () => {
      form.post(route("products.destroy", selectedProduct.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        }
      });
    };
    const closeModal = () => {
      showCreateModal.value = false;
      showEditModal.value = false;
      showDeleteModal.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Products `);
          } else {
            return [
              createTextVNode(" Products ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "products.index",
              paginatedData: __props.products,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Products (${ssrInterpolate(__props.products.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Products (" + toDisplayString(__props.products.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("products.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("products.create"),
                    buttonType: "link"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Create Product `);
                      } else {
                        return [
                          createTextVNode(" Create Product ")
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
                        href: _ctx.route("products.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"]),
                      createVNode(_sfc_main$2, {
                        href: _ctx.route("products.create"),
                        buttonType: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Create Product ")
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
                  ssrRenderList(__props.products.data, (product, index) => {
                    var _a;
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.products.current_page * __props.products.per_page - (__props.products.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.products.current_page * __props.products.per_page - (__props.products.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, {
                      class: "text-left flex items-center",
                      title: product.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="ml-3 font-bold text-blueGray-600"${_scopeId3}>${ssrInterpolate(unref(truncateString)(product.name, 15))}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(product.name, 15)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(product.product_number)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(product.product_number), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(product.product_code)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(product.product_code), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, {
                      title: product.category.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(truncateString)(product.category.name))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(truncateString)(product.category.name)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, {
                      title: (_a = product.supplier) == null ? void 0 : _a.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b;
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(truncateString)(((_a2 = product.supplier) == null ? void 0 : _a2.name) ?? "-"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(truncateString)(((_b = product.supplier) == null ? void 0 : _b.name) ?? "-")), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b;
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(numberFormat)(product.quantity))} ${ssrInterpolate((_a2 = product.unit_type) == null ? void 0 : _a2.symbol)} `);
                          if (product.quantity > 0 && product.quantity < 10) {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"${_scopeId3}>Low Stock</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (product.quantity < 1) {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"${_scopeId3}>Stock Out</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(numberFormat)(product.quantity)) + " " + toDisplayString((_b = product.unit_type) == null ? void 0 : _b.symbol) + " ", 1),
                            product.quantity > 0 && product.quantity < 10 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"
                            }, "Low Stock")) : createCommentVNode("", true),
                            product.quantity < 1 ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                            }, "Stock Out")) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (product.status === "active") {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"${_scopeId3}>Active</span>`);
                          } else {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"${_scopeId3}>Inactive</span>`);
                          }
                        } else {
                          return [
                            product.status === "active" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                            }, "Active")) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                            }, "Inactive"))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            href: _ctx.route("products.edit", product.id),
                            buttonType: "link",
                            preserveScroll: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<i class="fa fa-edit"${_scopeId4}></i>`);
                              } else {
                                return [
                                  createVNode("i", { class: "fa fa-edit" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => deleteProductModal(product),
                            type: "red"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<i class="fa fa-trash-alt"${_scopeId4}></i>`);
                              } else {
                                return [
                                  createVNode("i", { class: "fa fa-trash-alt" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, {
                              href: _ctx.route("products.edit", product.id),
                              buttonType: "link",
                              preserveScroll: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteProductModal(product),
                              type: "red"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-trash-alt" })
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (product, index) => {
                      var _a;
                      return openBlock(), createBlock("tr", {
                        key: product.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.products.current_page * __props.products.per_page - (__props.products.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, {
                          class: "text-left flex items-center",
                          title: product.name
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(product.name, 15)), 1)
                          ]),
                          _: 2
                        }, 1032, ["title"]),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(product.product_number), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(product.product_code), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, {
                          title: product.category.name
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(truncateString)(product.category.name)), 1)
                          ]),
                          _: 2
                        }, 1032, ["title"]),
                        createVNode(TableData, {
                          title: (_a = product.supplier) == null ? void 0 : _a.name
                        }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString(unref(truncateString)(((_a2 = product.supplier) == null ? void 0 : _a2.name) ?? "-")), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["title"]),
                        createVNode(TableData, null, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString(unref(numberFormat)(product.quantity)) + " " + toDisplayString((_a2 = product.unit_type) == null ? void 0 : _a2.symbol) + " ", 1),
                              product.quantity > 0 && product.quantity < 10 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"
                              }, "Low Stock")) : createCommentVNode("", true),
                              product.quantity < 1 ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                              }, "Stock Out")) : createCommentVNode("", true)
                            ];
                          }),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            product.status === "active" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                            }, "Active")) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                            }, "Inactive"))
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              href: _ctx.route("products.edit", product.id),
                              buttonType: "link",
                              preserveScroll: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteProductModal(product),
                              type: "red"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-trash-alt" })
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
              title: "Delete",
              show: showDeleteModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: deleteProduct,
              maxWidth: "sm",
              submitButtonText: "Yes, delete it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this product? `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this product? ")
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
                    indexRoute: "products.index",
                    paginatedData: __props.products,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Products (" + toDisplayString(__props.products.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("products.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"]),
                        createVNode(_sfc_main$2, {
                          href: _ctx.route("products.create"),
                          buttonType: "link"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create Product ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (product, index) => {
                        var _a;
                        return openBlock(), createBlock("tr", {
                          key: product.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.products.current_page * __props.products.per_page - (__props.products.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, {
                            class: "text-left flex items-center",
                            title: product.name
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(product.name, 15)), 1)
                            ]),
                            _: 2
                          }, 1032, ["title"]),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(product.product_number), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(product.product_code), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, {
                            title: product.category.name
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(truncateString)(product.category.name)), 1)
                            ]),
                            _: 2
                          }, 1032, ["title"]),
                          createVNode(TableData, {
                            title: (_a = product.supplier) == null ? void 0 : _a.name
                          }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString(unref(truncateString)(((_a2 = product.supplier) == null ? void 0 : _a2.name) ?? "-")), 1)
                              ];
                            }),
                            _: 2
                          }, 1032, ["title"]),
                          createVNode(TableData, null, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString(unref(numberFormat)(product.quantity)) + " " + toDisplayString((_a2 = product.unit_type) == null ? void 0 : _a2.symbol) + " ", 1),
                                product.quantity > 0 && product.quantity < 10 ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200"
                                }, "Low Stock")) : createCommentVNode("", true),
                                product.quantity < 1 ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                                }, "Stock Out")) : createCommentVNode("", true)
                              ];
                            }),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              product.status === "active" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                              }, "Active")) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                              }, "Inactive"))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                href: _ctx.route("products.edit", product.id),
                                buttonType: "link",
                                preserveScroll: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-edit" })
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => deleteProductModal(product),
                                type: "red"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-trash-alt" })
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
                title: "Delete",
                show: showDeleteModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: deleteProduct,
                maxWidth: "sm",
                submitButtonText: "Yes, delete it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this product? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
