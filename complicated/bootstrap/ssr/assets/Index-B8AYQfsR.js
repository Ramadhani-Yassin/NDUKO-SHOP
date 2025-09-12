import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData } from "./CardTable-CLSKi596.js";
import { t as truncateString } from "./AsyncVueSelect-DAiIkMoY.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BZyRwGK2.js";
import "notivue";
import "lodash/throttle.js";
import "lodash/mapValues.js";
import "lodash/pickBy.js";
import "./Button-CQhKcULN.js";
import "@vuepic/vue-datepicker";
import "vue-select";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Object
    },
    users: {
      type: Object
    }
  },
  setup(__props) {
    const tableHeads = ref(["#", "Name", "Email", "Email Verified At"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "User" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Users `);
          } else {
            return [
              createTextVNode(" Users ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "users.index",
              paginatedData: __props.users,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Users (${ssrInterpolate(__props.users.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Users (" + toDisplayString(__props.users.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("users.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("a", {
                        href: _ctx.route("users.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.users.data, (user, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.users.current_page * __props.users.per_page - (__props.users.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.users.current_page * __props.users.per_page - (__props.users.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, {
                      class: "text-left flex items-center",
                      title: user.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="ml-3 font-bold text-blueGray-600"${_scopeId3}>${ssrInterpolate(unref(truncateString)(user.name, 20))}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(user.name, 20)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(user.email)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(user.email), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (user.email_verfied_at) {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"${_scopeId3}>Verified</span>`);
                          } else {
                            _push4(`<span class="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"${_scopeId3}>Unverified</span>`);
                          }
                        } else {
                          return [
                            user.email_verfied_at ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                            }, "Verified")) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                            }, "Unverified"))
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user, index) => {
                      return openBlock(), createBlock("tr", {
                        key: user.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.users.current_page * __props.users.per_page - (__props.users.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, {
                          class: "text-left flex items-center",
                          title: user.name
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(user.name, 20)), 1)
                          ]),
                          _: 2
                        }, 1032, ["title"]),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(user.email), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            user.email_verfied_at ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                            }, "Verified")) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                            }, "Unverified"))
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
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap" }, [
                createVNode("div", { class: "w-full px-4" }, [
                  createVNode(CardTable, {
                    indexRoute: "users.index",
                    paginatedData: __props.users,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Users (" + toDisplayString(__props.users.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("users.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"])
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user, index) => {
                        return openBlock(), createBlock("tr", {
                          key: user.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.users.current_page * __props.users.per_page - (__props.users.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, {
                            class: "text-left flex items-center",
                            title: user.name
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(unref(truncateString)(user.name, 20)), 1)
                            ]),
                            _: 2
                          }, 1032, ["title"]),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user.email), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              user.email_verfied_at ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200"
                              }, "Verified")) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200"
                              }, "Unverified"))
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["paginatedData", "filters", "tableHeads"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
