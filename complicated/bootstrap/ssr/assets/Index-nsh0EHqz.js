import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, withKeys, vModelText, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData } from "./CardTable-CLSKi596.js";
import { _ as _sfc_main$2 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$4 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$3 } from "./Modal-i5NunLpR.js";
import "./DashboardInputGroup-KLfMQA2p.js";
import { s as showToast } from "./AsyncVueSelect-DAiIkMoY.js";
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
    customers: {
      type: Object
    }
  },
  setup(__props) {
    const selectedCustomer = ref(null);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const nameInput = ref(null);
    const tableHeads = ref(["#", "Name", "Email", "Phone", "Action"]);
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      address: null,
      photo: null
    });
    const createCustomerModal = () => {
      showCreateModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const editCustomerModal = (customer) => {
      selectedCustomer.value = customer;
      form.name = customer.name;
      form.email = customer.email;
      form.phone = customer.phone;
      form.address = customer.address;
      form.photo = null;
      showEditModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const deleteCustomerModal = (customer) => {
      selectedCustomer.value = customer;
      showDeleteModal.value = true;
    };
    const createCustomer = () => {
      form.post(route("customers.store"), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const updateCustomer = () => {
      form.transform((data) => ({
        ...data,
        _method: "put"
      })).post(route("customers.update", selectedCustomer.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const deleteCustomer = () => {
      form.post(route("customers.destroy", selectedCustomer.value.id), {
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
      _push(ssrRenderComponent(unref(Head), { title: "Customer" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Customers `);
          } else {
            return [
              createTextVNode(" Customers ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "customers.index",
              paginatedData: __props.customers,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Customers (${ssrInterpolate(__props.customers.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Customers (" + toDisplayString(__props.customers.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("customers.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a>`);
                  _push3(ssrRenderComponent(_sfc_main$2, { onClick: createCustomerModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create Customer`);
                      } else {
                        return [
                          createTextVNode("Create Customer")
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
                        href: _ctx.route("customers.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"]),
                      createVNode(_sfc_main$2, { onClick: createCustomerModal }, {
                        default: withCtx(() => [
                          createTextVNode("Create Customer")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.customers.data, (customer, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.customers.current_page * __props.customers.per_page - (__props.customers.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.customers.current_page * __props.customers.per_page - (__props.customers.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, { class: "text-left flex items-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="ml-3 font-bold text-blueGray-600"${_scopeId3}>${ssrInterpolate(customer.name)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(customer.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(customer.email)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(customer.email), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(customer.phone)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(customer.phone), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => editCustomerModal(customer)
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
                            onClick: ($event) => deleteCustomerModal(customer),
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
                              onClick: ($event) => editCustomerModal(customer)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteCustomerModal(customer),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.customers.data, (customer, index) => {
                      return openBlock(), createBlock("tr", {
                        key: customer.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.customers.current_page * __props.customers.per_page - (__props.customers.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, { class: "text-left flex items-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(customer.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(customer.email), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(customer.phone), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => editCustomerModal(customer)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteCustomerModal(customer),
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
              title: "Create",
              show: showCreateModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: createCustomer
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><label for="name"${_scopeId2}>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Enter name" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("label", { for: "name" }, "Name"),
                      withDirectives(createVNode("input", {
                        id: "name",
                        ref_key: "nameInput",
                        ref: nameInput,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        onKeyup: withKeys(createCustomer, ["enter"]),
                        type: "text",
                        placeholder: "Enter name",
                        class: "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.name
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Edit",
              show: showEditModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: updateCustomer
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><label for="name"${_scopeId2}>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Enter name" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("label", { for: "name" }, "Name"),
                      withDirectives(createVNode("input", {
                        id: "name",
                        ref_key: "nameInput",
                        ref: nameInput,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        onKeyup: withKeys(updateCustomer, ["enter"]),
                        type: "text",
                        placeholder: "Enter name",
                        class: "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.name
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Delete",
              show: showDeleteModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: deleteCustomer,
              maxWidth: "sm",
              submitButtonText: "Yes, delete it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this customer? `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this customer? ")
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
                    indexRoute: "customers.index",
                    paginatedData: __props.customers,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Customers (" + toDisplayString(__props.customers.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("customers.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"]),
                        createVNode(_sfc_main$2, { onClick: createCustomerModal }, {
                          default: withCtx(() => [
                            createTextVNode("Create Customer")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.customers.data, (customer, index) => {
                        return openBlock(), createBlock("tr", {
                          key: customer.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.customers.current_page * __props.customers.per_page - (__props.customers.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, { class: "text-left flex items-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(customer.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(customer.email), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(customer.phone), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => editCustomerModal(customer)
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-edit" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => deleteCustomerModal(customer),
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
                title: "Create",
                show: showCreateModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: createCustomer
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("label", { for: "name" }, "Name"),
                    withDirectives(createVNode("input", {
                      id: "name",
                      ref_key: "nameInput",
                      ref: nameInput,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      onKeyup: withKeys(createCustomer, ["enter"]),
                      type: "text",
                      placeholder: "Enter name",
                      class: "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).name]
                    ]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.name
                    }, null, 8, ["message"])
                  ])
                ]),
                _: 1
              }, 8, ["show", "formProcessing"]),
              createVNode(_sfc_main$3, {
                title: "Edit",
                show: showEditModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: updateCustomer
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("label", { for: "name" }, "Name"),
                    withDirectives(createVNode("input", {
                      id: "name",
                      ref_key: "nameInput",
                      ref: nameInput,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      onKeyup: withKeys(updateCustomer, ["enter"]),
                      type: "text",
                      placeholder: "Enter name",
                      class: "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).name]
                    ]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.name
                    }, null, 8, ["message"])
                  ])
                ]),
                _: 1
              }, 8, ["show", "formProcessing"]),
              createVNode(_sfc_main$3, {
                title: "Delete",
                show: showDeleteModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: deleteCustomer,
                maxWidth: "sm",
                submitButtonText: "Yes, delete it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this customer? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Customer/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
