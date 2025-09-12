import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, withKeys, vModelText, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData } from "./CardTable-CLSKi596.js";
import { _ as _sfc_main$2 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$4 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$3 } from "./Modal-i5NunLpR.js";
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
    suppliers: {
      type: Object
    }
  },
  setup(__props) {
    const selectedSupplier = ref(null);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const nameInput = ref(null);
    const tableHeads = ref(["#", "Name", "Email", "Phone", "Shop Name", "Action"]);
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      shop_name: null,
      address: null,
      photo: null
    });
    const createSupplierModal = () => {
      showCreateModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const editSupplierModal = (supplier) => {
      selectedSupplier.value = supplier;
      form.name = supplier.name;
      form.email = supplier.email;
      form.phone = supplier.phone;
      form.shop_name = supplier.shop_name;
      form.address = supplier.address;
      form.photo = null;
      showEditModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const deleteSupplierModal = (supplier) => {
      selectedSupplier.value = supplier;
      showDeleteModal.value = true;
    };
    const createSupplier = () => {
      form.post(route("suppliers.store"), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const updateSupplier = () => {
      form.transform((data) => ({
        ...data,
        _method: "put"
      })).post(route("suppliers.update", selectedSupplier.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const deleteSupplier = () => {
      form.post(route("suppliers.destroy", selectedSupplier.value.id), {
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
      _push(ssrRenderComponent(unref(Head), { title: "Supplier" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Suppliers `);
          } else {
            return [
              createTextVNode(" Suppliers ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "suppliers.index",
              paginatedData: __props.suppliers,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Suppliers (${ssrInterpolate(__props.suppliers.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Suppliers (" + toDisplayString(__props.suppliers.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("suppliers.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a>`);
                  _push3(ssrRenderComponent(_sfc_main$2, { onClick: createSupplierModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create Supplier`);
                      } else {
                        return [
                          createTextVNode("Create Supplier")
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
                        href: _ctx.route("suppliers.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"]),
                      createVNode(_sfc_main$2, { onClick: createSupplierModal }, {
                        default: withCtx(() => [
                          createTextVNode("Create Supplier")
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
                  ssrRenderList(__props.suppliers.data, (supplier, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.suppliers.current_page * __props.suppliers.per_page - (__props.suppliers.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.suppliers.current_page * __props.suppliers.per_page - (__props.suppliers.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, { class: "text-left flex items-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="ml-3 font-bold text-blueGray-600"${_scopeId3}>${ssrInterpolate(supplier.name)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(supplier.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(supplier.email)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(supplier.email), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(supplier.phone)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(supplier.phone), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(supplier.shop_name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(supplier.shop_name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => editSupplierModal(supplier)
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
                            onClick: ($event) => deleteSupplierModal(supplier),
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
                              onClick: ($event) => editSupplierModal(supplier)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteSupplierModal(supplier),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.suppliers.data, (supplier, index) => {
                      return openBlock(), createBlock("tr", {
                        key: supplier.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.suppliers.current_page * __props.suppliers.per_page - (__props.suppliers.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, { class: "text-left flex items-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(supplier.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(supplier.email), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(supplier.phone), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(supplier.shop_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => editSupplierModal(supplier)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteSupplierModal(supplier),
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
              onSubmitAction: createSupplier
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}><label for="name" class="text-stone-600 text-sm font-medium"${_scopeId2}>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Enter name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="email" class="text-stone-600 text-sm font-medium"${_scopeId2}>Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Enter email" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="phone" class="text-stone-600 text-sm font-medium"${_scopeId2}>Phone</label><input id="phone"${ssrRenderAttr("value", unref(form).phone)} type="text" placeholder="Enter phone" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.phone
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="shop_name" class="text-stone-600 text-sm font-medium"${_scopeId2}>Shop Name</label><input id="shop_name"${ssrRenderAttr("value", unref(form).shop_name)} type="text" placeholder="Enter shop name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.shop_name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="address" class="text-stone-600 text-sm font-medium"${_scopeId2}>Address</label><textarea id="address" type="text" rows="3" placeholder="Enter address" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>${ssrInterpolate(unref(form).address)}</textarea>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.address
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "name",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          ref_key: "nameInput",
                          ref: nameInput,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          onKeyup: withKeys(createSupplier, ["enter"]),
                          type: "text",
                          placeholder: "Enter name",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).name]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.name
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "email",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Email"),
                        withDirectives(createVNode("input", {
                          id: "email",
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          onKeyup: withKeys(createSupplier, ["enter"]),
                          type: "email",
                          placeholder: "Enter email",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).email]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.email
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "phone",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Phone"),
                        withDirectives(createVNode("input", {
                          id: "phone",
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          onKeyup: withKeys(createSupplier, ["enter"]),
                          type: "text",
                          placeholder: "Enter phone",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).phone]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.phone
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "shop_name",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Shop Name"),
                        withDirectives(createVNode("input", {
                          id: "shop_name",
                          "onUpdate:modelValue": ($event) => unref(form).shop_name = $event,
                          onKeyup: withKeys(createSupplier, ["enter"]),
                          type: "text",
                          placeholder: "Enter shop name",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).shop_name]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.shop_name
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "address",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Address"),
                        withDirectives(createVNode("textarea", {
                          id: "address",
                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                          type: "text",
                          rows: "3",
                          placeholder: "Enter address",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).address]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.address
                        }, null, 8, ["message"])
                      ])
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
              onSubmitAction: updateSupplier
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}><label for="name" class="text-stone-600 text-sm font-medium"${_scopeId2}>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Enter name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="email" class="text-stone-600 text-sm font-medium"${_scopeId2}>Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Enter email" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="phone" class="text-stone-600 text-sm font-medium"${_scopeId2}>Phone</label><input id="phone"${ssrRenderAttr("value", unref(form).phone)} type="text" placeholder="Enter phone" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.phone
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="shop_name" class="text-stone-600 text-sm font-medium"${_scopeId2}>Shop Name</label><input id="shop_name"${ssrRenderAttr("value", unref(form).shop_name)} type="text" placeholder="Enter shop name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.shop_name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="address" class="text-stone-600 text-sm font-medium"${_scopeId2}>Address</label><textarea id="address" type="text" rows="3" placeholder="Enter address" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>${ssrInterpolate(unref(form).address)}</textarea>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.address
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "name",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          ref_key: "nameInput",
                          ref: nameInput,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          onKeyup: withKeys(updateSupplier, ["enter"]),
                          type: "text",
                          placeholder: "Enter name",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).name]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.name
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "email",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Email"),
                        withDirectives(createVNode("input", {
                          id: "email",
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          onKeyup: withKeys(updateSupplier, ["enter"]),
                          type: "email",
                          placeholder: "Enter email",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).email]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.email
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "phone",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Phone"),
                        withDirectives(createVNode("input", {
                          id: "phone",
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          onKeyup: withKeys(updateSupplier, ["enter"]),
                          type: "text",
                          placeholder: "Enter phone",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).phone]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.phone
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "shop_name",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Shop Name"),
                        withDirectives(createVNode("input", {
                          id: "shop_name",
                          "onUpdate:modelValue": ($event) => unref(form).shop_name = $event,
                          onKeyup: withKeys(updateSupplier, ["enter"]),
                          type: "text",
                          placeholder: "Enter shop name",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).shop_name]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.shop_name
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "address",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Address"),
                        withDirectives(createVNode("textarea", {
                          id: "address",
                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                          type: "text",
                          rows: "3",
                          placeholder: "Enter address",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).address]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.address
                        }, null, 8, ["message"])
                      ])
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
              onSubmitAction: deleteSupplier,
              maxWidth: "sm",
              submitButtonText: "Yes, delete it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this supplier? `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this supplier? ")
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
                    indexRoute: "suppliers.index",
                    paginatedData: __props.suppliers,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Suppliers (" + toDisplayString(__props.suppliers.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("suppliers.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"]),
                        createVNode(_sfc_main$2, { onClick: createSupplierModal }, {
                          default: withCtx(() => [
                            createTextVNode("Create Supplier")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.suppliers.data, (supplier, index) => {
                        return openBlock(), createBlock("tr", {
                          key: supplier.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.suppliers.current_page * __props.suppliers.per_page - (__props.suppliers.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, { class: "text-left flex items-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "ml-3 font-bold text-blueGray-600" }, toDisplayString(supplier.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(supplier.email), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(supplier.phone), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(supplier.shop_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => editSupplierModal(supplier)
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-edit" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => deleteSupplierModal(supplier),
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
                onSubmitAction: createSupplier
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "name",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Name"),
                      withDirectives(createVNode("input", {
                        id: "name",
                        ref_key: "nameInput",
                        ref: nameInput,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        onKeyup: withKeys(createSupplier, ["enter"]),
                        type: "text",
                        placeholder: "Enter name",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.name
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "email",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Email"),
                      withDirectives(createVNode("input", {
                        id: "email",
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        onKeyup: withKeys(createSupplier, ["enter"]),
                        type: "email",
                        placeholder: "Enter email",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).email]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.email
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "phone",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Phone"),
                      withDirectives(createVNode("input", {
                        id: "phone",
                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                        onKeyup: withKeys(createSupplier, ["enter"]),
                        type: "text",
                        placeholder: "Enter phone",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).phone]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.phone
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "shop_name",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Shop Name"),
                      withDirectives(createVNode("input", {
                        id: "shop_name",
                        "onUpdate:modelValue": ($event) => unref(form).shop_name = $event,
                        onKeyup: withKeys(createSupplier, ["enter"]),
                        type: "text",
                        placeholder: "Enter shop name",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).shop_name]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.shop_name
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "address",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Address"),
                      withDirectives(createVNode("textarea", {
                        id: "address",
                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                        type: "text",
                        rows: "3",
                        placeholder: "Enter address",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).address]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.address
                      }, null, 8, ["message"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show", "formProcessing"]),
              createVNode(_sfc_main$3, {
                title: "Edit",
                show: showEditModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: updateSupplier
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "name",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Name"),
                      withDirectives(createVNode("input", {
                        id: "name",
                        ref_key: "nameInput",
                        ref: nameInput,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        onKeyup: withKeys(updateSupplier, ["enter"]),
                        type: "text",
                        placeholder: "Enter name",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.name
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "email",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Email"),
                      withDirectives(createVNode("input", {
                        id: "email",
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        onKeyup: withKeys(updateSupplier, ["enter"]),
                        type: "email",
                        placeholder: "Enter email",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).email]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.email
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "phone",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Phone"),
                      withDirectives(createVNode("input", {
                        id: "phone",
                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                        onKeyup: withKeys(updateSupplier, ["enter"]),
                        type: "text",
                        placeholder: "Enter phone",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).phone]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.phone
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "shop_name",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Shop Name"),
                      withDirectives(createVNode("input", {
                        id: "shop_name",
                        "onUpdate:modelValue": ($event) => unref(form).shop_name = $event,
                        onKeyup: withKeys(updateSupplier, ["enter"]),
                        type: "text",
                        placeholder: "Enter shop name",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).shop_name]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.shop_name
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "address",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Address"),
                      withDirectives(createVNode("textarea", {
                        id: "address",
                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                        type: "text",
                        rows: "3",
                        placeholder: "Enter address",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).address]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.address
                      }, null, 8, ["message"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show", "formProcessing"]),
              createVNode(_sfc_main$3, {
                title: "Delete",
                show: showDeleteModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: deleteSupplier,
                maxWidth: "sm",
                submitButtonText: "Yes, delete it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this supplier? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
